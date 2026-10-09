// Copies the captured screenshots into static/img/captures and writes a
// placeholder for every referenced image that has no capture yet.
//
// The capture lane writes final PNGs into final/; only the ones a reviewer
// copied into approved/ (CAPTURE_SRC) are published. Pages reference them as
// /img/captures/<name>.png, so a page still renders before its capture exists,
// and the build never breaks on a missing image. Every referenced name without
// an approved capture goes into src/remark/pending-captures.json, which
// src/remark/pending-captures.mjs renders as one "screenshot coming" line.
//
//   node scripts/sync-captures.mjs
//   CAPTURE_SRC=<dir> node scripts/sync-captures.mjs

import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\//, '')), '..');
const SRC = process.env.CAPTURE_SRC || 'E:/Unity/_mingpainter/work/S7/docs-captures/approved';
const PENDING = path.join(ROOT, 'src', 'remark', 'pending-captures.json');
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

// 1. Every page reference (ko docs and the en/ja translations), deduplicated.
const referenced = new Set();
const pages = walk(DOCS);
const I18N = path.join(ROOT, 'i18n');
if (fs.existsSync(I18N)) walk(I18N, pages);
for (const file of pages) {
  for (const m of fs.readFileSync(file, 'utf8').matchAll(REF)) referenced.add(m[1]);
}

fs.mkdirSync(DEST, {recursive: true});

// 2. Copy the captures that exist.
let copied = 0;
const approved = new Set();
if (fs.existsSync(SRC)) {
  for (const name of fs.readdirSync(SRC)) {
    if (!name.toLowerCase().endsWith('.png')) continue;
    fs.copyFileSync(path.join(SRC, name), path.join(DEST, name));
    approved.add(name);
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

// 4. Names still waiting for an approved capture (a placeholder PNG from an earlier sync counts as waiting).
const pending = [...referenced].filter((n) => !approved.has(n)).sort();
fs.writeFileSync(PENDING, JSON.stringify(pending, null, 2) + '\n');

console.log(`captures: referenced ${referenced.size}, copied ${copied}, placeholders ${missing.length}, pending ${pending.length}`);
if (missing.length) console.log(`placeholders: ${missing.join(', ')}`);
