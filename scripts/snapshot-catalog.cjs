// One-off: pull the catalog data with a very generous timeout and write the snapshot the
// build falls back to. The backend is answering in 15-70s right now, far past the build's
// own timeout, so this is the only way to get good data on disk.
const fs = require("fs");
const path = require("path");

const WINNERS = "https://backend.droparabia.com/api/metrics/winners";
const CATALOG = "https://backend.droparabia.com/api/metrics/all/products";
const TIMEOUT = 180_000;

const get = async (url) => {
	const t0 = Date.now();
	const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT) });
	if (!res.ok) throw new Error(`${url} -> ${res.status}`);
	const json = await res.json();
	console.log(`  ${((Date.now() - t0) / 1000).toFixed(1)}s  ${url}`);
	return json;
};

(async () => {
	console.log("winners:");
	const first = await get(`${WINNERS}?page=1`);
	const last = Math.min(Number(first.last_page) || 1, 10);
	let winnerRows = Array.isArray(first.data) ? first.data : [];
	for (let p = 2; p <= last; p++) {
		const page = await get(`${WINNERS}?page=${p}`);
		winnerRows = winnerRows.concat(Array.isArray(page.data) ? page.data : []);
	}

	console.log("catalog:");
	const probe = await get(`${CATALOG}?limit=1&page=1`);
	const cats = Array.isArray(probe.categories) ? probe.categories : [];
	const categories = [];
	for (const c of cats) {
		const j = await get(`${CATALOG}?limit=1&page=1&category_id=${c.id}`);
		categories.push({ id: c.id, name: c.name, total: Number(j.products?.total) || 0 });
	}
	const firstPage = await get(`${CATALOG}?limit=12&page=1&search=`);

	const snapshot = {
		capturedAt: new Date().toISOString(),
		winnerRows,
		catalogTotal: Number(probe.products?.total) || 0,
		categories,
		firstPage: {
			rows: firstPage.products?.data ?? [],
			lastPage: Number(firstPage.products?.last_page) || 1,
			total: Number(firstPage.products?.total) || 0,
		},
	};

	const out = path.join("src", "data", "catalog-snapshot.json");
	fs.writeFileSync(out, JSON.stringify(snapshot));
	const kb = (fs.statSync(out).size / 1024).toFixed(0);
	console.log(
		`\nwrote ${out} (${kb} KB): ${winnerRows.length} winner rows, ${categories.length} categories, ${snapshot.firstPage.rows.length} first-page products`,
	);
})();
