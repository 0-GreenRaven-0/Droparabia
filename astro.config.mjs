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
	// Legacy URLs from the previous site are NOT listed here. Astro's `redirects` emit a
	// meta-refresh page carrying `noindex`, and that tag is what lands them in Search
	// Console's "Excluded by noindex" report rather than letting them consolidate into their
	// target. They're hand-written stubs in public/ instead — same instant refresh, plus a
	// canonical, minus the noindex. A real 301 would still be better, but it has to come from
	// the nginx vhost in CloudPanel, which is out of scope for this repo.
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
