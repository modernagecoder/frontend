#!/usr/bin/env node
/**
 * Keyword Ledger 2026-27, action 20: UK maths and GCSE CS depth, where the UK prompts (P07, P17)
 * named MyTutor, Third Space, Superprof, Spires and PMT and not us. The pages exist; what was
 * missing is the UK vocabulary (KS3, Year 8, Year 9) in quotable, self-contained passages, the
 * routes between the GCSE, KS3 and UK-kids pages, and one fee answer that stated USD inside FAQ
 * text (a schema leak and a wrong-currency sentence for UK visitors).
 *
 *   gcse-maths-tuition-online         lede sentence + 2 FAQ items (KS3, starting early) + fee FAQ made price-free
 *   uk-gcse-computer-science-tutoring quotable "tutor online, in one paragraph" passage + 2 FAQ items
 *   online-maths-tuition              one UK FAQ item routing to the GCSE, KS3 and UK pages
 *
 * Real UK reviews: none exist on the Wall of Love (lovewall/constants.ts has no UK reviewer), so
 * none are added; that part of the action needs real UK families and is left to the owner.
 * Then: scripts/seo/sync-faq-schema.js on the first two pages; generate-static-md.
 *
 * Idempotent. node scripts/seo/retarget-uk-passages.js [--dry]
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const PAGES = path.join(ROOT, 'src', 'pages');
const DRY = process.argv.includes('--dry');
const MARK = 'data-retarget="uk-2026-09"';
const rd = (f) => fs.readFileSync(path.join(PAGES, f), 'utf8');
const wr = (f, s) => { if (/—/.test(s)) throw new Error(f + ': em dash'); if (!DRY) fs.writeFileSync(path.join(PAGES, f), s); console.log((DRY ? 'would write ' : 'wrote ') + f); };
const must = (f) => { if (!fs.existsSync(path.join(PAGES, f + '.html'))) throw new Error('link target missing: /' + f); return '/' + f; };
const KS3M = must('ks3-maths-tuition-online'), KS3C = must('ks3-computing-tuition-online'), UKKIDS = must('online-maths-tuition-for-kids-in-uk'), UKTEENS = must('online-maths-tuition-for-teens-in-uk'), GCSE = must('gcse-maths-tuition-online'), CS = must('uk-gcse-computer-science-tutoring');
function findDivClose(html, openIdx) {
  const re = /<div\b|<\/div>/g; re.lastIndex = openIdx + 1; let depth = 1, m;
  while ((m = re.exec(html))) { depth += m[0] === '</div>' ? -1 : 1; if (!depth) return m.index; }
  throw new Error('unbalanced div');
}
const insertBeforeClose = (h, openTag, items) => {
  const i = h.indexOf(openTag); if (i === -1) throw new Error('container not found: ' + openTag);
  const close = findDivClose(h, i); const ls = h.lastIndexOf('\n', close);
  return h.slice(0, ls + 1) + items + h.slice(ls + 1);
};

/* ---------------- GCSE maths ---------------- */
(function gcse() {
  const f = 'gcse-maths-tuition-online.html';
  let h = rd(f);
  const fee = '<details><summary>How much does it cost?</summary><div class="a"><p>USD 150 per month for private 1:1, eight live lessons, two each week. Small-group option USD 100 per month. No contract; cancel any time.</p></div></details>';
  if (h.includes(fee)) h = h.replace(fee, '<details><summary>How much does it cost?</summary><div class="a"><p>A flat monthly fee, shown in your own currency in the pricing section of this page: private one-to-one with eight live lessons a month, two each week, or a small-group batch of 5 to 10 at a lower fee. No enrolment charge and no contract; stop at any month end.</p></div></details>');
  if (/USD \d+ per month/.test(h.slice(h.indexOf('<div class="mp-faq')))) throw new Error('a USD figure is still inside the FAQ');
  if (!h.includes(MARK)) {
    const lede = h.indexOf('<p class="mp-lede">'); if (lede === -1) throw new Error('mp-lede not found');
    const pc = h.indexOf('</p>', lede);
    h = h.slice(0, pc) + ' Younger students in Years 7 to 9 start on our <a href="' + KS3M + '">KS3 maths tuition</a>, so the GCSE course begins from a base that holds.' + h.slice(pc);
    const items = [
      ['Do you teach KS3 maths (Years 7, 8 and 9) as well as GCSE?', 'Yes. KS3 maths tuition online runs on the same format as GCSE: live, one-to-one or a small batch, one tutor for the year, working from the school\'s scheme of work. Year 7 and Year 8 students build the number, algebra and ratio fluency the GCSE papers assume; Year 9 students start meeting GCSE-style questions before the course begins. See <a href="' + KS3M + '">KS3 maths tuition online</a>.'],
      ['Can a Year 8 or Year 9 student start GCSE maths tuition early?', 'A Year 9 student can, and often should, because the foundation and higher tier decision is easier to make well with a year of evidence. A Year 8 student is usually better served by KS3 tuition that fixes gaps in fractions, negative numbers and early algebra, which is where most GCSE marks are lost two years later. The free first lesson tells you which applies to your child.'],
    ].map(([q, a]) => '      <details ' + MARK + '><summary>' + q + '</summary><div class="a"><p>' + a + '</p></div></details>\n').join('');
    h = insertBeforeClose(h, '<div class="mp-faq mp-mt">', items);
  }
  wr(f, h);
})();

