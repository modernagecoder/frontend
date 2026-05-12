/**
 * Bumps the cache-bust query on every <script src="/js/country-code-selector.js">
 * tag across the site. Netlify's immutable cache header (max-age=31536000) means
 * browsers will never re-fetch the file otherwise.
 *
 * Idempotent: existing ?v= values are replaced with the new VERSION below.
 *
 * Usage: node scripts/bump-country-code-cachebust.js
 */
const fs = require('fs');
const path = require('path');

const VERSION = '20260513c';

const FRONTEND_ROOT = path.resolve(__dirname, '..');
const SEARCH_DIRS = [
  path.join(FRONTEND_ROOT, 'src', 'pages'),
  path.join(FRONTEND_ROOT, 'components'),
  path.join(FRONTEND_ROOT, 'content'),
];

// Matches: src="/js/country-code-selector.js" — with or without an existing ?v=...
const PATTERN = /src=("|')\/js\/country-code-selector\.js(?:\?v=[^"']*)?\1/g;
const REPLACEMENT = `src="/js/country-code-selector.js?v=${VERSION}"`;

function walk(dir, out) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      walk(full, out);
    } else if (entry.isFile() && full.endsWith('.html')) {
      out.push(full);
    }
  }
}

function update(file) {
  const original = fs.readFileSync(file, 'utf8');
  if (!PATTERN.test(original)) return { status: 'skip-not-included' };
  PATTERN.lastIndex = 0; // reset because /g
  const updated = original.replace(PATTERN, REPLACEMENT);
  if (updated === original) return { status: 'skip-already-current' };
  fs.writeFileSync(file, updated, 'utf8');
  return { status: 'updated' };
}

function main() {
  const files = [];
  for (const d of SEARCH_DIRS) walk(d, files);

  const counts = { updated: 0, 'skip-not-included': 0, 'skip-already-current': 0 };
  for (const f of files) counts[update(f).status]++;

  console.log(`country-code-selector.js cache-bust → ?v=${VERSION}`);
  console.log('  updated         :', counts.updated);
  console.log('  already current :', counts['skip-already-current']);
  console.log('  not included    :', counts['skip-not-included']);
  console.log('  total scanned   :', files.length);
}

main();
