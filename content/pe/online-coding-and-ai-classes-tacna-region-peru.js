// SHIP: market (region) | Tacna: a border city region, better-equipped homes, two universities, low-band English | two classifiers compared: a keyword rule against the official category, a 2x2 table of agreement
'use strict';
// Online coding and AI classes, Tacna region, Peru (ag- region page, Peru cluster row PE180; alloc: regions, catr, #664600).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: flexible hours; USD only via
// data-price anchors.
// Spine: Tacna is almost all city: the province of Tacna holds 367,437 of the department's 389,226 people, and the biggest
// district is Gregorio Albarracín, not the historic centre. Homes are much better equipped than in most regions (42.4% with a
// computer), EF scores the region 476 (low band), and two universities are licensed there. So the page leads with
// secundaria, university and working learners, and the project asks a question a Tacna student might ask: how many computing
// programmes are on offer here? Two honest methods give different answers.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-tacna-region-peru/
// and the shared ../src/inei/ folder):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1: TACNA 389226; provinces TACNA 367437, CANDARAVE
//    5797, JORGE BASADRE 10262, TARATA 5730; districts CORONEL GREGORIO ALBARRACÍN LANCHIPA 124652, TACNA 116625, CIUDAD NUEVA
//    34236, ALTO DE LA ALIANZA 33865, POCOLLAY 23844, LA YARADA LOS PALOS 14986. Capital Tacna (Compendio 2026 cuadro 1.8).
//    Never summed.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Tacna city 286,240 (2017). Lib1541 dpto23 (single centro poblado, 2017):
//    ALFONSO UGARTE 110115 (district Coronel Gregorio Albarracín Lanchipa), TACNA 86977, LA ESPERANZA 32899 (Alto de la
//    Alianza), CIUDAD NUEVA 31501.
//  - INEI Compendio Estadístico Perú 2026 tomo 1 (ENAHO): 11.5 Tacna "37,5 39,3 39,0 47,1 47,6 47,3 44,4 44,2 44,6 44,3
//    42,4"; 11.6 "27,0 35,5 39,3 44,0 52,3 56,8 60,6 66,2 63,9 62,5 60,9"; 11.13 "46,8 52,1 55,2 62,1 68,5 74,1 78,0 79,9
//    82,8 82,3 84,5" (2015 to 2025). Peru 2025: 33,9 / 56,8 / 81,1.
//  - EF EPI 2025 (ef_peru.raw): "border-epi-low"><span data-state="tacna">Tacna</span><span>476</span>; Peru 519.
//  - DRE Tacna on gob.pe: 21 July 2025 (n 1218234): SUNAT's Intendencia de Aduana de Tacna donated "seiscientos dieciséis
//    (616) bienes muebles patrimoniales dados de baja" under "Resolución de Intendencia Nacional N°000288-2025-SUNAT/8B0000",
//    computers for schools of "las UGEL Tacna, Tarata, Candarave y Jorge Basadre". 29 November 2024 (n 1077143): "un total de
//    32 proyectos tecnológicos" at the "Feria Tecnológica en Competencias Digitales, Inteligencia Artificial y Robótica
//    Educativa", "30 stands". 15 July 2025 (n 1210713): conversatorio towards "la elaboración del currículo regional de
//    Tacna". Officials' and schools' names not printed.
//  - Ley 28044, Edades normativas, CNEB competency 28 and JER hours, MINEDU 2026 opening, Fábrica de Programadores, ONEM
//    2026, OPI (FACTS 5, 6, 13, 14, 17, 32, 33, 39, 45, 99, 105, 111). Time: tzdata.
//  - Data: SUNEDU, "SUNEDU - Programas Académicos", datosabiertos.gob.pe, "Open Data Commons Attribution License" (ODC-By),
//    created 8 January 2020, modified 13 October 2026; description "Presenta información de los programas académicos por sede
//    y local de las universidades licenciadas". File Programas de Universidades_8.csv (saved as programas-universidades.csv),
//    2,649,082 bytes, Latin-1, pipe-separated, 8,112 rows, FECHA_CORTE 20240828 on every row. Tacna rows
//    (DEPARTAMENTO_LOCAL TACNA): 169; UNIVERSIDAD PRIVADA DE TACNA 88 (PRIVADO), UNIVERSIDAD NACIONAL JORGE BASADRE GROHMANN 81
//    (PÚBLICO); PREGRADO 63, POSGRADO 106; DISTRITO_LOCAL TACNA 95, POCOLLAY 74. Every GORE Tacna dataset we checked (border
//    trade, agriculture yearbook, procurement, environment) shows "License Not Specified", so none is used; health datasets
//    were not considered.
// Our own calculations (scratchpad pe/r4/ta/v1.py, v2.py, python3 -I):
//  v1 prints: "Programme rows in Tacna: 169" / "Computing, by keyword: 9".
//  v2 prints four "Disagree:" lines (SEGUNDA ESPECIALIDAD EN INGENIERÍA DE TELECOMUNI | INFORMÁTICA; EDUCACIÓN SECUNDARIA
//    ESPECIALIDAD: MATEMÁTICA, F | EDUCACIÓN SECUNDARIA; EDUCACIÓN: MATEMÁTICA, COMPUTACIÓN E INFORMÁTICA | OTROS PROGRAMAS EN
//    EDUCACIÓN; SEGUNDA ESPECIALIDAD EN ORDENAMIENTO-ACONDICIONA | NINGUNO) then "Both say computing: 6" / "Keyword only: 3" /
//    "Class only: 1" / "Neither: 159".
// Lesson family: two ways to classify the same rows (a keyword rule and the publisher's category), compared in a 2x2
// agreement table with Counter keyed by a pair of booleans, then reading the disagreements one by one.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'WORDS = ("INFORM", "SISTEMAS", "COMPUTA", "SOFTWARE")',
  '',
  'with open("programas-universidades.csv", encoding="latin-1", newline="") as f:',
  '    tacna = [r for r in csv.DictReader(f, delimiter="|") if r["DEPARTAMENTO_LOCAL"] == "TACNA"]',
  '',
  'hits = [r for r in tacna if any(w in r["DENOMINACION_PROGRAMA"] for w in WORDS)]',
  'print("Programme rows in Tacna:", len(tacna))',
  'print("Computing, by keyword:", len(hits))'
].join('\n');

