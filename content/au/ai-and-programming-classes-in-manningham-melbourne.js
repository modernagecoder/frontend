'use strict';
// City of Manningham, Melbourne (cg- district page, Australia cluster Phase 8, row 258). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), council-area page (ABS LGA24210, Manningham) under Melbourne and Victoria.
// Doncaster has a suburb page; this page uses council-wide figures and does not repeat Doncaster's.
// Spine: Local Outlier Factor vs a fixed nearest-neighbour distance rule on the 30 open schools inside the council
// boundary (Victorian School Locations 2025). Straight-line nearest-school distance: median 0.837 km, max 5.45 km
// (Wonga Park Primary School). Rule nn > 1.5 km flags 5. LOF (scikit-learn): k=3, 5, 8 all rank Wonga Park PS first
// (2.21, 2.06, 2.10); only one school above 1.5 at any k; second place changes with k (Templestowe Park PS 1.49 at k=3,
// Warrandyte High School 1.31 at k=5, Warrandyte PS 1.39 at k=8). 0 of 222 metro stations inside. Script:
// scratchpad au/b7/mngm.py.
// Lesson family: Local Outlier Factor; 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MANNINGHAM',
    label: 'City of Manningham, Melbourne',
    blurb: 'AI and programming classes for the City of Manningham, with an outlier-detection project on how far apart its schools sit.'
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
  slug: 'ai-and-programming-classes-in-manningham-melbourne',
  code: 'mngm',
  accent: '#574A17',
  accentRationale: 'Manningham: a dark olive bark (hue 48), picked by search at least 10 RGB units from all 1,485 accent declarations in content, the shared stylesheets and the claims log; 7.11:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'City of Manningham',
    eyebrow: 'City of Manningham, Melbourne, Victoria',
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
  routeLabel: 'City of Manningham, Melbourne',
  title: 'AI and Programming Classes in Manningham, Melbourne',
  description: 'Live online AI and programming classes for City of Manningham children, teenagers and adults: Scratch, Python and machine learning, in groups or one to one.',
  ogDescription: 'AI classes for the City of Manningham: an outlier model and a plain distance rule both picked the same isolated school, 5.45 km from its nearest neighbour.',
  twitterDescription: 'City of Manningham AI and programming classes, live online, first class free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for the City of Manningham',
    description: 'Level-matched online lessons in Scratch, Python and machine learning for learners in the City of Manningham, taught live in English.'
  },
  h1: 'AI and programming classes in the City of Manningham',
  capsuleQ: 'What do AI and programming classes offer City of Manningham learners?',
  capsule: 'Live online lessons that take learners from first programs to machine learning models they can question and test. The City of Manningham is spread out and car-reliant: the 2021 Census counted 124,700 residents, an average of 2.0 vehicles per home and no metropolitan train station inside its boundary.',
  lead: 'Plot the City of Manningham\'s 30 open schools on a map and half of them have another school within 0.837 km. A few are much further from their neighbours. Which ones count as outliers depends on how you define unusual, and machine learning offers a definition that takes the neighbourhood into account.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in the City of Manningham.',
  picks: {
    eyebrow: 'Course picks for the City of Manningham',
    h2: 'Courses that teach models and their limits',
    intro: 'These courses all compare a clever model with a plain rule, the comparison at the heart of the outlier project. The free first class decides where to start.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including unsupervised models like outlier detection.' },
      {
        course: 'orange-data-mining-visual-machine-learning-course-for-teens',
        band: 'Ages 13 to 17',
        note: 'Visual machine learning with no code, a gentle start to clustering and outliers.'
      },
      {
        course: 'ai-ml-masterclass-complete-college',
        band: 'University and adult',
        note: 'Models, evaluation and the judgement to pick a simple rule when it is enough.'
      },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Data preparation, maps and statistics behind any model.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The City of Manningham in the Census',
      h2: 'Cars, buses and no railway',
      intro: 'Figures for the City of Manningham local government area (ABS code LGA24210) from the 2021 Census QuickStats, beside the Victorian share. Doncaster, inside the council area, has its own page.',
      body: [
        {
          kind: 'table',
          caption: 'City of Manningham, 2021 Census headline counts',
          head: ['Headline', 'City of Manningham'],
          rows: [
            ['Residents', '124,700'],
            ['Median age', '43'],
            ['Families', '35,767'],
            ['Private dwellings', '49,886'],
            ['Average people per household', '2.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'City of Manningham set against Victoria',
          head: ['Measure', 'City of Manningham', 'Victoria'],
          rows: [
            ['Workers who took the bus', '2.3% (1,345)', '0.6%'],
            ['Workers who walked only', '1.0% (593)', '2.3%'],
            ['Adults with a bachelor degree or higher', '38.2% (39,909)', '29.2%'],
            ['Workers employed as managers', '17.1% (10,003)', '14.0%'],
            ['Semi-detached, row or terrace houses and townhouses', '16.7% (7,437)', '13.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Area', p: 'At 113.35 square kilometres, the council area is large by Melbourne standards, stretching east to Wonga Park and Warrandyte.' },
            { h3: 'No stations', p: 'We placed all 222 metropolitan stations from the FY24-25 file on the council boundary map; none fell inside.' },
            { h3: 'Lockdown note', p: 'The Census was taken in the August 2021 lockdown, when 18,957 employed residents, 32.4%, worked from home.' }
          ]
        },
        {
          kind: 'p',
          text: 'QuickStats applies small random adjustments for privacy, so parts may not sum to totals. Each figure is given as published, and no total is built from parts.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Which schools are outliers, and by whose rule?',
      intro: 'We took the 30 open schools inside the council boundary from the 2025 school locations file and worked out each one\'s straight-line distance to its nearest neighbouring school. Then we compared a plain rule, "more than 1.5 km from the nearest school", with a machine learning model called Local Outlier Factor.',
      body: [
        {
          kind: 'table',
          caption: 'Two ways to find outliers among 30 schools (our calculation)',
          head: ['Method', 'Schools flagged', 'Top of the list'],
          rows: [
            ['Nearest school more than 1.5 km away', '5', 'Wonga Park Primary School, 5.45 km'],
            ['Local Outlier Factor, 3 neighbours, score above 1.5', '1', 'Wonga Park Primary School, 2.21'],
            ['Local Outlier Factor, 5 neighbours, score above 1.5', '1', 'Wonga Park Primary School, 2.06'],
            ['Local Outlier Factor, 8 neighbours, score above 1.5', '1', 'Wonga Park Primary School, 2.10']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Typical spacing', p: 'Half the schools have another school within 0.837 km. Wonga Park Primary School\'s nearest neighbour is 5.45 km away.' },
            {
              h3: 'Unstable second place',
              p: 'The runner-up moved with the setting: Templestowe Park Primary School at 3 neighbours, Warrandyte High School at 5, Warrandyte Primary School at 8.'
            },
            {
              h3: 'Why they differ',
              p: 'Local Outlier Factor compares a school\'s spacing with its neighbours\' spacing, so a school 2 km out among other spread-out schools scores as normal.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The plain rule was enough here',
          p: 'Both methods agree on the one school that is clearly unusual. Beyond that, the model\'s answers shift every time the number of neighbours changes, while the distance rule gives one list anyone can check with a ruler. With 30 points, we would choose the rule. Local Outlier Factor earns its place on large datasets where density varies widely, which this one barely does.'
        },
        {
          kind: 'p',
          text: 'The distances, scores and flags are ours, calculated from the published school coordinates with scikit-learn. Distance between schools says nothing about school quality, and we draw no conclusion from it beyond the geometry.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The model behind it',
      h2: 'Outliers measured against the neighbourhood',
      intro: 'Local Outlier Factor asks whether a point is much lonelier than the points around it, rather than lonely in absolute terms.',
      body: [
        {
          kind: 'table',
          caption: 'Fixed distance rule against Local Outlier Factor',
          head: ['Question', 'Distance rule', 'Local Outlier Factor'],
          rows: [
            ['What counts as unusual', 'Further than a set distance', 'Much sparser than its neighbours'],
            ['Setting to choose', 'The distance, 1.5 km here', 'The number of neighbours, k'],
            ['Easy to explain', 'Yes', 'Takes a diagram'],
            ['Handles mixed density', 'No', 'Yes']
          ]
        },
        {
          kind: 'p',
          text: 'A score near 1 means a point is about as crowded as its neighbours; well above 1 means it is isolated relative to them. In scikit-learn the model is a few lines, but choosing k and a cut-off is a judgement, and our results show how much that judgement matters.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Scatter counters on a table and decide together which ones look left out, then measure.' },
            { h3: 'Secondary students', p: 'Compute nearest-neighbour distances in Python, then fit Local Outlier Factor and compare lists.' },
            { h3: 'Adults', p: 'Try both methods on unusual transactions or sensor readings at work before trusting either.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around the City of Manningham',
      h2: 'Thirty schools and the 2027 year',
      intro: 'More from the state school file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Schools', p: 'The 2025 file places 30 open schools inside the council boundary: 21 primary, 6 secondary, 1 combined and 2 specialist.' },
            { h3: 'By sector', p: 'Of the 30, 21 are government schools, 8 Catholic and 1 independent.' },
            {
              h3: 'East and west',
              p: 'Warrandyte High School sits 2.06 km from its nearest school; each of the six schools addressed in Doncaster East has a neighbour within 0.93 km.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Term 1, 2027',
          p: 'Victorian government school students start on Thursday 28 January 2027, and Term 1 finishes on Thursday 25 March.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From scattered counters to outlier models',
    intro: 'Use the ages as a rough guide; the free first class confirms the level.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and patterns',
        p: 'Games that spot the odd one out, built from blocks.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and maps',
        p: 'Coordinates, distances and first plots in Python.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Machine learning',
        p: 'Unsupervised models, compared honestly with simple rules.',
        courses: ['ai-ml-masterclass-teens', 'orange-data-mining-visual-machine-learning-course-for-teens']
      },
      {
        band: 'University and adult',
        h3: 'Applied machine learning',
        p: 'Anomaly detection and evaluation for real datasets.',
        courses: ['ai-ml-masterclass-complete-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI can run the outlier model, why should a City of Manningham learner understand it?',
    intro: 'Because the model always produces a ranked list, and only someone who understands it can say whether the list means anything.',
    p1: 'Ask an assistant to find unusual schools and it may well reach for Local Outlier Factor, pick a number of neighbours and return a confident ranking. Change that number and the second name on the list changes too. Nothing in the output says how fragile it is.',
    p2: 'A learner who has run the model at three settings and set it beside a one-line distance rule knows to ask whether the clever method adds anything. That habit protects every project from a result that looks scientific and is not.',
    closer: 'The City of Manningham learner who checks a model against a plain rule is the one who knows when to trust it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How City of Manningham lessons run',
    intro: 'Lessons are live online, which saves a long drive in a council area without a railway.',
    cells: [
      { h3: 'From home', p: 'The learner opens a link, shares a screen and builds with the teacher in real time.' },
      { h3: 'Victorian school year', p: 'Courses run in the Victorian terms and pause during state school holidays.' },
      { h3: 'Trial lesson', p: 'The free first lesson is a full class, and then we suggest a course and a weekly time.' },
      { h3: 'Small groups', p: 'Between five and ten learners share a group, matched by level.' },
      { h3: 'Regular schedule', p: 'Two lessons a week, about eight in a month, with breaks arranged in advance.' },
      {
        h3: 'Teachers in India',
        p: 'Teachers are based in India, so a 4:30pm Manningham lesson in summer is 11am India time, and noon after the clocks go back.'
      }
    ],
    spec: {
      title: 'Time zones',
      p: 'Melbourne\'s daylight saving runs from Sunday 4 October 2026 to Sunday 4 April 2027. India has no clock change, so lesson times are always confirmed in Melbourne time.'
    }
  },
  fees: {
    h2: 'City of Manningham class fees',
    intro: 'Three prices, given plainly.',
    first: 'The first lesson is free and closes with a direct recommendation.',
    group: 'A month of group lessons, normally eight, with fifteen to twenty learners at one level.',
    private: 'Close to eight private lessons each month.',
    closer: 'Families outside India are charged in US dollars, so Manningham pays the same as any other family abroad. Charges begin only after the trial has decided the course and time; holidays, absences and format changes are on the pricing page.'
  },
  reviewsH2: 'Families on Google about our lessons',
  book: {
    h2: 'Book a free City of Manningham class',
    intro: 'Give us the learner\'s age and an interest. A seven-year-old might begin with an odd-one-out game in Scratch; a Year 12 student might begin by fitting the outlier model to the school map.',
    success: 'Thank you. Our team will be in touch shortly about a City of Manningham class.'
  },
  faq: {
    h2: 'City of Manningham AI and programming questions',
    intro: 'What City of Manningham parents and adult learners usually ask.',
    items: [
      {
        q: 'How many people live in the City of Manningham?',
        a: 'The 2021 Census QuickStats for the City of Manningham record 124,700 residents, 35,767 families and 49,886 private dwellings.'
      },
      {
        q: 'What is Local Outlier Factor?',
        a: 'A machine learning method that scores how isolated each point is compared with its own neighbours. Scores near 1 are normal; scores well above 1 mark outliers.'
      },
      {
        q: 'What is an outlier?',
        a: 'A data point that sits far from the rest. Whether something counts as an outlier depends on the rule used, which is exactly what the Manningham project explores.'
      },
      {
        q: 'What did the Manningham school project find?',
        a: 'A plain distance rule flagged five schools and the outlier model flagged one, Wonga Park Primary School, at every setting tried. The model\'s second choice changed with each setting.'
      },
      {
        q: 'When should children start learning about AI?',
        a: 'From six, through Scratch and simple AI activities. Building and testing real models usually begins in the early teens.'
      },
      {
        q: 'Does machine learning need a lot of maths?',
        a: 'Less than people expect to begin with. Distances, averages and ratios are enough for this project; more maths comes in as learners go further.'
      },
      {
        q: 'Do you have a Manningham centre?',
        a: 'No. Every lesson is live online, there are no premises in Australia, and the phone number we show is Indian.',
        boiler: true
      },
      {
        q: 'How much are AI classes for City of Manningham learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one classes cost USD 150 a month. Course, format and time are agreed before any payment.',
        boiler: true
      },
      { q: 'How many learners in a group?', a: 'Fifteen to twenty, grouped by level, pace and goals, with private lessons when no group time suits.', boiler: true },
      {
        q: 'Can adults study machine learning with you?',
        a: 'Yes. Adults join adult groups or learn privately, often to apply models to data they already handle at work.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for City of Manningham learners',
    html: 'In the council area, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-doncaster-melbourne">Doncaster</a> has a page with a bus timetable project. For younger children see <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">kids coding in Melbourne</a>, and for the whole state the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'City of Manningham and Melbourne',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-doncaster-melbourne', label: 'Doncaster' },
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids coding, Melbourne' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-mngm .cg-hero-grid { align-items: center; gap: clamp(1.35rem, 3.7vw, 2.9rem); }
.cg-root.cg-mngm .cg-hero h1 { font-weight: 670; letter-spacing: -0.013em; line-height: 1.09; }
.cg-root.cg-mngm .cg-capsule { border-left: 6px solid var(--cg-accent); padding: 0.45rem 0 0.45rem 1.2rem; }
.cg-root.cg-mngm .cg-eyebrow { letter-spacing: 0.09em; font-weight: 730; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-mngm .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.005em; }
.cg-root.cg-mngm .cg-grid-3 { gap: clamp(0.8rem, 2.7vw, 2.05rem); }
.cg-root.cg-mngm .cg-table caption { font-weight: 690; text-align: left; letter-spacing: 0.005em; }
.cg-root.cg-mngm .cg-table td:nth-child(3) { font-variant-numeric: tabular-nums; }
.cg-root.cg-mngm .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-mngm .cg-callout { border-left-width: 5px; border-radius: 1px; }
`,
  dossier: {
    curriculumAuthority: 'City of Manningham, ABS Census 2021 QuickStats, Manningham (C) local government area LGA24210 (read 10 October 2026): 124,700 people; median age 43; 35,767 families; 49,886 private dwellings; 2.7 people per household; 2.0 motor vehicles per dwelling; bus to work 2.3% (1,345; Victoria 0.6%); walked only 1.0% (593; Victoria 2.3%); bachelor degree or higher 38.2% (39,909; Victoria 29.2%); managers 17.1% (10,003; Victoria 14.0%); semi-detached, row or terrace house, townhouse 16.7% (7,437; Victoria 13.9%); worked at home 32.4% (18,957, lockdown Census day). ABS LGA area 113.3479 square kilometres. 0 of 222 FY24-25 metropolitan stations inside the boundary. Victorian School Locations 2025: 30 open schools inside the boundary (Primary 21, Secondary 6, Pri/Sec 1, Special 2; Government 21, Catholic 8, Independent 1); named only government co-educational schools Wonga Park Primary School, Warrandyte High School, Templestowe Park Primary School, Warrandyte Primary School. Victorian 2027 Term 1: students start Thursday 28 January, ends Thursday 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Local Outlier Factor vs fixed distance rule. 30 open schools inside LGA24210 (Victorian School Locations 2025 coordinates, equirectangular km). Nearest-school distance median 0.837 km, max 5.446 km (Wonga Park Primary School). Rule nn > 1.5 km flags 5 (Wonga Park PS 5.45, Warrandyte High School 2.06, a Catholic secondary college 1.98, Templestowe Park PS 1.86, a fifth government primary 1.61). scikit-learn LocalOutlierFactor: k=3 top Wonga Park 2.21, Templestowe Park PS 1.49; k=5 Wonga Park 2.06, Warrandyte HS 1.31; k=8 Wonga Park 2.10, Warrandyte PS 1.39; exactly 1 school with score > 1.5 at each k. Script: scratchpad au/b7/mngm.py.',
    requiredMentions: [
      '124,700',
      '35,767',
      '49,886',
      '39,909',
      '18,957',
      '1,345',
      'Wonga Park Primary School',
      'Warrandyte High School',
      'Templestowe Park Primary School',
      '113.35 square kilometres'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Manningham (C) local government area (LGA24210).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA24210'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (LGA24210 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'scikit-learn documentation, sklearn.neighbors.LocalOutlierFactor.',
        url: 'https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.LocalOutlierFactor.html'
      },
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
      'Any judgement of school quality, access or travel time from distances: not claimed; straight-line geometry only.',
      'Names of Catholic, independent or specialist schools flagged by either method: not used; counted only.',
      'Doncaster suburb figures: not repeated; it has its own page.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Manningham City Council or the Victorian Department of Education.'
    ]
  }
};
