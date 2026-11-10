// SHIP: market (city, kids 6 to 12) | Huánuco kids: few home computers, Kotosh visits, live coding in English | select columns by a name pattern: children counted in four ticket columns, not one
'use strict';
// Coding classes for kids in Huánuco, Peru (ag- city page, Peru cluster row PE192; alloc: cities, cohu, #8D1B17).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; fees in USD only, through the template's data-price anchors. Audience: children aged 6 to 12 and their parents.
// Spine: Huánuco families are the least equipped of the departments on this row set (17.5 per cent of households with a
// computer in 2025, INEI), so the page is frank about what a child needs at home before anything else, explains what
// primaria gives a child in Huánuco, and teaches with children's visits to Kotosh, the archaeological site the
// Ministerio de Cultura runs in the district of Huánuco. Different spine and dataset from the Huánuco region module
// (regional asset inventory, date heaping) and from the UNHEVAL enrolment file used elsewhere.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-classes-for-kids-in-huanuco-peru/,
// national school facts from pe/facts-school/src; census from pe/src/inei; every quote string-matched in the raw file):
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (places.tsv): Huánuco city 196,627 (población censada,
//    22 October 2017, conglomerate). INEI Lib1541 dpto10 (tsv_dpto10/sheet0_10.tsv), single centros poblados 2017:
//    "HUANUCO Yunga fluvial 1 921 84 612"; "PAUCARBAMBA Yunga fluvial 1 950 68 735"; "CAYHUAYNA Yunga fluvial 1 996 35 682".
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (tsv_ind_00/sheet2): "HUÁNUCO 807377";
//    "PROVINCIA HUÁNUCO 339222"; "DISTRITO HUÁNUCO 96567"; "DISTRITO AMARILIS 93466"; "DISTRITO PILLCO MARCA 58022".
//    Cuadro N° 3 (sheet4, censada): HUÁNUCO 771443; "De 6 a 11 años" 87526. Never summed.
//  - INEI Compendio Estadístico Perú 2026, tomo 1 (ENAHO): 11.5 households with a computer Huánuco 2025 "17,5" (Total
//    "33,9"; Lima Metropolitana "47,3"); 11.6 households with internet Huánuco 2025 "33,3" (Total "56,8"), 2015 "9,3";
//    11.13 people aged 6+ using internet Huánuco 2025 "69,8" (Total "81,1"). Table 5.53 (MINEDU UMC, ECE), 4° primaria
//    satisfactory maths 2025 Huánuco "23,2" (Total "30,0"), reading "24,2" (Total "32,7").
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): no Huánuco city or region score; Peru 519, rank 52 of 123;
//    Lima city 555.
//  - Ley 28044 (FACTS 5): primaria "dura seis años"; MINEDU Edades normativas (FACTS 13, 14): age at 31 March, 1°
//    primaria 6; CNEB competency 28 transversal (FACTS 32, 33); MINEDU 16 March 2026 (FACTS 17): "53 631 colegios ...
//    6 225 000 estudiantes"; RM 501-2025-MINEDU school year 16 March to 18 December 2026.
//  - Time (timezone.tsv): America/Lima UTC-5 all year, Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
//  - Data: Ministerio de Cultura (MINCUL), "Museos", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/museos, licence "Open Data Commons Attribution License" (dc:license on the
//    raw page), resource "Dataset - Visitantes a museos", base de datos_0.csv, 2,946,288 bytes, 21,014 rows, FECHA_CORTE
//    20240529; saved as visitantes-museos.csv on 10 November 2026. Huánuco rows: 416, all one museum, "Sala de Exhibicion
//    de La Zona Arqueologica Monumental de Kotosh", 2007 to April 2024, Nacionales and Extranjeros. Location (same
//    ministry, "Ubicación de los museos administrados por el Ministerio de Cultura"): province Huanuco, district Huanuco.
// Our own calculations (scratchpad pe/c6/hu/v1.py, v2.py; python3 -I on the downloaded file):
//  v1 prints: Children in 2023: 12666 / Busiest month: Enero 3660 / March: 245
//  v2 prints: Columns with children: ['NIN_BOLESPPAGANTES', 'NIN_PAGANTES', 'NIN_BOLESPNOPAGANTES', 'NIN_NOPAGANTES'] /
//    Children in 2023: 13517 / March: 355 / Rows that add up to TOTAL: 24 of 24
//  summary (all visitors, children in the four NIN_ columns): 2007 15,105 and 4,632; 2010 39,320 and 10,801; 2015
//    54,256 and 11,263; 2019 71,423 and 13,367; 2022 55,450 and 10,787; 2023 64,924 and 13,517. 2023 by month (all,
//    children): Jan 11,546/3,729; Feb 6,807/888; Mar 3,697/355; Apr 3,300/331; May 0/0; Jun 0/0; Jul 5,418/942; Aug
//    10,545/2,947; Sep 6,433/1,435; Oct 6,419/1,121; Nov 5,418/910; Dec 5,341/859. 2023 Nacionales 64,558, Extranjeros 366.
// Lesson family: select columns by a name pattern (startswith) so no group is left out; a total spread over several
// columns, checked against the file's own TOTAL.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'children = {}',
  'with open("visitantes-museos.csv", encoding="latin-1") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        if row["NOM_DPTO"] == "Huanuco" and row["ANIO"] == "2023":',
  '            month = row["NOM_MES"]',
  '            children[month] = children.get(month, 0) + int(row["NIN_PAGANTES"])',
  '',
  'print("Children in 2023:", sum(children.values()))',
  'busiest = max(children, key=children.get)',
  'print("Busiest month:", busiest, children[busiest])',
  'print("March:", children["Marzo"])'
].join('\n');

