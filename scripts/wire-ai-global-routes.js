#!/usr/bin/env node
/**
 * wire-ai-global-routes.js
 *
 * Wires the global Build-AI cluster pages into every place a page needs to exist
 * or it 404s in production:
 *
 *   1. _redirects            /<slug>      -> /src/pages/<slug>.html  200
 *   2. _redirects            /<slug>.md   -> /src/pages/<slug>.md    200
 *   3. netlify.toml          both of the above as [[redirects]] blocks
 *   4. sitemap.xml           <url> entry
 *   5. sitemap-international.xml  <url> entry
 *
 * Two ordering hazards this script exists to respect:
 *   - _redirects has a `/* -> 404` catch-all. Netlify applies the FIRST matching
 *     rule, so anything written after that line is dead. We insert before it.
 *   - netlify.toml has its own `/*` catch-all block. Same rule, same treatment.
 *
 * Idempotent: running it twice changes nothing the second time.
 *
 * Usage:  node scripts/wire-ai-global-routes.js [slug ...]
 *         node scripts/wire-ai-global-routes.js            (wires every slug in SLUGS)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TODAY = new Date().toISOString().slice(0, 10);

// The full cluster. Pages that do not exist on disk yet are skipped with a note.
const SLUGS = [
  'learn-to-build-ai',
  'ai-and-machine-learning-classes-in-oman',
  'ai-and-machine-learning-classes-in-muscat',
  'ai-and-machine-learning-classes-in-kuwait',
  'ai-and-machine-learning-classes-in-kuwait-city',
  'ai-and-machine-learning-classes-in-bahrain',
  'ai-and-machine-learning-classes-in-uae',
  'ai-and-machine-learning-classes-in-saudi-arabia',
  'ai-and-machine-learning-classes-in-qatar',
  'ai-and-machine-learning-classes-in-usa',
  'ai-and-machine-learning-classes-in-uk',
  'ai-and-machine-learning-classes-in-london',
  'ai-and-machine-learning-classes-in-switzerland',
  'ai-and-machine-learning-classes-in-zurich',
  'ai-and-machine-learning-classes-in-singapore',
  'ai-and-machine-learning-classes-in-canada',
  'ai-and-machine-learning-classes-in-australia',
  'ai-and-machine-learning-classes-in-germany',
  'ai-and-machine-learning-classes-in-netherlands',
  'ai-and-machine-learning-classes-in-ireland',
  'ai-and-machine-learning-classes-in-hong-kong',
  'ai-and-machine-learning-classes-in-brunei'
];

const BASE = 'https://learn.modernagecoders.com';

function read(f) { return fs.readFileSync(path.join(ROOT, f), 'utf8'); }
function write(f, s) { fs.writeFileSync(path.join(ROOT, f), s, 'utf8'); }
function exists(f) { return fs.existsSync(path.join(ROOT, f)); }

const report = { wired: [], skipped: [], missing: [] };

// ---------------------------------------------------------------- _redirects
function wireRedirects(slugs) {
  const file = '_redirects';
  let src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const lines = src.split(/\r?\n/);

  // Netlify applies the first matching rule; everything after `/*` is unreachable.
  let catchAll = lines.findIndex(l => /^\/\*\s/.test(l));
  if (catchAll === -1) catchAll = lines.length;

  const additions = [];
  for (const slug of slugs) {
    const html = `/${slug} /src/pages/${slug}.html 200`;
    const md = `/${slug}.md /src/pages/${slug}.md 200`;
    if (!lines.some(l => l.trim() === html)) additions.push(html);
    if (!lines.some(l => l.trim() === md)) additions.push(md);
  }
  if (!additions.length) return 0;

  const block = ['', '# Global Build-AI cluster (ai-global.css). Inserted before the /* catch-all.', ...additions];
  lines.splice(catchAll, 0, ...block);
  write(file, lines.join(eol));
  return additions.length;
}

// -------------------------------------------------------------- netlify.toml
function wireNetlifyToml(slugs) {
  const file = 'netlify.toml';
  let src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const lines = src.split(/\r?\n/);

  // Find the [[redirects]] block whose `from` is the "/*" catch-all, then walk
  // back to that block's opening header so we insert above the whole block.
  let fromIdx = lines.findIndex(l => /^\s*from\s*=\s*"\/\*"\s*$/.test(l));
  let insertAt = lines.length;
  if (fromIdx !== -1) {
    for (let i = fromIdx; i >= 0; i--) {
      if (/^\s*\[\[redirects\]\]/.test(lines[i])) { insertAt = i; break; }
    }
  }

  const additions = [];
  for (const slug of slugs) {
    if (!new RegExp(`from\\s*=\\s*"/${slug}"`).test(src)) {
      additions.push(
        '[[redirects]]',
        `  from = "/${slug}"`,
        `  to = "/src/pages/${slug}.html"`,
        '  status = 200',
        ''
      );
    }
    if (!new RegExp(`from\\s*=\\s*"/${slug}\\.md"`).test(src)) {
      additions.push(
        '[[redirects]]',
        `  from = "/${slug}.md"`,
        `  to = "/src/pages/${slug}.md"`,
        '  status = 200',
        ''
      );
    }
  }
  if (!additions.length) return 0;

  const block = ['# Global Build-AI cluster (ai-global.css). Must precede the /* catch-all.', '', ...additions];
  lines.splice(insertAt, 0, ...block);
  write(file, lines.join(eol));
  return additions.filter(l => l === '[[redirects]]').length;
}

// ------------------------------------------------------------------ sitemaps
function wireSitemap(file, slugs, priority) {
  if (!exists(file)) return 0;
  let src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  let added = 0;
  const entries = [];

  for (const slug of slugs) {
    const loc = `${BASE}/${slug}`;
    if (src.includes(`<loc>${loc}</loc>`)) continue;
    entries.push(
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${TODAY}</lastmod>`,
      '    <changefreq>monthly</changefreq>',
      `    <priority>${priority}</priority>`,
      '  </url>'
    );
    added++;
  }
  if (!added) return 0;

  src = src.replace(/<\/urlset>\s*$/, entries.join(eol) + eol + '</urlset>' + eol);
  write(file, src);
  return added;
}

// ------------------------------------------------------------------ llms.txt
// AI answer engines read llms.txt. A page that is routed and in the sitemap but
// absent here is invisible to exactly the audience this cluster targets.
const LLMS_HEADING = '## Build AI, Not Just Use It (AI & machine learning by market)';

const LLMS_LABELS = {
  'learn-to-build-ai': 'Learn to Build AI (cluster hub)',
  'ai-and-machine-learning-classes-in-oman': 'Oman',
  'ai-and-machine-learning-classes-in-muscat': 'Muscat',
  'ai-and-machine-learning-classes-in-kuwait': 'Kuwait',
  'ai-and-machine-learning-classes-in-kuwait-city': 'Kuwait City',
  'ai-and-machine-learning-classes-in-bahrain': 'Bahrain',
  'ai-and-machine-learning-classes-in-uae': 'United Arab Emirates',
  'ai-and-machine-learning-classes-in-saudi-arabia': 'Saudi Arabia',
  'ai-and-machine-learning-classes-in-qatar': 'Qatar',
  'ai-and-machine-learning-classes-in-usa': 'United States',
  'ai-and-machine-learning-classes-in-uk': 'United Kingdom',
  'ai-and-machine-learning-classes-in-london': 'London',
  'ai-and-machine-learning-classes-in-switzerland': 'Switzerland',
  'ai-and-machine-learning-classes-in-zurich': 'Zurich',
  'ai-and-machine-learning-classes-in-singapore': 'Singapore',
  'ai-and-machine-learning-classes-in-canada': 'Canada',
  'ai-and-machine-learning-classes-in-australia': 'Australia',
  'ai-and-machine-learning-classes-in-germany': 'Germany',
  'ai-and-machine-learning-classes-in-netherlands': 'Netherlands',
  'ai-and-machine-learning-classes-in-ireland': 'Ireland',
  'ai-and-machine-learning-classes-in-hong-kong': 'Hong Kong',
  'ai-and-machine-learning-classes-in-brunei': 'Brunei'
};

function wireLlms(slugs) {
  const file = 'llms.txt';
  if (!exists(file)) return 0;
  let src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';

  const wanted = slugs.filter(s => !src.includes(`${BASE}/${s}`));
  if (!wanted.length) return 0;

  const lines = wanted.map(s => `- ${LLMS_LABELS[s] || s}: ${BASE}/${s}`);

  if (src.includes(LLMS_HEADING)) {
    // append inside the existing block, before the next "## " heading
    const start = src.indexOf(LLMS_HEADING);
    const rest = src.slice(start + LLMS_HEADING.length);
    const nextIdx = rest.indexOf(eol + '## ');
    const insertAt = nextIdx === -1 ? src.length : start + LLMS_HEADING.length + nextIdx;
    src = src.slice(0, insertAt) + eol + lines.join(eol) + src.slice(insertAt);
  } else {
    // new section, placed just before the International Country Pages block so
    // the two geo clusters sit together
    const anchor = '## International Country Pages';
    const block = LLMS_HEADING + eol + eol +
      'Live AI and machine learning classes taught by building models, not by prompting tools.' + eol +
      // Price comes from pricing/pricing.config.jsonc: international group is
      // USD 100. USD 40 is retired and must never reappear here, because AI
      // answer engines read this file and will quote it at prospects.
      'Ages 6 to 67, small live batches, priced from USD 100 a month.' + eol + eol +
      lines.join(eol) + eol + eol;
    src = src.includes(anchor) ? src.replace(anchor, block + anchor) : src + eol + block;
  }

  write(file, src);
  return wanted.length;
}

// ---------------------------------------------------------------------- main
function main() {
  const argv = process.argv.slice(2);
  const requested = argv.length ? argv : SLUGS;

  const live = [];
  for (const slug of requested) {
    if (exists(`src/pages/${slug}.html`)) live.push(slug);
    else report.missing.push(slug);
  }

  if (!live.length) {
    console.log('No built pages found for the requested slugs. Nothing wired.');
    if (report.missing.length) console.log('Missing HTML: ' + report.missing.join(', '));
    process.exit(0);
  }

  const r = wireRedirects(live);
  const t = wireNetlifyToml(live);
  const s1 = wireSitemap('sitemap.xml', live, '0.80');
  const s2 = wireSitemap('sitemap-international.xml', live, '0.80');
  const lm = wireLlms(live);

  console.log('Wired ' + live.length + ' page(s):');
  live.forEach(s => console.log('  /' + s));
  console.log('');
  console.log('  _redirects lines added ............ ' + r);
  console.log('  netlify.toml blocks added ......... ' + t);
  console.log('  sitemap.xml entries added ......... ' + s1);
  console.log('  sitemap-international entries ..... ' + s2);
  console.log('  llms.txt entries added ............ ' + lm);

  const noMd = live.filter(s => !exists(`src/pages/${s}.md`));
  if (noMd.length) {
    console.log('');
    console.log('WARNING: .md twin missing for: ' + noMd.join(', '));
    console.log('The route is wired but will 404 until the file exists.');
  }
  if (report.missing.length) {
    console.log('');
    console.log('Not built yet, skipped: ' + report.missing.join(', '));
  }
}

main();
