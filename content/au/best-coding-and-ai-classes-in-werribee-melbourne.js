'use strict';
// Werribee, Melbourne (cg- district page, Australia cluster Phase 8, row 247). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*; "best" used once, in the capsule question), suburb page (ABS SAL22750, City of
// Wyndham) under Melbourne and Victoria.
// Spine: how did Werribee station's yearly entries change, year on year, from FY18-19 to FY24-25? SQL's LAG window
// function answers it, and leaving out PARTITION BY silently corrupts the first row of every station.
// Data: Department of Transport and Planning annual metropolitan train station entries (CC BY 4.0), seven files,
// FY18-19 to FY24-25, rounded to 50. Eight outer Werribee line stations (from the GTFS Schedule train feed): 56 rows.
// SQLite 3.50.4 (scratchpad au/b6/wrbe.py).
// Lesson family: SQL window function LAG with PARTITION BY; 0 location-page hits, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'WERRIBEE',
    label: 'Werribee, Melbourne',
    blurb: 'Coding and AI classes for Werribee, with a SQL project that tracks seven years of entries at Werribee station.'
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
  slug: 'best-coding-and-ai-classes-in-werribee-melbourne',
  code: 'wrbe',
  accent: '#621836',
  accentRationale: 'Werribee: a deep wine red (hue 336), chosen by hand at least 10 RGB units from all 1,278 accent declarations in content, the shared stylesheets and the claims log, 12.3:1 on white and 11.6:1 on the paper colour #FBF8F2',
  pageType: 'city',
  place: {
    name: 'Werribee',
    eyebrow: 'Werribee, City of Wyndham, Melbourne, Victoria',
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
  routeLabel: 'Werribee, Melbourne',
  title: 'Best Coding and AI Classes in Werribee, Melbourne',
  description: 'Live online coding and AI classes for Werribee children, teenagers and adults: Scratch, Python, SQL and AI with a real teacher, in small groups or one to one.',
  ogDescription: 'Werribee coding and AI classes, with a SQL project on seven years of entries at Werribee station: 1,211,200 in FY18-19, 351,350 in FY20-21, 1,049,600 in FY24-25.',
  twitterDescription: 'Werribee coding and AI classes, taught live online, first class free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Werribee',
    description: 'Level-matched online coding, SQL and AI lessons for children, teenagers and adults in Werribee, taught live in English.'
  },
  h1: 'Coding and AI classes in Werribee',
  capsuleQ: 'What makes the best coding and AI classes for a Werribee learner?',
  capsule: 'Live lessons with a teacher who matches the level, from Scratch at six to Python, SQL and AI for teenagers and adults, built around real data. For Werribee, that data can start at the station: Victoria\'s published entry counts show 1,049,600 entries at Werribee in FY24-25, still below the 1,211,200 of FY18-19.',
  lead: 'Seven yearly files of station entries make a neat table, and the obvious question is how each year compares with the one before. SQL has a function built for exactly that, LAG. It is short, it is easy to misuse, and when misused it still returns numbers that look reasonable.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Werribee.',
  picks: {
    eyebrow: 'Course picks for Werribee',
    h2: 'Courses that reach SQL, data and AI',
    intro: 'All four courses reach the database skills in the station project at some point. The free lesson shows which one fits.',
    items: [
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'Python and SQL on real public data, with charts and written conclusions.'
      },
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Building with AI help, and learning to test what the AI writes.'
      },
      {
        course: 'mysql-database-complete-masterclass-college',
        band: 'University and adult',
        note: 'SQL from SELECT to window functions such as LAG and RANK.'
      },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Year-on-year analysis, data checks and reporting for work.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Werribee in the Census',
      h2: 'A large suburb, mostly houses, with a station',
      intro: 'Figures for the Werribee suburb (ABS code SAL22750) from the 2021 Census QuickStats. Hoppers Crossing and Werribee South are counted separately.',
      body: [
        {
          kind: 'table',
          caption: 'Werribee, 2021 Census headline counts',
          head: ['Headline', 'Werribee'],
          rows: [
            ['Residents', '50,027'],
            ['Median age', '35'],
            ['Families', '13,202'],
            ['Private dwellings', '19,890'],
            ['Average people per household', '2.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Werribee beside Victoria',
          head: ['Measure', 'Werribee', 'Victoria'],
          rows: [
            ['Homes that are separate houses', '85.0% (14,970)', '73.4%'],
            ['Homes that are flats or apartments', '1.1% (192)', '12.1%'],
            ['Workers who drove to work', '55.0% (12,645)', '49.9%'],
            ['Workers who took the train to work', '2.3% (538)', '1.6%'],
            ['Median age', '35', '38']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Young children', p: 'The Census counted 3,736 Werribee residents aged 0 to 4 and 3,426 aged 5 to 9.' },
            { h3: 'Teenagers', p: '3,088 residents were aged 10 to 14 and 2,705 were aged 15 to 19.' },
            {
              h3: 'Census day',
              p: 'The count took place in an August 2021 lockdown; 4,744 workers, 20.6%, were at home, and the train figure is lower than usual for the same reason.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'QuickStats percentages are rounded and small counts are adjusted for privacy, so we print each value as published and never add rows up into a new total.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Seven years at Werribee station, one year at a time',
      intro: 'We loaded seven yearly files of metropolitan station entries, FY18-19 to FY24-25, for the eight outer stations of the Werribee line into SQLite: 56 rows. Then we used LAG to set each year beside the year before. The publisher rounds entries to the nearest 50, so every change below is a change between rounded figures.',
      body: [
        {
          kind: 'table',
          caption: 'Werribee station entries and year-on-year change (our calculation)',
          head: ['Financial year', 'Entries', 'Change on previous year'],
          rows: [
            ['FY18-19', '1,211,200', 'none (first year)'],
            ['FY19-20', '1,061,600', '-149,600'],
            ['FY20-21', '351,350', '-710,250'],
            ['FY21-22', '532,750', '+181,400'],
            ['FY22-23', '941,250', '+408,500'],
            ['FY23-24', '1,085,250', '+144,000'],
            ['FY24-25', '1,049,600', '-35,650']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'FY24-25 entries as a share of FY18-19 (our calculation)',
          head: ['Station', 'FY20-21 fall', 'FY24-25 vs FY18-19'],
          rows: [
            ['Werribee', '-66.9%', '86.7%'],
            ['Hoppers Crossing', '-67.6%', '74.2%'],
            ['Williams Landing', '-71.0%', '79.1%'],
            ['Aircraft', '-71.8%', '82.1%'],
            ['Westona', '-49.4%', '95.5%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The mistake',
              p: 'Without PARTITION BY, LAG looks at the previous row in the whole table. Each station\'s first year is then compared with a different station\'s last year: 7 of the 56 rows go wrong.'
            },
            {
              h3: 'What it looks like',
              p: 'Werribee\'s FY18-19 row shows a rise of 1,118,100 and Seaholme\'s a fall of 785,400. Both numbers are plausible at a glance and both are nonsense.'
            },
            { h3: 'The fix', p: 'PARTITION BY station restarts LAG for each station, so the first year correctly shows no previous value.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'The largest rise',
          p: 'Aircraft station had the largest single yearly rise of the eight, +166.5% in FY22-23, from a low FY21-22 base. The files give the counts only, so we do not offer reasons for any change.'
        },
        {
          kind: 'p',
          text: 'Financial-year labels such as FY18-19 sort correctly as text, which is why ORDER BY works here without a date column; that is worth checking before trusting any LAG.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The SQL behind it',
      h2: 'One clause that keeps stations apart',
      intro: 'A window function looks at neighbouring rows without collapsing them the way GROUP BY does.',
      body: [
        {
          kind: 'table',
          caption: 'Two versions of the same query',
          head: ['Version', 'Window clause', 'Rows wrong out of 56'],
          rows: [
            ['Careless', 'LAG(entries) OVER (ORDER BY station, fy)', '7'],
            ['Correct', 'LAG(entries) OVER (PARTITION BY station ORDER BY fy)', '0']
          ]
        },
        {
          kind: 'p',
          text: 'The careless version has no error message, no warning and no missing values except the very first row. The only defence is a test: pick one station, work out its first change by hand, and compare.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Line up weekly scores on cards and write the change from the week before under each one.' },
            { h3: 'Secondary students', p: 'Load the station files into SQLite and break, then fix, the window clause.' },
            { h3: 'Adults', p: 'Month-on-month sales or costs per branch use exactly the same pattern.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Werribee',
      h2: 'Schools, stops and the school year',
      intro: 'From the Victorian school locations file, the public transport timetable feed and the state calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Nineteen schools',
              p: 'The 2025 school locations file places 19 schools inside Werribee, including Thomas Chirnside Primary School, Lollypop Creek Primary School and Walcom Ngarrwa Secondary College.'
            },
            { h3: 'Bus stop entries', p: 'Besides the station, the metropolitan bus feed lists 260 stop entries inside the Werribee boundary.' },
            { h3: 'Term 1, 2027', p: 'Victorian government school students begin Term 1 on Thursday 28 January 2027 and finish it on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Suburb boundary',
          p: 'Census and stop figures use the ABS boundary of the Werribee suburb, 42.88 square kilometres. Station entries are for Werribee station alone.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From score cards to SQL windows',
    intro: 'Each age band is a starting suggestion; the free first lesson sets the real level.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch',
        p: 'Games that keep score and compare rounds.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python basics',
        p: 'Variables, lists and simple tables of numbers.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Data and SQL',
        p: 'Real files, queries and checks on every answer.',
        courses: ['data-science-course-for-teens-python-data', 'mysql-mastery-for-teens']
      },
      {
        band: 'University and adult',
        h3: 'Analysis at work',
        p: 'Window functions, reports and automation.',
        courses: ['mysql-database-complete-masterclass-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write the LAG query. Can a Werribee learner tell if it is right?',
    intro: 'That is the skill that matters, because the wrong version runs as smoothly as the right one.',
    p1: 'Ask an assistant for year-on-year change by station and it may well include PARTITION BY. It may also leave it out, especially if the question did not stress that there are several stations. Either way the query runs and the table fills with numbers.',
    p2: 'A learner who has seen Werribee\'s FY18-19 row claim a rise of more than a million entries knows to check the first row of each group. One hand-worked figure is enough to catch the bug.',
    closer: 'In Werribee or anywhere else, the person who checks one row by hand is the one who catches the bug.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Werribee lessons with no commute',
    intro: 'Lessons are live online, so Werribee learners spend the time coding rather than travelling.',
    cells: [
      { h3: 'From home', p: 'A laptop and a stable connection are all a learner needs to join.' },
      { h3: 'Term-time teaching', p: 'We follow the Victorian school terms and break for the state holidays.' },
      { h3: 'Free trial', p: 'A full first lesson, then a clear suggestion for course and timing.' },
      { h3: 'Groups by level', p: 'Fifteen to twenty learners at a matched level, drawn from different places.' },
      { h3: 'Regular rhythm', p: 'Two fixed lessons a week, around eight each month.' },
      { h3: 'Teachers in India', p: 'A 5pm Werribee lesson is 11:30am India time while Melbourne is on daylight saving, then 12:30pm.' }
    ],
    spec: {
      title: 'Lesson times in Melbourne time',
      p: 'Melbourne daylight saving lasts from Sunday 4 October 2026 to Sunday 4 April 2027. India keeps the same time all year, so we give every lesson time in Melbourne time.'
    }
  },
  fees: {
    h2: 'Werribee class fees',
    intro: 'The fee list is short.',
    first: 'A first lesson free of charge, with advice at the end.',
    group: 'A month of group lessons, about eight, with fifteen to twenty learners at one level.',
    private: 'A month of private lessons, about eight, one learner and one teacher.',
    closer: 'Werribee families pay in US dollars, the currency for every family outside India. We take no payment until the trial has settled course and time, and the pricing page explains holidays and missed classes.'
  },
  reviewsH2: 'What families wrote about us on Google',
  book: {
    h2: 'Book a free Werribee class',
    intro: 'Share the learner\'s age and what they enjoy. A six-year-old might start with a Scratch score game; an adult might start with the station query.',
    success: 'Thank you. We will be in touch about a Werribee class soon.'
  },
  faq: {
    h2: 'Werribee coding and AI questions',
    intro: 'Answers to the questions Werribee families and adults ask first.',
    items: [
      {
        q: 'How many people live in Werribee?',
        a: 'The 2021 Census QuickStats for the Werribee suburb count 50,027 residents, with a median age of 35 and 13,202 families.'
      },
      {
        q: 'What does LAG do in SQL?',
        a: 'LAG returns a value from an earlier row in the same window, usually the row just before. It is the standard way to compare each year, month or day with the previous one.'
      },
      {
        q: 'Why does PARTITION BY matter with LAG?',
        a: 'PARTITION BY splits the rows into groups, such as one per station, and LAG never looks across a group boundary. Without it, our station table gave wrong changes on 7 of 56 rows.'
      },
      {
        q: 'How many people used Werribee station in FY24-25?',
        a: 'The published annual figure is 1,049,600 entries, rounded to the nearest 50, against 1,211,200 in FY18-19.'
      },
      { q: 'What age can a child begin coding?', a: 'From about six with Scratch, which needs no typing. Python usually follows at around ten.' },
      {
        q: 'Does the Werribee group course include Copilot Studio?',
        a: 'No. We teach Copilot Studio one to one only; in groups, learners write their AI agents in Python.'
      },
      {
        q: 'Is there a Werribee venue?',
        a: 'No. All classes are live online, we have no office in Australia, and our listed phone number is in India.',
        boiler: true
      },
      {
        q: 'What are the fees for Werribee learners?',
        a: 'The first lesson is free. Group classes are then USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners; one-to-one classes are USD 150 a month. We settle course, format and time before any payment.',
        boiler: true
      },
      {
        q: 'How many learners are in each group?',
        a: 'Five to ten, grouped by level, pace and goals rather than age or suburb. Private lessons are available if no group time suits.',
        boiler: true
      },
      { q: 'Can adults join?', a: 'Yes. Adults study in adult groups or one to one, and SQL for work is a common starting point.' }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Werribee learners',
    html: 'Elsewhere in Wyndham, <a class="cg-inline-link" href="/ai-and-programming-classes-in-point-cook-melbourne">Point Cook</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-tarneit-melbourne">Tarneit</a> each have a page. For the wider picture, see the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> or the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Werribee and Wyndham',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-point-cook-melbourne', label: 'Point Cook' },
    { href: '/vibe-coding-and-ai-agents-classes-in-tarneit-melbourne', label: 'Tarneit' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-wrbe .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.4rem); }
.cg-root.cg-wrbe .cg-hero h1 { font-weight: 690; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-wrbe .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 6%, transparent); padding: 0.85rem 1rem; }
.cg-root.cg-wrbe .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-wrbe .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.015em; }
.cg-root.cg-wrbe .cg-grid-3 { gap: clamp(0.8rem, 2.6vw, 2rem); }
.cg-root.cg-wrbe .cg-table caption { font-weight: 650; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-wrbe .cg-table td:last-child { font-variant-numeric: tabular-nums; }
.cg-root.cg-wrbe .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-wrbe .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Werribee, ABS Census 2021 QuickStats, Werribee suburb SAL22750 (read 10 October 2026): 50,027 people; median age 35; 13,202 families; 19,890 private dwellings; 2.7 people per household; separate houses 85.0% (14,970); flats 1.1% (192); drove to work 55.0% (12,645); train 2.3% (538); worked at home 20.6% (4,744, lockdown Census day); aged 0-4 3,736; 5-9 3,426; 10-14 3,088; 15-19 2,705. Victoria: houses 73.4%, flats 12.1%, drove 49.9%, train 1.6%, median age 38. ABS SAL area 42.8849 square kilometres. Victorian School Locations 2025: 19 schools inside the boundary, including Thomas Chirnside Primary School, Lollypop Creek Primary School and Walcom Ngarrwa Secondary College. GTFS Schedule metro bus feed: 260 stop entries inside the boundary; Werribee station inside. Victorian 2027 Term 1: 28 January to 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'SQL window function LAG. Annual metropolitan train station entries FY18-19 to FY24-25 (rounded to 50) for 8 outer Werribee line stations (Werribee, Hoppers Crossing, Williams Landing, Aircraft, Laverton, Westona, Altona, Seaholme; from GTFS train feed): 56 rows in SQLite 3.50.4. Werribee: 1,211,200; 1,061,600; 351,350; 532,750; 941,250; 1,085,250; 1,049,600; LAG changes -149,600, -710,250, +181,400, +408,500, +144,000, -35,650. Without PARTITION BY: 7 of 56 rows wrong (each station first year except the first station), e.g. Werribee FY18-19 +1,118,100, Seaholme -785,400. FY20-21 falls: Aircraft -71.8%, Williams Landing -71.0%, Hoppers Crossing -67.6%, Werribee -66.9%, Westona -49.4%. FY24-25 as share of FY18-19: Westona 95.5%, Werribee 86.7%, Aircraft 82.1%, Williams Landing 79.1%, Hoppers Crossing 74.2%. Largest yearly rise: Aircraft FY22-23 +166.5%. Script: scratchpad au/b6/wrbe.py.',
    requiredMentions: ['50,027', '13,202', '19,890', '14,970', '12,645', '1,211,200', '1,049,600', 'Lollypop Creek Primary School', 'Walcom Ngarrwa Secondary College'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Werribee suburb (SAL22750).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL22750' },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Department of Transport and Planning, GTFS Schedule (Creative Commons Attribution 4.0), metropolitan train and bus feeds.',
        url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      { claim: 'SQLite window functions: lag(expr), PARTITION BY and ORDER BY in the window definition.', url: 'https://www.sqlite.org/windowfunctions.html' },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL22750 polygon and area).',
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
      'Reasons for any change in station entries (lockdowns, new estates, timetable changes): not claimed; the files give counts only.',
      'That Werribee is the end of the line or the busiest Wyndham station: not claimed.',
      'Selective-entry and special school names: not printed; Catholic and independent school names not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'A total of entries across the eight stations: not computed; published parts are never summed.',
      'Any affiliation with the City of Wyndham, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
