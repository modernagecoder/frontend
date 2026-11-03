'use strict';
// IGCSE Computer Science tutor in Germany (ag- English door, Germany cluster P2 row DE023).
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: pupils at British and international schools in Germany taking Cambridge IGCSE Computer Science 0478. The big
// news for families in 2026 is a change of language: up to the 2028 exams Paper 2 code is written in pseudocode (with
// one 15-mark exception), and from 2029 every programming answer is Python 3.10 or higher. The page shows one task in
// both forms.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/igcse-computer-science-tutor-germany/,
// fetched 3 Nov 2026 with curl, PDF text via PDFKit):
//  - Cambridge 0478 page (c0478.html) links the 2026-2028 syllabus, its update and the 2029-2031 syllabus.
//  - 697167-2026-2028-syllabus: "Exams are available in the June and November series." "Exams are also available in
//    the March series in India." "All candidates take two components. Candidates will be eligible for grades A* to G."
//    Paper 1 "1 hour 45 minutes" "Computer Systems 50%" "75 marks" Topics 1-6; Paper 2 "Algorithms, Programming and
//    Logic 50%" "75 marks" Topics 7-10; "No calculators are permitted"; AO1 40, AO2 40, AO3 20; "Knowledge of
//    programming language syntax is not examined"; "The final question in Paper 2 is a 15-mark unseen scenario
//    question"; "It is expected that candidates should spend 30 minutes answering this question"; "Solutions written in
//    programming code will not be awarded marks. The exception is the 15-mark scenario question"; "Python, Visual Basic
//    or Java"; "about 130 guided learning hours"; check digits "including international standard book numbers (ISBN)
//    and bar codes"; pseudocode keywords DECLARE, ARRAY, FOR ... NEXT, IF THEN ELSE ENDIF, MOD, OUTPUT, assignment ←.
//  - 711263 update: "The latest syllabus is version 6, published September 2026."
//  - 763431-2029-2031-syllabus: "Use this syllabus for exams in 2029, 2030 and 2031."; "We now require all candidates to
//    respond to programming questions using Python 3.10 or higher."; Paper 1 "Computer Systems and Logic" Topics 1-7;
//    expanded AI content ("types of machine learning", "neural network structure"); "quantum computing at a conceptual
//    level"; removed "calculate file sizes for: Bitmap images, Sound files"; "Changes to version 1 of the syllabus,
//    published September 2026".
//  - AGIS homepage (FACTS.md 249): member schools offering MYP or IGCSE give a qualification equivalent to the Mittlere
//    Reife. AGIS directory pages (FACTS.md 222, 231, 232, 234, 239, 240, 243, 244) list IGCSE at schools in Berlin,
//    Augsburg, Bremen, Ulm/Neu-Ulm, Westpfalz and the Frankfurt area; Augsburg's entry adds "(including German Mittlere
//    Reife recognition)".
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027.
// Our own code (scratchpad de/w/G6/igc_v1.py, igc_v2.py, python3 -I): check digit of 978030640615 is 7; valid True; one
// digit wrong False; neighbours 4 and 0 swapped False; 90 swaps tested, 10 missed: 05 16 27 38 49 50 61 72 83 94.
// Lesson family: write it in pseudocode first, then translate it line by line into Python.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const PSEUDO = [
  'DECLARE Digits : ARRAY[1:12] OF INTEGER',
  'DECLARE Total : INTEGER',
  'DECLARE Position : INTEGER',
  'DECLARE Check : INTEGER',
  '// Digits[1] to Digits[12] already hold 9 7 8 0 3 0 6 4 0 6 1 5',
  'Total ← 0',
  'FOR Position ← 1 TO 12',
  '  IF MOD(Position, 2) = 1',
  '    THEN',
  '      Total ← Total + Digits[Position]',
  '    ELSE',
  '      Total ← Total + Digits[Position] * 3',
  '  ENDIF',
  'NEXT Position',
  'Check ← MOD(10 - MOD(Total, 10), 10)',
  'OUTPUT "Check digit: ", Check'
].join('\n');

