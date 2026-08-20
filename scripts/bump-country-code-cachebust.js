/**
 * Bumps the cache-bust query on the phone-handling scripts across every page.
 *
 * WHY THIS IS NEEDED
 * Netlify serves /*.js with `max-age=86400, stale-while-revalidate=604800`, so
 * a returning visitor keeps running the copy their browser already has for a
 * day, and can be served a stale copy for a week while it revalidates behind
 * them. A behaviour change therefore does not reach the people who use the
 * site most until the URL itself changes.
 *
 * That is not theoretical. On 2026-08-20 the fix for phone numbers being
 * truncated to ten digits shipped, the file on the server was correct, and the
 * live homepage still chopped the end off an eleven-digit Chinese number,
 * because the browser never asked for the new file.
 *
 * WHY THREE FILES
 * The original version of this script handled country-code-selector.js alone.
 * The number a parent types is now shaped by three scripts working together -
 * the selector (which owns the country and handles pasting), and the two
 * copies of the callback modal (mainbundle.js on the homepage, callback-modal.js
 * everywhere else). Bumping one and not the others leaves a browser running a
 * mismatched pair, which is worse than running the old set consistently.
 *
 * Idempotent: existing ?v= values are replaced with the VERSION below, and a
 * tag with no ?v= at all gains one.
 *
 * Usage: node scripts/bump-country-code-cachebust.js
 */
const fs = require('fs');
const path = require('path');

// Bump this whenever any of the scripts below changes behaviour.
const VERSION = '20260820a';

// Every script that participates in reading a phone number off a form. They
// share a version on purpose - see "WHY THREE FILES" above.
const SCRIPTS = [
  'country-code-selector.js',
  'callback-modal.js',
  'mainbundle.js',
];

const FRONTEND_ROOT = path.resolve(__dirname, '..');
const SEARCH_DIRS = [
  path.join(FRONTEND_ROOT, 'src', 'pages'),
  path.join(FRONTEND_ROOT, 'components'),
  path.join(FRONTEND_ROOT, 'content'),
];

/** Matches src="/js/<name>", with or without an existing ?v=... */
function patternFor(name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`src=("|')\\/js\\/${escaped}(?:\\?v=[^"']*)?\\1`, 'g');
}

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
  let updated = original;

  for (const name of SCRIPTS) {
    updated = updated.replace(patternFor(name), `src="/js/${name}?v=${VERSION}"`);
  }

  if (updated === original) return false;
  fs.writeFileSync(file, updated, 'utf8');
  return true;
}

function main() {
  const files = [];
  for (const d of SEARCH_DIRS) walk(d, files);

  let changed = 0;
  for (const f of files) if (update(f)) changed++;

  console.log(`phone-script cache-bust → ?v=${VERSION}`);
  console.log('  scripts         :', SCRIPTS.join(', '));
  console.log('  files changed   :', changed);
  console.log('  already current :', files.length - changed);
  console.log('  total scanned   :', files.length);
}

main();
