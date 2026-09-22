// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// The production host is www: nginx answers every https://droparabia.com/... request
	// with a 301 to https://www.droparabia.com/... . Everything derived from `site` —
	// canonicals, og:url, the sitemap, JSON-LD ids — has to name the host that actually
	// returns 200, or every one of them points at a redirect.
	site: 'https://www.droparabia.com',
	// Legacy URLs from the previous site. On a static build these emit an instant
	// meta-refresh page (noindex, with a canonical to the target), which is a fallback only:
	// a true 301 has to come from the nginx vhost, which lives in CloudPanel rather than in
	// this repo. Server rules take precedence over these files once added.
	redirects: {
		'/collections/all': '/',
		// No archived copy of the original survives, so the specific article it held can't be
		// recovered. The homepage blog section lists every current post — the closest thing
		// to a blog index, since /blog/ itself has no page.
		'/blog/6': '/#blog',
	},
	integrations: [
		sitemap({
			// Review submission is for existing users and is noindex — it has no business in
			// the sitemap. Redirect routes are already left out by the integration itself.
			filter: (page) => !page.includes('/leave-review/'),
		}),
	],
	build: {
		// The whole site's CSS is one ~12 KiB bundle, and fetching it was the only
		// render-blocking request left after the fonts were self-hosted — a full round trip
		// before anything could paint, which on Slow 4G is worth more than the 12 KiB it saves
		// on repeat navigations. Inlining it into each document removes that round trip from
		// the critical path entirely. ('auto' only inlines stylesheets under ~4 KiB, so it
		// would leave this one as a request.)
		inlineStylesheets: 'always',
	},
	devToolbar: {
		enabled: false,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
