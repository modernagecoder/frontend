// SHIP: market (region) | Ica region: well-connected desert coast, a new talent programme, live classes in English | row shape before counting: a block of rows slid two columns right
'use strict';
// Online coding and AI classes, Ica region, Peru (ag- region page, Peru cluster row PE171; alloc: regions, cair, #5E5B00).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any hour;
// fees in USD only, through the template's data-price anchors.
// Spine: Ica homes are better equipped and better connected than the Peruvian average (INEI ENAHO 2025), and the DRE Ica
// opened a programme for highly able pupils in April 2026. So the page treats Ica families as ready to start, and teaches
// with a SENASA export file from the region whose rows do not all have the same shape.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-ica-region-peru/,
// national school facts from pe/facts-school/src; every quote string-matched in the raw file):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro 1 (src/inei/tab/tsv_ind_00/sheet2_CUADRO_N_1.tsv):
//    ICA 1033084 (población total, census day 15 September 2025); provinces ICA 475739, CHINCHA 271200, PISCO 176010,
//    NASCA 94113, PALPA 16022. Capital Ica (Compendio 2026 cuadro 1.8, places.tsv). Never summed.
//  - Same file, Cuadro 3 (población censada by age): ICA 1016682 censada; De 6 a 11 años 105823; De 12 a 17 años 107343.
//  - INEI Lib1539 Cuadro 1.9 (places.tsv): Ica city 282,407 (2017, población censada, conglomerate).
//  - INEI Lib1541 dpto11.xlsx (single centros poblados, 2017): CHINCHA ALTA 66349, PUEBLO NUEVO 62604, PISCO 61518,
//    NASCA 22859. Chincha Alta and Pueblo Nuevo are separate centres and are never added.
//  - INEI Compendio Estadístico Perú 2026 tomo 1: cuadro 11.5 computer households Ica "38,1 35,3 39,6 40,7 39,3 34,6 35,7
//    38,1 37,6 37,3 36,9", Total "... 34,1 33,9"; cuadro 11.6 internet households Ica "... 63,7 64,3 69,0 69,1", Total
//    "... 55,5 56,8"; cuadro 11.13 internet use 6+ Ica "... 83,6 86,7 87,1 89,1", Total "... 79,4 81,1". Cuadros 5.16, 5.17,
//    5.22, 5.23 (MINEDU Censo Educativo, thousands): Ica primaria pública 85,4, privada 29,2; secundaria pública 67,9,
//    privada 22,2 (2025).
//  - DRE Ica notes on gob.pe: 20 April 2026 "mediante la Resolución Directoral N.° 2056-2026, la creación del Programa de
//    Atención No Escolarizada al Talento y Superdotación"; 23 April 2026 "40 estudiantes de la región Ica han sido
//    identificados para iniciar el primer tramo de este programa" and "Ica se convierte en la cuarta región del país";
//    30 March 2026 "la región Ica logró 23 instituciones educativas ganadoras" (CNPIE 2026, FONDEP); 1 June 2026 UGEL Ica
//    "más de 128 mil estudiantes de la provincia".
//  - EF EPI 2025 Peru page (ef_peru.raw): data-state="ika" Ika 468 (border-epi-low); data-city="ica" Ica 467 (low);
//    Peru 519 moderate, rank 52 of 123.
//  - Ley 28044 (FACTS 5, 6); MINEDU Edades normativas (FACTS 13, 14); CNEB competency 28, transversal, JER secundaria hours
//    (FACTS 32, 33, 39); MINEDU 16 March 2026 opening (FACTS 17); Fábrica de Programadores (FACTS 45, 46); ONEM 2026 (FACTS
//    99, 100, 105).
//  - Time: tzdata America/Lima UTC-5 all year, Asia/Kolkata UTC+5:30 (timezone.tsv); India 10 h 30 min ahead.
//  - Data: SENASA, "Movimiento de Exportación de Animales en la Región de Ica - Resumen 2023-2026", datosabiertos.gob.pe,
//    licence ODC-By (opendefinition.org/licenses/odc-by), created 3 July 2026, modified 2 November 2026. File "Exportacion
//    Animal Ica Anual 2023-2026 010308262004.csv" (saved as exportacion_animal_ica.csv), 58,136 bytes, 234 rows, January
//    2023 to July 2026, Latin-1. Data dictionary: "Pais destino,País en donde desembarca el producto."
// Our own calculations (scratchpad pe/r3/cair/v1.py, v2.py, python3 -I):
//  v1 prints: Rows: 234 / 101 OFICINA PUESTO DE CONTROL AEREO -  PROV. CONST. DEL CALLAO / 54 ICA / 16 SANTA ROSA, TACNA
//  v2 prints: {'as labelled': 33, 'two places right': 200, 'unexplained': 1} / 66 EL SALVADOR / 43 COLOMBIA / 39 CHILE /
//    21 ARGENTINA
//  extra counts: products PERROS 127, REPTILES 66, GATOS 18, FELINO SILVESTRE 10, FELINOS SILVESTRES 2, turkey meat 10
//    rows (8 + 2), NULL 1; all 66 El Salvador rows are REPTILES; "N° de expediente" holds 9 distinct values such as
//    2.60E+11 (scientific notation) and NULL.
// Lesson family: row shape before counting. Check that every row has its values in the columns the header promises,
// find the block that slid two places, read each shape by its own positions, and keep the one row nobody can explain.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'from collections import Counter',
  '',
  'with open("exportacion_animal_ica.csv", newline="", encoding="latin-1") as f:',
  '    rows = list(csv.DictReader(f))',
  '',
  'where = Counter(row["Pais destino"] for row in rows)',
  'print("Rows:", len(rows))',
  'for place, n in where.most_common(3):',
  '    print(n, place)'
].join('\n');

