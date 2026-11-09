// SHIP: market (region) | Arequipa region beyond the city: eight provinces, a ten-year school plan, innovation data | substring versus whole word: "ia" in "estrategias", split into words first
'use strict';
// Online coding and AI classes, Arequipa region, Peru (ag- region page, Peru cluster row PE163; alloc: regions, caar, #154A06).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: flexible hours; USD only via
// data-price anchors.
// Spine: the department, not the city (the city has its own page, coding-classes-in-arequipa-peru, with a tourist-inventory
// project). This page covers the eight provinces, the GRE's ten-year Proyecto Educativo Regional, home equipment, and AI:
// how many regional innovation projects are really about AI? A search for "ia" says 158; a search for the word says 1.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-arequipa-region-peru/):
//  - INEI, Censos Nacionales 2025, Cuadro N° 1 (src/inei/tab/tsv_ind_00/sheet2_CUADRO_N_1.tsv): AREQUIPA 1814554; provinces
//    AREQUIPA 1382600, CAMANÁ 77224, CARAVELÍ 59384, CASTILLA 35231, CAYLLOMA 161670, CONDESUYOS 20880, ISLAY 63117,
//    LA UNIÓN 14448; districts CERRO COLORADO 273354, PAUCARPATA 153044, MAJES 119744, CAYMA 111606. Capital Arequipa
//    (Compendio 2026 cuadro 1.8). Never summed.
//  - INEI Lib1541 dpto04.xlsx (single centro poblado, 2017): EL PEDREGAL (district Majes) 44264.
//  - GORE Arequipa, gob.pe note 21 October 2026: "presentó el Proyecto Educativo Regional (PER) Arequipa 2026–2036";
//    "un proceso participativo iniciado en febrero de 2025"; "con las diez Unidades de Gestión Educativa Local (UGEL)".
//  - GORE Arequipa, gob.pe note 4 November 2026: "entrega de 16 kits tecnológicos destinados a instituciones educativas
//    rurales de la jurisdicción de la UGEL La Joya"; "Cada kit está conformado por una tableta"; "precargados para su uso sin
//    conexión a internet"; "contenidos disponibles en español y quechua collao"; "En esta experiencia piloto participan".
//  - INEI Compendio Estadístico Perú 2026, tomo 1 (ENAHO): cuadro 11.5 Arequipa "... 46,7 48,1 48,7 51,4"; 11.6 "... 68,6
//    67,7 65,9 70,3"; 11.13 "... 81,0 84,1 85,7 86,5"; Total 2025 33,9 / 56,8 / 81,1.
//  - EF EPI 2025 (ef_peru.raw): data-state="arequipa" region 509 (moderate); Peru 519, 52 of 123.
//  - Ley 28044, Edades normativas, CNEB competency 28 transversal and JER hours, MINEDU 2026 opening, Fábrica de
//    Programadores (FACTS 5, 6, 13, 14, 32, 33, 39, 17, 45, 46). Time: tzdata.
//  - Data: Gobierno Regional de Arequipa (GORE Arequipa), "Proyectos Cofinanciados por ProInnovate en Arequipa",
//    datosabiertos.gob.pe, licence "Open Data Commons Attribution License" (ODC-By), released 2025-05-14, modified
//    2025-08-22. File "Proyectos cofinanciados por ProInnovate en Arequipa 2019-2024.xlsx" (56,411 bytes), sheet Base,
//    368 projects, columns Número de Contrato, Concurso, RUC, Entidad, Titulo, Moneda, Monto RNR, Estado de Proyecto;
//    199 "En ejecución", 169 "Finalizado"; 40 different calls. Exported by us to proinnovate-arequipa.csv (UTF-8) with a
//    stdlib xlsx reader, 9 November 2026. Amounts never printed.
// Our own calculations (scratchpad pe/r1/caar/v1.py, v2.py, python3 -I):
//  v1 prints: Projects: 368 / Titles that mention IA: 158 / First one: APLICACIÓN DE HERRAMIENTAS VIRTUALES, ESTRATEGIAS DE MARKETI
//  v2 prints: Titles about AI: 3 / - Aplicación de IoT e IA a los procesos de Abello Consultores como alter / - Exponentia:
//    Asistente virtual para manejo de redes sociales con inteli / - Implementación de una gestión inteligente de datos por
//    medio del apren / Words that fooled version 1: ['comercial', 'mediante', 'eficiencia', 'estrategias']
//  extra: "digital" as a substring 49 titles, as a whole word 22; "software" 16 titles.
// Lesson family: substring versus whole word. "ia" in text matches inside other words; split the text into words (re.findall
// with \w+), compare whole words, and handle a two-word phrase separately.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'titles = []',
  'with open("proinnovate-arequipa.csv", newline="", encoding="utf-8") as projects:',
  '    for row in csv.DictReader(projects):',
  '        titles.append(row["Titulo"])',
  '',
  'about_ai = [t for t in titles if "ia" in t.lower()]',
  'print("Projects:", len(titles))',
  'print("Titles that mention IA:", len(about_ai))',
  'print("First one:", about_ai[0][:60])'
].join('\n');

