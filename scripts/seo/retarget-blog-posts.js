#!/usr/bin/env node
/**
 * Keyword Ledger 2026-27, actions 2 to 4: retarget the three blog posts that
 * carry the site's largest striking-distance queries (Search Console, 16 months
 * to 2026-09-19, blog view):
 *
 *   best-coding-languages-kids-10-18.json      "advanced coding languages for teens" 13,580 impr @7.0,
 *                                              "kids coding languages" 8,560 @10, "advanced coding for
 *                                              8 year old" 4,520, "coding milestones for 8-10 year olds" 3,737
 *   scratch20ideas.json                        "scratch projects" 11,774 @6.7, "scratch project ideas",
 *                                              "scratch starter projects", "scratch projects for 12 year olds"
 *   best-free-paid-coding-courses-students.json "best coding courses online" 5,701 @7.1,
 *                                              "best online coding courses" 2,226, "coding course fees"
 *
 * For each: answer the query in the first two sentences, add the missing
 * age/level structure as a table, extend the FAQ (the generator turns accordion
 * items into FAQPage schema), date the post, and remove what the brand rules
 * forbid: invented testimonials and success stories, unsourced statistics, and
 * course prices that contradict pricing/pricing.config.jsonc (blog pages are
 * outside the pricing stamper, so they must not state our figures at all).
 *
 * Idempotent: a post already carrying meta.retarget is skipped.
 *   node scripts/seo/retarget-blog-posts.js [--dry-run]
 * then: npm run generate:blogs
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const DRY = process.argv.includes('--dry-run');
const DATA = path.join(ROOT, 'content', 'blog', 'data');
const TODAY = '2026-09-23';
const MARK = 'near-me-2026-09';

const facts = require(path.join(ROOT, 'scripts', 'brand-facts.json'));
const scratchCourse = require(path.join(ROOT, 'content', 'courses', 'data', 'scratch-kids.json'));
const scratchMeta = scratchCourse.meta || scratchCourse;
if (!/3-4 months/.test(scratchMeta.duration) || !/6 to 12/.test(scratchMeta.level || '')) throw new Error('Scratch course facts changed; re-read scratch-kids.json before running');

// one real Google review, read verbatim from a page that already carries it
const mumbai = fs.readFileSync(path.join(ROOT, 'src', 'pages', 'best-coding-class-in-mumbai.html'), 'utf8');
const rv = mumbai.match(/<p class="review-q">"([^"]+)"<\/p><p class="review-b">([^<]+)<\/p>\s*<div class="review-who">[\s\S]*?<span class="rn">Krishnam Bhatter<\/span><br><span class="rr">([^<]+)<\/span>/);
if (!rv) throw new Error('Krishnam Bhatter review not found on the Mumbai page');
const dec = (s) => s.replace(/&#x27;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"');
const REVIEW = { q: dec(rv[1]), b: dec(rv[2]), who: 'Krishnam Bhatter, ' + rv[3].toLowerCase() + ', Google review' };

function load(name) { return JSON.parse(fs.readFileSync(path.join(DATA, name), 'utf8')); }
function save(name, j) { if (!DRY) fs.writeFileSync(path.join(DATA, name), JSON.stringify(j, null, 2) + '\n'); }
function idx(secs, pred, label) { const i = secs.findIndex(pred); if (i === -1) throw new Error('not found: ' + label); return i; }
const H = (level, text, id) => ({ type: 'heading', level, text, id });
const P = (text) => ({ type: 'paragraph', text });
const T = (headers, rows) => ({ type: 'table', headers, rows });
const isH = (t) => (s) => s.type === 'heading' && s.text === t;
const isCallout = (t) => (s) => s.type === 'callout' && s.title === t;
function dropCallouts(secs, re) { let n = 0; for (let i = secs.length - 1; i >= 0; i--) { if (secs[i].type === 'callout' && re.test(secs[i].title || '')) { secs.splice(i, 1); n++; } } return n; }
function addKeywords(meta, kws) { kws.forEach((k) => { if (!meta.keywords.includes(k)) meta.keywords.push(k); }); }
function accordionOf(secs) { return secs[idx(secs, (s) => s.type === 'accordion', 'accordion')]; }

// ─────────────────────────────────────────────────────────────── languages
(function languages() {
  const name = 'best-coding-languages-kids-10-18.json';
  const j = load(name); if (j.meta.retarget === MARK) return console.log('skip', name);
  const s = j.content.sections;
  j.meta.title = 'Best Coding Languages for Kids and Teens by Age, 6 to 18: 2026-27 Parent Guide';
  j.hero.title = j.meta.title;
  j.hero.subtitle = 'Kids coding languages in the right order, from Scratch at 6 to the advanced coding languages for teens at 14 to 18, with the coding milestone for every age band.';
  j.meta.description = 'Kids coding languages by age, updated for 2026-27: Scratch from 6, Python from 11, then the advanced coding languages for teens (JavaScript, Java, C++). Coding milestones for 8 to 10 year olds, 11 to 13 and 14 to 18, and the live course that matches each step.';
  j.meta.tldr = 'Kids coding languages go in an order: Scratch from age 6, Python from about 11, then the advanced coding languages for teens, JavaScript, Java and C++, from 14 to 18. This 2026-27 guide gives the milestone for each age band (6 to 8, 8 to 10, 11 to 13, 14 to 18), what advanced means at each age, and which live course fits.';
  addKeywords(j.meta, ['kids coding languages', 'advanced coding languages for teens', 'coding milestones for 8-10 year olds', 'coding for 8-10 year olds', 'advanced coding for 8 year old', 'best programming language to learn in 2026', 'best programming language for 13 year old']);
  j.meta.dateModified = TODAY; j.meta.retarget = MARK;

  s[1] = P('Kids coding languages come in an order, and the order matters more than the brand: Scratch from age 6, Python from about 11, then the advanced coding languages for teens, JavaScript, Java and C++, from 14 to 18. Should they start with Scratch or jump straight to Python? Is JavaScript better than Java? This guide answers that by age band.');
  s[2] = P('There is no single best language, only the right one for a child\'s age, interests and goal. Below you get a milestones table for 6 to 8, 8 to 10, 11 to 13 and 14 to 18 year olds, then the languages for each level, and the questions parents ask most at the end.');
  const q = idx(s, isCallout('Quick Stats: Why Language Choice Matters'), 'quick stats');
  s[q] = { type: 'callout', calloutType: 'info', title: 'How to use this guide', text: 'Find your child\'s age band in the milestones table, read that band\'s section, then check the FAQ at the end. Every language here is one we teach live, so you can watch it taught in a demo class before choosing.' };
  const qc = idx(s, isH('Quick Comparison: All Languages at a Glance'), 'quick comparison');
  s.splice(qc, 0,
    H(2, 'Coding milestones by age: 6 to 8, 8 to 10, 11 to 13, 14 to 18', 'milestones-by-age'),
    P('Parents search for "coding milestones for 8 to 10 year olds" and "advanced coding for an 8 year old" because most guides only say "start with Scratch". This is what a child who codes regularly can do by the end of each band, and what advanced actually looks like at that age.'),
    T(['Age band', 'Language', 'Milestone by the end of the band', 'What advanced looks like'], [
      ['6 to 8', 'ScratchJr, then Scratch', 'Sequences, loops and events; an animated story and a first game', 'Two sprites that talk to each other with broadcasts, built from the child\'s own idea'],
      ['8 to 10', 'Scratch', 'Variables, conditionals and scoring; a complete game with levels', 'Clones, lists and a maze or platformer planned on paper first, not copied from a tutorial'],
      ['11 to 13', 'Python', 'Text syntax, functions and files; a quiz app, a turtle drawing, a small data project', 'A game with pygame, or a program that reads and cleans a real spreadsheet'],
      ['14 to 18', 'JavaScript, Java or C++, chosen by goal', 'A deployed website, an app, or a set of solved algorithm problems', 'The advanced coding languages for teens: Java for ICSE, ISC and AP Computer Science A, C++ for competitions, JavaScript with a framework for full-stack work'],
    ]),
    P('If your child is under 6, ScratchJr on a tablet is enough. If they are 8 and already bored of Scratch tutorials, the answer is harder Scratch projects from their own plan, not an early jump to text. Python waits comfortably until 11.'));
  // age floors and labels
  const t1 = idx(s, (x) => x.type === 'table' && x.headers && x.headers[0] === 'Language' && x.headers[1] === 'Best Age', 'language table');
  s[t1].rows.forEach((r) => { if (r[0] === 'Scratch' && r[1] === '8-12') r[1] = '6-12'; });
  const t2 = idx(s, (x) => x.type === 'table' && x.headers && x.headers[0] === 'Age Range', 'age table');
  s[t2].rows.forEach((r) => { if (r[0] === '8-10 years') r[0] = '6-10 years'; });
  const l = idx(s, (x) => x.type === 'list' && x.items && /Younger kids \(8-11\)/.test(x.items[0]), 'factors list');
  s[l].items[0] = s[l].items[0].replace('Younger kids (8-11)', 'Younger kids (6-10)');
  s[idx(s, isH('Beginner Level (Ages 10-12): Visual Programming'), 'beginner h')].text = 'Beginner level (ages 6 to 10): visual languages';
  s[idx(s, isH('Intermediate Level (Ages 12-15): Text-Based Coding'), 'intermediate h')].text = 'Intermediate level (ages 11 to 14): first text-based languages';
  s[idx(s, isH('Advanced Level (Ages 15-18): Professional Languages'), 'advanced h')].text = 'Advanced coding languages for teens (ages 14 to 18)';
  const sc = idx(s, (x) => x.type === 'list' && x.items && /Ages 8-14, complete beginners/.test(x.items[0]), 'scratch list');
  s[sc].items[0] = s[sc].items[0].replace('Ages 8-14', 'Ages 6-12');
  const mit = idx(s, (x) => x.type === 'paragraph' && /Research from MIT shows/.test(x.text), 'mit para');
  s[mit] = P('For kids just starting out, visual block-based languages remove the frustration of syntax errors and let them focus on the programming concepts. That is why MIT built Scratch the way it did: the blocks only fit together in ways that run.');
  dropCallouts(s, /^Success Story: Scratch to Stanford$/);
  // conclusion age line
  const con = idx(s, (x) => x.type === 'paragraph' && /For most kids aged 10-12, Scratch is the perfect starting point/.test(x.text), 'conclusion para');
  s[con].text = s[con].text.replace('For most kids aged 10-12, Scratch is the perfect starting point.', 'For most kids aged 6 to 10, Scratch is the right starting point.');
  const btn = idx(s, (x) => x.type === 'button' && x.url === '/contact', 'contact button');
  s[btn] = { type: 'button', text: 'Book a demo class', url: '/book-demo', style: 'secondary' };
  // FAQ
  const acc = accordionOf(s);
  acc.items.unshift(
    { title: 'What are the advanced coding languages for teens?', content: 'For 14 to 18 year olds the advanced languages are Java (used by ICSE, ISC and AP Computer Science A), C++ (competitive programming and game engines) and JavaScript with a framework (full-stack web). Python stays useful throughout, especially for AI and data. Choose by goal: exams and Android point to Java, contests to C++, websites to JavaScript.' },
    { title: 'What are the coding milestones for 8 to 10 year olds?', content: 'By 10, a child who codes regularly can build a complete Scratch game with variables, conditionals and a score, plan a project on paper before opening the editor, and debug by testing one block at a time. Many are ready to try a first line of Python at 10 or 11; there is no need to rush it.' },
    { title: 'Is a 7 or 8 year old ready for advanced coding?', content: 'Advanced at 8 means Scratch projects with clones, lists and broadcasts built from the child\'s own plan, not text languages. A child who reads fluently and types comfortably can start Python around 11. Before that, depth in Scratch beats breadth across languages.' },
    { title: 'What is the best programming language to learn in 2026 for a school student?', content: 'Python. It is the language of AI and data work, it reads almost like English, and it is what most school and university courses now teach first. A student who already has Python should add JavaScript for the web or Java for exam boards, depending on what they want to build.' });
  save(name, j); console.log('wrote', name, 'sections', s.length, 'faq', acc.items.length);
})();

// ─────────────────────────────────────────────────────────────── scratch
(function scratch() {
  const name = 'scratch20ideas.json';
  const j = load(name); if (j.meta.retarget === MARK) return console.log('skip', name);
  const s = j.content.sections;
  j.meta.title = '30+ Scratch Project Ideas for Kids: Starter Projects to Advanced Games, Step by Step';
  j.hero.title = j.meta.title;
  j.meta.description = '30+ Scratch project ideas for kids sorted by level: simple starter projects for first-time coders, intermediate game ideas, and advanced Scratch projects for 12 year olds and up. Each one lists what it teaches, how long it takes and the steps, plus the live Scratch course that goes with it.';
  j.meta.tldr = 'Thirty-plus Scratch project ideas for kids, sorted by level: eight simple starter projects for ages 6 to 8, eight intermediate game ideas for 8 to 10, seven advanced projects for 10 and up, then creative and educational sets. Each project lists what it teaches, the time it takes and the steps, so a parent or teacher can pick one that fits today and the next one that stretches.';
  addKeywords(j.meta, ['scratch projects', 'scratch projects for students', 'scratch starter projects', 'simple scratch projects', 'scratch projects step by step', 'scratch project ideas for intermediate', 'scratch projects for 12 year olds', 'scratch vs python']);
  j.meta.dateModified = TODAY; j.meta.retarget = MARK;

  s[1] = P('Here are 30+ Scratch project ideas for kids, sorted by level: simple starter projects for a first-time coder, intermediate game ideas for a child with a few months of Scratch, and advanced projects for 10 to 12 year olds and up. Every project says what it teaches, how long it takes and how to build it step by step, so "what should I make next?" has an answer.');
  s[2] = P('Whether your child is a complete beginner, an intermediate coder ready for a real game, or an advanced Scratch user who has outgrown tutorials, start from the table below, build the project as written, then make it theirs with the ideas at the end of each one.');
  const beg = idx(s, isH('Beginner Scratch Projects (Ages 6-8 or First-Time Coders)'), 'beginner heading');
  s.splice(beg, 0,
    T(['Level', 'Typical age', 'Projects', 'Time each', 'What it needs'], [
      ['Starter', '6 to 8, or any first-time coder', '1 to 8: dancing sprite, greeting card, catching game, virtual pet, story, spiral, quiz, race', '30 minutes to 2 hours', 'Motion, looks, events, simple loops'],
      ['Intermediate', '8 to 10, or 3 to 6 months of Scratch', '9 to 16: maze, platformer, quiz with scoring, paint program, whack-a-mole, music sequencer, Pong, Snake', '2 to 4 hours over a few sessions', 'Variables, conditionals, collisions, broadcasts'],
      ['Advanced', '10 to 12 and up, or 6+ months of Scratch', '17 to 23: Flappy Bird, RPG, chatbot, calculator, Breakout, traffic simulation, two-player game', '4 to 8 hours or more', 'Clones, lists, maths, planning on paper first'],
      ['Creative and educational', 'Any level', '24 to 35: generative art, animated story, music visualiser, maths game, typing test, geography quiz, solar system, Tic-Tac-Toe with AI, memory game, endless runner, tower defence, weather', 'Varies', 'Pick by interest, then by the blocks it needs'],
    ]));
  s[idx(s, isH('Advanced Scratch Projects (Ages 10+ or 6+ Months Experience)'), 'advanced heading')].text = 'Advanced Scratch Projects (Ages 10 to 12 and Up, or 6+ Months Experience)';
  // live-class section before the tips
  const tips = idx(s, isH('Tips for Successfully Completing Scratch Projects'), 'tips heading');
  s.splice(tips, 0,
    H(2, 'How these projects are taught in a live Scratch class', 'live-scratch-class'),
    P('Every project on this list is one a child can build alone. In our live Scratch course, <a href="/courses/scratch-programming-complete-course">Scratch Coding for Kids</a>, they build them with a mentor: ages ' + scratchMeta.level.replace('Complete beginner, ages ', '') + ', ' + scratchMeta.duration.replace(' (', ', ').replace(')', '') + ', a batch of ' + facts.batchSizes.group.replace('–', ' to ') + ' children, two live classes a week, and a finished game or story at the end of every module.'),
    P('The difference is not the projects, it is the feedback: a mentor who sees the child\'s blocks, asks "what happens if the sprite touches the edge?" and lets them find the answer. You can watch that for yourself in a free demo, or book a <a href="/priority-demo">Priority Live Demo</a>, a full class of ' + facts.priorityDemo.length + ' today or tomorrow.'),
    { type: 'button', text: 'See the live Scratch course', url: '/courses/scratch-programming-complete-course', style: 'primary' });
  // FAQ headings + paragraphs -> accordion with schema
  const faqH = idx(s, isH('Frequently Asked Questions'), 'faq heading');
  const finalH = idx(s, isH('Final Thoughts'), 'final heading');
  const items = [];
  for (let i = faqH + 1; i < finalH; i += 2) { if (s[i].type !== 'heading' || s[i + 1].type !== 'paragraph') throw new Error('unexpected FAQ shape at ' + i); items.push({ title: s[i].text, content: s[i + 1].text }); }
  items.push(
    { title: 'What are good Scratch projects for 12 year olds?', content: 'At 12, go straight to the advanced list: the Flappy Bird clone, the RPG adventure, the chatbot, the calculator, Breakout and Tic-Tac-Toe with a computer opponent. Each needs clones, lists or maths, which is what a 12 year old is ready for. When Scratch starts to feel limiting, that is the signal to begin Python.' },
    { title: 'Scratch or Python: which should my child learn first?', content: 'Scratch first for children under about 11, because it removes typing and syntax and lets them learn loops, conditionals and variables by building games. From 11 to 13, move to Python; the concepts transfer directly. A 12 or 13 year old who has never coded and types comfortably can start with Python.' },
    { title: 'Where can my child learn Scratch in a live online class?', content: 'Modern Age Coders runs a live Scratch course for ages 6 to 12: ' + scratchMeta.duration.replace(' (', ', ').replace(')', '') + ', batches of ' + facts.batchSizes.group.replace('–', ' to ') + ', every child building the projects on this list with a mentor. You can watch a free demo first, or book a Priority Live Demo, a full class of ' + facts.priorityDemo.length + ', today or tomorrow.' });
  s.splice(faqH + 1, finalH - faqH - 1, { type: 'accordion', items });
  // related links that pointed at the old www host
  for (let i = s.length - 1; i >= 0; i--) {
    const x = s[i]; if (x.type !== 'paragraph' || !/modernagecoders\.com\/blog\//.test(x.text)) continue;
    x.text = x.text.replace(/https:\/\/www\.modernagecoders\.com\/blog\/minecraft-vs-roblox-which-teaches-kids-code/g, '/blog/minecraft-vs-roblox-which-teaches-kids-to-code')
      .replace(/https:\/\/www\.modernagecoders\.com\/blog\/why-coding-new-literacy-kids-2025/g, '/blog/why-coding-is-new-literacy-kids-2025')
      .replace(/https:\/\/www\.modernagecoders\.com\/blog\/parents-guide-starting-coding-education-home/g, '/blog/parents-guide-starting-coding-education-home')
      .split('https://www.modernagecoders.com/blog/problem-solving-computational-thinking').join('/blog/role-of-mathematics-programming-logical-problem-solving')
      .split('https://www.modernagecoders.com/blog/robotics-coding-stem-kits').join('/blog/robotics-coding-stem-kits-build-logical-thinking')
      .replace(/ target='_blank' rel='noopener noreferrer'/g, '');
    if (/modernagecoders\.com\/blog\//.test(x.text)) { x.text = x.text.replace(/https:\/\/www\.modernagecoders\.com/g, ''); }
  }
  save(name, j); console.log('wrote', name, 'sections', s.length, 'faq', items.length);
})();

// ─────────────────────────────────────────────────────────────── courses
(function courses() {
  const name = 'best-free-paid-coding-courses-students.json';
  const j = load(name); if (j.meta.retarget === MARK) return console.log('skip', name);
  const s = j.content.sections;
  j.meta.title = 'Best Coding Courses Online for Students 2026-27: 21 Free and Paid Options Compared';
  j.hero.title = j.meta.title;
  j.hero.subtitle = 'Free and paid coding courses compared on what you actually get: live teaching, projects, fees and support, with a learning path for each goal.';
  j.meta.description = 'The best coding courses online for students in 2026-27, free and paid, compared on teaching format, projects, fees and support. From freeCodeCamp and CS50 to live small-batch classes, with a path for each goal and what a fair course fee looks like.';
  j.meta.tldr = 'The best coding course online for a student depends on goal and budget, so this guide compares 21 free and paid options, from freeCodeCamp, CS50 and The Odin Project to Udemy, Coursera, Codecademy Pro, Scaler and live small-batch classes. It covers what each format gives you, what coding course fees look like, and a learning path for each goal.';
  addKeywords(j.meta, ['best coding courses online', 'best online coding courses', 'best free coding courses', 'paid coding courses', 'coding course fees', 'online coding course reviews']);
  j.meta.dateModified = TODAY; j.meta.retarget = MARK;

  s[1] = P('The best coding courses online for students in 2026-27 split into three kinds: free platforms that give you exercises without a teacher (freeCodeCamp, CS50, The Odin Project), self-paced paid courses with a one-time fee (Udemy, Coursera, Codecademy Pro), and live classes with a teacher and a small batch, paid monthly. Which one is right depends on whether you need someone to keep you going, and this guide is honest about that.');
  s[2] = P('Whether you are a complete beginner or levelling up, the sections below compare each course on format, projects, fees and support, then give you a learning path for your goal and the questions students ask before paying.');
  dropCallouts(s, /^2025 Online Learning Statistics$/);
  const dropped = dropCallouts(s, /^Student Review: /);
  // success stories block
  const ss = idx(s, isH('Real Student Success Stories'), 'stories heading');
  const faqH = idx(s, isH('Frequently Asked Questions'), 'faq heading');
  s.splice(ss, faqH - ss);
  // our entry
  s[idx(s, isH('1. Modern Age Coders: Best for Indian Students'), 'our heading')].text = '1. Modern Age Coders: Best for Live, Small-Batch Classes';
  const op = idx(s, (x) => x.type === 'paragraph' && /designed specifically for Indian students/.test(x.text), 'our para');
  s[op] = P('<a href="/courses">Modern Age Coders</a> teaches live: a mentor, a batch of 5 to 10 (or 3 to 4, or one-to-one), two classes a week, and a project built in class in every module. Students from age 6 to adults, in India and abroad, use the same catalogue: Scratch, Python, Java, web development, AI and machine learning, and maths. Fees are a flat monthly amount per format, shown on the <a href="/pricing">pricing page</a>, and every course starts with a demo class.');
  const ot = idx(s, (x) => x.type === 'table' && x.rows && x.rows[0] && /5,000 - .*25,000/.test(x.rows[0][1]), 'our table');
  s[ot].rows = [['Fees', 'Flat monthly fee per format (group, mini batch, one-to-one); current fees on the pricing page'], ['Best For', 'Students who want a live teacher and a small batch, ages 6 to adults'], ['Format', 'Live classes, recorded sessions, projects built in class'], ['Mentorship', 'A mentor in every class, doubt clearing between classes'], ['Certificate', 'Completion certificate'], ['Key Courses', 'Scratch, Python, Java, Web Development, AI and Machine Learning, Maths'], ['Unique Features', 'Batches of 5 to 10, a project every module, one fee per region'], ['Support', 'WhatsApp support, mentor access, written progress notes']];
  s.splice(ot + 1, 0, { type: 'callout', calloutType: 'success', title: 'What a student said on Google', text: '"' + REVIEW.q + '" ' + REVIEW.b + ' (' + REVIEW.who + ')' });
  const ol = idx(s, (x) => x.type === 'list' && x.items && /Affordable for Indian students/.test(x.items[0]), 'our list');
  s[ol].items = ['<strong>Pros:</strong> live classes in batches of 5 to 10, a mentor who knows the student, projects built in class, one flat monthly fee you can stop any month', '<strong>Cons:</strong> fewer self-paced options than the big platforms, and no placement promises (we do not make them)', '<strong>Best suited for:</strong> students who finish more when a teacher is expecting them'];
  const oc = idx(s, isCallout('Popular Modern Age Coders Courses'), 'our callout');
  s[oc] = { type: 'callout', calloutType: 'info', title: 'How the fee works', text: 'Three formats, each a flat monthly fee: group (5 to 10 students), mini batch (3 to 4) and one-to-one. Two live classes a week in the group formats. One price per region, shown on the <a href="/pricing">pricing page</a>. Start with a free demo, or a <a href="/priority-demo">Priority Live Demo</a> if you want a full class today or tomorrow.' };
  // comparison summary row, budget table row, recommendation callout
  s.forEach((x) => { if (x.type === 'table' && x.rows) x.rows.forEach((r) => { if (r[0] === 'Modern Age Coders' && /5K-25K/.test(r[1])) { r[1] = 'Flat monthly fee (pricing page)'; r[2] = 'Live small-batch classes, ages 6 to adults'; r[3] = 'Mentor in every class'; r[4] = 'Completion certificate'; } if (/Modern Age Coders course \+ Udemy/.test(r[1] || '')) { r[0] = 'A monthly fee'; r[1] = 'One live small-batch course (Modern Age Coders) plus free practice sites'; } }); });
  const rec = idx(s, isCallout('Our Recommendation'), 'recommendation');
  s[rec].text = 'For most students the best-value combination is one live course with a teacher, paid monthly, plus free practice on freeCodeCamp or Codecademy\'s free tier. You stop paying the month you stop attending, which is the honest test of whether a course is working.';
  const bud = idx(s, isCallout('Budget for This Path'), 'budget');
  s[bud].text = 'Minimum: free resources only.<br>Recommended: one structured course with a teacher, paid monthly, plus free practice.<br>Optimal: the same, plus interview preparation in the final months.';
  s.forEach((x) => { if (x.type === 'callout' && x.title === 'Expected Outcome') x.text = x.text.replace(/ with salaries ranging from [^.]*\./, ' with a portfolio of deployed projects.').replace(/ \(₹[^)]*\)/g, ''); });
  const p120 = idx(s, (x) => x.type === 'paragraph' && /Sometimes a ₹10,000 course saves you/.test(x.text), 'value para');
  s[p120] = P('Free is not always cheaper. A paid course with a teacher can save months of wandering through free videos, and months matter when you are trying to reach an internship by a certain year. Count the value of your time, and choose the format that gets you shipping projects every month.');
  const ready = idx(s, isCallout('Ready to Start Your Coding Journey?'), 'ready callout');
  s[ready].text = s[ready].text.replace('You\'ve read the comparisons, seen the reviews, and understood the paths.', 'You have read the comparisons and understood the paths.');
  // FAQ
  const acc = accordionOf(s);
  const spend = acc.items.find((it) => it.title === 'How much should I spend on coding courses?');
  if (spend) spend.content = 'Start free to confirm your interest. If you are serious, pay for one structured course with a teacher and finish it; a monthly fee you can stop is safer than a large one-time bootcamp fee. Judge a course by whether you are shipping projects every month, not by what it cost.';
  acc.items.unshift(
    { title: 'Which is the best coding course online for a school student?', content: 'For a school student the best course is a live one with a small batch and projects, because a 14 year old rarely finishes a self-paced video course alone. Scratch for 6 to 10, Python from 11, then web development or Java by 14. Free platforms are good for extra practice alongside a live class, not instead of it.' },
    { title: 'How much do coding courses cost?', content: 'Free platforms cost nothing and give you videos or exercises without a teacher. Self-paced paid courses are usually a one-time fee, often discounted. Live small-batch classes such as Modern Age Coders charge a flat monthly fee per format (group, mini batch or one-to-one) with two live classes a week; the current fees for your region are on the pricing page. Bootcamps that promise placement run into lakhs.' },
    { title: 'How do I check reviews of an online coding course?', content: 'Read reviews on a platform the course cannot edit: Google, Trustpilot or a Reddit thread, not the course\'s own page. Look for reviews that name a project or a teacher rather than adjectives, check the dates, and try a live class before paying. Modern Age Coders has ' + facts.reviews + ' Google reviews at ' + facts.rating + '; the reviews quoted on this site are copied word for word from Google.' });
  save(name, j); console.log('wrote', name, 'sections', s.length, 'faq', acc.items.length, 'invented reviews removed', dropped);
})();
