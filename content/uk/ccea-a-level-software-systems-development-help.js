'use strict';
// CCEA A level Software Systems Development help (ag- exam door, Northern Ireland; UK cluster Phase 3).
// Sources, read raw on 21 September 2026 (CCEA PDFs via curl + PyMuPDF):
//  - CCEA GCE Software Systems Development specification (first teaching September 2016, updated
//    September 2019), subject code CL4, QAN AS 601/8913/7, A2 601/8914/9. Verbatim: AS 1 Introduction to
//    Object Oriented Development "External written examination 2 hours", "50% of AS 20% of A Level"; AS 2
//    Event Driven Programming "Internal assessment", "50% of AS 20% of A Level"; A2 1 Systems Approaches and
//    Database Concepts "External written examination 2 hours", "These questions are based on a pre-release
//    case study", "30% of A Level"; A2 2 Implementing Solutions "Internal assessment", "30% of A Level";
//    "Students will develop significant programming skills in the language of their choice."; A2 2 builds
//    "a Relational Database Management Systems (RDMS) application through an object oriented environment";
//    "CCEA will publish the A2 1 pre-release case study in March each year"; internal units "each represent
//    approximately 60 hours of work"; A2 2 case study and task published "in June each year for use the
//    following year"; conditions "combine classroom and independent study activities"; teachers sign a
//    declaration that the work is the candidate's own; guided learning hours 180 AS, 360 A level.
//  - CCEA GCE Chief Examiner's and Principal Moderator's Report, Software Systems Development, Summer Series
//    2025. Verbatim: "overreliance on the inbuilt database tools within Visual Studio rather than working
//    directly in SQL Server Management Studio (SSMS)"; "Candidates who build and query their databases
//    independently within SSMS tend to develop a deeper understanding of SQL and perform notably better in
//    this paper."; SQL described as a key differentiator between high- and low-scoring candidates (the
//    source line uses a dash, so it is paraphrased, not quoted); "The final ER diagram should be derived from
//    the schema produced during the normalisation process."; "Candidates should be encouraged to implement
//    validation using exception handling within classes, rather than relying on hard-coded checks."; "It is
//    essential that all database connections are tested and functioning correctly before submission."; AS 1
//    feedback in C# idiom (char.IsDigit(), Replace(), properties, throw new, [Serializable], virtual and
//    override, type checks and casts); A2 1 areas (user stories, methodologies, evolutionary versus
//    throwaway prototyping, project management, design-stage testing, V-Model, UML, normalisation, ER
//    cardinality, SQL); 2025 case study "The Stables"; AS 2 and A2 2 moderation notes.
// Spine: SQL decides it, and the designer does not teach it. CCEA's own 2025 report ties weak SQL to leaning
// on Visual Studio's built-in database tools and says candidates who write and query their databases
// directly in SQL Server Management Studio do notably better, in the exam and the coursework alike.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'CCEA A LEVEL', blurb: 'CCEA\'s report says written SQL separates the grades, and that leaning on Visual Studio\'s database tools is why some students never learn it.' },
  slug: 'ccea-a-level-software-systems-development-help',
  code: 'ssd',
  accent: '#6F2A6A',
  accentRationale: 'Software Systems Development: a plum from the solver (7.69:1 on every paper tint, dE 10.1 from the nearest used accent), in the same family as the Northern Ireland page so the A level reads as its descendant',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'CCEA A level Software Systems Development help',
  title: 'CCEA A Level Software Systems Development Help | SQL, OOP',
  description: 'CCEA A level Software Systems Development help: the 2025 report says written SQL separates the grades. OOP, databases and the four units, taught live.',
  ogDescription: 'CCEA says students who write SQL directly, not through Visual Studio\'s tools, do notably better. Here is the A level unit by unit.',
  twitterDescription: 'CCEA A level Software Systems Development: SQL as the differentiator, object-oriented code on paper, and honest limits on portfolio help.',
  pageName: 'CCEA A Level Software Systems Development Help',
  webPageDescription: 'Live online tuition for CCEA A level Software Systems Development in Northern Ireland, built from the specification and CCEA\'s 2025 examiners\' and moderators\' report.',
  courseDescription: 'Live online teaching for CCEA Software Systems Development students: SQL written by hand, normalisation and ER modelling, object-oriented programming, exception handling and systems approaches.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'CCEA Software Systems Development',
  navLinks: [
    { href: '#units', label: 'The four units' },
    { href: '#sql', label: 'Why SQL decides it' },
    { href: '#oo', label: 'AS 1 code' },
    { href: '#portfolios', label: 'Portfolios' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Northern Ireland &middot; CCEA A level &middot; Years 13 and 14',
  h1: 'CCEA A level Software Systems Development help',
  lede: 'CCEA\'s A level Software Systems Development asks for a great deal: object-oriented code on paper, an event-driven application, systems theory built around a case study, and finally a database application written in an object-oriented environment. Its 2025 examiners\' report singles out one skill above the rest. SQL, it says, separates the strongest candidates from the weakest in both the A2 exam and the coursework, and it names a cause: students who lean on "the inbuilt database tools within Visual Studio" instead of writing SQL themselves. "Candidates who build and query their databases independently within SSMS tend to develop a deeper understanding of SQL and perform notably better in this paper." This page takes that seriously, and sets out the rest of the course from the same report.',
  secondaryCta: { href: '#sql', label: 'Why SQL decides it' },
  wa: 'Hello Modern Age Coders, I would like a free first lesson for CCEA A level Software Systems Development.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Based on CCEA\'s specification and 2025 report',
  spec: [
    ['Qualification', 'CCEA GCE Software Systems Development'],
    ['AS 1', 'Object-oriented development, 2-hour exam, 20 per cent'],
    ['AS 2', 'Event-driven application, internal, 20 per cent'],
    ['A2 1', 'Systems and databases, 2-hour exam on a case study, 30 per cent'],
    ['A2 2', 'Database application, internal, 30 per cent'],
    ['The differentiator', 'Written SQL, says CCEA'],
    ['Portfolios', 'Never touched by us'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'CCEA\'s A level Software Systems Development has four units. AS 1, Introduction to Object Oriented Development, is a two-hour written exam worth 20 per cent of the A level. AS 2, Event Driven Programming, is an internally assessed application worth 20 per cent. A2 1, Systems Approaches and Database Concepts, is a two-hour exam based on a case study CCEA releases each March, worth 30 per cent. A2 2, Implementing Solutions, is an internally assessed database application built in an object-oriented environment from a case study and task released each June, worth 30 per cent. Each internal unit represents about 60 hours of work. CCEA\'s 2025 report calls SQL a key differentiator and links weak SQL to relying on Visual Studio\'s database tools rather than writing queries in SQL Server Management Studio. Modern Age Coders teaches SQL written by hand, normalisation and ER modelling, object-oriented programming and systems theory, using past case studies and our own briefs. We never work on a portfolio or on the current year\'s case studies. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for the A level',
    lede: 'SQL twice over, because CCEA says it decides the grade, and the object-oriented programming AS 1 examines. Each card opens a syllabus.',
    items: [
      { course: 'mysql-mastery-for-teens', code: 'SSD / 01', title: 'MySQL for Teens', note: 'Queries, joins, aggregates and subqueries, written out in SQL rather than assembled in a visual tool.' },
      { course: 'mysql-database-complete-masterclass-college', code: 'SSD / 02', title: 'Databases and SQL, advanced', note: 'Normalisation to third normal form, ER modelling and database design, the core of A2 1 and A2 2.' },
      { course: 'java-programming-masterclass-for-teens', code: 'SSD / 03', title: 'Java for Teens', note: 'Classes, constructors, inheritance, overriding and exceptions in a language very close to C#.' }
    ]
  },

  sections: [
    {
      id: 'units', tint: 'tint', eyebrow: 'The four units',
      h2: 'Half examined, half built in school and at home',
      lede: 'From the CCEA GCE Software Systems Development specification, updated September 2019.',
      body: [
        { kind: 'table', caption: 'The four units', head: ['Unit', 'Assessment', 'Share of the A level'], rows: [
          ['AS 1: Introduction to Object Oriented Development', 'Written exam, 2 hours', '20 per cent'],
          ['AS 2: Event Driven Programming', 'Internal assessment: a portfolio and an event-driven application', '20 per cent'],
          ['A2 1: Systems Approaches and Database Concepts', 'Written exam, 2 hours, on a case study released in March', '30 per cent'],
          ['A2 2: Implementing Solutions', 'Internal assessment: a database application from a case study and task released in June for the following year', '30 per cent']
        ] },
        { kind: 'p', html: 'The two internal units each represent about 60 hours of work, completed in conditions that combine classroom time and independent study, and the teacher signs a declaration that the work is the candidate\'s own. That combination, with part of the work done away from school, is exactly why the rules on outside help matter so much here.' },
        { kind: 'two', mt: true,
          leftH3: 'The language question',
          left: [
            'The specification says "Students will develop significant programming skills in the language of their choice." In practice, CCEA\'s 2025 report on AS 1 is written in C# terms: char.IsDigit(), Replace(), properties with get and set, throw new, the [Serializable] attribute and the virtual and override pair.',
            'The same report names Visual Studio and SQL Server Management Studio as the tools schools use for the database work.'
          ],
          rightH3: 'What that means for us',
          right: [
            'Our object-oriented teaching is in Java and Python, not C#. Java is close enough that classes, constructors, inheritance, overriding and exceptions carry across almost directly.',
            'Where C# differs in ways the examiners mark, such as properties and the virtual and override pair, a student should practise in the school\'s own environment as well. We would rather say that plainly than claim a C# course we do not run.'
          ] },
        { kind: 'source', html: 'Source: the CCEA GCE Software Systems Development specification and the Chief Examiner\'s and Principal Moderator\'s Report, Summer Series 2025, both from the <a class="ag-inline-link" href="https://ccea.org.uk/post-16/gce/subjects/gce-software-systems-development-2016" rel="noopener" target="_blank">CCEA Software Systems Development pages</a>.' }
      ]
    },
    {
      id: 'sql', tint: 'deep', eyebrow: 'Why SQL decides it',
      h2: 'SQL decides it, and the designer does not teach it',
      lede: 'The A2 1 question on SQL in 2025, and what CCEA concluded from it.',
      body: [
        { kind: 'p', html: 'The 2025 A2 1 paper asked candidates to write INSERT statements, joins and aggregate queries. The report says the question once again showed how fundamental SQL is to success in both the theory paper and the coursework, and that a significant number of weaker candidates struggled with query structure and joins. Its explanation is specific: "overreliance on the inbuilt database tools within Visual Studio rather than working directly in SQL Server Management Studio (SSMS)". Dragging tables into a designer produces a working database without the student ever writing the SQL that builds or queries it.' },
        { kind: 'table', mt: true, caption: 'The 2025 A2 1 paper, area by area', head: ['Area', 'How candidates did'], rows: [
          ['Fact-finding', 'Questionnaires handled well; user stories poorly, often confused with general requirements'],
          ['Methodologies', 'Strong: DSDM, Scrum, RAD, XP and Waterfall matched confidently'],
          ['Prototyping', 'Improvements to a prototype well handled; evolutionary and throwaway prototyping often confused'],
          ['Project management', 'Weaker answers stayed general instead of showing how communication reduces risk'],
          ['Testing', 'The V-Model well sequenced; testing at the design stage poorly understood'],
          ['UML', 'Use case and class diagrams reasonably well handled'],
          ['Normalisation', 'Marked improvement on previous years, through to third normal form'],
          ['ER modelling', 'Entities well defined; relationships and cardinality often confused'],
          ['SQL', 'The differentiator between high and low scores']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Write it by hand', p: 'CREATE, INSERT, UPDATE, DELETE and SELECT with joins and aggregates, typed from memory and then run. The designer can come later, once the SQL is understood.' },
          { h3: 'Normalise, then draw', p: 'The report is clear that "The final ER diagram should be derived from the schema produced during the normalisation process." Drawing the diagram first, or apart, produces the inconsistencies moderators keep finding.' },
          { h3: 'Say what cardinality is', p: 'Relationship and cardinality are different ideas. One-to-one, one-to-many and many-to-many should each come with a clear definition and an example.' }
        ] },
        { kind: 'p', html: 'Our SQL teaching runs in MySQL. The language is standard enough that queries, joins and aggregates carry across to SQL Server with small differences, and we point those out, but a student should also practise in SQL Server Management Studio, the tool CCEA\'s report recommends.' }
      ]
    },
    {
      id: 'oo', tint: '', eyebrow: 'AS 1 code',
      h2: 'AS 1: object-oriented code on paper, in precise terms',
      lede: 'The 2025 AS 1 paper was better structured and marks rose, but the same slips recurred.',
      body: [
        { kind: 'table', caption: 'AS 1 slips in the 2025 report', head: ['Topic', 'The slip'], rows: [
          ['Terminology', 'Imprecise object-oriented terms; uncertainty about the purpose of method overloading'],
          ['Strings', 'A validation method not returning a Boolean; changes to a string not written back into the array'],
          ['Constructors', 'The parameter placed on the left of the assignment instead of the field'],
          ['Properties', 'Written like methods, with brackets, or missing get or set'],
          ['Arrays of objects', 'No null checks; parts of an object not accessed or output correctly'],
          ['Exceptions', 'Missing throw new, an unsuitable exception type, or the updated value not returned'],
          ['Serialisation', 'Poorly answered, with many scoring zero on what it is and why it is used'],
          ['Polymorphism', 'The virtual and override pair omitted; subtypes not checked or cast before use']
        ] },
        { kind: 'p', html: 'Two of those deserve attention early. Serialisation drew the report\'s bluntest comment, with many candidates scoring zero on part of it, yet its purpose is simple once stated: storing an object\'s data outside the running program so it can be read back later. Working with arrays of mixed objects, checking each object\'s type before using its properties, improved on previous years but still separated candidates sharply.' },
        { kind: 'two', mt: true,
          leftH3: 'How we practise AS 1',
          left: [
            'Short classes written on paper each week: fields, a parameterised constructor, properties, a method that validates and returns a Boolean.',
            'Then an array of objects of mixed subtypes, processed with type checks, and a method that throws a custom exception.'
          ],
          rightH3: 'And the vocabulary',
          right: [
            'Base, parent and super class; derived, child and sub class; overloading against overriding; encapsulation tied to the actual fields in a class, not described in general.',
            'The report rewards precise terms with short examples, so that is how answers are drafted.'
          ] }
      ]
    },
    {
      id: 'portfolios', tint: 'tint', eyebrow: 'Portfolios',
      h2: 'AS 2 and A2 2: what moderators noted, and where we stop',
      lede: 'Each is about sixty hours of work, assessed by the school and then checked by CCEA\'s moderators.',
      body: [
        { kind: 'table', caption: 'Moderators\' notes, 2025', head: ['Unit', 'What moderators saw'], rows: [
          ['AS 2 requirements', 'Better overall, but user requirements should be written from the client\'s view without technical jargon; over-specific requirements multiplied the workload'],
          ['AS 2 code', 'Game-based projects often showed more complexity than quizzes; applications still crashed on unexpected input in free-text fields'],
          ['A2 2 design', 'ER diagrams drawn before normalisation or inconsistent with it; schemas claimed as third normal form with errors; standalone tables'],
          ['A2 2 code', 'Leniency in marking: top marks given to applications with failed validation, bad data handling or crashes'],
          ['A2 2 database', 'Connections untested before submission, or connection strings hard-coded'],
          ['A2 2 testing', 'Too many screenshots of passing tests, too little evidence of failed tests and corrective action']
        ] },
        { kind: 'p', html: 'The report\'s advice on robustness is a useful teaching target in itself: "Candidates should be encouraged to implement validation using exception handling within classes, rather than relying on hard-coded checks." It also names the harder techniques that mark out top applications, such as writing to several tables, preventing double bookings and handling deletions where records are linked.' },
        { kind: 'two', mt: true,
          leftH3: 'What we do',
          left: [
            'Teach those techniques, exception handling in classes, linked deletions, booking conflicts, tested database connections, on briefs we write and on CCEA\'s past case studies from earlier years.',
            'Teach normalisation and ER modelling as one process, in that order, until a schema and its diagram always agree.'
          ],
          rightH3: 'What we never do',
          right: [
            'Look at, discuss or help with an AS 2 or A2 2 portfolio, or anything produced for it. Part of the work happens at home, and the teacher certifies all of it as the candidate\'s own.',
            'Work on the current year\'s case study for A2 1 or A2 2. Past case studies are fair practice; the live ones belong to the school and the candidate.'
          ] },
        { kind: 'p', html: 'For the GCSE that leads here, <a class="ag-inline-link" href="/ccea-gcse-digital-technology-programming-help">the CCEA programming route page</a> covers Units 4 and 5, while <a class="ag-inline-link" href="/coding-and-ai-classes-in-northern-ireland">our Northern Ireland overview</a> maps every stage from primary school. <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-uk">The page on declaring AI</a> covers AI tools near assessed work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs across Years 13 and 14',
    lede: 'Placement follows what a student can write unaided, in code and in SQL.',
    table: { caption: 'What a Software Systems Development student should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Objects', 'Start of Year 13', 'Classes, constructors, properties, inheritance, overriding and exceptions, written on paper and on screen'],
      ['2. SQL by hand', 'Year 13', 'Creating, filling and querying a database with joins and aggregates, without a designer'],
      ['3. Design', 'End of Year 13', 'Normalisation to third normal form, the ER diagram derived from it, use case and class diagrams'],
      ['4. Systems theory', 'Year 14', 'Methodologies, prototyping, project management, testing across the life cycle, applied to a case study']
    ] },
    left: { h3: 'Rung two decides the most', ps: [
      'CCEA\'s report is explicit that SQL separates the grades. It is also the rung most often skipped, because tools make it look unnecessary.',
      'The general order of topics runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung four needs a case study', ps: [
      'A2 1 questions apply theory to a scenario. We practise on past case studies so answers are always tied to one.',
      'Lessons thin out around portfolio deadlines and exams.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Software Systems Development',
    lede: 'Set out by the part of the A level they serve. The free lesson picks the first.',
    bands: [
      { num: 'I', h3: 'Databases and SQL', sub: 'A2 1 and A2 2', courses: [
        { code: 'UK / SD1 / 01', slug: 'mysql-mastery-for-teens', title: 'MySQL for teens', blurb: 'Hand-written SQL from the first lesson, joins and aggregates included.' },
        { code: 'UK / SD1 / 02', slug: 'mysql-database-complete-masterclass-college', title: 'Databases and SQL, advanced', blurb: 'Normalisation, ER modelling and design at A level depth.' },
        { code: 'UK / SD1 / 03', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'SQL used on real data, for students who want more practice querying.' }
      ] },
      { num: 'II', h3: 'Object-oriented programming', sub: 'AS 1, AS 2 and A2 2', courses: [
        { code: 'UK / SD2 / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Classes, inheritance, polymorphism and exceptions, close to C# in form.' },
        { code: 'UK / SD2 / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java, core to advanced', blurb: 'Deeper object-oriented design for Year 14 and beyond.' },
        { code: 'UK / SD2 / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development in C#', blurb: 'Our only C# course, via Unity; event-driven thinking in the school\'s likely language.' }
      ] },
      { num: 'III', h3: 'Systems and beyond', sub: 'A2 1 theory and after', courses: [
        { code: 'UK / SD3 / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The algorithmic depth a computing degree will expect next.' },
        { code: 'UK / SD3 / 02', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Version control, the everyday face of the methodologies A2 1 examines.' },
        { code: 'UK / SD3 / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web development', blurb: 'Databases behind real applications, for students heading into software work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'SQL every week, code on paper, theory on a case study',
    lede: 'Our teachers are in India, where clocks never change, so Northern Ireland runs four and a half hours behind in summer and five and a half in winter. Every slot is agreed in UK time.',
    slots: [
      { time: 'After school', l: 'The usual choice in Years 13 and 14.' },
      { time: 'Evening', l: 'Around study periods, jobs and sport.' },
      { time: 'Weekend', l: 'Time for a full two-hour paper and its review.' }
    ],
    cells: [
      { h3: 'SQL without a designer', p: 'Every week some SQL written from memory and run, so the syntax never depends on a tool.' },
      { h3: 'Normalise then diagram', p: 'Schemas taken to third normal form first, then the ER diagram drawn from them.' },
      { h3: 'Classes on paper', p: 'Short object-oriented exercises handwritten, because AS 1 is a written paper.' },
      { h3: 'Past case studies', p: 'A2 1 theory practised against CCEA case studies from earlier years, never the live one.' },
      { h3: 'Robust by habit', p: 'Validation through exception handling in classes, in every practice application.' },
      { h3: 'Five to ten per group', p: 'Students at one rung, reviewing each other\'s queries and code.' }
    ]
  },

  projectsH2: 'Built by our older students in class',
  projectsLede: 'Four projects from lessons, none of them assessed. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, unedited.',

  fees: {
    h2: 'Fees for A level lessons',
    lede: 'Charged monthly in US dollars, at the rate all our families outside India pay. There is no cost for a first lesson, and no bill until a course and a regular weekly slot are agreed.',
    free: ['A real lesson on A level material', 'An honest placement on the rungs', 'A phone number is all it takes'],
    group: ['Five to ten students on one rung', 'The same teacher through Years 13 and 14', 'Hand-written SQL checked every week', 'Lighter near portfolio deadlines'],
    one: ['A teacher for one student', 'Planned back from exam and deadline dates', 'Suits a student catching up on SQL']
  },

  faq: {
    eyebrow: 'Questions about CCEA Software Systems Development',
    h2: 'What A level students and parents ask',
    items: [
      { q: 'How is CCEA Software Systems Development assessed?', a: 'In four units. AS 1 and A2 1 are two-hour written exams worth 20 and 30 per cent of the A level. AS 2 and A2 2 are internally assessed pieces of work worth 20 and 30 per cent, each representing about 60 hours.' },
      { q: 'Which programming language is used?', a: 'The specification leaves it to the school, but CCEA\'s 2025 report on AS 1 is written in C# terms and mentions Visual Studio and SQL Server Management Studio, which suggests most schools use C# and .NET.' },
      { q: 'Do you teach C#?', a: 'Not as a general course. We teach object-oriented programming in Java and Python; Java is very close to C#. Our only C# teaching is inside a Unity game course, and we say so plainly.' },
      { q: 'Why does the report stress SQL?', a: 'It says SQL separates high-scoring from low-scoring candidates in both the A2 exam and the coursework, and links weak SQL to relying on Visual Studio\'s built-in database tools instead of writing queries directly.' },
      { q: 'What is on the A2 1 paper?', a: 'Questions applying systems theory to a case study released in March: fact-finding, user stories, methodologies, prototyping, project management, testing, UML, normalisation, ER modelling and SQL.' },
      { q: 'What did candidates find hardest in 2025?', a: 'On AS 1, serialisation and working with mixed arrays of objects. On A2 1, user stories, testing at the design stage, relationships and cardinality, and SQL for weaker candidates.' },
      { q: 'Will you help with my portfolio?', a: 'No. Part of the portfolio work is done outside school and the teacher certifies it as yours. We teach the techniques beforehand on our own briefs and on past case studies, and never see the real work.' },
      { q: 'Can we practise with past case studies?', a: 'Yes. CCEA publishes past papers, and earlier case studies are fair practice material. We do not work on the current year\'s case studies for either A2 unit.' },
      { q: 'Can I take just the AS?', a: 'Yes. CCEA allows the AS as a stand-alone qualification, made up of AS 1 and AS 2.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After it, one monthly fee in US dollars applies, lower in a group than one to one, with the amounts in the fees section and nothing billed in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages for Northern Ireland',
    lede: 'The GCSE before this A level, the wider system, and the rules on AI.',
    items: [
      { href: '/ccea-gcse-digital-technology-programming-help', label: 'CCEA GCSE Digital Technology, programming', p: 'The GCSE route that leads into this A level.' },
      { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Coding and AI classes in Northern Ireland', p: 'The whole system, from primary school to A level.' },
      { href: '/a-level-computer-science-nea-help', label: 'A level Computer Science NEA', p: 'How the English boards handle their programming projects, for comparison.' },
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy-paste it', p: 'What the rules say when AI touches a portfolio.' },
      { href: '/learn-to-think-not-just-use-ai-tools-uk', label: 'Learn to think, not just use AI tools', p: 'Why understanding outlasts any tool.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The UK hub, listing every page.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that suits. The lesson includes some SQL written by hand and ends with a rung to start on.',
    readFirst: 'Prefer to read first? Every <a class="ag-inline-link" href="/courses">course page</a> sets out its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> is clear about who the method suits, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows students\' work.',
    note: 'WhatsApp is quickest and free from a UK phone. It reaches our office in India, so the number starts +91.',
    formNote: 'No card, no contract, one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Northern Ireland', links: [
        { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Coding and AI in Northern Ireland' },
        { href: '/ccea-gcse-digital-technology-programming-help', label: 'CCEA GCSE programming' },
        { href: '/a-level-computer-science-nea-help', label: 'A level NEA, England' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'Also worth reading', links: [
        { href: '/learn-to-think-not-just-use-ai-tools-uk', label: 'Thinking beyond AI tools' },
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'Declaring AI in coursework' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'Every course' }
      ] }
    ],
    bottomRight: 'A level teaching, live, on UK time'
  },

  personalityCss: `
.ag-root.ag-ssd .ag-hero h1 { letter-spacing: -0.025em; font-weight: 710; }
.ag-root.ag-ssd .ag-capsule { border-left-width: 6px; border-bottom: 1px solid var(--ag-accent); }
.ag-root.ag-ssd .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-ssd .ag-table caption { text-align: left; font-weight: 680; }
.ag-root.ag-ssd .ag-table th:first-child { width: 26%; }
.ag-root.ag-ssd .ag-band-head h3 { letter-spacing: -0.009em; }
`,

  mustMention: ['SQL Server Management Studio', 'Visual Studio', 'normalisation', 'ER diagram', 'Event Driven Programming', 'Implementing Solutions', '60 hours', 'serialisation', 'exception handling', 'case study'],

  dossier: {
    curriculumAuthority: 'Northern Ireland, CCEA GCE Software Systems Development. Specification, first teaching September 2016, updated September 2019, subject code CL4, QAN AS 601/8913/7 and A2 601/8914/9: AS 1 Introduction to Object Oriented Development "External written examination 2 hours", "50% of AS 20% of A Level"; AS 2 Event Driven Programming internal assessment, "50% of AS 20% of A Level"; A2 1 Systems Approaches and Database Concepts "External written examination 2 hours", "These questions are based on a pre-release case study", "30% of A Level"; A2 2 Implementing Solutions internal assessment, "30% of A Level"; "Students will develop significant programming skills in the language of their choice."; A2 2 builds "a Relational Database Management Systems (RDMS) application through an object oriented environment"; "CCEA will publish the A2 1 pre-release case study in March each year"; internal units "each represent approximately 60 hours of work"; A2 2 case study and task published "in June each year for use the following year"; conditions "combine classroom and independent study activities"; teacher declaration of authenticity; AS available as a stand-alone qualification. CCEA GCE Chief Examiner\'s and Principal Moderator\'s Report, Software Systems Development, Summer Series 2025: "overreliance on the inbuilt database tools within Visual Studio rather than working directly in SQL Server Management Studio (SSMS)"; "Candidates who build and query their databases independently within SSMS tend to develop a deeper understanding of SQL and perform notably better in this paper."; SQL a key differentiator between high- and low-scoring candidates (paraphrased); "The final ER diagram should be derived from the schema produced during the normalisation process."; "Candidates should be encouraged to implement validation using exception handling within classes, rather than relying on hard-coded checks."; "It is essential that all database connections are tested and functioning correctly before submission."; AS 1 feedback in C# idiom; A2 1 performance by area; AS 2 and A2 2 moderation notes; 2025 case study The Stables.',
    localProject: 'SQL decides it, and the designer does not teach it. CCEA\'s 2025 report on its A level Software Systems Development names SQL as the skill that separates high and low scores in both the A2 exam and the coursework, and traces weak SQL to reliance on Visual Studio\'s built-in database tools instead of writing queries in SQL Server Management Studio. The page lays out the four units (half exam, half internal work of about 60 hours each, partly done at home), notes honestly that CCEA\'s feedback is written in C# while our object-oriented teaching is in Java and Python, walks the 2025 A2 1 paper area by area with SQL, normalisation and ER modelling at the centre, lists the AS 1 slips (serialisation, properties, constructors, exceptions, polymorphism), and closes with the moderators\' portfolio notes and a firm line: past case studies and our own briefs, never a portfolio or the current case studies. Lesson family: an examiners\' diagnosis about tools turned into a teaching method.',
    requiredMentions: ['SQL Server Management Studio', 'Visual Studio', 'normalisation', '60 hours'],
    sources: [
      { claim: 'CCEA GCE Software Systems Development specification (2016, updated September 2019): the four units, assessment types, weightings, case study release months, internal assessment hours, conditions and authentication, and the language-of-choice statement.', url: 'https://ccea.org.uk/downloads/docs/Specifications/GCE/GCE%20Software%20Systems%20Development%20(2016)/GCE%20Software%20Systems%20Development%20(2016)-specification-Standard_1.pdf' },
      { claim: 'CCEA GCE Chief Examiner\'s and Principal Moderator\'s Report, Software Systems Development, Summer Series 2025: the SQL and SSMS finding, AS 1 and A2 1 performance by question, and the AS 2 and A2 2 moderation notes.', url: 'https://ccea.org.uk/downloads/docs/ExamMod-Reports/GCE/GCE%20Software%20Systems%20Development%20(2016)/2025/GCE%20Software%20Systems%20Development%20(2016)-Summer2025-Report.pdf' }
    ],
    rejectedClaims: [
      'That C# is required: the specification says language of choice; the page says only that the report is written in C# terms and suggests most schools use C#.',
      'A general C# course or SQL Server course: none exists in our catalogue; the page says our SQL runs in MySQL and our object-oriented teaching in Java and Python.',
      'The contents of any current case study: not read, never used.',
      'Grade boundaries or entry numbers: none read at a primary source for this build.',
      'Any promise about a grade, and any work on a portfolio or current case study, which we decline.'
    ]
  }
};
