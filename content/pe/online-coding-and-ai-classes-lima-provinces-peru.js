// SHIP: market (region) | Lima provinces (Región Lima, capital Huacho): not Lima city, nine provinces, live classes in English | first seen is not first enrolled: a file that starts in 2020 hides everyone already studying
'use strict';
// Online coding and AI classes, Lima provinces (Región Lima), Peru (ag- region page, Peru cluster row PE173; alloc: regions, copr, #664600).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any hour;
// fees in USD only, through the template's data-price anchors.
// Spine: Región Lima is the ring of nine provinces outside Lima Metropolitana, governed from Huacho. Families in Huaral,
// Cañete or Barranca are counted separately from the capital, live hours from Lima's academies, and had home internet
// jump in 2025 (INEI ENAHO). The page keeps the two Limas apart and teaches with UNJFSC enrolment data from Huacho.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-lima-provinces-peru/,
// national school facts from pe/facts-school/src; every quote string-matched in the raw file):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro 1: REGIÓN LIMA 1014908 (población total, 15 Sept 2025);
//    provinces BARRANCA 153257, CAJATAMBO 6396, CANTA 14580, CAÑETE 270009, HUARAL 213502, HUAROCHIRÍ 61717, HUAURA
//    261941, OYÓN 15189, YAUYOS 18317. LIMA METROPOLITANA 10141775 (separate unit). Never summed.
//  - Cuadro 3 (censada by age): REGIÓN LIMA 3/ 970550; De 6 a 11 años 95725; De 12 a 17 años 98865.
//  - Capital: gob.pe/regionlima (gobpe-regionlima.html): "Sede Central: Agua Dulce - Av. Circunvalación S/N - Huacho - Huaura".
//  - INEI Lib1541 dpto15b.xlsx (single centros poblados, 2017): HUARAL 79455, HUACHO 61100, BARRANCA 58749, CHANCAY 35466,
//    SAN VICENTE DE CAÑETE 31219, HUAURA 24668, MALA 22325.
//  - INEI Compendio Estadístico Perú 2026 tomo 1, footnote "2/ Región Lima, comprende las provincias de Barranca, Cajatambo,
//    Canta, Cañete, Huaral, Huarochirí, Huaura, Oyón y Yauyos." Cuadro 11.5 Región Lima "26,5 ... 26,7 29,6 29,4 32,2",
//    Lima Metropolitana "... 47,3"; cuadro 11.6 Región Lima "... 51,0 52,5 50,4 58,8", Lima Metropolitana "... 76,5"; cuadro
//    11.13 Región Lima "... 75,7 79,9 82,5 83,8", Lima Metropolitana "... 89,0"; Total 33,9 / 56,8 / 81,1. Cuadros 5.16,
//    5.17, 5.22, 5.23 (thousands, 2025): primaria pública 88,7, privada 34,6; secundaria pública 73,3, privada 25,8.
//  - DRELP (regionlima-drelp) on gob.pe: 3 November 2026, I Congreso Regional de Innovación Educativa 2026 "reunió a más de
//    1060 docentes de las nueve provincias"; Lima Provincias went from place 17 in 2023 to fourth nationally in promoting
//    educational innovation in 2026; 140 teachers graduated from a diploma in emerging technologies applied to education;
//    "certificación de 1,745 docentes" (project design diploma). 6 November 2026: winners of the "III Concurso Regional
//    CETPRO innova y emprende 2026". (Some strings in that page use mathematical bold letters; we quote only plain ones.)
//  - UNJFSC institutional page on gob.pe (gob-unjfsc.html): addresses in Huacho ("Calle Colón 455, Huacho"); "cuenta con 13
//    Facultades y 38 Programas".
//  - Ley 28044, MINEDU normative ages, CNEB competency 28 and JER hours, Fábrica de Programadores, ONEM 2026 (FACTS 5, 6, 13,
//    14, 32, 33, 39, 45, 99, 105). Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30.
//  - Data: UNJFSC, "Matriculados de los años 2020 al 2025 a la UNJFSC", datosabiertos.gob.pe, licence CC-BY
//    (opendefinition.org/licenses/cc-by), created 23 December 2025, modified 30 December 2025. File "Matriculados de los
//    años 2020 al 2025 a la UNJFSC_0.csv" (saved as matriculados_unjfsc_2020_2025.csv), 19,703,141 bytes, 136,218 rows,
//    semicolon-separated, FECHA_CORTE 14/10/2025, student IDs hashed (UUID), 12 semesters 2020-1 to 2025-2, 38 ESCUELA values.
// Our own calculations (scratchpad pe/r3/copr/v1.py, v2.py, python3 -I):
//  v1 prints: Different students: 25700 / New in 2020-1 10589 / New in 2020-2 1198 / New in 2021-1 2374 / New in 2025-1 1526
//  v2 prints: 2020-1 first year: 586 | already further on: 10003 / 2020-2 first year: 937 | already further on: 261 /
//    2021-1 first year: 2086 | already further on: 288 / 2025-1 first year: 1460 | already further on: 66
//  rows per semester: 2020-1 10589, 2020-2 10329, 2021-1 11225, 2021-2 12382, 2022-1 12006, 2022-2 8648, 2023-1 11406,
//    2023-2 11556, 2024-1 11639, 2024-2 11663, 2025-1 12383, 2025-2 12392 (one row per student per semester).
// Lesson family: left censoring. A dataset that starts on a given date cannot tell "new" from "already there"; first seen
// is not first enrolled, so use a second column (the cycle) to separate real starters from people the window cut into.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'from collections import Counter',
  '',
  'first_seen = {}',
  'with open("matriculados_unjfsc_2020_2025.csv", newline="", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        term = row["ANIO"] + "-" + row["SEMESTRE"]',
  '        if row["UUID"] not in first_seen or term < first_seen[row["UUID"]]:',
  '            first_seen[row["UUID"]] = term',
  '',
  'new = Counter(first_seen.values())',
  'print("Different students:", len(first_seen))',
  'for term in ["2020-1", "2020-2", "2021-1", "2025-1"]:',
  '    print("New in", term, new[term])'
].join('\n');

