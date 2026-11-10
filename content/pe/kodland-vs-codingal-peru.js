// SHIP: market | Kodland vs Codingal for a family in Peru, from their own pages, and a third format | merging dicts of facts: defaults | facts, not facts | defaults; listing the gaps
'use strict';
// Kodland vs Codingal for Peru (ag- English versus page, Peru cluster row PE079, P3 versus, hubGroup guides; alloc koc, #6F1821).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Fairness: both providers described only from their own pages fetched raw; no prices, ratings, reviews or testimonials; no
// ranking, no "winner". Where their pages disagree with themselves (ages), both statements are quoted and the reader is told to ask.
// Spine (different from the Spanish sibling kodland-opiniones-alternativa, which is about trust, opinions and a rounding lesson):
// two formats read side by side (Spanish small group or 1-1, weekly; English 1:1, any time); the primary-source table built from
// both sites; what neither page says for a Peruvian family; a lesson on merging dictionaries of facts and listing gaps; a
// checklist for any school; ours as a third format; the clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/kodland-vs-codingal-peru/):
//  - kodland.org/es (kodland-es.html/.txt, fetched 9 November 2026, copied from the sibling folder): title "Kodland — Escuela de
//    Programación y Diseño para Niños (5-17)"; "Contenidos prácticos de programación, videojuegos y diseño con tutores en vivo y
//    proyectos reales"; "Grupos pequeños"; "1-1 con tutor"; "De programación por bloques a código en JavaScript o Python.";
//    "Desarrollamos el pensamiento matemático y reforzamos conocimientos del currículo escolar."; html lang="es"; 0 hits for Perú.
//  - Kodland FAQ (kodland-faqContent.js, Spanish entries): "Nuestros cursos están diseñados para niños y adolescentes de 8 a 17
//    años."; "Las clases grupales se dan una vez a la semana en el horario elegido."; "Las clases se dan en una PC de escritorio o
//    laptop, las tablets no son adecuadas."; "Le damos certificados electrónicos a nuestros estudiantes".
//  - codingal.com (codingal.raw/.txt, fetched 9 November 2026, once): "1:1 live AI & coding classes for kids and teens with expert
//    teachers"; "Codingal supports learners from ages 6-18 and Grades 1-12"; "Our AI & coding classes for kids & teens start from
//    age 5."; "selecting any time and any day that works for you"; "a laptop/computer with a webcam and a stable internet
//    connection. Classes can also be attended on a tablet/iPad with an external keyboard"; "We conduct the first Parent Teacher
//    Meeting(PTM) after the 6th session"; course titles "AP Computer science A: Programming with Java", "IOI Algorithms: Master
//    Algorithms with Python"; html lang="en"; 0 hits for Peru.
//  - EF EPI 2025 Peru page (ef_peru.raw): cityScore lima 555 "high"; efEpiScore 519.
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "92,5%" (12 to 18), "68,2%" (6 to 11); "el 36,4% de los hogares".
//  - Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30.
// Our own example (koc.py in the src-pages folder, python3 -I, Python 3.14.8; School A and School B are invented by us), output:
//    wrong: not stated | not stated / right: Spanish | small group or 1-1 / A Spanish not stated gaps: ['ages', 'peru page'] /
//    B English 6 to 18 gaps: ['peru page']
// Lesson family: dictionary merge with |, right-hand side wins every clash, so the order of defaults and facts matters; a list
// comprehension that lists missing keys.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  "blank = {'language': 'not stated', 'ages': 'not stated',",
  "         'format': 'not stated', 'peru page': 'not stated'}",
  '',
  "school_a = {'language': 'Spanish', 'format': 'small group or 1-1'}",
  "school_b = {'language': 'English', 'ages': '6 to 18', 'format': '1:1'}",
  '',
  'wrong = school_a | blank      # the right-hand side wins every clash',
  'right = blank | school_a',
  '',
  "print('wrong:', wrong['language'], '|', wrong['format'])",
  "print('right:', right['language'], '|', right['format'])",
  '',
  "for name, facts in [('A', school_a), ('B', school_b)]:",
  '    row = blank | facts',
  '    gaps = [k for k in blank if k not in facts]',
  "    print(name, row['language'], row['ages'], 'gaps:', gaps)"
].join('\n');

