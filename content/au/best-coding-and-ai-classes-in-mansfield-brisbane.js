'use strict';
// Mansfield, Brisbane (cg- district page, Australia cluster Phase 8, row 295). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), suburb page (ABS SAL31752, Mansfield (Qld), City of Brisbane) under Brisbane and
// Queensland.
// Spine: does the street name determine the bin collection day in Mansfield? A group-by into sets shows the
// functional dependency street -> day fails on 5 of 124 streets, while (street, house number) -> day holds.
// Data: BCC Waste Collection Days (CC BY 4.0, modified 8 Sep 2026), 3,402 Mansfield property rows; counts only, no
// addresses published. Our measurements: scratchpad au/b12 (inline python on raw/waste_mnsf.csv).
// Lesson family: functional dependency check with group-by sets; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MANSFIELD',
    label: 'Mansfield, Brisbane',
    blurb: 'Coding and AI classes for Mansfield, with a data test that asks whether a street name is enough to know bin day, and finds five streets where it is not.'
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
  slug: 'best-coding-and-ai-classes-in-mansfield-brisbane',
  code: 'mnsf',
  accent: '#9E3318',
  accentRationale: 'Mansfield: a brick red (hue 12.1), 5.80:1 on #EDE7DA; 23.1 RGB from the nearest Queensland accent, 11.4 from any other Australian accent and 7.3 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Mansfield',
    eyebrow: 'Mansfield, City of Brisbane, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Mansfield' },
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
  routeLabel: 'Mansfield, Brisbane',
  title: 'Best Coding and AI Classes in Mansfield, Brisbane',
  description: 'Live online coding and AI classes for Mansfield learners aged 6 to 67: Scratch, Python, databases and AI projects on real council data, in groups or one to one.',
  ogDescription: 'A Mansfield data project: 3,402 property rows, 124 streets, and the five streets where knowing the street name does not tell you bin day.',
  twitterDescription: 'Coding and AI for Mansfield learners, live online, first lesson free.',
  ogImageCourse: 'mysql-database-complete-masterclass-college',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Mansfield',
    description: 'Level-matched online coding, database and AI lessons for children, teenagers and adults in Mansfield, Brisbane, taught live in English.'
  },
  h1: 'Coding and AI classes in Mansfield',
  capsuleQ: 'Where can Mansfield learners find the best coding and AI classes?',
  capsule: 'In live online lessons, small-group or one to one, running from Scratch at age six to Python, databases and AI for teenagers and adults, with projects on real Brisbane data. The 2021 Census counted 8,851 people in the suburb of Mansfield, with a median age of 39.',
  lead: 'Brisbane City Council publishes a bin collection day for every property. In Mansfield that is 3,402 rows, two collection days and 124 street names. It is tempting to assume one street means one day. A few lines of grouping code test that assumption properly, and it fails in exactly five places.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Mansfield.',
  picks: {
    eyebrow: 'Course picks for Mansfield',
    h2: 'Courses that make data rules testable',
    intro: 'The bin-day project needs grouping, sets and a feel for database design. These courses teach those skills; the trial lesson matches the level.',
    items: [
      {
        course: 'mysql-database-complete-masterclass-college',
        band: 'University and adult',
        note: 'Tables, keys and the dependencies that decide good database design.'
      },
      { course: 'mysql-mastery-for-teens', band: 'Ages 13 to 17', note: 'SQL queries, grouping and table design taught through real datasets.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python dictionaries, sets and files, the tools behind the check.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First typed Python, with sorting and grouping games.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Mansfield in the Census',
      h2: 'A suburb of separate houses and teenagers',
      intro: 'Key 2021 Census QuickStats for the suburb of Mansfield (ABS code SAL31752), alongside the Queensland figure.',
      body: [
        {
          kind: 'table',
          caption: 'Mansfield key counts, 2021',
          head: ['Measure', 'Mansfield'],
          rows: [
            ['Residents', '8,851'],
            ['Median age', '39'],
            ['Families', '2,451'],
            ['Private dwellings', '3,102'],
            ['People per household', '3']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Mansfield next to Queensland',
          head: ['Indicator', 'Mansfield', 'Queensland'],
          rows: [
            ['Separate houses', '93.1% (2,733)', '74.8%'],
            ['Workers taking a bus to work', '5.4% (231)', '1.7%'],
            ['Employed residents working from home', '18.6% (791)', '14.1%'],
            ['Adults with a bachelor degree or above', '32.3% (2,260)', '21.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Older children', p: 'Residents aged 10 to 14 numbered 809 and those aged 15 to 19 numbered 751, against 644 aged 5 to 9.' },
            { h3: 'Family homes', p: 'Households averaged 3 people, and the Census counted 2,451 families.' },
            { h3: 'A small suburb', p: 'The ABS boundary of Mansfield covers about 4.9 square kilometres.' }
          ]
        },
        {
          kind: 'p',
          text: 'Census cells are lightly perturbed by the bureau to protect privacy, so we print each figure as published and never add them up into new totals.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Does the street decide bin day?',
      intro: 'A functional dependency is a rule of the form "if two rows share A, they share B". We tested street name to collection day on every Mansfield property in the council file, by grouping the rows by street and collecting the set of days seen for each.',
      body: [
        {
          kind: 'table',
          caption: 'The Mansfield collection file (our counts)',
          head: ['Quantity', 'Value'],
          rows: [
            ['Property rows', '3,402'],
            ['Rows collected on Wednesday', '2,131'],
            ['Rows collected on Friday', '1,271'],
            ['Distinct street names', '124'],
            ['Streets with only one day', '119'],
            ['Streets with both days', '5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The five streets that break the rule (our counts)',
          head: ['Street', 'Wednesday rows', 'Friday rows'],
          rows: [
            ['Aminya Street', '27', '11'],
            ['Broadwater Road', '39', '136'],
            ['Cresthaven Drive', '25', '23'],
            ['Luprena Street', '22', '18'],
            ['Wecker Road', '64', '96']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Street alone fails',
              p: 'The set of days for each of those five streets has two members, so the dependency street to day does not hold for Mansfield.'
            },
            {
              h3: 'Street plus number holds',
              p: 'Grouping by street, house number and any number suffix instead gives 3,127 keys, every one with a single day. That is the dependency the data actually supports.'
            },
            {
              h3: 'Sides of the road',
              p: 'On Cresthaven Drive and Luprena Street the split follows odd and even numbers exactly. On the other three it does not, so a side-of-road rule would also be wrong.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'What a shortcut costs',
          p: 'Build a street-to-day lookup from the first row seen for each street and 286 properties get the wrong day. Use each street\'s most common day and 155 still do. Both lookups look sensible and both pass for 119 streets, which is why the dependency has to be tested, not assumed.'
        },
        {
          kind: 'p',
          text: 'Collection days come from Brisbane City Council open data. The grouping, the set sizes, the key counts and the lookup error counts are our calculation. We publish counts and street names only, never individual addresses. Every Mansfield row sits in the same collection zone.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Data rules in code',
      h2: 'Testing a dependency in four lines',
      intro: 'The check is the same in Python and in SQL, and both versions teach how databases avoid storing a fact in the wrong place.',
      body: [
        {
          kind: 'table',
          caption: 'The check, two ways',
          head: ['Step', 'Python', 'SQL'],
          rows: [
            ['Group rows', 'defaultdict(set) keyed by street', 'GROUP BY street_name'],
            ['Collect the B values', 'days[street].add(day)', 'COUNT(DISTINCT collection_day)'],
            ['Find violations', 'streets whose set has 2 or more days', 'HAVING COUNT(DISTINCT ...) > 1'],
            ['Mansfield result', '5 streets', '5 rows returned']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Sort picture cards into groups and spot the group where two different answers turn up.' },
            { h3: 'Secondary learners', p: 'Write the set-based check, run it on the council file, then design a table where bin day cannot be stored wrongly.' },
            { h3: 'Adults', p: 'Test the rules your spreadsheets silently assume, such as one manager per team, before building reports on them.' }
          ]
        },
        {
          kind: 'p',
          text: 'In database terms, storing bin day once per street would be a design error for Mansfield: five streets need it per property. Finding the right key before building the table is exactly what normalisation is for.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Mansfield',
      h2: 'The same five streets carry the buses',
      intro: 'Local markers from the timetable feed, the council park register and the Queensland school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Stops and visits',
              p: 'By our boundary check, 44 Translink stop records in Mansfield had 2,459 scheduled bus visits on 9 routes on Wednesday 21 October 2026.'
            },
            {
              h3: 'Busiest stops',
              p: 'Wecker Rd at Wecker Road stop 62, Aminya St at Mansfield stop 67a and Cresthaven Dr at Cresthaven stop 74 tied with 123 visits each, on three of the five split streets.'
            },
            { h3: 'Term 3, 2027', p: 'Queensland state schools close Term 3 of 2027 on Friday 17 September and return for Term 4 on Tuesday 5 October.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Mansfield figures only',
          p: 'The council park register lists 14 parks in Mansfield. All figures here are for the suburb itself; Carindale, Carina Heights, Mackenzie, Mount Gravatt East, Rochedale, Upper Mount Gravatt and Wishart border it and keep their own separate numbers.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting cards to designing databases',
    intro: 'Ages give a rough guide; the trial lesson places the learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and sorting',
        p: 'Games and puzzles about groups, order and rules.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python basics',
        p: 'Lists, sets and dictionaries through small projects.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Data and SQL',
        p: 'Queries, grouping and clean table design.',
        courses: ['mysql-mastery-for-teens', 'python-complete-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Databases and AI',
        p: 'Database design and data work for study or jobs.',
        courses: ['mysql-database-complete-masterclass-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can design the table. Will it pick the right key?',
    intro: 'Only if someone checks the dependency it assumes. AI tools design schemas quickly and plausibly.',
    p1: 'Ask an assistant to design a table for bin days and it may well suggest storing the day against each street. For 119 Mansfield streets that works. For Aminya Street, Broadwater Road, Cresthaven Drive, Luprena Street and Wecker Road it would put hundreds of households on the wrong day.',
    p2: 'Learners who have run the set check themselves ask the right question of any AI design: what rule does this table assume, and does the data obey it? That question turns AI from a guesser into a fast assistant.',
    closer: 'In Mansfield, the learner who tests the rule is the one who can trust the database.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Mansfield classes work',
    intro: 'Everything happens live on video, so learners join from home with no travel.',
    cells: [
      { h3: 'Code together', p: 'The learner writes the queries and code while the teacher follows on the shared screen.' },
      { h3: 'Term planning', p: 'Lessons fit Queensland school terms and stop for the holidays.' },
      { h3: 'No-cost trial', p: 'One full lesson free, with a written recommendation afterwards.' },
      { h3: 'Fifteen to twenty per group', p: 'Learners grouped by level and pace; one to one also available.' },
      { h3: 'Two a week', p: 'Regular weekly slots, about eight lessons a month.' },
      { h3: 'India time', p: 'With teachers in India, a 5:30pm Mansfield class starts at 1pm India time, the whole year round.' }
    ],
    spec: {
      title: 'A steady timetable',
      p: 'Queensland has not changed its clocks since March 1992 (IANA time zone database) and India keeps one time all year, so lesson times stay put.'
    }
  },
  fees: {
    h2: 'Mansfield class fees',
    intro: 'Three prices for every learner.',
    first: 'Lesson one is free and ends with a clear course suggestion.',
    group: 'Group classes: close to eight lessons a month with fifteen to twenty learners at one level.',
    private: 'Private classes: close to eight lessons a month with one dedicated teacher.',
    closer: 'Mansfield families pay in US dollars, and only after the trial, once a course and time are fixed. The pricing page sets out holidays, absences and changes of format.'
  },
  reviewsH2: 'Learners and parents on Google',
  book: {
    h2: 'Book a free Mansfield lesson',
    intro: 'Tell us the learner\'s age and interests. A teenager might start by testing the bin-day rule in Python; a younger child might start sorting sprites in Scratch.',
    success: 'Thank you. We will contact you soon about a Mansfield lesson.'
  },
  faq: {
    h2: 'Mansfield coding and AI questions',
    intro: 'Questions Mansfield parents and adult learners ask most.',
    items: [
      {
        q: 'How many people live in Mansfield, Brisbane?',
        a: 'The 2021 Census QuickStats record 8,851 residents in the suburb of Mansfield, with 2,451 families and 3,102 private dwellings.'
      },
      {
        q: 'What is a functional dependency?',
        a: 'A rule saying one set of columns determines another: whenever two rows agree on the first, they agree on the second. Database design uses these rules to decide which facts belong in which table.'
      },
      {
        q: 'How do you test a functional dependency in Python?',
        a: 'Group the rows by the determining column and collect the dependent values in a set for each group. Any group whose set holds more than one value is a violation.'
      },
      {
        q: 'What did the Mansfield bin-day test find?',
        a: 'Across 3,402 property rows on 124 streets, 5 streets have both Wednesday and Friday collections, so street does not determine bin day. Street plus house number does, for all 3,127 keys.'
      },
      { q: 'What age can children start coding?', a: 'Six is a good start, with Scratch games. Typed Python usually follows between eight and ten.' },
      { q: 'Can teenagers learn with Claude?', a: 'No. Our Claude-based courses accept learners aged 18 and over only; younger students use other AI tools.' },
      {
        q: 'Is there a classroom in Mansfield?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Mansfield learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Is Copilot Studio taught in group classes?', a: 'No. Copilot Studio is one to one only; group learners build agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Brisbane and Queensland',
    h2: 'More for Mansfield learners',
    html: 'For the whole city, see <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">the Brisbane guide</a>; for younger learners, <a class="cg-inline-link" href="/coding-classes-for-kids-brisbane">coding for Brisbane children</a>. Families heading south may like <a class="cg-inline-link" href="/best-coding-classes-in-gold-coast">the Gold Coast page</a>, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">the Queensland guide</a> lists the rest.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Mansfield and Brisbane',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/best-coding-classes-in-gold-coast', label: 'Gold Coast' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' }
  ],
  personalityCss: `
.cg-root.cg-mnsf .cg-hero-grid { align-items: start; gap: clamp(0.9rem, 2.8vw, 2.2rem); }
.cg-root.cg-mnsf .cg-hero h1 { font-weight: 680; letter-spacing: -0.019em; line-height: 1.05; }
.cg-root.cg-mnsf .cg-capsule { border-left: 6px solid var(--cg-accent); padding: 0.45rem 0 0.45rem 1.2rem; }
.cg-root.cg-mnsf .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-mnsf .cg-section-head h2 { max-width: 20ch; letter-spacing: -0.009em; }
.cg-root.cg-mnsf .cg-grid-3 { gap: clamp(0.9rem, 2.3vw, 1.75rem); }
.cg-root.cg-mnsf .cg-table caption { font-weight: 660; text-align: left; letter-spacing: 0.015em; }
.cg-root.cg-mnsf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mnsf .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-mnsf .cg-callout { border-left-width: 3px; border-radius: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Mansfield (SAL31752, Mansfield (Qld)), ABS Census 2021 QuickStats (read 12 October 2026): 8,851 people; median age 39; 2,451 families; 3,102 private dwellings; 3 per household; separate houses 2,733 (93.1%, Qld 74.8%); bus to work 231 (5.4%, Qld 1.7%); worked at home 791 (18.6%, Qld 14.1%); bachelor or higher 2,260 (32.3%, Qld 21.9%); aged 5-9 644; 10-14 809; 15-19 751. ABS SAL area 4.881 sq km. Translink GTFS Wednesday 21 October 2026: 44 stop records with service inside the SAL polygon (our check); 2459 scheduled bus visits; 9 routes; Wecker Rd stop 62, Aminya St stop 67a, Cresthaven Dr stop 74 at 123 each. BCC Park Locations: 14 parks. BCC adjacency: Carina Heights, Carindale, Mackenzie, Mount Gravatt East, Rochedale, Upper Mount Gravatt, Wishart. Qld 2027: Term 3 ends Friday 17 September, Term 4 starts Tuesday 5 October. Brisbane no daylight saving since March 1992 (IANA).',
    localProject: 'Functional dependency street_name -> collection_day on BCC Waste Collection Days, suburb MANSFIELD (CC BY 4.0, modified 8 Sep 2026): 3,402 property rows (274 with unit numbers), all ZONE 2; WEDNESDAY 2,131, FRIDAY 1,271; 124 streets; 119 single-day (Wed-only 74, Fri-only 45); 5 two-day streets (Aminya St W27 F11; Broadwater Rd W39 F136; Cresthaven Dr W25 F23; Luprena St W22 F18; Wecker Rd W64 F96), 461 rows on them. (street, house_number, suffix) -> day holds for all 3,127 keys. Odd/even split exact on Cresthaven (odd Fri, even Wed) and Luprena (odd Wed, even Fri), not on the other three. First-row lookup misassigns 286 rows; majority lookup 155. Counts and street names only; no addresses published.',
    requiredMentions: ['Wecker Road', '809', 'Luprena Street', 'Cresthaven Drive', 'Aminya Street', '3,402', '3,127', '286 properties', 'functional dependency'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Mansfield (Qld) suburb and locality (SAL31752), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL31752'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities boundary service, used for our point-in-boundary checks and suburb areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Brisbane City Council open data, Waste Collection Days (Creative Commons Attribution 4.0), dataset last modified 8 September 2026.',
        url: 'https://data.brisbane.qld.gov.au/explore/dataset/waste-collection-days-collection-days/'
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
        claim: 'E. F. Codd (1970), A Relational Model of Data for Large Shared Data Banks, Communications of the ACM 13(6), 377-387, DOI 10.1145/362384.362685.',
        url: 'https://doi.org/10.1145/362384.362685'
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
      'Any individual property address: not published; counts and street names only.',
      'Why the council splits five streets across two days: not claimed.',
      'Passenger numbers at Mansfield stops: not claimed.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Brisbane City Council or Translink.'
    ]
  }
};
