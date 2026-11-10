// SHIP: region | Callao: Peru's port province beside Lima, seven districts, best connected | intervals: count what is in progress, not what starts (timetable sweep)
'use strict';
// Callao region (ag- region page, Peru cluster row PE170, P5; alloc: regions, caz, #0E4B00). Written 2026-11-09.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; USD only, through the template's data-price anchors.
// Spine: Callao is treated as its own region, the Constitutional Province of Callao, not as part of Lima: seven
// districts on 128.3 km2, the best home internet of the regions on this writer's list, an English score second only to
// Lima's, and a public university (UNAC) that publishes its own timetable as open data. The project uses that timetable.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/<slug>/ and pe/src/inei):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (places.tsv; tab/tsv_ind_00/sheet2): PROV.
//    CONSTITUCIONAL DEL CALLAO 1094209 total (censada 1043538); districts CALLAO 487920, VENTANILLA 355722, BELLAVISTA
//    80953, LA PERLA 68082, MI PERÚ 52102, CARMEN DE LA LEGUA REYNOSO 45667, LA PUNTA 3763. Capital Callao (Compendio
//    2026 cuadro 1.8). Never summed.
//  - Same tabulado, Cuadro N° 3 (sheet4): Callao censada "96501" aged 6 to 11 and "105284" aged 12 to 17.
//  - INEI Lib1541 dpto07.xlsx (2017, single centros poblados): CALLAO 451 260 at "27" m; VENTANILLA 315 600; BELLAVISTA
//    74 851; LA PERLA 61 417; MI PERU 45 297; CARMEN DE LA LEGUA REYNOSO 42 240; LA PUNTA 3 829. INEI Lib1539 Cuadro N° 1.9
//    counts Callao inside "Lima Metropolitana" (9,562,280 in 2017, Lima province plus Callao); not ranked separately.
//  - INEI Compendio Estadístico Perú 2026, tomo 1: 1.7 "Provincia Constitucional del Callao 1/ 128,3" km2; 11.5 households
//    with a computer "Prov. Const. del Callao ... 44,8" (Total 33,9; Lima Metropolitana 47,3); 11.6 households with
//    internet "76,5" (Total 56,8; Lima Metropolitana 76,5); 11.13 people aged 6+ using internet "88,3" (Total 81,1; Lima
//    Metropolitana 89,0); 5.53 2025 4° primaria satisfactory maths 34,7 (30,0), reading 41,3 (32,7); 5.54 2025 2°
//    secundaria maths 12,1 (12,7), reading 20,3 (18,5); 5.16 public primaria 2025 "68,3" thousand; 5.22 public
//    secundaria "55,9"; 5.75 teachers 2025 "14 738"; 5.66 Universidad Nacional del Callao 2025 "9 746".
//  - DRE Callao (DREC), gob.pe news 27 June 2024 (drec-onem2024.html): "comenzó la vigésima edición de la Olimpiada
//    Nacional Escolar de Matemática (ONEM) 2024"; "La segunda sesión de pruebas, para el turno tarde, está programada de
//    1:00 p.m. a 3:00 p.m."
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): stateScore lima "moderate" 544, callao "moderate" 518 (second of
//    the 15 regions listed); Peru 519; Lima city 555 high.
//  - National (verified raw copies under pe/facts-school/src): Ley 28044; Edades normativas; CNEB competency 28 and
//    secundaria hours; MINEDU 16 March 2026 "53 631 colegios ... 6 225 000 estudiantes"; Fábrica de Programadores (1,000
//    pupils, 4° and 5°, Lima Norte, Python, PCEP, July 2025); ONEM 2026 ("miércoles 08 de Julio", ten items, two hours;
//    national stage 11 October 2026, Huampaní); OPI by UTEC (free; 2025 rules Fase 2 C++ only, generative AI banned).
//  - Time: tzdata America/Lima UTC-5 (last Peru rule 1994); Asia/Kolkata UTC+5:30; India 10 h 30 min ahead all year.
//  - Data: Universidad Nacional del Callao (UNAC), "Programación Académica – [Universidad Nacional del Callao - UNAC]",
//    Plataforma Nacional de Datos Abiertos, https://www.datosabiertos.gob.pe/dataset/programaci%C3%B3n-acad%C3%A9mica-%E2%80%93-
//    universidad-nacional-del-callao-unac, licence "Open Data Commons Attribution License" (dc:license on the raw page),
//    modified 2025-11-04. Resource "Programacion Academica 2025B - Pregrado" saved as
//    Programacion-Academica-2025B-Pregrado.csv, 264,532 bytes, sha256 c9744180...0e5d7b, 2,385 section rows, UTF-8 with
//    BOM, 17 escuelas, 1,027 course codes, HORARIO like "(T) Jue 11:20 a 13:00  (P) Mar 08:00 a 11:20".
// Our own calculations (scratchpad pe/r2/callao/v1.py, v2.py; python3 -I on the downloaded file):
//  v1 prints: Sessions read: 3505 / Busiest start: ('Jue', '08:00') 3397 seats
//  v2 prints: Blocks with a class: 102 / Busiest block: ('Jue', '10:30') 3832 seats in use / Lun 08:50 3726 /
//    Mar 09:40 3639 / Mié 09:40 3665 / Jue 10:30 3832 / Vie 10:30 3139 / Sáb 10:30 1311
//  Profile: sessions T 1,668, P 1,296, L 541; Saturday 136 sessions; durations 50 to 300 minutes, 100 most common
//    (2,319); enrolment column sums to 58,799 seat-registrations (not people); largest section 86.
// Lesson family: intervals. Counting the classes that start at a moment is not counting the classes in progress;
// expand each session over the blocks it covers (a sweep) before finding the busiest moment.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'import re',
  '',
  'SESSION = re.compile(r"\\((\\w)\\)\\s*(\\w+)\\s+(\\d\\d:\\d\\d)\\s+a\\s+(\\d\\d:\\d\\d)")',
  '',
  'starting = {}',
  'sessions = 0',
  'with open("Programacion-Academica-2025B-Pregrado.csv", encoding="utf-8-sig") as timetable:',
  '    for section in csv.DictReader(timetable):',
  '        seats = int(section["N° MATRICULADOS"])',
  '        for kind, day, start, end in SESSION.findall(section["HORARIO"]):',
  '            sessions += 1',
  '            key = (day, start)',
  '            starting[key] = starting.get(key, 0) + seats',
  '',
  'busiest = max(starting, key=starting.get)',
  'print("Sessions read:", sessions)',
  'print("Busiest start:", busiest, starting[busiest], "seats")'
].join('\n');

