// SHIP: market (city, kids 6 to 12) | Puno kids: strong primaria maths, thin home internet, English honestly | an unordered pair as a key: sorted() joins A to B with B to A
'use strict';
// Coding classes for kids in Puno, Peru (ag- city page, Peru cluster row PE195; alloc: cities, cbk, #8B3E09).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; fees in USD only, through the template's data-price anchors. Audience: children aged 6 to 12 and their parents.
// Spine: Puno's fourth-graders score well above the national primaria maths result (42.1 v 30.0 per cent), yet only a
// quarter of Puno homes had an internet service in 2025 and EF rates the region's English very low. The page builds on
// the maths, is frank about connection and English, says which Puno children the classes suit now, and teaches with the
// train between Cusco and Puno (OSITRAN passenger file). Different from the Puno region module (OSIPTEL coverage, max()).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-classes-for-kids-in-puno-peru/,
// national facts from pe/facts-school/src and pe/src/inei; every quote string-matched in the raw file):
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (places.tsv): Puno city 128,637 (conglomerate, 22 October
//    2017). INEI Lib1541 dpto21 (tsv_dpto21/sheet0_21.tsv): "PUNO Suni 3 848 125 018".
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (tsv_ind_00/sheet2): "PUNO 1232993"; "PROVINCIA
//    PUNO 219267"; "DISTRITO PUNO 125636"; "DISTRITO ACORA 24734". Cuadro N° 3 (censada): PUNO "De 6 a 11 años" 100965.
//    13 provinces. Never summed.
//  - INEI Compendio Estadístico Perú 2026, tomo 1 (ENAHO): 11.5 Puno 2025 "21,4" (Total "33,9"); 11.6 Puno 2025 "24,8",
//    2015 "5,7" (Total 2025 "56,8"); 11.13 Puno 2025 "69,1" (Total "81,1"). 5.53 (MINEDU UMC, ECE) 4° primaria
//    satisfactory 2025: maths Puno "42,1" (Total "30,0"), 2019 "45,6"; reading Puno "34,1" (Total "32,7").
//  - EF EPI 2025 Peru page (ef_peru.raw): data-state="puno" 417, class epi-very-low; no Puno city score; Peru 519, rank 52
//    of 123; Lima city 555.
//  - Ley 28044 (FACTS 5); MINEDU Edades normativas (FACTS 13, 14); CNEB competency 28 (FACTS 32, 33); RM 501-2025-MINEDU
//    (FACTS 25): DRE/UGEL may set their own spread of weeks; school year 16 March to 18 December 2026.
//  - Time (timezone.tsv): America/Lima UTC-5 all year; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
//  - Data: Organismo Supervisor de la Inversión en Infraestructura de Transporte de Uso Público (OSITRAN), "Tráfico de
//    Pasajeros - FERROCARRIL", Plataforma Nacional de Datos Abiertos, https://www.datosabiertos.gob.pe/dataset/tr%C3%A1fico-
//    de-pasajeros-ferrocarril-organismo-supervisor-de-la-inversi%C3%B3n-en-infraestructura-de, licence "Open Data Commons
//    Attribution License" (dc:license on the raw page). Description: "Tráfico de pasajeros, contabilizados por la entidad
//    prestadora en la infraestructura." File 202608-PDE-REP-00301.csv, 911,080 bytes, 4,955 rows, ';', January 2019 to
//    August 2026; TRAMO values SUR ORIENTE, SUR, CENTRO; SUR rows all operator PERURAIL. Saved 10 November 2026.
// Our own calculations (scratchpad pe/c6/pu/v1.py, v2.py; python3 -I on the downloaded file):
//  v1 prints: CUZCO WANCHAC -> PUNO ESTACION 14413 / PUNO ESTACION -> CUZCO WANCHAC 10301 / CUZCO WANCHAC -> AREQUIPA 1577
//    / AREQUIPA -> CUZCO WANCHAC 1243
//  v2 prints: CUZCO WANCHAC <-> PUNO ESTACION 24714 / AREQUIPA <-> CUZCO WANCHAC 2820 / To Puno: 14413 / From Puno: 10301
//  summary (Cusco Wanchac and Puno Estación, both directions, all services): 2019 9,060 to Puno and 6,850 back; 2020
//    1,221 and 830; 2021 no rows; 2022 4,789 and 3,765; 2023 5,121 and 3,421; 2024 12,189 and 9,206; 2025 14,413 and
//    10,301; 2026 January to August 8,981 and 6,795. 2025 by month (to Puno, back): Jan 608/238, Feb 504/250, Mar 933/556,
//    Apr 1,394/907, May 1,449/1,333, Jun 1,293/878, Jul 1,595/1,240, Aug 1,562/1,319, Sep 1,355/1,224, Oct 1,682/1,291,
//    Nov 1,230/744, Dec 808/321. A second Puno stop, PUNO MUELLE, had 197 riders from Cusco and 58 back in 2025.
// Lesson family: an unordered pair as a dictionary key. tuple(sorted((a, b))) makes Cusco to Puno and Puno to Cusco one
// route; keep the ordered pairs too, to see the imbalance.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'riders = {}',
  'with open("202608-PDE-REP-00301.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        if row["ANIO"] == "2025" and row["TRAMO"] == "SUR":',
  '            trip = (row["ESTACION_ORIGEN"], row["ESTACION_DESTINO"])',
  '            riders[trip] = riders.get(trip, 0) + int(row["CANTIDAD PASAJEROS"])',
  '',
  'top = sorted(riders.items(), key=lambda item: item[1], reverse=True)',
  'for trip, people in top[:4]:',
  '    print(trip[0], "->", trip[1], people)'
].join('\n');

