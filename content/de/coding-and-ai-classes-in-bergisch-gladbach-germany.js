'use strict';
// Coding and AI classes in Bergisch Gladbach (ag- city page, Germany cluster P6 row DE197, tier-2 shape
// coding-and-ai-classes-in-<city>-germany: all ages). Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: where a beginner of any age should start, in four steps; a local data project in which the mean describes no
// real charging station and the most common value does; why a lazy AI model predicts the mode; NRW school facts; times.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 November 2026, unless stated):
//  - GI Informatik-Monitor 2026/27, NRW page: compulsory Informatik grades 5 and 6 (fact 80); Wahlpflicht grades 9 and
//    10 at G9 Gymnasien (62); Q-phase GK 3, LK 5 hours (81); written Abitur set centrally, no computer (82). National:
//    about 15 percent in the Q-phase (97).
//  - NRW Abitur 2027: written exams 13 April to 5 May 2027 (fact 42), first exams at 9:00 (48). ZP10 (64).
//  - KMK FER2026_27.pdf, NRW row (fact 275).
//  - Jugend forscht: grade 4 to age 21 (194); 15 to 21 in Jugend forscht, up to 14 in junior (195); "November:
//    Online-Anmeldung bis 30. November" (197).
//  - Destatis GV-ISys: Bergisch Gladbach, Stadt 111,361 on 31.12.2024 (facts-geo/places.tsv).
//  - AI tool ages: content/ai-tool-age-audit.json (OpenAI 13, parent's permission under 18; Anthropic 18+).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Bundesnetzagentur, Ladesäulenregister, Ladesaeulenregister_BNetzA_2026-09-01.csv ("Letzte Aktualisierung
//    vom: 01.09.2026"), licence on the download page: "Die Daten sind durch eine Creative Commons Namensnennung 4.0
//    International Lizenz lizenziert"; attribution "Bundesnetzagentur.de". Downloaded 3 November 2026. Rows with Ort
//    exactly "Bergisch Gladbach": 140, all "In Betrieb", Kreis "Rheinisch-Bergischer Kreis"; 267 charging points.
//    Saved as bergisch_gladbach_charging.csv. Raw copies in src-pages/<slug>/ (full register under the Recklinghausen
//    folder, same file). City portals tried: offenedaten.bergischgladbach.de and geoportal.bergischgladbach.de did not
//    answer (connection failed), GovData and Open.NRW list no Stadt Bergisch Gladbach dataset with an open licence;
//    IT.NRW Landesdatenbank downloads timed out on 3 November 2026.
// Our own calculations (scratchpad de/w/T7/run/glc/v1.py + v2.py, python3 -I): mean 48.8 kW; stations at exactly the
// mean 0; 44 kW 55 stations, 22 kW 49, 11 kW 14, 150 kW 6; median 44.0 kW. By year of commissioning: 2014 1 (44), 2015
// 3 (44, 2), 2017 1 (44), 2019 2 (44, 2), 2020 2 (22 and 350 tie, 1 each), 2021 13 (22, 6), 2022 21 (44, 10), 2023 14
// (44, 6), 2024 16 (11, 6), 2025 26 (44, 15), 2026 41 to 1 September (22, 25).
// Lesson family: when values come in standard sizes, the most common value (the mode) describes the data better than
// the mean; and a model that always guesses the mode is the baseline to beat.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("bergisch_gladbach_charging.csv", encoding="utf-8") as f:',
  '    sites = list(csv.DictReader(f))',
  '',
  'power = [float(s["kw"]) for s in sites]',
  'print("Stations:", len(power))',
  'print("Mean power:", round(sum(power) / len(power), 1), "kW")',
  '',
  'tally = {}',
  'for kw in power:',
  '    tally[kw] = tally.get(kw, 0) + 1',
  'print("Stations at the mean power:", tally.get(round(sum(power) / len(power), 1), 0))',
  '',
  'ranked = sorted(tally.items(), key=lambda pair: pair[1], reverse=True)',
  'for kw, n in ranked[:4]:',
  '    print(f"{kw:g} kW: {n} stations")'
].join('\n');

