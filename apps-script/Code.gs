/**
 * Droparabia reviews endpoint — Google Apps Script Web App.
 *
 * Replaces the old Cloudflare Pages Function (functions/api/reviews.js). Because this script
 * is bound to the spreadsheet itself, there is no service account, no private key, no JWT
 * signing and no SHEET_ID — SpreadsheetApp.getActive() is already authorised as the sheet's
 * owner. Nothing secret lives in this file.
 *
 * Sheet layout — tab "reviews":
 *   A timestamp | B name | C rating | D text | E approved ("approve" / "disapprove" / blank)
 *
 * Blank in column E means pending. Only rows a human sets to "approve" are ever returned.
 * The old "public" tab with the FILTER formula is no longer needed — filtering happens here.
 *
 * SETUP
 *   1. Open the sheet -> Extensions -> Apps Script. Paste this file over Code.gs.
 *   2. Deploy -> New deployment -> type "Web app".
 *        Execute as:       Me
 *        Who has access:   Anyone
 *      "Anyone" is required — visitors are not signed in to Google. It exposes only what
 *      doGet/doPost below allow, which is approved reviews out and validated rows in.
 *   3. Copy the /exec URL into REVIEWS_ENDPOINT in src/lib/reviewsApi.ts.
 *   4. Re-deploy after every edit: Deploy -> Manage deployments -> edit -> Version: New.
 *      Editing the code alone does NOT change what the live URL serves.
 */

const SHEET_NAME = "reviews";

const NAME_MIN = 2;
const NAME_MAX = 50;
const TEXT_MIN = 20;
const TEXT_MAX = 1000;

// Server-side duplicate guard. The form also enforces a cooldown in localStorage, but that is
// trivially bypassed. Apps Script web apps cannot see a reliable client IP, so this keys on the
// content instead: the same name + text cannot be submitted twice within the window.
const DUPLICATE_WINDOW_SECONDS = 10 * 60;

function jsonOutput(payload) {
	return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}

function sheet() {
	const s = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
	if (!s) throw new Error('Sheet tab "' + SHEET_NAME + '" not found.');
	return s;
}

/**
 * GET — approved reviews, newest first.
 */
function doGet() {
	try {
		const s = sheet();
		const lastRow = s.getLastRow();
		// Row 1 is the header. An empty sheet has lastRow <= 1.
		if (lastRow < 2) return jsonOutput({ reviews: [] });

		const rows = s.getRange(2, 1, lastRow - 1, 5).getDisplayValues();

		const reviews = rows
			.filter(function (row) {
				return String(row[4]).trim().toLowerCase() === "approve";
			})
			.map(function (row) {
				return {
					date: String(row[0]),
					name: String(row[1]),
					rating: parseInt(row[2], 10),
					text: String(row[3]),
				};
			})
			.filter(function (r) {
				return r.name && r.text && r.rating >= 1 && r.rating <= 5;
			})
			.reverse(); // sheet order is oldest-first; the carousel shows newest-first

		return jsonOutput({ reviews: reviews });
	} catch (err) {
		console.error("doGet failed: " + err);
		return jsonOutput({ reviews: [], error: "Failed to load reviews." });
	}
}

function validate(name, rating, text) {
	if (typeof name !== "string" || name.trim().length < NAME_MIN || name.trim().length > NAME_MAX) {
		return "Name must be " + NAME_MIN + "-" + NAME_MAX + " characters.";
	}
	if (!(rating >= 1 && rating <= 5 && rating === Math.floor(rating))) {
		return "Rating must be a whole number from 1 to 5.";
	}
	if (typeof text !== "string" || text.trim().length < TEXT_MIN || text.trim().length > TEXT_MAX) {
		return "Review must be " + TEXT_MIN + "-" + TEXT_MAX + " characters.";
	}
	return null;
}

/**
 * Sheets treats a cell value starting with = + - @ as a formula, so a review beginning with
 * "=" would land in the sheet as live, executable content that the moderator then opens.
 * A single leading space neutralises it and is invisible in the rendered review.
 */
function neutralizeFormula(value) {
	return /^[=+\-@\t\r]/.test(value) ? " " + value : value;
}

/**
 * POST — append one pending review.
 *
 * The body arrives as text/plain (see src/lib/reviewsApi.ts for why) and is parsed here.
 */
function doPost(e) {
	var body;
	try {
		body = JSON.parse(e.postData.contents);
	} catch (err) {
		return jsonOutput({ ok: false, error: "Invalid request body." });
	}

	// Honeypot: the field is hidden from real users. Bots that fill every input trip it.
	// Report success so they learn nothing, and write nothing.
	if (typeof body.website === "string" && body.website.trim() !== "") {
		return jsonOutput({ ok: true });
	}

	var name = typeof body.name === "string" ? body.name.trim() : "";
	var text = typeof body.text === "string" ? body.text.trim() : "";
	var rating = parseInt(body.rating, 10);

	var error = validate(name, rating, text);
	if (error) return jsonOutput({ ok: false, error: error });

	var cache = CacheService.getScriptCache();
	var key = "review-" + Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, name + "|" + text));
	if (cache.get(key)) {
		return jsonOutput({ ok: false, error: "You can only submit one review every 10 minutes." });
	}

	try {
		// Column E is left empty: blank means pending moderation. Only a human picking
		// "approve" from the dropdown in the sheet ever makes a review public.
		sheet().appendRow([new Date().toISOString(), neutralizeFormula(name), rating, neutralizeFormula(text), ""]);
		cache.put(key, "1", DUPLICATE_WINDOW_SECONDS);
		return jsonOutput({ ok: true });
	} catch (err) {
		console.error("doPost failed: " + err);
		return jsonOutput({ ok: false, error: "Something went wrong. Please try again later." });
	}
}
