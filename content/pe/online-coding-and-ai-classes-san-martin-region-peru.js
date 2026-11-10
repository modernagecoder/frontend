// SHIP: market (region) | San Martín: capital Moyobamba, biggest town Tarapoto, TIC classrooms coming, live classes in English | coordinates sanity check: a bounding box catches lost signs, swapped values and points at sea
'use strict';
// Online coding and AI classes, San Martín region, Peru (ag- region page, Peru cluster row PE174; alloc: regions, casm, #32591C).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any hour;
// fees in USD only, through the template's data-price anchors.
// Spine: San Martín is improving fast on the measures it publishes (ENLA 2023 to 2025, home internet 2015 to 2025) and in
// January 2026 prioritised a project to equip 944 classrooms with ICT. Classrooms with screens still need someone to teach
// code; the page offers that, and teaches with the region's own tourism inventory, where seven map points are misplaced.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-san-martin-region-peru/,
// national school facts from pe/facts-school/src; every quote string-matched in the raw file):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro 1: SAN MARTÍN 967938 (población total, 15 Sept 2025);
//    provinces MOYOBAMBA 138325, BELLAVISTA 70990, EL DORADO 43013, HUALLAGA 31313, LAMAS 97450, MARISCAL CÁCERES 76773,
//    PICOTA 44448, RIOJA 146055, SAN MARTÍN 231719, TOCACHE 87852. Capital Moyobamba (Compendio 2026 cuadro 1.8). Never summed.
//  - Cuadro 3 (censada by age): SAN MARTÍN 949469; De 6 a 11 años 107708; De 12 a 17 años 114383.
//  - INEI Lib1539 Cuadro 1.9 (places.tsv): Moyobamba 50,073 (2017, capital city). Lib1541 dpto22.xlsx single centros
//    poblados 2017: TARAPOTO 74804, LA BANDA 36201 (La Banda de Shilcayo), MORALES 30708, JUANJUI 28453, NUEVA CAJAMARCA
//    25812, RIOJA 22080, TOCACHE 15752. Tarapoto, Morales and La Banda are never added together.
//  - INEI Compendio Estadístico Perú 2026 tomo 1: cuadro 11.5 San Martín "16,0 19,0 19,1 21,4 22,6 18,1 20,6 21,1 21,0 23,4
//    25,5"; cuadro 11.6 "8,8 10,4 11,6 14,3 26,7 25,6 39,3 41,6 44,6 47,2 52,6"; cuadro 11.13 "22,6 30,2 32,4 35,5 41,6 49,5
//    63,3 63,4 70,0 74,5 78,4"; Total 2025: 33,9 / 56,8 / 81,1. Cuadros 5.16/5.17/5.22/5.23 (thousands, 2025): primaria
//    pública 116,0, privada 5,6; secundaria pública 96,1, privada 4,2.
//  - DRE San Martín on gob.pe, 19 May 2026: ENLA 4.° grado de primaria "pasó de 42.2% en 2023 a 58.8% en 2025" (lectura) and
//    "pasó de 31.6% en 2023 a 47.7% en 2025" (matemática); "aumentó de 6,073 a 9,167 escolares". 12 January 2026: the regional
//    council prioritised "Conectando y Educando", "944 aulas pedagógicas en 57 instituciones educativas", "37 distritos de
//    las 10 provincias", "más de 24 mil estudiantes", including "el mejoramiento e implementación de aulas para la
//    instalación de TIC, el equipamiento tecnológico, el desarrollo de plataformas digitales".
//  - EF EPI 2025 Peru page: data-state="san-martin" San Martín 460 (low); Peru 519, rank 52 of 123.
//  - Ley 28044, MINEDU normative ages, CNEB competency 28 and JER hours, Fábrica de Programadores, ONEM 2026 (FACTS 5, 6,
//    13, 14, 32, 33, 39, 45, 99, 105). Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30.
//  - Data: Gobierno Regional de San Martín (author: Oficina de Tecnologías de la Información), "Inventario de recursos
//    turísticos de la región San Martín – [Gore San Martín - GRSM]", datosabiertos.gob.pe, licence ODC-By, created 7 October
//    2025, modified 16 July 2026, FECHA_CORTE 20260621. CSV saved as recursos_turisticos_san_martin.csv (60,257 bytes, 308
//    rows). SITIOS NATURALES 206; subtypes CATARATAS 56, CASCADAS 25; ESTADO REGISTRADO 150, PUBLICADO 148, OBSERVADO 10.
// Our own calculations (scratchpad pe/r3/casm/v1.py, v2.py, python3 -I):
//  v1 prints: Places: 308 / Average point: -6.574 -75.332
//  v2 prints: Inside the box: 301 / Average point: -6.657 -76.72 / sign lost: MIRADOR NATURAL DEL GALLINAZO / unexplained:
//    RAPIDOS DE SAN JERONIMO / swapped: BOSQUE SHIRINGAL / unexplained: CUEVA DE LOS FRANCESES / sign lost: CUEVA DEL TIGRE
//    PERDIDO / unexplained: CASCADA TIMON / swapped: EMBARCADERO TURISTICO DEL PUERTO CALLAO DE HUICUNGO
//  extra: the three unexplained points (REC-00185, 00189, 00251, all in Huicungo) have longitudes near -82.9; the average
//    longitude moved by 1.388 degrees, about 153 km at latitude 6.6 south (111.32 km x cos 6.6).
// Lesson family: sanity-checking coordinates. A loose bounding box of our own catches points that cannot be right; testing
// the box again with signs restored or values swapped explains most of them; the rest are reported, not guessed.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'with open("recursos_turisticos_san_martin.csv", newline="", encoding="utf-8-sig") as f:',
  '    places = list(csv.DictReader(f))',
  '',
  'lats = [float(p["LATITUD"]) for p in places]',
  'lons = [float(p["LONGITUD"]) for p in places]',
  'print("Places:", len(places))',
  'print("Average point:", round(sum(lats) / len(lats), 3), round(sum(lons) / len(lons), 3))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'LAT_BOX = (-9.0, -5.0)    # a loose box we drew by hand',
  'LON_BOX = (-78.5, -75.0)  # around the San Martin region',
  '',
  'def inside(lat, lon):',
  '    return LAT_BOX[0] < lat < LAT_BOX[1] and LON_BOX[0] < lon < LON_BOX[1]',
  '',
  'good, flagged = [], []',
  'with open("recursos_turisticos_san_martin.csv", newline="", encoding="utf-8-sig") as f:',
  '    for p in csv.DictReader(f):',
  '        lat, lon = float(p["LATITUD"]), float(p["LONGITUD"])',
  '        if inside(lat, lon):',
  '            good.append((lat, lon))',
  '        elif inside(-abs(lat), -abs(lon)):',
  '            flagged.append("sign lost: " + p["NOMBRE_RECURSO"])',
  '        elif inside(-abs(lon), -abs(lat)):',
  '            flagged.append("swapped: " + p["NOMBRE_RECURSO"])',
  '        else:',
  '            flagged.append("unexplained: " + p["NOMBRE_RECURSO"])',
  '',
  'print("Inside the box:", len(good))',
  'print("Average point:", round(sum(a for a, b in good) / len(good), 3),',
  '      round(sum(b for a, b in good) / len(good), 3))',
  'for note in flagged:',
  '    print(note)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'San Martín region' },
  slug: 'online-coding-and-ai-classes-san-martin-region-peru',
  code: 'casm',
  accent: '#32591C',
  accentRationale: 'San Martín region: a cacao-leaf green #32591C, for the cacao and coffee farms of the Huallaga and Mayo valleys, allocated to this row; contrast 7.67 on #FBF8F2, 7.22 on #F5F1E8 and 6.60 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, San Martín region, Peru',
  title: 'Online Coding and AI Classes in San Martín Region, Peru',
  description: 'Live online coding and AI classes in English for Tarapoto, Moyobamba, Rioja, Juanjuí and all of San Martín: census, school results and a map data project.',
  ogDescription: 'Coding and AI for children, teenagers and adults across San Martín, taught live online in English at hours the family picks: 2025 census figures, ENLA gains and the new ICT classrooms project, home internet since 2015, and a Python project that checks the region\'s tourism map points.',
  twitterDescription: 'San Martín, live online coding in English: census, ENLA, ICT classrooms and a tourism-map data project.',
  pageName: 'Online Coding and AI Classes in the San Martín Region',
  webPageDescription: 'A guide for families and adult learners in San Martín to live online coding and AI classes taught in English, built from INEI census and household survey figures, MINEDU school census figures, DRE San Martín notes from 2026, EF EPI 2025 and an original Python project on the GORE San Martín tourism resource inventory (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the San Martín region of Peru: maths through coding for children from 6, JavaScript and interactive web pages for teenagers, websites and Python for adults, in a group of fifteen to twenty or one to one, at hours chosen by the family.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'San Martín region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#region', label: 'The region' },
    { href: '#results', label: 'School results' },
    { href: '#internet', label: 'Internet' },
    { href: '#map', label: 'Map project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'San Martín &middot; Live online, in English &middot; Ages 6 to adult',
  h1: 'Online coding and AI classes in the San Martín region',
  lede: 'Moyobamba is the capital, Tarapoto is the busiest town, and families from Rioja and Nueva Cajamarca down to Juanjuí and Tocache live along the same valleys. San Martín has been publishing good news about learning and connectivity. Here we set out the census picture, those results, what a home needs for a live class, and a mapping lesson built on the region\'s list of waterfalls, caves and viewpoints.',
  secondaryCta: { href: '#map', label: 'See the map project' },
  wa: 'Hello Modern Age Coders, we are in the San Martín region of Peru and would like live coding classes in English. Can we book a free class?',
  heroNote: 'Live online classes since 2020 &middot; more than 10,000 students taught &middot; mentors who make learners explain each step',
  spec: [
    ['Learners', 'Children from 6, teenagers, adults'],
    ['Towns', 'Tarapoto, Moyobamba, Rioja, Juanjuí, Tocache'],
    ['Language', 'English, at the learner\'s pace'],
    ['Size', 'Fifteen to twenty, or one to one'],
    ['Timing', 'Any hour the family books'],
    ['Trial', 'One free class, no card']
  ],
  capsuleQ: 'Short version',
  capsule: 'Yes. Learners anywhere in the San Martín region, in Tarapoto, Moyobamba, Rioja, Lamas, Juanjuí or Tocache, can take live online coding and AI classes in English with Modern Age Coders. Children from six learn through blocks and maths puzzles, most move to typed Python by nine or ten, teenagers build web pages, apps and data projects, and adults learn websites, Python or AI tools for work. Classes are either a group of fifteen to twenty or private, at the times the family chooses, and the first is free. Every learner is taught to think a problem through rather than copy an answer.',

  picks: {
    eyebrow: 'Good starting points',
    h2: 'Three first courses for San Martín learners',
    lede: 'Maths and code together for younger children, interactive web pages for teenagers, and website building for adults whose work lives online, from tourism to farming co-operatives.',
    items: [
      { course: 'maths-through-coding', code: 'SMR / 01', title: 'Maths through Coding', note: 'Ages 8 to 12. Coordinates, patterns, fractions and angles from the primaria syllabus, explored by writing small programs that draw and check them.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'SMR / 02', title: 'JavaScript for Teens', note: 'Ages 13 to 18. Buttons, games and maps that respond in the browser, built line by line by secundaria students starting from zero.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'SMR / 03', title: 'Build Real Websites', note: 'For adults and older teens. HTML and CSS from the first tag to a finished, tidy site, useful for a guesthouse, a tour business or a co-operative.' }
    ]
  },

  sections: [
    {
      id: 'region',
      eyebrow: 'Population',
      h2: 'How many people live in the San Martín region?',
      lede: 'The 2025 census counted 967,938 people in the department of San Martín, in ten provinces. The capital is Moyobamba, though the province of San Martín, home to Tarapoto, is the most populous.',
      body: [
        { kind: 'table', numCols: [1], caption: 'San Martín department and its ten provinces, census 2025 total population', head: ['Area', 'Population, 2025'], rows: [
          ['Department of San Martín', '967,938'],
          ['San Martín (Tarapoto)', '231,719'],
          ['Rioja', '146,055'],
          ['Moyobamba (capital)', '138,325'],
          ['Lamas', '97,450'],
          ['Tocache', '87,852'],
          ['Mariscal Cáceres (Juanjuí)', '76,773'],
          ['Bellavista', '70,990'],
          ['Picota', '44,448'],
          ['El Dorado', '43,013'],
          ['Huallaga', '31,313']
        ] },
        { kind: 'source', html: 'Census 2025, INEI demographic indicators, table 1: people enumerated on 15 September 2025 plus INEI\'s estimate of those not reached, inside boundaries current on 15 July 2026. We list each figure exactly and never add provinces together.' },
        { kind: 'two', mt: true,
          leftH3: 'Tarapoto, Moyobamba and the valley towns',
          left: [
            'Town figures for 2025 are not out yet. INEI\'s 2017 count gave the capital, Moyobamba, 50,073 people. Its 2017 directory of populated centres lists Tarapoto at 74,804, with La Banda de Shilcayo at 36,201 and Morales at 30,708 next door.',
            'Further along the valleys the same directory lists Juanjuí 28,453, Nueva Cajamarca 25,812, Rioja 22,080 and Tocache 15,752. Tarapoto, Morales and La Banda touch one another, but INEI lists them separately and so do we.'
          ],
          rightH3: 'Young people in the count',
          right: [
            'The census reached 949,469 people in San Martín in person. Of them, 107,708 were aged 6 to 11 and 114,383 were 12 to 17, the primaria and secundaria years.',
            'Whether that learner lives on a cacao farm near Juanjuí or a street in Tarapoto, the class is the same: live, over video, with a mentor who knows them.'
          ] }
      ]
    },
    {
      id: 'results',
      eyebrow: 'School',
      h2: 'How are San Martín\'s schools doing, and is coding taught?',
      lede: 'The regional education office reports clear gains in reading and maths, and the region has approved a large ICT classrooms project. Programming, however, is still not a school subject anywhere in Peru.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Pupils in 4° de primaria at an adequate level in the ENLA, San Martín, 2023 and 2025 (per cent)', head: ['Area', '2023', '2025'], rows: [
          ['Reading', '42.2', '58.8'],
          ['Mathematics', '31.6', '47.7']
        ] },
        { kind: 'source', html: 'From the DRE San Martín\'s note of 19 May 2026 on results of MINEDU\'s national learning assessment (ENLA), published by MINEDU\'s measurement office. The note also says the number of pupils at an adequate level in maths rose from 6,073 to 9,167.' },
        { kind: 'two', mt: true,
          leftH3: '"Conectando y Educando"',
          left: [
            'In January 2026 San Martín\'s regional council prioritised an investment project called "Conectando y Educando". The DRE San Martín describes it as covering 944 classrooms in 57 public schools, across 37 districts in all ten provinces, for more than 24 thousand pupils.',
            'The plan includes ICT classrooms, technology equipment, digital platforms and teacher training. When it is delivered, those pupils will have better machines. Learning to program on them is a separate step.'
          ],
          rightH3: 'What the curriculum asks',
          right: [
            'Peru\'s national curriculum, the CNEB, has one technology competency, number 28, and makes it transversal, so every area shares it. The regular secundaria timetable of 35 hours sets aside four for Matemática and none for programming.',
            'Grades follow Law 28044, six years of primaria and five of secundaria, with MINEDU fixing each child\'s grade by age on 31 March.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Pupils enrolled in San Martín in 2025, thousands, by type of school', head: ['Level', 'Public', 'Private'], rows: [
          ['Primaria', '116.0', '5.6'],
          ['Secundaria', '96.1', '4.2']
        ] },
        { kind: 'source', html: 'MINEDU school census figures as reprinted in INEI\'s Compendio Estadístico Perú 2026 (enrolment cuadros 5.16, 5.17, 5.22 and 5.23). Decimal point ours; no totals added.' },
        { kind: 'p', mt: true, html: 'Nearly every San Martín pupil is in a public school. MINEDU\'s national coding initiative, Fábrica de Programadores, began in July 2025 with a thousand pupils of the last two secundaria years in Lima Norte, studying Python with the PCEP exam open to them afterwards; San Martín pupils were not part of that first group. Families who want programming now still find it outside school.' }
      ]
    },
    {
      id: 'internet',
      tint: 'tint',
      eyebrow: 'Connection',
      h2: 'Do San Martín homes have the internet and computers for live classes?',
      lede: 'Internet, increasingly yes; computers, still often no. INEI\'s household survey shows home internet in San Martín rising from under one home in ten in 2015 to over half in 2025.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'San Martín homes and internet users, 2015, 2022 and 2025, against Peru in 2025 (per cent)', head: ['San Martín', '2015', '2022', '2025', 'All Peru, 2025'], rows: [
          ['Share of homes owning a computer', '16.0', '21.1', '25.5', '33.9'],
          ['Homes with an internet service', '8.8', '41.6', '52.6', '56.8'],
          ['Residents 6 and older who go online', '22.6', '63.4', '78.4', '81.1']
        ] },
        { kind: 'source', html: 'INEI\'s 2026 compendium, cuadros 11.5, 11.6 and 11.13, which publish the ENAHO household survey by department each year. Decimal commas written as points; the three years chosen by us.' },
        { kind: 'two', mt: true,
          leftH3: 'The trend',
          left: [
            'Between 2015 and 2025 the share of San Martín homes with internet rose from 8.8 to 52.6 per cent, close to the national 56.8. Internet use among people aged six and over reached 78.4 per cent.',
            'Computer ownership grew more slowly, to about one home in four. For coding that is the real constraint, because a learner over nine needs to type, run and correct programs.'
          ],
          rightH3: 'What families do about it',
          right: [
            'Young children can start block coding on a tablet. Older learners use a shared family laptop, a relative\'s computer, or a parent\'s office machine outside working hours.',
            'The free first class tests sound, screen sharing and the connection, so that nothing is paid before we know it works.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'English',
      h2: 'Are classes given in Spanish or English?',
      lede: 'English only. Mentors teach from India in live video lessons, go at the learner\'s speed, and keep the lesson in English throughout.',
      body: [
        { kind: 'two',
          leftH3: 'San Martín\'s English, measured',
          left: [
            'On EF\'s English Proficiency Index 2025 Peru scores 519 and ranks 52nd of 123 countries. The same page lists San Martín at 460, in EF\'s low band and below the national score.',
            'So most San Martín children are early English learners, and we plan lessons on that basis rather than hoping for the best.'
          ],
          rightH3: 'How lessons stay clear',
          right: [
            'One idea per sentence, the same word for the same thing each week, and a live code example for every new word. Mentors check understanding by asking the learner to predict what the program will do.',
            'Spanish answers are fine; the mentor responds with the English phrase and continues. Coding words such as if, while and print become familiar within weeks.'
          ] },
        { kind: 'p', mt: true, html: 'Parents who want to know how a child moves from blocks to typing can read <a class="ag-inline-link" href="/python-for-kids-peru">Python for kids in Peru</a>, and our national page on <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> explains our approach for every age.' }
      ]
    },
    {
      id: 'map',
      eyebrow: 'A San Martín data project',
      h2: 'Where are San Martín\'s waterfalls and caves on the map?',
      lede: 'The regional government publishes an inventory of 308 tourist resources with latitude and longitude for each. Before drawing them on a map, a careful programmer checks that every point could actually be in San Martín.',
      body: [
        { kind: 'two',
          leftH3: 'The dataset',
          left: [
            'The Gobierno Regional de San Martín shares "Inventario de recursos turísticos de la región San Martín" through Peru\'s open data portal under ODC-By, the attribution licence: anyone, a company included, may reuse it provided the regional government is named. Its data is dated 21 June 2026 and the page was last updated on 16 July 2026.',
            'We saved the CSV as recursos_turisticos_san_martin.csv on 9 November 2026. Of its 308 resources, 206 are natural sites, among them 56 rows typed CATARATAS and 25 typed CASCADAS: waterfalls, under two subtype names. Each row has a name, a category, a district and two coordinates.'
          ],
          rightH3: 'The question',
          right: [
            'Where is the centre of San Martín\'s tourism, on average? A first program simply averages all the latitudes and all the longitudes.',
            'Coordinates in Peru are south of the equator and west of Greenwich, so both numbers should be negative: latitude around minus six or seven, longitude around minus seventy-six or seventy-seven.'
          ] },
        { kind: 'code', label: 'Version 1: average every point', lang: 'Python', code: V1, note: 'It prints: <code>Places: 308</code> and <code>Average point: -6.574 -75.332</code>.' },
        { kind: 'p', mt: true, html: 'The answer looks believable, which is exactly the danger. Yet not one of the 301 points that later pass our check lies as far east as minus 75.332: the average sits outside the very places it is meant to summarise. One bad value can drag an average a long way, and this file has more than one.' },
        { kind: 'p', html: 'Version 2 draws a loose box of our own around the region, deliberately generous, and keeps only points inside it. For a point outside the box, it tries two repairs, without saving them: first make both numbers negative, in case a minus sign was lost; then swap latitude and longitude, in case they were typed in the wrong columns. If neither repair puts the point in the box, the point is reported as unexplained.' },
        { kind: 'code', label: 'Version 2: a bounding box and two possible explanations', lang: 'Python', code: V2, note: 'It prints: <code>Inside the box: 301</code>, <code>Average point: -6.657 -76.72</code>, then seven notes: <code>sign lost: MIRADOR NATURAL DEL GALLINAZO</code>, <code>unexplained: RAPIDOS DE SAN JERONIMO</code>, <code>swapped: BOSQUE SHIRINGAL</code>, <code>unexplained: CUEVA DE LOS FRANCESES</code>, <code>sign lost: CUEVA DEL TIGRE PERDIDO</code>, <code>unexplained: CASCADA TIMON</code> and <code>swapped: EMBARCADERO TURISTICO DEL PUERTO CALLAO DE HUICUNGO</code>.' },
        { kind: 'p', mt: true, html: 'Seven of 308 points were off. Two had lost a minus sign, two had latitude and longitude swapped (one of those had also lost its signs), and three could not be explained. Those three are all in the district of Huicungo, with longitudes near minus 82.9, which is far out in the Pacific Ocean, nowhere near San Martín. They might share a typing slip, but the file does not tell us which digit is wrong, so we leave them out rather than invent a fix.' },
        { kind: 'p', html: 'Leaving seven points out moved the average longitude from minus 75.332 to minus 76.72, a shift of 1.388 degrees. At this latitude one degree of longitude is about 110 kilometres, so the first answer was roughly 150 kilometres too far east (our calculation). A map drawn from Version 1 would have put the region\'s tourist heart in the wrong place.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'What the box check found in 308 inventory points (our classification)', head: ['Result', 'Points'], rows: [
          ['Inside our box as published', '301'],
          ['Minus sign lost', '2'],
          ['Latitude and longitude swapped', '2'],
          ['Unexplained, longitude near minus 82.9', '3']
        ] },
        { kind: 'source', html: 'Data credit: Gobierno Regional de San Martín, tourist resource inventory, reused under ODC-By. The box, the repairs we test and the classification are ours; the regional government has not reviewed them. Our box is a rough rectangle, not the region\'s real border, so a point inside it is plausible, not proven.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, on squared paper.</strong> Draw a box and five dots inside it. Then put one dot far outside and ask: if we wanted the middle of the dots, what would that lonely dot do?',
          '<strong>Block coding, around 8 to 10.</strong> On Scratch\'s stage, move a sprite to five x and y positions you choose, then type one with the minus sign missing and watch where it goes.',
          '<strong>Python beginners, 10 to 12.</strong> Execute both versions and work out in your own words why the averages differ.',
          '<strong>Ages 13 and over.</strong> Count the waterfalls under CATARATAS and CASCADAS together, then list which provinces have the most. Explain why you had to merge two labels.',
          '<strong>Going further.</strong> Replace our box with a real check: is each point closer to the centre of its own district than to the centre of any other? Write down what extra data you would need.'
        ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Age by age',
      h2: 'Which course should a San Martín learner start with?',
      lede: 'Choose by age, then by what the learner enjoys. Grades follow MINEDU\'s normative ages counted on 31 March.',
      body: [
        { kind: 'table', numCols: [], caption: 'Where San Martín learners usually begin (our course ages)', head: ['Age', 'Most likely grade', 'Course', 'First projects'], rows: [
          ['6 and 7', 'First and second of primaria', 'Block coding', 'Moving characters, simple stories'],
          ['8 to 10', 'Third to fifth of primaria', 'Maths through Coding or Scratch', 'Shapes, patterns, small games'],
          ['Keyboard-ready, about 9 to 12', 'Upper primaria', 'Python and AI for Kids', 'Number games written as code'],
          ['13 to 15', 'First to third of secundaria', 'JavaScript for Teens', 'Interactive pages and browser games'],
          ['15 to 17', 'Third to fifth of secundaria', 'Python, then data or apps', 'Projects like the map check above'],
          ['18 and over', 'University, work, family business', 'Websites, Python or AI tools', 'A business site, automations']
        ] },
        { kind: 'source', html: 'Course ages are ours. MINEDU places pupils by their age on 31 March, so a child with a later birthday may be a grade below the one shown.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Primaria children', p: 'Lessons that link code with the maths they meet at school, in groups of similar age, with something visible to show at the end of each class.' },
          { h3: 'Secundaria teenagers', p: 'Real languages, real projects and a portfolio, with harder problems for anyone eyeing the national olympiads.' },
          { h3: 'Adults', p: 'People in tourism, agriculture, trade and offices learn to build sites, handle data and use AI tools carefully in their work.' }
        ] },
        { kind: 'p', mt: true, html: 'Teenagers and parents can find more on <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding classes for teens in Peru</a>. Working adults should look at <a class="ag-inline-link" href="/ai-and-coding-for-professionals-peru">AI and coding for professionals in Peru</a>.' }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Olympiads',
      h2: 'Can San Martín pupils compete in the ONEM?',
      lede: 'Yes. Entry runs through each colegio, which hosts the opening round. We are a private tutor and have no tie to MINEDU, the DRE San Martín or the olympiad.',
      body: [
        { kind: 'two',
          leftH3: 'ONEM 2026',
          left: [
            'On Wednesday 8 July 2026 colegios across Peru held the school round of the ONEM, with pupils grouped by year into three levels. According to El Peruano, more than 1.7 million pupils sat the 2026 edition.',
            'We train olympiad thinking with problems we write ourselves, and never reproduce official ones.'
          ],
          rightH3: 'A practice problem of ours',
          right: [
            'Four map points are (2, 3), (4, 5), (6, 7) and (8, 85). What is their average, and what would it be without the last point? (Ours. Answer: (5, 25) with it, and (4, 5) without it. One faulty point moved the second coordinate from 5 to 25.)',
            'It is the map project in miniature, and a question about averages that every olympiad student should be able to answer quickly.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Hours',
      h2: 'At what hour would my child\'s class be in Tarapoto?',
      lede: 'When your family says. San Martín keeps Peru\'s clock, and your mentor arranges the Indian working day to fit.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time converted to India time (examples only, not a timetable)', head: ['Peru time, Tarapoto', 'India time', 'Date in India'], rows: [
          ['07:15', '17:45', 'Same date'],
          ['10:00', '20:30', 'Same date'],
          ['11:30', '22:00', 'Same date'],
          ['16:30', '03:00', 'Next date'],
          ['19:30', '06:00', 'Next date']
        ] },
        { kind: 'source', html: 'The tz database records America/Lima at UTC minus five with no summer time since 1994; INACAL is in charge of Peru\'s official hour. India runs five and a half hours ahead of UTC, which leaves Tarapoto is ten and a half hours behind India every day of the year.' },
        { kind: 'p', mt: true, html: 'With no clock changes on either side, the hour you book stays put through the year. Many families start during the long summer break from January to March and keep the same time when school returns.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How a San Martín learner moves up',
    lede: 'Our own milestones, for learners from six to sixty and beyond. They help a mentor place a learner and show families concrete progress.',
    table: { caption: 'From first blocks to trustworthy maps (ours)', head: ['Stage', 'Often by', 'The learner can'], rows: [
      ['1. Steps', 'Age 6 or 7', 'Put instructions in order'],
      ['2. Loops', 'Age 7 to 9', 'Repeat with a loop'],
      ['3. Coordinates', 'Age 8 to 10', 'Place things on a grid with x and y'],
      ['4. Typing', 'Around 9 to 12', 'Write Python that chooses and repeats'],
      ['5. Averages', 'Age 11 to adult', 'Summarise data and spot an outlier'],
      ['6. Plausibility', 'Age 13 to adult', 'Test whether each value could be true before using it']
    ] },
    left: { h3: 'For parents', ps: [
      'The map project belongs to stages five and six: getting a number, then asking whether each input deserved to be in it.',
      'We show progress through projects your child can explain to you.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you average, look for the point that does not belong.',
      'If you cannot explain a bad value, report it. Do not invent a fix.'
    ] }
  },

  catalogue: {
    eyebrow: 'Also available',
    h2: 'Nine more courses for San Martín learners',
    lede: 'Listed from the youngest learners up. Whichever you pick, lessons happen live, in English, with the mentor who already knows the learner, privately or alongside fourteen to nineteen others.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 15', courses: [
        { code: 'SMR / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Block coding for kids', blurb: 'The gentlest start, with blocks and characters.' },
        { code: 'SMR / KIDS / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Children design and code their own games.' },
        { code: 'SMR / KIDS / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python and small AI ideas.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'SMR / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Complete Python for secundaria students.' },
        { code: 'SMR / TEEN / 02', slug: 'react-for-teens-complete-masterclass', title: 'React for teens', blurb: 'Modern web apps once JavaScript feels easy.' },
        { code: 'SMR / TEEN / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real datasets, charts and first models.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 18 and over', courses: [
        { code: 'SMR / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'Python for adults at a steady pace.' },
        { code: 'SMR / ADULT / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web development', blurb: 'From pages to working web applications.' },
        { code: 'SMR / ADULT / 03', slug: 'canva-ai-design-masterclass', title: 'Canva and AI design', blurb: 'Clear designs for a business or community group.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'The format',
    h2: 'How live online classes reach every San Martín province',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'Evening in India, and a fresh hour for young learners before school.' },
      { time: 'Afternoons and evenings', l: 'Also bookable; mentors adjust their day.' },
      { time: 'Private', l: 'One-to-one lessons on the days you agree.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person each week, who knows the learner.' },
      { h3: 'Plain English', p: 'Short sentences backed by code on screen.' },
      { h3: 'Learner types', p: 'Every line written and run by the learner.' },
      { h3: 'Separate ages', p: 'Children, teens and adults in their own groups.' },
      { h3: 'Checked first', p: 'Device and connection tested for free.' },
      { h3: 'Two formats', p: 'A group of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Student work worth a look',
  projectsLede: 'Students who stick with it build games, sites and tools that others use. Some are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> list more.',
  reviewsLede: 'Word-for-word reviews from parents and learners on Google.',

  fees: {
    h2: 'Fees for learners in San Martín',
    lede: 'Fees are a monthly amount in US dollars. Your card pays in dollars and your bank converts them into soles at the rate it uses that day, so the statement may not match the figure here to the cent.',
    free: ['A free trial class', 'Sound and screen checked', 'No card needed'],
    group: ['Fifteen to twenty learners of similar age', 'The same mentor throughout', 'Two live classes every week', 'Month to month, cancel freely'],
    one: ['A private mentor', 'Projects chosen with the learner', 'Days and hours set by you']
  },

  faq: {
    eyebrow: 'San Martín families ask',
    h2: 'Coding and AI classes in San Martín: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our classes are always live, online and taught only in English. Mentors talk clearly and patiently, adapt to each learner\'s speed and accent, and turn a Spanish answer into English for the learner.' },
      { q: 'Can my child join from Tarapoto, Moyobamba or a smaller town?', a: 'Yes. Everything happens over live video, so Tarapoto, Moyobamba, Rioja, Juanjuí, Tocache or a village in Lamas all work the same, given a connection and a suitable device.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead, so 10:00 in Tarapoto is 20:30 for the mentor.' },
      { q: 'Does school in San Martín teach coding?', a: 'Not as a subject. The national curriculum spreads digital skills across all areas. San Martín\'s "Conectando y Educando" project will equip 944 classrooms with ICT, but programming lessons are not part of the regular timetable.' },
      { q: 'Is a phone enough?', a: 'For a young child doing blocks, a tablet can work. From about nine a learner needs a laptop or desktop to type and test code. The free class checks your device.' },
      { q: 'How young can a child start?', a: 'Six. Young children start with blocks and puzzles; most move to typed Python at nine or ten, and the mentor judges readiness in the free class.' },
      { q: 'Can adults in San Martín learn with you?', a: 'Yes, in adult groups or one to one. Many start with websites, Python or AI tools that help with work in tourism, farming businesses or offices.' },
      { q: 'Do you prepare pupils for the ONEM?', a: 'We build olympiad reasoning with our own problems, never official papers. Pupils enter through their colegio. We have no link with MINEDU, the DRE San Martín or the ONEM.' },
      { q: 'How do fees work?', a: 'A monthly fee, paid by card in US dollars, converted into soles by your bank. Visitors from India see rupees. The first class is free and no card is asked for.' },
      { q: 'Do learners get a certificate?', a: 'Where the course includes one, learners receive our own Modern Age Coders certificate of completion. It is not a Peruvian qualification, and neither MINEDU, the DRE San Martín nor any school issues or endorses it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also here',
    h2: 'More pages for San Martín families',
    lede: 'Next reading for learners across the region.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our national page and Peru index.' },
      { href: '/python-for-kids-peru', label: 'Python for kids in Peru', p: 'From blocks to typed Python.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Small AI builds for children.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'AI projects for secundaria.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Each AI tool\'s age rules.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a lesson looks like.' }
    ]
  },

  start: {
    h2: 'Try a free class from anywhere in San Martín',
    lede: 'In the trial the mentor gives a small puzzle, guides a first program and checks your device and sound. Afterwards you receive a suggested course and group, based on how the learner reasoned and how well they followed the English.',
    readFirst: 'Like to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> covers a lesson in detail, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Teaching is live and in English, from mentors in India. WhatsApp is quickest; please write to us in English.',
    formNote: 'Free, no card, no strings.'
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
    bottomRight: 'Is that waterfall really in the Pacific?'
  },

  personalityCss: `
.ag-root.ag-casm .ag-hero h1 { letter-spacing: -0.02em; max-width: 22ch; }
.ag-root.ag-casm .ag-capsule { border-left-width: 7px; border-radius: 2px; }
.ag-root.ag-casm .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-casm .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-casm .ag-code-head b { letter-spacing: 0.06em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadros 1 and 3), Perfil Sociodemográfico 2017 (Cuadro 1.9), Directorio de Centros Poblados 2017 (dpto22); INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13; MINEDU Censo Educativo cuadros 5.16, 5.17, 5.22, 5.23); DRE San Martín notes of 12 January and 19 May 2026 (ENLA, Conectando y Educando); Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, ONEM 2026; EF EPI 2025; tz database. Data: GORE San Martín tourist resource inventory, ODC-By.',
    localProject: 'Where are San Martín\'s waterfalls and caves on the map? An original Python project on the GORE San Martín tourist resource inventory (ODC-By, 308 points): Version 1 averages every coordinate (-6.574, -75.332); Version 2 keeps 301 points inside a loose box of ours, flags two lost minus signs, two swapped pairs and three unexplained points in Huicungo near longitude -82.9, and moves the average to (-6.657, -76.72), about 150 km west. Lesson family: coordinate sanity checks.',
    requiredMentions: ['recursos_turisticos_san_martin.csv', 'Inside the box: 301', 'unexplained: CASCADA TIMON', 'Average point: -6.657 -76.72', '967,938', 'Conectando y Educando', 'lists San Martín at 460', 'Is that waterfall really in the Pacific?', 'Homes with an internet service'],
    sources: [
      { claim: 'Department and province populations of San Martín, and censada counts by age, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Moyobamba population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Tarapoto, La Banda, Morales, Juanjuí, Nueva Cajamarca, Rioja and Tocache populated-centre figures, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto22.xlsx' },
      { claim: 'Computer, internet and internet-use shares for San Martín and Peru; enrolment.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'ENLA 4° primaria results for San Martín, 2023 and 2025.', url: 'https://www.gob.pe/institucion/regionsanmartin-dre/noticias/1394203-san-martin-supera-los-11-mil-estudiantes-con-niveles-adecuados-en-lectura-y-los-9-mil-en-matematica' },
      { claim: 'Conectando y Educando: 944 classrooms, 57 schools, 37 districts, more than 24 thousand pupils.', url: 'https://www.gob.pe/institucion/regionsanmartin-dre/noticias/1332140-goresam-impulsa-inversion-historica-para-fortalecer-la-educacion-con-tecnologia-en-san-martin' },
      { claim: 'EF EPI 2025 scores for Peru and San Martín.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'GORE San Martín tourist resource inventory, ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/inventario-de-recursos-tur%C3%ADsticos-de-la-regi%C3%B3n-san-mart%C3%ADn-%E2%80%93-gore-san-mart%C3%ADn-grsm' },
      { claim: 'Peru time UTC-5 with no summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A combined Tarapoto figure built from Tarapoto, Morales and La Banda de Shilcayo: never summed.',
      'The value of the Conectando y Educando project in soles: not printed.',
      'A guessed correction for the three Huicungo points near longitude -82.9: not made; reported instead.',
      'Our bounding box presented as San Martín\'s border: it is ours and loose, and the page says so.',
      'Any link with the GORE or DRE San Martín, MINEDU or the ONEM: none.',
      'Spanish-language teaching: every class is in English.',
      'Naming San Martín schools as sources of students: refused.'
    ]
  }
};
