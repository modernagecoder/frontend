#!/usr/bin/env node
/**
 * wire-coding-global-routes.js
 *
 * Wires the international growth cluster into every place a page must exist or
 * it 404s in production:
 *
 *   1. _redirects                 /<slug>     -> /src/pages/<slug>.html  200
 *   2. _redirects                 /<slug>.md  -> /src/pages/<slug>.md    200
 *   3. netlify.toml               both of the above as [[redirects]] blocks
 *   4. sitemap.xml                <url> entry
 *   5. sitemap-international.xml  <url> entry
 *   6. llms.txt                   listed under its own heading
 *
 * llms.txt wiring lives here deliberately, so a page cannot be routed without
 * also being visible to the AI answer engines this cluster is written for.
 *
 * Two ordering hazards this script exists to respect:
 *   - _redirects has a `/* -> 404` catch-all. Netlify applies the FIRST matching
 *     rule, so anything written after that line is dead. We insert before it.
 *   - netlify.toml has its own `/*` catch-all block. Same rule, same treatment.
 *
 * Idempotent: running it twice changes nothing the second time.
 *
 * Spec: docs/superpowers/specs/2026-08-15-international-growth-cluster-design.md
 *
 * Usage:  node scripts/wire-coding-global-routes.js [slug ...]
 *         node scripts/wire-coding-global-routes.js          (every built slug)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TODAY = new Date().toISOString().slice(0, 10);
const BASE = 'https://learn.modernagecoders.com';

// The full cluster, in build order. Pages not yet on disk are skipped with a note.
// Label is what appears in llms.txt.
const MARKETS = [
  // Tier 2: sub-national spokes
  ['coding-classes-in-new-jersey',       'New Jersey, USA'],
  ['coding-classes-in-ontario',          'Ontario, Canada'],
  ['coding-classes-in-texas',            'Texas, USA'],
  ['coding-classes-in-california',       'California, USA'],
  ['coding-classes-in-new-york',         'New York State, USA'],
  ['coding-classes-in-illinois',         'Illinois, USA'],
  ['coding-classes-in-virginia',         'Virginia, USA'],
  ['coding-classes-in-washington',       'Washington State, USA'],
  ['coding-classes-in-georgia',          'Georgia, USA'],
  ['coding-classes-in-maryland',         'Maryland, USA'],
  ['coding-classes-in-british-columbia', 'British Columbia, Canada'],
  ['coding-classes-in-alberta',          'Alberta, Canada'],
  ['coding-classes-in-leicester',        'Leicester, UK'],
  ['coding-classes-in-birmingham',       'Birmingham, UK'],
  // Tier 1: markets that had an AI page but no coding page
  ['coding-classes-in-oman',             'Oman'],
  ['coding-classes-in-muscat',           'Muscat'],
  ['coding-classes-in-kuwait',           'Kuwait'],
  ['coding-classes-in-bahrain',          'Bahrain'],
  ['coding-classes-in-hong-kong',        'Hong Kong'],
  ['coding-classes-in-netherlands',      'Netherlands'],
  // Oman cluster: 13 Muscat metropolitan districts, 9 cities, 10 governorates
  ['coding-classes-in-bawshar',                   'Bawshar, Muscat, Oman'],
  ['coding-classes-in-seeb',                      'Seeb, Muscat, Oman'],
  ['coding-classes-in-muttrah',                   'Muttrah, Muscat, Oman'],
  ['coding-classes-in-qurum',                     'Qurum, Muscat, Oman'],
  ['coding-classes-in-al-mouj',                   'Al Mouj, Muscat, Oman'],
  ['coding-classes-in-madinat-al-sultan-qaboos',  'Madinat Al Sultan Qaboos, Muscat, Oman'],
  ['coding-classes-in-al-khuwair',                'Al Khuwair, Muscat, Oman'],
  ['coding-classes-in-al-ghubrah',                'Al Ghubrah, Muscat, Oman'],
  ['coding-classes-in-azaiba',                    'Azaiba, Muscat, Oman'],
  ['coding-classes-in-madinat-al-irfan',          'Madinat Al Irfan and Airport Heights, Muscat, Oman'],
  ['coding-classes-in-mawaleh',                   'Mawaleh, Muscat, Oman'],
  ['coding-classes-in-al-hail',                   'Al Hail, Muscat, Oman'],
  ['coding-classes-in-al-khoudh',                 'Al Khoudh, Muscat, Oman'],
  ['coding-classes-in-sohar',                     'Sohar, Al Batinah North, Oman'],
  ['coding-classes-in-barka',                     'Barka, Al Batinah South, Oman'],
  ['coding-classes-in-salalah',                   'Salalah, Dhofar, Oman'],
  ['coding-classes-in-nizwa',                     'Nizwa, Ad Dakhiliyah, Oman'],
  ['coding-classes-in-sur',                       'Sur, Ash Sharqiyah South, Oman'],
  ['coding-classes-in-ibra',                      'Ibra, Ash Sharqiyah North, Oman'],
  ['coding-classes-in-ibri',                      'Ibri, Adh Dhahirah, Oman'],
  ['coding-classes-in-duqm',                      'Duqm, Al Wusta, Oman'],
  ['coding-classes-in-khasab',                    'Khasab, Musandam, Oman'],
  ['coding-classes-in-dhofar',                    'Dhofar Governorate, Oman'],
  ['coding-classes-in-al-batinah-north',          'Al Batinah North Governorate, Oman'],
  ['coding-classes-in-al-batinah-south',          'Al Batinah South Governorate, Oman'],
  ['coding-classes-in-ad-dakhiliyah',             'Ad Dakhiliyah Governorate, Oman'],
  ['coding-classes-in-ash-sharqiyah-north',       'Ash Sharqiyah North Governorate, Oman'],
  ['coding-classes-in-ash-sharqiyah-south',       'Ash Sharqiyah South Governorate, Oman'],
  ['coding-classes-in-adh-dhahirah',              'Adh Dhahirah Governorate, Oman'],
  ['coding-classes-in-al-buraimi',                'Al Buraimi Governorate, Oman'],
  ['coding-classes-in-musandam',                  'Musandam Governorate, Oman'],
  ['coding-classes-in-al-wusta',                  'Al Wusta Governorate, Oman'],
  ['coding-classes-in-as-suwaiq',                     'As Suwaiq, Al Batinah North, Oman'],
  ['coding-classes-in-saham',                         'Saham, Al Batinah North, Oman'],
  ['coding-classes-in-al-amarat',                     'Al Amarat, Muscat, Oman'],
  ['coding-classes-in-rustaq',                        'Rustaq, Al Batinah South, Oman'],
  ['coding-classes-in-jalan-bani-bu-ali',             'Jalan Bani Bu Ali, Ash Sharqiyah South, Oman'],
  ['coding-classes-in-al-musanaah',                   'Al Musanaah, Al Batinah South, Oman'],
  ['coding-classes-in-bahla',                         'Bahla, Ad Dakhiliyah, Oman'],
  ['coding-classes-in-al-mudhaibi',                   'Al Mudhaibi, Ash Sharqiyah North, Oman'],
  ['coding-classes-in-al-khaburah',                   'Al Khaburah, Al Batinah North, Oman'],
  ['coding-classes-in-shinas',                        'Shinas, Al Batinah North, Oman'],
  ['coding-classes-in-samail',                        'Samail, Ad Dakhiliyah, Oman'],
  ['coding-classes-in-izki',                          'Izki, Ad Dakhiliyah, Oman'],
  ['coding-classes-in-liwa',                          'Liwa, Al Batinah North, Oman'],
  ['coding-classes-in-qurayyat',                      'Qurayyat, Muscat, Oman'],
  ['coding-classes-in-jalan-bani-bu-hassan',          'Jalan Bani Bu Hassan, Ash Sharqiyah South, Oman'],
  ['coding-classes-in-bidiyah',                       'Bidiyah, Ash Sharqiyah North, Oman'],
  ['coding-classes-in-al-kamil-wal-wafi',             'Al Kamil Wal Wafi, Ash Sharqiyah South, Oman'],
  // Brunei cluster: the country plus its four districts
  ['coding-classes-in-brunei',                    'Brunei Darussalam'],
  ['coding-classes-in-bandar-seri-begawan',       'Bandar Seri Begawan, Brunei'],
  ['coding-classes-in-kuala-belait',              'Kuala Belait, Belait, Brunei'],
  ['coding-classes-in-tutong',                    'Tutong, Brunei'],
  ['coding-classes-in-temburong',                 'Temburong, Brunei'],
  ['coding-classes-in-seria',                     'Seria, Belait, Brunei'],
  ['coding-classes-in-liang',                     'Liang and Lumut, Belait, Brunei'],
  ['coding-classes-in-gadong',                    'Gadong, Bandar Seri Begawan, Brunei'],
  ['coding-classes-in-jerudong',                  'Jerudong, Brunei-Muara, Brunei']
];

const SLUGS = MARKETS.map(m => m[0]);
const LABELS = Object.fromEntries(MARKETS);

function read(f) { return fs.readFileSync(path.join(ROOT, f), 'utf8'); }
function write(f, s) { fs.writeFileSync(path.join(ROOT, f), s, 'utf8'); }
function exists(f) { return fs.existsSync(path.join(ROOT, f)); }

const COMMENT = 'International growth cluster (coding-global.css). Must precede the /* catch-all.';

// ---------------------------------------------------------------- _redirects
function wireRedirects(slugs) {
  const file = '_redirects';
  const src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const lines = src.split(/\r?\n/);

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

  lines.splice(catchAll, 0, '', '# ' + COMMENT, ...additions);
  write(file, lines.join(eol));
  return additions.length;
}

// -------------------------------------------------------------- netlify.toml
function wireNetlifyToml(slugs) {
  const file = 'netlify.toml';
  const src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const lines = src.split(/\r?\n/);

  // Find the catch-all [[redirects]] block, then walk back to its header so the
  // insertion lands above the whole block rather than inside it.
  const fromIdx = lines.findIndex(l => /^\s*from\s*=\s*"\/\*"\s*$/.test(l));
  let insertAt = lines.length;
  if (fromIdx !== -1) {
    for (let i = fromIdx; i >= 0; i--) {
      if (/^\s*\[\[redirects\]\]/.test(lines[i])) { insertAt = i; break; }
    }
  }

  const additions = [];
  for (const slug of slugs) {
    if (!new RegExp(`from\\s*=\\s*"/${slug}"`).test(src)) {
      additions.push('[[redirects]]', `  from = "/${slug}"`, `  to = "/src/pages/${slug}.html"`, '  status = 200', '');
    }
    if (!new RegExp(`from\\s*=\\s*"/${slug}\\.md"`).test(src)) {
      additions.push('[[redirects]]', `  from = "/${slug}.md"`, `  to = "/src/pages/${slug}.md"`, '  status = 200', '');
    }
  }
  if (!additions.length) return 0;

  lines.splice(insertAt, 0, '# ' + COMMENT, '', ...additions);
  write(file, lines.join(eol));
  return additions.filter(l => l === '[[redirects]]').length;
}

// ------------------------------------------------------------------ sitemaps
function wireSitemap(file, slugs, priority) {
  if (!exists(file)) return 0;
  let src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
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
  }
  if (!entries.length) return 0;

  src = src.replace(/<\/urlset>\s*$/, entries.join(eol) + eol + '</urlset>' + eol);
  write(file, src);
  return entries.length / 6;
}

// ------------------------------------------------------------------ llms.txt
// AI answer engines read this file. A page that is routed and in the sitemap but
// absent here is invisible to exactly the audience this cluster targets.
const LLMS_HEADING = '## Coding Classes by State, Province & Market';

function wireLlms(slugs) {
  const file = 'llms.txt';
  if (!exists(file)) return 0;
  let src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';

  const wanted = slugs.filter(s => !src.includes(`${BASE}/${s}`));
  if (!wanted.length) return 0;

  const lines = wanted.map(s => `- ${LABELS[s] || s}: ${BASE}/${s}`);

  if (src.includes(LLMS_HEADING)) {
    const start = src.indexOf(LLMS_HEADING);
    const rest = src.slice(start + LLMS_HEADING.length);
    const nextIdx = rest.indexOf(eol + '## ');
    const insertAt = nextIdx === -1 ? src.length : start + LLMS_HEADING.length + nextIdx;
    src = src.slice(0, insertAt) + eol + lines.join(eol) + src.slice(insertAt);
  } else {
    // Sit next to the existing country pages so the geo clusters group together.
    const anchor = '## International Country Pages';
    // Prices come from pricing/pricing.config.jsonc. International is USD only:
    // group 100, one-to-one 150. Never write a retired figure into this file.
    const block = LLMS_HEADING + eol + eol +
      'Live online coding and mathematics for a specific state, province or market,' + eol +
      'mapped to that place\'s own curriculum standards. Ages 6 to 67.' + eol +
      'USD 100 a month small group, USD 150 a month one to one.' + eol + eol +
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

  const unknown = requested.filter(s => !SLUGS.includes(s));
  if (unknown.length) {
    console.error('Not in this cluster: ' + unknown.join(', '));
    console.error('Add it to MARKETS first, so llms.txt gets a proper label.');
    process.exit(2);
  }

  const live = [];
  const missing = [];
  for (const slug of requested) {
    if (exists(`src/pages/${slug}.html`)) live.push(slug);
    else missing.push(slug);
  }

  if (!live.length) {
    console.log('No built pages found for the requested slugs. Nothing wired.');
    if (missing.length) console.log('Missing HTML: ' + missing.join(', '));
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
  if (missing.length) {
    console.log('');
    console.log('Not built yet, skipped: ' + missing.join(', '));
  }
}

main();
