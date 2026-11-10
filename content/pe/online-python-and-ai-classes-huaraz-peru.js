// SHIP: market (city, Python path, all ages) | Huaraz: Python from 9 to adult, a live class before, during and after, a glacier | the shortcut mean: (min + max) / 2 against the measured daily mean, counted day by day
'use strict';
// Online Python and AI classes in Huaraz, Peru (ag- city page, Peru cluster row PE196; alloc: cities, pah, #732D39).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; fees in USD only, through the template's data-price anchors. Audience: every age, Python first.
// Spine: Huaraz is a mountain capital split between two districts (Huaraz and Independencia), with a public university
// and a mountain-research institute on its doorstep. The page sets out what a live online class involves before, during
// and after the hour, which Python course fits which learner, what AI means at each age, and teaches with INAIGEM's
// daily readings from a weather station on the Llaca glacier above the city. Different spine, dataset and lesson from the
// Áncash region module (Tayacoto soil moisture, streaks) and from the Chimbote page (IMARPE sea, seasonal baseline).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-python-and-ai-classes-huaraz-peru/,
// national facts from pe/facts-school/src and pe/src/inei; every quote string-matched in the raw file):
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (places.tsv): Huaraz city 118,836 (conglomerate, 22 October
//    2017). INEI Lib1541 dpto02 (tsv_dpto02/sheet0_02.tsv): "HUARAZ Quechua 3 073 53 733"; "CENTENARIO Quechua 3 046
//    60 683" (district Independencia).
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (tsv_ind_00/sheet2): "ÁNCASH 1205923";
//    "PROVINCIA HUARAZ 184353"; "DISTRITO HUARAZ 66236"; "DISTRITO INDEPENDENCIA 88999" (province Huaraz); "DISTRITO
//    JANGAS 5050". Cuadro N° 3 (censada): ÁNCASH "De 12 a 17 años" 122886. Capital Huaraz (Compendio cuadro 1.8).
//  - INEI Compendio Estadístico Perú 2026, tomo 1: 11.5 Áncash 2025 "30,3" (Total "33,9"); 11.6 Áncash 2025 "51,5",
//    2015 "16,2" (Total 2025 "56,8"); 11.13 Áncash 2025 "80,9" (Total "81,1"); 5.53 4° primaria satisfactory maths 2025
//    Áncash "30,1" (Total "30,0"); 5.54 2° secundaria maths 2025 Áncash "10,7" (Total "12,7"); 5.66 "033 Universidad
//    Nacional Santiago Antunez de Mayolo ... 7 684" (2025), 7,052 in 2018.
//  - EF EPI 2025 Peru page (ef_peru.raw): data-state="ankashu" 475, class epi-low; no Huaraz score; Peru 519, rank 52 of
//    123; Lima city 555.
//  - MINEDU Fábrica de Programadores (FACTS 45, 46); CNEB competency 28 and secundaria hours (FACTS 32, 33, 39); Edades
//    normativas (FACTS 13, 14). AI tool ages (content/ai-tool-age-audit.json): Claude 18+; ChatGPT 13+ with parent
//    permission under 18.
//  - Time (timezone.tsv): America/Lima UTC-5 all year; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
//  - Data: Instituto Nacional de Investigación en Glaciares y Ecosistemas de Montaña (INAIGEM), "Registro meteorológico en
//    alta montaña: temperatura y humedad relativa en el glaciar Llaca, Áncash – Proyecto PASTURE [INAIGEM]", Plataforma
//    Nacional de Datos Abiertos, https://www.datosabiertos.gob.pe/dataset/registro-meteorol%C3%B3gico-en-alta-monta%C3%B1a-
//    temperatura-y-humedad-relativa-en-el-glaciar-llaca, licence "Open Data Commons Attribution License" (dc:license on the
//    raw page). Description: "datos meteorológicos diarios de temperatura y humedad relativa, recopilados mediante una
//    estación meteorológica automática (EMA)"; "A partir de diciembre de 2024, estas mediciones se realizan sobre el glaciar
//    Llaca, ubicado en el distrito de Independencia, provincia de Huaraz"; sensor "HygroVUE10". File "3 Dataset INAIGEM
//    Llaca_PNDA_v1_0.csv", 19,005 bytes, ';', 147 rows, station EMA-LLACA-1, 2 December 2024 to 27 April 2025, FECHA_CORTE
//    20250430; saved as llaca-inaigem.csv on 10 November 2026. Every row satisfies min <= mean <= max (checked).
// Our own calculations (scratchpad pe/c6/hz/v1.py, v2.py; python3 -I on the downloaded file):
//  v1 prints: Days: 147 / Shortcut average: 3.22 / Station average: 2.73
//  v2 prints: Days the shortcut runs warm: 140 of 147 / Largest gap: (1.44, '20250212', 0.37, 1.87, 6.26) / Smallest gap:
//    (-0.2, '20250109', -0.05, 3.78, 7.2) / Humidity shortcut, average gap: -2.98
//  by month (days, mean min, station mean, mean max, shortcut, gap, days below 0 C): Dec 2024 30, 1.28, 3.07, 5.96, 3.62,
//    0.55, 1; Jan 2025 31, 0.73, 2.57, 5.40, 3.07, 0.49, 7; Feb 28, 0.86, 2.42, 5.11, 2.99, 0.57, 0; Mar 31, 0.86, 2.57,
//    5.11, 2.99, 0.42, 5; Apr 27, 1.35, 3.05, 5.55, 3.45, 0.40, 0. Coldest minimum -1.71 on 15 January 2025; warmest
//    maximum 8.94 on 10 January 2025.
// Lesson family: the shortcut mean. (min + max) / 2 is not the daily mean when the day is lopsided; compare the two day by
// day, count how often and by how much the shortcut misses, and notice that the bias can flip sign for another variable.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'import statistics',
  '',
  'shortcut, measured = [], []',
  'with open("llaca-inaigem.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        low = float(row["TEMPERATURA_MINIMA"])',
  '        high = float(row["TEMPERATURA_MAXIMA"])',
  '        shortcut.append((low + high) / 2)',
  '        measured.append(float(row["TEMPERATURA_PROMEDIO"]))',
  '',
  'print("Days:", len(measured))',
  'print("Shortcut average:", round(statistics.mean(shortcut), 2))',
  'print("Station average:", round(statistics.mean(measured), 2))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'warmer, gaps = 0, []',
  'with open("llaca-inaigem.csv", encoding="utf-8-sig") as f:',
  '    rows = list(csv.DictReader(f, delimiter=";"))',
  '',
  'for row in rows:',
  '    low = float(row["TEMPERATURA_MINIMA"])',
  '    high = float(row["TEMPERATURA_MAXIMA"])',
  '    mean = float(row["TEMPERATURA_PROMEDIO"])',
  '    gap = (low + high) / 2 - mean',
  '    if gap > 0:',
  '        warmer += 1',
  '    gaps.append((round(gap, 2), row["FECHA_REGISTRO"], low, mean, high))',
  '',
  'gaps.sort()',
  'print("Days the shortcut runs warm:", warmer, "of", len(rows))',
  'print("Largest gap:", gaps[-1])',
  'print("Smallest gap:", gaps[0])',
  '',
  'humid = [(float(r["HUMEDAD_RELATIVA_MINIMA"]) + float(r["HUMEDAD_RELATIVA_MAXIMA"])) / 2',
  '         - float(r["HUMEDAD_RELATIVA_PROMEDIO"]) for r in rows]',
  'print("Humidity shortcut, average gap:", round(sum(humid) / len(humid), 2))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Huaraz: Python and AI, all ages' },
  slug: 'online-python-and-ai-classes-huaraz-peru',
  code: 'pah',
  accent: '#732D39',
  accentRationale: 'Online Python and AI classes in Huaraz: the allocated #732D39, a dark heather-wine that sits quietly beside cool glacier data; contrast stays above 4.5:1 on #FBF8F2, #F5F1E8 and #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online Python and AI classes in Huaraz, Peru',
  title: 'Online Python and AI Classes in Huaraz, Peru: Live, in English',
  description: 'Python and AI for Huaraz learners from 9 to adult, live online in English at flexible hours: what a class involves, AI by age, and a Llaca glacier data project.',
  ogDescription: 'Live online Python and AI for children, teenagers, students and adults in Huaraz, taught in English at any hour: what happens before, during and after a class, which course fits whom, honest notes on English and connection, and a Python project on INAIGEM\'s Llaca glacier weather station.',
  twitterDescription: 'Python and AI in Huaraz, live online in English: courses for every age and a project on the Llaca glacier.',
  pageName: 'Online Python and AI Classes in Huaraz, Peru',
  webPageDescription: 'A guide for Huaraz learners of all ages to live online Python and AI classes taught in English, built on INEI census and household figures, MINEDU sources, EF EPI 2025 and an original Python project on INAIGEM\'s Llaca glacier temperature and humidity file (ODC-By).',
  courseDescription: 'Live online Python and AI classes in English for learners in Huaraz, Peru: Python and AI for children from 9, Python, machine learning and AI tools for teenagers within their age rules, and Python automation, data and AI for university students and adults, in a group of fifteen to twenty or one to one, at hours you choose.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Huaraz, Python and AI',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#hour', label: 'Inside a class' },
    { href: '#learners', label: 'Who takes what' },
    { href: '#ai-age', label: 'AI by age' },
    { href: '#llaca', label: 'Glacier project' },
    { href: '#clocks', label: 'Times' }
  ],
  eyebrow: 'Huaraz &middot; Python and AI, every age &middot; Live online, in English',
  h1: 'Online Python and AI classes in Huaraz, Peru',
  lede: 'From a nine year old in Independencia to an engineer back from the field, the first useful programming language is usually Python, and it is also the language most AI work is written in. Here is what a live online class from Huaraz actually involves, before, during and after the hour, which course suits which learner, what AI means at each age, and a project on a weather station that sits on the Llaca glacier above the city.',
  secondaryCta: { href: '#llaca', label: 'See the glacier project' },
  wa: 'Hello Modern Age Coders, I live in Huaraz, Peru and would like live Python and AI classes in English. Can I book a free first class?',
  heroNote: 'Live online teaching since 2020 &middot; more than 10,000 students in many countries &middot; separate classes for children, teens and adults',
  spec: [
    ['Who', 'Children from 9, teenagers, adults'],
    ['Language', 'Python, then data and AI'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Huaraz time', 'Any day, at the hour you set'],
    ['Mentors', 'Teaching live from India'],
    ['Trial', 'One free class, no card']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'Yes: Modern Age Coders teaches Python and AI to learners in Huaraz, Peru, live online and in English. Children of about 9 to 12 write their first real programs and see how a machine learns; teenagers move to data, machine learning and AI tools that their age allows; university students and adults use Python for analysis, automation and AI work. Each class has a mentor on live video, with a group of fifteen to twenty or one learner, at any hour you choose. Learners are taught to reason about code, never to copy it.',

  picks: {
    eyebrow: 'Three starting points',
    h2: 'Where Huaraz learners begin with Python',
    lede: 'A children\'s course, a secundaria course and a course for working with Python. None assumes any coding before.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'HRZ / 01', title: 'Python and AI for Kids', note: 'For children of 9 to 12. Short, visible wins each lesson: shapes drawn by code, guessing games, and a first taste of a program that learns from examples.' },
      { course: 'python-complete-masterclass-teens', code: 'HRZ / 02', title: 'Python for Teens', note: 'For 1° to 5° de secundaria. Variables to files to finished projects, with testing taught from the start; the base for machine learning, Java or PCEP.' },
      { course: 'python-ai-automation-masterclass-college', code: 'HRZ / 03', title: 'Python automation and applied AI', note: 'For university students and adults. Scripts that tidy files, read spreadsheets and call AI services, with every output checked by a person.' }
    ]
  },

  sections: [
    {
      id: 'valley',
      eyebrow: 'Huaraz in figures',
      h2: 'How big is Huaraz, and which districts make up the city?',
      lede: 'Mainly two: the district of Huaraz and the district of Independencia, which INEI counts separately. The rows below each carry their own census and year and are never added together.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Huaraz, its districts and its department, as INEI counts them', head: ['Unit', 'People', 'Census and year'], rows: [
          ['Department of Áncash (capital Huaraz)', '1,205,923', '2025, total population'],
          ['Province of Huaraz', '184,353', '2025, total population'],
          ['District of Independencia', '88,999', '2025, total population'],
          ['District of Huaraz', '66,236', '2025, total population'],
          ['Huaraz city (urban area of the capital)', '118,836', '2017, people counted'],
          ['Centenario, Independencia (3,046 m)', '60,683', '2017, people counted'],
          ['Huaraz, the settlement (3,073 m)', '53,733', '2017, people counted']
        ] },
        { kind: 'source', html: 'INEI sources: demographic indicators of the Censos Nacionales 2025, table 1 (reference day 15 September 2025); the 2017 sociodemographic profile, table 1.9, for the city; and the 2017 directory of populated places for Áncash, listing every settlement and how high it sits. The settlement rows are pieces of the city row, so adding them would count people twice.' },
        { kind: 'two', mt: true,
          leftH3: 'A city across two districts',
          left: [
            'In 2025 the district of Independencia, 88,999 people, was larger than the district of Huaraz itself, 66,236. In INEI\'s 2017 list of settlements, Centenario in Independencia, at 3,046 metres, had 60,683 people and the settlement of Huaraz, at 3,073 metres, 53,733.',
            'For a learner, the district line does not matter. A teenager in Centenario and an adult near the Plaza de Armas join the same live class at the same moment, with no trip through town after dark.'
          ],
          rightH3: 'A university town',
          right: [
            'The public Universidad Nacional Santiago Antúnez de Mayolo had 7,684 students in 2025 and 7,052 in 2018, by the MINEDU count that INEI reprints in table 5.66 of its 2026 compendium. Students of engineering and science everywhere now meet Python as an everyday tool.',
            'We mention the university only as context and have no connection with it. University students in Huaraz take our classes in their own adult groups, at hours that fit around lectures and fieldwork.'
          ] }
      ]
    },
    {
      id: 'line',
      eyebrow: 'Connection',
      h2: 'Is an internet connection in Áncash good enough for live classes?',
      lede: 'For most homes that have a computer, yes. The figures below are for the whole department; INEI publishes none for Huaraz alone.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Áncash households and internet users, 2025 (per cent, INEI)', head: ['What INEI measured', 'Áncash', 'All of Peru'], rows: [
          ['Homes with one computer or more', '30.3', '33.9'],
          ['Homes with a paid internet service', '51.5', '56.8'],
          ['Residents aged 6+ who went online', '80.9', '81.1']
        ] },
        { kind: 'source', html: 'From INEI\'s household survey (ENAHO) as printed in the Compendio Estadístico Perú 2026, volume 1, tables 11.5, 11.6 and 11.13. Ten years earlier, in 2015, only 16.2 per cent of Áncash homes had an internet service.' },
        { kind: 'two', mt: true,
          leftH3: 'Close to the national picture',
          left: [
            'Áncash sits near the Peruvian average on all three measures: about three homes in ten have a computer, about half pay for internet, and four in five people aged six or older go online. The internet figure has more than tripled since 2015.',
            'The real limit is the computer. Python is written on a keyboard; a phone can join a video call but cannot carry a programming lesson, so we ask families to check this before booking.'
          ],
          rightH3: 'A quick test at home',
          right: [
            'Join any video call for twenty minutes at the hour you would take class. If the picture holds, the line is fine. If it freezes, try a different hour, or move the computer closer to the router, before deciding.',
            'Headphones with a microphone help more than a faster plan: the mentor hears the learner clearly and the learner hears every instruction, even in a busy house.'
          ] }
      ]
    },
    {
      id: 'hour',
      eyebrow: 'Live online, explained',
      h2: 'What does a live online class involve, before, during and after the hour?',
      lede: 'A real teacher, a fixed hour, and the learner doing the work. The table follows one class from start to finish.',
      body: [
        { kind: 'table', numCols: [], caption: 'One live Python class, phase by phase (how we run it)', head: ['When', 'What the learner does', 'What the mentor does'], rows: [
          ['The day before', 'Finishes a short practice task', 'Looks over the task and notes what to revisit'],
          ['First five minutes', 'Joins the video link from the browser', 'Checks sound, asks how the task went'],
          ['Next ten minutes', 'Explains their task solution aloud', 'Asks why it works, not only whether it works'],
          ['Middle of the class', 'Shares their screen and writes new code', 'Introduces one idea, then guides with questions'],
          ['Last ten minutes', 'Changes the program to do something new', 'Lets the learner break it and fix it'],
          ['After the class', 'Saves the project and gets the next task', 'Sends a short note home for younger learners']
        ] },
        { kind: 'source', html: 'This is our usual pattern for a group class of fifteen to twenty learners of similar age. One-to-one classes follow the same shape with more time on the learner\'s own questions.' },
        { kind: 'p', mt: true, html: 'Two things make it work online. First, the learner always has the keyboard; the mentor never types the solution for them, but asks the next question until they find it. Second, the hour is fixed, so learning becomes a habit rather than something squeezed in when there is time. If you would like more on what the courses cover, our <a class="ag-inline-link" href="/python-course-peru">Python course page for Peru</a> sets out the syllabus in detail.' }
      ]
    },
    {
      id: 'learners',
      tint: 'tint',
      eyebrow: 'Who takes what',
      h2: 'Which Python course suits each learner in Huaraz?',
      lede: 'Choose by the learner\'s age and what they want Python for. Children, teenagers and adults are always taught in separate groups.',
      body: [
        { kind: 'table', numCols: [], caption: 'Matching Huaraz learners to courses (our ages and plans)', head: ['Learner', 'Usual first course', 'A sensible next step', 'Typical first project'], rows: [
          ['A child of 9 to 12', 'Python and AI for Kids', 'Problem solving, AI literacy', 'A quiz that keeps score'],
          ['A secundaria student who likes maths or science', 'Python for Teens', 'Data science or machine learning', 'Charts from a real open-data file'],
          ['A secundaria student who wants a certificate', 'Python for Teens', 'PCEP and PCAP preparation', 'Exam-style programs, tested'],
          ['A university student in engineering or science', 'Python automation and applied AI', 'Data analysis, machine learning', 'A script that cleans and summarises lab data'],
          ['An adult new to code', 'Python Masterclass', 'Data and AI for non-programmers', 'A tool that saves an hour a week at work']
        ] },
        { kind: 'source', html: 'Our own course ages and suggested order. MINEDU\'s normative ages, counted on 31 March, place 1° de secundaria at 12 and 5° at 16.' },
        { kind: 'two', mt: true,
          leftH3: 'Why secundaria students start here',
          left: [
            'Secundaria in Huaraz follows the national CNEB, whose 35-hour week has no computing area; digital competency is spread across subjects instead. MINEDU\'s Fábrica de Programadores pilot, which teaches Python and the PCEP exam to 1,000 pupils of 4° and 5° de secundaria, runs in Lima Norte only.',
            'MINEDU\'s 2025 assessment, reported in INEI\'s compendium, put 10.7 per cent of Áncash second-year secundaria pupils at the satisfactory level in maths, against 12.7 nationally. That is a reason we teach every teen course with small steps and plenty of checking, never assuming the maths is already secure.'
          ],
          rightH3: 'Why university students and adults come',
          right: [
            'Engineering and science students meet Python in data work long before anyone teaches it to them properly. A few months of structured classes turn copy-and-adjust habits into code they can defend in a lab report or a thesis.',
            'Adults in Huaraz come for practical reasons: spreadsheets that take hours, reports that repeat every month, and curiosity about AI at work. Our page on <a class="ag-inline-link" href="/python-for-engineering-students-peru">Python for engineering students in Peru</a> goes further for the first group, and <a class="ag-inline-link" href="/sql-and-data-analysis-course-peru">SQL and data analysis</a> for the second.'
          ] }
      ]
    },
    {
      id: 'ai-age',
      eyebrow: 'AI, by age',
      h2: 'What does AI mean in our classes for children, teenagers and adults?',
      lede: 'Something different at each age, always with the learner in charge. We teach how AI works and where it fails before anyone relies on it.',
      body: [
        { kind: 'ol', items: [
          '<strong>Children, 9 to 12: AI from the inside.</strong> Children write tiny programs that learn from examples, such as a guesser that improves with each answer, and see it get things wrong. No chatbot accounts; the point is understanding, not using a product.',
          '<strong>Teenagers, 13 to 18: models and honest testing.</strong> Teenagers train simple models on real data, then test them on data the model has not seen. They may use AI coding tools only where the tool\'s own age rules allow; some need a parent\'s permission until 18 and some, Claude among them, are for adults only.',
          '<strong>University students and adults: AI as a colleague to check.</strong> Generative AI, prompting, automation and agents, with one rule on top: if the AI produced it, a person reads, tests and explains it before it is used.'
        ] },
        { kind: 'p', mt: true, html: 'At every age we teach thinking over copying. Paste in something you cannot explain and the mentor will have you reconstruct it piece by piece; those ten minutes tend to teach more than the rest of the week. The glacier project below is a good example: the first answer is easy to compute and wrong in an interesting way, and only reasoning about the data shows why.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'How do Huaraz learners cope with classes in English?',
      lede: 'Better than many expect, but not all of them at first. Every class is taught only in English, and we would rather you knew that before you book.',
      body: [
        { kind: 'two',
          leftH3: 'The 2025 figures',
          left: [
            'EF\'s English Proficiency Index 2025 rates the Áncash region at 475, in its low band, and gives no separate score for Huaraz. Peru scores 519, 52nd of 123 countries, and Lima city 555. In other words, a learner in Huaraz is more likely than a learner in Lima to find a lesson in English hard going at first.',
            'Some learners already use English at work or in their studies, and others have had only school English. No published figure tells us which is which in Huaraz, so we do not guess; the free class tells us what each learner needs.'
          ],
          rightH3: 'What the mentors do',
          right: [
            'Mentors keep sentences short, show before they explain, and type new words in the chat so learners can read them twice. Python itself helps: its keywords are a small set of everyday English words, and the code on the screen is identical whatever language the class is spoken in.',
            'A learner who struggles in a group can switch to one to one, where the mentor can slow down without holding anyone else back. Adults who already read technical English usually settle in within the first two or three classes.'
          ] }
      ]
    },
    {
      id: 'llaca',
      eyebrow: 'A Huaraz project',
      h2: 'What is the real daily temperature on the Llaca glacier?',
      lede: 'INAIGEM, Peru\'s national institute for glacier and mountain-ecosystem research, publishes daily readings from an automatic weather station on the Llaca glacier, in the district of Independencia. Our learners use it to test a shortcut that weather records often rely on.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is INAIGEM\'s Registro meteorológico en alta montaña: temperatura y humedad relativa en el glaciar Llaca, part of a research project called PASTURE, published on datosabiertos.gob.pe under the ODC-By licence (Open Data Commons Attribution). INAIGEM says the measurements have been taken on the glacier itself since December 2024.',
            'We saved the file on 10 November 2026 as llaca-inaigem.csv. It holds 147 days, from 2 December 2024 to 27 April 2025, each with the day\'s average, lowest and highest temperature and the same three figures for relative humidity. Every row passes a first sanity check: the lowest is never above the average, and the average never above the highest.'
          ],
          rightH3: 'The question',
          right: [
            'Many weather records do not keep a true daily average. They keep only the lowest and highest reading and take the middle: (minimum + maximum) / 2. It is quick, and on a day that warms and cools evenly it is close to the truth.',
            'Is it close on a glacier? Version 1 computes both for every day and compares the averages over the whole record. Learners predict the result first; most say the two should be about the same.'
          ] },
        { kind: 'code', label: 'Version 1: the shortcut against the station\'s own average', lang: 'Python', code: V1, note: 'It prints: <code>Days: 147</code>, then <code>Shortcut average: 3.22</code> and <code>Station average: 2.73</code>.' },
        { kind: 'p', mt: true, html: 'The shortcut comes out half a degree warmer. On a glacier where the average day sits under three degrees, half a degree is a lot. But an average of averages can hide what is happening day by day, so Version 2 compares the two on every single day, counts how often the shortcut is too warm, and finds the days where it misses most.' },
        { kind: 'code', label: 'Version 2: day by day, and humidity too', lang: 'Python', code: V2, note: 'It prints: <code>Days the shortcut runs warm: 140 of 147</code>, <code>Largest gap: (1.44, \'20250212\', 0.37, 1.87, 6.26)</code>, <code>Smallest gap: (-0.2, \'20250109\', -0.05, 3.78, 7.2)</code> and <code>Humidity shortcut, average gap: -2.98</code>.' },
        { kind: 'p', mt: true, html: 'The shortcut is too warm on 140 of the 147 days, so this is a pattern, not bad luck. The worst day, 12 February 2025, had a minimum of 0.37 and a maximum of 6.26, so the shortcut says 3.32, while the station\'s own average was 1.87. Our reading of the shape: the warmest moments are short, perhaps when the sun breaks through, while most of the day stays near the cold end, so the middle of the two extremes sits above the real average. For humidity the bias flips: the shortcut runs almost three points too dry, which on the same reading would mean the air stays close to saturation most of the day and dries out only briefly.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4, 5], caption: 'Llaca glacier station by month, December 2024 to April 2025 (°C, our calculation)', head: ['Month', 'Days', 'Average minimum', 'Station average', 'Average maximum', 'Shortcut'], rows: [
          ['December 2024', '30', '1.28', '3.07', '5.96', '3.62'],
          ['January 2025', '31', '0.73', '2.57', '5.40', '3.07'],
          ['February 2025', '28', '0.86', '2.42', '5.11', '2.99'],
          ['March 2025', '31', '0.86', '2.57', '5.11', '2.99'],
          ['April 2025', '27', '1.35', '3.05', '5.55', '3.45']
        ] },
        { kind: 'source', html: 'Data: INAIGEM, Llaca glacier weather station (EMA-LLACA-1), datosabiertos.gob.pe, licence ODC-By. Monthly figures, gaps and counts are our own. The coldest reading in the file is -1.71 °C on 15 January 2025 and the warmest 8.94 °C on 10 January 2025; the minimum fell below zero on 13 of the 147 days. December starts on the 2nd and April ends on the 27th, as the file does.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Children, 9 to 12.</strong> Draw a day as a line of 24 dots, most of them cold and three of them warm. Work out the middle of the coldest and warmest dot, then the true average of all 24. Which is bigger?',
          '<strong>Teenagers, 13 to 15.</strong> Run both versions and explain in four sentences why the shortcut runs warm for temperature and dry for humidity.',
          '<strong>Teenagers, 15 to 18.</strong> Group the gaps by month. Is the shortcut worse in the wettest months? What would you need from INAIGEM to test the sunshine explanation?',
          '<strong>University students and adults.</strong> Fit a simple correction, shortcut minus a constant, using December to February, and test it on March and April. How much of the error does it remove, and is it honest to use it on another station?'
        ] }
      ]
    },
    {
      id: 'clocks',
      eyebrow: 'Class times',
      h2: 'What time are live classes for learners in Huaraz?',
      lede: 'Any hour that suits you. Huaraz is on Peru time all year, and the mentor works around it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru hours translated into India time (examples only, not a schedule)', head: ['Huaraz', 'India', 'India date'], rows: [
          ['06:00', '16:30', 'Same'],
          ['08:30', '19:00', 'Same'],
          ['12:00', '22:30', 'Same'],
          ['14:30', '01:00', 'One day later'],
          ['17:00', '03:30', 'One day later'],
          ['20:00', '06:30', 'One day later']
        ] },
        { kind: 'source', html: 'Peru stays five hours behind UTC through the year and does not change its clocks (tz database zone America/Lima; INACAL keeps the official hour). India stays five hours thirty minutes ahead of UTC, so it is always 10 hours 30 minutes ahead of Huaraz.' },
        { kind: 'p', mt: true, html: 'Students at the university often prefer an early-morning class before lectures or a late one after; secundaria students take theirs in the late afternoon; adults whose working weeks change from month to month often move to one-to-one classes at irregular hours. Booking happens in Huaraz time, and with no clock changes in either country the slot never drifts. For the wider picture, see <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes across Peru</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How a Huaraz learner\'s Python grows, stage by stage',
    lede: 'Our milestones for learners of any age. They tell us which group a newcomer belongs in, and tell learners and families what has genuinely been learned.',
    table: { caption: 'From a first line of Python to trustworthy summaries (ours)', head: ['Milestone', 'Usually reached', 'What the learner can do'], rows: [
      ['1. Run', 'The first weeks', 'Produce small programs that display results, take input and do sums'],
      ['2. Branch and loop', 'The first term', 'Make programs choose and repeat with if, for and while'],
      ['3. Package', 'The second term', 'Write functions and keep data in lists and dictionaries'],
      ['4. Read real files', 'Second or third term', 'Open a CSV from an open-data portal and select rows'],
      ['5. Question a summary', 'Teenagers and adults', 'Check whether an average means what it seems to, day by day'],
      ['6. Model with care', 'Later teen and adult courses', 'Train a simple model, test it on unseen data and report its limits']
    ] },
    left: { h3: 'For families and employers', ps: [
      'Milestone 5 is the glacier project. It marks the difference between running code and trusting its answer.',
      'Progress is reported as finished work and the learner\'s own explanation of it.'
    ] },
    right: { h3: 'For learners', ps: [
      'A summary is a choice someone made. Ask which one.',
      'Check the day before you trust the season.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Huaraz learners',
    lede: 'Arranged by age. Each runs live, in English, with the same mentor throughout, for a class or for one learner.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 7 to 12', courses: [
        { code: 'HRZ / KIDS / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Breaking problems into steps before any code is written.' },
        { code: 'HRZ / KIDS / 02', slug: 'ai-literacy-for-kids-course', title: 'Understanding AI', blurb: 'How machines learn from examples, taught so children can question them.' },
        { code: 'HRZ / KIDS / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon for kids', blurb: 'Twelve weeks of building towards a children\'s coding event.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'HRZ / TEEN / 01', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Visual machine learning', blurb: 'Models built by dragging blocks in Orange, then explained.' },
        { code: 'HRZ / TEEN / 02', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens (13+)', blurb: 'Prompting and real projects with tools a teenager may legally use.' },
        { code: 'HRZ / TEEN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Algorithms and data structures, step by careful step.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'HRZ / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'The complete language, from first variable to larger programs.' },
        { code: 'HRZ / ADULT / 02', slug: 'ai-ml-masterclass-complete-college', title: 'AI and ML masterclass', blurb: 'Machine learning, deep learning and generative AI in Python.' },
        { code: 'HRZ / ADULT / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'Excel, Sheets and Power BI with AI help, for adults who never coded.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes fit life in Huaraz',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before lectures', l: 'An early class in Huaraz reaches the mentor in the late afternoon in India.' },
      { time: 'After school', l: 'Afternoon in Huaraz is night in India; our mentors teach then as well.' },
      { time: 'Irregular weeks', l: 'One to one, rearranged with the mentor around fieldwork or shifts.' }
    ],
    cells: [
      { h3: 'Your own mentor', p: 'One person all course long, who knows your code.' },
      { h3: 'Short, clear English', p: 'New words typed in the chat as well as spoken.' },
      { h3: 'Learner at the keyboard', p: 'The mentor asks; the learner writes and fixes.' },
      { h3: 'Groups by age', p: 'Children, teenagers and adults learn apart.' },
      { h3: 'A task each week', p: 'Short practice, reviewed at the start of the next class.' },
      { h3: 'Group or one to one', p: 'Fifteen to twenty learners, or only you.' }
    ]
  },

  projectsH2: 'Work by our older learners',
  projectsLede: 'Learners who stay with Python finish real projects. Some are shown below, with many more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' and learners\' Google reviews, quoted without edits.',

  fees: {
    h2: 'Fees for learners in Huaraz',
    lede: 'Plans renew monthly. Fees are fixed in US dollars and charged to the card in dollars; your bank handles the change into soles at whatever rate it applies, so the statement may differ slightly from the page.',
    free: ['One free class', 'A short puzzle and a working program', 'No card details asked'],
    group: ['Fifteen to twenty learners at a similar stage', 'A single mentor for the course', 'Two live classes each week', 'Month by month, cancel when you like'],
    one: ['A learner and a mentor, alone', 'A plan built around your goals', 'Days and hours that you choose']
  },

  faq: {
    eyebrow: 'Huaraz learners ask',
    h2: 'Python and AI classes in Huaraz: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live and online, in English and nothing else. Mentors use short sentences, show each step on screen and type new words in the chat; a learner who slips into Spanish is understood and helped to say it in English.' },
      { q: 'Can I take Python classes in Huaraz without going anywhere?', a: 'Yes. Learners in Huaraz and Independencia join from a computer at home or work, with the mentor on live video. There is no centre to reach and no travel time.' },
      { q: 'How young can a learner start Python?', a: 'At about nine, when typing is no longer a struggle; before that, Scratch blocks are the gentler road. From thirteen upwards, and for adults of any age, zero experience is fine.' },
      { q: 'Will my teenager use AI chatbots in class?', a: 'Only tools the teenager\'s age allows under the provider\'s own terms; some require a parent\'s permission until 18, and Claude is for adults only. Children under 13 use none: they learn how AI works by coding small examples themselves.' },
      { q: 'At what times are classes held?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India runs 10 hours 30 minutes ahead of Huaraz all year: 08:30 in Huaraz is 19:00 for the mentor.' },
      { q: 'What equipment do I need?', a: 'A laptop or desktop, an internet line steady enough for video, and a headset with a microphone. A phone cannot carry a Python class. INEI found a computer in 30.3 per cent of Áncash homes in 2025.' },
      { q: 'Is this useful for a university student at UNASAM?', a: 'Python is widely used in engineering and science, and our university-level courses teach it properly, with testing and data work. We have no link with the university, and our certificate is not a university credit.' },
      { q: 'Do you promise results?', a: 'We promise real teaching and work you can show and explain. We make no promise of grades, a university place, a job or a salary.' },
      { q: 'How are fees paid?', a: 'Monthly, in US dollars: the page shows dollars, the card is charged in dollars and your bank converts to soles. Visitors from India see rupees. The trial class is free.' },
      { q: 'Do you give a certificate?', a: 'Where a course has one, it is our own certificate of completion. It is not a Peruvian qualification, and neither MINEDU nor SUNEDU nor any university issues or recognises it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for Huaraz learners',
    lede: 'Useful next pages.',
    items: [
      { href: '/python-course-peru', label: 'Python course for Peru', p: 'The full syllabus, week by week.' },
      { href: '/python-for-engineering-students-peru', label: 'Python for engineering students', p: 'Lab data, plots and testing for university.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'How secundaria students meet models and data.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Python as a first language at any age.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits tool by tool.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method in a single class.' }
    ]
  },

  start: {
    h2: 'Book a free Python class from Huaraz',
    lede: 'The trial class is a short puzzle and a first working program, written by you with the mentor watching. Afterwards you hear which course and group fit, and whether your connection and your English are ready for a full course.',
    readFirst: 'To read before booking, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a lesson, and the <a class="ag-inline-link" href="/courses">courses</a> page holds every syllabus.',
    note: 'Live online, English only, with mentors working from India. For a quick reply, write to us on WhatsApp in English.',
    formNote: 'Free, card-free, and no obligation afterwards.'
  },

  footer: {
    cols: [
      { h4: 'Python and AI', links: [
        { href: '/python-course-peru', label: 'Python course, Peru' },
        { href: '/python-for-engineering-students-peru', label: 'Python for engineers' },
        { href: '/sql-and-data-analysis-course-peru', label: 'SQL and data analysis' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/coding-and-ai-classes-in-peru', label: 'All Peru pages' }
      ] }
    ],
    bottomRight: 'The middle of two extremes is not the mean'
  },

  personalityCss: `
.ag-root.ag-pah .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-pah .ag-capsule { border-left-width: 2px; border-radius: 5px; }
.ag-root.ag-pah .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-pah .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-pah .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadros 1 and 3), Perfil Sociodemográfico 2017 (Cuadro N° 1.9) and Directorio de Centros Poblados 2017 (dpto02); INEI Compendio Estadístico Perú 2026 (cuadros 11.5, 11.6, 11.13, 5.54, 5.66); MINEDU CNEB, Edades normativas, Fábrica de Programadores; EF EPI 2025; AI tool age audit; tz database America/Lima. Data: INAIGEM, Llaca glacier temperature and humidity, ODC-By.',
    localProject: 'What is the real daily temperature on the Llaca glacier? An original Python project on INAIGEM\'s Llaca glacier station file (ODC-By): Version 1 finds the (min + max) / 2 shortcut averages 3.22 °C against the station\'s 2.73; Version 2 shows the shortcut runs warm on 140 of 147 days, worst on 12 February 2025 (gap 1.44), and runs 2.98 points too dry for humidity. Lesson family: the shortcut mean, tested day by day.',
    requiredMentions: ['llaca-inaigem.csv', 'Shortcut average: 3.22', 'Days the shortcut runs warm: 140 of 147', 'Humidity shortcut, average gap: -2.98', '118,836', '88,999', 'The middle of two extremes is not the mean', 'Universidad Nacional Santiago Antúnez de Mayolo had 7,684 students', 'rates the Áncash region at 475'],
    sources: [
      { claim: 'Áncash, Huaraz province and district, and Independencia populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Huaraz city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Huaraz and Centenario settlements with altitude, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto02.xlsx' },
      { claim: 'Áncash computers, internet and internet use; 2° secundaria results; UNASAM enrolment.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'INAIGEM Llaca glacier station file and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/registro-meteorol%C3%B3gico-en-alta-monta%C3%B1a-temperatura-y-humedad-relativa-en-el-glaciar-llaca' },
      { claim: 'MINEDU Fábrica de Programadores, Python and PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'CNEB and the secundaria timetable.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 scores for Peru, Áncash and Lima.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'That sunshine causes the warm bias: the file has no hourly or radiation data, so the page labels it our reading and asks learners how to test it.',
      'Glacier retreat figures or any hazard linked to Llaca: not in this file and outside the brief (no disaster data).',
      'The station\'s altitude: not stated in the file or the description we fetched, so not printed.',
      'An English score for Huaraz, or a measure of tourism English: EF publishes only the Áncash region.',
      'Any link with INAIGEM, UNASAM, MINEDU or the Python Institute: none.',
      'Grade, place, job or salary promises: refused.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
