'use strict';
// Online Python classes in Bottrop (ag- city page, Germany cluster P6 row DE192, tier-2 shape online-python = live online
// explained, Python path).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: filter in steps and print the count after every step. A Bottrop pupil asks "can I take Informatik in the
// Oberstufe here, and as a Leistungskurs?" and answers it from the Land's own school files with a six-step funnel.
// City data searched first: every Stadt Bottrop dataset on GovData (gis.bottrop.de, via Open.NRW) carries the licence URI
// "other-closed" while its access_rights field says Datenlizenz Deutschland Zero 2.0; the source catalogue
// geodatenkatalog-niederrhein.de answered HTTP 503 and opendata.ruhr HTTP 502 (stopped, no retry). With the licence not
// confirmable, the city files are not used. The project uses the NRW school ministry's open files filtered to Bottrop's
// Gemeindeschlüssel 05512000 (ARS 055120000000 in facts-geo/places.tsv). No school is named on the page; only counts.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, NRW page: "An allen allgemeinbildenden Schularten wird das Pflichtfach Informatik in den
//    Jahrgangsstufen 5 und 6 unterrichtet." (80); Qualifikationsphase "dreistündig ... (Grundkurs)" and "fünfstündig ...
//    (Leistungskurs)" (81); "Der Einsatz eines Computers ist für die Bearbeitung der schriftlich Abituraufgaben nicht
//    vorgesehen." (82).
//  - NRW standardsicherung, Termine 2027: written Abitur "ab Dienstag, 13. April 2027 bis Mittwoch, 5. Mai 2027" (42).
//  - KMK Ferien 2026/2027, NRW row: "Nordrhein-Westfalen (3) 17.10. - 31.10. 23.12. - 06.01. -- 22.03. - 03.04. 18.05.
//    19.07. - 31.08." (275).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Bottrop 118,535; Essen 574,682; Gelsenkirchen 267,930;
//    Oberhausen 213,646.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Ministerium für Schule und Bildung des Landes NRW, GovData "Schulgrunddaten NRW" (schuldaten.csv, 1,789,749
//    bytes, sha256 1024748e...7d59863) and "Kursangebot in der gymnasialen Oberstufe (Gymnasien/Gesamtschulen) in NRW"
//    (kurse.csv, 650,459 bytes, sha256 6af9779b...a1910; key_fach.csv: "IF";"Informatik"), both resources licensed
//    dl-by-de/2.0 (Datenlizenz Deutschland Namensnennung 2.0), GovData records saved in src-pages; downloaded 3 November
//    2026. Notes: courses "gemäß den Amtlichen Schuldaten"; "Durch Kooperationen kann die Schule evtl. weitere Fächer und
//    Kursarten anbieten, die hier nicht aufgelistet sind."; "Die Daten basieren auf der Erhebung der Amtlichen Schuldaten
//    des Vorjahres. Stichtag der Erhebung ist der 15. Oktober"; "Über die Schulnummer können die Kursangebote mit den
//    Schulgrunddaten verknüpft werden." Both files start with a "sep=;" line. Class files (ours): schulen_nrw.csv
//    (school_no, school_type, municipality) and kurse_nrw.csv (school_no, subject, gk_ef, gk_q1, lk_q1, gk_q2, lk_q2).
// Our own calculations (scratchpad de/w/T6/bottrop/v1.py, v2.py, python3 -I):
//  v1: "Step 1, all schools in NRW: 5646", "Step 2, in Bottrop: 32", "Step 3, Gesamtschule or Gymnasium: 5".
//  v1+v2: "Step 4, schools with any Oberstufe course listed: 5", "Step 5, offering Informatik: 4", "Step 6, offering it as
//      Leistungskurs: 0".
//  NRW-wide in kurse.csv: 956 schools with Oberstufe courses, 654 list Informatik, 109 list an Informatik Leistungskurs.
//  Bottrop school types in schuldaten (codes): 02 18, 04 1, 08 2, 0A 1, 10 3, 14 1, 15 2, 20 3, 30 1.
// Lesson family: filter in steps and print the count after every step (a funnel), so you see where the rows go and can
// check each step on its own.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("schulen_nrw.csv", encoding="utf-8") as f:',
  '    schools = list(csv.DictReader(f))',
  'print("Step 1, all schools in NRW:", len(schools))',
  '',
  'bottrop = [s for s in schools if s["municipality"] == "05512000"]',
  'print("Step 2, in Bottrop:", len(bottrop))',
  '',
  'upper = [s for s in bottrop if s["school_type"] in ("15", "20")]',
  'print("Step 3, Gesamtschule or Gymnasium:", len(upper))'
].join('\n');

