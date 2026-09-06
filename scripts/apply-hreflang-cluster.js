#!/usr/bin/env node
/**
 * apply-hreflang-cluster.js
 * ------------------------------------------------------------------
 * The 20 "coding classes in <country>" pages are regional variants of one
 * intent, in English, for different markets. None of them told search
 * engines that, so a UK search could surface the India page (rupee
 * pricing) or a US page could compete with the Canadian one. This writes
 * the reciprocal hreflang set into every member page from
 * content/markets.json, with the homepage as x-default (the region-neutral
 * entry, which re-prices for the visitor). The homepage carries the same
 * set back, as hreflang requires return links.
 *
 * Idempotent: the block lives between markers right after the canonical.
 *
 *   node scripts/apply-hreflang-cluster.js          # write
 *   node scripts/apply-hreflang-cluster.js --check  # exit 1 if any page is stale
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://learn.modernagecoders.com';
const MARKETS = require(path.join(ROOT, 'content', 'markets.json'));
const CHECK = process.argv.includes('--check');

function fileFor(p) {
  return path.join(ROOT, 'src', 'pages', (p === '/' ? 'index' : p.replace(/^\//, '')) + '.html');
}

function block(id) {
  const links = MARKETS.markets.map((m) => `    <link rel="alternate" hreflang="${m.hreflang}" href="${SITE}${m.path}">`);
  links.push(`    <link rel="alternate" hreflang="x-default" href="${SITE}${MARKETS.xDefault === '/' ? '/' : MARKETS.xDefault}">`);
  return `<!-- BEGIN_HREFLANG:${id} (generated from content/markets.json by scripts/apply-hreflang-cluster.js) -->\n${links.join('\n')}\n    <!-- END_HREFLANG:${id} -->`;
}

function apply(file, id) {
  const raw = fs.readFileSync(file, 'utf8');
  const crlf = raw.includes('\r\n');
  let html = crlf ? raw.replace(/\r\n/g, '\n') : raw;
  const re = new RegExp(`<!-- BEGIN_HREFLANG:${id}[^>]*-->[\\s\\S]*?<!-- END_HREFLANG:${id} -->`);
  const b = block(id);
  if (re.test(html)) {
    html = html.replace(re, b);
  } else {
    const canon = html.match(/<link[^>]+rel="canonical"[^>]*>/);
    if (!canon) throw new Error(`${path.basename(file)}: no canonical link to anchor on`);
    html = html.replace(canon[0], `${canon[0]}\n    ${b}`);
  }
  const out = crlf ? html.replace(/\n/g, '\r\n') : html;
  const changed = out !== raw;
  if (changed && !CHECK) fs.writeFileSync(file, out);
  return changed;
}

function main() {
  const id = MARKETS.clusterId;
  const members = MARKETS.markets.map((m) => m.path).concat([MARKETS.xDefault]);
  let changed = 0;
  for (const p of members) {
    const file = fileFor(p);
    if (!fs.existsSync(file)) throw new Error(`market page missing: ${p} -> ${file}`);
    if (apply(file, id)) { changed++; console.log(`${CHECK ? 'STALE ' : 'wrote '} ${p}`); }
  }
  console.log(`hreflang cluster "${id}": ${members.length} pages (${MARKETS.markets.length} markets + x-default), ${changed} ${CHECK ? 'stale' : 'updated'}`);
  if (CHECK && changed) process.exit(1);
}

main();
