// SHIP: market (region) | Loreto: Amazon region online since recently, honest about bandwidth, live classes in English | pull numbers out of field notes with a regex, then check each label against its number
'use strict';
// Online coding and AI classes, Loreto region, Peru (ag- region page, Peru cluster row PE172; alloc: regions, cbb, #1B6A00).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any hour;
// fees in USD only, through the template's data-price anchors.
// Spine: Loreto came online fast but late. In 2015 fewer than one Loreto home in ten had internet; by 2025 it was 42 in a
// hundred, still well under the national figure (INEI ENAHO). The page is plain about what a live class needs on a river
// region connection, and teaches with the IIAP's soil descriptions from around Iquitos and Nauta.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-loreto-region-peru/,
// national school facts from pe/facts-school/src; every quote string-matched in the raw file):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro 1: LORETO 1032771 (población total, 15 September 2025);
//    provinces MAYNAS 500640, ALTO AMAZONAS 159654, LORETO 79645, MARISCAL RAMÓN CASTILLA 64034, REQUENA 65139, UCAYALI
//    67589, DATEM DEL MARAÑÓN 87442, PUTUMAYO 8628. Capital Iquitos (Compendio 2026 cuadro 1.8, places.tsv). Never summed.
//  - Cuadro 3 (censada by age): LORETO 1011102; De 6 a 11 años 140975; De 12 a 17 años 144813.
//  - INEI Lib1539 Cuadro 1.9 (places.tsv): Iquitos 377,609 (2017, conglomerate). Lib1541 dpto16.xlsx single centros
//    poblados 2017: YURIMAGUAS 62903, REQUENA 22875, NAUTA 19551, CONTAMANA 17429, CABALLOCOCHA 9051.
//  - INEI Compendio Estadístico Perú 2026 tomo 1: cuadro 11.5 Loreto "18,2 15,4 19,6 18,1 20,0 15,2 17,3 16,2 16,6 20,1
//    22,8", Total "... 34,1 33,9"; cuadro 11.6 Loreto "9,6 14,5 19,4 19,3 23,5 26,2 28,1 33,8 34,8 35,8 42,1", Total "23,2
//    ... 56,8"; cuadro 11.13 Loreto "21,8 25,1 28,3 31,8 34,1 38,4 45,4 47,7 53,9 61,4 67,6", Total "40,9 ... 81,1".
//    Cuadros 5.16/5.17/5.22/5.23 (MINEDU Censo Educativo, thousands): Loreto primaria pública 164,3, privada 7,9; secundaria
//    pública 70,0 (2015) and 125,0 (2025), privada 6,5 (2025). Cuadro 5.27 secundaria rural Loreto 55,0 (2025).
//  - GREL (regionloreto-dre) notes on gob.pe, 2023: 11 October 2023 Eureka regional stage in Iquitos, areas "Alternativa de
//    Solución Tecnológica", "Indagación Cualitativa", "lndagación Científica"; 12 October 2023 "Construcción de modelos
//    robóticos" with "04 instituciones educativas"; 23 September 2023 COREMAT 2023, "37 instituciones educativas
//    participantes"; 18 October 2023 Fundación Telefónica Perú resources "en 14 instituciones educativas focalizadas".
//  - MINEDU (FACTS 29): "pondrá en marcha un plan para conectar 55 000 escuelas públicas a internet satelital" (Sept 2026);
//    FACTS 19: 627 508 rural secundaria students nationally (Dec 2025).
//  - EF EPI 2025 Peru page: Loreto is not listed among EF's regions; Peru 519, rank 52 of 123.
//  - Ley 28044, MINEDU normative ages, CNEB competency 28 and JER hours, Fábrica de Programadores, ONEM 2026 (FACTS 5, 6,
//    13, 14, 32, 33, 39, 45, 99, 105). Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30.
//  - Data: IIAP, "Perfiles de suelo de San Martín, Loreto, Madre de Dios y Ucayali (IIAP, 2005-2017)", datosabiertos.gob.pe,
//    licence ODC-By, version "2.1 (2026-10-15)". Description: "Descripción de 143 perfiles de suelo (calicatas) y sus 537
//    horizontes". Files perfiles_suelo.csv (48,522 bytes) and horizontes_suelo.csv (133,710 bytes), downloaded 9 November
//    2026. Loreto: 33 profiles (32 dated 2011), 145 horizons.
// Our own calculations (scratchpad pe/r3/cbb/v1.py, v2.py, python3 -I):
//  v1 prints: Loreto layers with a pH: 145 / Lowest: 2.26 Highest: 7.84 / Middle value: 4.19
//  v2 prints 11 label lines, among them: ultra ácido 25 layers, pH 2.26 to 4.59 / fultra ácido 2 layers, pH 3.28 to 3.56 /
//    extremadamente ácido 62 layers, pH 3.48 to 4.46 / muy fuertemente ácido 17 layers / neutro 4 layers, pH 6.83 to 7.31 /
//    ligeramente alcalino 12 layers, pH 7.41 to 7.84.
//  extra: the ultra ácido layer at 4.59 is LO-029 horizon 3; LO-013 has "(pH 4.93;" with no closing bracket; top layers:
//    28 of 33 below pH 5.5, median 3.8.
// Lesson family: extracting numbers from free text with a regular expression, then checking each word label against its
// number, so that typing slips and overlapping categories show up.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'import re',
  '',
  'PH = re.compile(r"pH (\\d\\.\\d+)")',
  '',
  'values = []',
  'with open("horizontes_suelo.csv", newline="", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["id_perfil"].startswith("LO-"):',
  '            found = PH.search(row["descripcion_campo"])',
  '            if found:',
  '                values.append(float(found.group(1)))',
  '',
  'values.sort()',
  'print("Loreto layers with a pH:", len(values))',
  'print("Lowest:", values[0], "Highest:", values[-1])',
  'print("Middle value:", values[len(values) // 2])'
].join('\n');