const V2 = [
  'import csv',
  '',
  'riders = {}',
  'one_way = {}',
  'with open("202608-PDE-REP-00301.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        if row["ANIO"] == "2025" and row["TRAMO"] == "SUR":',
  '            a, b = row["ESTACION_ORIGEN"], row["ESTACION_DESTINO"]',
  '            people = int(row["CANTIDAD PASAJEROS"])',
  '            route = tuple(sorted((a, b)))',
  '            riders[route] = riders.get(route, 0) + people',
  '            one_way[(a, b)] = one_way.get((a, b), 0) + people',
  '',
  'top = sorted(riders.items(), key=lambda item: item[1], reverse=True)',
  'for route, people in top[:2]:',
  '    print(route[0], "<->", route[1], people)',
  'print("To Puno:", one_way[("CUZCO WANCHAC", "PUNO ESTACION")])',
  'print("From Puno:", one_way[("PUNO ESTACION", "CUZCO WANCHAC")])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Puno: coding for kids 6 to 12' },
  slug: 'coding-classes-for-kids-in-puno-peru',
  code: 'cbk',
  accent: '#8B3E09',
  accentRationale: 'Coding classes for kids in Puno: the allocated #8B3E09, a burnt adobe orange-brown; it holds above 4.5:1 on #FBF8F2, #F5F1E8 and #EDE7DA, so child-facing links and table rules stay clear',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes for kids in Puno, Peru',
  title: 'Coding Classes for Kids in Puno, Peru: Live Online, in English',
  description: 'Coding for Puno children aged 6 to 12, live online in English at hours you pick: strong primaria maths, honest notes on internet and English, and a train project.',
  ogDescription: 'Live online coding for children in Puno from 6 to 12, taught in English by patient mentors: Scratch first, Python from about 9, a frank look at home internet and English in Puno, and a project counting passengers on the train between Cusco and Puno.',
  twitterDescription: 'Coding for kids in Puno, live online in English: ages 6 to 12, honest fit notes and a Cusco to Puno train project.',
  pageName: 'Coding Classes for Kids in Puno, Peru',
  webPageDescription: 'A parent\'s guide to live online coding classes taught in English for Puno children aged 6 to 12, built on INEI census and household figures, MINEDU curriculum and assessment results, EF EPI 2025 and an original Python project on OSITRAN\'s rail passenger file (ODC-By).',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Puno, Peru: Scratch games and stories from 6, typed Python and logic from about 9, maths-led projects for children who enjoy numbers, in an age-matched group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Puno, kids',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#maths', label: 'Maths and coding' },
    { href: '#fit', label: 'Who it suits' },
    { href: '#train', label: 'Train project' },
    { href: '#kids', label: 'By age' },
    { href: '#clock', label: 'Times' }
  ],
  eyebrow: 'Puno &middot; Children 6 to 12 &middot; Live online, in English',
  h1: 'Coding classes for kids in Puno, Peru',
  lede: 'In 2025 Puno\'s fourth-graders beat the national maths result by a wide margin, and coding is maths a child can play with. This page explains how live online coding in English works for a Puno child, who it suits today and who should wait, what a child learns at each age, and a project in which ten year olds count the people riding the train between Cusco and Puno.',
  secondaryCta: { href: '#train', label: 'See the train project' },
  wa: 'Hello Modern Age Coders, we are a family in Puno, Peru. Our child would like to try live coding classes in English. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; more than 10,000 learners around the world &middot; children always grouped by age',
  spec: [
    ['Ages', '6 to 12, in age-matched groups'],
    ['Starting tool', 'Scratch; Python from about 9'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Puno time', 'Any day, the hour you choose'],
    ['Mentors', 'Live on video, from India'],
    ['Trial', 'A free first class, no card']
  ],
  capsuleQ: 'What families in Puno want to know',
  capsule: 'For Puno children between 6 and 12, Modern Age Coders offers coding lessons held live online and taught in English. Younger pupils make games and stories in Scratch from coloured blocks; nine to twelve year olds type Python and tackle logic and number puzzles that suit Puno\'s strong young mathematicians. Each lesson has a real mentor on video, with a group of fifteen to twenty children of similar age or with your child alone, at days and hours you set. To begin, a child needs a computer, a reliable connection and a little English.',

  picks: {
    eyebrow: 'First courses in Puno',
    h2: 'Three courses Puno children begin with',
    lede: 'Two for younger and older beginners, and one for children who already love numbers. Lessons happen live, in English, among classmates close in age.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PNO / 01', title: 'Coding for Kids', note: 'Six to twelve year olds begin by snapping Scratch blocks together, with no typing: a llama that walks, a quiz, a racing game. Simple apps and the first ideas behind AI come later.' },
      { course: 'python-ai-kids-masterclass', code: 'PNO / 02', title: 'Python and AI for Kids', note: 'For nine to twelve year olds who have never coded. They type genuine Python from the first lesson: drawings, number games, the train project on this page and small experiments in how computers learn.' },
      { course: 'maths-through-coding', code: 'PNO / 03', title: 'Maths through coding', note: 'For children of 10 and over who enjoy maths. Patterns, fractions and puzzles explored with short Python programs, so the numbers move on the screen.' }
    ]
  },

  sections: [
    {
      id: 'maths',
      eyebrow: 'Puno\'s strength',
      h2: 'Are Puno children good at maths, and does that help with coding?',
      lede: 'On MINEDU\'s 2025 assessment, yes, and it helps a great deal. Coding asks for the same habits as maths: careful steps, patterns and checking.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: '4° de primaria pupils at the satisfactory level, 2025 (per cent)', head: ['Subject', 'Puno', 'Peru'], rows: [
          ['Maths', '42.1', '30.0'],
          ['Reading', '34.1', '32.7']
        ] },
        { kind: 'source', html: 'Source: MINEDU, Evaluación Censal de Estudiantes, published in INEI, Compendio Estadístico Perú 2026, tomo 1, table 5.53. Region-wide results; they describe groups of pupils, not any single child. In 2019 Puno\'s maths figure was 45.6 per cent.' },
        { kind: 'two', mt: true,
          leftH3: 'Ahead of the country in maths',
          left: [
            'In 2025, 42.1 per cent of Puno\'s fourth-graders reached the satisfactory level in maths, against 30.0 per cent across Peru. In reading Puno was close to the national figure, 34.1 against 32.7.',
            'A child who already enjoys numbers often takes to coding fast, because a program is a set of exact instructions, and a mistake shows itself straight away on the screen. Many of our projects for nine to twelve year olds are number puzzles in disguise.'
          ],
          rightH3: 'But no coding at school',
          right: [
            'Puno follows the national curriculum, the CNEB, in which digital skills are a transversal competency spread across every area. The education law, Ley 28044, gives primaria six years, and none of its timetabled hours belongs to programming.',
            'Under the 2026 school-year rules each regional office may set its own spread of teaching weeks, so Puno\'s calendar can differ from Lima\'s. Lessons with us run on the family\'s own calendar and carry on through school holidays unless you ask for a pause.'
          ] }
      ]
    },
    {
      id: 'city',
      eyebrow: 'Puno in numbers',
      h2: 'How many children live in Puno?',
      lede: 'Puno is a lake city at 3,848 metres, and the capital of a department of more than a million people. INEI counts it several ways; each row below carries its census and year.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Puno, the province and the department, by INEI\'s units', head: ['Unit', 'People', 'Census and year'], rows: [
          ['Department of Puno (13 provinces)', '1,232,993', '2025, total population'],
          ['Department of Puno, children aged 6 to 11', '100,965', '2025, people counted'],
          ['Province of Puno', '219,267', '2025, total population'],
          ['District of Puno', '125,636', '2025, total population'],
          ['Puno city (urban area of the capital)', '128,637', '2017, people counted'],
          ['Puno, the settlement (3,848 m above sea level)', '125,018', '2017, people counted']
        ] },
        { kind: 'source', html: 'From INEI: tables 1 and 3 of the 2025 census demographic indicators (the census was referenced to 15 September 2025, and table 3 lists those actually enumerated), the 2017 sociodemographic profile, table 1.9, for the city, and the 2017 directory of populated places for the settlement and its altitude (census day 22 October 2017). The rows overlap and are never added.' },
        { kind: 'p', mt: true, html: 'In 2025 the department counted 100,965 children aged 6 to 11. Many live far from the city: the province of Puno alone stretches from the lake shore to districts such as Acora, with 24,734 people. For a child in Acora or Chucuito, a class in the city centre is a long trip; a live online class is the same distance from everywhere. Families in Juliaca, a separate city in the province of San Román, can join in exactly the same way.' }
      ]
    },
    {
      id: 'fit',
      tint: 'tint',
      eyebrow: 'Who it suits',
      h2: 'Can a child in Puno follow online classes in English?',
      lede: 'Some children can start today, some should wait a little, and we would rather say which before you pay. Two things decide it: the connection at home and the child\'s English.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Homes and people online in 2025: Puno against Peru (per cent)', head: ['INEI household survey, 2025', 'Puno', 'Peru'], rows: [
          ['Homes owning a computer', '21.4', '33.9'],
          ['Homes paying for an internet service', '24.8', '56.8'],
          ['Residents aged 6 or older who went online', '69.1', '81.1']
        ] },
        { kind: 'source', html: 'INEI, Compendio Estadístico Perú 2026, tomo 1, tables 11.5, 11.6 and 11.13 (Encuesta Nacional de Hogares). Whole department, city and countryside together; the city is likely better connected, but INEI publishes no city figure. In 2015 only 5.7 per cent of Puno homes had an internet service.' },
        { kind: 'two', mt: true,
          leftH3: 'The connection',
          left: [
            'Only one Puno home in four had an internet service in 2025, and about one in five had a computer. Seven in ten people still went online, mostly on mobile phones. Learning to code takes a proper keyboard and a line steady enough for sixty minutes of video, so plenty of Puno families are not ready yet, and there is no shame in that.',
            'If your home has a computer but a weak connection, try the free class at the hour you would use; the mentor will tell you honestly whether it held. A shared family computer, or a parent\'s laptop in the evening, works perfectly well.'
          ],
          rightH3: 'The English',
          right: [
            'EF\'s English Proficiency Index 2025 scores the Puno region 417, in its very low band, second from the bottom of the 15 Peruvian regions it lists, above only Cajamarca. Peru as a whole scores 519; Lima city 555. Every class is in English only, never in Spanish, so for many Puno children English, not coding, will be the harder part.',
            'Our advice: a child of 6 to 8 with no English yet is usually happier waiting a year. A child of 9 to 12 who has started English at school, watches cartoons in English or attends a school with more English hours can start now, and one-to-one classes let the mentor go as slowly as needed.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Try the machine.</strong> Load any Scratch project in the browser; if it runs without stuttering, the computer will cope for several months.',
          '<strong>Try the line.</strong> Hold a video chat with a relative at the planned lesson hour. If the picture keeps stopping, test a different hour.',
          '<strong>Try a little English.</strong> Ask your child to follow three simple spoken instructions in English, such as "click the green flag". Hesitation is normal; total confusion means waiting or choosing one to one.',
          '<strong>Then book the trial.</strong> Afterwards the mentor tells you how the equipment held, how your child reasoned and how relaxed they seemed in English.'
        ] },
        { kind: 'p', mt: true, html: 'Families sometimes tell us the English becomes a reason to stay: a weekly hour of building, asking and explaining in English with a mentor who waits for the answer. Our page on <a class="ag-inline-link" href="/learn-coding-and-english-together-peru">learning coding and English together</a> explains how mentors handle children who are still early in English.' }
      ]
    },
    {
      id: 'kids',
      eyebrow: 'Ages 6 to 12',
      h2: 'What will a Puno child learn at each age?',
      lede: 'The tool follows the age. Children are always taught with others of a similar age, never with teenagers or adults.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Six to eight', p: 'Lessons are brief and each ends with something on screen. A character walks, jumps and talks because the child arranged the blocks, and a few months in, every child has a short animation of their own. Instructions are read aloud and demonstrated before anyone tries them.' },
          { h3: 'Eight to ten', p: 'Games with scores, timers and levels in Scratch, and for many children their first typed lines of Python. Children learn to plan before building: what should happen first, what repeats, and what decides the ending.' },
          { h3: 'Ten to twelve', p: 'By now most of the work is in Python: programs that sketch shapes, hold a conversation, keep lists and open small files. Number lovers get puzzles a program can verify, and everyone meets the train project further down.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Where a Puno child would begin, set against primaria (MINEDU ages; the plan is ours)', head: ['Grades', 'Ages on 31 March', 'Programming in the national plan', 'Where we would begin'], rows: [
          ['First and second of primaria', '6 to 7', 'Not included', 'Scratch stories, if English is beginning'],
          ['Third and fourth of primaria', '8 to 9', 'Not included', 'Scratch games, then first Python'],
          ['Fifth and sixth of primaria', '10 to 11', 'Not included', 'Python, number puzzles, data projects'],
          ['First of secundaria', '12', 'Not included', 'Python with files and real data']
        ] },
        { kind: 'source', html: 'MINEDU, Edades normativas (age on 31 March of the school year); Ley N.° 28044 (primaria lasts six years); CNEB (no programming area). The last column is our own plan and is adjusted to each child.' },
        { kind: 'p', mt: true, html: 'In every class the mentor asks questions before giving answers: what did you expect, what happened, which block or line made the difference? We teach children to think a problem through, not to copy a solution, and a child who can explain a fix has learned more than one who was handed it. Families comparing options across the country can read the national page on <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">online coding classes for kids in Peru</a>.' }
      ]
    },
    {
      id: 'train',
      eyebrow: 'A Puno project',
      h2: 'How many people rode the train between Cusco and Puno in 2025?',
      lede: 'OSITRAN, the regulator for Peru\'s transport infrastructure, publishes how many passengers each railway carries every month, station to station. Children of ten to twelve work with the file and discover that a trip and a route are different things.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is OSITRAN\'s Tráfico de Pasajeros, FERROCARRIL, released on datosabiertos.gob.pe with the ODC-By licence (Open Data Commons Attribution), which lets anyone reuse it with credit. OSITRAN describes it as passenger traffic counted by the company operating each line.',
            'The file we saved on 10 November 2026, 202608-PDE-REP-00301.csv, has 4,955 rows from January 2019 to August 2026. Each row is a month, an origin station, a destination station and a kind of service, with the number of passengers. The southern line, marked SUR, links Puno with Cusco and Arequipa.'
          ],
          rightH3: 'The question',
          right: [
            'The question for a class of eleven year olds: which train route in the south carried the most people in 2025? Most guess the line between Cusco and Puno, and they are right.',
            'Version 1 adds up the passengers for every pair of stations, from one station to another, and prints the four biggest. Then the children look at the result and frown, because something is listed twice.'
          ] },
        { kind: 'code', label: 'Version 1: count every trip by where it starts and ends', lang: 'Python', code: V1, note: 'It prints: <code>CUZCO WANCHAC -> PUNO ESTACION 14413</code>, <code>PUNO ESTACION -> CUZCO WANCHAC 10301</code>, <code>CUZCO WANCHAC -> AREQUIPA 1577</code> and <code>AREQUIPA -> CUZCO WANCHAC 1243</code>.' },
        { kind: 'p', mt: true, html: 'The program did exactly what it was told: it treated Cusco to Puno and Puno to Cusco as two different things, because the pair (Cusco, Puno) is not the same as the pair (Puno, Cusco). For a ticket that is true. For a question about routes, it is not: both trains run on the same track between the same two stations. The children need a way to make the two pairs into one key.' },
        { kind: 'code', label: 'Version 2: one key per route, in either direction', lang: 'Python', code: V2, note: 'It prints: <code>CUZCO WANCHAC <-> PUNO ESTACION 24714</code>, <code>AREQUIPA <-> CUZCO WANCHAC 2820</code>, then <code>To Puno: 14413</code> and <code>From Puno: 10301</code>.' },
        { kind: 'p', mt: true, html: 'The trick is one line: <code>tuple(sorted((a, b)))</code>. Sorting the two station names puts them in alphabetical order, so Cusco to Puno and Puno to Cusco both become (CUZCO WANCHAC, PUNO ESTACION), and their passengers land in the same box: 24,714 people in 2025. Version 2 also keeps the one-way counts, and they tell a second story. More people rode towards Puno, 14,413, than back to Cusco, 10,301. The file does not say why. Children suggest that some travellers leave Puno another way, by bus or by plane from Juliaca, which is a good guess to test, not a fact.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Passengers between Cusco (Wanchac station) and Puno station, by year and direction (our calculation)', head: ['Year', 'Towards Puno', 'Towards Cusco'], rows: [
          ['2019', '9,060', '6,850'],
          ['2020', '1,221', '830'],
          ['2022', '4,789', '3,765'],
          ['2023', '5,121', '3,421'],
          ['2024', '12,189', '9,206'],
          ['2025', '14,413', '10,301'],
          ['2026, January to August', '8,981', '6,795']
        ] },
        { kind: 'source', html: 'Data: OSITRAN, Tráfico de Pasajeros, FERROCARRIL, datosabiertos.gob.pe, licence ODC-By. The sums are ours, over every service type on the pair. The file has no rows for this pair in 2021, and we do not guess the reason. In 2025 the busiest month towards Puno was October, with 1,682 riders, and the quietest February, with 504. A second Puno stop, which the file calls PUNO MUELLE (muelle means pier), had 197 riders from Cusco and 58 back in 2025.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Six and seven, paper and pencil.</strong> Draw Cusco and Puno with a line between them. Put five counters on trains going one way and three coming back. How many people used the line?',
          '<strong>Eight and nine, Scratch.</strong> Make a train sprite that goes to Puno and back. Count each trip with one variable, then with two, one for each direction.',
          '<strong>Ten to twelve, Python.</strong> Start with Version 1 and say in your own words why the same route appears twice. Then type the sorted line yourself before reading Version 2.',
          '<strong>A step further.</strong> Use the monthly rows to find the month in 2025 when the two directions were closest. What might make people travel both ways in the same month?'
        ] }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Class times',
      h2: 'What time would classes be for a child in Puno?',
      lede: 'Whenever suits your family. Puno is on Peru time all year, and India is a fixed 10 hours 30 minutes ahead.',
      body: [
        { kind: 'table', numCols: [], caption: 'A few Peru hours shown in India time (to help you choose; not a timetable)', head: ['Puno', 'India', 'Which day in India'], rows: [
          ['07:30', '18:00', 'The same day'],
          ['09:30', '20:00', 'The same day'],
          ['11:30', '22:00', 'The same day'],
          ['15:00', '01:30', 'The following day'],
          ['16:30', '03:00', 'The following day'],
          ['18:30', '05:00', 'The following day']
        ] },
        { kind: 'source', html: 'Peru: UTC minus five hours throughout the year, without daylight saving (tz database, America/Lima; INACAL is the official timekeeper). India: UTC plus five hours thirty minutes, also unchanged through the year.' },
        { kind: 'p', mt: true, html: 'Young children usually concentrate more easily earlier in the day, so many families pick a morning slot during the January to March holidays and an after-school slot later. Neither country changes its clocks, so the hour you choose in February is the same hour in November. When you book, you pick the time in Puno time and the system shows the mentor theirs.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Milestones for a Puno child, step by step',
    lede: 'These steps are ours. A mentor uses them to decide which group suits a newcomer, and families use them to see real progress.',
    table: { caption: 'From first blocks to a first real dataset (ours)', head: ['Step', 'Typical age', 'What the child manages'], rows: [
      ['1. Sequence', 'Six or seven', 'Line up blocks so a sprite walks, talks and halts on cue'],
      ['2. Loop', 'Seven or eight', 'Repeat an action with one loop rather than a pile of copies'],
      ['3. Choose', 'Eight or nine', 'Let a game respond to touches, keys and points'],
      ['4. Count', 'Nine or ten', 'Hold a running total in a variable and results in a list'],
      ['5. Type', 'Ten to twelve', 'Write Python using loops, if statements and functions'],
      ['6. Group', 'Eleven or twelve', 'Tally real data in a dictionary, picking the right key']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 6 is the train project: knowing that Cusco to Puno and Puno to Cusco are one route for one question and two trips for another.',
      'We show progress as projects your child can explain, not as time on a screen.'
    ] },
    right: { h3: 'For children', ps: [
      'If the same thing appears twice in your answer, ask whether it really is two things.',
      'Choosing the key is choosing the question.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for children in Puno',
    lede: 'Each suits primaria-age children and is sorted by what a child likes doing. Lessons are live and in English, with one familiar mentor, for a class of similar ages or for your child on their own.',
    bands: [
      { num: 'I', h3: 'Starting out', sub: 'Ages 6 to 9', courses: [
        { code: 'PNO / START / 01', slug: 'scratch-programming-complete-course', title: 'Scratch from zero', blurb: 'Roughly a term of Scratch, ending with a finished, playable game.' },
        { code: 'PNO / START / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, confident calculating that grows from understanding why numbers behave as they do.' },
        { code: 'PNO / START / 03', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Counting, place value and shapes for the youngest learners.' }
      ] },
      { num: 'II', h3: 'Numbers and logic', sub: 'Ages 8 to 12', courses: [
        { code: 'PNO / LOGIC / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Logic puzzles and planning, the thinking underneath every program.' },
        { code: 'PNO / LOGIC / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Grades 1 to 5 maths taught live, with reasoning first.' },
        { code: 'PNO / LOGIC / 03', slug: 'middle-school-math-competitions-course', title: 'Maths competitions', blurb: 'Contest-style problems for strong young mathematicians, written by us.' }
      ] },
      { num: 'III', h3: 'Games and making', sub: 'Ages 8 to 12', courses: [
        { code: 'PNO / MAKE / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'From blocks to real code inside a world children already know.' },
        { code: 'PNO / MAKE / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Children script their own Roblox games in Luau.' },
        { code: 'PNO / MAKE / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'What machine learning is, where it slips, and why a confident answer can still be false.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'Fitting live classes into a Puno week',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Warm mornings', l: 'Morning hours in Puno reach India in the evening, a calm time to start.' },
      { time: 'After school', l: 'An afternoon class in Puno is the early hours in India; mentors teach then.' },
      { time: 'Just your child', l: 'One to one, at a slow pace, on the days you pick.' }
    ],
    cells: [
      { h3: 'The same mentor', p: 'One teacher for the year, who knows your child.' },
      { h3: 'Patient English', p: 'Steps shown first, words repeated, time to reply.' },
      { h3: 'Your child builds', p: 'The child uses the keyboard; the mentor asks and guides.' },
      { h3: 'Grouped by age', p: 'Six year olds with six and seven year olds.' },
      { h3: 'Notes home', p: 'What was made, what was tricky, what comes next.' },
      { h3: 'Class size', p: 'A full class of fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'What our older students have made',
  projectsLede: 'Children who keep coding grow into building real things. A few projects are below, and more are in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents and students in their own words, copied from Google reviews.',

  fees: {
    h2: 'Fees for children in Puno',
    lede: 'Plans are monthly. The fee is priced in US dollars and your card pays in dollars; turning that into soles is your bank\'s job, at its own rate, so the statement may show a slightly different figure.',
    free: ['A free first class', 'A puzzle and a first small game', 'No card needed'],
    group: ['Fifteen to twenty children of similar age', 'The same mentor all year', 'Two live classes each week', 'Monthly; stop whenever you want'],
    one: ['Your child with one mentor', 'A pace set for your child', 'Days and hours you choose']
  },

  faq: {
    eyebrow: 'Puno parents ask',
    h2: 'Coding for kids in Puno: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every lesson is given live and online in English, never in Spanish. Mentors talk slowly and demonstrate before explaining; if a child replies in Spanish, they hear the English version back, kindly. The trial lesson shows whether your child is ready.' },
      { q: 'Can children in Puno take coding classes?', a: 'Yes, from home. A child in Puno, Juliaca or a nearby district joins live on a computer with a mentor on video. Distance from the city makes no difference.' },
      { q: 'My child has little English. Should we wait?', a: 'For a child of 6 to 8 with no English yet, usually yes. Children of 9 to 12 with some school English can start, and one-to-one classes let the mentor go slowly. EF rated Puno region\'s English very low in 2025, so we check this carefully in the free class.' },
      { q: 'What do we need at home?', a: 'A desktop or laptop computer, a line that can carry an hour of video and a headset with a microphone; a phone alone will not do. In 2025 about one Puno home in four had an internet service (INEI), so please test first.' },
      { q: 'At what age can my child start?', a: 'From 6, with Scratch blocks and nothing to type, if your child is comfortable with some English. From about 9, children move to typed Python.' },
      { q: 'When would lessons take place?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is always 10 hours 30 minutes ahead of Puno, so 09:30 in Puno is 20:00 for the mentor.' },
      { q: 'My child is strong at maths. Is there something for them?', a: 'Yes. Maths through coding and our maths competition course suit children who enjoy numbers, with problems we write ourselves. Puno\'s fourth-graders did well in maths in 2025, and coding builds on that.' },
      { q: 'How many children share a class?', a: 'Between fifteen and twenty, all close in age, with one mentor; private lessons are available if you would rather.' },
      { q: 'How much does it cost?', a: 'There is a single monthly fee. It appears here in US dollars and your card pays it in dollars, leaving your bank to work out the soles; visitors in India are shown rupees. Nothing is charged for the trial lesson.' },
      { q: 'Does my child get a certificate?', a: 'Courses that include one give our own certificate of completion, describing what the child built. It is not a school qualification in Peru and is not issued by MINEDU or any school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for Puno families',
    lede: 'Other pages that help parents decide.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'All our Peru pages in one list.' },
      { href: '/online-coding-and-ai-classes-puno-region-peru', label: 'Puno region', p: 'Coding and AI across the department, for every age.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Blocks, sprites and a first finished game.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What typed code looks like at ten.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits for popular AI tools, checked.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A lesson followed from hello to goodbye.' }
    ]
  },

  start: {
    h2: 'Book a free trial lesson from Puno',
    lede: 'Your child solves a short puzzle and builds a tiny game with the mentor. The mentor notes how your child thinks, how comfortable they are in English and whether your computer and connection cope, and then suggests where to start, or when.',
    readFirst: 'If you would like to read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> follows one class from start to end, and our <a class="ag-inline-link" href="/courses">courses</a> page shows every course in full.',
    note: 'Lessons are live and online, in English only, with mentors in India. Messages on WhatsApp in English are answered quickest.',
    formNote: 'Free, without a card, and with no obligation.'
  },

  footer: {
    cols: [
      { h4: 'For children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/online-coding-classes-for-kids-peru', label: 'Kids online, Peru' },
        { href: '/learn-coding-and-english-together-peru', label: 'Coding and English' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/coding-and-ai-classes-in-peru', label: 'All Peru pages' }
      ] }
    ],
    bottomRight: 'One route, two directions'
  },

  personalityCss: `
.ag-root.ag-cbk .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cbk .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-cbk .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-cbk .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-cbk .ag-code-head b { letter-spacing: 0.025em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadros 1 and 3), Perfil Sociodemográfico 2017 (Cuadro N° 1.9) and Directorio de Centros Poblados 2017 (dpto21); INEI Compendio Estadístico Perú 2026 (cuadros 11.5, 11.6, 11.13, 5.53); Ley 28044; MINEDU Edades normativas, CNEB, RM 501-2025-MINEDU; EF EPI 2025; tz database America/Lima. Data: OSITRAN rail passenger traffic, ODC-By.',
    localProject: 'How many people rode the train between Cusco and Puno in 2025? An original Python project on OSITRAN\'s rail passenger file (ODC-By): Version 1 counts ordered (origin, destination) pairs and lists Cusco to Puno (14,413) and Puno to Cusco (10,301) as separate routes; Version 2 keys on tuple(sorted((a, b))) to get one route of 24,714 and keeps the one-way counts to show the imbalance. Lesson family: an unordered pair as a dictionary key.',
    requiredMentions: ['202608-PDE-REP-00301.csv', 'CUZCO WANCHAC <-> PUNO ESTACION 24714', 'CUZCO WANCHAC -> PUNO ESTACION 14413', 'From Puno: 10301', '128,637', '1,232,993', 'One route, two directions', 'scores the Puno region 417', '42.1 per cent of Puno\'s fourth-graders'],
    sources: [
      { claim: 'Puno department, province and district populations and the 6 to 11 age band, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Puno city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Puno settlement and altitude, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto21.xlsx' },
      { claim: 'Computers, internet and internet use in Puno; 4° primaria results, 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'OSITRAN rail passenger file and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/tr%C3%A1fico-de-pasajeros-ferrocarril-organismo-supervisor-de-la-inversi%C3%B3n-en-infraestructura-de' },
      { claim: 'CNEB transversal TIC competency.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative ages by grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025 scores for Peru, Puno and Lima.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Why more passengers rode towards Puno than back: the file does not say; the page offers it only as a question to test.',
      'Why the file has no Cusco to Puno rows in 2021: not stated, so not guessed.',
      'A Puno city internet or English figure: INEI and EF publish department and region figures only.',
      'Any link with OSITRAN, PeruRail, MINEDU, a UGEL or any Puno school: none.',
      'Any claim that coding raises maths results: refused; the page reports MINEDU results only.',
      'Spanish-language teaching: every class is in English.',
      'A combined Puno population from city, district or settlement rows: never summed.'
    ]
  }
};
