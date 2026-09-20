'use strict';
// OCR GCSE Computer Science J277 help (ag- exam door, England; UK cluster Phase 3).
// Source: Cambridge OCR, Level 1/Level 2 GCSE (9-1) in Computer Science (J277) specification,
// Version 3.1 (May 2026), for first assessment in 2022, read from OCR's own PDF on 20 September 2026.
// The specification carries the note "As of September 2025, our name is Cambridge OCR." Verbatim:
//  - J277/01 Computer systems: "Written paper: 1 hour and 30 minutes", "50% of total GCSE", "80 marks",
//    "This is a non-calculator paper", "All questions are mandatory", with multiple choice, short
//    response and extended response questions. Topics 1.1 systems architecture, 1.2 memory and storage,
//    1.3 computer networks connections and protocols, 1.4 network security, 1.5 systems software, 1.6
//    ethical, legal, cultural and environmental impacts.
//  - J277/02 Computational thinking, algorithms and programming: same length, weighting and marks,
//    also non-calculator, "This paper has two sections: Section A and Section B. Students must answer
//    both sections. All questions are mandatory." Topics 2.1 algorithms, 2.2 programming fundamentals,
//    2.3 producing robust programs, 2.4 Boolean logic, 2.5 programming languages and IDEs.
//  - "In Section B, questions assessing students' ability to write or refine algorithms must be
//    answered using either the OCR Exam Reference Language or the high-level programming language they
//    are familiar with."
//  - "All programming code given in examination papers will be presented using the OCR Exam Reference
//    Language."
//  - Section A "assesses a student's ability to structure answers logically without a focus on
//    syntactic precision. Students have flexibility and choice in how they present their answer."
//  - Section B response table: Design questions asked in Natural English, answered in pseudocode,
//    flowcharts, tick-box responses or natural English; Write questions asked in pseudocode, natural
//    English or flowcharts, answered in OCR Exam Reference Language or a high-level programming
//    language; Test questions asked in OCR Exam Reference Language, answered with trace tables, test
//    plans or suitable test data; Refine questions asked in OCR Exam Reference Language, answered in
//    the Exam Reference Language, a high-level language or natural English.
//  - Practical Programming: "All students must be given the opportunity to undertake a programming
//    task(s), either to a specification or to solve a problem (or problems), during their course of
//    study."
//  - THE SPINE: the specification runs a "Required" and "Not required" column throughout, and there are
//    eight "Not required" blocks. Among them, for standard searching and sorting algorithms: Required
//    is to "Identify an algorithm if given the code, pseudocode or Exam Reference Language for it";
//    Not required is "To remember the code, pseudocode or Exam Reference Language for these
//    algorithms". Others include "Memorisation of character set codes", "Ability to carry out specific
//    compression algorithms", "Understand how Ethernet, Wi-Fi and Bluetooth protocols work",
//    "Knowledge of passing of data between registers in each stage" and "Understanding of paging or
//    segmentation".
// Spine: the column nobody reads. OCR publishes, topic by topic, what a candidate does NOT have to
// know, and students spend weeks memorising things that appear in it.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'OCR J277', blurb: 'OCR publishes a Not required column beside every topic, and students revise the things listed in it. Here is what it actually says.' },
  slug: 'ocr-gcse-computer-science-j277-help',
  code: 'ocj',
  accent: '#3D665C',
  accentRationale: 'OCR J277: a muted teal green from the solver (5.24:1 on every paper tint), clearly apart from the slate navy used for the AQA specification page',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'OCR GCSE Computer Science J277 help',
  title: 'OCR GCSE Computer Science J277 Help | Both Components',
  description: 'Help with OCR J277: both components, the Exam Reference Language, how to answer Section B, and what the specification says you do not have to know. First class free.',
  ogDescription: 'OCR prints a Not required column beside every topic. It says you need not memorise the code for bubble sort. Most candidates do it anyway.',
  twitterDescription: 'OCR GCSE Computer Science J277 tutoring, taught to the specification. First class free.',
  pageName: 'OCR GCSE Computer Science J277 Help',
  webPageDescription: 'Live online tuition for Cambridge OCR GCSE Computer Science J277, covering both components, the Exam Reference Language and the specification\'s Required and Not required columns.',
  courseDescription: 'Live online teaching for students taking OCR GCSE Computer Science J277, covering computer systems for component 01 and computational thinking, algorithms and programming for component 02.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'OCR J277 help',
  navLinks: [
    { href: '#notrequired', label: 'What is not required' },
    { href: '#components', label: 'Both components' },
    { href: '#sectionb', label: 'Answering Section B' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; OCR J277 &middot; Years 10 and 11',
  h1: 'OCR GCSE Computer Science J277 help',
  lede: 'Open the OCR specification at almost any topic and you will find two columns. One is headed Required. The other is headed Not required, and it is the one nobody reads. Beside the standard searching and sorting algorithms it says that a candidate is required to identify an algorithm when given its code, and not required "to remember the code, pseudocode or Exam Reference Language for these algorithms". Thousands of students spend evenings memorising bubble sort line by line for an exam that has told them, in print, not to bother. There are eight such blocks in the specification. This page goes through what they say, what the two components actually contain, and the choice OCR gives candidates in Section B that most of them do not know they have.',
  secondaryCta: { href: '#sectionb', label: 'The Section B choice' },
  wa: 'Hello Modern Age Coders, I would like a free first class for OCR GCSE Computer Science J277.',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students &middot; Read against the J277 specification itself',
  spec: [
    ['Qualification', 'Cambridge OCR GCSE J277'],
    ['Component 01', 'Computer systems, 1h30, 80 marks'],
    ['Component 02', 'Thinking and programming, 1h30, 80'],
    ['Each worth', '50 per cent of the GCSE'],
    ['Calculators', 'Not allowed in either paper'],
    ['Code printed in', 'OCR Exam Reference Language'],
    ['Section B answers', 'Reference Language or your own'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'J277 is two written papers of an hour and a half each, 80 marks apiece, each worth half the GCSE, both non-calculator and both entirely compulsory. Component 01 covers computer systems; component 02 covers algorithms and programming and splits into Sections A and B. Two things in the specification are worth more than any revision guide. The first is the Not required column, which appears throughout and tells candidates what they need not learn, including the code for the standard sorting algorithms. The second is that in Section B, questions on writing or refining algorithms may be answered "using either the OCR Exam Reference Language or the high-level programming language they are familiar with", which is a choice most candidates never realise they hold. We teach the content and those decisions together. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for OCR candidates',
    lede: 'The specification content, and the programming fluency both components lean on. Cards open the full syllabus.',
    items: [
      { course: 'gcse-computer-science-course', code: 'OCR / 01', title: 'GCSE Computer Science', note: 'Every topic covered, with the Required and Not required columns in the specification deciding where the hours go.' },
      { course: 'python-complete-masterclass-teens', code: 'OCR / 02', title: 'Python for Teens', note: 'The high-level language most OCR centres teach, and a permitted way to answer Section B write questions.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'OCR / 03', title: 'Algorithms and Data Structures', note: 'Binary and linear search, bubble, merge and insertion sort, understood and applied rather than memorised.' }
    ]
  },

  sections: [
    {
      id: 'notrequired', tint: 'tint', eyebrow: 'What is not required',
      h2: 'The column that gives you your evenings back',
      lede: 'Eight blocks in the specification are headed Not required. Every one is a list of things a candidate can stop worrying about, and they are quoted here as printed.',
      body: [
        { kind: 'table', caption: 'A selection of what OCR says is not required', head: ['Topic', 'Not required', 'What students do instead'], rows: [
          ['Searching and sorting algorithms', '"To remember the code, pseudocode or Exam Reference Language for these algorithms"', 'Memorise bubble sort line by line, for weeks'],
          ['Character sets', '"Memorisation of character set codes"', 'Learn ASCII tables'],
          ['Compression', '"Ability to carry out specific compression algorithms"', 'Try to work through Huffman coding by hand'],
          ['Networks and protocols', '"Understand how Ethernet, Wi-Fi and Bluetooth protocols work"', 'Read up on protocol internals'],
          ['CPU architecture', '"Knowledge of passing of data between registers in each stage"', 'Diagram the fetch-execute cycle at register level'],
          ['Systems software', '"Understanding of paging or segmentation"', 'Learn memory management in detail']
        ] },
        { kind: 'capsule', mt: true, q: 'What is required instead', p: 'For searching and sorting, OCR asks candidates to "Understand the main steps of the algorithm and the segments of code in it", to "Understand any pre-requisites of an algorithm", to "Apply the algorithm to a data set", and to "Identify an algorithm if given the code, pseudocode or Exam Reference Language for it". Recognition and application, not recall.' },
        { kind: 'two', mt: true,
          leftH3: 'Why this matters more than it sounds',
          left: [
            'Revision time is the scarcest thing a Year 11 has. A student who spends four evenings memorising sort code they were never going to be asked to reproduce has lost four evenings from a subject where those evenings were needed elsewhere.',
            'And the substitution is not neutral. Memorising code feels like work and produces recall; applying an algorithm to a data set produces understanding, and understanding is what the questions ask for.'
          ],
          rightH3: 'How to use the columns',
          right: [
            'Read the specification beside any revision guide, topic by topic. Where a guide goes deeper than the Required column, that depth is optional. Where the Not required column names something explicitly, it is settled.',
            'This is not a shortcut and we would not present it as one. It is reading the rules of the exam you are sitting, which is the most ordinary study advice there is and the least followed.'
          ] },
        { kind: 'source', html: 'Source, read 20 September 2026: <a class="ag-inline-link" href="https://www.ocr.org.uk/qualifications/gcse/computer-science-j277-from-2020/" rel="noopener" target="_blank">Cambridge OCR GCSE (9-1) Computer Science (J277) specification</a>, version 3.1, May 2026, first assessment 2022. The specification notes that as of September 2025 the board\'s name is Cambridge OCR. Check the current version, and your school will confirm which applies.' }
      ]
    },
    {
      id: 'components', tint: 'deep', eyebrow: 'Both components',
      h2: 'Two papers, eighty marks each, no calculator',
      lede: 'Straight from the specification overview. The symmetry between the two papers is unusual and worth planning around.',
      body: [
        { kind: 'table', caption: 'J277 at a glance', head: ['', 'J277/01: Computer systems', 'J277/02: Computational thinking, algorithms and programming'], rows: [
          ['Length', 'Written paper, 1 hour and 30 minutes', 'Written paper, 1 hour and 30 minutes'],
          ['Marks', '80', '80'],
          ['Weighting', '50 per cent of the total GCSE', '50 per cent of the total GCSE'],
          ['Calculators', 'Non-calculator paper', 'Non-calculator paper'],
          ['Structure', 'All questions mandatory; multiple choice, short response and extended response', 'Sections A and B, both compulsory, all questions mandatory'],
          ['Topics', 'Systems architecture; memory and storage; networks, connections and protocols; network security; systems software; ethical, legal, cultural and environmental impacts', 'Algorithms; programming fundamentals; producing robust programs; Boolean logic; programming languages and IDEs']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Equal weight, equal time', p: 'Both papers are the same length for the same marks, which is rarer than it sounds and means neither can be treated as the minor one.' },
          { h3: 'No calculator, twice', p: 'Binary arithmetic, storage calculations and Boolean logic all have to be done by hand, in both papers. That is a practice problem, not a knowledge problem.' },
          { h3: 'Nothing optional', p: 'Every question is mandatory in both papers. There is no section to skip and no choice of questions to fall back on.' }
        ] },
        { kind: 'p', html: 'There is also a practical requirement sitting outside the two papers. The specification states that "All students must be given the opportunity to undertake a programming task(s), either to a specification or to solve a problem (or problems), during their course of study". It is not assessed and it is not optional for the centre, which is a useful thing for a parent to know if their child has done almost no programming by the spring of Year 10.' },
        { kind: 'p', html: 'For how the other English boards differ on exactly this point, the <a class="ag-inline-link" href="/best-python-classes-online-uk">Python page</a> compares all three, and one of them sits its practical paper on a computer.' }
      ]
    },
    {
      id: 'sectionb', tint: '', eyebrow: 'Answering Section B',
      h2: 'The choice candidates do not know they have',
      lede: 'OCR publishes a table of how each kind of Section B question is asked and how it may be answered. It rewards reading.',
      body: [
        { kind: 'table', caption: 'Section B, as the specification sets it out', head: ['Question focus', 'Asked in', 'Answered using'], rows: [
          ['Design', 'Natural English', 'Pseudocode, flowcharts, tick-box responses or natural English'],
          ['Write', 'Pseudocode, natural English or flowcharts', 'OCR Exam Reference Language or a high-level programming language'],
          ['Test', 'OCR Exam Reference Language', 'Trace tables, test plans or identifying suitable test data'],
          ['Refine', 'OCR Exam Reference Language', 'OCR Exam Reference Language, a high-level programming language or natural English']
        ] },
        { kind: 'capsule', mt: true, q: 'The sentence that matters', p: 'The specification states that "In Section B, questions assessing students\' ability to write or refine algorithms must be answered using either the OCR Exam Reference Language or the high-level programming language they are familiar with". You may answer in your own language. Many candidates do not realise this and struggle through a notation they half-know.' },
        { kind: 'two', mt: true,
          leftH3: 'Which should a candidate choose?',
          left: [
            'Whichever they are more fluent in, and for most students that is the language their school taught, usually Python. Fluency wins, because a syntactically messy answer in a language you know well still shows logic, and a hesitant answer in a half-remembered notation often shows nothing.',
            'The one exception is a student who has been drilled in the Exam Reference Language and finds it easier because it is shorter. That is a legitimate choice and it is theirs to make, in advance, not in the exam hall.'
          ],
          rightH3: 'But you still have to read it',
          right: [
            'The choice is about writing, not reading. OCR is unambiguous that "All programming code given in examination papers will be presented using the OCR Exam Reference Language", so every candidate has to read it fluently whatever they choose to write in.',
            'Test and Refine questions are asked in it too, so a student who cannot read it loses marks in Section B regardless of how good their Python is.'
          ] },
        { kind: 'p', html: 'Section A works differently again, and more gently. It "assesses a student\'s ability to structure answers logically without a focus on syntactic precision", and the specification says students "have flexibility and choice in how they present their answer". Marks there are for thinking clearly rather than for punctuation, which is worth knowing when a student freezes over exact syntax.' },
        { kind: 'p', html: 'We teach both sides: reading the Exam Reference Language until it is unremarkable, and writing fluently in Python so that the Section B choice is a real one. The wider habit of predicting what code does before running it is described on <a class="ag-inline-link" href="/problem-solving-skills-through-coding-uk">the problem-solving page</a>, and it is exactly what Test questions reward.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four stages, from the first term to the papers',
    lede: 'Nothing is banked along the way, so the question is never what a student once understood but what survives to the summer.',
    table: { caption: 'Where an OCR candidate should be', head: ['Stage', 'Usually', 'What should be secure'], rows: [
      ['1. Fluent in one language', 'By the first winter of the course', 'Producing short programs on paper whose logic a marker can follow'],
      ['2. Reading the Reference Language', 'Mid Year 10', 'Following an algorithm set out in it at first sight, with no rewriting into Python first'],
      ['3. Component 01 content', 'Across both years', 'Architecture, storage, networks, security and the impacts section, done by hand without a calculator'],
      ['4. Section B decisions', 'Year 11', 'Knowing which notation to answer in, and having trace tables and test plans as reflexes']
    ] },
    left: { h3: 'Use the Not required column early', ps: [
      'Deciding in Year 10 what does not need learning is worth more than any revision technique applied in Year 11, because it changes two years of effort rather than six weeks.',
      'The wider topic sequence sits on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Non-calculator is a practice issue', ps: [
      'Binary and denary conversion, storage sizes and Boolean expressions all done by hand, repeatedly, until they are quick. There is no clever method, only practice.',
      'Lessons ease off in the weeks immediately before the papers and pick up again afterwards.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for OCR GCSE students',
    lede: 'Grouped by what a candidate usually needs. The free lesson settles the starting point.',
    bands: [
      { num: 'I', h3: 'The specification', sub: 'Content in order', courses: [
        { code: 'UK / OC1 / 01', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Component 01 and component 02 taught apart, so revision knows which paper it is for.' },
        { code: 'UK / OC1 / 02', slug: 'python-complete-masterclass-teens', title: 'Python in full', blurb: 'The high-level language most OCR centres teach, to the point of writing it by hand.' },
        { code: 'UK / OC1 / 03', slug: 'mysql-database-complete-masterclass-college', title: 'Databases and SQL', blurb: 'Useful background for the systems side, and essential if a student carries on to A level.' }
      ] },
      { num: 'II', h3: 'Component 02 skills', sub: 'Algorithms under a clock', courses: [
        { code: 'UK / OC2 / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Search and sort understood and applied, which is what the Required column actually asks for.' },
        { code: 'UK / OC2 / 02', slug: 'python-ai-kids-masterclass', title: 'First Python', blurb: 'For students who arrived from blocks and need the keyboard stage done properly first.' },
        { code: 'UK / OC2 / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Precise description and decomposition, for students who find the wording harder than the code.' }
      ] },
      { num: 'III', h3: 'Beyond the GCSE', sub: 'For students continuing', courses: [
        { code: 'UK / OC3 / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'A site with a database behind it, for students who want to build rather than revise.' },
        { code: 'UK / OC3 / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Where the programming and the mathematics start reinforcing each other.' },
        { code: 'UK / OC3 / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Published data cleaned and argued with, which is where A level Computer Science gets interesting.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Read the specification, then the paper',
    lede: 'Our teachers work from India on a clock that never changes, leaving the UK five and a half hours behind from October and four and a half from March. Slots are set in UK time.',
    slots: [
      { time: 'Straight after school', l: 'The slot most J277 candidates end up keeping.' },
      { time: 'Later on', l: 'When the rest of the homework is out of the way and the house is quiet.' },
      { time: 'Saturday or Sunday', l: 'Long enough to sit a full past paper and go through it.' }
    ],
    cells: [
      { h3: 'The specification is open', p: 'Lessons refer to the Required and Not required columns by name, so a student knows why something is being learnt.' },
      { h3: 'Reference Language drills', p: 'Reading it until it is unremarkable, because every printed code snippet in both papers uses it.' },
      { h3: 'Writing by hand', p: 'Regular handwritten code, since an editor hides exactly the weaknesses a written paper exposes.' },
      { h3: 'Trace tables as a reflex', p: 'Built quickly and correctly, because Test questions in Section B ask for them directly.' },
      { h3: 'No calculator, ever', p: 'Binary and storage arithmetic practised by hand from the first term, as both papers require.' },
      { h3: 'Groups by level', p: 'Five to ten students at one stage, comparing two answers to the same question.' }
    ]
  },

  projectsH2: 'Projects from students at this stage',
  projectsLede: 'Four things GCSE-age learners have put online. Many more sit in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'From Google, unedited, by families nobody asked.',

  fees: {
    h2: 'What GCSE tuition costs',
    lede: 'A flat charge each month, priced in US dollars for every country but India. Try the free lesson first; billing starts only once a course and a weekly time are fixed.',
    free: ['A full lesson using actual J277 questions', 'A blunt assessment of what is missing', 'Nothing asked for but a number to call'],
    group: ['A room of five to ten at the same point', 'The same named teacher from start to finish', 'Handwritten answers read and returned each week', 'Fewer lessons in the run-up to the papers themselves'],
    one: ['One student, one teacher', 'Planned backwards from the exam dates', 'Useful where a grade target is specific']
  },

  faq: {
    eyebrow: 'Questions about OCR J277',
    h2: 'What OCR candidates and parents ask',
    items: [
      { q: 'How is J277 assessed?', a: 'Two written papers, J277/01 and J277/02, each an hour and a half, each 80 marks and each worth half the GCSE. Both are non-calculator and every question is mandatory.' },
      { q: 'Do I have to memorise bubble sort?', a: 'No. The specification lists under Not required "to remember the code, pseudocode or Exam Reference Language for these algorithms". You must be able to identify, understand and apply them.' },
      { q: 'What is the OCR Exam Reference Language?', a: 'OCR\'s own notation. All programming code given in examination papers is presented in it, so every candidate has to be able to read it fluently.' },
      { q: 'Can I answer in Python?', a: 'In Section B, questions on writing or refining algorithms must be answered using either the OCR Exam Reference Language or the high-level programming language you are familiar with. So yes, if that is your language.' },
      { q: 'What is the difference between Sections A and B?', a: 'Section A assesses structuring answers logically without a focus on syntactic precision, and gives flexibility in how you present them. Section B assesses designing, writing, testing and refining programs, with a published table of how each kind of question may be answered.' },
      { q: 'Is there any coursework?', a: 'No assessed coursework. The specification does require that all students are given the opportunity to undertake a programming task during the course, but it is not assessed.' },
      { q: 'Why is the board called Cambridge OCR now?', a: 'The specification notes that as of September 2025 the board\'s name is Cambridge OCR. It is the same qualification and the same code.' },
      { q: 'Are calculators allowed?', a: 'No, in either paper. Binary conversion, storage calculations and Boolean logic all have to be done by hand, which is a matter of practice rather than knowledge.' },
      { q: 'How should a student use the specification?', a: 'Read it beside any revision guide, topic by topic. Where the guide goes beyond the Required column, that depth is optional. Where the Not required column names something, it is settled.' },
      { q: 'What does it cost?', a: 'Nothing for the opening lesson. A group place runs at USD 100 each month afterwards and a private one at USD 150, billed monthly and never up front.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Where to read next',
    lede: 'Each covers a different part of the picture.',
    items: [
      { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA GCSE Computer Science 8525', p: 'The other big English board, and why its notation rules differ.' },
      { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI classes in England', p: 'Why most secondary schools are not required to teach computing at all.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online in the UK', p: 'One board examines Python on a computer. Here is which, and what that changes.' },
      { href: '/problem-solving-skills-through-coding-uk', label: 'Problem-solving skills through coding', p: 'What the research says builds skill, and the claim we refuse to make.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, and the index of every UK page we publish.' },
      { href: '/a-level-computer-science-nea-help', label: 'A-level Computer Science coursework', p: 'Where the marks sit at AQA and OCR once a project is assessed.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send a number and we will reply at a British hour you pick. The lesson uses real J277 material and finishes with a straight view of the gaps.',
    readFirst: 'Prefer reading? Syllabuses are published on every <a class="ag-inline-link" href="/courses">course page</a>, the teaching method and its limits are in <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and topic order runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.',
    note: 'WhatsApp gets the quickest reply and is free from a British mobile. The number is Indian, stated here rather than discovered later.',
    formNote: 'No card and no contract. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'England', links: [
        { href: '/coding-and-ai-classes-in-england', label: 'The English system' },
        { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA 8525' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/best-python-classes-online-uk', label: 'Python classes' }
      ] },
      { h4: 'Exam help', links: [
        { href: '/a-level-computer-science-nea-help', label: 'A-level coursework' },
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'AI and assessed work' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live J277 teaching, at a British hour'
  },

  personalityCss: `
.ag-root.ag-ocj .ag-hero h1 { letter-spacing: -0.022em; font-weight: 700; }
.ag-root.ag-ocj .ag-capsule { border-left-width: 6px; border-radius: 0 5px 5px 0; }
.ag-root.ag-ocj .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-ocj .ag-table caption { text-align: left; font-weight: 650; letter-spacing: 0.02em; }
.ag-root.ag-ocj .ag-table th:first-child { width: 24%; }
.ag-root.ag-ocj .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-ocj .ag-band-head h3 { letter-spacing: 0.006em; }
`,

  mustMention: ['Not required', 'Exam Reference Language', 'high-level programming language they are familiar with', '80 marks', 'non-calculator', 'Memorisation of character set codes', 'Cambridge OCR', 'trace tables', 'syntactic precision', 'opportunity to undertake a programming task'],

  dossier: {
    curriculumAuthority: 'England, Cambridge OCR GCSE (9-1) Computer Science J277. Specification version 3.1 (May 2026), for first assessment in 2022, read from OCR\'s own PDF on 20 September 2026, carrying the note "As of September 2025, our name is Cambridge OCR." J277/01 Computer systems: "Written paper: 1 hour and 30 minutes", "50% of total GCSE", "80 marks", "This is a non-calculator paper", "All questions are mandatory", multiple choice, short response and extended response; topics 1.1 systems architecture, 1.2 memory and storage, 1.3 computer networks connections and protocols, 1.4 network security, 1.5 systems software, 1.6 ethical, legal, cultural and environmental impacts. J277/02 Computational thinking, algorithms and programming: same length, marks and weighting, also non-calculator; "This paper has two sections: Section A and Section B. Students must answer both sections. All questions are mandatory."; topics 2.1 algorithms, 2.2 programming fundamentals, 2.3 producing robust programs, 2.4 Boolean logic, 2.5 programming languages and IDEs. "In Section B, questions assessing students\' ability to write or refine algorithms must be answered using either the OCR Exam Reference Language or the high-level programming language they are familiar with." "All programming code given in examination papers will be presented using the OCR Exam Reference Language." Section A "assesses a student\'s ability to structure answers logically without a focus on syntactic precision. Students have flexibility and choice in how they present their answer." Section B table: Design asked in natural English, answered with pseudocode, flowcharts, tick-box responses or natural English; Write asked in pseudocode, natural English or flowcharts, answered in the Exam Reference Language or a high-level programming language; Test asked in the Exam Reference Language, answered with trace tables, test plans or identifying suitable test data; Refine asked in the Exam Reference Language, answered in the Exam Reference Language, a high-level language or natural English. Practical Programming: "All students must be given the opportunity to undertake a programming task(s), either to a specification or to solve a problem (or problems), during their course of study." The specification runs Required and Not required columns throughout, with eight Not required blocks including, for standard searching and sorting algorithms, "To remember the code, pseudocode or Exam Reference Language for these algorithms", against a Required column of understanding the main steps and segments of code, understanding pre-requisites, applying the algorithm to a data set and identifying an algorithm from its code; other Not required entries include "Memorisation of character set codes", "Ability to carry out specific compression algorithms", "Understand how Ethernet, Wi-Fi and Bluetooth protocols work", "Knowledge of passing of data between registers in each stage" and "Understanding of paging or segmentation".',
    localProject: 'The column nobody reads. OCR prints a Not required column beside topic after topic, eight blocks of it, and students spend evenings learning precisely what it lists, most famously the code for bubble sort, which the specification states in print they do not need to remember. The page tabulates six of those entries beside what students actually do instead, and makes the argument about revision time rather than about cleverness: four evenings spent memorising sort code are four evenings taken from a subject that needed them. The second half surfaces a permission most candidates never discover, that Section B write and refine questions "must be answered using either the OCR Exam Reference Language or the high-level programming language they are familiar with", and gives a rule for choosing, fluency wins, while pointing out that the choice covers writing and not reading, since all printed code in both papers is in the Reference Language. Section A is handled too, where marks go to structuring answers "without a focus on syntactic precision". Lesson family: an examination board that publishes its own limits and is not taken at its word; the natural counterpart to the AQA page, where the difficulty is notational compliance rather than scope.',
    requiredMentions: ['Not required', 'Exam Reference Language', 'high-level programming language they are familiar with', 'non-calculator'],
    sources: [
      { claim: 'Cambridge OCR GCSE (9-1) Computer Science (J277) specification, version 3.1, May 2026: both components with lengths, marks, weightings and topics, the non-calculator and mandatory-question rules, the Section A and Section B arrangements and response table, the Exam Reference Language rules, the Practical Programming requirement, and the Required and Not required columns.', url: 'https://www.ocr.org.uk/qualifications/gcse/computer-science-j277-from-2020/' }
    ],
    rejectedClaims: [
      'That version 3.1 is necessarily current: it is the version read, and the page tells readers to check OCR and ask their school.',
      'The complete contents of all eight Not required blocks: six are quoted and the page says a selection is shown, so a candidate is sent to the specification rather than treating this page as the list.',
      'Grade boundaries, pass rates or entry numbers for J277: none was read at a primary source for this build.',
      'What share of English schools use OCR: no source was read.',
      'That answering in one notation scores better than the other: the specification permits both and the page gives a fluency rule as advice, not as a claim about marks.',
      'Examination entry fees: published in pounds, and this site prices in one currency.'
    ]
  }
};
