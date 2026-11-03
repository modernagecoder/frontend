'use strict';
// Coding and AI classes in Duisburg (ag- city page, Germany cluster P6 row DE140, tier-2 shape coding-and-ai = all ages).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged at checkout.
// Spine: one city, three ages. The same Duisburg file is read by a child, a teenager and an adult at three depths, and
// the habit taught at every depth is the same: find the row that is not like the others before you rank anything.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers below are fact ids there):
//  - GI Informatik-Monitor 2026/27, NRW page: "An allen allgemeinbildenden Schularten wird das Pflichtfach Informatik in
//    den Jahrgangsstufen 5 und 6 unterrichtet." (80); Qualifikationsphase Informatik "dreistündig ... (Grundkurs)" and
//    "fünfstündig ... (Leistungskurs)" (81); "Der Einsatz eines Computers ist für die Bearbeitung der schriftlich
//    Abituraufgaben nicht vorgesehen." (82); NRW Gymnasien nine-year route (62). National: about 15 percent take
//    Informatik in the Qualifikationsphase (97).
//  - NRW Schulministerium: ZP10 in German, maths and English (64); written Abitur main dates 13 April to 5 May 2027 (42).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025), NRW row: "Nordrhein-Westfalen (3) 17.10. - 31.10. 23.12. - 06.01. --
//    22.03. - 03.04. 18.05. 19.07. - 31.08." (275).
//  - BWKI Teilnahmebedingungen: projects in German or English (213); machine-learning methods required (208); 2026 final
//    in Tübingen 13 November 2026 (214). Jugend forscht: registration by 30 November (197).
//  - AI tool ages: content/ai-tool-age-audit.json (OpenAI 13 with a parent's permission under 18; Claude 18+).
//  - Destatis GV-ISys, 31.12.2024 (Zensus 2022 basis), facts-geo/places.tsv: Duisburg 502,270; Oberhausen 213,646;
//    Mülheim an der Ruhr 173,050; Krefeld 231,406; Moers 101,503; Nordrhein-Westfalen 18,034,454.
//  - Time: EinhZeitG para 4 (MEZ UTC+1, MESZ UTC+2); summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Duisburg, "Besucherzahlen der Schwimmbäder in Duisburg", opendata-duisburg.de via Open.NRW and GovData
//    (ckan.govdata.de/dataset/besucherzahlen-der-schwimmbader-in-duisburg), every resource licensed
//    http://dcat-ap.de/def/licenses/cc-by-de/3.0 (CC BY 3.0 DE, commercial reuse allowed with attribution). File
//    Besucherstatistik_5.csv downloaded 3 November 2026, 601 bytes, sha256 32fbec49...4055bd7, UTF-8 with BOM, semicolon
//    separated: six pools, 2015 to 2024, plus a seventh row with an empty name holding the yearly totals. Raw copy in
//    src-pages/coding-and-ai-classes-in-duisburg-germany/.
// Our own calculations (scratchpad de/w/T1/duisburg/v1.py, v2.py, v3.py, python3 -I):
//  v1 prints "Rows read: 7" and "Busiest pool in 2024: '' 478195" (the unnamed totals row wins).
//  v2 prints "Pools: 6", "Busiest pool in 2024: Rhein-Ruhr-Bad 132229", "Our sums match the total row: True".
//  v3 prints, per pool, 2021 and 2024 as a share of 2019: Schwimmstadion 23.9% / 107.6%; HB Toeppersee 38.7% / 101.6%;
//  HB Neudorf 29.4% / 95.5%; FB Homberg 39.5% / 82.6%; Allwetterbad Walsum 23.8% / 69.8%; Rhein-Ruhr-Bad 18.6% / 69.6%.
//  Published totals row: 2019 584,860; 2020 203,839; 2021 153,953; 2024 478,195.
// Lesson family: a totals row is not a member; strip summary rows, then check your sum against the publisher's.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("Besucherstatistik_5.csv", encoding="utf-8-sig") as f:',
  '    rows = list(csv.reader(f, delimiter=";"))',
  '',
  'years = rows[0][1:]',
  'visits = {}',
  'for row in rows[1:]:',
  '    visits[row[0]] = [int(x) for x in row[1:]]',
  '',
  'last = years.index("2024")',
  'busiest = max(visits, key=lambda name: visits[name][last])',
  'print("Rows read:", len(visits))',
  'print("Busiest pool in 2024:", repr(busiest), visits[busiest][last])'
].join('\n');

