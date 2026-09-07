'use strict';
/**
 * Markdown twin for a Netherlands cluster page. The .md file is what LLM
 * crawlers read preferentially (routed at /<slug>.md). It mirrors the HTML:
 * same head term, same questions, same numbers, every course linked.
 * The gate requires: frontmatter canonical, a leading "> " capsule, 10+
 * /courses/ links, 600+ words, no em dashes.
 */
const { course } = require('./catalogue');
const { FLAGSHIPS, groupLabel } = require('./render-cg');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const BRAND = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'brand-facts.json'), 'utf8'));
const SITE = 'https://learn.modernagecoders.com';

// HTML prose -> markdown-ish plain text. Inline links become [text](href).
function md(html) {
  return String(html)
    .replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (m, h, t) => `[${t.replace(/<[^>]+>/g, '')}](${h})`)
    .replace(/<strong>([\s\S]*?)<\/strong>/g, '**$1**')
    .replace(/<em>([\s\S]*?)<\/em>/g, '*$1*')
    .replace(/<br\s*\/?>/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ').trim();
}

function table(b) {
  const head = '| ' + b.head.map(md).join(' | ') + ' |';
  const sep = '|' + b.head.map(() => '---').join('|') + '|';
  const rows = b.rows.map(r => '| ' + r.map(md).join(' | ') + ' |');
  return [`**${md(b.caption)}**`, '', head, sep, ...rows].join('\n');
}

function block(b) {
  switch (b.kind) {
    case 'grid3': return b.cells.map(c => `### ${md(c.h3)}\n\n${md(c.p)}`).join('\n\n');
    case 'spec': return `**${md(b.title)}** ${md(b.p)}`;
    case 'callout': return `### ${md(b.h3)}\n\n${md(b.p)}`;
    case 'table': return table(b);
    case 'p': return md(b.text);
    case 'align': return b.rows.map(r => `- **${md(r.code)}**: ${md(r.req)} Our answer: ${md(r.ours)}`).join('\n');
    default: throw new Error('md-twin: unknown block ' + b.kind);
  }
}

function twin(page) {
  const url = SITE + '/' + page.slug;
  const out = [];
  out.push('---');
  out.push(`title: ${JSON.stringify(page.title)}`);
  out.push(`description: ${JSON.stringify(page.description)}`);
  out.push(`canonical: ${url}`);
  out.push(`source: src/pages/${page.slug}.html`);
  out.push('---');
  out.push(`> ${md(page.capsule)}`);
  out.push('');
  out.push('[Home](/) / ' + page.parents.map(p => `[${p.name}](/${p.slug})`).join(' / ') + ` / ${page.place.name}`);
  out.push('');
  out.push(`${page.place.eyebrow} / Live online`);
  out.push('');
  out.push(`# ${md(page.h1)}`);
  out.push('');
  out.push(`**${md(page.capsuleQ)}** ${md(page.capsule)}`);
  out.push('');
  out.push(md(page.lead));
  out.push('');
  out.push(`Facts last verified ${page.verifiedOn}. Teaching is online; no ${page.place.name} branch is claimed. ${BRAND.students} students taught, rated ${BRAND.rating} across ${BRAND.reviews} Google reviews, teaching since ${BRAND.founded}, ${BRAND.countries} countries, ages ${BRAND.ages}, ${groupLabel()} students per group.`);
  out.push('');
  out.push(`## ${md(page.picks.h2)}`);
  out.push('');
  out.push(md(page.picks.intro));
  out.push('');
  for (const i of page.picks.items) { const c = course(i.course); out.push(`- [${i.title || c.title.split(':')[0]}](${c.url}) (${i.band}): ${md(i.note)}`); }
  out.push('');
  out.push('The four we are known for, on every market page:');
  out.push('');
  for (const f of FLAGSHIPS) { const c = course(f[0]); out.push(`- [${c.title.split(':')[0]}](${c.url}) (${f[2]}): ${f[3]}`); }
  out.push('');
  out.push(`Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.`);
  out.push('');
  for (const s of page.sections) {
    out.push(`## ${md(s.h2)}`);
    out.push('');
    out.push(md(s.intro));
    out.push('');
    for (const b of s.body) { out.push(block(b)); out.push(''); }
  }
  out.push(`## ${md(page.ladder.h2)}`);
  out.push('');
  out.push(md(page.ladder.intro));
  out.push('');
  for (const c of page.ladder.cols) {
    out.push(`- **${c.band}: ${md(c.h3)}** ${md(c.p)} ` + c.courses.map(s => { const k = course(s); return `[${k.title.split(':')[0]}](${k.url})`; }).join(', '));
  }
  out.push('');
  out.push(`## ${md(page.ai.h2)}`);
  out.push('');
  out.push(md(page.ai.intro));
  out.push('');
  out.push(md(page.ai.p1));
  out.push('');
  out.push(md(page.ai.p2));
  out.push('');
  out.push(`${md(page.ai.closer)} The longer argument is in [${md(page.ai.blogAnchor)}](/blog/is-coding-worth-learning-2026).`);
  out.push('');
  out.push(`## ${md(page.delivery.h2)}`);
  out.push('');
  out.push(md(page.delivery.intro));
  out.push('');
  for (const c of page.delivery.cells) out.push(`- **${md(c.h3)}** ${md(c.p)}`);
  out.push('');
  out.push(`**${md(page.delivery.spec.title)}** ${md(page.delivery.spec.p)}`);
  out.push('');
  out.push(`## ${md(page.fees.h2)}`);
  out.push('');
  out.push(md(page.fees.intro));
  out.push('');
  out.push(`- First class: USD 0. ${md(page.fees.first)}`);
  out.push(`- Group tuition: USD 100 a month. ${md(page.fees.group)}`);
  out.push(`- Private tuition: USD 150 a month. ${md(page.fees.private)}`);
  out.push('');
  out.push(md(page.fees.closer));
  out.push('');
  out.push(`## ${md(page.faq.h2)}`);
  out.push('');
  for (const f of page.faq.items) { out.push(`### ${md(f.q)}`); out.push(''); out.push(md(f.a)); out.push(''); }
  out.push(`## ${md(page.next.h2)}`);
  out.push('');
  out.push(md(page.next.html));
  out.push('');
  out.push('## Contact');
  out.push('');
  out.push(`Book the free class on [${url}](${url}#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated ${BRAND.rating} across ${BRAND.reviews} Google reviews.`);
  out.push('');
  return out.join('\n');
}

module.exports = { twin, md };
