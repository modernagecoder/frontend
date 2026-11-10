// SHIP: market (region) | Cajamarca: a rural region of small schools, honest about English and devices | which share? counting rows against summing a column (schools versus pupils)
'use strict';
// Online coding and AI classes, Cajamarca region, Peru (ag- region page, Peru cluster row PE164; alloc: regions, cacr, #3E7232).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: flexible hours; USD only via
// data-price anchors.
// Spine: Cajamarca is Peru's most rural big region on these figures: 13 provinces, many tiny rural schools, the lowest home
// computer and internet shares of this group of pages and an EF EPI region score in the very low band. The page is frank
// about who our English-taught online classes suit here, and the project asks what "83 per cent rural" actually counts.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-cajamarca-region-peru/):
//  - INEI, Censos Nacionales 2025, Cuadro N° 1: CAJAMARCA 1490742; provinces CAJAMARCA 398064, CAJABAMBA 89617, CELENDÍN
//    88439, CHOTA 152852, CONTUMAZÁ 29655, CUTERVO 126940, HUALGAYOC 84419, JAÉN 211423, SAN IGNACIO 150670, SAN MARCOS
//    54540, SAN MIGUEL 47011, SAN PABLO 21511, SANTA CRUZ 35601; districts CAJAMARCA 242285, JAÉN 112826, BAMBAMARCA 69146,
//    LOS BAÑOS DEL INCA 63555. Capital Cajamarca (Compendio 2026 cuadro 1.8). Never summed.
//  - INEI Lib1539 Cuadro N° 1.9: Cajamarca city 201,329 (2017). Lib1541 dpto06.xlsx (single centro poblado 2017): JAEN 70214.
//  - INEI Compendio Estadístico Perú 2026, tomo 1 (ENAHO): cuadro 11.5 Cajamarca "14,6 13,3 14,7 13,4 16,3 16,9 18,8 18,4
//    18,2 18,4 17,5"; 11.6 "... 34,4 31,1 32,4 33,7"; 11.13 "... 50,4 59,9 62,3 67,8"; Total 2025 33,9 / 56,8 / 81,1.
//  - EF EPI 2025 (ef_peru.raw): border-epi-very-low ... data-state="cajamarca" Cajamarca 383; Peru 519 moderate.
//  - Dataset page (GORE Cajamarca): "El Dataset muestra información de las 9346 Instituciones Educativas de las 13 Unidades
//    de Gestión Educativa Local de la Región Cajamarca."
//  - Ley 28044, Edades normativas, CNEB competency 28 and JER hours, MINEDU 2026 opening, Fábrica de Programadores, ONEM
//    2026, OPI (FACTS 5, 6, 13, 14, 32, 33, 39, 17, 45, 99, 105, 111). Time: tzdata.
//  - Data: Gobierno Regional de Cajamarca (GORE Cajamarca), "Padrón Regional de Instituciones Educativas de la Región
//    Cajamarca", datosabiertos.gob.pe, "Open Data Commons Attribution License" (ODC-By), released 2022-10-18, modified
//    2022-10-24. File Padron-Instituciones-Educativas-Cajamarca.csv (saved as padron-cajamarca.csv), 5,321,418 bytes,
//    Latin-1, semicolons, 12,896 rows, FECHA_CORTE 20190911 on every row; ESTADO Activa 9,448, Inactiva 3,448; 13 UGELs.
//    It lists directors' names and contact details, which we never print.
// Our own calculations (scratchpad pe/r1/cacr/v1.py, v2.py, python3 -I):
//  v1 prints: Active primary schools: 3780 / Rural: 3139 / Rural share: 83.0 %
//  v2 prints: Skipped, no number: 79 / Rural share of schools: 83.4 % / Rural share of pupils: 43.9 % / Rural pupils per
//    school: 25.8 / Urbana pupils per school: 165.2
//  secundaria (same method): 67 skipped; rural 574 of 1,032 schools (55.6%), 39,974 of 136,130 pupils (29.4%); pupils per
//    school rural 69.6, urban 209.9. Active primary schools by type: Polidocente Multigrado 1,956, Unidocente 1,221,
//    Polidocente Completo 590, No disponible 13.
// Lesson family: which share? Counting rows gives the share of schools; summing a column gives the share of pupils; text
// such as "No Cuenta" in a number column must be skipped and counted, not converted.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'schools = rural = 0',
  'with open("padron-cajamarca.csv", newline="", encoding="latin-1") as padron:',
  '    for row in csv.DictReader(padron, delimiter=";"):',
  '        if row["NIVEL"] == "Primaria" and row["ESTADO"] == "Activa":',
  '            schools += 1',
  '            if row["AREA"] == "Rural":',
  '                rural += 1',
  '',
  'print("Active primary schools:", schools)',
  'print("Rural:", rural)',
  'print("Rural share:", round(100 * rural / schools, 1), "%")'
].join('\n');

