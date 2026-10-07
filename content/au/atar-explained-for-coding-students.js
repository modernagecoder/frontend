'use strict';
// ATAR explained for coding students (ag- door, Australia cluster Phase 3, row 84).
// Facts read raw on 7 October 2026 from the admissions centres: UAC (ATAR overview and "how your ATAR
// is calculated"), VTAC (ATAR page), QTAC (ATAR page), TISC (about the ATAR) and SATAC (ATAR page).
// UAC: ATAR 0.00 to 99.95 in increments of 0.05, no ATAR of 100; a rank against all 16 to 20-year-olds
// in NSW; 80.00 means 20 per cent from the top; average usually around 70.00; 0.00 to 30.00 shown as
// '30 or less'; NSW aggregate of scaled marks in 10 units: 2 units of English (even if lowest) plus 8
// more units; at least four subject areas for eligibility; scaling principle (neither advantaged nor
// disadvantaged); scaled mark lower than HSC mark for most courses; scaled marks not reported; over
// 25,000 patterns of study; up to 4 units of calculus-based maths; five-year rolling period; Technical
// Committee on Scaling. VTAC: Victorian ATARs released in December; 2026 results service from 7am
// Thursday 10 December 2026 (AET). QTAC: ATAR replaced the OP for Queensland from 2020 and is calculated
// by QTAC. TISC: TEA from four scaled scores plus 10% of LOTE, Methods ATAR and Specialist ATAR scaled
// scores. SATAC: calculates the ATAR for SACE and NTCET students from a university aggregate of 90
// credits. Spine: selecting units for an aggregate under a compulsory-English constraint (illustration
// with invented numbers, not UAC's scale). No ATAR, scaling or entry promises anywhere on the page.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'ATAR EXPLAINED', label: 'The ATAR explained for coding students', blurb: 'How the Australian Tertiary Admission Rank works, state by state, from the admissions centres themselves, and what it does and does not mean for students who love computing.' },
  slug: 'atar-explained-for-coding-students',
  code: 'atrx',
  accent: '#605796',
  accentRationale: 'ATAR explained: a muted slate violet-blue at hue 248, contrast above 4.9:1 on #EDE7DA, at least 13 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'The ATAR explained',
  title: 'ATAR Explained for Coding Students | How the Rank Works',
  description: 'The ATAR explained for students who love coding: a rank not a mark, how NSW counts 10 units, how other states differ, and what scaling does, from the sources.',
  ogDescription: 'What the Australian Tertiary Admission Rank is, how UAC builds it in NSW from 10 units, how VTAC, QTAC, TISC and SATAC handle it, what scaling means, and why no tutor can honestly promise you a number.',
  twitterDescription: 'The ATAR in plain words, from the admissions centres: a rank, not a mark, and no promises.',
  pageName: 'The ATAR Explained for Coding Students',
  webPageDescription: 'A plain explanation of the ATAR for Australian students interested in computing: what the rank means, how UAC aggregates scaled marks in NSW, how other states calculate it, scaling principles, and an illustration of unit selection, with no promises about ranks.',
  courseDescription: 'Live online coding and mathematics classes for Australian secondary students, taught for understanding, with no promises about ATAR outcomes.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'The ATAR explained',
  navLinks: [
    { href: '#rank', label: 'A rank, not a mark' },
    { href: '#nsw', label: 'How NSW counts it' },
    { href: '#units', label: 'Choosing units' },
    { href: '#states', label: 'Other states' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Tertiary admission &middot; Explained from the sources',
  h1: 'The ATAR explained',
  lede: 'Every Year 12 student who loves coding eventually asks the same thing: will my computing subject help or hurt my ATAR? The honest answer starts with understanding what the ATAR actually is. This page explains it using only what the admissions centres publish, and it makes no predictions, because nobody can honestly predict a rank.',
  secondaryCta: { href: '#units', label: 'See how units are chosen' },
  wa: 'Hello Modern Age Coders, I have a question about coding classes for a Year 11 or 12 student in Australia.',
  heroNote: 'Every fact from an admissions centre &middot; No rank predictions &middot; For students and parents',
  spec: [
    ['Full name', 'Australian Tertiary Admission Rank'],
    ['Range', '0.00 to 99.95, in steps of 0.05'],
    ['What it is', 'A rank, not a mark'],
    ['NSW calculator', 'UAC, from 10 units'],
    ['Victoria', 'Released through VTAC'],
    ['Queensland', 'Calculated by QTAC since 2020'],
    ['We explain', 'How the rank is built'],
    ['We never', 'Predict or promise a rank']
  ],
  capsuleQ: 'In short',
  capsule: 'The ATAR is a rank between 0.00 and 99.95 that shows where a student sits relative to their age group, used by universities to select applicants. It is built from scaled marks, not raw marks. In NSW, UAC calculates it from 10 units: 2 units of English plus 8 more units. Each state has its own admissions centre and rules, and no one can honestly guarantee a rank.',

  picks: {
    eyebrow: 'For students who love computing',
    h2: 'Three courses that build depth, not just marks',
    lede: 'Strong programming, strong mathematics, and real projects to show for both.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'ATRX / 01', title: 'Python, properly', note: 'From first program to classes and files, the language most senior computing courses in Australia use.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'ATRX / 02', title: 'Senior mathematics', note: 'Functions, trigonometry and calculus, because computing students lean on maths in every later course.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'ATRX / 03', title: 'Problem solving', note: 'Algorithms and data structures, the thinking that separates good programmers in any course or exam.' }
    ]
  },

  sections: [
    {
      id: 'rank', tint: 'tint', eyebrow: 'The basics',
      h2: 'A rank, not a mark',
      lede: 'UAC, which calculates the ATAR in NSW, explains the idea plainly. The points below are UAC\'s, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'What UAC says the ATAR is', head: ['Question', 'UAC\'s answer'], rows: [
          ['What range does it cover?', '0.00 to 99.95, in increments of 0.05; there is no ATAR of 100'],
          ['Who is a student ranked against?', 'All students in their age group, all 16 to 20-year-olds in NSW, not just their Year 12 group'],
          ['What does 80.00 mean?', 'About 20 per cent from the top of that age group'],
          ['What is a typical ATAR?', 'The average is usually around 70.00'],
          ['What about low results?', 'ATARs from 0.00 to 30.00 are shown as "30 or less"'],
          ['What is it for?', 'Helping universities select applicants; most also use other criteria']
        ] },
        { kind: 'two', mt: true,
          left: [
            'UAC compares the difference between HSC marks and the ATAR to a running race: the HSC mark is your time, which is not compared with anyone else\'s, and the ATAR is your place in the field. That analogy is worth remembering, because it explains why a student\'s marks and rank can tell different stories.',
            'The average sitting near 70.00 rather than 50.00 surprises many families. UAC explains it: if every school student received an ATAR the average would be 50.00, but some students leave school early, and those who stay on to receive an ATAR are a smaller, more academically able group.'
          ],
          right: [
            'UAC also notes that NSW and ACT ATARs are equivalent to those in other states, so an ATAR of 85.00 in NSW means the same as 85.00 elsewhere. The rank is national in meaning, even though each state calculates its own.',
            'Universities usually admit on a selection rank, which UAC describes as the ATAR plus any applicable adjustments, and many consider other things, such as a portfolio, an interview or a test. For computing courses that can make a portfolio of real projects genuinely useful, but that is a university\'s call, not ours.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.uac.edu.au/future-applicants/atar" rel="noopener" target="_blank">UAC, ATAR: Australian Tertiary Admission Rank</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'nsw', tint: 'deep', eyebrow: 'How NSW counts it',
      h2: 'Ten units of scaled marks',
      lede: 'UAC\'s page on how the ATAR is calculated sets out the NSW rules. The summary below follows it, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'The NSW ATAR calculation, from UAC', head: ['Rule', 'What UAC states'], rows: [
          ['The aggregate', 'Scaled marks in 10 units of HSC courses'],
          ['English', '2 units of English must be included, even if they are a student\'s lowest units'],
          ['The rest', '8 more units from the remaining courses'],
          ['Eligibility', 'At least four subject areas must be satisfactorily completed'],
          ['Calculus-based maths', 'Up to 4 units can be included in the calculation'],
          ['Time period', 'Courses can be accumulated over a rolling period of up to five years'],
          ['Who calculates', 'The Technical Committee on Scaling, on behalf of the NSW Vice-Chancellors\' Committee']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Scaling is the part students worry about most. UAC states its underlying principle directly: you should be "neither advantaged nor disadvantaged by choosing one pattern of study over another". The scaling algorithm estimates what marks would have been if every course had been taken by every student.',
            'UAC adds two points that are easy to miss. For most courses, a student\'s scaled mark will be lower than their HSC mark. And scaled marks are not reported to students at all, which is why guessing an ATAR from HSC marks is unreliable.'
          ],
          right: [
            'With over 25,000 different patterns of study completed by ATAR students, according to UAC, it is not surprising that a rank in one course does not mean the same as a rank in another. Scaling exists to make those different patterns comparable.',
            'For coding students the practical lesson is simple. Software Engineering and Enterprise Computing count like any other course: their contribution depends on the student\'s own results and on scaling, which nobody can know in advance. Choose computing because you want to learn it, and work hard at it.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.uac.edu.au/future-applicants/atar/how-your-atar-is-calculated" rel="noopener" target="_blank">UAC, how your ATAR is calculated</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'units', tint: 'tint', eyebrow: 'An illustration',
      h2: 'Choosing 10 units under a compulsory-English rule',
      lede: 'This is an illustration of the selection idea only, with invented numbers. It is not UAC\'s scale, it does not reproduce scaling, and it predicts nothing about any real student.',
      body: [
        { kind: 'p', text: 'Imagine a student with six two-unit courses and an invented "scaled value per unit" for each. The rule from UAC is that 2 units of English are always included, then 8 more units are taken from the rest, highest first. Here is how a program would pick them.' },
        { kind: 'table', caption: 'Invented per-unit values for six two-unit courses', head: ['Course', 'Units', 'Invented value per unit', 'Included?'], rows: [
          ['English Standard', '2', '30', 'Yes: English is compulsory'],
          ['Mathematics Advanced', '2', '40', 'Yes'],
          ['Physics', '2', '39', 'Yes'],
          ['Software Engineering', '2', '38', 'Yes'],
          ['Modern History', '2', '35', 'Yes'],
          ['Business Studies', '2', '33', 'No: the 8 units are already filled']
        ] },
        { kind: 'two', mt: true,
          left: [
            'English goes in first, even though its invented value of 30 is the lowest on the list. Then the remaining courses are sorted from highest to lowest value, and courses are taken until 8 more units are filled: Mathematics Advanced, Physics, Software Engineering and Modern History. Business Studies misses out.',
            'Adding up the invented values gives 2 times 30, plus 2 times (40 + 39 + 38 + 35), which is 60 plus 304, or 364 invented points. The number means nothing in the real world. The point is the shape of the rule: one compulsory block, then the highest of the rest.'
          ],
          right: [
            'This is a nice small programming exercise in its own right: sort a list, honour a constraint, stop at a limit. Students who code can write it in a few lines of Python and then add UAC\'s other rule, the cap of 4 units on calculus-based mathematics, to see how a constraint changes a selection.',
            'What the illustration cannot do is tell a student their ATAR. Real scaled marks depend on everyone else\'s results in every course that year, which is why we never offer predictions, and why families should be wary of anyone who does.'
          ] }
      ]
    },
    {
      id: 'states', tint: '', eyebrow: 'Beyond NSW',
      h2: 'Each state has its own admissions centre',
      lede: 'The ATAR means the same thing across the country, but it is calculated by different bodies with different rules. The lines below come from each admissions centre\'s own page, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Who calculates the ATAR, by state', head: ['State or territory', 'Admissions centre', 'What its page says'], rows: [
          ['New South Wales', 'UAC', 'Calculates and releases the NSW ATAR'],
          ['Australian Capital Territory', 'BSSS, in consultation with UAC', 'Calculated by the ACT Board of Senior Secondary Studies and released by schools'],
          ['Victoria', 'VTAC', 'Victorian Year 12 students receive an ATAR through VTAC in December; for 2026 the results service opens at 7am on Thursday 10 December 2026'],
          ['Queensland', 'QTAC', 'The ATAR replaced the Overall Position (OP) from 2020, and QTAC calculates the Queensland ATAR'],
          ['Western Australia', 'TISC', 'The ATAR comes from a Tertiary Entrance Aggregate built on four scaled scores, plus 10% of any Mathematics: Methods ATAR, Mathematics: Specialist ATAR and LOTE scaled scores'],
          ['South Australia and Northern Territory', 'SATAC', 'Calculates the ATAR for SACE and NTCET students from a university aggregate of 90 credits']
        ] },
        { kind: 'p', text: 'The Western Australian rule is worth noticing for students who like mathematics: TISC adds 10% of the scaled score in Mathematics: Methods ATAR and in Mathematics: Specialist ATAR to the aggregate, where a student has them. That is TISC\'s published rule, not advice to take those courses.' },
        { kind: 'p', text: 'For the details that matter in any one state, go to that state\'s admissions centre. Rules change, and their pages are the authority. For NSW mathematics specifically, our pages on <a class="ag-inline-link" href="/hsc-maths-extension-1-tutoring">Extension 1</a> and <a class="ag-inline-link" href="/hsc-maths-extension-2-tutoring">Extension 2</a> explain how UAC treats those courses.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.vtac.edu.au/atar" rel="noopener" target="_blank">VTAC, ATAR</a>; <a class="ag-inline-link" href="https://www.qtac.edu.au/atar/" rel="noopener" target="_blank">QTAC, ATAR</a>; <a class="ag-inline-link" href="https://www.tisc.edu.au/static/guide/atar-about.tisc" rel="noopener" target="_blank">TISC, about the ATAR</a>; <a class="ag-inline-link" href="https://www.satac.edu.au/atar" rel="noopener" target="_blank">SATAC, ATAR</a>; UAC for NSW and the ACT. Checked on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'What actually helps',
    h2: 'Four things within a student\'s control',
    lede: 'None of these predicts a rank. They are simply the parts of senior school a student can influence.',
    table: { caption: 'Habits that matter in Years 11 and 12', head: ['Habit', 'Why it matters', 'What it looks like'], rows: [
      ['Understanding over memorising', 'Exams reward explanation', 'Explaining each method in a sentence'],
      ['Steady work in Year 11', 'Year 11 is assumed knowledge in Year 12', 'Fixing gaps the term they appear'],
      ['Timed practice', 'Exams are timed', 'Papers done against a minutes-per-mark budget'],
      ['Real projects', 'Some courses consider more than the ATAR', 'Personal work, never school assessment']
    ] },
    left: { h3: 'If the ATAR feels overwhelming', ps: [
      'It helps to remember what UAC says the ATAR is for: helping universities select applicants. It is one number used for one purpose, and many universities consider other criteria too.',
      'Talk to the school\'s careers adviser about specific course requirements; they know the local options far better than any tutor.'
    ] },
    right: { h3: 'For computing students', ps: [
      'Choosing subjects is covered on our page on <a class="ag-inline-link" href="/choosing-year-11-computing-subjects-australia">choosing Year 11 computing subjects</a>.',
      'For the NSW computing courses themselves, see <a class="ag-inline-link" href="/hsc-software-engineering-help">Software Engineering</a> and <a class="ag-inline-link" href="/hsc-enterprise-computing-help">Enterprise Computing</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for senior computing students',
    lede: 'Programming, mathematics and projects. Each card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Programming', sub: 'The core skill', courses: [
        { code: 'ATRX / C / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The working language of senior computing in Australia.' },
        { code: 'ATRX / C / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented programming in a strongly typed language.' },
        { code: 'ATRX / C / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Algorithms and data structures, reasoned carefully.' }
      ] },
      { num: 'II', h3: 'Mathematics', sub: 'The partner subject', courses: [
        { code: 'ATRX / M / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Functions to calculus, for any state\'s senior course.' },
        { code: 'ATRX / M / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The data side of senior mathematics.' },
        { code: 'ATRX / M / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Mathematical ideas explored in Python.' }
      ] },
      { num: 'III', h3: 'Projects', sub: 'Work worth showing', courses: [
        { code: 'ATRX / P / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'A complete web application, built step by step.' },
        { code: 'ATRX / P / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Building and testing models in Python.' },
        { code: 'ATRX / P / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Version control for every project.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons, plainly',
    h2: 'Weekly classes across Australian time zones',
    lede: 'Our tutors are in India. Eastern states on daylight saving run five and a half hours ahead of India time in summer; Western Australia, on AWST all year, is two and a half hours ahead. That puts Australian after-school hours in the Indian late morning or afternoon, which suits our teaching day.',
    slots: [
      { time: 'Weekday afternoons', l: 'A regular weekly lesson after school.' },
      { time: 'Weekend mornings', l: 'Longer project or practice sessions.' },
      { time: 'Holiday weeks', l: 'Intensive blocks before major exams.' }
    ],
    cells: [
      { h3: 'Understanding first', p: 'We teach why things work, which is what lasts beyond any exam.' },
      { h3: 'Honest advice', p: 'We say what we know and point to the admissions centres for the rest.' },
      { h3: 'Projects of your own', p: 'Personal builds that show what a student can do.' },
      { h3: 'Groups of five to ten', p: 'Students at one level, each explaining their work aloud.' },
      { h3: 'One-to-one too', p: 'A private tutor for a specific subject or skill.' },
      { h3: 'No predictions', p: 'We never forecast or promise an ATAR. The result belongs to the student.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Personal work, never school assessment. Browse the rest in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews copied exactly from Google, as families wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly price in US dollars for every family outside India. There is no fee to join, and you pay only for the month in progress.',
    free: ['A real class on a real topic', 'An honest conversation about goals', 'No card asked for'],
    group: ['Five to ten students at one level', 'The same tutor each week', 'Work reviewed and discussed', 'A certificate at the end'],
    one: ['A tutor for one student', 'Focused where help is needed', 'Flexible weekly times']
  },

  faq: {
    eyebrow: 'Questions about the ATAR',
    h2: 'What families ask us about the ATAR',
    items: [
      { q: 'What is the ATAR?', a: 'The Australian Tertiary Admission Rank: a number between 0.00 and 99.95, in steps of 0.05, that shows a student\'s position relative to their age group. Universities use it to help select applicants. It is a rank, not a mark.' },
      { q: 'What does an ATAR of 80 mean?', a: 'UAC explains that an ATAR of 80.00 means a student is about 20 per cent from the top of their age group, which in NSW is all 16 to 20-year-olds, not just Year 12 students.' },
      { q: 'How is the ATAR calculated in NSW?', a: 'UAC builds it from scaled marks in 10 units of HSC courses: 2 units of English, included even if they are the lowest, plus 8 more units from the remaining courses. A student must complete at least four subject areas to be eligible.' },
      { q: 'What is scaling?', a: 'An adjustment that lets marks in different courses be compared fairly. UAC says the principle is that a student should be neither advantaged nor disadvantaged by their choice of courses. For most courses, the scaled mark is lower than the HSC mark.' },
      { q: 'Does taking Software Engineering hurt my ATAR?', a: 'No course is designed to help or hurt you; that is the stated principle of scaling. A course\'s contribution depends on your own results and on scaling, which cannot be known in advance.' },
      { q: 'Can you predict my ATAR?', a: 'No. Real scaled marks depend on every student\'s results in every course that year, and scaled marks are not even reported to students. Anyone offering a firm prediction is guessing.' },
      { q: 'Is the ATAR the same in every state?', a: 'It means the same thing everywhere, but each state calculates it: UAC in NSW, BSSS in the ACT with UAC, VTAC in Victoria, QTAC in Queensland, TISC in Western Australia and SATAC for SACE and NTCET students.' },
      { q: 'When do Victorian students get their ATAR?', a: 'VTAC says current Victorian Year 12 students receive an ATAR through VTAC in December. For 2026, the results and ATAR service opens at 7am on Thursday 10 December 2026.' },
      { q: 'Do universities only look at the ATAR?', a: 'UAC notes that most admission is based on a selection rank, the ATAR plus any applicable adjustments, and that many universities also use other criteria such as portfolios, interviews or tests.' },
      { q: 'Do you give subject-choice advice for the ATAR?', a: 'No. We explain how the rank works from the admissions centres\' own pages. Subject choices belong with the student, the family and the school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for senior students',
    lede: 'Subject choice, NSW mathematics and computing, and the admissions centres.',
    items: [
      { href: '/choosing-year-11-computing-subjects-australia', label: 'Choosing computing subjects', p: 'What each state offers in Years 11 and 12.' },
      { href: '/hsc-maths-extension-1-tutoring', label: 'HSC Maths Extension 1', p: 'How UAC counts the extension course.' },
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering', p: 'The NSW programming course.' },
      { href: '/year-12-maths-holiday-revision-australia', label: 'Year 12 holiday revision', p: 'Using the term breaks well.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'All our Australian pages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'The method behind every class.' }
    ]
  },

  start: {
    h2: 'Talk to us about a free class',
    lede: 'Tell us the state, the year level and the subjects. We will suggest a free class in coding or mathematics, and we will not pretend to know anyone\'s ATAR.',
    readFirst: 'Reading first? Every course outline is on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, our teaching method is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the official word on the ATAR is always with your state\'s admissions centre.',
    note: 'WhatsApp is quickest. Our number starts +91 because we teach from India; we have no Australian office.',
    formNote: 'No card and no obligation. We reply once.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/coding-classes-cost-australia', label: 'Class costs' }
      ] },
      { h4: 'Senior years', links: [
        { href: '/choosing-year-11-computing-subjects-australia', label: 'Choosing computing subjects' },
        { href: '/hsc-software-engineering-help', label: 'Software Engineering' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'A rank, not a mark, and never a promise'
  },

  personalityCss: `
.ag-root.ag-atrx .ag-hero-grid { gap: clamp(1.1rem, 2.7vw, 2.35rem); }
.ag-root.ag-atrx .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-atrx .ag-capsule { border-left-width: 5px; }
.ag-root.ag-atrx .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-atrx .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-atrx .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-atrx .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-atrx .ag-slots { gap: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Tertiary admissions centres, read raw on 7 October 2026: UAC (ATAR overview; how your ATAR is calculated), VTAC (ATAR page; 2026 results service 7am Thursday 10 December 2026), QTAC (ATAR replaced the OP from 2020), TISC (TEA from four scaled scores plus 10% bonuses for LOTE, Methods ATAR and Specialist ATAR), SATAC (ATAR for SACE and NTCET students from a university aggregate of 90 credits). No curriculum authority applies; this page explains admission ranks only.',
    localProject: 'Selecting units for an aggregate under a compulsory-English rule, with invented per-unit values: English 30 included first; then 8 units taken highest first (40, 39, 38, 35), Business 33 excluded; invented total 60 + 304 = 364. Labelled as an illustration, not UAC\'s scale; no prediction of any real ATAR.',
    requiredMentions: ['0.00 to 99.95', 'there is no ATAR of 100', '30 or less', 'neither advantaged nor disadvantaged', 'over 25,000 different patterns of study', 'Technical Committee on Scaling', 'Thursday 10 December 2026', 'Tertiary Entrance Aggregate', '364 invented points'],
    sources: [
      { claim: 'UAC, ATAR: range, rank against age group, 80.00 meaning, average around 70.00, 30 or less, increments of 0.05, no ATAR of 100, running-race analogy, equivalence across states.', url: 'https://www.uac.edu.au/future-applicants/atar' },
      { claim: 'UAC, how your ATAR is calculated: 10 units with 2 units of English, eligibility, scaling principle, scaled marks lower and not reported, 25,000 patterns, calculus cap, five-year rolling period, Technical Committee on Scaling.', url: 'https://www.uac.edu.au/future-applicants/atar/how-your-atar-is-calculated' },
      { claim: 'VTAC, ATAR: Victorian ATAR released in December; 2026 results and ATAR service from 7am Thursday 10 December 2026.', url: 'https://www.vtac.edu.au/atar' },
      { claim: 'QTAC, ATAR: replaced the OP from 2020; QTAC calculates the Queensland ATAR.', url: 'https://www.qtac.edu.au/atar/' },
      { claim: 'TISC, about the ATAR: Tertiary Entrance Aggregate rules.', url: 'https://www.tisc.edu.au/static/guide/atar-about.tisc' },
      { claim: 'SATAC, ATAR: calculated for SACE and NTCET students from a university aggregate of 90 credits.', url: 'https://www.satac.edu.au/atar' }
    ],
    rejectedClaims: [
      'Any scaled mean or scaling report figure for any course: not quoted.',
      'Any ATAR prediction, estimate or calculator output: refused.',
      'Any advice to take or avoid a course for ATAR reasons: refused.',
      'Whether a two-unit course can contribute only one of its units to the 8: not stated on the pages read, so the illustration uses whole courses only.',
      'Rules for Tasmania: not read, so Tasmania is not described.',
      'Any affiliation with an admissions centre: none.'
    ]
  }
};
