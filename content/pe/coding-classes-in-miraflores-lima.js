// SHIP: market (en district, Lima) | Miraflores, English-reading families: a class that runs through the school calendar | CSV: a comma inside quotes is data; split(",") breaks it, csv.reader does not
'use strict';
// Coding classes in Miraflores, Lima (ag- English district page, Peru cluster row PE052, hubGroup cities; alloc comi,
// #921F3C). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// ("City and district pages"). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible at any hour. Fees only through the template's data-price anchors (USD).
// Audience: English-reading households in Miraflores: pupils at bilingual, Cambridge and IB schools, families on a
// posting or newly arrived, and adults who work in English.
// Spine: one live class that keeps going through Peru's 2026 school calendar (RM 501-2025-MINEDU Tabla 1): when to
// start, what happens in the management weeks and the long summer, and why that is easier online than across Lima.
// Different from the two Spanish Miraflores pages: vacaciones-utiles-de-programacion-miraflores-lima (council summer
// programmes by age, table of municipal programmes; lesson: and/or range check) and clases-de-programacion-miraflores
// (life stages, age table; lesson: f-string format specs; live by the end of 10 Nov 2026 and linked).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-classes-in-miraflores-lima/):
//  - INEI, Censos Nacionales 2025, Lima Metropolitana indicators (inei-censos2025-ind_27-lima-metropolitana.xlsx;
//    extracted inei/sheet2_CUADRO_N_1.tsv): "DISTRITO MIRAFLORES 126049 58214 67835 121203 55860 65343 4846 2354 2492";
//    "LIMA METROPOLITANA 10141775"; 43 rows beginning "DISTRITO ". (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO MIRAFLORES
//    121203 4906 6204 6575 15698 31906 26014 29900" (groups 0 a 5, 6 a 11, 12 a 17, 18 a 29, 30 a 44, 45 a 59, 60 y más).
//  - RM 501-2025-MINEDU, Norma Técnica para el Año Escolar 2026 (rm501-2025-pdf/text.txt, Tabla 1 checked by eye on
//    rm501-2025-pdf/page11-checked-by-eye.png): "Del 2 al 13 de marzo", "Del 16 marzo al 15 de mayo", "Del 18 al 22 de
//    mayo", "Del 25 mayo al 24 de julio", "Del 27 julio a 7 de agosto", "Del 10 agosto al 9 de octubre", "Del 12 al 16 de
//    octubre", "Del 19 octubre a 18 de diciembre", "Del 21 al 31 de diciembre"; "treinta y seis (36) semanas lectivas y
//    ocho (08) semanas de gestión"; "ciento sesenta (160) días lectivos"; "Semanas de gestión: Período destinado al
//    trabajo colegiado o individual del personal"; DRE/UGEL "tienen la potestad de definir una distribución de semanas
//    lectivas y de gestión distinta a la sugerida" (FACTS 25).
//  - MINEDU news, 16 March 2026 (n-inicio2026/text.txt): "53 631 colegios de Educación Básica Regular de todo el país
//    volvieron a abrir sus puertas para recibir a 6 225 000 estudiantes".
//  - CNEB (cneb/): competency 28 "Se desenvuelve en entornos virtuales generados por las TIC", "Competencias transversales
//    a las áreas"; no computing area in the plan de estudios (FACTS 32, 33, 39).
//  - EF EPI 2025 Peru page (ef_peru.raw): "cityScore":[{"slug":"lima","proficiencySlug":"high","score":555; Peru 519.
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, el 84,7% de los hogares disponía del
//    servicio"; computer "alcanzó el 53,3% en Lima Metropolitana"; footnote "Lima Metropolitana incluye la Provincia
//    Constitucional del Callao".
//  - Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
//  - Neighbouring districts, plain text: San Isidro, Surquillo, Santiago de Surco, Barranco; the Pacific to the west.
// Our own calculations (scratchpad pe/d5/calc.py, python3 -I): Miraflores 30 to 44 = 26.3% of people counted, 60 and
// over 24.7%, 6 to 11 5.1%, 12 to 17 5.4%; Lima Metropolitana 6 to 11 8.5%, 12 to 17 9.0%. 126049 / 10141775 = 1.24%.
// Code (scratchpad pe/d5/comi_v1.py, comi_v2.py, python3 -I), exact output:
//   v1: {'"Miraflores': 2, 'San Isidro': 1, 'Barranco': 1, 'Surquillo': 1} / Average age: 10.8 /
//       Fields per row: [3, 4, 3, 4, 3, 3]
//   v2: Fields per row: [3, 3, 3, 3, 3, 3] / {'Miraflores': 2, 'San Isidro': 1, 'Barranco': 1, 'Surquillo': 1} /
//       Ana lives in: Miraflores, Lima
// Lesson family: a comma inside a quoted CSV field is data, not a separator: split(",") miscounts the fields and leaves
// a stray quote, csv.reader reads the row; count the fields on every row before trusting a column.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'lines = [',
  '    \'learner,home,age\',',
  '    \'Ana,"Miraflores, Lima",9\',',
  '    \'Bruno,San Isidro,12\',',
  '    \'Carla,"Miraflores, Lima",15\',',
  '    \'Diego,Barranco,10\',',
  '    \'Elena,Surquillo,8\',',
  ']',
  '',
  'count = {}',
  'for line in lines[1:]:',
  '    parts = line.split(",")',
  '    count[parts[1]] = count.get(parts[1], 0) + 1',
  'print(count)',
  '',
  'ages = [int(line.split(",")[-1]) for line in lines[1:]]',
  'print("Average age:", sum(ages) / len(ages))',
  'print("Fields per row:", [len(line.split(",")) for line in lines])'
].join('\n');

