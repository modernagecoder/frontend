'use strict';
// HSC Software Engineering help (ag- exam door, Australia cluster Phase 1 preview, row 3).
// Facts read raw on 7 October 2026 at the NSW Curriculum site (curriculum.nsw.edu.au, Software
// Engineering 11-12 Syllabus (2022): course content, assessment, HSC examination specification),
// the NSW Government HSC exam papers pages for Software Engineering and for the Software Design and
// Development archive, and NESA official notice 34/26 (16 September 2026) with its take-home
// assessment FAQs. Year 11: Programming Fundamentals 40, The Object-Oriented Paradigm 40, Programming
// Mechatronics 40 (120 hours). Year 12: Secure Software Architecture 30, Programming for the Web 30,
// Software Automation 30, Software Engineering Project 30 (120 hours). HSC exam: 80 marks, on a
// computer, 2 hours 30 minutes including 10 minutes reading time; objective-response approx. 20 marks
// (14 to 18 items, 1 to 4 marks each); short-answer approx. 60 marks (16 to 18 items, at least three
// worth 4 to 8 marks). School-based: knowledge and understanding 50, practical application 50; one
// take-home task worth no more than 15%; tasks weighted between 10% and 40%. Spine: equivalence
// partitioning of test data with a desk check (family checked free site-wide on 7 October 2026).
// We never write, edit or debug any part of a student's assessed project.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'HSC SOFTWARE ENGINEERING', label: 'HSC Software Engineering help', blurb: 'The NSW course that replaced Software Design and Development: its seven focus areas, the online HSC exam, and the testing habit it rewards.' },
  slug: 'hsc-software-engineering-help',
  code: 'hse',
  accent: '#185A96',
  accentRationale: 'HSC Software Engineering: a muted harbour blue (5.8:1 on #EDE7DA), at least 11 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'HSC Software Engineering help',
  title: 'HSC Software Engineering Help | NSW Year 11 and 12 Online',
  description: 'HSC Software Engineering help for NSW Year 11 and 12: the seven focus areas, the 80-mark online exam, testing technique, and the AI rules. We never write projects.',
  ogDescription: 'The NSW Software Engineering course explained from the syllabus itself: Year 11 and Year 12 focus areas and hours, the online HSC exam, school-based assessment limits, and a test-design habit that earns marks.',
  twitterDescription: 'HSC Software Engineering, from the NSW syllabus: focus areas, the online exam and the testing habit it rewards.',
  pageName: 'HSC Software Engineering Help',
  webPageDescription: 'Support for NSW students taking Software Engineering 11-12: course structure and hours, the HSC examination specification, school-based assessment requirements, equivalence partitioning and desk checking, and the NESA rules on AI in assessment.',
  courseDescription: 'Live online teaching in Python, object-oriented programming, web development and secure software for NSW Year 11 and Year 12 Software Engineering students, without writing any assessed work.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'HSC Software Engineering',
  navLinks: [
    { href: '#course', label: 'The course' },
    { href: '#exam', label: 'The HSC exam' },
    { href: '#testing', label: 'Test design' },
    { href: '#integrity', label: 'AI and the project' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New South Wales &middot; Software Engineering 11-12 &middot; Live online',
  h1: 'HSC Software Engineering help',
  lede: 'Software Engineering is the newest computing course in the NSW HSC, and it shows. Past papers are thin, older revision guides were written for Software Design and Development, and the exam is sat on a computer with audio and video questions. Students arrive in Year 11 able to code a little, then meet object-oriented design, a mechatronics unit, secure architecture, web programming, automation and a major project inside two years. This page sets out what the syllabus actually contains, how the HSC exam is built, what NESA now says about AI in school-based tasks, and one testing habit that pays off in every focus area. We teach the programming and the technique. The project stays the student\'s own.',
  secondaryCta: { href: '#testing', label: 'See the test-design habit' },
  wa: 'Hello Modern Age Coders, I would like a free class about HSC Software Engineering in NSW.',
  heroNote: 'Syllabus read at source &middot; Technique, not ghost-writing &middot; Classes after school in NSW time',
  spec: [
    ['Course', 'Software Engineering 11-12 (2022)'],
    ['Year 11', '3 focus areas, 120 hours'],
    ['Year 12', '4 focus areas, 120 hours'],
    ['HSC exam', '80 marks, on a computer'],
    ['Exam time', '2 hours 30, with 10 minutes reading'],
    ['Replaced', 'Software Design and Development'],
    ['We teach', 'Code, design and test technique'],
    ['We never', 'Write or edit the project']
  ],
  capsuleQ: 'In short',
  capsule: 'HSC Software Engineering is the NSW Stage 6 course that replaced Software Design and Development. Year 11 covers programming fundamentals, object-oriented design and mechatronics; Year 12 covers secure architecture, web programming, automation and a major project. The HSC exam is worth 80 marks, sat on a computer over 2 hours 30 minutes. We teach the coding and testing technique; students write their own projects.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses that line up with the syllabus',
    lede: 'Fluency first, then the web and security units that Year 12 leans on.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'HSE / 01', title: 'Python from the ground up', note: 'Variables to classes, with tracing before running: the Programming Fundamentals and object-oriented ground in one place.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'HSE / 02', title: 'Web development, front to back', note: 'Requests, responses, databases and front ends: the territory of Programming for the Web.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', code: 'HSE / 03', title: 'Defensive security for teens', note: 'Input validation, authentication and safe data handling, which Secure Software Architecture expects.' }
    ]
  },

  sections: [
    {
      id: 'course', tint: 'tint', eyebrow: 'What the syllabus contains',
      h2: 'Seven focus areas across two years',
      lede: 'The structure below is the syllabus\'s own, with NESA\'s indicative hours. Read on the NSW Curriculum site on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Software Engineering 11-12 (2022): focus areas and indicative hours', head: ['Year', 'Focus area', 'Indicative hours'], rows: [
          ['Year 11', 'Programming Fundamentals', '40'],
          ['Year 11', 'The Object-Oriented Paradigm', '40'],
          ['Year 11', 'Programming Mechatronics', '40'],
          ['Year 12', 'Secure Software Architecture', '30'],
          ['Year 12', 'Programming for the Web', '30'],
          ['Year 12', 'Software Automation', '30'],
          ['Year 12', 'Software Engineering Project', '30']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Each year carries 120 hours, and the balance is telling. Year 11 builds a programmer: fundamentals, then objects, then code that drives hardware in the mechatronics unit. Year 12 builds an engineer: thinking about security before features, building for the web, automating repetitive work, and managing a substantial project from idea to evaluation.',
            'The syllabus describes the Year 12 project as the place where students "further develop project management skills", which is a useful clue. Marks in this course follow evidence of a disciplined process, not just a program that runs on the day.'
          ],
          right: [
            'The course replaced Software Design and Development. The NSW exam papers page now files the older course under an archive with a plain warning: "These papers are not from the current syllabus." The archive runs to the 2024 paper, and the first Software Engineering exam pack published is for 2025.',
            'That matters for revision. An older guide will drill topics that are no longer examined and skip whole units that are. Students should revise from the current syllabus and its course specifications, then use the archive only for general problem-solving practice.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/tas/software-engineering-11-12-2022/overview" rel="noopener" target="_blank">NSW Curriculum, Software Engineering 11-12 Syllabus (2022)</a>; <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/software-engineering" rel="noopener" target="_blank">Software Engineering HSC exam papers</a> and the <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/software-design-and-development-archive" rel="noopener" target="_blank">Software Design and Development archive</a>. Pages opened on 7 October 2026. NESA does not endorse or work with Modern Age Coders.' }
      ]
    },
    {
      id: 'exam', tint: 'deep', eyebrow: 'How the HSC exam is built',
      h2: 'An 80-mark paper, sat on a computer',
      lede: 'NESA publishes the examination specification with the syllabus. The figures below are quoted from it, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Software Engineering HSC examination specification', head: ['Part', 'Marks', 'What NESA specifies'], rows: [
          ['Whole paper', '80', 'Undertaken by students using a computer; 2 hours and 30 minutes including 10 minutes reading time; headphones required for questions with video and audio stimulus'],
          ['Objective-response items', 'Approx. 20', 'Each item worth 1 to 4 marks; 14 to 18 items in total; may share stimulus with other items'],
          ['Short-answer items', 'Approx. 60', '16 to 18 items in total; at least three worth 4 to 8 marks; may share stimulus with other items']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Three quarters of the paper is short answer, and the longer items are where students either show method or lose it. A response that names a technique, applies it to the given stimulus and states what the result means reads very differently from one that describes code in general terms.',
            'Shared stimulus is the other feature to practise. Several questions may hang off one scenario, so a student who misreads the scenario early carries the error through every item attached to it.'
          ],
          right: [
            'School-based assessment runs alongside the exam. For Year 12, NESA sets two mandatory components, knowledge and understanding of course content at 50 per cent and practical application at 50 per cent, and limits schools to one take-home task worth no more than 15 per cent.',
            'NESA also advises schools to give individual tasks a weighting between 10 and 40 per cent. In practice that means most marks come from work done under supervision, which is exactly why technique has to live in the student\'s head and hands, not in a file someone else prepared.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/tas/software-engineering-11-12-2022/assessment" rel="noopener" target="_blank">NSW Curriculum, Software Engineering 11-12 assessment, HSC examination specification and school-based assessment requirements</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'testing', tint: 'tint', eyebrow: 'The habit worth practising',
      h2: 'Equivalence partitioning, then a desk check',
      lede: 'Every focus area eventually asks the same question: how do you know the code works? The answer that earns marks is a deliberate choice of test data, followed by a written trace.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Split the inputs into classes', p: 'Group every possible input into partitions that the program should treat the same way. One value from each partition stands for the rest, so ten thousand possible inputs become a handful of tests.' },
          { h3: '2. Add the edges', p: 'For each partition, test the values at its boundaries as well as one from the middle. Most faults hide where one rule hands over to the next.' },
          { h3: '3. Trace by hand', p: 'Before running anything, step through the algorithm on paper for each chosen input and record every variable. Where the trace and the expected output disagree, the fault is found without a debugger.' }
        ] },
        { kind: 'p', text: 'A worked illustration, written by us for practice: a school canteen app charges a lunch price by year level. Years 7 to 10 pay the junior price, Years 11 and 12 the senior price, staff a flat rate, and anything else is rejected. The function receives a year level as a whole number, with 0 standing for staff.' },
        { kind: 'table', caption: 'Partitions for the canteen price rule, with chosen test values', head: ['Partition', 'Expected behaviour', 'Test values'], rows: [
          ['Staff (0)', 'Staff rate', '0'],
          ['Junior (7 to 10)', 'Junior price', '7, 8, 10'],
          ['Senior (11 to 12)', 'Senior price', '11, 12'],
          ['Below range (negative)', 'Rejected', '-1'],
          ['Gap (1 to 6)', 'Rejected: not a secondary year', '1, 6'],
          ['Above range (13 and up)', 'Rejected', '13']
        ] },
        { kind: 'table', caption: 'Desk check of a faulty version that tests "year > 10" for senior and "year > 6" for junior, in that order', head: ['Input', 'year > 10?', 'year > 6?', 'Output', 'Expected', 'Result'], rows: [
          ['0', 'No', 'No', 'Staff rate', 'Staff rate', 'Pass'],
          ['7', 'No', 'Yes', 'Junior', 'Junior', 'Pass'],
          ['12', 'Yes', 'Not reached', 'Senior', 'Senior', 'Pass'],
          ['13', 'Yes', 'Not reached', 'Senior', 'Rejected', 'Fail: no upper limit'],
          ['6', 'No', 'No', 'Staff rate', 'Rejected', 'Fail: gap treated as staff']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Two faults surface from six partitions and a five-row trace, and neither would appear if the tests were 7, 11 and 0, the values most students pick first. That is the point of partitioning: it forces the uncomfortable inputs onto the list.',
            'The same method transfers directly. In Programming for the Web it becomes validation of form input; in Secure Software Architecture it becomes the habit of treating every input as hostile until a partition says otherwise.'
          ],
          right: [
            'In the exam, a short-answer item that asks for test data rewards exactly this structure: name the partitions, justify the boundary values, and state the expected output for each. A list of random numbers with no reasoning collects little.',
            'In the Year 12 project, a partition table and a dated trace are the kind of evidence that shows a teacher the testing was done by the student, which matters more now that NESA has tightened the rules on take-home work.'
          ] }
      ]
    },
    {
      id: 'integrity', tint: '', eyebrow: 'AI and the project',
      h2: 'What NESA now says about AI in assessment',
      lede: 'NESA issued official notice 34/26 on 16 September 2026, changing the ACE Rules for take-home tasks. The lines below are quoted from NESA\'s own notice and FAQs, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'NESA on take-home tasks and generative AI', head: ['Question', 'What NESA says'], rows: [
          ['Who do the changes apply to?', 'Year 12 students commencing HSC courses from Term 4, 2026, and Year 11 students commencing Preliminary courses from Term 1, 2027'],
          ['What is the limit?', 'One take-home task worth no more than 15% in Software Engineering\'s Year 12 assessment program'],
          ['Why the cap?', 'The 15% cap enables schools to lessen the risks posed by AI while still providing students a variety of assessment opportunities'],
          ['What must teachers certify?', 'Teachers must still certify that any marks awarded reflect what the student knows and can do, not using AI'],
          ['How must tasks be designed?', 'Schools must design formal assessment tasks to ensure marks are reflective of a student\'s own knowledge, skills and understanding, and not the use of generative artificial intelligence']
        ] },
        { kind: 'p', text: 'The direction is clear: more marks earned under supervision, and close attention to whose work a submission really is. A student who understands every line of their own project, and can explain why each test value was chosen, is in a strong position under these rules. A student who leaned on a tool, or on another person, is not.' },
        { kind: 'p', text: 'Our rule follows NESA\'s. We teach programming, design and testing with our own examples. We talk about a student\'s project only in general terms, and we do not write, edit, debug or review any code or documentation that will be submitted for assessment. If a student asks, the answer is no, and we explain why.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/nesa/news/all/changes-ace-rules-take-home-tasks-artifical-intelligence" rel="noopener" target="_blank">NESA official notice 34/26, Changes to ACE Rules concerning take-home assessment tasks and the use of artificial intelligence</a>; <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/nesa/news/all/limits-take-home-assessments-faqs" rel="noopener" target="_blank">NESA, limits on take-home assessments: FAQs</a>. Checked on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs from Year 10 to the HSC',
    lede: 'Where a student starts depends on how much they can code unaided, not on their year.',
    table: { caption: 'From first programs to a finished Year 12 project', head: ['When', 'Rung', 'The sign it is secure'], rows: [
      ['Year 10 into 11', '1. Fluency', 'Writes and debugs a program of a hundred lines without help'],
      ['Year 11', '2. Objects', 'Designs classes that hide their data and can explain why'],
      ['Year 11 into 12', '3. Testing', 'Chooses test data by partition and traces it by hand'],
      ['Year 12', '4. Engineering', 'Plans, builds and evaluates a project with dated evidence']
    ] },
    left: { h3: 'If Year 11 feels fast', ps: [
      'The jump from scripts to objects is where most students stall. It usually means fundamentals were rushed, and a few weeks of deliberate tracing practice fixes more than any amount of new syntax.',
      'Mechatronics depends on the hardware each school provides. We teach the control logic in code, and leave the electronics to the school lab.'
    ] },
    right: { h3: 'Beyond the HSC', ps: [
      'A student hooked on algorithm puzzles can take the Australian Informatics Olympiad next; our <a class="ag-inline-link" href="/australian-maths-trust-amc-aio-cat-preparation">AIO and CAT preparation page</a> explains it.',
      'The habits here, test design and written evidence, are what university assignments and first engineering jobs ask for.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Software Engineering students',
    lede: 'Grouped by the part of the syllabus they support. Full syllabuses open from each card.',
    bands: [
      { num: 'I', h3: 'Year 11 foundations', sub: 'Fundamentals and objects', courses: [
        { code: 'HSE / Y11 / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most NSW classes use, from first loop to classes.' },
        { code: 'HSE / Y11 / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For schools teaching objects in Java, or students who want a second language.' },
        { code: 'HSE / Y11 / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Searching, sorting and tracing, reasoned before coded.' }
      ] },
      { num: 'II', h3: 'Year 12 focus areas', sub: 'Web, security and automation', courses: [
        { code: 'HSE / Y12 / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'Front end, back end and a database, built in tested slices.' },
        { code: 'HSE / Y12 / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Defensive habits for code that handles real users and data.' },
        { code: 'HSE / Y12 / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Scripts that clean and process data, close kin to Software Automation.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'For students aiming beyond the course', courses: [
        { code: 'HSE / EXT / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Correct code under time pressure, useful for olympiads and exams alike.' },
        { code: 'HSE / EXT / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Building and honestly evaluating models in Python.' },
        { code: 'HSE / EXT / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Interfaces and state, for students who want to ship something real.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly classes, timed for New South Wales',
    lede: 'Our teachers sit in India, and New South Wales is ahead of them: by four and a half hours in winter, five and a half once NSW daylight saving begins in October. A 5 pm lesson in Sydney therefore lands at 11.30 am or 12.30 pm on the teacher\'s clock, a comfortable hour for focused senior work.',
    slots: [
      { time: 'Weekday after school', l: 'The usual choice in Year 11 and Year 12.' },
      { time: 'Weekend morning', l: 'For longer sessions on a focus area or timed practice.' },
      { time: 'School holidays', l: 'Short intensives before trials or the HSC.' }
    ],
    cells: [
      { h3: 'Technique, not answers', p: 'We teach with our own examples and never with code or documents that will be assessed.' },
      { h3: 'Tracing taught explicitly', p: 'Desk checks, partitions and boundary values, practised until they are automatic.' },
      { h3: 'Exam-style practice', p: 'Short-answer responses that name a method, apply it to a stimulus and state the result.' },
      { h3: 'Senior groups of five to ten', p: 'Year 11 and 12 students at a matching level, each one answering out loud every week.' },
      { h3: 'Solo sessions', p: 'For one focus area that needs repair before trial exams.' },
      { h3: 'No promises', p: 'No band or mark is promised. The work and the result belong to the student.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Personal projects, none of them school assessment. The rest are collected in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Word for word from Google, as students and parents posted them.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly charge in US dollars, identical for every family outside India. Nothing is paid to join and nothing ties you in past the current month.',
    free: ['A real lesson with a teacher', 'An honest view of the gaps', 'No card details'],
    group: ['Five to ten students at one level', 'The same teacher each week', 'Practice marked and discussed', 'A certificate at the end'],
    one: ['A teacher for one student', 'Aimed at specific gaps', 'Useful before trials and the HSC']
  },

  faq: {
    eyebrow: 'Questions about the course',
    h2: 'What NSW students and parents ask',
    items: [
      { q: 'What is HSC Software Engineering?', a: 'It is the NSW Stage 6 computing course set out in the Software Engineering 11-12 Syllabus (2022). Year 11 covers Programming Fundamentals, The Object-Oriented Paradigm and Programming Mechatronics; Year 12 covers Secure Software Architecture, Programming for the Web, Software Automation and a Software Engineering Project.' },
      { q: 'Did it replace Software Design and Development?', a: 'Yes. NESA now lists Software Design and Development papers in an archive marked as not from the current syllabus, running up to the 2024 paper, and the first Software Engineering exam pack published is for 2025.' },
      { q: 'How long is the HSC exam?', a: '2 hours and 30 minutes including 10 minutes reading time. It is worth 80 marks and is sat on a computer, with headphones needed for audio and video questions.' },
      { q: 'How are the exam marks split?', a: 'About 20 marks of objective-response items, 14 to 18 of them worth 1 to 4 marks each, and about 60 marks of short-answer items, 16 to 18 in total with at least three worth 4 to 8 marks.' },
      { q: 'How many hours does each focus area take?', a: 'NESA gives indicative hours: 40 each for the three Year 11 areas, and 30 each for the four Year 12 areas, 120 hours per year.' },
      { q: 'What is equivalence partitioning?', a: 'A way of choosing test data. Inputs are grouped into classes the program should treat alike, one value is tested from each class, and the boundary values of each class are added, because faults cluster where one rule meets the next.' },
      { q: 'Will you help write my major project?', a: 'No. We teach programming, design and testing with our own examples, and we do not write, edit, debug or review anything that will be submitted for assessment. NESA requires marks to reflect what the student knows and can do.' },
      { q: 'Can AI be used for school tasks?', a: 'NESA has limited Year 12 programs to one take-home task worth no more than 15 per cent, and requires tasks to be designed so marks reflect the student\'s own knowledge rather than generative AI. Each school sets its own detailed rules within that.' },
      { q: 'Do you teach Programming Mechatronics?', a: 'We teach the control logic in code. The mechatronics unit uses hardware supplied by each school, and the electronics side belongs in the school lab.' },
      { q: 'Which time of day works for NSW students?', a: 'Late afternoon in NSW suits most seniors, and it falls around midday for our teachers. The exact weekly time is settled together after the free class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Australian computing students',
    lede: 'Competitions beside the course, the national picture, and the maths that sits under it.',
    items: [
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Australian competitions calendar', p: 'Coding, maths and AI contests, month by month, checked at each organiser.' },
      { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'Informatics olympiad preparation', p: 'The AIO for programmers who want harder problems.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every state, every age, and how online classes work across time zones.' },
      { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning in Australia', p: 'For students whose projects include a model.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'The algebra and logic that programming leans on.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'The method behind every class, set out plainly.' }
    ]
  },

  start: {
    h2: 'Start with a free class on the skills',
    lede: 'Tell us the year level, the focus area and where the student feels stuck. The free class works on that skill with our own examples, never with assessed work.',
    readFirst: 'Reading before talking? Course outlines live on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, our lesson method is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> sequences the programming topics.',
    note: 'WhatsApp gets the swiftest answer. The +91 prefix is Indian because the school runs from India; nothing here claims a Sydney office.',
    formNote: 'No card, no obligation. One reply to arrange the class.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMT competitions' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'We teach the technique; the project stays the student\'s own'
  },

  personalityCss: `
.ag-root.ag-hse .ag-hero-grid { gap: clamp(1.1rem, 3vw, 2.6rem); }
.ag-root.ag-hse .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-hse .ag-capsule { border-left-width: 6px; }
.ag-root.ag-hse .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-hse .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-hse .ag-table th { letter-spacing: 0.02em; }
.ag-root.ag-hse .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-hse .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'NSW Education Standards Authority (NESA). Software Engineering 11-12 Syllabus (2022), read at curriculum.nsw.edu.au on 7 October 2026: Year 11 course (120 hours) with Programming Fundamentals 40, The Object-Oriented Paradigm 40, Programming Mechatronics 40; Year 12 course (120 hours) with Secure Software Architecture 30, Programming for the Web 30, Software Automation 30, Software Engineering Project 30. HSC examination specification: "The examination will be worth 80 marks. It will be undertaken by students using a computer. The time allowed is 2 hours and 30 minutes including 10 minutes reading time." Objective-response approx. 20 marks, 14 to 18 items, 1 to 4 marks each; short-answer approx. 60 marks, 16 to 18 items, at least three worth 4 to 8 marks. Year 12 school-based assessment: knowledge and understanding 50, practical application 50, "subject to a limit of one take-home task worth no more than 15%"; tasks weighted between 10% and 40%.',
    localProject: 'Test-data design for the HSC: equivalence partitioning and a desk check, worked on an original canteen price rule by year level (partitions staff, Years 7 to 10, Years 11 and 12, negative, the 1 to 6 gap, 13 and above), with a faulty version whose trace exposes two failures (13 accepted as senior; 6 treated as staff) that the first-instinct test values 7, 11 and 0 would miss.',
    requiredMentions: ['Software Engineering 11-12', 'Programming Mechatronics', 'Secure Software Architecture', 'Software Automation', '80 marks', '14 to 18 items', 'one take-home task worth no more than 15', 'notice 34/26', 'equivalence partitioning', 'These papers are not from the current syllabus'],
    sources: [
      { claim: 'NSW Curriculum, Software Engineering 11-12 Syllabus (2022), overview and course structure with indicative hours.', url: 'https://curriculum.nsw.edu.au/learning-areas/tas/software-engineering-11-12-2022/overview' },
      { claim: 'NSW Curriculum, Software Engineering 11-12 assessment: HSC examination specification and Year 11 and Year 12 school-based assessment requirements.', url: 'https://curriculum.nsw.edu.au/learning-areas/tas/software-engineering-11-12-2022/assessment' },
      { claim: 'NSW Government, Software Engineering HSC exam papers: Software Engineering 2025 HSC exam pack listed.', url: 'https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/software-engineering' },
      { claim: 'NSW Government, Software Design and Development HSC exam papers archive: packs 2015 to 2024 and "These papers are not from the current syllabus."', url: 'https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/software-design-and-development-archive' },
      { claim: 'NESA official notice 34/26, 16 September 2026: changes to ACE Rules on take-home tasks and AI; who the changes apply to.', url: 'https://www.nsw.gov.au/education-and-training/nesa/news/all/changes-ace-rules-take-home-tasks-artifical-intelligence' },
      { claim: 'NESA, limits on take-home assessments FAQs: the 15% cap rationale and teacher certification wording.', url: 'https://www.nsw.gov.au/education-and-training/nesa/news/all/limits-take-home-assessments-faqs' }
    ],
    rejectedClaims: [
      'The year Year 11 Software Engineering first started in schools: not stated on the pages read; the page states only that the first exam pack published is for 2025.',
      'Any band distribution, cohort size or pass rate: not quoted, and no band is promised.',
      'Detailed content of each focus area beyond the names and hours: the course specifications document was not read, so topics inside focus areas are not listed.',
      'Any claim that we teach mechatronics hardware: we teach the control logic in code only.',
      'Any affiliation with NESA: none, stated on the page.',
      'Any offer to write, edit, debug or review assessed work: refused, stated on the page.'
    ]
  }
};
