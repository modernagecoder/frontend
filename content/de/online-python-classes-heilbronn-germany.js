'use strict';
// Online Python classes in Heilbronn (ag- city page, Germany cluster P6 row DE186, tier-2 shape online-python = live
// online explained, Python path).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: what "live online" means minute by minute, then one Python habit learned on the city's market list: a column
// that looks like an ID is not always unique, and a dictionary silently forgets.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, Baden-Württemberg page: "Mit dem Schuljahr 2025/2026 wird schulartübergreifend in der
//    Sekundarstufe I das Pflichtfach Informatik und Medienbildung eingeführt, wobei die Umsetzung zunächst in den
//    Jahrgangsstufen 5 und 6 erfolgt" (67); IMP "auslaufend" (68). National page: BW among four Länder meeting the
//    short-term recommendation of 4 compulsory hours (91); BW, Niedersachsen and Bremen: "ungefähr jede zwölfte Person"
//    takes Informatik in the Oberstufe (99).
//  - KMK Ferien 2026/2027 (raw src-pages/coding-classes-in-land-bremen/kmk-fer2627/fe303dbf.txt), BW row:
//    "Baden-Württemberg (4) 26.10. - 30.10." / "31.10. 23.12. - 09.01. -- 25.03." / "30.03. - 03.04. 18.05. - 29.05.
//    29.07. - 11.09."; "Stand: 09.10.2025".
//  - Python tutorial, 5. Data Structures (docs.python.org/3/tutorial/datastructures.html, fetched 3 Nov 2026, raw copy in
//    src-pages): "If you store using a key that is already in use, the old value associated with that key is forgotten."
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Heilbronn 131,986; Stuttgart 612,663; Mannheim 318,035;
//    Heidelberg 155,756; Baden-Württemberg 11,245,898.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Heilbronn, "Heilbronner Wochenmarkt", opendata.heilbronn.de/dataset/heilbronner-wochenmarkt (dataset page:
//    Herausgeber Stadt Heilbronn, Lizenz CC BY 4.0, Veröffentlichungsdatum 2022-03-09; API license_id "CC BY 4.0"),
//    resource "Wochenmarkthändler und ihre Markttage 2022", Wochenmarkt_2022_0301.csv, downloaded 3 November 2026, 1,717
//    bytes, sha256 2115925c...2cc52a583, semicolons, columns STANDORT;KATEGORIE;NAME;MO;DI;MI;DO;FR;SA;SO, 31 data rows.
//    One row lists a visiting service, not a market trader, and is removed before class (health-related, not shown):
//    our class file wochenmarkt_2022.csv has 30 rows.
// Our own calculations (scratchpad de/w/T6/heilbronn/v1.py, v2.py, v3.py, python3 -I):
//  v1: "Rows read: 30", "Stalls in the dictionary: 28", "Stall 18 belongs to: Olivenoel, Tee und Honig aus Kreta".
//  v1+v2: "Stall numbers used more than once: {'18': 3}".
//  v1+v2+v3: "Traders at stall 18: 3"; MO 0, DI 13, MI 0, DO 19, FR 0, SA 25, SO 0.
//  Also: 11 traders on all three market days; categories FEINKOST UND SONSTIGES 8, FLEISCH, WURST & KaeSE 8,
//  GEMueSE UND OBST 6, BACKWAREN 3, SAISONALES 2, BLUMEN UND PFLANZEN 2, FISCH 1; stall labels include 13a and 28a;
//  numbers 4 and 5 do not appear.
// Lesson family: a column that looks like an ID may not be unique; count duplicates before you use it as a dictionary key
// (a dict silently overwrites).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'rows = []',
  'stalls = {}',
  'with open("wochenmarkt_2022.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        rows.append(row)',
  '        stalls[row["STANDORT"]] = row["NAME"]',
  '',
  'print("Rows read:", len(rows))',
  'print("Stalls in the dictionary:", len(stalls))',
  'print("Stall 18 belongs to:", stalls["18"])'
].join('\n');

const V2 = [
  'from collections import Counter',
  '',
  'uses = Counter(row["STANDORT"] for row in rows)',
  'shared = {stall: n for stall, n in uses.items() if n > 1}',
  'print("Stall numbers used more than once:", shared)'
].join('\n');

