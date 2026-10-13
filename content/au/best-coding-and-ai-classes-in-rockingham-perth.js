'use strict';
// Rockingham, Perth (cg- district page, Australia cluster Phase 8, row 303). Keyword slug best-coding-and-ai-classes-in-*,
// council page (ABS LGA57490, City of Rockingham) under Perth and Western Australia. Baldivis (row 302) is a suburb of this
// council; no Baldivis-only figures or Baldivis road names are used here.
// Spine: a correlated subquery finds the longest school-zone segment on each road in Main Roads' Legal Speed Zones layer:
// 408 segments, 140 road names, 142 road IDs; 143 rows for 140 roads because 3 roads tie (Warnbro Sound Av left and right
// carriageways at 0.56 km); grouping by road ID gives 145 rows (Read St is two roads). Script: scratchpad au/b13/a_rkhm.py.
// Lesson family: correlated subquery, greatest-per-group; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'ROCKINGHAM',
    label: 'Rockingham, Perth',
    blurb: 'Coding and AI classes for the City of Rockingham, with a SQL project on 408 school-zone segments that asks which stretch is longest on each road, and finds ties.'
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
  slug: 'best-coding-and-ai-classes-in-rockingham-perth',
  code: 'rkhm',
  accent: '#194268',
  accentRationale: 'Rockingham: a muted deep-sea navy (hue 208.9, s 0.76, v 0.41), at least 30.7 RGB from every WA page accent, 12.7 from other AU accents and 7.9 from every other site colour; 8.4:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Rockingham',
    eyebrow: 'City of Rockingham, south coast of Perth, Western Australia',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Rockingham' },
      { type: 'City', name: 'Perth' },
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' },
    { slug: 'online-coding-and-python-classes-in-perth-western-australia', name: 'Perth' }
  ],
  nav: [
    { label: 'Perth', href: '/online-coding-and-python-classes-in-perth-western-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Rockingham, Perth',
  title: 'Best Coding and AI Classes in Rockingham, Perth',
  description: 'Live online coding and AI classes for the City of Rockingham, ages 6 to adult, with a SQL project on 408 Main Roads school-zone segments and the ties they hide.',
  ogDescription: 'Which school-zone stretch is longest on each Rockingham road? A correlated subquery answers for 140 roads in 143 rows. The extra three are the lesson.',
  twitterDescription: 'Rockingham coding and AI classes, live online, first lesson free.',
  ogImageCourse: 'mysql-mastery-for-teens',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Rockingham',
    description: 'Coding, SQL and AI lessons for children, teenagers and adults in the City of Rockingham, grouped by level and taught live online.'
  },
  h1: 'Coding and AI classes in Rockingham',
  capsuleQ: 'What sets the best coding and AI classes apart for Rockingham learners?',
  capsule: 'They teach learners to ask how many rows an answer should have. In our Rockingham project, a database query looks for the longest school-zone stretch on each of 140 roads and returns 143 rows. Three roads have exact ties, one of them a divided road where both sides measure the same. Spotting why is a database skill and a thinking skill.',
  lead: 'The City of Rockingham runs from the Kwinana Freeway in the east to the coast at Safety Bay and Warnbro. Main Roads Western Australia maps every school zone on its local roads, 408 short segments in all. Each one marks where drivers slow to 40 km/h near a school, which makes the table familiar to every parent who does a school run.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Rockingham.',
  picks: {
    eyebrow: 'Course picks for Rockingham',
    h2: 'SQL, algorithms and AI',
    intro: 'Courses matched to the project below. A free lesson places each learner.',
    items: [
      { course: 'mysql-mastery-for-teens', band: 'Ages 13 to 17', note: 'Queries, grouping and subqueries on real tables.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'University and adult', note: 'Database design and SQL that survives awkward data.' },
      {
        course: 'data-structures-algorithms-masterclass-college',
        band: 'University and adult',
        note: 'The algorithms underneath grouping, sorting and searching.'
      },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Logic and comparison puzzles for younger learners.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The City of Rockingham today',
      h2: 'A fast-growing coastal council',
      intro: 'Figures for the Rockingham council area (ABS LGA57490) from 2021 Census QuickStats, read on 12 October 2026, plus the ABS estimate for 2025.',
      body: [
        {
          kind: 'table',
          caption: 'City of Rockingham counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents, 2021 Census', '135,678'],
            ['Estimated residents, 2025', '159,934'],
            ['Median age', '36'],
            ['Families', '36,800'],
            ['Private dwellings', '54,871'],
            ['Motor vehicles per dwelling', '1.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Rockingham shares compared with Western Australia',
          head: ['Share', 'Rockingham', 'WA'],
          rows: [
            ['Technicians and trades workers', '19.4% (12,233)', '15.3%'],
            ['Separate houses', '90.4% (43,771)', '79.7%'],
            ['Residents aged 10 to 14', '7.6% (10,333)', '6.4%'],
            ['Bachelor degree or higher', '12.5% (13,272)', '23.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Trades city',
              p: 'Nearly one worker in five was a technician or tradesperson, a larger share than across WA, which suits learners who like to build and fix things.'
            },
            {
              h3: 'Growth',
              p: 'The ABS estimate of 159,934 residents in 2025 is well above the 2021 count. The two use different methods, so we show both side by side.'
            },
            {
              h3: 'Schools',
              p: 'Our map test places 38 government schools inside the council outline, 25 of them primary schools, using Department of Education coordinates.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Census night fell in the pandemic, so some travel answers reflect that week. The ABS rounds percentages and slightly perturbs small counts, so table parts can differ from totals by a little. We print each figure as published.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'The longest school-zone stretch on every road',
      intro: 'Main Roads lists each school-zone segment with its road, a start and end distance along that road in kilometres, and which carriageway it covers. The question is: for each road, which segment is longest? In SQL, the classic answer is a correlated subquery, an inner query that runs once for every outer row.',
      body: [
        {
          kind: 'table',
          caption: 'What different queries return on the 408 Rockingham segments (our SQLite run)',
          head: ['Query', 'Rows', 'Why'],
          rows: [
            ['GROUP BY road with MAX(length)', '140', 'One row per road name; ties are invisible'],
            ['Correlated subquery, matched on road name', '143', 'Every segment equal to its road\'s maximum is kept'],
            ['Correlated subquery, matched on road ID', '145', 'Two road names each cover two separate roads']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The divided road',
              p: 'Warnbro Sound Avenue\'s longest zone is 0.56 km, listed twice, once for the left carriageway and once for the right. The subquery keeps both, which is correct, and the learner decides whether to report one stretch or two sides.'
            },
            {
              h3: 'Names are not keys',
              p: 'Read Street appears under two different road IDs. Grouping by name merges two separate roads into one; grouping by ID keeps them apart and adds rows.'
            },
            { h3: 'One-segment roads', p: '67 of the 140 road names have a single school-zone segment, so for them the longest stretch is simply the only one.' }
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Three of the longest single segments (Main Roads data; lengths are end minus start, our calculation)',
          head: ['Road', 'Length', 'Zone type'],
          rows: [
            ['Georgetown Dr', '0.801 km', 'Time-based 40 km/h school zone'],
            ['Swallowtail Pde', '0.69 km', 'Time-based 40 km/h school zone'],
            ['Warnbro Sound Av', '0.56 km, both carriageways', 'Time-based 40 km/h school zone']
          ]
        },
        {
          kind: 'callout',
          h3: 'Counting before trusting',
          p: 'The same 408 rows split into 376 time-based school zones and 32 children-crossing zones. Learners first predict the row count of each query from these facts, then run it. When 143 appears instead of 140, they go looking for ties rather than assuming a bug.'
        },
        {
          kind: 'p',
          text: 'Segments are from Main Roads\' Legal Speed Zones layer for the City of Rockingham, queried on 12 October 2026. Lengths are differences between published start and end distances, and every query result is our own calculation in SQLite.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Writing it in SQL',
      h2: 'An inner query that knows its outer row',
      intro: 'The inner query asks for the longest length on the same road as the outer row. Because it refers to the outer row, it is correlated, and the database runs it for each candidate.',
      body: [
        {
          kind: 'table',
          caption: 'Steps in the lesson',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Load the segments into SQLite with road name, road ID, start, end, carriageway and zone type.'],
            ['2', 'Write the GROUP BY version and the correlated version, and compare their row counts.'],
            ['3', 'List every road where the counts differ and explain each tie.'],
            ['4', 'Repeat using road IDs and write down which roads changed.']
          ]
        },
        {
          kind: 'p',
          text: 'A further question tests understanding: how many segments are longer than the average for their own road? The correlated subquery answers 134. Learners then rewrite it as a join to a grouped table and confirm both approaches agree, which builds trust in either form. Speed matters too, because a correlated subquery repeats work for every row; on 408 rows that is fine, but learners see why an index or a join matters for larger tables.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Find the tallest block in each colour pile, and notice when two blocks share the top spot.' },
            { h3: 'Teenagers', p: 'Write all three queries, explain the 140, 143 and 145, and draw the divided road.' },
            { h3: 'Adults', p: 'Apply greatest-per-group queries to sales, rosters or sensor logs where ties really happen.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Rockingham',
      h2: 'Counted roads and 2027 dates',
      intro: 'Details from Main Roads and the WA Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Traffic counters', p: 'Main Roads lists 59 traffic count sites in the City of Rockingham, 47 of them with a 2023/24 count year.' },
            { h3: 'Freeway path', p: 'The path counter beside Kwinana Freeway south of Paganoni Road averages 58 riders a day, 43 on weekdays and 96 at weekends.' },
            { h3: 'Term 1, 2027', p: 'WA public schools begin Term 1 on Monday 1 February 2027 and finish it on Friday 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'The council area is the ABS outline of about 257.5 square kilometres, drawn as six separate parts. Count sites and school zones are those Main Roads assigns to the City of Rockingham.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From block piles to subqueries',
    intro: 'Use the ages as a guide; the free trial decides.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Compare and sort',
        p: 'Block code about largest, smallest and equal.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'Python basics',
        p: 'Lists, loops and maximum-finding in code.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Databases',
        p: 'SQL queries and data checks on real tables.',
        courses: ['mysql-mastery-for-teens', 'problem-solving-dsa-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Data at work',
        p: 'Database design and algorithms for jobs.',
        courses: ['mysql-database-complete-masterclass-college', 'data-structures-algorithms-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI writes SQL, why learn it?',
    intro: 'Because the query that looks right and the query that is right can differ by three rows.',
    p1: 'An AI assistant asked for the longest segment per road often writes the GROUP BY version. It runs, returns 140 tidy rows and quietly hides the ties on divided roads and the duplicate road names.',
    p2: 'A Rockingham learner who has predicted 143 knows to ask what happened to the ties, and can tell whether a generated query matches the question being asked.',
    closer: 'Our classes use AI to draft queries and people to judge them.',
    blogAnchor: 'why writing code yourself still matters in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online classes across Rockingham',
    intro: 'Lessons are live on video, so families from Safety Bay to Port Kennedy join from home.',
    cells: [
      { h3: 'Live lessons', p: 'A teacher runs each class and checks work as it happens.' },
      { h3: 'Follows WA terms', p: 'Classes pause for the state school holidays.' },
      { h3: 'Free first class', p: 'One free lesson, then a written course plan.' },
      { h3: 'Groups of fifteen to twenty', p: 'Matched by level, or one-to-one if preferred.' },
      { h3: 'Weekly pattern', p: 'Two lessons a week, roughly eight a month.' },
      { h3: 'Indian timing', p: 'A 6pm Rockingham lesson is 3:30pm in India.' }
    ],
    spec: {
      title: 'One clock all year',
      p: 'The IANA time zone database shows Western Australia\'s last daylight saving ending in March 2009, so Rockingham lesson times stay fixed against India.'
    }
  },
  fees: {
    h2: 'Fees for Rockingham',
    intro: 'Every family pays the same fees.',
    first: 'The first class is free, with a plan to follow.',
    group: 'Group classes: around eight lessons a month, fifteen to twenty learners.',
    private: 'One-to-one: around eight lessons a month with one teacher.',
    closer: 'Fees are charged in US dollars, starting only after the free class has set the course and a weekly time. See the pricing page for holiday and missed-lesson details.'
  },
  reviewsH2: 'Reviews from Google',
  book: {
    h2: 'Book a free Rockingham lesson',
    intro: 'Tell us the learner\'s age and interests. A young child might sort block piles; a teenager might write the school-zone subquery.',
    success: 'Thank you. We will contact you about a Rockingham lesson.'
  },
  faq: {
    h2: 'Rockingham coding and AI questions',
    intro: 'Questions from Rockingham families and adult learners.',
    items: [
      { q: 'How many people live in the City of Rockingham?', a: 'The 2021 Census counted 135,678 residents. The ABS estimate for 2025 is 159,934.' },
      {
        q: 'What is a correlated subquery?',
        a: 'An inner SQL query that refers to a value from the outer query, so it is evaluated for each outer row, such as finding the longest segment on that row\'s own road.'
      },
      {
        q: 'Why did 140 roads give 143 rows?',
        a: 'Three roads have two segments that tie for longest. One is Warnbro Sound Avenue, where the left and right carriageways share the same 0.56 km zone.'
      },
      {
        q: 'Is SQL still worth learning with AI tools?',
        a: 'Yes. AI writes SQL quickly, but checking it needs someone who can predict how many rows a correct answer should have.'
      },
      { q: 'When can children start databases?', a: 'Most start SQL around 13, after comparison and sorting games in block code.' },
      {
        q: 'How many school zones are there in Rockingham?',
        a: 'Main Roads lists 408 school-zone segments on City of Rockingham local roads, 376 time-based zones and 32 children-crossing zones.'
      },
      {
        q: 'Do you have a centre in Rockingham?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Rockingham classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are groups decided?',
        a: 'By level and pace in groups of fifteen to twenty, not by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Do you teach adults?', a: 'Yes. Adults learn in adult groups or one to one, often with databases from their work.' }
    ]
  },
  next: {
    eyebrow: 'More for Perth learners',
    h2: 'Keep going',
    html: 'Try the <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">Perth page</a> for the city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">Western Australia guide</a> for the state, or <a class="cg-inline-link" href="/coding-classes-for-kids-perth">coding for Perth children</a> for primary-age learners.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Rockingham and Perth',
  footerPlaces: [
    { href: '/wa-gate-aset-maths-practice', label: 'WA GATE maths' },
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-rkhm .cg-hero-grid { align-items: end; gap: clamp(1.3rem, 3.2vw, 2.5rem); }
.cg-root.cg-rkhm .cg-hero h1 { font-weight: 660; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-rkhm .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-rkhm .cg-eyebrow { letter-spacing: 0.12em; font-weight: 620; font-size: 0.77rem; }
.cg-root.cg-rkhm .cg-section-head h2 { max-width: 22ch; }
.cg-root.cg-rkhm .cg-grid-3 { gap: clamp(0.85rem, 2.2vw, 1.5rem); }
.cg-root.cg-rkhm .cg-table caption { text-align: left; font-weight: 630; font-size: 0.89rem; }
.cg-root.cg-rkhm .cg-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.cg-root.cg-rkhm .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-rkhm .cg-callout { border-radius: 8px; border-left-width: 3px; }
`,
  dossier: {
    curriculumAuthority: 'City of Rockingham (LGA57490), ABS Census 2021 QuickStats (read 12 October 2026): 135,678 people; median age 36; 36,800 families; 54,871 private dwellings; 1.9 vehicles per dwelling; technicians and trades 12,233 (19.4%, WA 15.3%); separate houses 43,771 (90.4%, WA 79.7%); aged 10-14 10,333 (7.6%, WA 6.4%); bachelor or higher 13,272 (12.5%, WA 23.8%). ABS ERP 2025 (LGA 57490): 159,934. ABS LGA area 257.4979 sq km in 6 rings. 38 government schools inside the LGA polygon (our test), 25 primary. Main Roads Traffic Digest: 59 sites with LG_NAME Rockingham (C), 47 with 2023/24 count year. Bike Count Sites: Kwinana Fwy PSP S of Paganoni Rd combined 58, weekday 43, weekend 96. Legal Speed Zones layer, Rockingham (C): 408 school-zone segments, 140 road names, 142 road IDs; 376 time-based (MR-RS-7B), 32 children crossing (MR-RS-32). WA 2027 Term 1: Monday 1 February to Friday 9 April. Perth +8:00, last DST ended March 2009 (IANA 2026e).',
    localProject: 'SQLite on 408 Rockingham school-zone segments, length = END_SLK - START_SLK: GROUP BY road MAX 140 rows; correlated subquery on road name 143 rows (3 roads with ties: Warnbro Sound Av left and right carriageways 0.56 km, Farris St, one other); on road ID 145 rows (Read St and one other name each cover 2 road IDs). 67 single-segment road names. 134 segments longer than their own road\'s average. Longest: Georgetown Dr 0.801 km, Swallowtail Pde 0.69 km. Time-based 376 segments, children crossing 32. Our calculation. Baldivis road names omitted. Script: scratchpad au/b13/a_rkhm.py.',
    requiredMentions: [
      '159,934',
      '54,871',
      '19.4% (12,233)',
      '90.4% (43,771)',
      '408 school-zone segments',
      'Warnbro Sound Avenue',
      'Georgetown Dr',
      'Paganoni Road',
      '143 rows'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Rockingham local government area (LGA57490), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA57490'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Rockingham LGA 57490, total persons, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.57490.LGA2025.A?format=csvfilewithlabels'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Main Roads Western Australia, Legal Speed Zones layer (school zone segments with road, straight-line kilometre start and end, carriageway and sign type), Creative Commons Attribution 4.0, queried 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/mrwa-legal-speed-zones'
      },
      {
        claim: 'Main Roads Western Australia, Traffic Digest (count sites with average weekday, weekend and all-day volumes and heavy vehicle shares for the latest count year), Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/mrwa-traffic-digest'
      },
      {
        claim: 'Main Roads Western Australia, Bike Count Sites (permanent counters with volumes by direction for the latest count year), Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/mrwa-bike-count-sites'
      },
      {
        claim: 'WA Department of Education, Western Australian Schools Lists (Excel), currently active schools with student numbers as at the 2026 Semester 1 census, Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/western-australian-schools-lists'
      },
      {
        claim: 'WA Department of Education, future term dates: 2027 Term 1 Monday 1 February to Friday 9 April; Term 3 Monday 19 July to Friday 24 September.',
        url: 'https://www.education.wa.edu.au/future-term-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Perth at +8:00 on rule AW, whose last daylight saving period ended on the last Sunday of March 2009.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Baldivis-only figures or road names: kept off this council page (Baldivis has its own page).',
      'Adding segment lengths into a published total: not claimed; lengths are our differences of start and end distances.',
      'School zone operating claims beyond the sign text: not made.',
      'Naming individual schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Rockingham, Main Roads WA or the WA Department of Education.'
    ]
  }
};
