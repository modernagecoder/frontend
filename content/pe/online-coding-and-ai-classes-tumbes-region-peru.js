// SHIP: market (region) | Tumbes: a small, well-connected border coast where test scores, not wifi, set the start | order-of-magnitude bins: equal-width bins hide the data; math.log(x, 10) misfiles 1000
'use strict';
// Online coding and AI classes, Tumbes region, Peru (ag- region page, Peru cluster row PE182; alloc: regions, cbi, #4A3B05).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: flexible hours; USD only via
// data-price anchors.
// Spine: Tumbes is a compact coastal border department where most people are online (86.3 per cent use the internet, 2025)
// but home computers have slipped below their 2015 share and the 2025 census evaluation puts the region far below Peru in
// maths. So the page starts from reasoning, not wifi: maths and coding together, laptop honesty, English fit, and a project
// on the regional government's own spending file that teaches how to bin numbers that span six orders of magnitude.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-tumbes-region-peru/):
//  - INEI, Censos Nacionales 2025, Cuadro N° 1: TUMBES 256691; provinces TUMBES 175132, CONTRALMIRANTE VILLAR 24343,
//    ZARUMILLA 57216; districts TUMBES 114011, CORRALES 26585, ZARUMILLA 24909, AGUAS VERDES 19374, ZORRITOS 14029, LA CRUZ
//    10862. Cuadro N° 3: TUMBES censada 250997; 6 a 11 años 28166; 12 a 17 años 29574. Never summed.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Tumbes city 96,946 (2017). Lib1541 dpto24.xlsx (centros poblados 2017): TUMBES
//    96 946 at 9 m; ZARUMILLA 21 409; SAN PEDRO DE LOS INCAS 17 883 (Corrales); LA CURVA 13 739 (Aguas Verdes); ZORRITOS 7 363.
//  - INEI Compendio Estadístico Perú 2026, tomo 1: 11.5 "Tumbes 34,0 29,6 32,1 29,8 29,5 20,9 28,0 29,1 26,3 27,4 29,1";
//    11.6 "Tumbes 24,1 22,0 22,7 21,4 32,4 29,3 47,1 61,0 51,0 53,9 61,3"; 11.13 "Tumbes 46,9 50,1 54,0 61,0 64,5 68,7 73,4
//    77,3 80,7 81,7 86,3"; Total 2025 33,9 / 56,8 / 81,1. 5.53 (4° primaria 2025) Tumbes Matemática 16,7 Lectura 20,4; Total
//    30,0 / 32,7. 5.54 (2° secundaria 2025) Tumbes 5,8 / 8,8; Total 12,7 / 18,5. 5.16 primaria pública 23,0 (2015) 26,4 (2025);
//    5.22 secundaria pública 14,7 (2015) 21,4 (2025); 5.75 docentes 4 953 (2025).
//  - EF EPI 2025 (ef_peru.raw): "Peru EF EPI score : 519"; Tumbes absent from EF's list of sixteen scored regions.
//  - GORE Tumbes, gob.pe nota 1240310 (26 de agosto de 2025): reapertura del "Instituto de Educación Superior Pedagógico Público
//    José Antonio Encinas", "tras dos años de suspensión". Nota 883962 (4 de diciembre de 2023): concurso "El Perú Lee",
//    "Participaron 115 000 estudiantes de colegios públicos y privados"; three Tumbes pupils "obtengan el primer puesto" (names
//    of minors not printed). Nota 829675 (22 de agosto de 2023): Territorios Digitales Confiables, "Laboratorio Smart".
//  - Ley 28044, Edades normativas, CNEB competency 28 and JER hours, MINEDU 2026 opening, ONEM 2026, OPI (FACTS 5, 6, 13, 14,
//    17, 32, 33, 39, 99, 105, 111). Time: tzdata.
//  - Data: Gobierno Regional de Tumbes, "Gastos según fuentes financiamiento del Gobierno Regional de Tumbes - [Gore Tumbes]",
//    datosabiertos.gob.pe, "Open Data Commons Attribution License" (ODC-By), released 2024-04-30, modified 2026-06-15. File
//    "Gastos según fuentes finaciamiento del Gobierno Regional de Tumbes.csv" (saved as gastos-gore-tumbes.csv), 19,624 rows,
//    UTF-8, commas; FECHA_CORTE 20230429 on every row while FECHA_SOLICITUD runs 20221216 to 20240407. No personal names.
//    Rows by funding source: CANON Y SOBRECANON ... 7,010; RECURSOS ORDINARIOS 6,695; FONCOR 4,925; DONACIONES Y
//    TRANSFERENCIAS 706; RECURSOS DIRECTAMENTE RECAUDADOS 275; OPERACIONES OFICIALES DE CREDITO 13. Amounts never printed.
// Our own calculations (scratchpad pe/r5/cbi/v1.py, v2.py, python3 -I):
//  v1 prints: Rows: 19624 / bin 0 19088 / bin 1 180 / bin 2 350 / bin 3 4 / bin 4 0 / bin 5 1 / bin 6 0 / bin 7 0 / bin 8 0 /
//    bin 9 1
//  v2 prints: 0 38 38 / 1 691 691 # / 2 3996 3902 ######## / 3 12595 12689 ######################### / 4 1608 1608 ### /
//    5 694 694 # / 6 2 2 / Rows where the two methods disagree: 94 / math.log(1000, 10) = 2.9999999999999996
// Lesson family: order-of-magnitude bins. Equal-width bins put 97 per cent of the rows in one bar; powers of ten spread them;
// math.log(x, 10) returns 2.9999999999999996 for 1000 and misfiles 94 rows, so count digits or use math.log10.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'with open("gastos-gore-tumbes.csv", newline="", encoding="utf-8") as f:',
  '    amounts = [float(row["IMPORTE"]) for row in csv.DictReader(f)]',
  '',
  'width = max(amounts) / 10',
  'bins = [0] * 10',
  'for x in amounts:',
  '    bins[min(int(x // width), 9)] += 1',
  '',
  'print("Rows:", len(amounts))',
  'for i, n in enumerate(bins):',
  '    print("bin", i, n)'
].join('\n');

