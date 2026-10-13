'use strict';
// Warragul and Drouin (cg- regional city page, Australia cluster Phase 7, row 172). Shaped page (online coding and
// Python): leads with teenagers and adults. Spine: the town bus timetable lists 1,542 trips; how many different
// journeys are there really, and why must the grouping key be a tuple? Data: Transport Victoria GTFS Schedule
// (Creative Commons Attribution 4.0, discover.data.vic.gov.au), feed folder 4 (regional bus) dated 2 October 2026.
// Routes 80, 81, 82, 83, 85 and 86 (Warragul and Drouin town services). Measured by us (scratchpad au/r5/war_pat.py):
// 1,542 trips; 21,135 stop_times rows; 13 distinct ordered stop sequences (180 stops across them); every sequence has a
// single timing pattern (minutes from first departure); 332 distinct (sequence, start time) pairs; 48 service_id
// calendars. Per route trips/sequences: 80 276/2, 81 276/2, 82 270/2, 83 270/2, 85 279/3, 86 171/2. Route 85 direction 0
// holds two sequences from Drouin Station: one to Warragul Station, one looping back to Drouin Station. A frozenset key
// also yields 13 and a first/last stop key also yields 13 on this feed (no pattern is a contiguous piece of another);
// a list key raises TypeError (unhashable). Route names and stop names other than the two stations are not printed
// (route 80 is named after a hospital; some stops name aged care or chapels). Lesson family: trip-pattern
// deduplication with tuple keys; screened free site-wide on 9 October 2026 and claimed by AU-R5.
// Place facts read raw on 8 October 2026: ABS Census 2021 QuickStats, Warragul - Drouin Significant Urban Area (2020),
// with Victoria and Australia: 42,827 people; median age 40 (Victoria 38; Australia 38); 11,719 families; 17,790
// private dwellings; 2.5 people per household; separate house 14,220 (89.7 percent; Vic 73.4; Australia 72.3); flat or
// apartment 575 (3.6; Vic 12.1); Professionals 3,580 (18.2; Vic 25.0); Technicians and Trades Workers 3,121 (15.8; Vic
// 12.6); Labourers 2,514 (12.8; Vic 8.8); Bachelor Degree level and above 5,888 (17.1; Vic 29.2; Australia 26.3); aged
// 15 to 19: 2,362 (5.5); aged 20 to 24: 2,216 (5.2); industry: Primary Education 560 (2.8; Vic 1.9), Secondary
// Education 497 (2.5; Vic 1.7). Victorian school term dates (vic.gov.au): 2026 Term 4 Monday 5 October to Friday 18
// December; holidays Monday 21 December 2026 to Wednesday 27 January 2027, students start Thursday 28 January in
// government schools; 2027 Term 1 ends Thursday 25 March. IANA tz: Australia/Melbourne, AEST UTC+10, AEDT UTC+11 from
// the first Sunday in October to the first Sunday in April. Excluded by the cluster rules: income, rent, mortgage,
// ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'WARRAGUL', label: 'Warragul and Drouin', blurb: 'Warragul and Drouin, 1,542 town bus trips, and the tuple key that shows how few journeys they really are.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-warragul',
  code: 'wrgl',
  accent: '#1A389A',
  accentRationale: 'Warragul: a deep Strzelecki ridge blue (HSV saturation 0.83, value 0.60, hue 226), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 10.1:1 on white and 8.2:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Warragul',
    eyebrow: 'Warragul and Drouin, Victoria',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Victoria', href: '/coding-and-ai-classes-in-victoria' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Warragul, Victoria',
  title: 'Online Coding and Python Classes in Warragul',
  description: 'Live online Python and coding classes for Warragul and Drouin teens and adults, built on Victorian transport data. Small groups or one to one, first lesson free.',
  ogDescription: 'Python classes for Warragul and Drouin teens and adults, with a project that boils 1,542 bus trips down to 13 journeys using a tuple key.',
  twitterDescription: 'Online Python and coding classes in Warragul and Drouin, live, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online Python and Coding Classes for Warragul Learners',
    description: 'Level-matched online Python, dictionaries and data cleaning, timetable data and problem solving for teenagers and adults in Warragul, Drouin and Baw Baw, taught live in English.'
  },

  h1: 'Online coding and Python classes in Warragul',
  capsuleQ: 'How should someone in Warragul pick the best online Python class?',
  capsule: 'Look for a live teacher, a class at the learner\'s level and projects on data the learner can check. Warragul and Drouin together counted 42,827 residents at the 2021 Census. Our lessons run over video, one to one or with a few classmates working at the same stage, and the first one is free.',
  lead: 'Transport Victoria publishes every scheduled bus trip in the state as an open timetable feed. The six town routes serving Warragul and Drouin account for 1,542 trips and 21,135 rows of stop times, which sounds like a big network. Group the trips by the exact ordered list of stops they visit and only 13 distinct journeys remain, each run to an identical timing pattern. Python makes that grouping one line long, provided the key is a tuple. Try a list and the program stops with an error; try a set and it quietly forgets which way the bus is going.',
  wa: 'Hello Modern Age Coders, I would like a free Python class for a learner in Warragul.',

  picks: {
    eyebrow: 'Python course picks for Warragul',
    h2: 'Python routes for Warragul and Drouin learners',
    intro: 'Four starting points, chosen by what the learner wants Python to do. The free lesson confirms the stage, and we take no card details.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Lists, tuples, dictionaries and files, with real timetables as practice data.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Grouping, counting and summarising large tables with Python.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Hashing, mutability and the data model that decides what can be a dictionary key.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults working with data', note: 'Deduplicating and compressing operational data before anyone reports on it.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Warragul and Drouin in the Census',
      h2: 'Two Baw Baw towns counted together: 42,827 people',
      intro: 'ABS 2021 QuickStats for the Warragul and Drouin urban area, compared with Victoria and the country.',
      body: [
        { kind: 'table', caption: 'Warragul and Drouin, 2021 Census', head: ['Statistic', 'Warragul and Drouin', 'Victoria', 'Australia'], rows: [
          ['Population', '42,827', 'Not reported', 'Not reported'],
          ['Median age', '40', '38', '38'],
          ['Families', '11,719', 'Not reported', 'Not reported'],
          ['Private dwellings', '17,790', 'Not reported', 'Not reported'],
          ['Separate houses, share of occupied dwellings', '14,220, or 89.7%', '73.4%', '72.3%'],
          ['Technicians and trades workers', '3,121, or 15.8%', '12.6%', '12.9%'],
          ['Bachelor degree or above, aged 15 and over', '5,888, or 17.1%', '29.2%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Houses, not flats', p: 'Only 575 dwellings were flats or apartments, 3.6% of occupied homes, against 12.1% across Victoria.' },
          { h3: 'Schools as employers', p: 'Primary education employed 560 residents and secondary education 497, both larger shares than in Victoria as a whole.' },
          { h3: 'Teenagers in town', p: 'There were 2,362 residents aged 15 to 19 and 2,216 aged 20 to 24 in 2021.' }
        ] },
        { kind: 'p', text: 'The ABS perturbs small census cells for confidentiality, which can stop table rows matching their totals. We show each figure as the bureau printed it and have added nothing up ourselves.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many different bus journeys do Warragul and Drouin really have?',
      intro: 'Six town routes from Transport Victoria\'s timetable feed, dated 2 October 2026, grouped in Python.',
      body: [
        { kind: 'table', caption: 'Trips and distinct stop sequences by route (our count)', head: ['Route', 'Trips in the feed', 'Distinct stop sequences'], rows: [
          ['80', '276', '2'],
          ['81', '276', '2'],
          ['82', '270', '2'],
          ['83', '270', '2'],
          ['85', '279', '3'],
          ['86', '171', '2']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Build the key', p: 'For each trip, sort its stop times by sequence number and collect the stop IDs into a tuple. A tuple keeps the order and can be a dictionary key.' },
          { h3: '2. Group and count', p: 'A dictionary from key to trip list turns 1,542 trips into 13 groups. Checking the minutes between stops shows each group runs to one timing pattern.' },
          { h3: '3. Find the real repeats', p: 'Adding the first departure time gives 332 timed departures. The rest of the 1,542 trips repeat those across 48 service calendars for different days and dates.' }
        ] },
        { kind: 'callout', h3: 'Why route 85 has three sequences', p: 'Two of route 85\'s sequences leave Drouin Station in the same direction. One runs to Warragul Station; the other loops around Drouin and returns to where it began. A key built only from the first and last stop still separates them here, because the loop ends at Drouin, but that is luck rather than design. The ordered tuple is the only key that is guaranteed to tell two different journeys apart.' },
        { kind: 'p', text: 'On this feed a frozenset of stops also happens to give 13 groups, because no two journeys visit the same stops in a different order. A learner proves why that cannot be relied on by building a small test case where an outbound and an inbound trip share every stop, and watching the set key merge them.' }
      ]
    },
    {
      id: 'keys', tint: 'tint', eyebrow: 'Choosing a key',
      h2: 'Four ways to key a trip, and which ones survive',
      intro: 'The same question asked four ways on the Warragul and Drouin trips.',
      body: [
        { kind: 'table', caption: 'Candidate grouping keys', head: ['Key', 'Result on this feed', 'Problem'], rows: [
          ['A list of stop IDs', 'TypeError: unhashable type', 'Lists can change, so Python refuses them as keys'],
          ['A tuple of stop IDs', '13 groups', 'None: order kept and hashable'],
          ['A frozenset of stop IDs', '13 groups', 'Would merge journeys that run the same stops in reverse'],
          ['First and last stop', '13 groups', 'Would merge different routes between the same two ends']
        ] },
        { kind: 'p', text: 'Three keys agree on this data and only one is correct in general. That is the real lesson: a result that happens to match is not evidence that the method is sound. Our Warragul learners write the test that separates the keys before they trust any of them, then explain the difference in plain words.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Group the trips, count the journeys and explain in writing why a list key fails and a tuple key works.' },
          { h3: 'University students', p: 'Hashing, immutability and how dictionaries find keys, with timing comparisons on the full feed.' },
          { h3: 'Adults at work', p: 'Spotting repeated records in logs, rosters or order files, and compressing them without losing information.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not connected with Transport Victoria, Baw Baw Shire or the ABS. The timetable feed and census data are theirs; the groups, counts and key comparisons are our own analysis, and they describe the published timetable rather than any bus actually running.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Warragul',
      h2: 'Victorian terms and summer time',
      intro: 'When Warragul learners have school, and how the clocks move.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 4 in 2026', p: 'Victoria\'s Term 4 runs from Monday 5 October to Friday 18 December 2026.' },
          { h3: 'Back in 2027', p: 'Government school students return on Thursday 28 January 2027, and Term 1 finishes on Thursday 25 March.' },
          { h3: 'Daylight saving', p: 'Victoria moves to summer time on the first Sunday in October and back on the first Sunday in April.' }
        ] },
        { kind: 'spec', title: 'An hour that moves twice a year', p: 'India keeps the same clock all year, so the gap to Warragul is four and a half hours in winter and five and a half in summer. Lessons are fixed in Warragul time and the shift is handled on our side.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first dictionary to clean data pipelines',
    intro: 'The ages are approximate. The trial lesson finds the right stage.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Collections', p: 'Lists, tuples and dictionaries, and why some can be keys and others cannot.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Grouping data', p: 'Reading CSV files, grouping rows and testing keys on real timetable data.', courses: ['data-science-course-for-teens-python-data', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Hashing in depth', p: 'Hash tables, immutability and performance on files with tens of thousands of rows.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Reliable data work', p: 'Deduplication, compression and checks that survive new data arriving.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant choose the right key?',
    intro: 'It might pick one that works today and fails next month.',
    p1: 'Ask an assistant to group bus trips by their stops and it will often reach for a set, because sets feel natural for "the same stops". On the Warragul and Drouin feed that code returns 13 groups, matching the correct answer, so nothing looks wrong. The flaw only shows when a future timetable adds a reverse journey over the same stops.',
    p2: 'Our Warragul learners treat matching answers as a reason to test harder, not to stop. They construct the case that breaks a key, run every candidate on it, and keep the one that survives. The assistant still writes most of the code; the learner decides which code deserves to stay.',
    closer: 'A Warragul learner who can explain why a tuple beat a set will read any AI-generated Python more carefully in 2026, and that is why the coding underneath still matters.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Drouin to Warragul, one Python lesson',
    intro: 'The two towns share the Princes Way corridor, and a live online class covers both.',
    cells: [
      { h3: 'Either town, same class', p: 'A learner in Drouin and one in Warragul can join one lesson from their own homes.' },
      { h3: 'Victorian levels', p: 'Lessons follow Victorian year levels, including VCE study for senior students, in English.' },
      { h3: 'Free first session', p: 'Write some real Python with a teacher, then receive a suggested stage, course and time; no card required.' },
      { h3: 'Fifteen to twenty learners', p: 'Groups share a level and draw from Victoria, the rest of Australia and abroad.' },
      { h3: 'Twice weekly', p: 'Normally two lessons a week, about eight a month, with Victorian holidays planned in.' },
      { h3: 'Clock changes handled', p: 'When daylight saving starts or ends, the lesson stays at the same Warragul time.' }
    ],
    spec: { title: 'Every time in Warragul time', p: 'Confirmed lesson times are always written for Victoria, so families never work out a conversion.' }
  },

  fees: {
    h2: 'What Python classes cost in Warragul',
    intro: 'Here is the full list.',
    first: 'A no-cost first lesson that finishes with a stage, a course and a time.',
    group: 'A month of group lessons, typically eight, with fifteen to twenty learners at your level.',
    private: 'Typically eight one-to-one lessons a month with one teacher.',
    closer: 'Warragul and Drouin learners pay the national rate in US dollars, with no Gippsland extra. Nothing is billed until the trial has settled a course and a slot; the pricing page has the details on holidays, missed lessons and swapping formats.'
  },

  reviewsH2: 'Families on Google, in their own words',

  book: {
    h2: 'Tell us where the learner is with Python',
    intro: 'We set the first task to match: a dictionary of favourite things for a Year 7 beginner, the bus-trip grouping problem for a Year 10 student, or the full timetable feed and its key question for an adult.',
    success: 'Thank you. We will be in touch soon about a Python class in Warragul.'
  },

  faq: {
    h2: 'Warragul Python and coding questions',
    intro: 'What Warragul and Drouin learners and parents ask most.',
    items: [
      { q: 'How many people live in Warragul and Drouin?', a: 'The combined urban area counted 42,827 residents in 2021, with a median age of 40.' },
      { q: 'What is a tuple in Python?', a: 'A tuple is an ordered, unchangeable sequence of values. Because it cannot change, Python can hash it, so a tuple can be a dictionary key or a set member, which a list cannot.' },
      { q: 'What is the Warragul bus project?', a: 'Learners take the town routes from Transport Victoria\'s timetable feed, group 1,542 trips by their ordered stops into 13 journeys, and test four candidate keys to see which one is correct in general.' },
      { q: 'Is this useful for VCE?', a: 'The skills overlap with VCE Applied Computing, especially data handling and testing. Lessons support understanding; school assessments remain the student\'s own work, and no results are promised.' },
      { q: 'Does an adult beginner fit in?', a: 'Yes. Adults are placed by level, and many start with no programming at all before moving to real data within a few weeks.' },
      { q: 'What times can Warragul learners book?', a: 'After school or at weekends, fixed in the trial and confirmed in Victorian time. Daylight saving changes the gap to India, not the lesson time.' },
      { q: 'What about younger children?', a: 'We teach from age 6, often beginning with Scratch. This page is about teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Warragul?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Warragul coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Victoria',
    h2: 'More for Warragul and Victorian learners',
    html: 'Elsewhere in Victoria there are <a class="cg-inline-link" href="/online-coding-and-python-classes-in-geelong">online Python classes in Geelong</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-ballarat">Python classes in Ballarat</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">vibe coding and AI agents in Melbourne</a>. VCE students can see <a class="cg-inline-link" href="/vce-applied-computing-data-analytics-help">VCE Applied Computing Data Analytics help</a>, and the state page is <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">coding and AI classes in Victoria</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Warragul and Victoria',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-geelong', label: 'Geelong' },
    { href: '/online-coding-and-python-classes-in-ballarat', label: 'Ballarat' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-wrgl .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.9vw, 2.4rem); }
.cg-root.cg-wrgl .cg-hero h1 { font-weight: 720; letter-spacing: -0.017em; line-height: 1.09; }
.cg-root.cg-wrgl .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-wrgl .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-wrgl .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.011em; }
.cg-root.cg-wrgl .cg-grid-3 { gap: clamp(0.88rem, 2.25vw, 1.68rem); }
.cg-root.cg-wrgl .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-wrgl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wrgl .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-wrgl .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Warragul - Drouin Significant Urban Area, ABS Census 2021 QuickStats, area code 2020, with Victoria and Australia (read 8 October 2026): 42,827 people; median age 40 (Victoria 38; Australia 38); 11,719 families; 17,790 private dwellings; 2.5 people per household; separate house 14,220 (89.7 percent; Vic 73.4; Australia 72.3); flat or apartment 575 (3.6 percent; Vic 12.1); Professionals 3,580 (18.2 percent; Vic 25.0); Technicians and Trades Workers 3,121 (15.8 percent; Vic 12.6; Australia 12.9); Labourers 2,514 (12.8 percent; Vic 8.8); Bachelor Degree level and above 5,888 (17.1 percent; Vic 29.2; Australia 26.3); aged 15 to 19: 2,362 (5.5 percent); aged 20 to 24: 2,216 (5.2 percent); industry: Primary Education 560 (2.8 percent; Vic 1.9), Secondary Education 497 (2.5 percent; Vic 1.7). Victorian school term dates (vic.gov.au): 2026 Term 4 Monday 5 October to Friday 18 December; government school students start Thursday 28 January 2027; 2027 Term 1 ends Thursday 25 March. IANA tz database: Australia/Melbourne AEST UTC+10, AEDT UTC+11 first Sunday in October to first Sunday in April; Asia/Kolkata UTC+5:30.',
    localProject: 'Trip-pattern deduplication with tuple keys. Transport Victoria GTFS Schedule (CC BY 4.0, discover.data.vic.gov.au), regional bus folder 4, feed dated 2 October 2026. Routes 80, 81, 82, 83, 85, 86. 1,542 trips; 21,135 stop_times rows; 13 distinct ordered stop sequences (180 sequence stops); one timing pattern per sequence; 332 distinct (sequence, first departure) pairs; 48 service_ids. Trips/sequences: 80 276/2; 81 276/2; 82 270/2; 83 270/2; 85 279/3; 86 171/2. Route 85 direction 0: Drouin Station to Warragul Station, and a Drouin loop returning to Drouin Station. Frozenset key 13; first/last stop key 13; no sequence is a contiguous piece of another; list key raises TypeError (unhashable type). Route 80 name and stop names other than the two stations deliberately not printed.',
    requiredMentions: [
      '42,827',
      '11,719',
      '17,790',
      '14,220',
      '3,121',
      '5,888',
      '21,135 rows',
      '332 timed departures',
      'Drouin to Warragul'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Warragul - Drouin Significant Urban Area (2020): people, median age, families, dwellings, dwelling structure, occupation, education, age, industry.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2020' },
      { claim: 'Transport Victoria GTFS Schedule, Creative Commons Attribution 4.0, regional bus feed.', url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule' },
      { claim: 'Victorian Government, school term dates: 2026 Term 4, 2027 start and Term 1 end.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'IANA time zone database, australasia file: Australia/Melbourne offsets and daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any statement about how often buses actually run, ridership or reliability: the feed is a published schedule, and only its structure is analysed.',
      'Printing route 80\'s name or stop names that refer to a hospital, aged care or a chapel: excluded under the cluster rules on health and religion.',
      'Treating the 48 service calendars as 48 different days: a service_id is a calendar pattern, and the page does not decode them.',
      'OpenStreetMap data and Bureau of Meteorology observations: Overpass returned 406 and BOM 403 to this machine in October 2026; neither was circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Transport Victoria, Baw Baw Shire Council, the Victorian Department of Education or the ABS.'
    ]
  }
};
