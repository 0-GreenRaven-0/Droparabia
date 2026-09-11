// Keeps the *.pages.dev deployment URL out of search results so it can't compete with
// www.droparabia.com for the same content.
//
// This has to be a Function rather than an entry in public/_headers: _headers rules match on
// path only, and the header must apply to one hostname and not the other. Every page already
// carries <link rel="canonical" href="https://droparabia.com/..."> (Astro builds it from the
// `site` config), which is a strong hint on its own — but a canonical is advisory and
// X-Robots-Tag is a directive, so the two together are what actually keeps the preview domain
// out of the index.
//
// Scoped deliberately to hostnames ending in .pages.dev: the custom domain is untouched and
// keeps serving no robots header at all.
export async function onRequest(context) {
	const response = await context.next();

	const { hostname } = new URL(context.request.url);
	if (!hostname.endsWith(".pages.dev")) return response;

	// Response headers are immutable once returned from the asset handler, so rebuild it.
	const tagged = new Response(response.body, response);
	tagged.headers.set("X-Robots-Tag", "noindex, nofollow");
	return tagged;
}
