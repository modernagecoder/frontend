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
  for (const d of ['uk', 'us', 'de', 'pe']) {
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
    label_de: h.label_de || h.label,
    sections: h.sections.map(s => ({ name: s.name, name_de: s.name_de || s.name, members: s.members.map(m => typeof m === 'string' ? m : m.slug), raw: s.members }))
  }));
  return cache;
}

function links(sec, self) {
  return sec.raw.map(m => ({ slug: typeof m === 'string' ? m : m.slug, m }))
    .filter(x => x.slug !== self && live(x.slug))
    .map(x => ({ href: '/' + x.slug, label: label(x.m) }));
}

// Germany Land hubs (market DE): German-language pages (market lang de-DE) get the German headings and labels.
function words(page, hub) {
  const de = hub.market === 'DE' && page.market && /^de/.test(page.market.lang || '');
  if (hub.market !== 'DE') return { all: 'Every page in this guide', rel: 'Related pages in this guide', sec: s => s.name, lab: h => h.label };
  return de
    ? { all: 'Alle Seiten in diesem Bundesland', rel: 'Weitere Seiten in diesem Bundesland', sec: s => s.name_de, lab: h => h.label_de }
    : { all: 'Every page for this Land', rel: 'More pages for this Land', sec: s => s.name, lab: h => h.label };
}

// Peru cluster (spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md section 5): every Peru page links its
// siblings in the same index group (content/pe module `hub.group`), in its own language first, then the same group
// in the other language, plus the national hub and the two language entry pages. Built from the modules, so a page
// that is not built yet is never linked and a new page joins every list on the next rebuild.
const PE_GROUPS = {
  start: ['Start here', 'Empiece aquí'], ages: ['By age and stage', 'Por edad y etapa'],
  subjects: ['Subjects and courses', 'Cursos y materias'], exams: ['Exams, olympiads and school holidays', 'Exámenes, olimpiadas y vacaciones'],
  guides: ['Guides to choosing', 'Guías para elegir'], regions: ['Regions of Peru', 'Regiones del Perú'],
  cities: ['Cities', 'Ciudades'], lima: ['Lima and Callao districts', 'Distritos de Lima y Callao']
};
const PE_HUB = 'coding-and-ai-classes-in-peru';
const PE_ES_ENTRY = 'clases-de-programacion-en-ingles-peru';
let peCache = null;
function pePages() {
  if (peCache) return peCache;
  const { builtPages } = require('./uk-index');
  peCache = builtPages('pe').map(p => Object.assign({}, p, { es: /market: PE_ES\b/.test(fs.readFileSync(path.join(ROOT, 'content', 'pe', p.file), 'utf8')) }));
  return peCache;
}
function peWithGroup(page) {
  if (!page.market || page.market.iso !== 'PE' || page.slug === PE_HUB || !page.hub) return null;
  const es = /^es/.test(page.market.lang || '');
  const all = pePages().filter(p => p.slug !== page.slug && live(p.slug));
  const g = page.hub.group;
  const name = (grp, inEs) => (PE_GROUPS[grp] || [grp, grp])[es ? 1 : 0] + (inEs === es ? '' : (es ? ' (en inglés)' : ' (in Spanish)'));
  const sort = arr => arr.sort((a, b) => a.label.localeCompare(b.label, es ? 'es' : 'en'));
  const sections = [];
  for (const sameLang of [true, false]) {
    const ls = sort(all.filter(p => p.group === g && (p.es === es) === sameLang));
    if (ls.length) sections.push({ name: name(g, sameLang ? es : !es), links: ls.map(p => ({ href: '/' + p.slug, label: p.label })) });
  }
  const others = [];
  if (live(PE_HUB)) others.push({ href: '/' + PE_HUB, label: es ? 'Clases de programación e IA en Perú (en inglés)' : 'Coding and AI classes in Peru' });
  if (live(PE_ES_ENTRY) && page.slug !== PE_ES_ENTRY) others.push({ href: '/' + PE_ES_ENTRY, label: es ? 'Clases de programación en inglés' : 'En español: clases de programación en inglés' });
  const rest = all.filter(p => p.slug !== PE_HUB && p.slug !== PE_ES_ENTRY);
  for (const grp of Object.keys(PE_GROUPS)) if (grp !== g) {
    const first = sort(rest.filter(p => p.group === grp && p.es === es))[0] || sort(rest.filter(p => p.group === grp))[0];
    if (first) others.push({ href: '/' + first.slug, label: (PE_GROUPS[grp])[es ? 1 : 0] + ': ' + first.label });
  }
  return Object.assign({}, page, { cluster_related: {
    h2: es ? 'Más páginas para Perú' : 'More pages for Peru',
    index: live(PE_HUB) ? { href: '/' + PE_HUB, label: es ? 'Todas las páginas de Perú' : 'Every Peru page' } : null,
    sections,
    others
  } });
}

function withGroup(page) {
  const pe = peWithGroup(page);
  if (pe) return pe;
  const hubs = load();
  const own = hubs.find(h => h.index === page.slug);
  if (own) {
    const w = words(page, own);
    return Object.assign({}, page, { cluster_related: {
      h2: w.all,
      index: null,
      sections: own.sections.map(s => ({ name: w.sec(s), links: links(s, page.slug) })).filter(s => s.links.length),
      others: hubs.filter(h => h !== own && h.market === own.market && live(h.index)).map(h => ({ href: '/' + h.index, label: w.lab(h) }))
    } });
  }
  const mine = hubs.filter(h => h.sections.some(s => s.members.includes(page.slug)));
  if (!mine.length) return page;
  const hub = mine[0];
  const w = words(page, hub);
  const indexLive = live(hub.index);
  const sections = [];
  // Every section of every hub the page belongs to, the page's own sections first.
  for (const pass of [true, false]) for (const h of mine) for (const s of h.sections) {
    if (s.members.includes(page.slug) !== pass) continue;
    const l = links(s, page.slug);
    if (l.length && !sections.some(x => x.name === w.sec(s))) sections.push({ name: w.sec(s), links: l });
  }
  const others = hubs.filter(h => h !== hub && h.market === hub.market && live(h.index)).map(h => ({ href: '/' + h.index, label: w.lab(h) }));
  // A page whose own crumbs already name the index (some Germany city pages crumb to their Land) keeps them as they are.
  const hasCrumb = (page.crumbs || []).some(c => c.href === '/' + hub.index);
  const crumbs = indexLive && !hasCrumb ? page.crumbs.concat([{ name: w.lab(hub), href: '/' + hub.index }]) : page.crumbs;
  return Object.assign({}, page, { crumbs, cluster_related: {
    h2: w.rel,
    index: indexLive ? { href: '/' + hub.index, label: w.lab(hub) } : null,
    sections,
    others
  } });
}

module.exports = { withGroup };
