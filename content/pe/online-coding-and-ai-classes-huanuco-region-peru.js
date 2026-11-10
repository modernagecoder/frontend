// SHIP: market (region) | Huánuco: few home computers, free public routes after secundaria, live classes in English as an extra | date heaping: one date holding a whole year's rows is a placeholder, a busy day has many documents
'use strict';
// Online coding and AI classes, Huánuco region, Peru (ag- region page, Peru cluster row PE175; alloc: regions, cahr, #443F00).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any hour;
// fees in USD only, through the template's data-price anchors.
// Spine: Huánuco has the lowest home-computer share of the regions on this row set (17.5 per cent in 2025, INEI ENAHO) and
// strong free public routes after secundaria (ten public technology institutes, a regional pre-university academy). Our
// classes are presented as an addition to those routes, not a replacement, with honest advice on equipment. The data
// project uses the regional government's own asset inventory, not the UNHEVAL enrolment file used elsewhere in the cluster.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-huanuco-region-peru/,
// national school facts from pe/facts-school/src; every quote string-matched in the raw file):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro 1: HUÁNUCO 807377 (población total, 15 Sept 2025);
//    provinces HUÁNUCO 339222, AMBO 58366, DOS DE MAYO 34199, HUACAYBAMBA 15392, HUAMALÍES 52230, LEONCIO PRADO 136246,
//    MARAÑÓN 30393, PACHITEA 57266, PUERTO INCA 42690, LAURICOCHA 19444, YAROWILCA 21929. Capital Huánuco. Never summed.
//  - Cuadro 3 (censada by age): HUÁNUCO 771443; De 6 a 11 años 87526; De 12 a 17 años 85842.
//  - INEI Lib1539 Cuadro 1.9 (places.tsv): Huánuco city 196,627 (2017, conglomerate). Lib1541 dpto10.xlsx single centros
//    poblados 2017: TINGO MARIA 46191, AUCAYACU 16929, AMBO 7444, LLATA 6027, LA UNION 5201, PANAO 4848.
//  - INEI Compendio Estadístico Perú 2026 tomo 1: cuadro 11.5 Huánuco "17,4 16,8 18,7 17,3 18,9 21,2 17,8 18,5 20,2 19,4
//    17,5"; cuadro 11.6 "9,3 8,3 8,4 9,2 19,5 24,1 26,8 29,9 33,7 31,7 33,3"; cuadro 11.13 "23,7 26,7 30,5 33,6 38,2 50,8
//    57,4 58,2 63,8 66,2 69,8"; Total 2025 33,9 / 56,8 / 81,1. Cuadros 5.16/5.17/5.22/5.23 (thousands, 2025): primaria
//    pública 88,6, privada 12,6; secundaria pública 71,5, privada 10,2. Cuadro 5.27 secundaria rural 37,7 (2025).
//  - DRE Huánuco on gob.pe: 8 April 2025 "10 institutos de educación superior tecnológica pública (IEST)" ... "ofrecen 1060
//    vacantes", "tienen una duración de tres años y no requieren el pago de mensualidades"; 6 January 2025 "cerca de 1200
//    jóvenes rindieron la evaluación de entrada a la academia preuniversitaria Otro Level", "815 alumnos fueron admitidos",
//    "durante dos meses".
//  - EF EPI 2025 Peru page: Huánuco not listed; Peru 519, rank 52 of 123.
//  - Ley 28044, MINEDU normative ages, CNEB competency 28 and JER hours, Fábrica de Programadores, ONEM 2026 (FACTS 5, 6,
//    13, 14, 32, 33, 39, 45, 99, 105). Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30.
//  - Data: Gobierno Regional Huánuco, "INVENTARIO DE BIENES MUEBLES DEL GOBIERNO REGIONAL DE HUANUCO", datosabiertos.gob.pe,
//    licence ODC-By, created 26 May 2024, modified 6 June 2024. Description: "Información extraída del informe final de
//    inventario al cierre del ejercicio anterior."; "Número de PECOSA: número del pedido comprobante de salida (PECOSA) que
//    registra al bien."; "Fecha de la PECOSA: fecha del pedido comprobante de salida (PECOSA) que registra al bien." File
//    "dataset inventario GOREHCO.csv" saved as inventario_gorehco.csv, 1,541,358 bytes, 10,291 rows, FECHA_CORTE 20231231.
// Our own calculations (scratchpad pe/r3/cahr/v1.py, v2.py, python3 -I):
//  v1 prints: Items: 10291 / Dec 4019 / Nov 1209 / Oct 1060
//  v2 prints: 1997 326 items, 1 dates, 100% on 19971231 [('TAS 1997', 326)] / 1998 17 items, 3 dates, 88% on 19981231
//    [('TAS 1997', 15)] / 2005 274 items, 16 dates, 83% on 20051230 [('4239-05', 49)]
//  extra: 1,317 items dated 31 December of some year; 20051230 holds 228 items under 102 different PECOSA numbers; item words:
//    SILLA 1,787, MONITOR 770, ESCRITORIO 767 (plus 118 "Escritorio"); district AMARILIS 7,745 rows.
// Lesson family: date heaping. When one date holds almost a whole year's rows under a single document number, it is a
// placeholder; when a busy date spreads over many documents, it is a real event. Count dates and documents, then decide.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'from collections import Counter',
  '',
  'MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split()',
  '',
  'with open("inventario_gorehco.csv", newline="", encoding="latin-1") as f:',
  '    items = list(csv.DictReader(f))',
  '',
  'by_month = Counter(MONTHS[int(i["FECHA_PECOSA"][4:6]) - 1] for i in items)',
  'print("Items:", len(items))',
  'for month, n in by_month.most_common(3):',
  '    print(month, n)'
].join('\n');

