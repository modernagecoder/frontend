'use strict';
// Burleigh Heads, Gold Coast (cg- district page, Australia cluster Phase 8, row 339). Keyword slug best-coding-and-ai-classes-in-*,
// suburb page (ABS SAL30445) in the City of Gold Coast, under Gold Coast and Queensland.
// Spine: an R-tree (sort-tile-recursive bulk load, 16 entries per node, 4 levels) over 11,743 City of Gold Coast points (8,494 parking
// signs, 3,249 play equipment items; CC BY 3.0). For 20 Burleigh Heads stop records (Translink SEQ GTFS), "everything within 400 m"
// costs 234,860 distance checks by linear scan and 323 node visits plus 2,781 candidate checks with the tree; results identical.
// Script: scratchpad au/b18/a_burl.py. Lesson family: R-tree spatial index; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BURLEIGH HEADS',
    label: 'Burleigh Heads, Gold Coast',
    blurb: 'Coding and AI classes for Burleigh Heads, with a spatial index that finds every sign and swing near a stop while checking a tiny fraction of the city.'
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
  slug: 'best-coding-and-ai-classes-in-burleigh-heads-gold-coast',
  code: 'burl',
  accent: '#274B78',
  accentRationale: 'Burleigh Heads: a muted headland navy (hue 213.3, s 0.67, v 0.47), at least 22.5 RGB from every Queensland page accent and all claimed accents, 11.2 from other AU accents and 7.1 from every other site colour; 7.2:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Burleigh Heads',
    eyebrow: 'Burleigh Heads, City of Gold Coast, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Burleigh Heads' },
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
  routeLabel: 'Burleigh Heads, Gold Coast',
  title: 'Best Coding and AI Classes in Burleigh Heads, Gold Coast',
  description: 'Live online coding and AI classes for Burleigh Heads, ages 6 to adult, with a spatial indexing project on 11,743 City of Gold Coast sign and play points.',
  ogDescription: 'Find everything within 400 m of 20 Burleigh Heads stops: 234,860 distance checks the slow way, about 3,100 steps with an R-tree.',
  twitterDescription: 'Coding and AI for Burleigh Heads learners, live online, with the first lesson free.',
  ogImageCourse: 'data-structures-algorithms-masterclass-college',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Burleigh Heads',
    description: 'Algorithms, mapping code and AI lessons for Burleigh Heads children, teenagers and adults, set by level after a free trial.'
  },
  h1: 'Coding and AI classes in Burleigh Heads',
  capsuleQ: 'What marks the best coding and AI classes for Burleigh Heads learners?',
  capsule: 'Projects where speed comes from an idea, not a faster computer. Here learners ask what lies within 400 metres of each of 20 Burleigh Heads stops, among 11,743 council-mapped signs and play items. Checking every point takes 234,860 distance calculations. An R-tree, the index inside mapping software, answers the same questions with about 3,100 steps.',
  lead: 'Burleigh Heads sits at the southern end of the G:link tram line. Nearly half its homes are apartments, and the council maps every parking sign and piece of play equipment around it. Questions like "what is near this stop?" are exactly what spatial indexes were invented for.',
  wa: 'Hi Modern Age Coders, could we book a free coding or AI class for a Burleigh Heads learner?',
  picks: {
    eyebrow: 'Course picks for Burleigh Heads',
    h2: 'Algorithms, maps and AI',
    intro: 'For learners curious about how maps and search engines stay fast. The trial class settles the level.',
    items: [
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Trees, indexes and the cost of every query.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 17', note: 'Tree structures and divide-and-conquer problems.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Mapping real coordinates with Python.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Sorting and grouping puzzles for younger learners.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Burleigh Heads in the Census',
      h2: 'Apartments and home offices by the beach',
      intro: 'From the 2021 Census QuickStats for the Burleigh Heads suburb and locality (ABS SAL30445), read on 13 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Burleigh Heads counts',
          head: ['Measure', 'Value'],
          rows: [
            ['People', '10,572'],
            ['Median age', '42'],
            ['Families', '2,627'],
            ['Private dwellings', '5,786'],
            ['People per household', '2.2'],
            ['Bedrooms per dwelling', '2.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Burleigh Heads shares compared with Queensland',
          head: ['Share', 'Burleigh Heads', 'Queensland'],
          rows: [
            ['Flat or apartment', '46.7% (1,982)', '12.5%'],
            ['Worked at home', '16.7% (893)', '14.1%'],
            ['Professionals among workers', '26.4% (1,410)', '21.4%'],
            ['Separate houses', '39.0% (1,657)', '74.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Coastal living', p: 'Apartments made up nearly half of Burleigh Heads dwellings, almost four times the state share.' },
            { h3: 'Working from home', p: 'One worker in six worked at home on Census day, above the Queensland figure.' },
            { h3: 'Census timing', p: 'That Census took place during the pandemic, so home-working figures may be higher than in a usual week.' }
          ]
        },
        { kind: 'p', text: 'All shares are the bureau\'s own, rounded, with small counts adjusted for privacy; no rows are added up into new totals here.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'An index for "what is nearby?"',
      intro: 'The council publishes coordinates for 8,494 parking signs and 3,249 pieces of play equipment across the Gold Coast. For each of the 20 served stop records in Burleigh Heads, learners list everything within 400 metres. The slow way measures the distance to all 11,743 points every time. The fast way builds an R-tree first.',
      body: [
        {
          kind: 'table',
          caption: 'Work for 20 queries of 400 metres (our calculation)',
          head: ['Method', 'Work done', 'Per query'],
          rows: [
            ['Linear scan of every point', '234,860 distance checks', '11,743'],
            ['R-tree: boxes visited', '323 nodes', 'about 16'],
            ['R-tree: points actually measured', '2,781 candidates', 'about 139']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'How the tree works',
              p: 'Points are grouped into boxes of 16, boxes into bigger boxes, and so on for four levels. A query skips any box that cannot touch its search area.'
            },
            { h3: 'Same answers', p: 'Both methods return exactly the same items for all 20 stops. The R-tree only changes how much work it takes.' },
            { h3: 'Busiest stop', p: 'Around the tram station at Burleigh Heads, one stop record has 320 mapped signs and play items within 400 metres.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Build once, query often',
          p: 'Building the tree means sorting the points, which costs time. It pays off when many questions are asked, as with a mapping app or an AI agent that keeps asking "what is near here?". For a single question, the simple scan can be fine, and learners measure where the break-even lies.'
        },
        {
          kind: 'p',
          text: 'Points come from the City of Gold Coast Parking Signs and Play Equipment layers, CC BY 3.0, queried on 13 October 2026; stops from the Translink SEQ GTFS feed, CC BY 4.0. The tree, distances and counts are our own Python. Inside the ABS outline itself sit 548 signs and 64 play items, by our point-in-polygon test.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Building the index',
      h2: 'Sort, tile, recurse',
      intro: 'Sort-tile-recursive packing builds a balanced R-tree from a fixed set of points in a few lines of Python.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Load the sign and play points and write the linear-scan query.'],
            ['2', 'Sort by longitude into slices, sort each slice by latitude, and group in sixteens.'],
            ['3', 'Repeat on the boxes until one root remains, then write the recursive query.'],
            ['4', 'Check the tree returns the same items as the scan, then count the work.']
          ]
        },
        {
          kind: 'p',
          text: 'A square search box in degrees is not a circle in metres, so the tree returns candidates and the final distance check removes those outside 400 metres. Learners also compute the box width correctly for the Gold Coast\'s latitude, where a degree of longitude is shorter than a degree of latitude.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Sort toy blocks into labelled tubs and find one quickly by checking the tub labels first.' },
            { h3: 'Teenagers', p: 'Build the R-tree in Python and compare its work with the scan.' },
            { h3: 'Adults', p: 'Use spatial indexes in databases and GIS tools for location queries at work.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Burleigh Heads',
      h2: 'Tram, buses and the 2027 calendar',
      intro: 'More Burleigh Heads facts from the Translink feed, council data and the Queensland Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Routes', p: 'In the Translink feed of 7 October 2026, nine route names stop inside the suburb, including the G:link tram.' },
            { h3: 'Signs by suburb', p: 'The council\'s sign list names Burleigh Heads as the suburb for 349 signs.' },
            { h3: 'Term 1, 2027', p: 'Queensland state schools begin on Wednesday 27 January 2027; Term 1 ends Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'Burleigh Heads is the ABS suburb outline of about 10.2 square kilometres. Stops and points inside it come from our own point-in-polygon test.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From toy tubs to spatial indexes',
    intro: 'Ages are a guide; the trial decides.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Group and find',
        p: 'Block-code games about sorting things into groups.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'Coordinates',
        p: 'Python grids, distances and simple maps.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Trees and search',
        p: 'Data structures that make queries fast.',
        courses: ['problem-solving-dsa-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Spatial data',
        p: 'Indexes and algorithms for real systems.',
        courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why learn indexes if AI writes the code?',
    intro: 'Because AI code often scans everything, and that only works on small data.',
    p1: 'Ask an assistant for "things near this stop" and it will usually loop over every point. On 11,743 points that is tolerable; on millions it is not, and the assistant may not mention it.',
    p2: 'A Burleigh Heads learner who has built an R-tree knows to ask for an index, and knows how to check that the faster answer is the same answer.',
    closer: 'In our classes, learners measure the code AI writes before relying on it.',
    blogAnchor: 'why writing code yourself still matters in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Burleigh Heads classes, live online',
    intro: 'Lessons run over video, so learners stay home anywhere in the suburb.',
    cells: [
      { h3: 'Live and guided', p: 'A teacher leads each class in real time and checks the code.' },
      { h3: 'Term-time', p: 'Classes follow Queensland school terms and stop in holidays.' },
      { h3: 'Trial first', p: 'One free class, then a short course recommendation.' },
      { h3: 'Groups', p: 'Five to ten learners at a level, or one-to-one.' },
      { h3: 'Regular', p: 'Two classes each week, roughly eight a month.' },
      { h3: 'Indian time', p: 'A 5:30pm Burleigh Heads class starts at 1pm in India.' }
    ],
    spec: {
      title: 'Fixed offset',
      p: 'The IANA time zone database shows Queensland has had no daylight saving since March 1992, so class times stay fixed against India.'
    }
  },
  fees: {
    h2: 'Burleigh Heads class fees',
    intro: 'One fee table for all learners.',
    first: 'Class one is free and comes with a plan.',
    group: 'Groups: about eight classes a month, five to ten learners.',
    private: 'Private: about eight classes a month with a single teacher.',
    closer: 'Fees are in US dollars, starting once the trial has set a course and a weekly time. The pricing page explains holiday and missed-class rules.'
  },
  reviewsH2: 'Google reviews',
  book: {
    h2: 'Book a free Burleigh Heads lesson',
    intro: 'Tell us the learner\'s age and interests. A child might sort blocks into tubs; a teenager might build the R-tree.',
    success: 'Thank you. We will be in touch about a Burleigh Heads lesson.'
  },
  faq: {
    h2: 'Burleigh Heads coding and AI questions',
    intro: 'Questions from Burleigh Heads families and adult learners.',
    items: [
      { q: 'How many people live in Burleigh Heads?', a: 'The 2021 Census counted 10,572 people in the Burleigh Heads suburb, median age 42.' },
      {
        q: 'What is an R-tree?',
        a: 'A tree of nested boxes used to find things near a place without checking every item. Mapping and database software use it widely.'
      },
      {
        q: 'How much faster was it here?',
        a: 'For 20 stops, the scan made 234,860 distance checks; the tree visited 323 boxes and measured 2,781 candidate points.'
      },
      { q: 'Is building the tree worth it for one query?', a: 'Not always. Building takes work, so the tree pays off when many queries follow.' },
      { q: 'Can children learn this?', a: 'Younger learners explore grouping and searching with games; coding trees suits teenagers and adults.' },
      { q: 'Where does the map data come from?', a: 'From City of Gold Coast open data layers for parking signs and play equipment, CC BY 3.0.' },
      {
        q: 'Do you have a centre in Burleigh Heads?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Burleigh Heads classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are classes grouped?',
        a: 'By level and pace, five to ten learners, not by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Do you teach adults?', a: 'Yes. Adults study in their own groups or privately, often working with location data.' }
    ]
  },
  next: {
    eyebrow: 'More for Gold Coast learners',
    h2: 'Continue',
    html: 'Southern Gold Coast learners can read the <a class="cg-inline-link" href="/best-coding-classes-in-gold-coast">Gold Coast page</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland guide</a> and <a class="cg-inline-link" href="/coding-classes-for-kids-gold-coast">coding for Gold Coast children</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Burleigh Heads and the Gold Coast',
  footerPlaces: [
    { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Think, not just use AI' },
    { href: '/best-coding-classes-in-gold-coast', label: 'Gold Coast' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-gold-coast', label: 'Kids on the Gold Coast' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-burl .cg-hero-grid { align-items: end; gap: clamp(1.25rem, 3.1vw, 2.45rem); }
.cg-root.cg-burl .cg-hero h1 { font-weight: 645; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-burl .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-burl .cg-eyebrow { letter-spacing: 0.12em; font-weight: 625; font-size: 0.77rem; }
.cg-root.cg-burl .cg-section-head h2 { max-width: 22ch; }
.cg-root.cg-burl .cg-grid-3 { gap: clamp(0.85rem, 2.2vw, 1.5rem); }
.cg-root.cg-burl .cg-table caption { text-align: left; font-weight: 630; font-size: 0.89rem; }
.cg-root.cg-burl .cg-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.cg-root.cg-burl .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-burl .cg-callout { border-radius: 8px; border-left-width: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Burleigh Heads (SAL30445), ABS Census 2021 QuickStats (read 13 October 2026): 10,572 people; median age 42; 2,627 families; 5,786 private dwellings; 2.2 people per household; 2.7 bedrooms; flat or apartment 1,982 (46.7%, Queensland 12.5%); separate houses 1,657 (39.0%, Queensland 74.8%); worked at home 893 (16.7%, Queensland 14.1%); professionals 1,410 (26.4%, Queensland 21.4%). ABS SAL area 10.235 sq km. Translink SEQ GTFS (feed 7 October to 6 December 2026): 22 stop records in the SAL by our test (20 served); 9 route names (70, 700, 701, 753, 754, 756, 757, 777, L1). City of Gold Coast (CC BY 3.0, 13 October 2026): parking signs with suburb BURLEIGH HEADS 349; inside the SAL by our test 548 signs and 64 play equipment items. Queensland 2027 Term 1 Wednesday 27 January to Thursday 25 March. Brisbane time, no DST since March 1992 (IANA 2026e).',
    localProject: 'Sort-tile-recursive R-tree, node capacity 16, 4 levels, over 11,743 points (8,494 parking signs with geometry, 3,249 play equipment items). 20 queries, one per served Burleigh Heads stop record, radius 400 m (degree box then haversine filter): linear scan 234,860 distance checks; tree 323 node visits and 2,781 candidate point checks (16.1 and 139.1 per query); identical results asserted. Most within 400 m: Burleigh Heads station, stop B, 320. Our calculation. Script: scratchpad au/b18/a_burl.py.',
    requiredMentions: ['10,572', '5,786', '46.7% (1,982)', '16.7% (893)', '234,860', '2,781 candidate', '323 boxes', '548 signs', '320 mapped signs'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Burleigh Heads suburb and locality (SAL30445), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL30445'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'City of Gold Coast open data, Parking Signs, Creative Commons Attribution 3.0, queried 13 October 2026.',
        url: 'https://data-goldcoast.opendata.arcgis.com/'
      },
      {
        claim: 'City of Gold Coast open data, Play Equipment, Creative Commons Attribution 3.0, queried 13 October 2026.',
        url: 'https://data-goldcoast.opendata.arcgis.com/'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
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
      'Claims that any mapping product uses this exact tree: not made; R-trees are described generally.',
      'Parking tariffs: excluded (money).',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Gold Coast, Translink or the Queensland Department of Education.'
    ]
  }
};
