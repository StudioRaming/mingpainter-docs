// Copies the captured screenshots into static/img/captures and writes a
// placeholder for every referenced image that has no capture yet.
//
// The capture lane writes final PNGs into CAPTURE_SRC. Pages reference them
// as /img/captures/<name>.png, so a page still renders (with a clearly marked
// placeholder) before its capture exists, and the build never breaks on a
// missing image.
//
//   node scripts/sync-captures.mjs
//   CAPTURE_SRC=<dir> node scripts/sync-captures.mjs

import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\//, '')), '..');
const SRC = process.env.CAPTURE_SRC || 'E:/Unity/_mingpainter/work/S7/docs-captures/final';
const DEST = path.join(ROOT, 'static', 'img', 'captures');
const DOCS = path.join(ROOT, 'docs');
const REF = /\/img\/captures\/([A-Za-z0-9._-]+\.png)/g;

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (p.endsWith('.md')) acc.push(p);
  }
  return acc;
}

// 1. Every page reference, deduplicated.
const referenced = new Set();
for (const file of walk(DOCS)) {
  for (const m of fs.readFileSync(file, 'utf8').matchAll(REF)) referenced.add(m[1]);
}

fs.mkdirSync(DEST, {recursive: true});

// 2. Copy the captures that exist.
let copied = 0;
if (fs.existsSync(SRC)) {
  for (const name of fs.readdirSync(SRC)) {
    if (!name.toLowerCase().endsWith('.png')) continue;
    fs.copyFileSync(path.join(SRC, name), path.join(DEST, name));
    copied++;
  }
} else {
  console.warn(`capture source not found: ${SRC} (all images become placeholders)`);
}

// 3. Placeholders for referenced images that are still missing.
const missing = [...referenced].filter((n) => !fs.existsSync(path.join(DEST, n))).sort();
if (missing.length) {
  const res = spawnSync('python', [path.join(ROOT, 'scripts', 'placeholder-capture.py'), DEST, ...missing], {
    encoding: 'utf8',
  });
  if (res.status !== 0) {
    console.error(res.stderr || res.stdout);
    process.exit(1);
  }
}

console.log(`captures: referenced ${referenced.size}, copied ${copied}, placeholders ${missing.length}`);
if (missing.length) console.log(`placeholders: ${missing.join(', ')}`);
