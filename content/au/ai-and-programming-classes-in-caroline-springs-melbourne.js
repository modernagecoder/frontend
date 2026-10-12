'use strict';
// Caroline Springs, Melbourne (cg- district page, Australia cluster Phase 8, row 278). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page (ABS SAL20500, Caroline Springs, City of Melton) under Melbourne and
// Victoria. The Melton page carries its own figures; this page uses Caroline Springs suburb figures only.
// Spine: mean shift clustering (Gaussian kernel, bandwidth choice) on bus stop locations. Metro bus GTFS (downloaded
// 10 Oct 2026), Wednesday 28 Oct 2026: 83 stops inside the suburb, routes 215, 418, 426, 456, 460, 462, 463, 464; 4,226
// departures (our count). Median nearest-neighbour distance 28 m, largest 459 m; farthest pair 5,339 m. Modes found by
// bandwidth: 100 m 36 (8 single-stop clusters), 200 m 10, 300 m 3 (44/33/6), 400 m 3 (44/34/5), 600 m 2 (46/37),
// 800 m and above 1. Script: scratchpad au/b10/cspr.py.
// Lesson family: mean shift clustering; 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CAROLINE SPRINGS',
    label: 'Caroline Springs, Melbourne',
    blurb: 'AI and programming classes for Caroline Springs, with a clustering project that lets 83 bus stops find their own centres.'
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
  slug: 'ai-and-programming-classes-in-caroline-springs-melbourne',
  code: 'cspr',
  accent: '#416D50',
  accentRationale: 'Caroline Springs: a lakeside reed green (hue 140), picked by a full search of the muted range: 32.2 RGB units from every Victorian page accent, 17.7 from every other Australian accent and 6.2 from every other colour in content, the stylesheets and the claims logs; 4.83:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Caroline Springs',
    eyebrow: 'Caroline Springs, City of Melton, Melbourne, Victoria',
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
  routeLabel: 'Caroline Springs, Melbourne',
  title: 'AI and Programming Classes in Caroline Springs, Melbourne',
  description: 'Live online AI and programming classes for Caroline Springs children, teens and adults: Scratch, Python, clustering and machine learning, in groups or one to one.',
  ogDescription: 'AI classes for Caroline Springs: mean shift found 36 groups among 83 bus stops at a 100 m bandwidth, 3 at 300 m and just 1 at 800 m. The bandwidth is the decision.',
  twitterDescription: 'Caroline Springs AI and programming classes, live online, first class free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Caroline Springs',
    description: 'Level-matched online lessons in Scratch, Python, clustering and machine learning for learners in Caroline Springs, taught live in English.'
  },
  h1: 'AI and programming classes in Caroline Springs',
  capsuleQ: 'What can Caroline Springs learners expect from AI and programming classes?',
  capsule: 'Live online lessons where code is written, run and questioned, and where AI methods are tested on local data before anyone trusts them. Caroline Springs is a family suburb: the 2021 Census counted 24,488 residents, 3.1 people per household and 90.0% of homes as separate houses.',
  lead: 'Ask a machine learning tool to find the "centres" of Caroline Springs and it will need one number from you first. Give it a small number and every few stops become their own neighbourhood. Give it a large one and the whole suburb collapses into a single blob. That number is called the bandwidth, and choosing it is the real work.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Caroline Springs.',
  picks: {
    eyebrow: 'Course picks for Caroline Springs',
    h2: 'Courses where machine learning is earned',
    intro: 'Each course reaches clustering or the Python that underpins it, as in the bus stop project. The free first class decides where a learner begins.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Python to real models, with clustering among the first unsupervised methods.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Maps, coordinates and data cleaning before any model is fitted.' },
      {
        course: 'ai-ml-masterclass-complete-college',
        band: 'University and adult',
        note: 'Machine learning in depth, including how hyperparameters change results.'
      },
      {
        course: 'data-science-complete-masterclass-college',
        band: 'University and adult',
        note: 'End-to-end data projects, from raw feeds to explained findings.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Caroline Springs in the Census',
      h2: 'Large households, almost all in houses',
      intro: 'Figures for the Caroline Springs suburb (ABS code SAL20500) from the 2021 Census QuickStats, with Victoria alongside. The Melton page covers the wider area.',
      body: [
        {
          kind: 'table',
          caption: 'Caroline Springs suburb, 2021 Census headline counts',
          head: ['Headline', 'Caroline Springs'],
          rows: [
            ['Residents', '24,488'],
            ['Median age', '35'],
            ['Families', '6,528'],
            ['Private dwellings', '8,226'],
            ['Average people per household', '3.1']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Caroline Springs set against Victoria',
          head: ['Measure', 'Caroline Springs', 'Victoria'],
          rows: [
            ['Separate houses', '90.0% (6,763)', '73.4%'],
            ['Semi-detached, row or terrace houses and townhouses', '7.4% (559)', '13.9%'],
            ['Flats or apartments', '2.7% (201)', '12.1%'],
            ['Workers who drove to work', '52.8% (6,445)', '49.9%'],
            ['Workers who took the train', '1.0% (125)', '1.6%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Compact and full',
              p: 'The bureau measures Caroline Springs at 8.34 square kilometres, part of the City of Melton on the western side of Melbourne.'
            },
            { h3: 'Bigger homes', p: 'At 3.1 people per household, Caroline Springs homes hold more people on average than the Victorian figure of 2.5.' },
            { h3: 'Lockdown timing', p: 'Census night in August 2021 fell in a lockdown, when 24.0% of employed residents, 2,930 people, worked from home.' }
          ]
        },
        {
          kind: 'p',
          text: 'Small random adjustments are applied to every Census cell for privacy, so sub-totals can drift from totals. We print each figure as published and do not combine parts.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Letting 83 bus stops find their centres',
      intro: 'From the state bus timetable feed we took the 83 stops inside the Caroline Springs boundary that had a bus on Wednesday 28 October 2026, served by eight routes: 215, 418, 426, 456, 460, 462, 463 and 464. Mean shift clustering moves a point uphill towards the densest nearby crowd of stops until it settles; points that settle in the same place form one cluster. We ran it with a Gaussian kernel at eight bandwidths.',
      body: [
        {
          kind: 'table',
          caption: 'Clusters found among 83 Caroline Springs bus stops (our calculation)',
          head: ['Bandwidth', 'Clusters', 'Largest clusters, in stops'],
          rows: [
            ['100 metres', '36', '8 of them hold a single stop'],
            ['200 metres', '10', '18, 16, 16, 10'],
            ['300 metres', '3', '44, 33, 6'],
            ['400 metres', '3', '44, 34, 5'],
            ['600 metres', '2', '46, 37'],
            ['800 metres or more', '1', 'All 83']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Spacing first',
              p: 'Half of all stops have a neighbour within 28 metres, often the stop opposite, while the loneliest is 459 metres from any other. The farthest pair is 5,339 metres apart.'
            },
            {
              h3: 'Three centres at 300 metres',
              p: 'One cluster settled near St Georges Avenue on Rockbank Middle Road (44 stops), one near College Street on Caroline Springs Boulevard (33), and one near Springside Primary School on Hume Drive (6).'
            },
            {
              h3: 'A stable middle',
              p: 'Between 300 and 400 metres the answer barely moved: three clusters whose sizes shifted by a single stop. Stability across bandwidths is a better sign than any single run.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'When clustering is the wrong tool',
          p: 'For 83 stops, a person looking at a map can see the same three areas in a few seconds, so the algorithm adds little here. It earns its keep with thousands of points, or when the result must be repeatable and explained. And it only groups by position: the clusters say nothing about which stops are busiest or how well they are served.'
        },
        {
          kind: 'p',
          text: 'Stop positions come from the feed downloaded on 10 October 2026. Choosing the stops, the distance conversion, the clustering runs and the 4,226 departures we counted from those stops that day are our own work.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The method',
      h2: 'Climb to the nearest peak',
      intro: 'Each step replaces a point with the weighted average of all stops around it, weights shrinking with distance under a bell curve whose width is the bandwidth. Repeat until the point stops moving; that resting place is a mode.',
      body: [
        {
          kind: 'table',
          caption: 'Mean shift beside k-means',
          head: ['Question', 'Mean shift', 'k-means'],
          rows: [
            ['What must you choose?', 'A bandwidth, in metres here', 'The number of clusters, k'],
            ['Cluster shapes', 'Any shape the density allows', 'Roughly round blobs of similar size'],
            ['Cost on n points', 'About n squared distance checks per round', 'About n times k per round'],
            ['Outliers', 'Can stay as single-point clusters', 'Always pulled into some cluster']
          ]
        },
        {
          kind: 'p',
          text: 'Neither method removes the judgement; it only moves it. With k-means you must decide how many neighbourhoods Caroline Springs has. With mean shift you decide how far a person will walk to a stop and let the count follow. Scikit-learn includes both, plus a helper that estimates a bandwidth from the data, which is a starting point rather than an answer.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Scatter counters on a table and ask where the crowds are, then try again with a bigger circle.' },
            { h3: 'Teenagers', p: 'Code mean shift with NumPy on the stop coordinates and plot each bandwidth\'s answer.' },
            { h3: 'Adults', p: 'Compare mean shift with k-means and DBSCAN on customer or site locations from work.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Caroline Springs',
      h2: 'Eight bus routes and eight schools',
      intro: 'More from the bus feed, the Census and the 2025 school locations file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Eight routes',
              p: 'Routes 215, 418, 426, 456, 460, 462, 463 and 464 served Caroline Springs stops that Wednesday; no metropolitan train station lies inside the suburb.'
            },
            {
              h3: 'Schools',
              p: 'The 2025 file lists eight open schools, four of them government: Brookside P-9 College, Creekside K-9 College, Lakeview Senior College and Springside Primary School.'
            },
            { h3: 'A young median', p: 'The median age of 35 is three years under the Victorian median of 38, in line with a suburb of families.' }
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
    h2: 'From counters on a table to clustering code',
    intro: 'Ages are only a guide; the free first class places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and sorting',
        p: 'Games that sort, group and count things on the screen.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and coordinates',
        p: 'Points, distances and the first plots of real places.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Machine learning',
        p: 'Clustering, classification and honest testing in Python.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied AI',
        p: 'Models, hyperparameters and explaining results to others.',
        courses: ['ai-ml-masterclass-complete-college', 'artificial-intelligence-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'AI and programming',
    h2: 'Will an AI pick the bandwidth for a Caroline Springs learner?',
    intro: 'It will pick one, and it will not tell you how much the answer depends on it.',
    p1: 'Ask an assistant to cluster the Caroline Springs bus stops and it will happily return a number of groups, perhaps using a bandwidth estimated from the data. The result looks authoritative. What it rarely shows is that a different reasonable bandwidth gives 36 groups, or 2.',
    p2: 'A learner who has run eight bandwidths and watched the count fall from 36 to 1 knows to ask for the sweep, not the single answer, and to look for the range where the result holds still.',
    closer: 'That habit, testing how fragile an AI answer is, is what our Caroline Springs classes build alongside the code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Classes online for Caroline Springs',
    intro: 'All lessons are live online, joined from home.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'The learner types and runs the code; the teacher watches the shared screen and questions each step.' },
      { h3: 'Term by term', p: 'Courses track Victorian school terms and rest during the holidays.' },
      { h3: 'Trial lesson', p: 'The free class is a proper lesson. When it finishes, the teacher proposes a course and a weekly time.' },
      { h3: 'Groups by stage', p: 'Five to ten learners at a similar level form each group.' },
      { h3: 'Two a week', p: 'Two lessons on set days each week, about eight a month, with breaks agreed early.' },
      {
        h3: 'Teachers in India',
        p: 'Teachers work from India: a 4:45pm Caroline Springs class in daylight saving is 11:15am India time, or 12:15pm in Melbourne winter.'
      }
    ],
    spec: {
      title: 'Melbourne clocks',
      p: 'Daylight saving in Melbourne began on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India keeps one time all year, so lesson times are always confirmed in Melbourne time.'
    }
  },
  fees: {
    h2: 'Caroline Springs class fees',
    intro: 'Simple pricing with a free start.',
    first: 'A first lesson at no cost, ending with a plain suggestion of what next.',
    group: 'A month of group classes, typically eight, with five to ten learners at one level.',
    private: 'About eight individual lessons a month with one teacher.',
    closer: 'Families outside India pay in US dollars, so Caroline Springs pays the same as every other family overseas. There is nothing to pay before the trial sets the course and time; holidays, missed classes and switching format are covered on the pricing page.'
  },
  reviewsH2: 'What Google reviewers write about our classes',
  book: {
    h2: 'Book a free Caroline Springs class',
    intro: 'Tell us an age and an interest. A nine-year-old might start with a sorting game in Scratch; a Year 11 student might start by clustering the Caroline Springs bus stops in Python.',
    success: 'Thank you. Our team will be in touch soon about a Caroline Springs class.'
  },
  faq: {
    h2: 'Caroline Springs AI and programming questions',
    intro: 'Questions Caroline Springs families and adult learners ask.',
    items: [
      {
        q: 'How many people live in Caroline Springs?',
        a: 'The 2021 Census QuickStats for the Caroline Springs suburb count 24,488 residents in 6,528 families and 8,226 private dwellings, with a median age of 35.'
      },
      {
        q: 'What is mean shift clustering?',
        a: 'A clustering method that repeatedly moves each point to the weighted average of the points around it until it settles on a local peak of density. Points that settle on the same peak belong to the same cluster.'
      },
      {
        q: 'What is a bandwidth in mean shift?',
        a: 'The width of the neighbourhood each point looks at, here measured in metres. A small bandwidth finds many small clusters; a large one merges them into a few.'
      },
      {
        q: 'What did the Caroline Springs bus stop project find?',
        a: 'Among 83 stops, mean shift found 36 clusters at a 100 metre bandwidth, 10 at 200 metres, 3 at 300 and 400 metres, 2 at 600 metres and 1 from 800 metres up.'
      },
      {
        q: 'Is machine learning suitable for teenagers?',
        a: 'Yes, once they are comfortable with Python lists and loops. Clustering is a good first method because the results can be drawn on a map and checked by eye.'
      },
      {
        q: 'What do younger Caroline Springs children start with?',
        a: 'Children from six start with Scratch, making games that sort and group things on screen.'
      },
      {
        q: 'Are there classes in Caroline Springs itself?',
        a: 'No. Everything is taught live online; we have no premises in Australia, and the phone number we publish is Indian.',
        boiler: true
      },
      {
        q: 'How much do AI classes cost for Caroline Springs learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, roughly eight a month, with five to ten learners, and one-to-one classes cost USD 150 a month. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How many are in a group?',
        a: 'Five to ten learners grouped on level, pace and goals, with one-to-one lessons when no group time suits.',
        boiler: true
      },
      {
        q: 'Can adults study AI with you?',
        a: 'Yes. Adults have their own groups or private lessons, and many come to apply machine learning to data from their own jobs.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Caroline Springs learners',
    html: 'The <a class="cg-inline-link" href="/ai-and-programming-classes-in-melton">Melton page</a> covers the wider west, and the <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-brimbank-melbourne">Brimbank page</a> the council area next to the City of Melton. Parents of younger children can start with <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">kids coding classes in Melbourne</a>, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Caroline Springs and Melbourne',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-melton', label: 'Melton' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-cspr .cg-hero-grid { align-items: stretch; gap: clamp(1.1rem, 3.4vw, 2.6rem); }
.cg-root.cg-cspr .cg-hero h1 { font-weight: 690; letter-spacing: -0.021em; line-height: 1.05; }
.cg-root.cg-cspr .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.75rem 0 0.75rem 1.25rem; }
.cg-root.cg-cspr .cg-eyebrow { letter-spacing: 0.16em; font-weight: 650; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-cspr .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.014em; }
.cg-root.cg-cspr .cg-grid-3 { gap: clamp(0.9rem, 2.6vw, 2rem); }
.cg-root.cg-cspr .cg-table caption { font-weight: 630; text-align: left; text-transform: none; }
.cg-root.cg-cspr .cg-table td:nth-child(n+2) { font-variant-numeric: tabular-nums oldstyle-nums; }
.cg-root.cg-cspr .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-cspr .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Caroline Springs, ABS Census 2021 QuickStats, Caroline Springs suburb SAL20500 (read 11 October 2026): 24,488 people; median age 35 (Victoria 38); 6,528 families; 8,226 private dwellings; 3.1 people per household (Victoria 2.5); separate house 90.0% (6,763; Victoria 73.4%); semi-detached, row or terrace house, townhouse 7.4% (559; Victoria 13.9%); flat or apartment 2.7% (201; Victoria 12.1%); car as driver 52.8% (6,445; Victoria 49.9%); train 1.0% (125; Victoria 1.6%); worked at home 24.0% (2,930; lockdown Census). ABS SAL area 8.34 square kilometres, City of Melton. No metropolitan station inside the boundary. Victorian School Locations 2025: 8 open schools (Government 4, Catholic 3, Independent 1); government: Brookside P-9 College, Creekside K-9 College, Lakeview Senior College, Springside Primary School. Victorian 2027 Term 3: Monday 12 July to Friday 17 September. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Mean shift clustering on bus stop locations. Metro bus GTFS Schedule (downloaded 10 October 2026), Wednesday 28 October 2026: 83 stops with departures inside the Caroline Springs SAL polygon; routes 215, 418, 426, 456, 460, 462, 463, 464; 4,226 departures (our count). Coordinates converted to metres; Gaussian kernel. Median nearest-neighbour distance 28 m, largest 459 m, farthest pair 5,339 m. Clusters by bandwidth: 100 m 36 (8 singletons); 200 m 10 (18, 16, 16, 10, 9, 5, 4, 2); 300 m 3 (44, 33, 6); 400 m 3 (44, 34, 5); 600 m 2 (46, 37); 800, 1,200 and 2,000 m 1. 300 m modes nearest St Georges Ave/Rockbank Middle Rd, College St/Caroline Springs Bvd, Springside PS/Hume Dr. Script: scratchpad au/b10/cspr.py.',
    requiredMentions: [
      '24,488',
      '6,528',
      '8,226',
      '8.34 square kilometres',
      '5,339 metres',
      '4,226',
      'Creekside K-9 College',
      'Lakeview Senior College',
      'Springside Primary School'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Caroline Springs suburb (SAL20500).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20500' },
      {
        claim: 'Department of Transport and Planning, GTFS Schedule (Creative Commons Attribution 4.0), metropolitan bus feed downloaded 10 October 2026, calendar 8 October to 31 December 2026.',
        url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL20500 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'scikit-learn documentation, MeanShift and estimate_bandwidth.',
        url: 'https://scikit-learn.org/stable/modules/generated/sklearn.cluster.MeanShift.html'
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
      'Walking catchments or street-network distances: not computed; distances are straight lines between stop coordinates.',
      'How busy each cluster is or how well it is served: not inferred from the clustering.',
      'Names of bus stops that carry church or non-government school names: not printed.',
      'Names of Catholic or independent schools: not used; counted only.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Melton, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
