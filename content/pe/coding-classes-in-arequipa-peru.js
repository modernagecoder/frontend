'use strict';
// Coding classes in Arequipa, Peru (ag- city page, Peru cluster row PE045, P1 city pilot; alloc: cities, coar, #AD3A52).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; USD only, through the template's data-price anchors. All ages, kids and teens first.
// Angle: Arequipa is the second city of Peru and the strongest robotics city in the keyword data ("robótica para niños
// arequipa", KEYWORDS.md section 2 and 4), so the page answers robotics-or-coding honestly (we teach coding, no kit),
// shows what Peruvian school gives each age, and teaches with one real Arequipa dataset whose altitude column is
// written in 35 different ways.
// Sources (research folder ~/Desktop/SkyCoders/keyword-research-2026-09/pe/, every quote string-matched in the raw file):
//  - INEI, Censos Nacionales 2025, tabulado Indicadores demográficos, Cuadro 1 (places.tsv): department Arequipa
//    1,814,554 (población total, census day 15 September 2025); 8 provinces; province Arequipa 1,382,600; district
//    Arequipa 56,157. Never summed.
//  - INEI Lib1539, Perú: Perfil Sociodemográfico 2017, Cuadro N° 1.9 (image table, places.tsv): Arequipa city
//    1,008,290 (poblacion censada, 22 October 2017). INEI has published no 2025 city figure (GEO.md section 2).
//  - Ley 28044 (FACTS 5, 6): primaria "dura seis años"; secundaria "dura cinco años".
//  - MINEDU Edades normativas (FACTS 13, 14): age at 31 March; 1° primaria = 6 ... 5° secundaria = 16.
//  - CNEB (FACTS 32, 33, 39, 40): competency 28 "Se desenvuelve en entornos virtuales generados por las TIC" is
//    transversal ("Competencias transversales a las áreas"); secundaria JER "Matemática 4 4 4 4 4 Comunicación 4 4 4 4 4
//    Inglés 3 3 3 3 3", "Educación para el trabajo 2 2 2 2 2"; no computing area in the 35-hour week.
//  - MINEDU news 16 March 2026 (FACTS 17): "53 631 colegios ... 6 225 000 estudiantes".
//  - RM 501-2025-MINEDU (FACTS 25): DRE/UGEL "tienen la potestad de definir una distribución de semanas lectivas y de
//    gestión distinta a la sugerida".
//  - MINEDU Fábrica de Programadores (FACTS 45, 46): 1,000 students of 4° and 5° secundaria in Lima Norte, Python, PCEP.
//  - MINEDU ENLA 2025 (FACTS 62): "Moquegua, Tacna y Arequipa continúan liderando los logros de aprendizaje en todo el país."
//  - MINEDU DITE robotics PDF (FACTS 52, 53, 54): "la robótica en educación no es el objetivo, es el medio."; robotics
//    since 1996 (Infoescuela); LEGO WeDo kits to almost all public primary schools in 2009 and 2010.
//  - ONEM (FACTS 99 to 108): XXII ONEM; IE stage "miércoles 08 de Julio" 2026; levels 1 (1°-2°), 2 (3°-4°), 3 (5°);
//    Alfa public, Beta private; 10 items, two hours; IE, UGEL, DRE/GRE, national; more than 1.7 million; national stage
//    Sunday 11 October 2026, Huampaní, 237 students; "alianza estratégica entre el Ministerio de Educación y la empresa
//    privada Aceros Arequipa" (El Peruano; UGEL 06 oficio múltiple 164-2026).
//  - OPI, UTEC (FACTS 111, 112, 116, 118): free for all secondary students; OPI 2026 registration to 18 March 2026, final
//    11 April 2026; 2025 rules: Fase 2 C++ only, generative AI banned.
//  - EF EPI 2025, Peru page (MARKET.md 1.3, raw ef_peru.raw): Peru 519 Moderate, rank 52 of 123; city Arequipa 512
//    (data-city="arequipa" ... 512, moderate), region Arequipa 509; Lima 555 High.
//  - Time (timezone.tsv): America/Lima UTC-5 all year, last DST 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead;
//    INACAL hora oficial feed matched UTC-5 on 8 November 2026.
//  - Data: Gobierno Regional de Arequipa (GORE Arequipa), "Inventario de Atractivos Turísticos de Arequipa", Plataforma
//    Nacional de Datos Abiertos, https://www.datosabiertos.gob.pe/dataset/inventario-de-atractivos-tur%C3%ADsticos-de-arequipa,
//    licence "Open Data Commons Attribution License" (dc:license odc-by on the raw page), modified 2026-06-30.
//    File inventario-atractivos-turisticos-arequipa.csv, 170,468 bytes, sha256 84d2050f...7f6b205d, 338 rows, saved to
//    src-pages/coding-classes-in-arequipa-peru/data/ on 9 November 2026.
// Our own calculations (scratchpad pe/coar/v1.py, v2.py, summary.py; python3 -I on the downloaded file):
//  v1 prints: Places in Caylloma: 64 / Lowest: (3.0, 'Cañon Del Colca') / Next: (3.635, 'Pueblo De Chivay') /
//    Highest: (4910.0, 'Mirador De Patapampa')
//  v2 prints: Check by hand: Cañon Del Colca 3.0 in Caylloma middle 3605.0 / Lowest we trust: (1900.0, 'Valle De
//    Sangalle') / Chivay now reads: [3635.0]
//  summary: 35 distinct spellings of the altitude column (digits replaced), 2 blank; 336 of 338 rows in department
//    Arequipa (one Ica, one Cusco); province Arequipa 80 places, lowest 1117 Laguna y Salinera de San Camilo (La Joya),
//    highest 5760 Volcán Chachani, median 2353.5; Caylloma 64, median 3605; Castilla 52 with a height (53 rows), median
//    2731; Islay 47, median 15; Caravelí 43, median 230; Camaná 38, median 15; 96 places above 3,000 m, 16 above 4,000 m.
//    Verbatim strings: Centro Historico De Arequipa "2 335 m s. n. m"; Monasterio De Santa Catalina "2335 m.s.n.m";
//    Valle Del Colca "3,651"; Pueblo De Chivay "3.635 msnm"; Plaza Principal De Chivay "3630 m.s.n.m"; Cañon Del Colca
//    "3 m.s.n.m"; Volcán Misti "4100 m.s.n.m.".
// Lesson family: text that looks like a number is not a number yet; clean it, then sanity-check it against its neighbours.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'def metres(text):',
  '    digits = ""',
  '    for ch in text:',
  '        if ch.isdigit() or ch == ".":',
  '            digits += ch',
  '        elif ch.isalpha():',
  '            break',
  '    if digits == "":',
  '        return None',
  '    return float(digits)',
  '',
  'colca = []',
  'with open("inventario-atractivos-turisticos-arequipa.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["Recurso - Provincia"] == "Caylloma":',
  '            colca.append((metres(row["Recurso - Altitud"]), row["Recurso - Nombre"]))',
  '',
  'colca.sort()',
  'print("Places in Caylloma:", len(colca))',
  'print("Lowest:", colca[0])',
  'print("Next:", colca[1])',
  'print("Highest:", colca[-1])'
].join('\n');

