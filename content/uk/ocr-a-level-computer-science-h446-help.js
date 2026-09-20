'use strict';
// OCR A-level Computer Science H446 help (ag- exam door, England; UK cluster Phase 3).
// Source: Cambridge OCR, Level 3 Advanced GCE in Computer Science (H446) specification, Version 3.0
// (2026), read from OCR's own PDF on 20 September 2026. Verbatim:
//  - "Learners must take three components (01, 02 and 03 or 01, 02 and 04) to be awarded the OCR A
//    Level in Computer Science."
//  - Component 01 Computer systems: "140 marks", "2 hours and 30 minutes written paper", "(no
//    calculators allowed)", "40% of total A level". Content: the characteristics of contemporary
//    processors, input, output and storage devices; software and software development; exchanging data;
//    data types, data structures and algorithms; legal, moral, cultural and ethical issues.
//  - Component 02 Algorithms and programming: "140 marks", "2 hours and 30 minutes written paper",
//    "(no calculators allowed)", "40% of total A level". Content: elements of computational thinking;
//    problem solving and programming; algorithms to solve problems and standard algorithms.
//  - Component 03 (moderated upload) or 04 (moderated postal), Programming project: "70 marks",
//    "Non-exam assessment", "20% of total A level". Content: analysis of the problem, design of the
//    solution, developing the solution, evaluation. "The learner will choose a computing problem to
//    work through according to the guidance in the specification."
//  - THE SPINE, from 2b: "Computer systems component (01) contains the majority of the content of the
//    specification and is assessed in a written paper recalling knowledge and understanding";
//    "Algorithms and programming component (02) relates principally to problem solving skills needed by
//    learners to apply the knowledge and understanding encountered in Component 01"; "Programming
//    project component (03 or 04) is a practical portfolio based assessment with a task that is chosen
//    by the teacher or learner and is produced in an appropriate programming language of the learner's
//    or teacher's choice."
//  - Key features: learners "choose any suitable programming language" and may "include agile methods".
//  - "* Indicates synoptic assessment" against components 02, 03 and 04.
// Spine: nobody types code in an OCR exam. Both papers are written and both bar calculators, so the
// only place a candidate actually programs is a portfolio project in a language of their own choosing.
// That is the opposite architecture to AQA, whose Paper 1 is sat on screen from a skeleton program, and
// it means the two boards reward almost opposite preparation.
// Note: the specification PDF downloads slowly from OCR and truncates on a short timeout; use --retry
// and check page_count before trusting the file.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'OCR H446', blurb: 'Both OCR A-level papers are written and both bar calculators. The only place a candidate programs is the project.' },
  slug: 'ocr-a-level-computer-science-h446-help',
  code: 'och',
  accent: '#28471F',
  accentRationale: 'OCR H446: a dark forest green from the solver (8.47:1 on every paper tint), set well apart from the violet used for the AQA A-level page it is compared with',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'OCR A-level Computer Science H446 help',
  title: 'OCR A-level Computer Science H446 Help | Both Papers',
  description: 'Help with Cambridge OCR H446: two written papers of 140 marks each, no calculators, and a project in any suitable language. Taught live. First class free.',
  ogDescription: 'At OCR nobody types code in an exam. Both papers are written, both bar calculators, and the only programming is the project.',
  twitterDescription: 'OCR A-level Computer Science H446 tutoring, both papers and the project. First class free.',
  pageName: 'OCR A-level Computer Science H446 Help',
  webPageDescription: 'Live online tuition for Cambridge OCR A-level Computer Science H446, covering both written components and the skills the programming project assumes.',
  courseDescription: 'Live online teaching for students taking OCR A-level Computer Science H446, covering computer systems, algorithms and programming, and the skills a portfolio project requires.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'OCR H446 help',
  navLinks: [
    { href: '#written', label: 'Two written papers' },
    { href: '#apply', label: 'Knowledge and application' },
    { href: '#project', label: 'The project' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Cambridge OCR H446 &middot; Years 12 and 13',
  h1: 'OCR A-level Computer Science H446 help',
  lede: 'Here is the fact that should shape two years of preparation, and it is easy to miss because it is an absence rather than a rule. At OCR, a candidate never types code in an examination. Component 01 is a written paper. Component 02 is a written paper. Both run two and a half hours, both carry 140 marks, and both are marked "no calculators allowed". The only place programming actually happens is the project, which is a portfolio produced in "an appropriate programming language of the learner\'s or teacher\'s choice". That is the opposite architecture to the other big English board, whose first paper is sat on screen, and it means the two A-levels reward almost opposite habits.',
  secondaryCta: { href: '#project', label: 'The project' },
  wa: 'Hello Modern Age Coders, I would like a free first class for OCR A-level Computer Science H446.',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students &middot; Algorithms on paper, projects for real',
  spec: [
    ['Qualification', 'Cambridge OCR A Level H446'],
    ['Component 01', 'Written, 2h30, 140 marks, 40 per cent'],
    ['Component 02', 'Written, 2h30, 140 marks, 40 per cent'],
    ['Project', '70 marks, 20 per cent'],
    ['Calculators', 'Not allowed in either paper'],
    ['Project language', 'Any suitable one, your choice'],
    ['We never', 'Touch a candidate\'s project'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'OCR H446 has three components and no on-screen exam. Component 01, Computer systems, is a written paper of two and a half hours worth 140 marks and 40 per cent, and the specification says it "contains the majority of the content". Component 02, Algorithms and programming, is another written paper of the same length and weight, and it "relates principally to problem solving skills needed by learners to apply the knowledge and understanding encountered in Component 01". Neither permits a calculator. The programming project is 70 marks and 20 per cent, submitted as a portfolio in whatever language the learner or teacher picks. So exam preparation means writing code by hand and reasoning on paper, while project preparation means actually building something. We teach both. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for H446 candidates',
    lede: 'Depth in a language for the project, algorithms for the papers, and the data work many projects turn out to need.',
    items: [
      { course: 'data-structures-algorithms-masterclass-college', code: 'OCR A / 01', title: 'Data Structures and Algorithms', note: 'Standard algorithms, complexity and the computational thinking content, worked on paper because that is where they are examined.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'OCR A / 02', title: 'Python, Zero to Advanced', note: 'Depth well past GCSE, for a project that has to stand up to moderation.' },
      { course: 'full-stack-web-development-masterclass-college', code: 'OCR A / 03', title: 'Full Stack Web Development', note: 'For projects with a database and a front end, which is where a lot of good H446 projects end up.' }
    ]
  },

  sections: [
    {
      id: 'written', tint: 'tint', eyebrow: 'Two written papers',
      h2: 'Nobody types code in an OCR exam',
      lede: 'From the Cambridge OCR H446 specification, version 3.0. Read the assessment column and the absence is the striking part.',
      body: [
        { kind: 'table', caption: 'H446 at a glance', head: ['Component', 'Assessment', 'Weight', 'What it covers'], rows: [
          ['01 Computer systems', '140 marks, 2 hours and 30 minutes written paper, no calculators allowed', '40 per cent', 'Contemporary processors, input, output and storage; software and software development; exchanging data; data types, data structures and algorithms; legal, moral, cultural and ethical issues'],
          ['02 Algorithms and programming', '140 marks, 2 hours and 30 minutes written paper, no calculators allowed', '40 per cent', 'Elements of computational thinking; problem solving and programming; algorithms to solve problems and standard algorithms'],
          ['03 or 04 Programming project', '70 marks, non-exam assessment, submitted by moderated upload or post', '20 per cent', 'Analysis of the problem, design of the solution, developing the solution, evaluation']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this changes about practice',
          left: [
            'Eighty per cent of the qualification is written, so the decisive exam skill is expressing algorithms and reasoning clearly on paper, under time, without an editor to catch anything.',
            'A student who prepares by programming in an IDE all year and never writes code by hand will find both papers harder than their actual ability warrants, which is a preparation problem rather than a knowledge one.'
          ],
          rightH3: 'And the calculator note',
          right: [
            'Both papers are explicitly non-calculator. Binary, hexadecimal, floating point and complexity arithmetic all have to be done by hand at speed, in papers already demanding on time.',
            'That is a practice issue with no clever solution: repetition from the first term, until the arithmetic stops consuming thought.'
          ] },
        { kind: 'p', html: 'Worth naming the contrast, because plenty of families choose a sixth form without knowing it exists. The other major English board sits its first A-level paper on screen, issuing a skeleton program in advance. <a class="ag-inline-link" href="/aqa-a-level-computer-science-7517-help">The AQA 7517 page</a> sets that out, and the preparation the two boards reward is genuinely different.' },
        { kind: 'source', html: 'Source, read 20 September 2026: <a class="ag-inline-link" href="https://www.ocr.org.uk/qualifications/as-and-a-level/computer-science-h046-h446-from-2015/" rel="noopener" target="_blank">Cambridge OCR Level 3 Advanced GCE in Computer Science (H446) specification</a>, version 3.0. Check the current version on OCR\'s site; your school will confirm which applies.' }
      ]
    },
    {
      id: 'apply', tint: 'deep', eyebrow: 'Knowledge and application',
      h2: 'Component 02 is about using Component 01',
      lede: 'OCR does not split theory from programming. It splits knowing from applying, which is a subtler division and one that changes how to revise.',
      body: [
        { kind: 'capsule', q: 'How the specification describes its own structure', p: 'Component 01 "contains the majority of the content of the specification and is assessed in a written paper recalling knowledge and understanding". Component 02 "relates principally to problem solving skills needed by learners to apply the knowledge and understanding encountered in Component 01".' },
        { kind: 'three', mt: true, cells: [
          { h3: 'So 02 has less content', p: 'Its own content list is short: computational thinking, problem solving and programming, and standard algorithms. What it has instead is demand, because the questions apply material from the other paper.' },
          { h3: 'Which means order matters', p: 'A student who has not secured Component 01 cannot really revise Component 02, because there is nothing yet to apply. Doing them in parallel from the start is the usual mistake.' },
          { h3: 'And synoptic is flagged', p: 'The specification marks components 02, 03 and 04 with an asterisk for synoptic assessment. Questions can and will reach across the whole course.' }
        ] },
        { kind: 'table', mt: true, caption: 'How to revise each paper differently', head: ['', 'Component 01', 'Component 02'], rows: [
          ['What it rewards', 'Secure recall of a large body of content, expressed precisely', 'Applying that content to an unfamiliar problem on paper'],
          ['Highest-value activity', 'Spaced retrieval across every topic, all year', 'Unseen problems, solved by hand, then marked by a person'],
          ['Commonest mistake', 'Reading notes, which feels like revision and tests nothing', 'Revising it as though it were more content to memorise'],
          ['Handwriting matters because', 'Extended answers are judged on how clearly they are argued', 'An algorithm nobody can follow cannot be credited']
        ] },
        { kind: 'p', html: 'The practical advice that follows is unglamorous. Write algorithms out by hand, every week, and have somebody read them who will say when they are unclear. That single habit improves both papers at once, and it is the thing students are least willing to do because typing is faster and feels more like progress.' },
        { kind: 'p', html: 'The underlying skill, predicting what a program will do before running it, is the same one the statutory curriculum names at school level, and it is set out with the research behind it on <a class="ag-inline-link" href="/problem-solving-skills-through-coding-uk">the problem-solving page</a>.' }
      ]
    },
    {
      id: 'project', tint: '', eyebrow: 'The project',
      h2: 'Seventy marks, any suitable language, and entirely yours',
      lede: 'The project is where the programming actually happens, and OCR leaves the choice of language and problem unusually open.',
      body: [
        { kind: 'table', caption: 'What the specification says about the project', head: ['Element', 'What it says'], rows: [
          ['Weight', '70 marks, non-exam assessment, 20 per cent of the A level'],
          ['Submission', 'Component 03 by moderated upload, or component 04 by moderated post'],
          ['The task', '"The learner will choose a computing problem to work through according to the guidance in the specification"'],
          ['Who chooses', 'A task "chosen by the teacher or learner"'],
          ['The language', 'Produced "in an appropriate programming language of the learner\'s or teacher\'s choice"'],
          ['The four stages', 'Analysis of the problem, design of the solution, developing the solution, evaluation'],
          ['Method', 'The specification notes learners may "include agile methods"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Freedom is the hard part',
          left: [
            'Being able to choose any suitable language and almost any problem sounds like a gift and behaves like a trap. The commonest failure is a project too ambitious to finish and too vague to analyse, chosen in enthusiasm in September of Year 13.',
            'The marks are spread across analysis, design, development and evaluation, so a brilliant program with thin analysis scores worse than a modest one documented properly.'
          ],
          rightH3: 'What we teach around it',
          right: [
            'Everything the four stages assume: interviewing a real user and turning that into requirements, designing before coding, testing systematically, and writing honestly about what did not work.',
            'And the habit of keeping a decision log from day one, because evaluation written six months after the decisions is reconstruction rather than reflection.'
          ] },
        { kind: 'p', html: 'Our line here does not move. We do not work on any candidate\'s project, we do not review it, and we will decline if asked. It is 20 per cent of an A level and it has to be the candidate\'s own. <a class="ag-inline-link" href="/a-level-computer-science-nea-help">The A-level coursework page</a> compares where the marks sit at both boards, and <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-uk">the page on declaring AI</a> explains why identified AI content earns nothing even when it is properly acknowledged.' },
        { kind: 'p', html: 'One useful consequence of the open language rule: a student can use the project to learn something their school does not teach. A candidate who wants to work in a language nobody in the department uses can, provided it suits the problem, and that is a genuine opportunity for a strong student.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs across the two years',
    lede: 'Judged by what a student can write by hand and what they have actually built, in that order.',
    table: { caption: 'Where an H446 candidate should be', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Beyond GCSE in a language', 'The first term of sixth form', 'At ease with data structures, file handling and objects in whatever language suits the project'],
      ['2. Content secured', 'Across Year 12', 'Component 01 material revisited by retrieval rather than by rereading'],
      ['3. Algorithms on paper', 'Year 12 into Year 13', 'Unseen problems solved by hand, clearly enough for a stranger to follow'],
      ['4. A project that finishes', 'Year 13', 'Scoped small enough to complete, with analysis and a decision log written as you go']
    ] },
    left: { h3: 'Rung three is the exam', ps: [
      'Eighty per cent of this A level is written, so a student who only ever programs in an editor is practising for the smallest part of it.',
      'The sequence of topics past A level runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'And rung four is the trap', ps: [
      'Ambition chosen in September becomes panic in February. A project scoped to finish beats a project designed to impress, every year.',
      'We teach the skills the project assumes and never the project itself.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for OCR A-level students',
    lede: 'Grouped by which component they serve. The free lesson settles where to begin.',
    bands: [
      { num: 'I', h3: 'For the written papers', sub: 'Content and reasoning', courses: [
        { code: 'UK / OH1 / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Standard algorithms and complexity, worked on paper where both papers will ask for them.' },
        { code: 'UK / OH1 / 02', slug: 'mysql-database-complete-masterclass-college', title: 'Databases and SQL', blurb: 'The exchanging data and data types content done properly rather than skimmed.' },
        { code: 'UK / OH1 / 03', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming', blurb: 'Unseen problems under pressure, which is exactly what Component 02 asks for.' }
      ] },
      { num: 'II', h3: 'For the project', sub: 'Building something that finishes', courses: [
        { code: 'UK / OH2 / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python, zero to advanced', blurb: 'Depth enough for a project that will be moderated, in the language most candidates pick.' },
        { code: 'UK / OH2 / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web development', blurb: 'A database, a front end and a deployment, which is where many good projects land.' },
        { code: 'UK / OH2 / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'A decision history that writes itself, which makes the evaluation section far easier to write honestly.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'For students past the specification', courses: [
        { code: 'UK / OH3 / 01', slug: 'data-science-complete-masterclass-college', title: 'Data science, complete', blurb: 'Cleaning, modelling and measuring, for a candidate whose portfolio runs on live data.' },
        { code: 'UK / OH3 / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java, complete', blurb: 'A second language, which the open project rule makes genuinely available to a strong student.' },
        { code: 'UK / OH3 / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI automation', blurb: 'Automating something real, and logging every suggestion a tool made along the way.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'By hand for the papers, for real in the project',
    lede: 'Teachers work from India on a clock that never shifts, leaving the UK five and a half hours behind from October and four and a half from March. Slots are agreed in UK time.',
    slots: [
      { time: 'After sixth form', l: 'Where most H446 candidates settle in the week.' },
      { time: 'Late evening', l: 'Once training, a shift or a long commute is out of the way.' },
      { time: 'Saturday or Sunday', l: 'Room for a full 140-mark paper and then going through it.' }
    ],
    cells: [
      { h3: 'Algorithms written out', p: 'By hand, every week, and read by somebody who will say when they are unclear. Both papers turn on this.' },
      { h3: 'Arithmetic without a calculator', p: 'Binary, hex and floating point practised until they stop consuming thought, since neither paper allows one.' },
      { h3: 'Retrieval, not rereading', p: 'Component 01 is a large body of content, and the only revision that works on it is being asked.' },
      { h3: 'Unseen problems', p: 'Component 02 applies the other paper, so practice has to be on problems nobody has seen before.' },
      { h3: 'A clear line on the project', p: 'We never work on it, review it or advise on its content. We teach the four stages it assumes.' },
      { h3: 'Groups by level', p: 'Five to ten students at one stage, marking each other\'s handwritten algorithms.' }
    ]
  },

  projectsH2: 'Portfolios and builds from sixth formers',
  projectsLede: 'Four projects from lessons, not one of them anybody\'s submitted coursework, and <a class="ag-inline-link" href="/student-labs">student labs</a> carries the rest.',
  reviewsLede: 'Straight from Google, exactly as families typed them.',

  fees: {
    h2: 'Fees for H446 teaching',
    lede: 'One figure a month, quoted in US dollars outside India. Nothing is taken until the free lesson has settled a course and a regular time.',
    free: ['A working lesson on actual H446 questions', 'A blunt answer about which component is behind', 'We ask for a phone number and nothing else'],
    group: ['A room of five to ten at the same rung', 'The same teacher from September to June', 'Handwritten algorithms marked and handed back each week', 'A lighter timetable while the papers are on'],
    one: ['Only the student and the teacher', 'Planned back from the exam timetable', 'Suits a candidate with a particular grade in view']
  },

  faq: {
    eyebrow: 'Questions about OCR H446',
    h2: 'What A-level candidates and parents ask',
    items: [
      { q: 'How is H446 assessed?', a: 'Three components. Component 01 and Component 02 are each written papers of two and a half hours and 140 marks, worth 40 per cent each. The programming project is 70 marks and 20 per cent.' },
      { q: 'Is any paper taken on a computer?', a: 'No. Both papers are written, and both are marked no calculators allowed. The only place programming happens is the project.' },
      { q: 'What is the difference between the two papers?', a: 'The specification says Component 01 contains the majority of the content and assesses recall of knowledge and understanding, while Component 02 relates principally to the problem solving skills needed to apply that knowledge.' },
      { q: 'Which language is the project in?', a: 'Any suitable one. It is produced in an appropriate programming language of the learner\'s or teacher\'s choice, which is more open than the other major English board allows.' },
      { q: 'What is the project marked on?', a: 'Four stages: analysis of the problem, design of the solution, developing the solution, and evaluation. A strong program with thin analysis does not score well.' },
      { q: 'How is the project submitted?', a: 'As component 03 by moderated upload, or component 04 by moderated post.' },
      { q: 'How should a student revise the papers?', a: 'Retrieval practice for Component 01 across all topics, and unseen problems solved by hand for Component 02, with somebody reading the handwriting and saying when it is unclear.' },
      { q: 'Will you help with the project?', a: 'No. It is 20 per cent of the A level and must be the candidate\'s own. We teach the skills it assumes and decline any request to work on the project itself.' },
      { q: 'Should the project be ambitious?', a: 'It should be finishable. Ambition chosen in September of Year 13 becomes panic in February, and the marks reward documentation as much as cleverness.' },
      { q: 'What does it cost?', a: 'The opening lesson is free of charge. Afterwards a place in a group costs USD 100 a month, or USD 150 for private teaching, taken monthly and never in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related reading',
    lede: 'Four boards, one project and a lot of paper. These go deeper.',
    items: [
      { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA A-level Computer Science 7517', p: 'The other board, where Paper 1 is sat on screen from a skeleton program.' },
      { href: '/a-level-computer-science-nea-help', label: 'A-level Computer Science coursework', p: 'A stage-by-stage look at the project, written before this page existed.' },
      { href: '/ocr-gcse-computer-science-j277-help', label: 'OCR GCSE Computer Science J277', p: 'The same board two years earlier, and its Not required column.' },
      { href: '/problem-solving-skills-through-coding-uk', label: 'Problem-solving skills through coding', p: 'What the research says builds skill, and the claim we refuse to make.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'The national round, for candidates who have run out of syllabus.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, and the index of every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number. We answer at a UK hour you pick, teach a real lesson on paper as the papers demand, and end by saying which of the three components is furthest behind.',
    readFirst: 'Happier reading first? Syllabuses are on the <a class="ag-inline-link" href="/courses">course pages</a>, the method and where it does not suit a learner is in <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and topic order runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.',
    note: 'A WhatsApp message costs a UK handset nothing and is answered fastest. Our number belongs to the office in India, which we would rather print than have you spot.',
    formNote: 'Nothing to pay, nothing to sign. We reply once, with a time.'
  },

  footer: {
    cols: [
      { h4: 'England', links: [
        { href: '/coding-and-ai-classes-in-england', label: 'The English system' },
        { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA 7517' },
        { href: '/ocr-gcse-computer-science-j277-help', label: 'OCR J277' },
        { href: '/choosing-gcse-computer-science-year-9-options', label: 'Year 9 options' }
      ] },
      { h4: 'Post-16', links: [
        { href: '/a-level-computer-science-nea-help', label: 'A-level coursework' },
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'Declaring AI in coursework' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'H446 taught live, on a British clock'
  },

  personalityCss: `
.ag-root.ag-och .ag-hero h1 { letter-spacing: -0.023em; font-weight: 700; }
.ag-root.ag-och .ag-capsule { border-left-width: 4px; padding-left: 1.4rem; }
.ag-root.ag-och .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-och .ag-table caption { text-align: left; font-weight: 650; letter-spacing: 0.02em; }
.ag-root.ag-och .ag-table th:first-child { width: 23%; }
.ag-root.ag-och .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-och .ag-band-head h3 { letter-spacing: 0.004em; }
`,

  mustMention: ['no calculators allowed', '140 marks', '70 marks', 'majority of the content', 'apply the knowledge and understanding', 'learner\'s or teacher\'s choice', 'moderated upload', 'analysis of the problem', 'agile methods', 'synoptic'],

  dossier: {
    curriculumAuthority: 'England, Cambridge OCR A Level Computer Science H446. Level 3 Advanced GCE in Computer Science (H446) specification, version 3.0, read from OCR\'s own PDF on 20 September 2026. "Learners must take three components (01, 02 and 03 or 01, 02 and 04) to be awarded the OCR A Level in Computer Science." Component 01 Computer systems: "140 marks", "2 hours and 30 minutes written paper", "(no calculators allowed)", "40% of total A level"; content covers the characteristics of contemporary processors, input, output and storage devices, software and software development, exchanging data, data types, data structures and algorithms, and legal, moral, cultural and ethical issues. Component 02 Algorithms and programming: "140 marks", "2 hours and 30 minutes written paper", "(no calculators allowed)", "40% of total A level"; content covers elements of computational thinking, problem solving and programming, and algorithms to solve problems and standard algorithms. Component 03 by moderated upload or 04 by moderated postal, Programming project: "70 marks", "Non-exam assessment", "20% of total A level"; content covers analysis of the problem, design of the solution, developing the solution and evaluation; "The learner will choose a computing problem to work through according to the guidance in the specification." From section 2b: Component 01 "contains the majority of the content of the specification and is assessed in a written paper recalling knowledge and understanding"; Component 02 "relates principally to problem solving skills needed by learners to apply the knowledge and understanding encountered in Component 01"; the project component "is a practical portfolio based assessment with a task that is chosen by the teacher or learner and is produced in an appropriate programming language of the learner\'s or teacher\'s choice". Key features note that learners "choose any suitable programming language" and may "include agile methods". An asterisk against components 02, 03 and 04 "Indicates synoptic assessment".',
    localProject: 'Nobody types code in an OCR exam. Both papers are written, both run two and a half hours for 140 marks, and both are marked no calculators allowed, so eighty per cent of the qualification is assessed on paper and the only place a candidate actually programs is a portfolio project in a language of their own choosing. That is the opposite architecture to AQA, whose first paper is sat on screen from a skeleton program, and the page names the contrast explicitly because families pick sixth forms without knowing it exists. The second section turns on OCR\'s own description of its structure: Component 01 holds the majority of the content and tests recall, Component 02 exists to apply it, which means the two cannot sensibly be revised in parallel from the start and that retrieval works for one while unseen problems work for the other. The third handles the project, where the freedom to choose any suitable language and almost any problem behaves like a trap, and where marks are spread across analysis, design, development and evaluation so that a brilliant program with thin analysis scores badly. The line on never touching a candidate\'s project is stated plainly. Lesson family: an assessment architecture defined by what it does not contain.',
    requiredMentions: ['no calculators allowed', '140 marks', 'majority of the content', 'moderated upload'],
    sources: [
      { claim: 'Cambridge OCR Level 3 Advanced GCE in Computer Science (H446) specification, version 3.0: the three components with marks, durations, weightings and the non-calculator rule, the content of each, the descriptions of what components 01 and 02 assess, the project submission routes, the open language rule and the synoptic marking.', url: 'https://www.ocr.org.uk/qualifications/as-and-a-level/computer-science-h046-h446-from-2015/' }
    ],
    rejectedClaims: [
      'That version 3.0 is necessarily current: it is the version read, and the page tells readers to check OCR and ask their school.',
      'The detailed project mark breakdown across the four stages: that sits on the A-level coursework page, which compares the boards directly.',
      'AS-level H046 detail: this page is about the A level, and the AS components differ.',
      'Grade boundaries, pass rates or entry numbers for H446: none was read at a primary source for this build.',
      'Any promise about a grade, and any offer to help with the project, which we decline as policy.',
      'Examination entry fees: published in pounds, and this site prices in one currency.'
    ]
  }
};