const V2 = [
  'by_year = {}',
  'for s in sites:',
  '    year = s["since"][-4:]',
  '    by_year.setdefault(year, {})',
  '    kw = float(s["kw"])',
  '    by_year[year][kw] = by_year[year].get(kw, 0) + 1',
  '',
  'for year in sorted(by_year):',
  '    counts = by_year[year]',
  '    top = max(counts.values())',
  '    modes = sorted(kw for kw, n in counts.items() if n == top)',
  '    print(year, sum(counts.values()), "stations, most common:", ", ".join(f"{m:g} kW" for m in modes), f"({top})")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Bergisch Gladbach: coding and AI' },
  slug: 'coding-and-ai-classes-in-bergisch-gladbach-germany',
  code: 'glc',
  accent: '#2E6F4A',
  accentRationale: 'Coding and AI in Bergisch Gladbach: a forest green #2E6F4A for the wooded Bergisches Land around the town, separate from the Germany fir green and the NRW teal; contrast 4.89 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding and AI classes in Bergisch Gladbach',
  title: 'Coding and AI Classes in Bergisch Gladbach, Live in English',
  description: 'Coding and AI classes in Bergisch Gladbach for every age: live online in English, how a beginner starts, NRW school facts and a charging station data project.',
  ogDescription: 'Live lessons in English for Bergisch Gladbach children, teenagers and adults who want to learn to code and to understand AI, with a project on the town\'s 140 public charging stations.',
  twitterDescription: 'Coding and AI for all ages in Bergisch Gladbach, live in English, starting from real local data.',
  pageName: 'Coding and AI Classes in Bergisch Gladbach',
  webPageDescription: 'A guide for Bergisch Gladbach learners of every age to starting with coding and AI: four first steps, an original Python project on the Bundesnetzagentur charging register, what NRW schools teach, AI tool ages and class times.',
  courseDescription: 'Live online coding and AI classes in English for learners in Bergisch Gladbach from age 6: Scratch and Python for children, Python, data and machine learning for teenagers, data and AI skills for adults, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Bergisch Gladbach',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#start', label: 'Start' },
    { href: '#data', label: 'Data' },
    { href: '#school', label: 'School' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Bergisch Gladbach &middot; Coding and AI &middot; From 6 to adult',
  h1: 'Coding and AI classes in Bergisch Gladbach',
  lede: 'Most people who want to learn AI really want two things: to make a computer do useful work, and to understand the tools everyone now talks about. Both start in the same place, with writing small programs and checking what they do. This page is for learners of every age in Bergisch Gladbach: how to begin, a first data project on the town\'s own charging stations, what an NRW school already covers, and when live classes in English fit around school and work.',
  secondaryCta: { href: '#data', label: 'See the data project' },
  wa: 'Hello Modern Age Coders, I am in Bergisch Gladbach and would like a free first class in coding or AI, in English.',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; code first, then AI you can check',
  spec: [
    ['Ages', 'Children from 6, teens, adults'],
    ['Children begin with', 'Scratch, then Python'],
    ['Teens and adults begin with', 'Python and a real dataset'],
    ['Local times', 'Afternoons, evenings, weekends'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'In Bergisch Gladbach, Modern Age Coders offers coding and AI lessons in English, taught live online for children from 6, teenagers and adults. Children build with Scratch and then Python; teenagers move to data and machine learning; adults learn Python, data handling and AI tools they can check. The same mentor, working from India, stays with each learner and follows their pace and accent, in a class of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Good first courses',
    h2: 'Three first courses in Bergisch Gladbach',
    lede: 'Chosen by age. Each one leads on to the AI courses once the coding basics are in place.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'GLC / 01', title: 'Python and AI for Kids', note: 'Children of 9 to 12 write Python themselves, make games and pictures, and build tiny programs that learn from labelled examples.' },
      { course: 'data-science-course-for-teens-python-data', code: 'GLC / 02', title: 'Data Science for Teens', note: 'Teenagers load real files, clean them, chart them and train a first model, which is where AI stops being magic.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'GLC / 03', title: 'Data and AI for Non-Programmers', note: 'Adults who work with spreadsheets learn to analyse data and use AI help safely, before deciding whether to go on to Python.' }
    ]
  },

  sections: [
    {
      id: 'start',
      eyebrow: 'First steps',
      h2: 'How should a beginner in Bergisch Gladbach start with coding and AI?',
      lede: 'With a small program, not a chatbot. The four steps below are the same for a nine year old and a fifty year old; only the examples change.',
      body: [
        { kind: 'ol', items: [
          '<strong>Make the computer follow exact steps.</strong> A child moves a Scratch cat; an adult prints a line of Python. The point is that the machine does precisely what it is told, in order, and nothing else.',
          '<strong>Give it something to repeat and something to decide.</strong> Loops and if statements. This is where most beginners first feel the power of code: one line of instruction, a thousand actions.',
          '<strong>Feed it real data.</strong> A file with rows and columns, like the charging stations below. The learner counts, sorts and summarises, and starts asking what each number means.',
          '<strong>Let it learn from examples.</strong> Only now do we build a simple model, and only after asking what a lazy guess would score. A model that cannot beat the lazy guess has learned nothing.'
        ] },
        { kind: 'source', html: 'Our own teaching order. Children spend months on steps 1 and 2; adults often reach step 3 within weeks. Step 4 is where AI becomes something the learner understands rather than something they only use.' },
        { kind: 'two', mt: true,
          leftH3: 'Why not start with AI tools?',
          left: [
            'AI tools are useful, and our adult courses use them. But a beginner who asks a chatbot for code cannot tell a correct answer from a confident wrong one. The habit we teach is to know what the answer should look like before asking anybody, human or machine.',
            'There is also the law of the providers themselves: ChatGPT\'s terms set 13 as the minimum age, with a parent\'s permission until 18, and Claude\'s set 18. Our children\'s courses therefore need no AI account at all.'
          ],
          rightH3: 'Who learns together',
          right: [
            'Classes are grouped by age and level: children with children, teenagers with teenagers, adults with adults. A family in Bergisch Gladbach can have three learners on three different courses, each with a mentor who knows them.',
            'Everyone writes their own code in class. Watching someone else type is not learning to program, so the mentor\'s job is to ask the next question, not to do the typing.'
          ] },
        { kind: 'source', html: 'Age limits as quoted from the providers\' terms in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>, where each one is dated and linked.' }
      ]
    },
    {
      id: 'data',
      tint: 'tint',
      eyebrow: 'A Bergisch Gladbach data project',
      h2: 'What is a typical public charging station in Bergisch Gladbach?',
      lede: 'The Bundesnetzagentur keeps a public register of charging stations for electric cars and lets anyone reuse it under CC BY 4.0. With the 140 stations listed for Bergisch Gladbach, learners discover that the average they reach for first describes no station that exists.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The register file is dated 1 September 2026; we downloaded it on 3 November 2026. It covers stations whose operators have finished the Bundesnetzagentur\'s reporting procedure, so the real number in town may be higher.',
            'We kept the 140 rows whose place is Bergisch Gladbach, all in operation, with 267 charging points between them, and saved the useful columns as bergisch_gladbach_charging.csv. The column we study is the rated power of each station, in kilowatts.'
          ],
          rightH3: 'The question',
          right: [
            'If a friend asks what a typical charging station in Bergisch Gladbach looks like, what number should you give? Most people compute the mean. The program below does that, and then checks how many stations actually have that power.',
            'The answer to the check is the lesson. A good summary should describe something real.'
          ] },
        { kind: 'code', label: 'Version 1: the mean, then a tally', lang: 'Python', code: V1, note: 'It prints <code>Stations: 140</code>, <code>Mean power: 48.8 kW</code>, <code>Stations at the mean power: 0</code>, then <code>44 kW: 55 stations</code>, <code>22 kW: 49 stations</code>, <code>11 kW: 14 stations</code> and <code>150 kW: 6 stations</code>.' },
        { kind: 'p', mt: true, html: 'Not a single station has 48.8 kilowatts. Charging hardware is sold in standard sizes, so the values bunch at a few numbers: 44 kilowatts is the most common rating, with 55 stations, closely followed by 22 kilowatts with 49. The mean is pulled upwards by a handful of fast chargers rated at 150 kilowatts or more, and lands in a gap where nothing is installed. For data like this, the most common value, called the mode, is the honest answer to "what is typical?". The median, the middle value of the sorted list, is also 44 kilowatts here.' },
        { kind: 'code', label: 'Version 2: the mode, year by year', lang: 'Python', code: V2, note: 'It prints one line per year, for example <code>2022 21 stations, most common: 44 kW (10)</code>, <code>2020 2 stations, most common: 22 kW, 350 kW (1)</code> and <code>2026 41 stations, most common: 22 kW (25)</code>.' },
        { kind: 'table', mt: true, numCols: [1, 3], caption: 'Bergisch Gladbach charging stations by year in service, register of 1 September 2026 (our calculation)', head: ['Year', 'Stations', 'Most common rating', 'Stations at that rating'], rows: [
          ['2021', '13', '22 kW', '6'],
          ['2022', '21', '44 kW', '10'],
          ['2023', '14', '44 kW', '6'],
          ['2024', '16', '11 kW', '6'],
          ['2025', '26', '44 kW', '15'],
          ['2026, to 1 September', '41', '22 kW', '25']
        ] },
        { kind: 'source', html: 'Source of the rows: the Bundesnetzagentur charging register (Ladesäulenregister) as published for 1 September 2026, filtered by us to the place name Bergisch Gladbach and fetched on 3 November 2026; reused under CC BY 4.0, credit Bundesnetzagentur.de. Each year before 2021 has between one and three stations. Tallies by us.' },
        { kind: 'p', mt: true, html: 'Two details reward a careful reader. In 2020 two stations went into service, one at 22 and one at 350 kilowatts, so there are two modes and Version 2 prints both rather than pretending one wins. And 2026 is not over: the 41 stations counted for it stop at 1 September, already more than any earlier full year in the file.' },
        { kind: 'p', html: 'Here is the link to AI. Imagine a model whose job is to predict the rating of the next station from its address. The laziest possible model ignores the address and always answers 44 kilowatts, the mode, and it would be right for 55 of 140 stations, about 39 percent of the time. Any real model has to beat that score before it has learned anything. Machine learners call this a baseline, and it is the first number our teenage and adult learners calculate in every project.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Children, 7 to 9.</strong> Ask everyone in the family their shoe size and make a tally. Which size appears most? Is it the same as the average?',
          '<strong>Children, 10 to 12.</strong> Run Version 1 and add one line that prints the median. Why are the median and the mode the same here?',
          '<strong>Teenagers and adults.</strong> Work out the baseline score from the tally, then think of one piece of information that might help a model do better.',
          '<strong>Going further.</strong> Find the mode of the number of charging points per station. Is the typical station one point or two?'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'NRW schools',
      h2: 'How much Informatik will a Bergisch Gladbach pupil get at school?',
      lede: 'Two compulsory years early on, then whatever a pupil chooses. Bergisch Gladbach follows the North Rhine-Westphalia rules.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik at NRW schools, as summarised by the Gesellschaft für Informatik for 2026/27', head: ['Stage', 'Informatik', 'What we can add'], rows: [
          ['Grundschule, grades 1 to 4', 'No subject of its own', 'Scratch and logic puzzles from age 6'],
          ['Grades 5 and 6', 'Compulsory at every general school', 'Typed Python alongside the school basics'],
          ['Grades 9 and 10 at a G9 Gymnasium', 'A Wahlpflicht option', 'Data projects and contest practice'],
          ['Qualifikationsphase', 'Optional, as a three-hour basic course or a five-hour advanced course', 'Abitur support in English, with paper tracing'],
          ['Written Abitur', 'Set centrally, answered without a computer', 'Practice in reading and writing code by hand']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, North Rhine-Westphalia page, read on 2 November 2026. Written NRW Abitur exams in 2027 run from 13 April to 5 May and each starts at 9:00 (Ministerium für Schule und Bildung NRW). The right-hand column is ours.' },
        { kind: 'p', mt: true, html: 'Across all sixteen Länder, the monitor puts the share of Oberstufe pupils who keep Informatik into the Qualifikationsphase at roughly one in seven. We work alongside school, never replacing it, and marks and the Abitur are decided only by the school. Pupils who take the subject can follow it in English with our <a class="ag-inline-link" href="/courses/informatik-abitur-course-java-python">Informatik Abitur course in Java and Python</a>.' },
        { kind: 'p', html: 'For a project outside school, Jugend forscht accepts entries in mathematics and informatics from grade 4 up to age 21: pupils up to 14 enter Jugend forscht junior, those from 15 to 21 the main contest, and online registration for the coming round closes on 30 November. Our <a class="ag-inline-link" href="/math-and-coding-competitions-germany">competitions calendar</a> lists the others. We are not connected with any of them.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are classes in Bergisch Gladbach time?',
      lede: 'Pupils mostly come after school, adults after work, and both often at weekends. The mentor\'s clock in India runs several hours ahead.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Bergisch Gladbach times next to the mentor\'s clock', head: ['Bergisch Gladbach', 'In India this winter', 'In India from 28 March 2027'], rows: [
          ['15:15', '19:45', '18:45'],
          ['17:45', '22:15', '21:15'],
          ['Saturday 13:00', '17:30', '16:30'],
          ['Sunday 09:00', '13:30', '12:30']
        ] },
        { kind: 'source', html: 'Germany switched back to Central European Time (UTC+1) on 25 October 2026 and moves to summer time (UTC+2) on 28 March 2027, as the Einheitenzeitgesetz provides; India keeps UTC+5:30 throughout. These four slots only illustrate the gap.' },
        { kind: 'p', mt: true, html: 'School breaks in NRW for 2026/27, per the Kultusministerkonferenz: two weeks in autumn ending on 31 October 2026, a Christmas break from 23 December 2026 that runs into 6 January 2027, Easter from 22 March 2027 up to 3 April, one free day on 18 May 2027, and six summer weeks from 19 July to 31 August 2027. Classes go on during the holidays for those who want them. Learners join from all parts of Bergisch Gladbach and from nearby Cologne, Leverkusen, Overath, Rösrath, Odenthal and Kürten.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How progress is measured',
    lede: 'Our own scale, the same for every age, so a learner always knows what the next step is.',
    table: { caption: 'Progress stages (ours)', head: ['Stage', 'Often reached', 'Shown by'], rows: [
      ['Follows exact steps', 'First weeks', 'Predicting what a short program will do'],
      ['Repeats and decides', 'First months', 'A game or script with loops and conditions'],
      ['Summarises data', 'Months 3 to 5', 'Choosing mean, median or mode and saying why'],
      ['Beats a baseline', 'Months 5 to 9', 'A model that scores better than the lazy guess'],
      ['Builds and explains', 'Later', 'A project someone else can run and question']
    ] },
    left: { h3: 'For parents', ps: [
      'The third stage is the charging station project. A child who asks whether a typical value really exists will read school charts differently.',
      'Reports describe what your child built and could explain.'
    ] },
    right: { h3: 'For adults', ps: [
      'Before you report an average, check whether anything in the data actually has that value.',
      'When someone shows you an AI model\'s accuracy, ask what the lazy guess would score.'
    ] }
  },

  catalogue: {
    eyebrow: 'Next steps',
    h2: 'Nine more courses for Bergisch Gladbach learners',
    lede: 'Live, in English, with the same mentor throughout, as a class or as private lessons.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'GLC / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Complete beginners finish with their own games.' },
        { code: 'GLC / KIDS / 02', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon for kids', blurb: 'A project built to a deadline, 8 to 12.' },
        { code: 'GLC / KIDS / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Averages, patterns and puzzles in Python.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'GLC / TEEN / 01', slug: 'ai-ml-masterclass-teens', title: 'Machine learning for teens', blurb: 'Models that have to beat a baseline.' },
        { code: 'GLC / TEEN / 02', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens', blurb: 'Using AI well from 13, with checks.' },
        { code: 'GLC / TEEN / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik companion', blurb: 'School Informatik in English, Klasse 5 to 10.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'GLC / ADULT / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python automation and AI', blurb: 'Let scripts do the repetitive work.' },
        { code: 'GLC / ADULT / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Mean, median, mode and much more.' },
        { code: 'GLC / ADULT / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'Language models, retrieval and agents.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'How live classes run for Bergisch Gladbach learners',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'School days', l: 'Afternoon classes for pupils.' },
      { time: 'Work days', l: 'Evening classes for adults.' },
      { time: 'Private plan', l: 'Your own slot, any day, agreed with the mentor.' }
    ],
    cells: [
      { h3: 'Code from lesson one', p: 'No watching; the learner types.' },
      { h3: 'Baseline habit', p: 'Every model meets the lazy guess first.' },
      { h3: 'English at your pace', p: 'Explained again, more simply, when needed.' },
      { h3: 'One mentor', p: 'The same person for the whole course.' },
      { h3: 'Ages kept apart', p: 'Children, teens and adults learn separately.' },
      { h3: 'Two formats', p: 'A class of fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'What students have made',
  projectsLede: 'Work by our students from many countries; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the full collection.',
  reviewsLede: 'Unedited Google reviews from our students and their families.',

  fees: {
    h2: 'Fees in Bergisch Gladbach',
    lede: 'Each month\'s fee includes eight live classes. On this page it is shown in euro, worked out at the European Central Bank reference rate; the actual payment is made in US dollars and converted by your bank, so the euro amount it books may vary a little.',
    free: ['A free first class', 'A starter task for the learner\'s age', 'No card required'],
    group: ['Fifteen to twenty learners at a similar level', 'The same mentor every week', 'Two classes each week', 'Monthly, no long contract'],
    one: ['One learner, one mentor', 'Projects you pick', 'Times arranged together']
  },

  faq: {
    eyebrow: 'Bergisch Gladbach learners ask',
    h2: 'Coding and AI classes in Bergisch Gladbach: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. All teaching is in English and live. Mentors follow the learner\'s pace and accent and explain again in simpler words when needed. The code itself is written in English keywords in any case.' },
      { q: 'Should I learn AI or coding first?', a: 'Coding first, for a short while. A few weeks of small programs teach you to check what a computer gives back, which is exactly the skill you need to use AI tools well and to build models of your own.' },
      { q: 'What age can my child start?', a: 'From 6 with Scratch blocks. Most children move to typed Python at about 9 and to data projects such as the charging station exercise from about 10.' },
      { q: 'Does NRW teach coding at school?', a: 'Informatik is compulsory in grades 5 and 6 at every general NRW school, according to the Gesellschaft für Informatik. From grade 7 the subject is a choice, and in the final two school years only around one pupil in seven in Germany still takes it.' },
      { q: 'Can my teenager use ChatGPT in class?', a: 'OpenAI\'s terms allow ChatGPT from 13, with a parent\'s consent until 18, and we keep to that. Claude is for adults only under Anthropic\'s terms, so it appears only in adult courses.' },
      { q: 'When are classes in Bergisch Gladbach time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils usually come after school and adults in the early evening.' },
      { q: 'Where is the mentor?', a: 'In India, teaching live online. A 16:00 class in Bergisch Gladbach is 20:30 for the mentor this winter; once German clocks go forward on 28 March 2027 the difference shrinks to three and a half hours.' },
      { q: 'How do I pay, and in which currency?', a: 'Monthly, by card or bank. The page shows euro calculated from the European Central Bank reference rate, the payment itself is in US dollars, and your bank converts it, so the booked amount can differ a little.' },
      { q: 'What is the mode, and why does it matter for AI?', a: 'The mode is the most common value. In the charging data it is 44 kilowatts, while the mean of 48.8 matches no station. A model that always predicts the mode is the simplest baseline, and every real model must beat it.' },
      { q: 'Can a whole family learn?', a: 'Yes, in separate classes by age, often with first classes booked on the same day.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for Bergisch Gladbach learners.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our national overview and city list.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'Informatik and holidays across the Land.' },
      { href: '/ai-course-for-school-students-germany', label: 'AI course for school students', p: 'AI for pupils, explained for parents.' },
      { href: '/coding-classes-by-age-germany', label: 'Coding classes by age', p: 'Which course fits which age.' },
      { href: '/coding-classes-for-kids-cologne', label: 'Coding for kids in Cologne', p: 'Our page for the city next door.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one of our live classes.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Let us know the learner\'s age and one thing they hope to build. In the free class the mentor sets a starter task at the right level, sees how the learner works and how easy English feels, and recommends a course.',
    readFirst: 'More background: <a class="ag-inline-link" href="/how-we-teach">how we teach</a> and <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Lessons are live online, in English only, with mentors in India. You can reach us fastest on WhatsApp, in English.',
    formNote: 'Free first class, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Coding and AI', links: [
        { href: '/ai-course-for-school-students-germany', label: 'AI for school students' },
        { href: '/coding-classes-by-age-germany', label: 'Coding by age' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-north-rhine-westphalia', label: 'North Rhine-Westphalia' },
        { href: '/math-and-coding-competitions-germany', label: 'Competitions calendar' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Does anything have that value?'
  },

  personalityCss: `
.ag-root.ag-glc .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-glc .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-glc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-glc .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-glc .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page, national summary); Ministerium für Schule und Bildung NRW (Abitur 2027 dates); KMK Ferienregelung 2026/27; Jugend forscht (age groups, registration); providers\' terms via our AI tools age guide; Einheitenzeitgesetz; Destatis GV-ISys. Bundesnetzagentur, Ladesäulenregister of 1 September 2026, CC BY 4.0.',
    localProject: 'A typical charging station in Bergisch Gladbach: an original Python project on the 140 stations in the Bundesnetzagentur register of 1 September 2026, where the mean rating of 48.8 kW matches no station while the mode, 44 kW (55 stations), and the median, 44 kW, describe real hardware; a year-by-year mode with an honest tie in 2020; and the always-predict-the-mode baseline at about 39 percent. Lesson family: the mode for standard sizes, and the mode as a baseline.',
    requiredMentions: ['bergisch_gladbach_charging.csv', 'Mean power: 48.8 kW', 'Stations at the mean power: 0', '44 kW: 55 stations', '2020 2 stations, most common: 22 kW, 350 kW (1)', '2026 41 stations, most common: 22 kW (25)', 'Cologne, Leverkusen, Overath, Rösrath, Odenthal and Kürten', 'Does anything have that value?'],
    sources: [
      { claim: 'NRW Informatik rules: grades 5 and 6, Wahlpflicht 9 and 10, GK and LK hours, central paper Abitur.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW written Abitur 2027 dates.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/termine/2027' },
      { claim: 'NRW school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Jugend forscht age groups and registration date.', url: 'https://www.jugend-forscht.de/teilnahme/alterssparten.html' },
      { claim: 'Ladesäulenregister and its CC BY 4.0 licence.', url: 'https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/E-Mobilitaet/Ladesaeulenkarte/start.html' }
    ],
    rejectedClaims: [
      'A Stadt Bergisch Gladbach open dataset: none reachable or openly licensed on 3 November 2026, so the federal register was used.',
      'Any claim that the register lists every station: the Bundesnetzagentur says it does not.',
      'Naming charging operators as partners or schools as sources of students: refused.',
      'Any affiliation with the Bundesnetzagentur, Jugend forscht or the city: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
