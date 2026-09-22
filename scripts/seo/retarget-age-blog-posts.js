#!/usr/bin/env node
/**
 * Keyword Ledger 2026-27, action 6 (blog half): the two posts that already rank for the
 * under-8 age queries, which have no landing page of their own (kids floor is 6, the age
 * ladder starts at 8):
 *
 *   coding7year.json      /blog/coding-for-7-year-olds-what-how-kids-should-learn-programming
 *                         26,023 impressions @8.1, CTR 0.47% (16 months to 2026-09-19);
 *                         "coding for 7 year olds" 2,084 impr, "beginner coding for 7 year olds" 685,
 *                         "roblox or minecraft for 7 year old" 38 @9.5
 *   coding-six-year.json  /blog/coding-for-6-year-olds  840 impr @8.6; "coding for 6 year olds" 395 @18
 *
 * For each: a title and description written for the click, an answer in the first
 * sentences, the missing sections the queries ask for (a beginner's first month; Roblox or
 * Minecraft; what a first live class looks like), and an accordion FAQ, which the blog
 * generator turns into FAQPage schema. The 6-year-old post's FAQ was plain headings, so it
 * had no schema at all. Brand facts only (ages 6 to 12 on the Scratch course, batch of 5 to
 * 10, one hour, free demo); no prices, because blog pages sit outside the pricing stamper.
 *
 * Idempotent: a post already carrying meta.retarget === MARK is skipped.
 *   node scripts/seo/retarget-age-blog-posts.js [--dry-run]
 * then: npm run generate:blogs
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const DRY = process.argv.includes('--dry-run');
const DATA = path.join(ROOT, 'content', 'blog', 'data');
const TODAY = '2026-09-23';
const MARK = 'age-2026-09';

const scratch = require(path.join(ROOT, 'content', 'courses', 'data', 'scratch-kids.json'));
const sm = scratch.meta || scratch;
if (!/6 to 12/.test(sm.level || '') || sm.slug !== 'scratch-programming-complete-course') throw new Error('Scratch course facts changed; re-read scratch-kids.json before running');
const COURSE = '/courses/' + sm.slug;
const AGE8 = '/coding-for-8-year-olds';
for (const f of ['src/pages/coding-for-8-year-olds.html', 'content/courses/generated/' + sm.slug, 'content/blog/generated/coding-for-7-year-olds-what-how-kids-should-learn-programming', 'content/blog/generated/coding-for-6-year-olds']) {
  if (!fs.existsSync(path.join(ROOT, f))) throw new Error('link target missing: ' + f);
}

const load = (n) => JSON.parse(fs.readFileSync(path.join(DATA, n), 'utf8'));
const save = (n, j) => { if (!DRY) fs.writeFileSync(path.join(DATA, n), JSON.stringify(j, null, 2) + '\n'); };
const H = (level, text, id) => (id ? { type: 'heading', level, text, id } : { type: 'heading', level, text });
const P = (text) => ({ type: 'paragraph', text });
const idx = (secs, pred, label) => { const i = secs.findIndex(pred); if (i === -1) throw new Error('not found: ' + label); return i; };
const lastIdx = (secs, pred, label) => { for (let i = secs.length - 1; i >= 0; i--) if (pred(secs[i])) return i; throw new Error('not found: ' + label); };
const checkDesc = (d, who) => { if (d.length < 150 || d.length > 160) throw new Error(who + ': description ' + d.length + ' chars'); };
const noDash = (j, who) => { if (/—/.test(JSON.stringify(j))) throw new Error(who + ': em dash'); };

/* ---------------- 7 year olds ---------------- */
(function seven() {
  const name = 'coding7year.json';
  const j = load(name);
  if (j.meta.retarget === MARK) { console.log('skip (done):', name); return; }
  const s = j.content.sections;

  j.meta.title = 'Coding for 7 Year Olds: What to Learn, Best Platforms and the First Month';
  j.meta.description = 'What a 7 year old should learn in coding: loops, conditions, events, variables, the best free platforms, a first month week by week, and real progress signs.';
  checkDesc(j.meta.description, name);
  j.meta.keywords = Array.from(new Set(j.meta.keywords.concat(['beginner coding for 7 year olds', 'coding classes for 7 year olds', 'roblox or minecraft for 7 year old', 'coding for 7 year olds first month'])));
  j.meta.tldr = 'A 7 year old should learn four ideas in coding: loops, conditions, events and variables, in Scratch or Code.org, in 30 to 45 minute sessions three or four times a week. A complete beginner gets there in about a month of guided projects. This guide gives the concepts, the platforms, a week-by-week first month, the Roblox-or-Minecraft answer, and the signs of real progress.';
  j.meta.dateModified = TODAY;
  j.meta.retarget = MARK;

  // answer first: replace the third intro paragraph (the "this guide explains" sentence) with a direct answer
  const intro = idx(s, (x) => x.type === 'paragraph' && /^This guide explains exactly what 7-year-olds/.test(x.text), 'intro paragraph');
  s[intro] = P('The short answer: coding for 7 year olds means Scratch or Code.org, four concepts (loops, conditions, events and variables), projects rather than lessons, and sessions of 30 to 45 minutes three or four times a week. A complete beginner who starts at 7 is building their own small games within a month; the <a href="#first-month">week-by-week first month</a> below shows how. This guide covers what a 7 year old should learn, the best platforms, whether Roblox or Minecraft is the right door, and how to recognise real progress rather than screen time.');

  // a beginner's first month, before the session-length section
  const sess = idx(s, (x) => x.type === 'heading' && x.id === 'session-length-frequency', 'session-length heading');
  s.splice(sess, 0,
    H(2, 'Beginner Coding for 7 Year Olds: The First Month, Week by Week', 'first-month'),
    P('Most parents searching for beginner coding for 7 year olds want to know what the first weeks actually look like. This is a plan for a complete beginner at home, in Scratch, at three sessions a week of about 40 minutes. It matches the learning-curve expectations above, just with the projects named.'),
    P('<strong>Week 1, the stage and the cat.</strong> Open Scratch, meet the sprite, the stage and the green flag. Build the classic first project: the cat walks, hits the edge, turns around. Add a costume change so it looks like it is walking. The concept is sequence: blocks run top to bottom. Success looks like the child dragging blocks without help by the third session.'),
    P('<strong>Week 2, loops.</strong> Turn the walk into a forever loop, then a repeat-10 loop with a sound. Make an animated greeting card: a character moves, speaks, the background changes. Ask the child to predict what happens before they click the flag. Success looks like the child choosing a loop on their own instead of stacking the same block twenty times.'),
    P('<strong>Week 3, events and conditions.</strong> Arrow keys move the sprite (events). A falling star, a bag at the bottom, and "if touching star, change score by 1" (a condition and a variable together). This is the simple catching game from the projects section, and it is the first thing most 7 year olds want to show the family.'),
    P('<strong>Week 4, their own idea.</strong> The child names a project, sketches it on paper, and builds it from the pieces of weeks 1 to 3. It will be smaller than the sketch. That is fine; the point is that the ideas came from them. A short quiz with two questions, a chase game or a two-scene story are all typical, and all count.'),
    P('After the first month the pace slows down and deepens: variables for lives and timers, broadcasting between sprites, multi-level games. A child who does this month at home can carry on alone with the project lists above; a child who wants a teacher on screen can do the same month in our <a href="' + COURSE + '">live Scratch course</a>, which takes children from 6 to 12 in a batch of 5 to 10 or 1-on-1, one hour per class, with a free demo first. When your child turns 8 the <a href="' + AGE8 + '">coding for 8 year olds</a> page shows what changes in the next year.'),
    H(2, 'Roblox or Minecraft for a 7 Year Old Who Wants to Code?', 'roblox-or-minecraft'),
    P('Parents ask this because both games advertise coding, and the honest answer at 7 is: play them as games, and code in Scratch. Minecraft has the gentler on-ramp. Code.org\'s Minecraft Hour of Code activities are block-based, free in the browser and fine for a 7 year old, and Minecraft Education Edition uses the same block approach in class settings. Roblox Studio, by contrast, is a real game engine scripted in Lua, a typed text language, and most children are not ready for it before 10 or 11; at 7 the child ends up watching a tutorial rather than coding.'),
    P('So if your 7 year old loves Minecraft, use the Minecraft Hour of Code as a warm-up and move to Scratch for the projects in this guide. If they love Roblox, let them know that Roblox Studio is a goal for a few years from now, and that the loops, conditions and variables they learn in Scratch are exactly what Lua will ask of them later.')
  );

  // FAQ accordion before the closing section
  const close = lastIdx(s, (x) => x.type === 'heading' && x.level === 2 && /related|final|conclusion|next steps|summary/i.test(x.text), 'closing heading');
  s.splice(close, 0,
    H(2, 'Coding for 7 Year Olds: Questions Parents Ask', 'faq'),
    { type: 'accordion', items: [
      { title: 'What should a 7 year old learn in coding first?', content: 'Sequence first (blocks run in order), then loops, then events (when a key is pressed), then conditions and a variable for the score. In Scratch that is roughly the first month of guided projects: a walking cat, an animated card, a catching game, and one project of the child\'s own.' },
      { title: 'Is Scratch good for a 7 year old?', content: 'Yes. Scratch is designed for 8 to 16, but a 7 year old who reads short sentences manages it well, because the blocks read like English and snap together with the mouse. Scratch Junior suits a child who is not reading yet. Code.org\'s second-grade course is the other good starting point.' },
      { title: 'How long should a 7 year old code each week?', content: 'Three or four sessions of 30 to 45 minutes. A 7 year old who asks for more can have more; a 7 year old who is frustrated needs a shorter session or an easier project, not more time. Ending a session while the child still wants to continue is the surest way to keep them coming back.' },
      { title: 'Roblox or Minecraft for a 7 year old who wants to code?', content: 'Minecraft, through the block-based Hour of Code activities, is the one a 7 year old can actually code in. Roblox Studio uses Lua, a typed language, and suits children of 10 or 11 and up. At 7, let them play both and do the real coding in Scratch.' },
      { title: 'Can a 7 year old join live online coding classes?', content: 'Yes. Our live Scratch course takes children from 6 to 12, in a batch of 5 to 10 children of a similar age or 1-on-1, one hour per class with a teacher on screen for the whole hour, and the first class is a free demo. If your child is not ready to sit for an hour yet, waiting a few months loses nothing: the course starts from zero at any age in that range.' },
    ] }
  );
  noDash(j, name);
  save(name, j);
  console.log((DRY ? 'would update ' : 'updated ') + name);
})();

