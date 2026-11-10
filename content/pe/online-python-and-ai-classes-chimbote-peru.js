// SHIP: market (city, Python path, all ages) | Chimbote: a Python path for every age, how live online works, the sea | seasonal baseline: compare each month with its own normal, not one yearly average
'use strict';
// Online Python and AI classes in Chimbote, Peru (ag- city page, Peru cluster row PE193; alloc: cities, pai, #8E3646).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; fees in USD only, through the template's data-price anchors. Audience: every age, Python first.
// Spine: Chimbote is a port city counted by INEI as one settlement, with Nuevo Chimbote beside it as another; the page
// sets out one Python path from age 9 to adult, explains step by step how a live online class works from home, says
// what "AI classes" mean at each age, and teaches with IMARPE's daily sea-surface temperature at the Chimbote pier.
// Different spine and dataset from the Áncash region module (Tayacoto soil moisture, streaks).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-python-and-ai-classes-chimbote-peru/,
// national facts from pe/facts-school/src and pe/src/inei; every quote string-matched in the raw file):
//  - INEI Lib1541, Directorio de Centros Poblados 2017, dpto02 (tsv_dpto02/sheet0_02.tsv): "CHIMBOTE Chala 52 179 909";
//    "BUENOS AIRES Chala 40 158 385" (district Nuevo Chimbote). INEI publishes no combined figure in these sources; the
//    two stay separate (places.tsv note; brief rule 2).
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (tsv_ind_00/sheet2): "ÁNCASH 1205923";
//    "PROVINCIA SANTA 500520"; "DISTRITO CHIMBOTE 229247"; "DISTRITO NUEVO CHIMBOTE 191150"; "DISTRITO COISHCO 18182".
//    Capital of Áncash: Huaraz (Compendio 2026 cuadro 1.8). Never summed.
//  - INEI Compendio Estadístico Perú 2026, tomo 1 (ENAHO): 11.5 Áncash 2025 "30,3" (Total "33,9"); 11.6 Áncash 2025
//    "51,5" (Total "56,8"); 11.13 Áncash 2025 "80,9" (Total "81,1"). Cuadro 5.66 (MINEDU): "042 Universidad Nacional del
//    Santa 4 166 ... 5 557" (2018 to 2025).
//  - EF EPI 2025 Peru page (ef_peru.raw): region "Ankashu" 475, class epi-low; no Chimbote city score; Peru 519, rank 52
//    of 123; Lima city 555.
//  - MINEDU Fábrica de Programadores (FACTS 45, 46): 1,000 students of 4° and 5° secundaria, Lima Norte, Python, PCEP.
//    CNEB competency 28 transversal; secundaria 35-hour week with no computing area (FACTS 32, 33, 39). MINEDU Edades
//    normativas (FACTS 13, 14). AI tool ages from content/ai-tool-age-audit.json (Claude 18+; ChatGPT 13+ with parent
//    permission under 18): the page recommends no named chatbot to under-18s.
//  - Time (timezone.tsv): America/Lima UTC-5 all year; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
//  - Data: Instituto del Mar del Perú (IMARPE), "Temperatura superficial del mar (TSM) registrada en los laboratorios
//    costeros del IMARPE", Plataforma Nacional de Datos Abiertos, https://www.datosabiertos.gob.pe/dataset/temperatura-
//    superficial-del-mar-tsm-registrada-en-los-laboratorios-costeros-del-imarpe, licence "Open Data Commons Attribution
//    License" (dc:license on the raw page), modified 6 October 2026. Description: "mediciones diarias de la Temperatura
//    Superficial del Mar (TSM), expresada en grados Celsius (°C), realizadas en los muelles de los laboratorios costeros".
//    File IMARPE_Temperatura_TSM.csv, 3,298,714 bytes, 135,234 rows, 11 laboratories; CHIMBOTE 14,316 rows, 5 January
//    1976 to 31 July 2026. Saved 10 November 2026.
// Our own calculations (scratchpad pe/c6/ch/v1.py, v2.py; python3 -I on the downloaded file):
//  v1 prints: One normal for the whole year: 19.91 / 2026-02 21.85 difference 1.94 / 2026-07 22.7 difference 2.79
//  v2 prints: February normal: 22.19 July normal: 18.56 / 2026-01 20.34 against its own month -0.99 / 2026-02 21.85
//    against its own month -0.34 / 2026-03 23.13 against its own month 0.87 / 2026-04 21.98 against its own month 1.1 /
//    2026-05 22.32 against its own month 2.38 / 2026-06 22.65 against its own month 3.41 / 2026-07 22.7 against its own
//    month 4.14
//  summary: Chimbote 1991 to 2020 monthly normals (readings): Jan 21.33 (738), Feb 22.19 (708), Mar 22.25 (743), Apr
//    20.89 (694), May 19.93 (734), Jun 19.24 (709), Jul 18.56 (715), Aug 18.22 (755), Sep 18.34 (754), Oct 18.58 (744),
//    Nov 19.25 (713), Dec 20.25 (702); 8,709 readings in the 30 years. In 2010 readings fall Monday to Saturday only;
//    from 2017 the file has one a day (355, 363, 365). Highest reading 30.17 on 12 February 1998; lowest 14.17 on 7 June 1991.
// Lesson family: a seasonal baseline. Compare a month with the normal for that calendar month, not with one average for
// the whole year; fix the baseline period before comparing.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'import statistics',
  '',
  'normal_years = []',
  'months_2026 = {}',
  'with open("IMARPE_Temperatura_TSM.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["LABORATORIO_COSTERO"] != "CHIMBOTE":',
  '            continue',
  '        year, month = row["FECHA_MEDICION"][:4], row["FECHA_MEDICION"][5:7]',
  '        t = float(row["TEMPERATURA_SUPERFICIAL"])',
  '        if "1991" <= year <= "2020":',
  '            normal_years.append(t)',
  '        if year == "2026":',
  '            months_2026.setdefault(month, []).append(t)',
  '',
  'normal = statistics.mean(normal_years)',
  'print("One normal for the whole year:", round(normal, 2))',
  'for month in ("02", "07"):',
  '    m = statistics.mean(months_2026[month])',
  '    print("2026-" + month, round(m, 2), "difference", round(m - normal, 2))'
].join('\n');

