'use strict';
// Maths tutor in Frankfurt, in English (ag- city maths door, Germany cluster P5 row DE120, rows.tsv city tier 1).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only,
// with mentors who match the learner's pace and accent; pages show euro, checkout charges USD. Maths page:
// priceSubject 'maths'.
// Angle: maths help by Klasse for a Frankfurt pupil under Hessen rules: VERA-3 and VERA-8 windows 2027, the Hessian
// MSK-Online-Check (Klassen 4 to 6), the central Realschulabschluss papers (10 to 14 May 2027) and the Landesabitur
// (Mathematik 5 May 2027), what an English-speaking tutor adds, and a geometry project on the city's own district
// boundaries: the shoelace formula, then the unit trap (m2 to km2 is a factor of a million, not a thousand).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/math-tutor-frankfurt-in-english/
// and facts-school/src/, fetched 2 and 3 Nov 2026):
//  - kultus.hessen.de Realschulabschluss page (he-rsa.html): "Die zentralen Abschlussarbeiten werden in den Fächern
//    Deutsch, Mathematik und der ersten Fremdsprache geschrieben."; "Präsentation auf Grundlage eines Portfolios";
//    Realschulabschluss at "Gesamtleistung von 4,4 oder besser"; qualifizierender at "3,0 oder besser"; "Haupttermin:
//    Die schriftlichen Prüfungen werden im Zeitraum vom 10. Mai bis zum 14. Mai 2027 durchgeführt."; "Nachtermin ...
//    vom 1. Juni bis zum 3. Juni 2027".
//  - kultus.hessen.de Termine Landesabitur (he-termine.html): "Die schriftlichen Abiturprüfungen 2027 finden im Zeitraum
//    vom 15. April bis 5. Mai 2027 , die Nachprüfungen im Zeitraum vom 18. Mai bis 3. Juni 2027 statt."; "Mittwoch, 5. Mai
//    2027 Mathematik Mathematik"; "Donnerstag. 3. Juni 2027 Mathematik Mathematik"; Nachprüfungen with "landesweit
//    einheitliche Aufgaben".
//  - kultus.hessen.de Landesabitur page (bf3e0e30.html): calculators (WTR and CAS) regulated in KCGO section 2.5; from
//    "Abiturjahrgang 2030" requirements "an den Vorgaben des IQB orientieren"; until 2029 no changes planned.
//  - kultus.hessen.de Gymnasium page (he-gym.html): Landesabitur "aus zentralen, vom Kultusministerium zur Bearbeitung
//    vorgesehenen Prüfungsaufgaben sowie dezentralen, von den Lehrkräften vor Ort erarbeiteten Prüfungsteilen";
//    Oberstufe "10 bis 12 (G8) bzw. 11 bis 13 (G9)".
//  - kultus.hessen.de MSK-Online-Check (he-msk.html): "digitales Diagnoseinstrument für den Mathematikunterricht in den
//    Klassen 4 bis 6"; "seit dem Schuljahr 2025/26 allen hessischen Schulen kostenfrei".
//  - IQB / KMK via FACTS.md: VERA-3 2027 window 12 April to 26 May 2027 (111); VERA-8 2027 8 February to 25 March 2027
//    (115); VERA not graded, no rankings (116); IQB pool LK 300 min / 100 BE, GK 255 min / 80 BE, Part A without aids
//    (34 to 39); each Land decides how far it uses pool tasks (32); Bildungsstandards Leitideen (124).
//  - Känguru 2027 on 8 April 2027, registration 1 December 2026 to 31 January 2027 (183, 184); 66th MO Regionalrunde
//    11 November 2026, Landesrunde 26 to 28 February 2027 (165, 166).
//  - Destatis GV-ISys (places.tsv): Frankfurt am Main 756,021; Offenbach am Main 132,746; Darmstadt 167,029 (31.12.2024).
//  - Time: EinhZeitG, SoZV; summer time 2027 from 28 March.
//  - Data: Stadt Frankfurt am Main, "WFS Stadtgebietsgliederung Frankfurt am Main", layer Stadtteile, via GovData
//    https://ckan.govdata.de/dataset/wfs-stadtgebietsgliederung-frankfurt-am-main, licence Datenlizenz Deutschland
//    Namensnennung 2.0, attribution "Stadt Frankfurt am Main, www.frankfurt.de" (stadtgebiet-record.xml). GetFeature
//    GeoJSON in EPSG:25832 (metres), 46 Stadtteile, each one polygon without holes (stadtteile-25832.geojson, 952,864
//    bytes, downloaded 3 November 2026). Field Shape_Area (Altstadt 506265.71, Sachsenhausen-Süd 30520651.41).
// Our own calculations (scratchpad de/w/C3/de120/, python3 -I): v1 prints "Pitch: 7140.0 m2" and "L-shaped garden:
// 80.0 m2"; v2 prints "Altstadt 506266 m2", "wrong: / 1000 = 506.3 km2", "right: / 1000000 = 0.51 km2 = 50.6 ha",
// "Sachsenhausen-Süd 30520652 m2", "wrong: / 1000 = 30520.7 km2", "right: / 1000000 = 30.52 km2 = 3052.1 ha"; v3 prints
// "Box: 961 m by 934 m = 0.9 km2". Unrounded shoelace on all 46 equals Shape_Area to the square metre; the 1 m2 gap for
// Sachsenhausen-Süd comes from our rounding of corners to centimetres. Altstadt has 231 corner points.
// Lesson family: area from corner coordinates, and squared units scale by the square of the factor.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'def shoelace(corners):',
  '    total = 0',
  '    for i in range(len(corners)):',
  '        x1, y1 = corners[i]',
  '        x2, y2 = corners[(i + 1) % len(corners)]',
  '        total = total + x1 * y2 - x2 * y1',
  '    return abs(total) / 2',
  '',
  'pitch = [(0, 0), (105, 0), (105, 68), (0, 68)]',
  'garden = [(0, 0), (12, 0), (12, 5), (5, 5), (5, 9), (0, 9)]',
  'print("Pitch:", shoelace(pitch), "m2")',
  'print("L-shaped garden:", shoelace(garden), "m2")'
].join('\n');

