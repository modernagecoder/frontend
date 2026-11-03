'use strict';
// Coding classes in Saxony-Anhalt (ag- Land page, Germany cluster P4 row DE102, hubGroup land, code anc, accent #444967).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show euro,
// checkout charges USD.
// Spine: Saxony-Anhalt has turned the usual pattern upside down. Since 2026/27 Informatik is a compulsory subject from
// grade 5 to 10 at the Sekundarschule, Gemeinschaftsschule and Gesamtschule, while at the Gymnasium it stays an elective in
// grades 9 and 10 and a two-hour basic course in the Oberstufe (raised level at two specialist Gymnasien only). That is why
// the GI still lists the Land among the six without Informatik for all pupils.
// Sources (read raw 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Sachsen-Anhalt page (facts-school/src/infmon-sachsen-anhalt/5d4cf2e2.txt): "An der
//    Sekundarschule und der Gemeinschaftsschule ist für die Jahrgangsstufen 6 bis 10 im Pflichtbereich je eine Wochenstunde
//    Informatikunterricht vorgesehen."; one hour pulled forward "für das Pflichtfach Informatik in Jahrgangsstufe 5";
//    Gesamtschulen the same for grades 5 to 10; Gymnasium "in den Jahrgangsstufen 9 und 10 jeweils zweistündig ein
//    Wahlpflichtfach Informatik"; "Seit dem Schuljahr 2024/25 ... Rahmenplan „Lernen in der digitalen Welt“ ... weniger als eine
//    Wochenstunde"; two MINT Gymnasien may offer Informatik compulsorily; Einführungsphase two hours Wahlpflicht;
//    Qualifikationsphase "zweistündig auf grundlegendem Anforderungsniveau", raised level at two Gymnasien; oral exam if taken
//    since the Einführungsphase; "Die schriftlichen Abituraufgaben für das Fach Informatik werden im Anwendungsfall dezentral
//    erstellt und vom Landesschulamt genehmigt. Bei der Ausgestaltung der Aufgaben können auch praktische Anteile
//    berücksichtigt werden."; "Seit dem Schuljahr 2026/27 wird in den Jahrgangsstufen 5 bis 10 an Sekundar-, Gemeinschafts-
//    und Gesamtschulen das Pflichtfach Informatik unterrichtet. Die Curriculare Grundlage stellt der Erprobungslehrplan
//    Informatik dar."; Lehrplan 2022 for the Gymnasium elective grades 9 to 12; school types Sekundarschule,
//    Gemeinschaftsschule, IGS, KGS, Gymnasium; G8 at Gymnasium and KGS (FACTS 58), G9 at IGS and Gemeinschaftsschule; key
//    figures 2024/2025: Sek II share "14 %", Abitur candidates with Informatik "4 %", 186 Informatik teachers, "2 %" of all
//    teachers, 6 new hires.
//  - Informatik-Monitor national page: six Länder without compulsory Informatik for all, Sachsen-Anhalt last named (FACTS 92).
//  - KMK: Sekundarschule (Sachsen-Anhalt) two-track and Gemeinschaftsschule three-track (FACTS 20, 21); FER2026_27 row
//    "Sachsen-Anhalt (2) 19.10. - 30.10. 21.12. - 02.01. 01.02. - 06.02. 22.03. - 27.03. 15.05. - 22.05. 10.07. - 20.08."
//    (FACTS 281); Sommerferienregelung 2027 (FACTS 270).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Sachsen-Anhalt 2,135,597; Magdeburg 244,329.
//  - No 2027 written Abitur dates fetched from the Ministerium für Bildung; none printed.
//  - Data: Ministerium für Infrastruktur und Digitales (MID) Sachsen-Anhalt, "WFS ST Radwegenetz ALRIS", via GovData
//    https://ckan.govdata.de/dataset/wfs-st-radwegenetz-alris, licence Datenlizenz Deutschland Namensnennung 2.0 (access_rights
//    "Datenlizenz Deutschland Namensnennung 2.0"); layer überregionale_touristische_Radrouten fetched as GML 3.2
//    (ueberregional.gml, 4,696,237 bytes, sha256 9a0c1ca4...ab69ba1e, numberMatched 678), downloaded 3 November 2026 and
//    converted by our script to radrouten_ueberregional.csv (route, Kategorie, Status, Abschnittslänge in Meter).
// Our own calculations (scratchpad de/w/L2/st/v1.py, v2.py, v3.py, python3 -I), exact output:
//    v1: "Sections: 678" / "Longest single section: Altmarkrundkurs (ARK) 346.7 km"
//    v2: "Routes: 23" / "Altmarkrundkurs (ARK) 518.3 km" / "D-Route 10 (D10) 333.8 km" / "D-Route 13 (D13) 330.1 km"
//    v3: "Category labels: {'Hauptroute': 303, '(empty)': 337, 'Alternativroute': 16, 'Nebenroute': 10, 'Umleitung': 12}" /
//        "Elberadweg, all rows: 237.7 km; without detours and variants: 131.1 km"
// Lesson family: group the rows that belong together before you rank, then decide which rows count (aggregation and
// definitions).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("radrouten_ueberregional.csv", encoding="utf-8") as f:',
  '    sections = list(csv.DictReader(f, delimiter=";"))',
  '',
  'longest = max(sections, key=lambda s: float(s["laenge_m"]))',
  'print("Sections:", len(sections))',
  'print("Longest single section:", longest["route"], round(float(longest["laenge_m"]) / 1000, 1), "km")'
].join('\n');

