'use strict';
// VCE Applied Computing: Software Development help (ag- exam door, Australia cluster Phase 3, row 59).
// Facts read raw on 7 October 2026 from the VCAA: the Applied Computing study design page ("Accreditation
// period from 2025") and the VCE Applied Computing Study Design (2025AppliedComputingStudyDesign.docx):
// Units 1 to 4 accredited from 1 January 2025; Unit 3 Software development (IT033), Unit 4 Software
// development (IT034); students may elect one or both Unit 3 and 4 sequences; School-assessed Coursework
// 20 per cent (Unit 3 10, Unit 4 10), School-assessed Task 30 per cent, examination 50 per cent, 2 hours.
// The VCAA "Administrative information for School-based Assessment in 2026" sets at least 8 to 10 weeks of
// class time for the Unit 3 part of the task and at least 8 weeks for the Unit 4 part. 2026 timetable:
// Applied Computing: Software Development on Friday 13 November, 3:00 pm to 5:15 pm. Spine: validation
// order (existence, then type, then range) on a CSV import (family checked free site-wide 7 October 2026).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'VCE SOFTWARE DEVELOPMENT', label: 'VCE Software Development help', blurb: 'The Applied Computing Units 3 and 4 that build an object-oriented program, then a student-chosen solution: the units, the 30 per cent task, the exam, and input validation done in the right order.' },
  slug: 'vce-applied-computing-software-development-help',
  code: 'vcsd',
  accent: '#4B6684',
  accentRationale: 'VCE Software Development: a slate blue with a working, engineering feel, at least 11 RGB from every site accent and 4.8:1 or better on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'VCE Software Development help',
  title: 'VCE Software Development Help | Applied Computing 3 and 4',
  description: 'Help with VCE Applied Computing: Software Development, Units 3 and 4: OOP modules, the 30 per cent School-assessed Task, the 2-hour exam, and validation technique.',
  ogDescription: 'VCE Applied Computing: Software Development explained from the VCAA study design: what Units 3 and 4 contain, how the study score splits, the 2026 exam date, and why validation has to run in a set order.',
  twitterDescription: 'VCE Software Development from the study design: OOP modules, a 30 per cent task, a 2-hour exam and validation done right.',
  pageName: 'VCE Software Development Help',
  webPageDescription: 'Support for Victorian students taking VCE Applied Computing: Software Development: Units 3 and 4 structure, assessment weightings and class-time guidance, the 2026 examination session, the artificial intelligence key knowledge, and a worked example of existence, type and range checking.',
  courseDescription: 'Live online teaching in object-oriented programming, data validation, testing, project planning and secure software for Victorian VCE Software Development students, without writing any assessed work.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'VCE Software Development',
  navLinks: [
    { href: '#units', label: 'The units' },
    { href: '#weights', label: 'Weights and exam' },
    { href: '#validation', label: 'Validation order' },
    { href: '#task', label: 'The task' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Victoria &middot; Applied Computing: Software Development &middot; Live online',
  h1: 'VCE Software Development help',
  lede: 'Software Development is the half of VCE Applied Computing where students actually build programs: first modules to a teacher\'s design, then a solution to a problem they find themselves. The study design rewards a disciplined process as much as working code, and almost a third of the study score rides on one long project.',
  secondaryCta: { href: '#validation', label: 'See the validation example' },
  wa: 'Hello Modern Age Coders, I would like a free class about VCE Applied Computing: Software Development.',
  heroNote: 'Study design read at source &middot; Method before features &middot; After-school lessons in Victorian time',
  spec: [
    ['Study', 'VCE Applied Computing'],
    ['Units', '3 (IT033) and 4 (IT034)'],
    ['Accredited from', '1 January 2025'],
    ['Task weight', '30 per cent of the study score'],
    ['Exam', '50 per cent, 2 hours'],
    ['2026 exam', 'Friday 13 November'],
    ['We teach', 'OOP, validation and testing'],
    ['We never', 'Build any part of the task']
  ],
  capsuleQ: 'In short',
  capsule: 'VCE Applied Computing: Software Development is the Units 3 and 4 sequence of the Applied Computing study, accredited from 1 January 2025. Unit 3 develops working software modules in an object-oriented language and plans a student-chosen solution; Unit 4 builds and evaluates that solution and studies software security. Coursework is worth 20 per cent, the School-assessed Task 30 and the 2-hour exam 50.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses that match the two units',
    lede: 'An object-oriented language first, then the algorithms and testing the key knowledge lists.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'VCSD / 01', title: 'Python for teens', note: 'Classes, objects, file handling and graphical interfaces: the features Unit 3 Area of Study 1 asks students to use well.' },
      { course: 'java-programming-masterclass-for-teens', code: 'VCSD / 02', title: 'Java for teens', note: 'For schools teaching in Java or C#, where types and encapsulation are explicit from the first line.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'VCSD / 03', title: 'Algorithms and data structures', note: 'Selection sort, quick sort, binary and linear search, each traced and tested, as the key knowledge requires.' }
    ]
  },

  sections: [
    {
      id: 'units', tint: 'tint', eyebrow: 'Inside the study design',
      h2: 'What Units 3 and 4 ask students to do',
      lede: 'From the VCE Applied Computing Study Design, read on 7 October 2026. The study offers two Units 3 and 4 sequences, Software Development and Data Analytics, and the study design notes that students may elect to undertake one or both.',
      body: [
        { kind: 'table', caption: 'Software Development: units and areas of study', head: ['Unit', 'Area of study', 'The work'], rows: [
          ['Unit 3 (IT033)', 'Software development: programming', 'Turn teacher-provided requirements and designs into working modules in an object-oriented language, including a graphical user interface'],
          ['Unit 3 (IT033)', 'Software development: analysis and design', 'Find a problem, need or opportunity, plan it with a Gantt chart, write a software requirements specification, and develop two to three design ideas into a preferred design'],
          ['Unit 4 (IT034)', 'Development and evaluation', 'Build the preferred design into a solution, test and evaluate it, and assess how well the project plan worked'],
          ['Unit 4 (IT034)', 'Cyber security: software security', 'Respond to a teacher-provided case study on an organisation\'s software development practices and their security']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Unit 3 key knowledge is long and concrete. It names data types and structures (one-dimensional and two-dimensional arrays and records), data sources (plain text, delimited CSV and XML), the principles of object-oriented programming (abstraction, encapsulation, generalisation and inheritance), and sorting and searching algorithms down to selection sort, quick sort, binary search and linear search.',
            'It also names three validation techniques, existence checking, type checking and range checking, and three error types: syntax, logic and runtime, with runtime examples including index out of range, type mismatch and divide by zero. The worked example below joins those two lists.'
          ],
          right: [
            'Artificial intelligence is now in the key knowledge itself. Unit 3 lists "emerging trends in programming using artificial intelligence", including using prompts to generate code, automated debugging and testing of modules, and code optimisation, alongside the responsible and ethical use of artificial intelligence tools.',
            'That cuts both ways for students. The exam can ask about these trends, and the School-assessed Task still has to be the student\'s own. Knowing what an AI tool does to a codebase is examinable; letting one write the task is not allowed.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/applied-computing-data-analytics/applied-computing" rel="noopener" target="_blank">VCAA, Applied Computing study design page</a>; VCE Applied Computing Study Design, Units 1 to 4 accredited from 1 January 2025, read on 7 October 2026.' }
      ]
    },
    {
      id: 'weights', tint: 'deep', eyebrow: 'How the study score is built',
      h2: 'Half the score in the exam, nearly a third in one project',
      lede: 'Weightings are quoted from the study design. The class-time guidance comes from the VCAA\'s 2026 administrative information for the task, and the exam session from the 2026 timetable, all checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'VCE Software Development assessment', head: ['Component', 'Contribution to the study score', 'Notes'], rows: [
          ['Unit 3 School-assessed Coursework', '10 per cent', 'The programming outcome: working modules to a given design'],
          ['Unit 4 School-assessed Coursework', '10 per cent', 'The security case study'],
          ['School-assessed Task', '30 per cent', 'Unit 3 analysis and design, then Unit 4 development and evaluation'],
          ['End-of-year examination', '50 per cent', '2 hours; in 2026 on Friday 13 November, 3:00 pm to 5:15 pm']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The VCAA\'s 2026 administrative information gives the task real weight in the timetable as well as the score: at least eight to ten weeks of class time for the Unit 3 analysis and design, and at least 8 weeks of class time for the Unit 4 development and evaluation. Schools also keep an authentication record for every student, filled in as the work progresses.',
            'One sentence in that document deserves attention. If problems show up in a design after it is marked, teachers can comment on its quality, but "the adjustments must be initiated by the student and not directed by the teacher". The same principle limits any outside tutor even more tightly.'
          ],
          right: [
            'The exam covers the key knowledge of both units, which means object-oriented principles, validation, testing tables, naming conventions, project planning and security can all appear in one paper. Students who only revise the code they wrote for the task tend to be caught out by the breadth.',
            'Good exam preparation therefore looks like short, varied practice: read a fragment and name the error type, design a testing table for a function, explain which validation check catches which input, and justify a design choice against a requirement in two or three sentences.'
          ] },
        { kind: 'source', html: 'Sources: VCE Applied Computing Study Design, assessment sections; <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/sites/default/files/2026-01/2026SoftwareDevelopmentAdmin-Information-for-School-based-Assessment.docx" rel="noopener" target="_blank">VCAA, Software Development administrative information for School-based Assessment in 2026</a>; <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable" rel="noopener" target="_blank">VCAA, 2026 VCE examination timetable</a>.' }
      ]
    },
    {
      id: 'validation', tint: 'tint', eyebrow: 'A worked example from Unit 3',
      h2: 'Existence, then type, then range: why the order matters',
      lede: 'The key knowledge lists existence checking, type checking and range checking side by side. They are not interchangeable, and a program that runs them in the wrong order can crash on exactly the bad data it was meant to catch. The data below is invented for practice.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Existence', p: 'Is there anything there at all? A blank cell in a CSV file must be caught first, because every later check assumes a value exists.' },
          { h3: 'Type', p: 'Can the value be read as the type the program needs? "ten" and "12.0" are present, but neither is a whole number.' },
          { h3: 'Range', p: 'Is the number inside the allowed limits? A year level of 15 is a valid integer and still wrong for a secondary school.' }
        ] },
        { kind: 'table', caption: 'Twelve year-level cells from an invented CSV import, rule: whole number from 7 to 12 (our example)', head: ['Cell', 'Existence', 'Type', 'Range', 'Outcome'], rows: [
          ['9', 'Pass', 'Pass', 'Pass', 'Accepted'],
          ['(blank)', 'Fail', 'Not reached', 'Not reached', 'Rejected: missing'],
          ['11', 'Pass', 'Pass', 'Pass', 'Accepted'],
          ['ten', 'Pass', 'Fail', 'Not reached', 'Rejected: not a whole number'],
          ['-4', 'Pass', 'Pass', 'Fail', 'Rejected: out of range'],
          ['13', 'Pass', 'Pass', 'Fail', 'Rejected: out of range'],
          ['12.0', 'Pass', 'Fail', 'Not reached', 'Rejected: not a whole number'],
          ['" 8" (leading space)', 'Pass', 'Pass', 'Pass', 'Accepted'],
          ['7', 'Pass', 'Pass', 'Pass', 'Accepted'],
          ['15', 'Pass', 'Pass', 'Fail', 'Rejected: out of range'],
          ['10', 'Pass', 'Pass', 'Pass', 'Accepted'],
          ['(blank)', 'Fail', 'Not reached', 'Not reached', 'Rejected: missing']
        ] },
        { kind: 'two', mt: true,
          left: [
            'In the right order the twelve cells sort cleanly: 5 accepted, 2 missing, 2 of the wrong type and 3 out of range, each with a message a user can act on. We ran the same rule in Python on 7 October 2026 and got exactly those counts.',
            'Now reverse it. A program that jumps straight to "is the year between 7 and 12?" has to convert the text to a number first, and in Python int() raises a ValueError on four of these cells: both blanks, "ten" and "12.0". That is a runtime error of the type mismatch kind the key knowledge names, triggered by the data validation was supposed to handle.'
          ],
          right: [
            'The leading space is the subtle row. Python\'s int() quietly accepts " 8", so it passes, but another language or a stricter check might not. Writing that case into a testing table, with expected and actual output side by side, is precisely what the key knowledge means by constructing relevant test data.',
            'In the exam, a question that asks which validation technique applies to a given input rewards the same structure: name the check, say what it catches, and say why it must come before or after the others. In a student\'s own solution, the testing table that shows these cases is evidence of real work.'
          ] },
        { kind: 'source', html: 'Validation and error types quoted from the VCE Applied Computing Study Design, Unit 3 key knowledge. The twelve cells, rule and counts are our own, checked in Python on 7 October 2026.' }
      ]
    },
    {
      id: 'task', tint: '', eyebrow: 'The School-assessed Task',
      h2: 'Why we teach around the task, never inside it',
      lede: 'The task is the student\'s solution to a problem they identified. The study design and the VCAA\'s 2026 administrative information spell out what that means.',
      body: [
        { kind: 'table', caption: 'What the VCAA requires of the task', head: ['Point', 'What the VCAA says'], rows: [
          ['Who finds the problem', 'Students are expected to independently identify a problem, need or opportunity from within their community'],
          ['Planning', 'A project plan with student-determined and teacher-provided milestones in a Gantt chart'],
          ['Design', 'Two to three design ideas, with evaluation criteria developed by the student to choose the preferred design'],
          ['Changes after marking', 'The adjustments must be initiated by the student and not directed by the teacher'],
          ['Authentication', 'Teachers monitor progress and record it on an authentication record form for each student']
        ] },
        { kind: 'p', text: 'So our line is simple. We teach object-oriented programming, validation, testing, Gantt charts and design tools with projects we invent, like the CSV example above. Talk about the student\'s own task stays general, and nothing that will be submitted, whether code, plan or document, is designed, written, debugged, reviewed or edited by us. A student who builds the skills with us and then builds the task alone can defend every line of it.' },
        { kind: 'source', html: 'Sources: VCE Applied Computing Study Design, Unit 3 Area of Study 2; VCAA, Software Development administrative information for School-based Assessment in 2026, read on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From Unit 1 to the exam',
    h2: 'Four rungs through the sequence',
    lede: 'Some students arrive from Units 1 and 2 of Applied Computing, others straight into Unit 3. The rungs describe skill, not year level.',
    table: { caption: 'From first programs to an evaluated solution', head: ['Stage', 'Milestone', 'Evidence it is in place'], rows: [
      ['Before Unit 3', '1. Language fluency', 'Writes a hundred lines with functions and a simple interface without help'],
      ['Unit 3 programming', '2. Objects and data', 'Builds classes that encapsulate their data and read a CSV file safely'],
      ['Unit 3 design', '3. Planning', 'Writes requirements, a Gantt chart and two genuinely different design ideas'],
      ['Unit 4', '4. Evaluation', 'Tests against a testing table and judges the solution against its own criteria']
    ] },
    left: { h3: 'If Unit 3 programming feels heavy', ps: [
      'The usual gap is objects. Students who learned scripts can make a program run but struggle to split it into classes, and a few weeks of small, deliberate object-oriented exercises closes it faster than more features.',
      'Validation and testing are also skills on their own. Practising them on throwaway programs means they are automatic by the time the task begins.'
    ] },
    right: { h3: 'Alongside the study', ps: [
      'Students who enjoy the theory more than the building may also like <a class="ag-inline-link" href="/vce-algorithmics-hess-help">VCE Algorithmics (HESS)</a>, the VCAA\'s university-level algorithms study.',
      'The security area of study pairs well with defensive coding practice, the habits behind every input a real user can type.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Software Development students',
    lede: 'Grouped by the part of the sequence they support. Every card opens a complete syllabus.',
    bands: [
      { num: 'I', h3: 'Unit 3 programming', sub: 'Language and objects', courses: [
        { code: 'VCSD / U3 / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Object-oriented Python with files and interfaces.' },
        { code: 'VCSD / U3 / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Strong typing and encapsulation from the first program.' },
        { code: 'VCSD / U3 / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Sorts, searches and structures, traced before they are typed.' }
      ] },
      { num: 'II', h3: 'Unit 4 solutions', sub: 'Building something real', courses: [
        { code: 'VCSD / U4 / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'Interfaces, servers and data for students whose solution lives on the web.' },
        { code: 'VCSD / U4 / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'State, screens and testing for students building an app.' },
        { code: 'VCSD / U4 / 03', slug: 'mysql-mastery-for-teens', title: 'Databases with MySQL', blurb: 'Stored data done properly, for solutions that need more than a file.' }
      ] },
      { num: 'III', h3: 'Security and modern practice', sub: 'Beyond the code', courses: [
        { code: 'VCSD / SEC / 01', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Threats and controls, the language of the Unit 4 case study.' },
        { code: 'VCSD / SEC / 02', slug: 'react-for-teens-complete-masterclass', title: 'React for teens', blurb: 'Component-based interfaces for students who want a modern front end.' },
        { code: 'VCSD / SEC / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'Working with AI tools while understanding every line they produce.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly lessons on Victorian time',
    lede: 'Our teachers are based in India. Victorian clocks are ahead of theirs by 4 hours 30 minutes in winter and by 5 hours 30 minutes under daylight saving, which runs from 4 October 2026 to 4 April 2027 according to the IANA time zone database. A lesson at 4.30 pm in Geelong or Melbourne is 11 am India time in summer, comfortably inside the teaching day.',
    slots: [
      { time: 'Weekday after school', l: 'The usual slot through Units 3 and 4.' },
      { time: 'Weekend morning', l: 'For longer practice on objects, testing or design tools.' },
      { time: 'School holidays', l: 'Focused revision blocks before the November exam.' }
    ],
    cells: [
      { h3: 'Invented projects only', p: 'Every exercise is ours. Assessed work stays out of the lesson.' },
      { h3: 'Testing tables taught', p: 'Expected and actual output, written before the code is run.' },
      { h3: 'Exam-style short answers', p: 'Name the technique, apply it to the scenario, state the effect.' },
      { h3: 'Groups of five to ten', p: 'Senior students at the same level, each explaining their reasoning out loud.' },
      { h3: 'One-to-one option', p: 'For one area of study that needs repair quickly.' },
      { h3: 'No predictions', p: 'We do not forecast study scores or ATARs; the solution and its result belong to the student.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Personal builds only, never school assessment. More sit in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reproduced exactly as families and students wrote them on Google.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly fee, charged in US dollars and identical for every family outside India. No sign-up charge, and you can stop at the end of any month.',
    free: ['A complete lesson with a teacher', 'An honest picture of the gaps', 'No card needed'],
    group: ['Five to ten students at one level', 'The same teacher every week', 'Practice reviewed together', 'A certificate on completion'],
    one: ['A teacher working with one student', 'Focused on a single weak area', 'Handy in the run-up to November']
  },

  faq: {
    eyebrow: 'Questions about the study',
    h2: 'What Victorian students and parents ask',
    items: [
      { q: 'What is VCE Applied Computing: Software Development?', a: 'It is the Software Development Units 3 and 4 sequence of VCE Applied Computing, accredited from 1 January 2025. Students develop software modules in an object-oriented language, then analyse, design, build and evaluate a solution to a problem they identify, and study software security.' },
      { q: 'How is the Software Development score split?', a: 'School-assessed Coursework contributes 20 per cent (10 from each unit), the School-assessed Task 30 per cent, and the end-of-year examination 50 per cent.' },
      { q: 'When is the 2026 exam?', a: 'The VCAA timetable lists Applied Computing: Software Development on Friday 13 November 2026, in the session from 3:00 pm to 5:15 pm. The study design sets the examination at 2 hours.' },
      { q: 'Can I take both Software Development and Data Analytics?', a: 'Yes. The study design notes that students may elect to undertake one or both of the Units 3 and 4 sequences.' },
      { q: 'Which language should I use?', a: 'The study design asks for an appropriate object-oriented language, and schools choose within the VCAA\'s annually published requirements. Python, Java and C# are all object-oriented options.' },
      { q: 'What is the difference between type checking and range checking?', a: 'Type checking asks whether a value can be read as the right kind of data, such as a whole number. Range checking asks whether that value falls inside allowed limits. Type must be checked first, or converting the value can itself cause a runtime error.' },
      { q: 'How long does the School-assessed Task take?', a: 'The VCAA\'s 2026 guidance allows at least 8 to 10 weeks of class time for the Unit 3 analysis and design, and at least 8 weeks for the Unit 4 development and evaluation.' },
      { q: 'Can AI tools be used?', a: 'The key knowledge includes AI trends in programming and the responsible use of AI tools, so students must understand them. The task itself must be authenticated as the student\'s own work, and each school applies the VCAA\'s rules.' },
      { q: 'Will you help me build my solution?', a: 'No. We teach the skills with projects we invent and never design, write, debug, review or edit anything that will be submitted for assessment.' },
      { q: 'Which time suits Victorian students?', a: 'Late afternoon in Victoria works for most senior students and falls in the middle of our teachers\' day. We settle the weekly time together after the free class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Victorian students',
    lede: 'The other VCE computing studies, the Victorian school picture, and competitions that use the same skills.',
    items: [
      { href: '/vce-algorithmics-hess-help', label: 'VCE Algorithmics (HESS) help', p: 'The university-level algorithms study, for theory-minded students.' },
      { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Coding and AI classes in Melbourne', p: 'Coding, vibe coding and AI agents for Melbourne students.' },
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering help', p: 'The New South Wales equivalent, for comparison.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Australian competitions calendar', p: 'Coding and AI contests through the school year.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every state and age, and how lessons fit around time zones.' },
      { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code, do not copy it', p: 'Why reading every line matters more than ever.' }
    ]
  },

  start: {
    h2: 'Start with a free class on one skill',
    lede: 'Tell us the unit and the skill that is not clicking yet: objects, validation, testing or design tools. The free class works on it with our own projects, never with assessed work.',
    readFirst: 'Want to read first? Syllabuses are on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, our approach is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the Victorian background is on the <a class="ag-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a>.',
    note: 'WhatsApp gets the fastest reply. The +91 number is Indian because we teach from India; there is no Victorian office.',
    formNote: 'No card and no obligation. One message back to set up the class.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne and Victoria' },
        { href: '/vce-algorithmics-hess-help', label: 'VCE Algorithmics' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'We teach the method; the solution stays the student\'s own'
  },

  personalityCss: `
.ag-root.ag-vcsd .ag-hero-grid { gap: clamp(1.2rem, 2.8vw, 2.4rem); }
.ag-root.ag-vcsd .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-vcsd .ag-capsule { border-left-width: 4px; }
.ag-root.ag-vcsd .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-vcsd .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-vcsd .ag-table th { letter-spacing: 0.03em; }
.ag-root.ag-vcsd .ag-spec dt { letter-spacing: 0.08em; }
.ag-root.ag-vcsd .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Victorian Curriculum and Assessment Authority (VCAA). VCE Applied Computing Study Design, read on 7 October 2026: Units 1 to 4 accredited from 1 January 2025; Unit 3 Software development (IT033), Unit 4 Software development (IT034); students may elect one or both Units 3 and 4 sequences; School-assessed Coursework 20 per cent (Unit 3 10, Unit 4 10), School-assessed Task 30 per cent, examination 50 per cent, 2 hours. VCAA 2026 administrative information: at least 8 to 10 weeks of class time for Unit 3 Outcome 2, at least 8 weeks for Unit 4 Outcome 1. 2026 timetable: Friday 13 November, 3:00 pm to 5:15 pm.',
    localProject: 'Validation order from the Unit 3 key knowledge (existence checking, type checking, range checking): twelve invented year-level cells from a CSV import, rule a whole number from 7 to 12. In order, 5 accepted, 2 missing, 2 wrong type, 3 out of range; checking range first makes Python int() raise ValueError on 4 cells (two blanks, "ten", "12.0"), a type mismatch runtime error. Leading-space " 8" accepted by Python. Checked in Python on 7 October 2026.',
    requiredMentions: ['IT033', 'IT034', 'existence checking', 'Software development: programming', 'Friday 13 November', 'one or both of the Units 3 and 4 sequences', 'initiated by the student and not directed by the teacher', 'authentication record form', 'Gantt chart'],
    sources: [
      { claim: 'VCAA, Applied Computing study design page: accreditation period from 2025 and the study design and administrative files.', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/applied-computing-data-analytics/applied-computing' },
      { claim: 'VCE Applied Computing Study Design: units, unit codes, key knowledge, weightings and the 2-hour examination.', url: 'https://www.vcaa.vic.edu.au/sites/default/files/2026-06/2025AppliedComputingStudyDesign.docx' },
      { claim: 'VCAA, VCE Applied Computing: Software Development administrative information for School-based Assessment in 2026: class time, authentication, adjustments after marking.', url: 'https://www.vcaa.vic.edu.au/sites/default/files/2026-01/2026SoftwareDevelopmentAdmin-Information-for-School-based-Assessment.docx' },
      { claim: 'VCAA, 2026 VCE examination timetable: Applied Computing: Software Development on Friday 13 November, 3:00 pm to 5:15 pm.', url: 'https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable' },
      { claim: 'IANA time zone database (Australia/Melbourne and Asia/Kolkata): daylight saving from 4 October 2026 to 4 April 2027.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'The list of languages the VCAA approves for 2026: published in the VCAA Bulletin, which was not read, so no approved list is printed.',
      'Exam section structure and question counts: the examination specifications were not read.',
      'Any study score distribution, scaling or ATAR outcome: not quoted, and nothing is promised.',
      'Specific AI-use rules for each school: schools apply VCAA rules locally; none is paraphrased as a rule.',
      'Any affiliation with the VCAA: none, stated on the page.',
      'Any offer to design, write, debug, review or edit assessed work: refused, stated on the page.'
    ]
  }
};
