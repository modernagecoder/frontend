'use strict';
// Coding for international school students in Berlin (ag- city school page, Germany cluster P5 row DE106).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: a teenager at an English-medium or bilingual school in Berlin whose computing exam is IGCSE, IB, AP or the
// Berlin Abitur. Spine: what AGIS lists for the Berlin international schools (context only, never a source of
// students), how the four computing exams differ in format (paper, screen, pseudocode, Java), the SESB bilingual
// network, then a data-validation project on Berlin's Christmas market open data, and Berlin times.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-for-international-school-students-berlin/):
//  - AGIS school directory (FACTS.md 221, 222, 223, 231, 241; facts-geo/places.tsv marks JFK as an AGIS partner):
//    BBIS "IB Middle Years Programme (MYP) International Baccalaureate (IB) IB Primary Years Programme (PYP)"; Berlin
//    British School "IB Primary Years Programme (PYP) IB Diploma Programme (DP) International General Certificate of
//    Secondary Education ( IGCSE) MSA (...)"; Berlin International School "Cambridge Examinations Board MSA (...) IB
//    Diploma Programme (DP)"; Berlin Metropolitan School "IB Primary Years Programme (PYP) International General
//    Certificate of Secondary Education ( IGCSE) International Baccalaureate (IB)"; John F. Kennedy School Berlin
//    "Advanced Placement (AP) American High School Diploma Deutsches Abitur". AGIS homepage and Wer wir sind (FACTS 247,
//    248, 249, 250): all members authorised IB schools; IB Diploma "dem deutschen Abitur gleichwertig" with prescribed
//    combinations; MYP or IGCSE "einen der Mittleren Reife gleichwertigen Abschluss"; "bis zu 65 verschiedenen Nationen"
//    and "Englisch als gemeinsame Sprache im Unterricht".
//  - KMK Eurydice dossier (FACTS 256; kmk-dossier txt lines 4289 to 4294): SESB "ein Netzwerk von bilingualen Zügen an 33
//    Schulen mit ca. 6.000 Schülerinnen und Schülern"; "Deutsch und je eine von neun weiteren Sprachen"; "von der ersten
//    Jahrgangsstufe bis zum Abitur".
//  - Cambridge IGCSE Computer Science 0478 syllabus 2026 to 2028 (697167-2026-2028-syllabus.txt, copied from the
//    igcse-computer-science-tutor-germany sources): "Paper 1 – Computer Systems"; "Paper 2 – Algorithms, Programming and
//    Logic"; "Written paper, 1 hour 45 minutes, 75 marks" (both); "pseudocode or their choice of one of the following
//    programming languages: Python, Visual Basic or Java"; "The final question in Paper 2 is a 15-mark unseen scenario
//    question".
//  - College Board AP Central (csa-exam.txt, dates.txt, start-times.txt, copied from ap-computer-science-tutor-germany):
//    "This is a fully digital exam."; "Bluebook testing app"; "Java Quick Reference"; "Wed, May 12, 2027 | Session 2";
//    "42 Questions | 1 Hour 30 Minutes | 55% of Exam Score"; "4 Questions | 1 Hour 30 Minutes | 45% of Exam Score";
//    "The UTC offsets used are for May 2027"; row "+02:00 9:00 a.m. 1:00 p.m.".
//  - GI Informatik-Monitor 2026/27, Berlin page (infmon-berlin): ITG "im Umfang von einer Wochenstunde" in 7 or 8;
//    Wahlpflichtfach Informatik "in der Regel zweistündig in den Jahrgangsstufen 9 und 10"; Qualifikationsphase
//    "dreistündig auf grundlegendem Anforderungsniveau (Grundkurs) als auch fünfstündig auf erhöhtem
//    Anforderungsniveau (Leistungskurs)"; "Die schriftlichen Abiturprüfungsaufgaben werden dezentral entwickelt.";
//    "Die Bearbeitung an einem Rechner ist in allen Aufgaben jedes Aufgabenvorschlags zugelassen."
//  - KMK holidays 2026/27 Berlin (FACTS 278). Destatis GV-ISys 31.12.2024: Berlin 3,685,265.
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Senatsverwaltung für Wirtschaft, Energie und Betriebe, "Berliner und Brandenburger Weihnachtsmärkte", via
//    Berlin Open Data / GovData (https://ckan.govdata.de/dataset/berliner-advents-und-weihnachtsmarkte-2017, record
//    saved), licence CC BY (dcat-ap.de cc-by). File all.json from berlin.de/sen/web/service/maerkte-feste/
//    weihnachtsmaerkte/index.php/index/all.json, 41,182 bytes, sha256 a5b24362...93cda2ba4, 48 records (season
//    2025/26), downloaded 3 November 2026.
// Our own code (scratchpad de/w/C1/py/cin_v1.py, cin_v2.py, python3 -I, run in the data folder):
//  cin_v1 prints "clean range 26", "one day only 17", "several dates in one cell 3", "no start date 1",
//  "ends before it starts 1".
//  cin_v2 prints "Rejected: Weihnachtsmarkt Königs Wusterhausen 12.12.2025 14.12.2012", "Clean ranges: 26",
//  "Shortest: 1 Longest: 124 Median: 35.0".
//  Exploration: the 124-day range is 28.11.2025 to 31.03.2026 (Winterquartier, Mitte); 5 records have bezirk
//  "Brandenburg".
// Lesson family: validate before you compute; sort every record into a named case, then reject what cannot be true.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json',
  'from datetime import datetime',
  '',
  'def parse(text):',
  '    return datetime.strptime(text.strip(), "%d.%m.%Y").date()',
  '',
  'markets = json.load(open("weihnachtsmaerkte.json", encoding="utf-8"))["index"]',
  'kinds = {}',
  'for m in markets:',
  '    start, end = m["von"], m["bis"]',
  '    if start == "":',
  '        kind = "no start date"',
  '    elif "\\n" in start:',
  '        kind = "several dates in one cell"',
  '    elif end == "":',
  '        kind = "one day only"',
  '    elif parse(end) < parse(start):',
  '        kind = "ends before it starts"',
  '    else:',
  '        kind = "clean range"',
  '    kinds[kind] = kinds.get(kind, 0) + 1',
  '',
  'for kind, n in sorted(kinds.items(), key=lambda kv: -kv[1]):',
  '    print(kind, n)'
].join('\n');

