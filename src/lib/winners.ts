// Live product data from the Droparabia backend, read at BUILD time (this is a static site —
// there is no server at runtime). The section it feeds therefore refreshes on each deploy, not
// on each visit, and shows the date it was last scored so the figures are never passed off as
// more current than they are.
//
// The endpoint is public (no auth, Access-Control-Allow-Origin: *), so this could equally run
// in the browser. It does not, deliberately: fetching at build keeps the cards in the HTML —
// no loading state, no layout shift, and the content is there for crawlers.

const ENDPOINT = "https://backend.droparabia.com/api/metrics/winners";
/** Safety net: the API reports last_page, but a runaway value shouldn't stall a build. */
const MAX_PAGES = 10;
const TIMEOUT_MS = 10_000;

/** The slice of the API payload this site actually renders. */
export interface Winner {
	productId: number;
	name: string;
	category: string;
	image: string;
	/** 0–100, rounded from the API's "84.00" string form. */
	score: number;
	/** Percentage change, paired with `trendUp`. Null when the API omits it. */
	trendPercentage: number | null;
	trendUp: boolean;
	sellingPrice: number | null;
	profit: number | null;
	/** ISO date this product was last scored, for the "updated" line. */
	checkedAt: string;
}

// ai_recommendation arrives as a JSON *string*, not an object, and has been seen malformed —
// a bad blob should cost that product its extra fields, not break the page.
function parseBlob(raw: unknown): Record<string, unknown> {
	if (typeof raw !== "string") return (raw as Record<string, unknown>) ?? {};
	try {
		return JSON.parse(raw) as Record<string, unknown>;
	} catch {
		return {};
	}
}

function num(value: unknown): number | null {
	const n = typeof value === "string" ? Number.parseFloat(value) : typeof value === "number" ? value : NaN;
	return Number.isFinite(n) ? n : null;
}

async function fetchPage(page: number): Promise<{ rows: unknown[]; lastPage: number }> {
	const res = await fetch(`${ENDPOINT}?page=${page}`, { signal: AbortSignal.timeout(TIMEOUT_MS) });
	if (!res.ok) throw new Error(`${ENDPOINT}?page=${page} → ${res.status}`);
	const json = (await res.json()) as { data?: unknown[]; last_page?: number };
	return { rows: Array.isArray(json.data) ? json.data : [], lastPage: Number(json.last_page) || 1 };
}

/**
 * Highest-scoring winning products, de-duplicated and ready to render.
 *
 * Returns [] on any failure rather than throwing: the backend being down or slow must not
 * fail a deploy, and the section simply doesn't render when there's nothing to show.
 */
export async function getWinners(limit = 8): Promise<Winner[]> {
	let rows: any[] = [];
	try {
		const first = await fetchPage(1);
		rows = first.rows;
		for (let page = 2; page <= Math.min(first.lastPage, MAX_PAGES); page++) {
			rows = rows.concat((await fetchPage(page)).rows);
		}
	} catch (err) {
		console.warn(`[winners] live product data unavailable, section will be skipped — ${(err as Error).message}`);
		return [];
	}

	// A product can be scored more than once; keep only its most recent check.
	const latest = new Map<number, any>();
	for (const row of rows) {
		if (!row?.product?.name || !row.product?.gallery?.[0]?.image_url) continue;
		if (row.is_winning !== 1) continue;
		const seen = latest.get(row.product_id);
		if (!seen || new Date(row.checked_at) > new Date(seen.checked_at)) latest.set(row.product_id, row);
	}

	return [...latest.values()]
		.sort((a, b) => Number(b.overall_score) - Number(a.overall_score) || +new Date(b.checked_at) - +new Date(a.checked_at))
		.slice(0, limit)
		.map((row): Winner => {
			const rec = parseBlob(row.ai_recommendation);
			const trend = num(rec.trend_percentage);
			return {
				productId: row.product_id,
				name: String(row.product.name).trim(),
				category: String(row.product.category_name ?? "").trim(),
				image: row.product.gallery[0].image_url,
				score: Math.round(Number(row.overall_score) || 0),
				trendPercentage: trend,
				trendUp: rec.trend_direction !== "down",
				// The API's own estimate is preferred; the raw product price is the fallback.
				sellingPrice: num(rec.estimated_selling_price) ?? num(row.product.selling_price),
				profit: num(rec.estimated_profit),
				checkedAt: String(row.checked_at ?? ""),
			};
		});
}

// ---------------------------------------------------------------- full catalog

const CATALOG_ENDPOINT = "https://backend.droparabia.com/api/metrics/all/products";

export interface CatalogCategory {
	id: number;
	name: string;
	/** How many products the category actually holds, for the chip's count. */
	total: number;
}

/**
 * Category list with per-category totals, read at build time to render the filter chips.
 *
 * Totals come from one `limit=1` request per category — the paginator reports `total` for the
 * filtered set, so this costs 16 tiny requests rather than downloading all 565 products.
 * Categories with nothing in them are dropped: a chip that leads to an empty grid is a dead end.
 */
export async function getCatalogCategories(): Promise<{ categories: CatalogCategory[]; total: number }> {
	try {
		const res = await fetch(`${CATALOG_ENDPOINT}?limit=1&page=1`, { signal: AbortSignal.timeout(TIMEOUT_MS) });
		if (!res.ok) throw new Error(`categories → ${res.status}`);
		const json = (await res.json()) as { products?: { total?: number }; categories?: { id: number; name: string }[] };
		const total = Number(json.products?.total) || 0;
		const raw = Array.isArray(json.categories) ? json.categories : [];

		const counted = await Promise.all(
			raw.map(async (c) => {
				try {
					const r = await fetch(`${CATALOG_ENDPOINT}?limit=1&page=1&category_id=${c.id}`, {
						signal: AbortSignal.timeout(TIMEOUT_MS),
					});
					const j = (await r.json()) as { products?: { total?: number } };
					return { id: c.id, name: c.name, total: Number(j.products?.total) || 0 };
				} catch {
					return { id: c.id, name: c.name, total: 0 };
				}
			}),
		);
		return { categories: counted.filter((c) => c.total > 0).sort((a, b) => b.total - a.total), total };
	} catch (err) {
		console.warn(`[winners] catalog categories unavailable — ${(err as Error).message}`);
		return { categories: [], total: 0 };
	}
}

export interface CatalogPage {
	/** Raw rows, straight from the API — the caller normalises them. */
	rows: any[];
	lastPage: number;
	total: number;
}

/**
 * One page of the catalog, read at build time so the page ships with products already in the
 * HTML. Every page after the first is fetched in the browser instead: 563 products with their
 * galleries is megabytes of JSON, far too much to inline to serve one filter click.
 */
export async function getCatalogPage(limit = 12, page = 1): Promise<CatalogPage> {
	try {
		const res = await fetch(`${CATALOG_ENDPOINT}?limit=${limit}&page=${page}&search=`, {
			signal: AbortSignal.timeout(TIMEOUT_MS),
		});
		if (!res.ok) throw new Error(`catalog page ${page} → ${res.status}`);
		const json = (await res.json()) as { products?: { data?: any[]; last_page?: number; total?: number } };
		return {
			rows: Array.isArray(json.products?.data) ? json.products!.data! : [],
			lastPage: Number(json.products?.last_page) || 1,
			total: Number(json.products?.total) || 0,
		};
	} catch (err) {
		console.warn(`[winners] catalog page unavailable — ${(err as Error).message}`);
		return { rows: [], lastPage: 1, total: 0 };
	}
}