const V2 = [
  'import csv',
  'from collections import Counter',
  '',
  'STATUS = {"ACTIVO", "INACTIVO"}',
  'shapes, countries = Counter(), Counter()',
  '',
  'with open("exportacion_animal_ica.csv", newline="", encoding="latin-1") as f:',
  '    reader = csv.reader(f)',
  '    header = next(reader)',
  '    col = header.index("Pais destino")',
  '    for row in reader:',
  '        if row[col + 2] in STATUS:',
  '            shapes["as labelled"] += 1',
  '            countries[row[col]] += 1',
  '        elif row[col + 4] in STATUS:',
  '            shapes["two places right"] += 1',
  '            countries[row[col + 2]] += 1',
  '        else:',
  '            shapes["unexplained"] += 1',
  '',
  'print(dict(shapes))',
  'for place, n in countries.most_common(4):',
  '    print(n, place)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Ica region' },
  slug: 'online-coding-and-ai-classes-ica-region-peru',
  code: 'cair',
  accent: '#5E5B00',
  accentRationale: 'Ica region: a deep olive #5E5B00, the colour of the vine leaves and olive groves of the Ica valley, allocated to this row; contrast 6.67 on #FBF8F2, 6.27 on #F5F1E8 and 5.73 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Ica region, Peru',
  title: 'Online Coding and AI Classes in the Ica Region, Peru',
  description: 'Live coding and AI classes in English for Ica, Chincha, Pisco and Nasca: census figures, home internet, the DRE talent programme and a SENASA data project.',
  ogDescription: 'Coding and AI for children, teenagers and adults across the Ica region, taught live online in English at hours the family picks: 2025 census figures, how connected Ica homes are, what school covers, and a Python project on a SENASA export file whose rows do not line up.',
  twitterDescription: 'Ica region, live online coding in English: census, home internet, school facts and a SENASA data project.',
  pageName: 'Online Coding and AI Classes in the Ica Region',
  webPageDescription: 'A guide for families and adult learners across the Ica region to live online coding and AI classes taught in English, built from INEI census and household survey figures, MINEDU school census figures, DRE Ica notes from 2026, EF EPI 2025 and an original Python project on SENASA\'s Ica animal export dataset (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Ica region of Peru: problem solving and block coding for children from 6, Python and data for teenagers, Python automation and AI tools for adults, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Ica region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#region', label: 'The region' },
    { href: '#connected', label: 'Connection' },
    { href: '#exports', label: 'Data project' },
    { href: '#ages', label: 'By age' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Ica region &middot; Live online, in English &middot; Ages 6 to adult',
  h1: 'Online coding and AI classes in the Ica region',
  lede: 'Ica city, Chincha, Pisco, Nasca and Palpa sit along one desert coast, and on a video call the distance between them disappears. Here are the region\'s 2025 census numbers, how well Ica homes are connected compared with the rest of Peru, what colegios in the region do and do not teach, and a data project built on an Ica export register in which most of the rows sit in the wrong columns.',
  secondaryCta: { href: '#exports', label: 'See the data project' },
  wa: 'Hello Modern Age Coders, our family is in the Ica region of Peru and we would like live coding classes in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; over 10,000 learners in many countries &middot; mentors who check understanding, not just answers',
  spec: [
    ['For', 'Children from 6, teenagers, adults'],
    ['Where', 'Ica, Chincha, Pisco, Nasca, Palpa, at home'],
    ['Taught in', 'English, clear and unhurried'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['When', 'Any day and hour you choose'],
    ['First class', 'Free, with a device check']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Yes. Modern Age Coders teaches coding and AI live online in English to learners in every province of the Ica region, from Ica city and Chincha to Pisco, Nasca and Palpa. Children start at six with block coding and problem-solving games, move to typed Python at around nine, and teenagers go on to Python, data, Java or app building. Adults choose Python, automation or AI tools. Classes run in a group of fifteen to twenty or one to one, at whatever hour suits the family, and the first class is free. Our mentors teach learners to reason a program out for themselves rather than copy one.',

  picks: {
    eyebrow: 'Where Ica learners begin',
    h2: 'Three first courses for the Ica region',
    lede: 'A puzzle-first course for young children, a full Python course for secundaria students, and a practical automation course for adults who want time back from routine work.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'ICA / 01', title: 'Problem Solving for Kids', note: 'Ages 6 to 10. Patterns, sequences and logic puzzles turned into small programs, so a young child learns to break a problem into steps before learning any syntax.' },
      { course: 'python-complete-masterclass-teens', code: 'ICA / 02', title: 'Python for Teens', note: 'Ages 13 to 18, from zero. Variables, loops, functions and files, then real data such as the export register on this page, at a pace set by the group.' },
      { course: 'python-ai-automation-masterclass-college', code: 'ICA / 03', title: 'Python and AI Automation', note: 'From 18. Spreadsheets, reports and repetitive office tasks handed over to short Python scripts, with AI tools used carefully and checked line by line.' }
    ]
  },

  sections: [
    {
      id: 'region',
      eyebrow: 'Census 2025',
      h2: 'How many people live in the Ica region?',
      lede: 'INEI\'s 2025 census put the department of Ica at 1,033,084 people. They live in five provinces, and the regional capital is the city of Ica, in the province of the same name.',
      body: [
        { kind: 'table', numCols: [1], caption: 'The department of Ica and its five provinces, total population, 2025 census', head: ['Area', 'People, 2025'], rows: [
          ['Department of Ica', '1,033,084'],
          ['Province of Ica', '475,739'],
          ['Province of Chincha', '271,200'],
          ['Province of Pisco', '176,010'],
          ['Province of Nasca', '94,113'],
          ['Province of Palpa', '16,022']
        ] },
        { kind: 'source', html: 'INEI, Censos Nacionales 2025, demographic indicators, table 1. Total population means the people counted on census day, 15 September 2025, plus those INEI estimates were missed, inside the boundaries valid on 15 July 2026. We print each line as INEI does; the provinces are not added up by us.' },
        { kind: 'two', mt: true,
          leftH3: 'Cities and towns, as last counted',
          left: [
            'City-level figures from the 2025 census are not out yet, so the most recent ones are from 2017. In that census INEI counted 282,407 people in the city of Ica, treated as a single urban area that spreads over several districts.',
            'For other towns INEI\'s 2017 directory lists one populated centre at a time: Chincha Alta 66,349, Pueblo Nuevo 62,604, Pisco 61,518 and Nasca 22,859. Chincha Alta and Pueblo Nuevo are next to each other, but they are separate entries, and we keep them that way rather than inventing a combined figure.'
          ],
          rightH3: 'Children and teenagers in the count',
          right: [
            'Of the 1,016,682 people the 2025 census actually counted in Ica, 105,823 were aged 6 to 11 and 107,343 were aged 12 to 17. Those are roughly the primaria and secundaria years.',
            'Whether a child lives in Ica city or in a village in Palpa makes no difference to us. Every learner opens the same live class over video, at the hour the family has chosen.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'School in Ica',
      h2: 'Do colegios in the Ica region teach programming?',
      lede: 'No colegio in Peru has to. The national curriculum, the CNEB, asks every area to build digital skills, but there is no programming or computing subject on the regular secundaria timetable, and Ica follows the same curriculum as the rest of the country.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Pupils enrolled in the Ica region in 2025, thousands, by level and type of school', head: ['Level', 'Public schools', 'Private schools'], rows: [
          ['Primaria', '85.4', '29.2'],
          ['Secundaria', '67.9', '22.2']
        ] },
        { kind: 'source', html: 'Figures from INEI\'s Compendio Estadístico Perú 2026 (tomo 1), cuadros 5.16, 5.17, 5.22 and 5.23, which take the figures from MINEDU\'s school census. INEI prints thousands with a decimal comma (85,4); we use a decimal point. Each cell is printed as published and no totals are ours.' },
        { kind: 'two', mt: true,
          leftH3: 'What the national curriculum says',
          left: [
            'Law 28044 gives Peruvian children six primaria years followed by five secundaria years, and MINEDU places a child in a grade by the age they have on 31 March. In the CNEB, the only technology competency is number 28, which asks pupils to get along in ICT-built virtual spaces. Being transversal, it belongs to every area at once and to none in particular.',
            'Under the regular school day, secundaria pupils have 35 hours a week: Matemática takes four of them and work education two, while programming takes none. A teenager in Pisco who wants to write real code has to find it outside the timetable.'
          ],
          rightH3: 'What the DRE Ica has added in 2026',
          right: [
            'On 20 April 2026 the DRE Ica announced it had created a programme for pupils with high abilities by Resolución Directoral N.° 2056-2026. Its own note says 40 pupils were picked for the first stage and that Ica became the fourth region in the country to run this kind of teaching.',
            'The DRE Ica also reported in March 2026 that 23 schools in the region were among the winners of the national school innovation contest run by FONDEP, with Ica, Pisco and Chincha provinces taking part most. Those are projects led by teachers inside schools, not programming lessons for every pupil.'
          ] },
        { kind: 'p', mt: true, html: 'MINEDU did launch a Python scheme, Fábrica de Programadores, in July 2025, but its first intake was 1,000 pupils of 4° and 5° de secundaria from Lima Norte, with the PCEP exam open to graduates. Ica had no share in it. Nationally, the ministry reported 6,225,000 pupils in 53,631 schools on the first day of the 2026 year, 16 March; the DRE Ica said in June 2026 that the UGEL of Ica province alone looks after more than 128 thousand pupils. Families who want programming for any of them are looking at classes outside school, such as ours.' }
      ]
    },
    {
      id: 'connected',
      tint: 'tint',
      eyebrow: 'Ready at home?',
      h2: 'Are homes in the Ica region connected enough for live classes?',
      lede: 'More than most of Peru. INEI\'s household survey for 2025 puts Ica above the national figure on all three measures that matter for an online class.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Computers and internet in Ica and in Peru, 2022 and 2025 (per cent)', head: ['Measure', 'Ica 2022', 'Ica 2025', 'Peru 2025'], rows: [
          ['Homes with at least one computer', '38.1', '36.9', '33.9'],
          ['Homes with an internet service', '63.7', '69.1', '56.8'],
          ['People aged 6 and over who go online', '83.6', '89.1', '81.1']
        ] },
        { kind: 'source', html: 'Household figures from cuadros 11.5, 11.6 and 11.13 of INEI\'s 2026 statistical compendium, drawn from the national household survey ENAHO. Shares are of all homes (first two rows) and of all people aged 6 and over (third row). Decimal commas changed to points; picking 2022 as the comparison year is our choice.' },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers say',
          left: [
            'In 2025 about 69 Ica homes in every hundred had an internet service, against 57 in Peru as a whole, and about 89 in every hundred people aged six and over used the internet somewhere. Home internet in Ica rose by more than five points between 2022 and 2025.',
            'Computers are the one measure that did not grow: 36.9 per cent of Ica homes had one in 2025, slightly fewer than in 2022, although still above the national 33.9. So the connection is usually there, and the question in an Ica home is more often "which computer?" than "which network?".'
          ],
          rightH3: 'What we ask families to check',
          right: [
            'Any laptop or desktop bought in the last several years runs our classes. Learners from about nine upwards need a keyboard, because typing, running and fixing code is the lesson. Younger children doing block coding can manage on a tablet.',
            'In the free first class the mentor looks at the picture, the sound and whether the learner can share a screen. If something is missing, we say so before any payment, and suggest what to borrow or adjust.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'The language',
      h2: 'Are the classes in Spanish or in English?',
      lede: 'English, in every class. Our mentors are based in India, teach live over video, slow down for learners who are still building their English, and never switch the lesson into Spanish.',
      body: [
        { kind: 'two',
          leftH3: 'English in Ica, measured',
          left: [
            'EF\'s English Proficiency Index for 2025 ranks Peru 52nd of 123 countries with 519 points, in its moderate band. EF also lists the Ica region (spelled Ika on its page) at 468 and the city of Ica at 467, both in the low band and below Peru\'s overall score.',
            'For us that means many Ica children will be learning English while they learn to code, and the mentor plans each lesson with that in mind.'
          ],
          rightH3: 'How it works in practice',
          right: [
            'The mentor names each idea with the same English word every time, shows it in code straight away, and checks understanding with a question rather than "OK?". A child who answers in Spanish gets the English phrase back, kindly, and the class moves on.',
            'Code itself helps. Words like print, input, for, while and return are English, and children pick them up as tools before they think of them as vocabulary.'
          ] },
        { kind: 'p', mt: true, html: 'Families who want more support at the start can choose one-to-one classes, where the mentor can repeat as often as needed. Families who already use English at home or at a bilingual colegio usually notice no difference at all. If you would like more detail about English-medium learning, our page on <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> explains how we teach Peruvian learners nationally.' }
      ]
    },
    {
      id: 'exports',
      eyebrow: 'An Ica data project',
      h2: 'Where do the animals exported from Ica go?',
      lede: 'SENASA, Peru\'s agricultural health service, publishes a register of animal export certificates handled in the Ica region as open data. It looks like a simple counting job. It is really a lesson in checking that every row of a file has the shape its header promises.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The dataset is "Movimiento de Exportación de Animales en la Región de Ica - Resumen 2023-2026", published on datosabiertos.gob.pe under SENASA with an Open Data Commons Attribution licence (ODC-By), which allows reuse, including by a company, as long as the source is credited. It was created on 3 July 2026 and last changed on 2 November 2026.',
            'We saved the CSV on 9 November 2026 as exportacion_animal_ica.csv. It holds 234 rows from January 2023 to July 2026. Most rows are dogs (127) and reptiles (66), followed by cats, wild felines and a few lots of frozen turkey meat. Each row has 26 named columns, including the product, the inspection date, the exit point and the destination country.'
          ],
          rightH3: 'The question',
          right: [
            'Which countries receive the most animal exports certified in Ica? SENASA\'s own data dictionary describes the column Pais destino as "País en donde desembarca el producto", the country where the product is landed. So the first program simply counts that column.',
            'We count rows, not animals, because one row can be one dog in a kennel or a box of many reptiles. That choice is ours and we say so before printing any result.'
          ] },
        { kind: 'code', label: 'Version 1: count the destination column', lang: 'Python', code: V1, note: 'It prints: <code>Rows: 234</code>, then <code>101 OFICINA PUESTO DE CONTROL AEREO -  PROV. CONST. DEL CALLAO</code>, <code>54 ICA</code> and <code>16 SANTA ROSA, TACNA</code>.' },
        { kind: 'p', mt: true, html: 'None of the top three is a country. The first is a SENASA air control post in Callao, the second is Ica itself and the third is a border crossing in Tacna. The program did exactly what it was told; the file did not keep its promise. Opening a few rows by hand shows why: in most rows every value after the packaging columns sits two places to the right of its label, so the column called Pais destino actually holds the exit point, and the real country has drifted into the column called Estado.' },
        { kind: 'p', html: 'Version 2 tests each row\'s shape before trusting it. The Estado column should only ever hold ACTIVO or INACTIVO, which makes it a good landmark. If the landmark is where the header says, the row is read normally. If it turns up two places further right, the row is read with that shift. If it is in neither place, the row is counted as unexplained and left out of the answer.' },
        { kind: 'code', label: 'Version 2: find the landmark, then read each row by its own shape', lang: 'Python', code: V2, note: 'It prints: <code>{\'as labelled\': 33, \'two places right\': 200, \'unexplained\': 1}</code>, then <code>66 EL SALVADOR</code>, <code>43 COLOMBIA</code>, <code>39 CHILE</code> and <code>21 ARGENTINA</code>.' },
        { kind: 'p', mt: true, html: 'Only 33 of the 234 rows match their header; 200 are shifted by two places, and one fits neither shape. Read correctly, El Salvador comes first with 66 rows, and a quick check shows that every one of those 66 rows is a reptile shipment. Colombia, Chile and Argentina follow. A learner who stopped at Version 1 would have reported a Callao office as the favourite destination of Ica\'s animals, with total confidence.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Rows in the Ica export register by product label, January 2023 to July 2026 (our count)', head: ['Product label as written', 'Rows'], rows: [
          ['PERROS', '127'],
          ['REPTILES', '66'],
          ['GATOS', '18'],
          ['FELINO SILVESTRE', '10'],
          ['CARNE DE PAVO CONGELADO (two labels)', '10'],
          ['FELINOS SILVESTRES', '2'],
          ['NULL', '1']
        ] },
        { kind: 'source', html: 'Data credit: SENASA, Movimiento de Exportación de Animales en la Región de Ica, reused under ODC-By. The counts are ours. Note that wild felines appear under two spellings, singular and plural, which a careless count would split into two products.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, with cards.</strong> Write five animals and five countries on cards, then shuffle one row of country cards two places along. Ask: which dog is now going to which country? Why is that wrong?',
          '<strong>Block coding, around 8 to 10.</strong> Build two lists in Scratch, animals and countries, and a loop that pairs them. Then move one list by two and watch the pairs go wrong.',
          '<strong>First Python, around 10 to 12.</strong> Run Version 1, then print one full row with its header next to it and point to the exact column where the shift begins.',
          '<strong>Ages 13 and over.</strong> Find the single unexplained row and decide, in writing, whether it should be repaired, left out or reported to SENASA. Then merge FELINO SILVESTRE and FELINOS SILVESTRES and count again.',
          '<strong>Going further.</strong> The file number column, N° de expediente, holds only nine different values, such as 2.60E+11. Explain how a twelve-digit number becomes that, why you cannot count shipments with it, and why identifiers should be read as text.'
        ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'By age',
      h2: 'Which course suits my child, my teenager or me in Ica?',
      lede: 'Start from age and from what the learner wants to make. The school column uses MINEDU\'s 31 March age rule, so it shows the grade most children of that age are in.',
      body: [
        { kind: 'table', numCols: [], caption: 'Common starting points for Ica learners (our course ages)', head: ['Age', 'Usual grade', 'Where to start', 'Typical first projects'], rows: [
          ['6 to 7', '1° or 2° de primaria', 'Problem solving and block coding', 'Sequences, mazes, a talking character'],
          ['8 to 10', '3° to 5° de primaria', 'Scratch or Minecraft coding', 'Small games with scores and levels'],
          ['9 to 12, typing comfortably', '4° de primaria to 1° de secundaria', 'Python and AI for Kids', 'Typed programs, quizzes, simple AI ideas'],
          ['13 to 17', '1° to 5° de secundaria', 'Python for Teens, then data or Java', 'File-reading programs like the one above'],
          ['15 upwards, keen on contests', '3° de secundaria onwards', 'Olympiad maths alongside Python', 'Proofs checked with small programs'],
          ['18 and over', 'University, work or home', 'Python and AI automation', 'Reports and routine tasks done by script']
        ] },
        { kind: 'source', html: 'Course ages are our own. The grade column follows MINEDU\'s normative ages counted on 31 March; a child born after that date is often a year lower.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Young children', p: 'Short, active lessons in which children predict what a program will do before they run it. Groups are always made of learners of similar age.' },
          { h3: 'Secundaria students', p: 'Python done properly, then a choice of data, Java or apps. Students who joined the DRE Ica talent programme or enjoy contests can add harder problems.' },
          { h3: 'Adults', p: 'Many Ica adults work in agriculture, exports, tourism or offices. Python automation and data skills fit around those jobs, in adult-only groups or privately.' }
        ] },
        { kind: 'p', mt: true, html: 'For younger children there is more on our page about <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">online coding classes for kids in Peru</a>, and secundaria families can read <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding classes for teens in Peru</a>. Adults weighing up Python can start with our <a class="ag-inline-link" href="/python-course-peru">Python course page for Peru</a>.' }
      ]
    },
    {
      id: 'able',
      eyebrow: 'Able pupils',
      h2: 'What can a highly able pupil in Ica do beyond school?',
      lede: 'Ica\'s new talent programme reaches 40 pupils in its first stage, so most able children in the region will still be looking for stretch elsewhere. Contests and serious coding are two of the best-known routes, and both start with the colegio.',
      body: [
        { kind: 'two',
          leftH3: 'Maths and computing olympiads',
          left: [
            'The ONEM, Peru\'s national school maths olympiad, held its first stage in every colegio on Wednesday 8 July 2026, at three levels: 1° and 2° de secundaria, 3° and 4°, and 5°. El Peruano reported that the 2026 edition drew more than 1.7 million pupils. Entry is always through the school.',
            'Modern Age Coders has no connection with MINEDU, the ONEM, the DRE Ica or the talent programme. We never reuse contest problems. We train the habits contests reward with problems we write ourselves.'
          ],
          rightH3: 'A practice problem of ours',
          right: [
            'A table has 26 columns. In some rows, every value after column 14 has moved two places to the right, and the last two columns overflow. If a row is shifted, which column holds the value that belongs in column 22, and how many values in that row are now under the wrong heading? (Ours. Answer: column 24, and twelve values, from column 15 to column 26.)',
            'Problems like this sit between maths and programming. They reward counting carefully, checking the edge cases and writing the reason down.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Hours',
      h2: 'What time would classes be in Ica?',
      lede: 'At the time your family chooses. Ica keeps Lima\'s clock, Peru has no summer time, and the mentor in India arranges the day around your slot.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example conversions between Peru time and India time (illustrations, not a timetable)', head: ['Peru time, Ica', 'India time', 'Day in India'], rows: [
          ['07:00', '17:30', 'Same day'],
          ['09:30', '20:00', 'Same day'],
          ['11:00', '21:30', 'Same day'],
          ['15:00', '01:30', 'Following day'],
          ['20:00', '06:30', 'Following day']
        ] },
        { kind: 'source', html: 'Clock facts: in the tz database, America/Lima is five hours behind UTC and has not used summer time since 1994; INACAL is responsible for Peru\'s official time. India is five and a half hours ahead of UTC all year, so India is always ten and a half hours ahead of Ica.' },
        { kind: 'p', mt: true, html: 'Since neither country moves its clocks, a class time agreed in March still works in September. When you book, you give the time on your own clock and the system shows the mentor the India equivalent. Plenty of Ica families start in the summer break, between January and March, and simply keep the same slot when colegio begins again.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How an Ica learner moves forward',
    lede: 'These stages are ours, and we use them with every learner from six to retirement age. They give mentors a place to start and families something specific to look for.',
    table: { caption: 'From a first instruction to a file you can trust (ours)', head: ['Stage', 'Often reached', 'The learner can'], rows: [
      ['1. Order', 'Age 6 or 7', 'Put instructions in the right sequence'],
      ['2. Loop', 'Age 7 to 9', 'Repeat steps with a loop instead of copies'],
      ['3. Remember', 'Age 8 to 10', 'Hold values in variables and lists'],
      ['4. Write', 'Around 9 to 12', 'Type Python that chooses and repeats'],
      ['5. Read files', 'Age 12 to adult', 'Load a real CSV and count what is in it'],
      ['6. Check shape', 'Age 13 to adult', 'Prove each row matches its header before counting']
    ] },
    left: { h3: 'For parents', ps: [
      'The export project belongs to the last two stages. It separates a learner who can get an answer from one who can say why the answer is safe.',
      'We report progress as things built and explained, not as hours attended.'
    ] },
    right: { h3: 'For learners', ps: [
      'A header is a promise. Check the rows keep it.',
      'Before you count, print one row next to its labels and read it slowly.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine more courses open to Ica learners',
    lede: 'Grouped by age, youngest first. Each one is taught live, in English, by a mentor who knows the learner, in a group of fifteen to twenty or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 15', courses: [
        { code: 'ICA / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'From a first moving sprite to a finished game with levels.' },
        { code: 'ICA / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python and simple AI ideas for children ready to leave blocks behind.' },
        { code: 'ICA / KIDS / 03', slug: 'middle-school-math-competitions-course', title: 'Maths competitions', blurb: 'Contest-style reasoning for able children in the later primaria and early secundaria years.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'ICA / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Cleaning, counting and charting real files, then first models.' },
        { code: 'ICA / TEEN / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented programming for secundaria students who already know some Python.' },
        { code: 'ICA / TEEN / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'Number theory, combinatorics and proof for students who enjoy hard problems.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 18 and over', courses: [
        { code: 'ICA / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'A full Python path for adults, at hours around work.' },
        { code: 'ICA / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL and Python for people who already handle numbers.' },
        { code: 'ICA / ADULT / 03', slug: 'ai-tools-mastery-complete-college', title: 'AI tools', blurb: 'Using AI assistants well, and checking what they produce.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live online classes work across the Ica region',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning in Ica', l: 'Evening for the mentor in India, and a good time for a focused class before the heat of the day.' },
      { time: 'Later in the day', l: 'Afternoon and evening slots are possible as well; the mentor plans around them.' },
      { time: 'Private lessons', l: 'One learner, one mentor, on the days you pick.' }
    ],
    cells: [
      { h3: 'Same mentor each week', p: 'Someone who remembers what the learner found hard last time.' },
      { h3: 'English made clear', p: 'Consistent words, shown on screen as code.' },
      { h3: 'Hands on the keyboard', p: 'The learner types and runs every program.' },
      { h3: 'Peers of a similar age', p: 'Children, teenagers and adults study apart.' },
      { h3: 'A checked set-up', p: 'The free class confirms the device and the connection.' },
      { h3: 'Group or one to one', p: 'Fifteen to twenty learners, or a single learner.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Learners who keep going end up making things other people use. Some are shown here, and the <a class="ag-inline-link" href="/student-labs">student labs</a> have many more.',
  reviewsLede: 'Reviews left on Google by parents and learners, copied exactly.',

  fees: {
    h2: 'Fees for learners in the Ica region',
    lede: 'Our fees are monthly and priced in US dollars. Your card is charged in dollars and your bank converts the charge into soles at its rate on that day, so your statement may show a slightly different figure from the one on this page.',
    free: ['A free first class', 'Device and sound checked', 'No card details needed'],
    group: ['Fifteen to twenty learners of a similar age', 'The same mentor every week', 'Two live classes a week', 'Monthly, stop whenever you like'],
    one: ['One learner and one mentor', 'Projects built around the learner', 'Days and hours you choose']
  },

  faq: {
    eyebrow: 'Questions from Ica',
    h2: 'Coding and AI classes in the Ica region: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught in English only. Mentors speak slowly and clearly, match the learner\'s pace and accent, and when a child answers in Spanish they give the English words back and carry on.' },
      { q: 'Can my child join from Chincha, Pisco, Nasca or Palpa?', a: 'Yes. Classes are held over live video, so any province of Ica works the same way. A child in Nasca and a child in Ica city join the same kind of class, with the same mentor quality.' },
      { q: 'At what age can a child start coding?', a: 'From six, with block coding and puzzles that need no reading of code. Most children are ready to type Python at around nine or ten, and the free first class helps us judge that.' },
      { q: 'When are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead of Ica, so a class at 09:30 in Ica is at 20:00 for the mentor.' },
      { q: 'Do schools in Ica teach programming?', a: 'Not as a subject. Peru\'s national curriculum spreads digital skills across all areas and gives programming no hours on the regular secundaria timetable. The DRE Ica\'s 2026 talent programme serves 40 pupils in its first stage.' },
      { q: 'Is our home internet good enough?', a: 'In most Ica homes it is: INEI found that 69.1 per cent of Ica homes had an internet service in 2025. A laptop or desktop matters more than speed for learners over nine, and the free class checks both.' },
      { q: 'Do you prepare students for the ONEM?', a: 'We build the reasoning olympiads reward, using problems we write, never official papers. Students enter the ONEM through their colegio. Modern Age Coders is not connected with MINEDU, the ONEM or the DRE Ica.' },
      { q: 'Can adults in Ica take classes?', a: 'Yes, in adult groups or one to one. People working in agriculture, exports, tourism or offices often begin with Python and move on to automation or data analysis.' },
      { q: 'How are fees paid?', a: 'Monthly, by card, in US dollars, and your bank converts the charge into soles. Visitors browsing from India see rupees instead. The first class is free and asks for no card.' },
      { q: 'Will my child receive a certificate?', a: 'Where the course includes one, Modern Age Coders issues its own certificate of completion. It is not a Peruvian school qualification and is not issued or endorsed by MINEDU, the DRE Ica or any colegio.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related reading',
    lede: 'Further pages for Ica families and adult learners.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our national guide, with every Peru page listed.' },
      { href: '/coding-classes-in-arequipa-peru', label: 'Coding classes in Arequipa', p: 'The southern city page, with its own data project.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Small AI builds children can explain.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'What age each AI provider allows.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Starting to program later in life.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A lesson of ours, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first class from anywhere in Ica',
    lede: 'The mentor starts with a short puzzle, then a first small program, and checks your computer and sound along the way. At the end you get a suggested course and group, based on how the learner worked and how comfortably they followed the English.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a class from beginning to end, and the <a class="ag-inline-link" href="/courses">full course list</a> shows each syllabus.',
    note: 'Our mentors teach live from India, and every class is in English. WhatsApp is the fastest way to reach us; please write in English.',
    formNote: 'Free, no card, and no obligation afterwards.'
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
    bottomRight: 'Does every row keep the header\'s promise?'
  },

  personalityCss: `
.ag-root.ag-cair .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-cair .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-cair .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-cair .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cair .ag-code-head b { letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadros 1 and 3), Perfil Sociodemográfico 2017 (Cuadro 1.9) and Directorio de Centros Poblados 2017 (dpto11); INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13; MINEDU Censo Educativo cuadros 5.16, 5.17, 5.22, 5.23); Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, ONEM 2026; DRE Ica notes of 30 March, 20 April, 23 April and 1 June 2026; EF EPI 2025; tz database. Data: SENASA, Movimiento de Exportación de Animales en la Región de Ica, ODC-By.',
    localProject: 'Where do the animals exported from Ica go? An original Python project on SENASA\'s Ica animal export register (ODC-By, 234 rows, January 2023 to July 2026): Version 1 counts the Pais destino column and ranks a Callao air control post first; Version 2 uses the Estado column as a landmark, finds 33 rows as labelled, 200 shifted two places right and 1 unexplained, and ranks El Salvador (66 rows, all reptiles), Colombia, Chile and Argentina. Lesson family: row shape before counting.',
    requiredMentions: ['exportacion_animal_ica.csv', "{'as labelled': 33, 'two places right': 200, 'unexplained': 1}", '66 EL SALVADOR', '1,033,084', 'N.° 2056-2026', 'spelled Ika on its page', 'Homes with an internet service', 'Does every row keep the header\'s promise?', 'FELINOS SILVESTRES'],
    sources: [
      { claim: 'Department and province populations of Ica, and censada counts by age, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Ica city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Chincha Alta, Pueblo Nuevo, Pisco and Nasca populated-centre figures, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto11.xlsx' },
      { claim: 'Computer, internet and internet-use shares for Ica and Peru; Ica enrolment by level and type of school.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'DRE Ica talent programme, RD 2056-2026, 40 pupils, fourth region.', url: 'https://www.gob.pe/institucion/regionica-dre/noticias/1383385-ica-oficializa-programa-para-estudiantes-con-altas-capacidades-40-escolares-inician-formacion-especializada-en-aulas-s' },
      { claim: 'Ica schools among CNPIE 2026 winners.', url: 'https://www.gob.pe/institucion/regionica-dre/noticias/1372828-dre-ica-impulsa-la-innovacion-educativa-con-fondep' },
      { claim: 'UGEL Ica serves more than 128 thousand pupils.', url: 'https://www.gob.pe/institucion/regionica-dre/noticias/1399979-nuevo-director-de-ugel-ica-asume-liderazgo-con-compromiso-de-fortalecer-la-educacion-de-mas-de-128-mil-estudiantes' },
      { claim: 'SENASA Ica animal export dataset, ODC-By licence and data dictionary.', url: 'https://www.datosabiertos.gob.pe/dataset/movimiento-de-exportaci%C3%B3n-de-animales-en-la-regi%C3%B3n-de-ica-resumen-2023-2026' },
      { claim: 'EF EPI 2025 scores for Peru, the Ica region and Ica city.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Peru time UTC-5 with no summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A combined Chincha figure made by adding Chincha Alta and Pueblo Nuevo: never summed.',
      'Counting animals instead of rows: one row can be one dog or a box of reptiles, so the page counts rows and says so.',
      'Guessing what the unexplained export row should say: left out and named.',
      'The value of the FONDEP awards in soles: not printed (no currency figures in copy).',
      'Any link with the DRE Ica, SENASA, MINEDU, the ONEM or the talent programme: none.',
      'Spanish-language teaching: every class is in English.',
      'Naming Ica schools as sources of students: refused.'
    ]
  }
};
