// SHIP: market (city) | Lima Metropolitana: every age and every course across 43 districts, no commute | coverage before comparison: rank stations only on hours all of them reported
'use strict';
// Coding classes in Lima, Peru (ag- city page, Peru cluster row PE044, P6; alloc: cities, coco, #7B2436). Written 2026-11-10.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: flexible at any hour; USD only
// through the template's data-price anchors. Kids and teens first, every age covered.
// Spine (differs from english-medium-coding-classes-lima, which is about bilingual, IB and Cambridge families and EF bands):
// Lima Metropolitana is 43 districts and ten million people, so this page maps every age and every course family onto the
// city, argues live online against the cross-city trip without inventing traffic numbers, covers what Lima teenagers face
// after 5° de secundaria (UNI, PUCP, Universidad de Lima dates), and teaches with SENAMHI's Lima air-monitoring network.
// Sources (research folder ~/Desktop/SkyCoders/keyword-research-2026-09/pe/; every quote string-matched in the raw file):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (src/inei/tab/tsv_ind_00/sheet2_CUADRO_N_1.tsv):
//    "LIMA METROPOLITANA 10141775"; 43 DISTRITO rows; SAN JUAN DE LURIGANCHO 1176422, SAN MARTÍN DE PORRES 764012, ATE 702531,
//    SAN MARTÍN (department) 967938; COMAS 578818, VILLA MARÍA DEL TRIUNFO 485531, VILLA EL SALVADOR 451546, SAN JUAN DE MIRAFLORES 420096, SANTIAGO DE SURCO
//    402074, PUENTE PIEDRA 398960, LIMA 314840, SANTA MARÍA DEL MAR 994. Callao (Prov. Constitucional) 1094209 is a separate
//    unit. Compendio 2026 note: "Lima Metropolitana, comprende los 43 distritos de la provincia de Lima." Never summed.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Lima Metropolitana city 9,562,280 (2017 census, conglomerate that includes Callao).
//  - INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (facts-market/src/inei_tic_iit2026.txt): "el 64,5% de los
//    hogares del país contaba con servicio de Internet"; "en Lima Metropolitana, el 84,7% de los hogares disponía del servicio";
//    "en el área rural solo el 27,1% tenía acceso".
//  - MINEDU, Fábrica de Programadores, 24 July 2025 (facts-school/src/n-fabrica-prog): "1000 escolares de 4" ... "Lima Norte con
//    formación en programación Python y certificación internacional"; PCEP (FACTS 45, 46).
//  - MINEDU, 16 March 2026 (n-inicio2026): "6 225 000 estudiantes", "53 631 colegios de Educación Básica Regular".
//  - CNEB (cneb/text.txt): secundaria "Matemática 4 4 4 4 4", "Inglés 3 3 3 3 3", "Total de horas 35 35 35 35 35"; competency 28
//    transversal; "horas pedagógicas (45 minutos)".
//  - UNI (FACTS 67 to 69): "tres pruebas tomadas en tres días (lunes, miércoles y viernes)"; papers Aptitud Académica +
//    Humanidades, Matemática, Física + Química; "Lunes 10, miércoles 12 y viernes 14 de agosto de 2026".
//  - PUCP (FACTS 78, 80): La Primera Opción "EVALUACIÓN ACADÉMICA: 29 de noviembre" (2026); "con especial énfasis en las áreas
//    de comprensión lectora y matemáticas."
//  - Universidad de Lima (FACTS 84, 85, 88): school exam "Domingo 15 de noviembre de 2026, 7.00 horas"; wrong answers subtract.
//  - EF EPI 2025 (facts-market/src/ef_peru.raw): cityScore lima "high" 555; Peru 519.
//  - Time (facts-geo/timezone.tsv): America/Lima UTC-5 all year (last summer time 1994); Asia/Kolkata UTC+5:30; 10 h 30 min.
//  - Data: SENAMHI, "Monitoreo de los contaminantes del aire en Lima Metropolitana", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/monitoreo-de-los-contaminantes-del-aire-en-lima-metropolitana-servicio-nacional-de,
//    licence "Open Data Commons Attribution License" (dc:license on the raw page), released 2024-05-24, modified 2025-09-08.
//    Dictionary: HORA "Formato: hhmmss"; PM2_5 "Material Particulado menor a 2.5 micras (PM2.5)". File saved as
//    senamhi-aire-lima.csv, 68,501,558 bytes, sha256 896ae8a1...c5875c40d4, 577,794 rows, 7 stations, 1 January 2015 to 31 May
//    2024 (3,439 days), saved to src-pages/coding-classes-in-lima-peru/data/ on 9 November 2026.
// Our own calculations (scratchpad pe/c1/lima/v1.py, v2.py; copies in src-pages/.../data/; python3 -I on the file):
//  v1 prints: SAN_JUAN_DE_LURIGANCHO 31.4 from 76 % of hours / SANTA_ANITA 30.0 from 61 % / CARABAYLLO 27.9 from 56 % /
//    VILLA_MARIA_DEL_TRIUNFO 26.3 from 57 % / SAN_MARTIN_DE_PORRES 18.7 from 55 % / SAN_BORJA 18.7 from 67 % /
//    CAMPO_DE_MARTE 16.9 from 72 %
//  v2 prints: Hours when all 7 stations reported: 10883 / 1 SAN_JUAN_DE_LURIGANCHO 34.9 / 2 CARABAYLLO 33.8 / 3 SANTA_ANITA
//    32.5 / 4 VILLA_MARIA_DEL_TRIUNFO 29.4 / 5 SAN_BORJA 21.8 / 6 SAN_MARTIN_DE_PORRES 21.7 / 7 CAMPO_DE_MARTE 16.6
//  summary: PM2.5 readings per year 2015 to 2024 by station; Santa Anita and San Martín de Porres 0 in 2020; Carabayllo 5 in
//    2017; HORA written both "10000" and "010000" for 01:00 (34 distinct spellings for 24 hours).
// Lesson family: coverage before comparison. Count how many hours each station actually reported, then compare averages only
// over the hours every station shares (set intersection), and watch the ranking move.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = String.raw`import csv

