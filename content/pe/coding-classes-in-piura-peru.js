// SHIP: market (city) | Piura city: learning to code in English while English is still growing | missing days: walk consecutive dates with timedelta; a gap is not a zero
'use strict';
// Coding classes in Piura, Peru (ag- city page, Peru cluster row PE048, P6; alloc: cities, cpi, #750B00). Written 2026-11-10.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: any hour; USD only through
// data-price anchors. Kids and teens first; every age covered.
// Spine (differs from the Piura region page, which leads on home computers and market prices): EF scores Piura city's English
// as low, so this page is honest about learning to code in English while English is still developing, shows how few English
// minutes school gives (JER and JEC), covers the districts that make up the city and its universities, and teaches with the
// river readings taken at the Sánchez Cerro bridge.
// Sources (research folder ~/Desktop/SkyCoders/keyword-research-2026-09/pe/; every quote string-matched in the raw file):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (src/inei/tab/tsv_ind_00/sheet2_CUADRO_N_1.tsv):
//    "PIURA 2115215" (department, second after LIMA METROPOLITANA 10141775); PROVINCIA PIURA 935084; districts VEINTISÉIS DE
//    OCTUBRE 206998, CASTILLA 193614, PIURA 155566, TAMBO GRANDE 137686, CATACAOS 88249, LA UNIÓN 48907, LA ARENA 44986;
//    PROVINCIA SULLANA 350259. Never summed.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Piura city 473,025 (2017 census, conglomerate).
//  - INEI Compendio Estadístico Perú 2026, tomo 1: 5.66 "013 Universidad Nacional de Piura ... 12 713" (2025); 5.64 UNP
//    entrants 2025 "2 179"; 5.67 (private) "029 Universidad de Piura ... 9 922" (whole university, all campuses).
//  - CNEB (facts-school/src/cneb/text.txt): secundaria JER "Inglés 3 3 3 3 3", "Total de horas 35 35 35 35 35"; JEC "Inglés
//    5 5 5 5 5", "Total de horas 45 45 45 45 45"; primaria "Inglés 2 2 3 3 3 3"; "horas pedagógicas (45 minutos)".
//  - EF EPI 2025 (facts-market/src/ef_peru.raw): cityScore piura "low" 484; stateScore piura "low" 482; lima "high" 555;
//    Peru 519 "moderate"; band floors 450 low, 500 moderate, 550 high.
//  - MINEDU 16 March 2026 (n-inicio2026): "6 225 000 estudiantes"; "53 631 colegios de Educación Básica Regular".
//  - Time (facts-geo/timezone.tsv): America/Lima UTC-5 all year (last summer time 1994); Asia/Kolkata UTC+5:30.
//  - Data: Gobierno Regional de Piura (author: Proyecto Especial Chira Piura), "Datos Hidrometereológicos [Gobierno Regional
//    Piura]", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/datos-hidrometereol%C3%B3gicos-gobierno-regional-piura, licence "Open Data Commons
//    Attribution License" (dc:license on the raw page), released 2022-09-06, modified 2026-09-09. Dictionary: CAUDAL07H
//    "Medida de caudal tomado a las 07:00 horas" in m³/s. File tb_medida_estaciones_act.csv, 4,862,602 bytes, sha256
//    3b3597fc...883cf5a539, 45,192 rows; the bridge station appears as "PTE. SANCHEZ CERRO" (1,276 rows) and
//    "PTE. S ANCHEZ CERRO" (396 rows), district Castilla; saved to src-pages/coding-classes-in-piura-peru/data/ 9 November 2026.
// Our own calculations (scratchpad pe/c1/piura/v1.py, v2.py; copies in src-pages/.../data/; python3 -I on the file):
//  v1 prints: Days in the file: 1672 from 20220101 to 20260831 / Days with water at 07:00: 852
//  v2 prints: Calendar days: 1704 Days in the file: 1672 / Gap: 2023-12-02 to 2023-12-24 / Gap: 2024-02-10 to 2024-02-11 /
//    Gap: 2024-07-01 to 2024-07-06 / Gap: 2026-01-30 to 2026-01-30 / Never written down: 32 Written but blank: 42
//  summary by calendar month (days recorded / days with water): Jan 154/65, Feb 139/93, Mar 155/151, Apr 150/125, May 155/120,
//    Jun 150/104, Jul 149/83, Aug 155/42, Sep 120/8, Oct 124/8, Nov 120/39, Dec 101/14; 778 days at 0.0; blanks only in July
//    (11) and August (31).
// Lesson family: missing days in a daily series. Turn text dates into date objects, walk consecutive pairs with zip, and use
// timedelta to list gaps; keep "never recorded", "recorded blank" and "recorded zero" as three different things.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = String.raw`import csv

