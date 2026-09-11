// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://droparabia.com',
	integrations: [sitemap()],
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