const V2 = [
  'import csv',
  'import re',
  '',
  'def words(text):',
  '    return re.findall(r"\\w+", text.lower())',
  '',
  'titles = []',
  'with open("proinnovate-arequipa.csv", newline="", encoding="utf-8") as projects:',
  '    for row in csv.DictReader(projects):',
  '        titles.append(row["Titulo"])',
  '',
  'about_ai = []',
  'for t in titles:',
  '    if "ia" in words(t) or "inteligencia artificial" in " ".join(words(t)):',
  '        about_ai.append(t)',
  '',
  'print("Titles about AI:", len(about_ai))',
  'for t in about_ai:',
  '    print("-", t[:70])',
  '',
  'fooled = {}',
  'for t in titles:',
  '    for w in words(t):',
  '        if "ia" in w and w != "ia":',
  '            fooled[w] = fooled.get(w, 0) + 1',
  'print("Words that fooled version 1:", sorted(fooled, key=fooled.get, reverse=True)[:4])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Arequipa region' },
  slug: 'online-coding-and-ai-classes-arequipa-region-peru',
  code: 'caar',
  accent: '#154A06',
  accentRationale: 'Arequipa region: a deep valley green #154A06, the irrigated fields of Majes and the Colca terraces against white sillar, allocated to this row; contrast 9.84 on #FBF8F2, 9.25 on #F5F1E8 and 8.46 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Arequipa region, Peru',
  title: 'Arequipa Region Online Coding and AI Classes, Live in English',
  description: 'Coding and AI classes for the whole Arequipa region, live online in English: eight provinces, the 2026 to 2036 school plan, home internet and an AI search project.',
  ogDescription: 'For families and adults in Majes, Camaná, Mollendo, Chivay and every other part of the Arequipa department: live online coding and AI in English, the census by province, the regional education plan, and a Python project on regional innovation grants that asks what really counts as AI.',
  twitterDescription: 'Arequipa region, live online coding and AI in English: provinces, the regional school plan, and a word-search project.',
  pageName: 'Online Coding and AI Classes in the Arequipa Region',
  webPageDescription: 'A guide for learners across the Arequipa department of Peru to live online coding and AI classes in English, built from INEI census and ENAHO tables, two GORE Arequipa notes on education, MINEDU curriculum sources, EF EPI 2025 and an original Python project on the GORE Arequipa ProInnovate projects dataset (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Arequipa region of Peru: block coding, web and Python for children, Python, AI and machine learning for teenagers, Python, AI agents and data for adults, in groups of fifteen to twenty or one to one, at any hour the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Arequipa region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#provinces', label: 'Provinces' },
    { href: '#plan', label: 'School plan' },
    { href: '#ai-search', label: 'AI project' },
    { href: '#learners', label: 'Who it suits' },
    { href: '#hours', label: 'Hours' }
  ],
  eyebrow: 'Arequipa region &middot; Live online, in English &middot; From age 6',
  h1: 'Online coding and AI classes across the Arequipa region',
  lede: 'Most writing about Arequipa stops at the white city. This page is for the rest of the department as well: the irrigated plain of Majes, the coast at Camaná and Mollendo, the Colca valley, Caravelí, Castilla, Condesuyos and La Unión. It gives each province\'s 2025 population, explains the region\'s new ten-year education plan, checks how many homes can support an online class, and asks a sharp question of the region\'s own innovation data: how many of its funded projects are really about artificial intelligence?',
  secondaryCta: { href: '#ai-search', label: 'Go to the AI project' },
  wa: 'Hello Modern Age Coders, we live in the Arequipa region of Peru, outside the city, and are interested in live coding and AI classes in English. Is a free first class possible?',
  heroNote: 'Live online teaching since 2020 &middot; 10,000+ learners worldwide &middot; English paced to the learner',
  spec: [
    ['Age range', '6 upwards, no upper limit'],
    ['Provinces', 'All eight, joined from home'],
    ['Taught in', 'English, at the learner\'s pace'],
    ['Format', 'Groups of fifteen to twenty, or one to one'],
    ['When', 'Days and hours set by the family'],
    ['To begin', 'A free class with no card']
  ],
  capsuleQ: 'Straight answer',
  capsule: 'Modern Age Coders runs live online coding and AI classes in English for learners anywhere in the Arequipa region of Peru, from the city itself to Majes, Camaná, Mollendo, Chivay and the highland provinces. Children start at six with coding blocks and move to Python at around nine; teenagers study Python, AI and machine learning; adults learn Python, data and AI agents. A mentor teaches each class live on video, to fifteen to twenty learners or to one, on days and at hours the family picks, and the first class is free. Students learn to understand what AI does, not to paste what it writes.',

  picks: {
    eyebrow: 'Three good first courses',
    h2: 'Where Arequipa region learners usually start',
    lede: 'Chosen for this page\'s theme: understanding AI rather than just using it, at three different ages.',
    items: [
      { course: 'kids-ai-web-development-course', code: 'AQR / 01', title: 'AI and Web for Kids', note: 'For children of 9 to 12 starting from nothing. Web pages first, then small AI features, with each step explained so children know what the computer is actually doing.' },
      { course: 'ai-ml-masterclass-teens', code: 'AQR / 02', title: 'AI and Machine Learning for Teens', note: 'For secundaria students. Python, data and real models, trained and then tested until the students can say where a model fails.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'AQR / 03', title: 'AI Coding Agents for Adults', note: 'For adults at work. Using coding agents well: setting the task, reading what they produce, testing it, and keeping the final judgement human.' }
    ]
  },

  sections: [
    {
      id: 'provinces',
      eyebrow: 'Eight provinces',
      h2: 'How many people live in each province of the Arequipa region?',
      lede: 'The department of Arequipa counted 1,814,554 people in the 2025 census. About three in four live in the province of Arequipa, around the capital; the other seven provinces hold the rest, from the coast to the high Andes.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Total population by province, department of Arequipa, census of 2025', head: ['Province', 'Population (2025)'], rows: [
          ['Arequipa (province of the capital)', '1,382,600'],
          ['Caylloma (Majes, Chivay, the Colca valley)', '161,670'],
          ['Camaná', '77,224'],
          ['Islay (Mollendo)', '63,117'],
          ['Caravelí', '59,384'],
          ['Castilla', '35,231'],
          ['Condesuyos', '20,880'],
          ['La Unión', '14,448'],
          ['Whole department', '1,814,554']
        ] },
        { kind: 'source', html: 'INEI, Censos Nacionales 2025, Cuadro N° 1 of the demographic indicators: total population (counted and omitted) at 15 September 2025, on boundaries valid at 15 July 2026. The department line is INEI\'s own; the provinces are shown beside it, not added to make it. The "three in four" is our rounding of 1,382,600 out of 1,814,554.' },
        { kind: 'two', mt: true,
          leftH3: 'Majes, a city in the desert',
          left: [
            'The largest place outside the capital\'s province is the irrigated district of Majes, in Caylloma, with 119,744 people in 2025. Its main town, El Pedregal, appears with 44,264 people in INEI\'s 2017 list of populated centres, a figure for that single centre only.',
            'Families there are a long drive from the city, which makes a live online class a practical option rather than a second choice.'
          ],
          rightH3: 'Inside the capital\'s province',
          right: [
            'The province of Arequipa contains many large districts. In 2025 Cerro Colorado counted 273,354 people, Paucarpata 153,044 and Cayma 111,606, each bigger than several whole provinces of the department.',
            'Families in the city itself will find a page written for them: <a class="ag-inline-link" href="/coding-classes-in-arequipa-peru">coding classes in Arequipa city</a>, with its own data project on the regional tourist inventory.'
          ] }
      ]
    },
    {
      id: 'plan',
      tint: 'tint',
      eyebrow: 'The regional plan',
      h2: 'What is Arequipa planning for its schools between 2026 and 2036?',
      lede: 'In October 2026 the regional government presented its Proyecto Educativo Regional for 2026 to 2036, the strategic plan that is meant to steer education in the department for the next decade.',
      body: [
        { kind: 'two',
          leftH3: 'A ten-year plan, built with ten UGELs',
          left: [
            'According to the Gobierno Regional de Arequipa\'s note of 21 October 2026, its Gerencia Regional de Educación "presentó el Proyecto Educativo Regional (PER) Arequipa", covering 2026 to 2036. The plan came out of "un proceso participativo iniciado en febrero de 2025", with workshops held with the region\'s ten local education offices, its UGELs.',
            'A regional plan sets priorities; it does not change the national curriculum, which still decides what is taught in each grade.'
          ],
          rightH3: 'Tablets for rural schools',
          right: [
            'Two weeks later, on 4 November 2026, the regional government reported the delivery of 16 technology kits to rural schools under the UGEL La Joya, in a pilot with two schools. Each kit includes a tablet with a keyboard and headphones, plus routers and USB memory, and the PerúEduca content on them is preloaded for use without an internet connection, in Spanish and Quechua Collao.',
            'It is a careful, small start, and it shows the real constraint in rural Arequipa: devices and connection come before any coding lesson.'
          ] },
        { kind: 'p', mt: true, html: 'We are not part of these programmes and make no claim about them beyond what the regional government published. What they tell a family is simple: the region is investing in digital access, but the timetable still has no programming lesson, so a child who wants to learn to code needs a class outside school.' }
      ]
    },
    {
      id: 'curriculum',
      eyebrow: 'In the classroom',
      h2: 'What do Arequipa\'s schools teach about computers and code?',
      lede: 'Arequipa\'s colegios follow the same national curriculum as the rest of Peru. Computers appear as a skill to be practised in every subject, but nowhere as a subject with its own hours.',
      body: [
        { kind: 'table', numCols: [], caption: 'The national school stages that apply in every Arequipa province', head: ['Stage', 'Length', 'Normative ages', 'Hours for programming'], rows: [
          ['Primaria', 'Six school years', '6 in first grade to 11 in sixth', 'None set aside'],
          ['Secundaria', 'Five school years', '12 in first year to 16 in fifth', 'None in the regular week of 35 hours']
        ] },
        { kind: 'source', html: 'Sources: the General Education Law, Ley 28044, for the length of each stage; MINEDU\'s table of normative ages, measured on 31 March; the CNEB plan of studies for secundaria hours. Checked in November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Digital skills everywhere, programming nowhere',
          left: [
            'The CNEB treats its technology competency, number 28, as transversal: it belongs to all the areas at once. A teacher of science or communication may use it well, but none is required to teach a programming language.',
            'In the secundaria week there are four hours of maths, four of communication and three of English. Not one hour is labelled computing.'
          ],
          rightH3: 'The national Python pilot',
          right: [
            'MINEDU\'s Fábrica de Programadores began in July 2025 with Python for 1,000 secundaria pupils in their final two years, in Lima Norte only, with the option of sitting the PCEP certification exam at the end.',
            'For a student in Mollendo or Chivay, the closest equivalent is a class taken from home. Our PCEP and PCAP course follows a similar path, in English and at the student\'s own hours.'
          ] }
      ]
    },
    {
      id: 'connection',
      eyebrow: 'At home',
      h2: 'Can families in the Arequipa region follow classes from home?',
      lede: 'More of them than in most of Peru. In INEI\'s 2025 household survey, Arequipa is well above the national figures for home computers, home internet and internet use.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Arequipa region and Peru: computers and internet at home (per cent of homes or people)', head: ['', 'Arequipa 2022', 'Arequipa 2025', 'Peru 2025'], rows: [
          ['Homes owning at least one computer', '46.7', '51.4', '33.9'],
          ['Homes with internet service', '68.6', '70.3', '56.8'],
          ['People 6 and older using the internet', '81.0', '86.5', '81.1']
        ] },
        { kind: 'source', html: 'From INEI\'s Compendio Estadístico Perú 2026, first volume, tables 11.5, 11.6 and 11.13, based on the Encuesta Nacional de Hogares. INEI\'s decimal commas are shown as points.' },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers allow',
          left: [
            'In 2025 just over half of Arequipa homes had a computer, against about a third nationally, and seven in ten had internet. That makes the department one of the easier places in Peru to start online coding without buying anything new.',
            'Averages blur differences, though. The La Joya tablet pilot exists precisely because some rural schools are still offline.'
          ],
          rightH3: 'What we check',
          right: [
            'In the free first class the mentor looks at sound, screen sharing and whether the learner can type comfortably. A tablet is fine for a six year old using blocks.',
            'From about nine, when children start typing Python, a laptop or desktop makes the difference between following along and actually programming.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'English only',
      h2: 'Is any part of the class in Spanish?',
      lede: 'No. Classes are live, online and entirely in English, taught by mentors in India who adjust to the learner\'s pace and accent. Here is why that works for most Arequipa learners, and what we do when it does not.',
      body: [
        { kind: 'two',
          leftH3: 'The 2025 index',
          left: [
            'EF\'s English Proficiency Index 2025 puts Peru at 519 points, 52nd of 123 countries, in its moderate band. The Arequipa region scores 509, also moderate.',
            'Moderate means a learner usually understands more than they can say. A class built on showing, doing and short spoken steps suits that well.'
          ],
          rightH3: 'When English is the hard part',
          right: [
            'Some children need more time. In a one-to-one plan the mentor can slow right down, repeat key phrases each week and build a small word list with the learner.',
            'Over a few months, the vocabulary of code, words like loop, list, error and return, becomes familiar, and many families find the English improves as a side effect.'
          ] }
      ]
    },
    {
      id: 'ai-search',
      eyebrow: 'An Arequipa data project',
      h2: 'How many of Arequipa\'s innovation projects are really about AI?',
      lede: 'The regional government publishes the list of projects in the region co-financed by ProInnovate, Peru\'s innovation fund. A first program says 158 of them mention AI. The real number is three, and finding out why is a lesson in how computers search text.',
      body: [
        { kind: 'two',
          leftH3: 'The dataset',
          left: [
            'GORE Arequipa shares "Proyectos Cofinanciados por ProInnovate en Arequipa" through Peru\'s open data portal with an ODC-By (Open Data Commons Attribution) licence, so it may be reused with credit. It was released in May 2025 and last updated on 22 August 2025. The spreadsheet lists 368 projects from 2019 to 2024, with the call, the organisation, the title, the amount and the status: 199 still running and 169 finished.',
            'Because our students\' computers may not have a spreadsheet library, we exported the sheet to a plain file, proinnovate-arequipa.csv, on 9 November 2026. We never print the amounts; the titles are all this project needs.'
          ],
          rightH3: 'The question',
          right: [
            'In Spanish, artificial intelligence is often shortened to IA. So the obvious first attempt is to look for "ia" in every title, ignoring capitals, and count the matches.',
            'Teenagers who have used AI tools expect a big number, maybe a quarter of all projects. The program agrees with them, and that agreement is exactly what should make us suspicious.'
          ] },
        { kind: 'code', label: 'Version 1: search for the letters', lang: 'Python', code: V1, note: 'It prints: <code>Projects: 368</code>, <code>Titles that mention IA: 158</code> and <code>First one: APLICACIÓN DE HERRAMIENTAS VIRTUALES, ESTRATEGIAS DE MARKETI</code>.' },
        { kind: 'p', mt: true, html: 'Read the first match. It is about virtual tools and marketing strategies, and it was caught because "estrategias" contains the letters i and a side by side. The test <code>"ia" in t.lower()</code> asks whether those two letters appear anywhere, not whether the word IA appears. In Spanish that is very common: comercial, eficiencia, industria and experiencia all contain it.' },
        { kind: 'p', html: 'Version 2 splits each title into words first, using a regular expression that keeps letters and digits together and drops spaces and punctuation. Then it checks for the whole word "ia", or for the phrase "inteligencia artificial" written out. It also counts which words fooled the first version.' },
        { kind: 'code', label: 'Version 2: compare whole words', lang: 'Python', code: V2, note: 'It prints: <code>Titles about AI: 3</code>, then the three titles, starting <code>- Aplicación de IoT e IA a los procesos de Abello Consultores como alter</code>, <code>- Exponentia: Asistente virtual para manejo de redes sociales con inteli</code> and <code>- Implementación de una gestión inteligente de datos por medio del apren</code>, and finally <code>Words that fooled version 1: [\'comercial\', \'mediante\', \'eficiencia\', \'estrategias\']</code>.' },
        { kind: 'p', mt: true, html: 'Three projects out of 368 name AI in their titles. That does not mean only three use it; a title is a short summary, and some projects may use machine learning without saying so. What it does mean is that the honest answer to the question we asked is three, not 158, and that a program which agrees with what you expected deserves the hardest check.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Searching the 368 titles: letters inside words against whole words (our calculation)', head: ['Search', 'Any match inside a word', 'Whole word only'], rows: [
          ['ia', '158', '1'],
          ['digital', '49', '22'],
          ['software', '16', '16']
        ] },
        { kind: 'source', html: 'Data: Gobierno Regional de Arequipa, Proyectos Cofinanciados por ProInnovate en Arequipa (2019 to 2024), ODC-By. The counts are ours. "digital" shrinks because titles also say digitales and digitalización; "software" does not change because no other Spanish word in these titles contains it. The three AI titles are the 1 with the word IA plus 2 that write out inteligencia artificial.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, a word hunt.</strong> Write the word MARIA on paper. Can you find the word IA inside it? Is MARIA a word about computers?',
          '<strong>Blocks, ages 8 to 10.</strong> Build a list of six short words and a block that checks whether each one contains the letters "ia". Which ones say yes?',
          '<strong>Early Python, ages 10 to 12.</strong> Start from Version 1, print the first ten matches, and for each one underline the word that caused it.',
          '<strong>Ages 13 and over.</strong> Version 2 finds "IA" but would miss "I.A." with dots. Add a test case with that spelling, watch it fail, and fix the program.',
          '<strong>Going further.</strong> Count the titles that mention datos, plataforma or aplicación as whole words, then write a short paragraph on what kind of innovation the region funds most.'
        ] }
      ]
    },
    {
      id: 'learners',
      eyebrow: 'Who it suits',
      h2: 'Which learners in the Arequipa region do our classes suit?',
      lede: 'Everyone from a six year old in Camaná to a retired engineer in Cayma. The table pairs the most common profiles with a first course; ages are our course ages.',
      body: [
        { kind: 'table', numCols: [], caption: 'Learner profiles and a sensible first course (ours)', head: ['Who', 'Age', 'First course', 'Why'], rows: [
          ['A young child, curious about games', '6 to 8', 'Coding for Kids', 'Blocks need no typing and reward quick wins'],
          ['A child who wants to know how AI works', '9 to 12', 'AI and Web for Kids', 'Builds small AI features and explains them'],
          ['A secundaria student, strong in maths', '13 to 18', 'Python for Teens', 'Real programs, then data and AI'],
          ['A teenager already coding', '14 to 18', 'AI and Machine Learning for Teens', 'Models trained, tested and questioned'],
          ['A university student or graduate', '18 to 25', 'Python masterclass or data analysis', 'Skills that carry into any degree'],
          ['An adult at work', '25 and over', 'AI Coding Agents for Adults', 'Use agents well, check everything they write']
        ] },
        { kind: 'source', html: 'Pairings are our suggestion. Under-13s never use adult AI chatbot accounts in our classes, and teenagers use AI tools only within each provider\'s age rules; our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> lists them.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'In the provinces', p: 'Live online classes remove the trip to the city. A learner in Majes or Chivay gets the same mentor and the same lesson as one in Yanahuara.' },
          { h3: 'For AI-curious teens', p: 'We teach how a model learns, why it gets things wrong, and how to test it, so students use AI tools with judgement rather than faith.' },
          { h3: 'For adults', p: 'Many adults come to understand AI at work. Python and data come first; agents come once the learner can read and test code.' }
        ] },
        { kind: 'p', mt: true, html: 'Spanish-speaking parents who want the background on AI courses in English can read <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-en-ingles-peru">curso de inteligencia artificial en inglés en Perú</a>. For Python in more depth, see <a class="ag-inline-link" href="/python-course-peru">the Python course for Peru</a>.' }
      ]
    },
    {
      id: 'hours',
      eyebrow: 'Hours',
      h2: 'At what times can a learner in the Arequipa region have classes?',
      lede: 'At any hour the family chooses. The whole department keeps Peru time, and the mentor in India plans around that.',
      body: [
        { kind: 'table', numCols: [], caption: 'Some Peru times converted to India time (illustrations, not a timetable)', head: ['Arequipa region', 'India', 'Calendar day in India'], rows: [
          ['06:00', '16:30', 'Same day'],
          ['08:30', '19:00', 'Same day'],
          ['10:30', '21:00', 'Same day'],
          ['13:30', '00:00', 'Next day begins'],
          ['15:30', '02:00', 'Next day'],
          ['18:30', '05:00', 'Next day']
        ] },
        { kind: 'source', html: 'Peru keeps UTC minus 5 hours all year with no daylight saving (tz database, America/Lima). India keeps UTC plus 5 hours 30 minutes. India is therefore 10 hours 30 minutes ahead of Arequipa, and the gap never changes.' },
        { kind: 'p', mt: true, html: 'With no clock changes in either country, a slot agreed now stays the same all year. You choose your time in your own clock when booking. Peru\'s school year began on 16 March 2026, and the summer before it is a popular moment to start, keeping the same hour once colegio returns.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How an Arequipa learner\'s skills grow',
    lede: 'Our own stages for every learner, child or adult. They are how a mentor decides where a new student fits.',
    table: { caption: 'Stages from blocks to careful text processing (ours)', head: ['Stage', 'Typical age', 'Learner can'], rows: [
      ['1. Steps', '6 to 7', 'Make a character follow a plan in order'],
      ['2. Repeats', '7 to 9', 'Use a loop to avoid copying blocks'],
      ['3. Choices', '8 to 10', 'Make a program decide with if and else'],
      ['4. Text', '9 to 12', 'Store words in lists and search them'],
      ['5. Words, not letters', '11 to adult', 'Split text into words before matching'],
      ['6. Doubt the answer', '13 to adult', 'Test a result that looks right before reporting it']
    ] },
    left: { h3: 'For parents', ps: [
      'The innovation project trains stages 5 and 6. The habit it builds, checking an answer that seems obvious, is useful far beyond programming.',
      'Monthly updates describe what your child made and explained.'
    ] },
    right: { h3: 'For learners', ps: [
      'Letters inside a word are not the word.',
      'When the program agrees with your guess, test it twice.'
    ] }
  },

  catalogue: {
    eyebrow: 'Other courses',
    h2: 'Nine more courses for the Arequipa region',
    lede: 'From the youngest learners to adults. Every course is taught live in English by a regular mentor, in a group of fifteen to twenty or individually.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 15', courses: [
        { code: 'AQR / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Blocks, games and first apps for ages 6 to 12.' },
        { code: 'AQR / KIDS / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Creative coding with AI help', blurb: 'Ages 8 to 12: Scratch games first, with simple AI ideas explained along the way.' },
        { code: 'AQR / KIDS / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot game development', blurb: 'From blocks to typed game code, ages 10 to 17.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'AQR / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language behind most AI work, from zero.' },
        { code: 'AQR / TEEN / 02', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP', blurb: 'Python certification preparation, the same exam as the national pilot.' },
        { code: 'AQR / TEEN / 03', slug: 'codex-and-claude-code-ai-coding-agents-course-for-teens', title: 'AI coding agents for teens', blurb: 'Agents used with care, within each tool\'s age rules.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and over', courses: [
        { code: 'AQR / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'From first line to advanced Python, around work.' },
        { code: 'AQR / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Spreadsheets, SQL, Python and dashboards.' },
        { code: 'AQR / ADULT / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web development', blurb: 'Build and publish complete web applications.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'How a live class reaches every corner of the Arequipa region',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'Early Peru hours meet the Indian evening, a quiet time to learn.' },
      { time: 'Afternoons and evenings', l: 'Also possible; the mentor arranges the day around you.' },
      { time: 'Individual', l: 'A private hour agreed between you and the mentor.' }
    ],
    cells: [
      { h3: 'Known mentor', p: 'The learner works with the same person every week.' },
      { h3: 'Measured English', p: 'Slow, clear and backed by what is on screen.' },
      { h3: 'Hands-on', p: 'Learners type, run and fix their own code.' },
      { h3: 'Separate age groups', p: 'Children, teenagers and adults are taught apart.' },
      { h3: 'Regular reports', p: 'Families hear what has been built each month.' },
      { h3: 'Two formats', p: 'A class of fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'Things our advanced students have built',
  projectsLede: 'Long-term students go on to build working tools. Some appear below; there are more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents and students in their own words, from Google.',

  fees: {
    h2: 'Fees for the Arequipa region',
    lede: 'Every plan is a monthly fee in US dollars, taken from your card in dollars. Your bank works out the amount in soles at its own exchange rate, which is why the statement may not match the page exactly.',
    free: ['Free first class', 'A puzzle and a first program', 'Card not required'],
    group: ['A class of fifteen to twenty peers', 'The same mentor throughout', 'Two live lessons weekly', 'Monthly, cancel when you like'],
    one: ['Private lessons with one mentor', 'Projects built around the learner', 'Your own days and times']
  },

  faq: {
    eyebrow: 'Arequipa region families ask',
    h2: 'Online coding and AI classes in the Arequipa region: answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Classes are only in English, always live and online. Mentors in India keep a steady, clear pace, adapt to each learner\'s accent, and if a learner replies in Spanish they reply with the English words and continue.' },
      { q: 'We live in Majes, Camaná or Chivay. Can we join?', a: 'Yes. Classes are online, so any province of the department works exactly like the city. You need a stable connection and, for typed code from about age nine, a computer with a keyboard.' },
      { q: 'Is this the same as the Arequipa city page?', a: 'It covers the same courses, but this page is about the whole department and its eight provinces. Families in the city can also read our page on coding classes in Arequipa city, which has a different data project.' },
      { q: 'Do schools in the Arequipa region teach programming?', a: 'No subject is dedicated to it. Digital skills are spread through every area of the national curriculum, and secundaria timetables leave no slot for programming. Arequipa\'s new education plan for 2026 to 2036 sets priorities but does not change the curriculum.' },
      { q: 'Do you teach AI to children?', a: 'Yes, in a way suited to their age. Children build small AI features and learn why they work or fail. Under-13s never use adult chatbot accounts with us, and teenagers only use AI tools that allow their age.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Arequipa runs 10 hours 30 minutes behind India on every date, so 08:30 for you is 19:00 for the mentor.' },
      { q: 'Can adults take the classes?', a: 'Yes. Adults study in adult-only groups or one to one, most often Python, data analysis or AI agents, at hours that fit their work.' },
      { q: 'What device does my child need?', a: 'A tablet is enough for block coding at six or seven. From about nine, a laptop or desktop is best, because the learner types and runs code. The free class includes a short check of sound, screen and connection.' },
      { q: 'How do we pay?', a: 'By card, once a month, in US dollars; the soles amount is set by your bank. Visitors from India see the fee in rupees, everyone else in dollars, and the first class costs nothing.' },
      { q: 'Is there a certificate at the end?', a: 'Some courses end with a Modern Age Coders certificate of completion. That document is ours alone: no Peruvian qualification comes with it, and MINEDU, the regional government and schools play no part in issuing or backing it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More on this site',
    h2: 'Related pages',
    lede: 'Further reading for learners and families across the Arequipa region.',
    items: [
      { href: '/coding-classes-in-arequipa-peru', label: 'Coding classes in Arequipa city', p: 'The city page, with its tourist-inventory project.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'All our Peru guides and the school system at a glance.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'How teenagers learn to build and test AI.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Age-appropriate AI builds for children.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'For anyone starting later in life.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one of our live lessons.' }
    ]
  },

  start: {
    h2: 'Book a free class from anywhere in the Arequipa region',
    lede: 'The trial is a short puzzle and a first small program, with a check of the learner\'s device. From that, the mentor proposes a course and a group, or private lessons if they would suit better.',
    readFirst: 'For a closer look first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse every syllabus on the <a class="ag-inline-link" href="/courses">courses</a> page.',
    note: 'Every lesson happens live over video, in English, with a mentor based in India. A WhatsApp message written in English gets the quickest reply.',
    formNote: 'Free, without a card, and with no commitment.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Explore', links: [
        { href: '/coding-classes-in-arequipa-peru', label: 'Arequipa city' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Estrategias contains ia. It is not about AI.'
  },

  personalityCss: `
.ag-root.ag-caar .ag-hero h1 { letter-spacing: -0.016em; max-width: 24ch; }
.ag-root.ag-caar .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-caar .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-caar .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-caar .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro N° 1) and Directorio de Centros Poblados 2017; INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); GORE Arequipa notes of 21 October 2026 (PER 2026 to 2036) and 4 November 2026 (UGEL La Joya kits); Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores; EF EPI 2025; tz database. Data: GORE Arequipa, Proyectos Cofinanciados por ProInnovate en Arequipa, ODC-By.',
    localProject: 'How many of Arequipa\'s innovation projects are really about AI? An original Python project on the GORE Arequipa ProInnovate projects dataset (ODC-By, 368 projects 2019 to 2024): Version 1 searches titles for the letters "ia" and finds 158, the first being a marketing project caught by "estrategias"; Version 2 splits titles into words with a regular expression and finds 3 (one "IA", two "inteligencia artificial"), and lists the words that fooled Version 1. Lesson family: substring versus whole word.',
    requiredMentions: ['proinnovate-arequipa.csv', 'Titles that mention IA: 158', 'Titles about AI: 3', 'Words that fooled version 1:', '1,814,554', 'presentó el Proyecto Educativo Regional (PER) Arequipa', '16 technology kits', 'The Arequipa region scores 509', 'Estrategias contains ia. It is not about AI.'],
    sources: [
      { claim: 'Department and province populations of Arequipa, 2025, and district figures.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'El Pedregal populated-centre figure, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto04.xlsx' },
      { claim: 'Proyecto Educativo Regional Arequipa 2026 to 2036, presented 21 October 2026.', url: 'https://www.gob.pe/institucion/regionarequipa/noticias/1460951-gobierno-regional-de-arequipa-presento-el-proyecto-educativo-regional-2026-2036' },
      { claim: '16 technology kits for rural schools of the UGEL La Joya, 4 November 2026.', url: 'https://www.gob.pe/institucion/regionarequipa/noticias/1469909-instituciones-educativas-rurales-de-la-ugel-la-joya-reciben-kits-tecnologicos-para-fortalecer-los-aprendizajes' },
      { claim: 'Computers, internet and internet use in Arequipa and Peru, 2022 and 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'ProInnovate projects dataset for Arequipa and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/proyectos-cofinanciados-por-proinnovate-en-arequipa' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores, Python and PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'EF EPI 2025 scores for Peru and the Arequipa region.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without daylight saving.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any project amount from the ProInnovate file: never printed.',
      'That only three projects use AI: the page says only three titles name it.',
      'Reusing the city page\'s dataset, table, ENLA quote, robotics section or contest table: avoided on purpose.',
      'Names of the two pilot schools or of officials in the GORE notes: left out.',
      'Any connection with GORE Arequipa, the GRE, ProInnovate, MINEDU or any school: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
