// SHIP: market (region) | Pasco: puna mining towns above 4,300 m and the selva central, one live class in English | regex on free text: \d+ turns 1.8 km into 8; capture where each distance is measured from
'use strict';
// Online coding and AI classes, Pasco region, Peru (ag- region page, Peru cluster row PE183; alloc: regions, cbj, #227008).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: flexible hours; USD only via
// data-price anchors.
// Spine: Pasco holds two very different places in one department: Cerro de Pasco and Yanacancha on the puna at about 4,370 to
// 4,390 metres, and Oxapampa, Villa Rica and Puerto Bermúdez in the selva central, down to 281 metres. Home internet rose from
// 5.9 to 45.6 per cent of households in ten years. The page says who our English-taught live classes suit across both, and the
// project reads distances out of the provincial council's own free-text list of attractions.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-pasco-region-peru/):
//  - INEI, Censos Nacionales 2025, Cuadro N° 1: PASCO 253549; provinces PASCO 119823, DANIEL ALCIDES CARRIÓN 37100,
//    OXAPAMPA 96626; districts CHAUPIMARCA 26985, YANACANCHA 25205, PUERTO BERMÚDEZ 23851, OXAPAMPA 17248, VILLA RICA 15956,
//    SANTA ANA DE TUSI 14036, CONSTITUCIÓN 13943, YANAHUANCA 12882. Cuadro N° 3: PASCO censada 235538; 6 a 11 años 26834;
//    12 a 17 años 27492. Never summed.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Cerro de Pasco city 58,899 (2017). Lib1541 dpto19.xlsx (centros poblados 2017):
//    CERRO DE PASCO 25 600 at 4 373 m (Chaupimarca); YANACANCHA 25 029 at 4 394 m; VILLA RICA 11 036 at 1 551 m; OXAPAMPA
//    10 887 at 1 832 m; PUERTO BERMUDEZ 6 168 at 281 m.
//  - INEI Compendio Estadístico Perú 2026, tomo 1: 11.5 "Pasco 21,9 24,2 20,8 23,2 21,0 25,5 24,8 27,2 27,9 30,7 29,1"; 11.6
//    "Pasco 5,9 6,0 6,3 6,4 13,8 25,9 33,5 37,4 47,4 41,4 45,6"; 11.13 "Pasco 27,6 33,9 37,2 36,4 40,2 51,9 63,3 68,8 76,2 78,1
//    81,5"; Total 2025 33,9 / 56,8 / 81,1. 5.53 Pasco 4° primaria 2025 Matemática 28,5 Lectura 27,8 (Total 30,0 / 32,7); 5.54
//    2° secundaria 2025 10,3 / 12,3 (Total 12,7 / 18,5). 5.16 primaria pública 29,9 (2015) 30,8 (2025); 5.22 secundaria
//    pública 20,2 (2015) 26,0 (2025); 5.75 docentes 7 258 (2025).
//  - EF EPI 2025: "Peru EF EPI score : 519"; Pasco not among EF's sixteen scored regions.
//  - GORE Pasco, gob.pe nota 1381078 (30 de marzo de 2026): formulation of the "Proyecto Educativo Regional (PER) Pasco",
//    "objetivos y acciones estratégicas articuladas al PER al 2036". Nota 1368271 (16 de marzo de 2026): new building of the
//    I.E.E. María Parado de Bellido "como parte del inicio del año escolar 2026". Nota 1409246 (5 de junio de 2026): "concurso
//    de Ecoferia Estudiantil", "estudiantes del nivel secundario".
//  - Ley 28044, Edades normativas, CNEB competency 28 and JER hours, MINEDU 2026 opening, ONEM 2026, OPI (FACTS 5, 6, 13, 14,
//    17, 32, 33, 39, 99, 105, 111). Time: tzdata.
//  - Data: Honorable Municipalidad Provincial de Pasco, "Lista de Atractivos Turísticos de la Provincia de Pasco",
//    datosabiertos.gob.pe, "Open Data Commons Attribution License" (ODC-By), released 2022-11-10, modified 2023-03-29. File
//    ATRACTIVOS_TURISTICOS_4.csv (saved as atractivos-pasco.csv), 26 rows, Latin-1, commas. CODIGO_UBIGEO 190101 on all 26
//    rows; PROVINCIA PASCO 18, OXAPAMPA 8; district spellings HUALLAY and PALLANCHARA as published. Some descriptions name
//    private people; we print attraction names and numbers only.
// Our own calculations (scratchpad pe/r5/cbj/v1.py, v2.py, python3 -I):
//  v1 prints eleven name-and-number lines (Iglesia Inmaculada Concepcio 18 / Laguna de Punrun (4200 msnm) 37 / Replica de la
//    Casa de Daniel 8 / Santuario Nacional Bosque de 40 / Banos Termales de Calera 43 / Nevado de Huaguruncho 86 / Banos
//    Termales de Conoc 66 / Poblado de Villa Rica (1480 71 / Catarata El Encanto 12 / Catarata el Leon 5 / Poblado de Pozuzo
//    (820 msnm) 87) and Attractions with a distance: 11 of 26
//  v2 prints: Cerro de Pasco [1.8, 18.0, 37.0, 40.0, 43.0, 66.0, 86.0] / Oxapampa [71.0, 87.0] / Villa Rica [5.0, 12.0] /
//    Distances read: 11
// Lesson family: regular expressions on free text. \d+ matches only the 8 of "1.8 km"; allow an optional decimal part, and
// capture the place each distance is measured from, because 12 km from Villa Rica is not 12 km from Cerro de Pasco.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'import re',
  '',
  'with open("atractivos-pasco.csv", newline="", encoding="latin-1") as f:',
  '    rows = list(csv.DictReader(f))',
  '',
  'found = 0',
  'for row in rows:',
  '    text = row["DESCRIPCION_DEL_ATRACTIVO"]',
  '    match = re.search(r"(\\d+) km", text)',
  '    if match:',
  '        found += 1',
  '        print(row["NOMBRE_DEL_ATRACTIVO_TURISTICO"].strip()[:28], match.group(1))',
  'print("Attractions with a distance:", found, "of", len(rows))'
].join('\n');