/* ---------------- 6 year olds ---------------- */
(function six() {
  const name = 'coding-six-year.json';
  const j = load(name);
  if (j.meta.retarget === MARK) { console.log('skip (done):', name); return; }
  const s = j.content.sections;

  j.meta.title = 'Coding for 6 Year Olds: How to Start, Best Tools, Session Length and a First Class';
  j.meta.description = 'How to start coding with a 6 year old: readiness signs, the best visual tools (ScratchJr, Kodable, Code.org), 20 to 30 minute sessions, and a first live class.';
  checkDesc(j.meta.description, name);
  j.meta.keywords = Array.from(new Set(j.meta.keywords.concat(['coding classes for 6 year olds', 'coding for 6 and 7 year olds', 'how to teach a 6 year old to code'])));
  j.meta.tldr = 'A 6 year old can start coding with ScratchJr, Kodable or Code.org, in 20 to 30 minute sessions three or four times a week, with a parent alongside for the first few weeks. The goal is sequence, loops and problem solving through play, not typing. This guide covers readiness, the tools, session length, parent involvement, and what a first live class looks like.';
  j.meta.dateModified = TODAY;
  j.meta.retarget = MARK;

  // answer first
  const intro = idx(s, (x) => x.type === 'paragraph' && /^This guide explores the best ways to introduce programming to 6-year-olds/.test(x.text), 'intro paragraph');
  s[intro] = P('The short answer: coding for 6 year olds is visual and playful. Start with ScratchJr, Kodable or Code.org\'s pre-reader course, keep sessions to 20 or 30 minutes three or four times a week, sit with your child for the first few sessions, and aim for sequence, loops and problem solving rather than typing. This guide covers readiness signs, the best beginner tools, session length, parent involvement, when to move on, and <a href="#first-live-class">what a first live class looks like</a> for a 6 year old.');

  // what a first live class looks like, before the FAQ
  const faq = idx(s, (x) => x.type === 'heading' && x.id === 'faq', 'faq heading');
  s.splice(faq, 0,
    H(2, 'What a First Live Coding Class Looks Like for a 6 Year Old', 'first-live-class'),
    P('Parents who search for coding classes for 6 year olds usually want to know whether a live online class works at this age, and the answer is: it can, if the class is built for it. Our <a href="' + COURSE + '">live Scratch course</a> takes children from 6 to 12, and a 6 year old\'s first class is the free demo, one hour with a teacher on screen, in a batch of 5 to 10 children of a similar age or 1-on-1.'),
    P('The hour is not one activity. It is three or four short ones with a change every 15 to 20 minutes, which is how a 6 year old sustains it: meet the cat and the stage, make it move, add a sound, then a few minutes of the child choosing what the cat should do next. The teacher watches the child\'s screen the whole time and does the dragging with them when the mouse is the hard part.'),
    P('If your child is not ready to sit for an hour with a teacher, the tools above at home are the right start, and nothing is lost by waiting: the same course starts from zero at 7 or 8. When they get there, <a href="/blog/coding-for-7-year-olds-what-how-kids-should-learn-programming">coding for 7 year olds</a> and <a href="' + AGE8 + '">coding for 8 year olds</a> describe the next steps.')
  );

  // convert the plain-heading FAQ into an accordion so it becomes FAQPage schema, and add two questions
  const faq2 = idx(s, (x) => x.type === 'heading' && x.id === 'faq', 'faq heading');
  const items = [];
  let i = faq2 + 1;
  while (i + 1 < s.length && s[i].type === 'heading' && s[i].level === 3 && s[i + 1].type === 'paragraph') {
    items.push({ title: s[i].text, content: s[i + 1].text.replace(/<[^>]+>/g, '') });
    i += 2;
  }
  if (items.length < 3) throw new Error(name + ': expected the plain FAQ pairs');
  items.push(
    { title: 'Can a 6 year old join a live online coding class?', content: 'Yes, if the class is built for the age. Our live Scratch course takes children from 6 to 12, in a batch of 5 to 10 children of a similar age or 1-on-1, one hour per class split into three or four short activities, with a free demo first. If your 6 year old is not ready for an hour with a teacher, start with ScratchJr or Kodable at home and join at 7 or 8; the course starts from zero at any age in that range.' },
    { title: 'What comes after age 6 in coding?', content: 'At 7 the child moves from ScratchJr to full Scratch, learns loops, events, conditions and a first variable, and builds small games. At 8 projects get longer and reading and typing start to matter. Our guides to coding for 7 year olds and coding for 8 year olds describe each step.' }
  );
  s.splice(faq2 + 1, i - faq2 - 1, { type: 'accordion', items });
  noDash(j, name);
  save(name, j);
  console.log((DRY ? 'would update ' : 'updated ') + name + ' (FAQ ' + items.length + ' items)');
})();
