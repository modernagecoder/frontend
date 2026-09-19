#!/usr/bin/env node
'use strict';
/**
 * Build one country-cluster page (Netherlands, Ireland) from its content module.
 *
 *   node scripts/nl/build.js coding-classes-in-amstelveen
 *
 * Validates the module, renders the HTML and the .md twin, registers the page
 * in the five registries, wires routing, and prints the visible word count
 * using the same counting method as the gate.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const cg = require('./lib/render-cg');
const cgTwin = require('./lib/md-twin');
const ag = require('./lib/render-ag');
const registerCg = require('./register').register;
const registerAg = require('./register-ag').register;
const { contrast, PAPERS } = require('./lib/accent');

const ROOT = path.resolve(__dirname, '..', '..');
const slug = process.argv[2];
if (!slug) { console.error('usage: node scripts/nl/build.js <slug>'); process.exit(2); }

const MARKET_DIRS = ['nl', 'ie', 'uk'];
const modPath = MARKET_DIRS.map(d => path.join(ROOT, 'content', d, slug + '.js')).find(p => fs.existsSync(p));
if (!modPath) { console.error('no content module for ' + slug + ' in content/' + MARKET_DIRS.join(', content/')); process.exit(2); }
delete require.cache[require.resolve(modPath)];
const page = require(modPath);
const CLUSTER = page.cluster === 'ag' ? 'ag' : 'cg';
const render = CLUSTER === 'ag' ? ag.render : cg.render;
const twin = CLUSTER === 'ag' ? ag.twin : cgTwin.twin;
const plain = CLUSTER === 'ag' ? ag.plain : cg.plain;
const register = CLUSTER === 'ag' ? registerAg : registerCg;
const WIRE = CLUSTER === 'ag' ? 'wire-ai-global-routes.js' : 'wire-coding-global-routes.js';
const PREFIX = CLUSTER;

const FLOORS = { district: 1400, governorate: 1800, city: 2200, market: 3000 };
const ALLOWED_PROPS = /^(display|grid-template-columns|grid-template-areas|grid-column|grid-row|gap|row-gap|column-gap|align-items|justify-content|align-self|justify-self|flex|flex-direction|flex-wrap|order|padding(-top|-bottom|-left|-right|-block|-inline)?|margin(-top|-bottom|-left|-right|-block|-inline)?|max-width|min-width|width|font-size|font-weight|font-style|font-family|line-height|letter-spacing|text-transform|text-align|text-decoration|text-wrap|border(-top|-bottom|-left|-right)?|border(-top|-bottom|-left|-right)?-(width|style|color)|border-radius|color|background|background-color|font-variant-numeric|white-space|columns|column-count|column-gap|list-style|counter-reset|content|hyphens|word-spacing)$/;

function fail(msg) { console.error('BUILD FAIL: ' + msg); process.exit(1); }

// --- validation --------------------------------------------------------------
if (page.slug !== slug) fail(`module slug ${page.slug} != ${slug}`);
if (!/^[a-z]{2,4}$/.test(page.code)) fail('code must be 2 to 4 lowercase letters: ' + page.code);
if (!/^#[0-9A-F]{6}$/i.test(page.accent)) fail('accent must be a hex');
for (const p of PAPERS) { const c = contrast(page.accent, p); if (c < 4.5) fail(`accent ${page.accent} is ${c.toFixed(2)}:1 on ${p}`); }
if (!FLOORS[page.pageType]) fail('pageType must be district|governorate|city|market');
if (plain(page.title).length > 65) fail(`title ${plain(page.title).length} chars (>65)`);
if (page.description.length < 145 || page.description.length > 165) fail(`description ${page.description.length} chars (want 145-165)`);
if (page.picks.items.length !== (CLUSTER === 'ag' ? 3 : 4)) fail('exactly ' + (CLUSTER === 'ag' ? 3 : 4) + ' picks');
if (page.faq.items.length < 8 || page.faq.items.length > 12) fail('8 to 12 FAQ items');
if (CLUSTER === 'cg') {
  if ((page.dossier.requiredMentions || []).length < 8) fail('dossier needs 8+ requiredMentions');
  if ((page.dossier.sources || []).length < 3) fail('dossier needs 3+ sources');
  if (!page.dossier.localProject) fail('dossier needs localProject');
}
if (page.faq.items.some(f => /—/.test(f.a) || /—/.test(f.q))) fail('em dash in FAQ');

// personality block rules (build guide section 19)
const cssLines = page.personalityCss.trim().split(/\r?\n/).filter(l => l.trim());
if (cssLines.length > 40) fail(`personality block ${cssLines.length} lines (>40)`);
const selectors = [...page.personalityCss.matchAll(/([^{}]+)\{/g)].map(m => m[1].trim()).filter(s => !s.startsWith('@'));
for (const sel of selectors) {
  for (const part of sel.split(',')) if (!part.trim().startsWith(`.${PREFIX}-root.${PREFIX}-${page.code}`)) fail('unprefixed selector: ' + part.trim());
}
for (const m of page.personalityCss.matchAll(/([a-z-]+)\s*:\s*([^;{}]+);/g)) {
  const prop = m[1], val = m[2];
  if (!ALLOWED_PROPS.test(prop)) fail(`personality block property not on the whitelist: ${prop}`);
  if (/!important/.test(val)) fail('!important in personality block');
  if (/#[0-9a-f]{3,6}\b/i.test(val)) fail('raw hex in personality block: ' + val);
  if (/(fixed|absolute|translate|scale|rotate|blur|gradient|url\()/.test(val)) fail('banned value in personality block: ' + val);
}
// (?<!-)transform: text-transform is whitelisted; bare transform is banned.
if (/@media|position\s*:|z-index|(?<!-)transform|(?<!-)filter|box-shadow|animation|opacity/.test(page.personalityCss)) fail('banned property in personality block');

// every requiredMention must be a literal string in the rendered page
const html = render(page);
const missing = ((page.dossier && page.dossier.requiredMentions) || page.mustMention || []).filter(m => !html.includes(m));
if (missing.length) fail('requiredMentions absent from page: ' + missing.join(' | '));
if (/—/.test(html)) fail('em dash in page');
if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(html)) fail('emoji in page');
// 'groep 5 to 8', 'grades 5 to 8' and 'class 5 to 8' are school-year ranges, not a batch size.
if (/(?<!groep |grades? |class(?:es)? |years? )5 to 8(?! (?:child|pupil|learner))|five to eight/i.test(html)) fail('old batch size 5 to 8 in page; brand facts say ' + JSON.stringify(require(path.join(ROOT, 'scripts/brand-facts.json')).batchSizes.group));
if (/\+1\b.*strip|countryIso:'IN'/.test(html)) fail('wrong lead contract');
// Lead contract: the form must send the module's market. A cg module with no
// market object is a Netherlands page, the convention this builder began with.
const LEAD_ISO = page.market && page.market.iso !== undefined ? page.market.iso : 'NL';
if (LEAD_ISO) { if (!new RegExp("countryIso: ?'" + LEAD_ISO + "'").test(html)) fail('countryIso ' + LEAD_ISO + ' missing'); }
else if (!/countryName: ?'International'/.test(html)) fail('international lead contract missing');
// In Ireland IST means Irish Standard Time; to the teachers it means India
// Standard Time. An Irish page must never use it unqualified.
if (LEAD_ISO === 'IE' && /\bIST\b/.test(html.replace(/<script[\s\S]*?<\/script>/g, ' '))) fail('bare IST on an Irish page: write Irish time or India time');
// UK: BST is also Bangladesh Standard Time and IST India Standard Time, so neither is ever written bare.
if (LEAD_ISO === 'GB' && /\b(IST|BST)\b/.test(html.replace(/<script[\s\S]*?<\/script>/g, ' '))) fail('bare BST or IST on a UK page: write UK time or India time');
if (LEAD_ISO === 'GB' && /(£|&pound;|&#163;|\bGBP\b)/.test(html.replace(/<script[\s\S]*?<\/script>/g, ' '))) fail('pound sign or GBP on a UK page: USD is the only currency (spec section 9)');

// --- write -------------------------------------------------------------------
const outHtml = path.join(ROOT, 'src', 'pages', slug + '.html');
const outMd = path.join(ROOT, 'src', 'pages', slug + '.md');
fs.writeFileSync(outHtml, html, 'utf8');
const mdText = twin(page);
if (/—/.test(mdText)) fail('em dash in md twin');
fs.writeFileSync(outMd, mdText, 'utf8');

// --- register + wire ---------------------------------------------------------
for (const r of register(page)) console.log('  ' + r);
execFileSync(process.execPath, [path.join(ROOT, 'scripts', WIRE), slug], { stdio: 'inherit' });

// --- word count, the gate's way -----------------------------------------------
const norm = s => s.replace(/\s+/g, ' ').trim();
const stripTags = h => norm(h.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;|&#\d+;/gi, ' '));
const bodyOnly = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<head[\s\S]*?<\/head>/g, ' ');
const words = stripTags(bodyOnly).split(' ').filter(Boolean).length;
const mdWords = mdText.split(/\s+/).length;
const mdCourses = (mdText.match(/\/courses\/[a-z0-9-]+/g) || []).length;
console.log(`built ${slug}: ${words} visible words (floor ${FLOORS[page.pageType]} for ${page.pageType}), md ${mdWords} words / ${mdCourses} course links, ${cssLines.length} personality lines`);
if (words < FLOORS[page.pageType]) { console.error('BUILD FAIL: under the word floor'); process.exit(1); }