days = {}
with open("tb_medida_estaciones_act.csv", encoding="utf-8") as readings:
    for row in csv.DictReader(readings):
        if row["ESTACION"].replace(" ", "") == "PTE.SANCHEZCERRO":
            days[row["FECHA_REGISTRO"]] = row["CAUDAL07H"].strip()

wet = [d for d, flow in days.items() if flow != "" and float(flow) > 0]
print("Days in the file:", len(days), "from", min(days), "to", max(days))
print("Days with water at 07:00:", len(wet))`;

const V2 = String.raw`import csv
from datetime import date, timedelta

days = {}
with open("tb_medida_estaciones_act.csv", encoding="utf-8") as readings:
    for row in csv.DictReader(readings):
        if row["ESTACION"].replace(" ", "") == "PTE.SANCHEZCERRO":
            d = row["FECHA_REGISTRO"]
            days[date(int(d[:4]), int(d[4:6]), int(d[6:]))] = row["CAUDAL07H"].strip()

first, last = min(days), max(days)
calendar = (last - first).days + 1
print("Calendar days:", calendar, "Days in the file:", len(days))

dates = sorted(days)
for before, after in zip(dates, dates[1:]):
    if after - before > timedelta(days=1):
        print("Gap:", before + timedelta(days=1), "to", after - timedelta(days=1))

