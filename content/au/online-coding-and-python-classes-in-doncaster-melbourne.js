'use strict';
// Doncaster, Melbourne (cg- district page, Australia cluster Phase 8, row 245). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), suburb page (ABS SAL20771, City of Manningham) under Melbourne and Victoria.
// Spine: which bus routes serve Doncaster every day, and which only on weekdays? Python sets answer it in one line,
// and the difference between - and ^ decides whether the answer is complete.
// Data: Department of Transport and Planning GTFS Schedule, metropolitan bus feed (CC BY 4.0), calendar 8 October
// to 31 December 2026. 110 stops inside the SAL boundary (ray-casting test on the ABS polygon); 8,589,911 stop-time
// rows streamed; 17,437 trips touch those stops. Routes running on Wednesday 14 October 2026: 17 (1,329 trips);
// Saturday 17 October: 15 (763); Sunday 18 October: 14 (591). W - (Sat | Sun) = {309, 318}; W ^ Sun = {281, 309, 318};
// Sat ^ Sun = {281}; all three days = 14 routes. Script: scratchpad au/b6/dnct.py.
// Lesson family: Python set algebra with symmetric difference; 0 location-page hits, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'DONCASTER',
    label: 'Doncaster, Melbourne',
    blurb: 'Online coding and Python classes for Doncaster, with a project that uses Python sets to compare weekday and weekend bus routes.'
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
  slug: 'online-coding-and-python-classes-in-doncaster-melbourne',
  code: 'dnct',
  accent: '#3E2E74',
  accentRationale: 'Doncaster: a deep indigo (hue 253), chosen by hand at least 10 RGB units from all 1,278 accent declarations in content, the shared stylesheets and the claims log, 11.4:1 on white and 10.7:1 on the paper colour #FBF8F2',
  pageType: 'city',
  place: {
    name: 'Doncaster',
    eyebrow: 'Doncaster, City of Manningham, Melbourne, Victoria',
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
  routeLabel: 'Doncaster, Melbourne',
  title: 'Online Coding and Python Classes in Doncaster, Melbourne',
  description: 'Live online coding and Python classes for Doncaster children, teenagers and adults, from Scratch to real data projects, taught in small groups or one to one.',
  ogDescription: 'Python classes for Doncaster, with a project on bus timetables: 17 routes serve Doncaster stops on a Wednesday, 14 every day, and Python sets find the rest in one line.',
  twitterDescription: 'Doncaster online coding and Python classes, live with a teacher, first class free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Doncaster',
    description: 'Level-matched online coding and Python lessons for children, teenagers and adults in Doncaster, taught live in English.'
  },
  h1: 'Online coding and Python classes in Doncaster',
  capsuleQ: 'How do Doncaster learners study coding and Python online?',
  capsule: 'In live online lessons where a teacher works through real programs with the learner, starting with Scratch for young children and moving to Python and data. Doncaster has no train station, and its residents lean on buses and cars: the 2021 Census counted 25,020 people, and 45.2% of workers drove to work on Census day.',
  lead: 'Doncaster has no railway, so its buses carry the load, and the state timetable feed lists every trip. Ask which routes serve Doncaster on a Wednesday but not at the weekend and you have a perfect Python set problem. The answer takes one line; picking the right operator takes a little more thought.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Doncaster.',
  picks: {
    eyebrow: 'Course picks for Doncaster',
    h2: 'Courses where sets and data come naturally',
    intro: 'These courses build the skills in the bus-route project, from collections and loops to working with large files. The free trial places each learner on the right one.',
    items: [
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Lists, dictionaries and sets, with exercises on real public files like the timetable feed.'
      },
      { course: 'pcep-pcap-python-certification-course', band: 'Ages 15 and over', note: 'Exact rules for set operators, comprehensions and file handling.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python from the first line to streaming large data files.'
      },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'How hash-based sets make membership tests fast.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Doncaster in the Census',
      h2: 'A mix of houses and apartments, and no railway',
      intro: 'Figures for the Doncaster suburb (ABS code SAL20771) from the 2021 Census QuickStats. Doncaster East is a separate suburb with its own figures.',
      body: [
        {
          kind: 'table',
          caption: 'Doncaster, 2021 Census headline counts',
          head: ['Headline', 'Doncaster'],
          rows: [
            ['Residents', '25,020'],
            ['Median age', '40'],
            ['Families', '7,181'],
            ['Private dwellings', '11,731'],
            ['Average people per household', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Doncaster beside Victoria',
          head: ['Measure', 'Doncaster', 'Victoria'],
          rows: [
            ['Homes that are separate houses', '53.1% (5,272)', '73.4%'],
            ['Homes that are flats or apartments', '27.3% (2,712)', '12.1%'],
            ['Homes that are semi-detached or townhouses', '19.6% (1,946)', '13.9%'],
            ['Adults with a bachelor degree or higher', '40.8% (8,774)', '29.2%'],
            ['Workers employed as professionals', '31.6% (3,645)', '25.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'The Census counted 1,227 Doncaster residents aged 5 to 9 and 1,115 aged 10 to 14.' },
            { h3: 'Working from home', p: 'In the August 2021 lockdown, 3,602 employed residents, 31.2%, worked from home on Census day.' },
            { h3: 'No train row', p: 'QuickStats lists no train figure for Doncaster\'s travel to work, and no station sits inside its boundary.' }
          ]
        },
        {
          kind: 'p',
          text: 'Because the bureau perturbs small cells for privacy, parts of a QuickStats table need not add to the total; every figure here is quoted as published.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Which bus routes run in Doncaster only on weekdays?',
      intro: 'We found the 110 bus stops inside the Doncaster boundary, streamed all 8,589,911 rows of the metropolitan bus timetable, and kept the 17,437 trips that stop at one of them. Then we built one set of route numbers for each of three ordinary days in October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Routes serving Doncaster stops (our calculation from the GTFS Schedule feed)',
          head: ['Day', 'Routes', 'Trips'],
          rows: [
            ['Wednesday 14 October 2026', '17', '1,329'],
            ['Saturday 17 October 2026', '15', '763'],
            ['Sunday 18 October 2026', '14', '591'],
            ['Every one of the three days', '14', '']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'One line of Python per question',
          head: ['Question', 'Python', 'Answer'],
          rows: [
            ['Weekday routes missing at the weekend', 'wed - (sat | sun)', '309 and 318'],
            ['Routes on Wednesday or Sunday but not both', 'wed ^ sun', '281, 309 and 318'],
            ['Routes that differ between Saturday and Sunday', 'sat ^ sun', '281'],
            ['Routes on all three days', 'wed & sat & sun', '14 routes']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Minus is one-sided',
              p: 'sun - wed is empty, so it would suggest Sunday and Wednesday match. wed - sun shows three routes. Only the symmetric difference, wed ^ sun, reports both directions at once.'
            },
            {
              h3: 'Lists hide the answer',
              p: 'The Wednesday list of routes, one per trip, has 1,329 entries. Turning it into a set leaves 17, because a set keeps each route number once.'
            },
            { h3: 'Order does not matter', p: 'Two lists of the same routes in a different order are not equal in Python; the same two sets are.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Route 281 on Saturdays',
          p: 'Route 281 serves Doncaster stops on Wednesday and Saturday but not on Sunday, which is why it appears only when Sunday is part of the comparison.'
        },
        {
          kind: 'p',
          text: 'The three days were chosen because no Victorian public holiday falls on them. The timetable is the publisher\'s; the boundary test, the trip counts and the sets are our calculation, and a real journey should always be checked in the live journey planner.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The Python behind it',
      h2: 'Four operators, four different questions',
      intro: 'Python sets support the same operations as the Venn diagrams many students meet in maths. Choosing the operator is choosing the question.',
      body: [
        {
          kind: 'table',
          caption: 'Set operators in plain words',
          head: ['Operator', 'Plain English', 'Doncaster example'],
          rows: [
            ['a | b', 'In either set', 'Routes on Saturday or Sunday'],
            ['a & b', 'In both sets', 'Routes on all three days'],
            ['a - b', 'In a but not in b', 'Weekday-only routes'],
            ['a ^ b', 'In exactly one of the two', 'Routes where Wednesday and Sunday disagree']
          ]
        },
        {
          kind: 'p',
          text: 'Streaming the timetable a row at a time, rather than loading all of it, kept the program small: it only remembers the trips that matter, then the routes those trips belong to.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Sort coloured blocks into two hoops that overlap, then say which blocks sit in only one hoop.' },
            { h3: 'Secondary students', p: 'Build the three day sets from the real feed and check each answer by hand for one route.' },
            { h3: 'Adults', p: 'Compare two customer lists or two rosters at work with the same four operators.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Doncaster',
      h2: 'Schools and stops inside the boundary',
      intro: 'From the Victorian school locations file, the bus feed and the state calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Four schools',
              p: 'The 2025 school locations file places 4 schools inside Doncaster: 3 primary and 1 secondary, including Doncaster Primary School, Birralee Primary School and Doncaster Secondary College.'
            },
            { h3: 'A busy stop name', p: 'Seven separate stop entries in the feed share the name Doncaster Shopping Centre/Williamsons Rd, one for each bay.' },
            { h3: 'Term 1, 2027', p: 'Victorian government school students start Term 1 on Thursday 28 January 2027, and the term finishes on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Suburb boundary',
          p: 'All Census and bus figures use the ABS boundary of the Doncaster suburb, 8.80 square kilometres; Doncaster East and other parts of Manningham are not included.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From overlapping hoops to streaming files',
    intro: 'The ages are a guide; the free trial decides where each learner begins.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and sorting',
        p: 'Games that group, match and count things.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Lists, sets and loops, each line explained by the teacher.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with real files',
        p: 'Reading large public files a row at a time and testing the results.',
        courses: ['python-complete-masterclass-teens', 'pcep-pcap-python-certification-course']
      },
      {
        band: 'University and adult',
        h3: 'Python at work',
        p: 'Data comparison, automation and reliable scripts.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will happily write the set code. Why should a Doncaster learner know the operators?',
    intro: 'Because a one-character difference between - and ^ changes the answer, and both versions run without an error.',
    p1: 'Ask an assistant which routes differ between weekdays and Sundays and it may write sun - wed. The result is empty, the code runs cleanly, and a reader could conclude that nothing differs. Three routes are missing from that answer, and only someone who knows what each operator means will notice.',
    p2: 'A learner who has built the Doncaster day sets can predict each answer before running it and test the code against one route checked by hand. That is the habit that makes AI-written code safe to use.',
    closer: 'The Doncaster learner who can name the operator is the one who can check the code an AI writes.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'No bus needed for these Doncaster lessons',
    intro: 'Every class runs on screen at home, so no Doncaster learner has to plan a bus trip to reach a lesson.',
    cells: [
      { h3: 'At home', p: 'Join from a laptop, share the screen and code alongside the teacher.' },
      { h3: 'Victorian calendar', p: 'Lessons follow Victorian school terms and pause during state school holidays.' },
      { h3: 'Trial lesson', p: 'A real, complete lesson first, followed by our advice on course, level and a weekly time.' },
      { h3: 'Level-matched groups', p: 'Five to ten learners per group, matched by level and pace across many suburbs.' },
      { h3: 'Steady schedule', p: 'Two lessons each week at fixed times, about eight a month, with breaks planned in advance.' },
      {
        h3: 'Time difference',
        p: 'Teachers are based in India: a 5pm Doncaster lesson is 11:30am there during daylight saving and 12:30pm once Melbourne\'s clocks return.'
      }
    ],
    spec: {
      title: 'Melbourne time first',
      p: 'Daylight saving in Melbourne runs from Sunday 4 October 2026 to Sunday 4 April 2027. India has no daylight saving, so we always quote lesson times in Melbourne time.'
    }
  },
  fees: {
    h2: 'Doncaster class fees',
    intro: 'The whole price list fits in three lines.',
    first: 'A free first lesson, ending with clear advice about what comes next.',
    group: 'One month of group classes, usually eight, five to ten learners at the same level.',
    private: 'Roughly eight one-to-one lessons a month with a single teacher.',
    closer: 'Doncaster families pay in US dollars, as do all families outside India, so the rate is the same for everyone. Nothing is charged before the trial settles a course and time; holidays, absences and format changes are covered on the pricing page.'
  },
  reviewsH2: 'Reviews left by our families on Google',
  book: {
    h2: 'Book a first Doncaster class',
    intro: 'An age and a hobby are enough to start. An eight-year-old might begin with a Scratch matching game; a secondary student might begin with the bus-route sets.',
    success: 'Thank you. We will be in touch soon about a Doncaster class.'
  },
  faq: {
    h2: 'Doncaster coding and Python questions',
    intro: 'Questions Doncaster families and adult learners ask us most.',
    items: [
      {
        q: 'How many people live in Doncaster?',
        a: 'The 2021 Census QuickStats for the Doncaster suburb record 25,020 residents, a median age of 40 and 7,181 families.'
      },
      {
        q: 'What is a set in Python?',
        a: 'A set is a collection that keeps each value only once and has no order. It supports union, intersection, difference and symmetric difference, the same ideas as Venn diagrams.'
      },
      {
        q: 'What is the symmetric difference of two sets?',
        a: 'It is everything that belongs to exactly one of the two sets. In Python it is written a ^ b; for the Doncaster Wednesday and Sunday routes it gives 281, 309 and 318.'
      },
      {
        q: 'What did the Doncaster bus project find?',
        a: 'On the three October 2026 days we checked, 17 routes served Doncaster stops on the Wednesday, 15 on the Saturday and 14 on the Sunday. Routes 309 and 318 ran on the Wednesday only.'
      },
      {
        q: 'At what age can a child start Python?',
        a: 'Most children start with Scratch from six and move to Python at around ten, once reading and typing are comfortable.'
      },
      {
        q: 'Is Copilot Studio taught in Doncaster groups?',
        a: 'No. Copilot Studio is a one-to-one subject for us; group learners build their agents in Python instead.'
      },
      {
        q: 'Is there a Doncaster classroom?',
        a: 'No. Classes are live online only, there is no Australian office, and our listed phone number is an Indian number.',
        boiler: true
      },
      {
        q: 'What do coding classes cost for Doncaster learners?',
        a: 'The first lesson is free. Then group lessons are USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one. We agree the course, format and time before any payment.',
        boiler: true
      },
      {
        q: 'How many students share a group?',
        a: 'Five to ten, grouped by level, pace and aims rather than age or suburb, with one-to-one lessons if no group time works.',
        boiler: true
      },
      {
        q: 'Can adults learn Python here?',
        a: 'Yes. Adults have their own groups or private lessons, and many bring a spreadsheet or report from work to automate.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Doncaster learners',
    html: 'Over the boundary in the City of Whitehorse, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-box-hill-melbourne">Box Hill</a> has a page of its own. The <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a>, <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">coding for Melbourne kids</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> cover the rest.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Doncaster and Melbourne',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-box-hill-melbourne', label: 'Box Hill' },
    { href: '/best-coding-and-ai-classes-in-glen-waverley-melbourne', label: 'Glen Waverley' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-dnct .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-dnct .cg-hero h1 { font-weight: 710; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-dnct .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.5rem 0 0.5rem 1.1rem; }
.cg-root.cg-dnct .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-dnct .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.013em; }
.cg-root.cg-dnct .cg-grid-3 { gap: clamp(0.85rem, 2.4vw, 1.9rem); }
.cg-root.cg-dnct .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-dnct .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dnct .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-dnct .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Doncaster, ABS Census 2021 QuickStats, Doncaster suburb SAL20771 (read 10 October 2026): 25,020 people; median age 40; 7,181 families; 11,731 private dwellings; 2.4 people per household; separate houses 53.1% (5,272); flats 27.3% (2,712); semi-detached 19.6% (1,946); bachelor degree or higher 40.8% (8,774); professionals 31.6% (3,645); drove to work 45.2% (5,216); worked at home 31.2% (3,602, lockdown Census day); aged 5-9 1,227; aged 10-14 1,115; no train row in travel to work. ABS SAL area 8.80 square kilometres. Victorian School Locations 2025: 4 schools inside the boundary (3 primary, 1 secondary), including Doncaster Primary School, Birralee Primary School and Doncaster Secondary College. No metropolitan or regional station inside the boundary. Victorian 2027 Term 1: students start Thursday 28 January, ends Thursday 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Python set algebra with symmetric difference. GTFS Schedule metro bus feed (calendar 8 October to 31 December 2026): 22,633 stops, 110 inside the Doncaster SAL polygon; 8,589,911 stop_times rows streamed; 17,437 trips touch Doncaster stops. Active services by calendar plus calendar_dates on Wed 14 Oct, Sat 17 Oct, Sun 18 Oct 2026: routes 17 / 15 / 14, trips 1,329 / 763 / 591. wed - (sat|sun) = {309, 318}; wed ^ sat = {309, 318}; wed ^ sun = {281, 309, 318}; sat ^ sun = {281}; wed & sat & sun = 14 routes; union 17. Seven stop entries named Doncaster Shopping Centre/Williamsons Rd. Script: scratchpad au/b6/dnct.py.',
    requiredMentions: ['25,020', '7,181', '11,731', '2,712', '8,774', '3,645', '17,437', 'Birralee Primary School', '8,589,911'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Doncaster suburb (SAL20771).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20771' },
      {
        claim: 'Department of Transport and Planning, GTFS Schedule (Creative Commons Attribution 4.0), metropolitan train and bus feeds.',
        url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'Python documentation, set types: union, intersection, difference and symmetric_difference.',
        url: 'https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL20771 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
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
      'Route names, destinations or frequencies beyond the route numbers: not claimed; only route numbers and trip counts from the feed are used.',
      'That routes 309 and 318 never run at weekends in any week: not claimed; the comparison covers the three October 2026 days checked.',
      'Names of stops at health or aged-care facilities: not printed; such stops are counted only.',
      'A combined figure for Doncaster and Doncaster East: not computed; published parts are never summed.',
      'Catholic or independent school names and any sector breakdown: not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Manningham, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
