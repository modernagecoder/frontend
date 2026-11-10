// SHIP: market (region) | Amazonas: Chachapoyas up high, Bagua Grande and Nieva low, schools from 174 m to 4,050 m | binning with edges: < and > drop the values on a boundary; bisect_right and a total check
'use strict';
// Online coding and AI classes, Amazonas region, Peru (ag- region page, Peru cluster row PE178; alloc: regions, cbe, #846313).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: flexible hours; USD only via
// data-price anchors.
// Spine: Amazonas (the Peruvian department, not the Brazilian state) has a small, high capital, Chachapoyas, while its
// largest districts are lowland ones: Bagua Grande, Imaza and Nieva. Its own school register spans 174 to 4,050 metres above
// sea level, which makes it a natural lesson in sorting numbers into bands without losing the ones on the edges. EF gives no
// regional English score and fewer than a quarter of homes own a computer, so teenagers and adults come first.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-amazonas-region-peru/
// and the shared ../src/inei/ folder):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1: AMAZONAS 467688; provinces CHACHAPOYAS 65528,
//    BAGUA 95858, BONGARÁ 26783, CONDORCANQUI 82416, LUYA 48322, RODRÍGUEZ DE MENDOZA 33854, UTCUBAMBA 114927; districts
//    BAGUA GRANDE 55619, IMAZA 45503, NIEVA 42522, CHACHAPOYAS 40953, BAGUA 28597, CAJARURO 24194, RÍO SANTIAGO 22704, EL
//    CENEPA 17190. Capital Chachapoyas (Compendio 2026 cuadro 1.8). Never summed.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Chachapoyas city 32,026 (2017). Lib1541 dpto01 (single centro poblado, 2017):
//    BAGUA GRANDE 32519, CHACHAPOYAS 32026 (altitude 2 483, region Quechua), BAGUA 24224.
//  - INEI Compendio Estadístico Perú 2026 tomo 1 (ENAHO): 11.5 Amazonas "18,0 20,1 21,8 20,7 21,0 20,6 20,8 23,0 23,7 23,6
//    23,7"; 11.6 "7,2 11,0 14,5 16,3 24,0 28,0 36,6 40,9 40,8 42,0 46,3"; 11.13 "19,7 21,8 25,5 26,1 33,6 45,1 55,1 53,9 59,5
//    64,3 68,1" (2015 to 2025). Peru 2025: 33,9 / 56,8 / 81,1.
//  - EF EPI 2025 (ef_peru.raw): Peru 519; Regions list of 15 has no Amazonas entry (the only "Amazonas" string is Brazil's
//    state in a global dimension list).
//  - DRE Amazonas on gob.pe, 1 September 2026 (n 1445691): ONEM – Aceros Arequipa 2026 regional round "Este jueves 3 de
//    septiembre, a las 10:00 a. m."; "nueve sedes: Chachapoyas Rodríguez de Mendoza Pomacochas Bagua Grande Bagua Santa
//    María de Nieva Imazita Huampami Puerto Galilea"; for pupils "que lograron clasificar en la etapa UGEL". 9 September 2026
//    (n 1445741): UGEL Chachapoyas stage of "la XXXVI Feria Escolar Nacional de Ciencia y Tecnología EUREKA 2026".
//  - Ley 28044, Edades normativas, CNEB competency 28 and JER hours, MINEDU 2026 opening, Fábrica de Programadores, ONEM
//    2026, OPI (FACTS 5, 6, 13, 14, 17, 32, 33, 39, 45, 99, 105, 111). Time: tzdata.
//  - Data: Gobierno Regional Amazonas (GORE Amazonas), "Instituciones Educativas Amazonas 2026", datosabiertos.gob.pe,
//    "Open Data Commons Attribution License" (ODC-By), released 24 August 2026, modified 27 August 2026. File
//    INSITUCIONES EDUCATIVAS_AMAZONAS.csv (saved as ie-amazonas-2026.csv), 692,024 bytes, Latin-1, semicolons, 3,211 rows;
//    10 DRE/UGEL codes; Nivel / Modalidad: Primaria 1,306, Inicial - Jardín 915, Inicial No Escolarizado 532, Secundaria 341;
//    Altitud filled on every row, 174 to 4,050; exactly 500 on 3 rows, 1500 on 1, 2500 on 1. School names and addresses are
//    in the file and are not printed.
// Our own calculations (scratchpad pe/r4/am/v1.py, v2.py, python3 -I):
//  v1 prints: "{'below 500 m': 1133, '500 to 1,500 m': 897, '1,500 to 2,500 m': 965, '2,500 m and up': 211}" / "Rows: 3211
//    Counted: 3206".
//  v2 prints: "below 500 m 1133 rows, 122 secundaria" / "500 to 1,500 m 900 rows, 89 secundaria" / "1,500 to 2,500 m 966
//    rows, 115 secundaria" / "2,500 m and up 212 rows, 15 secundaria".
// Lesson family: binning numbers into bands. Strict < and > on both sides lose the values that sit exactly on an edge;
// half-open bands with bisect.bisect_right put every value somewhere, and an assert on the total proves it.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'bands = {"below 500 m": 0, "500 to 1,500 m": 0, "1,500 to 2,500 m": 0, "2,500 m and up": 0}',
  'with open("ie-amazonas-2026.csv", encoding="latin-1", newline="") as f:',
  '    rows = list(csv.DictReader(f, delimiter=";"))',
  '',
  'for row in rows:',
  '    alt = int(row["Altitud"])',
  '    if alt < 500:',
  '        bands["below 500 m"] += 1',
  '    elif 500 < alt < 1500:',
  '        bands["500 to 1,500 m"] += 1',
  '    elif 1500 < alt < 2500:',
  '        bands["1,500 to 2,500 m"] += 1',
  '    elif alt > 2500:',
  '        bands["2,500 m and up"] += 1',
  '',
  'print(bands)',
  'print("Rows:", len(rows), "Counted:", sum(bands.values()))'
].join('\n');