const V2 = [
  'import csv',
  'import math',
  '',
  'with open("gastos-gore-tumbes.csv", newline="", encoding="utf-8") as f:',
  '    amounts = [float(row["IMPORTE"]) for row in csv.DictReader(f)]',
  '',
  'by_log = {}',
  'by_digits = {}',
  'for x in amounts:',
  '    a = int(math.log(x, 10))',
  '    b = len(str(int(x))) - 1',
  '    by_log[a] = by_log.get(a, 0) + 1',
  '    by_digits[b] = by_digits.get(b, 0) + 1',
  '',
  'for power in sorted(by_digits):',
  '    bar = "#" * round(by_digits[power] / 500)',
  '    print(power, by_log.get(power, 0), by_digits[power], bar)',
  'disagree = [x for x in amounts if int(math.log(x, 10)) != len(str(int(x))) - 1]',
  'print("Rows where the two methods disagree:", len(disagree))',
  'print("math.log(1000, 10) =", math.log(1000, 10))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Tumbes region' },
  slug: 'online-coding-and-ai-classes-tumbes-region-peru',
  code: 'cbi',
  accent: '#4A3B05',
  accentRationale: 'Tumbes region: a dark mangrove-mud bronze #4A3B05, allocated to this row; contrast 10.32 on #FBF8F2, 9.71 on #F5F1E8 and 8.88 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Tumbes region, Peru',
  title: 'Tumbes Region, Peru: Coding and AI Classes Live in English',
  description: 'Live online coding and AI classes in English for the Tumbes region: maths and code together, who they suit, census facts and a project on regional spending data.',
  ogDescription: 'Coding and AI for learners in Tumbes city, Zarumilla, Aguas Verdes, Corrales and Zorritos, taught live online in English: the three provinces in 2025 census figures, why reasoning comes before devices here, and a Python project on the Gobierno Regional de Tumbes spending file.',
  twitterDescription: 'Tumbes region, live coding in English online: reasoning first, honest fit, and a spending-data project.',
  pageName: 'Online Coding and AI Classes in the Tumbes Region',
  webPageDescription: 'A guide for families and learners in the Tumbes region of Peru to live online coding and AI classes taught in English, drawing on INEI census and household tables, MINEDU evaluation results, Gobierno Regional de Tumbes notes, and an original Python project on the regional government spending dataset (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Tumbes region of Peru: logic puzzles and block coding for children, Python with maths reasoning for secundaria pupils, Python and data work for university students and adults, taught to a class of fifteen to twenty or to one learner, at hours the family picks.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Tumbes region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#coast', label: 'The region' },
    { href: '#reasoning', label: 'Maths first' },
    { href: '#ready', label: 'Who it suits' },
    { href: '#spending', label: 'Data project' },
    { href: '#clock', label: 'Times' }
  ],
  eyebrow: 'Tumbes region &middot; Live online, in English &middot; Reasoning and code together',
  h1: 'Online coding and AI classes in the Tumbes region',
  lede: 'Tumbes is Peru\'s north-western corner: three provinces between the Pacific and the Ecuadorian border, most of their people in or near the capital. Most people here are online, yet the 2025 school evaluation shows pupils struggling with maths. That shapes our advice. Our classes are live, online and taught in English, and for Tumbes learners we pair programming with the reasoning behind it. Below you will find the region in official figures, an honest view of who is ready, and a project on the regional government\'s own spending file.',
  secondaryCta: { href: '#spending', label: 'See the spending-data project' },
  wa: 'Hello Modern Age Coders, I am writing from the Tumbes region of Peru. I am interested in your live coding classes in English for my child or for myself. Could we arrange a free trial class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ learners in many countries &middot; mentors who teach in plain English',
  spec: [
    ['Strongest fit', 'Secundaria pupils, university students, working adults'],
    ['Children', 'From six, often one to one'],
    ['Teaching language', 'English, slow and plain'],
    ['Focus here', 'Programming with maths reasoning'],
    ['Hours', 'Whenever suits, any day'],
    ['Begin with', 'A free class and a straight answer']
  ],
  capsuleQ: 'The quick answer',
  capsule: 'For learners in Tumbes, Zarumilla, Aguas Verdes, Corrales, Zorritos and the rest of the region, Modern Age Coders runs live coding and AI classes online, in English. Secundaria pupils, university students and adults who understand some English get the most from them: Python, web pages, data and how AI works, always with the maths reasoning underneath. Children from six can begin with logic puzzles and block coding, usually with one mentor to themselves. You choose a class of fifteen to twenty or private lessons, and the hour; the first lesson is free.',

  picks: {
    eyebrow: 'Starting courses',
    h2: 'Three courses that make sense in Tumbes',
    lede: 'Each mixes code with reasoning, because that is what the region\'s results suggest learners need most.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'TUM / 01', title: 'Problem Solving for Kids', note: 'Ages 7 to 12. Puzzles, patterns and step-by-step plans before any code, so a child learns to think in steps while their English grows.' },
      { course: 'python-complete-masterclass-teens', code: 'TUM / 02', title: 'Python for Teens', note: 'For secundaria pupils with no experience. Every program is a small maths problem in disguise: counting, comparing, averaging, checking.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'TUM / 03', title: 'Data and AI for non-programmers', note: 'For adults at work in trade, port and border businesses, offices or schools who want to read tables and use AI tools carefully.' }
    ]
  },

  sections: [
    {
      id: 'coast',
      eyebrow: 'The region',
      h2: 'How big is the Tumbes region, and where do people live?',
      lede: 'Small by Peruvian standards. The 2025 census counted 256,691 people in the department of Tumbes, and more than two thirds of them in the province of Tumbes itself.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Tumbes department and its three provinces, 2025 census', head: ['Area', 'Population, 2025'], rows: [
          ['Province of Tumbes', '175,132'],
          ['Province of Zarumilla', '57,216'],
          ['Province of Contralmirante Villar', '24,343'],
          ['Department of Tumbes', '256,691']
        ] },
        { kind: 'source', html: 'INEI, Censos Nacionales 2025, tabulated demographic indicators, Cuadro N° 1, people counted plus those INEI estimates were missed, reference day 15 September 2025. The department figure comes from INEI\'s own table; we do not total the provinces.' },
        { kind: 'two', mt: true,
          leftH3: 'Districts in 2025',
          left: [
            'The district of Tumbes had 114,011 residents in 2025. Corrales had 26,585, Zarumilla 24,909, Aguas Verdes on the border 19,374, Zorritos 14,029 and La Cruz 10,862.',
            'Among the people actually enumerated in the department (250,997), 28,166 were between 6 and 11 and 29,574 between 12 and 17: the ages of primaria and secundaria.'
          ],
          rightH3: 'Towns in 2017',
          right: [
            'INEI\'s 2017 table of department capitals gives Tumbes city 96,946 people. The same year\'s list of centros poblados records Zarumilla town at 21,409, San Pedro de los Incas in Corrales at 17,883, La Curva in Aguas Verdes at 13,739 and Zorritos at 7,363.',
            'Those are towns in 2017 and districts in 2025, two different measures eight years apart, so we set them side by side without drawing a growth figure from them.'
          ] },
        { kind: 'p', mt: true, html: 'School numbers are rising, unlike in several Andean regions. INEI\'s compendium shows public secundaria enrolment in Tumbes climbing from 14.7 thousand in 2015 to 21.4 thousand in 2025, and public primaria from 23.0 thousand to 26.4 thousand. The department counted 4,953 teachers in 2025.' }
      ]
    },
    {
      id: 'reasoning',
      tint: 'tint',
      eyebrow: 'Maths first',
      h2: 'Why should Tumbes learners study maths reasoning alongside code?',
      lede: 'Because programming is applied reasoning, and the region\'s 2025 results show that reasoning is where pupils need the most support.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Share of pupils reaching the satisfactory level, 2025 census evaluation (per cent)', head: ['Grade evaluated', 'Tumbes, maths', 'Peru, maths', 'Tumbes, reading', 'Peru, reading'], rows: [
          ['Fourth grade of primaria', '16.7', '30.0', '20.4', '32.7'],
          ['Second year of secundaria', '5.8', '12.7', '8.8', '18.5']
        ] },
        { kind: 'source', html: 'MINEDU\'s Evaluación Censal de Estudiantes, via INEI, Compendio Estadístico Perú 2026, tomo 1, tables 5.53 and 5.54.' },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers say',
          left: [
            'In 2025 about one Tumbes fourth-grader in six reached the expected level in maths, against nearly one in three across Peru. By second year of secundaria, 5.8 per cent did, less than half the national 12.7 per cent.',
            'These are census-style evaluations of whole year groups, published by MINEDU, not samples. They describe a region, not any one child.'
          ],
          rightH3: 'What we do about it',
          right: [
            'Our Tumbes learners write programs that are maths in action: a loop that counts, a condition that compares, a function that averages and then checks its own answer. Each lesson asks the learner to predict what the code will print before running it.',
            'For pupils who want more, we add structured maths practice in English. Our page on <a class="ag-inline-link" href="/razonamiento-matematico-clases-online-peru">razonamiento matemático online</a> explains the approach for Spanish-speaking parents.'
          ] },
        { kind: 'p', mt: true, html: 'Reading is a strength worth building on. In December 2023 the Gobierno Regional de Tumbes reported that three of its pupils took first place nationally in MINEDU\'s reading-comprehension contest "El Perú Lee", in which, according to the note, 115,000 pupils from public and private schools took part. A child who reads carefully in one language has a head start in reading code, and English, carefully.' }
      ]
    },
    {
      id: 'online',
      eyebrow: 'Connection and devices',
      h2: 'Do Tumbes homes have what a live coding class needs?',
      lede: 'The connection, mostly yes. The computer, less often than ten years ago.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Tumbes households and internet users against Peru (per cent)', head: ['Series', 'Tumbes 2015', 'Tumbes 2020', 'Tumbes 2025', 'Peru 2025'], rows: [
          ['Households with a computer', '34.0', '20.9', '29.1', '33.9'],
          ['Households connected to the internet', '24.1', '29.3', '61.3', '56.8'],
          ['Residents aged 6 or more using the internet', '46.9', '68.7', '86.3', '81.1']
        ] },
        { kind: 'source', html: 'INEI household survey (ENAHO) results printed in the Compendio Estadístico Perú 2026, first volume, tables 11.5, 11.6 and 11.13. Decimals shown with points.' },
        { kind: 'two', mt: true,
          leftH3: 'The good news',
          left: [
            'In 2025 a larger share of Tumbes households had internet at home than across Peru as a whole, 61.3 per cent against 56.8, and 86.3 per cent of residents from age six used the internet.',
            'For a live class that matters: a steady home connection is usually there.'
          ],
          rightH3: 'The catch',
          right: [
            'Computers have not followed. The share of Tumbes households with one was 34.0 per cent in 2015, fell to 20.9 in 2020, and stood at 29.1 in 2025, below where it started.',
            'Phones carry most of the region\'s internet use. A phone can show a lesson, but a learner writing Python needs a keyboard and a screen big enough for code and output side by side.'
          ] },
        { kind: 'p', mt: true, html: 'If there is one laptop in the house, it is enough. Younger children can do block coding on a tablet; from roughly ten we ask for a laptop or desktop, shared if necessary. The free class checks what you have before anyone pays.' }
      ]
    },
    {
      id: 'ready',
      tint: 'tint',
      eyebrow: 'Fit and language',
      h2: 'Are classes taught in English realistic for learners in Tumbes?',
      lede: 'For many, yes. We teach only in English, live and online, with no Spanish-language groups, so it is worth being clear about who gains most.',
      body: [
        { kind: 'two',
          leftH3: 'English in figures',
          left: [
            'EF\'s English Proficiency Index 2025 puts Peru at 519, a moderate score, 52nd of 123 countries. EF\'s Peru page scores sixteen regions; Tumbes is not one of them, so we have no regional English score to print.',
            'Secundaria pupils have three hours of Inglés a week on the regular school day. That gives most teenagers enough to start with a patient mentor.'
          ],
          rightH3: 'Who tends to thrive',
          right: [
            'Teenagers who enjoy puzzles or games and want to make their own. Students at institutes and universities in engineering, accounting or education. Adults in trade and services who meet English at work and want to handle data or automate tasks.',
            'Young children are welcome, with an important condition: in the first months a parent nearby, and usually one-to-one lessons so the mentor can repeat and show rather than lecture.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Book the free class</strong> by WhatsApp or the form, choosing an hour on your own clock.',
          '<strong>Join from the real device</strong> in the room you would use every week.',
          '<strong>Try a short task</strong> in simple English with the mentor: a puzzle, then a first program.',
          '<strong>Hear the verdict.</strong> The mentor says whether to start now in a group, start one to one, or wait a few months, and why.'
        ] }
      ]
    },
    {
      id: 'spending',
      eyebrow: 'A Tumbes data project',
      h2: 'How do you draw a chart of numbers that range from tiny to huge?',
      lede: 'The Gobierno Regional de Tumbes publishes every payment it records as open data. We never look at what any payment was for. We use the amounts only as numbers, to teach one of the most useful ideas in data work: some data need bins that grow by powers of ten.',
      body: [
        { kind: 'two',
          leftH3: 'The dataset',
          left: [
            'The regional government publishes "Gastos según fuentes financiamiento del Gobierno Regional de Tumbes - [Gore Tumbes]" on datosabiertos.gob.pe under the Open Data Commons Attribution License (ODC-By). It was released on 30 April 2024 and last modified on 15 June 2026.',
            'Our copy, gastos-gore-tumbes.csv, has 19,624 rows, one per payment record, and no personal names. Each row names a funding source; the largest groups are canon and royalties (7,010 rows), ordinary resources (6,695) and the regional compensation fund FONCOR (4,925).'
          ],
          rightH3: 'A date to notice',
          right: [
            'Every row carries the same cut-off date, 29 April 2023, yet the request dates run from 16 December 2022 to 7 April 2024. A file can carry a label that its own contents contradict, so we describe what is in it rather than trusting the label.',
            'The column we use is IMPORTE, the amount. The smallest has one digit before the decimal point and the largest has seven. That spread is the whole problem.'
          ] },
        { kind: 'code', label: 'Version 1: ten equal-width bins', lang: 'Python', code: V1, note: 'It prints: <code>Rows: 19624</code>, then <code>bin 0 19088</code>, <code>bin 1 180</code>, <code>bin 2 350</code>, <code>bin 3 4</code>, <code>bin 4 0</code>, <code>bin 5 1</code>, <code>bin 6 0</code>, <code>bin 7 0</code>, <code>bin 8 0</code> and <code>bin 9 1</code>.' },
        { kind: 'p', mt: true, html: 'Version 1 divides the range from zero to the largest amount into ten equal slices. The result is useless as a picture: 19,088 of 19,624 rows, about 97 per cent, land in the first slice, and seven of the ten bars are empty or nearly so. One or two very large values stretched the scale until everything else was squashed into a single bar. When numbers vary by factors of ten, bin them by order of magnitude instead: one-digit amounts together, two-digit amounts together, and so on.' },
        { kind: 'code', label: 'Version 2: bins by power of ten, two ways', lang: 'Python', code: V2, note: 'It prints <code>0 38 38</code>, <code>1 691 691 #</code>, <code>2 3996 3902 ########</code>, <code>3 12595 12689 #########################</code>, <code>4 1608 1608 ###</code>, <code>5 694 694 #</code>, <code>6 2 2</code>, then <code>Rows where the two methods disagree: 94</code> and <code>math.log(1000, 10) = 2.9999999999999996</code>.' },
        { kind: 'p', mt: true, html: 'Now the shape appears: most payments have four digits, with smaller groups either side. But look at the second and third columns. The logarithm method puts 3,996 rows in the three-digit bin and the digit-counting method 3,902. The 94 rows that differ are all amounts of exactly one thousand. <code>math.log(1000, 10)</code> is computed by dividing two natural logarithms, and the tiny rounding error leaves it just under 3, so <code>int()</code> drops it to 2. Counting digits, or using <code>math.log10</code>, which returns exactly 3.0 for 1000, files them correctly. The bars use the digit counts.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Payment records by number of digits before the decimal point (our calculation)', head: ['Digits', 'Rows', 'Share of rows'], rows: [
          ['1', '38', '0.2%'],
          ['2', '691', '3.5%'],
          ['3', '3,902', '19.9%'],
          ['4', '12,689', '64.7%'],
          ['5', '1,608', '8.2%'],
          ['6', '694', '3.5%'],
          ['7', '2', '0.0%']
        ] },
        { kind: 'source', html: 'Data: Gobierno Regional de Tumbes, Gastos según fuentes financiamiento del Gobierno Regional de Tumbes, ODC-By. Counts and shares are ours; shares are rounded to one decimal place, so they need not add to exactly 100. We print no individual amount and say nothing about any payment\'s purpose.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, with coins and notes.</strong> Sort play money into piles by how many digits it shows. Which pile is tallest?',
          '<strong>Blocks, around 8 to 10.</strong> Make a list of twenty numbers between 3 and 30,000. Sort them into bins by digit count, and draw the bars.',
          '<strong>First Python, around 10 to 12.</strong> Print <code>len(str(n))</code> for 7, 70, 700 and 7000. Predict each answer first.',
          '<strong>Ages 13 and over.</strong> Find every whole number from 1 to 10 million where <code>int(math.log(n, 10))</code> is wrong. Which numbers are they, and why?',
          '<strong>Going further.</strong> Draw the same power-of-ten bars separately for each funding source. Do the shapes differ?'
        ] }
      ]
    },
    {
      id: 'curriculum',
      tint: 'tint',
      eyebrow: 'Schools and training',
      h2: 'Is programming taught in Tumbes schools?',
      lede: 'No, not as its own subject. Tumbes follows the national curriculum, where technology is a skill spread across all areas.',
      body: [
        { kind: 'two',
          leftH3: 'How school is organised',
          left: [
            'Peru\'s General Education Law sets six years of primaria and five of secundaria. Grade follows age on 31 March: six for 1° de primaria, twelve for 1° de secundaria, sixteen for the final year.',
            'Competency 28 of the national curriculum, on working in virtual environments generated by information technology, belongs to every area rather than to one. Of the 35 weekly hours in a regular secundaria timetable, Matemática gets four, and no hour is set aside for programming.'
          ],
          rightH3: 'In the region',
          right: [
            'In August 2025 the regional government announced the reopening of the public teacher-training institute "José Antonio Encinas" in Tumbes after two years of suspension, once MINEDU authorised it.',
            'In August 2023 the regional government also reported progress on the national Territorios Digitales Confiables project, including a "Laboratorio Smart". Neither note mentions programming for school pupils.'
          ] },
        { kind: 'p', mt: true, html: 'Tumbes pupils can enter the same contests as pupils anywhere in Peru. ONEM, MINEDU\'s maths olympiad, holds its first stage inside schools, and its 2026 edition drew more than 1.7 million secundaria pupils; UTEC\'s computing olympiads, OPI among them, are open to every secundaria pupil without charge. We are not linked to MINEDU, UTEC, the regional government or any contest, and all our practice problems are written by us. For olympiad-style preparation, see <a class="ag-inline-link" href="/math-olympiad-coaching-peru">maths olympiad coaching in Peru</a>.' }
      ]
    },
    {
      id: 'pick',
      eyebrow: 'Choosing',
      h2: 'Which course suits a learner in Tumbes?',
      lede: 'Match the course to age and to how confident the learner is with numbers. This is our own guide.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our suggested first course by age and maths confidence', head: ['Who', 'Maths confidence', 'First course', 'Suggested format'], rows: [
          ['Child, 6 to 8', 'Still counting on fingers', 'Logic puzzles, then blocks', 'One to one'],
          ['Child, 9 to 12', 'Shaky with fractions', 'Problem solving, then Scratch', 'One to one first'],
          ['Child, 9 to 12', 'Comfortable', 'Scratch, then first Python', 'Class'],
          ['Secundaria pupil', 'Any', 'Python for Teens', 'Class'],
          ['University or institute student', 'Any', 'Python, then data or web', 'Class or private'],
          ['Adult at work', 'Any', 'Data and AI for non-programmers', 'Private, often']
        ] },
        { kind: 'source', html: 'Guidance of ours. Grades follow age on 31 March, so a class may span nearly a year of birthdays.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Young learners', p: 'Thinking in steps comes first. The mentor narrates every move in short English phrases and the child copies the action, then the words.' },
          { h3: 'Teenagers', p: 'Python with numbers at its heart: scores, prices in a game shop, temperatures. Each result is checked by hand once, so trust is earned.' },
          { h3: 'Adults', p: 'Tables, totals and charts from real files, and careful use of AI assistants, with every answer checked against the data.' }
        ] },
        { kind: 'p', mt: true, html: 'More for secundaria pupils is on <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding for teenagers in Peru</a>; adults with data at work can look at <a class="ag-inline-link" href="/sql-and-data-analysis-course-peru">SQL and data analysis for Peru</a>. All of our Peru guides are gathered on <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">the Peru overview</a>.' }
      ]
    },
    {
      id: 'clock',
      tint: 'tint',
      eyebrow: 'Hours',
      h2: 'When would a Tumbes learner have class?',
      lede: 'When you want. Tumbes uses Peru time, which never changes, and the mentor in India sets the lesson around your day.',
      body: [
        { kind: 'table', numCols: [], caption: 'Tumbes time and India time side by side (examples only, not a timetable)', head: ['In Tumbes', 'In India', 'Mentor\'s part of day'], rows: [
          ['07:00', '17:30', 'Late afternoon'],
          ['10:00', '20:30', 'Evening'],
          ['13:30', '00:00', 'Midnight'],
          ['16:00', '02:30', 'Next day, night'],
          ['19:30', '06:00', 'Next day, dawn'],
          ['21:30', '08:00', 'Next day, morning']
        ] },
        { kind: 'source', html: 'Peru keeps UTC minus 5 hours throughout the year with no summer time (tz database zone America/Lima). India keeps UTC plus 5 hours 30 minutes. The difference is always 10 hours 30 minutes, India ahead.' },
        { kind: 'p', mt: true, html: 'You pick the hour in Tumbes time when you book, and it stays put all year because neither country moves its clocks. Peru\'s 2026 school year began on 16 March 2026, when 53,631 schools opened their doors to 6,225,000 pupils; the long January to March break is a natural moment for school children to begin, and adults can begin in any week.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How a learner in Tumbes builds up skills',
    lede: 'Six stages we use for every age, so families can see where a learner stands and what comes next.',
    table: { caption: 'Our stages, from first steps to well-made charts', head: ['Level', 'Often around', 'Skill'], rows: [
      ['1. Steps', '6 to 7', 'Give a character instructions in order'],
      ['2. Repeats', '7 to 9', 'Use a loop for anything done more than twice'],
      ['3. Choices', '8 to 10', 'Branch with if and else on a comparison'],
      ['4. Lists', '9 to 12', 'Store many values and go through them one by one'],
      ['5. Tallies', '11 to adult', 'Count values into groups with a dictionary'],
      ['6. Scales', '13 to adult', 'Pick bins that suit the data, and distrust a result that looks too neat']
    ] },
    left: { h3: 'For parents', ps: [
      'The spending-data project reaches levels 5 and 6. A learner who has done it can look at a lopsided chart and say why it is lopsided.',
      'You get a short monthly note on what was built and what was hard.'
    ] },
    right: { h3: 'For learners', ps: [
      'If one bar holds nearly everything, change the scale.',
      'Floats round. Test the edges, such as exactly 1000.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine more courses for Tumbes learners',
    lede: 'Three age bands, all taught live in English by one mentor who stays with the learner, either in a class or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'TUM / KIDS / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, confident arithmetic in English.' },
        { code: 'TUM / KIDS / 02', slug: 'scratch-programming-complete-course', title: 'Scratch Programming', blurb: 'Games and animations built from coloured blocks.' },
        { code: 'TUM / KIDS / 03', slug: 'game-development-masterclass-for-kids', title: 'Game making for kids', blurb: 'Simple games with rules, scores and levels.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'TUM / TEEN / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Algebra to functions, explained and practised.' },
        { code: 'TUM / TEEN / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive web pages, step by step.' },
        { code: 'TUM / TEEN / 03', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens', blurb: 'Using AI tools well, within age rules.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'TUM / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Zero to confident, with real exercises.' },
        { code: 'TUM / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Reports from raw tables, done carefully.' },
        { code: 'TUM / ADULT / 03', slug: 'complete-business-finance-mathematics-mastery', title: 'Business maths', blurb: 'Percentages, interest and margins for work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Day to day',
    h2: 'What live online lessons look like from Tumbes',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'A Tumbes morning falls in the mentor\'s afternoon or evening.' },
      { time: 'After school', l: 'Late afternoon and evening slots work too.' },
      { time: 'Private', l: 'Ideal for a learner who needs English slowed right down.' }
    ],
    cells: [
      { h3: 'A mentor who stays', p: 'The learner keeps the same teacher from month to month.' },
      { h3: 'Simple English', p: 'Few words, said twice, written on screen.' },
      { h3: 'Predict, then run', p: 'Learners guess the output before pressing run.' },
      { h3: 'Ages kept apart', p: 'Children learn with children, adults with adults.' },
      { h3: 'Monthly notes', p: 'A short written update for the family.' },
      { h3: 'Class or private', p: 'Fifteen to twenty together, or one learner.' }
    ]
  },

  projectsH2: 'Work by students who stayed with us',
  projectsLede: 'Learners who keep going build programs that do real jobs. Here are some; the <a class="ag-inline-link" href="/student-labs">student labs</a> show plenty more.',
  reviewsLede: 'Reviews left on Google by families and learners, word for word.',

  fees: {
    h2: 'Fees for learners in the Tumbes region',
    lede: 'We charge monthly, in US dollars, to a card. The bank that issued the card converts the charge into soles using its own rate, so the soles total can move a little between months.',
    free: ['First class free', 'Device and English check', 'No card required'],
    group: ['Fifteen to twenty learners near in age', 'One mentor throughout', 'Two live classes weekly', 'Pay monthly, cancel when you choose'],
    one: ['Just the learner and the mentor', 'Speed set by the learner', 'Hours set by the family']
  },

  faq: {
    eyebrow: 'Tumbes asks',
    h2: 'Questions from Tumbes families about online coding and AI classes',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All lessons are live online lessons in English, with no Spanish-language groups. Mentors talk slowly, adjust to the learner\'s pace and accent, and if a learner answers in Spanish they help them say it in English; the teaching stays in English throughout.' },
      { q: 'My child finds maths hard. Is coding still a good idea?', a: 'Often it helps. Code makes each step of a calculation visible, and a program that gives a wrong answer shows exactly where the thinking slipped. We start slowly and add maths practice where it is needed.' },
      { q: 'Can we join from Zarumilla, Aguas Verdes or Zorritos?', a: 'Yes. Every lesson is online, so any town in the region works, as long as the connection holds steady at the chosen hour.' },
      { q: 'Is a phone enough?', a: 'For watching, yes; for programming, no. Typing code needs a keyboard. A shared family laptop is fine, and small children can begin block coding on a tablet.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is always 10 hours 30 minutes ahead of Tumbes; 07:00 in Tumbes is 17:30 in India.' },
      { q: 'Does school in Tumbes teach programming?', a: 'Not as a separate subject. The national curriculum treats digital skills as part of every area, and the standard secundaria week has no programming hours.' },
      { q: 'Are the classes useful for students at institutes or university?', a: 'Yes. Python and data analysis help in engineering, accounting, education and business courses. We teach alongside your studies; your institute or university sets your marks.' },
      { q: 'Do you cover AI?', a: 'Yes, for all ages at the right level. Teenagers and adults see how models learn and where they go wrong; children explore the ideas through games, and no child under 13 uses an adult AI account with us.' },
      { q: 'How are fees paid?', a: 'By card each month, in US dollars, converted to soles by your bank. Someone browsing from India sees rupees instead. The trial lesson is free.' },
      { q: 'Will there be a certificate?', a: 'Courses that include one end with our own certificate of completion. It is not a Peruvian qualification and is not issued or approved by MINEDU, a school or a university.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Keep reading',
    h2: 'Other pages for Tumbes families',
    lede: 'Guides people in the Tumbes region often look at next.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our main Peru page, with every guide listed.' },
      { href: '/razonamiento-matematico-clases-online-peru', label: 'Razonamiento matemático online', p: 'Reasoning practice, explained in Spanish.' },
      { href: '/online-coding-classes-for-kids-peru', label: 'Online coding for kids in Peru', p: 'Choosing a first class for ages 6 to 12.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'When typed code makes sense.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools allow which ages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one live lesson.' }
    ]
  },

  start: {
    h2: 'Try a free class from Tumbes',
    lede: 'The trial lasts about one lesson. Your learner works through a puzzle, builds something small that runs, and chats with the mentor in simple English. You then get a clear recommendation: start now, start one to one, or wait, with the course we would choose.',
    readFirst: 'Before booking you might read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse every syllabus on <a class="ag-inline-link" href="/courses">our courses</a> page.',
    note: 'Every lesson is live online and in English, with mentors who are based in India. WhatsApp is the quickest way to reach us; English messages are answered fastest.',
    formNote: 'No cost, no card details, no pressure to continue.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Worth a look', links: [
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'math.log(1000, 10) is not quite 3'
  },

  personalityCss: `
.ag-root.ag-cbi .ag-hero h1 { letter-spacing: -0.012em; max-width: 19ch; }
.ag-root.ag-cbi .ag-capsule { border-left-width: 3px; border-radius: 8px; }
.ag-root.ag-cbi .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cbi .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cbi .ag-code-head b { letter-spacing: 0.06em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadros N° 1 and 3), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017; INEI Compendio Estadístico Perú 2026 (cuadros 11.5, 11.6, 11.13, 5.16, 5.22, 5.53, 5.54, 5.75); Gobierno Regional de Tumbes notes on gob.pe (22 August 2023, 4 December 2023, 26 August 2025); Ley 28044; MINEDU Edades normativas, CNEB, ONEM 2026; UTEC OPI; EF EPI 2025; tz database. Data: Gobierno Regional de Tumbes, Gastos según fuentes financiamiento, ODC-By.',
    localProject: 'How do you chart numbers that range from tiny to huge? An original Python project on the Gobierno Regional de Tumbes spending file (ODC-By, 19,624 rows): Version 1 uses ten equal-width bins and puts 19,088 rows in the first; Version 2 bins by power of ten, by logarithm and by digit count, and finds 94 rows misfiled because math.log(1000, 10) = 2.9999999999999996. Lesson family: order-of-magnitude bins.',
    requiredMentions: ['gastos-gore-tumbes.csv', 'Rows where the two methods disagree: 94', 'math.log(1000, 10) = 2.9999999999999996', 'bin 0 19088', '256,691', 'Households connected to the internet', 'José Antonio Encinas', 'El Perú Lee', 'math.log(1000, 10) is not quite 3'],
    sources: [
      { claim: 'Department, province and district populations of Tumbes, 2025, and age bands.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Tumbes city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Populated centres of Tumbes, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto24.xlsx' },
      { claim: 'Computers, internet, internet use, ECE 2025, enrolment and teachers in Tumbes and Peru.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'Reopening of the José Antonio Encinas teacher-training institute.', url: 'https://www.gob.pe/institucion/regiontumbes/noticias/1240310-educacion-en-marcha-reabre-el-instituto-pedagogico-jose-antonio-encinas-en-tumbes' },
      { claim: 'El Perú Lee contest: 115,000 participants and a first place for Tumbes pupils.', url: 'https://www.gob.pe/institucion/regiontumbes/noticias/883962-estudiantes-destacan-en-concurso-nacional-de-comprension-lectora-el-peru-lee' },
      { claim: 'Territorios Digitales Confiables progress in Tumbes.', url: 'https://www.gob.pe/institucion/regiontumbes/noticias/829675-avances-en-territorios-digitales-confiables-impulsando-la-transformacion-digital-en-tumbes-en-el-marco-de-la-alianza-multiactor' },
      { claim: 'Spending dataset of the Gobierno Regional de Tumbes, ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/gastos-seg%C3%BAn-fuentes-financiamiento-del-gobierno-regional-de-tumbes-gore-tumbes' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 score for Peru and its scored regions.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without daylight saving.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any individual payment amount, supplier or purpose from the spending file: never printed.',
      'Any judgement about how the regional government spends money: none made; the amounts are used only as numbers.',
      'The names of the pupils in the El Perú Lee note: minors, not printed.',
      'Political names in the regional notes: left out.',
      'A growth figure from 2017 town counts to 2025 district counts: refused.',
      'A regional English score: EF does not score Tumbes.',
      'Any connection with GORE Tumbes, the DRE, MINEDU, UTEC or any school: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
