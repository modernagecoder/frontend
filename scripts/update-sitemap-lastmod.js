#!/usr/bin/env node
/**
 * update-sitemap-lastmod.js — rewrite sitemap.xml <lastmod> values from the truth.
 *
 * Why: Google honours <lastmod> only while it stays accurate. Once it catches the field
 * lying it stops trusting it for the whole site. sitemap.xml had 175 URLs frozen at
 * 2026-03-22 — including the homepage and all 131 city pages, every one of which was
 * rebuilt months later. That forfeits recrawl priority exactly where we just invested.
 *
 * Truth, in order of preference per URL:
 *   /blog/<slug>     -> meta.dateModified in the source blog JSON (author-declared)
 *   /courses/<slug>  -> meta.dateModified in the source course JSON, else its git date
 *   everything else  -> git date of the page file it routes to, per _redirects
 *
 * Never invents "today". A URL whose source can't be resolved keeps its existing value
 * and is reported, so gaps are visible rather than silently stamped.
 *
 * lastmod must mean "the content changed", not "a file was touched". Mechanical sweeps
 * (relinking CTAs, stripping meta keywords, regenerating twins) touch hundreds of files
 * without changing what the page says — counting those would fake freshness just as badly
 * as stamping today. Pass --ignore-commits to exclude them by commit-subject regex.
 *
 * Usage:
 *   node scripts/update-sitemap-lastmod.js            # dry run, prints what would change
 *   node scripts/update-sitemap-lastmod.js --apply    # write sitemap.xml
 *   node scripts/update-sitemap-lastmod.js --apply --prune-resources
 *        also drop /resources/* URLs already served by sitemap-resources.xml
 *   node scripts/update-sitemap-lastmod.js --ignore-commits "^Phase 0\."
 *        ignore mechanical commits when dating a page
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const SITEMAP = path.join(ROOT, 'sitemap.xml');
const BASE = 'https://learn.modernagecoders.com';
const APPLY = process.argv.includes('--apply');
const PRUNE_RESOURCES = process.argv.includes('--prune-resources');

const ignoreIdx = process.argv.indexOf('--ignore-commits');
const IGNORE_COMMITS = ignoreIdx !== -1 ? process.argv[ignoreIdx + 1] : null;

const isDate = (d) => /^\d{4}-\d{2}-\d{2}$/.test(d || '');

// --- git date cache ---------------------------------------------------------
// Returns the date of the last commit touching relPath, skipping commits whose subject
// matches IGNORE_COMMITS (mechanical sweeps that didn't change the content).
const gitCache = new Map();
function gitDate(relPath) {
  if (gitCache.has(relPath)) return gitCache.get(relPath);
  const args = ['log', '-1', '--format=%cs'];
  if (IGNORE_COMMITS) args.push('--invert-grep', '--grep', IGNORE_COMMITS, '--regexp-ignore-case');
  args.push('--', relPath);
  let out = null;
  try {
    const r = execFileSync('git', args, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (isDate(r)) out = r;
  } catch (_) {
    out = null;
  }
  gitCache.set(relPath, out);
  return out;
}

// --- route map: clean URL -> source file (from _redirects) ------------------
function buildRouteMap() {
  const map = new Map();
  const txt = fs.readFileSync(path.join(ROOT, '_redirects'), 'utf8');
  for (const line of txt.split('\n')) {
    const s = line.trim();
    if (!s || s.startsWith('#')) continue;
    const parts = s.split(/\s+/);
    if (parts.length < 2) continue;
    const [from, to, code] = parts;
    // only true serves (200), not redirects; skip wildcards
    if (code && !code.startsWith('200')) continue;
    if (from.includes('*') || from.includes(':')) continue;
    if (!to.startsWith('/')) continue;
    const file = to.replace(/^\//, '').split('?')[0];
    if (file.endsWith('.html')) map.set(from, file);
  }
  return map;
}

// --- content sources --------------------------------------------------------
function loadJsonSlugMap(dir, { exclude = [] } = {}) {
  const map = new Map();
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return map;
  for (const f of fs.readdirSync(full)) {
    if (!f.endsWith('.json') || exclude.includes(f)) continue;
    try {
      const data = JSON.parse(fs.readFileSync(path.join(full, f), 'utf8'));
      const meta = data.meta || data;
      const slug = data.slug || meta.slug || path.basename(f, '.json');
      map.set(slug, {
        file: `${dir}/${f}`,
        date: isDate(meta.dateModified) ? meta.dateModified : isDate(meta.date) ? meta.date : null,
      });
    } catch (_) {
      /* verify-sitemap.js reports parse errors */
    }
  }
  return map;
}

