// SHIP: market (region) | Apurímac: Abancay and Andahuaylas, mostly rural schools far from both towns, frank on English | degrees are not radians: haversine distance, and a sanity check against the size of the region
'use strict';
// Online coding and AI classes, Apurímac region, Peru (ag- region page, Peru cluster row PE179; alloc: regions, cbf, #64590D).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: flexible hours; USD only via
// data-price anchors.
// Spine: Apurímac is a mountain region of seven provinces with two poles, Abancay (the capital) and Andahuaylas (the most
// populous province). The regional school register shows most schools are rural, and our project measures how far each
// active secundaria sits from the nearer of the two towns, as the crow flies. EF publishes no regional English score and only
// about one home in five has a computer, so the page steers older learners first and treats younger ones one to one.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-apurimac-region-peru/
// and the shared ../src/inei/ folder):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1: APURÍMAC 467433; provinces ABANCAY 123483,
//    ANDAHUAYLAS 160165, ANTABAMBA 15627, AYMARAES 30038, COTABAMBAS 57407, CHINCHEROS 56458, GRAU 24255; districts ABANCAY
//    76290, ANDAHUAYLAS 50012, SAN JERÓNIMO 25140, TALAVERA 22063, CURAHUASI 18648, CHALLHUAHUACHO 16300, TAMBURCO 13299.
//    Capital Abancay (Compendio 2026 cuadro 1.8). Never summed.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Abancay city 72,277 (2017). Lib1541 dpto03 (single centro poblado, 2017):
//    ABANCAY 63106, ANDAHUAYLAS 34896.
//  - INEI Compendio Estadístico Perú 2026 tomo 1 (ENAHO): 11.5 Apurímac "10,9 12,1 14,7 11,6 20,4 23,9 23,1 25,5 21,5 21,8
//    22,6"; 11.6 "4,3 3,7 7,1 6,7 17,1 23,6 30,9 35,6 33,5 29,7 35,8"; 11.13 "21,0 22,0 22,0 19,2 31,6 40,5 57,0 55,7 60,7
//    65,6 76,0" (2015 to 2025). Peru 2025: 33,9 / 56,8 / 81,1.
//  - EF EPI 2025 (ef_peru.raw): Peru 519; Regions list of 15 has no Apurímac entry.
//  - DRE Apurímac on gob.pe, 15 December 2025 (n 1313254, "NOTA DE PRENSA N° 57-2025"): computer equipment and furniture
//    handed to institutes; "12 son los institutos tecnológicos que fueron beneficiados", also the "Escuela Superior de
//    Formación Artística Chabuca Granda de Abancay". 15 January 2026 (n 1334061): Matrícula Escolar 2026, "acceso gratuito",
//    "en la modalidad presencial". Officials' names not printed.
//  - Ley 28044, Edades normativas, CNEB competency 28 and JER hours, MINEDU 2026 opening, Fábrica de Programadores, ONEM
//    2026, OPI (FACTS 5, 6, 13, 14, 17, 32, 33, 39, 45, 99, 105, 111). Time: tzdata.
//  - Data: Gobierno Regional de Apurímac, "Instituciones Educativas de Apurímac", datosabiertos.gob.pe, "Open Data Commons
//    Open Database License (ODbL)", released 30 October 2026. Description: "El Gobierno Regional de Apurímac, a través de la
//    Gerencia Regional de Desarrollo Social, publica el listado de las instituciones educativas de la región, elaborado a
//    partir del padrón del Ministerio de Educación." File instituciones_educativas.csv (saved as ie-apurimac.csv), 956,479
//    bytes, UTF-8 with BOM, semicolons, 4,113 rows, fechacorte 2026-10-26 on every row; estado Activa 2,846, Inactiva 1,267;
//    area Rural 3,258, Urbana 855; nivel Secundaria 379 (355 active: 256 rural, 99 urban); 8 UGELs plus the DRE; latitude and
//    longitude on every row. School names are not printed.
// Our own calculations (scratchpad pe/r4/ap/v1.py, v2.py, python3 -I):
//  v1 prints: "Farthest row from Abancay: 6964 km".
//  v2 prints: "Farthest row from Abancay: 145 km" / "Active secundaria rows: 355" / "Over 50 km from both towns: 122" /
//    "Median distance: 34.5 km".
//  The reference points are our choice: the average latitude and longitude of the register's rows in Abancay district and in
//    Andahuaylas district, used as stand-ins for each town.
// Lesson family: trigonometry in code. math.sin and math.cos expect radians; feeding degrees gives a confident nonsense
// distance, and a sanity check against the size of the region catches it.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'import math',
  '',
  'with open("ie-apurimac.csv", encoding="utf-8-sig", newline="") as f:',
  '    rows = list(csv.DictReader(f, delimiter=";"))',
  '',
  'def centre(district):',
  '    pts = [(float(r["latitud"]), float(r["longitud"])) for r in rows if r["nom_dist"] == district]',
  '    return sum(p[0] for p in pts) / len(pts), sum(p[1] for p in pts) / len(pts)',
  '',
  'def km(a, b):',
  '    dlat, dlon = b[0] - a[0], b[1] - a[1]',
  '    h = math.sin(dlat / 2) ** 2 + math.cos(a[0]) * math.cos(b[0]) * math.sin(dlon / 2) ** 2',
  '    return 2 * 6371 * math.asin(math.sqrt(h))',
  '',
  'abancay = centre("ABANCAY")',
  'far = max(km(abancay, (float(r["latitud"]), float(r["longitud"]))) for r in rows)',
  'print("Farthest row from Abancay:", round(far), "km")'
].join('\n');

