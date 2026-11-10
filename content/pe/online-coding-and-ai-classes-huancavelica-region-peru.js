// SHIP: market (region) | Huancavelica: tablets in schools, few home computers, live classes in English | missing values give bounds: a share reported as a range when "NO INDICA" fills the column
'use strict';
// Online coding and AI classes, Huancavelica region, Peru (ag- region page, Peru cluster row PE181; alloc: regions, cbg, #3D5000).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: flexible hours; USD only via
// data-price anchors.
// Spine: Huancavelica is a high Andean region where the state is putting tablets into schools (11,907 in August 2026, 71,442
// over seven years) while fewer than one home in five has a computer. The page is frank that a tablet is a start, not a
// programming machine, says who our English-taught live classes suit now, and the project shows why an honest share can be a
// range rather than a number.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-huancavelica-region-peru/):
//  - INEI, Censos Nacionales 2025, Cuadro N° 1 (src/inei/tab/tsv_ind_00/sheet2): HUANCAVELICA 372155; provinces HUANCAVELICA
//    120159, ACOBAMBA 42903, ANGARAES 57737, CASTROVIRREYNA 14077, CHURCAMPA 34898, HUAYTARÁ 17529, TAYACAJA 84852; districts
//    HUANCAVELICA 40240, LIRCAY 29006, YAULI 22244, ACORIA 18774, ASCENSIÓN 14436, PAMPAS 9895. Never summed.
//  - INEI Censos Nacionales 2025, Cuadro N° 3 (sheet4): HUANCAVELICA censada 362744; 6 a 11 años 38323; 12 a 17 años 40087.
//  - INEI Lib1539 Cuadro N° 1.9 (facts-geo/places.tsv): Huancavelica city 49,570 (2017); capital per Compendio 2026 cuadro 1.8.
//    Lib1541 dpto09.xlsx (centros poblados 2017): HUANCAVELICA 34 655 at 3 746 m s.n.m.; LIRCAY 9 724; PAMPAS 7 839.
//  - INEI Compendio Estadístico Perú 2026 tomo 1: cuadro 11.5 "Huancavelica 10,8 11,8 12,0 12,0 11,6 11,5 15,0 20,5 18,8 19,3
//    16,8"; 11.6 "Huancavelica 2,4 4,1 2,6 2,8 5,0 10,5 18,4 26,1 24,3 26,0 23,9"; 11.13 "Huancavelica 18,1 21,6 25,7 26,3 30,0
//    47,3 55,7 55,1 65,5 65,8 69,1"; Total 2025 33,9 / 56,8 / 81,1. Cuadro 5.53 (4° primaria 2025): Huancavelica Matemática
//    35,5, Lectura 29,7; Total 30,0 / 32,7. Cuadro 5.54 (2° secundaria 2025): Huancavelica 11,2 / 10,8; Total 12,7 / 18,5.
//    Cuadro 5.16 (primaria pública, miles): 51,6 (2015) 38,5 (2025); 5.22 (secundaria pública): 45,7 (2015) 34,4 (2025);
//    5.75 docentes: 11 704 (2025).
//  - EF EPI 2025 (ef_peru.raw): "Peru EF EPI score : 519"; the regional list (Lima 544 ... Cajamarca 383) has no Huancavelica.
//  - GORE Huancavelica, gob.pe nota 1434939 (26 de agosto de 2026): "entregó 11 mil 907 tabletas electrónicas a los
//    responsables de las ocho Unidades de Gestión Educativa Local (UGEL)"; "estudiantes de 443 instituciones educativas";
//    "5 mil 577 tabletas para estudiantes de Primaria y 6 mil 330 para estudiantes de Secundaria"; "acumulado de 71 mil 442
//    equipos". Nota 1441783: "en beneficio de 412 localidades de las siete provincias"; "velocidades de conexión de hasta 200
//    Mbps"; FTTH. Nota 1464572 (27 de octubre de 2026): Acta de Hermanamiento with "Lycée Le Chesnoy Amilly"; "seis estudiantes
//    y dos docentes viajaron a Francia".
//  - Ley 28044, Edades normativas, CNEB competency 28 and JER hours, MINEDU 2026 opening, Fábrica de Programadores, ONEM 2026,
//    OPI (FACTS 5, 6, 13, 14, 17, 32, 33, 39, 45, 99, 105, 111). Time: tzdata.
//  - Data: Universidad Nacional de Huancavelica (UNH), "Lista de Ingresantes del año 2025 I y II a la UNH", datosabiertos.gob.pe,
//    "Open Data Commons Attribution License" (ODC-By), released and modified 2025-12-23. File SisacadIngresantes2025.csv
//    (saved as ingresantes-unh-2025.csv), 1,417 rows, UTF-8, FECHA_CORTE 20250630 on every row although 228 rows carry
//    FECHA_INGRESO 2025-09-06. No names; each row has a TOTAL_INGRESANTES count (1 to 9). We print aggregates only.
// Our own calculations (scratchpad pe/r5/cbg/v1.py, v2.py, python3 -I):
//  v1 prints: New students in 2025: 2010 / From Huancavelica: 538 / Share: 26.8 %
//  v2 prints: Posgrado | total 957 | unknown 643 | between 16.7 and 83.9 % / Pregrado | total 412 | unknown 17 | between 89.6
//    and 93.7 % / Segunda especialidad profesional | total 641 | unknown 566 | between 1.4 and 89.7 %
// Lesson family: missing values give bounds. When a column says "NO INDICA", the honest share is a range from "none of the
// unknowns" to "all of them"; a narrow range is an answer, a wide one is not.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'home = total = 0',
  'with open("ingresantes-unh-2025.csv", newline="", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        people = int(row["TOTAL_INGRESANTES"])',
  '        total += people',
  '        if row["DEPA_PROCEDENCIA"] == "HUANCAVELICA":',
  '            home += people',
  '',
  'print("New students in 2025:", total)',
  'print("From Huancavelica:", home)',
  'print("Share:", round(100 * home / total, 1), "%")'
].join('\n');

