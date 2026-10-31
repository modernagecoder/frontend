'use strict';
/**
 * UK and US exams cluster links (content/exam-cluster-groups.json).
 *
 * withGroup(page) returns the page unchanged unless its slug is a hub index or a
 * hub member. Then it adds `cluster_related` (the hub sections rendered by
 * render-ag as an ag-siblings block, which the uniqueness gate treats as shared
 * chrome) and, for members, an index crumb before the page's own crumb label.
 * Only pages whose src/pages/<slug>.html exists are linked, so an index page
 * that is not built yet never produces a dead link.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const FILE = path.join(ROOT, 'content', 'exam-cluster-groups.json');
let cache = null;

function live(slug) { return fs.existsSync(path.join(ROOT, 'src', 'pages', slug + '.html')); }

function label(m) {
  if (typeof m !== 'string') return m.label;
  for (const d of ['uk', 'us']) {
    const f = path.join(ROOT, 'content', d, m + '.js');
    if (fs.existsSync(f)) { const mod = require(f); return mod.routeLabel || String(mod.pageName).replace(/<[^>]+>/g, ''); }
  }
  throw new Error('exam-cluster-groups: no module or label for ' + m);
}

function load() {
  if (cache) return cache;
  cache = JSON.parse(fs.readFileSync(FILE, 'utf8')).hubs.map(h => ({
    index: h.index,
    market: h.market,
    label: h.label,
    sections: h.sections.map(s => ({ name: s.name, members: s.members.map(m => typeof m === 'string' ? m : m.slug), raw: s.members }))
  }));
  return cache;
}

function links(sec, self) {
  return sec.raw.map(m => ({ slug: typeof m === 'string' ? m : m.slug, m }))
    .filter(x => x.slug !== self && live(x.slug))
    .map(x => ({ href: '/' + x.slug, label: label(x.m) }));
}

function withGroup(page) {
  const hubs = load();
  const own = hubs.find(h => h.index === page.slug);
  if (own) {
    return Object.assign({}, page, { cluster_related: {
      h2: 'Every page in this guide',
      index: null,
      sections: own.sections.map(s => ({ name: s.name, links: links(s, page.slug) })).filter(s => s.links.length),
      others: hubs.filter(h => h !== own && h.market === own.market && live(h.index)).map(h => ({ href: '/' + h.index, label: h.label }))
    } });
  }
  const mine = hubs.filter(h => h.sections.some(s => s.members.includes(page.slug)));
  if (!mine.length) return page;
  const hub = mine[0];
  const indexLive = live(hub.index);
  const sections = [];
  // Every section of every hub the page belongs to, the page's own sections first.
  for (const pass of [true, false]) for (const h of mine) for (const s of h.sections) {
    if (s.members.includes(page.slug) !== pass) continue;
    const l = links(s, page.slug);
    if (l.length && !sections.some(x => x.name === s.name)) sections.push({ name: s.name, links: l });
  }
  const others = hubs.filter(h => h !== hub && h.market === hub.market && live(h.index)).map(h => ({ href: '/' + h.index, label: h.label }));
  const crumbs = indexLive ? page.crumbs.concat([{ name: hub.label, href: '/' + hub.index }]) : page.crumbs;
  return Object.assign({}, page, { crumbs, cluster_related: {
    h2: 'Related pages in this guide',
    index: indexLive ? { href: '/' + hub.index, label: hub.label } : null,
    sections,
    others
  } });
}

module.exports = { withGroup };
