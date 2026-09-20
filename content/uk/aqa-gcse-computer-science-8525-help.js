'use strict';
// AQA GCSE Computer Science 8525 help (ag- exam door, England; UK cluster Phase 3).
// Source: AQA, GCSE Computer Science (8525) Specification, for teaching from September 2020, for GCSE
// exams in 2022 onwards, Version 1.2 dated 29 November 2022, read from AQA's own PDF on 20 September
// 2026. Verbatim:
//  - "This qualification is linear. Linear means that students will sit all their exams at the end of
//    the course."
//  - Paper 1: Computational thinking and programming skills. "Computational thinking, code tracing,
//    problem-solving, programming concepts including the design of effective algorithms and the
//    designing, writing, testing and refining of code." Written exam: 2 hours, 90 marks, 50% of GCSE.
//    "A mix of multiple choice, short answer and longer answer questions."
//  - Paper 2: Computing concepts. Written exam: 1 hour 45 minutes, 90 marks, 50% of GCSE. "A mix of
//    multiple choice, short answer, longer answer and extended response questions assessing SQL
//    programming skills and theoretical knowledge."
//  - THE SPINE: "Exams will always present algorithms using the current version of the AQA
//    pseudo-code"; "For exams from 2022, we will support the following programming languages: C#,
//    Python (version 3), VB.NET"; "In paper 1 students will be required to design, write, test and
//    refine program code in one of the three languages above"; and "Exam questions will explicitly
//    state in what form the response needs to be provided. This will be, for example, pseudo-code,
//    program code or a flowchart, and students must respond as instructed."
//  - "Students need a theoretical understanding of all the topics in this section for the paper 1 exam
//    even if the programming language(s) taught does not support all of the topics."
//  - "When they are writing computer programs in an exam they will need to ensure they use meaningful
//    identifier names, use suitable data types and that all logic flow is clearly identifiable to
//    examiners."
//  - The five things students should have "sufficient practical experience" of before paper 1:
//    structuring programs into modular parts "with clear documented interfaces"; including
//    "authentication and data validation systems/routines"; writing, debugging and testing programs so
//    as to "articulate how programs work and argue using logical reasoning for the correctness of
//    programs in solving specified problems"; designing and applying test data "(normal, boundary and
//    erroneous)"; and "refining programs in response to testing outcomes".
//  - Subject content sections 3.1 to 3.8, with paper 1 drawn from 3.1 and 3.2 and paper 2 from 3.3 to
//    3.8.
// Spine: three notations, one paper. Questions arrive in AQA pseudo-code, answers may be required in
// pseudo-code, program code or a flowchart, and program code must be in one of three named languages.
// A candidate who writes fluent Python into a question that asked for a flowchart has lost the marks
// before the logic is even read.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'AQA 8525', blurb: 'Questions printed in AQA pseudo-code, answers in whichever form the question demands, and program code in one of three languages.' },
  slug: 'aqa-gcse-computer-science-8525-help',
  code: 'aqg',
  accent: '#394060',
  accentRationale: 'AQA 8525: a slate navy from the solver (8.21:1 on every paper tint), darker and cooler than the UK hub blue so the two never read as the same page',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'AQA GCSE Computer Science 8525 help',
  title: 'AQA GCSE Computer Science 8525 Help | Papers 1 and 2',
  description: 'Help with AQA GCSE Computer Science 8525: both papers, the three permitted languages, AQA pseudo-code, and answering in the form the question asks. First class free.',
  ogDescription: 'AQA prints its algorithms in its own pseudo-code and accepts program code in three languages. Answering in the wrong form costs marks before the logic is read.',
  twitterDescription: 'AQA GCSE Computer Science 8525 tutoring, taught to the specification. First class free.',
  pageName: 'AQA GCSE Computer Science 8525 Help',
  webPageDescription: 'Live online tuition for AQA GCSE Computer Science 8525, covering both written papers, the three supported programming languages and AQA pseudo-code.',
  courseDescription: 'Live online teaching for students taking AQA GCSE Computer Science 8525, covering computational thinking and programming for paper 1 and computing concepts for paper 2.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'AQA 8525 help',
  navLinks: [
    { href: '#papers', label: 'Both papers' },
    { href: '#notation', label: 'Three notations' },
    { href: '#practical', label: 'Practical experience' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; AQA 8525 &middot; Years 10 and 11',
  h1: 'AQA GCSE Computer Science 8525 help',
  lede: 'There is a detail in the AQA specification that decides a surprising number of marks, and almost no student can state it. Exam questions "will always present algorithms using the current version of the AQA pseudo-code", program code must be written in C#, Python 3 or VB.NET, and the specification adds that questions "will explicitly state in what form the response needs to be provided. This will be, for example, pseudo-code, program code or a flowchart, and students must respond as instructed". Three notations live in the same paper. A candidate who writes beautiful Python into a question that asked for a flowchart has lost those marks before an examiner has read a line of the logic. This page covers both papers, all three notations, and the practical experience AQA says a student should have before they sit paper 1.',
  secondaryCta: { href: '#notation', label: 'The three notations' },
  wa: 'Hello Modern Age Coders, I would like a free first class for AQA GCSE Computer Science 8525.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Taught to the 8525 specification',
  spec: [
    ['Qualification', 'AQA GCSE Computer Science 8525'],
    ['Structure', 'Linear, both papers at the end'],
    ['Paper 1', '2 hours, 90 marks, 50 per cent'],
    ['Paper 2', '1 hour 45, 90 marks, 50 per cent'],
    ['Languages', 'C#, Python 3 or VB.NET'],
    ['Questions in', 'AQA pseudo-code'],
    ['Group', 'Five to ten at one level'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'AQA 8525 is a linear GCSE: two written papers, both sat at the end of the course, each 90 marks and each worth half. Paper 1 runs two hours and covers computational thinking and programming; paper 2 runs an hour and three quarters and covers everything else, including SQL. Three things trip students up. Questions present algorithms in AQA pseudo-code, not in the language the class was taught. Program code must be written in C#, Python 3 or VB.NET. And each question states the form the answer must take, whether pseudo-code, program code or a flowchart, so answering in the wrong notation costs the marks outright. We teach the content and the exam habits together, in groups of five to ten or one to one. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for AQA candidates',
    lede: 'The specification content and the programming fluency it assumes. Each card opens a full syllabus.',
    items: [
      { course: 'gcse-computer-science-course', code: 'AQA / 01', title: 'GCSE Computer Science', note: 'The whole specification taught in order, with paper 1 and paper 2 content kept distinct so revision knows which is which.' },
      { course: 'python-complete-masterclass-teens', code: 'AQA / 02', title: 'Python for Teens', note: 'One of the three languages AQA supports, taught to the point where writing code by hand is not frightening.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'AQA / 03', title: 'Algorithms and Data Structures', note: 'Searching, sorting and the tracing questions that paper 1 leans on, worked on paper first.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'Both papers',
      h2: 'Two papers, ninety marks each, nothing in between',
      lede: 'Everything here is from AQA\'s own specification for 8525, version 1.2 dated 29 November 2022, for teaching from September 2020 and exams from 2022.',
      body: [
        { kind: 'table', caption: 'AQA 8525 at a glance, in the specification\'s own terms', head: ['', 'Paper 1: Computational thinking and programming skills', 'Paper 2: Computing concepts'], rows: [
          ['Length', 'Written exam, 2 hours', 'Written exam, 1 hour 45 minutes'],
          ['Marks', '90', '90'],
          ['Weighting', '50 per cent of the GCSE', '50 per cent of the GCSE'],
          ['Content drawn from', 'Fundamentals of algorithms, and Programming', 'Data representation, computer systems, networks, cyber security, databases and SQL, and the ethical, legal and environmental section'],
          ['What is assessed', '"Computational thinking, code tracing, problem-solving, programming concepts including the design of effective algorithms and the designing, writing, testing and refining of code"', '"SQL programming skills and theoretical knowledge"'],
          ['Question types', 'Multiple choice, short answer and longer answer', 'Multiple choice, short answer, longer answer and extended response']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Linear means what it says',
          left: [
            'The specification is explicit: "This qualification is linear. Linear means that students will sit all their exams at the end of the course." There is no unit to bank in Year 10 and nothing to resit along the way.',
            'That shapes the two years more than any content decision. Everything has to still be there in June of Year 11, which makes spaced revisiting worth more here than in a modular subject.'
          ],
          rightH3: 'Paper 2 is not the easy one',
          right: [
            'Students often treat paper 2 as the theory paper and paper 1 as the hard one. Paper 2 explicitly assesses SQL programming skills as well as theory, and it carries extended response questions that reward structured written argument.',
            'It is also shorter by fifteen minutes for the same ninety marks, which changes the pace required.'
          ] },
        { kind: 'p', html: 'A note on scope. Paper 1 draws on the algorithms and programming sections, and paper 2 on everything else, but AQA is clear that knowledge crosses over: understanding of binary is directly assessed in paper 2 while "the underlying knowledge and principles may be indirectly required for questions in paper 1".' },
        { kind: 'source', html: 'Source, read 20 September 2026: <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/computer-science-and-it/gcse/computer-science-8525" rel="noopener" target="_blank">AQA GCSE Computer Science (8525) specification</a>, version 1.2, 29 November 2022. Always check the current version on AQA\'s own site, and your school will know which one applies.' }
      ]
    },
    {
      id: 'notation', tint: 'deep', eyebrow: 'Three notations',
      h2: 'Read the instruction before you write a line',
      lede: 'This is the part that costs marks for reasons that have nothing to do with ability.',
      body: [
        { kind: 'table', caption: 'What each notation is for', head: ['Notation', 'Where it appears', 'What a student needs'], rows: [
          ['AQA pseudo-code', 'In the questions. "Exams will always present algorithms using the current version of the AQA pseudo-code"', 'To read it fluently. It is nobody\'s real language and every candidate meets it'],
          ['Program code', 'In answers, where the question asks for it, in C#, Python 3 or VB.NET', 'Fluency in one of the three, by hand, without an editor to correct them'],
          ['Flowcharts', 'In answers, where the question asks for one', 'The conventions, practised, because an approximate flowchart is not a flowchart'],
          ['Any suitable format', 'Where pseudo-code is an accepted response, AQA does not require its own version', 'Enough discipline that a home-made notation still reads unambiguously']
        ] },
        { kind: 'capsule', mt: true, q: 'The sentence to memorise', p: 'AQA states that "Exam questions will explicitly state in what form the response needs to be provided. This will be, for example, pseudo-code, program code or a flowchart, and students must respond as instructed."' },
        { kind: 'two', mt: true,
          leftH3: 'Choosing a language',
          left: [
            'AQA supports three: "C#, Python (version 3), VB.NET", and paper 1 requires students to "design, write, test and refine program code in one of the three languages above". The school chooses, not the student, and it is worth asking in Year 9 which one your school teaches.',
            'Python is the common answer in English schools, and it is the one we teach. If a school has chosen C# or VB.NET we will say so plainly rather than pretend the transfer is seamless.'
          ],
          rightH3: 'And a rule about content',
          right: [
            'One line in the specification catches whole classes out: students "need a theoretical understanding of all the topics in this section for the paper 1 exam even if the programming language(s) taught does not support all of the topics".',
            'So a gap in the language taught is not a gap the exam will forgive. It has to be filled on paper, which is exactly the kind of thing a weekly class outside school is useful for.'
          ] },
        { kind: 'p', html: 'There is also a presentation standard that reads like advice and functions like a mark scheme. When writing programs in an exam, candidates "need to ensure they use meaningful identifier names, use suitable data types and that all logic flow is clearly identifiable to examiners". Single-letter variables and unindented code are not neutral choices in a paper marked by a human.' }
      ]
    },
    {
      id: 'practical', tint: '', eyebrow: 'Practical experience',
      h2: 'The five things AQA expects a student to have done',
      lede: 'The specification lists what a student should have "sufficient practical experience" of before sitting paper 1. It is a short list and it is a good revision checklist.',
      body: [
        { kind: 'table', caption: 'What the specification asks for, and how to get it', head: ['AQA expects experience of', 'What that looks like in practice'], rows: [
          ['Structuring programs into modular parts "with clear documented interfaces"', 'Writing subroutines that do one thing, with parameters and returns a reader can predict'],
          ['Including "authentication and data validation systems/routines"', 'Login checks and input validation built at least once, not just described'],
          ['Writing, debugging and testing programs, so as to "articulate how programs work and argue using logical reasoning for the correctness of programs"', 'Explaining out loud why a program is correct, which is the skill the longer questions actually test'],
          ['Designing and applying test data "(normal, boundary and erroneous)"', 'A test table built before the code, with all three types named'],
          ['"Refining programs in response to testing outcomes"', 'Changing a working program because the tests said so, and recording what changed']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The third one is the sleeper',
          left: [
            'Arguing for the correctness of a program is the skill that separates a grade 6 from a grade 8 on the longer paper 1 questions, and it is almost never practised, because it looks like talking rather than coding.',
            'Our lessons do it every week: a student says what their program will do and why it is right, before it runs. It sounds slow and it is the fastest thing we do.'
          ],
          rightH3: 'And the fourth is free marks',
          right: [
            'Normal, boundary and erroneous. Three words, and a question asking for test data with all three types is the most reliably answerable question on the paper, provided the student has ever built such a table themselves.',
            'A student who has only tested by running the program until it looked fine has never met the vocabulary.'
          ] },
        { kind: 'p', html: 'We do not touch any assessed work, and 8525 has none, which makes this page simpler than the A-level ones. Everything here is exam preparation and ordinary teaching. For students carrying on to sixth form, <a class="ag-inline-link" href="/a-level-computer-science-nea-help">the A-level coursework page</a> covers what changes when a project does count.' },
        { kind: 'p', html: 'If you do not yet know which board your school uses, that question is worth asking before anything else. The <a class="ag-inline-link" href="/best-python-classes-online-uk">Python page</a> explains how differently the three English boards treat the language, and one of them examines it on a computer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four stages across Years 10 and 11',
    lede: 'A linear qualification rewards a plan that revisits rather than one that marches forward and never looks back.',
    table: { caption: 'Where a candidate should be, and when', head: ['Stage', 'Usually', 'What should be secure'], rows: [
      ['1. Fluent in one language', 'Early Year 10', 'Writing short programs by hand, with sensible identifiers and correct indentation'],
      ['2. Reading AQA pseudo-code', 'Mid Year 10', 'Tracing an unfamiliar algorithm printed in pseudo-code without rewriting it first'],
      ['3. Paper 2 content', 'Across both years', 'Data representation, networks, security, SQL, and the written-argument questions'],
      ['4. Exam behaviour', 'Year 11', 'Reading the instruction, answering in the form asked, and test tables with all three data types']
    ] },
    left: { h3: 'Stage two is usually missing', ps: [
      'Most students can write code and freeze at pseudo-code, because school teaching happens in an editor and the exam does not. It takes about four lessons to fix and it pays across both papers.',
      'The wider topic sequence is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Year 11 is for behaviour, not content', ps: [
      'By the spring the content argument is mostly settled and the marks are in habits: reading the instruction, showing logic clearly, and not abandoning a question that opens awkwardly.',
      'Lessons thin out in the weeks immediately before the papers and pick up afterwards.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for GCSE Computer Science students',
    lede: 'Grouped by what a candidate needs most. The free lesson decides which is the right starting point.',
    bands: [
      { num: 'I', h3: 'The specification', sub: 'Content, in order', courses: [
        { code: 'UK / AQ1 / 01', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'The full specification taught to the board a school actually uses.' },
        { code: 'UK / AQ1 / 02', slug: 'python-complete-masterclass-teens', title: 'Python in full', blurb: 'One of AQA\'s three supported languages, to the point of writing it by hand.' },
        { code: 'UK / AQ1 / 03', slug: 'mysql-database-complete-masterclass-college', title: 'Databases and SQL', blurb: 'The paper 2 section students most often meet for the first time in the exam.' }
      ] },
      { num: 'II', h3: 'Paper 1 skills', sub: 'Algorithms and code under a clock', courses: [
        { code: 'UK / AQ2 / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Searching, sorting and tracing, worked on paper where the exam will ask for them.' },
        { code: 'UK / AQ2 / 02', slug: 'python-ai-kids-masterclass', title: 'First Python', blurb: 'For Year 9 and Year 10 students who arrived from blocks and need the keyboard stage properly.' },
        { code: 'UK / AQ2 / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Decomposition and precise description, for students who find the wording harder than the code.' }
      ] },
      { num: 'III', h3: 'Beyond the GCSE', sub: 'For students carrying on', courses: [
        { code: 'UK / AQ3 / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'Something real to build once the specification stops being new.' },
        { code: 'UK / AQ3 / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Where the maths and the programming start to pull in the same direction.' },
        { code: 'UK / AQ3 / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Real datasets and honest measurement, which A level rewards heavily.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Written by hand, weekly, with reasons',
    lede: 'Teachers work from India on a clock that never shifts, which puts the UK five and a half hours behind from October and four and a half from March. Slots are agreed in UK time.',
    slots: [
      { time: 'After school', l: 'Where most Year 10 and 11 students settle.' },
      { time: 'Early evening', l: 'For students with a long journey or other commitments.' },
      { time: 'Weekend morning', l: 'Useful for longer exam-style practice in one sitting.' }
    ],
    cells: [
      { h3: 'Code on paper', p: 'Regular handwritten code, because that is the medium of both papers and an editor hides every weakness.' },
      { h3: 'Pseudo-code drills', p: 'Reading AQA pseudo-code until it is unremarkable. Most students can code and cannot yet read this.' },
      { h3: 'Read the instruction', p: 'Every practice question begins by naming the form the answer must take. It becomes automatic in weeks.' },
      { h3: 'Test tables early', p: 'Normal, boundary and erroneous, built before the code rather than after the marks are lost.' },
      { h3: 'Argue for correctness', p: 'A student says why the program is right before running it, which is what the longer questions reward.' },
      { h3: 'Groups by level', p: 'Five to ten students at one stage, which is where comparing two answers becomes possible.' }
    ]
  },

  projectsH2: 'Work our students have built',
  projectsLede: 'Four published projects. More sit on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'From Google, word for word, unpaid and unprompted.',

  fees: {
    h2: 'What GCSE tuition costs',
    lede: 'A single monthly figure in US dollars, the rate outside India. The free lesson comes first and nothing is charged until a course and a slot are settled.',
    free: ['A real lesson on real exam material', 'A straight view of where the gaps are', 'Only a phone number needed'],
    group: ['Five to ten students at one stage', 'The same teacher across the course', 'Written work marked every week', 'Eased off in the weeks before papers'],
    one: ['One student and one teacher', 'Planned backwards from the exam dates', 'Useful when a grade target is specific']
  },

  faq: {
    eyebrow: 'Questions about AQA 8525',
    h2: 'What AQA candidates and parents ask',
    items: [
      { q: 'How is 8525 assessed?', a: 'Two written papers, both at the end of the course. Paper 1 is two hours, 90 marks and half the GCSE. Paper 2 is an hour and 45 minutes, 90 marks and the other half. There is no coursework.' },
      { q: 'Which programming languages does AQA allow?', a: 'For exams from 2022, AQA supports C#, Python version 3 and VB.NET, and paper 1 requires students to design, write, test and refine code in one of those three.' },
      { q: 'What is AQA pseudo-code?', a: 'AQA\'s own notation for presenting algorithms. The specification says exams will always present algorithms using the current version of it, so every candidate has to be able to read it fluently.' },
      { q: 'Can I answer in pseudo-code?', a: 'Where a question accepts pseudo-code as a response, AQA says students may present answers in any suitable format and do not have to use AQA\'s own version. But the question states what form is required, and students must respond as instructed.' },
      { q: 'Is paper 2 the easy one?', a: 'No. It assesses SQL programming as well as theory, carries extended response questions, and gives fifteen minutes less than paper 1 for the same 90 marks.' },
      { q: 'What if my school teaches a language that lacks a topic?', a: 'The specification is explicit that students need a theoretical understanding of all the programming topics for paper 1 even if the language taught does not support them all. That gap has to be filled on paper.' },
      { q: 'Does handwriting and layout matter?', a: 'Yes. Candidates are told to use meaningful identifier names, suitable data types, and to make the logic flow clearly identifiable to examiners.' },
      { q: 'What test data should a student know?', a: 'Normal, boundary and erroneous. The specification names all three, and questions about test data are among the most reliably answerable on the paper.' },
      { q: 'Do you teach C# or VB.NET?', a: 'We teach Python. The concepts transfer between all three, but the syntax practice does not, so we will say plainly in the free lesson if a school\'s choice makes us the wrong fit.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Continuing is USD 100 a month in a group or USD 150 a month one to one, with nothing taken in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Other pages for GCSE students',
    lede: 'Each one covers a different part of the picture.',
    items: [
      { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI classes in England', p: 'What the computing curriculum says and who has to follow it.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online in the UK', p: 'How the three English boards treat the language differently.' },
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy-paste it', p: 'What the awarding bodies say about AI in assessed work.' },
      { href: '/a-level-computer-science-nea-help', label: 'A-level Computer Science coursework', p: 'What changes at sixth form, when a project starts counting.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, and the index of every UK page we publish.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Where a strong GCSE student can go next.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will reply at a British hour you choose. The lesson uses real 8525 material and ends with a frank view of where the gaps are.',
    readFirst: 'Rather read? Each <a class="ag-inline-link" href="/courses">course page</a> lists its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> sets out the method, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> shows the sequence.',
    note: 'WhatsApp is quickest and free from a British mobile. The number is registered in India, which we state rather than leave you to notice.',
    formNote: 'No card, no contract. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'England', links: [
        { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI in England' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/best-python-classes-online-uk', label: 'Python classes' },
        { href: '/a-level-computer-science-nea-help', label: 'A-level coursework' }
      ] },
      { h4: 'Exam help', links: [
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'AI and assessed work' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live GCSE teaching for UK students, on UK time'
  },

  personalityCss: `
.ag-root.ag-aqg .ag-hero h1 { letter-spacing: -0.024em; font-weight: 700; }
.ag-root.ag-aqg .ag-capsule { border-left-width: 5px; }
.ag-root.ag-aqg .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-aqg .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-aqg .ag-table th:first-child { width: 22%; }
.ag-root.ag-aqg .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-aqg .ag-band-head h3 { letter-spacing: -0.008em; }
`,

  mustMention: ['AQA pseudo-code', 'C#, Python (version 3), VB.NET', 'must respond as instructed', 'qualification is linear', '90 marks', 'normal, boundary and erroneous', 'meaningful identifier names', 'documented interfaces', '1 hour 45 minutes', 'correctness of programs'],

  dossier: {
    curriculumAuthority: 'England, AQA GCSE Computer Science 8525. AQA, GCSE Computer Science (8525) Specification, for teaching from September 2020, for GCSE exams in 2022 onwards, Version 1.2 dated 29 November 2022, read from AQA\'s own PDF on 20 September 2026. Verbatim: "This qualification is linear. Linear means that students will sit all their exams at the end of the course." Paper 1: Computational thinking and programming skills, assessing "Computational thinking, code tracing, problem-solving, programming concepts including the design of effective algorithms and the designing, writing, testing and refining of code", written exam 2 hours, 90 marks, 50 per cent, with "a mix of multiple choice, short answer and longer answer questions". Paper 2: Computing concepts, written exam 1 hour 45 minutes, 90 marks, 50 per cent, with "a mix of multiple choice, short answer, longer answer and extended response questions assessing SQL programming skills and theoretical knowledge". Content: sections 3.1 Fundamentals of algorithms and 3.2 Programming feed paper 1; 3.3 data representation, 3.4 computer systems, 3.5 networks, 3.6 cyber security, 3.7 relational databases and SQL and 3.8 ethical, legal and environmental impacts feed paper 2; AQA notes that knowledge crosses over, for example binary assessed directly in paper 2 while "the underlying knowledge and principles may be indirectly required for questions in paper 1". Notation: "Exams will always present algorithms using the current version of the AQA pseudo-code"; "For exams from 2022, we will support the following programming languages: C#, Python (version 3), VB.NET"; "In paper 1 students will be required to design, write, test and refine program code in one of the three languages above"; "Exam questions will explicitly state in what form the response needs to be provided. This will be, for example, pseudo-code, program code or a flowchart, and students must respond as instructed"; where pseudo-code is accepted, "students may present their answers to questions in any suitable format and do not need to use the" AQA version. Content rule: students "need a theoretical understanding of all the topics in this section for the paper 1 exam even if the programming language(s) taught does not support all of the topics". Presentation: candidates "need to ensure they use meaningful identifier names, use suitable data types and that all logic flow is clearly identifiable to examiners". Sufficient practical experience before paper 1: "structuring programs into modular parts with clear documented interfaces"; "including authentication and data validation systems/routines within their computer programs"; "writing, debugging and testing programs to enable them to develop the skills to articulate how programs work and argue using logical reasoning for the correctness of programs in solving specified problems"; "designing and applying test data (normal, boundary and erroneous) to the testing of programs"; "refining programs in response to testing outcomes".',
    localProject: 'Three notations, one paper. AQA prints every algorithm in its own pseudo-code, accepts program code only in C#, Python 3 or VB.NET, and states that each question names the form the answer must take, whether pseudo-code, program code or a flowchart, with students required to respond as instructed. A candidate who writes fluent Python into a flowchart question has lost the marks before the logic is read, and that is a failure of instruction-reading rather than of computing. The page builds outward from that: a stage two on the progression ladder devoted purely to reading AQA pseudo-code, because school teaching happens in an editor and the exam does not; a warning that theoretical understanding of every programming topic is required even where the taught language lacks them; and a presentation standard that reads like advice and functions like a mark scheme. The final section turns the specification\'s own list of five practical experiences into a revision checklist, singling out arguing for the correctness of a program as the untaught skill that separates the top grades, and normal, boundary and erroneous test data as the most reliably answerable question on the paper. Lesson family: an exam whose hardest requirement is notational rather than technical.',
    requiredMentions: ['AQA pseudo-code', 'must respond as instructed', 'qualification is linear', 'normal, boundary and erroneous'],
    sources: [
      { claim: 'AQA GCSE Computer Science (8525) specification, version 1.2, 29 November 2022: the linear structure, both papers with lengths, marks and weightings, the content split, the three supported languages, AQA pseudo-code, the instruction to respond in the form stated, the theoretical-understanding rule, the presentation standard and the five practical experiences.', url: 'https://www.aqa.org.uk/subjects/computer-science-and-it/gcse/computer-science-8525' }
    ],
    rejectedClaims: [
      'That version 1.2 is the current specification: it is the version read, later versions may exist, and the page tells the reader to check AQA\'s site and ask their school.',
      'Grade boundaries, pass rates or entry numbers for 8525: none was read at a primary source for this build.',
      'Any claim about what proportion of English schools use AQA: no source was read.',
      'That we teach C# or VB.NET: we teach Python, and the page says so plainly rather than implying coverage of all three.',
      'Any promise about a grade: the page describes content, notation and habits, not outcomes.',
      'Examination entry fees: published in pounds, and this site prices in one currency.'
    ]
  }
};
