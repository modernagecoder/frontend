#!/usr/bin/env node
/**
 * Keyword Ledger 2026-27, action 15: keep the two vibe-coding posts current and route them
 * to the live courses. September 2026 refresh (the action is a monthly one: re-run after
 * editing REFRESH below, bump TODAY, and the idempotency mark moves with it).
 *
 *   best-platform-vibe-coding.json  /blog/best-free-platforms-for-vibe-coding
 *       16,491 impr, 322 clicks @8.5 (16 months); "free vibe coding" 507 @7.5, "vibe coding free"
 *       418, "free vibe coding tools" 361 @10.6, "free vibe coding tools with no limit" 166 @11,
 *       "free vibe coding platform" 161 @5.8; Copilot cites it 1,090 times. Zero links to the
 *       vibe courses today.
 *   vibe-coding-future-of-software-development.json  /blog/what-is-vibe-coding-future-of-software-development
 *       "what is vibe coding" 214 impr @57 (12.7K Bing impressions in 3 months); Copilot cites it
 *       2,127 times; description was 462 characters.
 *
 * What changes: a dated answer-first passage, a section on what "free" and "no limit" mean in
 * 2026 (three kinds of free, stated generally because free tiers change monthly), the stale
 * model name in the Claude entry, a route to the kids and teens vibe courses and the parents'
 * guide, and an accordion FAQ that becomes FAQPage schema. No prices, no invented statistics.
 *
 *   node scripts/seo/refresh-vibe-posts.js [--dry-run]   then: npm run generate:blogs
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const DRY = process.argv.includes('--dry-run');
const DATA = path.join(ROOT, 'content', 'blog', 'data');
const TODAY = '2026-09-23';
const REFRESH = 'vibe-2026-09';
const MONTH = 'September 2026';

const teens = require(path.join(ROOT, 'content', 'courses', 'data', 'vibe-coding-for-teens.json'));
const kids = require(path.join(ROOT, 'content', 'courses', 'data', 'vibe-coding-for-kids.json'));
const tm = teens.meta, km = kids.meta;
if (!/13-17/.test(tm.level) || !/8-12/.test(km.level)) throw new Error('vibe course ages changed; re-read the course JSON before running');
const TEEN = '/courses/' + tm.slug, KIDS = '/courses/' + km.slug, PARENTS = '/parents-guide-to-vibe-coding', TEENPAGE = '/vibe-coding-for-teens';
for (const f of ['content/courses/generated/' + tm.slug, 'content/courses/generated/' + km.slug, 'src/pages/parents-guide-to-vibe-coding.html', 'src/pages/vibe-coding-for-teens.html']) if (!fs.existsSync(path.join(ROOT, f))) throw new Error('link target missing: ' + f);

const load = (n) => JSON.parse(fs.readFileSync(path.join(DATA, n), 'utf8'));
const save = (n, j) => { if (!DRY) fs.writeFileSync(path.join(DATA, n), JSON.stringify(j, null, 2) + '\n'); };
const H = (level, text, id) => (id ? { type: 'heading', level, text, id } : { type: 'heading', level, text });
const P = (text) => ({ type: 'paragraph', text });
const idx = (secs, pred, label) => { const i = secs.findIndex(pred); if (i === -1) throw new Error('not found: ' + label); return i; };
const checkDesc = (d, who) => { if (d.length < 150 || d.length > 160) throw new Error(who + ': description ' + d.length + ' chars'); };
const noDash = (j, who) => { if (/—/.test(JSON.stringify(j))) throw new Error(who + ': em dash'); };
const ROUTE = 'If you would rather learn this with a teacher on screen than alone with a chat box, we teach it live: <a href="' + KIDS + '">Vibe Coding for Kids</a> (ages 8 to 12, Scratch, AI and game projects) and <a href="' + TEEN + '">Vibe Coding for Teens</a> (ages 13 to 17, Python, web and AI projects), in a batch of 5 to 10 or 1-on-1, one hour per class, with a free demo first. Parents deciding whether this is a good idea at all should read the <a href="' + PARENTS + '">parents\' guide to vibe coding</a>.';

/* ---------------- the platforms post ---------------- */
(function platforms() {
  const name = 'best-platform-vibe-coding.json';
  const j = load(name);
  if (j.meta.retarget === REFRESH) { console.log('skip (done):', name); return; }
  const s = j.content.sections;
  j.meta.title = '10 Best Free Vibe Coding Platforms and Tools in 2026 (Updated ' + MONTH + ')';
  j.meta.description = 'The 10 best free vibe coding platforms and tools in 2026: what each free tier gives you, which have no hard limit, who each suits, and how to learn it live.';
  checkDesc(j.meta.description, name);
  j.meta.keywords = Array.from(new Set((j.meta.keywords || []).concat(['free vibe coding', 'vibe coding free', 'free vibe coding tools', 'free vibe coding tools with no limit', 'free vibe coding platform', 'best free vibe coding platforms'])));
  j.meta.tldr = 'Free vibe coding in 2026 comes in three kinds: hosted platforms with a capped free tier (Bolt.new, Lovable, v0, Replit, Cursor), chat assistants with a free plan (ChatGPT, Claude), and open-source tools that are free without limit as long as you bring your own model access (Cline, Aider). This guide ranks ten of them, explains what "free" actually means on each, and says who each one suits. Updated ' + MONTH + '.';
  j.meta.dateModified = TODAY;
  j.meta.retarget = REFRESH;

  // answer first, after the intro
  const intro = idx(s, (x) => x.type === 'paragraph' && /^In this guide, we will break down the top 10 free AI coding tools/.test(x.text), 'intro paragraph');
  s.splice(intro + 1, 0, P('<strong>The short answer (updated ' + MONTH + '):</strong> the free vibe coding tools with no hard limit are the open-source ones, Cline and Aider, because they are free software and you pay only for the model you plug in, which can itself be a free tier. Every hosted platform on this list (Bolt.new, Lovable, v0, Replit, Cursor) has a free tier capped by messages, credits or hours, and those caps change month to month, so the figures on any list, including this one, go stale; check the platform\'s pricing page on the day. For a complete beginner the easiest free start is a chat assistant, ChatGPT or Claude, which builds a small app in the browser with no setup. ' + ROUTE));

  // the Claude entry named a 2024 model
  const cl = idx(s, (x) => x.type === 'heading' && /Claude 3\.5 Sonnet/.test(x.text), 'Claude heading');
  s[cl].text = s[cl].text.replace('Claude 3.5 Sonnet (by Anthropic)', 'Claude (by Anthropic)');
  const clp = s[cl + 1];
  if (!/Claude 3\.5 Sonnet is arguably/.test(clp.text)) throw new Error('Claude paragraph moved');
  clp.text = 'When it comes to pure coding logic and following long, exact instructions, Claude is among the strongest of the chat assistants, and it rarely invents code that does not exist. The model names change every few months (this entry once said "Claude 3.5 Sonnet"; the current models are the Claude 5 family), so judge it by what the free plan lets you build today rather than by the version number.';

  // what "free" and "no limit" actually mean, before best practices
  const bp = idx(s, (x) => x.type === 'heading' && x.id === 'best-practices', 'best-practices heading');
  s.splice(bp, 0,
    H(2, 'Free Vibe Coding Tools With No Limit: What "Free" Actually Means in 2026', 'what-free-means'),
    P('Searches for free vibe coding tools with no limit go up every month, and the honest answer is that "free" on this list means three different things.'),
    P('<strong>1. Free software, unlimited, bring your own model.</strong> Cline and Aider are open source. There is no cap on how much you use them, because nothing is metered; what is metered is the model you connect. Connect a free-tier model, or a local one, and the whole setup is free without limit, at the cost of a little setup and a slower model.'),
    P('<strong>2. A hosted free tier with a cap.</strong> Bolt.new, Lovable, v0, Replit and Cursor give you a real free allowance of messages, credits or hours, then ask you to pay. The allowance is enough to build and ship a small project; it is not enough to build a business on. The caps change often, which is why this guide does not print them.'),
    P('<strong>3. A free plan on a chat assistant.</strong> ChatGPT and Claude both let you build small apps on a free plan, with limits on how many messages you can send in a window. For a beginner this is the fastest zero-cost start, and the limits rarely bite in a first week.'),
    P('The practical rule: prototype on a chat assistant, move to a hosted platform when you want a live link, and switch to an open-source tool with your own model when the caps start costing you time. ' + ROUTE)
  );

  // FAQ before the conclusion
  const con = idx(s, (x) => x.type === 'heading' && x.id === 'conclusion', 'conclusion heading');
  s.splice(con, 0,
    H(2, 'Free Vibe Coding: Questions People Ask', 'faq'),
    { type: 'accordion', items: [
      { title: 'What is vibe coding?', content: 'Vibe coding is building software by describing what you want in plain language and letting an AI write the code, then testing the result and describing the next change. The term was coined by Andrej Karpathy in early 2025. The person still decides what to build, checks that it works and takes responsibility for it; the AI types.' },
      { title: 'Is vibe coding free?', content: 'It can be. Open-source tools such as Cline and Aider are free without limit if you connect a free or local model. Hosted platforms such as Bolt.new, Lovable, v0 and Replit have capped free tiers, and ChatGPT and Claude have free plans with message limits. A complete beginner can build and ship a small project without paying anything.' },
      { title: 'Which free vibe coding tools have no limit?', content: 'The open-source ones: Cline (a VS Code extension) and Aider (a terminal tool). They meter nothing themselves; the only limit is the model you plug in. Every hosted platform caps its free tier by messages, credits or hours, and the caps change month to month.' },
      { title: 'Which free vibe coding platform is best for a beginner or a teenager?', content: 'A chat assistant (ChatGPT or Claude) for the first week, because there is nothing to install, then Bolt.new or Lovable when you want a shareable link. A teenager who wants to understand the code the AI writes, rather than only prompt for it, learns faster with a teacher on screen; that is what our live Vibe Coding for Teens course is for.' },
      { title: 'Can kids learn vibe coding?', content: 'Yes, from about 8, as long as an adult or a teacher is in the loop, because the tools are built for adults and a child needs help judging what the AI produced. Our Vibe Coding for Kids course (ages 8 to 12) pairs Scratch and game projects with age-appropriate AI tools, live, in a batch of 5 to 10 or 1-on-1.' },
    ] }
  );
  noDash(j, name);
  save(name, j);
  console.log((DRY ? 'would update ' : 'updated ') + name);
})();

