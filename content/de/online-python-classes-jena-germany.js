'use strict';
// Online Python classes in Jena (ag- city page, Germany cluster P6 row DE198, tier-2 shape
// online-python-classes-<city>-germany: live online explained, Python path). Owner 2026-11-02: classes are live, in
// English only, with mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: six checks to make before booking any online Python class; Thuringia's new MBI subject; two centuries of Jena
// temperatures, where single years jump about and a 30-year moving window shows the trend, and a window with a hole in
// it must refuse to answer.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 November 2026, unless stated):
//  - GI Informatik-Monitor 2026/27, Thuringia: Medienbildung und Informatik (MBI) from 2024/25, "Die Umsetzung erfolgt
//    aktuell in den Jahrgangsstufen 5, 6 und 7 ... bis zur Jahrgangsstufe 10 im Schuljahr 2029/30" (fact 89); national:
//    "Mit Mecklenburg-Vorpommern, dem Saarland und Thüringen setzen drei Bundesländer die mittelfristige Empfehlung von
//    6 Pflichtstunden um." (90); SWK recommendation of six hours by 2030 (93).
//  - KMK school types: Regelschule (two tracks) and Gemeinschaftsschule (three tracks) in Thuringia (facts 20, 21).
//  - KMK FER2026_27.pdf, Thuringia: "12.10. - 24.10. 23.12. - 02.01. 01.02. - 06.02. 22.03. - 03.04. 07.05. 10.07. -
//    20.08." (fact 283).
//  - bwinf.de: Biber 9 to 20 November 2026 (133); Jugendwettbewerb Informatik from grade 3 (141).
//  - Destatis GV-ISys: Jena, Stadt 109,725 on 31.12.2024 (facts-geo/places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, annual climate values, station 02444 "Jena (Sternwarte)",
//    file jahreswerte_KL_02444_18210101_20251231_hist.zip from opendata.dwd.de/climate_environment/CDC/
//    observations_germany/climate/annual/kl/historical/, downloaded 3 November 2026; column JA_TT "Jahresmittel der
//    Lufttemperatur" (column 6, read by position); -999 marks a missing value. Station at 154.5 m since 1 August 2004
//    (Metadaten_Geographie_02444). Parameter metadata: 1821 to 1822 from three readings a day at 08, 14 and 20 local time,
//    from 1824 at 07, 14 and 21. Licence: dwd.de rechtliche Hinweise, "Eine Weiterverwendung ist ausschließlich unter den
//    Bedingungen der Creative-Commons -Lizenz BY 4.0 ( CC BY 4.0 ) sowie unter Angabe einer ordnungsgemäßen
//    Quellenkennzeichnung zulässig." Station inside the city of Jena; no other Germany page uses station 02444.
//  - Tried first: Stadt Jena open data (opendata.jena.de, www.jena.de): connection timed out on 3 November 2026.
// Our own calculations (scratchpad de/w/T7/run/jena/v1.py + v2.py, python3 -I): 195 years with a value, 1821 to 2025;
// two rows -999 (1823, 1845); years absent from the file 1843, 1870, 1875 to 1878, 1922, 1945. 1864 6.19 C, 1990 10.7 C,
// 2024 12.01 C (warmest; coldest 1864). 30-year windows ending 1908 8.11, 1921 8.61, 1950 None, 1990 9.28, 2020 10.3,
// 2025 10.51. Complete windows exist only for end years 1908 to 1921 and 1975 to 2025 (65 windows).
// Lesson family: a moving average smooths a jumpy series, and a window with a hole must refuse to answer.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'mean_temp = {}',
  'with open("jena_years.txt", encoding="latin-1") as f:',
  '    next(f)                                   # skip the header line',
  '    for line in f:',
  '        cols = [c.strip() for c in line.split(";")]',
  '        year, value = int(cols[1][:4]), float(cols[5])',
  '        if value != -999:                     # -999 is the DWD code for "no value"',
  '            mean_temp[year] = value',
  '',
  'print("Years with a mean temperature:", len(mean_temp))',
  'print("First:", min(mean_temp), " last:", max(mean_temp))',
  'for y in (1864, 1990, 2024):',
  '    print(y, mean_temp[y], "C")'
].join('\n');

