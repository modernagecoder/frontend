// SHIP: market (en best-fit guide, international schools) | Lima international-school families: IGCSE CS moves from pseudocode to Python in 2029 | translating Cambridge pseudocode (ARRAY[1:5], FOR 1 TO 5) into 0-based Python without losing an element
'use strict';
// International-school families in Lima: coding (ag- English best-fit guide, row PE041, hubGroup guides, code isf).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Audience: families in Lima whose children attend international, Cambridge, IB or other English-medium schools.
// Schools appear only as context: no school is named, no count of international schools or pupils is given (no
// official figure exists; MARKET.md 1.2), and no school is presented as a source of our students. ibo.org is blocked
// (facts-school BLOCKED.md), so IB syllabus content is not quoted. Spine (not the Lima pilot's EF bands or the Spanish
// bilingual-school page's TypeErrors): Cambridge IGCSE Computer Science 0478 changes its programming language between
// the 2026-2028 and 2029-2031 syllabuses, and what that means for a child and a family in Lima.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/international-school-families-lima-coding/,
// fetched 9 November 2026; quotes grepped in the extracted text):
//  - Cambridge International, IGCSE Computer Science (0478) page (cam_0478.txt): "using Python 3 as the only language for
//    teaching, assessment and programming questions"; "We have removed references to the program development life cycle
//    and pseudocode to focus on practical programming"; "This syllabus has the same content as Cambridge IGCSE Computer
//    Science (0265) but is offered as a paper-only examination route"; programme list includes "Cambridge Primary
//    Computing (0059)" and "Cambridge Lower Secondary Computing (0860)".
//  - 0478 syllabus 2026-2028 (697167-2026-2028-syllabus.pdf, s26.txt): "Use this syllabus for exams in 2026, 2027 and
//    2028."; "Exams are available in the June and November series."; Paper 1 "1 hour 45 minutes Computer Systems 50% 75
//    marks"; Paper 2 "1 hour 45 minutes Algorithms, Programming and Logic 50% 75 marks"; "Where the solution to a problem
//    involves coding, candidates are required to write solutions in pseudocode. Solutions written in programming code will
//    not be awarded marks."; in the 15-mark scenario question "pseudocode or ... Python, Visual Basic or Java"; "FOR
//    <identifier> ← <value1> TO <value2>"; "Generally, a lower bound of 1 will be used"; "Complete a trace table to
//    document a dry-run of an algorithm"; standard methods include totalling and counting.
//  - 0478 syllabus 2029-2031 (763431-2029-2031-syllabus.pdf, s29.txt): "Use this syllabus for exams in 2029, 2030 and
//    2031."; "first examination in 2029"; Paper 1 "1 hour 45 minutes Computer Systems and Logic", Paper 2 "1 hour 45
//    minutes Algorithms and Programming", each "50% 75 marks"; "Complete a trace table for a given algorithm".
//  - MINEDU, COAR and IB note (n-coar-ib-1100): "En el año 2025, en todo el país, 2502 estudiantes obtuvieron el Diploma del
//    Bachillerato Internacional", COAR "47 %".
//  - Universidad de Lima, Guía 2027-1(A) (ulima-guia-20271a): IB Diploma route for applicants "en un plazo no mayor de
//    tres años".
//  - PUCP, Guía del postulante (pucp-guia): Diploma de Bachillerato route, "ENTREVISTAS: Hasta el 28 de enero de 2027".
//  - Time: America/Lima UTC-5, no DST; India UTC+5:30 (timezone.tsv).
// Our own calculations (python3 -I, scratchpad pe/e7/isf_v1.py to v3.py), printed output: v1 "Total: 222 Passed: 2";
//   v2 last line "IndexError: list index out of range"; v3 "Total: 294 Passed: 3 Average: 58.8" and "Check: 294 3".
// Lesson family: translating 1-based, inclusive Cambridge pseudocode loops into 0-based, end-exclusive Python: the
// literal translation drops the first element; the "fixed" bound runs off the end; iterating over the values removes
// the index entirely; an independent check with sum() and a comprehension.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const PSEUDO = [
  'DECLARE Marks : ARRAY[1:5] OF INTEGER',
  'Total ← 0',
  'Passed ← 0',
  'FOR Index ← 1 TO 5',
  '    Total ← Total + Marks[Index]',
  '    IF Marks[Index] >= 50',
  '        THEN',
  '            Passed ← Passed + 1',
  '    ENDIF',
  'NEXT Index',
  'OUTPUT "Total: ", Total, " Passed: ", Passed'
].join('\n');

