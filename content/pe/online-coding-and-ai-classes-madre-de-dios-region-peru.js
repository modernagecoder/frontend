// SHIP: market (region) | Madre de Dios: a young Amazon region, online on phones, short of computers, live classes in English | thin evidence: drop days with too few sensor readings before comparing two daily series
'use strict';
// Online coding and AI classes, Madre de Dios region, Peru (ag- region page, Peru cluster row PE184; alloc: regions, camd, #3B6432).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: flexible hours; USD only via
// data-price anchors.
// Spine: Madre de Dios is Peru's Amazon frontier with an unusually young population, school rolls that grew fast over ten
// years, near-universal internet use (87.0 per cent of residents aged 6 and over, 2025) and a home-computer share that has
// fallen back since 2021. The page is honest about devices and English, and the project uses an IIAP sensor in Puerto
// Maldonado to teach that a daily average built from one reading is not the same evidence as one built from 288.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-madre-de-dios-region-peru/):
//  - INEI, Censos Nacionales 2025, Cuadro N° 1: MADRE DE DIOS 208667; provinces TAMBOPATA 170579, MANU 25381, TAHUAMANU 12707;
//    districts TAMBOPATA 110212, INAMBARI 28544, LAS PIEDRAS 21348, MADRE DE DIOS 11532, LABERINTO 10475, HUEPETUHE 9354,
//    IBERIA 5874. Cuadro N° 3: MADRE DE DIOS censada 185176; 0 a 5 19385; 6 a 11 22414; 12 a 17 22092; 60 y más 14430;
//    PERÚ censada 32706028, 60 y más 4839138. Never summed.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Puerto Maldonado 85,024 (2017). Lib1541 dpto17.xlsx (centros poblados 2017):
//    PUERTO MALDONADO 77 221 at 204 m; MAZUKO 6 296 (Inambari); HUEPETUHE 5 315; IBERIA 4 705; IÑAPARI 1 890.
//  - INEI Compendio Estadístico Perú 2026, tomo 1: 11.5 "Madre de Dios 24,6 25,1 25,2 27,8 28,1 25,5 29,8 28,4 23,8 26,3 22,8";
//    11.6 "Madre de Dios 12,1 11,1 11,8 21,0 30,7 29,0 47,3 51,2 48,1 51,6 53,4"; 11.13 "Madre de Dios 34,9 38,8 45,0 52,5 62,3
//    63,8 75,3 73,9 76,0 77,4 87,0"; Total 2025 33,9 / 56,8 / 81,1. 5.53 (4° primaria 2025) Madre de Dios Matemática 16,7 Lectura
//    18,9 (Total 30,0 / 32,7); 5.54 (2° secundaria 2025) 6,0 / 8,0 (Total 12,7 / 18,5). 5.16 primaria pública 17,4 (2015) 25,9
//    (2025); 5.22 secundaria pública 10,6 (2015) 20,8 (2025); 5.75 docentes 2 368 (2015) 3 806 (2025).
//  - EF EPI 2025: "Peru EF EPI score : 519"; Madre de Dios not among EF's sixteen scored regions.
//  - GORE Madre de Dios, gob.pe nota 629785 (6 de julio de 2022): "las 1033 laptops adquiridas por el Gobierno Regional de Madre
//    de Dios (Goremad), a través de la Dirección Regional de Educación, a docentes nombrados"; "261 instituciones educativas".
//    Nota 622741 (15 de junio de 2022): FIDT funding for pre-investment studies "de la creación del servicio de internet en ocho
//    localidades de la región". Nota 557842 (17 de noviembre de 2021): a 3° de secundaria pupil from Iberia (Tahuamanu) took
//    second place nationally in ONEM 2021, Nivel II (name of the minor not printed).
//  - Ley 28044, Edades normativas, CNEB competency 28 and JER hours, MINEDU 2026 opening, ONEM 2026, OPI (FACTS 5, 6, 13, 14,
//    17, 32, 33, 39, 99, 105, 111). Time: tzdata.
//  - Data: Instituto de Investigaciones de la Amazonía Peruana (IIAP), "Temperatura del agua y del ambiente registrada en Puerto
//    Maldonado [IIAP]", datosabiertos.gob.pe, "Open Data Commons Attribution License" (ODC-By), released 2017-01-11, modified
//    2026-10-21 (version 2.1, 2026-10-15). Description: "valores diarios de temperatura del agua y del ambiente registrados entre
//    el 10 de noviembre y el 31 de diciembre de 2016 por un nodo sensor", "ubicado en el estanque de captación de agua de las
//    piscigranjas de Puerto Maldonado". File mediciones_diarias.csv: 84 rows (42 dates x 2 variables), UTF-8 with BOM. Data
//    dictionary: valor "(por confirmar: promedio diario)", n_lecturas "Número de lecturas del día (por confirmar)"; max 288.
// Our own calculations (scratchpad pe/r5/camd/v1.py, v2.py, v3.py, python3 -I):
//  v1 prints: Days with both readings: 42 / Water warmer than air: 40 / Average gap: 3.13 degrees
//  v2 prints: Thin days dropped: 18 / Solid days kept: 24 / Water warmer on solid days: 24 of 24 / Average gap on solid days:
//    2.64 degrees / Coolest solid day for the air: 2016-12-04 16.2
//  v3 (threshold sweep) prints: 1 42 40 3.13 / 50 35 34 2.9 / 100 27 27 2.62 / 144 24 24 2.64 / 200 12 12 3.59 / 250 9 9 3.99
//  The two days with air warmer than water: 2016-11-20 (94 readings) and 2016-12-01 (20 readings).
// Lesson family: thin evidence. A daily mean from 20 readings is weaker than one from 288; set a minimum, say how many days it
// drops, and show how the answer moves as the minimum changes.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'water, air = {}, {}',
  'with open("mediciones_diarias.csv", newline="", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        day = row["fecha"]',
  '        if row["variable"] == "Temperatura Agua":',
  '            water[day] = float(row["valor"])',
  '        else:',
  '            air[day] = float(row["valor"])',
  '',
  'days = sorted(water.keys() & air.keys())',
  'warmer = [d for d in days if water[d] > air[d]]',
  'print("Days with both readings:", len(days))',
  'print("Water warmer than air:", len(warmer))',
  'gaps = [water[d] - air[d] for d in days]',
  'print("Average gap:", round(sum(gaps) / len(gaps), 2), "degrees")'
].join('\n');

