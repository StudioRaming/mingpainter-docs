// Turns a screenshot that has not been captured yet into one muted line.
//
// Pages reference /img/captures/<name>.png from the start, and
// scripts/sync-captures.mjs writes a placeholder PNG for every name that has no
// reviewed capture yet, so the build never breaks. A 960x540 grey box per
// missing shot made the beta pages look unfinished, so a name listed in
// pending-captures.json (written by the same script) renders as a single
// "screenshot coming" line carrying the image's alt text instead. When the
// capture lands, the next sync drops the name from the list and the image shows.

import fs from 'node:fs';
import path from 'node:path';

const LABEL = {
  ko: '스크린샷 준비 중',
  en: 'Screenshot coming soon',
  ja: 'スクリーンショット準備中',
};
const REF = /\/img\/captures\/([A-Za-z0-9._-]+\.png)$/;

function localeOf(filePath) {
  const m = /[\\/]i18n[\\/]([a-z]{2})[\\/]/.exec(filePath || '');
  return m && LABEL[m[1]] ? m[1] : 'ko';
}

function replaceImages(node, label, pending) {
  if (!node.children) return;
  node.children = node.children.map((child) => {
    if (child.type === 'image') {
      const m = REF.exec(child.url || '');
      if (m && pending.has(m[1])) {
        const text = child.alt ? `${label}: ${child.alt}` : label;
        return {
          type: 'emphasis',
          data: {hName: 'span', hProperties: {className: ['capture-pending']}},
          children: [{type: 'text', value: text}],
        };
      }
      return child;
    }
    replaceImages(child, label, pending);
    return child;
  });
}

export default function pendingCaptures(options = {}) {
  const listPath = options.list || path.resolve('src/remark/pending-captures.json');
  return (tree, file) => {
    // read per file, not once: `docusaurus start` keeps the plugin loaded while captures arrive
    let pending;
    try {
      pending = new Set(JSON.parse(fs.readFileSync(listPath, 'utf8')));
    } catch {
      return;
    }
    if (pending.size === 0) return;
    replaceImages(tree, LABEL[localeOf(file.path || file.history?.[0])], pending);
  };
}