const V3 = [
  'traders = {}',
  'for row in rows:',
  '    traders.setdefault(row["STANDORT"], []).append(row["NAME"].strip())',
  '',
  'print("Traders at stall 18:", len(traders["18"]))',
  'for day in ["MO", "DI", "MI", "DO", "FR", "SA", "SO"]:',
  '    print(day, sum(1 for row in rows if row[day] == "1"))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Heilbronn: online Python' },
  slug: 'online-python-classes-heilbronn-germany',
  code: 'hep',
  accent: '#944000',
  accentRationale: 'Online Python in Heilbronn: a burnt orange #944000 for the red Neckar sandstone of the Kilianskirche tower; contrast 5.70 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-baden-wuerttemberg', name: 'Baden-Württemberg' }],
  routeLabel: 'Online Python classes in Heilbronn',
  title: 'Online Python Classes in Heilbronn: Live, in English',
  description: 'Online Python classes in Heilbronn, live in English for children, teens and adults: how a lesson runs, the Python path, BW Informatik and a market data project.',
  ogDescription: 'Live online Python lessons in English for Heilbronn learners: what happens on screen in a class, the order of the Python path, and a project on the city\'s own Wochenmarkt list where a dictionary quietly loses two traders.',
  twitterDescription: 'Live online Python for Heilbronn, in English, with a project on the city\'s market list.',
  pageName: 'Online Python Classes in Heilbronn',
  webPageDescription: 'A guide for Heilbronn learners and parents to live online Python classes in English: how a lesson is run over video, the path from first program to real data, how Python relates to the new compulsory Informatik und Medienbildung in Baden-Württemberg, and an original project on Stadt Heilbronn\'s Wochenmarkt open data.',
  courseDescription: 'Live online Python classes in English for Heilbronn learners from age 9 to adult, taught over video with shared code, in classes of fifteen to twenty or privately, with a regular mentor who matches the learner\'s pace.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Heilbronn, Python',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#online', label: 'A lesson' },
    { href: '#markt', label: 'Market data' },
    { href: '#path', label: 'Path' },
    { href: '#zeit', label: 'Times' }
  ],
  eyebrow: 'Heilbronn &middot; Python &middot; Live online lessons',
  h1: 'Online Python classes in Heilbronn',
  lede: '"Online" can mean a video you watch alone or a teacher you talk to. Ours are the second kind: a live mentor, a shared screen and your own keyboard, every lesson. This page shows what happens in one of those lessons, the order in which Python is learned, how it sits beside the new compulsory Informatik subject in Baden-Württemberg, and a project on Heilbronn\'s own market list in which a perfectly ordinary Python dictionary loses two traders without a word of warning.',
  secondaryCta: { href: '#markt', label: 'Open the market project' },
  wa: 'Hello Modern Age Coders, I am in Heilbronn and interested in live online Python classes in English. Could we arrange a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ learners worldwide &middot; a real mentor in every Python lesson',
  spec: [
    ['Format', 'Live video, shared code'],
    ['Language', 'Python 3'],
    ['Ages', '9 to 12, teens, adults'],
    ['Class', '15 to 20, or private'],
    ['Lessons', 'Two a week, one hour each'],
    ['Trial', 'First class free']
  ],
  capsuleQ: 'What this is',
  capsule: 'Online Python classes for Heilbronn at Modern Age Coders are live video lessons in English: a mentor and the learner share code on screen, the learner types every line, and questions are answered on the spot. Children from about 9, teenagers and adults follow the same Python path at their own speed, either in a class of fifteen to twenty or privately, with a mentor who matches their pace and accent.',

  picks: {
    eyebrow: 'Three Python starts',
    h2: 'Which Python course suits a Heilbronn learner?',
    lede: 'The same language at three ages. The trial lesson settles which one fits.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'HEP / 01', title: 'Python and AI for Kids', note: 'Ages 9 to 12. Typed Python from lesson one: drawings, games, lists and small data files, with the mentor beside them on screen.' },
      { course: 'python-complete-masterclass-teens', code: 'HEP / 02', title: 'Python for Teens', note: 'Ages 13 to 18. From variables to files, functions and dictionaries, then projects on real open data like the Heilbronn market list.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'HEP / 03', title: 'Python from Zero to Advanced', note: 'Adults and students. A complete course for beginners who want Python for work, study or a change of direction.' }
    ]
  },

  sections: [
    {
      id: 'online',
      eyebrow: 'Live online, explained',
      h2: 'What actually happens in a live online Python lesson?',
      lede: 'Nothing is pre-recorded. Here is a typical hour, step by step, as a Heilbronn learner would see it.',
      body: [
        { kind: 'ol', items: [
          '<strong>Join the call.</strong> A video link opens in the browser. The learner sees the mentor\'s face and the mentor sees the learner\'s screen once it is shared. No special software is needed beyond a browser and a free code editor we help set up in the first lesson.',
          '<strong>Recap in two minutes.</strong> The mentor asks what the last program did, in the learner\'s own words. That small spoken summary is how a mentor spots a gap before it grows.',
          '<strong>One new idea.</strong> A short demonstration of a single idea, such as a dictionary, typed live on the mentor\'s screen with the learner predicting each output before it appears.',
          '<strong>The learner drives.</strong> For most of the hour the learner types and the mentor watches, asks questions and points, but does not take the keyboard. Errors are read aloud together, from the last line up.',
          '<strong>A real file.</strong> Older learners try the idea on real data, often German open data like the market list below, because real files are messier than textbook ones.',
          '<strong>Wrap up.</strong> The learner explains what changed and saves the program. A short practice task follows, small enough to finish before the next lesson.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What you need at home',
          left: [
            'A laptop or desktop computer with a keyboard, a stable internet connection and a quiet corner. A tablet works for Scratch but not for typed Python. Headphones help younger children concentrate.',
            'Parents do not need to know Python. For children under 12 we ask that an adult is nearby for the first few lessons, mostly to help with the screen sharing.'
          ],
          rightH3: 'Why live beats a video course for most learners',
          right: [
            'A recorded course cannot see that a learner has misread an error message. A mentor can, within seconds, and that is where most beginners otherwise give up.',
            'Live classes also set a rhythm. Two fixed lessons a week keep a learner moving through the dull middle part of learning a language, where many self-taught learners stop.'
          ] },
        { kind: 'p', mt: true, html: 'All lessons are taught in English, by mentors based in India. Python itself is written in English words such as print, for and while, so a learner in Heilbronn who studies it in English is reading the language the way it is written.' }
      ]
    },
    {
      id: 'markt',
      tint: 'tint',
      eyebrow: 'A Heilbronn data project',
      h2: 'Why does a Python dictionary lose traders from the Heilbronn market list?',
      lede: 'Because one stall number is shared, and a dictionary keeps only one value per key. Stadt Heilbronn publishes its weekly market list as open data under CC BY 4.0, and our learners use it to discover that rule the memorable way.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The dataset is called "Heilbronner Wochenmarkt" on the city\'s open data portal, published on 9 March 2022, with a list of market traders and their market days dated 1 March 2022. We downloaded it on 3 November 2026: 1,717 bytes, semicolon separated, one row per trader.',
            'Each row has a stall number (STANDORT), a category, the trader\'s name and seven columns MO to SO with a 1 on each day the trader comes. One row describes a visiting service rather than a trader; we take it out before class, which leaves 30 rows in our file wochenmarkt_2022.csv.'
          ],
          rightH3: 'The task',
          right: [
            'The learner wants to look up any trader by stall number, so a dictionary is the natural choice: the stall as the key, the name as the value. The first program builds it and prints how many stalls it holds.',
            'Before running it, the learner writes down a prediction. Almost everyone predicts 30, one entry per row. The program disagrees.'
          ] },
        { kind: 'code', label: 'Version 1: one dictionary entry per stall', lang: 'Python', code: V1, note: 'It prints: <code>Rows read: 30</code>, <code>Stalls in the dictionary: 28</code> and <code>Stall 18 belongs to: Olivenoel, Tee und Honig aus Kreta</code>.' },
        { kind: 'p', mt: true, html: 'Thirty rows went in and 28 entries came out. No error, no warning. The Python tutorial explains why in one sentence: "If you store using a key that is already in use, the old value associated with that key is forgotten." Somewhere in the file a stall number appears more than once, and each new trader quietly replaced the one before. Version 2 counts every stall number before trusting it as a key.' },
        { kind: 'code', label: 'Version 2: count the keys first', lang: 'Python', code: V2, note: 'Run after Version 1, it prints: <code>Stall numbers used more than once: {\'18\': 3}</code>.' },
        { kind: 'p', mt: true, html: 'Stall 18 is home to three different traders, so the dictionary kept only the last one read and forgot two. The cure is to store a list of names for each stall instead of a single name. Version 3 does that, then answers a question a market visitor might actually ask: how many traders come on each day of the week?' },
        { kind: 'code', label: 'Version 3: a list per stall, then count by day', lang: 'Python', code: V3, note: 'Run after Versions 1 and 2, it prints <code>Traders at stall 18: 3</code>, then one line per day: <code>MO 0</code>, <code>DI 13</code>, <code>MI 0</code>, <code>DO 19</code>, <code>FR 0</code>, <code>SA 25</code>, <code>SO 0</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Traders per market day on the Heilbronn list of 1 March 2022 (our count, 30 rows)', head: ['Day', 'Traders listed'], rows: [
          ['Tuesday (DI)', '13'],
          ['Thursday (DO)', '19'],
          ['Saturday (SA)', '25'],
          ['Monday, Wednesday, Friday, Sunday', '0']
        ] },
        { kind: 'source', html: 'Data: Stadt Heilbronn, Heilbronner Wochenmarkt, resource "Wochenmarkthändler und ihre Markttage 2022", licence CC BY 4.0, downloaded 3 November 2026. Counts are our own, from our 30-row class file. Eleven traders are listed for all three market days. The list dates from 2022, so it describes that market, not today\'s.' },
        { kind: 'p', mt: true, html: 'The file has more surprises for sharp eyes, and each one is a small lesson. Stall labels include 13a and 28a, so the stall column is text, not a number, and sorting it naively puts 13a in an odd place. Numbers 4 and 5 never appear. One name starts with a space. Umlauts are written out as ue and ae, and the category for fruit and vegetables is spelled GEMueSE UND OBST, half in capitals. None of this is wrong; it is simply what real files look like.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12.</strong> Run Version 1, then find stall 18 in the file by eye. Who are the three traders, and which one did the dictionary keep?',
          '<strong>Teenagers.</strong> Sort the stall labels so that 13a comes straight after 13 and 28a after 28. Hint: split each label into its number and its letter first.',
          '<strong>Adults.</strong> Write a function that takes any CSV file and a column name and reports whether that column could safely be a dictionary key. Test it on STANDORT and on NAME.'
        ] }
      ]
    },
    {
      id: 'path',
      eyebrow: 'The Python path',
      h2: 'How long does it take to learn Python online?',
      lede: 'Months, not weeks, and the order matters more than the speed. These are our own stages, used for every age; children take longer at each stage than adults.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our Python path, with typical lesson counts at two lessons a week', head: ['Stage', 'What the learner can do', 'Teen or adult, typical lessons', 'Child 9 to 12, typical lessons'], rows: [
          ['1. First programs', 'print, input, variables, simple arithmetic', '4 to 6', '8 to 10'],
          ['2. Decisions and loops', 'if, while and for, small games', '8 to 10', '12 to 16'],
          ['3. Collections', 'lists and dictionaries, and when each fits', '8 to 10', '14 to 18'],
          ['4. Files', 'read a CSV file, check it, count with it', '6 to 8', '10 to 14'],
          ['5. Functions and tests', 'split a program into tested pieces', '8 to 12', 'Usually after 12'],
          ['6. Projects', 'a project on real data, explained to others', 'Ongoing', 'Ongoing']
        ] },
        { kind: 'source', html: 'Our own planning figures from teaching Python live online since 2020, not a promise; every learner is different. The market project above belongs to stages 3 and 4.' },
        { kind: 'p', mt: true, html: 'The commonest mistake self-taught learners make is to rush stage 3. Lists and dictionaries look simple, but choosing between them, and knowing what each will silently do with duplicates, is exactly what the market file tests. We spend time there on purpose.' }
      ]
    },
    {
      id: 'bw',
      eyebrow: 'Schools in Baden-Württemberg',
      h2: 'Does Python come up in Informatik at schools in Heilbronn?',
      lede: 'Informatik is now compulsory in Baden-Württemberg from grade 5, but it starts with the basics and grows year by year. The Gesellschaft für Informatik records the details for 2026/27.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in Baden-Württemberg, school year 2026/27', head: ['Topic', 'What the Informatik-Monitor 2026/27 records'], rows: [
          ['New compulsory subject', 'Informatik und Medienbildung, across all Sek I school types from 2025/26'],
          ['First grades', 'Started in grades 5 and 6, then growing year by year'],
          ['National comparison', 'One of four Länder meeting the short-term goal of four compulsory hours'],
          ['Older profile subject', 'IMP (Informatik, Mathematik, Physik) is being phased out'],
          ['Oberstufe', 'Only about one pupil in twelve takes Informatik, among the lowest shares in Germany']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, national overview and Baden-Württemberg page, read on 2 November 2026. Its words for the new subject: "Pflichtfach Informatik und Medienbildung", introduced "mit dem Schuljahr 2025/2026".' },
        { kind: 'p', mt: true, html: 'For a Heilbronn family this means two things. Younger pupils will meet computing at school sooner than their older siblings did, which is good news. But the Oberstufe figure shows that most pupils still leave school without studying Informatik in depth. Our Python classes sit alongside school for both groups: a head start for the younger ones and depth for teenagers who want more than the timetable gives. We teach alongside school, not instead of it, and the school\'s own course is the one that counts for grades.' }
      ]
    },
    {
      id: 'zeit',
      eyebrow: 'Times',
      h2: 'What time are online Python classes in Heilbronn?',
      lede: 'Afternoons and early evenings in Heilbronn fall in the Indian evening, so the hours work for both sides. School holidays do not pause the classes unless you want them to.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Heilbronn lesson times with the hour in India', head: ['Heilbronn', 'India until 28 March 2027', 'India from 28 March 2027'], rows: [
          ['15:45', '20:15', '19:15'],
          ['17:45', '22:15', '21:15'],
          ['Saturday 11:30', '16:00', '15:00'],
          ['Sunday 16:00', '20:30', '19:30']
        ] },
        { kind: 'source', html: 'Germany runs on UTC+1 in winter and UTC+2 in summer under the Einheitenzeitgesetz; the 2026 summer time finished on 25 October 2026 and the next begins on 28 March 2027. India stays at UTC+5:30, which puts it 4 h 30 ahead of Heilbronn in winter and 3 h 30 ahead in summer. Times shown are examples only.' },
        { kind: 'table', mt: true, numCols: [], caption: 'School holidays in Baden-Württemberg, 2026/27 (KMK table)', head: ['Break', 'Dates'], rows: [
          ['Autumn', '26 to 30 October 2026, plus 31 October'],
          ['Christmas', '23 December 2026 to 9 January 2027'],
          ['Easter', '25 March, then 30 March to 3 April 2027'],
          ['Whitsun', '18 to 29 May 2027'],
          ['Summer', '29 July to 11 September 2027']
        ] },
        { kind: 'source', html: 'Source: Kultusministerkonferenz, Ferien im Schuljahr 2026/2027, Baden-Württemberg row, status 9 October 2025. The KMK sets summer holidays; Baden-Württemberg sets the rest.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Signs of progress',
    h2: 'How can you tell the Python is really sinking in?',
    lede: 'Our checkpoints. A learner who can do the right-hand column without help has truly learned the stage.',
    table: { caption: 'Python checkpoints (ours)', head: ['Stage', 'Can follow along', 'Can do alone'], rows: [
      ['Variables', 'Copies a program and runs it', 'Predicts its output before running'],
      ['Loops', 'Changes a loop that works', 'Writes a loop from a plain-English task'],
      ['Dictionaries', 'Looks up a key', 'Checks a key column for duplicates first'],
      ['Files', 'Opens a file the mentor chose', 'Opens a new file and reports its oddities'],
      ['Functions', 'Calls a function', 'Writes and tests one']
    ] },
    left: { h3: 'For learners', ps: [
      'Before you trust a dictionary, ask how many rows went in and how many keys came out. If the numbers differ, something was forgotten.',
      'Say your prediction out loud before you press run. Being wrong is how you learn which idea you had not understood.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child to show you one surprising output from this week and explain it. That is a better progress check than any certificate.',
      'Mentors send a short note each month: what was built, what was hard, and the next stage.'
    ] }
  },

  catalogue: {
    eyebrow: 'Beyond the first course',
    h2: 'Nine more courses for Heilbronn Python learners',
    lede: 'Where Python leads next, by age. All taught live in English by a regular mentor.',
    bands: [
      { num: 'I', h3: 'Ages 9 to 13', sub: 'Before and around Python', courses: [
        { code: 'HEP / YOUNG / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'For younger siblings not ready to type yet.' },
        { code: 'HEP / YOUNG / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths turned into small Python programs.' },
        { code: 'HEP / YOUNG / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Support beside the new BW subject, in English.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Python, deeper', courses: [
        { code: 'HEP / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Charts and conclusions from real files.' },
        { code: 'HEP / TEEN / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Why a dictionary is fast, and when it is not.' },
        { code: 'HEP / TEEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models built in Python and tested honestly.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Python at work', courses: [
        { code: 'HEP / ADULT / 01', slug: 'python-ai-automation-masterclass-college', title: 'Automation and applied AI', blurb: 'Scripts that save hours each week.' },
        { code: 'HEP / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'From spreadsheets to reproducible Python.' },
        { code: 'HEP / ADULT / 03', slug: 'mysql-database-complete-masterclass-college', title: 'SQL databases', blurb: 'Where keys must be unique by design.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Organisation',
    h2: 'How are online Python classes organised for Heilbronn?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Heilbronn afternoons for pupils.' },
      { time: 'After work', l: 'Early evening slots for adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday, morning or afternoon.' }
    ],
    cells: [
      { h3: 'Video and shared code', p: 'You see the mentor and the mentor sees your code.' },
      { h3: 'Your keyboard', p: 'The learner types; the mentor guides.' },
      { h3: 'Two lessons weekly', p: 'An hour each, at fixed times you choose.' },
      { h3: 'Recorded nothing', p: 'Every lesson is live; there is no video library to fall behind on.' },
      { h3: 'Monthly notes', p: 'Short written progress for learners and parents.' },
      { h3: 'Group or solo', p: 'Join a class of 15 to 20, or learn privately.' }
    ]
  },

  projectsH2: 'Projects our Python students have built',
  projectsLede: 'Work by our students in other countries, made in the same live lessons. More is on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Unedited Google reviews from our learners and their parents.',

  fees: {
    h2: 'How much are online Python classes in Heilbronn?',
    lede: 'You pay monthly, and each month includes eight live lessons. Euro amounts here follow the European Central Bank reference rate, but checkout takes payment in US dollars; your bank does the currency conversion, so the euro total on your statement can be a touch different.',
    free: ['A free trial lesson', 'Your first Python program', 'No card details needed'],
    group: ['A class of 15 to 20 near your age', 'Your regular mentor', 'Two lessons a week', 'Pay monthly, stop when you like'],
    one: ['Just you and the mentor', 'Your pace and your projects', 'Lesson times agreed with you']
  },

  faq: {
    eyebrow: 'Heilbronn asks',
    h2: 'Online Python classes in Heilbronn: questions and answers',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons are live and in English only. Our mentors are based in India and adapt to each learner\'s pace and accent, but they do not teach in German.' },
      { q: 'What does live online mean here?', a: 'A real mentor on a video call in real time, with the learner\'s code shared on screen. Nothing is pre-recorded. The learner types, the mentor guides and answers questions as they come up.' },
      { q: 'What equipment do we need?', a: 'A laptop or desktop with a keyboard, a browser, a steady internet connection and ideally headphones. We help install a free code editor in the first lesson. Tablets are not suitable for typed Python.' },
      { q: 'From what age can someone learn Python online?', a: 'From about 9, once a child reads and types comfortably. Younger children start with Scratch. There is no upper age limit; many of our Python learners are adults.' },
      { q: 'When are classes in Heilbronn time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Heilbronn afternoons and early evenings are evening in India.' },
      { q: 'Is Informatik compulsory at schools in Baden-Württemberg?', a: 'Yes, since the 2025/26 school year: the Gesellschaft für Informatik records the new compulsory subject Informatik und Medienbildung across secondary school types, starting in grades 5 and 6 and growing each year.' },
      { q: 'Will these classes improve my child\'s Informatik grade?', a: 'We cannot promise grades. We teach alongside school, and the school course is the one that is assessed. What our classes add is regular practice and depth in Python and problem solving.' },
      { q: 'What is the Heilbronn market project?', a: 'An original Python exercise of ours on Stadt Heilbronn\'s open Wochenmarkt list, licensed CC BY 4.0. Thirty rows go into a dictionary and only 28 entries come out, because stall 18 is shared by three traders. Learners find out why and fix it.' },
      { q: 'How large are the classes?', a: 'Group classes have 15 to 20 learners of a similar age. One-to-one lessons are also available, with the same mentor at times you agree.' },
      { q: 'How is payment handled?', a: 'Monthly. Fees appear in euro, converted at the European Central Bank reference rate, and payment is taken in US dollars, which your bank converts. The trial lesson is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for Python learners in Heilbronn and the region.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages in one place.' },
      { href: '/coding-classes-in-baden-wuerttemberg', label: 'Coding classes in Baden-Württemberg', p: 'The Land rules and holidays in full.' },
      { href: '/informatik-abitur-baden-wuerttemberg', label: 'Informatik-Abitur in Baden-Württemberg', p: 'For pupils heading to the Oberstufe.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Where Python leads next.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects built in our classes.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our teaching approach in detail.' }
    ]
  },

  start: {
    h2: 'Start with a free online Python lesson',
    lede: 'The trial is a real lesson: you share your screen, write a first Python program with the mentor, and talk about what you want to build. Afterwards the mentor recommends a course and a time.',
    readFirst: 'Want to know more first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse <a class="ag-inline-link" href="/courses">every course</a> and its syllabus.',
    note: 'Lessons are live online with mentors in India and taught only in English. Message us on WhatsApp for the fastest reply.',
    formNote: 'Free trial, nothing to pay, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-baden-wuerttemberg', label: 'Baden-Württemberg' },
        { href: '/informatik-abitur-baden-wuerttemberg', label: 'Informatik-Abitur BW' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' }
      ] }
    ],
    bottomRight: 'Thirty rows in, 28 keys out'
  },

  personalityCss: `
.ag-root.ag-hep .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-hep .ag-capsule { border-left-width: 6px; }
.ag-root.ag-hep .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-hep .ag-table caption { text-align: left; }
.ag-root.ag-hep .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (national overview and Baden-Württemberg page); KMK Ferien im Schuljahr 2026/2027, Baden-Württemberg row; Python tutorial, Data Structures; Einheitenzeitgesetz; read 2 to 3 November 2026. Stadt Heilbronn, Heilbronner Wochenmarkt, CC BY 4.0.',
    localProject: 'The Heilbronn market list: an original Python project on Stadt Heilbronn\'s Wochenmarkt open data in which 30 rows produce a 28-entry dictionary because stall 18 holds three traders; the fix stores a list per stall and counts traders per market day (Tuesday 13, Thursday 19, Saturday 25). Lesson family: check a key column for duplicates before using it as a dictionary key.',
    requiredMentions: ['wochenmarkt_2022.csv', 'Stalls in the dictionary: 28', "Stall numbers used more than once: {'18': 3}", 'Traders at stall 18: 3', 'the old value associated with that key is forgotten', 'Heilbronner Wochenmarkt', 'Informatik und Medienbildung', 'Thirty rows in, 28 keys out'],
    sources: [
      { claim: 'Heilbronn Wochenmarkt list and its CC BY 4.0 licence.', url: 'https://opendata.heilbronn.de/dataset/heilbronner-wochenmarkt' },
      { claim: 'Dictionary keys: storing with a used key forgets the old value.', url: 'https://docs.python.org/3/tutorial/datastructures.html' },
      { claim: 'BW compulsory Informatik und Medienbildung from 2025/26; IMP phased out.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/baden-wuerttemberg' },
      { claim: 'BW meets four-hour goal; one in twelve takes Oberstufe Informatik.', url: 'https://informatik-monitor.de/' },
      { claim: 'BW holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' }
    ],
    rejectedClaims: [
      'The removed service row of the market file: health-related, not shown or counted.',
      'Naming individual traders beyond the one the program prints: not needed, left out.',
      'Claims about today\'s market: the file dates from 2022 and is described as such.',
      'German-language teaching, grade promises, or any link with Stadt Heilbronn or the Land: none.'
    ]
  }
};