const V2 = [
  'from collections import defaultdict',
  '',
  'per_route = defaultdict(float)',
  'for s in sections:',
  '    per_route[s["route"]] += float(s["laenge_m"]) / 1000',
  '',
  'ranking = sorted(per_route.items(), key=lambda item: item[1], reverse=True)',
  'print("Routes:", len(per_route))',
  'for name, km in ranking[:3]:',
  '    print(" ", name, round(km, 1), "km")'
].join('\n');

const V3 = [
  'labels = defaultdict(int)',
  'for s in sections:',
  '    labels[s["kategorie"] or "(empty)"] += 1',
  'print("Category labels:", dict(labels))',
  '',
  'main_only = defaultdict(float)',
  'for s in sections:',
  '    if s["kategorie"] in ("Hauptroute", ""):',
  '        main_only[s["route"]] += float(s["laenge_m"]) / 1000',
  'elbe = "Elberadweg (ERW)"',
  'print("Elberadweg, all rows:", round(per_route[elbe], 1), "km; without detours and variants:", round(main_only[elbe], 1), "km")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Saxony-Anhalt' },
  slug: 'coding-classes-in-saxony-anhalt',
  code: 'anc',
  accent: '#444967',
  accentRationale: 'Saxony-Anhalt Land page: a slate blue-grey #444967, the colour of the Harz granite and the evening Elbe at Magdeburg, distinct from the Saxony teal next door; contrast 7.12 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes in Saxony-Anhalt',
  title: 'Coding Classes in Saxony-Anhalt: Live Online in English',
  description: 'Coding classes in Saxony-Anhalt, live online in English: the new compulsory Informatik outside the Gymnasium, the Abitur rules, holidays and a cycle route project.',
  ogDescription: 'Live coding in English for pupils in Saxony-Anhalt: why Informatik is now compulsory from grade 5 at the Sekundarschule but still optional at the Gymnasium, how the Oberstufe course and exam work, the 2026/27 holidays and an original project on the Land\'s long-distance cycle routes.',
  twitterDescription: 'Coding in English for Saxony-Anhalt: the new Informatik subject, the Gymnasium gap and a cycle route data project.',
  pageName: 'Coding Classes in Saxony-Anhalt',
  webPageDescription: 'A guide for families in Saxony-Anhalt to coding and school Informatik, built from the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, the KMK and Destatis, with an original Python project on the Land\'s open data for long-distance cycle routes.',
  courseDescription: 'Live online coding classes in English for learners in Saxony-Anhalt: Informatik support from Klasse 5, programming for Gymnasium pupils who have no compulsory Informatik, Oberstufe preparation and adult courses, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Saxony-Anhalt',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'Informatik' },
    { href: '#oberstufe', label: 'Oberstufe' },
    { href: '#project', label: 'Routes' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Saxony-Anhalt &middot; Coding and Informatik &middot; Klasse 5 to Abitur',
  h1: 'Coding classes in Saxony-Anhalt',
  lede: 'Saxony-Anhalt has done something unusual. Since the 2026/27 school year every pupil at a Sekundarschule, Gemeinschaftsschule or Gesamtschule has Informatik as a compulsory subject from grade 5 to 10, while a pupil at a Gymnasium has it only as an elective in grades 9 and 10. This page explains that split, what the Oberstufe offers and how its exam is set, the holidays for 2026/27, how our live classes in English fill the gap, and a data project on the Land\'s long-distance cycle routes in which the first ranking measures the wrong thing.',
  secondaryCta: { href: '#project', label: 'See the cycle route project' },
  wa: 'Hello Modern Age Coders, we live in Saxony-Anhalt and would like a free coding class in English for our child.',
  heroNote: 'Live classes online since 2020 &middot; 10,000+ students in many countries &middot; every lesson in English, with one steady mentor',
  spec: [
    ['Ages', 'About 9 to 19, and adults'],
    ['Fits beside', 'Pflichtfach Informatik, Wahlpflicht, Oberstufe'],
    ['Languages', 'Scratch, Python, Java'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders runs coding classes for Saxony-Anhalt as live online lessons in English, for children and teenagers from roughly 9 upwards and for adults, privately or in a batch of fifteen to twenty. Pupils at a Sekundarschule or Gemeinschaftsschule now have Informatik at school and use our Informatik Companion course to deepen it; Gymnasium pupils, who have no compulsory Informatik, often start their programming with us.',

  picks: {
    eyebrow: 'Starting points in Saxony-Anhalt',
    h2: 'Three courses for the two halves of the Saxony-Anhalt system',
    lede: 'A companion to the new compulsory subject, a full Python course for Gymnasium pupils who would otherwise wait until grade 9, and an Oberstufe course for the basic-level exam subject.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'ANC / 01', title: 'Informatik Companion, Klasse 5 to 10', note: 'About 10 to 16 years. Algorithms, data, networks and programming, in a sequence that sits well beside the new compulsory subject and its trial curriculum.' },
      { course: 'python-complete-masterclass-teens', code: 'ANC / 02', title: 'Python for teens', note: 'About 13 to 18 years. A complete Python course for Gymnasium pupils whose timetable has no Informatik before the grade 9 elective, from first scripts to data and small apps.' },
      { course: 'informatik-abitur-course-java-python', code: 'ANC / 03', title: 'Informatik for the Oberstufe and Abitur', note: 'About 16 to 19 years. Java or Python, data structures and databases for the two-hour Oberstufe course and its oral or written exam.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Informatik in Saxony-Anhalt',
      h2: 'Is Informatik compulsory in Saxony-Anhalt?',
      lede: 'At some school types yes, at the Gymnasium no. The rules below are compiled by the Gesellschaft für Informatik in its Informatik-Monitor 2026/27.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in Saxony-Anhalt by school type (school year 2026/27)', head: ['School type', 'Grades', 'Informatik on the timetable'], rows: [
          ['Sekundarschule and Gemeinschaftsschule', '5 to 10', 'Compulsory Informatik, one lesson a week (the grade 5 hour is drawn from grades 6 to 8)'],
          ['Gesamtschule', '5 to 10', 'The same compulsory Informatik'],
          ['Gymnasium', 'grades 5 to 8', '"Lernen in der digitalen Welt", with less than one weekly hour of Informatik content'],
          ['Gymnasium', '9 and 10', 'Elective (Wahlpflicht) Informatik, two lessons a week, if offered'],
          ['Two MINT-focused Gymnasien', 'Sek I', 'May offer Informatik as compulsory or as an elective']
        ] },
        { kind: 'source', html: 'Compiled from the Sachsen-Anhalt page of the GI Informatik-Monitor 2026/27 (consulted 2 November 2026). Since 2026/27 the compulsory subject at the Sekundar-, Gemeinschafts- and Gesamtschulen follows a trial curriculum (Erprobungslehrplan Informatik); the Gymnasium elective follows a curriculum updated in 2022 for grades 9 to 12. Because the Gymnasium has no compulsory Informatik, the GI\'s national summary still counts Saxony-Anhalt among six Länder without Informatik for all pupils.' },
        { kind: 'two', mt: true,
          leftH3: 'A gap at the Gymnasium',
          left: [
            'The result is a curious gap. A ten year old at a Sekundarschule in Halle or Dessau-Roßlau now has a weekly Informatik lesson; a ten year old at a Gymnasium in the same street does not, and may not meet the subject as such until the elective in grade 9.',
            'For Gymnasium families who want their child to start earlier, this is exactly where outside lessons help most: four years of programming before the first elective lesson.'
          ],
          rightH3: 'Few teachers, small numbers',
          right: [
            'The monitor gives 186 Informatik teachers in Saxony-Anhalt for 2024/25, 2 % of all teachers, and 6 newly hired. In the same year 14 % of upper secondary pupils took Informatik, from KMK figures, and 4 % of Abitur candidates had it as an exam subject, from the Land\'s education ministry.',
            'A new compulsory subject with so few specialist teachers is a big task for schools, which is one more reason to give a keen pupil practice beyond the weekly lesson.'
          ] },
        { kind: 'p', mt: true, html: 'Saxony-Anhalt is home to 2,135,597 people, 244,329 of them in Magdeburg, the Land capital (Destatis, 31 December 2024). After four years of Grundschule, pupils move to a Sekundarschule, a Gemeinschaftsschule, an integrated or cooperative Gesamtschule, or a Gymnasium. The KMK lists the Sekundarschule as a two-track school and the Gemeinschaftsschule as a school that combines all tracks.' }
      ]
    },
    {
      id: 'oberstufe',
      tint: 'tint',
      eyebrow: 'Oberstufe and Abitur',
      h2: 'What Informatik is there in the Oberstufe in Saxony-Anhalt?',
      lede: 'A two-hour course at basic level, an exam set by the school and approved by the Landesschulamt, and a raised-level course at only two Gymnasien.',
      body: [
        { kind: 'two',
          leftH3: 'What is offered',
          left: [
            'According to the Informatik-Monitor, Informatik can be taken as a two-hour elective in the Einführungsphase and as a two-hour course at basic level in the Qualifikationsphase. Two Gymnasien with a mathematics, science and technology focus can also offer it at raised level.',
            'Choosing Informatik never frees a pupil from a science course, and because it is mostly available only at basic level, the monitor notes it is not treated as equal to the sciences as an exam subject.'
          ],
          rightH3: 'How the exam is set',
          right: [
            'If the course was taken continuously from the Einführungsphase, an oral Abitur exam is possible. Where a written Informatik exam is taken, the monitor says the tasks are set decentrally and approved by the Landesschulamt, and practical parts can be included; permitted aids depend on the task.',
            'The ministry\'s 2027 Abitur dates were not available to us, so none appear here. For the Abitur itself only the school course matters; we add practice on the side and never write or grade school tasks.'
          ] },
        { kind: 'p', mt: true, html: 'Gymnasien and cooperative Gesamtschulen finish after twelve years (G8): the Einführungsphase is grade 10 and the two Qualifikationsphase years are 11 and 12. At the integrated Gesamtschule and the Gemeinschaftsschule the Abitur usually comes after grade 13. With only two hours a week in the Oberstufe, a pupil who wants to study computer science later usually needs far more practice than school can give.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Do you teach in German?',
      lede: 'No. Every lesson is live and in English. Our mentors are based in India and adapt to each learner.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English throughout', p: 'There are no German-language lessons. For most Saxony-Anhalt pupils that turns a coding lesson into English practice as well; for English-speaking families it is the obvious choice.' },
          { h3: 'At the learner\'s pace', p: 'Mentors slow down, repeat a step in different words and check understanding before going on. A shy pupil gets time to answer.' },
          { h3: 'School words kept', p: 'The trial curriculum uses German terms like Algorithmus, Daten or Netzwerk. We teach in English and give the German word too, so school lessons and ours connect.' }
        ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Saxony-Anhalt data project',
      h2: 'Which is the longest cycle route in Saxony-Anhalt? Group first, then rank',
      lede: 'The Land\'s Ministry for Infrastructure and Digital Affairs publishes its cycle route network as open data, including every long-distance tourist route cut into sections. Our pupils use it to learn that a table of rows is not yet a table of answers: you have to group the rows that belong together, and decide which rows count, before any ranking means something.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'We requested the layer of long-distance tourist cycle routes (überregionale touristische Radrouten) from the ministry\'s ALRIS web feature service on 3 November 2026. It is published under the Datenlizenz Deutschland Namensnennung 2.0, so it may be reused with credit. The service returned 678 sections, which our script saved as radrouten_ueberregional.csv with the route name, the section\'s category, its status and its length in metres.',
            'One route, such as the Elberadweg, is spread over many rows. Some rows are the main route (Hauptroute), some are alternatives, side routes or detours, and many have no category at all.'
          ],
          rightH3: 'The question',
          right: [
            'Which long-distance route is the longest in the Land? Version 1 answers the question it can answer straight away: which single row is longest. Version 2 adds up the rows of each route. Version 3 asks which rows should be added at all.',
            'Each version gives a different answer, and each answer is honest about a different question.'
          ] },
        { kind: 'code', label: 'Version 1: the longest single section', lang: 'Python', code: V1, note: 'It prints: <code>Sections: 678</code> and <code>Longest single section: Altmarkrundkurs (ARK) 346.7 km</code>.' },
        { kind: 'p', mt: true, html: 'One section of the Altmarkrundkurs, the circular route through the Altmark in the north of the Land, is stored as a single 346.7 km piece. That says something about how the data was drawn, not about which route is longest. Version 2 groups sections by route name and adds their lengths.' },
        { kind: 'code', label: 'Version 2: add up each route', lang: 'Python', code: V2, note: 'It prints: <code>Routes: 23</code>, then <code>Altmarkrundkurs (ARK) 518.3 km</code>, <code>D-Route 10 (D10) 333.8 km</code> and <code>D-Route 13 (D13) 330.1 km</code>.' },
        { kind: 'p', mt: true, html: 'Now the 678 rows have become 23 routes, and the Altmarkrundkurs leads with 518.3 km. But adding everything counts alternatives and detours too, as if a cyclist rode both ways round a closed bridge. Version 3 looks at the category labels first.' },
        { kind: 'code', label: 'Version 3: decide which rows count', lang: 'Python', code: V3, note: 'It prints: <code>Category labels: {\'Hauptroute\': 303, \'(empty)\': 337, \'Alternativroute\': 16, \'Nebenroute\': 10, \'Umleitung\': 12}</code> and <code>Elberadweg, all rows: 237.7 km; without detours and variants: 131.1 km</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Sections of the long-distance cycle routes by category label (our count)', head: ['Category label', 'Sections'], rows: [
          ['Hauptroute (main route)', '303'],
          ['No label', '337'],
          ['Alternativroute (alternative)', '16'],
          ['Umleitung (detour)', '12'],
          ['Nebenroute (side route)', '10']
        ] },
        { kind: 'source', html: 'Data: Ministerium für Infrastruktur und Digitales Sachsen-Anhalt, WFS ST Radwegenetz ALRIS, layer überregionale touristische Radrouten, Datenlizenz Deutschland Namensnennung 2.0, retrieved 3 November 2026. Lengths are the section lengths stored in the data; the sums, rankings and the choice to treat unlabelled rows as main route are our own.' },
        { kind: 'p', mt: true, html: 'Half of all rows have no category, and Version 3 has to make a choice about them: here we treat them as main route, and say so. For the Elberadweg the answer moves from 237.7 km with every row to 131.1 km without alternatives, side routes and detours. Neither number is "the length of the Elberadweg"; each is the length of a clearly defined set of rows. That is the lesson: group first, then define what you count, and print the definition next to the number.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 11, no screen.</strong> Cut a long strip of paper into five pieces of different lengths and label two of them "detour". Measure the longest piece, then the whole route with and without detours.',
          '<strong>Ages 11 to 13, Scratch.</strong> Store pairs of route name and length in two lists, add up the lengths for each name, and show the longest route.',
          '<strong>Teenagers, Python.</strong> Run Version 1 and Version 2 and explain why their winners differ. Then change Version 3 to treat unlabelled rows as not counted and compare.',
          '<strong>Going further.</strong> Rank all 23 routes by main-route length only, and write one sentence for each of the top three that says exactly which rows were counted.'
        ] }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'Holidays',
      h2: 'When are the school holidays in Saxony-Anhalt in 2026/27?',
      lede: 'The summer break in 2027 is the same as in Saxony and Thuringia. Lessons with us carry on through the holidays unless you pause them.',
      body: [
        { kind: 'table', numCols: [], caption: 'Saxony-Anhalt holiday dates for 2026/27', head: ['Break', 'First to last day'], rows: [
          ['Autumn', '19 to 30 October 2026'],
          ['Christmas', '21 December 2026 to 2 January 2027'],
          ['Winter', '1 to 6 February 2027'],
          ['Easter', '22 to 27 March 2027'],
          ['Whitsun', '15 to 22 May 2027'],
          ['Summer', '10 July to 20 August 2027']
        ] },
        { kind: 'source', html: 'From the KMK holiday overview for 2026/2027 (status 9 October 2025) and the KMK summer plan for 2025 to 2030. Saxony-Anhalt adds two movable holiday days, placed by each school.' },
        { kind: 'p', mt: true, html: 'The Easter break is short in 2027, a single week from 22 to 27 March, but Whitsun gives a full week from 15 to 22 May 2027. Some families use that May week for an intensive block of one-to-one lessons.' }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Contests',
      h2: 'Which computing contests can pupils in Saxony-Anhalt enter?',
      lede: 'The national ones, through school.',
      body: [
        { kind: 'p', html: 'The Informatik-Biber, a free puzzle contest for grades 3 to 13 run by Bundesweite Informatikwettbewerbe, takes place from 9 to 20 November 2026, and schools register their pupils. For a pupil in grade 5 or 6 who has just started the new compulsory subject, it is a gentle first contest. Older pupils can try the 45th Bundeswettbewerb Informatik, whose first round runs until 23 November 2026. In our competitions course every puzzle is our own; we never copy the organisers\' tasks and have no connection with BWINF.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are classes for pupils in Saxony-Anhalt?',
      lede: 'From early afternoon on school days, or late on a weekend morning; the booking page shows the options in your own time zone.',
      body: [
        { kind: 'table', numCols: [], caption: 'Possible lesson times in Saxony-Anhalt and the hour in India', head: ['Saxony-Anhalt', 'India, to 27 March 2027', 'India, after the clock change'], rows: [
          ['13:30', '18:00', '17:00'],
          ['16:40', '21:10', '20:10'],
          ['Saturday 11:30', '16:00', '15:00']
        ] },
        { kind: 'source', html: 'By law (the Einheitenzeitgesetz) German clocks show Central European Time in winter and summer time from the last Sunday in March: summer time ended on 25 October 2026 and returns on 28 March 2027. Indian clocks never change, so the gap shrinks from 4 h 30 to 3 h 30 at that date. Treat the rows as illustrations; every batch time is agreed with the family.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a learner in Saxony-Anhalt can do at each stage',
    lede: 'Our own milestones for placing learners and reporting to parents. They are separate from school grades.',
    table: { caption: 'Our five programming steps, grade 5 to Oberstufe', head: ['Milestone', 'Usually around', 'The learner can'], rows: [
      ['1. First algorithms', 'Grade 5', 'Describe a process in steps and build it in Scratch'],
      ['2. Lists and loops', 'Grades 6 to 7', 'Keep values in a list, loop through it and find the largest'],
      ['3. Grouping data', 'Grades 8 to 9', 'Group rows by a key, add them up and rank the groups'],
      ['4. Definitions', 'Grade 10', 'State exactly which rows a result counts, and test a different choice'],
      ['5. Oberstufe', 'Grades 11 and 12', 'Write and explain a complete program for an exam-style task']
    ] },
    left: { h3: 'For parents', ps: [
      'The cycle route project spans stages 3 and 4: a pupil learns that the same table can give three honest answers, and that the definition decides which.',
      'We tell you what your child built and can explain, not how many hours they spent on it.'
    ] },
    right: { h3: 'For learners', ps: [
      'One route can be many rows. Group them before you rank.',
      'Print your definition next to your number, so nobody misreads it.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners in Saxony-Anhalt',
    lede: 'Live in English, with a mentor who stays the same, in a batch of fifteen to twenty or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 7 to 12', courses: [
        { code: 'ANC / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'Games and animations from the first lesson.' },
        { code: 'ANC / KID / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds in a familiar world.' },
        { code: 'ANC / KID / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics competitions', blurb: 'Our own puzzles in the spirit of the Biber.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'ANC / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects and classes for the Oberstufe.' },
        { code: 'ANC / TEEN / 02', slug: 'frontend-development-masterclass-for-teens', title: 'Web front end for teens', blurb: 'HTML, CSS and JavaScript sites.' },
        { code: 'ANC / TEEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Teens train and judge small models.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'ANC / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'The adult route into programming.' },
        { code: 'ANC / ADULT / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'Analysis without a programming background.' },
        { code: 'ANC / ADULT / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web development', blurb: 'From pages to databases and deployment.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for a family in Saxony-Anhalt',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'School days', l: 'From early afternoon, German time.' },
      { time: 'Saturdays and Sundays', l: 'Late-morning lessons.' },
      { time: 'Private', l: 'One to one at a time agreed with the mentor.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'A teacher who follows the learner from week to week.' },
      { h3: 'Code every lesson', p: 'The learner writes and runs programs live.' },
      { h3: 'Ahead of school', p: 'Gymnasium pupils start long before the grade 9 elective.' },
      { h3: 'German terms', p: 'Curriculum vocabulary named alongside English.' },
      { h3: 'Updates home', p: 'Short progress notes for parents.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Our students\' projects',
  projectsLede: 'A few things built by learners who kept at it; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows plenty more.',
  reviewsLede: 'Google reviews from parents and learners, exactly as written.',

  fees: {
    h2: 'Fees for families in Saxony-Anhalt',
    lede: 'Each month\'s fee covers eight live lessons. On this page the fee appears in euro, worked out at the European Central Bank reference rate, while your card is charged in US dollars; the bank converts it, so the booked amount may differ by a small sum.',
    free: ['A free trial lesson', 'One short task at the right level', 'No card details'],
    group: ['A batch of fifteen to twenty at a similar level', 'The same mentor throughout', 'Two lessons each week', 'Monthly, stop any month'],
    one: ['One learner, one mentor', 'Planned around school and interests', 'Times agreed together']
  },

  faq: {
    eyebrow: 'Families in Saxony-Anhalt ask',
    h2: 'Coding classes in Saxony-Anhalt: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Our mentors, who work from India, teach every live lesson in English and set the pace and wording to suit your child. Where the school uses a German term, they mention it too.' },
      { q: 'Is Informatik compulsory in Saxony-Anhalt?', a: 'Since 2026/27, yes at the Sekundarschule, Gemeinschaftsschule and Gesamtschule, from grade 5 to 10, according to the Informatik-Monitor 2026/27. At the Gymnasium it is an elective in grades 9 and 10.' },
      { q: 'My child is at a Gymnasium. When will they learn programming at school?', a: 'Usually not before the grade 9 elective, if the school offers it and your child chooses it. Grades 5 to 8 have a cross-subject offer called Lernen in der digitalen Welt with less than one weekly hour of Informatik content, the monitor says.' },
      { q: 'Can my child take Informatik in the Oberstufe?', a: 'Yes, as a two-hour basic-level course, with raised level at two specialist Gymnasien. An oral Abitur exam is possible if the course has been taken since the Einführungsphase.' },
      { q: 'Who sets the written Informatik exam?', a: 'The Informatik-Monitor says written tasks are set decentrally and approved by the Landesschulamt, and they may include practical parts.' },
      { q: 'Can your lessons count for school?', a: 'No. Only the school course and its exams count. We teach alongside them and give no school grades or certificates.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Early afternoon slots from about 13:30 are available on school days.' },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners at a similar level. One to one gives your child a mentor of their own.' },
      { q: 'How do we pay?', a: 'You see the monthly price in euro, worked out from the ECB reference rate; your card then pays the dollar amount and your bank handles the exchange. Nothing is charged for the trial lesson.' },
      { q: 'Are you connected to the ministry or a school?', a: 'No. We are an independent online school, not linked to the Ministerium für Bildung, the Landesschulamt, the KMK, BWINF or any school in Saxony-Anhalt.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Saxony-Anhalt.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page in one place.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'How the sixteen Länder compare.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Help with school Informatik, in German.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Our own Biber-style puzzles.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Why we teach reasoning first.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live lesson.' }
    ]
  },

  start: {
    h2: 'Book a free trial lesson',
    lede: 'The trial lesson is one short programming task chosen for the learner\'s level. The mentor sees how the learner tackles it and how easily they follow English, then suggests a course and a batch.',
    readFirst: 'If you would like to read more first: <a class="ag-inline-link" href="/how-we-teach">how a lesson works</a>, and <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'We teach live online with mentors in India, and only in English. WhatsApp is the quickest way to ask a question.',
    formNote: 'Free; no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Informatik', links: [
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' },
        { href: '/abitur-computer-science-in-english', label: 'Abitur computer science' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/german-school-system-maths-and-computing-explained', label: 'German school system' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Group first, then rank'
  },

  personalityCss: `
.ag-root.ag-anc .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-anc .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-anc .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-anc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-anc .ag-steps li { line-height: 1.55; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Sachsen-Anhalt and national pages); KMK FER2026_27, Sommerferienregelung and school-type overview; Destatis GV-ISys 31.12.2024; BWINF 2026/27 dates; read 2 and 3 November 2026. Data: Ministerium für Infrastruktur und Digitales Sachsen-Anhalt, WFS ST Radwegenetz ALRIS, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Group first, then rank: an original Python project on the 678 sections of Saxony-Anhalt\'s long-distance tourist cycle routes. The longest single section is a 346.7 km piece of the Altmarkrundkurs; grouping by route gives 23 routes led by the Altmarkrundkurs (518.3 km); counting labels shows 337 unlabelled sections, and the Elberadweg measures 237.7 km with every row but 131.1 km without alternatives, side routes and detours. Lesson family: group the rows that belong together, then define what counts.',
    requiredMentions: ['radrouten_ueberregional.csv', 'Longest single section: Altmarkrundkurs (ARK) 346.7 km', 'Routes: 23', 'Altmarkrundkurs (ARK) 518.3 km', 'without detours and variants: 131.1 km', 'Erprobungslehrplan Informatik', '22 to 27 March 2027', 'Group first, then rank'],
    sources: [
      { claim: 'Compulsory Informatik since 2026/27 at Sekundar-, Gemeinschafts- and Gesamtschulen; Gymnasium elective; Oberstufe; exam; key figures.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/sachsen-anhalt' },
      { claim: 'Sachsen-Anhalt among six Länder without Informatik for all.', url: 'https://informatik-monitor.de/' },
      { claim: 'Holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Population of Saxony-Anhalt and Magdeburg.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/02-bundeslaender.xlsx?__blob=publicationFile' },
      { claim: 'Cycle route network, DL-DE BY 2.0.', url: 'https://ckan.govdata.de/dataset/wfs-st-radwegenetz-alris' }
    ],
    rejectedClaims: [
      'Saxony-Anhalt Abitur 2027 written dates: not fetched from the ministry, so none printed.',
      'A single official length for the Elberadweg or any route: the page gives our sums for stated sets of rows only.',
      'Naming schools as sources of students: refused.',
      'German-language teaching: we teach in English only.',
      'Any affiliation with the Ministerium für Bildung, the Landesschulamt, BWINF or a school: none.'
    ]
  }
};
