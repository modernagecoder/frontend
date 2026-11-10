// SHIP: market (city) | Huancayo: coding beside the CEPRE years, live online in English, all ages | a timestamp with no time zone: a five-hour shift found from the shape of a histogram
'use strict';
// Coding classes in Huancayo, Peru (ag- city page, Peru cluster row PE050; alloc: cities, coh, #8B3E09).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; timing flexible at any hour (2026-11-08);
// USD only through the template's data-price anchors.
// Angle: Huancayo is the capital of Junín and a university town where secundaria leavers sign up in their thousands
// for pre-university cycles (CEPRE). The page answers the Huancayo search, shows what school covers, and teaches with
// the Universidad Nacional del Centro del Perú's own open list of CEPRE registrations, whose clock has no time zone.
// Sources (research folder ~/Desktop/SkyCoders/keyword-research-2026-09/pe/, quotes string-matched in raw files):
//  - INEI Censos Nacionales 2025, Indicadores demográficos, Cuadro 1 (places.tsv): department Junín 1,422,780;
//    province Huancayo 626,199; district Huancayo 124,447 (census day 15 September 2025). Never summed.
//  - INEI Lib1539 Perfil Sociodemográfico 2017, Cuadro N° 1.9 (places.tsv): Huancayo city 456,250 (22 October 2017).
//  - Ley 28044 (FACTS 5, 6); MINEDU Edades normativas (FACTS 13, 14); CNEB competency 28 transversal and secundaria
//    JER hours "Matemática 4 4 4 4 4 Comunicación 4 4 4 4 4 Inglés 3 3 3 3 3" (FACTS 32, 33, 39); MINEDU 16 March 2026
//    "53 631 colegios ... 6 225 000 estudiantes" (FACTS 17); Fábrica de Programadores (FACTS 45, 46).
//  - ENLA 2025 (FACTS 61): "En 2.º grado de secundaria, se registran avances en Matemática frente al 2023".
//  - OPI, UTEC (FACTS 111, 112, 116, 118): free for secondary students; 2025 rules ban generative AI.
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): data-city="huancayo" 499, border-epi-low; Lima 555 high;
//    Peru 519, rank 52 of 123.
//  - Time (timezone.tsv): America/Lima UTC-5 all year; India UTC+5:30; India 10 h 30 min ahead.
//  - Data: Universidad Nacional del Centro del Perú (UNCP), "Listado de inscritos en CEPRE de la UNIVERSIDAD NACIONAL
//    DEL CENTRO DEL PERU - [UNCP]", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/listado-de-inscritos-en-cepre-de-la-universidad-nacional-del-centro-del-peru-uncp,
//    licence odc-by (Open Data Commons Attribution License) on the dataset page, modified 15 June 2026. File
//    "INCRITOS EN CERPRE UNCP 2024-II.csv" saved as cepre-uncp-2024-II.csv (320,825 bytes, sha256 09f8ff21...c8c53b),
//    semicolon separated, 2,601 rows, FECHA_CORTE 20240529. Dictionary (diccionario-cepre-2024-II.xlsx): HORA_MATRICULA
//    "Hora en el que inscribio el estudiante a CEPRE", "Formato: hhmmss"; no time zone stated. Identity columns are
//    anonymised by the publisher; the page prints counts only.
// Our own calculations (scratchpad pe/c2/hyo/v1.py, v2.py; python3 -I, Python 3.14.8):
//  v1 prints: Busiest hour: 16 / Midnight to 03:59: 278 / 06:00 to 10:59: 4
//  v2 prints: Busiest hour: 11 / Midnight to 03:59: 8 / 06:00 to 10:59: 615 / Moved back a day: 297
//  Per hour as written: 00 83, 02 70, 04 19, 08 0, 11 8, 16 328, 20 232, 23 103; shifted five hours back: 00 6, 02 0,
//  04 1, 08 93, 11 328, 16 208, 20 88, 23 19. Registration dates 22 March 2024 to 17 May 2024; busiest date
//  1 April 2024 (222). Careers 37: MEDICINA HUMANA 459, DERECHO 253, INGENIERÍA CIVIL 188, INGENIERÍA DE SISTEMAS 135,
//  MATEMÁTICA E INFORMÁTICA 11. Study-seat provinces: HUANCAYO 2255, JAUJA 137, CHUPACA 114, SATIPO 48, TARMA 47.
// Lesson family: a timestamp written without a time zone; read the shape of the histogram, test a shift with datetime
// and timedelta, and leave the final word to the publisher.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'per_hour = [0] * 24',
  'with open("cepre-uncp-2024-II.csv", encoding="utf-8-sig") as src:',
  '    for row in csv.DictReader(src, delimiter=";"):',
  '        hour = int(row["HORA_MATRICULA"][:2])',
  '        per_hour[hour] += 1',
  '',
  'print("Busiest hour:", per_hour.index(max(per_hour)))',
  'print("Midnight to 03:59:", sum(per_hour[0:4]))',
  'print("06:00 to 10:59:", sum(per_hour[6:11]))'
].join('\n');

