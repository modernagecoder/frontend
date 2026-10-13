'use strict';
// Pakenham, Melbourne (cg- district page, Australia cluster Phase 8, row 275). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), suburb page (ABS SAL22027, Pakenham, Cardinia Shire) under Melbourne and Victoria.
// Spine: adjacency matrix powers counting multi-leg bus journeys. Metro bus GTFS (downloaded 10 Oct 2026), Wednesday
// 28 Oct 2026: 148 bus stops inside the suburb boundary, 144 nodes after the five Pakenham Station bays are merged into
// one interchange; routes 925, 926, 927, 928, 929 and 840; 1,425 one-bus links. Ordered pairs reachable within 1, 2, 3,
// 4 and 5 buses: 1,425 / 8,541 / 16,682 / 19,468 / 19,468 of 20,592; 1,124 never. From the station: 72 stops by one
// bus, 139 of 143 within two. Largest entry of A squared: 21 (Army Road stop by Pakenham Hills Primary School to the
// station). Script: scratchpad au/b10/pakm.py and pakm2.py.
// Lesson family: adjacency matrix powers; 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'PAKENHAM',
    label: 'Pakenham, Melbourne',
    blurb: 'Coding and AI classes for Pakenham, with a matrix project that counts how many buses it takes to cross the suburb.'
  },
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  slug: 'best-coding-and-ai-classes-in-pakenham-melbourne',
  code: 'pakm',
  accent: '#9E4118',
  accentRationale: 'Pakenham: a fired-brick rust (hue 18), picked by a full search of the muted range: 48.5 RGB units from every Victorian page accent, 19.8 from every other Australian accent and 6.3 from every other colour in content, the stylesheets and the claims logs; 5.29:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Pakenham',
    eyebrow: 'Pakenham, Cardinia Shire, Melbourne, Victoria',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Melbourne' },
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-melbourne', name: 'Melbourne' }
  ],
  nav: [
    { label: 'Melbourne', href: '/vibe-coding-and-ai-agents-classes-in-melbourne' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Pakenham, Melbourne',
  title: 'Best Coding and AI Classes in Pakenham, Melbourne',
  description: 'Live online coding and AI classes for Pakenham children, teenagers and adults: Scratch, Python, matrices, graphs and AI, in small groups or one to one.',
  ogDescription: 'Pakenham coding classes with a bus network project: one bus links 1,425 pairs of stops, two buses 8,541 and four buses 19,468, counted with matrix powers.',
  twitterDescription: 'Pakenham coding and AI classes, live online, first class free.',
  ogImageCourse: 'data-structures-algorithms-masterclass-college',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Pakenham',
    description: 'Level-matched online lessons in Scratch, Python, graph algorithms, matrices and AI for learners in Pakenham, taught live in English.'
  },
  h1: 'Coding and AI classes in Pakenham',
  capsuleQ: 'Where do Pakenham learners find the best coding and AI classes?',
  capsule: 'In small live online groups, matched by level, where code is written on screen and explained aloud. Pakenham is a young, fast-built suburb: the 2021 Census counted 54,118 residents with a median age of 33, and 86.4% of homes are separate houses.',
  lead: 'Pakenham is big enough that crossing it by bus can mean changing at the station. Which corners can you reach on one bus, which need two, and which need three? A spreadsheet of stops can answer that, and so can a single idea from school maths: multiply a table of connections by itself and it tells you every two-leg trip at once.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Pakenham.',
  picks: {
    eyebrow: 'Course picks for Pakenham',
    h2: 'Courses that join maths and code',
    intro: 'Each course here works with tables, grids or graphs, the raw material of the bus matrix project. The free first class decides the right level.',
    items: [
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Python used to explore number patterns, grids and early matrix ideas.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 17', note: 'Graphs, adjacency lists and the searches that walk them.' },
      { course: 'data-analytics-mathematics-masterclass', band: 'Ages 16 and up', note: 'Linear algebra with a reason: matrices that describe real data.' },
      {
        course: 'data-structures-algorithms-masterclass-college',
        band: 'University and adult',
        note: 'Graph representations compared, with costs worked out properly.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Pakenham in the Census',
      h2: 'A young suburb of family houses',
      intro: 'Figures for the Pakenham suburb (ABS code SAL22027) from the 2021 Census QuickStats, with the Victorian figure alongside where one is published.',
      body: [
        {
          kind: 'table',
          caption: 'Pakenham suburb, 2021 Census headline counts',
          head: ['Headline', 'Pakenham'],
          rows: [
            ['Residents', '54,118'],
            ['Median age', '33'],
            ['Families', '14,433'],
            ['Private dwellings', '20,160'],
            ['Average people per household', '2.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Pakenham against the state',
          head: ['Measure', 'Pakenham', 'Victoria'],
          rows: [
            ['Separate houses', '86.4% (15,936)', '73.4%'],
            ['Flats or apartments', '0.6% (105)', '12.1%'],
            ['Workers who drove to work', '61.7% (15,654)', '49.9%'],
            ['Workers who took the train', '1.9% (479)', '1.6%'],
            ['Employed residents who worked at home', '15.9% (4,034)', '25.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Room to spread', p: 'At 85.85 square kilometres the suburb is large for Melbourne, and only 105 of its homes were counted as flats.' },
            { h3: 'Behind the wheel', p: 'Close to two in three workers drove themselves to work, almost twelve points above the Victorian share.' },
            {
              h3: 'A lockdown snapshot',
              p: 'The Census night of August 2021 fell in a Victorian lockdown, so the home-working share is a picture of that week, not a usual one.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau nudges small cells at random to protect privacy, which is why rows in its tables do not always meet the total. Every figure here is copied as published; none is a sum of others.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Counting bus journeys with a matrix',
      intro: 'From the state bus timetable feed we took every trip running on Wednesday 28 October 2026 and kept the 148 stops inside the Pakenham boundary. The five bays at Pakenham Station became one interchange, leaving 144 stops. A 1 in row i, column j of the matrix A means some bus that day runs from stop i to stop j without a change.',
      body: [
        {
          kind: 'table',
          caption: 'Ordered pairs of Pakenham stops linked within k buses, out of 20,592 (our calculation)',
          head: ['Buses allowed', 'Pairs linked', 'From the station'],
          rows: [
            ['One', '1,425', '72 stops'],
            ['Up to two', '8,541', '139 stops'],
            ['Up to three', '16,682', '139 stops'],
            ['Up to four', '19,468', '139 stops'],
            ['Up to five', '19,468', '139 stops']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The routes',
              p: 'Six routes carried the links: 925, 926, 927, 928 and 929 around the suburb, and 840 on the edge. Route 928 was the most frequent, with 51 trips that day touching two or more Pakenham stops.'
            },
            {
              h3: 'A plateau at four',
              p: 'Allowing a fifth bus added nothing. 1,124 ordered pairs stay unlinked however many changes are allowed, at least among stops inside the suburb.'
            },
            {
              h3: 'The busiest corner of A squared',
              p: 'The largest entry in A squared is 21: from the Army Road stop by Pakenham Hills Primary School there are 21 different stops at which a rider could change for the station.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'What the matrix ignores',
          p: 'A one in the matrix only says a bus runs between two stops at some point in the day. It does not check that the second bus leaves after the first one arrives, or how long the wait is. For planning a real trip, a timetable search wins; the matrix answers the structural question of what the network joins at all.'
        },
        {
          kind: 'p',
          text: 'Trips come from the feed downloaded on 10 October 2026, so a later timetable may change the counts. Merging the station bays, building the matrix and every count above are our own work, from our own script.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The idea',
      h2: 'Why squaring a table counts two-leg trips',
      intro: 'Entry (i, j) of A times A adds up, over every middle stop k, the product A[i][k] times A[k][j]. That product is 1 only when one bus goes i to k and another goes k to j, so the sum counts the places to change.',
      body: [
        {
          kind: 'table',
          caption: 'Two ways to answer reachability on 144 stops',
          head: ['Approach', 'Work', 'What it gives'],
          rows: [
            [
              'Matrix powers, A, A squared, A cubed',
              '144 cubed, 2,985,984 multiplications per product',
              'How many routes of each length, for every pair at once'
            ],
            [
              'Breadth-first search from each stop',
              'A few thousand steps per stop',
              'The fewest buses for every pair, and nothing about counts'
            ]
          ]
        },
        {
          kind: 'p',
          text: 'For the yes-or-no question, breadth-first search is the cheaper tool here, and it is the one we would use in production. The matrix earns its place when you want to know how many alternatives exist, because a pair with 21 change points is far more robust to a cancelled bus than a pair with one. The same arithmetic runs in network science, page ranking and the attention layers inside language models.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Draw five stops, mark arrows, and count two-arrow paths by hand before any code.' },
            { h3: 'Secondary students', p: 'Build the matrix in Python lists, multiply it with three loops, then check against NumPy.' },
            { h3: 'Adults', p: 'Read a route table from a real feed and decide when a matrix beats a graph search.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Pakenham',
      h2: 'Three stations and a dozen schools',
      intro: 'Station entries come from the state patronage file, school counts from the 2025 school locations file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Pakenham station',
              p: 'The terminus counted 495,750 entries in FY24-25, 93rd of 222 metropolitan stations, slightly above the 489,250 of FY18-19.'
            },
            {
              h3: 'Cardinia Road and East Pakenham',
              p: 'Cardinia Road logged 405,950 entries, up from 381,850. East Pakenham logged 54,500 and has no row in the FY18-19 file.'
            },
            {
              h3: 'Schools',
              p: 'Twelve open schools sit inside the boundary, nine of them government, among them Kuyim Primary School, Pakenham Secondary College and Edenbrook Secondary College.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Term 3, 2027',
          p: 'Victorian government schools run Term 3 from Monday 12 July to Friday 17 September 2027, a natural point to start or change a course.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From arrows on paper to matrix code',
    intro: 'Ages are only a guide; the free first class places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and puzzles',
        p: 'Maze games and route puzzles that build the habit of tracing paths.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and grids',
        p: 'Lists of lists, loops inside loops and the first tables of connections.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Graphs and matrices',
        p: 'Adjacency matrices, breadth-first search and timing one against the other.',
        courses: ['problem-solving-dsa-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied linear algebra',
        p: 'Matrix methods for networks, data and machine learning.',
        courses: ['data-analytics-mathematics-masterclass', 'data-structures-algorithms-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Does a Pakenham teenager need matrices if an AI can write the code?',
    intro: 'Yes, because the AI needs to be told which question to answer, and the two questions here look alike.',
    p1: 'Ask an assistant whether two Pakenham stops are linked within three buses and it may return a graph search, a matrix power or a mix. Each is correct for something, but only one counts the alternatives, and only someone who understands both will notice which one arrived.',
    p2: 'A learner who has seen 1,425 one-bus pairs grow to 19,468 and then stop growing knows what the output should look like before running it. That instinct, more than typing speed, is what makes AI-written code safe to use.',
    closer: 'Matrices are also how modern AI models do their arithmetic, so the Pakenham bus table is a first step into how those models work inside.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lessons online, wherever you are in Pakenham',
    intro: 'Every class runs live on a video call, so the size of the suburb makes no difference.',
    cells: [
      { h3: 'Screen shared', p: 'The learner writes code on their own computer while the teacher watches the screen and talks it through.' },
      { h3: 'Victorian terms', p: 'Courses follow the state school calendar, with breaks in the holidays.' },
      { h3: 'A first lesson to judge by', p: 'The free class is a full lesson. Afterwards the teacher suggests a course and a regular time.' },
      { h3: 'Groups by level', p: 'Fifteen to twenty learners at a similar stage share each group.' },
      { h3: 'Twice a week', p: 'Two fixed lessons each week, about eight in a month, with any breaks agreed in advance.' },
      {
        h3: 'Teachers in India',
        p: 'Our teachers are in India. A 4:30pm Pakenham class in daylight saving is 11am India time; in Melbourne winter it is noon.'
      }
    ],
    spec: {
      title: 'Melbourne clocks',
      p: 'Daylight saving in Melbourne began on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India keeps one time all year, so lesson times are always confirmed in Melbourne time.'
    }
  },
  fees: {
    h2: 'Pakenham class fees',
    intro: 'The whole price list fits in three lines.',
    first: 'A free first lesson, followed by an honest course suggestion.',
    group: 'One month of group classes, normally eight, in a level-matched group of fifteen to twenty.',
    private: 'About eight one-to-one classes a month with a single teacher.',
    closer: 'Families outside India are billed in US dollars, so Pakenham pays the same as any other family abroad. Nothing is due until the trial has settled the course and the time; the pricing page covers holidays, missed classes and switching format.'
  },
  reviewsH2: 'What Google reviewers write about our classes',
  book: {
    h2: 'Book a free Pakenham class',
    intro: 'Tell us the learner\'s age and what they enjoy. A seven-year-old might begin with a maze game in Scratch; a Year 11 student might begin by building the Pakenham bus matrix in Python.',
    success: 'Thank you. Our team will contact you soon about a Pakenham class.'
  },
  faq: {
    h2: 'Pakenham coding class questions',
    intro: 'What Pakenham families and adult learners ask us most.',
    items: [
      {
        q: 'How many people live in Pakenham?',
        a: 'The 2021 Census QuickStats for the Pakenham suburb count 54,118 residents, 14,433 families and 20,160 private dwellings, with a median age of 33.'
      },
      {
        q: 'What is an adjacency matrix?',
        a: 'A square table with one row and one column for each place in a network. A 1 in a cell means there is a direct link from the row\'s place to the column\'s place; a 0 means there is not.'
      },
      {
        q: 'Why does multiplying the matrix by itself count two-step trips?',
        a: 'Each cell of the product adds up one term for every possible middle stop, and a term is 1 only when both legs exist. So the cell equals the number of two-leg routes between the pair.'
      },
      {
        q: 'What did the Pakenham bus project find?',
        a: 'On Wednesday 28 October 2026, one bus linked 1,425 ordered pairs of Pakenham stops, two buses 8,541 and four buses 19,468, after which extra changes added nothing.'
      },
      {
        q: 'Are matrices too advanced for school students?',
        a: 'Not when they start as tables of arrows. Upper primary children can count two-arrow paths by hand, and secondary students can code the multiplication after a term of Python.'
      },
      { q: 'What do younger Pakenham children start with?', a: 'Children from six start in Scratch, making games with mazes, counting and simple logic.' },
      {
        q: 'Is there a Pakenham classroom?',
        a: 'No. Every class is live online. We have no premises in Australia, and the phone number we list is in India.',
        boiler: true
      },
      {
        q: 'How much are coding classes for Pakenham learners?',
        a: 'The first lesson is free. Group classes are then USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, and one-to-one classes are USD 150 a month. You agree the course, format and time before paying.',
        boiler: true
      },
      {
        q: 'How many learners share a group?',
        a: 'Five to ten, matched on level, pace and goals, with one-to-one lessons when no group time works.',
        boiler: true
      },
      {
        q: 'Can adults join?',
        a: 'Yes. Adults learn in their own groups or one to one, often to move into data work or to understand the maths behind AI tools.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Pakenham learners',
    html: 'Families with primary-age children can start from our guide to <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">kids coding classes in Melbourne</a>. Closer to home, the <a class="cg-inline-link" href="/ai-and-programming-classes-in-berwick-melbourne">Berwick page</a> covers Berwick, further west along the line, and the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria</a> guides give the wider view.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Pakenham and Melbourne',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-berwick-melbourne', label: 'Berwick' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-pakm .cg-hero-grid { align-items: end; gap: clamp(1.05rem, 3.1vw, 2.45rem); }
.cg-root.cg-pakm .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.03; }
.cg-root.cg-pakm .cg-capsule { border-top: 3px solid var(--cg-accent); padding: 0.85rem 0 0.2rem; }
.cg-root.cg-pakm .cg-eyebrow { letter-spacing: 0.13em; font-weight: 660; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-pakm .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.012em; }
.cg-root.cg-pakm .cg-grid-3 { gap: clamp(0.8rem, 2.4vw, 1.9rem); }
.cg-root.cg-pakm .cg-table caption { font-weight: 640; text-align: left; text-transform: none; }
.cg-root.cg-pakm .cg-table td:nth-child(n+2) { font-variant-numeric: tabular-nums; }
.cg-root.cg-pakm .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-pakm .cg-callout { border-left-width: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Pakenham, ABS Census 2021 QuickStats, Pakenham suburb SAL22027 (read 11 October 2026): 54,118 people; median age 33; 14,433 families; 20,160 private dwellings; 2.8 people per household; separate house 86.4% (15,936; Victoria 73.4%); flat or apartment 0.6% (105; Victoria 12.1%); car as driver 61.7% (15,654; Victoria 49.9%); train 1.9% (479; Victoria 1.6%); worked at home 15.9% (4,034; Victoria 25.7%; lockdown Census). ABS SAL area 85.85 square kilometres, Cardinia Shire. Metropolitan stations inside the boundary (FY24-25 entries): Pakenham 495,750 (rank 93 of 222; FY18-19 489,250), Cardinia Road 405,950 (FY18-19 381,850), East Pakenham 54,500 (no FY18-19 row). Victorian School Locations 2025: 12 open schools inside the boundary (Government 9, Independent 2, Catholic 1), including Kuyim Primary School, Pakenham Secondary College and Edenbrook Secondary College. Victorian 2027 Term 3: Monday 12 July to Friday 17 September. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Adjacency matrix powers. Metro bus GTFS Schedule (downloaded 10 October 2026), Wednesday 28 October 2026: 148 stops inside the Pakenham SAL polygon, 144 nodes after merging the five Pakenham Station bays; routes 925, 926, 927, 928, 929, 840 (trips touching 2+ Pakenham stops: 928 51, 926 37, 925 35, 929 34, 927 33, 840 9). One-bus links (A) 1,425. Ordered pairs linked within 1/2/3/4/5 buses: 1,425 / 8,541 / 16,682 / 19,468 / 19,468 of 20,592; 1,124 never. From the station: 72 stops by one bus, 139 of 143 within two; into the station: 75 by one bus. Largest A squared entry 21 (Pakenham Hills PS/Army Rd to Pakenham Station). Timing of connections not modelled. Script: scratchpad au/b10/pakm.py, pakm2.py.',
    requiredMentions: ['54,118', '14,433', '20,160', '85.85 square kilometres', '495,750', 'Cardinia Road', '1,425', '8,541', '19,468', 'Edenbrook Secondary College'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Pakenham suburb (SAL22027).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL22027' },
      {
        claim: 'Department of Transport and Planning, GTFS Schedule (Creative Commons Attribution 4.0), metropolitan bus feed downloaded 10 October 2026, calendar 8 October to 31 December 2026.',
        url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule'
      },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL22027 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      { claim: 'NumPy documentation, numpy.linalg.matrix_power.', url: 'https://numpy.org/doc/stable/reference/generated/numpy.linalg.matrix_power.html' },
      {
        claim: 'Victorian Government, school term dates and holidays, 2027 Victorian school term dates.',
        url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria'
      },
      {
        claim: 'IANA time zone database, australasia file: Australia/Melbourne daylight saving rules.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Journey times or waiting times between buses: not modelled; the matrix only records that a bus runs between two stops that day.',
      'Reasons why 1,124 pairs stay unlinked beyond one-direction service: not investigated stop by stop.',
      'Reasons for changes in station entries since FY18-19: not claimed.',
      'Names of Catholic or independent schools: not used; counted only.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Cardinia Shire Council, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