const V2 = [
  'import csv',
  'import math',
  '',
  'with open("ie-apurimac.csv", encoding="utf-8-sig", newline="") as f:',
  '    rows = list(csv.DictReader(f, delimiter=";"))',
  '',
  'def centre(district):',
  '    pts = [(float(r["latitud"]), float(r["longitud"])) for r in rows if r["nom_dist"] == district]',
  '    return sum(p[0] for p in pts) / len(pts), sum(p[1] for p in pts) / len(pts)',
  '',
  'def km(a, b):',
  '    lat1, lon1, lat2, lon2 = map(math.radians, (*a, *b))',
  '    h = (math.sin((lat2 - lat1) / 2) ** 2',
  '         + math.cos(lat1) * math.cos(lat2) * math.sin((lon2 - lon1) / 2) ** 2)',
  '    return 2 * 6371 * math.asin(math.sqrt(h))',
  '',
  'towns = [centre("ABANCAY"), centre("ANDAHUAYLAS")]',
  'far = max(km(towns[0], (float(r["latitud"]), float(r["longitud"]))) for r in rows)',
  'print("Farthest row from Abancay:", round(far), "km")',
  '',
  'near = []',
  'for r in rows:',
  '    if r["nivel"] == "Secundaria" and r["estado"] == "Activa":',
  '        here = (float(r["latitud"]), float(r["longitud"]))',
  '        near.append(min(km(t, here) for t in towns))',
  'print("Active secundaria rows:", len(near))',
  'print("Over 50 km from both towns:", sum(d > 50 for d in near))',
  'print("Median distance:", round(sorted(near)[len(near) // 2], 1), "km")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Apurímac region' },
  slug: 'online-coding-and-ai-classes-apurimac-region-peru',
  code: 'cbf',
  accent: '#64590D',
  accentRationale: 'Apurímac region: a dry-slope olive #64590D, the scrub of the deep Apurímac and Pachachaca valleys, allocated to this row; contrast 6.66 on #FBF8F2, 6.26 on #F5F1E8 and 5.73 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Apurímac region, Peru',
  title: 'Apurímac Region, Peru: Online Coding and AI Classes in English',
  description: 'Live online coding and AI classes in English for Abancay, Andahuaylas and all of Apurímac: who they suit, census and device data, and a Python distance project.',
  ogDescription: 'Coding, AI and maths for learners in Abancay, Andahuaylas, Chincheros, Cotabambas and the rest of Apurímac, taught live online in English: seven provinces in 2025 census figures, a frank note on English and computers, and a Python project measuring how far secondary schools are from the two main towns.',
  twitterDescription: 'Apurímac, live online coding in English: who it suits, census and device facts, a school-distance Python project.',
  pageName: 'Online Coding and AI Classes in the Apurímac Region',
  webPageDescription: 'A guide for learners across the Apurímac region of Peru to live online coding and AI classes taught in English, built from INEI census and ENAHO tables, DRE Apurímac notes, MINEDU curriculum sources and an original Python project on the GORE Apurímac list of educational institutions (ODbL).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Apurímac region of Peru: puzzles and block coding for children, Python, Java and maths through code for secundaria students, Python, data and Java for students at universities and institutes and for adults, in a group of fifteen to twenty or one to one, at hours the family sets.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Apurímac region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#match', label: 'Good match?' },
    { href: '#people', label: 'Population' },
    { href: '#distance', label: 'Distance project' },
    { href: '#screens', label: 'Computers' },
    { href: '#hours', label: 'Hours' }
  ],
  eyebrow: 'Apurímac region &middot; Live online, in English &middot; Older learners first',
  h1: 'Online coding and AI classes in the Apurímac region',
  lede: 'Apurímac has two main towns, Abancay and Andahuaylas, and a great many small rural schools between and beyond them. A live online class reaches a learner in either town or in a village in Grau or Cotabambas in exactly the same way, provided two things are in place: enough English and a computer. Here are the census facts, an honest view of who our English-taught classes suit, and a Python lesson that measures distance across the region using the regional government\'s own school list.',
  secondaryCta: { href: '#distance', label: 'Jump to the distance project' },
  wa: 'Hello Modern Age Coders, I am in the Apurímac region of Peru and would like to know whether your live coding classes in English could work for me or my child. Could we try a free class?',
  heroNote: 'Live online lessons since 2020 &middot; 10,000+ learners around the world &middot; mentors who adapt to beginners in English',
  spec: [
    ['Best placed', 'Secundaria pupils, students at universities and institutes, adults'],
    ['Small children', 'From six, mostly one to one'],
    ['Language of teaching', 'English, slow and clear'],
    ['Groups', 'Fifteen to twenty, or a single learner'],
    ['Times', 'Whenever you choose'],
    ['Starting point', 'A free class and a frank opinion']
  ],
  capsuleQ: 'At a glance',
  capsule: 'Modern Age Coders offers live online coding, AI and maths classes in English to learners all over the Apurímac region of Peru, including Abancay, Andahuaylas, Talavera, San Jerónimo, Curahuasi and Chincheros. Secundaria pupils, students at the region\'s universities and institutes, and adults with some English benefit most, learning Python, Java, data and AI from a mentor on a live video call. Children from six can begin with blocks, usually one to one. Choose a group of fifteen to twenty or private lessons, at hours you set; the first class is free.',

  picks: {
    eyebrow: 'Where to start in Apurímac',
    h2: 'Three first courses for learners in Apurímac',
    lede: 'Two of these suit teenagers and adults, who find English-taught lessons easiest to join; the third gives younger children a calm way in.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'APU / 01', title: 'Python for Teens', note: 'For pupils in secundaria with no coding yet. Python reads almost like short English sentences, so the language barrier shrinks as the programs grow.' },
      { course: 'maths-through-coding', code: 'APU / 02', title: 'Maths Through Coding', note: 'For learners of about 10 to 15. School maths, such as the distance formula in the project below, turned into small Python programs.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'APU / 03', title: 'Problem Solving for Kids', note: 'For children of seven to twelve. Puzzles and planning, with very little reading, as a first step before blocks or Python.' }
    ]
  },

  sections: [
    {
      id: 'match',
      eyebrow: 'Read first',
      h2: 'Are English-taught online classes a good match for learners in Apurímac?',
      lede: 'Often for teenagers and adults; less often, at first, for young children from Spanish-speaking homes. All our classes are live and online and taught in English, never in Spanish, so English and access to a computer are the first things to weigh.',
      body: [
        { kind: 'two',
          leftH3: 'English: what is published',
          left: [
            'EF\'s English Proficiency Index 2025 reports a score of 519 for Peru, moderate on its scale, and lists scores for fifteen regions. Apurímac does not appear on that list, so no regional English figure exists to quote.',
            'Inglés takes three hours a week in each grade of the regular secundaria timetable, so teenagers here have studied it for several years. How much of it they can follow in a live lesson differs from pupil to pupil, which is what the free class finds out.'
          ],
          rightH3: 'Learners who usually find their feet',
          right: [
            'Secundaria pupils who are keen on English or maths. Students at universities and technological institutes in Abancay and Andahuaylas, who already deal with English in software. Adults who read English in their work.',
            'Children of six to nine can learn with us as well, usually in private lessons. The mentor slows right down, shows rather than tells, and lets a young child answer by doing.'
          ] },
        { kind: 'p', mt: true, html: 'The free class is also an honest assessment. The mentor sets a simple task in easy English and watches how the learner manages. If English stands in the way for now, we will tell you and suggest private lessons, a later start or a different course. Spanish-speaking parents can read <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">a guide to coding classes for children written in Spanish</a>, and learners curious about doing both at once can see <a class="ag-inline-link" href="/learn-coding-and-english-together-peru">coding and English together</a>.' }
      ]
    },
    {
      id: 'people',
      tint: 'tint',
      eyebrow: 'Seven provinces',
      h2: 'What is the population of Apurímac?',
      lede: 'INEI\'s 2025 census counted 467,433 people in the department of Apurímac. Andahuaylas is the most populous province, with 160,165; Abancay, the capital\'s province, has 123,483.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Apurímac, people per province, census of 2025', head: ['Province', 'Total, 2025'], rows: [
          ['Andahuaylas', '160,165'],
          ['Abancay (capital: Abancay)', '123,483'],
          ['Cotabambas', '57,407'],
          ['Chincheros', '56,458'],
          ['Aymaraes', '30,038'],
          ['Grau', '24,255'],
          ['Antabamba', '15,627'],
          ['Department of Apurímac', '467,433']
        ] },
        { kind: 'source', html: 'INEI, Censos Nacionales 2025, Cuadro N° 1 in the national file of demographic indicators: the census total (counted and omitted) at 15 September 2025, on the boundaries valid in July 2026. We print INEI\'s department total as published and did not add up the provinces.' },
        { kind: 'two', mt: true,
          leftH3: 'Abancay',
          left: [
            'INEI counted 72,277 people in the city of Abancay in the 2017 census. In 2025 Abancay district had 76,290 people and the neighbouring district of Tamburco 13,299; Curahuasi, also in Abancay province, had 18,648.',
            'The 2017 city figure and the 2025 district figures describe different areas in different years, so they are not compared or added.'
          ],
          rightH3: 'Andahuaylas and the west',
          right: [
            'Andahuaylas district counted 50,012 people in 2025, with San Jerónimo at 25,140 and Talavera at 22,063 close by. The town of Andahuaylas itself had 34,896 people as a single populated centre in 2017.',
            'To the south-east, Challhuahuacho in Cotabambas had 16,300 in 2025. For a student in any of these places, a class that comes to the screen at home saves a journey to a city with a coding school.'
          ] }
      ]
    },
    {
      id: 'distance',
      eyebrow: 'An Apurímac data project',
      h2: 'How far are Apurímac\'s secondary schools from Abancay or Andahuaylas?',
      lede: 'Measured as a straight line on the globe, about a third of active secundaria entries in the regional school list are more than 50 km from both towns. Getting there needs a formula with sines and cosines, and one small unit mistake turns the answer into nonsense.',
      body: [
        { kind: 'two',
          leftH3: 'The list',
          left: [
            'The Gobierno Regional de Apurímac publishes "Instituciones Educativas de Apurímac" on datosabiertos.gob.pe and describes it as the list of the region\'s educational institutions "elaborado a partir del padrón del Ministerio de Educación". It was released on 30 October 2026 under the Open Data Commons Open Database License (ODbL), which allows reuse, commercial included, with credit, and asks that adapted databases are shared on the same terms.',
            'Our copy, ie-apurimac.csv, has 4,113 rows with a cut-off of 26 October 2026: 2,846 active and 1,267 inactive, 3,258 rural and 855 urban. Every row has a latitude and longitude. School names are in the file, and this lesson does not print them.'
          ],
          rightH3: 'The method',
          right: [
            'Latitude and longitude are angles. The usual way to turn two of them into a distance over the Earth\'s surface is the haversine formula, which uses sines, cosines and the Earth\'s radius of about 6,371 km.',
            'We need a point for each town. As a simple, stated choice of ours, we take the average position of the list\'s rows in Abancay district and in Andahuaylas district. It is not the exact town centre, and for straight-line distances of tens of kilometres it is close enough.'
          ] },
        { kind: 'code', label: 'Version 1: the formula, typed straight from a textbook', lang: 'Python', code: V1, note: 'It prints: <code>Farthest row from Abancay: 6964 km</code>.' },
        { kind: 'p', mt: true, html: 'Nothing crashed, and the answer is impossible. The rows in the file span only about one and a half degrees of latitude, under 200 km from north to south, so no school can be almost 7,000 km from Abancay. The reason is units: <code>math.sin</code> and <code>math.cos</code> in Python expect radians, and Version 1 gives them degrees. Sin of 13.6 degrees is about 0.24, but <code>math.sin(13.6)</code> treats 13.6 as radians and returns about 0.86. The program is not wrong in a way the computer can see; only a person who asks "is this possible?" will notice.' },
        { kind: 'code', label: 'Version 2: convert to radians first, then use the nearer town', lang: 'Python', code: V2, note: 'It prints: <code>Farthest row from Abancay: 145 km</code>, <code>Active secundaria rows: 355</code>, <code>Over 50 km from both towns: 122</code> and <code>Median distance: 34.5 km</code>.' },
        { kind: 'p', mt: true, html: 'Version 2 converts all four angles with <code>map(math.radians, ...)</code> before any trigonometry. The farthest row from Abancay is now 145 km away, which fits the size of the region. It then looks only at the 355 active secundaria rows, measures each to both towns and keeps the smaller distance with <code>min()</code>. Half of them are within 34.5 km of the nearer town in a straight line, and 122 are more than 50 km from both. Roads in the Andes wind, so the real journeys are longer than these lines; the numbers are a floor, not a travel time.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Active secundaria rows in the Apurímac list, straight-line distance to the nearer of Abancay and Andahuaylas (our calculation, cut-off 26 October 2026)', head: ['Measure', 'Value'], rows: [
          ['Active secundaria rows', '355'],
          ['Of which rural', '256'],
          ['Median distance to the nearer town', '34.5 km'],
          ['More than 50 km from both towns', '122'],
          ['Farthest row of any kind from Abancay', '145 km']
        ] },
        { kind: 'source', html: 'Data: Gobierno Regional de Apurímac, Instituciones Educativas de Apurímac, ODbL. Distances, counts and the town reference points are ours. Straight-line distances on a sphere of radius 6,371 km; actual road distances are longer.' },
        { kind: 'ol', mt: true, items: [
          '<strong>For ages 6 to 8.</strong> On a map of your town, stretch a string from home to school, then lay it along the streets you really walk. Which is longer, and why?',
          '<strong>Ages 8 to 11, with blocks.</strong> Make a sprite move from one point to another and count its steps along x and y. Is the straight path shorter than going across then up?',
          '<strong>Ages 11 to 13.</strong> Print <code>math.sin(30)</code> and <code>math.sin(math.radians(30))</code>. Which one is 0.5, and what does the other one mean?',
          '<strong>Teenagers.</strong> Add a third reference town, such as Chalhuanca in Aymaraes, using the same averaging method. How many of the 122 rows come within 50 km?',
          '<strong>University and adults.</strong> Compare the haversine result with a flat-map approximation that multiplies degrees by 111 km. How large is the difference at Apurímac\'s latitude?'
        ] },
        { kind: 'p', mt: true, html: 'Asking "could this possibly be right?" before trusting a number is one of the most useful habits in programming, and in using AI tools. It is the habit our page on <a class="ag-inline-link" href="/build-with-ai-without-copying-peru">building with AI without copying</a> keeps returning to.' }
      ]
    },
    {
      id: 'schools',
      eyebrow: 'Education in the region',
      h2: 'Is programming part of school in Apurímac?',
      lede: 'No, not as a subject. Apurímac follows the national curriculum, which spreads technology across every area. The regional education office\'s recent news is about equipment for institutes and free enrolment.',
      body: [
        { kind: 'two',
          leftH3: 'National framework',
          left: [
            'The General Education Law sets six years of primaria and five of secundaria. A child\'s grade depends on their age on 31 March, with six as the normative age for first grade and sixteen for fifth of secundaria.',
            'The CNEB names ICT as competency 28 and makes it transversal, so it belongs to all areas at once. The regular secundaria week totals 35 hours: Matemática four, Inglés three, and programming none.'
          ],
          rightH3: 'From the DRE Apurímac',
          right: [
            'In a press note of 15 December 2025, the Dirección Regional de Educación Apurímac reported handing computer equipment and furniture to 12 public technological institutes, and also to the Escuela Superior de Formación Artística Chabuca Granda in Abancay.',
            'On 15 January 2026 it reminded families that school enrolment for 2026 is free and done in person, following the published schedule.'
          ] },
        { kind: 'p', mt: true, html: 'MINEDU\'s Python initiative for secundaria, Fábrica de Programadores, started in July 2025 with 1,000 pupils in Lima Norte; we found nothing showing it in Apurímac. Every pupil in Peru can take part in contests: the ONEM maths olympiad\'s school round was on 8 July 2026 and drew more than 1.7 million secundaria pupils, and the OPI computing olympiads from UTEC are free. We have no link with the DRE, MINEDU, UTEC or any contest, and we teach with our own problems.' }
      ]
    },
    {
      id: 'screens',
      eyebrow: 'Equipment',
      h2: 'How many Apurímac homes have a computer or internet?',
      lede: 'About one in five had a computer in 2025, and about a third had an internet service, according to INEI\'s household survey. Internet use, mainly on phones, is far higher.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Apurímac and Peru: computers and internet at home, ENAHO (per cent)', head: ['Indicator', 'Apurímac 2022', 'Apurímac 2025', 'Peru 2025'], rows: [
          ['Homes owning a computer', '25.5', '22.6', '33.9'],
          ['Homes with an internet connection', '35.6', '35.8', '56.8'],
          ['Population aged 6 and above online', '55.7', '76.0', '81.1']
        ] },
        { kind: 'source', html: 'INEI, Compendio Estadístico Perú 2026 (tomo 1), cuadros 11.5, 11.6 and 11.13; data from the Encuesta Nacional de Hogares. Decimal commas printed as points.' },
        { kind: 'two', mt: true,
          leftH3: 'One rising line, two flat ones',
          left: [
            'Internet use among people aged six and over climbed from 55.7 per cent in 2022 to 76.0 per cent in 2025. Home internet stayed at about 36 per cent, and home computers slipped from 25.5 to 22.6.',
            'In other words, more people are online every year, almost all of them through a phone.'
          ],
          rightH3: 'What that means for a class',
          right: [
            'Joining a call works on a phone. Programming does not, because the learner types, runs and repairs code for most of the lesson; from about nine we ask for a laptop or desktop.',
            'Sharing one family laptop on agreed days works well. University and institute students can often book a lab. If a computer is out of reach, we will say in the free class that it is better to wait.'
          ] }
      ]
    },
    {
      id: 'start-course',
      eyebrow: 'Course choice',
      h2: 'Which course should a learner in Apurímac begin with?',
      lede: 'Choose by age and English first and check the computer second. The table holds our suggestions; the ages are our own course ranges.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our suggested first course for Apurímac learners', head: ['Learner', 'English', 'First course', 'Format'], rows: [
          ['Child, 6 to 8', 'Very new', 'Problem Solving for Kids', 'One to one'],
          ['Child, 8 to 12', 'Some, from school', 'Scratch, or Maths Through Coding from 10', 'Group or one to one'],
          ['1° to 3° de secundaria', 'Basic', 'Python for Teens', 'Group'],
          ['4° and 5° de secundaria', 'Comfortable reading', 'Python, then Java', 'Group'],
          ['University or institute student', 'Reads technical English', 'Python masterclass or Java', 'Group or one to one'],
          ['Adult', 'Any, with patience', 'Python from zero, or data for non-programmers', 'Often one to one']
        ] },
        { kind: 'source', html: 'Our suggestions only. Grade placement uses MINEDU\'s normative age at 31 March, so pupils in the same grade can be nearly a year apart.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Children', p: 'Visual puzzles and blocks, with the mentor repeating the same short English instructions week after week.' },
          { h3: 'Teenagers', p: 'Python straight away, then Java, maths through code, or the PCEP certificate path.' },
          { h3: 'Students and adults', p: 'Programming and data for engineering, agronomy, accounting or education, around study and work.' }
        ] },
        { kind: 'p', mt: true, html: 'For university and institute students, <a class="ag-inline-link" href="/coding-courses-for-university-students-peru">coding courses for university students in Peru</a> goes further; all Peru guides are listed on <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'hours',
      eyebrow: 'Time zones',
      h2: 'What hours can classes run for Abancay and Andahuaylas?',
      lede: 'Any hour you pick. Apurímac uses Peru time; the mentor, in India, plans the day around the learner.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example conversions from Apurímac time to India time (not a schedule)', head: ['Apurímac', 'India', 'Mentor\'s part of day'], rows: [
          ['05:00', '15:30', 'Mid-afternoon'],
          ['07:45', '18:15', 'Evening'],
          ['10:30', '21:00', 'Night'],
          ['14:00', '00:30', 'Just after midnight'],
          ['16:30', '03:00', 'Small hours'],
          ['20:30', '07:00', 'Next morning']
        ] },
        { kind: 'source', html: 'Time zones from the tz database: Peru is UTC minus 5 with no daylight saving since 1994 (America/Lima), India is UTC plus 5:30. The gap of 10 hours 30 minutes holds every day.' },
        { kind: 'p', mt: true, html: 'With no clock changes on either side, an hour chosen once is fixed for the year, and you choose it in your own time. Peru\'s 2026 school year opened on 16 March 2026; families often start in the January to March break, and adults whenever they are ready.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How an Apurímac learner progresses',
    lede: 'Six stages of ours, the same for every age group, so that parents can see what has been learned and what is next.',
    table: { caption: 'Our stages, from first commands to checked formulas', head: ['Stage', 'Commonly at', 'The learner is able to'], rows: [
      ['1. Command', '6 to 7', 'Give a sprite simple instructions in order'],
      ['2. Loop', '7 to 9', 'Repeat actions with a loop'],
      ['3. Measure', '8 to 10', 'Use x and y to place and move things'],
      ['4. Program', '9 to 12', 'Write Python with functions and lists'],
      ['5. Formula', '11 to adult', 'Turn a maths formula into a working function'],
      ['6. Sanity check', '13 to adult', 'Ask whether a result is possible before trusting it']
    ] },
    left: { h3: 'For parents', ps: [
      'The distance project practises stages 5 and 6: a formula in code, then the question "could this be right?".',
      'Each month you get a short summary of what your child made.'
    ] },
    right: { h3: 'For learners', ps: [
      'Know your units before you compute.',
      'An impossible answer is still a wrong answer.'
    ] }
  },

  catalogue: {
    eyebrow: 'More choices',
    h2: 'Nine more courses for Apurímac learners',
    lede: 'Arranged in three age bands, every course taught live in English, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'APU / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games and animations from blocks.' },
        { code: 'APU / KIDS / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for ages 5 to 10.' },
        { code: 'APU / KIDS / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How AI works, for ages 8 to 14.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'APU / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Solid programming from first principles.' },
        { code: 'APU / TEEN / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Algebra to calculus, explained in English.' },
        { code: 'APU / TEEN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Logic and algorithms for contests.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'APU / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'From first lines to automation.' },
        { code: 'APU / ADULT / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java course', blurb: 'Core Java through to Spring Boot.' },
        { code: 'APU / ADULT / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'Excel, Sheets and Power BI.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Running the classes',
    h2: 'How the live online classes work for Apurímac',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Dawn and morning', l: 'Early Apurímac hours land in the Indian afternoon or evening.' },
      { time: 'Later in the day', l: 'Afternoon and evening lessons can be arranged as well.' },
      { time: 'Private lessons', l: 'The usual choice while English is new.' }
    ],
    cells: [
      { h3: 'Constant mentor', p: 'The same teacher, lesson after lesson.' },
      { h3: 'Simple English', p: 'Spoken slowly, with important words on screen.' },
      { h3: 'Hands-on', p: 'Learners type and test the code themselves.' },
      { h3: 'Ages kept apart', p: 'Separate groups for children, teens and adults.' },
      { h3: 'Truthful feedback', p: 'Families hear about difficulties as well as wins.' },
      { h3: 'Two formats', p: 'A group of fifteen to twenty, or one learner.' }
    ]
  },

  projectsH2: 'Built by students over months',
  projectsLede: 'Students who stay with it go on to build useful tools. A selection is shown here, and the <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'Reviews by families and students on Google, unedited.',

  fees: {
    h2: 'Fees for learners in Apurímac',
    lede: 'We price every plan in US dollars and charge it to a card each month. The amount in soles is worked out by your bank at its rate when the charge goes through, so it may not be identical every month.',
    free: ['A free first lesson', 'A check of English and computer', 'No card details'],
    group: ['Fifteen to twenty learners of similar age', 'One mentor all the way', 'Lessons every week, live', 'Monthly, cancel when you wish'],
    one: ['Just the learner and the mentor', 'Room to go slowly in English', 'Times set by you']
  },

  faq: {
    eyebrow: 'Apurímac questions',
    h2: 'Online coding and AI classes in Apurímac: common questions',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All teaching is live, online and in English only. The mentors talk clearly and unhurriedly, keep pace with each learner, tune in to their accent, and if a pupil answers in Spanish they help find the English for it, yet the class stays in English throughout.' },
      { q: 'Does EF score English in Apurímac?', a: 'No. The 2025 EF index gives Peru 519 and publishes fifteen regional scores, none of them for Apurímac. We judge each learner in the free class instead.' },
      { q: 'We live outside Abancay and Andahuaylas. Is that a problem?', a: 'Not at all. A learner in Chincheros, Grau, Cotabambas or Antabamba joins the same live lesson, as long as the internet holds for the hour and there is a suitable device.' },
      { q: 'Can my child use a phone?', a: 'Only to watch. Writing code needs a keyboard, so from about nine we ask for a laptop or desktop; younger children can start with blocks on a tablet.' },
      { q: 'When are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Apurímac is 10 hours 30 minutes behind India throughout the year; 07:45 in Abancay is 18:15 for the mentor.' },
      { q: 'Do Apurímac schools teach coding?', a: 'No separate subject exists. Digital skills are a competency every area is meant to develop, and the regular secundaria week has no hours for programming.' },
      { q: 'Are these classes useful for institute and university students?', a: 'Very often. Students in technological institutes and universities in Abancay and Andahuaylas meet English in software every day, so Python, Java and data analysis taught in English fit their studies well.' },
      { q: 'Do you teach artificial intelligence?', a: 'Yes. Teenagers and adults build and test small AI models and learn where they go wrong. Children meet the ideas in simple projects, and no one under 13 uses adult chatbot accounts in our classes.' },
      { q: 'How do we pay?', a: 'Monthly by card, priced in US dollars, with your bank handling the conversion to soles. People viewing from India see rupees. The first lesson is free.' },
      { q: 'Is there a certificate at the end?', a: 'Courses that come with one finish with our own certificate of completion, describing what was built. It is not a Peruvian qualification, and MINEDU, the DRE and schools do not issue or endorse it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Next',
    h2: 'Pages Apurímac learners may want next',
    lede: 'Deeper guides by age group and by subject.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The main Peru page and its full index.' },
      { href: '/learn-coding-and-english-together-peru', label: 'Coding and English together', p: 'Why the two skills help each other.' },
      { href: '/build-with-ai-without-copying-peru', label: 'Build with AI without copying', p: 'Using AI tools and still thinking.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'A late start is fine.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age rules for well-known AI tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A full lesson, explained.' }
    ]
  },

  start: {
    h2: 'Start with a free class from Apurímac',
    lede: 'The trial is a short puzzle, a first program and a little conversation in simple English. When it ends, the mentor tells you plainly whether starting now makes sense, which course to choose and whether group or private lessons would serve the learner better.',
    readFirst: 'Want to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> covers one lesson in detail, and <a class="ag-inline-link" href="/courses">the courses page</a> lists every syllabus.',
    note: 'Lessons are live online and always in English, with mentors working from India. WhatsApp messages in English get the fastest response.',
    formNote: 'Free, card-free, and with nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Worth a look', links: [
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Radians first, then distance'
  },

  personalityCss: `
.ag-root.ag-cbf .ag-hero h1 { letter-spacing: -0.004em; max-width: 21ch; }
.ag-root.ag-cbf .ag-capsule { border-left-width: 4px; border-radius: 10px; }
.ag-root.ag-cbf .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-cbf .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-cbf .ag-code-head b { letter-spacing: 0.05em; font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro N° 1), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017; INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); DRE Apurímac notes of 15 December 2025 and 15 January 2026; Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, ONEM 2026; UTEC OPI; EF EPI 2025; tz database. Data: GORE Apurímac, Instituciones Educativas de Apurímac, ODbL.',
    localProject: 'How far are Apurímac\'s secondary schools from Abancay or Andahuaylas? An original Python project on the GORE Apurímac list of educational institutions (ODbL, cut-off 26 October 2026): Version 1 feeds degrees to math.sin and finds a row 6,964 km from Abancay; Version 2 converts to radians, finds 145 km, and shows that 122 of 355 active secundaria rows are over 50 km in a straight line from both towns, median 34.5 km. Lesson family: degrees against radians, haversine, sanity checks.',
    requiredMentions: ['ie-apurimac.csv', 'Farthest row from Abancay: 6964 km', 'Over 50 km from both towns: 122', 'Median distance: 34.5 km', '467,433', 'map(math.radians', 'Chabuca Granda', 'Radians first, then distance', 'Open Database License (ODbL)'],
    sources: [
      { claim: 'Department, province and district populations of Apurímac, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Abancay city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Andahuaylas populated-centre figure, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto03.xlsx' },
      { claim: 'Computers, internet service and internet use in Apurímac and Peru, 2022 and 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'DRE Apurímac equipment for 12 technological institutes, 15 December 2025.', url: 'https://www.gob.pe/institucion/regionapurimac-dre/noticias/1313254-dre-apurimac-entrega-equipos-informaticos-y-mobiliario-a-institutos-superiores-tecnologicos' },
      { claim: 'Free, in-person school enrolment for 2026.', url: 'https://www.gob.pe/institucion/regionapurimac-dre/noticias/1334061-matricula-escolar-2026' },
      { claim: 'Instituciones Educativas de Apurímac, ODbL.', url: 'https://www.datosabiertos.gob.pe/dataset/instituciones-educativas-de-apur%C3%ADmac' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative ages at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'ONEM 2026 national participation.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'EF EPI 2025 Peru score and regional list.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without daylight saving.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Travel times or road distances: not in the data; straight-line distances are labelled as a floor.',
      'Exact town-centre coordinates: replaced by our stated average of register rows per district.',
      'An Apurímac English score: EF EPI 2025 publishes none.',
      'School names from the list: not printed.',
      'Combining Abancay\'s 2017 city figure with 2025 district figures: refused.',
      'The UNAMBA enrolment dataset: considered, not used (binary .xls with student records).',
      'Any connection with GORE Apurímac, the DRE, MINEDU, UTEC or any school or institute: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
