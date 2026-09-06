#!/usr/bin/env node
/**
 * generate-robots.js
 * ------------------------------------------------------------------
 * Writes robots.txt from scripts/robots-policy.json.
 *
 * Why generated: a crawler obeys only the single most specific
 * "User-agent" group that matches it. A named group with just
 * "Allow: /" therefore switches OFF every exclusion for that crawler.
 * Writing every group from one policy makes that mistake impossible,
 * and verify-robots.js (run in the build) proves it stayed that way.
 *
 *   node scripts/generate-robots.js          # write robots.txt
 *   node scripts/generate-robots.js --dry    # print to stdout only
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const POLICY = path.join(__dirname, 'robots-policy.json');
const OUT = path.join(ROOT, 'robots.txt');
const DRY = process.argv.includes('--dry');

function group(agents, policy, opts) {
  const lines = [];
  for (const a of agents) lines.push('User-agent: ' + a);
  lines.push('Allow: /');
  for (const d of policy.disallow) lines.push('Disallow: ' + d);
  if (opts && opts.allowHints) {
    for (const [label, paths] of Object.entries(opts.allowHints)) {
      if (label.startsWith('_')) continue;
      lines.push('');
      lines.push('# ' + label);
      for (const p of paths) lines.push('Allow: ' + p);
    }
  }
  if (opts && opts.crawlDelay !== null && opts.crawlDelay !== undefined) {
    lines.push('Crawl-delay: ' + opts.crawlDelay);
  }
  return lines.join('\n');
}

function build(policy) {
  const out = [];
  out.push('# robots.txt for Modern Age Coders Learning Platform');
  out.push('#');
  out.push('# GENERATED FILE. Edit scripts/robots-policy.json and run `npm run generate:robots`.');
  out.push('# Every crawler group below repeats the same Disallow list on purpose: a crawler');
  out.push('# reads only its own most-specific group, so a named group that said just');
  out.push('# "Allow: /" used to hand that crawler none of the exclusions. verify-robots.js');
  out.push('# fails the build if any group drifts from the policy.');
  out.push('');
  out.push('# Default rules for every crawler');
  out.push(group(['*'], policy, { allowHints: policy.allowHints, crawlDelay: policy.defaultCrawlDelay }));
  out.push('');
  out.push('# Sitemap location');
  out.push('# One index pointing at per-cluster children (core / courses / blog / cities / topics /');
  out.push('# international / resources). sitemap.xml is still the hand-maintained source the');
  out.push('# children are generated from, and is intentionally NOT advertised here: advertising');
  out.push('# both would count every URL twice and undo the split.');
  out.push('Sitemap: ' + policy.sitemap);
  for (const [label, agents] of Object.entries(policy.namedAgents)) {
    if (label.startsWith('_')) continue;
    out.push('');
    out.push('# ' + label);
    for (const a of agents) {
      out.push(group([a.name], policy, { crawlDelay: a.crawlDelay === undefined ? null : a.crawlDelay }));
      out.push('');
    }
    out.pop();
  }
  out.push('');
  return out.join('\n');
}

function main() {
  const policy = JSON.parse(fs.readFileSync(POLICY, 'utf8'));
  const text = build(policy);
  if (DRY) { process.stdout.write(text); return; }
  const before = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
  fs.writeFileSync(OUT, text, 'utf8');
  const groups = (text.match(/^User-agent:/gm) || []).length;
  console.log('robots.txt written: ' + groups + ' crawler groups, ' + policy.disallow.length + ' disallow rules each' + (before === text ? ' (unchanged)' : ''));
}

main();
