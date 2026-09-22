// Central EN/AR/FR string table for the client-side language toggle. Any element carrying
// data-i18n="key" gets its textContent swapped to translations[key][lang] whenever the
// language changes (see the applyTranslations script wired up in Layout.astro) — this only
// covers text, not layout direction (that's handled separately via the `dir` attribute set
// in Header.astro's setLang(), which only Arabic flips to RTL).
export type Lang = "en" | "ar" | "fr";

// Every language the toggle offers, in the order the menus list them.
export const LANGS: readonly Lang[] = ["en", "ar", "fr"];

// Single source of truth for "which language are we in right now" — every client script
// that reads the stored preference funnels through this so an unknown/absent value always
// falls back to English instead of silently indexing translations with a bad key.
export function currentLang(): Lang {
	const stored = localStorage.getItem("lang");
	return stored === "ar" || stored === "fr" ? stored : "en";
}

export const translations: Record<string, Record<Lang, string>> = {
	"nav.tools": { en: "Tools", ar: "الأدوات", fr: "Outils" },
	"nav.resources": { en: "Resources", ar: "الموارد", fr: "Ressources" },
	"nav.reviews": { en: "Reviews", ar: "التقييمات", fr: "Avis" },
	"nav.contact": { en: "Contact", ar: "تواصل معنا", fr: "Contact" },
	"nav.dropvault": { en: "Dropvault Community", ar: "مجتمع دروب فولت", fr: "Communauté Dropvault" },
	"nav.login": { en: "Login", ar: "تسجيل الدخول", fr: "Connexion" },

	"hero.headline": {
		en: `<span class="block text-2xl leading-[1.3] sm:text-3xl md:text-[2.5rem] rtl:leading-[1.85]">Everything you need to build a</span><span class="hero-gradient-text block text-3xl leading-[1.3] sm:text-4xl md:text-[3.3rem] md:whitespace-nowrap rtl:-mt-[0.38em] rtl:leading-[1.85]">successful &amp; high-earning</span><span class="block text-2xl leading-[1.3] sm:text-3xl md:text-[2.5rem] rtl:leading-[1.85]">e-commerce store in Lebanon</span>`,
		ar: `<span class="block text-2xl leading-[1.3] sm:text-3xl md:text-[2.5rem] rtl:leading-[1.85]">كل ما تحتاجه لمتجر إلكتروني</span><span class="hero-gradient-text block text-3xl leading-[1.3] sm:text-4xl md:text-[3.3rem] md:whitespace-nowrap rtl:-mt-[0.38em] rtl:leading-[1.85]">ناجح وعالي الربح</span><span class="block text-2xl leading-[1.3] sm:text-3xl md:text-[2.5rem] rtl:leading-[1.85]">في لبنان</span>`,
		fr: `<span class="block text-2xl leading-[1.3] sm:text-3xl md:text-[2.5rem] rtl:leading-[1.85]">Tout ce qu'il vous faut pour une boutique e-commerce</span><span class="hero-gradient-text block text-3xl leading-[1.3] sm:text-4xl md:text-[3.3rem] md:whitespace-nowrap rtl:-mt-[0.38em] rtl:leading-[1.85]">performante et très rentable</span><span class="block text-2xl leading-[1.3] sm:text-3xl md:text-[2.5rem] rtl:leading-[1.85]">au Liban</span>`,
	},
	"hero.subheadline": {
		en: `Droparabia allows you to start dropshipping in Lebanon by helping you find winning products and deliver them to your customer's doorstep without spending a single dollar on inventory`,
		ar: `يتيح لك دروب أرابيا بدء الدروبشيبينغ في لبنان من خلال مساعدتك على إيجاد المنتجات الرابحة وتوصيلها إلى باب عميلك دون إنفاق دولار واحد على المخزون`,
		fr: `Droparabia vous permet de vous lancer dans le dropshipping au Liban en vous aidant à trouver des produits gagnants et à les livrer directement chez vos clients sans dépenser un seul dollar en stock`,
	},

	"cta.getStarted": { en: "Get Started", ar: "ابدأ الآن", fr: "Commencer" },
	"cta.talkToUs": { en: "Talk to Us", ar: "تواصل معنا", fr: "Contactez-nous" },

	"footer.cta.heading": {
		en: "Kickstart your high-earning online store today!",
		ar: "ابدأ متجرك الإلكتروني عالي الربح اليوم!",
		fr: "Lancez dès aujourd'hui votre boutique en ligne très rentable !",
	},
	"footer.col.tools": { en: "Tools", ar: "الأدوات", fr: "Outils" },
	"footer.col.resources": { en: "Resources", ar: "الموارد", fr: "Ressources" },
	"footer.col.company": { en: "Company", ar: "الشركة", fr: "Entreprise" },
	"footer.col.askAi": { en: "Ask AI about us", ar: "اسأل الذكاء الاصطناعي عنا", fr: "Interrogez l'IA à notre sujet" },
	"footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية", fr: "Politique de confidentialité" },
	"footer.terms": { en: "Terms of Service", ar: "الشروط والأحكام", fr: "Conditions d'utilisation" },

	"majdgbt.heading": { en: "Meet MajdGBT", ar: "تعرف على MajdGBT", fr: "Découvrez MajdGBT" },
	"majdgbt.subtext": {
		en: "Our own AI model trained on real-time knowledge and experience, made specifically to help you build your e-commerce business.",
		ar: "نموذج الذكاء الاصطناعي الخاص بنا، مدرّب على معرفة وخبرة لحظية، صُمم خصيصًا لمساعدتك على بناء متجرك الإلكتروني.",
		fr: "Notre propre modèle d'IA, entraîné sur des connaissances et une expérience en temps réel, conçu spécialement pour vous aider à développer votre activité e-commerce.",
	},

	"social.stat0": {
		en: "generated in revenue by all sellers",
		ar: "من الإيرادات حققها كل البائعين",
		fr: "de chiffre d'affaires généré par l'ensemble des vendeurs",
	},
	"social.stat1": {
		en: "average store monthly revenue",
		ar: "متوسط الإيراد الشهري للمتجر",
		fr: "de chiffre d'affaires mensuel moyen par boutique",
	},
	"social.stat2": { en: "sellers and brand owners", ar: "بائع وصاحب علامة تجارية", fr: "vendeurs et propriétaires de marques" },
	"social.stat3": { en: "Official Shopify Partner", ar: "شريك رسمي لدى Shopify", fr: "Partenaire officiel Shopify" },

	// The accent moved from the subheading to the heading with this rewrite — the subheading
	// is now a plain sentence, and the section would otherwise be the only one on the page
	// with no brand colour in its title block.
	"catalog.heading": {
		en: 'A huge catalog of proven <span class="text-primary">winning products</span> in Lebanon',
		ar: 'كتالوج ضخم من <span class="text-primary">المنتجات الرابحة</span> المثبتة في لبنان',
		fr: 'Un immense catalogue de <span class="text-primary">produits gagnants</span> éprouvés au Liban',
	},
	"catalog.subheading": {
		en: "Droparabia sources you the best selling products in Lebanon so you don't need to buy bulk inventories from China and pay shipping fees or search for hours looking for a product to sell",
		ar: "يوفّر لك دروب أرابيا المنتجات الأكثر مبيعًا في لبنان، فلا تحتاج إلى شراء مخزون بالجملة من الصين ودفع رسوم الشحن، أو البحث لساعات عن منتج لبيعه",
		fr: "Droparabia vous source les produits les plus vendus au Liban : plus besoin d'acheter du stock en gros depuis la Chine et de payer des frais de livraison, ni de chercher pendant des heures un produit à vendre",
	},

	"howitworks.heading": {
		en: 'How <span class="text-primary">Droparabia</span> works',
		ar: 'كيف يعمل <span class="text-primary">دروب أرابيا</span>',
		fr: `Comment fonctionne <span class="text-primary">Droparabia</span>`,
	},
	"howitworks.step0": {
		en: "Integrate your Shopify store into Droparabia, which allows you to add & sell any product directly on your website",
		ar: "اربط متجر Shopify الخاص بك بدروب أرابيا، ليتيح لك إضافة وبيع أي منتج مباشرة على موقعك",
		fr: "Connectez votre boutique Shopify à Droparabia pour ajouter et vendre n'importe quel produit directement sur votre site",
	},
	"howitworks.step1": {
		en: "Droparabia keeps track of stock and inventory for every product so you're not managing any inventory",
		ar: "يتابع دروب أرابيا المخزون لكل منتج بحيث لا تُدير أي مخزون بنفسك",
		fr: "Droparabia suit le stock et l'inventaire de chaque produit : vous n'avez aucun stock à gérer",
	},
	"howitworks.step2": {
		en: "Our system will handle packaging and order delivery every time a customer orders from your website",
		ar: "يتولى نظامنا التغليف وتوصيل الطلب في كل مرة يطلب فيها عميل من موقعك",
		fr: "Notre système s'occupe de l'emballage et de la livraison à chaque commande passée sur votre site",
	},
	"howitworks.step3": {
		en: "Droparabia charges per sold item only so you only pay for what you sold rather than purchasing stock",
		ar: "يتقاضى دروب أرابيا رسومًا على كل قطعة تُباع فقط، فأنت تدفع مقابل ما بعته بدلًا من شراء مخزون",
		fr: "Droparabia ne facture que les articles vendus : vous payez ce que vous avez vendu au lieu d'acheter du stock",
	},

	"why.heading": {
		en: 'Why Droparabia<span class="block text-primary">beats Traditional E-commerce &amp; Old Dropshipping</span>',
		ar: 'لماذا دروب أرابيا<span class="block text-primary">يتفوق على التجارة الإلكترونية التقليدية والدروبشيبينغ القديم</span>',
		fr: `Pourquoi Droparabia<span class="block text-primary">surpasse l'e-commerce traditionnel et l'ancien dropshipping</span>`,
	},
	"why.point0": { en: "No huge upfront investments", ar: "لا استثمارات ضخمة مقدمًا", fr: "Aucun investissement initial important" },
	"why.point1": {
		en: "No spending & guessing on non-selling products",
		ar: "لا إنفاق أو تخمين على منتجات لا تُباع",
		fr: "Aucune dépense ni pari sur des produits qui ne se vendent pas",
	},
	"why.point2": { en: "No owning inventory", ar: "لا حاجة لامتلاك مخزون", fr: "Aucun stock à posséder" },
	"why.point3": {
		en: "No dealing with suppliers & shipment fees",
		ar: "لا تعامل مع الموردين ورسوم الشحن",
		fr: "Aucune négociation avec les fournisseurs ni frais d'expédition",
	},
	"why.point4": {
		en: "Pay for what you sell only and keep the profit",
		ar: "ادفع فقط مقابل ما تبيعه واحتفظ بالربح",
		fr: "Payez uniquement ce que vous vendez et gardez le bénéfice",
	},

	"bonuses.heading": {
		en: 'Droparabia <span class="text-primary">exclusive bonuses</span>',
		ar: 'مزايا <span class="text-primary">حصرية من دروب أرابيا</span>',
		fr: `Les <span class="text-primary">bonus exclusifs</span> de Droparabia`,
	},
	"bonuses.title0": {
		en: "+20 hours of FREE courses and recorded tutorials",
		ar: "أكثر من 20 ساعة من الدورات المجانية والدروس المسجّلة",
		fr: "Plus de 20 heures de formations GRATUITES et de tutoriels enregistrés",
	},
	"bonuses.subtitle0": {
		en: "Learn store setup, marketing, and scaling at your own pace",
		ar: "تعلّم إعداد المتجر والتسويق والتوسّع بالسرعة التي تناسبك",
		fr: "Apprenez la création de boutique, le marketing et la mise à l'échelle à votre rythme",
	},
	"bonuses.title1": {
		en: "2 Weekly coaching calls with experienced advisors",
		ar: "مكالمتا إرشاد أسبوعيتان مع مستشارين ذوي خبرة",
		fr: "2 appels de coaching par semaine avec des conseillers expérimentés",
	},
	"bonuses.subtitle1": {
		en: "Live guidance to keep your store on track every week",
		ar: "إرشاد مباشر يبقي متجرك على المسار الصحيح كل أسبوع",
		fr: "Un accompagnement en direct pour garder votre boutique sur la bonne voie chaque semaine",
	},
	"bonuses.title2": {
		en: "One‑on‑One mentorship with a 6‑Figure brand builder",
		ar: "إرشاد فردي من صاحب علامة تجارية بأرباح ست أرقام",
		fr: "Un mentorat individuel avec un créateur de marque à 6 chiffres",
	},
	"bonuses.subtitle2": {
		en: "Personalized advice from someone who's done it before",
		ar: "نصائح مخصصة من شخص خاض التجربة من قبل",
		fr: "Des conseils personnalisés de quelqu'un qui l'a déjà fait",
	},
	"bonuses.title3": {
		en: "WhatsApp group for support whenever you need it",
		ar: "مجموعة واتساب للدعم كلما احتجت إليه",
		fr: "Un groupe WhatsApp pour vous aider dès que vous en avez besoin",
	},
	"bonuses.subtitle3": {
		en: "A direct line to the team and other sellers, 24/7",
		ar: "خط تواصل مباشر مع الفريق والبائعين الآخرين على مدار الساعة",
		fr: "Une ligne directe avec l'équipe et les autres vendeurs, 24h/24 et 7j/7",
	},

	"tools.heading": {
		en: 'Access advanced &amp; <span class="text-primary">game changing tools</span>',
		ar: 'اكتشف أدوات <span class="text-primary">متقدمة وتغيّر قواعد اللعبة</span>',
		fr: `Accédez à des <span class="text-primary">outils avancés et révolutionnaires</span>`,
	},
	"tool.find-products.tagline": {
		en: "A catalog of in-demand & proven winning products",
		ar: "كتالوج من المنتجات الرابحة المطلوبة والمثبتة",
		fr: "Un catalogue de produits gagnants, demandés et éprouvés",
	},
	"tool.ai-winning-products.tagline": {
		en: "Not sure what to sell? AI will help you decide",
		ar: "لست متأكدًا مما تبيعه؟ سيساعدك الذكاء الاصطناعي على القرار",
		fr: "Vous ne savez pas quoi vendre ? L'IA vous aide à décider",
	},
	"tool.ai-studio.tagline": {
		en: "Generate your ads in few seconds with AI Studio",
		ar: "أنشئ إعلاناتك في ثوانٍ مع AI Studio",
		fr: "Générez vos publicités en quelques secondes avec AI Studio",
	},
	"tool.branding.tagline": {
		en: "Build your own brand identity and stand out from the competition",
		ar: "ابنِ هوية علامتك التجارية الخاصة وتميّز عن المنافسين",
		fr: "Construisez votre propre identité de marque et démarquez-vous de la concurrence",
	},
	"tool.product-request.tagline": {
		en: "Looking for a certain product? we'll find it for you",
		ar: "تبحث عن منتج معيّن؟ سنجده لك",
		fr: "Vous cherchez un produit précis ? Nous le trouvons pour vous",
	},
	"tool.leader-board.tagline": {
		en: "Build your profitable online store while climbing the ranks",
		ar: "ابنِ متجرك الإلكتروني المربح وأنت تتصدّر الترتيب",
		fr: "Construisez votre boutique en ligne rentable tout en grimpant au classement",
	},

	"dropvault.courses.heading": {
		en: "Get +20 hours of free courses and recorded tutorials!",
		ar: "احصل على أكثر من 20 ساعة من الدورات المجانية والدروس المسجلة!",
		fr: "Accédez à plus de 20 heures de cours gratuits et de tutoriels enregistrés !",
	},
	"dropvault.courses.subheading": {
		en: "The same ones gurus used to sell you years ago",
		ar: "نفس الدورات التي كان الخبراء يبيعونها لك قبل سنوات",
		fr: "Les mêmes que les gourous vous vendaient il y a des années",
	},
	"dropvault.community.heading": {
		en: "Get support and guidance, engage with other sellers and make new friends along the way",
		ar: "احصل على الدعم والإرشاد، وتفاعل مع بائعين آخرين وكوّن صداقات جديدة على الطريق",
		fr: "Bénéficiez de soutien et de conseils, échangez avec d'autres vendeurs et nouez de nouvelles amitiés en chemin",
	},

	"dropvault.subtext": {
		en: "When you get access to Droparabia, you become a member of the Dropvault community, a place where you get to grow alongside ambitious sellers and get support whenever you need it!",
		ar: "عند حصولك على دروب أرابيا، تصبح عضوًا في مجتمع دروب فولت، مكان تنمو فيه إلى جانب بائعين طموحين وتحصل على الدعم كلما احتجت إليه!",
		fr: "En accédant à Droparabia, vous rejoignez la communauté Dropvault : un espace où progresser aux côtés de vendeurs ambitieux et obtenir de l'aide dès que vous en avez besoin !",
	},
	"dropvault.bonuses.heading": {
		en: "And that's not all!",
		ar: "وهذا ليس كل شيء!",
		fr: "Et ce n'est pas tout !",
	},
	"dropvault.bonuses.title0": {
		en: "Participate in occasional giveaways to gain more experience and earn some rewards",
		ar: "شارك في السحوبات الدورية لاكتساب المزيد من الخبرة والحصول على بعض المكافآت",
		fr: "Participez à des concours ponctuels pour gagner en expérience et remporter des récompenses",
	},
	"dropvault.bonuses.title1": {
		en: "Weekly coaching calls with advisors to keep track of your progress",
		ar: "جلسات إرشاد أسبوعية مع المستشارين لمتابعة تقدمك",
		fr: "Des appels de coaching hebdomadaires avec des conseillers pour suivre vos progrès",
	},
	"dropvault.bonuses.title2": {
		en: "Stay updated on exciting events and upcoming features",
		ar: "ابقَ على اطلاع على الفعاليات المشوّقة والميزات القادمة",
		fr: "Restez informé des événements à venir et des nouvelles fonctionnalités",
	},
	"dropvault.bonuses.title3": {
		en: "Dedicated WhatsApp group for each member to get support whenever you need it",
		ar: "مجموعة واتساب مخصصة لكل عضو للحصول على الدعم كلما احتجت إليه",
		fr: "Un groupe WhatsApp dédié à chaque membre pour obtenir de l'aide dès que vous en avez besoin",
	},

	// --- Per-tool content (src/data/tools.ts), keyed by slug ---
	"tool.find-products.paragraph": {
		en: "Instead of searching for hours on Ali-baba or Ali-express to find a product to sell, Droparabia sources a huge variety of products for you that are in great demand and actually sell!",
		ar: "بدلاً من قضاء ساعات في البحث على علي بابا أو علي إكسبرس عن منتج تبيعه، يوفر لك دروب أرابيا مجموعة ضخمة من المنتجات ذات الطلب العالي والتي تُباع فعليًا!",
		fr: "Au lieu de passer des heures sur Alibaba ou AliExpress à chercher un produit à vendre, Droparabia vous propose une immense variété de produits très demandés qui se vendent vraiment !",
	},
	"tool.find-products.perksIntro": {
		en: "Find Products is built to get you to a sellable product fast, without the guesswork.",
		ar: "صُمم Find Products لإيصالك إلى منتج قابل للبيع بسرعة، دون تخمين.",
		fr: "Find Products est conçu pour vous mener rapidement à un produit vendable, sans deviner.",
	},
	"tool.find-products.feature0.title": { en: "Filter by niche", ar: "التصفية حسب المجال", fr: "Filtrer par niche" },
	"tool.find-products.feature0.description": {
		en: "Narrow the catalog down to the exact category your store needs, from Health & Beauty to Electronics.",
		ar: "ضيّق الكتالوج إلى الفئة التي يحتاجها متجرك بالضبط، من الصحة والجمال إلى الإلكترونيات.",
		fr: "Réduisez le catalogue à la catégorie exacte dont votre boutique a besoin, de la santé et beauté à l'électronique.",
	},
	"tool.find-products.feature1.title": { en: "Order a sample", ar: "اطلب عينة", fr: "Commander un échantillon" },
	"tool.find-products.feature1.description": {
		en: "Request a physical sample before committing, so you know exactly what you're selling.",
		ar: "اطلب عينة فعلية قبل الالتزام، لتعرف بالضبط ما الذي تبيعه.",
		fr: "Demandez un échantillon physique avant de vous engager, pour savoir exactement ce que vous vendez.",
	},
	"tool.find-products.feature2.title": { en: "One-click import", ar: "استيراد بنقرة واحدة", fr: "Import en un clic" },
	"tool.find-products.feature2.description": {
		en: "Upload any product directly to your Shopify store with one click.",
		ar: "ارفع أي منتج مباشرة إلى متجرك على Shopify بنقرة واحدة.",
		fr: "Importez n'importe quel produit directement dans votre boutique Shopify en un seul clic.",
	},
	"tool.find-products.perk0": {
		en: "No searching for hours for a product to sell",
		ar: "لا حاجة للبحث ساعات عن منتج للبيع",
		fr: "Fini les heures de recherche pour trouver un produit à vendre",
	},
	"tool.find-products.perk1": {
		en: "No inventory owning and management",
		ar: "لا امتلاك أو إدارة مخزون",
		fr: "Aucun stock à posséder ni à gérer",
	},
	"tool.find-products.perk2": {
		en: "Variety of most profitable niches covered",
		ar: "تغطية لمجموعة من أكثر المجالات ربحية",
		fr: "Une variété des niches les plus rentables couvertes",
	},
	"tool.find-products.perk0Description": {
		en: "Droparabia already sources the highest selling catalog so you don't have to spend hours finding and qualifying a product",
		ar: "يوفّر دروب أرابيا مسبقًا كتالوج المنتجات الأكثر مبيعًا، فلا تحتاج إلى قضاء ساعات في البحث عن منتج وتقييمه",
		fr: "Droparabia sélectionne déjà le catalogue des produits les plus vendus : vous n'avez plus à passer des heures à chercher et qualifier un produit",
	},
	"tool.find-products.perk1Description": {
		en: "You choose your product and sell it directly on your own website without owning a single product using our Shopify integration system",
		ar: "تختار منتجك وتبيعه مباشرة على موقعك دون أن تمتلك قطعة واحدة، عبر نظام التكامل مع Shopify",
		fr: "Vous choisissez votre produit et le vendez directement sur votre site sans posséder un seul article, grâce à notre intégration Shopify",
	},
	"tool.find-products.perk2Description": {
		en: "Droparabia has a catalog of winning products across all niches",
		ar: "يمتلك دروب أرابيا كتالوجًا من المنتجات الرابحة في جميع المجالات",
		fr: "Droparabia dispose d'un catalogue de produits gagnants dans toutes les niches",
	},

	"tool.ai-winning-products.paragraph": {
		en: "Explore a library of best-selling products, handpicked by AI and backed by real data and analysis.",
		ar: "استكشف مكتبة من المنتجات الأكثر مبيعًا والمنتقاة بالذكاء الاصطناعي، مدعومة ببيانات وتحليلات حقيقية.",
		fr: "Explorez une bibliothèque de produits les plus vendus, sélectionnés par l'IA et appuyés par des données et des analyses réelles.",
	},
	"tool.ai-winning-products.perksIntro": {
		en: "AI Winning Products does the market research so you don't have to.",
		ar: "يقوم AI Winning Products بأبحاث السوق نيابة عنك.",
		fr: "AI Winning Products fait l'étude de marché à votre place.",
	},
	"tool.ai-winning-products.feature0.title": {
		en: "AI score & analysis",
		ar: "تقييم وتحليل بالذكاء الاصطناعي",
		fr: "Score et analyse par IA",
	},
	"tool.ai-winning-products.feature0.description": {
		en: "Every product gets an AI score out of 100, broken down across trend, competition, margin, saturation, impulse buy, and repeat purchase potential.",
		ar: "يحصل كل منتج على تقييم بالذكاء الاصطناعي من 100، موزّع على الرواج والمنافسة والهامش والتشبع والشراء الاندفاعي وإمكانية الشراء المتكرر.",
		fr: "Chaque produit reçoit un score IA sur 100, détaillé selon la tendance, la concurrence, la marge, la saturation, l'achat impulsif et le potentiel de réachat.",
	},
	"tool.ai-winning-products.feature1.title": { en: "Sell recommendation", ar: "توصية بالبيع", fr: "Recommandation de vente" },
	"tool.ai-winning-products.feature1.description": {
		en: "See platform activity trends, a variant-by-variant profit breakdown, and a clear sell recommendation backed by a winning product score.",
		ar: "اطّلع على اتجاهات النشاط على المنصة، وتوزيع الربح لكل نوع، وتوصية بيع واضحة مدعومة بتقييم للمنتج الرابح.",
		fr: "Consultez les tendances d'activité de la plateforme, la répartition des bénéfices variante par variante et une recommandation de vente claire, appuyée par un score de produit gagnant.",
	},
	"tool.ai-winning-products.perk0": {
		en: "Recommendation backed by real data",
		ar: "توصية مدعومة ببيانات حقيقية",
		fr: "Une recommandation appuyée par des données réelles",
	},
	"tool.ai-winning-products.perk1": {
		en: "Target avatar based analysis",
		ar: "تحليل مبني على شخصية العميل المستهدف",
		fr: "Une analyse basée sur le profil client cible",
	},
	"tool.ai-winning-products.perk2": {
		en: "Time saving decision making",
		ar: "قرارات أسرع توفّر وقتك",
		fr: "Des décisions plus rapides qui vous font gagner du temps",
	},
	"tool.ai-winning-products.perk0Description": {
		en: "Our AI gives you data backed recommendations of what to sell, with full analysis behind its recommendation",
		ar: "يمنحك الذكاء الاصطناعي لدينا توصيات مدعومة بالبيانات لما تبيعه، مع تحليل كامل يشرح سبب التوصية",
		fr: "Notre IA vous donne des recommandations de produits fondées sur les données, avec l'analyse complète qui les justifie",
	},
	"tool.ai-winning-products.perk1Description": {
		en: "It gives you full analysis on each product's ideal target audience so you have a clear idea how to market this product to that person",
		ar: "يقدّم لك تحليلًا كاملًا للجمهور المستهدف المثالي لكل منتج، لتكون لديك فكرة واضحة عن كيفية تسويقه لذلك الشخص",
		fr: "Il vous fournit une analyse complète de l'audience cible idéale de chaque produit, pour savoir précisément comment le lui vendre",
	},
	"tool.ai-winning-products.perk2Description": {
		en: "You don't have to scratch your head for hours to decide, or hop on ChatGPT or Claude to get their recommendation!",
		ar: "لا داعي لأن تحتار لساعات لاتخاذ القرار، أو أن تلجأ إلى ChatGPT أو Claude للحصول على توصياتهما!",
		fr: "Plus besoin de vous casser la tête pendant des heures, ni de passer par ChatGPT ou Claude pour avoir leur avis !",
	},

	"tool.ai-studio.paragraph": {
		en: "Leverage our AI studio to create your own powerful advertising videos for your products rather than re-using other creators' content and risking a ban.",
		ar: "استخدم استوديو الذكاء الاصطناعي لدينا لإنشاء إعلانات فيديو قوية لمنتجاتك بدلاً من إعادة استخدام محتوى صناع آخرين وتعريض نفسك لخطر الحظر.",
		fr: "Utilisez notre studio IA pour créer vos propres vidéos publicitaires percutantes au lieu de réutiliser le contenu d'autres créateurs et de risquer un bannissement.",
	},
	"tool.ai-studio.perksIntro": {
		en: "AI Studio replaces the design and copywriting work most sellers skip entirely.",
		ar: "يغني AI Studio عن أعمال التصميم والكتابة الإعلانية التي يتجاهلها معظم البائعين تمامًا.",
		fr: "AI Studio remplace le travail de design et de rédaction que la plupart des vendeurs négligent complètement.",
	},
	"tool.ai-studio.feature0.title": { en: "Instant ad creatives", ar: "تصاميم إعلانية فورية", fr: "Visuels publicitaires instantanés" },
	"tool.ai-studio.feature0.description": {
		en: "Generate ready-to-post ad images and videos in a few clicks.",
		ar: "أنشئ صور وفيديوهات إعلانية جاهزة للنشر بنقرات قليلة.",
		fr: "Générez des images et des vidéos publicitaires prêtes à publier en quelques clics.",
	},
	"tool.ai-studio.feature1.title": {
		en: "Background & lighting fixes",
		ar: "تحسين الخلفية والإضاءة",
		fr: "Retouche des fonds et de l'éclairage",
	},
	"tool.ai-studio.feature1.description": {
		en: "Turn flat product photos into polished, professional shots.",
		ar: "حوّل صور المنتجات العادية إلى لقطات احترافية أنيقة.",
		fr: "Transformez des photos de produits ternes en clichés soignés et professionnels.",
	},
	"tool.ai-studio.feature2.title": { en: "AI-written copy", ar: "نصوص مكتوبة بالذكاء الاصطناعي", fr: "Textes rédigés par l'IA" },
	"tool.ai-studio.feature2.description": {
		en: "Get product descriptions and ad captions tailored to your niche.",
		ar: "احصل على أوصاف منتجات وعبارات إعلانية مخصصة لمجالك.",
		fr: "Obtenez des descriptions de produits et des légendes publicitaires adaptées à votre niche.",
	},
	"tool.ai-studio.perk0": {
		en: "No more reusing or stealing content",
		ar: "لا مزيد من إعادة استخدام أو سرقة المحتوى",
		fr: "Fini la réutilisation ou le vol de contenu",
	},
	"tool.ai-studio.perk1": {
		en: "Your own generated video advertisements",
		ar: "إعلانات فيديو من إنشائك الخاص",
		fr: "Vos propres publicités vidéo générées",
	},
	"tool.ai-studio.perk2": {
		en: "Adaptability for each product and use case",
		ar: "قابلية للتكيف مع كل منتج وحالة استخدام",
		fr: "Une adaptabilité à chaque produit et cas d'usage",
	},
	"tool.ai-studio.perk0Description": {
		en: "You no longer have to steal content from other platforms and risk getting banned for running ads on them!",
		ar: "لم تعد مضطرًا لسرقة محتوى من منصات أخرى والمخاطرة بحظرك بسبب تشغيل إعلانات به!",
		fr: "Vous n'avez plus à voler du contenu sur d'autres plateformes en risquant un bannissement pour vos publicités !",
	},
	"tool.ai-studio.perk1Description": {
		en: "Get your very own video advertisements generated through your own prompts and instructions",
		ar: "احصل على إعلانات فيديو خاصة بك تُولَّد من خلال أوامرك وتعليماتك أنت",
		fr: "Obtenez vos propres publicités vidéo, générées à partir de vos instructions et de vos prompts",
	},
	"tool.ai-studio.perk2Description": {
		en: "This AI already has a clear understanding of each product and how it is used — just explain how you want to market it and you're good to go!",
		ar: "يفهم هذا الذكاء الاصطناعي مسبقًا كل منتج وطريقة استخدامه — فقط اشرح كيف تريد تسويقه وستكون جاهزًا!",
		fr: "Cette IA comprend déjà chaque produit et son usage — expliquez simplement comment vous voulez le commercialiser et c'est parti !",
	},

	"tool.branding.paragraph": {
		en: 'Rather than selling a product like "everyone else", customize your products with your own brand\'s logo with our laser printing machine!',
		ar: "بدلاً من بيع منتج مثل \"الجميع\"، خصّص منتجاتك بشعار علامتك التجارية باستخدام جهاز الطباعة بالليزر لدينا!",
		fr: "Plutôt que de vendre un produit comme « tout le monde », personnalisez vos produits avec le logo de votre propre marque grâce à notre machine de gravure laser !",
	},
	"tool.branding.perksIntro": {
		en: "Branding handles the identity work that makes buyers trust a store enough to check out.",
		ar: "تتولى Branding بناء الهوية التي تجعل المشترين يثقون بالمتجر بما يكفي لإتمام الشراء.",
		fr: "Branding s'occupe du travail d'identité qui inspire assez confiance aux acheteurs pour qu'ils finalisent leur commande.",
	},
	"tool.branding.perk0": { en: "Create your own unique brand", ar: "أنشئ علامتك التجارية المميزة", fr: "Créez votre propre marque unique" },
	"tool.branding.perk1": { en: "Get distinguished from your competitors", ar: "تميّز عن منافسيك", fr: "Démarquez-vous de vos concurrents" },
	"tool.branding.perk2": {
		en: "Print on-demand only per sold product",
		ar: "طباعة عند الطلب لكل منتج يُباع فقط",
		fr: "Impression à la demande, uniquement par produit vendu",
	},
	"tool.branding.perk0Description": {
		en: "Create your own brand identity instead of looking like a cheap dropshipping store",
		ar: "أنشئ هوية علامتك التجارية الخاصة بدل أن يبدو متجرك كمتجر دروبشيبينغ رخيص",
		fr: "Créez votre propre identité de marque au lieu de ressembler à une boutique de dropshipping bas de gamme",
	},
	"tool.branding.perk1Description": {
		en: "Stand out from the competition and become a recognizable brand right on the spot",
		ar: "تميّز عن المنافسين وكن علامة تجارية يتعرّف عليها الناس من أول نظرة",
		fr: "Démarquez-vous de la concurrence et devenez une marque reconnaissable dès le premier regard",
	},
	"tool.branding.perk2Description": {
		en: "No more burning hundreds on private labeling lots of products at once — only print on each product before you send it to your customers",
		ar: "لا مزيد من إنفاق المئات على وضع علامتك على كميات كبيرة دفعة واحدة — اطبع على كل منتج فقط قبل إرساله إلى عملائك",
		fr: "Fini les centaines d'euros dépensés à personnaliser des lots entiers — imprimez sur chaque produit juste avant de l'expédier à vos clients",
	},

	"tool.product-request.paragraph": {
		en: "Instead of dealing with suppliers yourself and paying shipment fees, just give us an image of the product that's available on our catalog and we'll source it for you without extra fees!",
		ar: "بدلاً من التعامل مع الموردين بنفسك ودفع رسوم الشحن، ما عليك سوى إعطائنا صورة للمنتج المتوفر في كتالوجنا وسنوفره لك دون رسوم إضافية!",
		fr: "Au lieu de traiter vous-même avec les fournisseurs et de payer des frais d'expédition, envoyez-nous simplement une image du produit disponible dans notre catalogue et nous le sourçons pour vous sans frais supplémentaires !",
	},
	"tool.product-request.perksIntro": {
		en: "Product Request is there for the moment the catalog doesn't have what you need yet.",
		ar: "Product Request موجودة للحظة التي لا يحتوي فيها الكتالوج على ما تحتاجه بعد.",
		fr: "Product Request est là pour le moment où le catalogue n'a pas encore ce dont vous avez besoin.",
	},
	"tool.product-request.perk0": {
		en: "No dealing with suppliers yourself",
		ar: "لا تعامل مع الموردين بنفسك",
		fr: "Aucune négociation avec les fournisseurs",
	},
	"tool.product-request.perk1": {
		en: "No huge shipment fees or risk of scam",
		ar: "لا رسوم شحن باهظة أو خطر احتيال",
		fr: "Aucuns frais d'expédition élevés ni risque d'arnaque",
	},
	"tool.product-request.perk2": {
		en: "Research and supplying done without extra fees",
		ar: "البحث والتوريد يتمّان دون رسوم إضافية",
		fr: "Recherche et approvisionnement sans frais supplémentaires",
	},
	"tool.product-request.perk0Description": {
		en: "Just give us a screenshot of the product you want to ship and let Droparabia handle the rest",
		ar: "فقط أرسل لنا لقطة شاشة للمنتج الذي تريد شحنه ودع دروب أرابيا يتولّى الباقي",
		fr: "Envoyez-nous simplement une capture d'écran du produit à expédier et laissez Droparabia s'occuper du reste",
	},
	"tool.product-request.perk1Description": {
		en: "Free yourself from shipping fees and the risk of getting scammed",
		ar: "تخلّص من رسوم الشحن ومن خطر التعرّض للاحتيال",
		fr: "Libérez-vous des frais d'expédition et du risque de vous faire arnaquer",
	},
	"tool.product-request.perk2Description": {
		en: "Droparabia will source these products for you without any additional fees",
		ar: "سيوفّر لك دروب أرابيا هذه المنتجات دون أي رسوم إضافية",
		fr: "Droparabia se procure ces produits pour vous, sans frais supplémentaires",
	},

	"tool.leader-board.paragraph": {
		en: "Who said building and running an online business can't be a fun competition? You'll also be a part of a wholesome community and make new friends!",
		ar: "من قال إن بناء وإدارة عمل إلكتروني لا يمكن أن يكون منافسة ممتعة؟ ستكون أيضًا جزءًا من مجتمع إيجابي وتكوّن صداقات جديدة!",
		fr: "Qui a dit que créer et gérer une activité en ligne ne pouvait pas être une compétition amusante ? Vous ferez aussi partie d'une communauté bienveillante et vous vous ferez de nouveaux amis !",
	},
	"tool.leader-board.perksIntro": {
		en: "The Leader Board turns your store's performance into something visible and worth chasing.",
		ar: "تحوّل Leader Board أداء متجرك إلى شيء ظاهر يستحق السعي إليه.",
		fr: "Le Leader Board transforme les performances de votre boutique en un objectif visible et motivant.",
	},
	"tool.leader-board.perk0": {
		en: "Grow your business alongside other sellers in the community",
		ar: "نمِّ عملك جنبًا إلى جنب مع بائعين آخرين في المجتمع",
		fr: "Développez votre activité aux côtés des autres vendeurs de la communauté",
	},
	"tool.leader-board.perk1": {
		en: "Participate in events and giveaways",
		ar: "شارك في الفعاليات والهدايا",
		fr: "Participez aux événements et aux jeux-concours",
	},
	"tool.leader-board.perk2": {
		en: "Affiliate program for top performing users",
		ar: "برنامج تسويق بالعمولة لأفضل المستخدمين أداءً",
		fr: "Un programme d'affiliation pour les utilisateurs les plus performants",
	},
	"tool.leader-board.perk0Description": {
		en: "The best way to grow your business is to do it alongside ambitious people who want the same thing as you",
		ar: "أفضل طريقة لتنمية مشروعك هي أن تفعل ذلك إلى جانب أشخاص طموحين يريدون ما تريده",
		fr: "La meilleure façon de développer votre activité, c'est de le faire aux côtés de personnes ambitieuses qui visent la même chose que vous",
	},
	"tool.leader-board.perk1Description": {
		en: "Which will allow you to gain more knowledge and earn interesting rewards",
		ar: "ما يتيح لك اكتساب المزيد من المعرفة والحصول على مكافآت مثيرة",
		fr: "Ce qui vous permettra d'acquérir plus de connaissances et de gagner des récompenses intéressantes",
	},
	"tool.leader-board.perk2Description": {
		en: "The top 5% highest sellers will have a chance of joining the affiliate program to assist in growing the community",
		ar: "أعلى 5% من البائعين ستتاح لهم فرصة الانضمام إلى برنامج الشراكة للمساعدة في تنمية المجتمع",
		fr: "Les 5% de meilleurs vendeurs auront la possibilité de rejoindre le programme d'affiliation pour contribuer à faire grandir la communauté",
	},

	"toolfeatures.heading": { en: "How does it work?", ar: "كيف تعمل؟", fr: "Comment ça marche ?" },
	"cta.backToTools": { en: "Back to Tools", ar: "العودة إلى الأدوات", fr: "Retour aux outils" },

	"about.hero.line1": { en: "With Droparabia", ar: "مع دروب أرابيا", fr: "Avec Droparabia" },
	"about.hero.line2": {
		en: "you can easily sell anywhere in Lebanon",
		ar: "يمكنك البيع بسهولة في أي مكان في لبنان",
		fr: "vous pouvez vendre facilement partout au Liban",
	},
	"about.hero.line3": { en: "And very soon...", ar: "وقريبًا جدًا...", fr: "Et très bientôt..." },
	"about.hero.mena": {
		en: "You'll be able to sell in the MENA regions",
		ar: "ستتمكن من البيع في منطقة الشرق الأوسط وشمال أفريقيا",
		fr: "Vous pourrez vendre dans toute la région MENA",
	},

	"about.mission.intro": {
		en: "Droparabia was created to allow anyone to get into e-commerce regardless of their experience by eliminating all obstacles that cause most e-com businesses to fail before they start, such as:",
		ar: "أُنشئ دروب أرابيا ليتيح لأي شخص دخول عالم التجارة الإلكترونية بغض النظر عن خبرته، عبر إزالة كل العقبات التي تجعل معظم المشاريع الإلكترونية تفشل قبل أن تبدأ، مثل:",
		fr: "Droparabia a été créé pour permettre à quiconque de se lancer dans l'e-commerce, quelle que soit son expérience, en éliminant tous les obstacles qui font échouer la plupart des activités en ligne avant même leur démarrage, comme :",
	},
	"about.mission.point0": { en: "Huge upfront investments", ar: "استثمارات ضخمة مقدمًا", fr: "Des investissements initiaux importants" },
	"about.mission.point1": {
		en: "Renting warehouses or owning inventory",
		ar: "استئجار مستودعات أو امتلاك مخزون",
		fr: "Louer des entrepôts ou posséder des stocks",
	},
	"about.mission.point2": {
		en: "Ordering stock from China and paying huge shipping fees",
		ar: "طلب بضائع من الصين ودفع رسوم شحن باهظة",
		fr: "Commander des stocks depuis la Chine et payer des frais d'expédition élevés",
	},
	"about.mission.point3": {
		en: "Buying products in bulk that might not sell",
		ar: "شراء منتجات بالجملة قد لا تُباع",
		fr: "Acheter des produits en gros qui risquent de ne pas se vendre",
	},
	"about.mission.point4": {
		en: "Wasting hours searching and qualifying products to sell",
		ar: "إضاعة ساعات في البحث عن منتجات للبيع وتقييمها",
		fr: "Perdre des heures à chercher et à qualifier des produits à vendre",
	},
	"about.mission.point5": { en: "Finding a reliable delivery system", ar: "إيجاد نظام توصيل موثوق", fr: "Trouver un système de livraison fiable" },
	"about.mission.point6": {
		en: "Quitting after losing all your savings",
		ar: "الاستسلام بعد خسارة كل مدخراتك",
		fr: "Abandonner après avoir perdu toutes vos économies",
	},
	"about.mission.closing": {
		en: "If you want to start dropshipping in Lebanon or even start an e-commerce store in Lebanon, Droparabia is here to help with that, as it protects you from burning your budget on beginners' mistakes and meaningless friction, like upfront investments in inventory that might not sell.",
		ar: "إذا كنت تريد بدء الدروبشيبينغ في لبنان أو حتى إطلاق متجر إلكتروني في لبنان، فدروب أرابيا هنا لمساعدتك في ذلك، إذ يحميك من إهدار ميزانيتك على أخطاء المبتدئين والعقبات غير المجدية، مثل الاستثمار المسبق في مخزون قد لا يُباع.",
		fr: "Si vous souhaitez vous lancer dans le dropshipping au Liban, ou même ouvrir une boutique e-commerce au Liban, Droparabia est là pour vous y aider, car il vous protège du gaspillage de votre budget en erreurs de débutant et en frictions inutiles, comme les investissements initiaux dans un stock qui pourrait ne pas se vendre.",
	},

	"about.operation.heading": {
		en: 'How does it <span class="text-primary">operate</span>',
		ar: 'كيف <span class="text-primary">يعمل</span>',
		fr: `Comment ça <span class="text-primary">fonctionne</span>`,
	},
	"about.operation.paragraph": {
		en: "We have our own unique logistics network in Deir Qoubel, Mount Lebanon Governorate and our own delivery drivers that allows us to deliver safely all over Lebanon and send you the payment on each successful delivery, as well as our own supplier partners locally and from China, and dropshipping suppliers in Lebanon, to make sure we're reliably and swiftly sourcing you only the highest quality of products at the best price possible.",
		ar: "لدينا شبكة لوجستية خاصة بنا في دير قوبل، محافظة جبل لبنان، وسائقو توصيل خاصون بنا يتيحون لنا التوصيل الآمن في جميع أنحاء لبنان وإرسال المبلغ إليك عند كل عملية توصيل ناجحة، إضافة إلى شركاء موردين محليين ومن الصين، وموردي دروبشيبينغ في لبنان، لضمان توفير منتجات عالية الجودة بأفضل الأسعار وبسرعة وموثوقية.",
		fr: "Nous disposons de notre propre réseau logistique à Deir Qoubel, dans le gouvernorat du Mont-Liban, et de nos propres livreurs, ce qui nous permet de livrer en toute sécurité dans tout le Liban et de vous envoyer le paiement à chaque livraison réussie, ainsi que de nos propres fournisseurs partenaires, locaux et en Chine, et de fournisseurs de dropshipping au Liban, afin de vous fournir rapidement et de manière fiable uniquement des produits de la plus haute qualité au meilleur prix possible.",
	},

	"about.founder.label": { en: "Founder of Droparabia", ar: "مؤسس دروب أرابيا", fr: "Fondateur de Droparabia" },
	"about.founder.bio": {
		en: "Majd Abdulsalam, a digital marketing expert and 6-figure entrepreneur, created Droparabia, shaped from all the obstacles, trials, and errors during his journey building his own e-com brands, now using that expertise to help others build successful e-com and dropshipping stores.",
		ar: "مجد عبدالسلام، خبير تسويق رقمي ورائد أعمال بأرباح ست أرقام، أسّس دروب أرابيا انطلاقًا من كل العقبات والتجارب والأخطاء التي واجهها خلال بناء علاماته التجارية الإلكترونية، ويستخدم الآن تلك الخبرة لمساعدة الآخرين على بناء متاجر إلكترونية ودروبشيبينغ ناجحة.",
		fr: "Majd Abdulsalam, expert en marketing digital et entrepreneur à 6 chiffres, a créé Droparabia à partir de tous les obstacles, essais et erreurs rencontrés en construisant ses propres marques e-commerce, et met aujourd'hui cette expertise au service des autres pour les aider à bâtir des boutiques e-commerce et dropshipping performantes.",
	},


	// --- Header Tools dropdown: one-line descriptions. Separate from tool.*.tagline because the
	// dropdown's copy (Header.astro) is shorter and worded differently from the tool pages'. ---
	"nav.tool.find-products.description": { en: "Search a huge catalog of winning products", ar: "ابحث في كتالوج ضخم من المنتجات الرابحة", fr: "Explorez un immense catalogue de produits gagnants" },
	"nav.tool.ai-winning-products.description": { en: "Let AI surface today's best-selling picks", ar: "دع الذكاء الاصطناعي يبرز الأكثر مبيعًا اليوم", fr: "Laissez l'IA révéler les meilleures ventes du jour" },
	"nav.tool.ai-studio.description": { en: "Generate product creatives in seconds", ar: "أنشئ تصاميم منتجاتك في ثوانٍ", fr: "Générez vos visuels produits en quelques secondes" },
	"nav.tool.branding.description": { en: "Build a store identity buyers trust", ar: "ابنِ هوية متجر يثق بها المشترون", fr: "Construisez une identité de boutique qui inspire confiance" },
	"nav.tool.product-request.description": { en: "Ask us to source anything you need", ar: "اطلب منا توفير أي منتج تحتاجه", fr: "Demandez-nous de sourcer tout ce dont vous avez besoin" },
	"nav.tool.leader-board.description": { en: "See how you rank against top sellers", ar: "اطّلع على ترتيبك مقارنة بأفضل البائعين", fr: "Voyez votre classement face aux meilleurs vendeurs" },

	"blog.newbies.cta": { en: "See what our sellers are saying", ar: "شاهد ما يقوله بائعونا", fr: "Découvrez ce que disent nos vendeurs" },
	"blog.exists.cta": { en: "Join the Dropvault community", ar: "انضم إلى مجتمع Dropvault", fr: "Rejoindre la communauté Dropvault" },
	// --- Catalog: product names and the one prose weight value ---
	"catalog.product.milkFrother": { en: "Electric milk frother", ar: "خفّاقة حليب كهربائية", fr: "Mousseur à lait électrique" },
	"catalog.product.blender": { en: "2 in 1 Portable Blender & Cup", ar: "خلاط وكوب محمول 2 في 1", fr: "Blender portable et gobelet 2 en 1" },
	"catalog.product.crepeMaker": { en: "Multifunction Crepe Maker", ar: "صانعة كريب متعددة الوظائف", fr: "Crêpière multifonction" },
	"catalog.product.garlicMachine": { en: "Mini Electric Garlic Machine", ar: "آلة ثوم كهربائية صغيرة", fr: "Mini hachoir à ail électrique" },
	"catalog.product.eyebrowTrimmer": { en: "2 in 1 eyebrow trimmer", ar: "مشذّب حواجب 2 في 1", fr: "Tondeuse à sourcils 2 en 1" },
	"catalog.product.hairOilApplicator": { en: "2 in 1 Electric Hair Oil Applicator and Scalp Massager", ar: "جهاز كهربائي 2 في 1 لتوزيع زيت الشعر وتدليك فروة الرأس", fr: "Applicateur d'huile capillaire et masseur du cuir chevelu électrique 2 en 1" },
	"catalog.product.hairCurler": { en: "Cordless Automatic Hair Curler", ar: "مجعّد شعر أوتوماتيكي لاسلكي", fr: "Boucleur automatique sans fil" },
	"catalog.product.wrinkleRemover": { en: "Neck and face wrinkle remover", ar: "جهاز إزالة تجاعيد الرقبة والوجه", fr: "Appareil anti-rides pour le cou et le visage" },
	"catalog.product.gunMassager": { en: "Gun Massager", ar: "مسدس تدليك", fr: "Pistolet de massage" },
	"catalog.product.galaxyProjector": { en: "Astronaut Galaxy Sky Projector Rechargeable with Bluetooth Speaker", ar: "جهاز عرض سماء المجرّة على شكل رائد فضاء، قابل للشحن مع مكبّر صوت بلوتوث", fr: "Projecteur de ciel galactique astronaute rechargeable avec enceinte Bluetooth" },
	"catalog.product.rainCloud": { en: "RGB Raining Humidifier Rain Cloud", ar: "مرطّب هواء سحابة ممطرة RGB", fr: "Humidificateur nuage de pluie RGB" },
	"catalog.product.spaceshipHumidifier": { en: "Astronaut Spaceship Aromatherapy Air Humidifier Purifier", ar: "مرطّب ومنقّي هواء بالعلاج العطري على شكل سفينة فضاء", fr: "Humidificateur purificateur d'air aromathérapie, vaisseau spatial astronaute" },
	"catalog.product.solarLamp": { en: "Outdoor Waterproof LED Floor Lamp Solar", ar: "مصباح أرضي LED خارجي بالطاقة الشمسية ومقاوم للماء", fr: "Lampe de sol LED solaire extérieure étanche" },
	"catalog.product.flameDiffuser": { en: "Flame Diffuser Night Light Gift Set Decor Fire Flame Humidifier", ar: "مرطّب وناشر روائح بتأثير اللهب مع ضوء ليلي، طقم هدية للديكور", fr: "Diffuseur effet flamme et veilleuse, humidificateur déco en coffret cadeau" },
	"catalog.product.lintRemover": { en: "Lint Remover", ar: "مزيل الوبر", fr: "Rasoir anti-bouloches" },
	"catalog.product.shoeCleaner": { en: "Shoe cleaner", ar: "منظّف الأحذية", fr: "Nettoyant pour chaussures" },
	"catalog.value.shoeWeight": { en: "150ml/bottle (≈ 0.150 Kg)", ar: "150ml/عبوة (≈ 0.150 Kg)", fr: "150 ml/flacon (≈ 0,150 Kg)" },

	// --- Blog: shared chrome ---
	"blog.ui.pageContents": { en: "Page Contents", ar: "محتويات الصفحة", fr: "Sommaire" },
	"blog.ui.updated": { en: "Updated", ar: "تم التحديث", fr: "Mis à jour" },

	// --- Blog: article bodies. Keys are positional (b0, b1, …) in source order; the English
	// here is the text extracted from each post, so edit a post's copy and its entry together. ---
	"blog.newbies.b0": {
		en: `Dropshipping is one of the best business models beginners in the world of e-commerce can pick up, especially for Lebanese with a very limited budget who want to start their own online hustle regardless of their experience in digital marketing or whether they're currently living in Lebanon or abroad as a student outside the country.`,
		ar: `الدروبشيبينغ من أفضل نماذج الأعمال التي يمكن للمبتدئين في عالم التجارة الإلكترونية البدء بها، خاصةً للّبنانيين ذوي الميزانية المحدودة جدًا الذين يريدون بدء مشروعهم الخاص عبر الإنترنت، بغض النظر عن خبرتهم في التسويق الرقمي، وسواء كانوا يعيشون حاليًا في لبنان أو في الخارج كطلاب خارج البلاد.`,
		fr: `Le dropshipping est l'un des meilleurs modèles économiques que les débutants en e-commerce puissent adopter, en particulier pour les Libanais disposant d'un budget très limité qui veulent lancer leur propre activité en ligne, quelle que soit leur expérience en marketing digital, qu'ils vivent actuellement au Liban ou à l'étranger en tant qu'étudiants.`,
	},
	"blog.newbies.b1": {
		en: `What is Dropshipping`,
		ar: `ما هو الدروبشيبينغ`,
		fr: `Qu'est-ce que le dropshipping`,
	},
	"blog.newbies.b2": {
		en: `But before we dive into our topic of how Lebanese can successfully start their own dropshipping business, let's address the elephant in the room.`,
		ar: `لكن قبل أن نخوض في موضوعنا حول كيف يمكن للّبنانيين بدء مشروع دروبشيبينغ ناجح، دعونا نتطرّق إلى السؤال الأهم.`,
		fr: `Mais avant d'aborder notre sujet — comment les Libanais peuvent réussir à lancer leur propre activité de dropshipping —, parlons de l'éléphant dans la pièce.`,
	},
	"blog.newbies.b3": {
		en: `What is dropshipping?`,
		ar: `ما هو الدروبشيبينغ؟`,
		fr: `Qu'est-ce que le dropshipping ?`,
	},
	"blog.newbies.b4": {
		en: `Dropshipping is the process of acting as the middle man between the supplier or the manufacturer of a product and the consumer who purchases the product, meaning you're selling these products without even touching or owning them. You help sell these products, the supplier deducts the cost of their product from a successful sale, and you get to keep the profit. Simple, isn't it?`,
		ar: `الدروبشيبينغ هو أن تكون الوسيط بين المورّد أو مُصنّع المنتج وبين المستهلك الذي يشتريه، أي أنك تبيع هذه المنتجات دون أن تلمسها أو تمتلكها. أنت تساعد في بيع هذه المنتجات، والمورّد يقتطع تكلفة منتجه من عملية البيع الناجحة، وأنت تحتفظ بالربح. بسيط، أليس كذلك؟`,
		fr: `Le dropshipping consiste à jouer l'intermédiaire entre le fournisseur ou le fabricant d'un produit et le consommateur qui l'achète : vous vendez ces produits sans jamais les toucher ni les posséder. Vous aidez à les vendre, le fournisseur déduit le coût de son produit de chaque vente réussie, et vous gardez le bénéfice. Simple, non ?`,
	},
	"blog.newbies.b5": {
		en: `Why Choose Dropshipping`,
		ar: `لماذا تختار الدروبشيبينغ`,
		fr: `Pourquoi choisir le dropshipping`,
	},
	"blog.newbies.b6": {
		en: `Unlike e-commerce, where you need a huge budget of at least $3,000 to cover testing and trying different products, purchasing products in bulk uncertain if they'll sell, and keeping you stuck with an inventory, that's not the case with dropshipping:`,
		ar: `على عكس التجارة الإلكترونية، حيث تحتاج إلى ميزانية ضخمة لا تقل عن 3,000 دولار لتغطية تجربة واختبار منتجات مختلفة، وشراء منتجات بالجملة دون أن تعرف إن كانت ستُباع، ثم تبقى عالقًا مع مخزون، فالأمر مختلف مع الدروبشيبينغ:`,
		fr: `Contrairement au e-commerce, où il vous faut un budget conséquent d'au moins 3 000 $ pour tester différents produits, acheter en gros sans savoir s'ils se vendront et vous retrouver coincé avec du stock, ce n'est pas le cas avec le dropshipping :`,
	},
	"blog.newbies.b7": {
		en: `This is the exact model multi billion dollar brands like Gymshark and Wayfair used to build their businesses without owning inventory and risking their budgets in their starting phase!`,
		ar: `هذا هو النموذج نفسه الذي استخدمته علامات تجارية بمليارات الدولارات مثل Gymshark وWayfair لبناء أعمالها دون امتلاك مخزون ودون المجازفة بميزانياتها في مرحلة البداية!`,
		fr: `C'est exactement le modèle qu'ont utilisé des marques valant des milliards comme Gymshark et Wayfair pour bâtir leur activité sans posséder de stock ni risquer leur budget au démarrage !`,
	},
	"blog.newbies.b8": {
		en: `What will you learn?`,
		ar: `ماذا ستتعلّم؟`,
		fr: `Qu'allez-vous apprendre ?`,
	},
	"blog.newbies.b9": {
		en: `In this article, you're going to learn:`,
		ar: `في هذا المقال، ستتعلّم:`,
		fr: `Dans cet article, vous allez apprendre :`,
	},
	"blog.newbies.b10": {
		en: `Deciding the niche`,
		ar: `اختيار المجال`,
		fr: `Choisir sa niche`,
	},
	"blog.newbies.b11": {
		en: `This is one of the most important steps that usually gets overlooked by almost everyone who wants to start dropshipping.`,
		ar: `هذه من أهم الخطوات التي يتجاهلها عادةً كل من يريد بدء الدروبشيبينغ تقريبًا.`,
		fr: `C'est l'une des étapes les plus importantes, et presque tous ceux qui veulent se lancer dans le dropshipping la négligent.`,
	},
	"blog.newbies.b12": {
		en: `"Why sell only fitness products when I can also sell beauty products and car products?"`,
		ar: `"لماذا أبيع منتجات اللياقة فقط بينما يمكنني أيضًا بيع منتجات التجميل ومنتجات السيارات؟"`,
		fr: `« Pourquoi vendre uniquement des produits de fitness alors que je peux aussi vendre des produits de beauté et des produits pour voiture ? »`,
	},
	"blog.newbies.b13": {
		en: `Unless you want to look like a generic dollar store that signals "cheap" and "low quality" and doesn't demonstrate a clear purpose, go ahead, no one is stopping you :)`,
		ar: `إلا إذا أردت أن تبدو كمتجر عادي يبيع كل شيء بدولار، يوحي بأنه "رخيص" و"منخفض الجودة" ولا يُظهر هدفًا واضحًا، فتفضّل، لا أحد يمنعك :)`,
		fr: `À moins que vous vouliez ressembler à un bazar générique qui respire le « pas cher » et la « mauvaise qualité », sans aucun positionnement clair — allez-y, personne ne vous en empêche :)`,
	},
	"blog.newbies.b14": {
		en: `Here's why choosing a niche is a must:`,
		ar: `إليك لماذا يُعدّ اختيار المجال أمرًا ضروريًا:`,
		fr: `Voici pourquoi choisir une niche est indispensable :`,
	},
	"blog.newbies.b15": {
		en: `The most profitable niches you can choose from are:`,
		ar: `أكثر المجالات ربحية التي يمكنك الاختيار منها هي:`,
		fr: `Les niches les plus rentables parmi lesquelles choisir sont :`,
	},
	"blog.newbies.b16": {
		en: `But please, and I'm saying this for your own good, do NOT under any circumstances go for dangerous, hazardous items or contraband like:`,
		ar: `لكن أرجوك، وأقول هذا لمصلحتك، لا تتّجه تحت أي ظرف من الظروف إلى المنتجات الخطرة أو الممنوعة مثل:`,
		fr: `Mais s'il vous plaît, et je vous le dis pour votre bien : ne vous tournez EN AUCUN CAS vers des articles dangereux ou de la contrebande, comme :`,
	},
	"blog.newbies.b17": {
		en: `Qualifying a product`,
		ar: `تقييم المنتج`,
		fr: `Qualifier un produit`,
	},
	"blog.newbies.b18": {
		en: `So you took my advice and decided on your niche, splendid for you!`,
		ar: `إذًا أخذت بنصيحتي واخترت مجالك، رائع!`,
		fr: `Vous avez donc suivi mon conseil et choisi votre niche — bravo !`,
	},
	"blog.newbies.b19": {
		en: `Now let's learn about the factors that will allow you to almost instantly identify whether a product is a seller or a loser.`,
		ar: `الآن لنتعرّف على العوامل التي ستتيح لك أن تعرف فورًا تقريبًا ما إذا كان المنتج رابحًا أم خاسرًا.`,
		fr: `Voyons maintenant les critères qui vous permettront de savoir presque instantanément si un produit va se vendre ou non.`,
	},
	"blog.newbies.b20": {
		en: `1st: Does it solve a real problem?`,
		ar: `أولًا: هل يحلّ مشكلة حقيقية؟`,
		fr: `1er critère : résout-il un vrai problème ?`,
	},
	"blog.newbies.b21": {
		en: `This is really important because not everyone is willing to spend their money on some useless junk (unless it has a wow factor, which we will discuss in a moment).`,
		ar: `هذا مهم جدًا لأن ليس كل شخص مستعدًا لإنفاق ماله على أشياء عديمة الفائدة (إلا إذا كان فيها عامل إبهار، وسنتحدث عنه بعد قليل).`,
		fr: `C'est très important, car tout le monde n'est pas prêt à dépenser son argent pour un gadget inutile (sauf s'il a un effet « waouh », dont nous parlerons dans un instant).`,
	},
	"blog.newbies.b22": {
		en: `Take, for example, a fidget spinner. What problems does it solve?`,
		ar: `خذ على سبيل المثال لعبة "فيدجت سبينر". ما المشاكل التي تحلّها؟`,
		fr: `Prenons par exemple le hand spinner. Quels problèmes résout-il ?`,
	},
	"blog.newbies.b23": {
		en: `...`,
		ar: `...`,
		fr: `...`,
	},
	"blog.newbies.b24": {
		en: `That's right.`,
		ar: `بالضبط.`,
		fr: `Exactement.`,
	},
	"blog.newbies.b25": {
		en: `Nothing.`,
		ar: `لا شيء.`,
		fr: `Aucun.`,
	},
	"blog.newbies.b26": {
		en: `This is a mere distracting toy that became a fad, especially in 2018, specifically during the time when all schools in Lebanon were preparing for their final exams.`,
		ar: `إنها مجرد لعبة مُلهية تحوّلت إلى موضة، خاصةً في عام 2018، وتحديدًا في الفترة التي كانت فيها جميع مدارس لبنان تستعد للامتحانات النهائية.`,
		fr: `Ce n'est qu'un jouet distrayant devenu une mode, surtout en 2018, précisément à l'époque où toutes les écoles du Liban préparaient leurs examens de fin d'année.`,
	},
	"blog.newbies.b27": {
		en: `How about a lotion that removes wrinkles?`,
		ar: `ماذا عن كريم يزيل التجاعيد؟`,
		fr: `Et une lotion qui efface les rides ?`,
	},
	"blog.newbies.b28": {
		en: `Now this is a real problem-solving product that people, especially women in their 40s, have no choice but to buy.`,
		ar: `هذا منتج يحلّ مشكلة حقيقية فعلًا، ولا يملك الناس، خاصةً النساء في الأربعينيات، خيارًا سوى شرائه.`,
		fr: `Voilà un vrai produit qui résout un problème, que les gens — en particulier les femmes dans la quarantaine — n'ont d'autre choix que d'acheter.`,
	},
	"blog.newbies.b29": {
		en: `Always ask yourself this question: Does this product solve a real problem? If yes, then sell it.`,
		ar: `اسأل نفسك دائمًا هذا السؤال: هل يحلّ هذا المنتج مشكلة حقيقية؟ إن كان الجواب نعم، فبِعه.`,
		fr: `Posez-vous toujours cette question : ce produit résout-il un vrai problème ? Si oui, vendez-le.`,
	},
	"blog.newbies.b30": {
		en: `If no, either pass on it, or consider selling it if it's part of a very strong ongoing trend that's currently happening, from which you can make good money.`,
		ar: `وإن كان الجواب لا، فإما أن تتجاوزه، أو تفكّر في بيعه إن كان جزءًا من موجة رائجة وقوية جدًا تحدث حاليًا ويمكنك تحقيق ربح جيد منها.`,
		fr: `Si non, passez votre chemin, ou envisagez de le vendre uniquement s'il fait partie d'une tendance très forte en ce moment, dont vous pouvez tirer un bon profit.`,
	},
	"blog.newbies.b31": {
		en: `2nd: Does it have a good profit margin?`,
		ar: `ثانيًا: هل لديه هامش ربح جيد؟`,
		fr: `2e critère : offre-t-il une bonne marge ?`,
	},
	"blog.newbies.b32": {
		en: `You want a selling price much higher than the supplier cost, usually a 3x markup or more. A skincare gadget sourced at $8 and sold for $30 works well. A phone charger cable sourced at $4 that only sells for $6 doesn't, since after ad costs you make almost nothing.`,
		ar: `تريد سعر بيع أعلى بكثير من تكلفة المورّد، عادةً ثلاثة أضعاف أو أكثر. أداة عناية بالبشرة بتكلفة 8 دولارات وتُباع بـ30 دولارًا خيار ممتاز. أما كابل شاحن هاتف بتكلفة 4 دولارات ولا يُباع إلا بـ6 دولارات فلا، لأنك بعد تكاليف الإعلانات لن تربح شيئًا تقريبًا.`,
		fr: `Vous voulez un prix de vente bien supérieur au coût fournisseur, généralement 3 fois plus ou davantage. Un accessoire de soin de la peau acheté 8 $ et vendu 30 $ fonctionne bien. Un câble de chargeur acheté 4 $ qui ne se vend que 6 $, non : après les frais publicitaires, vous ne gagnez presque rien.`,
	},
	"blog.newbies.b33": {
		en: `3rd: Is it lightweight?`,
		ar: `ثالثًا: هل هو خفيف الوزن؟`,
		fr: `3e critère : est-il léger ?`,
	},
	"blog.newbies.b34": {
		en: `Light products mean cheaper shipping, better margins, and faster delivery. Aim for items under about 1 kg, like jewelry, phone cases, watches, or small beauty tools. Anything heavy, like a 5 kg appliance or a piece of furniture, eats into your profit through shipping and slows delivery.`,
		ar: `المنتجات الخفيفة تعني شحنًا أرخص وهوامش أفضل وتوصيلًا أسرع. استهدف منتجات يقل وزنها عن كيلوغرام تقريبًا، مثل المجوهرات وأغطية الهواتف والساعات وأدوات التجميل الصغيرة. أما أي شيء ثقيل، كجهاز بوزن 5 كيلوغرامات أو قطعة أثاث، فيستنزف ربحك عبر الشحن ويبطئ التوصيل.`,
		fr: `Des produits légers, c'est une livraison moins chère, de meilleures marges et des délais plus courts. Visez des articles de moins d'environ 1 kg, comme des bijoux, des coques de téléphone, des montres ou de petits accessoires de beauté. Tout ce qui est lourd, comme un appareil de 5 kg ou un meuble, grignote votre bénéfice avec les frais de livraison et ralentit les délais.`,
	},
	"blog.newbies.b35": {
		en: `4th: Is it a retainer?`,
		ar: `رابعًا: هل يتكرّر شراؤه؟`,
		fr: `4e critère : incite-t-il au rachat ?`,
	},
	"blog.newbies.b36": {
		en: `This doesn't necessarily determine whether a product is a winner or not, but is rather an optional consideration.`,
		ar: `هذا لا يحدد بالضرورة ما إذا كان المنتج رابحًا أم لا، بل هو اعتبار اختياري.`,
		fr: `Ce critère ne détermine pas forcément si un produit est gagnant ou non ; c'est plutôt un point optionnel à considérer.`,
	},
	"blog.newbies.b37": {
		en: `A good example of a retainer product is a container of health benefit supplement gummies. Once they finish the container, they're going to order a new one.`,
		ar: `من الأمثلة الجيدة على المنتجات التي يتكرّر شراؤها علبة حلوى المكمّلات الغذائية الصحية. بمجرد أن ينهي العميل العلبة، سيطلب واحدة جديدة.`,
		fr: `Un bon exemple de produit à rachat est un pot de gummies de compléments alimentaires. Une fois le pot terminé, le client en commandera un nouveau.`,
	},
	"blog.newbies.b38": {
		en: `An example of a non-retainer product is a shaving machine, which could last a lifetime for them unless they break it or lose it.`,
		ar: `ومن أمثلة المنتجات التي لا يتكرّر شراؤها ماكينة الحلاقة، التي قد تدوم مدى الحياة ما لم تنكسر أو تضيع.`,
		fr: `À l'inverse, une tondeuse de rasage est un produit sans rachat : elle peut durer toute une vie, sauf si le client la casse ou la perd.`,
	},
	"blog.newbies.b39": {
		en: `The old way of dropshipping`,
		ar: `الطريقة القديمة في الدروبشيبينغ`,
		fr: `L'ancienne façon de faire du dropshipping`,
	},
	"blog.newbies.b40": {
		en: `The old and traditional way of dropshipping had many cons that caused almost everyone to label dropshipping as a "dead" or "terrible" business model.`,
		ar: `كانت للطريقة التقليدية والقديمة في الدروبشيبينغ عيوب كثيرة جعلت الجميع تقريبًا يصف الدروبشيبينغ بأنه نموذج عمل "ميت" أو "سيئ".`,
		fr: `L'ancienne méthode, traditionnelle, du dropshipping avait de nombreux inconvénients qui ont poussé presque tout le monde à qualifier le dropshipping de modèle « mort » ou « nul ».`,
	},
	"blog.newbies.b41": {
		en: `And these cons are:`,
		ar: `وهذه العيوب هي:`,
		fr: `Et ces inconvénients sont :`,
	},
	"blog.newbies.b42": {
		en: `How Droparabia reshaped digital retail`,
		ar: `كيف أعاد دروب أرابيا تشكيل التجارة الرقمية`,
		fr: `Comment Droparabia a transformé le commerce en ligne`,
	},
	"blog.newbies.b43": {
		en: `Because of these major cons left by the old dropshipping model and traditional e-commerce, Droparabia, the first dropshipping platform in Lebanon, was born.`,
		ar: `بسبب هذه العيوب الكبيرة التي خلّفها نموذج الدروبشيبينغ القديم والتجارة الإلكترونية التقليدية، وُلد دروب أرابيا، أول منصة دروبشيبينغ في لبنان.`,
		fr: `C'est à cause de ces inconvénients majeurs laissés par l'ancien modèle de dropshipping et le e-commerce traditionnel qu'est né Droparabia, la première plateforme de dropshipping au Liban.`,
	},
	"blog.newbies.b44": {
		en: `With this platform, you no longer have to search for hours for a product to sell, find or deal with suppliers, or ever worry about delivering the products to your customers' doorsteps.`,
		ar: `مع هذه المنصة، لم يعد عليك البحث لساعات عن منتج لبيعه، أو إيجاد الموردين والتعامل معهم، أو القلق يومًا بشأن توصيل المنتجات إلى أبواب عملائك.`,
		fr: `Avec cette plateforme, vous n'avez plus à chercher pendant des heures un produit à vendre, à trouver des fournisseurs ou à traiter avec eux, ni à vous soucier de livrer les produits jusqu'à la porte de vos clients.`,
	},
	"blog.newbies.b45": {
		en: `Droparabia finds and sources for you a wide variety of catalog products consisting only of winning products with real market demand in the Lebanese market!`,
		ar: `يجد لك دروب أرابيا ويوفّر كتالوجًا متنوعًا من المنتجات، يتكوّن فقط من منتجات رابحة عليها طلب حقيقي في السوق اللبناني!`,
		fr: `Droparabia trouve et source pour vous un large catalogue composé uniquement de produits gagnants, avec une vraie demande sur le marché libanais !`,
	},
	"blog.newbies.b46": {
		en: `With its one-of-a-kind and advanced logistics network and infrastructure, you pick the product you want to sell by connecting your Shopify store to Droparabia through its own app extension, and add the product directly to your store with the click of a button.`,
		ar: `بفضل شبكته اللوجستية وبنيته التحتية المتطوّرة والفريدة من نوعها، تختار المنتج الذي تريد بيعه عبر ربط متجرك على شوبيفاي بدروب أرابيا من خلال إضافته الخاصة، وتضيف المنتج مباشرة إلى متجرك بنقرة زر.`,
		fr: `Grâce à son réseau logistique et à son infrastructure avancés et uniques, vous choisissez le produit que vous voulez vendre en connectant votre boutique Shopify à Droparabia via sa propre extension, puis vous l'ajoutez directement à votre boutique en un clic.`,
	},
	"blog.newbies.b47": {
		en: `And Droparabia will handle the packaging and order delivery for you as soon as a customer places an order on your Shopify store!`,
		ar: `ويتولى دروب أرابيا التغليف وتوصيل الطلب نيابةً عنك فور أن يضع العميل طلبًا على متجرك في شوبيفاي!`,
		fr: `Et Droparabia s'occupe de l'emballage et de la livraison dès qu'un client passe commande sur votre boutique Shopify !`,
	},
	"blog.newbies.b48": {
		en: `You don't own or manage inventory, you don't stress over deliveries and order fulfillment, and you only pay for the product's cost while keeping the profit!`,
		ar: `لا تمتلك مخزونًا ولا تديره، ولا تقلق بشأن التوصيل وتجهيز الطلبات، وتدفع فقط تكلفة المنتج وتحتفظ بالربح!`,
		fr: `Vous ne possédez ni ne gérez de stock, vous ne stressez pas pour les livraisons et la préparation des commandes, et vous ne payez que le coût du produit en gardant le bénéfice !`,
	},
	"blog.newbies.b49": {
		en: `On top of all that, if a certain product you wanted to sell is not present on Droparabia, all you have to do is provide a screenshot and details of this product in the "request product" feature on Droparabia, and the platform will find and source it for you!`,
		ar: `وفوق كل ذلك، إذا لم يكن منتج معيّن تريد بيعه متوفرًا على دروب أرابيا، فكل ما عليك فعله هو تقديم لقطة شاشة وتفاصيل هذا المنتج عبر ميزة "طلب منتج" على دروب أرابيا، وستجده المنصة وتوفّره لك!`,
		fr: `En plus de tout cela, si un produit que vous voulez vendre n'est pas disponible sur Droparabia, il vous suffit de fournir une capture d'écran et les détails de ce produit via la fonctionnalité « Demande de produit » de Droparabia, et la plateforme le trouvera et le sourcera pour vous !`,
	},
	"blog.newbies.b50": {
		en: `Summary`,
		ar: `الخلاصة`,
		fr: `En résumé`,
	},
	"blog.newbies.b51": {
		en: `How much you can earn from your dropshipping business depends on several factors, such as:`,
		ar: `يعتمد مقدار ما يمكنك كسبه من مشروع الدروبشيبينغ على عدة عوامل، مثل:`,
		fr: `Ce que vous pouvez gagner avec votre activité de dropshipping dépend de plusieurs facteurs, comme :`,
	},
	"blog.newbies.b52": {
		en: `But I'm not going to leave you hanging without an answer. Instead, I'll let these guys answer the question for you.`,
		ar: `لكنني لن أتركك دون إجابة. بدلًا من ذلك، سأدع هؤلاء يجيبون عن السؤال نيابةً عني.`,
		fr: `Mais je ne vais pas vous laisser sans réponse. Je vais plutôt laisser ces personnes répondre à la question pour vous.`,
	},
	"blog.newbies.b53": {
		en: `You need only a small budget to get started`,
		ar: `لا تحتاج إلا إلى ميزانية صغيرة للبدء`,
		fr: `Il ne vous faut qu'un petit budget pour démarrer`,
	},
	"blog.newbies.b54": {
		en: `No managing or owning inventory`,
		ar: `لا إدارة ولا امتلاك للمخزون`,
		fr: `Aucun stock à gérer ni à posséder`,
	},
	"blog.newbies.b55": {
		en: `You focus only on marketing and advertising`,
		ar: `تركّز فقط على التسويق والإعلان`,
		fr: `Vous vous concentrez uniquement sur le marketing et la publicité`,
	},
	"blog.newbies.b56": {
		en: `How to decide on your store's niche`,
		ar: `كيف تختار مجال متجرك`,
		fr: `Comment choisir la niche de votre boutique`,
	},
	"blog.newbies.b57": {
		en: `How to find winning products`,
		ar: `كيف تجد المنتجات الرابحة`,
		fr: `Comment trouver des produits gagnants`,
	},
	"blog.newbies.b58": {
		en: `Factors that qualify a winning product`,
		ar: `العوامل التي تجعل المنتج رابحًا`,
		fr: `Les critères d'un produit gagnant`,
	},
	"blog.newbies.b59": {
		en: `Cons of dropshipping`,
		ar: `عيوب الدروبشيبينغ`,
		fr: `Les inconvénients du dropshipping`,
	},
	"blog.newbies.b60": {
		en: `How Droparabia addresses these cons`,
		ar: `كيف يعالج دروب أرابيا هذه العيوب`,
		fr: `Comment Droparabia y remédie`,
	},
	"blog.newbies.b61": {
		en: `It helps you build a brand that has a clear purpose and demonstrates expertise in a certain niche, which can help you earn the complete trust of a certain audience`,
		ar: `يساعدك على بناء علامة تجارية ذات هدف واضح تُظهر خبرة في مجال معيّن، ما يساعدك على كسب ثقة جمهور معيّن بالكامل`,
		fr: `Elle vous aide à bâtir une marque avec une vraie raison d'être, qui démontre une expertise dans une niche précise, ce qui vous permet de gagner la pleine confiance d'une audience donnée`,
	},
	"blog.newbies.b62": {
		en: `It allows you to position yourself as a problem solver rather than someone who sells "products"`,
		ar: `يتيح لك تقديم نفسك كمن يحلّ المشاكل بدلًا من شخص يبيع "منتجات"`,
		fr: `Elle vous permet de vous positionner comme quelqu'un qui résout des problèmes, et non comme quelqu'un qui vend des « produits »`,
	},
	"blog.newbies.b63": {
		en: `It helps you identify your target audience so you can empathize with their problems and pain points and speak directly to them`,
		ar: `يساعدك على تحديد جمهورك المستهدف لتتفهّم مشاكلهم ونقاط ألمهم وتخاطبهم مباشرة`,
		fr: `Elle vous aide à identifier votre public cible afin de comprendre ses problèmes et ses points de douleur, et de lui parler directement`,
	},
	"blog.newbies.b64": {
		en: `Health and beauty`,
		ar: `الصحة والجمال`,
		fr: `Santé et beauté`,
	},
	"blog.newbies.b65": {
		en: `Fitness and wellness`,
		ar: `اللياقة والعافية`,
		fr: `Fitness et bien-être`,
	},
	"blog.newbies.b66": {
		en: `Cars`,
		ar: `السيارات`,
		fr: `Automobile`,
	},
	"blog.newbies.b67": {
		en: `Pets`,
		ar: `الحيوانات الأليفة`,
		fr: `Animaux de compagnie`,
	},
	"blog.newbies.b68": {
		en: `Kitchenware`,
		ar: `أدوات المطبخ`,
		fr: `Ustensiles de cuisine`,
	},
	"blog.newbies.b69": {
		en: `Electronics`,
		ar: `الإلكترونيات`,
		fr: `Électronique`,
	},
	"blog.newbies.b70": {
		en: `And many more niches you can find on Droparabia`,
		ar: `والكثير من المجالات الأخرى التي يمكنك إيجادها على دروب أرابيا`,
		fr: `Et bien d'autres niches que vous trouverez sur Droparabia`,
	},
	"blog.newbies.b71": {
		en: `Weapons`,
		ar: `الأسلحة`,
		fr: `Les armes`,
	},
	"blog.newbies.b72": {
		en: `Adult products`,
		ar: `منتجات البالغين`,
		fr: `Les produits pour adultes`,
	},
	"blog.newbies.b73": {
		en: `Unknown or unauthorized medicines`,
		ar: `الأدوية المجهولة أو غير المرخّصة`,
		fr: `Les médicaments inconnus ou non autorisés`,
	},
	"blog.newbies.b74": {
		en: `Having to search for hours for a product to sell`,
		ar: `الاضطرار إلى البحث لساعات عن منتج لبيعه`,
		fr: `Devoir chercher pendant des heures un produit à vendre`,
	},
	"blog.newbies.b75": {
		en: `Finding reliable suppliers who hopefully have the product you want to sell`,
		ar: `إيجاد موردين موثوقين يملكون، على أمل، المنتج الذي تريد بيعه`,
		fr: `Trouver des fournisseurs fiables qui, avec un peu de chance, ont le produit que vous voulez vendre`,
	},
	"blog.newbies.b76": {
		en: `Finding a reliable delivery company to deliver the product to the customer as soon as possible`,
		ar: `إيجاد شركة توصيل موثوقة لتوصيل المنتج إلى العميل في أسرع وقت ممكن`,
		fr: `Trouver une société de livraison fiable pour livrer le produit au client le plus vite possible`,
	},
	"blog.newbies.b77": {
		en: `No control over product quality, which could lead to customers demanding a refund`,
		ar: `لا تحكّم في جودة المنتج، ما قد يدفع العملاء إلى المطالبة باسترداد أموالهم`,
		fr: `Aucun contrôle sur la qualité du produit, ce qui peut pousser les clients à exiger un remboursement`,
	},
	"blog.newbies.b78": {
		en: `How much effort are you willing to put into this business?`,
		ar: `ما مقدار الجهد الذي أنت مستعد لبذله في هذا المشروع؟`,
		fr: `Quel effort êtes-vous prêt à investir dans cette activité ?`,
	},
	"blog.newbies.b79": {
		en: `Are you willing to bounce back from trials and errors?`,
		ar: `هل أنت مستعد للنهوض من جديد بعد التجارب والأخطاء؟`,
		fr: `Êtes-vous prêt à rebondir après vos essais et vos erreurs ?`,
	},
	"blog.newbies.b80": {
		en: `Do you treat dropshipping as a business model or a get-rich-quick scheme?`,
		ar: `هل تتعامل مع الدروبشيبينغ كنموذج عمل أم كمخطط للثراء السريع؟`,
		fr: `Considérez-vous le dropshipping comme un modèle économique ou comme un plan pour devenir riche rapidement ?`,
	},
	"blog.dead.b0": {
		en: `If you spend enough time on social media, especially where the algorithm has been feeding you lots of products about businesses and stuff, you probably came across at least one of these topics: "Dropshipping is dead" or "Dropshipping is the worst model you can start this year." Or perhaps you came across a tier list video ranking different business models and dropshipping was rated an F tier.`,
		ar: `إذا كنت تقضي وقتًا كافيًا على وسائل التواصل الاجتماعي، خاصةً حيث تغذّيك الخوارزمية بالكثير من المحتوى عن الأعمال وما شابه، فمن المحتمل أنك صادفت واحدًا على الأقل من هذه المواضيع: "الدروبشيبينغ مات" أو "الدروبشيبينغ أسوأ نموذج يمكنك البدء به هذا العام." أو ربما صادفت فيديو تصنيف يرتّب نماذج الأعمال المختلفة، وقد حصل فيه الدروبشيبينغ على أدنى تصنيف.`,
		fr: `Si vous passez assez de temps sur les réseaux sociaux, surtout là où l'algorithme vous abreuve de contenus sur le business et compagnie, vous êtes sûrement tombé sur au moins l'un de ces sujets : « Le dropshipping est mort » ou « Le dropshipping est le pire modèle à lancer cette année. » Ou peut-être avez-vous vu une vidéo de classement des modèles économiques où le dropshipping était relégué tout en bas, au rang F.`,
	},
	"blog.dead.b1": {
		en: `What's this article about?`,
		ar: `عمّ يتحدث هذا المقال؟`,
		fr: `De quoi parle cet article ?`,
	},
	"blog.dead.b2": {
		en: `But why?`,
		ar: `لكن لماذا؟`,
		fr: `Mais pourquoi ?`,
	},
	"blog.dead.b3": {
		en: `Are they true? Or are they just some excuses creators and course sellers use to justify your need to purchase their coaching programs?`,
		ar: `هل هي صحيحة؟ أم أنها مجرد أعذار يستخدمها صنّاع المحتوى وبائعو الدورات لتبرير حاجتك إلى شراء برامجهم التدريبية؟`,
		fr: `Est-ce vrai ? Ou s'agit-il simplement d'excuses que les créateurs et les vendeurs de formations utilisent pour justifier que vous achetiez leurs programmes de coaching ?`,
	},
	"blog.dead.b4": {
		en: `That's exactly what we're going to discuss in this article.`,
		ar: `هذا بالضبط ما سنناقشه في هذا المقال.`,
		fr: `C'est exactement ce dont nous allons parler dans cet article.`,
	},
	"blog.dead.b5": {
		en: `Where did this myth come from?`,
		ar: `من أين جاءت هذه الخرافة؟`,
		fr: `D'où vient ce mythe ?`,
	},
	"blog.dead.b6": {
		en: `There are two origins for the "dropshipping is dead" myth.`,
		ar: `هناك مصدران لخرافة "الدروبشيبينغ مات".`,
		fr: `Le mythe du « dropshipping est mort » a deux origines.`,
	},
	"blog.dead.b7": {
		en: `Origin A: Failed Case Studies`,
		ar: `المصدر أ: دراسات الحالة الفاشلة`,
		fr: `Origine A : les cas d'échec`,
	},
	"blog.dead.b8": {
		en: `These are the people who were sold luxurious dreams by those influencers showcasing their wealth, their Rolex watches, their multi-thousand sports cars...`,
		ar: `هؤلاء هم الأشخاص الذين بيعت لهم أحلام فاخرة من قِبَل المؤثرين الذين يستعرضون ثراءهم، وساعات رولكس، وسياراتهم الرياضية التي تُقدَّر بآلاف الدولارات...`,
		fr: `Ce sont les personnes à qui des influenceurs ont vendu des rêves de luxe en exhibant leur richesse, leurs montres Rolex, leurs voitures de sport à plusieurs milliers de dollars...`,
	},
	"blog.dead.b9": {
		en: `And of course it's in our human nature to be attracted to these things and the desire to obtain them, should the method behind them actually exist.`,
		ar: `وبالطبع، من طبيعتنا البشرية أن تجذبنا هذه الأشياء وأن نرغب في الحصول عليها، إن كانت الطريقة التي تقف وراءها موجودة فعلًا.`,
		fr: `Et bien sûr, il est dans notre nature humaine d'être attirés par ces choses et de vouloir les obtenir, si tant est que la méthode derrière existe vraiment.`,
	},
	"blog.dead.b10": {
		en: `So here's what usually happens:`,
		ar: `إليك ما يحدث عادةً:`,
		fr: `Voici donc ce qui se passe généralement :`,
	},
	"blog.dead.b11": {
		en: `They purchase a course from the same influencers and gurus who sold them the dream, or learn about dropshipping from free tutorials.`,
		ar: `يشترون دورة من المؤثرين والخبراء المزعومين أنفسهم الذين باعوهم الحلم، أو يتعلّمون الدروبشيبينغ من دروس مجانية.`,
		fr: `Ils achètent une formation auprès des mêmes influenceurs et gourous qui leur ont vendu le rêve, ou apprennent le dropshipping grâce à des tutoriels gratuits.`,
	},
	"blog.dead.b12": {
		en: `They start their first dropshipping business, pick the product, run the advertisements and lay in their beds, already picturing the amount of sales they're going to make and constantly thinking about what they want to buy first with the money they're going to make.`,
		ar: `يبدؤون مشروع الدروبشيبينغ الأول، ويختارون المنتج، ويطلقون الإعلانات ويستلقون في أسرّتهم، متخيّلين مسبقًا حجم المبيعات التي سيحققونها، ويفكرون باستمرار فيما يريدون شراءه أولًا بالمال الذي سيجنونه.`,
		fr: `Ils lancent leur première boutique de dropshipping, choisissent le produit, lancent les publicités puis s'allongent dans leur lit en imaginant déjà le volume de ventes qu'ils vont faire, et en pensant sans cesse à ce qu'ils s'achèteront en premier avec l'argent gagné.`,
	},
	"blog.dead.b13": {
		en: `Only to be surprised the next day that not a single order came, and this so-called "earn your financial freedom" business model didn't deliver on its promise like the influencers said.`,
		ar: `ليتفاجؤوا في اليوم التالي بأن ولا طلب واحد قد وصل، وأن نموذج العمل الذي يُسمّى "احصل على حريتك المالية" لم يفِ بوعده كما قال المؤثرون.`,
		fr: `Pour découvrir, surpris, le lendemain qu'aucune commande n'est arrivée, et que ce fameux modèle « gagnez votre liberté financière » n'a pas tenu sa promesse comme l'affirmaient les influenceurs.`,
	},
	"blog.dead.b14": {
		en: `This is the part where 80% of them would entirely quit this model and go rant on the internet about how dropshipping is a "scheme" that doesn't work.`,
		ar: `وهنا يترك 80% منهم هذا النموذج تمامًا ويذهبون للتذمّر على الإنترنت من أن الدروبشيبينغ "احتيال" لا ينجح.`,
		fr: `C'est à ce moment-là que 80 % d'entre eux abandonnent complètement ce modèle et vont se plaindre sur internet que le dropshipping est une « arnaque » qui ne marche pas.`,
	},
	"blog.dead.b15": {
		en: `Origin B: Career Course and Mentorship Sellers`,
		ar: `المصدر ب: بائعو الدورات والإرشاد المهني`,
		fr: `Origine B : les vendeurs de formations et de mentorat`,
	},
	"blog.dead.b16": {
		en: `Whenever someone wants to sell you a course on social media about something you can use to make money online, like e-commerce, affiliate marketing, Amazon FBA, high-ticket sales... dropshipping is always their favorite punching bag.`,
		ar: `كلما أراد أحدهم أن يبيعك دورة على وسائل التواصل الاجتماعي حول شيء يمكنك استخدامه لكسب المال عبر الإنترنت، مثل التجارة الإلكترونية، أو التسويق بالعمولة، أو Amazon FBA، أو المبيعات عالية القيمة... يكون الدروبشيبينغ دائمًا هدفهم المفضّل للهجوم.`,
		fr: `Chaque fois que quelqu'un veut vous vendre sur les réseaux sociaux une formation pour gagner de l'argent en ligne — e-commerce, affiliation, Amazon FBA, vente high-ticket... —, le dropshipping est toujours son souffre-douleur préféré.`,
	},
	"blog.dead.b17": {
		en: `"Don't do dropshipping, buy my course/mentorship instead"`,
		ar: `"لا تعمل في الدروبشيبينغ، بل اشترِ دورتي/برنامج الإرشاد الخاص بي بدلًا من ذلك"`,
		fr: `« Ne faites pas de dropshipping, achetez plutôt ma formation / mon mentorat »`,
	},
	"blog.dead.b18": {
		en: `Let me ask you something, did any of these guys ever:`,
		ar: `دعني أسألك شيئًا، هل قام أيٌّ من هؤلاء يومًا بـ:`,
		fr: `Laissez-moi vous poser une question : l'un d'entre eux a-t-il déjà :`,
	},
	"blog.dead.b19": {
		en: `Of course they didn't.`,
		ar: `بالطبع لم يفعلوا.`,
		fr: `Bien sûr que non.`,
	},
	"blog.dead.b20": {
		en: `They're just using the hate directed toward the model to market their own offers, and it works most of the time.`,
		ar: `إنهم يستغلون فقط الكراهية الموجّهة إلى هذا النموذج لتسويق عروضهم الخاصة، وينجح ذلك في معظم الأحيان.`,
		fr: `Ils se contentent d'exploiter la haine envers ce modèle pour vendre leurs propres offres, et ça marche la plupart du temps.`,
	},
	"blog.dead.b21": {
		en: `Why is dropshipping hated so much?`,
		ar: `لماذا يُكره الدروبشيبينغ إلى هذا الحد؟`,
		fr: `Pourquoi le dropshipping est-il autant détesté ?`,
	},
	"blog.dead.b22": {
		en: `There's a valid reason why dropshipping is hated the way it is right now, and there are two people to blame for that:`,
		ar: `هناك سبب وجيه لكراهية الدروبشيبينغ بالشكل الحالي، وهناك طرفان يتحمّلان المسؤولية:`,
		fr: `Il y a une vraie raison pour laquelle le dropshipping est autant détesté aujourd'hui, et deux coupables :`,
	},
	"blog.dead.b23": {
		en: `Most of the time, these gurus know nothing about dropshipping, or they somehow got lucky with a few products they sold, then they realized they could make a fortune by selling these courses to people who are desperate to become rich quickly without putting in any effort.`,
		ar: `في معظم الأحيان، لا يعرف هؤلاء الخبراء المزعومون شيئًا عن الدروبشيبينغ، أو حالفهم الحظ بطريقة ما مع بعض المنتجات التي باعوها، ثم أدركوا أن بإمكانهم جني ثروة من بيع هذه الدورات لأشخاص يائسين يريدون الثراء بسرعة دون بذل أي جهد.`,
		fr: `La plupart du temps, ces gourous ne connaissent rien au dropshipping, ou ont eu un coup de chance avec quelques produits vendus, puis se sont rendu compte qu'ils pouvaient faire fortune en vendant ces formations à des gens désespérés de devenir riches rapidement sans fournir le moindre effort.`,
	},
	"blog.dead.b24": {
		en: `So those who enter the dropshipping world thinking they're about to become rich overnight end up becoming dropshipping's worst case studies ever.`,
		ar: `فينتهي الحال بمن يدخل عالم الدروبشيبينغ معتقدًا أنه سيصبح ثريًا بين ليلة وضحاها إلى أن يصبح من أسوأ دراسات الحالة في تاريخ الدروبشيبينغ.`,
		fr: `Ainsi, ceux qui se lancent dans le dropshipping en pensant devenir riches du jour au lendemain finissent par devenir les pires exemples de l'histoire du dropshipping.`,
	},
	"blog.dead.b25": {
		en: `So is dropshipping dead?`,
		ar: `إذًا، هل مات الدروبشيبينغ؟`,
		fr: `Alors, le dropshipping est-il mort ?`,
	},
	"blog.dead.b26": {
		en: `Now to finally answer the question we've all been waiting for: is dropshipping dead?`,
		ar: `والآن لنجيب أخيرًا عن السؤال الذي كنا جميعًا ننتظره: هل مات الدروبشيبينغ؟`,
		fr: `Il est enfin temps de répondre à la question que nous attendions tous : le dropshipping est-il mort ?`,
	},
	"blog.dead.b27": {
		en: `And the answer is... yes and no.`,
		ar: `والجواب هو... نعم ولا.`,
		fr: `Et la réponse est... oui et non.`,
	},
	"blog.dead.b28": {
		en: `Yes, the golden age that made dropshipping explode is long dead. It happened during the corona outbreak, which prevented people from leaving their homes and forced them to resort to online shopping, creating a great business opportunity for almost everyone.`,
		ar: `نعم، العصر الذهبي الذي جعل الدروبشيبينغ ينفجر قد انتهى منذ زمن. لقد حدث خلال تفشّي كورونا، الذي منع الناس من مغادرة منازلهم وأجبرهم على اللجوء إلى التسوّق عبر الإنترنت، ما خلق فرصة تجارية كبيرة للجميع تقريبًا.`,
		fr: `Oui, l'âge d'or qui a fait exploser le dropshipping est bel et bien terminé. Il a eu lieu pendant l'épidémie de coronavirus, qui empêchait les gens de sortir de chez eux et les a forcés à se tourner vers les achats en ligne, créant une formidable opportunité pour presque tout le monde.`,
	},
	"blog.dead.b29": {
		en: `You can no longer just grab a random product, slam it on your Shopify store and expect it to print you money like in the old days.`,
		ar: `لم يعد بإمكانك أن تأخذ منتجًا عشوائيًا، وتضعه على متجرك في شوبيفاي، وتتوقّع أن يدرّ عليك المال كما في الأيام الخوالي.`,
		fr: `Vous ne pouvez plus prendre un produit au hasard, le mettre sur votre boutique Shopify et vous attendre à ce qu'il vous fasse gagner de l'argent comme au bon vieux temps.`,
	},
	"blog.dead.b30": {
		en: `That said, there are people making 5 figures in revenue per month through dropshipping, but that's because they treat it like a real business model with risks and losses, not a gamble to speedrun their way into wealth.`,
		ar: `ومع ذلك، هناك أشخاص يحققون إيرادات من خمس خانات شهريًا عبر الدروبشيبينغ، لكن ذلك لأنهم يتعاملون معه كنموذج عمل حقيقي فيه مخاطر وخسائر، لا كمقامرة لبلوغ الثراء بأسرع طريق.`,
		fr: `Cela dit, certaines personnes génèrent un chiffre d'affaires à 5 chiffres par mois grâce au dropshipping, mais c'est parce qu'elles le traitent comme un vrai modèle économique, avec ses risques et ses pertes, et non comme un pari pour s'enrichir au plus vite.`,
	},
	"blog.dead.b31": {
		en: `They make sure to study the market's demand, explore communities and listen to people's problems before deciding which product is best to sell. After they find the product, they create the perfect advertisements to attract the people who are ready to buy a solution from them, not just a mere product.`,
		ar: `إنهم يحرصون على دراسة طلب السوق، واستكشاف المجتمعات، والاستماع إلى مشاكل الناس قبل تحديد المنتج الأنسب للبيع. وبعد أن يجدوا المنتج، يصنعون الإعلانات المثالية لجذب الأشخاص المستعدين لشراء حلّ منهم، لا مجرد منتج.`,
		fr: `Elles prennent soin d'étudier la demande du marché, d'explorer les communautés et d'écouter les problèmes des gens avant de choisir le meilleur produit à vendre. Une fois le produit trouvé, elles créent les publicités parfaites pour attirer les personnes prêtes à leur acheter une solution, et pas seulement un produit.`,
	},
	"blog.dead.b32": {
		en: `Now, how do you find the perfect product to sell in Lebanon? How do you create the advertisements? How do you come up with an offer that speaks to people's needs?`,
		ar: `والآن، كيف تجد المنتج المثالي للبيع في لبنان؟ كيف تصنع الإعلانات؟ كيف تبتكر عرضًا يلبّي احتياجات الناس؟`,
		fr: `Alors, comment trouver le produit parfait à vendre au Liban ? Comment créer les publicités ? Comment construire une offre qui répond aux besoins des gens ?`,
	},
	"blog.dead.b33": {
		en: `That's exactly why Droparabia came into existence.`,
		ar: `ولهذا بالضبط وُجد دروب أرابيا.`,
		fr: `C'est exactement pour cela que Droparabia a vu le jour.`,
	},
	"blog.dead.b34": {
		en: `We created a platform to help everyone succeed — not just in dropshipping, but also those who want to get into e-commerce without burning their budget on beginners' mistakes and meaningless friction like shipping fees and overspending on inventory that isn't guaranteed to sell.`,
		ar: `أنشأنا منصة لمساعدة الجميع على النجاح — ليس فقط في الدروبشيبينغ، بل أيضًا لمن يريد دخول التجارة الإلكترونية دون إهدار ميزانيته على أخطاء المبتدئين والعقبات غير المجدية، مثل رسوم الشحن والإنفاق المفرط على مخزون ليس مضمونًا أن يُباع.`,
		fr: `Nous avons créé une plateforme pour aider tout le monde à réussir — pas seulement en dropshipping, mais aussi ceux qui veulent se lancer dans le e-commerce sans griller leur budget en erreurs de débutant et en frictions inutiles, comme les frais de livraison et les dépenses excessives dans un stock dont la vente n'est pas garantie.`,
	},
	"blog.dead.b35": {
		en: `And we also make perfectly clear to all our users before they sign up with Droparabia that this is a business model that requires a real amount of effort and a consistent mentality, not a path to quick wealth.`,
		ar: `كما نوضّح تمامًا لجميع مستخدمينا قبل تسجيلهم في دروب أرابيا أن هذا نموذج عمل يتطلب قدرًا حقيقيًا من الجهد وعقلية ثابتة، وليس طريقًا للثراء السريع.`,
		fr: `Et nous précisons aussi très clairement à tous nos utilisateurs, avant qu'ils ne s'inscrivent sur Droparabia, qu'il s'agit d'un modèle économique qui demande un vrai effort et un état d'esprit constant, et non d'un chemin vers la richesse rapide.`,
	},
	"blog.dead.b36": {
		en: `Explain to you what dropshipping is?`,
		ar: `شرح لك ما هو الدروبشيبينغ؟`,
		fr: `Vous expliquer ce qu'est le dropshipping ?`,
	},
	"blog.dead.b37": {
		en: `Explain "why" you should avoid this model?`,
		ar: `شرح "لماذا" يجب أن تتجنّب هذا النموذج؟`,
		fr: `Vous expliquer « pourquoi » vous devriez éviter ce modèle ?`,
	},
	"blog.dead.b38": {
		en: `Or at least give you a valid reason to back their claims?`,
		ar: `أو على الأقل قدّم لك سببًا وجيهًا يدعم ادعاءاته؟`,
		fr: `Ou au moins vous donner une raison valable pour appuyer ses affirmations ?`,
	},
	"blog.dead.b39": {
		en: `The gurus who sold this dream as a "get-rich-quick"`,
		ar: `الخبراء المزعومون الذين باعوا هذا الحلم على أنه "طريق للثراء السريع"`,
		fr: `Les gourous qui ont vendu ce rêve comme un moyen de « devenir riche rapidement »`,
	},
	"blog.dead.b40": {
		en: `And the people who treated it as a scheme rather than a legit business model`,
		ar: `والأشخاص الذين تعاملوا معه كمخطط احتيالي بدلًا من نموذج عمل مشروع`,
		fr: `Et les personnes qui l'ont traité comme une combine plutôt que comme un modèle économique légitime`,
	},
	"blog.exists.b0": {
		en: `It started from a goal of helping loved ones and redirecting efforts to where they'd actually pay off, into building an infrastructure that will help everyone enter the e-commerce and dropshipping space without facing the same obstacles that could cause most people to quit from day 1.`,
		ar: `بدأ الأمر بهدف مساعدة الأحبّة وتوجيه الجهود إلى حيث تُثمر فعلًا، ثم تحوّل إلى بناء بنية تحتية تساعد الجميع على دخول مجال التجارة الإلكترونية والدروبشيبينغ دون مواجهة العقبات نفسها التي قد تدفع معظم الناس إلى الاستسلام من اليوم الأول.`,
		fr: `Tout est parti d'un objectif : aider des proches et réorienter les efforts là où ils portent vraiment leurs fruits, pour aboutir à la construction d'une infrastructure qui aide chacun à se lancer dans le e-commerce et le dropshipping sans affronter les mêmes obstacles qui poussent la plupart des gens à abandonner dès le premier jour.`,
	},
	"blog.exists.b1": {
		en: `The struggle`,
		ar: `المعاناة`,
		fr: `Le combat`,
	},
	"blog.exists.b2": {
		en: `Our founder Majd faced multiple obstacles while building his own e-commerce and dropshipping businesses, obstacles that came with the traditional ways of these two models:`,
		ar: `واجه مؤسسنا مجد عقبات متعددة أثناء بناء مشاريعه الخاصة في التجارة الإلكترونية والدروبشيبينغ، وهي عقبات رافقت الطرق التقليدية لهذين النموذجين:`,
		fr: `Notre fondateur, Majd, a fait face à de multiples obstacles en construisant ses propres activités de e-commerce et de dropshipping, des obstacles propres aux méthodes traditionnelles de ces deux modèles :`,
	},
	"blog.exists.b3": {
		en: `He started to understand why a lot of people who enter the dropshipping and e-commerce space often fail instantly.`,
		ar: `بدأ يفهم لماذا يفشل الكثير ممن يدخلون مجال الدروبشيبينغ والتجارة الإلكترونية فورًا في أغلب الأحيان.`,
		fr: `Il a commencé à comprendre pourquoi tant de personnes qui se lancent dans le dropshipping et le e-commerce échouent souvent immédiatement.`,
	},
	"blog.exists.b4": {
		en: `And it's not because of a lack of experience or technical skills.`,
		ar: `وليس ذلك بسبب نقص الخبرة أو المهارات التقنية.`,
		fr: `Et ce n'est pas par manque d'expérience ou de compétences techniques.`,
	},
	"blog.exists.b5": {
		en: `But because of these meaningless yet costly obstacles that shouldn't exist in the first place.`,
		ar: `بل بسبب هذه العقبات غير المجدية والمكلفة في الوقت نفسه، والتي ما كان يجب أن توجد أصلًا.`,
		fr: `Mais à cause de ces obstacles aussi inutiles que coûteux, qui ne devraient même pas exister.`,
	},
	"blog.exists.b6": {
		en: `"Why should I purchase products in bulk from China without confirming if they could sell?"`,
		ar: `"لماذا عليّ شراء منتجات بالجملة من الصين دون التأكد من أنها ستُباع؟"`,
		fr: `« Pourquoi devrais-je acheter des produits en gros en Chine sans être sûr qu'ils se vendront ? »`,
	},
	"blog.exists.b7": {
		en: `"What if I could test with a few samples to gauge their demand first before ordering a stock?"`,
		ar: `"ماذا لو استطعت الاختبار ببعض العيّنات لقياس الطلب عليها أولًا قبل طلب مخزون؟"`,
		fr: `« Et si je pouvais tester avec quelques échantillons pour mesurer la demande avant de commander du stock ? »`,
	},
	"blog.exists.b8": {
		en: `The solution`,
		ar: `الحل`,
		fr: `La solution`,
	},
	"blog.exists.b9": {
		en: `And this is when the idea of Droparabia was born.`,
		ar: `وهنا وُلدت فكرة دروب أرابيا.`,
		fr: `C'est alors qu'est née l'idée de Droparabia.`,
	},
	"blog.exists.b10": {
		en: `A system which both dropshippers and e-commerce owners can use.`,
		ar: `نظام يمكن لكل من الدروبشيبرز وأصحاب المتاجر الإلكترونية استخدامه.`,
		fr: `Un système que les dropshippers comme les propriétaires de boutiques en ligne peuvent utiliser.`,
	},
	"blog.exists.b11": {
		en: `Instead of searching for hours for a product to sell, or risking your budget ordering products in bulk only to end up with a stock that didn't sell, you have a platform that can help you find your own winning products across multiple niches and categories and sell them directly to your customers without ever owning inventory.`,
		ar: `بدلًا من البحث لساعات عن منتج لبيعه، أو المجازفة بميزانيتك بطلب منتجات بالجملة لينتهي بك الأمر بمخزون لم يُبَع، لديك منصة تساعدك على إيجاد منتجاتك الرابحة عبر مجالات وفئات متعددة وبيعها مباشرة لعملائك دون أن تمتلك أي مخزون.`,
		fr: `Au lieu de chercher pendant des heures un produit à vendre, ou de risquer votre budget en commandant en gros pour vous retrouver avec un stock invendu, vous disposez d'une plateforme qui vous aide à trouver vos propres produits gagnants dans de nombreuses niches et catégories, et à les vendre directement à vos clients sans jamais posséder de stock.`,
	},
	"blog.exists.b12": {
		en: `And the best part is, you don't need to deal with suppliers yourself anymore, because this platform already has its own supplier partners it can trust to source only the best quality products at the best price possible.`,
		ar: `والأفضل من ذلك، أنك لم تعد بحاجة إلى التعامل مع الموردين بنفسك، لأن هذه المنصة لديها بالفعل شركاؤها من الموردين الموثوقين لتوفير أفضل المنتجات جودةً بأفضل سعر ممكن.`,
		fr: `Et le meilleur, c'est que vous n'avez plus besoin de traiter vous-même avec les fournisseurs, car la plateforme a déjà ses propres fournisseurs partenaires de confiance pour sourcer uniquement des produits de la meilleure qualité, au meilleur prix possible.`,
	},
	"blog.exists.b13": {
		en: `Sounds cool right?`,
		ar: `رائع، أليس كذلك؟`,
		fr: `Plutôt cool, non ?`,
	},
	"blog.exists.b14": {
		en: `How it works`,
		ar: `كيف يعمل`,
		fr: `Comment ça marche`,
	},
	"blog.exists.b15": {
		en: `The Droparabia infrastructure covers both the logistical and the technical sides.`,
		ar: `تغطي البنية التحتية لدروب أرابيا الجانبين اللوجستي والتقني.`,
		fr: `L'infrastructure de Droparabia couvre à la fois les aspects logistiques et techniques.`,
	},
	"blog.exists.b16": {
		en: `Droparabia's advanced logistics network`,
		ar: `الشبكة اللوجستية المتطوّرة لدروب أرابيا`,
		fr: `Le réseau logistique avancé de Droparabia`,
	},
	"blog.exists.b17": {
		en: `The platform has its own logistics network located in Deir Qoubel, Mount Lebanon Governorate, along with its own delivery system to make sure each product is packaged and safely delivered to the customer within a period of 5 to 7 days all over Lebanon.`,
		ar: `تمتلك المنصة شبكتها اللوجستية الخاصة في دير قوبل، محافظة جبل لبنان، إلى جانب نظام توصيل خاص بها لضمان تغليف كل منتج وتوصيله بأمان إلى العميل خلال فترة 5 إلى 7 أيام في جميع أنحاء لبنان.`,
		fr: `La plateforme dispose de son propre réseau logistique situé à Deir Qoubel, dans le gouvernorat du Mont-Liban, ainsi que de son propre système de livraison, pour que chaque produit soit emballé et livré en toute sécurité au client dans un délai de 5 à 7 jours partout au Liban.`,
	},
	"blog.exists.b18": {
		en: `Along with partnerships with both local and Chinese suppliers, which allows Droparabia to supply the products requested by its users.`,
		ar: `إضافةً إلى شراكات مع موردين محليين وصينيين، ما يتيح لدروب أرابيا توفير المنتجات التي يطلبها مستخدموه.`,
		fr: `À cela s'ajoutent des partenariats avec des fournisseurs locaux et chinois, qui permettent à Droparabia de fournir les produits demandés par ses utilisateurs.`,
	},
	"blog.exists.b19": {
		en: `Advanced and game changing tools`,
		ar: `أدوات متطوّرة تُحدث فرقًا`,
		fr: `Des outils avancés qui changent la donne`,
	},
	"blog.exists.b20": {
		en: `Droparabia offers lots of useful features, especially to absolute newbies to the world of dropshipping and e-commerce, from:`,
		ar: `يقدّم دروب أرابيا الكثير من الميزات المفيدة، خاصةً للمبتدئين تمامًا في عالم الدروبشيبينغ والتجارة الإلكترونية، من:`,
		fr: `Droparabia propose de nombreuses fonctionnalités utiles, surtout pour les grands débutants du dropshipping et du e-commerce, notamment :`,
	},
	"blog.exists.b21": {
		en: `And more features are added periodically, often requested by the users themselves!`,
		ar: `وتُضاف ميزات جديدة بشكل دوري، غالبًا بطلب من المستخدمين أنفسهم!`,
		fr: `Et de nouvelles fonctionnalités sont ajoutées régulièrement, souvent à la demande des utilisateurs eux-mêmes !`,
	},
	"blog.exists.b22": {
		en: `Dropvault Community`,
		ar: `مجتمع Dropvault`,
		fr: `La communauté Dropvault`,
	},
	"blog.exists.b23": {
		en: `Of course, no one will be able to immediately catch up to this platform without the requirement of a guiding hand, right?`,
		ar: `بالطبع، لن يتمكن أحد من مواكبة هذه المنصة فورًا دون الحاجة إلى يد مرشدة، أليس كذلك؟`,
		fr: `Bien sûr, personne ne peut maîtriser cette plateforme du jour au lendemain sans être guidé, n'est-ce pas ?`,
	},
	"blog.exists.b24": {
		en: `That's exactly what the Dropvault community is for.`,
		ar: `وهذا بالضبط هو دور مجتمع Dropvault.`,
		fr: `C'est exactement à cela que sert la communauté Dropvault.`,
	},
	"blog.exists.b25": {
		en: `Inside it, not only will you be guided on how to use the platform, but you're also joining a community of passionate sellers like you.`,
		ar: `في داخله، لن تُرشَد فقط إلى كيفية استخدام المنصة، بل ستنضم أيضًا إلى مجتمع من البائعين الشغوفين مثلك.`,
		fr: `À l'intérieur, vous serez non seulement guidé dans l'utilisation de la plateforme, mais vous rejoindrez aussi une communauté de vendeurs passionnés comme vous.`,
	},
	"blog.exists.b26": {
		en: `And a team of experienced advisors with a digital marketing background, ready to help you build a successful and high-earning dropshipping store!`,
		ar: `وفريق من المستشارين ذوي الخبرة في التسويق الرقمي، مستعدين لمساعدتك في بناء متجر دروبشيبينغ ناجح وعالي الربح!`,
		fr: `Ainsi qu'une équipe de conseillers expérimentés, issus du marketing digital, prêts à vous aider à construire une boutique de dropshipping performante et très rentable !`,
	},
	"blog.exists.b27": {
		en: `It's the place where you'll get:`,
		ar: `إنه المكان الذي ستحصل فيه على:`,
		fr: `C'est l'endroit où vous obtiendrez :`,
	},
	"blog.exists.b28": {
		en: `Why Droparabia beats traditional e-commerce and old dropshipping`,
		ar: `لماذا يتفوّق دروب أرابيا على التجارة الإلكترونية التقليدية والدروبشيبينغ القديم`,
		fr: `Pourquoi Droparabia surpasse le e-commerce traditionnel et l'ancien dropshipping`,
	},
	"blog.exists.b29": {
		en: `It is thanks to all the cons left by both traditional e-commerce and old dropshipping that led to the creation of Droparabia.`,
		ar: `إن كل العيوب التي خلّفتها التجارة الإلكترونية التقليدية والدروبشيبينغ القديم هي ما أدّى إلى إنشاء دروب أرابيا.`,
		fr: `Ce sont tous les inconvénients du e-commerce traditionnel et de l'ancien dropshipping qui ont conduit à la création de Droparabia.`,
	},
	"blog.exists.b30": {
		en: `With the traditional e-commerce model:`,
		ar: `مع نموذج التجارة الإلكترونية التقليدية:`,
		fr: `Avec le modèle du e-commerce traditionnel :`,
	},
	"blog.exists.b31": {
		en: `With the old dropshipping model:`,
		ar: `مع نموذج الدروبشيبينغ القديم:`,
		fr: `Avec l'ancien modèle de dropshipping :`,
	},
	"blog.exists.b32": {
		en: `As demonstrated earlier, none of that is the case with Droparabia.`,
		ar: `وكما أوضحنا سابقًا، لا شيء من ذلك موجود مع دروب أرابيا.`,
		fr: `Comme nous l'avons montré plus haut, rien de tout cela n'existe avec Droparabia.`,
	},
	"blog.exists.b33": {
		en: `Summary`,
		ar: `الخلاصة`,
		fr: `En résumé`,
	},
	"blog.exists.b34": {
		en: `So if you're someone who wants to get into the dropshipping or e-commerce space but you have no experience, or you're afraid to risk your hard earned savings for nothing in return...`,
		ar: `لذا، إن كنت شخصًا يريد دخول مجال الدروبشيبينغ أو التجارة الإلكترونية لكن ليست لديك خبرة، أو تخشى المجازفة بمدّخراتك التي جنيتها بجهدك دون أي مقابل...`,
		fr: `Alors si vous voulez vous lancer dans le dropshipping ou le e-commerce mais que vous n'avez aucune expérience, ou que vous avez peur de risquer vos économies durement gagnées pour rien...`,
	},
	"blog.exists.b35": {
		en: `Droparabia and the Dropvault community both welcome you.`,
		ar: `فإن دروب أرابيا ومجتمع Dropvault يرحّبان بك.`,
		fr: `Droparabia et la communauté Dropvault vous accueillent tous les deux.`,
	},
	"blog.exists.b36": {
		en: `Ordering products in bulk from China without a guarantee that they'd sell in the Lebanese market`,
		ar: `طلب منتجات بالجملة من الصين دون ضمان أنها ستُباع في السوق اللبناني`,
		fr: `Commander des produits en gros en Chine sans garantie qu'ils se vendent sur le marché libanais`,
	},
	"blog.exists.b37": {
		en: `Paying huge fees to ship them to Lebanon`,
		ar: `دفع رسوم ضخمة لشحنها إلى لبنان`,
		fr: `Payer des frais énormes pour les expédier au Liban`,
	},
	"blog.exists.b38": {
		en: `No control over the quality of the products`,
		ar: `لا تحكّم في جودة المنتجات`,
		fr: `Aucun contrôle sur la qualité des produits`,
	},
	"blog.exists.b39": {
		en: `No payment gateway for customers to pay (since PayPal and Stripe aren't available in Lebanon)`,
		ar: `لا بوابة دفع ليدفع العملاء من خلالها (بما أن PayPal وStripe غير متاحين في لبنان)`,
		fr: `Aucune passerelle de paiement pour les clients (PayPal et Stripe n'étant pas disponibles au Liban)`,
	},
	"blog.exists.b40": {
		en: `No reliable delivery system to deliver the products to customers safely and on time`,
		ar: `لا نظام توصيل موثوق لإيصال المنتجات إلى العملاء بأمان وفي الوقت المحدد`,
		fr: `Aucun système de livraison fiable pour livrer les produits aux clients en toute sécurité et à temps`,
	},
	"blog.exists.b41": {
		en: `Weekly updated catalog of winning products and their analysis`,
		ar: `كتالوج منتجات رابحة يُحدَّث أسبوعيًا مع تحليلها`,
		fr: `Un catalogue de produits gagnants mis à jour chaque semaine, avec leur analyse`,
	},
	"blog.exists.b42": {
		en: `AI built to assist and analyze products and their buyer avatars`,
		ar: `ذكاء اصطناعي مصمّم للمساعدة في تحليل المنتجات وشخصيات مشتريها`,
		fr: `Une IA conçue pour vous aider à analyser les produits et leurs personas d'acheteurs`,
	},
	"blog.exists.b43": {
		en: `Laser machine to brand and print logos on products to create a unique brand and stand out from the competition`,
		ar: `آلة ليزر لتخصيص المنتجات وطباعة الشعارات عليها لإنشاء علامة تجارية فريدة والتميّز عن المنافسين`,
		fr: `Une machine laser pour personnaliser les produits et y graver des logos, afin de créer une marque unique et de vous démarquer de la concurrence`,
	},
	"blog.exists.b44": {
		en: `Shopify and Whish Money integration`,
		ar: `تكامل مع شوبيفاي وWhish Money`,
		fr: `Intégration Shopify et Whish Money`,
	},
	"blog.exists.b45": {
		en: `AI studio for generating video ads`,
		ar: `AI Studio لإنشاء إعلانات الفيديو`,
		fr: `AI Studio pour générer des publicités vidéo`,
	},
	"blog.exists.b46": {
		en: `Access to +20 hours of FREE courses and recorded tutorials`,
		ar: `الوصول إلى أكثر من 20 ساعة من الدورات والدروس المسجّلة المجانية`,
		fr: `Accès à plus de 20 heures de formations et de tutoriels enregistrés GRATUITS`,
	},
	"blog.exists.b47": {
		en: `Weekly coaching calls`,
		ar: `جلسات تدريب أسبوعية`,
		fr: `Des sessions de coaching hebdomadaires`,
	},
	"blog.exists.b48": {
		en: `Dedicated WhatsApp group to get support whenever you need it`,
		ar: `مجموعة واتساب مخصّصة للحصول على الدعم متى احتجت إليه`,
		fr: `Un groupe WhatsApp dédié pour obtenir de l'aide dès que vous en avez besoin`,
	},
	"blog.exists.b49": {
		en: `Chance to participate in giveaways and events`,
		ar: `فرصة المشاركة في المسابقات والفعاليات`,
		fr: `La possibilité de participer à des concours et à des événements`,
	},
	"blog.exists.b50": {
		en: `You would need at least $3,000 as an upfront investment`,
		ar: `ستحتاج إلى 3,000 دولار على الأقل كاستثمار مسبق`,
		fr: `Il vous faudrait au moins 3 000 $ d'investissement initial`,
	},
	"blog.exists.b51": {
		en: `Forced to purchase products in bulk because of the Alibaba minimum quantity purchase rule, and pay huge shipping fees`,
		ar: `الاضطرار إلى شراء المنتجات بالجملة بسبب قاعدة الحد الأدنى للكمية على علي بابا، ودفع رسوم شحن ضخمة`,
		fr: `L'obligation d'acheter en gros à cause de la règle de quantité minimum d'Alibaba, et de payer d'énormes frais de livraison`,
	},
	"blog.exists.b52": {
		en: `Huge risk of getting stuck with an inventory that didn't sell`,
		ar: `خطر كبير في أن تبقى عالقًا مع مخزون لم يُبَع`,
		fr: `Un risque énorme de vous retrouver coincé avec un stock invendu`,
	},
	"blog.exists.b53": {
		en: `You have no control over the quality`,
		ar: `لا تحكّم لديك في الجودة`,
		fr: `Vous n'avez aucun contrôle sur la qualité`,
	},
	"blog.exists.b54": {
		en: `You'd find your winning product but never the reliable supplier in most cases`,
		ar: `ستجد منتجك الرابح لكن لن تجد المورّد الموثوق في معظم الحالات`,
		fr: `Vous trouveriez votre produit gagnant, mais presque jamais le fournisseur fiable`,
	},
	"blog.exists.b55": {
		en: `You're selling the same product as everyone else`,
		ar: `تبيع المنتج نفسه الذي يبيعه الجميع`,
		fr: `Vous vendez le même produit que tout le monde`,
	},

	// --- FAQ page: questions and answers, indexed to match src/data/faqs.ts ---
	"faq.q0": {
		en: `What is Droparabia?`,
		ar: `ما هو دروب أرابيا؟`,
		fr: `Qu'est-ce que Droparabia ?`,
	},
	"faq.a0": {
		en: `<p>Droparabia is an e-commerce platform built specifically for Lebanon, designed to remove the biggest obstacles that make starting an online business difficult.</p><p>Instead of buying inventory upfront, finding suppliers, arranging warehousing, packaging, delivery, and payment collection yourself, Droparabia handles the operational side for you.</p><p>You choose what you want to sell, connect your Shopify store, market your products, and focus on growing your business while Droparabia handles sourcing, inventory, fulfillment, and delivery.</p>`,
		ar: `<p>دروب أرابيا منصة تجارة إلكترونية مبنية خصيصًا للبنان، مصمّمة لإزالة أكبر العقبات التي تجعل بدء عمل تجاري عبر الإنترنت صعبًا.</p><p>بدلًا من شراء المخزون مقدمًا، وإيجاد الموردين، وترتيب التخزين والتغليف والتوصيل وتحصيل المدفوعات بنفسك، يتولى دروب أرابيا الجانب التشغيلي نيابةً عنك.</p><p>أنت تختار ما تريد بيعه، وتربط متجر شوبيفاي الخاص بك، وتسوّق منتجاتك، وتركّز على تنمية عملك، بينما يتولى دروب أرابيا التوريد والمخزون والتجهيز والتوصيل.</p>`,
		fr: `<p>Droparabia est une plateforme e-commerce conçue spécifiquement pour le Liban, pensée pour supprimer les principaux obstacles qui rendent difficile le lancement d'une activité en ligne.</p><p>Au lieu d'acheter du stock à l'avance, de trouver des fournisseurs, d'organiser l'entreposage, l'emballage, la livraison et l'encaissement vous-même, Droparabia prend en charge tout le volet opérationnel.</p><p>Vous choisissez ce que vous voulez vendre, connectez votre boutique Shopify, faites la promotion de vos produits et vous concentrez sur la croissance de votre activité pendant que Droparabia gère le sourcing, le stock, la préparation et la livraison.</p>`,
	},
	"faq.q1": {
		en: `What does Droparabia bring to the table?`,
		ar: `ماذا يقدّم دروب أرابيا؟`,
		fr: `Qu'apporte Droparabia ?`,
	},
	"faq.a1": {
		en: `<p>Droparabia removes the time-consuming and expensive parts of traditional e-commerce and old-school dropshipping.</p><p>You don't need to:</p><ul><li>Purchase inventory in bulk</li><li>Rent a warehouse</li><li>Manage stock yourself</li><li>Find and negotiate with suppliers</li><li>Find your own delivery company</li><li>Handle packaging and fulfillment</li><li>Pay for inventory before you've sold it</li><li>Spend hours searching for products to test</li></ul><p>Instead, you get access to a catalog of researched products, direct supplier relationships, fulfillment infrastructure, product sourcing, Shopify integration, payment collection, AI tools, branding, educational resources, and dedicated advisors.</p><p>This lets you spend your time where it matters most: building your brand, marketing your products, and growing your store.</p>`,
		ar: `<p>يزيل دروب أرابيا الأجزاء المكلفة والمستهلكة للوقت في التجارة الإلكترونية التقليدية والدروبشيبينغ القديم.</p><p>لست بحاجة إلى:</p><ul><li>شراء المخزون بالجملة</li><li>استئجار مستودع</li><li>إدارة المخزون بنفسك</li><li>إيجاد الموردين والتفاوض معهم</li><li>إيجاد شركة توصيل خاصة بك</li><li>التعامل مع التغليف والتجهيز</li><li>الدفع مقابل المخزون قبل بيعه</li><li>قضاء ساعات في البحث عن منتجات لاختبارها</li></ul><p>بدلًا من ذلك، تحصل على كتالوج منتجات مدروسة، وعلاقات مباشرة مع الموردين، وبنية تحتية للتجهيز، وتوريد المنتجات، وتكامل مع شوبيفاي، وتحصيل المدفوعات، وأدوات ذكاء اصطناعي، وخدمة العلامة التجارية، وموارد تعليمية، ومستشارين مخصصين.</p><p>هذا يتيح لك تخصيص وقتك لما يهم فعلًا: بناء علامتك التجارية، وتسويق منتجاتك، وتنمية متجرك.</p>`,
		fr: `<p>Droparabia supprime les aspects chronophages et coûteux du e-commerce traditionnel et du dropshipping à l'ancienne.</p><p>Vous n'avez pas besoin de :</p><ul><li>Acheter du stock en gros</li><li>Louer un entrepôt</li><li>Gérer le stock vous-même</li><li>Trouver des fournisseurs et négocier avec eux</li><li>Trouver votre propre transporteur</li><li>Gérer l'emballage et la préparation</li><li>Payer le stock avant de l'avoir vendu</li><li>Passer des heures à chercher des produits à tester</li></ul><p>À la place, vous accédez à un catalogue de produits étudiés, à des relations directes avec les fournisseurs, à une infrastructure de préparation, au sourcing produit, à l'intégration Shopify, à l'encaissement, à des outils d'IA, à un service de branding, à des ressources pédagogiques et à des conseillers dédiés.</p><p>Vous pouvez ainsi consacrer votre temps à ce qui compte vraiment : construire votre marque, promouvoir vos produits et développer votre boutique.</p>`,
	},
	"faq.q2": {
		en: `Who is Droparabia for?`,
		ar: `لمن صُمّم دروب أرابيا؟`,
		fr: `À qui s'adresse Droparabia ?`,
	},
	"faq.a2": {
		en: `<p>Droparabia is for people who want to build a real e-commerce business in Lebanon, whether they're complete beginners or already experienced in online selling.</p><p>You don't need previous e-commerce experience, advanced technical skills, or a large amount of capital to get started.</p><p>However, you do need to be willing to learn, test, make mistakes, and consistently work on your business. Droparabia removes the operational friction — it doesn't remove the work required to build a successful business.</p>`,
		ar: `<p>دروب أرابيا مخصص لمن يريد بناء عمل تجاري إلكتروني حقيقي في لبنان، سواء كان مبتدئًا تمامًا أو لديه خبرة في البيع عبر الإنترنت.</p><p>لا تحتاج إلى خبرة سابقة في التجارة الإلكترونية، أو مهارات تقنية متقدمة، أو رأس مال كبير للبدء.</p><p>لكنك تحتاج إلى الاستعداد للتعلّم والاختبار وارتكاب الأخطاء والعمل على مشروعك باستمرار. دروب أرابيا يزيل العقبات التشغيلية — لكنه لا يزيل الجهد المطلوب لبناء عمل ناجح.</p>`,
		fr: `<p>Droparabia s'adresse à celles et ceux qui veulent bâtir une véritable activité e-commerce au Liban, qu'ils soient totalement débutants ou déjà expérimentés dans la vente en ligne.</p><p>Vous n'avez besoin ni d'expérience préalable en e-commerce, ni de compétences techniques avancées, ni d'un capital important pour démarrer.</p><p>En revanche, vous devez être prêt à apprendre, à tester, à faire des erreurs et à travailler régulièrement sur votre activité. Droparabia supprime la friction opérationnelle — pas le travail nécessaire pour réussir.</p>`,
	},
	"faq.q3": {
		en: `Is Droparabia an easy way to make money?`,
		ar: `هل دروب أرابيا طريقة سهلة لكسب المال؟`,
		fr: `Droparabia est-il un moyen facile de gagner de l'argent ?`,
	},
	"faq.a3": {
		en: `<p>Absolutely not.</p><p>Droparabia gives you the infrastructure, products, tools, education, advisors, and support needed to make starting an e-commerce business significantly easier.</p><p>But you are still responsible for your store, marketing, advertising, content, and decisions.</p><p>There will be products that don't work, ads that don't perform, and tests that fail. That's part of building a real business.</p><p>Droparabia's goal is to make those failures cheaper and easier to learn from — not to promise that you'll become rich overnight.</p>`,
		ar: `<p>إطلاقًا لا.</p><p>يمنحك دروب أرابيا البنية التحتية والمنتجات والأدوات والتعليم والمستشارين والدعم اللازم لجعل بدء عمل تجاري إلكتروني أسهل بكثير.</p><p>لكنك تبقى مسؤولًا عن متجرك وتسويقك وإعلاناتك ومحتواك وقراراتك.</p><p>ستكون هناك منتجات لا تنجح، وإعلانات لا تحقق نتائج، واختبارات تفشل. هذا جزء من بناء عمل حقيقي.</p><p>هدف دروب أرابيا هو جعل هذه الإخفاقات أقل كلفة وأسهل للتعلّم منها — لا أن يَعِدك بالثراء بين ليلة وضحاها.</p>`,
		fr: `<p>Absolument pas.</p><p>Droparabia vous donne l'infrastructure, les produits, les outils, la formation, les conseillers et le support nécessaires pour rendre le lancement d'une activité e-commerce nettement plus simple.</p><p>Mais vous restez responsable de votre boutique, de votre marketing, de vos publicités, de votre contenu et de vos décisions.</p><p>Il y aura des produits qui ne marchent pas, des publicités qui ne performent pas et des tests qui échouent. Cela fait partie de la construction d'une vraie activité.</p><p>L'objectif de Droparabia est de rendre ces échecs moins coûteux et plus faciles à exploiter — pas de vous promettre de devenir riche du jour au lendemain.</p>`,
	},
	"faq.q4": {
		en: `I don't have marketing experience. Can I still start?`,
		ar: `ليس لديّ خبرة في التسويق. هل يمكنني البدء رغم ذلك؟`,
		fr: `Je n'ai aucune expérience en marketing. Puis-je quand même me lancer ?`,
	},
	"faq.a4": {
		en: `<p>Yes.</p><p>Every Droparabia user gets access to our support community, educational resources, tutorials, and advisor groups.</p><p>Your advisors can help you understand product selection, marketing, advertising, store building, and the steps you need to take as you grow.</p><p>You don't have to figure everything out alone or learn everything from scratch.</p>`,
		ar: `<p>نعم.</p><p>يحصل كل مستخدم في دروب أرابيا على مجتمع الدعم، والموارد التعليمية، والدروس التطبيقية، ومجموعات المستشارين.</p><p>يمكن لمستشاريك مساعدتك في فهم اختيار المنتجات والتسويق والإعلان وبناء المتجر والخطوات التي تحتاج إلى اتخاذها مع نموّك.</p><p>لست مضطرًا لاكتشاف كل شيء بمفردك أو تعلّم كل شيء من الصفر.</p>`,
		fr: `<p>Oui.</p><p>Chaque utilisateur Droparabia accède à notre communauté de support, à nos ressources pédagogiques, à nos tutoriels et aux groupes de conseillers.</p><p>Vos conseillers peuvent vous aider à comprendre la sélection de produits, le marketing, la publicité, la création de boutique et les étapes à suivre à mesure que vous progressez.</p><p>Vous n'avez pas à tout découvrir seul ni à tout apprendre de zéro.</p>`,
	},
	"faq.q5": {
		en: `How does the money work when I make a sale?`,
		ar: `كيف تسير الأمور ماليًا عند تحقيق عملية بيع؟`,
		fr: `Comment fonctionne l'argent lorsque je réalise une vente ?`,
	},
	"faq.a5": {
		en: `<p>You are no longer limited to traditional cash-on-delivery arrangements.</p><p>Droparabia has its own delivery drivers who handle delivery and payment collection. Once the order is successfully delivered, the payment can be forwarded to your Whish Money account.</p><p>This means you can sell throughout Lebanon without having to build your own delivery and payment-collection infrastructure.</p>`,
		ar: `<p>لم تعد مقيّدًا بترتيبات الدفع عند الاستلام التقليدية.</p><p>لدى دروب أرابيا سائقو توصيل خاصون به يتولون التوصيل وتحصيل المدفوعات. وبمجرد تسليم الطلب بنجاح، يمكن تحويل المبلغ إلى حسابك على Whish Money.</p><p>هذا يعني أنه يمكنك البيع في جميع أنحاء لبنان دون الحاجة إلى بناء بنية توصيل وتحصيل خاصة بك.</p>`,
		fr: `<p>Vous n'êtes plus limité aux dispositifs classiques de paiement à la livraison.</p><p>Droparabia dispose de ses propres livreurs, qui assurent la livraison et l'encaissement. Une fois la commande livrée avec succès, le paiement peut être transféré sur votre compte Whish Money.</p><p>Vous pouvez ainsi vendre partout au Liban sans avoir à construire votre propre infrastructure de livraison et d'encaissement.</p>`,
	},
	"faq.q6": {
		en: `How does delivery work?`,
		ar: `كيف يتم التوصيل؟`,
		fr: `Comment fonctionne la livraison ?`,
	},
	"faq.a6": {
		en: `<p>Once a customer places an order through your store, Droparabia handles the fulfillment process.</p><p>We take care of the product, packaging, and delivery through our own logistics and delivery infrastructure.</p><p>Our average delivery time is around 5–7 days across Lebanon, so you can focus on selling instead of managing individual shipments.</p>`,
		ar: `<p>بمجرد أن يضع العميل طلبًا عبر متجرك، يتولى دروب أرابيا عملية التجهيز.</p><p>نحن نهتم بالمنتج والتغليف والتوصيل عبر بنيتنا اللوجستية وشبكة التوصيل الخاصة بنا.</p><p>متوسط مدة التوصيل لدينا نحو 5–7 أيام في جميع أنحاء لبنان، لتتمكن من التركيز على البيع بدلًا من إدارة كل شحنة على حدة.</p>`,
		fr: `<p>Dès qu'un client passe commande sur votre boutique, Droparabia prend en charge la préparation.</p><p>Nous nous occupons du produit, de l'emballage et de la livraison via notre propre infrastructure logistique.</p><p>Notre délai de livraison moyen est d'environ 5 à 7 jours partout au Liban, ce qui vous permet de vous concentrer sur la vente plutôt que sur la gestion de chaque expédition.</p>`,
	},
	"faq.q7": {
		en: `What happens if a customer refuses or doesn't receive an order?`,
		ar: `ماذا يحدث إذا رفض العميل الطلب أو لم يستلمه؟`,
		fr: `Que se passe-t-il si un client refuse ou ne reçoit pas sa commande ?`,
	},
	"faq.a7": {
		en: `<p>If an order isn't successfully delivered, the product simply returns to our warehouse.</p><p>Because our delivery operation is handled through Droparabia's own delivery team, you don't have to find a courier yourself or personally deal with retrieving the product.</p><p>The product remains within the Droparabia fulfillment system and can be handled according to the applicable order process.</p>`,
		ar: `<p>إذا لم يُسلَّم الطلب بنجاح، يعود المنتج ببساطة إلى مستودعنا.</p><p>ولأن عملية التوصيل تتم عبر فريق التوصيل الخاص بدروب أرابيا، لست مضطرًا لإيجاد شركة شحن بنفسك أو التعامل شخصيًا مع استرجاع المنتج.</p><p>يبقى المنتج ضمن نظام التجهيز في دروب أرابيا ويُعالَج وفق إجراءات الطلب المعمول بها.</p>`,
		fr: `<p>Si une commande n'est pas livrée avec succès, le produit revient simplement à notre entrepôt.</p><p>Comme la livraison est assurée par l'équipe de Droparabia, vous n'avez pas à trouver un transporteur ni à vous occuper personnellement de récupérer le produit.</p><p>Le produit reste dans le système de préparation de Droparabia et est traité selon la procédure applicable.</p>`,
	},
	"faq.q8": {
		en: `Do I have to buy inventory before I sell it?`,
		ar: `هل عليّ شراء المخزون قبل بيعه؟`,
		fr: `Dois-je acheter du stock avant de le vendre ?`,
	},
	"faq.a8": {
		en: `<p>No.</p><p>That's one of the main reasons Droparabia exists.</p><p>You don't have to purchase hundreds of units, rent storage, or gamble your money on inventory that might not sell.</p><p>Droparabia keeps track of inventory and charges you for the product when you successfully sell it.</p><p>You test products first, find what works, and then scale.</p>`,
		ar: `<p>لا.</p><p>هذا أحد الأسباب الرئيسية لوجود دروب أرابيا.</p><p>لست مضطرًا لشراء مئات القطع، أو استئجار مساحة تخزين، أو المجازفة بأموالك على مخزون قد لا يُباع.</p><p>يتابع دروب أرابيا المخزون ويحاسبك على المنتج عند بيعه بنجاح.</p><p>تختبر المنتجات أولًا، وتكتشف ما ينجح، ثم توسّع.</p>`,
		fr: `<p>Non.</p><p>C'est l'une des principales raisons d'être de Droparabia.</p><p>Vous n'avez pas à acheter des centaines d'unités, à louer un espace de stockage, ni à miser votre argent sur un stock qui pourrait ne pas se vendre.</p><p>Droparabia suit le stock et vous facture le produit une fois que vous l'avez vendu.</p><p>Vous testez d'abord, vous identifiez ce qui fonctionne, puis vous passez à l'échelle.</p>`,
	},
	"faq.q9": {
		en: `Can I order a sample before selling a product?`,
		ar: `هل يمكنني طلب عيّنة قبل بيع المنتج؟`,
		fr: `Puis-je commander un échantillon avant de vendre un produit ?`,
	},
	"faq.a9": {
		en: `<p>Yes.</p><p>You can order samples of products before committing to selling them.</p><p>Many sellers use their samples to test the product themselves and create their own UGC and advertising content. You can also send your sample directly to a UGC creator to produce content for your store.</p><p>This lets you experience the product before putting your brand behind it.</p>`,
		ar: `<p>نعم.</p><p>يمكنك طلب عيّنات من المنتجات قبل الالتزام ببيعها.</p><p>يستخدم كثير من البائعين عيّناتهم لتجربة المنتج بأنفسهم وإنتاج محتوى UGC ومحتوى إعلاني خاص بهم. ويمكنك أيضًا إرسال عيّنتك مباشرة إلى صانع محتوى UGC لإنتاج محتوى لمتجرك.</p><p>هذا يتيح لك تجربة المنتج قبل أن تضع علامتك التجارية خلفه.</p>`,
		fr: `<p>Oui.</p><p>Vous pouvez commander des échantillons avant de vous engager à vendre un produit.</p><p>De nombreux vendeurs utilisent leurs échantillons pour tester le produit eux-mêmes et créer leur propre contenu UGC et publicitaire. Vous pouvez aussi envoyer votre échantillon directement à un créateur UGC afin qu'il produise du contenu pour votre boutique.</p><p>Cela vous permet d'éprouver le produit avant d'engager votre marque.</p>`,
	},
	"faq.q10": {
		en: `What if the product I want isn't available in Droparabia's catalog?`,
		ar: `ماذا لو لم يكن المنتج الذي أريده متوفرًا في كتالوج دروب أرابيا؟`,
		fr: `Et si le produit que je veux n'est pas dans le catalogue Droparabia ?`,
	},
	"faq.a10": {
		en: `<p>You can submit a product through our <strong>Product Request</strong> feature.</p><p>Send us an image or details of the product you're looking for, and we'll try to source it for you without an additional sourcing fee.</p><p>Not every request is accepted. We may reject products that are already widely available in regular stores, don't solve a meaningful problem, or don't have enough potential to become a viable online product.</p>`,
		ar: `<p>يمكنك تقديم طلب منتج عبر ميزة <strong>طلب منتج</strong>.</p><p>أرسل لنا صورة أو تفاصيل المنتج الذي تبحث عنه، وسنحاول توريده لك دون رسوم توريد إضافية.</p><p>لا يُقبل كل طلب. قد نرفض المنتجات المتوفرة على نطاق واسع في المتاجر العادية، أو التي لا تحل مشكلة حقيقية، أو التي لا تملك إمكانات كافية لتصبح منتجًا ناجحًا عبر الإنترنت.</p>`,
		fr: `<p>Vous pouvez soumettre un produit via notre fonctionnalité <strong>Demande de produit</strong>.</p><p>Envoyez-nous une image ou les détails du produit recherché, et nous tenterons de le sourcer pour vous sans frais de sourcing supplémentaires.</p><p>Toutes les demandes ne sont pas acceptées. Nous pouvons refuser des produits déjà largement disponibles en magasin, qui ne résolvent pas de problème réel, ou dont le potentiel est insuffisant pour en faire un produit viable en ligne.</p>`,
	},
	"faq.q11": {
		en: `Can I create my own brand with Droparabia?`,
		ar: `هل يمكنني إنشاء علامتي التجارية الخاصة مع دروب أرابيا؟`,
		fr: `Puis-je créer ma propre marque avec Droparabia ?`,
	},
	"faq.a11": {
		en: `<p>Yes.</p><p>Droparabia allows you to add your own logo to eligible products using our product-branding service.</p><p>There is no minimum order quantity for this service. You pay per item sold, which gives you a way to start building a private-label-style brand without purchasing large quantities of inventory upfront.</p>`,
		ar: `<p>نعم.</p><p>يتيح لك دروب أرابيا إضافة شعارك الخاص على المنتجات المؤهلة عبر خدمة تخصيص العلامة التجارية.</p><p>لا يوجد حد أدنى لكمية الطلب في هذه الخدمة. أنت تدفع لكل قطعة تُباع، ما يمنحك طريقة لبناء علامة تجارية خاصة دون شراء كميات كبيرة من المخزون مقدمًا.</p>`,
		fr: `<p>Oui.</p><p>Droparabia vous permet d'apposer votre propre logo sur les produits éligibles grâce à notre service de branding produit.</p><p>Aucune quantité minimum de commande n'est requise pour ce service. Vous payez à l'article vendu, ce qui vous permet de construire une marque de type marque propre sans acheter de grandes quantités de stock à l'avance.</p>`,
	},
	"faq.q12": {
		en: `Where do Droparabia's products come from?`,
		ar: `من أين تأتي منتجات دروب أرابيا؟`,
		fr: `D'où viennent les produits de Droparabia ?`,
	},
	"faq.a12": {
		en: `<p>We work with our own network of supplier partners, including suppliers locally in Lebanon and in China.</p><p>These supplier relationships allow us to source products at competitive prices and make them available through Droparabia's fulfillment system.</p><p>Our team researches and evaluates products before adding them to the catalog, with a focus on demand, potential margins, and suitability for the Lebanese market.</p>`,
		ar: `<p>نعمل مع شبكة شركاء الموردين الخاصة بنا، وتشمل موردين محليين في لبنان وفي الصين.</p><p>تتيح لنا هذه العلاقات توريد المنتجات بأسعار تنافسية وإتاحتها عبر نظام التجهيز في دروب أرابيا.</p><p>يبحث فريقنا في المنتجات ويقيّمها قبل إضافتها إلى الكتالوج، مع التركيز على الطلب، والهوامش المحتملة، ومدى ملاءمتها للسوق اللبناني.</p>`,
		fr: `<p>Nous travaillons avec notre propre réseau de fournisseurs partenaires, au Liban comme en Chine.</p><p>Ces relations nous permettent de sourcer des produits à des prix compétitifs et de les rendre disponibles via le système de préparation de Droparabia.</p><p>Notre équipe recherche et évalue les produits avant de les ajouter au catalogue, en se concentrant sur la demande, les marges potentielles et l'adéquation au marché libanais.</p>`,
	},
	"faq.q13": {
		en: `How do you find your winning products?`,
		ar: `كيف تعثرون على المنتجات الرابحة؟`,
		fr: `Comment trouvez-vous vos produits gagnants ?`,
	},
	"faq.a13": {
		en: `<p>Our advisors continuously research products and market opportunities to identify products with potential in the Lebanese market.</p><p>The catalog is updated regularly, and our product research is also used to train and improve our AI systems so they can become better at identifying promising products and analyzing their potential.</p><p>You can also use our AI Winning Products tools to explore products that have been identified through this process.</p>`,
		ar: `<p>يبحث مستشارونا باستمرار في المنتجات وفرص السوق لتحديد المنتجات ذات الإمكانات في السوق اللبناني.</p><p>يُحدَّث الكتالوج بانتظام، كما تُستخدم أبحاثنا عن المنتجات لتدريب أنظمة الذكاء الاصطناعي لدينا وتحسينها حتى تصبح أفضل في تحديد المنتجات الواعدة وتحليل إمكاناتها.</p><p>يمكنك أيضًا استخدام أدوات المنتجات الرابحة بالذكاء الاصطناعي لاستكشاف المنتجات التي تم تحديدها عبر هذه العملية.</p>`,
		fr: `<p>Nos conseillers étudient en continu les produits et les opportunités de marché afin d'identifier ceux qui ont du potentiel au Liban.</p><p>Le catalogue est mis à jour régulièrement, et nos recherches produit servent aussi à entraîner et améliorer nos systèmes d'IA, afin qu'ils repèrent mieux les produits prometteurs et analysent leur potentiel.</p><p>Vous pouvez également utiliser nos outils IA Produits Gagnants pour explorer les produits identifiés par ce processus.</p>`,
	},
	"faq.q14": {
		en: `What is MajdGBT?`,
		ar: `ما هو MajdGBT؟`,
		fr: `Qu'est-ce que MajdGBT ?`,
	},
	"faq.a14": {
		en: `<p>MajdGBT is Droparabia's AI assistant, built around the knowledge, experience, and e-commerce expertise of our founder, Majd.</p><p>It has access to Droparabia's ecosystem and is designed to help you with things such as product research, product analysis, buyer avatars, marketing, and building your online business.</p><p>Think of it as having an AI version of the experience behind Droparabia available whenever you need it.</p>`,
		ar: `<p>MajdGBT هو مساعد الذكاء الاصطناعي في دروب أرابيا، مبني على معرفة وخبرة مؤسسنا مجد في التجارة الإلكترونية.</p><p>لديه وصول إلى منظومة دروب أرابيا، وهو مصمم لمساعدتك في أمور مثل البحث عن المنتجات، وتحليلها، وبناء شخصية المشتري، والتسويق، وبناء عملك عبر الإنترنت.</p><p>اعتبره نسخة ذكاء اصطناعي من الخبرة التي يقوم عليها دروب أرابيا، متاحة كلما احتجت إليها.</p>`,
		fr: `<p>MajdGBT est l'assistant IA de Droparabia, construit autour des connaissances, de l'expérience et de l'expertise e-commerce de notre fondateur, Majd.</p><p>Il a accès à l'écosystème Droparabia et est conçu pour vous aider sur des sujets comme la recherche de produits, l'analyse produit, les personas d'acheteurs, le marketing et la construction de votre activité en ligne.</p><p>Voyez-le comme une version IA de l'expérience qui a donné naissance à Droparabia, disponible quand vous en avez besoin.</p>`,
	},
	"faq.q15": {
		en: `Do I get a personal advisor?`,
		ar: `هل أحصل على مستشار شخصي؟`,
		fr: `Ai-je droit à un conseiller personnel ?`,
	},
	"faq.a15": {
		en: `<p>Yes.</p><p>Droparabia users have access to their own advisor groups within our community.</p><p>Your advisors can guide you through the process of building your store, selecting products, testing ideas, improving your marketing, and progressing through the different stages of your business.</p><p>You also have access to the wider Droparabia community, educational content, tutorials, and other resources.</p>`,
		ar: `<p>نعم.</p><p>يملك مستخدمو دروب أرابيا وصولًا إلى مجموعات المستشارين الخاصة بهم داخل مجتمعنا.</p><p>يمكن لمستشاريك إرشادك خلال بناء متجرك، واختيار المنتجات، واختبار الأفكار، وتحسين تسويقك، والتقدم عبر المراحل المختلفة لعملك.</p><p>كما يمكنك الوصول إلى مجتمع دروب أرابيا الأوسع، والمحتوى التعليمي، والدروس التطبيقية، وموارد أخرى.</p>`,
		fr: `<p>Oui.</p><p>Les utilisateurs de Droparabia ont accès à leurs propres groupes de conseillers au sein de notre communauté.</p><p>Vos conseillers peuvent vous guider pour construire votre boutique, sélectionner vos produits, tester vos idées, améliorer votre marketing et franchir les différentes étapes de votre activité.</p><p>Vous accédez également à la communauté Droparabia au sens large, aux contenus pédagogiques, aux tutoriels et à d'autres ressources.</p>`,
	},
	"faq.q16": {
		en: `How long does it take to launch my store?`,
		ar: `كم يستغرق إطلاق متجري؟`,
		fr: `Combien de temps faut-il pour lancer ma boutique ?`,
	},
	"faq.a16": {
		en: `<p>You can get your store up and running in around 10–14 days.</p><p>The reason this process can be much faster than traditional e-commerce is that Droparabia removes many of the time-consuming preparations you'd normally have to handle yourself — such as finding suppliers, sourcing products, arranging fulfillment, and setting up delivery infrastructure.</p><p>Your job is to build and market your store. We handle the operational infrastructure behind it.</p>`,
		ar: `<p>يمكنك تجهيز متجرك وتشغيله خلال نحو 10–14 يومًا.</p><p>السبب في أن هذه العملية أسرع بكثير من التجارة الإلكترونية التقليدية هو أن دروب أرابيا يزيل الكثير من التحضيرات المستهلكة للوقت التي كنت ستتولاها بنفسك عادةً — مثل إيجاد الموردين، وتوريد المنتجات، وترتيب التجهيز، وإنشاء بنية التوصيل.</p><p>مهمتك هي بناء متجرك وتسويقه. ونحن نتولى البنية التشغيلية خلفه.</p>`,
		fr: `<p>Vous pouvez avoir votre boutique opérationnelle en 10 à 14 jours environ.</p><p>Si ce processus est bien plus rapide que le e-commerce traditionnel, c'est parce que Droparabia supprime une grande partie des préparatifs chronophages que vous auriez normalement à gérer — trouver des fournisseurs, sourcer les produits, organiser la préparation et mettre en place la livraison.</p><p>Votre travail consiste à construire et promouvoir votre boutique. Nous nous occupons de l'infrastructure opérationnelle derrière.</p>`,
	},
	"faq.q17": {
		en: `How much money can I make with Droparabia?`,
		ar: `كم يمكنني أن أربح مع دروب أرابيا؟`,
		fr: `Combien puis-je gagner avec Droparabia ?`,
	},
	"faq.a17": {
		en: `<p>There is no fixed amount you can expect to make.</p><p>Your results depend on your product selection, marketing, advertising, consistency, and ability to learn from your results.</p><p>Across our community, beginners commonly generate around $600–$700 in monthly store revenue, while our top 10 sellers generate more than $10,000 per month.</p><p>These figures are examples of what users in our community have achieved, not guaranteed earnings or profit.</p><p>Revenue is also not the same as profit — your advertising, operating, and other business expenses still need to be taken into account.</p>`,
		ar: `<p>لا يوجد مبلغ ثابت يمكنك توقّعه.</p><p>تعتمد نتائجك على اختيارك للمنتجات، والتسويق، والإعلان، والاستمرارية، وقدرتك على التعلّم من نتائجك.</p><p>في مجتمعنا، يحقق المبتدئون عادةً نحو 600–700 دولار من إيرادات المتجر شهريًا، بينما يحقق أفضل 10 بائعين لدينا أكثر من 10,000 دولار شهريًا.</p><p>هذه الأرقام أمثلة على ما حققه مستخدمون في مجتمعنا، وليست أرباحًا أو عوائد مضمونة.</p><p>كما أن الإيرادات ليست هي الربح — إذ يجب أخذ مصاريف الإعلان والتشغيل وغيرها من نفقات العمل بعين الاعتبار.</p>`,
		fr: `<p>Il n'existe aucun montant fixe que vous pouvez espérer gagner.</p><p>Vos résultats dépendent de votre sélection de produits, de votre marketing, de vos publicités, de votre régularité et de votre capacité à tirer des leçons de vos résultats.</p><p>Dans notre communauté, les débutants génèrent couramment environ 600 à 700 $ de chiffre d'affaires mensuel, tandis que nos 10 meilleurs vendeurs dépassent 10 000 $ par mois.</p><p>Ces chiffres illustrent ce que des utilisateurs de notre communauté ont obtenu ; ce ne sont ni des gains ni des bénéfices garantis.</p><p>Le chiffre d'affaires n'est pas non plus le bénéfice — vos dépenses publicitaires, opérationnelles et autres doivent être prises en compte.</p>`,
	},
	"faq.q18": {
		en: `What happens if I use Droparabia for 90 days and make no sales?`,
		ar: `ماذا يحدث إذا استخدمت دروب أرابيا لمدة 90 يومًا ولم أحقق أي مبيعات؟`,
		fr: `Que se passe-t-il si j'utilise Droparabia pendant 90 jours sans faire de ventes ?`,
	},
	"faq.a18": {
		en: `<p>If you actively use Droparabia for 90 days, follow our instructions, make full use of the platform's features, provide proof of your activity, and make no sales whatsoever, you may qualify for our 90-day refund policy.</p><p>Eligible users can receive a full refund, along with compensation for the time and money lost using the platform, subject to the terms and conditions of the guarantee.</p><p>The guarantee is intended for users who genuinely put the system into practice. It does not apply to unused accounts or users who do not demonstrate meaningful effort.</p><p>See our full Terms &amp; Conditions for the complete requirements.</p>`,
		ar: `<p>إذا استخدمت دروب أرابيا بفعالية لمدة 90 يومًا، واتبعت تعليماتنا، واستفدت بالكامل من ميزات المنصة، وقدّمت إثباتًا على نشاطك، ولم تحقق أي مبيعات على الإطلاق، فقد تكون مؤهلًا لسياسة الاسترداد خلال 90 يومًا.</p><p>يمكن للمستخدمين المؤهلين الحصول على استرداد كامل، إضافة إلى تعويض عن الوقت والمال المفقودين أثناء استخدام المنصة، وفقًا لشروط وأحكام الضمان.</p><p>الضمان مخصص للمستخدمين الذين يطبّقون النظام فعليًا. ولا ينطبق على الحسابات غير المستخدمة أو على من لا يُظهر جهدًا حقيقيًا.</p><p>راجع الشروط والأحكام الكاملة للاطلاع على المتطلبات كافة.</p>`,
		fr: `<p>Si vous utilisez activement Droparabia pendant 90 jours, suivez nos instructions, exploitez pleinement les fonctionnalités de la plateforme, fournissez une preuve de votre activité et ne réalisez aucune vente, vous pouvez être éligible à notre politique de remboursement à 90 jours.</p><p>Les utilisateurs éligibles peuvent recevoir un remboursement intégral, ainsi qu'une compensation pour le temps et l'argent perdus sur la plateforme, sous réserve des conditions générales de la garantie.</p><p>Cette garantie s'adresse aux utilisateurs qui mettent réellement le système en pratique. Elle ne s'applique pas aux comptes inutilisés ni aux utilisateurs ne démontrant pas d'effort sérieux.</p><p>Consultez nos Conditions générales complètes pour le détail des exigences.</p>`,
	},
	"faq.q19": {
		en: `Is there a catch with dropshipping?`,
		ar: `هل هناك مكسب خفي في الدروبشيبينغ؟`,
		fr: `Y a-t-il un piège avec le dropshipping ?`,
	},
	"faq.a19": {
		en: `<p>There is no magic button.</p><p>Dropshipping removes the need to purchase and manage inventory upfront, but it doesn't remove the responsibility of running a business.</p><p>You'll still need to choose products, build your store, create content, run ads, understand your customers, test different approaches, and learn from your results.</p><p>The difference is that Droparabia handles much of the infrastructure and operational friction that would otherwise consume your time and money.</p>`,
		ar: `<p>لا يوجد زر سحري.</p><p>يزيل الدروبشيبينغ الحاجة إلى شراء المخزون وإدارته مقدمًا، لكنه لا يزيل مسؤولية إدارة عمل تجاري.</p><p>ستظل بحاجة إلى اختيار المنتجات، وبناء متجرك، وإنشاء المحتوى، وتشغيل الإعلانات، وفهم عملائك، وتجربة أساليب مختلفة، والتعلّم من نتائجك.</p><p>الفرق أن دروب أرابيا يتولى جزءًا كبيرًا من البنية التحتية والعقبات التشغيلية التي كانت ستستهلك وقتك ومالك.</p>`,
		fr: `<p>Il n'y a pas de bouton magique.</p><p>Le dropshipping supprime la nécessité d'acheter et de gérer du stock à l'avance, mais il ne supprime pas la responsabilité de diriger une activité.</p><p>Vous devrez toujours choisir vos produits, construire votre boutique, créer du contenu, lancer des publicités, comprendre vos clients, tester différentes approches et apprendre de vos résultats.</p><p>La différence, c'est que Droparabia prend en charge l'essentiel de l'infrastructure et de la friction opérationnelle qui consommeraient autrement votre temps et votre argent.</p>`,
	},
	"faq.q20": {
		en: `Can I eventually turn my dropshipping store into a real brand?`,
		ar: `هل يمكنني تحويل متجر الدروبشيبينغ إلى علامة تجارية حقيقية لاحقًا؟`,
		fr: `Puis-je transformer ma boutique de dropshipping en véritable marque ?`,
	},
	"faq.a20": {
		en: `<p>Absolutely.</p><p>In fact, that's one of the paths Droparabia is designed to support.</p><p>You can start by testing products without purchasing inventory, identify what your customers actually want, and then begin building a recognizable brand around your winning products.</p><p>With our product-branding service, you can even start adding your own logo to eligible products without committing to large minimum orders.</p><p>Dropshipping can be your testing phase — not necessarily the final destination.</p>`,
		ar: `<p>بالتأكيد.</p><p>في الواقع، هذا أحد المسارات التي صُمم دروب أرابيا لدعمها.</p><p>يمكنك البدء باختبار المنتجات دون شراء مخزون، ومعرفة ما يريده عملاؤك فعلًا، ثم البدء ببناء علامة تجارية مميزة حول منتجاتك الرابحة.</p><p>ومع خدمة تخصيص العلامة التجارية، يمكنك أيضًا البدء بإضافة شعارك على المنتجات المؤهلة دون الالتزام بطلبات كبيرة.</p><p>يمكن أن يكون الدروبشيبينغ مرحلة الاختبار لديك — وليس بالضرورة المحطة الأخيرة.</p>`,
		fr: `<p>Absolument.</p><p>C'est même l'une des trajectoires que Droparabia est conçu pour accompagner.</p><p>Vous pouvez commencer par tester des produits sans acheter de stock, identifier ce que vos clients veulent réellement, puis construire une marque reconnaissable autour de vos produits gagnants.</p><p>Avec notre service de branding produit, vous pouvez même commencer à apposer votre logo sur les produits éligibles sans vous engager sur de grandes commandes minimum.</p><p>Le dropshipping peut être votre phase de test — pas nécessairement la destination finale.</p>`,
	},
	"faq.q21": {
		en: `What makes Droparabia different from traditional dropshipping?`,
		ar: `ما الذي يميّز دروب أرابيا عن الدروبشيبينغ التقليدي؟`,
		fr: `Qu'est-ce qui différencie Droparabia du dropshipping traditionnel ?`,
	},
	"faq.a21": {
		en: `<p>Traditional dropshipping often means spending hours finding products, researching suppliers, negotiating prices, arranging international shipping, and figuring out how to get products to your customers.</p><p>Droparabia brings those pieces together into one system built specifically for the Lebanese market.</p><p>You get:</p><ul><li>Product research</li><li>Supplier relationships</li><li>Product sourcing</li><li>Inventory management</li><li>Fulfillment</li><li>Delivery</li><li>Payment collection</li><li>Shopify integration</li><li>AI tools</li><li>Product branding</li><li>Educational resources</li><li>Advisor support</li><li>A community of other sellers</li></ul><p>So instead of building the entire infrastructure yourself, you can focus on the part that actually grows your business: selling.</p>`,
		ar: `<p>غالبًا ما يعني الدروبشيبينغ التقليدي قضاء ساعات في إيجاد المنتجات، والبحث عن الموردين، والتفاوض على الأسعار، وترتيب الشحن الدولي، ومعرفة كيفية إيصال المنتجات إلى عملائك.</p><p>يجمع دروب أرابيا هذه القطع في نظام واحد مبني خصيصًا للسوق اللبناني.</p><p>تحصل على:</p><ul><li>بحث المنتجات</li><li>علاقات مع الموردين</li><li>توريد المنتجات</li><li>إدارة المخزون</li><li>التجهيز</li><li>التوصيل</li><li>تحصيل المدفوعات</li><li>تكامل مع شوبيفاي</li><li>أدوات ذكاء اصطناعي</li><li>تخصيص العلامة التجارية</li><li>موارد تعليمية</li><li>دعم المستشارين</li><li>مجتمع من البائعين الآخرين</li></ul><p>وبدلًا من بناء البنية التحتية بالكامل بنفسك، يمكنك التركيز على الجزء الذي ينمّي عملك فعلًا: البيع.</p>`,
		fr: `<p>Le dropshipping traditionnel implique souvent de passer des heures à chercher des produits, étudier les fournisseurs, négocier les prix, organiser le transport international et trouver comment acheminer les produits jusqu'à vos clients.</p><p>Droparabia réunit toutes ces pièces dans un seul système conçu spécifiquement pour le marché libanais.</p><p>Vous obtenez :</p><ul><li>La recherche de produits</li><li>Les relations fournisseurs</li><li>Le sourcing produit</li><li>La gestion des stocks</li><li>La préparation</li><li>La livraison</li><li>L'encaissement</li><li>L'intégration Shopify</li><li>Des outils d'IA</li><li>Le branding produit</li><li>Des ressources pédagogiques</li><li>Le support de conseillers</li><li>Une communauté d'autres vendeurs</li></ul><p>Ainsi, au lieu de bâtir toute l'infrastructure vous-même, vous pouvez vous concentrer sur ce qui fait réellement grandir votre activité : vendre.</p>`,
	},

	"mobileapp.heading": {
		en: "Manage your business with Droparabia anywhere you go!",
		ar: "أدر مشروعك مع دروب أرابيا أينما كنت!",
		fr: "Gérez votre activité avec Droparabia où que vous soyez !",
	},
	"mobileapp.subheading": {
		en: "Even if you're not close to your desktop, you can use the Droparabia mobile app to manage your business from any place at any time!",
		ar: "حتى لو لم تكن قريبًا من جهازك المكتبي، يمكنك استخدام تطبيق دروب أرابيا للهاتف لإدارة مشروعك من أي مكان وفي أي وقت!",
		fr: "Même loin de votre ordinateur, l'application mobile Droparabia vous permet de gérer votre activité de n'importe où, à tout moment !",
	},

	"wall.heading": {
		en: "No more burning your budget on friction",
		ar: "لا مزيد من إحراق ميزانيتك على العقبات",
		fr: "Ne brûlez plus votre budget en frictions",
	},
	"wall.subheading": {
		en: "Get access to this powerful system to build the highest earning store alongside +800 sellers",
		ar: "احصل على هذا النظام القوي لبناء أعلى متجر ربحًا إلى جانب أكثر من 800 بائع",
		fr: "Accédez à ce système puissant pour bâtir la boutique la plus rentable aux côtés de plus de 800 vendeurs",
	},

	"casestudy.heading": { en: "Latest case studies", ar: "أحدث دراسات الحالة", fr: "Dernières études de cas" },

	// Dates and read times are translated rather than formatted at runtime — there are only
	// three posts, and Arabic needs its own plural form for "minutes" (3-10 take دقائق,
	// 11+ takes دقيقة), which Intl alone would not get right here.
	"blog.post0.date": { en: "January 30, 2026", ar: "30 يناير 2026", fr: "30 janvier 2026" },
	"blog.post0.readTime": { en: "9 min read", ar: "قراءة 9 دقائق", fr: "9 min de lecture" },
	"blog.post1.date": { en: "January 30, 2026", ar: "30 يناير 2026", fr: "30 janvier 2026" },
	"blog.post1.readTime": { en: "10 min read", ar: "قراءة 10 دقائق", fr: "10 min de lecture" },
	"blog.featured.date": { en: "January 30, 2026", ar: "30 يناير 2026", fr: "30 janvier 2026" },
	"blog.featured.readTime": { en: "12 min read", ar: "قراءة 12 دقيقة", fr: "12 min de lecture" },

	"blog.heading": { en: "Browse our latest articles", ar: "تصفّح أحدث مقالاتنا", fr: "Parcourez nos derniers articles" },
	"blog.post0.title": {
		en: `Dropshipping is "dead"`,
		ar: `الدروبشيبينغ "ميت"`,
		fr: `Le dropshipping est « mort »`,
	},
	"blog.post0.excerpt": {
		en: "Is dropshipping really dead in 2026, or is that just a myth pushed by failed case studies and course sellers?",
		ar: "هل الدروبشيبينغ ميت فعلاً في 2026، أم أنها مجرد خرافة يروّجها أصحاب التجارب الفاشلة وبائعو الدورات؟",
		fr: "Le dropshipping est-il vraiment mort en 2026, ou n'est-ce qu'un mythe entretenu par des échecs et des vendeurs de formations ?",
	},
	"blog.post1.title": {
		en: "Why Droparabia exists",
		ar: "لماذا توجد دروب أرابيا",
		fr: "Pourquoi Droparabia existe",
	},
	"blog.post1.excerpt": {
		en: "The story behind Droparabia — the obstacles that made traditional e-commerce and old dropshipping fail Lebanese sellers.",
		ar: "القصة وراء دروب أرابيا — العقبات التي جعلت التجارة الإلكترونية التقليدية والدروبشيبينغ القديم يفشلان مع البائعين اللبنانيين.",
		fr: "L'histoire derrière Droparabia — les obstacles qui ont fait échouer le e-commerce traditionnel et l'ancien dropshipping pour les vendeurs libanais.",
	},
	"blog.featured.title": {
		en: "Dropshipping for newbies: how to start dropshipping in Lebanon?",
		ar: "الدروبشيبينغ للمبتدئين: كيف تبدأ الدروبشيبينغ في لبنان؟",
		fr: "Le dropshipping pour les débutants : comment se lancer dans le dropshipping au Liban ?",
	},

	"reviewform.heading": {
		en: 'Leave a <span class="text-primary">review</span>',
		ar: 'اترك <span class="text-primary">تقييمًا</span>',
		fr: `Laissez un <span class="text-primary">avis</span>`,
	},
	"reviewform.subtext": {
		en: "Tell other sellers about your experience with Droparabia. Reviews are checked before they go live.",
		ar: "أخبر البائعين الآخرين عن تجربتك مع دروب أرابيا. تُراجع التقييمات قبل نشرها.",
		fr: "Parlez de votre expérience avec Droparabia aux autres vendeurs. Les avis sont vérifiés avant leur publication.",
	},
	"reviewform.name": { en: "Name", ar: "الاسم", fr: "Nom" },
	"reviewform.rating": { en: "Rating", ar: "التقييم", fr: "Note" },
	"reviewform.reviewLabel": { en: "Your review", ar: "تقييمك", fr: "Votre avis" },
	"reviewform.submit": { en: "Submit review", ar: "إرسال التقييم", fr: "Envoyer l'avis" },

	"faqpage.heading": {
		en: 'Frequently asked <span class="text-primary">questions</span>',
		ar: 'الأسئلة <span class="text-primary">الشائعة</span>',
		fr: `Questions <span class="text-primary">fréquentes</span>`,
	},
	"faqpage.subtext": {
		en: "Answers to the questions we get most. Can't find what you're looking for? Reach out through Contact.",
		ar: "إجابات على الأسئلة الأكثر شيوعًا. لم تجد ما تبحث عنه؟ تواصل معنا عبر صفحة التواصل.",
		fr: "Les réponses aux questions les plus fréquentes. Vous ne trouvez pas ce que vous cherchez ? Écrivez-nous via la page Contact.",
	},

	"reviews.activeSellers": { en: "Active sellers", ar: "بائع نشط", fr: "Vendeurs actifs" },
	// Sits before a brand logo in ReviewsHero ("From [Droparabia] Sellers" / "From [Trustpilot] 4.5"),
	// so the French wording has to read naturally in front of either logo.
	"reviews.from": { en: "From", ar: "من", fr: "Avis" },
	"reviews.sellers": { en: "Sellers", ar: "البائعين", fr: "de nos vendeurs" },

	"trustpilot.heading": {
		en: 'Already a <span class="text-primary">Droparabia</span> seller?',
		ar: 'هل أنت بائع على <span class="text-primary">دروب أرابيا</span> بالفعل؟',
		fr: `Déjà vendeur sur <span class="text-primary">Droparabia</span> ?`,
	},
	"trustpilot.reviewUs": { en: "Review us on Trustpilot", ar: "قيّمنا على Trustpilot", fr: "Évaluez-nous sur Trustpilot" },
	"trustpilot.writeReview": { en: "Write us a review", ar: "اكتب لنا تقييمًا", fr: "Rédigez-nous un avis" },

	"external.heading": { en: "Leaving Droparabia", ar: "مغادرة دروب أرابيا", fr: "Vous quittez Droparabia" },
	"external.cancel": { en: "Cancel", ar: "إلغاء", fr: "Annuler" },
	"external.continue": { en: "Continue", ar: "متابعة", fr: "Continuer" },
	"external.instagramMessage": {
		en: "You're about to be redirected to Instagram to join our broadcast channel.",
		ar: "أنت على وشك التوجه إلى إنستغرام للانضمام إلى قناة البث الخاصة بنا.",
		fr: "Vous allez être redirigé vers Instagram pour rejoindre notre chaîne de diffusion.",
	},

	// --- Header/Footer nav item labels + descriptions (tool labels reuse the same slug key
	// families used elsewhere so Header/Footer/tool pages all stay in sync) ---
	"tool.find-products.label": { en: "Find Products", ar: "البحث عن المنتجات", fr: "Recherche de produits" },
	"tool.ai-winning-products.label": {
		en: "AI Winning Products",
		ar: "منتجات رابحة بالذكاء الاصطناعي",
		fr: "Produits gagnants par IA",
	},
	"tool.ai-studio.label": { en: "AI Studio", ar: "استوديو الذكاء الاصطناعي", fr: "Studio IA" },
	"tool.branding.label": { en: "Branding", ar: "العلامة التجارية", fr: "Image de marque" },
	"tool.product-request.label": { en: "Product Request", ar: "طلب منتج", fr: "Demande de produit" },
	"tool.leader-board.label": { en: "Leader Board", ar: "لوحة المتصدرين", fr: "Classement" },

	"resources.faq.label": { en: "FAQ", ar: "الأسئلة الشائعة", fr: "FAQ" },
	"resources.faq.desc": {
		en: "Answers to the questions we get most",
		ar: "إجابات على الأسئلة الأكثر شيوعًا",
		fr: "Les réponses aux questions les plus fréquentes",
	},
	"resources.blog.label": { en: "Blog", ar: "المدونة", fr: "Blog" },
	"resources.blog.desc": {
		en: "Guides and updates from the Droparabia team",
		ar: "أدلة وتحديثات من فريق دروب أرابيا",
		fr: "Guides et actualités de l'équipe Droparabia",
	},
	"resources.broadcast.label": { en: "Broadcast channel", ar: "قناة البث", fr: "Chaîne de diffusion" },
	"resources.broadcast.desc": {
		en: "Announcements and drops, straight to you",
		ar: "إعلانات وعروض تصلك مباشرة",
		fr: "Annonces et nouveautés, directement chez vous",
	},
	"resources.youtube.label": { en: "YouTube channel", ar: "قناة يوتيوب", fr: "Chaîne YouTube" },
	"resources.youtube.desc": { en: "Video guides and behind-the-scenes", ar: "شروحات مصورة ولقطات من الكواليس", fr: "Guides vidéo et coulisses" },
	"resources.contact.label": { en: "Contact", ar: "تواصل معنا", fr: "Contact" },
	"resources.contact.desc": {
		en: "Reach the Droparabia support team",
		ar: "تواصل مع فريق دعم دروب أرابيا",
		fr: "Contactez l'équipe d'assistance Droparabia",
	},
	"resources.about.label": { en: "About Us", ar: "من نحن", fr: "À propos" },
	"resources.about.desc": {
		en: "Who we are and why we started Droparabia",
		ar: "من نحن ولماذا أسسنا دروب أرابيا",
		fr: "Qui nous sommes et pourquoi nous avons lancé Droparabia",
	},

	"footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة.", fr: "Tous droits réservés." },

	// --- Browser tab titles ---
	"page.about": { en: "About Us", ar: "من نحن", fr: "À propos" },
	"page.faq": { en: "FAQ", ar: "الأسئلة الشائعة", fr: "FAQ" },
	"page.dropvault": { en: "Dropvault", ar: "دروب فولت", fr: "Dropvault" },
	"page.leaveReview": { en: "Leave a Review", ar: "اترك تقييمًا", fr: "Laisser un avis" },
	"page.reviews": { en: "Reviews", ar: "التقييمات", fr: "Avis" },
	"page.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية", fr: "Politique de confidentialité" },
	"page.terms": { en: "Terms & Conditions", ar: "الشروط والأحكام", fr: "Conditions générales" },

	"about.founder.name": { en: "Majd Abdulsalam", ar: "مجد عبدالسلام", fr: "Majd Abdulsalam" },

	// --- Hero niche toggle labels (display only — folder names on disk stay in English) ---
	"hero.niche0": { en: "Kitchen", ar: "المطبخ", fr: "Cuisine" },
	"hero.niche1": { en: "Health and beauty", ar: "الصحة والجمال", fr: "Santé et beauté" },
	"hero.niche2": { en: "Electronic", ar: "الإلكترونيات", fr: "Électronique" },
	"hero.niche3": { en: "Home & Garden", ar: "المنزل والحديقة", fr: "Maison et jardin" },

	// --- Product catalog: Alibaba vs Droparabia comparison ---
	// Chrome (buttons, headings, the Alibaba explainer) is tagged with data-i18n and handled
	// by the global applier in Layout.astro. The price rows are not: their text is rewritten
	// per product by the catalog's own script, which would leave the applier's cached English
	// "original" pointing at whichever product happened to be on screen first. Those rows
	// carry data-row-key / data-row-vkey instead and are resolved by that same script.
	"catalog.toggle.alibaba": { en: "On Alibaba", ar: "على علي بابا", fr: "Sur Alibaba" },
	"catalog.toggle.droparabia": { en: "On Droparabia", ar: "على دروب أرابيا", fr: "Sur Droparabia" },
	"catalog.info.button": { en: "How is this calculated?", ar: "كيف يتم حساب ذلك؟", fr: "Comment est-ce calculé ?" },
	"catalog.info.whyHigher": {
		en: "Why the cost on Droparabia is higher?",
		ar: "لماذا التكلفة على دروب أرابيا أعلى؟",
		fr: "Pourquoi le coût est-il plus élevé sur Droparabia ?",
	},
	"catalog.info.source": { en: "See it on Alibaba", ar: "شاهده على علي بابا", fr: "Voir sur Alibaba" },

	"catalog.intro.moq": {
		en: "Items on Alibaba are sold at a wholesale price per piece and suppliers require you to buy in a Minimum Order Quantity (MOQ).",
		ar: "تُباع المنتجات على علي بابا بسعر الجملة للقطعة الواحدة، ويشترط الموردون الشراء بحدّ أدنى لكمية الطلب (MOQ).",
		fr: "Les articles sur Alibaba sont vendus à un prix de gros à la pièce et les fournisseurs exigent un achat selon une quantité minimum de commande (MOQ).",
	},
	"catalog.intro.example": {
		en: "Example: $1/unit with MOQ of 100, meaning you need to buy at least 100 piece.",
		ar: "مثال: 1 دولار للوحدة مع حدّ أدنى للطلب 100، أي أنك بحاجة إلى شراء 100 قطعة على الأقل.",
		fr: "Exemple : 1 $/unité avec un MOQ de 100, c'est-à-dire que vous devez acheter au moins 100 pièce.",
	},
	"catalog.intro.shipping": {
		en: "Air shipping to Lebanon can average approximately $13 per kg ($15 for batteries and liquids).",
		ar: "قد يبلغ متوسط الشحن الجوي إلى لبنان نحو 13 دولارًا للكيلوغرام (15 دولارًا للبطاريات والسوائل).",
		fr: "Le fret aérien vers le Liban coûte en moyenne environ 13 $ par kg (15 $ pour les batteries et les liquides).",
	},
	"catalog.intro.lead": {
		en: "So, an example if you were to buy this product from Alibaba:",
		ar: "وإليك مثالاً لو أردت شراء هذا المنتج من علي بابا:",
		fr: "Voici donc un exemple si vous achetiez ce produit sur Alibaba :",
	},

	// Row labels. Kept short on purpose: each row is a label opposite a figure, so a long
	// translation wraps and breaks the alignment the comparison depends on.
	"catalog.row.costPerItem": { en: "Cost per item", ar: "سعر القطعة", fr: "Prix unitaire" },
	"catalog.row.moq": { en: "MOQ", ar: "الحد الأدنى", fr: "MOQ" },
	"catalog.row.shippingPerItem": { en: "Shipping per item", ar: "شحن القطعة", fr: "Livraison / article" },
	"catalog.row.totalCost": { en: "Total cost", ar: "التكلفة الإجمالية", fr: "Coût total" },
	"catalog.row.productCost": { en: "Product Cost", ar: "تكلفة المنتج", fr: "Coût du produit" },
	"catalog.row.estimatedSelling": { en: "Estimated Selling", ar: "سعر البيع المتوقع", fr: "Vente estimée" },
	"catalog.row.estimatedProfit": { en: "Estimated Profit", ar: "الربح المتوقع", fr: "Bénéfice estimé" },
	"catalog.row.weight": { en: "Weight", ar: "الوزن", fr: "Poids" },
	"catalog.row.shippingCostPerItem": { en: "Shipping cost per item", ar: "تكلفة الشحن للقطعة", fr: "Coût de livraison par article" },
	"catalog.row.productCostCalc": { en: "Product cost", ar: "تكلفة المنتج", fr: "Coût du produit" },
	"catalog.row.shippingCost": { en: "Shipping cost", ar: "تكلفة الشحن", fr: "Coût de livraison" },
	"catalog.row.priceCovers": { en: "Price covers", ar: "السعر يشمل", fr: "Le prix couvre" },
	"catalog.row.shipping": { en: "Shipping", ar: "الشحن", fr: "Livraison" },
	"catalog.row.operations": { en: "Operations", ar: "التشغيل", fr: "Opérations" },

	// Values that are prose rather than figures. Figures stay as-is in every language; only
	// the unit word after a MOQ count is substituted, via catalog.value.piece.
	"catalog.value.none": { en: "None", ar: "لا يوجد", fr: "Aucune" },
	"catalog.value.piece": { en: "piece", ar: "قطعة", fr: "pièce" },
	"catalog.value.noMoq": {
		en: "No minimum order quantity, you pay the cost of each item sold and keep the profit",
		ar: "لا حدّ أدنى لكمية الطلب، تدفع تكلفة كل قطعة تُباع وتحتفظ بالربح",
		fr: "Aucune quantité minimum de commande : vous payez le coût de chaque article vendu et gardez le bénéfice",
	},
	"catalog.value.covers": {
		en: "Sourcing, international shipping, warehousing, fulfillment and handling",
		ar: "التوريد والشحن الدولي والتخزين والتجهيز والمناولة",
		fr: "Sourcing, transport international, stockage, préparation et manutention",
	},
	"catalog.value.airFreight": {
		en: "Air freight to Lebanon averages around $15/kg, and varies by shipment",
		ar: "يبلغ متوسط الشحن الجوي إلى لبنان نحو 15 دولارًا للكيلوغرام، ويختلف حسب الشحنة",
		fr: "Le fret aérien vers le Liban coûte en moyenne environ 15 $/kg et varie selon l'expédition",
	},
	"catalog.value.operations": {
		en: "Around 15–20% covers fulfillment, warehousing and related running costs",
		ar: "نحو 15–20% تغطي التجهيز والتخزين والتكاليف التشغيلية المرتبطة",
		fr: "Environ 15–20 % couvrent la préparation, le stockage et les frais de fonctionnement associés",
	},

	// --- MajdGBT chat demo ---
	"majdgbt.inputPlaceholder": {
		en: "Ask MajdGBT anything...",
		ar: "اسأل MajdGBT أي شيء...",
		fr: "Posez n'importe quelle question à MajdGBT...",
	},
	"majdgbt.thinking": { en: "Thinking...", ar: "جارٍ التفكير...", fr: "Réflexion en cours..." },
	"majdgbt.fallback": {
		en: "That's a great question — I'll have a full answer for you once I'm live!",
		ar: "سؤال رائع — سأقدم لك إجابة كاملة بمجرد أن أصبح متاحًا بشكل كامل!",
		fr: "Excellente question — je vous donnerai une réponse complète dès que je serai en ligne !",
	},
	"majdgbt.q0": {
		en: "What dropshipping niches are the most profitable?",
		ar: "ما هي أكثر مجالات الدروبشيبينغ ربحية؟",
		fr: "Quelles niches de dropshipping sont les plus rentables ?",
	},
	"majdgbt.a0": {
		en: "Some of the most profitable dropshipping niches right now are health & beauty (skincare tools, pain relief, hair care gadgets), home & kitchen (organizers, cleaning tools, smart gadgets), fitness & wellness (posture correctors, massage tools, home workout gear), baby & kids (educational toys, safety products, organizers), and pets (toys, grooming tools, car seat covers). These niches work well because they solve real problems, have strong emotions behind them, and are easy to show in short videos.",
		ar: "من أكثر مجالات الدروبشيبينغ ربحية حاليًا: الصحة والجمال (أدوات العناية بالبشرة، تخفيف الألم، أدوات العناية بالشعر)، المنزل والمطبخ (أدوات التنظيم، أدوات التنظيف، الأجهزة الذكية)، اللياقة والعافية (مصححات الوضعية، أدوات التدليك، معدات التمارين المنزلية)، الأطفال والرضع (ألعاب تعليمية، منتجات أمان، أدوات تنظيم)، والحيوانات الأليفة (ألعاب، أدوات عناية، أغطية مقاعد السيارة). تنجح هذه المجالات لأنها تحل مشاكل حقيقية، وترتبط بمشاعر قوية، ويسهل عرضها في فيديوهات قصيرة.",
		fr: "Parmi les niches de dropshipping les plus rentables actuellement : la santé et la beauté (outils de soin de la peau, anti-douleur, appareils pour cheveux), la maison et la cuisine (rangement, outils de nettoyage, gadgets connectés), le fitness et le bien-être (correcteurs de posture, appareils de massage, matériel de sport à domicile), les bébés et enfants (jouets éducatifs, produits de sécurité, rangement) et les animaux (jouets, outils de toilettage, housses de siège auto). Ces niches fonctionnent bien parce qu'elles résolvent de vrais problèmes, portent une forte charge émotionnelle et se montrent facilement en vidéo courte.",
	},
	"majdgbt.q1": {
		en: "How do I create ads that attract customers?",
		ar: "كيف أنشئ إعلانات تجذب العملاء؟",
		fr: "Comment créer des publicités qui attirent les clients ?",
	},
	"majdgbt.a1": {
		en: "Create simple UGC-style video ads: start with a strong hook in the first 3 seconds, show the problem, then how your product fixes it, add quick social proof, and finish with a clear 'Order Now – Cash on Delivery' call to action. Keep it short (15–25 seconds), show real people using the product, and test 2–3 different hooks to see what gets the most clicks.",
		ar: "أنشئ إعلانات فيديو بسيطة بأسلوب UGC: ابدأ بجملة جذب قوية في أول 3 ثوانٍ، اعرض المشكلة، ثم كيف يحلها منتجك، أضف دليلًا اجتماعيًا سريعًا، وأنهِ بدعوة واضحة لاتخاذ إجراء مثل 'اطلب الآن – الدفع عند الاستلام'. اجعله قصيرًا (15–25 ثانية)، اعرض أشخاصًا حقيقيين يستخدمون المنتج، وجرّب 2–3 جمل جذب مختلفة لمعرفة أيها يحقق أكثر نقرات.",
		fr: "Créez des vidéos publicitaires simples de style UGC : commencez par une accroche forte dans les 3 premières secondes, montrez le problème, puis comment votre produit le résout, ajoutez une preuve sociale rapide et terminez par un appel à l'action clair du type « Commandez maintenant – Paiement à la livraison ». Restez court (15 à 25 secondes), montrez de vraies personnes qui utilisent le produit et testez 2 ou 3 accroches différentes pour voir laquelle génère le plus de clics.",
	},
	"majdgbt.q2": {
		en: "Is the dropshipping model actually dead?",
		ar: "هل نموذج الدروبشيبينغ ميت فعلاً؟",
		fr: "Le modèle du dropshipping est-il vraiment mort ?",
	},
	"majdgbt.a2": {
		en: "No, dropshipping isn't dead — bad products and bad marketing are. The model still works very well when you focus on solving a real problem, fast delivery with reliable suppliers, and strong video creatives with a clear COD offer. People don't care if it's dropshipping — they care if it arrives fast, does what it promises, and feels trustworthy.",
		ar: "لا، الدروبشيبينغ ليس ميتًا — المنتجات السيئة والتسويق السيئ هما الميتان. لا يزال النموذج يعمل بشكل ممتاز عندما تركز على حل مشكلة حقيقية، وتوصيل سريع مع موردين موثوقين، وفيديوهات إبداعية قوية مع عرض دفع عند الاستلام واضح. لا يهم العملاء إن كان دروبشيبينغ أم لا — ما يهمهم هو أن يصل الطلب بسرعة، وأن يفي بما وعد به، وأن يشعروا بالثقة.",
		fr: "Non, le dropshipping n'est pas mort — ce sont les mauvais produits et le mauvais marketing qui le sont. Le modèle fonctionne toujours très bien quand vous vous concentrez sur la résolution d'un vrai problème, une livraison rapide avec des fournisseurs fiables et des vidéos percutantes avec une offre de paiement à la livraison claire. Les clients se moquent que ce soit du dropshipping — ce qui compte pour eux, c'est que la commande arrive vite, qu'elle tienne ses promesses et qu'elle inspire confiance.",
	},
	"majdgbt.q3": {
		en: "What if I can't find the product I'm looking for on Droparabia?",
		ar: "ماذا لو لم أجد المنتج الذي أبحث عنه في دروب أرابيا؟",
		fr: "Et si je ne trouve pas le produit que je cherche sur Droparabia ?",
	},
	"majdgbt.a3": {
		en: "If you don't find the exact product you're looking for on Droparabia, you can either message the Droparabia team to request it and check if they can source it for you, or use a similar alternative product that solves the same problem and is already available with good stock and shipping times. The goal is speed: sell what's available and proven, instead of waiting weeks for one specific item.",
		ar: "إذا لم تجد المنتج الذي تبحث عنه بالضبط على دروب أرابيا، يمكنك إما مراسلة فريق دروب أرابيا لطلبه ومعرفة إن كان بإمكانهم توفيره لك، أو استخدام منتج بديل مشابه يحل نفس المشكلة ومتوفر بالفعل بمخزون جيد وأوقات شحن مناسبة. الهدف هو السرعة: بِع ما هو متوفر ومُثبت، بدلاً من الانتظار أسابيع لمنتج واحد محدد.",
		fr: "Si vous ne trouvez pas exactement le produit recherché sur Droparabia, vous pouvez soit écrire à l'équipe Droparabia pour le demander et voir si elle peut le sourcer pour vous, soit utiliser un produit alternatif similaire qui résout le même problème et qui est déjà disponible avec un bon stock et des délais de livraison corrects. L'objectif, c'est la vitesse : vendez ce qui est disponible et éprouvé, au lieu d'attendre des semaines pour un article précis.",
	},
	"majdgbt.q4": { en: "How do I choose my winning product?", ar: "كيف أختار منتجي الرابح؟", fr: "Comment choisir mon produit gagnant ?" },
	"majdgbt.a4": {
		en: "Choose a winning product by using clear criteria: it must solve a real pain, have a strong 'wow' factor on video, at least 3–5x profit margin, and already be selling in the market (active ads, viral videos, real reviews). Then shortlist 5–10 products, check which ones have the best mix of demand + profit + simple usage, and start testing with 1 main product and 1–2 backups.",
		ar: "اختر منتجك الرابح باستخدام معايير واضحة: يجب أن يحل مشكلة حقيقية، وله عامل 'إبهار' قوي على الفيديو، وهامش ربح لا يقل عن 3–5 أضعاف، وأن يكون يُباع بالفعل في السوق (إعلانات نشطة، فيديوهات منتشرة، تقييمات حقيقية). بعد ذلك، رشّح 5–10 منتجات، وتحقق من أيها يجمع أفضل مزيج من الطلب والربح وسهولة الاستخدام، وابدأ الاختبار بمنتج رئيسي واحد و1–2 منتج احتياطي.",
		fr: "Choisissez votre produit gagnant avec des critères clairs : il doit résoudre un vrai problème, avoir un fort effet « wow » en vidéo, offrir une marge d'au moins 3 à 5 fois le prix d'achat et se vendre déjà sur le marché (publicités actives, vidéos virales, avis réels). Présélectionnez ensuite 5 à 10 produits, regardez lesquels combinent le mieux demande, rentabilité et simplicité d'usage, puis commencez à tester avec 1 produit principal et 1 ou 2 produits de secours.",
	},

	// --- Review form dynamic (JS-driven) messages ---
	"reviewform.errorName": {
		en: "Name must be {min}-{max} characters.",
		ar: "يجب أن يتراوح الاسم بين {min} و{max} حرفًا.",
		fr: "Le nom doit contenir entre {min} et {max} caractères.",
	},
	"reviewform.errorRating": { en: "Please pick a star rating.", ar: "يرجى اختيار تقييم بالنجوم.", fr: "Veuillez choisir une note en étoiles." },
	"reviewform.errorText": {
		en: "Review must be {min}-{max} characters.",
		ar: "يجب أن يتراوح التقييم بين {min} و{max} حرفًا.",
		fr: "L'avis doit contenir entre {min} et {max} caractères.",
	},
	"reviewform.errorRateLimit": {
		en: "Please wait a bit before submitting another review.",
		ar: "يرجى الانتظار قليلاً قبل إرسال تقييم آخر.",
		fr: "Veuillez patienter un peu avant d'envoyer un autre avis.",
	},
	"reviewform.errorGeneric": {
		en: "Something went wrong. Please try again later.",
		ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقًا.",
		fr: "Une erreur s'est produite. Veuillez réessayer plus tard.",
	},
	"reviewform.success": {
		en: "Thanks! Your review will appear once approved.",
		ar: "شكرًا لك! سيظهر تقييمك بعد الموافقة عليه.",
		fr: "Merci ! Votre avis apparaîtra une fois approuvé.",
	},
	"reviewform.submitting": { en: "Submitting…", ar: "جارٍ الإرسال…", fr: "Envoi en cours…" },

	// --- Real seller reviews (ReviewsHero.astro) ---
	"reviews.review0.name": { en: "Samah Salman", ar: "سماح سلمان", fr: "Samah Salman" },
	"reviews.review0.quote": {
		en: "Great experience actually with DropArabia. The team is professional, responsive, and truly understands the market. Everything was clear, well-organized, and delivered with attention to detail.",
		ar: "تجربة رائعة فعلاً مع دروب أرابيا. الفريق محترف وسريع الاستجابة ويفهم السوق فعلاً. كان كل شيء واضحًا ومنظمًا وتم تسليمه باهتمام كبير بالتفاصيل.",
		fr: "Vraiment une excellente expérience avec DropArabia. L'équipe est professionnelle, réactive et comprend parfaitement le marché. Tout était clair, bien organisé et livré avec un vrai souci du détail.",
	},
	"reviews.review1.name": { en: "Ahmad Ladiki", ar: "أحمد لاديكي", fr: "Ahmad Ladiki" },
	"reviews.review1.quote": {
		en: "A fantastic tool for product sourcing and fulfillment. Highly recommend for anyone serious about dropshipping.",
		ar: "أداة رائعة لتوريد المنتجات وتنفيذ الطلبات. أنصح بها بشدة لكل من يريد الجدية في الدروبشيبينغ.",
		fr: "Un outil fantastique pour le sourcing de produits et la logistique. Je le recommande vivement à quiconque prend le dropshipping au sérieux.",
	},
	"reviews.review2.name": { en: "Khodr", ar: "خضر", fr: "Khodr" },
	"reviews.review2.quote": {
		en: "The best platform to start launching your business with low risk.",
		ar: "أفضل منصة لبدء إطلاق عملك بمخاطرة منخفضة.",
		fr: "La meilleure plateforme pour lancer votre activité avec un risque faible.",
	},
	"reviews.trustpilot0.name": { en: "Karim Sabeh", ar: "كريم صبح", fr: "Karim Sabeh" },
	"reviews.trustpilot0.quote": {
		en: "I use it personally it is beginner friendly and you can make a living from it",
		ar: "أستخدمها شخصيًا، إنها سهلة للمبتدئين ويمكنك كسب عيشك منها",
		fr: "Je l'utilise personnellement, c'est accessible aux débutants et on peut en vivre",
	},
	"reviews.trustpilot1.name": { en: "MD Tech", ar: "إم دي تك", fr: "MD Tech" },
	"reviews.trustpilot1.quote": {
		en: "DropArabia, the Ultimate Roadmap for business beginners. It's a very successful system and provides professional courses and continuous feedback and support for students. High quality products, excellent storage and packaging and smooth money transactions.",
		ar: "دروب أرابيا هي خارطة الطريق المثالية للمبتدئين في الأعمال. نظام ناجح جدًا يوفر دورات احترافية وملاحظات ودعمًا مستمرًا للطلاب. منتجات عالية الجودة وتخزين وتغليف ممتازان ومعاملات مالية سلسة.",
		fr: "DropArabia, la feuille de route ultime pour les débutants en business. C'est un système très efficace, qui propose des formations professionnelles ainsi qu'un retour et un soutien continus pour les élèves. Des produits de grande qualité, un stockage et un emballage excellents et des transactions financières fluides.",
	},
	"reviews.trustpilot2.name": { en: "Tarek", ar: "طارق", fr: "Tarek" },
	"reviews.trustpilot2.quote": {
		en: "Smooth experience using this app. The platform is easy to use and order processing is simple. Definitely a useful app for anyone running a dropshipping business.",
		ar: "تجربة سلسة في استخدام هذا التطبيق. المنصة سهلة الاستخدام ومعالجة الطلبات بسيطة. تطبيق مفيد بالتأكيد لكل من يدير عمل دروبشيبينغ.",
		fr: "Une expérience fluide avec cette application. La plateforme est facile à utiliser et le traitement des commandes est simple. Une application vraiment utile pour quiconque gère une activité de dropshipping.",
	},

	// --- Privacy Policy ---
	"privacy.heading": { en: "Privacy Policy", ar: "سياسة الخصوصية", fr: "Politique de confidentialité" },
	"privacy.intro": {
		en: "Droparabia is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and how we keep it safe when you visit droparabia.com or register for our free live workshop.",
		ar: "تلتزم دروب أرابيا بحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه البيانات التي نجمعها، وكيفية استخدامها، وكيف نحافظ على أمانها عند زيارتك لموقع droparabia.com أو تسجيلك في ورشتنا المباشرة المجانية.",
		fr: "Droparabia s'engage à protéger vos informations personnelles. La présente politique de confidentialité explique quelles données nous collectons, comment nous les utilisons et comment nous les protégeons lorsque vous visitez droparabia.com ou vous inscrivez à notre atelier en direct gratuit.",
	},
	"privacy.section1.heading": { en: "1. Information We Collect", ar: "1. المعلومات التي نجمعها", fr: "1. Informations que nous collectons" },
	"privacy.section1.item0": {
		en: "Personal Data (name, email address, phone number)",
		ar: "بيانات شخصية (الاسم، البريد الإلكتروني، رقم الهاتف)",
		fr: "Données personnelles (nom, adresse e-mail, numéro de téléphone)",
	},
	"privacy.section1.item1": {
		en: "Usage Data (pages visited, time spent, links clicked, funnel stage)",
		ar: "بيانات الاستخدام (الصفحات التي تمت زيارتها، الوقت المستغرق، الروابط المنقور عليها، مرحلة رحلة العميل)",
		fr: "Données d'utilisation (pages visitées, temps passé, liens cliqués, étape du parcours)",
	},
	"privacy.section2.heading": { en: "2. How We Use Your Information", ar: "2. كيف نستخدم معلوماتك", fr: "2. Comment nous utilisons vos informations" },
	"privacy.section2.item0": {
		en: "To process your registration and provide access to our workshop and platform",
		ar: "لمعالجة تسجيلك وتوفير الوصول إلى ورشتنا ومنصتنا",
		fr: "Traiter votre inscription et vous donner accès à notre atelier et à notre plateforme",
	},
	"privacy.section2.item1": {
		en: "To communicate with you regarding your account, follow-ups, and updates",
		ar: "للتواصل معك بخصوص حسابك والمتابعات والتحديثات",
		fr: "Communiquer avec vous au sujet de votre compte, des suivis et des mises à jour",
	},
	"privacy.section2.item2": {
		en: "To improve our content, offers, and user experience",
		ar: "لتحسين محتوانا وعروضنا وتجربة المستخدم",
		fr: "Améliorer notre contenu, nos offres et l'expérience utilisateur",
	},
	"privacy.section2.item3": {
		en: "To qualify leads and organize them based on their funnel journey",
		ar: "لتصنيف العملاء المحتملين وتنظيمهم بناءً على رحلتهم",
		fr: "Qualifier les prospects et les organiser selon leur parcours",
	},
	"privacy.section2.item4": {
		en: "For legal compliance and security purposes",
		ar: "لأغراض الامتثال القانوني والأمان",
		fr: "Répondre à des obligations légales et à des besoins de sécurité",
	},
	"privacy.section3.heading": { en: "3. Cookies and Tracking", ar: "3. ملفات تعريف الارتباط والتتبع", fr: "3. Cookies et suivi" },
	"privacy.section3.paragraph": {
		en: "We use cookies and third-party analytics tools including Google Analytics and Google Tag Manager to understand user behavior and improve site performance.",
		ar: "نستخدم ملفات تعريف الارتباط وأدوات تحليل من جهات خارجية بما فيها Google Analytics وGoogle Tag Manager لفهم سلوك المستخدم وتحسين أداء الموقع.",
		fr: "Nous utilisons des cookies et des outils d'analyse tiers, dont Google Analytics et Google Tag Manager, pour comprendre le comportement des utilisateurs et améliorer les performances du site.",
	},
	"privacy.section4.heading": { en: "4. Data Sharing", ar: "4. مشاركة البيانات", fr: "4. Partage des données" },
	"privacy.section4.paragraph": {
		en: "We do not sell or rent your personal data. We only share data with trusted third-party services (Brevo, Google Sheets, Calendly) when necessary to operate our platform.",
		ar: "نحن لا نبيع أو نؤجر بياناتك الشخصية. نشارك البيانات فقط مع خدمات موثوقة من جهات خارجية (Brevo وGoogle Sheets وCalendly) عند الضرورة لتشغيل منصتنا.",
		fr: "Nous ne vendons ni ne louons vos données personnelles. Nous ne les partageons qu'avec des services tiers de confiance (Brevo, Google Sheets, Calendly) lorsque cela est nécessaire au fonctionnement de notre plateforme.",
	},
	"privacy.section5.heading": { en: "5. Data Security", ar: "5. أمان البيانات", fr: "5. Sécurité des données" },
	"privacy.section5.paragraph": {
		en: "We use encryption and secure platforms to protect your data. While no system is 100% secure, we do our best to safeguard your information.",
		ar: "نستخدم التشفير ومنصات آمنة لحماية بياناتك. ورغم أنه لا يوجد نظام آمن بنسبة 100%، نبذل قصارى جهدنا لحماية معلوماتك.",
		fr: "Nous utilisons le chiffrement et des plateformes sécurisées pour protéger vos données. Bien qu'aucun système ne soit sûr à 100 %, nous faisons tout notre possible pour protéger vos informations.",
	},
	"privacy.section6.heading": { en: "6. Your Rights", ar: "6. حقوقك", fr: "6. Vos droits" },
	"privacy.section6.paragraph": {
		en: 'You can request to access, correct, or delete your data at any time by reaching out to us on Instagram at <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.',
		ar: 'يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها في أي وقت من خلال التواصل معنا على إنستغرام على <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.',
		fr: `Vous pouvez demander à consulter, corriger ou supprimer vos données à tout moment en nous contactant sur Instagram à l'adresse <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.`,
	},
	"privacy.section7.heading": { en: "7. Policy Updates", ar: "7. تحديثات السياسة", fr: "7. Mises à jour de la politique" },
	"privacy.section7.paragraph1": {
		en: "This Privacy Policy may change from time to time. The most recent version will always be posted on this page.",
		ar: "قد تتغير سياسة الخصوصية هذه من وقت لآخر. سيتم دائمًا نشر أحدث نسخة على هذه الصفحة.",
		fr: "Cette politique de confidentialité peut évoluer de temps à autre. La version la plus récente sera toujours publiée sur cette page.",
	},
	"privacy.section7.paragraph2": {
		en: 'If you have questions, please reach out to us on Instagram at <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.',
		ar: 'إذا كانت لديك أسئلة، يرجى التواصل معنا على إنستغرام على <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.',
		fr: `Si vous avez des questions, contactez-nous sur Instagram à l'adresse <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.`,
	},

	// --- Terms & Conditions ---
	"terms.heading": { en: "Terms & Conditions", ar: "الشروط والأحكام", fr: "Conditions générales" },
	"terms.intro": {
		en: "By accessing or using droparabia.com, you agree to the following terms and conditions:",
		ar: "من خلال الوصول إلى droparabia.com أو استخدامه، فإنك توافق على الشروط والأحكام التالية:",
		fr: "En accédant à droparabia.com ou en l'utilisant, vous acceptez les conditions générales suivantes :",
	},
	"terms.section1.heading": { en: "1. Platform Access", ar: "1. الوصول إلى المنصة", fr: "1. Accès à la plateforme" },
	"terms.section1.paragraph": {
		en: "Upon successful registration, you will receive access to Droparabia's platform and resources for personal, non-transferable use. Sharing your access credentials or distributing any platform content is strictly prohibited.",
		ar: "بعد إتمام التسجيل بنجاح، ستحصل على وصول إلى منصة دروب أرابيا ومواردها للاستخدام الشخصي غير القابل للتحويل. يُمنع منعًا باتًا مشاركة بيانات الدخول الخاصة بك أو توزيع أي محتوى من المنصة.",
		fr: "Une fois votre inscription validée, vous recevrez un accès à la plateforme et aux ressources de Droparabia, pour un usage personnel et non transférable. Le partage de vos identifiants d'accès ou la distribution de tout contenu de la plateforme sont strictement interdits.",
	},
	"terms.section2.heading": { en: "2. Refund Policy", ar: "2. سياسة الاسترداد", fr: "2. Politique de remboursement" },
	"terms.section2.paragraph": {
		en: "We stand behind the value of our platform. If you have actively used Droparabia for 90 days and have not seen any results, you are eligible to request a full refund. Refund requests must be submitted within 90 days of your subscription date along with proof of platform usage. Refunds will not be granted for unused accounts or without demonstrated effort.",
		ar: "نحن واثقون بقيمة منصتنا. إذا استخدمت دروب أرابيا بفعالية لمدة 90 يومًا ولم تشهد أي نتائج، يحق لك طلب استرداد كامل. يجب تقديم طلبات الاسترداد خلال 90 يومًا من تاريخ اشتراكك مع تقديم إثبات لاستخدام المنصة. لن يُمنح الاسترداد للحسابات غير المستخدمة أو دون إثبات بذل جهد.",
		fr: "Nous sommes convaincus de la valeur de notre plateforme. Si vous avez utilisé activement Droparabia pendant 90 jours sans constater le moindre résultat, vous pouvez demander un remboursement intégral. Les demandes de remboursement doivent être soumises dans les 90 jours suivant la date de votre abonnement, accompagnées d'une preuve d'utilisation de la plateforme. Aucun remboursement ne sera accordé pour les comptes inutilisés ou en l'absence d'efforts démontrés.",
	},
	"terms.section3.heading": { en: "3. Intellectual Property", ar: "3. الملكية الفكرية", fr: "3. Propriété intellectuelle" },
	"terms.section3.paragraph": {
		en: "All platform materials on droparabia.com including training resources, guides, and tools are protected by copyright and intellectual property laws. You may not reproduce, republish, resell, or distribute any part of this content. Product listings sourced through Droparabia are provided for selling purposes only and remain the property of their respective suppliers.",
		ar: "جميع مواد المنصة على droparabia.com، بما فيها الموارد التدريبية والأدلة والأدوات، محمية بموجب قوانين حقوق النشر والملكية الفكرية. لا يجوز نسخ أو إعادة نشر أو إعادة بيع أو توزيع أي جزء من هذا المحتوى. قوائم المنتجات المتوفرة عبر دروب أرابيا مُقدَّمة لأغراض البيع فقط وتبقى ملكًا لمورديها.",
		fr: "L'ensemble des contenus de la plateforme droparabia.com, y compris les ressources de formation, les guides et les outils, est protégé par le droit d'auteur et les lois sur la propriété intellectuelle. Vous ne pouvez ni reproduire, ni republier, ni revendre, ni distribuer une quelconque partie de ce contenu. Les fiches produits proposées via Droparabia le sont uniquement à des fins de vente et restent la propriété de leurs fournisseurs respectifs.",
	},
	"terms.section4.heading": { en: "4. Account Suspension", ar: "4. تعليق الحساب", fr: "4. Suspension de compte" },
	"terms.section4.paragraph": {
		en: "We reserve the right to suspend or permanently revoke access to the platform, without refund, if any terms are violated — including but not limited to content misuse, inappropriate behavior, or account sharing.",
		ar: "نحتفظ بالحق في تعليق أو إلغاء الوصول إلى المنصة بشكل دائم، دون استرداد، في حال مخالفة أي من الشروط — بما في ذلك على سبيل المثال لا الحصر إساءة استخدام المحتوى أو السلوك غير اللائق أو مشاركة الحساب.",
		fr: "Nous nous réservons le droit de suspendre ou de révoquer définitivement l'accès à la plateforme, sans remboursement, en cas de violation de l'une de ces conditions — y compris, sans s'y limiter, l'utilisation abusive du contenu, un comportement inapproprié ou le partage de compte.",
	},
	"terms.contact": {
		en: 'For any questions or concerns, please reach out to us on Instagram at <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.',
		ar: 'لأي أسئلة أو استفسارات، يرجى التواصل معنا على إنستغرام على <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.',
		fr: `Pour toute question ou préoccupation, contactez-nous sur Instagram à l'adresse <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.`,
	},

	// Feature-tab copy for Branding, Product Request and Leader Board. These three tools
	// reuse their perk wording verbatim for the tabs, so these entries mirror the perk keys
	// above — keep the two in sync if either side changes.
	"tool.branding.feature0.title": {
		en: "Create your own unique brand",
		ar: "أنشئ علامتك التجارية المميزة",
		fr: "Créez votre propre marque unique",
	},
	"tool.branding.feature0.description": {
		en: "Create your own brand identity instead of looking like a cheap dropshipping store",
		ar: "أنشئ هوية علامتك التجارية الخاصة بدل أن يبدو متجرك كمتجر دروبشيبينغ رخيص",
		fr: "Créez votre propre identité de marque au lieu de ressembler à une boutique de dropshipping bas de gamme",
	},
	"tool.branding.feature1.title": {
		en: "Get distinguished from your competitors",
		ar: "تميّز عن منافسيك",
		fr: "Démarquez-vous de vos concurrents",
	},
	"tool.branding.feature1.description": {
		en: "Stand out from the competition and become a recognizable brand right on the spot",
		ar: "تميّز عن المنافسين وكن علامة تجارية يتعرّف عليها الناس من أول نظرة",
		fr: "Démarquez-vous de la concurrence et devenez une marque reconnaissable dès le premier regard",
	},
	"tool.branding.feature2.title": {
		en: "Print on-demand only per sold product",
		ar: "طباعة عند الطلب لكل منتج يُباع فقط",
		fr: "Impression à la demande, uniquement par produit vendu",
	},
	"tool.branding.feature2.description": {
		en: "No more burning hundreds on private labeling lots of products at once — only print on each product before you send it to your customers",
		ar: "لا مزيد من إنفاق المئات على وضع علامتك على كميات كبيرة دفعة واحدة — اطبع على كل منتج فقط قبل إرساله إلى عملائك",
		fr: "Fini les centaines d'euros dépensés à personnaliser des lots entiers — imprimez sur chaque produit juste avant de l'expédier à vos clients",
	},
	"tool.product-request.feature0.title": {
		en: "No dealing with suppliers yourself",
		ar: "لا تعامل مع الموردين بنفسك",
		fr: "Aucune négociation avec les fournisseurs",
	},
	"tool.product-request.feature0.description": {
		en: "Just give us a screenshot of the product you want to ship and let Droparabia handle the rest",
		ar: "فقط أرسل لنا لقطة شاشة للمنتج الذي تريد شحنه ودع دروب أرابيا يتولّى الباقي",
		fr: "Envoyez-nous simplement une capture d'écran du produit à expédier et laissez Droparabia s'occuper du reste",
	},
	"tool.product-request.feature1.title": {
		en: "No huge shipment fees or risk of scam",
		ar: "لا رسوم شحن باهظة أو خطر احتيال",
		fr: "Aucuns frais d'expédition élevés ni risque d'arnaque",
	},
	"tool.product-request.feature1.description": {
		en: "Free yourself from shipping fees and the risk of getting scammed",
		ar: "تخلّص من رسوم الشحن ومن خطر التعرّض للاحتيال",
		fr: "Libérez-vous des frais d'expédition et du risque de vous faire arnaquer",
	},
	"tool.product-request.feature2.title": {
		en: "Research and supplying done without extra fees",
		ar: "البحث والتوريد يتمّان دون رسوم إضافية",
		fr: "Recherche et approvisionnement sans frais supplémentaires",
	},
	"tool.product-request.feature2.description": {
		en: "Droparabia will source these products for you without any additional fees",
		ar: "سيوفّر لك دروب أرابيا هذه المنتجات دون أي رسوم إضافية",
		fr: "Droparabia se procure ces produits pour vous, sans frais supplémentaires",
	},
	"tool.leader-board.feature0.title": {
		en: "Grow your business alongside other sellers in the community",
		ar: "نمِّ عملك جنبًا إلى جنب مع بائعين آخرين في المجتمع",
		fr: "Développez votre activité aux côtés des autres vendeurs de la communauté",
	},
	"tool.leader-board.feature0.description": {
		en: "The best way to grow your business is to do it alongside ambitious people who want the same thing as you",
		ar: "أفضل طريقة لتنمية مشروعك هي أن تفعل ذلك إلى جانب أشخاص طموحين يريدون ما تريده",
		fr: "La meilleure façon de développer votre activité, c'est de le faire aux côtés de personnes ambitieuses qui visent la même chose que vous",
	},
	"tool.leader-board.feature1.title": {
		en: "Participate in events and giveaways",
		ar: "شارك في الفعاليات والهدايا",
		fr: "Participez aux événements et aux jeux-concours",
	},
	"tool.leader-board.feature1.description": {
		en: "Which will allow you to gain more knowledge and earn interesting rewards",
		ar: "ما يتيح لك اكتساب المزيد من المعرفة والحصول على مكافآت مثيرة",
		fr: "Ce qui vous permettra d'acquérir plus de connaissances et de gagner des récompenses intéressantes",
	},
	"tool.leader-board.feature2.title": {
		en: "Affiliate program for top performing users",
		ar: "برنامج تسويق بالعمولة لأفضل المستخدمين أداءً",
		fr: "Un programme d'affiliation pour les utilisateurs les plus performants",
	},
	"tool.leader-board.feature2.description": {
		en: "The top 5% highest sellers will have a chance of joining the affiliate program to assist in growing the community",
		ar: "أعلى 5% من البائعين ستتاح لهم فرصة الانضمام إلى برنامج الشراكة للمساعدة في تنمية المجتمع",
		fr: "Les 5% de meilleurs vendeurs auront la possibilité de rejoindre le programme d'affiliation pour contribuer à faire grandir la communauté",
	},
};
