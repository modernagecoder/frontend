// SHIP: market (region) | Moquegua: strong results, laptops in schools, no programming subject; live classes in English | row percentages against column percentages: P(A given B) is not P(B given A), by school and year of study
'use strict';
// Online coding and AI classes, Moquegua region, Peru (ag- region page, Peru cluster row PE185; alloc: regions, camr, #0E4B00).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: flexible hours; USD only via
// data-price anchors.
// Spine: Moquegua is the opposite case to most region pages. Its pupils are near the top of Peru in the 2025 census
// evaluation, 45.3 per cent of homes own a computer, 70.5 per cent have internet, and the regional TIC 2 project is putting
// laptops and tablets into 180 schools. What is missing is programming as a subject, and spoken English. The page is about
// stretching able learners, and the project on the Universidad Nacional de Moquegua student register teaches the difference
// between "what share of a school is in its first year" and "what share of first-years are in that school".
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-moquegua-region-peru/):
//  - INEI, Censos Nacionales 2025, Cuadro N° 1: MOQUEGUA 194828; provinces MARISCAL NIETO 98727, GENERAL SÁNCHEZ CERRO 15776,
//    ILO 80325; districts ILO 69376, MOQUEGUA 49521, SAN ANTONIO 28389, SAMEGUA 10440, TORATA 6376, OMATE 3412, ICHUÑA 3312.
//    Cuadro N° 3: MOQUEGUA censada 179214; 6 a 11 15609; 12 a 17 17039; 60 y más 30542; PERÚ censada 32706028, 60 y más
//    4839138. Never summed.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Moquegua city 69,882 (2017). Lib1541 dpto18.xlsx (centros poblados 2017): ILO
//    66 118 at 33 m; MOQUEGUA 37 518 at 1 428 m; SAN ANTONIO 24 414 at 1 380 m; SAMEGUA 7 950; OMATE 1 042 at 2 169 m.
//  - INEI Compendio Estadístico Perú 2026, tomo 1: 11.5 "Moquegua 37,2 38,9 37,9 37,9 38,5 38,0 47,2 48,1 49,4 44,9 45,3"; 11.6
//    "Moquegua 23,6 28,9 27,7 30,7 38,8 50,4 58,6 63,4 66,9 68,0 70,5"; 11.13 "Moquegua 44,6 50,0 53,2 57,3 62,0 70,7 78,2 80,7
//    84,7 87,4 87,6"; Total 2025 33,9 / 56,8 / 81,1. 5.53 (4° primaria 2025): Moquegua Matemática 52,0 Lectura 48,8; Tacna 54,6 /
//    49,0; Total 30,0 / 32,7. 5.54 (2° secundaria 2025): Moquegua 24,6 / 31,1; Tacna 27,7 / 30,8; Arequipa 22,0 / 29,0; Total
//    12,7 / 18,5. 5.16 primaria pública 13,9 (2015) 14,7 (2025); 5.22 secundaria pública 11,4 (2015) 13,1 (2025); 5.75
//    docentes 4 145 (2025).
//  - EF EPI 2025: "Peru EF EPI score : 519"; Moquegua not among EF's sixteen scored regions.
//  - GORE Moquegua, gob.pe nota 1464706 (27 de octubre de 2026): "entrega de 174 laptops" to UGEL General Sánchez Cerro,
//    "proyecto TIC 2"; "más de 30 mil equipos informáticos entre laptop y tablet, a favor de 180 instituciones educativas";
//    "un total de 10,413 unidades, de las cuales ya se cumplió con la entrega de 8005 unidades, faltando un total de 2,408";
//    "12 060 laptops a estudiantes del nivel secundaria, 2354 laptops a docentes y 5272 tablets". Nota 1459286 (18 de octubre de
//    2026): Beca Esperanza Joven, "alrededor de 1,750 oportunidades de acceso a educación superior" (2023 to 2026). Nota
//    1447834 (21 de setiembre de 2026): "Más de 140 estudiantes del Instituto de Educación Superior Tecnológico Público Los
//    Andes, en Carumas". Political names and money amounts not printed.
//  - Ley 28044, Edades normativas, CNEB competency 28 and JER hours, MINEDU 2026 opening, Fábrica de Programadores, ONEM 2026,
//    OPI (FACTS 5, 6, 13, 14, 17, 32, 33, 39, 45, 99, 105, 111). Time: tzdata.
//  - Data: Universidad Nacional de Moquegua (UNAM), "Población estudiantil por sexo y escuela profesional - UNAM 2026",
//    datosabiertos.gob.pe, "Open Data Commons Attribution License" (ODC-By), released 2026-10-31, modified 2026-11-02. File
//    DATASET_POBLACIÓN_ESTUDIANTIL_POR_SEXO_Y_ESCUELA_PROFESIONAL_UNAM_2026.csv (saved as poblacion-unam-2026.csv), 35,510
//    rows, Latin-1, semicolons, periods 2020-1 to 2026-2. Period 2026-2: 3,468 rows, 3,468 distinct student codes (codes never
//    printed); SEDE_FILIAL MOQUEGUA 2,021, ILO 1,447; all 402 Ingeniería de Sistemas e Informática rows at Ilo.
// Our own calculations (scratchpad pe/r5/camr/w1.py, w2.py, python3 -I). We use only ESCUELA_PROFESIONAL, PERIODO and
// CICLO_RELATIVO (first year = cycles 1 and 2, our grouping); the sex column is never read.
//  w1 prints: First-years in the school: 92 | later cycles: 310 / First-years as a share of the school: 22.9 % / The school as a
//    share of all first-years: 11.1 %
//  w2 prints: Students: 3468 | first-years: 831, then eleven lines from MEDICINA 18.6 4.1 to INGENIERÍA PESQUERA 35.6 4.5
//    (see the table on the page). Our shares: 60 and over 17.0 per cent of those enumerated in Moquegua, 14.8 in Peru.
// Lesson family: row percentages against column percentages in a two-way table. "22.9 per cent of the school is in first
// year" and "11.1 per cent of first-years are in the school" divide the same 92 by different totals.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'from collections import Counter',
  '',
  'table = Counter()',
  'with open("poblacion-unam-2026.csv", newline="", encoding="latin-1") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        if row["PERIODO"] == "2026-2":',
  '            stage = "first year" if int(row["CICLO_RELATIVO"]) <= 2 else "later"',
  '            table[(row["ESCUELA_PROFESIONAL"], stage)] += 1',
  '',
  'school = "INGENIERÍA DE SISTEMAS E INFORMÁTICA"',
  'new, rest = table[(school, "first year")], table[(school, "later")]',
  'all_new = sum(n for (s, st), n in table.items() if st == "first year")',
  'print("First-years in the school:", new, "| later cycles:", rest)',
  'print("First-years as a share of the school:", round(100 * new / (new + rest), 1), "%")',
  'print("The school as a share of all first-years:", round(100 * new / all_new, 1), "%")'
].join('\n');

