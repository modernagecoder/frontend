// SHIP: region | Áncash: Chimbote's coast and Huaraz's valley, 20 provinces, mountain data | streaks: count runs of dry days and close the run still open when the loop ends
'use strict';
// Áncash region (ag- region page, Peru cluster row PE169, P5; alloc: regions, cay, #7B5600). Written 2026-11-09.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; USD only, through the template's data-price anchors.
// Spine: Áncash is two regions in one: the province of Santa on the coast (Chimbote and Nuevo Chimbote, counted
// separately) holds over 40% of the people, while the capital, Huaraz, sits at over 3,000 m in the Callejón de Huaylas.
// The page covers both, then teaches with a mountain dataset from above Huaraz: soil moisture under pine and grassland.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/<slug>/ and pe/src/inei):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (places.tsv; tab/tsv_ind_00/sheet2): ÁNCASH
//    1205923 total (censada 1164927); provinces SANTA 500520, HUARAZ 184353, HUARI 64926, CASMA 61015, YUNGAY 59171,
//    HUAYLAS 57884, CARHUAZ 50100, HUARMEY 38155 (20 provinces); districts CHIMBOTE 229247, HUARAZ 66236. Capital Huaraz
//    (Compendio 2026 cuadro 1.8). Never summed.
//  - Same tabulado, Cuadro N° 3 (sheet4): ÁNCASH censada "117586" aged 6 to 11 and "122886" aged 12 to 17.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Huaraz city 118,836 (2017, conglomerate). INEI Lib1541 dpto02.xlsx (2017,
//    single centros poblados): CHIMBOTE 179 909 at "52" m; BUENOS AIRES (district Nuevo Chimbote) 158 385 at "40" m;
//    CENTENARIO (district Independencia) 60 683 at "3 046"; HUARAZ 53 733 at "3 073". Chimbote and Buenos Aires are kept
//    separate: INEI publishes no combined total in these sources.
//  - INEI Compendio Estadístico Perú 2026, tomo 1: 1.7 "Áncash 35 877,7" km2; 11.5 households with a computer Áncash 2025
//    "30,3" (Total 33,9); 11.6 households with internet "51,5" (Total 56,8); 11.13 people aged 6+ using internet "80,9"
//    (Total 81,1); 5.53 2025 4° primaria satisfactory maths 30,1 (Total 30,0), reading 31,2 (32,7); 5.54 2025 2°
//    secundaria maths 10,7 (12,7), reading 15,3 (18,5); 5.16 public primaria 2025 "104,2" thousand; 5.22 public
//    secundaria "89,9"; 5.75 teachers 2025 "25 211"; 5.66 Universidad Nacional Santiago Antunez de Mayolo 2025 "7 684",
//    Universidad Nacional del Santa "5 557".
//  - DRE Áncash, gob.pe news 21 August 2024 (drea-aula-movil.html): a mobile classroom run with MINEDU "ha concluido su
//    programa de dos semanas en la región Áncash, beneficiando a más de 160 estudiantes de secundaria en zonas rurales";
//    closing "en el distrito de Ticapampa"; "un tráiler itinerante equipado para escenarios con y sin conectividad".
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): stateScore slug "ankashu", name "Ankashu", "low", 475;
//    Peru 519; Lima 555 high.
//  - National (verified raw copies under pe/facts-school/src): Ley 28044; Edades normativas; CNEB competency 28 and
//    secundaria hours; MINEDU Fábrica de Programadores (1,000 pupils, Lima Norte, Python, PCEP); ONEM 2026 school stage
//    "miércoles 08 de Julio", ten items, two hours; OPI by UTEC, free, 2026 final 11 April 2026.
//  - Time: tzdata America/Lima UTC-5 (last Peru rule 1994); Asia/Kolkata UTC+5:30; India 10 h 30 min ahead all year.
//  - Data: Instituto Nacional de Investigación en Glaciares y Ecosistemas de Montaña (INAIGEM), "Mediciones de humedad del
//    suelo en el sector Tayacoto, distrito de Independencia, Ancash [INAIGEM]", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/mediciones-de-humedad-del-suelo-en-el-sector-tayacoto-distrito-de-independencia-ancash,
//    licence "Open Data Commons Attribution License" (dc:license on the raw page), modified 2024-05-30. Metadata (docx):
//    "zona de bofedales perteneciente a Carhuacpampa"; "tres microestaciones automáticas"; "Microestación 02: Ubicado
//    sobre plantaciones de Pino", "03: Ubicado sobre plantaciones de Pino", "04: Ubicado sobre Pastizales"; "Humedad
//    volumétrica del suelo promedio a 20, 60 y 100 cm"; coverage 2019 to 2023. Dictionary (xlsx): "Humendad del suelo
//    promedio a 20 centímetros grado Celsius" (a unit slip). File QUI-TAY-MEHM-02_PNDA.csv, 322,057 bytes, sha256
//    4492f50b...b3af0b, 3,920 rows: stations 02 and 03 1,478 days each (15 Aug 2019 to 31 Aug 2023), 04 964 days (to
//    4 Apr 2022), no missing days.
// Our own calculations (scratchpad pe/r2/ancash/v1.py, v2.py; python3 -I on the downloaded file):
//  v1 prints: Dry spells: 6 / Longest: 119 days / Most recent: 80 days
//  v2 prints: QUI-TAY-MEHM-02 spells: 7 longest: 119 | record ends 20230831 dry for the last 48 days /
//    QUI-TAY-MEHM-03 spells: 19 longest: 208 | record ends 20230831 dry for the last 110 days /
//    QUI-TAY-MEHM-04 spells: 0 longest: 0 | record ends 20220404 not dry
//  Station 02 spells (days, first, last): 38 2019-08-15..09-21; 119 2020-07-26..11-21; 33 2021-08-06..09-07; 1
//    2021-10-05; 76 2022-07-17..09-30; 80 2022-10-10..12-28; 48 2023-07-15..08-31 (open).
// Lesson family: counting streaks (runs) with a counter that resets, and the classic bug of forgetting the run that is
// still open when the loop ends; the dry threshold is our choice and is stated.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'DRY = 6.0      # our choice: a dry day reads below 6 at 20 cm',
  '',
  'spells = []',
  'run = 0',
  'with open("QUI-TAY-MEHM-02_PNDA.csv", encoding="utf-8") as readings:',
  '    for day in csv.DictReader(readings):',
  '        if day["ESTACION"] != "QUI-TAY-MEHM-02":',
  '            continue',
  '        if float(day["HUMEDAD_SUELO_PROMEDIO_20"]) < DRY:',
  '            run += 1',
  '        elif run > 0:',
  '            spells.append(run)',
  '            run = 0',
  '',
  'print("Dry spells:", len(spells))',
  'print("Longest:", max(spells), "days")',
  'print("Most recent:", spells[-1], "days")'
].join('\n');