const V2 = [
  'import csv',
  '',
  'children = {}',
  'checked = 0',
  'with open("visitantes-museos.csv", encoding="latin-1") as f:',
  '    reader = csv.DictReader(f, delimiter=";")',
  '    kid_columns = [name for name in reader.fieldnames if name.startswith("NIN_")]',
  '    print("Columns with children:", kid_columns)',
  '    for row in reader:',
  '        if row["NOM_DPTO"] == "Huanuco" and row["ANIO"] == "2023":',
  '            month = row["NOM_MES"]',
  '            kids = sum(int(row[name]) for name in kid_columns)',
  '            children[month] = children.get(month, 0) + kids',
  '            groups = [name for name in reader.fieldnames',
  '                      if name.split("_")[0] in ("ADU", "EST", "NIN", "MIL", "ADM")]',
  '            if sum(int(row[name]) for name in groups) == int(row["TOTAL"]):',
  '                checked += 1',
  '',
  'print("Children in 2023:", sum(children.values()))',
  'print("March:", children["Marzo"])',
  'print("Rows that add up to TOTAL:", checked, "of 24")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Huánuco: coding for kids 6 to 12' },
  slug: 'coding-classes-for-kids-in-huanuco-peru',
  code: 'cohu',
  accent: '#8D1B17',
  accentRationale: 'Coding classes for kids in Huánuco: the allocated #8D1B17, a fired-clay red that sits well on the warm paper; it clears 4.5:1 on #FBF8F2, #F5F1E8 and #EDE7DA, so links and rules stay readable for parents on a phone',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes for kids in Huánuco, Peru',
  title: 'Coding Classes for Kids in Huánuco, Peru: Live, in English',
  description: 'Coding for children aged 6 to 12 in Huánuco, live online in English at hours you choose: what primaria covers, what a child needs at home, and a Kotosh project.',
  ogDescription: 'Live online coding for Huánuco children from 6 to 12, taught in English by mentors who slow down for young learners: Scratch first, typed Python from about 9, honest advice on computers at home, and a project on children\'s visits to Kotosh.',
  twitterDescription: 'Coding for kids in Huánuco, live online in English: ages 6 to 12, honest equipment advice and a Kotosh data project.',
  pageName: 'Coding Classes for Kids in Huánuco, Peru',
  webPageDescription: 'A parent\'s guide to live online coding classes taught in English for children aged 6 to 12 in Huánuco, built on INEI census and household figures, MINEDU curriculum and assessment results, and an original Python project on the Ministerio de Cultura museum-visitor file (ODC-By).',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Huánuco, Peru: Scratch stories and games from 6, typed Python and first AI ideas from about 9, in an age-matched group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Huánuco, kids',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#home', label: 'What you need' },
    { href: '#ages', label: 'Ages 6 to 12' },
    { href: '#kotosh', label: 'Kotosh project' },
    { href: '#english', label: 'English' },
    { href: '#clock', label: 'Times' }
  ],
  eyebrow: 'Huánuco &middot; Children 6 to 12 &middot; Live online, in English',
  h1: 'Coding classes for kids in Huánuco, Peru',
  lede: 'A child in Huánuco can learn to code from home with a real teacher on screen, no travel across Amarilis or Pillco Marca, and no centre to find. This page starts with the honest question of what you need at home, then shows what primaria in Huánuco does and does not teach, how a live class in English works for a six or a ten year old, and a project built on how many children visited Kotosh in 2023.',
  secondaryCta: { href: '#kotosh', label: 'See the Kotosh project' },
  wa: 'Hello Modern Age Coders, we live in Huánuco, Peru and our child would like coding classes in English. Could we try a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ learners worldwide &middot; children grouped by age, never mixed with adults',
  spec: [
    ['Ages', '6 to 12, in age-matched groups'],
    ['First tool', 'Scratch blocks; typed Python from about 9'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Huánuco time', 'Any day, at the hour you choose'],
    ['Mentors', 'Live on video from India'],
    ['Free first class', 'Yes, no card asked']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'Modern Age Coders teaches coding to children aged 6 to 12 in Huánuco, Peru, live online and in English. Six to eight year olds build animated stories and games in Scratch by snapping blocks together; around nine, children move on to real Python and their first ideas about AI. A mentor teaches every class on live video, either to an age-matched group of fifteen to twenty children or to your child alone, on the days and at the hours your family picks. A computer with a keyboard and a steady connection is the one thing you need at home.',

  picks: {
    eyebrow: 'Where Huánuco children start',
    h2: 'Three courses for a first year of coding',
    lede: 'One for the youngest, one for children ready to type, and one for children who already live inside a game. Each is taught live, in English, to children of a similar age.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'HCO / 01', title: 'Coding for Kids', note: 'Ages 6 to 12, a year-long path. Drag-and-drop blocks in Scratch first: a cat that talks, a maze, a quiz about Huánuco. Later, simple apps and a gentle first look at how AI works.' },
      { course: 'python-ai-kids-masterclass', code: 'HCO / 02', title: 'Python and AI for Kids', note: 'Ages 9 to 12, from zero. Real typed Python from the first week: turtle drawings, small games and tiny AI experiments, building towards the Kotosh project further down this page.' },
      { course: 'minecraft-coding-for-kids-course', code: 'HCO / 03', title: 'Minecraft coding', note: 'For children who already love Minecraft: blocks first, then real code that builds, counts and repeats. A good door for a child who says coding sounds like homework.' }
    ]
  },

  sections: [
    {
      id: 'home',
      eyebrow: 'Before anything else',
      h2: 'What does a child in Huánuco need at home for online coding classes?',
      lede: 'A computer with a keyboard, a connection that holds a video call, and a quiet corner for about an hour. We say this first because, in Huánuco, the computer is the part many families do not yet have.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Homes and people online in 2025: Huánuco department against Peru (per cent)', head: ['Measure (INEI, 2025)', 'Huánuco', 'Peru, all', 'Lima Metropolitana'], rows: [
          ['Households with at least one computer', '17.5', '33.9', '47.3'],
          ['Households with an internet service', '33.3', '56.8', '76.5'],
          ['People aged 6 and over who used the internet', '69.8', '81.1', '89.0']
        ] },
        { kind: 'source', html: 'Source: INEI, Compendio Estadístico Perú 2026, tomo 1, cuadros 11.5, 11.6 and 11.13, from the Encuesta Nacional de Hogares (ENAHO). Figures are for the whole department of Huánuco, not the city alone. In 2015 only 9.3 per cent of Huánuco households had an internet service, so the 2025 figure is more than three times higher.' },
        { kind: 'two', mt: true,
          leftH3: 'Fewer than one home in five has a computer',
          left: [
            'In 2025, 17.5 per cent of households in the department of Huánuco had at least one computer, about half the national figure of 33.9 per cent. Internet reaches more homes than computers do: a third of households pay for a service, and almost seven in ten people aged six and over went online, mostly, we assume, on a phone.',
            'So we will not pretend that every Huánuco family can start next week. If your child has only a phone, coding classes are not yet the right buy, and we would rather tell you so than take a fee for a class your child cannot follow.'
          ],
          rightH3: 'What works, and what does not',
          right: [
            'A laptop or desktop with a keyboard and a mouse or trackpad is what works. Scratch runs in a web browser, so even an older machine copes with the first months; typed Python needs a real keyboard, because nobody learns to type code on a touch screen.',
            'The connection needs to hold a video call for an hour. A shared family computer is fine. Many children in our classes use a parent\'s work laptop in the evening, and the first free class is the place to check that the set-up holds.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Check the machine.</strong> Open a browser and visit the Scratch website. If a project plays smoothly, the computer is ready for the first months.',
          '<strong>Check the connection.</strong> Make a video call to a relative for ten minutes at the hour you have in mind for the class. If the picture freezes often, try another hour or move nearer the router.',
          '<strong>Choose the corner.</strong> A table, a chair and headphones with a microphone. Young children concentrate far better with headphones, and the mentor hears them clearly.',
          '<strong>Book the free class.</strong> The mentor sees your child, your screen and your sound, and tells you honestly whether the set-up will hold a full course.'
        ] }
      ]
    },
    {
      id: 'city',
      eyebrow: 'Huánuco in numbers',
      h2: 'How many children live in Huánuco?',
      lede: 'Huánuco is a valley city of a few hundred thousand people, spread across three districts that run into one another. INEI counts it in more than one way, and the figures below each carry their own census and year.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Huánuco, as INEI counts it', head: ['What is counted', 'People', 'Census'], rows: [
          ['Department of Huánuco (11 provinces)', '807,377', '2025, total population'],
          ['Department of Huánuco, children aged 6 to 11', '87,526', '2025, people counted'],
          ['Province of Huánuco', '339,222', '2025, total population'],
          ['District of Huánuco', '96,567', '2025, total population'],
          ['District of Amarilis', '93,466', '2025, total population'],
          ['District of Pillco Marca', '58,022', '2025, total population'],
          ['Huánuco city (urban area of the capital)', '196,627', '2017, people counted']
        ] },
        { kind: 'source', html: 'Figures for 2025 come from tables 1 and 3 of the Indicadores demográficos released with INEI\'s Censos Nacionales 2025 (reference day 15 September 2025; table 3 holds people actually enumerated). The city row is table 1.9 of INEI\'s 2017 sociodemographic profile, the latest city count available in November 2026. Because the rows overlap, nobody should add them up.' },
        { kind: 'two', mt: true,
          leftH3: 'Three districts, one valley',
          left: [
            'The city most families call Huánuco spills over the districts of Huánuco, Amarilis and Pillco Marca, along the Huallaga valley. INEI\'s 2017 directory of populated places puts the central settlement, Huánuco, at 1,921 metres above sea level with 84,612 people, Paucarbamba in Amarilis at 1,950 metres with 68,735, and Cayhuayna in Pillco Marca at 1,996 metres with 35,682.',
            'Those three are separate settlements in INEI\'s list. We quote them side by side and never as one total, because the conglomerate figure of 196,627 is INEI\'s own and is counted differently.'
          ],
          rightH3: 'Why online fits a spread-out city',
          right: [
            'A class at a centre in the middle of town means a parent crossing the river twice in the late afternoon. An online lesson finds a child in Paucarbamba and another in Cayhuayna at the very same minute, and the time saved goes into the class itself.',
            'In the 2025 census the department counted 87,526 children aged 6 to 11, the primaria years. Most of them will never sit in a coding class unless one comes to their home.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'What primaria covers',
      h2: 'Do primary schools in Huánuco teach coding?',
      lede: 'Not as a subject. Huánuco follows Peru\'s national curriculum, the CNEB, which treats digital skills as something every area should use rather than as a lesson with its own hour.',
      body: [
        { kind: 'two',
          leftH3: 'Six years of primaria, no computing hour',
          left: [
            'Under the Ley General de Educación, primaria lasts six years. MINEDU\'s normative ages are measured on 31 March, so a child starts 1° de primaria at six and usually finishes 6° de primaria at eleven.',
            'In the CNEB, the competency about working in "entornos virtuales" (number 28) is transversal, meaning it is spread through every area instead of owning a lesson. A teacher may bring a tablet into a maths hour, yet the plan never asks anyone to show a child how a program gets written.'
          ],
          rightH3: 'How Huánuco children did in 2025',
          right: [
            'MINEDU\'s census assessment of 4° de primaria, published in INEI\'s 2026 compendium, found 23.2 per cent of Huánuco pupils at the satisfactory level in maths in 2025, against 30.0 per cent nationally, and 24.2 per cent in reading against 32.7.',
            'Coding does not replace school maths, and we make no promise about marks. What it does is give a child a reason to use numbers: to move a character ten steps, count a score, or check that a total adds up, as the Kotosh project below asks.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Primaria years, normative ages and where coding sits (MINEDU)', head: ['School year', 'Normative age at 31 March', 'Coding at school', 'Our usual start'], rows: [
          ['1° and 2° de primaria', '6 and 7', 'No coding area', 'Scratch: stories and moving characters'],
          ['3° and 4° de primaria', '8 and 9', 'Digital skills across areas only', 'Scratch games, then first typed Python'],
          ['5° and 6° de primaria', '10 and 11', 'Digital skills across areas only', 'Python, small games, first AI ideas'],
          ['1° de secundaria', '12', 'No computing area in the week', 'Python with files and real data']
        ] },
        { kind: 'source', html: 'Sources: Ley N.° 28044, Ley General de Educación; MINEDU, Edades normativas; MINEDU, Currículo Nacional de la Educación Básica (competency 28); INEI, Compendio Estadístico Perú 2026, cuadro 5.53 (MINEDU, Evaluación Censal de Estudiantes). The last column is our own course plan, not MINEDU\'s.' },
        { kind: 'p', mt: true, html: 'MINEDU counted 53,631 schools and 6,225,000 students when lessons began on 16 March 2026, and this school year closes on 18 December 2026. Our classes follow your family\'s calendar instead: they carry on through the July break and the long summer from late December to March unless you pause them, and many Huánuco parents use January and February, when school is out, to start.' }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Ages 6 to 12',
      h2: 'At what age can a child in Huánuco start coding?',
      lede: 'At six, with blocks. The age decides the tool, not the other way round, and children are always grouped with others of a similar age.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Six to eight', p: 'Classes are short and playful. Children drag coloured blocks to make a character walk, talk and change costume, and by the end of a term they have built an animated story of their own. Reading is helpful but not essential: the mentor reads instructions aloud and shows each step.' },
          { h3: 'Eight to ten', p: 'Scratch grows into real games with scores, levels and timers. Children learn the three ideas every program uses, doing things in order, repeating, and deciding, and many begin to type their first lines of Python. A Minecraft or Roblox course suits children who need a game to stay curious.' },
          { h3: 'Ten to twelve', p: 'Typed Python becomes the main tool. Children write programs that draw, ask questions, keep lists and read small files, and they begin to see how a computer can learn from examples. At this age a child can follow the Kotosh project on this page from start to finish.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'A first year for a Huánuco child, by age (our own plan)', head: ['Age', 'First term', 'Second term', 'By the end of the year'], rows: [
          ['6 to 7', 'A talking character and a short story', 'A simple maze game', 'Their own animated story, shown to the family'],
          ['8 to 9', 'A game with a score', 'Levels and a timer', 'A quiz or platform game with three levels'],
          ['10 to 12', 'First Python: drawings and questions', 'Lists, loops and small files', 'A small data project, such as counting visitors']
        ] },
        { kind: 'source', html: 'The plan is ours and is adjusted to each child. Some children move faster; nobody is pushed to type before they are ready.' }
      ]
    },
    {
      id: 'live',
      eyebrow: 'How a class runs',
      h2: 'What does a live online coding class look like for a young child?',
      lede: 'A mentor on video, the child\'s own screen shared, and the child doing the building. Here is a typical hour for a group of eight and nine year olds.',
      body: [
        { kind: 'ol', items: [
          '<strong>Hello and a warm-up.</strong> The mentor greets each child by name and asks one quick question, often a puzzle, to settle the group.',
          '<strong>Today\'s goal.</strong> One small, visible goal: make the bat fly across the screen, or keep score when the cat catches a fish.',
          '<strong>Build it together.</strong> The mentor shows one step, then each child does it on their own computer. Children share their screen when stuck, and the mentor guides rather than takes over.',
          '<strong>Make it yours.</strong> Every child changes something: a colour, a sound, a rule. This is where real thinking happens, because the change usually breaks something first.',
          '<strong>Show and tell.</strong> Two or three children show what they made and explain one thing they fixed, in their own English, at their own pace.',
          '<strong>A note for parents.</strong> After class, families hear what was built and what comes next.'
        ] },
        { kind: 'p', mt: true, html: 'We teach children to think through a problem, not to copy an answer. A mentor who sees a child stuck asks "what did you expect to happen, and what happened instead?" before giving any hint. That habit, more than any language or tool, is what a child takes away from a year of classes. If you want a gentler first look at how this works for the very youngest, our guide to <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">online coding classes for kids in Peru</a> walks through it age by age.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Can a Spanish-speaking child in Huánuco follow classes in English?',
      lede: 'Many can, with a patient mentor, and the free first class is where we find out. Every class is in English only; we never teach in Spanish.',
      body: [
        { kind: 'two',
          leftH3: 'An honest fit note',
          left: [
            'EF\'s English Proficiency Index 2025 publishes no score for Huánuco, city or region. For Peru as a whole it gives 519, 52nd of 123 countries, in the moderate band, with Lima city at 555. We cannot tell you how strong English is in Huánuco classrooms, and we will not guess.',
            'What we can say is which children usually manage. A child at a bilingual school, or one who already watches cartoons in English, follows from the first week. A child who has had only the school English hours may need a few weeks of patience, and a six year old with no English at all is usually happier starting a little later.'
          ],
          rightH3: 'How mentors make English easy',
          right: [
            'Mentors speak slowly, use short sentences and the same words for the same actions every week: "drag", "repeat", "when the flag is clicked". They show each step on screen before saying it, so a child can follow with their eyes.',
            'When a child replies half in Spanish, the mentor understands and offers the English phrase back, kindly. Scratch blocks and Python keywords look identical in Lima, Huánuco or London, and most of an hour goes on making things work rather than on talk. For more on this, see <a class="ag-inline-link" href="/coding-classes-in-english-for-peruvian-kids">coding classes in English for Peruvian kids</a>.'
          ] },
        { kind: 'p', mt: true, html: 'Families often find the English is a second gift: an hour of building and explaining every class is an hour of listening and speaking with someone who waits for the answer. That is also why we never rush a young child, and why, after the free class, the mentor tells you both how keen your child was and how relaxed they seemed in English.' }
      ]
    },
    {
      id: 'kotosh',
      tint: 'tint',
      eyebrow: 'A Huánuco project',
      h2: 'How many children visited Kotosh in 2023?',
      lede: 'Kotosh is the archaeological site with an exhibition hall that the Ministerio de Cultura runs in the district of Huánuco. The ministry publishes how many people visit each month, and our ten to twelve year olds use that file to practise one careful habit: before adding up a group, hunt down every place it might be hiding.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Ministerio de Cultura releases a dataset called Museos through datosabiertos.gob.pe, the national open-data portal, with an ODC-By licence (Open Data Commons Attribution), so anyone may reuse it if they credit the ministry. Its visitor file, which we saved on 10 November 2026 as visitantes-museos.csv, has 21,014 rows: one per museum, per month and per kind of visitor, Peruvian or foreign, from 2007 to April 2024.',
            'The 416 rows for the department of Huánuco all belong to one place, the Sala de Exhibición de la Zona Arqueológica Monumental de Kotosh. Each row splits visitors into adults, students, children, military visitors and older adults, and again into paying and free tickets.'
          ],
          rightH3: 'The question',
          right: [
            'We ask a group of eleven year olds a simple question: how many children visited Kotosh in 2023, and which month was busiest? Most guess the July holidays.',
            'The first program reads every Huánuco row for 2023, adds up the column called NIN_PAGANTES, which means paying children, by month, and prints the total, the busiest month and the figure for March.'
          ] },
        { kind: 'code', label: 'Version 1: add up the children column', lang: 'Python', code: V1, note: 'It prints: <code>Children in 2023: 12666</code>, then <code>Busiest month: Enero 3660</code> and <code>March: 245</code>.' },
        { kind: 'p', mt: true, html: 'January wins, not July: January is the middle of Peru\'s summer school break, and families travel. That part of the answer holds. The total does not. When the children look at the column names again, they find NIN_ four times: paying children, children on a special paying ticket, children on a special free ticket, and children who entered free. Version 1 counted only one of the four.' },
        { kind: 'code', label: 'Version 2: find every children column by its name, then check the totals', lang: 'Python', code: V2, note: 'It prints: <code>Columns with children: [\'NIN_BOLESPPAGANTES\', \'NIN_PAGANTES\', \'NIN_BOLESPNOPAGANTES\', \'NIN_NOPAGANTES\']</code>, then <code>Children in 2023: 13517</code>, <code>March: 355</code> and <code>Rows that add up to TOTAL: 24 of 24</code>.' },
        { kind: 'p', mt: true, html: 'Two ideas make Version 2 better. Instead of typing one column name, it asks the file for every column whose name starts with NIN_, so a column nobody remembered cannot be missed. Then it checks its own work: for every row it adds up all the visitor groups and compares the result with the file\'s TOTAL column. All 24 rows for 2023 agree, which tells us the groups really cover everyone. The answer rises from 12,666 to 13,517 children, and March from 245 to 355, because March is when school groups often enter free.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Kotosh visits by year: everyone, and children in all four children columns (our calculation)', head: ['Year', 'All visitors', 'Children'], rows: [
          ['2007', '15,105', '4,632'],
          ['2010', '39,320', '10,801'],
          ['2015', '54,256', '11,263'],
          ['2019', '71,423', '13,367'],
          ['2022', '55,450', '10,787'],
          ['2023', '64,924', '13,517']
        ] },
        { kind: 'source', html: 'Data from the Museos visitor file of the Ministerio de Cultura (datosabiertos.gob.pe, licence ODC-By); every sum here is ours, built from the monthly rows. In 2023, 64,558 of the visitors were Peruvian and 366 foreign. The file shows no visitors at all in May and June 2023 and does not say why, so we do not guess. The 2024 rows stop at April.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 7, with paper.</strong> Draw four boxes and put a number of paper children in each. Count only one box, then count all four. Which answer is the real one?',
          '<strong>Ages 8 to 9, in Scratch.</strong> Make four variables for the four kinds of children ticket and a fifth called total. Make the cat say the total only after all four are added.',
          '<strong>Ages 10 to 12, first Python.</strong> Run Version 1, then, before reading Version 2, list every column in the file whose name contains NIN and explain what each one might mean.',
          '<strong>A step further.</strong> Change Version 2 to count students, the EST_ columns, instead of children. Which month do students visit most, and why might that be?'
        ] }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Class times',
      h2: 'What time would a Huánuco child have class?',
      lede: 'At the hour you choose. Huánuco keeps Peru time all year, and the mentor in India works around your child\'s day.',
      body: [
        { kind: 'table', numCols: [], caption: 'How a Peru hour reads in India (example conversions, not a timetable)', head: ['Peru time, Huánuco', 'India time', 'Day in India'], rows: [
          ['08:00', '18:30', 'Same day'],
          ['10:00', '20:30', 'Same day'],
          ['12:30', '23:00', 'Same day'],
          ['16:00', '02:30', 'The next day'],
          ['17:30', '04:00', 'The next day'],
          ['19:00', '05:30', 'The next day']
        ] },
        { kind: 'source', html: 'Clock facts: Peru sits five hours behind UTC in every month and has no summer time (tz database, zone America/Lima; the official hour is kept by INACAL), while India sits five and a half hours ahead of UTC. So the gap stays at 10 hours 30 minutes all year.' },
        { kind: 'p', mt: true, html: 'Young children take in most when they are fresh, so many Huánuco families choose a morning slot in the school holidays and an afternoon slot once school is back. Because neither Peru nor India moves its clocks, an hour agreed in January is still the same hour in October. When you book the free class, you pick the hour in your own clock and the system converts it for the mentor.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What a Huánuco child can do after each stage',
    lede: 'Our own stages for children aged 6 to 12. They help us place a new child in the right group and show parents what has really been learned.',
    table: { caption: 'Stages from first blocks to a first data project (ours)', head: ['Stage', 'Usual age', 'The child can'], rows: [
      ['1. Sequence', '6 to 7', 'Put blocks in order so a character walks, talks and stops'],
      ['2. Repeat', '7 to 8', 'Use a loop instead of copying the same block ten times'],
      ['3. Decide', '8 to 9', 'Make a game react: if the cat touches the fish, add a point'],
      ['4. Store', '9 to 10', 'Keep a score or a list, and change it as the game runs'],
      ['5. Type', '10 to 12', 'Write Python with loops, if and simple functions'],
      ['6. Check', '11 to 12', 'Add up a group from a real file and test the answer against a total']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 6 is the Kotosh project. A child who can say "I checked my total against the file" has learned something many adults skip.',
      'Progress reaches you as a list of things your child made and can explain, never as screen time.'
    ] },
    right: { h3: 'For children', ps: [
      'If your answer is smaller than you expected, look for the children you forgot to count.',
      'A program that checks itself is a program you can trust.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for children in Huánuco',
    lede: 'All for ages 6 to 12, grouped by what a child wants to do. Each is live, in English, with the same mentor every week, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 9', courses: [
        { code: 'HCO / FIRST / 01', slug: 'scratch-programming-complete-course', title: 'Scratch from zero', blurb: 'Three months from a first moving sprite to a finished game.' },
        { code: 'HCO / FIRST / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Thinking puzzles', blurb: 'Patterns, logic games and planning puzzles that sharpen thinking.' },
        { code: 'HCO / FIRST / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for young children, built on understanding rather than tricks.' }
      ] },
      { num: 'II', h3: 'Games and making', sub: 'Ages 8 to 12', courses: [
        { code: 'HCO / MAKE / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Scripting real Roblox games in Luau, for children who play them already.' },
        { code: 'HCO / MAKE / 02', slug: 'block-coding-app-development-masterclass', title: 'App making with blocks', blurb: 'Simple phone apps built from blocks: a quiz, a timer, a drawing pad.' },
        { code: 'HCO / MAKE / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Scratch, Roblox and Minecraft projects that grow into full games.' }
      ] },
      { num: 'III', h3: 'Ready for more', sub: 'Ages 9 to 12', courses: [
        { code: 'HCO / MORE / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How AI learns from examples, where it goes wrong, and how to question it.' },
        { code: 'HCO / MORE / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Fractions, angles and times tables turned into short Python programs, from about 10.' },
        { code: 'HCO / MORE / 03', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A first real website in HTML and CSS, made and published by the child.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes work for a child in Huánuco',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Holiday mornings', l: 'In January and February many children start early, while school is closed.' },
      { time: 'After school', l: 'Late afternoon in Huánuco is early morning in India; the mentor is there.' },
      { time: 'One to one', l: 'A personal hour, on the days your family picks, with one mentor.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'One teacher all year, who learns how your child thinks.' },
      { h3: 'Slow, clear English', p: 'Short sentences, steps shown before they are said.' },
      { h3: 'Child at the keyboard', p: 'Your child builds; the mentor guides and asks questions.' },
      { h3: 'Age-matched groups', p: 'Six year olds learn beside six and seven year olds, not beside pre-teens.' },
      { h3: 'Notes for parents', p: 'What was made, what was hard, what comes next.' },
      { h3: 'Group or one to one', p: 'Fifteen to twenty children, or your child alone.' }
    ]
  },

  projectsH2: 'What our students go on to build',
  projectsLede: 'Children who keep going end up making real tools and games. A few are shown here, and the <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'What parents and students wrote in their Google reviews, quoted exactly.',

  fees: {
    h2: 'Fees for children in Huánuco',
    lede: 'Plans are paid month by month. We set the fee in US dollars and take it from your card in that currency; your bank does the conversion to soles with its own exchange rate, which is why the amount on your statement may differ a little.',
    free: ['A free first class for your child', 'A short puzzle and a first project', 'No card asked'],
    group: ['Fifteen to twenty children of a similar age', 'One mentor all year', 'Two live classes every week', 'Monthly, and you can stop at any time'],
    one: ['Your child and one mentor', 'Projects chosen around your child', 'Days and hours you choose']
  },

  faq: {
    eyebrow: 'Huánuco parents ask',
    h2: 'Coding for kids in Huánuco: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No, never. Each lesson is live, online and in English. Mentors speak slowly and clearly, show each step on screen before explaining it, and give the English word when a child answers in Spanish. The free first class checks whether your child is comfortable.' },
      { q: 'Can a child in Huánuco take coding classes without travelling?', a: 'Yes, from home. A child in Huánuco, Amarilis or Pillco Marca logs in on a computer and the mentor appears on video, so no district is further away than another.' },
      { q: 'What does my child need at home?', a: 'A laptop or desktop computer with a keyboard, a connection that holds a video call for an hour, and headphones with a microphone. A phone is not enough. In 2025 only 17.5 per cent of households in Huánuco department had a computer (INEI), so please check before you book.' },
      { q: 'How young can my child begin?', a: 'At 6. Six to eight year olds start with Scratch blocks, with nothing to type. From about 9, children type real Python. Children are always grouped with others of a similar age.' },
      { q: 'Does school in Huánuco teach coding?', a: 'No coding lesson exists in primaria. Schools in Huánuco use the CNEB, which spreads digital skills through all areas without giving programming an hour of its own. Our classes add what the timetable leaves out.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. The mentor\'s clock in India runs 10 hours 30 minutes ahead of Huánuco all year: a 10:00 class for you is 20:30 for them.' },
      { q: 'Will coding help my child at school?', a: 'It often helps with logic and patience, but we promise no marks or grades. Coding gives children a reason to use numbers and to check their work, as in the Kotosh project on this page.' },
      { q: 'How big are the groups?', a: 'A group has fifteen to twenty children of a similar age with one mentor. If you would rather your child learned alone, one-to-one classes are at hours you choose.' },
      { q: 'How much does it cost?', a: 'You pay monthly. This page lists the fee in US dollars, your card is charged in dollars and your bank turns that into soles; from India the page shows rupees. Trying the first class costs nothing and needs no card.' },
      { q: 'Do children get a certificate?', a: 'Some courses end with a certificate of completion that we issue ourselves. MINEDU, schools and universities play no part in it and it counts for nothing in Peruvian school records; it simply records what your child built.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for Huánuco families',
    lede: 'Pages that answer the next questions parents usually ask.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru page in one place.' },
      { href: '/python-for-kids-peru', label: 'Python for kids in Peru', p: 'When typed code makes sense, and how it starts.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'The first tool for six to eight year olds.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Safe, age-right AI ideas for children.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which tools a child may use at each age.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, step by step.' }
    ]
  },

  start: {
    h2: 'Try a free first class from Huánuco',
    lede: 'In the free class your child solves a puzzle and makes something small. Meanwhile the mentor watches three things, how your child reasons, how easily English lands and whether the computer and connection cope, and afterwards recommends where to begin.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a live class in detail, and the <a class="ag-inline-link" href="/courses">full course list</a> has each plan in detail.',
    note: 'Our mentors teach from India, live over video, and only in English. For a quick reply, message us on WhatsApp in English.',
    formNote: 'Free, no card, and no promise to continue.'
  },

  footer: {
    cols: [
      { h4: 'For children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-kids-peru', label: 'Python for kids in Peru' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/online-coding-classes-for-kids-peru', label: 'Online classes, Peru' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/coding-and-ai-classes-in-peru', label: 'All Peru pages' }
      ] }
    ],
    bottomRight: 'Count every box before you add'
  },

  personalityCss: `
.ag-root.ag-cohu .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-cohu .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-cohu .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cohu .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cohu .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadros 1 and 3), Perfil Sociodemográfico 2017 (Cuadro N° 1.9) and Directorio de Centros Poblados 2017 (dpto10); INEI Compendio Estadístico Perú 2026 (cuadros 11.5, 11.6, 11.13, 5.53); Ley 28044; MINEDU Edades normativas, CNEB, school-year opening 2026; EF EPI 2025; tz database America/Lima. Data: Ministerio de Cultura, Museos (visitor file), ODC-By.',
    localProject: 'How many children visited Kotosh in 2023? An original Python project on the Ministerio de Cultura museum-visitor file (ODC-By): Version 1 adds only NIN_PAGANTES and finds 12,666 children with January busiest; Version 2 selects every column whose name starts with NIN_, finds 13,517, and checks that all visitor groups add up to the TOTAL column on 24 of 24 rows. Lesson family: select columns by a name pattern so no group is left out.',
    requiredMentions: ['visitantes-museos.csv', 'Children in 2023: 13517', 'Rows that add up to TOTAL: 24 of 24', 'Busiest month: Enero 3660', '196,627', '807,377', 'Count every box before you add', 'Paucarbamba in Amarilis at 1,950 metres', '17.5 per cent of households in the department of Huánuco'],
    sources: [
      { claim: 'Huánuco department, province and district populations and the 6 to 11 age band, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Huánuco city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Settlements and altitudes, 2017 directory of populated places, Huánuco.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto10.xlsx' },
      { claim: 'Households with a computer and internet, internet use, and 4° primaria results, 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'Museum visitor file and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/museos' },
      { claim: 'CNEB transversal TIC competency.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative ages by grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025 scores for Peru and Lima.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Why Kotosh shows no visitors in May and June 2023: the file does not say, so the page does not guess.',
      'The age of the Kotosh site, its distance from the city centre or any history of it: no primary source fetched, so left out.',
      'An English level for Huánuco: EF EPI 2025 publishes none, so the page says so.',
      'A combined Huánuco population from the city, district or settlement rows: never summed.',
      'Any promise that coding raises school marks: refused.',
      'Spanish-language teaching: every class is in English.',
      'Any link with the Ministerio de Cultura, MINEDU, a UGEL or any Huánuco school: none.'
    ]
  }
};