const V2 = [
  'import csv',
  '',
  'counts = {}',
  'with open("ingresantes-unh-2025.csv", newline="", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        level = row["NIVEL"]',
  '        origin = row["DEPA_PROCEDENCIA"]',
  '        if origin == "HUANCAVELICA":',
  '            kind = "home"',
  '        elif origin == "NO INDICA":',
  '            kind = "unknown"',
  '        else:',
  '            kind = "elsewhere"',
  '        tally = counts.setdefault(level, {"home": 0, "unknown": 0, "elsewhere": 0})',
  '        tally[kind] += int(row["TOTAL_INGRESANTES"])',
  '',
  'for level, t in sorted(counts.items()):',
  '    total = sum(t.values())',
  '    low = 100 * t["home"] / total',
  '    high = 100 * (t["home"] + t["unknown"]) / total',
  '    print(level, "| total", total, "| unknown", t["unknown"],',
  '          "| between", round(low, 1), "and", round(high, 1), "%")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Huancavelica region' },
  slug: 'online-coding-and-ai-classes-huancavelica-region-peru',
  code: 'cbg',
  accent: '#3D5000',
  accentRationale: 'Huancavelica region: a deep puna-grass olive #3D5000, allocated to this row; contrast 8.44 on #FBF8F2, 7.94 on #F5F1E8 and 7.27 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Huancavelica region, Peru',
  title: 'Huancavelica Region, Peru: Live Coding and AI Classes in English',
  description: 'Live online coding and AI classes in English for the Huancavelica region: tablets versus laptops, honest fit, census facts and a project on university entrants.',
  ogDescription: 'For learners in Huancavelica, Tayacaja, Angaraes, Acobamba and the rest of the region: live coding and AI classes in English online, the seven provinces in 2025 census figures, what the school tablet programme does and does not cover, and a Python project on the university\'s own entrant data.',
  twitterDescription: 'Huancavelica region, live online coding in English: tablets, laptops, honest fit and a university data project.',
  pageName: 'Live Online Coding and AI Classes in the Huancavelica Region',
  webPageDescription: 'A plain guide for families and learners in the Huancavelica region of Peru to live online coding and AI classes taught in English, built on INEI census and household tables, MINEDU sources, notes from the regional government, and an original Python project on the Universidad Nacional de Huancavelica list of 2025 entrants (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners across the Huancavelica region of Peru: block coding and logic for children, Python and web for secundaria students, Python, data and Java for university students and adults, in a group of fifteen to twenty or one to one, at any hour the family picks.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Huancavelica region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#tablets', label: 'Tablets' },
    { href: '#fit', label: 'Who it suits' },
    { href: '#provinces', label: 'Provinces' },
    { href: '#entrants', label: 'Data project' },
    { href: '#hours', label: 'Hours' }
  ],
  eyebrow: 'Huancavelica region &middot; Live online, taught in English &middot; From secundaria up, younger with care',
  h1: 'Online coding and AI classes in the Huancavelica region',
  lede: 'Huancavelica sits high in the central Andes, with seven provinces and a capital at about 3,700 metres. Its schools are receiving tablets by the thousand, yet most homes still have no computer. Our classes are live, online and taught in English. This page explains where a tablet is enough and where it is not, who in the region is ready for English-taught classes today, and how a university\'s own data can teach a teenager to report an honest range instead of a tidy but wrong number.',
  secondaryCta: { href: '#entrants', label: 'Open the entrant-data project' },
  wa: 'Hello Modern Age Coders, I live in the Huancavelica region of Peru. I would like to know if your live coding classes in English would work for me or my child, and which device we would need. Can we book a free class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ learners worldwide &middot; mentors used to slow, clear English',
  spec: [
    ['Strongest fit', 'Secundaria students, university students and adults'],
    ['Younger children', 'Welcome, usually one to one'],
    ['Teaching language', 'English, spoken slowly'],
    ['Device', 'A laptop for typed code; a tablet for first blocks'],
    ['Hours', 'Chosen by the family, any day'],
    ['Start', 'A free trial with an honest verdict']
  ],
  capsuleQ: 'In short',
  capsule: 'Wherever you live in the Huancavelica region, from the capital and Lircay to Pampas, Acobamba or Churcampa, Modern Age Coders can teach you or your child coding and AI in live online classes in English. The fit is strongest for secundaria pupils, university students and working adults who follow some English: Python, web pages, data work and how AI systems are made. A child of six or seven can begin with block coding, usually one to one with an unhurried mentor. Study in a class of fifteen to twenty or on your own, at hours your family sets; the first lesson costs nothing.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Where a Huancavelica learner usually starts',
    lede: 'One for children whose English is still young, one for secundaria students, and one for adults and university students who want programming they can use at work.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'HVC / 01', title: 'Coding for Kids', note: 'Drag-and-drop blocks, games and small apps. It runs on a school tablet, needs almost no typing and lets a young child follow the mentor by watching the screen.' },
      { course: 'python-complete-masterclass-teens', code: 'HVC / 02', title: 'Python for Teens', note: 'A first typed language for 1° to 5° de secundaria. Words like if, for, print and return are everyday English, so each program doubles as a vocabulary lesson.' },
      { course: 'data-analysis-mastery-course-college', code: 'HVC / 03', title: 'Data Analysis', note: 'For students and adults who keep records at a council, a school office or a cooperative: sorting, totalling and checking them with SQL and Python.' }
    ]
  },

  sections: [
    {
      id: 'tablets',
      eyebrow: 'Devices in the region',
      h2: 'Can a child in Huancavelica learn to code on a school tablet?',
      lede: 'For first steps, yes. For real programming, a keyboard and a bigger screen make the difference. The regional government is handing out tablets in large numbers, and it helps to know what they are good for.',
      body: [
        { kind: 'two',
          leftH3: 'What the region has delivered',
          left: [
            'On 26 August 2026 the Gobierno Regional de Huancavelica reported that, through the regional education directorate and with PRONATEL, it "entregó 11 mil 907 tabletas electrónicas" to the heads of the region\'s eight UGELs, for pupils of 443 schools.',
            'The same note splits them into 5,577 tablets for primaria and 6,330 for secundaria, and says the regional broadband project, now in its seventh year of tablet deliveries, has reached a running total of 71,442 devices.'
          ],
          rightH3: 'What a tablet can and cannot do for coding',
          right: [
            'A tablet is well suited to block coding: a child drags pieces, taps run, and watches a character move. It is also fine for joining a video class and following the mentor\'s screen.',
            'Typed programming is different. A learner writing Python spends most of an hour typing, reading error messages and switching between windows. On a touch screen that becomes slow and tiring, so from about ten we ask for a laptop or desktop, even a shared or second-hand one.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4], caption: 'Computers and internet at home: Huancavelica against Peru (per cent)', head: ['Measure', 'Huancavelica 2015', 'Huancavelica 2022', 'Huancavelica 2025', 'Peru 2025'], rows: [
          ['Households owning a computer', '10.8', '20.5', '16.8', '33.9'],
          ['Households with internet at home', '2.4', '26.1', '23.9', '56.8'],
          ['Internet users, age 6 upward', '18.1', '55.1', '69.1', '81.1']
        ] },
        { kind: 'source', html: 'Figures from the household survey (ENAHO) as published in tables 11.5, 11.6 and 11.13 of the first volume of INEI\'s Compendio Estadístico Perú 2026; INEI writes the decimals with commas.' },
        { kind: 'p', mt: true, html: 'Read across the rows and the pattern is clear. In 2025 roughly a sixth of Huancavelica households owned a computer and fewer than a quarter paid for internet at home, while 69.1 per cent of residents from age six upward went online somewhere, most of them on a phone. Internet use has almost quadrupled since 2015. Home computers have not kept pace. That gap, not interest or ability, is the first thing a family here should think about before signing up for any online programming course, ours included.' }
      ]
    },
    {
      id: 'fit',
      tint: 'tint',
      eyebrow: 'Honest fit',
      h2: 'Who in Huancavelica is ready for classes taught in English?',
      lede: 'We teach only in English, live and online; there are no Spanish or Quechua groups. For some learners in the region that works well straight away, for others it will work better in a year or two.',
      body: [
        { kind: 'two',
          leftH3: 'What we know about English here',
          left: [
            'EF\'s English Proficiency Index 2025 gives Peru a score of 519, in its moderate band. EF also scores sixteen Peruvian regions, and Huancavelica is not among them, so there is no regional English figure to quote.',
            'Schools do teach English: the regular secundaria week includes three hours of Inglés. Three hours a week is a foundation rather than fluency, and we plan the first months of classes with that in mind.'
          ],
          rightH3: 'Who usually does well',
          right: [
            'Teenagers in 3° to 5° de secundaria who like maths and are willing to meet English in small steps. University students, especially in engineering, systems and mathematics, where much reading is in English already. Adults who use English words at work and want programming or data skills.',
            'Younger children can learn with us too, mostly one to one, with blocks, short repeated phrases and a parent within reach for the first few weeks.'
          ] },
        { kind: 'p', mt: true, html: 'Huancavelica\'s pupils are not weak at maths. In MINEDU\'s 2025 census evaluation, 35.5 per cent of the region\'s fourth-grade pupils reached the satisfactory level in maths, above the national 30.0 per cent. In second year of secundaria the picture is harder: 11.2 per cent in maths against 12.7 nationally, and 10.8 per cent in reading against 18.5. A learner who reads English slowly can still reason well, and programming rewards reasoning. Spanish-speaking parents who would like to read first can open our guide to <a class="ag-inline-link" href="/clases-de-programacion-en-ingles-peru">clases de programación en inglés en Perú</a>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4], caption: 'Pupils at the satisfactory level in 2025 (per cent of those evaluated)', head: ['Evaluation', 'Huancavelica maths', 'Peru maths', 'Huancavelica reading', 'Peru reading'], rows: [
          ['4th grade of primaria', '35.5', '30.0', '29.7', '32.7'],
          ['2nd year of secundaria', '11.2', '12.7', '10.8', '18.5']
        ] },
        { kind: 'source', html: 'INEI, Compendio Estadístico Perú 2026, tomo 1, cuadros 5.53 and 5.54, from MINEDU\'s Unidad de Medición de la Calidad de los Aprendizajes, Evaluación Censal de Estudiantes.' }
      ]
    },
    {
      id: 'provinces',
      eyebrow: 'Seven provinces',
      h2: 'How many people live in the Huancavelica region, and where?',
      lede: 'INEI\'s 2025 census counted 372,155 people in the department of Huancavelica. The capital is the city of Huancavelica, and the province of Tayacaja, around Pampas, is the second most populous.',
      body: [
        { kind: 'table', numCols: [1], caption: 'People in each Huancavelica province at the 2025 census', head: ['Province', 'Total, 2025'], rows: [
          ['Huancavelica', '120,159'],
          ['Tayacaja', '84,852'],
          ['Angaraes', '57,737'],
          ['Acobamba', '42,903'],
          ['Churcampa', '34,898'],
          ['Huaytará', '17,529'],
          ['Castrovirreyna', '14,077'],
          ['Department of Huancavelica', '372,155']
        ] },
        { kind: 'source', html: 'From Cuadro N° 1 of the 2025 census tables (Censos Nacionales 2025), counting both people enumerated and people INEI estimates were missed, on the reference day of 15 September 2025. The department line is INEI\'s own total, not our addition.' },
        { kind: 'two', mt: true,
          leftH3: 'Towns, with their own years',
          left: [
            'INEI\'s 2017 census table of department capitals gives the city of Huancavelica 49,570 people. In INEI\'s 2017 listing of centros poblados, the town of Huancavelica stands at 3,746 metres, Lircay had 9,724 residents and Pampas 7,839.',
            'For 2025 INEI reports districts rather than towns: Huancavelica district 40,240, Lircay 29,006, Yauli 22,244, Acoria 18,774, Ascensión 14,436 and Pampas 9,895. A district and a town are different areas, so we print the figures side by side and never subtract one from the other.'
          ],
          rightH3: 'School-age learners',
          right: [
            'Among the people the 2025 census actually counted in the department (362,744), 38,323 were aged 6 to 11 and 40,087 were aged 12 to 17, the two age bands that match primaria and secundaria.',
            'Public schools have fewer pupils than a decade ago. INEI\'s compendium shows public primaria enrolment in the department falling from 51.6 thousand in 2015 to 38.5 thousand in 2025, and public secundaria from 45.7 thousand to 34.4 thousand. The region had 11,704 teachers in 2025.'
          ] },
        { kind: 'p', mt: true, html: 'Most of the region\'s people live far from any classroom that teaches programming. For a teenager in Churcampa or Castrovirreyna with a connection and a laptop at home, a live online class is one of very few ways to study coding with a person, rather than alone with videos.' }
      ]
    },
    {
      id: 'connect',
      tint: 'tint',
      eyebrow: 'Connection',
      h2: 'Is the internet in Huancavelica good enough for a live class?',
      lede: 'In the towns, usually. In smaller places it depends on the locality, and the regional government says so itself.',
      body: [
        { kind: 'two',
          leftH3: 'What is being built',
          left: [
            'A regional government note from the first national technical forum of regional governments on telecommunications, held in Huancavelica city, describes a broadband extension "en beneficio de 412 localidades de las siete provincias", with connections of up to 200 Mbps over fibre to the home or institution, replacing older microwave links.',
            'The same note says that the regional broadband projects were designed when demand was much lower, and that virtual education, telemedicine and cloud services have since outgrown the original capacity.'
          ],
          rightH3: 'What a class actually needs',
          right: [
            'A live coding class sends the mentor\'s voice and screen to the learner and the learner\'s voice back. A steady connection matters more than a fast one, and the shared screen uses far less data than a film.',
            'The free class tests this. If the picture keeps freezing, the mentor can switch off video, keep audio and a shared screen, and see whether the lesson still works.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Find the device.</strong> A laptop or desktop for typed code; a tablet only for block coding with a younger child.',
          '<strong>Check the room.</strong> A quiet corner, a headset if possible, and the same place every week.',
          '<strong>Test the line.</strong> Join the free class from that room at the hour you plan to use.',
          '<strong>Decide together.</strong> The mentor tells you plainly whether the connection and the English level are ready, and suggests a group or one-to-one start.'
        ] }
      ]
    },
    {
      id: 'entrants',
      eyebrow: 'A Huancavelica data project',
      h2: 'How many new university students come from Huancavelica itself?',
      lede: 'The Universidad Nacional de Huancavelica publishes its 2025 entrants as open data. The question looks simple. The answer teaches the most useful habit in data work: when part of a column is unknown, say how wide your uncertainty is.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The university publishes "Lista de Ingresantes del año 2025 I y II a la UNH" on datosabiertos.gob.pe under the Open Data Commons Attribution License (ODC-By), released on 23 December 2025. It covers undergraduate entrants, postgraduate entrants and second-speciality entrants for both 2025 admission rounds.',
            'Our copy, ingresantes-unh-2025.csv, has 1,417 rows and no names. Each row carries a TOTAL_INGRESANTES count, so a row can stand for several people. Every row says its cut-off date is 30 June 2025, although 228 rows record an entry date of 6 September 2025, so we describe the file as published rather than guess which date is right.'
          ],
          rightH3: 'The column that matters',
          right: [
            'DEPA_PROCEDENCIA records the department each entrant comes from. Most rows name one: HUANCAVELICA, JUNIN, AYACUCHO and so on. But 815 of the 1,417 rows say "NO INDICA", not stated.',
            'A first attempt adds up the people, counts those from Huancavelica, and divides. It runs without error and prints a confident percentage, which is exactly what makes it dangerous.'
          ] },
        { kind: 'code', label: 'Version 1: one number for everyone', lang: 'Python', code: V1, note: 'It prints: <code>New students in 2025: 2010</code>, <code>From Huancavelica: 538</code> and <code>Share: 26.8 %</code>.' },
        { kind: 'p', mt: true, html: 'Twenty-seven per cent suggests that most new students came from outside the region. That is not what the file shows. Version 1 treats every "NO INDICA" entrant as someone from elsewhere, when they could just as well be from Huancavelica. The only honest statement is a range: the lowest possible share assumes no unknown entrant is local, the highest assumes all of them are. Version 2 works that range out separately for each level of study, because the unknowns are not spread evenly.' },
        { kind: 'code', label: 'Version 2: a range for each level', lang: 'Python', code: V2, note: 'It prints: <code>Posgrado | total 957 | unknown 643 | between 16.7 and 83.9 %</code>, <code>Pregrado | total 412 | unknown 17 | between 89.6 and 93.7 %</code> and <code>Segunda especialidad profesional | total 641 | unknown 566 | between 1.4 and 89.7 %</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4], caption: 'UNH entrants 2025 by level: people, unknown origin and the possible share from Huancavelica (our calculation)', head: ['Level', 'Entrants', 'Origin not stated', 'Lowest share', 'Highest share'], rows: [
          ['Undergraduate (pregrado)', '412', '17', '89.6%', '93.7%'],
          ['Postgraduate (posgrado)', '957', '643', '16.7%', '83.9%'],
          ['Second speciality', '641', '566', '1.4%', '89.7%']
        ] },
        { kind: 'source', html: 'Data: Universidad Nacional de Huancavelica, Lista de Ingresantes del año 2025 I y II a la UNH, ODC-By. People are the sum of TOTAL_INGRESANTES; shares and bounds are ours. The file has 1,417 rows standing for 2,010 entrants.' },
        { kind: 'p', mt: true, html: 'Now the answer has two very different parts. For undergraduates the range is narrow, about 90 to 94 per cent, because only 17 of 412 did not state an origin: the university\'s first-degree students are overwhelmingly from the region. For postgraduate and second-speciality entrants the range runs from almost nothing to nearly nine in ten, which means the file simply cannot answer the question for them. Saying "we cannot tell" is a result, and a more useful one than 26.8 per cent.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Around 8, with counters.</strong> Ten counters in a bag: four red, two blue, four hidden under a cloth. How many red could there be? Write the smallest and the largest.',
          '<strong>Blocks, around 9 to 11.</strong> Make a list of ten answers with three marked "?". Count the yes answers twice, once treating "?" as no and once as yes.',
          '<strong>First Python, around 11 to 13.</strong> Edit Version 1 so that it counts JUNIN. Is the new share a lower bound, an upper bound or neither?',
          '<strong>Ages 13 and over.</strong> Add a third line to Version 2 that prints the share among entrants who did state an origin. Explain why it sits between the two bounds.',
          '<strong>Going further.</strong> Group the undergraduate rows by ESPECIALIDAD and find the programmes whose range is widest. Which ones should the university ask about first?'
        ] }
      ]
    },
    {
      id: 'school',
      tint: 'tint',
      eyebrow: 'School and beyond',
      h2: 'Do schools in Huancavelica teach programming?',
      lede: 'Not as a subject. The region follows Peru\'s national curriculum, which treats digital skills as something every area should develop rather than as a course of their own.',
      body: [
        { kind: 'two',
          leftH3: 'The national rules',
          left: [
            'Under the General Education Law, primaria lasts six years and secundaria five. MINEDU sets each grade by the child\'s age on 31 March, so a six year old enters 1° de primaria and 5° de secundaria is the year of sixteen year olds.',
            'The curriculum\'s technology competency, number 28, "Se desenvuelve en entornos virtuales generados por las TIC", is transversal. In a regular 35-hour secundaria week, Matemática has four hours, Inglés three and Educación para el Trabajo two; programming has none.'
          ],
          rightH3: 'Where programming appears',
          right: [
            'MINEDU\'s Fábrica de Programadores, launched in July 2025, trains 1,000 public-school pupils of 4° and 5° de secundaria in Lima Norte in Python with an international certificate. None of the sources we read mention it in Huancavelica.',
            'Beyond school, the region signed an exchange agreement in 2026 with the Lycée Le Chesnoy Amilly in France for students of its technological institutes; six students and two teachers travelled to France that September for training in farming and food production.'
          ] },
        { kind: 'p', mt: true, html: 'Contests are open here as everywhere in Peru. For ONEM, the national maths olympiad, a pupil sits the first round at their own school; that round took place on 8 July 2026, and the 2026 edition called on more than 1.7 million secundaria pupils. UTEC runs the OPI computing olympiads and charges secundaria entrants nothing. We have no connection with MINEDU, UTEC, the regional government or either contest, and we teach with problems we write ourselves. Our page on <a class="ag-inline-link" href="/math-olympiad-coaching-peru">maths olympiad coaching in Peru</a> explains how we prepare pupils with original practice.' }
      ]
    },
    {
      id: 'choose',
      eyebrow: 'Choosing',
      h2: 'Which course should a Huancavelica learner start with?',
      lede: 'Two questions decide it: how old the learner is, and what device is at home. The table is our own guide, not a rule.',
      body: [
        { kind: 'table', numCols: [], caption: 'A starting point by age and device (our suggestions)', head: ['Learner', 'Device at home', 'Start with', 'Format'], rows: [
          ['Child, 6 to 8', 'Tablet or laptop', 'Block coding and puzzles', 'One to one'],
          ['Child, 9 to 12', 'Laptop, even shared', 'Blocks, then first Python', 'Either'],
          ['Secundaria, 13 to 16', 'Laptop', 'Python for Teens', 'Group'],
          ['Secundaria, eyeing university', 'Laptop', 'Python, then web or Java', 'Group'],
          ['University student', 'Laptop', 'Python or data analysis', 'Either, by timetable'],
          ['Working adult', 'Laptop', 'Python and spreadsheets to data', 'Often one to one']
        ] },
        { kind: 'source', html: 'Suggestions of ours, not rules. Because MINEDU places pupils by their age on 31 March, two pupils in one grade may differ by nearly twelve months.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'For the youngest', p: 'Short sessions, big buttons, and a mentor who names every block in English while pointing at it, so a word and an action arrive together.' },
          { h3: 'For secundaria', p: 'Python from the first lesson, with maths puzzles the school syllabus already supports, and steady practice in reading English error messages.' },
          { h3: 'For adults', p: 'Problems from real work: tidying a list of records, counting by category, checking a total. One to one fits shifts and travel.' }
        ] },
        { kind: 'p', mt: true, html: 'Teenagers will find more on <a class="ag-inline-link" href="/coding-classes-for-teens-peru">our teen coding page for Peru</a>, and engineering students may prefer <a class="ag-inline-link" href="/python-for-engineering-students-peru">Python for engineering students</a>. The <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru hub page</a> lists every guide we have written for the country.' }
      ]
    },
    {
      id: 'hours',
      tint: 'tint',
      eyebrow: 'Timing',
      h2: 'At what hour can a Huancavelica learner join?',
      lede: 'Whatever time suits. Huancavelica keeps Peru time all year, and the mentor in India fits the lesson to your day.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample conversions, Huancavelica to India (examples, not a timetable)', head: ['Huancavelica', 'India', 'For the mentor'], rows: [
          ['06:00', '16:30', 'Late afternoon'],
          ['08:30', '19:00', 'Evening'],
          ['11:00', '21:30', 'Night'],
          ['15:30', '02:00', 'Next day, small hours'],
          ['18:30', '05:00', 'Next day, early morning'],
          ['20:00', '06:30', 'Next day, morning']
        ] },
        { kind: 'source', html: 'Peru: UTC minus 5 hours all year, with no daylight saving (tz database, America/Lima). India: UTC plus 5 hours 30 minutes. India is 10 hours 30 minutes ahead of Huancavelica every day of the year.' },
        { kind: 'p', mt: true, html: 'Because neither country changes its clocks, an hour agreed in March still works in November. When you book, you choose the hour on your own clock. Peru\'s 2026 school year opened on 16 March 2026, when 53,631 schools across the country received 6,225,000 pupils; many families start private classes in the January to March holidays, while adults can start in any month.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How a Huancavelica learner moves forward',
    lede: 'Our own stages, used to place each learner and to show families what has been mastered.',
    table: { caption: 'Our stages, from first sequences to honest ranges', head: ['Step', 'Usual age', 'What they manage'], rows: [
      ['1. Sequence', '6 to 7', 'Put steps in the right order to move a character'],
      ['2. Loop', '7 to 9', 'Repeat steps with a loop instead of copying them'],
      ['3. Decide', '8 to 10', 'Choose between two actions with if and else'],
      ['4. Count', '9 to 12', 'Keep a running total in a variable while reading a list'],
      ['5. Group', '11 to adult', 'Tally records into categories with a dictionary'],
      ['6. Bound', '13 to adult', 'Report a lowest and highest value when some data are missing']
    ] },
    left: { h3: 'For families', ps: [
      'The entrant-data project trains steps 5 and 6. Afterwards, any percentage in a newspaper prompts one question: how much of the data was missing?',
      'Every month you hear what your child built and what they found hard.'
    ] },
    right: { h3: 'For learners', ps: [
      'An unknown is not a no.',
      'A range you can defend beats a number you cannot.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for the Huancavelica region',
    lede: 'Sorted into three age bands. Whichever you pick, one mentor teaches it live, in English, to a class or to a single learner.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'HVC / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Programming', blurb: 'Stories, games and animations built from blocks.' },
        { code: 'HVC / KIDS / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Number ideas made visible in small programs.' },
        { code: 'HVC / KIDS / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Patterns and logic before the first line of code.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'HVC / TEEN / 01', slug: 'frontend-development-masterclass-for-teens', title: 'Front-end web for teens', blurb: 'Pages and interfaces in HTML, CSS and JavaScript.' },
        { code: 'HVC / TEEN / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Tables, charts and questions answered with Python.' },
        { code: 'HVC / TEEN / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'Original problems for contest-minded pupils.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'HVC / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Scripts first, then programs that solve real tasks.' },
        { code: 'HVC / ADULT / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL databases', blurb: 'Design tables and query them with SQL.' },
        { code: 'HVC / ADULT / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Shares, averages and uncertainty done properly.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'A week of lessons from Huancavelica, in practice',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before school', l: 'An early Huancavelica morning is late afternoon for the mentor.' },
      { time: 'After school', l: 'Afternoon and evening hours also work.' },
      { time: 'One to one', l: 'Best when the learner needs English taken slowly.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person every week, who learns how the learner thinks.' },
      { h3: 'Clear English', p: 'Short sentences, repeated, and always shown on the shared screen.' },
      { h3: 'Learner at the keyboard', p: 'Every line is typed by the student, with the mentor watching and prompting.' },
      { h3: 'Separate classes', p: 'A ten year old never shares a class with an adult.' },
      { h3: 'Plain reports', p: 'Parents hear what was learned and what needs another try.' },
      { h3: 'Two formats', p: 'A group of fifteen to twenty, or a private class.' }
    ]
  },

  projectsH2: 'Projects from our longer-term students',
  projectsLede: 'Learners who stay with us go on to build things that work. A few are shown here, and the <a class="ag-inline-link" href="/student-labs">student labs</a> have many more.',
  reviewsLede: 'What families and students wrote on Google, unedited.',

  fees: {
    h2: 'Fees for learners in Huancavelica',
    lede: 'Plans are billed monthly in US dollars to a debit or credit card. Your bank turns the dollar amount into soles at its own exchange rate on the day, so your statement may differ slightly from month to month.',
    free: ['One free trial class', 'A check of device, connection and English', 'No card needed'],
    group: ['Fifteen to twenty learners of similar age', 'A regular mentor', 'Two live classes a week', 'Monthly, stop whenever you like'],
    one: ['One learner with one mentor', 'Pace set by the learner', 'Hours chosen by the family']
  },

  faq: {
    eyebrow: 'Huancavelica asks',
    h2: 'Online coding and AI classes in Huancavelica: questions families ask',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. We teach in English only, in live online lessons. Our mentors keep their English slow and plain, follow the learner\'s speed and accent, and when a learner replies in Spanish they offer the English phrase to repeat; the lesson itself stays in English.' },
      { q: 'Can my child use the tablet from school?', a: 'For block coding with a younger child, often yes, if the school allows it at home. For typed programming from about age ten, a laptop or desktop works far better, because the learner types for most of the lesson.' },
      { q: 'We have no computer at home. Should we wait?', a: 'Tell us in the free class. If there is truly no computer available, even a shared one, we will say honestly that it is better to wait than to pay for lessons that cannot work.' },
      { q: 'Do you teach learners in Lircay, Pampas or Acobamba?', a: 'Yes. The classes are online, so every province is the same to us, provided the connection is steady at the hour you choose.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India runs 10 hours 30 minutes ahead of Huancavelica in every season; a lesson at 08:30 in Huancavelica starts at 19:00 in India.' },
      { q: 'Is English a problem for a beginner?', a: 'It can be at first. The free class includes a short task in simple English so the mentor can judge. Teenagers and adults usually manage; young children often do better one to one.' },
      { q: 'Do Huancavelica schools teach coding?', a: 'Not as a subject of its own. The national curriculum wants digital skills woven through all areas, and no hour of the standard secundaria week is labelled programming.' },
      { q: 'Is this useful for university students at the UNH?', a: 'Often. Python, data analysis and databases support degrees in engineering, economics and education, and much technical reading is in English already. We teach alongside your degree; the university decides your grades.' },
      { q: 'Do you teach AI?', a: 'Yes. Older learners build and test small models and learn why they fail. Children explore the ideas in games and sorting tasks; nobody under 13 is asked to open a grown-up chatbot account.' },
      { q: 'How do we pay?', a: 'A card payment once a month, priced in US dollars, which your bank changes into soles. If you browse from India the page shows rupees. Nothing is charged for the trial.' },
      { q: 'Is there a certificate?', a: 'Where a course has one, it is a completion certificate issued by us. Schools, universities and Peruvian authorities do not issue or recognise it as a qualification; it simply shows the work done.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related guides',
    lede: 'Pages that families and learners in Huancavelica often open next.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru page, grouped, plus the school system.' },
      { href: '/clases-de-programacion-en-ingles-peru', label: 'Clases de programación en inglés', p: 'Written in Spanish for parents.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Block coding for the youngest learners.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'How teens learn what is inside AI.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Starting later, with a mentor.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live lesson, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free class from Huancavelica',
    lede: 'During the trial your learner tackles a short puzzle and makes a first working program on the device they would really use. Then the mentor tells you straight whether to begin now or wait, and recommends a course and a format.',
    readFirst: 'To look around first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a lesson and <a class="ag-inline-link" href="/courses">our courses</a> lists every syllabus.',
    note: 'Lessons happen live on video, in English, with mentors who work from India. For a fast answer, write to us on WhatsApp, in English if you can.',
    formNote: 'Free, without a card, and with no obligation afterwards.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Also useful', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Somewhere between 16.7 and 83.9'
  },

  personalityCss: `
.ag-root.ag-cbg .ag-hero h1 { letter-spacing: -0.01em; max-width: 20ch; }
.ag-root.ag-cbg .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-cbg .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-cbg .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cbg .ag-code-head b { letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadros N° 1 and 3), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017; INEI Compendio Estadístico Perú 2026 (cuadros 11.5, 11.6, 11.13, 5.16, 5.22, 5.53, 5.54, 5.75); Gobierno Regional de Huancavelica notes on gob.pe (26 August 2026, 27 October 2026); Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, ONEM 2026; UTEC OPI; EF EPI 2025; tz database. Data: Universidad Nacional de Huancavelica, Lista de Ingresantes del año 2025 I y II, ODC-By.',
    localProject: 'How many new university students come from Huancavelica itself? An original Python project on the UNH list of 2025 entrants (ODC-By): Version 1 sums TOTAL_INGRESANTES and reports 26.8 per cent (538 of 2,010), treating "NO INDICA" as elsewhere; Version 2 reports a range per level: undergraduates 89.6 to 93.7 per cent, postgraduates 16.7 to 83.9, second speciality 1.4 to 89.7. Lesson family: missing values give bounds.',
    requiredMentions: ['ingresantes-unh-2025.csv', 'New students in 2025: 2010', 'between 89.6 and 93.7 %', 'Somewhere between 16.7 and 83.9', '372,155', 'entregó 11 mil 907 tabletas electrónicas', 'en beneficio de 412 localidades de las siete provincias', 'Households owning a computer', 'Lycée Le Chesnoy Amilly'],
    sources: [
      { claim: 'Department, province and district populations of Huancavelica, 2025, and age bands.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Huancavelica city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Populated centres and altitude, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto09.xlsx' },
      { claim: 'Computers, internet, internet use, ECE 2025 results, enrolment and teachers in Huancavelica and Peru.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'Tablets delivered to eight UGELs and the cumulative total.', url: 'https://www.gob.pe/institucion/regionhuancavelica/noticias/1434939-gore-huancavelica-entrega-11-mil-907-tabletas-para-estudiantes-de-primaria-y-secundaria-de-la-region' },
      { claim: 'Broadband extension to 412 localities and the telecommunications forum.', url: 'https://www.gob.pe/institucion/regionhuancavelica/noticias/1441783-gobiernos-regionales-identifican-principales-barreras-para-cerrar-brecha-digital-en-las-zonas-rurales' },
      { claim: 'Exchange agreement with the Lycée Le Chesnoy Amilly.', url: 'https://www.gob.pe/institucion/regionhuancavelica/noticias/1464572-huancavelica-fortalecera-formacion-tecnica-y-tecnologica-en-institutos' },
      { claim: 'UNH list of 2025 entrants, ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/lista-de-ingresantes-del-a%C3%B1o-2025-i-y-ii-la-unh' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative ages at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025 score for Peru and the list of scored regions.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without daylight saving.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A single share of local entrants: the file has 1,226 entrants of unknown origin, so only ranges are printed.',
      'Which cut-off date is right for the 228 rows dated 6 September 2025: not resolved, described as published.',
      'Adding the five UGEL tablet figures in the note to check the 11,907 total: not done; the note covers eight UGELs and we print its own totals.',
      'A regional English level: EF does not score Huancavelica, so none is given.',
      'Comparing the 2017 city figure with 2025 district figures: refused.',
      'Any political names from the regional notes: left out.',
      'Any connection with GORE Huancavelica, the DRE, the UNH, MINEDU, UTEC or any school: none.',
      'Spanish-language or Quechua-language teaching: every class is in English.'
    ]
  }
};