/* ---------------- the deep-dive post ---------------- */
(function deep() {
  const name = 'vibe-coding-future-of-software-development.json';
  const j = load(name);
  if (j.meta.retarget === REFRESH) { console.log('skip (done):', name); return; }
  const s = j.content.sections;
  j.meta.description = 'What vibe coding is, who coined it, how the describe-and-check loop works, the main tools compared, the security risks, and how kids, teens and adults learn it.';
  checkDesc(j.meta.description, name);
  j.meta.keywords = Array.from(new Set((j.meta.keywords || []).concat(['what is vibe coding', 'vibe coding meaning', 'vibe coding explained', 'vibe coding for kids', 'vibe coding for teens'])));
  j.meta.dateModified = TODAY;
  j.meta.retarget = REFRESH;

  // a definition passage an engine can lift, right where the post asks the question
  const q = idx(s, (x) => x.type === 'paragraph' && /^But what exactly is vibe coding\?/.test(x.text), 'question paragraph');
  s.splice(q + 1, 0, P('<strong>Vibe coding, defined (updated ' + MONTH + '):</strong> vibe coding is building software by describing what you want in natural language, letting an AI write the code, running it, and describing the next change, in a loop, instead of typing the code yourself. The term comes from a February 2025 post by Andrej Karpathy. The human still decides what to build, checks that it works and owns the result; what changes is that the first draft of every line is written by a model. The rest of this guide explains where the term came from, how the loop works in practice, which tools people use, where it goes wrong, and how it is being taught to kids, teens and adults.'));

  // route the age sections to the live courses
  const kidsH = idx(s, (x) => x.type === 'heading' && /For Kids/.test(x.text), 'kids heading');
  let k = kidsH + 1; while (k < s.length && s[k].type !== 'paragraph') k++;
  s.splice(k + 1, 0, P('We teach exactly this, live: <a href="' + KIDS + '">Vibe Coding for Kids</a> runs for ages 8 to 12 in a batch of 5 to 10 or 1-on-1, one hour per class, with a free demo first, and the <a href="' + PARENTS + '">parents\' guide to vibe coding</a> answers the "is this a good idea" question honestly.'));
  const teenH = idx(s, (x) => x.type === 'heading' && /For Teens/.test(x.text), 'teens heading');
  let t = teenH + 1; while (t < s.length && s[t].type !== 'paragraph') t++;
  s.splice(t + 1, 0, P('The live version is <a href="' + TEEN + '">Vibe Coding for Teens</a>, ages 13 to 17: Python, web and AI projects with a mentor on screen, so the teen learns to read and judge the code the AI writes, not only to prompt for it. Our <a href="' + TEENPAGE + '">vibe coding for teens</a> page describes a typical term.'));

  // FAQ before the conclusion
  const con = idx(s, (x) => x.type === 'heading' && x.id === 'conclusion', 'conclusion heading');
  s.splice(con, 0,
    H(2, 'Vibe Coding: Questions People Ask', 'faq'),
    { type: 'accordion', items: [
      { title: 'What is vibe coding in simple words?', content: 'Telling an AI what you want in plain language, letting it write the code, running the result, and telling it what to change next, over and over, instead of typing the code yourself. You still decide what to build and check that it works.' },
      { title: 'Who coined the term vibe coding?', content: 'Andrej Karpathy, in a post in February 2025 describing a way of working where he "fully gives in to the vibes" and lets the AI write the code while he describes and checks. The phrase spread within weeks and is now used for the whole approach.' },
      { title: 'Is vibe coding real programming?', content: 'It produces real programs, and it needs real judgement: knowing what to ask for, reading what came back, testing it and catching the security mistakes AI-written code makes. What it removes is typing syntax from memory. People who understand the fundamentals get far more out of it than people who only prompt, which is why we teach the fundamentals alongside the tools.' },
      { title: 'Can kids and teens learn vibe coding?', content: 'Yes, with a teacher or an adult in the loop, because the tools are built for adults and a child needs help judging what the AI produced. We run live courses for ages 8 to 12 and 13 to 17 that pair the AI tools with Scratch, Python and web projects, in a batch of 5 to 10 or 1-on-1.' },
    ] }
  );
  noDash(j, name);
  save(name, j);
  console.log((DRY ? 'would update ' : 'updated ') + name);
})();
