// Shared so the FAQ page can emit FAQPage structured data from the same source the
// accordion renders — two copies would silently drift apart.
//
// `answer` is an HTML fragment, not plain text: several answers run to multiple paragraphs
// and two of them carry a bullet list. FAQList renders it with set:html, and the structured
// data on the FAQ page strips the tags back out, so both stay fed from this one array.
// Keep the markup to <p>, <ul>/<li> and <strong> — those are the only tags styled.
export interface Faq {
	question: string;
	answer: string;
}

export const faqs: Faq[] = [
	{
		question: "What is Droparabia?",
		answer: `<p>Droparabia is an e-commerce platform built specifically for Lebanon, designed to remove the biggest obstacles that make starting an online business difficult.</p><p>Instead of buying inventory upfront, finding suppliers, arranging warehousing, packaging, delivery, and payment collection yourself, Droparabia handles the operational side for you.</p><p>You choose what you want to sell, connect your Shopify store, market your products, and focus on growing your business while Droparabia handles sourcing, inventory, fulfillment, and delivery.</p>`,
	},
	{
		question: "What does Droparabia bring to the table?",
		answer: `<p>Droparabia removes the time-consuming and expensive parts of traditional e-commerce and old-school dropshipping.</p><p>You don't need to:</p><ul><li>Purchase inventory in bulk</li><li>Rent a warehouse</li><li>Manage stock yourself</li><li>Find and negotiate with suppliers</li><li>Find your own delivery company</li><li>Handle packaging and fulfillment</li><li>Pay for inventory before you've sold it</li><li>Spend hours searching for products to test</li></ul><p>Instead, you get access to a catalog of researched products, direct supplier relationships, fulfillment infrastructure, product sourcing, Shopify integration, payment collection, AI tools, branding, educational resources, and dedicated advisors.</p><p>This lets you spend your time where it matters most: building your brand, marketing your products, and growing your store.</p>`,
	},
	{
		question: "Who is Droparabia for?",
		answer: `<p>Droparabia is for people who want to build a real e-commerce business in Lebanon, whether they're complete beginners or already experienced in online selling.</p><p>You don't need previous e-commerce experience, advanced technical skills, or a large amount of capital to get started.</p><p>However, you do need to be willing to learn, test, make mistakes, and consistently work on your business. Droparabia removes the operational friction — it doesn't remove the work required to build a successful business.</p>`,
	},
	{
		question: "Is Droparabia an easy way to make money?",
		answer: `<p>Absolutely not.</p><p>Droparabia gives you the infrastructure, products, tools, education, advisors, and support needed to make starting an e-commerce business significantly easier.</p><p>But you are still responsible for your store, marketing, advertising, content, and decisions.</p><p>There will be products that don't work, ads that don't perform, and tests that fail. That's part of building a real business.</p><p>Droparabia's goal is to make those failures cheaper and easier to learn from — not to promise that you'll become rich overnight.</p>`,
	},
	{
		question: "I don't have marketing experience. Can I still start?",
		answer: `<p>Yes.</p><p>Every Droparabia user gets access to our support community, educational resources, tutorials, and advisor groups.</p><p>Your advisors can help you understand product selection, marketing, advertising, store building, and the steps you need to take as you grow.</p><p>You don't have to figure everything out alone or learn everything from scratch.</p>`,
	},
	{
		question: "How does the money work when I make a sale?",
		answer: `<p>You are no longer limited to traditional cash-on-delivery arrangements.</p><p>Droparabia has its own delivery drivers who handle delivery and payment collection. Once the order is successfully delivered, the payment can be forwarded to your Whish Money account.</p><p>This means you can sell throughout Lebanon without having to build your own delivery and payment-collection infrastructure.</p>`,
	},
	{
		question: "How does delivery work?",
		answer: `<p>Once a customer places an order through your store, Droparabia handles the fulfillment process.</p><p>We take care of the product, packaging, and delivery through our own logistics and delivery infrastructure.</p><p>Our average delivery time is around 5–7 days across Lebanon, so you can focus on selling instead of managing individual shipments.</p>`,
	},
	{
		question: "What happens if a customer refuses or doesn't receive an order?",
		answer: `<p>If an order isn't successfully delivered, the product simply returns to our warehouse.</p><p>Because our delivery operation is handled through Droparabia's own delivery team, you don't have to find a courier yourself or personally deal with retrieving the product.</p><p>The product remains within the Droparabia fulfillment system and can be handled according to the applicable order process.</p>`,
	},
	{
		question: "Do I have to buy inventory before I sell it?",
		answer: `<p>No.</p><p>That's one of the main reasons Droparabia exists.</p><p>You don't have to purchase hundreds of units, rent storage, or gamble your money on inventory that might not sell.</p><p>Droparabia keeps track of inventory and charges you for the product when you successfully sell it.</p><p>You test products first, find what works, and then scale.</p>`,
	},
	{
		question: "Can I order a sample before selling a product?",
		answer: `<p>Yes.</p><p>You can order samples of products before committing to selling them.</p><p>Many sellers use their samples to test the product themselves and create their own UGC and advertising content. You can also send your sample directly to a UGC creator to produce content for your store.</p><p>This lets you experience the product before putting your brand behind it.</p>`,
	},
	{
		question: "What if the product I want isn't available in Droparabia's catalog?",
		answer: `<p>You can submit a product through our <strong>Product Request</strong> feature.</p><p>Send us an image or details of the product you're looking for, and we'll try to source it for you without an additional sourcing fee.</p><p>Not every request is accepted. We may reject products that are already widely available in regular stores, don't solve a meaningful problem, or don't have enough potential to become a viable online product.</p>`,
	},
	{
		question: "Can I create my own brand with Droparabia?",
		answer: `<p>Yes.</p><p>Droparabia allows you to add your own logo to eligible products using our product-branding service.</p><p>There is no minimum order quantity for this service. You pay per item sold, which gives you a way to start building a private-label-style brand without purchasing large quantities of inventory upfront.</p>`,
	},
	{
		question: "Where do Droparabia's products come from?",
		answer: `<p>We work with our own network of supplier partners, including suppliers locally in Lebanon and in China.</p><p>These supplier relationships allow us to source products at competitive prices and make them available through Droparabia's fulfillment system.</p><p>Our team researches and evaluates products before adding them to the catalog, with a focus on demand, potential margins, and suitability for the Lebanese market.</p>`,
	},
	{
		question: "How do you find your winning products?",
		answer: `<p>Our advisors continuously research products and market opportunities to identify products with potential in the Lebanese market.</p><p>The catalog is updated regularly, and our product research is also used to train and improve our AI systems so they can become better at identifying promising products and analyzing their potential.</p><p>You can also use our AI Winning Products tools to explore products that have been identified through this process.</p>`,
	},
	{
		question: "What is MajdGBT?",
		answer: `<p>MajdGBT is Droparabia's AI assistant, built around the knowledge, experience, and e-commerce expertise of our founder, Majd.</p><p>It has access to Droparabia's ecosystem and is designed to help you with things such as product research, product analysis, buyer avatars, marketing, and building your online business.</p><p>Think of it as having an AI version of the experience behind Droparabia available whenever you need it.</p>`,
	},
	{
		question: "Do I get a personal advisor?",
		answer: `<p>Yes.</p><p>Droparabia users have access to their own advisor groups within our community.</p><p>Your advisors can guide you through the process of building your store, selecting products, testing ideas, improving your marketing, and progressing through the different stages of your business.</p><p>You also have access to the wider Droparabia community, educational content, tutorials, and other resources.</p>`,
	},
	{
		question: "How long does it take to launch my store?",
		answer: `<p>You can get your store up and running in around 10–14 days.</p><p>The reason this process can be much faster than traditional e-commerce is that Droparabia removes many of the time-consuming preparations you'd normally have to handle yourself — such as finding suppliers, sourcing products, arranging fulfillment, and setting up delivery infrastructure.</p><p>Your job is to build and market your store. We handle the operational infrastructure behind it.</p>`,
	},
	{
		question: "How much money can I make with Droparabia?",
		answer: `<p>There is no fixed amount you can expect to make.</p><p>Your results depend on your product selection, marketing, advertising, consistency, and ability to learn from your results.</p><p>Across our community, beginners commonly generate around $600–$700 in monthly store revenue, while our top 10 sellers generate more than $10,000 per month.</p><p>These figures are examples of what users in our community have achieved, not guaranteed earnings or profit.</p><p>Revenue is also not the same as profit — your advertising, operating, and other business expenses still need to be taken into account.</p>`,
	},
	{
		question: "What happens if I use Droparabia for 90 days and make no sales?",
		answer: `<p>If you actively use Droparabia for 90 days, follow our instructions, make full use of the platform's features, provide proof of your activity, and make no sales whatsoever, you may qualify for our 90-day refund policy.</p><p>Eligible users can receive a full refund, along with compensation for the time and money lost using the platform, subject to the terms and conditions of the guarantee.</p><p>The guarantee is intended for users who genuinely put the system into practice. It does not apply to unused accounts or users who do not demonstrate meaningful effort.</p><p>See our full Terms &amp; Conditions for the complete requirements.</p>`,
	},
	{
		question: "Is there a catch with dropshipping?",
		answer: `<p>There is no magic button.</p><p>Dropshipping removes the need to purchase and manage inventory upfront, but it doesn't remove the responsibility of running a business.</p><p>You'll still need to choose products, build your store, create content, run ads, understand your customers, test different approaches, and learn from your results.</p><p>The difference is that Droparabia handles much of the infrastructure and operational friction that would otherwise consume your time and money.</p>`,
	},
	{
		question: "Can I eventually turn my dropshipping store into a real brand?",
		answer: `<p>Absolutely.</p><p>In fact, that's one of the paths Droparabia is designed to support.</p><p>You can start by testing products without purchasing inventory, identify what your customers actually want, and then begin building a recognizable brand around your winning products.</p><p>With our product-branding service, you can even start adding your own logo to eligible products without committing to large minimum orders.</p><p>Dropshipping can be your testing phase — not necessarily the final destination.</p>`,
	},
	{
		question: "What makes Droparabia different from traditional dropshipping?",
		answer: `<p>Traditional dropshipping often means spending hours finding products, researching suppliers, negotiating prices, arranging international shipping, and figuring out how to get products to your customers.</p><p>Droparabia brings those pieces together into one system built specifically for the Lebanese market.</p><p>You get:</p><ul><li>Product research</li><li>Supplier relationships</li><li>Product sourcing</li><li>Inventory management</li><li>Fulfillment</li><li>Delivery</li><li>Payment collection</li><li>Shopify integration</li><li>AI tools</li><li>Product branding</li><li>Educational resources</li><li>Advisor support</li><li>A community of other sellers</li></ul><p>So instead of building the entire infrastructure yourself, you can focus on the part that actually grows your business: selling.</p>`,
	},
];