const V2 = [
  'import csv',
  '',
  'with open("Besucherstatistik_5.csv", encoding="utf-8-sig") as f:',
  '    rows = list(csv.reader(f, delimiter=";"))',
  '',
  'years = rows[0][1:]',
  'pools = {}',
  'total_row = None',
  'for row in rows[1:]:',
  '    numbers = [int(x) for x in row[1:]]',
  '    if row[0].strip() == "":',
  '        total_row = numbers          # the city\'s own sum, not a pool',
  '    else:',
  '        pools[row[0]] = numbers',
  '',
  'i = years.index("2024")',
  'busiest = max(pools, key=lambda name: pools[name][i])',
  'print("Pools:", len(pools))',
  'print("Busiest pool in 2024:", busiest, pools[busiest][i])',
  '',
  'ours = [sum(p[k] for p in pools.values()) for k in range(len(years))]',
  'print("Our sums match the total row:", ours == total_row)'
].join('\n');

const V3 = [
  'before = years.index("2019")',
  'low = years.index("2021")',
  'now = years.index("2024")',
  'ranked = sorted(pools.items(), key=lambda kv: kv[1][now] / kv[1][before], reverse=True)',
  'for name, v in ranked:',
  '    print(f"{name:20} 2021: {100 * v[low] / v[before]:5.1f}%   2024: {100 * v[now] / v[before]:5.1f}% of 2019")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Duisburg: coding and AI, all ages' },
  slug: 'coding-and-ai-classes-in-duisburg-germany',
  code: 'cai',
  accent: '#725574',
  accentRationale: 'Coding and AI in Duisburg: a muted heather violet #725574, the colour of the Rhine at dusk under the harbour cranes, clear of the Berlin brick and the AI page plum; contrast 5.22 at its lowest against the paper tints, above the 4.5 floor',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding and AI classes in Duisburg',
  title: 'Coding and AI Classes in Duisburg, Live Online in English',
  description: 'Coding and AI classes in Duisburg for children, teens and adults: live online in English, NRW Informatik rules, AI age limits and a Duisburg swimming pool project.',
  ogDescription: 'Live coding and AI lessons in English for every age in Duisburg, from a six year old\'s first Scratch game to an adult\'s first data script, plus a real project on the city\'s swimming pool visitor figures.',
  twitterDescription: 'Coding and AI for all ages in Duisburg, taught live in English, with a project on the city\'s own pool data.',
  pageName: 'Coding and AI Classes in Duisburg',
  webPageDescription: 'A guide for Duisburg families and adult learners to live coding and AI classes in English: what NRW schools teach and when, which AI tools each age may use, the 2026/27 NRW holidays, and an original Python project on Stadt Duisburg\'s swimming pool visitor statistics.',
  courseDescription: 'Live online coding and AI classes in English for learners in Duisburg from age 6 to adult: Scratch and Python for children, data and machine learning for teenagers, practical Python and AI for adults, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Duisburg, all ages',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#ages', label: 'By age' },
    { href: '#pools', label: 'Pool data' },
    { href: '#ai', label: 'AI rules' },
    { href: '#calendar', label: 'Times' }
  ],
  eyebrow: 'Duisburg &middot; Coding and AI &middot; Ages 6 to adult',
  h1: 'Coding and AI classes in Duisburg',
  lede: 'Duisburg has just over half a million residents, and on this page they could all be in one family: a primary pupil who wants to make a game, a teenager curious about how AI actually learns, and a parent who would like a spreadsheet to sort itself. We teach all three, live and in English. Below you will find how each age starts, what NRW schools already cover, the AI tools each age may legally use, and a project on the city\'s own swimming pool figures in which the first answer is wrong for a reason every learner should see once.',
  secondaryCta: { href: '#pools', label: 'Open the pool project' },
  wa: 'Hello Modern Age Coders, I live in Duisburg and would like a free first class in coding or AI, taught in English. Who in our family should start where?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; children, teenagers and adults, each with their own mentor',
  spec: [
    ['Ages', '6 to 12, 13 to 18, adults'],
    ['Children start with', 'Scratch, then Python'],
    ['Teenagers start with', 'Python and real data'],
    ['Adults start with', 'Practical scripts and AI tools'],
    ['Group', '15 to 20 learners, or 1-on-1'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders runs coding and AI classes for Duisburg learners of every age, live online and in English: children from 6 build Scratch games and move on to Python, teenagers learn Python, data and how machine learning works, and adults learn scripts and AI tools that save real hours. A regular mentor matches each learner\'s pace and accent, in a group of 15 to 20 or on their own, after school, after work or at weekends.',

  picks: {
    eyebrow: 'One starting course per age',
    h2: 'Where a Duisburg child, teenager or adult begins',
    lede: 'Three courses, one for each stage of life. The mentor confirms the right one in the free first class, after seeing what the learner can already do.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CAI / 01', title: 'Python and AI for Kids', note: 'Ages 9 to 12. Typed Python from the first week, turtle drawings, small games and child-safe AI projects that need no chatbot account. Younger children start with Scratch first.' },
      { course: 'ai-ml-masterclass-teens', code: 'CAI / 02', title: 'AI and Machine Learning for Teens', note: 'Ages 13 to 18. Python and data first, then models the teenager trains, tests and explains, with the maths shown rather than hidden.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'CAI / 03', title: 'Data and AI for Non-Programmers', note: 'Adults. Spreadsheets, a little Python and AI assistants used with care, for people who want data work done faster and checked properly.' }
    ]
  },

  sections: [
    {
      id: 'ages',
      eyebrow: 'Three ages, one family',
      h2: 'Who are coding and AI classes in Duisburg for?',
      lede: 'Anyone from about six upwards. What changes with age is not the seriousness of the work but the tools, the pace and what "AI" sensibly means.',
      body: [
        { kind: 'table', numCols: [], caption: 'How each age starts with us, and what AI means at that age (our plan)', head: ['Age', 'First tool', 'First real project', 'What AI means here'], rows: [
          ['6 to 8', 'Scratch blocks', 'A story or a chase game', 'Sorting pictures by rules, then talking about how a machine might learn the rule'],
          ['9 to 12', 'Scratch, then typed Python', 'A quiz or a turtle drawing', 'Training a tiny classifier on examples the child made up'],
          ['13 to 18', 'Python', 'Reading a real data file', 'Building and testing a model against a simple guess'],
          ['Adults', 'Python and spreadsheets', 'Automating a weekly chore', 'Using AI assistants and checking every answer they give']
        ] },
        { kind: 'source', html: 'Our own course plan. The age bands follow the providers\' terms for AI tools, set out further down this page.' },
        { kind: 'two', mt: true,
          leftH3: 'For a child of 6 to 12',
          left: [
            'The youngest learners never sit through a lecture. They drag blocks, press the green flag and see a cat move, and within a few weeks they are making decisions a programmer makes: what should happen first, what repeats, what changes when a key is pressed.',
            'Around nine or ten most children are ready to type. That switch to Python is where a regular mentor matters most, because typing errors frustrate quickly and a good mentor knows when to help and when to wait.'
          ],
          rightH3: 'For a teenager or an adult',
          right: [
            'Teenagers start where school Informatik often stops: real files, real errors and programs longer than one screen. The AI course then goes inside the models they already use, with numbers they can check.',
            'Adults usually come with a specific job in mind, a report, a list of addresses, a folder of invoices. We start with that job, because a script that saves an hour every Monday keeps anyone motivated through the harder parts.'
          ] },
        { kind: 'p', mt: true, html: 'Duisburg had 502,270 residents on 31 December 2024, according to the Destatis municipal register, which makes it one of the largest cities in Nordrhein-Westfalen. Learners also join us from the towns around it: Oberhausen with 213,646 residents, Mülheim an der Ruhr with 173,050, Krefeld with 231,406 and Moers with 101,503, on the same register. Because every class is online, the city on the address makes no difference to the lesson; it only decides which school holidays apply.' },
        { kind: 'p', html: 'Families with more than one learner often ask whether siblings can share a class. They can share a mentor, but not a group: a seven year old and a fourteen year old learn at different speeds and should be with learners of their own age. Parents in a one-to-one plan can also add a second learner on a separate schedule.' }
      ]
    },
    {
      id: 'pools',
      tint: 'tint',
      eyebrow: 'A Duisburg data project',
      h2: 'Which Duisburg swimming pool had the most visitors in 2024?',
      lede: 'Stadt Duisburg publishes the number of visitors to its public pools every year, free to reuse under a CC BY 3.0 DE licence. The file is small enough to read by eye and still hides a trap that catches adults as often as children.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The dataset is called Besucherzahlen der Schwimmbäder in Duisburg. We downloaded its CSV version, Besucherstatistik_5.csv, on 3 November 2026: 601 bytes, separated by semicolons, with one column per year from 2015 to 2024.',
            'It lists six pools by name: Allwetterbad Walsum, Rhein-Ruhr-Bad, HB Toeppersee, HB Neudorf, FB Homberg and the Schwimmstadion. Then comes a seventh line whose name cell is empty.'
          ],
          rightH3: 'The question',
          right: [
            'Which pool had the most visitors in 2024? A teenager can answer it in a dozen lines of Python, and the first attempt below does exactly what most people would write.',
            'Run it before you read the explanation, and decide whether you believe the answer.'
          ] },
        { kind: 'code', label: 'Attempt 1: read every row and take the largest', lang: 'Python', code: V1, note: 'It prints <code>Rows read: 7</code> and <code>Busiest pool in 2024: \'\' 478195</code>.' },
        { kind: 'p', mt: true, html: 'The winner has no name. That seventh line is not a pool at all: it is the city\'s own total for each year, added at the bottom of the file the way people add a sum row in a spreadsheet. Python cannot know that, so it treats the total as one more pool, and the total of course beats every single pool. Nothing crashed and nothing looked broken; the answer was simply nonsense with a number attached.' },
        { kind: 'code', label: 'Attempt 2: set the totals row aside, then use it as a check', lang: 'Python', code: V2, note: 'It prints <code>Pools: 6</code>, <code>Busiest pool in 2024: Rhein-Ruhr-Bad 132229</code> and <code>Our sums match the total row: True</code>.' },
        { kind: 'p', mt: true, html: 'The second attempt does two things. It keeps the totals row out of the ranking, and then it turns the trap into a tool: it adds up the six pools for every year itself and compares the result with the city\'s own totals. They match for all ten years, which tells us no pool is missing and no number was mistyped. The Rhein-Ruhr-Bad had the most visitors in 2024, 132,229 of them.' },
        { kind: 'code', label: 'Attempt 3: how far had each pool come back by 2024?', lang: 'Python', code: V3, note: 'Run after Attempt 2. It prints six lines, from <code>Schwimmstadion       2021:  23.9%   2024: 107.6% of 2019</code> down to <code>Rhein-Ruhr-Bad       2021:  18.6%   2024:  69.6% of 2019</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Visitors in 2021 and 2024 as a share of 2019, per pool (our calculation)', head: ['Pool', '2021', '2024'], rows: [
          ['Schwimmstadion', '23.9%', '107.6%'],
          ['HB Toeppersee', '38.7%', '101.6%'],
          ['HB Neudorf', '29.4%', '95.5%'],
          ['FB Homberg', '39.5%', '82.6%'],
          ['Allwetterbad Walsum', '23.8%', '69.8%'],
          ['Rhein-Ruhr-Bad', '18.6%', '69.6%']
        ] },
        { kind: 'source', html: 'Data: Stadt Duisburg, Besucherzahlen der Schwimmbäder in Duisburg, opendata-duisburg.de via Open.NRW, licence Creative Commons Namensnennung 3.0 Deutschland (CC BY 3.0 DE), file Besucherstatistik_5.csv downloaded 3 November 2026. The city\'s totals row reads 584,860 visitors for 2019, 153,953 for 2021 and 478,195 for 2024. The percentages and the ranking are our own.' },
        { kind: 'p', mt: true, html: 'The table makes a second point that a ranking hides. The Rhein-Ruhr-Bad is the busiest pool in 2024 and also the one furthest below its own 2019 level, while the smaller Schwimmstadion is already above it. "Most visitors" and "recovered most" are different questions with different winners. The file does not say why visitor numbers fell in 2020 and 2021 or why some pools came back faster, so we do not guess; a good analyst writes down what the data cannot tell them.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, on paper.</strong> Write the six pool numbers for 2024 on cards, then add a seventh card with their sum. Ask someone to pick the "biggest pool" from the pile.',
          '<strong>Ages 9 to 12, Scratch or Python.</strong> Put the 2024 numbers in a list, find the largest, then add the total to the list and watch it win.',
          '<strong>Ages 13 to 18.</strong> Run all three attempts, then draw one line per pool from 2015 to 2024 and describe each shape in one sentence.',
          '<strong>Adults.</strong> Open the XLSX version the city also publishes and find the same totals row. Write a rule you would add to any import script at work.'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'NRW schools',
      h2: 'What do schools in Duisburg teach about computing?',
      lede: 'Duisburg is in Nordrhein-Westfalen, and NRW is one of the Länder where Informatik is compulsory for a short stretch. The rules below are taken from the GI monitor of the subject and from the NRW school ministry.',
      body: [
        { kind: 'table', numCols: [], caption: 'Computing in an NRW school career', head: ['Stage', 'What NRW sets'], rows: [
          ['Grundschule, grades 1 to 4', 'No separate Informatik subject'],
          ['Grades 5 and 6', 'Informatik is a compulsory subject at all general school types'],
          ['Grades 7 to 10', 'Informatik depends on the school and on the pupil\'s choices'],
          ['End of grade 10', 'Central ZP10 exams in German, maths and English'],
          ['Qualifikationsphase', 'Informatik as a Grundkurs of three hours or a Leistungskurs of five, where offered'],
          ['Written Abitur', 'Informatik tasks set centrally; no computer is used in the written exam']
        ] },
        { kind: 'source', html: 'Read on 2 November 2026: the NRW entry of the GI Informatik-Monitor 2026/27, plus the Schulministerium NRW pages on the Zentrale Prüfungen 10 and on the 2027 Zentralabitur dates.' },
        { kind: 'two', mt: true,
          leftH3: 'What that gives a Duisburg pupil',
          left: [
            'Two years of compulsory Informatik in grades 5 and 6 is more than many Länder offer. A Duisburg child meets the basic ideas, algorithms, data and how a computer follows instructions, around the age of ten or eleven.',
            'After grade 6 the subject becomes a choice. Nationally, the Informatik-Monitor estimates that about 15 percent of pupils take it in the Qualifikationsphase, so most teenagers leave school with those two early years and little more.'
          ],
          rightH3: 'Where our classes fit',
          right: [
            'We teach alongside school, not instead of it; the school course is the one that counts for grades. For children before grade 5, our classes are a head start. For grades 7 to 10, they keep programming going when the timetable no longer does.',
            'For an Oberstufe pupil with an Informatik Grundkurs or Leistungskurs, the written Abitur on paper rewards someone who can trace code by hand, which is a skill we practise on purpose. The NRW written Abitur main exams in 2027 run from 13 April to 5 May 2027.'
          ] }
      ]
    },
    {
      id: 'ai',
      eyebrow: 'AI and age',
      h2: 'Which AI tools can each age use in a Duisburg class?',
      lede: 'Every AI provider sets a minimum age in its own terms. Our classes follow those terms exactly, which shapes how AI is taught at each age.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children under 13', p: 'No chatbot accounts at all. Children learn what AI is by building tiny versions of it themselves: a program that sorts animals by rules, a game that gets better from examples. Our AI literacy course is built this way.' },
          { h3: 'Teenagers 13 to 17', p: 'OpenAI\'s terms allow ChatGPT from 13 with a parent\'s or guardian\'s permission. Our teen machine-learning course needs no chatbot: models are written in plain Python, so the teenager sees every number the model learns.' },
          { h3: 'Adults 18 and over', p: 'Adults can use the full range, including tools such as Claude that are for adults only. We teach them to give an assistant a clear task, then to check its work the way Attempt 2 above checks the city\'s totals.' }
        ] },
        { kind: 'source', html: 'Minimum ages from the providers\' terms, quoted with links in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>. Terms change; that page records when each was last read.' },
        { kind: 'p', mt: true, html: 'Our rule for every age is the one the pool project teaches: an answer is not finished when it appears on the screen, whether a person, a script or an AI assistant produced it. The habit of asking "what would make this wrong?" is worth more than any single tool, and it is the difference between a learner who thinks and one who copies.' },
        { kind: 'p', html: 'Teenagers who want to go further can enter the Bundeswettbewerb Künstliche Intelligenz, which requires machine-learning methods and accepts projects in German or in English. Its 2026 final takes place in Tübingen on 13 November 2026. Jugend forscht, which covers informatics and maths among other fields, asks for online registration by 30 November each year. We are not connected with either competition.' }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'Times and holidays',
      h2: 'When do classes run in Duisburg time, and do they stop in the holidays?',
      lede: 'Children usually come after school or on weekend mornings, adults after work. The mentors are in India, where the clock is ahead of Duisburg all year.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Duisburg class times and the mentor\'s time in India', head: ['Class time in Duisburg', 'Mentor\'s clock this winter', 'Mentor\'s clock after the spring change'], rows: [
          ['15:45, after school', '20:15', '19:15'],
          ['18:15, after work', '22:45', '21:45'],
          ['Saturday 11:15', '15:45', '14:45'],
          ['Sunday 10:15', '14:45', '13:45']
        ] },
        { kind: 'source', html: 'Clocks: Duisburg runs on MEZ (UTC+1) from late October and on MESZ (UTC+2) from late March, as the Einheitenzeitgesetz lays down. The 2026 change back happened on 25 October, and the 2027 change forward falls on Sunday 28 March. India never changes its clocks (UTC+5:30), so the gap is four and a half hours this winter and three and a half from the end of March. The rows are illustrations, not fixed batch times.' },
        { kind: 'table', mt: true, numCols: [], caption: 'NRW school holidays 2026/27', head: ['Holiday', 'Dates'], rows: [
          ['Herbstferien', '17 October to 31 October 2026'],
          ['Christmas', '23 December 2026 to 6 January 2027'],
          ['Osterferien', '22 March to 3 April 2027'],
          ['Pfingsten', '18 May 2027'],
          ['Sommerferien', '19 July to 31 August 2027']
        ] },
        { kind: 'source', html: 'Source: Kultusministerkonferenz, Ferien im Schuljahr 2026/2027, Nordrhein-Westfalen row, Stand 9 October 2025. First and last holiday day shown.' },
        { kind: 'p', mt: true, html: 'Classes do not stop for the NRW holidays, because the mentor\'s calendar is not tied to them. Many families keep going through the Herbstferien and use the long summer break for a short project course, while others pause for a trip and start again when school does. Just tell your mentor in advance.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What progress looks like at each age',
    lede: 'Our own milestones, used to place learners and to report to them, or to their parents, every month.',
    table: { caption: 'Milestones by age group (ours)', head: ['Milestone', 'Children', 'Teenagers and adults'], rows: [
      ['First month', 'A working Scratch game with a score', 'A script that reads a file and prints a count'],
      ['Third month', 'Loops, conditions and lists without help', 'Cleaned data and a chart that answers a question'],
      ['Sixth month', 'First typed Python programs', 'A model or an automation tested against a simple baseline'],
      ['After a year', 'A project shown to the family', 'A project they can explain to a stranger, limits included']
    ] },
    left: { h3: 'Parents of younger learners', ps: [
      'A finished game matters less than a child who can tell you why it broke and how they mended it.',
      'Ask your child to show you one bug a week. It turns screen time into a conversation.'
    ] },
    right: { h3: 'Teenagers and adults', ps: [
      'Before you trust a ranking, look for the row that is not like the others.',
      'If your sum matches the publisher\'s, say so. If it does not, find out why before you go on.'
    ] }
  },

  catalogue: {
    eyebrow: 'Nine more courses',
    h2: 'More coding and AI courses for Duisburg learners',
    lede: 'Grouped by age. Each is live, in English, with the same mentor every week, either in a group or solo.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'CAI / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Three to four months from a blank stage to finished games.' },
        { code: 'CAI / KIDS / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What AI is and is not, taught without adult accounts.' },
        { code: 'CAI / KIDS / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Games made with careful, supervised AI help, 8 to 12.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CAI / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The full language, from variables to classes and files.' },
        { code: 'CAI / TEEN / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real datasets, charts and a first model of their own.' },
        { code: 'CAI / TEEN / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik companion', blurb: 'Support next to school Informatik, Klasse 5 to 10.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'CAI / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'A complete Python course for adult beginners.' },
        { code: 'CAI / ADULT / 02', slug: 'ai-tools-mastery-complete-college', title: 'AI tools for adults', blurb: 'Assistants and automation for everyday work, checked by you.' },
        { code: 'CAI / ADULT / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'How large language models work and how to build on them.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for Duisburg learners',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Late afternoon in Duisburg, for children and teenagers.' },
      { time: 'After work', l: 'Early evening slots for adults, by agreement.' },
      { time: 'Weekends', l: 'Saturday and Sunday mornings, popular with younger children.' }
    ],
    cells: [
      { h3: 'Live, never recorded', p: 'Every lesson has a mentor on the call.' },
      { h3: 'One mentor', p: 'A familiar face on screen, week after week.' },
      { h3: 'English, at their pace', p: 'Clear speech, repeated in simpler words when needed.' },
      { h3: 'Grouped by age', p: 'Children, teenagers and adults never share a group.' },
      { h3: 'Monthly reports', p: 'A short note on progress, sticking points and the next goal.' },
      { h3: 'Two formats', p: 'A shared class of 15 to 20, or private lessons.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Learners of every age build real things with us. A few projects from our students worldwide are below, and there is a longer list on our <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from students and parents, shown as they were written.',

  fees: {
    h2: 'Fees for Duisburg learners',
    lede: 'Eight live classes a month for one fee, whatever the learner\'s age. You see that fee in euro, derived from the European Central Bank reference rate; the charge itself goes through in US dollars, and your bank turns it back into euro at its own rate, so expect a few cents of difference.',
    free: ['A free first class for each learner', 'A short task matched to their age', 'No card needed'],
    group: ['15 to 20 learners of a similar age', 'A regular mentor', 'Two classes a week', 'Monthly, cancel any month'],
    one: ['One learner, one mentor', 'A plan built around their goal', 'Times agreed with you']
  },

  faq: {
    eyebrow: 'Duisburg learners ask',
    h2: 'Coding and AI classes in Duisburg: questions and answers',
    items: [
      { q: 'Are the classes in German?', a: 'No. All classes are live and taught in English only. Mentors speak clearly, adjust to the learner\'s pace and accent, and rephrase when something is not understood. Code itself reads the same in any language.' },
      { q: 'What is the youngest age you teach in Duisburg?', a: 'Six. Children of six to eight start with Scratch blocks, so they do not need to type or read long instructions. From about nine they can move to typed Python.' },
      { q: 'Can adults with no experience join?', a: 'Yes. The adult courses start from zero and are built around a task the learner actually has, such as a weekly report or a list that needs sorting. Adults are never placed in a group with children or teenagers.' },
      { q: 'Do schools in Duisburg teach Informatik?', a: 'Yes, for two years. NRW makes Informatik compulsory in grades 5 and 6 at all general school types. After that it depends on the school and the pupil\'s choices, and in the Oberstufe it can be a three-hour Grundkurs or a five-hour Leistungskurs.' },
      { q: 'Which AI tools will my child use?', a: 'Under 13, none that need an account: children build small AI ideas themselves in Scratch or Python. From 13, OpenAI\'s terms allow ChatGPT with a parent\'s permission, but our teen course writes models in plain Python and does not need it. Adult-only tools are used only in adult courses.' },
      { q: 'When are classes in Duisburg time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Children usually take late afternoon or weekend morning slots; adults often prefer the early evening.' },
      { q: 'Do classes pause during the NRW holidays?', a: 'Only if you want them to. The mentors are not on the NRW school calendar, so classes can continue through the Herbstferien, Christmas and summer. Families who travel simply tell the mentor and pick up again afterwards.' },
      { q: 'Where are the mentors?', a: 'In India. Lessons are live over video, and because India is 4 hours 30 minutes ahead of Duisburg in winter, a 15:45 class in Duisburg is 20:15 for the mentor.' },
      { q: 'How much does it cost, and in which currency?', a: 'You pay monthly. On this page the fee appears in euro, worked out from the European Central Bank reference rate, while the card is charged in US dollars; the conversion is done by your own bank, which is why a statement rarely shows the euro figure to the cent. Trying a first class costs nothing.' },
      { q: 'Can two people in one family learn at the same time?', a: 'Yes, in separate groups or separate one-to-one plans, each matched to their age and level. Siblings of very different ages learn better apart, even when they share the same mentor.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More on this site',
    h2: 'Related pages',
    lede: 'Other pages for learners in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page we have written for Germany.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'NRW rules, holidays and data.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning', p: 'Models built from first principles.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults in Germany', p: 'Starting from zero after school is over.' },
      { href: '/python-classes-for-kids-germany', label: 'Python classes for kids', p: 'When and how children start typing code.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'How every Land handles the subject.' }
    ]
  },

  start: {
    h2: 'Book a free first class in Duisburg',
    lede: 'Tell us who wants to learn and how old they are. The mentor sets a short task for that age, watches how the learner tackles it and how easily they follow spoken English, then recommends a course.',
    readFirst: 'Curious about the method first? <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our lessons and <a class="ag-inline-link" href="/courses">all courses</a> lists every syllabus.',
    note: 'Live online classes in English only, with mentors in India. The quickest way to reach us is WhatsApp, in English.',
    formNote: 'Free for each learner, no card asked for.'
  },

  footer: {
    cols: [
      { h4: 'Learn', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/coding-classes-for-adults-germany', label: 'Coding for adults' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' }
      ] }
    ],
    bottomRight: 'A totals row is not a pool'
  },

  personalityCss: `
.ag-root.ag-cai .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cai .ag-capsule { border-left-width: 6px; }
.ag-root.ag-cai .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-cai .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-cai .ag-code-note { font-size: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page and national figures); Schulministerium NRW (ZP10, Zentralabitur 2027); KMK Ferien 2026/2027; BWKI conditions; Jugend forscht; provider terms via the AI tools age guide; Destatis GV-ISys 31.12.2024; Stadt Duisburg open data, CC BY 3.0 DE.',
    localProject: 'A totals row is not a pool: an original Python project on Stadt Duisburg\'s swimming pool visitor file (six pools, 2015 to 2024) in which the naive ranking crowns the unnamed totals row (478,195), the fix sets it aside and checks our own sums against it (True for all ten years), and a recovery table compares 2021 and 2024 with 2019 per pool; with paper, Scratch, teen and adult versions. Lesson family: strip summary rows, then reconcile with the publisher\'s total.',
    requiredMentions: ['Besucherstatistik_5.csv', 'Busiest pool in 2024: Rhein-Ruhr-Bad 132229', 'Our sums match the total row: True', 'Rows read: 7', '107.6%', 'A totals row is not a pool', '17 October to 31 October 2026', '502,270'],
    sources: [
      { claim: 'NRW Informatik compulsory in grades 5 and 6; Grundkurs and Leistungskurs hours; written Abitur without a computer.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'About 15 percent take Informatik in the Qualifikationsphase.', url: 'https://informatik-monitor.de/' },
      { claim: 'NRW ZP10 in German, maths and English.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-10' },
      { claim: 'NRW written Abitur 2027 dates.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/termine/2027' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/service/ferien.html' },
      { claim: 'BWKI accepts German or English projects; 2026 final date.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'Duisburg pool visitors and licence.', url: 'https://ckan.govdata.de/dataset/besucherzahlen-der-schwimmbader-in-duisburg' },
      { claim: 'Duisburg population 502,270 on 31 December 2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Any reason for the 2020 and 2021 fall in visitors or the uneven recovery: not in the data, none given.',
      'Expanding the HB and FB abbreviations in the pool names: not defined in the file, kept as published.',
      'Adding the pools ourselves and presenting that as a new total: we print the city\'s own totals row and only use our sum as a check.',
      'Any affiliation with Stadt Duisburg, the NRW ministry, the BWKI or Jugend forscht: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
