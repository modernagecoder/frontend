#!/usr/bin/env node
/**
 * verify-robots.js
 * ------------------------------------------------------------------
 * Proves robots.txt says the same thing to every crawler.
 *
 * The robots protocol picks ONE group per crawler: the most specific
 * "User-agent" line that matches, and nothing else. A file that says
 *
 *     User-agent: *
 *     Disallow: /api/
 *
 *     User-agent: Googlebot
 *     Allow: /
 *
 * gives Googlebot no disallow rules at all, because the Googlebot group
 * is the only group it reads. That is exactly what this site shipped:
 * 22 named groups (Googlebot, Bingbot and 20 AI crawlers) each with a
 * lone "Allow: /", so the generic exclusions applied to nobody that
 * mattered.
 *
 * Checks:
 *   1. Every group carries the same Disallow set as the "*" group.
 *   2. Exactly one Sitemap line, pointing at the sitemap index.
 *   3. No group is empty (a group with no rules allows everything).
 *
 * Exits non-zero on any failure, so it belongs in the build.
 *
 *   node scripts/verify-robots.js
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const FILE = path.join(ROOT, 'robots.txt');
const SITEMAP = 'https://learn.modernagecoders.com/sitemap-index.xml';

function parse(text) {
  const groups = [];
  const sitemaps = [];
  let current = null;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, '').trim();
    if (!line) continue;
    const m = line.match(/^([A-Za-z-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const val = m[2].trim();
    if (key === 'sitemap') { sitemaps.push(val); continue; }
    if (key === 'user-agent') {
      // consecutive User-agent lines share one group
      if (current && current.rules.length === 0) { current.agents.push(val); continue; }
      current = { agents: [val], rules: [] };
      groups.push(current);
      continue;
    }
    if (!current) continue;
    current.rules.push({ key, val });
  }
  return { groups, sitemaps };
}

function disallowSet(group) {
  return new Set(group.rules.filter((r) => r.key === 'disallow' && r.val !== '').map((r) => r.val));
}

function main() {
  const text = fs.readFileSync(FILE, 'utf8');
  const { groups, sitemaps } = parse(text);
  const failures = [];

  const star = groups.find((g) => g.agents.includes('*'));
  if (!star) failures.push('no "User-agent: *" group');
  const expected = star ? disallowSet(star) : new Set();
  if (star && expected.size === 0) failures.push('the "*" group has no Disallow rules');

  for (const g of groups) {
    if (g.rules.length === 0) failures.push(`group [${g.agents.join(', ')}] has no rules`);
    const have = disallowSet(g);
    const missing = [...expected].filter((d) => !have.has(d));
    const extra = [...have].filter((d) => !expected.has(d));
    if (missing.length) failures.push(`group [${g.agents.join(', ')}] is missing Disallow: ${missing.join(', ')}`);
    if (extra.length) failures.push(`group [${g.agents.join(', ')}] has extra Disallow: ${extra.join(', ')}`);
  }

  if (sitemaps.length !== 1) failures.push(`expected exactly 1 Sitemap line, found ${sitemaps.length}`);
  else if (sitemaps[0] !== SITEMAP) failures.push(`Sitemap points at ${sitemaps[0]}, expected ${SITEMAP}`);

  console.log(`robots.txt: ${groups.length} groups, ${expected.size} shared disallow rules, ${sitemaps.length} sitemap line`);
  if (failures.length) {
    console.error('\nrobots.txt verification FAILED:');
    failures.forEach((f) => console.error('  - ' + f));
    process.exit(1);
  }
  console.log('✓ robots.txt verification passed: every crawler gets the same rules.');
}

main();