const OUT = [
  'wrong: not stated | not stated',
  'right: Spanish | small group or 1-1',
  "A Spanish not stated gaps: ['ages', 'peru page']",
  "B English 6 to 18 gaps: ['peru page']"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Kodland vs Codingal, for Peru' },
  slug: 'kodland-vs-codingal-peru',
  code: 'koc',
  accent: '#6F1821',
  accentRationale: 'Kodland vs Codingal for Peru: an oxblood red #6F1821, the shade of a ledger\'s ruled margin, chosen because this page is a side-by-side record rather than a sales pitch; well above 4.5 contrast on the paper #FBF8F2',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Kodland vs Codingal for families in Peru',
  title: 'Kodland vs Codingal in Peru: Formats Compared Fairly',
  description: 'Kodland vs Codingal for a family in Peru, read from their own websites: language, ages, group or one to one, timing and equipment, plus live classes in English.',
  ogDescription: 'Two online coding schools for children, compared only from what each says about itself, with the gaps a Peruvian family should ask about and a third, English-taught option.',
  twitterDescription: 'Kodland and Codingal compared from their own pages, for families in Peru, and a live English-taught option.',
  pageName: 'Kodland vs Codingal for Families in Peru',
  webPageDescription: 'A fair comparison of Kodland\'s Spanish-language site and Codingal\'s English-language site for families in Peru, built only from each provider\'s own pages read on 9 November 2026, with EF EPI 2025 and INEI household technology data, a Python lesson on merging dictionaries of facts, and Modern Age Coders as a third format.',
  courseDescription: 'Live online coding classes for children and teenagers in Peru, taught in English by mentors based in India, in a group of fifteen to twenty or one to one, at any hour the family chooses: Scratch, Roblox, Python, Java, web, AI and algorithms.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Kodland vs Codingal',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#kodland', label: 'Kodland' },
    { href: '#codingal', label: 'Codingal' },
    { href: '#side-by-side', label: 'Side by side' },
    { href: '#gaps', label: 'Gaps to ask about' },
    { href: '#third', label: 'A third format' }
  ],
  eyebrow: 'Peru &middot; Comparing online coding schools &middot; Live, in English',
  h1: 'Kodland vs Codingal, for a family in Peru',
  lede: 'Kodland and Codingal both teach coding to children online, and Peruvian parents often weigh one against the other. They are built differently, and the differences are easy to miss on a phone screen at night. This page reads both schools only from their own websites, sets what each says side by side, points out what neither page tells a family in Peru, and describes a third format: ours.',
  secondaryCta: { href: '#side-by-side', label: 'See the side-by-side table' },
  wa: 'Hello Modern Age Coders, I am in Peru comparing online coding schools for my child. Could we try a free class in English?',
  heroNote: 'Live online teaching since 2020 &middot; 10,000+ students worldwide &middot; English-only classes, group or one to one',
  spec: [
    ['This page', 'Two schools, from their own sites'],
    ['Read on', '9 November 2026'],
    ['Left out', 'Prices, ratings and reviews'],
    ['Our format', 'Live, in English, group or 1-to-1'],
    ['Our ages', '6 to 18, and adults'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'Straight answer',
  capsule: 'Kodland\'s Spanish site offers live coding and design classes for children in small groups or one to one, with group classes once a week. Codingal\'s English site offers live one-to-one coding classes for ages 6 to 18 at any time. Neither homepage mentions Peru. Modern Age Coders is a third format: live online coding taught in English, with groups of fifteen to twenty learners or private one-to-one lessons, for ages 6 to adult, booked at whatever Peruvian hour works at home. The fair choice depends on the language and format your child needs.',

  picks: {
    eyebrow: 'Our starting points',
    h2: 'Three courses Peruvian families compare with these schools',
    lede: 'One for younger children, one for teens heading towards university computing, and one for teens who like puzzles and contests.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'KOC / 01', title: 'Python and AI for kids', note: 'For children of about 10 to 13 ready to type real code. Small programs, small AI projects and English error messages read aloud together.' },
      { course: 'java-programming-masterclass-for-teens', code: 'KOC / 02', title: 'Java for teens', note: 'For secundaria students who want the language of many first-year university courses and of the AP Computer Science A exam, taught from objects up.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'KOC / 03', title: 'Problem solving and DSA for teens', note: 'For teens who enjoy puzzles: data structures, algorithms and contest-style problems, solved and explained aloud in English.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Why this comparison',
      h2: 'Why do Peruvian parents compare Kodland and Codingal?',
      lede: 'Because both appear when a parent searches for online coding classes for children, and on the surface they look alike: live classes, a free trial, projects, certificates. Underneath, the language and the shape of the class differ.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The language question', p: 'One site is written in Spanish and the other in English. For many Peruvian families that single fact decides more than any feature list.' },
          { h3: 'The format question', p: 'Small group, one to one, or both. Each format changes how much a child talks, how fast they move and what a month costs a family.' },
          { h3: 'The fit question', p: 'Ages, subjects and equipment. A school can be right for a 9-year-old and wrong for a 15-year-old, or the other way round.' }
        ] },
        { kind: 'p', mt: true, html: 'We are a third school, so we have an interest. To keep this fair we quote each provider only from its own pages, read in full on 9 November 2026; we leave out prices, ratings and reviews entirely; and we do not declare a winner. Pages change, so check anything important on each school\'s site before deciding.' }
      ]
    },
    {
      id: 'kodland',
      tint: 'tint',
      eyebrow: 'Kodland, in its own words',
      h2: 'What does Kodland\'s Spanish site say it offers?',
      lede: 'A school of programming and design for children and teenagers, taught live by tutors in Spanish, in small groups or one to one, on Kodland\'s own platform.',
      body: [
        { kind: 'two',
          leftH3: 'Subjects and format',
          left: [
            'The Spanish homepage describes practical programming, video-game and design content "con tutores en vivo y proyectos reales" (with live tutors and real projects). Its course cards include Roblox game design, Minecraft modding and Python, plus graphic design, drawing and a maths strand that it says reinforces the school curriculum.',
            'On the path from beginner to typed code it says: "De programación por bloques a código en JavaScript o Python" (from block programming to code in JavaScript or Python). It lists two formats, "Grupos pequeños" and "1-1 con tutor".'
          ],
          rightH3: 'Ages, rhythm and equipment',
          right: [
            'The page title says ages 5 to 17. Kodland\'s own FAQ says its courses are designed for children and teenagers "de 8 a 17 años". Both statements are on its site, so ask which applies to your child\'s course.',
            'The FAQ says group classes run "una vez a la semana en el horario elegido" (once a week at the chosen time), that classes need a desktop PC or laptop because tablets are not suitable, and that students receive electronic certificates.'
          ] },
        { kind: 'p', mt: true, html: 'What the site is for Peru: the Spanish edition we read does not mention Peru by name. Kodland may run editions in other languages; we reviewed only kodland.org/es and its Spanish FAQ. If Spanish-language teaching is what your child needs, it is a format worth trying in a trial class. Questions about trust and online opinions of Kodland are covered, in Spanish, on <a class="ag-inline-link" href="/kodland-opiniones-alternativa">Kodland: opiniones y una alternativa en inglés</a>.' }
      ]
    },
    {
      id: 'codingal',
      eyebrow: 'Codingal, in its own words',
      h2: 'What does Codingal\'s site say it offers?',
      lede: 'Live one-to-one coding and AI classes for children and teenagers, in English, at times the family selects, across a catalogue that runs from block coding to exam and olympiad courses.',
      body: [
        { kind: 'two',
          leftH3: 'Subjects and format',
          left: [
            'Its homepage headline offers "1:1 live AI &amp; coding classes for kids and teens with expert teachers". The catalogue runs from Scratch and block coding through Python, web, app and Roblox development to data science, a course for the AP Computer Science A exam in Java, and an algorithms course aimed at the IOI.',
            'For parents it describes a first Parent Teacher Meeting after the sixth session and progress reports after each meeting.'
          ],
          rightH3: 'Ages, timing and equipment',
          right: [
            'The homepage says Codingal "supports learners from ages 6-18 and Grades 1-12". Its FAQ also says its classes "start from age 5". As with Kodland, ask which applies to the course you want.',
            'On timing, the FAQ says families can select "any time and any day". On equipment it asks for a laptop or computer with a webcam and a stable connection, and says a tablet works with an external keyboard.'
          ] },
        { kind: 'p', mt: true, html: 'What the site is for Peru: the page is written in English, and we found no mention of Peru on it. Grades are given in the US style (Grades 1 to 12), so a Peruvian parent will need to translate from primaria and secundaria. Roughly, MINEDU\'s 1° de primaria at age 6 matches Grade 1.' }
      ]
    },
    {
      id: 'side-by-side',
      tint: 'tint',
      eyebrow: 'Side by side',
      h2: 'Kodland vs Codingal: how do the two formats compare?',
      lede: 'The table sets the two sites next to each other, quoting or closely paraphrasing each provider\'s own page. Where a page did not say something, the cell says so.',
      body: [
        { kind: 'table', numCols: [], caption: 'Kodland (Spanish site) and Codingal (English site), as each describes itself', head: ['Question', 'Kodland, kodland.org/es', 'Codingal, codingal.com'], rows: [
          ['Language of the site', 'Spanish', 'English'],
          ['Live teaching', 'Yes, "tutores en vivo"', 'Yes, "1:1 live" classes'],
          ['Format', 'Small groups, or 1-1 with a tutor', 'One to one'],
          ['Ages stated', '5 to 17 (title); 8 to 17 (FAQ)', '6 to 18, Grades 1 to 12 (homepage); from 5 (FAQ)'],
          ['How often', 'Group classes once a week, at the chosen time', 'Any time and any day the family selects'],
          ['Equipment', 'Desktop or laptop; tablets not suitable', 'Laptop or computer with webcam; tablet with external keyboard'],
          ['Typed languages named', 'JavaScript, Python, Lua', 'Python, JavaScript, Java and others'],
          ['Beyond coding', 'Design, drawing, maths', 'AI, data science, AP and IOI courses'],
          ['Certificates', 'Electronic certificates', 'Certificates for each level'],
          ['Peru mentioned', 'Not on the page we read', 'Not on the page we read']
        ] },
        { kind: 'source', html: 'Sources: kodland.org/es and Kodland\'s Spanish FAQ; codingal.com homepage and its FAQ; both read on 9 November 2026. English renderings of Kodland\'s Spanish are ours. We list no prices, ratings or reviews from either site by choice, and nothing here ranks one school above the other.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table fairly',
          left: [
            'Neither column is "better". A shy 8-year-old who speaks Spanish at home may thrive in a small Spanish-speaking group; a 15-year-old preparing for an English-language university course may prefer one-to-one in English.',
            'Both sites state ages in two places with different numbers. That is common on large sites with many courses, and it is why the trial class matters more than the homepage.'
          ],
          rightH3: 'What the table cannot tell you',
          right: [
            'How a particular teacher explains, whether your child talks or only listens, what happens after a missed lesson, and how simply a family can leave. Only a trial and a direct question answer those.',
            'How each school handles a family in Peru time. A school in another time zone may still teach at Peruvian hours; ask for a time on your clock, not theirs.'
          ] }
      ]
    },
    {
      id: 'gaps',
      eyebrow: 'Gaps, and a lesson',
      h2: 'What should a Peruvian family ask that neither page answers?',
      lede: 'Mostly practical things: the hour in Peru time, the teaching language when a child is stuck, the equipment at home, and how to stop. Keeping notes on every school in the same shape makes the gaps obvious, and that is the idea behind this short Python lesson.',
      body: [
        { kind: 'two',
          leftH3: 'Notes as dictionaries',
          left: [
            'Write each school\'s facts as a Python dictionary: one key per question, one value per answer. A second dictionary, <code>blank</code>, holds every question you care about, each set to "not stated". Merging the two should give a full row with the gaps still marked.',
            'Python 3.9 and later merge dictionaries with the <code>|</code> operator. When both sides have the same key, <strong>the right-hand side wins</strong>. That one rule decides whether your notes come out right.'
          ],
          rightH3: 'The bug, and the fix',
          right: [
            'In the program, <code>wrong = school_a | blank</code> puts the blanks on the right, so every real answer is overwritten by "not stated". The output shows it: <code>wrong: not stated | not stated</code>.',
            'Swapping the order, <code>blank | school_a</code>, keeps the facts and fills only the missing keys. A list comprehension then names the gaps, which become your questions for the trial class. School A and School B here are invented, not Kodland or Codingal.'
          ] },
        { kind: 'code', label: 'Merging notes on two schools', lang: 'Python', code: CODE },
        { kind: 'code', label: 'What it prints', lang: 'Output', code: OUT, note: 'Copied unchanged from running the script under Python 3.14; both schools and every fact about them were made up for this lesson.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict.</strong> Before running it, say which line prints "not stated" twice, and why.',
          '<strong>Add a key.</strong> Put <code>\'hours\': \'not stated\'</code> in <code>blank</code> and watch both schools gain a gap.',
          '<strong>Count.</strong> Print how many questions each school has answered, using <code>len(facts)</code>.',
          '<strong>Explain.</strong> In one English sentence, say what "the right-hand side wins" means for <code>a | b</code>.'
        ] },
        { kind: 'p', mt: true, html: 'This is the kind of lesson our teen students meet early: a small, real problem, one surprising result, and a rule they will reuse for years. Merging settings, configuration files and API responses all follow the same right-hand-wins rule.' }
      ]
    },
    {
      id: 'choose',
      tint: 'tint',
      eyebrow: 'How to choose',
      h2: 'How should a family in Peru choose between online coding schools?',
      lede: 'With one checklist for every school, Kodland, Codingal, us or anyone else, filled in after a trial class rather than from the homepage.',
      body: [
        { kind: 'ol', items: [
          '<strong>Language.</strong> Which language is every lesson in, and what happens when your child does not understand?',
          '<strong>Format.</strong> Group or one to one, how many children per teacher, and can you switch later?',
          '<strong>Hours on your clock.</strong> Ask for the class time in Peru time, written down.',
          '<strong>Ages.</strong> Ask which age range applies to the specific course, not the school as a whole.',
          '<strong>Equipment.</strong> A computer, a camera, a headset; check what the course truly needs. In INEI\'s survey for April to June 2026, only 36.4% of homes across Peru owned even one computer.',
          '<strong>Thinking, not copying.</strong> In the trial, does the teacher ask your child to predict and explain, or mainly to copy?',
          '<strong>Progress you can see.</strong> How will you know, after a month, what your child can now do alone?',
          '<strong>Stopping.</strong> How do you pause or stop, and what notice is needed?'
        ] },
        { kind: 'p', mt: true, html: 'Online habits differ by age. INEI\'s figures for April to June 2026 put internet use at 92.5% among teenagers of 12 to 18, but 68.2% among children of 6 to 11. A teenager can usually manage a live class alone; a younger child often needs an adult nearby for the first few weeks, whichever school you choose.' }
      ]
    },
    {
      id: 'third',
      eyebrow: 'A third format',
      h2: 'Where does Modern Age Coders fit next to Kodland and Codingal?',
      lede: 'As a third shape of class: taught in English like Codingal, offering groups as well as one-to-one like Kodland, and continuing past school age into university and adult courses.',
      body: [
        { kind: 'two',
          leftH3: 'What we offer',
          left: [
            'Every class is live, online and taught in English by our India-based mentors, who keep their speech clear and adjust to every learner\'s speed and accent. Families choose a group of fifteen to twenty at a similar level, or one-to-one.',
            'Ages run from 6 to adult: Scratch and Roblox for younger children, Python and Java for teens, data structures, web, AI and more for university students and professionals. Hours are chosen by the family, any day.'
          ],
          rightH3: 'What we are not',
          right: [
            'We are not a Spanish-language school. A child who still needs Spanish to follow a lesson will be better served elsewhere for now, and we will say so after the free class.',
            'We do not teach drawing or graphic design, and we teach coding rather than robots or hardware. We are not connected with MINEDU or any Peruvian school, and our certificate of completion is our own.'
          ] },
        { kind: 'p', mt: true, html: 'English-taught classes suit some Peruvian children more than others. EF\'s English Proficiency Index 2025 puts Lima at 555, in its "high" band, and Peru as a whole at 519; EF tests adults, so treat that as background rather than a verdict on your child. Younger children have their own page, <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">live coding for Peruvian kids</a>; for teenagers, <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding classes for teens in Peru</a>; and in Spanish, <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">clases de programación para niños online</a>.' },
        { kind: 'table', mt: true, numCols: [], caption: 'A clock in Lima beside a clock in India: worked conversions, never a schedule', head: ['Lima clock', 'Mentor\'s clock in India', 'Typical use'], rows: [
          ['09:30 Saturday', '20:00 Saturday', 'Weekend morning'],
          ['15:30', '02:00, next day', 'After the morning school shift'],
          ['17:00', '03:30, next day', 'Late afternoon'],
          ['19:00', '05:30, next day', 'Evening, teens']
        ] },
        { kind: 'source', html: 'We worked these out from the tz database zones America/Lima, five hours behind UTC with no summer time, and Asia/Kolkata, five and a half hours ahead. Every Peru page we have written is on the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru hub</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'After the trial',
    h2: 'What should you see in the first three months at any school?',
    lede: 'A simple yardstick that works for Kodland, Codingal, us or anyone else. These are our suggestions, not any school\'s promise.',
    table: { numCols: [], caption: 'Signs of real progress, month by month (our suggestions)', head: ['When', 'Your child can', 'Ask the teacher', 'A warning sign'], rows: [
      ['Week 1', 'Show you the trial project and name one part', 'What did my child find hardest?', 'Nothing to show'],
      ['Week 4', 'Change a program without step-by-step help', 'What should we practise at home?', 'Every project identical'],
      ['Week 8', 'Explain a bug they fixed', 'Is the level still right?', 'Your child has stopped talking about it'],
      ['Week 12', 'Start a small project of their own', 'What comes next, and why?', 'Only copying from the screen']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask for the same three things at every school: something to see, something explained, and a next step.',
      'If the language is the problem rather than the coding, say so early; a change of format often fixes it.'
    ] },
    right: { h3: 'For teens', ps: [
      'Keep every project in one folder with a sentence about what it does. It becomes your record.',
      'If a class feels too slow, ask to move level. Good schools expect that question.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses, all live and in English',
    lede: 'Grouped by what families comparing these schools usually ask for.',
    bands: [
      { num: 'I', h3: 'Exams and contests', sub: 'Secundaria', courses: [
        { code: 'KOC / EXAM / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java for the AP exam, unit by unit.' },
        { code: 'KOC / EXAM / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Timed problems and the thinking behind them.' },
        { code: 'KOC / EXAM / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A full grounding before contests or exams.' }
      ] },
      { num: 'II', h3: 'Games and creativity', sub: 'Primaria', courses: [
        { code: 'KOC / PLAY / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Lua scripts inside games children already play.' },
        { code: 'KOC / PLAY / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Building and automating with code.' },
        { code: 'KOC / PLAY / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Building games with AI help', blurb: 'Scratch games, with AI used as a helper, not a shortcut.' }
      ] },
      { num: 'III', h3: 'AI, apps and the web', sub: 'Older children and teens', courses: [
        { code: 'KOC / BUILD / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'How models learn, built and tested by hand.' },
        { code: 'KOC / BUILD / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'From an idea to a working phone app.' },
        { code: 'KOC / BUILD / 03', slug: 'kids-ai-web-development-course', title: 'Web pages with AI', blurb: 'First websites, with AI explained along the way.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'What a week of our classes looks like from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Group', l: 'Fifteen to twenty learners at one level, at an hour agreed in Peru time.' },
      { time: '1-on-1', l: 'One learner and one mentor, at any hour you set.' },
      { time: 'Switching', l: 'Move between group and one-to-one as needs change.' }
    ],
    cells: [
      { h3: 'English only', p: 'Every lesson, start to finish.' },
      { h3: 'Prediction first', p: 'Learners guess the result before running code.' },
      { h3: 'One mentor', p: 'The same person throughout the course.' },
      { h3: 'Ages 6 to adult', p: 'From Scratch to university-level courses.' },
      { h3: 'Notes for parents', p: 'What was built, and what comes next.' },
      { h3: 'Any device with a keyboard', p: 'A laptop or desktop works best.' }
    ]
  },

  projectsH2: 'Some projects by our students',
  projectsLede: 'A sample of what learners build once they keep going; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Reviews families and students left for us on Google, word for word.',

  fees: {
    h2: 'Our fees, for families in Peru',
    lede: 'Our fees are set in US dollars and taken monthly from a card. Your bank turns them into soles at its own rate, so the figure on your statement can move a little each month.',
    free: ['A free trial class', 'A small project, built live', 'No card required'],
    group: ['Fifteen to twenty learners per level', 'One mentor throughout', 'Two live classes a week', 'Monthly, stop whenever you need'],
    one: ['One learner, one mentor', 'A plan for your child alone', 'Any hour you choose']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'Kodland, Codingal and our classes: common questions',
    items: [
      { q: 'Are your classes in Spanish?', a: 'No. Every class is live, online and in English only, and our mentors in India keep their English clear and paced to each child, accent included. For a child who cannot yet follow a lesson in English, a Spanish-language school is the kinder choice at present.' },
      { q: 'Which is better, Kodland or Codingal?', a: 'We do not rank other schools. From their own pages, Kodland\'s Spanish site offers small groups or one-to-one in Spanish, and Codingal\'s English site offers one-to-one in English. The better fit depends on your child\'s language, age and how they like to learn; a trial at each is the fairest test.' },
      { q: 'Is Kodland reliable?', a: 'We cannot judge another school for you. Check what any school says about itself on its own site, ask for its legal company details and terms, try a trial class, and see what your child can do after a month. Those checks apply to us too.' },
      { q: 'Why does this page not show their prices?', a: 'By choice. Prices change, are often shown differently by country, and comparing them out of context misleads. Each school publishes its own; we show only ours, through the fees section of this page.' },
      { q: 'Are you connected with Kodland or Codingal?', a: 'No. We are an independent online school and have no link with either. We describe them only from their own websites as read on 9 November 2026.' },
      { q: 'What ages do you teach?', a: 'From 6 upwards, including teenagers, university students and adults. Younger children start with Scratch; typed Python usually starts at about 10, and Java at about 13.' },
      { q: 'When are your classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru is 10 hours 30 minutes behind India all year, so 19:00 in Lima is 05:30 the next morning in India.' },
      { q: 'Group or one to one: which should we pick?', a: 'Groups of fifteen to twenty suit children who enjoy company and a steady pace. One-to-one suits children who need a slower start in English, have exam goals, or need unusual hours. You can switch later.' },
      { q: 'Do you give certificates?', a: 'Yes, our own certificate of completion at the end of a course. It is not a Peruvian qualification and is not issued or recognised by MINEDU.' },
      { q: 'How do we pay from Peru?', a: 'By card, monthly, in US dollars; your bank converts it into soles. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Keep reading',
    h2: 'More help for comparing schools',
    lede: 'Further pages for a careful decision.',
    items: [
      { href: '/how-we-teach', label: 'How we teach', p: 'A full live lesson, described.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking, not copying', p: 'Our approach to reasoning.' },
      { href: '/student-labs', label: 'Student work', p: 'Projects our learners built.' },
      { href: '/ai-tools-age-guide', label: 'AI tools and ages', p: 'Age rules for popular AI tools.' },
      { href: '/courses', label: 'Course list', p: 'Every syllabus, in full.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub', p: 'Every Peru page in one index.' }
    ]
  },

  start: {
    h2: 'Try our format with a free class',
    lede: 'Book one free class and compare it with any trial you take elsewhere. Your child builds something small with a mentor in English; afterwards you hear honestly how the language went, which course fits, and whether a group or one-to-one suits better.',
    readFirst: 'Reading first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a real class, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Classes are live video from India, taught in English. WhatsApp us in English or Spanish; we answer in English.',
    formNote: 'Free, no card, no obligation to continue.'
  },

  footer: {
    cols: [
      { h4: 'For families', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/online-coding-classes-for-kids-peru', label: 'Kids, online' },
        { href: '/coding-classes-for-teens-peru', label: 'Teens' },
        { href: '/clases-de-programacion-para-ninos-online-peru', label: 'En español: niños online' }
      ] }
    ],
    bottomRight: 'In a | b, the right side wins'
  },

  personalityCss: `
.ag-root.ag-koc .ag-hero h1 { max-width: 18ch; letter-spacing: -0.01em; }
.ag-root.ag-koc .ag-capsule { border-left-width: 3px; }
.ag-root.ag-koc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-koc .ag-code pre { font-size: 0.9em; }
`,

  dossier: {
    curriculumAuthority: 'Kodland Spanish site and FAQ (kodland.org/es); Codingal homepage and FAQ (codingal.com); EF EPI 2025 Peru page; INEI TIC en los Hogares II Trimestre 2026; IANA tz database. Read 9 November 2026.',
    localProject: 'An original Python lesson on merging dictionaries of facts about two invented schools: school_a | blank overwrites every answer with "not stated", blank | school_a keeps the facts, and a list comprehension lists the gaps (peru page, ages). Lesson family: dict merge order with |, right-hand side wins, missing keys.',
    requiredMentions: ['wrong: not stated | not stated', 'the right-hand side wins', 'In a | b, the right side wins', '5 to 17 (title); 8 to 17 (FAQ)', '6 to 18, Grades 1 to 12 (homepage); from 5 (FAQ)', 'Group classes once a week, at the chosen time', 'Desktop or laptop; tablets not suitable', 'Not on the page we read', 'Hours on your clock.'],
    sources: [
      { claim: 'Kodland Spanish site: live tutors, small groups or 1-1, blocks to JavaScript or Python, ages 5 to 17 in the title.', url: 'https://kodland.org/es/' },
      { claim: 'Kodland FAQ: ages 8 to 17; group classes once a week; desktop or laptop, tablets not suitable; electronic certificates.', url: 'https://kodland.org/es/faq/' },
      { claim: 'Codingal: 1:1 live classes; ages 6 to 18 and Grades 1 to 12; FAQ from age 5; any time and any day; laptop with webcam or tablet with keyboard; PTM after the 6th session; AP CS A and IOI courses.', url: 'https://www.codingal.com/' },
      { claim: 'EF EPI 2025: Peru 519, Lima 555 (high).', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'INEI II Trimestre 2026: internet use 92.5% (12 to 18), 68.2% (6 to 11); 36.4% of households with a computer.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any price, rating, review, testimonial or parent-satisfaction figure from either provider: excluded by policy.',
      'Codingal\'s own statistics (e.g. improvement percentages, share of STEM jobs): not repeated; they are the provider\'s claims, not primary data.',
      'Any ranking or statement that one school is better or worse: not made.',
      'Kodland editions in other languages: not reviewed; the page says only kodland.org/es was read.',
      'Spanish-language teaching by us: none; the page says our classes are in English only.'
    ]
  }
};