/* ---------------- GCSE computer science ---------------- */
(function cs() {
  const f = 'uk-gcse-computer-science-tutoring.html';
  let h = rd(f);
  if (h.includes(MARK)) { console.log('already done:', f); return; }
  const lede = h.indexOf('<p class="ag-lede">'); if (lede === -1) throw new Error('ag-lede not found');
  const pc = h.indexOf('</p>', lede) + '</p>'.length;
  const passage = '\n        <p class="ag-lede" ' + MARK + '>A GCSE computer science tutor online at Modern Age Coders, in one paragraph: a live hour on a video call with a tutor who teaches your board (AQA 8525, OCR J277 or Edexcel 1CP2) and no other, in a batch of 5 to 10 students on the same specification or one-to-one, twice a week across Year 10 and Year 11, with Python written and run in every class, past-paper questions marked against the board\'s own mark scheme from the first term, and the same tutor for both years. Evening and weekend slots run in UK time. The first class is a free demo.</p>';
  h = h.slice(0, pc) + passage + h.slice(pc);
  const items = [
    ['How do I choose a GCSE computer science tutor online?', 'Ask four things: which board they teach and whether they teach it separately from the others; whether the student writes and runs code in every class rather than watching; how past papers are marked (against the board\'s mark scheme, or by feel); and whether the same tutor stays for both years. A tutor who cannot name the difference between AQA 8525 and OCR J277 is preparing your child for the wrong exam.'],
    ['Do you also tutor KS3 computing, before GCSE starts?', 'Yes. Year 7 to Year 9 students take <a href="' + KS3C + '">KS3 computing tuition online</a> on the same format: live, small batch or one-to-one, with real Python from the start, so the GCSE course begins with the programming already in place. Students who want the maths behind the computing can pair it with <a href="' + KS3M + '">KS3 maths tuition</a>.'],
  ].map(([q, a]) => '      <div class="ag-faq-item" ' + MARK + '>\n        <h3>' + q + '</h3>\n        <p>' + a + '</p>\n      </div>\n').join('');
  h = insertBeforeClose(h, '<div class="ag-faq">', items);
  wr(f, h);
})();

/* ---------------- the maths hub ---------------- */
(function hub() {
  const f = 'online-maths-tuition.html';
  let h = rd(f);
  if (h.includes(MARK)) { console.log('already done:', f); return; }
  const item = '        <div class="faq-item-mt" ' + MARK + '>\n            <button class="faq-q-mt">Do you teach UK students: KS3, Year 8 and GCSE maths?\n                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9"/></svg>\n            </button>\n            <div class="faq-a-mt"><div class="faq-a-mt-inner">Yes, in UK time, on the UK curriculum. <a href="' + KS3M + '">KS3 maths tuition online</a> covers Years 7 to 9, including the Year 8 fluency work in fractions, ratio and early algebra that GCSE assumes; <a href="' + GCSE + '">GCSE maths tuition online</a> covers AQA, Edexcel and OCR at foundation and higher tier; and the <a href="' + UKKIDS + '">UK kids</a> and <a href="' + UKTEENS + '">UK teens</a> pages describe the primary and secondary routes. UK students who also take computer science can pair maths with <a href="' + CS + '">GCSE computer science tutoring</a>.</div></div>\n        </div>\n';
  h = insertBeforeClose(h, '<div class="faq-list-mt">', item);
  wr(f, h);
})();