const V2 = [
  'import csv',
  '',
  '# the same six lines as Version 1',
  'rows = list(csv.reader(lines))',
  'print("Fields per row:", [len(row) for row in rows])',
  '',
  'count = {}',
  'for learner, home, age in rows[1:]:',
  '    district = home.split(",")[0]',
  '    count[district] = count.get(district, 0) + 1',
  'print(count)',
  'print("Ana lives in:", rows[1][1])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Miraflores, Lima: classes in English' },
  slug: 'coding-classes-in-miraflores-lima',
  code: 'comi',
  accent: '#921F3C',
  accentRationale: 'Coding classes in Miraflores: a deep bougainvillea crimson #921F3C, the colour that spills over garden walls along the clifftop parks; contrast 7.98 on the paper #FBF8F2, 7.50 on #F5F1E8 and 6.86 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in Miraflores, Lima',
  title: 'Coding Classes in Miraflores, Lima: Live Online in English',
  description: 'Coding classes for Miraflores families and adults: live online in English, any hour, in a group or one to one, planned around the Peruvian school calendar.',
  ogDescription: 'Live coding, AI and computer science lessons in English for Miraflores: who they suit, how they run through Peru\'s 2026 school calendar, why online beats crossing Lima, and a Python lesson on a comma that breaks a file.',
  twitterDescription: 'Live coding classes in English for Miraflores, Lima: children, teenagers and adults, at any hour, all through the school year.',
  pageName: 'Coding Classes in Miraflores, Lima',
  webPageDescription: 'A guide for English-reading households in Miraflores, Lima, to live online coding classes taught in English, built from INEI Censos Nacionales 2025, the MINEDU norm for the 2026 school year (RM 501-2025-MINEDU), the CNEB, EF EPI 2025 and INEI household data, with an original Python lesson on reading CSV files.',
  courseDescription: 'Live online coding, AI and computer science classes taught in English for learners in Miraflores, Lima, from age 6 to adult: Scratch, Python, Java, AI and Cambridge or IB computer science, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Miraflores, Lima',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#who', label: 'Who it suits' },
    { href: '#calendar', label: 'School calendar' },
    { href: '#online', label: 'Why online' },
    { href: '#project', label: 'Python lesson' },
    { href: '#times', label: 'Miraflores times' }
  ],
  eyebrow: 'Miraflores, Lima &middot; Live online, in English &middot; Ages 6 to adult',
  h1: 'Coding classes in Miraflores, Lima',
  lede: 'Miraflores is one of the few places in Peru where a family can live much of its day in English, and many of the people who search for coding classes here want exactly that: lessons in the language of their school, their job or their previous country. This page explains who our live online classes suit, how they fit around the Peruvian school year from March to December, why a class at home makes more sense than a drive across Lima, and what a real lesson looks like.',
  secondaryCta: { href: '#calendar', label: 'See the school calendar' },
  wa: 'Hello Modern Age Coders, we live in Miraflores, Lima, and would like live coding classes in English. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; over 10,000 learners worldwide &middot; taught only in English, from India',
  spec: [
    ['For', 'Children from 6, teenagers, adults'],
    ['Taught in', 'English only, by live video'],
    ['School subjects', 'IGCSE and IB computer science'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Miraflores hours', 'Any day, at an hour you pick'],
    ['First class', 'Free; no card asked for']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders teaches coding to children, teenagers and adults in Miraflores, Lima, in live online classes taught in English. A real mentor, based in India, leads every lesson on video: Scratch from age 6, typed Python from about 9, then Java, AI, app building, and Cambridge IGCSE or IB Diploma computer science. Learners join a group of fifteen to twenty or study one to one, on any day and at whatever hour suits the household in Peru time, and the class carries on through school terms and holidays alike.',

  picks: {
    eyebrow: 'Where Miraflores learners start',
    h2: 'Three courses to begin with, one per stage of life',
    lede: 'A first Python course for children who are ready to type, the Cambridge computer science syllabus for IGCSE pupils, and a complete Python course for adults who work or study in English.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'COMI / 01', title: 'Python and AI for Kids', note: 'For children of about 9 to 12 who can read and type a little. Turtle drawings, small games and early AI projects, all in typed Python, with the mentor reading every line aloud in plain English before the child writes it.' },
      { course: 'igcse-computer-science-0478-course', code: 'COMI / 02', title: 'IGCSE Computer Science 0478', note: 'For pupils on the Cambridge route, from the first term of the syllabus to exam practice. Algorithms, pseudocode, data representation and programming, taught alongside the school, which sets and marks all assessed work.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'COMI / 03', title: 'Python Masterclass for Adults', note: 'For university students and working adults, starting from nothing. Scripts, files, data and automation, built step by step, at an hour that fits around an office day in Miraflores or San Isidro.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who it suits',
      h2: 'Who in Miraflores takes coding classes in English?',
      lede: 'Three groups, mostly. They share one need: they would rather learn a technical subject in the language they already use for school or work than translate it twice.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Pupils at bilingual and international schools', p: 'A child who studies science and maths in English is better served by a coding class in English, because the words for a loop, a list or an algorithm are the words their Cambridge or IB teachers will use. Our IGCSE and IB courses follow those syllabuses and leave the marking to the school.' },
          { h3: 'Families on a posting or newly arrived', p: 'Diplomatic, corporate and academic families often reach Lima mid-year from a school year that starts in September. A live online class can begin before the move, keep the same mentor through it, and keep running while the child settles into a Peruvian school calendar that starts in March.' },
          { h3: 'Adults who work in English', p: 'Many people who live in Miraflores work for international firms, embassies or universities, or freelance for clients abroad. Python, data analysis and AI agents, taught live in English, fit around a working day and add skills that travel with the learner.' }
        ] },
        { kind: 'p', mt: true, html: 'Spanish-speaking families are welcome too, and many choose these classes precisely because the English comes with the coding. Parents who prefer to read in Spanish can find a Miraflores summer guide on our page for <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-miraflores-lima">vacaciones útiles de programación en Miraflores</a>. Year-round classes for every age are described in Spanish on <a class="ag-inline-link" href="/clases-de-programacion-miraflores">clases de programación en Miraflores</a>. We should be clear about one thing at the outset: every class is taught in English, and no part of the lesson switches to Spanish.' }
      ]
    },
    {
      id: 'district',
      tint: 'tint',
      eyebrow: 'Miraflores in figures',
      h2: 'How many people live in Miraflores, and how many are of school age?',
      lede: 'INEI\'s census of 2025 puts the total population of Miraflores at 126,049, about 1.2% of the 10,141,775 people in the 43 districts of Lima Metropolitana. It is a district of working adults more than of children.',
      body: [
        { kind: 'two',
          leftH3: 'What the census shows',
          left: [
            'Of the 121,203 people the census actually counted in Miraflores (INEI adds 4,846 more it estimates were missed), 6,204 were aged 6 to 11 and 6,575 were aged 12 to 17. The largest group by far is adults of 30 to 44, at 31,906, followed by people aged 60 and over, at 29,900.',
            'By our own division, children of primary age are about 5.1% of the people counted in Miraflores, against 8.5% across Lima Metropolitana. Teenagers of 12 to 17 are about 5.4% in Miraflores and 9.0% across the capital. Women outnumber men, 67,835 to 58,214 in INEI\'s total.'
          ],
          rightH3: 'What that means for a class',
          right: [
            'A district with relatively few children of any one age is a district where a specialist class for a nine year old, taught in English, rarely fills a room nearby. Online, the batch is drawn from many places, so a Miraflores child joins a full group of children of the same age without anyone leaving home.',
            'The adult figures matter as much. With more than 31,000 people in their thirties and early forties, and nearly 30,000 over sixty, Miraflores has plenty of adults with a reason to learn: a career change, a project, or simply curiosity. Our oldest learners are in their sixties, and they join the same live classes.'
          ] },
        { kind: 'source', html: 'Source: INEI, Censos Nacionales 2025, demographic indicators for Lima Metropolitana, Cuadro N.° 1 (total, counted and omitted population by sex) and Cuadro N.° 3 (counted population by age group), downloaded 8 November 2026. Percentages are our own divisions of INEI\'s counted figures; we do not add age groups together into new totals.' },
        { kind: 'p', mt: true, html: 'Miraflores sits on the clifftop above the Pacific, with San Isidro to the north, Surquillo to the east, Santiago de Surco to the south-east and Barranco to the south. Families in those neighbouring districts take exactly the same classes, at the same hours, with the same mentors.' }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'The school year',
      h2: 'When does the school year run in Lima, and when should a class start?',
      lede: 'Peru\'s school year runs from March to December, in four teaching blocks of nine weeks each, separated by short management weeks. MINEDU fixed the 2026 dates in its technical norm, RM 501-2025-MINEDU, for public and private schools alike.',
      body: [
        { kind: 'table', numCols: [], caption: 'The 2026 school year in Peru (MINEDU, RM 501-2025-MINEDU, Tabla 1), and what a live class does in each part', head: ['Block (MINEDU)', 'Length', 'Dates in 2026', 'What a live class with us does (ours)'], rows: [
          ['First management weeks', '2 weeks', '2 to 13 March', 'Placement and a first project before school opens'],
          ['First teaching block', '9 weeks', '16 March to 15 May', 'Regular classes settle around the new timetable'],
          ['Second management week', '1 week', '18 to 22 May', 'Classes continue; a good week for a longer build'],
          ['Second teaching block', '9 weeks', '25 May to 24 July', 'Regular classes'],
          ['Third management weeks', '2 weeks', '27 July to 7 August', 'Classes continue, or pause if the family travels'],
          ['Third teaching block', '9 weeks', '10 August to 9 October', 'Regular classes; exam-year pupils revise'],
          ['Fourth management week', '1 week', '12 to 16 October', 'Classes continue; projects get finished'],
          ['Fourth teaching block', '9 weeks', '19 October to 18 December', 'Regular classes until the school year closes'],
          ['Fifth management weeks', '2 weeks', '21 to 31 December', 'Families choose: carry on, or pause for the holidays']
        ] },
        { kind: 'source', html: 'Source: MINEDU, Resolución Ministerial N.° 501-2025-MINEDU, Norma Técnica para el Año Escolar 2026, Tabla 1, read from the signed PDF on 8 November 2026 and checked against the page image. The norm defines management weeks as time for the school staff\'s collective or individual work on planning and evaluation; teaching weeks are for pupils\' learning. The right-hand column is our own practice, not part of the norm.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the calendar matters to us',
          left: [
            'The norm sets thirty-six teaching weeks and eight management weeks, with at least 160 teaching days. MINEDU reported that 53,631 schools of regular basic education reopened on 16 March 2026 for 6,225,000 pupils across the country, so the March start is shared by almost every child in Peru.',
            'Regional education offices and UGELs may shift the weeks for local reasons, and private schools, including international ones, often run their own term dates. Your school\'s calendar is the one to trust; the table is the national pattern.'
          ],
          rightH3: 'Why it matters less than you think',
          right: [
            'A live online class does not follow any school\'s bell. It runs on the household\'s calendar: lessons continue through the management weeks unless you ask us to pause, and they carry on through January and February, when Peruvian schools are on their long summer break.',
            'Many Miraflores families start in the summer, when afternoons are free, and keep the same weekly hour when school returns in March. Others start in August, after the July break, so that a child has a full term of coding before the year ends.'
          ] },
        { kind: 'p', mt: true, html: 'Families arriving from a school year that begins in September face a different question: which Peruvian grade a child joins and what happens to the months in between. Our guide to <a class="ag-inline-link" href="/expat-kids-coding-classes-lima">coding classes for expat children in Lima</a> deals with the move itself; on this page the point is simpler. A child who keeps one coding mentor through a change of country and calendar keeps one thing that does not change.' }
      ]
    },
    {
      id: 'school',
      tint: 'tint',
      eyebrow: 'What school covers',
      h2: 'Does a Peruvian school teach coding as a subject?',
      lede: 'No. The national curriculum, the CNEB, has no computing or programming area in its plans of study for primaria or secundaria. Digital skills are treated as something every subject shares.',
      body: [
        { kind: 'two',
          leftH3: 'A competency without a lesson',
          left: [
            'The CNEB places its digital competency, number 28, among the competencies that cut across all areas rather than belonging to one. In practice a pupil may make a presentation in history or a spreadsheet in science, but no hour of the week is set aside for writing a program.',
            'Bilingual and international schools in Miraflores and nearby districts may add their own computing courses, and Cambridge and IB schools teach computer science as an examined subject where they offer it. What a particular school teaches is for that school to say; we do not speak for any of them.'
          ],
          rightH3: 'Where our classes fit',
          right: [
            'For a child at a school without computing, our classes are the first real programming they meet. For a pupil already taking IGCSE or IB computer science, they are extra practice in the same language as the exam, with a mentor who explains the reasoning, not only the answer.',
            'In both cases we teach alongside school, never instead of it. Schools set and mark coursework and exams; we make sure the learner understands what they are doing, and can explain it in English.'
          ] }
      ]
    },
    {
      id: 'online',
      eyebrow: 'Why online',
      h2: 'Why take coding classes online from Miraflores instead of crossing Lima?',
      lede: 'Because the hour you save is the hour your child spends coding. A live online class starts at your kitchen table, and the mentor is there on the screen from the first minute to the last.',
      body: [
        { kind: 'two',
          leftH3: 'Time that goes into learning',
          left: [
            'We will not quote traffic figures we cannot source, and Lima families do not need them. Anyone who has driven from Miraflores towards the east of the city at five in the afternoon knows that a one-hour class somewhere else can take most of an evening once the journey both ways is counted.',
            'With a live online class, the journey disappears. A teenager comes home, eats, and logs in; a younger child does the same with a parent nearby. For a family with two children at different ages, two classes at home replace two sets of journeys.'
          ],
          rightH3: 'What you need at home',
          right: [
            'A computer with a real keyboard, a camera, a microphone and a steady connection. In INEI\'s household survey for April to June 2026, 84.7% of homes in the Lima Metropolitana area, which for INEI includes Callao, had an internet service, and 53.3% owned one computer or more.',
            'A phone works for watching a lesson but not for writing code, so if the household has one shared computer, plan the hour around it. Headphones help in a busy flat, and so does a quiet corner away from the television.'
          ] },
        { kind: 'p', mt: true, html: 'Online does not mean recorded. Every lesson is live: the mentor sees the learner\'s screen, asks questions, waits for the answer and corrects mistakes as they happen. That is the difference between a class and a video, and it is why we keep the same mentor with the same learner wherever possible.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'What does a lesson look like? A comma that breaks a file',
      lede: 'We give this one to learners of roughly 12 upwards. It starts with the most ordinary file in the world: a spreadsheet saved as CSV. The habit it builds is simple and valuable. Before you trust a column, count the columns on every row.',
      body: [
        { kind: 'two',
          leftH3: 'The task',
          left: [
            'We give the learner a short sign-up list, invented for the lesson: five learners, where they live and how old they are. Two of them wrote their home as "Miraflores, Lima", with a comma, so the spreadsheet put that field in double quotes when it saved the file.',
            'The question is easy: how many learners come from each district, and what is their average age? Most beginners split each line at the commas, which is exactly what Version 1 does.'
          ],
          rightH3: 'The surprise',
          right: [
            'The average age comes out right, 10.8, because the age is the last item on every line. The district count looks right too, at first glance: Miraflores 2. Look again and the key is <code>"Miraflores</code>, with a stray quote mark, and the word Lima has vanished.',
            'The last line gives the game away. Some rows split into 3 pieces and some into 4, so the file does not have the shape the program assumed. Any column after the home address would now be read from the wrong place.'
          ] },
        { kind: 'code', label: 'Version 1: split at every comma', lang: 'Python', code: V1, note: 'It prints <code>{\'"Miraflores\': 2, \'San Isidro\': 1, \'Barranco\': 1, \'Surquillo\': 1}</code>, then <code>Average age: 10.8</code>, then <code>Fields per row: [3, 4, 3, 4, 3, 3]</code>.' },
        { kind: 'p', mt: true, html: 'The fix is not a cleverer split. A comma inside quotes is part of the data, and the CSV format has rules for that, so we let a tool that knows the rules do the reading. Python\'s <code>csv</code> module ships with every installation and reads quoted fields correctly.' },
        { kind: 'code', label: 'Version 2: let the csv module read the quotes', lang: 'Python', code: V2, note: 'With the six lines from Version 1 above it, it prints <code>Fields per row: [3, 3, 3, 3, 3, 3]</code>, then <code>{\'Miraflores\': 2, \'San Isidro\': 1, \'Barranco\': 1, \'Surquillo\': 1}</code>, then <code>Ana lives in: Miraflores, Lima</code>.' },
        { kind: 'p', html: 'Every row now has three fields, the quote marks are gone, and the full home address survives for anyone who needs it. Only then does the program cut the district out of the address. The order matters: read the file correctly first, then clean the values, never the other way round.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, on paper.</strong> Write three friends\' names and favourite fruits, separated by commas. Now add a friend whose favourite is "apples, pears". How would someone reading your list know where one item ends?',
          '<strong>Ages 9 to 11, in Scratch.</strong> Build a list from a sentence by splitting it at spaces. Then try a sentence with a double space in it and count the items you get.',
          '<strong>Ages 12 to 14, in Python.</strong> Predict what Version 1 prints before you run it. Then add a learner whose name contains a comma and see which version still copes.',
          '<strong>Ages 15 and over.</strong> Add a check that stops the program with a clear message if any row does not have exactly three fields. Then write two sentences in English explaining why the average age hid the problem.'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Is English in a live class a help or a hurdle?',
      lede: 'For most learners in Miraflores, a help. EF\'s English Proficiency Index 2025 gives the city of Lima a score of 555, in its "High" band, against a national figure of 519, which EF calls "Moderate".',
      body: [
        { kind: 'two',
          leftH3: 'What the index does and does not say',
          left: [
            'EF tests adults who take its online test, so the figure describes grown-ups who chose to be tested, not children, and not Miraflores on its own. It is still a useful signal: in the capital, English is a working language for many adults, and plenty of children hear it at home or at school.',
            'Our mentors do not assume fluency. They talk at an even pace, rephrase an instruction more simply when a learner hesitates, and demonstrate every step on screen before asking for it. A child who answers half in Spanish is understood, then given the English for what they meant.'
          ],
          rightH3: 'Why English and code go well together',
          right: [
            'Programming languages are built from English words: if, while, return, print. Error messages are in English, and so is almost every manual a learner will read later. Learning to code in English means learning the vocabulary once, in the form the learner will keep meeting.',
            'For a bilingual pupil, the class is one more subject in a familiar language. For a Spanish-first child, the English has a job to do: the program only works once the instruction has been understood, which is a stronger motive than any worksheet.'
          ] },
        { kind: 'p', mt: true, html: 'If you want the wider picture for Lima, our page on <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> sets out how much English and computing the national curriculum gives at each stage, and how IB and Cambridge students in Peru use computer science in English.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Miraflores times',
      h2: 'What time would a class be in Miraflores?',
      lede: 'Whatever time you choose. Peru keeps one clock from January to December, five hours behind UTC, while India sits five and a half hours ahead of UTC; the gap between Miraflores and a mentor in India is therefore a fixed ten and a half hours. The rows below are conversions to help you picture the day, not a list of fixed slots.',
      body: [
        { kind: 'table', numCols: [], caption: 'A Miraflores hour and the same moment in India (conversions, not a timetable)', head: ['Peru time, Miraflores', 'India time', 'Who often picks it'], rows: [
          ['06:30', '17:00', 'An adult before the working day'],
          ['08:00', '18:30', 'A child in the summer break'],
          ['11:30', '22:00', 'A teenager on a free morning'],
          ['15:30', '02:00, the next day', 'A primary pupil after school'],
          ['18:00', '04:30, the next day', 'A teenager after homework'],
          ['20:30', '07:00, the next day', 'An adult after work']
        ] },
        { kind: 'source', html: 'Source: IANA time zone database, zones America/Lima (UTC minus 5; Peru has not used summer time since 1994) and Asia/Kolkata (UTC plus 5:30). The conversions are ours. Neither country moves its clocks, so the difference never shifts with the seasons.' },
        { kind: 'p', mt: true, html: 'When you book, you choose the time on your own clock and the system shows the mentor the same moment in India time. A class agreed for 16:00 in Miraflores in February is still at 16:00 in August. For more on how the two clocks line up across a week, see our page on <a class="ag-inline-link" href="/live-coding-classes-peru-time">live coding classes on Peru time</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a Miraflores learner can do at each stage',
    lede: 'These stages are ours, not a school standard. We use them to place a learner in the right group and to report progress to parents in plain terms.',
    table: { numCols: [], caption: 'Coding stages we use with learners (ours)', head: ['Stage', 'Typical age', 'The learner can', 'And can explain, in English'], rows: [
      ['1. Sequence', '6 to 7', 'Put steps in order so a character moves and speaks', 'What happens first, next and last'],
      ['2. Loop', '7 to 9', 'Repeat actions and respond to a key or a click', 'What repeats, and what makes it stop'],
      ['3. Store', '8 to 10', 'Keep a score or a name in a variable', 'Why the value changed when it did'],
      ['4. Type', '9 to 12', 'Type small Python programs that make decisions', 'What each line does, read aloud'],
      ['5. Read data', '12 and up', 'Load a file, check its shape, then count', 'Why a result can look right and be wrong'],
      ['6. Examine', '14 to 18', 'Work through IGCSE or IB computer science tasks', 'The reasoning an examiner wants to see']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is where the CSV lesson sits. By then a learner has begun to ask how a figure was made before believing it, a habit that helps far beyond programming.',
      'Our reports describe what was built and what was understood, not how many hours were sat through.'
    ] },
    right: { h3: 'For learners', ps: [
      'A program that runs is not yet a program that is right. Try it first on a case whose answer you have worked out by hand.',
      'If a file surprises you, look at one row with your own eyes before you write another line.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Miraflores learners',
    lede: 'All live, all in English, each with a mentor who stays with the learner, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'COMI / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch stories and games first, then simple apps; the natural start at 6.' },
        { code: 'COMI / KIDS / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Children design a game, then script it in Luau.' },
        { code: 'COMI / KIDS / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Puzzles and patterns that train the thinking behind every program.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'COMI / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From a first line of code to files, data and larger programs.' },
        { code: 'COMI / TEEN / 02', slug: 'ib-diploma-computer-science-course', title: 'IB DP Computer Science', blurb: 'SL and HL theory, programming and the internal assessment.' },
        { code: 'COMI / TEEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Build and test small models in Python; secondary-school maths is enough.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'University and work', courses: [
        { code: 'COMI / ADULT / 01', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and dashboards, for work that runs on numbers.' },
        { code: 'COMI / ADULT / 02', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents for professionals', blurb: 'How to direct coding agents and check what they produce.' },
        { code: 'COMI / ADULT / 03', slug: 'complete-java-programming-masterclass-college', title: 'Java for university', blurb: 'Core Java to real applications, for students and developers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How a week of live classes works from Miraflores',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early', l: 'A Miraflores morning falls in the Indian evening, an easy hour for mentors.' },
      { time: 'Later', l: 'Afternoon and evening hours in Lima are arranged as well; name the time you want.' },
      { time: '1-on-1', l: 'One learner, one mentor, and a timetable the household sets.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same teacher each week, who learns how your child thinks.' },
      { h3: 'Clear English', p: 'Short sentences, a steady pace, and patience with questions.' },
      { h3: 'Building, not watching', p: 'The learner writes and runs code in every lesson.' },
      { h3: 'Matched by age', p: 'A seven year old never shares a group with a sixteen year old.' },
      { h3: 'Reports home', p: 'What was made, what was hard, and what comes next.' },
      { h3: 'Your choice of format', p: 'A group of fifteen to twenty, or a mentor all to yourself.' }
    ]
  },

  projectsH2: 'What older students have built',
  projectsLede: 'After a year or two, learners start building things worth showing. A few examples from our older students follow, and more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents and students have written in Google reviews, word for word.',

  fees: {
    h2: 'Fees for learners in Miraflores',
    lede: 'Plans are priced in US dollars and paid monthly by card. If your card is in soles, the bank converts each charge at its own rate on the day, so the exact amount on your statement may differ a little from one month to the next.',
    free: ['A free first class', 'A first program and a short puzzle', 'No card details needed'],
    group: ['Fifteen to twenty learners of similar age', 'The same mentor every week', 'Two live classes a week', 'Paid monthly; stop at any month end'],
    one: ['One learner with one mentor', 'Pace and projects built around the learner', 'Days and hours you set']
  },

  faq: {
    eyebrow: 'Miraflores households ask',
    h2: 'Coding classes in Miraflores: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught in English only. Mentors speak clearly, slow down when a learner needs it and point to each step as they go, so a child whose English is still growing can follow. A learner may answer in Spanish now and then; the mentor understands and gives the English back.' },
      { q: 'Do you have a centre in Miraflores?', a: 'No. We have no premises in Miraflores or anywhere else in Lima. Every lesson takes place over live video, with a mentor based in India, which is why a learner in Miraflores, Barranco or San Isidro gets the same class at the same hour.' },
      { q: 'What age can my child start?', a: 'From 6. Young children begin with Scratch, where blocks snap together and little typing is needed. From about 9, children can move to typed Python. Teenagers and adults usually start directly with Python, or with Java if they are at university.' },
      { q: 'When are the classes in Miraflores time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru never changes its clocks and India is ten and a half hours ahead of it, so 08:00 in Miraflores is 18:30 in India.' },
      { q: 'Do the classes stop during school holidays?', a: 'Only if you want them to. Our classes follow your household calendar, not a school calendar, so they run through the management weeks of the Peruvian school year and through the January to March summer break unless you ask us to pause.' },
      { q: 'Can you help with IGCSE or IB computer science?', a: 'Yes. We teach Cambridge IGCSE Computer Science 0478 and IB Diploma Computer Science at SL and HL, as well as IGCSE and IB maths, alongside the pupil\'s school. The school, Cambridge or the IB sets and marks all assessed work; we help the pupil understand it.' },
      { q: 'We are moving to Lima from abroad. Can classes start before we arrive?', a: 'Yes. Because the lessons are online, a child can start in the home country, keep the same mentor through the move, and carry on in Miraflores. When you book, you pick times on your current clock; once you arrive, you switch to Peru time.' },
      { q: 'Are you connected with any school or the municipality?', a: 'No. We are an independent online school. We are not connected with the Municipalidad de Miraflores, MINEDU, Cambridge, the IB or any school in Lima, and we award no Peruvian qualification. Learners who complete a course receive our own certificate of completion.' },
      { q: 'Will my child use AI tools in class?', a: 'Only tools suitable for their age, and only once they can reason through the problem on their own. Claude is for adults of 18 and over, and ChatGPT needs a parent\'s permission for anyone under 18, so children do not use adult chatbot accounts with us.' },
      { q: 'How are fees charged?', a: 'In US dollars, by card, once a month. A card in soles is fine: your bank converts each payment, so the figure on your statement can change slightly between months. The first class is free and we do not ask for card details to book it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for Miraflores households thinking about coding in English.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our national guide for families across Peru.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson, described from start to finish.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Why reasoning comes before any tool.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'The minimum age for each common AI tool.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects built by our older students.' },
      { href: '/ib-computer-science-online-tuition', label: 'IB computer science tuition', p: 'Diploma computer science in more depth.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Miraflores',
    lede: 'The free class is short and practical. Your child, or you, solves a small puzzle and writes a first program, while the mentor watches how the learner reasons and how comfortably they follow spoken English. Afterwards we suggest a course, a group or one-to-one lessons, and an hour that suits your week.',
    readFirst: 'Want to know more before you book? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a lesson, and the <a class="ag-inline-link" href="/courses">full course list</a> has every syllabus.',
    note: 'Every lesson is live on video, taught in English by a mentor in India. For a quick reply, send us a WhatsApp message in English.',
    formNote: 'Free. No card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Lima and Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Coding in Peru' },
        { href: '/english-medium-coding-classes-lima', label: 'English-medium coding, Lima' },
        { href: '/expat-kids-coding-classes-lima', label: 'Expat children in Lima' },
        { href: '/live-coding-classes-peru-time', label: 'Classes on Peru time' }
      ] },
      { h4: 'Learning to code', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Count the columns before you trust one'
  },

  personalityCss: `
.ag-root.ag-comi .ag-hero h1 { max-width: 16ch; letter-spacing: -0.015em; }
.ag-root.ag-comi .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-comi .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-comi .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-comi .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'INEI, Censos Nacionales 2025 (Lima Metropolitana demographic indicators, Cuadros 1 and 3); MINEDU, RM 501-2025-MINEDU Norma Técnica para el Año Escolar 2026 (Tabla 1 and glossary); MINEDU news of 16 March 2026 on the start of the school year; MINEDU, Currículo Nacional de la Educación Básica (competency 28); EF EPI 2025 Peru page; INEI TIC en los Hogares, II Trimestre 2026; IANA tz database. All read 8 to 10 November 2026.',
    localProject: 'An original Python lesson on an invented Miraflores sign-up list saved as CSV: splitting each line at commas counts "Miraflores 2" under a key with a stray quote ({\'"Miraflores\': 2, ...}) and shows Fields per row: [3, 4, 3, 4, 3, 3], while the average age (10.8) hides the problem; csv.reader gives Fields per row: [3, 3, 3, 3, 3, 3] and keeps "Miraflores, Lima" whole. Lesson family: a comma inside quotes is data, not a separator; count the fields on every row before trusting a column.',
    requiredMentions: ['Fields per row: [3, 4, 3, 4, 3, 3]', 'Ana lives in: Miraflores, Lima', 'Average age: 10.8', '126,049', '6,204 were aged 6 to 11', '16 March to 15 May', '19 October to 18 December', 'Count the columns before you trust one', 'read the file correctly first, then clean the values'],
    sources: [
      { claim: 'Miraflores 126,049 total (121,203 counted, 4,846 omitted; 67,835 women, 58,214 men); Lima Metropolitana 10,141,775 in 43 districts; Miraflores by age group: 6 to 11 6,204, 12 to 17 6,575, 30 to 44 31,906, 60 and over 29,900.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: '2026 school calendar: four teaching blocks of nine weeks and five management blocks; 36 teaching and 8 management weeks; at least 160 teaching days; definition of management weeks; DRE/UGEL may change the distribution.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: '53,631 schools reopened on 16 March 2026 for 6,225,000 pupils.', url: 'https://www.gob.pe/institucion/minedu/noticias/1366423-ministro-de-educacion-inaugura-ano-escolar-2026-en-colegios-publicos' },
      { claim: 'No computing area in the CNEB; competency 28 is transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Lima 555 High; Peru 519 Moderate.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Lima Metropolitana (with Callao): 84.7% of households with internet, 53.3% with at least one computer, II Trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 all year, no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Names or counts of international, bilingual or IB schools in Miraflores: only commercial directories exist; not used, and no school is named as a source of students.',
      'Income, class or "residential" descriptions of Miraflores (INEI strata tables exist): not used, by rule.',
      'Commute or traffic times across Lima: no primary source; the page argues from the journey itself, with no figures.',
      'Any connection with the Municipalidad de Miraflores, MINEDU, Cambridge, the IB or a school: none, and the page says so.',
      'Sums of INEI age groups into new totals: not made; only INEI\'s own totals and our labelled percentages.'
    ]
  }
};