const V2 = [
  'import json',
  'import statistics',
  'from datetime import datetime',
  '',
  'def parse(text):',
  '    return datetime.strptime(text.strip(), "%d.%m.%Y").date()',
  '',
  'markets = json.load(open("weihnachtsmaerkte.json", encoding="utf-8"))["index"]',
  'spans = []',
  'for m in markets:',
  '    start, end = m["von"], m["bis"]',
  '    if start == "" or "\\n" in start or end == "":',
  '        continue',
  '    days = (parse(end) - parse(start)).days + 1',
  '    if days < 1:',
  '        print("Rejected:", m["name"], start, end)',
  '        continue',
  '    spans.append(days)',
  '',
  'spans.sort()',
  'print("Clean ranges:", len(spans))',
  'print("Shortest:", spans[0], "Longest:", spans[-1], "Median:", statistics.median(spans))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'school', label: 'Berlin: international school coding' },
  slug: 'coding-for-international-school-students-berlin',
  code: 'cin',
  accent: '#565635',
  accentRationale: 'Coding for international school students in Berlin: a dark olive #565635, sober like an exam room and apart from the brick and chestnut of the other Berlin pages; contrast 6.13 at its lowest on the paper tints and above 4.5 on all three',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding for international school students in Berlin',
  title: 'Coding for International School Students in Berlin, in English',
  description: 'Coding for international school students in Berlin: IGCSE, IB, AP and Abitur computing compared, live online classes in English, and a Berlin open data project.',
  ogDescription: 'Live online computer science tutoring in English for Berlin pupils at English-medium and bilingual schools: how IGCSE, IB, AP and the Berlin Abitur test programming, and a data-validation project on Berlin open data.',
  twitterDescription: 'Computer science for Berlin\'s international school pupils, live in English: four exam formats and a Berlin data project.',
  pageName: 'Coding for International School Students in Berlin',
  webPageDescription: 'A guide for teenagers at English-medium and bilingual schools in Berlin to computer science exams and help, built from the AGIS directory, Cambridge, College Board, KMK and Gesellschaft für Informatik sources, with an original Python validation project on Berlin\'s Christmas market open data.',
  courseDescription: 'Live online computer science tutoring in English for pupils at international and bilingual schools in Berlin: IGCSE Computer Science, IB Diploma Computer Science, AP Computer Science A and Abitur Informatik, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'International schools, Berlin',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#schools', label: 'Schools' },
    { href: '#exams', label: 'Exams' },
    { href: '#project', label: 'Project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Berlin &middot; International and bilingual schools &middot; Ages 13 to 19',
  h1: 'Coding for international school students in Berlin',
  lede: 'A computer science pupil in Berlin can be heading for four very different exams: Cambridge IGCSE, the IB Diploma, an American AP exam, or the Berlin Abitur. They test the same ideas, yet one is on paper in pseudocode, one is on a screen in Java, and one lets you use a computer for every task. This page sets out what the international schools in Berlin offer according to their association, how each exam treats programming, how we teach for all four in English, and a Python project on Berlin open data about the dullest and most useful skill in computing: checking input.',
  secondaryCta: { href: '#exams', label: 'Compare the four exams' },
  wa: 'Hello Modern Age Coders, I am at an international school in Berlin and want computer science help in English. Could I book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; IGCSE, IB, AP and Abitur computing in English',
  spec: [
    ['Ages', '13 to 19'],
    ['Exams', 'IGCSE, IB Diploma, AP CSA, Abitur'],
    ['Languages', 'Python, Java, pseudocode'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Teachers', 'Mentors based in India, live'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding for international school students in Berlin at Modern Age Coders is live online computer science tutoring in English for pupils of 13 to 19 at English-medium and bilingual schools: IGCSE Computer Science 0478, IB Diploma Computer Science, AP Computer Science A, and Informatik for the Berlin Abitur. One regular mentor matches your pace and accent, either one to one or in a group of fifteen to twenty.',

  picks: {
    eyebrow: 'Three exam courses',
    h2: 'Courses for the computing exams Berlin pupils sit',
    lede: 'Pick the one that matches your school\'s qualification. Each follows its own board\'s syllabus and our own practice tasks.',
    items: [
      { course: 'ib-diploma-computer-science-course', code: 'CIN / 01', title: 'IB Diploma Computer Science', note: 'Ages 16 to 19. The new IB guide with first assessment in 2027: programming, algorithms, data and the internal assessment, taught in English with a regular mentor.' },
      { course: 'igcse-computer-science-0478-course', code: 'CIN / 02', title: 'IGCSE Computer Science 0478', note: 'Ages 14 to 16. Both papers of the 2026 to 2028 syllabus, with pseudocode drilled until it is automatic and Python for the programming answers.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'CIN / 03', title: 'AP Computer Science A', note: 'Ages 15 to 18. Java from the first lesson, the four free-response question types, and practice for an exam taken on screen.' }
    ]
  },

  sections: [
    {
      id: 'schools',
      eyebrow: 'Berlin schools',
      h2: 'Which qualifications do Berlin\'s international schools list?',
      lede: 'The Arbeitsgemeinschaft der Internationalen Schulen in Deutschland, AGIS, keeps a directory of its schools. For Berlin it shows a mix of IB, Cambridge, American and German qualifications. We give this as context only; we have no link with any of these schools.',
      body: [
        { kind: 'table', numCols: [], caption: 'Qualifications listed for Berlin schools in the AGIS directory, and where computing can sit within them', head: ['School (AGIS listing)', 'Qualifications listed by AGIS', 'Computing exam that can sit in that route'], rows: [
          ['BBIS Berlin Brandenburg International School', 'IB PYP, IB MYP, International Baccalaureate', 'IB Diploma Computer Science'],
          ['Berlin British School', 'IB PYP, IB Diploma, IGCSE, MSA', 'IGCSE Computer Science; IB Diploma Computer Science'],
          ['Berlin International School', 'Cambridge Examinations Board, MSA, IB Diploma', 'Cambridge computing papers; IB Diploma Computer Science'],
          ['Berlin Metropolitan School', 'IB PYP, IGCSE, International Baccalaureate', 'IGCSE Computer Science; IB Diploma Computer Science'],
          ['John F. Kennedy School Berlin (AGIS partner)', 'Advanced Placement, American High School Diploma, Deutsches Abitur', 'AP Computer Science A; Abitur Informatik']
        ] },
        { kind: 'source', html: 'Source: AGIS school directory, one page per school, read on 2 November 2026. The third column is ours: it names the computing exam a route can include, not a claim that the school teaches it. Whether a school offers Computer Science in a given year is on the school\'s own pages, so ask the school.' },
        { kind: 'two', mt: true,
          leftH3: 'What AGIS says about its schools',
          left: [
            'AGIS describes all its member schools as authorised IB schools that offer at least one of the four IB programmes. It says they bring together children from up to 65 nations and use English as the common teaching language.',
            'It also explains how the German side reads these routes: the IB Diploma, with prescribed subject combinations, counts as equivalent to the German Abitur, and schools that offer the MYP or the IGCSE give pupils a qualification equivalent to the Mittlere Reife.'
          ],
          rightH3: 'Bilingual state schools too',
          right: [
            'Berlin also has the Staatliche Europa-Schule Berlin, SESB. The KMK\'s Eurydice dossier calls it a network of bilingual streams at 33 schools with about 6,000 pupils, taught in German and one of nine other languages from the first grade to the Abitur.',
            'A pupil in an English stream there, or at a German school who simply prefers English, sits the Berlin Abitur in Informatik if they take it. That route is in the last row of the exam table below.'
          ] }
      ]
    },
    {
      id: 'exams',
      eyebrow: 'Four exams compared',
      h2: 'How do IGCSE, IB, AP and the Berlin Abitur test programming?',
      lede: 'The ideas overlap almost completely: variables, loops, arrays, searching, sorting, classes, data. What differs is the medium, the language and how much the computer is allowed to help.',
      body: [
        { kind: 'table', numCols: [], caption: 'Programming in four computing exams open to Berlin pupils', head: ['Exam', 'How it is taken', 'Language for answers', 'Published structure'], rows: [
          ['IGCSE Computer Science 0478', 'Two written papers', 'Pseudocode, or Python, Visual Basic or Java', 'Paper 1 Computer Systems and Paper 2 Algorithms, Programming and Logic, each 1 hour 45 minutes and 75 marks'],
          ['AP Computer Science A', 'Fully digital, in the Bluebook app', 'Java, with the Java Quick Reference', '42 multiple-choice questions in 1 hour 30 minutes (55 percent) and 4 free-response questions in 1 hour 30 minutes (45 percent)'],
          ['Abitur Informatik, Berlin', 'Written; the teacher submits two task proposals and one is chosen', 'Set by the course', 'Grundkurs three hours a week, Leistungskurs five; a computer may be used in all tasks'],
          ['IB Diploma Computer Science', 'Set by the IB', 'Set by the IB guide', 'Not quoted here: ibo.org did not let us read it, so we give no figures']
        ] },
        { kind: 'source', html: 'Sources: Cambridge International, IGCSE Computer Science 0478 syllabus for 2026 to 2028; College Board, AP Computer Science A exam page and 2027 AP exam schedule; Gesellschaft für Informatik, Informatik-Monitor 2026/27, Berlin page. Read on 2 and 3 November 2026. The IB row is left without figures on purpose.' },
        { kind: 'two', mt: true,
          leftH3: 'Paper versus screen',
          left: [
            'Cambridge asks for algorithms written by hand, in pseudocode or a real language, and its syllabus says the last question of Paper 2 is a 15-mark unseen scenario. A pupil who has only ever typed code into an editor that catches errors finds this hard: there is no red underline on paper.',
            'The College Board does the opposite for AP Computer Science A: the exam is fully digital, taken in the Bluebook app, and the Java Quick Reference is built in. The four free-response questions are fixed in type: methods and control structures, class design, data analysis with an ArrayList, and a 2D array.'
          ],
          rightH3: 'The Berlin Abitur',
          right: [
            'The Informatik-Monitor says Berlin\'s written Abitur tasks in Informatik are developed decentrally: the teacher submits two proposals for a course and one is chosen. Working on a computer is allowed in every task, limited to the parts where it is needed for the subject.',
            'Before the Oberstufe, pupils at Berlin\'s German schools meet computing in the ITG, the Informationstechnischer Grundkurs of one weekly hour, placed in grade 7 or grade 8; after that Informatik is normally an elective of two hours a week across grades 9 and 10. An international school pupil who moves into a Berlin Oberstufe may therefore meet classmates with two years of school Informatik behind them, or none.'
          ] },
        { kind: 'p', mt: true, html: 'Dates matter too. The College Board lists AP Computer Science A on Wednesday 12 May 2027 in Session 2, and its start-time table gives 1:00 p.m. local time for Session 2 at UTC+2, which is Berlin\'s offset in May. Check your own school\'s time with the College Board lookup. Cambridge and the IB publish their own timetables, and your school\'s exams officer has the final version.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Why learn computer science in English in Berlin?',
      lede: 'For an international school pupil the answer is simple: your exam is in English. For a pupil at a German school, it is the language the subject is written in anyway.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English only', p: 'Every class is live, and every class is in English; German-language lessons are not something we run. Mentors adjust their speed and accent to the pupil, and they rephrase until an idea lands.' },
          { h3: 'Exam words, exactly', p: 'Each board phrases its questions in its own command words. We practise with the words in your syllabus, so that a question means the same thing to you as it does to the person marking it.' },
          { h3: 'Same mentor, every week', p: 'One mentor follows the pupil from the first class to the exam and knows which topics still wobble. Mentors are based in India and teach over live video with a shared editor.' }
        ] },
        { kind: 'p', mt: true, html: 'We do not ask pupils to copy answers, from us or from an AI tool. A pupil who can explain why a loop stops, and test that claim, can answer a question they have never seen. For under-18s we never recommend adult-only AI accounts; our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> lists what each tool\'s own terms allow.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Berlin data project',
      h2: 'What does Berlin\'s Christmas market data teach about validating input?',
      lede: 'Every computing syllabus asks pupils to validate data. Real data makes the point far better than a textbook, and the Senate\'s list of Christmas markets is real, messy and open.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Senate department for economics publishes Berliner und Brandenburger Weihnachtsmärkte as open data under CC BY. We downloaded the JSON version on 3 November 2026: 48 markets for the 2025/26 season, each with a district, a start date (von), an end date (bis) and free-text opening hours.',
            'The dates are written the German way, day.month.year, as text. A program has to turn that text into a date before it can compare or subtract anything, and that is where the trouble starts.'
          ],
          rightH3: 'The question',
          right: [
            'How long does a typical market run? It sounds like one subtraction per market. Try it on all 48 and the program crashes, because some cells hold no date, some hold several dates on separate lines, and one says a market ends in 2012.',
            'So Version 1 does what an examiner wants to see: before computing anything, it sorts every record into a named case. Only the clean cases go forward.'
          ] },
        { kind: 'code', label: 'Version 1: classify every record first', lang: 'Python', code: V1, note: 'It prints <code>clean range 26</code>, <code>one day only 17</code>, <code>several dates in one cell 3</code>, <code>no start date 1</code> and <code>ends before it starts 1</code>.' },
        { kind: 'p', mt: true, html: 'Only 26 of 48 records are clean ranges. Seventeen are single-day markets with no end date at all, which is not an error but a different kind of record. Three put several weekend dates into one cell, separated by line breaks. One has no start date in its own field; its dates are hidden in the opening-hours text. And one ends before it starts.' },
        { kind: 'code', label: 'Version 2: reject what cannot be true, then measure', lang: 'Python', code: V2, note: 'It prints <code>Rejected: Weihnachtsmarkt Königs Wusterhausen 12.12.2025 14.12.2012</code>, <code>Clean ranges: 26</code> and <code>Shortest: 1 Longest: 124 Median: 35.0</code>.' },
        { kind: 'p', html: 'The rejected record starts on 12 December 2025 and ends on 14 December 2012, which looks like a typing slip, but a program should not guess. It reports the record and leaves it out. The longest clean range is 124 days, a winter market in Mitte from 28 November 2025 to 31 March 2026, which is why we report the median, 35 days, rather than the mean: one long run would pull an average up.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'The 48 records of the 2025/26 season by validation case (our calculation)', head: ['Case', 'Records', 'What a careful program does'], rows: [
          ['Clean range', '26', 'Parse both dates and measure'],
          ['One day only', '17', 'Treat as a one-day range, or count separately'],
          ['Several dates in one cell', '3', 'Split on line breaks, then pair the dates'],
          ['No start date', '1', 'Flag for a human; do not read free text blindly'],
          ['Ends before it starts', '1', 'Reject and report']
        ] },
        { kind: 'source', html: 'Data: Senatsverwaltung für Wirtschaft, Energie und Betriebe, Berliner und Brandenburger Weihnachtsmärkte, via Berlin Open Data and GovData, licence CC BY; downloaded 3 November 2026. The list includes five markets in Brandenburg. Every count and duration is our own.' },
        { kind: 'ol', mt: true, items: [
          '<strong>IGCSE.</strong> Write the classification of Version 1 as pseudocode in the Cambridge style, with a CASE statement, then trace it by hand for three records.',
          '<strong>AP Computer Science A.</strong> Write a Java class Market with a constructor and a method durationDays() that throws an exception when the end is before the start. Test it with the 2012 record.',
          '<strong>IB.</strong> Extend Version 2 so that the three multi-date cells are split and paired, and say how many single weekends that adds.',
          '<strong>Abitur.</strong> Draw a state diagram for a date parser that reads characters one by one and accepts only dd.mm.yyyy.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What class times fit a Berlin school day?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. International school days often end later, so evening slots are popular.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Berlin times and the mentor\'s time in India', head: ['Berlin time', 'India time to 28 March 2027', 'India time from 28 March 2027'], rows: [
          ['17:25', '21:55', '20:55'],
          ['18:20', '22:50', '21:50'],
          ['Saturday 15:10', '19:40', '18:40'],
          ['Sunday 11:15', '15:45', '14:45']
        ] },
        { kind: 'source', html: 'German legal time is Central European Time, UTC+1, with summer time, UTC+2, under the Einheitenzeitgesetz; summer time ended on 25 October 2026 and returns on 28 March 2027. India is on UTC+5:30 all year: 4 hours 30 minutes ahead of Berlin in winter, 3 hours 30 minutes in summer. Times shown are examples only.' },
        { kind: 'p', mt: true, html: 'International schools set their own term dates, which may not match the Berlin state school holidays. For reference, the KMK table gives Berlin\'s state school Christmas break as 23 December 2026 to 2 January 2027 and the Osterferien as 22 March to 2 April 2027. Tell your mentor your own school\'s calendar and the plan follows it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From first program to exam-ready',
    lede: 'Our own stages, used to place a pupil whatever their board.',
    table: { caption: 'Computer science milestones for ages 13 to 19 (ours)', head: ['Stage', 'Typical age', 'The pupil can'], rows: [
      ['1. Write and trace', '13 to 14', 'Write short programs and trace them by hand, line by line'],
      ['2. Structure data', '14 to 15', 'Use lists, dictionaries and arrays, and choose between them'],
      ['3. Validate and test', '15 to 16', 'Check every input, name the cases and write tests that fail'],
      ['4. Design classes', '16 to 17', 'Model a problem with classes and explain the design'],
      ['5. Exam fluency', '16 to 19', 'Answer unseen questions in the board\'s own words and format']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the project above. Pupils who learn to classify input before using it lose far fewer marks on unseen questions.',
      'We report progress as things your child can now do alone, with an example.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Before you compute, ask what could be wrong with the input. Then write it down as a case.',
      'If a record cannot be true, report it. Do not quietly fix it.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Berlin pupils',
    lede: 'All live, in English, with one regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Programming depth', sub: 'Ages 13 to 18', courses: [
        { code: 'CIN / CODE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first script to real projects, the language most boards accept.' },
        { code: 'CIN / CODE / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'The language of AP and many Abitur courses, from scratch.' },
        { code: 'CIN / CODE / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Logic, data structures and algorithms for strong pupils.' }
      ] },
      { num: 'II', h3: 'German school routes', sub: 'Ages 10 to 19', courses: [
        { code: 'CIN / DE / 01', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'Oberstufe Informatik in Java or Python.' },
        { code: 'CIN / DE / 02', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'School Informatik from Klasse 5 to 10, in English.' },
        { code: 'CIN / DE / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'German informatics contests', blurb: 'Biber, BwInf and BWKI, with our own problems.' }
      ] },
      { num: 'III', h3: 'Beyond the syllabus', sub: 'Ages 13 to 18', courses: [
        { code: 'CIN / PLUS / 01', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP Computer Science Principles', blurb: 'The Create task and the end-of-course exam.' },
        { code: 'CIN / PLUS / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Clean, chart and model real data in Python.' },
        { code: 'CIN / PLUS / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'How models learn, built from the code up.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for an international school pupil in Berlin',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Two live classes a week, an hour each, in a shared editor with the same mentor.',
    slots: [
      { time: 'Evenings', l: 'After a long international school day, from about 17:00 in Berlin.' },
      { time: 'Weekends', l: 'Saturday afternoons and Sunday mornings for longer practice.' },
      { time: 'One to one', l: 'A time agreed with the mentor, moved around mock exams.' }
    ],
    cells: [
      { h3: 'Board by board', p: 'IGCSE, IB, AP or Abitur, never a mixture.' },
      { h3: 'Code on paper too', p: 'Handwritten tracing for the boards that need it.' },
      { h3: 'Our own questions', p: 'Practice tasks are written by us, not copied papers.' },
      { h3: 'Explain, then type', p: 'Pupils say why the code works before they run it.' },
      { h3: 'Parent updates', p: 'Short notes on progress and next steps.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty pupils, or you and a mentor.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Teenagers who learn properly build real things. A few of their projects are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'What parents and students wrote on Google, unedited.',

  fees: {
    h2: 'Fees for Berlin pupils',
    lede: 'A monthly fee covers eight live classes. The page shows it in euro, worked out at the European Central Bank reference rate; the payment is processed in US dollars, so your bank converts it and the final euro figure can be slightly different.',
    free: ['A free first class', 'A short programming task at your level', 'No card needed'],
    group: ['Fifteen to twenty pupils on the same board', 'One regular mentor', 'Two classes a week', 'Monthly, stop any month'],
    one: ['You and one mentor', 'Your board, your mock dates', 'Times around your school day']
  },

  faq: {
    eyebrow: 'Berlin pupils and parents ask',
    h2: 'Coding for international school students in Berlin: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and taught in English only, by mentors who match your pace and accent. That suits IGCSE, IB and AP pupils, whose exams are in English, and it works for Abitur Informatik too, because the programming languages themselves are English.' },
      { q: 'Do you teach IGCSE Computer Science 0478?', a: 'Yes. Our course follows the 2026 to 2028 syllabus: Paper 1 Computer Systems and Paper 2 Algorithms, Programming and Logic, each 1 hour 45 minutes and 75 marks. We drill pseudocode in the Cambridge style and use Python for the programming answers.' },
      { q: 'When is the AP Computer Science A exam in 2027?', a: 'The College Board lists it on Wednesday 12 May 2027, in Session 2. Its start-time table gives 1:00 p.m. local time for Session 2 at UTC+2, Berlin\'s offset in May, but your school confirms the exact time.' },
      { q: 'Is the AP Computer Science A exam on paper?', a: 'No. The College Board describes it as fully digital, taken in the Bluebook app, with 42 multiple-choice questions and 4 free-response questions, each part lasting 1 hour 30 minutes. The Java Quick Reference is built into the app.' },
      { q: 'Can you help with IB Diploma Computer Science?', a: 'Yes. Our course follows the new IB guide with first assessment in 2027, including the internal assessment. We do not quote IB exam figures on this page because we could not read them on ibo.org; your IB coordinator has the official details.' },
      { q: 'Which international schools in Berlin do your students attend?', a: 'We do not name schools as sources of students. The schools on this page are listed only because the AGIS directory shows their qualifications. We are not connected with AGIS or with any school.' },
      { q: 'Can I use a computer in the Berlin Abitur in Informatik?', a: 'According to the Informatik-Monitor 2026/27, working on a computer is allowed in all tasks of the written Berlin Abitur in Informatik, limited to where the subject needs it. The tasks are set decentrally: teachers submit two proposals and one is chosen.' },
      { q: 'What times can I book from Berlin?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Evenings are popular: 18:20 in Berlin is 22:50 for the mentor in India in winter.' },
      { q: 'What does it cost?', a: 'The fee is monthly for eight live classes and appears in euro at the European Central Bank reference rate. The charge goes through in US dollars and your bank converts it, so your statement may differ a little. The first class is free.' },
      { q: 'Will you do my coursework or internal assessment for me?', a: 'No. We teach you to plan, write and test your own work, and we explain the criteria in plain English. The work you hand in has to be your own, and we keep it that way.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on computer science for pupils in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for families in Germany.' },
      { href: '/coding-for-international-school-students-germany', label: 'International school students, Germany', p: 'The national picture across all AGIS schools.' },
      { href: '/igcse-computer-science-tutor-germany', label: 'IGCSE Computer Science tutor', p: 'Both 0478 papers in detail.' },
      { href: '/ib-computer-science-tutor-germany', label: 'IB Computer Science tutor', p: 'How the German side reads the IB.' },
      { href: '/ap-computer-science-tutor-germany', label: 'AP Computer Science tutor', p: 'CSA and CSP from Germany.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science', p: 'Informatik in the Oberstufe, in English.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your board and your next deadline. In the first class the mentor sets one short programming task at your level, watches how you approach it, and suggests the course and format that fit.',
    readFirst: 'To read first, the <a class="ag-inline-link" href="/courses/igcse-computer-science-0478-course">IGCSE 0478 syllabus</a> and the <a class="ag-inline-link" href="/courses/ib-diploma-computer-science-course">IB Computer Science course</a> list every topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows a live class.',
    note: 'Classes are live online with mentors in India, in English only. WhatsApp reaches us fastest, in English.',
    formNote: 'Free, without a card or any commitment.'
  },

  footer: {
    cols: [
      { h4: 'Exam courses', links: [
        { href: '/courses/igcse-computer-science-0478-course', label: 'IGCSE Computer Science' },
        { href: '/courses/ib-diploma-computer-science-course', label: 'IB Computer Science' },
        { href: '/courses/ap-computer-science-a-java-exam-prep-course', label: 'AP Computer Science A' },
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-for-international-school-students-germany', label: 'International schools, Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids, Berlin' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Classify the input before you trust it'
  },

  personalityCss: `
.ag-root.ag-cin .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-cin .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-cin .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-cin .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cin .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'AGIS school directory (Berlin schools), AGIS homepage and Wer wir sind; KMK Eurydice dossier (SESB); Cambridge International IGCSE Computer Science 0478 syllabus 2026 to 2028; College Board AP Computer Science A exam page, 2027 schedule and start times; Gesellschaft für Informatik, Informatik-Monitor 2026/27, Berlin page; KMK holidays 2026/27. Data: Senatsverwaltung für Wirtschaft, Energie und Betriebe, Berliner und Brandenburger Weihnachtsmärkte, CC BY.',
    localProject: 'Christmas market validation: an original Python project on the Senate\'s 2025/26 Christmas market list in which every one of 48 records is first sorted into a named case (26 clean ranges, 17 one-day, 3 multi-date cells, 1 without a start, 1 ending before it starts), the 2012 end date is rejected and reported, and the median run (35 days) is used because one range lasts 124 days; plus board-specific follow-up tasks. Lesson family: validate and classify input before computing.',
    requiredMentions: ['weihnachtsmaerkte.json', 'clean range 26', 'ends before it starts 1', 'Rejected: Weihnachtsmarkt Königs Wusterhausen 12.12.2025 14.12.2012', 'Shortest: 1 Longest: 124 Median: 35.0', 'Wednesday 12 May 2027 in Session 2', '33 schools with about 6,000 pupils', 'Classify the input before you trust it'],
    sources: [
      { claim: 'Qualifications listed for Berlin schools.', url: 'https://www.agis-schools.org/school/berlin-british-school' },
      { claim: 'AGIS members authorised IB schools; English; equivalences.', url: 'https://www.agis-schools.org/' },
      { claim: 'SESB network: 33 schools, about 6,000 pupils.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Eurydice/DE/dossier_de_ebook.pdf' },
      { claim: 'IGCSE 0478 paper structure and languages.', url: 'https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf' },
      { claim: 'AP CSA format and 2027 date.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam' },
      { claim: 'Berlin Informatik: ITG, elective, Abitur tasks and computer use.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/berlin' },
      { claim: 'Christmas market data and CC BY licence.', url: 'https://ckan.govdata.de/dataset/berliner-advents-und-weihnachtsmarkte-2017' }
    ],
    rejectedClaims: [
      'Naming any school as a source of our students: refused; schools appear only as AGIS-sourced context.',
      'That a listed school teaches Computer Science in a given year: not claimed; the table names routes only.',
      'IB exam figures: not quoted, because ibo.org could not be read.',
      'Correcting the 2012 end date to 2025: not done; the program reports it instead.',
      'Any connection with AGIS, a school, the College Board, Cambridge, the IB or the Senate: none.'
    ]
  }
};
