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
		en: `<span class="block text-2xl leading-[1.3] sm:text-3xl md:text-[2.5rem] rtl:leading-[1.85]">Everything you need to build a</span><span class="hero-gradient-text block text-3xl leading-[1.3] sm:text-4xl md:text-[3.3rem] md:whitespace-nowrap rtl:-mt-[0.38em] rtl:leading-[1.85]">successful &amp; high-earning</span><span class="block text-2xl leading-[1.3] sm:text-3xl md:text-[2.5rem] rtl:leading-[1.85]">store in one place</span>`,
		ar: `<span class="block text-2xl leading-[1.3] sm:text-3xl md:text-[2.5rem] rtl:leading-[1.85]">كل ما تحتاجه لبناء متجر</span><span class="hero-gradient-text block text-3xl leading-[1.3] sm:text-4xl md:text-[3.3rem] md:whitespace-nowrap rtl:-mt-[0.38em] rtl:leading-[1.85]">ناجح وعالي الربح</span><span class="block text-2xl leading-[1.3] sm:text-3xl md:text-[2.5rem] rtl:leading-[1.85]">في مكان واحد</span>`,
		fr: `<span class="block text-2xl leading-[1.3] sm:text-3xl md:text-[2.5rem] rtl:leading-[1.85]">Tout ce qu'il vous faut pour créer une boutique</span><span class="hero-gradient-text block text-3xl leading-[1.3] sm:text-4xl md:text-[3.3rem] md:whitespace-nowrap rtl:-mt-[0.38em] rtl:leading-[1.85]">performante et très rentable</span><span class="block text-2xl leading-[1.3] sm:text-3xl md:text-[2.5rem] rtl:leading-[1.85]">au même endroit</span>`,
	},
	"hero.subheadline": {
		en: `Droparabia helps you find high-selling products from all niches and deliver them to your customer's doorstep without spending a cent on inventory, shipping or third-party services`,
		ar: `يساعدك دروب أرابيا على إيجاد منتجات عالية المبيعات من جميع المجالات وتوصيلها إلى باب عميلك دون إنفاق أي مبلغ على المخزون أو الشحن أو خدمات الطرف الثالث`,
		fr: `Droparabia vous aide à trouver des produits à fort volume de ventes dans toutes les niches et à les livrer directement chez vos clients, sans dépenser un centime en stock, en livraison ou en services tiers`,
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

	"catalog.heading": {
		en: "No more spending hours searching for a product to sell",
		ar: "لا مزيد من قضاء الساعات بحثًا عن منتج لبيعه",
		fr: "Fini les heures passées à chercher un produit à vendre",
	},
	"catalog.subheading": {
		en: 'Choose your <span class="text-primary">winning product</span> from a catalog of proven high-sellers',
		ar: 'اختر <span class="text-primary">منتجك الرابح</span> من كتالوج من الأكثر مبيعًا والمثبت نجاحها',
		fr: 'Choisissez votre <span class="text-primary">produit gagnant</span> dans un catalogue de best-sellers éprouvés',
	},

	"howitworks.heading": {
		en: 'How <span class="text-primary">Droparabia</span> works',
		ar: 'كيف يعمل <span class="text-primary">دروب أرابيا</span>',
		fr: `Comment fonctionne <span class="text-primary">Droparabia</span>`,
	},
	"howitworks.step0": {
		en: "Integrate your Shopify into Droparabia, which allows you to add & sell any product directly on your website",
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
		en: "Search a huge catalog of winning products",
		ar: "ابحث في كتالوج ضخم من المنتجات الرابحة",
		fr: "Explorez un immense catalogue de produits gagnants",
	},
	"tool.ai-winning-products.tagline": {
		en: "Let AI surface today's best-selling picks",
		ar: "دع الذكاء الاصطناعي يبرز الأكثر مبيعًا اليوم",
		fr: "Laissez l'IA révéler les meilleures ventes du jour",
	},
	"tool.ai-studio.tagline": {
		en: "Generate product creatives in seconds",
		ar: "أنشئ تصاميم منتجاتك في ثوانٍ",
		fr: "Générez vos visuels produits en quelques secondes",
	},
	"tool.branding.tagline": {
		en: "Build a store identity buyers trust",
		ar: "ابنِ هوية متجر يثق بها المشترون",
		fr: "Construisez une identité de boutique qui inspire confiance",
	},
	"tool.product-request.tagline": {
		en: "Ask us to source anything you need",
		ar: "اطلب منا توفير أي منتج تحتاجه",
		fr: "Demandez-nous de sourcer tout ce dont vous avez besoin",
	},
	"tool.leader-board.tagline": {
		en: "See how you rank against top sellers",
		ar: "اطّلع على ترتيبك مقارنة بأفضل البائعين",
		fr: "Voyez votre classement face aux meilleurs vendeurs",
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
		en: "Our system is here to save you from burning your budget on meaningless trials and errors that can be easily avoided through our unique infrastructure.",
		ar: "نظامنا هنا لتوفير ميزانيتك من محاولات وأخطاء لا طائل منها يمكن تفاديها بسهولة من خلال بنيتنا التحتية الفريدة.",
		fr: "Notre système est là pour vous éviter de brûler votre budget en essais et erreurs inutiles, facilement évitables grâce à notre infrastructure unique.",
	},

	"about.operation.heading": {
		en: 'How does it <span class="text-primary">operate</span>',
		ar: 'كيف <span class="text-primary">يعمل</span>',
		fr: `Comment ça <span class="text-primary">fonctionne</span>`,
	},
	"about.operation.paragraph": {
		en: "We have our own unique logistic network in Deir Qoubel, Mount Lebanon Governorate and our own infrastructure that allows us to deliver safely all over Lebanon, as well as our own supplier partners locally and from China to make sure we're reliably and swiftly sourcing you only the highest quality of products at the best price possible.",
		ar: "لدينا شبكة لوجستية خاصة بنا في دير قوبل، محافظة جبل لبنان، وبنية تحتية تتيح لنا التوصيل الآمن في جميع أنحاء لبنان، إضافة إلى شركاء موردين محليين ومن الصين، لضمان توفير منتجات عالية الجودة بأفضل الأسعار وبسرعة وموثوقية.",
		fr: "Nous disposons de notre propre réseau logistique à Deir Qoubel, dans le gouvernorat du Mont-Liban, et de notre propre infrastructure qui nous permet de livrer en toute sécurité dans tout le Liban, ainsi que de nos propres fournisseurs partenaires, locaux et en Chine, afin de vous fournir rapidement et de manière fiable uniquement des produits de la plus haute qualité au meilleur prix possible.",
	},

	"about.founder.label": { en: "Founder of Droparabia", ar: "مؤسس دروب أرابيا", fr: "Fondateur de Droparabia" },
	"about.founder.bio": {
		en: "Majd Abdulsalam, a digital marketing expert and 6-figure entrepreneur, created Droparabia, shaped from all the obstacles, trials, and errors during his journey building his own e-com brands, now using that expertise to help others build successful e-com and dropshipping stores.",
		ar: "مجد عبدالسلام، خبير تسويق رقمي ورائد أعمال بأرباح ست أرقام، أسّس دروب أرابيا انطلاقًا من كل العقبات والتجارب والأخطاء التي واجهها خلال بناء علاماته التجارية الإلكترونية، ويستخدم الآن تلك الخبرة لمساعدة الآخرين على بناء متاجر إلكترونية ودروبشيبينغ ناجحة.",
		fr: "Majd Abdulsalam, expert en marketing digital et entrepreneur à 6 chiffres, a créé Droparabia à partir de tous les obstacles, essais et erreurs rencontrés en construisant ses propres marques e-commerce, et met aujourd'hui cette expertise au service des autres pour les aider à bâtir des boutiques e-commerce et dropshipping performantes.",
	},

	"faq.q0": { en: "What is Droparabia?", ar: "ما هو دروب أرابيا؟", fr: "Qu'est-ce que Droparabia ?" },
	"faq.a0": {
		en: "Droparabia is the first dropshipping platform in Lebanon, and very soon in the MENA region, inspired by CJ Dropshipping and DSers but built for the Lebanese and MENA market. It was built to solve the common problems that cause most e-com owners and dropshippers to fail in their businesses.",
		ar: "دروب أرابيا هي أول منصة دروبشيبينغ في لبنان، وقريبًا في منطقة الشرق الأوسط وشمال أفريقيا، مستوحاة من CJ Dropshipping وDSers لكنها مبنية للسوق اللبناني والعربي. صُممت لحل المشاكل الشائعة التي تجعل معظم أصحاب المتاجر الإلكترونية ودروبشيبرز يفشلون في أعمالهم.",
		fr: "Droparabia est la première plateforme de dropshipping au Liban, et très bientôt dans la région MENA, inspirée de CJ Dropshipping et DSers mais conçue pour le marché libanais et MENA. Elle a été créée pour résoudre les problèmes courants qui font échouer la plupart des propriétaires de boutiques en ligne et des dropshippers.",
	},
	"faq.q1": { en: "What does Droparabia bring to the table?", ar: "ماذا يقدّم دروب أرابيا؟", fr: "Qu'apporte Droparabia ?" },
	"faq.a1": {
		en: "Droparabia removes all the annoying, money-burning, and time-consuming aspects found in traditional e-commerce and old dropshipping, including purchasing, owning, and managing inventory; the risk of purchasing products in bulk that might not sell; finding reliable third party services such as delivery companies, packaging companies, and warehouses; dealing with risky suppliers and the headache of negotiations; and requiring huge upfront investments, like traditional e-commerce's minimum of $3,000.",
		ar: "يزيل دروب أرابيا كل الجوانب المزعجة والمكلفة والمستهلكة للوقت في التجارة الإلكترونية التقليدية والدروبشيبينغ القديم، بما فيها شراء وامتلاك وإدارة المخزون؛ خطر شراء منتجات بالجملة قد لا تُباع؛ إيجاد خدمات موثوقة كشركات التوصيل والتغليف والمستودعات؛ التعامل مع موردين غير موثوقين وصداع التفاوض؛ والحاجة لاستثمارات ضخمة مقدمًا كالحد الأدنى 3000 دولار في التجارة التقليدية.",
		fr: "Droparabia supprime tous les aspects pénibles, coûteux et chronophages du e-commerce traditionnel et de l'ancien dropshipping : l'achat, la possession et la gestion des stocks ; le risque d'acheter en gros des produits qui ne se vendent pas ; la recherche de prestataires fiables comme les sociétés de livraison, d'emballage et les entrepôts ; les rapports avec des fournisseurs à risque et les casse-têtes des négociations ; et la nécessité d'investissements initiaux importants, comme le minimum de 3 000 $ du e-commerce traditionnel.",
	},
	"faq.q2": { en: "Who is Droparabia for?", ar: "لمن دروب أرابيا؟", fr: "À qui s'adresse Droparabia ?" },
	"faq.a2": {
		en: "Droparabia is for e-commerce brands, dropshippers, or anyone looking to start their own online business, regardless of their experience in digital marketing, education level, or technical skills, who wants to invest their time and budget directly rather than becoming a victim of beginner mistakes like finding the right product to sell, managing inventory, or handling delivery.",
		ar: "دروب أرابيا مخصص للعلامات التجارية الإلكترونية والدروبشيبرز أو أي شخص يريد بدء عمله الإلكتروني الخاص، بغض النظر عن خبرته في التسويق الرقمي أو مستواه التعليمي أو مهاراته التقنية، ويريد استثمار وقته وميزانيته مباشرة بدلاً من الوقوع ضحية أخطاء المبتدئين كإيجاد المنتج المناسب أو إدارة المخزون أو التوصيل.",
		fr: "Droparabia s'adresse aux marques e-commerce, aux dropshippers et à toute personne souhaitant lancer sa propre activité en ligne, quels que soient son expérience en marketing digital, son niveau d'études ou ses compétences techniques, et qui veut investir son temps et son budget directement plutôt que de tomber dans les erreurs de débutant : trouver le bon produit à vendre, gérer les stocks ou assurer la livraison.",
	},
	"faq.q3": {
		en: "Is Droparabia an easy way to make money?",
		ar: "هل دروب أرابيا طريقة سهلة لكسب المال؟",
		fr: "Droparabia est-il un moyen facile de gagner de l'argent ?",
	},
	"faq.a3": {
		en: "Absolutely not. Droparabia is for people who are serious about building a successful online business and are ready to put in the effort required, even if they fail at first. Droparabia makes it easier for you to create your own business; whether it succeeds or fails depends on your effort.",
		ar: "بالتأكيد لا. دروب أرابيا مخصص للأشخاص الجادين في بناء عمل إلكتروني ناجح والمستعدين لبذل الجهد المطلوب، حتى لو فشلوا في البداية. يسهّل دروب أرابيا عليك إنشاء عملك الخاص؛ أما نجاحه أو فشله فيعتمد على جهدك.",
		fr: "Absolument pas. Droparabia s'adresse aux personnes sérieuses, qui veulent bâtir une activité en ligne prospère et sont prêtes à fournir les efforts nécessaires, même en cas d'échec au départ. Droparabia vous facilite la création de votre activité ; sa réussite ou son échec dépend de vos efforts.",
	},
	"faq.q4": {
		en: "Isn't it better to just start traditional e-commerce?",
		ar: "أليس من الأفضل البدء بالتجارة الإلكترونية التقليدية؟",
		fr: "Ne vaut-il pas mieux se lancer simplement dans le e-commerce traditionnel ?",
	},
	"faq.a4": {
		en: "Traditional e-commerce means buying hundreds of products upfront, storing them, and hoping they sell. If they don't, you're stuck with dead inventory and wasted money. Dropshipping with Droparabia lets you test products with zero inventory risk. Once you find winners, you can then scale, or even move to traditional e-commerce, if you want. But why bet your savings when you can test first?",
		ar: "التجارة الإلكترونية التقليدية تعني شراء مئات المنتجات مقدمًا وتخزينها والأمل أن تُباع. إن لم تُبع، تبقى عالقًا بمخزون ميت ومال ضائع. الدروبشيبينغ مع دروب أرابيا يتيح لك اختبار المنتجات دون أي خطر مخزون. وبمجرد أن تجد المنتجات الرابحة، يمكنك التوسع أو حتى الانتقال إلى التجارة التقليدية إن أردت. فلماذا تخاطر بمدخراتك بينما يمكنك الاختبار أولاً؟",
		fr: "Le e-commerce traditionnel implique d'acheter des centaines de produits à l'avance, de les stocker et d'espérer qu'ils se vendent. Si ce n'est pas le cas, vous vous retrouvez avec des stocks morts et de l'argent perdu. Le dropshipping avec Droparabia vous permet de tester des produits sans aucun risque de stock. Une fois vos produits gagnants trouvés, vous pouvez passer à l'échelle, ou même basculer vers le e-commerce traditionnel si vous le souhaitez. Mais pourquoi risquer vos économies quand vous pouvez d'abord tester ?",
	},
	"faq.q5": {
		en: "I don't have marketing experience, or I don't know how to manage social media",
		ar: "ليست لدي خبرة تسويقية، أو لا أعرف كيف أدير وسائل التواصل الاجتماعي",
		fr: "Je n'ai pas d'expérience en marketing, ou je ne sais pas gérer les réseaux sociaux",
	},
	"faq.a5": {
		en: "That's exactly why we offer a dedicated support community for all Droparabia users, where they can access tons of free courses and prerecorded tutorials, plus a team of experienced advisors ready to guide you so you never have to learn anything from scratch!",
		ar: "لهذا السبب بالضبط نوفر مجتمع دعم مخصص لجميع مستخدمي دروب أرابيا، حيث يمكنهم الوصول إلى الكثير من الدورات المجانية والدروس المسجّلة، إضافة إلى فريق من المستشارين ذوي الخبرة الجاهزين لمرافقتك خطوة بخطوة حتى لا تضطر لتعلّم أي شيء من الصفر!",
		fr: "C'est exactement pour cela que nous offrons une communauté de soutien dédiée à tous les utilisateurs de Droparabia, où ils accèdent à une multitude de formations gratuites et de tutoriels préenregistrés, ainsi qu'à une équipe de conseillers expérimentés prêts à les accompagner pas à pas : vous n'aurez jamais à tout apprendre de zéro !",
	},
	"faq.q6": {
		en: "Do I get a refund if Droparabia fails to deliver on its promises?",
		ar: "هل أحصل على استرداد إذا لم يفِ دروب أرابيا بوعوده؟",
		fr: "Suis-je remboursé si Droparabia ne tient pas ses promesses ?",
	},
	"faq.a6": {
		en: "We are confident in our platform and its capabilities in helping others start and grow their businesses, which is why we have a full refund policy, plus compensation for the time and money lost using this platform, if the user followed all our instructions and made full use of Droparabia's features (with proof provided) but made no sales whatsoever within 90 days.",
		ar: "نحن واثقون من منصتنا وقدرتها على مساعدة الآخرين على بدء وتنمية أعمالهم، ولهذا لدينا سياسة استرداد كاملة، إضافة إلى تعويض عن الوقت والمال المفقودين باستخدام هذه المنصة، إذا اتبع المستخدم كل تعليماتنا واستخدم ميزات دروب أرابيا بالكامل (مع تقديم إثبات) لكنه لم يحقق أي مبيعات خلال 90 يومًا.",
		fr: "Nous avons confiance en notre plateforme et en sa capacité à aider chacun à lancer et développer son activité, c'est pourquoi nous appliquons une politique de remboursement intégral, assortie d'une compensation pour le temps et l'argent perdus sur la plateforme, si l'utilisateur a suivi toutes nos instructions et pleinement exploité les fonctionnalités de Droparabia (preuves à l'appui) sans réaliser la moindre vente en 90 jours.",
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
		en: "Get access to this powerful system to build the highest earning store alongside +700 sellers",
		ar: "احصل على هذا النظام القوي لبناء أعلى متجر ربحًا إلى جانب أكثر من 700 بائع",
		fr: "Accédez à ce système puissant pour bâtir la boutique la plus rentable aux côtés de plus de 700 vendeurs",
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
	"hero.niche3": { en: "Car Care", ar: "العناية بالسيارات", fr: "Entretien auto" },
	"hero.niche4": { en: "Pets", ar: "الحيوانات الأليفة", fr: "Animaux" },
	"hero.niche5": { en: "Sporting Goods", ar: "المستلزمات الرياضية", fr: "Articles de sport" },

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
