'use strict';
// The Gap, Brisbane (cg- district page, Australia cluster Phase 8, row 291). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), suburb page (ABS SAL32790, The Gap (Brisbane - Qld), City of Brisbane) under
// Brisbane and Queensland.
// Spine: Brisbane City Council's suburbs-and-adjoining-suburbs table as a graph. Every border is listed from both
// sides, so the degree sum must equal twice the number of borders (the handshake lemma); The Gap has degree 8.
// Data: BCC open data (CC BY 4.0). Our measurements (scratchpad au/b12): 1,066 rows, 194 suburbs, 533 borders,
// 104 odd-degree suburbs, 0 one-way rows, 0 self-loops.
// Lesson family: handshake lemma and degree sequences; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'THE GAP',
    label: 'The Gap, Brisbane',
    blurb: 'Coding and AI classes for The Gap, with a graph of Brisbane suburb borders that checks itself: every border counted twice, so the degrees must add to an even number.'
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
  slug: 'best-coding-and-ai-classes-in-the-gap-brisbane',
  code: 'tgap',
  accent: '#2B4E22',
  accentRationale: 'The Gap: a deep forest green for the bushland valley (hue 107.7), 7.69:1 on #EDE7DA; 26.2 RGB from the nearest Queensland accent, 13.9 from any other Australian accent and 8.2 from every other site colour',
  pageType: 'city',
  place: {
    name: 'The Gap',
    eyebrow: 'The Gap, City of Brisbane, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'The Gap' },
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
  routeLabel: 'The Gap, Brisbane',
  title: 'Best Coding and AI Classes in The Gap, Brisbane',
  description: 'Live online coding and AI classes for learners in The Gap aged 6 to 67, from Scratch to Python, graphs and algorithms, in groups or one to one. First lesson free.',
  ogDescription: 'A coding project for The Gap: 194 Brisbane suburbs, 533 shared borders, and a counting rule that proves the council table has no one-way entries.',
  twitterDescription: 'Coding and AI for The Gap, live online, with a free first lesson.',
  ogImageCourse: 'data-structures-algorithms-masterclass-college',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for The Gap',
    description: 'Level-matched online coding, algorithms and AI lessons for children, teenagers and adults in The Gap, Brisbane, taught live in English.'
  },
  h1: 'Coding and AI classes in The Gap',
  capsuleQ: 'Where do learners in The Gap find the best coding and AI classes?',
  capsule: 'Online, in live small-group or one-to-one lessons that start with Scratch at six and move through Python to algorithms and AI for teenagers and adults. Projects use real Brisbane data. The Gap held 17,318 residents in the 2021 Census, with a median age of 42.',
  lead: 'Brisbane City Council publishes a table of which suburbs touch which. The Gap appears in it with eight neighbours, from Ashgrove to Upper Kedron. Treat the table as a graph and a two-line counting rule tells you, before any map is drawn, whether the file is internally consistent.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in The Gap.',
  picks: {
    eyebrow: 'Course picks for The Gap',
    h2: 'Courses that turn counting into code',
    intro: 'The suburb-border graph needs loops, dictionaries and a feel for proof. These four courses build that, and the free trial lesson places each learner.',
    items: [
      {
        course: 'data-structures-algorithms-masterclass-college',
        band: 'University and adult',
        note: 'Graphs, adjacency lists and the invariants that let you trust a dataset.'
      },
      {
        course: 'problem-solving-dsa-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Algorithm problems with proofs written out, not just accepted answers.'
      },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first loops to reading and checking real CSV files.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Early Python and AI projects built in short, testable steps.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The Gap in the Census',
      h2: 'A valley of family homes below the ranges',
      intro: 'Figures from the 2021 Census QuickStats for the suburb of The Gap (ABS code SAL32790), set beside the Queensland figure where the bureau publishes one.',
      body: [
        {
          kind: 'table',
          caption: 'The Gap at a glance, 2021',
          head: ['Measure', 'The Gap'],
          rows: [
            ['Residents', '17,318'],
            ['Median age', '42'],
            ['Families', '4,978'],
            ['Private dwellings', '6,230'],
            ['People per household', '2.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The Gap set against Queensland',
          head: ['Indicator', 'The Gap', 'Queensland'],
          rows: [
            ['Separate houses', '92.0% (5,438)', '74.8%'],
            ['Flats or apartments', '0.9% (54)', '12.5%'],
            ['Workers who caught a bus to work', '4.8% (419)', '1.7%'],
            ['Adults with a bachelor degree or higher', '44.8% (6,115)', '21.9%'],
            ['Employed people working as professionals', '38.5% (3,399)', '21.4%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'School-age residents', p: 'Children aged 5 to 9 numbered 1,254, and those aged 10 to 14 numbered 1,566, the larger of the two bands.' },
            { h3: 'Working from home', p: 'On Census day, 29.5% of employed residents, 2,605 people, worked at home, against 14.1% across Queensland.' },
            { h3: 'A large suburb', p: 'The ABS boundary encloses about 12.5 square kilometres, and Brisbane City Council lists 46 parks within it.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau perturbs small Census cells slightly to protect privacy, so each figure is quoted as published and none are added up into new totals.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Every border counted twice',
      intro: 'The council table has one row per pair: a suburb and a suburb it adjoins. If The Gap touches Bardon, the file should contain both "The Gap, Bardon" and "Bardon, The Gap". That symmetry gives a free test of the whole file.',
      body: [
        {
          kind: 'table',
          caption: 'The adjacency table as a graph (our calculation)',
          head: ['Quantity', 'Value'],
          rows: [
            ['Rows in the file', '1,066'],
            ['Distinct suburbs (vertices)', '194'],
            ['Distinct borders (edges)', '533'],
            ['Sum of all suburb degrees', '1,066, exactly twice 533'],
            ['Rows with no matching reverse row', '0'],
            ['Suburbs listed as adjoining themselves', '0']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How many neighbours Brisbane suburbs have (our calculation)',
          head: ['Neighbours', 'Suburbs'],
          rows: [
            ['1 or 2', '9'],
            ['3 or 4', '38'],
            ['5', '54'],
            ['6', '44'],
            ['7', '29'],
            ['8, including The Gap', '11'],
            ['9 to 11', '9']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The handshake lemma',
              p: 'Each border adds one to the degree of both suburbs it joins, so the degrees must sum to twice the number of borders. Here 1,066 equals 2 times 533.'
            },
            {
              h3: 'An even number of odd ones',
              p: 'A consequence: the count of suburbs with an odd number of neighbours must be even. We found 104 such suburbs, which passes.'
            },
            {
              h3: 'The Gap\'s eight',
              p: 'Ashgrove, Bardon, Brookfield, Enoggera, Enoggera Reservoir, Keperra, Mount Coot-tha and Upper Kedron. Nine suburbs have more neighbours; Fig Tree Pocket tops the list with 11.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'What a broken file would look like',
          p: 'Delete a single row, say "Keperra, The Gap", and the degree sum drops to 1,065. An odd total is impossible for a real border list, so the lemma flags the damage instantly, and comparing each row with its reverse then finds the exact line. Counting rows as borders, a common slip, would claim 1,066 borders when there are 533.'
        },
        {
          kind: 'p',
          text: 'The adjacency file and the suburb names are Brisbane City Council open data. The vertex, edge and degree counts, the symmetry check and the distribution are our calculation. The table covers suburbs inside Brisbane City Council only, so a border with a suburb in a neighbouring council does not appear in it.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Coding the check',
      h2: 'From a CSV of pairs to a proof',
      intro: 'The whole test fits in a few lines of Python, and each line is a separate idea a learner can explain.',
      body: [
        {
          kind: 'table',
          caption: 'Steps, with what each one found for Brisbane',
          head: ['Step', 'Python idea', 'Result here'],
          rows: [
            ['Read the pairs', 'csv.DictReader over the file', '1,066 rows'],
            ['Make borders unordered', 'tuple(sorted((a, b))) in a set', '533 distinct borders'],
            ['Count degrees', 'collections.Counter of the first column', 'The Gap scores 8'],
            ['Test the lemma', 'sum(degrees) == 2 * len(borders)', 'True: 1,066 and 1,066'],
            ['Find one-way rows', '(b, a) not in the set of rows', 'None found']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Draw five friends and the handshakes between them, then count hands shaken two ways and see the totals agree.' },
            { h3: 'Secondary learners', p: 'Write the degree counter, prove the lemma in a sentence, and break the file on purpose to watch the test fail.' },
            { h3: 'Adults', p: 'Apply the same symmetry test to any table of relationships at work, such as linked records or two-way referrals.' }
          ]
        },
        {
          kind: 'p',
          text: 'The lemma is a necessary condition, not a sufficient one: a file could pass while listing a wrong but symmetric pair. Learners see where a cheap invariant stops and a real check against a map has to take over.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around The Gap',
      h2: 'Bus routes, bushland and 46 council parks',
      intro: 'Markers that set The Gap apart from its neighbours, drawn from the transit timetable, council parks data and the Queensland school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Buses only',
              p: 'By our boundary check, 76 Translink stop records lie inside the suburb, and on Wednesday 21 October 2026 they carry 3,601 scheduled bus stop visits on 7 routes. No train serves the suburb.'
            },
            {
              h3: 'Along Waterworks Road',
              p: 'The busiest stop record that Wednesday is Waterworks Rd at Payne Road, stop 31, with 165 scheduled visits; the first departure is at 5:09am.'
            },
            {
              h3: 'Term 4, 2027',
              p: 'Queensland state schools run Term 4 of 2027 from Tuesday 5 October to Friday 10 December, so lessons pause for summer after that.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Suburb, not district',
          p: 'The Brisbane City Council park list places 46 parks in The Gap. That count, like every figure here, covers the suburb alone; Ashgrove, Bardon, Keperra and the other neighbours have their own Census and transit figures, and none are folded into these.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting handshakes to graph algorithms',
    intro: 'Ages are a guide only; the trial lesson decides the starting rung.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and patterns',
        p: 'Games and puzzles that train careful, step-by-step reasoning.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and maths',
        p: 'Loops, lists and counting problems solved in code.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Algorithms',
        p: 'Graphs, searching and proofs behind contest-style problems.',
        courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course']
      },
      {
        band: 'University and adult',
        h3: 'Data structures',
        p: 'Graph algorithms and data checks for study or work.',
        courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant can parse the file. Who checks it?',
    intro: 'A learner who knows the invariant. AI tools load a CSV in a second, but they rarely stop to ask whether its contents are consistent.',
    p1: 'Ask a chatbot how many suburb borders Brisbane has and it may simply count rows and answer 1,066, twice the truth. It sounds sure because the code ran. Nothing in the output warns that each border was listed from both ends.',
    p2: 'Learners who have proved the handshake lemma for themselves catch that slip at once and know a quick test to prove it. That is the habit worth building now: let the tool do the typing, and keep the reasoning yourself.',
    closer: 'In The Gap, the learner who checks the count is the one an AI tool cannot fool.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons reach The Gap',
    intro: 'Each class is live on video, so a learner joins from home anywhere between Payne Road and the reservoir.',
    cells: [
      { h3: 'Code on a shared screen', p: 'The learner types; the teacher reads along and asks why each line is there.' },
      { h3: 'Queensland terms', p: 'Plans follow the state school calendar, with breaks in the holidays.' },
      { h3: 'A first lesson free', p: 'A full trial class with real content, ending in a clear recommendation.' },
      { h3: 'Groups of five to ten', p: 'Learners matched by level and pace, or taught one to one.' },
      { h3: 'Two classes weekly', p: 'Set times each week, about eight lessons in a month.' },
      { h3: 'Teachers in India', p: 'A 4:30pm lesson in The Gap starts at 12 noon India time, and that gap never moves.' }
    ],
    spec: {
      title: 'No clock changes',
      p: 'Queensland has not used daylight saving since March 1992 (IANA time zone database), and India does not use it either, so a lesson time agreed in Brisbane time stays fixed all year.'
    }
  },
  fees: {
    h2: 'Fees for The Gap',
    intro: 'The same three prices for every family.',
    first: 'The first lesson is free and comes with a written suggestion for what to do next.',
    group: 'A month of group classes, usually eight, with five to ten learners at a matched level.',
    private: 'About eight lessons a month with one teacher for one learner.',
    closer: 'Families in The Gap pay in US dollars, and only after the trial, once a course and a weekly time are settled. Rules for holidays, missed lessons and switching formats sit on the pricing page.'
  },
  reviewsH2: 'What families and learners say on Google',
  book: {
    h2: 'Book a first lesson in The Gap',
    intro: 'Tell us the learner\'s age and what interests them. A teenager might start by loading the suburb-border file and testing the lemma; a younger child might begin with a Scratch maze.',
    success: 'Thank you. We will be in touch soon about a lesson for The Gap.'
  },
  faq: {
    h2: 'Questions from The Gap',
    intro: 'What families and adult learners in The Gap tend to ask first.',
    items: [
      {
        q: 'How many people live in The Gap?',
        a: 'The 2021 Census QuickStats record 17,318 residents in the suburb of The Gap, with 4,978 families and a median age of 42.'
      },
      {
        q: 'What is the handshake lemma?',
        a: 'A rule from graph theory: in any network, the degrees of all the points add up to twice the number of links, because every link has two ends. It follows that an even number of points have an odd degree.'
      },
      {
        q: 'What is the degree of a vertex?',
        a: 'The number of edges that meet at it. In the Brisbane suburb graph a suburb\'s degree is how many suburbs it adjoins; The Gap\'s degree is 8.'
      },
      {
        q: 'What did the Brisbane border check find?',
        a: 'The council file has 1,066 rows describing 533 borders among 194 suburbs. The degrees sum to 1,066, every row has its reverse, and 104 suburbs have an odd number of neighbours.'
      },
      {
        q: 'What age can my child start coding?',
        a: 'From six, with Scratch blocks and puzzles. Typed Python usually begins between eight and ten, when reading and typing feel comfortable.'
      },
      {
        q: 'Can teenagers use Claude in your courses?',
        a: 'No. Claude-based courses are for learners aged 18 and over only; younger students work with other AI tools.'
      },
      {
        q: 'Is there a classroom in The Gap?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for The Gap learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Is Copilot Studio taught in groups?', a: 'No. Copilot Studio is taught one to one only; group learners build their agents in Python instead.' }
    ]
  },
  next: {
    eyebrow: 'Explore Brisbane and Queensland',
    h2: 'More for learners in The Gap',
    html: 'The <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">Brisbane guide</a> covers the whole city, and <a class="cg-inline-link" href="/coding-classes-for-kids-brisbane">coding for Brisbane children</a> focuses on younger learners. North of the ranges, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-moreton-bay">Moreton Bay</a> has its own page, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">the Queensland guide</a> links every region.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'The Gap and Brisbane',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/online-coding-and-python-classes-in-moreton-bay', label: 'Moreton Bay' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' }
  ],
  personalityCss: `
.cg-root.cg-tgap .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.4vw, 2.6rem); }
.cg-root.cg-tgap .cg-hero h1 { font-weight: 640; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-tgap .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.55rem 0 0.55rem 1.1rem; }
.cg-root.cg-tgap .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-tgap .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.01em; }
.cg-root.cg-tgap .cg-grid-3 { gap: clamp(0.85rem, 2.2vw, 1.7rem); }
.cg-root.cg-tgap .cg-table caption { font-weight: 650; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-tgap .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tgap .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-tgap .cg-callout { border-left-width: 6px; border-radius: 2px; }
`,
  dossier: {
    curriculumAuthority: 'The Gap (SAL32790, The Gap (Brisbane - Qld)), ABS Census 2021 QuickStats (read 12 October 2026): 17,318 people; median age 42; 4,978 families; 6,230 private dwellings; 2.9 per household; separate houses 5,438 (92.0%, Qld 74.8%); flats 54 (0.9%, Qld 12.5%); bus to work 419 (4.8%, Qld 1.7%); bachelor or higher 6,115 (44.8%, Qld 21.9%); professionals 3,399 (38.5%, Qld 21.4%); worked at home 2,605 (29.5%, Qld 14.1%); aged 5-9 1,254; 10-14 1,566. ABS SAL area 12.5152 sq km. Translink SEQ GTFS (feed 7 Oct to 6 Dec 2026), Wednesday 21 October 2026: 76 stop records inside the SAL polygon (our point-in-polygon); 3601 scheduled stop visits, all bus; 7 routes (362, 380, 381, 382, 383, 384, 385); busiest Waterworks Rd at Payne Road, stop 31 (165); first departure 05:09. BCC Park Locations: 46 parks with suburb THE GAP. BCC Street Names: 281 street rows for THE GAP. Qld 2027 Term 4: Tuesday 5 October to Friday 10 December. Brisbane: no daylight saving since March 1992 (IANA).',
    localProject: 'Handshake lemma on BCC Suburbs and Adjoining Suburbs (CC BY 4.0, modified 18 Nov 2025): 1,066 rows; 194 vertices; 533 undirected edges (unordered pairs); degree sum 1,066 = 2 x 533; 0 rows without reverse; 0 self-loops; 104 odd-degree vertices (even); mean degree 5.49, median 5, min 1 (5 suburbs), max 11 (Fig Tree Pocket). Distribution: deg1 5, deg2 4, deg3 11, deg4 27, deg5 54, deg6 44, deg7 29, deg8 11, deg9 4, deg10 4, deg11 1. The Gap degree 8: Ashgrove, Bardon, Brookfield, Enoggera, Enoggera Reservoir, Keperra, Mount Coot-tha, Upper Kedron; 9 suburbs above 8. Graph covers BCC suburbs only (no cross-council borders). Script: scratchpad au/b12 (inline python on raw/adj.csv).',
    requiredMentions: ['17,318', '4,978', '6,230', '1,566', 'Enoggera Reservoir', 'Waterworks Rd at Payne Road', 'handshake lemma', '104 such suburbs', '533 borders'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, The Gap (Brisbane - Qld) suburb and locality (SAL32790), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL32790'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities boundary service, used for our point-in-boundary checks and suburb areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Brisbane City Council open data, Suburbs and Adjoining Suburbs (Creative Commons Attribution 4.0), dataset last modified 18 November 2025.',
        url: 'https://data.brisbane.qld.gov.au/explore/dataset/suburbs-and-adjoining-suburbs/'
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
        claim: 'Leonhard Euler (1741), Solutio problematis ad geometriam situs pertinentis, Commentarii academiae scientiarum Petropolitanae 8, 128-140, the origin of the degree-sum argument; Euler Archive E53.',
        url: 'https://scholarlycommons.pacific.edu/euler-works/53/'
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
      'That The Gap borders no suburb outside Brisbane City Council: not claimed; the council table cannot show cross-council borders.',
      'Passenger numbers at The Gap stops: not claimed; the timetable gives scheduled stop visits, not people.',
      'Any reason for the high share of graduates or home workers: not claimed.',
      'Any pandemic effect on the 2021 home-working figure: not claimed.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Brisbane City Council, Translink or the Queensland Department of Education.'
    ]
  }
};
