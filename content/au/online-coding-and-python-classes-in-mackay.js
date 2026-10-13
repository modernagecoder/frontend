'use strict';
// Mackay (cg- regional city page, Australia cluster Phase 7, row 148). Shaped page: online coding and Python,
// leading with teenagers and adults.
// Spine: why did my table grow when I joined it? Data: Translink (Queensland Department of Transport and Main
// Roads) GTFS for Mackay, MKY_GTFS.zip listed on data.qld.gov.au, CC BY 4.0, downloaded 7 October 2026: agency
// Mackay Transit Coaches; feed valid 7 October to 6 December 2026; 277 stops, 11 routes (300 to 310), 280 trips
// (204 Monday to Friday, 76 Saturday), 4,687 stop times, 10,220 shape points across 30 shapes. pandas 3.0 joins
// (our code, scratchpad au/r2/mky_join.py): stop_times to trips on trip_id, then routes, then stops on stop_id,
// each many-to-one, keep 4,687 rows. Joining stops by name instead gives 5,572 rows (885 extra): 243 distinct
// names for 277 stops, 34 names shared by two stops, for example "Hoey St at Nott Street". pandas
// validate='many_to_one' raises MergeError on that join. Joining stop times to shape points through shape_id
// (many-to-many) gives 1,725,944 rows, about 368 times the starting table. Lesson family: join cardinality,
// one-to-many joins and row explosion; screened 0 location-page hits on 7 October 2026; claimed by AU-R2.
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Significant Urban Area 3011 Mackay: 84,333
// people; median age 37; 22,006 families; 36,057 private dwellings; 2.5 people per household; separate house
// 24,705 (81.2%; Queensland 74.8%; Australia 72.3%); flat or apartment 1,476 (4.8%; Queensland 12.5%);
// Technicians and Trades Workers 8,110 (19.6%; Queensland 13.7%; Australia 12.9%); Professionals 6,929 (16.7%;
// Queensland 21.4%; Australia 24.0%); Bachelor Degree level and above 9,573 (14.2%; Queensland 21.9%; Australia
// 26.3%); aged 15 to 19 5,093 (6.0%; Queensland 6.1%). Queensland Department of Education: 2026 Term 4 Tuesday
// 6 October to Friday 11 December, 10 weeks; summer holidays 46 days. IANA tz: Australia/Brisbane, no daylight
// saving. Excluded: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'MACKAY', label: 'Mackay', blurb: 'Mackay in north Queensland, its bus timetable in pandas, and the joins that quietly multiply rows.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-mackay',
  code: 'mkay',
  accent: '#283294',
  accentRationale: 'Mackay: a deep reef-channel blue (HSV saturation 0.73, value 0.58, hue 235), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, and 4.8:1 or better on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Mackay',
    eyebrow: 'Mackay, Queensland, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Queensland', href: '/coding-and-ai-classes-in-queensland' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Mackay, Queensland',
  title: 'Online Coding and Python Classes in Mackay | Live Teacher',
  description: 'Live online Python, pandas and data classes for Mackay teenagers and adults, built on real Queensland open data, one to one or in small groups. First lesson free.',
  ogDescription: 'Python classes for Mackay teens and adults, with a project where one wrong join turns a 4,687-row bus table into 1.7 million rows.',
  twitterDescription: 'Mackay Python classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Python and Data Classes for Mackay Learners',
    description: 'Level-matched online Python, pandas, SQL and data analysis for teenagers and adults in Mackay and the Pioneer Valley, taught live in English.'
  },

  h1: 'Online coding and Python classes in Mackay',
  capsuleQ: 'What are the best online coding and Python classes in Mackay?',
  capsule: 'Live Python lessons for Mackay teenagers and adults, with a teacher who works through genuine Queensland data beside you, from the first line to confident pandas. Mackay\'s urban area had 84,333 residents at the 2021 Census, and almost one employed person in five worked in a trade or technical job. Classes are online, privately or with a small group at your level, and the first lesson is free.',
  lead: 'Joining two tables is the most common thing anyone does with data, and the easiest to get silently wrong. Translink publishes Mackay\'s bus timetable as a set of linked tables: stops, routes, trips and the 4,687 rows that say when each bus reaches each stop. Join those rows to the stops table by stop number and you still have 4,687 rows. Join them by stop name instead, which looks just as reasonable, and you get 5,572, because 34 names belong to two stops each. Join them to the route shapes and the table explodes to 1,725,944 rows. No error appears in any of these. Our Mackay learners find out why, and how to make pandas refuse.',
  wa: 'Hello Modern Age Coders, I would like a free Python class for a learner in Mackay.',

  picks: {
    eyebrow: 'Course picks for Mackay',
    h2: 'Python and data courses for Mackay learners',
    intro: 'All four connect to the timetable-join project. Your free lesson works out which suits, and no card is needed.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python for teenagers, from the first variable to loading and combining real data tables.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'A complete Python course for adults, covering files, functions, testing and working with data.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'pandas and SQL for analysing public and workplace data, with every join checked before it is trusted.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'University and adult', note: 'Relational databases, keys and joins from first principles, the theory behind every merge.' }
    ]
  },

  sections: [
    {
      id: 'mackay', tint: '', eyebrow: 'Mackay in the 2021 Census',
      h2: 'A trades city between the cane fields and the reef',
      intro: 'Selected QuickStats for the Mackay Significant Urban Area, with Queensland and Australian comparisons.',
      body: [
        { kind: 'table', caption: 'QuickStats 2021, Mackay urban area, compared with Queensland and Australia', head: ['Measure', 'Mackay', 'Queensland', 'Australia'], rows: [
          ['Residents', '84,333', 'no comparison', 'no comparison'],
          ['Median age', '37', 'no comparison', 'no comparison'],
          ['Families', '22,006', 'no comparison', 'no comparison'],
          ['Technicians and trades workers, share of employed', '8,110 (19.6%)', '13.7%', '12.9%'],
          ['Professionals, share of employed', '6,929 (16.7%)', '21.4%', '24.0%'],
          ['Separate houses, share of occupied homes', '24,705 (81.2%)', '74.8%', '72.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Trade skills', p: 'Technicians and trades workers made up 19.6% of employed Mackay residents, well above the Queensland share of 13.7%.' },
          { h3: 'Homes', p: 'The Census counted 36,057 private dwellings, with 2.5 people in the average household and 1,476 flats or apartments among occupied homes.' },
          { h3: 'Study', p: '9,573 residents aged 15 and over held a bachelor degree or higher, 14.2%, and 5,093 people were aged 15 to 19.' }
        ] },
        { kind: 'p', text: 'One caution we apply to every census table: the bureau makes tiny random changes to small counts to protect privacy, so categories will not always sum to the published total. We copy the bureau\'s numbers as printed and never add pieces together to create new totals.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Why did my table grow when I joined it?',
      intro: 'The Mackay bus timetable in pandas, joined three ways. Only one of them keeps the row count it should.',
      body: [
        { kind: 'table', caption: 'Tables in Translink\'s Mackay feed, downloaded 7 October 2026 (our count)', head: ['Table', 'Rows'], rows: [
          ['Stops', '277'],
          ['Routes (300 to 310)', '11'],
          ['Trips: 204 weekday and 76 Saturday', '280'],
          ['Stop times, one per bus per stop', '4,687'],
          ['Shape points tracing the 30 route shapes', '10,220']
        ] },
        { kind: 'table', mt: true, caption: 'What each join does to the 4,687 stop-time rows (our calculation, pandas 3.0)', head: ['Join', 'Relationship', 'Rows afterwards'], rows: [
          ['Stop times to trips, on trip_id', 'Many to one', '4,687'],
          ['Then to routes and to stops, on stop_id', 'Many to one', '4,687'],
          ['Stop times to stops, on stop name', 'Many to many, because names repeat', '5,572'],
          ['Stop times to shape points, through shape_id', 'Many to many', '1,725,944']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count before and after', p: 'Note the row count of the left table, join, and count again. Any growth on a many-to-one join is a bug.' },
          { h3: '2. Check the key', p: 'Is the column on the right unique? Mackay has 277 stops but only 243 distinct stop names, so the name is not a key.' },
          { h3: '3. Make pandas check', p: 'Pass validate=\'many_to_one\' to merge. On the name join pandas stops with a MergeError instead of quietly adding 885 rows.' }
        ] },
        { kind: 'callout', h3: 'A duplicate that is not an error', p: 'Thirty-four stop names belong to two stops, Hoey St at Nott Street among them. That is normal for a bus network: the two stops usually face each other across the road, one for each direction. The data is fine. The mistake is treating a descriptive name as if it were a unique identifier, and it only shows up as rows multiplying somewhere downstream.' },
        { kind: 'p', text: 'All row counts are ours, from Translink\'s Mackay feed downloaded on 7 October 2026 and joined with pandas 3.0. We make no claim about how buses actually run on any given day; a GTFS feed is a published schedule, not a record of service.' }
      ]
    },
    {
      id: 'pandas', tint: 'tint', eyebrow: 'Joins in practice',
      h2: 'Join habits that would have caught every bad merge',
      intro: 'Five checks that take seconds to write and save hours of chasing wrong totals later.',
      body: [
        { kind: 'table', caption: 'Join hygiene, tested on the Mackay timetable', head: ['Habit', 'In the Mackay project', 'What it catches'], rows: [
          ['Assert the row count', 'Expect 4,687 after a many-to-one join', 'Silent row multiplication'],
          ['Test the key is unique', '243 names against 277 stop IDs', 'Columns that only look like keys'],
          ['Use validate in merge', 'validate=\'many_to_one\' on every lookup join', 'Bad joins at the moment they happen'],
          ['Join on IDs, display names', 'Merge on stop_id, show stop_name later', 'Name collisions and spelling variants'],
          ['Aggregate before joining', 'Summarise shape points per shape first', 'Million-row tables nobody needed']
        ] },
        { kind: 'p', text: 'The shape join is the most instructive failure. Every stop time on a trip meets every shape point on that trip\'s route, so a 20-stop trip on a 400-point shape produces 8,000 rows. Across the network that becomes 1,725,944. If you needed the route length for each trip, one sum per shape before the join gives the answer in 30 rows.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Join small tables by hand on paper, then in pandas, predicting the row count before running each merge.' },
          { h3: 'University students', p: 'Keys, normal forms and join cardinality across pandas and SQL, tested on full transport feeds.' },
          { h3: 'Adults', p: 'Combine workplace spreadsheets safely and stop reports from double-counting because of a careless merge.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is independent of Translink, the Queensland Government, Mackay Regional Council and the statistics bureau, and claims no partnership with them. Census figures are the bureau\'s; every row count here came from our own pandas code.' }
      ]
    },
    {
      id: 'season', tint: '', eyebrow: 'Mackay\'s school year',
      h2: 'A ten-week Term 4 and a long summer break',
      intro: 'The Queensland calendar Mackay families plan around, and why it matters for timetabled data.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 4 of 2026', p: 'Ten weeks from Tuesday 6 October to Friday 11 December, according to the Queensland Department of Education.' },
          { h3: 'Summer holidays', p: 'The department lists 46 days of school holidays from Saturday 12 December 2026 until school returns in late January.' },
          { h3: 'Constant clock', p: 'Queensland does not use daylight saving, so Mackay lesson times stay put all year.' }
        ] },
        { kind: 'spec', title: 'Calendars inside data', p: 'The Mackay feed has one calendar for weekdays and another for Saturdays, each with its own start and end date. Joining trips to calendars is another join with a cardinality to check, and getting it wrong quietly puts Saturday buses on a Tuesday.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From one table to many, joined correctly',
    intro: 'Treat the ages as a rough guide; the free lesson sets the starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Lists and dictionaries', p: 'Python that looks things up by key, the idea underneath every join, using stop numbers and names.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Tables in pandas', p: 'Loading, filtering and merging the Mackay timetable, with row counts checked at every step.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Relational thinking', p: 'Keys, cardinality and normal forms in pandas and SQL on complete public datasets.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'mysql-database-complete-masterclass-college'] },
      { band: 'Adults', h3: 'Reliable reporting', p: 'Python and SQL that combine work data without double counting, plus tests that prove it.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant writes pandas merges instantly. Why should a Mackay learner check them?',
    intro: 'Because a merge on stop name runs without complaint and adds 885 rows that will inflate every total built on top of it.',
    p1: 'Ask an AI tool to combine Mackay\'s stop times with stop details and it will usually produce a tidy one-line merge. Whether it joins on the identifier or on the name is close to a coin toss, and both versions run. One keeps 4,687 rows; the other quietly gives 5,572. Any count, average or chart drawn from the second table is wrong, and nothing on screen says so.',
    p2: 'Learners who have watched a join multiply rows develop reflexes that catch it instantly: count before and after, check that the key is unique, ask pandas to validate the relationship. Applied to AI-written analysis, those three habits are the difference between a report you can sign and one you will have to retract.',
    closer: 'In 2026 code is quick to generate; a Mackay learner who checks every join is the one whose numbers survive a second look.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Andergrove, Mount Pleasant or Walkerston, the same live lesson',
    intro: 'Mackay spreads from the beaches to the cane country inland, and a video lesson reaches all of it without anyone getting on a bus.',
    cells: [
      { h3: 'Coast and valley', p: 'A learner in Bucasia and another in Marian can work together in one class, each from their own home.' },
      { h3: 'Queensland school terms', p: 'Lessons are planned around Queensland year levels and terms, and senior students can relate projects to the subjects they study. Teaching is in English.' },
      { h3: 'A trial that counts', p: 'The free session is a real lesson that ends with a recommended level, course and regular time. You are never asked for card details.' },
      { h3: 'Same-level classmates', p: 'Fifteen to twenty learners at one stage, from Mackay and elsewhere, so regional students learn alongside peers at their level.' },
      { h3: 'Regular schedule', p: 'Two lessons a week, about eight a month, at a fixed time, with school holidays and exam weeks agreed in advance.' },
      { h3: 'Teachers in India', p: 'Mackay never changes its clocks, so a 5pm lesson always begins at 12:30pm where our teachers are.' }
    ],
    spec: { title: 'A fixed gap all year', p: 'Neither Queensland nor India uses daylight saving, so the gap between a Mackay learner and our teachers is four and a half hours in every month. Lesson times are always confirmed in Mackay time.' }
  },

  fees: {
    h2: 'What classes cost in Mackay',
    intro: 'Three prices, plainly stated.',
    first: 'A full first lesson that costs nothing and ends with a level, a course and a time.',
    group: 'A month of classes, typically eight, alongside fifteen to twenty learners at your stage.',
    private: 'About eight classes a month on the same pattern, one teacher with one learner.',
    closer: 'Fees are in US dollars wherever you live, India apart, so families in Slade Point and Beaconsfield get the same invoice and there is no regional rate. We invoice only after the trial agrees a course and a time; the pricing page covers holidays, absences and moving between group and private lessons.'
  },

  reviewsH2: 'What our families wrote on Google',

  book: {
    h2: 'Book a free Python lesson',
    intro: 'All we need is an age and an interest. A Year 9 student might start by looking stop numbers up in a dictionary; an adult might go straight to joining the full Mackay timetable.',
    success: 'Thanks. We will be in touch shortly about a Mackay class.'
  },

  faq: {
    h2: 'Mackay Python class questions',
    intro: 'What Mackay learners and parents ask before starting.',
    items: [
      { q: 'How many people live in Mackay?', a: 'The 2021 Census counted 84,333 people in the Mackay urban area, according to the statistics bureau. The median age was 37.' },
      { q: 'What is join cardinality?', a: 'The relationship between matching rows in two tables: one to one, many to one or many to many. It decides how many rows a join produces. A many-to-one join should never add rows; a many-to-many join can multiply them enormously.' },
      { q: 'What is the Mackay timetable project?', a: 'Learners load Translink\'s open Mackay bus feed into pandas and join its tables three ways. Joining on stop number keeps 4,687 rows; joining on stop name gives 5,572; joining to route shapes gives 1,725,944. They then add checks that catch the bad joins.' },
      { q: 'What does validate do in a pandas merge?', a: 'It tells pandas what relationship you expect, such as many_to_one, and raises an error if the data breaks it. On the Mackay stop-name join it stops the merge instead of letting 885 extra rows slip through.' },
      { q: 'Do you teach Queensland senior students?', a: 'Yes. We follow Queensland year levels and help senior students with computing and maths. Assessment work submitted at school is always the student\'s own.' },
      { q: 'When are lessons for Mackay learners?', a: 'Commonly after school or on Saturday morning, chosen at the trial and quoted in Mackay time. Queensland has no daylight saving, so the gap to our India-based teachers stays the same all year.' },
      { q: 'Can younger children start coding?', a: 'Yes. From age six children work in Scratch and with picture-based tasks, and typed Python follows when they are ready. This page is aimed at teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Mackay?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Mackay Python classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and goals rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Mackay and Queensland learners',
    html: 'The <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland coding page</a> covers the whole state, and Toowoomba learners have their own <a class="cg-inline-link" href="/best-coding-classes-in-toowoomba">Toowoomba page</a>. Anyone moving from blocks to typed code should read <a class="cg-inline-link" href="/after-scratch-next-step-python-australia">after Scratch, the next step is Python</a>. Every Australian page is listed on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Mackay and Queensland',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/best-coding-classes-in-toowoomba', label: 'Toowoomba' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-mkay .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.3rem); }
.cg-root.cg-mkay .cg-hero h1 { font-weight: 770; letter-spacing: -0.019em; line-height: 1.07; }
.cg-root.cg-mkay .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.75rem 0; }
.cg-root.cg-mkay .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-mkay .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.013em; }
.cg-root.cg-mkay .cg-grid-3 { gap: clamp(0.95rem, 2.4vw, 1.95rem); }
.cg-root.cg-mkay .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-mkay .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mkay .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-mkay .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Mackay, ABS Census 2021 QuickStats, Significant Urban Area 3011 (read 7 October 2026): 84,333 people; median age 37; 22,006 families; 36,057 private dwellings; average 2.5 people per household; dwelling structure, occupied private dwellings: separate house 24,705 (81.2 percent; Queensland 74.8; Australia 72.3), flat or apartment 1,476 (4.8 percent; Queensland 12.5; Australia 14.2); occupation: Technicians and Trades Workers 8,110 (19.6 percent; Queensland 13.7; Australia 12.9), Professionals 6,929 (16.7 percent; Queensland 21.4; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 9,573 (14.2 percent; Queensland 21.9; Australia 26.3); aged 15 to 19 5,093 (6.0 percent; Queensland 6.1). Queensland Department of Education term dates: 2026 Term 4 Tuesday 6 October to Friday 11 December (10 weeks); school holidays Saturday 12 December 2026 to Tuesday 26 January 2027 (46 days). IANA tz database: Australia/Brisbane has no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Join cardinality and row explosion. Translink GTFS for Mackay, MKY_GTFS.zip listed on data.qld.gov.au (CC BY 4.0), downloaded 7 October 2026: agency Mackay Transit Coaches; feed_info 20261007 to 20261206; calendars MKY 26_27-43106 (Monday to Friday, 20261007 to 20261204, 204 trips) and MKY 26_27-43105 (Saturday, 20261010 to 20261205, 76 trips); stops 277; routes 11 (300 to 310); trips 280; stop_times 4,687; shapes 10,220 points, 30 shape_id. pandas 3.0.0: stop_times merge trips on trip_id (validate many_to_one) 4,687; merge routes 4,687; merge stops on stop_id 4,687. Stop names: 243 distinct, 34 shared by two stops (maximum 2, e.g. Hoey St at Nott Street). stop_times joined to stops by stop_name: 5,572 rows (885 extra); validate many_to_one raises MergeError. stop_times joined to shapes via trips.shape_id: 1,725,944 rows.',
    requiredMentions: [
      '84,333',
      '22,006',
      '36,057',
      '8,110',
      '6,929',
      '9,573',
      '5,572',
      '1,725,944',
      'Hoey St at Nott Street',
      '46 days of school holidays'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Mackay Significant Urban Area (3011): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3011' },
      { claim: 'Translink General transit feed specification (GTFS), Mackay feed, CC BY 4.0.', url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink' },
      { claim: 'Queensland Department of Education, school term dates 2026.', url: 'https://education.qld.gov.au/about-us/calendar/term-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Brisbane.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That every pair of same-named stops faces across the road: typical of bus networks but not checked stop by stop, so it is stated as usual, not certain.',
      'How Mackay buses actually perform: the feed is a schedule, so no punctuality or reliability claim is made.',
      'Mackay tide and wave datasets on the same portal: not used; the project needed only the timetable.',
      'Bureau of Meteorology station data: the observations feed returned 403 and was not circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Translink, the Queensland Government, Mackay Regional Council or the ABS.'
    ]
  }
};
