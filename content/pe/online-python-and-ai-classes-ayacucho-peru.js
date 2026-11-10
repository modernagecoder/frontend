// SHIP: market (city) | Ayacucho, all ages: Huamanga's student city, few home computers, Python step by step | file encodings: UnicodeDecodeError, errors="replace" loses letters, encoding="latin-1" reads them
'use strict';
// Online Python and AI classes in Ayacucho, Peru (ag- city page, Peru cluster row PE190; alloc: cities, pya, #60361F).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; USD only, through the template's data-price anchors. Audience: every age on one Python path, with weight on
// secundaria, university students and adults.
// Spine: Ayacucho (Huamanga) is a highland city with a large public university and fast-growing internet use, but only
// one home in five in the department has a computer and EF publishes no English score for it. The page explains the
// Python path, what sixty minutes of a live class contain, what equipment really matters, and teaches with a public
// university enrolment file that will not even open until the learner names its text encoding.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-python-and-ai-classes-ayacucho-peru/):
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (places.tsv): Ayacucho city 216,444 (22 October 2017).
//  - INEI Censos Nacionales 2025, Indicadores demográficos, Cuadro 1 (places.tsv): department AYACUCHO 709,029; province
//    HUAMANGA 318,114; district AYACUCHO 102,171. Capital Ayacucho (Compendio 2026 cuadro 1.8). Never summed.
//  - INEI Compendio Estadístico Perú 2026 tomo 1 (compendio2026-cuadros-11.5-11.6-11.13.txt), ENAHO: 11.5 Ayacucho "13,3
//    ... 19,6 20,9"; 11.6 Ayacucho "5,3 ... 34,3 35,5"; 11.13 Ayacucho "26,6 ... 69,6 73,5"; Totals 2025 33,9 / 56,8 / 81,1.
//  - EF EPI 2025 (ef_peru.raw): no Ayacucho city or region entry; Peru 519 moderate; Lima city 555 high.
//  - MINEDU Fábrica de Programadores (FACTS 45, 46): Python, 1,000 students, PCEP. OPI (FACTS 111, 116): free; Fase 1
//    C++ or Python. CNEB (FACTS 33, 39): TIC transversal; no computing area.
//  - Time (timezone.tsv): America/Lima UTC-5 all year; India 10 h 30 min ahead.
//  - Data: Universidad Nacional de San Cristóbal de Huamanga (UNSCH), "Estudiantes matriculados de la Universidad
//    Nacional de San Cristóbal de Huamanga - [UNSCH]", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/estudiantes-matriculados-de-la-universidad-nacional-de-san-crist%C3%B3bal-de-huamanga-unsch,
//    licence "Open Data Commons Attribution License" (dataset-page.html), modified 2024-05-31, frequency semiannual. File
//    matricula-2024-1-UNSCH.csv, 2,327,262 bytes, sha256 bb69488e...29c69932a4a4eb6686af24ea673eb52af690, ISO-8859-1, ';',
//    11,993 rows; every PERIODO_MATRICULA is "2023-1", FECHA_CORTE 20240523. Dictionary (diccionario-unsch.xlsx):
//    UBIGEO/DEPARTAMENTO = where the student was born. Columns used: ESCUELA_PROFESIONAL, FACULTAD, DEPARTAMENTO only. Birth
//    date, disability, grades and sex are never read.
// Our own calculations (scratchpad pe/c5/pya/v1.py, v1b.py, v2.py; python3 -I):
//  v1 stops with: UnicodeDecodeError: 'utf-8' codec can't decode byte 0xcd in position 380: invalid continuation byte
//  v1b prints: 11993 / INGENIER�A AGR�COLA / False
//  v2 prints: Students: 11993 in 28 schools / 957 INGENIERÍA CIVIL / 740 DERECHO / 617 ECONOMÍA / True / Letters outside
//    plain ASCII: {'Í': 8487, 'Ó': 2243, 'Á': 108}
//  summary: born in the Ayacucho department 11,620 of 11,993; Cusco 204; Apurímac 71. Escuelas starting "INGENIER" 3,446
//    students; Ingeniería de Sistemas 587. Faculty spelled "INGENIERIA QUÍMICA Y METALURGIA" (707) without the first
//    accent, next to "INGENIERÍA DE MINAS, GEOLOGÍA Y CIVIL" (2,116).
// Lesson family: text encodings. A file is bytes; open it with the wrong encoding and Python stops (UnicodeDecodeError)
// or, with errors="replace", silently turns letters into a replacement mark; name the right encoding and they return.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'with open("matricula-2024-1-UNSCH.csv", encoding="utf-8") as data:',
  '    students = list(csv.DictReader(data, delimiter=";"))',
  'print(len(students))'
].join('\n');

