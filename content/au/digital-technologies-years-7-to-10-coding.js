'use strict';
// Digital Technologies Years 7 to 10 coding (ag- curriculum door, Australia cluster Phase 3, row 81).
// Facts read raw on 7 October 2026 from ACARA's Version 9.0 Digital Technologies content 7-10 (Word
// download): Years 7-8 and 9-10 band descriptions, Year 8 and Year 10 achievement standards, and the
// content descriptions and elaborations quoted with codes. Spine: a composite key that stops duplicate
// reviews, built on the AC9TDI10P03 elaboration "checking that each user has only reviewed each movie
// once" (family checked free site-wide on 7 October 2026). The eight-row table is invented for teaching;
// every query result shown was run in SQLite by us.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'YEARS 7 TO 10 CODING', label: 'Digital Technologies Years 7 to 10 coding', blurb: 'What secondary Digital Technologies asks students to program, store and secure, and a database lesson taken from the Years 9 to 10 content.' },
  slug: 'digital-technologies-years-7-to-10-coding',
  code: 'dtsn',
  accent: '#2A5181',
  accentRationale: 'Years 7 to 10 coding: a slate harbour blue chosen by hand, muted, at least 12 RGB from every accent on the site and above 4.8:1 on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Digital Technologies Years 7 to 10 coding',
  title: 'Digital Technologies Years 7 to 10 Coding | Help and Classes',
  description: 'Digital Technologies coding for Years 7 to 10: what ACARA\'s Version 9.0 content asks students to program, store, test and secure, with a worked SQL lesson.',
  ogDescription: 'Secondary Digital Technologies in practice: general-purpose and object-oriented programming, databases, version control and threat models, quoted from ACARA, plus a duplicate-review SQL lesson.',
  twitterDescription: 'Years 7 to 10 Digital Technologies coding, quoted from ACARA, with a worked database lesson.',
  pageName: 'Digital Technologies Years 7 to 10 Coding',
  webPageDescription: 'A guide for Australian secondary students and parents to the coding side of Digital Technologies in Years 7 to 10, Version 9.0: programming expectations, structured data and SQL, collaborative projects and cyber security, with a worked example on duplicate database records.',
  courseDescription: 'Live online programming and database classes for Australian students in Years 7 to 10, covering Python, SQL, testing and project work in the order the curriculum builds them.',
  crumbs: [{ name: 'Digital Technologies curriculum help', href: '/australian-curriculum-digital-technologies-help' }],
  crumbLabel: 'Years 7 to 10 coding',
  navLinks: [
    { href: '#expect', label: 'Expectations' },
    { href: '#data', label: 'Databases' },
    { href: '#projects', label: 'Projects' },
    { href: '#security', label: 'Security' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Digital Technologies Years 7 to 10 &middot; Live online',
  h1: 'Years 7 to 10 coding in Digital Technologies',
  lede: 'Secondary Digital Technologies is where computing stops being a set of puzzles and starts looking like software work. Across Years 7 to 10 the curriculum asks for programs in a real language, then object-oriented design, databases queried with SQL, version control on shared projects, and threat models for security. This page reads the Version 9.0 content for those years and pulls out what a student is actually expected to produce, then works one lesson from the Years 9 to 10 data content: why a review table needs a key that stops the same person reviewing the same film twice. It suits students heading into senior computing and parents who want to know what the homework is really about.',
  secondaryCta: { href: '#data', label: 'See the database lesson' },
  wa: 'Hello Modern Age Coders, I would like a free coding class for Years 7 to 10 Digital Technologies.',
  heroNote: 'Quoted from ACARA Version 9.0 &middot; SQL results run by us &middot; Checked on 7 October 2026',
  spec: [
    ['Bands', 'Years 7 to 8, Years 9 to 10'],
    ['Languages', 'General-purpose, then object-oriented'],
    ['Data', 'Spreadsheets, then multi-table databases'],
    ['Queries', 'SELECT, WHERE, simple JOIN and GROUP BY'],
    ['Projects', 'Agile, with version control such as GitHub'],
    ['Security', 'Authentication, then threat models'],
    ['Assessment', 'Set by each school'],
    ['We teach', 'Python, SQL and testing, live']
  ],
  capsuleQ: 'In short',
  capsule: 'In Years 7 to 10 the Australian Curriculum asks students to implement algorithms in a general-purpose language, then by Year 10 in an object-oriented one. They also model structured data and query multi-table databases with SQL, manage collaborative projects with tools such as GitHub, and build cyber security threat models. Each school decides how these are taught and assessed.',

  picks: {
    eyebrow: 'Built for these years',
    h2: 'Three courses for secondary Digital Technologies',
    lede: 'Programming first, then data, then the habits that make projects work.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'DTSN / 01', title: 'Python, properly', note: 'Functions, files and data structures, with every program traced and tested before it is called finished.' },
      { course: 'mysql-mastery-for-teens', code: 'DTSN / 02', title: 'SQL and database design', note: 'Tables, keys and joins: the structured data the Years 9 to 10 content builds on.' },
      { course: 'git-github-version-control-course-for-teens', code: 'DTSN / 03', title: 'Git and GitHub', note: 'Version control for shared projects, the tool the curriculum names for collaborative work.' }
    ]
  },

  sections: [
    {
      id: 'expect', tint: 'tint', eyebrow: 'What the two bands ask for',
      h2: 'From a first real language to object-oriented code',
      lede: 'The band descriptions set the direction. These sentences are ACARA\'s, from the Version 9.0 Years 7 to 10 file.',
      body: [
        { kind: 'table', caption: 'Programming and data expectations, Years 7 to 8 against Years 9 to 10', head: ['Area', 'Years 7 to 8', 'Years 9 to 10'], rows: [
          ['Language', '"implementing them in a general-purpose programming language"', '"implementing them, including in an object-oriented programming language"'],
          ['Algorithms', 'Nested control structures, shown as flowcharts and pseudocode', 'Logical operators, shown as flowcharts and pseudocode'],
          ['Checking work', 'Trace algorithms to predict output and find errors', 'Validate against "a range of test cases"'],
          ['Data', 'Spreadsheets and databases to acquire, store and validate data', 'Model and query entities and their relationships'],
          ['Documents', 'Not a separate content description', 'Content, structure and presentation kept apart (AC9TDI10K02)'],
          ['Security', 'Multi-factor authentication and phishing', 'Threat models and a software, user or supply chain vulnerability']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Year 10 achievement standard asks students to "acquire, interpret and model complex data with databases and represent documents as content, structure and presentation", and to "design and validate algorithms and implement them, including in an object-oriented programming language".',
            'In practice that means a Year 10 student should be comfortable reading code split across files and classes. The elaboration under AC9TDI10P09 gives the example of "using the codebase of an existing adventure game and building new characters, levels or abilities".'
          ],
          right: [
            'ACARA names example languages for both bands: "Python, JavaScript or C#" in Years 9 to 10. Schools choose, and many keep the same language from Year 7 so students can concentrate on design rather than syntax.',
            'The quietest change is testing. Years 7 to 8 trace code by hand with desk checks; Years 9 to 10 test deliberately, including boundary cases and invalid input. Students who skip that habit write programs that work in class and fail on the day they are marked.'
          ] },
        { kind: 'source', html: 'Source: ACARA, <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Digital Technologies content 7 to 10, Version 9.0</a> (Word download), band descriptions, Year 10 achievement standard and AC9TDI10P09, read on 7 October 2026. We are not connected with ACARA.' }
      ]
    },
    {
      id: 'data', tint: 'deep', eyebrow: 'A lesson from AC9TDI10P03',
      h2: 'One person, one review: why a database needs a composite key',
      lede: 'The content description AC9TDI10P03 asks students to "model and query entities and their relationships using structured data". One of its elaborations is a check that "each user has only reviewed each movie once". Here is that check, done for real.',
      body: [
        { kind: 'table', caption: 'An invented reviews table with eight rows (user and movie numbers stand for names)', head: ['Row', 'User', 'Movie', 'Rating'], numCols: [0, 1, 2, 3], rows: [
          ['1', '1', '1', '4'], ['2', '1', '2', '5'], ['3', '2', '1', '3'], ['4', '3', '3', '4'],
          ['5', '2', '1', '5'], ['6', '3', '2', '2'], ['7', '1', '3', '4'], ['8', '4', '1', '5']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Finding the duplicate',
          left: [
            'Grouping by both columns and counting finds any pair that appears more than once. The query is <code>SELECT user_id, movie_id, COUNT(*) FROM reviews GROUP BY user_id, movie_id HAVING COUNT(*) &gt; 1;</code> and on this table it returns one row: user 2, movie 1, count 2.',
            'That duplicate changes the answer to a simple question. Averaging every rating for movie 1 gives 17 divided by 4, an average of 4.25. With only one review per person, keeping user 2\'s first rating of 3, the average is 12 divided by 3, which is 4.0.'
          ],
          rightH3: 'Stopping it happening',
          right: [
            'The fix belongs in the design, not in a clean-up query run every week. Declaring <code>PRIMARY KEY (user_id, movie_id)</code> makes the pair a composite key, so the database itself refuses a second review from the same person for the same film.',
            'When we load the same eight rows into a table with that key, seven are accepted and the fifth row is rejected with the message <code>UNIQUE constraint failed: r2.user_id, r2.movie_id</code>. Students then have to decide what should happen instead: keep the first review, or let people update their rating.'
          ] },
        { kind: 'p', text: 'This is why the curriculum pairs modelling with querying. A student who only learns SELECT statements can find the problem; a student who learns to model entities and relationships stops it from existing. The same thinking carries straight into senior computing subjects and into any job that touches data.' },
        { kind: 'source', html: 'Quotations: ACARA, Digital Technologies content 7 to 10, Version 9.0, AC9TDI10P03 and its elaborations. The table is invented for teaching; the query results and the error message were produced by us in SQLite on 7 October 2026.' }
      ]
    },
    {
      id: 'projects', tint: 'tint', eyebrow: 'Working as a team',
      h2: 'Projects, user stories and version control',
      lede: 'The Years 9 to 10 content treats software as something built by groups, with roles, plans and shared code.',
      body: [
        { kind: 'two',
          left: [
            'AC9TDI10P04 asks students to "define and decompose real-world problems with design criteria and by interviewing stakeholders to create user stories". Its elaboration gives the template "As a &lt;type of user&gt;, I want &lt;some goal&gt; so that &lt;some reason&gt;".',
            'AC9TDI10P12 then asks students to "use simple project management tools to plan and manage individual and collaborative agile projects, accounting for risks and responsibilities". The example given is "a collaborative version control tool such as GitHub".'
          ],
          right: [
            'Group projects usually go wrong in one of two places: nobody agrees what the program is for, or two people overwrite each other\'s work. User stories fix the first; version control fixes the second. Both are skills we teach directly, with practice repositories rather than slides.',
            'Assessment of group work is set by each school. We help students understand and practise the techniques; the project they hand in stays their own, done under their school\'s rules.'
          ] },
        { kind: 'source', html: 'Quotations: ACARA, Digital Technologies content 7 to 10, Version 9.0, AC9TDI10P04 and AC9TDI10P12, read on 7 October 2026.' }
      ]
    },
    {
      id: 'security', tint: '', eyebrow: 'Security in Year 10',
      h2: 'Threat models and data flow diagrams',
      lede: 'Security grows from passwords in primary school to thinking like an attacker by Year 10.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The content description', p: 'AC9TDI10P13 asks students to "develop cyber security threat models, and explore a software, user or software supply chain vulnerability".' },
          { h3: 'The tool it suggests', p: 'A data flow diagram showing "how private information moves through a system", for example between a user and a server in a web application.' },
          { h3: 'The lesson it points to', p: 'The elaboration notes that sending data in plaintext would leave it "susceptible to a man-in-the-middle attack", which is why encrypted connections matter.' }
        ] },
        { kind: 'p', mt: true, text: 'We teach this from the defender\'s side and only on systems students own. The elaboration also suggests exploring a known weakness in a student\'s own software, such as changing a value stored in a login cookie. Doing that on your own practice project is a lesson; doing it on someone else\'s system is not, and we say so plainly.' },
        { kind: 'source', html: 'Quotations: ACARA, Digital Technologies content 7 to 10, Version 9.0, AC9TDI10P13 and its elaborations, read on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Year by year',
    h2: 'A sensible order through Years 7 to 10',
    lede: 'Schools vary, but skills stack in roughly this order.',
    table: { caption: 'Programming and data skills, Year 7 to Year 10', head: ['Around', 'Skill', 'The sign it is secure'], rows: [
      ['Year 7', 'Functions and loops in a text language', 'Writes a short program and desk checks it on paper'],
      ['Year 8', 'Spreadsheet and database basics', 'Validates data and explains a trend it shows'],
      ['Year 9', 'SQL across tables', 'Writes a JOIN and a GROUP BY and explains the result'],
      ['Year 10', 'Objects, testing and security', 'Builds a class, tests its boundaries and sketches a threat model']
    ] },
    left: { h3: 'If programming feels rushed at school', ps: [
      'Many schools fit Digital Technologies around other Technologies subjects, so time with code can be short. A steady weekly class fills that gap without racing ahead of the school.',
      'The fastest improvement usually comes from reading and tracing other people\'s code, not only writing new code.'
    ] },
    right: { h3: 'Looking ahead', ps: [
      'Senior computing subjects differ by state. Our pages on <a class="ag-inline-link" href="/choosing-year-11-computing-subjects-australia">choosing Year 11 computing subjects</a> and <a class="ag-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering</a> pick up from here.',
      'Students who like the algorithmic side often enjoy the Australian Informatics Olympiad, which needs exactly these skills.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Years 7 to 10',
    lede: 'Grouped by the part of the curriculum each one serves. Each card opens the full syllabus.',
    bands: [
      { num: 'I', h3: 'Programming', sub: 'General-purpose and object-oriented', courses: [
        { code: 'DTSN / C / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first script to modular programs.' },
        { code: 'DTSN / C / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Classes and objects in a strongly typed language.' },
        { code: 'DTSN / C / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages and simple browser games.' }
      ] },
      { num: 'II', h3: 'Data and the web', sub: 'Structured data and documents', courses: [
        { code: 'DTSN / D / 01', slug: 'mysql-mastery-for-teens', title: 'SQL for teens', blurb: 'Keys, joins and queries on real tables.' },
        { code: 'DTSN / D / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Trends, outliers and first models in Python.' },
        { code: 'DTSN / D / 03', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Content, structure and styling, kept separate.' }
      ] },
      { num: 'III', h3: 'Projects and security', sub: 'Working like developers', courses: [
        { code: 'DTSN / P / 01', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Branches, commits and pull requests on shared work.' },
        { code: 'DTSN / P / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cyber security for teens', blurb: 'Threats and defences, taught ethically.' },
        { code: 'DTSN / P / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Choosing the right structure for the job.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live coding classes for Australian secondary students',
    lede: 'Teachers work from India, which is behind every Australian time zone. A 5 pm lesson in Sydney during daylight saving begins at 11.30 am India time, so late-afternoon slots are steady for us to staff.',
    slots: [
      { time: 'Weekday after school', l: 'Most Years 7 to 10 students choose this.' },
      { time: 'Saturday or Sunday', l: 'For students with sport or music on weekdays.' },
      { time: 'Holiday blocks', l: 'A focused week on one skill, such as SQL.' }
    ],
    cells: [
      { h3: 'Code read aloud', p: 'Students explain each line before changing it.' },
      { h3: 'Tests first', p: 'Boundaries and bad input are tried on every program.' },
      { h3: 'Five to ten per group', p: 'Placed by skill so everyone works at the right pace.' },
      { h3: 'Private lessons', p: 'Chosen for a specific gap or a student moving fast.' },
      { h3: 'Notes for parents', p: 'A line on what was covered and what to ask about.' },
      { h3: 'Honest about school work', p: 'We teach technique; assessed projects stay the student\'s own.' }
    ]
  },

  projectsH2: 'Work our students have put online',
  projectsLede: 'Made for the learners\' own reasons rather than for marks. The full set is in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' and students\' words, exactly as posted on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Australian families are billed each month in US dollars at our standard rate outside India. There is no deposit, and you can stop at the end of any month.',
    free: ['A real lesson with a teacher', 'An honest read on your child\'s level', 'No card required'],
    group: ['Five to ten students at one level', 'One teacher, every week', 'Code reviewed with comments', 'A certificate on completion'],
    one: ['A teacher for one student', 'Aimed at a particular goal', 'A weekly time that suits you']
  },

  faq: {
    eyebrow: 'Questions about Years 7 to 10 coding',
    h2: 'What families and students ask',
    items: [
      { q: 'What coding does Digital Technologies require in Years 7 to 10?', a: 'By Year 8, programs in a general-purpose language with control structures and functions; by Year 10, modular programs using algorithms and data structures, including in an object-oriented language.' },
      { q: 'Which programming language will my child learn at school?', a: 'Schools choose. ACARA gives examples rather than a requirement; for Years 9 to 10 it names Python, JavaScript or C#.' },
      { q: 'What is a composite key?', a: 'A primary key made of two or more columns together. In a reviews table, using the user and the movie together as the key stops the same person reviewing the same movie twice.' },
      { q: 'Does the curriculum include SQL?', a: 'Yes. The Years 9 to 10 elaborations describe querying multi-table databases using SQL with SELECT, WHERE and simple JOIN and GROUP BY clauses.' },
      { q: 'What is a user story?', a: 'A short statement of what a user needs and why, often written as "As a type of user, I want some goal so that some reason". The Years 9 to 10 content asks students to create them by interviewing stakeholders.' },
      { q: 'What is a threat model?', a: 'A structured look at how a system could be attacked: what is valuable, where data moves, and where it is exposed. Year 10 students build simple ones, often with a data flow diagram.' },
      { q: 'Can you help with my child\'s school project?', a: 'We teach the techniques a project needs and practise them on separate examples. Anything assessed is done by the student under the school\'s rules.' },
      { q: 'Is this the same as HSC or VCE computing?', a: 'No. Years 7 to 10 follow the national Digital Technologies content; senior computing subjects are set by each state\'s authority and differ.' },
      { q: 'Are you part of ACARA or a school system?', a: 'No. We are an independent online school. ACARA is quoted here because it publishes the curriculum.' },
      { q: 'How do lesson times work in Australia?', a: 'We agree a weekly time after the free class. Every Australian time zone is ahead of India, so after-school lessons in Australia fall in our daytime.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Australian secondary students',
    lede: 'Curriculum guides, senior subjects and coding paths.',
    items: [
      { href: '/australian-curriculum-digital-technologies-help', label: 'Digital Technologies curriculum help', p: 'The whole subject, Foundation to Year 10.' },
      { href: '/coding-for-year-7-australia', label: 'Coding for Year 7', p: 'The first year of a text language.' },
      { href: '/choosing-year-11-computing-subjects-australia', label: 'Choosing Year 11 computing', p: 'Senior subjects by state.' },
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering', p: 'The NSW senior course.' },
      { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code', p: 'Why pasted code breaks.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main Australian page.' }
    ]
  },

  start: {
    h2: 'Book a free secondary coding class',
    lede: 'Tell us the year level and what the class is covering, whether that is Python, databases or a project. The free lesson works on that and ends with honest advice about next steps.',
    readFirst: 'Want to look first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> lists every course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson.',
    note: 'A WhatsApp message is the quickest way to reach us. The number starts +91 because the school is based in India, with no office in Australia.',
    formNote: 'Nothing to pay and no obligation. We reply once to set a time.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/australian-curriculum-digital-technologies-help', label: 'Digital Technologies help' },
        { href: '/coding-for-year-7-australia', label: 'Coding for Year 7' },
        { href: '/choosing-year-11-computing-subjects-australia', label: 'Year 11 computing' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' },
        { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering' }
      ] }
    ],
    bottomRight: 'Curriculum quoted from ACARA; we are independent of it'
  },

  personalityCss: `
.ag-root.ag-dtsn .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-dtsn .ag-table td.ag-num { font-family: 'JetBrains Mono', monospace; }
.ag-root.ag-dtsn .ag-grid-2 code { font-size: 0.92em; }
.ag-root.ag-dtsn .ag-capsule { border-left-width: 4px; }
.ag-root.ag-dtsn .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-dtsn .ag-spec dt { letter-spacing: 0.06em; }
`,

  dossier: {
    curriculumAuthority: 'ACARA, Australian Curriculum Version 9.0, Digital Technologies content 7-10 (Word download), read 7 October 2026. Years 7-8 band: "implementing them in a general-purpose programming language"; Years 9-10 band: "implementing them, including in an object-oriented programming language". Year 10 achievement standard: "acquire, interpret and model complex data with databases and represent documents as content, structure and presentation"; "design and validate algorithms and implement them, including in an object-oriented programming language". AC9TDI10P09 elaborations: "Python, JavaScript or C#", "using the codebase of an existing adventure game and building new characters, levels or abilities". AC9TDI10P03 "model and query entities and their relationships using structured data"; elaboration "checking that each user has only reviewed each movie once"; SELECT, WHERE and simple JOIN/GROUP BY. AC9TDI10P04 template "As a <type of user>, I want <some goal> so that <some reason>". AC9TDI10P12 "a collaborative version control tool such as GitHub". AC9TDI10P13 threat models; "how private information moves through a system"; "susceptible to a man-in-the-middle attack". AC9TDI10K02 content, structure, presentation.',
    localProject: 'Invented eight-row reviews table (user, movie, rating). GROUP BY user_id, movie_id HAVING COUNT(*) > 1 returns user 2, movie 1, count 2. Movie 1 average with the duplicate 17/4 = 4.25; with one review per person (first kept) 12/3 = 4.0. PRIMARY KEY (user_id, movie_id): 7 rows accepted, row 5 rejected with "UNIQUE constraint failed: r2.user_id, r2.movie_id". Run in SQLite by us on 7 October 2026.',
    requiredMentions: ['AC9TDI10P03', 'AC9TDI10P04', 'AC9TDI10P12', 'AC9TDI10P13', 'AC9TDI10K02', 'composite key', 'GROUP BY user_id, movie_id HAVING', 'UNIQUE constraint failed', 'man-in-the-middle'],
    sources: [
      { claim: 'ACARA Version 9.0 Digital Technologies content 7-10: band descriptions, Year 10 achievement standard, AC9TDI10P03, P04, P09, P12, P13, K02 and elaborations.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' },
      { claim: 'ACARA Version 9.0 Digital Technologies content F-6, for the contrast with visual programming up to Year 6.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx' },
      { claim: 'SQLite documentation, CREATE TABLE: "composite (multiple column) primary keys are supported"; the constraint error was reproduced in our own run.', url: 'https://www.sqlite.org/lang_createtable.html' }
    ],
    rejectedClaims: [
      'Which languages particular states or schools use: not stated; ACARA examples only.',
      'How much class time Digital Technologies gets in Years 9 and 10: varies by school and state, not stated.',
      'Any claim that the curriculum requires a specific database product: refused; SQL is named, products are not.',
      'Any guidance on testing other people\'s systems: refused; security exploration is limited to students\' own projects.'
    ]
  }
};
