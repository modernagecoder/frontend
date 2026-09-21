'use strict';
// Advanced Higher Computing Science project help (ag- exam door, Scotland; UK cluster Phase 3).
// Sources, read raw on 21 September 2026 from the Qualifications Scotland Advanced Higher page
// (sqa.org.uk/sqa/48508.html), which dates the specification and the coursework task 15/09/2026:
//  - Advanced Higher Computing Science Course Specification, course code C816 77, course assessment
//    code X816 77, SCQF level 7 (32 SCQF credit points), valid from session 2026-27, version 5.0,
//    September 2026. Verbatim: question paper "55 marks" and "2 hours", "approximately 40% of the
//    overall marks for the course assessment (135 marks)"; Section 1 software design and development
//    35 marks, then section 2 database or section 3 web, 20 marks; project "80 marks, which is
//    approximately 60%"; stages "analysis of the problem 10 marks", "design of the solution 20 marks",
//    "implementation 30 marks", "testing the solution 15 marks", "evaluation of the solution 5 marks";
//    "an open brief"; evidence "in no more than 20 hours"; "This is an open-book assessment"; "There is
//    no word count"; "the 10 mandatory functional requirements provided for each project"; "Candidates
//    must not introduce their own functional requirements"; graded A to D; recommended entry: "Candidates
//    should have achieved the Higher Computing Science course or equivalent qualifications and/or
//    experience". Question paper brief: "approximately 30% of marks 'A' type", "approximately 50% of
//    marks 'C' type". Content: OO constructs incl. inheritance, instantiation, polymorphism; parallel 1-D
//    arrays, records, arrays of records, 2-D arrays, array of objects; linked lists (double and single)
//    to describe and exemplify; binary search, insertion sort, bubble sort; SQL HAVING, subqueries,
//    IN, NOT, BETWEEN, ANY, EXISTS; surrogate keys; PHP form data, sessions, mysqli connection;
//    media queries print, screen, max-width. The spec's own labels use em-dashes and two typos; restated
//    in plain words, never reproduced.
//  - Advanced Higher Computing Science, SCQF Level 7, Project Assessment Task, version 4.0, September
//    2026, "Valid from session 2026–27". Verbatim: "You must not add further functional requirements to
//    your project."; "the examples will help you understand the scope of the project, but your project
//    must be based on your own idea"; "you do not need to develop a sophisticated interface, as this is
//    not assessed"; frameworks "such as Unity, Tkinter and PyGame" not allowed; "Candidates must not
//    submit their full code."; evidence "in paper-based format"; "Group work is not allowed once formal
//    work on assessment has started."; one-to-one help on something already produced "could become
//    support for assessment"; teachers "should not prompt candidates to revisit their initial analysis
//    and design". History: v2.0 Sept 2024 "introduce a maximum limit of end-user and functional
//    requirements"; v3.0 for 2025-26 mandatory templates, SDD/WDD and WDD/SDD removed, penalty for "more
//    than six end-user requirements or more than eight additional functional requirements"; v4.0 "From
//    session 2026–27" the 10 mandatory functional requirements per project type. The task carries a
//    confidentiality note for centres, so the requirement lists are summarised, never reproduced.
//  - Course Report 2025, Advanced Higher Computing Science: "Number of resulted entries in 2025: 767";
//    57.3% attempted section 2 and 42.7% section 3; the demanding areas and missing project evidence
//    summarised on the page; "difficult, if not impossible"; "inheritance is primarily concerned with
//    structure, whereas polymorphism is concerned with behaviour"; "the first opportunity that candidates
//    have to be creative". Written about projects under the previous rules; its advice to use version
//    3.0 of the task is superseded and not repeated. No 2026 report was on the page (the 2026 URL 404s).
// Spine: the scenario is yours, the ten requirements are not. From 2026-27 the brief is still open on
// context but every requirement is set, so everything the project assesses is known in advance, and the
// page turns that into what we teach before the formal project starts, then where we stop.
// Deliberately NOT repeated: National 5's "choose database or web twice" and Higher's "same frame,
// harder picture".

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'ADV HIGHER', blurb: 'From 2026 to 27 the ten project requirements are set for you and the scenario stays yours. What that changes, and where our help stops.' },
  slug: 'advanced-higher-computing-science-project-help',
  code: 'ahcs',
  accent: '#1D5AA5',
  accentRationale: 'Advanced Higher: a clear mid blue from the solver (5.57:1 on every paper tint, the widest separation available in the range), cooler and brighter than the Higher violet so the three Scottish pages step across the spectrum',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Advanced Higher Computing Science project help',
  title: 'Advanced Higher Computing Science Project Help | 2026-27',
  description: 'Advanced Higher Computing Science for 2026-27: ten set project requirements, 80 of 135 marks, and the paper. We teach the skills first and never touch your project.',
  ogDescription: 'From session 2026 to 27 every Advanced Higher project comes with ten set requirements. The scenario is yours. Here is what that changes.',
  twitterDescription: 'Advanced Higher Computing Science: the ten set project requirements, the 55-mark paper, and honest limits on help. First lesson free.',
  pageName: 'Advanced Higher Computing Science Project Help',
  webPageDescription: 'Live online teaching for Advanced Higher Computing Science in Scotland, explaining the 2026 to 27 project rules and preparing the skills and the question paper.',
  courseDescription: 'Live online teaching for Advanced Higher Computing Science candidates: object-oriented programming, 2-D arrays, the standard algorithms, SQL, test planning and question paper practice.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Advanced Higher Computing',
  navLinks: [
    { href: '#ten', label: 'The ten requirements' },
    { href: '#marks', label: 'Project marks' },
    { href: '#paper', label: 'The paper' },
    { href: '#line', label: 'Where we stop' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Scotland &middot; Advanced Higher &middot; S6',
  h1: 'Advanced Higher Computing Science project help',
  lede: 'From session 2026 to 27, every Advanced Higher Computing Science candidate in Scotland is handed the same ten functional requirements for their project type and told not to add any. The scenario is still theirs, agreed with their teacher; the requirements now belong to Qualifications Scotland. That change arrived in September 2026 and it matters more than it looks. The project carries 80 of the 135 marks, and the 2025 course report found candidates still losing marks by writing more requirements than they could follow through to the end. It also means that everything the project assesses is known before the work begins. We teach those skills on a practice brief of our own, prepare the question paper, and stay out of the real project entirely.',
  secondaryCta: { href: '#ten', label: 'The ten requirements' },
  wa: 'Hello Modern Age Coders, I would like a free first lesson for Advanced Higher Computing Science.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the September 2026 task and specification',
  spec: [
    ['Course', 'Advanced Higher Computing Science C816 77'],
    ['Project', '80 marks, no more than 20 hours'],
    ['Question paper', '55 marks, 2 hours'],
    ['Requirements', 'Ten per project type, set for you'],
    ['Your project', 'We never see or touch it'],
    ['Entry', 'Higher or equivalent'],
    ['Group', 'Five to ten at one stage'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Advanced Higher Computing Science is assessed by a project worth 80 marks and a two-hour question paper worth 55, so the project carries roughly 60 per cent of the award. From session 2026 to 27 the project comes in four types, each with 10 mandatory functional requirements written by Qualifications Scotland. The candidate chooses the scenario, agrees it with their teacher, and must not add requirements. Marks go to analysis (10), design (20), implementation (30), testing (15) and evaluation (5); the evidence goes into a mandatory template, and it is produced in no more than 20 hours. Modern Age Coders teaches the skills the requirements rest on, the array of objects, the 2-D array, binary search and both sorts, parameterised queries, input validation and test planning, on briefs of our own, and prepares the paper. We never see, comment on or correct a candidate\'s project. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses behind the ten requirements',
    lede: 'Objects, algorithms and SQL, which is where most of the requirements live. Each card opens a full syllabus.',
    items: [
      { course: 'java-programming-masterclass-for-teens', code: 'AH / 01', title: 'Java for Teens', note: 'Classes, inheritance, polymorphism and arrays of objects: the core of the object-oriented project type and of Section 1 of the paper.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'AH / 02', title: 'Problem Solving and Algorithms', note: 'Binary search, insertion sort and bubble sort, and the linked lists the paper asks candidates to explain.' },
      { course: 'mysql-mastery-for-teens', code: 'AH / 03', title: 'MySQL for Teens', note: 'Subqueries, HAVING and EXISTS, which the database project type and Section 2 both lean on.' }
    ]
  },

  sections: [
    {
      id: 'ten', tint: 'tint', eyebrow: 'Set for you',
      h2: 'The scenario is yours. The ten requirements are not.',
      lede: 'From the Project Assessment Task, version 4.0, published in September 2026 and valid from session 2026 to 27.',
      body: [
        { kind: 'table', caption: 'The four project types and what their requirements centre on', head: ['Project type', 'What the ten requirements centre on'], rows: [
          ['Software, object-oriented, with a database', 'A class the candidate defines, an array of objects filled from one small table, one of the three standard algorithms applied to that array, and a query with two parameters'],
          ['Software, procedural, with a database', 'The same shape with a 2-D array in place of objects, built from modules using local variables and parameter passing'],
          ['Database, with software or web', 'Four related tables, and queries using a subquery with ANY or EXISTS, a join across at least three tables, HAVING, and two of BETWEEN, IN or NOT'],
          ['Web, with a database', 'Three or four connected pages, form data handed to PHP, session variables, one media query used across every page, and a query with two parameters']
        ] },
        { kind: 'p', html: 'All four sets finish the same way: an interface that accepts two values from the user, validates each of them, and displays formatted results. The task sorts the list plainly. The first five requirements cover the data structures and Advanced Higher concepts, the sixth is the integration between two areas of the course, and the last four are the interface and its validation.' },
        { kind: 'two', mt: true,
          leftH3: 'What the candidate still decides',
          left: [
            'The context. The task gives one worked example for each project type and says those examples show the scope, but the project itself must rest on the candidate\'s own idea, discussed and agreed with the teacher.',
            'The language, the data, the imagined users and the persona adopted during testing are the candidate\'s too, all inside the scope the requirements set.'
          ],
          rightH3: 'What is now ruled out',
          right: [
            'Adding requirements. The instructions to candidates say it in one sentence: "You must not add further functional requirements to your project." Extra features can be built afterwards, outside the assessment, and are never submitted.',
            'Frameworks and plug-ins such as Unity, Tkinter and PyGame, and handing in a full program. The template asks for code extracts, and every page of evidence is printed.'
          ] },
        { kind: 'p', html: 'This is the third tightening in three years. The September 2024 edition of the task introduced a maximum number of requirements. For session 2025 to 26, mandatory templates arrived with a penalty for more than six end-user requirements or more than eight additional functional requirements. From 2026 to 27 the functional requirements are simply given. The 2025 course report shows why: some candidates had so many requirements that following each one through design, implementation and testing was "difficult, if not impossible", and most of them could not reach all the marks available.' },
        { kind: 'source', html: 'Source: the Advanced Higher Computing Science Project Assessment Task, version 4.0, and the course specification, version 5.0, both September 2026 editions linked from the <a class="ag-inline-link" href="https://www.sqa.org.uk/sqa/48508.html" rel="noopener" target="_blank">Qualifications Scotland Advanced Higher page</a>, together with the Advanced Higher course report for 2025. The requirement lists are summarised here, not reproduced; the task itself is on that page.' }
      ]
    },
    {
      id: 'marks', tint: 'deep', eyebrow: 'Where the 80 marks sit',
      h2: 'Five stages, one list of requirements running through them',
      lede: 'The project is marked stage by stage, and each stage is judged partly on whether it carries the same ten requirements forward.',
      body: [
        { kind: 'table', caption: 'Project marks by stage', head: ['Stage', 'Marks', 'What the evidence covers'], rows: [
          ['Analysis', '10', 'An outline of the problem (1), a UML use case diagram (2), a requirements specification (5), a plan for the remaining stages (2)'],
          ['Design', '20', 'A design for each of the ten requirements, the data structures and the integration included'],
          ['Implementation', '30', 'Every requirement built to match its design, with 4 of the marks for a record of ongoing testing'],
          ['Testing', '15', 'One persona and its test cases (3), planned final testing of the functional requirements (10), a review of the results (2)'],
          ['Evaluation', '5', 'Fitness for purpose (2), future maintainability (2), robustness (1)']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'No word count', p: 'No page limit either. Marks follow the quality of the evidence, and its volume is bounded by the ten requirements, which is the reason for setting them.' },
          { h3: 'Twenty hours', p: 'Evidence is produced in no more than 20 hours, open-book, partly outside class, with the teacher responsible for confirming the work is the candidate\'s own.' },
          { h3: 'A mandatory template', p: 'One of four, matched to the project type, prompting the evidence for every requirement at every stage. Headings and page numbers must stay in.' }
        ] },
        { kind: 'table', mt: true, caption: 'Evidence the 2025 course report often found missing', head: ['Stage', 'What was absent or weak'], rows: [
          ['Design', 'A class diagram for the classes a candidate wrote from scratch; many submitted one generated automatically by a framework'],
          ['Design', 'In procedural projects, a top-level design showing data flow between modules, and a planned 2-D array or array of records with types and dimensions'],
          ['Implementation', 'The starting contents of each database table before any query ran, and the unsorted data before a sort, so results could be checked'],
          ['Implementation', 'Object-oriented projects that turned out procedural, applying the algorithm to an array of records instead of an array of objects'],
          ['Testing', 'Plans that were truly comprehensive: some bundled validation, the database connection and an insert query into a single test'],
          ['Evaluation', 'Honest robustness: limited input validation often went unacknowledged as a limit on how robust the solution was']
        ] },
        { kind: 'p', html: 'None of those is a coding failure. Each one is a candidate who could build the thing and did not show it, which is exactly what a rehearsal on a practice brief fixes, and exactly what nobody outside the school may fix on the real project. The report was written about projects under the previous rules; with the requirements now set, the evidence it describes is easier to plan for, and just as easy to forget.' }
      ]
    },
    {
      id: 'paper', tint: '', eyebrow: 'The other 55 marks',
      h2: 'The question paper, and where the 2025 candidates slipped',
      lede: 'Two hours and roughly 40 per cent of the award. Section 1 is compulsory, then database or web.',
      body: [
        { kind: 'table', caption: 'The question paper', head: ['Section', 'Marks', 'Status'], rows: [
          ['1. Software design and development', '35', 'Compulsory'],
          ['2. Database design and development', '20', 'Either this'],
          ['3. Web design and development', '20', 'Or this']
        ] },
        { kind: 'p', html: 'Each section opens with short questions on Advanced Higher concepts in a familiar setting, then moves to longer questions in context that ask for designs, code and explanation. About half the marks are C-type and about 30 per cent A-type, the harder marks that separate the top grade from a pass. In 2025, 57.3% of candidates answered the database section and 42.7% the web section, out of 767 who received a result.' },
        { kind: 'table', mt: true, caption: 'What the 2025 course report found demanding', head: ['Topic', 'The slip', 'What to practise'], rows: [
          ['Polymorphism', 'Treating it as another word for inheritance, and missing that an array typed as the superclass can hold objects of every subclass', 'Reading a class diagram beside its code and predicting which methods each reference can reach'],
          ['Insertion sort', 'Writing a bubble sort instead, sorting ascending when descending was asked, or looping the wrong number of times', 'Both sorts in both directions, on a 2-D array as well as a simple list'],
          ['Sort evidence', 'Unable to say how before-and-after output proves a sort worked', 'Printing the data before and after every sort, which the project needs anyway'],
          ['Surrogate keys', 'Saying only that a surrogate key is easier or quicker', 'Naming the specific problem the key solves in that particular table'],
          ['End-user testing', 'Describing persona-based final testing by the developers instead', 'Keeping the five types of testing in the specification clearly apart'],
          ['SQL on the web route', 'Using INSERT where the question needed UPDATE', 'Reading server-side pseudocode and choosing the query it implies']
        ] },
        { kind: 'p', html: 'The report puts the polymorphism point in a line worth learning: "inheritance is primarily concerned with structure, whereas polymorphism is concerned with behaviour". It also records candidates reaching for the National 5 comparisons &lt;= and &gt;= where the Advanced Higher operator BETWEEN was wanted, and the Higher operator LIKE where IN was.' },
        { kind: 'two', mt: true,
          leftH3: 'Content new at this level',
          left: [
            'Object-oriented programming in full: classes and sub-classes, encapsulation, inheritance, instantiation and polymorphism, with arrays of objects and 2-D arrays beside records.',
            'Single and double linked lists, which candidates describe and exemplify rather than implement, and binary search, insertion sort and bubble sort, which they implement.'
          ],
          rightH3: 'On the two optional routes',
          right: [
            'Database: surrogate keys, data dictionaries, entity-relationship diagrams with weak entities, HAVING, subqueries, and the operators IN, NOT, BETWEEN, ANY and EXISTS.',
            'Web: forms sent by get and post, PHP variables and sessions, connecting to a database server from PHP, and media queries for print and screen.'
          ] },
        { kind: 'source', html: 'Source: the course specification, version 5.0, for the paper structure and content, and the Advanced Higher Computing Science course report for 2025 for the figures and the areas candidates found demanding. At the time of writing, the 2025 report is the most recent on the Advanced Higher page. Grade boundaries move every year, so none is quoted as a target.' }
      ]
    },
    {
      id: 'line', tint: 'tint', eyebrow: 'Where we stop',
      h2: 'We teach before the project starts, then step away',
      lede: 'The rules on help are written for teachers. A tutor paid by the family has less standing, not more.',
      body: [
        { kind: 'two',
          leftH3: 'What the rules allow a teacher',
          left: [
            'Advice on choosing a problem that fits the scope, generic guidance given to the whole class on things like project planning, and constructive comment or questioning once the work is under way.',
            'Nothing directive: no advice on rephrasing or improving responses and no model answers. One-to-one help on something a candidate has already produced "could become support for assessment", and a teacher should not even prompt a candidate to revisit their analysis and design.'
          ],
          rightH3: 'What that means for us',
          right: [
            'If a teacher may not do those things, an outside tutor certainly should not. We do not read a candidate\'s project, suggest its scenario, or debug, review or proofread any of its evidence.',
            'Group work is not allowed once formal work on the assessment starts, so from that point our group lessons turn to the question paper.'
          ] },
        { kind: 'table', mt: true, caption: 'Before and after the formal project begins', head: ['', 'Before it starts', 'Once it has started'], rows: [
          ['Lessons', 'The skills behind all ten requirements, on our own brief', 'The question paper only'],
          ['Practice project', 'A full rehearsal in a scenario we set, every stage evidenced', 'Closed, and never adapted into the real one'],
          ['Your scenario', 'Chosen by you with your teacher, never by us', 'Not discussed'],
          ['Your code and evidence', 'Does not exist yet', 'Not seen and not commented on'],
          ['Questions about the rules', 'Answered with the task document open', 'Answered with the task document open']
        ] },
        { kind: 'p', html: 'The rehearsal is where the value sits. A candidate who has already taken a small brief through analysis, design, implementation, testing and evaluation, printed the before-and-after output, and planned one test for each requirement arrives at the real project knowing what every stage asks. The 2025 report calls the project "the first opportunity that candidates have to be creative". With the requirements fixed, that creativity now lives in the scenario and in how cleanly the solution is built.' },
        { kind: 'p', html: 'On the web option, a plain word: our catalogue has no PHP course. A candidate taking the web project type or the web section of the paper should say so in the free lesson, and we will tell them honestly whether a teacher is free to cover the PHP the specification names. The database project type, and the two software types that integrate with a database, line up directly with our courses.' },
        { kind: 'p', html: 'For AI tools anywhere near assessed work, <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-uk">the page on declaring AI</a> sets out what the rules say. The two levels below are covered on <a class="ag-inline-link" href="/higher-computing-science-help">the Higher page</a> and <a class="ag-inline-link" href="/national-5-computing-science-help">the National 5 page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through S6',
    lede: 'Rungs one to three belong before the formal project begins. Rung four runs to the exam.',
    table: { caption: 'What an Advanced Higher candidate should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Objects and structures', 'Start of S6', 'Classes with inheritance and polymorphism, arrays of objects, 2-D arrays and arrays of records, written without a framework'],
      ['2. The three algorithms', 'Autumn', 'Binary search, insertion sort and bubble sort applied to each of those structures, in either direction, with before-and-after output'],
      ['3. A rehearsal project', 'Before the real one', 'Our own brief taken through all five stages: requirements, class diagram or data dictionary, wireframes, validation, and a test per requirement'],
      ['4. The paper', 'Until the exam diet', 'Section 1 and the chosen option, with written explanations of unfamiliar code and designs']
    ] },
    left: { h3: 'Rung one without a framework', ps: [
      'Plenty of students meet objects through a game engine or interface toolkit that writes half the classes for them. The project bans those tools, so every class has to come from the candidate.',
      'The order of topics runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung three sets the timing', ps: [
      'The school decides when the formal project starts. The rehearsal has to finish before that date, so the first lesson plans back from it.',
      'After the start date the rehearsal is closed and never reopened.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for S6 candidates',
    lede: 'Sorted by the part of the requirements or the paper they serve. Which to begin with is settled in the free lesson.',
    bands: [
      { num: 'I', h3: 'Objects and procedures', sub: 'Section 1 and both software project types', courses: [
        { code: 'UK / AH1 / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Inheritance, polymorphism and arrays of objects, in a language that makes every type explicit.' },
        { code: 'UK / AH1 / 02', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python, zero to advanced', blurb: 'Classes in Python for schools that teach in it, with modules and parameter passing alongside.' },
        { code: 'UK / AH1 / 03', slug: 'complete-java-programming-masterclass-college', title: 'Java, core to advanced', blurb: 'For candidates already past the teen course who want the deeper object-oriented material.' }
      ] },
      { num: 'II', h3: 'Algorithms and data', sub: 'The standard algorithms and the database route', courses: [
        { code: 'UK / AH2 / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'Binary search, the two sorts and linked lists, traced by hand before any of them is coded.' },
        { code: 'UK / AH2 / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures, advanced', blurb: 'Harder structures and algorithm analysis, for candidates heading towards a computing degree.' },
        { code: 'UK / AH2 / 03', slug: 'mysql-mastery-for-teens', title: 'MySQL for teens', blurb: 'Subqueries, HAVING and EXISTS, the SQL the database project type is built around.' }
      ] },
      { num: 'III', h3: 'Pages and working method', sub: 'For the web option and for any rehearsal', courses: [
        { code: 'UK / AH3 / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web for teens', blurb: 'Forms, sessions and media queries in a modern stack. The ideas carry over; the PHP does not.' },
        { code: 'UK / AH3 / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Form elements, tables and media queries, a quick refresher for anyone who took the software route at Higher.' },
        { code: 'UK / AH3 / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Small iterations with a record of each, which suits the agile approach the task permits.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Rehearse first, then the paper',
    lede: 'Our teachers are in India, which keeps one clock all year. Scotland sits four and a half hours behind during British Summer Time and five and a half hours behind in winter, and every slot is agreed in UK time.',
    slots: [
      { time: 'Early evening', l: 'Most S6 candidates choose this, straight after school.' },
      { time: 'Late evening', l: 'Around study periods, part-time jobs or sport.' },
      { time: 'Saturday or Sunday morning', l: 'Room for a full two-hour paper with marking afterwards.' }
    ],
    cells: [
      { h3: 'Objects written by hand', p: 'Every class is written by the candidate, with its diagram drawn first, because that is what the project looks for.' },
      { h3: 'Sorts on every structure', p: 'Binary search and both sorts applied to arrays of objects, 2-D arrays and records, each with printed before-and-after output.' },
      { h3: 'One test per requirement', p: 'Test plans written before the code, a planned test for each requirement, never several bundled into one.' },
      { h3: 'A brief of our own', p: 'The rehearsal project uses a scenario we set, closed before the candidate\'s formal project begins.' },
      { h3: 'Paper practice', p: 'Unfamiliar code and designs explained in writing, because the harder marks go to explanation.' },
      { h3: 'Small groups', p: 'Five to ten S6 candidates on the same rung, reading each other\'s designs aloud.' }
    ]
  },

  projectsH2: 'Work our older students built in lessons',
  projectsLede: 'Four projects from ordinary classes, none of them assessed. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, copied word for word.',

  fees: {
    h2: 'Fees for Advanced Higher lessons',
    lede: 'A single monthly charge in US dollars, the rate for every family outside India. The first lesson is free, and billing begins only once a course and a weekly time are agreed.',
    free: ['A real lesson on Advanced Higher content', 'An honest read of which rung to start on', 'A phone number is all we ask for'],
    group: ['Five to ten S6 candidates on one rung', 'One teacher from rehearsal to exam', 'Rehearsal designs and test plans checked weekly', 'Paper practice once the formal project starts'],
    one: ['A teacher for one candidate', 'The rehearsal timed to the school\'s start date', 'Useful when that start date is close']
  },

  faq: {
    eyebrow: 'Questions about Advanced Higher Computing Science',
    h2: 'What S6 candidates and parents ask',
    items: [
      { q: 'How is Advanced Higher Computing Science assessed?', a: 'By a project worth 80 marks and a two-hour question paper worth 55 marks, 135 in all. The project is roughly 60 per cent of the award and the paper roughly 40, and the course is graded A to D.' },
      { q: 'What changed for session 2026 to 27?', a: 'Each of the four project types now comes with 10 mandatory functional requirements set by Qualifications Scotland. Candidates still choose their own scenario and agree it with their teacher, but may not add requirements of their own.' },
      { q: 'What are the four project types?', a: 'Object-oriented software with a database, procedural software with a database, a database with a software or web interface, and a website with a database. The options pairing software with web were removed for 2025 to 26.' },
      { q: 'How long does the project take?', a: 'Evidence must be produced in no more than 20 hours, some of which can happen outside class. There is no word count, and the evidence goes into one of four mandatory templates, printed on paper.' },
      { q: 'Can I use Tkinter, PyGame or Unity?', a: 'No. The task rules out pre-written frameworks and plug-ins such as those, because they stop candidates showing the skills being assessed. The interface is not marked for polish, so a plain one is enough.' },
      { q: 'What is in the question paper?', a: 'Section 1, software design and development, is compulsory and worth 35 marks. Candidates then answer either Section 2, database, or Section 3, web, for 20. Section 1 draws on object-oriented programming, the standard algorithms, 2-D arrays and linked lists.' },
      { q: 'Do I need Higher first?', a: 'Entry is left to the school or college, but the specification expects candidates to have achieved Higher Computing Science or to have equivalent qualifications or experience.' },
      { q: 'Will you help with my project?', a: 'Not with the project itself. We teach the skills it assesses on a practice brief of our own, finished before your formal project starts, and after that we do not see, discuss or correct any of your project work.' },
      { q: 'Is this still an SQA course?', a: 'Qualifications Scotland replaced SQA on 1 February 2026. The September 2026 editions of the Advanced Higher documents are its own, and the course code is C816 77.' },
      { q: 'What does it cost?', a: 'The first lesson costs nothing. After it there is one monthly fee in US dollars, lower for a group place than for a teacher to yourself, with the figures in the fees section. Nothing is charged in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Around the Advanced Higher year',
    lede: 'The levels beneath it, the rules on AI, and the wider picture.',
    items: [
      { href: '/higher-computing-science-help', label: 'Higher Computing Science', p: 'The level beneath, and the usual route in.' },
      { href: '/national-5-computing-science-help', label: 'National 5 Computing Science', p: 'Where the input validation every project now needs was first taught.' },
      { href: '/coding-and-ai-classes-in-scotland', label: 'Coding and AI classes in Scotland', p: 'The Scottish system from primary school to S6.' },
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy-paste it', p: 'Using AI around assessed work without losing the marks.' },
      { href: '/learn-to-think-not-just-use-ai-tools-uk', label: 'Learn to think, not just use AI tools', p: 'For candidates who want the reasoning behind the tools.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, with every UK page listed.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call back at a UK time that suits you. The lesson works on real Advanced Higher material and ends with a rung to start on and a date the rehearsal should finish by.',
    readFirst: 'Prefer to read first? Every <a class="ag-inline-link" href="/courses">course page</a> lists its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> says who the method suits and who it does not, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows what students build.',
    note: 'WhatsApp is the quickest route and costs nothing from a UK phone. It reaches our office in India, so the number begins +91.',
    formNote: 'No card, no contract, and one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Scotland', links: [
        { href: '/coding-and-ai-classes-in-scotland', label: 'Coding and AI in Scotland' },
        { href: '/higher-computing-science-help', label: 'Higher Computing Science' },
        { href: '/national-5-computing-science-help', label: 'National 5 Computing Science' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'Also useful', links: [
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'AI in assessed work' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'Coding roadmap' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Advanced Higher teaching, live, on UK time'
  },

  personalityCss: `
.ag-root.ag-ahcs .ag-hero h1 { letter-spacing: -0.03em; font-weight: 750; }
.ag-root.ag-ahcs .ag-capsule { border-left-width: 6px; }
.ag-root.ag-ahcs .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ahcs .ag-table caption { text-align: left; font-weight: 650; letter-spacing: 0.01em; }
.ag-root.ag-ahcs .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-ahcs .ag-band-head h3 { letter-spacing: -0.012em; }
`,

  mustMention: ['55 marks', '20 hours', '10 mandatory functional requirements', 'array of objects', 'binary search', 'insertion sort', 'polymorphism', 'HAVING', 'Qualifications Scotland', 'C816 77'],

  dossier: {
    curriculumAuthority: 'Scotland, Advanced Higher Computing Science. Course Specification, course code C816 77, course assessment code X816 77, SCQF level 7 (32 SCQF credit points), valid from session 2026-27, version 5.0, September 2026, read from the sqa.org.uk PDF: question paper 55 marks, 2 hours, "approximately 40% of the overall marks for the course assessment (135 marks)", Section 1 software design and development 35 marks mandatory, then Section 2 database or Section 3 web for 20; project "80 marks, which is approximately 60%"; stages analysis 10, design 20, implementation 30, testing 15, evaluation 5; "an open brief"; evidence "in no more than 20 hours"; "This is an open-book assessment"; "There is no word count"; "the 10 mandatory functional requirements provided for each project"; "Candidates must not introduce their own functional requirements"; graded A to D; recommended entry "Candidates should have achieved the Higher Computing Science course or equivalent qualifications and/or experience"; question paper "approximately 30% of marks \'A\' type" and "approximately 50% of marks \'C\' type"; content including the object-oriented constructs, 2-D arrays, array of objects, linked lists (describe and exemplify), binary search, insertion sort, bubble sort, HAVING, subqueries, IN, NOT, BETWEEN, ANY, EXISTS, surrogate keys, PHP form data, sessions and database connection, media queries. Project Assessment Task, SCQF Level 7, version 4.0, September 2026, valid from session 2026-27: "You must not add further functional requirements to your project."; examples show scope but "your project must be based on your own idea"; "you do not need to develop a sophisticated interface, as this is not assessed"; frameworks "such as Unity, Tkinter and PyGame" excluded; "Candidates must not submit their full code."; evidence in "paper-based format"; "Group work is not allowed once formal work on assessment has started."; one-to-one help on produced work "could become support for assessment"; teachers "should not prompt candidates to revisit their initial analysis and design"; analysis marks outline 1, use case 2, requirements specification 5, plan 2; implementation 4 marks for ongoing testing; testing persona and test cases 3, final testing 10, results 2; evaluation fitness for purpose 2, maintainability 2, robustness 1. History: version 2.0 (September 2024) "introduce a maximum limit of end-user and functional requirements"; version 3.0 (session 2025-26) mandatory templates, SDD/WDD and WDD/SDD options removed, penalty for "more than six end-user requirements or more than eight additional functional requirements"; version 4.0 from session 2026-27 adds "the project scope, 10 mandatory functional requirements and an example for each of the four project types". Course Report 2025: "Number of resulted entries in 2025: 767"; "57.3% of candidates attempted questions in section 2" and "the remaining 42.7%" section 3; "difficult, if not impossible"; "inheritance is primarily concerned with structure, whereas polymorphism is concerned with behaviour"; "the first opportunity that candidates have to be creative". Qualifications Scotland replaced SQA on 1 February 2026.',
    localProject: 'The scenario is yours, the ten requirements are not. From session 2026-27 Qualifications Scotland gives every Advanced Higher project type ten mandatory functional requirements and forbids candidates adding their own, while the brief stays open on context. The page explains the four project types at summary level (the task carries a confidentiality note, so the lists are not reproduced), tells the three-year story of the brief being tightened (a maximum in 2024, templates and a penalty in 2025-26, set requirements in 2026-27) with the 2025 course report\'s reason, lays out the 80 project marks stage by stage with the evidence the report found missing, then covers the 55-mark question paper with the 2025 section split and the report\'s demanding areas. Because everything the project assesses is now knowable in advance, the last section turns it into what we teach before the formal project starts, a rehearsal on our own brief, and states where our help stops, grounded in the reasonable-assistance rules the task sets for teachers. It says plainly that no PHP course exists in our catalogue. Lesson family: a qualification whose coursework was narrowed by its awarding body, and what honest preparation looks like when the assessed work must stay the candidate\'s alone.',
    requiredMentions: ['10 mandatory functional requirements', '20 hours', '55 marks', 'array of objects'],
    sources: [
      { claim: 'Advanced Higher Computing Science Course Specification, version 5.0, September 2026: course codes, SCQF level and credits, both components with marks, duration and weightings, the project stages and conditions, recommended entry, the A and C mark proportions, and the content of all three areas.', url: 'https://www.sqa.org.uk/sqa/files_ccc/ah-course-spec-computing-science.pdf' },
      { claim: 'Advanced Higher Computing Science Project Assessment Task, version 4.0, September 2026: the four project types with ten mandatory functional requirements each, the ban on added requirements and on frameworks such as Unity, Tkinter and PyGame, evidence and template rules, reasonable assistance, the stage-by-stage marks, and the version history back to 2022.', url: 'https://www.sqa.org.uk/sqa/files_ccc/ah-cat-computing-science.pdf' },
      { claim: 'Course Report 2025, Advanced Higher Computing Science: resulted entries, the section 2 and section 3 split, the areas candidates found demanding in the paper, and the project evidence often missing.', url: 'https://www.sqa.org.uk/sqa/files_ccc/2025-ah-course-report-computing-science.pdf' },
      { claim: 'Qualifications Scotland, Advanced Higher Computing Science page: the replacement of SQA on 1 February 2026, and the September 2026 dates on the specification, the coursework task and the project templates.', url: 'https://www.sqa.org.uk/sqa/48508.html' }
    ],
    rejectedClaims: [
      'The full text of the ten functional requirements for each project type: the task carries a confidentiality note for approved centres, so the page summarises them and links to the source.',
      'Grade boundaries as targets: the 2025 minimum marks are published but move every year, and quoting them would read as a promise.',
      'Any PHP course: none exists in our catalogue; the page says so and offers an honest check instead.',
      'That database connectors count as banned frameworks: the task names Unity, Tkinter and PyGame, and the specification expects programs to connect to a database, so no wider reading is offered.',
      'A 2026 course report: none on the Advanced Higher page on 21 September 2026, and the 2026 URL returns 404.',
      'The 2025 report\'s advice to use version 3.0 of the task: superseded by version 4.0 and not repeated.',
      'Any promise about a grade, any suggestion of a scenario, and any review of a candidate\'s project evidence, all of which we decline.'
    ]
  }
};
