'use strict';
// TASC Computer Science help (ag- exam door, Australia cluster Phase 3, row 76).
// Facts read raw on 7 October 2026 from TASC (Tasmanian Assessment, Standards and Certification): the Computer
// Science (ITC315118) course page, current for 2026 (accreditation renewed from 1 January 2026, Version 2b);
// complexity level 3, size value 15; Area 1 Problem Solving and Programming 70 hours, Area 2 Computer
// Fundamentals and Computer Limitations 40 hours, Area 3 Social/Ethical Issues and Professional Responsibility
// 10 hours, Area 4 Computing Option 30 hours; Java applications compulsory; work requirements including a TOY
// machine task; final award from 14 ratings (9 internal, 5 external); the External Assessment Specifications
// (Version 5, Feb 2026): three-hour written exam plus 15 minutes preparation, five sections of about 36 minutes
// and 36 marks each, criteria 1 to 5; 2026 TASC Written Exam Timetable: Thursday 19 November. TOY machine facts
// from Princeton's Introduction to Programming in Java booksite, section 6.2.
// Spine: hand-tracing a TOY machine program whose subtraction leaves a 16-bit two's complement result, family
// checked free site-wide 7 October 2026.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'TASC COMPUTER SCIENCE', label: 'TASC Computer Science help', blurb: 'Tasmania\'s Level 3 Computer Science course from the TASC course document: four areas, Java applications, a five-section exam, and a worked TOY machine trace.' },
  slug: 'tasc-computer-science-help',
  code: 'tacs',
  accent: '#34582C',
  accentRationale: 'TASC Computer Science: a Tasmanian forest green chosen by hand, at least 11 RGB from every site accent and 4.8:1 or better on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'TASC Computer Science help',
  title: 'TASC Computer Science Help | ITC315118 Java Online',
  description: 'TASC Computer Science (ITC315118) help for Tasmanian students: Java programming, computer fundamentals, the TOY machine and the five-section external exam.',
  ogDescription: 'TASC Computer Science Level 3 explained from the course document: four content areas and their hours, the work requirements, how the award is calculated, the three-hour exam, and a worked TOY machine trace.',
  twitterDescription: 'TASC Computer Science from the course document: Java, binary, logic, the TOY machine and a five-section exam.',
  pageName: 'TASC Computer Science Help',
  webPageDescription: 'Support for Tasmanian students taking TASC Computer Science (ITC315118): the four content areas and hours, Java requirements, work requirements, the criteria and award rules, the external exam structure and 2026 date, and a worked lesson tracing a TOY machine program.',
  courseDescription: 'Live online computer science lessons in Java programming, algorithms, binary and two\'s complement, logic and machine code for Tasmanian students taking TASC Computer Science, without completing any assessed work.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'TASC Computer Science',
  navLinks: [
    { href: '#areas', label: 'Four areas' },
    { href: '#award', label: 'Award and exam' },
    { href: '#toy', label: 'TOY trace' },
    { href: '#java', label: 'Java' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Tasmania &middot; TASC Level 3 &middot; Live online',
  h1: 'TASC Computer Science help',
  lede: 'Computer Science in Tasmania is a genuine first course in the discipline: Java applications on one side, binary, logic gates and machine code on the other. Students who love programming are sometimes caught out by the second half, because the exam gives equal time to how a computer stores and moves data.',
  secondaryCta: { href: '#toy', label: 'See the TOY machine lesson' },
  wa: 'Hello Modern Age Coders, I would like a free coding class about TASC Computer Science (ITC315118).',
  heroNote: 'Course document read at source &middot; Java and machine code both taught &middot; Lessons on Hobart time',
  spec: [
    ['Course', 'Computer Science'],
    ['Code', 'ITC315118'],
    ['Level', '3, size value 15'],
    ['Language', 'Java applications'],
    ['Content hours', '70, 40, 10 and 30'],
    ['Exam', 'Three hours, five sections'],
    ['2026 exam', 'Thursday 19 November'],
    ['We never', 'Write assessed work']
  ],
  capsuleQ: 'In short',
  capsule: 'TASC Computer Science (ITC315118) is a Level 3 Tasmanian course with four compulsory content areas: problem solving and programming in Java (70 hours), computer fundamentals and limitations (40 hours), social and ethical issues (10 hours) and a computing option (30 hours). The final award combines nine internal ratings with five from a three-hour external exam.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses behind ITC315118',
    lede: 'Java first, then the fundamentals the exam weighs equally, then algorithm practice.',
    items: [
      { course: 'java-programming-masterclass-for-teens', code: 'TACS / 01', title: 'Java for teens', note: 'Classes, arrays, strings, methods and event-driven GUIs, the Java features the course document lists.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'TACS / 02', title: 'AP Computer Science A', note: 'A Java exam course that drills tracing and writing code by hand, the skill the written exam rewards.' },
      { course: 'competitive-programming-for-teens-course', code: 'TACS / 03', title: 'Competitive programming', note: 'Designing and improving algorithms under time pressure, Criterion 1 in practice.' }
    ]
  },

  sections: [
    {
      id: 'areas', tint: 'tint', eyebrow: 'Inside the course document',
      h2: 'Four areas, 150 hours of content',
      lede: 'From the TASC Computer Science (ITC315118) course page, read on 7 October 2026. The course is current for 2026, with accreditation renewed from 1 January 2026. All content areas are compulsory.',
      body: [
        { kind: 'table', caption: 'ITC315118 content areas, hours and work requirements', head: ['Area', 'Hours', 'What it covers', 'Work requirements'], rows: [
          ['1. Problem solving and programming', '70', 'Algorithm design, the software development life cycle, Java applications with objects, events and GUIs, testing and documentation', 'Ten programming tasks, an algorithms task and an SDLC task of about 2 hours each, two fully documented programs'],
          ['2. Computer fundamentals and limitations', '40', 'Binary and hexadecimal, two\'s complement, data types, logic gates and Karnaugh maps, the von Neumann architecture, machine code and the JVM', 'Four tasks of about 2 hours: logic, number representation, data representation and the TOY machine'],
          ['3. Social and ethical issues', '10', 'Careers, professional codes of ethics, responsibilities and the consequences of technological errors', 'One task of about 1000 words'],
          ['4. Computing option', '30', 'An area of interest in depth, from a Java application for a client to AI, games or microcontrollers', 'A documented program or investigation report, about 4000 words or equivalent']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The course document is unusually specific about Java. It lists primitive types with promotion and casting, arithmetic and logic operators including the modulus, classes and information hiding, arrays and strings, control flow, methods and scope, GUI widgets, and events and listeners using the AWT library. Since the 2022 version, Java applications are compulsory.',
            'It also asks for programming style. Programs should follow a defined set of standards for names, comments and indenting, with style guides such as the Oracle Java Code Conventions and the Google Java Style Guide given as examples, and Javadoc documentation comments recommended.'
          ],
          right: [
            'Area 2 is where many students need the most help. It runs from binary fractions and two\'s complement arithmetic, through Boolean operators, logic gates and the flip-flop, to the fetch, decode and execute cycle and the role of the Java Virtual Machine.',
            'The computing option leaves room for personal interest. Suggested topics include game development, mobile programming, cryptography, artificial intelligence and machine learning, network programming and programming LEGO robots with LeJOS.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.tasc.tas.gov.au/students/courses/technologies/itc315118-8/" rel="noopener" target="_blank">TASC, Computer Science (ITC315118) course page</a>, including content, work requirements and accreditation history, read on 7 October 2026.' }
      ]
    },
    {
      id: 'award', tint: 'deep', eyebrow: 'Ratings, award and exam',
      h2: 'Nine internal ratings, five from a three-hour exam',
      lede: 'TASC courses are assessed against criteria, each rated A, B or C, with t and z notations below C. The rules below come from the course document, the External Assessment Specifications (Version 5, February 2026) and the 2026 written exam timetable.',
      body: [
        { kind: 'table', caption: 'How ITC315118 is assessed', head: ['Piece', 'Detail from TASC'], rows: [
          ['Criteria', 'Nine criteria; criteria 1 to 5 are assessed both internally and externally'],
          ['Final award', 'Determined by TASC from 14 ratings: 9 internal and 5 external'],
          ['Exceptional Achievement', 'At least 12 A and 2 B ratings, including 4 A and 1 B from external assessment'],
          ['Exam length', 'Three hours, plus 15 minutes of preparation time for notes and highlighting'],
          ['Exam sections', 'Five sections, A to E, each about 36 minutes and 36 marks, three compulsory questions of 12 marks each'],
          ['Materials', 'The TASC Computer Science Information Sheet is provided'],
          ['2026 date', 'Thursday 19 November, on the TASC written exam timetable']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Each section maps to one externally assessed criterion. Section A is algorithm design, B is writing programs in a high-level language, C is using objects in program design, D is computer architecture and E is data representation and storage. The specifications say the algorithm for the final rating takes account of each section carrying equal time weight.',
            'That equal weighting is the strategic fact. A student who writes excellent Java but cannot add in two\'s complement or trace a machine-code program leaves two fifths of the paper exposed.'
          ],
          right: [
            'The specifications also explain mark allocation: a 10 mark question is designed for roughly 10 minutes of reading, thinking and answering. Practising at a mark a minute teaches a student when to move on.',
            'Past exam papers and exemplar questions are linked from the course page. We use them to show the style of question, and we write our own practice in the same style rather than reproducing them.'
          ] },
        { kind: 'source', html: 'Sources: ITC315118 course page (criteria and award); <a class="ag-inline-link" href="https://assets.tasc.tas.gov.au/uploads/2026/06/ITC315118-Computer-Science-External-Assessment-Specifications.pdf" rel="noopener" target="_blank">External Assessment Specifications</a>; <a class="ag-inline-link" href="https://assets.tasc.tas.gov.au/uploads/2026/08/2026-TASC-Written-Exam-Timetable.pdf" rel="noopener" target="_blank">2026 TASC Written Exam Timetable</a>. Read on 7 October 2026.' }
      ]
    },
    {
      id: 'toy', tint: 'tint', eyebrow: 'A worked lesson',
      h2: 'Tracing a TOY machine program by hand',
      lede: 'Area 2 includes a TOY machine assessment task, and the course standards ask students to trace simple TOY programs, complete them, and relate TOY operations to Java. TOY is an imaginary computer created at Princeton for teaching. The program below is ours; the machine facts are Princeton\'s.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The machine', p: 'TOY has 256 words of main memory, 16 registers and 16-bit instructions. There are 16 instruction types, opcodes 0 to F, and register 0 always holds 0.' },
          { h3: 'Two formats', p: 'In Format 1 the last two hex digits name source registers, so 1462 adds registers 6 and 2 into register 4. In Format 2 they are a memory address, so 9462 stores register 4 at address 62.' },
          { h3: 'The task', p: 'Load 5 and 8 from memory, store their sum and their difference, and halt. Predict every register before running anything.' }
        ] },
        { kind: 'table', caption: 'Our TOY program starting at address 10, with memory 20 = 0005 and 21 = 0008', head: ['Address', 'Instruction', 'Meaning', 'After it runs'], rows: [
          ['10', '8A20', 'Load register A from memory 20', 'R[A] = 0005'],
          ['11', '8B21', 'Load register B from memory 21', 'R[B] = 0008'],
          ['12', '1CAB', 'R[C] = R[A] + R[B]', 'R[C] = 000D (13)'],
          ['13', '2DAB', 'R[D] = R[A] minus R[B]', 'R[D] = FFFD'],
          ['14', '9C22', 'Store R[C] in memory 22', 'mem[22] = 000D'],
          ['15', '9D23', 'Store R[D] in memory 23', 'mem[23] = FFFD'],
          ['16', '0000', 'Halt', 'Seven instructions executed']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The interesting line is address 13. Five minus eight is minus three, and in a 16-bit word that appears as FFFD. Written in binary it is 1111 1111 1111 1101. Inverting every bit gives 0000 0000 0000 0010, and adding one gives 3, so FFFD is the two\'s complement representation of minus three. That is the "addition and subtraction only" two\'s complement arithmetic the course lists, met inside a real program.',
            'Students who trace this table by hand, one row at a time, rarely confuse a register with a memory address again. That confusion, mixing up Format 1 and Format 2, is the most common error we see.'
          ],
          right: [
            'Relating TOY to Java, the top standard in this criterion, is easier than it sounds. Java\'s short type is also a 16-bit two\'s complement integer, so short a = 5, b = 8 followed by short d = (short) (a minus b) leaves minus three in d, with the same bit pattern as R[D]. The addition line corresponds to an assignment, the loads and stores to reading and writing variables.',
            'We checked this program in a short simulator we wrote, which steps through each instruction and prints the registers. Writing such a simulator in Java is itself an excellent revision exercise for both halves of the course.'
          ] },
        { kind: 'source', html: 'TOY machine description: <a class="ag-inline-link" href="https://introcs.cs.princeton.edu/java/62toy/" rel="noopener" target="_blank">Princeton, Introduction to Programming in Java, section 6.2 TOY Machine</a>. TOY standards: ITC315118 course page. The program, trace and simulator are our own, checked on 7 October 2026.' }
      ]
    },
    {
      id: 'java', tint: '', eyebrow: 'The programming half',
      h2: 'Java the way the course document describes it',
      lede: 'Area 1 is the largest block of hours. These are the habits we build, mapped to the course document, using small applications we invent.',
      body: [
        { kind: 'table', caption: 'What we practise for Area 1, mapped to the course document', head: ['Course document', 'What we practise'], rows: [
          ['Algorithm design and problem solving', 'Decomposing a problem and expressing the solution before coding'],
          ['Primitive types, promotion and casting', 'Predicting results of mixed int and double arithmetic, then checking'],
          ['Classes and information hiding', 'Private fields with methods that protect them'],
          ['GUIs, events and listeners using AWT', 'Small event-driven programs with buttons, text fields and labels'],
          ['Testing and evaluation', 'Writing a test plan from a specification before the program exists'],
          ['Documentation', 'Javadoc comments and a short user guide for every significant program']
        ] },
        { kind: 'p', text: 'All practice uses programs we design. We do not write, debug or review any assessed task, documented program or computing option product, because TASC requires assessed work to be the student\'s own and providers report each rating to TASC.' },
        { kind: 'source', html: 'Source: ITC315118 course page, Area 1 content and work requirements, read on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready for Level 3',
    h2: 'Rungs from first Java to exam-ready Computer Science',
    lede: 'Most students arrive with some coding. The rungs that matter most are the ones about the machine.',
    table: { caption: 'From Year 10 coding to the ITC315118 exam', head: ['When', 'Rung', 'The sign it is secure'], rows: [
      ['Year 10', '1. Java basics', 'Writes classes with methods and arrays without copying an example'],
      ['Early Level 3', '2. Number systems', 'Converts between binary, decimal and hexadecimal in both directions'],
      ['Mid Level 3', '3. Logic', 'Simplifies a Boolean expression with a Karnaugh map and draws the circuit'],
      ['Late Level 3', '4. The machine', 'Traces a machine-code program and explains it in Java terms']
    ] },
    left: { h3: 'If programming is strong but theory is weak', ps: [
      'Spend a third of every week on Area 2. Number systems and logic are skills, so short daily practice works far better than cramming.',
      'Tracing by hand, on paper, is what the written exam needs. Do it before reaching for the computer.'
    ] },
    right: { h3: 'Comparing courses', ps: [
      'Students elsewhere can compare with <a class="ag-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering</a> or <a class="ag-inline-link" href="/vce-algorithmics-hess-help">VCE Algorithmics</a>.',
      'For the maths that pairs well with computing, see <a class="ag-inline-link" href="/tasc-mathematics-methods-tutoring">TASC Mathematics Methods</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for ITC315118 students',
    lede: 'Grouped by area of the course. Every card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Java and algorithms', sub: 'Area 1', courses: [
        { code: 'TACS / JA / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects, events and GUIs in Java.' },
        { code: 'TACS / JA / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java tracing and writing by hand.' },
        { code: 'TACS / JA / 03', slug: 'complete-java-programming-masterclass-college', title: 'Java masterclass', blurb: 'Deeper Java for students racing ahead.' }
      ] },
      { num: 'II', h3: 'Fundamentals', sub: 'Area 2', courses: [
        { code: 'TACS / FU / 01', slug: 'cambridge-a-level-computer-science-9618-course', title: 'AS and A Level Computer Science', blurb: 'Binary, logic and architecture at senior depth.' },
        { code: 'TACS / FU / 02', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science', blurb: 'Number systems and logic gates from the start.' },
        { code: 'TACS / FU / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Arrays and memory, the step after Area 2.' }
      ] },
      { num: 'III', h3: 'Options', sub: 'Area 4 interests', courses: [
        { code: 'TACS / OP / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development', blurb: 'A suggested option topic in its own right.' },
        { code: 'TACS / OP / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Another suggested option topic.' },
        { code: 'TACS / OP / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity', blurb: 'Cryptography and security, also on the list.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Computer Science lessons on Hobart time',
    lede: 'Lessons are live with our tutors in India. Hobart is four and a half hours ahead of India time in winter and five and a half hours ahead in daylight saving, which runs from 4 October 2026 to 4 April 2027 on the IANA time zone database. A 5 pm Hobart lesson in summer is 11.30 am India time.',
    slots: [
      { time: 'Weekday after school', l: 'Java and fundamentals, alternating weeks.' },
      { time: 'Weekend morning', l: 'Timed exam-style sections.' },
      { time: 'School holidays', l: 'Area 2 catch-up blocks.' }
    ],
    cells: [
      { h3: 'Trace by hand', p: 'Every program traced on paper before it runs.' },
      { h3: 'Both halves', p: 'Java and machine theory taught in the same course.' },
      { h3: 'Mark a minute', p: 'Practice timed the way the exam is designed.' },
      { h3: 'Small groups', p: 'Five to ten students at one level, comparing traces.' },
      { h3: 'One-to-one sessions', p: 'For one area, often logic or two\'s complement.' },
      { h3: 'No predictions', p: 'We never forecast a TASC award; the work belongs to the student.' }
    ]
  },

  projectsH2: 'Projects our students made for themselves',
  projectsLede: 'Built outside school and never assessed. The full set is in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews, quoted exactly as families and students wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Lessons are billed monthly in US dollars at a single rate for families outside India. There is no joining fee and no commitment beyond the month in progress.',
    free: ['A full computer science lesson with a tutor', 'A clear plan for the weakest area', 'No card details'],
    group: ['Five to ten students at one level', 'One tutor all term', 'Traces and code reviewed in class', 'A certificate at the end'],
    one: ['A tutor for one student', 'Built around one area of the course', 'Useful in the weeks before November']
  },

  faq: {
    eyebrow: 'Questions about ITC315118',
    h2: 'TASC Computer Science questions we hear',
    items: [
      { q: 'What is TASC Computer Science?', a: 'It is a Level 3 Tasmanian senior secondary course, code ITC315118, with a size value of 15. It covers problem solving and programming in Java, computer fundamentals and limitations, social and ethical issues, and a computing option.' },
      { q: 'Which programming language does the course use?', a: 'Java. Since the 2022 version of the course document, Java applications are compulsory, and the document lists the Java features students should use.' },
      { q: 'How is the final award worked out?', a: 'TASC determines it from 14 ratings: nine from internal assessment by the school and five from the external exam. Each rating is A, B or C, with t and z notations below C.' },
      { q: 'How long is the exam?', a: 'Three hours, plus 15 minutes of preparation time. It has five sections of about 36 minutes and 36 marks each, one for each externally assessed criterion.' },
      { q: 'When is the 2026 exam?', a: 'The 2026 TASC Written Exam Timetable lists Computer Science (ITC315118) on Thursday 19 November.' },
      { q: 'What is the TOY machine?', a: 'An imaginary computer created at Princeton for teaching, with 256 words of memory, 16 registers and 16 instruction types. TASC Computer Science includes a TOY machine assessment task, and students learn to trace and write simple TOY programs.' },
      { q: 'What is two\'s complement?', a: 'The usual way computers store negative whole numbers. In 16 bits, minus three is FFFD: invert every bit of the pattern and add one to get back to 3.' },
      { q: 'Will you help with my computing option?', a: 'We teach the skills with projects we invent. We never write, debug or review an assessed program, report or option product.' },
      { q: 'Is the course good preparation for university computing?', a: 'The course document describes it as a starting point for further education in ICT or engineering, and the content overlaps with a first-year programming and computer systems course.' },
      { q: 'What time are lessons for Tasmanian students?', a: 'Late afternoon in Hobart falls in our tutors\' working day. The weekly time is agreed after the free lesson.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Tasmanian students',
    lede: 'Maths that pairs with computing, and computing courses in other states.',
    items: [
      { href: '/tasc-mathematics-methods-tutoring', label: 'TASC Mathematics Methods tutoring', p: 'Level 4 calculus and statistics in Tasmania.' },
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering help', p: 'The New South Wales course for comparison.' },
      { href: '/vce-algorithmics-hess-help', label: 'VCE Algorithmics help', p: 'Victoria\'s algorithms study.' },
      { href: '/choosing-year-11-computing-subjects-australia', label: 'Choosing Year 11 computing subjects', p: 'How senior computing differs between states.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Australian competitions calendar', p: 'Coding competitions through the year.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'The full list of our Australian pages.' }
    ]
  },

  start: {
    h2: 'Start with a free Computer Science lesson',
    lede: 'Tell us whether Java or the theory side is harder, and how far through the year you are. The free lesson works on that area with problems we write.',
    readFirst: 'Before booking, look through syllabuses in the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or see the <a class="ag-inline-link" href="/coding-classes-in-australia">Australian pages</a> for other states.',
    note: 'WhatsApp reaches us fastest. Our number begins +91 because the school is in India, and we have no office in Tasmania or anywhere else in Australia.',
    formNote: 'No card, no obligation. A single reply books the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/tasc-mathematics-methods-tutoring', label: 'TASC Mathematics Methods' },
        { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'We teach the computing; assessed work stays the student\'s own'
  },

  personalityCss: `
.ag-root.ag-tacs .ag-hero-grid { gap: clamp(1rem, 2.6vw, 2.3rem); }
.ag-root.ag-tacs .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-tacs .ag-capsule { border-left-width: 5px; }
.ag-root.ag-tacs .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-tacs .ag-table td:nth-child(2) { font-family: 'JetBrains Mono', monospace; }
.ag-root.ag-tacs .ag-table caption { text-align: left; }
.ag-root.ag-tacs .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-tacs .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'TASC (Tasmanian Assessment, Standards and Certification). Computer Science ITC315118 course page, read on 7 October 2026: current for 2026, accreditation renewed from 1 January 2026 (Version 2b); complexity level 3, size value 15; Area 1 70 hours, Area 2 40 hours, Area 3 10 hours, Area 4 30 hours; Java applications compulsory; work requirements including the TOY machine task; nine criteria, five externally assessed; award from 14 ratings. External Assessment Specifications Version 5 (Feb 2026): three hours plus 15 minutes, five sections of about 36 minutes and 36 marks. 2026 Written Exam Timetable: Thursday 19 November.',
    localProject: 'Hand trace of a TOY machine program at addresses 10 to 16 (8A20, 8B21, 1CAB, 2DAB, 9C22, 9D23, 0000) with memory 20 = 0005 and 21 = 0008: sum 000D, difference FFFD (minus three in 16-bit two\'s complement), seven instructions executed; checked with our own simulator.',
    requiredMentions: ['ITC315118', 'TOY machine', '256 words of main memory', '1CAB', 'FFFD', 'Thursday 19 November', '14 ratings', 'events and listeners using the AWT library', 'Computer fundamentals and limitations'],
    sources: [
      { claim: 'TASC, Computer Science (ITC315118) course page: content areas and hours, Java features, work requirements, criteria, standards including TOY machine, award rules and accreditation history.', url: 'https://www.tasc.tas.gov.au/students/courses/technologies/itc315118-8/' },
      { claim: 'TASC, ITC315118 External Assessment Specifications (Version 5, February 2026): three hours plus 15 minutes preparation, five sections A to E, 36 minutes and 36 marks each, criteria 1 to 5.', url: 'https://assets.tasc.tas.gov.au/uploads/2026/06/ITC315118-Computer-Science-External-Assessment-Specifications.pdf' },
      { claim: 'TASC, 2026 Written Exam Timetable: Computer Science (ITC315118) 3 hours on Thursday 19 November.', url: 'https://assets.tasc.tas.gov.au/uploads/2026/08/2026-TASC-Written-Exam-Timetable.pdf' },
      { claim: 'Princeton, Introduction to Programming in Java, section 6.2 TOY Machine: 256 words of memory, 16 registers, 16-bit instructions, 16 opcodes, register 0 always 0, Format 1 and Format 2 examples 1462 and 9462.', url: 'https://introcs.cs.princeton.edu/java/62toy/' },
      { claim: 'IANA time zone database (Australia/Hobart, Asia/Kolkata): offsets of 4.5 and 5.5 hours, daylight saving from 4 October 2026 to 4 April 2027.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'The exact TOY instruction set used in Tasmanian classrooms: TASC names the TOY machine but the course page does not print the instruction set, so Princeton\'s booksite is cited for it.',
      'The morning or afternoon session of the 2026 exam: the timetable layout did not extract clearly enough, so only the date is given.',
      'Pass rates or award distributions: not read from a TASC report, so not stated.',
      'Any affiliation with TASC: none, stated on the page.',
      'Any offer to write, debug or review assessed work: refused on the page.'
    ]
  }
};
