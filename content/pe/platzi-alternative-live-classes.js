// SHIP: market | Platzi alternative for Peru: a course library at your own pace vs a live class in English | Leitner boxes: next-review days, a forgotten card drops to box 1, 12 reviews instead of 42
'use strict';
// Platzi alternative with live classes (ag- English versus page, Peru cluster row PE080, P3 versus, hubGroup guides; alloc pal, #9A2733).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Fairness: Platzi described only from its own pages fetched raw; no Platzi prices (its plans are named, never priced), no ratings,
// no reviews, no ranking. Platzi's own FAQ says its courses include live sessions, and this page says so; the difference drawn is
// format (a self-paced library with some live sessions against a class that is live with one mentor every time) and language.
// Spine: what Platzi says it is (library, own pace, certificates on a 90% exam, app, Platzi Learn from documents); what a live
// class adds and what it costs the learner in flexibility; who suits which (a self-test); combining both; a spaced-repetition
// lesson; a checklist for any course; the clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/platzi-alternative-live-classes/):
//  - platzi.com (platzi.raw/.txt, fetched once, 9 November 2026): "Platzi Learn: turn your documents into real learning.";
//    "PDF, deck, doc or videos" "up to 200 MB" (the source line contains a dash, so it is paraphrased); course titles "Backend
//    Development with Python", "Backend Development with Java", "Basic English A1" to "Advanced English C1"; footer "Live Classes";
//    html lang="es" (content served in English).
//  - platzi.com/precios/ (platzi_precios.raw/.txt, fetched 8 November 2026 for facts-market, reused): "Platzi is an online
//    education platform with more than 1900 courses"; "They are 100% online, available 24/7, and you can progress at your own pace.
//    They include downloadable material, challenges, live sessions and access to the community. When you pass each course, you
//    receive a certificate."; "pass the final exam with at least 90% grade, you will receive a certificate in PDF format";
//    "If you fail the exam you can try again in 6 hours."; "(Android 5+ or iOS 13+)"; "download classes from the app to watch
//    them offline"; "you can access the first 3 classes of any course at no cost"; "you can pause up to 2 times per year, each
//    pause lasting 1 month". Plan names Expert, Expert Duo, Expert Groups, Basic (no prices used).
//  - World Bank Global Findex, Peru, con30e (wb_PER_con30e.json): "Accessed online info to learn/train/educate in past three
//    months (% age 15+)" 2024 value 42.8854805356666 (printed as 42.9).
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "97,3%" (19 to 24), "95,2%" (25 to 40); "el 36,4% de los hogares".
//  - EF EPI 2025 Peru page (ef_peru.raw): ageGroup3Score 559 (26 to 30), ageGroup4Score 537 (31 to 40), ageGroup5Score 509 (41+);
//    speakingScore 480.
//  - Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30.
// Our own example (pal.py in the src-pages folder, python3 -I, Python 3.14.8; the recall record is invented), exact output:
//    day 1 ['slicing', 'dict.get', 'f-strings'] -> {'slicing': 2, 'dict.get': 2, 'f-strings': 1} ... day 13 ['f-strings'] ->
//    {...3, 3, 3} / reviews: 12 | daily drilling: 42
// Lesson family: Leitner spaced repetition; per-card next-due day; correct answers move a card up a box, a miss sends it to box 1.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  '# Leitner boxes: box 1 comes back after 1 day, box 2 after 3, box 3 after 7.',
  'GAP = {1: 1, 2: 3, 3: 7}',
  '',
  '# Our invented record: True means recalled without help.',
  'answers = {',
  "    'slicing':   [True, True, True],",
  "    'dict.get':  [True, False, True, True, True],",
  "    'f-strings': [False, False, True, True, True],",
  '}',
  'box = {k: 1 for k in answers}',
  'due = {k: 1 for k in answers}',
  'reviews = 0',
  '',
  'for day in range(1, 15):',
  '    today = [k for k in answers if due[k] == day]',
  '    for k in today:',
  '        ok = answers[k].pop(0)',
  '        reviews += 1',
  '        box[k] = min(box[k] + 1, 3) if ok else 1',
  '        due[k] = day + GAP[box[k]]',
  '    if today:',
  "        print('day', day, today, '->', box)",
  '',
  "print('reviews:', reviews, '| daily drilling:', 14 * 3)"
].join('\n');