const V2 = [
  'import csv',
  'from datetime import datetime, timedelta',
  '',
  'shift = timedelta(hours=5)          # our guess: the server clock was UTC',
  'per_hour = [0] * 24',
  'moved_back = 0',
  'with open("cepre-uncp-2024-II.csv", encoding="utf-8-sig") as src:',
  '    for row in csv.DictReader(src, delimiter=";"):',
  '        stamp = row["FECHA_MATRICULA"] + row["HORA_MATRICULA"]',
  '        written = datetime.strptime(stamp, "%Y%m%d%H%M%S")',
  '        peru = written - shift',
  '        per_hour[peru.hour] += 1',
  '        if peru.date() < written.date():',
  '            moved_back += 1',
  '',
  'print("Busiest hour:", per_hour.index(max(per_hour)))',
  'print("Midnight to 03:59:", sum(per_hour[0:4]))',
  'print("06:00 to 10:59:", sum(per_hour[6:11]))',
  'print("Moved back a day:", moved_back)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Huancayo: coding for every age' },
  slug: 'coding-classes-in-huancayo-peru',
  code: 'coh',
  accent: '#8B3E09',
  accentRationale: 'Coding classes in Huancayo: a burnt clay brown #8B3E09 allocated to this row, the colour of adobe in the Mantaro valley, dark enough to clear 4.5:1 on all three papers',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in Huancayo, Peru',
  title: 'Coding Classes in Huancayo, Peru: Live Online, in English',
  description: 'Coding classes in Huancayo for children, teens and adults: live online in English at hours you choose, what school covers, and a project on UNCP open data.',
  ogDescription: 'Live online coding for Huancayo learners from age six to adult, taught in English at whatever hour suits the family, with a Python project on the CEPRE registration list the Universidad Nacional del Centro del Perú publishes as open data.',
  twitterDescription: 'Coding in Huancayo, live online in English: by age, beside school and CEPRE, plus a real Huancayo data project.',
  pageName: 'Coding Classes in Huancayo, Peru',
  webPageDescription: 'A guide for Huancayo and Junín families, secundaria leavers and adults to live online coding classes taught in English, built from INEI census figures, MINEDU curriculum sources, EF EPI 2025 and an original Python project on the UNCP CEPRE registration list (ODC-By).',
  courseDescription: 'Live online coding classes in English for learners in Huancayo, Peru: Scratch and Python for children from 6, Python, Java and data for teenagers, and Python, data analysis and algorithms for adults, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Huancayo',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#huancayo', label: 'Huancayo' },
    { href: '#cepre', label: 'Coding and CEPRE' },
    { href: '#project', label: 'Data project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Huancayo &middot; Junín &middot; Live online, in English',
  h1: 'Coding classes in Huancayo, Peru',
  lede: 'Huancayo is a city of students: every autumn thousands of secundaria leavers queue, online, for a place in a pre-university cycle. This page is for them, for the younger brothers and sisters still in primaria, and for adults in the Mantaro valley who want to program. It covers what school teaches, which live course fits each age, how classes in English work from Huancayo, and a project on a real UNCP file whose clock seems to run five hours fast.',
  secondaryCta: { href: '#project', label: 'See the Huancayo project' },
  wa: 'Hello Modern Age Coders, we are in Huancayo, Peru and would like live coding classes in English. Could we book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; over 10,000 learners around the world &middot; one mentor who learns how each student speaks',
  spec: [
    ['Ages', 'Six to adult, with children and teenagers in age bands'],
    ['Where to begin', 'Scratch blocks at 6, typed Python from about 9'],
    ['Class size', 'A group of fifteen to twenty, or one to one'],
    ['Huancayo time', 'Whichever day and hour you pick'],
    ['Teachers', 'Mentors in India, on live video'],
    ['Trial', 'A free first class, no card']
  ],
  capsuleQ: 'In brief',
  capsule: 'Yes, there are coding classes for Huancayo: Modern Age Coders teaches children, teenagers and adults in Huancayo and the rest of Junín live online and in English. Six year olds begin with Scratch, children of about 9 type Python, secundaria students build real programs in Python or Java, and adults learn Python, data analysis or algorithms. A mentor teaches every class on live video, in a group of fifteen to twenty or one to one, on the days and at the hours your family chooses. We teach learners to reason through a problem, never to copy an answer.',

  picks: {
    eyebrow: 'Start here in Huancayo',
    h2: 'Three courses Huancayo learners usually start with',
    lede: 'One for primaria, one for secundaria, and one for the older teenager or adult who wants a recognised Python exam to aim at.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'HYO / 01', title: 'Python and AI for Kids', note: 'Ages 9 to 12, starting from nothing. Children type real Python in the first week, draw with the turtle, build small games and finish with gentle AI projects. A good fit for a child in 4° to 6° de primaria who is ready for more than blocks.' },
      { course: 'python-complete-masterclass-teens', code: 'HYO / 02', title: 'Python for Teens', note: 'Ages 13 to 18, from zero to files, data and larger programs. It suits secundaria students across Junín, because nothing in the school timetable teaches programming as a subject.' },
      { course: 'pcep-pcap-python-certification-course', code: 'HYO / 03', title: 'PCEP and PCAP Python', note: 'From about 13, adults welcome. Preparation for the Python Institute exams, the same entry certificate MINEDU\'s Fábrica de Programadores pilot points its Lima students towards.' }
    ]
  },

  sections: [
    {
      id: 'huancayo',
      eyebrow: 'Huancayo in figures',
      h2: 'How many people live in Huancayo?',
      lede: 'INEI counted 456,250 people in the city of Huancayo at the 2017 census, which made it the sixth city of Peru. The newer 2025 census reports departments, provinces and districts, but not yet cities, so each figure below keeps its own unit and year.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Huancayo and Junín populations, by the unit INEI uses', head: ['Unit', 'People', 'Census'], rows: [
          ['Department of Junín', '1,422,780', '2025, total population'],
          ['Province of Huancayo', '626,199', '2025, total population'],
          ['District of Huancayo (the central district)', '124,447', '2025, total population'],
          ['Huancayo city (the urban area)', '456,250', '2017, enumerated']
        ] },
        { kind: 'source', html: 'From INEI: the three 2025 rows come from Cuadro 1 of the Censos Nacionales 2025 demographic tables, counted at 15 September 2025; the city row is from Cuadro N° 1.9 of the 2017 sociodemographic profile, taken on 22 October 2017. Because the units overlap, we never add the rows.' },
        { kind: 'two', mt: true,
          leftH3: 'A city spread across districts',
          left: [
            'What people call Huancayo reaches well beyond the district of that name: El Tambo and Chilca hold a large share of the city, and towns such as Concepción, Chupaca and Jauja are a short drive up or down the valley. For a live online class none of that matters. A learner in El Tambo and one in Jauja log in at the same moment.',
            'That is the practical case for online lessons in a valley city. Nobody waits for a combi after school, and an evening class does not end with a cold walk home at 3,000 metres.'
          ],
          rightH3: 'How Huancayo scores in English',
          right: [
            'In the 2025 edition of EF\'s English index, Huancayo city scores 499, inside the low band. Lima reaches 555, in the high band, and Peru overall sits at 519, 52nd among 123 countries.',
            'So in Huancayo English is usually a skill still being built. Our mentors plan for that: they speak slowly, check understanding often, and the free first class tests comfort in English as carefully as interest in code.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'What school covers',
      h2: 'Do schools in Huancayo teach programming?',
      lede: 'Not as a subject. Junín schools work to MINEDU\'s Currículo Nacional (CNEB), whose secundaria timetable holds no informatics area; digital ability is meant to grow inside the other subjects.',
      body: [
        { kind: 'two',
          leftH3: 'A competency, not a lesson',
          left: [
            'The CNEB\'s ICT competency, number 28, about getting on in virtual environments, is listed as transversal: every area shares it and no area owns it. Among its four capacities are handling information found online and making digital objects, yet no standard mentions a programming language.',
            'A teacher in Huancayo may well use a spreadsheet in maths or a slide deck in history. Nothing in the plan requires anyone to show a class how a loop works.'
          ],
          rightH3: 'Where the week goes',
          right: [
            'On the regular school day, every secundaria grade has 4 hours of Matemática, 4 of Comunicación and 3 of Inglés a week, out of 35. Educación para el Trabajo has 2 hours. There is no slot for informatics or coding.',
            'MINEDU\'s Fábrica de Programadores began in July 2025 with a first cohort of 1,000 public-school pupils from the two final secundaria years in Lima Norte, learning Python towards the PCEP exam. It is a pilot in the capital. A teenager in Junín who wants that path finds it outside school.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'School stages in Peru and where a Huancayo learner usually starts with us', head: ['School level', 'Years', 'MINEDU age on 31 March', 'A sensible start (our suggestion)'], rows: [
          ['Primaria, early', '1° to 3°', '6 to 8', 'Scratch: stories, animations, first games'],
          ['Primaria, late', '4° to 6°', '9 to 11', 'Typed Python with turtle drawings and games'],
          ['Secundaria', '1° to 4°', '12 to 15', 'Teen Python, later Java or data work'],
          ['Secundaria, final year', '5°', '16', 'Python with PCEP, or algorithms practice'],
          ['After school', 'CEPRE, university, work', '17 and over', 'Python, data analysis, data structures']
        ] },
        { kind: 'source', html: 'Ley N.° 28044 sets six years of primaria and five of secundaria; ages follow MINEDU\'s table of edades normativas, counted on 31 March; weekly hours and the TIC competency come from the CNEB; the pilot from a MINEDU press release of July 2025. The final column is our own advice.' },
        { kind: 'p', mt: true, html: 'Maths is where school and coding meet. MINEDU reported in May 2026 that in the ENLA 2025 assessment "En 2.º grado de secundaria, se registran avances en Matemática frente al 2023", the first positive change in that grade since the school closures. Programming gives that progress somewhere to go: a loop is repeated addition you can watch, and a condition is an inequality that decides something.' }
      ]
    },
    {
      id: 'cepre',
      eyebrow: 'Coding beside CEPRE',
      h2: 'Can a student preparing for university in Huancayo also learn to code?',
      lede: 'Yes, and many should, as long as the hours are honest. A pre-university cycle is demanding; a coding class has to fit around it rather than compete with it.',
      body: [
        { kind: 'two',
          leftH3: 'What we do and do not offer',
          left: [
            'Admission exams in Peru are set and marked in Spanish by each university, and the university alone decides who gets in. We do not prepare students for any admission exam and we are not connected with the UNCP, its CEPRE or any other university.',
            'What we teach is useful on either side of that exam: careful reasoning in maths, and programming in Python or Java, taught in English. A student who wants Ingeniería de Sistemas, for example, arrives at the first lecture already able to write and test a program.'
          ],
          rightH3: 'How families fit it in',
          right: [
            'The simplest pattern is one class a week during the CEPRE months, then two once the cycle ends. One-to-one classes can move week by week around mock exams, which a fixed group cannot.',
            'Students who finish secundaria in December and start a cycle in March sometimes use the summer break between the two for an intensive start, then keep a lighter slot.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Count the real free hours.</strong> Write down a normal CEPRE week, including travel and homework, before choosing a plan.',
          '<strong>Pick one language.</strong> Python first for almost everyone; Java if the student is sure about a software degree.',
          '<strong>Keep the class short and regular.</strong> One live hour each week beats a long Saturday that gets cancelled before every exam.',
          '<strong>Build something that needs the maths.</strong> A program that checks a sequence or graphs a function revises algebra without feeling like revision.',
          '<strong>Review after the exam.</strong> Once admission results are known, decide together whether to speed up, pause or change track.'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish?',
      lede: 'No. Each lesson is given live, over video, and only in English. We say so here, again in the free class, and on every page, so nobody discovers it late.',
      body: [
        { kind: 'two',
          leftH3: 'English at the learner\'s pace',
          left: [
            'Our mentors work from India over a video call. They slow down, rephrase an instruction in simpler words, and wait for an answer. A child who replies half in Spanish is understood and handed the English word without fuss.',
            'Programming helps here. Python keywords are short English words such as if, for and while, so after a month a learner already reads a good part of every program on the screen.'
          ],
          rightH3: 'English as a second gain',
          right: [
            'Huancayo families often see the English as a bonus: every coding hour doubles as practice in listening and explaining in English, one to one with a patient adult or inside a small conversation of learners.',
            'Teenagers heading to university gain something extra. Error messages, documentation and most programming forums are in English, and they will have practised reading them long before their first course.'
          ] }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A real Huancayo project',
      h2: 'Did Huancayo really sign up for CEPRE at two in the morning?',
      lede: 'The Universidad Nacional del Centro del Perú publishes the list of people who registered for its 2024-II pre-university cycle on the national open-data portal. Older students learn from it a quiet trap in real data: a time written without a time zone.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The dataset is the "Listado de inscritos en CEPRE" of the UNCP, released through the Plataforma Nacional de Datos Abiertos with an ODC-By licence (Open Data Commons Attribution). The file we downloaded, cepre-uncp-2024-II.csv, has 2,601 registrations with a cut-off date of 29 May 2024. Identity numbers are anonymised by the publisher, and we only ever print totals.',
            'Each row has a date of registration, written like 20240401, and a time, written like 205848. The data dictionary says the time column is "Formato: hhmmss". It does not say which clock.'
          ],
          rightH3: 'The question',
          right: [
            'At what hour of the day did people register? A student expects late afternoon and evening, when a secundaria leaver and a parent sit together at a computer, and almost nothing in the small hours.',
            'Version 1 takes the first two characters of each time as the hour, counts registrations per hour and prints the busiest hour and two night and morning totals.'
          ] },
        { kind: 'code', label: 'Version 1: count registrations by the hour as written', lang: 'Python', code: V1, note: 'It prints: <code>Busiest hour: 16</code>, <code>Midnight to 03:59: 278</code> and <code>06:00 to 10:59: 4</code>.' },
        { kind: 'p', mt: true, html: 'Read literally, 278 people registered between midnight and four in the morning, while across five whole morning hours, from six to eleven, only 4 did. A university office open in the morning with nobody signing up, and a crowd at two at night, is a strange picture of Huancayo.' },
        { kind: 'p', html: 'There is a simpler explanation. Many web servers record time in UTC, and Peru\'s clock sits five hours behind UTC throughout the year. If the file\'s clock is UTC, every registration happened five hours earlier, in Huancayo time, than the file says. That is our hypothesis, not a fact: the file does not state its time zone. So we test it.' },
        { kind: 'code', label: 'Version 2: join date and time, move them five hours back, count again', lang: 'Python', code: V2, note: 'It prints: <code>Busiest hour: 11</code>, <code>Midnight to 03:59: 8</code>, <code>06:00 to 10:59: 615</code> and <code>Moved back a day: 297</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Registrations per hour, as written and moved five hours back (our counts)', head: ['Hour', 'As written', 'Five hours earlier'], rows: [
          ['00:00', '83', '6'],
          ['02:00', '70', '0'],
          ['04:00', '19', '1'],
          ['08:00', '0', '93'],
          ['11:00', '8', '328'],
          ['16:00', '328', '208'],
          ['20:00', '232', '88'],
          ['23:00', '103', '19']
        ] },
        { kind: 'source', html: 'Data: the UNCP\'s Listado de inscritos en CEPRE 2024-II, from the national open-data platform, ODC-By. Every count here is ours, run with python3 -I on the downloaded file. Registrations run from 22 March 2024 to 17 May 2024; the busiest date in the file is 1 April 2024, with 222.' },
        { kind: 'p', mt: true, html: 'After the shift the day looks like a day: almost nobody between midnight and five, a climb from eight, a peak at eleven in the morning and a long tail into the evening. Two details matter. First, joining the date and time before subtracting is essential, because 297 registrations written just after midnight move back to the previous date. Second, the shift proves nothing on its own. A good analyst writes "the pattern fits a UTC clock" and asks the publisher, rather than quietly rewriting 2,601 rows.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 9, on paper.</strong> If it is 4 in the afternoon in Huancayo, what time is it in London, five hours ahead? What happens to the date if it is 9 at night?',
          '<strong>Scratch, about 8 to 11.</strong> Make a sprite that says the time in Huancayo and in India. Add 10 hours 30 minutes, and handle the jump past midnight.',
          '<strong>First Python, 10 to 13.</strong> Run Version 1 on the table above by hand: which hours look wrong, and why?',
          '<strong>Secundaria.</strong> Write Version 2 yourself, then try shifts of 4 and 6 hours. Which shift leaves the fewest registrations between midnight and five?',
          '<strong>Going further.</strong> The file also has 37 careers. Medicina Humana leads with 459 registrations, Ingeniería de Sistemas has 135. Chart the top ten, then decide whether the hour of registration differs by career.'
        ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Every age',
      h2: 'Which course should my child, my teenager or I take?',
      lede: 'Choose by age first, then by the kind of thing the learner wants to build. Course ages are ours; the grades sit beside them so you can find your child quickly.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children, 6 to 12', p: 'Short, busy classes. Six and seven year olds drag Scratch blocks to make a llama dance or a quiz about the valley. From about 9, children type Python: loops, conditions, small games, and a turtle that draws the flag in the right colours. Children stay with their own age group.' },
          { h3: 'Teenagers, 13 to 18', p: 'Most begin with Python. From there some move to Java, some to data science from 14, some to the PCEP exam. Teenagers also meet the habits of a real programmer: testing, reading error messages, and explaining why a program is right. Those habits travel to any university course.' },
          { h3: 'Students and adults', p: 'University students in Huancayo, teachers, engineers and anyone else from 18 join the same live classes in adult groups. A common route is Python, followed by data analysis or data structures. Our youngest learners are 6 and our oldest 67, so a late start is ordinary.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'What each age typically builds in its first months (our course plans)', head: ['Age', 'Course', 'Typical first project'], rows: [
          ['6 to 8', 'Coding for Kids (Scratch)', 'An animated story with three scenes'],
          ['8 to 14', 'Roblox game coding', 'An obstacle course with checkpoints'],
          ['9 to 12', 'Python and AI for Kids', 'A times-table quiz that keeps score'],
          ['13 to 18', 'Python for Teens', 'A program that reads a file and summarises it'],
          ['14 to 18', 'Data science for teens', 'A chart of a real open dataset'],
          ['18 and over', 'Python masterclass', 'Automating a spreadsheet task from work or study']
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Computing contest',
      h2: 'Is there a programming olympiad a Huancayo student can enter?',
      lede: 'Yes: the Olimpiadas Peruanas de Computación, organised by UTEC. We are not connected with the organiser; we describe it from its own pages.',
      body: [
        { kind: 'p', html: 'UTEC runs the OPI at no cost to any secundaria pupil in the country. The 2026 edition stopped taking sign-ups on 18 March 2026 and held its final on 11 April 2026. The 2025 rulebook let first-round entrants write Python or C++, kept the in-person final to C++ alone, and forbade generative AI. A Huancayo student who starts Python now and moves to C++ later has time to prepare properly for a future edition, with problems we write ourselves rather than the organiser\'s.' },
        { kind: 'p', html: '<strong>A practice problem of ours.</strong> A clock in a file is 5 hours ahead of Huancayo. A registration is written as 20240401 and 031500. On what date and at what time did it happen in Huancayo? (Ours. Answer: 31 March 2024 at 22:15, because subtracting five hours crosses midnight and the month.)' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are classes in Huancayo?',
      lede: 'Whatever time you choose. Huancayo keeps Peru time, the same clock as Lima, and your mentor plans around it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample conversions from Huancayo time to India time (not a timetable)', head: ['Huancayo', 'India', 'Note'], rows: [
          ['06:30', '17:00', 'Same date'],
          ['08:00', '18:30', 'Same date'],
          ['10:30', '21:00', 'Same date'],
          ['14:00', '00:30', 'India is already on the next date'],
          ['17:30', '04:00', 'Next date in India'],
          ['19:00', '05:30', 'Next date in India']
        ] },
        { kind: 'source', html: 'Clock facts: Peru runs on UTC minus five with no daylight saving (tz zone America/Lima; INACAL publishes the legal time) and India on UTC plus five and a half, so the gap is a fixed 10 hours 30 minutes.' },
        { kind: 'p', mt: true, html: 'With no clock changes on either side, a class time agreed in April still holds in November. At booking you pick times in your own clock and the system shows the mentor the India equivalent; this is the same kind of conversion the CEPRE project above asks students to reason about. MINEDU opened the 2026 school year on 16 March 2026, with 6,225,000 pupils returning to 53,631 schools; our classes carry on across the school breaks unless you ask for a pause.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What a Huancayo learner can do at each stage',
    lede: 'Our milestones, the same at any age. They place a new learner and show families what progress looks like in things built, not hours logged.',
    table: { caption: 'Coding milestones from first blocks to trustworthy data work (ours)', head: ['Step', 'Usual age', 'What they can do'], rows: [
      ['1. Sequence', 'Age 6 or 7', 'Put instructions in order so a sprite moves and speaks'],
      ['2. Repeat', 'Around 7', 'Use loops and react to keys and clicks'],
      ['3. Store', 'Around 8 or 9', 'Keep a score and a list, and update them'],
      ['4. Type', 'From about 9', 'Write Python with functions and conditions'],
      ['5. Read data', 'Age 12 to adult', 'Open a real file, count and group its rows'],
      ['6. Question data', 'Age 14 to adult', 'Spot a pattern that cannot be right and test an explanation']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 6 is the CEPRE clock project: noticing that 278 night-time registrations make no sense, and testing why, instead of reporting them.',
      'We tell you what your child built and explained each month.'
    ] },
    right: { h3: 'For learners', ps: [
      'A surprising result is a question, not an answer. Ask what would have to be true for it to happen.',
      'Before you trust a time, find out whose clock wrote it.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Huancayo learners',
    lede: 'From youngest to oldest. All run live and in English with one regular mentor, as a group or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 15', courses: [
        { code: 'HYO / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Scratch stories and games for 6 to 12 year olds, then first apps.' },
        { code: 'HYO / KIDS / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Luau scripting for players aged 8 to 14 who want to make games.' },
        { code: 'HYO / KIDS / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python as a way to explore school maths, ages 10 to 15.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'HYO / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects, classes and real programs, ages 13 to 18.' },
        { code: 'HYO / TEEN / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Charts and first models on open data, for 14 to 18.' },
        { code: 'HYO / TEEN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic, data structures and algorithms for contest-minded teenagers.' }
      ] },
      { num: 'III', h3: 'Students and adults', sub: 'Ages 18 and over', courses: [
        { code: 'HYO / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'From a first line to advanced Python, for students and workers.' },
        { code: 'HYO / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and dashboards from scratch.' },
        { code: 'HYO / ADULT / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The core of a computing degree, practised live.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live online classes work from Huancayo',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early', l: 'A class before colegio or CEPRE falls in the Indian evening.' },
      { time: 'Afternoon or night', l: 'Later hours work too; tell us what suits the household.' },
      { time: '1-on-1', l: 'A slot you agree with your own mentor, moved when exams demand it.' }
    ],
    cells: [
      { h3: 'A steady mentor', p: 'The same teacher week after week, who remembers what was hard.' },
      { h3: 'Patient English', p: 'Slower speech, simpler words, and time to reply.' },
      { h3: 'The learner types', p: 'Students write every line; the mentor steers.' },
      { h3: 'Age bands', p: 'Children, teenagers and adults study apart.' },
      { h3: 'Short reports', p: 'Families hear what was built and what comes next.' },
      { h3: 'Two formats', p: 'Fifteen to twenty in a group, or one learner alone.' }
    ]
  },

  projectsH2: 'Projects our older learners have finished',
  projectsLede: 'Students who stay with it ship real tools. A few appear below; the <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Parents and students in their own words, from Google reviews.',

  fees: {
    h2: 'Fees for Huancayo learners',
    lede: 'Plans are monthly and priced in US dollars. Your card is charged in dollars and your bank turns the amount into soles at its own rate on the day, so the statement can differ slightly from the figure here.',
    free: ['A free first class', 'A short problem and a first program', 'No card asked for'],
    group: ['Fifteen to twenty learners of a similar age', 'The same mentor all along', 'Two live classes a week', 'Month by month, stop any time'],
    one: ['One learner with one mentor', 'Projects chosen for the learner', 'Days and hours you set']
  },

  faq: {
    eyebrow: 'Huancayo families ask',
    h2: 'Coding classes in Huancayo: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Lessons happen live on video and only in English. Mentors keep their speech slow and plain, follow each learner\'s speed and accent, and when a reply comes in Spanish they supply the English words.' },
      { q: 'Can children in Huancayo take coding classes?', a: 'Yes, live online from home. Children in Huancayo, El Tambo, Chilca or anywhere in Junín start Scratch at 6 and typed Python at about 9, in groups of their own age.' },
      { q: 'Can my child learn coding while doing CEPRE?', a: 'Yes, if the hours are planned honestly. Many families choose one short class a week during the cycle and more afterwards. We do not prepare anyone for an admission exam, which is set in Spanish by each university, and we are not connected with the UNCP or its CEPRE.' },
      { q: 'At what age can someone start?', a: 'From 6 with Scratch, from about 9 with typed Python, from 13 with Python or Java at teenage level, and at any adult age. The youngest we teach are 6, the oldest 67.' },
      { q: 'Do schools in Huancayo teach coding?', a: 'Not as a subject. The national curriculum spreads digital skills across all areas, the regular 35-hour secundaria timetable includes no informatics, and MINEDU\'s only Python pilot so far runs in Lima Norte.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Huancayo uses Peru time all year and the mentor in India is ten and a half hours ahead: 08:00 in Huancayo is 18:30 there.' },
      { q: 'Is my English good enough?', a: 'Usually yes. The free first class checks it gently. Mentors simplify their language for beginners, and code itself uses only a small set of English words.' },
      { q: 'Can adults in Huancayo join?', a: 'Yes. Students over 18 and people in work learn in adult groups or one to one, usually starting with Python and moving to data analysis or data structures.' },
      { q: 'How much does it cost?', a: 'It is a monthly fee, quoted here in US dollars and billed to your card in that currency, with your bank converting it to soles. Visitors browsing from India are shown rupees. The trial class costs nothing.' },
      { q: 'Do you give a certificate?', a: 'Where a course includes a certificate, it is ours and records the work completed. No Peruvian school, university or MINEDU issues it, and it is not a Peruvian qualification.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for Huancayo families, students and adults.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru page, by age and subject.' },
      { href: '/coding-classes-in-arequipa-peru', label: 'Coding classes in Arequipa', p: 'The southern city page, with its own data project.' },
      { href: '/online-coding-classes-for-kids-peru', label: 'Online coding classes for kids in Peru', p: 'The children\'s guide for the whole country.' },
      { href: '/coding-classes-for-teens-peru', label: 'Coding classes for teens in Peru', p: 'For 1° to 5° de secundaria.' },
      { href: '/data-science-course-peru', label: 'Data science course for Peru', p: 'Where projects like the CEPRE clock lead.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class from start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Huancayo',
    lede: 'The trial is a short problem and a first program, at an hour you choose. Watching the learner work, the mentor judges both the reasoning and the ease with English, and recommends where to begin.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through one class, and the <a class="ag-inline-link" href="/courses">course list</a> holds each syllabus.',
    note: 'Lessons are live, online, in English only, and taught by mentors in India. Message us on WhatsApp, in English, for the quickest reply.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/online-coding-classes-for-kids-peru', label: 'Kids in Peru' },
        { href: '/coding-classes-for-teens-peru', label: 'Teens in Peru' },
        { href: '/python-course-peru', label: 'Python course' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Ask whose clock wrote the time'
  },

  personalityCss: `
.ag-root.ag-coh .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-coh .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-coh .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-coh .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-coh .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro 1) and Perfil Sociodemográfico 2017 (Cuadro N° 1.9); Ley 28044; MINEDU Edades normativas, CNEB, ENLA 2025 news, Fábrica de Programadores; UTEC OPI pages and 2025 rules; EF EPI 2025; tz database America/Lima. Data: UNCP, Listado de inscritos en CEPRE 2024-II, ODC-By.',
    localProject: 'Did Huancayo register for CEPRE at two in the morning? An original Python project on the UNCP CEPRE 2024-II registration list (ODC-By, 2,601 rows): Version 1 counts by the hour as written (busiest 16, 278 between midnight and 03:59, 4 between 06:00 and 10:59); Version 2 joins date and time and shifts five hours back as a tested UTC hypothesis (busiest 11, 8 at night, 615 in the morning, 297 moved to the previous date). Lesson family: a timestamp with no time zone.',
    requiredMentions: ['cepre-uncp-2024-II.csv', 'Midnight to 03:59: 278', 'Moved back a day: 297', '456,250', '626,199', '1,422,780', 'Huancayo city scores 499', 'Ask whose clock wrote the time', 'Formato: hhmmss'],
    sources: [
      { claim: 'Junín, Huancayo province and district populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Huancayo city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'UNCP CEPRE 2024-II registration list and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/listado-de-inscritos-en-cepre-de-la-universidad-nacional-del-centro-del-peru-uncp' },
      { claim: 'CNEB transversal TIC competency and secundaria weekly hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ENLA 2025: maths gains in 2° secundaria.', url: 'https://www.gob.pe/institucion/minedu/noticias/1390772-enla-2025-se-mantienen-avances-en-lectura-y-matematica-con-mejoras-en-las-zonas-rurales' },
      { claim: 'EF EPI 2025 scores for Huancayo, Lima and Peru.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'OPI organiser, cost, 2026 dates and 2025 rules.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'That the CEPRE file\'s clock is UTC: the dictionary gives only "hhmmss"; the page presents the five-hour shift as a tested hypothesis and leaves the answer to the publisher.',
      'Any admission preparation, admission promise or connection with the UNCP, its CEPRE or any university: refused.',
      'A combined Huancayo population built from city, province or district figures: never summed.',
      'Reusing the IGP Huayao weather file: already used by data-science-course-peru.',
      'Spanish-language teaching: every class is in English.',
      'Printing any row-level detail from the CEPRE list: only totals are shown.'
    ]
  }
};
