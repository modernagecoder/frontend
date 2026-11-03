'use strict';
// Coding for international school students in Munich (ag- city school door, Germany cluster P5 row DE114, alloc code cmu,
// hubGroup school). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: pupils at the international schools around Munich (context from AGIS directory pages only, never as a source
// of students) who take IB or IGCSE computing, or who may switch to a Bavarian Gymnasium; what the AGIS says the
// qualifications are worth in Germany; how Bavarian Informatik differs; and an IB-style data project on a federal traffic
// counter on Munich's motorway ring where the lesson is a two-dimensional array (a weekday by hour table).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-for-international-school-students-munich/
// and facts-school/src/, fetched 2 and 3 Nov 2026 with curl -sL -A "Mozilla/5.0"):
//  - AGIS homepage (facts-school/src/agis/64e5459f.txt; FACTS.md 245, 248, 249, 250): "unserer 23 Mitgliedsschulen";
//    "Das an den Schulen angebotene IB Diploma (International Baccalaureate) ist (mit vorgegebenen Fächerkombinationen)
//    dem deutschen Abitur gleichwertig und berechtigt weltweit zum Hochschulzugang."; MYP or IGCSE "einen der Mittleren
//    Reife gleichwertigen Abschluss"; "Sie führen Kinder aus bis zu 65 verschiedenen Nationen zusammen und nutzen
//    Englisch als gemeinsame Sprache im Unterricht."
//  - AGIS Wer wir sind (FACTS.md 247): "Alle Mitgliedsschulen der AGIS sind autorisierte IB-Schulen".
//  - AGIS school page Munich International School (agis-munich-international-school/5d5e3187.txt): "Schüler 1314";
//    "Schloss Buchhof 82319 Starnberg"; "IB Primary Years Programme (PYP) IB Middle Years Programme (MYP) International
//    Baccalaureate (IB)".
//  - AGIS school page Bavarian International School: "Schüler 1265"; "Hauptstrasse 1 85778 Haimhausen"; PYP, MYP, DP, CP.
//  - AGIS school page International School Augsburg (FACTS.md 232): "IB Diploma (including German Abitur recognition)
//    International General Certificate of Secondary Education (IGCSE) (including German Mittlere Reife recognition)".
//  - GI Informatik-Monitor 2026/27, Bayern: grade 11 "in allen Ausbildungsrichtungen verpflichtend zweistündig
//    Informatikunterricht"; "Die schriftlichen Abiturprüfungsaufgaben im Fach Informatik werden zentral gestellt. Große
//    Teile des schriftlichen Informatikabiturs beinhalten Programmieraufgaben auf Papier, jedoch keine praktischen
//    Anteile am Rechner."; Q-phase "dreistündig auf grundlegendem Anforderungsniveau oder fünfstündig auf erhöhtem
//    Anforderungsniveau" (NTG).
//  - KMK Ferien 2026/2027, Bayern row. Destatis GV-ISys 31.12.2024: München 1,505,005. EinhZeitG; summer time 2027.
//  - Data: Bundesanstalt für Straßenwesen (BASt), automatic counting stations on the A99, year 2023, file zst9220.zip
//    (zst9220_2023.csv, 8,760 rows, Zst 9220, Land 09, Strnum 99), listed on GovData as "Zählstelle AK München-West (N)",
//    dataset automatische-zahlstellen-auf-der-autobahn-a99-2023, licence CC BY 4.0 (dcat-ap.de cc-by/4.0), notes:
//    "Dieser Datensatz enthält alle Werte sämtlicher Zählstellen an der Autobahn A99 im Jahr 2023." BASt explanation
//    pages for abbreviations returned 404 on 3 Nov 2026, so the page does not interpret the flag letters.
// Our own calculations (scratchpad de/w/C2/cmu, python3 -I): grid.py prints "Hours left out (flagged): 171" and "Busiest
// slot on average: Wed, hour 18, 4858 vehicles"; rows.py prints "hour 08: [4558, 4720, 4830, 4617, 4135, 1739, 809]",
// "hour 18: [4654, 4701, 4858, 4767, 4482, 3577, 4026]" and "hour 08, Mon to Fri vs Sun: 5.7 times as many". Without
// the flag filter the peak is Wed hour 18 with 4866. Flag letters seen: s (most), z (2 hours); 103 flagged hours in March.
// All 8,760 hours as published sum to 22,760,004 vehicles, about 62,356 a day.
// Lesson family: two-dimensional arrays, aggregating rows into a 7 by 24 table.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const GRID = [
  'import csv',
  '',
  'DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]',
  'total = [[0] * 24 for _ in range(7)]',
  'count = [[0] * 24 for _ in range(7)]',
  'flagged = 0',
  '',
  'with open("a99_west_2023.csv") as hours:',
  '    for rec in csv.DictReader(hours):',
  '        if rec["flag_n"] != "-" or rec["flag_s"] != "-":',
  '            flagged += 1',
  '            continue',
  '        d = int(rec["weekday"]) - 1',
  '        h = int(rec["hour"]) - 1',
  '        total[d][h] += int(rec["north"]) + int(rec["south"])',
  '        count[d][h] += 1',
  '',
  'peak = (0, 0, 0)',
  'for d in range(7):',
  '    for h in range(24):',
  '        avg = total[d][h] / count[d][h]',
  '        if avg > peak[0]:',
  '            peak = (avg, d, h)',
  '',
  'print("Hours left out (flagged):", flagged)',
  'print(f"Busiest slot on average: {DAYS[peak[1]]}, hour {peak[2] + 1:02d}, {peak[0]:.0f} vehicles")'
].join('\n');

