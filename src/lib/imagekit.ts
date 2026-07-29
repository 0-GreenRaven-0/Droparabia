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
