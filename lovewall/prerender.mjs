/**
 * Inject the build-time-rendered app into dist/index.html.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle). See entry-server.tsx
 * for why this is renderToStaticMarkup + createRoot rather than hydration.
 *
 * WHY THIS EXISTS: /love was served as an empty <div id="root"></div> — 0 characters of body
 * text. The 15 real reviews on it, the strongest social proof the business has, were invisible
 * to every crawler that does not execute JavaScript, which is most LLM crawlers.
 *
 * This script FAILS THE BUILD rather than shipping a page that silently lost its content. A
 * Netlify build failure keeps the last good deploy live, so failing here is always safer than
 * publishing an empty wall. That matters more than usual here: this page shipped a white
 * screen once already because a data bug was never checked against the rendered output.
 */
import { readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(dir, 'dist', 'index.html');
const ssrEntry = path.join(dir, 'dist-ssr', 'entry-server.js');
const toUrl = (p) => 'file:///' + p.replace(/\\/g, '/');

const fail = (msg) => { console.error(`prerender: ${msg}`); process.exit(1); };

if (!existsSync(ssrEntry)) fail(`SSR bundle missing at ${ssrEntry}`);

const { render } = await import(toUrl(ssrEntry));
const appHtml = render();
const text = appHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

// Every real reviewer named in constants.ts must appear in the rendered text. This is the
// check that would have caught the sparse-array white-screen: counting reviews in the DATA
// proves nothing, only reading them back out of the RENDERED OUTPUT does.
const names = [...readFileSync(path.join(dir, 'constants.ts'), 'utf8')
  .match(/export const TESTIMONIALS[\s\S]*?\n\];/)[0]
  .matchAll(/^\s*name: '([^']+)'/gm)].map((m) => m[1]);

if (names.length < 10) fail(`only found ${names.length} reviewer names in constants.ts — expected the full set`);
const missing = names.filter((n) => !text.includes(n));
if (missing.length) fail(`${missing.length}/${names.length} reviewers missing from rendered HTML: ${missing.join(', ')}`);
if (text.length < 2000) fail(`rendered body text is only ${text.length} chars — expected the full wall`);

const html = readFileSync(htmlPath, 'utf8');
if (!html.includes('<div id="root"></div>')) fail('no empty <div id="root"></div> to fill');

writeFileSync(htmlPath, html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`), 'utf8');
rmSync(path.join(dir, 'dist-ssr'), { recursive: true, force: true }); // build artifact, not published

console.log(`prerender: ${names.length} reviewers, ${text.length} chars of text -> dist/index.html`);
