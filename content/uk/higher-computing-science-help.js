'use strict';
// Higher Computing Science help (ag- exam door, Scotland; UK cluster Phase 3).
// Sources, read raw on 21 September 2026:
//  - Higher Computing Science Course Specification, course code C816 76, course assessment code X816 76,
//    SCQF level 6 (24 SCQF credit points), valid from session 2023-24, version 3.0 (the Qualifications
//    Scotland page lists it as the May 2023 edition), read from the PDF on sqa.org.uk. Verbatim:
//    * Course assessment: question paper 80 marks, "2 hours"; assignment 40 marks. Recommended entry:
//      "Candidates should have achieved the National 5 Computing Science course or equivalent".
//    * Question paper: "80 marks, which is 67% of the overall marks for the course assessment (120
//      marks)". Section 1 mandatory, then section 2 or section 3, with the same split as National 5.
//      Candidates "communicate how a program works in technical detail" and "analyse computing science
//      problems with some complex aspects".
//    * Assignment: "40 marks, which is 33% of the overall marks"; "Task 1 is mandatory, and candidates
//      have the option to complete either task 2 or task 3"; "set by SQA, on an annual basis";
//      "conducted under a high degree of supervision and control"; "submitted to SQA for external
//      marking"; "The assignment must be carried out within 6 hours"; open-book conditions.
//    * New content at Higher, verbatim: "Describe and compare the development methodologies: iterative
//      development process, agile methodologies"; "Describe, exemplify and implement standard algorithms
//      using 1D arrays or arrays of records: linear search, find minimum and maximum, count occurrences";
//      "Describe, exemplify and implement a comprehensive final test plan to show that the functional
//      requirements are met"; debugging techniques "dry runs, trace tables/tools, breakpoints,
//      watchpoints"; evaluation "in terms of: fitness for purpose, efficient use of coding constructs,
//      usability, maintainability, robustness"; floating-point representation "using the terms mantissa
//      and exponent" and "the relationship between the number of bits assigned to the mantissa/exponent,
//      and the range and precision of floating-point numbers"; "Describe Unicode used to represent
//      characters and its advantage over extended ASCII code (8-bit)"; "Describe the concept of the
//      fetch-execute cycle"; performance factors "number of processors (cores), width of data bus, cache
//      memory, clock speed"; environmental impact of intelligent systems "heating systems, traffic
//      control, car management systems"; the "Computer Misuse Act 1990"; SQL "for pre-populated
//      relational databases, with three or more linked tables" using "wildcards", "aggregate functions
//      (MIN, MAX, AVG, SUM, COUNT)", "computed values, alias", "GROUP BY", "ORDER BY", "WHERE".
//  - Qualifications Scotland, Higher Computing Science page: "On 1 February 2026, Qualifications
//    Scotland replaced SQA and became Scotland's new national awarding body. The documents on this page
//    remain current and you can continue to use them."
// Spine: the same frame, a harder picture. Higher keeps National 5's shape exactly, 80 and 40 marks,
// the same compulsory and optional sections, the same six-hour assignment, which lulls students into
// treating it as National 5 again. The one visible change is that the paper gets thirty more minutes
// for the same eighty marks. Everything else that changes is inside the frame, and this page lists it.
// Deliberately NOT repeated: the "choose database or web twice" argument, which is the National 5 spine.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'HIGHER', blurb: 'Higher keeps National 5\'s shape exactly and gives the paper thirty more minutes. What changes is inside the frame, and here it is.' },
  slug: 'higher-computing-science-help',
  code: 'hcs',
  accent: '#41358D',
  accentRationale: 'Higher: a deep violet blue from the solver (8.04:1 on every paper tint), cooler than the National 5 magenta so the two Scottish pages read as a pair without matching',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Higher Computing Science help',
  title: 'Higher Computing Science Help | What Changes From N5',
  description: 'Help with Higher Computing Science: the same 80 and 40 marks as National 5, a longer paper, and the new content inside. Taught live. First class free.',
  ogDescription: 'Higher keeps the National 5 structure exactly and adds thirty minutes to the paper. Floating point, aggregate SQL and agile are what change.',
  twitterDescription: 'Higher Computing Science tutoring, and exactly what is new since National 5. First class free.',
  pageName: 'Higher Computing Science Help',
  webPageDescription: 'Live online tuition for Higher Computing Science in Scotland, setting out what the course keeps from National 5 and what it adds.',
  courseDescription: 'Live online teaching for Higher Computing Science candidates, covering standard algorithms, testing and debugging, floating point, computer structure and aggregate SQL.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Higher Computing',
  navLinks: [
    { href: '#frame', label: 'The same frame' },
    { href: '#inside', label: 'What changes inside' },
    { href: '#technical', label: 'Technical detail' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Scotland &middot; Higher &middot; S5 and S6',
  h1: 'Higher Computing Science help',
  lede: 'Students who pass National 5 Computing Science often arrive at Higher expecting more of the same, and the assessment does nothing to correct them. The shape is identical: a question paper worth 80 marks, an assignment worth 40, software design and development compulsory in both, database or web chosen in each, and an assignment completed within six hours. The one visible change is that the paper now lasts two hours instead of an hour and a half, thirty more minutes for exactly the same eighty marks, which is the specification quietly telling you the questions are harder. Everything else that changes sits inside that familiar frame. This page lists it, section by section, so a candidate knows what is genuinely new before the year starts.',
  secondaryCta: { href: '#inside', label: 'What changes inside' },
  wa: 'Hello Modern Age Coders, I would like a free first class for Higher Computing Science.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the Higher specification itself',
  spec: [
    ['Course', 'Higher Computing Science C816 76'],
    ['Question paper', '80 marks, 2 hours'],
    ['Assignment', '40 marks, within 6 hours'],
    ['Versus National 5', 'Same marks, 30 more minutes'],
    ['Entry', 'National 5 or equivalent'],
    ['Set and marked by', 'Qualifications Scotland, since February 2026'],
    ['Group', 'Five to ten at one level'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Higher Computing Science is assessed exactly as National 5 is in outline: a question paper worth 80 marks and an assignment worth 40, software design and development compulsory in both, database or web chosen in each, and an assignment completed within six hours, set annually and marked externally. The paper runs two hours rather than an hour and a half. The difference is in the content. Higher adds iterative and agile development, standard algorithms on arrays and arrays of records, a comprehensive final test plan, breakpoints and watchpoints, floating-point representation with mantissa and exponent, Unicode, the fetch-execute cycle and performance factors, the Computer Misuse Act, and SQL across three or more tables with aggregate functions and GROUP BY. The course is now awarded by Qualifications Scotland, which took over from SQA in February 2026. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for Higher candidates',
    lede: 'Deeper programming, the algorithms Higher names, and the SQL it adds. Cards open the full syllabus.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'H / 01', title: 'Python, Zero to Advanced', note: 'Sub-programs, parameters, file handling and arrays of records, which is where Higher programming sits.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'H / 02', title: 'Algorithms and Data Structures', note: 'Linear search, find minimum and maximum, and count occurrences, implemented on arrays and arrays of records.' },
      { course: 'mysql-database-complete-masterclass-college', code: 'H / 03', title: 'Databases and SQL', note: 'Three or more linked tables, aggregate functions, GROUP BY and wildcards, for candidates on the database route.' }
    ]
  },

  sections: [
    {
      id: 'frame', tint: 'tint', eyebrow: 'The same frame',
      h2: 'National 5\'s shape, kept exactly, with one clue',
      lede: 'From the Higher Computing Science Course Specification, version 3.0, valid from session 2023 to 24.',
      body: [
        { kind: 'table', caption: 'National 5 and Higher, side by side', head: ['', 'National 5', 'Higher'], rows: [
          ['Question paper marks', '80', '80'],
          ['Question paper length', '1 hour and 30 minutes', '2 hours'],
          ['Assignment marks', '40', '40'],
          ['Assignment time', 'Within 6 hours', 'Within 6 hours'],
          ['Compulsory in both', 'Software design and development', 'Software design and development'],
          ['Optional in both', 'Database or web', 'Database or web'],
          ['Course code', 'C816 75, SCQF level 5', 'C816 76, SCQF level 6']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The clue in the timing',
          left: [
            'Thirty extra minutes for the same eighty marks is the specification telling you, without saying so, that the questions demand more per mark. More reading, more working, more written explanation.',
            'It also means pace matters differently. A National 5 candidate who finished early may find Higher runs to the end.'
          ],
          rightH3: 'What the aims add',
          right: [
            'The Higher paper asks candidates to "communicate how a program works in technical detail" and to "analyse computing science problems with some complex aspects". National 5 asks candidates to communicate how a program works, without the qualifier.',
            'Those two phrases, technical detail and complex aspects, are where most of the new difficulty lives.'
          ] },
        { kind: 'p', html: 'The optional structure is the same, which means the choice between database and web still comes twice, once in the paper and once in the assignment. That decision is set out in full on <a class="ag-inline-link" href="/national-5-computing-science-help">the National 5 page</a>, and it applies at Higher unchanged.' },
        { kind: 'source', html: 'Source: the Higher Computing Science Course Specification, version 3.0, linked from the <a class="ag-inline-link" href="https://www.sqa.org.uk/sqa/56924.html" rel="noopener" target="_blank">Qualifications Scotland Higher page</a>. The new awarding body took over from SQA at the start of February 2026 and confirms the SQA-era course documents are still the ones in force.' }
      ]
    },
    {
      id: 'inside', tint: 'deep', eyebrow: 'What changes inside',
      h2: 'The new content, section by section',
      lede: 'Quoted from the specification\'s own list of skills, knowledge and understanding. These are the areas a National 5 candidate has not yet met.',
      body: [
        { kind: 'table', caption: 'Software design and development at Higher', head: ['Area', 'What the specification asks'], rows: [
          ['Methodologies', '"Describe and compare the development methodologies: iterative development process, agile methodologies"'],
          ['Standard algorithms', '"Describe, exemplify and implement standard algorithms using 1D arrays or arrays of records: linear search, find minimum and maximum, count occurrences"'],
          ['Testing', '"Describe, exemplify and implement a comprehensive final test plan to show that the functional requirements are met"'],
          ['Debugging', 'Debugging techniques: "dry runs, trace tables/tools, breakpoints, watchpoints"'],
          ['Evaluation', 'In terms of "fitness for purpose, efficient use of coding constructs, usability, maintainability, robustness"']
        ] },
        { kind: 'table', mt: true, caption: 'Computer systems and databases at Higher', head: ['Area', 'What the specification asks'], rows: [
          ['Floating point', 'Floating-point representation of real numbers "using the terms mantissa and exponent", and "the relationship between the number of bits assigned to the mantissa/exponent, and the range and precision of floating-point numbers"'],
          ['Characters', '"Describe Unicode used to represent characters and its advantage over extended ASCII code (8-bit)"'],
          ['Computer structure', '"Describe the concept of the fetch-execute cycle", and performance factors: "number of processors (cores), width of data bus, cache memory, clock speed"'],
          ['Environment', 'The environmental impact of intelligent systems: "heating systems, traffic control, car management systems"'],
          ['Law', 'Implications of the "Computer Misuse Act 1990" for individuals and businesses'],
          ['SQL', 'Relational databases "with three or more linked tables", using "wildcards", "aggregate functions (MIN, MAX, AVG, SUM, COUNT)", "computed values, alias", "GROUP BY", "ORDER BY" and "WHERE"']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The standard algorithms', p: 'Four named algorithms, implemented on arrays and on arrays of records. Records are where most students stumble, because the data has shape as well as values.' },
          { h3: 'Floating point', p: 'The single most commonly misunderstood topic at Higher. The trade-off between range and precision is the thing to understand, not the conversion steps alone.' },
          { h3: 'Aggregate SQL', p: 'GROUP BY with aggregate functions across three linked tables is a real step up from National 5 queries, and it rewards writing queries rather than reading them.' }
        ] },
        { kind: 'p', html: 'The web route deepens too, with considerably more CSS and JavaScript than at National 5 and a stronger emphasis on usability. A candidate choosing web at Higher should expect to write and read scripts, not only structure pages.' }
      ]
    },
    {
      id: 'technical', tint: '', eyebrow: 'Technical detail',
      h2: 'Explaining how a program works, precisely',
      lede: 'The phrase that separates Higher from National 5 is small, and it changes how answers are marked.',
      body: [
        { kind: 'two',
          leftH3: 'What "technical detail" demands',
          left: [
            'At National 5 a candidate can describe what a program does. At Higher the aim is to communicate how it works "in technical detail": naming the construct, the data structure and the reason, rather than paraphrasing the output.',
            'That is a writing skill as much as a programming one, and it is almost never practised, because students read code far more than they explain it in sentences.'
          ],
          rightH3: 'How to practise it',
          right: [
            'Take a short program and explain it in writing, line by line, using the correct terms. Then trace it with a trace table and check the explanation against what actually happens.',
            'Do it weekly. The breakpoints and watchpoints the specification names are exactly the tools for checking an explanation against reality.'
          ] },
        { kind: 'table', mt: true, caption: 'Moving from National 5 to Higher: what to fix first', head: ['If a candidate can already', 'The Higher step is', 'Practise by'], rows: [
          ['Write a working program', 'Structure it into sub-programs with parameters', 'Refactoring an old National 5 program into functions'],
          ['Use a single array', 'Use arrays of records and the four standard algorithms', 'Implementing each algorithm on a list of records'],
          ['Test by running it', 'Write a comprehensive final test plan', 'Writing the plan before the code, against the functional requirements'],
          ['Fix errors by trial', 'Debug with dry runs, trace tables, breakpoints and watchpoints', 'Tracing a buggy program by hand before touching it'],
          ['Convert binary integers', 'Represent real numbers in floating point', 'Changing mantissa and exponent bit counts and watching range and precision move']
        ] },
        { kind: 'p', html: 'The coursework is off limits to us: a fresh task each year, supervised in school and marked elsewhere as proof of what the candidate can do alone. The practice we offer uses our own briefs, and <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-uk">the page on declaring AI</a> covers what the rules say about AI in any assessed work.' },
        { kind: 'p', html: 'For candidates going further, <a class="ag-inline-link" href="/advanced-higher-computing-science-project-help">the Advanced Higher page</a> covers the project that dominates the next level, and <a class="ag-inline-link" href="/coding-and-ai-classes-in-scotland">coding and AI classes in Scotland</a> sets out the whole Scottish system.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through S5',
    lede: 'Placement follows what a candidate can do unaided, not whether they passed National 5.',
    table: { caption: 'What a Higher candidate should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Structured programs', 'Early S5', 'Sub-programs with parameters, file handling and arrays of records, written without examples'],
      ['2. The standard algorithms', 'S5', 'Linear search, find minimum and maximum, count occurrences, on arrays and records'],
      ['3. Systems and data', 'S5', 'Floating point, Unicode, the fetch-execute cycle, and aggregate SQL or deeper web scripting'],
      ['4. Technical explanation', 'Before the paper', 'Explaining how code works in precise terms, checked against trace tables and breakpoints']
    ] },
    left: { h3: 'Rung one is the usual gap', ps: [
      'National 5 programs are often one long block. Higher expects them split into parts, and candidates who have not done that meet it in the assignment.',
      'The full topic order runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung four decides the A-grade marks', ps: [
      'The harder questions reward precise explanation. It improves quickly with weekly written practice and not at all without it.',
      'Lessons ease off before the exam diet and resume afterwards.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Higher candidates',
    lede: 'Grouped by which part of the course they support. Where to begin is settled in the free lesson.',
    bands: [
      { num: 'I', h3: 'Programming and algorithms', sub: 'The compulsory core', courses: [
        { code: 'UK / HC1 / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python, zero to advanced', blurb: 'Sub-programs, parameters, files and records, which is Higher programming.' },
        { code: 'UK / HC1 / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'The four standard algorithms, implemented and traced properly.' },
        { code: 'UK / HC1 / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Iterative development in practice, which the methodologies section asks candidates to compare.' }
      ] },
      { num: 'II', h3: 'The optional routes', sub: 'Database or web, deeper', courses: [
        { code: 'UK / HC2 / 01', slug: 'mysql-database-complete-masterclass-college', title: 'Databases and SQL', blurb: 'Aggregate functions, GROUP BY and three linked tables.' },
        { code: 'UK / HC2 / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'CSS and JavaScript well past National 5, for the web route.' },
        { code: 'UK / HC2 / 03', slug: 'python-web-development-django-flask-course', title: 'Web development with Python', blurb: 'For candidates who want web work grounded in a language they already know.' }
      ] },
      { num: 'III', h3: 'Towards Advanced Higher', sub: 'For S6 and beyond', courses: [
        { code: 'UK / HC3 / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms, advanced', blurb: 'The deeper algorithm work Advanced Higher and university expect.' },
        { code: 'UK / HC3 / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Real datasets, which many Advanced Higher projects turn out to need.' },
        { code: 'UK / HC3 / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Where floating point and data structures meet real models, for candidates with time to spare in S6.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Structure, then technical explanation',
    lede: 'Teachers work from India on a clock that never shifts, so Scotland is five and a half hours behind from October and four and a half from March. Slots are agreed in UK time.',
    slots: [
      { time: 'After school', l: 'Where most S5 and S6 students settle.' },
      { time: 'Later evening', l: 'For students with part-time work or long journeys.' },
      { time: 'Weekend morning', l: 'Long enough for a full two-hour paper and a review.' }
    ],
    cells: [
      { h3: 'Programs in parts', p: 'Every program split into sub-programs with parameters, because Higher expects structure and the assignment rewards it.' },
      { h3: 'Records, not just arrays', p: 'The standard algorithms implemented on arrays of records, where the real difficulty is.' },
      { h3: 'Written explanation', p: 'Short written explanations of code in precise terms, marked weekly, because the paper asks for technical detail.' },
      { h3: 'Tools for checking', p: 'Trace tables, breakpoints and watchpoints used to test explanations against what the program actually does.' },
      { h3: 'Coursework stays yours', p: 'The assignment is off limits. Every exercise we set is our own brief, never the year\'s task.' },
      { h3: 'Groups by level', p: 'Five to ten candidates at one stage, explaining each other\'s code.' }
    ]
  },

  projectsH2: 'Programs our older students have written',
  projectsLede: 'Four projects from lessons, none of them assessed work. Many more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews, reproduced exactly as parents wrote them.',

  fees: {
    h2: 'What Higher tuition costs',
    lede: 'One charge a month in US dollars, the rate for every family outside India. The free lesson comes first; payment starts only once a course and a regular slot are settled.',
    free: ['A proper lesson on Higher material', 'A frank view of which new areas are weakest', 'We ask only for a phone number'],
    group: ['Five to ten S5 candidates at one rung', 'The same teacher through the session', 'Written explanations marked each week', 'Fewer lessons as the diet approaches'],
    one: ['A teacher working with one candidate', 'A plan built back from the exam date', 'Suits a candidate with a particular grade in mind']
  },

  faq: {
    eyebrow: 'Questions about Higher Computing Science',
    h2: 'What Higher candidates and parents ask',
    items: [
      { q: 'How is Higher Computing Science assessed?', a: 'Two components: a two-hour question paper carrying 80 marks, two-thirds of the total, and a coursework assignment carrying 40, the remaining third, done in no more than six hours of supervised time.' },
      { q: 'Is it just National 5 again?', a: 'The structure is the same, but the paper gets thirty more minutes for the same 80 marks, and the content adds algorithms, testing, debugging, floating point, computer structure and aggregate SQL.' },
      { q: 'What are the standard algorithms?', a: 'Linear search, find minimum and maximum, and count occurrences, which candidates must describe, exemplify and implement using one-dimensional arrays or arrays of records.' },
      { q: 'What is new in computer systems?', a: 'Floating-point representation using mantissa and exponent, Unicode and its advantage over extended ASCII, the fetch-execute cycle, performance factors such as cores, bus width, cache and clock speed, and the Computer Misuse Act 1990.' },
      { q: 'What is new in databases?', a: 'SQL across three or more linked tables using wildcards, aggregate functions such as MIN, MAX, AVG, SUM and COUNT, computed values and aliases, GROUP BY, ORDER BY and WHERE.' },
      { q: 'Do I still choose database or web?', a: 'Yes, once in the question paper and once in the assignment, exactly as at National 5.' },
      { q: 'What does technical detail mean?', a: 'The Higher paper asks candidates to communicate how a program works in technical detail, naming constructs, data structures and reasons rather than describing the output.' },
      { q: 'Is it still an SQA qualification?', a: 'It is now awarded by Qualifications Scotland, the body that took over from SQA in February 2026. The course specification written under SQA still applies.' },
      { q: 'Will you help with my assignment?', a: 'No. A new task is issued each year and marked outside your school as evidence of your own ability, so we stay entirely clear of it and practise the same skills on projects we set ourselves.' },
      { q: 'What does it cost?', a: 'Nothing for the first lesson. Afterwards a group place is USD 100 a month and a teacher to yourself USD 150, billed monthly with nothing taken in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'The rest of the Scottish ladder',
    lede: 'Before Higher, after it, and the system around both.',
    items: [
      { href: '/national-5-computing-science-help', label: 'National 5 Computing Science', p: 'The level before, and the database or web decision that carries over.' },
      { href: '/advanced-higher-computing-science-project-help', label: 'Advanced Higher Computing Science', p: 'The level after, where the project carries most of the marks.' },
      { href: '/coding-and-ai-classes-in-scotland', label: 'Coding and AI classes in Scotland', p: 'Primary to S6 in one place, and what the Curriculum for Excellence asks along the way.' },
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy-paste it', p: 'Why declared AI content earns nothing in assessed work.' },
      { href: '/scottish-mathematical-challenge-practice', label: 'Scottish Mathematical Challenge', p: 'The competition for Scottish pupils who enjoy the mathematical side.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, and the index of every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will come back at a UK hour you choose. The lesson uses real Higher material and ends by naming the new areas that need most work.',
    readFirst: 'Would you rather read first? Every <a class="ag-inline-link" href="/courses">course page</a> carries its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> is honest about who the method does not suit, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> lays out the order.',
    note: 'WhatsApp is quickest and free from a UK phone. Messages go to our office in India, so the number starts +91.',
    formNote: 'No card and no contract. We reply once, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Scotland', links: [
        { href: '/coding-and-ai-classes-in-scotland', label: 'Coding and AI in Scotland' },
        { href: '/national-5-computing-science-help', label: 'National 5 Computing Science' },
        { href: '/advanced-higher-computing-science-project-help', label: 'Advanced Higher' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] },
      { h4: 'More', links: [
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'Declaring AI' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live Higher teaching, on UK time'
  },

  personalityCss: `
.ag-root.ag-hcs .ag-hero h1 { letter-spacing: -0.026em; font-weight: 700; }
.ag-root.ag-hcs .ag-capsule { border-left-width: 5px; border-top: 2px solid var(--ag-accent); }
.ag-root.ag-hcs .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-hcs .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-hcs .ag-table th:first-child { width: 24%; }
.ag-root.ag-hcs .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-hcs .ag-band-head h3 { letter-spacing: -0.008em; }
`,

  mustMention: ['2 hours', '80 marks', 'technical detail', 'some complex aspects', 'mantissa and exponent', 'aggregate functions', 'three or more linked tables', 'agile methodologies', 'watchpoints', 'Computer Misuse Act 1990'],

  dossier: {
    curriculumAuthority: 'Scotland, Higher Computing Science. Higher Computing Science Course Specification, course code C816 76, course assessment code X816 76, SCQF level 6 (24 SCQF credit points), valid from session 2023-24, version 3.0, read from the sqa.org.uk PDF: question paper 80 marks, "2 hours", "67% of the overall marks for the course assessment (120 marks)", section 1 mandatory then section 2 or 3 with the same split as National 5; candidates "communicate how a program works in technical detail" and "analyse computing science problems with some complex aspects"; assignment 40 marks, "33% of the overall marks", "Task 1 is mandatory, and candidates have the option to complete either task 2 or task 3", "set by SQA, on an annual basis", "conducted under a high degree of supervision and control", "submitted to SQA for external marking", "The assignment must be carried out within 6 hours", open-book conditions; recommended entry "Candidates should have achieved the National 5 Computing Science course or equivalent". New content: "Describe and compare the development methodologies: iterative development process, agile methodologies"; "Describe, exemplify and implement standard algorithms using 1D arrays or arrays of records: linear search, find minimum and maximum, count occurrences"; "Describe, exemplify and implement a comprehensive final test plan to show that the functional requirements are met"; debugging techniques "dry runs, trace tables/tools, breakpoints, watchpoints"; evaluation in terms of "fitness for purpose, efficient use of coding constructs, usability, maintainability, robustness"; floating-point representation "using the terms mantissa and exponent" and "the relationship between the number of bits assigned to the mantissa/exponent, and the range and precision of floating-point numbers"; "Describe Unicode used to represent characters and its advantage over extended ASCII code (8-bit)"; "Describe the concept of the fetch-execute cycle"; performance factors "number of processors (cores), width of data bus, cache memory, clock speed"; environmental impact of intelligent systems "heating systems, traffic control, car management systems"; the "Computer Misuse Act 1990"; SQL for relational databases "with three or more linked tables" using "wildcards", "aggregate functions (MIN, MAX, AVG, SUM, COUNT)", "computed values, alias", "GROUP BY", "ORDER BY", "WHERE". Qualifications Scotland, Higher Computing Science page: "On 1 February 2026, Qualifications Scotland replaced SQA and became Scotland\'s new national awarding body. The documents on this page remain current and you can continue to use them."',
    localProject: 'The same frame, a harder picture. Higher keeps National 5\'s assessment shape exactly, 80 and 40 marks, the same compulsory and optional sections, the same six-hour assignment, and the page argues that this sameness is what misleads students into treating it as National 5 again. It reads the one visible change, two hours instead of an hour and a half for the same eighty marks, as the specification quietly signalling harder questions, and pairs it with the new aim phrases, technical detail and some complex aspects. Then it lists what actually changes, quoting the specification area by area: iterative and agile methodologies, the four standard algorithms on arrays and arrays of records, comprehensive test plans, breakpoints and watchpoints, floating point with the range and precision trade-off, Unicode, the fetch-execute cycle and performance factors, the Computer Misuse Act 1990, and SQL across three linked tables with aggregates and GROUP BY. The third section turns technical detail into a practice method and a table of what to fix first when moving up from National 5. The choose-twice argument is referenced to the National 5 page rather than repeated. Lesson family: a qualification whose continuity of form hides a step change in content.',
    requiredMentions: ['2 hours', 'technical detail', 'mantissa and exponent', 'three or more linked tables'],
    sources: [
      { claim: 'Higher Computing Science Course Specification, version 3.0: course codes, both components with marks, duration and weightings, the paper aims, the assignment conditions, recommended entry, and the new content in software design, computer systems and databases.', url: 'https://www.sqa.org.uk/files_ccc/h-course-spec-computing-science.pdf' },
      { claim: 'Qualifications Scotland, Higher Computing Science page: the replacement of SQA on 1 February 2026 and the continued validity of the course documents.', url: 'https://www.sqa.org.uk/sqa/56924.html' }
    ],
    rejectedClaims: [
      'Notional course hours for Higher: not confirmed in the text read, so none is stated.',
      'The contents of any year\'s assignment task: set annually and not read.',
      'Pass rates, grade boundaries or entry numbers: none read at a primary source for this build.',
      'The detailed web route content beyond its increased CSS, JavaScript and usability emphasis: summarised rather than quoted, since the specification was scanned for it rather than read line by line.',
      'Which programming language a Scottish school uses: the specification does not prescribe one.',
      'Any promise about a grade, and any offer to work on a candidate\'s assignment, which we decline.'
    ]
  }
};
