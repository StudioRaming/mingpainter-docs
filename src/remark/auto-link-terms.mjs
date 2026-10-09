// Links MingPainter terms to the page that explains them.
//
// Cross-links written by hand rot: a term gets renamed in the tool, or a page
// moves, and the prose keeps pointing at the old thing. This plugin owns one
// glossary instead, so a term is defined in exactly one place and every page
// that mentions it links there.
//
// Rules that keep the result readable rather than a wall of blue:
//   - only the FIRST mention of a term on a page becomes a link
//   - never inside headings, code, or an existing link
//   - never a self-link: a page does not link to itself
//   - longest term wins, so "내부 2D 경계" never degrades into "2D 경계"

import path from 'node:path';

// term -> route. Keep terms distinctive; a bare word like "그림자" would match
// everywhere and link nothing useful.
const GLOSSARY = {
  // MingPainter glossary entries are added here when their anchors exist;
  // every entry must point at a heading that the build can resolve.
};

const TERMS = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);

// Docs live at the site root (routeBasePath '/'), so the route is the path
// under docs/ with the extension dropped; intro.md owns '/'.
function routeOf(filePath, docsDir) {
  const rel = path
    .relative(docsDir, filePath)
    .split(path.sep)
    .join('/')
    .replace(/\.mdx?$/, '');
  return rel === 'intro' ? '/' : '/' + rel;
}

// An ASCII term must not match inside a longer word: "UV4" should not light up
// inside "UV40". Korean has no such boundary, and needs none.
function boundaryOk(text, start, term) {
  if (!/^[\x20-\x7E]+$/.test(term)) return true;
  const before = text[start - 1];
  const after = text[start + term.length];
  const wordish = /[A-Za-z0-9_]/;
  if (before && wordish.test(before) && /^[A-Za-z0-9_]/.test(term)) return false;
  if (after && wordish.test(after) && /[A-Za-z0-9_]$/.test(term)) return false;
  return true;
}

export default function autoLinkTerms(options = {}) {
  const docsDir = options.docsDir;

  return (tree, file) => {
    const selfRoute = docsDir && file.path ? routeOf(file.path, docsDir) : null;
    const linked = new Set();

    const walk = (node, inSkip) => {
      if (!node || !Array.isArray(node.children)) return;

      // Admonition titles arrive as a paragraph flagged directiveLabel.
      const children = node.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const skip =
          inSkip ||
          child.type === 'heading' ||
          child.type === 'link' ||
          child.type === 'linkReference' ||
          child.type === 'inlineCode' ||
          child.type === 'code' ||
          child.type === 'mdxJsxTextElement' ||
          child.type === 'mdxFlowExpression' ||
          child.type === 'mdxTextExpression' ||
          (child.data && child.data.directiveLabel === true);

        if (child.type === 'text' && !skip) {
          const replacement = linkify(child.value);
          if (replacement) {
            children.splice(i, 1, ...replacement);
            i += replacement.length - 1;
          }
          continue;
        }
        walk(child, skip);
      }
    };

    function linkify(text) {
      const out = [];
      let cursor = 0;

      while (cursor < text.length) {
        let bestIndex = -1;
        let bestTerm = null;

        for (const term of TERMS) {
          if (linked.has(term)) continue;
          // Compare the page, not the anchor: a glossary entry pointing at a
          // section of the current page is still a self-link.
          if (GLOSSARY[term].split('#')[0] === selfRoute) continue;
          const at = text.indexOf(term, cursor);
          if (at < 0) continue;
          if (!boundaryOk(text, at, term)) continue;
          // TERMS is longest-first, so the first hit at the earliest index wins.
          if (bestIndex < 0 || at < bestIndex) {
            bestIndex = at;
            bestTerm = term;
          }
        }

        if (bestIndex < 0) break;

        if (bestIndex > cursor) {
          out.push({type: 'text', value: text.slice(cursor, bestIndex)});
        }
        out.push({
          type: 'link',
          url: GLOSSARY[bestTerm],
          children: [{type: 'text', value: bestTerm}],
          data: {hProperties: {className: 'ming-term'}},
        });
        linked.add(bestTerm);
        cursor = bestIndex + bestTerm.length;
      }

      if (!out.length) return null;
      if (cursor < text.length) {
        out.push({type: 'text', value: text.slice(cursor)});
      }
      return out;
    }

    walk(tree, false);
  };
}
