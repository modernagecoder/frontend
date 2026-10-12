'use strict';
// Eight Mile Plains, Brisbane (cg- district page, Australia cluster Phase 8, row 294). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page (ABS SAL30950, City of Brisbane) under Brisbane and Queensland.
// Spine: cluster the 47 Translink stop records inside Eight Mile Plains with k-means, 1,000 runs each with random
// initial centres and with k-means++ seeding (numpy, seed 2026). Honest result: on 47 points k-means++ does not beat
// random seeding on the median; it trims the worst case and the iteration count. Restarts matter more.
// Lesson family: k-means++ seeding vs random initial centres; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'EIGHT MILE PLAINS',
    label: 'Eight Mile Plains, Brisbane',
    blurb: 'AI and programming classes for Eight Mile Plains, with a clustering test on 47 bus stops where the clever seeding method barely beats the plain one.'
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
  slug: 'ai-and-programming-classes-in-eight-mile-plains-brisbane',
  code: 'eimp',
  accent: '#835C15',
  accentRationale: 'Eight Mile Plains: an ochre brown (hue 38.7), 4.86:1 on #EDE7DA; 32.8 RGB from the nearest Queensland accent, 13.6 from any other Australian accent and 7.9 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Eight Mile Plains',
    eyebrow: 'Eight Mile Plains, City of Brisbane, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Eight Mile Plains' },
      { type: 'AdministrativeArea', name: 'City of Brisbane' },
      { type: 'City', name: 'Brisbane' },
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' },
    { slug: 'best-coding-classes-in-brisbane', name: 'Brisbane' }
  ],
  nav: [
    { label: 'Brisbane', href: '/best-coding-classes-in-brisbane' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Eight Mile Plains, Brisbane',
  title: 'AI and Programming Classes in Eight Mile Plains, Brisbane',
  description: 'Live online AI and programming classes for Eight Mile Plains learners aged 6 to 67, with machine learning tested on real Brisbane data, in groups or one to one.',
  ogDescription: 'Eight Mile Plains AI project: 47 bus stops, 2,000 k-means runs, and an honest finding that k-means++ seeding barely beat random starts.',
  twitterDescription: 'AI and programming for Eight Mile Plains, live online with a teacher.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Eight Mile Plains',
    description: 'Level-matched online AI, machine learning and programming lessons for children, teenagers and adults in Eight Mile Plains, Brisbane, taught live in English.'
  },
  h1: 'AI and programming classes in Eight Mile Plains',
  capsuleQ: 'What do Eight Mile Plains learners gain from AI and programming classes?',
  capsule: 'The ability to build machine learning models and the discipline to test whether a recommended technique actually helps on their own data. Children begin with Scratch at six; teenagers and adults train models in Python. Eight Mile Plains recorded 15,326 residents at the 2021 Census.',
  lead: 'Textbooks say k-means++ picks better starting centres than random guesses. We tried both, a thousand times each, on the 47 bus stop records inside Eight Mile Plains. The fancy method won on some measures and lost on another, which is exactly why learners should run the experiment rather than quote the rule.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Eight Mile Plains.',
  picks: {
    eyebrow: 'Course picks for Eight Mile Plains',
    h2: 'Courses that test methods, not just apply them',
    intro: 'The stop-clustering project needs Python, numpy and the habit of comparing methods fairly. These courses build each part; the trial lesson finds the level.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Clustering, classification and regression built by hand, then compared honestly.' },
      {
        course: 'ai-ml-masterclass-complete-college',
        band: 'University and adult',
        note: 'Machine learning from first principles to evaluated, working models.'
      },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python data work with maps, charts and repeatable experiments.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python and AI projects, small enough to test by eye.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Eight Mile Plains in the Census',
      h2: 'Houses, townhouses and bus commuters',
      intro: 'A selection of 2021 Census QuickStats for the suburb of Eight Mile Plains (ABS code SAL30950), shown beside the Queensland figure.',
      body: [
        {
          kind: 'table',
          caption: 'Eight Mile Plains counts, 2021',
          head: ['Measure', 'Eight Mile Plains'],
          rows: [
            ['Residents', '15,326'],
            ['Median age', '36'],
            ['Families', '4,125'],
            ['Private dwellings', '5,631'],
            ['People per household', '2.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Eight Mile Plains and Queensland side by side',
          head: ['Indicator', 'Eight Mile Plains', 'Queensland'],
          rows: [
            ['Workers who rode a bus to work', '7.2% (534)', '1.7%'],
            ['Semi-detached, row or townhouse homes', '26.1% (1,348)', '11.7%'],
            ['Employed people in professional jobs', '29.5% (2,184)', '21.4%'],
            ['Adults with a bachelor degree or higher', '38.9% (4,920)', '21.9%'],
            ['People in education who attend university', '22.0% (1,045)', '14.2%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children counted', p: 'The suburb had 947 residents aged 5 to 9 and 843 aged 10 to 14.' },
            { h3: 'All ages', p: 'Residents aged 85 and over numbered 362, so lessons here span grandchildren and grandparents.' },
            { h3: 'Area', p: 'The ABS boundary takes in roughly 7.6 square kilometres of Brisbane\'s southern suburbs.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau adds small privacy perturbations to Census cells, so these figures are reproduced exactly and never summed into totals of our own making.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Does smart seeding beat a random start?',
      intro: 'k-means groups points around k centres, but it needs starting centres, and a bad start can trap it in a poor answer. Random seeding picks k stops at random. k-means++ picks one at random, then favours stops far from the centres already chosen. We ran each method 1,000 times on the 47 stop records with k = 4, 5 and 6.',
      body: [
        {
          kind: 'table',
          caption: 'k = 5, 1,000 runs per method (our calculation)',
          head: ['Measure', 'Random start', 'k-means++'],
          rows: [
            ['Median typical distance from stop to its centre', '494 m', '493 m'],
            ['Worst run', '632 m', '596 m'],
            ['Runs reaching the tightest answer found (470 m)', '10.5%', '9.3%'],
            ['Average iterations to settle', '5.22', '4.43']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Median and worst runs at other values of k (our calculation)',
          head: ['k', 'Random: median, worst', 'k-means++: median, worst'],
          rows: [
            ['4', '574 m, 676 m', '571 m, 666 m'],
            ['6', '450 m, 591 m', '440 m, 558 m']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Where k-means++ helped', p: 'Its worst runs were tighter at every k, and it settled in fewer rounds, about 4.4 against 5.2 at k = 5.' },
            {
              h3: 'Where it did not',
              p: 'Medians were within 10 metres. At k = 5, random seeding actually reached the tightest clustering more often, 10.5% of runs against 9.3%.'
            },
            {
              h3: 'What really matters',
              p: 'Neither method found the tightest answer reliably in one go. Running several restarts and keeping the tightest is what fixes a bad start.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'An honest tie',
          p: 'With only 47 stops in one suburb, almost any start lands near a good answer, so the plain baseline holds its own. k-means++ was designed for large datasets where random starts often fail badly. Reporting the tie is the result; claiming a win would be repeating a textbook, not measuring Eight Mile Plains.'
        },
        {
          kind: 'p',
          text: 'Stop positions come from the Translink timetable feed; membership of the suburb is our point-in-boundary check. Distances use a flat projection in metres, fine at suburb scale. The typical distance is the root mean square distance from each stop to its cluster centre. All runs, seeds and statistics are our calculation with numpy, seed 2026.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Machine learning practice',
      h2: 'Running a fair comparison',
      intro: 'The interesting part of this project is not k-means itself but the experiment around it.',
      body: [
        {
          kind: 'table',
          caption: 'Experiment design, and what it showed',
          head: ['Choice', 'Why', 'Here'],
          rows: [
            ['Many runs per method', 'One run is luck, not evidence', '1,000 each'],
            ['Same data and seed source', 'Differences must come from the method', '47 stops, seed 2026'],
            ['Several values of k', 'A result at one k may not hold at another', 'k = 4, 5 and 6'],
            ['Report medians and worst cases', 'Averages hide the bad runs', 'Worst 632 m against 596 m']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Drop counters on a map, pick meeting points, and see how the first guess changes the final groups.' },
            { h3: 'Secondary learners', p: 'Code k-means in numpy, add k-means++ seeding, and run both enough times to make a fair call.' },
            { h3: 'Adults', p: 'Question any "standard practice" in an analytics tool by testing it on your own data first.' }
          ]
        },
        {
          kind: 'p',
          text: 'Library defaults are worth reading. In scikit-learn, k-means++ is the default seeding and, with the default n_init setting, it runs from a single start, while random seeding runs 10 times and keeps the tightest result. Our runs suggest restarts deserve as much thought as seeding.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Eight Mile Plains',
      h2: 'Warrigal Road and 35 council parks',
      intro: 'Local markers from the timetable feed, the council park register and the Queensland school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Stops and routes',
              p: 'On Wednesday 21 October 2026, the 47 stop records inside the suburb had 2,195 scheduled bus visits on 9 routes, by our count.'
            },
            { h3: 'Busiest stops', p: 'Warrigal Rd at Fanfare, at Bordeaux and at Padstow Views tied that day with 139 scheduled visits each.' },
            { h3: 'Term 1, 2027', p: 'Queensland state schools open on Wednesday 27 January 2027, and Term 1 ends on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Just this suburb',
          p: 'Brisbane City Council\'s park register lists 35 parks in Eight Mile Plains. Kuraby, Macgregor, Rochedale, Runcorn, Sunnybank, Upper Mount Gravatt and Wishart all border the suburb, and their figures stay separate from these.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From grouping counters to training models',
    intro: 'Ages are a guide; the trial lesson shows where to begin.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Puzzles and games that build step-by-step thinking.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI ideas',
        p: 'First code and models that learn from examples.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Machine learning',
        p: 'Clustering, regression and fair evaluation in Python.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied AI',
        p: 'Data science and models for study and work.',
        courses: ['data-science-complete-masterclass-college', 'ai-ml-masterclass-complete-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI recommends the method, who checks it works?',
    intro: 'The learner. AI assistants repeat standard advice faithfully, but that advice was measured on someone else\'s data.',
    p1: 'Ask an assistant how to cluster bus stops and it will recommend k-means++ with confidence. Good advice in general. On the Eight Mile Plains stops, though, it made almost no difference to the typical result, and random seeding found the tightest clustering slightly more often.',
    p2: 'Learners who have run the comparison themselves know to treat advice as a hypothesis. They set up a fair test, report what it shows, and change course when the data disagrees. That habit is what AI cannot supply.',
    closer: 'In Eight Mile Plains, the learner who tests the advice is the one ready to use AI well.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How classes run for Eight Mile Plains',
    intro: 'Lessons happen live over video, so learners anywhere in the suburb join from home.',
    cells: [
      { h3: 'Shared notebooks', p: 'Teacher and learner run code and read the results together, line by line.' },
      { h3: 'School-year rhythm', p: 'Plans follow Queensland terms, with breaks in the holidays.' },
      { h3: 'Free trial', p: 'One real lesson at no charge, closing with an honest recommendation.' },
      { h3: 'Matched groups', p: 'Five to ten learners of similar level, or one to one.' },
      { h3: 'Two per week', p: 'Set weekly times, close to eight lessons a month.' },
      { h3: 'India time', p: 'Our teachers are based in India, so a 7pm class here starts at 2:30pm India time, all year.' }
    ],
    spec: {
      title: 'Clocks that never change',
      p: 'Brisbane has had no daylight saving since March 1992 (IANA time zone database), and India has none either, so agreed lesson times hold year round.'
    }
  },
  fees: {
    h2: 'Fees for Eight Mile Plains learners',
    intro: 'Three prices for every family.',
    first: 'The trial lesson is free and ends with a written plan.',
    group: 'About eight group lessons a month with five to ten learners at the same level.',
    private: 'About eight private lessons a month, one teacher to one learner.',
    closer: 'Payment is in US dollars and comes after the trial, once the course and time are agreed. Holiday breaks, missed lessons and format changes are covered on the pricing page.'
  },
  reviewsH2: 'Reviews on Google from learners and families',
  book: {
    h2: 'Book a free Eight Mile Plains class',
    intro: 'Tell us the learner\'s age and interests. A teenager might start by clustering the suburb\'s bus stops; a younger child might start with Scratch logic puzzles.',
    success: 'Thank you. We will be in touch soon about an Eight Mile Plains class.'
  },
  faq: {
    h2: 'Eight Mile Plains AI and programming questions',
    intro: 'Questions families and adult learners in Eight Mile Plains often ask.',
    items: [
      {
        q: 'What is the population of Eight Mile Plains?',
        a: 'The 2021 Census QuickStats count 15,326 residents in the suburb of Eight Mile Plains, with 4,125 families and a median age of 36.'
      },
      {
        q: 'What is k-means clustering?',
        a: 'An algorithm that splits points into k groups by repeatedly assigning each point to its nearest centre and moving each centre to the middle of its group, until nothing changes.'
      },
      {
        q: 'What is k-means++?',
        a: 'A way to choose starting centres for k-means. It picks the first at random and each later one with probability that grows with distance from the centres already chosen, which spreads the starts out.'
      },
      {
        q: 'Did k-means++ beat random starts in Eight Mile Plains?',
        a: 'Only partly. Over 1,000 runs at k = 5, medians were 493 m and 494 m; k-means++ had a better worst run and fewer iterations, but random starts found the tightest clustering more often.'
      },
      {
        q: 'At what age can children learn AI?',
        a: 'From six with Scratch and simple AI activities. Training models in Python usually starts around thirteen.'
      },
      { q: 'Can teenagers take Claude-based courses?', a: 'No. Our Claude-based courses are for people aged 18 and over only; teenagers use other AI tools.' },
      {
        q: 'Is there a classroom in Eight Mile Plains?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Eight Mile Plains learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can Copilot Studio be learned in a group?', a: 'No. Copilot Studio is taught one to one only; group learners build agents in Python code.' }
    ]
  },
  next: {
    eyebrow: 'Explore Brisbane and Queensland',
    h2: 'More for Eight Mile Plains learners',
    html: 'Try <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">the Brisbane guide</a> or <a class="cg-inline-link" href="/coding-classes-for-kids-brisbane">coding for Brisbane children</a>. Families to the south may also want <a class="cg-inline-link" href="/best-coding-classes-in-logan">Logan</a> or <a class="cg-inline-link" href="/best-coding-classes-in-gold-coast">the Gold Coast</a>, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">the Queensland guide</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Eight Mile Plains and Brisbane',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/best-coding-classes-in-logan', label: 'Logan' },
    { href: '/best-coding-classes-in-gold-coast', label: 'Gold Coast' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' }
  ],
  personalityCss: `
.cg-root.cg-eimp .cg-hero-grid { align-items: end; gap: clamp(1.15rem, 3.2vw, 2.55rem); }
.cg-root.cg-eimp .cg-hero h1 { font-weight: 670; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-eimp .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.7rem 0 0.7rem 1.15rem; }
.cg-root.cg-eimp .cg-eyebrow { letter-spacing: 0.105em; font-weight: 700; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-eimp .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.013em; }
.cg-root.cg-eimp .cg-grid-3 { gap: clamp(0.85rem, 2vw, 1.55rem); }
.cg-root.cg-eimp .cg-table caption { font-style: italic; font-weight: 640; text-align: left; }
.cg-root.cg-eimp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-eimp .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-eimp .cg-callout { border-left-width: 6px; border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Eight Mile Plains (SAL30950), ABS Census 2021 QuickStats (read 12 October 2026): 15,326 people; median age 36; 4,125 families; 5,631 private dwellings; 2.8 per household; bus to work 534 (7.2%, Qld 1.7%); semi-detached 1,348 (26.1%, Qld 11.7%); professionals 2,184 (29.5%, Qld 21.4%); bachelor or higher 4,920 (38.9%, Qld 21.9%); university 1,045 (22.0%, Qld 14.2%); aged 5-9 947; 10-14 843; 85 and over 362. ABS SAL area 7.6134 sq km. Translink GTFS Wednesday 21 October 2026: 47 stop records with service inside the SAL polygon (our check); 2195 scheduled bus visits; 9 routes; Warrigal Rd at Fanfare, Bordeaux and Padstow Views 139 each. BCC Park Locations: 35 parks. BCC adjacency: Kuraby, Macgregor, Rochedale, Runcorn, Sunnybank, Upper Mount Gravatt, Wishart. Qld 2027 Term 1: Wednesday 27 January to Thursday 25 March. Brisbane no daylight saving since March 1992 (IANA).',
    localProject: 'k-means++ vs random seeding. 47 Translink stop records (location_type 0) inside SAL30950 by our point-in-polygon; equirectangular projection to metres, centred. Lloyd iterations to convergence (max 100). 1,000 runs per method per k, numpy default_rng(2026). RMS = sqrt(inertia / 47). k=5: random median 494 m, worst 632, kpp median 493, worst 596; best found 470 m; hit-best random 10.5%, kpp 9.3%; mean iterations 5.22 vs 4.43. k=4: 574/676 vs 571/666, best 548. k=6: 450/591 vs 440/558, best 406.',
    requiredMentions: ['15,326', '5,631', 'Bordeaux', 'Warrigal Rd at Fanfare', 'Padstow Views', '632 m', '596 m', '10.5%', 'honest tie'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Eight Mile Plains suburb and locality (SAL30950), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL30950'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities boundary service, used for our point-in-boundary checks and suburb areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026, downloaded October 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      {
        claim: 'Brisbane City Council open data, Park Locations (Creative Commons Attribution 4.0), dataset last modified 30 September 2026.',
        url: 'https://data.brisbane.qld.gov.au/explore/dataset/park-locations/'
      },
      {
        claim: 'scikit-learn documentation, sklearn.cluster.KMeans: k-means++ initialisation and the n_init restarts parameter.',
        url: 'https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html'
      },
      {
        claim: 'Queensland Department of Education, future school dates: 2027 Queensland state school term dates.',
        url: 'https://education.qld.gov.au/about-us/calendar/future-dates'
      },
      {
        claim: 'IANA time zone database, australasia file: Zone Australia/Brisbane follows rule AQ, whose last daylight saving period ended in March 1992.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'That k-means++ always beats random seeding: rejected by our own measurement on this data.',
      'That the clusters describe real service areas or travel patterns: not claimed; they are geometric groups of stop positions.',
      'Passenger numbers at Eight Mile Plains stops: not claimed.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Brisbane City Council or Translink.'
    ]
  }
};
