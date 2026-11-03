'use strict';
// Coding classes in Mecklenburg-Vorpommern (ag- Land page, Germany cluster P4 row DE100, hubGroup land, code cmv,
// accent #7A5266).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show euro,
// checkout charges USD.
// Spine: Mecklenburg-Vorpommern quietly leads Germany in school Informatik. Informatik und Medienbildung is taught at every
// school type in every grade from 5 to 10, the Land meets the six-hour recommendation, about two in five Oberstufe pupils
// take Informatik, and the Abitur is set centrally with practical parts allowed. In a Land of islands and coast, the data
// project measures islands from their corner points with the shoelace formula.
// Sources (read raw 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Mecklenburg-Vorpommern page (facts-school/src/infmon-mecklenburg-vorpommern/
//    d60769fd.txt): "Das Fach Informatik und Medienbildung wird schulartübergreifend in den Jahrgangsstufen 5 bis 10 im
//    Umfang von mindestens je einer Wochenstunde unterrichtet." (FACTS 78); Wahlpflicht options; Qualifikationsphase
//    "dreistündig ... (Grundkursfach) oder fünfstündig ... (Leistungskursfach)"; Informatik can replace only the second
//    science; "In einem Leistungskursfach Informatik wird grundsätzlich schriftlich geprüft."; Grundkurs written (third exam
//    subject) or oral (fourth or fifth) or besondere Lernleistung; "Die Abituraufgaben für das schriftliche Abitur werden
//    zentral durch eine Aufgabenkommission erstellt"; Grundkurs "eine Pflichtaufgabe sowie eine aus zwei Wahlaufgaben",
//    Leistungskurs "zwei Pflichtaufgaben sowie eine aus zwei Wahlaufgaben"; "Alle Aufgaben können praktische Anteile
//    beinhalten."; aids "das an der Schule eingeführte Tafelwerk sowie zusätzlich Tafelwerksergänzungen der
//    Aufgabenkommission"; Lehrpläne for Informatik und Medienbildung grades 5 to 10 at Regionale Schule, Gesamtschule,
//    Gymnasium; Grundschule 1 to 4, Orientierungsstufe 5 and 6; Regionale Schule, Gesamtschule, Gymnasium; Oberstufe G8 at
//    Gesamtschule and Gymnasium (FACTS 57); key figures: Sek II share "40 %" (2024/2025, KMK), Abitur candidates with
//    Informatik "6 %" (2024/2025, IQ M-V), 419 Informatik teachers, "6 %" of all teachers (2024/2025), 7 new hires (2025/2026).
//  - Informatik-Monitor national page: MV, Saarland and Thüringen meet the six-hour recommendation (FACTS 90); Sachsen and MV
//    "etwa die Hälfte" in the Oberstufe (FACTS 98).
//  - KMK: Regionale Schule (Mecklenburg-Vorpommern) two-track (FACTS 21); FER2026_27 row "Mecklenburg-Vorpommern 15.10. -
//    24.10. 21.12. - 02.01. 08.02. - 19.02. 24.03. - 02.04. 07.05. 14.05. - 18.05. 05.07. - 14.08." (raw
//    src/kmk-fer2627/fe303dbf.txt); Sommerferienregelung 2027 (FACTS 264).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Mecklenburg-Vorpommern 1,573,597; Schwerin 98,308.
//  - MV 2027 exam dates: bildung-mv.de returned 404 for pruefungstermine_2027.pdf and the www6.d11004.bildung-mv.de host gave
//    no response (curl 000); not retried; no dates printed. Schwerin's city WFS on geoportal.kreis-lup.de returned server
//    errors; the Land school register WFS states only "Auszugsweise Vervielfältigung ... mit Quellenangabe gestattet", not an
//    open commercial licence, so it was not used.
//  - Data: Landesamt für innere Verwaltung M-V (LAiV), Amt für Geoinformation, Vermessung und Katasterwesen, WFS ATKIS
//    Basis-DLM simple features (https://www.geodaten-mv.de/dienste/atkis_bdlm_wfs_sf), licence CC BY 4.0, credit
//    "© GeoBasis-DE/M-V <Jahr der letzten Datenlieferung>" (Kurzbeschreibung_WFS_Basis-DLM_SF.pdf and capabilities saved);
//    feature type adv:AX_Insel, 608 features, EPSG:25833, saved as ax_insel.gml (1,539,500 bytes, sha256 2b3900a4...
//    1ea51ec3), downloaded 3 November 2026; converted by our script to inseln_mv.json (name and rings).
// Our own calculations (scratchpad de/w/L2/mv/v1.py, v2.py, v3.py, python3 -I), exact output:
//    v1: "Square: 1.0 km2" / "Triangle: 6.0 km2"
//    v2: "Island records: 608" / "Largest single record: Usedom 32.9 km2"
//    v3: "Rügen 95 pieces 932.4 km2" / "Usedom 40 pieces 373.6 km2" / "Poel 5 pieces 34.8 km2" / "Hiddensee 4 pieces 17.0 km2"
//        / "(no name) 311 pieces 2.7 km2". All 608 rings have positive signed area (counter-clockwise); none has a hole.
// Lesson family: test a formula on shapes you can check by hand before you trust it on real data (the shoelace formula),
// then notice how the data stores the thing you measure.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'def shoelace(ring):',
  '    """Area of a polygon from its corners, in the units of the coordinates squared."""',
  '    total = 0',
  '    for (x1, y1), (x2, y2) in zip(ring, ring[1:] + ring[:1]):',
  '        total += x1 * y2 - x2 * y1',
  '    return abs(total) / 2',
  '',
  'square = [(0, 0), (1000, 0), (1000, 1000), (0, 1000)]       # 1 km by 1 km, in metres',
  'triangle = [(0, 0), (4000, 0), (0, 3000)]                    # legs of 4 km and 3 km',
  'print("Square:", shoelace(square) / 1_000_000, "km2")',
  'print("Triangle:", shoelace(triangle) / 1_000_000, "km2")'
].join('\n');

