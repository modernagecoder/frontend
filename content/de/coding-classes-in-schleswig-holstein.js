'use strict';
// Coding classes in Schleswig-Holstein (ag- Land page, Germany cluster P4 row DE088, alloc code cho, accent #1F6423).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent.
// Spine: Schleswig-Holstein is one of the Länder that made Informatik compulsory for every pupil (from 2024/25, four
// weekly hours across grades 7 to 10, spread by each school), yet its raised-level Informatik Abitur is not set
// centrally: teachers submit task proposals and the Fachaufsicht chooses. Plus a Land-wide wind-turbine data project.
// Sources (read raw; copies under ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-in-schleswig-holstein/):
//  - GI Informatik-Monitor 2026/27, Schleswig-Holstein page (infmon-schleswig-holstein/168d7104.txt, FACTS 59, 88):
//    "Ab dem Schuljahr 2024/25 ist Informatik an allen Schularten verpflichtendes Unterrichtsfach. Der Gesamtumfang
//    beträgt vier Wochenstunden in den Jahrgangsstufen 7 bis 10."; "Die Schulen entscheiden selbst über die Verteilung
//    über die Jahrgangsstufen, wie zum Beispiel jeweils zwei Wochenstunden in den Jahrgangsstufen 7 und 8";
//    Gemeinschaftsschule Wahlpflicht 7 to 10 "im Umfang von insgesamt vier Wochenstunden"; Gymnasium Wahlpflicht
//    "jeweils dreistündig" 7 to 9 (G8) or "insgesamt sechs" 7 to 10 (G9); "in den Jahrgangsstufen 5 und 6 möglich,
//    Informatik in einen beliebigen Fachbereich zu integrieren"; Oberstufe "dreistündig auf grundlegendem
//    Anforderungsniveau als Profilseminar, profilbegleitendes Fach oder Wahlpflichtfach"; "im naturwissenschaftlichen
//    Profil vierstündig auf erhöhtem Anforderungsniveau (profilgebendes Fach)"; "In einem profilgebenden Fach Informatik
//    findet eine schriftliche Prüfung statt."; "Aufgabenvorschläge dezentral durch die Lehrkräfte vor Ort eingereicht und
//    durch die Fachaufsicht ausgewählt"; "Der von der Rechnerbenutzung abhängige Teil darf ein Viertel der
//    Bewertungseinheiten der Prüfungsaufgabe nicht übersteigen."; G9 at Gemeinschaftsschule and partly Gymnasium, G8
//    "lediglich bei vier von ca. 100 Gymnasien"; Sek I school types Gemeinschaftsschule and Gymnasium, Grundschule 1 to 4;
//    Kennzahlen 2024/2025: "Anteil SuS mit Informatik in der Sek II" 12 %; Informatik teachers 385, 2 % of all teachers.
//  - GI Informatik-Monitor national page (FACTS 91): SH among four Länder meeting the short-term 4-hour recommendation.
//  - KMK FER2026_27.pdf, Stand 09.10.2025 (kmk-fer2627/fe303dbf.txt, FACTS 282): "Schleswig-Holstein (2) ² 12.10. - 24.10.
//    21.12. - 06.01. -- 30.03. - 10.04. 07.05. 03.07. - 14.08."; footnote "Auf den Inseln Sylt, Föhr, Amrum und Helgoland
//    sowie auf den Halligen gelten für die Sommer- und Herbstferien Sonderregelungen."
//  - schleswig-holstein.de, Prüfungstermine des Abiturs an allgemeinbildenden Schulen (abi/termine.txt, fetched
//    3 Nov 2026, "Letzte Aktualisierung: 01.08.2026"): 2027 rows "17. und 18. März 2027 Sprechprüfung Kern- und Profilfach
//    Englisch", "24. März 2027 Schriftliche Abiturprüfung Profilfächer (ohne Naturwissenschaften)", "27. April 2027 ...
//    Deutsch", "5. Mai 2027 Schriftliche Abiturprüfung Mathematik", "14. bis 25. Juni 2027 Mündliche Abiturprüfungen",
//    "Stand: 24. Juli 2025, vorbehaltlich möglicher Änderungen".
//  - KMK Schema der Bildungsgänge (FACTS 20): Gemeinschaftsschule named for Schleswig-Holstein.
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Schleswig-Holstein 2,959,517; Kiel 252,668.
//  - Data: Landesamt für Umwelt Schleswig-Holstein, "Windkraftanlagen" (windkraftanlagen-2026-10-12.csv, 1,380,199 bytes,
//    sha256 15d59628...a8bf4e), opendata.schleswig-holstein.de dataset windkraftanlagen-2026-10-12, licence Datenlizenz
//    Deutschland Namensnennung 2.0. Notes: "mindestens halbjährlich aktualisiert"; three statuses "bereits in Betrieb",
//    "bereits genehmigt aber noch nicht in Betrieb genommen", "noch im Genehmigungsverfahren". Downloaded 3 Nov 2026.
// Our own calculations (scratchpad de/w/L1/sh_v1.py, sh_v2.py, sh_v3.py, python3 -I, run in the data folder):
//  v1 prints "Turbines in the file: 4365" and "Total power: 16454 MW".
//  v2 prints "im Gen.Verf. | 513 turbines | 3275 MW", "in Betrieb | 3287 turbines | 9940 MW",
//     "vor Inbetriebnahme | 565 turbines | 3238 MW".
//  v3 prints "Nordfriesland 2579 MW", "Dithmarschen 2332 MW", "Schleswig-Flensburg 1469 MW",
//     "Rendsburg-Eckernförde 962 MW", "Kiel in the list: False".
//  Exploration: mean hub height of turbines in operation 89.2 m, of approved ones 118.1 m, of those in the approval
//  process 136.3 m (503 with a value); one row in the approval process lists a hub height of 1324 m.
// Lesson family: filter before you sum; a register that mixes what exists with what is only approved or planned
// answers a different question until you split it by status.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'total_kw = 0',
  'count = 0',
  'with open("windkraftanlagen-2026-10-12.csv", encoding="utf-8") as register:',
  '    for row in csv.DictReader(register):',
  '        total_kw += int(row["LEISTUNG"])',
  '        count += 1',
  '',
  'print("Turbines in the file:", count)',
  'print("Total power:", round(total_kw / 1000), "MW")'
].join('\n');

