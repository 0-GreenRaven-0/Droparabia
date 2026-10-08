/**
 * Rounded-hexagon path builder: each corner is pulled back along both of its edges and the
 * two points joined with a quadratic curve through the original corner.
 *
 * Header.astro carries its own copy of this for the Tools and Resources menus. This is the
 * version new code should import; that one is left alone rather than refactored underneath
 * working markup.
 */
export type Point = [number, number];

export function roundedHexPath(points: Point[], radius: number): string {
	const n = points.length;
	const lerp = (a: Point, b: Point, t: number): Point => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];

	const approach: Point[] = [];
	const leave: Point[] = [];
	for (let i = 0; i < n; i++) {
		const curr = points[i];
		const prev = points[(i - 1 + n) % n];
		const next = points[(i + 1) % n];
		const distPrev = Math.hypot(curr[0] - prev[0], curr[1] - prev[1]);
		const distNext = Math.hypot(next[0] - curr[0], next[1] - curr[1]);
		// Capped at half an edge, or adjacent corners would overlap on a small hexagon.
		approach.push(lerp(curr, prev, Math.min(radius / distPrev, 0.5)));
		leave.push(lerp(curr, next, Math.min(radius / distNext, 0.5)));
	}

	let d = `M ${leave[n - 1][0].toFixed(2)} ${leave[n - 1][1].toFixed(2)} `;
	for (let i = 0; i < n; i++) {
		d += `L ${approach[i][0].toFixed(2)} ${approach[i][1].toFixed(2)} `;
		d += `Q ${points[i][0].toFixed(2)} ${points[i][1].toFixed(2)} ${leave[i][0].toFixed(2)} ${leave[i][1].toFixed(2)} `;
	}
	return d + "Z";
}

/**
 * Six corners of a pointy-top hexagon of the given size (centre to corner), which is the
 * orientation used everywhere else on the site.
 */
export function hexCorners(cx: number, cy: number, size: number): Point[] {
	const halfWidth = (Math.sqrt(3) * size) / 2;
	return [
		[cx, cy - size],
		[cx + halfWidth, cy - size / 2],
		[cx + halfWidth, cy + size / 2],
		[cx, cy + size],
		[cx - halfWidth, cy + size / 2],
		[cx - halfWidth, cy - size / 2],
	];
}