const V2 = [
  'import csv',
  'from bisect import bisect_right',
  '',
  'EDGES = [500, 1500, 2500]',
  'NAMES = ["below 500 m", "500 to 1,500 m", "1,500 to 2,500 m", "2,500 m and up"]',
  'counts = [0, 0, 0, 0]',
  'secondary = [0, 0, 0, 0]',
  '',
  'with open("ie-amazonas-2026.csv", encoding="latin-1", newline="") as f:',
  '    rows = list(csv.DictReader(f, delimiter=";"))',
  '',
  'for row in rows:',
  '    band = bisect_right(EDGES, int(row["Altitud"]))',
  '    counts[band] += 1',
  '    if row["Nivel / Modalidad"] == "Secundaria":',
  '        secondary[band] += 1',
  '',
  'assert sum(counts) == len(rows), "a row fell between the bands"',
  'for name, n, s in zip(NAMES, counts, secondary):',
  '    print(name, n, "rows,", s, "secundaria")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Amazonas region' },
  slug: 'online-coding-and-ai-classes-amazonas-region-peru',
  code: 'cbe',
  accent: '#846313',
  accentRationale: 'Amazonas region: a cloud-forest earth ochre #846313, the clay walls of Kuélap above the Utcubamba valley, allocated to this row; contrast 5.25 on #FBF8F2, 4.93 on #F5F1E8 and 4.51 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Amazonas region, Peru',
  title: 'Amazonas Region, Peru: Online Coding and AI Classes in English',
  description: 'Live online coding and AI classes in English for Amazonas, Peru: who they suit, census and home-computer figures, and a Python project on school altitudes.',
  ogDescription: 'Coding, AI and maths for learners in Chachapoyas, Bagua Grande, Bagua, Nieva and the rest of Peru\'s Amazonas region, taught live online in English: seven provinces in 2025 census figures, honest notes on English and computers, and a Python project on the regional school register.',
  twitterDescription: 'Amazonas, Peru: live online coding in English, who it suits, census facts and a school-altitude Python project.',
  pageName: 'Online Coding and AI Classes in the Amazonas Region',
  webPageDescription: 'A guide for learners in the Amazonas region of Peru to live online coding and AI classes taught in English, built from INEI census and ENAHO tables, DRE Amazonas notes, MINEDU curriculum sources and an original Python project on the GORE Amazonas register of educational institutions for 2026 (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Amazonas region of Peru: blocks and reasoning for children, Python, Java and app building for secundaria students, Python, data and databases for university students and adults, as a group of fifteen to twenty or one to one, at hours the learner chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Amazonas region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#ready', label: 'Is it for us?' },
    { href: '#seven', label: 'Provinces' },
    { href: '#altitude', label: 'Altitude project' },
    { href: '#equipment', label: 'Equipment' },
    { href: '#hour', label: 'Hours' }
  ],
  eyebrow: 'Amazonas, Peru &middot; Live online, in English &middot; Teenagers and adults first',
  h1: 'Online coding and AI classes in the Amazonas region of Peru',
  lede: 'Peru\'s Amazonas runs from the cool valleys around Chachapoyas down to the warm rivers of Bagua, Imaza and Nieva, and its schools sit anywhere between about 170 and 4,000 metres above the sea. Our classes reach any of them in the same way: live, online and in English. This page gives the census picture, explains frankly where English and home computers make the classes hard, and turns the regional school register into a short lesson on sorting numbers into bands.',
  secondaryCta: { href: '#altitude', label: 'See the altitude project' },
  wa: 'Hello Modern Age Coders, I am in the Amazonas region of Peru. Would your live coding classes in English suit me or my child? We would like a free class.',
  heroNote: 'Live online teaching since 2020 &middot; 10,000+ students across many countries &middot; mentors who slow down for new English speakers',
  spec: [
    ['Most suited to', 'Secundaria students, university students and adults with some English'],
    ['Young children', 'From six, often privately'],
    ['Taught in', 'English, at a gentle pace'],
    ['Formats', 'Fifteen to twenty together, or one'],
    ['Timing', 'Set by the learner'],
    ['To begin', 'A free class that checks English and equipment']
  ],
  capsuleQ: 'Short answer',
  capsule: 'Learners anywhere in the Amazonas region of Peru, from Chachapoyas and Bagua Grande to Bagua, Rodríguez de Mendoza and Nieva, can study coding, AI and maths live online in English with Modern Age Coders. Secundaria pupils, university students and adults who read a little English benefit most: Python, Java, apps, data and AI with a mentor on a live call. Children aged six and over can start with blocks, usually in private lessons. Pick a group of fifteen to twenty or one to one, at hours you decide; the first class is free.',

  picks: {
    eyebrow: 'Starting points in Amazonas',
    h2: 'Three courses Amazonas learners usually begin with',
    lede: 'Two for older learners, where English-taught lessons fit most easily, and one gentle start for younger children.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'AMZ / 01', title: 'Python for Teens', note: 'For secundaria students from scratch. Clean, readable code whose keywords are everyday English words, so both skills move forward together.' },
      { course: 'data-analysis-mastery-course-college', code: 'AMZ / 02', title: 'Data Analysis', note: 'Aimed at undergraduates and working people: cleaning and summarising real tables in a spreadsheet, in SQL and in Python, just like the school register further down.' },
      { course: 'scratch-programming-complete-course', code: 'AMZ / 03', title: 'Scratch Programming', note: 'For children from about six. Drag-and-drop blocks mean little reading and no typing while English is still new.' }
    ]
  },

  sections: [
    {
      id: 'ready',
      eyebrow: 'First question',
      h2: 'Can a learner in Amazonas manage classes taught in English?',
      lede: 'Many teenagers and adults can, with a careful start. Young children from Spanish-only homes usually need private lessons. Every lesson is live, online and in English, never in Spanish, which is why we look at English and devices before anything else.',
      body: [
        { kind: 'two',
          leftH3: 'What we know about English here',
          left: [
            'EF\'s 2025 English Proficiency Index gives Peru 519 (moderate) and scores fifteen of its regions separately. Amazonas is missing from that list, so we have no regional number to quote.',
            'The regular secundaria timetable gives Inglés three weekly hours from first to fifth grade. A teenager in Bagua Grande or Chachapoyas has therefore had years of lessons, though confidence in speaking varies widely.'
          ],
          rightH3: 'Learners who tend to settle quickly',
          right: [
            'Teenagers who enjoy English and want to use it for something real. Students at the region\'s universities and institutes, who already read documentation and error messages in English. Adults whose work brings English messages or manuals.',
            'A child of six to nine is welcome too. In a private lesson the mentor can repeat, point, demonstrate on the screen and wait, and a young learner can answer by building rather than by speaking.'
          ] },
        { kind: 'p', mt: true, html: 'Treat the free class as a test drive. The mentor gives a small task in plain English and sees how the learner gets on. If the language is a real barrier today, you will hear that directly, with an alternative such as private lessons or a later start. Parents who prefer to read in Spanish can open <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">our guide for Spanish-speaking families</a>, and teenagers can compare paths on <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding classes for teenagers in Peru</a>.' }
      ]
    },
    {
      id: 'seven',
      tint: 'tint',
      eyebrow: 'Seven provinces',
      h2: 'How many people live in the Amazonas region of Peru?',
      lede: 'INEI counted 467,688 people in the department of Amazonas in its 2025 census, across seven provinces. Utcubamba, with Bagua Grande, is the largest; Chachapoyas, the capital\'s province, is fourth.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Amazonas province populations in the 2025 census', head: ['Province', 'Population, 2025'], rows: [
          ['Utcubamba', '114,927'],
          ['Bagua', '95,858'],
          ['Condorcanqui', '82,416'],
          ['Chachapoyas (capital: Chachapoyas)', '65,528'],
          ['Luya', '48,322'],
          ['Rodríguez de Mendoza', '33,854'],
          ['Bongará', '26,783'],
          ['Department of Amazonas', '467,688']
        ] },
        { kind: 'source', html: 'INEI, Censos Nacionales 2025, demographic indicators file, Cuadro N° 1, which reports población total (people counted plus those estimated as missed) at 15 September 2025. All eight figures are published by INEI; the department total is not a sum we made.' },
        { kind: 'two', mt: true,
          leftH3: 'A small capital, high up',
          left: [
            'INEI\'s 2017 census counted 32,026 people in the city of Chachapoyas, and its directory of populated centres records the town at 2,483 metres. In 2025 the district of Chachapoyas had 40,953 people.',
            'Those are a 2017 city figure and a 2025 district figure, measuring different areas in different years, so we show both and compare neither.'
          ],
          rightH3: 'The larger lowland districts',
          right: [
            'The biggest districts in 2025 were Bagua Grande with 55,619 people, Imaza with 45,503 and Nieva with 42,522. Bagua district had 28,597 and Cajaruro 24,194.',
            'In 2017 the town of Bagua Grande counted 32,519 people and Bagua 24,224, as single populated centres. For a teenager in any of these places, a live lesson at home replaces a long trip to a city with a coding school.'
          ] }
      ]
    },
    {
      id: 'altitude',
      eyebrow: 'An Amazonas data project',
      h2: 'At what altitude are the schools in Amazonas?',
      lede: 'The regional school register gives an altitude for every entry, from 174 to 4,050 metres. Sorting them into height bands looks like a five-minute job. Done carelessly, it quietly loses five rows, and the way it loses them is worth learning.',
      body: [
        { kind: 'two',
          leftH3: 'The register',
          left: [
            'The Gobierno Regional Amazonas publishes "Instituciones Educativas Amazonas 2026" on datosabiertos.gob.pe under the Open Data Commons Attribution licence (ODC-By): free to reuse, including commercially, as long as the source is named. It was released on 24 August 2026 and modified on 27 August 2026.',
            'Our copy, ie-amazonas-2026.csv, has 3,211 rows, one per school level or programme, with ten education offices, a level such as Primaria or Secundaria, coordinates and an altitude in metres. It also holds names and addresses, which this lesson never prints.'
          ],
          rightH3: 'The plan',
          right: [
            'Split the altitudes into four bands: below 500 metres, 500 to 1,500, 1,500 to 2,500, and 2,500 and up. Count the rows in each, and separately count the secundaria rows, because those are the pupils closest to our teenage courses.',
            'A good program should be able to prove that it counted every row exactly once. That is the check most first attempts skip.'
          ] },
        { kind: 'code', label: 'Version 1: an if chain with strict comparisons', lang: 'Python', code: V1, note: 'It prints: <code>{\'below 500 m\': 1133, \'500 to 1,500 m\': 897, \'1,500 to 2,500 m\': 965, \'2,500 m and up\': 211}</code> and <code>Rows: 3211 Counted: 3206</code>.' },
        { kind: 'p', mt: true, html: 'Five rows vanished, and no error appeared. Look at the conditions: <code>alt &lt; 500</code>, then <code>500 &lt; alt &lt; 1500</code>. A school at exactly 500 metres is not less than 500, and it is not more than 500 either, so it falls through every branch and is never counted. The register has three rows at exactly 500 metres, one at 1,500 and one at 2,500. The bug is invisible unless the program compares its total with the number of rows, which Version 1 only does because we added that last line.' },
        { kind: 'code', label: 'Version 2: half-open bands with bisect, and an assert', lang: 'Python', code: V2, note: 'It prints: <code>below 500 m 1133 rows, 122 secundaria</code>, <code>500 to 1,500 m 900 rows, 89 secundaria</code>, <code>1,500 to 2,500 m 966 rows, 115 secundaria</code> and <code>2,500 m and up 212 rows, 15 secundaria</code>.' },
        { kind: 'p', mt: true, html: 'Version 2 describes the bands by their edges only, <code>[500, 1500, 2500]</code>, and lets <code>bisect_right</code> find the band. It returns how many edges are less than or equal to the altitude, so 499 gives band 0, 500 gives band 1, and 4,050 gives band 3. Every band now includes its lower edge and excludes its upper one, which means each possible altitude has exactly one home. The <code>assert</code> line turns "I think I counted everything" into something the computer checks; if a future edit breaks it, the program stops with a message instead of printing a wrong table.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Rows in the Amazonas school register by altitude band, 2026 file (our calculation)', head: ['Altitude band', 'All rows', 'Secundaria rows'], rows: [
          ['Below 500 m', '1,133', '122'],
          ['500 m to under 1,500 m', '900', '89'],
          ['1,500 m to under 2,500 m', '966', '115'],
          ['2,500 m and above', '212', '15'],
          ['All rows', '3,211', '341']
        ] },
        { kind: 'source', html: 'Data: Gobierno Regional Amazonas, Instituciones Educativas Amazonas 2026, ODC-By. Counts are ours. A row is one level or programme at one site, not a whole school, and altitudes come from several measuring methods named in the file\'s own "Fuente de coordenadas" column.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8.</strong> Draw three boxes labelled "short", "medium" and "tall", with a rule that a child exactly 120 cm tall goes in "medium". Where does each classmate go? Did anyone end up with no box?',
          '<strong>Ages 8 to 11, in Scratch.</strong> Ask for a number and say which band it is in. Test it with 499, 500 and 501 before you trust it.',
          '<strong>Ages 11 to 13.</strong> Rewrite Version 1 using <code>&lt;=</code> so it counts all 3,211 rows, then explain why Version 2 needs no comparisons at all.',
          '<strong>Teenagers.</strong> Add a fifth edge at 3,500 metres. How many rows move, and does the assert still pass?',
          '<strong>University and adults.</strong> Group by the "Fuente de coordenadas" column. Do rows measured by GPS sit at different altitudes from rows located from a web map?'
        ] },
        { kind: 'p', mt: true, html: 'Edges cause trouble far beyond altitude: ages on a birthday, marks on a grade boundary, prices at a threshold. Writing bands as edges and checking the total is a habit that protects all of them, and it is the kind of reasoning our page on <a class="ag-inline-link" href="/learn-to-think-not-copy-coding-peru">thinking rather than copying</a> argues for.' }
      ]
    },
    {
      id: 'lessons',
      eyebrow: 'In school',
      h2: 'Do schools in Amazonas teach programming?',
      lede: 'Not as a separate subject. The region follows Peru\'s national curriculum, where technology appears inside every area instead of having its own timetable slot. The regional education office\'s 2026 news is about contests and fairs.',
      body: [
        { kind: 'two',
          leftH3: 'National rules',
          left: [
            'Ley 28044 fixes six years of primaria and five of secundaria. MINEDU uses a child\'s age on 31 March to choose the grade, so six year olds start primaria and the normative age for fifth of secundaria is sixteen.',
            'ICT is the CNEB\'s competency 28 and is transversal, shared by all areas. A regular secundaria week has 35 hours, with four of Matemática and three of Inglés, and no programming slot.'
          ],
          rightH3: 'The DRE Amazonas in 2026',
          right: [
            'On 1 September 2026 the Dirección Regional de Educación Amazonas announced that pupils who had qualified at UGEL level would sit the ONEM 2026 regional round on 3 September at nine venues, from Chachapoyas and Pomacochas to Santa María de Nieva and Puerto Galilea.',
            'On 9 September 2026 it reported UGEL Chachapoyas running its stage of EUREKA 2026, the 36th national school science and technology fair, where pupils present research and technology projects.'
          ] },
        { kind: 'p', mt: true, html: 'MINEDU\'s Python pilot, Fábrica de Programadores, began in July 2025 with 1,000 secundaria pupils in Lima Norte; we found no sign of it in Amazonas. Across Peru, more than 1.7 million secundaria pupils took part in ONEM 2026, whose first round was held in schools on 8 July 2026, and UTEC\'s computing olympiads are free. We are not part of the DRE, MINEDU, UTEC or any contest, and our practice problems are our own.' }
      ]
    },
    {
      id: 'equipment',
      eyebrow: 'Devices',
      h2: 'Do homes in Amazonas have computers and internet?',
      lede: 'Fewer than a quarter had a computer in 2025, and fewer than half had an internet service, on INEI\'s household survey. Internet use, mostly by phone, has risen much faster.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Amazonas and Peru: home computers and internet, ENAHO (per cent)', head: ['Indicator', 'Amazonas 2022', 'Amazonas 2025', 'Peru 2025'], rows: [
          ['Households with a computer', '23.0', '23.7', '33.9'],
          ['Households with internet access', '40.9', '46.3', '56.8'],
          ['Residents aged 6+ online', '53.9', '68.1', '81.1']
        ] },
        { kind: 'source', html: 'INEI, Compendio Estadístico Perú 2026, tomo 1: cuadro 11.5 (computers), 11.6 (internet service) and 11.13 (internet use), all from ENAHO. We print decimal points where INEI uses commas.' },
        { kind: 'two', mt: true,
          leftH3: 'The trend in three years',
          left: [
            'Between 2022 and 2025 the share of Amazonas residents online rose from 53.9 to 68.1 per cent, and home internet from 40.9 to 46.3. Home computers barely moved, from 23.0 to 23.7.',
            'So the gap that matters for programming is the keyboard, not the signal.'
          ],
          rightH3: 'Our advice',
          right: [
            'A tablet is fine for a young child dragging blocks. From about nine, when code is typed, a laptop or desktop is needed for most of each lesson.',
            'Families often share one laptop between children on set days, and university students can use a faculty computer room. If there is no regular access to a computer, the free class is where we will say that waiting makes more sense.'
          ] }
      ]
    },
    {
      id: 'path',
      eyebrow: 'Which course',
      h2: 'Which course suits a learner in Amazonas?',
      lede: 'Look at age and English first, then at the computer. These suggestions and age ranges are ours.',
      body: [
        { kind: 'table', numCols: [], caption: 'A first course for each kind of Amazonas learner (our suggestions)', head: ['Learner', 'English level', 'Start with', 'Format'], rows: [
          ['Child, 6 to 8', 'Just starting', 'Reasoning puzzles, then Scratch', 'Private'],
          ['Child, 8 to 12', 'From school lessons', 'Scratch first, Python and AI for kids after', 'Group or private'],
          ['Early secundaria', 'Basic', 'Python for Teens', 'Group'],
          ['Late secundaria', 'Reads well', 'Python, then Java or app building', 'Group'],
          ['University student', 'Reads technical texts', 'Data analysis or Java', 'Group or private'],
          ['Working adult', 'Any', 'Python from the beginning', 'Often private']
        ] },
        { kind: 'source', html: 'Our suggestions. Grades depend on age at 31 March, so pupils in one grade can be up to a year apart.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Younger children', p: 'Short, visual lessons; each click on screen comes with its English word, said aloud.' },
          { h3: 'Teenagers', p: 'Real typed code from the first lesson, moving from Python to Java, apps or data.' },
          { h3: 'Adults', p: 'Programming and data skills for study or work, planned around the rest of life.' }
        ] },
        { kind: 'p', mt: true, html: 'Undergraduates will find more on <a class="ag-inline-link" href="/coding-courses-for-university-students-peru">our page for Peruvian university students</a>, and our <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru hub</a> indexes every page in this series.' }
      ]
    },
    {
      id: 'hour',
      eyebrow: 'Clock',
      h2: 'When could a learner in Chachapoyas or Bagua have a class?',
      lede: 'At an hour you choose. All of Amazonas keeps Peru time, and the mentor in India fits the lesson to it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example conversions, Amazonas time to India time (illustrations only)', head: ['Amazonas', 'India', 'Mentor\'s time of day'], rows: [
          ['06:30', '17:00', 'Late afternoon'],
          ['09:30', '20:00', 'Evening'],
          ['12:00', '22:30', 'Late evening'],
          ['15:30', '02:00', 'Night'],
          ['17:30', '04:00', 'Early hours'],
          ['21:30', '08:00', 'Next morning']
        ] },
        { kind: 'source', html: 'Peru keeps UTC minus 5 hours year round (tz database zone America/Lima, no daylight saving since 1994); India keeps UTC plus 5 hours 30 minutes. India is therefore always 10 hours 30 minutes ahead.' },
        { kind: 'p', mt: true, html: 'Since no clocks change on either side, an hour set once stays the same all year. You book in your own time zone. Peru\'s 2026 school year started on 16 March 2026, and families often begin during the January to March holidays; adults start whenever suits them.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'How a learner in Amazonas moves up',
    lede: 'Our own six stages, used for every age, so families can see what has been mastered and what comes next.',
    table: { caption: 'Our stages, from first instructions to checked totals', head: ['Stage', 'Usual age', 'What the learner can do'], rows: [
      ['1. Instruct', '6 to 7', 'Tell a character what to do, one step at a time'],
      ['2. Repeat', '7 to 9', 'Use a loop instead of copying steps'],
      ['3. Decide', '8 to 10', 'Choose between two actions with if'],
      ['4. Code', '9 to 12', 'Write Python with variables, loops and lists'],
      ['5. Band', '11 to adult', 'Sort values into ranges without losing the edges'],
      ['6. Prove', '13 to adult', 'Check a result with an assert before reporting it']
    ] },
    left: { h3: 'For families', ps: [
      'The altitude project trains stages 5 and 6: putting numbers in ranges and proving nothing was dropped.',
      'Every month you receive a note on what your child built.'
    ] },
    right: { h3: 'For learners', ps: [
      'Test the edge, not just the middle.',
      'If the total does not match, something is missing.'
    ] }
  },

  catalogue: {
    eyebrow: 'Also available',
    h2: 'Nine more courses for Amazonas learners',
    lede: 'Grouped into children, teenagers and adults; each is a live course in English with a mentor who stays with the learner.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'AMZ / KIDS / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Patterns and logic for ages 6 to 9.' },
        { code: 'AMZ / KIDS / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Blocks to games and simple apps.' },
        { code: 'AMZ / KIDS / 03', slug: 'block-coding-app-development-masterclass', title: 'App making with blocks', blurb: 'Phone apps without typing.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'AMZ / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented programming, step by step.' },
        { code: 'AMZ / TEEN / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Real mobile apps with React Native.' },
        { code: 'AMZ / TEEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'From Python to working models.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'AMZ / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Zero to confident, with projects.' },
        { code: 'AMZ / ADULT / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'Database design and queries.' },
        { code: 'AMZ / ADULT / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'Excel, Sheets and Power BI.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Practicalities',
    h2: 'What a week of online lessons looks like from Amazonas',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early start', l: 'A Chachapoyas morning is evening in India.' },
      { time: 'After school', l: 'Afternoon and evening lessons in Peru are possible too.' },
      { time: 'One learner', l: 'Recommended while English is still fragile.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'One teacher who gets to know the learner.' },
      { h3: 'Unhurried English', p: 'Short phrases, with key words typed on screen.' },
      { h3: 'Learner drives', p: 'Students write, run and fix the code themselves.' },
      { h3: 'Separate ages', p: 'Children, teens and adults have their own groups.' },
      { h3: 'Plain updates', p: 'Parents hear honestly how it is going.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or only one.' }
    ]
  },

  projectsH2: 'Work by students who kept going',
  projectsLede: 'With time, students build programs that other people can use. Some appear below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> show plenty more.',
  reviewsLede: 'Google reviews by parents and learners, reproduced as posted.',

  fees: {
    h2: 'Fees for learners in Amazonas',
    lede: 'Fees are in US dollars and charged monthly to a card. Your bank works out the soles amount at its own exchange rate when it pays, so that figure may differ slightly between months.',
    free: ['One free class', 'English and equipment check', 'No card required'],
    group: ['Fifteen to twenty learners near in age', 'A regular mentor', 'Live sessions each week', 'Monthly, stop any time'],
    one: ['A learner on their own', 'Slower pace where English is new', 'Hours of your choosing']
  },

  faq: {
    eyebrow: 'Amazonas asks',
    h2: 'Online coding and AI classes in Amazonas, Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our lessons are live online sessions taught only in English. Mentors talk slowly and clearly, keep to the learner\'s own pace, get used to their accent, and when a child replies in Spanish they model the English words, but they never switch the class to Spanish.' },
      { q: 'Is this the Amazonas in Peru or in Brazil?', a: 'Peru. This page is about the Peruvian department of Amazonas, whose capital is Chachapoyas, with Bagua Grande, Bagua and Nieva among its largest districts.' },
      { q: 'Is there an English score for Amazonas?', a: 'EF\'s 2025 index scores Peru at 519 and lists fifteen regions; Amazonas is not one of them. We judge each learner individually in the free class instead.' },
      { q: 'We live in Nieva, Imaza or Rodríguez de Mendoza. Can we join?', a: 'Yes. A learner anywhere in the region joins the same live lesson, provided the connection lasts the hour and there is a computer or, for young children, a tablet.' },
      { q: 'Is a tablet enough?', a: 'A tablet suits a young child moving blocks around. Once a learner types real code, from roughly nine, we need a keyboard and a larger screen, since writing and fixing code fills most of the hour.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. The whole region sits 10 hours 30 minutes behind India in every season: 09:30 in Chachapoyas is 20:00 in India.' },
      { q: 'Is programming taught in Amazonas schools?', a: 'Not as its own subject. The national curriculum asks every area to develop digital skills, and the regular secundaria week has no hours for programming.' },
      { q: 'Do you teach AI to children?', a: 'Children learn what AI is through simple, safe projects, and nobody under 13 uses adult chatbot accounts with us. Teenagers and adults go further, building and testing small models.' },
      { q: 'How is payment made?', a: 'A monthly card payment in US dollars; the conversion to soles is made by your bank. Someone visiting the site from India is shown rupees instead. You pay nothing for the first class.' },
      { q: 'Do learners receive a certificate?', a: 'Where the course provides one, it is our own certificate of completion, listing the projects finished. MINEDU, the DRE and schools neither issue nor endorse it, and it does not count as a Peruvian qualification.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Related pages for Amazonas families',
    lede: 'Guides by age or subject for the next step.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Peru\'s overview page, linking every guide.' },
      { href: '/coding-classes-for-teens-peru', label: 'Coding classes for teens in Peru', p: 'Choices for secundaria pupils.' },
      { href: '/clases-de-programacion-para-ninos-online-peru', label: 'Programación para niños, en español', p: 'For Spanish-speaking parents.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Learning to code as a grown-up.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages for common AI tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a lesson.' }
    ]
  },

  start: {
    h2: 'Book a free class from Amazonas',
    lede: 'The free class is a small puzzle, a first program and a short conversation in simple English. At the end the mentor tells you honestly whether to begin now, with which course, and which format, group or individual, looks right.',
    readFirst: 'To learn more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> for a full lesson and <a class="ag-inline-link" href="/courses">all courses</a> for every syllabus.',
    note: 'Every lesson is live and online, in English, with a mentor based in India. Messages on WhatsApp in English are answered soonest.',
    formNote: 'Free, without a card, and with no pressure afterwards.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'More to read', links: [
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Test the edge, then trust the total'
  },

  personalityCss: `
.ag-root.ag-cbe .ag-hero h1 { letter-spacing: -0.012em; max-width: 22ch; }
.ag-root.ag-cbe .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-cbe .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-cbe .ag-table caption { text-align: left; letter-spacing: 0.01em; }
.ag-root.ag-cbe .ag-code-head b { letter-spacing: 0.06em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro N° 1), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017; INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); DRE Amazonas notes of 1 and 9 September 2026; Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, ONEM 2026; UTEC OPI; EF EPI 2025; tz database. Data: GORE Amazonas, Instituciones Educativas Amazonas 2026, ODC-By.',
    localProject: 'At what altitude are the schools in Amazonas? An original Python project on the GORE Amazonas register Instituciones Educativas Amazonas 2026 (ODC-By): Version 1 uses strict comparisons and counts 3,206 of 3,211 rows because rows at exactly 500, 1,500 and 2,500 metres fall through; Version 2 uses half-open bands with bisect_right and an assert, and counts 1,133 / 900 / 966 / 212 rows (122 / 89 / 115 / 15 secundaria). Lesson family: binning with edges.',
    requiredMentions: ['ie-amazonas-2026.csv', 'Rows: 3211 Counted: 3206', 'below 500 m 1133 rows, 122 secundaria', '2,500 m and up 212 rows, 15 secundaria', '467,688', 'bisect_right', 'nine venues', 'Test the edge, then trust the total', 'EUREKA 2026'],
    sources: [
      { claim: 'Department, province and district populations of Amazonas, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Chachapoyas city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Bagua Grande, Bagua and Chachapoyas populated centres and altitude, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto01.xlsx' },
      { claim: 'Computers, internet service and internet use in Amazonas and Peru, 2022 and 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'ONEM 2026 regional round in Amazonas, nine venues.', url: 'https://www.gob.pe/institucion/regionamazonas-dre/noticias/1445691-estudiantes-clasificados-rendiran-la-onem-aceros-arequipa-2026' },
      { claim: 'EUREKA 2026 UGEL Chachapoyas stage.', url: 'https://www.gob.pe/institucion/regionamazonas-dre/noticias/1445741-ugel-chachapoyas-desarrolla-etapa-ugel-de-eureka-2026' },
      { claim: 'Instituciones Educativas Amazonas 2026, ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/instituciones-educativas-amazonas-2026' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative ages at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'ONEM 2026 national participation.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'EF EPI 2025 Peru score and regional list.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without daylight saving.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'An Amazonas English score: EF EPI 2025 publishes none.',
      'Treating a register row as a whole school: rows are levels or programmes at a site, and the page says so.',
      'School names, addresses or UGEL-level comparisons of language or ethnicity: not printed.',
      'Comparing Chachapoyas city in 2017 with the district in 2025: refused.',
      'Any Fábrica de Programadores activity in Amazonas: none found, none claimed.',
      'Any connection with GORE Amazonas, the DRE, MINEDU, UTEC or any school: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