const V1 = [
  'def check_digit(first12):',
  '    total = 0',
  '    for position in range(12):',
  '        digit = int(first12[position])',
  '        if position % 2 == 0:',
  '            total = total + digit',
  '        else:',
  '            total = total + digit * 3',
  '    return (10 - total % 10) % 10',
  '',
  'def is_valid(isbn):',
  '    return check_digit(isbn[:12]) == int(isbn[12])',
  '',
  'print("Check digit:", check_digit("978030640615"))',
  'print("978-0-306-40615-7 valid?", is_valid("9780306406157"))',
  'print("One digit wrong:", is_valid("9780306406257"))',
  'print("Neighbours 4 and 0 swapped:", is_valid("9780306046157"))'
].join('\n');

const V2 = [
  'missed = []',
  'for a in range(10):',
  '    for b in range(10):',
  '        if a != b:',
  '            original = str(a) + str(b) + "0000000000"',
  '            swapped = str(b) + str(a) + "0000000000"',
  '            if check_digit(original) == check_digit(swapped):',
  '                missed.append(str(a) + str(b))',
  'print("Swaps tested:", 90)',
  'print("Swaps the check digit misses:", len(missed))',
  'print("Missed pairs:", " ".join(missed))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'IGCSE Computer Science tutor' },
  slug: 'igcse-computer-science-tutor-germany',
  code: 'igc',
  accent: '#6E4604',
  accentRationale: 'IGCSE Computer Science in Germany: a dark ochre #6E4604, close to the brown of an exam board folder, apart from the IB violet, the AI plum and the hub green; contrast on the paper #FBF8F2 about 6.7:1 and above 4.5 on all paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'IGCSE Computer Science tutor in Germany',
  title: 'IGCSE Computer Science Tutor in Germany (0478), in English',
  description: 'Cambridge IGCSE Computer Science 0478 tutoring in English for pupils in Germany: both papers, pseudocode to 2028, Python from 2029, and live practice online.',
  ogDescription: 'Live IGCSE Computer Science tutoring in English for pupils at schools in Germany, with the 0478 papers explained, the 2029 switch to Python, and one exam-style task in pseudocode and Python.',
  twitterDescription: 'IGCSE Computer Science 0478 help in English for pupils in Germany: papers, pseudocode, Python from 2029.',
  pageName: 'IGCSE Computer Science Tutor in Germany',
  webPageDescription: 'A guide for pupils in Germany taking Cambridge IGCSE Computer Science 0478: the two papers, the pseudocode rule up to 2028 and Python from 2029, what IGCSE means at international schools in Germany, an original check-digit task, and live tutoring in English.',
  courseDescription: 'Live online Cambridge IGCSE Computer Science 0478 tutoring in English for pupils at schools in Germany: computer systems theory, algorithms, pseudocode, Python, Boolean logic, databases and timed past-paper style practice, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'IGCSE Computer Science tutor',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#papers', label: 'Papers' },
    { href: '#switch', label: 'Python 2029' },
    { href: '#task', label: 'Task' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Cambridge IGCSE 0478 &middot; Ages 14 to 16',
  h1: 'IGCSE Computer Science tutor in Germany',
  lede: 'Cambridge IGCSE Computer Science is changing its language. A pupil in Germany who sits the 0478 papers in 2027 or 2028 writes most of Paper 2 in Cambridge pseudocode; one who sits them from 2029 answers every programming question in Python. This page sets out both papers from the syllabus itself, the year your child falls into, one exam-style task solved both ways, and how we tutor IGCSE pupils from Germany, live and in English.',
  secondaryCta: { href: '#switch', label: 'Which syllabus is my year?' },
  wa: 'Hello Modern Age Coders, my child takes IGCSE Computer Science at a school in Germany. Could we book a free first class in English?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; Paper 1 and Paper 2, pseudocode and Python',
  spec: [
    ['For', 'IGCSE pupils, usually 14 to 16'],
    ['Syllabus', 'Cambridge 0478'],
    ['Covers', 'Both papers, theory and code'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['German times', 'After school and Sundays'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders runs IGCSE Computer Science tutoring for pupils in Germany as live online classes in English on the Cambridge 0478 syllabus: Paper 1 on computer systems, Paper 2 on algorithms, programming and logic, Cambridge pseudocode for exams up to 2028 and Python for 2029 onwards, with timed practice. One regular mentor matches your child\'s pace and accent, in a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for IGCSE pupils in Germany',
    lede: 'The 0478 course itself, the IGCSE maths that sits beside it, and a Python course for pupils who will meet the 2029 syllabus or simply want to code more than the exam asks.',
    items: [
      { course: 'igcse-computer-science-0478-course', code: 'IGC / 01', title: 'IGCSE Computer Science 0478', note: 'The full syllabus: data representation, hardware, networks, algorithms, pseudocode, databases and logic, with timed paper practice.' },
      { course: 'igcse-mathematics-mastery', code: 'IGC / 02', title: 'IGCSE Maths', note: 'Core and Extended. Binary, percentages and ratios turn up in Computer Science too, without a calculator.' },
      { course: 'python-complete-masterclass-teens', code: 'IGC / 03', title: 'Python for teens', note: 'Python from the first line, for pupils on the 2029 syllabus and anyone who wants real programs, not only exam answers.' }
    ]
  },

  sections: [
    {
      id: 'papers',
      eyebrow: 'The exam',
      h2: 'What is in the two IGCSE Computer Science papers?',
      lede: 'Every candidate sits two written papers of equal weight. Neither allows a calculator, and both cover the full grade range from A* to G.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cambridge IGCSE Computer Science 0478, exams in 2026, 2027 and 2028', head: ['', 'Paper 1', 'Paper 2'], rows: [
          ['Title', 'Computer Systems', 'Algorithms, Programming and Logic'],
          ['Length', '1 hour 45 minutes', '1 hour 45 minutes'],
          ['Marks', '75', '75'],
          ['Share of the IGCSE', '50%', '50%'],
          ['Topics', '1 to 6: data representation, data transmission, hardware, software, the internet, automated and emerging technologies', '7 to 10: algorithm design, programming, databases, Boolean logic'],
          ['Calculator', 'Not allowed', 'Not allowed']
        ] },
        { kind: 'source', html: 'Source: Cambridge International, Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028, Assessment overview and Details of the assessment, read 3 November 2026. Cambridge lists version 6 of this syllabus, published September 2026, as the latest.' },
        { kind: 'two', mt: true,
          leftH3: 'What the marks reward',
          left: [
            'Cambridge weights its three assessment objectives at 40% for knowledge and understanding, 40% for applying it to a context, and 20% for evaluating and making reasoned judgements. Paper 1 leans on the first, Paper 2 on the second.',
            'For Paper 2 the syllabus says that knowledge of programming language syntax is not examined, and that the logic matters more than the syntax. A pupil who can reason about a loop scores; one who only memorised keywords does not.'
          ],
          rightH3: 'The 15-mark scenario',
          right: [
            'The last question of Paper 2 is an unseen scenario worth 15 marks, and Cambridge expects candidates to spend 30 minutes on it. It asks for a whole algorithm for a context the pupil has never seen.',
            'Up to 2028 it is the only question where real program code earns marks, in Python, Visual Basic or Java. Everywhere else, code must be written in pseudocode, and the syllabus says solutions in programming code will not be awarded marks.'
          ] }
      ]
    },
    {
      id: 'switch',
      tint: 'tint',
      eyebrow: 'A change of language',
      h2: 'Will IGCSE Computer Science use Python from 2029?',
      lede: 'Yes. Cambridge\'s syllabus for the 2029, 2030 and 2031 exams requires all candidates to answer programming questions in Python 3.10 or higher.',
      body: [
        { kind: 'table', numCols: [], caption: 'Which 0478 syllabus a pupil sits, by exam year', head: ['Exam year', 'Syllabus', 'Writing code in Paper 2'], rows: [
          ['2026, 2027, 2028', '2026 to 2028 syllabus', 'Cambridge pseudocode; Python, Visual Basic or Java only in the 15-mark scenario'],
          ['2029, 2030, 2031', '2029 to 2031 syllabus', 'Python 3.10 or higher for programming questions']
        ] },
        { kind: 'source', html: 'Sources: Cambridge 0478 syllabus for 2026 to 2028 (version 6) and syllabus for 2029 to 2031 (version 1, published September 2026), sections on Paper 2 and Changes to this syllabus. Read 3 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'What else changes in 2029',
          left: [
            'The new syllabus significantly expands artificial intelligence, including types of machine learning, neural network structure and questions of bias and fairness. It introduces quantum computing at a conceptual level, cloud storage models and a fuller treatment of cybersecurity.',
            'Paper 1 becomes Computer Systems and Logic, and Paper 2 becomes Algorithms and Programming.'
          ],
          rightH3: 'What goes',
          right: [
            'Cambridge removes the requirement to calculate file sizes for bitmap images and sound files, drops pebibyte and exbibyte storage calculations, and takes out explicit coverage of USB and legacy storage media.',
            'Both papers stay at 1 hour 45 minutes and 75 marks each.'
          ] },
        { kind: 'p', mt: true, html: 'For a family in Germany the practical question is simply the exam year. A pupil who starts a two-year IGCSE course in autumn 2026 sits in 2028 and should learn the pseudocode rules, while still writing Python, Java or Visual Basic for the scenario question. A pupil who starts in autumn 2027 is likely to sit in 2029 and will be examined in Python. The school decides the entry; ask it which series your child is entered for. We teach whichever applies, and we teach the logic underneath first, because it is the part that carries over.' }
      ]
    },
    {
      id: 'task',
      eyebrow: 'Our worked task',
      h2: 'How does one IGCSE task look in pseudocode and in Python?',
      lede: 'The syllabus asks pupils to describe how a check digit catches errors in data entry, and names ISBNs as an example. Here is our own task on exactly that, solved twice.',
      body: [
        { kind: 'p', html: '<strong>Our task.</strong> An ISBN-13 has twelve digits followed by a check digit. Multiply the digits in odd positions by 1 and those in even positions by 3, add them, and the check digit is whatever brings the total up to the next multiple of ten. Write an algorithm that works out the check digit for 978-0-306-40615.' },
        { kind: 'code', label: 'Version A: in Cambridge-style pseudocode (exams to 2028)', lang: 'Pseudocode', code: PSEUDO, note: 'Uses only constructs set out in the 2026 to 2028 syllabus: DECLARE, an ARRAY, FOR and NEXT, IF with THEN, ELSE and ENDIF, MOD and OUTPUT. Traced by hand, it outputs a check digit of 7.' },
        { kind: 'code', label: 'Version B: the same logic in Python (exams from 2029)', lang: 'Python', code: V1, note: 'It prints <code>Check digit: 7</code>, then <code>978-0-306-40615-7 valid? True</code>, <code>One digit wrong: False</code> and <code>Neighbours 4 and 0 swapped: False</code>.' },
        { kind: 'p', mt: true, html: 'Put the two versions side by side and the differences are small. Pseudocode counts positions from 1, Python from 0, so the test for "odd position" flips from <code>MOD(Position, 2) = 1</code> to <code>position % 2 == 0</code>. That one line is where pupils lose marks when they translate in a hurry, and it is exactly the kind of off-by-one error a trace table catches. The arithmetic, the loop and the final <code>MOD</code> are the same idea in both.' },
        { kind: 'code', label: 'Going further: which swapped neighbours does the check digit miss?', lang: 'Python', code: V2, note: 'Run after Version B. It prints <code>Swaps tested: 90</code>, <code>Swaps the check digit misses: 10</code> and <code>Missed pairs: 05 16 27 38 49 50 61 72 83 94</code>.' },
        { kind: 'p', mt: true, html: 'So the ISBN-13 check digit always catches a single wrong digit, but if two neighbouring digits that differ by exactly 5 are swapped, it cannot tell. A short brute-force program answered in one run what would take a page of algebra. A strong Paper 1 answer on check digits explains this limit in one sentence; that is the evaluation marks the syllabus weights at 20%.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Trace it.</strong> Draw a trace table for Version A with columns Position, Digits[Position] and Total, and check that Total ends at 93.',
          '<strong>Translate it.</strong> Write Version A as a pseudocode loop that checks a whole 13-digit ISBN and outputs VALID or INVALID.',
          '<strong>Explain it.</strong> In two sentences, say why a parity check and a check digit protect against different errors.'
        ] }
      ]
    },
    {
      id: 'germany',
      eyebrow: 'IGCSE in Germany',
      h2: 'Where do pupils in Germany take IGCSE, and what is it worth there?',
      lede: 'IGCSE is offered at a number of British and international schools in Germany, often before the IB Diploma or A levels.',
      body: [
        { kind: 'two',
          leftH3: 'Schools that list it',
          left: [
            'AGIS, which groups international schools across Germany, has a school directory that lists IGCSE among the qualifications at schools in Berlin, Augsburg, Bremen, Ulm/Neu-Ulm, the Westpfalz and the Frankfurt area. International School Augsburg describes its entry as IGCSE including German Mittlere Reife recognition.',
            'Many of these schools follow IGCSE with the IB Diploma; at least one in the Westpfalz lists Cambridge AS and A Levels.'
          ],
          rightH3: 'The German equivalent',
          right: [
            'AGIS says that its member schools which offer the IB Middle Years Programme or IGCSE make sure pupils receive a qualification equivalent to the Mittlere Reife, the German intermediate school-leaving certificate.',
            'How a particular result is recognised is decided by German authorities and the school, not by a tutor. We do not award grades or certificates of any kind.'
          ] },
        { kind: 'source', html: 'Sources: the AGIS website at agis-schools.org, its front page and the directory entries, read 2 November 2026. We name schools only as context from AGIS; we are not connected with AGIS, Cambridge International or any school, and no school is a source of our students.' },
        { kind: 'p', mt: true, html: 'The pupils we see from Germany often fall into one of three groups: those whose family has moved and who join an IGCSE course halfway, those who are strong at maths but have never written a program, and those who code well at home but lose marks because exam answers need a precise vocabulary. Each group needs a different first month, which is why the free first class starts with a short task rather than a sales talk.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When can an IGCSE pupil in Germany have classes?',
      lede: 'Most come straight after school or on a Sunday morning. Our mentors sit in India, whose clocks run 4 h 30 ahead of Germany until late March and 3 h 30 ahead after that.',
      body: [
        { kind: 'table', numCols: [], caption: 'Three sample slots on a German clock, and the same moment for a mentor in India', head: ['German time', 'Indian time before 28 March 2027', 'Indian time after 28 March 2027'], rows: [
          ['14:45', '19:15', '18:15'],
          ['17:15', '21:45', '20:45'],
          ['Sunday 10:30', '15:00', '14:00']
        ] },
        { kind: 'source', html: 'Legal time in Germany, set by the Einheitenzeitgesetz, is MEZ (UTC+1) through the winter and MESZ (UTC+2) through the summer; the clocks went back on 25 October 2026 and go forward on 28 March 2027. Indian time is UTC+5:30 without change. None of these slots is a fixed batch.' },
        { kind: 'p', mt: true, html: 'The free first class is booked in your own time zone. Cambridge holds the IGCSE exams in a June and a November series, so families often ask for an extra weekly class in the eight weeks before the series their child is entered for.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From binary to the 15-mark scenario',
    lede: 'Five steps we use to see where an IGCSE pupil stands and what comes next; they are ours, not Cambridge\'s.',
    table: { caption: 'Our five IGCSE steps', head: ['Step', 'Usually reached', 'By then a pupil is able to'], rows: [
      ['1. Data', 'Weeks 1 to 6', 'Convert between denary, binary and hexadecimal without a calculator'],
      ['2. Systems', 'Months 2 to 5', 'Explain hardware, networks and security in exact exam wording'],
      ['3. Algorithms', 'Months 3 to 8', 'Write and trace pseudocode with loops, arrays and conditions'],
      ['4. Code', 'Months 6 to 12', 'Turn a pseudocode algorithm into working Python and test it'],
      ['5. Scenario', 'Final term', 'Plan and write a 15-mark solution in about 30 minutes']
    ] },
    left: { h3: 'For pupils', ps: [
      'Find out your exam year first: it decides whether Paper 2 is pseudocode or Python.',
      'Every algorithm deserves a trace table before it deserves a computer.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask the school which series, June or November, your child is entered for.',
      'Practice without a calculator matters in both papers.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for IGCSE-age pupils in Germany',
    lede: 'All are taught live in English by one regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Before IGCSE', sub: 'Ages 11 to 14', courses: [
        { code: 'IGC / PRE / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik companion', blurb: 'For pupils in German classrooms, Klasse 5 to 10.' },
        { code: 'IGC / PRE / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive web pages and small browser games.' },
        { code: 'IGC / PRE / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics competitions', blurb: 'Puzzles that sharpen algorithmic thinking.' }
      ] },
      { num: 'II', h3: 'Alongside IGCSE', sub: 'Ages 14 to 16', courses: [
        { code: 'IGC / CO / 01', slug: 'mysql-mastery-for-teens', title: 'SQL for teens', blurb: 'The databases topic, with real queries.' },
        { code: 'IGC / CO / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'A second language for the scenario question.' },
        { code: 'IGC / CO / 03', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'For pupils on an English board instead.' }
      ] },
      { num: 'III', h3: 'After IGCSE', sub: 'Ages 16 to 19', courses: [
        { code: 'IGC / NEXT / 01', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'The common next step at international schools.' },
        { code: 'IGC / NEXT / 02', slug: 'cambridge-a-level-computer-science-9618-course', title: 'A Level Computer Science', blurb: 'Cambridge 9618, for British schools.' },
        { code: 'IGC / NEXT / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Ahead of the expanded AI topics from 2029.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What a week of live IGCSE lessons from Germany looks like',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Weekday classes from early afternoon German time.' },
      { time: 'Sunday', l: 'Morning classes that leave the afternoon free.' },
      { time: 'One to one', l: 'A slot set with the mentor and moved before exams.' }
    ],
    cells: [
      { h3: 'Trace, then type', p: 'Algorithms traced on paper before they are run.' },
      { h3: 'Exam vocabulary', p: 'Short answers in the words a mark scheme rewards.' },
      { h3: 'Patient English', p: 'Explanations repeated in other words when needed.' },
      { h3: 'Same mentor', p: 'One person who knows the pupil\'s gaps.' },
      { h3: 'Age rules kept', p: 'No adult-only AI tools for pupils under 18.' },
      { h3: 'Group or private', p: 'Fifteen to twenty pupils, or one to one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Some of the work our learners in other countries have made in class; there is more on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from our students and their parents, shown as they were posted.',

  fees: {
    h2: 'Fees for IGCSE Computer Science tutoring in Germany',
    lede: 'A month of classes, eight live sessions, has one fee. On this page it appears in euro, converted using the European Central Bank reference rate; the card is charged in US dollars, so the euro amount on your bank statement depends on your bank\'s own conversion.',
    free: ['A free first class', 'A short binary and pseudocode task', 'No card needed'],
    group: ['Fifteen to twenty pupils at a similar stage', 'One regular mentor', 'Two classes a week', 'Monthly, stop at any time'],
    one: ['One pupil, one mentor', 'Paced to the exam series', 'Extra classes before mocks']
  },

  faq: {
    eyebrow: 'IGCSE families in Germany ask',
    h2: 'Questions IGCSE parents in Germany send us',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and in English only, the language of the Cambridge papers. Your child\'s mentor keeps to their pace and accent and slows down whenever a new word appears.' },
      { q: 'Which syllabus does my child follow?', a: 'It depends on the exam year. Exams in 2026, 2027 and 2028 use the 2026 to 2028 syllabus; exams in 2029, 2030 and 2031 use the new syllabus that requires Python 3.10 or higher. The school knows which series your child is entered for.' },
      { q: 'Does Paper 2 accept Python?', a: 'Up to 2028, only in the 15-mark scenario question, where Python, Visual Basic or Java are allowed. Other code answers must be in pseudocode. From 2029, programming answers are in Python.' },
      { q: 'How long are the papers?', a: 'Both papers last 1 hour 45 minutes and carry 75 marks each, half of the IGCSE each. Calculators are not allowed in either.' },
      { q: 'Is IGCSE recognised in Germany?', a: 'AGIS says its member schools offering IGCSE make sure pupils receive a qualification equivalent to the Mittlere Reife. The recognition of an individual result is decided by the school and German authorities, not by us.' },
      { q: 'Are you connected with Cambridge or the school?', a: 'No. We are an independent online school. The school enters candidates and Cambridge sets and marks the exams.' },
      { q: 'Can a pupil join halfway through the course?', a: 'Yes. After the free first class the mentor maps what the school has covered and fills the gaps in order, starting with the topics the next school test needs.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. IGCSE pupils usually choose early evening or Sunday morning.' },
      { q: 'In which currency is the fee?', a: 'We display euro, converted with the ECB reference rate, while the payment runs in US dollars; your bank handles the conversion, so the statement can be a little different. The first class is free.' },
      { q: 'Will my child use AI tools in class?', a: 'Not adult-only ones. Several providers set 18 as their minimum age, and our classes for pupils under 18 never use those. Most IGCSE work needs nothing but Python and a pencil.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Pages that pair well with this one.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page, gathered in one place.' },
      { href: '/cambridge-igcse-computer-science-tuition', label: 'Cambridge IGCSE Computer Science tuition', p: 'The 0478 course for any country.' },
      { href: '/ib-computer-science-online-tuition', label: 'IB Computer Science online tuition', p: 'The next step for many IGCSE pupils.' },
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition', p: 'The maths course beside it.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages from the providers\' terms.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live lessons, explained.' }
    ]
  },

  start: {
    h2: 'Book a free first IGCSE Computer Science class',
    lede: 'The mentor asks for the exam year and the school\'s progress so far, sets a short task with binary and pseudocode, and proposes a route to the exam series, speaking English slowly enough for your child.',
    readFirst: 'If you would like to read on first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or <a class="ag-inline-link" href="/courses">the full course list</a>.',
    note: 'All lessons are live and online, in English, with mentors working from India. Messages on WhatsApp in English are answered fastest.',
    formNote: 'Free first class; we never ask for a card to book it.'
  },

  footer: {
    cols: [
      { h4: 'IGCSE and computing', links: [
        { href: '/cambridge-igcse-computer-science-tuition', label: 'IGCSE Computer Science tuition' },
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' }
      ] }
    ],
    bottomRight: 'Pseudocode first, Python next'
  },

  personalityCss: `
.ag-root.ag-igc .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-igc .ag-capsule { border-left-width: 3px; }
.ag-root.ag-igc .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-igc .ag-code-head b { text-transform: none; }
.ag-root.ag-igc .ag-table th { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Cambridge International, IGCSE Computer Science 0478 syllabus for 2026 to 2028 (version 6, September 2026) and for 2029 to 2031 (version 1, September 2026); AGIS homepage and school directory; Einheitenzeitgesetz. Read 2 and 3 November 2026.',
    localProject: 'Pseudocode first, then Python: an original ISBN-13 check-digit task solved in Cambridge-style pseudocode and in Python (check digit 7), plus a brute-force run showing the check digit misses 10 of 90 neighbour swaps (05 16 27 38 49 50 61 72 83 94). Lesson family: write it in pseudocode first, then translate it line by line into Python.',
    requiredMentions: ['Swaps the check digit misses: 10', 'Missed pairs: 05 16 27 38 49 50 61 72 83 94', 'Neighbours 4 and 0 swapped: False', 'Python 3.10 or higher', 'Cambridge expects candidates to spend 30 minutes on it', 'IGCSE including German Mittlere Reife recognition', 'check that Total ends at 93', 'Pseudocode first, Python next'],
    sources: [
      { claim: '0478 syllabus 2026 to 2028: papers, marks, timing, pseudocode rule, scenario question, series.', url: 'https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf' },
      { claim: '0478 syllabus 2029 to 2031: Python 3.10 or higher, AI and quantum content, removed file-size calculations.', url: 'https://www.cambridgeinternational.org/Images/763431-2029-2031-syllabus.pdf' },
      { claim: 'Latest 2026 to 2028 syllabus is version 6, September 2026.', url: 'https://www.cambridgeinternational.org/Images/711263-2026-2028-syllabus-update.pdf' },
      { claim: 'AGIS: IGCSE or MYP gives a qualification equivalent to the Mittlere Reife; schools listing IGCSE.', url: 'https://www.agis-schools.org/' }
    ],
    rejectedClaims: [
      'Any IGCSE grade outcomes or pass rates: not taken from any source, none given.',
      'Any count of IGCSE pupils in Germany: no official figure exists (MARKET.md 1.5).',
      'Exact 2027 exam dates: not read from a Cambridge timetable, so none are given.',
      'Any affiliation with Cambridge, AGIS or a school: none.',
      'German-language teaching: classes are in English only.'
    ]
  }
};
