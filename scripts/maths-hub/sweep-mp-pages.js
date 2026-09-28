#!/usr/bin/env node
/**
 * sweep-mp-pages.js
 * ------------------------------------------------------------------
 * Copy sweep for the 75 pages on the shared maths-pages.css template
 * (owner go-ahead 2026-09-28, "option 1"). IDEMPOTENT: every transform
 * matches only the old wording, so re-running after a restore is safe.
 *
 *   node scripts/maths-hub/sweep-mp-pages.js            report only
 *   node scripts/maths-hub/sweep-mp-pages.js --write    apply
 *
 * What it changes (and why):
 *  1. maths-pages.css cache-bust ?v=20260928 (the brand block is new CSS).
 *  2. "Book a free demo / trial ..." buttons that opened the callback form
 *     become <a data-pd-book> Priority Demo links (the whole element, so
 *     the label and the action agree). Classes are kept.
 *  3. Every "free", "no card" claim that sat next to those CTAs goes: the
 *     trust item, the course-card chip, the per-class price line, the
 *     "Class 1 . The free demo" step. The free demo still exists (waiting
 *     list); nothing here says it does not.
 *  4. One currency per visitor: hand-typed own fees ("USD 150 a month",
 *     "$18.75 per hour") become data-price anchors or no-number wording.
 *     Where a fee sits next to a schedule, the schedule gets an India twin
 *     (data-intl-default / data-india-reveal): India 1-on-1 is 1 a week.
 *  5. FAQs: own fees leave FAQ text (it leaks into FAQPage schema), and the
 *     "Is there a free trial?" family becomes "Can we try a class before
 *     enrolling?" -> Priority Demo. Visible answer and schema text are
 *     rewritten together to identical wording.
 *
 * Pages whose subject IS free (/free-trial, /free-coding-starter-kit) get
 * only the CSS bump; their wording is the owner's call.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const PAGES = path.join(ROOT, 'src', 'pages');
const BRAND = require(path.join(ROOT, 'scripts', 'brand-facts.json'));
const WRITE = process.argv.includes('--write');
const SKIP_COPY = new Set(['free-trial', 'free-coding-starter-kit']);

const PD = BRAND.priorityDemo;
const strip = (h) => h.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&middot;/g, '·').replace(/&nbsp;/g, ' ').replace(/&rsquo;/g, '’').replace(/\s+/g, ' ').trim();
const jsonStr = (s) => JSON.stringify(s).slice(1, -1);
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const OWN_FEE = /USD\s?\$?1[05]0\b|US\$\s?1[05]0|\$1[05]0\b|\$100-\$150|C\$\d|USD\s?\$?100\b/;
const FREEISH = /\bfree\b|no card|registration fee|eight live|8 live|recordings/i;

const TRY_Q = 'Can we try a class before enrolling?';
const tryAnswer = (slug) => `Yes. <a href="/priority-demo" data-pd-book="mp-faq-${slug}">Book a Priority Demo</a>: a full live class of ${PD.length}, today or tomorrow, with a mentor reserved for your child. ${PD.report} If you enrol, the demo fee is adjusted against your first month's fee.`;
const costAnswer = (hasPricing) => `The fees for private 1-on-1 and small-group classes are shown in your own currency in the <a href="${hasPricing ? '#pricing' : '/pricing'}">pricing section</a>${hasPricing ? ' of this page' : ''}. Billing is monthly, there is no contract and you can cancel any time.`;

const CTA_TEXTS = /^(?:Not sure which fits\? )?Book (?:a|the) free (?:demo|trial)(?: class| lesson| session)?$/;

function sweep(slug, html) {
  const log = [];
  const count = (label, before, after) => { if (before !== after) log.push(label); return after; };
  let h = html;

  // 1. cache-bust
  h = count('css-v', h, h.replace(/maths-pages\.css(?:\?v=\d+)?"/g, 'maths-pages.css?v=20260928"'));
  if (SKIP_COPY.has(slug)) return { h, log };
  const hasPricing = /id="pricing"/.test(h);

  // 2. CTA buttons -> Priority Demo links
  h = count('cta', h, h.replace(/<button type="button" class="([^"]*)" onclick="openCallbackModal\(\)">([^<]*)<\/button>/g, (m, cls, text) => {
    const t = text.trim();
    if (!CTA_TEXTS.test(t) && !/free (demo|trial)/i.test(t)) return m;
    const label = /^Not sure which fits\?/.test(t) ? 'Not sure which fits? Book a Priority Demo' : 'Book a Priority Demo';
    return `<a class="${cls}" href="/priority-demo" data-pd-book="mp-${slug}">${label}</a>`;
  }));

  // 3. free claims next to the CTAs
  h = count('trust-free', h, h.replace(/<span class="v">Free<\/span><span class="l">(?:Demo|Trial) class, no card needed<\/span>/g,
    `<span class="v">45-60 min</span><span class="l">Priority Demo, today or tomorrow</span>`));
  h = count('chip', h, h.replace(/<span>Free (?:demo|trial) first<\/span>/g, '<span>Priority Demo first</span>'));
  h = count('step', h, h.replace(/Class 1 &middot; The free demo( diagnostic)?</g, (m, d) => `Class 1 &middot; The Priority Demo${d || ''}<`));
  h = count('diag-line', h, h.replace('That is exactly what the free diagnostic demo answers, honestly,', 'That is exactly what a Priority Demo answers, honestly,'));

  // 4a. per-class price line: anchors (perClass derive knows each region's classes a month)
  h = count('per-class', h, h.replace(
    /That is <strong>\$(18\.75|12\.50) per dedicated hour<\/strong> of 1-on-1 teaching, or \$(12\.50|5) in a small group\. No registration fee, no contract, and a free demo before any payment\./g,
    (m, a, b) => {
      const subj = a === '18.75' ? 'maths' : 'coding';
      return `That is <strong><span data-price="${subj}.international.personal" data-price-derive="perClass">$${a}</span> per dedicated hour</strong> of 1-on-1 teaching, or <span data-price="${subj}.international.group" data-price-derive="perClass">$${b}</span> in a small group. No registration fee, no contract, and you can see a full class first with a Priority Demo.`;
    }));
  // 4b. hero "USD 150 a month, eight live lessons, two a week" -> no number (schedule differs by region)
  h = count('hero-fee', h, h.replace(/<strong>USD 150 a month<\/strong>, eight live lessons, two a week(?=[,.])/g,
    `Live one-hour lessons, billed monthly (<a href="#pricing">see the plans in your currency</a>)`));
  // 4c. trust item label beside the 1-on-1 price
  h = count('trust-label', h, h.replace(/(data-price="(?:maths|coding)\.international\.personal">[^<]*<\/span><span class="u">\/mo<\/span><\/span><span class="l">)(?:8 live (?:lessons|sessions|classes) · cancel any time| · 8 live (?:sessions|classes))(<\/span>)/g,
    '$11-on-1 plan · cancel any time$2'));
  // 4d. 1-on-1 price-card schedule: India twin
  h = count('card-schedule', h, h.replace(/<div class="mp-price[^"]*">[\s\S]*?<\/div>/g, (card) => {
    if (!/<h3>[^<]*(?:1:1|1-on-1|One-to-one|one-to-one|Private|private)[^<]*<\/h3>/.test(card) || /data-india-reveal/.test(card)) return card;
    return card.replace(/<li>8 live (one-to-one |1-on-1 |private )?(lessons|sessions|classes)( a month)? ?\(2 per week, 1 hour each\)<\/li>|<li>8 live one-hour classes a month, 2 per week<\/li>/, (li, kind, noun) =>
      `<li data-intl-default="true">${li.slice(4, -5)}</li><li data-india-reveal="true" hidden>4 live ${kind || 'one-hour '}${noun || 'classes'} a month (1 per week, 1 hour each)</li>`);
  }));

  // 4e. second layer: phrase-level copy (pass 2, 2026-09-28). Each pattern is
  // the old wording only, so a re-run is a no-op.
  const PHRASES = [
    [/<button type="button" class="([^"]*)" onclick="openCallbackModal\(\)">(?:Get|Book) the free diagnostic demo<\/button>/g, `<a class="$1" href="/priority-demo" data-pd-book="mp-${slug}">Book a Priority Demo</a>`],
    [/Our <strong>demo class doubles as that diagnostic<\/strong>, and it is free\./g, 'A <strong>Priority Demo doubles as that diagnostic</strong>: a full live class, with a written skill report afterwards.'],
    [/<p>Meet the tutor, see how we teach, and watch your child explain a piece of maths back to you\. No card needed, no pressure afterwards\.<\/p>/g,
      `<p>Meet the tutor in a full live class of ${PD.length}, see how we teach, and watch your child explain a piece of maths back to you. You get a written skill report afterwards, and the fee is adjusted against your first month if you enrol.</p>`],
    [/<h2>Book a free trial lesson for your (teen|child)\.<\/h2>/g, '<h2>Book a Priority Demo for your $1.</h2>'],
    [/<h2>Book a free trial class\.<\/h2>/g, '<h2>Book a Priority Demo.</h2>'],
    [/<p>Book the free trial class\. /g, '<p>Book a Priority Demo. '],
    [/ No card, no pressure, and the honest answer either way\./g, ' No pressure, and the honest answer either way.'],
    [/<span class="v">Free<\/span><span class="l">Trial doubles as placement<\/span>/g, '<span class="v">45-60 min</span><span class="l">Priority Demo doubles as placement</span>'],
    // UAE family: fee + schedule in one sentence -> no number
    [/<strong>USD 150 a month<\/strong>, eight live sessions, (in Gulf Standard Time|around your work)\./g, 'Live one-hour sessions $1, billed monthly (<a href="#pricing">see the plans in your currency</a>).'],
    [/Pricing is USD 150 per month for eight 1:1 (?:sessions|lessons), lessons run in Gulf Standard Time, and the first (?:session|lesson) is free\./g,
      'Lessons run in Gulf Standard Time, the monthly plans are shown in your currency in the pricing section, and you can see a full class first with a Priority Demo.'],
    [/1-on-1 for (?:USD )?\$150 a month(?: \(about [A-Z]{1,2}\$\d+\))? or small group for \$100(?: \(about [A-Z]{1,2}\$\d+\))?/g, '1-on-1 or small group, priced in your currency'],
    // "free demo" as a noun phrase in prose
    [/, free (?:diagnostic )?demo(?: class)? first\./g, ', Priority Demo first.'],
    [/start with the free demo class and let the/g, 'start with a Priority Demo and let the'],
    [/Our free demo class doubles as (exactly )?this diagnostic/g, 'A Priority Demo doubles as $1this diagnostic'],
    [/Our free demo doubles as/g, 'A Priority Demo doubles as'],
    [/The free demo (doubles as|maps|places)/g, 'The Priority Demo $1'],
    [/the free demo shows it/g, 'a Priority Demo shows it'],
    [/judge the real thing in the free demo class/g, 'judge the real thing in a Priority Demo'],
    [/the free trial reads it honestly/g, 'a Priority Demo reads it honestly'],
    [/the free trial exists precisely for this experiment/g, 'a Priority Demo is built for exactly this experiment'],
    [/One free trial settles/g, 'One Priority Demo settles'],
    [/That is what the free trial reads/g, 'That is what a Priority Demo reads'],
    [/ The diagnostic demo is free, no card needed\./g, ''],
  ];
  for (const [re, rep] of PHRASES) h = count('p2', h, h.replace(re, rep));
  // meta / og descriptions: no fee, no free-trial promise in the snippet
  h = count('meta', h, h.replace(/(<meta (?:name="description"|property="og:description"|name="twitter:description") content=")([^"]*)(")/g, (m, a, c, z) =>
    a + c.replace(/ USD 150\/month, 8 classes\. Book a free trial\./, ' Book a Priority Demo.').replace(/ 8 classes a month from USD 100\./, ' 8 classes a month.')
      .replace(/[.,]? ?[Ff]ree demo\.$/, '. Priority Demo available.').replace(/ Book a free (?:trial|demo)(?: class| lesson)?(?: today)?[.!]/g, ' Book a Priority Demo.') + z));

  // 5. FAQs (visible + schema together)
  const changes = []; // {oldQ, newQ, newA}
  h = h.replace(/<details([^>]*)>\s*<summary([^>]*)>([\s\S]*?)<\/summary>\s*<div class="a">([\s\S]*?)<\/div>\s*<\/details>/g, (m, dAttr, sAttr, qHtml, aHtml) => {
    const q = strip(qHtml), a = strip(aHtml);
    let newQ = null, newA = null;
    if (/^(Can we try before paying anything\?|Is there a free trial\?|Is the first (lesson|session|class) free\?)$/.test(q)) {
      newQ = TRY_Q; newA = tryAnswer(slug);
    } else if (/cost|price|priced|good value|how much/i.test(q) && OWN_FEE.test(a)) {
      // keep only the market-comparison sentences (other tutors' prices are content, not our fee)
      const COMPARE = /typical|typically|local|centre|center|norm|in-person|private tutor|Juni|Outschool|Code Ninjas|iD Tech|tech camp/i;
      const keep = a.split(/(?<=[.!?])\s+/).filter((s) => COMPARE.test(s) && !OWN_FEE.test(s) && !FREEISH.test(s));
      newQ = q; newA = costAnswer(hasPricing) + (keep.length ? ' ' + keep.join(' ') : '');
    } else if (/^Pricing is set for each country/.test(a)) {
      newQ = q; newA = aHtml.replace(/<\/?p>/g, '').trim()
        .replace(', and every student starts with a free demo class.', '. To see a class first, book a Priority Demo.')
        .replace(' The demo class is free.', '').replace(' The first class is a free live demo, no card needed.', '');
      if (strip(newA) === a) newQ = null;
    }
    if (!newQ) return m;
    changes.push({ oldQ: q, newQ, newA });
    return `<details${dAttr}><summary${sAttr}>${newQ}</summary><div class="a"><p>${newA}</p></div></details>`;
  });
  changes.forEach((c) => log.push(`faq:${c.oldQ.slice(0, 28)}`));

  // 5b. FAQPage schema: these pages keep a separately written list (names and
  // texts differ from the visible FAQ), so it gets the same rules on its own.
  h = h.replace(/("name"\s*:\s*")((?:[^"\\]|\\.)*)("\s*,\s*"acceptedAnswer"\s*:\s*\{\s*"@type"\s*:\s*"Answer"\s*,\s*"text"\s*:\s*")((?:[^"\\]|\\.)*)(")/g,
    (m, a, qJ, b, tJ, z) => {
      const q = JSON.parse(`"${qJ}"`), t = JSON.parse(`"${tJ}"`);
      let nq = q, nt = t;
      if (/^(Can we try before paying( anything)?\?|Is there a free trial\?|Is the first (lesson|session|class) free\?)$/.test(q)) {
        nq = TRY_Q; nt = strip(tryAnswer(slug));
      } else if (/cost|price|priced|good value|how much/i.test(q) && OWN_FEE.test(t)) {
        const COMPARE = /typical|typically|local|centre|center|norm|in-person|private tutor|Juni|Outschool|Code Ninjas|iD Tech|tech camp/i;
        const keep = t.split(/(?<=[.!?])\s+/).filter((s) => COMPARE.test(s) && !OWN_FEE.test(s) && !FREEISH.test(s));
        nt = strip(costAnswer(hasPricing)) + (keep.length ? ' ' + keep.join(' ') : '');
      } else if (/^Pricing is set for each country/.test(t)) {
        nt = t.replace(', and every student starts with a free demo class.', '. To see a class first, book a Priority Demo.')
          .replace(' The demo class is free.', '').replace(' The first class is a free live demo, no card needed.', '');
      }
      if (nq === q && nt === t) return m;
      log.push(`schema:${q.slice(0, 24)}`);
      return `${a}${jsonStr(nq)}${b}${jsonStr(nt)}${z}`;
    });
  return { h, log };
}

const files = fs.readdirSync(PAGES).filter((f) => f.endsWith('.html'))
  .filter((f) => /maths-pages\.css/.test(fs.readFileSync(path.join(PAGES, f), 'utf8')));
let changed = 0; const missing = [];
for (const f of files) {
  const slug = f.replace(/\.html$/, '');
  const p = path.join(PAGES, f);
  const html = fs.readFileSync(p, 'utf8');
  const { h, log } = sweep(slug, html);
  log.filter((l) => l.startsWith('faq-schema-MISSING')).forEach((l) => missing.push(slug + ' ' + l));
  if (h !== html) { changed++; if (WRITE) fs.writeFileSync(p, h); }
  console.log(`${h !== html ? '*' : ' '} ${slug.padEnd(52)} ${log.join(', ')}`);
}
console.log(`\n${files.length} template pages, ${changed} ${WRITE ? 'written' : 'would change'}`);
if (missing.length) { console.log('FAQ schema entries not found (fix by hand):'); missing.forEach((m) => console.log('  ' + m)); }