const V2 = [
  'import csv',
  'import statistics',
  '',
  'by_month = {}',
  'months_2026 = {}',
  'with open("IMARPE_Temperatura_TSM.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["LABORATORIO_COSTERO"] != "CHIMBOTE":',
  '            continue',
  '        year, month = row["FECHA_MEDICION"][:4], row["FECHA_MEDICION"][5:7]',
  '        t = float(row["TEMPERATURA_SUPERFICIAL"])',
  '        if "1991" <= year <= "2020":',
  '            by_month.setdefault(month, []).append(t)',
  '        if year == "2026":',
  '            months_2026.setdefault(month, []).append(t)',
  '',
  'normal = {month: statistics.mean(values) for month, values in by_month.items()}',
  'print("February normal:", round(normal["02"], 2), "July normal:", round(normal["07"], 2))',
  'for month in sorted(months_2026):',
  '    m = statistics.mean(months_2026[month])',
  '    print("2026-" + month, round(m, 2), "against its own month", round(m - normal[month], 2))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Chimbote: Python and AI, all ages' },
  slug: 'online-python-and-ai-classes-chimbote-peru',
  code: 'pai',
  accent: '#8E3646',
  accentRationale: 'Online Python and AI classes in Chimbote: the allocated #8E3646, a deep harbour-rope red that stays calm beside code blocks; above 4.5:1 on #FBF8F2, #F5F1E8 and #EDE7DA, so inline links in the project section remain legible',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online Python and AI classes in Chimbote, Peru',
  title: 'Online Python and AI Classes in Chimbote, Peru, in English',
  description: 'Python and AI classes for Chimbote, live online in English for children from 9, teenagers and adults: how a class runs, what AI lessons cover and a sea data project.',
  ogDescription: 'Live online Python and AI for learners in Chimbote and Nuevo Chimbote, taught in English at any hour: one path from age 9 to adult, how a class works step by step, honest notes on English and equipment, and a Python project on IMARPE\'s sea temperature at the Chimbote pier.',
  twitterDescription: 'Python and AI in Chimbote, live online in English: a path for every age and a project on the sea off Chimbote.',
  pageName: 'Online Python and AI Classes in Chimbote, Peru',
  webPageDescription: 'A guide for Chimbote learners of every age to live online Python and AI classes taught in English, built on INEI census and household figures, MINEDU sources, EF EPI 2025 and an original Python project on IMARPE\'s daily sea-surface temperature file (ODC-By).',
  courseDescription: 'Live online Python and AI classes in English for learners in Chimbote, Peru: Python and AI for children from 9, Python, data and machine learning for teenagers, and Python, automation and generative AI for adults, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Chimbote, Python and AI',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#path', label: 'Python by age' },
    { href: '#steps', label: 'How a class works' },
    { href: '#ai', label: 'AI lessons' },
    { href: '#sea', label: 'Sea project' },
    { href: '#hours', label: 'Times' }
  ],
  eyebrow: 'Chimbote &middot; Python and AI &middot; Live online, in English',
  h1: 'Online Python and AI classes in Chimbote, Peru',
  lede: 'Python is the language most people now meet first, from a ten year old\'s first game to an engineer\'s data report, and it is also the doorway to AI. Below you will find a single Python route for Chimbote learners, from nine years old to adult, explains exactly how a live online class works from a home in Chimbote or Nuevo Chimbote, says plainly what our AI lessons do and do not teach, and finishes with a project on the sea off the Chimbote pier.',
  secondaryCta: { href: '#sea', label: 'See the sea project' },
  wa: 'Hello Modern Age Coders, I am in Chimbote, Peru and I am interested in live Python and AI classes in English. Could I book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; over 10,000 learners in many countries &middot; one mentor who knows your work',
  spec: [
    ['Ages', '9 to adult, in separate groups'],
    ['Language of code', 'Python, then data and AI'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Chimbote time', 'Any day; you pick the hour'],
    ['Mentors', 'In India, teaching over live video'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'The answer first',
  capsule: 'Modern Age Coders runs Python and AI classes for learners in Chimbote, Peru, live online and taught in English. Nine to twelve year olds type real Python and build little AI experiments; secundaria students move on to data, machine learning and the PCEP certificate; adults use Python at work, for automation and with generative AI. Every lesson has a mentor on live video, teaching either a group of fifteen to twenty or a single learner, on whatever day and hour you pick. We teach learners to reason through code, not to paste what an AI suggests.',

  picks: {
    eyebrow: 'Three ways in',
    h2: 'Where Chimbote learners start with Python',
    lede: 'One course for each stage of life. Each starts from zero, so nobody needs to have coded before.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CHB / 01', title: 'Python and AI for Kids', note: 'For 9 to 12 year olds, starting with actual typed Python in week one: turtle drawings, number games and little experiments that show a computer learning from examples.' },
      { course: 'python-complete-masterclass-teens', code: 'CHB / 02', title: 'Python for Teens', note: 'For secundaria learners of 13 to 18 who have never coded: from a first variable to files, data and finished projects, and onwards to data science, machine learning or PCEP.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'CHB / 03', title: 'Python Masterclass', note: 'For university students and working adults. From the first variable to automation, data handling and the groundwork for AI, at hours around work.' }
    ]
  },

  sections: [
    {
      id: 'port',
      eyebrow: 'Chimbote in figures',
      h2: 'How big is Chimbote, and is Nuevo Chimbote counted with it?',
      lede: 'No. INEI counts the main settlement of Chimbote and the main settlement of Nuevo Chimbote separately, and publishes no single figure for the two in the sources we used. We follow INEI and never add them up.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Chimbote and its neighbours, by the unit INEI counts', head: ['Unit', 'People', 'Census and year'], rows: [
          ['Department of Áncash (20 provinces)', '1,205,923', '2025, total population'],
          ['Province of Santa', '500,520', '2025, total population'],
          ['District of Chimbote', '229,247', '2025, total population'],
          ['District of Nuevo Chimbote', '191,150', '2025, total population'],
          ['Chimbote, the settlement (52 m above sea level)', '179,909', '2017, people counted'],
          ['Buenos Aires, main settlement of Nuevo Chimbote (40 m)', '158,385', '2017, people counted']
        ] },
        { kind: 'source', html: 'Census sources: table 1 of INEI\'s 2025 census tabulation of demographic indicators (reference day 15 September 2025), and INEI\'s Directorio de Centros Poblados from the 2017 census, Áncash file (census day 22 October 2017), which gives each settlement with its altitude. Each row is a different unit; adding any two would double count people.' },
        { kind: 'two', mt: true,
          leftH3: 'A coastal city in a mountain region',
          left: [
            'Áncash\'s capital is Huaraz, up in the Callejón de Huaylas, but the province of Santa on the coast holds 500,520 of the department\'s 1,205,923 people. Chimbote, at 52 metres, and Nuevo Chimbote\'s main settlement, at 40 metres, sit almost at sea level, which is why the sea makes such a natural data project for learners here.',
            'The public university of the area, the Universidad Nacional del Santa, had 5,557 students enrolled in 2025, up from 4,166 in 2018, according to MINEDU figures in INEI\'s 2026 compendium. We name it only as context; we have no connection with it.'
          ],
          rightH3: 'Online saves the trip along the coast',
          right: [
            'From Coishco in the north to the newer neighbourhoods south of Nuevo Chimbote, a learner may be an hour from wherever a class is held. A live online class removes that hour.',
            'It also removes the timetable. A secundaria student can take Python after school, a fisheries technician after a shift, and a parent after the children are asleep, each at a fixed hour that suits them.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Equipment and connection in 2025: Áncash against Peru (per cent)', head: ['Measure (INEI, 2025)', 'Áncash', 'Peru'], rows: [
          ['Households with at least one computer', '30.3', '33.9'],
          ['Households with an internet service', '51.5', '56.8'],
          ['People aged 6 and over who used the internet', '80.9', '81.1']
        ] },
        { kind: 'source', html: 'Household tables 11.5, 11.6 and 11.13 in volume 1 of INEI\'s Compendio Estadístico Perú 2026, drawn from its national household survey (ENAHO). Department-wide figures; INEI publishes none for Chimbote alone. Python needs a computer with a keyboard, so the first row is the one to check.' }
      ]
    },
    {
      id: 'why',
      eyebrow: 'Why Python',
      h2: 'What is Python, and why do so many people start with it?',
      lede: 'Python is a programming language that reads almost like short English sentences. It is used for websites, data, science, automation and most AI work, and it is the language Peru\'s education ministry chose for its own school programming pilot.',
      body: [
        { kind: 'two',
          leftH3: 'Short, readable, and everywhere',
          left: [
            'A first Python program can be one line long, and a beginner can usually guess what a line does before running it. That matters for a learner who is also following lessons in English: <code>if temperature > 22:</code> means what it says.',
            'The same language then carries a learner a very long way. The programs on this page read a file of 14,316 sea readings, group them by month and compare averages in about twenty lines, using nothing that a teenager could not learn in a term.'
          ],
          rightH3: 'What MINEDU chose for schools',
          right: [
            'Under the Fábrica de Programadores scheme MINEDU announced in 2025, 1,000 Lima Norte pupils in the last two years of secundaria (4° and 5°) learn Python, and those who finish both stages may sit PCEP, an entry-level Python certificate from the Python Institute.',
            'It is a Lima pilot, and secundaria everywhere else, Chimbote included, still has no computing area in its 35-hour week. A Chimbote student who wants the same path takes it outside school, which is what our teen Python course and the PCEP preparation course offer.'
          ] }
      ]
    },
    {
      id: 'path',
      eyebrow: 'One path, every age',
      h2: 'Which Python course fits a child, a teenager or an adult in Chimbote?',
      lede: 'The language is the same at every age; the projects, pace and length of each class change. Children, teenagers and adults always learn in separate groups.',
      body: [
        { kind: 'table', numCols: [], caption: 'The Python path for Chimbote learners (our course ages and plans)', head: ['Who', 'Start with', 'Then', 'What they build'], rows: [
          ['Children, 9 to 12', 'Python and AI for Kids', 'Maths through coding, AI literacy', 'Drawings, quizzes, number games, a first data chart'],
          ['Teenagers, 13 to 15', 'Python for Teens', 'Data science, or AI and machine learning', 'Small apps, file and data projects'],
          ['Teenagers, 15 to 18', 'Python for Teens or PCEP preparation', 'Machine learning, Java or competitive problems', 'Exam-ready Python, models trained on real data'],
          ['University students', 'Python Masterclass', 'Data analysis, generative AI', 'Analysis scripts, a portfolio project'],
          ['Working adults', 'Python Masterclass', 'Python automation, AI agents', 'Tools that save hours at work']
        ] },
        { kind: 'source', html: 'Course ages and plans are ours. School years follow MINEDU\'s normative ages, measured on 31 March, so 1° de secundaria usually starts at 12 and 5° at 16.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Children', p: 'Ten year olds type real code, but in short bursts with something visible at the end of every class: a spiral, a dice game, a quiz that keeps score. The aim is confidence and curiosity, and children who are younger than nine usually start with Scratch blocks first.' },
          { h3: 'Teenagers', p: 'Secundaria students work with files and real data from the first term, and the strongest go on to machine learning or to the PCEP certificate. They also learn to test a program, which is where careful reasoning shows.' },
          { h3: 'Adults', p: 'University students and workers in Chimbote use Python for reports, spreadsheets and automation, then for working with AI tools safely. Nobody is too old: our learners run from 6 to 67, and many adults start with no coding at all.' }
        ] },
        { kind: 'p', mt: true, html: 'If you are comparing providers before choosing, our page on <a class="ag-inline-link" href="/best-python-course-in-peru">choosing a Python course in Peru</a> sets out what to check in a trial class, and the <a class="ag-inline-link" href="/python-course-peru">Python course for Peru</a> page goes deeper into the syllabus.' }
      ]
    },
    {
      id: 'steps',
      eyebrow: 'Live, online',
      h2: 'What happens in a live online Python class taken from Chimbote?',
      lede: 'It is a real class at a set hour, with a mentor who sees your screen and hears you, not a recorded video. These are the steps from first message to a regular class.',
      body: [
        { kind: 'ol', items: [
          '<strong>Send a message.</strong> Use the form on this page or WhatsApp, in English, and say who the classes are for and roughly when suits you.',
          '<strong>Pick a time in your own clock.</strong> The booking page shows times in Peru time; the mentor sees the same moment in India time.',
          '<strong>Join the free class.</strong> A link opens a video call in the browser. The mentor asks a few questions, gives a short puzzle and helps the learner write a first small program.',
          '<strong>Get a recommendation.</strong> After the class you hear which course fits, which group, and whether one to one would suit better.',
          '<strong>Start the regular classes.</strong> The same mentor, at the same hours each week. The learner shares their screen and writes the code; the mentor watches, asks and guides.',
          '<strong>Practise between classes.</strong> A short task after each class, checked at the start of the next one, so problems surface early.',
          '<strong>See the progress.</strong> Learners keep every project they make, and families of children under 13 get a short written update after classes.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What you need',
          left: [
            'A laptop or desktop computer with a keyboard, a connection that holds a video call for an hour, and headphones with a microphone. Python is free to install, and for the first weeks a browser-based editor is enough.',
            'A phone or a tablet without a keyboard is not enough for Python. With 30.3 per cent of Áncash households owning a computer in 2025, we would rather say this before you book than after.'
          ],
          rightH3: 'What a group class is like',
          right: [
            'A group has fifteen to twenty learners of similar age and level. The mentor explains a short idea, everyone builds it on their own machine, and learners share their screen when stuck so the whole group learns from the fix.',
            'One-to-one classes follow the same rhythm with one learner, at hours agreed with the mentor, and suit adults with an irregular shift pattern or a teenager preparing for an exam.'
          ] }
      ]
    },
    {
      id: 'ai',
      tint: 'tint',
      eyebrow: 'AI lessons',
      h2: 'What do the AI classes actually teach?',
      lede: 'How AI works and how to use it with judgement, matched to age. We teach learners to understand and check AI, not to hand their thinking to it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children, 9 to 12', p: 'How a computer can learn from examples, shown with tiny Python programs the child writes: a guesser that improves, a sorter that makes mistakes. No chatbot accounts. Children learn that AI can be confidently wrong, and how to spot it.' },
          { h3: 'Teenagers, 13 to 18', p: 'Machine learning with real data: training a model, testing it on data it has not seen, and measuring how often it is right. Teenagers may use AI coding tools only where the provider\'s own age rules allow, and many require a parent\'s permission under 18.' },
          { h3: 'Adults', p: 'Generative AI, prompt design, automation with Python and AI agents, always with the human checking the output. Adults learn where AI saves time and where its answers have to be verified line by line.' }
        ] },
        { kind: 'p', mt: true, html: 'Whatever the age, the rule in our classes is the same: if AI wrote it, you must be able to explain it. A learner who pastes code they cannot explain is asked to rebuild it step by step, and that is usually where the real learning happens. Our page on <a class="ag-inline-link" href="/learn-to-think-not-copy-coding-peru">learning to think rather than copy</a> explains the approach in more detail, and the <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> lists what each age may use.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Is English a problem for Python learners in Chimbote?',
      lede: 'For some, at first. Every class is taught in English only, and we would rather be honest about who finds that easy and who needs time.',
      body: [
        { kind: 'two',
          leftH3: 'What EF\'s 2025 index says',
          left: [
            'EF\'s English Proficiency Index 2025 gives the Áncash region a score of 475, in its low band, and publishes no score for Chimbote itself. Peru as a whole scores 519 and ranks 52nd of 123 countries, in the moderate band; Lima city reaches 555, in the high band.',
            'So a learner in Chimbote is more likely than one in Lima to find a class in English demanding at first. That is not a reason to give up; it is a reason to start with the free class and see.'
          ],
          rightH3: 'Where Python makes it easier',
          right: [
            'Most of Python\'s vocabulary is a handful of plain English words such as <code>if</code>, <code>for</code>, <code>while</code> and <code>print</code>, and learners who code for a few weeks often find their technical English grows faster than their general English. Mentors keep instructions short, repeat them in simpler words, and type key terms in the chat.',
            'Adults who read technical documentation in English, and teenagers at bilingual schools, usually follow from the first class. A learner with very little English is welcome to try, and the mentor will say honestly after the free class whether one to one at a slower pace would serve them better.'
          ] }
      ]
    },
    {
      id: 'sea',
      eyebrow: 'A Chimbote project',
      h2: 'Is the sea off Chimbote warmer than normal in 2026?',
      lede: 'IMARPE, the Instituto del Mar del Perú, measures the sea-surface temperature every day at the pier of its Chimbote laboratory and publishes the readings as open data. Our teenage and adult learners use it to learn one of the most useful ideas in data work: compare like with like.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is IMARPE\'s Temperatura superficial del mar (TSM) registrada en los laboratorios costeros del IMARPE, released through datosabiertos.gob.pe with the ODC-By licence (Open Data Commons Attribution) and updated on 6 October 2026. IMARPE describes it as daily measurements, in degrees Celsius, taken at the piers of its coastal laboratories.',
            'The file we downloaded on 10 November 2026, IMARPE_Temperatura_TSM.csv, has 135,234 readings from 11 laboratories. The Chimbote laboratory accounts for 14,316 of them, from 5 January 1976 to 31 July 2026.'
          ],
          rightH3: 'The question',
          right: [
            'On the coast people often say the sea feels warm or cold this year. We ask learners: was the sea off Chimbote warmer than normal in 2026? The obvious method is to work out a normal temperature and see how far each month sits from it.',
            'Version 1 does exactly that. It averages every Chimbote reading from 1991 to 2020, a common thirty-year baseline, and compares February and July 2026 with that single number.'
          ] },
        { kind: 'code', label: 'Version 1: one normal for the whole year', lang: 'Python', code: V1, note: 'It prints: <code>One normal for the whole year: 19.91</code>, then <code>2026-02 21.85 difference 1.94</code> and <code>2026-07 22.7 difference 2.79</code>.' },
        { kind: 'p', mt: true, html: 'Version 1 says both months were warm, February by almost two degrees. Then someone who has lived in Chimbote points out the problem: February is always warm. It is summer. Comparing a summer month with an average that includes the winter will make every summer look hot and every winter look cold, whatever the sea is doing.' },
        { kind: 'code', label: 'Version 2: a normal for each calendar month', lang: 'Python', code: V2, note: 'It prints: <code>February normal: 22.19 July normal: 18.56</code>, then one line per month of 2026 from <code>2026-01 20.34 against its own month -0.99</code> and <code>2026-02 21.85 against its own month -0.34</code> to <code>2026-07 22.7 against its own month 4.14</code>.' },
        { kind: 'p', mt: true, html: 'Version 2 builds twelve normals, one for each calendar month, and compares every month of 2026 with its own. The story changes completely. February 2026 was not warm at all; it was a third of a degree cooler than a normal February. The months from March onwards were warmer than their own normals, and the gap grew month by month: July 2026, at 22.70 degrees, was 4.14 degrees above a normal July. Version 1 had the right instinct about July and the wrong answer about February, because its baseline ignored the seasons.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Chimbote sea-surface temperature: 1991 to 2020 normal and 2026 (°C, our calculation)', head: ['Month', 'Normal 1991 to 2020', '2026 average', 'Difference'], rows: [
          ['January', '21.33', '20.34', '-0.99'],
          ['February', '22.19', '21.85', '-0.34'],
          ['March', '22.25', '23.13', '+0.87'],
          ['April', '20.89', '21.98', '+1.10'],
          ['May', '19.93', '22.32', '+2.38'],
          ['June', '19.24', '22.65', '+3.41'],
          ['July', '18.56', '22.70', '+4.14']
        ] },
        { kind: 'source', html: 'Data: IMARPE, sea-surface temperature at its coastal laboratories, Chimbote rows, datosabiertos.gob.pe, licence ODC-By. Normals, averages and differences are our own. Before 2017 the file does not hold a reading for every day of the week; from 2017 it has one each day, and the 1991 to 2020 normals rest on 8,709 readings. The warmest Chimbote reading in the whole file is 30.17 degrees on 12 February 1998; the coolest is 14.17 on 7 June 1991.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12.</strong> Take the twelve monthly normals from the table and draw them as a bar chart with Python\'s turtle. Which month is the warmest, and which the coolest?',
          '<strong>Teenagers, 13 to 15.</strong> Run Version 1 and Version 2 and write two sentences a fisherman could understand about why their answers for February disagree.',
          '<strong>Ages 15 to 18.</strong> Change the baseline to 1981 to 2010. Do the 2026 differences grow or shrink, and what does that say about the choice of baseline?',
          '<strong>University and adults.</strong> Repeat the analysis for Callao and Paita from the same file. IMARPE also publishes a separate anomaly dataset on the same platform: compare your own differences with theirs and explain any gap.'
        ] }
      ]
    },
    {
      id: 'hours',
      eyebrow: 'Class times',
      h2: 'What time are classes for learners in Chimbote?',
      lede: 'At the hour you name. Chimbote never changes its clocks, and India stays 10 hours 30 minutes in front.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample conversions from Peru time to India time (for planning, not a schedule)', head: ['In Chimbote', 'For the mentor in India', 'Note'], rows: [
          ['06:30', '17:00', 'Before school or work'],
          ['09:30', '20:00', 'Same date in India'],
          ['13:00', '23:30', 'Same date in India'],
          ['15:30', '02:00', 'Next date in India'],
          ['18:30', '05:00', 'Next date in India'],
          ['21:00', '07:30', 'Next date in India']
        ] },
        { kind: 'source', html: 'Time rules: Peru uses UTC minus five hours throughout the year and has had no clock change since 1994 according to the America/Lima zone of the tz database, with INACAL keeping the legal hour. India uses UTC plus five and a half hours with no seasonal change, so the difference never moves.' },
        { kind: 'p', mt: true, html: 'Adults in Chimbote often take a late-evening class after work; teenagers usually prefer late afternoon once secundaria is over; younger children learn more easily in the morning during the January to March holidays. You choose the hour in your own clock when you book, and it stays the same through the year because neither country changes its clocks.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a Chimbote learner can do at each step of the Python path',
    lede: 'Our own milestones, used for learners of every age. They decide which group a new learner joins and show what has really been learned.',
    table: { caption: 'Python milestones from a first line to honest data work (ours)', head: ['Step', 'Usually reached', 'The learner can'], rows: [
      ['1. Instruct', 'First weeks', 'Write and run short programs that print, ask and calculate'],
      ['2. Decide and repeat', 'First term', 'Use if, for and while to make a program respond and loop'],
      ['3. Organise', 'Second term', 'Keep data in lists and dictionaries and write functions'],
      ['4. Read files', 'Second or third term', 'Load a real CSV file and pick out the rows that matter'],
      ['5. Compare fairly', 'Teenagers and adults', 'Choose a baseline, group by season or category, and explain the choice'],
      ['6. Model and check', 'Later teen and adult courses', 'Train a simple model and test it on data it has not seen']
    ] },
    left: { h3: 'For parents and employers', ps: [
      'Step 5 is the sea project. It is the step that separates someone who can run code from someone whose conclusions can be trusted.',
      'Progress is described as work the learner can show and explain.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you call something unusual, ask: unusual compared with what?',
      'A baseline is a choice. Write down which one you used.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'A further nine Python and AI courses for Chimbote',
    lede: 'Arranged from youngest to oldest. Every one is taught live, in English, by a regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 8 to 12', courses: [
        { code: 'CHB / KIDS / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What AI is, how it learns and why it gets things wrong, for ages 8 to 14.' },
        { code: 'CHB / KIDS / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns, angles and averages worked out in Python by learners aged 10 to 15.' },
        { code: 'CHB / KIDS / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Games and AI ideas for ages 8 to 12, with the child steering every step.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CHB / TEEN / 01', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP', blurb: 'Exam practice for PCEP and PCAP, open to learners from roughly 13.' },
        { code: 'CHB / TEEN / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'From Python to real models, trained and tested on real data.' },
        { code: 'CHB / TEEN / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Charts, statistics and first models for teenagers who know some Python.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'CHB / ADULT / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts, scraping and applied AI for the dull, repeated parts of office work.' },
        { code: 'CHB / ADULT / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'Large language models, retrieval and agents, built and checked by hand.' },
        { code: 'CHB / ADULT / 03', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Spreadsheets, SQL queries, Python and dashboards, for adults new to data.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How classes fit a week in Chimbote',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early start', l: 'A class before the working day lands in the Indian evening.' },
      { time: 'After a shift', l: 'Late evening in Chimbote is early morning in India, and that works too.' },
      { time: 'Private hours', l: 'One to one, on the days you choose, agreed with your mentor.' }
    ],
    cells: [
      { h3: 'A regular mentor', p: 'The same teacher each week, who knows your code.' },
      { h3: 'Patient English', p: 'Short instructions, repeated in simpler words when needed.' },
      { h3: 'You write the code', p: 'The mentor guides; the keyboard stays with the learner.' },
      { h3: 'Separate age groups', p: 'Children, teenagers and adults each have their own classes.' },
      { h3: 'Work you can show', p: 'Projects that stay with the learner after the course.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one.' }
    ]
  },

  projectsH2: 'Projects our older learners have finished',
  projectsLede: 'Students who stay with Python go on to build working tools. Some appear below; the <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Reviews left on Google by parents and learners, word for word.',

  fees: {
    h2: 'Fees for learners in Chimbote',
    lede: 'Every plan runs month to month. The price is in US dollars and your card is charged in dollars; the conversion to soles is made by your bank at its rate, so the final figure on your statement can vary slightly.',
    free: ['A free first class', 'A puzzle and a first Python program', 'No card details'],
    group: ['Fifteen to twenty learners at a similar level', 'One mentor throughout', 'Two live classes each week', 'Paid monthly, stop when you wish'],
    one: ['One learner and one mentor', 'A plan built around your goals', 'Days and hours of your choosing']
  },

  faq: {
    eyebrow: 'Chimbote learners ask',
    h2: 'Python and AI classes in Chimbote: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. They are taught only in English, live and online. Mentors keep sentences short, repeat instructions in simpler words and type key terms in the chat, and Python\'s own keywords are short English words that learners pick up quickly.' },
      { q: 'Can I learn Python online from Chimbote?', a: 'Yes. Learners in Chimbote and Nuevo Chimbote join live classes from home on a computer, with a mentor on video. Nothing is recorded in place of a teacher; every class happens at an agreed hour.' },
      { q: 'What age should someone start Python?', a: 'Around 9 for children who can type a little; younger children usually begin with Scratch blocks. Teenagers and adults can start from zero at any age.' },
      { q: 'Do the AI classes use chatbots with children?', a: 'No. Children learn how AI works by writing small programs themselves. Teenagers use AI tools only where the provider\'s age rules allow, and some require a parent\'s permission under 18. Adults learn generative AI and agents with the output always checked by a person.' },
      { q: 'When could I have class?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Chimbote and India are always 10 hours 30 minutes apart, so 19:00 in Chimbote is 05:30 the next day in India.' },
      { q: 'Do I need my own computer?', a: 'Yes, a computer with a real keyboard and a connection that holds a video call. A phone is not enough for Python. In 2025, 30.3 per cent of households in Áncash had a computer (INEI).' },
      { q: 'Can a secundaria student prepare for PCEP?', a: 'Yes. From about 13, learners can join our course for the two Python Institute exams, PCEP and PCAP. The exam itself is run and awarded by the Python Institute, not by us.' },
      { q: 'Will these classes help me get a job?', a: 'They teach real skills you can show, but we promise no job, salary or university place. What we can promise is work you have built yourself and can explain.' },
      { q: 'How do payments work?', a: 'Each month, in US dollars: that is the figure on this page and the currency your card is charged in, and your bank works out the soles. From India the page shows rupees. The first class costs nothing.' },
      { q: 'Is there a certificate?', a: 'Courses that end in a certificate give one we issue ourselves, recording the work completed. No Peruvian body recognises it as a qualification, and MINEDU, SUNEDU and the universities have no part in it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More pages for Chimbote learners',
    lede: 'Where to go after this page.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The index of every Peru page.' },
      { href: '/data-science-course-peru', label: 'Data science course for Peru', p: 'What comes after a first year of Python.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What typed code looks like for a child.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'Machine learning for secundaria, taught with care.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Starting Python at 25, 45 or 65.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live class.' }
    ]
  },

  start: {
    h2: 'Book a free Python class from Chimbote',
    lede: 'In the free class you meet your mentor, solve a short puzzle and write a first Python program together. Afterwards the mentor tells you honestly which course and group would suit, and whether your English and your computer are ready.',
    readFirst: 'To look around first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a class from start to end, and the <a class="ag-inline-link" href="/courses">course catalogue</a> lists each syllabus.',
    note: 'Every class is live, online and in English, taught by mentors based in India. WhatsApp messages written in English reach us fastest.',
    formNote: 'Free and without obligation; no card needed.'
  },

  footer: {
    cols: [
      { h4: 'Python and AI', links: [
        { href: '/python-course-peru', label: 'Python course, Peru' },
        { href: '/data-science-course-peru', label: 'Data science, Peru' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/coding-and-ai-classes-in-peru', label: 'All Peru pages' }
      ] }
    ],
    bottomRight: 'Unusual compared with which month?'
  },

  personalityCss: `
.ag-root.ag-pai .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-pai .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-pai .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-pai .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-pai .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadro 1) and Directorio de Centros Poblados 2017 (dpto02); INEI Compendio Estadístico Perú 2026 (cuadros 11.5, 11.6, 11.13, 5.66); MINEDU Fábrica de Programadores, CNEB, Edades normativas; EF EPI 2025; tz database America/Lima. Data: IMARPE, sea-surface temperature at coastal laboratories, ODC-By.',
    localProject: 'Is the sea off Chimbote warmer than normal in 2026? An original Python project on IMARPE\'s daily sea-surface temperature file (ODC-By): Version 1 compares 2026 months with one 1991 to 2020 average (19.91) and calls February warm; Version 2 builds a normal for each calendar month and finds February 0.34 below its own normal and July 4.14 above. Lesson family: a seasonal baseline, comparing like with like.',
    requiredMentions: ['IMARPE_Temperatura_TSM.csv', 'One normal for the whole year: 19.91', '2026-07 22.7 against its own month 4.14', 'February normal: 22.19 July normal: 18.56', '179,909', '158,385', 'Unusual compared with which month?', 'Universidad Nacional del Santa, had 5,557 students', 'Áncash region a score of 475'],
    sources: [
      { claim: 'Áncash, Santa, Chimbote and Nuevo Chimbote populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Chimbote and Buenos Aires settlements with altitude, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto02.xlsx' },
      { claim: 'Computer, internet and internet use in Áncash, 2025; Universidad Nacional del Santa enrolment.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'IMARPE sea-surface temperature file and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/temperatura-superficial-del-mar-tsm-registrada-en-los-laboratorios-costeros-del-imarpe' },
      { claim: 'MINEDU Fábrica de Programadores, Python and PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'CNEB and the secundaria timetable.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 scores for Peru, Áncash and Lima.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A combined Chimbote and Nuevo Chimbote population: INEI publishes none in our sources, and the page never adds them.',
      'Naming El Niño or any coastal event as the cause of the warm 2026 months: the file gives temperatures, not causes, so the page does not explain them.',
      'A Chimbote English score: EF EPI 2025 publishes only the Áncash region.',
      'Any connection with IMARPE, the Universidad Nacional del Santa, MINEDU or the Python Institute: none.',
      'Job, salary or university-place promises: refused.',
      'Spanish-language teaching: every class is in English.',
      'Recommending a named chatbot to under-18 learners: refused under the AI tool age audit.'
    ]
  }
};