const V2 = [
  'import csv',
  'from collections import Counter',
  '',
  'WORDS = ("INFORM", "SISTEMAS", "COMPUTA", "SOFTWARE")',
  '',
  'with open("programas-universidades.csv", encoding="latin-1", newline="") as f:',
  '    tacna = [r for r in csv.DictReader(f, delimiter="|") if r["DEPARTAMENTO_LOCAL"] == "TACNA"]',
  '',
  'table = Counter()',
  'for r in tacna:',
  '    by_word = any(w in r["DENOMINACION_PROGRAMA"] for w in WORDS)',
  '    by_class = r["NOMBRE_CLASE_PROGRAMA_N2"] == "INFORMÁTICA"',
  '    table[by_word, by_class] += 1',
  '    if by_word != by_class:',
  '        print("Disagree:", r["DENOMINACION_PROGRAMA"][:48], "|", r["NOMBRE_CLASE_PROGRAMA_N2"])',
  '',
  'print("Both say computing:", table[True, True])',
  'print("Keyword only:", table[True, False])',
  'print("Class only:", table[False, True])',
  'print("Neither:", table[False, False])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Tacna region' },
  slug: 'online-coding-and-ai-classes-tacna-region-peru',
  code: 'catr',
  accent: '#664600',
  accentRationale: 'Tacna region: a dark olive-oil bronze #664600, the olive groves of La Yarada and the old vineyards of Pocollay, allocated to this row; contrast 8.12 on #FBF8F2, 7.63 on #F5F1E8 and 6.98 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Tacna region, Peru',
  title: 'Tacna Region, Peru: Online Coding and AI Classes in English',
  description: 'Live online coding and AI classes in English for Tacna, Peru: who they suit, census and home-computer data, and a Python project on university programmes.',
  ogDescription: 'Coding, AI and maths for learners in Tacna city, Gregorio Albarracín, Ciudad Nueva, Pocollay and the highland provinces, taught live online in English: four provinces in 2025 census figures, honest notes on English, and a Python project on SUNEDU\'s list of university programmes.',
  twitterDescription: 'Tacna, live online coding in English: who it suits, census and device facts, a Python project on university programmes.',
  pageName: 'Online Coding and AI Classes in the Tacna Region',
  webPageDescription: 'A guide for learners in the Tacna region of Peru to live online coding and AI classes taught in English, built from INEI census and ENAHO tables, DRE Tacna notes, EF EPI 2025, MINEDU curriculum sources and an original Python project on SUNEDU\'s open list of academic programmes (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Tacna region of Peru: block coding and maths for children, Python, Java, web and app development for secundaria students, Python, Java, data and AI agents for university students and professionals, in a group of fifteen to twenty or one to one, at hours the learner sets.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Tacna region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#who', label: 'Who it suits' },
    { href: '#census', label: 'Population' },
    { href: '#programmes', label: 'Data project' },
    { href: '#online', label: 'At home' },
    { href: '#when', label: 'Times' }
  ],
  eyebrow: 'Tacna region &middot; Live online, in English &middot; Secundaria, university and work',
  h1: 'Online coding and AI classes in the Tacna region',
  lede: 'Nearly everyone in the Tacna region lives in or around the city, from the old centre to Gregorio Albarracín, Ciudad Nueva, Alto de la Alianza and Pocollay, with a small population up in Tarata and Candarave. Homes here are better equipped than in most of Peru, and our classes, taught live online in English, fit many teenagers and adults well. This page sets out the facts, is honest about English, and uses SUNEDU\'s list of university programmes for a lesson in comparing two ways of counting the same thing.',
  secondaryCta: { href: '#programmes', label: 'Read the programmes project' },
  wa: 'Hello Modern Age Coders, I am in Tacna, Peru, and I am interested in your live coding classes in English for myself or my child. Could we arrange a free class?',
  heroNote: 'Live online since 2020 &middot; over 10,000 students in many countries &middot; patient with learners whose English is still growing',
  spec: [
    ['Strong fit', 'Secundaria students, university students and professionals'],
    ['Children', 'Welcome from six, often one to one'],
    ['Language', 'English only, clear and steady'],
    ['Formats', 'Fifteen to twenty in a group, or private'],
    ['Schedule', 'Any hour that suits'],
    ['First step', 'A free trial class with honest advice']
  ],
  capsuleQ: 'In brief',
  capsule: 'Learners in the Tacna region of Peru, in Tacna city, Gregorio Albarracín, Ciudad Nueva, Alto de la Alianza, Pocollay or the highland provinces, can take live online coding, AI and maths classes in English with Modern Age Coders. Secundaria students, university students and working adults who read some English fit best: Python, Java, web and app development, data, and AI agents for adults, guided by a mentor in real time. Six year olds and older children start with blocks, frequently in private lessons. Classes run as a group of fifteen to twenty or one to one, scheduled around the learner, and trying the first one costs nothing.',

  picks: {
    eyebrow: 'Popular first choices in Tacna',
    h2: 'Three courses Tacna learners often start with',
    lede: 'One each for teenagers, university students and working adults, the three groups who usually settle fastest into English-taught lessons.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'TAC / 01', title: 'Python for Teens', note: 'Secundaria pupils with no experience begin here. Short programs built from plain English keywords make Python the gentlest typed language to learn first.' },
      { course: 'complete-java-programming-masterclass-college', code: 'TAC / 02', title: 'Java for University Students', note: 'For engineering and systems students. Core Java to Spring Boot, matched to what university courses expect.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'TAC / 03', title: 'AI Coding Agents for Professionals', note: 'For working adults aged 18 and over. Use Codex and Claude Code to plan, write and check software, while staying in charge of the result.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'First things first',
      h2: 'Who in Tacna are English-taught online classes right for?',
      lede: 'Mostly teenagers, university students and adults who already read some English, and children whose parents can sit nearby at first. Lessons happen live on a video call and are delivered only in English; Spanish is never the teaching language.',
      body: [
        { kind: 'two',
          leftH3: 'English in Tacna',
          left: [
            'In EF\'s English Proficiency Index 2025 the Tacna region scores 476, in EF\'s low band, a little below Peru\'s national 519, which EF rates moderate.',
            'That is a picture of the average adult who took EF\'s test, not of your family. Many Tacna teenagers follow English well, and the free class shows where an individual learner stands.'
          ],
          rightH3: 'Who usually does well',
          right: [
            'Secundaria students who want programming and better English from the same hour. Students at Tacna\'s two universities, who read English in software, research papers and manuals. Professionals who want AI and coding skills for their work.',
            'Children of six to nine can join too, most often one to one, where the mentor can repeat, demonstrate and wait, and the child can answer by building on the screen.'
          ] },
        { kind: 'p', mt: true, html: 'Think of the free class as a fair trial. The mentor gives a small task in simple English and sees how the learner responds. Where English is still too steep a climb, the mentor says so openly and proposes another route, such as individual lessons or waiting a few months. For a Spanish-language explanation for parents of younger children, see <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">clases de programación para niños, en español</a>; working adults may prefer <a class="ag-inline-link" href="/ai-and-coding-for-professionals-peru">AI and coding for professionals in Peru</a>.' }
      ]
    },
    {
      id: 'census',
      tint: 'tint',
      eyebrow: 'Four provinces',
      h2: 'How many people live in the Tacna region?',
      lede: 'The 2025 census counted 389,226 people in the department of Tacna. The province of Tacna alone holds 367,437, which makes this one of Peru\'s most urban regions.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Tacna department by province, census population 2025', head: ['Province', 'Population'], rows: [
          ['Tacna (capital: Tacna)', '367,437'],
          ['Jorge Basadre', '10,262'],
          ['Candarave', '5,797'],
          ['Tarata', '5,730'],
          ['Department of Tacna', '389,226']
        ] },
        { kind: 'source', html: 'INEI, Censos Nacionales 2025: Cuadro N° 1 of the national demographic-indicators workbook, total population including people estimated as missed, on 15 September 2025. The department total is INEI\'s own figure, not one we added up.' },
        { kind: 'two', mt: true,
          leftH3: 'The city and its districts',
          left: [
            'INEI counted 286,240 people in the city of Tacna in the 2017 census. In 2025 its largest district was Coronel Gregorio Albarracín Lanchipa with 124,652 people, ahead of the district of Tacna itself with 116,625.',
            'Ciudad Nueva had 34,236 people in 2025, Alto de la Alianza 33,865 and Pocollay 23,844. In 2017 the populated centre of Alfonso Ugarte, in Gregorio Albarracín, counted 110,115 people, more than the 86,977 of central Tacna.'
          ],
          rightH3: 'Beyond the city',
          right: [
            'La Yarada Los Palos had 14,986 people in 2025. The other three provinces are small: Jorge Basadre, around Locumba and Ilabaya, had 10,262, and the highland provinces of Candarave and Tarata 5,797 and 5,730.',
            'The 2017 city and populated-centre figures and the 2025 district figures are different measures from different years, so we never add them together.'
          ] }
      ]
    },
    {
      id: 'programmes',
      eyebrow: 'A Tacna data project',
      h2: 'How many computing degrees can you study in Tacna?',
      lede: 'It depends on how you decide what counts as computing, and a short program shows that two sensible methods disagree. The data is SUNEDU\'s open list of the programmes offered by Peru\'s licensed universities.',
      body: [
        { kind: 'two',
          leftH3: 'The dataset',
          left: [
            'SUNEDU, the national university regulator, publishes "SUNEDU - Programas Académicos" on datosabiertos.gob.pe under an Open Data Commons Attribution licence (ODC-By), which allows reuse, commercial included, with credit. SUNEDU describes it as the academic programmes of licensed universities "por sede y local".',
            'Our copy, programas-universidades.csv, has 8,112 rows for all of Peru, every one stamped with a cut-off of 28 August 2024, although the dataset page was last modified on 13 October 2026. Filtering for premises in the department of Tacna leaves 169 rows from two universities, 63 undergraduate and 106 postgraduate.'
          ],
          rightH3: 'Two ways to decide',
          right: [
            'Method one, a keyword rule: call a programme computing if its name contains INFORM, SISTEMAS, COMPUTA or SOFTWARE. Quick, and close to how a person skims a list.',
            'Method two, the publisher\'s category: SUNEDU puts each programme in a field, and one field is INFORMÁTICA. Slower to understand, but decided by someone who looked at each programme. A careful analyst runs both and compares.'
          ] },
        { kind: 'code', label: 'Version 1: count by keyword', lang: 'Python', code: V1, note: 'It prints: <code>Programme rows in Tacna: 169</code> and <code>Computing, by keyword: 9</code>.' },
        { kind: 'p', mt: true, html: 'Nine looks like an answer. But a keyword rule is a classifier, and every classifier makes mistakes; the question is which ones. Version 2 runs both methods on every row, keeps a tally keyed by the pair of answers, and prints each row where they disagree.' },
        { kind: 'code', label: 'Version 2: compare the rule with the category', lang: 'Python', code: V2, note: 'It prints four lines starting <code>Disagree:</code>, then <code>Both say computing: 6</code>, <code>Keyword only: 3</code>, <code>Class only: 1</code> and <code>Neither: 159</code>.' },
        { kind: 'p', mt: true, html: 'A <code>Counter</code> can be keyed by a tuple, so <code>table[by_word, by_class]</code> keeps four counts at once, one for each combination of True and False. Six rows are computing by both methods. Three are caught only by the keywords: two teacher-training degrees whose names include computación alongside mathematics, which SUNEDU files under education, and a second specialisation in territorial planning and geographic information systems, matched because of the word SISTEMAS. One row is computing only by category: a second specialisation in telecommunications engineering, whose name contains none of the keywords. Neither method is wrong; they answer slightly different questions, and only reading the four disagreements tells you which one fits yours.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Tacna programme rows: keyword rule against SUNEDU category (our calculation, data cut-off 28 August 2024)', head: ['', 'Category INFORMÁTICA', 'Other category'], rows: [
          ['Keyword found', '6', '3'],
          ['No keyword', '1', '159']
        ] },
        { kind: 'source', html: 'Data: SUNEDU, Programas Académicos, ODC-By, rows with DEPARTAMENTO_LOCAL equal to TACNA. The keyword list and every count are ours. A row is one programme at one set of premises, and the list includes postgraduate and second-specialisation programmes, so it is not a count of undergraduate degrees.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8.</strong> Sort a pile of toys into "has wheels" and "is a car". Find a toy that has wheels but is not a car, and one that is a car but is drawn without wheels.',
          '<strong>Ages 8 to 11, in Scratch.</strong> Make a list of ten words and a rule that says "yes" if a word contains "ball". Which words fool it?',
          '<strong>Ages 11 to 13.</strong> Add "TELECOM" to the keyword tuple and run Version 2 again. Which disagreement disappears, and does a new one appear?',
          '<strong>Teenagers.</strong> Restrict both methods to undergraduate rows (TIPO_NIVEL_ACADEMICO equal to PREGRADO). How many computing degrees does each method find now?',
          '<strong>University and adults.</strong> Run the comparison for every department in Peru and rank departments by how often the two methods disagree.'
        ] },
        { kind: 'p', mt: true, html: 'The same thinking applies to AI. A model that labels things is a classifier too, and checking it against a trusted label, then reading the mistakes, is how you learn when to rely on it. Teenagers who want to go further can look at <a class="ag-inline-link" href="/coding-classes-for-teens-peru">our page on coding classes for teens in Peru</a>.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'School and the region',
      h2: 'Do Tacna schools teach programming?',
      lede: 'Not as a timetable subject. Tacna follows the national curriculum, which expects digital skills to be developed inside every area, and the regional education office has been working on equipment, technology fairs and a regional curriculum.',
      body: [
        { kind: 'two',
          leftH3: 'The national framework',
          left: [
            'Ley 28044 sets primaria at six years and secundaria at five. MINEDU fixes a normative age per grade, counted on 31 March: six for first grade of primaria, sixteen for fifth of secundaria.',
            'The CNEB\'s ICT competency, number 28, is transversal, meaning no single area owns it. Of the 35 weekly hours in regular secundaria, four go to Matemática and three to Inglés; none is labelled programming.'
          ],
          rightH3: 'What the DRE Tacna has reported',
          right: [
            'On 29 November 2024 the Dirección Regional de Educación Tacna held a technology fair on digital skills, artificial intelligence and educational robotics, with 32 student projects on 30 stands from its four UGELs.',
            'On 21 July 2025 it received 616 retired items of equipment, mainly computers, donated by SUNAT\'s customs office in Tacna, to be checked and passed to schools in the UGELs of Tacna, Tarata, Candarave and Jorge Basadre. Earlier that month it began consultations towards a regional curriculum for Tacna.'
          ] },
        { kind: 'p', mt: true, html: 'Fábrica de Programadores, the ministry\'s Python scheme for older secundaria pupils, launched in Lima Norte in July 2025 for a first cohort of 1,000, and nothing we read places it in Tacna so far. Olympiads are a different story: ONEM 2026 opened with a school round on 8 July 2026 involving over 1.7 million pupils across Peru, and UTEC charges nothing for its computing olympiads. We are not connected with the DRE, SUNEDU, MINEDU, UTEC, either university or any contest, and our problems are our own.' }
      ]
    },
    {
      id: 'online',
      eyebrow: 'Devices',
      h2: 'How well connected are homes in Tacna?',
      lede: 'Better than the Peruvian average. In 2025, 42.4 per cent of Tacna homes had a computer against 33.9 per cent nationally, and 84.5 per cent of residents from age six upwards were internet users.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Tacna and Peru: computers and internet, ENAHO (per cent)', head: ['Indicator', 'Tacna 2022', 'Tacna 2025', 'Peru 2025'], rows: [
          ['Computer in the home', '44.2', '42.4', '33.9'],
          ['Internet service in the home', '66.2', '60.9', '56.8'],
          ['Share of people 6+ who go online', '79.9', '84.5', '81.1']
        ] },
        { kind: 'source', html: 'Figures from the ENAHO household survey as published by INEI in the 2026 statistical compendium (volume 1, tables 11.5, 11.6, 11.13), decimal commas turned into points.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table',
          left: [
            'Tacna is above the national figure on all three measures in 2025. Even so, home computers and home internet both dipped between 2022 and 2025, while personal internet use kept climbing.',
            'More than half of Tacna homes still have no computer, so it is worth checking before booking rather than assuming.'
          ],
          rightH3: 'What we ask for',
          right: [
            'For the youngest, a tablet is fine for dragging blocks. Typed code, usually from nine or so, needs a laptop or desktop for most of the hour.',
            'Phones are fine for joining a call or reviewing notes, but not for writing programs. If no computer is available, the mentor will tell you honestly in the free class.'
          ] }
      ]
    },
    {
      id: 'choose',
      eyebrow: 'Choosing',
      h2: 'Which course should a learner in Tacna take first?',
      lede: 'Pick by age and English, then confirm the computer. The guide below is ours, and the age ranges are our course ranges.',
      body: [
        { kind: 'table', numCols: [], caption: 'First courses for Tacna learners (our suggestions)', head: ['Who is learning', 'Their English', 'Course to start', 'Set-up'], rows: [
          ['Child, 6 to 8', 'Beginning', 'Scratch, with puzzles', 'One to one'],
          ['Child, 8 to 12', 'A little from lessons', 'Coding for Kids, or Python and AI for kids', 'Group or one to one'],
          ['1° to 3° de secundaria', 'School level', 'Python for Teens', 'Group'],
          ['4° and 5° de secundaria', 'Reads with ease', 'Python, then Java, web or apps', 'Group'],
          ['University student', 'Reads technical English', 'Java, DSA or data science', 'Group or one to one'],
          ['Professional, 18 and over', 'Works with English', 'AI coding agents, or Python for beginners', 'Usually private']
        ] },
        { kind: 'source', html: 'Our suggestions. Grade placement follows MINEDU\'s age at 31 March, so classmates can be nearly a year apart in age.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Under twelve', p: 'Visual, playful lessons where every on-screen action is named in English.' },
          { h3: 'Secundaria', p: 'Typed code from the start; Python first, then Java, websites, apps or certification.' },
          { h3: 'University and work', p: 'Java, data and AI agents for systems and engineering students and for professionals.' }
        ] },
        { kind: 'p', mt: true, html: 'University students can read <a class="ag-inline-link" href="/coding-courses-for-university-students-peru">coding courses for university students in Peru</a>, and every Peru guide, English and Spanish, is listed on <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'when',
      eyebrow: 'Clock',
      h2: 'What time is it in India when it is morning in Tacna?',
      lede: 'Mid-to-late afternoon or evening. India is 10 hours 30 minutes ahead of Tacna all year, and the class hour is chosen by the learner.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example conversions, Tacna to India (not a timetable)', head: ['Tacna', 'India', 'Mentor\'s time'], rows: [
          ['06:15', '16:45', 'Afternoon'],
          ['08:00', '18:30', 'Evening'],
          ['09:45', '20:15', 'Evening'],
          ['12:30', '23:00', 'Late night'],
          ['17:15', '03:45', 'Early hours'],
          ['19:00', '05:30', 'Dawn']
        ] },
        { kind: 'source', html: 'Per the tz database, Peru (zone America/Lima) has stayed five hours behind UTC without summer time since 1994, and India keeps UTC plus five and a half hours. Neither changes its clocks.' },
        { kind: 'p', mt: true, html: 'Book in your own time zone and the hour stays fixed through the year. Schools went back for 2026 on 16 March; school-age learners often use the summer months of January to March to get going, while professionals start whenever their work allows.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'How a learner in Tacna progresses',
    lede: 'Our six stages, used for every age, so that families and adult learners can see what has been achieved and what is next.',
    table: { caption: 'Our stages, from first steps to comparing methods', head: ['Stage', 'Typical age', 'The learner can'], rows: [
      ['1. Follow', '6 to 7', 'Run a short sequence of steps on a sprite'],
      ['2. Repeat', '7 to 9', 'Replace copied steps with a loop'],
      ['3. Test', '8 to 10', 'Use if to react to what happens'],
      ['4. Build', '9 to 12', 'Write Python with lists, loops and functions'],
      ['5. Classify', '11 to adult', 'Write a rule that sorts rows into yes and no'],
      ['6. Compare', '13 to adult', 'Check a rule against a trusted label and explain the disagreements']
    ] },
    left: { h3: 'For families', ps: [
      'The programmes project works on stages 5 and 6. A learner who finishes it will ask "counted how?" whenever a number is quoted.',
      'Each month you hear what was built and explained.'
    ] },
    right: { h3: 'For learners', ps: [
      'A rule is only as good as its mistakes.',
      'Read the disagreements before choosing a method.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Tacna learners',
    lede: 'Three age bands, all live, in English, with a mentor who stays with the learner, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'TAC / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Blocks to games and simple apps.' },
        { code: 'TAC / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Turtle art, games and smart projects.' },
        { code: 'TAC / KIDS / 03', slug: 'middle-school-math-competitions-course', title: 'Maths competitions', blurb: 'Problem solving for contest-minded pupils.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'TAC / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects, classes and real programs.' },
        { code: 'TAC / TEEN / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'Mobile apps with React Native.' },
        { code: 'TAC / TEEN / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Algorithms for olympiad-style contests.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'TAC / ADULT / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Interview-ready problem solving.' },
        { code: 'TAC / ADULT / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Python, machine learning and models.' },
        { code: 'TAC / ADULT / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'From zero to automation and projects.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live online classes run for learners in Tacna',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning', l: 'A Tacna morning is the Indian afternoon or evening.' },
      { time: 'After class or work', l: 'Afternoon and evening hours in Peru also work.' },
      { time: 'Private', l: 'For tight schedules or English that needs time.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person, week after week.' },
      { h3: 'Steady English', p: 'Clear speech with key terms on screen.' },
      { h3: 'Learner types', p: 'Every program is written by the student.' },
      { h3: 'Ages apart', p: 'Children, teenagers and adults in separate groups.' },
      { h3: 'Straight talk', p: 'Families and adults hear real progress.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one learner alone.' }
    ]
  },

  projectsH2: 'What committed students go on to build',
  projectsLede: 'After a few months, students build working tools of their own. A few are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> collect more.',
  reviewsLede: 'Google reviews from parents and learners, exactly as written.',

  fees: {
    h2: 'Fees for learners in Tacna',
    lede: 'Plans are priced in US dollars and charged monthly to a card. Your bank converts the charge into soles at its rate on the day, so the soles figure can change slightly from one month to the next.',
    free: ['A free trial class', 'A check of English and computer', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar age', 'A regular mentor', 'Weekly live classes', 'Monthly, cancel any time'],
    one: ['One learner and one mentor', 'Pace set around the learner', 'Hours you pick']
  },

  faq: {
    eyebrow: 'Tacna asks',
    h2: 'Online coding and AI classes in Tacna: frequent questions',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our teaching is live, online and entirely in English. The mentor keeps a calm, clear voice, adjusts to how fast the learner goes and how they sound, and turns a Spanish reply into English together with them, yet never teaches in Spanish.' },
      { q: 'How does EF rate English in Tacna?', a: 'EF\'s 2025 index scores the Tacna region at 476, in its low band, below the national 519. It is an average; the free class tells us about your child or you.' },
      { q: 'We live in Gregorio Albarracín, Ciudad Nueva or Pocollay. Can we join?', a: 'Yes, from any district, and from Tarata, Candarave or Jorge Basadre too. All that matters is a connection that lasts the lesson and a suitable device.' },
      { q: 'Does a learner need a computer?', a: 'For typed programming, yes, from about nine. Younger children can start block coding on a tablet. A phone works for joining a call but not for writing code.' },
      { q: 'When are classes held?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India stays 10 hours 30 minutes ahead of Tacna whatever the month: 08:00 in Tacna means 18:30 in India.' },
      { q: 'Do Tacna schools teach coding?', a: 'There is no coding subject. Peru\'s curriculum spreads digital skills through every area, and the standard secundaria timetable reserves no hours for programming.' },
      { q: 'What do university students in Tacna get from these classes?', a: 'Usually a lot. Java, data structures, data science and Python taught in English support engineering and systems degrees, where most documentation is already in English.' },
      { q: 'Can adults learn AI agents with you?', a: 'Yes. Adults aged 18 and over can take our course on AI coding agents such as Codex and Claude Code, learning to plan, review and test what the agent produces. Teenagers learn AI through courses suited to their age.' },
      { q: 'How is payment made?', a: 'A card payment each month, set in US dollars, which your bank changes into soles. Browsing from India shows rupees instead. There is nothing to pay for the trial class.' },
      { q: 'Is there a certificate?', a: 'Some courses end with our own certificate of completion, which lists the learner\'s projects. SUNEDU, MINEDU, the DRE and universities play no part in issuing or endorsing it, and it is not a Peruvian qualification.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More pages for learners in Tacna',
    lede: 'Guides that go deeper by age or subject.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The Peru hub, with every guide listed.' },
      { href: '/ai-and-coding-for-professionals-peru', label: 'AI and coding for professionals', p: 'For working adults in Peru.' },
      { href: '/coding-classes-for-teens-peru', label: 'Coding classes for teens in Peru', p: 'Routes for secundaria students.' },
      { href: '/coding-courses-for-university-students-peru', label: 'Courses for university students', p: 'Java, Python and DSA in English.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits for common AI tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live lesson.' }
    ]
  },

  start: {
    h2: 'Book a free class from Tacna',
    lede: 'In the trial, the learner solves one small puzzle, writes a first program and chats briefly in plain English. You then get the mentor\'s honest view: start now or later, which course, and group or individual lessons.',
    readFirst: 'If you would like to read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson and <a class="ag-inline-link" href="/courses">our courses</a> lists every syllabus.',
    note: 'Mentors teach from India, live and online, in English. For a fast answer, send us a WhatsApp in English.',
    formNote: 'Free, with no card and no obligation.'
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
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Counted how? Read the disagreements'
  },

  personalityCss: `
.ag-root.ag-catr .ag-hero h1 { letter-spacing: -0.009em; max-width: 20ch; }
.ag-root.ag-catr .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-catr .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-catr .ag-table caption { text-align: left; font-weight: 500; font-style: italic; }
.ag-root.ag-catr .ag-code-head b { letter-spacing: 0.07em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro N° 1), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017; INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); DRE Tacna notes of 29 November 2024, 15 July 2025 and 21 July 2025; Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, ONEM 2026; UTEC OPI; EF EPI 2025; tz database. Data: SUNEDU, Programas Académicos, ODC-By.',
    localProject: 'How many computing degrees can you study in Tacna? An original Python project on SUNEDU\'s open list of academic programmes (ODC-By, data cut-off 28 August 2024): Version 1 finds 9 of 169 Tacna rows by keyword; Version 2 compares the keyword rule with SUNEDU\'s INFORMÁTICA category in a 2x2 table (6 both, 3 keyword only, 1 category only, 159 neither) and prints the four disagreements. Lesson family: two classifiers compared.',
    requiredMentions: ['programas-universidades.csv', 'Programme rows in Tacna: 169', 'Computing, by keyword: 9', 'Both say computing: 6', '389,226', 'scores 476', '616 retired items', 'Counted how? Read the disagreements', '32 student projects'],
    sources: [
      { claim: 'Department, province and district populations of Tacna, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Tacna city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Alfonso Ugarte and Tacna populated-centre figures, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto23.xlsx' },
      { claim: 'Computers, internet service and internet use in Tacna and Peru, 2022 and 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'EF EPI 2025 Tacna and Peru scores.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'DRE Tacna technology fair, 29 November 2024.', url: 'https://www.gob.pe/institucion/regiontacna-dre/noticias/1077143-escolares-presentan-proyectos-innovadores-en-feria-tecnologica' },
      { claim: 'Computers donated by SUNAT customs in Tacna, 21 July 2025.', url: 'https://www.gob.pe/institucion/regiontacna-dre/noticias/1218234-direccion-de-educacion-recibe-equipos-de-computo-donados-por-intendencia-de-aduanas' },
      { claim: 'Consultation towards a regional curriculum for Tacna, 15 July 2025.', url: 'https://www.gob.pe/institucion/regiontacna-dre/noticias/1210713-direccion-de-educacion-iniciara-la-elaboracion-de-un-curriculo-regional-para-tacna' },
      { claim: 'SUNEDU academic programmes dataset, ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/sunedu-programas-acad%C3%A9micos' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ONEM 2026 national participation.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'Peru time UTC-5 without daylight saving.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'GORE Tacna open datasets (border trade, agriculture yearbook, procurement, environment): all show "License Not Specified", so none is used.',
      'Any health, migration or gender-violence dataset from Tacna: not considered.',
      'Treating the 169 rows as 169 degrees: rows are programmes per premises, including postgraduate ones, and the page says so.',
      'Present-day programme counts: the file is cut at 28 August 2024 and is described as such.',
      'Any ranking or quality judgement of the two universities: none made.',
      'Combining 2017 city or populated-centre figures with 2025 district figures: refused.',
      'Officials\' and schools\' names in the DRE notes: not printed.',
      'Any connection with SUNEDU, either university, the DRE, MINEDU, UTEC or any school: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
