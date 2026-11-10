// SHIP: market (region) | Ucayali: Pucallpa's three districts, river and highway towns, honest on English and laptops | concentration: sort descending, slice the top tenth, compare its share with the average
'use strict';
// Online coding and AI classes, Ucayali region, Peru (ag- region page, Peru cluster row PE177; alloc: regions, caur, #0E4B00).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: flexible hours; USD only via
// data-price anchors.
// Spine: Ucayali is an Amazon region of four provinces in which Coronel Portillo (Pucallpa, split across Callería,
// Yarinacocha and Manantay) holds three quarters of the people, with highway towns on the Federico Basadre road and river
// districts far up the Ucayali. EF puts the region in its low band and only about one home in five has a computer, so the
// page steers secundaria, university and working learners first. The project uses Electro Ucayali's monthly consumption file
// to show why an average hides how unevenly something is shared.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-ucayali-region-peru/
// and the shared ../src/inei/ folder):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1: UCAYALI 623868; provinces CORONEL PORTILLO 470664,
//    ATALAYA 63624, PADRE ABAD 86687, PURÚS 2893; districts CALLERÍA 166780, YARINACOCHA 135161, MANANTAY 107016,
//    CAMPOVERDE 23894, IPARIA 14724, MASISEA 14451, NUEVA REQUENA 8638, RAIMONDI 40667, SEPAHUA 9970, TAHUANIA 11027, YURUA
//    1960, PADRE ABAD 29784, IRAZOLA 14225, CURIMANA 13472, NESHUYA 13301, PURÚS 2893. Capital Pucallpa (Compendio 2026
//    cuadro 1.8). Never summed.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Pucallpa city 326,040 (2017). Lib1541 dpto25 (single centro poblado, 2017):
//    PUCALLPA 144207 (Callería), PUERTO CALLAO 93248 (Yarinacocha), SAN FERNANDO 85540 (Manantay), AGUAYTIA 15587, ATALAYA
//    12946 (Raymondi).
//  - INEI Compendio Estadístico Perú 2026 tomo 1 (ENAHO): 11.5 Ucayali "23,1 21,6 24,2 23,6 23,2 23,1 20,5 22,8 22,2 21,3
//    21,2"; 11.6 "9,7 12,1 13,7 15,0 20,2 24,2 33,7 48,7 43,6 48,7 50,2"; 11.13 "31,3 36,9 41,8 46,2 49,7 55,0 61,9 62,2
//    66,2 72,0 75,4" (2015 to 2025). Peru 2025: 33,9 / 56,8 / 81,1.
//  - EF EPI 2025 (ef_peru.raw): "border-epi-low"><span data-state="ukayali">Ukayali</span><span>458</span>; Peru 519.
//  - DRE Ucayali on gob.pe, 17 August 2023 (n 819806): Proyecto Educativo Regional de Ucayali al 2034 launched on 15 August at
//    the Campo Ferial de Yarinacocha; "4 ejes estratégicos, con 4 objetivos y 16 acciones". 26 August 2023 (n 824512): the
//    Concurso Nacional de Matemáticas UGEL stage on Friday 25 August with pupils from "Atalaya, Purús, Padre Abad y Coronel
//    Portillo", organised by "el Minedu, Concytec y Aceros Arequipa". Officials' names not printed.
//  - Ley 28044, Edades normativas, CNEB competency 28 and JER hours, MINEDU 2026 opening, Fábrica de Programadores, ONEM
//    2026, OPI (FACTS 5, 6, 13, 14, 17, 32, 33, 39, 45, 99, 105, 111). Time: tzdata.
//  - Data: Electro Ucayali S.A., "Consumo de Energía Eléctrica de los clientes de Electro Ucayali SA", datosabiertos.gob.pe,
//    "Open Data Commons Attribution License" (ODC-By); monthly files from October 2022. File for April 2026 (saved as
//    eluc-2026-04.csv), 10,049,526 bytes, Latin-1, commas, 93,412 rows, PERIODO 202604, FECHA_CORTE 20260409; DEPARTAMENTO
//    UCAYALI 93,006 and HUANUCO 406 (Puerto Inca); TARIFA BT5B 92,885, BT8 519, BT5D 8. Data dictionary: TITULAR "ID de
//    suministro del usuario anonimizado"; the dictionary names the energy column CONSUMO_KWh, the file CONSUMO_KWATTS;
//    FACTURACION is money and is never printed. No supply IDs printed.
// Our own calculations (scratchpad pe/r4/uc/v1.py, v2.py, python3 -I):
//  v1 prints: "Meters: 93412" / "Average kWh: 136.0".
//  v2 prints: "Supplies on BT5B in Ucayali: 92479" / "Average kWh: 136.3" / "Middle meter kWh: 86.0" / "Top tenth uses:
//    41.0 %" / "Meters reading zero: 6258".
//  By province (same filter): Coronel Portillo 74,683 supplies, average 144.7, median 96.0, top tenth 39.2%; Padre Abad
//    14,793, 84.8, 43.0, 49.0%; Atalaya 2,659, 192.0, 99.0, 48.1%; Purús 344, 85.7, 39.0, 49.6%.
// Lesson family: concentration. Sort descending, take the top tenth with integer division, divide its total by the whole,
// and compare that share with what the average suggests; filter out rows from outside the region first.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'with open("eluc-2026-04.csv", encoding="latin-1", newline="") as f:',
  '    kwh = [float(r["CONSUMO_KWATTS"]) for r in csv.DictReader(f)]',
  '',
  'print("Meters:", len(kwh))',
  'print("Average kWh:", round(sum(kwh) / len(kwh), 1))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'kwh = []',
  'with open("eluc-2026-04.csv", encoding="latin-1", newline="") as f:',
  '    for r in csv.DictReader(f):',
  '        if r["DEPARTAMENTO"] == "UCAYALI" and r["TARIFA"] == "BT5B":',
  '            kwh.append(float(r["CONSUMO_KWATTS"]))',
  '',
  'kwh.sort(reverse=True)',
  'total = sum(kwh)',
  'tenth = len(kwh) // 10',
  'middle = kwh[len(kwh) // 2]',
  '',
  'print("Supplies on BT5B in Ucayali:", len(kwh))',
  'print("Average kWh:", round(total / len(kwh), 1))',
  'print("Middle meter kWh:", middle)',
  'print("Top tenth uses:", round(100 * sum(kwh[:tenth]) / total, 1), "%")',
  'print("Meters reading zero:", kwh.count(0.0))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Ucayali region' },
  slug: 'online-coding-and-ai-classes-ucayali-region-peru',
  code: 'caur',
  accent: '#0E4B00',
  accentRationale: 'Ucayali region: a dense rainforest-canopy green #0E4B00, the forest that lines the Ucayali river around Pucallpa, allocated to this row; contrast 9.78 on #FBF8F2, 9.20 on #F5F1E8 and 8.42 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Ucayali region, Peru',
  title: 'Ucayali Region, Peru: Online Coding and AI Classes in English',
  description: 'Live coding and AI classes online, in English, for Pucallpa and the Ucayali region: who they suit, census and device data, and a Python project on electricity use.',
  ogDescription: 'Coding, AI and maths for learners in Pucallpa, Yarinacocha, Manantay, Aguaytía and Atalaya, taught live online in English: four provinces in 2025 census figures, a frank look at English levels and home computers, and a Python project on Electro Ucayali\'s monthly consumption data.',
  twitterDescription: 'Ucayali region, live online coding in English: who it suits, census and device facts, an electricity-data project.',
  pageName: 'Online Coding and AI Classes in the Ucayali Region',
  webPageDescription: 'A guide for learners in Pucallpa and across the Ucayali region of Peru to live online coding and AI classes taught in English, built from INEI census and ENAHO tables, DRE Ucayali notes, EF EPI 2025, MINEDU curriculum sources and an original Python project on Electro Ucayali consumption data (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Ucayali region of Peru: blocks and puzzles for children, Python, Java and web development for secundaria students, Python, data analysis and SQL for university students and adults, as a group of fifteen to twenty or one to one, at hours set by the learner.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Ucayali region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#suit', label: 'Who it suits' },
    { href: '#four', label: 'Provinces' },
    { href: '#power', label: 'Data project' },
    { href: '#kit', label: 'Laptops' },
    { href: '#time', label: 'Time' }
  ],
  eyebrow: 'Ucayali region &middot; Live online, in English &middot; Teenagers and adults first',
  h1: 'Online coding and AI classes in the Ucayali region',
  lede: 'Most people in Ucayali live in and around Pucallpa, where the city stretches across Callería, Yarinacocha and Manantay, but the region also runs west along the highway to Aguaytía and south up the river to Atalaya and Sepahua. Our classes are taught live, on a screen, in English. Here is what the census and household survey say about the region, who our classes suit most, and a Python lesson built on the electricity company\'s own open data.',
  secondaryCta: { href: '#power', label: 'Go to the electricity project' },
  wa: 'Hello Modern Age Coders, I am writing from the Ucayali region of Peru. Could your live coding classes in English work for me or my child? I would like to try a free class.',
  heroNote: 'Live classes since 2020 &middot; more than 10,000 students in many countries &middot; mentors used to learners whose first language is Spanish',
  spec: [
    ['Fits best', 'Secundaria and university students, and working adults'],
    ['Children', 'From six, often privately at the start'],
    ['Teaching language', 'English, slow and clear'],
    ['Class size', 'Fifteen to twenty, or just one'],
    ['When', 'Whatever hour you choose'],
    ['Try first', 'A free class with an English and laptop check']
  ],
  capsuleQ: 'The quick answer',
  capsule: 'Yes, learners in the Ucayali region can take live online coding and AI classes in English with Modern Age Coders, from Pucallpa, Yarinacocha and Manantay to Aguaytía, Campoverde and Atalaya. Teenagers in secundaria, university students and working adults with some English gain most: Python, Java, websites, data and AI, with the mentor teaching in real time. Children from six can begin with blocks, usually privately. You choose a group of fifteen to twenty or one-to-one lessons, at hours that suit you, and the first class costs nothing.',

  picks: {
    eyebrow: 'Good first steps in Ucayali',
    h2: 'Three courses Ucayali learners often start with',
    lede: 'Weighted towards older learners, because they meet the fewest barriers with English-taught classes, with one way in for younger children.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'UCA / 01', title: 'Python for Teens', note: 'For secundaria students with no experience. Short, readable code and English keywords, so the programming and the English improve side by side.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'UCA / 02', title: 'Python Masterclass', note: 'For university students and adults. A first script in week one, then files, data and small automations, at hours around work or study.' },
      { course: 'kids-coding-blocks-masterclass', code: 'UCA / 03', title: 'Coding for Kids', note: 'For children from about six to twelve. Blocks first, games soon after, with a mentor who explains every move on screen.' }
    ]
  },

  sections: [
    {
      id: 'suit',
      eyebrow: 'An honest start',
      h2: 'Will English-taught online classes work for learners in Ucayali?',
      lede: 'For many teenagers and adults, yes. For young children from homes where only Spanish is spoken, it usually takes private lessons and patience. Every class is live, online and taught in English, never in Spanish.',
      body: [
        { kind: 'two',
          leftH3: 'How strong is English here?',
          left: [
            'The 2025 edition of EF\'s English Proficiency Index lists Ucayali among Peru\'s regions with a score of 458, which EF places in its low band. The national figure is 519, in the moderate band.',
            'A low band does not rule anyone out. It tells us that the typical learner here will need more listening time and simpler sentences at the start, and that is how our mentors begin.'
          ],
          rightH3: 'Learners who usually do well',
          right: [
            'Secundaria students who take school English seriously. Students at universities and institutes in Pucallpa, who meet English in manuals and software every week. People in jobs where they already read English messages or documents.',
            'Children aged six to nine can still join, mostly one to one. The mentor speaks in short sentences, demonstrates on the shared screen, and lets the child answer by clicking and building as well as by speaking.'
          ] },
        { kind: 'p', mt: true, html: 'The free class doubles as a check. Our mentor gives a short task in easy English and notices where the learner hesitates. If the language is too much for now, we tell you and suggest private lessons, a later start or an easier first course. For a Spanish explanation of how classes for children work, see <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">our page for Spanish-speaking parents</a>; for older students, <a class="ag-inline-link" href="/learn-coding-and-english-together-peru">learning coding and English together</a> describes how the two grow at once.' }
      ]
    },
    {
      id: 'four',
      tint: 'tint',
      eyebrow: 'Four provinces',
      h2: 'How many people live in Ucayali, and where?',
      lede: 'The 2025 census found 623,868 people in the department of Ucayali. Coronel Portillo, the province of Pucallpa, accounts for 470,664 of them.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Population of Ucayali by province, 2025 census (INEI)', head: ['Province', 'Population'], rows: [
          ['Coronel Portillo (capital: Pucallpa)', '470,664'],
          ['Padre Abad', '86,687'],
          ['Atalaya', '63,624'],
          ['Purús', '2,893'],
          ['Department of Ucayali', '623,868']
        ] },
        { kind: 'source', html: 'INEI, Censos Nacionales 2025, Cuadro N° 1 of the demographic indicators file: población total on census day, 15 September 2025, using the limits in force in mid-July 2026. INEI publishes the department total itself; we did not add the provinces.' },
        { kind: 'two', mt: true,
          leftH3: 'Pucallpa: one city, three districts',
          left: [
            'INEI\'s 2017 census counted 326,040 people in the city of Pucallpa. The city covers three districts, which in 2025 had 166,780 people (Callería), 135,161 (Yarinacocha) and 107,016 (Manantay).',
            'The 2017 directory of populated centres lists the parts separately too: Pucallpa itself 144,207, Puerto Callao 93,248 and San Fernando 85,540. We print each figure with its year and never combine them.'
          ],
          rightH3: 'Along the highway and up the river',
          right: [
            'West of Pucallpa, Campoverde had 23,894 people in 2025, Neshuya 13,301 and Padre Abad district, home of Aguaytía, 29,784. Aguaytía\'s main populated centre counted 15,587 in 2017.',
            'To the south, Raimondi district, where the town of Atalaya stands, had 40,667 people in 2025, Tahuania 11,027 and Sepahua 9,970. Purús, the smallest province, is a single district of 2,893 people.'
          ] }
      ]
    },
    {
      id: 'power',
      eyebrow: 'A Ucayali data project',
      h2: 'Does the average electricity bill in Ucayali tell the whole story?',
      lede: 'No, and a short program shows why. Electro Ucayali publishes how much energy each supply used in a month. The average is easy to compute; how unevenly the energy is shared takes one more idea.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'Electro Ucayali S.A. publishes "Consumo de Energía Eléctrica de los clientes de Electro Ucayali SA" on datosabiertos.gob.pe, with one file per month since October 2022, under an Open Data Commons Attribution licence (ODC-By). The licence lets anyone reuse the data, commercially or not, provided Electro Ucayali is named.',
            'We use April 2026, saved as eluc-2026-04.csv: 93,412 rows, one per supply, generated on 9 April 2026. The customer column holds an anonymised ID, which we never print, and a money column we leave alone.'
          ],
          rightH3: 'Two surprises before any maths',
          right: [
            'Not every row is in Ucayali. 406 supplies are in Puerto Inca, a province of Huánuco that the company also serves. A question about Ucayali has to filter them out.',
            'The data dictionary calls the energy column CONSUMO_KWh, but the file itself calls it CONSUMO_KWATTS. Programs read the file, not the dictionary, so we use the name the file actually has.'
          ] },
        { kind: 'code', label: 'Version 1: the average of everything', lang: 'Python', code: V1, note: 'It prints: <code>Meters: 93412</code> and <code>Average kWh: 136.0</code>.' },
        { kind: 'p', mt: true, html: 'This is correct arithmetic on the wrong rows. It mixes in the Huánuco supplies and every tariff, and it answers a question nobody asked. Even with the right rows, an average of about 136 kWh invites a picture of a typical supply using about 136. Version 2 tests that picture.' },
        { kind: 'code', label: 'Version 2: filter, sort, and measure the top tenth', lang: 'Python', code: V2, note: 'It prints: <code>Supplies on BT5B in Ucayali: 92479</code>, <code>Average kWh: 136.3</code>, <code>Middle meter kWh: 86.0</code>, <code>Top tenth uses: 41.0 %</code> and <code>Meters reading zero: 6258</code>.' },
        { kind: 'p', mt: true, html: 'Version 2 keeps only Ucayali rows on the BT5B tariff, which covers 92,885 of the 93,412 rows. It sorts from largest to smallest, so <code>kwh[:tenth]</code> is the busiest tenth, and <code>len(kwh) // 10</code> uses whole-number division because a slice needs a whole number. The busiest tenth of supplies used 41.0 per cent of the energy. The middle supply in the sorted list used 86 kWh, well under the average of 136.3, because a small number of large users pulls the average up. And 6,258 supplies recorded zero that month, which could mean an empty house, a closed shop or a meter not read; the file does not say, so neither do we.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4], caption: 'BT5B supplies by province, April 2026 (our calculation)', head: ['Province', 'Supplies', 'Average kWh', 'Middle supply kWh', 'Top tenth\'s share'], rows: [
          ['Coronel Portillo', '74,683', '144.7', '96.0', '39.2%'],
          ['Padre Abad', '14,793', '84.8', '43.0', '49.0%'],
          ['Atalaya', '2,659', '192.0', '99.0', '48.1%'],
          ['Purús', '344', '85.7', '39.0', '49.6%'],
          ['All four', '92,479', '136.3', '86.0', '41.0%']
        ] },
        { kind: 'source', html: 'Data: Electro Ucayali S.A., Consumo de Energía Eléctrica de los clientes de Electro Ucayali SA, April 2026 file, ODC-By. Counts, averages, middle values and shares are ours, for rows with DEPARTAMENTO UCAYALI and TARIFA BT5B. The file does not explain the tariff codes, so we do not call these supplies homes.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8.</strong> Ten children share thirty sweets: one child has twelve, the rest have two each. What is the fair share? Does any child actually have it?',
          '<strong>Ages 8 to 11, in blocks.</strong> Put ten numbers in a list, sort them, and add up the biggest one. What part of the total is that one number?',
          '<strong>Ages 11 to 13, first Python.</strong> Change Version 2 to measure the top fifth instead of the top tenth. Predict whether the share goes up or down before you run it.',
          '<strong>Teenagers.</strong> The company writes RAYMONDI and ALEXANDER VON HUMBOLT where INEI writes RAIMONDI and ALEXANDER VON HUMBOLDT. Build a small dictionary that maps one spelling to the other, then join supplies per district to the 2025 census.',
          '<strong>University and adults.</strong> Repeat the analysis for every monthly file you download and plot the top tenth\'s share over time. Does it move with the seasons?'
        ] },
        { kind: 'p', mt: true, html: 'Students meet the same idea later in many places: a few large accounts, a few heavy users, a few big files. The skill is to sort, slice and say what share sits at the top before quoting an average. Our <a class="ag-inline-link" href="/data-science-course-peru">data science page for Peru</a> follows that thread into proper statistics.' }
      ]
    },
    {
      id: 'classroom',
      eyebrow: 'School in Ucayali',
      h2: 'Do Ucayali schools teach coding?',
      lede: 'Not as a subject of its own. Ucayali uses the national curriculum, which spreads digital skills across every area rather than giving programming its own timetable slot.',
      body: [
        { kind: 'two',
          leftH3: 'National rules that apply here',
          left: [
            'Primaria lasts six years and secundaria five under Peru\'s General Education Law (Ley 28044). A child\'s grade depends on their age on 31 March, so first grade begins at six and fifth of secundaria usually means sixteen.',
            'The CNEB lists ICT as competency 28 and makes it transversal. In the regular secundaria week of 35 hours there are four of Matemática, three of Inglés and none labelled computing or programming.'
          ],
          rightH3: 'What the regional education office reports',
          right: [
            'In August 2023 the Dirección Regional de Educación de Ucayali launched its Proyecto Educativo Regional to 2034 at the Campo Ferial de Yarinacocha, with 4 strategic axes, 4 objectives and 16 actions.',
            'The same month it reported pupils from Atalaya, Purús, Padre Abad and Coronel Portillo sitting the UGEL stage of a national maths contest run by MINEDU, Concytec and Aceros Arequipa, on 25 August 2023.'
          ] },
        { kind: 'p', mt: true, html: 'Python reached state schools in July 2025 through MINEDU\'s Fábrica de Programadores, but only for 1,000 pupils in Lima Norte in its first stage. Nationally, the ONEM maths olympiad\'s school round was held on 8 July 2026 and involved more than 1.7 million secundaria pupils, and UTEC\'s computing olympiads are free to enter. We are independent of the DRE, MINEDU, UTEC and these contests, and the exercises we set are our own.' }
      ]
    },
    {
      id: 'kit',
      eyebrow: 'At home',
      h2: 'How many Ucayali homes have a computer or an internet connection?',
      lede: 'About half of homes had an internet service in 2025, but only about one in five had a computer, on INEI\'s household survey. For programming, the computer is the harder of the two to find.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Computers and internet in Ucayali and Peru, ENAHO (per cent)', head: ['Measure', 'Ucayali 2022', 'Ucayali 2025', 'Peru 2025'], rows: [
          ['Households owning a computer', '22.8', '21.2', '33.9'],
          ['Homes with internet service', '48.7', '50.2', '56.8'],
          ['People aged 6+ who use the internet', '62.2', '75.4', '81.1']
        ] },
        { kind: 'source', html: 'Figures from INEI\'s Compendio Estadístico Perú 2026, volume 1, tables 11.5 (computers), 11.6 (internet service) and 11.13 (internet use), which report the national household survey (ENAHO) by department. Decimal commas converted to points.' },
        { kind: 'two', mt: true,
          leftH3: 'What changed between 2022 and 2025',
          left: [
            'The share of people online rose by more than thirteen points, to three in four. The share of homes with a computer fell slightly, from 22.8 to 21.2 per cent.',
            'So many young people in Ucayali are online every day on a phone, and fewer have a keyboard at home than three years earlier.'
          ],
          rightH3: 'Making it work',
          right: [
            'A phone is enough to join a call; it is not enough to write programs, which means typing, running and correcting code for most of the lesson. From about nine years old, a laptop or desktop is what we ask for.',
            'One laptop shared between brothers and sisters on different days works. So does a computer at a parent\'s workplace after hours, or a university lab. If none of these is possible, we will say so in the free class.'
          ] }
      ]
    },
    {
      id: 'choose',
      eyebrow: 'Picking a course',
      h2: 'What should a learner in Ucayali study first?',
      lede: 'Match the course to the learner\'s age and English, then check the computer. The table is our guidance and our age ranges.',
      body: [
        { kind: 'table', numCols: [], caption: 'Suggested first courses for Ucayali learners (ours)', head: ['Who', 'English now', 'Begin with', 'Usual format'], rows: [
          ['Child, 6 to 9', 'Beginning', 'Coding for Kids, blocks only', 'Private, parent close by'],
          ['Child, 9 to 12', 'A little, from school', 'Scratch, then Python and AI for kids', 'Group or private'],
          ['1° to 3° de secundaria', 'School level', 'Python for Teens', 'Group'],
          ['4° and 5° de secundaria', 'Reads with ease', 'Python, then Java or web development', 'Group'],
          ['University or institute', 'Reads manuals', 'Python masterclass, data analysis or SQL', 'Group or private'],
          ['Adult at work', 'Any, with patience', 'Python from zero', 'Often private']
        ] },
        { kind: 'source', html: 'Our guidance only. Peruvian grades are set by age at 31 March, so classmates may differ in age by almost a year.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Under twelve', p: 'Building, dragging and testing on screen, with the same English phrases each week until they feel natural.' },
          { h3: 'Teenagers', p: 'Typed code from lesson one. Python leads on to Java, websites, data or the PCEP certificate.' },
          { h3: 'Adults', p: 'Practical programming and data work, fitted around shifts, lectures and family.' }
        ] },
        { kind: 'p', mt: true, html: 'Students in Pucallpa\'s universities and institutes can read <a class="ag-inline-link" href="/coding-courses-for-university-students-peru">coding courses for university students in Peru</a>; every Peru page, including the Spanish ones, is listed on <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'time',
      eyebrow: 'Time difference',
      h2: 'What is the time difference between Pucallpa and India for a class?',
      lede: 'India is 10 hours 30 minutes ahead of Pucallpa every day of the year, and the lesson goes at the hour the learner picks.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example conversions, Pucallpa to India (not a timetable)', head: ['Pucallpa', 'India', 'For the mentor'], rows: [
          ['05:45', '16:15', 'Afternoon'],
          ['07:30', '18:00', 'Early evening'],
          ['11:00', '21:30', 'Night'],
          ['14:30', '01:00', 'After midnight'],
          ['18:00', '04:30', 'Before dawn'],
          ['20:00', '06:30', 'Morning']
        ] },
        { kind: 'source', html: 'tz database: Peru (America/Lima) at UTC minus 5 with no clock changes since 1994; India at UTC plus 5:30. Because neither side moves its clocks, these pairs hold in every month.' },
        { kind: 'p', mt: true, html: 'Book in your own clock and the hour stays put from January to December. The 2026 school year began on 16 March 2026; many Ucayali families use the January to March break to start, and adults simply begin when ready.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How a learner in Ucayali progresses',
    lede: 'Six stages we use for every age, so that a family can see what has been learned so far and what the next step is.',
    table: { caption: 'Our stages, from first steps to measuring shares', head: ['Stage', 'Often at', 'The learner can'], rows: [
      ['1. Sequence', '6 to 7', 'Give a sprite a short list of steps to follow'],
      ['2. Repeat', '7 to 9', 'Loop a step instead of writing it again'],
      ['3. Remember', '8 to 10', 'Keep a total in a variable'],
      ['4. Choose', '9 to 12', 'Write Python with if, for and lists'],
      ['5. Filter', '11 to adult', 'Keep only the rows a question is really about'],
      ['6. Rank and share', '13 to adult', 'Sort, slice the top part and give its share of the total']
    ] },
    left: { h3: 'For parents', ps: [
      'Stages 5 and 6 are what the electricity project trains. Having done it, a learner will ask who is inside an average before trusting it.',
      'Every month you hear what your child made and explained.'
    ] },
    right: { h3: 'For learners', ps: [
      'Filter first, then count.',
      'An average can sit where almost nobody is.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more options for Ucayali learners',
    lede: 'In three age bands, all live in English with one regular mentor, in a group or individually.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'UCA / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Stories and games from drag-and-drop blocks.' },
        { code: 'UCA / KIDS / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What AI is and is not, ages 8 to 14.' },
        { code: 'UCA / KIDS / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary maths', blurb: 'Grades 1 to 5, explained step by step.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'UCA / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects and real programs from the first month.' },
        { code: 'UCA / TEEN / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python, tables and first models.' },
        { code: 'UCA / TEEN / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack for teens', blurb: 'Front end and back end, built live.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'UCA / ADULT / 01', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL and Python for reports.' },
        { code: 'UCA / ADULT / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'Design and query real databases.' },
        { code: 'UCA / ADULT / 03', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'Averages, spread and shares done properly.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Day to day',
    h2: 'How the live online classes work from Ucayali',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before school', l: 'Early Pucallpa mornings fall in the Indian afternoon.' },
      { time: 'Late in the day', l: 'Evening classes in Ucayali are also arranged.' },
      { time: 'Individual', l: 'Chosen when English needs extra care.' }
    ],
    cells: [
      { h3: 'A familiar mentor', p: 'The learner sees the same face each week.' },
      { h3: 'Clear speech', p: 'Simple English, with key words written on screen.' },
      { h3: 'Learner at the keyboard', p: 'Students write and run their own programs.' },
      { h3: 'No mixed ages', p: 'Children, teenagers and adults learn separately.' },
      { h3: 'Frank feedback', p: 'Parents hear about progress and problems alike.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty learners, or one.' }
    ]
  },

  projectsH2: 'Projects from students who stayed the course',
  projectsLede: 'Over months, students move from exercises to tools other people can use. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents and students wrote on Google, unchanged.',

  fees: {
    h2: 'Fees for learners in Ucayali',
    lede: 'Every plan is priced in US dollars and charged to a card once a month. Your bank turns that into soles at its own rate on the day of payment, which is why the soles amount on a statement is not always identical.',
    free: ['A first class at no cost', 'Checks of English and computer', 'No card details asked'],
    group: ['Fifteen to twenty learners of similar age', 'The same mentor throughout', 'Weekly live lessons', 'Monthly, cancel whenever'],
    one: ['A private mentor', 'Extra time where English is new', 'Your own hours']
  },

  faq: {
    eyebrow: 'Ucayali questions',
    h2: 'Coding and AI classes in Ucayali: what families ask',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Lessons are live and online, and the teaching language is English only. Our mentors keep their speech calm and clear, follow the learner\'s speed and ear for accents, and when a student answers in Spanish they help turn the idea into English, while the lesson itself carries on in English.' },
      { q: 'What does EF say about English in Ucayali?', a: 'The 2025 EF index scores the region at 458, which EF counts as low, while Peru overall reaches 519. In practice, many Ucayali learners need a slower first month, and the trial lesson tells us how slow.' },
      { q: 'We are in Aguaytía, Campoverde or Atalaya. Can we join?', a: 'Yes. Nothing about the class depends on being in Pucallpa. A steady connection for the length of the lesson and a suitable device are all that matter.' },
      { q: 'Is a phone enough?', a: 'To follow along, it is. To write programs, it is not, because coding means typing for most of the hour. Young beginners can use a tablet for blocks; once a learner moves to typed code, usually around nine or ten, we ask for a laptop or desktop.' },
      { q: 'At what time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India runs 10 hours 30 minutes ahead of Pucallpa throughout the year, which makes 07:30 in Pucallpa 18:00 for the mentor.' },
      { q: 'Do Ucayali schools teach programming?', a: 'There is no programming subject. Digital skills sit inside every area of the national curriculum, and none of the regular secundaria hours is set aside for code.' },
      { q: 'Do university students in Pucallpa get much from this?', a: 'Usually a great deal. Engineering, business, agronomy and science students already meet English in software and manuals, so Python, SQL, Java or data analysis taught in English fits straight into their degree.' },
      { q: 'Do you teach artificial intelligence?', a: 'Yes. Older students build small models, test them and learn where they fail. Younger children explore the ideas through games and simple projects, and nobody under 13 uses an adult chatbot account with us.' },
      { q: 'How do payments work?', a: 'A card is charged once a month in US dollars, and the conversion to soles happens at your bank. Anyone browsing from India sees prices in rupees. There is no charge for the first class.' },
      { q: 'Is there a certificate?', a: 'Where a course includes one, we issue our own certificate of completion. Neither MINEDU nor the regional government awards or recognises it, and it is not a Peruvian school or university qualification; it shows the work the learner completed.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Keep reading',
    h2: 'Other pages for learners in Ucayali',
    lede: 'Guides by age and subject that go further than this one.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The national hub and its index of guides.' },
      { href: '/learn-coding-and-english-together-peru', label: 'Learn coding and English together', p: 'How the two skills grow side by side.' },
      { href: '/data-science-course-peru', label: 'Data science course, Peru', p: 'From tables to models.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Starting later, without fuss.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits for the main AI tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one live lesson.' }
    ]
  },

  start: {
    h2: 'Book a trial lesson from Ucayali',
    lede: 'The free class takes a learner through a short puzzle and a first program, with a few minutes of conversation in plain English. Afterwards the mentor tells you whether to start now, which course fits, and whether a group or private lessons make more sense.',
    readFirst: 'To read more first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a lesson and <a class="ag-inline-link" href="/courses">our courses</a> lists every syllabus.',
    note: 'Our mentors teach from India, live and online, always in English. WhatsApp messages written in English get answered fastest.',
    formNote: 'No cost, no card, no commitment.'
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
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Who is inside the average?'
  },

  personalityCss: `
.ag-root.ag-caur .ag-hero h1 { letter-spacing: -0.01em; max-width: 19ch; }
.ag-root.ag-caur .ag-capsule { border-left-width: 3px; border-radius: 8px; }
.ag-root.ag-caur .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-caur .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-caur .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro N° 1), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017; INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); DRE Ucayali notes of 17 and 26 August 2023; Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, ONEM 2026; UTEC OPI; EF EPI 2025; tz database. Data: Electro Ucayali S.A., Consumo de Energía Eléctrica de los clientes, April 2026, ODC-By.',
    localProject: 'Does the average electricity bill in Ucayali tell the whole story? An original Python project on Electro Ucayali\'s April 2026 consumption file (ODC-By): Version 1 averages all 93,412 rows (136.0 kWh), including 406 Huánuco supplies; Version 2 keeps 92,479 Ucayali BT5B supplies, sorts them and finds the busiest tenth used 41.0 per cent of the energy while the middle supply used 86.0 kWh against an average of 136.3. Lesson family: concentration, the top tenth\'s share.',
    requiredMentions: ['eluc-2026-04.csv', 'Supplies on BT5B in Ucayali: 92479', 'Top tenth uses: 41.0 %', 'Middle meter kWh: 86.0', '623,868', 'with a score of 458', 'CONSUMO_KWATTS', 'Who is inside the average?', '4 strategic axes, 4 objectives and 16 actions'],
    sources: [
      { claim: 'Department, province and district populations of Ucayali, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Pucallpa city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Populated-centre figures for Pucallpa, Puerto Callao, San Fernando and Aguaytía, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto25.xlsx' },
      { claim: 'Computers, internet service and internet use in Ucayali and Peru, 2022 and 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'EF EPI 2025 Ucayali and Peru scores.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Proyecto Educativo Regional de Ucayali al 2034.', url: 'https://www.gob.pe/institucion/regionucayali-dre/noticias/819806-gran-lanzamiento-del-proyecto-educativo-regional-de-ucayali-al-2034' },
      { claim: 'UGEL stage of the national maths contest, 25 August 2023.', url: 'https://www.gob.pe/institucion/regionucayali-dre/noticias/824512-estudiantes-ucayalinos-participaron-del-concurso-nacional-de-matematicas-en-la-etapa-ugel' },
      { claim: 'Electro Ucayali consumption data, ODC-By, and data dictionary.', url: 'https://www.datosabiertos.gob.pe/dataset/consumo-de-energ%C3%ADa-el%C3%A9ctrica-de-los-clientes-de-electro-ucayali-sa' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ONEM 2026 participation.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'Peru time UTC-5 without daylight saving.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Calling BT5B supplies homes: the file does not define the tariff, so we say supplies.',
      'Any money figure from the FACTURACION column: not printed.',
      'Explaining why 6,258 supplies read zero: the file gives no reason, so none is offered.',
      'A ranking of Ucayali in national learning results from the DRE note: not checked against the ENLA source, so not printed.',
      'Combining the three Pucallpa districts into a 2025 city figure: refused; the city figure stays 2017.',
      'Officials\' names in the DRE notes: not printed.',
      'Any connection with Electro Ucayali, the DRE, MINEDU, UTEC or any school: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
