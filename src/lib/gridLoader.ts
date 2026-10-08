/**
 * Holds the loader over a card grid until its photos have actually arrived.
 *
 * The opening cards are rendered at build time, so the markup is there instantly while the
 * images are still in flight — without this the section appears as a grid of empty boxes
 * and nothing says it is still working.
 *
 * Only images near the viewport are waited on. The rest are `loading="lazy"` and will not
 * start until they are scrolled towards, so waiting on those would hold the loader up until
 * the timeout every single time.
 */
export function showUntilImagesSettle(
	grid: HTMLElement,
	loading: HTMLElement | null,
	options: { reducedMotion?: boolean; minMs?: number; maxMs?: number } = {},
): void {
	const { reducedMotion = false, minMs = 600, maxMs = 4000 } = options;

	const nearViewport = (el: Element) => {
		const r = el.getBoundingClientRect();
		return r.top < window.innerHeight * 1.25 && r.bottom > -200;
	};

	const pending = Array.from(grid.querySelectorAll("img")).filter((img) => !img.complete && nearViewport(img));
	if (pending.length === 0) return;

	if (loading) loading.hidden = false;
	if (!reducedMotion) grid.classList.add("cards-swapping");

	const shownAt = performance.now();
	let finished = false;
	const finish = () => {
		if (finished) return;
		finished = true;
		// Never flash: once it is up, it stays up long enough to read as deliberate.
		const wait = Math.max(0, minMs - (performance.now() - shownAt));
		window.setTimeout(() => {
			if (loading) loading.hidden = true;
			grid.classList.remove("cards-swapping");
		}, wait);
	};

	let left = pending.length;
	const tick = () => {
		if (--left <= 0) finish();
	};
	for (const img of pending) {
		img.addEventListener("load", tick, { once: true });
		// A broken image is still a settled one; the grid must not stay hidden behind it.
		img.addEventListener("error", tick, { once: true });
	}

	// A slow or stalled image can never be allowed to hide the products indefinitely.
	window.setTimeout(finish, maxMs);
}
