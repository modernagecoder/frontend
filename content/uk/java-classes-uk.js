'use strict';
// Java classes, UK (ag- language and track door; UK cluster Phase 3).
// Sources, read raw from the boards' own PDFs on 21 September 2026:
//  - AQA GCSE Computer Science 8525 specification: languages "C# - Python (version 3) - VB.NET"; "In paper 1
//    students will be required to design, write, test and refine program code in one of the three languages
//    above." No Java.
//  - Pearson Edexcel GCSE Computer Science 1CP2 specification: "Students should then answer the questions
//    onscreen using Python 3."; "We have adopted Python programming language as the vehicle..."
//  - WJEC Eduqas GCSE Computer Science (teaching from 2020): on-screen Component 2 needs "Python 3".
//  - WJEC GCSE Computer Science (Wales): Unit 2 uses the Python IDLE IDE and Tkinter (per the WJEC unit 2 document
//    read for row 57).
//  - OCR GCSE J277 specification: "In Section B, questions assessing students' ability to write or refine
//    algorithms must be answered using either the OCR Exam Reference Language or the high-level programming
//    language they are familiar with."; "All programming code given in examination papers will be presented
//    using the OCR Exam Reference Language."
//  - AQA AS and A level 7516/7517 specification: "C# - Java - Python* - VB.Net."
//  - WJEC GCE AS/A level Computer Science (Wales, from 2015): Unit 2 on-screen, 2 hours, 60 marks, 15% of the
//    qualification; "WJEC will support the following programming languages: Visual Basic.NET Python Java";
//    "Centres will be required to inform WJEC of their choice of language and IDE at the start of the course."
//  - WJEC Eduqas AS Computer Science (England, from 2015): Component 2 on-screen, languages Python, Visual
//    Basic.NET, Java. The Eduqas full A level has written papers plus a programmed project, no on-screen paper.
//  - Cambridge International AS and A Level Computer Science 9618, syllabus for 2027 to 2029: Paper 4, 25% of the
//    A Level: "Candidates will be required to use either Java (console mode), Visual Basic* (console mode) or
//    Python (console mode) programming languages."
//  - OCR A level H446 specification: project language free choice ("choose any suitable programming language",
//    verified raw for row 49 and re-read for this page).
// Spine: Java is an A level exam language in the UK, and almost never a GCSE one. No GCSE board in England or
// Wales runs its programming paper in Java (OCR alone accepts a familiar high-level language in handwritten
// answers), while AQA, WJEC's Unit 2, Eduqas AS and Cambridge International all offer Java at A level. So many
// students meet Java at 16, after GCSE Python, and the page is built around that crossing. The Ireland page's
// university-module survey is not repeated.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'JAVA', blurb: 'Java in the UK: which exam boards let you answer in it, the jump from GCSE Python at 16, and live Java classes for teens and adults.' },
  slug: 'java-classes-uk',
  code: 'jvu',
  accent: '#87371D',
  accentRationale: 'Java classes, UK: a roasted-coffee orange-brown from the solver (6.57:1 on every paper tint, dE 7.7 from the nearest used accent), a quiet nod to the language\'s cup',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Java classes, UK',
  title: 'Java Classes in the UK | Live Online Java Course',
  description: 'Live Java classes in the UK for teens and adults: which A level boards let you sit programming in Java, the jump from GCSE Python, and OOP done properly.',
  ogDescription: 'No GCSE board in England or Wales runs its programming paper in Java. At A level, AQA, WJEC and Cambridge International all offer it. That jump happens at 16.',
  twitterDescription: 'Java classes for UK students and adults: the A level boards that accept Java, the crossing from Python, and object-oriented design. First class free.',
  pageName: 'Java Classes in the UK',
  webPageDescription: 'Live online Java classes for UK teenagers and adults, with a board-by-board map of where Java is an exam language at GCSE and A level.',
  courseDescription: 'Live online Java for UK learners: syntax and types, object-oriented design, collections, data structures and algorithms, JavaFX and APIs, and console-mode exam practice where a board requires it.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Java classes',
  navLinks: [
    { href: '#boards', label: 'Java in UK exams' },
    { href: '#crossing', label: 'From Python to Java' },
    { href: '#objects', label: 'Objects, properly' },
    { href: '#adults', label: 'Java for adults' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; Teens and adults &middot; Live online',
  h1: 'Java classes in the UK',
  lede: 'In UK schools, Java arrives late. No GCSE board in England or Wales runs its programming paper in Java: AQA\'s GCSE works in C#, Python 3 or VB.NET, and Edexcel, Eduqas and WJEC all set their programming work in Python. OCR is the partial exception, because its GCSE lets written algorithm answers use "the high-level programming language they are familiar with". At A level the picture turns round. AQA supports C#, Java, Python and VB.Net for its on-screen paper; WJEC\'s Unit 2 in Wales and the Eduqas AS in England both offer Java alongside Python and Visual Basic.NET; and Cambridge International\'s 9618 Paper 4 is sat in Java, Visual Basic or Python, all in console mode. So a student who learned Python for GCSE may meet Java at 16, sometimes as the language of an exam worth a quarter of the A level. This page is built around that crossing, and also serves adults who want Java for university or work.',
  secondaryCta: { href: '#boards', label: 'The board-by-board map' },
  wa: 'Hello Modern Age Coders, I would like a free first Java class in the UK.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Java from first class to object-oriented design',
  spec: [
    ['GCSE boards using Java', 'None for the programming paper'],
    ['OCR GCSE', 'Written answers in a familiar language'],
    ['AQA A level', 'C#, Java, Python or VB.Net'],
    ['WJEC and Eduqas AS', 'Python, VB.NET or Java on screen'],
    ['Cambridge 9618 Paper 4', 'Java, VB or Python, console mode'],
    ['For', 'Teens 13 to 18 and adults'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Java is rarely a GCSE exam language in the UK: AQA\'s GCSE uses C#, Python 3 or VB.NET, while Edexcel, Eduqas and WJEC use Python, and only OCR accepts written answers in whichever high-level language a student is familiar with. At A level, Java becomes an option: AQA supports C#, Java, Python and VB.Net; WJEC\'s AS Unit 2 and the Eduqas AS on-screen component support Python, Visual Basic.NET or Java; and Cambridge International AS and A Level 9618 requires Java, Visual Basic or Python, in console mode, for Paper 4, worth 25% of the A Level. Some students therefore switch from Python to Java at 16. Modern Age Coders teaches Java live and online to UK teenagers and adults, from first programs to object-oriented design, collections and algorithms, with console-mode practice for students on those boards. We never work on NEA projects or assessed code. The first class is free; afterwards a group place is USD 100 a month and one-to-one lessons USD 150 a month.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three ways into Java',
    lede: 'Java for teenagers, Java for adults, and the Cambridge International A Level course. Each card opens the full syllabus.',
    items: [
      { course: 'java-programming-masterclass-for-teens', code: 'JVU / 01', title: 'Java for Teens', note: 'From first programs to object-oriented design, JavaFX, data structures and a capstone, for ages 13 to 18.' },
      { course: 'complete-java-programming-masterclass-college', code: 'JVU / 02', title: 'Java for Adults', note: 'Core Java to Spring Boot, for university students, graduates and working professionals.' },
      { course: 'cambridge-a-level-computer-science-9618-course', code: 'JVU / 03', title: 'Cambridge 9618 Computer Science', note: 'All four papers, including the practical Paper 4 that Cambridge sits in Java, Visual Basic or Python.' }
    ]
  },

  sections: [
    {
      id: 'boards', tint: 'tint', eyebrow: 'Java in UK exams',
      h2: 'Which UK exams let you answer in Java',
      lede: 'Read from each board\'s own specification. The languages are the ones a centre may choose for the programming paper or practical tasks; schools pick one at the start of the course.',
      body: [
        { kind: 'table', caption: 'Programming languages by qualification, as each board publishes them', head: ['Qualification', 'Languages for the programming paper or tasks', 'Java?'], rows: [
          ['AQA GCSE (8525)', 'C#, Python 3 or VB.NET', 'No'],
          ['Edexcel GCSE (1CP2)', 'Python 3, on screen', 'No'],
          ['Eduqas GCSE', 'Python 3, on screen', 'No'],
          ['WJEC GCSE (Wales)', 'Python, with the IDLE editor and Tkinter', 'No'],
          ['OCR GCSE (J277)', 'Exam Reference Language or a familiar high-level language, handwritten', 'Possible, on paper'],
          ['AQA A level (7517)', 'C#, Java, Python or VB.Net', 'Yes'],
          ['WJEC AS and A level (Wales), Unit 2', 'Visual Basic.NET, Python or Java, on screen', 'Yes'],
          ['Eduqas AS (England), Component 2', 'Python, Visual Basic.NET or Java, on screen', 'Yes'],
          ['Cambridge International 9618, Paper 4', 'Java, Visual Basic or Python, console mode', 'Yes'],
          ['OCR A level (H446), project', 'Any suitable language', 'If chosen']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The GCSE side',
          left: [
            'AQA\'s GCSE specification says that "In paper 1 students will be required to design, write, test and refine program code in one of the three languages above", and the three are C#, Python and VB.NET. Edexcel\'s says students "answer the questions onscreen using Python 3".',
            'OCR is different in kind. Its exam papers present code in the OCR Exam Reference Language, and Section B write-and-refine answers may use either that language or "the high-level programming language they are familiar with". A Java student can answer in Java, by hand.'
          ],
          rightH3: 'The A level side',
          right: [
            'AQA lists C#, Java, Python and VB.Net for A level. WJEC says it "will support the following programming languages" for Unit 2, naming Visual Basic.NET, Python and Java, and asks centres to declare their choice of language and editor at the start of the course.',
            'Cambridge International is the strictest: for Paper 4, "Candidates will be required to use either Java (console mode), Visual Basic* (console mode) or Python (console mode) programming languages." Paper 4 is 25% of the A Level.'
          ] },
        { kind: 'source', html: 'Sources, read 21 September 2026 from each board\'s PDF: <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/computer-science/gcse/computer-science-8525" rel="noopener" target="_blank">AQA 8525</a>; <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517" rel="noopener" target="_blank">AQA 7517</a>; <a class="ag-inline-link" href="https://www.ocr.org.uk/qualifications/gcse/computer-science-j277-from-2020/" rel="noopener" target="_blank">OCR J277</a>; <a class="ag-inline-link" href="https://www.ocr.org.uk/qualifications/as-and-a-level/computer-science-h046-h446-from-2015/" rel="noopener" target="_blank">OCR H446</a>; <a class="ag-inline-link" href="https://www.eduqas.co.uk/qualifications/computer-science-asa-level/" rel="noopener" target="_blank">Eduqas AS and A level</a>; <a class="ag-inline-link" href="https://www.wjec.co.uk/media/wl4kj5l1/wjec-gce-computer-science-spec-from-2015.pdf" rel="noopener" target="_blank">WJEC GCE Computer Science</a>; <a class="ag-inline-link" href="https://www.cambridgeinternational.org/Images/721397-2027-2029-syllabus.pdf" rel="noopener" target="_blank">Cambridge International 9618, 2027 to 2029</a>. Check your own school\'s choice; the board permits, the centre decides.' }
      ]
    },
    {
      id: 'crossing', tint: 'deep', eyebrow: 'From Python to Java',
      h2: 'The jump at 16: what changes when a Python student meets Java',
      lede: 'Most of the thinking carries over. What changes is how much the language makes you say out loud.',
      body: [
        { kind: 'table', caption: 'Python habits and their Java equivalents', head: ['In Python you could', 'In Java you must', 'Why it helps in the end'], rows: [
          ['Create a variable by assigning to it', 'Declare its type first, such as int, double or String', 'Type errors are caught before the program runs'],
          ['Write a script at the top level', 'Put everything inside a class, starting from main', 'Structure is visible from the first line'],
          ['Use indentation to mark blocks', 'Use braces and semicolons', 'Layout mistakes stop being logic mistakes'],
          ['Grow a list freely', 'Choose between a fixed array and an ArrayList', 'You learn what a data structure costs'],
          ['Call input() and print()', 'Use a Scanner and System.out, in a console', 'Exactly what console-mode exams expect'],
          ['Ignore objects for a long time', 'Meet classes, constructors and methods early', 'Object-oriented design stops being abstract']
        ] },
        { kind: 'p', mt: true, html: 'The first month is usually the hardest, and mostly because of ceremony: a program that printed a line in Python now needs a class, a method signature and a compile step. After that, students who already think in loops and conditions tend to find Java clarifying. Types force decisions that Python let them postpone, and those decisions are exactly what A level questions on data types, records and classes ask about.' },
        { kind: 'two', mt: true,
          leftH3: 'Console mode, deliberately',
          left: [
            'Cambridge requires console mode for Paper 4, and on-screen A level tasks elsewhere are text-based too. We practise reading input, printing output and handling files in a plain console, with no graphical framework to lean on.',
            'Graphical Java, through JavaFX, comes later and separately, for projects rather than exams.'
          ],
          rightH3: 'Assessed work stays yours',
          right: [
            'We never write, debug or review NEA projects, WJEC or Eduqas practical tasks, or anything submitted for assessment. Practice uses separate problems.',
            'Our pages on <a class="ag-inline-link" href="/aqa-a-level-computer-science-7517-help">AQA A level</a>, <a class="ag-inline-link" href="/ocr-a-level-computer-science-h446-help">OCR A level</a> and the <a class="ag-inline-link" href="/a-level-computer-science-nea-help">A level NEA</a> set out those lines board by board.'
          ] }
      ]
    },
    {
      id: 'objects', tint: 'tint', eyebrow: 'Objects, properly',
      h2: 'Object-oriented design is where Java earns its place',
      lede: 'Java was designed around classes and objects, which makes it a natural language for learning them, and A level specifications expect students to understand them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Classes and objects', p: 'Designing a class, choosing its fields, writing constructors and methods, and creating objects from it.' },
          { h3: 'Encapsulation', p: 'Private fields with public methods, and why hiding data makes programs easier to change safely.' },
          { h3: 'Inheritance and polymorphism', p: 'Building one class from another, overriding methods, and treating related objects through a shared type.' }
        ] },
        { kind: 'table', mt: true, caption: 'How our Java for Teens course is sequenced', head: ['Months', 'Focus'], rows: [
          ['1 to 3', 'First programs, arrays, methods, strings and files, then object-oriented programming'],
          ['4 to 6', 'Collections and modern Java, desktop apps with JavaFX, games and Minecraft modding'],
          ['7 to 8', 'Data structures built from scratch, then graphs, recursion and threads'],
          ['9 to 10', 'APIs and AI, code quality, a capstone project and a demo day']
        ] },
        { kind: 'p', mt: true, html: 'Students preparing for an A level do not need every month of that course, and the free first class decides which parts matter. The same objects-first approach runs through our <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code</a> teaching: every class a student writes, they should be able to explain.' }
      ]
    },
    {
      id: 'adults', tint: '', eyebrow: 'Java for adults',
      h2: 'Java for university, work and career change',
      lede: 'Outside school exams, Java is a mainstream language for server-side software, Android\'s history, and large organisations\' systems.',
      body: [
        { kind: 'table', caption: 'Adult routes into Java', head: ['You are', 'A sensible route'], rows: [
          ['A university student meeting Java in a module', 'Core Java alongside the module, with separate practice problems'],
          ['A graduate preparing for technical interviews', 'Java plus data structures and algorithms'],
          ['A professional moving into back-end development', 'Core Java, then Spring Boot and databases'],
          ['A Python programmer adding a second language', 'The crossing above, at adult pace'],
          ['A career changer starting from zero', 'Programming fundamentals first, in Java or Python, chosen in the free class']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the adult course covers',
          left: [
            'Our Java course for college students and professionals runs from core Java to Spring Boot: the language, object-oriented design, collections, testing, and building web services.',
            'Version control with Git runs alongside, because nobody writes Java at work alone.'
          ],
          rightH3: 'Kotlin, and where it fits',
          right: [
            'Modern Android development leans on Kotlin, which runs on the same platform as Java. Our app development course teaches Flutter and native routes including Kotlin; Java is a strong foundation for either.',
            'For degree apprenticeships, where software roles are common, see <a class="ag-inline-link" href="/coding-before-a-degree-apprenticeship-uk">coding before a degree apprenticeship</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages in Java',
    lede: 'Placement follows what you can already do, in any language.',
    table: { caption: 'From first class to confident object-oriented Java', head: ['Stage', 'What should be true'], rows: [
      ['1. Syntax and types', 'You write, compile and run console programs with the right types, without looking everything up'],
      ['2. Methods and arrays', 'You break programs into methods and work with arrays, strings and files'],
      ['3. Objects', 'You design classes with encapsulation and use inheritance where it genuinely helps'],
      ['4. Structures and projects', 'You choose collections sensibly, implement standard algorithms and finish a project']
    ] },
    left: { h3: 'Stage three is the heart of it', ps: [
      'Objects are where Java differs most from a first Python course.',
      'The wider sequence of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Exam students', ps: [
      'For A level candidates, console-mode practice runs through every stage.',
      'Nothing in a lesson overlaps with a project you will submit.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around Java',
    lede: 'Java itself, the exam and interview work around it, and where it leads.',
    bands: [
      { num: 'I', h3: 'Java itself', sub: 'By age', courses: [
        { code: 'JVU / CORE / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Ages 13 to 18, from first programs to a capstone.' },
        { code: 'JVU / CORE / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java for Adults', blurb: 'Core Java to Spring Boot, for 18 and over.' },
        { code: 'JVU / CORE / 03', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'For students who need the GCSE language first.' }
      ] },
      { num: 'II', h3: 'Exams and interviews', sub: 'Where Java is assessed', courses: [
        { code: 'JVU / EXAM / 01', slug: 'cambridge-a-level-computer-science-9618-course', title: 'Cambridge 9618', blurb: 'All four papers, including Paper 4.' },
        { code: 'JVU / EXAM / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving and DSA for Teens', blurb: 'Algorithms at A level depth.' },
        { code: 'JVU / EXAM / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'Interview-ready, for adults.' }
      ] },
      { num: 'III', h3: 'Where Java leads', sub: 'Beyond the language', courses: [
        { code: 'JVU / NEXT / 01', slug: 'complete-app-development-masterclass-college', title: 'App Development', blurb: 'Flutter, iOS and Android, including Kotlin.' },
        { code: 'JVU / NEXT / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL Databases', blurb: 'The data layer behind most Java services.' },
        { code: 'JVU / NEXT / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'How Java teams share and review code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live Java lessons on UK time',
    lede: 'Our teachers are based in India, which does not change its clocks, so the UK is four and a half hours behind India in British Summer Time and five and a half in winter. After-school, evening and weekend slots in UK time all work.',
    slots: [
      { time: 'After school', l: 'For sixth formers and younger students.' },
      { time: 'Evening', l: 'For adults after work.' },
      { time: 'Weekend', l: 'Longer sessions for project work.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'We check what you know, in any language, and where Java fits for you.' },
      { h3: 'Small groups', p: 'Five to ten learners at the same level and age band.' },
      { h3: 'One to one', p: 'For exam timetables or a faster pace.' },
      { h3: 'Console first', p: 'Plain console programs before any graphical framework.' },
      { h3: 'Code read closely', p: 'A teacher reads your Java and explains what to change and why.' },
      { h3: 'No assessed work', p: 'NEA and practical tasks for exam boards are never touched.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Four projects finished by our students. Many more, across all ages and languages, are in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Straight from Google: reviews by our students and their families, unedited.',

  fees: {
    h2: 'Fees for Java classes',
    lede: 'A single monthly fee in US dollars, identical outside India, with no enrolment fee and no commitment beyond the month you are in.',
    free: ['Your current level, in any language', 'A route into Java that fits your goal', 'No payment details needed'],
    group: ['Five to ten learners at one level', 'The same teacher each week', 'Console practice and projects', 'Stop at the end of any month'],
    one: ['A teacher for you alone', 'Paced around your exams or work', 'Suits a board-specific focus']
  },

  faq: {
    eyebrow: 'Questions about Java',
    h2: 'What UK students and adults ask about Java',
    items: [
      { q: 'Can I take GCSE Computer Science in Java?', a: 'Not for the programming paper at AQA, Edexcel, Eduqas or WJEC, which use C#, Python or VB.NET. OCR\'s GCSE lets written algorithm answers use the high-level language a student is familiar with, which can be Java.' },
      { q: 'Which A level boards support Java?', a: 'AQA supports C#, Java, Python and VB.Net; WJEC\'s Unit 2 and the Eduqas AS on-screen component support Visual Basic.NET, Python or Java; Cambridge International 9618 Paper 4 uses Java, Visual Basic or Python in console mode.' },
      { q: 'Who decides which language my child uses?', a: 'The school. The board sets the permitted list and the centre chooses from it, usually at the start of the course.' },
      { q: 'My child learned Python for GCSE. Will Java be hard?', a: 'The first few weeks feel strict, mostly because of types, classes and braces. After that, students who already think in loops and conditions usually adapt well.' },
      { q: 'What is console mode?', a: 'Programs that read and print plain text in a terminal window, with no graphical interface. Cambridge requires it for Paper 4, and we practise it deliberately.' },
      { q: 'Do you help with the A level project?', a: 'No. We never write, debug or review NEA projects or any assessed practical work. Lessons use separate problems.' },
      { q: 'Is Java still worth learning?', a: 'Yes, for object-oriented design, for back-end and enterprise software, and as a foundation for Kotlin and Android. It also appears on several UK A level syllabuses.' },
      { q: 'Is there a Java course for adults?', a: 'Yes. Our adult Java course runs from core Java to Spring Boot, for university students, graduates and working professionals.' },
      { q: 'What does it cost?', a: 'The first class is free. After that, USD 100 a month for a group place or USD 150 a month one to one, with no enrolment fee.' },
      { q: 'When are lessons?', a: 'After school, evenings or weekends in UK time, agreed in the free class. Our teachers are four and a half hours ahead of the UK in summer and five and a half in winter.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'The exam boards, the other big languages, and the projects around them.',
    items: [
      { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA A level Computer Science', p: 'The skeleton program, in whichever language your school chose.' },
      { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR A level Computer Science', p: 'Where nobody types code in the exam.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online', p: 'The GCSE language, taught properly.' },
      { href: '/coding-for-university-students-uk', label: 'Coding for university students', p: 'Java and more, alongside a degree.' },
      { href: '/coding-before-a-degree-apprenticeship-uk', label: 'Coding before a degree apprenticeship', p: 'The software route into work.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page.' }
    ]
  },

  start: {
    h2: 'Book a free first Java class',
    lede: 'Leave a number and we will call at a UK time that suits you. Tell us your board, or your goal if you are an adult; the class checks your level and ends with a route through Java.',
    readFirst: 'Prefer to read first? Each <a class="ag-inline-link" href="/courses">course page</a> sets out its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> covers the method, and <a class="ag-inline-link" href="/student-labs">student labs</a> collects finished work.',
    note: 'WhatsApp from a UK number usually gets the quickest reply. The team is in India, so our number starts +91, and there is no UK office.',
    formNote: 'One call, free, no card.'
  },

  footer: {
    cols: [
      { h4: 'Java', links: [
        { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA A level' },
        { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR A level' },
        { href: '/a-level-computer-science-nea-help', label: 'A level NEA' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' },
        { href: '/best-python-classes-online-uk', label: 'Python classes online' },
        { href: '/coding-for-university-students-uk', label: 'University students' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Java arrives at 16; arrive ready for it'
  },

  personalityCss: `
.ag-root.ag-jvu .ag-hero h1 { letter-spacing: -0.028em; font-weight: 700; }
.ag-root.ag-jvu .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-jvu .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-jvu .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-jvu .ag-table th:first-child { width: 30%; }
.ag-root.ag-jvu .ag-spec dt { letter-spacing: 0.086em; }
`,

  mustMention: ['Java', 'AQA', 'C#', 'VB.Net', 'WJEC', 'Eduqas', 'Cambridge International', '9618', 'console mode', 'Exam Reference Language', 'Python 3', 'object-oriented'],

  dossier: {
    curriculumAuthority: 'United Kingdom, programming languages in computer science qualifications. AQA 8525: C#, Python (version 3), VB.NET; "In paper 1 students will be required to design, write, test and refine program code in one of the three languages above." Edexcel 1CP2: "answer the questions onscreen using Python 3". Eduqas GCSE (from 2020): on-screen Component 2 requires Python 3. WJEC GCSE (Wales): Unit 2 in Python IDLE with Tkinter. OCR J277: Section B write and refine answers "using either the OCR Exam Reference Language or the high-level programming language they are familiar with"; exam code presented in the Exam Reference Language. AQA 7516/7517: "C# - Java - Python* - VB.Net." WJEC GCE (from 2015) Unit 2 on-screen (2 hours, 60 marks, 15%): "WJEC will support the following programming languages: Visual Basic.NET Python Java"; centres declare their language and IDE at the start of the course. Eduqas AS (from 2015) Component 2 on-screen: Python, Visual Basic.NET, Java. Cambridge International 9618 (2027 to 2029) Paper 4, 25% of the A Level: "Candidates will be required to use either Java (console mode), Visual Basic* (console mode) or Python (console mode) programming languages." OCR H446: project in any suitable language.',
    localProject: 'Java is an A level exam language in the UK, and almost never a GCSE one. A board-by-board table from the specifications shows no GCSE programming paper in Java (OCR alone accepts a familiar high-level language in handwritten answers) and Java offered at A level by AQA, WJEC Unit 2, Eduqas AS and Cambridge International 9618 Paper 4 (console mode). The page then teaches the Python-to-Java crossing at 16 (types, classes, braces, ArrayList, Scanner and console I/O), object-oriented design, and adult routes. Never NEA or assessed practical work. Lesson family: exam-board language rules read as the reason a student switches language.',
    requiredMentions: ['C#', 'Java', 'console mode', 'Exam Reference Language'],
    sources: [
      { claim: 'AQA GCSE Computer Science 8525 specification: C#, Python 3, VB.NET for paper 1.', url: 'https://filestore.aqa.org.uk/resources/computing/specifications/AQA-8525-SP-2020.PDF' },
      { claim: 'AQA AS and A level Computer Science 7516/7517 specification: C#, Java, Python, VB.Net.', url: 'https://filestore.aqa.org.uk/resources/computing/specifications/AQA-7516-7517-SP-2015.PDF' },
      { claim: 'OCR GCSE Computer Science J277 specification: Exam Reference Language and familiar high-level language answers.', url: 'https://www.ocr.org.uk/Images/558027-specification-gcse-computer-science-j277.pdf' },
      { claim: 'OCR A level Computer Science H446 specification: project in any suitable programming language.', url: 'https://www.ocr.org.uk/Images/170844-specification-accredited-a-level-gce-computer-science-h446.pdf' },
      { claim: 'WJEC GCE AS/A level Computer Science specification (Wales): Unit 2 languages Visual Basic.NET, Python, Java.', url: 'https://www.wjec.co.uk/media/wl4kj5l1/wjec-gce-computer-science-spec-from-2015.pdf' },
      { claim: 'WJEC Eduqas AS Computer Science specification: Component 2 languages Python, Visual Basic.NET, Java.', url: 'https://www.eduqas.co.uk/media/wc2fgbyp/eduqas-as-computer-science-spec-from-2015-e-090119.pdf' },
      { claim: 'WJEC Eduqas GCSE Computer Science specification (from 2020): Python 3 on screen.', url: 'https://www.eduqas.co.uk/media/tf3bvmxe/eduqas-gcse-computer-science-specification-10-02-2020.pdf' },
      { claim: 'Cambridge International AS and A Level Computer Science 9618, 2027 to 2029 syllabus: Paper 4 languages in console mode, 25% of the A Level.', url: 'https://www.cambridgeinternational.org/Images/721397-2027-2029-syllabus.pdf' }
    ],
    rejectedClaims: [
      'That the Eduqas full A level offers Java in an on-screen paper: its A level has written papers and a project, so only the AS on-screen component is listed.',
      'Which languages most UK schools choose: no primary data read, so not stated.',
      'Scottish qualifications: the specifications do not prescribe a language, so Scotland is not in the table.',
      'CCEA A level Software Systems Development: taught with C# tools (row 60), not Java, so omitted rather than listed.',
      'Any help with NEA projects or board practical tasks: explicitly refused.'
    ]
  }
};