hours = {}
pm = {}
with open("senamhi-aire-lima.csv", encoding="utf-8") as data:
    for row in csv.DictReader(data):
        station = row["ESTACION"]
        hours[station] = hours.get(station, 0) + 1
        if row["PM2_5"].strip() != "":
            pm.setdefault(station, []).append(float(row["PM2_5"]))

def average(station):
    return sum(pm[station]) / len(pm[station])

for station in sorted(pm, key=average, reverse=True):
    share = 100 * len(pm[station]) / hours[station]
    print(station, round(average(station), 1), "from", round(share), "% of hours")`;

const V2 = String.raw`import csv

pm = {}
with open("senamhi-aire-lima.csv", encoding="utf-8") as data:
    for row in csv.DictReader(data):
        if row["PM2_5"].strip() != "":
            hour = (row["FECHA"], int(row["HORA"]))    # "10000" and "010000" are one hour
            pm.setdefault(row["ESTACION"], {})[hour] = float(row["PM2_5"])

shared = set.intersection(*(set(readings) for readings in pm.values()))
print("Hours when all", len(pm), "stations reported:", len(shared))

def fair_average(station):
    return sum(pm[station][h] for h in shared) / len(shared)

for place, station in enumerate(sorted(pm, key=fair_average, reverse=True), 1):
    print(place, station, round(fair_average(station), 1))`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Lima: every age, every district' },
  slug: 'coding-classes-in-lima-peru',
  code: 'coco',
  accent: '#7B2436',
  accentRationale: 'Coding classes in Lima: a dark wine red #7B2436, the colour allocated to this row, deep enough to sit calmly beside long district tables; contrast 9.22 on #FBF8F2, 8.67 on #F5F1E8 and 7.94 on #EDE7DA, all well above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in Lima, Peru',
  title: 'Coding Classes in Lima, Peru: Every Age, Live Online in English',
  description: 'Coding classes in Lima for ages 6 to adult, live online in English: every course by age across the 43 districts, no cross-city trip, and a SENAMHI air data project.',
  ogDescription: 'Live online coding for Lima children, teenagers, students and adults, taught in English at any hour: a course for every age, the 43 districts of Lima Metropolitana, the admission exams after 5° de secundaria, and a Python project on SENAMHI air data.',
  twitterDescription: 'Coding in Lima, live online in English for every age: courses by age, all 43 districts, and a real SENAMHI data project.',
  pageName: 'Coding Classes in Lima, Peru',
  webPageDescription: 'A guide for families and adult learners anywhere in Lima Metropolitana to live online coding classes taught in English, built from INEI census and household technology figures, MINEDU curriculum sources, university admission pages, EF EPI 2025 and an original Python project on SENAMHI air-monitoring open data (ODC-By).',
  courseDescription: 'Live online coding classes in English for learners across Lima Metropolitana: Scratch, Roblox and Python for children from 6, Python, Java, web, apps and AI for teenagers, IB and IGCSE support, and Python, data and AI agents for university students and adults, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Lima',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#districts', label: 'Districts' },
    { href: '#ages', label: 'Every age' },
    { href: '#after-school', label: 'After 5°' },
    { href: '#project', label: 'Lima air project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Lima Metropolitana &middot; Live online, in English &middot; Ages 6 to 67',
  h1: 'Coding classes in Lima, Peru',
  lede: 'Lima is ten million people spread over 43 districts, and a good coding class is rarely in the district where a family lives. This page places every age, from a six year old in Comas to a retired engineer in San Borja, on the right live online course, shows what Lima schools leave out, sets out what teenagers face after 5° de secundaria, and ends with a project on the city\'s own air-monitoring stations.',
  secondaryCta: { href: '#ages', label: 'Find the course for each age' },
  wa: 'Hello Modern Age Coders, we live in Lima and would like live online coding classes in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; over 10,000 learners in many countries &middot; one mentor who follows each student',
  spec: [
    ['Where', 'Any of the 43 districts, from home'],
    ['Ages', '6 to 67, always grouped by age'],
    ['Youngest start', 'Scratch blocks at 6'],
    ['Class format', 'Fifteen to twenty, or one to one'],
    ['Hours', 'Chosen by the family, Peru time'],
    ['First class', 'Free, no card asked for']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders runs live online coding classes in English for every age in Lima Metropolitana. Children of 6 to 8 start with Scratch, 8 to 12 year olds build Roblox games or type Python, teenagers learn Python, Java, web, apps and AI (with IB and IGCSE help for international-school students), and university students and adults take Python, data analysis or AI agents. Each lesson has a real mentor on camera; families choose a class of fifteen to twenty learners or private lessons, at the hour their household prefers, with no trip across Lima.',

  picks: {
    eyebrow: 'Start here in Lima',
    h2: 'Three courses Lima families ask about first',
    lede: 'One for primaria, one for the step from games to typed code, and one for secundaria. University and adult courses follow further down the page.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'LIM / 01', title: 'Coding for Kids', note: 'Ages 6 to 12, placed with children their own age, over 10 to 12 months. Scratch stories and games come first, then small apps and a gentle first look at AI. No typing needed at the start.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'LIM / 02', title: 'Roblox Game Coding', note: 'For 8 to 14 year olds who already spend hours in Roblox. They script their own games in Luau, learn why a game breaks, and fix it themselves.' },
      { course: 'python-complete-masterclass-teens', code: 'LIM / 03', title: 'Python for Teens', note: 'Ages 13 to 18, from zero, over 10 to 12 months. Typed Python with files, data and real projects, for 1° to 5° de secundaria at any Lima school.' }
    ]
  },

  sections: [
    {
      id: 'districts',
      eyebrow: 'Lima in figures',
      h2: 'How many people live in Lima, and in which districts?',
      lede: 'INEI\'s 2025 census counts 10,141,775 people in Lima Metropolitana, the province of Lima, which is made of 43 districts. Callao is a separate constitutional province with its own count. The largest of them holds more people than several whole Peruvian departments.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Lima Metropolitana and its nine largest districts (INEI, 2025)', head: ['Unit', 'Population, 2025'], rows: [
          ['Lima Metropolitana (province of Lima, 43 districts)', '10,141,775'],
          ['San Juan de Lurigancho', '1,176,422'],
          ['San Martín de Porres', '764,012'],
          ['Ate', '702,531'],
          ['Comas', '578,818'],
          ['Villa María del Triunfo', '485,531'],
          ['Villa El Salvador', '451,546'],
          ['San Juan de Miraflores', '420,096'],
          ['Santiago de Surco', '402,074'],
          ['Puente Piedra', '398,960'],
          ['Lima (the historic centre district, Cercado)', '314,840'],
          ['Santa María del Mar (the smallest)', '994']
        ] },
        { kind: 'source', html: 'Source: INEI\'s 2025 census tables (Indicadores demográficos, table 1, total population on the reference day of 15 September 2025). For the city as a whole, INEI\'s 2017 sociodemographic profile (table 1.9) counted 9,562,280 people in the Lima Metropolitana urban area, Callao included. We list districts one by one and never add them together.' },
        { kind: 'two', mt: true,
          leftH3: 'One district alone is a city',
          left: [
            'San Juan de Lurigancho, with 1,176,422 people in 2025, has more people than the whole department of San Martín, which INEI counts at 967,938. San Martín de Porres and Ate each pass 700,000. A coding academy in Miraflores or San Isidro is a long way from most of these families.',
            'The smallest district, Santa María del Mar on the southern beaches, has 994 people. Between those two extremes sit 41 other districts, each with its own schools, traffic and timetable.'
          ],
          rightH3: 'Why the map matters for a class',
          right: [
            'A weekly class that needs a trip across the city costs an afternoon, not an hour. For a working parent with two children in different grades, it often means choosing which child goes.',
            'Live online classes remove the map from the decision. A child in Carabayllo, a teenager in Chorrillos and an adult in La Molina join the same quality of class from the room they are already in.'
          ] }
      ]
    },
    {
      id: 'online',
      eyebrow: 'Online or across town',
      h2: 'Is a live online class really as good as going to an academy in Lima?',
      lede: 'For coding, yes, as long as it is live and the learner\'s hands are on the keyboard. A recorded video is not the same thing, and we do not sell recordings as classes.',
      body: [
        { kind: 'two',
          leftH3: 'What a live class keeps',
          left: [
            'The learner shares their screen, writes the code and gets stuck in front of a real person. The mentor asks what they expected to happen, waits for the answer and only then points to the line that needs changing. That conversation is the class, and it works the same on a video call as across a desk.',
            'What disappears is the journey: no waiting in the car outside the academy, no rush from school to a second building, and no lost class because of a strike, rain or a late bus.'
          ],
          rightH3: 'What a Lima home needs',
          right: [
            'INEI reports that in the second quarter of 2026, 84.7% of households in Lima Metropolitana had an internet service, against 64.5% across the country and 27.1% in rural areas. Most Lima families already have the connection a video class needs.',
            'The rest is simple: a laptop or desktop computer for typed code (a tablet is enough for a six year old\'s first Scratch weeks), headphones with a microphone, and a quiet corner. We check all three in the free first class.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Test the connection at class time.</strong> Run a short video call at the hour you plan to use. Evening use at home is often heavier than the morning.',
          '<strong>Put the computer where a parent passes by.</strong> Younger children concentrate better, and you see what they build without hovering.',
          '<strong>Keep the same slot each week.</strong> A fixed habit matters more than the length of any one class.',
          '<strong>Ask the learner to explain one thing.</strong> After class, a two-minute "show me what you made" tells you more than any report.'
        ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Every age, every course',
      h2: 'Which coding course fits each age in Lima, from 6 to adult?',
      lede: 'Start from the learner\'s age and what they want to make, not from a programming language. The ages and course routes below are ours; the school years beside them use MINEDU\'s normative ages.',
      body: [
        { kind: 'table', numCols: [], caption: 'Course routes for Lima learners, youngest to oldest (our course ages)', head: ['Learner', 'Usual school stage', 'First course', 'Where it can lead'], rows: [
          ['Ages 6, 7 and 8', 'First three grades of primaria', 'Scratch, in Coding for Kids', 'Stories that move, small games, first logic'],
          ['8 to 14', '3° primaria to 2° secundaria', 'Roblox or Minecraft coding', 'Their own playable worlds and scripts'],
          ['9 to 12', '4° to 6° primaria', 'Python and AI for Kids', 'Their first programs typed by hand, drawings, tiny AI models'],
          ['10 to 15', 'Primaria to secundaria', 'Maths through coding', 'School maths explored and checked in Python'],
          ['13 to 18', 'All five years of secundaria', 'Python first; Java, web, apps or AI next', 'Real projects, contest practice, PCEP'],
          ['IB or IGCSE student', 'International or bilingual school', 'IB Computer Science, IGCSE CS or maths', 'Coursework and exam support in English'],
          ['University student', 'Any university in Lima', 'Java, Python, data structures and algorithms', 'Course projects and interview practice'],
          ['Adult, 18 to 67', 'Work, a career change or retirement', 'Python masterclass, data analysis, AI agents', 'Automation, analysis and agent tools at work']
        ] },
        { kind: 'source', html: 'Course ages and routes are ours. MINEDU measures normative age on 31 March, so a child born in the second half of the year may sit one grade away from the row shown.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Primaria: play first, then type', p: 'A first grader drags blocks to make a character jump; by fourth or fifth grade many children want to type real words. We move each child when they are ready, not on a fixed date, and never put a seven year old with a twelve year old.' },
          { h3: 'Secundaria: depth, not gadgets', p: 'Teenagers in Lima often have tried a short workshop already. What they rarely get is a year of steady programming: loops, functions, files, testing, then a second language. That is what turns a curious fourteen year old into one who can build something real.' },
          { h3: 'University and adults', p: 'Students at Lima universities take Java, Python and data structures alongside their degree; working adults learn Python, data analysis or AI agents around their job. Our oldest learners are in their sixties, and the class waits for them as patiently as for a child.' }
        ] },
        { kind: 'p', mt: true, html: 'Families at international and bilingual schools have their own page, <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>, and families with children in primaria can read the Spanish page on <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>. Adults over fifty may prefer the guide to <a class="ag-inline-link" href="/coding-for-adults-over-50-peru">coding after 50 in Peru</a>.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'What school covers',
      h2: 'Do schools in Lima teach programming?',
      lede: 'Not as a timetabled subject. Lima\'s public and private schools follow the national curriculum, the CNEB, whose secundaria week has no computing area. A few pilots have started, and Lima has the first of them.',
      body: [
        { kind: 'two',
          leftH3: 'The 35-hour week',
          left: [
            'Under the regular school day, each secundaria grade has 35 teaching hours a week, and each teaching hour lasts 45 minutes. Matemática has 4 of them and Inglés 3. Digital skills sit in competency 28, about working in virtual environments built with ICT, and that competency is transversal: every area is meant to use it, and no area owns it.',
            'So a Lima teenager can spend five years of secundaria using computers in class and never be asked to write a program. Some private schools add their own workshops, which vary a great deal from school to school.'
          ],
          rightH3: 'A Python pilot in Lima Norte',
          right: [
            'In July 2025 MINEDU started its Fábrica de Programadores: a thousand public-school pupils in the last two years of secundaria (4° and 5°) in Lima Norte learn Python towards an international certificate, and those who complete both stages may then take the PCEP exam. MINEDU presents it as a first stage it hopes to spread nationwide.',
            'For the other districts, and for younger children, the same path exists outside school. Our PCEP and PCAP course follows that certificate, and our Python for Teens course reaches the level a student needs before it.'
          ] },
        { kind: 'p', mt: true, html: 'On 16 March 2026, 53,631 schools of Educación Básica Regular reopened across Peru for 6,225,000 students, according to MINEDU. Our classes do not follow that calendar: a family can start in any month, keep the same slot through the July break and the summer, or pause when exams take over.' }
      ]
    },
    {
      id: 'after-school',
      eyebrow: 'After 5° de secundaria',
      h2: 'What do Lima teenagers face after 5° de secundaria, and can coding help?',
      lede: 'Most Lima universities admit students through their own exams, in Spanish, with maths at the centre. We do not prepare students for those exams and promise no result, but the reasoning a good programmer builds is the same reasoning the maths papers reward.',
      body: [
        { kind: 'table', numCols: [], caption: 'Three Lima admission processes, as their own pages describe them', head: ['University', 'What the exam looks like', 'Next date we could verify'], rows: [
          ['UNI (Universidad Nacional de Ingeniería)', 'Three in-person papers on three days: aptitude and humanities, mathematics, physics and chemistry', 'Ordinary exam 2026-2 was on 10, 12 and 14 August 2026'],
          ['PUCP', 'Exams that place special weight on reading comprehension and mathematics', 'La Primera Opción academic evaluation, 29 November 2026, for students still in 5°'],
          ['Universidad de Lima', 'One test of academic aptitude and knowledge; wrong answers subtract marks', 'School exam 2027-1(A), Sunday 15 November 2026 at 7:00']
        ] },
        { kind: 'source', html: 'Sources: UNI admission pages (exam format and 2026-2 dates); PUCP admission pages (Admisión 2027-1 table and exam emphasis); Universidad de Lima, Guía del postulante 2027-1(A). All read in November 2026. We are not connected with any of these universities, and each one decides its own admissions.' },
        { kind: 'two', mt: true,
          leftH3: 'Where programming helps',
          left: [
            'A student who has written a hundred small programs is used to reading a problem slowly, naming what is known, trying a case by hand and checking an answer before trusting it. Those habits show up in any maths paper, in any language.',
            'Negative marking, as at the Universidad de Lima, also rewards a habit we teach: knowing when you do not know. A programmer learns to test before claiming something works; an exam candidate learns to leave a question blank rather than guess wildly.'
          ],
          rightH3: 'Where it does not',
          right: [
            'The papers are in Spanish and cover school content we do not teach as exam preparation, such as chemistry or humanities. Academias preuniversitarias exist for that, and we are not one.',
            'What we offer a 4° or 5° student is a year of serious programming and mathematical reasoning in English, which also helps with a computing degree once they are in. Our page on <a class="ag-inline-link" href="/peru-university-admission-exams-explained">Peru\'s university admission exams</a> explains the processes in more detail.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish?',
      lede: 'No. All of our teaching is in English, always live and online, by mentors in India who speak slowly, check what the learner understood and adjust to their accent and pace.',
      body: [
        { kind: 'two',
          leftH3: 'Lima\'s English, by the numbers',
          left: [
            'EF\'s English Proficiency Index 2025 scores Lima city 555, in its "high" band, against 519 for Peru as a whole. Many Lima teenagers and adults already follow a lesson in English without trouble.',
            'Younger children, and learners from Spanish-medium colegios, often need more time. The mentor uses short sentences, shows rather than describes, and repeats a word on screen until it sticks.'
          ],
          rightH3: 'English that comes with the code',
          right: [
            'Python, Java and Scratch are written with English keywords: if, while, print, repeat. A child who learns to code in English learns those words in context, and the error messages a computer prints start to make sense.',
            'For many Lima families this is the reason to choose us: one hour a week of coding is also one hour of listening and speaking English with a patient adult. Our page on <a class="ag-inline-link" href="/learn-coding-and-english-together-peru">learning coding and English together</a> goes further.'
          ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real Lima project',
      h2: 'Which Lima air station reads highest, and can we trust the ranking?',
      lede: 'SENAMHI, Peru\'s national weather and water service, runs automatic air-monitoring stations across Lima and shares their hourly readings openly. We use them with older students to teach a rule every analyst needs: before you compare averages, check how much of the time each one actually covers.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is "Monitoreo de los contaminantes del aire en Lima Metropolitana", which SENAMHI publishes on Peru\'s national open-data portal with an Open Data Commons Attribution licence (ODC-By); it first appeared on 24 May 2024 and was last changed on 8 September 2025. Our copy, taken on 9 November 2026, holds 577,794 hourly rows from seven stations, from 1 January 2015 to 31 May 2024.',
            'Each row gives a station, a date, an hour, and readings for PM10, PM2.5 (fine particles smaller than 2.5 microns) and nitrogen dioxide. We use only PM2.5, and we use it as a numbers exercise: this page draws no health conclusions from it.'
          ],
          rightH3: 'The question',
          right: [
            'The stations sit in seven districts: Campo de Marte in Jesús María, Carabayllo, Santa Anita, San Borja, San Juan de Lurigancho, San Martín de Porres and Villa María del Triunfo. A student\'s first idea is natural: average each station\'s PM2.5 and sort from highest to lowest.',
            'Version 1 does exactly that, and it also prints what share of the station\'s hours actually carry a PM2.5 value. That last column is the one most beginners never look at.'
          ] },
        { kind: 'code', label: 'Version 1: average every reading each station has', lang: 'Python', code: V1, note: 'It prints, from highest to lowest: <code>SAN_JUAN_DE_LURIGANCHO 31.4 from 76 % of hours</code>, <code>SANTA_ANITA 30.0 from 61 % of hours</code>, <code>CARABAYLLO 27.9 from 56 % of hours</code>, <code>VILLA_MARIA_DEL_TRIUNFO 26.3 from 57 % of hours</code>, <code>SAN_MARTIN_DE_PORRES 18.7 from 55 % of hours</code>, <code>SAN_BORJA 18.7 from 67 % of hours</code> and <code>CAMPO_DE_MARTE 16.9 from 72 % of hours</code>.' },
        { kind: 'p', mt: true, html: 'Look at the last column. No station reported PM2.5 for every hour, and the gaps are very uneven: Carabayllo has a value for 56% of its hours, San Juan de Lurigancho for 76%. Our year-by-year count shows why. Santa Anita and San Martín de Porres have no PM2.5 readings at all in 2020, and Carabayllo has five for the whole of 2017. Each average is taken over a different stretch of time, so the ranking compares different years and seasons, not just different places.' },
        { kind: 'p', html: 'The fix is to compare like with like. Version 2 keeps, for each station, a dictionary from hour to reading, then uses a set intersection to find the hours when all seven stations reported. Only those hours go into the average. On the way it meets a small trap: the dictionary says the hour is written "hhmmss", but one in the morning appears both as "10000" and as "010000". Turning the hour into a number with <code>int()</code> makes both spellings the same key.' },
        { kind: 'code', label: 'Version 2: compare only the hours every station shares', lang: 'Python', code: V2, note: 'It prints <code>Hours when all 7 stations reported: 10883</code>, then <code>1 SAN_JUAN_DE_LURIGANCHO 34.9</code>, <code>2 CARABAYLLO 33.8</code>, <code>3 SANTA_ANITA 32.5</code>, <code>4 VILLA_MARIA_DEL_TRIUNFO 29.4</code>, <code>5 SAN_BORJA 21.8</code>, <code>6 SAN_MARTIN_DE_PORRES 21.7</code> and <code>7 CAMPO_DE_MARTE 16.6</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Place in the ranking before and after the fair comparison (our calculation)', head: ['Station (district)', 'Version 1 place', 'Version 2 place'], rows: [
          ['San Juan de Lurigancho', '1', '1'],
          ['Carabayllo', '3', '2'],
          ['Santa Anita', '2', '3'],
          ['Villa María del Triunfo', '4', '4'],
          ['San Borja', '6', '5'],
          ['San Martín de Porres', '5', '6'],
          ['Campo de Marte (Jesús María)', '7', '7']
        ] },
        { kind: 'source', html: 'Data from SENAMHI\'s Lima air-monitoring dataset on datosabiertos.gob.pe, licensed ODC-By (Open Data Commons Attribution). Averages, places and coverage shares are our own, in micrograms per cubic metre as published. San Martín de Porres and San Borja both show 18.7 in Version 1; Python\'s sort keeps their original order when the keys tie. The fair comparison rests on 10,883 shared hours, about one hour in eight of the period, which is itself worth saying when you report it.' },
        { kind: 'p', mt: true, html: 'Two stations swap places and the gap between the top three shrinks. Nothing in the data changed; only the question became fair. That is the habit we want a fifteen year old to leave with: when two numbers are compared, ask what each one was measured over.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 8 to 10, on paper.</strong> Two children report their average spelling score. One took ten tests, the other two. Who would you believe more, and why?',
          '<strong>Ages 10 to 12, in Scratch or Python.</strong> Make two lists of seven daily temperatures with some days missing. Average each list, then average only the days both have.',
          '<strong>Ages 13 and over.</strong> Run Version 1, then change it to print how many PM2.5 readings each station has per year. Which year would you leave out of any comparison?',
          '<strong>Going further.</strong> Repeat Version 2 for PM10 and for nitrogen dioxide. Does the set of shared hours grow or shrink, and does the ranking hold?',
          '<strong>For adults.</strong> Write one sentence that reports the Version 2 result honestly, including how much of the period it covers.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are the classes for families in Lima?',
      lede: 'Whatever hour suits you. Lima keeps Peru time all year with no clock changes, and every mentor plans around the family\'s day, not the other way round.',
      body: [
        { kind: 'table', numCols: [], caption: 'How a few Lima hours read on the mentor\'s clock in India (conversions, not a timetable)', head: ['Lima, Peru time', 'India time', 'Day in India'], rows: [
          ['06:00', '16:30', 'Same day'],
          ['08:00', '18:30', 'Same day'],
          ['10:00', '20:30', 'Same day'],
          ['13:00', '23:30', 'Same day'],
          ['16:00', '02:30', 'Following day'],
          ['19:00', '05:30', 'Following day']
        ] },
        { kind: 'source', html: 'The IANA time-zone database (zone America/Lima) shows Peru five hours behind UTC with no summer time since 1994, and INACAL publishes the official hour. India runs five and a half hours ahead of UTC, which puts it ten and a half hours ahead of Lima every day.' },
        { kind: 'p', mt: true, html: 'Because the gap never moves, the slot you agree in the summer is the same slot when school starts again in March. Many Lima families of primaria children choose early mornings or weekends; secundaria students and adults often prefer the evening. Booking shows every slot in your own clock; the mentor sees the same moment in India time.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Stages a Lima learner moves through',
    lede: 'Our own stages, used to place each new learner and to show families what has changed. Age is only a guide; a beginner of 40 starts at stage one like a beginner of 7.',
    table: { caption: 'Six stages from first blocks to fair comparisons (ours)', head: ['Stage', 'Often reached', 'What the learner can do'], rows: [
      ['1. Sequence', 'Age 6 or 7', 'Put instructions in order and make a sprite move, speak and stop'],
      ['2. Loop and decide', 'Age 7 to 9', 'Repeat actions and react to keys, clicks and touching edges'],
      ['3. Store', 'Age 8 to 11', 'Keep a score, build a list and pick out its largest value'],
      ['4. Write', 'Age 9 to 13', 'Type Python functions with loops, conditions and dictionaries'],
      ['5. Measure', 'Age 12 to adult', 'Read a real data file and count what is there and what is missing'],
      ['6. Compare fairly', 'Age 14 to adult', 'Compare groups only on shared ground and explain the result in one honest sentence']
    ] },
    left: { h3: 'For parents', ps: [
      'The SENAMHI project trains stages 5 and 6, the point where a learner\'s chart becomes one you can trust.',
      'Progress reports list what your child made and can explain, never minutes logged online.'
    ] },
    right: { h3: 'For learners', ps: [
      'An average is only as good as the hours behind it. Count them first.',
      'When two numbers disagree, ask what each one was measured over before you ask which is right.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners across Lima',
    lede: 'From the youngest to the oldest. All are live and in English with one regular mentor, either in a group or privately.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 14', courses: [
        { code: 'LIM / KIDS / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed Python, drawings and small AI projects for 9 to 12 year olds.' },
        { code: 'LIM / KIDS / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds and changes Minecraft worlds, for young builders.' },
        { code: 'LIM / KIDS / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths checked and explored in Python, ages 10 to 15.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'LIM / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Classes, objects and full programs, from a first line of code.' },
        { code: 'LIM / TEEN / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Web development for teens', blurb: 'Pages, styles and working web apps that a teenager can show.' },
        { code: 'LIM / TEEN / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP Python', blurb: 'The Python certificates behind MINEDU\'s Lima pilot, from about 13.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 18 to 67', courses: [
        { code: 'LIM / ADULT / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java for university', blurb: 'Core Java to Spring Boot for computing and engineering students.' },
        { code: 'LIM / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and dashboards for complete beginners.' },
        { code: 'LIM / ADULT / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Codex and Claude Code at work, with the judgement kept human.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live online classes run for Lima households',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before school', l: 'Early Lima mornings fall in the Indian evening, a calm hour to learn.' },
      { time: 'After the school run', l: 'Afternoons, evenings and weekends work as well; you decide.' },
      { time: 'Private', l: 'One learner and one mentor, on the days your household picks.' }
    ],
    cells: [
      { h3: 'A mentor who stays', p: 'The same teacher every week, who knows where the learner got stuck.' },
      { h3: 'Patient English', p: 'Short sentences, words on screen, time to think before answering.' },
      { h3: 'The learner types', p: 'The mentor guides and asks; the learner writes every line.' },
      { h3: 'Ages kept apart', p: 'Children, teenagers and adults each learn with their own age group.' },
      { h3: 'Notes for parents', p: 'A short weekly note: the project, the sticking point, the next step.' },
      { h3: 'Class size', p: 'Fifteen to twenty learners together, or one on their own.' }
    ]
  },

  projectsH2: 'What our longer-term students build',
  projectsLede: 'Learners who stay with us for a year or two ship tools of their own. A few appear below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> show many more.',
  reviewsLede: 'Reviews left on Google by parents and students, in their own words.',

  fees: {
    h2: 'Fees for learners in Lima',
    lede: 'Plans run month by month. Fees are set in US dollars and your card is charged in that currency; your bank then converts to soles at its own daily rate, so the statement can differ a little from the figure here.',
    free: ['A free first class', 'A short puzzle and a first program', 'No card asked for'],
    group: ['Fifteen to twenty learners of a similar age', 'One mentor all the way through', 'Two live classes every week', 'Monthly, stop when you wish'],
    one: ['A mentor for one learner', 'Projects built around their interests', 'Days and hours of your choosing']
  },

  faq: {
    eyebrow: 'Lima families ask',
    h2: 'Coding classes in Lima: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Classes are only ever in English, always live and online. Mentors speak clearly, slow down when needed and adjust to each learner\'s accent and pace; if a child answers with a Spanish word, they hear the English one back. Programming keywords are English everywhere anyway.' },
      { q: 'Do you have a centre in Lima?', a: 'No. We teach only live online, so a family in any of Lima\'s 43 districts joins in the same way, from home. That is also why nobody needs to cross the city for a class.' },
      { q: 'From what age can a child in Lima start?', a: 'Six is the youngest start, using Scratch blocks that need no typing. Most children move to typed Python around nine. A teenager with no experience begins at 13 in a teen group, and adults begin whenever they like; our oldest learners are in their sixties.' },
      { q: 'Which course should a Lima teenager take?', a: 'Python for Teens is the usual start for 13 to 18 year olds with no experience. After it, students choose Java, web development, app development, AI or the PCEP certificate. IB and IGCSE students can also take our computer science and maths courses.' },
      { q: 'Do Lima schools teach coding?', a: 'Not as a subject of its own. The national curriculum spreads digital skills across all areas, and no computing area appears in the secundaria timetable. In July 2025 MINEDU began a Python pilot, Fábrica de Programadores, for a thousand public-school pupils in Lima Norte.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Lima never changes its clocks and the mentor\'s day in India runs ten and a half hours later, so 08:00 in Lima is 18:30 for the mentor.' },
      { q: 'Will this help with the UNI, PUCP or Universidad de Lima exams?', a: 'We do not prepare students for those exams, which are in Spanish, and we promise no admission result. A year of programming builds careful reasoning and checking, which helps in any maths paper, and the university always decides its own admissions.' },
      { q: 'Can university students and adults in Lima join?', a: 'Yes. University students take Java, Python and data structures; working adults usually start with Python and move to data analysis or AI agents. Adults are always grouped with adults, at hours around work.' },
      { q: 'How are fees charged, and in which currency?', a: 'Each month is billed in US dollars, the currency printed on this page, and your bank handles the change into soles. Someone browsing from India is shown rupees. Nothing is charged for the first class, and no card details are taken for it.' },
      { q: 'Is there a certificate at the end?', a: 'Where a course includes one, the learner receives a Modern Age Coders completion certificate. MINEDU, universities and schools play no part in it and it carries no Peruvian academic value; it simply records the projects the learner finished.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for families and adult learners in Lima.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The national guide, with every Peru page.' },
      { href: '/online-coding-classes-for-kids-peru', label: 'Online coding for kids in Peru', p: 'Primaria-age children, grade by grade.' },
      { href: '/coding-classes-for-teens-peru', label: 'Coding for teens in Peru', p: 'Secundaria students and what comes next.' },
      { href: '/coding-courses-for-university-students-peru', label: 'University students in Peru', p: 'Java, Python and DSA alongside a degree.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits for the popular AI tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class, from start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first class from anywhere in Lima',
    lede: 'In the free class, learner and mentor solve a small puzzle and build a first program side by side. It shows the mentor how the learner thinks and how comfortable they are in English, and it ends with a clear suggestion for a course and a group.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through one live class, and <a class="ag-inline-link" href="/courses">all courses</a> has the full syllabus of each one.',
    note: 'Lessons are live online with mentors in India, in English only. A WhatsApp message in English gets the fastest reply.',
    formNote: 'Free, no card, and no obligation to continue.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru guide' },
        { href: '/english-medium-coding-classes-lima', label: 'English-medium Lima' },
        { href: '/coding-classes-in-arequipa-peru', label: 'Arequipa' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Count the hours before you compare'
  },

  personalityCss: `
