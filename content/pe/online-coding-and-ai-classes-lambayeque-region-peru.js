// SHIP: region | Lambayeque: Chiclayo, three provinces, coast to Incahuasi, GRE maths drive | rounded shares that add to 101; largest-remainder rounding
'use strict';
// Lambayeque region (ag- region page, Peru cluster row PE166, P5; alloc: regions, cau, #464D02). Written 2026-11-09.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; USD only, through the template's data-price anchors.
// Spine: Lambayeque is a small department (three provinces) where one city, Chiclayo, holds most of the people, yet it
// climbs from the coast to schools at 3,467 m in Incahuasi. The page walks families from the census to the classroom
// and builds its project on the regional government's own list of school services.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/<slug>/ and pe/src/inei):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (places.tsv; tab/tsv_ind_00/sheet2): department
//    LAMBAYEQUE 1404633 total (censada 1361522); PROVINCIA CHICLAYO 894229; PROVINCIA FERREÑAFE 114682; PROVINCIA
//    LAMBAYEQUE 395722; district Chiclayo 270739. Capital Chiclayo (Compendio 2026 cuadro 1.8). Never summed.
//  - Same tabulado, Cuadro N° 3 (sheet4): LAMBAYEQUE censada "142542" aged 6 to 11 and "147164" aged 12 to 17.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Chiclayo city 552,508 (2017, conglomerate). INEI Lib1541 dpto14.xlsx
//    (single centros poblados, 2017): CHICLAYO 270 208 at 28 m; JOSE LEONARDO ORTIZ 156 498; LA VICTORIA 86 024;
//    LAMBAYEQUE 58 276; FERREÑAFE 33 526; MONSEFU 23 969.
//  - INEI Compendio Estadístico Perú 2026, tomo 1 (cdn.www.gob.pe/uploads/document/file/10884842/...): cuadro 1.7
//    "Lambayeque 14 461,5" km2; 11.5 households with a computer "Lambayeque ... 36,1" (2025), Total 33,9; 11.6 households
//    with internet "Lambayeque ... 58,8", Total 56,8; 11.13 people aged 6+ using internet "Lambayeque ... 79,2", Total 81,1;
//    5.53 4° primaria satisfactory 2025 maths 25,1 (Total 30,0); 5.54 2° secundaria 2025 maths 9,1 (Total 12,7);
//    5.16 public primaria enrolment 2025 "115,8" thousand; 5.22 public secundaria "87,5" thousand; 5.75 teachers 2025
//    "21 826"; 5.66 Universidad Nacional Pedro Ruiz Gallo undergraduates 2025 "8 306".
//  - GRE Lambayeque, gob.pe news 21 August 2026 (gre-onem2026.html): "Más de 1,700 estudiantes participaron en las etapas
//    UGEL de la Olimpiada Nacional Escolar de Matemática"; UGEL Chiclayo "más de 950 estudiantes del nivel secundaria
//    participaron"; UGEL Lambayeque "reunió a 752 estudiantes"; provinces "Chiclayo, Lambayeque y Ferreñafe".
//  - GRE Lambayeque, gob.pe news 22 July 2026 (gre-mat-tic.html): "IV Programa de Actualización en Matemática y TIC 2026",
//    with the UNPRG; "constó de 120 horas pedagógicas"; "logró capacitar con éxito a 84 docentes de Matemática de las UGEL
//    Chiclayo, Lambayeque y Ferreñafe"; "A lo largo de ocho semanas"; "GeoGebra y la Inteligencia Artificial".
//  - National (raw copies under pe/facts-school/src, verified by the hub writer): Ley 28044 primaria "dura seis años",
//    secundaria "dura cinco años"; Edades normativas at 31 March; CNEB competency 28 transversal, secundaria
//    "Matemática 4 4 4 4 4 ... Inglés 3 3 3 3 3"; ONEM 2026 school stage "miércoles 08 de Julio", levels 1° y 2°, 3° y 4°,
//    5°, "Consta de diez (10) ítems", "dos (02) horas"; El Peruano 11/10/2026 "más de 1,7 millones"; OPI free for every
//    secundaria student; MINEDU 16 March 2026 "53 631 colegios ... 6 225 000 estudiantes".
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): cityScore chiclayo "low" 474; stateScore lambayeque "low"
//    467; Peru 519; Lima city 555 high.
//  - Time: tzdata America/Lima UTC-5, last Peru rule 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead all year.
//  - Data: Gobierno Regional de Lambayeque (GORE Lambayeque), "Centros Educativos en la Región Lambayeque actualizados a
//    junio 2025", Plataforma Nacional de Datos Abiertos, https://www.datosabiertos.gob.pe/dataset/centros-educativos-en-la-
//    regi%C3%B3n-lambayeque-actualizados-junio-2025, licence "Open Data Commons Attribution License" (dc:license on the raw
//    page), modified 2025-07-03. File data_iiee_rl.csv, 811,223 bytes, sha256 ed17bb6e...54f8900a8ef, 3,616 rows, fecha
//    de corte 01/07/2025, saved to src-pages/<slug>/data/ on 9 November 2026.
// Our own calculations (scratchpad pe/r2/lamb/v1.py, v2.py, summary.py; python3 -I on the downloaded file):
//  v1 prints: Services: 3616 / Shares: {'Inicial': 50, 'Other': 6, 'Primaria': 31, 'Secundaria': 14} / Adds up to: 101
//  v2 prints: Points handed out: 3 to ['Other', 'Secundaria', 'Primaria'] / Shares: {'Inicial': 49, 'Other': 6,
//    'Primaria': 31, 'Secundaria': 14} / Adds up to: 100
//  summary: counts Inicial 1793 (49.585%), Primaria 1111 (30.725%), Secundaria 498 (13.772%), Other 214 (5.918%);
//    province Chiclayo 1881 services (primaria 508, 184 public; secundaria 285, 93 public); Lambayeque 1180 (primaria 422,
//    355 public; secundaria 151, 103 public); Ferreñafe 555 (primaria 181, 166 public; secundaria 62, 53 public); 38
//    districts; public 2427, private 1189; all 737 Inicial No Escolarizado rows carry Código Local 0; highest school
//    altitude 3467 m, district Incahuasi.
// Lesson family: rounded parts do not have to add up to the whole; the largest-remainder (Hamilton) method hands out the
// missing points so a published set of percentages sums to exactly 100.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'def stage(level):',
  '    if level.startswith("Inicial"):',
  '        return "Inicial"',
  '    if level in ("Primaria", "Secundaria"):',
  '        return level',
  '    return "Other"',
  '',
  'counts = {}',
  'with open("data_iiee_rl.csv", encoding="utf-8-sig") as src:',
  '    for service in csv.DictReader(src, delimiter=";"):',
  '        s = stage(service["Nivel / Modalidad"])',
  '        counts[s] = counts.get(s, 0) + 1',
  '',
  'total = sum(counts.values())',
  'shares = {s: round(100 * n / total) for s, n in counts.items()}',
  'print("Services:", total)',
  'print("Shares:", shares)',
  'print("Adds up to:", sum(shares.values()))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'def stage(level):',
  '    if level.startswith("Inicial"):',
  '        return "Inicial"',
  '    if level in ("Primaria", "Secundaria"):',
  '        return level',
  '    return "Other"',
  '',
  'counts = {}',
  'with open("data_iiee_rl.csv", encoding="utf-8-sig") as src:',
  '    for service in csv.DictReader(src, delimiter=";"):',
  '        s = stage(service["Nivel / Modalidad"])',
  '        counts[s] = counts.get(s, 0) + 1',
  '',
  'total = sum(counts.values())',
  'exact = {s: 100 * n / total for s, n in counts.items()}',
  'shares = {s: int(x) for s, x in exact.items()}          # round every share down',
  'left = 100 - sum(shares.values())                       # points still to hand out',
  'by_remainder = sorted(exact, key=lambda s: exact[s] - shares[s], reverse=True)',
  'for s in by_remainder[:left]:',
  '    shares[s] += 1                                      # biggest leftovers first',
  'print("Points handed out:", left, "to", by_remainder[:left])',
  'print("Shares:", shares)',
  'print("Adds up to:", sum(shares.values()))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Lambayeque region' },
  slug: 'online-coding-and-ai-classes-lambayeque-region-peru',
  code: 'cau',
  accent: '#464D02',
  accentRationale: 'Lambayeque region: a dark carob olive #464D02, the colour of the algarrobo trees of the northern dry forest, allocated to this row; contrast 8.53 on #FBF8F2, 8.02 on #F5F1E8 and 7.34 on #EDE7DA, all well above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Lambayeque region, Peru',
  title: 'Online Coding and AI Classes, Lambayeque Region, Peru',
  description: 'Live online coding and AI classes in English for Chiclayo, Lambayeque and Ferreñafe families: ages 6 to adult, school facts, census figures and a data project.',
  ogDescription: 'Coding, AI and maths for learners across the Lambayeque region, taught live online in English at hours the family chooses: INEI census figures, what school covers, the ONEM in Lambayeque, and a Python project on the regional list of schools.',
  twitterDescription: 'Live online coding and AI classes in English for the Lambayeque region: census facts, school facts and a project on the regional school list.',
  pageName: 'Online Coding and AI Classes in the Lambayeque Region, Peru',
  webPageDescription: 'A guide for families and adult learners in the Lambayeque region to live online coding, AI and maths classes taught in English, built from INEI census and compendium figures, MINEDU curriculum facts, two Gerencia Regional de Educación news releases, EF EPI 2025, and an original Python project on the GORE Lambayeque list of school services (ODC-By).',
  courseDescription: 'Live online coding, AI and maths classes in English for learners in the Lambayeque region of Peru: Scratch and maths through code for children, Python, Java and statistics for teenagers, and Python and data analysis for adults, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Lambayeque region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#region', label: 'The region' },
    { href: '#school', label: 'School' },
    { href: '#project', label: 'Lambayeque project' },
    { href: '#maths', label: 'Maths and ONEM' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Lambayeque region &middot; Live online, in English &middot; Ages 6 to adult',
  h1: 'Online coding and AI classes in the Lambayeque region',
  lede: 'Chiclayo, Lambayeque and Ferreñafe sit within an hour of each other, yet a child in Incahuasi studies at almost three and a half thousand metres. This page sets out who lives in the region, what Peruvian school does and does not teach about programming, which of our live online courses suits each age, and a project built on the regional government\'s own list of schools, where four honest percentages add up to 101.',
  secondaryCta: { href: '#project', label: 'See the Lambayeque project' },
  wa: 'Hello Modern Age Coders, we are in the Lambayeque region of Peru and would like live coding or AI classes in English. Could we book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; over 10,000 learners in many countries &middot; English adjusted to each learner\'s pace',
  spec: [
    ['Who', 'Children from 6, teenagers, university students and adults'],
    ['Where', 'Any district of Chiclayo, Lambayeque or Ferreñafe, from home'],
    ['Subjects', 'Coding, AI and maths, live with a mentor'],
    ['Format', 'A group of fifteen to twenty, or one to one'],
    ['Hours', 'Chosen by the family, any day'],
    ['First step', 'A free class, no card asked for']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'Learners anywhere in the Lambayeque region can take live online coding, AI and maths classes with Modern Age Coders, from Chiclayo and José Leonardo Ortiz to Ferreñafe and the highland districts, and every lesson is taught in English. Six year olds begin with Scratch, older children add maths through code, secundaria students go on to Python, Java and statistics, and grown-ups work on Python, spreadsheets, data and AI tools. A mentor teaches each lesson face to face over video, either to a class of fifteen to twenty or to a single learner, on whichever days and at whichever hours the family settles on.',

  picks: {
    eyebrow: 'Where Lambayeque learners begin',
    h2: 'Three courses to start with in the Lambayeque region',
    lede: 'One for primaria, one that joins coding to school maths, and one for secundaria. Adult courses follow further down the page.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'LAM / 01', title: 'Coding for Kids', note: 'Children of 6 to 12, placed with others of their own age. They snap blocks together into stories and games, build small apps later on, and finish by teaching a program to guess. Typing comes only when they are ready for it.' },
      { course: 'maths-through-coding', code: 'LAM / 02', title: 'Maths Through Coding', note: 'For 10 to 15 year olds. Fractions, percentages, patterns and graphs explored by writing small Python programs, which is exactly the habit the percentages project below asks for.' },
      { course: 'python-complete-masterclass-teens', code: 'LAM / 03', title: 'Python for Teens', note: 'For 13 to 18 year olds starting from zero. Real programs, files and data sets, at a depth the secundaria timetable has no hours for.' }
    ]
  },

  sections: [
    {
      id: 'region',
      eyebrow: 'The region in figures',
      h2: 'What is the population of the Lambayeque region, province by province?',
      lede: 'INEI counted 1,404,633 people in the department of Lambayeque in the 2025 census, spread over three provinces and 14,461.5 square kilometres. Chiclayo is the capital and by far the largest province.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Lambayeque by province, Censos Nacionales 2025 (total population)', head: ['Unit', 'People, 2025', 'Note'], rows: [
          ['Department of Lambayeque', '1,404,633', 'Three provinces; capital Chiclayo'],
          ['Province of Chiclayo', '894,229', 'Includes Chiclayo, José Leonardo Ortiz, La Victoria, Monsefú'],
          ['Province of Lambayeque', '395,722', 'Includes the town of Lambayeque, Mórrope, Olmos'],
          ['Province of Ferreñafe', '114,682', 'Includes Ferreñafe and the highland district of Incahuasi'],
          ['District of Chiclayo', '270,739', 'The central district only']
        ] },
        { kind: 'source', html: 'Census table: Cuadro N° 1 of the Indicadores demográficos that INEI released from its 2025 national census (población total; the census counted people as of 15 September 2025). The capital is from INEI\'s Compendio Estadístico Perú 2026, cuadro 1.8, and the area from cuadro 1.7. The rows overlap: the district sits inside its province, and the provinces sit inside the department, so they are never added up.' },
        { kind: 'two', mt: true,
          leftH3: 'The cities people name',
          left: [
            'In the 2017 census, the last one with city figures, INEI counted 552,508 people in the city of Chiclayo, a built-up area that runs across several districts. INEI has not yet published city totals from the 2025 census, so that 2017 figure is still the newest one for the city as a whole.',
            'INEI\'s 2017 directory of centros poblados also lists the separate places inside and around it: Chiclayo itself with 270,208 people at 28 metres above sea level, José Leonardo Ortiz with 156,498, La Victoria with 86,024, the town of Lambayeque with 58,276, Ferreñafe with 33,526 and Monsefú with 23,969. Each of those is one centro poblado, and none of them is a total for the metropolitan area.'
          ],
          rightH3: 'School-age children in 2025',
          right: [
            'The 2025 census counted 142,542 people aged 6 to 11 in the department and 147,164 aged 12 to 17. Those two age bands line up closely with primaria and secundaria, so together they give a feel for how many young learners the region has right now.',
            'These are people counted in person (población censada), which INEI publishes by age; the department total above also includes an estimate for people the census missed. That is why the age figures look a little lower than a share of 1,404,633 would suggest.'
          ] },
        { kind: 'p', mt: true, html: 'Lambayeque is usually pictured as coast: rice fields, the sea at Pimentel and the pyramids of Túcume. The regional school list used later on this page tells another story, because its highest school sits at 3,467 metres in the district of Incahuasi, in the Ferreñafe highlands. A live online class reaches both ends of the department the same way, which is one reason families outside Chiclayo city ask about it.' }
      ]
    },
    {
      id: 'online',
      tint: 'tint',
      eyebrow: 'Internet and computers',
      h2: 'Can a family in Lambayeque take classes online?',
      lede: 'Most can. INEI\'s yearly household survey shows that in 2025, 58.8% of households in Lambayeque had an internet service and 79.2% of people aged 6 and over used the internet. A home computer is rarer, at 36.1% of households.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Connectivity in Lambayeque and in Peru as a whole, 2025 (percentages from INEI\'s ENAHO survey)', head: ['Measure', 'Lambayeque', 'Peru'], rows: [
          ['Households with at least one computer', '36.1%', '33.9%'],
          ['Households with an internet service', '58.8%', '56.8%'],
          ['Residents from age 6 up using the internet anywhere', '79.2%', '81.1%']
        ] },
        { kind: 'source', html: 'Figures for 2025 from INEI\'s household survey (ENAHO), as tabulated in the Compendio Estadístico Perú 2026, first volume, tables 11.5, 11.6 and 11.13. Internet use there includes home, school, work and public cabins alike.' },
        { kind: 'two', mt: true,
          leftH3: 'What a class actually needs',
          left: [
            'A live class needs a screen big enough to see code, a microphone, and a connection that can hold a video call for an hour. A laptop or desktop is ideal. A tablet with a keyboard works for Scratch. A phone is fine for the free first class and for listening, but too small for typing Python week after week.',
            'If your home has internet but no computer, tell us before the first class. The mentor will plan the first weeks around what you have, and we will be honest if the course you want needs more.'
          ],
          rightH3: 'Where online beats travel',
          right: [
            'From Olmos or Mórrope to central Chiclayo is a long trip for an evening class, and Incahuasi is further still. Online, the same mentor reaches a learner in La Victoria and one in Ferreñafe at the same moment, with nobody on the road after dark.',
            'Because everything happens on screen, every learner also practises a skill school rarely teaches on purpose: managing files, sharing a screen, and explaining a problem clearly to someone who is not in the room.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'What school covers',
      h2: 'Do schools in the Lambayeque region teach programming?',
      lede: 'Not as a subject. Lambayeque\'s schools follow the national curriculum, the CNEB, which has no computing or programming area; digital skills are expected inside every subject instead. The regional education office is putting its effort into maths, with technology as a tool.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peruvian school stages, MINEDU\'s normative ages, and where coding appears', head: ['Stage', 'Grades', 'Age on 31 March', 'Programming on the timetable'], rows: [
          ['Primaria', '1° to 6°', '6 to 11', 'None; digital competency is transversal'],
          ['Secundaria, lower', '1° to 3°', '12 to 14', 'None; Matemática 4 hours, Inglés 3 hours a week'],
          ['Secundaria, upper', '4° and 5°', '15 and 16', 'None outside MINEDU\'s Lima Norte Python pilot']
        ] },
        { kind: 'source', html: 'Where this comes from: Law 28044, Peru’s general education law, which gives primaria six years and secundaria five; MINEDU’s table of normative ages, which takes each child’s age on 31 March; and the national curriculum (CNEB), for competency 28 and the weekly hours of the regular secundaria day. We read each of them in November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'What the regional office reports',
          left: [
            'On 22 July 2026, the Gerencia Regional de Educación de Lambayeque reported the close of its "IV Programa de Actualización en Matemática y TIC 2026", run with the Universidad Nacional Pedro Ruiz Gallo. The programme lasted 120 pedagogical hours over eight weeks and trained 84 maths teachers from the UGEL of Chiclayo, Lambayeque and Ferreñafe, with emphasis on GeoGebra and artificial intelligence.',
            'That is a sign of where the region is heading: teachers using software and AI to teach maths better. It is not the same as pupils learning to write programs themselves, which is the part we add.'
          ],
          rightH3: 'The size of the system',
          right: [
            'INEI\'s compendium, using MINEDU\'s school census, counts 115.8 thousand pupils in public primaria and 87.5 thousand in public secundaria in Lambayeque in 2025, and 21,826 teachers across all levels and sectors. Private schools add more pupils on top of the public figures.',
            'Across Peru, MINEDU counted 53,631 schools and 6,225,000 students when the 2026 school year began on 16 March 2026. Lambayeque follows the same national curriculum, so what is missing from the timetable in Lima is missing here too.'
          ] },
        { kind: 'p', mt: true, html: 'Our classes are not a school and lead to no Peruvian qualification. A child\'s colegio stays in charge of marks, promotion and certificates. What we add is regular, hands-on practice: the learner writes a program, runs it, finds out why it is wrong, and explains the fix out loud to a mentor. If you would like the national picture by grade, our <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">guide to coding and AI classes in Peru</a> sets it out in one table.' }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Every age',
      h2: 'Which of your courses fits a learner in Lambayeque?',
      lede: 'Age decides the starting point and interests decide the route. Course ages below are ours; the grade column is only a guide, since a birthday after 31 March moves a Peruvian child down a year.',
      body: [
        { kind: 'table', numCols: [], caption: 'Where learners in the Lambayeque region usually start (our recommendation, confirmed at the free class)', head: ['Age', 'Usual Peruvian grade', 'First course', 'First thing they make'], rows: [
          ['Six or seven', 'First or second year of primaria', 'Coding for Kids, in Scratch blocks', 'A moving story with sound'],
          ['Eight to eleven', 'Third year of primaria onwards', 'Scratch games, or AI literacy', 'A game that keeps score; a guessing bot'],
          ['Ten to fifteen', 'Late primaria, early secundaria', 'Maths Through Coding', 'A program that checks a percentage'],
          ['Thirteen to eighteen', 'Any year of secundaria', 'Python for Teens, later Java or statistics', 'A small data tool on a real file'],
          ['Eighteen or older', 'University or a job', 'Python, data analysis, AI tools', 'A report that updates itself']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Primaria', p: 'Lessons are brisk and playful. At six, a child moves blocks until a character walks across the screen; by ten, the same child is typing a loop that repeats it. Nobody in primaria is ever placed with teenagers.' },
          { h3: 'Secundaria', p: 'Teenagers write real Python, then choose Java, statistics or databases. This is also where contest thinking grows: reading a problem slowly, testing an idea, saying why it works.' },
          { h3: 'University and work', p: 'Undergraduates at the UNPRG or a private university and people with jobs are taught in adult groups, booked around lectures or shifts. Our learners run from age 6 all the way to 67.' }
        ] },
        { kind: 'p', mt: true, html: 'Parents whose child already speaks good English sometimes ask for the classes their cousins in Lima take. Our page on <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> describes that path, and every course on it is open to Lambayeque families on exactly the same terms. For a Spanish explanation to share with grandparents, there is <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish?',
      lede: 'No. Every class is live, online and taught in English only, by mentors based in India who speak clearly and slowly and adjust to how each learner speaks.',
      body: [
        { kind: 'two',
          leftH3: 'Where Lambayeque starts',
          left: [
            'EF\'s English Proficiency Index 2025 scores the city of Chiclayo 474 and the Lambayeque region 467, both in its low band. Peru as a whole scores 519, in the moderate band, and Lima city 555, the only Peruvian city in the high band.',
            'So for many children in Chiclayo, English is a skill still being built. We plan for that openly: during the free class the mentor listens for how easily the child follows spoken instructions, then tells you plainly whether to start in a group or one to one.'
          ],
          rightH3: 'How a mentor makes it work',
          right: [
            'Mentors use short sentences, repeat instructions in simpler words, write key words in the chat and wait for an answer. A learner who replies half in Spanish is understood and given the English word.',
            'Code helps too. A Scratch block or a line of Python looks the same in Chiclayo as anywhere else, and most of a lesson is building something on the shared screen. Many families tell us that the English becomes the second thing their child learns each week.'
          ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real Lambayeque project',
      h2: 'Why do four honest percentages add up to 101?',
      lede: 'The Gobierno Regional de Lambayeque publishes the list of every school service in the region as open data. Our students use it to meet a problem that every newspaper, school report and chart maker faces: round each share to a whole number and the total may not come out at 100.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Gobierno Regional de Lambayeque releases "Centros Educativos en la Región Lambayeque actualizados a junio 2025" through the national open-data portal (Plataforma Nacional de Datos Abiertos), with ODC-By, the Open Data Commons Attribution Licence, as its terms. Our copy, data_iiee_rl.csv, taken on 9 November 2026, holds 3,616 rows dated 1 July 2025.',
            'Each row is one school service, not one building: a primaria and a secundaria that share a site are two rows with the same Código Local. The column "Nivel / Modalidad" says which kind of service it is, from Inicial No Escolarizado to Superior Tecnológica.'
          ],
          rightH3: 'The question',
          right: [
            'What share of the region\'s school services are inicial, primaria, secundaria and everything else? A student groups the sixteen kinds of service into those four stages, counts them, divides by the total and rounds each share to a whole percentage, the way a newspaper would print it.',
            'Then they add the four percentages up as a check, expecting 100. The program below does exactly that.'
          ] },
        { kind: 'code', label: 'Version 1: round every share, then add them up', lang: 'Python', code: V1, note: 'It prints <code>Services: 3616</code>, <code>Shares: {\'Inicial\': 50, \'Other\': 6, \'Primaria\': 31, \'Secundaria\': 14}</code> and <code>Adds up to: 101</code>.' },
        { kind: 'p', mt: true, html: 'Nothing is wrong with the arithmetic. The exact shares are 49.585% for inicial, 30.725% for primaria, 13.772% for secundaria and 5.918% for the rest. Every one of them rounds up, so each gains a little, and the little gains add up to a whole extra point. Change the grouping and the total can just as easily come out at 99. Rounded parts do not have to add up to a rounded whole.' },
        { kind: 'p', html: 'There are two honest ways out. One is to print one decimal place and say that the parts may not sum exactly because of rounding. The other, when a chart or a table must show whole numbers that total 100, is the largest-remainder method: round every share down, see how many points are missing, and give them one at a time to the shares that lost the most when they were cut.' },
        { kind: 'code', label: 'Version 2: round down, then hand out the missing points by largest remainder', lang: 'Python', code: V2, note: 'It prints <code>Points handed out: 3 to [\'Other\', \'Secundaria\', \'Primaria\']</code>, <code>Shares: {\'Inicial\': 49, \'Other\': 6, \'Primaria\': 31, \'Secundaria\': 14}</code> and <code>Adds up to: 100</code>.' },
        { kind: 'p', mt: true, html: 'Rounded down, the four shares are 49, 30, 13 and 5, which make 97. Three points are missing. The leftovers are 0.918 for "other", 0.772 for secundaria, 0.725 for primaria and 0.585 for inicial, so the first three get a point each and inicial stays at 49. The total is now exactly 100. The price is that inicial shows as 49 even though 49.585 rounds to 50 on its own: no method can make every part look rounded the usual way and still hit 100, so a careful writer chooses one and says which.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4], caption: 'School services by province in the regional list, July 2025 (our counts from data_iiee_rl.csv)', head: ['Province', 'All services', 'Primaria', 'of which public', 'Secundaria', 'of which public'], rows: [
          ['Chiclayo', '1,881', '508', '184', '285', '93'],
          ['Lambayeque', '1,180', '422', '355', '151', '103'],
          ['Ferreñafe', '555', '181', '166', '62', '53']
        ] },
        { kind: 'source', html: 'Data: Centros Educativos en la Región Lambayeque actualizados a junio 2025, from the Gobierno Regional de Lambayeque via the national open-data portal; licence ODC-By (attribution). Every count in the table is our own. "Public" means a Gestión / Dependencia value starting with "Pública". All 737 rows for Inicial No Escolarizado carry the Código Local 0, because these community programmes have no school building of their own, which is why counting buildings needs a different program from counting services.' },
        { kind: 'p', mt: true, html: 'The province table is worth a second look. In the province of Chiclayo only 93 of 285 secundaria services are public, while in Ferreñafe 53 of 62 are. That is a fact about how the services are run, not about their quality, and it is the kind of pattern students learn to describe carefully rather than to judge.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 9, with counters.</strong> Share 10 sweets between 3 children as fairly as possible. Who gets the extra one, and why? That is the largest-remainder idea with no computer at all.',
          '<strong>Scratch, around 9 to 11.</strong> Make a list of four numbers, divide each by the total, round, and show the sum on screen. Try lists until the sum is 99.',
          '<strong>First Python, around 11 to 13.</strong> Run Version 1, then explain in your own words why 50 + 6 + 31 + 14 makes 101.',
          '<strong>Ages 13 and over.</strong> Write Version 2 yourself before reading ours, then repeat the shares for each province separately. Which provinces add up to 100 without any help?',
          '<strong>Going further.</strong> Count distinct buildings instead of services, using Código Local, and decide what to do with the 737 zeros before you trust the answer.'
        ] }
      ]
    },
    {
      id: 'maths',
      eyebrow: 'Maths and contests',
      h2: 'How do Lambayeque students do in maths, and can they enter the ONEM?',
      lede: 'They can, through their school, and many do: the regional office reported more than 1,700 students at the UGEL stage of the 2026 national school maths olympiad. Results on the national assessments show why steady practice matters.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Share of pupils reaching the satisfactory level in maths, 2025 national assessment', head: ['Grade assessed', 'Lambayeque', 'Peru'], rows: [
          ['4° de primaria', '25.1%', '30.0%'],
          ['2° de secundaria', '9.1%', '12.7%']
        ] },
        { kind: 'source', html: 'Source: INEI, Compendio Estadístico Perú 2026, tomo 1, cuadros 5.53 and 5.54, from MINEDU\'s Unidad de Medición de la Calidad Educativa. The percentages are of pupils assessed in each grade.' },
        { kind: 'two', mt: true,
          leftH3: 'The ONEM in Lambayeque, 2026',
          left: [
            'The Gerencia Regional de Educación reported on 21 August 2026 that more than 1,700 students from the provinces of Chiclayo, Lambayeque and Ferreñafe took part in the UGEL stage of Peru\'s national school maths olympiad, the ONEM. More than 950 secundaria students sat it in the UGEL Chiclayo and 752 in the UGEL Lambayeque.',
            'Nationally, the 2026 school stage was held on Wednesday 8 July 2026, with three levels (1° and 2°, 3° and 4°, and 5° de secundaria) and a paper of ten questions in two hours. Students enter through their own school; we are not connected with MINEDU, the GRE or the ONEM.'
          ],
          rightH3: 'What we do about it',
          right: [
            'A satisfactory result in maths depends on reading a problem carefully, choosing a method and checking the answer. Those are the same habits a good programmer uses, which is why our maths and coding classes share them.',
            'For olympiad preparation we write our own problems in the ONEM spirit and never copy the organiser\'s papers. The percentages project above is one example: a short question that rewards thinking before calculating. Families who want maths taught in English as its own subject can read about our <a class="ag-inline-link" href="/profesor-de-matematicas-en-ingles-peru">maths teachers in English for Peru</a>.'
          ] },
        { kind: 'p', mt: true, html: '<strong>A practice problem of ours.</strong> Three classes have 11, 13 and 16 pupils, so the shares of the total are 27.5%, 32.5% and 40%. Rounded to whole numbers, what do they add up to? Using the largest-remainder method, which class gives up its rounding? (Ours, written for this page. Answer: 28 + 33 + 40 = 101 when each rounds half up; rounding down gives 27, 32 and 40, one point is missing, and the two leftovers of 0.5 tie, so a rule for ties must be chosen and stated, for example the larger class first, giving 27, 33 and 40.)' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time would the classes be in Chiclayo?',
      lede: 'Whenever suits you. Chiclayo shares one clock with the rest of Peru, five hours behind UTC in every month, and mentors fit their day to yours.',
      body: [
        { kind: 'table', numCols: [], caption: 'Six sample hours in Chiclayo and the same moment for a mentor in India (conversions, not a timetable)', head: ['Peru time in Chiclayo', 'India time', 'Day in India'], rows: [
          ['06:30', '17:00', 'Same day'],
          ['08:00', '18:30', 'Same day'],
          ['10:30', '21:00', 'Same day'],
          ['14:00', '00:30', 'Next day'],
          ['17:30', '04:00', 'Next day'],
          ['20:30', '07:00', 'Next day']
        ] },
        { kind: 'source', html: 'Peru keeps UTC minus 5 hours with no summer time (tz database zone America/Lima; Peru last changed its clocks in 1994). India sits at UTC+5:30 and never changes its clocks either, which keeps it 10 hours 30 minutes ahead of Chiclayo on every date.' },
        { kind: 'p', mt: true, html: 'A slot agreed in the summer holidays is still the same slot in the school year, because neither country moves its clocks. Bookings are made on your own clock; the mentor sees the converted hour on theirs. Families often start in January or February and keep the slot when school returns in March; our <a class="ag-inline-link" href="/peru-summer-holiday-coding-classes-online">summer holiday coding page for Peru</a> explains how that start works.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What a learner in the Lambayeque region can do, stage by stage',
    lede: 'Our own milestones, used for every learner whatever their age, so families can see progress as things built rather than hours spent.',
    table: { caption: 'From first blocks to trustworthy numbers (our milestones)', head: ['Step', 'Usual age', 'What they can do by then'], rows: [
      ['1. Sequence', 'Six or seven', 'Order instructions so a sprite walks, turns and speaks'],
      ['2. Repeat', 'Seven to nine', 'Wrap actions in loops; respond to a key or a click'],
      ['3. Count', 'Eight to ten', 'Hold a running tally in a variable and display it'],
      ['4. Type', 'Nine to twelve', 'Type Python that decides, repeats and is split into functions'],
      ['5. Summarise', 'Age 11 to adult', 'Turn a real file into counts and shares'],
      ['6. Publish honestly', 'Age 13 to adult', 'Round, check the total and say how the numbers were made']
    ] },
    left: { h3: 'For parents', ps: [
      'The Lambayeque project sits at steps 5 and 6: producing a figure, and then being able to defend it.',
      'Every month the mentor tells you what was built, what was hard and what comes next.'
    ] },
    right: { h3: 'For learners', ps: [
      'If your percentages add up to 101, nothing is broken. Find out where the extra point came from.',
      'A good table says how its numbers were rounded.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Lambayeque learners',
    lede: 'Children first, adults last. All nine run live and in English, taught by a mentor who stays with the group, whether that group is fifteen to twenty learners or just one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Primaria and early secundaria', courses: [
        { code: 'LAM / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'From an empty stage to real games, one block at a time.' },
        { code: 'LAM / KIDS / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI guesses, where it goes wrong, and how to check it.' },
        { code: 'LAM / KIDS / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Puzzles and step-by-step plans that make later coding easier.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Secundaria', courses: [
        { code: 'LAM / TEEN / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Averages, spread, chance and honest charts, worked with real data.' },
        { code: 'LAM / TEEN / 02', slug: 'mysql-mastery-for-teens', title: 'MySQL for teens', blurb: 'Questions asked of a database in SQL, from the first query.' },
        { code: 'LAM / TEEN / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Classes, objects and larger programs for 13 to 18 year olds.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'LAM / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'From a first line of Python to tools you use at work.' },
        { code: 'LAM / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Spreadsheets, SQL, Python and dashboards on real files.' },
        { code: 'LAM / ADULT / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI without code', blurb: 'Excel, Sheets and Power BI with AI helpers, for non-programmers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'A normal week of classes, seen from Lambayeque',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early morning', l: 'Dawn in Chiclayo is evening in India, a calm hour before school starts.' },
      { time: 'Afternoon', l: 'After the school day, or after lectures; you choose the day.' },
      { time: '1-on-1', l: 'A private slot agreed directly with your mentor.' }
    ],
    cells: [
      { h3: 'A regular mentor', p: 'The same person most weeks, who comes to know the learner.' },
      { h3: 'Patient English', p: 'Plain words, repeated when needed, and time to answer.' },
      { h3: 'The learner types', p: 'Mentors guide; learners write and fix their own code.' },
      { h3: 'Age-matched groups', p: 'Children, teenagers and adults are taught apart.' },
      { h3: 'Monthly notes', p: 'A short report: finished projects, sticking points, next goals.' },
      { h3: 'Your choice of format', p: 'Fifteen to twenty in a group, or one to one.' }
    ]
  },

  projectsH2: 'Projects our older learners have finished',
  projectsLede: 'Students who stay with it build tools other people use. A few appear below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> show many more.',
  reviewsLede: 'Parents and learners on Google, in their own words.',

  fees: {
    h2: 'Fees for learners in the Lambayeque region',
    lede: 'Plans are monthly and priced in US dollars. The card payment goes through in dollars; the soles figure on your statement depends on the exchange rate your bank applies that day, so it can move a little between months.',
    free: ['One free class to start', 'A puzzle and a first program', 'No card details asked for'],
    group: ['Fifteen to twenty learners of a similar age', 'A regular mentor', 'Two live classes each week', 'Paid monthly, stop when you wish'],
    one: ['A mentor for one learner', 'Projects built around the learner\'s goals', 'Days and hours you choose']
  },

  faq: {
    eyebrow: 'Lambayeque families ask',
    h2: 'Online coding and AI classes in Lambayeque: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All teaching is in English, live and online, with no Spanish-language groups. Mentors keep their English slow and clear, follow the learner\'s accent and speed, and when a child slips into Spanish they reply with the English word.' },
      { q: 'Do you have a centre in Chiclayo?', a: 'No. All our classes are online, so there is no centre to visit. A learner in Chiclayo, José Leonardo Ortiz, Lambayeque, Ferreñafe or Incahuasi joins from home in exactly the same way.' },
      { q: 'From what age can my child start?', a: 'Six is the youngest, using Scratch blocks with no typing. Typed Python usually follows at nine or ten. A teenager with no experience can begin at thirteen, and adults are welcome at any point in life.' },
      { q: 'Do schools in Lambayeque teach coding?', a: 'Not as a subject. The national curriculum treats digital skills as a competency inside every area, and the secundaria timetable has no computing subject. The regional office has trained maths teachers in GeoGebra and AI, which helps teaching, but pupils rarely write programs of their own at school.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru is always 10 hours 30 minutes behind India, so 08:00 in Chiclayo is 18:30 for the mentor.' },
      { q: 'Is our internet good enough?', a: 'Usually. In 2025, INEI found an internet service in 58.8% of Lambayeque households. A class needs a connection that holds a video call for an hour; a laptop or desktop is best, and the free class is a good test of your set-up.' },
      { q: 'Can you help with the ONEM?', a: 'Yes, by training careful reasoning on problems our own team writes; the organiser\'s papers are never copied. Entry is through the student\'s colegio, and the 2026 school round took place on 8 July. Modern Age Coders has no link with MINEDU, the GRE Lambayeque or the olympiad itself.' },
      { q: 'Can university students and adults join?', a: 'Yes. Adults have their own groups. Most begin with Python, then branch into spreadsheets and data or AI tools, scheduled around lectures or a working day.' },
      { q: 'How are fees charged?', a: 'Once a month, by card, in US dollars, with your bank doing the conversion to soles. Prices shown to someone browsing from India appear in rupees instead. Nothing is charged for the first class.' },
      { q: 'Will my child get a certificate?', a: 'Where a course includes one, it is a Modern Age Coders completion certificate that records the work done. No Peruvian body issues or backs it: not MINEDU, a UGEL, a university or a school, and it carries no school credit.' },
      { q: 'What is the Lambayeque project on this page?', a: 'An original Python lesson on the regional government\'s open list of school services: rounding four shares gives 101, and the largest-remainder method fixes the total at 100. Older children and teenagers work through it in class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for Lambayeque families and adult learners.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The national guide: grades, ages and every Peru page.' },
      { href: '/coding-classes-in-arequipa-peru', label: 'Coding classes in Arequipa', p: 'Another regional city, with its own open-data project.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Where most six to eight year olds begin.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'What a 13 to 18 year old can safely learn about AI.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'For anyone who never had the chance at school.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, step by step.' }
    ]
  },

  start: {
    h2: 'Try a first lesson free, from anywhere in Lambayeque',
    lede: 'In that first lesson the learner solves a small puzzle and writes something that runs. Afterwards the mentor recommends a course, a group or one to one, and a pace, based on what they saw.',
    readFirst: 'Want more detail before booking? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse <a class="ag-inline-link" href="/courses">all courses</a> and their syllabuses.',
    note: 'Mentors teach from India, live, and only in English. Messages on WhatsApp get the fastest answer; please write in English.',
    formNote: 'Free, no card, and no obligation to continue.'
  },

  footer: {
    cols: [
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI in Peru' },
        { href: '/english-medium-coding-classes-lima', label: 'English-medium classes, Lima' },
        { href: '/coding-classes-in-arequipa-peru', label: 'Arequipa' },
        { href: '/profesor-de-matematicas-en-ingles-peru', label: 'Maths in English' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Rounded parts need not sum to 100'
  },

  personalityCss: `
.ag-root.ag-cau .ag-hero h1 { letter-spacing: -0.012em; max-width: 22ch; }
.ag-root.ag-cau .ag-capsule { border-left-width: 5px; }
.ag-root.ag-cau .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cau .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cau .ag-code-head b { text-transform: uppercase; letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadros 1 and 3), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017, Compendio Estadístico Perú 2026 (cuadros 1.7, 1.8, 5.16, 5.22, 5.53, 5.54, 5.66, 5.75, 11.5, 11.6, 11.13); Ley 28044; MINEDU Edades normativas and CNEB; GRE Lambayeque news of 22 July and 21 August 2026; ONEM 2026 (UGEL 06 oficio, El Peruano); EF EPI 2025; tz database. Data: GORE Lambayeque, Centros Educativos en la Región Lambayeque actualizados a junio 2025, ODC-By.',
    localProject: 'Why do four honest percentages add up to 101? An original Python project on the GORE Lambayeque list of 3,616 school services (ODC-By): Version 1 groups services into inicial, primaria, secundaria and other, rounds each share and prints 50, 6, 31 and 14, adding up to 101; Version 2 rounds down, finds 3 missing points and gives them by largest remainder to other, secundaria and primaria, printing 49, 6, 31 and 14, adding up to 100. Lesson family: rounded parts need not sum to the rounded whole; largest-remainder rounding.',
    requiredMentions: ['data_iiee_rl.csv', 'Adds up to: 101', 'Points handed out: 3', '1,404,633', '552,508', '142,542', '752 in the UGEL Lambayeque', '3,467 metres', 'Rounded parts need not sum to 100'],
    sources: [
      { claim: 'Department, province and district populations of Lambayeque, 2025, and censada by age group.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Chiclayo city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Single centros poblados of Lambayeque, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto14.xlsx' },
      { claim: 'Area, households with computer and internet, internet use, school enrolment, teachers, assessment results and UNPRG enrolment.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'ONEM 2026 UGEL stage in Lambayeque: more than 1,700 students; UGEL Lambayeque 752.', url: 'https://www.gob.pe/institucion/regionlambayeque-gre/noticias/1444650-talento-matematico-de-lambayeque-destaca-en-la-onem-2026' },
      { claim: 'IV Programa de Actualización en Matemática y TIC 2026: 120 hours, 84 maths teachers, GeoGebra and AI.', url: 'https://www.gob.pe/institucion/regionlambayeque-gre/noticias/1423330-culmina-con-exito-el-iv-programa-de-actualizacion-en-matematica-y-tic-para-docentes-de-secundaria-en-lambayeque' },
      { claim: 'Regional list of school services and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/centros-educativos-en-la-regi%C3%B3n-lambayeque-actualizados-junio-2025' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 scores for Chiclayo, Lambayeque, Peru and Lima.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A 2025 population for Chiclayo city: INEI has not published 2025 city figures, so the 2017 conglomerate figure is used and labelled.',
      'A combined Lambayeque total made by adding provinces, districts or centros poblados: never summed.',
      'Any judgement of school quality from the public and private counts: the page describes, it does not rank.',
      'Spanish-language teaching: every class is in English.',
      'Any connection with MINEDU, the GRE Lambayeque, the UNPRG, the ONEM, the GORE Lambayeque or any school: none.',
      'Naming Lambayeque schools as sources of students: refused.',
      'Officials\' names from the GRE news releases: left out.'
    ]
  }
};
