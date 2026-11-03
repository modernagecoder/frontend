'use strict';
// Coding classes in Saxony (ag- Land page, Germany cluster P4 row DE101, hubGroup land, code sac, accent #236675).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show euro,
// checkout charges USD.
// Spine: Saxony is the Land that takes school Informatik most seriously, by every measure the GI publishes: Informatik in
// every year from grade 7 to 10 at both school types, about half of the Oberstufe taking it, the highest share of Informatik
// teachers, and a central Leistungskurs exam with a practical part at the computer and Python 3 or Java documentation on the
// desk. For a Saxon pupil the question is not whether to start, but how far to go.
// Sources (read raw 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Sachsen page (facts-school/src/infmon-sachsen/135681b2.txt): "Sowohl an der Oberschule als
//    auch am Gymnasium wird das Fach Informatik jeweils einstündig in den Jahrgangsstufen 7 bis 10 unterrichtet."; Grundkurs
//    "zweistündig"; Leistungskurs "an ausgewählten Gymnasien möglich"; Ersetzungsregelung (Informatik can replace a science if at
//    least one classical science is taken); Grundkurs oral exam or besondere Lernleistung; "Die schriftlichen
//    Abiturprüfungsaufgaben im Fach Leistungskurs Informatik werden zentral erstellt. Die Prüfungsaufgaben enthalten im
//    verbindlichen Prüfungsteil B eine oder mehrere Aufgaben mit praktischem Anteil."; aids in part B incl. "Dokumentationen für
//    SQL und Python 3 und Java sowie ein für die Prüfung zugelassener Computer"; Technik/Computer in grades 5 and 6;
//    Lehrplan 2022 for Informatik grades 7 to 10 (Oberschule) and 7 to 12 (Gymnasium); Informatik in grade 10 at three
//    M.I.T.-Gymnasien; Grundschule 1 to 4, Oberschule, Gymnasium, Gemeinschaftsschule; G8 (FACTS 52); key figures: Sek II
//    share "43 %" (2024/2025, KMK); 1563 Informatik teachers, "10 %" of all teachers, 16 new hires (2025/2026, SMK); the
//    monitor's 8 % target is projected from Saxony, "dem Bundesland mit dem höchsten Anteil".
//  - Informatik-Monitor national page: Saxony among four Länder meeting the 4-hour recommendation (FACTS 91); Saxony and MV
//    "etwa die Hälfte der Lernenden" take Informatik in the Oberstufe (FACTS 98).
//  - SMK, VwV Abiturprüfung 2027, 6 May 2025 (revosax 21215/48147; src-pages/<slug>/raw/rv_21215_48147.pdf, .txt):
//    Informatik LK "Gesamtarbeitszeit für Prüfungsteile A, B und C: 300 Minuten (einschließlich Auswahlzeit), davon
//    Prüfungsteil A: höchstens 100 Minuten"; part C "eine von zwei Wahlaufgaben"; part B and C aids "Dokumentationen für
//    Python 3 oder Java oder andere Software, welche durch die oberste Schulaufsichtsbehörde ... festgelegt wird"; MMS without
//    network access; maths LK 300 minutes, Part A at most 110 minutes; maths GK 255 minutes.
//    schule.sachsen.de was unreachable when FACTS was compiled and statistik.sachsen.de answered 502 then 500 on 3 Nov 2026:
//    no 2027 written exam dates printed.
//  - KMK: Oberschule (Sachsen) two-track school (FACTS 21); FER2026_27 row "Sachsen (1) 12.10. - 24.10. 23.12. - 02.01.
//    08.02. - 19.02. 26.03. - 02.04. 07.05. 15.05. - 18.05. 10.07. - 20.08." (raw src/kmk-fer2627/fe303dbf.txt); FACTS 269.
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Sachsen 4,042,422; Dresden 564,904.
//  - Data: Landeshauptstadt Dresden, "Fahrzeugbestand 2016ff.: Kraftfahrzeuge nach Kraftstoff-Energiequelle ab StB", via
//    GovData https://ckan.govdata.de/dataset/fahrzeugbestand-2016ff-kraftfahrzeuge-nach-kraftstoff-energiequelle-ab-stb,
//    licence Datenlizenz Deutschland Namensnennung 2.0, file fahrzeugbestand_kraftstoff.csv (25,975 bytes, sha256 4152ccc3...
//    9eebfa51), downloaded 3 November 2026. Dresden's daily weather series was rejected: licence other-closed.
// Our own calculations (scratchpad de/w/L2/sn/v1.py, v2.py, v3.py, python3 -I), exact output:
//    v1: "Electric 2016: 251 2025: 6988" / "Growth factor: 27.8" / "Percent change: 2684 %"
//    v2: "Share 2016: 0.1 %  share 2025: 2.74 %" / "Change: 2.64 percentage points"
//    v3: "2020 added 582 growth 81.9 %" / "2021 added 938 growth 72.5 %" / "2024 added 952 growth 20.5 %" /
//        "2025 added 1399 growth 25.0 %" (full list 2017 to 2025 in the scratchpad)
//    Year sums over all fuel types are our own sums of the file's rows (242,666 in 2016, 255,013 in 2025), not an
//    official total.
// Lesson family: percent, percentage points and growth factor are three different answers; say which one you mean.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  'from collections import defaultdict',
  '',
  'counts = defaultdict(lambda: defaultdict(int))',
  'with open("fahrzeugbestand_kraftstoff.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        counts[int(row["Jahr"])][row["Kraftstoff_Energiequelle"]] += int(row["Anzahl"])',
  '',
  'first, last = counts[2016]["Elektro"], counts[2025]["Elektro"]',
  'print("Electric 2016:", first, "2025:", last)',
  'print("Growth factor:", round(last / first, 1))',
  'print("Percent change:", round(100 * (last - first) / first), "%")'
].join('\n');

