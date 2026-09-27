#!/usr/bin/env node
/**
 * ensure-phone-country.js
 * ------------------------------------------------------------------
 * Every page that asks for a phone number must let the visitor say which
 * country that number is from. This script makes that true at build time and,
 * with --check, fails the build when it is not.
 *
 * WHY
 * On 27 Sep 2026 a callback arrived as "+31 252 222 8345 - check this number":
 * a visitor, most likely in North Carolina, filled in the form on
 * /coding-classes-for-kids-netherlands. That page, like about 780 other city
 * and country pages, never loaded the country picker and sent its own country
 * with every lead, so the number was filed under the Netherlands and could not
 * be rung. The one-off inject-country-code-script.js had covered the pages
 * that existed when it ran; every page generated since went without.
 *
 * WHAT IT DOES, per published page with a phone box
 *   1. Adds /js/country-code-selector.js. The picker attaches to every phone
 *      box, starts on the visitor's own country (device timezone), and at
 *      submit time writes the chosen country into the request over whatever
 *      the page's own script hard-coded. See the "at submit time" section of
 *      src/js/country-code-selector.js.
 *   2. When the page's script hard-codes one country (countryIso: 'NL'),
 *      declares it as <meta name="mac-lead-country" content="NL">. The picker
 *      falls back to it when the timezone says nothing, and uses it to know
 *      that the page's own length check was written for that country.
 *   3. Puts every phone script on the same ?v= (VERSION in
 *      bump-country-code-cachebust.js), so a returning visitor never runs a new
 *      page against last week's cached picker.
 *
 * Idempotent: a second run writes nothing.
 *
 * Usage:  node scripts/ensure-phone-country.js          (fix)
 *         node scripts/ensure-phone-country.js --check  (report, exit 1 on gaps)
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CHECK = process.argv.includes('--check');

// One version for the three scripts that shape a phone number, owned by the
// cache-bust script so there is a single place to bump it.
const bumpSrc = fs.readFileSync(path.join(__dirname, 'bump-country-code-cachebust.js'), 'utf8');
const VERSION = (bumpSrc.match(/const VERSION = '([^']+)'/) || [])[1];
if (!VERSION) throw new Error('VERSION not found in bump-country-code-cachebust.js');
const PHONE_SCRIPTS = ['country-code-selector.js', 'callback-modal.js', 'mainbundle.js'];

// Everything that is published as a page. Components and templates are
// partials: they reach visitors inside these files.
const DIRS = ['src/pages', 'content/blog/generated', 'content/courses/generated', 'content/resources/generated'];

const PHONE_INPUT = /<input\b[^>]*\b(?:type=["']?tel\b|inputmode=["']?tel\b|autocomplete=["']?tel(?:-national)?\b)[^>]*>/i;
const PICKER_TAG = /<script\b[^>]*src=["']\/js\/country-code-selector\.js[^"']*["'][^>]*>\s*<\/script>/i;
const META = /<meta\s+name=["']mac-lead-country["']\s+content=["']([A-Z]{2})["']\s*\/?>/i;

function walk(dir, out) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

/** The single country a page's own script hard-codes, or null. */
function hardCodedCountry(html) {
  const isos = new Set();
  const re = /countryIso\s*:\s*['"]([A-Z]{2})['"]/g;
  let m;
  while ((m = re.exec(html))) isos.add(m[1]);
  return isos.size === 1 ? [...isos][0] : null;
}

function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

const report = { pages: 0, phonePages: 0, pickerAdded: 0, metaSet: 0, versioned: 0, written: 0, gaps: [] };

for (const dir of DIRS) {
  for (const file of walk(path.join(ROOT, dir), [])) {
    report.pages++;
    const original = fs.readFileSync(file, 'utf8');
    if (!PHONE_INPUT.test(original)) continue;
    report.phonePages++;
    const rel = path.relative(ROOT, file).replace(/\\/g, '/');
    let html = original;

    // 1. The picker.
    if (!PICKER_TAG.test(html)) {
      if (CHECK) report.gaps.push(rel + ': no country picker');
      else if (/<\/body>/i.test(html)) {
        html = html.replace(/<\/body>(?![\s\S]*<\/body>)/i,
          `    <script src="/js/country-code-selector.js?v=${VERSION}" defer></script>\n</body>`);
        report.pickerAdded++;
      } else report.gaps.push(rel + ': no </body> to add the picker to');
    }

    // 2. The page's own country.
    const iso = hardCodedCountry(html);
    const meta = html.match(META);
    if (iso && (!meta || meta[1] !== iso)) {
      if (CHECK) report.gaps.push(rel + ': hard-codes ' + iso + ' but does not declare mac-lead-country');
      else {
        const tag = `<meta name="mac-lead-country" content="${iso}">`;
        if (meta) html = html.replace(META, tag);
        else html = html.replace(/<\/head>/i, `    ${tag}\n</head>`);
        report.metaSet++;
      }
    }

    // 2b. A lead form whose handler reads a field that is not on the page
    //     throws after preventDefault and sends nothing. The 13 Jul 2026 city
    //     redesign did exactly that to 130 pages (it renamed the area dropdown
    //     to cityArea); nobody noticed for ten weeks. Never fixed silently:
    //     the page has to be corrected by hand.
    const leadScripts = (html.match(/<script(?![^>]*src=)[^>]*>[\s\S]*?<\/script>/gi) || [])
      .filter((s) => /api\/(contact\/submit|callback\/request|leads)|wa\.me/.test(s));
    const missingIds = new Set();
    for (const s of leadScripts) {
      const re = /getElementById\(['"]([\w-]+)['"]\)\.(?:value|checked)/g;
      let m;
      while ((m = re.exec(s))) {
        if (!new RegExp(`id=["']${escapeRe(m[1])}["']`).test(html)) missingIds.add(m[1]);
      }
    }
    if (missingIds.size) {
      report.gaps.push(rel + ': lead form reads missing field(s) ' + [...missingIds].join(', ') + ' - the form cannot submit');
    }

    // 3. One version across the phone scripts.
    for (const name of PHONE_SCRIPTS) {
      const re = new RegExp(`src=(["'])/js/${escapeRe(name)}(?:\\?v=[^"']*)?\\1`, 'g');
      const want = `src="/js/${name}?v=${VERSION}"`;
      const before = html;
      html = html.replace(re, want);
      if (html !== before) {
        if (CHECK) report.gaps.push(rel + ': ' + name + ' not on ?v=' + VERSION);
        else report.versioned++;
      }
    }

    if (!CHECK && html !== original) {
      fs.writeFileSync(file, html, 'utf8');
      report.written++;
    }
  }
}

console.log(`phone-country ${CHECK ? 'check' : 'build'} (scripts ?v=${VERSION})`);
console.log('  pages scanned        :', report.pages);
console.log('  pages with phone box :', report.phonePages);
if (!CHECK) {
  console.log('  picker added         :', report.pickerAdded);
  console.log('  country meta set     :', report.metaSet);
  console.log('  script tags versioned:', report.versioned);
  console.log('  files written        :', report.written);
}
if (report.gaps.length) {
  console.error(`\n❌ ${report.gaps.length} problem(s):`);
  report.gaps.slice(0, 40).forEach((g) => console.error('   ' + g));
  if (report.gaps.length > 40) console.error(`   ...and ${report.gaps.length - 40} more`);
  process.exitCode = 1;
} else if (CHECK) {
  console.log('  ✅ every page with a phone box has the picker, its country and current scripts');
}
