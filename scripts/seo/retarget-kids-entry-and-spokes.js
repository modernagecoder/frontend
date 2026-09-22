#!/usr/bin/env node
/**
 * Keyword Ledger 2026-27, action 12 (the retarget half) and the tail of action 14.
 *
 *  A. /best-online-coding-classes-for-kids-2026 becomes the global kids entry page:
 *     title, description and H1 carry "online coding classes for kids" and "live" (GSC:
 *     "coding classes for kids" 1,032 impr @16, "coding classes for kids online" 56 @49, page
 *     1,980 impr @6.7); a one-paragraph answer block; three FAQ items that route to the new
 *     live-vs-recorded page, the UK/US kids pages and the adult hub; the hard-coded "$5 to
 *     $12.50 per class" (a dollar figure shown to Indian visitors) becomes a data-price anchor;
 *     12px type floor. Then run scripts/seo/sync-faq-schema.js on it.
 *  B. Every adult spoke page gets a contextual first-body link up to /coding-classes-for-adults
 *     (the hub-and-spoke rule in seo/superseo-2026-09/07-topic-cluster-planning.md).
 *  C. /maths-challenges (the daily challenge page the report wanted as the olympiad chooser)
 *     routes to the chooser hub /maths-olympiad-classes-online built under action 14.
 *
 * Idempotent. node scripts/seo/retarget-kids-entry-and-spokes.js [--dry]
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const PAGES = path.join(ROOT, 'src', 'pages');
const DRY = process.argv.includes('--dry');
const MARK = 'data-retarget="kids-2026-09"';
const rd = (f) => fs.readFileSync(path.join(PAGES, f), 'utf8');
const wr = (f, s) => { if (!DRY) fs.writeFileSync(path.join(PAGES, f), s); console.log((DRY ? 'would write ' : 'wrote ') + f); };
const must = (f) => { if (!fs.existsSync(path.join(PAGES, f + '.html'))) throw new Error('link target missing: /' + f); return '/' + f; };
const esc = (s) => s.replace(/&(?!(amp|lt|gt|quot|#\d+|middot);)/gi, '&amp;').replace(/"/g, '&quot;');
function findDivClose(html, openIdx) {
  const re = /<div\b|<\/div>/g; re.lastIndex = openIdx + 1; let depth = 1, m;
  while ((m = re.exec(html))) { depth += m[0] === '</div>' ? -1 : 1; if (!depth) return m.index; }
  throw new Error('unbalanced div');
}

/* ---------------- A. kids entry page ---------------- */
(function kids() {
  const f = 'best-online-coding-classes-for-kids-2026.html';
  let h = rd(f);
  const LIVE = must('live-vs-recorded-coding-classes'), ADULTS = must('coding-classes-for-adults'), UK = must('online-coding-classes-for-kids-uk'), US = must('online-coding-classes-for-kids-usa'), IN = must('best-coding-classes-online'), COST = must('online-coding-classes-cost');
  const title = 'Online Coding Classes for Kids: Best Live Options, Ranked (2026)';
  const desc = 'Online coding classes for kids, ranked honestly for 2026: six real options including a free one, judged on live teaching per hour, projects and value. Sourced.';
  if (title.length > 65) throw new Error('title ' + title.length);
  if (desc.length < 150 || desc.length > 160) throw new Error('description ' + desc.length);
  const sub = (re, rep) => { if (!re.test(h)) throw new Error(f + ': missing ' + re); h = h.replace(re, rep); };
  sub(/<title>[^<]*<\/title>/, '<title>' + esc(title) + '</title>');
  sub(/<meta name="description" content="[^"]*"/, '<meta name="description" content="' + esc(desc) + '"');
  sub(/<meta property="og:title" content="[^"]*"/, '<meta property="og:title" content="' + esc(title) + '"');
  sub(/<meta name="twitter:title" content="[^"]*"/, '<meta name="twitter:title" content="' + esc(title) + '"');
  sub(/<meta property="og:description" content="[^"]*"/, '<meta property="og:description" content="' + esc(desc) + '"');
  sub(/<meta name="twitter:description" content="[^"]*"/, '<meta name="twitter:description" content="' + esc(desc) + '"');
  sub(/<h1 class="reveal">[^<]*<\/h1>/, '<h1 class="reveal">Best live online coding classes for kids in 2026, ranked honestly</h1>');
  // the dollar figure shown to every visitor becomes a region-switched anchor
  h = h.replace('<span>$5 to $12.50 per class</span>', '<span><span data-price="coding.india.group" data-price-derive="perClass">₹187</span> per live class in a group</span>');
  // the same range inside schema text and prose (no span possible there) becomes a currency-free phrase
  h = h.split('Modern Age Coders $5 to $12.50').join('Modern Age Coders a flat monthly fee (shown above in your own currency)');
  h = h.split('$5 to $12.50 per class').join('a flat monthly fee shown in your own currency');
  if (/\$5 to \$12\.50/.test(h)) throw new Error('dollar range still present');
  const left = h.match(/[^\n]{0,60}\$12\.50[^\n]{0,40}/g);
  if (left) console.log('note: other $12.50 mentions left as they are:', left.length, left.map((x) => x.replace(/\s+/g, ' ')).join(' || '));
  // 12px floor on the shared compare stylesheet labels
  if (!h.includes('12px type floor')) h = h.replace('<style>:root{--accent:#b45309;--accent-soft:#faf1e6;--accent-line:#ecd3b4}</style>', '<style>:root{--accent:#b45309;--accent-soft:#faf1e6;--accent-line:#ecd3b4}</style>\n  <style>/* 12px type floor (site UI rule) */.kicker,.answer .tag,.sec-head .eyebrow,.rank-meta,.rank-facts span,.cmp-scrollhint,.badge-best,main .msu-kick,main .msu-pc,main .msu-open,main .msu-rl,main .msu-pby{font-size:.78rem}</style>');
  if (!h.includes(MARK)) {
    // one-paragraph answer after the "How we ranked" block
    const a = h.indexOf('<div class="answer reveal" style="margin-top:18px">');
    if (a === -1) throw new Error('answer block not found');
    const aEnd = findDivClose(h, a) + '</div>'.length;
    const block = '\n      <div class="answer reveal" style="margin-top:18px" ' + MARK + '>\n        <span class="tag">Online coding classes for kids, in one paragraph</span>\n        <p>Online coding classes for kids come in three formats: <strong>live</strong> (a teacher on screen while the child codes, in a small batch or 1-on-1), <strong>recorded</strong> (video lessons the child works through alone) and <strong>gamified apps</strong> (puzzles that teach concepts without a teacher). For a first-time coder under about 13, live wins, because typed code fails on mistakes a child cannot diagnose alone; a good recorded course suits a self-driven teen learning one tool. The ranking below judges each option on exactly that: how much live teaching an hour contains, whether real projects get built and reviewed, and what a taught hour costs. The <a href="' + LIVE + '">live versus recorded</a> guide has the full comparison, and <a href="' + COST + '">what coding classes cost</a> explains the fee models.</p>\n      </div>';
    h = h.slice(0, aEnd) + block + h.slice(aEnd);
    // FAQ items
    const fq = h.indexOf('<div class="faq-list">');
    if (fq === -1) throw new Error('faq-list not found');
    const close = findDivClose(h, fq);
    const lineStart = h.lastIndexOf('\n', close);
    const items = [
      ['Are live online coding classes for kids better than recorded courses?', 'For a beginner, yes. A live class has a teacher who sees the child\'s screen and fixes the missing colon in the same minute, and it happens at a fixed time with a person expecting the child, which is why it gets finished. A recorded course is the better choice for a self-driven teenager learning one specific tool, or for testing whether the interest is real before paying anyone. Our <a href="' + LIVE + '">live versus recorded coding classes</a> guide sets out both cases.'],
      ['Which online coding classes for kids are best in India, the UK or the US?', 'The ranking above is global, because every option on it is online. For country detail, including timetable windows, exam-board alignment and the fee in local currency, see <a href="' + IN + '">best coding classes online in India</a>, <a href="' + UK + '">online coding classes for kids in the UK</a> and <a href="' + US + '">online coding classes for kids in the USA</a>.'],
      ['Do you also run coding classes for adults?', 'Yes. The same live format, in batches of 5 to 10 adults or 1-on-1, in the evening and at the weekend, for ages 18 to 67: career changers, working professionals, returners, parents learning alongside a child and later-life learners. The <a href="' + ADULTS + '">coding classes for adults</a> page has the paths, the timetable and the fee.'],
    ].map(([q, a]) => '        <details class="reveal" ' + MARK + '>\n          <summary>' + q + '</summary>\n          <p>' + a + '</p>\n        </details>\n').join('');
    h = h.slice(0, lineStart + 1) + items + h.slice(lineStart + 1);
  }
  if (/—/.test(h)) throw new Error('em dash');
  wr(f, h);
})();