const ROWS = [
  'for slot in (8, 18):',
  '    line = [round(total[d][slot - 1] / count[d][slot - 1]) for d in range(7)]',
  '    print(f"hour {slot:02d}:", line)',
  '',
  'weekday = sum(total[d][7] for d in range(5)) / sum(count[d][7] for d in range(5))',
  'sunday = total[6][7] / count[6][7]',
  'print(f"hour 08, Mon to Fri vs Sun: {weekday / sunday:.1f} times as many")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'school', label: 'Munich: international school pupils' },
  slug: 'coding-for-international-school-students-munich',
  code: 'cmu',
  accent: '#753000',
  accentRationale: 'Coding for international school students in Munich: a burnt umber #753000, the brown of an old Munich roof tile and a well-used school notebook, unlike the blue and aubergine of the other Munich pages; it clears 4.5:1 on the paper and all three tints (alloc minimum 7.82)',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding for international school students in Munich',
  title: 'Coding for International School Students in Munich',
  description: 'Coding for international school students in Munich: IB and IGCSE computer science live online in English, what AGIS says on the IB, and a Munich traffic project.',
  ogDescription: 'Live online computer science in English for pupils at the international schools around Munich: IB DP and IGCSE support, what changes if your child moves to a Bavarian Gymnasium, and a two-dimensional array project on a motorway counter at München-West.',
  twitterDescription: 'Computer science for Munich international school pupils, live in English: IB, IGCSE and a Munich traffic data project.',
  pageName: 'Coding for International School Students in Munich',
  webPageDescription: 'A guide for families at Munich-area international schools on computer science support: context from the AGIS directory, the Bavarian Informatik rules for pupils who switch systems, and an original Python project on 2023 hourly counts from the BASt station at Autobahnkreuz München-West.',
  courseDescription: 'Live online computer science in English for pupils at international schools around Munich: IB Diploma Computer Science, IGCSE Computer Science and the programming foundations for MYP years, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'International pupils, Munich',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#schools', label: 'Schools' },
    { href: '#grid', label: 'Grid project' },
    { href: '#switching', label: 'Switching' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Munich &middot; International schools &middot; IB and IGCSE computing',
  h1: 'Coding for international school students in Munich',
  lede: 'Around Munich, several large international schools teach the IB in English, and their pupils often want more programming than a single subject gives them, or help with the computing they already take. This page sets out what the schools\' own association says about these qualifications in Germany, what changes for a pupil who moves to a Bavarian Gymnasium, and a project on real Munich traffic data that teaches one of the most useful ideas in computer science: the two-dimensional array.',
  secondaryCta: { href: '#grid', label: 'See the traffic project' },
  wa: 'Hello Modern Age Coders, my child attends an international school near Munich and would like computer science help in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; IB and IGCSE computing, in English',
  spec: [
    ['For', 'International school pupils, about 11 to 18'],
    ['Programmes', 'IB MYP and DP, IGCSE'],
    ['Languages', 'Python, Java, pseudocode'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Munich times', 'Evenings and Sundays, flexible'],
    ['Trial', 'A free first class, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding to international school students in Munich live online in English: IB Diploma and IGCSE Computer Science, plus the Python and Java foundations MYP pupils need first. One regular mentor matches the pupil\'s pace and accent and works from their own school\'s next assessment. Lessons run in a group of fifteen to twenty or one to one, in the Munich evening or on Sundays.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three computing courses for Munich international school pupils',
    lede: 'One for each stage: the IB Diploma years, the IGCSE years, and the coding foundations that make both easier.',
    items: [
      { course: 'ib-diploma-computer-science-course', code: 'CMU / 01', title: 'IB DP Computer Science', note: 'For the two Diploma years, SL and HL: programming, algorithms, data and the written work, taught in English by one mentor who follows your child through to the exams.' },
      { course: 'igcse-computer-science-0478-course', code: 'CMU / 02', title: 'IGCSE Computer Science', note: 'For pupils on a Cambridge route: theory and programming papers, with practice in the pseudocode and Python styles the course expects.' },
      { course: 'python-complete-masterclass-teens', code: 'CMU / 03', title: 'Python for Teens', note: 'For MYP-age pupils who want real programming before the Diploma: from first scripts to files, functions and small data projects like the one below.' }
    ]
  },

  sections: [
    {
      id: 'schools',
      eyebrow: 'Context',
      h2: 'Which international schools are there around Munich, and what do they teach?',
      lede: 'We name schools here only as context, from the directory of AGIS, the association of international schools in Germany, and we are not connected to any of them.',
      body: [
        { kind: 'table', numCols: [2], caption: 'AGIS member schools in and near Munich, as listed in the AGIS school directory', head: ['School', 'Location', 'Pupils listed', 'Programmes listed'], rows: [
          ['Munich International School', 'Starnberg, Schloss Buchhof', '1,314', 'IB PYP, IB MYP, IB Diploma'],
          ['Bavarian International School', 'Haimhausen', '1,265', 'IB PYP, MYP, DP and CP'],
          ['International School Augsburg', 'Gersthofen, near Augsburg', '380', 'IB Diploma with Abitur recognition, IGCSE with Mittlere Reife recognition']
        ] },
        { kind: 'source', html: 'Source: AGIS e.V., school directory pages for each school (pupil figures as shown on the AGIS pages), read 2 and 3 November 2026. Munich itself has 1,505,005 inhabitants (Destatis, 31 December 2024). Other international and bilingual schools in Munich are not AGIS members and are not listed here.' },
        { kind: 'two', mt: true,
          leftH3: 'What AGIS says about the qualifications',
          left: [
            'AGIS says on its homepage that it represents 23 member schools, that they bring together children from up to 65 nations, and that English is their common language of teaching. Every member, it adds, is an authorised IB school offering at least one of the four IB programmes.',
            'On recognition, AGIS states that the IB Diploma, with prescribed subject combinations, is equivalent to the German Abitur and opens university access worldwide, and that MYP or IGCSE schools give pupils a qualification equivalent to the Mittlere Reife.'
          ],
          rightH3: 'What that means for computing',
          right: [
            'The subject combination matters, so families should check the exact rules with the school\'s IB coordinator before choosing Computer Science; we teach the subject, and we do not advise on recognition.',
            'In practice, international school pupils come to us for three things: help with the CS course they already take, a programming head start in the MYP years, and projects with real data for an extended essay or a portfolio.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Is the teaching in English, and does it match how international schools teach?',
      lede: 'Yes. Every lesson is in English, the language these pupils already learn computing in.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English only', p: 'We do not teach in German at all. For a pupil whose whole school day is in English, that means no switching: the terms used in class, in the mentor\'s explanation and in the exam paper are the same words.' },
          { h3: 'Pace and accent', p: 'International classrooms mix many accents. Our mentors speak clearly, adapt to the pupil\'s own pace and accent, and slow down for a pupil whose English is still their second or third language.' },
          { h3: 'From their syllabus', p: 'We start from the pupil\'s own assignment calendar: the next test, the next coding task, the next piece of written work. The school\'s teacher and the exam board decide the grade; we build the understanding underneath it.' }
        ] },
        { kind: 'p', mt: true, html: 'Our mentors work from India and teach over live video. A Munich evening lands late in the Indian evening in winter, so we usually suggest weekday slots before 19:00 Munich time and Sunday lessons for longer project work.' }
      ]
    },
    {
      id: 'grid',
      tint: 'tint',
      eyebrow: 'A real Munich project',
      h2: 'When is the motorway at München-West busiest? A two-dimensional array project',
      lede: 'The federal highway research institute, BASt, publishes every hourly count from the automatic counters on Germany\'s motorways as open data. One of them sits at Autobahnkreuz München-West on the A99, the motorway ring around the city. A year of its data makes a classic computer science exercise: fold 8,760 rows into a table of 7 days by 24 hours.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file for counter 9220 holds 8,760 rows for 2023, one per hour, with the date, a weekday number from 1 to 7, an hour number from 01 to 24, and vehicle counts for each of the two directions. Next to each count sits a one-letter flag column; most rows carry a dash there, and 171 hours carry a letter.',
            'We give the pupil a slimmed file, a99_west_2023.csv, with seven columns: date, weekday, hour, the two counts and the two flags. Because the BASt pages that explain the flag letters were not reachable when we built this, the program does not interpret them: it simply leaves flagged hours out and reports how many.'
          ],
          rightH3: 'The question',
          right: [
            'On which day of the week, and in which hour, is the counter busiest on average? Answering it means grouping every row by two keys at once, which is exactly what a two-dimensional array is for: a list of 7 lists, each of 24 numbers.',
            'We keep two such tables, one for the totals and one for how many hours went into each cell, then divide. It is the same pattern an IB pupil uses for a grade book, a seating plan or a game board.'
          ] },
        { kind: 'code', label: 'Version 1: build the 7 by 24 table and find the peak', lang: 'Python', code: GRID, note: 'It prints: <code>Hours left out (flagged): 171</code> and <code>Busiest slot on average: Wed, hour 18, 4858 vehicles</code>.' },
        { kind: 'p', mt: true, html: 'Wednesday, hour 18, with 4,858 vehicles in an average hour across both directions. A nice check for pupils: run it again without the flag filter. The peak stays in the same cell and moves only to 4,866, so the answer does not depend on those 171 hours. When a result survives a change like that, you can state it with more confidence.' },
        { kind: 'p', html: 'Version 2 reads two rows of the table, the morning slot 08 and the evening slot 18, across all seven days, and compares an ordinary weekday morning with a Sunday morning.' },
        { kind: 'code', label: 'Version 2: read two rows of the table', lang: 'Python', code: ROWS, note: 'Run after Version 1, it prints: <code>hour 08: [4558, 4720, 4830, 4617, 4135, 1739, 809]</code>, <code>hour 18: [4654, 4701, 4858, 4767, 4482, 3577, 4026]</code> and <code>hour 08, Mon to Fri vs Sun: 5.7 times as many</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4], caption: 'Average vehicles per hour at counter 9220, A99 München-West, 2023, both directions (our calculation)', head: ['Hour slot', 'Wednesday', 'Friday', 'Saturday', 'Sunday'], rows: [
          ['08', '4,830', '4,135', '1,739', '809'],
          ['18', '4,858', '4,482', '3,577', '4,026']
        ] },
        { kind: 'source', html: 'Data: Bundesanstalt für Straßenwesen, automatic counting stations on the A99, 2023, station 9220 (listed on GovData as Zählstelle AK München-West), licence CC BY 4.0, downloaded 3 November 2026. Averages are our own, over the 8,589 hours without a flag letter. All 8,760 hours as published add up to 22,760,004 vehicles, about 62,356 a day.' },
        { kind: 'p', mt: true, html: 'The table hides two stories a pupil can investigate. Friday mornings are quieter than other weekday mornings. And at slot 18, Sunday is busier than Saturday, 4,026 against 3,577. The data cannot say why; a good write-up offers a hypothesis, such as weekend trips returning, and says what extra data would test it.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Warm-up.</strong> On paper, draw a 3 by 4 grid and fill it from a list of twelve numbers, row by row. Then write the index pair of the largest number.',
          '<strong>Core.</strong> Run Version 1, then print the whole 7 by 24 table of averages with one row per day, neatly aligned.',
          '<strong>Extension.</strong> Split the totals by direction, north and south, and find whether the two directions peak at different hours.',
          '<strong>For a write-up.</strong> State one finding that the table supports and one claim it cannot support, and explain why in two sentences each.'
        ] }
      ]
    },
    {
      id: 'switching',
      eyebrow: 'Changing system',
      h2: 'What if my child moves from an international school to a Bavarian Gymnasium?',
      lede: 'Computing looks different in the Bavarian state system, especially in the Oberstufe. The Gesellschaft für Informatik summarises the rules.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in the Bavarian Gymnasium Oberstufe, 2026/27', head: ['Stage', 'What the rules say'], rows: [
          ['Grade 11 (Einführungsphase)', 'Two compulsory hours of Informatik, or a variant of it, in every branch'],
          ['Qualifikationsphase, scientific branch', 'Informatik at basic level for three hours or at raised level for five hours'],
          ['Qualifikationsphase, other branches', 'Late-starting Informatik at basic level for three hours'],
          ['Written Abitur in Informatik', 'Tasks set centrally; much of it is programming on paper, with no work at the computer']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bayern, compiled from the Gymnasialschulordnung; read 2 November 2026.' },
        { kind: 'p', mt: true, html: 'The last row surprises most international school families. In the Bavarian written Abitur, code is written by hand, so a pupil used to running and testing every line on a laptop needs practice in tracing a program on paper, step by step, and in writing syntax correctly without an editor\'s help. We practise exactly that with original tasks, in English, and our Informatik Abitur course covers the Java and Python side.' },
        { kind: 'p', html: 'If your family is considering a move, also note the calendar: Bavarian Gymnasien follow the Land\'s holidays, such as summer from 2 August to 13 September 2027 in the KMK table, which can differ from an international school\'s own term dates.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are lessons for Munich pupils?',
      lede: 'International school days can run late, so most pupils pick an early evening slot or a Sunday.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Munich lesson times and the matching time in India', head: ['Munich time', 'India, until 28 March 2027', 'India, from 28 March 2027'], rows: [
          ['17:15', '21:45', '20:45'],
          ['18:45', '23:15', '22:15'],
          ['Sunday 12:30', '17:00', '16:00']
        ] },
        { kind: 'source', html: 'German time follows the Einheitenzeitgesetz: UTC+1 in winter, UTC+2 in summer, with summer time back on 28 March 2027 after ending on 25 October 2026. India stays on UTC+5:30, so the gap is four and a half hours in winter and three and a half in summer. Examples, not fixed batch times.' },
        { kind: 'p', mt: true, html: 'Because 18:45 in Munich is already late evening in India during winter, we suggest the earlier weekday slot or Sunday for one-to-one exam work, and move times when summer time returns in spring.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How a pupil grows from first scripts to exam-ready work',
    lede: 'Our own stages for international school pupils, used to plan lessons and to report to families.',
    table: { caption: 'Computing stages for ages 11 to 18 (ours)', head: ['Stage', 'Typical point', 'The pupil can'], rows: [
      ['1. Scripts', 'MYP 1 to 2', 'Write short Python programs with input, output and conditions'],
      ['2. Structures', 'MYP 3 to 4', 'Use lists, loops and functions to solve multi-step tasks'],
      ['3. Tables', 'MYP 5 or IGCSE', 'Work with two-dimensional arrays and files, as in the traffic project'],
      ['4. Algorithms', 'IGCSE or DP 1', 'Trace, compare and write searching and sorting algorithms on paper'],
      ['5. Projects', 'DP 1 to 2', 'Plan, build, test and document a substantial program of their own']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is where many pupils first feel that programming is powerful: one loop over a whole year of data.',
      'We report what your child built and can explain, never only hours.'
    ] },
    right: { h3: 'For pupils', ps: [
      'A table is just a list of lists. Name both indices before you write the loop.',
      'If a result survives when you change one assumption, say so. That is evidence.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for international school pupils',
    lede: 'Each one live and in English, with a mentor who stays the same, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Programming depth', sub: 'Ages 12 to 18', courses: [
        { code: 'CMU / CODE / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented programming from the ground up.' },
        { code: 'CMU / CODE / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Data structures and algorithms', blurb: 'The algorithmic thinking IB and IGCSE papers test.' },
        { code: 'CMU / CODE / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python with real datasets and first models.' }
      ] },
      { num: 'II', h3: 'Other programmes', sub: 'Ages 14 to 19', courses: [
        { code: 'CMU / EXAM / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'For pupils at schools offering AP.' },
        { code: 'CMU / EXAM / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'For pupils moving into the German Oberstufe.' },
        { code: 'CMU / EXAM / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'The maths that sits next to IB computing.' }
      ] },
      { num: 'III', h3: 'Beyond the syllabus', sub: 'Ages 12 to 18', courses: [
        { code: 'CMU / MORE / 01', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'German informatics contests', blurb: 'From the Biber to the Bundeswettbewerb.' },
        { code: 'CMU / MORE / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web for teens', blurb: 'React and Node.js projects for a portfolio.' },
        { code: 'CMU / MORE / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Defensive, ethical security skills.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'How live lessons work for an international school pupil',
    lede: 'Two live lessons a week with one mentor, planned around the school\'s calendar. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Evenings', l: 'From about 17:15 Munich time, after a long school day.' },
      { time: 'Sundays', l: 'Longer project sessions without school the next morning.' },
      { time: '1-on-1', l: 'Times set around assessments and deadlines.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person through the whole course.' },
      { h3: 'Their syllabus', p: 'Lessons start from the next assessment.' },
      { h3: 'Code and paper', p: 'Running code, and tracing it by hand.' },
      { h3: 'Real data', p: 'Projects on open data with a licence.' },
      { h3: 'Family updates', p: 'What was done and what comes next.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'A selection of what our teenage students have built; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the full set.',
  reviewsLede: 'Google reviews from students and parents, quoted exactly.',

  fees: {
    h2: 'Fees for Munich families',
    lede: 'The fee is monthly and covers eight live lessons. On this page it appears in euro at the European Central Bank reference rate, while the card payment itself is in US dollars; your bank converts it, so the statement can show a slightly different sum.',
    free: ['A free first lesson', 'A look at a current task or test', 'No card needed'],
    group: ['Fifteen to twenty pupils at a similar stage', 'One regular mentor', 'Two lessons a week', 'Monthly, stop when you like'],
    one: ['Your child and one mentor', 'Built around their own syllabus', 'Times that fit the school week']
  },

  faq: {
    eyebrow: 'Munich families ask',
    h2: 'Coding for international school students in Munich: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every lesson is live and in English only, the same language your child learns computing in at an international school. The mentor adapts to your child\'s pace and accent, which helps in classrooms where English is a second or third language.' },
      { q: 'Do you teach IB Diploma Computer Science?', a: 'Yes, at SL and HL. We work from your child\'s own school plan and deadlines, and we write our own practice tasks. The school and the IB set and mark the assessments; we do not.' },
      { q: 'Can you help a pupil in the MYP years?', a: 'Yes. Many MYP pupils start with our Python for Teens course to build real programming skill before the Diploma, so that algorithms and larger projects feel familiar later.' },
      { q: 'Is the IB Diploma recognised as an Abitur in Germany?', a: 'AGIS states that the IB Diploma, with prescribed subject combinations, is equivalent to the German Abitur. The exact combination rules matter, so please check them with the school\'s IB coordinator; we do not give advice on recognition.' },
      { q: 'What changes if my child moves to a Bavarian Gymnasium?', a: 'In grade 11 every branch has two compulsory hours of Informatik, and the written Informatik Abitur in Bavaria is set centrally, with much of it programming on paper and no work at the computer, according to the Gesellschaft für Informatik.' },
      { q: 'Are you connected to any Munich international school?', a: 'No. We name schools on this page only as context, from the AGIS directory. We are an independent online school and are not linked to any school, AGIS or the IB.' },
      { q: 'What time are lessons in Munich?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most pupils choose a slot between about 17:00 and 19:00 or a Sunday.' },
      { q: 'Where are the mentors based?', a: 'In India. They teach live over video, in English, and your child keeps the same mentor through the course.' },
      { q: 'Can a project like the traffic grid help with an extended essay?', a: 'It can show the skills, but your child must choose and write their own topic and work, with their school supervisor. We teach the methods, such as cleaning data and building tables, and we never write the essay or code it for them.' },
      { q: 'What does it cost?', a: 'A monthly fee, shown on this page in euro at the European Central Bank reference rate. The payment is taken in US dollars and converted by your bank, so the amount you see on your statement can differ a little. The first lesson is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for international school families in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our hub page for Germany.' },
      { href: '/coding-for-international-school-students-germany', label: 'International school pupils in Germany', p: 'The national picture, beyond Munich.' },
      { href: '/ib-computer-science-tutor-germany', label: 'IB Computer Science tutor', p: 'How the subject sits in the diploma in Germany.' },
      { href: '/igcse-computer-science-tutor-germany', label: 'IGCSE Computer Science tutor', p: 'For pupils on a Cambridge route.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science', p: 'Informatik in the German Abitur, in English.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live lesson looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Bring a current coding task, a recent test or a project idea. The mentor works on it with your child, sees how they think about code, and suggests a course and a plan.',
    readFirst: 'For more detail first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our lessons and <a class="ag-inline-link" href="/courses">all courses</a> lists every syllabus.',
    note: 'Lessons are live online with mentors in India, in English only. Questions are welcome on WhatsApp, in English.',
    formNote: 'Free, with no card and no contract.'
  },

  footer: {
    cols: [
      { h4: 'International pupils', links: [
        { href: '/ib-computer-science-tutor-germany', label: 'IB Computer Science' },
        { href: '/igcse-computer-science-tutor-germany', label: 'IGCSE Computer Science' },
        { href: '/ap-computer-science-tutor-germany', label: 'AP Computer Science' },
        { href: '/python-and-dsa-for-international-students-germany', label: 'Python and DSA' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'A table is a list of lists'
  },

  personalityCss: `
.ag-root.ag-cmu .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-cmu .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-cmu .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-cmu .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cmu .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'AGIS e.V. homepage, Wer wir sind and school directory pages (Munich International School, Bavarian International School, International School Augsburg); Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bayern; KMK Ferien 2026/2027; Destatis GV-ISys; Einheitenzeitgesetz; Bundesanstalt für Straßenwesen, automatic counting stations A99 2023, CC BY 4.0; all read 2 and 3 November 2026.',
    localProject: 'The München-West traffic grid: an original Python project on the 2023 hourly counts of BASt counter 9220 on the A99 that folds 8,760 rows into a 7 by 24 two-dimensional array, leaves out 171 flagged hours, finds the busiest average slot (Wednesday, hour 18, 4,858 vehicles; 4,866 without the filter), and compares morning and evening rows across the week (weekday mornings 5.7 times Sunday). Lesson family: two-dimensional arrays.',
    requiredMentions: ['a99_west_2023.csv', 'Hours left out (flagged): 171', 'Busiest slot on average: Wed, hour 18, 4858 vehicles', 'hour 08, Mon to Fri vs Sun: 5.7 times as many', 'Schloss Buchhof', 'up to 65 nations', 'programming on paper, with no work at the computer', 'A table is a list of lists'],
    sources: [
      { claim: 'AGIS: 23 member schools, up to 65 nations, English as common language; IB Diploma equivalent to the Abitur with prescribed combinations; MYP/IGCSE equivalent to the Mittlere Reife.', url: 'https://www.agis-schools.org/' },
      { claim: 'All AGIS members are authorised IB schools.', url: 'https://www.agis-schools.org/wer-wir-sind' },
      { claim: 'Munich International School: Starnberg, 1,314 pupils, PYP, MYP, IB.', url: 'https://www.agis-schools.org/school/munich-international-school' },
      { claim: 'Bavarian International School: Haimhausen, 1,265 pupils, PYP, MYP, DP, CP.', url: 'https://www.agis-schools.org/school/bavarian-international-school' },
      { claim: 'Bavarian Gymnasium Informatik in grade 11 and the Qualifikationsphase; written Abitur on paper.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' },
      { claim: 'BASt A99 hourly counts 2023, counter 9220 München-West, CC BY 4.0.', url: 'https://ckan.govdata.de/dataset/automatische-zahlstellen-auf-der-autobahn-a99-2023' }
    ],
    rejectedClaims: [
      'Any statement that pupils of these schools study with us: refused; schools are context only.',
      'The meaning of the BASt flag letters: the explanation pages were unreachable, so the page does not interpret them.',
      'IB syllabus details, weightings or exam dates: ibo.org is blocked for us (BLOCKED.md), so none given.',
      'Advice on IB Diploma recognition: none; families are pointed to the school\'s IB coordinator.',
      'Any affiliation with AGIS, the IB, a school or the BASt: none.'
    ]
  }
};