blank = sum(1 for flow in days.values() if flow == "")
print("Never written down:", calendar - len(days), "Written but blank:", blank)`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Piura: coding while English grows' },
  slug: 'coding-classes-in-piura-peru',
  code: 'cpi',
  accent: '#750B00',
  accentRationale: 'Coding classes in Piura: a deep oxblood #750B00, allocated to this row, the darkest red in the city set and steady against warm paper; contrast 10.98 on #FBF8F2, 10.33 on #F5F1E8 and 9.45 on #EDE7DA, far above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in Piura, Peru',
  title: 'Coding Classes in Piura, Peru: Live Online, Taught in English',
  description: 'Coding classes in Piura for kids, teens and adults, live online in English at any hour: how learners still building their English cope, and a river data project.',
  ogDescription: 'Live online coding for Piura children, teenagers and adults, taught in clear English at the hour each family chooses: how a learner whose English is still growing keeps up, what school gives, the city\'s districts and universities, and a Python project on the Sánchez Cerro river readings.',
  twitterDescription: 'Coding in Piura, live online in English, even while English is still growing: courses by age and a real river data project.',
  pageName: 'Coding Classes in Piura, Peru',
  webPageDescription: 'A guide for Piura families and adult learners to live online coding classes taught in English, built from INEI census and university figures, MINEDU curriculum hours, EF EPI 2025 and an original Python project on the Gobierno Regional de Piura hydrometeorological open data (ODC-By).',
  courseDescription: 'Live online coding classes in English for learners in Piura, Peru: Scratch, Roblox and Python for children from 6, Python, Java, apps and AI for secundaria students, and Python, data analysis and AI tools for university students and adults, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Piura',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#english', label: 'English' },
    { href: '#ages', label: 'By age' },
    { href: '#project', label: 'River project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Piura &middot; Live online, in English &middot; Ages 6 and up',
  h1: 'Coding classes in Piura, Peru',
  lede: 'The question Piura parents ask most is not about Python or Scratch. It is whether a child whose English is still basic can follow a coding class taught in English. This page answers that honestly first, then shows which course suits each age, what school leaves out, and a project built on the river readings taken every morning at the Sánchez Cerro bridge.',
  secondaryCta: { href: '#english', label: 'Read about English first' },
  wa: 'Hello Modern Age Coders, we are in Piura, Peru. Our child\'s English is still basic; could we try a free live coding class in English?',
  heroNote: 'Live online since 2020 &middot; over 10,000 learners worldwide &middot; mentors trained to teach beginners in English',
  spec: [
    ['Ages', 'From 6; adults welcome'],
    ['English level', 'Basic is enough to begin'],
    ['First tools', 'Scratch, then Python'],
    ['Class size', 'Fifteen to twenty, or private'],
    ['Piura time', 'Any hour you pick'],
    ['Trial', 'Free, no card']
  ],
  capsuleQ: 'The quick answer',
  capsule: 'Yes: learners in Piura, Peru can take live online coding classes in English with Modern Age Coders, even if their English is still basic. Children of 6 to 8 start with Scratch, those of about 9 to 12 move to Python or Roblox games, teenagers learn Python, Java, apps and AI, and adults learn Python, data analysis or AI tools. Every lesson is led live on video by a mentor who speaks slowly and clearly, in classes of fifteen to twenty or privately, at the hour the family sets.',

  picks: {
    eyebrow: 'Start here in Piura',
    h2: 'Three starting courses for Piura learners',
    lede: 'Chosen for learners who are new to both code and English: visual first, then typed code with plenty of support.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PIU / 01', title: 'Scratch Programming', note: 'For young children starting from nothing. Blocks, pictures and sounds carry most of the meaning, so English words are learned by using them, one at a time.' },
      { course: 'python-ai-kids-masterclass', code: 'PIU / 02', title: 'Python and AI for Kids', note: 'Ages 9 to 12. The first typed programs, with short English keywords such as print, if and for, explained with examples on screen before any definition.' },
      { course: 'complete-app-development-masterclass-for-teens', code: 'PIU / 03', title: 'App Development for Teens', note: 'For 13 to 18 year olds who want to build something they can show on a phone. Design, screens and logic, built up step by step.' }
    ]
  },

  sections: [
    {
      id: 'english',
      eyebrow: 'Learning in English',
      h2: 'Can my child learn coding in English if their English is still basic?',
      lede: 'Yes, in most cases, and the first class will show you. Coding is one of the easier subjects to learn in a second language, because the screen shows what every word means.',
      body: [
        { kind: 'two',
          leftH3: 'What the figures say about Piura',
          left: [
            'EF\'s English Proficiency Index 2025 scores Piura city 484 and the Piura region 482, both in its "low" band. Peru as a whole scores 519 and Lima city 555. EF\'s scores come from adults who took its test, so they say nothing exact about any one child, but they match what Piura parents tell us: English is a skill still being built.',
            'We would rather say this plainly than promise that every child will understand everything from the first day. Most do not, and they do not need to.'
          ],
          rightH3: 'Why coding is a good place to practise',
          right: [
            'In a coding class, the mentor says "move ten steps" and the character on the screen moves ten steps. The meaning is visible. After a few weeks, words like repeat, if, variable and list are simply part of the child\'s vocabulary.',
            'Python itself uses a few dozen short English words. A learner who knows print, input, if, else, for and while can already write real programs.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'How our mentors adapt a class for a learner with basic English (our practice)', head: ['Moment in class', 'What the mentor does'], rows: [
          ['Giving an instruction', 'Says it in a short sentence, then shows it on the shared screen'],
          ['A new word appears', 'Writes it in the chat and uses it three or four times in the class'],
          ['The learner hesitates', 'Waits, then repeats the idea in simpler words, never louder'],
          ['The learner answers in Spanish', 'Takes the answer as given and supplies the English term'],
          ['End of class', 'Asks the learner to say, in their own English, what they built']
        ] },
        { kind: 'source', html: 'English scores: EF English Proficiency Index 2025, Peru page (bands: 450 and above low, 500 moderate, 550 high). The classroom practices are ours.' },
        { kind: 'p', mt: true, html: 'The free first class doubles as a check. If a child is lost, the mentor will say so and suggest a slower start, such as a private class for the first month. The approach is set out at length on <a class="ag-inline-link" href="/learn-coding-and-english-together-peru">our coding-and-English page</a>, and Spanish-speaking parents can read <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'English and computing at school',
      h2: 'How much English and computing does school give a Piura child?',
      lede: 'A few hours of English a week and no computing area. That is the national plan of study, which every school in Piura follows.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'English hours a week in the national plan of study, and what they mean in minutes (our arithmetic)', head: ['Stage', 'English, teaching hours a week', 'Minutes a week'], rows: [
          ['1° and 2° primaria', '2', '90'],
          ['3° to 6° primaria', '3', '135'],
          ['Secundaria, regular day (JER)', '3', '135'],
          ['Secundaria, full day (JEC)', '5', '225']
        ] },
        { kind: 'source', html: 'Source: MINEDU, Currículo Nacional de la Educación Básica, plans of study for primaria and secundaria. One teaching hour is 45 minutes; the minutes column is our multiplication. A regular secundaria week has 35 teaching hours and a full-day week 45, neither with a computing area.' },
        { kind: 'two', mt: true,
          leftH3: 'Two hours and a quarter a week',
          left: [
            'On the regular school day, a secundaria student gets three teaching hours of English, which is 135 minutes a week. A weekly coding class in English adds another hour or more of listening and speaking, with a clear purpose and an adult who waits for the answer.',
            'It does not replace English lessons. It gives the English a job to do.'
          ],
          rightH3: 'No computing on the timetable',
          right: [
            'The national curriculum treats digital skills as transversal, spread across every area, and has no subject for programming. A Piura teenager can finish secundaria without writing a program.',
            'On 16 March 2026, MINEDU reported, 53,631 schools across Peru reopened for 6,225,000 pupils. Our classes do not follow that calendar, so a Piura family can start in the hot summer months and simply keep the same hour once school resumes.'
          ] }
      ]
    },
    {
      id: 'city',
      eyebrow: 'Piura in figures',
      h2: 'How many people live in Piura, and where?',
      lede: 'The department of Piura has more people than any other in Peru except Lima Metropolitana: 2,115,215 in INEI\'s 2025 census. Its capital city spreads over several districts on both banks of the Piura river.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Piura by the unit INEI counts', head: ['Unit', 'People', 'Census'], rows: [
          ['Department of Piura (8 provinces)', '2,115,215', '2025'],
          ['Province of Piura', '935,084', '2025'],
          ['District of Veintiséis de Octubre', '206,998', '2025'],
          ['District of Castilla', '193,614', '2025'],
          ['District of Piura (the centre)', '155,566', '2025'],
          ['District of Tambo Grande', '137,686', '2025'],
          ['District of Catacaos', '88,249', '2025'],
          ['Piura city (urban area)', '473,025', '2017']
        ] },
        { kind: 'source', html: 'Figures come from INEI: the 2025 census (Indicadores demográficos, first table, every unit in Peru) and, for the city, the capitals table of the 2017 census profile. The province of Sullana, next door, is counted separately at 350,259. No row is ever added to another.' },
        { kind: 'two', mt: true,
          leftH3: 'Three districts, one city',
          left: [
            'Veintiséis de Octubre, to the west, is the most populous district of the province, ahead of Castilla across the river and the central district of Piura. Families in all three share one city, and many cross a bridge every day.',
            'A coding class at home spares a child that crossing. In the hottest months, it also spares them the walk at midday.'
          ],
          rightH3: 'Universities in the city',
          right: [
            'INEI\'s compendium, using SUNEDU data, counts 12,713 undergraduates at the Universidad Nacional de Piura in 2025, with 2,179 new entrants that year, and 9,922 at the private Universidad de Piura across all its campuses.',
            'We are connected with neither. Undergraduates in Piura study Java, Python and algorithms with us next to their own courses. The <a class="ag-inline-link" href="/online-coding-and-ai-classes-piura-region-peru">Piura region page</a> covers Sullana, Talara, Paita and the rest of the department.'
          ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Every age',
      h2: 'Which course fits a Piura learner, from 6 to adult?',
      lede: 'Start from age and from what the learner wants to make. Learners who are new to English can begin one step gentler than their age suggests; the mentor moves them up when they are ready.',
      body: [
        { kind: 'table', numCols: [], caption: 'Starting points by age (our courses and ages)', head: ['Age', 'Gentle start', 'Standard start', 'Later'], rows: [
          ['6 to 8', 'Scratch Programming', 'Coding for Kids', 'Games with scores and levels'],
          ['8 to 12', 'Coding for Kids', 'Roblox game coding or Python and AI for Kids', 'Typed Python projects'],
          ['13 to 15', 'Python and AI for Kids pace, teen group', 'Python for Teens', 'Java, apps or web'],
          ['15 to 18', 'Python for Teens', 'App Development or AI and Machine Learning', 'PCEP certificate, contests'],
          ['University', 'Python masterclass', 'Java for university, data structures', 'Interview practice'],
          ['Adults', 'Python masterclass', 'Data analysis', 'AI coding agents at work']
        ] },
        { kind: 'source', html: 'All course ages and routes are ours. Teenagers are always taught with teenagers and adults with adults, whatever course they take.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Children', p: 'Short, visual classes with lots of making. A child who knows only a few English words can still drag a block, press the green flag and see what happens. Words follow actions.' },
          { h3: 'Teenagers', p: 'Teenagers often understand more English than they speak. The mentor asks short questions, lets them type answers in the chat if they prefer, and builds towards explaining their code aloud.' },
          { h3: 'Adults', p: 'Adults learning English and code at once often find the code the easier half. We teach Python, data and AI tools at a pace set around work, and our learners range in age up to their sixties.' }
        ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real Piura project',
      h2: 'How many days does the river under the Sánchez Cerro bridge carry water?',
      lede: 'The Gobierno Regional de Piura publishes daily readings from the river, canal and reservoir stations of the Chira Piura project as open data. One station sits at the Sánchez Cerro bridge, between the district of Piura and Castilla. Our older students use it to learn that a missing day is not a dry day.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is "Datos Hidrometereológicos [Gobierno Regional Piura]", prepared by the Proyecto Especial Chira Piura and released by the Gobierno Regional de Piura as open data with an ODC-By licence (Open Data Commons Attribution), last updated on 9 September 2026. Our copy, saved on 9 November 2026, has 45,192 rows from dozens of stations.',
            'For each station and day there is a flow measured at seven in the morning, in cubic metres per second, and some daily summaries. The bridge station is spelt two ways in the file, with and without a stray space in "SANCHEZ", so the code removes spaces before comparing names.'
          ],
          rightH3: 'The question',
          right: [
            'On how many days was there water in the river at seven in the morning? A first program reads the bridge\'s rows, keeps one reading per date, and counts the dates whose flow is above zero.',
            'Version 1 also prints the first and last date, which looks like enough to say "out of all the days from January 2022 to August 2026".'
          ] },
        { kind: 'code', label: 'Version 1: count the days in the file', lang: 'Python', code: V1, note: 'It prints <code>Days in the file: 1672 from 20220101 to 20260831</code> and <code>Days with water at 07:00: 852</code>.' },
        { kind: 'p', mt: true, html: 'So the river flowed on 852 of 1,672 days, about half. But is 1,672 the number of days between 1 January 2022 and 31 August 2026? A student who counts on a calendar gets a different number, and that difference is where the real lesson starts. Version 2 turns each text date into a <code>date</code>, counts the calendar days, then walks through the dates in pairs and prints every place where the next date is more than one day after the previous one.' },
        { kind: 'code', label: 'Version 2: find the days that are not there', lang: 'Python', code: V2, note: 'It prints <code>Calendar days: 1704 Days in the file: 1672</code>, then <code>Gap: 2023-12-02 to 2023-12-24</code>, <code>Gap: 2024-02-10 to 2024-02-11</code>, <code>Gap: 2024-07-01 to 2024-07-06</code>, <code>Gap: 2026-01-30 to 2026-01-30</code> and <code>Never written down: 32 Written but blank: 42</code>.' },
        { kind: 'p', mt: true, html: 'Thirty-two days were never recorded at all, most of them in one block in December 2023, and another 42 days have a row with an empty flow. That leaves three kinds of day that a careless program would mix up: a day with water, a day recorded as zero, and a day nobody wrote down. Only the first two tell us anything about the river.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Days recorded and days with water at 07:00, by calendar month, January 2022 to August 2026 (our calculation)', head: ['Month', 'Days recorded', 'Days with water'], rows: [
          ['January', '154', '65'],
          ['February', '139', '93'],
          ['March', '155', '151'],
          ['April', '150', '125'],
          ['May', '155', '120'],
          ['June', '150', '104'],
          ['July', '149', '83'],
          ['August', '155', '42'],
          ['September', '120', '8'],
          ['October', '124', '8'],
          ['November', '120', '39'],
          ['December', '101', '14']
        ] },
        { kind: 'source', html: 'Data: Gobierno Regional de Piura, Datos Hidrometereológicos (Proyecto Especial Chira Piura), datosabiertos.gob.pe, ODC-By. Station at the Sánchez Cerro bridge, flow at 07:00. Counts are ours. "Days recorded" includes 42 days with an empty value, all in July and August; September to December have only four years of data in the file, January to August five.' },
        { kind: 'p', mt: true, html: 'The pattern is clear enough for a ten year old to read: water almost every March morning, almost never in September or October. December looks dry partly because one December is mostly missing. Before comparing months, a careful student divides by the days actually recorded, not by the days on the calendar.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 8 to 10, with a calendar.</strong> Count the days from 1 January to 31 March of a year that is not a leap year. Then count them again for 2024. Why is one answer bigger?',
          '<strong>Ages 10 to 12, in Python.</strong> Write the dates 1, 2, 3, 5, 6 and 9 in a list and print every number that is missing.',
          '<strong>Ages 13 to 15.</strong> Change Version 1 so it also counts days recorded as zero and days left blank, and check that the three counts add up to 1,672.',
          '<strong>Ages 15 and over.</strong> For each month, divide days with water by days recorded, not by days in the month. Which month changes most?',
          '<strong>Adults.</strong> Pick another station in the file and run Version 2 on it. Are the gaps in the same weeks?'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are the classes for Piura families?',
      lede: 'Any time. Piura keeps Peru time all year and never changes its clocks, and the mentor plans around school, work and the heat of the day.',
      body: [
        { kind: 'table', numCols: [], caption: 'Piura hours and the matching time for a mentor in India (examples, not a schedule)', head: ['Piura', 'India', 'Day in India'], rows: [
          ['06:00', '16:30', 'Same day'],
          ['09:00', '19:30', 'Same day'],
          ['11:30', '22:00', 'Same day'],
          ['15:00', '01:30', 'The next day'],
          ['17:30', '04:00', 'The next day'],
          ['20:30', '07:00', 'The next day']
        ] },
        { kind: 'source', html: 'Peru is five hours behind UTC all year and has used no summer time since 1994 (IANA tz database, America/Lima; INACAL publishes the legal time). India is five and a half hours ahead of UTC, so India is always ten and a half hours ahead of Piura.' },
        { kind: 'p', mt: true, html: 'Piura families often like an early class, before the afternoon heat, or an evening one once it cools. You choose the slot in Piura time when booking, and it stays the same through every month of the year.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Two ladders a Piura learner climbs at once',
    lede: 'Our own stages for code, side by side with what we usually see happen to a learner\'s English. Every learner moves at their own speed.',
    table: { caption: 'Code and English, stage by stage (ours)', head: ['Stage', 'In code', 'In English'], rows: [
      ['1', 'Moves a character with blocks', 'Follows short spoken instructions with help'],
      ['2', 'Uses loops and simple conditions', 'Recognises coding words without translation'],
      ['3', 'Types short Python programs', 'Reads error messages and guesses their meaning'],
      ['4', 'Reads a data file and counts rows', 'Asks questions in short English sentences'],
      ['5', 'Finds what is missing in data', 'Explains a program aloud to the mentor'],
      ['6', 'Reports results with their limits', 'Writes a short summary of a project in English']
    ] },
    left: { h3: 'For parents', ps: [
      'The river project sits at stage 5 in code. Many learners reach stage 3 or 4 in English by then without noticing.',
      'Every term, ask your child to show and explain one thing they made. That is the best progress report.'
    ] },
    right: { h3: 'For learners', ps: [
      'A missing day and a zero are not the same. Count them separately.',
      'You do not need perfect English to write good code. You need to try, and to ask.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Piura learners',
    lede: 'Youngest first. All live, in English, with a regular mentor, in a class or privately.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 14', courses: [
        { code: 'PIU / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Games, stories and first apps for 6 to 12 year olds.' },
        { code: 'PIU / KIDS / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Scripting real Roblox games in Luau, from about 8.' },
        { code: 'PIU / KIDS / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Building with AI for kids', blurb: 'Children plan, build and check games with AI help, kept age-safe.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'Ages 13 to 18', courses: [
        { code: 'PIU / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A full year from zero to real programs and data.' },
        { code: 'PIU / TEEN / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'How models learn, built in Python with school maths.' },
        { code: 'PIU / TEEN / 03', slug: 'mysql-mastery-for-teens', title: 'Databases for teens', blurb: 'Tables, queries and the data behind every app.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 18 and over', courses: [
        { code: 'PIU / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Python for beginners through to advanced, for any adult.' },
        { code: 'PIU / ADULT / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java for university', blurb: 'Core Java and objects as computing degrees teach them.' },
        { code: 'PIU / ADULT / 03', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'From spreadsheets to SQL and Python dashboards.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live online classes run from Piura',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Cool mornings', l: 'An early class in Piura meets an evening mentor in India.' },
      { time: 'Evenings', l: 'After the heat of the day, or at the weekend, if that suits.' },
      { time: 'Private', l: 'One learner, one mentor, a slower start if English needs it.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same teacher every week, who learns how the learner speaks.' },
      { h3: 'Words on screen', p: 'New English words written down and used again and again.' },
      { h3: 'Hands on', p: 'The learner types and clicks; the mentor guides.' },
      { h3: 'Age groups', p: 'Children, teens and adults each in their own classes.' },
      { h3: 'Short notes home', p: 'What was made, which words were new, what is next.' },
      { h3: 'Class size', p: 'Fifteen to twenty together, or one learner alone.' }
    ]
  },

  projectsH2: 'Projects from students further along',
  projectsLede: 'Students who stay with us for a year or more build things of their own. A few are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> collect the rest.',
  reviewsLede: 'Parents and students on Google, quoted exactly.',

  fees: {
    h2: 'Fees for learners in Piura',
    lede: 'Each plan is monthly. Fees are priced and charged in US dollars on your card; your bank converts them into soles at its own rate, so the soles figure can vary a little.',
    free: ['A trial class at no cost', 'A small puzzle and a first program', 'No card asked for'],
    group: ['Fifteen to twenty learners near in age', 'The same mentor throughout', 'Two live classes a week', 'Pay by the month, stop when you like'],
    one: ['Private classes with one mentor', 'A pace set for the learner\'s English', 'Days and times you choose']
  },

  faq: {
    eyebrow: 'Piura families ask',
    h2: 'Coding classes in Piura: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Classes are taught only in English, live and online. Mentors speak slowly and clearly, write new words on screen and adapt to each learner\'s accent and pace. If a learner answers in Spanish, the mentor understands and replies with the English word.' },
      { q: 'My child\'s English is basic. Is that enough?', a: 'Usually, yes. Coding is visual, so meaning comes from the screen as much as from words. The free first class shows how your child copes; if they need it, the mentor suggests a gentler start, such as a month of private classes.' },
      { q: 'At what age can a child in Piura begin?', a: 'At six, with Scratch blocks and pictures and no typing. Most children start typing Python at about nine. Teenagers and adults with no experience begin with Python in their own age group.' },
      { q: 'Is there a coding centre in Piura?', a: 'No. We teach only live online, so a child in Castilla, Veintiséis de Octubre, Catacaos or the centre joins the same way, from home, with no trip across the river.' },
      { q: 'What time are classes in Piura?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Piura never changes its clocks, and 09:00 in Piura is 19:30 for a mentor in India.' },
      { q: 'Does school in Piura teach programming?', a: 'No school area is called programming or computing in Peru\'s national plan of study. Digital skills are spread across all subjects, so children who want to code learn it outside school.' },
      { q: 'Can university students and adults join?', a: 'Yes. Students at Piura\'s universities take Java, Python and data structures with us alongside their degree, and adults learn Python, data analysis or AI tools. We are not connected with any university.' },
      { q: 'How do I pay, and in which currency?', a: 'Monthly, by card, in US dollars, which is the currency this page shows; your bank turns it into soles. If you visit from India you will see rupees. The trial class is free and needs no card.' },
      { q: 'Does my child get a certificate?', a: 'Courses that include one end with a Modern Age Coders certificate of completion. It is our own document, not issued by MINEDU, a school or a university, and not a Peruvian qualification.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families and learners in Piura.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru page, in one guide.' },
      { href: '/online-coding-and-ai-classes-piura-region-peru', label: 'Piura region', p: 'Sullana, Talara, Paita and beyond.' },
      { href: '/online-coding-classes-for-kids-peru', label: 'Online coding for kids in Peru', p: 'Grade by grade, for primaria.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Where the youngest begin.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Starting at any age.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free class from Piura',
    lede: 'One class, free. The learner and mentor solve a small puzzle and build a first program together, and the mentor notes how comfortable the learner is in English. You get an honest suggestion: a course, a group, or a private start.',
    readFirst: 'Before booking, you can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look at <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'All classes are live online with mentors in India and in English only. WhatsApp in English is the fastest way to reach us.',
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
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru guide' },
        { href: '/online-coding-and-ai-classes-piura-region-peru', label: 'Piura region' },
        { href: '/learn-coding-and-english-together-peru', label: 'Coding and English' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'A missing day is not a dry day'
  },

  personalityCss: `
