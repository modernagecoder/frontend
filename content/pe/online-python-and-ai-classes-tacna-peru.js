// SHIP: market (city) | Tacna, all ages: strong school results, well-connected homes, a Python path | survey weights: rows are not people; raw share against weighted share
'use strict';
// Online Python and AI classes in Tacna, Peru (ag- city page, Peru cluster row PE187; alloc: cities, pat, #721405).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; USD only, through the template's data-price anchors. Audience: every age, on one Python path.
// Spine: Tacna is one of the regions MINEDU says lead learning results, and its homes are among the better connected in
// Peru, so the realistic question is not "can we?" but "what is the Python path, and how does a live class work?". The
// page sets out the path from 9 to adult, how a live online class runs, honest notes on English (EF rates the region
// low), and an original project on survey weights using INEI's employment survey for the Tacna department.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-python-and-ai-classes-tacna-peru/):
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (places.tsv): Tacna city 286,240 (22 October 2017).
//  - INEI Censos Nacionales 2025, Indicadores demográficos, Cuadro 1 (places.tsv): department TACNA 389,226; province
//    TACNA 367,437; district TACNA 116,625. Capital Tacna (Compendio 2026 cuadro 1.8). Never summed.
//  - INEI Compendio Estadístico Perú 2026 tomo 1 (compendio2026-cuadros-11.5-11.6-11.13.txt), ENAHO: 11.5 Tacna
//    "37,5 ... 44,3 42,4" (2015, 2025), Total 2025 "33,9"; 11.6 Tacna "27,0 ... 62,5 60,9", Total "56,8"; 11.13
//    Tacna "46,8 ... 82,3 84,5", Total "81,1".
//  - EF EPI 2025 (ef_peru.raw): stateScore tacna "low", "Tacna 476"; Peru 519 moderate; Lima city 555 high. No Tacna
//    city score.
//  - MINEDU ENLA 2025 news (FACTS 62): "Moquegua, Tacna y Arequipa continúan liderando los logros de aprendizaje en todo
//    el país."
//  - MINEDU Fábrica de Programadores (FACTS 45, 46, 47): 1,000 students of 4° and 5° secundaria in Lima Norte, Python,
//    PCEP; a pilot to be replicated. OPI (FACTS 111, 116): UTEC, free; Fase 1 C++ or Python, Fase 2 C++ only.
//  - CNEB (FACTS 33, 39): TIC competency transversal; secundaria "Matemática 4 4 4 4 4 ... Inglés 3 3 3 3 3".
//  - Time (timezone.tsv): America/Lima UTC-5 all year; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
//  - Data: INEI, Encuesta Permanente de Empleo Nacional (EPEN) Departamentos 2025, Plataforma Nacional de Datos
//    Abiertos, https://www.datosabiertos.gob.pe/dataset/encuesta-permanente-de-empleo-nacional-epen-departamentos-2025-instituto-nacional-de,
//    licence "Open Data Commons Open Database License (ODbL)" (dataset-page.html), modified 2026-07-24. Resource
//    "Data completa ... Tacna 2025", proyectos.inei.gob.pe/iinei/srienaho/descarga/CSV/1023-Modulo76.zip, file "23 Tacna
//    EPEN Anual 2025.csv" (saved as tacna-epen-2025.csv), 3,399,632 bytes, sha256 bd0b9f03...c15a1d8d7, 13,420 rows, months
//    01 to 12 of 2025. Dictionary (dic-2025-156.txt): AREA "1 Urbano 2 Rural"; C208 age; C366 "Cuál es el último año o
//    grado de estudios y nivel que aprobó", 11 "Superior universitaria completa", 12 "Maestría/Doctorado"; FAC_T300
//    "Factor empleo trimestral" (the annual file's column is FAC300_ANUAL). Only AREA, C208, C366 and the weight are
//    read; disability, mother-tongue and identity columns are never opened. ODbL is share-alike: anything we publish
//    from the database itself would carry the same licence; our page publishes only counts and code.
// Our own calculations (scratchpad pe/c5/pat/v1.py, v2.py; python3 -I):
//  v1 prints: Rows, aged 25 and over: 7126 / Rural share of rows: 13.6 % / University degree share of rows: 15.7 %
//  v2 prints: People this stands for: 270397 / Rural share of people: 8.3 % / Degree share, all: 15.3 % / Degree share,
//    urban: 16.4 % / Degree share, rural: 3.9 %
//  summary: 4,327 rows have no weight (mostly under 14); 869 rows aged 25+ have no C366; urban rows weigh 40.3 each on
//    average, rural rows 23.07 (our division of weight totals 247,976 and 22,420 by rows 6,154 and 972).
// Lesson family: survey weights. A row is not a person: a raw share counts rows, a weighted share counts the people each
// row stands for, and a sample that over-visits one area tells a different story until it is weighted.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'people = 0',
  'rural = 0',
  'degree = 0',
  'with open("tacna-epen-2025.csv", encoding="latin-1") as src:',
  '    for rec in csv.DictReader(src):',
  '        if rec["FAC300_ANUAL"] == "" or rec["C208"] == "" or rec["C366"] == "":',
  '            continue',
  '        if int(rec["C208"]) < 25:',
  '            continue',
  '        people += 1',
  '        if rec["AREA"] == "2":',
  '            rural += 1',
  '        if rec["C366"] in ("11", "12"):',
  '            degree += 1',
  '',
  'print("Rows, aged 25 and over:", people)',
  'print("Rural share of rows:", round(100 * rural / people, 1), "%")',
  'print("University degree share of rows:", round(100 * degree / people, 1), "%")'
].join('\n');