const V1 = [
  'marks = [72, 45, 88, 50, 39]',
  '',
  'total = 0',
  'passed = 0',
  'for index in range(1, 5):',
  '    total = total + marks[index]',
  '    if marks[index] >= 50:',
  '        passed = passed + 1',
  "print('Total:', total, 'Passed:', passed)"
].join('\n');

const OUT1 = 'Total: 222 Passed: 2';

const V2 = [
  'marks = [72, 45, 88, 50, 39]',
  '',
  'total = 0',
  'for index in range(1, 6):',
  '    total = total + marks[index]',
  "print('Total:', total)"
].join('\n');

const OUT2 = 'IndexError: list index out of range';

const V3 = [
  'marks = [72, 45, 88, 50, 39]',
  '',
  'total = 0',
  'passed = 0',
  'for mark in marks:',
  '    total = total + mark',
  '    if mark >= 50:',
  '        passed = passed + 1',
  "print('Total:', total, 'Passed:', passed, 'Average:', total / len(marks))",
  "print('Check:', sum(marks), len([m for m in marks if m >= 50]))"
].join('\n');

const OUT3 = [
  'Total: 294 Passed: 3 Average: 58.8',
  'Check: 294 3'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'International-school families in Lima' },
  slug: 'international-school-families-lima-coding',
  code: 'isf',
  accent: '#503807',
  accentRationale: 'International-school families in Lima: a dark walnut brown #503807, the colour of a school library shelf of hardback syllabuses, quiet and established rather than flashy; contrast above 4.5 on the paper #FBF8F2 and its tints, as allocated in alloc.tsv and checked by the build',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding for international-school families in Lima',
  title: 'Coding for International-School Families in Lima, Live',
  description: 'Live online coding classes in English for Lima families at international, Cambridge and IB schools: IGCSE and IB computer science support, Python, group or 1-on-1.',
  ogDescription: 'Cambridge IGCSE Computer Science switches from pseudocode to Python 3 for exams from 2029. What that means for a pupil in Lima, IB and university routes in Peru, and a pseudocode-to-Python lesson.',
  twitterDescription: 'Live coding and computer science classes in English for children at Lima\'s international, Cambridge and IB schools.',
  pageName: 'Coding for International-School Families in Lima',
  webPageDescription: 'A guide for families in Lima whose children attend international, Cambridge or IB schools, built from Cambridge International\'s IGCSE Computer Science 0478 syllabuses for 2026 to 2028 and 2029 to 2031, MINEDU\'s 2025 IB Diploma figures and the admission guides of Universidad de Lima and PUCP, with an original lesson translating Cambridge pseudocode into Python.',
  courseDescription: 'Live online coding and computer science classes taught in English for children and teenagers in Lima at international, Cambridge, IB and other English-medium schools: Cambridge IGCSE Computer Science (0478) support in pseudocode and Python, IB Diploma Computer Science support, Python, Java and algorithms, alongside school, in a group of fifteen to twenty or one to one, at any hour.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'International-school families',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#igcse', label: 'IGCSE change' },
    { href: '#lesson', label: 'Pseudocode to Python' },
    { href: '#ib', label: 'IB and university' },
    { href: '#younger', label: 'Younger children' },
    { href: '#clock', label: 'Lima time' }
  ],
  eyebrow: 'Lima &middot; International, Cambridge and IB schools &middot; Ages 6 to 18',
  h1: 'Coding for international-school families in Lima',
  lede: 'If your child studies in English at a Lima school following Cambridge, IB or another international programme, the question is rarely whether to learn to code. It is how to fit computing around a demanding timetable, which language the exam will use, and how it connects to university. This page answers those three questions from the exam boards\' and universities\' own documents.',
  secondaryCta: { href: '#igcse', label: 'See the IGCSE change' },
  wa: 'Hello Modern Age Coders, our child attends an international school in Lima and we are interested in coding or computer science classes in English. Could we book a free first class?',
  heroNote: 'Teaching since 2020 &middot; 10,000+ students worldwide &middot; Cambridge and IB computing taught alongside school',
  spec: [
    ['Who', 'Children and teenagers at Lima\'s English-medium schools'],
    ['Programmes', 'Cambridge IGCSE and A Level, IB Diploma, general coding'],
    ['What', 'Python, pseudocode, Java, algorithms and projects'],
    ['Format', 'A group of fifteen to twenty, or one to one'],
    ['Hours', 'Any day, any hour in Lima time'],
    ['First class', 'Free; no card taken']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders gives live online coding and computer science classes in English for children and teenagers in Lima who attend international, Cambridge, IB or other English-medium schools. We support Cambridge IGCSE Computer Science, which moves from pseudocode to Python 3 only for exams from 2029, as well as IB Diploma Computer Science and general coding from age 6. Mentors based in India teach alongside school, never instead of it; families pick a group of fifteen to twenty pupils or private lessons, at whatever hour fits a long school day.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses international-school families ask for first',
    lede: 'Two follow an exam syllabus closely; one prepares the ground for either.',
    items: [
      { course: 'igcse-computer-science-0478-course', code: 'ISF / 01', title: 'Cambridge IGCSE Computer Science (0478)', alt: 'Course thumbnail for the Cambridge IGCSE Computer Science 0478 course', note: 'Both papers, with pseudocode for exams up to 2028 and Python for exams from 2029.' },
      { course: 'ib-diploma-computer-science-course', code: 'ISF / 02', title: 'IB Diploma Computer Science', alt: 'Course thumbnail for the IB Diploma Computer Science course', note: 'Support for the Diploma course alongside the school\'s own teaching, including the programming component.' },
      { course: 'python-complete-masterclass-teens', code: 'ISF / 03', title: 'Python for teens', alt: 'Course thumbnail for the complete Python masterclass for teens', note: 'Ages 13 to 17. The language Cambridge will examine from 2029, learned properly before the exam years begin.' }
    ]
  },

  sections: [
    {
      id: 'igcse',
      eyebrow: 'The exam board\'s own words',
      h2: 'Is Cambridge IGCSE Computer Science changing to Python?',
      lede: 'Yes, from the 2029 exams. Cambridge International says its updated 0478 syllabus removes pseudocode and uses Python 3 as the only language for teaching, assessment and programming questions. Until then, the 2026 to 2028 syllabus asks for pseudocode in most coding answers.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cambridge IGCSE Computer Science 0478: the 2026 to 2028 syllabus beside the 2029 to 2031 syllabus', head: ['Feature', 'Exams in 2026, 2027 and 2028', 'Exams in 2029, 2030 and 2031'], rows: [
          ['Paper 1', 'Computer Systems, 1 hour 45 minutes, 75 marks, 50%', 'Computer Systems and Logic, 1 hour 45 minutes, 75 marks, 50%'],
          ['Paper 2', 'Algorithms, Programming and Logic, 1 hour 45 minutes, 75 marks, 50%', 'Algorithms and Programming, 1 hour 45 minutes, 75 marks, 50%'],
          ['How code is written in answers', 'Pseudocode; "Solutions written in programming code will not be awarded marks", except in the 15-mark scenario question', 'Python 3, the only language for teaching, assessment and programming questions'],
          ['Scenario question', 'Pseudocode, or Python, Visual Basic or Java', 'Python'],
          ['Pseudocode', 'Set out in the syllabus; arrays generally use a lower bound of 1', 'Removed, with the program development life cycle'],
          ['Trace tables', 'Complete a trace table to document a dry run', 'Complete a trace table for a given algorithm'],
          ['Exam series', 'June and November', 'June and November']
        ] },
        { kind: 'source', html: 'Sources: Cambridge International, Cambridge IGCSE Computer Science (0478) syllabus for exams in 2026, 2027 and 2028, and syllabus for exams in 2029, 2030 and 2031 (first examination in 2029); the 0478 programme page, which also notes that 0265 has the same content as 0478 with 0478 as the paper-only route. Consulted on 9 November 2026. Modern Age Coders has no link with Cambridge International or with any school.' },
        { kind: 'two', mt: true,
          leftH3: 'What it means for a pupil in Lima',
          left: [
            'Which syllabus your child sits depends on the year of the exam, not the year they start the course. Ask the school which exam session your child is entered for. If it falls in 2028 or earlier, the written answers are in Cambridge pseudocode; from 2029, in Python 3.',
            'The change is good news for learners who already code. Python practised at home now becomes exam practice directly. For pupils sitting the earlier syllabus, though, the gap between pseudocode on paper and Python on a screen is real, and the lesson below shows where it bites.'
          ],
          rightH3: 'What stays the same',
          right: [
            'Both syllabuses keep two papers of equal weight and both keep trace tables. Reading an algorithm line by line and recording each variable is assessed whichever language the code is in, which is why our mentors trace by hand in every course.',
            'Both offer June and November series. Families who move between Peru and other countries mid-course should check with the school which series and syllabus apply.'
          ] },
        { kind: 'p', mt: true, html: 'For a fuller account of how we teach the Cambridge course, see our page on <a class="ag-inline-link" href="/cambridge-igcse-computer-science-tuition">Cambridge IGCSE Computer Science tuition</a>. Lima families at English-medium schools who want the wider picture, including Lima\'s English level and the national curriculum, can read our <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> page.' }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'How do you turn Cambridge pseudocode into Python without errors?',
      lede: 'Carefully, because the two count differently. Cambridge pseudocode arrays generally start at 1 and its FOR loops include their last value; Python lists start at 0 and range() stops before its end. The lesson is ours, written for pupils moving between the two, and the marks are invented.',
      body: [
        { kind: 'code', label: 'The algorithm, in the style of Cambridge pseudocode', lang: 'Pseudocode', code: PSEUDO, note: 'A totalling and counting algorithm, one of the standard methods in the 2026 to 2028 syllabus. Five marks, a running total, and a count of marks of 50 or more.' },
        { kind: 'p', mt: true, html: 'Asked to "write this in Python", many pupils copy the shape line by line: <code>FOR Index ← 1 TO 5</code> becomes <code>for index in range(1, 5)</code>. Before running it, the mentor asks the pupil to predict the total. The five marks add up to 294, and three of them are 50 or more.' },
        { kind: 'code', label: 'Version 1: the line-by-line translation', lang: 'Python', code: V1, note: 'It looks like a faithful copy of the pseudocode. It runs without any error.' },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: OUT1, note: 'Exact output from our own run with Python 3. The total is 72 short and one pass is missing. The first mark, 72, was never counted, because index 1 in Python is the second item.' },
        { kind: 'p', mt: true, html: 'A pupil who notices the missing 72 often "fixes" the range instead of the index, reasoning that the pseudocode goes to 5, so Python must go one further.' },
        { kind: 'code', label: 'Version 2: the tempting fix', lang: 'Python', code: V2, note: '<code>range(1, 6)</code> produces 1, 2, 3, 4 and 5, so the last step asks for <code>marks[5]</code>.' },
        { kind: 'code', label: 'Last line of what Version 2 prints', lang: 'Output', code: OUT2, note: 'Exact final line of the error from our own run. A five-item Python list has positions 0 to 4; position 5 does not exist. The first mark is still skipped, but the program now stops before it can show you.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Trace both versions.</strong> The pupil writes a trace table with columns for index, the mark read and the total, exactly as Paper 2 asks. Version 1 shows the 72 never appearing; Version 2 shows the loop asking for a sixth item.',
          '<strong>Name the two differences.</strong> Pseudocode arrays start at 1 here; Python lists start at 0. Pseudocode FOR includes its last value; Python range() leaves it out. Two differences that partly cancel are harder to spot than one.',
          '<strong>Ask whether you need the index at all.</strong> The algorithm only reads each mark once, in order. Python can walk through the values themselves, so there is no index to get wrong.',
          '<strong>Check independently.</strong> Compare the loop\'s answer with a second method that does not share its logic.'
        ] },
        { kind: 'code', label: 'Version 3: loop over the values, then check', lang: 'Python', code: V3, note: '<code>for mark in marks</code> visits every item once, however the list is numbered. The last line recomputes the same two numbers with <code>sum()</code> and a list comprehension, as an independent check.' },
        { kind: 'code', label: 'What Version 3 prints', lang: 'Output', code: OUT3, note: 'Exact output from our own run: total 294, three passes, average 58.8, and the check agrees.' },
        { kind: 'p', mt: true, html: 'For a pupil sitting the 2026 to 2028 papers, the lesson runs the other way too: when writing pseudocode by hand, keep Cambridge\'s conventions and do not let Python habits leak in. For a pupil sitting from 2029, Version 3 is simply good Python. Either way, the trace table is the tool that finds the error, and it is examined on both syllabuses.' }
      ]
    },
    {
      id: 'ib',
      eyebrow: 'IB and university',
      h2: 'How do IB and Cambridge students in Peru use their diploma for university?',
      lede: 'Peruvian universities set their own routes for international diplomas, and each university decides who it admits. Two Lima universities describe such routes in their current admission guides.',
      body: [
        { kind: 'two',
          leftH3: 'The IB Diploma in Peru',
          left: [
            'MINEDU reported that 2,502 students in Peru obtained the IB Diploma in 2025, and that students of the public COAR high-performance schools made up 47% of them. The rest came from other schools, many of them private English-medium and international schools in Lima and other cities.',
            'We cannot quote the IB\'s own course guides here, because the IB\'s website refused our requests. For IB Computer Science and IB Mathematics, our Spanish pages on an <a class="ag-inline-link" href="/bachillerato-internacional-ciencias-de-la-computacion-tutor">IB Computer Science tutor</a> and an <a class="ag-inline-link" href="/tutor-ib-matematicas-en-ingles-peru">IB maths tutor in English</a> go into more detail.'
          ],
          rightH3: 'University routes in Lima',
          right: [
            'Universidad de Lima\'s admission guide for 2027-1(A) includes a route for holders of the IB Diploma who apply within three years of obtaining it. PUCP\'s applicant guide lists a Diploma de Bachillerato route, with interviews for its second call running until 28 January 2027.',
            'We do not advise on admission and we do not promise places. Our part is the computing and maths a pupil studies in English, alongside school; the university reads the diploma and decides.'
          ] },
        { kind: 'p', mt: true, html: 'Students aiming at universities abroad usually follow the same diploma and add more computing on their own. Cambridge says the 0478 course prepares for its AS and A Level Computer Science (9618), which we also teach.' }
      ]
    },
    {
      id: 'younger',
      eyebrow: 'Younger children',
      h2: 'What about coding for younger children at international schools?',
      lede: 'Younger children at Cambridge schools may follow computing from primary level: Cambridge lists Primary Computing (0059) and Lower Secondary Computing (0860) among its programmes. Whatever the school offers, home classes add projects and depth at the child\'s pace.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ages 6 to 8', p: 'Scratch stories and games, with an English-speaking mentor who matches the vocabulary the child already uses at school.' },
          { h3: 'Ages 9 to 12', p: 'Typed Python and web pages. Children at English-medium schools often move faster here, because instructions and error messages are already familiar.' },
          { h3: 'Ages 13 and up', p: 'Python and Java in depth, algorithms, and a plan for IGCSE, IB or A Level computing set with the family and, where useful, the school\'s own syllabus.' }
        ] },
        { kind: 'p', mt: true, html: 'Families who arrived in Lima recently sometimes ask for continuity: the same mentor and course whether the child is in Lima, on a home visit abroad or moving to the next posting. Because everything is online, the class follows the child.' }
      ]
    },
    {
      id: 'timetable',
      eyebrow: 'A long school day',
      h2: 'How can coding fit around an international-school timetable?',
      lede: 'With short, regular sessions at an hour that protects homework and sleep. International-school days are long, and most families want something that adds to school rather than competing with it.',
      body: [
        { kind: 'ol', items: [
          '<strong>Start with the exam calendar.</strong> Find out the exam session and syllabus year for IGCSE or IB. A pupil two years away needs foundations; a pupil in the exam year needs targeted practice.',
          '<strong>Pick one or two fixed slots.</strong> Two classes a week is usual. Many Lima families choose an early evening hour or a weekend morning.',
          '<strong>Bring school work in.</strong> One-to-one classes can use the pupil\'s own coursework topics or past-paper style questions written by our mentors, never a school\'s confidential material.',
          '<strong>Lighten in exam months.</strong> In May and October, before the June and November series, families often switch to revision or pause.',
          '<strong>Review each term.</strong> The mentor sends a short report, and the family decides whether to keep the pace, add a subject or slow down.'
        ] },
        { kind: 'p', mt: true, html: 'Everything we do runs beside school. We do not award school grades or Cambridge or IB qualifications; at the end of a course the pupil receives our own certificate of completion, and the school and exam board remain the ones that assess.' }
      ]
    },
    {
      id: 'spanish',
      eyebrow: 'Teaching language',
      h2: 'Are the classes taught in Spanish?',
      lede: 'No. Teaching is live, online and in English only, which suits English-medium pupils. Mentors work from India; they speak clearly, adapt to the pupil\'s pace and accent, and use the subject vocabulary the exam boards use.',
      body: [
        { kind: 'two',
          leftH3: 'For pupils who study in English',
          left: [
            'Pupils used to learning computing in English at school hear the same terms with us: algorithm, iteration, selection, trace table. That matters in exams, where a precise word earns a mark and a vague one does not.',
            'Pupils who switched recently from a Spanish-medium school get extra time with vocabulary, and the mentor checks understanding more often in the first weeks.'
          ],
          rightH3: 'For parents',
          right: [
            'You can write to us on WhatsApp in English or Spanish. Progress notes come in English.',
            'If one parent prefers Spanish, tell us and we will keep administrative messages in Spanish while the lessons stay in English.'
          ] }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Lima time',
      h2: 'What time are the classes in Lima?',
      lede: 'Whenever suits your family. Our mentors are in India, and with no daylight saving in either country the offset never changes, so a slot chosen in March still works in October.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Lima hours converted to India time (illustrations only)', head: ['Lima time', 'India time', 'Day in India'], rows: [
          ['6:30 a.m.', '5:00 p.m.', 'Same day'],
          ['8:00 a.m.', '6:30 p.m.', 'Same day'],
          ['10:00 a.m.', '8:30 p.m.', 'Same day'],
          ['1:00 p.m.', '11:30 p.m.', 'Same day'],
          ['4:30 p.m.', '3:00 a.m.', 'Next day'],
          ['7:00 p.m.', '5:30 a.m.', 'Next day']
        ] },
        { kind: 'source', html: 'Lima uses UTC minus 5 throughout the year (tz database, America/Lima); India uses UTC plus 5:30. India is therefore 10 hours 30 minutes ahead of Lima on every day of the year.' },
        { kind: 'p', mt: true, html: 'Weekend mornings in Lima are evenings in India, a popular choice for pupils with long school days. You book in Lima time and the mentor sees the converted hour.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How do we measure progress for an exam-bound pupil?',
    lede: 'Five stages of our own, mapped to skills both Cambridge syllabuses assess. They are not exam grades and do not predict one.',
    table: { caption: 'Five stages towards exam-ready computing (ours)', head: ['Stage', 'The pupil can', 'Linked exam skill'], rows: [
      ['1. Read', 'explain what a short algorithm does, line by line', 'Explaining the purpose of an algorithm'],
      ['2. Trace', 'complete a trace table for loops and selections', 'Trace tables, on both syllabuses'],
      ['3. Translate', 'move between pseudocode and Python without off-by-one errors', 'Writing algorithms (pseudocode to 2028, Python from 2029)'],
      ['4. Standard methods', 'write totalling, counting, linear search and bubble sort from memory', 'Standard methods of solution'],
      ['5. Scenario', 'plan and write a longer program from a written scenario', 'The scenario question in Paper 2']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask which stage your child reached this month and which stage the exam needs. The gap tells you whether to keep the pace or increase it.',
      'Stage 3 matters most for pupils sitting the 2026 to 2028 syllabus, where pseudocode and Python must be kept apart.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Write the trace table before you run anything. Examiners reward the table, not the run.',
      'When translating, ask first whether you need an index at all.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for English-medium pupils',
    lede: 'All live, in English, with one mentor through the course, taught alongside school.',
    bands: [
      { num: 'I', h3: 'Maths for the same programmes', sub: 'Ages 13 to 18', courses: [
        { code: 'ISF / MATHS / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE Mathematics', blurb: 'The Cambridge maths course, topic by topic, in English.' },
        { code: 'ISF / MATHS / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics AA and AI', blurb: 'Both IB maths courses, with internal assessment support.' },
        { code: 'ISF / MATHS / 03', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A Level Maths', blurb: 'Pure, mechanics and statistics for A Level pupils.' }
      ] },
      { num: 'II', h3: 'Computing in depth', sub: 'Ages 13 to 18', courses: [
        { code: 'ISF / CS / 01', slug: 'cambridge-a-level-computer-science-9618-course', title: 'Cambridge AS and A Level Computer Science (9618)', blurb: 'The step after IGCSE, with programming and theory.' },
        { code: 'ISF / CS / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Typed, object-oriented programming for older pupils.' },
        { code: 'ISF / CS / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA for teens', blurb: 'Algorithms and data structures beyond the syllabus.' }
      ] },
      { num: 'III', h3: 'Looking abroad', sub: 'Ages 15 to 18', courses: [
        { code: 'ISF / ABROAD / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'For pupils at American-curriculum schools or applying to the US.' },
        { code: 'ISF / ABROAD / 02', slug: 'sat-math-prep-course', title: 'SAT Maths', blurb: 'Maths for US university applications.' },
        { code: 'ISF / ABROAD / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming for teens', blurb: 'Contest problems for pupils who want a challenge.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How do the live classes work for international-school pupils?',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Weekday evenings', l: 'After school and homework, Lima time.' },
      { time: 'Weekend mornings', l: 'A common choice for long school weeks.' },
      { time: 'Set by the family', l: 'One-to-one classes at the hours you choose.' }
    ],
    cells: [
      { h3: 'Syllabus aware', p: 'Pseudocode or Python, depending on the exam year.' },
      { h3: 'Trace tables', p: 'Practised in every course, as both papers require.' },
      { h3: 'Original questions', p: 'Written by our mentors, never a school\'s private material.' },
      { h3: 'One mentor', p: 'The same person from first class to exam season.' },
      { h3: 'Termly notes', p: 'Progress against the stages, sent to parents.' },
      { h3: 'Group or private', p: 'A group of fifteen to twenty pupils of a similar level, or one to one.' }
    ]
  },

  projectsH2: 'Beyond the syllabus',
  projectsLede: 'Projects built by some of our older students. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Reviews left on Google by families and students, reproduced as written.',

  fees: {
    h2: 'Fees for families in Lima',
    lede: 'Below you will find each plan\'s monthly fee in US dollars, charged to a card. If your card is in soles, your bank converts the charge at its own rate, so the amount on the statement can vary slightly between months.',
    free: ['A free first class with a mentor', 'A check against the pupil\'s syllabus and exam year', 'No card needed'],
    group: ['Fifteen to twenty pupils of a similar level', 'One mentor throughout', 'Two live classes a week', 'Monthly; stop at the end of any month'],
    one: ['Your child and a mentor alone', 'Planned around the school syllabus', 'Days and hours you choose']
  },

  faq: {
    eyebrow: 'Lima families ask',
    h2: 'Coding for international-school families in Lima: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Lessons are given live and online, in English only, by mentors in India whose speech is clear and who adjust to each pupil\'s pace and accent. That matches the language most international-school pupils already study computing in.' },
      { q: 'Is Cambridge IGCSE Computer Science switching to Python?', a: 'Yes. Cambridge International says the 0478 syllabus for exams in 2029, 2030 and 2031 uses Python 3 as the only language and removes pseudocode. For exams in 2026, 2027 and 2028, most coding answers must still be written in pseudocode.' },
      { q: 'My child sits IGCSE in 2027. Should they still learn Python?', a: 'Yes, but alongside pseudocode, not instead of it. Under the 2026 to 2028 syllabus, code written in a programming language earns no marks except in the 15-mark scenario question. Learning both, and the differences between them, is the safest plan.' },
      { q: 'Do you support the IB Diploma?', a: 'Yes, IB Computer Science and IB Mathematics, alongside the school\'s own teaching. The school and the IB assess; we do not award IB grades or predict them.' },
      { q: 'Will this help with university admission in Peru?', a: 'Universities decide admission. Universidad de Lima and PUCP both describe routes for international diploma holders in their current guides. We teach the subjects; we do not advise on applications or promise places.' },
      { q: 'Do you use school materials?', a: 'We work from the public syllabus and from questions our mentors write. We never ask for or use a school\'s confidential tests or coursework briefs.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Indian clocks run 10 hours 30 minutes ahead of Lima\'s throughout the year: 8:00 a.m. in Lima is 6:30 p.m. in India.' },
      { q: 'Can younger siblings join too?', a: 'Yes. We teach from age 6, with Scratch for the youngest and Python from about 9. Siblings usually take separate classes matched to their age.' },
      { q: 'Are you connected with any school in Lima?', a: 'No. We are not connected with any school, with Cambridge International, the IB, MINEDU or any university. Classes run beside school.' },
      { q: 'Do you give a certificate?', a: 'Pupils who finish a course receive our own certificate of completion. It is not a Cambridge or IB qualification, a school grade or a Peruvian credential.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for international-school families',
    lede: 'Related pages in English.',
    items: [
      { href: '/cambridge-igcse-computer-science-tuition', label: 'Cambridge IGCSE Computer Science tuition', p: 'How we teach the 0478 course in detail.' },
      { href: '/coding-for-igcse-students', label: 'Coding for IGCSE students', p: 'Programming practice that supports the IGCSE years.' },
      { href: '/ib-computer-science-online-tuition', label: 'IB Computer Science online tuition', p: 'Support for the IB Diploma computing course.' },
      { href: '/cambridge-igcse-maths-0580-help', label: 'Cambridge IGCSE Maths 0580 help', p: 'The maths course many of the same pupils take.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in one of our lessons.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our full offer for Peru.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the programme and exam year when you book. In the free class the mentor works through a short algorithm with your child, asks them to trace it and explain it in English, and then suggests a course, a pace and whether a group or one-to-one classes fit better.',
    readFirst: 'To read more before booking, our page on <a class="ag-inline-link" href="/how-we-teach">how we teach</a> follows one class from start to finish, and every syllabus sits in the <a class="ag-inline-link" href="/courses">course catalogue</a>.',
    note: 'Classes are live and online, taught in English by mentors in India. Write to us on WhatsApp in English or Spanish.',
    formNote: 'Free; no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Exam courses', links: [
        { href: '/courses/igcse-computer-science-0478-course', label: 'IGCSE Computer Science (0478)' },
        { href: '/courses/ib-diploma-computer-science-course', label: 'IB Diploma Computer Science' },
        { href: '/courses/cambridge-a-level-computer-science-9618-course', label: 'A Level Computer Science (9618)' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'For families', links: [
        { href: '/cambridge-igcse-computer-science-tuition', label: 'IGCSE tuition' },
        { href: '/ib-computer-science-online-tuition', label: 'IB tuition' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'FOR 1 TO 5 is not range(1, 5)'
  },

  personalityCss: `
.ag-root.ag-isf .ag-hero h1 { letter-spacing: -0.014em; max-width: 20ch; }
.ag-root.ag-isf .ag-capsule { border-left-width: 4px; }
.ag-root.ag-isf .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-isf .ag-table td { line-height: 1.5; }
.ag-root.ag-isf .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Cambridge International: IGCSE Computer Science 0478 syllabus for exams in 2026 to 2028 and syllabus for exams in 2029 to 2031, and the 0478 programme page; MINEDU note on the 2025 IB Diploma results (2,502 diplomas, 47% COAR); Universidad de Lima, Guía del postulante 2027-1(A); PUCP, Guía del postulante. Read 9 November 2026. ibo.org was blocked, so no IB course guide is quoted. The pseudocode lesson, the marks and the five stages are our own.',
    localProject: 'Translating Cambridge pseudocode (ARRAY[1:5], FOR Index ← 1 TO 5) into Python: the line-by-line translation range(1, 5) prints "Total: 222 Passed: 2", skipping the first mark; the tempting fix range(1, 6) ends in "IndexError: list index out of range"; looping over the values prints "Total: 294 Passed: 3 Average: 58.8" and an independent check with sum() agrees. Set against the 0478 switch from pseudocode (exams to 2028) to Python 3 only (exams from 2029).',
    requiredMentions: ['Cambridge IGCSE Computer Science 0478: the 2026 to 2028 syllabus beside the 2029 to 2031 syllabus', 'Solutions written in programming code will not be awarded marks', 'Total: 222 Passed: 2', 'Total: 294 Passed: 3 Average: 58.8', 'Cambridge lists Primary Computing (0059) and Lower Secondary Computing (0860)', 'interviews for its second call running until 28 January 2027', 'Five stages towards exam-ready computing (ours)', 'FOR 1 TO 5 is not range(1, 5)', 'Two differences that partly cancel are harder to spot than one'],
    sources: [
      { claim: '0478 for exams from 2029: Python 3 the only language; pseudocode removed; 0265 same content, 0478 paper-only.', url: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-computer-science-0478/' },
      { claim: '0478 syllabus for exams in 2026 to 2028: two papers of 1 hour 45 minutes and 75 marks; pseudocode required, programming code earns no marks except in the 15-mark scenario question; lower bound generally 1; June and November series.', url: 'https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf' },
      { claim: '0478 syllabus for exams in 2029 to 2031: first examination 2029; Computer Systems and Logic, Algorithms and Programming; trace tables kept.', url: 'https://www.cambridgeinternational.org/Images/763431-2029-2031-syllabus.pdf' },
      { claim: '2,502 IB Diplomas in Peru in 2025; COAR students 47%.', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: 'Universidad de Lima: IB Diploma route within three years of obtaining the diploma.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'PUCP: Diploma de Bachillerato route, interviews until 28 January 2027.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' }
    ],
    rejectedClaims: [
      'Names of Lima international schools, or a count of international schools or their pupils: no official source (only commercial directories); not used, and no school is presented as a source of our students.',
      'IB course guide content: ibo.org refused our requests; not quoted.',
      'Subtracting the COAR share to state a number of non-COAR IB diplomas: refused; only the published 2,502 and 47% are printed.',
      'Admission advice or promised places: refused; universities decide.',
      'Use of any school\'s confidential tests or coursework: refused; mentors write original questions.',
      'Spanish-language teaching: none; all classes are in English.'
    ]
  }
};
