/**
 * Client for the reviews endpoint — a Google Apps Script Web App bound to the reviews
 * spreadsheet (source of truth: apps-script/Code.gs in this repo).
 *
 * There is no server involved. The site is static, the sheet's own script handles both
 * reads and writes, and nothing secret ships to the browser: this URL is a public endpoint
 * that only ever returns approved reviews and only ever accepts a validated, unapproved row.
 *
 * After changing apps-script/Code.gs you must re-deploy it as a NEW version in the Apps
 * Script editor, or the URL below keeps serving the old code.
 */

/** The /exec URL from Deploy -> Manage deployments in the Apps Script editor. */
export const REVIEWS_ENDPOINT =
	"https://script.google.com/macros/s/AKfycbxa5KmQIfOkEULtgGP7aMKO_BDTxV7a_BsyH8XfzOYQ2wQgZIA_j_p0V_EwKx6u6LPJ1g/exec";

export interface Review {
	date: string;
	name: string;
	rating: number;
	text: string;
}

export interface SubmitPayload {
	name: string;
	rating: number;
	text: string;
	/** Honeypot field. Always send it, even empty — the script checks for it. */
	website: string;
}

/**
 * Approved reviews, newest first. Returns [] on any failure — the carousel that calls this
 * already renders its hardcoded quotes, so a dead endpoint degrades to "no extra slides"
 * rather than an error state.
 */
export async function fetchReviews(): Promise<Review[]> {
	try {
		const res = await fetch(REVIEWS_ENDPOINT, { method: "GET" });
		if (!res.ok) return [];
		const data = await res.json();
		return Array.isArray(data.reviews) ? data.reviews : [];
	} catch {
		return [];
	}
}

/**
 * Submits one review for moderation.
 *
 * The Content-Type is deliberately text/plain even though the body is JSON. Browsers send a
 * CORS preflight (OPTIONS) for any POST that isn't application/x-www-form-urlencoded,
 * multipart/form-data or text/plain — and Apps Script web apps expose only doGet and doPost,
 * so there is nothing to answer a preflight and the real request never gets sent. Labelling
 * the body text/plain keeps it a "simple request", so no preflight happens. The script parses
 * e.postData.contents itself, so the mislabelled header costs nothing.
 *
 * Same rule means no custom headers can be added here either.
 */
export async function submitReview(payload: SubmitPayload): Promise<{ ok: boolean; error?: string }> {
	const res = await fetch(REVIEWS_ENDPOINT, {
		method: "POST",
		headers: { "Content-Type": "text/plain;charset=utf-8" },
		body: JSON.stringify(payload),
	});
	// Apps Script answers 200 with {ok:false,error} for validation failures rather than a 4xx,
	// so the body is what decides, not the status.
	return await res.json();
}
