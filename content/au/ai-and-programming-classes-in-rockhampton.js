'use strict';
// Rockhampton (cg- regional city page, Australia cluster Phase 7, row 149). Shaped page: AI and programming,
// leading with teenagers and adults.
// Spine: how few buses could run a city's timetable? Data: Translink (Queensland Department of Transport and Main
// Roads) GTFS for Rockhampton-Yeppoon, RKY_GTFS.zip listed on data.qld.gov.au, CC BY 4.0, downloaded 7 October
// 2026: feed valid 7 October to 6 December 2026; 485 stops, 19 routes, 400 trips, 10,197 stop times. Rockhampton
// weekday calendar (service ROK, Monday flag): 182 trips on 9 routes (401 to 407, 410, 411); earliest departure
// 6:41am, latest arrival 6:29pm; 92.7 scheduled bus-hours. Interval partitioning (our code, scratchpad
// au/r2/rky_ip.py), each trip as an interval from first departure to last arrival: largest number of trips
// running at once 13, at 8:31am; greedy assignment with no turnaround uses 13 vehicles (equal to the overlap, as
// the theory says), 16 with a 5-minute turnaround and 19 with 10 minutes. The same feed's Yeppoon weekday services:
// 142 trips on 10 routes, peak overlap 14 at 8:15am, greedy 14, 15 and 16. These are lower bounds: the model
// ignores the time to drive from where one trip ends to where the next begins. Lesson family: interval
// partitioning (minimum resources equal maximum overlap); screened 0 location-page hits on 7 October 2026;
// claimed by AU-R2.
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Significant Urban Area 3014 Rockhampton:
// 79,293 people; median age 36; 20,332 families; 33,528 private dwellings; 2.5 people per household; separate
// house 25,007 (87.8%; Queensland 74.8%; Australia 72.3%); flat or apartment 1,344 (4.7%); Technicians and Trades
// Workers 5,731 (15.8%; Queensland 13.7%; Australia 12.9%); Professionals 6,254 (17.2%; Queensland 21.4%);
// Bachelor Degree level and above 9,097 (14.4%; Queensland 21.9%); aged 15 to 19 5,248 (6.6%; Queensland 6.1%;
// Australia 5.7%); aged 20 to 24 5,190 (6.5%). Queensland Department of Education: 2026 Term 3 holidays Saturday
// 19 September to Monday 5 October (17 days); Term 4 from Tuesday 6 October. IANA tz: Australia/Brisbane, no
// daylight saving. Excluded: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'ROCKHAMPTON', label: 'Rockhampton', blurb: 'Rockhampton on the Fitzroy, its weekday bus timetable, and the scheduling idea that says how few buses could run it.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-rockhampton',
  code: 'rokh',
  accent: '#844846',
  accentRationale: 'Rockhampton: a red-earth brown (HSV saturation 0.47, value 0.52, hue 2), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, and 4.8:1 or better on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Rockhampton',
    eyebrow: 'Rockhampton, Queensland, Australia',
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
  routeLabel: 'Rockhampton, Queensland',
  title: 'AI and Programming Classes in Rockhampton | Live Online Lessons',
  description: 'Live online AI, algorithms and programming classes for Rockhampton teens and adults, built on real Queensland data, one to one or in small groups. First lesson free.',
  ogDescription: 'AI and programming classes for Rockhampton teens and adults, with a scheduling project that works out how few buses could run the city\'s timetable.',
  twitterDescription: 'Rockhampton AI and programming classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Rockhampton Learners',
    description: 'Level-matched online Python, algorithms, scheduling and AI for teenagers and adults in Rockhampton and Central Queensland, taught live in English.'
  },

  h1: 'AI and programming classes in Rockhampton',
  capsuleQ: 'What are the best AI and programming classes in Rockhampton?',
  capsule: 'For Rockhampton teenagers and adults, live lessons in Python, algorithms and AI where a teacher builds real solutions with you on Central Queensland data. The Rockhampton urban area counted 79,293 people at the 2021 Census, with a median age of 36 and 5,190 residents aged 20 to 24. We teach online, one to one or in small level-matched groups, and the first lesson is free.',
  lead: 'Planning is one of the oldest jobs in artificial intelligence, and scheduling vehicles is planning at its plainest. Translink publishes Rockhampton\'s bus timetable as open data: 182 trips on an ordinary weekday, the first leaving at 6:41 in the morning. How few buses could possibly run all of them? Treat each trip as a stretch of time on a line and the answer comes from a short, elegant algorithm. At 8:31am, 13 trips overlap. No schedule can use fewer than 13 buses, and a simple greedy assignment proves 13 is enough, as long as a bus can start its next trip the instant it finishes one. Add realistic turnaround time and the number climbs. Learners find out by how much.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Rockhampton.',

  picks: {
    eyebrow: 'Course picks for Rockhampton',
    h2: 'How Rockhampton learners start with AI and algorithms',
    intro: 'These four tie into the bus-scheduling project. The free lesson decides which is right, and booking never needs a card.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Artificial intelligence for teenagers, from search and planning to training simple models in Python.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Greedy algorithms, proofs and scheduling problems, worked on real timetables rather than puzzles alone.' },
      { course: 'artificial-intelligence-complete-masterclass-college', band: 'University and adult', note: 'Search, planning, optimisation and learning, implemented by hand before any library takes over.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Python and AI tools that automate real scheduling, reporting and data tasks at work.' }
    ]
  },

  sections: [
    {
      id: 'rocky', tint: '', eyebrow: 'Rockhampton in the 2021 Census',
      h2: 'A young city of houses on the Fitzroy',
      intro: 'QuickStats for the Rockhampton Significant Urban Area, alongside Queensland and Australia.',
      body: [
        { kind: 'table', caption: 'Rockhampton urban area, Census 2021 QuickStats, with comparison shares', head: ['Measure', 'Rockhampton', 'Queensland', 'Australia'], rows: [
          ['Population', '79,293', 'not given', 'not given'],
          ['Median age', '36', 'not given', 'not given'],
          ['Families', '20,332', 'not given', 'not given'],
          ['Occupied homes that are separate houses', '25,007 (87.8%)', '74.8%', '72.3%'],
          ['Employed people in technical and trades work', '5,731 (15.8%)', '13.7%', '12.9%'],
          ['Residents aged 15 to 19', '5,248 (6.6%)', '6.1%', '5.7%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger than most', p: 'A median age of 36 and 5,190 residents aged 20 to 24 make urban Rockhampton a comparatively young regional city.' },
          { h3: 'Houses first', p: '87.8% of occupied homes were separate houses, and the Census counted 33,528 private dwellings with 2.5 people per household.' },
          { h3: 'Work and study', p: '6,254 employed residents were professionals, and 9,097 people aged 15 and over held a bachelor degree or higher.' }
        ] },
        { kind: 'p', text: 'The bureau slightly randomises small census counts so nobody can be identified, which is why the categories of a table may not total exactly. We report its figures as printed and never construct a total by adding rows ourselves.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How few buses could run Rockhampton\'s timetable?',
      intro: 'Interval partitioning on Translink\'s open Rockhampton timetable: every weekday trip becomes a span of time, and the busiest moment sets the minimum fleet.',
      body: [
        { kind: 'table', caption: 'Rockhampton weekday services in the feed downloaded on 7 October 2026 (our count)', head: ['Item', 'Figure'], rows: [
          ['Weekday trips', '182'],
          ['Routes', '9, numbered 401 to 407, 410 and 411'],
          ['First departure and last arrival', '6:41am and 6:29pm'],
          ['Scheduled time across all trips', '92.7 bus-hours'],
          ['Most trips running at the same moment', '13, at 8:31am']
        ] },
        { kind: 'table', mt: true, caption: 'Buses needed by a greedy schedule, by turnaround time (our calculation)', head: ['Turnaround between trips', 'Rockhampton services', 'Yeppoon services in the same feed'], rows: [
          ['None', '13', '14'],
          ['5 minutes', '16', '15'],
          ['10 minutes', '19', '16']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Turn trips into intervals', p: 'Each trip runs from its first departure to its last arrival. 182 weekday trips become 182 stretches of time on one line.' },
          { h3: '2. Find the peak', p: 'Sweep through the day counting trips that are running. The largest count, 13 at 8:31am, is a hard floor: no schedule can use fewer buses.' },
          { h3: '3. Assign greedily', p: 'Take trips in order of start time; give each the bus that became free earliest, or a new bus if none is free. This greedy rule meets the floor exactly.' }
        ] },
        { kind: 'callout', h3: 'A lower bound, not a fleet size', p: 'The model assumes a bus can begin its next trip the moment it ends the last, wherever that is. Real buses need time to turn around and often must drive empty from one route\'s end to another\'s start. Allowing just five minutes lifts Rockhampton from 13 to 16 buses, and ten minutes to 19. These numbers say how few vehicles the timetable could possibly use; they say nothing about how many the operator actually runs.' },
        { kind: 'p', text: 'All counts are ours, computed from the Translink feed downloaded on 7 October 2026. The feed also includes Yeppoon\'s services, shown separately and never added to Rockhampton\'s. A timetable is a plan, so nothing here describes how buses perform on the road.' }
      ]
    },
    {
      id: 'planning', tint: 'tint', eyebrow: 'Scheduling as AI planning',
      h2: 'From a greedy proof to real-world planners',
      intro: 'Why a ten-line algorithm is the right first step, and what serious scheduling adds on top.',
      body: [
        { kind: 'table', caption: 'What the simple model captures, and what a full planner must add', head: ['Factor', 'In our Rockhampton model', 'In a real vehicle schedule'], rows: [
          ['Trips that overlap in time', 'Yes, exactly', 'Yes'],
          ['Turnaround at the end of a trip', 'Tried at 0, 5 and 10 minutes', 'Set by operating rules'],
          ['Empty running between routes', 'Ignored', 'Must be added for each pair of trips'],
          ['Driver breaks and shifts', 'Ignored', 'Usually the hardest constraint'],
          ['Proof the answer is optimal', 'Yes, overlap equals vehicles', 'Usually good rather than proven optimal']
        ] },
        { kind: 'p', text: 'The elegance of interval partitioning is that the lower bound and the algorithm meet. The peak overlap says you cannot do better than 13; the greedy method shows you can achieve 13. Real planners lose that certainty once location and driver rules enter, and fall back on search and optimisation, the same techniques at the heart of AI planning.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Draw a small day of trips as bars, count the overlap by eye, then code the sweep and the greedy assignment in Python.' },
          { h3: 'University students', p: 'Prove the greedy rule optimal, then add empty running and model the result as a matching or flow problem.' },
          { h3: 'Adults', p: 'Apply interval reasoning to rosters, room bookings and equipment at work, and know when a heavier solver is needed.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with Translink, the Queensland Government, Rockhampton Regional Council or the statistics bureau, and claims no partnership. Census numbers are the bureau\'s; every trip count, overlap and bus figure was produced by our own code.' }
      ]
    },
    {
      id: 'calendar', tint: '', eyebrow: 'Rockhampton\'s year',
      h2: 'A spring break, then Term 4',
      intro: 'Queensland\'s published calendar and how it lines up with the timetable data.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Spring holidays', p: 'The Queensland Department of Education lists 17 days of holidays from Saturday 19 September to Monday 5 October 2026.' },
          { h3: 'Term 4 starts', p: 'Classes resume on Tuesday 6 October 2026, the day before the current timetable feed begins.' },
          { h3: 'One clock', p: 'Queensland does not use daylight saving, so a Rockhampton lesson time never shifts during the year.' }
        ] },
        { kind: 'spec', title: 'School days hide inside a timetable', p: 'If a network has trips that run only on school days, a careful analysis keeps them separate, because the fewest buses needed in term time need not match the fewest needed in the holidays. Checking the calendar behind every trip comes before any counting.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From drawing intervals to building planners',
    intro: 'Ages are signposts; the free lesson decides the real starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Time as numbers', p: 'Python that turns clock times into minutes, sorts events and counts how many overlap.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Greedy algorithms', p: 'Interval scheduling and partitioning with proofs, tested on the full Rockhampton timetable.', courses: ['problem-solving-dsa-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'University', h3: 'Planning and optimisation', p: 'Search, constraint solving and AI planning on realistic scheduling problems.', courses: ['artificial-intelligence-complete-masterclass-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Smarter rosters', p: 'Python and AI tools that schedule people, rooms and equipment, with the checks to trust them.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can tell you how many buses Rockhampton needs. Why should a learner know what that number means?',
    intro: 'Because "13" is a lower bound under one assumption, and the same timetable needs 19 buses if each one gets ten minutes between trips.',
    p1: 'Ask an AI assistant how many vehicles the Rockhampton timetable requires and it may well run this exact algorithm and report 13. The number is correct for the question it answered. But that question quietly assumed zero turnaround and no empty driving between routes. Change the assumption to something realistic and the answer moves, and nothing in a confident one-line reply tells you that.',
    p2: 'A learner who has written the sweep and the greedy assignment knows what the model includes and leaves out. They ask what turnaround was assumed, whether location was ignored, whether school-only trips were included. Those questions turn a plausible AI answer into a planning figure someone could act on.',
    closer: 'In 2026 an AI will hand you an answer to almost any planning question; a Rockhampton learner who knows the assumptions behind it is the one who can tell when it is safe to use.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Norman Gardens, Frenchville or Park Avenue, the same lesson',
    intro: 'Rockhampton sits on both banks of the Fitzroy, and a video lesson reaches either side without a bridge or a bus.',
    cells: [
      { h3: 'North and south of the river', p: 'A learner in Berserker and another in Allenstown can share a class, each joining from their own desk.' },
      { h3: 'Built around Queensland school', p: 'Teachers follow Queensland year levels and terms and help senior students connect projects to the subjects they take. All lessons are in English.' },
      { h3: 'Start with real teaching', p: 'The free session is an ordinary lesson. It ends with a suggested level, course and weekly time, and no card is taken.' },
      { h3: 'Five to ten at one level', p: 'Classes combine Rockhampton learners with others at the same stage elsewhere, so regional students always have a full group.' },
      { h3: 'Twice-weekly lessons', p: 'About eight lessons a month in a fixed slot, with breaks for holidays and exams set with your teacher.' },
      { h3: 'Teachers in India', p: 'Rockhampton keeps the same time all year, so a 6pm lesson always starts at 1:30pm for our teachers.' }
    ],
    spec: { title: 'Four and a half hours, every month', p: 'Neither Queensland nor India changes its clocks, so the gap between a Rockhampton learner and our teachers never varies. Lesson times are always confirmed in Rockhampton time.' }
  },

  fees: {
    h2: 'What classes cost in Rockhampton',
    intro: 'Here are the three prices.',
    first: 'A full lesson at no charge, finishing with a recommended level, a course and a regular time.',
    group: 'Roughly eight lessons a month in a group of five to ten learners at your stage.',
    private: 'Around eight lessons a month with a teacher working one to one.',
    closer: 'Fees are charged in US dollars in every country but India, so a family in Gracemere pays the same as one in The Range, with no Queensland pricing. Billing starts only after the trial agrees a course and a time, and the pricing page explains holidays, absences and changes between group and private lessons.'
  },

  reviewsH2: 'Families\' Google reviews',

  book: {
    h2: 'Book a free AI or programming lesson',
    intro: 'Tell us an age and an interest. A Year 9 student might draw a morning of bus trips as bars; an adult might code the full scheduling model straight away.',
    success: 'Thanks. Someone from our team will contact you about a Rockhampton class.'
  },

  faq: {
    h2: 'Rockhampton AI and programming questions',
    intro: 'What Rockhampton learners and families ask most often.',
    items: [
      { q: 'How many people live in Rockhampton?', a: 'The statistics bureau\'s 2021 Census QuickStats counted 79,293 people in the Rockhampton urban area, with a median age of 36.' },
      { q: 'What is interval partitioning?', a: 'A scheduling problem: given tasks with fixed start and end times, use as few resources as possible so that no resource handles two tasks at once. The answer always equals the largest number of tasks running at the same moment, and a greedy method achieves it.' },
      { q: 'What is the Rockhampton bus project?', a: 'Learners load Translink\'s open Rockhampton timetable, turn the 182 weekday trips into time intervals and find that 13 run at once at 8:31am. A greedy schedule then uses exactly 13 buses with no turnaround, 16 with five minutes and 19 with ten.' },
      { q: 'Does Rockhampton really run 13 buses?', a: 'We do not know, and the project does not claim it. Thirteen is the fewest buses the timetable could use if a bus could start its next trip instantly anywhere. Real operation adds turnaround, empty running and driver rules.' },
      { q: 'Do you teach Queensland senior students?', a: 'Yes. Lessons follow Queensland year levels, and we help senior students with computing and maths. Anything they submit for school assessment is always their own work.' },
      { q: 'What time are lessons for Rockhampton learners?', a: 'Families usually choose a weekday after-school slot or a Saturday, settled at the trial and quoted in local time. With no daylight saving in Queensland or India, the gap to our teachers is constant.' },
      { q: 'Can younger children learn programming?', a: 'Yes. We teach from age six with Scratch and visual logic games, then typed code when children are ready. This page is written for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Rockhampton?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Rockhampton classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and goals rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'Further Rockhampton and Queensland reading',
    html: 'See the <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland page</a> for the whole state, or the <a class="cg-inline-link" href="/online-coding-and-python-classes-in-mackay">Mackay Python page</a> for another timetable project up the coast. Learners who like puzzles should try <a class="cg-inline-link" href="/problem-solving-through-coding-australia">problem solving through coding</a>, and teenagers curious about AI will find <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens in Australia</a>. All of our Australian pages appear on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Rockhampton and Queensland',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-mackay', label: 'Mackay' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-rokh .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.9vw, 2.35rem); }
.cg-root.cg-rokh .cg-hero h1 { font-weight: 800; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-rokh .cg-capsule { border-left: 6px solid var(--cg-accent); padding: 0.5rem 0 0.5rem 1rem; }
.cg-root.cg-rokh .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-rokh .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.012em; }
.cg-root.cg-rokh .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2rem); }
.cg-root.cg-rokh .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-rokh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rokh .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-rokh .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Rockhampton, ABS Census 2021 QuickStats, Significant Urban Area 3014 (read 7 October 2026): 79,293 people; median age 36; 20,332 families; 33,528 private dwellings; average 2.5 people per household; dwelling structure, occupied private dwellings: separate house 25,007 (87.8 percent; Queensland 74.8; Australia 72.3), flat or apartment 1,344 (4.7 percent; Queensland 12.5); occupation: Technicians and Trades Workers 5,731 (15.8 percent; Queensland 13.7; Australia 12.9), Professionals 6,254 (17.2 percent; Queensland 21.4); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 9,097 (14.4 percent; Queensland 21.9); aged 15 to 19 5,248 (6.6 percent; Queensland 6.1; Australia 5.7); aged 20 to 24 5,190 (6.5 percent). Queensland Department of Education: 2026 Term 3 holidays Saturday 19 September to Monday 5 October (17 days); Term 4 Tuesday 6 October to Friday 11 December. IANA tz database: Australia/Brisbane has no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Interval partitioning (minimum resources equal maximum overlap). Translink GTFS for Rockhampton-Yeppoon, RKY_GTFS.zip listed on data.qld.gov.au (CC BY 4.0), downloaded 7 October 2026: agency Translink; feed_info 20261007 to 20261206; 485 stops; 19 routes; 400 trips; 10,197 stop_times; calendars ROK 26_27-42954 (Monday to Friday), ROK 26_27-42953 (Saturday), YEPP 26_27-43897 (Monday to Friday), YEPP 26_27-43891 (Saturday), YEPP 26_27-43892 (Sunday). Rockhampton weekday: 182 trips, routes 401, 402, 403, 404, 405, 406, 407, 410, 411; trip interval from first departure to last arrival; earliest start 06:41 (24,060 s), latest end 18:29 (66,540 s); total 92.7 bus-hours; maximum simultaneous trips 13 at 08:31; greedy (min-heap of finish times) vehicles 13 / 16 / 19 for turnaround 0 / 300 / 600 s. Yeppoon weekday: 142 trips, routes 440, 441, 442, 444, 445, 446, 447, 448, 450, 451; earliest 05:18, latest end 20:35; 98.5 bus-hours; maximum overlap 14 at 08:15; greedy 14 / 15 / 16. Deadhead (empty running) between trip end and next start not modelled.',
    requiredMentions: [
      '79,293',
      '20,332',
      '33,528',
      '5,731',
      '6,254',
      '9,097',
      '5,190',
      '13, at 8:31am',
      '92.7 bus-hours',
      'Saturday 19 September to Monday 5 October 2026'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Rockhampton Significant Urban Area (3014): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3014' },
      { claim: 'Translink General transit feed specification (GTFS), Rockhampton-Yeppoon feed, CC BY 4.0.', url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink' },
      { claim: 'Queensland Department of Education, school term dates 2026.', url: 'https://education.qld.gov.au/about-us/calendar/term-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Brisbane.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'The number of buses the Rockhampton operator actually uses: not published in the feed, and the computed figures are lower bounds only.',
      'Which weekday trips run on school days only: not separated in this analysis, so no school-trip figure is given.',
      'Rockhampton tide gauge files: some resources listed under the gauge on the portal carry another station\'s name, so tide data was not used.',
      'Bureau of Meteorology station data: the observations feed returned 403 and was not circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Translink, the Queensland Government, Rockhampton Regional Council or the ABS.'
    ]
  }
};
