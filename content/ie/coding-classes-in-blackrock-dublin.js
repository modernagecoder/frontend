'use strict';
// Blackrock, County Dublin (cg- district page, Ireland cluster, Phase 6). Named sources only
// (owner rule for districts), read 20 September 2026: the National Transport Authority's Irish
// Rail GTFS feed (transportforireland.ie, valid 18 September 2026 to 18 September 2027); Irish
// Rail's Blackrock station page and its DART service page; DLR's Blackrock Park page; Blackrock
// College, Blackrock Further Education Institute and UCD Michael Smurfit Graduate Business
// School, each from its own site. Spine: the waiting-time paradox. Scratchpad br/wait.js.
// Tuesday 22 September 2026 (Wednesday and Thursday identical northbound), DART only, direction
// from the latitude of the next stop (direction_id is per route and does not mean north/south
// for other routes). Northbound 10:00-16:00: 36 gaps, 9 to 12 minutes, mean 9.97, half 4.99,
// average wait 5.02. Northbound 19:01-23:08: 19 gaps, 7 to 25 minutes, sum 247, mean 13.00,
// half 6.50, average wait sum(H^2)/(2 sum H) = 3,645 / 494 = 7.38 (13.5% longer); per-second
// simulation 7.39 (agrees within a second); 8 gaps longer than 13 minutes cover 140 of 247
// minutes (56.7%); the 20:22-20:47 gap is 25 of 247 minutes (10.1%). Southbound 19:00-23:04:
// 18 gaps, 8 to 20 minutes, half 6.78, wait 7.23. 96 DART departures each way; first north
// 06:01, first south 06:23, last south 23:51, last north 00:01. The DLR county page owns the
// Blackrock baths and the local electoral area; the Dublin page cites the same Irish Rail
// "every 10 minutes" sentence as a source but builds no lesson on it.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'BLACKROCK', blurb: 'A DART every ten minutes should mean a five-minute wait. In the evening at Blackrock it does not, and the page shows why.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-blackrock-dublin',
  code: 'bkr',
  accent: '#1C4030',
  accentRationale: 'Blackrock: a deep sea-green for the bay and the park pond, from the widened solver search, clear of the Dún Laoghaire brick and the Sandyford green',
  pageType: 'district',
  place: {
    name: 'Blackrock',
    eyebrow: 'Blackrock, County Dublin',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dun Laoghaire-Rathdown' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-dun-laoghaire-rathdown', name: 'Dún Laoghaire-Rathdown' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Dún Laoghaire-Rathdown', href: '/coding-classes-in-dun-laoghaire-rathdown' },
    { label: 'Dún Laoghaire', href: '/coding-classes-in-dun-laoghaire-dublin' }
  ],
  routeLabel: 'Blackrock, County Dublin, Ireland',
  title: 'Coding Classes in Blackrock, Dublin | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Blackrock learners aged 6 to 67, in small same-level groups or one to one. The first lesson is free of charge.',
  ogDescription: 'Coding and AI classes for Blackrock, with a maths-and-code project on the DART timetable and why uneven gaps make every wait longer.',
  twitterDescription: 'Live online coding, Python, AI and maths for Blackrock, ages 6 to 67. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Blackrock',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Blackrock, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Blackrock',
  capsuleQ: 'What are the best coding classes in Blackrock?',
  capsule: 'For Blackrock, a teacher takes every lesson live on a video call, either with a handful of learners who share a level or with one learner alone, usually twice a week, and anyone from age six up to sixty-seven can join. There is nowhere to travel to. You pay nothing for the first lesson; after it a month costs USD 100 in a group or USD 150 for one-to-one teaching.',
  lead: 'Irish Rail says that "DART services operate every 10 minutes all day." If trains come every ten minutes and you turn up at a random moment, you should wait five minutes on average. At Blackrock on a weekday afternoon the timetable bears that out almost exactly. After seven in the evening it does not: the northbound trains still average one every 13 minutes, which suggests a six-and-a-half-minute wait, but a passenger arriving at a random moment waits 7.38 minutes. Nothing is hidden and no train is missing. The extra time comes from the gaps being uneven, and this page teaches a learner to work out why.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Blackrock.',

  picks: {
    eyebrow: 'Courses for Blackrock',
    h2: 'Four first courses for Blackrock',
    intro: 'Start from the age band; in the free first lesson the teacher checks the fit and suggests another course if a different one suits better.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and timing: a train that leaves on a schedule, and a player who arrives at a random time and counts how long they wait.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 14', note: 'Averages, squares and fair games worked out in code, with a timetable as the puzzle.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python that reads a real timetable file, works out the gaps and tests a formula against a simulation.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who plan rotas, deliveries or service times and want to know why averages mislead.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Why the wait for a DART is longer than half the gap',
      intro: 'The timetable here is the National Transport Authority\'s Irish Rail feed for Tuesday 22 September 2026, DART trains only, departing Blackrock. Wednesday and Thursday give the same northbound figures.',
      body: [
        { kind: 'table', caption: 'Gaps between DART departures at Blackrock, and what they mean for a passenger', head: ['Direction and window', 'Gaps between trains', 'Half the average gap', 'Average wait'], rows: [
          ['Northbound, 10:00 to 16:00', '9 to 12 minutes', '4.99 min', '5.02 min'],
          ['Northbound, 19:00 to 23:00', '7 to 25 minutes', '6.50 min', '7.38 min'],
          ['Southbound, 19:00 to 23:00', '8 to 20 minutes', '6.78 min', '7.23 min']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The afternoon', p: 'Between 10:00 and 16:00 the northbound gaps never fall below 9 minutes or rise above 12, and the average is 9.97. With gaps that even, the average wait is 5.02 minutes, a hair above half the gap.' },
          { h3: 'The evening', p: 'From the 19:01 to the 23:08 there are 19 gaps, from 7 minutes to 25. They average 13.00 minutes, so half the gap is 6.50, but the average wait for a passenger who arrives at a random moment is 7.38: 13.5 percent longer.' },
          { h3: 'One long gap', p: 'The longest evening gap runs from 20:22 to 20:47. It is one gap in 19 but a tenth of the evening, so roughly one passenger in ten lands in it, and they wait 12.5 minutes on average.' }
        ] },
        { kind: 'callout', h3: 'Long gaps are counted twice', p: 'A passenger is more likely to arrive during a long gap, simply because it lasts longer, and once inside it they wait longer too. So each gap counts twice over: once for how often people land in it and once for how long they stand there. That is why the average wait equals the sum of the squared gaps divided by twice their total, and why it can only be larger than half the average gap, never smaller. It is equal only when every gap is the same. In the Blackrock evening the eight gaps longer than 13 minutes are fewer than half the gaps, yet they cover 56.7 percent of the time.' },
        { kind: 'p', text: 'The learner\'s program opens the timetable files, finds every trip that stops at Blackrock on the chosen date, and sorts the departures into northbound and southbound by looking at where each train goes next, because the file\'s own direction flag does not mean north or south on every route. It lists the times inside a window, subtracts each from the next to get the gaps, and computes half their average and the formula above. Then it tests the formula the honest way, by imagining a passenger arriving at every single second of the evening and timing each wait. The simulation and the formula agree to within a second. Finally it asks what would change if the same 20 evening trains ran exactly 13 minutes apart: the wait would fall to 6.50 minutes, about 53 seconds less for every passenger.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A plan, not a record', p: 'These are the timetable\'s own times. Trains that run early or late change the gaps on the day, and a timetable cannot say by how much, so the page makes no claim about real running.' },
          { h3: 'All day, per the timetable', p: 'The timetable shows 96 DART departures in each direction on a weekday, the first northbound at 06:01 and the first southbound at 06:23, and the last southbound at 23:51.' },
          { h3: 'Where else it appears', p: 'The formula works for anything that arrives at intervals, a bus, a lift or a ferry. Whenever the gaps vary, the average wait is longer than half the average gap, and the more they vary, the bigger the difference.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Blackrock, named',
      h2: 'Blackrock from its station, its park and its schools',
      intro: 'Each fact comes from the body that runs the place, with the eircode that body gives.',
      body: [
        { kind: 'table', caption: 'Named places in Blackrock', head: ['Place', 'What its own source says'], rows: [
          ['Blackrock station', 'Bath Place, A94 E4P9'],
          ['Blackrock Park', 'Rock Road, with a pond, an island and the Peace Fountain'],
          ['Blackrock College', 'Rock Road, A94 FK84'],
          ['Blackrock Further Education Institute', 'Main Street, A94 X383'],
          ['UCD Michael Smurfit Graduate Business School', 'Carysfort Avenue, A94 XF34']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The station', p: 'Irish Rail lists level access to platform 1, for the city centre and northbound trains, and a lift or stairs to platform 2. It gives staffed hours of 05:45 to 00:21 on weekdays, notes a pay-and-display car park opposite, and says there is no bike parking.' },
          { h3: 'The park', p: 'The council describes Blackrock Park as a green space overlooking Dublin Bay whose pond holds a small island. The Peace Fountain in the pond was built in 1986 for International Year for Peace, and a pedestrian path runs in beside the DART station.' },
          { h3: 'Schools and colleges', p: 'Blackrock College gives its setting as 56 acres on Dublin Bay and its founding year as 1860. The further education institute on Main Street lists computing, networks and digital design among its course areas.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is given for Blackrock, since the page prints only what named bodies publish about the place. Timetable figures describe planned departures on one date in September 2026, and the old baths and the local electoral area are covered on the Dún Laoghaire-Rathdown page.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'What a Blackrock learner does each week',
      intro: 'Two live lessons make up the usual week, and the teacher runs each one from start to finish.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children begin with block code and timing games, and find out why arriving at a random moment is not the same as arriving on average.' },
          { h3: 'Teenagers', p: 'Teenagers take up Python, the web, AI projects and real files like the DART timetable, with maths that the code makes visible.' },
          { h3: 'Adults', p: 'Adults can start with no background; the first lesson shows which course fits.' }
        ] },
        { kind: 'p', text: 'Departure times are from the National Transport Authority\'s Irish Rail timetable feed; the gaps, averages and simulated waits are our own calculations, run on 20 September 2026. Station, park and school details are taken from their own pages.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a station game to a tested formula',
    intro: 'The bands are a guide; the first lesson decides the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Wait and count', p: 'Block-coded trains and passengers, and a tally of how long each one waited.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Gaps and averages', p: 'Python that subtracts times to find gaps, and compares two ways of averaging them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Formula versus simulation', p: 'Squared gaps, a formula for the average wait, and a simulation that checks it second by second.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Service and queues', p: 'Why uneven schedules and queues cost more time than their averages show.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how long you will wait for a DART',
    intro: 'It will most likely halve the frequency.',
    p1: 'Ask an AI assistant how long the average wait is for a train that comes every ten minutes and it will most likely say five minutes, half the gap. For an even timetable that is right. In the Blackrock evening the gaps average 13 minutes but range from 7 to 25, and halving the average falls short of the true wait by close to a minute, because the answer depends on how uneven the gaps are and not only on their average.',
    p2: 'Once the learner has the gaps in a list, they can ask the assistant to explain the squared-gap formula, then check its explanation against their own simulation. If the two disagree, the simulation wins, and working out why is the lesson.',
    closer: 'An average of the gaps is not the average of the waits. Code lets you check which one you need.',
    blogAnchor: 'why learning to code still earns its place'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Blackrock',
    intro: 'The practical detail.',
    cells: [
      { h3: 'Taught live', p: 'The teacher is there for the whole lesson, working through each learner\'s code with them as it happens.' },
      { h3: 'Grouped by level', p: 'Groups of five to ten at one level, drawn from Blackrock, elsewhere in Ireland and abroad.' },
      { h3: 'Same days each week', p: 'About eight lessons a month, on two fixed days.' },
      { h3: 'Around the school year', p: 'Christmas, Easter, mid-terms and exam weeks are built into the plan.' },
      { h3: 'What to have', p: 'A laptop or desktop, a microphone, headphones or speakers, and an internet connection that handles video.' },
      { h3: 'On their own', p: 'Private lessons for learners who need a different pace, a narrower goal or unusual hours.' }
    ],
    spec: { title: 'Online only', p: 'We have no building in Blackrock, in Dún Laoghaire-Rathdown or elsewhere in Ireland. Every lesson is live on video and runs the same wherever the learner is.' }
  },

  fees: {
    h2: 'Fees for Blackrock',
    intro: 'Three lines.',
    first: 'A first lesson free of charge, with a level check.',
    group: 'A month in a group of five to ten at the same level, about eight live lessons.',
    private: 'A month of private lessons on the same timetable.',
    closer: 'Every family outside India pays the same US dollar fee, month to month. The free lesson commits you to nothing and charges begin with the course; the pricing page covers holidays, missed lessons and switching between a group and private teaching.'
  },

  reviewsH2: 'What families wrote on Google, word for word',

  book: {
    h2: 'Book a free first lesson in Blackrock',
    intro: 'Give us the learner\'s age and what they enjoy, and the first lesson will be built for them. It might finish with a small game, a first working program, or a list of train times turned into an average wait.',
    success: 'Thank you. We will contact you shortly to set up the lesson.'
  },

  faq: {
    h2: 'Blackrock coding class questions',
    intro: 'What Blackrock families usually ask.',
    items: [
      { q: 'Does Modern Age Coders have a classroom in Blackrock?', a: 'No. All teaching is live on video and we have no premises in Ireland. The learner needs a computer, sound and a microphone, and a steady internet connection. The contact number on this page is an Indian number.', boiler: true },
      { q: 'What is the DART timetable project?', a: 'The learner reads the National Transport Authority\'s timetable, finds the gaps between DART departures at Blackrock, and shows that uneven gaps lengthen the average wait: after 19:00 northbound, gaps average 13.00 minutes, yet a passenger arriving at random waits 7.38, not 6.50.' },
      { q: 'Does the project say how late the DART runs?', a: 'No. It uses planned departure times only. Real running can differ, and the page does not measure or claim anything about it.' },
      { q: 'Why is there no population figure for Blackrock?', a: 'This page states only what named bodies publish about Blackrock itself: the timetable feed, the station, park and school pages. None of them gives a head count.' },
      { q: 'When do lessons take place?', a: 'After school on weekdays, into the evening, and during the day at weekends. Lesson times are set in Irish time. Our teachers are in India, which runs four and a half hours ahead of Blackrock during Irish summer time and five and a half hours ahead in winter, and we only offer hours that are workable at both ends.' },
      { q: 'Can adults join?', a: 'Yes, anyone up to sixty-seven, beginners included. After the free lesson an adult can choose a small group at their level or private lessons.' },
      { q: 'Will the group be made up of Blackrock children?', a: 'Not necessarily. We group learners by level, so the others in a class may be anywhere in Ireland or overseas.' },
      { q: 'What do coding classes in Blackrock cost?', a: 'The first lesson is free. Then a group place costs USD 100 a month for about eight live lessons, two a week, in a group of five to ten, and one-to-one teaching on the same timetable costs USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Between five and ten, matched by level, pace and goals rather than by age or where they live. If no group suits at a workable time, lessons run one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Along the coast from Blackrock',
    html: 'Next stop south, <a class="cg-inline-link" href="/coding-classes-in-dun-laoghaire-dublin">Dún Laoghaire</a> has a project on the seafront cycle counters, and the <a class="cg-inline-link" href="/coding-classes-in-dun-laoghaire-rathdown">Dún Laoghaire-Rathdown</a> page covers the county. Inland, <a class="cg-inline-link" href="/coding-classes-in-dundrum-dublin">Dundrum</a> has its own page, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists every other place.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Blackrock, Dún Laoghaire-Rathdown and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-dun-laoghaire-dublin', label: 'Dún Laoghaire' },
    { href: '/coding-classes-in-dun-laoghaire-rathdown', label: 'Dún Laoghaire-Rathdown' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-bkr .cg-hero-grid { align-items: center; gap: clamp(1.14rem, 3.36vw, 2.61rem); }
.cg-root.cg-bkr .cg-hero h1 { font-weight: 720; letter-spacing: -0.0191em; line-height: 1.07; }
.cg-root.cg-bkr .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 1.03rem; }
.cg-root.cg-bkr .cg-eyebrow { letter-spacing: 0.118em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-bkr .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0127em; }
.cg-root.cg-bkr .cg-grid-3 { gap: clamp(1.02rem, 2.91vw, 2.22rem); }
.cg-root.cg-bkr .cg-table caption { letter-spacing: 0.024em; font-weight: 650; }
.cg-root.cg-bkr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bkr .cg-table th { letter-spacing: 0.012em; }
.cg-root.cg-bkr .cg-ladder-col { border-top: 3px dotted var(--cg-accent); padding-top: 0.96rem; }
.cg-root.cg-bkr .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Blackrock, named sources only (owner rule for districts), read 20 September 2026. National Transport Authority, Irish Rail GTFS (https://www.transportforireland.ie/transitData/Data/GTFS_Irish_Rail.zip): feed_info publisher National Transport Authority, feed_start_date 20260918, feed_end_date 20270918; stop 8250IR0030 "Blackrock" 53.302716 -6.178846, neighbours Booterstown 8250IR0039 and Seapoint 8250IR0029; route BRAY-HOWTH-I short name DART. Service date Tuesday 22 September 2026 (46 active services; Wednesday 23 and Thursday 24 identical northbound). Our arithmetic (br/wait.js, DART only, direction from the latitude of the next stop, no boarding counted at a terminus arrival): 96 departures each way; north first 06:01, last 24:01; south first 06:23, last 23:51. North 10:00-16:00: departures 10:02 to 16:01, 36 gaps from 9 to 12 minutes, mean 9.97, half 4.99, wait 5.02. North 19:00-23:00: 19:01 19:10 19:22 19:30 19:39 19:52 20:01 20:09 20:22 20:47 20:54 21:09 21:23 21:38 21:53 22:08 22:28 22:38 22:59 23:08; gaps 9 12 8 9 13 9 8 13 25 7 15 14 15 15 15 20 10 21 9 (sum 247, sum of squares 3,645); mean 13.00, half 6.50, wait 3,645/494 = 7.38, excess 13.5%; per-second simulation 7.39; gaps over 13 minutes 8 of 19 covering 140 minutes = 56.7%; 20:22-20:47 = 25/247 = 10.1%; even spacing saves 0.88 minutes (about 53 seconds). South 19:00-23:04: 18 gaps 8 to 20, mean 13.56, half 6.78, wait 7.23. Irish Rail DART and Commuter page: "DART services operate every 10 minutes all day." Irish Rail Blackrock station page: "Station Address Bath Place Blackrock Co. Dublin Eircode A94 E4P9"; "Station Staffing Hours Monday to Friday: 05:45 - 00:21 Saturday : 10:00- 22:00 Sunday : 10:00- 22:00"; "Car Park Details Opposite Station Pay and Display"; "Bikes No bike parking available"; "Level access to Platform 1 via station entrance (for services to City centre & Northbound) Access platform 2 via lift or stairs". DLR Blackrock Park: "a pleasant green area overlooking Dublin Bay"; "a picturesque pond containing a small island"; "The Peace Fountain in the pond was constructed in 1986 to mark International Year for Peace"; "Pedestrian Entrance - walkway beside Blackrock Dart Station"; "Blackrock Park, Rock Road, Blackrock, Co. Dublin". Blackrock College: "set in 56 acres of rolling parkland on the broad sweep of Dublin Bay"; founded in 1860; "Rock Road Blackrock Co. Dublin A94 FK84". BFEI: "Main Street, Blackrock, Co Dublin, A94 X383"; course area "Computing, Networks & Digital Design". UCD Smurfit: "Carysfort Avenue, Blackrock, Co. Dublin. A94 XF34".',
    localProject: 'The waiting-time paradox on the DART. From the NTA Irish Rail timetable feed, the learner lists Blackrock departures by direction (from the next stop, not the per-route direction flag), finds the gaps and compares half the average gap with the true average wait for a passenger arriving at a random moment, sum of squared gaps over twice the total. Afternoon northbound gaps of 9 to 12 minutes give 5.02 against 4.99; evening gaps of 7 to 25 minutes give 7.38 against 6.50, 13.5 percent longer, with one 25-minute gap taking a tenth of the evening. A per-second simulation checks the formula. Lessons: the average of the gaps is not the average of the waits; long intervals are over-sampled; test a formula against a simulation; a timetable is a plan, not a record. New family for the cluster: length-biased sampling / waiting-time paradox.',
    requiredMentions: [
      '7.38',
      '6.50',
      '13.5 percent',
      '20:47',
      '5.02',
      '4.99',
      '56.7 percent',
      'A94 E4P9',
      'A94 FK84',
      'A94 X383',
      'A94 XF34',
      'Peace Fountain'
    ],
    sources: [
      { claim: 'National Transport Authority, Irish Rail GTFS timetable feed valid from 18 September 2026: DART departures at Blackrock (stop 8250IR0030) on Tuesday 22 September 2026.', url: 'https://www.transportforireland.ie/transitData/Data/GTFS_Irish_Rail.zip' },
      { claim: 'Irish Rail, DART and Commuter: "DART services operate every 10 minutes all day."', url: 'https://www.irishrail.ie/en-ie/about-us/iarnrod-eireann-services/dart-commuter' },
      { claim: 'Irish Rail, Blackrock station: Bath Place, A94 E4P9; weekday staffing 05:45 to 00:21; car park opposite, pay and display; no bike parking; level access to platform 1 (city centre and northbound), lift or stairs to platform 2.', url: 'https://www.irishrail.ie/en-ie/station/blackrock' },
      { claim: 'Dún Laoghaire-Rathdown County Council, Blackrock Park: overlooking Dublin Bay; pond with a small island; Peace Fountain constructed in 1986 for International Year for Peace; pedestrian entrance beside the DART station; Rock Road.', url: 'https://www.dlrcoco.ie/parks-outdoors/parks/blackrock-park' },
      { claim: 'Blackrock College: 56 acres on Dublin Bay; founded 1860; Rock Road, A94 FK84.', url: 'https://www.blackrockcollege.com/' },
      { claim: 'Blackrock Further Education Institute: Main Street, Blackrock, A94 X383; course area Computing, Networks and Digital Design.', url: 'https://www.bfei.ie/' },
      { claim: 'UCD Michael Smurfit Graduate Business School: Carysfort Avenue, Blackrock, A94 XF34.', url: 'https://www.smurfitschool.ie/' }
    ],
    rejectedClaims: [
      'Any claim about real DART punctuality or bunching: the feed is planned times only.',
      'Any claim that Irish Rail\'s "every 10 minutes" sentence is wrong: the afternoon timetable matches it; the page only shows what uneven gaps do to waits.',
      'The Blackrock baths and the local electoral area: the Dún Laoghaire-Rathdown page owns them.',
      'The founding order and religious ethos of Blackrock College: not needed for a place fact and kept out of any standout.',
      'Any population figure for Blackrock and any aggregation of census small areas: owner rule for district pages.'
    ]
  }
};