/* ---------------- B. adult spokes link up to the hub ---------------- */
(function spokes() {
  const HUB = must('coding-classes-for-adults');
  const spokes = ['ai-classes-for-adults', 'java-classes-for-adults', 'ai-and-machine-learning-for-working-professionals', 'learn-to-code-over-50-uk', 'online-maths-classes-for-adults-in-uk', 'online-maths-classes-for-adults-in-usa', 'maths-classes-for-adults-uae', 'summer-coding-camp-adults', 'winter-coding-camp-adults', 'best-coding-classes-for-adults-uk', 'best-coding-classes-for-adults-ireland', 'coding-and-ai-classes-for-adults-netherlands', 'how-to-actually-learn-to-code', 'learn-to-code-with-ai'];
  const sentence = ' Every adult path we teach, coding and maths, with the timetable and the fee, is gathered on the <a href="' + HUB + '">coding classes for adults</a> page.';
  let n = 0;
  for (const s of spokes) {
    const f = s + '.html';
    let h = rd(f);
    if (h.includes('href="' + HUB + '"')) { console.log('already linked:', s); continue; }
    const h1 = h.indexOf('<h1');
    if (h1 === -1) throw new Error(s + ': no h1');
    const m = h.slice(h1).match(/<p\b[^>]*class="[^"]*(?:lede|subtitle)[^"]*"[^>]*>/);
    if (!m) throw new Error(s + ': no lede paragraph after h1');
    const pStart = h1 + h.slice(h1).indexOf(m[0]);
    const pClose = h.indexOf('</p>', pStart);
    if (pClose === -1) throw new Error(s + ': lede not closed');
    h = h.slice(0, pClose) + sentence + h.slice(pClose);
    wr(f, h); n++;
  }
  console.log('spokes linked:', n);
})();

/* ---------------- C. daily challenge page routes to the olympiad chooser ---------------- */
(function chooser() {
  const HUB = must('maths-olympiad-classes-online');
  const f = 'maths-challenges.html';
  let h = rd(f);
  if (h.includes('href="' + HUB + '"')) { console.log('already linked:', f); return; }
  const a = '<p>Our courses combine daily practice with expert mentorship for faster results</p>';
  if (!h.includes(a)) throw new Error('maths-challenges: CTA paragraph not found');
  h = h.replace(a, '<p>Our courses combine daily practice with expert mentorship for faster results. If your child enjoys these, the next step is a contest: our <a href="' + HUB + '">maths olympiad chooser</a> matches the right one to their age, country and board, from SOF IMO and IOQM to Math Kangaroo, AMC, UKMT and CEMC.</p>');
  const b = '<a href="/pricing" class="cta-secondary">See Pricing</a>';
  if (!h.includes(b)) throw new Error('maths-challenges: pricing CTA not found');
  h = h.replace(b, b + '\n                    <a href="' + HUB + '" class="cta-secondary">Which maths olympiad?</a>');
  wr(f, h);
})();
