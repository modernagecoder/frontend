'use strict';
// Maths tutor in Cologne, in English (ag- city maths door, Germany cluster P5 row DE117, alloc code enc, hubGroup maths).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: the NRW maths exam calendar for 2027, taken from the ministry's own pages (ZP10 on 20 May, the central
// Einführungsphase exam on 31 May, the Abitur maths paper on 5 May), what each one asks of an English-speaking pupil,
// and a Cologne data task built on a trap every pupil in Germany meets: 88.423 is eighty-eight thousand, not eighty-eight.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/math-tutor-cologne-in-english/ and
// facts-school/src/, fetched 2 and 3 Nov 2026 with curl -sL -A "Mozilla/5.0"):
//  - MSB NRW Standardsicherung, Zentrale Prüfungen 10 - Termine 2027 (zp10-termine-2027.txt; canonical
//    .../zentrale-pruefungen-10/termine/zentrale-pruefungen-10-termine-2027): "Deutsch Dienstag, 11. Mai 2027";
//    "Englisch Donnerstag, 13. Mai 2027"; "Mathematik Donnerstag, 20. Mai 2027 Donnerstag, 03. Juni 2027"; "Bekanntgabe
//    der Vor- und Prüfungsnoten Donnerstag, 10. Juni 2027"; oral "Freitag, 18. Juni 2027" to "Dienstag, 29. Juni 2027";
//    "Die schriftlichen Prüfungen beginnen jeweils um 9:00 Uhr."; school types "Hauptschule, Realschule, Gesamtschule,
//    Sekundarschule, Primusschule, Gymnasium mit einer Klasse 10 (SI)".
//  - MSB NRW, ZKE Termine 2027 (raw/nrw-zentrale-klausuren-einfuehrungsphase_zke-termine.txt): "Deutsch Dienstag, 25. Mai
//    2027 Mittwoch, 2. Juni 2027 Mathematik Montag, 31. Mai 2027 Dienstag, 8. Juni 2027".
//  - MSB NRW, Zentralabitur GOSt Termine 2027 and Anlage A (FACTS.md 42 to 44, 48): written Abitur 13 April to 5 May
//    2027; Q2 last teaching day Friday 19 March 2027; "Mittwoch, 5. Mai 2027 Mathematik X X"; "Die Prüfungen beginnen
//    jeweils um 9:00 Uhr."
//  - IQB VERA (FACTS.md 111, 115, 116); IQB pool structure (FACTS.md 32, 34, 36, 38): Land commission decides pool use;
//    Part A without aids; LK 300 minutes, GK 255 minutes.
//  - KMK Bildungsstandards ESA/MSA Mathematik (FACTS.md 124): Leitideen incl. "Leitidee Daten und Zufall".
//  - KMK Ferien 2026/2027, NRW row. Destatis GV-ISys 31.12.2024: Köln 1,024,621. EinhZeitG; summer time 2027.
//  - Data: Stadt Köln, "Fahrrad Verkehrsdaten Köln 2022" via Open.NRW / GovData (govdata_rad_2022.json, publisher_name
//    "Stadt Köln"), resource "Radverkehr für Offene Daten Köln 2022.csv" (ISO-8859-1, 13 lines, sha256 9a14b45d...447ba591),
//    licence Datenlizenz Deutschland Zero 2.0. Notes: "Dieser Datensatz beinhaltet die Erhebungen der automatischen
//    Zählstellen des Kölner Radverkehrs aus 2022." and "Alle derzeit betriebenen 17 Dauerzählstellen".
// Our own calculations (scratchpad de/w/C2/enc, python3 -I; file converted to UTF-8 as rad_koeln_2022.csv): v1.py prints
// "Deutzer Brücke in Januar: 88.423"; v1 then v2 prints "Deutzer Brücke January: 88423 August: 199040", "Change:
// +125.1%", "Busiest counter in 2022: Venloer Straße 2011322". Extra: August across 17 counters mean 120,578.9, median
// 113,372; Universitätsstraße January 110,382 to August 99,332 (-10.0 percent); all counters May 2,078,532, February
// 1,020,325 (ratio 2.04), year 18,910,485.
// Lesson family: reading number formats (German thousands point), then percentage change and mean against median.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("rad_koeln_2022.csv", encoding="utf-8") as sheet:',
  '    rows = list(csv.reader(sheet, delimiter=";"))',
  '',
  'counters = rows[0][1:]',
  'january = rows[1]',
  'print(counters[0], "in", january[0] + ":", float(january[1]))'
].join('\n');

