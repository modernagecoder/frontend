'use strict';
// Bundaberg (cg- city page, Australia cluster Phase 7, row 152). Shaped page: online coding and Python for
// teenagers and adults.
// Spine: by what time has half of a Bundaberg weekday's bus service already run? Data: Translink (Queensland
// Department of Transport and Main Roads), "Bundaberg general transit feed specification", BUN_GTFS.zip from
// gtfsrt.api.translink.com.au, listed on data.qld.gov.au under Creative Commons Attribution 4.0, downloaded 7
// October 2026; feed_info valid 20261007 to 20261206. 13 routes (600 to 610, 621, 622), 296 stops. Weekday
// service BUND 26_27-42985 (Monday to Friday): 92 trips, 2,724 scheduled stop departures from 06:25 to 17:50.
// Saturday service: 46 trips, 1,429 stop departures from 07:35 to 16:05; no Sunday service in the feed.
// Route 608 runs the most weekday trips (17). Bisection on the monotone count of departures at or before time
// t (our calculation, scratchpad au/r3/bnd_bis.py): the 1,362nd of 2,724 departures is at 11:47:00; bisection
// narrows a 06:25 to 17:50 window to one minute in 10 halvings, against 322 one-minute steps for a linear
// scan. Radius version: half of the 296 stops (148) lie within 3,207 m of stop 730001 "Woongarra St at City
// Centre" (straight-line, haversine); the farthest stop is 22.26 km away; bisection reaches 1 m precision in
// 15 halvings. Lesson family: the bisection method on a monotone function; screened free site-wide on 7
// October 2026 ("bisection method": 0 page hits; claimed by AU-R3).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Bundaberg Significant Urban Area (3003):
// 73,747 people; median age 45 (Queensland 38, Australia 38); 20,096 families; 33,376 private dwellings; 2.4
// people per household; separate house 23,614 (81.7%; Queensland 74.8%; Australia 72.3%); Technicians and
// Trades Workers 4,015 (13.7%; Queensland 13.7%; Australia 12.9%); Professionals 4,919 (16.7%; Queensland 21.4%);
// Bachelor Degree level and above 7,852 (12.8%; Queensland 21.9%; Australia 26.3%); aged 15 to 19 4,186 (5.7%).
// Queensland Department of Education, 2027 term dates: Term 1 Wednesday 27 January to Thursday 25 March; Term 4
// Tuesday 5 October to Friday 10 December. IANA tz: Australia/Brisbane UTC+10 with no daylight saving.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'BUNDABERG', label: 'Bundaberg', blurb: 'Online Python for Bundaberg teens and adults, and the bisection method used on the city\'s own bus timetable.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-bundaberg',
  code: 'bnd',
  accent: '#6E2A1C',
  accentRationale: 'Bundaberg: a dark cane-field rust (HSV saturation 0.75, value 0.43, hue 10), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 10.4:1 on white and 8.5:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Bundaberg',
    eyebrow: 'Bundaberg, Queensland, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Bundaberg, Queensland',
  title: 'Online Coding and Python Classes in Bundaberg | Live Lessons',
  description: 'Live online coding and Python classes for Bundaberg teenagers and adults: files, numbers and real data, taught by a real teacher in small groups. First lesson free.',
  ogDescription: 'Python classes for Bundaberg, with a project that uses the bisection method on the city\'s bus timetable: half the weekday service has run by 11:47am.',
  twitterDescription: 'Bundaberg online Python and coding classes for teens and adults, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Python and Coding Classes for Bundaberg Learners',
    description: 'Level-matched online Python, numerical methods, data files and automation for teenagers and adults across Bundaberg and the coast, taught live in English.'
  },

  h1: 'Online coding and Python classes in Bundaberg',
  capsuleQ: 'What are the best online coding and Python classes in Bundaberg?',
  capsule: 'Ones where a Bundaberg teenager or adult writes Python every lesson against real files, with a teacher checking each step, rather than watching recordings. The 2021 Census put the Bundaberg urban area at 73,747 people, with a median age of 45. We teach live over video, one to one or with a small group at the same level, and the opening lesson is free.',
  lead: 'Bundaberg\'s town buses make 2,724 scheduled stops on a weekday, the first at 6:25am and the last at 5:50pm. At what moment has exactly half of that service already happened? You could step through the day a minute at a time, which takes 322 checks. Or you could use the bisection method: guess the middle of the day, see which half the answer is in, and halve again. Ten guesses pin it to 11:47am. Our Bundaberg project teaches that idea on the real Translink timetable, then turns it on a second question: how far from the city centre stop do you need to go to take in half of the network\'s 296 stops?',
  wa: 'Hello Modern Age Coders, I would like a free Python class for a learner in Bundaberg.',

  picks: {
    eyebrow: 'Course picks for Bundaberg',
    h2: 'Python courses that suit a Bundaberg learner',
    intro: 'Each course builds the skills behind the timetable project. Your free first lesson places you on one of them, with no card required.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from scratch, reading a real timetable file in the early weeks rather than toy examples.' },
      { course: 'pcep-pcap-python-certification-course', band: 'Ages 15 and over', note: 'A structured route to the Python Institute certificates for learners who like a clear target.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'A complete Python course from first variables to well-organised programs of your own.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Scripts that fetch, check and summarise data automatically, for people who want time back at work.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bundaberg in the Census',
      h2: 'A city of houses, trades and an older population',
      intro: 'Results the statistics bureau published for the Bundaberg Significant Urban Area after the 2021 Census, alongside Queensland and Australia.',
      body: [
        { kind: 'table', caption: 'Bundaberg urban area counts, 2021 Census QuickStats', head: ['Item', 'Count'], rows: [
          ['People', '73,747'],
          ['Families', '20,096'],
          ['Private dwellings', '33,376'],
          ['Average household size', '2.4 people']
        ] },
        { kind: 'table', mt: true, caption: 'How Bundaberg compares on a few shares', head: ['Measure', 'Bundaberg', 'Queensland', 'Australia'], rows: [
          ['Median age', '45', '38', '38'],
          ['Occupied homes that are separate houses', '81.7% (23,614)', '74.8%', '72.3%'],
          ['Workers who are technicians and trades workers', '13.7% (4,015)', '13.7%', '12.9%'],
          ['Residents 15 and over holding a bachelor degree or above', '12.8% (7,852)', '21.9%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Seven years older', p: 'Bundaberg\'s median resident was 45, seven years older than the median for both Queensland and Australia.' },
          { h3: 'A trades workforce', p: 'Technicians and trades workers made up 13.7% of employed residents, exactly the Queensland share and above the national 12.9%.' },
          { h3: 'Fifteen to nineteen', p: '4,186 Bundaberg residents were aged 15 to 19 on Census night, 5.7% of the urban area.' }
        ] },
        { kind: 'p', text: 'A note on these numbers: the bureau perturbs each census cell slightly to protect privacy, so pieces of a table may not add to its total. We print totals and percentages exactly as published and do not create totals of our own by adding rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'By what time has half of Bundaberg\'s weekday bus service run?',
      intro: 'Translink publishes Bundaberg\'s timetable as an open data feed. Learners count the stop departures, then use bisection to find the halfway moment and the halfway distance.',
      body: [
        { kind: 'table', caption: 'The Bundaberg feed, read on 7 October 2026 (our count)', head: ['Item', 'Figure'], rows: [
          ['Routes in the feed', '13, numbered 600 to 610, 621 and 622'],
          ['Stops', '296'],
          ['Weekday trips (Monday to Friday)', '92'],
          ['Scheduled weekday stop departures', '2,724, from 6:25am to 5:50pm'],
          ['Saturday trips', '46, with 1,429 stop departures'],
          ['Sunday trips', 'None in this feed']
        ] },
        { kind: 'table', mt: true, caption: 'Two questions answered by bisection (our calculation)', head: ['Question', 'Answer', 'Bisection steps', 'Plain stepping'], rows: [
          ['When has the 1,362nd of 2,724 weekday departures happened?', '11:47am', '10, to within a minute', '322 one-minute steps'],
          ['How far from the Woongarra St at City Centre stop are half of the 296 stops?', '3,207 m', '15, to within a metre', '3,208 one-metre steps']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. A function that only rises', p: 'Write count(t), the number of departures at or before time t. As t moves later the count never falls, and that single property is all bisection needs.' },
          { h3: '2. Halve the gap', p: 'Start with 6:25am and 5:50pm. Test the middle. If half the service has already run, keep the earlier half of the window; if not, keep the later half. Repeat.' },
          { h3: '3. Stop on purpose', p: 'Choose the precision first: one minute for the clock, one metre for the radius. The loop ends when the window is that small, and the step count follows from the logarithm.' }
        ] },
        { kind: 'callout', h3: 'Halfway through the day is not halfway through the service', p: 'The clock midpoint between the first and last departures is 12:07pm, yet half of the service has already run by 11:47am. The difference comes from how trips are spread across the day, and seeing it requires counting rather than assuming. Bisection gets there in ten steps because each test throws away half of the remaining window, whatever that window contains.' },
        { kind: 'p', text: 'These results are ours, computed from the feed downloaded on 7 October 2026, which covers 7 October to 6 December 2026. Distances are straight lines from the published stop coordinates, not walking routes. The project describes a timetable; it says nothing about how full or how punctual any bus is.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Python on a real feed',
      h2: 'What reading a transit feed teaches a beginner',
      intro: 'A timetable feed is a set of plain text files, which makes it a gentle first dataset with plenty of traps to learn from.',
      body: [
        { kind: 'table', caption: 'Skills the Bundaberg project exercises', head: ['Skill', 'Where it shows up', 'Python involved'], rows: [
          ['Reading CSV files', 'stops.txt, trips.txt and stop_times.txt', 'The csv module and dictionaries'],
          ['Joining tables', 'Each departure belongs to a trip, and each trip to a service day', 'Lookups by key'],
          ['Turning text into numbers', 'Times such as 06:25:00 become seconds after midnight', 'String splitting and arithmetic'],
          ['Searching efficiently', 'Bisection on time and on distance', 'Loops with a clear stopping rule'],
          ['Checking the answer', 'Compare bisection with sorting and picking the middle value', 'Two methods that must agree']
        ] },
        { kind: 'p', text: 'The check in the last row matters. Sorting all 2,724 departure times and reading the 1,362nd gives 11:47:00, the same answer bisection reached. When two independent methods agree, a learner can trust the result; when they disagree, there is a bug to find, and finding it is often the most satisfying part of the lesson.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Read the feed, count departures by hour, then write bisection from scratch and test it against a sorted list.' },
          { h3: 'University students', p: 'Root finding, convergence and error bounds, with bisection as the safe baseline for faster methods.' },
          { h3: 'Adults', p: 'Practical scripts that read operational files, find thresholds and answer questions in seconds instead of hours.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no tie to Translink, the Queensland Department of Transport and Main Roads, Bundaberg Regional Council or the Australian Bureau of Statistics. They publish open data; the counts, times and distances on this page come from our own Python.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Bundaberg',
      h2: 'Beach routes, a Saturday timetable and Queensland\'s fixed clock',
      intro: 'Further details from the feed and from Queensland\'s own calendars.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Routes to the coast', p: 'Route 621 runs to Moore Park Beach and route 622 to Elliott Heads and Innes Park, the two coastal services in the feed.' },
          { h3: 'The busiest weekday route', p: 'Route 608, Innes Park North to Sugarland via the city and Bargara, runs 17 weekday trips, more than any other route.' },
          { h3: 'Terms in 2027', p: 'Queensland state schools begin Term 1 on Wednesday 27 January 2027 and finish Term 4 on Friday 10 December 2027.' }
        ] },
        { kind: 'spec', title: 'A city that never changes its clocks', p: 'Queensland stays on Australian Eastern Standard Time all year, so a Bundaberg lesson time never jumps when other states move to daylight saving. For a learner working with teachers in India, the gap is a steady four and a half hours in every month.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From reading one file to numerical methods',
    intro: 'Ages are a guide only; the trial lesson finds the right first step.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'First Python', p: 'Variables, loops and lists, used straight away on a short extract of the Bundaberg timetable.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Searching smartly', p: 'Binary search, bisection and sorting, each written by hand and checked against a second method.', courses: ['problem-solving-dsa-masterclass-teens', 'pcep-pcap-python-certification-course'] },
      { band: 'University', h3: 'Numerical thinking', p: 'Root finding, error and convergence, with Python as the laboratory.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Scripts for work', p: 'Automating the files a job produces every week, with checks that catch bad data before it causes trouble.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI can write Python, why should a Bundaberg learner study bisection?',
    intro: 'Because knowing why a method works is how you notice when generated code is quietly wrong.',
    p1: 'Ask an AI assistant to find when half the buses have run and it may well produce a working answer. It may also produce code that tests the wrong half of the window, or never stops because the precision was not set, or assumes the timetable starts at midnight. Each mistake looks plausible on screen. A learner who has written bisection by hand spots them in seconds, because they know the loop must shrink the window every time and finish when it is small enough.',
    p2: 'That is the kind of understanding we teach first and then pair with AI tools. Once learners can explain a method, they use assistants to go faster, asking for a plot, a test or a faster variant, and they read every line that comes back with the same suspicion they would apply to their own work.',
    closer: 'Code is cheap in 2026, but code that is correct is not, and a Bundaberg learner who can reason about a loop is the one who can tell the difference.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Bargara, Kepnock or Burnett Heads, one online classroom',
    intro: 'The furthest stop in Bundaberg\'s feed is more than 22 km from the city centre, and an online lesson closes that distance for every learner.',
    cells: [
      { h3: 'From the coast or the city', p: 'A student in Bargara and one in Avenell Heights join the same video lesson without a bus timetable to consult.' },
      { h3: 'Queensland year levels', p: 'Teachers plan with Queensland year levels and the state\'s four terms, and senior students can link projects to their Digital Solutions or maths subjects. Teaching is in English.' },
      { h3: 'Trial first', p: 'Your opening lesson is a genuine class. Afterwards you are offered a level, a course and a regular time, and no card is ever requested at this stage.' },
      { h3: 'Small, level-matched groups', p: 'Five to ten learners working at the same point, drawn from Bundaberg and other places, so every group runs at a sensible size.' },
      { h3: 'A steady weekly habit', p: 'Two fixed lessons a week, about eight in a month, with breaks for holidays and exams decided with the teacher.' },
      { h3: 'A constant time difference', p: 'Because neither Queensland nor India uses daylight saving, a 6pm Bundaberg lesson always begins at 1:30pm for the teacher.' }
    ],
    spec: { title: 'Why Bundaberg is easy to schedule', p: 'With no clock changes on either side, a lesson booked in October is at the same local time in March, which is one less thing for families to remember.' }
  },

  fees: {
    h2: 'Bundaberg class fees',
    intro: 'Three prices, stated plainly.',
    first: 'A full lesson without charge, ending with a recommended level, course and lesson time.',
    group: 'One month of lessons, usually eight, in a group of five to ten learners at your level.',
    private: 'The same rhythm of roughly eight lessons a month with a teacher to yourself.',
    closer: 'All countries except India are billed in US dollars, so there is a single price whether a family lives in Millbank or at Burnett Heads. The first invoice comes only after the trial has set a course and a time; the pricing page explains holidays, missed lessons and changing formats.'
  },

  reviewsH2: 'Google reviews from families we teach',

  book: {
    h2: 'Book the first Bundaberg lesson',
    intro: 'Tell us an age and something the learner enjoys. A Year 8 student might start by counting buses by the hour, while an adult could move straight into the full bisection project.',
    success: 'Thanks. Someone from our team will be in touch about a Bundaberg class.'
  },

  faq: {
    h2: 'Questions about Python classes in Bundaberg',
    intro: 'What Bundaberg families and adult learners usually ask before booking.',
    items: [
      { q: 'How many people live in the Bundaberg urban area?', a: '73,747, according to the 2021 Census QuickStats for the Bundaberg Significant Urban Area. Its median age was 45, against 38 for Queensland.' },
      { q: 'What is the bisection method?', a: 'A way to find where a rising or falling quantity crosses a target. You keep an interval that must contain the answer, test its midpoint, and keep whichever half still contains it, halving the interval every step until it is as small as you need.' },
      { q: 'What does the Bundaberg bus project find?', a: 'Using Translink\'s open timetable feed, learners find that half of the 2,724 scheduled weekday stop departures have happened by 11:47am, in 10 bisection steps instead of 322 one-minute checks, and that half of the 296 stops lie within 3,207 m of the City Centre stop.' },
      { q: 'Is the timetable project about late buses?', a: 'No. It uses the published schedule only, so it says nothing about punctuality or how busy services are.' },
      { q: 'Do you help with Queensland senior subjects?', a: 'Yes. We follow Queensland year levels and terms and support students in senior computing and maths. Assessed school work always remains the student\'s own; our role is to teach the methods behind it.' },
      { q: 'What time are lessons for Bundaberg learners?', a: 'Usually between school finishing and dinner, or on a weekend morning, fixed at the trial in Queensland time. India is four and a half hours behind Bundaberg all year.' },
      { q: 'Can primary school children join?', a: 'Yes, from age six. They begin with Scratch and visual projects before moving to typed Python, and this page simply concentrates on older learners.' },
      { q: 'Is there a Modern Age Coders centre in Bundaberg?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Bundaberg Python classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Bundaberg and Queensland learners',
    html: 'Learners curious about the wider Wide Bay can read about <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-hervey-bay">vibe coding and AI agents in Hervey Bay</a>. Queensland\'s own page is <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">coding and AI classes in Queensland</a>, and for maths support there is <a class="cg-inline-link" href="/online-maths-tutoring-australia">online maths tutoring in Australia</a>. All of our Australian pages sit under the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bundaberg and Australia',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-hervey-bay', label: 'Hervey Bay' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-bnd .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.3rem); }
.cg-root.cg-bnd .cg-hero h1 { font-weight: 800; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-bnd .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 6%, transparent); padding: 0.9rem 1rem; border-radius: 4px; }
.cg-root.cg-bnd .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-bnd .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.015em; }
.cg-root.cg-bnd .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.8rem); }
.cg-root.cg-bnd .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-bnd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bnd .cg-ladder-col { border-left: 2px dashed var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-bnd .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Bundaberg, ABS Census 2021 QuickStats, Significant Urban Area 3003 (read 7 October 2026): 73,747 people; median age 45 (Queensland 38, Australia 38); 20,096 families; 33,376 private dwellings; average 2.4 people per household; dwelling structure, occupied private dwellings: separate house 23,614 (81.7 percent; Queensland 74.8; Australia 72.3); occupation, employed people aged 15 and over: Technicians and Trades Workers 4,015 (13.7 percent; Queensland 13.7; Australia 12.9), Professionals 4,919 (16.7 percent; Queensland 21.4; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 7,852 (12.8 percent; Queensland 21.9; Australia 26.3); aged 15 to 19 4,186 (5.7 percent). Queensland Department of Education, future dates, 2027: Term 1 Wednesday 27 January to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Tuesday 5 October to Friday 10 December. IANA tz database: Australia/Brisbane UTC+10, no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Bisection method on monotone functions. Translink Bundaberg GTFS (BUN_GTFS.zip, gtfsrt.api.translink.com.au; data.qld.gov.au dataset general-transit-feed-specification-gtfs-translink, CC BY 4.0), downloaded 7 October 2026, feed_info 20261007 to 20261206. routes.txt: 13 routes (600 to 610, 621, 622); stops.txt: 296 stops. calendar.txt: BUND 26_27-42985 Monday to Friday (92 trips), BUND 26_27-42986 Saturday (46 trips); no Sunday service. Weekday stop_times departures: 2,724, first 06:25:00, last 17:50:00; route B608 has 17 weekday trips, the most. Saturday departures 1,429, 07:35:00 to 16:05:00. count(t) = departures at or before t; target 1,362 (half of 2,724); bisection on [06:25, 17:50] to a 60 s window: 10 iterations, answer 11:47 (exact 1,362nd departure 11:47:00 from the sorted list); linear scan in 60 s steps: 322 steps. Radius: haversine distance from stop 730001 Woongarra St at City Centre; half of 296 stops = 148 within 3,207 m (exact 148th distance 3,207.3 m); maximum 22.26 km; bisection to 1 m: 15 iterations. Clock midpoint of 06:25 and 17:50: 12:07:30. Lesson family: bisection method; distinct from binary search on sorted arrays and from secant slopes used elsewhere on the site.',
    requiredMentions: [
      '73,747',
      '20,096',
      '33,376',
      '23,614',
      '7,852',
      '2,724',
      '11:47am',
      '3,207 m',
      'Woongarra St at City Centre'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Bundaberg Significant Urban Area (3003): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3003' },
      { claim: 'Translink general transit feed specification feeds, including Bundaberg, published under Creative Commons Attribution 4.0.', url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink' },
      { claim: 'Queensland Department of Education, school term dates from 2027.', url: 'https://education.qld.gov.au/about-us/calendar/future-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Brisbane.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Patronage, crowding or punctuality of any Bundaberg service: not in the timetable feed, so nothing is claimed.',
      'Walking distances to stops: all distances are straight lines between published coordinates.',
      'QCAA senior syllabus details for Digital Solutions: qcaa.qld.edu.au returned a Cloudflare 403 and was not circumvented; the subject is named only.',
      'Bureau of Meteorology facts for Bundaberg: the Bureau returned 403 and was not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Translink, the Queensland Government, Bundaberg Regional Council or the ABS.'
    ]
  }
};
