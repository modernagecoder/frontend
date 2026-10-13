'use strict';
// Southport, Gold Coast (cg- district page, Australia cluster Phase 8, row 335). Keyword slug best-coding-and-ai-classes-in-*,
// suburb page (ABS SAL32611 Southport (Qld)) in the City of Gold Coast, under Gold Coast and Queensland.
// Spine: fewest transfers by breadth-first search over a route graph built from Translink SEQ GTFS (feed 7 Oct to 6 Dec 2026):
// 19 route names serve Southport; of 1,824 served City of Gold Coast stop records, 750 need no transfer, 760 one and 314 two, none
// three; without 150 m walking links 16 fewer are reachable. Script: scratchpad au/b18/a_sthp.py. Lesson family: minimum-transfer
// routing (BFS on a route graph); claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'SOUTHPORT',
    label: 'Southport, Gold Coast',
    blurb: 'Coding and AI classes for Southport, where a breadth-first search shows every served bus and tram stop in the city is at most two transfers away.'
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
  slug: 'best-coding-and-ai-classes-in-southport-gold-coast',
  code: 'sthp',
  accent: '#1B2A7F',
  accentRationale: 'Southport: a muted deep Broadwater blue (hue 231.0, s 0.79, v 0.50), at least 23.8 RGB from every Queensland page accent and all claimed accents, 11.9 from other AU accents and 8.1 from every other site colour; 10.1:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Southport',
    eyebrow: 'Southport, City of Gold Coast, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Southport' },
      { type: 'AdministrativeArea', name: 'City of Gold Coast' },
      { type: 'City', name: 'Gold Coast' },
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' },
    { slug: 'best-coding-classes-in-gold-coast', name: 'Gold Coast' }
  ],
  nav: [
    { label: 'Gold Coast', href: '/best-coding-classes-in-gold-coast' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Southport, Gold Coast',
  title: 'Best Coding and AI Classes in Southport, Gold Coast',
  description: 'Live online coding and AI classes for Southport learners aged 6 to adult, with an algorithms project on the fewest transfers from Southport to every Gold Coast stop.',
  ogDescription: 'From Southport, 750 Gold Coast stops need no change, 760 need one and 314 need two. A breadth-first search over routes finds them all.',
  twitterDescription: 'Southport coding and AI classes, live online, first lesson free.',
  ogImageCourse: 'data-structures-algorithms-masterclass-college',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Southport',
    description: 'Algorithms, Python and AI lessons for Southport children, teenagers and adults, placed by level and taught live online.'
  },
  h1: 'Coding and AI classes in Southport',
  capsuleQ: 'How do Southport families recognise the best coding and AI classes?',
  capsule: 'By what learners can explain at the end. In our Southport project, they build a graph whose points are bus and tram routes, then search it level by level from the routes that serve Southport. The result is the fewest transfers to reach each Gold Coast stop: none for 750, one for 760, two for 314, and never three.',
  lead: 'Southport is the Gold Coast\'s main business centre, on the Broadwater just north of Main Beach. More than half its homes are apartments, and 19 Translink routes stop inside the suburb, from the G:link tram to the local 7xx buses. That makes Southport a natural starting point for the question every journey planner answers: how many changes will this trip need?',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Southport.',
  picks: {
    eyebrow: 'Course picks for Southport',
    h2: 'Algorithms, Python and AI',
    intro: 'Four starting points for learners who enjoy maps, networks and puzzles. Which one fits is settled in the trial.',
    items: [
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Graphs, queues and breadth-first search in depth.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 17', note: 'Graph problems with proofs, not just accepted answers.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python sets, dictionaries and queues on real data.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Map and maze puzzles for younger learners.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Southport in the 2021 Census',
      h2: 'Apartments, walkers and a busy centre',
      intro: 'Figures for the Southport suburb and locality (ABS SAL32611), read from 2021 Census QuickStats on 13 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Southport counts',
          head: ['Measure', 'Value'],
          rows: [
            ['People', '36,786'],
            ['Median age', '37'],
            ['Families', '8,575'],
            ['Private dwellings', '18,451'],
            ['People per household', '2.1'],
            ['Bedrooms per dwelling', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Southport shares compared with Queensland',
          head: ['Share', 'Southport', 'Queensland'],
          rows: [
            ['Flat or apartment', '54.6% (8,437)', '12.5%'],
            ['Walked to work', '5.8% (993)', '2.6%'],
            ['Bachelor degree or higher', '25.4% (8,272)', '21.9%'],
            ['Couple families with children', '26.9% (2,310)', '41.2%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'City living', p: 'More than half of Southport dwellings were apartments, over four times the state share.' },
            { h3: 'Fewer cars', p: 'Homes averaged 1.4 motor vehicles, below the Queensland average of 1.9.' },
            { h3: 'Census timing', p: 'The 2021 Census was held during the pandemic, so walking and driving shares describe that week.' }
          ]
        },
        {
          kind: 'p',
          text: 'Percentages here are the bureau\'s own, rounded to one decimal place, and small counts carry its privacy adjustments. We have not combined any rows into new totals.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Fewest transfers, level by level',
      intro: 'Learners turn the Translink timetable into a graph where each route is a point. Two routes are linked when they share a stop, or when their stops are within 150 metres, our walking allowance. Breadth-first search starts from the 19 routes that stop in Southport and explores outward one transfer at a time.',
      body: [
        {
          kind: 'table',
          caption: 'Fewest transfers from Southport to City of Gold Coast stops (our calculation, SEQ GTFS feed of 7 October 2026)',
          head: ['Transfers needed', 'Stop records reached', 'With no walking links'],
          rows: [
            ['None', '750', '750'],
            ['One', '760', '744'],
            ['Two', '314', '314'],
            ['Three or more', '0', '0']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why breadth-first',
              p: 'BFS visits every route reachable with no transfer before any route needing one. The first time it reaches a route, it has found the fewest changes, with no weights or sorting needed.'
            },
            {
              h3: 'Walking matters',
              p: 'Without the 150-metre allowance, 16 stops drop out of reach: they can only be reached by walking from one stop to a nearby one.'
            },
            {
              h3: 'The far north',
              p: 'Coomera is the hardest of the suburbs we checked: 41 of its 64 stop records need two transfers from Southport, and 22 need one.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Fewest transfers is not fastest',
          p: 'The search counts changes, not minutes. A one-transfer trip can take longer than a two-transfer one if the single route wanders. Journey planners weigh both, and learners write down which question their code answers before showing anyone the numbers.'
        },
        {
          kind: 'p',
          text: 'Timetables come from the Translink SEQ GTFS feed on data.qld.gov.au, licensed CC BY 4.0. We kept the 1,824 served stop records inside the ABS outline of the City of Gold Coast, using our own point-in-polygon test; the graph, the walking links and the counts are our calculation.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Building the search',
      h2: 'A queue, a visited set and a graph of routes',
      intro: 'The search fits in twenty lines of Python once the graph exists. Building the graph correctly is most of the work.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Read routes, trips and stop times, and list the stops each route serves.'],
            ['2', 'Link routes that share a stop, then add walking links within 150 metres.'],
            ['3', 'Run breadth-first search from the Southport routes with a deque.'],
            ['4', 'Give each stop the lowest level among its routes and tabulate the result.']
          ]
        },
        {
          kind: 'p',
          text: 'Step 2 holds the judgement calls. Translink lists some routes under several route codes for different patterns, so learners count route names and route codes separately and check which one the graph should use. The walking distance is an assumption, so they rerun the search at 0 and 150 metres and report both.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Colour a map one ring at a time: places one hop away, then two, and spot why the order matters.' },
            { h3: 'Teenagers', p: 'Code BFS on the route graph and compare results with and without walking links.' },
            { h3: 'Adults', p: 'Apply graph search to networks at work, from supply chains to org charts.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Southport',
      h2: 'Signs, counts and the 2027 school year',
      intro: 'Local details from City of Gold Coast open data and the Queensland Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Parking signs',
              p: 'The council\'s parking sign list records 1,213 signs with Southport as their suburb, more than any other suburb named in it.'
            },
            { h3: 'Traffic counts', p: 'City of Gold Coast traffic surveys list 360 counts in Southport between 2017 and 2026.' },
            { h3: 'Term 1, 2027', p: 'Queensland state schools start on Wednesday 27 January 2027, and Term 1 ends on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'Southport is the ABS suburb outline of about 14.4 square kilometres. Stops inside it are found by our own point-in-polygon test.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From colouring maps to graph search',
    intro: 'Ages are a guide only; the trial lesson decides.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Maps and mazes',
        p: 'Block-code games about paths and steps.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'First Python',
        p: 'Lists, loops and simple searches.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Algorithms',
        p: 'Graphs, BFS and why it finds the fewest steps.',
        courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course']
      },
      {
        band: 'University and adult',
        h3: 'Network analysis',
        p: 'Graph algorithms for study and work.',
        courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Do journey-planning apps make this pointless?',
    intro: 'They answer one trip. Building the search answers how the whole network fits together.',
    p1: 'An app tells you how to get from Southport to Coomera tonight. It will not show that 314 stops in the city need two changes, or that 16 depend on crossing the road.',
    p2: 'Learners who have built the graph understand what the app is optimising and can question its choices. The same search sits under AI planning tools, recommendation systems and network models.',
    closer: 'Our classes treat AI and apps as systems to understand, not just use.',
    blogAnchor: 'is coding still worth learning in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Southport lessons are delivered',
    intro: 'There is no classroom to reach: lessons are video calls with a teacher, joined from a Southport kitchen table or a bedroom desk.',
    cells: [
      { h3: 'Teacher on screen', p: 'Every session is run in real time, with the teacher reading each learner\'s code.' },
      { h3: 'School calendar', p: 'We keep to Queensland term dates and stop during the breaks.' },
      { h3: 'Start free', p: 'An opening session at no cost, after which we suggest a course in writing.' },
      { h3: 'Class size', p: 'Level-matched groups of fifteen to twenty, or a teacher of your own.' },
      { h3: 'Rhythm', p: 'Two sessions every week through each term.' },
      { h3: 'India time', p: 'A 4:30pm Southport lesson is noon in India, all year round.' }
    ],
    spec: {
      title: 'Queensland clocks',
      p: 'The IANA time zone database shows Queensland\'s last daylight saving ended in March 1992, so the gap to India stays at four and a half hours.'
    }
  },
  fees: {
    h2: 'Southport class fees',
    intro: 'The same fees for every learner.',
    first: 'Session one costs nothing and ends with a course suggestion.',
    group: 'Groups: two sessions weekly, roughly eight a month, fifteen to twenty classmates.',
    private: 'One-to-one: the same rhythm with a teacher who works only with you.',
    closer: 'We charge in US dollars, and only once the free session has fixed what to learn and when. School holidays and missed sessions are explained on our pricing page.'
  },
  reviewsH2: 'Family reviews on Google',
  book: {
    h2: 'Book a free Southport lesson',
    intro: 'Send us a line about the learner: age, interests, any coding so far. Younger children often begin with the map-colouring game, older ones with the transfer search itself.',
    success: 'Thank you. We will contact you about a Southport lesson.'
  },
  faq: {
    h2: 'Southport coding and AI questions',
    intro: 'Questions from Southport families and adult learners.',
    items: [
      { q: 'How many people live in Southport?', a: 'The 2021 Census counted 36,786 people in the Southport suburb, median age 37.' },
      {
        q: 'What is breadth-first search?',
        a: 'A way to explore a graph in rings: everything one step away, then two, and so on. It finds the fewest steps to every point.'
      },
      {
        q: 'Why are routes the points of the graph?',
        a: 'Because the question is about changes between routes. Each step in the search is one more boarding.'
      },
      { q: 'Is the walking allowance real data?', a: 'No. The 150-metre limit is our assumption, so the page shows results with and without it.' },
      { q: 'Can children learn graph algorithms?', a: 'Younger learners explore the idea with maps and mazes; coded searches suit teenagers and adults.' },
      {
        q: 'How many routes serve Southport?',
        a: 'In the Translink feed of 7 October 2026, 19 route names stop inside the Southport outline, including the G:link tram.'
      },
      {
        q: 'Do you have a centre in Southport?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Southport classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are groups formed?',
        a: 'By level and pace, fifteen to twenty learners each, not by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      {
        q: 'Do you teach adults in Southport?',
        a: 'Yes. Working adults have their own groups and private options, and many bring a network or scheduling problem from their job.'
      }
    ]
  },
  next: {
    eyebrow: 'More for Gold Coast learners',
    h2: 'Keep exploring',
    html: 'See the <a class="cg-inline-link" href="/best-coding-classes-in-gold-coast">Gold Coast page</a> for the whole city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland guide</a> for the state, and <a class="cg-inline-link" href="/coding-classes-for-kids-gold-coast">coding for Gold Coast kids</a> for younger learners.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Southport and the Gold Coast',
  footerPlaces: [
    { href: '/ai-classes-for-teens-australia', label: 'AI for teens' },
    { href: '/best-coding-classes-in-gold-coast', label: 'Gold Coast' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-gold-coast', label: 'Kids on the Gold Coast' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-sthp .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-sthp .cg-hero h1 { font-weight: 670; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-sthp .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-sthp .cg-eyebrow { letter-spacing: 0.1em; font-weight: 660; font-size: 0.78rem; }
.cg-root.cg-sthp .cg-section-head h2 { max-width: 20ch; }
.cg-root.cg-sthp .cg-grid-3 { gap: clamp(0.9rem, 2.4vw, 1.65rem); }
.cg-root.cg-sthp .cg-table caption { text-align: left; font-weight: 620; font-size: 0.88rem; }
.cg-root.cg-sthp .cg-table td:nth-child(n+2) { text-align: right; font-variant-numeric: tabular-nums; }
.cg-root.cg-sthp .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-sthp .cg-callout { border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Southport (SAL32611), ABS Census 2021 QuickStats (read 13 October 2026): 36,786 people; median age 37; 8,575 families; 18,451 private dwellings; 2.1 people per household; 1.4 vehicles per dwelling (Queensland 1.9); 2.4 bedrooms; flat or apartment 8,437 (54.6%, Queensland 12.5%); walked to work 993 (5.8%, Queensland 2.6%); bachelor or higher 8,272 (25.4%, Queensland 21.9%); couple families with children 2,310 (26.9%, Queensland 41.2%). ABS SAL area 14.3533 sq km. Translink SEQ GTFS (feed 7 October to 6 December 2026): 140 stop records inside the SAL by our test; 19 route short names (70, 704, 710 to 715, 719, 731, 735, 737 to 742, 747, L1). City of Gold Coast open data (CC BY 3.0): parking signs with suburb SOUTHPORT 1,213, the most of any named suburb; traffic counts with suburb SOUTHPORT 360 (2017 to 2026). Queensland 2027 Term 1 Wednesday 27 January to Thursday 25 March. Brisbane time, no DST since March 1992 (IANA 2026e).',
    localProject: 'Route graph over 162 route_ids touching 1,861 City of Gold Coast stop records (1,824 served; 37 parent stations): routes linked when sharing a stop or with stops within 150 m (haversine, our assumption). BFS from the 36 route_ids (19 names) serving Southport: served stops by fewest transfers 0: 750, 1: 760, 2: 314; max 2. Same-stop links only: 0: 750, 1: 744, 2: 314 (16 fewer reached). Coomera 64 records: 2 transfers 41, 1 transfer 22, 1 parent. Surfers Paradise: 48 direct. Our calculation. Script: scratchpad au/b18/a_sthp.py.',
    requiredMentions: ['36,786', 'Southport routes', '54.6% (8,437)', '5.8% (993)', 'none for 750', '1,824 served', '41 of its 64', '1,213 signs', '150 metres'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Southport (Qld) suburb and locality (SAL32611), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL32611'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      {
        claim: 'City of Gold Coast open data, Parking Signs, Creative Commons Attribution 3.0, queried 13 October 2026.',
        url: 'https://data-goldcoast.opendata.arcgis.com/'
      },
      {
        claim: 'City of Gold Coast open data, Traffic Count, Creative Commons Attribution 3.0, queried 13 October 2026.',
        url: 'https://data-goldcoast.opendata.arcgis.com/'
      },
      {
        claim: 'Queensland Department of Education, future school dates: 2027 Term 1 Wednesday 27 January to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Tuesday 5 October to Friday 10 December.',
        url: 'https://education.qld.gov.au/about-us/calendar/future-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Brisbane follows rule AQ, whose last daylight saving period ended in March 1992.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Travel times or the fastest route: not claimed; the search counts transfers only.',
      'Passenger numbers: not claimed; the feed gives scheduled services.',
      'Parking tariffs and fines: excluded (money).',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Gold Coast, Translink or the Queensland Department of Education.'
    ]
  }
};
