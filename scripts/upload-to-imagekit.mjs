#!/usr/bin/env node
// One-off local script: uploads every image under public/ to ImageKit and prints back the
// resulting URLs (also written to scripts/imagekit-urls.json). Run it yourself locally —
// it reads IMAGEKIT_PRIVATE_KEY from .env, which is never committed and never read at
// build/deploy time. After it runs, hand the printed mapping back so the code can be
// updated to reference the ImageKit URLs (with ?tr= transforms) instead of /public paths.
//
// Usage: node scripts/upload-to-imagekit.mjs

import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const PUBLIC_DIR = join(ROOT, "public");
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif"]);

function loadEnv(path) {
	const env = {};
	let raw;
	try {
		raw = readFileSync(path, "utf8");
	} catch {
		return env;
	}
	for (const line of raw.split("\n")) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith("#")) continue;
		const eq = trimmed.indexOf("=");
		if (eq === -1) continue;
		const key = trimmed.slice(0, eq).trim();
		let value = trimmed.slice(eq + 1).trim();
		if (
			(value.startsWith("'") && value.endsWith("'")) ||
			(value.startsWith('"') && value.endsWith('"'))
		) {
			value = value.slice(1, -1);
		}
		env[key] = value;
	}
	return env;
}

const env = loadEnv(join(ROOT, ".env"));
const PRIVATE_KEY = env.IMAGEKIT_PRIVATE_KEY;

if (!PRIVATE_KEY) {
	console.error("IMAGEKIT_PRIVATE_KEY is missing or empty in .env — add it and re-run.");
	process.exit(1);
}

function walk(dir) {
	const entries = readdirSync(dir);
	let files = [];
	for (const entry of entries) {
		const full = join(dir, entry);
		const stat = statSync(full);
		if (stat.isDirectory()) {
			files = files.concat(walk(full));
		} else if (IMAGE_EXTENSIONS.has(extname(entry).toLowerCase())) {
			files.push(full);
		}
	}
	return files;
}

async function uploadFile(filePath) {
	const relPath = relative(PUBLIC_DIR, filePath).split("\\").join("/");
	const buffer = readFileSync(filePath);
	const fileName = relPath.split("/").pop();
	// ImageKit's folder parameter rejects spaces — sanitize each path segment.
	const folderSegments = relPath
		.split("/")
		.slice(0, -1)
		.map((seg) => seg.replace(/\s+/g, "_"));
	const folder = "/" + folderSegments.join("/");

	const form = new FormData();
	form.append("file", new Blob([buffer]), fileName);
	form.append("fileName", fileName);
	form.append("useUniqueFileName", "false");
	form.append("folder", folder === "/" ? "/droparabia" : `/droparabia${folder}`);

	const res = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
		method: "POST",
		headers: {
			Authorization: "Basic " + Buffer.from(`${PRIVATE_KEY}:`).toString("base64"),
		},
		body: form,
	});

	const data = await res.json();
	if (!res.ok) {
		throw new Error(`${relPath}: ${data.message ?? res.statusText}`);
	}
	return { path: `/${relPath}`, url: data.url };
}

async function main() {
	const files = walk(PUBLIC_DIR);
	console.log(`Found ${files.length} image(s) under public/. Uploading...\n`);

	const results = [];
	const errors = [];

	for (const file of files) {
		const relPath = relative(PUBLIC_DIR, file).split("\\").join("/");
		try {
			const { path, url } = await uploadFile(file);
			results.push({ path, url });
			console.log(`✓ ${path} -> ${url}`);
		} catch (err) {
			errors.push(relPath);
			console.error(`✗ ${relPath}: ${err.message}`);
		}
	}

	const outPath = join(ROOT, "scripts", "imagekit-urls.json");
	writeFileSync(outPath, JSON.stringify(results, null, 2));
	console.log(`\nDone. ${results.length} uploaded, ${errors.length} failed.`);
	console.log(`URL mapping written to ${relative(ROOT, outPath)}`);
}

main();