.ag-root.ag-coco .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-coco .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-coco .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-coco .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-coco .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadro N° 1) and Perfil Sociodemográfico 2017 (Cuadro N° 1.9); INEI TIC en los Hogares II Trimestre 2026; MINEDU CNEB, Fábrica de Programadores and 2026 school opening; UNI, PUCP and Universidad de Lima admission pages; EF EPI 2025; tz database America/Lima and INACAL. Data: SENAMHI, Monitoreo de los contaminantes del aire en Lima Metropolitana, ODC-By.',
    localProject: 'Which Lima air station reads highest? An original Python project on SENAMHI\'s Lima air-monitoring open data (ODC-By): Version 1 averages each station\'s PM2.5 over whatever hours it reported (coverage 55% to 76%); Version 2 keeps only the 10,883 hours all seven stations share, normalising the hour key with int(), and Carabayllo moves from third to second while San Borja and San Martín de Porres swap. Lesson family: coverage before comparison.',
    requiredMentions: ['senamhi-aire-lima.csv', 'Hours when all 7 stations reported: 10883', 'CARABAYLLO 27.9 from 56 % of hours', '2 CARABAYLLO 33.8', '10,141,775', '1,176,422', 'Santa María del Mar (the smallest)', 'Count the hours before you compare', '84.7% of households in Lima Metropolitana'],
    sources: [
      { claim: 'Lima Metropolitana and district populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Lima Metropolitana city population, 2017 census, including Callao.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Household internet in Lima Metropolitana, II quarter 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'SENAMHI Lima air-monitoring dataset and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/monitoreo-de-los-contaminantes-del-aire-en-lima-metropolitana-servicio-nacional-de' },
      { claim: 'CNEB transversal TIC competency and secundaria weekly hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores pilot in Lima Norte, Python and PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'UNI, PUCP and Universidad de Lima admission formats and dates.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'UNI exam format and 2026-2 dates.', url: 'https://admision.uni.edu.pe/admision2026-2/index.html' },
      { claim: 'EF EPI 2025 scores for Lima and Peru.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any health interpretation of PM2.5 levels or comparison with health guidelines: the page treats the readings as a numbers exercise only.',
      'Travel-time or traffic figures for Lima: none verified, none printed.',
      'A Lima total made by adding districts, or adding Callao to Lima Metropolitana: never summed.',
      'Admission-exam preparation or results: we do not prepare for the Spanish-language exams and promise nothing.',
      'Spanish-language teaching: every class is in English.',
      'Any connection with SENAMHI, MINEDU, UNI, PUCP, the Universidad de Lima or any school: none.',
      'A Lima centre or address: we teach online only.'
    ]
  }
};