const V2 = [
  'import csv',
  'import re',
  '',
  'LABELLED = re.compile(r"([a-záéíóúñ ]+?)\\s*\\(pH (\\d\\.\\d+)")',
  '',
  'ranges = {}',
  'with open("horizontes_suelo.csv", newline="", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        if not row["id_perfil"].startswith("LO-"):',
  '            continue',
  '        found = LABELLED.search(row["descripcion_campo"])',
  '        if found:',
  '            label = found.group(1).strip().lower()',
  '            ranges.setdefault(label, []).append(float(found.group(2)))',
  '',
  'for label, ph in sorted(ranges.items(), key=lambda item: min(item[1])):',
  '    print(f"{label:24} {len(ph):3} layers, pH {min(ph)} to {max(ph)}")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Loreto region' },
  slug: 'online-coding-and-ai-classes-loreto-region-peru',
  code: 'cbb',
  accent: '#1B6A00',
  accentRationale: 'Loreto region: a dense rainforest green #1B6A00, the canopy colour of the Amazon lowlands around Iquitos, allocated to this row; contrast 6.37 on #FBF8F2, 5.99 on #F5F1E8 and 5.48 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Loreto region, Peru',
  title: 'Online Coding and AI Classes in the Loreto Region, Peru',
  description: 'Live online coding and AI classes in English for Iquitos, Yurimaguas and all of Loreto: census figures, how fast homes got online, and a soil data project.',
  ogDescription: 'Coding and AI for children, teenagers and adults across Loreto, taught live online in English at hours the family picks: 2025 census figures, how far home internet has come since 2015, what a class needs on a river region connection, and a Python project on IIAP soil descriptions.',
  twitterDescription: 'Loreto, live online coding in English: census, internet since 2015, bandwidth honesty and an IIAP soil project.',
  pageName: 'Online Coding and AI Classes in the Loreto Region',
  webPageDescription: 'A guide for families and adult learners in Loreto to live online coding and AI classes taught in English, built from INEI census and household survey figures, MINEDU school census figures, GREL notes from 2023, MINEDU connectivity plans and an original Python project on the IIAP soil profile dataset (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Loreto region of Peru: block coding for children from 6, visual machine learning and Python for teenagers, data and AI for adults without a programming background, in a group of fifteen to twenty or one to one, at hours chosen by the family.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Loreto region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#region', label: 'The region' },
    { href: '#online', label: 'Getting online' },
    { href: '#bandwidth', label: 'Bandwidth' },
    { href: '#soils', label: 'Soil project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Loreto &middot; Live online, in English &middot; Ages 6 to adult',
  h1: 'Online coding and AI classes in the Loreto region',
  lede: 'Most of Loreto is reached by river or by air, which makes a class that travels down a cable or through a phone mast more useful here than almost anywhere else in Peru. This page gives the census picture, shows how quickly Loreto homes have come online since 2015 and how far they still have to go, says honestly what a live class needs from a connection, and teaches with soil records written by hand in the forest near Iquitos.',
  secondaryCta: { href: '#soils', label: 'See the soil project' },
  wa: 'Hello Modern Age Coders, we are in Loreto, Peru, and we are interested in live coding classes in English. Can we test our connection in a free first class?',
  heroNote: 'Live online teaching since 2020 &middot; more than 10,000 learners around the world &middot; mentors who adapt to slow connections',
  spec: [
    ['Who', 'Children from 6, teenagers, adults'],
    ['Where', 'Iquitos, Yurimaguas, Nauta, river towns'],
    ['Language', 'English, spoken patiently'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Hours', 'Whenever your family decides'],
    ['Connection', 'Tested free before you pay']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'Yes. Modern Age Coders runs live online coding and AI classes in English for learners anywhere in Loreto with a working internet connection, from Iquitos and Yurimaguas to Nauta, Requena and the river towns. Six year olds begin with block coding, children of nine or ten move on to typed Python, teenagers build data and machine learning projects, and adults learn data and AI tools from scratch. Learners join a group of fifteen to twenty or study one to one, at hours the family chooses, and the free first class doubles as a connection test. We teach learners to work a problem out, not to copy code.',

  picks: {
    eyebrow: 'Where Loreto learners start',
    h2: 'Three good first courses for Loreto',
    lede: 'Each one works well on a modest connection: blocks for young children, a visual machine learning course for teenagers, and data skills for adults who have never programmed.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'LOR / 01', title: 'Block Coding for Kids', note: 'Ages 6 to 10. Drag-and-drop coding with characters, music and simple games, light on data and kind to younger children who are still learning to read in English.' },
      { course: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'LOR / 02', title: 'Visual Machine Learning for Teens', note: 'Ages 13 to 18. Real datasets and real models built visually in Orange, then explained, before the step to Python. A natural fit for curious secundaria students.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'LOR / 03', title: 'Data and AI for Non-Programmers', note: 'For adults. Reading tables, making charts and using AI tools sensibly, with no programming background expected, at hours around work and family.' }
    ]
  },

  sections: [
    {
      id: 'region',
      eyebrow: 'People and places',
      h2: 'How many people live in Loreto, and where?',
      lede: 'The 2025 national census counted 1,032,771 people in the department of Loreto. They are spread across eight provinces, and Iquitos, in the province of Maynas, is the regional capital.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Loreto and its eight provinces, total population, census 2025', head: ['Area', 'Population, 2025'], rows: [
          ['Department of Loreto', '1,032,771'],
          ['Maynas (Iquitos)', '500,640'],
          ['Alto Amazonas (Yurimaguas)', '159,654'],
          ['Datem del Marañón', '87,442'],
          ['Loreto (Nauta)', '79,645'],
          ['Ucayali (Contamana)', '67,589'],
          ['Requena', '65,139'],
          ['Mariscal Ramón Castilla', '64,034'],
          ['Putumayo', '8,628']
        ] },
        { kind: 'source', html: 'INEI, Censos Nacionales 2025, table 1 of the demographic indicators: people counted plus INEI\'s estimate of those missed, on 15 September 2025, by the boundaries in force on 15 July 2026. Rows printed as published; the province figures are not ours to add up.' },
        { kind: 'two', mt: true,
          leftH3: 'The towns families name',
          left: [
            'Iquitos is by far the biggest city. INEI\'s 2017 census counted 377,609 people in it as one urban area, which takes in the districts around the old centre. 2025 figures for cities have not been released yet.',
            'Beyond Iquitos, INEI\'s 2017 directory of populated centres gives Yurimaguas 62,903, Requena 22,875, Nauta 19,551, Contamana 17,429 and Caballococha 9,051. Each is a single centre counted on its own, and we print them exactly as listed.'
          ],
          rightH3: 'School-age Loreto',
          right: [
            'The census counted 1,011,102 people in Loreto in person. Of those, 140,975 were 6 to 11 years old and 144,813 were 12 to 17. Loreto is a young region: those two age groups hold a larger share of its people than they do in Peru as a whole, by our reading of the same table.',
            'For a family in Caballococha or Contamana the nearest academy may be days away by boat. A live class arrives at the same moment everywhere, once the connection is there.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'In the colegio',
      h2: 'Is programming taught in Loreto\'s schools?',
      lede: 'Not as a subject of its own. Loreto\'s colegios teach the national curriculum, the CNEB, which treats digital skills as something every area should build and leaves no timetabled hour for programming.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Pupils enrolled in Loreto, thousands, by level and type of school, 2025', head: ['Level', 'Public', 'Private'], rows: [
          ['Primaria', '164.3', '7.9'],
          ['Secundaria', '125.0', '6.5']
        ] },
        { kind: 'source', html: 'From cuadros 5.16, 5.17, 5.22 and 5.23 of INEI\'s Compendio Estadístico Perú 2026, which reproduce MINEDU\'s school census. We swap the decimal comma for a point and add nothing up.' },
        { kind: 'two', mt: true,
          leftH3: 'Almost everyone is in a public school',
          left: [
            'In Loreto, private schools are a small slice of enrolment: about eight thousand primaria pupils against more than 164 thousand in public schools. Public secundaria enrolment has grown fast, from 70.0 thousand in 2015 to 125.0 thousand in 2025, and in 2025 some 55.0 thousand secundaria pupils studied in rural schools.',
            'Across Peru, the regular secundaria week has 35 hours and none of them is labelled programming. The curriculum\'s one technology competency, number 28, is transversal: teachers of every area are asked to weave it in.'
          ],
          rightH3: 'What Loreto pupils already do',
          right: [
            'The regional education authority, the GREL, reported in October 2023 that the regional stage of the national school science fair, Eureka, took place in Iquitos with three areas including technological solutions, and that schools from four UGELs built robotic models for that year\'s national school arts games.',
            'In September 2023 it described a regional maths contest, COREMAT 2023, with 37 schools taking part, and a partnership in which Fundación Telefónica Perú supplied digital resources to 14 selected schools. Interest is real; regular coding lessons are what is missing.'
          ] },
        { kind: 'p', mt: true, html: 'At national level, MINEDU\'s Python programme, Fábrica de Programadores, started in July 2025 with 1,000 pupils in the last two years of secundaria in Lima Norte. In September 2026 the ministry announced a plan to bring satellite internet to 55,000 public schools. Both are steps; neither puts a programming teacher in a Loreto classroom this year.' }
      ]
    },
    {
      id: 'online',
      tint: 'tint',
      eyebrow: 'Ten years of change',
      h2: 'How many homes in Loreto have internet now?',
      lede: 'Far more than ten years ago, and still fewer than the national average. INEI\'s household survey shows Loreto catching up quickly from a very low starting point.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Computers and internet in Loreto, 2015, 2022 and 2025, and in Peru in 2025 (per cent)', head: ['Indicator', 'Loreto 2015', 'Loreto 2022', 'Loreto 2025', 'Peru 2025'], rows: [
          ['Homes with at least one computer', '18.2', '16.2', '22.8', '33.9'],
          ['Homes with an internet service', '9.6', '33.8', '42.1', '56.8'],
          ['People aged 6 and over using the internet', '21.8', '47.7', '67.6', '81.1']
        ] },
        { kind: 'source', html: 'INEI, Compendio Estadístico Perú 2026, tomo 1, cuadros 11.5, 11.6 and 11.13 (national household survey, ENAHO). INEI writes 42,1; we write 42.1. The three years shown are our selection from INEI\'s yearly series.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading the numbers fairly',
          left: [
            'In 2015 fewer than ten Loreto homes in every hundred had an internet service. By 2025 the figure was 42.1, more than four times as many, and the share of people aged six and over who use the internet anywhere rose from 21.8 to 67.6 per cent.',
            'Still, about a third of Loreto\'s people aged six and over were not online in 2025, and fewer than a quarter of homes had a computer. We would rather say that plainly than pretend every family can start tomorrow.'
          ],
          rightH3: 'Where that leaves a family',
          right: [
            'If your home has internet and a laptop or desktop, a live class will usually work. If the only device is a phone, a young child can still try block coding, but an older learner will struggle to type and test code on a small screen.',
            'Some families borrow a laptop from a relative, use a computer at a parent\'s workplace after hours, or begin with one-to-one lessons at the time of day when their connection is steadiest.'
          ] }
      ]
    },
    {
      id: 'bandwidth',
      eyebrow: 'Connection',
      h2: 'Can a live class work on a Loreto internet connection?',
      lede: 'Often yes, and the only way to know is to try. We do not publish a minimum speed figure because connections in the region vary from hour to hour; instead the free first class is the test.',
      body: [
        { kind: 'ol', items: [
          '<strong>Book the free class at your usual hour.</strong> Choose the time you would really use, so the test reflects normal conditions in your home.',
          '<strong>Start with sound, not video.</strong> The mentor\'s voice and the shared screen matter most. Cameras can stay off if the picture freezes.',
          '<strong>Share code as text.</strong> Programs can be pasted into the chat, so nobody needs to read code from a blurred video frame.',
          '<strong>Keep one tab open.</strong> Streaming or downloads elsewhere in the house slow the class; pausing them during the hour helps.',
          '<strong>Decide together.</strong> After the class the mentor tells you honestly whether it worked well enough, and what could change it, before you pay anything.'
        ] },
        { kind: 'p', mt: true, html: 'If a lesson drops, the mentor waits and continues where the learner left off. In one-to-one plans a missed slot can be moved. This is not a promise that every connection will do; it is a promise to tell you the truth after the test.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Teaching language',
      h2: 'Will my child be taught in English or Spanish?',
      lede: 'In English, always. Mentors teach from India over live video, speak at the learner\'s pace and accent, and do not move the class into Spanish.',
      body: [
        { kind: 'two',
          leftH3: 'Peru and English',
          left: [
            'EF\'s 2025 English Proficiency Index places Peru 52nd of 123 countries with 519 points, in the moderate band. EF does not list a separate score for Loreto.',
            'We assume nothing and plan for learners who are still building their English: short sentences, repeated words, and code on screen that shows what the words mean.'
          ],
          rightH3: 'Code helps the English',
          right: [
            'Programming languages borrow plain English words: if, else, while, print, return. A child who uses them every week learns them the way they learn a game\'s rules, by doing.',
            'When a learner answers in Spanish, the mentor offers the English back without fuss. Many children understand the class well long before they feel ready to speak much.'
          ] },
        { kind: 'p', mt: true, html: 'For a national overview of how we teach Peruvian learners in English, see <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>. Parents of younger children may also like <a class="ag-inline-link" href="/python-for-kids-peru">Python for kids in Peru</a>, which explains when a child is ready to type.' }
      ]
    },
    {
      id: 'soils',
      eyebrow: 'A Loreto data project',
      h2: 'How acidic are the soils around Iquitos?',
      lede: 'The Instituto de Investigaciones de la Amazonía Peruana (IIAP), based in Iquitos, publishes soil pit descriptions written by its field scientists. The pH value is hidden inside a sentence, so the first job is to pull it out, and the second is to check that the words agree with the number.',
      body: [
        { kind: 'two',
          leftH3: 'The dataset',
          left: [
            'The dataset is "Perfiles de suelo de San Martín, Loreto, Madre de Dios y Ucayali (IIAP, 2005-2017)", published on datosabiertos.gob.pe with an Open Data Commons Attribution licence (ODC-By), so it may be reused, commercially too, with credit to the IIAP. Version 2.1 is dated 15 October 2026. Its description speaks of 143 soil profiles and 537 horizons, the layers seen in each pit.',
            'Loreto contributes 33 profiles, 32 of them collected in 2011, mostly in the districts around Iquitos and Nauta, with 145 horizons between them. We downloaded horizontes_suelo.csv on 9 November 2026.'
          ],
          rightH3: 'What one layer looks like',
          right: [
            'Each horizon has a free-text field written in the field. The first Loreto layer reads, in part: "ultra ácido (pH 3.38)". So a number sits in brackets after the letters pH, and a word label describing the acidity sits just before it.',
            'Our question: across all Loreto layers, how acidic is the soil? On the pH scale 7 is neutral, lower is more acidic, and each whole step is ten times more acidic than the next.'
          ] },
        { kind: 'code', label: 'Version 1: pull the number out with a regular expression', lang: 'Python', code: V1, note: 'It prints: <code>Loreto layers with a pH: 145</code>, <code>Lowest: 2.26 Highest: 7.84</code> and <code>Middle value: 4.19</code>.' },
        { kind: 'p', mt: true, html: 'The pattern pH followed by a space, a digit, a point and more digits found a value in every one of the 145 layers. The middle value, 4.19, is strongly acidic soil, typical of the old, heavily rained-on ground of the lowland Amazon. A learner could stop here. But the text holds a second description of the same fact, the word label, and two descriptions of one fact should agree.' },
        { kind: 'p', html: 'Version 2 captures the words just before the bracket as well, groups the layers by label, and prints the lowest and highest pH under each one. If the labels are consistent, each range should sit neatly above the one before it.' },
        { kind: 'code', label: 'Version 2: capture the label too, and compare ranges', lang: 'Python', code: V2, note: 'It prints eleven lines, including <code>ultra ácido               25 layers, pH 2.26 to 4.59</code>, <code>fultra ácido               2 layers, pH 3.28 to 3.56</code>, <code>extremadamente ácido      62 layers, pH 3.48 to 4.46</code>, <code>neutro                     4 layers, pH 6.83 to 7.31</code> and <code>ligeramente alcalino      12 layers, pH 7.41 to 7.84</code>.' },
        { kind: 'p', mt: true, html: 'Three things jump out. First, a typing slip: two layers say fultra ácido, which is ultra ácido with a stray letter, and a program treats them as a separate category until someone fixes it. Second, label variants: extremadamente ácida with an a, and reacción fuertemente ácida with an extra word. Third, an overlap: the ultra ácido range reaches 4.59, higher than every extremadamente ácido layer, even though ultra is meant to be the more acidic word. Checking that row shows a single layer, horizon 3 of profile LO-029, labelled ultra ácido at pH 4.59; every other ultra ácido layer is below 3.6.' },
        { kind: 'p', html: 'We do not correct the IIAP\'s records. We report what the program found and let a soil scientist decide whether the word or the number is wrong. That is the habit we want every learner to leave with: a pattern that matches is not the same as a fact that is right.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Topsoil acidity in Loreto\'s 33 soil profiles, IIAP survey (our calculation)', head: ['Measure', 'Value', 'Profiles'], rows: [
          ['Top layers with pH below 5.5', 'strongly acidic or more', '28 of 33'],
          ['Middle pH of the top layers', '3.8', '33'],
          ['Middle pH of all Loreto layers', '4.19', '145 layers']
        ] },
        { kind: 'source', html: 'Data credit: IIAP, soil profiles of San Martín, Loreto, Madre de Dios and Ucayali, reused under ODC-By. The summaries are ours. One layer, in profile LO-013, opens a bracket before its pH and never closes it, so a stricter pattern that demanded the closing bracket would miss it.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, in the garden.</strong> Sort five words, warm, hot, boiling, cool, cold, into order. Then ask: what if someone wrote "boiling" for a cup of tea that was only warm?',
          '<strong>Block coding, around 8 to 10.</strong> Make a list of pH numbers and a loop that says "acid" below 7, "neutral" at 7 and "alkaline" above it.',
          '<strong>First Python, around 10 to 12.</strong> Run Version 1, then change the pattern so it insists on the closing bracket, and find the layer it now misses.',
          '<strong>Ages 13 and over.</strong> Write a dictionary that merges fultra ácido into ultra ácido and the feminine forms into the masculine ones, then print the ranges again.',
          '<strong>Going further.</strong> List every pair of labels whose ranges overlap, and the layers responsible. Write two sentences to the IIAP describing what you found, without claiming which value is wrong.'
        ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'By age',
      h2: 'Which course fits a Loreto learner of each age?',
      lede: 'Begin with age and interest. The grade column follows MINEDU\'s rule that a pupil\'s grade depends on their age on 31 March.',
      body: [
        { kind: 'table', numCols: [], caption: 'Starting points for Loreto learners (our course ages)', head: ['Age', 'Grade, usually', 'Course to start', 'Early projects'], rows: [
          ['6 to 8', '1° to 3° de primaria', 'Block coding', 'Animated stories, simple games'],
          ['8 to 11', '3° to 6° de primaria', 'Scratch or Minecraft coding', 'Games with scores and rules'],
          ['9 to 12, ready to type', '4° de primaria to 1° de secundaria', 'Python and AI for Kids', 'First typed programs'],
          ['13 to 17', '1° to 5° de secundaria', 'Visual machine learning, then Python', 'Models built from real tables'],
          ['15 to 17, curious about science', '3° to 5° de secundaria', 'Python for teens with data', 'Projects like the soil one above'],
          ['18 and over', 'University, work, home', 'Data and AI for non-programmers', 'Charts, summaries, careful AI use']
        ] },
        { kind: 'source', html: 'Course ages are ours. MINEDU counts normative age on 31 March, so a pupil with a birthday after that date may be one grade below the row.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Younger children', p: 'Short activities with lots of visible results, in groups of children of similar age. Blocks first, typing later.' },
          { h3: 'Teenagers', p: 'Students who did a Eureka project at school often enjoy data work. Python and machine learning give that curiosity real tools.' },
          { h3: 'Adults', p: 'University students, teachers and people in business or government offices learn data skills that make everyday work quicker and more reliable.' }
        ] },
        { kind: 'p', mt: true, html: 'University students in Iquitos can read about <a class="ag-inline-link" href="/coding-courses-for-university-students-peru">coding courses for university students in Peru</a>, and adults returning to learning later in life have their own page on <a class="ag-inline-link" href="/coding-for-adults-over-50-peru">coding after 50 in Peru</a>.' }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Contests',
      h2: 'Can Loreto pupils enter the national maths olympiad?',
      lede: 'Yes, through their school. The ONEM begins inside each colegio and moves up through the UGEL and regional stages. Modern Age Coders is independent of MINEDU, the ONEM and the GREL.',
      body: [
        { kind: 'two',
          leftH3: 'The ONEM in 2026',
          left: [
            'The 2026 school stage of the ONEM was held on Wednesday 8 July 2026 in every participating colegio, in three levels by secundaria grade. El Peruano reported that the 2026 olympiad involved more than 1.7 million pupils across Peru.',
            'We never use the organiser\'s papers. We teach the reasoning contests reward with problems we write.'
          ],
          rightH3: 'A practice problem of ours',
          right: [
            'Soil A has pH 4 and soil B has pH 6. Each step of 1 on the pH scale means ten times the acidity. How many times more acidic is soil A than soil B? (Ours. Answer: 100 times, because two steps mean 10 multiplied by 10.)',
            'It looks like chemistry but it is really about powers of ten, and a two-line Python loop lets a student test the idea on other pairs.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Clock',
      h2: 'What time would a class be in Iquitos?',
      lede: 'Whatever time your family picks. Loreto runs on Peru time, and the mentor in India plans around your chosen slot.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample conversions from Peru time to India time (examples, not a timetable)', head: ['Peru time, Iquitos', 'India time', 'India date'], rows: [
          ['06:00', '16:30', 'Same date'],
          ['08:30', '19:00', 'Same date'],
          ['10:30', '21:00', 'Same date'],
          ['13:00', '23:30', 'Same date'],
          ['18:00', '04:30', 'Next date']
        ] },
        { kind: 'source', html: 'Per the tz database, America/Lima is UTC minus five hours with no daylight saving since 1994, and INACAL keeps Peru\'s legal time. India is UTC plus five and a half hours. Iquitos and India are therefore ten and a half hours apart all year.' },
        { kind: 'p', mt: true, html: 'No clocks change on either side, so a slot that works in the rainy season works in the drier months too. Early mornings in Iquitos fall in the Indian evening, which suits many mentors, and they can also be the calmest time on a shared home connection.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'How a Loreto learner grows',
    lede: 'Our own stages, the same for a six year old and a sixty year old. They help mentors place learners and help families see progress.',
    table: { caption: 'From first blocks to checking text-mined data (ours)', head: ['Stage', 'Typical age', 'The learner can'], rows: [
      ['1. Sequence', '6 or 7', 'Put blocks in a working order'],
      ['2. Repeat', '7 to 9', 'Use a loop rather than copies'],
      ['3. Store', '8 to 10', 'Keep values in variables and lists'],
      ['4. Type', 'About 9 to 12', 'Write Python that decides and repeats'],
      ['5. Extract', '12 to adult', 'Pull numbers out of text with a pattern'],
      ['6. Cross-check', '13 to adult', 'Test whether two descriptions of one fact agree']
    ] },
    left: { h3: 'For parents', ps: [
      'The soil project lives in the last two stages: getting numbers out, then checking they make sense.',
      'We describe progress through what learners build and can explain.'
    ] },
    right: { h3: 'For learners', ps: [
      'If a sentence states a fact twice, make your program read it twice.',
      'Every pattern misses something. Go looking for what it missed.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine further courses for Loreto learners',
    lede: 'From the youngest up. All are taught live in English by a regular mentor, in a group of fifteen to twenty or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 15', courses: [
        { code: 'LOR / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'Stories and games made with Scratch, step by step.' },
        { code: 'LOR / KIDS / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Loops and conditions practised inside Minecraft worlds.' },
        { code: 'LOR / KIDS / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'The first typed language, with small AI ideas along the way.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'LOR / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A full Python course for any year of secundaria.' },
        { code: 'LOR / TEEN / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'How models learn, built and tested by the student.' },
        { code: 'LOR / TEEN / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Designing and building phone apps from scratch.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 18 and over', courses: [
        { code: 'LOR / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from the beginning', blurb: 'Python for adults, from first lines to real projects.' },
        { code: 'LOR / ADULT / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Statistics, Python and models for university students and adults.' },
        { code: 'LOR / ADULT / 03', slug: 'ai-tools-mastery-complete-college', title: 'AI tools', blurb: 'Getting good work from AI assistants, and checking it.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'The format',
    h2: 'How live online classes reach Loreto',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early in Iquitos', l: 'Evening in India, and often the steadiest hour on a home connection.' },
      { time: 'Afternoon or evening', l: 'Also possible; the mentor arranges the day around it.' },
      { time: 'One to one', l: 'Private lessons on days you agree with your mentor.' }
    ],
    cells: [
      { h3: 'One mentor throughout', p: 'A familiar voice who knows the learner\'s pace.' },
      { h3: 'Audio first', p: 'Cameras optional when the signal is weak.' },
      { h3: 'Code as text', p: 'Programs pasted in chat, not read from video.' },
      { h3: 'Age-matched groups', p: 'Children, teenagers and adults never mixed.' },
      { h3: 'Connection tested', p: 'The free class shows whether it works.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one alone.' }
    ]
  },

  projectsH2: 'Work our students have finished',
  projectsLede: 'Learners who stay the course build things that other people use. Some are shown below; the <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'Google reviews from parents and students, reproduced word for word.',

  fees: {
    h2: 'Fees for learners in Loreto',
    lede: 'Each plan is a monthly fee set in US dollars. The card is billed in dollars, and your bank turns that into soles at its own exchange rate on the day, so the amount on the statement may differ a little from the price shown.',
    free: ['A free first class', 'A live connection test', 'No card required'],
    group: ['Fifteen to twenty learners near in age', 'A regular mentor', 'Two live classes a week', 'Monthly, cancel at any time'],
    one: ['One learner, one mentor', 'Lessons shaped to the learner', 'Your choice of days and hours']
  },

  faq: {
    eyebrow: 'Loreto families ask',
    h2: 'Coding and AI classes in Loreto: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All our classes are live, online and in English only. Mentors speak clearly, follow the learner\'s pace and accent, and if a child replies in Spanish they simply give the English words in return.' },
      { q: 'Do you have classes in Iquitos?', a: 'Our classes are online, so a learner in Iquitos joins from home over live video, exactly as one in Yurimaguas, Nauta or Requena would. There is no classroom to travel to.' },
      { q: 'Will the class work on our internet?', a: 'We cannot promise that in advance, which is why the free first class is also a connection test. Audio and a shared screen matter most, cameras can be switched off, and the mentor tells you honestly afterwards.' },
      { q: 'What time are classes in Loreto?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead, so 08:30 in Iquitos is 19:00 for the mentor.' },
      { q: 'Can my child learn on a phone?', a: 'A young child can try block coding on a tablet or phone. From about nine, typing and testing code needs a laptop or desktop. Some families borrow one for class hours.' },
      { q: 'Do Loreto schools teach coding?', a: 'No timetabled subject covers it. The national curriculum spreads digital skills across all areas. Loreto pupils do take part in the Eureka science fair and regional maths contests, but regular programming lessons are rare.' },
      { q: 'Can adults in Loreto take classes?', a: 'Yes, in adult groups or one to one. Many begin with data and AI for non-programmers or with Python, and fit lessons around work.' },
      { q: 'Do you teach AI to children?', a: 'We explain how AI works through small projects children build. We follow each tool\'s age rules: under-13s do not use adult chatbot accounts with us, and teenagers only use tools that allow their age.' },
      { q: 'How do we pay?', a: 'By card, monthly, in US dollars; your bank converts the charge into soles. Visitors from India see the price in rupees. The first class is free and needs no card.' },
      { q: 'Is there a certificate?', a: 'Courses that include one end with a Modern Age Coders certificate of completion. It is our own record of the work done, not a Peruvian qualification, and no Peruvian school authority issues or backs it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More on this site',
    h2: 'Pages Loreto families also read',
    lede: 'Useful next reading for learners in Loreto.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The national guide, with every Peru page.' },
      { href: '/python-for-kids-peru', label: 'Python for kids in Peru', p: 'When a child is ready to type real code.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Small AI builds that children understand.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'AI projects for the secundaria years.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits set by each AI provider.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one of our live lessons.' }
    ]
  },

  start: {
    h2: 'Test a free class from home in Loreto',
    lede: 'The mentor opens with a short puzzle and a first program, and watches how the sound, screen and connection hold up. Then you get a recommended course and group, plus an honest view of whether your set-up is ready.',
    readFirst: 'Curious first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> for a full lesson walk-through, or browse the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'All classes are taught live in English by mentors in India. WhatsApp gets the fastest reply; please message us in English.',
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
      { h4: 'Learn more', links: [
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Ultra, fultra, or extremely acidic?'
  },

  personalityCss: `
.ag-root.ag-cbb .ag-hero h1 { letter-spacing: -0.015em; max-width: 20ch; }
.ag-root.ag-cbb .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-cbb .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cbb .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-cbb .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadros 1 and 3), Perfil Sociodemográfico 2017 (Cuadro 1.9), Directorio de Centros Poblados 2017 (dpto16); INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13; MINEDU Censo Educativo cuadros 5.16, 5.17, 5.22, 5.23, 5.27); Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, satellite internet plan (Sept 2026), ONEM 2026; GREL notes of September and October 2023; EF EPI 2025; tz database. Data: IIAP soil profiles, ODC-By.',
    localProject: 'How acidic are the soils around Iquitos? An original Python project on the IIAP soil profile dataset (ODC-By): Version 1 extracts pH from free-text descriptions of 145 Loreto horizons (2.26 to 7.84, middle 4.19); Version 2 captures the word label too and finds a typing slip (fultra ácido), label variants and an overlap (ultra ácido up to 4.59 in LO-029). Lesson family: regex extraction from free text, then checking each label against its number.',
    requiredMentions: ['horizontes_suelo.csv', 'Loreto layers with a pH: 145', 'fultra ácido', 'LO-029', '1,032,771', 'COREMAT 2023', 'Homes with an internet service', 'Ultra, fultra, or extremely acidic?', '55,000 public schools'],
    sources: [
      { claim: 'Department and province populations of Loreto, and censada counts by age, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Iquitos population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Yurimaguas, Requena, Nauta, Contamana and Caballococha populated-centre figures, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto16.xlsx' },
      { claim: 'Computer, internet and internet-use shares for Loreto and Peru; Loreto enrolment.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'Eureka 2023 regional stage in Iquitos.', url: 'https://www.gob.pe/institucion/regionloreto-dre/noticias/848954-ugel-maynas-y-alto-amazonas-pasan-a-etapa-nacional-de-la-feria-escolar-de-ciencia-y-tecnologia-eureka-2023' },
      { claim: 'Robotic models at the 2023 school arts games, GREL stage.', url: 'https://www.gob.pe/institucion/regionloreto-dre/noticias/848968-construccion-de-modelos-roboticos-en-los-juegos-florales-escolares-nacionales-2023-etapa-gre' },
      { claim: 'COREMAT 2023 with 37 schools.', url: 'https://www.gob.pe/institucion/regionloreto-dre/noticias/839195-gerente-regional-de-educacion-inauguro-iii-concurso-regional-de-matematica' },
      { claim: 'Fundación Telefónica digital resources in 14 Loreto schools.', url: 'https://www.gob.pe/institucion/regionloreto-dre/noticias/852713-gerente-de-educacion-recibe-informe-de-programa-educativo-de-la-fundacion-telefonica-peru' },
      { claim: 'MINEDU plan for satellite internet in 55,000 schools.', url: 'https://www.gob.pe/institucion/minedu/noticias/1438938-minedu-conectara-a-internet-satelital-a-55-000-escuelas-publicas' },
      { claim: 'IIAP soil profile dataset, ODC-By licence and description.', url: 'https://www.datosabiertos.gob.pe/dataset/perfiles-de-suelo-de-san-mart%C3%ADn-loreto-madre-de-dios-y-ucayali-iiap-2005-2017' },
      { claim: 'Peru time UTC-5 with no summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A minimum internet speed for classes: not published, because we cannot verify one for Loreto; the free class tests instead.',
      'Which value is wrong in LO-029, the label or the number: left to the IIAP.',
      'An EF English score for Loreto: EF lists none.',
      'A summed Iquitos figure from its districts: never summed; the 2017 conglomerate figure is used.',
      'Any link with the GREL, IIAP, MINEDU or the ONEM: none.',
      'Spanish-language teaching: every class is in English.',
      'Naming Loreto schools as sources of students: refused.'
    ]
  }
};
