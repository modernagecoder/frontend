#!/usr/bin/env node
/*
 * Keyword Ledger 2026-27, action 6: retarget the age pages (coding-for-8..17-year-olds)
 * to the queries Search Console actually shows them for, and fix the facts on the whole
 * generated age/grade/board/python family (46 pages).
 *
 * The generator (scripts/generate-age-grade-pages.js) is STALE: re-running it deletes
 * later hand edits (md twins, Organization JSON-LD, hreflang, stripped meta keywords).
 * So this script edits the HTML in src/pages directly and is idempotent.
 *
 * Family-wide (46 pages, every page with an .age-trust-item):
 *   1. Trust stats invented per cohort ("3,100+ 8-year-olds", "410+ reviews", "93% score
 *      85+") are replaced with the two brand facts (scripts/brand-facts.json): 10,000+
 *      students since 2020, 4.9 across 547 Google reviews, and the batch size 5 to 10.
 *   2. Group size "4 to 6" / "4-6 kids" / "3-4 students" becomes 5 to 10 (brand fact).
 *   3. The two rupee prices get data-price anchors so international visitors see one
 *      currency, theirs, after `npm run pricing:apply`.
 *
 * Age pages only (10): title, description, og/twitter tags, a quick-answer block after
 * the hero and FAQ items for the measured queries. FAQ schema is rebuilt afterwards by
 * scripts/seo/sync-faq-schema.js (run it on the same files).
 *
 * Usage: node scripts/seo/retarget-age-pages.js [--dry]
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const PAGES = path.join(ROOT, 'src', 'pages');
const DRY = process.argv.includes('--dry');
const MARK = 'data-retarget="age-2026-09"';

// Brand facts. Hard-coded here on purpose, asserted against the source file so a change
// there fails this script loudly instead of leaving stale numbers on 46 pages.
const facts = fs.readFileSync(path.join(ROOT, 'scripts', 'brand-facts.json'), 'utf8');
for (const must of ['"reviews": 547', '10,000+', '2020']) {
  if (!facts.includes(must)) throw new Error('brand-facts.json no longer states ' + must + '; update this script first');
}
const STUDENTS = ['10,000+', 'Students taught live since 2020'];
const RATING = ['4.9 / 5', 'Rated across 547 Google reviews'];
const BATCH = ['5 to 10', 'Students in a group batch'];

const GUIDE = '/blog/best-coding-languages-kids-10-18-beginner-advanced';
const SUFFIX = ' | Modern Age Coders';

const AGE = {
  8: {
    title: 'Coding Classes for 8 Year Olds: Scratch and First Games, Live',
    desc: 'Live online coding classes for 8 year olds: Scratch and block coding, a first game in the first weeks, 1 hour classes, batch of 5 to 10 or 1-on-1. Free demo.',
    quick: 'Coding classes for 8 year olds at Modern Age Coders are live, one hour long, and run in a batch of 5 to 10 children of the same age or 1-on-1. An 8 year old starts in Scratch, finishes a first game within the first weeks, and moves to typed code only when reading and typing are ready, usually at <a href="/coding-for-9-year-olds">9</a> or <a href="/coding-for-10-year-olds">10</a>. A child who has already finished Scratch Junior, Code.org or Swift Playgrounds skips the opening weeks and gets harder projects from the first class. The <a href="' + GUIDE + '">coding milestones for 8 to 10 year olds</a> are listed in our parent guide.',
    faqs: [
      ['Is there advanced coding for an 8 year old who has already done Scratch?', 'Yes. An 8 year old who has finished Scratch Junior, Code.org puzzles or a first Scratch course does not repeat them. The teacher checks what the child can already build in the free demo, then starts with multi-scene Scratch games, variables and broadcasting, and adds short typed Python when reading and typing are ready. In a batch of 5 to 10 the projects are set per child, and 1-on-1 the whole hour is paced to your child alone.'],
      ['Do you have coding mentors for an advanced 8 year old?', 'Every class is taught live by a mentor who writes software, and an advanced 8 year old is usually best served 1-on-1, where the mentor sets harder projects each week and reviews the child\'s own ideas. The same mentor stays with the child term after term, so the projects build on each other instead of restarting.'],
      ['What coding milestones should an 8 to 10 year old reach?', 'By the end of the first months an 8 year old should be able to plan a small Scratch project on paper, build it with events, loops and a score variable, and fix their own bugs. By 9 or 10 the milestones are a multi-level game, a first typed Python program and a simple webpage. Our guide to <a href="' + GUIDE + '">coding languages and milestones by age, 6 to 18</a> lays out each step.'],
    ],
  },
  9: {
    title: 'Coding Classes for 9 Year Olds: Scratch Games and First Python',
    desc: 'Live online coding classes for 9 year olds: Scratch games, first Python lines, HTML basics and safe AI tools, 1 hour classes with a batch of 5 to 10 or 1-on-1.',
    quick: 'Coding classes for 9 year olds at Modern Age Coders are live, one hour long, and run in a batch of 5 to 10 children of the same age or 1-on-1. At 9 most children can hold a 20-block Scratch project in their head, so the year moves from finished Scratch games to the first typed Python lines and a simple webpage. A child who is already past Scratch goes straight to <a href="/python-for-9-year-olds">Python for 9 year olds</a>; a child who is new to coding starts where the <a href="/coding-for-8-year-olds">8 year olds</a> start, without pressure to type.',
    faqs: [
      ['Can a 9 year old really start Python?', 'Yes, in small doses. A 9 year old who reads comfortably and can type a short sentence can write a first Python program of a few lines, usually turtle graphics or a guessing game, in the second or third month. We keep Scratch alongside it so the child still finishes visible projects while the typing catches up.'],
      ['Coding classes for 9 year olds: group or 1-on-1?', 'A batch of 5 to 10 children of the same age works well for most 9 year olds, because they show each other their games at the end of class and that keeps them building. 1-on-1 suits a shy child, a very energetic child, or a child who is well ahead of the class and needs harder projects each week. Both are live, one hour, with the same teacher all year.'],
    ],
  },
  10: {
    title: 'Coding Classes for 10 Year Olds Online: Scratch to Python',
    desc: 'Live online coding classes for 10 year olds: Scratch to real Python in ten weeks, then a first webpage and AI projects. 1 hour, batch of 5 to 10 or 1-on-1.',
    quick: 'Online coding classes for 10 year olds at Modern Age Coders are live, not recorded: one hour with a teacher on screen, in a batch of 5 to 10 children of the same age or 1-on-1. At 10 a child reads, reasons and follows instructions well enough for Python, so the year moves from Scratch games to typed Python in about ten weeks, then a first webpage. Python-first families can start directly on <a href="/python-for-10-year-olds">Python for 10 year olds</a>; a child in Class 5 can also follow the <a href="/coding-for-class-5">Class 5 plan</a>.',
    faqs: [
      ['Is Python suitable for a 10 year old?', 'Yes. Ten is the age most children can read a line of code as a sentence, type it without frustration and reason about what it will do. We start with short, visual Python (turtle graphics, guessing games, a quiz) rather than syntax drills, and keep the first programs under twenty lines so the child finishes something every class.'],
      ['Are your online coding classes for 10 year olds live or recorded?', 'Live, every class. A teacher is on screen for the full hour, watches the child code and unblocks them on the spot. A batch has 5 to 10 children of the same age; 1-on-1 is the alternative. Recordings are shared afterwards for revision, but nothing is taught by recording alone.'],
      ['Which Scratch projects suit a 10 year old before Python?', 'Multi-level games with lives and a score, a maze chase with enemies that move on their own, a quiz with a timer, and an animated story with branching choices. These use variables, broadcasting and clones, which are exactly the ideas that make Python easier a few weeks later. Our <a href="/blog/30-plus-scratch-project-ideas-kids-fun-coding-beginner-advanced">Scratch project ideas by level</a> post lists thirty of them with steps.'],
    ],
  },
  11: {
    title: 'Coding Classes for 11 Year Olds: Python, Web and AI Projects',
    desc: 'Live online coding classes for 11 year olds: Python, HTML and CSS pages, games and beginner AI tools, matched to Class 6. 1 hour, batch of 5 to 10 or 1-on-1.',
    quick: 'Coding classes for 11 year olds at Modern Age Coders are live, one hour long, in a batch of 5 to 10 children of the same age or 1-on-1. Eleven is the year Python stops being a puzzle: functions, lists and loops land because the child now reasons in steps. The year pairs Python with a first HTML and CSS website and a guided AI project, and it lines up with the Class 6 school computer syllabus without repeating it. Start on <a href="/python-for-11-year-olds">Python for 11 year olds</a> if your child has done Scratch, or here if they are new.',
    faqs: [
      ['What do coding classes for 11 year olds cover, and how does it fit Class 6?', 'Python fundamentals (variables, conditions, loops, functions, lists), a first website in HTML and CSS, one game project and a guided AI project with tools that are appropriate for the age. Class 6 CBSE and ICSE computer chapters are covered on the way, so school work gets easier, but the course goes well beyond the school syllabus.'],
      ['Python or web development first at 11?', 'Python first for most 11 year olds, because it teaches logic with the least syntax, then HTML and CSS a few weeks in so the child has something visible to show. A child who is mainly excited by websites can reverse the order; the teacher decides with you after the free demo.'],
    ],
  },
  12: {
    title: 'Coding Classes for 12 Year Olds: Python, Web, Apps and AI',
    desc: 'Live online coding classes for 12 year olds: Python projects, HTML, CSS and JavaScript sites, first apps and AI projects. 1 hour, batch of 5 to 10 or 1-on-1.',
    quick: 'Coding classes for 12 year olds at Modern Age Coders are live, one hour long, in a batch of 5 to 10 children of the same age or 1-on-1. Twelve is the bridge year: a child who came from Scratch finishes the move to Python, builds a website with JavaScript and ships a first mobile app, and one who is new to coding starts in Python straight away. Game projects stay in the plan because they are still the fastest way to teach logic at this age. See <a href="/python-for-12-year-olds">Python for 12 year olds</a> and <a href="/coding-for-class-7">coding for Class 7</a> for the two most common starting points.',
    faqs: [
      ['Are there still Scratch projects for a 12 year old, or is it time for Python?', 'Both, briefly. A 12 year old who loves Scratch builds one or two advanced projects (a platformer with clones, a multiplayer-style game with broadcasting) as a bridge, then moves to Python within weeks. A 12 year old who has never coded starts in Python directly; Scratch is optional at this age.'],
      ['Do you teach coding through games for 12 year olds?', 'Yes. Game projects are still the fastest way to teach logic at 12: a Python quiz game, a JavaScript browser game, a simple app with a score. Each one is chosen to introduce one idea (functions, lists, events, state) rather than to entertain, and the child keeps every finished game.'],
      ['Is this a computer course for 12 year olds or a coding course?', 'A coding course. Computer basics (files, typing, safe use of the internet and of AI tools) are covered in the first weeks because they are needed, but the year is spent writing programs: Python, a website, an app and an AI project. For the school-syllabus route see <a href="/coding-for-class-7">coding for Class 7</a>.'],
    ],
  },
  13: {
    title: 'Coding Classes for 13 Year Olds: Python Course, Web, Apps and AI',
    desc: 'Live online coding classes for 13 year olds: a full Python course with OOP, full stack web, apps and a first AI project. 1 hour, batch of 5 to 10 or 1-on-1.',
    quick: 'Coding classes for 13 year olds at Modern Age Coders are live, one hour long, in a batch of 5 to 10 teens or 1-on-1. Thirteen is the year a child becomes a real coder: the Python course runs to classes and objects, the web work becomes full stack, and the first AI project uses real data rather than a toy. Teens who want Python alone can take <a href="/python-for-13-year-olds">Python for 13 year olds</a>; teens in Class 8 can follow the <a href="/coding-for-class-8">Class 8 plan</a>, which lines up with CBSE and ICSE.',
    faqs: [
      ['Is there a Python course for 13 year olds?', 'Yes, and it is the usual starting point at 13. The Python course covers fundamentals, functions, files, classes and objects, and finishes with a project of the teen\'s own choosing, such as a text game, a data tool or a small web app. It runs live, one hour per class, in a batch of 5 to 10 or 1-on-1. See <a href="/python-for-13-year-olds">Python for 13 year olds</a>.'],
      ['Do you run AI courses for 13 year olds?', 'Yes. After the Python foundation, 13 year olds take an AI and machine learning module: a real dataset, a first model, and an honest look at what the model gets wrong. The tools used are chosen for the age and used with a teacher present. Our <a href="/ai-classes-for-kids">AI classes for kids and teens</a> page explains the age rules we follow.'],
      ['Coding classes for 13 year olds: how many hours a week?', 'Two one-hour live classes a week in a batch, or one to two hours a week 1-on-1, plus a short task between classes. That is enough for a teen to finish a real project each month without eating into school.'],
    ],
  },
  14: {
    title: 'Coding Classes for 14 Year Olds: Python OOP, Full Stack and DSA',
    desc: 'Live online coding classes for 14 year olds: Python OOP, MERN full stack, AI on real data, DSA basics and Java for Class 9. 1 hour, batch of 5 to 10 or 1-on-1.',
    quick: 'Online coding courses for 14 year olds at Modern Age Coders are live, one hour per class, in a batch of 5 to 10 teens or 1-on-1, so a family searching for coding classes near them gets the same teacher on screen wherever they live. Fourteen is where the portfolio gets serious: Python with objects, a full stack web app, an AI project on real data, and the first data structures and algorithms. Class 9 students can also follow <a href="/coding-for-class-9">coding for Class 9</a>, which lines up with the CBSE and ICSE computer syllabus.',
    faqs: [
      ['Are these online coding courses for 14 year olds live?', 'Yes. Every class is a live hour with a teacher who writes software for a living, in a batch of 5 to 10 teens or 1-on-1. Recordings are shared for revision, but the teaching, the code review and the debugging all happen live.'],
      ['I searched for coding classes near me for a 14 year old. Does online work as well?', 'For a 14 year old, usually better. The teacher sees the teen\'s screen the whole hour, the batch is 5 to 10 teens at the same level rather than whoever lives nearby, and there is no travel. Families in India, the Gulf, the UK and North America join the same batches in their own evening.'],
      ['Can a 14 year old start data structures and algorithms?', 'Yes, once Python or Java fundamentals are solid. At 14 we cover arrays, strings, recursion and simple sorting and searching with real problems, which is the base for competitive programming and for the CS entrance tests that come later.'],
    ],
  },
  15: {
    title: 'Coding Classes for 15 Year Olds: Full Stack, AI and DSA, Class 10',
    desc: 'Live coding classes for 15 year olds in Class 10: full stack web, AI sessions, DSA and competitive programming, planned around the boards. 5 to 10 or 1-on-1.',
    quick: 'Coding classes for 15 year olds at Modern Age Coders are live, one hour per class, in a batch of 5 to 10 teens or 1-on-1, and the plan is written around the Class 10 board year: lighter in the pre-board months, paused for the boards if you want, and back to full pace afterwards. AI sessions for 15 year olds use real data and a teacher in the room, full stack work produces a deployed site, and DSA prepares the teen for Class 11 and for competitive programming. See <a href="/coding-for-class-10">coding for Class 10</a> for the exam-year version of this plan.',
    faqs: [
      ['Do you run AI sessions for 15 year olds?', 'Yes. AI sessions for 15 year olds are live, one hour, and project-based: a real dataset, a first machine learning model, a chatbot or an image classifier, and an honest discussion of what the model gets wrong. Tools are chosen for the age and used with a teacher present. Our <a href="/ai-classes-for-kids">AI classes for kids and teens</a> page has the details.'],
      ['Coding classes for 15 year olds in the board year: how do you protect exam time?', 'The year is planned with the school calendar from the start. Classes drop to one a week or pause completely in the pre-board and board months, whichever you choose, and resume at full pace afterwards. Nothing is lost, because the same teacher continues and the project picks up where it stopped.'],
    ],
  },
  16: {
    title: 'Coding Classes for 16 Year Olds: Full Stack, AI and DSA, Class 11',
    desc: 'Live online coding classes for 16 year olds in Class 11: full stack web, AI with Pandas and scikit-learn, DSA in C++ or Python. Batch of 5 to 10 or 1-on-1.',
    quick: 'Coding classes for 16 year olds at Modern Age Coders are live, one hour per class, in a batch of 5 to 10 teens or 1-on-1, and are built for the Class 11 year: a full stack project, an AI course on real data with Pandas and scikit-learn, and DSA in C++ or Python for the CS stream. School CS in CBSE and ICSE is covered along the way, a chapter ahead of the school. Board-first students can start on <a href="/computer-science-class-11-cbse">CBSE Class 11 CS</a> or <a href="/computer-science-class-11-icse">ICSE Class 11 CS</a>.',
    faqs: [
      ['Which AI courses suit 16 year olds?', 'At 16 the AI course is real machine learning: Pandas for data, scikit-learn for models, a neural network by the end, and a project the teen chooses, such as a price predictor, a recommender or an image classifier. It assumes Python; a teen without Python does a short foundation first. See <a href="/courses/ai-ml-masterclass-teens">AI and ML masterclass for teens</a>.'],
      ['Does a coding class for 16 year olds clash with Class 11 CS at school?', 'No, it runs a chapter ahead of it. The teacher has the CBSE or ICSE Class 11 syllabus open and teaches each topic before the school reaches it, so school CS becomes revision, and the project work goes far beyond what the board asks.'],
    ],
  },
  17: {
    title: 'Coding Classes for 17 Year Olds: Class 12 CS, DSA and Portfolio',
    desc: 'Live online coding classes for 17 year olds in Class 12: CBSE and ICSE CS and IP ahead of school, DSA, and a college-ready portfolio. 1 hour, 5 to 10 or 1-on-1.',
    quick: 'Coding classes for 17 year olds at Modern Age Coders are live, one hour per class, in a batch of 5 to 10 teens or 1-on-1, and are planned around the Class 12 board year: CS or IP taught a chapter ahead of school, DSA and competitive programming for the teen aiming at a CS degree, and a portfolio of finished projects that college applications can point to. Board-first students can start on <a href="/computer-science-class-12-cbse">CBSE Class 12 CS</a> or <a href="/computer-science-class-12-icse">ISC Class 12 CS</a>.',
    faqs: [
      ['Is 17 too late to start coding?', 'No. A 17 year old who starts from zero can reach confident Python, a first web project and DSA basics within the year, because a teen this age learns syntax quickly and can sit with a hard problem. The plan is simply paced around the board exams, lighter before them and full speed after.'],
      ['Can a 17 year old prepare for a CS degree while doing Class 12?', 'Yes, and that is what most of our 17 year olds do. The year covers the Class 12 CS or IP syllabus ahead of school, then DSA and competitive programming, then a portfolio project such as a deployed web app or an open-source contribution. After the boards, a short bridge into first-year college programming is available.'],
    ],
  },
};

const esc = (s) => s.replace(/&(?!(amp|lt|gt|quot|#\d+|#x[0-9a-f]+);)/gi, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function familyFixes(html) {
  // 1. trust stats
  html = html.replace(/<div class="age-trust-item"><strong>([^<]*)<\/strong><span>([^<]*)<\/span><\/div>/g, (m, big, sub) => {
    let pair = null;
    if (/review|rating/i.test(sub)) pair = RATING;
    else if (/^[\d,]+\+$/.test(big.trim())) pair = STUDENTS;
    else if (/^\d+%$/.test(big.trim())) pair = BATCH;
    if (!pair) return m;
    return '<div class="age-trust-item"><strong>' + pair[0] + '</strong><span>' + pair[1] + '</span></div>';
  });
  // 2. group size
  html = html.replace(/\b4 to 6 (students|kids|learners|children)/g, '5 to 10 $1')
    .replace(/\b4[–-]6 (kids|students)/g, '5 to 10 $1')
    .replace(/\b3[–-]4 students/g, '5 to 10 students');
  // 3. price anchors
  html = html.replace(/<strong>&#8377;4,999<\/strong>/g, '<strong><span data-price="coding.india.personal">₹4,999</span></strong>')
    .replace(/<strong>&#8377;1,499<\/strong>/g, '<strong><span data-price="coding.india.group">₹1,499</span></strong>');
  return html;
}

function findDivClose(html, openIdx) {
  // index just after the </div> that closes the <div at openIdx
  const re = /<div\b|<\/div>/g;
  re.lastIndex = openIdx + 1;
  let depth = 1, m;
  while ((m = re.exec(html))) {
    depth += m[0] === '</div>' ? -1 : 1;
    if (!depth) return m.index;
  }
  throw new Error('unbalanced div');
}

function agePage(html, n, cfg) {
  const t = esc(cfg.title), d = esc(cfg.desc);
  if (cfg.desc.length < 150 || cfg.desc.length > 160) throw new Error('age ' + n + ': description ' + cfg.desc.length + ' chars');
  if (cfg.title.length > 65) throw new Error('age ' + n + ': title ' + cfg.title.length + ' chars');
  let c = 0;
  const sub = (re, rep) => { if (!re.test(html)) throw new Error('age ' + n + ': missing ' + re); html = html.replace(re, rep); c++; };
  sub(/<title>[^<]*<\/title>/, '<title>' + t + SUFFIX + '</title>');
  sub(/<meta name="description"\s+content="[^"]*"/, '<meta name="description" content="' + d + '"');
  sub(/<meta property="og:title"\s+content="[^"]*"/, '<meta property="og:title" content="' + t + '"');
  sub(/<meta property="og:description"\s+content="[^"]*"/, '<meta property="og:description" content="' + d + '"');
  sub(/<meta name="twitter:title"\s+content="[^"]*"/, '<meta name="twitter:title" content="' + t + '"');
  sub(/<meta name="twitter:description"\s+content="[^"]*"/, '<meta name="twitter:description" content="' + d + '"');

  if (!html.includes(MARK)) {
    const hero = html.indexOf('class="age-section age-hero"');
    if (hero === -1) throw new Error('age ' + n + ': no hero section');
    const end = html.indexOf('</section>', hero);
    const block = '\n\n        <!-- ===== IN SHORT (Keyword Ledger action 6, 2026-09) ===== -->\n        <section class="age-section" ' + MARK + '>\n            <div class="age-wrap">\n                <span class="age-eyebrow">In short</span>\n                <p class="age-lede">' + cfg.quick + '</p>\n            </div>\n        </section>';
    html = html.slice(0, end + '</section>'.length) + block + html.slice(end + '</section>'.length);

    const faqOpen = html.indexOf('<div class="age-faq">');
    if (faqOpen === -1) throw new Error('age ' + n + ': no FAQ list');
    const close = findDivClose(html, faqOpen);
    const items = cfg.faqs.map(([q, a]) => '                    <details class="age-faq-item" ' + MARK + '>\n                        <summary>' + q + '</summary>\n                        <div class="age-faq-body">' + a + '</div>\n                    </details>\n\n').join('');
    // the list closes with "\n                </div>": put the items before that closing tag
    const lineStart = html.lastIndexOf('\n', close);
    html = html.slice(0, lineStart + 1) + items + html.slice(lineStart + 1);
  }
  return html;
}

const files = fs.readdirSync(PAGES).filter((f) => f.endsWith('.html')).filter((f) => fs.readFileSync(path.join(PAGES, f), 'utf8').includes('class="age-trust-item"'));
let changed = 0;
for (const f of files) {
  const p = path.join(PAGES, f);
  const before = fs.readFileSync(p, 'utf8');
  let html = familyFixes(before);
  const m = f.match(/^coding-for-(\d+)-year-olds\.html$/);
  if (m && AGE[m[1]]) html = agePage(html, m[1], AGE[m[1]]);
  if (html !== before) {
    changed++;
    if (!DRY) fs.writeFileSync(p, html);
    console.log((DRY ? 'would change ' : 'changed ') + f + (m ? ' (age page: head, quick answer, ' + AGE[m[1]].faqs.length + ' FAQs)' : ''));
  }
}
const ages = Object.keys(AGE).filter((n) => !files.includes('coding-for-' + n + '-year-olds.html'));
if (ages.length) throw new Error('age pages missing from the family: ' + ages.join(', '));
console.log((DRY ? 'would change ' : 'changed ') + changed + ' of ' + files.length + ' pages');
