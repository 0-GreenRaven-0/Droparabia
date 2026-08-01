// Central EN/AR string table for the client-side language toggle. Any element carrying
// data-i18n="key" gets its textContent swapped to translations[key][lang] whenever the
// language changes (see the applyTranslations script wired up in Layout.astro) — this only
// covers text, not layout direction (that's handled separately via the `dir` attribute set
// in Header.astro's setLang()).
export const translations: Record<string, { en: string; ar: string }> = {
	"nav.tools": { en: "Tools", ar: "الأدوات" },
	"nav.resources": { en: "Resources", ar: "الموارد" },
	"nav.reviews": { en: "Reviews", ar: "التقييمات" },
	"nav.contact": { en: "Contact", ar: "تواصل معنا" },
	"nav.dropvault": { en: "Dropvault Community", ar: "مجتمع دروب فولت" },
	"nav.login": { en: "Login", ar: "تسجيل الدخول" },

	"hero.headline": {
		en: 'Build a <span class="hero-gradient-text whitespace-nowrap">high-earning</span> dropshipping business with ease',
		ar: 'ابنِ مشروع دروبشيبينغ <span class="hero-gradient-text whitespace-nowrap">عالي الربح</span> بكل سهولة',
	},
	"hero.subheadline": {
		en: "Find winning products from multiple niches and let Droparabia deliver them to your customer's doorstep!",
		ar: "اعثر على منتجات رابحة من عدة مجالات ودع دروب أرابيا يوصلها إلى باب عميلك!",
	},

	"cta.getStarted": { en: "Get Started", ar: "ابدأ الآن" },
	"cta.talkToUs": { en: "Talk to Us", ar: "تواصل معنا" },

	"footer.cta.heading": {
		en: "Kickstart your high-earning online store today!",
		ar: "ابدأ متجرك الإلكتروني عالي الربح اليوم!",
	},
	"footer.col.tools": { en: "Tools", ar: "الأدوات" },
	"footer.col.resources": { en: "Resources", ar: "الموارد" },
	"footer.col.company": { en: "Company", ar: "الشركة" },
	"footer.col.askAi": { en: "Ask AI about us", ar: "اسأل الذكاء الاصطناعي عنا" },
	"footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
	"footer.terms": { en: "Terms of Service", ar: "الشروط والأحكام" },

	"majdgbt.heading": { en: "Meet MajdGBT", ar: "تعرف على MajdGBT" },
	"majdgbt.subtext": {
		en: "Our own AI model trained on real-time knowledge and experience, made specifically to help you build your e-commerce business.",
		ar: "نموذج الذكاء الاصطناعي الخاص بنا، مدرّب على معرفة وخبرة لحظية، صُمم خصيصًا لمساعدتك على بناء متجرك الإلكتروني.",
	},

	"social.stat0": { en: "generated in revenue by all sellers", ar: "من الإيرادات حققها كل البائعين" },
	"social.stat1": { en: "average store monthly revenue", ar: "متوسط الإيراد الشهري للمتجر" },
	"social.stat2": { en: "sellers and brands owners", ar: "بائع وصاحب علامة تجارية" },
	"social.stat3": { en: "Certified Shopify Partner", ar: "شريك معتمد لدى Shopify" },

	"howitworks.heading": {
		en: 'How <span class="text-primary">Droparabia</span> works',
		ar: 'كيف يعمل <span class="text-primary">دروب أرابيا</span>',
	},
	"howitworks.step0": {
		en: "Integrate your Shopify into Droparabia, which allows you to add & sell any product directly on your website",
		ar: "اربط متجر Shopify الخاص بك بدروب أرابيا، ليتيح لك إضافة وبيع أي منتج مباشرة على موقعك",
	},
	"howitworks.step1": {
		en: "Droparabia keeps track of stock and inventory for every product so you're not managing any inventory",
		ar: "يتابع دروب أرابيا المخزون لكل منتج بحيث لا تُدير أي مخزون بنفسك",
	},
	"howitworks.step2": {
		en: "Our system will handle packaging and order delivery every time a customer orders from your website",
		ar: "يتولى نظامنا التغليف وتوصيل الطلب في كل مرة يطلب فيها عميل من موقعك",
	},
	"howitworks.step3": {
		en: "Droparabia charges per sold item only so you only ever pay for what actually sells",
		ar: "يتقاضى دروب أرابيا رسومًا فقط على كل قطعة تُباع، فأنت تدفع فقط مقابل ما يُباع فعليًا",
	},

	"why.heading": {
		en: 'Why Droparabia<span class="block text-primary">beats Traditional E-commerce &amp; Old Dropshipping</span>',
		ar: 'لماذا دروب أرابيا<span class="block text-primary">يتفوق على التجارة الإلكترونية التقليدية والدروبشيبينغ القديم</span>',
	},
	"why.point0": { en: "No huge upfront investments", ar: "لا استثمارات ضخمة مقدمًا" },
	"why.point1": { en: "No spending & guessing on non selling products", ar: "لا إنفاق أو تخمين على منتجات لا تُباع" },
	"why.point2": { en: "No owning Inventory", ar: "لا حاجة لامتلاك مخزون" },
	"why.point3": { en: "No dealing with suppliers & shipment fees", ar: "لا تعامل مع الموردين ورسوم الشحن" },
	"why.point4": {
		en: "Pay for what you sell only and keep the profit",
		ar: "ادفع فقط مقابل ما تبيعه واحتفظ بالربح",
	},

	"bonuses.heading": {
		en: 'Droparabia <span class="text-primary">exclusive bonuses</span>',
		ar: 'مزايا <span class="text-primary">حصرية من دروب أرابيا</span>',
	},
	"bonuses.title0": {
		en: "+20 hours of FREE courses and recorded tutorials",
		ar: "أكثر من 20 ساعة من الدورات المجانية والدروس المسجّلة",
	},
	"bonuses.subtitle0": {
		en: "Learn store setup, marketing, and scaling at your own pace",
		ar: "تعلّم إعداد المتجر والتسويق والتوسّع بالسرعة التي تناسبك",
	},
	"bonuses.title1": {
		en: "2 Weekly coaching calls with experienced advisors",
		ar: "مكالمتا إرشاد أسبوعيتان مع مستشارين ذوي خبرة",
	},
	"bonuses.subtitle1": {
		en: "Live guidance to keep your store on track every week",
		ar: "إرشاد مباشر يبقي متجرك على المسار الصحيح كل أسبوع",
	},
	"bonuses.title2": {
		en: "One‑on‑One mentorship with a 6‑Figure brand builder",
		ar: "إرشاد فردي من صاحب علامة تجارية بأرباح ست أرقام",
	},
	"bonuses.subtitle2": {
		en: "Personalized advice from someone who's done it before",
		ar: "نصائح مخصصة من شخص خاض التجربة من قبل",
	},
	"bonuses.title3": {
		en: "WhatsApp group for support whenever you need it",
		ar: "مجموعة واتساب للدعم كلما احتجت إليه",
	},
	"bonuses.subtitle3": {
		en: "A direct line to the team and other sellers, 24/7",
		ar: "خط تواصل مباشر مع الفريق والبائعين الآخرين على مدار الساعة",
	},

	"tools.heading": {
		en: 'Access advanced &amp; <span class="text-primary">game changing tools</span>',
		ar: 'اكتشف أدوات <span class="text-primary">متقدمة وتغيّر قواعد اللعبة</span>',
	},
	"tools.subheading": {
		en: "Powerful features which you can leverage to build your dropshipping business faster and efficiently",
		ar: "ميزات قوية يمكنك استخدامها لبناء مشروع الدروبشيبينغ الخاص بك بشكل أسرع وأكثر كفاءة",
	},
	"tool.find-products.tagline": { en: "Search a huge catalog of winning products", ar: "ابحث في كتالوج ضخم من المنتجات الرابحة" },
	"tool.ai-winning-products.tagline": { en: "Let AI surface today's best-selling picks", ar: "دع الذكاء الاصطناعي يبرز الأكثر مبيعًا اليوم" },
	"tool.ai-studio.tagline": { en: "Generate product creatives in seconds", ar: "أنشئ تصاميم منتجاتك في ثوانٍ" },
	"tool.branding.tagline": { en: "Build a store identity buyers trust", ar: "ابنِ هوية متجر يثق بها المشترون" },
	"tool.product-request.tagline": { en: "Ask us to source anything you need", ar: "اطلب منا توفير أي منتج تحتاجه" },
	"tool.leader-board.tagline": { en: "See how you rank against top sellers", ar: "اطّلع على ترتيبك مقارنة بأفضل البائعين" },

	"dropvault.subtext": {
		en: "A community where you can grow, learn and get support whenever you need it!",
		ar: "مجتمع تنمو وتتعلم فيه وتحصل على الدعم كلما احتجت إليه!",
	},
	"dropvault.bonuses.heading": {
		en: 'Dropvault <span class="text-primary">member benefits</span>',
		ar: 'مزايا <span class="text-primary">أعضاء دروب فولت</span>',
	},
	"dropvault.bonuses.title0": {
		en: "Join a community of passionate sellers and brand builders",
		ar: "انضم إلى مجتمع من البائعين الشغوفين وبناة العلامات التجارية",
	},
	"dropvault.bonuses.title1": {
		en: "Get access to +20 hours of FREE courses and recorded tutorials",
		ar: "احصل على أكثر من 20 ساعة من الدورات المجانية والدروس المسجّلة",
	},
	"dropvault.bonuses.title2": {
		en: "A place to get support and guidance whenever you need it",
		ar: "مكان للحصول على الدعم والإرشاد كلما احتجت إليه",
	},
	"dropvault.bonuses.title3": {
		en: "Occasional & high‑rewarding events inside the community",
		ar: "فعاليات دورية ومجزية داخل المجتمع",
	},
	"dropvault.bonuses.closing": {
		en: 'You become a <span class="font-semibold text-primary">Dropvault</span> member the moment you become a Droparabia user!',
		ar: 'تصبح عضوًا في <span class="font-semibold text-primary">دروب فولت</span> بمجرد أن تصبح مستخدمًا لدروب أرابيا!',
	},

	// --- Per-tool content (src/data/tools.ts), keyed by slug ---
	"tool.find-products.paragraph": {
		en: "Instead of searching for hours on Ali-baba or Ali-express to find a product to sell, Droparabia sources you a huge variety of products that has great demand that actually sells!",
		ar: "بدلاً من قضاء ساعات في البحث على علي بابا أو علي إكسبرس عن منتج تبيعه، يوفر لك دروب أرابيا مجموعة ضخمة من المنتجات ذات الطلب العالي والتي تُباع فعليًا!",
	},
	"tool.find-products.perksIntro": {
		en: "Find Products is built to get you to a sellable product fast, without the guesswork.",
		ar: "صُمم Find Products لإيصالك إلى منتج قابل للبيع بسرعة، دون تخمين.",
	},
	"tool.find-products.feature0.title": { en: "Filter by niche", ar: "التصفية حسب المجال" },
	"tool.find-products.feature0.description": {
		en: "Narrow the catalog down to the exact category your store needs, from Health & Beauty to Electronics.",
		ar: "ضيّق الكتالوج إلى الفئة التي يحتاجها متجرك بالضبط، من الصحة والجمال إلى الإلكترونيات.",
	},
	"tool.find-products.feature1.title": { en: "Order a sample", ar: "اطلب عينة" },
	"tool.find-products.feature1.description": {
		en: "Request a physical sample before committing, so you know exactly what you're selling.",
		ar: "اطلب عينة فعلية قبل الالتزام، لتعرف بالضبط ما الذي تبيعه.",
	},
	"tool.find-products.feature2.title": { en: "One-click import", ar: "استيراد بنقرة واحدة" },
	"tool.find-products.feature2.description": {
		en: "Upload any product directly to your Shopify store with one click.",
		ar: "ارفع أي منتج مباشرة إلى متجرك على Shopify بنقرة واحدة.",
	},
	"tool.find-products.perk0": { en: "No searching for hours for a product to sell", ar: "لا حاجة للبحث ساعات عن منتج للبيع" },
	"tool.find-products.perk1": { en: "No inventory owning and management", ar: "لا امتلاك أو إدارة مخزون" },
	"tool.find-products.perk2": { en: "Variety of most profitable niches covered", ar: "تغطية لمجموعة من أكثر المجالات ربحية" },

	"tool.ai-winning-products.paragraph": {
		en: "Explore a library of best selling and handpicked products by AI backed by real data and analysis.",
		ar: "استكشف مكتبة من المنتجات الأكثر مبيعًا والمنتقاة بالذكاء الاصطناعي، مدعومة ببيانات وتحليلات حقيقية.",
	},
	"tool.ai-winning-products.perksIntro": {
		en: "AI Winning Products does the market research so you don't have to.",
		ar: "يقوم AI Winning Products بأبحاث السوق نيابة عنك.",
	},
	"tool.ai-winning-products.feature0.title": { en: "AI score & analysis", ar: "تقييم وتحليل بالذكاء الاصطناعي" },
	"tool.ai-winning-products.feature0.description": {
		en: "Every product gets an AI score out of 100, broken down across trend, competition, margin, saturation, impulse buy, and repeat purchase potential.",
		ar: "يحصل كل منتج على تقييم بالذكاء الاصطناعي من 100، موزّع على الرواج والمنافسة والهامش والتشبع والشراء الاندفاعي وإمكانية الشراء المتكرر.",
	},
	"tool.ai-winning-products.feature1.title": { en: "Sell recommendation", ar: "توصية بالبيع" },
	"tool.ai-winning-products.feature1.description": {
		en: "See platform activity trends, a variant-by-variant profit breakdown, and a clear sell recommendation backed by a winning product score.",
		ar: "اطّلع على اتجاهات النشاط على المنصة، وتوزيع الربح لكل نوع، وتوصية بيع واضحة مدعومة بتقييم للمنتج الرابح.",
	},
	"tool.ai-winning-products.perk0": { en: "Recommendation backed by real data", ar: "توصية مدعومة ببيانات حقيقية" },
	"tool.ai-winning-products.perk1": { en: "Target avatar based analysis", ar: "تحليل مبني على شخصية العميل المستهدف" },
	"tool.ai-winning-products.perk2": { en: "Time saving decision making", ar: "قرارات أسرع توفّر وقتك" },

	"tool.ai-studio.paragraph": {
		en: "Leverage our AI studio to create your own powerful advertising videos for your products rather than re-using other creators' content and risking yourself with a ban.",
		ar: "استخدم استوديو الذكاء الاصطناعي لدينا لإنشاء إعلانات فيديو قوية لمنتجاتك بدلاً من إعادة استخدام محتوى صناع آخرين وتعريض نفسك لخطر الحظر.",
	},
	"tool.ai-studio.perksIntro": {
		en: "AI Studio replaces the design and copywriting work most sellers skip entirely.",
		ar: "يغني AI Studio عن أعمال التصميم والكتابة الإعلانية التي يتجاهلها معظم البائعين تمامًا.",
	},
	"tool.ai-studio.feature0.title": { en: "Instant ad creatives", ar: "تصاميم إعلانية فورية" },
	"tool.ai-studio.feature0.description": {
		en: "Generate ready-to-post ad images and videos in a few clicks.",
		ar: "أنشئ صور وفيديوهات إعلانية جاهزة للنشر بنقرات قليلة.",
	},
	"tool.ai-studio.feature1.title": { en: "Background & lighting fixes", ar: "تحسين الخلفية والإضاءة" },
	"tool.ai-studio.feature1.description": {
		en: "Turn flat product photos into polished, professional shots.",
		ar: "حوّل صور المنتجات العادية إلى لقطات احترافية أنيقة.",
	},
	"tool.ai-studio.feature2.title": { en: "AI-written copy", ar: "نصوص مكتوبة بالذكاء الاصطناعي" },
	"tool.ai-studio.feature2.description": {
		en: "Get product descriptions and ad captions tailored to your niche.",
		ar: "احصل على أوصاف منتجات وعبارات إعلانية مخصصة لمجالك.",
	},
	"tool.ai-studio.perk0": { en: "No more reusing & or stealing content", ar: "لا مزيد من إعادة استخدام أو سرقة المحتوى" },
	"tool.ai-studio.perk1": { en: "Your own generated video advertisements", ar: "إعلانات فيديو من إنشائك الخاص" },
	"tool.ai-studio.perk2": { en: "Adaptability for each product and use case", ar: "قابلية للتكيف مع كل منتج وحالة استخدام" },

	"tool.branding.paragraph": {
		en: 'Rather than selling a product like "everyone else", customize your products with your own brand\'s logo with our laser printing machine!',
		ar: "بدلاً من بيع منتج مثل \"الجميع\"، خصّص منتجاتك بشعار علامتك التجارية باستخدام جهاز الطباعة بالليزر لدينا!",
	},
	"tool.branding.perksIntro": {
		en: "Branding handles the identity work that makes buyers trust a store enough to check out.",
		ar: "تتولى Branding بناء الهوية التي تجعل المشترين يثقون بالمتجر بما يكفي لإتمام الشراء.",
	},
	"tool.branding.perk0": { en: "Create your own unique brand", ar: "أنشئ علامتك التجارية المميزة" },
	"tool.branding.perk1": { en: "Get distinguished from your competitors", ar: "تميّز عن منافسيك" },
	"tool.branding.perk2": { en: "Print on-demand only per sold product", ar: "طباعة عند الطلب لكل منتج يُباع فقط" },

	"tool.product-request.paragraph": {
		en: "Instead of dealing with suppliers yourself and paying shipment fees, just give us an image of the product that's available on our catalog and we'll source it for you without extra fees!",
		ar: "بدلاً من التعامل مع الموردين بنفسك ودفع رسوم الشحن، ما عليك سوى إعطائنا صورة للمنتج المتوفر في كتالوجنا وسنوفره لك دون رسوم إضافية!",
	},
	"tool.product-request.perksIntro": {
		en: "Product Request is there for the moment the catalog doesn't have what you need yet.",
		ar: "Product Request موجودة للحظة التي لا يحتوي فيها الكتالوج على ما تحتاجه بعد.",
	},
	"tool.product-request.perk0": { en: "No dealing with suppliers yourself", ar: "لا تعامل مع الموردين بنفسك" },
	"tool.product-request.perk1": { en: "No huge shipment fees or risk of scam", ar: "لا رسوم شحن باهظة أو خطر احتيال" },
	"tool.product-request.perk2": {
		en: "Research and supplying done without extra fees",
		ar: "البحث والتوريد يتمّان دون رسوم إضافية",
	},

	"tool.leader-board.paragraph": {
		en: "Who said building and running an online business can't be a fun competition? You'll also be a part of a wholesome community and make new friends!",
		ar: "من قال إن بناء وإدارة عمل إلكتروني لا يمكن أن يكون منافسة ممتعة؟ ستكون أيضًا جزءًا من مجتمع إيجابي وتكوّن صداقات جديدة!",
	},
	"tool.leader-board.perksIntro": {
		en: "The Leader Board turns your store's performance into something visible and worth chasing.",
		ar: "تحوّل Leader Board أداء متجرك إلى شيء ظاهر يستحق السعي إليه.",
	},
	"tool.leader-board.perk0": {
		en: "Grow your business alongside other sellers in the community",
		ar: "نمِّ عملك جنبًا إلى جنب مع بائعين آخرين في المجتمع",
	},
	"tool.leader-board.perk1": { en: "Participate in events and giveaways", ar: "شارك في الفعاليات والهدايا" },
	"tool.leader-board.perk2": {
		en: "Affiliate program for top best performing users",
		ar: "برنامج تسويق بالعمولة لأفضل المستخدمين أداءً",
	},

	"toolfeatures.heading": { en: "How does it work?", ar: "كيف تعمل؟" },
	"cta.backToTools": { en: "Back to Tools", ar: "العودة إلى الأدوات" },

	"about.hero.line1": { en: "With Droparabia", ar: "مع دروب أرابيا" },
	"about.hero.line2": { en: "you can easily sell anywhere in Lebanon", ar: "يمكنك البيع بسهولة في أي مكان في لبنان" },
	"about.hero.line3": { en: "And very soon...", ar: "وقريبًا جدًا..." },
	"about.hero.mena": {
		en: "You'll be able to sell in the MENA regions",
		ar: "ستتمكن من البيع في منطقة الشرق الأوسط وشمال أفريقيا",
	},

	"about.mission.intro": {
		en: "Droparabia was created to allow anyone to get into e-commerce regardless of their experience by eliminating all obstacles that cause most e-com businesses to fail before they start, such as:",
		ar: "أُنشئ دروب أرابيا ليتيح لأي شخص دخول عالم التجارة الإلكترونية بغض النظر عن خبرته، عبر إزالة كل العقبات التي تجعل معظم المشاريع الإلكترونية تفشل قبل أن تبدأ، مثل:",
	},
	"about.mission.point0": { en: "Huge upfront investments", ar: "استثمارات ضخمة مقدمًا" },
	"about.mission.point1": {
		en: "Renting warehouses or owning inventories",
		ar: "استئجار مستودعات أو امتلاك مخزون",
	},
	"about.mission.point2": {
		en: "Ordering stocks from China and paying huge shipping fees",
		ar: "طلب بضائع من الصين ودفع رسوم شحن باهظة",
	},
	"about.mission.point3": { en: "Buying products in bulk that might not sell", ar: "شراء منتجات بالجملة قد لا تُباع" },
	"about.mission.point4": {
		en: "Wasting hours searching and qualifying products to sell",
		ar: "إضاعة ساعات في البحث عن منتجات للبيع وتقييمها",
	},
	"about.mission.point5": { en: "Finding a reliable delivery system", ar: "إيجاد نظام توصيل موثوق" },
	"about.mission.point6": { en: "Quitting after losing all your savings", ar: "الاستسلام بعد خسارة كل مدخراتك" },
	"about.mission.closing": {
		en: "Our system is here to save you from burning your budget on meaningless trials and errors that can be easily avoided through our unique infrastructure.",
		ar: "نظامنا هنا لتوفير ميزانيتك من محاولات وأخطاء لا طائل منها يمكن تفاديها بسهولة من خلال بنيتنا التحتية الفريدة.",
	},

	"about.operation.heading": {
		en: 'How does it <span class="text-primary">operate</span>',
		ar: 'كيف <span class="text-primary">يعمل</span>',
	},
	"about.operation.paragraph": {
		en: "We have our own unique logistic network in Deir Qoubel, Mount Lebanon Governorate and our own infrastructure that allows us to deliver safely all over Lebanon, as well as our own supplier partners locally and from China to make sure we're reliably and swiftly sourcing you only the highest quality of products at the best price possible.",
		ar: "لدينا شبكة لوجستية خاصة بنا في دير قوبل، محافظة جبل لبنان، وبنية تحتية تتيح لنا التوصيل الآمن في جميع أنحاء لبنان، إضافة إلى شركاء موردين محليين ومن الصين، لضمان توفير منتجات عالية الجودة بأفضل الأسعار وبسرعة وموثوقية.",
	},

	"about.founder.label": { en: "Founder of Droparabia", ar: "مؤسس دروب أرابيا" },
	"about.founder.bio": {
		en: "Majd Abdulsalam, a digital marketing expert and 6-figure entrepreneur, created Droparabia, shaped from all the obstacles, trials, and errors during his journey building his own e-com brands, now using that expertise to help others build successful e-com and dropshipping stores.",
		ar: "مجد عبدالسلام، خبير تسويق رقمي ورائد أعمال بأرباح ست أرقام، أسّس دروب أرابيا انطلاقًا من كل العقبات والتجارب والأخطاء التي واجهها خلال بناء علاماته التجارية الإلكترونية، ويستخدم الآن تلك الخبرة لمساعدة الآخرين على بناء متاجر إلكترونية ودروبشيبينغ ناجحة.",
	},

	"faq.q0": { en: "What is Droparabia?", ar: "ما هو دروب أرابيا؟" },
	"faq.a0": {
		en: "Droparabia is the first dropshipping platform in Lebanon, and very soon in the MENA region, inspired by CJ Dropshipping and DSers but built for the Lebanese and MENA market. It was built to solve the common problems that cause most e-com owners and dropshippers to fail in their businesses.",
		ar: "دروب أرابيا هي أول منصة دروبشيبينغ في لبنان، وقريبًا في منطقة الشرق الأوسط وشمال أفريقيا، مستوحاة من CJ Dropshipping وDSers لكنها مبنية للسوق اللبناني والعربي. صُممت لحل المشاكل الشائعة التي تجعل معظم أصحاب المتاجر الإلكترونية ودروبشيبرز يفشلون في أعمالهم.",
	},
	"faq.q1": { en: "What does Droparabia bring to the table?", ar: "ماذا يقدّم دروب أرابيا؟" },
	"faq.a1": {
		en: "Droparabia removes all the annoying, money burning, and time consuming aspects found in traditional e-commerce and old dropshipping, including purchasing, owning, and managing inventory; the risk of purchasing products in bulk that might not sell; finding reliable third party services such as delivery companies, packaging companies, and warehouses; dealing with risky suppliers and the headache of negotiations; and requiring huge upfront investments, like traditional e-commerce's minimum of $3,000.",
		ar: "يزيل دروب أرابيا كل الجوانب المزعجة والمكلفة والمستهلكة للوقت في التجارة الإلكترونية التقليدية والدروبشيبينغ القديم، بما فيها شراء وامتلاك وإدارة المخزون؛ خطر شراء منتجات بالجملة قد لا تُباع؛ إيجاد خدمات موثوقة كشركات التوصيل والتغليف والمستودعات؛ التعامل مع موردين غير موثوقين وصداع التفاوض؛ والحاجة لاستثمارات ضخمة مقدمًا كالحد الأدنى 3000 دولار في التجارة التقليدية.",
	},
	"faq.q2": { en: "Who is Droparabia for?", ar: "لمن دروب أرابيا؟" },
	"faq.a2": {
		en: "Droparabia is for e-commerce brands, dropshippers, or anyone looking to start their own online business, regardless of their experience in digital marketing, education level, or technical skills, who wants to invest their time and budget directly rather than becoming a victim of beginner mistakes like finding the right product to sell, managing inventory, or handling delivery.",
		ar: "دروب أرابيا مخصص للعلامات التجارية الإلكترونية والدروبشيبرز أو أي شخص يريد بدء عمله الإلكتروني الخاص، بغض النظر عن خبرته في التسويق الرقمي أو مستواه التعليمي أو مهاراته التقنية، ويريد استثمار وقته وميزانيته مباشرة بدلاً من الوقوع ضحية أخطاء المبتدئين كإيجاد المنتج المناسب أو إدارة المخزون أو التوصيل.",
	},
	"faq.q3": { en: "Is Droparabia an easy way to make money?", ar: "هل دروب أرابيا طريقة سهلة لكسب المال؟" },
	"faq.a3": {
		en: "Absolutely not. Droparabia is for people who are serious about building a successful online business and are ready to put in the effort required, even if they fail at first. Droparabia makes it easier for you to create your own business; whether it succeeds or fails depends on your effort.",
		ar: "بالتأكيد لا. دروب أرابيا مخصص للأشخاص الجادين في بناء عمل إلكتروني ناجح والمستعدين لبذل الجهد المطلوب، حتى لو فشلوا في البداية. يسهّل دروب أرابيا عليك إنشاء عملك الخاص؛ أما نجاحه أو فشله فيعتمد على جهدك.",
	},
	"faq.q4": { en: "Isn't it better to just start traditional e-commerce?", ar: "أليس من الأفضل البدء بالتجارة الإلكترونية التقليدية؟" },
	"faq.a4": {
		en: "Traditional e-commerce means buying hundreds of products upfront, storing them, and hoping they sell. If they don't, you're stuck with dead inventory and wasted money. Dropshipping with Droparabia lets you test products with zero inventory risk. Once you find winners, you can then scale, or even move to traditional e-commerce, if you want. But why bet your savings when you can test first?",
		ar: "التجارة الإلكترونية التقليدية تعني شراء مئات المنتجات مقدمًا وتخزينها والأمل أن تُباع. إن لم تُبع، تبقى عالقًا بمخزون ميت ومال ضائع. الدروبشيبينغ مع دروب أرابيا يتيح لك اختبار المنتجات دون أي خطر مخزون. وبمجرد أن تجد المنتجات الرابحة، يمكنك التوسع أو حتى الانتقال إلى التجارة التقليدية إن أردت. فلماذا تخاطر بمدخراتك بينما يمكنك الاختبار أولاً؟",
	},
	"faq.q5": {
		en: "I don't have marketing experience, or I don't know how to manage social media",
		ar: "ليست لدي خبرة تسويقية، أو لا أعرف كيف أدير وسائل التواصل الاجتماعي",
	},
	"faq.a5": {
		en: "That's exactly why we offer a dedicated support community for all Droparabia users, where they can access tons of free courses and prerecorded tutorials, plus a team of experienced advisors ready to hold their hands so you never have to learn anything from scratch!",
		ar: "لهذا السبب بالضبط نوفر مجتمع دعم مخصص لجميع مستخدمي دروب أرابيا، حيث يمكنهم الوصول إلى الكثير من الدورات المجانية والدروس المسجّلة، إضافة إلى فريق من المستشارين ذوي الخبرة الجاهزين لمرافقتك خطوة بخطوة حتى لا تضطر لتعلّم أي شيء من الصفر!",
	},
	"faq.q6": {
		en: "Do I get a refund if Droparabia failed to deliver its promises?",
		ar: "هل أحصل على استرداد إذا لم يفِ دروب أرابيا بوعوده؟",
	},
	"faq.a6": {
		en: "We are confident in our platform and its capabilities in helping others start and grow their businesses, which is why we have a full refund policy, plus compensation for the time and money lost using this platform, if the user followed all our instructions and made full use of Droparabia's features (with proof provided) but made no sales whatsoever within 90 days.",
		ar: "نحن واثقون من منصتنا وقدرتها على مساعدة الآخرين على بدء وتنمية أعمالهم، ولهذا لدينا سياسة استرداد كاملة، إضافة إلى تعويض عن الوقت والمال المفقودين باستخدام هذه المنصة، إذا اتبع المستخدم كل تعليماتنا واستخدم ميزات دروب أرابيا بالكامل (مع تقديم إثبات) لكنه لم يحقق أي مبيعات خلال 90 يومًا.",
	},

	"casestudy.heading": { en: "Latest case studies", ar: "أحدث دراسات الحالة" },

	"blog.heading": { en: "Browse our latest articles", ar: "تصفّح أحدث مقالاتنا" },
	"blog.post0.title": {
		en: `Dropshipping is "dead"`,
		ar: `الدروبشيبينغ "ميت"`,
	},
	"blog.post0.excerpt": {
		en: "Is dropshipping really dead in 2026, or is that just a myth pushed by failed case studies and course sellers?",
		ar: "هل الدروبشيبينغ ميت فعلاً في 2026، أم أنها مجرد خرافة يروّجها أصحاب التجارب الفاشلة وبائعو الدورات؟",
	},
	"blog.post1.title": {
		en: "Why Droparabia exist",
		ar: "لماذا توجد دروب أرابيا",
	},
	"blog.post1.excerpt": {
		en: "The story behind Droparabia — the obstacles that made traditional e-commerce and old dropshipping fail Lebanese sellers.",
		ar: "القصة وراء دروب أرابيا — العقبات التي جعلت التجارة الإلكترونية التقليدية والدروبشيبينغ القديم يفشلان مع البائعين اللبنانيين.",
	},
	"blog.featured.title": {
		en: "Dropshipping for newbies: how to start dropshipping in Lebanon?",
		ar: "الدروبشيبينغ للمبتدئين: كيف تبدأ الدروبشيبينغ في لبنان؟",
	},

	"reviewform.heading": {
		en: 'Leave a <span class="text-primary">review</span>',
		ar: 'اترك <span class="text-primary">تقييمًا</span>',
	},
	"reviewform.subtext": {
		en: "Tell other sellers about your experience with Droparabia. Reviews are checked before they go live.",
		ar: "أخبر البائعين الآخرين عن تجربتك مع دروب أرابيا. تُراجع التقييمات قبل نشرها.",
	},
	"reviewform.name": { en: "Name", ar: "الاسم" },
	"reviewform.rating": { en: "Rating", ar: "التقييم" },
	"reviewform.reviewLabel": { en: "Your review", ar: "تقييمك" },
	"reviewform.submit": { en: "Submit review", ar: "إرسال التقييم" },

	"faqpage.heading": {
		en: 'Frequently asked <span class="text-primary">questions</span>',
		ar: 'الأسئلة <span class="text-primary">الشائعة</span>',
	},
	"faqpage.subtext": {
		en: "Answers to the questions we get most. Can't find what you're looking for? Reach out through Contact.",
		ar: "إجابات على الأسئلة الأكثر شيوعًا. لم تجد ما تبحث عنه؟ تواصل معنا عبر صفحة التواصل.",
	},

	"reviews.activeSellers": { en: "Active sellers", ar: "بائع نشط" },
	"reviews.from": { en: "From", ar: "من" },
	"reviews.sellers": { en: "Sellers", ar: "البائعين" },

	"trustpilot.heading": {
		en: 'Already a <span class="text-primary">Droparabia</span> seller?',
		ar: 'هل أنت بائع على <span class="text-primary">دروب أرابيا</span> بالفعل؟',
	},
	"trustpilot.reviewUs": { en: "Review us on Trustpilot", ar: "قيّمنا على Trustpilot" },
	"trustpilot.writeReview": { en: "Write us a review", ar: "اكتب لنا تقييمًا" },

	"external.heading": { en: "Leaving Droparabia", ar: "مغادرة دروب أرابيا" },
	"external.cancel": { en: "Cancel", ar: "إلغاء" },
	"external.continue": { en: "Continue", ar: "متابعة" },
	"external.whatsappMessage": {
		en: "You're about to be redirected to WhatsApp to chat with us at +961 78 835 482.",
		ar: "أنت على وشك التوجه إلى واتساب للتحدث معنا على +961 78 835 482.",
	},
	"external.instagramMessage": {
		en: "You're about to be redirected to Instagram to join our broadcast channel.",
		ar: "أنت على وشك التوجه إلى إنستغرام للانضمام إلى قناة البث الخاصة بنا.",
	},

	// --- Header/Footer nav item labels + descriptions (tool labels reuse the same slug key
	// families used elsewhere so Header/Footer/tool pages all stay in sync) ---
	"tool.find-products.label": { en: "Find Products", ar: "البحث عن المنتجات" },
	"tool.ai-winning-products.label": { en: "AI Winning Products", ar: "منتجات رابحة بالذكاء الاصطناعي" },
	"tool.ai-studio.label": { en: "AI Studio", ar: "استوديو الذكاء الاصطناعي" },
	"tool.branding.label": { en: "Branding", ar: "العلامة التجارية" },
	"tool.product-request.label": { en: "Product Request", ar: "طلب منتج" },
	"tool.leader-board.label": { en: "Leader Board", ar: "لوحة المتصدرين" },

	"resources.faq.label": { en: "FAQ", ar: "الأسئلة الشائعة" },
	"resources.faq.desc": { en: "Answers to the questions we get most", ar: "إجابات على الأسئلة الأكثر شيوعًا" },
	"resources.blog.label": { en: "Blog", ar: "المدونة" },
	"resources.blog.desc": { en: "Guides and updates from the Droparabia team", ar: "أدلة وتحديثات من فريق دروب أرابيا" },
	"resources.broadcast.label": { en: "Broadcast channel", ar: "قناة البث" },
	"resources.broadcast.desc": { en: "Announcements and drops, straight to you", ar: "إعلانات وعروض تصلك مباشرة" },
	"resources.youtube.label": { en: "YouTube channel", ar: "قناة يوتيوب" },
	"resources.youtube.desc": { en: "Video guides and behind-the-scenes", ar: "شروحات مصورة ولقطات من الكواليس" },
	"resources.contact.label": { en: "Contact", ar: "تواصل معنا" },
	"resources.contact.desc": { en: "Reach the Droparabia support team", ar: "تواصل مع فريق دعم دروب أرابيا" },
	"resources.about.label": { en: "About Us", ar: "من نحن" },
	"resources.about.desc": { en: "Who we are and why we started Droparabia", ar: "من نحن ولماذا أسسنا دروب أرابيا" },

	"footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },

	// --- Browser tab titles ---
	"page.about": { en: "About Us", ar: "من نحن" },
	"page.faq": { en: "FAQ", ar: "الأسئلة الشائعة" },
	"page.dropvault": { en: "Dropvault", ar: "دروب فولت" },
	"page.leaveReview": { en: "Leave a Review", ar: "اترك تقييمًا" },
	"page.reviews": { en: "Reviews", ar: "التقييمات" },
	"page.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
	"page.terms": { en: "Terms & Conditions", ar: "الشروط والأحكام" },

	"tabAttention.away": { en: "😭 Where did you go?!?!", ar: "😭 إلى أين ذهبت؟!؟!" },

	"about.founder.name": { en: "Majd Abdulsalam", ar: "مجد عبدالسلام" },

	// --- Hero niche toggle labels (display only — folder names on disk stay in English) ---
	"hero.niche0": { en: "Kitchen", ar: "المطبخ" },
	"hero.niche1": { en: "Health and beauty", ar: "الصحة والجمال" },
	"hero.niche2": { en: "Electronic", ar: "الإلكترونيات" },
	"hero.niche3": { en: "Car Care", ar: "العناية بالسيارات" },
	"hero.niche4": { en: "Pets", ar: "الحيوانات الأليفة" },
	"hero.niche5": { en: "Sporting Goods", ar: "المستلزمات الرياضية" },

	// --- MajdGBT chat demo ---
	"majdgbt.inputPlaceholder": { en: "Ask MajdGBT anything...", ar: "اسأل MajdGBT أي شيء..." },
	"majdgbt.thinking": { en: "Thinking...", ar: "جارٍ التفكير..." },
	"majdgbt.fallback": {
		en: "That's a great question — I'll have a full answer for you once I'm live!",
		ar: "سؤال رائع — سأقدم لك إجابة كاملة بمجرد أن أصبح متاحًا بشكل كامل!",
	},
	"majdgbt.q0": { en: "What dropshipping niches are the most profitable?", ar: "ما هي أكثر مجالات الدروبشيبينغ ربحية؟" },
	"majdgbt.a0": {
		en: "Some of the most profitable dropshipping niches right now are health & beauty (skincare tools, pain relief, hair care gadgets), home & kitchen (organizers, cleaning tools, smart gadgets), fitness & wellness (posture correctors, massage tools, home workout gear), baby & kids (educational toys, safety products, organizers), and pets (toys, grooming tools, car seat covers). These niches work well because they solve real problems, have strong emotions behind them, and are easy to show in short videos.",
		ar: "من أكثر مجالات الدروبشيبينغ ربحية حاليًا: الصحة والجمال (أدوات العناية بالبشرة، تخفيف الألم، أدوات العناية بالشعر)، المنزل والمطبخ (أدوات التنظيم، أدوات التنظيف، الأجهزة الذكية)، اللياقة والعافية (مصححات الوضعية، أدوات التدليك، معدات التمارين المنزلية)، الأطفال والرضع (ألعاب تعليمية، منتجات أمان، أدوات تنظيم)، والحيوانات الأليفة (ألعاب، أدوات عناية، أغطية مقاعد السيارة). تنجح هذه المجالات لأنها تحل مشاكل حقيقية، وترتبط بمشاعر قوية، ويسهل عرضها في فيديوهات قصيرة.",
	},
	"majdgbt.q1": { en: "How do I create ads that attract customers?", ar: "كيف أنشئ إعلانات تجذب العملاء؟" },
	"majdgbt.a1": {
		en: "Create simple UGC-style video ads: start with a strong hook in the first 3 seconds, show the problem, then how your product fixes it, add quick social proof, and finish with a clear 'Order Now – Cash on Delivery' call to action. Keep it short (15–25 seconds), show real people using the product, and test 2–3 different hooks to see what gets the most clicks.",
		ar: "أنشئ إعلانات فيديو بسيطة بأسلوب UGC: ابدأ بجملة جذب قوية في أول 3 ثوانٍ، اعرض المشكلة، ثم كيف يحلها منتجك، أضف دليلًا اجتماعيًا سريعًا، وأنهِ بدعوة واضحة لاتخاذ إجراء مثل 'اطلب الآن – الدفع عند الاستلام'. اجعله قصيرًا (15–25 ثانية)، اعرض أشخاصًا حقيقيين يستخدمون المنتج، وجرّب 2–3 جمل جذب مختلفة لمعرفة أيها يحقق أكثر نقرات.",
	},
	"majdgbt.q2": { en: "Is the dropshipping model actually dead?", ar: "هل نموذج الدروبشيبينغ ميت فعلاً؟" },
	"majdgbt.a2": {
		en: "No, dropshipping isn't dead — bad products and bad marketing are. The model still works very well when you focus on solving a real problem, fast delivery with reliable suppliers, and strong video creatives with a clear COD offer. People don't care if it's dropshipping — they care if it arrives fast, does what it promises, and feels trustworthy.",
		ar: "لا، الدروبشيبينغ ليس ميتًا — المنتجات السيئة والتسويق السيئ هما الميتان. لا يزال النموذج يعمل بشكل ممتاز عندما تركز على حل مشكلة حقيقية، وتوصيل سريع مع موردين موثوقين، وفيديوهات إبداعية قوية مع عرض دفع عند الاستلام واضح. لا يهم العملاء إن كان دروبشيبينغ أم لا — ما يهمهم هو أن يصل الطلب بسرعة، وأن يفي بما وعد به، وأن يشعروا بالثقة.",
	},
	"majdgbt.q3": {
		en: "What if I didn't find the product I am looking for in Droparabia?",
		ar: "ماذا لو لم أجد المنتج الذي أبحث عنه في دروب أرابيا؟",
	},
	"majdgbt.a3": {
		en: "If you don't find the exact product you're looking for on Droparabia, you can either message the Droparabia team to request it and check if they can source it for you, or use a similar alternative product that solves the same problem and is already available with good stock and shipping times. The goal is speed: sell what's available and proven, instead of waiting weeks for one specific item.",
		ar: "إذا لم تجد المنتج الذي تبحث عنه بالضبط على دروب أرابيا، يمكنك إما مراسلة فريق دروب أرابيا لطلبه ومعرفة إن كان بإمكانهم توفيره لك، أو استخدام منتج بديل مشابه يحل نفس المشكلة ومتوفر بالفعل بمخزون جيد وأوقات شحن مناسبة. الهدف هو السرعة: بِع ما هو متوفر ومُثبت، بدلاً من الانتظار أسابيع لمنتج واحد محدد.",
	},
	"majdgbt.q4": { en: "How do I choose my winning product?", ar: "كيف أختار منتجي الرابح؟" },
	"majdgbt.a4": {
		en: "Choose a winning product by using clear criteria: it must solve a real pain, have a strong 'wow' factor on video, at least 3–5x profit margin, and already be selling in the market (active ads, viral videos, real reviews). Then shortlist 5–10 products, check which ones have the best mix of demand + profit + simple usage, and start testing with 1 main product and 1–2 backups.",
		ar: "اختر منتجك الرابح باستخدام معايير واضحة: يجب أن يحل مشكلة حقيقية، وله عامل 'إبهار' قوي على الفيديو، وهامش ربح لا يقل عن 3–5 أضعاف، وأن يكون يُباع بالفعل في السوق (إعلانات نشطة، فيديوهات منتشرة، تقييمات حقيقية). بعد ذلك، رشّح 5–10 منتجات، وتحقق من أيها يجمع أفضل مزيج من الطلب والربح وسهولة الاستخدام، وابدأ الاختبار بمنتج رئيسي واحد و1–2 منتج احتياطي.",
	},

	// --- Review form dynamic (JS-driven) messages ---
	"reviewform.errorName": { en: "Name must be {min}-{max} characters.", ar: "يجب أن يتراوح الاسم بين {min} و{max} حرفًا." },
	"reviewform.errorRating": { en: "Please pick a star rating.", ar: "يرجى اختيار تقييم بالنجوم." },
	"reviewform.errorText": { en: "Review must be {min}-{max} characters.", ar: "يجب أن يتراوح التقييم بين {min} و{max} حرفًا." },
	"reviewform.errorRateLimit": {
		en: "Please wait a bit before submitting another review.",
		ar: "يرجى الانتظار قليلاً قبل إرسال تقييم آخر.",
	},
	"reviewform.errorGeneric": { en: "Something went wrong. Please try again later.", ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقًا." },
	"reviewform.success": {
		en: "Thanks! Your review will appear once approved.",
		ar: "شكرًا لك! سيظهر تقييمك بعد الموافقة عليه.",
	},
	"reviewform.submitting": { en: "Submitting…", ar: "جارٍ الإرسال…" },

	// --- Real seller reviews (ReviewsHero.astro) ---
	"reviews.review0.name": { en: "Samah Salman", ar: "سماح سلمان" },
	"reviews.review0.quote": {
		en: "Great experience actually with DropArabia. The team is professional, responsive, and truly understands the market. Everything was clear, well-organized, and delivered with attention to detail.",
		ar: "تجربة رائعة فعلاً مع دروب أرابيا. الفريق محترف وسريع الاستجابة ويفهم السوق فعلاً. كان كل شيء واضحًا ومنظمًا وتم تسليمه باهتمام كبير بالتفاصيل.",
	},
	"reviews.review1.name": { en: "Ahmad Ladiki", ar: "أحمد لاديكي" },
	"reviews.review1.quote": {
		en: "A fantastic tool for product sourcing and fulfillment. Highly recommend for anyone serious about dropshipping.",
		ar: "أداة رائعة لتوريد المنتجات وتنفيذ الطلبات. أنصح بها بشدة لكل من يريد الجدية في الدروبشيبينغ.",
	},
	"reviews.review2.name": { en: "Khodr", ar: "خضر" },
	"reviews.review2.quote": {
		en: "The best platform to start launching your business with low risk.",
		ar: "أفضل منصة لبدء إطلاق عملك بمخاطرة منخفضة.",
	},
	"reviews.trustpilot0.name": { en: "Karim Sabeh", ar: "كريم صبح" },
	"reviews.trustpilot0.quote": {
		en: "I use it personally it is beginner friendly and you can make a living from it",
		ar: "أستخدمها شخصيًا، إنها سهلة للمبتدئين ويمكنك كسب عيشك منها",
	},
	"reviews.trustpilot1.name": { en: "MD Tech", ar: "إم دي تك" },
	"reviews.trustpilot1.quote": {
		en: "DropArabia, the Ultimate Roadmap for business beginners. It's a very successful system and provides professional courses and continuous feedback and support for students. High quality products, excellent storage and packaging and smooth money transactions.",
		ar: "دروب أرابيا هي خارطة الطريق المثالية للمبتدئين في الأعمال. نظام ناجح جدًا يوفر دورات احترافية وملاحظات ودعمًا مستمرًا للطلاب. منتجات عالية الجودة وتخزين وتغليف ممتازان ومعاملات مالية سلسة.",
	},
	"reviews.trustpilot2.name": { en: "Tarek", ar: "طارق" },
	"reviews.trustpilot2.quote": {
		en: "Smooth experience using this app. The platform is easy to use and order processing is simple. Definitely a useful app for anyone running a dropshipping business.",
		ar: "تجربة سلسة في استخدام هذا التطبيق. المنصة سهلة الاستخدام ومعالجة الطلبات بسيطة. تطبيق مفيد بالتأكيد لكل من يدير عمل دروبشيبينغ.",
	},

	// --- Privacy Policy ---
	"privacy.heading": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
	"privacy.intro": {
		en: "Droparabia is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and how we keep it safe when you visit droparabia.com or register for our free live workshop.",
		ar: "تلتزم دروب أرابيا بحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه البيانات التي نجمعها، وكيفية استخدامها، وكيف نحافظ على أمانها عند زيارتك لموقع droparabia.com أو تسجيلك في ورشتنا المباشرة المجانية.",
	},
	"privacy.section1.heading": { en: "1. Information We Collect", ar: "1. المعلومات التي نجمعها" },
	"privacy.section1.item0": {
		en: "Personal Data (name, email address, phone number)",
		ar: "بيانات شخصية (الاسم، البريد الإلكتروني، رقم الهاتف)",
	},
	"privacy.section1.item1": {
		en: "Usage Data (pages visited, time spent, links clicked, funnel stage)",
		ar: "بيانات الاستخدام (الصفحات التي تمت زيارتها، الوقت المستغرق، الروابط المنقور عليها، مرحلة رحلة العميل)",
	},
	"privacy.section2.heading": { en: "2. How We Use Your Information", ar: "2. كيف نستخدم معلوماتك" },
	"privacy.section2.item0": {
		en: "To process your registration and provide access to our workshop and platform",
		ar: "لمعالجة تسجيلك وتوفير الوصول إلى ورشتنا ومنصتنا",
	},
	"privacy.section2.item1": {
		en: "To communicate with you regarding your account, follow-ups, and updates",
		ar: "للتواصل معك بخصوص حسابك والمتابعات والتحديثات",
	},
	"privacy.section2.item2": {
		en: "To improve our content, offers, and user experience",
		ar: "لتحسين محتوانا وعروضنا وتجربة المستخدم",
	},
	"privacy.section2.item3": {
		en: "To qualify leads and organize them based on their funnel journey",
		ar: "لتصنيف العملاء المحتملين وتنظيمهم بناءً على رحلتهم",
	},
	"privacy.section2.item4": { en: "For legal compliance and security purposes", ar: "لأغراض الامتثال القانوني والأمان" },
	"privacy.section3.heading": { en: "3. Cookies and Tracking", ar: "3. ملفات تعريف الارتباط والتتبع" },
	"privacy.section3.paragraph": {
		en: "We use cookies and third-party analytics tools including Google Analytics and Google Tag Manager to understand user behavior and improve site performance.",
		ar: "نستخدم ملفات تعريف الارتباط وأدوات تحليل من جهات خارجية بما فيها Google Analytics وGoogle Tag Manager لفهم سلوك المستخدم وتحسين أداء الموقع.",
	},
	"privacy.section4.heading": { en: "4. Data Sharing", ar: "4. مشاركة البيانات" },
	"privacy.section4.paragraph": {
		en: "We do not sell or rent your personal data. We only share data with trusted third-party services (Brevo, Google Sheets, Calendly) when necessary to operate our platform.",
		ar: "نحن لا نبيع أو نؤجر بياناتك الشخصية. نشارك البيانات فقط مع خدمات موثوقة من جهات خارجية (Brevo وGoogle Sheets وCalendly) عند الضرورة لتشغيل منصتنا.",
	},
	"privacy.section5.heading": { en: "5. Data Security", ar: "5. أمان البيانات" },
	"privacy.section5.paragraph": {
		en: "We use encryption and secure platforms to protect your data. While no system is 100% secure, we do our best to safeguard your information.",
		ar: "نستخدم التشفير ومنصات آمنة لحماية بياناتك. ورغم أنه لا يوجد نظام آمن بنسبة 100%، نبذل قصارى جهدنا لحماية معلوماتك.",
	},
	"privacy.section6.heading": { en: "6. Your Rights", ar: "6. حقوقك" },
	"privacy.section6.paragraph": {
		en: 'You can request to access, correct, or delete your data at any time by reaching out to us on Instagram at <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.',
		ar: 'يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها في أي وقت من خلال التواصل معنا على إنستغرام على <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.',
	},
	"privacy.section7.heading": { en: "7. Policy Updates", ar: "7. تحديثات السياسة" },
	"privacy.section7.paragraph1": {
		en: "This Privacy Policy may change from time to time. The most recent version will always be posted on this page.",
		ar: "قد تتغير سياسة الخصوصية هذه من وقت لآخر. سيتم دائمًا نشر أحدث نسخة على هذه الصفحة.",
	},
	"privacy.section7.paragraph2": {
		en: 'If you have questions, please reach out to us on Instagram at <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.',
		ar: 'إذا كانت لديك أسئلة، يرجى التواصل معنا على إنستغرام على <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.',
	},

	// --- Terms & Conditions ---
	"terms.heading": { en: "Terms & Conditions", ar: "الشروط والأحكام" },
	"terms.intro": {
		en: "By accessing or using droparabia.com, you agree to the following terms and conditions:",
		ar: "من خلال الوصول إلى droparabia.com أو استخدامه، فإنك توافق على الشروط والأحكام التالية:",
	},
	"terms.section1.heading": { en: "1. Platform Access", ar: "1. الوصول إلى المنصة" },
	"terms.section1.paragraph": {
		en: "Upon successful registration, you will receive access to Droparabia's platform and resources for personal, non-transferable use. Sharing your access credentials or distributing any platform content is strictly prohibited.",
		ar: "بعد إتمام التسجيل بنجاح، ستحصل على وصول إلى منصة دروب أرابيا ومواردها للاستخدام الشخصي غير القابل للتحويل. يُمنع منعًا باتًا مشاركة بيانات الدخول الخاصة بك أو توزيع أي محتوى من المنصة.",
	},
	"terms.section2.heading": { en: "2. Refund Policy", ar: "2. سياسة الاسترداد" },
	"terms.section2.paragraph": {
		en: "We stand behind the value of our platform. If you have actively used Droparabia for 90 days and have not seen any results, you are eligible to request a full refund. Refund requests must be submitted within 90 days of your subscription date along with proof of platform usage. Refunds will not be granted for unused accounts or without demonstrated effort.",
		ar: "نحن واثقون بقيمة منصتنا. إذا استخدمت دروب أرابيا بفعالية لمدة 90 يومًا ولم تشهد أي نتائج، يحق لك طلب استرداد كامل. يجب تقديم طلبات الاسترداد خلال 90 يومًا من تاريخ اشتراكك مع تقديم إثبات لاستخدام المنصة. لن يُمنح الاسترداد للحسابات غير المستخدمة أو دون إثبات بذل جهد.",
	},
	"terms.section3.heading": { en: "3. Intellectual Property", ar: "3. الملكية الفكرية" },
	"terms.section3.paragraph": {
		en: "All platform materials on droparabia.com including training resources, guides, and tools are protected by copyright and intellectual property laws. You may not reproduce, republish, resell, or distribute any part of this content. Product listings sourced through Droparabia are provided for selling purposes only and remain the property of their respective suppliers.",
		ar: "جميع مواد المنصة على droparabia.com، بما فيها الموارد التدريبية والأدلة والأدوات، محمية بموجب قوانين حقوق النشر والملكية الفكرية. لا يجوز نسخ أو إعادة نشر أو إعادة بيع أو توزيع أي جزء من هذا المحتوى. قوائم المنتجات المتوفرة عبر دروب أرابيا مُقدَّمة لأغراض البيع فقط وتبقى ملكًا لمورديها.",
	},
	"terms.section4.heading": { en: "4. Account Suspension", ar: "4. تعليق الحساب" },
	"terms.section4.paragraph": {
		en: "We reserve the right to suspend or permanently revoke access to the platform, without refund, if any terms are violated — including but not limited to content misuse, inappropriate behavior, or account sharing.",
		ar: "نحتفظ بالحق في تعليق أو إلغاء الوصول إلى المنصة بشكل دائم، دون استرداد، في حال مخالفة أي من الشروط — بما في ذلك على سبيل المثال لا الحصر إساءة استخدام المحتوى أو السلوك غير اللائق أو مشاركة الحساب.",
	},
	"terms.contact": {
		en: 'For any questions or concerns, please reach out to us on Instagram at <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.',
		ar: 'لأي أسئلة أو استفسارات، يرجى التواصل معنا على إنستغرام على <a href="https://www.instagram.com/mjbusinessofficial" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">@mjbusinessofficial</a>.',
	},
};

export type Lang = "en" | "ar";