const V2 = [
  'import json',
  '',
  'with open("inseln_mv.json", encoding="utf-8") as f:',
  '    islands = json.load(f)',
  '',
  'records = [(i["name"] or "(no name)", shoelace(i["polygons"][0]["exterior"]) / 1_000_000) for i in islands]',
  'largest = max(records, key=lambda r: r[1])',
  'print("Island records:", len(records))',
  'print("Largest single record:", largest[0], round(largest[1], 1), "km2")'
].join('\n');

const V3 = [
  'from collections import defaultdict',
  '',
  'area, pieces = defaultdict(float), defaultdict(int)',
  'for name, km2 in records:',
  '    area[name] += km2',
  '    pieces[name] += 1',
  'for name in ["Rügen", "Usedom", "Poel", "Hiddensee", "(no name)"]:',
  '    print(name, pieces[name], "pieces", round(area[name], 1), "km2")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Mecklenburg-Vorpommern' },
  slug: 'coding-classes-in-mecklenburg-vorpommern',
  code: 'cmv',
  accent: '#7A5266',
  accentRationale: 'Mecklenburg-Vorpommern Land page: a weathered heather mauve #7A5266, the colour of the coastal heath and brick-Gothic towns of the Baltic coast, distinct from every other Land page; contrast 5.28 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes in Mecklenburg-Vorpommern',
  title: 'Coding Classes in Mecklenburg-Vorpommern: Online in English',
  description: 'Coding classes in Mecklenburg-Vorpommern, live online in English: Informatik in every grade from 5 to 10, the central Abitur, holidays and an island area project.',
  ogDescription: 'Live coding in English for pupils in Mecklenburg-Vorpommern, a Land that teaches Informatik in every grade from 5 to 10: the Oberstufe courses and central exam, the 2026/27 holidays, and an original project that measures the Baltic islands with the shoelace formula.',
  twitterDescription: 'Coding in English for Mecklenburg-Vorpommern: Informatik from grade 5, the central Abitur and an island maths project.',
  pageName: 'Coding Classes in Mecklenburg-Vorpommern',
  webPageDescription: 'A guide for families in Mecklenburg-Vorpommern to coding and school Informatik, built from the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, the KMK and Destatis, with an original Python and geometry project on the Land surveying office\'s open island data.',
  courseDescription: 'Live online coding classes in English for learners in Mecklenburg-Vorpommern: going further beside Informatik und Medienbildung from Klasse 5, Python and Java for the Grundkurs and Leistungskurs, maths through code and adult courses, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Mecklenburg-Vorpommern',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'Informatik' },
    { href: '#abitur', label: 'Abitur' },
    { href: '#project', label: 'Islands' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Mecklenburg-Vorpommern &middot; Coding and Informatik &middot; Klasse 5 to Abitur',
  h1: 'Coding classes in Mecklenburg-Vorpommern',
  lede: 'Mecklenburg-Vorpommern rarely tops national league tables, but in school Informatik it is near the front. Every pupil has Informatik und Medienbildung in every grade from 5 to 10, the Land already meets the six-hour recommendation, and two in five Oberstufe pupils take the subject. This page sets out those rules and the central Abitur, the holidays for 2026/27, how our live classes in English take a keen pupil further, and a project that measures the Baltic islands from nothing but their corner coordinates.',
  secondaryCta: { href: '#project', label: 'See the island project' },
  wa: 'Hello Modern Age Coders, we live in Mecklenburg-Vorpommern and would like a free coding class in English.',
  heroNote: 'Teaching live online since 2020 &middot; over 10,000 students worldwide &middot; English-only classes with a mentor who stays',
  spec: [
    ['Ages', 'About 10 to 19, and adults'],
    ['Fits beside', 'Informatik und Medienbildung, Grund- and Leistungskurs'],
    ['Languages', 'Python, Java, Scratch'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'In India, teaching in English'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders offers coding classes for Mecklenburg-Vorpommern as live online lessons in English, for school pupils from around 10 as well as adults, with a choice of private lessons or batches of fifteen to twenty. Pupils already have Informatik und Medienbildung every year from grade 5, so our Informatik Companion course takes them further, and Oberstufe pupils prepare Python or Java for the centrally set Abitur.',

  picks: {
    eyebrow: 'Starting points in Mecklenburg-Vorpommern',
    h2: 'Three courses for pupils who already meet Informatik every year',
    lede: 'One that builds on the weekly school lesson, one for the Oberstufe and its central exam, and one that joins programming to school maths, as the island project does.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'CMV / 01', title: 'Informatik Companion, Klasse 5 to 10', note: 'Around 10 to 16. Longer programs, data and algorithms than one weekly lesson allows, so the informatics half of Informatik und Medienbildung becomes real fluency.' },
      { course: 'informatik-abitur-course-java-python', code: 'CMV / 02', title: 'Informatik for the Oberstufe and Abitur', note: 'Around 16 to 19. Java or Python, data structures, automata and databases, with timed written tasks of the compulsory-plus-choice kind the commission sets.' },
      { course: 'maths-through-coding', code: 'CMV / 03', title: 'Maths through coding', note: 'Around 10 to 15. Geometry, number and data explored in Python, from areas and coordinates to patterns, a natural partner for school maths.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Informatik in Mecklenburg-Vorpommern',
      h2: 'Is Informatik compulsory in Mecklenburg-Vorpommern?',
      lede: 'Yes, in every year from grade 5 to grade 10 and at every school type, as the GI\'s Informatik-Monitor 2026/27 records.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in Mecklenburg-Vorpommern, Klasse 5 to the Abitur', head: ['Stage', 'Grades', 'What the rules give'], rows: [
          ['All school types', '5 to 10', 'Informatik und Medienbildung, at least one lesson a week every year'],
          ['All school types', '5 to 10', 'Further Informatik electives possible (Wahlpflicht)'],
          ['Oberstufe, Grundkurs', 'Qualifikationsphase', 'Three lessons a week; written or oral exam, or a special project'],
          ['Oberstufe, Leistungskurs', 'Qualifikationsphase', 'Five lessons a week; written exam']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Mecklenburg-Vorpommern page, read 2 November 2026. Curricula exist for Informatik und Medienbildung in grades 5 to 10 at the Regionale Schule, the Gesamtschule and the Gymnasium, and for Informatik in the Qualifikationsphase. The Oberstufe at the Gesamtschule and the Gymnasium runs as G8, with grade 10 as the Einführungsphase.' },
        { kind: 'two', mt: true,
          leftH3: 'Near the front nationally',
          left: [
            'The GI\'s national summary names Mecklenburg-Vorpommern, Saarland and Thuringia as the three Länder meeting the medium-term recommendation of six compulsory Informatik hours in lower secondary, and pairs Mecklenburg-Vorpommern with Saxony as the leaders in the Oberstufe.',
            'Its Mecklenburg-Vorpommern page puts Informatik in the timetable of 40 % of the Land\'s Oberstufe pupils in 2024/25 (KMK data), well over twice the roughly 15 % across Germany; 6 % of the year\'s Abitur candidates chose it as an exam subject.'
          ],
          rightH3: 'Teachers for the subject',
          right: [
            'The monitor reports 419 Informatik teachers in the Land for 2024/25, 6 % of all teachers, with 7 newly hired in 2025/26. Informatik can replace a pupil\'s second science in the Oberstufe, though not the first.',
            'With Informatik every week from grade 5, a pupil arrives at the Oberstufe with a base many pupils elsewhere lack. Our lessons build on that base rather than repeat it.'
          ] },
        { kind: 'p', mt: true, html: 'Mecklenburg-Vorpommern has 1,573,597 residents, 98,308 of them in Schwerin, the Land capital (Destatis, 31 December 2024); Rostock, on the coast, is its largest city. After four years of Grundschule, pupils pass through a two-year Orientierungsstufe in grades 5 and 6, usually at a Regionale Schule or Gesamtschule, before continuing at a Regionale Schule, a Gesamtschule or a Gymnasium. The KMK lists the Regionale Schule as a school that combines two tracks.' }
      ]
    },
    {
      id: 'abitur',
      tint: 'tint',
      eyebrow: 'The Informatik Abitur',
      h2: 'How is the Informatik Abitur set in Mecklenburg-Vorpommern?',
      lede: 'Centrally, by a commission of teachers and the subject adviser, with compulsory and optional tasks. The details come from the Informatik-Monitor.',
      body: [
        { kind: 'table', numCols: [], caption: 'Written Informatik Abitur in Mecklenburg-Vorpommern: what a candidate answers', head: ['Level', 'Compulsory tasks', 'Optional tasks', 'Exam type'], rows: [
          ['Grundkurs', 'One', 'One of two', 'Written as third exam subject, or oral'],
          ['Leistungskurs', 'Two', 'One of two', 'Always written']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Mecklenburg-Vorpommern page, read 2 November 2026. All tasks may include practical parts. Permitted aids are the Tafelwerk (formula book) used at the school and supplements supplied by the exam commission (Tafelwerksergänzungen). The 2027 exam dates could not be fetched from the education ministry\'s server, so this page prints none; your school has them.' },
        { kind: 'two', mt: true,
          leftH3: 'A choice inside the exam',
          left: [
            'Because a candidate chooses one of two optional tasks, part of the skill is deciding quickly which one suits them. That decision is easier for a pupil who has seen many kinds of problem: data structures, automata, databases, algorithms.',
            'Practical parts are allowed in every task, the monitor notes, so working fluently at a computer matters as much as writing clearly.'
          ],
          rightH3: 'How we help',
          right: [
            'Oberstufe pupils practise with original tasks in the same compulsory-plus-choice pattern, timed, then talk through why one optional task was the better pick. They write and test code, and they write short explanations in German exam style.',
            'Abitur results rest on the school course alone. Our role is extra practice; school work is never written or marked by us.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the lessons in German?',
      lede: 'No. They are live and in English only. Our mentors are based in India and adjust to the learner.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Only in English', p: 'There is no German-language option. For a pupil in Rostock, Greifswald or a village on the coast that means coding and English practice together; for an English-speaking family it is simply the natural language.' },
          { h3: 'Fitted to the learner', p: 'A mentor slows down, repeats in other words and waits for an answer. Within a few weeks they know how a pupil speaks and what makes them stuck.' },
          { h3: 'German words given', p: 'School uses German terms: Algorithmus, Datenbank, Automat, and in maths Flächeninhalt or Koordinate. Ideas are explained in English, with the German term named.' }
        ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Baltic island project',
      h2: 'How big is Rügen? Measuring islands from their corners',
      lede: 'The Land\'s surveying office publishes its topographic base data as open data, including every island as a polygon of coordinates. Our pupils use it to learn a piece of maths that feels like a magic trick, the shoelace formula, and a habit that keeps it honest: test a formula on shapes you can check by hand before you trust it on real data.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'We requested the island layer (AX_Insel) from the web feature service of the Landesamt für innere Verwaltung M-V on 3 November 2026. It is published under Creative Commons BY 4.0 with the credit © GeoBasis-DE/M-V, which allows reuse with that credit. Our script saved its 608 records as inseln_mv.json: a name and a list of corner points in metres (the ETRS89 UTM zone 33 grid used in the Land).',
            'A polygon\'s area is not stored in the file. We have to compute it.'
          ],
          rightH3: 'The formula',
          right: [
            'Walk round the corners in order. For each pair of neighbouring corners, multiply each x by the next y and subtract the next x times this y; add all of these up and halve the result. Because the formula multiplies coordinates crosswise, like the laces of a shoe, it is called the shoelace formula.',
            'It is easy to get a sign or an index wrong, so Version 1 tests it on two shapes whose areas any pupil can work out by hand.'
          ] },
        { kind: 'code', label: 'Version 1: test the formula on known shapes', lang: 'Python', code: V1, note: 'It prints: <code>Square: 1.0 km2</code> and <code>Triangle: 6.0 km2</code>.' },
        { kind: 'p', mt: true, html: 'A 1 km by 1 km square should be 1 km² and a right triangle with legs of 4 km and 3 km should be half of 12, so 6 km². Both match, and the conversion from square metres to square kilometres (divide by 1,000,000, not 1,000) is checked along the way. Now the formula has earned some trust.' },
        { kind: 'code', label: 'Version 2: apply it to every island record', lang: 'Python', code: V2, note: 'It prints: <code>Island records: 608</code> and <code>Largest single record: Usedom 32.9 km2</code>.' },
        { kind: 'p', mt: true, html: 'The largest single record is a piece of Usedom of 32.9 km², which cannot be the whole island. A look at the names shows why: Rügen and Usedom are each stored as many separate pieces, and 311 small records have no name at all. Version 3 adds the pieces up by name.' },
        { kind: 'code', label: 'Version 3: add the pieces by name', lang: 'Python', code: V3, note: 'It prints: <code>Rügen 95 pieces 932.4 km2</code>, <code>Usedom 40 pieces 373.6 km2</code>, <code>Poel 5 pieces 34.8 km2</code>, <code>Hiddensee 4 pieces 17.0 km2</code> and <code>(no name) 311 pieces 2.7 km2</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Islands in the Land\'s topographic data: pieces and computed area (our calculation)', head: ['Island', 'Records in the file', 'Area by shoelace, km²'], rows: [
          ['Rügen', '95', '932.4'],
          ['Usedom', '40', '373.6'],
          ['Poel', '5', '34.8'],
          ['Hiddensee', '4', '17.0'],
          ['Unnamed islets', '311', '2.7']
        ] },
        { kind: 'source', html: 'Data: Landesamt für innere Verwaltung Mecklenburg-Vorpommern, WFS ATKIS Basis-DLM, feature type AX_Insel, licence CC BY 4.0, © GeoBasis-DE/M-V, retrieved 3 November 2026. Areas are our own shoelace calculations from the published corner coordinates and our own sums of the pieces; they are not official area statistics. In this layer every outline runs anticlockwise and none has a hole, which we checked before using the absolute value.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 10 to 12, squared paper.</strong> Draw an L-shaped "island" on a grid, count the squares, then work out its area with the shoelace rule from its six corners. Do the two answers agree?',
          '<strong>Python, ages 12 and up.</strong> Run Version 1, then add a rectangle of your own and a shape with a dent in it. Does the formula still work?',
          '<strong>Ages 14 to 16, Python.</strong> Remove abs() from the function and walk the square clockwise. What happens to the sign, and why does it matter when you add pieces together?',
          '<strong>Going further.</strong> Compute each island\'s perimeter from the same corners and compare perimeter and area. Which island has the most coastline for its size?'
        ] }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'Holidays',
      h2: 'When are the school holidays in Mecklenburg-Vorpommern in 2026/27?',
      lede: 'Two weeks off in February and an early summer mark the Land\'s calendar; our classes keep running in the breaks unless a family stops them.',
      body: [
        { kind: 'table', numCols: [], caption: 'Mecklenburg-Vorpommern school breaks, 2026/27', head: ['Break', 'Period'], rows: [
          ['Herbstferien', '15 to 24 October 2026'],
          ['Weihnachtsferien', '21 December 2026 to 2 January 2027'],
          ['Winter', '8 to 19 February 2027'],
          ['Easter', '24 March to 2 April 2027'],
          ['Single days and Whitsun', '7 May 2027, and 14 to 18 May 2027'],
          ['Summer', '5 July to 14 August 2027']
        ] },
        { kind: 'source', html: 'Listed in the KMK overview of holidays for 2026/2027 (as of 9 October 2025) and in the KMK summer arrangement for 2025 to 2030.' },
        { kind: 'p', mt: true, html: 'February\'s two free weeks (8 to 19 February 2027) are long enough for a short course, and many families in the Land use part of it that way. The summer holiday that ends on 14 August 2027 brings pupils back to school early compared with the south of Germany.' }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Contests',
      h2: 'Which informatics contests can pupils in Mecklenburg-Vorpommern enter?',
      lede: 'The national ones, through school.',
      body: [
        { kind: 'p', html: 'A weekly Informatik lesson from grade 5 is good preparation for the Informatik-Biber, the free puzzle contest that Bundesweite Informatikwettbewerbe runs for grades 3 to 13, this year from 9 to 20 November 2026 with schools handling entry. Older pupils can enter the first round of the 45th Bundeswettbewerb Informatik until 23 November 2026, the route into the national olympiad team. Our contest lessons use problems we write ourselves, never the organisers\' tasks, and we have no tie to BWINF.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are lessons in Mecklenburg-Vorpommern?',
      lede: 'After school on weekdays, or early on a Saturday; the booking page lists the options in your own clock.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example lesson times in the Land and the mentor\'s time in India', head: ['Mecklenburg-Vorpommern', 'India up to 27 March 2027', 'India from 28 March 2027'], rows: [
          ['14:15', '18:45', '17:45'],
          ['17:45', '22:15', '21:15'],
          ['Saturday 09:00', '13:30', '12:30']
        ] },
        { kind: 'source', html: 'Germany uses UTC+1 in winter and UTC+2 in summer, as set by the Einheitenzeitgesetz; the 2026 change back was on 25 October and the 2027 change forward is on 28 March. India keeps UTC+5:30 all year, so it is four and a half hours ahead until the change and three and a half after. These times only illustrate; batches are set with each family.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a learner in Mecklenburg-Vorpommern can do at each stage',
    lede: 'Steps we defined ourselves, used for placement and for progress notes; they do not stand in for school marks.',
    table: { caption: 'Programming and maths milestones, grade 5 to the Oberstufe (ours)', head: ['Step', 'Typical grade', 'The learner can'], rows: [
      ['1. Coordinates', '5 to 6', 'Plot points and move a sprite to given x and y values'],
      ['2. Functions', '7 to 8', 'Write a Python function and test it with inputs whose answer is known'],
      ['3. Formulas in code', '9', 'Turn a maths formula into code, such as the shoelace area, and check it by hand'],
      ['4. Real data', '10', 'Read structured data, group it and explain surprises'],
      ['5. Exam choices', 'Qualifikationsphase', 'Pick the better of two optional tasks quickly and solve it fully']
    ] },
    left: { h3: 'For parents', ps: [
      'The island project is step 3: a pupil learns to trust a formula only after it has passed a test they can check themselves.',
      'We report what your child made and can explain, not hours online.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you run a formula on real data, try it on a square.',
      'If the biggest piece looks too small, ask whether the thing you measure is stored in pieces.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners in Mecklenburg-Vorpommern',
    lede: 'Live in English with the same mentor each week, in a batch of fifteen to twenty or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 7 to 12', courses: [
        { code: 'CMV / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'First games and stories in blocks.' },
        { code: 'CMV / KID / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Python projects with a little AI.' },
        { code: 'CMV / KID / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Olympiad and Känguru maths', blurb: 'Problem solving with our own tasks.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CMV / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Java classes and objects, step by step.' },
        { code: 'CMV / TEEN / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Teens chart and question real data.' },
        { code: 'CMV / TEEN / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics competitions', blurb: 'Contest puzzles, all written by us.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'CMV / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'Programming for adult beginners.' },
        { code: 'CMV / ADULT / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data analytics', blurb: 'The maths behind data work.' },
        { code: 'CMV / ADULT / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI automation', blurb: 'Scripts and AI tools for work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for a family in Mecklenburg-Vorpommern',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Afternoon and early evening slots, German time.' },
      { time: 'Weekends', l: 'Saturday or Sunday mornings.' },
      { time: '1-on-1', l: 'A time arranged with the mentor.' }
    ],
    cells: [
      { h3: 'A steady mentor', p: 'The same teacher, who knows what the learner did last week.' },
      { h3: 'Code and maths', p: 'Programs that use the maths pupils learn at school.' },
      { h3: 'Exam pattern', p: 'Compulsory and optional tasks, timed, for the Oberstufe.' },
      { h3: 'German terms', p: 'School vocabulary named with the English.' },
      { h3: 'Parent notes', p: 'Short updates after each block of lessons.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Projects by our learners',
  projectsLede: 'Some of what learners who stuck with it have built; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews by parents and students, quoted as they stand.',

  fees: {
    h2: 'Fees for families in Mecklenburg-Vorpommern',
    lede: 'Eight live lessons make up each month. Prices on this page appear in euro, converted at the European Central Bank reference rate, although payment is taken in US dollars, so the conversion is your bank\'s and the final amount can vary a little.',
    free: ['A free first lesson', 'A short task at the learner\'s level', 'No card'],
    group: ['Fifteen to twenty learners at a similar level', 'The same mentor', 'Two lessons a week', 'Monthly, stop any month'],
    one: ['A learner and a mentor of their own', 'Planned around school and exams', 'Times you agree']
  },

  faq: {
    eyebrow: 'Families in Mecklenburg-Vorpommern ask',
    h2: 'Coding classes in Mecklenburg-Vorpommern: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Teaching is always in English, live, from mentors working in India; they match the speed and accent your child needs and mention German school words where useful.' },
      { q: 'Is Informatik compulsory in Mecklenburg-Vorpommern?', a: 'Yes. The Informatik-Monitor 2026/27 says Informatik und Medienbildung is taught at all school types in grades 5 to 10, at least one lesson a week each year.' },
      { q: 'If school already teaches it, why add lessons?', a: 'One weekly lesson, shared with media education, gives a good base. Pupils who want the Leistungskurs, a contest or their own projects need more practice than the timetable gives.' },
      { q: 'How is the Informatik Abitur set?', a: 'Centrally, by a commission of teachers and the subject adviser. The Grundkurs paper has one compulsory and one of two optional tasks; the Leistungskurs has two compulsory and one of two optional tasks, and practical parts are allowed.' },
      { q: 'Can my child take a written Informatik exam in the Grundkurs?', a: 'Yes, as the third exam subject, according to the Informatik-Monitor. It can also be an oral fourth or fifth subject, or a special project instead.' },
      { q: 'Do your lessons count towards the Abitur?', a: 'No. Abitur marks come from school only; what we offer is practice, with no grade or certificate attached.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Slots after about 14:15 suit most school days.' },
      { q: 'How many learners are in a group?', a: 'Our batches hold fifteen to twenty, sorted by level; private lessons pair one learner with one mentor.' },
      { q: 'How is the fee paid?', a: 'We show the monthly fee in euro at the European Central Bank reference rate and charge it in US dollars; your bank converts it, so small differences are normal. The first lesson is free.' },
      { q: 'Are you connected to the ministry, the LAiV or a school?', a: 'No. We run independently; the education ministry, the Landesamt für innere Verwaltung, BWINF and the Land\'s schools have nothing to do with our classes.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Mecklenburg-Vorpommern.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page we have for Germany.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'The Land beside the other fifteen.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'The Oberstufe subject in English.' },
      { href: '/math-and-coding-competitions-germany', label: 'Maths and coding competitions', p: 'Contests for the 2026/27 year.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Reasoning before shortcuts.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'During the first lesson the learner solves a single small coding problem suited to their grade, and the mentor watches the reasoning and listens for how comfortably English is followed. A course and batch recommendation follows.',
    readFirst: 'Read on first if you like: <a class="ag-inline-link" href="/how-we-teach">what a lesson looks like</a>, and <a class="ag-inline-link" href="/courses">the course catalogue</a>.',
    note: 'Every lesson is a live video call with a mentor in India, held in English. Questions? A WhatsApp message gets the fastest reply.',
    formNote: 'Free, without a card or commitment.'
  },

  footer: {
    cols: [
      { h4: 'Learning', links: [
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/abitur-computer-science-in-english', label: 'Abitur computer science' },
        { href: '/math-and-coding-competitions-germany', label: 'Competitions' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/german-school-system-maths-and-computing-explained', label: 'German school system' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Test it on a square first'
  },

  personalityCss: `
.ag-root.ag-cmv .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-cmv .ag-capsule { border-left-width: 4px; border-radius: 5px; }
.ag-root.ag-cmv .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-cmv .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cmv .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Mecklenburg-Vorpommern and national pages); KMK FER2026_27, Sommerferienregelung and school-type overview; Destatis GV-ISys 31.12.2024; BWINF 2026/27 dates; read 2 and 3 November 2026. Data: Landesamt für innere Verwaltung M-V, WFS ATKIS Basis-DLM (AX_Insel), CC BY 4.0, © GeoBasis-DE/M-V.',
    localProject: 'Test it on a square first: an original Python and geometry project. The shoelace formula is checked on a 1 km square (1.0 km²) and a 3-4 right triangle (6.0 km²), then applied to the 608 island records of the Land surveying office: the largest single record is a 32.9 km² piece of Usedom, and adding pieces by name gives Rügen 932.4 km² from 95 pieces, Usedom 373.6 km² from 40, Poel 34.8 km², Hiddensee 17.0 km² and 311 unnamed islets 2.7 km². Lesson family: test a formula on shapes you can check by hand.',
    requiredMentions: ['inseln_mv.json', 'Square: 1.0 km2', 'Triangle: 6.0 km2', 'Largest single record: Usedom 32.9 km2', 'Rügen 95 pieces 932.4 km2', 'Tafelwerksergänzungen', '15 to 24 October 2026', 'Test it on a square first'],
    sources: [
      { claim: 'Informatik und Medienbildung grades 5 to 10; Oberstufe; central Abitur structure and aids; key figures.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/mecklenburg-vorpommern' },
      { claim: 'MV meets the six-hour recommendation; leads with Saxony in the Oberstufe.', url: 'https://informatik-monitor.de/' },
      { claim: 'Holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Population of MV and Schwerin.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/02-bundeslaender.xlsx?__blob=publicationFile' },
      { claim: 'Island polygons, CC BY 4.0, © GeoBasis-DE/M-V.', url: 'https://www.geodaten-mv.de/dienste/atkis_bdlm_wfs_sf?SERVICE=WFS&REQUEST=GetCapabilities' }
    ],
    rejectedClaims: [
      'MV Abitur 2027 dates: ministry file 404 and host unreachable; none printed.',
      'Official island areas: the page gives our shoelace sums of the published pieces only.',
      'The Land school register WFS: its terms allow only extract copying with source, not an open commercial licence; not used.',
      'German-language teaching: we teach in English only.',
      'Any affiliation with the education ministry, the LAiV, BWINF or a school: none.'
    ]
  }
};