const V2 = [
  'import csv',
  'import statistics',
  '',
  'def metres(text):',
  '    digits = ""',
  '    for ch in text:',
  '        if ch.isdigit() or ch == ".":',
  '            digits += ch',
  '        elif ch.isalpha():',
  '            break',
  '    if digits == "":',
  '        return None',
  '    whole, dot, rest = digits.partition(".")',
  '    if dot and len(rest) == 3:      # Peru often writes 3.635 for 3,635',
  '        return float(whole + rest)',
  '    return float(digits)',
  '',
  'places = []',
  'with open("inventario-atractivos-turisticos-arequipa.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        m = metres(row["Recurso - Altitud"])',
  '        if m is not None:',
  '            places.append((row["Recurso - Provincia"], m, row["Recurso - Nombre"]))',
  '',
  'by_province = {}',
  'for prov, m, name in places:',
  '    by_province.setdefault(prov, []).append(m)',
  '',
  'for prov, m, name in places:',
  '    middle = statistics.median(by_province[prov])',
  '    if middle > 2000 and m < 100:',
  '        print("Check by hand:", name, m, "in", prov, "middle", middle)',
  '',
  'trusted = sorted((m, name) for prov, m, name in places',
  '                 if prov == "Caylloma" and m >= 100)',
  'print("Lowest we trust:", trusted[0])',
  'print("Chivay now reads:", [m for m, name in trusted if name == "Pueblo De Chivay"])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Arequipa: coding for every age' },
  slug: 'coding-classes-in-arequipa-peru',
  code: 'coar',
  accent: '#AD3A52',
  accentRationale: 'Coding classes in Arequipa: a deep crimson #AD3A52 allocated to this row, warm against the pale stone tones of the paper; contrast 5.65 on #FBF8F2, 5.32 on #F5F1E8 and 4.86 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in Arequipa, Peru',
  title: 'Coding Classes in Arequipa, Peru: Live Online, in English',
  description: 'Coding classes in Arequipa for kids, teens and adults: live online in English at flexible hours, robotics or coding, ONEM and OPI, and a real Arequipa data project.',
  ogDescription: 'Live online coding for Arequipa children, teenagers and adults, taught in English at any hour that suits the family: what Peruvian school covers by grade, robotics or coding, the ONEM and OPI contests, and a Python project on the regional tourist inventory.',
  twitterDescription: 'Coding in Arequipa, live online in English: school gaps by age, robotics or coding, and a real Arequipa data project.',
  pageName: 'Coding Classes in Arequipa, Peru',
  webPageDescription: 'A guide for Arequipa families and adult learners to live online coding classes taught in English, built from INEI census figures, MINEDU curriculum and assessment sources, the ONEM and OPI rules, EF EPI 2025, and an original Python project on the Gobierno Regional de Arequipa tourist inventory (ODC-By).',
  courseDescription: 'Live online coding classes in English for learners in Arequipa, Peru: Scratch and Python for children from 6, Python, Java and data science for teenagers, and Python, data and AI agents for adults, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Arequipa',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#ages', label: 'By age' },
    { href: '#robotics', label: 'Robotics or coding' },
    { href: '#project', label: 'Arequipa project' },
    { href: '#contests', label: 'ONEM and OPI' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Arequipa &middot; Live online, in English &middot; Ages 6 to adult',
  h1: 'Coding classes in Arequipa, Peru',
  lede: 'Arequipa families ask about robotics first, and that is a good instinct: a robot is just a program that moves. This page explains what coding a child in Arequipa gets at school and when, which of our live online courses fits each age from six to adult, how the classes work in English at any hour, the two national contests worth knowing, and a project on Arequipa\'s own tourist inventory where the Colca Canyon turns up at three metres above the sea.',
  secondaryCta: { href: '#project', label: 'See the Arequipa project' },
  wa: 'Hello Modern Age Coders, we are in Arequipa, Peru and would like live coding classes in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; more than 10,000 learners worldwide &middot; mentors who adjust their English to the learner',
  spec: [
    ['Ages', 'From 6 to adult; children and teenagers grouped by age'],
    ['First steps', 'Scratch at 6, typed Python from about 9'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Arequipa time', 'Any day, any hour you choose'],
    ['Mentors', 'Based in India, teaching over live video'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders teaches coding to learners in Arequipa, Peru, live online and in English: children from 6 start with Scratch games, from about 9 they type Python, teenagers move on to Python, Java and data science, and adults learn Python, data analysis and AI agents. Every class has a real mentor on video, in a group of fifteen to twenty or one to one, on any day and at any hour your family picks. We teach how to think through a problem, not how to copy an answer, and we sell no robot kits.',

  picks: {
    eyebrow: 'Start here in Arequipa',
    h2: 'Three courses Arequipa learners start with',
    lede: 'Two for children, because most Arequipa enquiries are about primaria, and one for secundaria. Adults will find their courses further down.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'AQP / 01', title: 'Coding for Kids', note: 'For 6 to 12 year olds in age-matched groups, over 10 to 12 months. Scratch games and stories first, then simple apps and a first look at AI. The natural start for anyone curious about robotics.' },
      { course: 'python-ai-kids-masterclass', code: 'AQP / 02', title: 'Python and AI for Kids', note: 'For 9 to 12 year olds, 8 to 10 months, starting from nothing. Typed Python from day one: turtle drawings, games and small AI projects, leading towards real data like the Arequipa project below.' },
      { course: 'python-complete-masterclass-teens', code: 'AQP / 03', title: 'Python for Teens', note: 'Ages 13 to 18, 10 to 12 months, starting from zero. For 1° to 5° de secundaria: real programs, files and data, at a depth Peruvian school does not timetable.' }
    ]
  },

  sections: [
    {
      id: 'arequipa',
      eyebrow: 'Arequipa in figures',
      h2: 'How big is Arequipa, and why does that matter for coding classes?',
      lede: 'In the 2017 census Arequipa was the largest city in Peru after Lima, which also means a large number of children and adults with no coding class within walking distance. The figures below are INEI\'s, each with its own year.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Arequipa population, by the unit INEI counts', head: ['Unit', 'Population', 'Census and year'], rows: [
          ['Department of Arequipa (8 provinces)', '1,814,554', 'Censos Nacionales 2025, total population'],
          ['Province of Arequipa', '1,382,600', 'Censos Nacionales 2025, total population'],
          ['District of Arequipa (the central district)', '56,157', 'Censos Nacionales 2025, total population'],
          ['Arequipa city (urban area of the capital)', '1,008,290', 'Censos Nacionales 2017, people counted']
        ] },
        { kind: 'source', html: 'Sources: INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro 1 (census reference day 15 September 2025, population counted plus omitted); INEI, Perú: Perfil Sociodemográfico 2017, Cuadro N° 1.9 (census day 22 October 2017). INEI had not published 2025 figures for cities when we checked in November 2026, so the city row stays at 2017. The rows overlap and are never added together.' },
        { kind: 'two', mt: true,
          leftH3: 'One city, many districts',
          left: [
            'The city most people call Arequipa spreads over many districts of the province: the central district that shares the name has only 56,157 people in 2025, while Cayma, Yanahuara, Cerro Colorado and the rest hold most of the city. That is why we never quote a single "Arequipa" number without saying which unit it means.',
            'For a coding class, the district matters less than the commute. A live online class reaches a child in Cerro Colorado and a student in Socabaya at the same moment, with nobody crossing the city in the afternoon traffic.'
          ],
          rightH3: 'A region that does well at school',
          right: [
            'MINEDU\'s report on the national ENLA 2025 assessment says that "Moquegua, Tacna y Arequipa continúan liderando los logros de aprendizaje en todo el país": Arequipa is among the three regions that keep leading learning results nationally.',
            'Strong school results are a reason to add coding, not a reason to skip it. A child who already reads and calculates well is exactly the child who enjoys turning that skill into programs.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'What school covers',
      h2: 'Do schools in Arequipa teach coding?',
      lede: 'Not as a subject of its own. Arequipa follows the national curriculum, the CNEB, and its secundaria timetable has no computing area. Digital skills are expected across every subject instead.',
      body: [
        { kind: 'two',
          leftH3: 'Digital skills without a lesson',
          left: [
            'The CNEB lists competency 28, "Se desenvuelve en entornos virtuales generados por las TIC", as one of two competencies that are transversal: they belong to every area rather than to a subject. Its capacities include managing information and creating virtual objects, but the standard names no programming language.',
            'In practice this means that a child can use digital tools in maths, science or communication, but nothing in the plan requires a teacher to show how a program is written.'
          ],
          rightH3: 'The weekly timetable in secundaria',
          right: [
            'Under the regular school day, secundaria has a 35-hour week. Matemática and Comunicación get 4 hours each in every grade, Inglés 3 hours, and Educación para el Trabajo 2 hours. There is no area called computing, informatics or programming.',
            'MINEDU has started to test Python in schools: its Fábrica de Programadores pilot, launched in July 2025, trains 1,000 students of 4° and 5° de secundaria in Lima Norte in Python, and those who finish both stages can sit the PCEP exam. It is a Lima pilot, so an Arequipa student who wants the same path learns it outside school.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Peruvian school stages, normative ages and computing on the timetable', head: ['School stage', 'Grades', 'Normative age at 31 March', 'Computing as a subject'], rows: [
          ['Primaria', '1° to 6° grado', '6 to 11', 'None; digital skills are transversal'],
          ['Secundaria, first years', '1° and 2°', '12 and 13', 'None in the 35-hour week'],
          ['Secundaria, middle years', '3° and 4°', '14 and 15', 'None; Educación para el Trabajo 2 hours a week'],
          ['Secundaria, final year', '5°', '16', 'None; then university admission exams']
        ] },
        { kind: 'source', html: 'Sources: Ley General de Educación, Ley N.° 28044 (primaria lasts six years, secundaria five); MINEDU, Edades normativas (age measured on 31 March of each year); MINEDU, Currículo Nacional de la Educación Básica, plan de estudios and competency 28; MINEDU news on Fábrica de Programadores (July 2025). All read in November 2026.' },
        { kind: 'p', mt: true, html: 'Under the 2026 school-year norm, RM 501-2025-MINEDU, each regional education office (DRE) and UGEL has the power to set its own spread of teaching and planning weeks, so dates in Arequipa can differ from Lima\'s. That is one more reason our classes follow the family\'s calendar rather than any school calendar: they keep going through school holidays unless you pause them.' }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Every age',
      h2: 'Which coding course fits my child, my teenager or me?',
      lede: 'Pick by age and by what the learner wants to make. The ages below are our own course ages, set beside the school grade where a child of that age usually sits.',
      body: [
        { kind: 'table', numCols: [], caption: 'Where learners in Arequipa start, by age (our course ages)', head: ['Age', 'Usual school year', 'Where we start', 'What they make'], rows: [
          ['6 to 8', '1° to 3° primaria', 'Coding for Kids, Scratch', 'Animated stories and first games'],
          ['8 to 12', '3° to 6° primaria', 'Roblox game coding, or Scratch to apps', 'Playable games and simple apps'],
          ['9 to 12', '4° primaria to 1° secundaria', 'Python and AI for Kids', 'Typed programs, turtle art, small AI projects'],
          ['13 to 18', '1° to 5° secundaria', 'Python for Teens, then Java or data science', 'Data projects, web apps, larger programs'],
          ['From about 13', 'Secundaria or later', 'PCEP and PCAP Python certification', 'Exam-ready Python fundamentals'],
          ['18 and over', 'University or work', 'Python masterclass, data analysis, AI agents', 'Analysis, automation and agent tools']
        ] },
        { kind: 'source', html: 'Course ages are ours. School years use MINEDU\'s normative ages at 31 March, so a child born late in the year may be one grade ahead or behind the row shown.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Children, 6 to 12', p: 'Short, playful classes. A six year old drags blocks and makes a cat dance; a ten year old is already typing loops in Python. Children are grouped by age, so a child in 1° de primaria never shares a class with a twelve year old.' },
          { h3: 'Teenagers, 13 to 18', p: 'Secundaria students learn real Python first, then choose Java, data science from 14, or the PCEP certificate path. This is also where olympiad thinking grows: careful reasoning, testing, and explaining why a program is correct.' },
          { h3: 'University students and adults', p: 'Adults in Arequipa take the same live classes at hours around work or university. Most start with Python, then go to data analysis or AI agents. Nobody is too old: our learners range from 6 to 67.' }
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish?',
      lede: 'No. Every class is live, online and taught in English, and we say so before the first class rather than after it.',
      body: [
        { kind: 'two',
          leftH3: 'Clear English, matched to the learner',
          left: [
            'Our mentors are based in India and teach over live video. They speak slowly and clearly, repeat an instruction in simpler words when a learner hesitates, and learn how each student speaks. A child who answers in a mix of English and Spanish is understood, and gently given the English word.',
            'Code itself barely depends on language. A loop in Scratch or Python looks the same in Arequipa as anywhere else, and most of each class is building and testing on the screen together.'
          ],
          rightH3: 'What the English figures say',
          right: [
            'EF\'s English Proficiency Index 2025 places Peru 52nd of 123 countries with a score of 519, in the moderate band. The same edition scores Arequipa city 512 and the Arequipa region 509, also moderate, while Lima city scores 555, in the high band.',
            'So for many Arequipa learners, English is a second skill being practised, not a barrier that has already been crossed. That is why mentors adjust their pace, and why the free first class checks comfort in English as well as interest in code.'
          ] },
        { kind: 'p', mt: true, html: 'Families often tell us the English becomes a bonus: an hour of coding is also an hour of listening, explaining and asking questions in English, with a mentor who waits for the answer. For a child at a bilingual school, it is simply the language of the classroom; for a child at a Spanish-medium colegio, it is practice that comes free with every project.' }
      ]
    },
    {
      id: 'robotics',
      tint: 'tint',
      eyebrow: 'Robotics or coding',
      h2: 'Should an Arequipa child start with robotics or with coding?',
      lede: 'With coding, in our view, because coding is the part of robotics that transfers. We teach programming only; we do not sell or ship robot kits.',
      body: [
        { kind: 'two',
          leftH3: 'What MINEDU itself says about robotics',
          left: [
            'MINEDU\'s own document on educational robotics puts it plainly: "la robótica en educación no es el objetivo, es el medio". Robotics is a means to learn, used inside STEAM projects, not a goal on its own.',
            'Peru has used robotics in schools for a long time. The same document says MINEDU has worked with educational robotics since 1996, through the Infoescuela project, and that in 2009 and 2010 it supplied LEGO WeDo kits to almost all public primary schools.'
          ],
          rightH3: 'Where coding fits',
          right: [
            'Every robot runs a program: do this, repeat that, if the sensor sees a wall then turn. Those three ideas, sequence, loop and condition, are exactly what a child learns in the first months of Scratch, and they work the same when the program drives a sprite, a game character or a motor.',
            'A child who has learned to code can pick up any robot kit later and understand why it moves. A child who has only assembled kits often cannot yet write the instructions that make one move differently.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Ask what the child will write.</strong> In any robotics workshop, ask whether the child writes the program or follows a printed one. Writing it is where the learning happens.',
          '<strong>Ask what happens after the kit.</strong> Kits stay at the academy or need to be bought. A coding skill goes home with the child and works on any computer.',
          '<strong>Try a robot without a robot.</strong> In our classes, younger children program a sprite that must follow a line, avoid walls and count its moves: the same logic as a line-following robot, with no hardware to break.',
          '<strong>Add hardware later if the interest lasts.</strong> If your child loves building, a kit at 11 or 12, after a year of Scratch or Python, is far more rewarding than one at 7.'
        ] }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A real Arequipa project',
      h2: 'Is the Colca Canyon really three metres above the sea?',
      lede: 'The Gobierno Regional de Arequipa publishes an inventory of the region\'s tourist attractions as open data. Our older students use it to learn a habit every programmer needs: text that looks like a number is not a number until you have cleaned it and checked it.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is the Inventario de Atractivos Turísticos de Arequipa, published by the Gobierno Regional de Arequipa on Peru\'s Plataforma Nacional de Datos Abiertos under the Open Data Commons Attribution Licence (ODC-By), and last modified on 30 June 2026. The file we downloaded on 9 November 2026, inventario-atractivos-turisticos-arequipa.csv, has 338 rows: churches, valleys, beaches, festivals and dishes, each with a province, a district and an altitude.',
            'The altitude column is where it gets interesting. People typed it by hand over several years, and once you replace every digit with the same symbol, the column still has 35 different spellings.'
          ],
          rightH3: 'The question',
          right: [
            'Many Arequipa families have driven up to the Colca valley, in the province of Caylloma. So we ask: which attraction in Caylloma sits lowest? A twelve year old guesses the bottom of the canyon, which is a fair guess.',
            'The first program pulls out the digits from each altitude, turns them into a number, sorts the 64 Caylloma places and prints the lowest, the next one and the highest.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'How the file writes heights: five real entries, exactly as typed', head: ['Attraction', 'Province', 'Altitude as written'], rows: [
          ['Centro Historico De Arequipa', 'Arequipa', '2 335 m s. n. m'],
          ['Monasterio De Santa Catalina', 'Arequipa', '2335 m.s.n.m'],
          ['Valle Del Colca', 'Caylloma', '3,651'],
          ['Pueblo De Chivay', 'Caylloma', '3.635 msnm'],
          ['Cañon Del Colca', 'Caylloma', '3 m.s.n.m']
        ] },
        { kind: 'code', label: 'Version 1: pull out the digits and sort', lang: 'Python', code: V1, note: 'It prints: <code>Places in Caylloma: 64</code>, <code>Lowest: (3.0, \'Cañon Del Colca\')</code>, <code>Next: (3.635, \'Pueblo De Chivay\')</code> and <code>Highest: (4910.0, \'Mirador De Patapampa\')</code>.' },
        { kind: 'p', mt: true, html: 'The answer says the Colca Canyon is three metres above sea level and the town of Chivay three and a half. Children laugh, and then the real work begins. Chivay is the easier case: the same file lists the Plaza Principal de Chivay at "3630 m.s.n.m", so "3.635" must be 3,635 written with a dot between the thousands, a common way of writing large numbers in Peru. The program read the dot as a decimal point.' },
        { kind: 'p', html: 'The canyon is harder. "3 m.s.n.m" cannot be fixed by any rule, because nothing in the text says what the full number should be; a digit or more seems to have been lost when it was typed. The honest thing for a program to do is not to guess, but to flag it for a person to check.' },
        { kind: 'code', label: 'Version 2: read the dot the Peruvian way, and flag what looks wrong', lang: 'Python', code: V2, note: 'It prints: <code>Check by hand: Cañon Del Colca 3.0 in Caylloma middle 3605.0</code>, then <code>Lowest we trust: (1900.0, \'Valle De Sangalle\')</code> and <code>Chivay now reads: [3635.0]</code>.' },
        { kind: 'p', mt: true, html: 'Version 2 makes two changes. A dot followed by exactly three digits is treated as a thousands separator, which fixes Chivay and the Luicho hot springs in La Unión, written "2.722". And any place under 100 metres in a province whose middle altitude is over 2,000 metres is printed for a human to check. Only the canyon is caught. The lowest Caylloma attraction we can trust is the Sangalle valley at 1,900 metres, in the Cabanaconde district, the same district the file gives for the canyon. The twelve year old\'s guess was not far off.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Attractions per province and their middle altitude, after cleaning (our calculation)', head: ['Province', 'Places with a height', 'Middle altitude, metres'], rows: [
          ['Arequipa', '80', '2,353.5'],
          ['Caylloma', '64', '3,605'],
          ['Castilla', '52', '2,731'],
          ['Islay', '47', '15'],
          ['Caravelí', '43', '230'],
          ['Camaná', '38', '15']
        ] },
        { kind: 'source', html: 'Data: Gobierno Regional de Arequipa, Inventario de Atractivos Turísticos de Arequipa, Plataforma Nacional de Datos Abiertos, Open Data Commons Attribution Licence (ODC-By). Counts and medians are our own, from Version 2\'s cleaning. In the province of Arequipa the lowest place is the Laguna y Salinera de San Camilo in La Joya at 1,117 metres and the highest is the Chachani volcano at 5,760 metres; across the file, 96 places sit above 3,000 metres and 16 above 4,000. Two of the 338 rows belong to other departments, Ica and Cusco, and two have no altitude at all.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, pencil and paper.</strong> Write the number two thousand three hundred and thirty-five in four different ways on paper. Which ones would a friend read correctly?',
          '<strong>Scratch, around 8 to 10.</strong> Put six heights from the table into a list and find the smallest. Then add "3" as a seventh height and watch it win.',
          '<strong>First Python, around 10 to 12.</strong> Start with Version 1: explain the Chivay result in your own words, then write the thousands-separator fix before looking at ours.',
          '<strong>Ages 13 and over.</strong> The file gives the Misti volcano 4,100 metres and the Chachani 5,760. Find out what each number measures, the summit or the place where visitors stand, and write a check that would warn you.',
          '<strong>Going further.</strong> Count the 35 spellings yourself, then write one function that turns every one of them into a number or into a clear "cannot read".'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Contests',
      h2: 'Which maths and computing contests can a student in Arequipa enter?',
      lede: 'Two national ones matter most for secundaria students: the ONEM for maths and the OPI for programming. We are not connected with either organiser; we describe them from their own pages and teach with our own problems.',
      body: [
        { kind: 'two',
          leftH3: 'ONEM, the national school maths olympiad',
          left: [
            'The Olimpiada Nacional Escolar de Matemática is run by MINEDU, and El Peruano reports that it is organised "gracias a una alianza estratégica entre el Ministerio de Educación y la empresa privada Aceros Arequipa", a company that carries the city\'s name. The 2026 edition, the XXII ONEM, drew more than 1.7 million secundaria students.',
            'Students enter through their school. The 2026 school stage was held across the country on Wednesday 8 July 2026, then winners moved on through the UGEL and regional stages to a national stage on Sunday 11 October 2026 at Huampaní, with 237 finalists. The school-stage paper has ten questions in which students write their own answer rather than choosing one, with two hours to solve them.'
          ],
          rightH3: 'OPI, the Peruvian computing olympiad',
          right: [
            'The Olimpiadas Peruanas de Computación are organised by UTEC and are free for every secundaria student in the country. For 2026, registration closed on 18 March 2026 and the final was held on 11 April 2026.',
            'Under the 2025 rules, the first round accepted C++ or Python, the in-person final allowed only C++, and using generative AI to solve problems was banned. That last rule fits how we teach: students learn to reason their way to a program, not to paste one.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'ONEM 2026 levels and categories', head: ['Level', 'Secundaria grades', 'Categories'], rows: [
          ['Nivel 1', '1° and 2°', 'Alfa (public schools), Beta (private schools)'],
          ['Nivel 2', '3° and 4°', 'Alfa and Beta'],
          ['Nivel 3', '5°', 'Alfa and Beta']
        ] },
        { kind: 'source', html: 'Sources: UGEL 06, Oficio Múltiple 164-2026 on the XXII ONEM (levels, categories, the 8 July 2026 school stage, ten items, two hours); El Peruano, report of 11 October 2026 on the national stage; UTEC, opi.utec.edu.pe and the OPI 2025 rules. We do not reproduce any organiser\'s problems or solutions.' },
        { kind: 'p', mt: true, html: '<strong>A practice problem of ours, in the contest spirit.</strong> A list of heights contains 2335, 2,335, 2.335 and 2 335. A careless program adds them as numbers. What total does it print if it reads the comma version as 2335, the dot version as 2.335 and the space version as 2335? Then: how many of the four did it read the way a person from Arequipa would? (Ours, written for this page. Answer: 7007.335, and three of four, because 2.335 should be 2,335.)' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are the classes in Arequipa?',
      lede: 'Any time you choose. Arequipa keeps Peru time all year, the same clock as Lima, and the mentor works around it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example conversions from Peru time to the mentor\'s time in India (not a timetable)', head: ['Peru time, Arequipa', 'India time', 'Note'], rows: [
          ['07:00', '17:30', 'Same day'],
          ['09:00', '19:30', 'Same day'],
          ['11:00', '21:30', 'Same day'],
          ['15:00', '01:30', 'Next calendar day in India'],
          ['18:00', '04:30', 'Next calendar day in India'],
          ['20:00', '06:30', 'Next calendar day in India']
        ] },
        { kind: 'source', html: 'Peru keeps UTC minus 5 hours all year and has not used summer time since 1994 (tz database, zone America/Lima; INACAL publishes the official time). India keeps UTC plus 5 hours 30 minutes, so India is 10 hours 30 minutes ahead of Arequipa on every day of the year, and the gap never shifts.' },
        { kind: 'p', mt: true, html: 'Because neither country changes its clocks, a slot agreed in March is still the same slot in December. When you book, you pick the time in your own clock; the system shows the mentor the matching India time. School runs in Peru from March, and the 2026 school year opened on 16 March 2026 for 6,225,000 students in 53,631 schools across the country, so many Arequipa families use the long summer break at the start of the year to begin, then keep the same slot once school returns.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a learner in Arequipa can do at each stage',
    lede: 'Our own milestones, the same for every learner whatever their age. They place a new student in the right group and give families a clear picture of progress.',
    table: { caption: 'Coding milestones from first blocks to real data (ours)', head: ['Stage', 'Typical start', 'The learner can'], rows: [
      ['1. Order', 'Age 6 or 7', 'Put steps in the right order and make a character move and talk'],
      ['2. Repeat and react', 'Age 7 to 9', 'Use loops and respond to a key, a click or a touch'],
      ['3. Remember', 'Age 8 to 10', 'Keep a score, store a list and find its smallest value'],
      ['4. Type', 'Age 9 to 12', 'Write Python with loops, conditions and functions'],
      ['5. Clean', 'Age 11 to adult', 'Read a messy file, turn its text into numbers and explain every fix'],
      ['6. Check', 'Age 13 to adult', 'Write tests that catch a wrong value before anyone trusts the answer']
    ] },
    left: { h3: 'For parents', ps: [
      'Stages 5 and 6 are what the Colca project teaches. They are also what separates a learner who copies code from one who can be trusted with real data.',
      'We report progress as things your child can build and explain, never as hours spent on a screen.'
    ] },
    right: { h3: 'For learners', ps: [
      'If your program says the Colca Canyon is at sea level, the program is not wrong. It did exactly what you told it. Find the line that told it.',
      'Before you sort numbers, look at how they were written.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Arequipa learners',
    lede: 'Grouped from youngest to oldest. Every one is live, in English, with a regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 15', courses: [
        { code: 'AQP / KIDS / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Children aged 8 to 14 script their own Roblox games in Luau.' },
        { code: 'AQP / KIDS / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic puzzles and step-by-step plans for ages 7 to 12, before or beside coding.' },
        { code: 'AQP / KIDS / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored in Python, for ages 10 to 15.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'AQP / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'From a first class to object-oriented programs, ages 13 to 18.' },
        { code: 'AQP / TEEN / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python, charts and first models for ages 14 to 18 who know some Python.' },
        { code: 'AQP / TEEN / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP Python', blurb: 'Python certification preparation from about 13, adults welcome too.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 18 and over', courses: [
        { code: 'AQP / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Zero to advanced Python for students and working adults.' },
        { code: 'AQP / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and dashboards, for beginners aged 18 and over.' },
        { code: 'AQP / ADULT / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Codex and Claude Code for professionals, with judgement kept human.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live online classes work from Arequipa',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'Early hours in Arequipa land in the Indian evening, a calm time for a first class.' },
      { time: 'After colegio', l: 'Afternoon and evening hours work too; you choose and the mentor adapts.' },
      { time: '1-on-1', l: 'A personal slot agreed with your mentor, on the days you pick.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person each week, who learns how the student thinks.' },
      { h3: 'English at your pace', p: 'Clear speech, simpler words on request, time to answer.' },
      { h3: 'Hands on the keyboard', p: 'The learner writes the code; the mentor guides.' },
      { h3: 'Grouped by age', p: 'Children, teenagers and adults never share a class.' },
      { h3: 'Families kept informed', p: 'What was built, what was hard, what is next.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or just one.' }
    ]
  },

  projectsH2: 'What our older students have built',
  projectsLede: 'Learners who keep going end up shipping real tools. A few are shown below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> collect many more.',
  reviewsLede: 'Google reviews from parents and students, quoted as they wrote them.',

  fees: {
    h2: 'Fees for learners in Arequipa',
    lede: 'Each plan is paid monthly. Fees are set in US dollars and charged to your card in dollars; your bank turns them into soles at its own rate, so the figure on your statement may be a little different.',
    free: ['A free first class', 'A short puzzle and a first program', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar age', 'The same mentor each week', 'Two live classes a week', 'Monthly, stop whenever you like'],
    one: ['One learner, one mentor', 'Projects chosen around the learner', 'Days and hours you pick']
  },

  faq: {
    eyebrow: 'Arequipa families ask',
    h2: 'Coding classes in Arequipa: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught in English only. Mentors speak slowly and clearly, adapt to the learner\'s pace and accent, and accept answers that mix in Spanish while they teach the English word. Scratch and Python look the same in any language.' },
      { q: 'Are there coding classes for kids in Arequipa?', a: 'Yes, live online. Children in Arequipa join our classes from home, from age 6 with Scratch and from about 9 with typed Python. There is no centre to travel to, so a child in Cayma, Cerro Colorado or Socabaya joins in exactly the same way.' },
      { q: 'Do you teach robotics in Arequipa?', a: 'We teach coding, not hardware, and we do not sell or ship robot kits. Coding is the part of robotics that transfers: a robot follows a program of steps, loops and conditions, which is what children learn first in Scratch. MINEDU itself describes robotics in school as a means, not the goal.' },
      { q: 'At what age can my child start?', a: 'From 6. Six and seven year olds start with Scratch blocks, where nothing has to be typed. From about 9, children move to typed Python. Teenagers can start from zero at 13, and adults at any age; our learners range from 6 to 67.' },
      { q: 'Do schools in Arequipa teach programming?', a: 'Not as a subject. Arequipa follows the national curriculum, where digital skills are a transversal competency across all areas and the 35-hour secundaria week has no computing area. MINEDU\'s Python pilot, Fábrica de Programadores, started in Lima Norte in 2025.' },
      { q: 'What time are classes in Arequipa?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Arequipa keeps Peru time all year; India is 10 hours 30 minutes ahead, so 09:00 in Arequipa is 19:30 for the mentor.' },
      { q: 'Can adults in Arequipa join?', a: 'Yes. University students and working adults take the same live classes in their own groups, usually Python first and then data analysis or AI agents. Classes fit around work, at whatever hour you choose.' },
      { q: 'Can you help my child prepare for the ONEM?', a: 'We teach the reasoning the ONEM rewards, with original problems we write ourselves, never the organiser\'s papers. Students enter the ONEM through their school, starting at the school stage, which in 2026 was held on 8 July. We are not connected with MINEDU or the ONEM.' },
      { q: 'How much does it cost, and in which currency?', a: 'The fee is monthly and shown on this page in US dollars, charged to your card in dollars; your bank converts it to soles. A visitor in India sees rupees instead. The first class is free and needs no card.' },
      { q: 'Do you give a certificate?', a: 'Courses that include one give our own certificate of completion. It is not a Peruvian school qualification and is not issued by MINEDU, a university or any school; what it shows is the work the learner has actually done.' },
      { q: 'What will my child actually build?', a: 'Younger children make games and animated stories in Scratch. From about 9 they write Python programs and simple games, and older children and teenagers work with real data, such as the Arequipa tourist inventory project on this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for Arequipa families and adult learners.',
    items: [
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Where six to eight year olds usually begin.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What typed code looks like at ten.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'AI for secundaria students, taught with care.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Starting at 18, 40 or 67.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools each age may use.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Arequipa',
    lede: 'The free class is a short puzzle and a first program. The mentor sees how the learner approaches a problem and how easily they follow English, then suggests a course and a group.',
    readFirst: 'If you would like to read more first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a live class, and <a class="ag-inline-link" href="/courses">all courses</a> lists every syllabus.',
    note: 'All classes are live online with mentors in India and are taught in English only. WhatsApp is the quickest way to reach us, in English.',
    formNote: 'Free, no card, no obligation to continue.'
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
    bottomRight: 'A dot can be a thousands separator'
  },

  personalityCss: `
.ag-root.ag-coar .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-coar .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-coar .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-coar .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-coar .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadro 1) and Perfil Sociodemográfico 2017 (Cuadro N° 1.9); Ley 28044; MINEDU Edades normativas, CNEB, RM 501-2025-MINEDU, ENLA 2025 report, Fábrica de Programadores, DITE robotics document; UGEL 06 oficio on ONEM 2026 and El Peruano; UTEC OPI pages and 2025 rules; EF EPI 2025; tz database America/Lima and INACAL. Data: Gobierno Regional de Arequipa, Inventario de Atractivos Turísticos de Arequipa, ODC-By.',
    localProject: 'Is the Colca Canyon three metres above the sea? An original Python project on the GORE Arequipa tourist inventory (ODC-By): Version 1 parses the hand-typed altitude column and finds the canyon at 3 m and Chivay at 3.635 m; Version 2 reads a dot before three digits as a thousands separator (Chivay 3635) and flags the canyon for a human check, leaving the Sangalle valley at 1,900 m as the lowest trusted Caylloma place. Lesson family: text that looks like a number is not a number yet.',
    requiredMentions: ['inventario-atractivos-turisticos-arequipa.csv', 'Places in Caylloma: 64', 'Check by hand: Cañon Del Colca 3.0 in Caylloma middle 3605.0', 'Chivay now reads: [3635.0]', '1,008,290', '1,814,554', 'empresa privada Aceros Arequipa', 'A dot can be a thousands separator', 'Arequipa city 512'],
    sources: [
      { claim: 'Department, province and district of Arequipa populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Arequipa city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Arequipa tourist attraction inventory and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/inventario-de-atractivos-tur%C3%ADsticos-de-arequipa' },
      { claim: 'CNEB transversal TIC competency and secundaria weekly hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative ages by grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Arequipa among the regions leading ENLA 2025 results.', url: 'https://www.gob.pe/institucion/minedu/noticias/1390772-enla-2025-se-mantienen-avances-en-lectura-y-matematica-con-mejoras-en-las-zonas-rurales' },
      { claim: 'Robotics as a means, since 1996; WeDo kits 2009 to 2010.', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'ONEM 2026 national stage, 1.7 million students, Aceros Arequipa partnership.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'ONEM 2026 levels, categories, school-stage date and format.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'OPI organiser, cost, 2026 dates and 2025 rules.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'EF EPI 2025 scores for Peru, Arequipa and Lima.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'The true altitude of the Colca Canyon entry: the file gives 3, no rule recovers the missing digits, and we print no replacement figure.',
      'Whether the Misti figure of 4,100 m is a summit or a visitor point: the file does not say, so the page asks it as a question.',
      'A combined Arequipa population made by adding city, province or district figures: never summed.',
      'Any robot kit or hardware: we teach coding only.',
      'Spanish-language teaching: every class is in English, and the page says so.',
      'Any connection with MINEDU, the ONEM, Aceros Arequipa, UTEC, the Gobierno Regional de Arequipa or any school: none.',
      'Naming Arequipa schools or academies as sources of students: refused.'
    ]
  }
};
