// Cloudflare Pages Function — GET/POST /api/reviews.
//
// The browser never talks to Google directly: this function holds the service-account
// credentials (env.GOOGLE_SERVICE_ACCOUNT, set via the Pages dashboard / .dev.vars locally)
// and does all the Sheets API calls itself. Pages Functions run on the Workers/V8 runtime,
// not Node, so the `googleapis` package isn't usable here — the service-account JWT is
// signed by hand with the Web Crypto API (crypto.subtle) instead.
//
// Sheet layout:
//   Tab "reviews": timestamp | name | rating | text | approved   (raw submissions, unmoderated)
//   Tab "public":  a FILTER formula mirroring only rows where approved = "approve"
//
// Same-origin only (Pages Functions and the site are served from the same domain), so no
// CORS handling is needed.

const SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const TOKEN_URL = "https://oauth2.googleapis.com/token";

// Cached for the lifetime of the isolate — saves re-minting a token (and re-signing a JWT)
// on every request while the isolate stays warm. Reset on cold start, which is fine: the
// next request just mints a fresh one.
let cachedToken = null;

function base64url(bytes) {
	let binary = "";
	for (const b of bytes) binary += String.fromCharCode(b);
	return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64urlFromString(str) {
	return base64url(new TextEncoder().encode(str));
}

function pemToArrayBuffer(pem) {
	const b64 = pem.replace(/-----BEGIN PRIVATE KEY-----/, "").replace(/-----END PRIVATE KEY-----/, "").replace(/\s+/g, "");
	const binary = atob(b64);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return bytes.buffer;
}

async function getAccessToken(env) {
	if (cachedToken && cachedToken.expiresAt > Date.now() + 30_000) {
		return cachedToken.accessToken;
	}

	const credentials = JSON.parse(env.GOOGLE_SERVICE_ACCOUNT);
	const now = Math.floor(Date.now() / 1000);
	const header = { alg: "RS256", typ: "JWT" };
	const claims = {
		iss: credentials.client_email,
		scope: SCOPE,
		aud: TOKEN_URL,
		iat: now,
		exp: now + 3600,
	};
	const unsigned = `${base64urlFromString(JSON.stringify(header))}.${base64urlFromString(JSON.stringify(claims))}`;

	const key = await crypto.subtle.importKey(
		"pkcs8",
		pemToArrayBuffer(credentials.private_key),
		{ name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
		false,
		["sign"],
	);
	const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(unsigned));
	const jwt = `${unsigned}.${base64url(new Uint8Array(signature))}`;

	const res = await fetch(TOKEN_URL, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({
			grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
			assertion: jwt,
		}),
	});
	if (!res.ok) throw new Error(`Token request failed: ${res.status}`);
	const data = await res.json();
	cachedToken = { accessToken: data.access_token, expiresAt: Date.now() + data.expires_in * 1000 };
	return data.access_token;
}

function json(body, status = 200, extraHeaders = {}) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { "Content-Type": "application/json", ...extraHeaders },
	});
}

export async function onRequestGet({ env }) {
	try {
		const token = await getAccessToken(env);
		const range = "public!A:D";
		const url = `https://sheets.googleapis.com/v4/spreadsheets/${env.SHEET_ID}/values/${encodeURIComponent(range)}`;
		const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
		if (!res.ok) throw new Error(`Sheets read failed: ${res.status}`);
		const data = await res.json();
		const rows = data.values ?? [];

		// The FILTER formula's own cell (or a header row) can end up in the range too — only
		// keep rows that actually look like a review: name present and rating a real 1-5 int.
		const reviews = rows
			.map(([date, name, rating, text]) => ({
				date: typeof date === "string" ? date : "",
				name: typeof name === "string" ? name : "",
				rating: Number.parseInt(rating, 10),
				text: typeof text === "string" ? text : "",
			}))
			.filter((r) => r.name && r.text && Number.isInteger(r.rating) && r.rating >= 1 && r.rating <= 5)
			.reverse(); // sheet rows are in submission order; newest-first for display

		return json({ reviews }, 200, { "Cache-Control": "no-store" });
	} catch (err) {
		// Logged server-side only — visitors never see stack traces/API error bodies, just a
		// generic message the display component turns into "Couldn't load reviews right now."
		console.error("GET /api/reviews failed:", err);
		return json({ reviews: [], error: "Failed to load reviews." }, 502);
	}
}

const NAME_MIN = 2;
const NAME_MAX = 50;
const TEXT_MIN = 20;
const TEXT_MAX = 1000;
const RATE_LIMIT_MS = 10 * 60 * 1000;

// Best-effort only: this Map lives in isolate memory, so it resets on cold start and isn't
// shared across Cloudflare's edge locations. It stops casual double-submits from the same
// warm isolate; it is not a substitute for a durable store (KV/D1) if abuse becomes an issue.
const rateLimitMap = new Map();

function validate({ name, rating, text }) {
	if (typeof name !== "string" || name.trim().length < NAME_MIN || name.trim().length > NAME_MAX) {
		return `Name must be ${NAME_MIN}-${NAME_MAX} characters.`;
	}
	if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
		return "Rating must be a whole number from 1 to 5.";
	}
	if (typeof text !== "string" || text.trim().length < TEXT_MIN || text.trim().length > TEXT_MAX) {
		return `Review must be ${TEXT_MIN}-${TEXT_MAX} characters.`;
	}
	return null;
}

export async function onRequestPost({ request, env }) {
	let body;
	try {
		body = await request.json();
	} catch {
		return json({ ok: false, error: "Invalid request body." }, 400);
	}

	const { name, rating, text, website } = body ?? {};

	// Honeypot: real users never fill this in (it's hidden from view). Bots that fill every
	// field trip it — pretend success so they don't learn anything, but write nothing.
	if (typeof website === "string" && website.trim() !== "") {
		return json({ ok: true });
	}

	const parsedRating = typeof rating === "number" ? rating : Number.parseInt(rating, 10);
	const error = validate({ name, rating: parsedRating, text });
	if (error) return json({ ok: false, error }, 400);

	const ip = request.headers.get("CF-Connecting-IP") || "unknown";
	const now = Date.now();
	const lastSubmit = rateLimitMap.get(ip);
	if (lastSubmit && now - lastSubmit < RATE_LIMIT_MS) {
		return json({ ok: false, error: "You can only submit one review every 10 minutes." }, 429);
	}

	try {
		const token = await getAccessToken(env);
		const range = "reviews!A:E";
		const url = `https://sheets.googleapis.com/v4/spreadsheets/${env.SHEET_ID}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED`;
		const res = await fetch(url, {
			method: "POST",
			headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
			body: JSON.stringify({
				// Column E (approved) is left empty — blank means pending moderation. Only a
				// human editing the sheet ever writes "approve" there.
				values: [[new Date().toISOString(), name.trim(), parsedRating, text.trim(), ""]],
			}),
		});
		if (!res.ok) throw new Error(`Sheets append failed: ${res.status}`);

		rateLimitMap.set(ip, now);
		return json({ ok: true });
	} catch (err) {
		console.error("POST /api/reviews failed:", err);
		return json({ ok: false, error: "Something went wrong. Please try again later." }, 502);
	}
}