const V2 = [
  'import csv',
  'from collections import Counter, defaultdict',
  '',
  'years = defaultdict(list)',
  'with open("inventario_gorehco.csv", newline="", encoding="latin-1") as f:',
  '    for item in csv.DictReader(f):',
  '        years[item["FECHA_PECOSA"][:4]].append(item)',
  '',
  'for year in sorted(years):',
  '    items = years[year]',
  '    dates = Counter(i["FECHA_PECOSA"] for i in items)',
  '    top_date, on_top = dates.most_common(1)[0]',
  '    share = on_top / len(items)',
  '    if share >= 0.8 and len(items) >= 10:',
  '        papers = Counter(i["NUM_PECOSA"] for i in items if i["FECHA_PECOSA"] == top_date)',
  '        print(year, len(items), "items,", len(dates), "dates,",',
  '              f"{share:.0%} on {top_date}", papers.most_common(1))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Huánuco region' },
  slug: 'online-coding-and-ai-classes-huanuco-region-peru',
  code: 'cahr',
  accent: '#443F00',
  accentRationale: 'Huánuco region: a dark mountain-olive #443F00, the shade of the Huallaga valley slopes between Huánuco and Tingo María, allocated to this row; contrast 10.12 on #FBF8F2, 9.52 on #F5F1E8 and 8.71 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Huánuco region, Peru',
  title: 'Online Coding and AI Classes in the Huánuco Region, Peru',
  description: 'Live online coding and AI classes in English for Huánuco, Tingo María, Amarilis and the whole region: census, computers at home, free public routes, data project.',
  ogDescription: 'Coding and AI for children, teenagers and adults across the Huánuco region, taught live online in English at hours the family picks: 2025 census figures, the computer gap at home, the free public routes after secundaria, and a Python project on the regional government\'s asset inventory.',
  twitterDescription: 'Huánuco, live online coding in English: census, computers at home, free public routes and an inventory data project.',
  pageName: 'Online Coding and AI Classes in the Huánuco Region',
  webPageDescription: 'A guide for families and adult learners in the Huánuco region to live online coding and AI classes taught in English, built from INEI census and household survey figures, MINEDU school census figures, DRE Huánuco notes from 2025 and an original Python project on the Gobierno Regional Huánuco movable-asset inventory (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Huánuco region of Peru: Roblox game coding for children, Python with PCEP certification preparation for teenagers and adults, and SQL databases for adults, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Huánuco region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#region', label: 'The region' },
    { href: '#computers', label: 'Computers' },
    { href: '#routes', label: 'After school' },
    { href: '#inventory', label: 'Data project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Huánuco &middot; Live online, in English &middot; Ages 6 to adult',
  h1: 'Online coding and AI classes in the Huánuco region',
  lede: 'From Huánuco city and Amarilis to Tingo María in the high jungle and Llata or La Unión up in the Andes, the region spans very different landscapes, and online classes cross them all at once. Here is the census picture, an honest look at the computer gap in Huánuco homes, the free public routes young people already have after secundaria, and a data lesson drawn from the regional government\'s own inventory of chairs, desks and computers.',
  secondaryCta: { href: '#inventory', label: 'See the data project' },
  wa: 'Hello Modern Age Coders, we are in the Huánuco region of Peru and would like live coding classes in English. Could we try a free class?',
  heroNote: 'Teaching live online since 2020 &middot; more than 10,000 students so far &middot; mentors who check the reasoning behind each answer',
  spec: [
    ['Who for', 'Children from 6, teenagers, adults'],
    ['Places', 'Huánuco, Amarilis, Tingo María, Ambo, Llata'],
    ['Taught in', 'English, slowly and clearly'],
    ['Format', 'Fifteen to twenty, or one to one'],
    ['Times', 'Set by the family'],
    ['Before paying', 'A free class and device check']
  ],
  capsuleQ: 'Straight answer',
  capsule: 'Yes. Modern Age Coders offers live online coding and AI classes in English to learners all over the Huánuco region, in Huánuco city, Amarilis, Pillco Marca, Tingo María, Ambo and the highland provinces. Children from six begin with game coding and blocks and usually move to typed Python at about nine or ten; teenagers can work towards the PCEP Python certificate; adults learn Python, databases or AI tools. A learner either joins a class of fifteen to twenty peers or studies alone with a mentor, the family fixes the hours, and the opening lesson costs nothing. Learners are taught to work things out for themselves instead of copying.',

  picks: {
    eyebrow: 'Good first steps',
    h2: 'Three first courses for Huánuco learners',
    lede: 'Game coding for children, a Python course that ends with an internationally known certificate exam, and databases for adults who keep records at work.',
    items: [
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'HCO / 01', title: 'Roblox Game Coding', note: 'Ages 8 to 13. Children script their own Roblox games in Lua, learning variables, events and loops by building something their friends can play.' },
      { course: 'pcep-pcap-python-certification-course', code: 'HCO / 02', title: 'Python with PCEP and PCAP', note: 'For older teenagers and adults. Python from the basics up to the level of the PCEP and PCAP exams, the same entry certificate MINEDU\'s Fábrica de Programadores points pupils towards.' },
      { course: 'mysql-database-complete-masterclass-college', code: 'HCO / 03', title: 'MySQL Databases', note: 'From 18. Tables, queries and clean records, for anyone who works with lists of stock, assets, pupils or clients and wants them to be reliable.' }
    ]
  },

  sections: [
    {
      id: 'region',
      eyebrow: 'Census 2025',
      h2: 'How many people live in the Huánuco region?',
      lede: 'INEI\'s 2025 census counted 807,377 people in the department of Huánuco. They live in eleven provinces, and the capital is the city of Huánuco.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Huánuco department and its eleven provinces, total population, 2025', head: ['Area', '2025 population'], rows: [
          ['Department of Huánuco', '807,377'],
          ['Huánuco', '339,222'],
          ['Leoncio Prado (Tingo María)', '136,246'],
          ['Ambo', '58,366'],
          ['Pachitea', '57,266'],
          ['Huamalíes (Llata)', '52,230'],
          ['Puerto Inca', '42,690'],
          ['Dos de Mayo (La Unión)', '34,199'],
          ['Marañón', '30,393'],
          ['Yarowilca', '21,929'],
          ['Lauricocha', '19,444'],
          ['Huacaybamba', '15,392']
        ] },
        { kind: 'source', html: 'Taken from INEI\'s 2025 census, demographic indicators table 1, which reports each unit\'s total: those counted on 15 September 2025 plus an estimate for those missed, under the limits in force on 15 July 2026. The province rows are INEI\'s; we have not totalled them.' },
        { kind: 'two', mt: true,
          leftH3: 'City and towns',
          left: [
            'Until INEI publishes 2025 city figures, the latest count is from 2017, when the city of Huánuco, taken as one urban area across districts such as Amarilis and Pillco Marca, had 196,627 people.',
            'INEI\'s 2017 directory of populated centres, which counts each centre separately, gives Tingo María 46,191, Aucayacu 16,929, Ambo 7,444, Llata 6,027, La Unión 5,201 and Panao 4,848.'
          ],
          rightH3: 'School-age young people',
          right: [
            'Of the 771,443 people counted in person in 2025, 87,526 were aged 6 to 11 and 85,842 were aged 12 to 17.',
            'Some live a short bus ride from the regional capital; others are hours away in the Andes or along the Huallaga. A live class over video is the same lesson for all of them.'
          ] }
      ]
    },
    {
      id: 'computers',
      tint: 'tint',
      eyebrow: 'Equipment',
      h2: 'How many Huánuco homes have a computer and internet?',
      lede: 'Fewer than in most of Peru. For 2025 the national ENAHO survey found a computer in under one Huánuco home in five, about half the national share, while internet use has climbed steadily.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Huánuco and Peru, homes with a computer or internet, and people online (per cent)', head: ['Indicator', 'Huánuco 2015', 'Huánuco 2022', 'Huánuco 2025', 'Peru 2025'], rows: [
          ['Homes owning at least one computer', '17.4', '18.5', '17.5', '33.9'],
          ['Homes with an internet connection', '9.3', '29.9', '33.3', '56.8'],
          ['Residents aged 6+ who use the internet', '23.7', '58.2', '69.8', '81.1']
        ] },
        { kind: 'source', html: 'Department-level ENAHO figures that INEI reprints every year (tables on computers, home internet and internet users in its 2026 statistical compendium). Decimal points are ours, as is the choice of 2015, 2022 and 2025.' },
        { kind: 'two', mt: true,
          leftH3: 'What changed and what did not',
          left: [
            'Home internet in Huánuco went from 9.3 per cent of homes in 2015 to 33.3 per cent in 2025, while the proportion of residents from age six upwards who use the internet anywhere climbed from 23.7 to 69.8 per cent. That is real progress.',
            'Computers did not follow. In 2015 and in 2025 alike, fewer than one home in five had one. Most people in Huánuco who are online are online through a phone.'
          ],
          rightH3: 'Our honest advice',
          right: [
            'Children of six to eight can start on a tablet with blocks. From about nine, learning to program properly needs a keyboard and a screen big enough to see code and the class together.',
            'If you have no computer at home yet, tell us in the free class. Families often borrow a laptop for the hour, or use one at a relative\'s home or a parent\'s workplace, and one-to-one plans can be timed to when that machine is free.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'In school',
      h2: 'Is programming part of school in Huánuco?',
      lede: 'No. Huánuco\'s colegios teach the national CNEB curriculum, in which digital skill is everyone\'s job and no teacher\'s subject: programming has no slot of its own.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Enrolment in the Huánuco region in 2025 by school type, thousands of pupils', head: ['Level', 'Public', 'Private'], rows: [
          ['Primaria', '88.6', '12.6'],
          ['Secundaria', '71.5', '10.2']
        ] },
        { kind: 'source', html: 'Enrolment from MINEDU\'s school census, reproduced by INEI in the 2026 compendium. A further table there (cuadro 5.27) lists 37.7 thousand Huánuco secundaria pupils in rural schools in 2025. We changed decimal commas only.' },
        { kind: 'two', mt: true,
          leftH3: 'The national framework',
          left: [
            'Under Law 28044 a pupil spends six years in primaria, then five in secundaria. MINEDU places pupils by their age on 31 March. Technology appears in the CNEB only as competency 28, a transversal competency that all areas share.',
            'Under the regular day, secundaria has 35 weekly hours, with four for Matemática and two for Educación para el Trabajo. There is no programming area.'
          ],
          rightH3: 'National coding schemes so far',
          right: [
            'MINEDU\'s Fábrica de Programadores (July 2025) took a first thousand 4° and 5° de secundaria pupils, every one of them from Lima Norte, and taught them Python with the PCEP exam as the goal. Huánuco pupils were not in that first group.',
            'That is why our Python with PCEP course appears among the picks above: it gives a Huánuco teenager a similar goal, independently and in English.'
          ] }
      ]
    },
    {
      id: 'routes',
      eyebrow: 'After secundaria',
      h2: 'What free options do young people in Huánuco have after secundaria?',
      lede: 'More than many families realise. The DRE Huánuco has reported both free public technical training and a free regional pre-university academy. Our classes do not replace either; they add programming and English on top.',
      body: [
        { kind: 'two',
          leftH3: 'Public technology institutes',
          left: [
            'In April 2025 the DRE Huánuco said that ten public higher technological institutes (IEST) in the department were admitting students for 2025-I, offering 1,060 places. It described the programmes as lasting three years and charging no monthly fees, with an admission exam fee paid separately.',
            'Applicants need to have finished secundaria and present their documents to each institute. Dates vary by institute, so families should check with the institute directly.'
          ],
          rightH3: 'A regional pre-university academy',
          right: [
            'In January 2025 the DRE Huánuco reported that about 1,200 young people sat the entrance test for "Otro Level", a free pre-university academy run by the Gobierno Regional Huánuco for students of limited means who had finished secundaria. 815 were admitted for two months of preparation.',
            'Admission exams are in Spanish and run by each university or institute. We never promise a place; we can strengthen maths reasoning and add skills a technical or university course will later expect.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Finish secundaria.</strong> Every public route above requires it.',
          '<strong>Choose a direction.</strong> A three-year technical programme at an IEST, or a university course after preparation.',
          '<strong>Add programming early.</strong> A teenager who already writes Python arrives at either route with a head start.',
          '<strong>Add English.</strong> Programming documentation, error messages and most online courses are in English; learning code in English builds both at once.',
          '<strong>Keep a portfolio.</strong> Small projects, such as the inventory analysis below, show what a learner can do better than a list of courses.'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language',
      h2: 'Do you teach in Spanish or in English?',
      lede: 'In English, always. The mentors are in India, the classes are live over video, and the pace and vocabulary adapt to the learner without switching to Spanish.',
      body: [
        { kind: 'two',
          leftH3: 'English across Peru',
          left: [
            'EF\'s English Proficiency Index 2025 gives Peru 519 points, 52nd place of 123 countries, in its moderate band. EF publishes no separate score for Huánuco.',
            'We plan as if each new learner is still building their English, and adjust upwards when they are not.'
          ],
          rightH3: 'Inside a lesson',
          right: [
            'Mentors use short sentences, the same word for the same idea, and show every new word as working code. They ask the learner to say what a line will do before running it.',
            'Answers in Spanish get the English phrase back and the lesson goes on. In Python and Lua, much of the vocabulary is the code itself.'
          ] },
        { kind: 'p', mt: true, html: 'Spanish-speaking families interested in data skills may like our Spanish-language page <a class="ag-inline-link" href="/curso-de-data-science-en-ingles-peru">curso de data science en inglés</a>, which works with a different Huánuco dataset. Our <a class="ag-inline-link" href="/python-course-peru">Python course page for Peru</a> explains what a full Python course covers.' }
      ]
    },
    {
      id: 'inventory',
      eyebrow: 'A Huánuco data project',
      h2: 'Why does the regional government seem to buy everything in December?',
      lede: 'The Gobierno Regional Huánuco publishes its inventory of movable assets as open data: chairs, desks, monitors, printers and much more, each with a date. A first count suggests an extraordinary December. Looking closer separates a real year-end rush from a placeholder date.',
      body: [
        { kind: 'two',
          leftH3: 'The dataset',
          left: [
            '"INVENTARIO DE BIENES MUEBLES DEL GOBIERNO REGIONAL DE HUANUCO" is published on datosabiertos.gob.pe with an ODC-By (attribution) licence: reuse is allowed, by businesses too, so long as the regional government is credited. It was created on 26 May 2024; its description says the data comes from the final inventory report at the close of the previous financial year, and every row has a cut-off date of 31 December 2023.',
            'Our copy, inventario_gorehco.csv, has 10,291 items. The commonest are chairs (SILLA, 1,787), monitors (770) and desks (767, plus 118 more spelled Escritorio). Each item has a PECOSA number and date: the stores-issue voucher that records the item, as the publisher defines it.'
          ],
          rightH3: 'The question',
          right: [
            'In which month of the year are most items recorded? Public bodies are often said to spend their remaining budget at the end of the year, so a December peak would not be surprising. The first program simply counts PECOSA dates by month.',
            'We never print the values in soles from this file. Counting items and dates is enough for the lesson.'
          ] },
        { kind: 'code', label: 'Version 1: count by month', lang: 'Python', code: V1, note: 'It prints: <code>Items: 10291</code>, then <code>Dec 4019</code>, <code>Nov 1209</code> and <code>Oct 1060</code>.' },
        { kind: 'p', mt: true, html: 'December holds 4,019 of the 10,291 items, more than three times any other month. It is tempting to write "the regional government buys 39 per cent of its assets in December" and stop. But a month is a big bucket. A real buying rush spreads over many days and many vouchers; a date typed in when nobody knew the real one piles everything onto a single day.' },
        { kind: 'p', html: 'Version 2 looks year by year. For each year it finds the single most common date and asks what share of that year\'s items sit on it. If one date holds at least 80 per cent of a year with ten or more items, the program prints the year, how many distinct dates it has, and the most common voucher number on that date.' },
        { kind: 'code', label: 'Version 2: does one date swallow the whole year?', lang: 'Python', code: V2, note: 'It prints three lines: <code>1997 326 items, 1 dates, 100% on 19971231 [(\'TAS 1997\', 326)]</code>, <code>1998 17 items, 3 dates, 88% on 19981231 [(\'TAS 1997\', 15)]</code> and <code>2005 274 items, 16 dates, 83% on 20051230 [(\'4239-05\', 49)]</code>.' },
        { kind: 'p', mt: true, html: 'Two very different stories come out. In 1997 every one of 326 items has the same date, 31 December 1997, and the same voucher text, TAS 1997; fifteen of the 17 items from 1998 carry that same voucher text on 31 December 1998. One label on one date for hundreds of different objects looks like a bulk entry of older assets, not a day of shopping. We do not know what TAS stands for, and we do not guess.' },
        { kind: 'p', html: 'The 2005 pile is different. 228 items fall on 30 December 2005, but under 102 different voucher numbers, the most common holding only 49 items. Many separate documents on one day is what a genuine year-end rush looks like. Same shape in Version 1, opposite meaning in Version 2.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Two date piles in the Huánuco asset inventory (our count)', head: ['Date', 'Items on that date', 'Different voucher numbers', 'Reading'], rows: [
          ['31 December 1997', '326', '1', 'Likely a placeholder'],
          ['30 December 2005', '228', '102', 'Likely a real busy day']
        ] },
        { kind: 'source', html: 'Data credit: Gobierno Regional Huánuco, movable-asset inventory at 31 December 2023, reused under ODC-By. Counts and readings are ours; the regional government has not confirmed them. In the whole file, 1,317 items are dated 31 December of some year.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, with a calendar.</strong> If everyone in a class wrote "1 January" as their birthday, would that mean they were all born on the same day? What might have happened?',
          '<strong>Scratch, roughly 8 to 10.</strong> Build a list of ten birthdays where six are the same day. Write a loop that counts each day and shows the biggest pile.',
          '<strong>New Python coders, 10 to 12.</strong> Try Version 1, then alter it to count by exact date rather than by month, and print the five biggest dates.',
          '<strong>Ages 13 and over.</strong> Drop the 1997 and 1998 TAS rows and count December again. Is December still the biggest month, and by how much?',
          '<strong>Going further.</strong> Group items by the first word of their description after making it upper case, so that Escritorio and ESCRITORIO join. Which kinds of items cluster on 30 and 31 December?'
        ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'By age',
      h2: 'Which course suits a learner in Huánuco?',
      lede: 'Start with age, then interest. School years follow MINEDU\'s normative ages on 31 March.',
      body: [
        { kind: 'table', numCols: [], caption: 'Starting courses for Huánuco learners (our course ages)', head: ['Age', 'Probable grade', 'Course', 'Things they build'], rows: [
          ['Six to eight years', 'Early primaria', 'Block coding', 'Moving scenes, first games'],
          ['8 to 12', '3° de primaria to 1° de secundaria', 'Roblox Game Coding', 'Their own Roblox games'],
          ['Ready to type, about 9 to 12', 'Upper primaria', 'Python and AI for Kids', 'Guessing games and quizzes'],
          ['13 to 16', '1° to 4° de secundaria', 'Python for teens', 'Programs that read real files'],
          ['16 and over', '5° de secundaria and beyond', 'Python with PCEP and PCAP', 'Exam-ready Python skills'],
          ['18 and over', 'IEST, university or work', 'MySQL, Python or AI tools', 'Databases and reports']
        ] },
        { kind: 'source', html: 'Course ages are ours. MINEDU fixes grades by age on 31 March, so a child born after that date may be a grade lower.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Children', p: 'Game-building lessons that keep young learners keen, in small age bands, with something playable at the end of each week.' },
          { h3: 'Teenagers', p: 'A clear path from first Python to a certification exam, useful before an IEST, a university course or a first job.' },
          { h3: 'Adults', p: 'People in offices, shops and public bodies learn to keep reliable records and analyse them, at hours around their work.' }
        ] },
        { kind: 'p', mt: true, html: 'Parents of secundaria students can read <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding classes for teens in Peru</a> for more on choosing a path.' }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Olympiads',
      h2: 'Can Huánuco pupils take part in the ONEM?',
      lede: 'Yes. The olympiad starts in each school, so a pupil signs up there. We are an independent tutor with no link to MINEDU, the DRE Huánuco or the contest.',
      body: [
        { kind: 'two',
          leftH3: 'The 2026 olympiad',
          left: [
            'The ONEM\'s school stage in 2026 was held across Peru on Wednesday 8 July 2026, in three levels by secundaria year; more than 1.7 million pupils took part, according to El Peruano.',
            'We never use official ONEM problems. Our practice sets are written by us.'
          ],
          rightH3: 'A practice problem of ours',
          right: [
            'Every pupil in a class writes down a birthday. If at least one date must be shared, what is the smallest class size that guarantees it in a year of 365 days? And how many pupils guarantee that some date is shared by three? (Ours. Answers: 366, and 731, because 365 times 2 plus 1 is 731.)',
            'It is the pigeonhole idea behind spotting a suspicious pile of identical dates.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Clock',
      h2: 'What time would classes be in Huánuco?',
      lede: 'At a time your family chooses. Huánuco follows Peru\'s single time zone, and the mentor in India builds the day around the booked hour.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time to India time, sample conversions only (not a timetable)', head: ['Huánuco time', 'Time in India', 'Day in India'], rows: [
          ['06:45', '17:15', 'Same'],
          ['09:00', '19:30', 'Same'],
          ['11:15', '21:45', 'Same'],
          ['15:30', '02:00', 'Next'],
          ['22:00', '08:30', 'Next']
        ] },
        { kind: 'source', html: 'America/Lima in the tz database is UTC minus five and has kept no summer time since 1994; INACAL is the authority for Peru\'s legal hour. With India at UTC plus 5:30, Huánuco trails Indian time by 10 hours 30 minutes throughout the year.' },
        { kind: 'p', mt: true, html: 'As neither country changes its clocks, a booking keeps the same local hour all year. Families planning to borrow a computer for the class often choose the hour when it is reliably free, and keep that slot.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'How a Huánuco learner progresses',
    lede: 'Our own stages, the same for every age. They help us place a new learner and show families what has been achieved.',
    table: { caption: 'From first blocks to questioning a date (ours)', head: ['Stage', 'Often at', 'The learner can'], rows: [
      ['1. Order', 'Age 6 or 7', 'Arrange steps that work'],
      ['2. Repeat', 'Age 7 to 9', 'Use loops for repeated steps'],
      ['3. Events', 'Age 8 to 11', 'Make a game react to players'],
      ['4. Type', 'Around 9 to 12', 'Write Python on their own'],
      ['5. Count', 'Age 12 to adult', 'Group and count records in a file'],
      ['6. Suspect', 'Age 14 to adult', 'Tell a placeholder from a real pattern']
    ] },
    left: { h3: 'For parents', ps: [
      'The inventory project sits in stages five and six. It teaches a learner to be curious about a result before reporting it.',
      'Families hear about progress as projects finished and ideas the learner can put into words.'
    ] },
    right: { h3: 'For learners', ps: [
      'A date can be a fact or a filler. Count the documents behind it.',
      'When a pile looks too neat, ask who typed it.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Huánuco learners',
    lede: 'Arranged by age. Each runs live in English with a regular mentor, as a group of fifteen to twenty or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 15', courses: [
        { code: 'HCO / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Block coding for kids', blurb: 'The first step, with blocks and characters.' },
        { code: 'HCO / KIDS / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Children plan, draw and program small games.' },
        { code: 'HCO / KIDS / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Fast, confident arithmetic for primaria.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'HCO / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Complete Python for secundaria students.' },
        { code: 'HCO / TEEN / 02', slug: 'mysql-mastery-for-teens', title: 'SQL for teens', blurb: 'Databases and queries from scratch.' },
        { code: 'HCO / TEEN / 03', slug: 'complete-high-school-mathematics-mastery', title: 'Secundaria maths', blurb: 'Algebra to calculus foundations, taught in English.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 18 and over', courses: [
        { code: 'HCO / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'A complete Python path for adults.' },
        { code: 'HCO / ADULT / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'Tables, charts and AI help without writing code first.' },
        { code: 'HCO / ADULT / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Version control for students and new developers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Format',
    h2: 'How live online classes work in the Huánuco region',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning in Huánuco', l: 'Evening for mentors in India, and a fresh start for learners.' },
      { time: 'Later slots', l: 'Afternoons and evenings can be arranged too.' },
      { time: 'One to one', l: 'Private lessons timed around a borrowed or shared computer.' }
    ],
    cells: [
      { h3: 'A familiar mentor', p: 'The same teacher, week after week.' },
      { h3: 'Patient English', p: 'Simple sentences, shown as code.' },
      { h3: 'Learner in control', p: 'The student types and runs everything.' },
      { h3: 'Matched by age', p: 'No mixing of children and adults.' },
      { h3: 'Checked set-up', p: 'The free class tests device and sound.' },
      { h3: 'Two ways to learn', p: 'A group of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects finished by our students',
  projectsLede: 'Learners who keep going build games, tools and sites other people use. Several are shown below; the <a class="ag-inline-link" href="/student-labs">student labs</a> list more.',
  reviewsLede: 'What parents and learners posted on Google, quoted as written.',

  fees: {
    h2: 'Fees for learners in Huánuco',
    lede: 'Prices are monthly and set in US dollars. Payment is by card in dollars, and your bank converts it to soles at its own rate on the day, so the statement may differ slightly from the figure shown.',
    free: ['A free first class', 'Device and connection check', 'No card needed'],
    group: ['Fifteen to twenty learners near in age', 'A regular mentor', 'Two live classes each week', 'Monthly, cancel when you like'],
    one: ['One mentor, one learner', 'A plan built round the learner', 'Days and hours you set']
  },

  faq: {
    eyebrow: 'Huánuco families ask',
    h2: 'Coding and AI classes in Huánuco: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught in English only. Mentors speak slowly and clearly, adapt to each learner\'s pace and accent, and respond to Spanish answers with the English words.' },
      { q: 'Can my child join from Tingo María, Ambo or the highlands?', a: 'Yes. Classes are online, so Tingo María, Ambo, Llata, La Unión or Huánuco city all join the same way, given a connection and a suitable device.' },
      { q: 'We do not have a computer. Can we still start?', a: 'A young child can begin block coding on a tablet. From about nine a laptop or desktop is needed. Many families borrow one for the class hour, and one-to-one lessons can be timed around it.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead, so 09:00 in Huánuco is 19:30 for the mentor.' },
      { q: 'Do schools in Huánuco teach programming?', a: 'Not as a subject. The national curriculum spreads digital skills across every area, and secundaria\'s regular timetable has no programming hours.' },
      { q: 'Will this help with an IEST or university?', a: 'It adds programming, maths reasoning and English, which help on any technical path. Admission is decided by each institute or university, in Spanish, and we never promise a place.' },
      { q: 'What is the PCEP?', a: 'An entry-level Python certification exam. MINEDU\'s Fábrica de Programadores lets its graduates take it. Our Python with PCEP and PCAP course prepares teenagers and adults for it independently; we are not linked to MINEDU.' },
      { q: 'Can adults in Huánuco take classes?', a: 'Yes, in adult groups or one to one. Many begin with Python or MySQL to handle records at work, or with AI tools.' },
      { q: 'How are fees paid?', a: 'Monthly, by card, in US dollars; your bank converts to soles. Visitors from India see rupees. The first class is free and needs no card.' },
      { q: 'Is there a certificate?', a: 'Courses that include one end with a Modern Age Coders certificate of completion. It is our own record, not a Peruvian qualification, and is not issued or endorsed by MINEDU, the DRE Huánuco or any school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'On this site',
    h2: 'Further pages for Huánuco',
    lede: 'Next reading for families and learners in the region.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The national guide, with all Peru pages.' },
      { href: '/curso-de-data-science-en-ingles-peru', label: 'Data science en inglés (Spanish page)', p: 'Data skills explained in Spanish, taught in English.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'AI builds children can understand.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Learning to code later in life.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age rules for each AI provider.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our lessons, explained.' }
    ]
  },

  start: {
    h2: 'Take a free class from anywhere in Huánuco',
    lede: 'The mentor begins with a small puzzle and a first program, and checks the device, sound and connection along the way. Afterwards you get a suggested course and group, based on how the learner reasoned and how comfortable they were with the English.',
    readFirst: 'Prefer to read first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a> for a full lesson, or the <a class="ag-inline-link" href="/courses">course list</a> for every syllabus.',
    note: 'All teaching is live and in English, from mentors in India. WhatsApp is the fastest way to reach us; please write in English.',
    formNote: 'Free, no card, no commitment afterwards.'
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
    bottomRight: 'Bought on New Year\'s Eve, or just written down then?'
  },

  personalityCss: `
.ag-root.ag-cahr .ag-hero h1 { letter-spacing: -0.005em; max-width: 21ch; }
.ag-root.ag-cahr .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-cahr .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-cahr .ag-table caption { text-align: left; letter-spacing: 0.01em; }
.ag-root.ag-cahr .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadros 1 and 3), Perfil Sociodemográfico 2017 (Cuadro 1.9), Directorio de Centros Poblados 2017 (dpto10); INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13; MINEDU Censo Educativo cuadros 5.16, 5.17, 5.22, 5.23, 5.27); DRE Huánuco notes of 6 January and 8 April 2025; Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, ONEM 2026; EF EPI 2025; tz database. Data: Gobierno Regional Huánuco movable-asset inventory, ODC-By.',
    localProject: 'Why does the regional government seem to buy everything in December? An original Python project on the Gobierno Regional Huánuco movable-asset inventory (ODC-By, 10,291 items at 31 December 2023): Version 1 counts PECOSA dates by month (December 4,019); Version 2 finds years where one date holds 80 per cent or more of items: 1997 (326 items, one date, one voucher text TAS 1997) looks like a placeholder, while 30 December 2005 (228 items under 102 vouchers) looks like a real year-end rush. Lesson family: date heaping.',
    requiredMentions: ['inventario_gorehco.csv', 'Dec 4019', "1997 326 items, 1 dates, 100% on 19971231 [('TAS 1997', 326)]", '102 different voucher numbers', '807,377', 'Otro Level', '1,060 places', 'Bought on New Year\'s Eve, or just written down then?', 'Homes owning at least one computer'],
    sources: [
      { claim: 'Department and province populations of Huánuco, and censada counts by age, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Huánuco city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Tingo María, Aucayacu, Ambo, Llata, La Unión and Panao populated-centre figures, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto10.xlsx' },
      { claim: 'Computer, internet and internet-use shares for Huánuco and Peru; enrolment.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'Ten public IEST in Huánuco offering 1,060 places for 2025-I, three years, no monthly fees.', url: 'https://www.gob.pe/institucion/regionhuanuco-dre/noticias/1142419-institutos-tecnologicos-publicos-de-huanuco-ofertan-mas-de-mil-vacantes-para-este-2025' },
      { claim: 'Otro Level pre-university academy: about 1,200 applicants, 815 admitted, January 2025.', url: 'https://www.gob.pe/institucion/regionhuanuco-dre/noticias/1086973-todo-un-exito-mas-de-mil-jovenes-rindieron-evaluacion-de-ingreso-a-la-academia-preuniversitaria-otro-level-del-gor' },
      { claim: 'Gobierno Regional Huánuco movable-asset inventory, ODC-By licence and field definitions.', url: 'https://www.datosabiertos.gob.pe/dataset/inventario-de-bienes-muebles-del-gobierno-regional-de-huanuco' },
      { claim: 'Fábrica de Programadores, Python and PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'Peru time UTC-5 with no summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Reusing the UNHEVAL enrolment file already used by curso-de-data-science-en-ingles-peru: refused; a different dataset is used.',
      'What TAS stands for in the 1997 voucher text: unknown, not guessed.',
      'Asset values in soles from the inventory: not printed.',
      'A summed Huánuco city figure built from districts or populated centres: never summed.',
      'Health-related DRE notes (hospital school service): not used.',
      'Any link with the Gobierno Regional Huánuco, the DRE Huánuco, MINEDU, the ONEM or any IEST: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