.ag-root.ag-cpi .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-cpi .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-cpi .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-cpi .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-cpi .ag-code-head b { letter-spacing: 0.015em; font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro N° 1), Perfil Sociodemográfico 2017 (Cuadro N° 1.9) and Compendio Estadístico Perú 2026 (tables 5.64, 5.66, 5.67); MINEDU CNEB plans of study and 2026 school opening; EF EPI 2025; tz database and INACAL. Data: Gobierno Regional de Piura, Datos Hidrometereológicos (Proyecto Especial Chira Piura), ODC-By.',
    localProject: 'How many days does the river under the Sánchez Cerro bridge carry water? An original Python project on the GORE Piura hydrometeorological open data (ODC-By): Version 1 counts 852 days with water out of 1,672 days in the file; Version 2 converts dates, counts 1,704 calendar days, lists four gaps (the longest 2 to 24 December 2023) and separates 32 days never recorded from 42 recorded blank. Lesson family: missing days in a daily series.',
    requiredMentions: ['tb_medida_estaciones_act.csv', 'Days with water at 07:00: 852', 'Calendar days: 1704 Days in the file: 1672', 'Gap: 2023-12-02 to 2023-12-24', '2,115,215', '473,025', 'Veintiséis de Octubre', 'A missing day is not a dry day', 'Piura city 484'],
    sources: [
      { claim: 'Piura department, province and district populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Piura city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'University enrolment and entrants in Piura, 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'GORE Piura hydrometeorological dataset and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/datos-hidrometereol%C3%B3gicos-gobierno-regional-piura' },
      { claim: 'English hours in primaria and secundaria (JER, JEC); no computing area.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 scores for Piura city and region, Lima and Peru.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any flood, rain-event or emergency reading from the river data: the page uses the series only to count days and gaps.',
      'A promise that every child with basic English will follow every class: the page says most do not need to, and offers a slower start.',
      'A reason for the December 2023 gap: the file does not give one.',
      'A Piura total made by adding districts or provinces: never summed.',
      'Spanish-language teaching: every class is in English.',
      'Any connection with the Gobierno Regional de Piura, the Proyecto Especial Chira Piura, MINEDU, UNP, the Universidad de Piura or any school: none.'
    ]
  }
};
