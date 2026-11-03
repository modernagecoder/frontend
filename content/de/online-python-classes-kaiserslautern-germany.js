'use strict';
// Online Python classes in Kaiserslautern (ag- city page, Germany cluster P6 row DE204, tier-2 shape
// online-python-classes-<city>-germany: live online explained, Python path). Owner 2026-11-02: classes are live, in
// English only, with mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: Kaiserslautern hosts the 2027 Bundesrunde of the Mathematik-Olympiade, so this Python page leans on maths: the
// first four weeks of a live online class; the Olympiad calendar; a project that measures how tightly two things move
// together (correlation) on 104 years of Kaiserslautern weather, and why that number says nothing about why;
// Rhineland-Palatinate school facts; times.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 November 2026, unless stated):
//  - Mathematik-Olympiade: about 200,000 participants a year, grades 3 to 13 (fact 162); three rounds for grades 5 to 7,
//    four from grade 8 (163); primary schools since 2005 (164); Regionalrunde of the 66th MO 11 November 2026 (165);
//    Landesrunde 26 to 28 February 2027, Bundesrunde 30 May to 2 June 2027 (166); "Zur Bundesrunde der 66.
//    Mathematik-Olympiade lädt Rheinland-Pfalz vom 30. Mai bis 02. Juni 2027 nach Kaiserslautern ein." (167, FACTS 167);
//    teams of up to 15 per Land from grade 8 (168).
//  - GI Informatik-Monitor 2026/27: RLP without Informatik compulsory for all (92); 21 Informatik-Profil-Schulen grade 5
//    since 2021/22 (83); compulsory at all schools from 2028/29, four weekly hours (95); some Gymnasien G8 (60).
//  - KMK FER2026_27.pdf, RLP row (fact 280).
//  - Destatis GV-ISys: Kaiserslautern, Stadt 100,426 on 31.12.2024 (facts-geo/places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate values, station 02486 "Kaiserslautern",
//    tageswerte_KL_02486_19010101_20251231_hist.zip, downloaded 3 November 2026; columns TMK (daily mean, column 14)
//    and TNK (daily minimum, column 17), read by position; -999 marks a missing value. Metadaten_Geographie lists 15
//    station locations since 1843, the current one since 12 June 2003. Licence: dwd.de rechtliche Hinweise, CC BY 4.0
//    with attribution. Station inside Kaiserslautern; no other Germany page uses 02486.
//  - Tried first: Stadt Kaiserslautern open data (kaiserslautern.de/service/opendata, content loaded by script; no
//    dataset list in the raw page; geoportal.kaiserslautern.de no connection), 3 November 2026.
// Our own calculations (scratchpad de/w/T7/run/kl/v1.py + v2.py, python3 -I): 104 complete years (365 or 366 days with
// both values) between 1901 and 2025; frost days (minimum below 0 C) fewest 34 (1974), most 124 (1955); Pearson r
// between yearly mean temperature and frost days -0.73; average frost days 1901 to 1930 77 (30 complete years) and 1996
// to 2025 71 (21 complete years). Shuffled-years check (our extra run, random seed 1): r -0.1.
// Lesson family: correlation measures how tightly two things move together on a scale from -1 to 1, not why.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'days, frost, temp_sum = {}, {}, {}',
  'with open("kaiserslautern_days.txt", encoding="latin-1") as src:',
  '    src.readline()                         # the header row',
  '    for row in src:',
  '        parts = row.split(";")',
  '        year = int(parts[1].strip()[:4])',
  '        t_mean, t_min = float(parts[13]), float(parts[16])',
  '        if t_mean == -999 or t_min == -999:',
  '            continue',
  '        days[year] = days.get(year, 0) + 1',
  '        temp_sum[year] = temp_sum.get(year, 0) + t_mean',
  '        frost[year] = frost.get(year, 0) + (t_min < 0)',
  '',
  'full = [y for y in days if days[y] >= 365]',
  'x = [temp_sum[y] / days[y] for y in full]       # mean temperature of the year',
  'y = [frost[yr] for yr in full]                  # days with a minimum below 0 C',
  'print("Complete years:", len(full))',
  'print("Frost days, fewest and most:", min(y), max(y))'
].join('\n');

