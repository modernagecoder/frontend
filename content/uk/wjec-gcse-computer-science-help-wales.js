'use strict';
// WJEC GCSE Computer Science help, Wales (ag- exam door; UK cluster Phase 3).
// Sources, read raw on 21 September 2026 (WJEC PDFs via curl + PyMuPDF; pages via curl):
//  - WJEC GCSE Computer Science Specification, teaching from 2025, for award from 2027, Version 3,
//    September 2025, Qualification Approval Number C00/4967/3. Verbatim: Unit 1 "Digital examination:
//    1 hour 30 minutes", "80 marks", "Questions requiring objective responses, short and extended
//    answers"; Unit 2 "On-screen examination based on a pre-released brief: 2 hours", "80 marks", "A new
//    scenario will be set by WJEC each year"; "It is not tiered"; Unit 1 "first be awarded in 2026", Unit 2
//    "first be awarded in 2027"; "It would be most appropriate for learners to complete Unit 2 in the final
//    year of the course"; the brief "MUST be during Year 10"; "learners are not permitted to take any
//    prompts or notes into the examination"; "a clean copy of the pre-release materials"; "120 – 140
//    guided learning hours"; Unit 1 areas 1.1 to 1.8 (computer architecture; how systems are structured
//    and function; how systems communicate; algorithms; software; logical operations; operating systems;
//    systems development life cycle).
//  - WJEC GCSE Computer Science Guidance for Teaching: Unit 2 (2025). Verbatim: "Learners will be supplied
//    with a working unannotated program based on the initial task. They will be required to annotate, add
//    and amend functionality to this program during the examination."; materials "written using the
//    standard Python IDLE IDE and will use TKINTER library for graphical user elements"; learners "are
//    required to use the Python IDLE IDE version specified in the pre- release"; pseudo code: "must refrain
//    from using any Python source code in its place"; validation list "presence check range check length
//    check format check lookup table check digit double keying/double entry"; Tkinter "windows, frames,
//    widgets, buttons, geometry managers", "Pack, Grid, and Place"; awarded "using grades A* to G".
//  - WJEC Unit 2 Sample Assessment Materials, Version 3, July 2025: nine questions on a payroll program
//    (marks 8, 3, 8, 11, 23, 8, 8, 5, 6); "flowcharts are not accepted"; typical, extreme and erroneous test
//    data; Appendix B: no "Internet, any shared drives, Virtual Learning Environments (VLEs) or email";
//    Python 3 "matching the version specified on the pre-released brief".
//  - WJEC Delivery Guide: first release of the Unit 2 brief September 2025; first Unit 1 assessment
//    Summer 2026; first Unit 2 assessment and first certification Summer 2027.
//  - WJEC legacy GCSE Computer Science page: "Summer 2026 will be the final full assessment opportunity for
//    this qualification. A resit opportunity for examinations will be available in January 2027, subject
//    to demand." Legacy specification (2017, first awarded 2019): written Unit 1, on-screen Unit 2, Unit 3
//    "Non-exam assessment: 20 hours".
// Spine: in the Unit 2 exam the program is WJEC's, not yours. Candidates spend Year 10 and 11 with the
// brief and may bring nothing in; the exam then hands them a working, unannotated Tkinter program in a
// pinned IDLE version and asks them to annotate, extend, test and refine it. The decisive skill is reading
// code someone else wrote. Deliberately NOT repeated from the Wales page (row 32): the brief's timing and
// no-carry-in rules as the argument, the AO table, and the block-to-typed Python crossing.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'WJEC GCSE', blurb: 'The Unit 2 exam hands you a working program you did not write, with no comments, in Tkinter. How to practise for that.' },
  slug: 'wjec-gcse-computer-science-help-wales',
  code: 'wjcs',
  accent: '#871D29',
  accentRationale: 'Wales exam door: a deep Welsh red from the solver (7.62:1 on every paper tint, dE 9.3 from the nearest used accent), clearly apart from the green of the Wales nation page it hangs from',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'WJEC GCSE Computer Science help',
  title: 'WJEC GCSE Computer Science Help, Wales | Unit 1 and Unit 2',
  description: 'WJEC GCSE Computer Science help in Wales: the Unit 2 exam gives you a working Tkinter program with no comments to extend. How to practise, and Unit 1 too.',
  ogDescription: 'In the Made-for-Wales Unit 2 exam the program is WJEC\'s, not yours: working, unannotated, in Tkinter. Here is how to practise reading it.',
  twitterDescription: 'WJEC GCSE Computer Science: the Unit 2 program you did not write, the Unit 1 digital exam, and the last resit on the old GCSE.',
  pageName: 'WJEC GCSE Computer Science Help, Wales',
  webPageDescription: 'Live online tuition for the WJEC Made-for-Wales GCSE Computer Science, built from the specification, the Unit 2 sample paper and WJEC\'s teaching guidance.',
  courseDescription: 'Live online teaching for WJEC GCSE Computer Science candidates in Wales: reading and extending Python and Tkinter programs, pseudo-code design, test data and the Unit 1 theory.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'WJEC GCSE Computer Science',
  navLinks: [
    { href: '#program', label: 'The Unit 2 program' },
    { href: '#tools', label: 'IDLE and Tkinter' },
    { href: '#unit1', label: 'Unit 1' },
    { href: '#older', label: 'The old GCSE' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Wales &middot; WJEC GCSE &middot; Years 10 and 11',
  h1: 'WJEC GCSE Computer Science help, Wales',
  lede: 'In the summer of Year 11, a candidate for WJEC\'s Made-for-Wales GCSE Computer Science sits at a computer with no internet, opens a Python file they have never seen, and starts reading. WJEC\'s guidance for teachers says learners "will be supplied with a working unannotated program based on the initial task", the scenario from the brief they were given in Year 10, and must "annotate, add and amend functionality to this program during the examination." The solution they wrote themselves during the course stays outside the room. So the skill that decides Unit 2 is not writing a program from nothing. It is reading somebody else\'s, quickly, in a fixed version of IDLE, with Tkinter windows in it and no comments to help. This page sets out what the sample paper asks, which tools the rules fix, what Unit 1 covers, and how we practise all of it.',
  secondaryCta: { href: '#program', label: 'The Unit 2 program' },
  wa: 'Hello Modern Age Coders, I would like a free first lesson for WJEC GCSE Computer Science.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the WJEC specification and Unit 2 sample paper',
  spec: [
    ['Qualification', 'WJEC GCSE Computer Science, Made for Wales'],
    ['Unit 1', 'Digital exam, 1 hour 30 minutes, 80 marks'],
    ['Unit 2', 'On-screen exam, 2 hours, 80 marks'],
    ['In the Unit 2 room', 'A working program, no comments'],
    ['Tools fixed', 'Python 3, IDLE, Tkinter'],
    ['First full award', 'Summer 2027, grades A* to G'],
    ['Lessons', 'Live, in English'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'WJEC\'s Made-for-Wales GCSE Computer Science, first taught in September 2025, has two units of 80 marks each, both sat on screen. Unit 1, Understanding Computer Science, is a 1 hour 30 minute digital exam first sat in summer 2026. Unit 2, Computer Programming, is a two-hour on-screen exam built on a scenario released in Year 10, first sat in summer 2027. In that exam candidates receive a working, unannotated Python program written by WJEC, using the Tkinter library, and must annotate it, add and amend features, design in pseudo-code rather than Python or flowcharts, test with typical, extreme and erroneous data, refine it and evaluate it, all in the version of IDLE the brief names, with no internet and no notes. Modern Age Coders practises exactly that on programs of our own, reading, commenting and extending unfamiliar Tkinter code, and teaches the eight areas of Unit 1. We never work on a candidate\'s pre-release brief. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for the two WJEC units',
    lede: 'Python with Tkinter for Unit 2, the shared theory for Unit 1, and algorithms for both. Each card opens its syllabus.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'WJ / 01', title: 'Python for Teens', note: 'Includes a module on desktop apps with Tkinter, covering windows, widgets and layouts, the library the Unit 2 program is written in.' },
      { course: 'gcse-computer-science-course', code: 'WJ / 02', title: 'GCSE Computer Science', note: 'Architecture, data representation, networks, security and operating systems: the theory every GCSE board shares, mapped here to WJEC\'s eight Unit 1 areas.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'WJ / 03', title: 'Problem Solving and Algorithms', note: 'Tracing, decomposition and standard algorithms, which Unit 1 asks candidates to create and interpret and Unit 2 asks them to design.' }
    ]
  },

  sections: [
    {
      id: 'program', tint: 'tint', eyebrow: 'The Unit 2 program',
      h2: 'The program in the exam is WJEC\'s, not yours',
      lede: 'From WJEC\'s Guidance for Teaching for Unit 2 and the Unit 2 sample assessment materials, version 3, July 2025.',
      body: [
        { kind: 'two',
          leftH3: 'What a candidate receives',
          left: [
            'A working Python program based on the scenario from the pre-release brief, written by WJEC in the standard IDLE editor, with a graphical interface built in Tkinter, and without annotation.',
            'A clean copy of the pre-release materials. Candidates are "not permitted to take any prompts or notes into the examination", so the year\'s own work stays outside.'
          ],
          rightH3: 'What they must do with it',
          right: [
            'Run it and explain what it does, find particular kinds of code inside it, write the comments the original programmer left out, and design new features in pseudo-code.',
            'Then build those features into the file, test them with planned data, refine the program when the requirements change, and evaluate the result.'
          ] },
        { kind: 'table', mt: true, caption: 'The Unit 2 sample paper, question by question', head: ['Question', 'What it asks, set in a payroll program for a fictional firm', 'Marks'], rows: [
          ['1. Running it', 'Find the login error message and the valid login, describe what a blank username produces, name the function that runs first, complete a pay calculation and explain why a currency symbol left in the input breaks it', '8'],
          ['2. Data modelling', 'Point to lines in the file that show given kinds of code', '3'],
          ['3. Annotation', 'Find four uncommented features, such as a window title, a back button, a fixed-width text routine and an error pop-up, and comment each one', '8'],
          ['4. Design', 'Pseudo-code for a surname check that rejects digits, and a layout for a new data-entry window', '11'],
          ['5. Implementation', 'Build that window in Tkinter inside the file: four labelled entry boxes, a Save button that writes to a file, a button back to the main menu, all annotated', '23'],
          ['6. Testing', 'Typical, extreme and erroneous test data for the login, the outcomes explained, and a small fix using upper or lower case handling', '8'],
          ['7. Refinement', 'Add an entry box and a check against the legal limit of 48 hours a week, with an average worked out and shown', '8'],
          ['8. Refinement testing', 'Judge three results against the assumption behind them, such as four weeks to a month', '5'],
          ['9. Evaluation', 'How far the final program meets the requirements and what could still improve, marked in bands', '6']
        ] },
        { kind: 'p', html: 'Read the marks down the right-hand column. The single largest question, 23 of the 80 marks, is building a new Tkinter window inside code the candidate did not write, and another 8 go to commenting that code. A student who can only program on a blank page meets Unit 2 unprepared, however strong they are.' },
        { kind: 'p', html: 'Two rules on the design question catch candidates out. The sample mark scheme says of pseudo-code that "flowcharts are not accepted", and WJEC\'s guidance says learners "must refrain from using any Python source code in its place". Design is marked as design, in the pseudo-code conventions the specification sets out.' },
        { kind: 'source', html: 'Source: WJEC GCSE Computer Science Guidance for Teaching, Unit 2, and the Unit 2 Sample Assessment Materials, version 3, both linked from the <a class="ag-inline-link" href="https://www.wjec.co.uk/qualifications/gcse-computer-science-teaching-from-2025/" rel="noopener" target="_blank">WJEC GCSE Computer Science page</a>. The table paraphrases the sample questions; live papers use a new scenario each year.' }
      ]
    },
    {
      id: 'tools', tint: 'deep', eyebrow: 'IDLE and Tkinter',
      h2: 'The tools are named, and the room has no internet',
      lede: 'Schools may teach programming in any editor they like. For the Unit 2 exam itself, WJEC fixes the environment in writing.',
      body: [
        { kind: 'table', caption: 'What the Unit 2 rules fix', head: ['Area', 'The rule'], rows: [
          ['Editor', 'The Python IDLE version named in the pre-release brief. Schools may teach in any editor, but the exam uses that IDLE version'],
          ['Language', 'Python 3, matching the version on the brief'],
          ['Interfaces', 'Tkinter, the library the exam materials use for windows, buttons and other graphical elements'],
          ['Design', 'Pseudo-code only: no Python in its place, and no flowcharts'],
          ['Environment', 'No internet, shared drives, virtual learning environments or email during the exam'],
          ['Practice', 'WJEC\'s on-screen system is open through the year for practice papers, so the software is familiar before the day']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Tkinter in five parts', p: 'The guidance names windows, frames, widgets, buttons and geometry managers, and the three ways of placing widgets: pack, grid and place. All of it should feel routine by the spring of Year 11.' },
          { h3: 'Seven validation checks', p: 'Presence, range, length and format checks, lookup tables, check digits and double entry. Candidates design them in pseudo-code and must read and adjust existing ones in the program.' },
          { h3: 'Three kinds of test data', p: 'Typical, extreme and erroneous, chosen for a specific routine and then explained. The sample paper gives more marks to a developed explanation than to a bare result.' }
        ] },
        { kind: 'p', html: 'IDLE is a plain editor. Students used to an environment that completes their code, suggests fixes or chats back will find it quiet, and the time to get used to that is months before the exam rather than the morning of it. We teach in IDLE for Unit 2 work for that reason.' },
        { kind: 'p', html: 'A curiosity across the border: Scotland\'s Advanced Higher project now forbids Tkinter, because Qualifications Scotland says tools like it stop candidates showing the skills being assessed. Wales builds its GCSE exam on it. Neither is wrong; they are testing different things, and <a class="ag-inline-link" href="/advanced-higher-computing-science-project-help">the Advanced Higher page</a> explains the Scottish reasoning.' },
        { kind: 'source', html: 'Source: WJEC Guidance for Teaching, Unit 2, for the editor, library, pseudo-code, validation and Tkinter lists; Appendix B of the Unit 2 sample materials for the exam environment; Appendix A for practice on the on-screen system.' }
      ]
    },
    {
      id: 'unit1', tint: '', eyebrow: 'Unit 1',
      h2: 'Unit 1: eight areas, on screen, sat first',
      lede: 'Understanding Computer Science: 1 hour 30 minutes, 80 marks, half the qualification. First sat in summer 2026.',
      body: [
        { kind: 'table', caption: 'The eight areas of Unit 1', head: ['Area', 'What it takes in'], rows: [
          ['1.1 Computer architecture', 'Components, peripheral devices and storage'],
          ['1.2 How systems are structured and function', 'Data types with their representation, storage and compression; data and file structures; automated systems'],
          ['1.3 How systems communicate', 'Networks and infrastructure; cybersecurity and personal privacy'],
          ['1.4 Algorithms', 'Creating and interpreting algorithms'],
          ['1.5 Software', 'Principles of programming, the software development life cycle, program construction'],
          ['1.6 Logical operations', 'Logical operators'],
          ['1.7 Operating systems', 'What an operating system does and how'],
          ['1.8 Systems development life cycle', 'How a system is planned, built, tested and maintained']
        ] },
        { kind: 'p', html: 'The paper mixes question types: objective responses, short answers and extended answers, all typed. The qualification is unitised, each unit entered separately and neither tiered, and WJEC suggests taking Unit 2 in the final year so that it can draw on what Unit 1 has built. In practice that makes Unit 1 the theory a candidate needs in place before the programming exam, not a separate subject.' },
        { kind: 'two', mt: true,
          leftH3: 'Where Unit 1 feeds Unit 2',
          left: [
            'Data types, file structures and validation turn up again as code in the Unit 2 program. Authentication appears in both: as a concept in Unit 1, as a login routine to test in Unit 2.',
            'The software development life cycle in Unit 1 is the shape of Unit 2\'s questions: investigate, design, implement, test, refine, evaluate.'
          ],
          rightH3: 'Typing, not writing',
          right: [
            'Extended answers are typed under time pressure. A student who writes clearly by hand but types slowly loses time on every long answer, and that is fixable with practice.',
            'We set typed answers from the first lesson for exactly that reason.'
          ] }
      ]
    },
    {
      id: 'older', tint: 'tint', eyebrow: 'The old GCSE, and our limits',
      h2: 'Still on the old GCSE? The last resit is January 2027',
      lede: 'WJEC\'s earlier Computer Science GCSE, first awarded in 2019, is closing.',
      body: [
        { kind: 'table', caption: 'The two WJEC Computer Science GCSEs', head: ['', 'Earlier GCSE', 'Made-for-Wales GCSE'], rows: [
          ['First award', 'Summer 2019', 'Summer 2027'],
          ['Units', 'Written Unit 1, on-screen Unit 2, and a 20-hour non-exam Unit 3', 'Digital Unit 1 and on-screen Unit 2, no non-exam unit'],
          ['Status', '"Summer 2026 will be the final full assessment opportunity for this qualification."', 'Taught from September 2025'],
          ['Next sitting', 'A January 2027 resit for the examinations, "subject to demand"', 'Unit 1 each summer; Unit 2 from summer 2027']
        ] },
        { kind: 'p', html: 'From September 2025 WJEC stopped Year 10 entries to the earlier GCSE, so the resit only concerns students who sat it in 2026 and want another attempt at an exam. A resitter should confirm with the school that the January sitting is going ahead before planning around it. We teach both.' },
        { kind: 'two', mt: true,
          leftH3: 'Where we stop',
          left: [
            'We never see or work on a candidate\'s pre-release brief or their own solution to it. The brief is the school\'s to use, and the whole design depends on candidates meeting the exam program with only what they have learned.',
            'Our practice uses programs we write ourselves, in other settings, with the same kind of structure: working, Tkinter-based and deliberately uncommented.'
          ],
          rightH3: 'Language',
          right: [
            'WJEC publishes its qualifications in Welsh as well as English. Our lessons are in English only, so a Welsh-medium candidate is welcome but will learn the technical terms in English.',
            'The <a class="ag-inline-link" href="/coding-and-ai-classes-in-wales">Wales page</a> sets out the wider picture, from primary school to sixth form.'
          ] },
        { kind: 'p', html: 'WJEC also runs a separate GCSE Digital Technology, a different subject with a different focus; <a class="ag-inline-link" href="/wjec-gcse-digital-technology-help-wales">the Digital Technology page</a> explains how the two differ, and <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-uk">the page on declaring AI</a> covers AI tools near any assessed work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs from Year 9 to the exam',
    lede: 'Placement depends on what a student can do without help, whatever year they are in.',
    table: { caption: 'What a WJEC candidate should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Typed Python', 'Year 9 or early Year 10', 'Variables, selection, loops, lists and functions written unaided, in IDLE'],
      ['2. Files and data', 'Year 10', 'Reading and writing files, lists, tuples and dictionaries, string handling and slicing'],
      ['3. Tkinter', 'Late Year 10', 'Windows, frames, labels, entry boxes and buttons placed with pack, grid or place'],
      ['4. Unfamiliar code', 'Year 11', 'Opening a working program, explaining it, commenting it and extending it within the time allowed']
    ] },
    left: { h3: 'Rung four is the rare one', ps: [
      'Plenty of students can write their own programs. Far fewer can read a stranger\'s under time pressure, and nothing in ordinary coursework practises it.',
      'The general order of topics runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Unit 1 runs alongside', ps: [
      'The theory is taught in parallel with the programming, in short weekly blocks, so the summer Unit 1 exam never becomes a cram.',
      'Lessons thin out near each exam and pick up again afterwards.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for WJEC candidates',
    lede: 'Grouped by the unit they serve. The free lesson settles where a student begins.',
    bands: [
      { num: 'I', h3: 'Python for Unit 2', sub: 'Programs, files and Tkinter', courses: [
        { code: 'UK / WJ1 / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first programs to Tkinter desktop apps, the whole Unit 2 toolkit.' },
        { code: 'UK / WJ1 / 02', slug: 'python-ai-kids-masterclass', title: 'Python for younger learners', blurb: 'For Year 8 or 9, so typed Python is settled before the GCSE begins.' },
        { code: 'UK / WJ1 / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python for older learners', blurb: 'For post-16 resitters on the earlier GCSE who need the programming rebuilt quickly.' }
      ] },
      { num: 'II', h3: 'Theory for Unit 1', sub: 'The eight areas', courses: [
        { code: 'UK / WJ2 / 01', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Architecture, data, networks, operating systems and the life cycle.' },
        { code: 'UK / WJ2 / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'Creating and interpreting algorithms, traced by hand first.' },
        { code: 'UK / WJ2 / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Defensive security and personal privacy, the second half of area 1.3.' }
      ] },
      { num: 'III', h3: 'After Year 11', sub: 'For students who want more', courses: [
        { code: 'UK / WJ3 / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Real datasets and charts, a natural next step from GCSE Python.' },
        { code: 'UK / WJ3 / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'A second, strictly typed language, useful before sixth-form computing.' },
        { code: 'UK / WJ3 / 03', slug: 'mysql-mastery-for-teens', title: 'MySQL for teens', blurb: 'Databases and queries, which most sixth-form courses reach early.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Read first, then extend',
    lede: 'Teachers work from India, where the clock never changes, so Wales is four and a half hours behind in summer and five and a half in winter. Times are always fixed in UK time.',
    slots: [
      { time: 'Straight after school', l: 'The usual choice for Year 10 and 11.' },
      { time: 'Mid evening', l: 'After clubs, sport or homework.' },
      { time: 'Weekend', l: 'A full two-hour practice paper with time to go through it.' }
    ],
    cells: [
      { h3: 'Stranger\'s code weekly', p: 'Each week a working program the student has not seen, to run, explain and comment before changing anything.' },
      { h3: 'Tkinter by hand', p: 'Windows and widgets placed by the student, never generated, until a new data-entry window takes minutes.' },
      { h3: 'Pseudo-code as design', p: 'Designs written in pseudo-code first, checked for any slip into Python, then implemented.' },
      { h3: 'Test data explained', p: 'Typical, extreme and erroneous data chosen for a routine, with the outcome explained in full sentences.' },
      { h3: 'IDLE and no internet', p: 'Timed practice in plain IDLE with nothing else open, because that is the room.' },
      { h3: 'Groups of five to ten', p: 'Students at the same rung, reading and commenting each other\'s programs.' }
    ]
  },

  projectsH2: 'Programs our students have written in class',
  projectsLede: 'Four projects from lessons, none of them assessed. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, exactly as posted.',

  fees: {
    h2: 'Fees for WJEC lessons',
    lede: 'One monthly fee in US dollars, the rate for every family outside India. The first lesson costs nothing, and we bill only once a course and a regular time are fixed.',
    free: ['A proper lesson on WJEC material', 'A straight answer on which rung fits', 'Only a phone number needed'],
    group: ['Five to ten students on one rung', 'The same teacher across Years 10 and 11', 'A fresh unfamiliar program most weeks', 'Lighter lessons near each exam'],
    one: ['A teacher for one student', 'A plan built back from the exam dates', 'Suits a January resitter or a late starter']
  },

  faq: {
    eyebrow: 'Questions about WJEC GCSE Computer Science',
    h2: 'What families in Wales ask',
    items: [
      { q: 'How is the Made-for-Wales GCSE Computer Science assessed?', a: 'By two exams of 80 marks each, both on screen. Unit 1 is a 1 hour 30 minute digital exam on computer science theory; Unit 2 is a two-hour on-screen programming exam based on a scenario released in Year 10.' },
      { q: 'What happens in the Unit 2 exam?', a: 'Candidates get a working Python program based on the scenario, written by WJEC and left without comments. They annotate it, design and add features, test, refine and evaluate it, within two hours.' },
      { q: 'Can I take my own solution into the exam?', a: 'No. Learners may not take prompts or notes into the room. They receive a clean copy of the pre-release materials and WJEC\'s own program.' },
      { q: 'Which Python tools are used?', a: 'Python 3 in the IDLE editor, in the version the brief names, with the Tkinter library for windows and buttons. Schools may teach in other editors, but the exam uses that IDLE version.' },
      { q: 'Can I design with a flowchart?', a: 'Not in the sample paper\'s design question, where the mark scheme says flowcharts are not accepted. Designs are written in pseudo-code, and Python code must not be used in its place.' },
      { q: 'When are the exams?', a: 'Unit 1 is available every summer and was first sat in 2026. Unit 2 is first sat in summer 2027, the first year the full qualification is awarded, and WJEC suggests taking it in the final year of the course.' },
      { q: 'Is it tiered?', a: 'No. There is one paper for each unit for every candidate, and grades run from A* to G.' },
      { q: 'I sat the old GCSE in 2026. Can I resit?', a: 'WJEC plans a January 2027 resit opportunity for the examinations, subject to demand. Check with your school that it is running before you plan around it.' },
      { q: 'Will you help with the pre-release brief?', a: 'No. We never see a candidate\'s brief or their solution to it. We practise the same skills on programs we write ourselves.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that there is one monthly fee in US dollars, lower for a group place than for a teacher of your own, with both figures in the fees section. Nothing is paid in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for students in Wales',
    lede: 'The Welsh system, the other WJEC subject, and the rules on AI.',
    items: [
      { href: '/coding-and-ai-classes-in-wales', label: 'Coding and AI classes in Wales', p: 'The Welsh system from primary to sixth form, and how the brief works.' },
      { href: '/wjec-gcse-digital-technology-help-wales', label: 'WJEC GCSE Digital Technology', p: 'The other WJEC computing GCSE, and how it differs.' },
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy-paste it', p: 'AI tools and assessed work, and what the rules say.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online in the UK', p: 'How we teach Python to examined standard.' },
      { href: '/problem-solving-skills-through-coding-uk', label: 'Problem-solving skills through coding', p: 'What the research says coding does and does not teach.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, with every UK page listed.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will ring at a UK time you choose. The lesson uses real WJEC-style material and ends with the rung to begin on.',
    readFirst: 'Would you rather read first? Every <a class="ag-inline-link" href="/courses">course page</a> shows its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> is frank about who the method suits, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> shows the order of topics.',
    note: 'WhatsApp is fastest and free from a UK phone. It goes to our office in India, so the number starts +91.',
    formNote: 'No card and no contract; one reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Wales', links: [
        { href: '/coding-and-ai-classes-in-wales', label: 'Coding and AI in Wales' },
        { href: '/wjec-gcse-digital-technology-help-wales', label: 'WJEC Digital Technology' },
        { href: '/best-python-classes-online-uk', label: 'Python classes online' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'More', links: [
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'AI and assessed work' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'WJEC teaching, live, on UK time'
  },

  personalityCss: `
.ag-root.ag-wjcs .ag-hero h1 { letter-spacing: -0.024em; font-weight: 720; }
.ag-root.ag-wjcs .ag-capsule { border-left-width: 4px; border-bottom: 2px solid var(--ag-accent); }
.ag-root.ag-wjcs .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-wjcs .ag-table caption { text-align: left; font-weight: 700; letter-spacing: 0.005em; }
.ag-root.ag-wjcs .ag-table td:last-child { font-weight: 600; }
.ag-root.ag-wjcs .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  mustMention: ['unannotated', 'Tkinter', 'IDLE', 'pseudo-code', 'flowcharts are not accepted', 'typical, extreme and erroneous', '80 marks', 'January 2027', 'Made-for-Wales', 'Unit 2'],

  dossier: {
    curriculumAuthority: 'Wales, WJEC GCSE Computer Science, Made for Wales, approved by Qualifications Wales. WJEC GCSE Computer Science Specification, teaching from 2025, for award from 2027, Version 3, September 2025, Qualification Approval Number C00/4967/3: Unit 1 "Digital examination: 1 hour 30 minutes", "80 marks", "Questions requiring objective responses, short and extended answers"; Unit 2 "On-screen examination based on a pre-released brief: 2 hours", "80 marks", "A new scenario will be set by WJEC each year"; "It is not tiered"; Unit 1 first awarded 2026, Unit 2 2027; "It would be most appropriate for learners to complete Unit 2 in the final year of the course"; the brief distributed "during Year 10"; "learners are not permitted to take any prompts or notes into the examination"; "a clean copy of the pre-release materials"; Unit 1 areas 1.1 computer architecture, 1.2 how systems are structured and function, 1.3 how systems communicate, 1.4 algorithms, 1.5 software, 1.6 logical operations, 1.7 operating systems, 1.8 systems development life cycle. Guidance for Teaching, Unit 2: "Learners will be supplied with a working unannotated program based on the initial task. They will be required to annotate, add and amend functionality to this program during the examination."; materials written in the standard Python IDLE IDE using the Tkinter library; learners must use the IDLE version specified in the pre-release; pseudo code "must refrain from using any Python source code in its place"; validation checks presence, range, length, format, lookup table, check digit, double keying; Tkinter windows, frames, widgets, buttons, geometry managers, "Pack, Grid, and Place"; grades "A* to G". Unit 2 Sample Assessment Materials, Version 3, July 2025: nine questions on a payroll program worth 8, 3, 8, 11, 23, 8, 8, 5 and 6 marks; "flowcharts are not accepted"; typical, extreme and erroneous test data; Appendix B: no internet, shared drives, VLEs or email; Python 3 matching the brief. Delivery Guide: first Unit 1 assessment Summer 2026, first Unit 2 assessment and certification Summer 2027. WJEC earlier GCSE page: "Summer 2026 will be the final full assessment opportunity for this qualification. A resit opportunity for examinations will be available in January 2027, subject to demand."; no Year 10 entries from September 2025. Earlier specification (2017): written Unit 1, on-screen Unit 2, Unit 3 non-exam assessment of 20 hours, first awarded 2019.',
    localProject: 'In the Unit 2 exam the program is WJEC\'s, not yours. The Made-for-Wales GCSE gives candidates a scenario in Year 10 and lets them bring nothing into the exam; the exam then supplies a working, unannotated Python program built with Tkinter in a pinned IDLE version, and asks candidates to run, explain, annotate, design in pseudo-code, extend, test, refine and evaluate it. The page walks the Unit 2 sample paper question by question (the largest question, 23 of 80 marks, is a new Tkinter window built inside the supplied code), sets out the tool rules (IDLE version, Tkinter, pseudo-code not Python or flowcharts, no internet), notes the contrast with Scotland\'s Advanced Higher ban on Tkinter, covers Unit 1\'s eight areas and how they feed Unit 2, and gives the closing dates of the earlier WJEC GCSE for 2026 resitters. It states plainly that we never work on a candidate\'s brief and that lessons are in English only. Lesson family: an exam that tests reading someone else\'s code, and how to practise that deliberately.',
    requiredMentions: ['unannotated', 'Tkinter', 'flowcharts are not accepted', 'January 2027'],
    sources: [
      { claim: 'WJEC GCSE Computer Science Specification, teaching from 2025, Version 3: both units with durations, marks and formats, the pre-release arrangements, the no-notes rule, entry and first award dates, and the eight Unit 1 areas.', url: 'https://www.wjec.co.uk/media/13im5was/wjec-gcse-computer-science-specification-e.pdf' },
      { claim: 'WJEC Guidance for Teaching, Unit 2: the working unannotated program, the IDLE and Tkinter requirements, the pseudo-code rule, the validation checks and the Tkinter elements.', url: 'https://www.wjec.co.uk/media/uhrp1zpz/gcse-computer-science-guidance-for-teaching-unit-2.pdf' },
      { claim: 'WJEC Unit 2 Sample Assessment Materials, Version 3: the nine sample questions and their marks, the flowchart rule, test data types and the exam environment.', url: 'https://www.wjec.co.uk/media/4tko1lgf/gcse-computer-science-unit-2-computer-programming.pdf' },
      { claim: 'WJEC Delivery Guide: important dates for first teaching, brief release, first assessments and first certification.', url: 'https://www.wjec.co.uk/media/wbcivjex/gcse-computer-science-delivery-guide.pdf' },
      { claim: 'WJEC earlier GCSE Computer Science page: final full assessment in summer 2026, a January 2027 resit subject to demand, and no Year 10 entries from September 2025.', url: 'https://www.wjec.co.uk/qualifications/computer-science-gcse/' }
    ],
    rejectedClaims: [
      'Any detail of a live pre-release brief or scenario: not read, and never used.',
      'Results, grade boundaries or an examiners\' report for the first Unit 1 sitting in 2026: none read at a primary source for this build.',
      'The detailed mark allocation of the earlier GCSE\'s units: only the broad structure is stated, since a later edition of that specification was not checked.',
      'That the Unit 2 exam program is identical to the one in the brief: WJEC says only that it is based on the initial task.',
      'Welsh-medium teaching: our lessons are in English only, and the page says so.',
      'Any promise about a grade, and any work on a candidate\'s brief or solution, which we decline.'
    ]
  }
};