const OUT = [
  "day 1 ['slicing', 'dict.get', 'f-strings'] -> {'slicing': 2, 'dict.get': 2, 'f-strings': 1}",
  "day 2 ['f-strings'] -> {'slicing': 2, 'dict.get': 2, 'f-strings': 1}",
  "day 3 ['f-strings'] -> {'slicing': 2, 'dict.get': 2, 'f-strings': 2}",
  "day 4 ['slicing', 'dict.get'] -> {'slicing': 3, 'dict.get': 1, 'f-strings': 2}",
  "day 5 ['dict.get'] -> {'slicing': 3, 'dict.get': 2, 'f-strings': 2}",
  "day 6 ['f-strings'] -> {'slicing': 3, 'dict.get': 2, 'f-strings': 3}",
  "day 8 ['dict.get'] -> {'slicing': 3, 'dict.get': 3, 'f-strings': 3}",
  "day 11 ['slicing'] -> {'slicing': 3, 'dict.get': 3, 'f-strings': 3}",
  "day 13 ['f-strings'] -> {'slicing': 3, 'dict.get': 3, 'f-strings': 3}",
  'reviews: 12 | daily drilling: 42'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Platzi alternative with live classes' },
  slug: 'platzi-alternative-live-classes',
  code: 'pal',
  accent: '#9A2733',
  accentRationale: 'Platzi alternative with live classes: a brick red #9A2733, the colour of a "recording" light switched off and a live microphone switched on; warm and direct, with contrast comfortably above 4.5 on the paper #FBF8F2',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'A Platzi alternative with live classes',
  title: 'Platzi Alternative With Live Classes in English, for Peru',
  description: 'Weighing Platzi against live classes? A fair look at a self-paced course library versus live online coding taught in English, for adults and students in Peru.',
  ogDescription: 'Platzi from its own pages, what a live class adds and takes away, a self-test for which format suits you, and a spaced-repetition lesson in Python.',
  twitterDescription: 'Self-paced library or live class? A fair Platzi comparison for learners in Peru, and live coding in English.',
  pageName: 'Platzi Alternative With Live Classes',
  webPageDescription: 'A fair guide for adults and students in Peru choosing between a self-paced online course library such as Platzi and live online coding classes taught in English, built from Platzi\'s own pages, World Bank Global Findex 2024, INEI household technology data for 2026 and EF EPI 2025, with an original Python lesson on spaced repetition.',
  courseDescription: 'Live online coding, data and AI courses for adults, university students and teenagers in Peru, taught in English by mentors based in India: Python, JavaScript, Java, SQL, web development and AI, in a group of fifteen to twenty or one to one, at hours the learner chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Platzi alternative',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#platzi', label: 'Platzi, in its words' },
    { href: '#formats', label: 'Library vs live' },
    { href: '#self-test', label: 'Which suits you' },
    { href: '#lesson', label: 'Memory lesson' },
    { href: '#checklist', label: 'Checklist' }
  ],
  eyebrow: 'Peru &middot; Adults and students &middot; Live online, in English',
  h1: 'A Platzi alternative with live classes',
  lede: 'Platzi is a widely used online learning platform with Latin American roots, and many Peruvians have tried it. Some love studying at their own pace. Others find that a library of videos waits patiently while life gets in the way, and start looking for a class that happens at a fixed moment with a real person. This page compares the two formats fairly, using Platzi\'s own description of itself, and helps you work out which one suits the way you learn.',
  secondaryCta: { href: '#self-test', label: 'Take the five-question self-test' },
  wa: 'Hello Modern Age Coders, I am in Peru and want live coding classes in English instead of recorded courses. Could I try a free class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; a mentor in every lesson, speaking English',
  spec: [
    ['Format', 'Live video, a mentor every time'],
    ['Language', 'English, every lesson'],
    ['Who', 'Adults, students, teens'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Hours', 'Any hour, set in Peru time'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'Straight answer',
  capsule: 'If you want a Platzi alternative with live classes, Modern Age Coders teaches coding, data and AI live online in English to adults, university students and teenagers in Peru. Every lesson is a real-time video class with a mentor based in India, in a group of fifteen to twenty or one to one, at hours you choose in Peru time. Platzi\'s own pages describe a large library you follow at your own pace, with some live sessions; ours is a class that happens with a person every time. The first class is free.',

  picks: {
    eyebrow: 'Where adults start',
    h2: 'Three courses adults in Peru often take instead of a video track',
    lede: 'Each is taught live from the first session, with the same mentor throughout.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PAL / 01', title: 'Python from zero', note: 'For adults who have started Python courses before and stalled. A mentor sets the pace, checks every exercise and will not let a gap pass unnoticed.' },
      { course: 'full-stack-web-development-masterclass-college', code: 'PAL / 02', title: 'Full stack web development', note: 'From HTML to React and Node.js, ending with an application you deploy and can explain, line by line, in English.' },
      { course: 'ai-tools-mastery-complete-college', code: 'PAL / 03', title: 'AI tools for work', note: 'For professionals over 18 who want to use AI tools well: prompting, checking output and building small workflows, with the reasoning kept in your hands.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who asks this',
      h2: 'Who looks for a Platzi alternative with live classes?',
      lede: 'Mostly adults who already know they can learn online, and have found that what they need is not more content but a fixed appointment, feedback and someone who notices when they are stuck.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The stalled self-learner', p: 'You started a track with real enthusiasm, finished a third of it, and have not opened it in a month. The material was fine; the missing piece was a reason to show up.' },
          { h3: 'The career changer', p: 'You need to reach a working level in Python, web or data within a year, and want someone to check your code and push you through the hard middle part.' },
          { h3: 'The English-minded professional', p: 'You want technical skills and the confidence to discuss them in English, because the job you are aiming at is with an international team.' }
        ] },
        { kind: 'p', mt: true, html: 'Online learning is common in Peru. In the World Bank\'s Global Findex survey for 2024, 42.9% of Peruvians aged 15 and over said they had used online information to learn, train or study in the previous three months. The question for most of them is not whether to learn online, but in which format.' }
      ]
    },
    {
      id: 'platzi',
      tint: 'tint',
      eyebrow: 'Platzi, in its own words',
      h2: 'What does Platzi say it offers?',
      lede: 'A large online course library, followed at your own pace on the web or in an app, with certificates on passing a final exam, and some live sessions and community features included.',
      body: [
        { kind: 'two',
          leftH3: 'The library',
          left: [
            'On its prices page Platzi describes itself as "an online education platform with more than 1900 courses", across development, AI, design, marketing, business, audiovisual production and English. Its homepage lists tracks such as Backend Development with Python and with Java, and an English school running from A1 to C1.',
            'Its FAQ says courses are "100% online, available 24/7, and you can progress at your own pace", and that they "include downloadable material, challenges, live sessions and access to the community". So Platzi is not purely recorded: live sessions are part of what it lists.'
          ],
          rightH3: 'Certificates, devices and newer tools',
          right: [
            'A certificate in PDF format comes after passing a course\'s final exam with at least 90%; a failed exam can be retaken after 6 hours. Courses run in a browser or in Platzi\'s app on Android 5+ or iOS 13+, and annual plans can download classes to watch offline.',
            'The homepage now leads with Platzi Learn, which turns documents you upload (PDFs, decks, documents or videos, up to 200 MB) into a class. The FAQ also says anyone can watch the first 3 classes of any course at no cost, and that a subscription can be paused up to twice a year, a month at a time.'
          ] },
        { kind: 'source', html: 'Sources: platzi.com, read on 9 November 2026, and platzi.com/precios/, read on 8 November 2026. Platzi\'s plans are named on that page (Expert, Expert Duo, Expert Groups and Basic); we do not reproduce their prices, ratings or reviews, and we make no claim that either format is better.' }
      ]
    },
    {
      id: 'formats',
      eyebrow: 'Library vs live',
      h2: 'How is a live class different from a self-paced course library?',
      lede: 'They solve different problems. A library gives breadth and freedom; a live class gives timing, feedback and accountability. Neither is better in general; each is better for certain people at certain moments.',
      body: [
        { kind: 'table', numCols: [], caption: 'A self-paced library with some live sessions, as Platzi describes itself, and our live classes, as we run them', head: ['Question', 'Platzi (its own pages)', 'Modern Age Coders'], rows: [
          ['When you study', 'Any time; "available 24/7"', 'At a booked hour, any day you choose'],
          ['Pace', '"progress at your own pace"', 'Set with a mentor, adjusted every week'],
          ['Teaching', 'Recorded courses, plus "live sessions"', 'A live mentor in every lesson'],
          ['Range', '"more than 1900 courses"', 'A smaller catalogue, taught in depth'],
          ['Feedback on your code', 'Challenges and community', 'Your mentor reads and comments on it'],
          ['Language', 'Pages we read served in English; Spanish-speaking brand', 'English only, every lesson'],
          ['Certificate', 'PDF after a final exam of 90% or more', 'Our own certificate of completion'],
          ['Trying first', 'First 3 classes of any course free', 'First live class free']
        ] },
        { kind: 'source', html: 'Platzi column: quotations and paraphrases from platzi.com and platzi.com/precios/ (8 and 9 November 2026). Our column: our own offer in November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'What a library does well',
          left: [
            'Range: if you want to sample design on Monday and SQL on Friday, a library lets you. Price per topic is usually low, and you can study at 2 a.m. on a phone in a taxi.',
            'Revision: a recorded explanation can be replayed as often as you need, which suits people who like to go slowly through a hard idea alone.'
          ],
          rightH3: 'What a live class does well',
          right: [
            'Momentum: the class happens whether or not you feel like it, and a mentor expects you there. For many adults that single fact is the difference between finishing and not.',
            'Correction: a mentor sees the mistake you did not know you made, asks why you wrote that line, and makes you explain it. A video cannot ask you a question back.'
          ] },
        { kind: 'p', mt: true, html: 'Many learners combine the two: a live course for the backbone of a skill, and a library for side topics. That is a perfectly sensible plan, and nothing about our classes stops you using any platform alongside them.' }
      ]
    },
    {
      id: 'self-test',
      tint: 'tint',
      eyebrow: 'Which suits you',
      h2: 'Should I learn coding with recorded courses or live classes?',
      lede: 'Answer five questions honestly. Three or more answers on the right suggest a live class will serve you better right now; three or more on the left suggest a library may be enough.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our five-question self-test (our own tool, not a scientific instrument)', head: ['Question', 'A library likely suits you if', 'A live class likely suits you if'], rows: [
          ['Have you finished a long online course alone before?', 'Yes, more than once', 'Rarely or never'],
          ['When you are stuck for an hour, what happens?', 'You search and solve it', 'You stop for days'],
          ['Do you need a deadline (job, exam, move)?', 'No fixed date', 'Yes, within a year'],
          ['How is your spoken technical English?', 'Not a goal for now', 'You want to practise it'],
          ['Do you want someone to read your code?', 'Not essential', 'Yes, regularly']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why English matters in the choice',
          left: [
            'EF\'s English Proficiency Index 2025 gives Peruvians aged 26 to 30 a score of 559, in EF\'s "high" band, those aged 31 to 40 a score of 537 and those over 41 a score of 509. Speaking is Peru\'s weakest skill, at 480.',
            'A recorded course trains listening and reading. A live class in English adds the part most Peruvian professionals say they lack: speaking about technical work, in real time, to someone who answers.'
          ],
          rightH3: 'Why time and equipment matter',
          right: [
            'Almost every working-age Peruvian is online: INEI found internet use of 97.3% among people aged 19 to 24 and 95.2% among those aged 25 to 40 in the second quarter of 2026. But only 36.4% of households had a computer.',
            'Coding seriously needs a laptop or desktop, whichever format you choose. A phone is enough to watch a lesson, and not enough to do one.'
          ] }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A real lesson',
      h2: 'Why do people forget what they watched? A spaced-repetition lesson in Python',
      lede: 'One reason recorded courses feel productive and then fade is that watching is not recalling. A simple answer from learning science is the Leitner box system: test yourself, and space the reviews out as an idea sticks. This lesson builds it in Python.',
      body: [
        { kind: 'two',
          leftH3: 'How the boxes work',
          left: [
            'Every idea starts in box 1 and comes back the next day. Recall it without help and it moves to box 2, which comes back after 3 days, then box 3, after 7. Forget it and it drops straight back to box 1.',
            'The program tracks three ideas from a Python lesson (slicing, <code>dict.get</code> and f-strings) over 14 days, using an invented record of right and wrong answers. Each idea stores its box and the day it is next due.'
          ],
          rightH3: 'What the output shows',
          right: [
            'On day 4, <code>dict.get</code> is forgotten and falls from box 2 to box 1, so it returns on day 5. That is the system doing its job: the weak idea gets attention, the strong one (slicing) is left alone until day 11.',
            'Across 14 days the three ideas need 12 reviews. Drilling all three every day would mean 42. Spacing is not about working less; it is about spending effort where memory is weakest.'
          ] },
        { kind: 'code', label: 'Leitner boxes for three Python ideas', lang: 'Python', code: CODE },
        { kind: 'code', label: 'What it prints', lang: 'Output', code: OUT, note: 'Exact output from running the program with Python 3.14. The right and wrong answers are invented for the lesson.' },
        { kind: 'p', mt: true, html: 'In our live classes, the mentor plays the part of the boxes: the first minutes of each lesson go back to whatever the learner struggled with last time, and ideas that are solid are left alone. With a library you can do the same yourself, and this little program is a fair place to start.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict.</strong> If <code>slicing</code> had been forgotten on day 4, on which day would it come back?',
          '<strong>Change a rule.</strong> Make box 3 return after 14 days and count the reviews again.',
          '<strong>Find the crash.</strong> Shorten one list of answers and explain, in English, why Python raises <code>IndexError</code>.',
          '<strong>Use it.</strong> Replace the three ideas with three things you are learning this month.'
        ] }
      ]
    },
    {
      id: 'checklist',
      tint: 'tint',
      eyebrow: 'Any course',
      h2: 'How do you choose an online coding course in Peru?',
      lede: 'The same eight checks work for a platform, a bootcamp, a university extension course or us.',
      body: [
        { kind: 'ol', items: [
          '<strong>Name the goal.</strong> A job, a project, an exam or curiosity. Each points to a different course.',
          '<strong>Check the format in writing.</strong> Recorded, live, or a mix, and how much of each.',
          '<strong>Ask who reads your code.</strong> A person, a test suite, peers, or nobody.',
          '<strong>Check the language.</strong> Which language every lesson and every piece of feedback is in.',
          '<strong>Try before paying.</strong> Platzi opens the first three classes of any course; we offer a free live class. Use them.',
          '<strong>Look at a finished project.</strong> Ask what a learner at the end can build, and see one.',
          '<strong>Read the stopping rules.</strong> Pauses, cancellation and renewal, before you pay.',
          '<strong>Decide after a month.</strong> Can you now do something alone that you could not before?'
        ] },
        { kind: 'p', mt: true, html: 'If you lean towards live classes, these pages go deeper: <a class="ag-inline-link" href="/ai-and-coding-for-professionals-peru">AI and coding for professionals in Peru</a>, <a class="ag-inline-link" href="/python-course-peru">a Python course for Peru</a>, and in Spanish <a class="ag-inline-link" href="/cursos-online-con-certificado-programacion-en-ingles">cursos online con certificado, en inglés</a> and <a class="ag-inline-link" href="/cursos-de-programacion-para-adultos-peru">cursos de programación para adultos</a>.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Lima times for a live class, beside the mentor\'s time in India (conversions, not a schedule)', head: ['Lima', 'India', 'Who often picks it'], rows: [
          ['06:30', '17:00', 'Before work'],
          ['13:00', '23:30', 'A lunch-hour class'],
          ['19:30', '06:00, next day', 'After the working day'],
          ['21:00', '07:30, next day', 'Late learners']
        ] },
        { kind: 'source', html: 'Conversions are ours, from the tz database: America/Lima stays at UTC minus 5 all year and Asia/Kolkata at UTC plus 5:30, a constant 10 hours 30 minutes apart. All our Peru pages are on the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru hub</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Six months',
    h2: 'What can an adult reach in six months of live classes?',
    lede: 'A realistic path for an adult starting Python from zero with two classes a week and some practice between them. These are our levels, not a guarantee.',
    table: { numCols: [], caption: 'Our six-month path for adult beginners', head: ['Month', 'You can', 'You can explain in English', 'Evidence'], rows: [
      ['1', 'Write short scripts with loops and conditions', 'What each line does', 'Ten small exercises'],
      ['2', 'Use lists, dictionaries and functions', 'Why a function beats copied code', 'A tidy script of your own'],
      ['3', 'Read and write files, handle errors', 'An error message and its cause', 'A tool that cleans a spreadsheet'],
      ['4', 'Use a library and an API', 'What the API returns', 'A small data report'],
      ['5', 'Structure a project and test it', 'How you tested it', 'A repository with tests'],
      ['6', 'Finish and present a project', 'Its design, in five minutes', 'A short live demo']
    ] },
    left: { h3: 'If you are switching from a library', ps: [
      'Bring what you already know. The free class finds your level, and you skip what you have truly mastered.',
      'Expect the first weeks to feel slower: you will be asked to explain, not just to finish.'
    ] },
    right: { h3: 'If you are short of time', ps: [
      'One-to-one lets you move a class when work runs late. Consistency matters more than intensity.',
      'Twenty minutes of recall between classes beats two hours of rewatching.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more live courses for adults in Peru',
    lede: 'Every one taught in English, live, with a single mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Software', sub: 'Building things', courses: [
        { code: 'PAL / SW / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java', blurb: 'Core Java to Spring Boot, for back-end work.' },
        { code: 'PAL / SW / 02', slug: 'react-js-complete-masterclass-college', title: 'React', blurb: 'Modern front ends, components and state.' },
        { code: 'PAL / SW / 03', slug: 'complete-flutter-app-development-masterclass-college', title: 'Flutter apps', blurb: 'One codebase for Android and iOS.' }
      ] },
      { num: 'II', h3: 'Data', sub: 'Working with numbers', courses: [
        { code: 'PAL / DATA / 01', slug: 'mysql-database-complete-masterclass-college', title: 'SQL and MySQL', blurb: 'Queries, joins and database design.' },
        { code: 'PAL / DATA / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'pandas, charts and honest conclusions.' },
        { code: 'PAL / DATA / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data for non-programmers', blurb: 'Analysis and AI for office professionals.' }
      ] },
      { num: 'III', h3: 'AI and tools', sub: 'Ages 18 and up', courses: [
        { code: 'PAL / AI / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'How models work and how to build with them.' },
        { code: 'PAL / AI / 02', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Working with Codex and Claude Code safely.' },
        { code: 'PAL / AI / 03', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Git and GitHub', blurb: 'The team workflow behind every project.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'How a live course runs for adults in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before work', l: 'An early slot on the Lima clock, for people whose evenings are unpredictable.' },
      { time: 'After work', l: 'An evening hour once the office day is over.' },
      { time: '1-on-1', l: 'You and one mentor, moved when your week changes.' }
    ],
    cells: [
      { h3: 'Recall first', p: 'Each class opens with what you found hard last time.' },
      { h3: 'Your code, read', p: 'A mentor comments on what you write.' },
      { h3: 'Spoken English', p: 'You explain your work aloud, every week.' },
      { h3: 'One mentor', p: 'The same person for the whole course.' },
      { h3: 'Real projects', p: 'Finished, tested and presented.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work by our adult students',
  projectsLede: 'Learners who stay the course build tools they use at work and at home. Some are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Google reviews written by our students and their families, shown as written.',

  fees: {
    h2: 'Fees for adults in Peru',
    lede: 'You pay monthly in US dollars by card. Your card issuer converts the charge to soles at its own daily rate, so the statement amount can vary slightly from one month to the next.',
    free: ['A free live class', 'Your level checked by a mentor', 'No card to book'],
    group: ['Fifteen to twenty learners at your level', 'One mentor for the course', 'Two live classes a week', 'Monthly, stop whenever you choose'],
    one: ['One learner, one mentor', 'A plan built around your goal', 'Hours that fit your work']
  },

  faq: {
    eyebrow: 'Learners ask',
    h2: 'Platzi or live classes: questions from learners in Peru',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and in English only. Mentors based in India speak clearly and adjust to your pace and accent, and the code and notes are on screen throughout. Practising technical English is part of the value.' },
      { q: 'Is Platzi recorded or live?', a: 'By its own description, mostly a library of courses you follow at your own pace, available at any hour, which also includes live sessions and community access. Ours is a live class with a mentor every time. Check Platzi\'s own site for the current details.' },
      { q: 'Is this better than Platzi?', a: 'We do not claim that. A self-paced library suits learners who finish courses alone; a live class suits those who need timing, feedback and someone to answer. Many people use both.' },
      { q: 'Are you connected with Platzi?', a: 'No. We are an independent online school with no link to Platzi. We describe it only from its own pages, read on 8 and 9 November 2026.' },
      { q: 'Can I use Platzi and your classes together?', a: 'Yes. Some learners keep a library for side topics and take a live course for their main skill. Tell your mentor what you are studying elsewhere so the plan fits around it.' },
      { q: 'When are classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Lima is 10 hours 30 minutes behind India all year, so 19:30 in Lima is 06:00 the next morning in India.' },
      { q: 'Do you give certificates?', a: 'Yes, our own certificate of completion. It is not a Peruvian academic qualification and carries no university credit. Most employers will care more about a project you can explain.' },
      { q: 'I am over 40 and a beginner. Is a live class too fast?', a: 'No. Groups are formed by level, not age, and one-to-one goes exactly at your speed. Many of our adult learners started later in life.' },
      { q: 'Do I need a computer?', a: 'Yes, a laptop or desktop with a stable connection and a headset. A phone can show the lesson, but coding needs a keyboard and a proper screen.' },
      { q: 'How do I pay from Peru?', a: 'Monthly by card, in US dollars, converted into soles by your bank. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'More for adults choosing how to learn',
    lede: 'Pages that help you decide.',
    items: [
      { href: '/how-we-teach', label: 'How we teach', p: 'A class from the inside.' },
      { href: '/we-teach-you-how-to-think', label: 'Reasoning first', p: 'Why we teach thinking before tools.' },
      { href: '/student-labs', label: 'Student labs', p: 'Real projects by learners.' },
      { href: '/ai-tools-age-guide', label: 'AI tools guide', p: 'Age rules for AI tools.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus in detail.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub', p: 'Every Peru page in one place.' }
    ]
  },

  start: {
    h2: 'Try one live class, free',
    lede: 'Book a free live class and compare it honestly with whatever you have used before. A mentor works through a real problem with you in English, sees where you are, and recommends a course, a format and hours that fit your week.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains a class in detail; the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Every class is live video from India, in English. Write to us on WhatsApp in English for the fastest reply.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'For learners', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/ai-and-coding-for-professionals-peru', label: 'For professionals' },
        { href: '/python-course-peru', label: 'Python course' },
        { href: '/cursos-de-programacion-para-adultos-peru', label: 'En español: adultos' }
      ] }
    ],
    bottomRight: 'Watching is not recalling'
  },

  personalityCss: `
.ag-root.ag-pal .ag-hero h1 { max-width: 18ch; letter-spacing: -0.012em; }
.ag-root.ag-pal .ag-capsule { border-left-width: 4px; }
.ag-root.ag-pal .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-pal .ag-steps li { line-height: 1.6; }
.ag-root.ag-pal .ag-code pre { font-size: 0.88em; }
`,

  dossier: {
    curriculumAuthority: 'Platzi homepage (9 November 2026) and prices page with FAQ (8 November 2026); World Bank Global Findex 2024 (con30e, Peru); INEI TIC en los Hogares II Trimestre 2026; EF EPI 2025 Peru page (age groups, speaking); IANA tz database.',
    localProject: 'An original Leitner-box lesson in Python: three ideas tracked over 14 days with an invented recall record; dict.get is forgotten on day 4 and drops to box 1; 12 reviews instead of 42 daily drills. Lesson family: spaced repetition with per-card due days.',
    requiredMentions: ['reviews: 12 | daily drilling: 42', 'Watching is not recalling', 'more than 1900 courses', 'Pages we read served in English; Spanish-speaking brand', 'PDF after a final exam of 90% or more', 'First 3 classes of any course free', '42.9% of Peruvians aged 15 and over', 'Our five-question self-test', 'The stalled self-learner'],
    sources: [
      { claim: 'Platzi Learn from documents up to 200 MB; course titles incl. Backend Development with Python and Java; English A1 to C1; Live Classes link.', url: 'https://platzi.com/' },
      { claim: 'More than 1900 courses; 100% online, 24/7, own pace, live sessions and community; 90% exam for a PDF certificate, retry after 6 hours; Android 5+ or iOS 13+; offline downloads on annual plans; first 3 classes free; pause up to 2 times a year.', url: 'https://platzi.com/precios/' },
      { claim: 'Global Findex 2024: 42.9% of Peruvians 15+ accessed online information to learn in the past three months.', url: 'https://api.worldbank.org/v2/country/PER/indicator/con30e?source=28&format=json' },
      { claim: 'INEI II Trimestre 2026: internet use 97.3% (19 to 24), 95.2% (25 to 40); 36.4% of households with a computer.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025 Peru: 26 to 30 score 559, 31 to 40 score 537, 41+ score 509; speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Platzi prices, ratings, reviews, awards and company-count claims: not used; plans named only.',
      'That Platzi is only recorded: not made; its FAQ lists live sessions and the page says so.',
      'That live classes are better for everyone: not made; the page gives a self-test and suggests combining formats.',
      'Any job or salary promise: not made.',
      'Spanish-language teaching by us: none; the page says the classes are in English only.'
    ]
  }
};
