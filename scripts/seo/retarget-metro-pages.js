#!/usr/bin/env node
/**
 * Keyword Ledger 2026-27, action 1: retarget the Indian metro
 * best-coding-class-in-<city> pages for the "coding classes near me" family of
 * queries that Search Console shows them ranking for at position 5 to 14
 * (research folder: Desktop/SkyCoders/keyword-research-2026-09, striking-distance table).
 *
 * What it changes on each page, and nothing else:
 *   - <title>, meta description, og:title, twitter:title
 *   - H1 tail + lede: the literal query in the first screen
 *   - register aside: a Fees row anchored to the pricing config (data-price)
 *   - "Where we teach" intro: answers "near me / offline" honestly
 *   - price cards: anchored to the pricing config so one currency shows per visitor
 *   - FAQ (visible AND FAQPage schema, same text): new near-me question first,
 *     cost answer without figures, honest placement answer where GSC shows the
 *     query, kids start age 6 (brand facts), group batch 5-10 (brand facts)
 *
 * Idempotent: a page that already carries the retarget is skipped.
 *   node scripts/seo/retarget-metro-pages.js            (writes)
 *   node scripts/seo/retarget-metro-pages.js --dry-run  (reports only)
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const DRY = process.argv.includes('--dry-run');
const MARK = 'data-retarget="near-me-2026-09"';

const CITIES = [
  { slug: 'mumbai', name: 'Mumbai', placement: false },
  { slug: 'chennai', name: 'Chennai', placement: false },
  { slug: 'hyderabad', name: 'Hyderabad', placement: true },
  { slug: 'bengaluru', name: 'Bengaluru', placement: false },
  { slug: 'pune', name: 'Pune', placement: true },
  { slug: 'indore', name: 'Indore', placement: false },
  { slug: 'kolkata', name: 'Kolkata', placement: false },
  { slug: 'delhi', name: 'Delhi', placement: false },
  { slug: 'ahmedabad', name: 'Ahmedabad', placement: false },
  { slug: 'bhopal', name: 'Bhopal', placement: false },
  { slug: 'noida', name: 'Noida', placement: false },
];

const AGE_OLD = [
  'We recommend starting coding at age 8 with visual block-based programming like Scratch. For text-based programming like Python and Java, age 12-13 is ideal. Our courses are designed for kids (6-12) and teens (13-18).',
  'Age 8 is ideal to begin with visual block-based coding (Scratch). For text-based languages like Python and Java, age 12-13 onwards works best. We design separate tracks for kids (6-12), teens (13-18) and college/working learners (18+).',
];
const AGE_NEW = 'Children can start with us from age 6 on block-based tools like ScratchJr and Scratch, where the logic is visual and nothing depends on typing speed. Most are ready for text-based Python or Java around age 12 to 13. Our kids track runs 6 to 12, the teens track 13 to 18, and college students and adults have their own tracks.';

function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function mustReplace(html, from, to, label, file) {
  const re = from instanceof RegExp ? from : new RegExp(esc(from));
  if (!re.test(html)) throw new Error(file + ': target not found for ' + label);
  return html.replace(re, to);
}
function schemaQ(name, text) {
  return '            { "@type": "Question", "name": ' + JSON.stringify(name) + ', "acceptedAnswer": { "@type": "Answer", "text": ' + JSON.stringify(text) + ' } },\n';
}
function visibleQ(name, text) {
  return '<details class="faq-item"><summary>' + name + '</summary><div class="faq-a">' + text + '</div></details>\n';
}
const norm = (x) => x.replace(/\s+/g, ' ').trim();
const dec = (s) => s.replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&ndash;/g, '–').replace(/&middot;/g, '·');

let changed = 0;
CITIES.forEach((c) => {
  const file = path.join(ROOT, 'src', 'pages', 'best-coding-class-in-' + c.slug + '.html');
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes(MARK)) { console.log('skip (already done):', c.slug); return; }
  const N = c.name;

  // areas, read from the page's own register row
  const areasM = html.match(/<span class="rk">Areas<\/span><span class="rv">([^<]*)<\/span>/);
  if (!areasM) throw new Error(file + ': no Areas row');
  const areas = areasM[1].replace(/\s*&amp;\s*all of [^,]*$/, '').replace(/\s*&amp;\s*(all|every)[^,]*$/, '');
  const ledeM = html.match(/<p class="city-lede">[\s\S]*?<strong>([\s\S]*?)<\/strong>[\s\S]*?<\/p>/);
  if (!ledeM) throw new Error(file + ': no lede');
  const fromTo = norm(ledeM[1]);

  // 1. head
  html = mustReplace(html, '<title>Best Coding Classes in ' + N + ' | Modern Age Coders</title>',
    '<title>Coding Classes in ' + N + ' Near Me: Live Online for Kids, Teens and Adults | Modern Age Coders</title>', 'title', file);
  html = mustReplace(html, /name="description"\s*content="[^"]*"/,
    'name="description" content="Coding classes near you in ' + N + ', live online for kids from 6, teens and adults. Scratch, Python, Java and AI in batches of 5 to 10, fees stated up front, free demo or a full Priority Live Demo. Rated 4.9 from 547 reviews."', 'meta description', file);
  html = mustReplace(html, /property="og:title" content="[^"]*"/, 'property="og:title" content="Coding Classes in ' + N + ' Near Me | Live Online, Kids to Adults | Modern Age Coders"', 'og:title', file);
  html = mustReplace(html, /name="twitter:title" content="[^"]*"/, 'name="twitter:title" content="Coding Classes in ' + N + ' Near Me | Live Online, Kids to Adults"', 'twitter:title', file);

  // 2. hero
  html = mustReplace(html, '<h1>Coding classes in ' + N + ', <span class="ink-soft">built to actually stick.</span></h1>',
    '<h1 ' + MARK + '>Coding classes in ' + N + ', <span class="ink-soft">live online for kids, teens and adults.</span></h1>', 'h1', file);
  html = mustReplace(html, /<p class="city-lede">[\s\S]*?<\/p>/,
    '<p class="city-lede">Searching for coding classes near me in ' + N + '? Every class is live online, from <strong>' + fromTo + '</strong> to every street in between: a batch of 5 to 10, a mentor who knows your child\'s name, and projects they can open and show you. Kids from 6, teens, college students and adults.</p>', 'lede', file);
  html = mustReplace(html, /(<div class="register-row"><span class="rk">Format<\/span><span class="rv">[^<]*<\/span><\/div>)/,
    '$1\n<div class="register-row"><span class="rk">Fees</span><span class="rv">Group from <b><span data-price="coding.india.group">&#8377;1,499</span></b> a month &middot; free demo first</span></div>', 'register fees row', file);

  // 3. "where we teach" intro
  html = mustReplace(html, new RegExp('(<h2>Where in ' + esc(N) + ' we teach</h2>\\s*)<p>[^<]*</p>'),
    '$1<p>If you searched for coding classes near me, here is the honest answer: there is no commute. Every class is live online, your child joins from home in any of these areas, and the batch is the same small size either way.</p>', 'areas intro', file);

  // 4. price cards anchored to the config
  [['1,499', 'group'], ['2,999', 'miniBatch'], ['4,999', 'personal']].forEach(([amt, key]) => {
    html = mustReplace(html, new RegExp('<div class="pv">(?:&#8377;|₹)' + esc(amt) + '<small> /month</small></div>'),
      '<div class="pv"><span data-price="coding.india.' + key + '">&#8377;' + amt + '</span><small> /month</small></div>', 'price card ' + key, file);
  });

  // 5. batch size from brand facts (group 5-10)
  html = html.replace(/5&ndash;8/g, '5&ndash;10').replace(/5-8 (students|Students)/g, '5-10 $1').replace(/5 to 8 students/g, '5 to 10 students');

  // 6. FAQ text fixes, visible and schema at once
  AGE_OLD.forEach((t) => { html = html.split(t).join(AGE_NEW); });
  html = html.split('Scratch (for kids 8-12)').join('Scratch (for kids 6-12)');
  html = html.split('and affordable pricing set us apart').join('and fees stated up front set us apart');
  // em-dashes: the JSON-LD carries them escaped (—), the HTML carries the character
  html = html.split(' \\u2014 ').join(': ').split(' — ').join(': ');

  // 7. new and rewritten FAQ entries
  const nearQ = 'Are these coding classes near me in ' + N + ', or online?';
  const nearA = 'Live online, which is what puts them near you anywhere in ' + N + ': ' + areas + ' and every area in between. Your child joins a live mentor from home in a batch of 5 to 10, with no commute and no fixed centre timetable. If you were looking for offline coding classes near you, this is the same small-batch, teacher-led class without the travel, and you can see it for yourself in a free demo or a full Priority Live Demo.';
  const costQ = 'How much do coding classes cost in ' + N + '?';
  const costA = 'Three formats: a group of 5 to 10 students, a mini batch of 3 to 4, or one-to-one, each billed monthly, with two live classes a week in the group formats. The current fees for your region are shown in the pricing section of this page and on our pricing page. Every plan starts with a free demo, or a Priority Live Demo if you want a full class today or tomorrow.';
  const placeQ = 'Do your coding classes in ' + N + ' come with placement?';
  const placeA = 'No. We do not sell placement guarantees or job referrals, and we would be wary of any institute in ' + N + ' that does. What the college track gives you is the thing interviews actually test: working projects you built yourself, data structures and algorithms you can solve live, a completion certificate, and a mentor who has sat on the other side of the table.';

  // visible: cost answer rewritten in place (or added), near-me first, placement last
  const costRe = new RegExp('<details class="faq-item">\\s*<summary>' + esc(costQ) + '</summary>\\s*<div class="faq-a">[\\s\\S]*?</div>\\s*</details>');
  const hadCost = costRe.test(html);
  if (hadCost) html = html.replace(costRe, visibleQ(costQ, costA).trim());
  html = mustReplace(html, /<div class="faq-list">\n?/, '<div class="faq-list">\n' + visibleQ(nearQ, nearA) + (hadCost ? '' : visibleQ(costQ, costA)), 'faq-list open', file);
  if (c.placement) {
    html = mustReplace(html, /(<div class="faq-list">[\s\S]*?)(\n?\s*<\/div>\s*<\/section>)/, (m, a, b) => a + '\n' + visibleQ(placeQ, placeA).trim() + b, 'faq-list close', file);
  }
  // schema: drop any old cost entry, insert the new ones after mainEntity
  html = html.replace(/\s*\{ "@type": "Question", "name": "How much do coding classes cost in [^"]*", "acceptedAnswer": \{ "@type": "Answer", "text": "[^"]*" \} \},?\n?/g, '\n');
  html = mustReplace(html, /("mainEntity": \[\n)/, '$1' + schemaQ(nearQ, nearA) + schemaQ(costQ, costA) + (c.placement ? schemaQ(placeQ, placeA) : ''), 'schema mainEntity', file);

  // 8. checks: every ld+json parses, visible FAQ count == schema count, texts match
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  blocks.forEach((b, i) => { try { JSON.parse(b); } catch (e) { throw new Error(file + ': ld+json block ' + i + ' invalid: ' + e.message); } });
  const vis = [...html.matchAll(/<details class="faq-item">\s*<summary>([\s\S]*?)<\/summary>\s*<div class="faq-a">([\s\S]*?)<\/div>/g)].map((m) => [norm(m[1]), norm(m[2])]);
  const sch = [...html.matchAll(/\{ "@type": "Question", "name": "([^"]*)", "acceptedAnswer": \{ "@type": "Answer", "text": "([^"]*)" \} \}/g)].map((m) => [norm(JSON.parse('"' + m[1] + '"')), norm(JSON.parse('"' + m[2] + '"'))]);
  const missing = vis.filter(([q, a]) => !sch.some(([sq, sa]) => sq === dec(q) && sa === dec(a)));
  if (vis.length !== sch.length || missing.length) {
    console.warn('  ' + c.slug + ': visible FAQ ' + vis.length + ', schema ' + sch.length + (missing.length ? '; visible text differs from schema: ' + missing.map((x) => x[0]).join(' | ') : ''));
  }
  if (/5&ndash;8|5-8 students|Rs\.1499|Rs\.2,999|₹1,499\/month/.test(html)) throw new Error(file + ': old batch size or literal price still present');

  if (!DRY) fs.writeFileSync(file, html);
  changed++;
  console.log((DRY ? 'would write ' : 'wrote ') + c.slug + ' (visible FAQ ' + vis.length + ', schema ' + sch.length + ')');
});
console.log(changed + ' pages ' + (DRY ? 'would change' : 'changed'));