const routes = buildRouteMap();
const blogs = loadJsonSlugMap('content/blog/data');
const courses = loadJsonSlugMap('content/courses/data', { exclude: ['courses-config.json'] });

// --- resolve the true date for one URL --------------------------------------
function trueDate(loc) {
  const urlPath = loc.replace(BASE, '') || '/';

  // Routes whose target isn't a tracked src/pages file, so git can't date them directly.
  // The blog index is generated output (gitignored) — it changes when a post does.
  // /love is a built React bundle — date it from the lovewall source.
  if (urlPath === '/blog' || urlPath === '/blog/') {
    const dates = [...blogs.values()].map((b) => b.date).filter(Boolean).sort();
    return dates.pop() || null;
  }
  if (urlPath === '/love' || urlPath === '/love/') return gitDate('lovewall');

  const blogMatch = urlPath.match(/^\/blog\/(.+?)\/?$/);
  if (blogMatch) {
    const hit = blogs.get(blogMatch[1]);
    if (hit) return hit.date || gitDate(hit.file);
    return null;
  }

  const courseMatch = urlPath.match(/^\/courses\/([^/]+)\/?$/);
  if (courseMatch) {
    const hit = courses.get(courseMatch[1]);
    if (hit) return hit.date || gitDate(hit.file);
    // /courses/coding/kids etc. are real routed pages, fall through to routes
  }

  const file = routes.get(urlPath) || routes.get(urlPath.replace(/\/$/, ''));
  if (file) return gitDate(file);

  if (urlPath === '/') return gitDate('src/pages/index.html');
  return null;
}

// --- rewrite ----------------------------------------------------------------
let xml = fs.readFileSync(SITEMAP, 'utf8');

// Optionally drop /resources/* blocks already covered by sitemap-resources.xml
let pruned = 0;
if (PRUNE_RESOURCES) {
  xml = xml.replace(
    /[ \t]*<url>\s*<loc>https:\/\/learn\.modernagecoders\.com\/resources[^<]*<\/loc>[\s\S]*?<\/url>\n?/g,
    () => {
      pruned += 1;
      return '';
    }
  );
}

const changes = [];
const unresolved = [];
let same = 0;

xml = xml.replace(/<url>([\s\S]*?)<\/url>/g, (block) => {
  const locM = block.match(/<loc>([^<]+)<\/loc>/);
  if (!locM) return block;
  const loc = locM[1].trim();
  const want = trueDate(loc);
  if (!want) {
    unresolved.push(loc);
    return block;
  }
  const curM = block.match(/<lastmod>([^<]*)<\/lastmod>/);
  const cur = curM ? curM[1].trim() : null;
  if (cur === want) {
    same += 1;
    return block;
  }
  changes.push({ loc, from: cur || '(none)', to: want });
  return curM
    ? block.replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${want}</lastmod>`)
    : block.replace(/(<loc>[^<]+<\/loc>)/, `$1\n    <lastmod>${want}</lastmod>`);
});

// --- report -----------------------------------------------------------------
console.log(`${APPLY ? 'Applying' : 'Dry run'} — sitemap.xml lastmod from git/content dates\n`);
if (PRUNE_RESOURCES) console.log(`  pruned /resources URLs (served by sitemap-resources.xml): ${pruned}`);
console.log(`  already correct : ${same}`);
console.log(`  updated         : ${changes.length}`);
console.log(`  unresolved      : ${unresolved.length}`);

const byMove = {};
changes.forEach((c) => {
  const k = `${c.from} -> ${c.to}`;
  byMove[k] = (byMove[k] || 0) + 1;
});
const top = Object.entries(byMove).sort((a, b) => b[1] - a[1]).slice(0, 12);
if (top.length) {
  console.log('\n  most common corrections:');
  top.forEach(([k, n]) => console.log(`    ${String(n).padStart(4)}x  ${k}`));
}
if (unresolved.length) {
  console.log('\n  unresolved (left untouched — no source file found):');
  unresolved.slice(0, 12).forEach((u) => console.log(`    ${u}`));
  if (unresolved.length > 12) console.log(`    …and ${unresolved.length - 12} more`);
}

if (APPLY) {
  fs.writeFileSync(SITEMAP, xml, 'utf8');
  console.log('\n✓ sitemap.xml written.');
} else {
  console.log('\n(dry run — re-run with --apply to write)');
}