const V2 = [
  'numbers = {s["school_no"] for s in upper}',
  'with open("kurse_nrw.csv", encoding="utf-8") as f:',
  '    courses = [c for c in csv.DictReader(f) if c["school_no"] in numbers]',
  'print("Step 4, schools with any Oberstufe course listed:", len({c["school_no"] for c in courses}))',
  '',
  'informatik = [c for c in courses if c["subject"] == "IF"]',
  'print("Step 5, offering Informatik:", len({c["school_no"] for c in informatik}))',
  '',
  'lk = [c for c in informatik if c["lk_q1"] == "1" or c["lk_q2"] == "1"]',
  'print("Step 6, offering it as Leistungskurs:", len({c["school_no"] for c in lk}))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Bottrop: online Python' },
  slug: 'online-python-classes-bottrop-germany',
  code: 'bot',
  accent: '#76240C',
  accentRationale: 'Online Python in Bottrop: an iron-oxide red #76240C for the steel tetrahedron on the old spoil heap and the city\'s mining past; contrast 8.40 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Online Python classes in Bottrop',
  title: 'Online Python Classes in Bottrop: Live, Taught in English',
  description: 'Online Python classes in Bottrop, live in English for pupils and adults: how a lesson runs, NRW Informatik and the Abitur, and a project on Bottrop school data.',
  ogDescription: 'Live online Python in English for Bottrop learners, with a project that answers a real pupil\'s question from the Land\'s own school files: can I take Informatik in the Oberstufe in Bottrop, and as a Leistungskurs?',
  twitterDescription: 'Live online Python for Bottrop, in English, with a project on NRW school course data.',
  pageName: 'Online Python Classes in Bottrop',
  webPageDescription: 'A guide for Bottrop pupils, parents and adults to live online Python classes in English: how a live lesson works, what NRW schools teach in Informatik from grade 5 to the Abitur, and an original Python project on the NRW school ministry\'s open data, filtered to Bottrop.',
  courseDescription: 'Live online Python classes in English for Bottrop learners from about age 10 to adult, with shared code and a regular mentor, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Bottrop, Python',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#lesson', label: 'Lessons' },
    { href: '#funnel', label: 'School data' },
    { href: '#nrw', label: 'NRW' },
    { href: '#clock', label: 'Times' }
  ],
  eyebrow: 'Bottrop &middot; Python &middot; Live online, in English',
  h1: 'Online Python classes in Bottrop',
  lede: 'Can a pupil in Bottrop take Informatik in the Oberstufe, and as a Leistungskurs? The answer is sitting in two open files from the NRW school ministry, and a learner who knows a little Python can find it in six steps. That project is the centre of this page. Around it: how our live online Python lessons in English actually run, what NRW schools teach in Informatik from grade 5 to the Abitur, and the times that suit Bottrop.',
  secondaryCta: { href: '#funnel', label: 'Follow the six steps' },
  wa: 'Hello Modern Age Coders, I am in Bottrop and would like live online Python classes in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ learners worldwide &middot; Python you type and understand',
  spec: [
    ['Format', 'Live video, screen shared'],
    ['Language taught', 'Python 3'],
    ['Learners', 'About 10 to adult'],
    ['Group', '15 to 20, or one to one'],
    ['Lessons', 'Two a week, live'],
    ['Start', 'Free trial lesson']
  ],
  capsuleQ: 'Short version',
  capsule: 'Modern Age Coders teaches Python to Bottrop learners in live video lessons held in English. Learner and mentor look at one shared screen of code; the learner types, runs and fixes it while the mentor guides as it happens. From roughly age 10 up to adults, everyone works through one Python sequence at a speed that suits them, taught by a mentor who adapts to how they speak, either among fifteen to twenty classmates or privately.',

  picks: {
    eyebrow: 'Python to start with',
    h2: 'Which online Python course should a Bottrop learner choose?',
    lede: 'Three starting points by age and goal; the trial lesson decides.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'BOT / 01', title: 'Python and AI for Kids', note: 'Younger learners from 9. First typed programs, games and small files, at a gentler pace.' },
      { course: 'python-complete-masterclass-teens', code: 'BOT / 02', title: 'Python for Teens', note: 'Teenagers. Lists, dictionaries, sets, functions and real files, like the NRW school data below.' },
      { course: 'informatik-abitur-course-java-python', code: 'BOT / 03', title: 'Informatik Oberstufe and Abitur', note: 'Oberstufe pupils. Java and Python alongside the school course, including tracing code on paper for the written exam.' }
    ]
  },

  sections: [
    {
      id: 'lesson',
      eyebrow: 'Live online',
      h2: 'How does a live online Python lesson work?',
      lede: 'A video call, one shared screen, and the learner\'s hands on the keyboard. Nothing is recorded and nothing is left for later.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The mentor is there', p: 'A real person on video for the whole hour, who sees the learner\'s code as it is typed and can point to a line the moment something goes wrong.' },
          { h3: 'The learner types', p: 'The mentor explains and asks, but the learner writes every line. Learning to type, run and read Python is the skill; watching someone else do it is not.' },
          { h3: 'Errors are lessons', p: 'When Python prints an error, mentor and learner read it together from the bottom up. After a few weeks most learners can fix their own mistakes before asking.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What you need',
          left: [
            'Bring a computer with a keyboard, a connection that handles video calls, and somewhere calm to sit; headphones are a plus. Setting up Python and a free editor is part of lesson one.',
            'Tablets and phones are not suitable for typed Python. For children under 12, a parent nearby for the first lessons makes the screen sharing easier.'
          ],
          rightH3: 'English as the language of the lesson',
          right: [
            'Lessons are only ever in English. The mentors work from India and get used to each learner\'s voice and tempo within the first weeks.',
            'Python is itself written in English words, so a Bottrop pupil reads print, for and if as they are, and practises English along the way.'
          ] }
      ]
    },
    {
      id: 'funnel',
      tint: 'tint',
      eyebrow: 'A Bottrop data project',
      h2: 'Which Oberstufen in Bottrop offer Informatik, according to the Land\'s own data?',
      lede: 'Four of the five, and none as a Leistungskurs, as the files listed them. The NRW school ministry publishes its list of schools and the Oberstufe courses each one offers, free to reuse under the Datenlizenz Deutschland Namensnennung 2.0. Our learners answer the question in six steps and print a count after each one.',
      body: [
        { kind: 'two',
          leftH3: 'The two files',
          left: [
            'Schulgrunddaten NRW lists every school with a school number, a school type code and a municipality code. The course file, Kursangebot in der gymnasialen Oberstufe, lists for each school number the subjects it offers as Grundkurs and Leistungskurs in each phase. The ministry notes that the two can be linked "über die Schulnummer".',
            'We downloaded both on 3 November 2026 and kept only the columns we need in two class files, schulen_nrw.csv and kurse_nrw.csv. In the key file the subject code for Informatik is IF.'
          ],
          rightH3: 'Why steps, and why counts',
          right: [
            'A filter that returns zero is a mystery: was there really nothing, or did one condition go wrong? Printing the count after every step turns the mystery into a map. If a step drops more rows than expected, that is where to look.',
            'Bottrop\'s municipality code is 05512000, and school types are codes too: 15 is Gesamtschule and 20 is Gymnasium, the two school types with an Oberstufe in this file.'
          ] },
        { kind: 'code', label: 'Steps 1 to 3: from all of NRW to Bottrop\'s Oberstufe schools', lang: 'Python', code: V1, note: 'It prints: <code>Step 1, all schools in NRW: 5646</code>, <code>Step 2, in Bottrop: 32</code> and <code>Step 3, Gesamtschule or Gymnasium: 5</code>.' },
        { kind: 'p', mt: true, html: 'Each count can be checked by eye. Thirty-two entries in Bottrop, including primary schools and a few that are not schools at all, such as the school supervision office, which has its own type code. Five of them are a Gesamtschule or a Gymnasium. Now the second file: keep only the courses of those five, then narrow down to Informatik, then to Leistungskurs.' },
        { kind: 'code', label: 'Steps 4 to 6: join the course file and narrow down', lang: 'Python', code: V2, note: 'Run after Steps 1 to 3, it prints: <code>Step 4, schools with any Oberstufe course listed: 5</code>, <code>Step 5, offering Informatik: 4</code> and <code>Step 6, offering it as Leistungskurs: 0</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'The six-step funnel for Bottrop (our counts from the NRW files)', head: ['Step', 'Count'], rows: [
          ['1. Schools and school offices in NRW', '5,646'],
          ['2. In Bottrop (municipality 05512000)', '32'],
          ['3. Gesamtschule or Gymnasium', '5'],
          ['4. With Oberstufe courses listed', '5'],
          ['5. Listing Informatik', '4'],
          ['6. Listing Informatik as Leistungskurs', '0']
        ] },
        { kind: 'source', html: 'Files from the NRW Ministerium für Schule und Bildung (Schulgrunddaten NRW; Kursangebot in der gymnasialen Oberstufe), Datenlizenz Deutschland Namensnennung 2.0, retrieved on 3 November 2026; every count here is our own. The ministry notes that schools may offer further subjects through cooperations not listed here, and that the data come from the previous year\'s survey, with 15 October as the reference date.' },
        { kind: 'p', mt: true, html: 'That last note matters more than any line of code. Step 6 says 0, but the file only lists what each school offers itself; a cooperation with a neighbouring school could add a Leistungskurs that the file never shows. A careful analyst reports "none listed in the ministry file" rather than "impossible in Bottrop". Across the whole of NRW the same file lists Informatik at 654 of 956 schools with Oberstufe courses, and as a Leistungskurs at 109.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Younger pupils.</strong> Before running anything, guess the count after each step and write it down. Which guess was furthest off?',
          '<strong>Teenagers.</strong> Change the subject code from IF to another subject you take, and run the funnel again. At which step does your subject drop out, if it does?',
          '<strong>Adults.</strong> Wrap the six steps in a function that takes a municipality code and a subject code, then run it for Bottrop and two neighbouring cities and print one line each.'
        ] }
      ]
    },
    {
      id: 'nrw',
      eyebrow: 'Schools in NRW',
      h2: 'What Informatik do Bottrop pupils get at school?',
      lede: 'Early, from grade 5, and with a written exam on paper at the end. The NRW rules for 2026/27 are summarised by the GI\'s Informatik-Monitor.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in North Rhine-Westphalia, from grade 5 to the Abitur', head: ['Stage', 'What NRW provides'], rows: [
          ['Grades 5 and 6', 'Compulsory Informatik at all general school types'],
          ['Qualifikationsphase', 'Grundkurs with three weekly lessons, or Leistungskurs with five, where offered'],
          ['Written Abitur', 'Tasks set centrally; no computer is used in the written exam'],
          ['Written exams 2027', '13 April to 5 May 2027']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, NRW page, and the NRW school ministry\'s standardsicherung page on Zentralabitur dates for 2027, both read on 2 November 2026. The Monitor\'s words on the exam: "Der Einsatz eines Computers ist für die Bearbeitung der schriftlich Abituraufgaben nicht vorgesehen."' },
        { kind: 'p', mt: true, html: 'Two practical points follow for Bottrop families. First, whether a Leistungskurs exists depends on the school, as the data project shows. Second, because the written exam is on paper, a pupil must be able to read and trace code without running it. In our classes every program is predicted on paper before it runs. Our role is to support, not to replace: marks come only from the school.' }
      ]
    },
    {
      id: 'path',
      eyebrow: 'The Python path',
      h2: 'What order should Python be learned in?',
      lede: 'Our order, for every age. The funnel project above uses everything up to sets and files.',
      body: [
        { kind: 'two',
          leftH3: 'The first months',
          left: [
            'Printing and variables first, then decisions with if, then loops. After that come lists, and from lists the comprehension, the one-line filter used in every step of the funnel.',
            'Then dictionaries and sets. A set is how the funnel counts schools rather than course rows: a school offering Informatik in three phases is still one school.'
          ],
          rightH3: 'The next months',
          right: [
            'Files, with the habit of looking at the first lines before parsing. Both NRW files begin with a line "sep=;" before the real header, which our class files remove.',
            'Then functions, so a six-step analysis can be rerun for any city and any subject, and finally projects that a learner can explain to someone else.'
          ] },
        { kind: 'p', mt: true, html: 'As our own rough guide, a teenager or adult with two lessons a week can write a funnel like this one after about three months. Younger pupils need longer, which is normal.' }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Times',
      h2: 'Which lesson times work in Bottrop?',
      lede: 'Late afternoon in Bottrop is evening in India, where the mentors are. NRW holidays do not pause lessons unless you want them to.',
      body: [
        { kind: 'table', numCols: [], caption: 'Bottrop example times and the time in India', head: ['In Bottrop', 'In India now', 'In India from 28 March 2027'], rows: [
          ['15:25', '19:55', '18:55'],
          ['17:10', '21:40', '20:40'],
          ['Saturday 14:00', '18:30', '17:30'],
          ['Sunday 10:45', '15:15', '14:15']
        ] },
        { kind: 'source', html: 'Time in Germany follows the Einheitenzeitgesetz: UTC+1 in winter, UTC+2 in summer. The 2026 summer time ended on 25 October 2026; 2027 summer time starts on 28 March 2027. India never changes from UTC+5:30, so it is four and a half hours later than Bottrop in winter and three and a half in summer. Examples, not set times.' },
        { kind: 'table', mt: true, numCols: [], caption: 'NRW school holidays 2026/27 (KMK table)', head: ['Break', 'From', 'Until'], rows: [
          ['Autumn', '17 October 2026', '31 October 2026'],
          ['Christmas', '23 December 2026', '6 January 2027'],
          ['Easter', 'Mon 22 March 2027', 'Sat 3 April 2027'],
          ['Whitsun', '18 May 2027', '18 May 2027'],
          ['Summer', '19 July 2027', '31 August 2027']
        ] },
        { kind: 'source', html: 'Source: KMK, Ferien im Schuljahr 2026/2027, Nordrhein-Westfalen row, status 9 October 2025. NRW has no winter break in this table.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Checkpoints',
    h2: 'How can a Bottrop learner tell their Python is improving?',
    lede: 'Our checkpoints, each one a thing the learner can do without help.',
    table: { caption: 'Python checkpoints (ours)', head: ['Checkpoint', 'Shows that the learner can'], rows: [
      ['Prediction', 'Say what a program prints before running it'],
      ['Comprehension', 'Write a one-line filter over a list'],
      ['Sets', 'Count distinct things, not rows'],
      ['Funnel', 'Print a count after every filtering step'],
      ['Caveat', 'Say what the data cannot show']
    ] },
    left: { h3: 'For learners', ps: [
      'When a filter gives you zero, do not trust it yet. Print the count after every step and find where the rows went.',
      'Read the notes that come with a dataset. They often say what the data leaves out.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child to walk you through their steps and the count at each one.',
      'A monthly note sums up what was built and what is next.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Bottrop Python learners',
    lede: 'For three age groups, all live and in English with a regular mentor.',
    bands: [
      { num: 'I', h3: 'Younger learners', sub: 'About 9 to 13', courses: [
        { code: 'BOT / YOUNG / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Beside school Informatik from grade 5.' },
        { code: 'BOT / YOUNG / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Logic puzzles that prepare for code.' },
        { code: 'BOT / YOUNG / 03', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'For younger siblings first.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: '13 to 18', courses: [
        { code: 'BOT / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented programming in Java.' },
        { code: 'BOT / TEEN / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Fast, correct solutions under time limits.' },
        { code: 'BOT / TEEN / 03', slug: 'mysql-mastery-for-teens', title: 'SQL for teens', blurb: 'Joins and filters in a database.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Work and study', courses: [
        { code: 'BOT / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'A full course for adult beginners.' },
        { code: 'BOT / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'From files to clear findings.' },
        { code: 'BOT / ADULT / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Web development', blurb: 'Build complete web applications.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Practical details',
    h2: 'What does the weekly routine look like?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoon', l: 'After school in Bottrop.' },
      { time: 'Early evening', l: 'For adults after work.' },
      { time: 'Weekend', l: 'Saturday afternoon or Sunday morning.' }
    ],
    cells: [
      { h3: 'One screen, two people', p: 'Learner and mentor see the same code.' },
      { h3: 'Typed by the learner', p: 'Every line comes from the learner.' },
      { h3: 'Same mentor', p: 'Continuity from week to week.' },
      { h3: 'Public data', p: 'Projects on real German files.' },
      { h3: 'Paper practice', p: 'Code traced by hand, for the exam.' },
      { h3: 'Group or private', p: '15 to 20 learners, or one to one.' }
    ]
  },

  projectsH2: 'Projects from our Python students',
  projectsLede: 'A few projects by our students abroad. The <a class="ag-inline-link" href="/student-labs">student labs</a> page holds the rest.',
  reviewsLede: 'Our Google reviews, quoted without edits.',

  fees: {
    h2: 'How much do online Python classes cost in Bottrop?',
    lede: 'A monthly fee pays for eight live lessons. We show euro amounts calculated with the European Central Bank reference rate; the actual payment is in US dollars, and your bank converts it, so the euro debit can come out marginally different.',
    free: ['A free trial lesson', 'Your first program, written live', 'No card needed'],
    group: ['15 to 20 learners close in age', 'Your regular mentor', 'Two live lessons weekly', 'Monthly, stop any month'],
    one: ['A mentor for you alone', 'Your own pace and goals', 'Times agreed with you']
  },

  faq: {
    eyebrow: 'Bottrop asks',
    h2: 'Online Python classes in Bottrop: what learners and parents ask',
    items: [
      { q: 'Are the classes in German?', a: 'No, English is the only teaching language. Mentors in India keep to each learner\'s tempo and accent, and there is no German option.' },
      { q: 'Is the lesson really live?', a: 'Yes, every minute of it. You and the mentor are on a video call together, looking at your own code, and no part of the course is pre-recorded.' },
      { q: 'From what age?', a: 'Typed Python suits most learners from about 10, and our children\'s Python course takes nine year olds. Below that, Scratch comes first. There is no upper limit.' },
      { q: 'Does Bottrop have Informatik in the Oberstufe?', a: 'In the NRW ministry\'s course file, four of Bottrop\'s five Gymnasien and Gesamtschulen list Informatik in the Oberstufe and none lists it as Leistungskurs. Schools may offer more through cooperations not shown in the file, so ask the school.' },
      { q: 'When are classes in Bottrop time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Bottrop afternoons are evenings in India.' },
      { q: 'Is Informatik compulsory in NRW?', a: 'Yes, in grades 5 and 6 at all general school types, according to the Gesellschaft für Informatik. In the Qualifikationsphase it can be a three-hour Grundkurs or a five-hour Leistungskurs where a school offers it.' },
      { q: 'Can you help with the Informatik Abitur?', a: 'We teach alongside the school course, including Java and Python and tracing code on paper, since the written NRW exam uses no computer. We promise no marks; school grades come from school.' },
      { q: 'What is the Bottrop school data project?', a: 'A Python task we designed around the NRW school ministry\'s open files. Learners filter from 5,646 entries for NRW down to Bottrop\'s five Oberstufe schools in six steps, printing a count after each, and find Informatik listed at four of them.' },
      { q: 'How big are the groups?', a: 'Each group has fifteen to twenty people of about the same age; private lessons are the alternative.' },
      { q: 'How are fees charged?', a: 'Per month. Euro figures here use the ECB reference rate, the charge itself goes through in US dollars, and your bank converts it. Your trial costs nothing.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read on',
    h2: 'Related pages',
    lede: 'Further reading for the Ruhr.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All of Germany on one page.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'The NRW overview.' },
      { href: '/informatik-abitur-nrw', label: 'Informatik-Abitur in NRW', p: 'The exam in detail.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'A machine-learning project on German data.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects by our students.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'How a live class works.' }
    ]
  },

  start: {
    h2: 'Book a free online Python lesson from Bottrop',
    lede: 'Your trial is a full lesson: screen shared, a first program written and run together, and a few minutes on what you want Python for. You leave with a recommended course and slot.',
    readFirst: 'For background, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Taught live, online and in English from India. Questions? WhatsApp is the quick route.',
    formNote: 'Free, with no obligation.'
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
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia' },
        { href: '/informatik-abitur-nrw', label: 'Informatik-Abitur NRW' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' }
      ] }
    ],
    bottomRight: 'Print the count after every step'
  },

  personalityCss: `
.ag-root.ag-bot .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-bot .ag-capsule { border-left-width: 5px; }
.ag-root.ag-bot .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-bot .ag-table caption { text-align: left; }
.ag-root.ag-bot .ag-code-head b { letter-spacing: 0.012em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27, NRW page; NRW Zentralabitur Termine 2027; KMK Ferien 2026/2027, NRW row; Einheitenzeitgesetz; read 2 to 3 November 2026. Ministerium für Schule und Bildung NRW, Schulgrunddaten NRW and Kursangebot in der gymnasialen Oberstufe, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Can I take Informatik in the Oberstufe in Bottrop? An original six-step Python funnel on the NRW school ministry\'s open files: 5,646 entries, 32 in Bottrop, 5 Gesamtschulen and Gymnasien, 5 with Oberstufe courses, 4 listing Informatik, 0 listing an Informatik Leistungskurs; plus the ministry\'s caveat on cooperations. No school is named. Lesson family: print the count after every filtering step.',
    requiredMentions: ['kurse_nrw.csv', 'Step 2, in Bottrop: 32', 'Step 3, Gesamtschule or Gymnasium: 5', 'Step 5, offering Informatik: 4', 'Step 6, offering it as Leistungskurs: 0', '05512000', 'über die Schulnummer', 'Print the count after every step'],
    sources: [
      { claim: 'NRW school list and its DL-DE BY 2.0 licence.', url: 'https://ckan.govdata.de/dataset/schulgrunddaten-nrw' },
      { claim: 'NRW Oberstufe course offers, caveats and licence.', url: 'https://ckan.govdata.de/dataset/kursangebot-in-der-gymnasialen-oberstufe-gymnasien-gesamtschulen-in-nrw' },
      { claim: 'NRW Informatik grades 5 and 6; GK 3 h, LK 5 h; no computer in the written Abitur.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW written Abitur 2027 dates.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/termine/2027' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' }
    ],
    rejectedClaims: [
      'Names of Bottrop schools: not shown; the page reports counts only.',
      'Stadt Bottrop GIS datasets: licence fields contradict each other and the source catalogue was unreachable, so not used.',
      '"No Informatik Leistungskurs is possible in Bottrop": not claimed; cooperations may exist outside the file.',
      'German-language teaching, mark promises, or any link with the ministry, the city or any school: none.'
    ]
  }
};
