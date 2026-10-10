'use strict';
// Glen Waverley, Melbourne (cg- district page, Australia cluster Phase 8, row 243). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), suburb page (ABS SAL21013, City of Monash) under Melbourne and Victoria.
// Spine: seven years of Victorian station-entry files sit in one SQLite table (1,555 rows, 225 station names);
// how does an index change the way SQLite answers "Glen Waverley, every year"?
// Data: Department of Transport and Planning annual metropolitan station entries FY18-19 to FY24-25 (CC BY 4.0,
// rounded to 50). Our measurements (scratchpad au/b6/glwv.py, SQLite 3.50.4): EXPLAIN QUERY PLAN says SCAN before
// the index and SEARCH USING INDEX after; virtual-machine steps for the Glen Waverley query 4,739 -> 98 -> 55 with a
// two-column index; LIKE '%Waverley' and lower(stop_name)= still scan. Glen Waverley entries: 1,693,350 (FY18-19),
// 530,400 (FY20-21), 1,209,700 (FY24-25), 71.4% of FY18-19.
// Lesson family: SQLite index and EXPLAIN QUERY PLAN; 0 location-page hits, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'GLEN WAVERLEY',
    label: 'Glen Waverley, Melbourne',
    blurb: 'Coding and AI classes for Glen Waverley, with a SQL project on how a database index finds one station among seven years of records.'
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
  slug: 'best-coding-and-ai-classes-in-glen-waverley-melbourne',
  code: 'glwv',
  accent: '#2A4682',
  accentRationale: 'Glen Waverley: a deep slate blue (hue 222), chosen by hand at least 10 RGB units from all 1,278 accent declarations in content, the shared stylesheets and the claims log, 9.1:1 on white and 7.4:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Glen Waverley',
    eyebrow: 'Glen Waverley, City of Monash, Melbourne, Victoria',
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
  routeLabel: 'Glen Waverley, Melbourne',
  title: 'Best Coding and AI Classes in Glen Waverley, Melbourne',
  description: 'Live online coding and AI classes for Glen Waverley children, teenagers and adults, from Scratch to Python, SQL and AI projects, in small groups or one to one.',
  ogDescription: 'Coding and AI classes for Glen Waverley, with a SQL project: one index cut the work SQLite did to find the Glen Waverley rows from 4,739 steps to 98.',
  twitterDescription: 'Glen Waverley coding and AI classes, live online with a teacher, first class free.',
  ogImageCourse: 'mysql-mastery-for-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Glen Waverley',
    description: 'Level-matched online coding, SQL and AI lessons for children, teenagers and adults in Glen Waverley, taught live in English.'
  },
  h1: 'Coding and AI classes in Glen Waverley',
  capsuleQ: 'Where can Glen Waverley learners find the best coding and AI classes?',
  capsule: 'In live online lessons where a teacher builds and tests real programs with the learner, from Scratch for young children to Python, SQL and AI for teenagers and adults. Glen Waverley is a suburb of families and graduates: the 2021 Census counted 42,642 residents, 11,757 families, and 15,584 adults, 43.8%, with a bachelor degree or higher.',
  lead: 'Victoria publishes how many people enter every metropolitan train station, one file per financial year. Put seven of those files in one database table and a simple question, "show Glen Waverley for every year", becomes a lesson in how databases actually work. Without an index SQLite reads every row; with one it jumps straight to the right place.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Glen Waverley.',
  picks: {
    eyebrow: 'Course picks for Glen Waverley',
    h2: 'Courses that teach data, not just syntax',
    intro: 'The station project draws on SQL, Python and careful testing. These courses build each of those skills, and the free first class decides the starting level.',
    items: [
      {
        course: 'mysql-mastery-for-teens',
        band: 'Ages 13 to 17',
        note: 'Tables, queries, joins and indexes, practised on real public data like the station files.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Python from first principles, including reading CSV files into a database.'
      },
      {
        course: 'mysql-database-complete-masterclass-college',
        band: 'University and adult',
        note: 'Database design, query plans and indexing for work and study.'
      },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 14 to 18', note: 'Machine learning that starts from clean, well-organised data.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Glen Waverley in the Census',
      h2: 'Families, graduates and mostly separate houses',
      intro: 'Figures for the Glen Waverley suburb (ABS code SAL21013) from the 2021 Census QuickStats, set beside the Victorian figures.',
      body: [
        {
          kind: 'table',
          caption: 'Glen Waverley, 2021 Census headline counts',
          head: ['Headline', 'Glen Waverley'],
          rows: [
            ['Residents', '42,642'],
            ['Median age', '40'],
            ['Families', '11,757'],
            ['Private dwellings', '16,537'],
            ['Average people per household', '2.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Glen Waverley beside Victoria',
          head: ['Measure', 'Glen Waverley', 'Victoria'],
          rows: [
            ['Adults with a bachelor degree or higher', '43.8% (15,584)', '29.2%'],
            ['Workers employed as professionals', '33.7% (6,492)', '25.0%'],
            ['Homes that are separate houses', '79.1% (11,428)', '73.4%'],
            ['Homes that are flats or apartments', '10.2% (1,469)', '12.1%'],
            ['Workers who took the train to work', '2.7% (515)', '1.6%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'School-age children', p: 'The Census counted 2,547 residents aged 5 to 9 and 2,912 aged 10 to 14.' },
            { h3: 'Home offices', p: 'In the August 2021 lockdown, 6,350 employed residents, 32.9%, worked from home on Census day.' },
            { h3: 'Two stations', p: 'Both Glen Waverley and Syndal stations sit inside the suburb boundary, on the Glen Waverley line.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau adjusts table cells slightly for privacy, so we print each figure as published and never add rows together to make totals of our own.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'How does an index find Glen Waverley faster?',
      intro: 'We loaded seven financial years of metropolitan station entries, FY18-19 to FY24-25, into one SQLite table: 1,555 rows and 225 different station names. Then we asked for the Glen Waverley rows, with and without an index, and measured the work.',
      body: [
        {
          kind: 'table',
          caption: 'Glen Waverley station entries by financial year (rounded to 50 by the publisher)',
          head: ['Financial year', 'Entries'],
          rows: [
            ['FY18-19', '1,693,350'],
            ['FY19-20', '1,305,600'],
            ['FY20-21', '530,400'],
            ['FY21-22', '705,400'],
            ['FY22-23', '1,291,900'],
            ['FY23-24', '1,326,650'],
            ['FY24-25', '1,209,700']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The same query, three ways (our measurement, SQLite 3.50.4)',
          head: ['Setup', 'EXPLAIN QUERY PLAN says', 'Virtual machine steps'],
          rows: [
            ['No index', 'SCAN entries, then a temporary sort', '4,739'],
            ['Index on stop_name', 'SEARCH entries USING INDEX (stop_name=?), then a sort', '98'],
            ['Index on (stop_name, fin_year)', 'SEARCH, and no sort needed', '55']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Scan', p: 'Without help, SQLite reads all 1,555 rows to find the seven that belong to Glen Waverley.' },
            { h3: 'Search', p: 'An index keeps station names in order, so SQLite walks a short path to the right spot and reads only those seven rows.' },
            { h3: 'No sort', p: 'Adding the year to the index means the rows already come out in year order, so the extra sorting step disappears.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Where an index cannot help',
          p: 'A search for names ending in "Waverley" (LIKE \'%Waverley\') matched 14 rows, Glen Waverley and Mount Waverley across seven years, but still had to scan. So did wrapping the column in lower(). An index helps when the query can use the start of the indexed value as it is stored.'
        },
        {
          kind: 'p',
          text: 'Timing on our own laptop told the same story, about 156 microseconds per lookup without the index and 14 with it, but timings depend on the machine; the plan and the step counts are the dependable part. The entry figures are the publisher\'s; the table, queries and counts are ours.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The SQL behind it',
      h2: 'Read the plan before trusting the speed',
      intro: 'EXPLAIN QUERY PLAN is SQLite\'s way of saying what it intends to do. Learning to read it is the habit that matters, long after this table is forgotten.',
      body: [
        {
          kind: 'table',
          caption: 'Four statements that carry the lesson',
          head: ['Statement', 'What it does', 'What to watch for'],
          rows: [
            [
              'CREATE INDEX idx_name ON entries(stop_name)',
              'Builds an ordered list of station names pointing at rows',
              'Indexes take space and slow down inserts a little'
            ],
            [
              'EXPLAIN QUERY PLAN SELECT ...',
              'Shows SCAN or SEARCH without running the query',
              'SCAN on a large table is the warning sign'
            ],
            ['WHERE stop_name = ?', 'Uses the index directly', 'Functions such as lower(stop_name) hide the column from it'],
            ['ORDER BY fin_year', 'Sorts the result', 'A two-column index can remove the sort step']
          ]
        },
        {
          kind: 'p',
          text: 'Seven years fit easily in memory, so a scan is not slow here. The point is the shape of the work: a scan grows with every row added, while a search barely notices the table getting bigger.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Play "find the card" with a shuffled deck, then a sorted one, and count the cards turned over each time.' },
            { h3: 'Secondary students', p: 'Load the files, run the three versions of the query, and predict each plan before printing it.' },
            { h3: 'Adults', p: 'Apply the same check to slow reports at work: read the plan, look for SCAN, and ask which column the filter really uses.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Glen Waverley',
      h2: 'Thirteen schools inside one suburb boundary',
      intro: 'From the Victorian school locations file and the state calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Thirteen schools',
              p: 'The 2025 school locations file places 13 schools inside the Glen Waverley boundary: 8 primary, 3 secondary and 2 special schools.'
            },
            { h3: 'Government secondaries', p: 'Glen Waverley Secondary College, Highvale Secondary College and Brentwood Secondary College are among them.' },
            { h3: 'Term 1, 2027', p: 'Victorian government school students start Term 1 of 2027 on Thursday 28 January; the term ends on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Suburb figures, not council figures',
          p: 'Every Census number on this page is for the Glen Waverley suburb, which is one part of the City of Monash; neighbouring suburbs such as Clayton have their own figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorted cards to query plans',
    intro: 'Ages are a guide only; the free trial class finds the right step.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and searching',
        p: 'Games that search, sort and count, built from blocks.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Lists, loops and files with a teacher reading every line.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'SQL and data',
        p: 'Queries, indexes and plans on real public tables.',
        courses: ['mysql-mastery-for-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Databases for work',
        p: 'Schema design, indexing and reporting that stays fast.',
        courses: ['mysql-database-complete-masterclass-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write the query in seconds. Why should a Glen Waverley learner read the plan?',
    intro: 'Because a query can return the right rows while doing far more work than it needs to, and nothing on the screen says so.',
    p1: 'Ask an assistant for "every year of Glen Waverley entries" and it will usually write a correct SELECT. It may also wrap the station name in lower() to be safe, which quietly stops an index being used. On seven years of files that costs nothing visible; on a real system with millions of rows it is the difference between instant and slow.',
    p2: 'A learner who has run EXPLAIN QUERY PLAN on their own table knows to check for SCAN and to ask why. That habit applies to any code an AI drafts: the answer being right is the start of the review, not the end.',
    closer: 'The Glen Waverley student who reads plans is the one who can safely put AI-written queries into real work.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live from a Glen Waverley desk',
    intro: 'Lessons happen on screen at home, so a family near Syndal station joins exactly as one near Glen Waverley station does.',
    cells: [
      { h3: 'No commute', p: 'Sign in, share a screen and start writing code with the teacher straight away.' },
      { h3: 'Victorian terms', p: 'Plans follow Victorian school terms and pause for the state school holidays.' },
      { h3: 'A full first class', p: 'The trial is a real lesson, finishing with a suggested course, level and time.' },
      { h3: 'Small groups', p: 'Five to ten learners grouped by level and pace, from several suburbs at once.' },
      { h3: 'Twice a week', p: 'Two fixed lessons each week, around eight a month, with breaks agreed ahead.' },
      { h3: 'Teachers in India', p: 'A 5pm Glen Waverley lesson during daylight saving begins at 11:30am India time; after April it begins at 12:30pm there.' }
    ],
    spec: {
      title: 'Clocks in Melbourne and India',
      p: 'Melbourne moves to daylight saving on Sunday 4 October 2026 and back on Sunday 4 April 2027, while India keeps one time all year. Lesson times are always quoted in Melbourne time.'
    }
  },
  fees: {
    h2: 'Glen Waverley class fees',
    intro: 'There are three prices and nothing hidden.',
    first: 'The first class is free and ends with an honest recommendation.',
    group: 'A month of group lessons, usually eight, with five to ten learners at one level.',
    private: 'Roughly eight lessons a month with one teacher and one learner.',
    closer: 'Families outside India are invoiced in US dollars, the same rate for everyone. Nothing is charged until after the trial, when a course and time are settled; the pricing page explains holidays, missed lessons and changing format.'
  },
  reviewsH2: 'Google reviews from our families and learners',
  book: {
    h2: 'Book a first Glen Waverley class',
    intro: 'Tell us the learner\'s age and one interest. A nine-year-old might begin with a Scratch search game; an adult might begin by loading the station files into SQLite.',
    success: 'Thank you. Our team will be in touch shortly about a Glen Waverley class.'
  },
  faq: {
    h2: 'Glen Waverley coding and AI questions',
    intro: 'The questions Glen Waverley parents and adult learners ask first.',
    items: [
      {
        q: 'How many people live in Glen Waverley?',
        a: 'The 2021 Census QuickStats for the Glen Waverley suburb record 42,642 residents, a median age of 40 and 11,757 families.'
      },
      {
        q: 'What is a database index?',
        a: 'It is an ordered copy of one or more columns that points back to the rows. SQLite can use it to search for a value instead of scanning the whole table, much like the index at the back of a book.'
      },
      {
        q: 'What did the Glen Waverley station project find?',
        a: 'On a table of 1,555 station-year rows, finding the seven Glen Waverley rows took SQLite 4,739 steps without an index, 98 with an index on the name, and 55 with an index on name and year together.'
      },
      {
        q: 'What does EXPLAIN QUERY PLAN show?',
        a: 'It shows how SQLite plans to run a query, for example SCAN for reading every row or SEARCH USING INDEX for jumping to matching rows, without running the query itself.'
      },
      { q: 'Do children start with SQL?', a: 'No. Children from six start with Scratch, move to Python when ready, and meet SQL in their teens.' },
      { q: 'Do you teach Copilot Studio agents in groups?', a: 'No. Copilot Studio agents are taught one to one only; groups build agents in Python.' },
      {
        q: 'Do you have an office in Glen Waverley?',
        a: 'No. Every lesson is live online, we have no premises in Australia, and the phone number we show is an Indian number.',
        boiler: true
      },
      {
        q: 'How much are coding classes for Glen Waverley learners?',
        a: 'The first lesson is free. Group lessons then cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one. Course, format and time are agreed before any payment.',
        boiler: true
      },
      {
        q: 'How big are the groups?',
        a: 'Five to ten learners, matched by level, pace and goal. If no group fits the learner\'s time, one-to-one lessons are offered instead.',
        boiler: true
      },
      {
        q: 'Can adults learn SQL and Python with you?',
        a: 'Yes. Adults study in their own groups or one to one, often with a reporting or spreadsheet task from work in mind.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Glen Waverley learners',
    html: 'Further along the City of Monash, <a class="cg-inline-link" href="/ai-and-programming-classes-in-clayton-melbourne">Clayton</a> has its own page. The <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a>, <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">coding for Melbourne kids</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> cover the rest.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Glen Waverley and Melbourne',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-clayton-melbourne', label: 'Clayton' },
    { href: '/vibe-coding-and-ai-agents-classes-in-box-hill-melbourne', label: 'Box Hill' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-glwv .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-glwv .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-glwv .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.45rem 0 0.45rem 1.15rem; }
.cg-root.cg-glwv .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-glwv .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.012em; }
.cg-root.cg-glwv .cg-grid-3 { gap: clamp(0.8rem, 2vw, 1.7rem); }
.cg-root.cg-glwv .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-glwv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-glwv .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-glwv .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Glen Waverley, ABS Census 2021 QuickStats, Glen Waverley suburb SAL21013 (read 10 October 2026): 42,642 people; median age 40; 11,757 families; 16,537 private dwellings; 2.8 people per household; bachelor degree or higher 43.8% (15,584; Victoria 29.2%); professionals 33.7% (6,492; Victoria 25.0%); separate houses 79.1% (11,428); flats 10.2% (1,469); train to work 2.7% (515; Victoria 1.6%); worked at home 32.9% (6,350, lockdown Census day); aged 5-9 2,547; aged 10-14 2,912. Victorian School Locations 2025: 13 schools inside the SAL boundary (8 primary, 3 secondary, 2 special), including Glen Waverley Secondary College, Highvale Secondary College and Brentwood Secondary College. Glen Waverley and Syndal stations inside the boundary (station coordinates in the entries file). Victorian 2027 Term 1: students start Thursday 28 January, ends Thursday 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'SQLite index and EXPLAIN QUERY PLAN. Seven annual metropolitan station-entry files FY18-19 to FY24-25 loaded into one table: 1,555 rows, 225 distinct stop names. Query: SELECT fin_year, pax_annual WHERE stop_name = Glen Waverley ORDER BY fin_year. Plans: no index SCAN + temp B-tree for ORDER BY, 4,739 VM steps (progress handler, n=1); index on stop_name SEARCH USING INDEX + temp B-tree, 98 steps; index on (stop_name, fin_year) SEARCH, no sort, 55 steps. LIKE %Waverley matched 14 rows and scanned; lower(stop_name)= scanned. Laptop timing 155.6 vs 14.0 microseconds per lookup (machine dependent). Glen Waverley entries FY18-19 1,693,350; FY19-20 1,305,600; FY20-21 530,400; FY21-22 705,400; FY22-23 1,291,900; FY23-24 1,326,650; FY24-25 1,209,700 (71.4% of FY18-19). Script: scratchpad au/b6/glwv.py.',
    requiredMentions: ['42,642', '11,757', '15,584', '6,492', '2,912', '1,693,350', '4,739', 'Highvale Secondary College', 'Brentwood Secondary College'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Glen Waverley suburb (SAL21013).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL21013' },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      { claim: 'SQLite documentation, EXPLAIN QUERY PLAN (SCAN and SEARCH).', url: 'https://www.sqlite.org/eqp.html' },
      { claim: 'SQLite documentation, the query planner and indexes.', url: 'https://www.sqlite.org/queryplanner.html' },
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
      'A reason for the fall in Glen Waverley entries between FY18-19 and FY24-25: not claimed; the page reports the published figures only.',
      'A total of station entries for the Glen Waverley line formed by adding stations: not computed; published parts are never summed.',
      'That the index makes the real Victorian transport systems faster: not claimed; the measurements are for our own SQLite table.',
      'Timing as a fixed fact: the microsecond figures are from our laptop and labelled as machine dependent.',
      'Catholic or independent school names and any school sector breakdown: not used; special schools are counted, not named.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Monash, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
