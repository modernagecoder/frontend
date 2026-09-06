#!/usr/bin/env node
/**
 * sync-shared-sections.js
 * ------------------------------------------------------------------
 * Copies shared page sections from components/ into every page that
 * carries a marker pair for them, so a section that appears on several
 * pages is written once and cannot drift.
 *
 *   <!-- BEGIN_SHARED:teaching-depth -->
 *   ...replaced with components/teaching-depth.html...
 *   <!-- END_SHARED:teaching-depth -->
 *
 * Unlike nav and footer (inlined at deploy by inline-components.js), these
 * sections live in the committed page source, because they are content the
 * markdown twins and crawlers must see and because the course TEMPLATE needs
 * them before generate:courses runs. Runs first inside generate:html.
 *
 *   node scripts/sync-shared-sections.js           # write
 *   node scripts/sync-shared-sections.js --check   # exit 1 if any page is stale
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CHECK = process.argv.includes('--check');
const COMPONENT_DIR = path.join(ROOT, 'components');

// Files that may carry markers. Scanning src/pages entirely would read 764
// files for three hits; list the roots that can legitimately host a shared
// section instead.
const ROOTS = ['src/pages', 'content/courses/template', 'content/blog/template'];

function walk(dir, out) {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return out;
  for (const e of fs.readdirSync(full, { withFileTypes: true })) {
    const rel = path.posix.join(dir, e.name);
    if (e.isDirectory()) walk(rel, out);
    else if (e.name.endsWith('.html')) out.push(rel);
  }
  return out;
}

function main() {
  const components = new Map();
  let files = 0, sections = 0, stale = 0;
  for (const rel of ROOTS.flatMap((r) => walk(r, []))) {
    const file = path.join(ROOT, rel);
    const raw = fs.readFileSync(file, 'utf8');
    if (!raw.includes('BEGIN_SHARED:')) continue;
    const crlf = raw.includes('\r\n');
    let html = crlf ? raw.replace(/\r\n/g, '\n') : raw;
    const re = /<!-- BEGIN_SHARED:([a-z0-9-]+) -->[\s\S]*?<!-- END_SHARED:\1 -->/g;
    html = html.replace(re, (block, name) => {
      if (!components.has(name)) {
        const p = path.join(COMPONENT_DIR, name + '.html');
        if (!fs.existsSync(p)) throw new Error(`shared section "${name}" used in ${rel} but components/${name}.html does not exist`);
        components.set(name, fs.readFileSync(p, 'utf8').replace(/\r\n/g, '\n').trim());
      }
      sections++;
      return `<!-- BEGIN_SHARED:${name} -->\n${components.get(name)}\n<!-- END_SHARED:${name} -->`;
    });
    const out = crlf ? html.replace(/\n/g, '\r\n') : html;
    files++;
    if (out !== raw) {
      stale++;
      if (!CHECK) fs.writeFileSync(file, out);
      console.log(`${CHECK ? 'STALE ' : 'synced'} ${rel}`);
    }
  }
  console.log(`shared sections: ${sections} in ${files} files, ${stale} ${CHECK ? 'stale' : 'updated'}`);
  if (CHECK && stale) process.exit(1);
}

main();
