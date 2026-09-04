// Single source of truth for per-tool content, used by the shared /tools/[slug] template.
// Header.astro, Tools.astro, and Footer.astro (final-CTA hex chain) each keep their own
// lighter copies of the tool list (label/icon/href only) for their specific nav/decorative
// uses — this file is the one with the actual page content (description, features, perks).

export interface Tool {
	slug: string;
	label: string;
	tagline: string;
	// Optional per-tool hero screenshot (plain, no feature highlighted). Falls back to the
	// generic placeholder for tools that don't have a dedicated one yet.
	heroImage?: string;
	// When set, the page shows a single "example" image section instead of the feature
	// tabs — for tools where one screenshot tells the whole story better than a tab list.
	exampleImage?: string;
	// Lucide raw path data (npm: "lucide"), inlined as a string for set:html — same
	// technique used across Header.astro / Tools.astro / Footer.astro.
	icon: string;
	color: string;
	description: {
		heading: string;
		paragraph: string;
	};
	features: { title: string; description: string; image?: string }[];
	perksIntro: string;
	perks: { title: string; description: string }[];
}

export const tools: Tool[] = [
	{
		slug: "find-products",
		label: "Find Products",
		tagline: "A catalog of in-demand & proven winning products",
		// Search
		icon: '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
		color: "#2745ff",
		heroImage: "https://ik.imagekit.io/greenraven/Droparabia%20Official%20Website/Find%20Products/find-product.png",
		description: {
			heading: "Discover products that actually sell",
			paragraph:
				"Instead of searching for hours on Ali-baba or Ali-express to find a product to sell, Droparabia sources a huge variety of products for you that are in great demand and actually sell!",
		},
		features: [
			{
				title: "Filter by niche",
				description: "Narrow the catalog down to the exact category your store needs, from Health & Beauty to Electronics.",
				image: "https://ik.imagekit.io/greenraven/Droparabia%20Official%20Website/Find%20Products/findproduct-niche.png",
			},
			{
				title: "Order a sample",
				description: "Request a physical sample before committing, so you know exactly what you're selling.",
				image: "https://ik.imagekit.io/greenraven/Droparabia%20Official%20Website/Find%20Products/findproduct-sample.png",
			},
			{
				title: "One-click import",
				description: "Upload any product directly to your Shopify store with one click.",
				image: "https://ik.imagekit.io/greenraven/Droparabia%20Official%20Website/Find%20Products/findproduct-add.png",
			},
		],
		perksIntro: "Find Products is built to get you to a sellable product fast, without the guesswork.",
		perks: [
			{ title: "No searching for hours for a product to sell", description: "Droparabia already sources the highest selling catalog so you don't have to spend hours finding and qualifying a product" },
			{ title: "No inventory owning and management", description: "You choose your product and sell it directly on your own website without owning a single product using our Shopify integration system" },
			{ title: "Variety of most profitable niches covered", description: "Droparabia has a catalog of winning products across all niches" },
		],
	},
	{
		slug: "ai-winning-products",
		label: "AI Winning Products",
		tagline: "Not sure what to sell? AI will help you decide",
		// Sparkles
		icon: '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',
		color: "#213de9",
		heroImage: "https://ik.imagekit.io/greenraven/Droparabia%20Official%20Website/AI%20Product%20Hunter/AI-product-hunter.png",
		description: {
			heading: "Your AI-powered product scout",
			paragraph:
				"Explore a library of best-selling products, handpicked by AI and backed by real data and analysis.",
		},
		features: [
			{
				title: "AI score & analysis",
				description:
					"Every product gets an AI score out of 100, broken down across trend, competition, margin, saturation, impulse buy, and repeat purchase potential.",
				image: "https://ik.imagekit.io/greenraven/Droparabia%20Official%20Website/AI%20Product%20Hunter/AI-product-hunter-analysis.png",
			},
			{
				title: "Sell recommendation",
				description:
					"See platform activity trends, a variant-by-variant profit breakdown, and a clear sell recommendation backed by a winning product score.",
				image: "https://ik.imagekit.io/greenraven/Droparabia%20Official%20Website/AI%20Product%20Hunter/AI-product-hunter-recommendation.png",
			},
		],
		perksIntro: "AI Winning Products does the market research so you don't have to.",
		perks: [
			{ title: "Recommendation backed by real data", description: "Our AI gives you data backed recommendations of what to sell, with full analysis behind its recommendation" },
			{ title: "Target avatar based analysis", description: "It gives you full analysis on each product's ideal target audience so you have a clear idea how to market this product to that person" },
			{ title: "Time saving decision making", description: "You don't have to scratch your head for hours to decide, or hop on ChatGPT or Claude to get their recommendation!" },
		],
	},
	{
		slug: "ai-studio",
		label: "AI Studio",
		tagline: "Generate your ads in few seconds with AI Studio",
		// WandSparkles
		icon: '<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/>',
		color: "#1c35d3",
		heroImage: "https://ik.imagekit.io/greenraven/Droparabia%20Official%20Website/AI%20Studio/AI%20studio.png",
		exampleImage: "https://ik.imagekit.io/greenraven/Droparabia%20Official%20Website/AI%20Studio/AI%20Studio%20example.png",
		description: {
			heading: "Studio-quality creatives, without the studio",
			paragraph:
				"Leverage our AI studio to create your own powerful advertising videos for your products rather than re-using other creators' content and risking a ban.",
		},
		features: [
			{ title: "Instant ad creatives", description: "Generate ready-to-post ad images and videos in a few clicks." },
			{ title: "Background & lighting fixes", description: "Turn flat product photos into polished, professional shots." },
			{ title: "AI-written copy", description: "Get product descriptions and ad captions tailored to your niche." },
		],
		perksIntro: "AI Studio replaces the design and copywriting work most sellers skip entirely.",
		perks: [
			{ title: "No more reusing or stealing content", description: "You no longer have to steal content from other platforms and risk getting banned for running ads on them!" },
			{ title: "Your own generated video advertisements", description: "Get your very own video advertisements generated through your own prompts and instructions" },
			{ title: "Adaptability for each product and use case", description: "This AI already has a clear understanding of each product and how it is used — just explain how you want to market it and you're good to go!" },
		],
	},
	{
		slug: "branding",
		label: "Branding",
		tagline: "Build your own brand identity and stand out from the competition",
		// Tag
		icon: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
		color: "#162dbd",
		heroImage: "https://ik.imagekit.io/greenraven/Droparabia%20Official%20Website/Branding/branding%20example.png",
		description: {
			heading: "Look like a brand, not a dropshipper",
			paragraph:
				"Rather than selling a product like \"everyone else\", customize your products with your own brand's logo with our laser printing machine!",
		},
		features: [],
		perksIntro: "Branding handles the identity work that makes buyers trust a store enough to check out.",
		perks: [
			{ title: "Create your own unique brand", description: "Create your own brand identity instead of looking like a cheap dropshipping store" },
			{ title: "Get distinguished from your competitors", description: "Stand out from the competition and become a recognizable brand right on the spot" },
			{ title: "Print on-demand only per sold product", description: "No more burning hundreds on private labeling lots of products at once — only print on each product before you send it to your customers" },
		],
	},
	{
		slug: "product-request",
		label: "Product Request",
		tagline: "Looking for a certain product? we'll find it for you",
		// PackagePlus
		icon: '<path d="M12 22V12"/><path d="M16 17h6"/><path d="M19 14v6"/><path d="M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955"/><path d="M3.29 7 12 12l8.71-5"/><path d="m7.5 4.27 8.997 5.148"/>',
		color: "#1124a8",
		heroImage: "https://ik.imagekit.io/greenraven/Droparabia%20Official%20Website/Request%20Product/Product-request.png",
		exampleImage: "https://ik.imagekit.io/greenraven/Droparabia%20Official%20Website/Request%20Product/Request%20a%20product%20example.png",
		description: {
			heading: "Can't find it? We'll source it for you",
			paragraph:
				"Instead of dealing with suppliers yourself and paying shipment fees, just give us an image of the product that's available on our catalog and we'll source it for you without extra fees!",
		},
		features: [],
		perksIntro: "Product Request is there for the moment the catalog doesn't have what you need yet.",
		perks: [
			{ title: "No dealing with suppliers yourself", description: "Just give us a screenshot of the product you want to ship and let Droparabia handle the rest" },
			{ title: "No huge shipment fees or risk of scam", description: "Free yourself from shipping fees and the risk of getting scammed" },
			{ title: "Research and supplying done without extra fees", description: "Droparabia will source these products for you without any additional fees" },
		],
	},
	{
		slug: "leader-board",
		label: "Leader Board",
		tagline: "Build your profitable online store while climbing the ranks",
		// Trophy
		icon: '<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"/><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"/><path d="M18 9h1.5a1 1 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6 9H4.5a1 1 0 0 1 0-5H6"/>',
		color: "#06147c",
		heroImage: "https://ik.imagekit.io/greenraven/Droparabia%20Official%20Website/Leaderboard/leaderboard.png",
		description: {
			heading: "Compete. Climb. Get recognized.",
			paragraph:
				"Who said building and running an online business can't be a fun competition? You'll also be a part of a wholesome community and make new friends!",
		},
		features: [],
		perksIntro: "The Leader Board turns your store's performance into something visible and worth chasing.",
		perks: [
			{ title: "Grow your business alongside other sellers in the community", description: "The best way to grow your business is to do it alongside ambitious people who want the same thing as you" },
			{ title: "Participate in events and giveaways", description: "Which will allow you to gain more knowledge and earn interesting rewards" },
			{ title: "Affiliate program for top performing users", description: "The top 5% highest sellers will have a chance of joining the affiliate program to assist in growing the community" },
		],
	},
];

export function getToolBySlug(slug: string): Tool | undefined {
	return tools.find((t) => t.slug === slug);
}
