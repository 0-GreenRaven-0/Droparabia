// One product card, in one place. The catalog page renders the opening rows at build time and
// every row after that in the browser, so the markup has to come from a single source or the
// two drift apart the first time a class changes.
import { currentLang, translations } from "./i18n";

/** A product reduced to exactly what a card shows, whatever endpoint it came from. */
export interface CardProduct {
	name: string;
	category: string;
	image: string;
	/** Winning score, 0–100. Null for plain catalog rows, which aren't scored. */
	score: number | null;
	trendPercentage: number | null;
	trendUp: boolean;
	sellingPrice: number | null;
	profit: number | null;
}

export function escapeHtml(value: unknown): string {
	return String(value ?? "").replace(
		/[&<>"']/g,
		(c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
	);
}

const money = (n: number | null) => (n === null || !Number.isFinite(n) ? null : `$${n.toFixed(2)}`);

// renderCard runs both at build time and in the browser. currentLang() reads localStorage,
// which doesn't exist during the build — there, English is the right answer anyway, since the
// server-rendered HTML is English and the language applier swaps it on load.
function label(key: string, fallback: string): string {
	const entry = translations[key];
	if (!entry) return fallback;
	let lang: "en" | "ar" | "fr" = "en";
	try {
		lang = currentLang();
	} catch {
		/* build time */
	}
	return entry[lang] || fallback;
}

// The photo is positioned out of flow inside its square frame. In flow, the image's natural
// height becomes the min-content height of the flex item and overrides aspect-ratio, so a tall
// photo stretches its card's frame and a wide one leaves it short — the frames have to be
// identical, since the whole grid is read at a glance. object-cover fills that square, so a
// photo that is not square loses a little off its long edge rather than sitting letterboxed.
export function renderCard(p: CardProduct, index = 0): string {
	const price = money(p.sellingPrice);
	const profit = money(p.profit);
	const trend = Number.isFinite(p.trendPercentage as number);
	// Capped: past a dozen the stagger stops adding anything and just delays the last card.
	// `.map(renderCard)` passes the array index straight through as the second argument.
	const delay = Math.min(index, 11);
	return `<article style="--card-i:${delay}" class="winners-card flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_-2px_rgba(0,0,0,0.12),0_15px_35px_-18px_rgba(0,0,0,0.25)] dark:bg-neutral-900">
	<div class="relative aspect-square w-full shrink-0 overflow-hidden bg-white dark:bg-neutral-800">
		<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" width="600" height="600" loading="lazy" decoding="async" class="absolute inset-0 h-full w-full object-cover" />
		${p.score ? `<span class="absolute end-2 top-2 rounded-full bg-primary px-2.5 py-1 font-ibrand text-xs text-white shadow-[0_4px_10px_-2px_rgba(0,30,255,0.5)]">${p.score}</span>` : ""}
	</div>
	<div class="flex flex-1 flex-col p-3 text-left sm:p-4">
		${p.category ? `<p class="font-helvetica text-[0.65rem] tracking-wide text-neutral-500 uppercase sm:text-xs dark:text-neutral-400">${escapeHtml(p.category)}</p>` : ""}
		<h3 class="mt-1 line-clamp-2 min-h-[2.6rem] font-ibrand text-sm text-neutral-900 sm:min-h-[3rem] sm:text-base dark:text-white">${escapeHtml(p.name)}</h3>
		${
			trend
				? `<p class="mt-1 font-helvetica text-xs font-semibold ${p.trendUp ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}">${p.trendUp ? "↑" : "↓"} ${p.trendPercentage}% <span class="font-normal text-neutral-500 dark:text-neutral-400">${escapeHtml(label("winners.trend", "demand"))}</span></p>`
				: ""
		}
		<dl class="mt-auto space-y-0.5 pt-3 font-helvetica text-xs sm:text-sm">
			${price ? `<div class="flex items-baseline justify-between gap-2"><dt class="shrink-0 text-neutral-600 dark:text-neutral-400">${escapeHtml(label("winners.sell", "Sells for"))}</dt><dd class="shrink-0 font-semibold text-neutral-900 dark:text-white">${price}</dd></div>` : ""}
			${profit ? `<div class="flex items-baseline justify-between gap-2"><dt class="shrink-0 text-neutral-600 dark:text-neutral-400">${escapeHtml(label("winners.profit", "Est. profit"))}</dt><dd class="shrink-0 font-bold text-emerald-600 dark:text-emerald-400">${profit}</dd></div>` : ""}
		</dl>
	</div>
</article>`;
}

/**
 * Normalises a raw row from /api/metrics/all/products.
 *
 * Profit is derived only where a real cost exists: 89 catalog products carry cost 0, and
 * "profit = the whole selling price" would be a lie rather than a missing figure.
 */
export function fromCatalogRow(row: any): CardProduct {
	const sell = Number.parseFloat(row?.selling_price);
	const cost = Number.parseFloat(row?.cost);
	return {
		name: String(row?.name ?? "").trim(),
		category: String(row?.category_name ?? "").trim(),
		image: row?.gallery?.[0]?.image_url ?? "",
		score: null,
		trendPercentage: null,
		trendUp: true,
		sellingPrice: Number.isFinite(sell) ? sell : null,
		profit: Number.isFinite(sell) && Number.isFinite(cost) && cost > 0 ? sell - cost : null,
	};
}

/** Drafts, deleted rows and anything without a photo never reach a card. */
export function isRenderable(row: any): boolean {
	return !row?.is_draft && !row?.is_deleted && Boolean(row?.gallery?.length) && Boolean(row?.name);
}
