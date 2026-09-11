// Every image under public/ was pushed to ImageKit (see scripts/upload-to-imagekit.mjs,
// scripts/imagekit-urls.json for the full mapping) so pages fetch a CDN-hosted, on-the-fly
// transformed/optimized image instead of an unoptimized static file from this origin.
// Folder names with spaces were sanitized to underscores during upload, so this mirrors
// that same sanitization when building the URL back from a /public path.
const IMAGEKIT_BASE = "https://ik.imagekit.io/greenraven/droparabia";

export function ik(path: string, transform?: string): string {
	const clean = path.replace(/^\//, "");
	const encoded = clean
		.split("/")
		.map((segment) => encodeURIComponent(segment.replace(/\s+/g, "_")))
		.join("/");
	const url = `${IMAGEKIT_BASE}/${encoded}`;
	return transform ? `${url}?tr=${transform}` : url;
}

/**
 * Builds a `srcset` of the same image at several widths, so a phone downloads a phone-sized
 * file instead of the desktop original. Without this the hero screenshot shipped its full
 * 1600px, 95 KiB self to a 364px-wide viewport — about 90 KiB of pure waste on the exact
 * request that decides LCP.
 *
 * Pair it with a `sizes` attribute describing the rendered width at each breakpoint; the
 * browser picks the candidate from that, not from the viewport.
 */
export function ikSrcSet(path: string, widths: number[], quality = 80): string {
	return widths.map((w) => `${ik(path, `w-${w},q-${quality}`)} ${w}w`).join(", ");
}

/**
 * Same thing for an image already stored as a full ImageKit URL rather than a /public path —
 * the tool screenshots in src/data/tools.ts live under a different folder prefix than ik()'s
 * base, so they can't be rebuilt from a path.
 */
export function ikSrcSetFromUrl(url: string, widths: number[], quality = 80): string {
	const sep = url.includes("?") ? "&" : "?";
	return widths.map((w) => `${url}${sep}tr=w-${w},q-${quality} ${w}w`).join(", ");
}
