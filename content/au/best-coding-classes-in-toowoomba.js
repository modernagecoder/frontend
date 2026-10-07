'use strict';
// Toowoomba (cg- regional city page, Australia cluster Phase 7, row 143). Shaped page: leads with teenagers and
// adults; younger learners are welcome but are not the focus here.
// Spine: how does a journey planner find the earliest arrival? Data: Translink (Queensland Department of
// Transport and Main Roads) GTFS for Toowoomba, TWB_GTFS.zip from data.qld.gov.au, CC BY 4.0, downloaded
// 7 October 2026: agency Bus Qld Toowoomba; feed valid 7 October to 6 December 2026; 642 stop records (641
// boarding stops plus one parent station), 8 routes (901 to 907 and 950), 370 trips, 17,272 stop times.
// Weekday service only: 202 trips giving 9,444 stop-to-stop connections. Connection Scan Algorithm (our code,
// scratchpad au/r2/twb_csa.py): source Toowoomba bus station stop 2A, footpaths between stops within 150 m at
// 1.2 m/s. Leaving at 08:00: 8,397 connections scanned, all 641 stops reached during the day, 376 by 09:00,
// travel time quartiles 33.0, 52.0 and 77.0 minutes; 5 stops first reached after noon; the last stop is first
// reached at 15:50, its only weekday arrival. Leaving at 08:05: 373 stops by 09:00, median 47.2 minutes. A
// brute-force check (repeated relaxation over every trip until nothing changes, 2 passes) agrees on every stop.
// Lesson family: Connection Scan Algorithm; screened 0 location-page hits on 7 October 2026; claimed by AU-R2.
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Significant Urban Area 3016 Toowoomba:
// 142,163 people; median age 37; 37,577 families; 60,212 private dwellings; 2.5 people per household; separate
// house 42,814 (80.1%; Queensland 74.8%; Australia 72.3%); flat or apartment 2,358 (4.4%; Queensland 12.5%;
// Australia 14.2%); Professionals 14,198 (21.5%; Queensland 21.4%; Australia 24.0%); Bachelor Degree level and
// above 23,818 (20.9%; Queensland 21.9%; Australia 26.3%); aged 15 to 19 9,586 (6.7%; Queensland 6.1%;
// Australia 5.7%). Queensland Department of Education term dates: 2026 Term 4 Tuesday 6 October to Friday
// 11 December; summer holidays Saturday 12 December to Tuesday 26 January 2027. IANA tz: Australia/Brisbane, no
// daylight saving; Asia/Kolkata UTC+5:30. Excluded by the cluster rules: income, rent, mortgage, ancestry,
// birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'TOOWOOMBA', label: 'Toowoomba', blurb: 'Toowoomba on the Darling Downs, a bus timetable of 9,444 weekday connections, and the Connection Scan Algorithm.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-toowoomba',
  code: 'twba',
  accent: '#307214',
  accentRationale: 'Toowoomba: a deep leaf green (HSV saturation 0.83, value 0.45, hue 103), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, with 4.8:1 or better on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Toowoomba',
    eyebrow: 'Toowoomba, Queensland, Australia',
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
  routeLabel: 'Toowoomba, Queensland',
  title: 'Best Coding Classes in Toowoomba | Live Online, Teens and Adults',
  description: 'Live online coding, Python and algorithms classes for Toowoomba teenagers and adults, taught by a real teacher one to one or in small groups. First lesson free.',
  ogDescription: 'Coding classes for Toowoomba teens and adults, with a project that runs the Connection Scan Algorithm on the city\'s real bus timetable.',
  twitterDescription: 'Toowoomba coding classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Algorithms Classes for Toowoomba Learners',
    description: 'Level-matched online Python, algorithms, timetable data and problem solving for teenagers and adults across Toowoomba and the Darling Downs, taught live in English.'
  },

  h1: 'Coding classes in Toowoomba',
  capsuleQ: 'What are the best coding classes in Toowoomba?',
  capsule: 'For a Toowoomba teenager or adult, a live class with a teacher who builds real programs with you, from first Python lines to the algorithms behind journey planners, using Queensland\'s own open data. The 2021 Census counted 142,163 people in the Toowoomba urban area, and 9,586 of them were aged 15 to 19. Lessons run over video, one to one or with a small group at your level, and the opening lesson costs nothing.',
  lead: 'Type two places into a journey planner and an answer appears in a blink. Behind that blink sits an algorithm, and one of the neatest is the Connection Scan Algorithm. It treats a timetable as a single long list of hops, each one a bus leaving one stop and reaching the next, sorted by departure time, and reads that list once from top to bottom. Translink publishes Toowoomba\'s bus timetable as open data. On a weekday its 202 trips break into 9,444 such hops. Starting from the bus station at 8:00 in the morning, our code walked the list and worked out the earliest time a rider could reach every one of the 641 stops in the city. Learners write the same program, then try to break it.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Toowoomba.',

  picks: {
    eyebrow: 'Course picks for Toowoomba',
    h2: 'Four places a Toowoomba learner could start',
    intro: 'Each fits the timetable project on this page. The free first lesson settles which one, and nobody asks for a card.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from a blank file to reading real timetable files, one well-understood step at a time.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Searches, sorting and shortest paths, each tested on real networks rather than tidy textbook graphs.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'The algorithms that power routing, scheduling and search, with careful attention to cost and correctness.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Loading, checking and summarising public data with Python and SQL so the answers can be trusted.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Toowoomba in the Census',
      h2: 'A garden city of houses on the range',
      intro: 'QuickStats published for the Toowoomba Significant Urban Area after the 2021 Census, beside Queensland and Australia.',
      body: [
        { kind: 'table', caption: 'Census QuickStats 2021: Toowoomba urban area beside Queensland and Australia', head: ['Measure', 'Toowoomba', 'Queensland', 'Australia'], rows: [
          ['People', '142,163', 'n/a', 'n/a'],
          ['Median age', '37', 'n/a', 'n/a'],
          ['Families', '37,577', 'n/a', 'n/a'],
          ['Private dwellings', '60,212, with 2.5 people per household', 'n/a', 'n/a'],
          ['Separate houses, share of occupied homes', '42,814, or 80.1%', '74.8%', '72.3%'],
          ['Flats or apartments, share of occupied homes', '2,358, or 4.4%', '12.5%', '14.2%'],
          ['Residents aged 15 to 19', '9,586, or 6.7%', '6.1%', '5.7%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Houses, mostly', p: 'Four in five occupied homes are separate houses, and only 4.4% are flats or apartments, a third of Queensland\'s share.' },
          { h3: 'A student city', p: 'People aged 15 to 19 make up 6.7% of Toowoomba, a larger slice than in Queensland or Australia as a whole.' },
          { h3: 'Degrees and jobs', p: '23,818 residents aged 15 and over held a bachelor degree or higher, 20.9%, and 14,198 employed residents worked as professionals.' }
        ] },
        { kind: 'p', text: 'One habit we teach with any census table: the bureau nudges every small count slightly to protect privacy, so the rows of a table will not always add up to its printed total. We copy totals and percentages exactly as published and never build new totals by adding rows together.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How does a journey planner find the earliest bus?',
      intro: 'The Connection Scan Algorithm, run on Translink\'s open timetable for Toowoomba: one pass through every weekday hop, sorted by departure time.',
      body: [
        { kind: 'table', caption: 'What the Toowoomba feed contains (our count of the 7 October 2026 download)', head: ['Item', 'Figure'], rows: [
          ['Routes in the feed', '8, numbered 901 to 907 and 950'],
          ['Boarding stops', '641'],
          ['Weekday trips', '202'],
          ['Weekday connections (one bus, one stop to the next)', '9,444'],
          ['Dates the feed covers', '7 October to 6 December 2026']
        ] },
        { kind: 'table', mt: true, caption: 'Earliest arrivals from Toowoomba bus station stop 2A on a weekday (our calculation)', head: ['Question', 'Leaving 8:00am', 'Leaving 8:05am'], rows: [
          ['Connections the scan reads', '8,397', '8,361'],
          ['Stops reachable by 9:00am', '376', '373'],
          ['Median time to a stop, counted from leaving', '52.0 minutes', '47.2 minutes'],
          ['Stops first reachable after noon', '5', '5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Sort', p: 'Every weekday hop becomes one row with a departure time, an arrival time, two stops and a trip. Sorting by departure puts the whole day in order.' },
          { h3: '2. Scan', p: 'Read the rows once. If you could be at the departure stop in time, or you are already on that trip, the arrival stop may get a new earliest time.' },
          { h3: '3. Check', p: 'A slower method that keeps relaxing every trip until nothing improves needed two passes and agreed with the scan at all 641 stops.' }
        ] },
        { kind: 'callout', h3: 'Why leaving five minutes later looks faster', p: 'Leave at 8:05 instead of 8:00 and the median journey shrinks by almost five minutes. The buses are identical; what changed is the waiting. Travel time is counted from the moment you set off, so a later start simply wastes less time at the stop. Learners meet this the first time they compare two departure times, and it teaches them to ask what a number actually measures before trusting it.' },
        { kind: 'p', text: 'Every figure in this project is ours, computed from the Translink file downloaded on 7 October 2026, with short walks allowed between stops less than 150 metres apart at 1.2 metres per second. A different walking rule gives slightly different answers. One stop is first reachable only at 3:50pm, because its single weekday arrival is in the afternoon. We make no claim about how the buses run on any particular day.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Inside the algorithm',
      h2: 'Four ideas that make one pass enough',
      intro: 'Why a single top-to-bottom read of the timetable can match a slower search that loops until it settles.',
      body: [
        { kind: 'table', caption: 'The pieces of the Connection Scan Algorithm and what each one protects', head: ['Idea', 'In the Toowoomba code', 'What goes wrong without it'], rows: [
          ['Sorted connections', 'All 9,444 weekday hops ordered by departure time', 'A later hop is read before an earlier one and arrivals come out too late'],
          ['Earliest arrival per stop', 'One number per stop, lowered whenever a hop improves it', 'You keep every route ever found and run out of memory'],
          ['Trip flags', 'Once you can board a trip, every later hop on it is usable', 'Riders get thrown off a bus they are already on'],
          ['Footpaths', 'Walks under 150 metres between nearby stops', 'Two platforms metres apart look like separate islands'],
          ['A slow second method', 'Repeated relaxation, compared stop by stop', 'A clever bug goes unnoticed because nothing checks it']
        ] },
        { kind: 'p', text: 'The scan reads 8,397 of the 9,444 weekday hops when leaving at 8:00, because hops that depart earlier can never be caught. That one comparison, departure time against your start, is the whole trick: the timetable is already in the order that time flows, so the algorithm never needs to look back.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Draw a tiny timetable on paper with four buses, run the scan by hand, then write it in Python and feed it the real Toowoomba file.' },
          { h3: 'University students', p: 'Compare the scan with Dijkstra\'s algorithm on a time-expanded graph, and measure which one does less work on a real feed.' },
          { h3: 'Adults', p: 'Learn to read GTFS, the format almost every transport operator publishes, and answer questions about service with your own code.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders works independently of Translink, the Queensland Government, Toowoomba Regional Council and the statistics bureau, and claims no partnership with any of them. Census figures come from the bureau; the counts, arrival times and medians were all produced by our own code from the Translink file.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Toowoomba',
      h2: 'Term 4 in Queensland and clocks that never change',
      intro: 'Two calendar details that shape when a Toowoomba learner studies.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 4 of 2026', p: 'The Queensland Department of Education lists Term 4 from Tuesday 6 October to Friday 11 December 2026, then holidays until Tuesday 26 January 2027.' },
          { h3: 'No daylight saving', p: 'Queensland keeps the same clock all year, so a Toowoomba lesson time never moves when the southern states change theirs.' },
          { h3: 'One feed, one term', p: 'The timetable file covers 7 October to 6 December 2026, which falls inside Term 4.' }
        ] },
        { kind: 'spec', title: 'A timetable is a dataset with deadlines', p: 'Transport feeds expire. Toowoomba\'s current file stops at 6 December 2026, so any program built on it must notice when its data has run out. Checking a file\'s own start and end dates before answering a question is a small habit that prevents confident, out-of-date answers.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From reading a timetable to writing a journey planner',
    intro: 'The ages are guides only; the free lesson decides where each learner begins.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Rows and times', p: 'Python that reads a small CSV of buses, converts clock times to minutes and answers simple questions about them.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Algorithms on timetables', p: 'Sorting, scanning and shortest paths, tested against the real Toowoomba feed and against each other.', courses: ['problem-solving-dsa-masterclass-teens', 'java-programming-masterclass-for-teens'] },
      { band: 'University', h3: 'Routing at scale', p: 'Time-dependent graphs, the scan and its relatives, with complexity measured on full state feeds.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Answers you can defend', p: 'Public data, careful checks and clear reports for work, study or community projects.', courses: ['data-analysis-mastery-course-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write a journey planner in seconds. Why should a Toowoomba learner understand one?',
    intro: 'Because a generated planner that forgets the trip flags will quietly throw riders off buses, and only someone who knows the algorithm will spot it.',
    p1: 'Ask an AI assistant for code that finds the earliest arrival and you will get something that runs. Whether it is right is another matter. Drop the rule that lets a rider stay on a bus they have already boarded and the program still produces plausible times, just later ones. Nothing crashes. The error only shows up when you compare against a second method, as our brute-force check does across all 641 stops.',
    p2: 'That comparison is what we teach. A Toowoomba learner who has written the scan by hand knows which lines carry the logic and how to test them: a tiny timetable worked out on paper, a slow method that cannot be clever, and a check that the two agree. Pointed at AI-written code, those habits turn a fast draft into a program worth relying on.',
    closer: 'Writing code has become cheap, and checking it has become the skill; a Toowoomba learner who can prove a planner right is the one others will trust with real data.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Highfields, Kearneys Spring or Harristown, the same live lesson',
    intro: 'Toowoomba spreads across the top of the range, and a video lesson reaches every suburb on it without a bus timetable in sight.',
    cells: [
      { h3: 'Anywhere on the Downs', p: 'A learner in the city centre and one out at Westbrook can share the same lesson, each from their own desk.' },
      { h3: 'Queensland school language', p: 'We talk in Queensland year levels, time the work to its four terms and help senior students connect projects with the computing subjects they take. Teaching is in English.' },
      { h3: 'A genuine first lesson', p: 'Your free session is an ordinary lesson, not a sales call, and it ends with a recommended level, course and slot. Booking it needs no card.' },
      { h3: 'Groups at one stage', p: 'Five to ten learners working at the same level, from Toowoomba and elsewhere, so regional cities still get complete groups.' },
      { h3: 'Two lessons a week', p: 'Around eight lessons each month in a fixed slot, with holidays and exam weeks arranged with the teacher in advance.' },
      { h3: 'Teachers four and a half hours behind', p: 'Queensland never changes its clocks, so a 6pm lesson in Toowoomba is always 1:30pm where our teachers work in India, in January and in July alike.' }
    ],
    spec: { title: 'One clock all year', p: 'Because Queensland skips daylight saving and India does too, the gap between a Toowoomba learner and our teachers stays at four and a half hours every month. Lesson times are always confirmed in Queensland time.' }
  },

  fees: {
    h2: 'What classes cost in Toowoomba',
    intro: 'The whole price list, in three lines.',
    first: 'A complete lesson free of charge, after which you receive a level, a suggested course and a regular time.',
    group: 'A month of lessons, usually eight, shared with five to ten learners at your level.',
    private: 'About eight lessons a month on the same rhythm, with one teacher working only with you.',
    closer: 'Fees are set in US dollars everywhere except India, so a family in Rangeville pays exactly what a family in Darling Heights pays and there is no separate Queensland price. Nothing is charged until the trial has fixed a course and a weekly slot; the pricing page explains holidays, absences and switching between group and private lessons.'
  },

  reviewsH2: 'Google reviews from families we teach',

  book: {
    h2: 'What should the first lesson be about?',
    intro: 'Share an age and an interest and the first task will fit: timing a short bus route by hand for a Year 8 student, or the full Toowoomba journey planner for someone older.',
    success: 'Thank you. The team will be in touch soon about a Toowoomba class.'
  },

  faq: {
    h2: 'Toowoomba coding class questions',
    intro: 'What Toowoomba learners and families tend to ask first.',
    items: [
      { q: 'How many people live in Toowoomba?', a: '142,163 people lived in the Toowoomba urban area at the 2021 Census, according to the statistics bureau\'s QuickStats. The median resident was 37 years old.' },
      { q: 'What is the Connection Scan Algorithm?', a: 'It finds the earliest time you can reach every stop in a public transport network. Every hop of every trip is sorted by departure time and read once, keeping the earliest known arrival at each stop and remembering which trips you have already boarded.' },
      { q: 'What is the Toowoomba timetable project?', a: 'Learners load Translink\'s open Toowoomba bus timetable, turn the 202 weekday trips into 9,444 hops and run the scan from the bus station. Leaving at 8:00am, 376 of the 641 stops are reachable by 9:00am. A slower brute-force method then confirms every answer.' },
      { q: 'What is GTFS?', a: 'GTFS, the General Transit Feed Specification, is a set of plain text tables describing stops, routes, trips and times. Translink publishes Toowoomba\'s feed under a Creative Commons licence, so anyone can download it and write code against it.' },
      { q: 'Do you teach Queensland senior students?', a: 'Yes. We use Queensland year levels, plan around the terms and support senior learners in computing and maths. Anything a student submits for assessment at school is their own work, never ours.' },
      { q: 'What time are lessons for Toowoomba learners?', a: 'Most Toowoomba learners choose a slot after school or on a Saturday morning; the time is set during the trial and quoted in Queensland time. Our teachers are four and a half hours behind all year, because neither Queensland nor India uses daylight saving.' },
      { q: 'Can younger children join too?', a: 'Yes. We teach from age six, beginning with Scratch blocks and drawing-based games before any typed Python. The projects here just happen to suit older learners.' },
      { q: 'Is there a Modern Age Coders centre in Toowoomba?', a: 'No, and none is claimed. Every lesson is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Toowoomba coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and goals rather than on age or postcode. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Toowoomba and Queensland learners',
    html: 'The <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland coding page</a> covers the whole state, and Brisbane learners have their own <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">Brisbane page</a>. Students aiming for a selective academy can read <a class="cg-inline-link" href="/queensland-academies-entry-maths-practice">Queensland academies entry maths practice</a>, and anyone who enjoys puzzles should try <a class="cg-inline-link" href="/problem-solving-through-coding-australia">problem solving through coding</a>. Every Australian page is listed on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Toowoomba and Queensland',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/queensland-academies-entry-maths-practice', label: 'Queensland academies maths' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-twba .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.25rem); }
.cg-root.cg-twba .cg-hero h1 { font-weight: 800; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-twba .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.75rem 0 0.75rem 1rem; }
.cg-root.cg-twba .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-twba .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-twba .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.9rem); }
.cg-root.cg-twba .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-twba .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-twba .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-twba .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Toowoomba, ABS Census 2021 QuickStats, Significant Urban Area 3016 (read 7 October 2026): 142,163 people; median age 37; 37,577 families; 60,212 private dwellings; average 2.5 people per household; dwelling structure, occupied private dwellings: separate house 42,814 (80.1 percent; Queensland 74.8; Australia 72.3), flat or apartment 2,358 (4.4 percent; Queensland 12.5; Australia 14.2); occupation: Professionals 14,198 (21.5 percent; Queensland 21.4; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 23,818 (20.9 percent; Queensland 21.9; Australia 26.3); aged 15 to 19 9,586 (6.7 percent; Queensland 6.1; Australia 5.7). Queensland Department of Education term dates: 2026 Term 4 Tuesday 6 October to Friday 11 December; school holidays Saturday 12 December 2026 to Tuesday 26 January 2027. IANA tz database: Australia/Brisbane has no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Connection Scan Algorithm (earliest arrival). Translink GTFS for Toowoomba, TWB_GTFS.zip listed on data.qld.gov.au (Translink General transit feed specification, CC BY 4.0), downloaded 7 October 2026: agency Bus Qld Toowoomba; feed_info start 20261007, end 20261206; 642 stop records (641 boarding stops plus parent station place_twbstn); routes 901 to 907 and 950; 370 trips; 17,272 stop_times. Weekday service (calendar Monday flag): 202 trips, 9,444 consecutive stop-to-stop connections. Source stop 880176 Toowoomba bus station stop 2A; footpaths between stops within 150 m (haversine) at 1.2 m/s. Departure 08:00: 8,397 connections with departure at or after 08:00 scanned; 641 of 641 stops reached; 376 by 09:00; travel time quartiles 33.0 / 52.0 / 77.0 min; 5 stops first reached after 12:00; latest first arrival 15:50 at stop 881145, whose only weekday arrival is 15:50. Departure 08:05: 8,361 scanned; 373 by 09:00; median 47.2 min. Brute-force check by repeated relaxation over trips: 2 passes, 0 disagreements at 08:00.',
    requiredMentions: [
      '142,163',
      '37,577',
      '60,212',
      '23,818',
      '14,198',
      '376 of the 641 stops',
      '8,397',
      '47.2 minutes',
      'Toowoomba bus station stop 2A',
      '6 October to Friday 11 December 2026'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Toowoomba Significant Urban Area (3016): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3016' },
      { claim: 'Translink General transit feed specification (GTFS), Toowoomba feed, CC BY 4.0.', url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink' },
      { claim: 'Queensland Department of Education, school term dates 2026.', url: 'https://education.qld.gov.au/about-us/calendar/term-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Brisbane.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'How punctual Toowoomba buses are: the feed is a schedule, not a record of actual running, so no punctuality claim is made.',
      'The name of the last stop reached and why it has one afternoon service: not verified with the operator, so it is described only by its timetable.',
      'Toowoomba Regional Council open data: no council dataset was needed; nothing is quoted from it.',
      'Bureau of Meteorology station data: the observations feed returned 403 to automated reads and was not circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Translink, the Queensland Government, Toowoomba Regional Council or the ABS.'
    ]
  }
};
