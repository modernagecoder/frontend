#!/usr/bin/env node
/**
 * indexnow-ping.js — tell Bing (and Yandex, Naver, Seznam, Yep, Amazon) that URLs changed.
 *
 * Why this matters more than it looks: ChatGPT Search and Microsoft Copilot answer from the
 * Bing index. If Bing has not indexed a page, ChatGPT cannot cite it — no amount of Google
 * ranking helps. IndexNow is the only push channel into that index; one POST notifies every
 * participating engine. Google does NOT participate (it has declined since 2021) — Google
 * still discovers via sitemap.xml + internal links, which is unaffected by this script.
 *
 * Usage:
 *   node scripts/indexnow-ping.js --dry-run --since HEAD~1   # show what would be sent
 *   node scripts/indexnow-ping.js --since HEAD~1             # submit URLs changed in last commit
 *   node scripts/indexnow-ping.js /pricing /courses          # submit specific paths or full URLs
 *   node scripts/indexnow-ping.js --all                      # submit every sitemap URL (rarely needed)
 *
 * Submit only what actually changed. Re-submitting unchanged URLs is the fastest way to get
 * your key ignored, exactly like lying in <lastmod>.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const HOST = 'learn.modernagecoders.com';
const BASE = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const MAX_URLS = 10000; // IndexNow per-request cap

const argv = process.argv.slice(2);
const DRY = argv.includes('--dry-run');
const ALL = argv.includes('--all');
const sinceIdx = argv.indexOf('--since');
const SINCE = sinceIdx !== -1 ? argv[sinceIdx + 1] : null;

// --- key -------------------------------------------------------------------
function findKey() {
  const candidates = fs
    .readdirSync(ROOT)
    .filter((f) => /^[0-9a-f]{8,128}\.txt$/i.test(f))
    .filter((f) => {
      const body = fs.readFileSync(path.join(ROOT, f), 'utf8').trim();
      return body === path.basename(f, '.txt');
    })
    // readdirSync order is filesystem-dependent, so sort: with more than one key
    // file present an unsorted pick could silently change between machines/runs.
    .sort();
  if (!candidates.length) {
    console.error(
      'No IndexNow key file found at the repo root.\n' +
        'Create one: node -e "const c=require(\'crypto\'),f=require(\'fs\');' +
        'const k=c.randomBytes(16).toString(\'hex\');f.writeFileSync(k+\'.txt\',k)"'
    );
    process.exit(1);
  }

  // An explicit pin always wins, so rotating keys never depends on sort order.
  const pinned = (process.env.INDEXNOW_KEY || '').trim();
  if (pinned) {
    if (!candidates.includes(`${pinned}.txt`)) {
      console.error(
        `INDEXNOW_KEY=${pinned} was set, but no verified key file for it exists at the repo root.\n` +
          `Found: ${candidates.join(', ') || '(none)'}`
      );
      process.exit(1);
    }
    return pinned;
  }

  if (candidates.length > 1) {
    console.log(`  note        : ${candidates.length} key files present (${candidates.join(', ')}).`);
    console.log(`                Using the first alphabetically. Set INDEXNOW_KEY=<key> to pin one.`);
  }
  return path.basename(candidates[0], '.txt');
}

// --- URL sources -----------------------------------------------------------
function sitemapUrls() {
  const out = [];
  for (const f of ['sitemap.xml', 'content/resources/generated/sitemap-entries.xml']) {
    const p = path.join(ROOT, f);
    if (!fs.existsSync(p)) continue;
    const xml = fs.readFileSync(p, 'utf8');
    out.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()));
  }
  return [...new Set(out)];
}

// clean URL -> source file, from _redirects (200 serves only, no wildcards)
function routeMap() {
  const map = new Map(); // file -> url path
  const txt = fs.readFileSync(path.join(ROOT, '_redirects'), 'utf8');
  for (const line of txt.split('\n')) {
    const s = line.trim();
    if (!s || s.startsWith('#')) continue;
    const [from, to, code] = s.split(/\s+/);
    if (!to || (code && !code.startsWith('200'))) continue;
    if (from.includes('*') || from.includes(':') || !to.startsWith('/')) continue;
    const file = to.replace(/^\//, '');
    if (file.endsWith('.html')) map.set(file, from);
  }
  return map;
}

function slugMap(dir, urlPrefix, { exclude = [] } = {}) {
  const map = new Map(); // source file -> url
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return map;
  for (const f of fs.readdirSync(full)) {
    if (!f.endsWith('.json') || exclude.includes(f)) continue;
    try {
      const data = JSON.parse(fs.readFileSync(path.join(full, f), 'utf8'));
      const meta = data.meta || data;
      const slug = data.slug || meta.slug || path.basename(f, '.json');
      map.set(`${dir}/${f}`, `${BASE}${urlPrefix}/${slug}`);
    } catch (_) {
      /* ignore */
    }
  }
  return map;
}