const V2 = [
  'def share(year):',
  '    return 100 * counts[year]["Elektro"] / sum(counts[year].values())',
  '',
  'print("Share 2016:", round(share(2016), 2), "%  share 2025:", round(share(2025), 2), "%")',
  'print("Change:", round(share(2025) - share(2016), 2), "percentage points")'
].join('\n');

const V3 = [
  'for year in range(2017, 2026):',
  '    before, now = counts[year - 1]["Elektro"], counts[year]["Elektro"]',
  '    print(year, "added", now - before, "growth", round(100 * (now - before) / before, 1), "%")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Saxony' },
  slug: 'coding-classes-in-saxony',
  code: 'sac',
  accent: '#236675',
  accentRationale: 'Saxony Land page: a deep Elbe teal #236675, the river that runs through Dresden, kept apart from the greens and browns of the neighbouring Land pages; contrast 5.28 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes in Saxony',
  title: 'Coding Classes in Saxony: Live Online in English, Klasse 7+',
  description: 'Coding classes in Saxony, live online in English: Informatik in every grade from 7 to 10, the practical Leistungskurs exam, holidays and a Dresden project.',
  ogDescription: 'Live coding in English for pupils in Saxony, the Land with the most school Informatik: one lesson a week from grade 7 to 10, about half of the Oberstufe taking the subject, a Leistungskurs exam with a practical part, the 2026/27 holidays and an original project on Dresden vehicle data.',
  twitterDescription: 'Coding in English for Saxony: Informatik from grade 7, the practical Abitur exam and a Dresden data project on percentages.',
  pageName: 'Coding Classes in Saxony',
  webPageDescription: 'A guide for families in Saxony to coding and school Informatik, built from the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, the Saxon ministry\'s administrative rule for the Abitur 2027, the KMK holiday tables and Destatis, with an original Python project on vehicle registrations by fuel in Dresden.',
  courseDescription: 'Live online coding classes in English for learners in Saxony: support for Informatik from Klasse 7, Python and Java for the Leistungskurs and its practical exam, SQL, competition training and adult courses, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Saxony',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'Informatik' },
    { href: '#abitur', label: 'Exam' },
    { href: '#project', label: 'Dresden data' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Saxony &middot; Coding and Informatik &middot; Klasse 7 to Leistungskurs',
  h1: 'Coding classes in Saxony',
  lede: 'No Land teaches more school Informatik than Saxony. Every pupil at an Oberschule or Gymnasium has it from grade 7 to grade 10, roughly half of the Oberstufe keeps it, and the Leistungskurs exam includes practical work at a computer with Python 3 or Java documentation allowed. So the question for a Saxon family is not whether to begin, but how far to take it. This page sets out the rules with their sources, the holiday dates, how our live classes in English fit in, and a Dresden data project about three ways to describe the same growth.',
  secondaryCta: { href: '#project', label: 'See the Dresden project' },
  wa: 'Hello Modern Age Coders, we live in Saxony and would like to book a free coding class in English.',
  heroNote: 'Teaching online, live, since 2020 &middot; 10,000+ students around the world &middot; English-only lessons, one mentor who stays',
  spec: [
    ['Ages', 'About 10 to 19, and adults'],
    ['Fits beside', 'Informatik 7 to 10, Grund- and Leistungskurs'],
    ['Languages', 'Python, Java, SQL'],
    ['Group size', 'Fifteen to twenty, or private'],
    ['Mentors', 'In India, teaching in English'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding to pupils in Saxony in live online classes in English, for school pupils from about 10 and adults alike, either one to one or in batches of fifteen to twenty. Pupils who already have Informatik every week from grade 7 use our Informatik Companion course to go further, and Oberstufe pupils practise Python or Java and SQL for the Leistungskurs exam, which includes work at a computer.',

  picks: {
    eyebrow: 'Saxon starting points',
    h2: 'Three courses for pupils who already have Informatik at school',
    lede: 'One that deepens grades 7 to 10, one built around the Leistungskurs exam, and one for databases, which the Saxon exam names directly.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'SAC / 01', title: 'Informatik Companion, Klasse 5 to 10', note: 'Mostly 10 to 16. Goes beyond the weekly school lesson with longer programs, data and algorithms, so a Saxon pupil arrives at the Oberstufe with real fluency.' },
      { course: 'informatik-abitur-course-java-python', code: 'SAC / 02', title: 'Informatik for the Oberstufe and Abitur', note: 'Mostly 16 to 19. Python or Java, data structures, automata and modelling, with timed practical tasks like the ones in part B of the Saxon exam.' },
      { course: 'mysql-mastery-for-teens', code: 'SAC / 03', title: 'SQL and databases for teens', note: 'Ages 13 to 18 or so. Tables, queries, joins and design, a topic for which the Saxon exam allows SQL documentation on the desk.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Informatik in Saxony',
      h2: 'How much Informatik do Saxon schools teach?',
      lede: 'More than anywhere else in Germany. The facts below come from the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, which compiles the Land\'s ordinances.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik for a pupil in Saxony, from grade 5 to the Abitur', head: ['Grades', 'Where', 'What the rules give'], rows: [
          ['5 and 6', 'Oberschule and Gymnasium', 'Technik/Computer, with some informatics content'],
          ['7 to 10', 'Oberschule and Gymnasium', 'Informatik, compulsory, one lesson a week every year'],
          ['10', 'Three M.I.T.-Gymnasien', 'Additional Informatik is possible'],
          ['11 and 12', 'Gymnasium, Grundkurs', 'Informatik, two lessons a week; oral exam or special project'],
          ['11 and 12', 'Selected Gymnasien, Leistungskurs', 'Informatik at raised level; central written exam possible']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Sachsen page, read 2 November 2026. Curricula from 2022 cover Informatik in grades 7 to 10 at the Oberschule and grades 7 to 12 at the Gymnasium. The Saxon Gymnasium runs as G8, with grade 10 as the Einführungsphase and grades 11 and 12 as the Qualifikationsphase.' },
        { kind: 'two', mt: true,
          leftH3: 'Ahead of the others',
          left: [
            'Nationally, the GI places Saxony in the small group of four Länder that already give at least the four compulsory hours the KMK\'s scientific commission asked for in the short term, and names Saxony and Mecklenburg-Vorpommern as the leaders in the Oberstufe, where about half of all pupils take Informatik. The Saxony page itself gives 43 % for 2024/25, from KMK figures, against a national average of about 15 %.',
            'Saxony also has the most teachers for the subject. For 2025/26 the monitor reports 1,563 Informatik teachers, 10 % of all teachers, and uses Saxony, as the Land with the highest share, to estimate how many teachers the others would need.'
          ],
          rightH3: 'A real choice in the Oberstufe',
          right: [
            'Informatik in Saxony can replace a science in a pupil\'s course choices, provided at least one classical science is still taken, according to the monitor. The Grundkurs ends in an oral exam or a special project (besondere Lernleistung); only the Leistungskurs, offered at selected Gymnasien, has a written exam.',
            'That makes the Leistungskurs a demanding route, and it is not on offer everywhere: whether a school in Chemnitz, Leipzig or a smaller town runs one is a question for that school.'
          ] },
        { kind: 'p', mt: true, html: 'Saxony has 4,042,422 residents, 564,904 of them in Dresden, the Land capital (Destatis, 31 December 2024). Its school system has a four-year Grundschule, then the Oberschule, the Gymnasium or the newer Gemeinschaftsschule. The KMK lists the Saxon Oberschule as a school that combines two tracks under one roof.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the lessons in German or in English?',
      lede: 'In English only. Our mentors are based in India, teach live and fit their pace and accent to the learner.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Only English', p: 'We do not run any lessons in German. For a Saxon pupil that means programming and English practice in the same hour; for a family that already speaks English, it means nothing new to get used to.' },
          { h3: 'Fitted to the learner', p: 'A mentor slows down, explains twice in different words and checks before moving on. Within a few lessons they know how a pupil speaks and how they think.' },
          { h3: 'German terms included', p: 'The Saxon curriculum and exam use German words: Algorithmus, Datenbank, Automat, and operators such as implementieren or analysieren. We teach in English and give the German term each time.' }
        ] }
      ]
    },
    {
      id: 'abitur',
      tint: 'tint',
      eyebrow: 'The Leistungskurs exam',
      h2: 'What is in the Saxon Informatik Abitur?',
      lede: 'A five-hour central exam in three parts, with practical work at a computer in part B. The details come from the Kultusministerium\'s administrative rule for the 2027 Abitur and the Informatik-Monitor.',
      body: [
        { kind: 'table', numCols: [], caption: 'Saxon Leistungskurs Informatik exam, Abitur 2027 (VwV Abiturprüfung 2027)', head: ['Part', 'What the pupil does', 'Aids'], rows: [
          ['A', 'Several compulsory tasks on core informatics, handed in within the first 100 minutes', 'None beyond a spelling dictionary'],
          ['B', 'One or more compulsory tasks from different areas, with a practical part, completing or using given files', 'Approved computer, documentation for Python 3, Java or other approved software, IQB formula collection'],
          ['C', 'One of two optional tasks, open and practical', 'As in part B'],
          ['Total', '300 minutes including choice time', '']
        ] },
        { kind: 'source', html: 'Sources: Sächsisches Staatsministerium für Kultus, VwV Abiturprüfung 2027 of 6 May 2025 (as published on revosax.sachsen.de, version of 1 August 2025), read 3 November 2026; Informatik-Monitor 2026/27, Sachsen page, which adds SQL documentation to the permitted aids in part B. The same rule sets the maths Leistungskurs at 300 minutes, with part A within 110 minutes, and the maths Grundkurs at 255 minutes. We could not fetch the Saxon 2027 exam dates, so we print none; your school has them.' },
        { kind: 'two', mt: true,
          leftH3: 'Part A is the trap',
          left: [
            'Part A is done without the computer and without documentation, and the pupil decides when to hand it in, at the latest 100 minutes after the start. A pupil who can only program with an editor\'s help loses time here that they need for the practical parts.',
            'So we drill part A style questions separately: trace this loop, give the output, write the method signature, all by hand.'
          ],
          rightH3: 'Parts B and C reward practice',
          right: [
            'In parts B and C the pupil works with given files on an approved computer. Speed comes from familiarity: reading someone else\'s code, finding the method that needs completing, testing a change. Those skills grow with steady practice, which is where our lessons help most.',
            'For the Abitur, only the school course and its teachers count. Our lessons sit beside that course; we neither write nor grade school work and play no part in the exam.'
          ] }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'Holidays',
      h2: 'When are the school holidays in Saxony in 2026/27?',
      lede: 'Saxony, Saxony-Anhalt and Thuringia share their summer dates in 2027. Our lessons go on through the holidays unless a family pauses.',
      body: [
        { kind: 'table', numCols: [], caption: 'Saxon school holidays in 2026/27', head: ['Holiday', 'From and to'], rows: [
          ['Autumn', '12 to 24 October 2026'],
          ['Christmas', '23 December 2026 to 2 January 2027'],
          ['Winter', '8 to 19 February 2027'],
          ['Easter', '26 March to 2 April 2027'],
          ['Ascension and Whitsun', '7 May 2027, and 15 to 18 May 2027'],
          ['Summer', '10 July to 20 August 2027']
        ] },
        { kind: 'source', html: 'Listed in the KMK\'s Ferien im Schuljahr 2026/2027 (state of 9 October 2025) and its summer holiday plan for 2025 to 2030. Saxony has one movable holiday day.' },
        { kind: 'p', mt: true, html: 'The two-week winter break from 8 to 19 February 2027 is longer than in most Länder, and some Oberstufe pupils use part of it for an intensive block of exam practice, while younger pupils often try a short course such as Python for beginners.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Dresden data project',
      h2: 'How fast are electric cars growing in Dresden? Three honest answers',
      lede: 'The Landeshauptstadt Dresden publishes the number of registered motor vehicles by fuel type and district, year by year since 2016. Our pupils use it to learn something newspapers often get wrong: a percent, a percentage point and a growth factor are three different answers to the same question, and all three can be true.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file fahrzeugbestand_kraftstoff.csv comes from the city\'s open data portal under the Datenlizenz Deutschland Namensnennung 2.0, which allows reuse with credit. Each row holds a year, a city district (Stadtbezirk), a fuel or energy source (Benzin, Diesel, Elektro, Hybrid, Plug-In-Hybrid, sonstige) and a count. Our copy dates from 3 November 2026.',
            'The program adds the rows for each year and fuel type. Those year totals are our own sums of the file\'s rows, not an official figure.'
          ],
          rightH3: 'The question',
          right: [
            'How much has the number of electric vehicles grown? A headline might say "up 2,684 %", another "now almost 3 % of all vehicles", a third "28 times as many". Which is right?',
            'Each version of the program answers one of those, and the lesson is to say clearly which one you are giving.'
          ] },
        { kind: 'code', label: 'Version 1: growth factor and percent change', lang: 'Python', code: V1, note: 'It prints: <code>Electric 2016: 251 2025: 6988</code>, <code>Growth factor: 27.8</code> and <code>Percent change: 2684 %</code>.' },
        { kind: 'p', mt: true, html: 'From 251 to 6,988 is a growth factor of 27.8: almost 28 times as many. As a percent change that is 2,684 %, a number so large it is hard to picture. Both are correct. Neither says how common electric vehicles are.' },
        { kind: 'code', label: 'Version 2: share and percentage points', lang: 'Python', code: V2, note: 'It prints: <code>Share 2016: 0.1 %  share 2025: 2.74 %</code> and <code>Change: 2.64 percentage points</code>.' },
        { kind: 'p', mt: true, html: 'In 2025 electric vehicles were 2.74 % of all motor vehicles in the file, up from 0.1 % in 2016. The share rose by 2.64 percentage points. Writing "rose by 2.64 %" would be wrong: a rise of 2.64 % from 0.1 % would barely move it. Percentage points measure the difference between two percentages; percent measures change relative to the start.' },
        { kind: 'code', label: 'Version 3: the year-by-year picture', lang: 'Python', code: V3, note: 'Among its lines: <code>2020 added 582 growth 81.9 %</code>, <code>2021 added 938 growth 72.5 %</code>, <code>2024 added 952 growth 20.5 %</code> and <code>2025 added 1399 growth 25.0 %</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Electric motor vehicles in the Dresden file, selected years (our calculation)', head: ['Year', 'Electric', 'Added that year', 'Growth on the year before'], rows: [
          ['2016', '251', '', ''],
          ['2020', '1,293', '582', '81.9 %'],
          ['2021', '2,231', '938', '72.5 %'],
          ['2024', '5,589', '952', '20.5 %'],
          ['2025', '6,988', '1,399', '25.0 %']
        ] },
        { kind: 'source', html: 'Data: Landeshauptstadt Dresden, Fahrzeugbestand 2016ff.: Kraftfahrzeuge nach Kraftstoff-Energiequelle ab Stadtbezirk, Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. All factors, percentages and differences are our own calculations from the file; it gives no reasons for the changes, and neither do we.' },
        { kind: 'p', mt: true, html: 'Version 3 adds a fourth truth. The yearly growth rate fell from 81.9 % in 2020 to 25.0 % in 2025, yet more vehicles were added in 2025 (1,399) than in 2020 (582). A falling percentage does not mean slower growth in numbers; it means the base got bigger. That is the habit to take away: before you compare two numbers, say whether they are counts, percents or percentage points.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 10 to 12, by hand.</strong> A class had 2 pupils with a library card out of 20; now 6 out of 20 do. Work out the growth factor, the percent change and the change in percentage points.',
          '<strong>Ages 12 to 14, Python.</strong> Run Version 1, then change it to the Hybrid fuel type and compare the factor with the electric one.',
          '<strong>Ages 14 to 16, Python.</strong> Write Version 2 for each district and find where the electric share rose the most in percentage points.',
          '<strong>Going further.</strong> Fit a straight line and an exponential curve to the electric counts. Which describes 2021 to 2025 better, and how would you test that fairly?'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Contests',
      h2: 'Which informatics contests can pupils in Saxony enter?',
      lede: 'The national ones, usually through school.',
      body: [
        { kind: 'p', html: 'With a weekly Informatik lesson from grade 7, many Saxon pupils are well placed for the national contests run by Bundesweite Informatikwettbewerbe. The Informatik-Biber, a free puzzle quiz for grades 3 to 13, takes place from 9 to 20 November 2026; the first round of the 45th Bundeswettbewerb Informatik is open until 23 November 2026; and the IOI 2027, the international olympiad, will be held from 12 to 19 September 2027 in Potsdam. Our contest lessons rely on puzzles and problems we write ourselves; the organisers\' own tasks are never copied, and we have no link with BWINF.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are lessons for pupils in Saxony?',
      lede: 'Weekday afternoons and evenings, or an early weekend slot; the booking page shows every option in your local time.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Saxon lesson times with the time in India', head: ['Saxony', 'India this winter', 'India from 28 March 2027'], rows: [
          ['14:00', '18:30', '17:30'],
          ['18:15', '22:45', '21:45'],
          ['Sunday 09:30', '14:00', '13:00']
        ] },
        { kind: 'source', html: 'Germany runs on UTC+1 in winter and UTC+2 in summer under the Einheitenzeitgesetz; the switch back was on 25 October 2026, the switch forward is on 28 March 2027. India keeps UTC+5:30, so it is four and a half hours ahead now and three and a half from late March. Rows are examples, not fixed batches.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a learner in Saxony can do at each stage',
    lede: 'A ladder of our own for placing learners and reporting to parents. It does not replace school marks.',
    table: { caption: 'Programming milestones from grade 7 to the Leistungskurs (ours)', head: ['Step', 'Usual grade', 'What the learner manages'], rows: [
      ['1. Beyond the lesson', '7', 'Write Python programs longer than the weekly school task, with loops and functions'],
      ['2. Numbers with care', '8 to 9', 'Compute a percent, a percentage point and a factor, and say which is which'],
      ['3. Data and SQL', '9 to 10', 'Read a CSV file in Python and write SQL queries with filters and groups'],
      ['4. Objects and modelling', '10 to 11', 'Model a problem with classes in Java or Python and test it'],
      ['5. Exam conditions', '12', 'Do part A by hand, then complete given files at the computer within the time']
    ] },
    left: { h3: 'For parents', ps: [
      'The Dresden project sits at stage 2: a pupil who can tell a percent from a percentage point reads every chart in the news more carefully.',
      'Our updates list what your child built and can explain, not hours online.'
    ] },
    right: { h3: 'For learners', ps: [
      'Whenever a growth figure appears, ask: is it a factor, a percent or a difference in percentage points?',
      'Part A has no computer. Practise it with a pencil.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners in Saxony',
    lede: 'All taught live in English by a regular mentor, as a group or one to one.',
    bands: [
      { num: 'I', h3: 'Ages 9 to 13', sub: 'Before and around grade 7', courses: [
        { code: 'SAC / KID / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Games and tiny AI experiments in real Python.' },
        { code: 'SAC / KID / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Logic games that train careful reasoning.' },
        { code: 'SAC / KID / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics competitions', blurb: 'Biber to Bundeswettbewerb, our own tasks.' }
      ] },
      { num: 'II', h3: 'Ages 13 to 18', sub: 'Grades 8 to 12', courses: [
        { code: 'SAC / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented programming for the Oberstufe.' },
        { code: 'SAC / TEEN / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python, tables and charts on real data.' },
        { code: 'SAC / TEEN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'The ideas behind contest and exam tasks.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and older', courses: [
        { code: 'SAC / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'Adults start here with no prior code.' },
        { code: 'SAC / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Cleaning and summarising real data.' },
        { code: 'SAC / ADULT / 03', slug: 'artificial-intelligence-complete-masterclass-college', title: 'Artificial intelligence', blurb: 'Machine learning concepts and practice.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for a Saxon family',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoon', l: 'From early afternoon on school days, German time.' },
      { time: 'Weekend', l: 'Saturday or Sunday mornings.' },
      { time: '1-on-1', l: 'A time set with the mentor, adjusted around exams.' }
    ],
    cells: [
      { h3: 'A fixed mentor', p: 'One familiar face each week, who remembers what tripped the learner up.' },
      { h3: 'Practical first', p: 'Code written and run in every lesson.' },
      { h3: 'Part A by hand', p: 'Pencil practice for the section without a computer.' },
      { h3: 'German words given', p: 'Curriculum and exam terms named next to English.' },
      { h3: 'Brief reports', p: 'Short notes for parents after each block.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Projects by learners who carried on; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has a longer list.',
  reviewsLede: 'Reviews from Google, posted by learners and parents and shown unedited.',

  fees: {
    h2: 'Fees for Saxon families',
    lede: 'A monthly fee pays for eight live lessons. Euro prices on this page are converted using the European Central Bank reference rate; payment is collected in US dollars, which your bank converts, so the figure on your statement can be slightly different.',
    free: ['A free first lesson', 'One task matched to the learner\'s grade', 'No card required'],
    group: ['A group of fifteen to twenty at a similar level', 'One mentor all the way', 'Two lessons a week', 'Paid by the month, cancel any month'],
    one: ['A learner with their own mentor', 'Content planned around school and the exam', 'Times agreed together']
  },

  faq: {
    eyebrow: 'Saxon families ask',
    h2: 'Coding classes in Saxony: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons are live and taught only in English, by mentors in India who adapt to the learner\'s speed and accent. Saxon curriculum terms in German are named alongside the English.' },
      { q: 'Is Informatik compulsory in Saxony?', a: 'Yes, from grade 7 to 10. The Informatik-Monitor 2026/27 records one lesson a week in each of those grades at both the Oberschule and the Gymnasium.' },
      { q: 'Why would my child need extra coding if school already teaches it?', a: 'One lesson a week builds a base, not fluency. Pupils who want the Leistungskurs, a contest or simply to build their own programs need more practice than the timetable allows.' },
      { q: 'Does the Saxon Informatik exam use a computer?', a: 'Partly. Under the VwV Abiturprüfung 2027, part A is done without aids and handed in within 100 minutes; parts B and C include practical work on an approved computer with Python 3 or Java documentation.' },
      { q: 'Is there a written Abitur exam in the Grundkurs?', a: 'No. The Informatik-Monitor says the Grundkurs ends in an oral exam or a special project, and only the Leistungskurs, offered at selected Gymnasien, has a written exam.' },
      { q: 'Can your lessons replace school Informatik?', a: 'No. The school course and its exams are what count. We teach alongside them and do not set, mark or award any school grade.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Early afternoon slots suit pupils whose school day ends early.' },
      { q: 'How many learners are in a group?', a: 'Between fifteen and twenty at a similar level. With one to one, the mentor works with your child alone.' },
      { q: 'How are fees charged?', a: 'We show the monthly fee in euro, converted at the European Central Bank reference rate, and charge your card in US dollars; your bank does the conversion. The first lesson is free.' },
      { q: 'Are you linked to the Saxon ministry or a school?', a: 'No. Modern Age Coders works on its own; there is no tie to the Sächsisches Staatsministerium für Kultus, the KMK, BWINF or any school in Saxony.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for families in Saxony.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our full set of Germany pages.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik in the sixteen Länder', p: 'Saxony against the other Länder.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'Oberstufe Informatik, explained for English speakers.' },
      { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik', p: 'Rounds and practice for 2026/27.' },
      { href: '/ioi-2027-potsdam-guide', label: 'IOI 2027 in Potsdam', p: 'The olympiad next door.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live lesson, start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'The free lesson is a single short programming task at the learner\'s level. The mentor sees how they work through it and how well they follow English, and recommends a course and a group.',
    readFirst: 'To read more first, see <a class="ag-inline-link" href="/how-we-teach">how our lessons run</a> or the <a class="ag-inline-link" href="/courses">list of all courses</a>.',
    note: 'Lessons are live online with mentors in India, in English only. The fastest way to reach us is WhatsApp.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Informatik', links: [
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/abitur-computer-science-in-english', label: 'Abitur computer science' },
        { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/german-school-system-maths-and-computing-explained', label: 'German school system' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Percent or percentage points?'
  },

  personalityCss: `
.ag-root.ag-sac .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-sac .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-sac .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-sac .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-sac .ag-code-head span { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Sachsen and national pages); Sächsisches Staatsministerium für Kultus, VwV Abiturprüfung 2027; KMK FER2026_27, Sommerferienregelung and school-type overview; Destatis GV-ISys 31.12.2024; BWINF 2026/27 dates; read 2 and 3 November 2026. Data: Landeshauptstadt Dresden, Fahrzeugbestand 2016ff. nach Kraftstoff-Energiequelle, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Three honest answers: an original Python project on Dresden\'s vehicle registrations by fuel. Electric vehicles rose from 251 (2016) to 6,988 (2025): growth factor 27.8, percent change 2684 %, share 0.1 % to 2.74 %, a change of 2.64 percentage points; the yearly growth rate fell from 81.9 % (2020) to 25.0 % (2025) while yearly additions rose from 582 to 1,399. Lesson family: percent, percentage points and growth factor are different answers.',
    requiredMentions: ['fahrzeugbestand_kraftstoff.csv', 'Electric 2016: 251 2025: 6988', 'Growth factor: 27.8', 'Change: 2.64 percentage points', '2025 added 1399 growth 25.0 %', 'VwV Abiturprüfung 2027', '8 to 19 February 2027', 'Percent or percentage points?'],
    sources: [
      { claim: 'Saxon Informatik 7 to 10, Oberstufe courses, central LK exam with practical part, key figures.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/sachsen' },
      { claim: 'Saxony meets the 4-hour recommendation; about half of the Oberstufe takes Informatik.', url: 'https://informatik-monitor.de/' },
      { claim: 'Abitur 2027 Informatik LK structure, aids and working time.', url: 'https://revosax.sachsen.de/vorschrift_gesamt/21215/48147.pdf' },
      { claim: 'Holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Population of Saxony and Dresden.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/02-bundeslaender.xlsx?__blob=publicationFile' },
      { claim: 'Dresden vehicles by fuel, DL-DE BY 2.0.', url: 'https://ckan.govdata.de/dataset/fahrzeugbestand-2016ff-kraftfahrzeuge-nach-kraftstoff-energiequelle-ab-stb' }
    ],
    rejectedClaims: [
      'Saxon Abitur 2027 written exam dates: ministry pages unreachable and the statistics server failing; none printed.',
      'An official total of vehicles in Dresden: the page uses our sums of the file rows only and says so.',
      'Reasons for the change in electric vehicles: not in the data, none given.',
      'German-language teaching: we teach in English only.',
      'Any affiliation with the SMK, the KMK, BWINF or a school: none.'
    ]
  }
};