const V2 = [
  'import csv',
  'import re',
  '',
  'SESSION = re.compile(r"\\((\\w)\\)\\s*(\\w+)\\s+(\\d\\d:\\d\\d)\\s+a\\s+(\\d\\d:\\d\\d)")',
  '',
  'def minutes(clock):',
  '    h, m = clock.split(":")',
  '    return int(h) * 60 + int(m)',
  '',
  'def clock(mins):',
  '    return f"{mins // 60:02d}:{mins % 60:02d}"',
  '',
  'in_class = {}',
  'with open("Programacion-Academica-2025B-Pregrado.csv", encoding="utf-8-sig") as timetable:',
  '    for section in csv.DictReader(timetable):',
  '        seats = int(section["N° MATRICULADOS"])',
  '        for kind, day, start, end in SESSION.findall(section["HORARIO"]):',
  '            t = minutes(start)',
  '            while t < minutes(end):              # every 50-minute block the class covers',
  '                key = (day, clock(t))',
  '                in_class[key] = in_class.get(key, 0) + seats',
  '                t += 50',
  '',
  'busiest = max(in_class, key=in_class.get)',
  'print("Blocks with a class:", len(in_class))',
  'print("Busiest block:", busiest, in_class[busiest], "seats in use")',
  'for day in ("Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"):',
  '    top = max((k for k in in_class if k[0] == day), key=in_class.get)',
  '    print(day, top[1], in_class[top])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Callao region' },
  slug: 'online-coding-and-ai-classes-callao-region-peru',
  code: 'caz',
  accent: '#0E4B00',
  accentRationale: 'Callao region: a deep harbour-buoy green #0E4B00, allocated to this row; contrast 9.78 on #FBF8F2, 9.20 on #F5F1E8 and 8.42 on #EDE7DA, all far above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Callao region, Peru',
  title: 'Online Coding and AI Classes, Callao Region, Peru',
  description: 'Live online coding and AI classes in English across Callao: Ventanilla, Bellavista, La Perla, La Punta and more, with census facts and a UNAC timetable project.',
  ogDescription: 'Coding, AI and maths taught live online in English for children, teenagers and adults in the Constitutional Province of Callao: its seven districts, school facts, connectivity, and a Python project on the Universidad Nacional del Callao\'s open timetable.',
  twitterDescription: 'Callao\'s seven districts: live online coding and AI in English, with census and school facts and a university timetable project.',
  pageName: 'Online Coding and AI Classes in the Callao Region, Peru',
  webPageDescription: 'A guide for families and adult learners in the Constitutional Province of Callao to live online coding, AI and maths classes taught in English, built from INEI census and compendium tables, MINEDU curriculum facts, a DRE Callao release, EF EPI 2025, and an original Python project on the UNAC 2025B timetable (ODC-By).',
  courseDescription: 'Live online coding, AI and maths classes in English for learners in Callao, Peru: Roblox, web and Python for children, Java, JavaScript and AI coding agents for teenagers, and Java, full stack and algorithms for university students and adults, one to one or in a group of fifteen to twenty, at hours you choose.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Callao region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#districts', label: 'Seven districts' },
    { href: '#lessons', label: 'School' },
    { href: '#timetable', label: 'UNAC project' },
    { href: '#english', label: 'English' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Callao region &middot; Live online, in English &middot; Ages 6 to adult',
  h1: 'Online coding and AI classes in the Callao region',
  lede: 'Callao sits beside Lima but is not part of it: it is Peru\'s Constitutional Province, with its own seven districts, its own regional government and its own education office. It is also the best connected region on our list. This page covers Callao\'s people and schools, which of our live online courses fits each age, how English-taught classes work, and a project on the Universidad Nacional del Callao\'s own timetable, where the busiest start time is not the busiest moment.',
  secondaryCta: { href: '#timetable', label: 'See the UNAC timetable project' },
  wa: 'Hello Modern Age Coders, we live in Callao, Peru and would like live coding or AI classes in English. Could we arrange a free class?',
  heroNote: 'Teaching online since 2020 &middot; above 10,000 learners worldwide &middot; mentors who adapt their English',
  spec: [
    ['Ages', 'Six to adult, children and adults kept apart'],
    ['Districts', 'Callao, Ventanilla, Bellavista, La Perla, Mi Perú, Carmen de la Legua Reynoso, La Punta'],
    ['What', 'Coding, AI, web development and maths'],
    ['Size', 'One to one, or groups of fifteen to twenty'],
    ['When', 'Your choice of days and hours'],
    ['First class', 'Free; no card asked for']
  ],
  capsuleQ: 'Straight answer',
  capsule: 'Modern Age Coders runs live online coding, AI and maths classes for learners in all seven districts of the Constitutional Province of Callao, and every class is in English. Children from 6 build Roblox games, websites and first Python programs; secundaria students learn Java, JavaScript and how to use AI coding agents responsibly; university students and adults take Java, full stack development and algorithms. A mentor teaches each class over video, to a group of fifteen to twenty or to one learner, on days and at hours your family sets.',

  picks: {
    eyebrow: 'Callao favourites',
    h2: 'Three courses Callao learners often choose first',
    lede: 'A games course for children, a first serious language for teenagers, and the problem-solving course university students ask about most. The catalogue below has nine more.',
    items: [
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'CAL / 01', title: 'Roblox Game Coding', note: 'For children of about 8 to 14 who already play Roblox and want to make their own games. They script in Luau and learn why a game behaves the way it does.' },
      { course: 'java-programming-masterclass-for-teens', code: 'CAL / 02', title: 'Java for Teens', note: 'For 13 to 18 year olds, from a first class to object-oriented programs. Java is also the language many Peruvian university courses use in their first programming years.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'CAL / 03', title: 'Data Structures and Algorithms', note: 'For university students and graduates. The problem-solving behind technical interviews and contests, taught step by step from the beginning.' }
    ]
  },

  sections: [
    {
      id: 'districts',
      eyebrow: 'Seven districts',
      h2: 'Is Callao part of Lima, and how many people live there?',
      lede: 'No, it is a region of its own. The 2025 census counted 1,094,209 people in the Constitutional Province of Callao, on just 128.3 square kilometres, divided into seven districts. Its capital is Callao.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Callao\'s districts, 2025 census and 2017 main centro poblado', head: ['District', 'Population 2025', 'Main centro poblado, 2017'], rows: [
          ['Callao', '487,920', '451,260'],
          ['Ventanilla', '355,722', '315,600'],
          ['Bellavista', '80,953', '74,851'],
          ['La Perla', '68,082', '61,417'],
          ['Mi Perú', '52,102', '45,297'],
          ['Carmen de la Legua Reynoso', '45,667', '42,240'],
          ['La Punta', '3,763', '3,829']
        ] },
        { kind: 'source', html: 'District populations: INEI, 2025 census, Indicadores demográficos, Cuadro N° 1 (population including INEI\'s estimate of people missed). 2017 column: INEI\'s Directorio Nacional de Centros Poblados, the largest centro poblado in each district, people counted. Province total 1,094,209 and area from INEI; the columns come from different censuses and are never combined.' },
        { kind: 'two', mt: true,
          leftH3: 'Next to Lima, counted apart',
          left: [
            'INEI treats Callao as one of Peru\'s 26 department-level units, alongside Lima Metropolitana and Región Lima. In its 2017 table of capital cities, though, it counts Callao inside the built-up area it calls Lima Metropolitana, which is why Callao has no separate "city" figure.',
            'For families this is mostly a matter of administration: Callao\'s schools answer to the Dirección Regional de Educación del Callao, not to Lima\'s office. For an online class it makes no difference at all, because the class reaches Ventanilla or La Punta as easily as Miraflores.'
          ],
          rightH3: 'Children and teenagers in Callao',
          right: [
            'The 2025 census counted 96,501 people aged 6 to 11 and 105,284 aged 12 to 17 in Callao, the ages of primaria and secundaria.',
            'Those are people the census interviewed; the headline 1,094,209 also includes INEI\'s estimate of people it could not count. In 2025 Callao\'s public schools taught 68.3 thousand primaria pupils and 55.9 thousand secundaria students, with 14,738 teachers across all levels and sectors.'
          ] },
        { kind: 'p', mt: true, html: 'Most of Callao\'s people live in two districts: Callao itself, around the port and the old town, and Ventanilla to the north. Bellavista, La Perla and Carmen de la Legua Reynoso sit between the port and Lima, Mi Perú lies beyond Ventanilla, and La Punta, the smallest district, occupies the tip of the peninsula. Lima families reading this may prefer our page on <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>; the classes are the same.' }
      ]
    },
    {
      id: 'online',
      tint: 'tint',
      eyebrow: 'Connectivity',
      h2: 'How well connected are Callao homes?',
      lede: 'Very well by Peruvian standards. In 2025, 76.5% of Callao households had an internet service, the same share as Lima Metropolitana and far above the national 56.8%. Of people aged 6 and over, 88.3% used the internet.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Callao beside Lima Metropolitana and Peru, 2025 (percent, INEI household survey)', head: ['Indicator', 'Callao', 'Lima Metropolitana', 'Peru'], rows: [
          ['Households with a computer', '44.8', '47.3', '33.9'],
          ['Households with an internet service', '76.5', '76.5', '56.8'],
          ['People aged 6+ who use the internet', '88.3', '89.0', '81.1']
        ] },
        { kind: 'source', html: 'Compendio Estadístico Perú 2026, first volume, cuadros 11.5, 11.6 and 11.13 (INEI, from ENAHO). INEI\'s footnote: Lima Metropolitana here means the 43 districts of the province of Lima, without Callao.' },
        { kind: 'two', mt: true,
          leftH3: 'What that means in practice',
          left: [
            'Most Callao families who ask about classes already have what a live lesson needs: a connection that holds a video call, a laptop or desktop for typed code, and a corner quiet enough to hear the mentor. That makes Callao one of the easiest places in Peru to start online.',
            'Fewer than half of households have a computer, though, so a family may need to share one between siblings. Separate time slots, which our flexible scheduling allows, usually solve that.'
          ],
          rightH3: 'Why online instead of an academy',
          right: [
            'From Ventanilla or Mi Perú, an evening class in Miraflores or San Isidro means a long trip each way. Online, the time goes on learning, and nobody crosses the city after dark.',
            'Online also means the class keeps going through holidays and changes of school, because it follows the family\'s calendar rather than any building\'s opening hours.'
          ] }
      ]
    },
    {
      id: 'lessons',
      eyebrow: 'What school covers',
      h2: 'Do Callao schools teach coding, and how are pupils doing?',
      lede: 'Coding is not a school subject in Callao or anywhere in Peru; the national curriculum has no computing area. On the 2025 national assessment, Callao\'s 4° de primaria pupils finished above the national average in both maths and reading.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Satisfactory results on the 2025 national assessment, Callao and Peru (percent of pupils assessed)', head: ['Grade and subject', 'Callao', 'Peru'], rows: [
          ['4° primaria, maths', '34.7', '30.0'],
          ['4° primaria, reading', '41.3', '32.7'],
          ['2° secundaria, maths', '12.1', '12.7'],
          ['2° secundaria, reading', '20.3', '18.5']
        ] },
        { kind: 'source', html: 'MINEDU\'s Unidad de Medición de la Calidad Educativa, as reported in INEI\'s 2026 compendium, cuadros 5.53 and 5.54.' },
        { kind: 'two', mt: true,
          leftH3: 'The curriculum and the gap',
          left: [
            'Peru\'s curriculum, the CNEB, makes digital skills a transversal competency, number 28, to be used in every area. No area teaches programming. The regular secundaria week has 4 hours of Matemática and 3 of Inglés, and that is where English and maths stop.',
            'MINEDU\'s Fábrica de Programadores pilot, launched in July 2025, teaches Python to 1,000 pupils of 4° and 5° de secundaria in Lima Norte, preparing them for the PCEP exam. It is the closest thing to school coding nearby, and it does not cover Callao.'
          ],
          rightH3: 'Maths contests in Callao',
          right: [
            'The DRE Callao reported on 27 June 2024 that the twentieth ONEM had begun "en todo el Callao", with a second, afternoon session from 1 p.m. to 3 p.m. In 2026 the national school stage was on Wednesday 8 July 2026: ten questions in two hours, entered through the student\'s school.',
            'For programmers there is the OPI, run free by UTEC for every secundaria student; its 2025 rules allowed only C++ in the final round and banned generative AI. We prepare students for both kinds of thinking with our own problems and have no link with MINEDU, the DREC, UTEC or either contest.'
          ] },
        { kind: 'p', mt: true, html: 'Under Law 28044, primaria lasts six years and secundaria five, and MINEDU fixes a child\'s grade by their age on 31 March. Across Peru, 6,225,000 students in 53,631 schools started the 2026 school year on 16 March 2026. Our classes sit alongside that system: the colegio keeps marks and promotion, and we add regular, hands-on practice. Our <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru guide</a> sets out every grade and age in a single table.' }
      ]
    },
    {
      id: 'timetable',
      tint: 'tint',
      eyebrow: 'A real Callao project',
      h2: 'When is the Universidad Nacional del Callao at its busiest?',
      lede: 'UNAC publishes its undergraduate timetable as open data: every section, its enrolment and its class times. Our students use it to learn how to count things that last a while. Counting the classes that start at a given time is easy; counting the classes that are going on at that time is the real question, and the answers differ.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is UNAC\'s "Programación Académica", published by the Universidad Nacional del Callao on the Plataforma Nacional de Datos Abiertos under the Open Data Commons Attribution Licence (ODC-By). We used its resource for the 2025B undergraduate term, downloaded on 9 November 2026.',
            'The file has 2,385 section rows across 17 schools, from Administración to Matemática and Ingeniería de Sistemas. Each row gives the number enrolled and a HORARIO text such as "(T) Jue 11:20 a 13:00 (P) Mar 08:00 a 11:20": a theory session on Thursday and a practical on Tuesday. In total there are 3,505 sessions, most of them 100 minutes long, built on 50-minute blocks.'
          ],
          rightH3: 'The question',
          right: [
            'At what moment of the week are the most enrolled seats in use? A first program reads each session, notes its day and start time, and adds the enrolment to that slot. The slot with the biggest total wins.',
            'One caution before we start: a student enrolled in five courses appears five times, so these are seats, not people. The enrolment column adds up to 58,799 seat registrations; UNAC\'s own headcount, 9,746 undergraduates in 2025 according to INEI\'s compendium, is far smaller.'
          ] },
        { kind: 'code', label: 'Version 1: add up enrolment by start time', lang: 'Python', code: V1, note: 'It prints <code>Sessions read: 3505</code> and <code>Busiest start: (\'Jue\', \'08:00\') 3397 seats</code>.' },
        { kind: 'p', mt: true, html: 'Thursday at 08:00 is when the most seats begin a class. But a class that starts at 08:00 and runs to 09:40 is still going at 08:50, and one that started at 08:00 for a three-hour practical is still going at 10:30. Version 1 counts each class once, at its first minute, so a long class weighs no more than a short one, and a class that started earlier is invisible a block later.' },
        { kind: 'p', html: 'The fix is to expand every session into the 50-minute blocks it covers and add its enrolment to each of them. That is a simple sweep over time, and it turns "how many start now?" into "how many are in progress now?"' },
        { kind: 'code', label: 'Version 2: count the seats in use in every 50-minute block', lang: 'Python', code: V2, note: 'It prints <code>Blocks with a class: 102</code>, <code>Busiest block: (\'Jue\', \'10:30\') 3832 seats in use</code>, then for each day <code>Lun 08:50 3726</code>, <code>Mar 09:40 3639</code>, <code>Mié 09:40 3665</code>, <code>Jue 10:30 3832</code>, <code>Vie 10:30 3139</code> and <code>Sáb 10:30 1311</code>.' },
        { kind: 'p', mt: true, html: 'The busiest moment moves from Thursday 08:00 to Thursday 10:30, when 3,832 seats are in use, and every weekday peaks in the middle of the morning rather than at the first bell. Saturday has classes too, but its busiest block holds about a third as many seats. Nothing in the data was wrong in Version 1; the program asked the wrong question of it.' },
        { kind: 'table', mt: true, numCols: [2], caption: 'Busiest 50-minute block of each day, UNAC 2025B undergraduate timetable (our calculation, enrolled seats in use)', head: ['Day', 'Block starting', 'Seats in use'], rows: [
          ['Monday (Lun)', '08:50', '3,726'],
          ['Tuesday (Mar)', '09:40', '3,639'],
          ['Wednesday (Mié)', '09:40', '3,665'],
          ['Thursday (Jue)', '10:30', '3,832'],
          ['Friday (Vie)', '10:30', '3,139'],
          ['Saturday (Sáb)', '10:30', '1,311']
        ] },
        { kind: 'source', html: 'Data: Universidad Nacional del Callao, Programación Académica, resource "Programacion Academica 2025B - Pregrado", Plataforma Nacional de Datos Abiertos, licence ODC-By. Seats are section enrolments, so one student can be counted in several sessions at different times but never twice in the same block unless the file lists two overlapping sessions for them. Counts are ours. The pattern of the HORARIO text is parsed with a regular expression; every one of the 2,385 rows matched it.' },
        { kind: 'p', mt: true, html: 'The timetable also shows what Callao\'s own engineering students study. In Ingeniería de Sistemas, the 2025B list runs from Programación Estructurada and two terms of object-oriented programming to Programación Web, databases, Sistemas Operativos and Teoría de Lenguajes y Compiladores. Our <a class="ag-inline-link" href="/curso-de-java-para-universitarios-peru">Java course for university students in Peru</a> is written for exactly that sequence.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 9, with a drawing.</strong> Draw three bars on a clock face for three lessons. At which hour do most bars overlap? Is that the hour when most lessons start?',
          '<strong>Scratch, around 9 to 11.</strong> Give three sprites a start and an end time, step a clock forward, and count how many sprites are "in class" at each step.',
          '<strong>First Python, around 11 to 13.</strong> Run Version 1 and Version 2, then find one session that Version 1 counts at 08:00 but Version 2 also counts at 10:30.',
          '<strong>Ages 13 and over.</strong> Repeat the sweep separately for theory (T), practical (P) and lab (L) sessions. Which kind fills the late morning?',
          '<strong>Going further.</strong> Replace the 50-minute steps with a sorted list of start and end events, and count in one pass. Check that the busiest block is unchanged.'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish?',
      lede: 'No. Every class is live, online and in English only, taught by mentors in India who speak clearly and match each learner\'s pace.',
      body: [
        { kind: 'two',
          leftH3: 'Callao\'s English score',
          left: [
            'EF\'s English Proficiency Index 2025 scores the Callao region 518, in its moderate band. Of the fifteen Peruvian regions on EF\'s page, only Lima, at 544, scores higher. Peru as a whole scores 519 and Lima city 555.',
            'A moderate score usually means a learner follows clear explanations but needs practice speaking. Our lessons are built around speaking: the learner explains what their program does, out loud, every class.'
          ],
          rightH3: 'Adjusting to each learner',
          right: [
            'Mentors slow down, repeat, and put key words in the chat. A learner who switches to Spanish is understood and answered with the English phrase.',
            'For a Spanish-language description to share at home, see <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.'
          ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Choosing a course',
      h2: 'Which course should a Callao learner begin with?',
      lede: 'By age and interest; these are our suggestions, and the free class confirms them.',
      body: [
        { kind: 'table', numCols: [], caption: 'Where we usually start Callao learners (our recommendations)', head: ['Age', 'Interest', 'First course', 'Typical next step'], rows: [
          ['6 to 9', 'Games and stories', 'Game development for kids (Scratch to Roblox)', 'Roblox game coding'],
          ['9 to 12', 'Making websites', 'Web development for kids', 'Python and AI for Kids'],
          ['13 to 18', 'Building apps and sites', 'JavaScript for teens', 'Full stack web for teens'],
          ['13 to 18', 'University-style programming', 'Java for teens', 'AI coding agents for teens'],
          ['18 and over', 'A job in software', 'Java for college, or full stack', 'Data structures and algorithms']
        ] },
        { kind: 'p', mt: true, html: 'UNAC students and other university students in Callao join adult groups at times that fit their timetable, which, as the project above shows, is busiest in the mid-morning. Teenagers who want to use AI coding tools learn them only from 13 and only in a course that teaches them to check every line the tool writes.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are classes for families in Callao?',
      lede: 'At hours you choose. Callao keeps Peru time, UTC minus five, all year round, and mentors plan their day around yours.',
      body: [
        { kind: 'table', numCols: [], caption: 'Callao times and the matching India times (illustrations only, no fixed slots)', head: ['Callao', 'India', 'India date'], rows: [
          ['06:30', '17:00', 'Same'],
          ['09:00', '19:30', 'Same'],
          ['11:30', '22:00', 'Same'],
          ['14:30', '01:00', 'Following'],
          ['18:30', '05:00', 'Following'],
          ['21:30', '08:00', 'Following']
        ] },
        { kind: 'source', html: 'Peru: UTC minus 5 throughout the year; its last change of clocks was in 1994 (tz database, zone America/Lima). India: UTC plus 5:30, with no seasonal change. India is therefore 10 hours 30 minutes ahead of Callao on every date.' },
        { kind: 'p', mt: true, html: 'Since neither country changes its clocks, a time chosen in the summer holidays still works in the school year. You book in Callao time, and the mentor sees India time. Families who want to start in January and February can read our <a class="ag-inline-link" href="/peru-summer-holiday-coding-classes-online">summer holiday coding classes page for Peru</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Six milestones a Callao learner works through',
    lede: 'Our own scale, used at every age, so progress is measured in things the learner has built and can explain.',
    table: { caption: 'From first commands to reasoning about time (our milestones)', head: ['Milestone', 'Usual age', 'What the learner can show'], rows: [
      ['1. Commands', '6 to 7', 'A character that follows a short sequence'],
      ['2. Events', '7 to 9', 'A game that reacts to the player and repeats'],
      ['3. State', '8 to 11', 'Scores, lives and timers that change correctly'],
      ['4. Real language', '9 to 13', 'Python, JavaScript or Java written and explained'],
      ['5. Parsing', '12 to adult', 'Turning text such as a timetable into usable data'],
      ['6. Intervals', '13 to adult', 'Counting what is in progress, not just what starts']
    ] },
    left: { h3: 'For parents', ps: [
      'The UNAC project covers milestones 5 and 6: reading a messy text field and then asking the right question of it.',
      'Each month you hear what was built and what is planned next.'
    ] },
    right: { h3: 'For learners', ps: [
      'A class that started an hour ago is still a class now.',
      'Seats are not people. Say which one you counted.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Callao learners',
    lede: 'Children, teenagers and adults, in that order. All are live, in English, with a regular mentor, in a group or individually.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Primaria', courses: [
        { code: 'CAL / KIDS / 01', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, Roblox and Minecraft, one project at a time.' },
        { code: 'CAL / KIDS / 02', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Real websites built by children, step by step.' },
        { code: 'CAL / KIDS / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code, games and small AI projects.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Secundaria', courses: [
        { code: 'CAL / TEEN / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages and browser games from scratch.' },
        { code: 'CAL / TEEN / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack for teens', blurb: 'React and Node.js projects for 13 to 17.' },
        { code: 'CAL / TEEN / 03', slug: 'codex-and-claude-code-ai-coding-agents-course-for-teens', title: 'AI coding agents for teens', blurb: 'Using agents responsibly, with every line reviewed, 13 and over.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'CAL / ADULT / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java for college', blurb: 'Core Java through to Spring Boot.' },
        { code: 'CAL / ADULT / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack development', blurb: 'React, Node.js and the basics of deployment.' },
        { code: 'CAL / ADULT / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents for professionals', blurb: 'Agent tools at work, with human judgement kept in charge.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'Live classes from Callao, week by week',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early', l: 'Callao mornings meet the Indian evening.' },
      { time: 'Afternoon', l: 'After colegio or university, on days you choose.' },
      { time: '1-on-1', l: 'A personal slot agreed with the mentor.' }
    ],
    cells: [
      { h3: 'Your own mentor', p: 'One regular teacher who follows the learner.' },
      { h3: 'English at your pace', p: 'Repeated steps, written key words, time to answer.' },
      { h3: 'Learner at the keys', p: 'Students write and debug their own code.' },
      { h3: 'Groups by age', p: 'Children, teenagers and adults are never mixed.' },
      { h3: 'Monthly summary', p: 'What was finished and what comes next.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or just one.' }
    ]
  },

  projectsH2: 'Built by our older students',
  projectsLede: 'Learners who stick with it build real tools. Some are shown below; the <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Parents\' and students\' Google reviews, as they wrote them.',

  fees: {
    h2: 'Fees for learners in Callao',
    lede: 'Payment is monthly, in US dollars, by card. Your bank converts the charge into soles at the rate it applies on the day, so the soles amount can change slightly between months.',
    free: ['A free first class', 'A puzzle and a working first program', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar age', 'A regular mentor', 'Two live classes each week', 'Monthly, cancel any time'],
    one: ['One learner, one mentor', 'A plan built around the learner', 'Days and times you choose']
  },

  faq: {
    eyebrow: 'Callao families ask',
    h2: 'Online coding and AI classes in Callao: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is in English only, live and online. Mentors speak clearly, follow the learner\'s pace and accent, and answer Spanish with the English words.' },
      { q: 'Is Callao covered, or only Lima?', a: 'All seven districts of Callao are covered: Callao, Ventanilla, Bellavista, La Perla, Mi Perú, Carmen de la Legua Reynoso and La Punta. Classes are online, so district makes no difference.' },
      { q: 'From what age can my child start?', a: 'Six, with game-making in blocks. Typed Python, JavaScript or Luau usually follows from about nine. Teenagers and adults can start with no experience.' },
      { q: 'Do Callao schools teach programming?', a: 'Not as a subject. Peru\'s curriculum spreads digital skills across all areas, and MINEDU\'s Python pilot, Fábrica de Programadores, runs only in Lima Norte.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Callao all year, so 09:00 in Callao is 19:30 for the mentor.' },
      { q: 'Is our internet good enough?', a: 'Probably. In 2025, 76.5% of Callao households had an internet service, one of the highest shares in Peru. A lesson needs a steady video call for about an hour and ideally a laptop or desktop.' },
      { q: 'Can UNAC students join?', a: 'Yes. Students from the Universidad Nacional del Callao and any other university join adult groups, often for Java, full stack or algorithms, at hours around their timetable.' },
      { q: 'Do you prepare students for the ONEM or the OPI?', a: 'We train the reasoning both reward, with problems we write ourselves and never the organisers\' papers. The ONEM is entered through the school, the OPI through UTEC. We are not connected with MINEDU, the DRE Callao, UTEC or either olympiad.' },
      { q: 'How are fees paid?', a: 'Monthly by card in US dollars; your bank converts them to soles. Visitors from India see rupees. The first class is free.' },
      { q: 'Do you give certificates?', a: 'Courses that include one end with our own certificate of completion. It is not a Peruvian qualification and is not issued or endorsed by MINEDU, a UGEL, the DRE Callao, a university or any school.' },
      { q: 'What is the UNAC timetable project?', a: 'An original Python lesson on UNAC\'s open 2025B timetable: counting enrolled seats by start time says Thursday 08:00 is busiest, while counting the classes in progress in each 50-minute block finds Thursday 10:30, with 3,832 seats in use.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for Callao families and learners.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every grade, every age and every Peru page.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium classes in Lima', p: 'For families at bilingual and international schools.' },
      { href: '/curso-de-java-para-universitarios-peru', label: 'Java para universitarios', p: 'Java for university students, in Spanish.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools suit which ages.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'A route into coding at any age.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson, from start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first class in Callao',
    lede: 'The free class is a short puzzle and a first program that runs. The mentor sees how the learner reasons and how easily they follow English, then recommends a course and a format.',
    readFirst: 'If you would like to read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a full lesson and <a class="ag-inline-link" href="/courses">all courses</a> lists each syllabus.',
    note: 'Classes are live online with mentors in India and taught only in English. We reply fastest on WhatsApp; please write in English.',
    formNote: 'Free, with no card and nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI in Peru' },
        { href: '/english-medium-coding-classes-lima', label: 'English-medium classes, Lima' },
        { href: '/curso-de-java-para-universitarios-peru', label: 'Java para universitarios' },
        { href: '/peru-summer-holiday-coding-classes-online', label: 'Summer holiday classes' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Count what is in progress, not what starts'
  },

  personalityCss: `
.ag-root.ag-caz .ag-hero h1 { letter-spacing: -0.013em; max-width: 20ch; }
.ag-root.ag-caz .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-caz .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-caz .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-caz .ag-code-head b { font-variant-numeric: tabular-nums; letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadros 1 and 3), Directorio de Centros Poblados 2017 (dpto07), Perfil Sociodemográfico 2017 (Cuadro N° 1.9 note on Lima Metropolitana), Compendio Estadístico Perú 2026 (cuadros 1.7, 1.8, 5.16, 5.22, 5.53, 5.54, 5.66, 5.75, 11.5, 11.6, 11.13); Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores; DRE Callao news of 27 June 2024; ONEM 2026 and OPI sources; EF EPI 2025; tz database. Data: Universidad Nacional del Callao, Programación Académica 2025B Pregrado, ODC-By.',
    localProject: 'When is the Universidad Nacional del Callao at its busiest? An original Python project on UNAC\'s open 2025B undergraduate timetable (ODC-By): Version 1 parses 3,505 sessions from the HORARIO text and adds enrolment by start time, finding Thursday 08:00 (3,397 seats); Version 2 expands each session over the 50-minute blocks it covers and finds the busiest moment is Thursday 10:30 (3,832 seats in use), with every weekday peaking mid-morning. Lesson family: interval counting (in progress versus started) with a sweep over time.',
    requiredMentions: ['Programacion-Academica-2025B-Pregrado.csv', 'Sessions read: 3505', "Busiest block: ('Jue', '10:30') 3832 seats in use", '58,799', '1,094,209', '451,260', '105,284', '128.3 square kilometres', 'Count what is in progress, not what starts'],
    sources: [
      { claim: 'Province and district populations of Callao, 2025, and censada by age group.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Callao centros poblados, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto07.xlsx' },
      { claim: 'Callao counted inside Lima Metropolitana in the 2017 capital-city table.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Area, computers, internet, assessment results, enrolment, teachers and UNAC enrolment.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'The twentieth ONEM began across Callao on 27 June 2024.', url: 'https://www.gob.pe/institucion/regioncallao-dre/noticias/979268-inicio-la-edicion-xx-de-la-olimpiada-nacional-escolar-de-matematica-onem-en-todo-el-callao' },
      { claim: 'UNAC Programación Académica and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/programaci%C3%B3n-acad%C3%A9mica-%E2%80%93-universidad-nacional-del-callao-unac' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 scores for Callao, Lima region, Peru and Lima city.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'OPI organiser, cost and 2025 rules.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A Callao "city" population for 2017 or 2025: INEI counts Callao inside Lima Metropolitana, so the page gives district and centro poblado figures only.',
      'Treating seat registrations as students: the page says plainly that 58,799 counts seats, not people.',
      'Income or social stratum labels for Callao districts: not used.',
      'Crime, emergency-call or hazard datasets on the same portal: not used.',
      'Spanish-language teaching: every class is in English.',
      'Any connection with MINEDU, the DRE Callao, the GORE Callao, UNAC, UTEC, the ONEM or any school: none.',
      'Officials\' names from the DREC release: left out.'
    ]
  }
};