function changedUrls(ref) {
  let files;
  try {
    files = execFileSync('git', ['diff', '--name-only', ref, 'HEAD'], {
      cwd: ROOT,
      encoding: 'utf8',
    })
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);
  } catch (e) {
    console.error(`git diff against "${ref}" failed: ${e.message}`);
    process.exit(1);
  }

  const routes = routeMap();
  const blogs = slugMap('content/blog/data', '/blog');
  const courses = slugMap('content/courses/data', '/courses', {
    exclude: ['courses-config.json'],
  });

  const urls = new Set();
  const skipped = [];
  for (const f of files) {
    const norm = f.replace(/\\/g, '/');
    if (routes.has(norm)) urls.add(BASE + routes.get(norm));
    else if (blogs.has(norm)) urls.add(blogs.get(norm));
    else if (courses.has(norm)) urls.add(courses.get(norm));
    else skipped.push(norm);
  }
  return { urls: [...urls], skipped, fileCount: files.length };
}

function normalise(arg) {
  if (arg.startsWith('http')) return arg;
  // Git Bash (MSYS) rewrites a bare "/pricing" argument into "C:/Program Files/Git/pricing"
  // before node ever sees it. Undo that so /pricing works from any shell on this machine.
  const msys = arg.match(/^[A-Za-z]:[\\/].*?[\\/]Git[\\/](.*)$/);
  if (msys) arg = '/' + msys[1];
  return BASE + (arg.startsWith('/') ? arg : `/${arg}`);
}

// --- resolve the list ------------------------------------------------------
const explicit = argv.filter((a) => !a.startsWith('--') && a !== SINCE);
let urls = [];
let context = '';

if (ALL) {
  urls = sitemapUrls();
  context = `all ${urls.length} sitemap URLs`;
} else if (SINCE) {
  const r = changedUrls(SINCE);
  urls = r.urls;
  context = `${urls.length} URL(s) from ${r.fileCount} file(s) changed since ${SINCE}`;
  if (r.skipped.length) {
    console.log(`  (${r.skipped.length} changed file(s) map to no public URL — ignored)`);
  }
} else if (explicit.length) {
  urls = explicit.map(normalise);
  context = `${urls.length} URL(s) given on the command line`;
} else {
  console.error(
    'Nothing to submit. Pass URLs, or --since <git-ref>, or --all.\n' +
      'Run with --dry-run first to see the list.'
  );
  process.exit(1);
}

// Only submit URLs that are actually public (present in a sitemap).
const live = new Set(sitemapUrls().map((u) => u.replace(/\/$/, '')));
const unknown = urls.filter((u) => !live.has(u.replace(/\/$/, '')));
if (unknown.length) {
  console.log(`\n  ${unknown.length} URL(s) not found in any sitemap — dropped:`);
  unknown.slice(0, 10).forEach((u) => console.log(`    ${u}`));
  urls = urls.filter((u) => live.has(u.replace(/\/$/, '')));
}

if (!urls.length) {
  console.log('\nNothing to submit after filtering. Done.');
  process.exit(0);
}
if (urls.length > MAX_URLS) {
  console.error(`Refusing to send ${urls.length} URLs (IndexNow cap is ${MAX_URLS}).`);
  process.exit(1);
}

const key = findKey();
const payload = {
  host: HOST,
  key,
  keyLocation: `${BASE}/${key}.txt`,
  urlList: urls,
};

console.log(`\nIndexNow — ${context}`);
console.log(`  key         : ${key}`);
console.log(`  keyLocation : ${payload.keyLocation}`);
console.log(`  submitting  : ${urls.length} URL(s)`);
urls.slice(0, 15).forEach((u) => console.log(`    ${u}`));
if (urls.length > 15) console.log(`    …and ${urls.length - 15} more`);

if (DRY) {
  console.log('\n(dry run — nothing sent)');
  process.exit(0);
}

// --- submit ----------------------------------------------------------------
const body = JSON.stringify(payload);
const req = https.request(
  ENDPOINT,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(body),
    },
  },
  (res) => {
    let data = '';
    res.on('data', (c) => (data += c));
    res.on('end', () => {
      // 200 = accepted, 202 = accepted but key not yet validated (fine on first run)
      const ok = res.statusCode === 200 || res.statusCode === 202;
      console.log(`\n  HTTP ${res.statusCode} ${ok ? '— accepted' : '— NOT accepted'}`);
      if (data.trim()) console.log(`  response: ${data.trim().slice(0, 300)}`);
      if (res.statusCode === 202) {
        console.log('  202 means the key file is being verified; that is expected on first use.');
      }
      if (res.statusCode === 403) {
        // Two very different causes share this code, so read the body before acting.
        if (/SiteVerificationNotCompleted/i.test(data)) {
          console.log('  403 (SiteVerificationNotCompleted) = the key file IS reachable, but the');
          console.log('  search engine has not finished verifying the site yet. This is normal on a');
          console.log('  freshly published key. Nothing is broken and nothing needs changing:');
          console.log('  simply wait and re-run the same command later.');
        } else {
          console.log(`  403 = key file not reachable. Confirm ${payload.keyLocation} is live`);
          console.log('  (curl it: it must return 200 and its body must equal the key exactly).');
        }
      }
      if (res.statusCode === 422) {
        console.log('  422 = URLs do not match the host, or the key does not match.');
      }
      process.exit(ok ? 0 : 1);
    });
  }
);
req.on('error', (e) => {
  console.error(`\n  request failed: ${e.message}`);
  process.exit(1);
});
req.write(body);
req.end();