const V2 = [
  'import csv',
  '',
  'people = 0.0',
  'rural = 0.0',
  'degree = {"1": 0.0, "2": 0.0}',
  'total = {"1": 0.0, "2": 0.0}',
  'with open("tacna-epen-2025.csv", encoding="latin-1") as src:',
  '    for rec in csv.DictReader(src):',
  '        if rec["FAC300_ANUAL"] == "" or rec["C208"] == "" or rec["C366"] == "":',
  '            continue',
  '        if int(rec["C208"]) < 25:',
  '            continue',
  '        w = float(rec["FAC300_ANUAL"])',
  '        people += w',
  '        total[rec["AREA"]] += w',
  '        if rec["AREA"] == "2":',
  '            rural += w',
  '        if rec["C366"] in ("11", "12"):',
  '            degree[rec["AREA"]] += w',
  '',
  'print("People this stands for:", round(people))',
  'print("Rural share of people:", round(100 * rural / people, 1), "%")',
  'print("Degree share, all:", round(100 * (degree["1"] + degree["2"]) / people, 1), "%")',
  'print("Degree share, urban:", round(100 * degree["1"] / total["1"], 1), "%")',
  'print("Degree share, rural:", round(100 * degree["2"] / total["2"], 1), "%")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Tacna: Python and AI, all ages' },
  slug: 'online-python-and-ai-classes-tacna-peru',
  code: 'pat',
  accent: '#721405',
  accentRationale: 'Online Python and AI classes in Tacna: the allocated #721405, a dark oxblood that reads firmly on warm paper; contrast 10.90 on #FBF8F2, 10.25 on #F5F1E8 and 9.38 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online Python and AI classes in Tacna, Peru',
  title: 'Online Python and AI Classes in Tacna, Peru: Live, in English',
  description: 'Online Python and AI classes in Tacna for children, teenagers and adults: live in English at flexible hours, how a class works, PCEP, and a Python survey project.',
  ogDescription: 'Live online Python and AI classes for Tacna learners from age 9 to adult, taught in English at any hour: the Python path by age, how a live class runs, the PCEP certificate and the OPI, and a project on INEI\'s Tacna employment survey that shows why rows are not people.',
  twitterDescription: 'Python and AI in Tacna, live online in English: the path by age, how classes work, and a survey-weights project.',
  pageName: 'Online Python and AI Classes in Tacna, Peru',
  webPageDescription: 'A guide for Tacna learners of every age to live online Python and AI classes taught in English, built from INEI census and household-survey figures, MINEDU sources on ENLA 2025 and Fábrica de Programadores, the OPI rules, EF EPI 2025, and an original Python project on INEI\'s EPEN Departamentos 2025 file for Tacna (ODbL).',
  courseDescription: 'Live online Python and AI classes in English for learners in Tacna, Peru: Python and AI for children from about 9, complete Python for teenagers with PCEP and data science options, and Python, automation and AI for adults, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Tacna, Python and AI',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#path', label: 'Python path' },
    { href: '#live', label: 'How live works' },
    { href: '#weights', label: 'Tacna project' },
    { href: '#english-tacna', label: 'English' },
    { href: '#hours', label: 'Times' }
  ],
  eyebrow: 'Tacna &middot; Python and AI &middot; Live online, in English &middot; Age 9 to adult',
  h1: 'Online Python and AI classes in Tacna, Peru',
  lede: 'Tacna\'s pupils already do well at school, and most of its homes are online, so the question for a Tacna family is less whether to learn Python than how. This page lays out one Python path from age nine to adult, walks through what actually happens in a live online class, and ends with a project on INEI\'s own Tacna survey in which a program learns that a row of data is not the same thing as a person.',
  secondaryCta: { href: '#weights', label: 'See the Tacna project' },
  wa: 'Hello Modern Age Coders, I am in Tacna, Peru and would like live online Python classes in English. Could I book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; Python taught by people, not by videos',
  spec: [
    ['Who', 'Children from about 9, teenagers, adults'],
    ['Language of code', 'Python first, then AI and data'],
    ['Group', 'Fifteen to twenty learners, or private'],
    ['Tacna clock', 'Any day, any hour you set'],
    ['Teaching', 'Live video with a mentor in India'],
    ['Trial', 'One free class, no card']
  ],
  capsuleQ: 'What Tacna learners get',
  capsule: 'Modern Age Coders teaches Python and AI to learners in Tacna, Peru, live online and in English. Children from about nine type their first Python programs and small AI projects, teenagers go on to complete Python, data science and the PCEP certificate, and adults learn Python for automation, data and generative AI. A mentor teaches each class on live video, in a group of fifteen to twenty or one to one, at whatever hour the learner chooses. The focus is reasoning: learners write and test their own code rather than paste it.',

  picks: {
    eyebrow: 'The Python path in Tacna',
    h2: 'Three Python courses, one for each stage of life',
    lede: 'The same language at every age, taught differently. Start where the learner is today.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'TCQ / 01', title: 'Python and AI for Kids', note: 'Ages 9 to 12. Typed Python from the first class, with turtle graphics, games and small AI projects. For children in 4° to 6° de primaria who are ready to use a keyboard.' },
      { course: 'python-complete-masterclass-teens', code: 'TCQ / 02', title: 'Python for Teens', note: 'Ages 13 to 18, from zero. Variables to files, functions to data, and the reasoning behind each. Runs alongside secundaria and leads on to PCEP or data science.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'TCQ / 03', title: 'Python Masterclass', note: 'Students and working adults, beginners welcome. From first scripts to automation and data handling, at a pace that fits a job or a university timetable.' }
    ]
  },

  sections: [
    {
      id: 'tacna',
      eyebrow: 'Tacna at a glance',
      h2: 'How many people live in Tacna, and how connected are its homes?',
      lede: 'Tacna is a small department where almost everyone lives in or near the capital, and its homes are better equipped than the Peruvian average. Both matter for live online classes.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Tacna\'s population by the area INEI counts', head: ['Area counted', 'People', 'Source and year'], rows: [
          ['Department of Tacna', '389,226', 'INEI census, 2025'],
          ['Province of Tacna', '367,437', 'INEI census, 2025'],
          ['District of Tacna (the historic centre)', '116,625', 'INEI census, 2025'],
          ['Tacna city, the capital\'s built-up area', '286,240', 'INEI census, 2017']
        ] },
        { kind: 'source', html: 'From INEI: table 1 of its Indicadores demográficos for the Censos Nacionales 2025 (reference date 15 September 2025) for the first three rows, and table 1.9 of the 2017 Perfil Sociodemográfico for the city row, the newest city figure published when we checked in November 2026. The areas sit inside one another, so adding them would be meaningless.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Homes and people online: Tacna against Peru (per cent)', head: ['Measure', 'Tacna 2015', 'Tacna 2025', 'Peru 2025'], rows: [
          ['Homes with a computer', '37.5', '42.4', '33.9'],
          ['Homes with an internet service', '27.0', '60.9', '56.8'],
          ['People aged 6 or more using the internet', '46.8', '84.5', '81.1']
        ] },
        { kind: 'source', html: 'INEI, Compendio Estadístico Perú 2026, tomo 1, cuadros 11.5, 11.6 and 11.13, which INEI builds from its national household survey, ENAHO. Commas turned into decimal points; the choice of 2015 for comparison is ours.' },
        { kind: 'p', mt: true, html: 'In 2025, 42.4% of Tacna homes had a computer, against 33.9% across Peru, and six in ten had an internet service. Typed Python needs a keyboard, so this matters: in Tacna, a family that wants to start usually already has what it needs, or can share a machine with a relative for two hours a week.' }
      ]
    },
    {
      id: 'school-tacna',
      eyebrow: 'School and Python',
      h2: 'Do schools in Tacna teach Python?',
      lede: 'Not as a subject. MINEDU rates Tacna among the strongest regions for learning, but the national timetable that Tacna\'s colegios follow has no programming area.',
      body: [
        { kind: 'two',
          leftH3: 'Strong results, no programming slot',
          left: [
            'When MINEDU published its ENLA 2025 results, it wrote that "Moquegua, Tacna y Arequipa continúan liderando los logros de aprendizaje en todo el país": Tacna is one of three regions that keep leading the national assessment.',
            'Yet the secundaria plan under the regular school day gives Matemática four hours a week and Inglés three, with no area for computing. Digital skill is a transversal competency, expected everywhere and timetabled nowhere.'
          ],
          rightH3: 'Where Python is starting',
          right: [
            'MINEDU\'s Fábrica de Programadores pilot, launched in July 2025, teaches Python to 1,000 public-school students of 4° and 5° de secundaria in Lima Norte, and those who finish can sit the PCEP exam, an entry-level Python certificate. MINEDU calls it a pilot it wants to replicate across the country.',
            'Until it reaches Tacna, a teenager who wants that same path, Python up to PCEP level, learns it outside school. Our PCEP course covers the same certificate, and we have no connection with MINEDU or the pilot.'
          ] },
        { kind: 'p', mt: true, html: 'Python also opens a contest door. The Olimpiadas Peruanas de Computación, run by UTEC and free for every secundaria student, allow C++ or Python in their first round and only C++ in the in-person final, and they ban the use of generative AI to solve problems. A Tacna student who has learned to reason in Python can enter the first round and learn C++ later. Our page on <a class="ag-inline-link" href="/python-course-peru">Python courses in Peru</a> compares the routes in more detail.' }
      ]
    },
    {
      id: 'path',
      eyebrow: 'One language, every age',
      h2: 'What does the Python path look like from age 9 to adult?',
      lede: 'Python is the same language for a ten year old and a forty year old. What changes is the pace, the projects and the reason for learning.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our Python path for Tacna learners, stage by stage (course ages are ours)', head: ['Stage', 'Who', 'What they learn', 'Where it leads'], rows: [
          ['First code', '9 to 12, 4° to 6° primaria', 'Printing, loops, turtle drawings, simple games', 'Typed confidence, first AI ideas'],
          ['Foundations', '13 to 15, 1° to 3° secundaria', 'Functions, lists, dictionaries, files', 'Programs that read and change real data'],
          ['Certificate', 'About 14 and over', 'PCEP, then PCAP preparation', 'An international entry-level Python certificate'],
          ['Data and AI', '14 to 18', 'Pandas-style analysis, charts, first models', 'Data science and machine learning courses'],
          ['Work Python', '18 and over', 'Automation, data cleaning, APIs', 'Python in an office, a lab or a start-up'],
          ['AI builders', 'Adults', 'Generative AI, agents, careful evaluation', 'Using AI tools with judgement']
        ] },
        { kind: 'source', html: 'Stages and ages are ours. Secundaria grades follow MINEDU\'s normative ages at 31 March (1° de secundaria at 12, 5° at 16).' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Children, about 9 to 12', p: 'The first weeks are about typing without fear: a misspelt word gives an error, the mentor shows how to read it, the child fixes it. By the end of the course children write short programs that make choices and repeat.' },
          { h3: 'Teenagers, 13 to 18', p: 'Teenagers learn why code works, not just that it does. They write functions, test them, and use Python on real files. Some go to PCEP; others to data science or to the OPI\'s Python round.' },
          { h3: 'Adults', p: 'Adults usually arrive with a goal: a report to automate, a dataset to understand, an AI tool to use well. The course starts from zero but quickly bends towards that goal.' }
        ] }
      ]
    },
    {
      id: 'live',
      eyebrow: 'How live online works',
      h2: 'How does a live online Python class actually work?',
      lede: 'It is not a recorded video. A mentor and the learners are on the same call at the same time, and the learners write the code themselves.',
      body: [
        { kind: 'ol', items: [
          '<strong>Join the call.</strong> At the agreed hour the learner opens the class link on a laptop or desktop. A headset is useful; a webcam is welcome but not required.',
          '<strong>A short warm-up.</strong> The mentor asks what happened last time, or sets a two-minute puzzle, so everyone is thinking before any code appears.',
          '<strong>One new idea.</strong> The mentor shares their screen and shows one idea, for example a loop that adds up a list, explaining each line in plain English.',
          '<strong>Learners type it.</strong> Every learner writes the code on their own computer. When something breaks, the mentor asks the learner to read the error aloud and guess the cause before helping.',
          '<strong>A small challenge.</strong> The class ends with a task to change the program, for example to add up only some of the list. Learners share screens to show their answer.',
          '<strong>Practice between classes.</strong> A short exercise follows each class. Parents of younger learners receive a note on what was covered and what was hard.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or one to one',
          left: [
            'A group class has fifteen to twenty learners of a similar age with one mentor, and meets twice a week. Learners hear other people\'s questions, which often turn out to be their own.',
            'A one-to-one class is just the learner and the mentor, at hours the two of them agree. It suits adults with irregular work hours and learners who want to go faster or slower than a group.'
          ],
          rightH3: 'What a learner in Tacna needs',
          right: [
            'A computer with a keyboard, a browser and a steady connection. Python itself is free; the mentor helps install it in the first class, or the class uses an online editor.',
            'No previous coding is needed for any first course on this page. What helps most is curiosity and the patience to read an error message twice before asking for help.'
          ] }
      ]
    },
    {
      id: 'english-tacna',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish?',
      lede: 'No. Every class is live, online and taught only in English. For many Tacna learners that is part of the attraction; for some it is a hurdle, and we would rather say so now.',
      body: [
        { kind: 'two',
          leftH3: 'Tacna on EF\'s English index',
          left: [
            'In EF\'s English Proficiency Index 2025, Peru scores 519, in the moderate band, and Lima city 555, in the high band. The Tacna region scores 476, which EF places in its low band. EF gives no figure for Tacna city on its own.',
            'EF\'s scores come from people who chose to take its online test, so they describe a pattern, not any one learner. Still, they suggest many Tacna learners will be practising English as they learn Python.'
          ],
          rightH3: 'Why Python helps',
          right: [
            'Python\'s keywords are short English words: if, else, for, while, print, return. A learner who uses them every week is also building English vocabulary, and the error messages Python prints are in English too.',
            'Our mentors speak slowly, rephrase rather than repeat, and give learners time to answer. Adults who read English well but speak it less often find the classes a gentle way to practise listening.'
          ] },
        { kind: 'p', mt: true, html: 'If you would like Python explained with Spanish-speaking families in mind, our Spanish page <a class="ag-inline-link" href="/curso-de-python-en-ingles-peru">curso de Python en inglés</a> answers the same questions in Spanish. The classes themselves are still in English.' }
      ]
    },
    {
      id: 'weights',
      tint: 'tint',
      eyebrow: 'A real Tacna project',
      h2: 'Does a survey file of Tacna show who lives in Tacna?',
      lede: 'Not until you weight it. Our teenage and adult learners use INEI\'s employment survey for the Tacna department to learn a lesson that matters in data science and in AI: a row of data is not a person.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'INEI publishes the microdata of its Encuesta Permanente de Empleo Nacional for each department as open data. The EPEN Departamentos 2025 dataset carries the Open Data Commons Open Database Licence (ODbL), a share-alike licence: any database we built from it and released would have to carry the same licence. This page publishes only our counts and our code.',
            'The Tacna file for 2025, saved as tacna-epen-2025.csv, has 13,420 rows, one for each person in the homes INEI visited across the twelve months. We use four columns: whether the home is urban or rural, the person\'s age, their highest level of study, and the weight, a column called FAC300_ANUAL.'
          ],
          rightH3: 'What a weight is',
          right: [
            'A survey cannot visit every home, so INEI visits a sample and gives each answer a weight: roughly, how many people in Tacna that one answer stands for. INEI\'s quarterly data dictionary calls the same kind of column "Factor empleo trimestral", an expansion factor.',
            'Surveys often visit rural areas more heavily than their size, so that there are enough rural answers to say something useful about them. Each rural answer then carries a smaller weight.'
          ] },
        { kind: 'code', label: 'Version 1: count the rows', lang: 'Python', code: V1, note: 'It prints: <code>Rows, aged 25 and over: 7126</code>, <code>Rural share of rows: 13.6 %</code> and <code>University degree share of rows: 15.7 %</code>.' },
        { kind: 'p', mt: true, html: 'The program keeps adults aged 25 and over who have a weight and an answer about their studies, then counts. It reports that 13.6% of these adults live in rural areas. That is true of the rows, but is it true of Tacna? INEI chose which homes to visit, so the rows reflect INEI\'s plan as much as the department.' },
        { kind: 'code', label: 'Version 2: add up the weights instead', lang: 'Python', code: V2, note: 'It prints: <code>People this stands for: 270397</code>, <code>Rural share of people: 8.3 %</code>, <code>Degree share, all: 15.3 %</code>, <code>Degree share, urban: 16.4 %</code> and <code>Degree share, rural: 3.9 %</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Tacna adults aged 25 and over: counting rows against counting people (our calculation)', head: ['Measure', 'Share of rows', 'Share of people, weighted'], rows: [
          ['Living in a rural area', '13.6%', '8.3%'],
          ['Holding a university degree or a postgraduate degree', '15.7%', '15.3%'],
          ['Degree holders among urban adults', 'not computed', '16.4%'],
          ['Degree holders among rural adults', 'not computed', '3.9%']
        ] },
        { kind: 'source', html: 'Data: INEI, Encuesta Permanente de Empleo Nacional (EPEN) Departamentos 2025, Tacna file, published on datosabiertos.gob.pe under the ODbL. Every figure in the table is our own calculation. "University degree" means codes 11 (superior universitaria completa) and 12 (maestría or doctorado) in the C366 column. Of the 13,420 rows, 4,327 have no weight, mostly children under 14, and 869 adults aged 25 and over left the study question blank; both are skipped. Urban rows carry about 40 people each on average and rural rows about 23, by our division.' },
        { kind: 'p', mt: true, html: 'Weighting moves the rural share from 13.6% of rows to 8.3% of people, because INEI deliberately visited more rural homes than their share of Tacna. The degree share barely moves overall, 15.7% to 15.3%, but splitting it by area shows the real story: 16.4% of urban adults hold a degree, and 3.9% of rural adults do. The sum of weights, about 270,397 adults aged 25 and over with an answer, is our estimate from the survey, not a census count.' },
        { kind: 'p', html: 'This is the habit that separates careful data work from guessing, and it matters for AI too. A model trained on rows that over-represent one group will learn that group\'s patterns more strongly unless someone weights or balances the data. Our learners meet that idea first with a Tacna survey, where they can check every number themselves.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12.</strong> A class has 20 children: 15 from the city and 5 from the countryside. A school has 300 city children and 20 country children. If each class child "stands for" some school children, how many does each city child stand for, and each country child?',
          '<strong>Ages 13 to 15.</strong> Run Version 1, then change it to count adults aged 25 to 39 only. Does the rural share of rows go up or down?',
          '<strong>Ages 16 and over.</strong> Add the weights for every row with a weight, of any age. Compare the total with INEI\'s 2025 census figure for the department, 389,226, and explain why the two need not match.',
          '<strong>Adults.</strong> Write one function, <code>share(rows, test, weighted)</code>, that gives either kind of share for any test, and use it to print both columns of the table above.'
        ] }
      ]
    },
    {
      id: 'hours',
      eyebrow: 'Class times',
      h2: 'What time are the classes for someone in Tacna?',
      lede: 'Whenever the learner chooses. Tacna is on Peru time all year, and the mentor works to that clock.',
      body: [
        { kind: 'table', numCols: [], caption: 'Converting a few Tacna hours to India time (examples, not a timetable)', head: ['Tacna', 'India', 'Who it often suits'], rows: [
          ['05:30', '16:00', 'Early risers before work'],
          ['07:30', '18:00', 'Students before morning school'],
          ['12:30', '23:00', 'A lunch-break class for adults'],
          ['15:00', '01:30, next day', 'After school, for teenagers'],
          ['18:30', '05:00, next day', 'After work'],
          ['21:00', '07:30, next day', 'Late learners']
        ] },
        { kind: 'source', html: 'Peru is on UTC minus 5 hours every day of the year and has had no daylight saving since 1994 (tz database, America/Lima; INACAL keeps the official time). India is on UTC plus 5 hours 30 minutes. The gap is a fixed 10 hours 30 minutes, with India ahead.' },
        { kind: 'p', mt: true, html: 'Because neither country changes its clocks, the slot you book stays put all year. You pick a time in Tacna\'s clock when booking and the mentor sees the India equivalent. Adults often take one-to-one classes at a lunch hour or late evening; teenagers often prefer the hour after colegio.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Python milestones for a Tacna learner',
    lede: 'Our own milestones, the same at every age, used to place each learner in the right group and to report progress plainly.',
    table: { caption: 'From first line to careful data work (ours)', head: ['Milestone', 'Typical age to reach it', 'The learner can'], rows: [
      ['1. Run', '9 and up', 'Write and run a program that prints and repeats'],
      ['2. Choose', '9 and up', 'Use if and else so a program makes decisions'],
      ['3. Structure', '12 and up', 'Split a program into functions with clear inputs and outputs'],
      ['4. Read files', '13 and up', 'Open a real CSV file and count what is in it'],
      ['5. Weight', '15 and up', 'Explain the difference between a row and the people it stands for'],
      ['6. Check', '15 to adult', 'Write tests and sanity checks before trusting a result']
    ] },
    left: { h3: 'For parents and employers', ps: [
      'Milestone 5 is the Tacna survey project. A learner who can explain why 13.6% became 8.3% understands data, not just syntax.',
      'Progress is reported as things the learner can now do and explain.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you trust a percentage, ask: a percentage of what?',
      'Read the error message out loud. Half the time it tells you the answer.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more Python and AI courses for Tacna',
    lede: 'Arranged from youngest to oldest, each taught live and in English by a mentor who stays with the group.',
    bands: [
      { num: 'I', h3: 'Children and young teens', sub: 'Ages 10 to 15', courses: [
        { code: 'TCQ / J / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python used to explore patterns, fractions and geometry from school.' },
        { code: 'TCQ / J / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI guesses, where it fails, and how to use it safely.' },
        { code: 'TCQ / J / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Algorithms and data structures for contest-minded students.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'TCQ / T / 01', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP Python', blurb: 'Preparation for the two Python Institute certificates, from about 13.' },
        { code: 'TCQ / T / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python, charts and first machine learning models.' },
        { code: 'TCQ / T / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'How models learn, built step by step in Python.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and over', courses: [
        { code: 'TCQ / A / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI automation', blurb: 'Scripts and AI tools that take repetitive work off your desk.' },
        { code: 'TCQ / A / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and dashboards for beginners.' },
        { code: 'TCQ / A / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'How large language models work and how to build with them carefully.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Booking and rhythm',
    h2: 'How live Python classes fit a week in Tacna',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early', l: 'Dawn or breakfast hours in Tacna are early evening for the mentor.' },
      { time: 'Midday or evening', l: 'Lunch breaks and evenings both work; you set the hour.' },
      { time: 'Private', l: 'One to one, on a schedule built around a job or school.' }
    ],
    cells: [
      { h3: 'A mentor who stays', p: 'The same teacher across the course, who knows your code.' },
      { h3: 'English made easy', p: 'Slow speech, plain words, patience with answers.' },
      { h3: 'You type, always', p: 'Learners write every line; mentors coach.' },
      { h3: 'Peers your age', p: 'Children, teenagers and adults in separate groups.' },
      { h3: 'Short reports', p: 'Monthly notes on progress for learners or parents.' },
      { h3: 'Two formats', p: 'A group of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students have shipped',
  projectsLede: 'Learners who keep going build real tools and games. A few are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'Parents and learners reviewing us on Google, quoted exactly.',

  fees: {
    h2: 'Fees for Python and AI classes in Tacna',
    lede: 'Monthly plans, priced in US dollars and charged to a card in dollars. Your bank converts the charge into soles at its own rate, so the soles amount on the statement depends on the day.',
    free: ['One free trial class', 'A first program and a level check', 'No card required'],
    group: ['Fifteen to twenty learners of a similar age', 'One mentor all course', 'Two live classes each week', 'Month to month, cancel any time'],
    one: ['Learner and mentor only', 'Pace and projects set for you', 'Days and times you choose']
  },

  faq: {
    eyebrow: 'Tacna learners ask',
    h2: 'Python and AI classes in Tacna: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Teaching is in English only, in every live online class. Mentors speak clearly and slowly, match the learner\'s pace and accent, and explain each line of code in simple words. Python keywords are English anyway, so the language of the class and the language of the code are the same.' },
      { q: 'Is there a Python course in Tacna?', a: 'Yes, live online. Learners anywhere in Tacna join from home on a laptop or desktop. There is no classroom to travel to, and classes run at whatever hour you book.' },
      { q: 'From what age can someone learn Python?', a: 'From about nine, when typing becomes comfortable. Younger children start with Scratch blocks and move to Python later. There is no upper limit: our adult learners include people in their sixties.' },
      { q: 'Can my teenager get the PCEP certificate?', a: 'Our PCEP and PCAP course prepares learners from about 13 for the Python Institute certificates. MINEDU\'s Fábrica de Programadores pilot uses the same certificate, but we are not connected with MINEDU or the pilot.' },
      { q: 'Do schools in Tacna teach programming?', a: 'No. Tacna is among the regions MINEDU says lead learning results, but the national secundaria timetable has no programming area. Digital skills are transversal, used in every area and timetabled in none.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India runs 10 hours 30 minutes ahead of Tacna all year, so 12:30 in Tacna is 23:00 for the mentor.' },
      { q: 'What do I need at home?', a: 'A laptop or desktop with a keyboard, a browser and a steady connection. Python is free to install, and the mentor helps in the first class. INEI counted a computer in 42.4% of Tacna homes in 2025.' },
      { q: 'Will I learn AI as well as Python?', a: 'Yes, step by step. Children meet simple AI projects, teenagers build first machine learning models, and adults learn generative AI and automation. In every course the learner writes and checks the code rather than copying AI output.' },
      { q: 'How are fees charged?', a: 'Monthly, in US dollars, by card. Your bank converts the amount to soles. A visitor from India sees rupees. The first class is a free trial with no card details.' },
      { q: 'Is there a certificate?', a: 'Courses that include one end with our own certificate of completion. It is not a Peruvian qualification, and no Peruvian school, university or ministry issues or recognises it; the PCEP certificate is awarded by the Python Institute after its own exam.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Related pages for Tacna learners',
    lede: 'Python, AI and coding pages for Peru, and how our classes work.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The Peru hub, with every page by age and topic.' },
      { href: '/python-course-peru', label: 'Python course in Peru', p: 'The national guide to learning Python from Peru.' },
      { href: '/curso-de-python-en-ingles-peru', label: 'Curso de Python en inglés', p: 'The same subject, explained in Spanish.' },
      { href: '/data-science-course-peru', label: 'Data science course in Peru', p: 'Where Python leads for data-minded learners.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What a first Python class looks like for a child.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free Python class from Tacna',
    lede: 'The trial is a short puzzle and a first program. Your mentor watches how you approach the problem, checks how comfortable the class English feels, and then recommends a course and a group or a one-to-one plan.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a class in detail, and <a class="ag-inline-link" href="/courses">all courses</a> has every syllabus.',
    note: 'Mentors teach from India, live, and only in English. Write to us on WhatsApp, in English, for the quickest answer.',
    formNote: 'Free trial, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/python-course-peru', label: 'Python in Peru' },
        { href: '/data-science-course-peru', label: 'Data science in Peru' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'How we work', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru' }
      ] }
    ],
    bottomRight: 'A row is not a person until you weight it'
  },

  personalityCss: `
.ag-root.ag-pat .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-pat .ag-capsule { border-left-width: 3px; border-radius: 2px; }
.ag-root.ag-pat .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-pat .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-pat .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Censos Nacionales 2025 (Indicadores demográficos, Cuadro 1) and Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); MINEDU ENLA 2025 report, Fábrica de Programadores, CNEB and Edades normativas; UTEC OPI rules; EF EPI 2025; tz database America/Lima. Data: INEI EPEN Departamentos 2025, Tacna file, ODbL.',
    localProject: 'Does a survey file of Tacna show who lives in Tacna? An original Python project on INEI\'s EPEN Departamentos 2025 Tacna file (ODbL, share-alike): Version 1 counts rows of adults aged 25 and over (7,126; 13.6% rural; 15.7% with a degree); Version 2 sums the FAC300_ANUAL weights (about 270,397 adults; 8.3% rural; degree share 16.4% urban against 3.9% rural). Lesson family: survey weights, rows are not people.',
    requiredMentions: ['tacna-epen-2025.csv', 'Rows, aged 25 and over: 7126', 'Rural share of people: 8.3 %', 'Degree share, rural: 3.9 %', '286,240', '389,226', '42.4', 'Tacna region scores 476', 'A row is not a person until you weight it'],
    sources: [
      { claim: 'Tacna city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Tacna department, province and district populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Tacna homes with computer and internet, internet use, 2015 and 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'EPEN Departamentos 2025 dataset and its ODbL licence.', url: 'https://www.datosabiertos.gob.pe/dataset/encuesta-permanente-de-empleo-nacional-epen-departamentos-2025-instituto-nacional-de' },
      { claim: 'Tacna among regions leading ENLA 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1390772-enla-2025-se-mantienen-avances-en-lectura-y-matematica-con-mejoras-en-las-zonas-rurales' },
      { claim: 'Secundaria weekly hours and transversal TIC competency.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'OPI organiser, cost and language rules.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'EF EPI 2025 scores for Peru, Lima and Tacna.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'The weighted 270,397 as a census count: it is our survey estimate and the page says so.',
      'A 2025 population for Tacna city: INEI has not published one.',
      'Any sum of the city, department, province and district counts.',
      'Any use of the survey\'s disability, mother-tongue or identity columns: never read.',
      'Republishing the ODbL database itself: the page shows only our counts and code.',
      'Any link with MINEDU, Fábrica de Programadores, UTEC, the OPI or INEI: none.',
      'Spanish-language teaching: all classes are in English.'
    ]
  }
};