const V2 = [
  'import json',
  '',
  'with open("stadtteile.json", encoding="utf-8") as f:',
  '    parts = json.load(f)',
  '',
  'for name in ["Altstadt", "Sachsenhausen-Süd"]:',
  '    m2 = shoelace(parts[name])',
  '    print(name, round(m2), "m2")',
  '    print("  wrong: / 1000 =", round(m2 / 1000, 1), "km2")',
  '    print("  right: / 1000000 =", round(m2 / 1000000, 2), "km2 =", round(m2 / 10000, 1), "ha")'
].join('\n');

const V3 = [
  'xs = [x for x, y in parts["Altstadt"]]',
  'ys = [y for x, y in parts["Altstadt"]]',
  'width = max(xs) - min(xs)',
  'depth = max(ys) - min(ys)',
  'print("Box:", round(width), "m by", round(depth), "m =", round(width * depth / 1000000, 2), "km2")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'maths', label: 'Frankfurt: maths tutor in English' },
  slug: 'math-tutor-frankfurt-in-english',
  code: 'mtf',
  accent: '#007185',
  accentRationale: 'Maths tutor in Frankfurt, in English: a clear teal #007185, the colour of the Main on a survey map, chosen for a page built on district boundaries; contrast 4.61 on the paper #FBF8F2, above the 4.5 floor',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-hesse', name: 'Hesse' }],
  routeLabel: 'Maths tutor in Frankfurt, in English',
  title: 'Maths Tutor in Frankfurt, in English: Klasse 1 to Abitur',
  description: 'Maths tutor in Frankfurt, in English: live online help by Klasse under Hessen rules, the 2027 Realschule and Abitur dates, and a geometry project on city data.',
  ogDescription: 'Live online maths tutoring in English for Frankfurt pupils from Klasse 1 to the Abitur: the Hessen exams and their 2027 dates, what a tutor in English adds, and the shoelace formula on the city\'s own district map.',
  twitterDescription: 'Maths tutoring in English for Frankfurt: Hessen exams in 2027 by Klasse, and the shoelace formula on city data.',
  pageName: 'Maths Tutor in Frankfurt, in English',
  webPageDescription: 'A guide for Frankfurt families looking for a maths tutor who teaches in English: maths by Klasse under Hessen rules, from VERA-3 to the Landesabitur, with 2027 dates from the Hessian ministry and the IQB, and an original area project on the Stadt Frankfurt am Main district boundaries.',
  courseDescription: 'Live online maths tutoring in English for Frankfurt pupils from Klasse 1 to 13: school maths, the Hessen Realschule papers and the Landesabitur, and IB, IGCSE or AP maths, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Maths in Frankfurt',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#klasse', label: 'By Klasse' },
    { href: '#exams', label: 'Exams 2027' },
    { href: '#project', label: 'Project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Frankfurt am Main &middot; Maths tutoring &middot; Klasse 1 to 13',
  h1: 'Maths tutor in Frankfurt, taught in English',
  lede: 'Frankfurt pupils sit Hessian maths papers, but many of their families think, read and help with homework in English. This page sets out what maths a Frankfurt child meets in each Klasse and which tests and exams fall in 2027, from VERA-3 in the spring to the Landesabitur on 5 May 2027. It explains what live tutoring in English adds and what it cannot replace, and it ends with a geometry project on the city\'s own district map, where one wrong division makes the old town larger than a mountain range.',
  secondaryCta: { href: '#exams', label: 'Hessen exam dates 2027' },
  wa: 'Hello Modern Age Coders, we are in Frankfurt and looking for a maths tutor who teaches in English. Could we book a free first class?',
  heroNote: 'Teaching maths and coding live since 2020 &middot; 10,000+ students worldwide &middot; tutoring in English',
  spec: [
    ['Klassen', '1 to 13, any school type'],
    ['Covers', 'Hessen school maths, Realschule papers, Abitur'],
    ['Also', 'IB, IGCSE and AP maths'],
    ['Format', 'Group of fifteen to twenty, or one to one'],
    ['Tutors', 'Mentors in India, live on video'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'A maths tutor in Frankfurt, in English: Modern Age Coders gives live online maths lessons in English to Frankfurt pupils from Klasse 1 to 13, following the Hessen curriculum and its exams, from the central Realschule papers in May 2027 to the Landesabitur, or the IB, IGCSE or AP courses of international schools. One regular mentor explains each method in clear English at your child\'s pace, in a group or one to one.',

  picks: {
    eyebrow: 'Where Frankfurt pupils start',
    h2: 'Three maths courses for Frankfurt pupils',
    lede: 'A year-long course for the middle Klassen, a course for the Hessian Abitur, and one for children who want harder problems than school gives them.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MTF / 01', title: 'Middle School Mathematics', note: 'A year-long course from arithmetic to pre-algebra, geometry and statistics: fractions, negative numbers, equations and areas, the core of the years from Klasse 5 up to Klasse 8.' },
      { course: 'abitur-mathematics-course-in-english', code: 'MTF / 02', title: 'Abitur Mathematik in English', note: 'For the Oberstufe, ages 16 to 19, Leistungskurs or Grundkurs: Analysis, analytic geometry and Stochastik, with our own exam-style problems.' },
      { course: 'mathematik-olympiade-and-kaenguru-training-course', code: 'MTF / 03', title: 'Mathematik-Olympiade and Känguru', note: 'Ages 8 to 18, grouped by Klassenstufe. Problem solving for the Känguru on 8 April 2027 and the Mathematik-Olympiade rounds, with original problems.' }
    ]
  },

  sections: [
    {
      id: 'klasse',
      eyebrow: 'Maths by Klasse',
      h2: 'Which maths tests does a Frankfurt pupil take, Klasse by Klasse?',
      lede: 'Hessen follows the national Bildungsstandards, adds its own diagnosis in the primary years, and sets central papers at the end of Realschule and in the Abitur. The table puts the 2026/27 school year in order.',
      body: [
        { kind: 'table', numCols: [], caption: 'Maths tests and exams for Frankfurt pupils in the 2026/27 school year', head: ['Klasse', 'What happens', 'When'], rows: [
          ['3', 'VERA-3 comparison test in maths and German', 'Test window 12 April to 26 May 2027'],
          ['4 to 6', 'MSK-Online-Check, a digital maths diagnosis that schools may use', 'During the year, at the school\'s choice'],
          ['8', 'VERA-8 comparison test in maths, German and languages', 'Test window 8 February to 25 March 2027'],
          ['10, Realschule track', 'Central Abschlussarbeit in maths, plus German and the first foreign language', '10 to 14 May 2027; resits 1 to 3 June 2027'],
          ['Oberstufe', 'Written Landesabitur in maths, Leistungskurs and Grundkurs', 'Wednesday 5 May 2027; resit Thursday 3 June 2027']
        ] },
        { kind: 'source', html: 'Sources: IQB, VERA-3 and VERA-8 test windows for 2027; Hessisches Ministerium für Kultus, Bildung und Chancen, pages on the MSK-Online-Check, the Realschulabschluss and the Landesabitur dates for 2027. Read on 2 and 3 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Primary and lower secondary',
          left: [
            'VERA results are not marks. The IQB says no school or Land rankings come out of them; they show a teacher, a year early, where a class stands against the standards for grade 4 or grade 9. A weak VERA-3 result in May 2027 is a reason to look closely, not a verdict.',
            'The MSK-Online-Check ("Mathe sicher können") is Hessen\'s own tool for Klassen 4 to 6. The ministry describes it as a digital diagnosis of basic maths skills that gives teachers support suggestions, free to every Hessian school since 2025/26. Its training themes are telling: natural numbers in Klasse 4 to 5, fractions and decimals in Klasse 6 to 7.'
          ],
          rightH3: 'Where gaps usually open',
          right: [
            'Fractions and decimals are a common place for a gap to open, usually in Klasse 6 or 7, and the training themes of the Hessian check point at the same stage. A pupil who can add 2/3 and 3/4 without a calculator, and say why the answer is more than 1, has the base for equations in Klasse 7 and 8.',
            'The second gap opens with functions and algebra in Klasse 8 to 10, just before the Realschule papers or the move into the Oberstufe. Tutoring before an exam year works far better than tutoring during one.'
          ] }
      ]
    },
    {
      id: 'exams',
      eyebrow: 'Hessen exams in 2027',
      h2: 'How do the Hessen maths exams work in 2027?',
      lede: 'Two moments matter most: the central papers at the end of the Realschule track in Klasse 10, and the written Landesabitur. Both are set by the ministry, not by the school alone.',
      body: [
        { kind: 'two',
          leftH3: 'Realschulabschluss, Klasse 10',
          left: [
            'In the Realschule track, the ministry writes the final papers centrally: "Die zentralen Abschlussarbeiten werden in den Fächern Deutsch, Mathematik und der ersten Fremdsprache geschrieben." A presentation based on a portfolio, in another compulsory subject, completes the procedure, and both count towards the overall grade.',
            'The Realschulabschluss is awarded with an overall result of 4,4 or better. The qualifizierender Realschulabschluss, which opens the way to the gymnasiale Oberstufe, needs 3,0 or better including the papers in German, maths and the first foreign language. In 2027 the written papers fall between 10 and 14 May, with resits from 1 to 3 June 2027.'
          ],
          rightH3: 'Landesabitur, Oberstufe',
          right: [
            'The Hessian Landesabitur combines central tasks from the ministry with parts written by the pupils\' own teachers. The written exams in 2027 run from 15 April to 5 May 2027, and maths is the last of them: Wednesday 5 May 2027, for Leistungskurs and Grundkurs alike. The resit, with tasks that are also the same across Hessen, is on Thursday 3 June 2027.',
            'On calculators, the ministry says the current rules in the Kerncurriculum hold up to the Abitur year 2029; from the Abitur year 2030, the requirements for extended calculator functions will follow the IQB. A pupil in Klasse 9 today should ask the school which calculator to buy.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'The shared IQB task-pool format for Abitur maths, as published by the IQB', head: ['Level', 'Marks (Bewertungseinheiten)', 'Time, including choice time', 'Part A (no aids) handed in within'], rows: [
          ['Leistungskurs (erhöhtes Niveau)', '100', '300 minutes', '110 minutes'],
          ['Grundkurs (grundlegendes Niveau)', '80', '255 minutes', '100 minutes']
        ] },
        { kind: 'source', html: 'Source: Institut zur Qualitätsentwicklung im Bildungswesen (IQB), pool documents for mathematics. Each Land decides through its own commission which pool tasks it uses and how many tasks of its own it adds, so a Hessian paper follows this frame but is not identical to another Land\'s. Exam dates: Hessian ministry, Termine Landesabitur 2027.' },
        { kind: 'p', mt: true, html: 'We prepare pupils for these papers, but we do not set or mark them, and nothing we do replaces the school course: the grade a Frankfurt pupil gets comes from the school and the ministry. What a tutor can do is make sure the methods are secure months before 5 May 2027, and practise with problems we write in the same style, never with leaked or copied exam tasks.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Maths in English',
      h2: 'Does maths tutoring in English help a pupil at a German school?',
      lede: 'Often, if it is done carefully. The maths is identical; what changes is the language around it, and we take care that a pupil can say every method in the words their teacher uses.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Only English, said up front', p: 'We teach in English and not in German, and we tell families that before the first class. For a child at an international school in or near Frankfurt, English is already the language of maths lessons. For a child at a Hessian Gymnasium or Realschule, it means two languages for one subject, which takes some care.' },
          { h3: 'Both sets of words', p: 'Mentors keep a running list of the German terms from the pupil\'s own worksheets beside the English ones: Nenner and denominator, Bruch and fraction, Steigung and gradient, Ableitung and derivative. Pupils write their working in German when the paper will be German.' },
          { h3: 'Pace, not pressure', p: 'The mentor adjusts speed and accent to the pupil, explains one idea in two or three ways, and waits. A pupil who hides confusion in a full classroom often asks freely in a small online group or alone with a tutor.' }
        ] },
        { kind: 'p', mt: true, html: 'Our mentors are based in India and teach live over video, so Frankfurt afternoons fall in their evenings. A pupil keeps the same mentor through the school year, which matters in maths more than in most subjects: the tutor who saw the fraction gap in Klasse 6 is the one who notices it again when it comes back inside an algebra problem in Klasse 8.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Frankfurt maths project',
      h2: 'How big is Frankfurt\'s Altstadt? The shoelace formula on the city\'s own map',
      lede: 'The city publishes the exact boundaries of its 46 Stadtteile as corner coordinates in metres. With one formula from coordinate geometry, a Klasse 9 or 10 pupil can turn those corners into an area, check it against the city\'s figure, and then fall into the most common unit trap in school maths.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'Stadt Frankfurt am Main publishes WFS Stadtgebietsgliederung under the Datenlizenz Deutschland Namensnennung 2.0. Its Stadtteile layer, downloaded on 3 November 2026 in metres (ETRS89, UTM zone 32N), gives each district as one polygon: the Altstadt has 231 corner points, each an east and a north value in metres.',
            'The layer also stores an area for each Stadtteil, which lets a pupil check the answer. We exported the corners to a small file, stadtteile.json.'
          ],
          rightH3: 'The formula',
          right: [
            'For a polygon whose corners (x, y) are listed in order around the edge, multiply each x by the next y, subtract the next x times this y, add everything up, take the absolute value and halve it. In German it is often called the Gaußsche Trapezformel; in English it is the shoelace formula, after the criss-cross pattern of the products.',
            'It works for any polygon without crossings, however many corners it has, which is why a computer can do in a moment what would take a page by hand.'
          ] },
        { kind: 'code', label: 'Version 1: test the formula on shapes you can check', lang: 'Python', code: V1, note: 'It prints: <code>Pitch: 7140.0 m2</code> and <code>L-shaped garden: 80.0 m2</code>. A 105 m by 68 m pitch is 7,140 m²; the garden is 12 by 9 minus a 7 by 4 corner, 108 minus 28.' },
        { kind: 'p', mt: true, html: 'Only after the formula passes a test we can do in our heads do we trust it on real data. Version 2 runs straight after the function from Version 1 and also does the conversion two ways: once by dividing by 1,000, the mistake we see most, and once properly.' },
        { kind: 'code', label: 'Version 2: two Stadtteile, and the unit trap', lang: 'Python', code: V2, note: 'It prints: <code>Altstadt 506266 m2</code>, <code>wrong: / 1000 = 506.3 km2</code>, <code>right: / 1000000 = 0.51 km2 = 50.6 ha</code>, then <code>Sachsenhausen-Süd 30520652 m2</code>, <code>wrong: / 1000 = 30520.7 km2</code> and <code>right: / 1000000 = 30.52 km2 = 3052.1 ha</code>.' },
        { kind: 'p', html: 'The shoelace result for the Altstadt, 506,266 m², matches the city\'s stored area of 506,265.71 m² to the nearest square metre. For Sachsenhausen-Süd we get 30,520,652 m² against the city\'s 30,520,651.41; the one square metre comes from our rounding of each corner to the centimetre. The formula is right. The danger is the next line.' },
        { kind: 'p', html: 'A kilometre is 1,000 metres, so a square kilometre is 1,000 times 1,000 square metres: a factor of a million. Dividing by 1,000 makes the Altstadt 506 km², and Sachsenhausen-Süd over 30,000 km². A quick check shows which answer can be true.' },
        { kind: 'code', label: 'Version 3: a box around the Altstadt', lang: 'Python', code: V3, note: 'It prints: <code>Box: 961 m by 934 m = 0.9 km2</code>. The whole Altstadt fits in a box under one square kilometre, so 506 km² is impossible and 0.51 km² is believable.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Three Frankfurt Stadtteile by area (our shoelace calculation, city boundaries)', head: ['Stadtteil', 'Square metres', 'Hectares', 'Square kilometres'], rows: [
          ['Altstadt', '506,266', '50.6', '0.51'],
          ['Bahnhofsviertel', '532,302', '53.2', '0.53'],
          ['Sachsenhausen-Süd', '30,520,651', '3,052.1', '30.52']
        ] },
        { kind: 'source', html: 'Data: Stadt Frankfurt am Main, www.frankfurt.de, WFS Stadtgebietsgliederung, layer Stadtteile, Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. Areas are our own shoelace results on unrounded corners, which agree with the city\'s Shape_Area field to the square metre; the conversions and the box check are ours. Of the 46 Stadtteile, the Altstadt is the smallest and Sachsenhausen-Süd the largest.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Klasse 5 and 6, on squared paper.</strong> Draw an L-shaped room, count the squares, then split it into two rectangles and check that both ways agree.',
          '<strong>Klasse 7 and 8, by hand.</strong> Use the shoelace formula on a triangle with corners (0, 0), (6, 0) and (2, 5). Compare with one half times base times height.',
          '<strong>Klasse 9 and 10, in Python.</strong> Run Version 1, then find the area of Bahnhofsviertel from the file and convert it to hectares without looking at the table.',
          '<strong>Oberstufe.</strong> List the corners of a square clockwise instead of anticlockwise and print the sum before abs(). What does the sign tell you, and why does the formula need abs()?'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Beyond the school course',
      h2: 'Which maths competitions can a Frankfurt pupil enter in 2026/27?',
      lede: 'Two national contests reach most schools, and both welcome pupils who simply enjoy problems.',
      body: [
        { kind: 'two',
          leftH3: 'Känguru der Mathematik',
          left: [
            'In 2027 the Känguru takes place on 8 April, later than its usual third Thursday in March, because that date would fall just before the Easter holidays in almost every Land. Schools register their pupils online from 1 December 2026 to 31 January 2027.',
            'It lasts 75 minutes: 24 problems for Klassen 3 to 6 and 30 from Klasse 7. More than 920,000 pupils from over 13,000 schools took part in 2026.'
          ],
          rightH3: 'Mathematik-Olympiade',
          right: [
            'The 66th Mathematik-Olympiade began with a school round in the autumn of 2026. The regional round is on 11 November 2026 and the Land round from 26 to 28 February 2027; the national final runs from 30 May to 2 June 2027 in Kaiserslautern.',
            'Both contests enter through the school, so a pupil should ask the maths teacher. We are not connected with either organiser, and we train with original problems of our own.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Lesson times',
      h2: 'When do maths lessons run in Frankfurt time?',
      lede: 'Lessons sit after school on weekdays or on weekend mornings. The times below are examples in Frankfurt time with the matching clock in India.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Frankfurt lesson times and the mentor\'s clock', head: ['Frankfurt', 'India, winter (until 28 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['16:50', '21:20', '20:20'],
          ['18:10', '22:40', '21:40'],
          ['Sunday 10:20', '14:50', '13:50']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz, German time is UTC+1 in winter and UTC+2 in summer; summer time ended on 25 October 2026 and resumes on 28 March 2027. India keeps UTC+5:30 the whole year, which puts it four and a half hours ahead of Frankfurt now and three and a half hours ahead from late March.' },
        { kind: 'p', mt: true, html: 'Lessons continue through Hessian school holidays. Abitur pupils can use the Easter break, 22 March to 2 April 2027, for a block of extra practice before the written exams start on 15 April 2027.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Our maths ladder',
    h2: 'What a pupil should be able to do before each step',
    lede: 'Our own checkpoints, used to place a new pupil and to plan the year. They follow the order of the Hessian curriculum, not its wording.',
    table: { caption: 'Maths checkpoints from Klasse 3 to the Abitur (ours)', head: ['Before', 'Checkpoint', 'Typical warning sign'], rows: [
      ['Klasse 5', 'Times tables and written division without hesitation', 'Counting on fingers for 7 times 8'],
      ['Klasse 7', 'Fractions, decimals and percentages as one idea', 'Adding numerators and denominators'],
      ['Klasse 9', 'Solve and check a linear equation; read a graph', 'Moving terms across the equals sign by habit'],
      ['Klasse 10 papers', 'Area, volume, Pythagoras and units, with a sanity check', 'Answers that cannot be true, left unchecked'],
      ['Abitur', 'Functions, derivatives and probability, explained in words', 'Correct method, wrong operator']
    ] },
    left: { h3: 'For parents', ps: [
      'The unit trap in the project above is the warning sign in row four. Pupils who check the size of an answer catch it; pupils who do not, lose marks in every exam year.',
      'Reports to you say what your child can now do alone, and what is next.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Square units grow by the square. Metres to kilometres is a thousand; square metres to square kilometres is a million.',
      'Before you write the answer, ask whether it could fit inside a box you can picture.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths',
    h2: 'Nine more maths courses for Frankfurt pupils',
    lede: 'All taught live in English by one regular mentor, in a group or alone.',
    bands: [
      { num: 'I', h3: 'Primary years', sub: 'Klasse 1 to 4', courses: [
        { code: 'MTF / PRIM / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Counting to fractions, placed by grade, Klasse 1 to 5.' },
        { code: 'MTF / PRIM / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense rather than tricks, ages 5 to 10.' },
        { code: 'MTF / PRIM / 03', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Hands-on number play before and at school start, ages 4 to 7.' }
      ] },
      { num: 'II', h3: 'Secondary and beyond', sub: 'Klasse 7 to 13', courses: [
        { code: 'MTF / SEK / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Algebra and trigonometry to calculus and statistics.' },
        { code: 'MTF / SEK / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Formulas like the shoelace, explored in Python, ages 10 to 15.' },
        { code: 'MTF / SEK / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Proof and problem solving well past the syllabus.' }
      ] },
      { num: 'III', h3: 'International curricula', sub: 'For international schools', courses: [
        { code: 'MTF / INT / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Core, Extended and Additional Mathematics.' },
        { code: 'MTF / INT / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB maths AA and AI', blurb: 'SL and HL, with coaching for the internal assessment.' },
        { code: 'MTF / INT / 03', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'AB and BC, with full exam practice.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'How maths lessons work for a Frankfurt family',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in Frankfurt, with time left for homework.' },
      { time: 'Weekends', l: 'Saturday or Sunday mornings for longer practice.' },
      { time: '1-on-1', l: 'Times you agree with the tutor, tighter before an exam.' }
    ],
    cells: [
      { h3: 'One tutor', p: 'The same mentor all year, who knows the gaps.' },
      { h3: 'School material', p: 'Worksheets and old tests worked through together.' },
      { h3: 'Two vocabularies', p: 'English explanation, German terms kept alongside.' },
      { h3: 'Working shown', p: 'Every step written, as Hessian papers expect.' },
      { h3: 'Sanity checks', p: 'Each answer tested for size before it is final.' },
      { h3: 'Group or private', p: 'A small online class, or the pupil alone.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Maths and coding meet in many of our students\' projects. A few are shown here; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'What parents and students wrote on Google, unedited.',

  fees: {
    h2: 'Maths tutoring fees for Frankfurt families',
    lede: 'Fees are monthly, for eight live lessons. The page lists them in euro, worked out at the European Central Bank reference rate; your card or bank is charged in US dollars and converts the amount, so the euro figure on the statement can be a little different.',
    free: ['A free first lesson', 'A short check on a recent worksheet', 'No card needed'],
    group: ['Fifteen to twenty pupils at a similar level', 'One regular mentor', 'Two lessons a week', 'Monthly, stop whenever you like'],
    one: ['Your child and one tutor', 'Built around the school\'s own material', 'Times that fit exams and holidays']
  },

  faq: {
    eyebrow: 'Frankfurt families ask',
    h2: 'Maths tutor in Frankfurt in English: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. All lessons are live and in English only. The tutor speaks clearly, adjusts to your child\'s pace and accent, and keeps the German terms from school worksheets alongside the English ones, so your child can still write answers in German for a Hessian paper.' },
      { q: 'When is the Abitur maths exam in Hessen in 2027?', a: 'The Hessian ministry has set the written Abitur in Mathematik, Leistungskurs and Grundkurs, for Wednesday 5 May 2027, the last day of the written exams that start on 15 April 2027. The resit is on Thursday 3 June 2027.' },
      { q: 'When are the Realschule final papers in 2027?', a: 'In the Hessian Realschule track, the central written papers in German, maths and the first foreign language run from 10 to 14 May 2027, with resits from 1 to 3 June 2027. A portfolio presentation in another subject completes the final grade.' },
      { q: 'Can you help my child in Klasse 4 or 5?', a: 'Yes. Our Primary maths course places children by grade, and many Frankfurt families start around Klasse 4 or 5, before fractions and decimals arrive. The free first lesson includes a short check on a recent worksheet so we start in the right place.' },
      { q: 'Does an English-speaking tutor confuse a pupil at a German school?', a: 'Not if the tutor keeps both sets of words. Our mentors write the German term from the worksheet next to the English one, and pupils practise writing their working in German when the test will be in German. The methods themselves do not change.' },
      { q: 'Do you tutor IB, IGCSE or AP maths?', a: 'Yes, for pupils at international schools in and around Frankfurt. We have courses for IB Mathematics AA and AI, IGCSE Mathematics and AP Calculus, alongside the Hessian school course and the Abitur.' },
      { q: 'When are lessons in Frankfurt time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Late afternoons are a common choice, or a weekend morning for a longer session.' },
      { q: 'Can you guarantee a better grade?', a: 'No, and nobody honestly can. The grade comes from the school and from the Hessian papers. What we promise is regular, careful teaching: secure methods, practice with problems we write ourselves, and an honest report on what your child can do.' },
      { q: 'What are the fees, and which currency do I pay in?', a: 'Lessons are paid monthly. Prices on this page are shown in euro at the European Central Bank reference rate, while the payment is taken in US dollars and converted by your bank, so your statement may differ slightly. The first lesson is free and needs no card.' },
      { q: 'Where are the tutors based?', a: 'In India. They teach live over video, so a 16:50 lesson in Frankfurt is 21:20 for the tutor in winter. Your child keeps the same tutor through the school year.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More maths for families in Germany.',
    items: [
      { href: '/online-math-tutor-germany', label: 'Online maths tutor in Germany', p: 'Our maths tutoring across all sixteen Länder.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The Abitur maths exam explained in detail.' },
      { href: '/kangaroo-math-germany-practice', label: 'Känguru practice', p: 'Original practice problems for the Känguru.' },
      { href: '/coding-classes-in-hesse', label: 'Coding classes in Hesse', p: 'Our page for families across the Land.' },
      { href: '/math-and-coding-competitions-germany', label: 'Maths and coding competitions', p: 'Every national contest for pupils in Germany, with dates.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages.' }
    ]
  },

  start: {
    h2: 'Book a free first maths lesson',
    lede: 'Bring a recent worksheet or test. The tutor works through part of it with your child, finds where the method breaks down, and suggests a course and a level.',
    readFirst: 'To read more first: <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a live lesson, and <a class="ag-inline-link" href="/courses">all courses</a> lists our maths syllabuses.',
    note: 'Lessons are live online with tutors based in India and are taught in English only. The quickest way to ask us something is WhatsApp, in English.',
    formNote: 'Free, without a card or any commitment.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle school maths' },
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik' },
        { href: '/courses/mathematik-olympiade-and-kaenguru-training-course', label: 'Olympiade and Känguru' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/online-math-tutor-germany', label: 'Maths tutor in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Square units grow by the square'
  },

  personalityCss: `
.ag-root.ag-mtf .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-mtf .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-mtf .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-mtf .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mtf .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Hessisches Ministerium für Kultus, Bildung und Chancen (Realschulabschluss, Termine Landesabitur 2027, Landesabitur, Gymnasium, MSK-Online-Check); IQB (VERA-3 and VERA-8 windows 2027; Abitur maths pool format); Känguru der Mathematik e.V.; Mathematik-Olympiaden e.V.; Einheitenzeitgesetz; Destatis GV-ISys. Data: Stadt Frankfurt am Main, WFS Stadtgebietsgliederung, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'The Frankfurt area project: an original shoelace-formula program, tested on a pitch (7,140 m²) and an L-shaped garden (80 m²), then run on the city\'s Stadtteile boundaries: Altstadt 506,266 m², matching the city\'s Shape_Area; the divide-by-1,000 trap gives 506.3 km² and a bounding box of 961 m by 934 m (0.9 km²) proves it impossible. Lesson family: area from corner coordinates; squared units scale by the square.',
    requiredMentions: ['stadtteile.json', 'Pitch: 7140.0 m2', 'Altstadt 506266 m2', 'wrong: / 1000 = 506.3 km2', 'Box: 961 m by 934 m = 0.9 km2', 'Gaußsche Trapezformel', '10 to 14 May 2027', 'Square units grow by the square'],
    sources: [
      { claim: 'Hessen Realschulabschluss: central papers, grade thresholds, 2027 dates.', url: 'https://kultus.hessen.de/schulsystem/schulformen-und-bildungsgaenge/realschule/realschulabschluss' },
      { claim: 'Landesabitur 2027 dates; Mathematik 5 May 2027; resit 3 June 2027.', url: 'https://kultus.hessen.de/schulsystem/schulformen-und-bildungsgaenge/gymnasium/landesabitur/termine-landesabitur' },
      { claim: 'Landesabitur calculator rules; IQB orientation from Abiturjahrgang 2030.', url: 'https://kultus.hessen.de/schulsystem/schulformen-und-bildungsgaenge/gymnasium/landesabitur' },
      { claim: 'MSK-Online-Check, Klassen 4 to 6, since 2025/26.', url: 'https://kultus.hessen.de/mathe-sicher-koennen-online-check' },
      { claim: 'IQB pool format; VERA windows 2027.', url: 'https://www.iqb.hu-berlin.de/' },
      { claim: 'Frankfurt Stadtteile boundaries and licence.', url: 'https://ckan.govdata.de/dataset/wfs-stadtgebietsgliederung-frankfurt-am-main' }
    ],
    rejectedClaims: [
      'Any grade or exam guarantee: refused; the page says the grade comes from the school and the Hessian papers.',
      'Copying Hessian or IQB exam tasks: refused; practice problems are ours.',
      'A total area for Frankfurt by adding the 46 Stadtteile: not printed; we do not sum published parts.',
      'German-language teaching, or any link with the ministry, the IQB, the city or a contest organiser: none.'
    ]
  }
};
