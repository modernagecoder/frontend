'use strict';
// HSC Software Engineering major project help (ag- exam door, Australia cluster Phase 3, row 57).
// Facts read raw on 7 October 2026 at the NSW Curriculum site (Software Engineering 11-12 Syllabus
// (2022), Year 12 focus area "Software engineering project": identifying and defining, research and
// planning (Waterfall, Agile, WAgile, project management with Gantt charts, quality assurance),
// producing and implementing (version control, backup), testing and evaluating), NESA's All My Own Work
// page and NESA official notice 34/26 (ACE Rules changed: 2.5.2 certifying HSC projects and 10.1.2
// school malpractice policy). Indicative hours for the project focus area: 30 (syllabus course
// structure, as recorded on our HSC Software Engineering page). Spine: a requirements traceability
// matrix that exposes an untested requirement in an invented project, checked free on 7 October 2026.
// We teach technique with our own examples and never write, edit, debug or review a student's project.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'HSC SOFTWARE ENGINEERING PROJECT', label: 'Software Engineering project help', blurb: 'The Year 12 project focus area in NSW: what the syllabus asks for, development approaches, quality assurance, and the integrity rules that keep the project the student\'s own.' },
  slug: 'software-engineering-major-project-help-hsc',
  code: 'sepr',
  accent: '#842724',
  accentRationale: 'Software Engineering project: a muted brick red, contrast above 4.9:1 on #EDE7DA, at least 11 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Software Engineering project help',
  title: 'HSC Software Engineering Project Help | Skills, Not Ghostwriting',
  description: 'Help with the skills behind the HSC Software Engineering project in NSW: Agile, Waterfall, testing, version control and quality checks. We never write your project.',
  ogDescription: 'The Year 12 Software Engineering project focus area, read from the NSW syllabus: identifying requirements, Waterfall, Agile and WAgile, project management, quality assurance, version control, testing and evaluation, and the NESA integrity rules around it.',
  twitterDescription: 'The HSC Software Engineering project: what the syllabus asks, and the skills we teach without touching your work.',
  pageName: 'HSC Software Engineering Project Help',
  webPageDescription: 'Skills support for NSW Year 12 Software Engineering students on the project focus area: syllabus content, development approaches, project management, quality assurance with a traceability matrix, version control, and NESA rules on authentic work.',
  courseDescription: 'Live online teaching of the skills a software project needs: requirements, planning approaches, version control, testing and evaluation, taught with our own examples and never on a student\'s assessed project.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Software Engineering project',
  navLinks: [
    { href: '#syllabus', label: 'What the syllabus asks' },
    { href: '#approaches', label: 'Approaches' },
    { href: '#trace', label: 'Traceability' },
    { href: '#integrity', label: 'Integrity' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New South Wales &middot; Year 12 Software Engineering &middot; Skills, not ghostwriting',
  h1: 'Software Engineering project help',
  lede: 'The Software Engineering project in Year 12 is where NSW students show they can run a piece of software work from a vague need to a tested, evaluated solution. It is meant to be hard in a particular way: not just writing code, but defining requirements, choosing a development approach, managing time, checking quality and responding to feedback. We teach every one of those skills. We do not do any of it for you.',
  secondaryCta: { href: '#trace', label: 'See the traceability matrix' },
  wa: 'Hello Modern Age Coders, I would like a free class on project skills for HSC Software Engineering.',
  heroNote: 'Read from the NSW syllabus &middot; Skills taught on our own examples &middot; Your project stays your own',
  spec: [
    ['Focus area', 'Software engineering project'],
    ['Indicative hours', '30, in Year 12'],
    ['Approaches studied', 'Waterfall, Agile, WAgile'],
    ['Tools named', 'Gantt charts, collaboration tools'],
    ['Practice required', 'Version control and backup'],
    ['Integrity program', 'All My Own Work'],
    ['We teach', 'Planning, testing, evaluation skills'],
    ['We never', 'Write, edit, debug or review your project']
  ],
  capsuleQ: 'In short',
  capsule: 'The Software engineering project is a Year 12 focus area of the NSW Software Engineering 11-12 Syllabus (2022). Students define and analyse a problem, research Waterfall, Agile and WAgile approaches, manage the project with tools such as Gantt charts, apply quality assurance and version control, then test, evaluate and report. The project must be the student\'s own work under NESA rules.',

  picks: {
    eyebrow: 'Skills worth having first',
    h2: 'Three courses that build project skills',
    lede: 'Version control, then a full build cycle, then the problem solving that keeps a project moving.',
    items: [
      { course: 'git-github-version-control-course-for-teens', code: 'SEPR / 01', title: 'Version control with Git', note: 'Commits, branches and history, the habit the syllabus names directly and the best evidence of steady, genuine work.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'SEPR / 02', title: 'A full build, end to end', note: 'Front end, back end and database built in tested slices, on projects of our own, so the cycle is familiar before Year 12.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'SEPR / 03', title: 'Problem solving and testing', note: 'Algorithms, tracing and test design, the skills that turn a stuck project into a moving one.' }
    ]
  },

  sections: [
    {
      id: 'syllabus', tint: 'tint', eyebrow: 'What the syllabus asks for',
      h2: 'Four stages inside the project focus area',
      lede: 'NESA organises the Software engineering project content into the stages below. The items are quoted from the Year 12 content on the NSW Curriculum site, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Software engineering project: content by stage (selected items, NESA wording)', head: ['Stage', 'Examples of what students do'], rows: [
          ['Identifying and defining', 'Define and analyse the requirements of a problem, including assessing scheduling and financial feasibility and defining boundaries'],
          ['Research and planning', 'Research and use the Waterfall and Agile approaches; research the WAgile approach; apply project management, including scheduling and tracking with Gantt charts'],
          ['Quality', 'Defining criteria on which quality will be judged; ensuring requirements are met using a continual checking process'],
          ['Producing and implementing', 'Design, construct and implement a solution; implement version control; demonstrate programmed backup'],
          ['Testing and evaluating', 'Apply methodologies to test code; analyse and respond to feedback; evaluate the effectiveness of the solution, including a report that synthesises feedback']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The list makes one thing clear: code is only part of the project. A large share of the content is about the process around the code, from feasibility at the start to a feedback report at the end. Students who treat the project as "build an app, then write it up" usually find the process evidence thin when it matters.',
            'The syllabus also asks students to explore social and ethical issues of project work, including working individually and collaboratively and responding to stakeholders, and to "Explore strategies to respond to difficulties", naming looking for a solution online, collaboration with peers and outsourcing as things to explore.'
          ],
          right: [
            'The focus area carries 30 indicative hours in Year 12, alongside Secure Software Architecture, Programming for the Web and Software Automation. That is not much time for a full development cycle, which is why planning skills and a realistic scope matter so much.',
            'For the course as a whole, including the online HSC exam, see our <a class="ag-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering page</a>. This page stays on the project.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/tas/software-engineering-11-12-2022/content/year-12/fa0beecd16" rel="noopener" target="_blank">NSW Curriculum, Software Engineering 11-12, Year 12, Software engineering project</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'approaches', tint: 'deep', eyebrow: 'Development approaches',
      h2: 'Waterfall, Agile and the hybrid in between',
      lede: 'The syllabus asks students to research and use two approaches and research a third. The comparison below is our teaching summary, built on the points NESA lists for each.',
      body: [
        { kind: 'table', caption: 'Three approaches the project focus area names', head: ['Approach', 'What NESA asks students to look at', 'Our one-line summary'], rows: [
          ['Waterfall', 'Logical progression of steps through the life cycle; the stages of falling water; advantages and disadvantages; scale and types of developments', 'Finish each stage before the next begins'],
          ['Agile', 'Rate of developing a final solution; method tailoring; iteration workflow; scale and types of developments', 'Build in short cycles and adjust as you learn'],
          ['WAgile', 'Understanding it is a hybrid model; when and how intervention is applied during the life cycle; scale and types of developments', 'Plan like Waterfall, build in Agile cycles']
        ] },
        { kind: 'two', mt: true,
          left: [
            'For a one-person school project with a fixed deadline, the honest answer is often a hybrid: settle the requirements and a schedule early, then build and test in short cycles. That is close to what WAgile describes, and being able to justify such a choice in writing is worth more than naming the approaches.',
            'A Gantt chart is the planning tool the syllabus names for scheduling and tracking. The useful habit is updating it as reality changes, so it becomes a record of what happened rather than a plan drawn once and forgotten.'
          ],
          right: [
            'We teach these approaches on small projects of our own, so students experience a Waterfall plan breaking under a late requirement change, and an Agile cycle absorbing it. That experience makes the written comparison in a student\'s own project far more convincing.',
            'Version control fits every approach. Each commit is a dated, described step, and a history of steady commits is both good engineering and natural evidence that the work was built over time by the student.'
          ] }
      ]
    },
    {
      id: 'trace', tint: 'tint', eyebrow: 'Quality assurance',
      h2: 'A traceability matrix catches the requirement nobody tested',
      lede: 'The syllabus asks for "ensuring requirements are met using a continual checking process". A requirements traceability matrix is a simple way to do exactly that: every requirement is linked to the design that meets it and the test that proves it.',
      body: [
        { kind: 'p', text: 'A worked example on an invented project of our own, a school library loan tracker. The table lists five requirements and checks each against a design element and a test.' },
        { kind: 'table', caption: 'Traceability matrix for an invented library loan tracker', head: ['Requirement', 'Design element', 'Test case', 'Status'], rows: [
          ['R1 Record a loan with a due date', 'Loans table and form', 'T1: add a loan, read it back', 'Passed'],
          ['R2 Flag loans more than 14 days overdue', 'Daily overdue check', 'T2: loan dated 15 days ago is flagged', 'Passed'],
          ['R3 Return a book and close the loan', 'Return button', 'T3: returned loan no longer listed', 'Passed'],
          ['R4 Stop a student holding more than 3 loans', 'Limit check on new loan', 'None written', 'Not tested'],
          ['R5 Search loans by student name', 'Search box', 'T5: partial name finds the student', 'Passed']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The matrix shows at a glance that only 4 of the 5 requirements have a test, 80% coverage, and that R4 is the gap. Writing T4, a fourth loan refused for a student who already holds 3, raises coverage to 100% and, in our example, exposes a bug: the limit check counted returned loans as well as open ones.',
            'Nobody would have found that by clicking around the finished app. The matrix forces the uncomfortable question for every requirement: how do we know this works?'
          ],
          right: [
            'The same matrix serves the evaluation stage. When the syllabus asks students to evaluate the effectiveness of a solution, a traceability table gives the evaluation a backbone: each requirement, the evidence it is met, and what still fails.',
            'In a student\'s own project, the requirements, design and tests are theirs to write. What we teach is the method, on examples like this one, so the student can build the matrix for their own work without help.'
          ] }
      ]
    },
    {
      id: 'integrity', tint: '', eyebrow: 'Keeping it your own work',
      h2: 'The NESA rules around an assessed project',
      lede: 'These points come from NESA\'s All My Own Work page and official notice 34/26, read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'What NESA requires around authentic work', head: ['Rule', 'What NESA says'], rows: [
          ['All My Own Work', 'To be eligible for entry into a Preliminary and/or HSC course, and for the award of the HSC, all students must complete AMOW or its equivalent'],
          ['What AMOW covers', 'Four topics, including what is and is not all your own work, plagiarism, acknowledging other people\'s work, and working honestly when getting help'],
          ['Notice 34/26', 'Changes to the ACE Rules on take-home tasks, including rules on certifying HSC projects and on developing a school malpractice policy'],
          ['Who it applies to', 'Year 12 students commencing HSC courses from Term 4, 2026, and Year 11 students commencing Preliminary courses from Term 1, 2027']
        ] },
        { kind: 'p', text: 'One of AMOW\'s topics is about working honestly when getting help with your work, and that is the line we hold. We teach planning, version control, testing and evaluation as general skills on our own projects. We will talk about a student\'s project only in general terms, such as how to choose a scope or how to structure an evaluation, and we do not write, edit, debug, review or comment on any code, document or design that will be submitted.' },
        { kind: 'p', text: 'This protects the student. A project that reflects the student\'s own skill can be explained line by line if a teacher asks, and NESA\'s tighter rules make that ability more important, not less.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/nesa/hsc/all-my-own-work" rel="noopener" target="_blank">NESA, All My Own Work</a>; <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/nesa/news/all/changes-ace-rules-take-home-tasks-artifical-intelligence" rel="noopener" target="_blank">NESA official notice 34/26</a>. Checked on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Skills in order',
    h2: 'Four skills to have before the project starts',
    lede: 'A project goes far more smoothly when these are already habits, built on practice projects rather than the assessed one.',
    table: { caption: 'Project skills, from first to last', head: ['Order', 'Skill', 'Practised on'], rows: [
      ['1', 'Writing testable requirements', 'Our invented briefs, one sentence per requirement'],
      ['2', 'Planning with a Gantt chart', 'A two-week practice build, updated daily'],
      ['3', 'Version control', 'Every practice project, with a commit per change'],
      ['4', 'Testing and evaluation', 'A traceability matrix and a short feedback report']
    ] },
    left: { h3: 'Common project trouble', ps: [
      'Scope is the usual problem: an idea that needs six months of work squeezed into far fewer hours. Practising scoping on a small brief teaches students to cut features before they cut quality.',
      'The second is late testing. Students who test only at the end discover problems when there is no time left to fix them.'
    ] },
    right: { h3: 'Beyond Year 12', ps: [
      'Every skill here is the daily work of professional software teams, and of university group projects.',
      'Students who want harder programming problems alongside the project can look at the <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">competitions calendar</a>, which includes the informatics olympiad.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for project-ready students',
    lede: 'Grouped by the part of the project they prepare for. Each card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Process skills', sub: 'Planning and version control', courses: [
        { code: 'SEPR / P / 01', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Commits, branches and pull requests from the beginning.' },
        { code: 'SEPR / P / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Breaking problems down and tracing solutions.' },
        { code: 'SEPR / P / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Correct code under pressure, and testing edge cases.' }
      ] },
      { num: 'II', h3: 'Build skills', sub: 'Front end to back end', courses: [
        { code: 'SEPR / B / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'A complete web application built in tested steps.' },
        { code: 'SEPR / B / 02', slug: 'backend-coding-masterclass-for-teens', title: 'Backend development', blurb: 'APIs, databases and error handling on the server.' },
        { code: 'SEPR / B / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language many NSW projects use, from basics to classes.' }
      ] },
      { num: 'III', h3: 'Quality and security', sub: 'Making it trustworthy', courses: [
        { code: 'SEPR / Q / 01', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Secure habits for code that handles real data.' },
        { code: 'SEPR / Q / 02', slug: 'mysql-mastery-for-teens', title: 'MySQL for teens', blurb: 'Database design that stays correct as data grows.' },
        { code: 'SEPR / Q / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Interfaces and state for students building apps.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Our approach',
    h2: 'Lessons that build skills, never the project',
    lede: 'Our tutors teach from India, which runs four and a half hours behind Sydney in winter and five and a half hours behind during NSW daylight saving. A 5.30 pm Sydney lesson in summer starts at noon for the tutor, so after-school sessions are simple to arrange.',
    slots: [
      { time: 'Weekday after school', l: 'Weekly skill sessions through Year 11 and Year 12.' },
      { time: 'Weekend workshops', l: 'A practice project built from brief to evaluation.' },
      { time: 'Holiday blocks', l: 'Focused practice on one skill, such as testing.' }
    ],
    cells: [
      { h3: 'Our examples only', p: 'Every exercise uses invented briefs and our own code.' },
      { h3: 'Process made visible', p: 'Students keep a Gantt chart and commit history on every practice build.' },
      { h3: 'Testing as a habit', p: 'Each practice requirement gets a test before it gets code.' },
      { h3: 'Classes of fifteen to twenty', p: 'Students at one level, each presenting their practice work.' },
      { h3: 'One-to-one coaching', p: 'Private lessons on a single skill, never on assessed work.' },
      { h3: 'Clear boundaries', p: 'We do not write, edit, debug or review projects, and we promise no marks.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Personal projects, never school assessment. More are in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Word for word from Google, as our students and parents wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly fee in US dollars, set at one level for every family outside India. Joining is free and only the current month is ever charged.',
    free: ['A real lesson on a project skill', 'Honest advice on what to learn next', 'No card details'],
    group: ['Fifteen to twenty students per class', 'One tutor through the term', 'Practice projects reviewed', 'A certificate at the end'],
    one: ['Private skill coaching', 'Focused on one weak area', 'Strictly no assessed work']
  },

  faq: {
    eyebrow: 'Questions about project help',
    h2: 'What Software Engineering students ask',
    items: [
      { q: 'What is the HSC Software Engineering project?', a: 'It is the Software engineering project focus area of the NSW Software Engineering 11-12 Syllabus (2022), with 30 indicative hours in Year 12. Students define a problem, plan and manage development, build and implement a solution with version control, then test, evaluate and report.' },
      { q: 'Will you write or fix my project?', a: 'No. We teach the skills a project needs using our own examples. We do not write, edit, debug, review or comment on any code, document or design that will be submitted for assessment.' },
      { q: 'What is the difference between Waterfall and Agile?', a: 'Waterfall completes each stage of development before the next begins. Agile builds in short cycles and adjusts the plan as it goes. WAgile is a hybrid that the syllabus also asks students to research.' },
      { q: 'What is a requirements traceability matrix?', a: 'A table linking each requirement to the design element that meets it and the test that proves it. Gaps, such as a requirement with no test, show up immediately, which supports the syllabus aim of checking requirements continually.' },
      { q: 'Why does version control matter for the project?', a: 'The syllabus names it, and it is good practice: each commit records a dated, described change. A steady commit history also shows how the work developed over time.' },
      { q: 'What is All My Own Work?', a: 'A NESA program on academic integrity. NESA states all students must complete it, or its equivalent, to be eligible to enter Preliminary and HSC courses and for the award of the HSC.' },
      { q: 'Did NESA change the rules for projects?', a: 'NESA official notice 34/26 changed the ACE Rules on take-home tasks, including certifying HSC projects and school malpractice policies, for Year 12 students commencing HSC courses from Term 4, 2026.' },
      { q: 'Can I use AI tools in my project?', a: 'That is set by NESA rules and your school. Ask your teacher before using any AI tool. We do not advise on using AI inside assessed work.' },
      { q: 'Can you promise a good project mark?', a: 'No. The project and its mark belong to the student. We teach the skills that make good work possible.' },
      { q: 'What do lessons actually cover?', a: 'Requirements writing, planning approaches, Gantt charts, Git, testing methods, traceability and evaluation reports, all practised on our own small projects.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for NSW computing students',
    lede: 'The full course, the other computing course, and subject choices.',
    items: [
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering', p: 'The whole course and its online exam.' },
      { href: '/hsc-enterprise-computing-help', label: 'HSC Enterprise Computing', p: 'The data and systems course, with its own project.' },
      { href: '/choosing-year-11-computing-subjects-australia', label: 'Choosing computing subjects', p: 'Comparing the options before Year 11.' },
      { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code', p: 'Why copied code fails you later.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'All our Australian pages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'How a lesson runs, plainly.' }
    ]
  },

  start: {
    h2: 'Book a free project-skills lesson',
    lede: 'Say which skill feels weakest, planning, Git, testing or evaluation, and we will teach it in the free lesson on a practice project of our own.',
    readFirst: 'Want to read first? Course outlines are on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, our method is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the wider course is covered on our <a class="ag-inline-link" href="/hsc-software-engineering-help">Software Engineering page</a>.',
    note: 'WhatsApp gets the quickest answer. The +91 number is Indian because the school runs from India; we have no office in NSW.',
    formNote: 'No card, no contract. One reply to schedule it.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/online-coding-tutor-australia', label: 'Online coding tutor' }
      ] },
      { h4: 'NSW computing', links: [
        { href: '/hsc-software-engineering-help', label: 'Software Engineering' },
        { href: '/hsc-enterprise-computing-help', label: 'Enterprise Computing' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'We teach the skills; the project stays yours'
  },

  personalityCss: `
.ag-root.ag-sepr .ag-hero-grid { gap: clamp(1rem, 3.1vw, 2.6rem); }
.ag-root.ag-sepr .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-sepr .ag-capsule { border-left-width: 6px; }
.ag-root.ag-sepr .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-sepr .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-sepr .ag-table th { letter-spacing: 0.02em; }
.ag-root.ag-sepr .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-sepr .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'NSW Education Standards Authority (NESA). Software Engineering 11-12 Syllabus (2022), Year 12 focus area Software engineering project, read at curriculum.nsw.edu.au on 7 October 2026: identifying and defining; Waterfall, Agile and WAgile; project management with Gantt charts; quality assurance including "ensuring requirements are met using a continual checking process"; version control and programmed backup; testing and evaluating with a feedback report. 30 indicative hours. NESA All My Own Work page and official notice 34/26 (ACE 2.5.2 and 10.1.2 changes).',
    localProject: 'A requirements traceability matrix for an invented school library loan tracker: five requirements linked to design and tests, R4 (no more than 3 loans) untested, 80% coverage rising to 100% when T4 is written, exposing a limit check that counted returned loans. Written by us; no student project involved.',
    requiredMentions: ['Software engineering project', 'WAgile', 'ensuring requirements are met using a continual checking process', 'Gantt charts', 'requirements traceability matrix', '80% coverage', 'All My Own Work', 'developing a school malpractice policy', 'Explore strategies to respond to difficulties'],
    sources: [
      { claim: 'NSW Curriculum, Software Engineering 11-12, Year 12, Software engineering project: content by stage.', url: 'https://curriculum.nsw.edu.au/learning-areas/tas/software-engineering-11-12-2022/content/year-12/fa0beecd16' },
      { claim: 'NSW Curriculum, Software Engineering 11-12 overview: Year 12 focus areas and indicative hours.', url: 'https://curriculum.nsw.edu.au/learning-areas/tas/software-engineering-11-12-2022/overview' },
      { claim: 'NESA, All My Own Work: completion required for entry to Preliminary and HSC courses and award of the HSC; four topics.', url: 'https://www.nsw.gov.au/education-and-training/nesa/hsc/all-my-own-work' },
      { claim: 'NESA official notice 34/26: ACE Rules changes including 2.5.2 certifying HSC projects and 10.1.2 developing a school malpractice policy; who the changes apply to.', url: 'https://www.nsw.gov.au/education-and-training/nesa/news/all/changes-ace-rules-take-home-tasks-artifical-intelligence' }
    ],
    rejectedClaims: [
      'How the project is weighted within school assessment at a particular school: set by each school, not stated.',
      'Any NESA rule on AI use inside the project beyond notice 34/26: not stated; students are told to ask their school.',
      'Any marking criteria for the project: not read, so none are described.',
      'Any offer to write, edit, debug, review or comment on submitted work: refused on the page.',
      'Any promise of a mark: none.'
    ]
  }
};