const V2 = [
  'def window_mean(end, size=30):',
  '    years = range(end - size + 1, end + 1)',
  '    if any(y not in mean_temp for y in years):',
  '        return None                           # a gap: refuse to guess',
  '    return round(sum(mean_temp[y] for y in years) / size, 2)',
  '',
  'for end in (1908, 1921, 1950, 1990, 2020, 2025):',
  '    print("30 years to", end, ":", window_mean(end))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Jena: online Python' },
  slug: 'online-python-classes-jena-germany',
  code: 'pje',
  accent: '#642700',
  accentRationale: 'Online Python in Jena: a deep shell-limestone brown #642700 for the cliffs of the Saale valley, well away from the Thuringia slate and the Germany fir green; contrast 9.30 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-thuringia', name: 'Thuringia' }],
  routeLabel: 'Online Python classes in Jena',
  title: 'Online Python Classes in Jena: Live Lessons in English',
  description: 'Online Python classes in Jena for ages 9 to adult: six checks before you book, Thuringia\'s MBI subject, and two centuries of Jena temperatures in Python.',
  ogDescription: 'Live online Python in English for Jena learners, with an original project on the Jena Sternwarte weather station: 195 years of temperatures, smoothed with a 30-year moving window that knows when to stay silent.',
  twitterDescription: 'Live online Python in English for Jena, from a first loop to two centuries of temperatures.',
  pageName: 'Online Python Classes in Jena',
  webPageDescription: 'A guide for Jena families and adults choosing an online Python class: six questions to ask any provider, what Thuringian schools now teach in Medienbildung und Informatik, and an original moving-average project on the Deutscher Wetterdienst record from the Jena Sternwarte.',
  courseDescription: 'Live online Python classes in English for learners in Jena aged 9 and up, from typed basics through files and data to small models, with one regular mentor, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Jena',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#checks', label: 'Checks' },
    { href: '#school', label: 'School' },
    { href: '#climate', label: 'Project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Jena &middot; Python &middot; Live online',
  h1: 'Online Python classes in Jena',
  lede: 'Jena has measured its weather at the same observatory site for two centuries, and that record is now open data. It makes a fine first serious Python project, because it is long, real and full of gaps. This page is for Jena learners and parents weighing up an online Python class: six questions to ask before you book with anyone, what the new Thuringian school subject covers, and how our learners turn 195 years of temperatures into a trend they can defend.',
  secondaryCta: { href: '#climate', label: 'See the Jena project' },
  wa: 'Hello Modern Age Coders, I live in Jena and would like a free first Python class, live and in English.',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; every line typed by the learner',
  spec: [
    ['Ages', '9 and up, adults welcome'],
    ['Format', 'Live video with a shared screen'],
    ['Teaching language', 'English, at the learner\'s pace'],
    ['Jena times', 'Afternoons, evenings, weekends'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders runs online Python classes for Jena that are live, taught in English, and hands-on: on a video call the learner writes and runs Python in their own editor while the mentor watches the shared screen and asks questions. From about 9 children type their own programs; older learners go further, into data files and simple models. Classes of fifteen to twenty or one to one, with one India-based mentor who keeps to each learner\'s pace and accent.',

  picks: {
    eyebrow: 'Python by age',
    h2: 'Three Python courses for Jena learners',
    lede: 'One for children, one for teenagers, one for adults. The free first class tells us which suits.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PJE / 01', title: 'Python and AI for Kids', note: 'Nine to twelve year olds type their first programs, draw with turtle graphics and build small games before trying a little machine learning.' },
      { course: 'python-complete-masterclass-teens', code: 'PJE / 02', title: 'Python for Teens', note: 'Thirteen to eighteen. A full route from variables and loops to files, classes and data projects like the Jena temperature record.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PJE / 03', title: 'Python Masterclass for Adults', note: 'Adults with no experience. Clear foundations first, then the scripts and libraries that make Python useful at work.' }
    ]
  },

  sections: [
    {
      id: 'checks',
      eyebrow: 'Before you book',
      h2: 'What should you check before booking an online Python class in Jena?',
      lede: 'There are many online courses, and they differ more than their websites suggest. These six questions sort them quickly. They apply to us as much as to anyone.',
      body: [
        { kind: 'ol', items: [
          '<strong>Is it live?</strong> A recorded video cannot notice that a learner is stuck. Ask whether a person teaches in real time, and how often.',
          '<strong>Who types?</strong> If the teacher writes the code and the learner watches, very little is learned. In our classes the learner types from the first minute.',
          '<strong>Is it the same teacher each time?</strong> A mentor who knows the learner\'s gaps saves weeks. Ours stay with a learner for the whole course.',
          '<strong>In which language, and at what speed?</strong> We teach only in English, slowly when needed, and we tell families before any trial.',
          '<strong>Which tools, at which age?</strong> AI tools have minimum ages in their providers\' terms. A course for children should not need any adult account.',
          '<strong>What will exist at the end?</strong> Ask for an example of a finished project. A good course ends with something the learner built and can explain.'
        ] },
        { kind: 'source', html: 'Our own checklist. Tool ages are quoted from the providers\' terms in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>; OpenAI sets 13 with a parent\'s permission under 18, Anthropic sets 18.' },
        { kind: 'two', mt: true,
          leftH3: 'What a week looks like',
          left: [
            'Two live classes of an hour each, usually a few days apart, and a short task in between. In class the mentor introduces one idea, the learner uses it to build something, then deliberately breaks it and explains the error message.',
            'Between classes the learner finishes the task alone and brings questions. Nothing is marked; the point is to arrive with something to show.'
          ],
          rightH3: 'What you need in Jena',
          right: [
            'Any laptop or desktop made in the last ten years will do, plus a camera, headphones with a microphone and reliable internet. Python costs nothing; setting it up together is part of lesson one.',
            'A quiet corner helps more than a fast machine. The programs on this page run in seconds on an ordinary laptop.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Thuringian schools',
      h2: 'What do Jena schools teach in Medienbildung und Informatik?',
      lede: 'Thuringia is building up a new compulsory subject, Medienbildung und Informatik, or MBI, one year group at a time.',
      body: [
        { kind: 'two',
          leftH3: 'A subject that grows each year',
          left: [
            'According to the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, MBI started in the 2024/25 school year at all general schools in Thuringia. It is currently taught in grades 5, 6 and 7 and is being extended one grade a year, reaching grade 10 in the 2029/30 school year.',
            'A Jena pupil in grade 5 today will have MBI every year up to grade 10. An older sibling in grade 8 may have none at all, because the subject arrived after them.'
          ],
          rightH3: 'Ahead of most Länder',
          right: [
            'The KMK\'s scientific commission recommends six compulsory weekly hours of Informatik across lower secondary by 2030. The monitor names Thuringia as one of only three Länder that already meet that target, with Mecklenburg-Vorpommern and Saarland.',
            'Thuringian secondary pupils attend a Gymnasium, a Regelschule with two tracks or a Gemeinschaftsschule with three; MBI applies to all of them.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'MBI by grade for Jena pupils, school year 2026/27', head: ['Grade in 2026/27', 'MBI this year?', 'MBI through to grade 10?'], rows: [
          ['5', 'Yes', 'Yes'],
          ['6', 'Yes', 'Yes'],
          ['7', 'Yes', 'Yes, as the subject moves up'],
          ['8', 'No', 'The rollout reaches grade 8 in 2027/28, after this year group'],
          ['9 and 10', 'No', 'The rollout reaches these grades after this year group has left them']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, national summary and Thuringia page, read on 2 November 2026. The year-by-year reading in the right-hand column is our own, from the stated rollout of one grade per year to grade 10 in 2029/30.' },
        { kind: 'p', mt: true, html: 'Our classes run next to school and never replace it; school marks come from school. For a pupil who wants more programming than MBI offers, or who missed it, typed Python is the natural next step. Our <a class="ag-inline-link" href="/courses/informatik-companion-course-klasse-5-10">Informatik companion for Klasse 5 to 10</a> follows school topics in English, and the <a class="ag-inline-link" href="/coding-classes-in-thuringia">Thuringia page</a> covers the Land in more depth.' }
      ]
    },
    {
      id: 'climate',
      tint: 'tint',
      eyebrow: 'A Jena data project',
      h2: 'Has Jena got warmer since the 1800s, and how can Python show it fairly?',
      lede: 'The Deutscher Wetterdienst publishes the yearly mean temperature for its station Jena (Sternwarte) back to 1821, free to reuse under CC BY 4.0. A single year tells you little; a moving window over thirty years tells you a lot, as long as it refuses to fill holes it cannot see into.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file we downloaded on 3 November 2026 holds one row per year, and the sixth column, called JA_TT, is the annual mean air temperature. A value of -999 means "missing". We saved the product file as jena_years.txt and read it with nothing but plain Python.',
            'It has gaps of two kinds. Two years, 1823 and 1845, are present but marked -999. Eight years, 1843, 1870, 1875 to 1878, 1922 and 1945, are simply absent. A program that does not look for both kinds will quietly get wrong answers.'
          ],
          rightH3: 'Measured the same way?',
          right: [
            'The station\'s metadata says the early values come from three readings a day, at 08, 14 and 20 local time in 1821 and 1822 and at 07, 14 and 21 from 1824. Instruments and routines changed later too, and the station moved slightly over the years; it has stood at 154.5 metres since August 2004.',
            'So we treat the very early decades with care, and we say so. Part of working with real data is writing down what you do not know.'
          ] },
        { kind: 'code', label: 'Version 1: read the years, skip the missing marks', lang: 'Python', code: V1, note: 'It prints <code>Years with a mean temperature: 195</code>, <code>First: 1821  last: 2025</code>, then <code>1864 6.19 C</code>, <code>1990 10.7 C</code> and <code>2024 12.01 C</code>.' },
        { kind: 'p', mt: true, html: 'Single years jump around. 1864 is the coldest year in the file at 6.19 degrees, 2024 the warmest at 12.01, and the years in between swing by a degree or more from one to the next. Comparing two chosen years can tell almost any story. A moving average does something fairer: for every end year it averages the thirty years up to and including it, so each value rests on three decades of weather rather than one.' },
        { kind: 'code', label: 'Version 2: a thirty-year window that refuses to guess', lang: 'Python', code: V2, note: 'It prints <code>30 years to 1908 : 8.11</code>, <code>30 years to 1921 : 8.61</code>, <code>30 years to 1950 : None</code>, <code>30 years to 1990 : 9.28</code>, <code>30 years to 2020 : 10.3</code> and <code>30 years to 2025 : 10.51</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Thirty-year mean temperature at the Jena Sternwarte, by last year of the window (our calculation)', head: ['Thirty years ending', 'Mean temperature'], rows: [
          ['1908 (1879 to 1908)', '8.11 C'],
          ['1921 (1892 to 1921)', '8.61 C'],
          ['1950', 'No answer: 1922 and 1945 missing'],
          ['1990 (1961 to 1990)', '9.28 C'],
          ['2020 (1991 to 2020)', '10.3 C'],
          ['2025 (1996 to 2025)', '10.51 C']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, annual values for station 02444 Jena (Sternwarte), column JA_TT, CC BY 4.0, downloaded 3 November 2026. The windows, the None results and the table are our own work.' },
        { kind: 'p', mt: true, html: 'Look at the None. Any window that contains 1922 or 1945 has a hole, and the function returns nothing rather than averaging 29 years and calling it 30. That rule costs a lot: complete windows exist only for end years 1908 to 1921 and 1975 to 2025, 65 windows in all. But the ones it does give are honest, and they climb: from 8.11 degrees for the thirty years to 1908, to 9.28 for 1961 to 1990, to 10.51 for 1996 to 2025. Over the two complete stretches the Jena record has warmed by more than two degrees on a thirty-year average. That is our reading of this one station\'s data, not a forecast and not a statement about anywhere else.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12.</strong> Write down the temperature at noon every day for a week. Average each three days in a row. Is the line of averages smoother than the daily one?',
          '<strong>Teenagers.</strong> Run both versions, then change the window to ten years. How many more answers do you get, and how much jumpier are they?',
          '<strong>Adults.</strong> Change the refusal rule to allow at most one missing year per window. Which numbers change, and would you trust them?',
          '<strong>Going further.</strong> Print the five warmest and five coldest single years. How many of the warmest fall after 2000?'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are online Python classes in Jena time?',
      lede: 'A Jena afternoon is an Indian evening, and a Jena weekend morning is an Indian afternoon, which leaves plenty of room for both sides.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example slots in Jena and on the mentor\'s clock', head: ['Jena', 'India in winter', 'India from 28 March 2027'], rows: [
          ['16:40', '21:10', '20:10'],
          ['17:20', '21:50', '20:50'],
          ['Saturday 14:00', '18:30', '17:30'],
          ['Sunday 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'Jena keeps German legal time under the Einheitenzeitgesetz: UTC+1 from 25 October 2026 and UTC+2 from 28 March 2027. India stays at UTC+5:30. The rows are illustrations, not fixed batch times.' },
        { kind: 'p', mt: true, html: 'Thuringian school holidays in 2026/27, per the Kultusministerkonferenz table: autumn 12 to 24 October 2026, Christmas 23 December 2026 to 2 January 2027, winter 1 to 6 February 2027, Easter 22 March to 3 April 2027, a free day on 7 May 2027, and summer from 10 July to 20 August 2027. Classes continue through them unless a family pauses. Learners join from across Jena and from nearby Weimar, Apolda, Stadtroda, Kahla and Erfurt.' },
        { kind: 'p', html: 'For pupils who want a contest alongside the course: the Informatik-Biber runs from 9 to 20 November 2026 through schools, and pupils from grade 3 can also try the Jugendwettbewerb Informatik. Our <a class="ag-inline-link" href="/math-and-coding-competitions-germany">competitions calendar</a> lists the dates. We are not connected with any organiser.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Skills ladder',
    h2: 'The Python skills a Jena learner builds',
    lede: 'Our own ladder. Each rung is a thing the learner can do without help.',
    table: { caption: 'Python skills ladder (ours)', head: ['Rung', 'Skill', 'Shown by'], rows: [
      ['1', 'Variables, input and output', 'A program that asks a question and answers it'],
      ['2', 'Loops and decisions', 'Tracing a loop on paper before running it'],
      ['3', 'Lists and dictionaries', 'Storing a year and its value, like the Jena file'],
      ['4', 'Functions with clear rules', 'A function that returns None when it cannot answer'],
      ['5', 'Files and real data', 'Reading a published file and naming its gaps']
    ] },
    left: { h3: 'For parents', ps: [
      'Rung 4 is the heart of the Jena project: a function that knows when to refuse.',
      'Progress is reported as things your child can do, not hours spent.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you average anything, count how many values you actually have.',
      'A program that says "I cannot tell" is more useful than one that guesses quietly.'
    ] }
  },

  catalogue: {
    eyebrow: 'Beyond the first course',
    h2: 'Nine more courses for Jena learners',
    lede: 'Each one live and in English, with a mentor who stays with the learner, in a class or on its own.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 8 to 12', courses: [
        { code: 'PJE / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Scratch first for children not yet ready to type.' },
        { code: 'PJE / KIDS / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Averages and patterns explored in Python.' },
        { code: 'PJE / KIDS / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How machines learn, with no adult accounts.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'PJE / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Long datasets, charts and first models.' },
        { code: 'PJE / TEEN / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest problems and fast solutions.' },
        { code: 'PJE / TEEN / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Saving and sharing code properly.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'PJE / ADULT / 01', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Python, SQL and spreadsheets for real work.' },
        { code: 'PJE / ADULT / 02', slug: 'ai-ml-masterclass-complete-college', title: 'AI and machine learning', blurb: 'From Python to deep learning.' },
        { code: 'PJE / ADULT / 03', slug: 'pcep-pcap-python-certification-course', title: 'Python certification prep', blurb: 'PCEP and PCAP, for a recognised milestone.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Practicalities',
    h2: 'How live Python classes are arranged for Jena',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'School afternoons', l: 'For pupils after lessons and homework.' },
      { time: 'Early evenings', l: 'For adults on working days.' },
      { time: 'Private slots', l: 'Agreed with the mentor, weekends included.' }
    ],
    cells: [
      { h3: 'Live every time', p: 'A person teaches, nothing is replayed.' },
      { h3: 'Learner at the keys', p: 'The mentor asks; the learner types.' },
      { h3: 'One mentor', p: 'Continuity from first loop to project.' },
      { h3: 'Plain English', p: 'Slowed down and repeated when needed.' },
      { h3: 'Age-correct tools', p: 'No adult accounts in children\'s classes.' },
      { h3: 'Your choice of size', p: 'A class of fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'Work by our students',
  projectsLede: 'Projects from Python learners in many countries; see the <a class="ag-inline-link" href="/student-labs">student labs</a> page for more.',
  reviewsLede: 'Google reviews from students and parents, quoted word for word.',

  fees: {
    h2: 'Fees for online Python in Jena',
    lede: 'Eight live classes are included in each monthly fee. For Jena we print the price in euro, using the ECB reference rate of the day, but you are charged in US dollars; the bank exchanges it on your side, so cents may differ.',
    free: ['A free first class', 'A first Python task at the right level', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar level', 'One mentor throughout', 'Two classes a week', 'Pay monthly, stop any time'],
    one: ['Private lessons with one mentor', 'Your own projects', 'Times you agree']
  },

  faq: {
    eyebrow: 'Jena learners ask',
    h2: 'Online Python classes in Jena: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons are only in English, and always live. Mentors adapt their speed and accent to the learner and explain again in simpler words when needed, so pupils who learn English at school can follow comfortably.' },
      { q: 'How do I know an online class is any good?', a: 'Ask whether it is live, who types the code, whether the teacher stays the same and what the learner will have built at the end. A free first class lets you see all four for yourself.' },
      { q: 'What does my child learn in MBI at school?', a: 'Medienbildung und Informatik is a new compulsory subject in Thuringia, taught in grades 5 to 7 in 2026/27 and growing by one grade a year to grade 10 in 2029/30, according to the Gesellschaft für Informatik.' },
      { q: 'At what age can my child start Python?', a: 'Nine is a good age, when a child reads fluently and can find letters on a keyboard. Six to eight year olds begin in Scratch and switch later.' },
      { q: 'Is the Jena temperature project too hard for a child?', a: 'The full version suits teenagers and adults. Children of 9 to 12 do a shorter version with a week of their own noon temperatures, then a short list of Jena years.' },
      { q: 'When are classes in Jena time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils usually come after school and adults in the evening.' },
      { q: 'Who teaches?', a: 'Mentors based in India who teach live online in English. A learner keeps the same mentor for the whole course.' },
      { q: 'How is payment handled?', a: 'By the month. We quote euro using the ECB reference rate, collect the payment in US dollars, and leave the exchange to your bank, which is why the amount you see on the statement can be marginally different. You pay nothing for the first class.' },
      { q: 'Do you use AI tools in class?', a: 'Only where the provider\'s age limit allows. Children\'s courses use none. Teenagers may use ChatGPT from 13 with a parent\'s permission; Claude is kept to adult courses because Anthropic sets 18.' },
      { q: 'Can adults join?', a: 'Yes, in their own classes, starting from the very first line of Python.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Jena learners.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our pages for every part of Germany.' },
      { href: '/coding-classes-in-thuringia', label: 'Coding classes in Thuringia', p: 'MBI, holidays and the Land in detail.' },
      { href: '/python-course-germany', label: 'Python course in Germany', p: 'Python for learners anywhere in Germany.' },
      { href: '/coding-classes-for-teens-germany', label: 'Coding for teens in Germany', p: 'Courses for 13 to 18.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'How all sixteen Länder compare.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method, class by class.' }
    ]
  },

  start: {
    h2: 'Book a free first Python class',
    lede: 'Treat the free class as a taster lesson. A few lines of Python get written and run, the mentor sees how the learner reasons and how easy English feels, and you get a clear suggestion for a course and group.',
    readFirst: 'Want to read first? Try <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Live online lessons, in English only, with mentors in India. WhatsApp, in English, is the quickest way to reach us.',
    formNote: 'Free, no card, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-course-germany', label: 'Python course in Germany' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/coding-classes-for-teens-germany', label: 'Coding for teens' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-thuringia', label: 'Thuringia' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'A window with a hole stays silent'
  },

  personalityCss: `
.ag-root.ag-pje .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-pje .ag-capsule { border-left-width: 5px; }
.ag-root.ag-pje .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-pje .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-pje .ag-code-head b { letter-spacing: 0.012em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Thuringia page, national summary); KMK school-type overview; KMK Ferienregelung 2026/27; Bundesweite Informatikwettbewerbe; providers\' terms via our AI tools age guide; Einheitenzeitgesetz; Destatis GV-ISys. Deutscher Wetterdienst, annual climate values, station 02444 Jena (Sternwarte), CC BY 4.0.',
    localProject: 'Two centuries at the Jena Sternwarte: an original Python project on the DWD annual mean temperatures from 1821 to 2025 (195 values, two -999 marks, eight absent years), with a 30-year moving window that returns None when a year is missing; complete windows give 8.11 C to 1908, 9.28 C for 1961 to 1990 and 10.51 C for 1996 to 2025. Lesson family: smooth with a moving window, and let a window with a hole refuse to answer.',
    requiredMentions: ['jena_years.txt', 'Years with a mean temperature: 195', '30 years to 1950 : None', '30 years to 1990 : 9.28', '30 years to 2025 : 10.51', 'three readings a day', 'Weimar, Apolda, Stadtroda, Kahla and Erfurt', 'A window with a hole stays silent'],
    sources: [
      { claim: 'Thuringia MBI from 2024/25, grades 5 to 7 now, grade 10 by 2029/30; Thuringia meets the six-hour recommendation.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/thueringen' },
      { claim: 'Thuringia school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'DWD annual climate values for station 02444 Jena (Sternwarte).', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/annual/kl/historical/' },
      { claim: 'DWD reuse under CC BY 4.0.', url: 'https://www.dwd.de/DE/service/rechtliche_hinweise/rechtliche_hinweise_node.html' },
      { claim: 'Informatik-Biber 2026 dates.', url: 'https://bwinf.de/biber/2026/' }
    ],
    rejectedClaims: [
      'Stadt Jena open data: opendata.jena.de and www.jena.de timed out on 3 November 2026, so the DWD station inside the city was used.',
      'Any forecast or statement beyond this one station\'s record: none made.',
      'Treating the 1820s readings as directly comparable with modern ones without comment: refused; the measurement routine is described.',
      'Any affiliation with the DWD, the Gesellschaft für Informatik or BWINF: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
