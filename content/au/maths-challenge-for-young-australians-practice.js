'use strict';
// Maths Challenge for Young Australians practice (ag- competition door, Australia cluster Phase 3, row 92).
// Facts read raw on 7 October 2026 at the Australian Maths Trust, fetched with curl's default user
// agent: Maths for Young Australians page (three modules; "previously known as the Mathematics
// Challenge for Young Australians (MCYA)"), Maths Challenge page (2026 dates 2 March to 26 June,
// 3 to 4 weeks, years 3 to 10, groups of three primary and two secondary, 4 or 6 problems with worked
// solutions, marking by teachers, scoring 16 and 24 marks, award criteria, key dates) and Maths
// Enrichment page (30 March to 16 October 2026, 12 to 16 weeks, stages with year recommendations,
// scoring). Fees (AUD) are not printed. Spine: a worked-solution marking rubric applied to an original
// problem (3c and 5c stamps); the rubric is ours, not the AMT's marking guide. Family checked free
// site-wide on 7 October 2026; the stamp answer was checked by enumeration in Python.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'MATHS CHALLENGE', label: 'Maths Challenge for Young Australians practice', blurb: 'The Maths Challenge and Maths Enrichment modules from the Australian Maths Trust, and how full written solutions earn marks.' },
  slug: 'maths-challenge-for-young-australians-practice',
  code: 'mcha',
  accent: '#36541B',
  accentRationale: 'Maths Challenge practice: a deep fern green chosen by hand, muted, at least 10 RGB from every accent in content and stylesheets and above 4.8:1 on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Maths Challenge for Young Australians practice',
  title: 'Maths Challenge for Young Australians Practice | Years 3 to 10',
  description: 'Maths Challenge for Young Australians practice: the AMT\'s Maths Challenge and Enrichment modules, 2026 dates, scoring and how written solutions earn the marks.',
  ogDescription: 'The Australian Maths Trust\'s Maths for Young Australians program, formerly the MCYA: Maths Challenge for Years 3 to 10, Maths Enrichment, scoring, and a lesson on writing a full solution.',
  twitterDescription: 'Maths Challenge for Young Australians practice: format, scoring and full written solutions.',
  pageName: 'Maths Challenge for Young Australians Practice',
  webPageDescription: 'A guide for Australian students, parents and teachers to the Australian Maths Trust\'s Maths for Young Australians program, formerly the Mathematics Challenge for Young Australians: the Maths Challenge and Maths Enrichment modules, their 2026 dates, divisions, scoring and awards, and a worked lesson on writing a complete solution against a marking rubric.',
  courseDescription: 'Live online problem-solving classes for Australian students in Years 3 to 10 that teach how to reason through multi-step problems and write complete solutions.',
  crumbs: [{ name: 'Australian competitions calendar', href: '/australian-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Maths Challenge practice',
  navLinks: [
    { href: '#program', label: 'The program' },
    { href: '#challenge', label: 'Maths Challenge' },
    { href: '#solutions', label: 'Writing solutions' },
    { href: '#enrichment', label: 'Enrichment' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Maths for Young Australians &middot; Years 3 to 10',
  h1: 'Maths Challenge for Young Australians practice',
  lede: 'Most maths competitions are an hour in an exam room. The Maths Challenge is different: a few problems, several weeks to work on them, a partner or small group to think with, and written solutions that a teacher marks. That format rewards something many capable students have never been taught, which is how to write a full mathematical argument rather than just an answer. This page explains the Australian Maths Trust\'s program, which used to be called the Mathematics Challenge for Young Australians, sets out the 2026 dates and scoring from the Trust\'s own pages, and works through one original problem to show how a complete solution earns marks that an answer alone does not.',
  secondaryCta: { href: '#solutions', label: 'See how solutions earn marks' },
  wa: 'Hello Modern Age Coders, I would like a free problem-solving class for the Maths Challenge.',
  heroNote: 'Format and scoring from the AMT\'s pages &middot; Rubric and problem are ours &middot; 7 October 2026',
  spec: [
    ['Run by', 'Australian Maths Trust'],
    ['Program name', 'Maths for Young Australians (formerly MCYA)'],
    ['Maths Challenge', 'Years 3 to 10, 3 to 4 weeks'],
    ['2026 window', '2 March to 26 June'],
    ['Problems', '4 primary, 6 secondary, 4 marks each'],
    ['Working', 'In groups of three or two'],
    ['Marked by', 'Teachers, using the AMT guide'],
    ['Next module', 'Maths Enrichment, 12 to 16 weeks']
  ],
  capsuleQ: 'In short',
  capsule: 'Maths for Young Australians is the Australian Maths Trust\'s problem-solving program, previously the Mathematics Challenge for Young Australians. Its Maths Challenge module runs for 3 to 4 weeks for Years 3 to 10, with students working in pairs or small groups on 4 or 6 problems, each worth 4 marks, and writing worked solutions that teachers mark. In 2026 it ran between 2 March and 26 June.',

  picks: {
    eyebrow: 'For the Maths Challenge',
    h2: 'Three courses for problem solvers',
    lede: 'Reasoning for primary students, problem-solving depth for the middle years, and competition training for the keenest.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'MCHA / 01', title: 'Problem solving for primary', note: 'Patterns, systematic lists and explaining an answer, the habits the primary divisions reward.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MCHA / 02', title: 'Middle years maths', note: 'The number, geometry and algebra the Junior and Intermediate problems lean on, with reasoning written out.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'MCHA / 03', title: 'Competition maths', note: 'For students heading towards Maths Enrichment and the olympiad contests.' }
    ]
  },

  sections: [
    {
      id: 'program', tint: 'tint', eyebrow: 'The program',
      h2: 'Three modules under one name',
      lede: 'The Trust describes Maths for Young Australians as a modular program. These details come from its program page, read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'The Maths for Young Australians modules, as the AMT describes them', head: ['Module', 'Who it is for', 'Length'], rows: [
          ['Maths Challenge', 'An introductory module for students in years 3 to 10, working individually or in small groups', '3 to 4 weeks, between March and June'],
          ['Maths Enrichment', 'More advanced students in years 4 to 10', '12 to 16 weeks, flexibly between April and September'],
          ['Australian Intermediate Mathematics Olympiad', 'An open contest, generally for students who have done well in the Challenge or Enrichment', 'A 4-hour contest']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Trust states that "the Maths for Young Australians program was previously known as the Mathematics Challenge for Young Australians (MCYA)". Many parents and teachers still use the old name, which is why both appear on this page.',
            'The modules "can be taken independently of each other or as a progressive course", in the Trust\'s words. A student can do the Challenge alone, or treat it as the first step towards Enrichment and the olympiad.'
          ],
          right: [
            'Schools enter and run the modules. Teachers receive the problem booklets and teacher guides, run the sessions and mark the work. Fees are set in Australian dollars by the Trust, so we do not quote them.',
            'The program also matters for later invitations. The Trust\'s olympiad page says that students need "outstanding results in the Australian Mathematics Competition or one of the three modules under Maths for Young Australians" to be considered for maths training by invitation.'
          ] },
        { kind: 'source', html: 'Sources: Australian Maths Trust, <a class="ag-inline-link" href="https://amt.edu.au/maths-for-young-australians" rel="noopener" target="_blank">Maths for Young Australians</a> and <a class="ag-inline-link" href="https://amt.edu.au/olympiad-programs" rel="noopener" target="_blank">Olympiad and Pathways Programs</a>, read on 7 October 2026. We are independent of the AMT.' }
      ]
    },
    {
      id: 'challenge', tint: 'deep', eyebrow: 'Maths Challenge in detail',
      h2: 'Dates, divisions and scoring for the Maths Challenge',
      lede: 'From the Trust\'s Maths Challenge page, read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Maths Challenge 2026, as published by the AMT', head: ['Detail', 'Primary divisions', 'Secondary divisions'], rows: [
          ['Divisions', 'Middle Primary (Years 3 and 4), Upper Primary (Years 5 and 6)', 'Junior (Years 7 and 8), Intermediate (Years 9 and 10)'],
          ['Problems', '4 problems, worked solutions', '6 problems, worked solutions'],
          ['Marks', '4 problems of 4 marks: 16 marks', '6 problems of 4 marks: 24 marks'],
          ['Working arrangement', 'Groups of three are encouraged', 'Groups of two are encouraged'],
          ['Awards', 'Distinction 14 to 16, Credit 10 to 13, Proficiency 6 to 9', 'High Distinction top 10 per cent, Distinction next 15, Credit next 25']
        ] },
        { kind: 'two', mt: true,
          left: [
            'In 2026 the Challenge ran from Monday 2 March to Friday 26 June, with entries closing on Friday 22 May. The Trust says it is designed to run over 3 to 4 weeks, with around 1 hour of class time and 2 to 3 hours of study time per week. Topics "vary from year to year, based on the national maths curriculum".',
            'Marking is done by teachers, with the Trust\'s detailed marking guide, and results are submitted online; the Trust can mark at extra cost. It notes that "students\' understanding of the problems is enhanced when teachers mark the student submissions and use the materials provided to give feedback."'
          ],
          right: [
            'Every student receives a certificate at some level. In the secondary divisions, cut-off scores are set by comparing students in the same year level and region, so they move from year to year.',
            'The Trust publishes sample problems and sample solutions for each division. They are the clearest place to see what a full solution looks like, and we point students to them rather than reproducing them.'
          ] },
        { kind: 'source', html: 'Source: Australian Maths Trust, <a class="ag-inline-link" href="https://amt.edu.au/challenge" rel="noopener" target="_blank">Maths Challenge</a>, read on 7 October 2026. Dates for 2027 had not been published.' }
      ]
    },
    {
      id: 'solutions', tint: 'tint', eyebrow: 'How solutions earn marks',
      h2: 'A worked solution against a marking rubric',
      lede: 'Each Challenge problem is worth 4 marks, and the work is written, not ticked. The difference between 1 mark and 4 is almost always the explanation. Here is an original problem of ours, a rubric we use in class, and three answers marked against it.',
      body: [
        { kind: 'two',
          leftH3: 'The problem',
          left: [
            'A post office sells only 3c and 5c stamps. Which amounts from 1c to 20c cannot be made exactly, using any number of each stamp? Explain why every amount above your largest impossible one can be made.',
            'The answer is 1, 2, 4 and 7. We checked it by listing every combination; the reasoning a student writes should not depend on a computer, which is where the marks come from.'
          ],
          rightH3: 'A full solution',
          right: [
            'List the amounts systematically: 3, 5, 6 (3 plus 3), 8 (3 plus 5), 9, 10, 11 (6 plus 5). Checking 1 to 10 one by one shows 1, 2, 4 and 7 cannot be made.',
            'Then the key step: 8, 9 and 10 can all be made, and they are three amounts in a row. Adding one more 3c stamp to each gives 11, 12 and 13, then 14, 15 and 16, and so on for ever. So every amount from 8 upwards can be made, and 7 is the largest impossible amount.'
          ] },
        { kind: 'table', mt: true, caption: 'Our marking rubric for this problem (4 marks), and three answers marked against it', head: ['Rubric point', 'Mark', 'Answer A: "1, 2, 4, 7"', 'Answer B: list to 20, no argument', 'Answer C: full solution'], rows: [
          ['Correct list of impossible amounts', '1', 'Yes', 'Yes', 'Yes'],
          ['Systematic check of small amounts shown', '1', 'No', 'Yes', 'Yes'],
          ['Notices three consecutive makeable amounts', '1', 'No', 'No', 'Yes'],
          ['Explains why adding 3c covers every larger amount', '1', 'No', 'No', 'Yes'],
          ['Total', '4', '1 of 4', '2 of 4', '4 of 4']
        ] },
        { kind: 'p', text: 'Answer B is the most common in our classes: correct, careful, and still missing half the marks, because checking up to 20 does not show that 21, 22 or 100 can be made. The marking rubric is ours, written for teaching, and the Trust\'s own marking guide may divide marks differently. The lesson carries across both: in a written challenge, the argument is the answer.' },
        { kind: 'source', html: 'Problem, rubric and marked answers are ours. The impossible amounts 1, 2, 4 and 7 were confirmed by enumeration in Python on 7 October 2026. The AMT\'s marking guide is supplied to teachers and is not reproduced here.' }
      ]
    },
    {
      id: 'enrichment', tint: '', eyebrow: 'The next module',
      h2: 'Maths Enrichment: longer, deeper, by stage',
      lede: 'Students who enjoy the Challenge often move on to Enrichment, a longer extension course with its own stages.',
      body: [
        { kind: 'table', caption: 'Maths Enrichment 2026 stages and the AMT\'s general year recommendations', head: ['Stage', 'General recommendation', 'Scoring'], rows: [
          ['Ramanujan', 'Australian Years 4 and 5', '8 problems of 4 marks, 32 marks'],
          ['Newton', 'Australian Years 5 and 6', '8 problems of 4 marks, 32 marks'],
          ['Dirichlet', 'Australian Years 6 and 7', '8 problems of 4 marks, 32 marks'],
          ['Euler', 'Australian Years 7 and 8', '10 problems of 4 marks, 40 marks'],
          ['Gauss', 'Australian Years 8 and 9', '10 problems of 4 marks, 40 marks'],
          ['Noether', 'Capable or very capable Years 9 and 10', 'Not listed with the others on the page read'],
          ['Pólya', 'Top 10 per cent of Year 10', 'Not listed with the others on the page read']
        ] },
        { kind: 'two', mt: true,
          left: [
            'In 2026 Enrichment ran from Monday 30 March to Friday 16 October, with entries closing on Friday 24 July. The Trust says it is designed to run over 12 to 16 weeks, with around 1 hour of class time and 2 to 3 hours of individual study time per week, and that its material "develops mathematical concepts not covered by the standard curriculum".',
            'The Trust notes that stages "are not limited to school years", so a strong Year 5 student might begin at a higher stage. Schools decide placements.'
          ],
          right: [
            'Each student receives a Student Notes book with a structured extension course and a Student Problems booklet. The later stages include topics such as modular arithmetic, Diophantine equations, methods of proof, functional equations and graph theory.',
            'Our competition maths classes prepare students for the kind of thinking Enrichment expects, through our own problems. We do not work on the Trust\'s booklet problems with students during the module; that work belongs to the student and their school.'
          ] },
        { kind: 'source', html: 'Source: Australian Maths Trust, <a class="ag-inline-link" href="https://amt.edu.au/enrichment" rel="noopener" target="_blank">Maths Enrichment</a>, read on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From answers to arguments',
    h2: 'Four steps to a full written solution',
    lede: 'Most students can find answers long before they can explain them. These steps close that gap.',
    table: { caption: 'Writing mathematics, step by step', head: ['Step', 'What the student does', 'The sign it is secure'], rows: [
      ['1. Show the search', 'Writes the cases tried, not just the result', 'A reader can follow how the answer was found'],
      ['2. Spot the structure', 'Looks for a pattern behind the cases', 'Names the pattern in a sentence'],
      ['3. Argue for all cases', 'Explains why the pattern always holds', 'The argument works beyond the cases listed'],
      ['4. Check and tidy', 'Reads the solution as a stranger would', 'No step relies on something unwritten']
    ] },
    left: { h3: 'If writing explanations is a struggle', ps: [
      'Talking the solution through out loud first, then writing what was said, helps most students.',
      'Working with a partner, as the Challenge encourages, makes explaining natural.'
    ] },
    right: { h3: 'Related reading', ps: [
      'Our <a class="ag-inline-link" href="/australian-mathematics-competition-practice-by-year">AMC by year page</a> covers the Trust\'s timed competition.',
      'The <a class="ag-inline-link" href="/apsmo-maths-olympiad-practice">APSMO Maths Olympiad page</a> covers another schools contest.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Australian problem solvers',
    lede: 'Grouped by stage. Each card opens a full outline.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'Years 3 to 6', courses: [
        { code: 'MCHA / P / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Patterns and careful lists.' },
        { code: 'MCHA / P / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Every strand, reasoning aloud.' },
        { code: 'MCHA / P / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for confident working.' }
      ] },
      { num: 'II', h3: 'Middle years', sub: 'Years 7 to 10', courses: [
        { code: 'MCHA / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Number, geometry and algebra.' },
        { code: 'MCHA / M / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Expressions and equations, understood.' },
        { code: 'MCHA / M / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and chance.' }
      ] },
      { num: 'III', h3: 'Extension', sub: 'Towards Enrichment and olympiads', courses: [
        { code: 'MCHA / X / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Proof and problem solving.' },
        { code: 'MCHA / X / 02', slug: 'complete-high-school-mathematics-mastery', title: 'Senior-ready maths', blurb: 'Algebra and geometry for older students.' },
        { code: 'MCHA / X / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Testing conjectures with Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Small-group problem solving, live',
    lede: 'Our teachers are in India, which is behind every Australian state. A 4 pm lesson in Brisbane starts at 11.30 am India time throughout the year, since Queensland does not change its clocks.',
    slots: [
      { time: 'Terms 1 and 2', l: 'Ahead of and alongside the Challenge window.' },
      { time: 'Weekly sessions', l: 'One rich problem, written up properly.' },
      { time: 'Holiday workshops', l: 'A few days on writing proofs.' }
    ],
    cells: [
      { h3: 'Pairs and threes', p: 'Students solve together, as the Challenge encourages.' },
      { h3: 'Write, then mark', p: 'Every solution is marked against a rubric.' },
      { h3: 'Groups of five to ten', p: 'Placed by problem-solving level.' },
      { h3: 'One-to-one option', p: 'For students aiming at Enrichment stages.' },
      { h3: 'Short parent notes', p: 'One idea learned and a problem to discuss at home.' },
      { h3: 'School work stays theirs', p: 'We never work on live Challenge problems with students.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Work our learners chose to make, apart from any competition. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' words, quoted from Google exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Families in Australia pay monthly in US dollars, our usual rate for every country outside India. No deposit, and you can stop at any month end. The Trust\'s modules are entered and paid for by schools.',
    free: ['A real lesson with a teacher', 'An honest view of problem-solving level', 'No card details'],
    group: ['Five to ten students at one level', 'The same teacher every week', 'Solutions marked and discussed', 'A certificate at the end'],
    one: ['A teacher for one student', 'Focused on written solutions', 'A weekly time that suits you']
  },

  faq: {
    eyebrow: 'Questions about the Maths Challenge',
    h2: 'What Australian families ask',
    items: [
      { q: 'What is the Maths Challenge for Young Australians?', a: 'It is the old name for the Australian Maths Trust\'s Maths for Young Australians program. Its Maths Challenge module gives students in Years 3 to 10 a few problems to solve over 3 to 4 weeks, with written solutions marked by teachers.' },
      { q: 'How many problems are in the Maths Challenge?', a: 'Four in the primary divisions and six in the secondary divisions, each worth 4 marks, for totals of 16 and 24 marks.' },
      { q: 'Do students work alone?', a: 'The Trust encourages groups of three in primary divisions and groups of two in secondary divisions, although students can also work individually.' },
      { q: 'When does the Maths Challenge run?', a: 'In 2026 it ran between Monday 2 March and Friday 26 June, with entries closing on Friday 22 May. Check the Trust\'s page for the next year.' },
      { q: 'Who marks the Maths Challenge?', a: 'Teachers, using the Trust\'s marking guide, then results are submitted online. The Trust can mark submissions at an extra cost.' },
      { q: 'What is a marking rubric?', a: 'A list of the points a full solution must contain, with marks for each. Ours shows why a correct answer without an argument earns only part of the marks.' },
      { q: 'What is Maths Enrichment?', a: 'A longer module of 12 to 16 weeks for more advanced students, in stages from Ramanujan, recommended for Years 4 and 5, to Pólya, for the top 10 per cent of Year 10.' },
      { q: 'Can you help my child with their Challenge problems?', a: 'Not with the live problems: they are the student\'s own work. We teach problem solving and written argument with our own problems, before and around the module.' },
      { q: 'How do students enter?', a: 'Schools enter and run the modules. Ask your child\'s maths teacher or coordinator.' },
      { q: 'Are you connected with the AMT?', a: 'No. We are an independent online school; the details here come from the Trust\'s pages.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More maths challenges in Australia',
    lede: 'The Trust\'s other competitions and our competition maths pages.',
    items: [
      { href: '/australian-mathematics-competition-practice-by-year', label: 'AMC practice by year', p: 'The Trust\'s timed competition.' },
      { href: '/apsmo-maths-olympiad-practice', label: 'APSMO Maths Olympiad', p: 'Five-question contests for Years 5 to 8.' },
      { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMC, AIO and CAT', p: 'Three Trust contests compared.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Every contest through the year.' },
      { href: '/maths-challenges', label: 'Maths challenges', p: 'Puzzles to try at home.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia', p: 'Our main Australian maths page.' }
    ]
  },

  start: {
    h2: 'Book a free problem-solving class',
    lede: 'Tell us the year level and whether the Maths Challenge or Enrichment is coming up. The free class works a problem through to a full written solution and ends with honest advice.',
    readFirst: 'Rather read first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> has every course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson.',
    note: 'WhatsApp is usually quickest. Our number uses India\'s +91 code, because the school is run from India and has no Australian office.',
    formNote: 'Free, no card, no obligation. We reply once to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/australian-mathematics-competition-practice-by-year', label: 'AMC by year' },
        { href: '/apsmo-maths-olympiad-practice', label: 'APSMO Maths Olympiad' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' },
        { href: '/maths-challenges', label: 'Maths challenges' }
      ] }
    ],
    bottomRight: 'Independent of the AMT; live Challenge problems stay the student\'s own'
  },

  personalityCss: `
.ag-root.ag-mcha .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-mcha .ag-capsule { border-left-width: 5px; }
.ag-root.ag-mcha .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-mcha .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-mcha .ag-grid-2 h3 { letter-spacing: -0.006em; }
.ag-root.ag-mcha .ag-spec dt { letter-spacing: 0.07em; }
`,

  dossier: {
    curriculumAuthority: 'Australian Maths Trust pages read 7 October 2026 with curl\'s default user agent. Maths for Young Australians: three modules; Maths Challenge years 3-10 introductory; Maths Enrichment years 4-10, 12-16 weeks April to September; Australian Intermediate Mathematics Olympiad 4-hour open contest; "The Maths for Young Australians program was previously known as the Mathematics Challenge for Young Australians (MCYA)."; modules "can be taken independently of each other or as a progressive course". Maths Challenge: Monday 2 March to Friday 26 June 2026; 3-4 weeks; "designed to be run over 3 - 4 weeks, with around 1 hour of class time and around 2-3 hours of study time per week"; groups of three (primary), two (secondary); entries close Friday 22 May 2026; divisions Middle Primary, Upper Primary, Junior, Intermediate; topics "vary from year to year, based on the national maths curriculum"; primary 4 problems, secondary 6 problems, worked solutions; teacher marking, AMT marking at extra cost; scoring 16 and 24 marks; awards primary Distinction 14-16, Credit 10-13, Proficiency 6-9; secondary High Distinction top 10%, Distinction next 15%, Credit next 25%. Maths Enrichment: Monday 30 March to Friday 16 October 2026; entries close Friday 24 July 2026; stages Ramanujan (Years 4-5), Newton (5-6), Dirichlet (6-7), Euler (7-8), Gauss (8-9), Noether (capable or very capable Years 9-10), Pólya (top 10% Year 10); Ramanujan, Newton, Dirichlet 8 problems of 4 marks (32); Euler, Gauss 10 problems of 4 marks (40); "develops mathematical concepts not covered by the standard curriculum". Olympiad Programs: invitations need "outstanding results in the Australian Mathematics Competition or one of the three modules under Maths for Young Australians".',
    localProject: 'Original problem: with only 3c and 5c stamps, the amounts from 1c to 20c that cannot be made are 1, 2, 4 and 7 (checked by enumeration in Python); 8, 9 and 10 are consecutive and makeable, so adding 3c covers every larger amount. Our 4-mark marking rubric scores an answer-only response 1 of 4, a list without argument 2 of 4, a full solution 4 of 4.',
    requiredMentions: ['Maths for Young Australians', 'Mathematics Challenge for Young Australians', 'Maths Enrichment', 'groups of three', '16 marks', '24 marks', '3c and 5c', '1, 2, 4 and 7', 'marking rubric'],
    sources: [
      { claim: 'AMT Maths for Young Australians page: modules, former MCYA name, progression.', url: 'https://amt.edu.au/maths-for-young-australians' },
      { claim: 'AMT Maths Challenge page: 2026 dates, format, groups, scoring, awards, marking.', url: 'https://amt.edu.au/challenge' },
      { claim: 'AMT Maths Enrichment page: 2026 dates, stages, year recommendations, scoring, materials.', url: 'https://amt.edu.au/enrichment' },
      { claim: 'AMT Olympiad and Pathways Programs: invitations after outstanding AMC or Maths for Young Australians results.', url: 'https://amt.edu.au/olympiad-programs' }
    ],
    rejectedClaims: [
      'Module fees: AUD, not printed (one-currency rule).',
      'The AMT\'s own marking guide or its mark allocations: not available to us and not reproduced; our rubric is labelled as ours.',
      'Scoring for the Noether and Pólya stages: not listed with the others on the page read, so not stated.',
      '2027 dates: not published when checked.',
      'Any help with live Challenge or Enrichment problems: refused; that work is the student\'s own.'
    ]
  }
};