const V1B = [
  'import csv',
  '',
  'with open("matricula-2024-1-UNSCH.csv", encoding="utf-8", errors="replace") as data:',
  '    students = list(csv.DictReader(data, delimiter=";"))',
  'print(len(students))',
  'print(students[0]["ESCUELA_PROFESIONAL"])',
  'print("INGENIERÍA CIVIL" in [s["ESCUELA_PROFESIONAL"] for s in students])'
].join('\n');

const V2 = [
  'import csv',
  'from collections import Counter',
  '',
  'with open("matricula-2024-1-UNSCH.csv", encoding="latin-1") as data:',
  '    students = list(csv.DictReader(data, delimiter=";"))',
  '',
  'schools = Counter(s["ESCUELA_PROFESIONAL"] for s in students)',
  'print("Students:", len(students), "in", len(schools), "schools")',
  'for name, n in schools.most_common(3):',
  '    print(n, name)',
  'print("INGENIERÍA CIVIL" in schools)',
  '',
  'accented = Counter(ch for s in students for ch in s["ESCUELA_PROFESIONAL"] if ord(ch) > 127)',
  'print("Letters outside plain ASCII:", dict(accented))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Ayacucho: Python and AI, all ages' },
  slug: 'online-python-and-ai-classes-ayacucho-peru',
  code: 'pya',
  accent: '#60361F',
  accentRationale: 'Online Python and AI classes in Ayacucho: the allocated #60361F, a deep earth brown like Huamanga\'s carved stone; contrast 9.69 on #FBF8F2, 9.11 on #F5F1E8 and 8.34 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online Python and AI classes in Ayacucho, Peru',
  title: 'Online Python and AI Classes in Ayacucho, Peru: Live, in English',
  description: 'Online Python and AI classes in Ayacucho for teens, students and adults: live in English at flexible hours, inside a 60-minute class, and a Huamanga data project.',
  ogDescription: 'Live online Python and AI classes for Ayacucho learners from age 9 to adult, taught in English at any hour: the Python path, what sixty minutes of a live class contain, honest equipment advice, and a project on a Huamanga university enrolment file that teaches text encodings.',
  twitterDescription: 'Python and AI in Ayacucho, live online in English: the path, a class minute by minute, and an encodings project.',
  pageName: 'Online Python and AI Classes in Ayacucho, Peru',
  webPageDescription: 'A guide for Ayacucho learners of every age to live online Python and AI classes taught in English, built from INEI census and household-survey figures, MINEDU and UTEC sources, and an original Python project on the UNSCH enrolment dataset (ODC-By) about text encodings.',
  courseDescription: 'Live online Python and AI classes in English for learners in Ayacucho, Peru: Python for children from about 9 and teenagers, Python, data and AI for university students and adults, in a group of fifteen to twenty or one to one, at hours the learner chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Ayacucho, Python and AI',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#why-python', label: 'Why Python' },
    { href: '#sixty', label: 'A class' },
    { href: '#kit', label: 'Equipment' },
    { href: '#encodings', label: 'Huamanga project' },
    { href: '#ayacucho-clock', label: 'Times' }
  ],
  eyebrow: 'Ayacucho &middot; Python and AI &middot; Live online, in English &middot; Age 9 to adult',
  h1: 'Online Python and AI classes in Ayacucho, Peru',
  lede: 'Huamanga is a student city: its public university alone enrolled close to twelve thousand students in one semester. Python is the language most of them will meet, in engineering, economics, biology and beyond. This page explains why Python is a sensible first language at any age, what happens inside sixty minutes of a live online class, what equipment really matters in Ayacucho, and a project in which a real university file refuses to open until the learner understands how text is stored.',
  secondaryCta: { href: '#encodings', label: 'See the Huamanga project' },
  wa: 'Hello Modern Age Coders, I am in Ayacucho, Peru and would like live online Python classes in English. Could I book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; above 10,000 learners worldwide &middot; mentors who explain the why behind every line',
  spec: [
    ['Learners', 'From about 9 to adult'],
    ['Language', 'Python, then data and AI'],
    ['Class format', 'Fifteen to twenty, or one to one'],
    ['Ayacucho hours', 'Any day, at any hour booked'],
    ['Mentors', 'Based in India, on live video'],
    ['First step', 'A free class, card not needed']
  ],
  capsuleQ: 'In brief, for Ayacucho',
  capsule: 'Ayacucho learners can study Python and AI with Modern Age Coders, live online and in English, at every age. Nine to twelve year olds write their first typed programs, teenagers learn complete Python and can prepare for the PCEP certificate, and university students and adults use Python for data, automation and AI. Every class is run live by a mentor on video, with fifteen to twenty classmates or alone with the mentor, at whichever hours the learner books. Learners write and debug their own code; nobody is taught to copy.',

  picks: {
    eyebrow: 'Starting Python in Ayacucho',
    h2: 'Three ways into Python from Ayacucho',
    lede: 'Teenagers, university students and working adults are the largest groups; children who are ready can start too.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'AYA / 01', title: 'Python for teenagers', note: 'Ages 13 to 18 with no experience. Clear foundations, then files and data, alongside 1° to 5° de secundaria.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'AYA / 02', title: 'Python Masterclass', note: 'For university students and adults. From a first script to real data and automation, useful in engineering, economics, biology or an office job.' },
      { course: 'data-analysis-mastery-course-college', code: 'AYA / 03', title: 'Data analysis', note: 'For adults aged 18 and over. Spreadsheets, SQL and Python, so that a messy file becomes a clear answer.' }
    ]
  },

  sections: [
    {
      id: 'huamanga',
      eyebrow: 'Ayacucho in numbers',
      h2: 'What is the population of Ayacucho, and are its homes connected?',
      lede: 'The city of Ayacucho, often called Huamanga, is the capital of a department where internet use has nearly tripled in a decade while computers remain scarce.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Ayacucho\'s population, unit by unit', head: ['Unit', 'Residents', 'Census'], rows: [
          ['Ayacucho city (Huamanga)', '216,444', '2017'],
          ['Department of Ayacucho', '709,029', '2025'],
          ['Province of Huamanga', '318,114', '2025'],
          ['District of Ayacucho', '102,171', '2025']
        ] },
        { kind: 'source', html: 'INEI: table 1.9 of Perú: Perfil Sociodemográfico 2017 for the city; table 1 of the Censos Nacionales 2025 demographic indicators for the rest. No 2025 city figure had been published as of November 2026. The units overlap and are kept apart.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Online in Ayacucho, then and now (per cent)', head: ['Measure', 'Ayacucho 2015', 'Ayacucho 2025', 'Peru 2025'], rows: [
          ['People aged 6 and over who use the internet', '26.6', '73.5', '81.1'],
          ['Homes with an internet service', '5.3', '35.5', '56.8'],
          ['Homes with a computer', '13.3', '20.9', '33.9']
        ] },
        { kind: 'source', html: 'Figures from tables 11.13, 11.6 and 11.5 of the first volume of INEI\'s 2026 statistical compendium, based on the ENAHO survey. Decimal commas changed to points. The 2015 comparison is ours.' },
        { kind: 'p', mt: true, html: 'Three in four people over six in the department now use the internet, up from about one in four in 2015. But only about one home in three has its own internet service and one in five has a computer. Many Ayacucho learners go online by phone or at a university lab, which shapes our advice on equipment further down.' }
      ]
    },
    {
      id: 'why-python',
      eyebrow: 'Why Python',
      h2: 'Why learn Python first, and is it taught at school in Ayacucho?',
      lede: 'Python reads almost like English, runs on any computer, and is used everywhere from engineering to AI. Peruvian schools do not teach it as a subject.',
      body: [
        { kind: 'two',
          leftH3: 'A first language that lasts',
          left: [
            'Python lets a beginner write something useful in the first hour: add up a list, read a file, draw a chart. The same language then carries a learner into data science, machine learning and AI tools, so nothing learned at the start is thrown away.',
            'Its words are short and English: print, for, if, return. For a learner in Ayacucho, that is also steady English practice.'
          ],
          rightH3: 'Not on the school timetable',
          right: [
            'The national curriculum makes digital skills transversal and gives secundaria no computing area. MINEDU has begun a Python pilot, Fábrica de Programadores, for 1,000 students in Lima Norte, ending with the PCEP certificate; it has not reached Ayacucho.',
            'So a secundaria student in Ayacucho who wants Python learns it outside school, as university students often do before their courses require it.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'The Python path for Ayacucho learners (our stages and ages)', head: ['Who', 'Course', 'They come out able to'], rows: [
          ['Children about 9 to 12', 'Python and AI for Kids', 'Write short programs with loops, choices and drawings'],
          ['Teenagers 13 to 18', 'Python for Teens, then PCEP', 'Use functions and files; sit an entry-level certificate'],
          ['University students', 'Python Masterclass', 'Handle course data, automate lab work, start in AI'],
          ['Adults at work', 'Python and AI automation, data analysis', 'Turn repetitive tasks and messy files into scripts'],
          ['Anyone curious about AI', 'Generative AI, after Python', 'Use and test AI tools with judgement']
        ] },
        { kind: 'source', html: 'Path, courses and outcomes are ours. The OPI, UTEC\'s free computing olympiad for secundaria students, also accepts Python in its first round, which gives teenagers one more reason to start with it.' },
        { kind: 'p', mt: true, html: 'Engineering students will find more on the subject in <a class="ag-inline-link" href="/python-for-engineering-students-peru">Python for engineering students in Peru</a>, and in Spanish in <a class="ag-inline-link" href="/python-para-estudiantes-de-ingenieria-peru">Python para estudiantes de ingeniería</a>.' }
      ]
    },
    {
      id: 'sixty',
      tint: 'tint',
      eyebrow: 'Inside a class',
      h2: 'What happens in sixty minutes of a live online Python class?',
      lede: 'A live class is a conversation with a keyboard in it. Here is a typical hour for a group of adult beginners; children\'s classes are shorter and more playful, but follow the same pattern.',
      body: [
        { kind: 'table', numCols: [], caption: 'A typical live hour, minute by minute (our lesson plan)', head: ['Minutes', 'What happens', 'Who is doing it'], rows: [
          ['0 to 5', 'Hello, a quick question about last week\'s exercise', 'Learners answer, mentor listens'],
          ['5 to 15', 'One new idea, shown on the mentor\'s screen', 'Mentor explains, learners ask'],
          ['15 to 35', 'Everyone types the idea and changes it', 'Learners code, mentor visits each screen'],
          ['35 to 50', 'A problem that needs the new idea', 'Learners solve, some share their screen'],
          ['50 to 60', 'What went wrong, what we learned, the next exercise', 'Whole group']
        ] },
        { kind: 'source', html: 'Our own plan; mentors adjust it to the group. Group classes meet twice a week.' },
        { kind: 'two', mt: true,
          leftH3: 'Errors are the lesson',
          left: [
            'When a learner\'s program fails, the mentor does not fix it for them. The learner reads the error message aloud, says what they think it means, and tries a change. Most of the learning in an hour happens in those moments.',
            'That is also how we keep AI in its place: a suggestion from any tool is tested like any other code, and the learner must explain why it works.'
          ],
          rightH3: 'Group or private',
          right: [
            'A group of fifteen to twenty learners of a similar age suits most people, and other learners\' questions help. A one-to-one hour suits shift workers, university students with changing timetables, and anyone who wants their own pace.',
            'Either way, the mentor stays the same, and knows your code from week to week.'
          ] }
      ]
    },
    {
      id: 'kit',
      eyebrow: 'Equipment',
      h2: 'What do you need at home in Ayacucho to learn Python online?',
      lede: 'Less than people fear, but more than a phone. Here is our honest list.',
      body: [
        { kind: 'ol', items: [
          '<strong>A computer with a keyboard.</strong> Any laptop or desktop from the last several years is enough. Python is free and light. Typing code on a phone is not practical, and we will say so.',
          '<strong>A connection that holds a video call.</strong> Speed matters less than steadiness. If home internet is not available, a university lab, a relative\'s home or a quiet internet café hour can work.',
          '<strong>A headset with a microphone.</strong> It makes the mentor clearer and lets you speak without the whole house hearing.',
          '<strong>A regular hour.</strong> Because we teach at any time you book, choose an hour when the computer and the connection are reliably free.',
          '<strong>Patience with English.</strong> Mentors slow down and rephrase. You do not need fluent English; you need to be willing to listen and ask.'
        ] },
        { kind: 'p', mt: true, html: 'INEI\'s 2025 figures put a computer in about one Ayacucho home in five. If you do not have one, tell us at the free class. We would rather plan around a shared or borrowed machine, or tell you a course will not work yet, than sell a place you cannot use.' }
      ]
    },
    {
      id: 'english-aya',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish?',
      lede: 'No. Every class is live, online and in English only, with mentors who speak plainly and patiently.',
      body: [
        { kind: 'two',
          leftH3: 'What we know about English here',
          left: [
            'In EF\'s 2025 English index, Peru as a whole sits at 519, a moderate result, while Lima city reaches 555, a high one. It publishes no score for Ayacucho city or the Ayacucho region, so we cannot quote one and will not guess.',
            'Our experience is that many university students read technical English better than they speak it. Python classes use that strength: code and errors are written English, and listening improves week by week.'
          ],
          rightH3: 'How mentors adapt',
          right: [
            'Mentors speak at a steady pace, write key words in the chat, and rephrase instead of repeating louder. They wait for answers and accept a mix of English and Spanish while giving the English terms.',
            'The free class includes a short check of how comfortable the learner is. If English is a real barrier, one to one is the gentler route.'
          ] },
        { kind: 'p', mt: true, html: 'Why we insist on reasoning rather than copied answers, in any language, is set out in <a class="ag-inline-link" href="/learn-to-think-not-copy-coding-peru">learn to think, not copy</a>.' }
      ]
    },
    {
      id: 'encodings',
      eyebrow: 'A real Huamanga project',
      h2: 'Why does a Huamanga university file break Python before it starts?',
      lede: 'The Universidad Nacional de San Cristóbal de Huamanga publishes its undergraduate enrolment as open data. Our learners use it to meet a problem every Spanish-speaking programmer meets sooner or later: letters with accents, and the encoding a file was saved in.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset "Estudiantes matriculados de la Universidad Nacional de San Cristóbal de Huamanga" is on Peru\'s open data platform under the Open Data Commons Attribution Licence (ODC-By). Its file, matricula-2024-1-UNSCH.csv, has 11,993 rows, one per enrolled student, with the student\'s professional school, faculty and place of birth. Identifiers are anonymised.',
            'Two small puzzles are already in the file. Its name says 2024-1, but every row\'s enrolment period says 2023-1, and the portal describes it as 2023 enrolment. And it was saved in an older text encoding, Latin-1, not UTF-8. We use only the school, faculty and birthplace columns; we have no connection with the university.'
          ],
          rightH3: 'The question',
          right: [
            'A simple first task: how many students are there, and which professional schools are largest? Any beginner can write that in five lines.',
            'Python 3 assumes UTF-8, the modern standard, unless told otherwise. That assumption is where the trouble begins.'
          ] },
        { kind: 'code', label: 'Version 1: open it the usual way', lang: 'Python', code: V1, note: 'It stops with <code>UnicodeDecodeError: \'utf-8\' codec can\'t decode byte 0xcd in position 380: invalid continuation byte</code>.' },
        { kind: 'p', mt: true, html: 'Byte 0xcd is how Latin-1 stores the letter Í, as in INGENIERÍA. In UTF-8 that same byte means "a two-byte letter starts here", and the next byte does not fit, so Python refuses. Learners often search for a quick way past the error and find <code>errors="replace"</code>. It makes the error go away, which is exactly the danger.' },
        { kind: 'code', label: 'Version 1b: hide the error', lang: 'Python', code: V1B, note: 'It prints <code>11993</code>, then <code>INGENIER�A AGR�COLA</code>, then <code>False</code>.' },
        { kind: 'p', mt: true, html: 'The program now runs and counts every student, but each Í and Ó has become the replacement mark �. Worse, a search for the Civil Engineering school answers False, as if no one studied it. Nothing crashed, and the answer is wrong. That is the lesson in one line: a program that runs is not a program that is right.' },
        { kind: 'code', label: 'Version 2: name the encoding the file really uses', lang: 'Python', code: V2, note: 'It prints <code>Students: 11993 in 28 schools</code>, then <code>957 INGENIERÍA CIVIL</code>, <code>740 DERECHO</code>, <code>617 ECONOMÍA</code>, then <code>True</code>, and finally <code>Letters outside plain ASCII: {\'Í\': 8487, \'Ó\': 2243, \'Á\': 108}</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'The largest professional schools in the file, read with the right encoding (our count)', head: ['Professional school', 'Students in the file'], rows: [
          ['Ingeniería Civil', '957'],
          ['Derecho', '740'],
          ['Economía', '617'],
          ['Contabilidad y Auditoría', '612'],
          ['Biología', '610'],
          ['Ingeniería de Sistemas', '587']
        ] },
        { kind: 'source', html: 'Data: Universidad Nacional de San Cristóbal de Huamanga, Estudiantes matriculados, on datosabiertos.gob.pe, Open Data Commons Attribution Licence (ODC-By). Counts are our own, from 11,993 rows across 28 professional schools. By birthplace, 11,620 students were born in the Ayacucho department, 204 in Cusco and 71 in Apurímac. Students\' dates of birth, grades and other personal columns are never read.' },
        { kind: 'p', mt: true, html: 'With <code>encoding="latin-1"</code> every letter comes back and Civil Engineering is found. The last line counts the letters that needed care: 8,487 Í, 2,243 Ó and 108 Á in the school names alone. One more detail rewards a sharp eye: the faculty "INGENIERIA QUÍMICA Y METALURGIA" is typed without the accent on its first word, while the faculty next to it has one. So even with the right encoding, a search for "INGENIERÍA" in the faculty column misses 707 students. Real data needs checking twice.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12.</strong> Type the words Perú, año and Huamanga in a text editor, save the file in two different encodings, and open each one as if it were the other. Which letters survive?',
          '<strong>Ages 13 to 18.</strong> Run Version 1, read the error aloud, and explain "byte 0xcd" in your own words before running Version 2.',
          '<strong>University students.</strong> Count students by faculty. Then write a check that warns when two faculty names differ only by an accent.',
          '<strong>Adults.</strong> Write a function that tries UTF-8 first and Latin-1 second, and reports which one worked, so your scripts never guess silently.'
        ] }
      ]
    },
    {
      id: 'ayacucho-clock',
      eyebrow: 'Class times',
      h2: 'What time are live classes for learners in Ayacucho?',
      lede: 'Any time the learner books. Ayacucho runs on Peru time throughout the year, and mentors plan around that.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ayacucho hours converted to India time (illustrations, not a timetable)', head: ['Ayacucho', 'India', 'Good for'], rows: [
          ['06:00', '16:30', 'Before a university morning'],
          ['08:00', '18:30', 'Secundaria students on the afternoon shift'],
          ['11:30', '22:00', 'A mid-morning gap in a timetable'],
          ['14:00', '00:30, next day', 'After a morning shift at school'],
          ['19:00', '05:30, next day', 'Adults after work']
        ] },
        { kind: 'source', html: 'Peru stays on UTC minus 5 hours all year, without summer time since 1994 (tz database zone America/Lima; INACAL keeps official time). India runs five and a half hours ahead of UTC, so it is always 10 hours 30 minutes ahead of Ayacucho.' },
        { kind: 'p', mt: true, html: 'With neither clock changing, a booked hour stays the same through the year. Learners book in Ayacucho time and the mentor sees India time. University students often switch to one to one at the start of each semester, when their own timetable changes.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Python milestones for an Ayacucho learner',
    lede: 'Our milestones, the same at any age, used to place learners and report progress honestly.',
    table: { caption: 'From first script to trustworthy results (ours)', head: ['Milestone', 'Commonly reached', 'The learner can'], rows: [
      ['1. Print and loop', 'First weeks', 'Run a script that repeats and decides'],
      ['2. Functions', 'First months', 'Package logic into functions and reuse it'],
      ['3. Files', 'Within a term', 'Open a CSV and count what it holds'],
      ['4. Encodings', 'Within a term', 'Name a file\'s encoding and explain a decode error'],
      ['5. Clean data', 'Second term', 'Find inconsistent spellings and fix them on purpose'],
      ['6. AI with checks', 'Later', 'Use AI tools and test every result they give']
    ] },
    left: { h3: 'For parents and learners', ps: [
      'Milestone 4 is the Huamanga project. Knowing why a file breaks, rather than hiding the error, is the mark of a careful programmer.',
      'Each progress report lists skills shown in class, not hours attended.'
    ] },
    right: { h3: 'Rules of thumb', ps: [
      'A program that runs is not a program that is right.',
      'Before you open a file, ask how it was saved.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine further courses for Ayacucho learners',
    lede: 'From secundaria to the workplace, each one live, in English, with the same mentor all course.',
    bands: [
      { num: 'I', h3: 'Children and teenagers', sub: 'Ages 9 to 18', courses: [
        { code: 'AYA / S / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python for 9 to 12 year olds.' },
        { code: 'AYA / S / 02', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP Python', blurb: 'Two Python Institute exams, prepared step by step.' },
        { code: 'AYA / S / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Graphs, statistics and a first predictive model.' }
      ] },
      { num: 'II', h3: 'University', sub: 'Ages 17 and over', courses: [
        { code: 'AYA / U / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The core of computing courses and technical interviews.' },
        { code: 'AYA / U / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL databases', blurb: 'Tables, queries and design for real projects.' },
        { code: 'AYA / U / 03', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'From cleaning to models, in Python.' }
      ] },
      { num: 'III', h3: 'Work and AI', sub: 'Adults', courses: [
        { code: 'AYA / W / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI automation', blurb: 'Let code handle the dull, repeated parts of a job.' },
        { code: 'AYA / W / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'Inside chatbots and image tools, and building on them responsibly.' },
        { code: 'AYA / W / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'Analysis with AI help, for people who do not code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Scheduling',
    h2: 'Fitting live Python classes into an Ayacucho week',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Dawn', l: 'Ayacucho\'s early hours fall in India\'s late afternoon.' },
      { time: 'Between classes', l: 'University gaps and evenings both work.' },
      { time: 'One to one', l: 'An hour that moves with your semester or shifts.' }
    ],
    cells: [
      { h3: 'Constant mentor', p: 'One teacher, who knows your past code.' },
      { h3: 'Patient English', p: 'Plain speech, key words in the chat.' },
      { h3: 'Learner at the keyboard', p: 'You write it, run it, fix it.' },
      { h3: 'Matched groups', p: 'Children, teens and adults apart.' },
      { h3: 'Monthly notes', p: 'What you can now do, in plain words.' },
      { h3: 'Two ways', p: 'Fifteen to twenty learners, or just you.' }
    ]
  },

  projectsH2: 'Things our students have built',
  projectsLede: 'Learners who keep at it produce real tools. Some are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Learners and parents on Google, quoted without edits.',

  fees: {
    h2: 'Fees for Python classes in Ayacucho',
    lede: 'Every plan is monthly and priced in US dollars. Your card is charged in dollars and your bank applies its own soles rate, so the amount on your statement can move slightly from month to month.',
    free: ['A free trial class', 'A first program and a level check', 'No card to give'],
    group: ['A class of fifteen to twenty peers', 'The same mentor all course', 'Two live classes per week', 'Monthly; stop any month'],
    one: ['You and one mentor', 'Your goals, your pace', 'Hours you book']
  },

  faq: {
    eyebrow: 'Ayacucho learners ask',
    h2: 'Python and AI classes in Ayacucho: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our teaching happens live, over the internet, in English and nothing else. Mentors speak steadily, adapt to the learner\'s pace and accent, write key words in the chat and accept questions in mixed English and Spanish while giving the English terms.' },
      { q: 'Is there a Python course in Ayacucho?', a: 'Yes, live online. Learners in Huamanga, Carmen Alto, San Juan Bautista, Jesús Nazareno or anywhere in the department join from a computer at home, at a relative\'s or in a lab.' },
      { q: 'I am a university student. Is this useful alongside my degree?', a: 'Often, yes. Engineering, economics, biology and accounting students use Python for data and automation. We teach alongside your studies and have no connection with any university; your university decides what counts for your degree.' },
      { q: 'Do I need a computer?', a: 'Yes: any laptop or desktop, because code is typed on a proper keyboard and a phone will not do. In 2025 INEI counted a computer in 20.9% of Ayacucho homes, so many learners use a shared or borrowed machine; tell us and we will plan around it.' },
      { q: 'What is the youngest age for Python?', a: 'About nine. Younger children start with Scratch blocks. There is no upper age limit; adults of any age are welcome.' },
      { q: 'When can I have classes from Ayacucho?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Ayacucho all year, so 08:00 in Ayacucho is 18:30 for the mentor.' },
      { q: 'Will I learn AI too?', a: 'Yes, after the Python foundations. Learners move on to data science, machine learning or generative AI, always testing AI output rather than pasting it. Under-18 learners only use tools their age allows.' },
      { q: 'What is the Huamanga project?', a: 'Learners open a real enrolment file from the Universidad Nacional de San Cristóbal de Huamanga, published as open data. It fails with a UnicodeDecodeError until they name its Latin-1 encoding, and a quick fix silently corrupts every accented letter. It teaches that a program that runs is not always right.' },
      { q: 'In what currency do I pay?', a: 'In US dollars, once a month, on a card; the soles amount is set by your bank. Someone browsing from India would see rupees. The trial lesson is free and asks for no card.' },
      { q: 'Do I receive a certificate?', a: 'Where a course includes one, we issue a completion certificate in our own name. No university or ministry issues it and it is not a Peruvian degree or school qualification. If you sit PCEP, that certificate is the Python Institute\'s, earned in its exam.' }
    ]
  },

  elsewhere: {
    eyebrow: 'See also',
    h2: 'Related pages for Ayacucho learners',
    lede: 'Python, university and AI pages for Peru, and how we teach.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru page, grouped by age and topic.' },
      { href: '/python-course-peru', label: 'Python classes across Peru', p: 'Learning Python from anywhere in Peru.' },
      { href: '/coding-courses-for-university-students-peru', label: 'Coding courses for university students in Peru', p: 'Python, Java and data for undergraduates.' },
      { href: '/python-for-engineering-students-peru', label: 'Python for engineering students', p: 'Python for civil, mining and systems students.' },
      { href: '/data-science-course-peru', label: 'Peru data science course', p: 'The natural next step after Python.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class from start to end.' }
    ]
  },

  start: {
    h2: 'Book a free Python class from Ayacucho',
    lede: 'In the trial you write a first program with a mentor and talk through a small puzzle. The mentor then suggests a course and a format, group or one to one, and is honest if your English or equipment means waiting a little.',
    readFirst: 'To read more before booking, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'All teaching is live from India and in English only. WhatsApp, written in English, is how to reach us fastest.',
    formNote: 'Free, card not required, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Python and data', links: [
        { href: '/python-course-peru', label: 'Python in Peru' },
        { href: '/data-science-course-peru', label: 'Data science in Peru' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru' }
      ] }
    ],
    bottomRight: 'A program that runs is not a program that is right'
  },

  personalityCss: `
.ag-root.ag-pya .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-pya .ag-capsule { border-left-width: 4px; border-radius: 1px; }
.ag-root.ag-pya .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-pya .ag-table caption { text-align: left; font-weight: 500; letter-spacing: 0.005em; }
.ag-root.ag-pya .ag-code-head b { letter-spacing: 0.035em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Censos Nacionales 2025 (Indicadores demográficos, Cuadro 1) and Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); MINEDU CNEB and Fábrica de Programadores; UTEC OPI; EF EPI 2025 (no Ayacucho entry); tz database America/Lima. Data: UNSCH, Estudiantes matriculados (2023-1), ODC-By.',
    localProject: 'Why does a Huamanga university file break Python before it starts? An original Python project on the UNSCH enrolment dataset (ODC-By, 11,993 rows, Latin-1): Version 1 opens it as UTF-8 and stops with UnicodeDecodeError at byte 0xcd; Version 1b uses errors="replace", runs, prints INGENIER�A AGR�COLA and fails to find Ingeniería Civil; Version 2 names encoding="latin-1" and counts 28 schools (Ingeniería Civil 957). Lesson family: text encodings.',
    requiredMentions: ['matricula-2024-1-UNSCH.csv', "can't decode byte 0xcd in position 380", 'INGENIER�A AGR�COLA', 'Students: 11993 in 28 schools', '957 INGENIERÍA CIVIL', '216,444', '709,029', '20.9', 'A program that runs is not a program that is right'],
    sources: [
      { claim: 'Ayacucho city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Ayacucho department, Huamanga province and Ayacucho district populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Ayacucho internet use, homes with internet and computer.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'UNSCH enrolment dataset and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/estudiantes-matriculados-de-la-universidad-nacional-de-san-crist%C3%B3bal-de-huamanga-unsch' },
      { claim: 'No computing area in secundaria; TIC competency transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'OPI organiser, cost and languages.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'EF EPI 2025 Peru page (Peru and Lima scores; no Ayacucho entry).', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'An English score for Ayacucho: EF publishes none, so none is given.',
      'A 2025 population for Ayacucho city: not published.',
      'Any sum of the city, department, province and district counts.',
      'Any use of students\' birth dates, sex, disability or grades from the file: never read.',
      'Any link with UNSCH, MINEDU, UTEC or the regional government: none.',
      'Promising that our classes count toward a university degree: refused.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