const V2 = [
  'import csv',
  '',
  'DRY = 6.0      # our choice: a dry day reads below 6 at 20 cm',
  '',
  'def dry_spells(station):',
  '    spells = []',
  '    run = 0',
  '    last_day = None',
  '    with open("QUI-TAY-MEHM-02_PNDA.csv", encoding="utf-8") as readings:',
  '        for day in csv.DictReader(readings):',
  '            if day["ESTACION"] != station:',
  '                continue',
  '            last_day = day["FECHA_REGISTRO"]',
  '            if float(day["HUMEDAD_SUELO_PROMEDIO_20"]) < DRY:',
  '                run += 1',
  '            elif run > 0:',
  '                spells.append(run)',
  '                run = 0',
  '    if run > 0:                      # the file ended in the middle of a spell',
  '        spells.append(run)',
  '    return spells, run, last_day',
  '',
  'for station in ("QUI-TAY-MEHM-02", "QUI-TAY-MEHM-03", "QUI-TAY-MEHM-04"):',
  '    spells, still_open, last_day = dry_spells(station)',
  '    ending = f"dry for the last {still_open} days" if still_open else "not dry"',
  '    print(station, "spells:", len(spells), "longest:", max(spells, default=0),',
  '          "| record ends", last_day, ending)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Áncash region' },
  slug: 'online-coding-and-ai-classes-ancash-region-peru',
  code: 'cay',
  accent: '#7B5600',
  accentRationale: 'Áncash region: a warm ochre-brown #7B5600, the colour of the dry puna grass above the Callejón de Huaylas, allocated to this row; contrast 6.24 on #FBF8F2, 5.87 on #F5F1E8 and 5.37 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Áncash region, Peru',
  title: 'Online Coding and AI Classes, Áncash Region, Peru',
  description: 'Live coding and AI classes in English for Chimbote, Nuevo Chimbote, Huaraz and all of Áncash: online, any hour, with census facts and a mountain soil data project.',
  ogDescription: 'Live online coding, AI and maths in English for learners across Áncash, from the Santa coast to the Callejón de Huaylas: census and school facts, home internet, and a Python project on soil moisture measured above Huaraz.',
  twitterDescription: 'Áncash, from Chimbote to Huaraz: live online coding and AI in English, with census facts and a mountain soil data project.',
  pageName: 'Online Coding and AI Classes in the Áncash Region, Peru',
  webPageDescription: 'A guide for families and adults in Áncash to live online coding, AI and maths classes taught in English, using INEI census and compendium tables, MINEDU curriculum facts, a DRE Áncash news release, EF EPI 2025, and an original Python project on INAIGEM\'s open soil moisture readings from Tayacoto, Independencia (ODC-By).',
  courseDescription: 'Live online coding, AI and maths classes in English for learners in the Áncash region of Peru: Minecraft and Scratch coding for children, data science and statistics for teenagers, and Python automation and data analysis for adults, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Áncash region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#two-ancash', label: 'Coast and valley' },
    { href: '#schooling', label: 'School' },
    { href: '#soil', label: 'Soil project' },
    { href: '#english', label: 'English' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Áncash region &middot; Live online, in English &middot; Ages 6 to adult',
  h1: 'Online coding and AI classes in the Áncash region',
  lede: 'Chimbote is a port at sea level and Huaraz is a mountain town above three thousand metres, a long and steep drive apart, yet they belong to the same region. A live online class reaches both at once. This page covers Áncash\'s people and schools, the equipment and signal a lesson depends on, which of our courses suits each age, and a project on soil moisture measured above Huaraz, where a program that forgets its last step reports the wrong drought.',
  secondaryCta: { href: '#soil', label: 'See the soil moisture project' },
  wa: 'Hello Modern Age Coders, we are in Áncash, Peru (Chimbote or Huaraz) and would like live coding or AI classes in English. Could we book a free class?',
  heroNote: 'Live online teaching since 2020 &middot; 10,000+ learners in many countries &middot; English matched to the learner',
  spec: [
    ['Ages', '6 to adult, in age-matched groups'],
    ['Places', 'Chimbote, Nuevo Chimbote, Huaraz, Casma, Caraz and beyond'],
    ['Topics', 'Coding, AI, data and maths'],
    ['Groups', 'Fifteen to twenty learners, or one to one'],
    ['Schedule', 'Picked by the family, any weekday or weekend'],
    ['Trial', 'One free class, no card']
  ],
  capsuleQ: 'At a glance',
  capsule: 'Families in every part of Áncash, from Chimbote and Nuevo Chimbote on the coast to Huaraz, Carhuaz and Caraz in the Callejón de Huaylas, can study with Modern Age Coders: live online coding, AI and maths classes, always taught in English. Young children start with Minecraft or Scratch, secundaria students take data science, Python and statistics, and adults learn automation and data analysis. Every session has a mentor on video, in a group of fifteen to twenty or one to one, at hours the family chooses.',

  picks: {
    eyebrow: 'Good first courses in Áncash',
    h2: 'Three courses Áncash learners tend to begin with',
    lede: 'A game-based start for children, a data course for teenagers who like science, and a practical Python course for adults. Six more options sit in the catalogue further down.',
    items: [
      { course: 'minecraft-coding-for-kids-course', code: 'ANC / 01', title: 'Minecraft Coding for Kids', note: 'For primaria children who already love building worlds. They start with blocks inside Minecraft and gradually meet real code, so the game becomes a reason to think in steps.' },
      { course: 'data-science-course-for-teens-python-data', code: 'ANC / 02', title: 'Data Science for Teens', note: 'Aimed at secundaria students with a little Python behind them. They plot sensor readings, test simple models and learn when a chart is misleading, close cousins of the soil moisture project further down.' },
      { course: 'python-ai-automation-masterclass-college', code: 'ANC / 03', title: 'Python Automation', note: 'For university students and working adults: scripts that clean files, fetch data and handle repetitive tasks, with applied AI where it genuinely helps.' }
    ]
  },

  sections: [
    {
      id: 'two-ancash',
      eyebrow: 'Coast and valley',
      h2: 'Where do people live in Áncash: Chimbote or Huaraz?',
      lede: 'More of them on the coast. INEI\'s 2025 census counted 1,205,923 people in the department of Áncash, in 20 provinces over 35,877.7 square kilometres, and 500,520 of them in the coastal province of Santa alone. The capital, though, is Huaraz.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Áncash: the department and its five largest provinces, with two key districts (2025 census, total population)', head: ['Unit', '2025', 'Main town'], rows: [
          ['Department of Áncash', '1,205,923', 'Huaraz (capital)'],
          ['Province of Santa', '500,520', 'Chimbote, Nuevo Chimbote'],
          ['Province of Huaraz', '184,353', 'Huaraz, Independencia'],
          ['Province of Huari', '64,926', 'Huari'],
          ['Province of Casma', '61,015', 'Casma'],
          ['Province of Yungay', '59,171', 'Yungay'],
          ['District of Chimbote', '229,247', 'Chimbote'],
          ['District of Huaraz', '66,236', 'Huaraz']
        ] },
        { kind: 'source', html: 'Totals from INEI\'s 2025 census (Indicadores demográficos, Cuadro N° 1), counted as of 15 September 2025. The capital and the department\'s area come from the INEI compendium for 2026 (cuadros 1.8 and 1.7). Districts are part of provinces and provinces part of the department, so these rows overlap by design.' },
        { kind: 'two', mt: true,
          leftH3: 'The Chimbote area, kept separate',
          left: [
            'INEI has not published 2025 city totals, and its 2017 sources give no single figure for greater Chimbote either. What they do give is two separate centros poblados: Chimbote itself, 179,909 people at 52 metres above sea level, and Buenos Aires in the district of Nuevo Chimbote, 158,385 people at 40 metres.',
            'They are neighbours, but they are counted as two places, and we keep them that way. Adding them would produce a number INEI never published.'
          ],
          rightH3: 'Huaraz and the Callejón de Huaylas',
          right: [
            'The city of Huaraz had 118,836 people in the 2017 census. Within it, INEI\'s directory lists the centro poblado of Huaraz with 53,733 people at 3,073 metres, and Centenario, in the district of Independencia, with 60,683 at 3,046.',
            'Up the valley lie Carhuaz, Yungay and Caraz, and across the Cordillera Blanca the provinces of the Conchucos side, such as Huari and Pomabamba. Distances are long and roads climb steeply, which is exactly where a class that needs no travel makes a difference.'
          ] },
        { kind: 'p', mt: true, html: 'In 2025 the census counted 117,586 people aged 6 to 11 and 122,886 aged 12 to 17 in the department, close to the primaria and secundaria age bands. These are people interviewed in person, so they sit a little below what a share of the headline total would suggest; INEI adds an estimate of people missed only to the totals. Two public universities serve the region: INEI\'s compendium counts 7,684 undergraduates at the Universidad Nacional Santiago Antúnez de Mayolo in Huaraz and 5,557 at the Universidad Nacional del Santa in 2025.' }
      ]
    },
    {
      id: 'connected',
      tint: 'tint',
      eyebrow: 'Home internet',
      h2: 'Are Áncash homes connected enough for online lessons?',
      lede: 'About half are. In 2025, 51.5% of Áncash households had an internet service, a little below the national 56.8%, while personal internet use, at 80.9% of people aged 6 and over, was almost level with Peru\'s 81.1%.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Áncash and Peru compared on home technology and internet use, 2025 (percent)', head: ['What was measured', 'Áncash', 'All Peru'], rows: [
          ['Homes with at least one computer', '30.3', '33.9'],
          ['Homes with internet access', '51.5', '56.8'],
          ['People from age 6 who use the internet', '80.9', '81.1']
        ] },
        { kind: 'source', html: 'INEI\'s Encuesta Nacional de Hogares, as reported in the Compendio Estadístico Perú 2026 (volume 1, tables 11.5, 11.6 and 11.13). The last row counts internet use in any place, not only at home.' },
        { kind: 'two', mt: true,
          leftH3: 'A regional signal',
          left: [
            'On 21 August 2024 the Dirección Regional de Educación de Áncash reported that a mobile classroom, run with MINEDU, had finished a two-week programme in the region for more than 160 secundaria students in rural areas, closing in the district of Ticapampa. It was a trailer equipped to work with or without connectivity, aimed at digital and entrepreneurial skills.',
            'It shows both the appetite and the problem: digital learning in rural Áncash often has to plan for no connection at all. Our classes need one, so we say so plainly.'
          ],
          rightH3: 'What to check before the free class',
          right: [
            'A steady connection for about an hour of video, a laptop or desktop for typed code, and headphones if the house is busy. Children doing Minecraft or Scratch can manage on a tablet with a keyboard.',
            'If the signal is better at certain hours, tell us and choose those hours. One to one makes it easier to pause when the line drops, and the mentor can send the code afterwards so nothing is lost.'
          ] }
      ]
    },
    {
      id: 'schooling',
      eyebrow: 'School in Áncash',
      h2: 'What do Áncash schools teach about computing?',
      lede: 'They follow Peru\'s national curriculum, the CNEB, which has no programming or computing subject. On the 2025 national assessment Áncash matched the national average in primaria maths and fell a little below it in secundaria.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Pupils judged satisfactory on MINEDU\'s 2025 assessment, Áncash against the country', head: ['Grade, subject', 'Áncash region', 'Whole country'], rows: [
          ['4° de primaria, maths', '30.1%', '30.0%'],
          ['4° de primaria, reading', '31.2%', '32.7%'],
          ['2° de secundaria, maths', '10.7%', '12.7%'],
          ['2° de secundaria, reading', '15.3%', '18.5%']
        ] },
        { kind: 'source', html: 'MINEDU\'s measurement unit produced these results; INEI\'s 2026 compendium prints them as its cuadros 5.53 and 5.54. Pupil and teacher numbers in the next block also come from that compendium (cuadros 5.16, 5.22, 5.75).' },
        { kind: 'two', mt: true,
          leftH3: 'The curriculum, briefly',
          left: [
            'Under Law 28044 primaria runs for six years and secundaria for five; a child\'s grade follows from the age they have reached by 31 March, MINEDU\'s cut-off. The CNEB treats digital skills as competency 28, a transversal competency that belongs to every subject but has no lessons of its own.',
            'The regular secundaria timetable has 4 weekly hours of Matemática, 3 of Inglés and none of programming. MINEDU\'s only Python pilot, Fábrica de Programadores, is for a thousand older secundaria pupils in the north of Lima, far from Áncash.'
          ],
          rightH3: 'Áncash\'s schools in numbers',
          right: [
            'In 2025, Áncash\'s public schools taught 104.2 thousand pupils in primaria and 89.9 thousand in secundaria, and the region had 25,211 teachers across all levels. Nationally, 6,225,000 students in 53,631 schools began the 2026 school year on 16 March 2026.',
            'The secundaria maths figure, 10.7% satisfactory in 2° de secundaria, is where most families tell us they want help: not more of the same exercises, but a different way into the same ideas, often through code.'
          ] },
        { kind: 'p', mt: true, html: 'Contests are open too. The ONEM, Peru\'s school maths olympiad, held its 2026 school round on 8 July 2026, a two-hour paper of ten questions, and entry is through the colegio. The OPI, the programming olympiad UTEC organises free for every secundaria student, held its 2026 final on 11 April 2026. We teach with our own problems and have no link with MINEDU, UTEC or either contest. Families who want school maths taught in English can read about our <a class="ag-inline-link" href="/profesor-de-matematicas-en-ingles-peru">maths teachers in English for Peru</a>; for the national picture by grade, see <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'soil',
      tint: 'tint',
      eyebrow: 'A real Áncash project',
      h2: 'How long does the soil above Huaraz stay dry?',
      lede: 'INAIGEM, the national institute for glacier and mountain ecosystem research, publishes daily soil moisture readings from Tayacoto, in the district of Independencia above Huaraz. Our students use them to count dry spells, and to meet one of the most common bugs in programming: forgetting the streak that is still going when the data runs out.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is "Mediciones de humedad del suelo en el sector Tayacoto, distrito de Independencia, Ancash", published by INAIGEM on the Plataforma Nacional de Datos Abiertos under the Open Data Commons Attribution Licence (ODC-By). Its metadata says it covers the wetland area (bofedales) of Carhuacpampa from 2019 to 2023, measured by three small automatic stations: two set among pine plantations (02 and 03) and one on grassland (04).',
            'The file has 3,920 daily rows: stations 02 and 03 run from 15 August 2019 to 31 August 2023 with no missing days, and station 04 stops on 4 April 2022. Each row gives the average volumetric soil moisture at 20, 60 and 100 centimetres down.'
          ],
          rightH3: 'The question',
          right: [
            'How many dry spells did the topsoil at station 02 go through, how long was the longest, and how long was the latest? We have to define "dry", and we do it openly: a day is dry, for this exercise, when the 20 centimetre reading is below 6. That threshold is our choice, not INAIGEM\'s.',
            'The method is the classic streak counter. Walk through the days in order, add one to a counter on each dry day, and when a wet day arrives, save the counter as a finished spell and reset it to zero.'
          ] },
        { kind: 'code', label: 'Version 1: count the dry spells at station 02', lang: 'Python', code: V1, note: 'It prints <code>Dry spells: 6</code>, <code>Longest: 119 days</code> and <code>Most recent: 80 days</code>.' },
        { kind: 'p', mt: true, html: 'Six spells, the longest of 119 days, from 26 July to 21 November 2020, and the most recent of 80 days, ending on 28 December 2022. It looks finished. But the record ends on 31 August 2023, in the middle of the Andean dry season, and Version 1 only saves a spell when a wet day arrives. The 48 dry days at the very end never met a wet day, so the counter was holding them when the loop stopped and the program simply threw them away.' },
        { kind: 'p', html: 'The fix is one short block after the loop: if the counter is not zero, the file ended during a spell, so save it. Version 2 adds that block, turns the counting into a function, and runs it on all three stations.' },
        { kind: 'code', label: 'Version 2: close the open spell, and compare all three stations', lang: 'Python', code: V2, note: 'It prints <code>QUI-TAY-MEHM-02 spells: 7 longest: 119 | record ends 20230831 dry for the last 48 days</code>, <code>QUI-TAY-MEHM-03 spells: 19 longest: 208 | record ends 20230831 dry for the last 110 days</code> and <code>QUI-TAY-MEHM-04 spells: 0 longest: 0 | record ends 20220404 not dry</code>.' },
        { kind: 'p', mt: true, html: 'Station 02 now has seven spells, and the most recent is the open one, still running on the last day of the file. The other two stations tell a story of their own. Under the second stand of pines, station 03, the topsoil went through 19 dry spells and was dry for its last 110 days. Under grassland, station 04 never once read below 6 at 20 centimetres, though its record is shorter and ends in April 2022. The data cannot say why on its own, and the metadata gives no explanation; what it shows is that a single sentence about "the soil above Huaraz" would hide a large difference between neighbouring stations.' },
        { kind: 'table', mt: true, numCols: [0, 2], caption: 'Dry spells at station 02 (our calculation, 20 cm reading below 6)', head: ['Spell', 'Days', 'From', 'To'], rows: [
          ['1', '38', '15 Aug 2019', '21 Sep 2019'],
          ['2', '119', '26 Jul 2020', '21 Nov 2020'],
          ['3', '33', '6 Aug 2021', '7 Sep 2021'],
          ['4', '1', '5 Oct 2021', '5 Oct 2021'],
          ['5', '76', '17 Jul 2022', '30 Sep 2022'],
          ['6', '80', '10 Oct 2022', '28 Dec 2022'],
          ['7', '48', '15 Jul 2023', '31 Aug 2023 (file ends)']
        ] },
        { kind: 'source', html: 'Data: INAIGEM, Mediciones de humedad del suelo en el sector Tayacoto, distrito de Independencia, Ancash, Plataforma Nacional de Datos Abiertos, licence ODC-By. Spells, dates and the threshold of 6 are ours. A careful reader of the publisher\'s data dictionary will notice that it labels the moisture columns with the unit "grado Celsius", a temperature unit, while the metadata describes them as volumetric soil moisture; we follow the metadata.' },
        { kind: 'p', mt: true, html: 'Spell 1 has the mirror-image problem. It begins on 15 August 2019, the first day of the file, so the soil may already have been dry before the station started recording. An honest report says "at least 38 days" for that one, just as it says "at least 48 days, still running" for the last.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 9, with a calendar.</strong> Colour rainy days blue and dry days yellow for two weeks, then count the longest yellow run. What if the two weeks end on a yellow day?',
          '<strong>Scratch, around 9 to 11.</strong> Make a list of ten numbers and a counter that grows while numbers are below 6 and resets otherwise. Test it with a list that ends on a small number.',
          '<strong>First Python, around 11 to 13.</strong> Type in the first program, see it miss the last spell, and write your own repair before looking at Version 2.',
          '<strong>Ages 13 and over.</strong> Change the threshold from 6 to 5 and to 7. Which conclusions survive and which depend on our choice?',
          '<strong>Going further.</strong> Repeat the count at 60 and 100 centimetres, and find out whether the deeper soil dries later than the surface at each station.'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish?',
      lede: 'No. Our classes are live, online and in English only, taught by mentors in India who keep their English simple and adjust to each learner.',
      body: [
        { kind: 'two',
          leftH3: 'Where the region stands',
          left: [
            'In EF\'s English Proficiency Index 2025, the Áncash region scores 475, in EF\'s low band (EF\'s page spells the region "Ankashu"). Peru as a whole scores 519 and Lima city 555. EF lists no separate score for Chimbote or Huaraz.',
            'That makes the first weeks the important ones. Mentors use short instructions, show rather than tell, and put new words in the chat so the learner can read them as well as hear them.'
          ],
          rightH3: 'Why English and code fit together',
          right: [
            'Programming vocabulary is small and repetitive: if, while, print, list. Learners meet the same words every lesson, which makes code an unusually gentle way to practise English.',
            'Replies in Spanish are fine: the mentor follows them and hands back the English version. For a Spanish explanation to share with grandparents, there is <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.'
          ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'By age',
      h2: 'Which course is right for each age in Áncash?',
      lede: 'Our suggestions, by age and interest; the free class confirms the level.',
      body: [
        { kind: 'table', numCols: [], caption: 'First courses we usually suggest in Áncash', head: ['Age', 'If they like...', 'Suggested start', 'A first project'], rows: [
          ['6 to 9', 'Building games', 'Minecraft or Scratch coding', 'A world that changes when you step on a block'],
          ['8 to 12', 'Asking AI questions', 'Vibe coding for kids', 'A simple game made with AI help, then explained'],
          ['10 to 15', 'Numbers and patterns', 'Maths through coding', 'A table of squares and a pattern spotted in it'],
          ['13 to 18', 'Science and data', 'Python for Teens, then data science', 'A chart of real measurements'],
          ['18 and over', 'Saving time at work', 'Python automation or data analysis', 'A script that tidies a monthly file']
        ] },
        { kind: 'p', mt: true, html: 'Students at UNASAM in Huaraz or the Universidad Nacional del Santa on the coast are placed with other adults, at times set around their own timetables. Engineering students can read, in Spanish, about <a class="ag-inline-link" href="/python-para-estudiantes-de-ingenieria-peru">Python para estudiantes de ingeniería</a>.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time would classes be in Chimbote or Huaraz?',
      lede: 'Whatever time suits you. All of Áncash keeps Peru time, UTC minus five all year round, and mentors work to it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Áncash time and India time, side by side (examples, not set class times)', head: ['Áncash', 'India', 'Comment'], rows: [
          ['07:00', '17:30', 'India evening'],
          ['10:00', '20:30', 'India evening'],
          ['13:00', '23:30', 'India late evening'],
          ['16:00', '02:30', 'India, following day'],
          ['20:00', '06:30', 'India, following day']
        ] },
        { kind: 'source', html: 'Peru has stayed on UTC minus 5 without summer time since 1994, as the America/Lima entry of the tz database records; India stays on UTC plus 5:30. So the difference is fixed at 10 hours 30 minutes.' },
        { kind: 'p', mt: true, html: 'A slot agreed in January stays the same in July, because neither country moves its clocks. You choose times on your own clock when booking and the mentor sees the India equivalent. Families on the coast and in the mountains often prefer the morning, when the Indian evening gives a calm start before colegio.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Six milestones for an Áncash learner',
    lede: 'One scale of our own for all ages. It helps us place each new learner and lets families see progress in finished work.',
    table: { caption: 'From first instructions to honest summaries (our scale)', head: ['Milestone', 'Common age', 'The learner shows'], rows: [
      ['1. First steps', '6 or 7', 'A character that follows a sequence of commands'],
      ['2. Loops', '7 to 9', 'Repeated actions and reactions to the player'],
      ['3. Counters', '8 to 11', 'A score that grows and resets at the right moments'],
      ['4. Python', '9 to 12', 'Functions with loops and conditions, explained aloud'],
      ['5. Time series', '12 to adult', 'Day-by-day data read in order and summarised'],
      ['6. Edge cases', '13 to adult', 'The first and last records handled, and the threshold stated']
    ] },
    left: { h3: 'For parents', ps: [
      'The soil project reaches milestones 5 and 6: reading measurements in order and handling the edges of the record honestly.',
      'You hear each month what was built and what is next.'
    ] },
    right: { h3: 'For learners', ps: [
      'When a loop ends, ask what your counter is still holding.',
      'Say what "dry" means before you count dry days.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners in Áncash',
    lede: 'Arranged by age band. Every course is live and in English, with a mentor who stays with the learner, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Primaria', courses: [
        { code: 'ANC / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Game-making with blocks, from the first sprite.' },
        { code: 'ANC / KIDS / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'AI help used carefully, with Scratch and games, ages 8 to 12.' },
        { code: 'ANC / KIDS / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Number patterns tested with short programs, for 10 to 15 year olds.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Secundaria', courses: [
        { code: 'ANC / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A complete Python course for 13 to 18, from zero.' },
        { code: 'ANC / TEEN / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Making sense of measurements, averages and chance.' },
        { code: 'ANC / TEEN / 03', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange data mining', blurb: 'Machine learning with visual tools before code.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'ANC / ADULT / 01', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and dashboards on real files.' },
        { code: 'ANC / ADULT / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'From cleaning a spreadsheet to training and judging a model.' },
        { code: 'ANC / ADULT / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'The statistics and linear algebra behind the tools.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'What a live class looks like from Áncash',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning', l: 'A calm start before colegio, during the Indian evening.' },
      { time: 'After school or work', l: 'Late afternoon and evening, on the days you pick.' },
      { time: '1-on-1', l: 'A private slot fixed between you and the mentor.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'A regular teacher who knows the learner\'s work.' },
      { h3: 'Simple English', p: 'Short steps, new words written in the chat.' },
      { h3: 'Learner in control', p: 'The student types, runs and fixes the code.' },
      { h3: 'Groups by age', p: 'Children, teenagers and adults study apart.' },
      { h3: 'Monthly update', p: 'Projects finished, problems met, next goals.' },
      { h3: 'Two formats', p: 'Fifteen to twenty in a group, or alone with the mentor.' }
    ]
  },

  projectsH2: 'Things our older students have built',
  projectsLede: 'Learners who keep at it build tools that other people use. Some are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> show plenty more.',
  reviewsLede: 'Google reviews from parents and students, exactly as written.',

  fees: {
    h2: 'Fees for learners in Áncash',
    lede: 'Each plan is a monthly payment in US dollars, taken by card. Your bank converts it into soles using its own rate, so the soles amount can shift slightly from month to month.',
    free: ['A free first class', 'A puzzle plus a first program', 'No card asked for'],
    group: ['Fifteen to twenty learners of similar age', 'A regular mentor', 'Two live classes a week', 'Monthly, cancel whenever you want'],
    one: ['The learner alone with a mentor', 'Goals set around the learner', 'Days and times you decide']
  },

  faq: {
    eyebrow: 'Áncash families ask',
    h2: 'Online coding and AI classes in Áncash: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Teaching is in English only, live and online. Mentors keep sentences short, repeat when asked, adapt to the learner\'s pace and accent, and answer a child who speaks Spanish with the English words.' },
      { q: 'Can we join from Chimbote and from Huaraz?', a: 'Yes, from anywhere in Áncash. Classes are online, so a learner in Chimbote, Nuevo Chimbote, Casma, Huaraz, Carhuaz, Caraz or Huari joins the same way, from home.' },
      { q: 'Is our connection good enough?', a: 'Test it in the free class. INEI found an internet service in 51.5% of Áncash homes in 2025. A lesson needs about an hour of steady video; a laptop or desktop is best for typed code.' },
      { q: 'How young can a child start?', a: 'At six, with Minecraft or Scratch blocks, no typing needed. Typed Python normally comes a few years later, and teenagers and adults can start from nothing.' },
      { q: 'Do Áncash schools teach programming?', a: 'Not as a subject. Peru\'s national curriculum spreads digital skills across all areas and gives secundaria no computing hours; MINEDU\'s Python pilot runs only in Lima Norte.' },
      { q: 'What times are available?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Áncash all year, so 07:00 in Huaraz is 17:30 for the mentor.' },
      { q: 'Can university students join?', a: 'Yes. Students from UNASAM, the Universidad Nacional del Santa or any other university take adult classes, usually Python, data analysis or automation, timed around their lectures.' },
      { q: 'Do you help with the ONEM or the OPI?', a: 'We build the reasoning those contests reward with problems we write ourselves, never the organisers\' papers. Students enter through their colegio or the organiser\'s own registration. We are not connected with MINEDU, UTEC or either olympiad.' },
      { q: 'How are fees paid?', a: 'Monthly by card, in US dollars, converted to soles by your bank. Someone visiting the page from India sees rupees. The first class is free of charge.' },
      { q: 'Is there a certificate?', a: 'Courses that award one give a Modern Age Coders certificate of completion only. It is not a Peruvian qualification, and MINEDU, the UGEL, universities and schools do not issue or endorse it.' },
      { q: 'What is the soil moisture project?', a: 'An original Python lesson on INAIGEM\'s open readings from Tayacoto, above Huaraz: a streak counter finds 6 dry spells at one station, then a one-line fix finds the 7th, still running when the record ends on 31 August 2023.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families and learners in Áncash.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The national guide and the index of Peru pages.' },
      { href: '/python-para-estudiantes-de-ingenieria-peru', label: 'Python para ingeniería', p: 'Python for engineering students, in Spanish.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'A first coding course for young children.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Small AI builds for curious children.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Learning to code later in life.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live class.' }
    ]
  },

  start: {
    h2: 'Book a free class from Áncash',
    lede: 'In the free class the learner solves a puzzle and gets a first program running. The mentor watches how they reason and how they cope with English, checks your connection, and then recommends a course and a format.',
    readFirst: 'To learn more first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or explore <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'Every class is live online with a mentor in India and taught only in English. WhatsApp us in English for the quickest answer.',
    formNote: 'Free of charge, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI in Peru' },
        { href: '/python-para-estudiantes-de-ingenieria-peru', label: 'Python para ingeniería' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación en inglés' },
        { href: '/profesor-de-matematicas-en-ingles-peru', label: 'Maths in English' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Close the spell the loop left open'
  },

  personalityCss: `
.ag-root.ag-cay .ag-hero h1 { letter-spacing: -0.016em; max-width: 20ch; }
.ag-root.ag-cay .ag-capsule { border-left-width: 4px; border-radius: 4px; }
.ag-root.ag-cay .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-cay .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cay .ag-code-head b { text-transform: uppercase; letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadros 1 and 3), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017 (dpto02), Compendio Estadístico Perú 2026 (cuadros 1.7, 1.8, 5.16, 5.22, 5.53, 5.54, 5.66, 5.75, 11.5, 11.6, 11.13); Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores; DRE Áncash news of 21 August 2024; ONEM 2026 and OPI sources; EF EPI 2025; tz database. Data: INAIGEM, Mediciones de humedad del suelo en el sector Tayacoto, ODC-By.',
    localProject: 'How long does the soil above Huaraz stay dry? An original Python project on INAIGEM\'s Tayacoto soil moisture file (ODC-By), with our threshold of 6 at 20 cm: Version 1 counts dry spells at station 02 and prints 6, longest 119, most recent 80, because it never saves the spell still running when the loop ends; Version 2 closes it and prints 7 spells with the record ending dry for 48 days, then compares station 03 under pines (19 spells, longest 208) with station 04 on grassland (none). Lesson family: streak counting and the open run at the end of the loop.',
    requiredMentions: ['QUI-TAY-MEHM-02_PNDA.csv', 'Dry spells: 6', 'dry for the last 48 days', 'spells: 19 longest: 208', '1,205,923', '179,909', '158,385', '122,886', 'Close the spell the loop left open'],
    sources: [
      { claim: 'Department, province and district populations of Áncash, 2025, and censada by age group.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Huaraz city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Chimbote, Buenos Aires (Nuevo Chimbote), Huaraz and Centenario centros poblados with altitude, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto02.xlsx' },
      { claim: 'Area, computers, internet, assessment results, enrolment, teachers and university enrolment for Áncash.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'Mobile classroom for more than 160 rural secundaria students, two weeks, Ticapampa.', url: 'https://www.gob.pe/institucion/regionancash-dre/noticias/1007403-ancashcambia-aula-movil-de-huawei-y-minedu-impulsan-habilidades-digitales-en-ancash' },
      { claim: 'INAIGEM soil moisture readings at Tayacoto and their ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/mediciones-de-humedad-del-suelo-en-el-sector-tayacoto-distrito-de-independencia-ancash' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 score for the Áncash region, Peru and Lima.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'OPI organiser, cost and 2026 final date.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A combined Chimbote total made by adding the Chimbote and Buenos Aires (Nuevo Chimbote) centros poblados: never summed.',
      'Any cause for the difference between the pine and grassland stations: the data and metadata give none, so the page does not offer one.',
      'Glacial lake and hazard monitoring data from the same area: not used (no disaster data on these pages).',
      'The brand of the mobile classroom as an endorsement: the page describes the DRE report and claims no link.',
      'Spanish-language teaching: every class is in English.',
      'Any connection with MINEDU, the DRE Áncash, INAIGEM, UNASAM, the Universidad Nacional del Santa, UTEC, the ONEM or any school: none.',
      'Officials\' names from the DRE release: left out.'
    ]
  }
};