const V2 = [
  'import csv',
  'import re',
  '',
  'PATTERN = r"(\\d+(?:\\.\\d+)?) km[^(]*?(?:ciudad|poblado) de ([^(]+?) \\("',
  '',
  'with open("atractivos-pasco.csv", newline="", encoding="latin-1") as f:',
  '    rows = list(csv.DictReader(f))',
  '',
  'by_start = {}',
  'for row in rows:',
  '    match = re.search(PATTERN, row["DESCRIPCION_DEL_ATRACTIVO"])',
  '    if match:',
  '        km = float(match.group(1))',
  '        start = match.group(2)',
  '        by_start.setdefault(start, []).append(km)',
  '',
  'for start, distances in sorted(by_start.items()):',
  '    print(start, sorted(distances))',
  'print("Distances read:", sum(len(d) for d in by_start.values()))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Pasco region' },
  slug: 'online-coding-and-ai-classes-pasco-region-peru',
  code: 'cbj',
  accent: '#227008',
  accentRationale: 'Pasco region: a selva-central forest green #227008, for the Oxapampa side of the department, allocated to this row; contrast 5.85 on #FBF8F2, 5.50 on #F5F1E8 and 5.03 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Pasco region, Peru',
  title: 'Pasco Region, Peru: Online Coding and AI Classes in English',
  description: 'Live online coding and AI classes in English for the Pasco region, from Cerro de Pasco to Oxapampa: who they suit, census facts, devices and a regex data project.',
  ogDescription: 'Coding and AI taught live online in English for learners in Cerro de Pasco, Yanacancha, Oxapampa, Villa Rica, Yanahuanca and Puerto Bermúdez: Pasco\'s three provinces in 2025 census figures, the jump in home internet, an honest look at fit, and a Python project on the provincial council\'s list of attractions.',
  twitterDescription: 'Pasco region, live coding classes in English online: puna and selva, honest fit, a regex project.',
  pageName: 'Online Coding and AI Classes in the Pasco Region',
  webPageDescription: 'A guide for learners and families in the Pasco region of Peru, from the mining towns of the puna to the selva central, to live online coding and AI classes taught in English, using INEI census and household tables, MINEDU evaluation results, Gobierno Regional de Pasco notes, and an original Python project on the Municipalidad Provincial de Pasco list of tourist attractions (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Pasco region of Peru: block coding and puzzles for children, Python and web for secundaria pupils, Python, text processing and data for university students and adults, in a class of fifteen to twenty or one to one, at hours chosen by the learner.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Pasco region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#two-worlds', label: 'Puna and selva' },
    { href: '#homes', label: 'Internet' },
    { href: '#suit', label: 'Who it suits' },
    { href: '#attractions', label: 'Regex project' },
    { href: '#timing', label: 'Timing' }
  ],
  eyebrow: 'Pasco region &middot; Live online lessons in English &middot; Puna and selva alike',
  h1: 'Online coding and AI classes in the Pasco region',
  lede: 'Few Peruvian departments stretch as far as Pasco does: from Yanacancha, more than 4,300 metres up on the puna, to Puerto Bermúdez in the Amazon lowlands below 300 metres. A live online class is the same in both. Ours are taught in English, by a mentor on video, at hours the learner sets. Here you will find Pasco in census and household figures, a frank note on who is ready for English-taught lessons, and a project in which a teenager learns to pull numbers out of ordinary sentences without being fooled by them.',
  secondaryCta: { href: '#attractions', label: 'Jump to the regex project' },
  wa: 'Hello Modern Age Coders, we live in the Pasco region of Peru. We would like to try your live coding classes in English. Could you tell us how a free class works?',
  heroNote: 'Online, live, since 2020 &middot; 10,000+ learners across the world &middot; mentors at ease with learners new to English',
  spec: [
    ['Who gains most', 'Secundaria pupils, students, adults'],
    ['Young children', 'From six, mostly one to one'],
    ['Teaching language', 'English, at the learner\'s pace'],
    ['Needed at home', 'Laptop and a steady connection'],
    ['Hours', 'Set by the learner, any day'],
    ['First step', 'Free trial, honest advice']
  ],
  capsuleQ: 'At a glance',
  capsule: 'Modern Age Coders gives live online coding and AI lessons in English to learners across the Pasco region: Cerro de Pasco and Yanacancha, Yanahuanca, Oxapampa, Villa Rica and Puerto Bermúdez. Teenagers in secundaria, university students and working adults with some English do particularly well, learning Python, web development, working with data and how AI is built. Children from six can start with blocks and puzzles, usually with a mentor of their own. Lessons run in classes of fifteen to twenty or one to one, at any hour you choose, beginning with a free trial.',

  picks: {
    eyebrow: 'First choices',
    h2: 'Three good starting courses for Pasco',
    lede: 'A gentle one for children, a typed-code course for teenagers, and one for adults who handle text and records at work.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PAS / 01', title: 'Scratch Programming', note: 'For children of about seven to eleven. Blocks snap together, characters move at once, and the mentor can teach by pointing, so a child copes while still learning English.' },
      { course: 'python-complete-masterclass-teens', code: 'PAS / 02', title: 'Python for Teens', note: 'For 1° to 5° de secundaria. From the first print statement to small programs that read and sort real information, like the attraction list on this page.' },
      { course: 'python-ai-automation-masterclass-college', code: 'PAS / 03', title: 'Python and AI automation', note: 'For students and adults whose work involves documents, lists and forms: Python to read, extract and tidy text, and AI tools used with care.' }
    ]
  },

  sections: [
    {
      id: 'two-worlds',
      eyebrow: 'Puna and selva',
      h2: 'Who lives in the Pasco region, and how far apart are they?',
      lede: 'INEI counted 253,549 people in the department of Pasco in 2025, in three provinces that sit at very different heights.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Pasco department and provinces, population at the 2025 census', head: ['Area', 'People, 2025'], rows: [
          ['Pasco province (Cerro de Pasco)', '119,823'],
          ['Oxapampa province', '96,626'],
          ['Daniel Alcides Carrión province (Yanahuanca)', '37,100'],
          ['Department of Pasco', '253,549']
        ] },
        { kind: 'source', html: 'Cuadro N° 1 of INEI\'s Censos Nacionales 2025 demographic tables: enumerated plus omitted population, reference day 15 September 2025. The department line is printed by INEI and is not our sum.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Five Pasco towns in INEI\'s 2017 list of centros poblados', head: ['Town', 'People, 2017', 'Metres above sea level'], rows: [
          ['Cerro de Pasco (Chaupimarca)', '25,600', '4,373'],
          ['Yanacancha', '25,029', '4,394'],
          ['Villa Rica', '11,036', '1,551'],
          ['Oxapampa', '10,887', '1,832'],
          ['Puerto Bermúdez', '6,168', '281']
        ] },
        { kind: 'source', html: 'INEI, Directorio Nacional de Centros Poblados, Censos Nacionales 2017, department of Pasco. INEI\'s 2017 table of department capitals counts the wider city of Cerro de Pasco at 58,899; the town rows above are single populated centres, a narrower measure.' },
        { kind: 'two', mt: true,
          leftH3: 'Districts in 2025',
          left: [
            'For 2025 INEI gives district totals: Chaupimarca 26,985, Yanacancha 25,205, Puerto Bermúdez 23,851, Oxapampa 17,248, Villa Rica 15,956, Santa Ana de Tusi 14,036, Constitución 13,943 and Yanahuanca 12,882.',
            'A district is larger than its main town, and these are 2025 figures against 2017 ones, so we do not compare them.'
          ],
          rightH3: 'Children and teenagers',
          right: [
            'Of the 235,538 people enumerated in the department in 2025, 26,834 were aged 6 to 11 and 27,492 aged 12 to 17.',
            'Public secundaria enrolment rose from 20.2 thousand in 2015 to 26.0 thousand in 2025, while public primaria stayed near 30 thousand (29.9 to 30.8). Pasco had 7,258 teachers in 2025.'
          ] },
        { kind: 'p', mt: true, html: 'The distances are real. A family in Puerto Bermúdez and a family in Yanacancha live hours apart by road and more than four kilometres apart in height. Programming courses taught by a person are rare in both. Online, they share the same mentor and the same lesson.' }
      ]
    },
    {
      id: 'homes',
      tint: 'tint',
      eyebrow: 'At home',
      h2: 'How quickly has internet reached Pasco homes?',
      lede: 'Very quickly. In 2015 about one Pasco household in seventeen had internet at home; by 2025 it was nearly one in two.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Pasco households and internet use compared with Peru (per cent)', head: ['What is measured', 'Pasco 2015', 'Pasco 2020', 'Pasco 2025', 'Peru 2025'], rows: [
          ['Households that own a computer', '21.9', '25.5', '29.1', '33.9'],
          ['Households with an internet connection', '5.9', '25.9', '45.6', '56.8'],
          ['Share of people 6 and older online', '27.6', '51.9', '81.5', '81.1']
        ] },
        { kind: 'source', html: 'ENAHO results in INEI, Compendio Estadístico Perú 2026, volume 1, tables 11.5 (computers), 11.6 (internet in the home) and 11.13 (internet use). Commas in INEI\'s decimals changed to points.' },
        { kind: 'two', mt: true,
          leftH3: 'Read it carefully',
          left: [
            'By 2025 the share of Pasco residents aged six and up who went online, 81.5 per cent, had caught up with Peru\'s 81.1. Home connections, at 45.6 per cent, were still below the national 56.8, and computers below too.',
            'These are department averages from a household survey. A street in Yanacancha and a village up a valley in Oxapampa province can be far apart on either side of them.'
          ],
          rightH3: 'What it means for a class',
          right: [
            'Plenty of teenagers in Pasco can reach a live class. Fewer have a computer of their own: fewer than three households in ten owned one in 2025.',
            'A phone shows the lesson but is too small for writing code. A laptop or desktop, even one shared by siblings on different evenings, is the real requirement from about age ten.'
          ] }
      ]
    },
    {
      id: 'suit',
      eyebrow: 'Fit and English',
      h2: 'Who in Pasco will do well in an online class taught in English?',
      lede: 'Our lessons are in English only, live and online; we have no Spanish-language groups. That is a benefit for some learners and a hurdle for others, and the free class is where we find out which.',
      body: [
        { kind: 'two',
          leftH3: 'The English picture',
          left: [
            'EF\'s English Proficiency Index 2025 scores Peru 519, in the moderate band. Pasco is not among the sixteen Peruvian regions EF scores separately, so there is no Pasco English figure to report.',
            'In MINEDU\'s 2025 census evaluation, 28.5 per cent of Pasco fourth-graders reached the satisfactory level in maths and 27.8 per cent in reading, a little under the national 30.0 and 32.7. In second year of secundaria the figures were 10.3 and 12.3, against 12.7 and 18.5 nationally.'
          ],
          rightH3: 'Learners who usually flourish',
          right: [
            'Secundaria pupils who like solving things and are prepared to meet English words one at a time. University and institute students in engineering, mining, environmental or business courses. Adults who read some technical English and want programming for their work.',
            'Children under ten can start too, mostly in one-to-one lessons with blocks and short repeated instructions, and an adult close by at first.'
          ] },
        { kind: 'p', mt: true, html: 'Parents who would like the explanation in Spanish can read <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">clases de programación para niños online en Perú</a>. Teenagers curious about why English and code go so well together may enjoy <a class="ag-inline-link" href="/learn-coding-and-english-together-peru">learning coding and English together</a>.' }
      ]
    },
    {
      id: 'attractions',
      tint: 'tint',
      eyebrow: 'A Pasco data project',
      h2: 'How far is each Pasco attraction, according to its own description?',
      lede: 'Pasco\'s provincial council publishes a list of tourist attractions in which the distances are buried in ordinary Spanish sentences. Getting them out with a program is a classic first task in text processing, and Pasco\'s list contains two traps that catch almost everyone.',
      body: [
        { kind: 'two',
          leftH3: 'The open dataset',
          left: [
            'The Honorable Municipalidad Provincial de Pasco publishes "Lista de Atractivos Turísticos de la Provincia de Pasco" on datosabiertos.gob.pe under the Open Data Commons Attribution License (ODC-By), first released on 10 November 2022 and last modified on 29 March 2023.',
            'Our copy, atractivos-pasco.csv, has 26 rows: 18 marked as Pasco province and 8 as Oxapampa province. The description column is free text, such as "a 40 km al sur de la ciudad de Cerro de Pasco (1 hora en auto aproximadamente)".'
          ],
          rightH3: 'Two things to notice first',
          right: [
            'The CODIGO_UBIGEO column holds 190101 on all 26 rows, even for attractions in Oxapampa province. That is a location code that has been copied down the column, so this project ignores it and reads place names from the text.',
            'Some district names are spelt as the council typed them, such as HUALLAY and PALLANCHARA. We keep them as published.'
          ] },
        { kind: 'code', label: 'Version 1: find a number before "km"', lang: 'Python', code: V1, note: 'It prints eleven lines, from <code>Iglesia Inmaculada Concepcio 18</code> through <code>Replica de la Casa de Daniel 8</code> and <code>Catarata el Leon 5</code> to <code>Poblado de Pozuzo (820 msnm) 87</code>, then <code>Attractions with a distance: 11 of 26</code>.' },
        { kind: 'p', mt: true, html: 'Version 1 looks as if it works. Eleven attractions report a distance, and the numbers seem sensible. But check one by hand. The replica of Daniel Alcides Carrión\'s house is described as "a 1.8 km de la ciudad de Cerro de Pasco", and the program printed 8. The pattern <code>\\d+</code> means "one or more digits", so it skipped the 1 and the full stop and matched only the 8 right before " km". The second trap is quieter: the numbers do not all start from the same place. The two waterfalls are measured from Villa Rica, Pozuzo and Villa Rica from Oxapampa, everything else from Cerro de Pasco. A list of bare numbers mixes them up.' },
        { kind: 'code', label: 'Version 2: decimals allowed, starting point captured', lang: 'Python', code: V2, note: 'It prints: <code>Cerro de Pasco [1.8, 18.0, 37.0, 40.0, 43.0, 66.0, 86.0]</code>, <code>Oxapampa [71.0, 87.0]</code>, <code>Villa Rica [5.0, 12.0]</code> and <code>Distances read: 11</code>.' },
        { kind: 'p', mt: true, html: 'The new pattern has two groups. <code>(\\d+(?:\\.\\d+)?)</code> takes digits with an optional decimal part, so 1.8 survives whole. <code>(?:ciudad|poblado) de ([^(]+?) \\(</code> captures the place named after "ciudad de" or "poblado de", up to the bracket that opens the travel time. Grouping by that place gives three separate lists. The Huaguruncho snow peak, the furthest from Cerro de Pasco at 86 km, and Pozuzo, 87 km from Oxapampa, are now plainly measured from different towns.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Distances read from the descriptions, grouped by starting town (our extraction)', head: ['Measured from', 'Attractions', 'Distances (km)'], rows: [
          ['Cerro de Pasco', '7', '1.8, 18, 37, 40, 43, 66, 86'],
          ['Oxapampa', '2', '71, 87'],
          ['Villa Rica', '2', '5, 12']
        ] },
        { kind: 'source', html: 'Data: Municipalidad Provincial de Pasco, Lista de Atractivos Turísticos de la Provincia de Pasco, ODC-By. The extraction and grouping are ours. Fifteen of the 26 descriptions contain no distance in this form and are left out. One description gives Villa Rica\'s altitude as 1480 msnm, while INEI\'s 2017 list puts the populated centre at 1,551 metres: two sources, two points, both printed as published.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, with a map.</strong> Draw three towns and a few places around each. Say how far each place is "from" which town, and why you must say which.',
          '<strong>Blocks, around 8 to 10.</strong> Give a sprite a list of sentences. Can it find the word "km" and say the word just before it?',
          '<strong>First Python, around 10 to 12.</strong> Use <code>text.split()</code> to find the word before "km" in each description. Does it handle 1.8?',
          '<strong>Ages 13 and over.</strong> Extend Version 2 to read the travel time in brackets, in minutes, and work out an average speed for each trip.',
          '<strong>Going further.</strong> Pull every altitude written as "msnm" and compare it with INEI\'s centros poblados list. Where do the two disagree, and by how much?'
        ] }
      ]
    },
    {
      id: 'schooling',
      eyebrow: 'School in Pasco',
      h2: 'Does school in Pasco include programming?',
      lede: 'Not as a subject. Pasco, like every region, follows the national curriculum, which spreads digital skills across all areas.',
      body: [
        { kind: 'two',
          leftH3: 'The national framework',
          left: [
            'Primaria lasts six years and secundaria five, under the General Education Law, and MINEDU assigns grades by age on 31 March: a six year old starts primaria, a twelve year old starts secundaria.',
            'The curriculum names a technology competency, number 28, about working in virtual environments, and makes it transversal. In the standard 35-hour secundaria week there are four hours of maths and none called programming or computing.'
          ],
          rightH3: 'What the region is planning',
          right: [
            'On 30 March 2026 the Gobierno Regional de Pasco reported work on its regional education project, the Proyecto Educativo Regional (PER) Pasco, with objectives and strategic actions linked to the PER to 2036.',
            'In June 2026 its energy and mines directorate held an Ecoferia Estudiantil in which secundaria pupils presented environmental projects. In March 2026 it opened a new building for the I.E.E. María Parado de Bellido at the start of the school year.'
          ] },
        { kind: 'p', mt: true, html: 'Pasco pupils can enter national contests on equal terms. The ONEM maths olympiad begins with a round in each school, held on 8 July 2026 for its 2026 edition, which attracted more than 1.7 million secundaria pupils. UTEC\'s OPI and its sister computing olympiads charge nothing to secundaria pupils. We have no link with MINEDU, UTEC, the regional government, the provincial council or any contest; our practice material is our own.' }
      ]
    },
    {
      id: 'choosing',
      tint: 'tint',
      eyebrow: 'Choosing',
      h2: 'Which course should a Pasco learner pick first?',
      lede: 'Look at age, English and the device at home. The table is ours and only a starting point.',
      body: [
        { kind: 'table', numCols: [], caption: 'Starting points we suggest for Pasco learners', head: ['Learner', 'English now', 'First course', 'How'], rows: [
          ['Child, 6 to 8', 'A few words', 'Blocks and puzzles', 'Private lessons'],
          ['Child, 9 to 12', 'School basics', 'Scratch, then Python', 'Private or class'],
          ['Secundaria pupil', 'School English', 'Python for Teens', 'Class'],
          ['Secundaria, technical interests', 'Reads instructions', 'Python, then web', 'Class'],
          ['University or institute student', 'Technical reading', 'Python and automation', 'Class or private'],
          ['Adult', 'Mixed', 'Python with spreadsheets', 'Private, usually']
        ] },
        { kind: 'source', html: 'Our suggestions. Grade is set by age on 31 March, so one class can hold children almost a year apart in age.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Children', p: 'Lessons built around one small game at a time, with the same English phrases each week until they feel ordinary.' },
          { h3: 'Teenagers', p: 'Python that reads real text and numbers, so every new idea arrives with a reason to use it.' },
          { h3: 'Adults and students', p: 'Automation of the dull parts of work: extracting values from documents, cleaning lists, checking totals.' }
        ] },
        { kind: 'p', mt: true, html: 'University students can read <a class="ag-inline-link" href="/coding-courses-for-university-students-peru">coding courses for university students in Peru</a>, and anyone weighing a first language can see <a class="ag-inline-link" href="/python-course-peru">our Python course for Peru</a>. The full set of Peru guides is on <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">our Peru page</a>.' }
      ]
    },
    {
      id: 'timing',
      eyebrow: 'Clock',
      h2: 'At what time can someone in Pasco take a lesson?',
      lede: 'At the time that suits them. Pasco keeps Peru time all year, and the mentor in India arranges the lesson around it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Pasco time against India time (examples, not a schedule)', head: ['Pasco', 'India', 'Mentor\'s time of day'], rows: [
          ['05:00', '15:30', 'Afternoon'],
          ['07:30', '18:00', 'Early evening'],
          ['09:30', '20:00', 'Evening'],
          ['14:00', '00:30', 'Just after midnight'],
          ['17:30', '04:00', 'Next day, before dawn'],
          ['20:30', '07:00', 'Next day, morning']
        ] },
        { kind: 'source', html: 'Peru is on UTC minus 5 hours in every month, without daylight saving (tz database, America/Lima); India is on UTC plus 5 hours 30 minutes. India is therefore 10 hours 30 minutes ahead of Pasco all year round.' },
        { kind: 'p', mt: true, html: 'Since neither country moves its clocks, the hour you agree at the start never shifts. You book in Pasco time. Peru\'s 2026 school year opened on 16 March 2026 with 6,225,000 pupils in 53,631 schools; children often start with us during the summer holidays from January to March, while adults can start whenever they like.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growth',
    h2: 'How a Pasco learner\'s skills grow',
    lede: 'Six milestones we use with learners of every age, to place them and to show families progress.',
    table: { caption: 'Our milestones, from first blocks to reading text with code', head: ['Milestone', 'Common age', 'Can now'], rows: [
      ['1. Instruct', '6 to 7', 'Tell a character what to do, in order'],
      ['2. Repeat', '7 to 9', 'Replace copied steps with a loop'],
      ['3. Test', '8 to 10', 'Use if to react to what happens'],
      ['4. Store', '9 to 12', 'Keep words and numbers in variables and lists'],
      ['5. Search', '11 to adult', 'Find a word or number inside a longer text'],
      ['6. Extract', '13 to adult', 'Write a pattern that pulls values out of text, and test it on awkward cases']
    ] },
    left: { h3: 'For parents', ps: [
      'The attractions project covers milestones 5 and 6. Learners finish it in the habit of checking a program\'s answer against the source by hand.',
      'A brief note each month tells you what was made and what was tricky.'
    ] },
    right: { h3: 'For learners', ps: [
      'A pattern that works on ten lines can fail on the eleventh.',
      'A number means nothing until you know what it is measured from.'
    ] }
  },

  catalogue: {
    eyebrow: 'Also available',
    h2: 'Nine more courses for learners in Pasco',
    lede: 'Arranged by age. Each is taught live, in English, by one mentor who stays with the learner, as a class or privately.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'PAS / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Blocks to small games and apps.' },
        { code: 'PAS / KIDS / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds inside a familiar world.' },
        { code: 'PAS / KIDS / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first typed language with playful AI ideas.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'PAS / TEEN / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Web development for teens', blurb: 'Sites with a front and a back end.' },
        { code: 'PAS / TEEN / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'Sorting, searching and clear thinking.' },
        { code: 'PAS / TEEN / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP', blurb: 'Python certificate preparation.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'PAS / ADULT / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java masterclass', blurb: 'Object-oriented code for larger systems.' },
        { code: 'PAS / ADULT / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'From tidy tables to simple models.' },
        { code: 'PAS / ADULT / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Track changes and work in a team.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Week by week',
    h2: 'Live online lessons from Pasco, step by step',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early', l: 'Pasco\'s early morning is the mentor\'s afternoon.' },
      { time: 'Late', l: 'Evening slots in Pasco are possible as well.' },
      { time: 'Private', l: 'Good for learners who want English taken gently.' }
    ],
    cells: [
      { h3: 'Same face weekly', p: 'One mentor, who comes to know the learner well.' },
      { h3: 'Unhurried English', p: 'Clear words, repeated, typed into the chat.' },
      { h3: 'Learner drives', p: 'The student writes, runs and fixes each program.' },
      { h3: 'Classes by age', p: 'Learners study only with others of a similar age.' },
      { h3: 'Straight feedback', p: 'Families are told what works and what does not yet.' },
      { h3: 'Your choice of size', p: 'A class of fifteen to twenty, or just one.' }
    ]
  },

  projectsH2: 'What our committed students have built',
  projectsLede: 'Students who stick with it make tools and games that really run. A few appear below; there are more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Families\' and students\' own words from Google, unchanged.',

  fees: {
    h2: 'Fees for Pasco learners',
    lede: 'Our plans are monthly and priced in US dollars, paid by card. The card issuer converts each charge into soles at the rate it uses that day, so the amount in soles may vary slightly.',
    free: ['A free first lesson', 'Check of English, device and connection', 'No card at this stage'],
    group: ['A class of fifteen to twenty peers', 'The same mentor each week', 'Two live lessons a week', 'Monthly, cancel at any point'],
    one: ['Only the learner and mentor', 'Lessons paced to the learner', 'Times chosen by you']
  },

  faq: {
    eyebrow: 'Pasco asks',
    h2: 'Online coding and AI classes in Pasco: what families want to know',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Lessons are live, online and only in English. The mentor speaks plainly and slowly, matches the learner\'s pace and accent, and when a learner replies in Spanish, gives the English for it; the lesson does not switch to Spanish.' },
      { q: 'Does it work from Oxapampa, Villa Rica or Puerto Bermúdez?', a: 'Yes, if the connection is steady at your chosen hour. Selva and puna are the same to an online class; the free lesson tests your line.' },
      { q: 'Does the cold or the altitude in Cerro de Pasco matter?', a: 'Not to the lesson itself. What matters is a quiet, reasonably warm spot with the device and a stable connection, used at the same time each week.' },
      { q: 'What equipment is needed?', a: 'A laptop or desktop with a keyboard for typed programming. Young children can begin block coding on a tablet. A headset helps in a busy home.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Pasco is 10 hours 30 minutes behind India throughout the year, so 07:30 in Pasco is 18:00 in India.' },
      { q: 'Is programming taught in Pasco schools?', a: 'Not as its own subject. National curriculum rules place digital skills inside every area, and the usual secundaria timetable has no programming hours.' },
      { q: 'Can university students in Cerro de Pasco join?', a: 'Yes. Python, Java and data work help in engineering, mining, environmental and business degrees. We teach alongside your course, and your university alone sets your grades.' },
      { q: 'Do you teach AI?', a: 'Yes. Teenagers and adults learn how AI systems are trained and why they make mistakes. Younger children learn the ideas with games, never through adult AI accounts.' },
      { q: 'How is payment made?', a: 'Monthly by card in US dollars, which your bank turns into soles. From India the site shows prices in rupees. The first lesson is free of charge.' },
      { q: 'Do learners get a certificate?', a: 'Courses that include one end with a certificate of completion from us. It is not a Peruvian school or university award, and no Peruvian body grants or endorses it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'See also',
    h2: 'More reading for Pasco learners',
    lede: 'Pages that learners and parents in Pasco often visit after this one.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'All our Peru guides in one place.' },
      { href: '/clases-de-programacion-para-ninos-online-peru', label: 'Programación para niños online', p: 'For Spanish-speaking parents.' },
      { href: '/learn-coding-and-english-together-peru', label: 'Coding and English together', p: 'Why the two help each other.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'A first taste of coding.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'Inside the systems teens use.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a lesson.' }
    ]
  },

  start: {
    h2: 'Start with a free class from Pasco',
    lede: 'The trial is a normal lesson in miniature: a short puzzle, a first program that runs, and a conversation in simple English. Afterwards the mentor tells you honestly whether to begin, in which course, and whether a class or private lessons would suit better.',
    readFirst: 'If you prefer to read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> follows one lesson and <a class="ag-inline-link" href="/courses">our courses</a> page shows each syllabus.',
    note: 'Lessons are live and online, always in English, taught by mentors working from India. WhatsApp reaches us fastest; write in English if you can.',
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
      { h4: 'Helpful', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: '1.8 km, not 8'
  },

  personalityCss: `
.ag-root.ag-cbj .ag-hero h1 { letter-spacing: -0.006em; max-width: 22ch; }
.ag-root.ag-cbj .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-cbj .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-cbj .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-cbj .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadros N° 1 and 3), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017; INEI Compendio Estadístico Perú 2026 (cuadros 11.5, 11.6, 11.13, 5.16, 5.22, 5.53, 5.54, 5.75); Gobierno Regional de Pasco notes on gob.pe (16 March, 30 March and 5 June 2026); Ley 28044; MINEDU Edades normativas, CNEB, ONEM 2026; UTEC OPI; EF EPI 2025; tz database. Data: Municipalidad Provincial de Pasco, Lista de Atractivos Turísticos de la Provincia de Pasco, ODC-By.',
    localProject: 'How far is each Pasco attraction, according to its own description? An original Python project on the Municipalidad Provincial de Pasco list of attractions (ODC-By, 26 rows): Version 1 matches (\\d+) km and reads 1.8 km as 8; Version 2 allows decimals and captures the starting town, giving Cerro de Pasco [1.8 ... 86.0], Oxapampa [71.0, 87.0], Villa Rica [5.0, 12.0]. Lesson family: regular expressions on free text.',
    requiredMentions: ['atractivos-pasco.csv', 'Attractions with a distance: 11 of 26', 'Oxapampa [71.0, 87.0]', 'Distances read: 11', '253,549', 'Households with an internet connection', 'Proyecto Educativo Regional (PER) Pasco', 'María Parado de Bellido', '1.8 km, not 8'],
    sources: [
      { claim: 'Department, province and district populations of Pasco, 2025, and age bands.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Cerro de Pasco city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Populated centres and altitudes of Pasco, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto19.xlsx' },
      { claim: 'Computers, internet, internet use, ECE 2025, enrolment and teachers in Pasco and Peru.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'Proyecto Educativo Regional (PER) Pasco formulation.', url: 'https://www.gob.pe/institucion/regionpasco/noticias/1381078-reunion-en-el-marco-del-proceso-de-formulacion-del-proyecto-educativo-regional-per-pasco' },
      { claim: 'New building for the I.E.E. María Parado de Bellido, start of the 2026 school year.', url: 'https://www.gob.pe/institucion/regionpasco/noticias/1368271-inicio-del-ano-escolar-inauguracion-de-la-i-e-e-maria-parado-de-bellido' },
      { claim: 'Ecoferia Estudiantil for secundaria pupils, June 2026.', url: 'https://www.gob.pe/institucion/regionpasco/noticias/1409246-concurso-ecoferia-estudiantil' },
      { claim: 'List of tourist attractions of the province of Pasco, ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/lista-de-atractivos-tur%C3%ADsticos-de-la-provincia-de-pasco' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 score for Peru and its scored regions.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without daylight saving.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Travel times as facts: they are the council\'s approximations, used only as a further exercise.',
      'The CODIGO_UBIGEO column as a location: it reads 190101 on every row and is ignored.',
      'Private names that appear inside some descriptions: never printed.',
      'Comparing 2017 town figures with 2025 district figures, or the 58,899 city figure with the 25,600 centro poblado figure as growth: refused.',
      'A regional English score: EF does not score Pasco.',
      'Political names in the regional notes: left out.',
      'Any connection with GORE Pasco, the provincial council, the DRE, MINEDU, UTEC or any school: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