const V2 = [
  'import csv',
  'from collections import Counter',
  '',
  'first = {}',
  'with open("matriculados_unjfsc_2020_2025.csv", newline="", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        term = row["ANIO"] + "-" + row["SEMESTRE"]',
  '        if row["UUID"] not in first or term < first[row["UUID"]][0]:',
  '            first[row["UUID"]] = (term, row["CICLO"])',
  '',
  'started_here, already_studying = Counter(), Counter()',
  'for term, cycle in first.values():',
  '    if cycle == "01":',
  '        started_here[term] += 1',
  '    else:',
  '        already_studying[term] += 1',
  '',
  'for term in ["2020-1", "2020-2", "2021-1", "2025-1"]:',
  '    print(term, "first year:", started_here[term], "| already further on:", already_studying[term])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Lima provinces (Región Lima)' },
  slug: 'online-coding-and-ai-classes-lima-provinces-peru',
  code: 'copr',
  accent: '#664600',
  accentRationale: 'Lima provinces: a dark sugar-cane brown #664600, for the cane and cotton valleys of Huaura, Huaral and Cañete, allocated to this row; contrast 8.12 on #FBF8F2, 7.63 on #F5F1E8 and 6.98 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Lima provinces (Región Lima), Peru',
  title: 'Online Coding and AI Classes in the Lima Provinces, Peru',
  description: 'Live online coding and AI classes in English for Huacho, Huaral, Cañete, Barranca and the rest of Región Lima: census, home internet and a university data project.',
  ogDescription: 'Coding and AI for children, teenagers and adults in the nine provinces of Región Lima, outside Lima Metropolitana, taught live online in English at hours the family chooses: census figures, the 2025 jump in home internet, school facts and a Python project on UNJFSC enrolment data from Huacho.',
  twitterDescription: 'Región Lima, live online coding in English: nine provinces, home internet, school facts and a Huacho data project.',
  pageName: 'Online Coding and AI Classes in the Lima Provinces',
  webPageDescription: 'A guide for families and adult learners in Región Lima (the provinces outside Lima Metropolitana) to live online coding and AI classes taught in English, built from INEI census and household survey figures, MINEDU school census figures, DRELP notes from November 2026 and an original Python project on UNJFSC enrolment data (CC-BY).',
  courseDescription: 'Live online coding and AI classes in English for learners in Región Lima, Peru: Scratch for children from 6, Java and Python for teenagers, Python for university students and adults, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Lima provinces',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#two-limas', label: 'Two Limas' },
    { href: '#provinces', label: 'Provinces' },
    { href: '#homes', label: 'At home' },
    { href: '#enrolment', label: 'Data project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Región Lima &middot; Live online, in English &middot; Ages 6 to adult',
  h1: 'Online coding and AI classes in the Lima provinces',
  lede: 'Huacho, Huaral, Chancay, Barranca, Cañete, Mala and the valleys up towards the Andes belong to Región Lima, not to the capital. Families here are counted separately, governed from Huacho and often far from Lima\'s academies. This page sets out what makes the region its own place, how quickly its homes came online in 2025, where school stops, and a data lesson built on a Huacho university\'s enrolment file.',
  secondaryCta: { href: '#enrolment', label: 'See the data project' },
  wa: 'Hello Modern Age Coders, we live in Región Lima (outside Lima city) and would like live coding classes in English. Can we try a free class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ learners worldwide &middot; mentors who ask the learner to explain, not just to finish',
  spec: [
    ['Who', 'Children from 6, teenagers, adults'],
    ['Where', 'Huaura, Huaral, Cañete, Barranca and more'],
    ['Teaching language', 'English, clear and steady'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Schedule', 'Days and hours you pick'],
    ['Travel', 'None: classes come to your home']
  ],
  capsuleQ: 'In brief',
  capsule: 'Yes. Learners across Región Lima can join Modern Age Coders for coding and AI lessons that are live, online and in English. That covers all nine provinces outside Lima Metropolitana, from the capital Huacho to Huaral, Cañete, Barranca and Huarochirí. Children begin with Scratch at six and move to Python at around nine or ten; teenagers continue with Python, Java, data or apps; adults and university students take Python, databases or AI tools. Families choose a class of fifteen to twenty learners or private lessons, pick the hour themselves, and pay nothing for the first session. Nobody has to travel to Lima, and learners are taught to reason, not to copy.',

  picks: {
    eyebrow: 'First courses in the provinces',
    h2: 'Three courses Región Lima learners often start with',
    lede: 'Scratch for younger children, Java for teenagers thinking about engineering or computing degrees, and a full Python course for students and adults.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'RLI / 01', title: 'Scratch Programming', note: 'Ages 6 to 11. A full Scratch path from a first moving character to games with levels, scores and clever bugs to find, all in clear, simple English.' },
      { course: 'java-programming-masterclass-for-teens', code: 'RLI / 02', title: 'Java for Teens', note: 'Ages 13 to 18. Types, classes and objects, taught slowly enough to understand, for secundaria students heading towards engineering or computing at university.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'RLI / 03', title: 'Python from Zero to Advanced', note: 'From 18. University students in Huacho or Cañete and working adults learn Python properly, up to files, data and small automation projects.' }
    ]
  },

  sections: [
    {
      id: 'two-limas',
      eyebrow: 'Not the capital',
      h2: 'Is Región Lima the same as Lima city?',
      lede: 'No. INEI counts Lima Metropolitana, the 43 districts of the province of Lima, as one unit and Región Lima as another. Región Lima is made of the nine provinces of Barranca, Cajatambo, Canta, Cañete, Huaral, Huarochirí, Huaura, Oyón and Yauyos, and its regional government sits in Huacho.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'The two Limas side by side, 2025 (population) and 2025 household survey (per cent)', head: ['Measure', 'Región Lima', 'Lima Metropolitana'], rows: [
          ['People, 2025 census', '1,014,908', '10,141,775'],
          ['Homes with a computer', '32.2', '47.3'],
          ['Homes with an internet service', '58.8', '76.5'],
          ['People aged 6 and over online', '83.8', '89.0']
        ] },
        { kind: 'source', html: 'People: the 2025 census tabulation of demographic indicators (INEI, table 1), census day 15 September 2025. Homes and internet users: the ENAHO survey as reprinted in INEI\'s 2026 compendium (cuadros 11.5, 11.6, 11.13), whose footnote defines Región Lima as the nine provinces listed above. The two columns are separate units and are never combined here.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the difference matters',
          left: [
            'Search for coding classes "in Lima" and almost everything you find is in the capital: Miraflores, San Isidro, Surco. A family in Huaral or Mala is a long road trip from any of it.',
            'The household survey shows the gap too. Homes in Región Lima are less likely than homes in the capital to have a computer or an internet service, though the gap is narrowing.'
          ],
          rightH3: 'Where the regional government is',
          right: [
            'The Gobierno Regional de Lima lists its head office in Agua Dulce, Huacho, in the province of Huaura. Huacho is therefore the capital of Región Lima, even though it is a much smaller town than some neighbours on the census lists.',
            'Families inside Lima Metropolitana have their own page with us: <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>. This page is for everyone outside it.'
          ] }
      ]
    },
    {
      id: 'provinces',
      eyebrow: 'Nine provinces',
      h2: 'How many people live in each province of Región Lima?',
      lede: 'The 2025 census found 1,014,908 people in Región Lima. Cañete and Huaura are the largest provinces; Cajatambo, in the highlands, is the smallest.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Región Lima by province, total population, 2025 census', head: ['Province', 'People, 2025'], rows: [
          ['Cañete', '270,009'],
          ['Huaura (Huacho)', '261,941'],
          ['Huaral', '213,502'],
          ['Barranca', '153,257'],
          ['Huarochirí', '61,717'],
          ['Yauyos', '18,317'],
          ['Oyón', '15,189'],
          ['Canta', '14,580'],
          ['Cajatambo', '6,396']
        ] },
        { kind: 'source', html: 'Province totals from the same 2025 census table, which adds INEI\'s estimate of uncounted residents to the people counted, using the provincial limits valid in July 2026. Lines reproduced unchanged.' },
        { kind: 'two', mt: true,
          leftH3: 'The towns',
          left: [
            'INEI has not yet published 2025 figures for towns, so we use its 2017 directory of populated centres, which counts each centre separately: Huaral 79,455, Huacho 61,100, Barranca 58,749, Chancay 35,466, San Vicente de Cañete 31,219, Huaura 24,668 and Mala 22,325.',
            'A town that runs on into the next centre is undercounted by this method, and we do not try to repair that by adding neighbours together.'
          ],
          rightH3: 'Children and teenagers',
          right: [
            'Of the 970,550 people the 2025 census counted in person in Región Lima, 95,725 were aged 6 to 11 and 98,865 were 12 to 17, the ages of primaria and secundaria.',
            'Many of them live in valleys and coastal towns where a specialised coding teacher is simply not available. Online, the town is irrelevant; only the connection and a keyboard matter.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'School',
      h2: 'Do schools in Región Lima teach programming?',
      lede: 'Not as a timetabled subject. Schools in the nine provinces follow the national curriculum, the CNEB, which expects technology to be woven into every area rather than taught on its own.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Enrolment in Región Lima, 2025, thousands of pupils', head: ['Level', 'Public', 'Private'], rows: [
          ['Primaria', '88.7', '34.6'],
          ['Secundaria', '73.3', '25.8']
        ] },
        { kind: 'source', html: 'MINEDU school-census numbers, reprinted by INEI in its 2026 compendium (enrolment cuadros for primaria and secundaria by type of management). We changed the decimal mark only.' },
        { kind: 'two', mt: true,
          leftH3: 'The national rules',
          left: [
            'Law 28044 fixes six years of primaria and five of secundaria, and MINEDU assigns grades by age on 31 March. The CNEB\'s single technology competency, number 28, is about working in virtual environments and is shared across all areas.',
            'Count the 35 weekly hours of a regular secundaria timetable and you will find Matemática and work education, but no slot that carries the word programming.'
          ],
          rightH3: 'What the DRELP reported in November 2026',
          right: [
            'The regional education office, the DRELP, held its first regional congress on educational innovation in 2026, gathering more than 1,060 teachers from all nine provinces. It reported that Lima Provincias moved from 17th place in 2023 to fourth in the country in promoting educational innovation in 2026.',
            'At the same event 140 teachers graduated from a diploma on emerging technologies applied to education, and 1,745 teachers were certified in a diploma on designing innovation projects. That is training for teachers; it does not add a coding class to the pupils\' week.'
          ] },
        { kind: 'p', mt: true, html: 'Technical and vocational centres in the region are active too: in November 2026 the DRELP announced the winners of its third regional CETPRO contest on innovation and enterprise. The ministry\'s own coding scheme, Fábrica de Programadores, chose its first thousand Python pupils (July 2025) from Lima Norte, which lies inside the capital rather than the provinces. A teenager in Barranca or Huacho who wants serious programming still has to look beyond school.' }
      ]
    },
    {
      id: 'homes',
      tint: 'tint',
      eyebrow: 'Ready at home',
      h2: 'Do homes in Región Lima have what an online class needs?',
      lede: 'More of them every year. The household survey shows a sharp rise in home internet in 2025, while computers are still in only about a third of homes.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Región Lima households and internet users, 2022 to 2025 (per cent)', head: ['Indicator', '2022', '2024', '2025', 'Peru 2025'], rows: [
          ['Homes with at least one computer', '26.7', '29.4', '32.2', '33.9'],
          ['Homes with an internet service', '51.0', '50.4', '58.8', '56.8'],
          ['People aged 6 and over using the internet', '75.7', '82.5', '83.8', '81.1']
        ] },
        { kind: 'source', html: 'ENAHO household survey, from INEI\'s yearly series 2015 to 2025 in the 2026 compendium; we chose which years to show and wrote decimals with a point.' },
        { kind: 'two', mt: true,
          leftH3: 'A jump in one year',
          left: [
            'Home internet in Región Lima barely moved between 2022 and 2024, then rose from 50.4 to 58.8 per cent of homes in 2025, putting the region slightly above the national figure. Internet use by people aged six and over reached 83.8 per cent.',
            'Computer ownership grew more slowly, to 32.2 per cent of homes. For a coding class the computer is usually the harder part to arrange.'
          ],
          rightH3: 'What we recommend',
          right: [
            'Once a learner is about nine, a real keyboard on a laptop or desktop, because coding means typing and testing. Younger children doing blocks can manage on a tablet.',
            'The free first class includes a check of screen sharing, sound and connection, so you know before paying whether your set-up works.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language',
      h2: 'Are classes taught in English or in Spanish?',
      lede: 'In English, every time. Our teachers work from India on live video and adapt to the learner\'s level of English without switching to Spanish.',
      body: [
        { kind: 'two',
          leftH3: 'What to expect',
          left: [
            'Peru scored 519 in EF\'s 2025 English index, enough for 52nd place out of 123 and a "moderate" rating. We do not use EF\'s "Lima" figure for this region, because it is not clear that it separates the provinces from the capital.',
            'In practice, many learners in the provinces are still building their English, so mentors keep sentences short and repeat key words.'
          ],
          rightH3: 'English through code',
          right: [
            'Python and Java keywords are English words. Learners say them, type them and read them in error messages every lesson, which builds vocabulary quietly.',
            'Answers in Spanish are welcome; the mentor gives back the English phrase and carries on. Confidence usually grows within a few weeks.'
          ] }
      ]
    },
    {
      id: 'enrolment',
      eyebrow: 'A Huacho data project',
      h2: 'How many new students start at a Huacho university each semester?',
      lede: 'The Universidad Nacional José Faustino Sánchez Carrión (UNJFSC), whose offices listed on gob.pe are in Huacho, publishes six years of enrolment records as open data. Counting new students looks easy. The file\'s start date makes it a trap.',
      body: [
        { kind: 'two',
          leftH3: 'The dataset',
          left: [
            'The UNJFSC publishes "Matriculados de los años 2020 al 2025 a la UNJFSC" on datosabiertos.gob.pe under a Creative Commons Attribution licence (CC-BY), which permits reuse, commercial too, with credit. It was created on 23 December 2025. The university\'s gob.pe page says it has 13 faculties and 38 programmes, and the file has 38 programme names.',
            'Our copy, matriculados_unjfsc_2020_2025.csv, has 136,218 rows: one per student per semester, from 2020-1 to 2025-2. Students appear only as a scrambled code, so nobody can be identified, and the CICLO column says which cycle of the degree each student was in that semester.'
          ],
          rightH3: 'The question',
          right: [
            'How many new students joined the university in each semester? The obvious approach: for every student code, find the first semester it appears in, and call that student new in that semester.',
            'Before running anything, notice that 136,218 rows does not mean 136,218 students. A student enrolled for six years appears up to twelve times. Adding up the semesters would count the same people again and again.'
          ] },
        { kind: 'code', label: 'Version 1: the first semester each student appears', lang: 'Python', code: V1, note: 'It prints: <code>Different students: 25700</code>, then <code>New in 2020-1 10589</code>, <code>New in 2020-2 1198</code>, <code>New in 2021-1 2374</code> and <code>New in 2025-1 1526</code>.' },
        { kind: 'p', mt: true, html: 'The 25,700 different codes is a sound figure. The 10,589 "new" students in 2020-1 is not: that is every single student enrolled that semester, because the file begins there. Someone in the fifth year of a degree in 2020 also appears for the first time in 2020-1, simply because the window opens then. Statisticians call this left censoring: the data cannot see what happened before its first date.' },
        { kind: 'p', html: 'Version 2 uses the CICLO column as a second witness. A student whose first appearance is in cycle 01 really did start then. A student who first appears in cycle 05 was already studying, and the window just cut into their degree.' },
        { kind: 'code', label: 'Version 2: separate real starters from students already on course', lang: 'Python', code: V2, note: 'It prints: <code>2020-1 first year: 586 | already further on: 10003</code>, <code>2020-2 first year: 937 | already further on: 261</code>, <code>2021-1 first year: 2086 | already further on: 288</code> and <code>2025-1 first year: 1460 | already further on: 66</code>.' },
        { kind: 'p', mt: true, html: 'Now the picture changes. Only 586 of the 10,589 students first seen in 2020-1 were in their first cycle. The rest were already on course. By 2025-1, almost every first appearance really is a beginner: 1,460 starters against 66 others. The few "already further on" in later years are worth a question of their own, perhaps transfers or returning students, and we do not guess.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'UNJFSC enrolment rows by semester, 2020 to 2025 (our count; one row per student per semester)', head: ['Semester', 'Students enrolled'], rows: [
          ['2020-1', '10,589'], ['2020-2', '10,329'], ['2021-1', '11,225'], ['2021-2', '12,382'],
          ['2022-1', '12,006'], ['2022-2', '8,648'], ['2023-1', '11,406'], ['2023-2', '11,556'],
          ['2024-1', '11,639'], ['2024-2', '11,663'], ['2025-1', '12,383'], ['2025-2', '12,392']
        ] },
        { kind: 'source', html: 'Data credit: Universidad Nacional José Faustino Sánchez Carrión, enrolment 2020 to 2025, reused under CC-BY; file cut-off date 14 October 2025. Counts are ours. Each semester is a separate headcount: adding the twelve rows would count the same students many times over.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, with a photo album.</strong> If the album starts on your sixth birthday, does that mean you were born that day? What is missing from the album?',
          '<strong>Block coding, around 8 to 10.</strong> Keep a list of names seen each week. Write a loop that marks a name "new" the first time it appears, then talk about the first week.',
          '<strong>Typing Python, about 10 to 12.</strong> Try Version 1 and explain in two sentences why 10,589 cannot be the number of new students in 2020-1.',
          '<strong>Ages 13 and over.</strong> 2022-2 has far fewer rows than the semesters around it. Write down three possible reasons, and what extra data would tell them apart.',
          '<strong>Going further.</strong> For students who started in cycle 01 in 2021-1, count how many still appear in 2025-1. State clearly why students who started in 2020-1 or before cannot be treated the same way.'
        ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Ages',
      h2: 'Which course suits each age in the Lima provinces?',
      lede: 'Pick by age first, then by interest. School grades follow MINEDU\'s 31 March age rule.',
      body: [
        { kind: 'table', numCols: [], caption: 'Typical starting courses for Región Lima learners (our course ages)', head: ['Age', 'School year, usually', 'First course', 'What they make'], rows: [
          ['6 to 8', '1° to 3° de primaria', 'Scratch programming', 'Animations and simple games'],
          ['8 to 11', '3° to 6° de primaria', 'Scratch, then Minecraft or Roblox coding', 'Worlds with rules and scores'],
          ['Upper primaria, confident typists', 'Usually 4° to 6° grade', 'Python and AI for Kids', 'Quizzes and number games in typed code'],
          ['Teenagers in any secundaria year', 'Ages 13 to 17', 'Python first, Java after', 'Bigger programs, first datasets'],
          ['16 to 18, thinking of university', '4° and 5° de secundaria', 'Java for Teens or data science', 'Projects to show admissions tutors'],
          ['18 and over', 'University or work', 'Python from Zero to Advanced', 'Automation, data, small web tools']
        ] },
        { kind: 'source', html: 'Course ages are ours; school years use MINEDU\'s normative age on 31 March, so birthdays after that date can mean one grade lower.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Children', p: 'Lively, short lessons with children of a similar age, built around making something that moves or responds.' },
          { h3: 'Secundaria', p: 'Real programming languages taught step by step, with olympiad-style puzzles for students who want a challenge.' },
          { h3: 'University and adults', p: 'Students at universities in Huacho, Cañete or Barranca, and adults at work, learn the tools their studies and jobs increasingly expect, in English.' }
        ] },
        { kind: 'p', mt: true, html: 'University students can read more on <a class="ag-inline-link" href="/coding-courses-for-university-students-peru">coding courses for university students in Peru</a>, and anyone weighing up Java should see our <a class="ag-inline-link" href="/java-course-peru">Java course page for Peru</a>.' }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Olympiads',
      h2: 'Can secundaria students in Región Lima take part in the ONEM?',
      lede: 'Yes, through their colegio, which runs the first stage. Modern Age Coders has no tie to MINEDU, the DRELP or the ONEM.',
      body: [
        { kind: 'two',
          leftH3: 'The ONEM in 2026',
          left: [
            'Colegios ran the first ONEM round of 2026 on the same Wednesday, 8 July 2026, splitting pupils into a younger, a middle and a final-year level. El Peruano reported more than 1.7 million pupils involved.',
            'We never reuse the organiser\'s problems. We build the habits olympiads reward with problems we write.'
          ],
          rightH3: 'A practice problem of ours',
          right: [
            'A club records members only from January. In January it lists 40 members, 5 of them joined that month. In February it lists 44, with 6 joining. How many members left in February, and how many of January\'s 40 joined before January? (Ours. Answer: 2 left, because 40 plus 6 minus 44 is 2; and 35 had joined before January.)',
            'It is the enrolment project in miniature: what a list starting on a date can and cannot tell you.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Time',
      h2: 'What time would classes be in Huacho or Cañete?',
      lede: 'Whenever your family decides. The provinces share Peru\'s single time zone, and your mentor builds the working day around the slot you book.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time and India time, worked examples only (not a schedule)', head: ['Huacho clock', 'Mentor\'s clock (India)', 'Calendar day there'], rows: [
          ['05:30', '16:00', 'Unchanged'],
          ['07:30', '18:00', 'Unchanged'],
          ['12:30', '23:00', 'Unchanged'],
          ['14:00', '00:30', 'One day on'],
          ['21:00', '07:30', 'One day on']
        ] },
        { kind: 'source', html: 'In the tz database, America/Lima sits five hours behind UTC and has observed no summer time since 1994; INACAL maintains Peru\'s official hour. India is UTC plus five and a half hours, giving a constant gap of ten and a half hours.' },
        { kind: 'p', mt: true, html: 'A slot booked in summer stays at the same local time all year. Families in the provinces often like an early-morning class, before school or work, which is late afternoon or evening for the mentor.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'How a learner in the Lima provinces progresses',
    lede: 'Our own stages, used with every learner from six to retirement. They help mentors place newcomers and help families see what has changed.',
    table: { caption: 'From first steps to reading a dataset fairly (ours)', head: ['Stage', 'Usually by', 'The learner can'], rows: [
      ['1. Order', 'Age 6 or 7', 'Give instructions in the right order'],
      ['2. Repeat', 'Age 7 to 9', 'Use loops instead of copies'],
      ['3. Remember', 'Age 8 to 10', 'Keep values in variables and dictionaries'],
      ['4. Type', 'Around 9 to 12', 'Write Python that decides for itself'],
      ['5. Count fairly', 'Age 12 to adult', 'Tell rows apart from people'],
      ['6. Mind the window', 'Age 14 to adult', 'Ask what a dataset could not see before it began']
    ] },
    left: { h3: 'For parents', ps: [
      'The enrolment project lives in stages five and six. It teaches the difference between a number that is easy to compute and a number that is true.',
      'Progress is reported as work built and explained.'
    ] },
    right: { h3: 'For learners', ps: [
      'Ask when your data starts. Everything before that date is invisible.',
      'One person, many rows: count codes, not lines.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Región Lima learners',
    lede: 'Arranged by age. Each is taught live in English by a regular mentor, either in a group of fifteen to twenty or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 15', courses: [
        { code: 'RLI / KIDS / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Lua scripting for children who love building games.' },
        { code: 'RLI / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'From blocks to typed code, with simple AI ideas.' },
        { code: 'RLI / KIDS / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored with short programs.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'RLI / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The complete Python course for secundaria.' },
        { code: 'RLI / TEEN / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'Data structures and algorithms for teenagers who like puzzles.' },
        { code: 'RLI / TEEN / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Web development for teens', blurb: 'Front end and back end, one real site at a time.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 18 and over', courses: [
        { code: 'RLI / ADULT / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java for university', blurb: 'Java to the depth a computing degree expects.' },
        { code: 'RLI / ADULT / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL databases', blurb: 'Tables, queries and design for real records.' },
        { code: 'RLI / ADULT / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The core of technical interviews and computing courses.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live online classes work across Región Lima',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before school or work', l: 'Early Peru mornings are evening in India, a popular choice in the provinces.' },
      { time: 'Afternoons and evenings', l: 'Available too; the mentor schedules around you.' },
      { time: 'Private plan', l: 'One-to-one lessons on days you agree.' }
    ],
    cells: [
      { h3: 'A steady mentor', p: 'The same teacher who knows the learner\'s habits.' },
      { h3: 'Unhurried English', p: 'Repeated words, short sentences, time to think.' },
      { h3: 'Learner at the keys', p: 'Every program typed and run by the student.' },
      { h3: 'Groups by age', p: 'Children, teenagers and adults study separately.' },
      { h3: 'No travel', p: 'No bus to Lima, no long trip on the road.' },
      { h3: 'Group or one to one', p: 'Fifteen to twenty learners, or just one.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Students who keep at it build tools and games other people use. A selection is below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Parents and students in their own words, as posted on Google.',

  fees: {
    h2: 'Fees for learners in Región Lima',
    lede: 'Plans are billed monthly in US dollars. The charge goes on your card in dollars and your bank converts it to soles at its rate that day, so the statement can show a slightly different amount from the one here.',
    free: ['First class free', 'Set-up and sound checked', 'No card asked for'],
    group: ['Fifteen to twenty learners of similar age', 'One regular mentor', 'Two live classes weekly', 'Monthly, stop at any time'],
    one: ['A mentor for one learner', 'Projects built around the learner', 'Days and times you choose']
  },

  faq: {
    eyebrow: 'Questions from the provinces',
    h2: 'Coding and AI classes in Región Lima: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and in English only. Mentors speak clearly and patiently, adapt to each learner\'s pace and accent, and answer a Spanish reply with the English words.' },
      { q: 'Is this page for Lima city?', a: 'No. It is for Región Lima, the nine provinces outside Lima Metropolitana, governed from Huacho. Families in the capital have a separate page about English-medium coding classes in Lima.' },
      { q: 'Do we have to travel to Lima for classes?', a: 'Never. Classes are live over video, so a learner in Huaral, Barranca, Cañete or a highland village in Yauyos joins from home.' },
      { q: 'When are the classes held?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead, so 07:30 in Huacho is 18:00 for the mentor.' },
      { q: 'Do schools in Región Lima teach coding?', a: 'Not as a subject. The national curriculum spreads digital skills across all areas, and the regular secundaria timetable has no programming hours. The DRELP\'s 2026 work focused on training teachers in innovation and emerging technologies.' },
      { q: 'At what age can my child start?', a: 'From six with Scratch. Most children are ready for typed Python at nine or ten, and the free first class helps us judge readiness.' },
      { q: 'Can university students join?', a: 'Yes. Students at universities in the region often take Python, Java, databases or algorithms with us, in English, alongside a degree taught in Spanish.' },
      { q: 'Do you prepare pupils for the ONEM?', a: 'We train olympiad reasoning with problems we write, never official papers. Pupils enter through their colegio. We have no connection with MINEDU, the DRELP or the ONEM.' },
      { q: 'How are fees charged?', a: 'Monthly, by card, in US dollars, with your bank converting to soles. Someone viewing the page from India sees rupees. The first class is free and needs no card.' },
      { q: 'Do learners get a certificate?', a: 'Where a course includes one, learners receive a Modern Age Coders certificate of completion. It is our own record, not a Peruvian qualification, and it is not issued or endorsed by MINEDU, the DRELP or any school or university.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere here',
    h2: 'Further reading for Región Lima',
    lede: 'Pages that families and adult learners in the provinces find useful.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The national guide and index of Peru pages.' },
      { href: '/english-medium-coding-classes-lima', label: 'Coding classes in Lima city', p: 'For families inside Lima Metropolitana.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'AI projects for secundaria students.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Learning to program at any stage of life.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Each AI provider\'s age limits.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One of our lessons, from start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free class from anywhere in Región Lima',
    lede: 'The mentor sets a short puzzle, helps the learner write a first program and checks the computer and connection. You leave with a recommended course and group, based on how the learner thought and how easily they followed English.',
    readFirst: 'Want detail first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a full lesson, and the <a class="ag-inline-link" href="/courses">course catalogue</a> lists every syllabus.',
    note: 'Classes are taught live in English by mentors in India. For the quickest reply, message us on WhatsApp in English.',
    formNote: 'Free, no card, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'New, or just new to the file?'
  },

  personalityCss: `
.ag-root.ag-copr .ag-hero h1 { letter-spacing: -0.008em; max-width: 23ch; }
.ag-root.ag-copr .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-copr .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-copr .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-copr .ag-code-head b { letter-spacing: 0.05em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadros 1 and 3), Directorio de Centros Poblados 2017 (dpto15b); INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13 with the Región Lima footnote; MINEDU Censo Educativo cuadros 5.16, 5.17, 5.22, 5.23); Gobierno Regional de Lima head office (gob.pe/regionlima); Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, ONEM 2026; DRELP notes of 3 and 6 November 2026; UNJFSC gob.pe page; EF EPI 2025; tz database. Data: UNJFSC enrolment 2020 to 2025, CC-BY.',
    localProject: 'How many new students start at a Huacho university each semester? An original Python project on UNJFSC enrolment records 2020 to 2025 (CC-BY, 136,218 rows, 25,700 hashed student codes): Version 1 calls everyone first seen in 2020-1 new (10,589); Version 2 uses the CICLO column and finds only 586 first-cycle starters that semester against 10,003 already on course, while 2025-1 has 1,460 starters and 66 others. Lesson family: left censoring, first seen is not first enrolled.',
    requiredMentions: ['matriculados_unjfsc_2020_2025.csv', 'Different students: 25700', '2020-1 first year: 586 | already further on: 10003', '1,014,908', 'Agua Dulce, Huacho', '1,745 teachers', 'Homes with an internet service', 'New, or just new to the file?', 'left censoring'],
    sources: [
      { claim: 'Región Lima and Lima Metropolitana populations; province figures; censada counts by age, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Huaral, Huacho, Barranca, Chancay, San Vicente de Cañete, Huaura and Mala populated-centre figures, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto15b.xlsx' },
      { claim: 'Región Lima definition, household computer and internet shares, enrolment.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'Gobierno Regional de Lima head office in Huacho.', url: 'https://www.gob.pe/regionlima' },
      { claim: 'DRELP innovation congress, ranking and teacher diplomas, November 2026.', url: 'https://www.gob.pe/institucion/regionlima-drelp/noticias/1470124-lima-provincias-se-consolida-como-referente-nacional-en-innovacion-educativa' },
      { claim: 'DRELP regional CETPRO contest winners, November 2026.', url: 'https://www.gob.pe/institucion/regionlima-drelp/noticias/1471434-ganadores-del-iii-concurso-regional-cetpro-innova-y-emprende-2026' },
      { claim: 'UNJFSC offices in Huacho; 13 faculties and 38 programmes.', url: 'https://www.gob.pe/institucion/unjfsc/institucional' },
      { claim: 'UNJFSC enrolment dataset 2020 to 2025, CC-BY licence.', url: 'https://www.datosabiertos.gob.pe/dataset/matriculados-de-los-a%C3%B1os-2020-al-2025-la-unjfsc' },
      { claim: 'Peru time UTC-5 with no summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A combined "Lima department" figure built by adding Región Lima and Lima Metropolitana: never summed.',
      'EF EPI\'s "Lima" region score applied to the provinces: not used, because it may include the capital.',
      'A total of enrolled students made by adding semesters: refused; distinct codes used instead.',
      'Explanations for the 2022-2 dip or for late first appearances: left as questions, not guessed.',
      'Any link with the Gobierno Regional de Lima, the DRELP, the UNJFSC, MINEDU or the ONEM: none.',
      'Spanish-language teaching: every class is in English.',
      'Naming schools or CETPROs as sources of students: refused.'
    ]
  }
};