const V2 = [
  'import csv',
  '',
  'by_status = {}',
  'with open("windkraftanlagen-2026-10-12.csv", encoding="utf-8") as register:',
  '    for row in csv.DictReader(register):',
  '        status = row["ANLAGENSTATUS"]',
  '        turbines, kw = by_status.get(status, (0, 0))',
  '        by_status[status] = (turbines + 1, kw + int(row["LEISTUNG"]))',
  '',
  'for status, (turbines, kw) in sorted(by_status.items()):',
  '    print(status, "|", turbines, "turbines |", round(kw / 1000), "MW")'
].join('\n');

const V3 = [
  'import csv',
  '',
  'per_kreis = {}',
  'with open("windkraftanlagen-2026-10-12.csv", encoding="utf-8") as register:',
  '    for row in csv.DictReader(register):',
  '        if row["ANLAGENSTATUS"] != "in Betrieb":',
  '            continue',
  '        per_kreis[row["KREIS"]] = per_kreis.get(row["KREIS"], 0) + int(row["LEISTUNG"])',
  '',
  'for kreis in sorted(per_kreis, key=per_kreis.get, reverse=True)[:4]:',
  '    print(kreis, round(per_kreis[kreis] / 1000), "MW")',
  'print("Kiel in the list:", "Kiel" in per_kreis)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Schleswig-Holstein' },
  slug: 'coding-classes-in-schleswig-holstein',
  code: 'cho',
  accent: '#1F6423',
  accentRationale: 'Schleswig-Holstein: a marsh-meadow green #1F6423 for the dyked grassland of the west coast where most of the Land\'s wind turbines stand; contrast 5.87 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes in Schleswig-Holstein',
  title: 'Coding Classes in Schleswig-Holstein: Live Online, in English',
  description: 'Coding classes in Schleswig-Holstein, live online in English: the Land\'s compulsory Informatik, its Abitur 2027 dates, holidays and a wind turbine data project.',
  ogDescription: 'Live online coding in English for Schleswig-Holstein pupils: four compulsory Informatik hours in grades 7 to 10, an Abitur whose raised-level Informatik tasks come from local teachers, the 2026/27 holidays and a project on the Land\'s own wind turbine register.',
  twitterDescription: 'Coding in English for Schleswig-Holstein: Informatik rules, Abitur 2027 dates and a wind turbine data project.',
  pageName: 'Coding Classes in Schleswig-Holstein',
  webPageDescription: 'A guide for families in Schleswig-Holstein to coding alongside school, built from the GI Informatik-Monitor 2026/27, the KMK holiday table, the Land\'s own Abitur dates and Destatis, with an original project on the Landesamt für Umwelt wind turbine register.',
  courseDescription: 'Live online Informatik and coding classes in English for pupils in Schleswig-Holstein aged 10 to 16, mapped to what grades 7 to 10 cover, in a group of fifteen to twenty or one to one with a regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Schleswig-Holstein',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'Informatik' },
    { href: '#abitur', label: 'Abitur' },
    { href: '#project', label: 'Wind data' },
    { href: '#holidays', label: 'Holidays' }
  ],
  eyebrow: 'Schleswig-Holstein &middot; Informatik and coding &middot; Ages 10 to 18',
  h1: 'Coding classes in Schleswig-Holstein',
  lede: 'Since the 2024/25 school year every pupil in Schleswig-Holstein has had Informatik on the timetable, four weekly hours spread across grades 7 to 10. That is a good start, and it raises a fair question for parents: what fills the years before grade 7, and what helps a pupil who wants more than four hours? This page sets out the Land\'s rules, the Abitur dates for 2027, the holidays, and a project on the Land\'s own register of wind turbines.',
  secondaryCta: { href: '#project', label: 'See the wind project' },
  wa: 'Hello Modern Age Coders, we live in Schleswig-Holstein and would like coding classes in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; one regular mentor, teaching in English',
  spec: [
    ['Ages', '10 to 18, grouped by school stage'],
    ['Main course', 'Informatik Companion, Klasse 5 to 10'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Local times', 'After school and weekend mornings, flexible'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'For coding classes in Schleswig-Holstein, Modern Age Coders teaches pupils of about 10 to 18 live online, in English, with one regular mentor who adapts to each learner\'s speed and accent; families choose a class of 15 to 20 pupils or private lessons. Our Informatik Companion course follows what the Land\'s compulsory Informatik covers in grades 7 to 10, starts earlier for younger pupils and goes deeper for keen ones.',

  picks: {
    eyebrow: 'Where pupils in Schleswig-Holstein start',
    h2: 'Three courses for pupils in Schleswig-Holstein',
    lede: 'One course that runs beside the Land\'s Sekundarstufe I Informatik, one for the Oberstufe and the Informatik Abitur, and one for pupils who like contests.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'CHO / 01', title: 'Companion to school Informatik', note: 'For pupils of 10 to 16. From blocks to typed Python, data, algorithms and networks: the topics the four compulsory hours touch, at a pace that lets them stick.' },
      { course: 'informatik-abitur-course-java-python', code: 'CHO / 02', title: 'Oberstufe Informatik in Java and Python', note: 'For 16 to 19 year olds. Object orientation, data structures, databases and automata in Java and Python, for the profile subject or the three-hour course.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'CHO / 03', title: 'Contest training: Biber to BwInf', note: 'From 9 to 19. Original puzzles for the Informatik-Biber, then algorithm problems in the style of the Bundeswettbewerb Informatik.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Informatik in the Land',
      h2: 'Is Informatik compulsory in Schleswig-Holstein?',
      lede: 'Yes, at every school type since 2024/25. The details below come from the Gesellschaft für Informatik, whose Informatik-Monitor 2026/27 reads each Land\'s ordinances; we are not connected to it or to the ministry.',
      body: [
        { kind: 'two',
          leftH3: 'Four hours, placed by the school',
          left: [
            'The Informatik-Monitor 2026/27 states that from the 2024/25 school year Informatik is a compulsory subject at all school types in Schleswig-Holstein, with four weekly hours in total in grades 7 to 10. Each school decides how to spread them, for example two hours in grade 7 and two in grade 8.',
            'So two pupils in the same Land can meet Informatik in different years. A child at one Gemeinschaftsschule might finish the compulsory part by the end of grade 8; a cousin at a Gymnasium in another Kreis might still be in it in grade 10. Asking the school which years it uses is the first useful step for any parent.'
          ],
          rightH3: 'More for those who choose it',
          right: [
            'On top of the compulsory hours, a Gemeinschaftsschule can offer Informatik as a Wahlpflicht elective in grades 7 to 10, four hours in total. A Gymnasium can offer it as an elective for three hours a week in grades 7 to 9 on the eight-year route, or six hours in total over grades 7 to 10 on the nine-year route.',
            'Before grade 7, the monitor says schools may build Informatik into any subject in grades 5 and 6. That is a permission, not a lesson every child gets.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik in a Schleswig-Holstein school career', head: ['Grades', 'School', 'Informatik'], rows: [
          ['1 to 4', 'Grundschule', 'No separate subject'],
          ['5 and 6', 'Gemeinschaftsschule or Gymnasium', 'May be built into another subject'],
          ['7 to 10', 'Gemeinschaftsschule or Gymnasium', 'Compulsory, four weekly hours in total, spread by the school'],
          ['7 to 10', 'Either school, if offered', 'Extra Wahlpflicht Informatik'],
          ['Oberstufe', 'Gymnasium or Gemeinschaftsschule', 'Three-hour course, or four hours as the profile subject in the science profile']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Schleswig-Holstein page, read 2 November 2026. The KMK\'s overview of school types names the Gemeinschaftsschule as Schleswig-Holstein\'s school with all three tracks; the Gymnasium exists in every Land.' },
        { kind: 'p', mt: true, html: 'The national picture puts this in proportion. The same monitor counts Schleswig-Holstein among four Länder that meet the short-term recommendation of four compulsory hours, along with Baden-Württemberg, Hamburg and Sachsen; three Länder already reach six. Four hours over four years is roughly one lesson a week, which is enough to meet the ideas and not always enough to become fluent in them.' }
      ]
    },
    {
      id: 'abitur',
      tint: 'tint',
      eyebrow: 'Oberstufe and Abitur',
      h2: 'How does the Informatik Abitur work in Schleswig-Holstein?',
      lede: 'Differently from many Länder. The written raised-level Informatik exam is assembled from proposals by local teachers, not set as one central paper.',
      body: [
        { kind: 'two',
          leftH3: 'Nine years, mostly',
          left: [
            'The monitor describes the Oberstufe at the Gemeinschaftsschule and at most Gymnasien as nine-year (G9): grade 11 is the Einführungsphase and grades 12 and 13 the Qualifikationsphase. An eight-year route, with the Oberstufe in grades 10 to 12, exists at only four of about 100 Gymnasien.',
            'In the Oberstufe, Informatik can be taken for three hours a week at the basic level, as a Profilseminar, a subject that accompanies the profile, or an elective. In the science profile it can be the profile subject itself, four hours a week at the raised level.'
          ],
          rightH3: 'Tasks from the teachers',
          right: [
            'A written Abitur exam takes place when Informatik is the profile subject. For the raised level, the monitor says task proposals are submitted decentrally by the teachers at each school and selected by the Fachaufsicht, the subject inspectorate.',
            'Practical work on a computer is allowed but not required, and the part that depends on using the computer may not exceed a quarter of the marks for the task. At the basic level, Informatik can be an oral exam, a presentation exam or a special learning achievement.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Abitur 2027 at general schools in Schleswig-Holstein, selected dates', head: ['Date', 'Exam'], rows: [
          ['17 and 18 March 2027', 'Speaking exam, English (core and profile subject)'],
          ['24 March 2027', 'Written exam, profile subjects other than the sciences'],
          ['27 April 2027', 'Written exam, German'],
          ['5 May 2027', 'Written exam, Mathematics'],
          ['14 to 25 June 2027', 'Oral Abitur exams']
        ] },
        { kind: 'source', html: 'Source: Landesportal Schleswig-Holstein, Prüfungstermine des Abiturs an allgemeinbildenden Schulen, page updated 1 August 2026, dates marked as of 24 July 2025 and subject to change. Read on 3 November 2026. The ministry lists further dates for biology, physics, chemistry and the foreign languages.' },
        { kind: 'p', mt: true, html: 'Because each school\'s teachers shape the raised-level paper, the surest guide to what a pupil will face is the school\'s own course, not a national question bank. That is why we teach alongside the school: we strengthen the programming, the data structures and the reasoning on paper, and the school course remains the one that counts. We do not award grades or German qualifications.' },
        { kind: 'p', html: 'One more number from the monitor\'s Land page: in the 2024/25 school year about 12 percent of Sekundarstufe II pupils in Schleswig-Holstein took Informatik, and the Land had 385 qualified Informatik teachers, about 2 percent of all teachers. A small subject with few specialists is exactly where a patient outside mentor can help.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'What does it mean that the classes are in English?',
      lede: 'Lessons happen live, on video, and the teaching language is English from the first minute to the last. There is no German-language option, which is better known before the free class than after it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'One language, plainly', p: 'The mentors work from India, and English is the only language they teach in. For a pupil at a German school this is extra English practice wrapped inside a computing lesson; for a family that has moved to Kiel or Lübeck for work, it is simply the language the child is most at home in.' },
          { h3: 'Matched to the learner', p: 'Mentors adjust their speed and vocabulary, and they get used to each learner\'s accent within a few lessons. A pupil who needs a German school word, such as Wahlpflicht or Profilfach, can say it; the mentor knows the term and answers in clear English.' },
          { h3: 'The code does not change', p: 'Python keywords, Java classes and SQL queries look the same whatever language the lesson is in. A pupil who learns a loop with us writes the identical loop in a Schleswig-Holstein Informatik lesson the next morning.' }
        ] },
        { kind: 'p', mt: true, html: 'The same standard of teaching applies wherever a learner lives: one mentor who knows the pupil, live lessons with the pupil at the keyboard, and problems the pupil reasons through before anything is typed. We teach learners to think and to solve problems, not to copy answers or paste in what an AI tool produced.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A Land-wide project',
      h2: 'How much wind power does Schleswig-Holstein have? A data project',
      lede: 'The Landesamt für Umwelt publishes a register of every wind turbine that needs a permit in the Land, free to reuse. Our pupils use it to learn a habit that saves every data analyst from embarrassment: check what kind of rows you are adding before you add them.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file is Windkraftanlagen, version of 12 October 2026, published on opendata.schleswig-holstein.de under the Datenlizenz Deutschland Namensnennung 2.0, which allows reuse with credit. We downloaded it on 3 November 2026. It has one row per turbine with its Kreis, Gemeinde, maker, hub height, rotor diameter and rated power in kilowatts.',
            'The publisher\'s notes say the table lists turbines in three states: already running, approved but not yet running, and still in the approval process. It is updated at least every six months.'
          ],
          rightH3: 'The question',
          right: [
            'How much wind power does the Land have? A pupil in grade 8 opens the file, sees a column called LEISTUNG, and adds it up. That is Version 1 below, and it runs without an error.',
            'The answer it prints is a real number from real data, and it is still wrong, because it answers a question nobody asked. Spotting why is the whole point of the lesson.'
          ] },
        { kind: 'code', label: 'Version 1: add every row', lang: 'Python', code: V1, note: 'It prints: <code>Turbines in the file: 4365</code> and <code>Total power: 16454 MW</code>.' },
        { kind: 'p', mt: true, html: 'Sixteen thousand megawatts sounds impressive. But the notes promised three kinds of turbine, and Version 1 added them all together: the ones turning today, the ones with a permit that have not been built, and the ones that are only an application. Version 2 splits the file by the status column before it adds anything.' },
        { kind: 'code', label: 'Version 2: split by status first', lang: 'Python', code: V2, note: 'It prints: <code>im Gen.Verf. | 513 turbines | 3275 MW</code>, <code>in Betrieb | 3287 turbines | 9940 MW</code> and <code>vor Inbetriebnahme | 565 turbines | 3238 MW</code>.' },
        { kind: 'p', mt: true, html: 'Now the file tells an honest story. 3,287 turbines are in operation with about 9,940 megawatts of rated power; another 565 are approved and waiting; 513 are still in the approval process. "How much wind power does the Land have" is the first line only. The other two lines answer a different question, "how much might it have", and that one needs a careful sentence of its own.' },
        { kind: 'code', label: 'Version 3: running turbines by Kreis', lang: 'Python', code: V3, note: 'It prints: <code>Nordfriesland 2579 MW</code>, <code>Dithmarschen 2332 MW</code>, <code>Schleswig-Flensburg 1469 MW</code>, <code>Rendsburg-Eckernförde 962 MW</code> and <code>Kiel in the list: False</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Wind turbines in the Schleswig-Holstein register of 12 October 2026, by status (our count)', head: ['Status in the file', 'Turbines', 'Rated power, MW'], rows: [
          ['in Betrieb (running)', '3,287', '9,940'],
          ['vor Inbetriebnahme (approved, not yet running)', '565', '3,238'],
          ['im Gen.Verf. (in the approval process)', '513', '3,275']
        ] },
        { kind: 'source', html: 'Data: Landesamt für Umwelt Schleswig-Holstein, Windkraftanlagen, 12 October 2026, Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. Counts and megawatt totals are our own, rounded to whole megawatts from the kilowatt column. The publisher notes that its turbine count can differ from national surveys.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Grade 6 or 7, on paper.</strong> A class has 28 pupils on the register, 3 of whom have left and 2 of whom start next month. How many are in the room today? Write the rule you used.',
          '<strong>Grade 8, Python.</strong> Run Version 1, then write Version 2 yourself before reading ours. Which line of the output answers "how much wind power does the Land have"?',
          '<strong>Grade 9 or 10, Python.</strong> Version 3 shows that the coast dominates. Change it to count turbines rather than megawatts, and explain why the ranking of the Kreise could change.',
          '<strong>Going further.</strong> Compare the average hub height for each status. Running turbines average about 89 metres in our check, approved ones about 118 and those in the approval process about 136. One application row lists a hub height of 1,324 metres. Should a program trust it, and what would you do with it?'
        ] }
      ]
    },
    {
      id: 'holidays',
      tint: 'tint',
      eyebrow: 'School year 2026/27',
      h2: 'When are the school holidays in Schleswig-Holstein in 2026/27?',
      lede: 'Classes run through the holidays for families who want them, and pause for families who travel. These are the Land\'s dates, first and last holiday day.',
      body: [
        { kind: 'table', numCols: [], caption: 'School holidays in Schleswig-Holstein, 2026/27', head: ['Holiday', 'Dates'], rows: [
          ['Autumn (Herbst)', '12 to 24 October 2026'],
          ['Christmas', '21 December 2026 to 6 January 2027'],
          ['Easter', '30 March to 10 April 2027'],
          ['Single day around Ascension', '7 May 2027'],
          ['Summer', '3 July to 14 August 2027']
        ] },
        { kind: 'source', html: 'Source: Kultusministerkonferenz, Ferien im Schuljahr 2026/2027, as of 9 October 2025. The KMK notes that special rules apply to the summer and autumn holidays on Sylt, Föhr, Amrum, Helgoland and the Halligen. The KMK agrees the summer dates years ahead; the Länder set the rest.' },
        { kind: 'two', mt: true,
          leftH3: 'Who lives here',
          left: [
            'Destatis counts 2,959,517 people in Schleswig-Holstein on 31 December 2024 and 252,668 in Kiel, the Land capital. The other city above 100,000 is Lübeck; most families live in smaller towns and in the Kreise around Hamburg.',
            'Online classes mean the place matters less than the timetable: a pupil on Föhr has the same mentor and the same lessons as one in Kiel.'
          ],
          rightH3: 'Planning around exams',
          right: [
            'For an Oberstufe pupil the spring of 2027 is busy: the English speaking exam in mid March, the Easter holidays from 30 March, then the written German and maths exams in late April and early May.',
            'We plan revision blocks backwards from the school\'s own exam dates and lighten the load in the exam weeks themselves.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are the classes in Schleswig-Holstein?',
      lede: 'Lessons sit in the German afternoon or on a weekend morning, which is evening or afternoon for the mentor. Three example rows show how the two clocks line up.',
      body: [
        { kind: 'table', numCols: [], caption: 'German time and the mentor\'s time in India', head: ['Time in Schleswig-Holstein', 'India time, winter (until 28 March 2027)', 'India time, summer (from 28 March 2027)'], rows: [
          ['14:00', '18:30', '17:30'],
          ['18:00', '22:30', '21:30'],
          ['Saturday 11:00', '15:30', '14:30']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz sets MEZ (UTC+1) for the German winter and MESZ (UTC+2) for the summer; the clocks went back on 25 October 2026 and go forward on 28 March 2027. India keeps UTC+5:30 the whole year, so the gap is four and a half hours until late March 2027 and three and a half after it.' },
        { kind: 'p', mt: true, html: 'When you book, you pick a time in your own clock; the mentor sees the same moment in theirs. These rows are examples to show the offset, not fixed batch times.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a pupil can do at each stage',
    lede: 'Our own milestones for the Informatik Companion course, used to place a pupil and to report progress.',
    table: { caption: 'Informatik milestones, grades 5 to 10 (ours)', head: ['Stage', 'Typical grade', 'The pupil can'], rows: [
      ['1. Algorithms on paper', '5 to 6', 'Write clear steps for a task and find the mistake in someone else\'s'],
      ['2. First programs', '6 to 7', 'Build loops and decisions, first in blocks, then in Python'],
      ['3. Data in tables', '7 to 8', 'Read a CSV file, count and add with a filter'],
      ['4. Structures', '8 to 9', 'Use lists and dictionaries and explain which fits the job'],
      ['5. Systems', '9 to 10', 'Describe how data crosses a network and write a small database query']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the wind project. A pupil who learns to ask "which rows am I adding?" reads every statistic in the news more carefully.',
      'We report what your child can build and explain, never hours in front of a screen.'
    ] },
    right: { h3: 'For pupils', ps: [
      'A program that runs without an error can still answer the wrong question.',
      'Before you add up a column, read the column next to it.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for families in Schleswig-Holstein',
    lede: 'All live and in English, with one regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Before grade 7', sub: 'Ages 7 to 12', courses: [
        { code: 'CHO / EARLY / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch games to first apps, for the years before school Informatik begins.' },
        { code: 'CHO / EARLY / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic puzzles and step-by-step plans, a fine warm-up for the Biber.' },
        { code: 'CHO / EARLY / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python from about 9, with small AI projects.' }
      ] },
      { num: 'II', h3: 'Beside grades 7 to 10', sub: 'Ages 12 to 16', courses: [
        { code: 'CHO / MID / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The full language, from first script to files and classes.' },
        { code: 'CHO / MID / 02', slug: 'mysql-mastery-for-teens', title: 'SQL for Teens', blurb: 'Queries and table design, the database part of school Informatik.' },
        { code: 'CHO / MID / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Real public data, charts and a first model.' }
      ] },
      { num: 'III', h3: 'Oberstufe and beyond', sub: 'Ages 15 to 19', courses: [
        { code: 'CHO / UPPER / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Object orientation in the language many Oberstufe courses use.' },
        { code: 'CHO / UPPER / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for Teens', blurb: 'Data structures and problem solving with proofs of cost.' },
        { code: 'CHO / UPPER / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik in English', blurb: 'Analysis, geometry and stochastics for the maths exam on 5 May 2027.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for a family in Schleswig-Holstein',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'From early afternoon, once the school day ends.' },
      { time: 'Saturdays', l: 'Late morning, a quiet slot before sport and family plans.' },
      { time: '1-on-1', l: 'A time you agree with the mentor, moved around exams.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person each week, who learns how the pupil reasons.' },
      { h3: 'Plain English', p: 'Spoken at the learner\'s speed, with German school terms understood.' },
      { h3: 'Hands on the keys', p: 'The pupil writes the code; the mentor asks the questions.' },
      { h3: 'Mapped to school', p: 'Topics placed against the grades where the Land teaches them.' },
      { h3: 'Short reports', p: 'What was built, what was hard, what is next, for parents.' },
      { h3: 'Class or private', p: 'A class of 15 to 20 at a similar stage, or a mentor of your own.' }
    ]
  },

  projectsH2: 'Projects by our older students',
  projectsLede: 'Pupils who keep going build things worth showing. A few are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews from parents and students, quoted exactly.',

  fees: {
    h2: 'Fees for families in Schleswig-Holstein',
    lede: 'One monthly payment covers eight live classes, and any month can be the last. The figures here are euro amounts worked out from the reference rate of the European Central Bank; the card is charged in US dollars, so the bank converts it and the line on your statement may be a few cents apart.',
    free: ['A free first class', 'A short problem to reason through and a first program', 'No card needed'],
    group: ['Fifteen to twenty pupils at a similar stage', 'One regular mentor', 'Two classes a week', 'Monthly, cancel any month'],
    one: ['One pupil, one mentor', 'Your own pace and topics', 'Times that fit school and exams']
  },

  faq: {
    eyebrow: 'Families in Schleswig-Holstein ask',
    h2: 'Coding classes in Schleswig-Holstein: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and taught in English only. Mentors adjust their pace and get used to the learner\'s accent, and they understand German school terms such as Wahlpflicht or Profilfach when a pupil uses them.' },
      { q: 'Is Informatik compulsory in Schleswig-Holstein?', a: 'Yes. The Gesellschaft für Informatik\'s Informatik-Monitor 2026/27 states that from the 2024/25 school year Informatik is compulsory at all school types, four weekly hours in total across grades 7 to 10. Each school decides how to spread those hours.' },
      { q: 'Which grade will my child start Informatik in?', a: 'It depends on the school. The four compulsory hours fall somewhere in grades 7 to 10, for example two hours in grade 7 and two in grade 8. In grades 5 and 6 schools may build Informatik into another subject. Ask the school which years it uses.' },
      { q: 'Is the Informatik Abitur set centrally in Schleswig-Holstein?', a: 'Not at the raised level. The Informatik-Monitor says teachers at each school submit task proposals and the subject inspectorate selects them. Computer work is allowed but optional and may count for at most a quarter of the marks of a task.' },
      { q: 'When is the maths Abitur in 2027?', a: 'The Land lists the written maths exam for general schools on 5 May 2027, and the written German exam on 27 April 2027, as of 24 July 2025 and subject to change. Oral exams follow from 14 to 25 June 2027.' },
      { q: 'What time are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. India is 4 hours 30 minutes ahead of German time in winter and 3 hours 30 minutes ahead in summer.' },
      { q: 'Do you help with school grades or certificates?', a: 'We teach alongside school and never award German grades or qualifications. The school course and its exams are the ones that count; we strengthen the understanding and the practice behind them.' },
      { q: 'My child is 9. Is that too early?', a: 'No. Children of 7 to 12 start with Scratch or with typed Python from about 9, years before school Informatik begins in grade 7. The free first class shows which path suits your child.' },
      { q: 'Where are the mentors?', a: 'In India, teaching live over video. That is why afternoon and weekend slots in Schleswig-Holstein fall in the mentor\'s evening or afternoon. Your child sees the same mentor every week.' },
      { q: 'How are fees charged?', a: 'Monthly. Fees are shown in euro at the European Central Bank reference rate and taken in US dollars, so your bank converts the payment and the statement can differ slightly. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Schleswig-Holstein.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page we have written for families across the country.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'How all sixteen Länder compare.' },
      { href: '/abitur-computer-science-in-english', label: 'Informatik Abitur in English', p: 'The Oberstufe subject explained.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The maths exam and the common task pool.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, do not copy', p: 'How we teach reasoning in the age of AI tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class the mentor gives your child a small problem to think through and a first program to write, gets a sense of their English and their pace, and suggests a course and a group.',
    readFirst: 'If you would like to read more first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes the lessons and <a class="ag-inline-link" href="/courses">all courses</a> lists every syllabus.',
    note: 'Live online with mentors in India, taught in English only. WhatsApp is the quickest way to reach us, in English.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Informatik', links: [
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/abitur-computer-science-in-english', label: 'Informatik Abitur' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Read the status column before you add'
  },

  personalityCss: `
.ag-root.ag-cho .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cho .ag-capsule { border-left-width: 6px; }
.ag-root.ag-cho .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-cho .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cho .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Schleswig-Holstein and national pages); KMK Ferien im Schuljahr 2026/2027 and Schema der Bildungsgänge; Landesportal Schleswig-Holstein, Prüfungstermine des Abiturs 2027; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz. Data: Landesamt für Umwelt Schleswig-Holstein, Windkraftanlagen, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Schleswig-Holstein wind turbine register of 12 October 2026: Version 1 adds every row (4,365 turbines, 16,454 MW), Version 2 splits by status (3,287 running with 9,940 MW; 565 approved; 513 in the approval process), Version 3 ranks the Kreise by running capacity and shows Kiel has no entry. Lesson family: filter before you sum.',
    requiredMentions: ['windkraftanlagen-2026-10-12.csv', 'Total power: 16454 MW', 'in Betrieb | 3287 turbines | 9940 MW', 'Nordfriesland 2579 MW', 'Kiel in the list: False', 'four of about 100 Gymnasien', '21 December 2026 to 6 January 2027', 'Read the status column before you add'],
    sources: [
      { claim: 'Schleswig-Holstein Informatik rules, Oberstufe, Abitur task setting and 2024/25 figures.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/schleswig-holstein' },
      { claim: 'Four Länder meet the four-hour recommendation.', url: 'https://informatik-monitor.de/' },
      { claim: 'Holidays 2026/27 and island footnote.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Abitur 2027 dates.', url: 'https://www.schleswig-holstein.de/DE/landesregierung/themen/bildung-hochschulen/zentrale-abschluesse/allg-zentralabitur/Zentralabitur_Pruefungstermine' },
      { claim: 'Populations 31.12.2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/02-bundeslaender.xlsx?__blob=publicationFile' },
      { claim: 'Wind turbine register and licence.', url: 'https://opendata.schleswig-holstein.de/dataset/windkraftanlagen-2026-10-12' }
    ],
    rejectedClaims: [
      'The exam date of the Informatik profile subject: the ministry table does not name Informatik, so none is given.',
      'Any cause for the 1,324 m hub height: the data does not say, so the page only asks pupils to question it.',
      'Gender shares from the monitor: left out under the no gender statistics rule.',
      'Any affiliation with the ministry, the GI, the KMK or a school: none.'
    ]
  }
};
