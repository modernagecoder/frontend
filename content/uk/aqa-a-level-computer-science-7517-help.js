'use strict';
// AQA A-level Computer Science 7517 help (ag- exam door, England; UK cluster Phase 3).
// Source: AQA, AS and A-level Computer Science specification (7516, 7517), for AS and A-level exams
// June 2016 onwards, Version 1.6 dated 31 July 2023, read from AQA's own PDF on 20 September 2026.
// Verbatim:
//  - Paper 1: "this paper tests a student's ability to program, as well as their theoretical knowledge
//    of Computer Science from subject content 10-13 above and the skills required from section 22
//    above." Assessed: "On-screen exam: 2 hours 30 minutes", "40% of A-level". Questions: "Students
//    answer a series of short questions and write/adapt/extend programs in an Electronic Answer
//    Document provided by us."
//  - THE SPINE: "We will issue Preliminary Material, a Skeleton Program (available in each of the
//    Programming Languages) and, where appropriate, test data, for use in the exam."
//  - Paper 2: "this paper tests a student's ability to answer questions from subject content 14-21
//    above." Assessed: "Written exam: 2 hours 30 minutes", "40% of A-level". Questions: "Compulsory
//    short-answer and extended-answer questions."
//  - Non-exam assessment: assesses a student's "ability to use the knowledge and skills gained through
//    the course to solve or investigate a practical problem", following "a systematic approach to
//    problem solving". Assessed: "75 marks", "20% of A-level".
//  - Languages: "We will support the following programming languages: C#, Java, Python*, VB.Net.
//    *Python 2 is no longer a supported language." And: "Schools and colleges will be asked to indicate
//    their programming language preference at the start of the study of the" course.
//  - A-level subject content sections 10 to 23, including 4.11 Big Data, 4.12 Fundamentals of
//    functional programming, 4.13 Systematic approach to problem solving and 4.14 the non-exam
//    assessment.
// Spine: you meet the codebase before the exam, and you did not write it. AQA issues Preliminary
// Material and a Skeleton Program in advance, then sits Paper 1 on screen in an Electronic Answer
// Document, so a candidate spends weeks reading a program somebody else wrote and then extends it under
// a clock. That is what professional programming actually is, and it is almost never what A-level
// teaching practises.
// Distinct from /a-level-computer-science-nea-help, which covers the project across AQA and OCR and
// runs on a state-machine design spine. This page is about the two papers.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'AQA 7517', blurb: 'AQA gives candidates a skeleton program weeks before Paper 1, then sits the paper on screen. Reading someone else\'s code is the skill.' },
  slug: 'aqa-a-level-computer-science-7517-help',
  code: 'aqa',
  accent: '#5C2E8A',
  accentRationale: 'AQA 7517: a deep violet from the solver (7.70:1 on every paper tint), well clear of the navy, teal and bronze used by the three GCSE board pages',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'AQA A-level Computer Science 7517 help',
  title: 'AQA A-level Computer Science 7517 Help | Skeleton Program',
  description: 'Help with AQA A-level Computer Science 7517: the onscreen Paper 1, the skeleton program issued in advance, Paper 2 and the project. First class free.',
  ogDescription: 'AQA issues a skeleton program before Paper 1 and sits the paper on screen. The skill being tested is reading code you did not write.',
  twitterDescription: 'AQA A-level Computer Science 7517 tutoring, including the skeleton program. First class free.',
  pageName: 'AQA A-level Computer Science 7517 Help',
  webPageDescription: 'Live online tuition for AQA A-level Computer Science 7517, covering the onscreen Paper 1 and its skeleton program, the written Paper 2, and the practical project.',
  courseDescription: 'Live online teaching for students taking AQA A-level Computer Science 7517, covering programming for the onscreen paper, theory for the written paper, and the skills the project assumes.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'AQA 7517 help',
  navLinks: [
    { href: '#skeleton', label: 'The skeleton program' },
    { href: '#structure', label: 'How it is assessed' },
    { href: '#prepare', label: 'Preparing for each part' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; AQA 7517 &middot; Years 12 and 13',
  h1: 'AQA A-level Computer Science 7517 help',
  lede: 'Most A-level teaching prepares students to write programs from nothing. AQA\'s Paper 1 asks for something else entirely. The board issues "Preliminary Material, a Skeleton Program (available in each of the Programming Languages) and, where appropriate, test data, for use in the exam", and then sits the paper on screen, with candidates writing, adapting and extending programs inside an Electronic Answer Document. So a candidate spends weeks with a substantial codebase they did not write, and then modifies it under a clock. That is a fair description of professional software work, and it is almost never what a sixth form practises. This page covers the skeleton program, both papers, the project, and how to prepare for three things that reward three different habits.',
  secondaryCta: { href: '#structure', label: 'How it is assessed' },
  wa: 'Hello Modern Age Coders, I would like a free first class for AQA A-level Computer Science 7517.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Reading code, not only writing it',
  spec: [
    ['Qualification', 'AQA A-level Computer Science 7517'],
    ['Paper 1', 'On-screen, 2h30, 40 per cent'],
    ['Paper 2', 'Written, 2h30, 40 per cent'],
    ['Project', '75 marks, 20 per cent'],
    ['Issued early', 'Preliminary material and a skeleton'],
    ['Languages', 'C#, Java, Python 3 or VB.Net'],
    ['We never', 'Touch a candidate\'s project'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'AQA 7517 splits three ways: an on-screen Paper 1 of two and a half hours at 40 per cent, a written Paper 2 of the same length at 40 per cent, and a practical project worth 75 marks and 20 per cent. Paper 1 is the unusual one. AQA issues preliminary material and a skeleton program in advance, in whichever of C#, Java, Python or VB.Net a school has chosen, and candidates then write, adapt and extend programs in an electronic answer document during the exam. Preparing for it means reading and navigating a codebase somebody else wrote, which is a distinct skill from writing one from scratch and the one most students have least practice in. We teach both, plus the theory Paper 2 rewards. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for A-level candidates',
    lede: 'Depth in a language, the algorithms Paper 2 leans on, and the data work the project usually needs. Cards open the syllabus.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'AQA A / 01', title: 'Python, Zero to Advanced', note: 'Depth well past GCSE, including the file handling, structures and object work a skeleton program will assume.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'AQA A / 02', title: 'Data Structures and Algorithms', note: 'Trees, graphs, complexity and the theory of computation content, worked on paper before any code.' },
      { course: 'data-science-complete-masterclass-college', code: 'AQA A / 03', title: 'Data Science, Complete', note: 'For students whose project involves real data, and for the Big Data content in the specification.' }
    ]
  },

  sections: [
    {
      id: 'skeleton', tint: 'tint', eyebrow: 'The skeleton program',
      h2: 'You meet the code before the exam, and you did not write it',
      lede: 'This is the defining feature of AQA\'s A-level and the one students most often under-prepare for.',
      body: [
        { kind: 'capsule', q: 'What the specification says', p: 'For Paper 1, "We will issue Preliminary Material, a Skeleton Program (available in each of the Programming Languages) and, where appropriate, test data, for use in the exam." Candidates "answer a series of short questions and write/adapt/extend programs in an Electronic Answer Document provided by us".' },
        { kind: 'two', mt: true,
          leftH3: 'Why this is a different skill',
          left: [
            'Writing a program from an empty file and extending somebody else\'s program are not the same activity. The second demands that you find your way around unfamiliar structure, work out what a function is for from how it is used, and change one part without breaking three others.',
            'A student who has only ever written their own code from scratch meets that for the first time in an exam, which is the worst possible place to meet it.'
          ],
          rightH3: 'What good preparation looks like',
          right: [
            'Read the skeleton out loud, function by function, and say what each one is for before changing anything. Draw the call structure on paper. Run it and break it deliberately to see what depends on what.',
            'Then practise small modifications against a clock. Adding a feature to somebody else\'s program in twenty minutes is a skill that improves quickly and only with repetition.'
          ] },
        { kind: 'table', mt: true, caption: 'Three habits the skeleton rewards', head: ['Habit', 'What it looks like', 'Why the exam rewards it'], rows: [
          ['Reading before typing', 'Explaining each subroutine in your own words, without changing anything', 'The questions assume you know where things are; hunting in the exam costs minutes you do not have'],
          ['Tracing by hand', 'Following a value through the program on paper', 'Short questions frequently ask what the program does with a given input'],
          ['Small safe changes', 'Extending behaviour without disturbing what already works', 'Adapt and extend are the specification\'s own words for what Paper 1 asks']
        ] },
        { kind: 'p', html: 'The skeleton is provided in each supported language, so a candidate works in whichever one their school picked. AQA supports C#, Java, Python and VB.Net, notes that Python 2 is no longer supported, and says schools "will be asked to indicate their programming language preference at the start of the study of the" course. That decision is made for a student, usually before they arrive in Year 12.' },
        { kind: 'source', html: 'Source, read 20 September 2026: <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/computer-science-and-it/as-and-a-level/computer-science-7516-7517" rel="noopener" target="_blank">AQA AS and A-level Computer Science (7516, 7517) specification</a>, version 1.6, 31 July 2023, for exams June 2016 onwards. Check the current version on AQA\'s site; your school will confirm which applies and which language it has chosen.' }
      ]
    },
    {
      id: 'structure', tint: 'deep', eyebrow: 'How it is assessed',
      h2: 'Forty, forty, twenty',
      lede: 'Three components, two of them exams of identical length and very different character.',
      body: [
        { kind: 'table', caption: 'AQA 7517 at a glance', head: ['Component', 'Format', 'Weight', 'What it assesses'], rows: [
          ['Paper 1', 'On-screen exam, 2 hours 30 minutes', '40 per cent', 'The ability to program, plus theory from the programming, data structures, algorithms and theory of computation sections, and the systematic approach to problem solving'],
          ['Paper 2', 'Written exam, 2 hours 30 minutes', '40 per cent', 'Data representation, computer systems, organisation and architecture, consequences of computing, networking, databases, Big Data and functional programming'],
          ['Project', 'Non-exam assessment, 75 marks', '20 per cent', 'Using the knowledge and skills from the course "to solve or investigate a practical problem", following a systematic approach']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Paper 1 is not a written paper', p: 'It is sat on screen, in an electronic answer document AQA provides. A student who has revised programming only on paper is preparing for the wrong medium.' },
          { h3: 'Paper 2 is genuinely broad', p: 'It ranges from logic gates to databases to functional programming, and the extended-answer questions reward writing that is structured rather than merely correct.' },
          { h3: 'The project is a fifth of it', p: 'Twenty per cent and 75 marks, and unlike the papers it is spread over months, which makes it the component most often left too late.' }
        ] },
        { kind: 'p', html: 'Two A-level topics catch GCSE-strong students out because they have no GCSE equivalent at all: functional programming and Big Data. Neither is hard once taught, and both are frequently squeezed into the last term because they sit late in the specification. Planning them earlier is one of the cheapest improvements available to a Year 12.' },
        { kind: 'p', html: 'On the project itself, the marks and the board-specific rules are set out on <a class="ag-inline-link" href="/a-level-computer-science-nea-help">the A-level coursework page</a>, which compares AQA and OCR directly. We do not work on any candidate\'s project, and that line does not move.' }
      ]
    },
    {
      id: 'prepare', tint: '', eyebrow: 'Preparing for each part',
      h2: 'Three components, three different plans',
      lede: 'The most common A-level mistake is revising all three the same way. They reward almost nothing in common.',
      body: [
        { kind: 'table', caption: 'What each component actually needs', head: ['Component', 'The highest-value habit', 'The commonest mistake'], rows: [
          ['Paper 1', 'Working inside somebody else\'s codebase, weekly, at a keyboard', 'Practising only from a blank file, so the skeleton is unfamiliar in May'],
          ['Paper 2', 'Writing extended answers and having them marked by a person', 'Revising by reading notes, which shows knowledge but never tests expression'],
          ['Project', 'Starting early and keeping a decision log from day one', 'Beginning in Year 13 and writing the analysis after the code']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'For Paper 1',
          left: [
            'Use a codebase that is not yours every single week. Any real program will do: read it, explain it, extend it, break it. The specific skeleton arrives when AQA issues it, and by then the skill should already exist.',
            'Then work at the keyboard, in the language your school chose, with the clock running. Fluency and navigation are the two things that decide this paper.'
          ],
          rightH3: 'For Paper 2',
          right: [
            'The content is broad and mostly learnable, so the marginal marks are in extended answers. Write them, hand them to somebody who will mark them honestly, and rewrite.',
            'Functional programming and Big Data deserve a term of their own rather than a fortnight in April.'
          ] },
        { kind: 'p', html: 'Our line on the project is the same as everywhere on this site. We do not work on it, we do not review it, and we will decline if asked, because a project that counts for 20 per cent has to be the candidate\'s own. What we do teach is everything it assumes: structuring a program, testing it properly, working with data, and writing about your own decisions clearly. <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-uk">The page on understanding the code</a> covers what the awarding bodies now say about AI in assessed work, which matters more at A level than anywhere else.' },
        { kind: 'p', html: 'For students weighing up A level in the first place, or arriving from a different GCSE board, the three English GCSE specifications differ more than most people expect, and the <a class="ag-inline-link" href="/aqa-gcse-computer-science-8525-help">AQA GCSE page</a> is the natural place to start.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs across Years 12 and 13',
    lede: 'Where a student stands is judged by what they can do inside an unfamiliar program, not by what they can recite.',
    table: { caption: 'What an A-level candidate should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Fluent beyond GCSE', 'Early Year 12', 'Comfortable with structures, files and objects in the school\'s chosen language'],
      ['2. Reading other people\'s code', 'Across Year 12', 'Able to explain an unfamiliar program and extend it without breaking it'],
      ['3. The hard theory', 'Year 12 into Year 13', 'Theory of computation, complexity, functional programming and Big Data actually taught, not deferred'],
      ['4. Writing to be marked', 'Year 13', 'Extended answers that are structured, and a project with a decision log behind it']
    ] },
    left: { h3: 'Rung two is the differentiator', ps: [
      'It is the rung nobody sets out to climb, because school work is almost always writing your own program from nothing. The exam is not.',
      'The topic sequence past A level runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung three cannot be left to spring', ps: [
      'Functional programming and Big Data have no GCSE ancestor, so a student meets them cold. Late exposure turns learnable content into a panic.',
      'Lessons ease off before the papers and restart afterwards.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for sixth-form computer scientists',
    lede: 'Grouped by which part of the A-level they serve. The free lesson settles the starting point.',
    bands: [
      { num: 'I', h3: 'Depth in a language', sub: 'For the on-screen paper', courses: [
        { code: 'UK / A1 / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python, zero to advanced', blurb: 'Well past GCSE, into the structures and object work a skeleton program assumes.' },
        { code: 'UK / A1 / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java, complete', blurb: 'For sixth forms that chose Java, taught with the same emphasis on reading as writing.' },
        { code: 'UK / A1 / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Navigating and changing a codebase safely, which is the exact Paper 1 skill in professional form.' }
      ] },
      { num: 'II', h3: 'The theory', sub: 'For the written paper', courses: [
        { code: 'UK / A2 / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Trees, graphs and complexity, worked on paper where the exam will ask for them.' },
        { code: 'UK / A2 / 02', slug: 'mysql-database-complete-masterclass-college', title: 'Databases and SQL', blurb: 'The databases section done properly rather than skimmed in the final term.' },
        { code: 'UK / A2 / 03', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming', blurb: 'Speed and correctness under constraint, for students who want to be well clear of the syllabus.' }
      ] },
      { num: 'III', h3: 'Around the project', sub: 'Skills it assumes, never the project itself', courses: [
        { code: 'UK / A3 / 01', slug: 'data-science-complete-masterclass-college', title: 'Data science, complete', blurb: 'For projects built on real data, and for the Big Data content in the specification.' },
        { code: 'UK / A3 / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web development', blurb: 'Building something with a database behind it, which many projects turn out to need.' },
        { code: 'UK / A3 / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI automation', blurb: 'Working alongside tools properly, with a record of what came from where.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Somebody else\'s code, every week',
    lede: 'Teachers work from India, where the clock never moves, so the UK is five and a half hours behind from October and four and a half from March. Slots are agreed in UK time.',
    slots: [
      { time: 'Early evening', l: 'The usual choice for Year 12 and 13 students.' },
      { time: 'Later evening', l: 'For students with sport, work or a long journey home.' },
      { time: 'Weekend morning', l: 'Long enough for full timed practice and a proper review.' }
    ],
    cells: [
      { h3: 'Read before you write', p: 'Every week a student explains a program they did not write, function by function, before changing a line of it.' },
      { h3: 'At a keyboard', p: 'Paper 1 is on screen, so practice is on screen, in the language the school chose.' },
      { h3: 'Extended answers marked', p: 'Written responses handed in and marked by a person, because that is the only way expression improves.' },
      { h3: 'Theory taught early', p: 'Functional programming and Big Data planned into Year 12 rather than left to the final term.' },
      { h3: 'A clear line on the project', p: 'We never work on it, review it or advise on its content. We teach the skills it assumes.' },
      { h3: 'Groups by level', p: 'Five to ten students at one stage, reading each other\'s changes to the same program.' }
    ]
  },

  projectsH2: 'Work our older students have published',
  projectsLede: 'Four projects built in lessons, none of them anybody\'s assessed coursework. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'From Google, word for word, unpaid and unprompted.',

  fees: {
    h2: 'What A-level tuition costs',
    lede: 'One charge a month in US dollars, the rate for every country outside India. The free lesson comes first and billing starts only when a course and a weekly time are agreed.',
    free: ['A full lesson on real 7517 material', 'An honest view of which component is weakest', 'Nothing asked for but a number'],
    group: ['Five to ten students at one stage', 'The same teacher across the year', 'Written answers marked weekly', 'Fewer lessons in the run-up to the papers'],
    one: ['Only the student and the teacher', 'Planned backwards from the exam timetable', 'Suits a candidate with a specific grade in view']
  },

  faq: {
    eyebrow: 'Questions about AQA 7517',
    h2: 'What A-level candidates and parents ask',
    items: [
      { q: 'How is AQA A-level Computer Science assessed?', a: 'Paper 1 is an on-screen exam of two and a half hours worth 40 per cent, Paper 2 is a written exam of the same length worth 40 per cent, and the non-exam assessment is 75 marks and 20 per cent.' },
      { q: 'What is the skeleton program?', a: 'A program AQA issues before Paper 1, available in each supported language, alongside preliminary material and, where appropriate, test data. Candidates work with it during the exam.' },
      { q: 'Is Paper 1 taken on a computer?', a: 'Yes. Students answer short questions and write, adapt and extend programs in an electronic answer document AQA provides.' },
      { q: 'Which languages does AQA support?', a: 'C#, Java, Python and VB.Net, with Python 2 no longer supported. Schools indicate their preference at the start of the course, so the choice is usually made for a student.' },
      { q: 'How should a student prepare for the skeleton?', a: 'By working inside other people\'s programs every week, long before the skeleton arrives. Reading, explaining, extending and breaking code is a separate skill from writing your own.' },
      { q: 'What is in Paper 2?', a: 'Data representation, computer systems, organisation and architecture, consequences of computing, networking, databases, Big Data and functional programming, in compulsory short-answer and extended-answer questions.' },
      { q: 'Which topics catch students out?', a: 'Functional programming and Big Data, because neither has a GCSE equivalent and both sit late in the specification, so they are often rushed in the final term.' },
      { q: 'Will you help with the project?', a: 'No. It is 20 per cent of the A-level and it has to be the candidate\'s own. We teach the skills it assumes and decline any request to work on the project itself.' },
      { q: 'Can a student use AI while preparing?', a: 'For our own exercises, yes, in a fixed order: understand, predict, then ask, with a record of what the tool contributed. For assessed work the awarding bodies\' rules apply and they are strict.' },
      { q: 'What does it cost?', a: 'The opening lesson is free. After that a group place is USD 100 a month and one-to-one teaching USD 150, billed monthly with nothing in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Where to read next',
    lede: 'Each page takes a different part of this further.',
    items: [
      { href: '/a-level-computer-science-nea-help', label: 'A-level Computer Science coursework', p: 'Where the project marks sit at AQA and OCR, and what the boards say about AI.' },
      { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA GCSE Computer Science 8525', p: 'The same board two years earlier, where the difficulty is notational.' },
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy-paste it', p: 'Why declared AI content cannot earn marks in assessed work.' },
      { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI classes in England', p: 'What the computing curriculum requires and who has to follow it.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'Where a strong A-level student can go beyond the specification.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, and the index of every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send a number and we will reply at a British hour you choose. The lesson uses real A-level material, at a keyboard, and finishes by naming the weakest of the three components.',
    readFirst: 'Prefer reading? Each <a class="ag-inline-link" href="/courses">course page</a> publishes its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> covers the method and its limits, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> sets out the sequence.',
    note: 'WhatsApp is free from a British mobile and gets the fastest reply. The number is registered in India, which we say here rather than leave you to find.',
    formNote: 'No card and no contract. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'England', links: [
        { href: '/coding-and-ai-classes-in-england', label: 'The English system' },
        { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA 8525' },
        { href: '/ocr-gcse-computer-science-j277-help', label: 'OCR J277' },
        { href: '/edexcel-gcse-computer-science-1cp2-help', label: 'Edexcel 1CP2' }
      ] },
      { h4: 'Sixth form', links: [
        { href: '/a-level-computer-science-nea-help', label: 'A-level coursework' },
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'AI and assessed work' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live A-level teaching, at a British hour'
  },

  personalityCss: `
.ag-root.ag-aqa .ag-hero h1 { letter-spacing: -0.028em; font-weight: 700; }
.ag-root.ag-aqa .ag-capsule { border-left-width: 6px; border-top: 2px solid var(--ag-accent); }
.ag-root.ag-aqa .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-aqa .ag-table caption { text-align: left; font-weight: 700; letter-spacing: 0.015em; }
.ag-root.ag-aqa .ag-table th:first-child { width: 20%; }
.ag-root.ag-aqa .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-aqa .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  mustMention: ['Skeleton Program', 'Preliminary Material', 'Electronic Answer Document', 'On-screen exam', '40% of A-level', '75 marks', 'functional programming', 'Big Data', 'Python 2 is no longer a supported language', 'write/adapt/extend'],

  dossier: {
    curriculumAuthority: 'England, AQA A-level Computer Science 7517. AQA AS and A-level Computer Science specification (7516, 7517), for AS and A-level exams June 2016 onwards, Version 1.6 dated 31 July 2023, read from AQA\'s own PDF on 20 September 2026. Paper 1: "this paper tests a student\'s ability to program, as well as their theoretical knowledge of Computer Science from subject content 10-13 above and the skills required from section 22 above"; "On-screen exam: 2 hours 30 minutes"; "40% of A-level"; "Students answer a series of short questions and write/adapt/extend programs in an Electronic Answer Document provided by us"; "We will issue Preliminary Material, a Skeleton Program (available in each of the Programming Languages) and, where appropriate, test data, for use in the exam." Paper 2: "this paper tests a student\'s ability to answer questions from subject content 14-21 above"; "Written exam: 2 hours 30 minutes"; "40% of A-level"; "Compulsory short-answer and extended-answer questions." Non-exam assessment: assesses a student\'s "ability to use the knowledge and skills gained through the course to solve or investigate a practical problem", following "a systematic approach to problem solving"; "75 marks"; "20% of A-level". Languages: "We will support the following programming languages: C#, Java, Python*, VB.Net. *Python 2 is no longer a supported language", and "Schools and colleges will be asked to indicate their programming language preference at the start of the study of the" course. A-level subject content sections 10 to 23 include fundamentals of programming, data structures, algorithms, theory of computation, data representation, computer systems, organisation and architecture, consequences of uses of computing, communication and networking, databases, Big Data, fundamentals of functional programming, a systematic approach to problem solving, and the non-exam assessment.',
    localProject: 'You meet the codebase before the exam, and you did not write it. AQA issues preliminary material and a skeleton program in advance, in each supported language, then sits Paper 1 on screen with candidates writing, adapting and extending programs in an electronic answer document. A candidate therefore spends weeks inside a substantial program somebody else wrote and then modifies it under a clock, which is a fair description of professional software work and almost never what a sixth form practises. The page turns that into three habits with reasons: reading before typing, tracing by hand, and small safe changes, and it makes rung two of the progression ladder the ability to explain and extend an unfamiliar program. The assessment section sets the three components side by side at forty, forty and twenty, and flags the two topics with no GCSE ancestor, functional programming and Big Data, as the ones squeezed into the final term. The preparation section gives each component its own plan and names the commonest mistake for each. The project is referenced and never touched, with the board comparison left to the existing NEA page. Lesson family: an examination that tests navigating somebody else\'s work rather than producing your own.',
    requiredMentions: ['Skeleton Program', 'Electronic Answer Document', 'On-screen exam', '75 marks'],
    sources: [
      { claim: 'AQA AS and A-level Computer Science (7516, 7517) specification, version 1.6, 31 July 2023: all three components with formats, lengths, marks and weightings, the preliminary material and skeleton program, the electronic answer document, the supported languages and the language preference rule, and the A-level subject content list.', url: 'https://www.aqa.org.uk/subjects/computer-science-and-it/as-and-a-level/computer-science-7516-7517' }
    ],
    rejectedClaims: [
      'That version 1.6 is necessarily current: it is the version read, and the page tells readers to check AQA and ask their school.',
      'The content of any particular year\'s skeleton program or preliminary material: those are issued per series and none was read.',
      'Board-specific project mark breakdowns: those belong to the A-level coursework page, which compares AQA and OCR directly.',
      'Grade boundaries, pass rates or entry numbers for 7517: none was read at a primary source for this build.',
      'AS-level detail beyond noting the qualification exists: this page is about the A-level, and the AS components differ.',
      'Any promise about a grade, and any offer to help with the project, which we decline as a matter of policy.'
    ]
  }
};
