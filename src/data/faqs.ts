// Shared so the FAQ page can emit FAQPage structured data from the same source the
// accordion renders — two copies would silently drift apart.
export interface Faq {
	question: string;
	answer: string;
}

export const faqs: Faq[] = [
	{
		question: "What is Droparabia?",
		answer:
			"Droparabia is the first dropshipping platform in Lebanon, and very soon in the MENA region, inspired by CJ Dropshipping and DSers but built for the Lebanese and MENA market. It was built to solve the common problems that cause most e-com owners and dropshippers to fail in their businesses.",
	},
	{
		question: "What does Droparabia bring to the table?",
		answer:
			"Droparabia removes all the annoying, money-burning, and time-consuming aspects found in traditional e-commerce and old dropshipping, including purchasing, owning, and managing inventory; the risk of purchasing products in bulk that might not sell; finding reliable third party services such as delivery companies, packaging companies, and warehouses; dealing with risky suppliers and the headache of negotiations; and requiring huge upfront investments, like traditional e-commerce's minimum of $3,000.",
	},
	{
		question: "Who is Droparabia for?",
		answer:
			"Droparabia is for e-commerce brands, dropshippers, or anyone looking to start their own online business, regardless of their experience in digital marketing, education level, or technical skills, who wants to invest their time and budget directly rather than becoming a victim of beginner mistakes like finding the right product to sell, managing inventory, or handling delivery.",
	},
	{
		question: "Is Droparabia an easy way to make money?",
		answer:
			"Absolutely not. Droparabia is for people who are serious about building a successful online business and are ready to put in the effort required, even if they fail at first. Droparabia makes it easier for you to create your own business; whether it succeeds or fails depends on your effort.",
	},
	{
		question: "Isn't it better to just start traditional e-commerce?",
		answer:
			"Traditional e-commerce means buying hundreds of products upfront, storing them, and hoping they sell. If they don't, you're stuck with dead inventory and wasted money. Dropshipping with Droparabia lets you test products with zero inventory risk. Once you find winners, you can then scale, or even move to traditional e-commerce, if you want. But why bet your savings when you can test first?",
	},
	{
		question: "I don't have marketing experience, or I don't know how to manage social media",
		answer:
			"That's exactly why we offer a dedicated support community for all Droparabia users, where they can access tons of free courses and prerecorded tutorials, plus a team of experienced advisors ready to guide you so you never have to learn anything from scratch!",
	},
	{
		question: "Do I get a refund if Droparabia fails to deliver on its promises?",
		answer:
			"We are confident in our platform and its capabilities in helping others start and grow their businesses, which is why we have a full refund policy, plus compensation for the time and money lost using this platform, if the user followed all our instructions and made full use of Droparabia's features (with proof provided) but made no sales whatsoever within 90 days.",
	},
];