const V2 = [
  'import csv',
  '',
  'MIN_READINGS = 144',
  'water, air, readings = {}, {}, {}',
  'with open("mediciones_diarias.csv", newline="", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        day = row["fecha"]',
  '        readings[day] = min(readings.get(day, 999), int(row["n_lecturas"]))',
  '        if row["variable"] == "Temperatura Agua":',
  '            water[day] = float(row["valor"])',
  '        else:',
  '            air[day] = float(row["valor"])',
  '',
  'days = sorted(water.keys() & air.keys())',
  'solid = [d for d in days if readings[d] >= MIN_READINGS]',
  'thin = [d for d in days if readings[d] < MIN_READINGS]',
  'print("Thin days dropped:", len(thin))',
  'print("Solid days kept:", len(solid))',
  'warmer = [d for d in solid if water[d] > air[d]]',
  'print("Water warmer on solid days:", len(warmer), "of", len(solid))',
  'gaps = [water[d] - air[d] for d in solid]',
  'print("Average gap on solid days:", round(sum(gaps) / len(gaps), 2), "degrees")',
  'coldest = min(solid, key=lambda d: air[d])',
  'print("Coolest solid day for the air:", coldest, round(air[coldest], 1))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Madre de Dios region' },
  slug: 'online-coding-and-ai-classes-madre-de-dios-region-peru',
  code: 'camd',
  accent: '#3B6432',
  accentRationale: 'Madre de Dios region: a rainforest-canopy green #3B6432, allocated to this row; contrast 6.49 on #FBF8F2, 6.10 on #F5F1E8 and 5.58 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Madre de Dios region, Peru',
  title: 'Madre de Dios, Peru: Online Coding and AI Classes in English',
  description: 'Live online coding and AI classes in English for Madre de Dios, from Puerto Maldonado to Iberia: who they suit, devices, census facts and a sensor-data project.',
  ogDescription: 'Live online coding and AI lessons in English for learners in Puerto Maldonado, Mazuko, Huepetuhe, Iberia and Iñapari: Madre de Dios in 2025 census figures, a young and fast-growing school population, the phone-versus-laptop question, and a Python project on an IIAP temperature sensor at Puerto Maldonado\'s fish-farm ponds.',
  twitterDescription: 'Madre de Dios, live online coding classes in English: young learners, honest fit, an IIAP sensor project.',
  pageName: 'Online Coding and AI Classes in Madre de Dios',
  webPageDescription: 'A guide for families and learners in the Madre de Dios region of Peru to live online coding and AI classes taught in English, based on INEI census and household tables, MINEDU evaluation results, Gobierno Regional de Madre de Dios notes, and an original Python project on IIAP water and air temperature data from Puerto Maldonado (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in Madre de Dios, Peru: block coding and logic for children, Python, data and science projects for secundaria pupils, Python and data analysis for university students and adults, in a class of fifteen to twenty or one to one, at hours the learner picks.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Madre de Dios region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#young', label: 'A young region' },
    { href: '#phones', label: 'Phones and laptops' },
    { href: '#language', label: 'English' },
    { href: '#sensor', label: 'Sensor project' },
    { href: '#lesson-times', label: 'Lesson times' }
  ],
  eyebrow: 'Madre de Dios &middot; Live online, in English &middot; A region of young learners',
  h1: 'Online coding and AI classes in Madre de Dios',
  lede: 'Madre de Dios is Peru\'s south-eastern Amazon, with most of its people in and around Puerto Maldonado. It is a young region with school rolls that have grown fast, and nearly nine in ten residents aged six and over use the internet. What many homes lack is a computer. Our classes are live, online and in English. This page sets out the region in official figures, says plainly who is ready for English-taught lessons, and uses a research sensor at Puerto Maldonado\'s fish-farm ponds to teach a lesson every scientist learns: weak evidence should count for less.',
  secondaryCta: { href: '#sensor', label: 'Go to the sensor project' },
  wa: 'Hello Modern Age Coders, I am in Madre de Dios, Peru. I would like to know more about your live coding classes in English for my child or for me. Can we book a free class?',
  heroNote: 'Live, online teaching since 2020 &middot; 10,000+ learners around the world &middot; mentors who adapt their English to the learner',
  spec: [
    ['Strongest fit', 'Teenagers, university students, adults'],
    ['Under-tens', 'Welcome, usually privately'],
    ['Teaching language', 'English, clear and unhurried'],
    ['Device', 'Laptop for code; phone only to watch'],
    ['Hours', 'Picked by the family, any day'],
    ['How to start', 'A free class, then honest advice']
  ],
  capsuleQ: 'Short answer',
  capsule: 'Learners anywhere in Madre de Dios, in Puerto Maldonado, Las Piedras, Mazuko, Huepetuhe, Iberia or Iñapari, can take live coding and AI classes online with Modern Age Coders, taught in English. Teenagers, university students and adults who already follow some English benefit most, studying Python, web development, data and the workings of AI. Children from six can begin with block coding, usually with their own mentor. Lessons come in two formats, a shared class of fifteen to twenty learners or private tuition, at hours you set, and nobody pays for the first one.',

  picks: {
    eyebrow: 'Recommended starts',
    h2: 'Three courses Madre de Dios learners often begin with',
    lede: 'Chosen for a young region where most learners are children and teenagers, with one route for adults.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'MDD / 01', title: 'Coding for Kids', note: 'Ages 6 to 12. Blocks that click together into games and stories; a child follows by watching, so English can grow lesson by lesson.' },
      { course: 'data-science-course-for-teens-python-data', code: 'MDD / 02', title: 'Data science for teens', note: 'For secundaria pupils who like science. Python with real measurements, like the river-town temperatures on this page, from the first month.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'MDD / 03', title: 'Python Masterclass', note: 'For university students and adults. A full route from first script to programs that help in an office, a lab or a family business.' }
    ]
  },

  sections: [
    {
      id: 'young',
      eyebrow: 'A young region',
      h2: 'How many people live in Madre de Dios, and how young are they?',
      lede: 'The 2025 census counted 208,667 people in the department, most in the province of Tambopata, where Puerto Maldonado is the capital.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Madre de Dios and its provinces, population at the 2025 census', head: ['Area', '2025'], rows: [
          ['Tambopata (Puerto Maldonado)', '170,579'],
          ['Manu', '25,381'],
          ['Tahuamanu (Iñapari, Iberia)', '12,707'],
          ['Department of Madre de Dios', '208,667']
        ] },
        { kind: 'source', html: 'INEI\'s Censos Nacionales 2025 tables, Cuadro N° 1: enumerated plus omitted population at 15 September 2025. The department total is INEI\'s figure and was not built by adding the provinces.' },
        { kind: 'two', mt: true,
          leftH3: 'Where people live',
          left: [
            'Tambopata district alone had 110,212 residents in 2025, Inambari 28,544, Las Piedras 21,348, the district of Madre de Dios 11,532, Laberinto 10,475, Huepetuhe 9,354 and Iberia 5,874.',
            'In 2017 INEI counted 85,024 people in the city of Puerto Maldonado. Its list of centros poblados for that year records Mazuko at 6,296, Huepetuhe at 5,315, Iberia at 4,705 and Iñapari at 1,890.'
          ],
          rightH3: 'An unusually young population',
          right: [
            'Of the 185,176 people enumerated in 2025, 22,414 were aged 6 to 11 and 22,092 were 12 to 17. Only 14,430 were 60 or older.',
            'By our calculation from the same table, people aged 60 and over are 7.8 per cent of those enumerated in Madre de Dios, against 14.8 per cent across Peru. Children and teenagers make up a large share of the region.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Madre de Dios schools, ten years apart', head: ['Measure', '2015', '2025'], rows: [
          ['Pupils in public primaria (thousands)', '17.4', '25.9'],
          ['Pupils in public secundaria (thousands)', '10.6', '20.8'],
          ['Teachers in the education system', '2,368', '3,806']
        ] },
        { kind: 'source', html: 'MINEDU school census figures, reprinted by INEI in volume one of its 2026 statistical compendium (Compendio Estadístico), tables 5.16, 5.22 and 5.75.' },
        { kind: 'p', mt: true, html: 'Public secundaria nearly doubled in a decade. That means many more teenagers reaching the age where programming, data and AI become worth learning properly, in a region where specialised courses taught by a person are scarce outside Puerto Maldonado.' }
      ]
    },
    {
      id: 'phones',
      tint: 'tint',
      eyebrow: 'Phones and laptops',
      h2: 'Do homes in Madre de Dios have what an online coding class needs?',
      lede: 'The internet, increasingly yes. A computer, often not, and the share has gone down since 2021.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Connectivity in Madre de Dios households against Peru (per cent)', head: ['Indicator', 'MdD 2015', 'MdD 2021', 'MdD 2025', 'Peru 2025'], rows: [
          ['Household has a computer', '24.6', '29.8', '22.8', '33.9'],
          ['Household has internet at home', '12.1', '47.3', '53.4', '56.8'],
          ['Residents 6+ who use the internet', '34.9', '75.3', '87.0', '81.1']
        ] },
        { kind: 'source', html: 'ENAHO, INEI\'s national household survey, as reported in volume one of the 2026 Compendio Estadístico (tables 11.5, 11.6 and 11.13). MdD stands for Madre de Dios; INEI\'s decimal commas are shown as points.' },
        { kind: 'two', mt: true,
          leftH3: 'A connected region',
          left: [
            'In 2025, 87.0 per cent of Madre de Dios residents aged six and over used the internet, more than the national 81.1 per cent. Over half of households had a home connection.',
            'The regional government has also pursued connectivity: in June 2022 it reported winning national FIDT funding for pre-investment studies to bring an internet service to eight localities in the region.'
          ],
          rightH3: 'The missing machine',
          right: [
            'Household computers peaked at 29.8 per cent in 2021 and fell to 22.8 per cent by 2025. So in most homes the internet arrives through phones.',
            'For a live class that is half the answer. A phone can show the mentor\'s screen. It cannot comfortably hold an editor, a running program and its output while the learner types for an hour.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 9:</strong> a tablet or laptop for block coding, with an adult nearby.',
          '<strong>Ages 10 and up:</strong> a laptop or desktop with a keyboard; shared between siblings is fine.',
          '<strong>Any age:</strong> a headset if the home is busy, and the same quiet spot each week.',
          '<strong>Before paying:</strong> the free class runs on your real device, so you see whether it works.'
        ] },
        { kind: 'p', mt: true, html: 'Teachers have had help with devices: in July 2022 the regional government reported handing out 1,033 laptops, bought through its education directorate, to appointed teachers in public schools, in a programme covering 261 schools. That supports classroom teaching, though it does not put a computer in a pupil\'s home.' }
      ]
    },
    {
      id: 'language',
      eyebrow: 'English and fit',
      h2: 'Will a learner in Madre de Dios cope with classes in English?',
      lede: 'English is the only language our mentors teach in, always live and online. Many teenagers and adults manage that well, and young children can too when the format is right.',
      body: [
        { kind: 'two',
          leftH3: 'Figures we can rely on',
          left: [
            'EF\'s English Proficiency Index 2025 places Peru at 519, a moderate level. EF publishes scores for sixteen Peruvian regions; Madre de Dios is not one of them, so there is no regional English figure.',
            'MINEDU\'s 2025 census evaluation found 16.7 per cent of the region\'s fourth-graders at the satisfactory level in maths and 18.9 per cent in reading, against 30.0 and 32.7 nationally; in second year of secundaria, 6.0 and 8.0 per cent, against 12.7 and 18.5.'
          ],
          rightH3: 'Who usually does well',
          right: [
            'Secundaria pupils curious about science, nature or games, who will put up with not knowing every English word at first. Students of engineering, forestry, education or business. Adults in tourism, trade or public service who already meet English and want programming or data skills.',
            'For children under about ten we normally suggest private lessons, where the mentor can follow the child\'s speed and demonstrate rather than explain.'
          ] },
        { kind: 'p', mt: true, html: 'Talent is not the issue. In November 2021 the regional government reported that a pupil in 3° de secundaria from Iberia, in Tahuamanu province, had won second place nationally in ONEM, MINEDU\'s maths olympiad, in its Nivel II. Spanish-speaking parents can read our Spanish guide, <a class="ag-inline-link" href="/clases-de-programacion-en-ingles-peru">clases de programación en inglés</a>, and families of younger children can see <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">online coding classes for kids in Peru</a>.' }
      ]
    },
    {
      id: 'sensor',
      tint: 'tint',
      eyebrow: 'A Madre de Dios data project',
      h2: 'Is the fish-pond water at Puerto Maldonado warmer than the air?',
      lede: 'IIAP, the Peruvian Amazon research institute, ran a temperature sensor at the water intake of Puerto Maldonado\'s fish-farm ponds in late 2016 and has published the daily values. The question is easy to ask. Answering it well means noticing that some days are built on far more measurements than others.',
      body: [
        { kind: 'two',
          leftH3: 'What IIAP published',
          left: [
            'IIAP releases "Temperatura del agua y del ambiente registrada en Puerto Maldonado [IIAP]" through Peru\'s open data portal, datosabiertos.gob.pe, with an ODC-By (Open Data Commons Attribution) licence. IIAP describes daily water and air temperatures recorded "entre el 10 de noviembre y el 31 de diciembre de 2016 por un nodo sensor", placed "en el estanque de captación de agua de las piscigranjas de Puerto Maldonado".',
            'Our copy of the daily file, mediciones_diarias.csv, has 84 rows: 42 dates, each with a water value and an air value in degrees Celsius.'
          ],
          rightH3: 'The column that changes everything',
          right: [
            'Each row also has n_lecturas, the number of readings that day, from 1 to 288. IIAP\'s own data dictionary labels this column "por confirmar", to be confirmed, and describes each value as a daily average, also "por confirmar". We keep that caution.',
            'If 288 is a full day, as the maximum suggests, a day with 20 readings saw the sensor working for a small part of the day. Its average may describe one hot afternoon rather than the whole day.'
          ] },
        { kind: 'code', label: 'Version 1: compare every day', lang: 'Python', code: V1, note: 'It prints: <code>Days with both readings: 42</code>, <code>Water warmer than air: 40</code> and <code>Average gap: 3.13 degrees</code>.' },
        { kind: 'p', mt: true, html: 'Water was warmer on 40 days out of 42, by 3.13 degrees on average. Before believing it, look at the two exceptions and the extremes. The exceptions are 20 November 2016, built on 94 readings, and 1 December 2016, built on only 20. The air value of 14.975 degrees on 30 November rests on 40 readings. Several of the days that most affect the answer are the ones with least evidence behind them. Version 2 sets a minimum: a day must have at least 144 readings, half the maximum, to count.' },
        { kind: 'code', label: 'Version 2: keep only well-measured days', lang: 'Python', code: V2, note: 'It prints: <code>Thin days dropped: 18</code>, <code>Solid days kept: 24</code>, <code>Water warmer on solid days: 24 of 24</code>, <code>Average gap on solid days: 2.64 degrees</code> and <code>Coolest solid day for the air: 2016-12-04 16.2</code>.' },
        { kind: 'p', mt: true, html: 'On the 24 days with plenty of readings, the water was warmer every time, by 2.64 degrees on average. Both exceptions vanished, because both were thin days. But the program also threw away 18 days, and a fair report says so. The choice of 144 is ours, so the honest next step is to show how the answer moves as the minimum changes.' },
        { kind: 'table', mt: true, numCols: [0, 1, 2, 3], caption: 'How the answer changes with the minimum number of readings (our calculation)', head: ['Minimum readings', 'Days kept', 'Days water warmer', 'Average gap, degrees'], rows: [
          ['1', '42', '40', '3.13'],
          ['50', '35', '34', '2.9'],
          ['100', '27', '27', '2.62'],
          ['144', '24', '24', '2.64'],
          ['200', '12', '12', '3.59'],
          ['250', '9', '9', '3.99']
        ] },
        { kind: 'source', html: 'Data: Instituto de Investigaciones de la Amazonía Peruana (IIAP), Temperatura del agua y del ambiente registrada en Puerto Maldonado, ODC-By, daily values from 10 November to 31 December 2016 as published. Thresholds, counts and averages are ours, from a third short script that repeats Version 2 for each minimum.' },
        { kind: 'p', mt: true, html: 'Two lessons come out of the table. From a minimum of 100 upwards, the water is warmer on every day kept, so that conclusion is solid. The size of the gap is not: it moves between about 2.6 and 4.0 degrees depending on the cut-off, and with only nine days left at 250 it rests on very little. A careful analyst reports the firm finding firmly and the shaky one with its range.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, with cups.</strong> Measure a cup of water with a toy thermometer once, then five times. Which answer would you trust more?',
          '<strong>Blocks, around 8 to 10.</strong> Make two lists of five numbers. Count how many times the first list is bigger, position by position.',
          '<strong>First Python, around 10 to 12.</strong> Change <code>MIN_READINGS</code> to 100 in Version 2 and predict the output before running it.',
          '<strong>Ages 13 and over.</strong> Instead of dropping thin days, weight each day\'s gap by its number of readings. How does the weighted average compare?',
          '<strong>Going further.</strong> Find the dates missing between 10 November and 31 December 2016. Do the gaps cluster, and what might that say about the sensor?'
        ] }
      ]
    },
    {
      id: 'curriculum',
      eyebrow: 'Schools',
      h2: 'Do schools in Madre de Dios teach programming?',
      lede: 'Not as a subject of its own. The region\'s schools follow the national curriculum, in which digital skills belong to every area.',
      body: [
        { kind: 'two',
          leftH3: 'National rules',
          left: [
            'Under Ley 28044, the General Education Law, primaria runs for six years and secundaria for five, and MINEDU fixes a pupil\'s grade by age on 31 March. A child who is six on that date starts 1° de primaria.',
            'The technology competency of the national curriculum, number 28, is listed among the competencies shared by all areas. The regular secundaria week has 35 hours, four of them for Matemática and three for Inglés, with none named programming.'
          ],
          rightH3: 'Contests open to pupils here',
          right: [
            'ONEM, MINEDU\'s maths olympiad, starts with a round in every school. That round fell on 8 July 2026, and over 1.7 million secundaria pupils took part in the 2026 olympiad.',
            'UTEC runs Peru\'s computing olympiads, including OPI, and they are free for secundaria pupils. We are not connected with MINEDU, UTEC, IIAP, the regional government or any contest; every practice problem we use is our own.'
          ] },
        { kind: 'p', mt: true, html: 'For pupils who enjoy contest maths, our page on <a class="ag-inline-link" href="/math-olympiad-coaching-peru">maths olympiad coaching in Peru</a> describes how we prepare learners with problems we write ourselves. Teenagers who prefer data and science can read about <a class="ag-inline-link" href="/data-science-course-peru">our data science course for Peru</a>.' }
      ]
    },
    {
      id: 'path',
      tint: 'tint',
      eyebrow: 'Choosing',
      h2: 'Which first course suits a Madre de Dios learner?',
      lede: 'Start from age and from the device at home. The table gives our own suggestions.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our suggested first steps, by age and device', head: ['Learner', 'At home', 'First course', 'Format'], rows: [
          ['Child, 6 to 8', 'Tablet or laptop', 'Coding for Kids', 'Private'],
          ['Child, 9 to 12', 'Shared laptop', 'Blocks, then Python for kids', 'Private or class'],
          ['Secundaria, likes science', 'Laptop', 'Data science for teens', 'Class'],
          ['Secundaria, likes games', 'Laptop', 'Python, then game making', 'Class'],
          ['University student', 'Laptop', 'Python Masterclass', 'Class or private'],
          ['Adult at work', 'Laptop', 'Python, then data analysis', 'Private, mostly']
        ] },
        { kind: 'source', html: 'These are our suggestions only. Since MINEDU sets grades by age on 31 March, birthdays within one grade can be nearly a year apart.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Small children', p: 'Twenty to forty minutes of making something move, with the mentor naming each block in English as the child drags it.' },
          { h3: 'Teenagers', p: 'Python on real measurements and simple games, so every new idea arrives with something to use it on straight away.' },
          { h3: 'Adults', p: 'Practical programming: lists, tables and small tools that save time at work, built at a pace that fits long days.' }
        ] }
      ]
    },
    {
      id: 'lesson-times',
      eyebrow: 'Timing',
      h2: 'When could a learner in Madre de Dios have a lesson?',
      lede: 'At an hour the family chooses. Madre de Dios uses Peru time all year, and the mentor in India plans around it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Puerto Maldonado time and India time (examples, not a timetable)', head: ['Puerto Maldonado', 'India', 'Mentor\'s day'], rows: [
          ['06:30', '17:00', 'Late afternoon'],
          ['08:00', '18:30', 'Early evening'],
          ['12:00', '22:30', 'Late evening'],
          ['15:00', '01:30', 'Next day, night'],
          ['18:00', '04:30', 'Next day, early hours'],
          ['21:00', '07:30', 'Next day, morning']
        ] },
        { kind: 'source', html: 'Peru: UTC minus 5 hours, no daylight saving at any time of year (tz database, America/Lima). India: UTC plus 5 hours 30 minutes. India stays 10 hours 30 minutes ahead of Madre de Dios all year.' },
        { kind: 'p', mt: true, html: 'Neither country changes its clocks, so the hour agreed in the first week holds all year. You choose it on your own clock when booking. The 2026 school year in Peru opened on 16 March 2026, when 53,631 schools received 6,225,000 pupils; for school children the January to March summer break is a natural time to start, and adults can start any week.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'How a Madre de Dios learner moves up',
    lede: 'Six stages we use for every learner, so families can see what has been mastered and what is next.',
    table: { caption: 'Our stages, from first blocks to weighing evidence', head: ['Stage', 'Around age', 'Ability'], rows: [
      ['1. Direct', '6 to 7', 'Send a character through a path, step by step'],
      ['2. Cycle', '7 to 9', 'Repeat a move with a loop'],
      ['3. Compare', '8 to 10', 'Use greater-than and less-than to decide'],
      ['4. Pair', '9 to 12', 'Match two lists of values by a shared key, such as a date'],
      ['5. Filter', '11 to adult', 'Keep only the records that pass a rule'],
      ['6. Weigh', '13 to adult', 'Judge how much evidence sits behind each value, and show how a cut-off changes the answer']
    ] },
    left: { h3: 'For families', ps: [
      'The sensor project practises stages 4 to 6. Learners come away asking of any average: how many measurements is it built on?',
      'Each month you get a short note on progress and on what needs more work.'
    ] },
    right: { h3: 'For learners', ps: [
      'Twenty readings are not as good as 288.',
      'When you drop data, say how much and why.'
    ] }
  },

  catalogue: {
    eyebrow: 'Wider choice',
    h2: 'Nine more courses for Madre de Dios learners',
    lede: 'Three bands by age. Whatever the course, a single mentor teaches it live and in English, to a class or to one person.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'MDD / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Programming', blurb: 'Animated stories and games in blocks.' },
        { code: 'MDD / KIDS / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What AI is, safely and simply.' },
        { code: 'MDD / KIDS / 03', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'Number sense for the first school years.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'MDD / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Typed code from zero, at a steady pace.' },
        { code: 'MDD / TEEN / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development', blurb: 'Design and code playable games.' },
        { code: 'MDD / TEEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models built and tested by hand.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'MDD / ADULT / 01', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Questions answered from raw tables.' },
        { code: 'MDD / ADULT / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Averages, spread and uncertainty.' },
        { code: 'MDD / ADULT / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web', blurb: 'Complete web applications.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Weekly rhythm',
    h2: 'How online lessons run from Madre de Dios',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning', l: 'A Puerto Maldonado morning is the mentor\'s late afternoon.' },
      { time: 'Evening', l: 'After school or work also fits.' },
      { time: 'Private', l: 'Suits learners who need English slowed down.' }
    ],
    cells: [
      { h3: 'Constant mentor', p: 'The learner and mentor work together month after month.' },
      { h3: 'Patient English', p: 'Simple sentences, repeated, also written on screen.' },
      { h3: 'Learner types', p: 'Students do the coding; the mentor asks questions.' },
      { h3: 'Peers of an age', p: 'Classes group learners of similar ages only.' },
      { h3: 'Regular updates', p: 'A short monthly report for parents.' },
      { h3: 'Class or solo', p: 'Share lessons with up to twenty, or learn alone.' }
    ]
  },

  projectsH2: 'Built by students who kept going',
  projectsLede: 'Learners who stay with us build working programs and games. A selection is below, with more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews posted on Google by our families and students, quoted in full.',

  fees: {
    h2: 'Fees for learners in Madre de Dios',
    lede: 'Lessons are paid monthly, by card, in US dollars. Your bank converts the dollar charge into soles at its own rate, so the figure on your statement in soles can change slightly from one month to the next.',
    free: ['Free first lesson', 'Device, connection and English check', 'No card asked for'],
    group: ['Fifteen to twenty learners of similar age', 'A regular mentor', 'Two live lessons a week', 'Month to month, stop any time'],
    one: ['One learner, one mentor', 'Pace that fits the learner', 'Hours the family picks']
  },

  faq: {
    eyebrow: 'Madre de Dios asks',
    h2: 'Online coding and AI classes in Madre de Dios: common questions',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Lessons are only in English, live and online. Mentors keep their English slow and simple, adjust to how fast the learner goes and how they speak, and when a learner answers in Spanish they supply the English to try; they do not switch the lesson to Spanish.' },
      { q: 'We only have phones at home. Is that enough?', a: 'For watching a lesson, yes. For writing programs, no: from about ten a learner needs a keyboard and a larger screen. A shared laptop is enough, and young children can start block coding on a tablet.' },
      { q: 'Can learners in Mazuko, Huepetuhe or Iberia join?', a: 'Yes. Because lessons happen online, distance from Puerto Maldonado does not matter; a steady signal at your lesson time does. The free lesson tests it.' },
      { q: 'What if the connection drops during a lesson?', a: 'The learner rejoins and the mentor picks up where they stopped. If it happens often, we try audio with a shared screen, or a different hour of the day.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Madre de Dios is 10 hours 30 minutes behind India all year; 08:00 in Puerto Maldonado is 18:30 for the mentor.' },
      { q: 'Do schools here teach programming?', a: 'No dedicated subject exists. Peru\'s curriculum asks every area to build digital skills, and no hour of the ordinary secundaria week is given to programming.' },
      { q: 'Are the classes useful for university students in Puerto Maldonado?', a: 'Yes. Python and data analysis support degrees in engineering, forestry, education and business. We teach alongside your studies; the university decides your grades.' },
      { q: 'Do you teach AI?', a: 'Yes. Older learners build and test simple models and see where they fail; children explore the ideas in games. Under-13s never use adult AI accounts in our lessons.' },
      { q: 'How do we pay?', a: 'By card, once a month, in US dollars; the bank converts the charge to soles. Visitors from India see rupee prices. The first lesson is free.' },
      { q: 'Is there a certificate?', a: 'Courses that include one finish with a completion certificate from us. It is not a Peruvian school or university qualification, and no Peruvian authority awards or recognises it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Next pages',
    h2: 'Related pages for Madre de Dios families',
    lede: 'Guides that learners and parents in Madre de Dios often read next.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru guide we have, in one list.' },
      { href: '/online-coding-classes-for-kids-peru', label: 'Online coding classes for kids in Peru', p: 'What to look for in a child\'s first course.' },
      { href: '/data-science-course-peru', label: 'Data science course for Peru', p: 'Working with real data, in English.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Coding with blocks.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits of common AI tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson from start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free class from Madre de Dios',
    lede: 'The trial follows a real lesson: a short puzzle, a first program that runs, and a little conversation in simple English on the device you would really use. Afterwards the mentor tells you frankly whether to begin now, and in which course and format.',
    readFirst: 'To learn more first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look through the syllabuses on <a class="ag-inline-link" href="/courses">our courses</a> page.',
    note: 'Our mentors teach from India, live on video and in English. WhatsApp is quickest for questions, and English messages get answered first.',
    formNote: 'Free, no card, no commitment.'
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
    bottomRight: 'Twenty readings are not 288'
  },

  personalityCss: `
.ag-root.ag-camd .ag-hero h1 { letter-spacing: -0.009em; max-width: 21ch; }
.ag-root.ag-camd .ag-capsule { border-left-width: 4px; border-radius: 10px; }
.ag-root.ag-camd .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-camd .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-camd .ag-code-head b { letter-spacing: 0.07em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadros N° 1 and 3), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017; INEI Compendio Estadístico Perú 2026 (cuadros 11.5, 11.6, 11.13, 5.16, 5.22, 5.53, 5.54, 5.75); Gobierno Regional de Madre de Dios notes on gob.pe (17 November 2021, 15 June 2022, 6 July 2022); Ley 28044; MINEDU Edades normativas, CNEB, ONEM 2026; UTEC OPI; EF EPI 2025; tz database. Data: IIAP, Temperatura del agua y del ambiente registrada en Puerto Maldonado, ODC-By.',
    localProject: 'Is the fish-pond water at Puerto Maldonado warmer than the air? An original Python project on IIAP sensor data (ODC-By, 42 dates in late 2016): Version 1 compares every day and finds water warmer on 40 of 42 (average gap 3.13 degrees); Version 2 keeps only days with at least 144 readings, drops 18, and finds 24 of 24 (2.64 degrees); a threshold sweep shows the direction is firm and the size is not. Lesson family: thin evidence.',
    requiredMentions: ['mediciones_diarias.csv', 'Water warmer than air: 40', 'Water warmer on solid days: 24 of 24', 'Thin days dropped: 18', '208,667', 'Residents 6+ who use the internet', 'las piscigranjas de Puerto Maldonado', '1,033 laptops', 'Twenty readings are not 288'],
    sources: [
      { claim: 'Department, province and district populations of Madre de Dios, 2025, and age bands.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Puerto Maldonado city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Populated centres of Madre de Dios, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto17.xlsx' },
      { claim: 'Computers, internet, internet use, ECE 2025, enrolment and teachers in Madre de Dios and Peru.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: '1,033 laptops for appointed teachers in 261 schools.', url: 'https://www.gob.pe/institucion/regionmadrededios/noticias/629785-dia-del-maestro-goremad-entrega-mas-de-mil-laptops-a-docentes-nombrados-de-colegios-publicos-de-madre-de-dios' },
      { claim: 'FIDT funding for an internet pre-investment study in eight localities.', url: 'https://www.gob.pe/institucion/regionmadrededios/noticias/622741-goremad-gana-fondo-concursable-para-la-construccion-de-un-colegio-y-elaboracion-de-un-perfil-de-acceso-a-internet' },
      { claim: 'ONEM 2021 second place for a pupil from Iberia.', url: 'https://www.gob.pe/institucion/regionmadrededios/noticias/557842-estudiante-de-la-i-e-nina-maria-de-iberia-logra-el-segundo-lugar-en-olimpiada-nacional-escolar-de-matematicas' },
      { claim: 'IIAP water and air temperature at Puerto Maldonado, ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/temperatura-del-agua-y-del-ambiente-registrada-en-puerto-maldonado-iiap' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 score for Peru and its scored regions.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without daylight saving.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'That 288 readings is a full day at five-minute intervals: an inference from the maximum, stated as such; IIAP marks the column as to be confirmed.',
      'Any claim about fish health, weather events or river conditions: none; the project compares two temperature series only.',
      'The name of the ONEM 2021 medallist: a minor, not printed.',
      'Political names in the regional notes and any amounts of money: left out.',
      'Comparing 2017 town figures with 2025 district figures: refused.',
      'A regional English score: EF does not score Madre de Dios.',
      'Any connection with GORE Madre de Dios, the DRE, IIAP, MINEDU, UTEC or any school: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