const V2 = [
  'def german_int(text):',
  '    return int(text.replace(".", ""))',
  '',
  'year = {}',
  'for month in rows[1:]:',
  '    for name, cell in zip(counters, month[1:]):',
  '        year[name] = year.get(name, 0) + german_int(cell)',
  '',
  'jan = german_int(rows[1][1])',
  'aug = german_int(rows[8][1])',
  'print(counters[0], "January:", jan, "August:", aug)',
  'print(f"Change: {100 * (aug - jan) / jan:+.1f}%")',
  'leader = max(year, key=year.get)',
  'print("Busiest counter in 2022:", leader, year[leader])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'maths', label: 'Cologne: maths tutor in English' },
  slug: 'math-tutor-cologne-in-english',
  code: 'enc',
  accent: '#68243E',
  accentRationale: 'Maths tutor in Cologne: a deep wine red #68243E, close to the red of the Cologne city arms but darkened for text, distinct from the linden green of the Cologne coding page; it clears 4.5:1 on the paper and all three tints (alloc minimum 8.92)',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Maths tutor in Cologne, in English',
  title: 'Maths Tutor in Cologne, in English: Live Online Lessons',
  description: 'A maths tutor in Cologne who teaches live in English: the NRW maths exam dates for 2027, ZP10, the EF exam and the Abitur, plus a Cologne data task on bike counts.',
  ogDescription: 'Live online maths help in English for Cologne pupils: the 2027 dates for ZP10 maths, the central Einführungsphase exam and the Abitur from the NRW ministry, and a task on Cologne bike counters that starts with the German thousands point.',
  twitterDescription: 'Maths tutoring in English for Cologne pupils: the NRW exam dates for 2027 and a Cologne bike-count task.',
  pageName: 'Maths Tutor in Cologne, in English',
  webPageDescription: 'A guide in English for Cologne families looking for maths help: the NRW maths checkpoints for 2027 from the Ministerium für Schule und Bildung and the IQB, how the papers are built, and an original task on the Stadt Köln bike counter data for 2022.',
  courseDescription: 'Live online maths tutoring in English for pupils at Cologne schools from Grundschule to the Abitur: number and algebra for Klassenarbeiten, preparation for ZP10 maths, the central exam at the end of the Einführungsphase and the Abitur, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Maths tutor, Cologne',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#dates', label: '2027 dates' },
    { href: '#papers', label: 'Papers' },
    { href: '#bikes', label: 'Bike task' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Cologne &middot; Maths help in English &middot; Grundschule to Abitur',
  h1: 'A maths tutor in Cologne who teaches in English',
  lede: 'North Rhine-Westphalia has published its maths exam dates for 2027, and they cluster in a few spring weeks: the Abitur maths paper on 5 May, ZP10 maths on 20 May and the central exam at the end of the Einführungsphase on 31 May. This page lists every checkpoint a Cologne pupil meets, explains what the papers ask, and shows how we teach, in English, through a task on the city\'s bike counters that begins with a number written the German way.',
  secondaryCta: { href: '#dates', label: 'The 2027 dates' },
  wa: 'Hello Modern Age Coders, my child goes to school in Cologne and needs maths help in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; NRW maths explained in English',
  spec: [
    ['For', 'Cologne pupils, Grundschule to Abitur'],
    ['Exams', 'ZP10, EF central exam, Abitur'],
    ['Topics', 'Number, algebra, functions, data, analysis'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Cologne times', 'Evenings and Sunday mornings, flexible'],
    ['First lesson', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders offers a maths tutor for Cologne pupils, taught live online in English by mentors who follow your child\'s pace and accent. They prepare pupils at NRW schools for Klassenarbeiten, the ZP10 maths exam on 20 May 2027, the central exam at the end of the Einführungsphase and the Abitur, with the German maths terms taught alongside. Families pick private lessons or a batch of fifteen to twenty pupils.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Maths courses to start with in Cologne',
    lede: 'The middle years leading to ZP10, the Oberstufe leading to the Abitur, and Grundschule for the youngest.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'ENC / 01', title: 'Klasse 5 to 10 maths', note: 'Fractions, percentages, equations, functions, geometry and probability: the ground the ZP10 maths paper and VERA-8 cover, taught in English with the German terms beside them.' },
      { course: 'abitur-mathematics-course-in-english', code: 'ENC / 02', title: 'Abitur Mathematik in English', note: 'From the Einführungsphase to Q2, Grundkurs or Leistungskurs: Analysis, analytic geometry and Stochastik, with full written solutions.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'ENC / 03', title: 'Grundschule maths', note: 'For the four Grundschule years: counting in thousands, adding through to dividing, measuring, shapes and first charts, before the move to secondary school.' }
    ]
  },

  sections: [
    {
      id: 'dates',
      eyebrow: 'The 2027 calendar',
      h2: 'When are the NRW maths exams in 2027?',
      lede: 'All dates below are taken from the NRW school ministry and the IQB. They fall in the spring of 2027, so the autumn and winter are the time to build up.',
      body: [
        { kind: 'table', numCols: [], caption: 'Maths checkpoints for pupils at NRW schools in 2027', head: ['Grade', 'Checkpoint', 'Date in 2027', 'Notes'], rows: [
          ['3', 'VERA-3, maths', '12 April to 26 May (window)', 'Comparison test, not graded'],
          ['8', 'VERA-8, maths', '8 February to 25 March (window)', 'Comparison test, not graded'],
          ['10', 'ZP10, Mathematik', 'Thursday 20 May; resit Thursday 3 June', 'Written papers start at 9:00'],
          ['EF', 'Zentrale Klausur, Mathematik', 'Monday 31 May; resit Tuesday 8 June', 'Central exam at the end of the Einführungsphase'],
          ['Q2', 'Abitur, Mathematik (LK and GK)', 'Wednesday 5 May', 'Exams start at 9:00; last Q2 teaching day 19 March']
        ] },
        { kind: 'source', html: 'Sources: Ministerium für Schule und Bildung NRW, Standardsicherung: Zentrale Prüfungen 10, Termine 2027; Zentrale Klausuren Einführungsphase, Termine 2027; Zentralabitur GOSt, Termine 2027 and Anlage A. the IQB pages on VERA-3 and VERA-8. Read 2 and 3 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'ZP10 in May 2027',
          left: [
            'The ZP10 written papers in 2027 come in one fortnight: German on Tuesday 11 May, English on Thursday 13 May and maths on Thursday 20 May 2027, each starting at 9:00. The ministry lists the school types that sit them, among them Hauptschule, Realschule, Gesamtschule, Sekundarschule and Gymnasien with a grade 10 in Sekundarstufe I.',
            'Pre-marks and exam marks are announced on Thursday 10 June 2027, and oral exams fall between 18 and 29 June 2027, on dates each school sets.'
          ],
          rightH3: 'Oberstufe in spring 2027',
          right: [
            'For pupils in the Einführungsphase, the central maths exam is on Monday 31 May 2027, with German a week earlier on Tuesday 25 May. These Zentrale Klausuren are set centrally for Gymnasien and Gesamtschulen.',
            'For the Abitur year, the written exams run from 13 April to 5 May 2027, and maths, at both Leistungskurs and Grundkurs level, is the last paper on Wednesday 5 May 2027.'
          ] },
        { kind: 'p', mt: true, html: 'VERA, by contrast, is a check on the class, not on the child. According to the IQB, VERA results are not marked and no school or Land is ranked. It is still useful for parents: a weak VERA-8 result in early 2027 is a signal a year and a half before ZP10, early enough to close a gap calmly.' }
      ]
    },
    {
      id: 'papers',
      eyebrow: 'Inside the papers',
      h2: 'What do NRW maths papers ask, and where do English-speaking pupils lose marks?',
      lede: 'The topics are international; the wording and the expected layout are German. Most lost marks come from the second.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The five big ideas', p: 'The KMK standards for the MSA in maths are organised by Leitideen, among them Zahl und Operation, Größen und Messen, Raum und Form and Daten und Zufall. ZP10 questions mix them, often in one context such as a journey, a shop or a survey.' },
          { h3: 'Abitur structure', p: 'The IQB describes the common Abitur pool in two parts: Part A without aids and Part B with them. At raised level the pool exam lasts 300 minutes, at basic level 255. Each Land\'s commission decides which pool tasks it uses.' },
          { h3: 'Reading the operator', p: 'Every task starts with an instruction word: berechne, bestimme, begründe, interpretiere. A pupil who calculates when the task says interpretiere loses most of the marks, however correct the number.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'German maths instructions and what they want (our teaching list)', head: ['Instruction', 'In English', 'What earns the mark'], rows: [
          ['Berechne', 'Calculate', 'A correct result with the working shown'],
          ['Bestimme', 'Determine', 'A result by any valid method, briefly explained'],
          ['Begründe', 'Justify', 'A reason in words, not only a number'],
          ['Interpretiere', 'Interpret', 'What the result means in the context'],
          ['Skizziere', 'Sketch', 'The shape and key points, not an exact plot'],
          ['Zeige', 'Show that', 'Every step from the given to the claim']
        ] },
        { kind: 'source', html: 'The instruction list and its explanations are our own teaching notes. The official operator lists come from the IQB and the Länder, and your child\'s teacher will name the ones that apply.' },
        { kind: 'p', mt: true, html: 'Our mentors teach in English and write the German instruction next to each practice task, so a pupil learns the maths and the exam language at the same time. With Cologne pupils we also practise the number format early, because German papers write 1.250 for one thousand two hundred and fifty and 1,25 for one and a quarter. The data task below starts from exactly that.' }
      ]
    },
    {
      id: 'bikes',
      tint: 'tint',
      eyebrow: 'A Cologne data task',
      h2: 'How much busier are Cologne\'s cycle routes in summer? A task with a trap',
      lede: 'Stadt Köln publishes the monthly counts of its permanent bike counters as open data. In the 2022 file, 17 counters each have twelve monthly totals. The first lesson is not about cycling at all: it is about reading a number.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file has one header row with the counter names, from Deutzer Brücke to Neusser Straße, and one row per month from Januar to Dezember. The city describes it as the counts of the automatic counting stations of Cologne\'s bike traffic in 2022.',
            'Every count is written the German way. January at Deutzer Brücke reads 88.423: the point separates thousands, so it means 88,423 bikes, not eighty-eight and a bit.'
          ],
          rightH3: 'The task',
          right: [
            'By what percentage did August beat January at Deutzer Brücke, and which counter had the most bikes over the year? A pupil writes the program, but the maths, percentage change and totals, is theirs to check by hand.',
            'We start with the obvious approach and let it fail, because a mistake you see yourself is one you never make again.'
          ] },
        { kind: 'code', label: 'Version 1: read the number as Python would', lang: 'Python', code: V1, note: 'It prints: <code>Deutzer Brücke in Januar: 88.423</code>. Python reads the point as a decimal point, so 88,423 bikes have become 88.423.' },
        { kind: 'p', mt: true, html: 'Any percentage built on that number is wrong by a factor of a thousand, and nothing crashes to warn you. The fix is a small function that removes the thousands point before converting the text to a whole number. Version 2 uses it to add up each counter\'s year and to compare January with August.' },
        { kind: 'code', label: 'Version 2: convert properly, then calculate', lang: 'Python', code: V2, note: 'Run after Version 1, it prints: <code>Deutzer Brücke January: 88423 August: 199040</code>, <code>Change: +125.1%</code> and <code>Busiest counter in 2022: Venloer Straße 2011322</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Four Cologne bike counters in 2022: January, August and the year (our sums)', head: ['Counter', 'January', 'August', 'Year 2022'], rows: [
          ['Venloer Straße', '124,574', '207,493', '2,011,322'],
          ['Deutzer Brücke', '88,423', '199,040', '1,710,346'],
          ['Universitätsstraße', '110,382', '99,332', '1,596,571'],
          ['Vorgebirgspark', '20,023', '45,461', '372,147']
        ] },
        { kind: 'source', html: 'Data: Stadt Köln, Fahrrad Verkehrsdaten Köln 2022 via Open.NRW, licence Datenlizenz Deutschland Zero 2.0, downloaded 3 November 2026. Year totals and changes are our own sums of the twelve monthly values.' },
        { kind: 'p', mt: true, html: 'One row breaks the pattern. At Universitätsstraße, August is lower than January, a fall of about 10 percent, while most counters rose sharply. The data does not explain it. A strong answer offers a hypothesis a pupil could test, for example the university\'s summer break, and says what other data would confirm or reject it.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Klasse 5 and 6.</strong> Hohenzollernbrücke shows 104.883 in August. Write it as an English number and round it to the nearest thousand. (Answer: 104,883; 105,000.)',
          '<strong>Klasse 7.</strong> Universitätsstraße went from 110.382 in January to 99.332 in August. Work out the change in percent, to one decimal. (Answer: minus 10.0 percent.)',
          '<strong>Klasse 8.</strong> For August, the mean of the 17 counters is 120,578.9 and the median is 113,372. Explain why the mean is higher. (Answer: two very busy counters, Venloer Straße and Deutzer Brücke, pull the mean up.)',
          '<strong>Klasse 9 and 10.</strong> All counters together recorded 2,078,532 bikes in May and 1,020,325 in February. How many times as many is that? (Answer: about 2.04.)',
          '<strong>Oberstufe.</strong> Write one sentence a ZP10 marker would accept for "Interpretiere den Wert 2,04 im Sachzusammenhang", and one that would lose the mark.'
        ] },
        { kind: 'source', html: 'We wrote these tasks ourselves and checked every answer with our own runs on the city\'s file.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Lesson times',
      h2: 'When can a Cologne pupil have a lesson?',
      lede: 'Early evening on weekdays, or a Sunday morning before the school week, with the mentor late in the Indian day.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cologne lesson times with the Indian clock beside them', head: ['In Cologne', 'In India (winter)', 'In India (summer, from 28 March 2027)'], rows: [
          ['17:40', '22:10', '21:10'],
          ['19:00', '23:30', '22:30'],
          ['Sunday 10:45', '15:15', '14:15']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz gives Germany MEZ (UTC+1) in winter and MESZ (UTC+2) in summer. Summer time stopped on 25 October 2026 and restarts on 28 March 2027, while India keeps UTC+5:30 year round: four and a half hours ahead now, three and a half from spring. Sample times only; no batch is tied to them.' },
        { kind: 'p', mt: true, html: 'Because a 19:00 lesson is very late in India in winter, we keep that slot for spring and summer and suggest 17:40 or Sunday until 28 March 2027. NRW\'s Easter holidays run from 22 March to 3 April 2027, a natural moment for an intensive block before the May exams.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How we work',
    h2: 'From the next exam date back to today',
    lede: 'Our own way of planning for a Cologne pupil with an exam in spring 2027.',
    table: { caption: 'A spring 2027 plan, counting back from the exam (ours)', head: ['When', 'Focus', 'What you see'], rows: [
      ['November to December 2026', 'Find and close gaps from earlier grades', 'A short gap list, ticked off'],
      ['January to February 2027', 'Topic by topic, with German instruction words', 'Worked solutions in the notebook'],
      ['Easter break, 22 March to 3 April 2027', 'Mixed practice under time', 'Timed scores your child records'],
      ['April to May 2027', 'Our own exam-style papers', 'Confidence with the format'],
      ['After the exam', 'Review, then the next school year', 'A plan for what comes next']
    ] },
    left: { h3: 'For parents', ps: [
      'We never promise a mark. We show you, in your child\'s notebook, what has become secure each month.',
      'The school\'s marks and the central exam are what count; we strengthen the method behind them.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Read the number before you calculate with it. 88.423 is not 88.423 in English.',
      'The instruction word tells you what kind of answer earns the mark.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths',
    h2: 'Nine more maths courses for Cologne pupils',
    lede: 'Live and in English, with one regular mentor, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Grades 1 to 7', courses: [
        { code: 'ENC / BASE / 01', slug: 'mental-maths-mastery-kids', title: 'Mental arithmetic', blurb: 'Number sense for 5 to 10 year olds.' },
        { code: 'ENC / BASE / 02', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Hands-on number play for the youngest.' },
        { code: 'ENC / BASE / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Känguru and Olympiade', blurb: 'Contest problems we write ourselves.' }
      ] },
      { num: 'II', h3: 'Toward ZP10', sub: 'Grades 7 to 10', courses: [
        { code: 'ENC / MID / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Expressions, equations and linear functions.' },
        { code: 'ENC / MID / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The Daten und Zufall strand, in depth.' },
        { code: 'ENC / MID / 03', slug: 'maths-through-coding', title: 'Maths through code', blurb: 'Data tasks like the bike counters, in Python.' }
      ] },
      { num: 'III', h3: 'Oberstufe and beyond', sub: 'EF to Q2', courses: [
        { code: 'ENC / UP / 01', slug: 'complete-high-school-mathematics-mastery', title: 'Upper-school maths', blurb: 'Functions, calculus and vectors.' },
        { code: 'ENC / UP / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'Diploma maths at SL or HL.' },
        { code: 'ENC / UP / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Core and Extended papers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'A week of maths lessons in Cologne',
    lede: 'Each week brings two live lessons with the same mentor, planned backwards from the next Klassenarbeit or exam. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Early evenings', l: 'Weekdays from about 17:40 Cologne time.' },
      { time: 'Sundays', l: 'A morning slot to prepare the week.' },
      { time: '1-on-1', l: 'Extra sessions before ZP10 or the Abitur.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same tutor for the whole school year.' },
      { h3: 'Exam language', p: 'German instruction words, explained in English.' },
      { h3: 'Written steps', p: 'Solutions laid out the way markers expect.' },
      { h3: 'From the calendar', p: 'Every plan starts from a real 2027 date.' },
      { h3: 'Short reports', p: 'What was covered, what to practise next.' },
      { h3: 'Group or solo', p: 'A group of fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Several of our students combine maths with code in their own projects. A few are below; there are more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews by parents and students, quoted exactly.',

  fees: {
    h2: 'Maths tutoring fees for Cologne families',
    lede: 'The monthly fee covers eight live lessons. It is shown in euro using the European Central Bank reference rate; you pay in US dollars, your bank does the conversion, and so the amount on the statement can be slightly different.',
    free: ['A free first lesson', 'A look at a recent Klassenarbeit', 'No card needed'],
    group: ['Fifteen to twenty pupils at a similar level', 'One regular mentor', 'Two lessons a week', 'Monthly, cancel any month'],
    one: ['Your child and one mentor', 'Planned around the 2027 exam dates', 'Times that suit your family']
  },

  faq: {
    eyebrow: 'Cologne families ask',
    h2: 'Questions Cologne families ask about maths tutoring',
    items: [
      { q: 'Are the classes in German?', a: 'No, there are no German-language lessons: everything is live and in English. The mentor takes the pace and accent your child needs and notes German terms and instruction words next to the English, so NRW papers still feel familiar.' },
      { q: 'When is the ZP10 maths exam in 2027?', a: 'On Thursday 20 May 2027, starting at 9:00, with a resit date on Thursday 3 June 2027, according to the NRW school ministry. German is on 11 May and English on 13 May 2027.' },
      { q: 'When is the Abitur maths exam in NRW in 2027?', a: 'The ministry\'s Anlage A lists Mathematik, Leistungskurs and Grundkurs, on Wednesday 5 May 2027. The written Abitur runs from 13 April to 5 May 2027, and exams start at 9:00.' },
      { q: 'What is the central exam at the end of the Einführungsphase?', a: 'A Zentrale Klausur set centrally for Gymnasien and Gesamtschulen at the end of the EF. In 2027 the maths paper is on Monday 31 May 2027, with an optional resit date on Tuesday 8 June 2027.' },
      { q: 'Can you guarantee a better mark?', a: 'No, and we do not promise one. We show you what has become secure in your child\'s work. The school\'s marks and the central exams are what count, and we teach alongside the school, never instead of it.' },
      { q: 'When are lessons in Cologne time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Through the winter, 17:40 on weekdays and Sunday late mornings are the usual Cologne picks.' },
      { q: 'Where do the tutors teach from?', a: 'From India, live over video and in English. Each pupil is matched with one mentor for the long run, who learns their habits and gaps.' },
      { q: 'Do you help international school pupils in Cologne?', a: 'Yes. For pupils on an IB or IGCSE route we have separate courses. We confirm the programme and level first and plan from there.' },
      { q: 'How big are the groups?', a: 'Batches hold fifteen to twenty pupils working at a similar level. In the run-up to ZP10 or the Abitur, plenty of families move to private lessons, twice a week.' },
      { q: 'How do we pay?', a: 'Once a month. You see the fee here in euro, converted at the reference rate of the European Central Bank; the card is debited in US dollars and your bank exchanges the sum, which is why the statement can show a slightly different figure. Your first lesson is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on maths at schools in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The hub for all our Germany pages.' },
      { href: '/online-math-tutor-germany', label: 'Online maths tutor in Germany', p: 'Checkpoints across all the Länder.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The written maths Abitur, explained.' },
      { href: '/kangaroo-math-germany-practice', label: 'Känguru practice', p: 'The 8 April 2027 contest, with our own problems.' },
      { href: '/math-olympiad-germany-preparation', label: 'Mathematik-Olympiade', p: 'Rounds and dates for 2026/27.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Bring the last Klassenarbeit or a topic that worries your child. The mentor works through it, finds where the trouble begins, and suggests a plan toward the 2027 dates.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a lesson, and every syllabus sits under <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Everything is live, online and taught in English by mentors in India. WhatsApp is the fastest way to reach us.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Maths in Germany', links: [
        { href: '/online-math-tutor-germany', label: 'Online maths tutor' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/kangaroo-math-germany-practice', label: 'Känguru practice' },
        { href: '/math-olympiad-germany-preparation', label: 'Mathematik-Olympiade' }
      ] },
      { h4: 'Cologne and more', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/german-school-system-maths-and-computing-explained', label: 'German school system' },
        { href: '/math-tutor-cost-germany', label: 'Maths tutor cost' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '88.423 is eighty-eight thousand'
  },

  personalityCss: `
.ag-root.ag-enc .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-enc .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-enc .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-enc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-enc .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Ministerium für Schule und Bildung NRW, Standardsicherung (ZP10 Termine 2027, ZKE Termine 2027, Zentralabitur GOSt Termine 2027 and Anlage A); IQB (VERA, Abitur pool structure, operators); KMK Bildungsstandards Mathematik ESA/MSA; KMK Ferien 2026/2027; Einheitenzeitgesetz; Stadt Köln, Fahrrad Verkehrsdaten Köln 2022 via Open.NRW, Datenlizenz Deutschland Zero 2.0; all read 2 and 3 November 2026.',
    localProject: 'The Cologne bike-count task: an original Python project on the Stadt Köln monthly counts of 17 bike counters in 2022 that first misreads the German thousands point (88.423), then converts correctly to find Deutzer Brücke up 125.1 percent from January to August and Venloer Straße as the busiest counter (2,011,322); with a five-question practice set by Klasse on rounding, percentage change, mean against median and ratio. Lesson family: number formats, percentage change, mean and median.',
    requiredMentions: ['rad_koeln_2022.csv', 'Deutzer Brücke in Januar: 88.423', 'Deutzer Brücke January: 88423 August: 199040', 'Change: +125.1%', 'Busiest counter in 2022: Venloer Straße 2011322', 'Thursday 20 May; resit Thursday 3 June', 'Monday 31 May; resit Tuesday 8 June', '88.423 is eighty-eight thousand'],
    sources: [
      { claim: 'ZP10 2027 dates: German 11 May, English 13 May, maths 20 May (resit 3 June); start 9:00; marks 10 June; oral 18 to 29 June.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-10/termine/zentrale-pruefungen-10-termine-2027' },
      { claim: 'ZKE 2027: maths Monday 31 May, resit Tuesday 8 June; German 25 May.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentrale-klausuren-einfuehrungsphase/zke-termine' },
      { claim: 'NRW Abitur 2027: written 13 April to 5 May; maths 5 May; start 9:00; Q2 last day 19 March.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/termine/2027' },
      { claim: 'VERA-3 and VERA-8 2027 windows; not graded; Abitur pool structure.', url: 'https://www.iqb.hu-berlin.de/abitur/' },
      { claim: 'Stadt Köln bike counters 2022, 17 permanent counters, Datenlizenz Deutschland Zero 2.0.', url: 'https://ckan.govdata.de/dataset/fahrrad-verkehrsdaten-koln-2022' }
    ],
    rejectedClaims: [
      'A cause for the August fall at Universitätsstraße: the data does not say, so it is offered only as a hypothesis to test.',
      'Grade or exam-result promises: none made.',
      'Exact NRW hours for maths per grade: not read at a primary source, so none given.',
      'Naming Cologne schools as sources of students: refused.',
      'Any affiliation with the NRW ministry, the IQB or Stadt Köln: none.'
    ]
  }
};