const V2 = [
  'import csv',
  'from collections import Counter',
  '',
  'table = Counter()',
  'with open("poblacion-unam-2026.csv", newline="", encoding="latin-1") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        if row["PERIODO"] == "2026-2":',
  '            stage = "first year" if int(row["CICLO_RELATIVO"]) <= 2 else "later"',
  '            table[(row["ESCUELA_PROFESIONAL"], stage)] += 1',
  '',
  'schools = sorted({s for s, st in table})',
  'all_new = sum(table[(s, "first year")] for s in schools)',
  'print("Students:", sum(table.values()), "| first-years:", all_new)',
  '',
  'def new_share(school):',
  '    size = table[(school, "first year")] + table[(school, "later")]',
  '    return 100 * table[(school, "first year")] / size',
  '',
  'for school in sorted(schools, key=new_share):',
  '    of_school = new_share(school)',
  '    of_new = 100 * table[(school, "first year")] / all_new',
  '    print(f"{school[:30]:30} {of_school:5.1f} {of_new:5.1f}")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Moquegua region' },
  slug: 'online-coding-and-ai-classes-moquegua-region-peru',
  code: 'camr',
  accent: '#0E4B00',
  accentRationale: 'Moquegua region: a deep vineyard-leaf green #0E4B00, for the valley around the capital, allocated to this row; contrast 9.78 on #FBF8F2, 9.20 on #F5F1E8 and 8.42 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Moquegua region, Peru',
  title: 'Moquegua Region, Peru: Online Coding and AI Classes in English',
  description: 'Live online coding and AI classes in English for Moquegua and Ilo: stretching strong pupils, school laptops, census facts and a project on university enrolment data.',
  ogDescription: 'Coding and AI taught live online in English for learners in Moquegua, Ilo, Samegua, Torata, Omate and Ichuña: the region\'s high 2025 results, the TIC 2 school laptops, why programming is still missing from the timetable, and a Python project on the Universidad Nacional de Moquegua student register.',
  twitterDescription: 'Moquegua and Ilo, live coding classes in English: strong pupils, school laptops, a university data project.',
  pageName: 'Online Coding and AI Classes in the Moquegua Region',
  webPageDescription: 'A guide for families and learners in the Moquegua region of Peru to live online coding and AI classes taught in English, built from INEI census and household tables, MINEDU evaluation results, Gobierno Regional de Moquegua notes, and an original Python project on the Universidad Nacional de Moquegua student population dataset (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Moquegua region of Peru: block and Python coding for children, Python, algorithms, web and olympiad maths for secundaria pupils, Python, Java, data and statistics for university students and adults, in a class of fifteen to twenty or one to one, at the hours the learner chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Moquegua region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#results', label: 'Results' },
    { href: '#laptops', label: 'School laptops' },
    { href: '#places', label: 'Moquegua and Ilo' },
    { href: '#unam', label: 'University data' },
    { href: '#schedule', label: 'Schedule' }
  ],
  eyebrow: 'Moquegua region &middot; Live online, taught in English &middot; For learners ready to stretch',
  h1: 'Online coding and AI classes in the Moquegua region',
  lede: 'Moquegua is one of Peru\'s smallest regions by population and one of its strongest in school results. Many homes already own a computer, and the regional government is placing tens of thousands of laptops and tablets in schools. What the school week still lacks is programming, and the chance to use English for real work. That is where our live online classes, taught in English, fit. This page sets out the evidence, explains who in Moquegua and Ilo gains most, and uses the regional university\'s own student data to teach a trap that catches journalists and politicians alike.',
  secondaryCta: { href: '#unam', label: 'Open the university-data project' },
  wa: 'Hello Modern Age Coders, we are in the Moquegua region of Peru. We would like to know about your live coding and AI classes in English for a strong student. Could we book a free class?',
  heroNote: 'Live online teaching since 2020 &middot; 10,000+ learners in many countries &middot; mentors who push able learners further',
  spec: [
    ['Strongest fit', 'Able secundaria pupils, university students, adults'],
    ['Younger children', 'From six, in blocks first'],
    ['Teaching language', 'English, clear and steady'],
    ['Devices', 'Often already at home or school'],
    ['Hours', 'Any day, chosen by you'],
    ['Begin', 'A free class with a level check']
  ],
  capsuleQ: 'What we offer',
  capsule: 'In Moquegua, Ilo, Samegua, Torata, Omate and every other part of the region, Modern Age Coders teaches coding and AI in live online classes conducted in English. They suit capable secundaria pupils who want more than school offers, university students, and adults with some English: Python, algorithms, web development, data and how AI systems work. Children can begin from six with block coding before moving to typed code. Learners pick a class of fifteen to twenty or private tuition and set their own hours, with a free first session.',

  picks: {
    eyebrow: 'First courses',
    h2: 'Three courses suited to Moquegua learners',
    lede: 'Chosen to stretch pupils whose school results are already strong, with one route for adults.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'MOQ / 01', title: 'Python and AI for Kids', note: 'For confident readers of about nine to twelve. Real typed Python early, with small AI experiments suited to their age and no adult accounts.' },
      { course: 'competitive-programming-for-teens-course', code: 'MOQ / 02', title: 'Competitive programming for teens', note: 'For secundaria pupils who enjoy maths contests. Algorithms, efficiency and contest-style problems, a natural next step after school maths.' },
      { course: 'data-science-complete-masterclass-college', code: 'MOQ / 03', title: 'Data Science Masterclass', note: 'For university students and professionals in mining, engineering, public administration or business: Python, statistics and clear charts from real tables.' }
    ]
  },

  sections: [
    {
      id: 'results',
      eyebrow: 'Results',
      h2: 'How well do Moquegua pupils do at school?',
      lede: 'Among the strongest in Peru. MINEDU\'s 2025 census evaluation puts Moquegua at or near the top in both maths and reading.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Pupils at the satisfactory level in 2025, Moquegua and Peru (per cent)', head: ['Year group', 'Moquegua maths', 'Peru maths', 'Moquegua reading', 'Peru reading'], rows: [
          ['Primaria, fourth grade', '52.0', '30.0', '48.8', '32.7'],
          ['Secundaria, second year', '24.6', '12.7', '31.1', '18.5']
        ] },
        { kind: 'source', html: 'MINEDU, Evaluación Censal de Estudiantes 2025, from INEI\'s Compendio Estadístico 2026, first volume, tables 5.53 (primaria) and 5.54 (secundaria).' },
        { kind: 'two', mt: true,
          leftH3: 'Where Moquegua stands',
          left: [
            'In fourth grade, 52.0 per cent of Moquegua pupils reached the expected maths level in 2025; only Tacna, at 54.6, was higher. In reading, 48.8 per cent did, just behind Tacna\'s 49.0.',
            'In second year of secundaria, Moquegua\'s 31.1 per cent in reading was the highest figure for any department in the table, ahead of Tacna (30.8) and Arequipa (29.0). Its 24.6 per cent in maths was second to Tacna\'s 27.7, and close to double the national 12.7.'
          ],
          rightH3: 'What that means for us',
          right: [
            'Many Moquegua pupils are ready for more than the school week offers. They can handle algorithms, real programming projects and contest-style problems earlier than the average learner.',
            'So our advice here differs from most regions. Rather than starting gently, we often place Moquegua teenagers straight into typed Python, then algorithms or web development, and offer olympiad-style maths alongside for those who enjoy it.'
          ] },
        { kind: 'p', mt: true, html: 'Even here, three quarters of second-year secundaria pupils did not reach the satisfactory level in maths in 2025. A strong regional figure says nothing about any single child, which is why the free class always begins with a short level check. Pupils keen on contests can read about <a class="ag-inline-link" href="/math-olympiad-coaching-peru">maths olympiad coaching in Peru</a>.' }
      ]
    },
    {
      id: 'laptops',
      tint: 'tint',
      eyebrow: 'School laptops',
      h2: 'Do Moquegua learners have the computers that coding needs?',
      lede: 'More than most of Peru. Home ownership is above the national level, and the regional TIC 2 project is equipping schools at scale.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Moquegua households and internet use against Peru (per cent)', head: ['Indicator', 'Moquegua 2015', 'Moquegua 2023', 'Moquegua 2025', 'Peru 2025'], rows: [
          ['Homes owning a computer', '37.2', '49.4', '45.3', '33.9'],
          ['Homes with an internet connection', '23.6', '66.9', '70.5', '56.8'],
          ['Internet users, six years and up', '44.6', '84.7', '87.6', '81.1']
        ] },
        { kind: 'source', html: 'Figures from ENAHO, INEI\'s household survey, as printed in tables 11.5, 11.6 and 11.13 of volume one of the 2026 Compendio Estadístico. Decimal commas shown as points.' },
        { kind: 'two', mt: true,
          leftH3: 'The TIC 2 project',
          left: [
            'On 27 October 2026 the Gobierno Regional de Moquegua reported delivering 174 laptops to UGEL General Sánchez Cerro under its TIC 2 project, which it describes as "más de 30 mil equipos informáticos entre laptop y tablet, a favor de 180 instituciones educativas".',
            'The same note lists the parts: 10,413 laptops for primaria, of which 8,005 had been delivered and 2,408 were still to come; 12,060 laptops for secundaria pupils; 2,354 for teachers; and 5,272 tablets for primaria pupils.'
          ],
          rightH3: 'A device is not a curriculum',
          right: [
            'A laptop on every desk makes typed programming possible. It does not, on its own, teach anyone to program. The national timetable still has no programming hours, so the machine is often used for documents, research and presentations.',
            'For a Moquegua family, that means the hardware question may already be solved at school, and sometimes at home: 45.3 per cent of households owned a computer in 2025, well above Peru\'s 33.9. The live mentor is the missing part.'
          ] },
        { kind: 'p', mt: true, html: 'Check with the school before using a school laptop at home; some are lent for home use, others stay in class. Our lessons need a working browser, a microphone and a steady connection, which 70.5 per cent of Moquegua households had at home in 2025.' }
      ]
    },
    {
      id: 'places',
      eyebrow: 'Moquegua and Ilo',
      h2: 'How many people live in the Moquegua region, and where?',
      lede: 'The 2025 census counted 194,828 people in the department, divided mainly between the inland capital and the port of Ilo.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Moquegua department and its provinces at the 2025 census', head: ['Area', 'Population'], rows: [
          ['Mariscal Nieto (Moquegua city)', '98,727'],
          ['Ilo', '80,325'],
          ['General Sánchez Cerro (Omate)', '15,776'],
          ['Department of Moquegua', '194,828']
        ] },
        { kind: 'source', html: 'INEI, Censos Nacionales 2025, Cuadro N° 1, population enumerated and omitted on 15 September 2025. The department line is INEI\'s own figure, not one we added up.' },
        { kind: 'two', mt: true,
          leftH3: 'Districts and towns',
          left: [
            'In 2025 the district of Ilo had 69,376 residents, Moquegua district 49,521 and neighbouring San Antonio 28,389, followed by Samegua 10,440 and Torata 6,376. In the highland province, Omate had 3,412 and Ichuña 3,312.',
            'For 2017, INEI\'s table of department capitals gives Moquegua city 69,882 people. Its list of centros poblados that year puts Ilo at 66,118 and 33 metres above sea level, Moquegua town at 37,518 and 1,428 metres, and Omate at 1,042 and 2,169 metres.'
          ],
          rightH3: 'An older population',
          right: [
            'Among the 179,214 people enumerated in the department in 2025, 15,609 were aged 6 to 11 and 17,039 were 12 to 17; 30,542 were 60 or older.',
            'Our calculation from that table: people aged 60 and over make up 17.0 per cent of those enumerated in Moquegua, against 14.8 per cent in Peru as a whole. That makes adult and late-career learners a real audience here, not an afterthought.'
          ] },
        { kind: 'p', mt: true, html: 'Public school enrolment has been steady: public primaria went from 13.9 thousand pupils in 2015 to 14.7 thousand in 2025, and public secundaria from 11.4 thousand to 13.1 thousand. The department had 4,145 teachers in 2025. The town and district figures above come from different years and cover different areas, so we do not compare them.' }
      ]
    },
    {
      id: 'unam',
      tint: 'tint',
      eyebrow: 'A Moquegua data project',
      h2: 'How much of each Moquegua university school is in its first year?',
      lede: 'The Universidad Nacional de Moquegua publishes a register of its students by school and term, with each student\'s relative cycle. One count from it turns into two percentages that sound alike and mean very different things. Telling them apart is one of the most useful habits in statistics.',
      body: [
        { kind: 'two',
          leftH3: 'The register',
          left: [
            'UNAM publishes "Población estudiantil por sexo y escuela profesional - UNAM 2026" on the national open data portal with an Open Data Commons Attribution (ODC-By) licence. It was released on 31 October 2026 and modified on 2 November 2026.',
            'Our copy, poblacion-unam-2026.csv, has 35,510 rows covering the terms 2020-1 to 2026-2. For term 2026-2 there are 3,468 rows, each with a different student code, 2,021 at the Moquegua campus and 1,447 at Ilo. The codes are identifiers, and we never print them. We use three columns only: school, term and CICLO_RELATIVO, the cycle a student has reached, and we count cycles 1 and 2 as first year.'
          ],
          rightH3: 'Two questions that sound alike',
          right: [
            'Question A: of the students in Ingeniería de Sistemas e Informática, what share are in their first year? Question B: of all first-year students at the university, what share are in Sistemas e Informática?',
            'Both start from the same number, the first-years in that school. A divides it by the size of the school, B by the number of first-years at the university. Mixing them up is how a report can make a school look like the place newcomers flock to, or the place they avoid, when neither is true.'
          ] },
        { kind: 'code', label: 'Version 1: one school, both questions', lang: 'Python', code: V1, note: 'It prints: <code>First-years in the school: 92 | later cycles: 310</code>, <code>First-years as a share of the school: 22.9 %</code> and <code>The school as a share of all first-years: 11.1 %</code>.' },
        { kind: 'p', mt: true, html: 'Ninety-two of the 402 students in Sistemas e Informática are in their first two cycles: 22.9 per cent of the school. Those same 92 are 11.1 per cent of the university\'s 831 first-years. Neither number is wrong; they answer different questions. In a two-way table, the first is a row percentage, dividing across the school\'s row, and the second a column percentage, dividing down the first-year column. Version 2 builds both for every school and sorts by the first.' },
        { kind: 'code', label: 'Version 2: the whole two-way table', lang: 'Python', code: V2, note: 'It prints <code>Students: 3468 | first-years: 831</code>, then one line per school, from <code>MEDICINA  18.6   4.1</code> to <code>INGENIERÍA PESQUERA  35.6   4.5</code>; all eleven lines are in the table below.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'UNAM, term 2026-2: first-years as a share of each school, and each school as a share of all first-years (our calculation)', head: ['School (escuela profesional)', 'First-years in the school, %', 'Share of all first-years, %'], rows: [
          ['Medicina', '18.6', '4.1'],
          ['Gestión Pública y Desarrollo Social', '19.7', '12.0'],
          ['Ingeniería Ambiental', '22.7', '10.0'],
          ['Ingeniería Civil', '22.7', '11.4'],
          ['Ingeniería de Minas', '22.9', '11.0'],
          ['Ingeniería de Sistemas e Informática', '22.9', '11.1'],
          ['Administración', '22.9', '10.0'],
          ['Contabilidad', '29.4', '8.1'],
          ['Ingeniería Agroindustrial', '29.8', '9.4'],
          ['Derecho', '29.8', '8.5'],
          ['Ingeniería Pesquera', '35.6', '4.5']
        ] },
        { kind: 'source', html: 'Data: Universidad Nacional de Moquegua, Población estudiantil por sexo y escuela profesional, UNAM 2026, ODC-By, term 2026-2; only the school, term and cycle columns are used. "First year" means relative cycles 1 and 2, our grouping. Shares are ours. The second column adds to about 100 across schools, the first does not and should not.' },
        { kind: 'p', mt: true, html: 'Read the columns separately. Down the first, Ingeniería Pesquera has the largest first-year share, more than a third of its students, yet it holds only 4.5 per cent of the university\'s first-years, because it is a small school. Gestión Pública y Desarrollo Social is the opposite: under a fifth of its students are first-years, but it is so large that it still holds the biggest slice of all first-years, 12.0 per cent. A school can rank high on one measure and low on the other; that is the whole point.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, with crayons.</strong> Ten crayons: three red, all in one box of four. What part of the box is red? What part of the red crayons are in the box?',
          '<strong>Blocks, around 8 to 10.</strong> Make a two-by-two grid of counts and ask a sprite to say one row share and one column share.',
          '<strong>First Python, around 10 to 12.</strong> Edit Version 1 to look at MEDICINA. Predict which of the two percentages will be larger.',
          '<strong>Ages 13 and over.</strong> Add a third column to Version 2: each school\'s share of all students in cycles 9 and 10. Which school is the largest slice of the final years?',
          '<strong>Going further.</strong> Repeat Version 2 for term 2020-1 and compare. Has the first-year share of Sistemas e Informática changed since 2020?'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'English',
      h2: 'Is English a barrier for Moquegua learners?',
      lede: 'Less than in many regions, judging by reading results, but it is still a new language of instruction for most. We teach only in English, live and online, and never run Spanish-language groups.',
      body: [
        { kind: 'two',
          leftH3: 'What we can say',
          left: [
            'EF\'s English Proficiency Index 2025 gives Peru 519, in its moderate band. EF scores sixteen Peruvian regions separately, and Moquegua is not among them, so we cannot quote a Moquegua English level.',
            'Secundaria pupils on the regular school day have three hours of Inglés a week. Strong reading in Spanish helps: a pupil who reads carefully in one language brings that method to the next.'
          ],
          rightH3: 'Who gains most',
          right: [
            'Able pupils in 3° to 5° de secundaria aiming at engineering or science. University students in systems, mining, environmental and civil engineering. Professionals in mining, port and public services who read manuals in English and want programming or data skills. Retired or late-career adults with time to learn properly.',
            'Children under ten do well too, starting with blocks and moving to Python once reading is fluent.'
          ] },
        { kind: 'p', mt: true, html: 'Parents who prefer to read in Spanish will find our guide to <a class="ag-inline-link" href="/clases-de-programacion-en-ingles-peru">clases de programación en inglés</a> useful. For a learner set on university admission, our explainer on <a class="ag-inline-link" href="/peru-university-admission-exams-explained">Peru\'s university admission exams</a> describes how the main exams work.' }
      ]
    },
    {
      id: 'beyond',
      tint: 'tint',
      eyebrow: 'Beyond school',
      h2: 'Does Moquegua teach programming in school or after it?',
      lede: 'Not in school as a subject. After school, the region invests in higher and technical education, though the sources we read mention no programming course for pupils.',
      body: [
        { kind: 'two',
          leftH3: 'The national school rules',
          left: [
            'Six years of primaria and five of secundaria, set by the General Education Law, with grades fixed by age on 31 March: a pupil who is twelve on that date starts secundaria.',
            'Competency 28 of the national curriculum, on virtual environments, is shared across every area. The regular secundaria week has 35 hours, and none of them is labelled programming. MINEDU\'s Python pilot, Fábrica de Programadores, began in July 2025 for 1,000 pupils in Lima Norte, not in Moquegua.'
          ],
          rightH3: 'What the region funds',
          right: [
            'The regional Beca Esperanza Joven scholarship, recognised internationally in October 2026, has generated around 1,750 places in higher education between 2023 and 2026, according to the regional government, at institutions in Moquegua, Arequipa and Lima.',
            'In September 2026 the region equipped the public technological institute Los Andes in Carumas, where more than 140 students follow farming and civil-construction programmes, with tools from concrete mixers to a survey drone and a desktop computer.'
          ] },
        { kind: 'p', mt: true, html: 'Moquegua pupils can enter national contests on the same terms as everyone else. ONEM, the maths olympiad, holds its first round in each school; in 2026 that was on 8 July, and over 1.7 million secundaria pupils were called to take part. UTEC\'s computing olympiads, OPI included, are open to every secundaria pupil without charge. We are not linked with MINEDU, UTEC, UNAM, the regional government or any contest, and all our practice problems are our own.' }
      ]
    },
    {
      id: 'routes',
      eyebrow: 'Choosing',
      h2: 'Which course suits a Moquegua learner most?',
      lede: 'For able pupils, choose by ambition as much as by age. The table gives our own suggestions.',
      body: [
        { kind: 'table', numCols: [], caption: 'Suggested first courses in Moquegua (ours)', head: ['Learner', 'Aim', 'Start with', 'Format'], rows: [
          ['Child, 6 to 8', 'Enjoy making things', 'Block coding', 'Private'],
          ['Child, 9 to 12', 'Real code early', 'Python and AI for kids', 'Class'],
          ['Secundaria, contest-minded', 'Olympiads', 'Competitive programming', 'Class'],
          ['Secundaria, builder', 'Apps and sites', 'Python, then web development', 'Class'],
          ['University or institute student', 'Career skills', 'Data science or Java', 'Class or private'],
          ['Professional or retired adult', 'Work or interest', 'Python, then data', 'Private, often']
        ] },
        { kind: 'source', html: 'Our suggestions only. MINEDU groups pupils by age on 31 March, so a single grade can include children born almost a year apart.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Able children', p: 'Typed Python from about nine for confident readers, with puzzles that reward careful thought over speed.' },
          { h3: 'Able teenagers', p: 'Algorithms, complexity and contest problems, or full web projects, at a pace set by what the learner can already do.' },
          { h3: 'Adults', p: 'Python for spreadsheets, reports and monitoring data at work, and statistics that make sense of it.' }
        ] },
        { kind: 'p', mt: true, html: 'Teenagers may also like <a class="ag-inline-link" href="/coding-classes-for-teens-peru">our page on coding for teenagers in Peru</a>, and university students <a class="ag-inline-link" href="/java-course-peru">the Java course for Peru</a>. Every Peru guide is collected on <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'schedule',
      tint: 'tint',
      eyebrow: 'Schedule',
      h2: 'What hours can a Moquegua or Ilo learner choose?',
      lede: 'Any hours you like. The whole region keeps Peru time, and the mentor in India fits lessons around your day.',
      body: [
        { kind: 'table', numCols: [], caption: 'Moquegua time converted to India time (examples, not a timetable)', head: ['Moquegua and Ilo', 'India', 'For the mentor'], rows: [
          ['06:00', '16:30', 'Afternoon'],
          ['09:00', '19:30', 'Evening'],
          ['11:30', '22:00', 'Late evening'],
          ['14:30', '01:00', 'Next day, after midnight'],
          ['19:00', '05:30', 'Next day, early morning'],
          ['22:00', '08:30', 'Next day, morning']
        ] },
        { kind: 'source', html: 'Peru keeps UTC minus 5 hours the year round and has no daylight saving (tz database, America/Lima); India keeps UTC plus 5 hours 30 minutes. India is 10 hours 30 minutes ahead of Moquegua in every month.' },
        { kind: 'p', mt: true, html: 'With no clock changes in either country, a lesson hour fixed in March is still right in December. Book in your own time. Peru\'s school year for 2026 started on 16 March 2026, with 6,225,000 pupils in 53,631 schools; many families begin private lessons in the January to March holidays, and adults start in any month.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'How a Moquegua learner advances',
    lede: 'Our six stages, used with every age group to place learners and report progress.',
    table: { caption: 'Our stages, from first sequences to two-way tables', head: ['Stage', 'Often reached at', 'Can do'], rows: [
      ['1. Plan', '6 to 7', 'Lay out steps that reach a goal'],
      ['2. Loop', '7 to 9', 'Repeat with loops instead of copying'],
      ['3. Branch', '8 to 10', 'Take different paths with if, elif and else'],
      ['4. Count', '9 to 12', 'Count items in a list with a Counter or dictionary'],
      ['5. Cross', '11 to adult', 'Count by two keys at once in a two-way table'],
      ['6. Condition', '13 to adult', 'Choose the right denominator and explain a row share against a column share']
    ] },
    left: { h3: 'For parents', ps: [
      'The university-data project reaches stages 5 and 6. A learner who has done it reads "23 per cent" and asks: 23 per cent of what?',
      'A short monthly note tells you what has been built and understood.'
    ] },
    right: { h3: 'For learners', ps: [
      'Same count, different total, different answer.',
      'Name the denominator before you name the percentage.'
    ] }
  },

  catalogue: {
    eyebrow: 'More options',
    h2: 'Nine more courses for the Moquegua region',
    lede: 'Organised by age. In each, one mentor teaches live in English and stays with the learner, whether in a class or privately.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'MOQ / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Block coding to games and apps.' },
        { code: 'MOQ / KIDS / 02', slug: 'middle-school-math-competitions-course', title: 'Maths competitions', blurb: 'Contest problems for younger pupils.' },
        { code: 'MOQ / KIDS / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'An early start in a contest language.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'MOQ / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Solid typed foundations.' },
        { code: 'MOQ / TEEN / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'Deeper problem solving, written by us.' },
        { code: 'MOQ / TEEN / 03', slug: 'react-for-teens-complete-masterclass', title: 'React for teens', blurb: 'Modern interfaces for the web.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'MOQ / ADULT / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java masterclass', blurb: 'From syntax to well-structured systems.' },
        { code: 'MOQ / ADULT / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Rates, shares and inference.' },
        { code: 'MOQ / ADULT / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The core of technical interviews.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Routine',
    h2: 'Live online lessons from Moquegua: the routine',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'Morning in Moquegua is evening for the mentor.' },
      { time: 'Afternoons', l: 'After-school hours work as well.' },
      { time: 'Private', l: 'Lets an able learner move faster.' }
    ],
    cells: [
      { h3: 'Continuity', p: 'One mentor follows the learner across months.' },
      { h3: 'Plain English', p: 'Clear, steady speech, with key words on screen.' },
      { h3: 'Learner codes', p: 'Students write the programs and explain them.' },
      { h3: 'Matched ages', p: 'Each class is drawn from one age band.' },
      { h3: 'Candid reports', p: 'Families hear strengths and gaps alike.' },
      { h3: 'Size you prefer', p: 'A class of up to twenty, or a single learner.' }
    ]
  },

  projectsH2: 'What our long-term students make',
  projectsLede: 'Students who carry on build software that works for real. Some examples follow; the <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'Our Google reviews, in the words families and students used.',

  fees: {
    h2: 'Fees for learners in Moquegua and Ilo',
    lede: 'You pay monthly by card, and plans are priced in US dollars. The bank behind the card converts each charge into soles at its own rate, so the soles amount may shift a little from month to month.',
    free: ['A free first lesson', 'A level and device check', 'No card details'],
    group: ['Fifteen to twenty learners of similar age', 'A steady mentor', 'Two live lessons weekly', 'Monthly, cancel when you wish'],
    one: ['Learner and mentor only', 'Pace set by ability', 'Hours the family chooses']
  },

  faq: {
    eyebrow: 'Moquegua asks',
    h2: 'Online coding and AI classes in Moquegua: frequent questions',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our lessons are live online lessons in English, and only in English. The mentor talks clearly and steadily, adapts to the learner\'s pace and accent, and when a learner falls back on Spanish, gives them the English to use; the lesson carries on in English.' },
      { q: 'My child is top of the class. Will the lessons be too easy?', a: 'They should not be. The free class includes a level check, and able learners can start with typed Python, algorithms or contest problems rather than the gentle introduction.' },
      { q: 'Can my child use the TIC 2 school laptop?', a: 'If the school lends it for home use, yes: lessons need a browser, a microphone and a steady connection. Ask the school first; some laptops stay in the classroom.' },
      { q: 'Do you teach learners in Ilo, Omate or Ichuña?', a: 'Yes. Lessons are online, so the port, the valley and the highlands are all equally close, as long as the internet is stable at your hour.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Moquegua is 10 hours 30 minutes behind India all year, so 09:00 in Moquegua is 19:30 in India.' },
      { q: 'Is programming taught in Moquegua schools?', a: 'Not as a subject. The national curriculum places digital skills in every area, and the standard secundaria week has no programming hours.' },
      { q: 'Are the classes useful for university students in Moquegua and Ilo?', a: 'Yes. Python, Java, data and statistics help in systems, mining, environmental and civil engineering, and in management. We teach alongside your degree, and the university alone sets your grades.' },
      { q: 'Do you teach AI?', a: 'Yes. Teenagers and adults build small models and learn where AI goes wrong. Children meet the ideas through games, and under-13s never use adult AI accounts with us.' },
      { q: 'How is payment made?', a: 'Monthly, by card, in US dollars, converted into soles by your bank. If you visit from India, prices show in rupees. The first lesson is free.' },
      { q: 'Do you give a certificate?', a: 'Courses that include one end with our own certificate of completion. It is not a Peruvian school or university qualification, and no Peruvian authority awards or endorses it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Pages for Moquegua learners',
    lede: 'Where Moquegua families and learners often go after this page.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our country guide, linking every Peru page.' },
      { href: '/math-olympiad-coaching-peru', label: 'Maths olympiad coaching in Peru', p: 'Contest preparation with original problems.' },
      { href: '/peru-university-admission-exams-explained', label: 'University admission exams explained', p: 'How the main exams are organised.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'An early start with typed code.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'Building and testing AI.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A full lesson, described.' }
    ]
  },

  start: {
    h2: 'Try a free class from Moquegua',
    lede: 'The trial works like a short lesson: a puzzle that shows how the learner thinks, a first program that runs, and a level check so that a strong learner is not bored. The mentor then recommends a course and format, or tells you honestly if waiting would be wiser.',
    readFirst: 'If you would like to know more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">our courses</a> and their syllabuses.',
    note: 'Lessons are given live online, in English, by mentors working in India. WhatsApp is the fastest way to reach us, and messages in English are answered soonest.',
    formNote: 'Free, without card details or any commitment.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Also see', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: '22.9 per cent of what?'
  },

  personalityCss: `
.ag-root.ag-camr .ag-hero h1 { letter-spacing: -0.011em; max-width: 20ch; }
.ag-root.ag-camr .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-camr .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-camr .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-camr .ag-code-head b { letter-spacing: 0.05em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadros N° 1 and 3), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017; INEI Compendio Estadístico Perú 2026 (cuadros 11.5, 11.6, 11.13, 5.16, 5.22, 5.53, 5.54, 5.75); Gobierno Regional de Moquegua notes on gob.pe (21 September, 18 October and 27 October 2026); Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, ONEM 2026; UTEC OPI; EF EPI 2025; tz database. Data: Universidad Nacional de Moquegua, Población estudiantil por sexo y escuela profesional, UNAM 2026, ODC-By.',
    localProject: 'How much of each Moquegua university school is in its first year? An original Python project on the UNAM 2026 student register (ODC-By, term 2026-2, 3,468 students; school, term and cycle columns only): Version 1 finds 92 first-years among 402 in Ingeniería de Sistemas e Informática, 22.9 per cent of the school but 11.1 per cent of the 831 first-years; Version 2 builds the two-way table for all eleven schools. Lesson family: row percentages against column percentages.',
    requiredMentions: ['poblacion-unam-2026.csv', 'First-years as a share of the school: 22.9 %', 'The school as a share of all first-years: 11.1 %', 'Students: 3468 | first-years: 831', '194,828', 'Homes owning a computer', 'a favor de 180 instituciones educativas', 'Beca Esperanza Joven', '22.9 per cent of what?'],
    sources: [
      { claim: 'Department, province and district populations of Moquegua, 2025, and age bands.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Moquegua city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Populated centres and altitudes of Moquegua, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto18.xlsx' },
      { claim: 'Computers, internet, internet use, ECE 2025 by department, enrolment and teachers.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'TIC 2 project: laptops and tablets for 180 schools.', url: 'https://www.gob.pe/institucion/regionmoquegua/noticias/1464706-gore-moquegua-fortalece-la-educacion-con-entrega-de-laptops-a-estudiantes-de-primaria-de-general-sanchez-cerro' },
      { claim: 'Beca Esperanza Joven: about 1,750 higher-education places, 2023 to 2026.', url: 'https://www.gob.pe/institucion/regionmoquegua/noticias/1459286-beca-esperanza-joven-de-moquegua-obtiene-reconocimiento-internacional-por-su-impacto-en-educacion-superior' },
      { claim: 'Equipment for the Los Andes technological institute in Carumas.', url: 'https://www.gob.pe/institucion/regionmoquegua/noticias/1447834-gobernadora-fortalece-la-formacion-tecnica-del-tecnologico-de-los-andes-en-carumas-con-equipamiento-tecnologico' },
      { claim: 'UNAM student population register (school, term, cycle columns used), ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/poblaci%C3%B3n-estudiantil-por-sexo-y-escuela-profesional-unam-2026' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores, July 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'EF EPI 2025 score for Peru and its scored regions.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without daylight saving.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Student codes from the UNAM register: identifiers, never printed.',
      'Any statistic by sex: the register has a sex column, which is never read or printed.',
      'Any reason why first-year shares differ between schools: not in the data, not claimed.',
      'Checking the TIC 2 totals by adding the parts in the note: not done; each figure is printed as published.',
      'Money amounts and political names in the regional notes: left out.',
      'Comparing 2017 town figures with 2025 district figures: refused.',
      'A regional English score: EF does not score Moquegua.',
      'Any connection with GORE Moquegua, UNAM, the DRE, MINEDU, UTEC or any school: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