const V2 = [
  'def mean(v):',
  '    return sum(v) / len(v)',
  '',
  'def correlation(a, b):',
  '    ma, mb = mean(a), mean(b)',
  '    top = sum((p - ma) * (q - mb) for p, q in zip(a, b))',
  '    spread_a = sum((p - ma) ** 2 for p in a) ** 0.5',
  '    spread_b = sum((q - mb) ** 2 for q in b) ** 0.5',
  '    return top / (spread_a * spread_b)',
  '',
  'print("r between mean temperature and frost days:", round(correlation(x, y), 2))',
  'first = [v for yr, v in zip(full, y) if yr <= 1930]',
  'last = [v for yr, v in zip(full, y) if yr >= 1996]',
  'print("Average frost days 1901 to 1930:", round(mean(first)), " 1996 to 2025:", round(mean(last)))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Kaiserslautern: online Python' },
  slug: 'online-python-classes-kaiserslautern-germany',
  code: 'pka',
  accent: '#751A00',
  accentRationale: 'Online Python in Kaiserslautern: a deep Palatinate red sandstone #751A00, the stone of the Pfälzerwald around the city, kept clear of the Trier brick and the Rhineland-Palatinate purple; contrast 8.95 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-rhineland-palatinate', name: 'Rhineland-Palatinate' }],
  routeLabel: 'Online Python classes in Kaiserslautern',
  title: 'Online Python Classes in Kaiserslautern, Live in English',
  description: 'Online Python classes in Kaiserslautern for ages 9 to adult: live lessons in English, the 2027 Mathematik-Olympiade final in the city, and a weather data project.',
  ogDescription: 'Live online Python in English for Kaiserslautern learners, with maths at its heart: the city hosts the 2027 Mathematik-Olympiade Bundesrunde, and our project measures a correlation on 104 years of local weather.',
  twitterDescription: 'Live online Python in English for Kaiserslautern, with maths, the 2027 Olympiad final and local weather data.',
  pageName: 'Online Python Classes in Kaiserslautern',
  webPageDescription: 'A guide for Kaiserslautern families and adults to live online Python classes: the first four weeks, the Mathematik-Olympiade 2026/27 calendar and its Bundesrunde in Kaiserslautern, an original correlation project on Deutscher Wetterdienst data, Rhineland-Palatinate school facts and class times.',
  courseDescription: 'Live online Python classes in English for learners in Kaiserslautern aged 9 and up: typed Python from the first lesson, then data, statistics and small models, with one regular mentor, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kaiserslautern',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#weeks', label: 'Online' },
    { href: '#olympiad', label: 'Olympiad' },
    { href: '#frost', label: 'Project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Kaiserslautern &middot; Python &middot; Live online',
  h1: 'Online Python classes in Kaiserslautern',
  lede: 'In spring 2027 the strongest young mathematicians from every Land travel to Kaiserslautern for the national final of the Mathematik-Olympiade. Python and maths belong together: a few lines of code can test a hunch on a century of data in a second, and the maths says what the result does and does not mean. This page is for Kaiserslautern learners and parents: how the first four weeks of a live online Python class go, the Olympiad calendar for 2026/27, a correlation project on 104 years of Kaiserslautern weather, what Rhineland-Palatinate schools teach, and class times.',
  secondaryCta: { href: '#frost', label: 'See the weather project' },
  wa: 'Hello Modern Age Coders, I live in Kaiserslautern and would like a free first Python class, live and in English.',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; Python with the maths explained',
  spec: [
    ['Ages', '9 and up, adults too'],
    ['Format', 'Live video, shared screen'],
    ['Teaching language', 'English, at your pace'],
    ['Kaiserslautern times', 'After school, evenings, weekends'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Online Python classes for Kaiserslautern at Modern Age Coders are taught live in English: learners type and run Python on their own computer while the mentor follows the shared screen and asks questions. Children start at about 9; teenagers and adults go on to data, statistics and small models, with the maths explained. Each learner has one mentor based in India who keeps to their pace and accent, in a class of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Starting points',
    h2: 'Python courses for Kaiserslautern learners',
    lede: 'Two Python courses by age, and one for pupils who want Python and contest maths together.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PKA / 01', title: 'Python and AI for Kids', note: 'Children around nine to twelve. Proper Python from hour one, with pictures, number games and, later on, a first program that improves by looking at examples.' },
      { course: 'python-complete-masterclass-teens', code: 'PKA / 02', title: 'Python for Teens', note: 'Secondary-school age. The whole language, loops to files to data, with the maths inside every program spelled out.' },
      { course: 'mathematik-olympiade-and-kaenguru-training-course', code: 'PKA / 03', title: 'Mathematik-Olympiade and Känguru Training', note: 'For pupils who enjoy hard problems. Original Olympiad-style problems in English, proof-writing, and Python to test ideas on small cases.' }
    ]
  },

  sections: [
    {
      id: 'weeks',
      eyebrow: 'Live online',
      h2: 'What happens in the first four weeks of an online Python class?',
      lede: 'Two live lessons a week on video, the learner typing throughout. This is a typical first month for a Kaiserslautern teenager; children move more slowly, adults sometimes faster.',
      body: [
        { kind: 'table', numCols: [], caption: 'A typical first month of live Python (our own plan)', head: ['Week', 'In the live lessons', 'The learner can then'], rows: [
          ['1', 'Install Python together, print, input, arithmetic', 'Turn a height in centimetres into metres and feet'],
          ['2', 'Conditions and loops, traced on paper first', 'Predict what a loop prints before running it'],
          ['3', 'Lists and simple functions', 'Store a list of numbers and compute their mean'],
          ['4', 'Reading a text file line by line', 'Open a real data file and count its rows']
        ] },
        { kind: 'source', html: 'Our own plan, adjusted for each learner. Children of 9 to 12 spend about twice as long on each week\'s content, with more games.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Live, every lesson', p: 'A mentor teaches in real time, watching the learner\'s shared screen. Mistakes are spotted early, and an idea that does not click is explained again another way. Nothing is a recording.' },
          { h3: 'English, gently', p: 'Lessons are in English only; we never teach in German and say so before any trial. Mentors speak clearly, slow down and repeat. Python\'s own words are English, so the language and the code support each other.' },
          { h3: 'One mentor throughout', p: 'The same mentor, based in India, stays with the learner for the whole course and comes to know how they think: who rushes, who hesitates, who learns most from breaking things.' }
        ] }
      ]
    },
    {
      id: 'olympiad',
      eyebrow: 'Maths in Kaiserslautern',
      h2: 'When is the Mathematik-Olympiade final in Kaiserslautern?',
      lede: 'From 30 May to 2 June 2027. Rhineland-Palatinate hosts the Bundesrunde of the 66th Mathematik-Olympiade in Kaiserslautern.',
      body: [
        { kind: 'table', numCols: [], caption: 'The 66th Mathematik-Olympiade, 2026/27', head: ['Round', 'Date', 'Who takes part'], rows: [
          ['Schulrunde', 'From the start of the school year to October 2026', 'Pupils at participating schools'],
          ['Regionalrunde', '11 November 2026, as listed by the organisers', 'Those who qualify from the school round'],
          ['Landesrunde', '26 to 28 February 2027', 'Those who qualify from the regional round'],
          ['Bundesrunde, in Kaiserslautern', '30 May to 2 June 2027', 'Teams of up to 15 per Land, from grade 8']
        ] },
        { kind: 'source', html: 'Sources: mathe-wettbewerbe.de, Mathematik-Olympiade pages, and Mathematik-Olympiaden e.V. Read on 2 November 2026. Grades 5 to 7 compete in three rounds and finish at the Landesrunde; from grade 8 there are four. Local arrangements are made through schools.' },
        { kind: 'two', mt: true,
          leftH3: 'What the Olympiad is',
          left: [
            'The Mathematik-Olympiade is a national competition with about 200,000 participants a year, from grade 3 to grade 13; primary schools have been included since 2005. It rewards careful reasoning and written proofs, not speed with a calculator.',
            'Entry is through schools. A Kaiserslautern pupil who enjoys puzzles should ask their maths teacher about the school round.'
          ],
          rightH3: 'Where Python helps, and where it does not',
          right: [
            'Python is a fine laboratory: try a claim on the first hundred cases, spot a pattern, find a counterexample. But a computer check of small cases is evidence, not a proof, and the Olympiad marks proofs.',
            'Our <a class="ag-inline-link" href="/math-olympiad-germany-preparation">Mathematik-Olympiade preparation page</a> explains how we teach with original problems written by us. We never reproduce the organisers\' tasks and we are not connected with the competition.'
          ] }
      ]
    },
    {
      id: 'frost',
      tint: 'tint',
      eyebrow: 'A Kaiserslautern data project',
      h2: 'Do warmer years in Kaiserslautern have fewer frost days, and how sure can we be?',
      lede: 'Germany\'s national weather service keeps a daily record for Kaiserslautern going back to 1901 and lets anyone reuse it, with credit, under CC BY 4.0. Learners turn a hunch into one number between -1 and 1, then learn exactly what that number can and cannot tell them.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'For every day the file holds, among other things, the mean temperature and the lowest temperature. We downloaded it on 3 November 2026 and saved it as kaiserslautern_days.txt. Missing values are written -999.',
            'A frost day, for us, is a day whose lowest temperature is below 0 degrees. We keep only complete years, those with every day present, which leaves 104 years between 1901 and 2025.'
          ],
          rightH3: 'The hunch',
          right: [
            'Warmer years should have fewer frost days. That sounds obvious, but how strong is the link, really? A year can be warm on average and still have a cold January.',
            'Correlation measures how tightly two lists of numbers move together. A value near 1 means they rise together, near -1 that one falls as the other rises, near 0 that there is no straight-line link.'
          ] },
        { kind: 'code', label: 'Version 1: one mean temperature and one frost count per year', lang: 'Python', code: V1, note: 'It prints <code>Complete years: 104</code> and <code>Frost days, fewest and most: 34 124</code>.' },
        { kind: 'p', mt: true, html: 'The range alone is striking: one complete year in the record has only 34 frost days, 1974, and another has 124, 1955. Version 2 calculates the correlation from scratch, with no library, so every step of the formula is visible: subtract each list\'s mean, multiply the differences pair by pair, add them up, and divide by the spread of each list.' },
        { kind: 'code', label: 'Version 2: correlation, written out by hand', lang: 'Python', code: V2, note: 'It prints <code>r between mean temperature and frost days: -0.73</code> and <code>Average frost days 1901 to 1930: 77  1996 to 2025: 71</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Kaiserslautern weather station, complete years 1901 to 2025 (our calculation)', head: ['Measure', 'Value'], rows: [
          ['Complete years used', '104'],
          ['Fewest frost days in a year', '34 (1974)'],
          ['Most frost days in a year', '124 (1955)'],
          ['Correlation r, mean temperature and frost days', '-0.73'],
          ['Average frost days, 1901 to 1930', '77 (30 complete years)'],
          ['Average frost days, 1996 to 2025', '71 (21 complete years)']
        ] },
        { kind: 'source', html: 'Figures computed by us from the DWD\'s daily record for station 02486 (Kaiserslautern), using the daily mean and the daily minimum; file fetched 3 November 2026; licence CC BY 4.0, credit Deutscher Wetterdienst. The rules for a frost day and a complete year are ours.' },
        { kind: 'p', mt: true, html: 'An r of -0.73 is a strong negative link: in warmer years there are clearly fewer frost days, though not perfectly so. To see that the number is not luck, our learners shuffle the frost counts so that each year gets another year\'s count, and compute r again: with the order broken it drops to about -0.1. What r cannot do is explain why. It says the two lists move together, not that one causes the other; here the cause is obvious, but for many pairs of numbers it is not, and a high r has fooled many people.' },
        { kind: 'p', html: 'Two more cautions, both from reading the metadata. The station has stood in 15 different places since records began in 1843, and since 1901 its height above sea level has ranged from about 230 to just over 300 metres, which matters for frost. And only 21 of the last 30 years are complete, so the 71 for 1996 to 2025 rests on fewer years than the 77 for 1901 to 1930. Honest analysis states both.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12.</strong> Measure the height and shoe size of ten people. Plot them as dots. Do the dots slope upwards?',
          '<strong>Teenagers.</strong> Run both versions, then shuffle the frost list with the random module and compute r again. Repeat ten times.',
          '<strong>Adults.</strong> Compute r between the year number itself and frost days. What would a strong value mean, and what would it not mean?',
          '<strong>Going further.</strong> Count summer days, with a maximum of 25 degrees or more, and find their correlation with the mean temperature.'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Rhineland-Palatinate schools',
      h2: 'What do Kaiserslautern schools teach in Informatik?',
      lede: 'For now, only some pupils have it; from 2028/29 every school in Rhineland-Palatinate will teach it.',
      body: [
        { kind: 'two',
          leftH3: 'Before 2028/29',
          left: [
            'The Gesellschaft für Informatik counts Rhineland-Palatinate among six Länder where no Informatik lesson is compulsory for all pupils. The exception is a set of 21 Informatik-Profil-Schulen, which have taught it as a compulsory subject in grade 5 since 2021/22.',
            'Elsewhere, Informatik depends on what a school offers and what a pupil chooses, up to the Oberstufe.'
          ],
          rightH3: 'From 2028/29',
          right: [
            'The monitor reports that Informatik becomes compulsory at all schools in the Land from the 2028/29 school year, with four weekly hours in total.',
            'Our classes sit beside school and never replace it; marks and the Abitur come from school alone. Pupils who already take the subject can follow it in English with our <a class="ag-inline-link" href="/courses/informatik-abitur-course-java-python">Informatik Abitur course</a>, and the <a class="ag-inline-link" href="/coding-classes-in-rhineland-palatinate">Rhineland-Palatinate page</a> has more on the Land.'
          ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, national summary and Rhineland-Palatinate page, read on 2 November 2026. Most Gymnasien in the Land follow the nine-year route; some offer eight.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When do online Python classes run in Kaiserslautern?',
      lede: 'After school, after work and at weekends. The mentor\'s clock in India is several hours ahead, so a Kaiserslautern afternoon is an Indian evening.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Kaiserslautern slots and the time for the mentor', head: ['In Kaiserslautern', 'Mentor\'s clock now', 'Mentor\'s clock after the spring change'], rows: [
          ['16:25', '20:55', '19:55'],
          ['17:25', '21:55', '20:55'],
          ['Saturday 12:30', '17:00', '16:00'],
          ['Sunday 15:45', '20:15', '19:15']
        ] },
        { kind: 'source', html: 'Kaiserslautern keeps Central European Time, UTC+1, from 25 October 2026 and summer time, UTC+2, from 28 March 2027, under the Einheitenzeitgesetz; India is on UTC+5:30 all year. These are examples, not set group times.' },
        { kind: 'p', mt: true, html: 'School will be closed in Rhineland-Palatinate, per the Kultusministerkonferenz, over Christmas from 23 December 2026 until 8 January 2027, for Easter from 22 March to 2 April 2027, and all summer from 28 June to 6 August 2027; the autumn break (5 to 16 October 2026) is already past. Python lessons do not have to stop. Learners join from all parts of Kaiserslautern and from nearby Landstuhl, Otterberg, Enkenbach-Alsenborn, Ramstein-Miesenbach and Kusel.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Skills',
    h2: 'The Python and maths skills a learner builds',
    lede: 'Our own ladder, the same for every age, with the maths named at each step.',
    table: { caption: 'Python and maths ladder (ours)', head: ['Rung', 'Python skill', 'Maths behind it'], rows: [
      ['1', 'Print, input and arithmetic', 'Order of operations'],
      ['2', 'Loops and conditions', 'Counting and cases'],
      ['3', 'Lists and functions', 'Mean and spread'],
      ['4', 'Files and real data', 'Complete and missing cases'],
      ['5', 'Your own analysis', 'Correlation, and what it does not prove']
    ] },
    left: { h3: 'For parents', ps: [
      'Rung 5 is the frost project. A learner who can say what a correlation does not prove reads the news differently.',
      'You get told what your child can now do on their own.'
    ] },
    right: { h3: 'For learners', ps: [
      'Write the formula out by hand once before you call a library.',
      'A strong r says "together", never "because".'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine more courses for Kaiserslautern learners',
    lede: 'Same promise for all nine: real-time teaching in English and one mentor for the duration, group or private.',
    bands: [
      { num: 'I', h3: 'Young learners', sub: 'Ages 8 to 14', courses: [
        { code: 'PKA / YOUNG / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored in Python, 10 to 15.' },
        { code: 'PKA / YOUNG / 02', slug: 'middle-school-math-competitions-course', title: 'Maths competitions', blurb: 'Contest problems for younger pupils.' },
        { code: 'PKA / YOUNG / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic puzzles that grow into proofs.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'PKA / TEEN / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Correlation, spread and uncertainty.' },
        { code: 'PKA / TEEN / 02', slug: 'abitur-mathematics-course-in-english', title: 'Abitur maths in English', blurb: 'Analysis and Stochastik for the Abitur.' },
        { code: 'PKA / TEEN / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Algorithms for contests.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'PKA / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Python from the first line.' },
        { code: 'PKA / ADULT / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Data, models and honest reporting.' },
        { code: 'PKA / ADULT / 03', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus and linear algebra.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Practical details',
    h2: 'How live Python classes run for Kaiserslautern',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'For pupils after the school day.' },
      { time: 'Evenings', l: 'For adults after work.' },
      { time: 'Private', l: 'A time agreed with the mentor, any day.' }
    ],
    cells: [
      { h3: 'Typed, not watched', p: 'The learner writes every line.' },
      { h3: 'Maths made visible', p: 'Formulas written out before libraries.' },
      { h3: 'Clear English', p: 'Repeated, simplified, never rushed.' },
      { h3: 'One mentor', p: 'From first lesson to final project.' },
      { h3: 'Original problems', p: 'Contest-style tasks written by us.' },
      { h3: 'Two sizes', p: 'Groups of fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Some work by our Python learners around the world; more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from students and parents, quoted as written.',

  fees: {
    h2: 'Fees for online Python in Kaiserslautern',
    lede: 'One monthly fee pays for eight live classes. The euro amount shown comes from the European Central Bank reference rate; the payment is taken in US dollars, and your bank does the conversion, so its euro figure may differ slightly from ours.',
    free: ['A free first class', 'A short Python task at your level', 'No card needed'],
    group: ['Fifteen to twenty learners of similar level', 'One mentor for the course', 'Two live classes a week', 'Monthly, stop at any time'],
    one: ['One learner with one mentor', 'Your own goals and projects', 'Times arranged between you']
  },

  faq: {
    eyebrow: 'Kaiserslautern learners ask',
    h2: 'Online Python classes in Kaiserslautern: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Teaching is live and only ever in English. Because the mentor tunes speed and pronunciation to each learner, pupils with ordinary school English cope well, and Python\'s keywords are English in any case.' },
      { q: 'Is the Mathematik-Olympiade final really in Kaiserslautern?', a: 'Yes. According to the organisers, Rhineland-Palatinate hosts the Bundesrunde of the 66th Mathematik-Olympiade in Kaiserslautern from 30 May to 2 June 2027, with teams of up to 15 pupils per Land from grade 8.' },
      { q: 'Can Python help with the Olympiad?', a: 'As a laboratory, yes: testing ideas on small cases and finding counterexamples. But the Olympiad marks written proofs, and a computer check is evidence, not proof. We teach both and use only problems we wrote ourselves.' },
      { q: 'Is my eight year old too young for Python?', a: 'Often a little, yes. Most children are ready at about nine, when reading is quick and the keyboard is familiar; until then Scratch gives the same ideas with blocks.' },
      { q: 'Do Kaiserslautern schools teach Informatik?', a: 'Not yet for every pupil: Rhineland-Palatinate has no Informatik compulsory for all, apart from grade 5 at 21 profile schools. From 2028/29 it becomes compulsory at all schools, four weekly hours in total.' },
      { q: 'When are classes in Kaiserslautern time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Kaiserslautern pupils mostly choose the hours after school; adults often take 17:25 or later.' },
      { q: 'Who are the mentors?', a: 'Programmers with teaching experience who work from India and teach over live video, in English. A learner does not change mentor partway through.' },
      { q: 'How are fees paid?', a: 'Per month, in US dollars. The euro you see here is the ECB reference-rate equivalent; your bank does the actual exchange, which can move the final figure slightly. The first class is free of charge.' },
      { q: 'What is the frost project?', a: 'Learners use 104 complete years of Kaiserslautern weather from the Deutscher Wetterdienst, count frost days per year and calculate the correlation with the mean temperature by hand. It comes out at -0.73, a strong link that still does not, by itself, prove a cause.' },
      { q: 'Can adults join?', a: 'Yes, in adult classes or one to one, from the first line of Python.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Kaiserslautern learners.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The index of our German city and Land pages.' },
      { href: '/coding-classes-in-rhineland-palatinate', label: 'Coding classes in Rhineland-Palatinate', p: 'The Land in more detail.' },
      { href: '/math-olympiad-germany-preparation', label: 'Mathematik-Olympiade preparation', p: 'How we prepare pupils, in English.' },
      { href: '/mathematik-olympiade-vorbereitung', label: 'Mathematik-Olympiade Vorbereitung', p: 'The same topic, explained in German.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'Python for any age, anywhere in Germany.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method in one page.' }
    ]
  },

  start: {
    h2: 'Book a free first Python class',
    lede: 'The free class is a real hour of Python. The learner writes and runs a short program, the mentor sees how they reason and how comfortable English is, and you leave with a clear course recommendation.',
    readFirst: 'Read first, if you like: <a class="ag-inline-link" href="/how-we-teach">how we teach</a> and <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Teaching is live, online and English-only, from mentors in India. Send a WhatsApp message if you have a question.',
    formNote: 'Free first class, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Python and maths', links: [
        { href: '/python-course-germany', label: 'Python course in Germany' },
        { href: '/math-olympiad-germany-preparation', label: 'Mathematik-Olympiade' },
        { href: '/kangaroo-math-germany-practice', label: 'Känguru practice' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-rhineland-palatinate', label: 'Rhineland-Palatinate' },
        { href: '/math-and-coding-competitions-germany', label: 'Competitions calendar' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Together is not because'
  },

  personalityCss: `
.ag-root.ag-pka .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-pka .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-pka .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-pka .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-pka .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Mathematik-Olympiade pages (mathe-wettbewerbe.de, Mathematik-Olympiaden e.V.), 66th Olympiad dates and the 2027 Bundesrunde in Kaiserslautern; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (national summary, Rhineland-Palatinate page); KMK Ferienregelung 2026/27; Einheitenzeitgesetz; Destatis GV-ISys. Deutscher Wetterdienst, daily values for station 02486 Kaiserslautern, CC BY 4.0.',
    localProject: 'Frost and warmth in Kaiserslautern: an original Python project on DWD daily values, counting frost days in 104 complete years between 1901 and 2025 (34 in 1974 to 124 in 1955) and computing the Pearson correlation with the yearly mean temperature by hand, r = -0.73, then a shuffle check that drops it to about -0.1, with the station moves and incomplete recent years stated. Lesson family: correlation measures togetherness, not cause.',
    requiredMentions: ['kaiserslautern_days.txt', 'Complete years: 104', 'Frost days, fewest and most: 34 124', 'r between mean temperature and frost days: -0.73', 'Average frost days 1901 to 1930: 77', '30 May to 2 June 2027', 'Landstuhl, Otterberg, Enkenbach-Alsenborn, Ramstein-Miesenbach and Kusel', 'Together is not because'],
    sources: [
      { claim: 'The 66th Mathematik-Olympiade Bundesrunde in Kaiserslautern, 30 May to 2 June 2027; rounds and participation.', url: 'https://www.mathe-wettbewerbe.de/mo' },
      { claim: 'Landesrunde and Bundesrunde dates 2027.', url: 'https://www.mathematik-olympiaden.de/moev/index.php' },
      { claim: 'Rhineland-Palatinate Informatik today and from 2028/29.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/rheinland-pfalz' },
      { claim: 'Rhineland-Palatinate school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'DWD daily values for station 02486 Kaiserslautern.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' },
      { claim: 'DWD reuse under CC BY 4.0.', url: 'https://www.dwd.de/DE/service/rechtliche_hinweise/rechtliche_hinweise_node.html' }
    ],
    rejectedClaims: [
      'Any affiliation with the Mathematik-Olympiade, its organisers or the host city: none; we use only our own problems.',
      'Reproducing Olympiad tasks or solutions: refused.',
      'Stadt Kaiserslautern open data: no usable dataset list in the raw portal page on 3 November 2026; the DWD station in the city was used.',
      'Any causal claim from r alone: refused; the page says correlation is not cause.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
