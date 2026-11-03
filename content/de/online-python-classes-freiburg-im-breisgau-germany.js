'use strict';
// Online Python classes in Freiburg im Breisgau (ag- city page, Germany cluster P6 row DE156, tier-2 shape online-python =
// live online explained, Python path). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; euro shown, USD charged.
// Spine: live online as a conversation about your code; the Python path; and Freiburg's bike-counter file, 653,041 rows,
// where the "all directions" row sits beside the "in" and "out" rows and a naive sum counts every bike twice.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, Baden-Württemberg page: "Mit dem Schuljahr 2025/2026 wird schulartübergreifend in der
//    Sekundarstufe I das Pflichtfach Informatik und Medienbildung eingeführt, wobei die Umsetzung zunächst in den
//    Jahrgangsstufen 5 und 6 erfolgt" (67); "auslaufende Profilfach IMP" (68); Gymnasium Oberstufe "mehrheitlich" grade 10
//    Einführungsphase, 11 and 12 Qualifikationsphase, G8 (61). National page: BW among four Länder meeting the 4-hour
//    short-term recommendation (91); BW among the three where "ungefähr jede zwölfte Person" takes Informatik (99).
//  - KMK: Sommerferien Baden-Württemberg 2027 "29.07. - 11.09." (257); FER2026_27 BW row: Weihnachten 23.12. - 09.01.
//    (raw src-pages/coding-classes-for-kids-cologne/kmk-fer2627/fe303dbf.txt lines 16 to 18).
//  - BWINF: Bundeswettbewerb Informatik round 1 1 September to 23 November 2026 (146).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Freiburg im Breisgau 237,460; Stuttgart 612,663; Karlsruhe
//    309,050; Baden-Württemberg 11,245,898.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Freiburg i. Br. (Erhebung: Garten- und Tiefbauamt Freiburg), "Fahrrad-Zählstellen Zeitreihe", FR.ITZ
//    dataset ID 3800 (https://fritz.freiburg.de/duva2dcat/dataset/de-bw-freiburg-fahrrad-zaehlstellen_zeitreihe), dataset
//    page "Lizenz http://dcat-ap.de/def/licenses/dl-by-de/2.0", "Letzte Änderung 14.07.2026", "Zeitbezug - Von 01.01.2015
//    00:00" "Bis 31.12.2025 00:00"; GovData copy (fahrrad-zahlstellen-zeitreihe) "Datenlizenz Deutschland Namensnennung
//    2.0". File content.csv downloaded 3 November 2026, 29,017,866 bytes, sha256 c5086f5efc94718b..., 653,041 data rows,
//    hourly, columns Datum;Stunde;Datetime;Fahrrad-Zählstelle;Anzahl Fahrräder;Fahrrad-Zählstelle Richtung (in, out, all);
//    Art der Nutzung (Fahrrad/Fußgänger); counters numbered 1 to 18, not named in the file; latest timestamp 2026-04-08
//    08:00:00. Raw copy and dataset page in src-pages/online-python-classes-freiburg-im-breisgau-germany/.
// Our own calculations (scratchpad de/w/T2/run/fre/v1.py, v2.py, python3 -I, Python 3.14.8):
//  v1: "Rows added up by direction code: {'3': 234431, '1': 118546, '2': 115885}", "Naive total for counter 5 in 2024:
//  468862". v2: "Hours with all three codes: 55131  where 3 is not 1 + 2: 0", counter 1 (code 3 only): 2015 2587770, 2019
//  2507586, 2024 2436346, 2025 2676857. Counter 1 complete years: 2016 2,570,415; 2017 2,601,300; 2018 2,710,305; 2020
//  2,458,973; 2021 2,343,945; 2022 2,652,770; 2023 2,675,823 (8,748 hours). 2025 weekday averages counter 1: 08:00 682,
//  17:00 713; weekend 08:00 124, 17:00 372.
// Lesson family: do not count the same thing twice; a total row inside a table must be checked, then used alone.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'totals = {}',
  'with open("freiburg_bikes.csv", encoding="utf-8-sig") as counts_file:',
  '    rows = csv.reader(counts_file, delimiter=";")',
  '    next(rows)                      # skip the header line',
  '    for row in rows:',
  '        year, counter, bikes = row[0][:4], row[3], row[4]',
  '        if counter == "5" and year == "2024" and bikes != "":',
  '            totals[row[5]] = totals.get(row[5], 0) + int(bikes)',
  '',
  'print("Rows added up by direction code:", totals)',
  'print("Naive total for counter 5 in 2024:", sum(totals.values()))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'by_hour = {}',
  'with open("freiburg_bikes.csv", encoding="utf-8-sig") as counts_file:',
  '    rows = csv.reader(counts_file, delimiter=";")',
  '    next(rows)',
  '    for row in rows:',
  '        if row[4] != "":',
  '            by_hour.setdefault((row[3], row[2]), {})[row[5]] = int(row[4])',
  '',
  'checked = broken = 0',
  'for codes in by_hour.values():',
  '    if "1" in codes and "2" in codes and "3" in codes:',
  '        checked += 1',
  '        if codes["3"] != codes["1"] + codes["2"]:',
  '            broken += 1',
  'print("Hours with all three codes:", checked, " where 3 is not 1 + 2:", broken)',
  '',
  'yearly = {}',
  'for (counter, stamp), codes in by_hour.items():',
  '    if counter == "1" and "3" in codes:',
  '        yearly[stamp[:4]] = yearly.get(stamp[:4], 0) + codes["3"]',
  'for year in ("2015", "2019", "2024", "2025"):',
  '    print("Counter 1,", year, ":", yearly[year])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Freiburg: online Python' },
  slug: 'online-python-classes-freiburg-im-breisgau-germany',
  code: 'pfb',
  accent: '#084465',
  accentRationale: 'Online Python classes, Freiburg im Breisgau: a deep Bächle blue #084465, after the little water channels along the old town streets; contrast 8.42 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-baden-wuerttemberg', name: 'Baden-Württemberg' }],
  routeLabel: 'Online Python classes in Freiburg im Breisgau',
  title: 'Online Python Classes in Freiburg: Live Lessons in English',
  description: 'Online Python classes in Freiburg im Breisgau, live in English for teens and adults: how live lessons work, the Python path, and a city bike-counter data project.',
  ogDescription: 'Live online Python in English for Freiburg im Breisgau: what you actually do in a live lesson, a four-stage path from first script to real data, Informatik in Baden-Württemberg, and a project on the city\'s 653,041-row bike-counter file where a naive sum counts every bike twice.',
  twitterDescription: 'Live Python lessons in English for Freiburg, with a project on the city\'s hourly bike counters since 2015.',
  pageName: 'Online Python Classes in Freiburg im Breisgau',
  webPageDescription: 'A guide for teenagers, adults and parents in Freiburg im Breisgau to learning Python live online in English, built on Gesellschaft für Informatik, KMK and BWINF sources and an original project on Stadt Freiburg\'s open bike-counter time series.',
  courseDescription: 'Live online Python classes in English for Freiburg learners from about 13 and adults: typed Python, data files and a project of their own, with one regular mentor, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Python in Freiburg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#lesson', label: 'A lesson' },
    { href: '#bikes', label: 'Bike data' },
    { href: '#stages', label: 'Stages' }
  ],
  eyebrow: 'Freiburg im Breisgau &middot; Python &middot; Live online, in English',
  h1: 'Online Python classes in Freiburg im Breisgau',
  lede: 'Freiburg counts its cyclists every hour, and publishes the counts. That file has more than six hundred thousand rows, and the first thing it teaches a new programmer is humility: add it up the obvious way and you count every bike twice. This page explains how our live online Python lessons in English work, the stages from a first script to a file that size, where Informatik stands in Baden-Württemberg\'s schools, and the bike-counter project in full.',
  secondaryCta: { href: '#bikes', label: 'See the bike project' },
  wa: 'Hello Modern Age Coders, I am in Freiburg and would like to learn Python live online in English. Could I book a free first lesson?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; one mentor who follows your code, in English',
  spec: [
    ['Who', 'From about 13, and adults'],
    ['What', 'Python 3, data files, projects'],
    ['How', 'Live video, shared screen'],
    ['Size', '15 to 20, or one to one'],
    ['Teachers', 'Mentors in India, English only'],
    ['First lesson', 'Free']
  ],
  capsuleQ: 'Straight answer',
  capsule: 'Modern Age Coders gives online Python classes for Freiburg im Breisgau as live video lessons in English. A mentor watches your shared screen as you write code, asks why, and helps the moment something breaks. Teenagers from about 13 and adults progress from first scripts to real data files and then a project they design. Classes run for 15 to 20 people or for one learner alone, and the mentor, the same each week, sets the speed and the English to suit you.',

  picks: {
    eyebrow: 'Starting courses',
    h2: 'Which Python course should a Freiburg learner pick?',
    lede: 'One for pupils, one for adults and university students, and one for anyone who already writes loops and wants to work with data.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'PFB / 01', title: 'Python for Teens', note: 'For school pupils from about 13. Building blocks first, then files and small projects, with every task checked live by the mentor.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PFB / 02', title: 'Adult Python, zero to confident', note: 'For students at Freiburg\'s universities and for working adults. Clear, organised Python that you can use on your own files.' },
      { course: 'data-analysis-mastery-course-college', code: 'PFB / 03', title: 'Data Analysis', note: 'For adults who want answers from data. Spreadsheets, SQL and Python together, with projects on large public files like the bike counters.' }
    ]
  },

  sections: [
    {
      id: 'lesson',
      eyebrow: 'What live means',
      h2: 'How does a live online Python lesson actually work?',
      lede: 'Think of it as sitting next to an experienced programmer who can see your screen, except the programmer is on a video call.',
      body: [
        { kind: 'two',
          leftH3: 'You drive',
          left: [
            'From the first lesson you write the code. The mentor watches your shared screen, and when something goes wrong asks a question rather than taking over: what did you expect this line to do? What does the error say?',
            'It feels slower than watching a video. It is much faster at the one thing that matters, which is being able to do it alone afterwards.'
          ],
          rightH3: 'The mentor steers',
          right: [
            'The mentor chooses problems a little above what you can already do, and spots habits early, such as copying code you do not understand or ignoring the last line of an error message.',
            'In a group, the mentor follows several screens and stops the class when one learner\'s mistake will help everyone. One to one, the whole hour is yours.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'What you need for live online Python, and what you do not (ours)', head: ['Need', 'Do not need'], rows: [
          ['A laptop or desktop with a real keyboard', 'An expensive computer: any recent machine works'],
          ['A microphone, a webcam if you like', 'Paid software: Python and the editor are free'],
          ['A stable internet connection', 'Prior programming knowledge'],
          ['Two hours a week, plus a little practice', 'Fluent English: the mentor adapts']
        ] },
        { kind: 'source', html: 'Our own summary of how Modern Age Coders teaches. Lessons are live, never pre-recorded, and taught in English by mentors based in India.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language',
      h2: 'Do you also teach Python in German?',
      lede: 'No. Our lessons are in English only. For Python, that is less of a hurdle than it sounds.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Clear about it', p: 'All lessons are taught in English by mentors who work from India. There is no German-speaking option, and we say so before anyone books.' },
          { h3: 'Fitted to you', p: 'Mentors slow down, reword, and repeat without impatience, and adjust to your accent over the first lessons. A German word in the middle of a sentence is fine.' },
          { h3: 'Code is English already', p: 'Every Python keyword is an English word, and so is every error it prints. Learning in English means fewer things to translate in your head.' }
        ] },
        { kind: 'p', mt: true, html: 'Freiburg is a university city close to France and Switzerland, and many learners here already study or work in English. School pupils gain a weekly hour of spoken technical English on top of the programming.' }
      ]
    },
    {
      id: 'stages',
      eyebrow: 'The path',
      h2: 'What are the stages from first script to real data?',
      lede: 'Four stages, each ending with something you have built and can explain. Speeds vary, and the mentor tells you honestly where you are.',
      body: [
        { kind: 'ol', items: [
          '<strong>Talk to Python.</strong> Printing, variables, input, if and else. You finish with a short quiz program that scores the answers.',
          '<strong>Repeat and organise.</strong> Loops, lists, dictionaries and functions. You finish with a game or a tool split into small functions you can test one at a time.',
          '<strong>Read real files.</strong> CSV files, counting, grouping, and checking your own totals. You finish with a counted answer from a large public dataset, like Freiburg\'s bike counters.',
          '<strong>Make it yours.</strong> You choose a question, gather data, write the program and explain both the answer and how far to trust it.'
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'The four stages at two lessons a week (our planning figures)', head: ['Stage', 'Typical span', 'Proof you can do it'], rows: [
          ['Talk to Python', '4 to 6 weeks', 'A quiz that keeps score'],
          ['Repeat and organise', '6 to 8 weeks', 'A program of tested functions'],
          ['Read real files', '8 to 10 weeks', 'A checked total from a public file'],
          ['Make it yours', 'Open', 'A project with its limits written down']
        ] },
        { kind: 'source', html: 'Spans are ours and not a promise. Anyone who already knows a bit begins wherever the trial lesson shows they should.' }
      ]
    },
    {
      id: 'bikes',
      tint: 'tint',
      eyebrow: 'A real Freiburg project',
      h2: 'How many bikes passed Freiburg\'s counters, and how do you avoid counting them twice?',
      lede: 'Stadt Freiburg publishes the hourly counts of its bicycle counters as one long file under Datenlizenz Deutschland Namensnennung 2.0. Our Stage 3 learners use it to learn that a table can contain its own totals, and that adding everything is then wrong.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The download has 653,041 rows. Each row is one hour at one counter: the date, the hour, a counter number from 1 to 18, the number of bikes, a direction code and a usage code. The file does not name the counters, so we refer to them by number.',
            'The column for direction is headed "Fahrrad-Zählstelle Richtung (in, out, all)", and the values are 1, 2 and 3. The dataset page says the series runs from 2015 to the end of 2025; the file we downloaded on 3 November 2026 already reaches 8 April 2026.'
          ],
          rightH3: 'The trap',
          right: [
            'Some counters have rows for code 1, code 2 and code 3 in the same hour. If 1 is in, 2 is out and 3 is all, then the code 3 row already contains the other two, and summing the whole file counts each bike twice.',
            'That "if" needs checking. The first program shows the problem; the second checks the guess on every hour in the file before relying on it.'
          ] },
        { kind: 'code', label: 'Version 1: add up one counter, the obvious way', lang: 'Python', code: V1, note: 'It prints: <code>Rows added up by direction code: {\'3\': 234431, \'1\': 118546, \'2\': 115885}</code> and <code>Naive total for counter 5 in 2024: 468862</code>.' },
        { kind: 'p', mt: true, html: 'Look at the three numbers: 118,546 plus 115,885 is 234,431, exactly the code 3 figure. The naive total of 468,862 is precisely twice the real number of bikes. A learner who reported it would have doubled Freiburg\'s cycling at that counter with one line of code.' },
        { kind: 'code', label: 'Version 2: check the rule everywhere, then use only code 3', lang: 'Python', code: V2, note: 'It prints: <code>Hours with all three codes: 55131  where 3 is not 1 + 2: 0</code>, then <code>Counter 1, 2015 : 2587770</code>, <code>Counter 1, 2019 : 2507586</code>, <code>Counter 1, 2024 : 2436346</code> and <code>Counter 1, 2025 : 2676857</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Counter 1, bikes per year from code 3 rows only (our calculation)', head: ['Year', 'Bikes', 'Hours with a count'], rows: [
          ['2015', '2,587,770', '8,760'],
          ['2018', '2,710,305', '8,760'],
          ['2021', '2,343,945', '8,760'],
          ['2023', '2,675,823', '8,748'],
          ['2025', '2,676,857', '8,759']
        ] },
        { kind: 'source', html: 'Data: Stadt Freiburg i. Br., Garten- und Tiefbauamt, Fahrrad-Zählstellen Zeitreihe (FR.ITZ dataset 3800), licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. The reading of codes 1, 2 and 3 as in, out and all is ours, from the column heading and the check above. Totals are ours.' },
        { kind: 'p', mt: true, html: 'In all 55,131 hours that have the three codes, code 3 equals code 1 plus code 2 without a single exception, so the guess holds and the safe rule is: use code 3 only. Counter 1, which has run since 2015, then gives between about 2.3 and 2.7 million bikes a year, with 2018 the busiest of the years shown and 2021 the quietest. Two smaller checks belong in any write-up: 2023 has 8,748 counted hours instead of 8,760, so twelve are missing, and the file reaches further than its description says. Both are worth a sentence, not a panic.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Reproduce it.</strong> Run Version 1 for counter 10 instead of 5. Do the numbers show the same pattern?',
          '<strong>Commuter rhythm.</strong> For counter 1 in 2025 we found weekday averages of 682 bikes at 08:00 and 713 at 17:00, but 124 and 372 at weekends. Write the code that reproduces those four numbers.',
          '<strong>Missing hours.</strong> Find the twelve hours of 2023 with no count at counter 1. Are they together or spread out?',
          '<strong>Explain it.</strong> In four sentences for a non-programmer, say why the naive total was wrong and how you proved the fix.'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'School in Baden-Württemberg',
      h2: 'How is Informatik changing at Baden-Württemberg schools?',
      lede: 'Quickly. A new compulsory subject started in 2025/26 and grows by a year at a time, while few pupils carry Informatik into the Abitur.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in Baden-Württemberg, as the Informatik-Monitor 2026/27 records it', head: ['Topic', 'What the monitor says'], rows: [
          ['New subject', 'Informatik und Medienbildung, compulsory across Sekundarstufe I school types from 2025/26, starting in grades 5 and 6'],
          ['Older profile', 'The profile subject IMP (Informatik, Mathematik, Physik) is being phased out'],
          ['Hours', 'One of four Länder that already give four compulsory hours, the near-term target'],
          ['Oberstufe', 'At most Gymnasien grade 10 is the Einführungsphase and grades 11 and 12 the Qualifikationsphase'],
          ['Abitur uptake', 'About one pupil in twelve takes Informatik in the Oberstufe']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Baden-Württemberg page and national overview, read 2 November 2026. We work next to the school subject, not instead of it: grades come from school, and Modern Age Coders is independent of the Land and its schools.' },
        { kind: 'p', mt: true, html: 'For a Freiburg pupil in grade 7 today, that means a compulsory subject has only just begun and is still being built up year by year. Outside lessons in Python give such a pupil depth the timetable cannot yet offer, and give an Oberstufe pupil practice for writing and reading real programs. With entries accepted from 1 September to 23 November 2026, round one of the Bundeswettbewerb Informatik is a good target for Stage 2 or 3 learners; we practise with our own problems only.' },
        { kind: 'p', html: 'Baden-Württemberg\'s Christmas holidays run from 23 December 2026 to 9 January 2027 and its summer holidays from 29 July to 11 September 2027, later than most Länder, according to the KMK. Lessons continue through the holidays for anyone who wants them.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Times',
      h2: 'When could my Python lessons be, in Freiburg time?',
      lede: 'India is ahead of Freiburg, so Freiburg afternoons and early evenings fall in the mentor\'s evening. The rows show the gap, not set batches.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample slots: Freiburg and India', head: ['Freiburg', 'India while Germany is on winter time', 'India once summer time starts on 28 March 2027'], rows: [
          ['16:20', '20:50', '19:50'],
          ['18:10', '22:40', '21:40'],
          ['Saturday 13:00', '17:30', '16:30']
        ] },
        { kind: 'source', html: 'Germany\'s legal time (Einheitenzeitgesetz) is MEZ, UTC+1, in winter and MESZ, UTC+2, in summer; this autumn\'s change was on 25 October 2026 and the spring change is on 28 March 2027. India keeps UTC+5:30 all year: four and a half hours ahead of Freiburg now, three and a half from late March.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Checkpoints',
    h2: 'How will I see my progress?',
    lede: 'Five checkpoints of ours, each one something you can show.',
    table: { caption: 'Five checkpoints we use with every Python learner', head: ['Checkpoint', 'Typically around', 'What you can show'], rows: [
      ['First run', 'Week 1', 'Write and run a script on your own computer'],
      ['Choices', 'Week 4', 'Branch with if, elif and else'],
      ['Functions', 'Week 10', 'Split a program into small, testable functions'],
      ['Big files', 'Week 18', 'Read a file of hundreds of thousands of rows'],
      ['Self-check', 'Week 22', 'Prove your total is right before reporting it']
    ] },
    left: { h3: 'For pupils and parents', ps: [
      'Self-check is the bike project. It is also what teachers mean by "show your working" in Informatik.',
      'Parents of pupils receive short notes after each checkpoint.'
    ] },
    right: { h3: 'For adults', ps: [
      'Adults with some spreadsheet experience often reach Big files in three to four months.',
      'If work gets in the way, the plan bends; the mentor picks up where you are.'
    ] }
  },

  catalogue: {
    eyebrow: 'More options',
    h2: 'Nine more courses for Freiburg learners',
    lede: 'The same live format in English, the same regular mentor.',
    bands: [
      { num: 'I', h3: 'School-age', sub: 'Ages 9 to 18', courses: [
        { code: 'PFB / SCH / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'For younger siblings, typed Python from 9.' },
        { code: 'PFB / SCH / 02', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik companion', blurb: 'Help beside the new compulsory subject.' },
        { code: 'PFB / SCH / 03', slug: 'informatik-abitur-course-java-python', title: 'Oberstufe Informatik', blurb: 'Abitur-style Java and Python, in English.' }
      ] },
      { num: 'II', h3: 'Data and maths', sub: 'Teens and adults', courses: [
        { code: 'PFB / DATA / 01', slug: 'data-science-course-for-teens-python-data', title: 'Teen data projects', blurb: 'Public data, charts and first models.' },
        { code: 'PFB / DATA / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The tools for honest totals and averages.' },
        { code: 'PFB / DATA / 03', slug: 'data-science-complete-masterclass-college', title: 'Data science course', blurb: 'Python, statistics and machine learning.' }
      ] },
      { num: 'III', h3: 'Building', sub: 'Teens and adults', courses: [
        { code: 'PFB / BUILD / 01', slug: 'python-web-development-django-flask-course', title: 'Python on the web', blurb: 'From a first route to a site people can use.' },
        { code: 'PFB / BUILD / 02', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP', blurb: 'Towards the Python Institute certificates.' },
        { code: 'PFB / BUILD / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Version control from the first commit.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Rhythm',
    h2: 'How the weekly live Python lessons fit a Freiburg week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoon', l: 'After school for pupils.' },
      { time: 'Evening', l: 'After lectures or work.' },
      { time: 'Saturday', l: 'A midday slot for anyone.' }
    ],
    cells: [
      { h3: 'Two per week', p: 'Live lessons of about an hour.' },
      { h3: 'Your mentor', p: 'The same one every week.' },
      { h3: 'Your keyboard', p: 'You type; the mentor guides.' },
      { h3: 'Real files', p: 'Public data, not toy lists.' },
      { h3: 'Checked work', p: 'Homework reviewed live.' },
      { h3: 'Group or solo', p: '15 to 20 learners, or one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Projects from our students, unpolished and real. The <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'What students and parents said about us on Google, as written.',

  fees: {
    h2: 'Fees for online Python in Freiburg',
    lede: 'You pay per month for eight live lessons. Here we list the fee in euro, converted with the European Central Bank reference rate; the actual charge is in US dollars and your bank changes it into euro, so the booked amount may be a little higher or lower.',
    free: ['A free first lesson', 'A script written live', 'No card'],
    group: ['15 to 20 learners at a similar stage', 'A regular mentor', 'Two lessons weekly', 'Monthly, cancel anytime'],
    one: ['You and one mentor', 'Your pace, your data', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Freiburg asks',
    h2: 'Online Python classes in Freiburg im Breisgau: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons happen live and solely in English; the mentors sit in India and tune their speed and wording to each learner and their accent. As Python itself is written in English words, nothing gets lost between the explanation and the code.' },
      { q: 'Is this a recorded course?', a: 'No. All lessons are live video calls. The mentor sees your shared screen, follows your code as you write it, answers straight away and reviews your homework in the next lesson.' },
      { q: 'Do I need to know any Python?', a: 'No. The first stage starts from zero. If you already know some, the free first lesson places you at the right stage.' },
      { q: 'What lesson times are possible?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Freiburg pupils often choose late afternoons, students and adults the evening or Saturday.' },
      { q: 'Does it help with the new school subject in Baden-Württemberg?', a: 'It can add depth. Informatik und Medienbildung became compulsory in Sekundarstufe I from 2025/26, starting in grades 5 and 6. We teach alongside school; the school decides marks and the Abitur.' },
      { q: 'Are university students and adults welcome?', a: 'Yes. The Python Masterclass and the Data Analysis course are built for adults and students, and one-to-one lessons can fit around lectures, shifts or family.' },
      { q: 'How many learners are in a group?', a: '15 to 20 at a similar stage. With the one-to-one plan you have two private lessons a week at agreed times.' },
      { q: 'What currency do I pay in?', a: 'The monthly charge is made in dollars (USD). For orientation we print euro figures based on the ECB reference rate; your bank\'s own exchange decides the final euro debit. Your first lesson is free of charge.' },
      { q: 'What is the bike-counter project?', a: 'A teaching project we wrote around Stadt Freiburg\'s open hourly bike counts. Learners find that adding every row counts bikes twice, because the all-directions row already contains the in and out rows, prove the rule on 55,131 hours, and then total counter 1 by year.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Next reads for Freiburg and the rest of the Land.',
    items: [
      { href: '/coding-classes-in-baden-wuerttemberg', label: 'Coding classes in Baden-Württemberg', p: 'Our page for the Land.' },
      { href: '/informatik-abitur-baden-wuerttemberg', label: 'Informatik Abitur BW', p: 'The exam subject in this Land.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'Every Python course we offer.' },
      { href: '/python-and-dsa-for-international-students-germany', label: 'Python and DSA', p: 'For international students.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults', p: 'Starting as a grown-up.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'The live format, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free live Python lesson',
    lede: 'In the free lesson you write your first lines of Python while the mentor watches, then agree which stage and course fit. No installation beforehand; that is the first thing you do together.',
    readFirst: 'Want the details first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or open a <a class="ag-inline-link" href="/courses">course syllabus</a>.',
    note: 'Live, online, in English, with India-based mentors. A WhatsApp message is the quickest route to us.',
    formNote: 'Free, no card needed.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-course-germany', label: 'Python course in Germany' },
        { href: '/coding-classes-for-teens-germany', label: 'Coding for teens' },
        { href: '/online-coding-course-for-career-changers-germany', label: 'Career changers' },
        { href: '/learn-coding-in-english-germany', label: 'Coding in English' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-baden-wuerttemberg', label: 'Baden-Württemberg' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Never count the same bike twice'
  },

  personalityCss: `
.ag-root.ag-pfb .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-pfb .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-pfb .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-pfb .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-pfb .ag-steps li { margin-bottom: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Baden-Württemberg page and national overview); KMK Ferien 2026/2027 and Sommerferienregelung; Bundesweite Informatikwettbewerbe 2026 dates; Einheitenzeitgesetz; Destatis GV-ISys 31.12.2024; Stadt Freiburg i. Br., Fahrrad-Zählstellen Zeitreihe, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'The double-counted bike: an original Python project on Freiburg\'s 653,041-row hourly bike-counter file, where summing every row for counter 5 in 2024 gives 468,862, exactly twice the real figure, because direction code 3 equals code 1 plus code 2 in all 55,131 hours that have all three; counter 1 is then totalled by year from code 3 only. Lesson family: do not count the same thing twice.',
    requiredMentions: ['freiburg_bikes.csv', 'Naive total for counter 5 in 2024: 468862', 'Hours with all three codes: 55131  where 3 is not 1 + 2: 0', 'Counter 1, 2025 : 2676857', '653,041', 'Counter 1, 2015 : 2587770', 'precisely twice the real number of bikes', 'Never count the same bike twice'],
    sources: [
      { claim: 'Baden-Württemberg Informatik und Medienbildung from 2025/26; IMP phasing out; Oberstufe.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/baden-wuerttemberg' },
      { claim: 'BW meets four hours; one in twelve take Informatik.', url: 'https://informatik-monitor.de/' },
      { claim: 'Baden-Württemberg holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Bundeswettbewerb Informatik round 1 dates.', url: 'https://bwinf.de/bundeswettbewerb/' },
      { claim: 'Freiburg bike-counter series and licence.', url: 'https://fritz.freiburg.de/duva2dcat/dataset/de-bw-freiburg-fahrrad-zaehlstellen_zeitreihe' }
    ],
    rejectedClaims: [
      'Names or locations of the numbered counters: not in the file, so not given.',
      'Reasons for year-to-year changes at counter 1: not in the data, so none given.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with Stadt Freiburg, the Land or BWINF: none.'
    ]
  }
};