const V2 = [
  'import csv',
  '',
  'pupils = {"Rural": 0, "Urbana": 0}',
  'schools = {"Rural": 0, "Urbana": 0}',
  'no_count = 0',
  'with open("padron-cajamarca.csv", newline="", encoding="latin-1") as padron:',
  '    for row in csv.DictReader(padron, delimiter=";"):',
  '        if row["NIVEL"] != "Primaria" or row["ESTADO"] != "Activa":',
  '            continue',
  '        enrolled = row["TOTAL_ESTUDIANTES_MATRICULADOS"].strip()',
  '        if not enrolled.isdigit():',
  '            no_count += 1',
  '            continue',
  '        schools[row["AREA"]] += 1',
  '        pupils[row["AREA"]] += int(enrolled)',
  '',
  'print("Skipped, no number:", no_count)',
  'share_schools = 100 * schools["Rural"] / sum(schools.values())',
  'share_pupils = 100 * pupils["Rural"] / sum(pupils.values())',
  'print("Rural share of schools:", round(share_schools, 1), "%")',
  'print("Rural share of pupils:", round(share_pupils, 1), "%")',
  'for area in ("Rural", "Urbana"):',
  '    print(area, "pupils per school:", round(pupils[area] / schools[area], 1))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Cajamarca region' },
  slug: 'online-coding-and-ai-classes-cajamarca-region-peru',
  code: 'cacr',
  accent: '#3E7232',
  accentRationale: 'Cajamarca region: a highland pasture green #3E7232, the fields around Los Baños del Inca, allocated to this row; contrast 5.42 on #FBF8F2, 5.09 on #F5F1E8 and 4.66 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Cajamarca region, Peru',
  title: 'Cajamarca Region, Peru: Online Coding and AI Classes in English',
  description: 'Live online coding and AI classes in English for Cajamarca region: who they suit, devices and English, school facts and a project on the regional schools register.',
  ogDescription: 'Coding and AI for learners in Cajamarca, Jaén, Chota, Cutervo and the rest of the region, taught live online in English: thirteen provinces in census figures, a frank look at home computers and English levels, and a Python project on the regional register of schools.',
  twitterDescription: 'Cajamarca region, live online coding in English: who it suits, honest device and English facts, a school-register project.',
  pageName: 'Online Coding and AI Classes in the Cajamarca Region',
  webPageDescription: 'A frank guide for learners across the Cajamarca region of Peru to live online coding and AI classes in English, built from INEI census and ENAHO tables, MINEDU curriculum sources, EF EPI 2025, and an original Python project on the GORE Cajamarca register of educational institutions (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Cajamarca region of Peru: Scratch and problem solving for children, Python, Java and web development for teenagers, Python, Java and data analysis for university students and adults, in groups of fifteen to twenty or one to one, at hours the learner chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Cajamarca region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#suits', label: 'Who it suits' },
    { href: '#thirteen', label: 'Provinces' },
    { href: '#schools-data', label: 'School project' },
    { href: '#devices', label: 'Devices' },
    { href: '#when', label: 'When' }
  ],
  eyebrow: 'Cajamarca region &middot; Live online, in English &middot; Teens and adults first',
  h1: 'Online coding and AI classes in the Cajamarca region',
  lede: 'Cajamarca is a region of thirteen provinces, from the capital\'s valley to Jaén and San Ignacio in the north, and most of its schools are small rural ones. Our classes are live, online and in English, which suits some learners here very well and others not yet. This page says honestly which is which, sets out the region in census and household figures, and uses the regional register of schools to show why "most schools are rural" and "most pupils are rural" are two different claims.',
  secondaryCta: { href: '#schools-data', label: 'See the school-register project' },
  wa: 'Hello Modern Age Coders, I am in the Cajamarca region of Peru and would like to know whether your live coding classes in English would suit me or my child. Could we try a free class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ learners in many countries &middot; mentors who teach English learners every day',
  spec: [
    ['Suits most', 'Teenagers and adults with some English; children at bilingual schools'],
    ['Also possible', 'Younger children, often one to one'],
    ['Language', 'English only, slow and clear'],
    ['Group size', 'Fifteen to twenty, or one learner'],
    ['Schedule', 'Any day, at the hour you set'],
    ['First step', 'A free class that checks English and device']
  ],
  capsuleQ: 'Briefly',
  capsule: 'Modern Age Coders offers live online coding and AI classes in English to learners anywhere in the Cajamarca region of Peru, from Cajamarca city and Jaén to Chota, Cutervo and Celendín. Teenagers and adults with some English get the most from them: Python, Java, web development, data and AI, taught by a mentor on video. Children from six can join too, usually starting with blocks and often one to one so the mentor can go slowly. Classes run in groups of fifteen to twenty or individually, at hours the learner chooses, and the first is free.',

  picks: {
    eyebrow: 'First courses for Cajamarca',
    h2: 'Three courses that suit Cajamarca learners best',
    lede: 'Two of the three are for older learners, because that is where English-taught classes fit most easily in this region; the third is a gentle start for children.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'CAJ / 01', title: 'Scratch Programming', note: 'For younger children. Visual blocks mean little reading and no typing, so a child can learn to code while their English is still growing, one to one if needed.' },
      { course: 'python-complete-masterclass-teens', code: 'CAJ / 02', title: 'Python for Teens', note: 'For secundaria students from zero. Python reads close to plain English, which makes it the friendliest first typed language for a learner improving their English too.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'CAJ / 03', title: 'Python Masterclass for Adults', note: 'For university students and working adults. From the first line to real projects, at hours around study, work or the farm.' }
    ]
  },

  sections: [
    {
      id: 'suits',
      eyebrow: 'Read this first',
      h2: 'Are English-taught online classes right for learners in Cajamarca?',
      lede: 'For many, yes; for some, not yet. Every class is live, online and in English, never in Spanish, and two figures matter here: English levels and home computers.',
      body: [
        { kind: 'two',
          leftH3: 'English in the region',
          left: [
            'EF\'s English Proficiency Index 2025 scores Peru 519, in its moderate band. The same edition gives the Cajamarca region 383, in EF\'s very low band, the lowest regional score on EF\'s Peru page.',
            'That does not mean nobody in Cajamarca speaks English. It means a typical child here will find an English-taught class hard at first, and we would rather say so than let a family find out after paying.'
          ],
          rightH3: 'Who does well with us here',
          right: [
            'Secundaria students who study English seriously and want programming at the same time. University students in engineering, systems or science, for whom technical English is part of the job. Adults who already read English at work. Children at bilingual schools.',
            'A young child from a Spanish-only home can still learn with us, usually one to one, with a mentor who speaks slowly, shows everything on screen and repeats the same short phrases every week.'
          ] },
        { kind: 'p', mt: true, html: 'The free first class is designed as an honest test. The mentor gives a small puzzle in simple English and watches how the learner follows. If the English is a real barrier, the mentor will say so and suggest waiting, a private plan, or a different starting point. Spanish-speaking parents can read our Spanish guide to <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">clases de programación para niños online en Perú</a> before deciding.' }
      ]
    },
    {
      id: 'thirteen',
      tint: 'tint',
      eyebrow: 'Thirteen provinces',
      h2: 'How many people live in the Cajamarca region, and where?',
      lede: 'The 2025 census counted 1,490,742 people in the department of Cajamarca, spread over thirteen provinces. The capital is the city of Cajamarca; Jaén is the main town of the north.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Cajamarca, total population by province, census 2025', head: ['Province', 'People in 2025'], rows: [
          ['Cajamarca', '398,064'],
          ['Jaén', '211,423'],
          ['Chota', '152,852'],
          ['San Ignacio', '150,670'],
          ['Cutervo', '126,940'],
          ['Cajabamba', '89,617'],
          ['Celendín', '88,439'],
          ['Hualgayoc (Bambamarca)', '84,419'],
          ['San Marcos', '54,540'],
          ['San Miguel', '47,011'],
          ['Santa Cruz', '35,601'],
          ['Contumazá', '29,655'],
          ['San Pablo', '21,511'],
          ['Department of Cajamarca', '1,490,742']
        ] },
        { kind: 'source', html: 'INEI, Censos Nacionales 2025, demographic indicators, Cuadro N° 1: total population at 15 September 2025, boundaries as of 15 July 2026. All fourteen figures are INEI\'s; the department total is not our sum of the provinces.' },
        { kind: 'two', mt: true,
          leftH3: 'Cajamarca city and its district',
          left: [
            'In the 2017 census INEI counted 201,329 people in the city of Cajamarca. In 2025 the district of Cajamarca alone counted 242,285, and neighbouring Los Baños del Inca 63,555.',
            'Those two figures measure different things in different years, a city in 2017 and a district in 2025, so we print both and compare neither.'
          ],
          rightH3: 'The north and the highlands',
          right: [
            'The district of Jaén had 112,826 people in 2025; its main populated centre counted 70,214 in INEI\'s 2017 directory. Bambamarca, in Hualgayoc, had 69,146 in 2025.',
            'Many families in Chota, Cutervo or San Ignacio live far from any town with a coding course. For a teenager there with a connection and a laptop, a live class from home is a real option.'
          ] }
      ]
    },
    {
      id: 'schools-data',
      eyebrow: 'A Cajamarca data project',
      h2: 'Do most Cajamarca children study in rural schools?',
      lede: 'It sounds like one question, but a program can answer two: what share of the schools are rural, and what share of the pupils are. The regional register of schools gives very different answers, and the difference is the lesson.',
      body: [
        { kind: 'two',
          leftH3: 'The register',
          left: [
            'The Gobierno Regional de Cajamarca publishes its "Padrón Regional de Instituciones Educativas de la Región Cajamarca" on datosabiertos.gob.pe, licensed under Open Data Commons Attribution (ODC-By). The publisher describes it as covering "las 9346 Instituciones Educativas de las 13 Unidades de Gestión Educativa Local".',
            'Our copy, padron-cajamarca.csv, has 12,896 rows, one for each school level and form, all with a cut-off date of 11 September 2019. So this project describes the register as it stood in 2019, not today. The file also holds directors\' names and contact details, which the lesson never touches.'
          ],
          rightH3: 'The trap',
          right: [
            'Each row has a level (Primaria, Secundaria and others), a status (Activa or Inactiva), an area (Rural or Urbana) and a column for enrolled pupils.',
            'Count the active primary rows marked Rural and divide by all active primary rows, and you get the share of schools. That is a true number. It is not the share of children, because a one-teacher school with twelve pupils and a city school with eight hundred each count as one row.'
          ] },
        { kind: 'code', label: 'Version 1: count the rows', lang: 'Python', code: V1, note: 'It prints: <code>Active primary schools: 3780</code>, <code>Rural: 3139</code> and <code>Rural share: 83.0 %</code>.' },
        { kind: 'p', mt: true, html: 'Eighty-three per cent sounds like an answer to "do most children study in rural schools?", and many people would stop here. To answer that question we need to add up pupils, not schools. Trying it straight away fails, because the enrolment column sometimes says "No Cuenta" instead of a number, and <code>int("No Cuenta")</code> stops the program.' },
        { kind: 'code', label: 'Version 2: add up the pupils, and say what was skipped', lang: 'Python', code: V2, note: 'It prints: <code>Skipped, no number: 79</code>, <code>Rural share of schools: 83.4 %</code>, <code>Rural share of pupils: 43.9 %</code>, <code>Rural pupils per school: 25.8</code> and <code>Urbana pupils per school: 165.2</code>.' },
        { kind: 'p', mt: true, html: 'Version 2 makes three changes. It skips the 79 active primary rows with no number, and says how many it skipped, so nobody is misled. It adds the enrolment column for each area. And it reports both shares side by side. Among the schools with a number, 83.4 per cent are rural, but they teach 43.9 per cent of the primary pupils, because the average rural primary school had 25.8 pupils and the average urban one 165.2. Both answers are correct; they answer different questions.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4], caption: 'Active schools with an enrolment figure, Cajamarca register, cut-off 11 September 2019 (our calculation)', head: ['Level and area', 'Schools', 'Pupils', 'Share of schools', 'Share of pupils'], rows: [
          ['Primaria, rural', '3,085', '79,641', '83.4%', '43.9%'],
          ['Primaria, urban', '616', '101,754', '16.6%', '56.1%'],
          ['Secundaria, rural', '574', '39,974', '55.6%', '29.4%'],
          ['Secundaria, urban', '458', '96,156', '44.4%', '70.6%']
        ] },
        { kind: 'source', html: 'Data: Gobierno Regional de Cajamarca, Padrón Regional de Instituciones Educativas de la Región Cajamarca, ODC-By. All counts, shares and averages are ours, from the 2019 cut-off in the file. Rows marked "No Cuenta" (79 in primaria, 67 in secundaria) are left out. Among the 3,780 active primary rows, 1,221 are described as single-teacher schools (Unidocente) and 1,956 as multigrade schools with several teachers (Polidocente Multigrado).' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, with toys.</strong> Put three toy schools in a row. Give two of them one doll each and the third ten dolls. Are most schools small? Are most dolls in small schools?',
          '<strong>Blocks, around 8 to 10.</strong> Make two lists, school sizes for five villages and for one town. Count the villages, then add up the children. Which number is bigger, and why?',
          '<strong>First Python, around 10 to 12.</strong> Run Version 1, then change it to count secundaria instead. Predict the share before you run it.',
          '<strong>Ages 13 and over.</strong> Remove the isdigit check from Version 2 and read the error. Then put it back, and print the names of the levels where "No Cuenta" appears most.',
          '<strong>Going further.</strong> Work out the same two shares for each UGEL. In which UGEL is the gap between the share of schools and the share of pupils widest?'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Curriculum',
      h2: 'Do Cajamarca\'s schools teach any programming?',
      lede: 'No, not as a subject. Schools in Cajamarca follow Peru\'s national curriculum, in which digital skills are expected inside every area and no area is dedicated to programming.',
      body: [
        { kind: 'two',
          leftH3: 'What the curriculum says',
          left: [
            'Primary school lasts six years and secondary five, under the General Education Law. MINEDU places children by their age on 31 March, so a child of six starts first grade and a sixteen year old is normally in fifth of secundaria.',
            'The curriculum\'s only technology competency, number 28, is transversal: it is meant to be developed in every area, which in a small multigrade school with one teacher for several grades is a lot to ask.'
          ],
          rightH3: 'What the timetable shows',
          right: [
            'The regular secundaria week has 35 hours. Four go to Matemática, four to Comunicación, three to Inglés and two to Educación para el Trabajo. None is called programming or computing.',
            'MINEDU\'s Python programme for secundaria, Fábrica de Programadores, began in July 2025 with 1,000 pupils in Lima Norte. Nothing comparable runs in Cajamarca\'s schools on the sources we checked.'
          ] },
        { kind: 'p', mt: true, html: 'Contests are open to Cajamarca pupils as to every pupil in Peru. The ONEM maths olympiad starts in each school; in 2026 its first round was on 8 July and more than 1.7 million pupils took part nationwide. UTEC\'s OPI programming olympiad is free for secundaria students. We are not connected with MINEDU, UTEC or either contest, and teach with problems we write ourselves.' }
      ]
    },
    {
      id: 'devices',
      eyebrow: 'At home',
      h2: 'How many Cajamarca homes have a computer and internet?',
      lede: 'Fewer than in most of Peru. INEI\'s 2025 household survey puts Cajamarca well below the national figures, which is the second honest point about online classes here.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Computers and internet: Cajamarca against Peru (per cent)', head: ['Indicator', 'Cajamarca 2022', 'Cajamarca 2025', 'Peru 2025'], rows: [
          ['Homes with a computer', '18.4', '17.5', '33.9'],
          ['Homes with internet', '34.4', '33.7', '56.8'],
          ['Internet users aged 6 and over', '50.4', '67.8', '81.1']
        ] },
        { kind: 'source', html: 'INEI, Compendio Estadístico Perú 2026, tomo 1, cuadros 11.5, 11.6 and 11.13, from the Encuesta Nacional de Hogares. Decimal commas shown as points.' },
        { kind: 'two', mt: true,
          leftH3: 'What these figures mean',
          left: [
            'In 2025 fewer than one Cajamarca home in five had a computer and about one in three had an internet service. Yet two thirds of people aged six and over used the internet, up from half in 2022, mostly through phones.',
            'A phone is fine for watching a class. It is not enough for writing programs, where the learner types, runs and fixes code for most of the hour.'
          ],
          rightH3: 'Practical options',
          right: [
            'Some families share one laptop between children on different days. Some learners use a computer at a relative\'s home, a library or a parent\'s workplace after hours. University students often have access through their faculty.',
            'Tell us what you have in the free class. If there is no computer at all, we will say honestly that it is better to wait, rather than sign up for a course that cannot work.'
          ] }
      ]
    },
    {
      id: 'paths',
      eyebrow: 'Choosing a course',
      h2: 'Which course should a Cajamarca learner choose?',
      lede: 'Start from the learner\'s age and their English. The table below is our guide; the ages are our own course ages.',
      body: [
        { kind: 'table', numCols: [], caption: 'A first course by age and English level (ours)', head: ['Learner', 'English now', 'Suggested start', 'Format we suggest'], rows: [
          ['Child, 6 to 9', 'Little or none', 'Scratch programming', 'One to one, with a parent nearby at first'],
          ['Child, 9 to 12', 'Some, from school', 'Problem solving, then Scratch or Python', 'Group or one to one'],
          ['Secundaria student', 'Studying English seriously', 'Python for Teens', 'Group'],
          ['Secundaria student aiming at university', 'Comfortable reading', 'Python, then Java or web', 'Group'],
          ['University student', 'Reads technical English', 'Python or Java masterclass', 'Group or one to one'],
          ['Working adult', 'Any, with patience', 'Python, then data analysis', 'Often one to one']
        ] },
        { kind: 'source', html: 'Our suggestions only. A child\'s grade follows MINEDU\'s age on 31 March, so two classmates can be almost a year apart in age.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Younger children', p: 'Blocks first, little reading, lots of showing. The mentor keeps the same words every week, so the English becomes familiar along with the code.' },
          { h3: 'Teenagers', p: 'Python first, because its keywords are plain English words. Students who keep going can move to Java, web or the PCEP certificate path.' },
          { h3: 'University and adults', p: 'Programming for engineering, systems or business work. Classes fit around lectures, jobs and long journeys home.' }
        ] },
        { kind: 'p', mt: true, html: 'University students can read our Spanish guide <a class="ag-inline-link" href="/cursos-de-programacion-para-universitarios-peru">cursos de programación para universitarios en Perú</a>, and anyone weighing Python can see <a class="ag-inline-link" href="/python-course-peru">our Python course page for Peru</a>. The national overview is <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'when',
      eyebrow: 'Timing',
      h2: 'When can a learner in Cajamarca take a class?',
      lede: 'At any hour that suits. Cajamarca keeps Peru time, and the mentor in India arranges the day around the learner.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example conversions from Cajamarca time to India time (not a timetable)', head: ['Cajamarca', 'India', 'In India it is'], rows: [
          ['05:30', '16:00', 'Afternoon'],
          ['07:00', '17:30', 'Early evening'],
          ['09:00', '19:30', 'Evening'],
          ['12:30', '23:00', 'Late evening'],
          ['17:00', '03:30', 'Next day, night'],
          ['21:00', '07:30', 'Next day, morning']
        ] },
        { kind: 'source', html: 'Peru: UTC minus 5 hours throughout the year, no daylight saving since 1994 (tz database, America/Lima). India: UTC plus 5 hours 30 minutes. Cajamarca is always 10 hours 30 minutes behind India.' },
        { kind: 'p', mt: true, html: 'Neither country changes its clocks, so a time agreed once holds all year. You choose the hour in your own clock when booking. Peru\'s 2026 school year started on 16 March 2026; families with school children often begin in the January to March holidays, while adults simply start when they are ready.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'How a Cajamarca learner progresses',
    lede: 'Our milestones, the same for every age. They help us place each learner and show families what has been learned.',
    table: { caption: 'Our stages, from first blocks to careful percentages', head: ['Stage', 'Commonly', 'What the learner can do'], rows: [
      ['1. Follow', '6 to 7', 'Make a sprite carry out steps in order'],
      ['2. Repeat', '7 to 9', 'Use loops so the same steps run many times'],
      ['3. Tally', '8 to 10', 'Count things with a variable'],
      ['4. Type', '9 to 12', 'Write short Python programs with if and for'],
      ['5. Total', '11 to adult', 'Add up a column, skipping and counting entries that are not numbers'],
      ['6. Ask which share', '13 to adult', 'Tell a share of rows from a share of a total, and say which the question needs']
    ] },
    left: { h3: 'For parents', ps: [
      'The school-register project practises stages 5 and 6. A learner who masters them will read "83 per cent" in a report and ask: 83 per cent of what?',
      'Each month you hear what your child built and explained.'
    ] },
    right: { h3: 'For learners', ps: [
      'Counting rows and adding a column are different questions.',
      'If you skip data, say how much you skipped.'
    ] }
  },

  catalogue: {
    eyebrow: 'More options',
    h2: 'Nine more courses for Cajamarca learners',
    lede: 'Three bands from children to adults, all taught live in English by one regular mentor, as a group class or privately.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'CAJ / KIDS / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Puzzles and step-by-step thinking before any code, ages 7 to 12.' },
        { code: 'CAJ / KIDS / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'From blocks to games and simple apps, ages 6 to 12.' },
        { code: 'CAJ / KIDS / 03', slug: 'block-coding-app-development-masterclass', title: 'Block-coding apps', blurb: 'Build phone apps with blocks, no typing needed.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CAJ / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented programming from a first class.' },
        { code: 'CAJ / TEEN / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Web development for teens', blurb: 'Pages, styles and a working back end.' },
        { code: 'CAJ / TEEN / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP', blurb: 'Python certification preparation, adults welcome.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'CAJ / ADULT / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java masterclass', blurb: 'Core Java through to Spring Boot.' },
        { code: 'CAJ / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Spreadsheets, SQL and Python for real reports.' },
        { code: 'CAJ / ADULT / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The maths behind shares, averages and surveys.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'In practice',
    h2: 'How live online classes work for the Cajamarca region',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early hours', l: 'A Cajamarca morning is late afternoon or evening in India.' },
      { time: 'Evenings', l: 'After school or work is possible as well.' },
      { time: 'One to one', l: 'The right choice when English needs extra time.' }
    ],
    cells: [
      { h3: 'The same mentor', p: 'Familiar voice and habits, week after week.' },
      { h3: 'Slow, clear English', p: 'Short phrases, repeated, always shown on screen.' },
      { h3: 'Learner does the work', p: 'Students write and run every program.' },
      { h3: 'Separate ages', p: 'Children, teenagers and adults never share a group.' },
      { h3: 'Honest updates', p: 'Families hear what went well and what was hard.' },
      { h3: 'Group or private', p: 'Fifteen to twenty together, or one alone.' }
    ]
  },

  projectsH2: 'Built by our longer-term students',
  projectsLede: 'Students who keep at it end up making working tools. Here are a few; the <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Google reviews from families and students, exactly as written.',

  fees: {
    h2: 'Fees for learners in Cajamarca',
    lede: 'Plans are paid monthly and priced in US dollars. Your card is charged in dollars and your bank converts that to soles at its own rate, so the soles figure on your statement may vary a little.',
    free: ['A free trial class', 'An English and device check', 'No card details'],
    group: ['Fifteen to twenty learners of a similar age', 'The same mentor each week', 'Two live classes weekly', 'Monthly, cancel any time'],
    one: ['One learner, one mentor', 'Extra time for English', 'Hours that you choose']
  },

  faq: {
    eyebrow: 'Cajamarca asks',
    h2: 'Online coding and AI classes in Cajamarca: common questions',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and in English only. Mentors speak slowly and clearly, adapt to each learner\'s pace and accent, and help a learner who answers in Spanish find the English words, but they always teach in English.' },
      { q: 'Is my child\'s English good enough?', a: 'The free class answers that. Many Cajamarca children are still early in English, so the mentor tests with a small puzzle in simple English. If it is too hard today, we will say so and suggest one-to-one lessons or waiting a while.' },
      { q: 'We only have a phone. Can my child join?', a: 'A phone works for watching but not for real programming, which needs typing. Young children can begin block coding on a tablet. From about nine, a laptop or desktop is needed, even a shared one.' },
      { q: 'Can learners in Jaén, Chota or Cutervo join?', a: 'Yes. Classes are online, so every province of the region works the same way, as long as the connection is steady and there is a suitable device.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Cajamarca is 10 hours 30 minutes behind India all year, so 07:00 in Cajamarca is 17:30 for the mentor.' },
      { q: 'Do schools in Cajamarca teach programming?', a: 'Not as a subject. Digital skills are meant to appear in all areas of the national curriculum, and the regular secundaria timetable has no programming hours.' },
      { q: 'Are the classes good for university students?', a: 'Yes, and they are often the strongest fit in this region. Python, Java and data analysis in English help with engineering, systems and science degrees, where much of the technical material is in English anyway.' },
      { q: 'Do you teach AI?', a: 'Yes. Teenagers and adults learn how AI models work and how to test them; children learn the ideas through small projects. Under-13s never use adult chatbot accounts in our classes.' },
      { q: 'How is payment made?', a: 'By card, monthly, in US dollars; your bank converts to soles. Visitors from India see rupees. The first class is free.' },
      { q: 'Will my child get a certificate?', a: 'Courses that include one give our own certificate of completion. It is not a Peruvian school qualification, and MINEDU, the regional government and schools do not issue or endorse it; it shows what the learner built.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Related pages',
    lede: 'Pages Cajamarca learners and parents may find useful next.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru guide, with the school system explained.' },
      { href: '/clases-de-programacion-para-ninos-online-peru', label: 'Clases de programación para niños online', p: 'Our guide for Spanish-speaking parents.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Starting to code as a grown-up.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'When a child is ready for typed code.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age rules for the main AI tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A walk through one live lesson.' }
    ]
  },

  start: {
    h2: 'Try a free class from Cajamarca',
    lede: 'The trial is short: a simple puzzle, a first program, and a check of English and equipment. The mentor then tells you plainly whether the classes suit the learner now, and if so, which course and format.',
    readFirst: 'If you would like to know more first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a full lesson and <a class="ag-inline-link" href="/courses">our courses</a> page lists every syllabus.',
    note: 'Classes are live and online, taught in English by mentors in India. Write to us on WhatsApp in English for the fastest answer.',
    formNote: 'Free, no card, and no pressure to continue.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'More', links: [
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: '83 per cent of what?'
  },

  personalityCss: `
.ag-root.ag-cacr .ag-hero h1 { letter-spacing: -0.008em; max-width: 21ch; }
.ag-root.ag-cacr .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-cacr .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-cacr .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-cacr .ag-code-head b { letter-spacing: 0.05em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro N° 1), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017; INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, ONEM 2026; UTEC OPI; EF EPI 2025; tz database. Data: GORE Cajamarca, Padrón Regional de Instituciones Educativas de la Región Cajamarca (cut-off 2019), ODC-By.',
    localProject: 'Do most Cajamarca children study in rural schools? An original Python project on the GORE Cajamarca register of educational institutions (ODC-By, cut-off 11 September 2019): Version 1 counts active primary rows and finds 83.0 per cent rural; Version 2 skips 79 "No Cuenta" rows, sums enrolment and finds 83.4 per cent of schools but 43.9 per cent of pupils rural (25.8 against 165.2 pupils per school). Lesson family: which share? Counting rows against summing a column.',
    requiredMentions: ['padron-cajamarca.csv', 'Active primary schools: 3780', 'Rural share of pupils: 43.9 %', 'Skipped, no number: 79', '1,490,742', 'gives the Cajamarca region 383', 'las 9346 Instituciones Educativas de las 13 Unidades de Gestión Educativa Local', '83 per cent of what?', 'Homes with a computer'],
    sources: [
      { claim: 'Department and province populations of Cajamarca, 2025, and district figures.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Cajamarca city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Jaén populated-centre figure, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto06.xlsx' },
      { claim: 'Computers, internet and internet use in Cajamarca and Peru, 2022 and 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'Register of educational institutions of the Cajamarca region, ODC-By, and its description.', url: 'https://www.datosabiertos.gob.pe/dataset/padr%C3%B3n-regional-de-instituciones-educativas-de-la-regi%C3%B3n-cajamarca-gobierno-regional' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative ages at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'ONEM 2026 participation and first round date.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'EF EPI 2025 scores for Peru and the Cajamarca region.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without daylight saving.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Present-day school counts: the register is cut at 11 September 2019 and is described as such.',
      'Reconciling the publisher\'s 9,346 institutions with the 12,896 rows or 9,448 active rows: not attempted, both shown as published.',
      'Directors\' names, phone numbers or e-mails from the register: never printed.',
      'Comparing the 2017 city figure with the 2025 district figure: refused.',
      'Any regional education news from the DRE Cajamarca: its gob.pe listing showed no 2026 items when checked, so none is quoted.',
      'Any connection with GORE Cajamarca, the DRE, MINEDU, UTEC or any school: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
