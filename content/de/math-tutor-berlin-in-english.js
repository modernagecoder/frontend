'use strict';
// Maths tutor in Berlin, in English (ag- city maths page, Germany cluster P5 row DE105).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: an English-speaking family in Berlin wants maths help that follows the Berlin school year. Spine: the Berlin
// maths calendar for 2026/27 (holidays and exam days in one table), how the MSA works for maths at an Integrierte
// Sekundarschule or Gemeinschaftsschule and at a Gymnasium, a German to English maths glossary (ours), a running-total
// project on Berlin open data, and a short look at the 2027 Abitur paper.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/math-tutor-berlin-in-english/):
//  - Senatsverwaltung für Bildung (Berlin), "Prüfungsplan für das Schuljahr 2026/27", "Stand: 15.09.2026"
//    (be-pruefungsplan-2027.pdf/.txt, fetched 3 Nov 2026 for the online-math-tutor page, copied here): "MSA und
//    erweiterte Berufsbildungsreife 2027"; "Die schriftlichen Prüfungen beginnen jeweils um 10:00 Uhr."; "Do,
//    08.04.2027 Deutsch"; "Di, 13.04.2027 1. Fremdsprache"; "Do, 15.04.2027 Mathematik"; "Mo, 24.05.2027 Nachtermin:
//    Mathematik"; "ab Mo, 15.02.2027 Präsentationsprüfungen"; Abitur 2027: "Die schriftlichen Prüfungen beginnen jeweils
//    um 09:00 Uhr."; "Mi, 05.05.2027 LF + 3. pf MATHEMATIK + mathematik Pool"; "Mi, 30.06.2027 ... letzter
//    Unterrichtstag im Schuljahr 2026/2027"; "Mo, 22.03. - Fr, 02.04.2027 Osterferien".
//  - berlin.de, Abschlüsse am Gymnasium nach Klasse 9 und 10 (be-gym-9-10.txt): "Die Jahrgangsnoten der 10. Klassen
//    bilden die Grundlage für die Erreichung des MSA. Dabei haben die Fächer Deutsch, Mathematik und die 1. Fremdsprache
//    eine besondere Bedeutung. Sie werden im Folgenden als Kernfächer im MSA bezeichnet."; "Mindestens eine
//    mediengestützte Projektarbeit ist für alle Schülerinnen und Schüler der Gymnasien in der Jahrgangsstufe 9 oder 10
//    Pflicht."
//  - FACTS.md: KMK Grundschule to grade 6 in Berlin (1); no leaving exam at the end of Grundschule (28); Berlin
//    Gymnasium G8, ISS and Gemeinschaftsschule G9 (54); VERA-8 2027 "08.02. bis 25.03.2027" (115); VERA "nicht benotet"
//    (116); ESA/MSA maths standards "i.d.F. vom 23.06.2022" (122) and the five Leitideen (124); IQB pool Part A without
//    aids (34), raised level 300 minutes and 100 BE, basic level 255 minutes and 80 BE (36 to 39); Berlin KMK holidays
//    2026/27 "Berlin 19.10. - 31.10. 23.12. - 02.01. 01.02. - 06.02. 22.03. - 02.04. 07.05. 18.05. - 19.05. 01.07. -
//    14.08." (278).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Berlin 3,685,265; Potsdam 184,754.
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027 (facts-geo/timezone.tsv).
//  - Data: CityLAB Berlin, "Gieß den Kiez - Nutzungsdaten", via Berlin Open Data / GovData
//    (https://ckan.govdata.de/dataset/giess-den-kiez-nutzungsdaten, govdata record saved), licence CC0 (dcat-ap.de
//    cc-zero). File giessdenkiezKPIs.csv from raw.githubusercontent.com/technologiestiftung/giessdenkiez-de-opendata,
//    2,841 bytes, sha256 2db4337a...162945a4, 54 rows, 2021-07-09 to 2026-11-01, downloaded 3 November 2026. Notes:
//    "über 625.000 Straßen- und Anlagenbäume"; "Während der Vegetationsperiode (01.03. bis 30.09.) werden die Daten
//    regelmäßig zu Beginn eines Monats aktualisiert."; "Gieß den Kiez ist Ende Mai 2020 online gegangen."
// Our own calculations (scratchpad de/w/C1/py/men_v1.py, men_v2.py, python3 -I, run in the data folder):
//  men_v1 prints "Largest jump: 2023-04-01 to 2024-05-10 365436 litres over 405 days",
//  "Fastest rate: 2022-08-01 to 2022-09-01 8183 litres per day", "Steps where the total fell: 3".
//  men_v2 prints "2022 June to August: 606516 litres", "2024 June to August: 81054 litres",
//  "2025 June to August: 118388 litres", "2026 June to August: 115803 litres", "2025 to 2026: -2.2 percent".
//  Exploration: the three falls are 2025-03-01 to 2025-04-01 (-17,236), 2026-01-01 to 2026-02-01 (-24), 2026-05-01 to
//  2026-06-01 (-9,057); latest row 2026-11-01: 2,410,343 litres, 61,563 waterings counted. 2022 to 2025 summer change
//  -80.5 percent (our calculation).
// Lesson family: a running total; differences give the amount, and a difference must be divided by its own time span.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  'from datetime import date',
  '',
  'rows = list(csv.DictReader(open("giess_kpis.csv", encoding="utf-8")))',
  'steps = []',
  'for before, after in zip(rows, rows[1:]):',
  '    d0 = date.fromisoformat(before["datestamp"])',
  '    d1 = date.fromisoformat(after["datestamp"])',
  '    litres = int(after["totalwateramount"]) - int(before["totalwateramount"])',
  '    steps.append((d0, d1, litres, (d1 - d0).days))',
  '',
  'jump = max(steps, key=lambda s: s[2])',
  'print("Largest jump:", jump[0], "to", jump[1], jump[2], "litres over", jump[3], "days")',
  'rate = max(steps, key=lambda s: s[2] / s[3])',
  'print("Fastest rate:", rate[0], "to", rate[1], round(rate[2] / rate[3]), "litres per day")',
  'print("Steps where the total fell:", sum(1 for s in steps if s[2] < 0))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'total = {}',
  'for row in csv.DictReader(open("giess_kpis.csv", encoding="utf-8")):',
  '    total[row["datestamp"]] = int(row["totalwateramount"])',
  '',
  'summer = {}',
  'for year in [2022, 2024, 2025, 2026]:',
  '    summer[year] = total[f"{year}-09-01"] - total[f"{year}-06-01"]',
  '    print(year, "June to August:", summer[year], "litres")',
  '',
  'change = (summer[2026] - summer[2025]) / summer[2025] * 100',
  'print("2025 to 2026:", round(change, 1), "percent")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'maths', label: 'Berlin: maths tutor' },
  slug: 'math-tutor-berlin-in-english',
  code: 'men',
  accent: '#814E32',
  accentRationale: 'Maths tutor in Berlin, in English: a warm chestnut brown #814E32, the bark of the street trees in the watering project and well apart from the Berlin kids page brick red; contrast 5.55 at its lowest on the paper tints and above 4.5 on all three',
  pageType: 'market',
  market: DE_EN,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Maths tutor in Berlin, in English',
  title: 'Maths Tutor in Berlin in English: Live Online, Klasse 1 to 13',
  description: 'A maths tutor in Berlin, live online in English: the 2026/27 Berlin maths calendar, MSA maths on 15 April 2027, Abitur on 5 May, and a tree-watering project.',
  ogDescription: 'Live online maths tutoring in English for Berlin pupils from Klasse 1 to the Abitur: the 2026/27 exam and holiday calendar, how the MSA works for maths, a German to English maths glossary and a Berlin data project.',
  twitterDescription: 'Maths help for Berlin pupils, live in English: the 2027 MSA and Abitur dates, a glossary and a Berlin data project.',
  pageName: 'Maths Tutor in Berlin in English',
  webPageDescription: 'A guide for English-speaking families in Berlin to maths tutoring that follows the Berlin school year, built from the Senate\'s Prüfungsplan 2026/27, berlin.de, KMK and IQB sources, with an original running-total project on the Gieß den Kiez open data.',
  courseDescription: 'Live online maths tutoring in English for Berlin pupils from Klasse 1 to 13: Grundschule maths, Klasse 7 to 10 toward the MSA, and Abitur Mathematik, in a group of fifteen to twenty or one to one, with a regular mentor who matches the pupil\'s pace.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Maths tutor, Berlin',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#calendar', label: 'Calendar' },
    { href: '#msa', label: 'MSA' },
    { href: '#project', label: 'Project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Berlin &middot; Maths tutoring &middot; Klasse 1 to 13',
  h1: 'Maths tutor in Berlin, in English',
  lede: 'Berlin pupils meet their first written maths exam with a fixed date in Klasse 10, and in 2027 that date is Thursday 15 April, less than two weeks after the Easter holidays end. This page lays out the whole Berlin maths year for 2026/27, explains how the MSA treats maths at an Integrierte Sekundarschule and at a Gymnasium, gives the German maths words an English-speaking child needs, and ends with a project on Berlin\'s tree-watering data that teaches the idea behind half of school algebra: a total, and how fast it grows.',
  secondaryCta: { href: '#calendar', label: 'See the 2026/27 calendar' },
  wa: 'Hello Modern Age Coders, my child goes to school in Berlin and needs maths help in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; maths in English, at your child\'s pace',
  spec: [
    ['Klassen', '1 to 13, every Berlin school type'],
    ['Focus', 'Klassenarbeiten, MSA, Abitur'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Berlin times', 'After school and weekend mornings'],
    ['Teachers', 'Maths mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'A maths tutor in Berlin from Modern Age Coders means live online lessons in English for pupils from Klasse 1 to the Abitur, with one regular mentor who adjusts to your child\'s pace and accent. The lessons track the Berlin school year: Grundschule maths up to Klasse 6, the MSA maths exam on 15 April 2027, and the Abitur maths paper on 5 May 2027. Choose a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Where Berlin pupils start',
    h2: 'Three maths courses that follow a Berlin school career',
    lede: 'One for the six Grundschule years, one for the stretch from Klasse 7 to the MSA, and one for the Oberstufe and the Abitur.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MEN / 01', title: 'Klasse 7 to 10 maths', note: 'Fractions and percentages through equations, functions, Pythagoras and probability: the ground the Berlin MSA maths paper is written on.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'MEN / 02', title: 'Grundschule maths', note: 'Klasse 1 to 6, the full Berlin Grundschule. Place value, written methods, measures, shapes and first data, with plenty of mental arithmetic.' },
      { course: 'abitur-mathematics-course-in-english', code: 'MEN / 03', title: 'Abitur Mathematik in English', note: 'For the Berlin Oberstufe from the Einführungsphase on, at raised or basic level: calculus, vectors and Stochastik, with regular calculator-free Part A drills.' }
    ]
  },

  sections: [
    {
      id: 'calendar',
      eyebrow: 'The Berlin maths year',
      h2: 'When are the Berlin maths exams and holidays in 2026/27?',
      lede: 'Berlin publishes its exam days months ahead. Put them next to the holidays and a plan almost writes itself.',
      body: [
        { kind: 'table', numCols: [], caption: 'Maths dates for Berlin pupils in the school year 2026/27', head: ['Date', 'What happens', 'Who it concerns'], rows: [
          ['1 to 6 February 2027', 'Winterferien', 'Every Berlin pupil'],
          ['8 February to 25 March 2027', 'VERA-8 test window, maths among the subjects', 'Klasse 8'],
          ['From 15 February 2027', 'MSA presentation exams begin', 'Klasse 10 taking the MSA exams'],
          ['22 March to 2 April 2027', 'Osterferien', 'Every Berlin pupil'],
          ['Thursday 15 April 2027, 10:00', 'MSA written exam, Mathematik', 'Klasse 10 taking the MSA exams'],
          ['Wednesday 5 May 2027, 09:00', 'Abitur written exam, Mathematik, pool tasks', 'Final year of the Oberstufe'],
          ['Monday 24 May 2027', 'MSA catch-up date (Nachtermin), Mathematik', 'Pupils who missed 15 April'],
          ['Wednesday 30 June 2027', 'Last day of teaching', 'Every Berlin pupil'],
          ['1 July to 14 August 2027', 'Sommerferien', 'Every Berlin pupil']
        ] },
        { kind: 'source', html: 'Sources: Berlin Senate education department (Senatsverwaltung für Bildung), Prüfungsplan für das Schuljahr 2026/27, as of 15 September 2026; KMK holiday table 2026/27 for Berlin; IQB, VERA-8 test window 2027. Read on 3 November 2026. The Prüfungsplan states that written MSA exams start at 10:00 and written Abitur exams at 09:00.' },
        { kind: 'two', mt: true,
          leftH3: 'What the table says',
          left: [
            'The Easter holidays end on Friday 2 April 2027 and the MSA maths paper follows on Thursday 15 April 2027. In between sit eight school days and the German and first-language exams on 8 and 13 April. A pupil who means to revise over Easter therefore has the holiday itself and very little after it.',
            'The Abitur maths paper on Wednesday 5 May 2027 is the last of the big written Abitur days in Berlin, after German on 27 April and English on 30 April 2027.'
          ],
          rightH3: 'What it does not say',
          right: [
            'Klassenarbeiten, the class tests teachers set during the year, have no city-wide dates. They are where most marks are made, and every school sets its own. Ask the school for its plan; the table above only shows the fixed points.',
            'VERA-8 is not marked. The IQB says plainly that VERA results are not graded and no school rankings are made, so it is a check on the class, not on your child.'
          ] }
      ]
    },
    {
      id: 'msa',
      eyebrow: 'Mittlerer Schulabschluss',
      h2: 'How does maths count toward the MSA in Berlin?',
      lede: 'It depends on the school type. The Senate describes two routes, and families are often surprised that a Gymnasium pupil does not need the written exam to gain the MSA.',
      body: [
        { kind: 'two',
          leftH3: 'At a Gymnasium',
          left: [
            'Berlin\'s page on qualifications at the Gymnasium says the MSA is reached through the year marks of Klasse 10. Three subjects carry special weight: German, maths and the first foreign language. The Senate calls them Kernfächer im MSA, the core subjects of the MSA.',
            'So for a Gymnasium pupil, a whole year of Klassenarbeiten in maths decides the core-subject mark. A tutor\'s job here is steady work across the year, not a last sprint. The same page adds that at least one mediengestützte Projektarbeit, a media-supported project, is compulsory in Klasse 9 or 10.'
          ],
          rightH3: 'At a Sekundarschule or Gemeinschaftsschule',
          right: [
            'The Prüfungsplan sets the written MSA exams for 2027: German on Thursday 8 April, the first foreign language on Tuesday 13 April and maths on Thursday 15 April 2027, each starting at 10:00. A catch-up date for maths is Monday 24 May 2027.',
            'Here one morning in April matters a great deal, and a calm, practised routine for a written paper is worth as much as any single topic. We teach toward that morning, and the school and the Senate set and mark the exam.'
          ] },
        { kind: 'p', mt: true, html: 'Whatever the route, the content is national. Since 2022 one KMK document sets the maths standards for both the Erster Schulabschluss and the MSA, in the version of 23 June 2022. It sorts school maths into five Leitideen: Zahl und Operation, Größen und Messen, Strukturen und funktionaler Zusammenhang, Raum und Form, and Daten und Zufall. Our Klasse 7 to 10 course uses the same five headings, so a parent can match a weak test to a strand in a minute.' },
        { kind: 'ol', mt: true, items: [
          '<strong>November to January.</strong> Find the weak strand. One short task per Leitidee shows where marks are lost, usually fractions, percentages or rearranging an equation.',
          '<strong>Winterferien, 1 to 6 February 2027.</strong> Rest, then one light week: two classes on the weakest strand only.',
          '<strong>February and March.</strong> Mixed practice, a full past-style paper written by us every second week, timed in Berlin exam conditions.',
          '<strong>Osterferien, 22 March to 2 April 2027.</strong> The main revision block: four short sessions a week, each ending with a ten-minute paper without a calculator.',
          '<strong>6 to 14 April 2027.</strong> Light touch only. Formulas, units, and sleep. The paper is on 15 April at 10:00.'
        ] },
        { kind: 'source', html: 'The five steps are our own plan for a pupil sitting the written MSA in 2027, not a Senate recommendation. Sources for the rules: berlin.de, Abschlüsse am Gymnasium nach Klasse 9 und 10; Prüfungsplan 2026/27; KMK Bildungsstandards Mathematik for the ESA and MSA, version of 23 June 2022.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Can my child learn German school maths in English?',
      lede: 'Yes, and many Berlin families choose it on purpose. The maths is the same; only the words differ, and we teach both sets.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English only, by design', p: 'Every lesson is live and in English. We do not teach in German, and we say so before the first class. Mentors slow down, rephrase and check understanding, and they adapt to a child whose English is still growing.' },
          { h3: 'Both vocabularies', p: 'Berlin tests are written in German, so a child who solves an equation in English must still read Löse die Gleichung. Each lesson ends with the German words for what was just learned.' },
          { h3: 'One mentor, every week', p: 'Your child keeps the same mentor, who learns which explanations land. Mentors are based in India and teach live over video with a shared whiteboard.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'German school maths words and their English, Klasse 5 to 10 (our glossary)', head: ['German', 'English', 'Where it turns up'], rows: [
          ['Bruch, Zähler, Nenner', 'Fraction, numerator, denominator', 'Klasse 5 and 6'],
          ['Prozentsatz, Grundwert', 'Percentage, base value', 'Klasse 7'],
          ['Gleichung umformen', 'Rearrange an equation', 'Klasse 7 and 8'],
          ['Steigung, y-Achsenabschnitt', 'Gradient, y-intercept', 'Klasse 8'],
          ['Satz des Pythagoras', 'Pythagoras\' theorem', 'Klasse 8 or 9'],
          ['Wahrscheinlichkeit', 'Probability', 'Klasse 7 to 10'],
          ['Überschlag', 'Estimate, rough check', 'Every Klasse']
        ] },
        { kind: 'source', html: 'Our own glossary. The Klasse column is a typical order, not a Berlin rule: each school sets its own internal plan within the Berlin framework.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Berlin data project',
      h2: 'What can Berlin\'s tree-watering data teach about totals and rates?',
      lede: 'Gieß den Kiez is a CityLAB Berlin web app where residents adopt and water street trees. Its usage numbers are open data, free to reuse, and they hide a lesson every Klasse 8 pupil needs.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file giess_kpis.csv is the usage summary from Gieß den Kiez - Nutzungsdaten, published through Berlin Open Data under CC0. We downloaded it on 3 November 2026. It has 54 rows from 9 July 2021 to 1 November 2026, and one column, totalwateramount, holds the litres logged in the app since it began.',
            'That makes it a running total: each row adds everything before it. By the row for 1 November 2026 the column has reached 2,410,343 litres. The dataset notes say the figures are updated at the start of each month during the growing season, 1 March to 30 September, and that the app went online at the end of May 2020.'
          ],
          rightH3: 'The question',
          right: [
            'When did Berliners water most? A running total cannot answer that by itself; the answer lives in the differences between rows. Subtract one row from the next and you have the litres added in between.',
            'But the rows are not evenly spaced. Most are a month apart, a few are only 10 to 23 days apart, and one gap runs for more than a year. A difference over 405 days is not a month, so we also divide by the number of days. That one division is the idea of a rate, the same idea as the gradient of a line.'
          ] },
        { kind: 'code', label: 'Version 1: differences, then rates', lang: 'Python', code: V1, note: 'It prints <code>Largest jump: 2023-04-01 to 2024-05-10 365436 litres over 405 days</code>, <code>Fastest rate: 2022-08-01 to 2022-09-01 8183 litres per day</code> and <code>Steps where the total fell: 3</code>.' },
        { kind: 'p', mt: true, html: 'The biggest jump is not the busiest time; it is simply the longest gap. Divided by its 405 days, it shrinks to about 902 litres a day. The real record is August 2022: 253,673 litres in 31 days, 8,183 litres a day. And a running total should never fall, yet this one falls three times, by 17,236 litres between 1 March and 1 April 2025, by 24 litres in January 2026 and by 9,057 litres in May 2026. The file does not say why. In class we treat that honestly: we report the falls and do not invent a reason.' },
        { kind: 'code', label: 'Version 2: compare the same months each year', lang: 'Python', code: V2, note: 'It prints <code>2022 June to August: 606516 litres</code>, <code>2024 June to August: 81054 litres</code>, <code>2025 June to August: 118388 litres</code>, <code>2026 June to August: 115803 litres</code> and <code>2025 to 2026: -2.2 percent</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Litres logged in Gieß den Kiez between 1 June and 1 September (our calculation)', head: ['Summer', 'Litres', 'Change on the summer before in the table'], rows: [
          ['2022', '606,516', 'First summer in the table'],
          ['2024', '81,054', 'Two years later'],
          ['2025', '118,388', 'Up on 2024'],
          ['2026', '115,803', '-2.2 percent on 2025']
        ] },
        { kind: 'source', html: 'Data: CityLAB Berlin, Gieß den Kiez - Nutzungsdaten, file giessdenkiezKPIs.csv, via Berlin Open Data and GovData, licence CC0; downloaded 3 November 2026. All differences, rates and percentages are ours. The 2023 summer is missing because the file has no row between 1 April 2023 and 10 May 2024. From 2022 to 2025 the summer total fell by 80.5 percent, our figure.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Klasse 5 and 6.</strong> A marble jar holds 12, 19, 19 and 31 marbles at the end of four weeks. How many went in each week? Which week added nothing?',
          '<strong>Klasse 7.</strong> From the table, by what percentage did the summer total change from 2024 to 2025? Round to one decimal place, then check with a rough Überschlag first.',
          '<strong>Klasse 8.</strong> Plot the running total for 2026 against the day of the year. Where is the graph steepest, and what does the gradient mean in litres per day?',
          '<strong>Klasse 9 and 10.</strong> Run Version 1, then change it so that it lists every step where the total fell, with its dates. Write two sentences on why a falling running total should make you check the data before any chart.'
        ] }
      ]
    },
    {
      id: 'abitur',
      eyebrow: 'Abitur 2027',
      h2: 'What does the Berlin Abitur maths exam look like in 2027?',
      lede: 'One fixed morning, built partly from tasks shared by the Länder. The facts below come from the Prüfungsplan and the IQB.',
      body: [
        { kind: 'two',
          leftH3: 'Date and format',
          left: [
            'The written Abitur in Mathematik is on Wednesday 5 May 2027 from 09:00, for both the Leistungsfach and the third exam subject, and the Prüfungsplan marks it as a pool subject. The pool is the bank of tasks the IQB coordinates for the Länder, and each Land\'s own commission chooses which pool tasks it uses.',
            'Pool exams have a Part A without aids and a Part B with aids. At raised level the paper is worth 100 marks over 300 minutes; at basic level, 80 marks over 255 minutes, both including time to choose tasks.'
          ],
          rightH3: 'Which year is the Abitur year?',
          right: [
            'At a Berlin Gymnasium the Oberstufe runs from Klasse 10, the Einführungsphase, to Klasse 12; this is the eight-year route, G8. At an Integrierte Sekundarschule or a Gemeinschaftsschule the Einführungsphase is Klasse 11 and the Abitur comes after Klasse 13.',
            'Our <a class="ag-inline-link" href="/abitur-maths-in-english">Abitur maths in English</a> guide covers the paper in detail. On this page it matters for one reason: Part A means mental and written algebra without a calculator, and that is built in Klasse 7 to 10, not in the last spring.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are maths classes in Berlin time?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most Berlin pupils book a slot after school or on a Saturday or Sunday morning.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Berlin times and the mentor\'s clock in India', head: ['Berlin time', 'India time until 28 March 2027', 'India time from 28 March 2027'], rows: [
          ['15:35', '20:05', '19:05'],
          ['16:55', '21:25', '20:25'],
          ['18:05', '22:35', '21:35'],
          ['Saturday 09:40', '14:10', '13:10']
        ] },
        { kind: 'source', html: 'Berlin keeps Central European Time, UTC+1, and Central European Summer Time, UTC+2, under the Einheitenzeitgesetz. Summer time ended on 25 October 2026 and starts again on 28 March 2027. India stays on UTC+5:30, so the gap is 4 hours 30 minutes in winter and 3 hours 30 minutes in summer. The rows are examples, not fixed batch times.' },
        { kind: 'p', mt: true, html: 'Classes carry on through Berlin school holidays unless you pause them. Many families use the Osterferien from 22 March to 2 April 2027 for extra sessions before the April exams, and stop for part of the Sommerferien from 1 July 2027.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a Berlin pupil should be able to do, stage by stage',
    lede: 'Our own milestones, used to place a pupil and to report to parents. They follow the five Leitideen, not one school\'s plan.',
    table: { caption: 'Maths milestones from Klasse 1 to 13 (ours)', head: ['Stage', 'Typical Klasse', 'The pupil can'], rows: [
      ['1. Number sense', '1 to 3', 'Count, add and subtract to 1,000, and know the times tables'],
      ['2. Written methods', '3 to 6', 'Multiply and divide on paper, work with measures and simple fractions'],
      ['3. Proportion', '6 to 8', 'Use fractions, percentages and rates, and check with an estimate'],
      ['4. Algebra and functions', '7 to 10', 'Rearrange equations, draw and read linear and quadratic graphs'],
      ['5. Oberstufe', '10 to 13', 'Differentiate, integrate, work with vectors and probability']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the one most Berlin pupils need help with, and it is the one the tree-watering project trains: a rate is a difference divided by a time.',
      'We report what your child can now do on their own, with an example, never just the hours spent.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Before you trust a big number, ask what it was measured over. A year is not a month.',
      'When the German word stops you, ask for it. Knowing the word is half of reading the task.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths',
    h2: 'Nine more maths courses for Berlin pupils',
    lede: 'All live, all in English, with one regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Grundschule and early secondary', courses: [
        { code: 'MEN / BASE / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Quick, sure arithmetic for Klasse 1 to 5.' },
        { code: 'MEN / BASE / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Letters, brackets and equations, slowly and well.' },
        { code: 'MEN / BASE / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School topics explored in Python, ages 10 to 15.' }
      ] },
      { num: 'II', h3: 'Stretch and contests', sub: 'For pupils who want more', courses: [
        { code: 'MEN / PLUS / 01', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Mathematik-Olympiade and Känguru', blurb: 'Contest problems by Klassenstufe, all written by us.' },
        { code: 'MEN / PLUS / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Proof and problem solving beyond the school book.' },
        { code: 'MEN / PLUS / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data, chance and the Daten und Zufall strand.' }
      ] },
      { num: 'III', h3: 'Other school systems', sub: 'For Berlin pupils outside the German track', courses: [
        { code: 'MEN / INTL / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Core and Extended, for British-curriculum pupils.' },
        { code: 'MEN / INTL / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB maths AA and AI', blurb: 'SL and HL with coaching for the internal assessment.' },
        { code: 'MEN / INTL / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Algebra to calculus for an English-language syllabus.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'How live maths lessons work for a Berlin pupil',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Two live lessons a week, an hour each, on a shared whiteboard with the same mentor.',
    slots: [
      { time: 'After school', l: 'Berlin weekday afternoons and early evenings.' },
      { time: 'Weekend', l: 'Saturday or Sunday mornings, good before a test week.' },
      { time: 'One to one', l: 'A time you agree with the mentor, moved around exams.' }
    ],
    cells: [
      { h3: 'Exam-aware', p: 'Lessons are planned back from 15 April and 5 May 2027.' },
      { h3: 'German words too', p: 'Every topic ends with the terms a Berlin test uses.' },
      { h3: 'Written by us', p: 'Practice papers are our own, never copied exams.' },
      { h3: 'Thinking, not tricks', p: 'Pupils explain each step, so the method survives.' },
      { h3: 'Short reports', p: 'Parents hear what improved and what is next.' },
      { h3: 'Group or private', p: 'Fifteen to twenty pupils, or one pupil and a mentor.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Maths and code meet in what our older students build. A few are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews from parents and students, word for word.',

  fees: {
    h2: 'Maths tutoring fees for Berlin families',
    lede: 'You pay monthly for eight live lessons. Prices appear in euro at the European Central Bank reference rate, while the actual charge is made in US dollars; your bank handles the exchange, so the euro amount you see on your statement may vary a little.',
    free: ['A free first lesson', 'A short check across the five strands', 'No card asked for'],
    group: ['Fifteen to twenty pupils at a similar level', 'One regular maths mentor', 'Two lessons a week', 'Monthly, cancel any month'],
    one: ['Your child and one mentor', 'A plan built around the Berlin exam dates', 'Times that suit your family']
  },

  faq: {
    eyebrow: 'Berlin families ask',
    h2: 'Maths tutoring in Berlin: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every lesson is live and taught in English only. Mentors match your child\'s pace and accent, and each topic ends with the German words a Berlin test will use, so your child can read the task in German and think it through in English.' },
      { q: 'When is the MSA maths exam in Berlin in 2027?', a: 'The Senate\'s Prüfungsplan for 2026/27 sets the written MSA maths exam on Thursday 15 April 2027, starting at 10:00, with a catch-up date on Monday 24 May 2027. German is on 8 April and the first foreign language on 13 April 2027.' },
      { q: 'Does a Gymnasium pupil in Berlin sit the MSA maths exam?', a: 'berlin.de explains that at a Gymnasium the MSA is reached through the year marks of Klasse 10, with German, maths and the first foreign language as core subjects. Check your child\'s own situation with the school, which is the authority on it.' },
      { q: 'When is the Abitur maths exam in Berlin in 2027?', a: 'Wednesday 5 May 2027, starting at 09:00, for both the Leistungsfach and the third exam subject. The Prüfungsplan lists it as a pool subject, meaning tasks can come from the bank the IQB coordinates for the Länder.' },
      { q: 'Which Klassen do you teach?', a: 'Klasse 1 to 13. Grundschule maths runs to Klasse 6 in Berlin, so our Grundschule course covers all six years; from Klasse 7 the secondary course takes over, and the Abitur course covers the Einführungsphase and the Qualifikationsphase.' },
      { q: 'Can you help with Klassenarbeiten during the year?', a: 'Yes, that is most of what we do. Send the topic and date of the next test, and the mentor plans the coming lessons around it. We teach the maths and practise with our own questions; the school sets and marks the test.' },
      { q: 'When are lessons, in Berlin time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A lesson at 16:55 in Berlin is 21:25 for the mentor in India during winter.' },
      { q: 'Where are the tutors?', a: 'Our maths mentors are based in India and teach live online over video with a shared whiteboard. Your child keeps the same mentor every week, which matters more in maths than in almost any other subject.' },
      { q: 'What does it cost, and in which currency?', a: 'A monthly fee covers eight live lessons. We show it in euro at the European Central Bank reference rate; the card is charged in US dollars and your bank converts it, so the statement can differ slightly. The first lesson is free.' },
      { q: 'Is tutoring in English a problem for German school maths?', a: 'Usually not. The methods are the same and the symbols are international, so the real gap is vocabulary, which is why every lesson ends with the German terms. Hearing a method explained a second way, in a second language, often makes it clearer.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Berlin families and maths in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding and maths in Germany', p: 'Every page for families living in Germany.' },
      { href: '/online-math-tutor-germany', label: 'Online maths tutor, Germany', p: 'VERA, MSA and ZP10 across the Länder.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The exam paper, part by part.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'Live coding for Berlin children of 6 to 12.' },
      { href: '/kangaroo-math-germany-practice', label: 'Känguru practice', p: 'The March contest, with our own problems.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson from start to end.' }
    ]
  },

  start: {
    h2: 'Book a free first maths lesson',
    lede: 'The mentor gives your child a handful of short tasks, one from each strand, listens to how they think, and tells you which strand to work on first and whether a group or one to one fits better.',
    readFirst: 'If you would rather read first, the <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">Klasse 7 to 10 syllabus</a> lists the topics, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows a lesson in full.',
    note: 'Lessons are live online with mentors in India, in English only. Message us on WhatsApp with any question, in English.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/courses/elementary-mathematics-complete-masterclass', label: 'Grundschule maths' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Klasse 7 to 10 maths' },
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding and maths in Germany' },
        { href: '/online-math-tutor-germany', label: 'Maths tutor, Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids, Berlin' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'A total grows; a rate tells you how fast'
  },

  personalityCss: `
.ag-root.ag-men .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-men .ag-capsule { border-left-width: 6px; }
.ag-root.ag-men .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-men .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-men .ag-code-note { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Senatsverwaltung für Bildung (Berlin), Prüfungsplan für das Schuljahr 2026/27 (Stand 15.09.2026) and berlin.de Abschlüsse am Gymnasium; KMK Primarbereich, holiday table 2026/27 and Bildungsstandards Mathematik ESA/MSA (23.06.2022); IQB VERA-8 and pool task structure; Gesellschaft für Informatik, Informatik-Monitor 2026/27 Berlin page (G8/G9); Destatis GV-ISys 31.12.2024. Data: CityLAB Berlin, Gieß den Kiez - Nutzungsdaten, CC0.',
    localProject: 'Gieß den Kiez running totals: an original Python project on the CityLAB Berlin usage file in which the largest jump (365,436 litres) is a 405-day gap, the true peak rate is August 2022 at 8,183 litres a day, the running total falls three times, and the June to August totals for 2022, 2024, 2025 and 2026 are compared (2025 to 2026: -2.2 percent); plus practice tasks by Klasse. Lesson family: a running total, differences and rates over unequal time spans.',
    requiredMentions: ['giess_kpis.csv', 'Largest jump: 2023-04-01 to 2024-05-10 365436 litres over 405 days', 'Fastest rate: 2022-08-01 to 2022-09-01 8183 litres per day', '2025 to 2026: -2.2 percent', 'Thursday 15 April 2027, 10:00', 'Kernfächer im MSA', 'Wednesday 5 May 2027, 09:00', 'A total grows; a rate tells you how fast'],
    sources: [
      { claim: 'MSA and Abitur exam dates 2027, start times, holidays.', url: 'https://www.berlin.de/sen/bildung/schule/pruefungen-und-abschluesse/pruefungsplan-2027.pdf' },
      { claim: 'MSA at the Gymnasium through Klasse 10 year marks; Kernfächer.', url: 'https://www.berlin.de/sen/bildung/schule/pruefungen-und-abschluesse/abschluesse-am-gymnasium-nach-klasse-9-und-10/' },
      { claim: 'Berlin holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'VERA-8 window 2027; VERA not graded.', url: 'https://www.iqb.hu-berlin.de/de/schule/sekundarstufe-i/vera/' },
      { claim: 'Pool exam structure, Part A and B, minutes and marks.', url: 'https://www.iqb.hu-berlin.de/media/documents/M_Beschreibung_der_Struktur_der_Aufgaben.pdf' },
      { claim: 'Berlin Gymnasium G8, ISS and Gemeinschaftsschule G9.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/berlin' },
      { claim: 'Gieß den Kiez usage data and CC0 licence.', url: 'https://ckan.govdata.de/dataset/giess-den-kiez-nutzungsdaten' }
    ],
    rejectedClaims: [
      'Any reason for the three falls in the running total: the data does not say, so none is given.',
      'That the 2022 to 2025 drop means Berliners care less about trees: not supported by the file.',
      'Any grade or MSA result promise: refused; the school and the Senate award marks.',
      'German-language lessons: we teach in English only, and the page says so.',
      'Any connection with the Senate, CityLAB Berlin or a school: none.'
    ]
  }
};
