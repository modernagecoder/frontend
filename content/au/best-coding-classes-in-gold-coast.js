'use strict';
// Gold Coast (cg- regional city page, Australia cluster Phase 7, row 135). Shaped page: leads with teenagers and
// adults; coding-classes-for-kids-gold-coast owns the primary and lower-secondary intent and is linked, not repeated.
// Spine: how do you answer "what was the longest wait between trams in this hour" quickly, and keep answering it
// when a service is cancelled? Data: Translink SEQ_GTFS.zip (feed_info: Department of Transport and Main Roads -
// Translink Division, valid 20261007 to 20261206; Creative Commons Attribution 4.0 on the Queensland Government open
// data portal), route L1-5029 "Helensvale - Burleigh Heads" (route_type 0, light rail). Measured by us on 7 October
// 2026 (scratchpad au/r1/gc_load.py, gc_seg.py): for Wednesday 14 October 2026, 273 of the 1,030 L1 trips in the file
// run; "Cavill Avenue station, platform 2" has 134 departures, first 04:20, last written 24:21 (00:21 the next morning
// in GTFS notation); the 133 gaps are 7.5 minutes 105 times, 15 minutes 25 times, and 14, 14.5 and 10.5 minutes once
// each; median 7.5. A segment tree over the 133 gaps has height 8 and 532 array slots; 1,000 random range-maximum
// queries (seed 2026) visit 20.432 nodes on average against 34.345 gaps scanned by a plain loop, and every answer
// matched the loop; the 7am to 9am range (16 gaps) costs 19 node visits against 16 scanned values; cancelling the 08:03
// departure is a point update touching 16 nodes, and the 7am to 9am maximum rises from 7.5 to 15.0 minutes.
// Lesson family: segment tree for range-maximum queries with point updates; screened free site-wide on 7 October 2026
// ("segment tree": 0 hits in content/uk, ie, nl, au, the dossiers file and the claims files; claimed by AU-R1).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Gold Coast - Tweed Heads Significant Urban Area
// (3007), compared by QuickStats with Queensland and Australia: 693,596 people; median age 40; 186,286 families;
// 302,683 private dwellings; 2.5 people per household; flat or apartment 54,022 (21.1%; Queensland 12.5%; Australia
// 14.2%); separate house 145,389 (56.8%; Queensland 74.8%); Professionals 67,905 (20.4%; Queensland 21.4%; Australia
// 24.0%); Bachelor Degree level and above 122,502 (21.4%; Queensland 21.9%; Australia 26.3%); aged 15 to 19 39,832
// (5.7%); aged 20 to 24 42,213 (6.1%). Queensland Department of Education term dates: 2026 Term 4 Tuesday 6 October to
// Friday 11 December, 10 weeks. IANA tz: Australia/Brisbane has kept UTC+10 without daylight saving since March 1992;
// Australia/Sydney (which Tweed Heads follows) moves to UTC+11 in summer; Asia/Kolkata UTC+5:30.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'GOLD COAST', label: 'Gold Coast', blurb: 'Gold Coast - Tweed Heads, a light rail timetable on a 7.5 minute rhythm, and a project on answering range questions fast.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-gold-coast',
  code: 'gcbt',
  accent: '#9E4242',
  accentRationale: 'Gold Coast: a muted coral red (HSV saturation 0.58, value 0.62, hue 0), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 6.3:1 on white and 5.2:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Gold Coast',
    eyebrow: 'Gold Coast, Queensland, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Queensland', href: '/coding-and-ai-classes-in-queensland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Gold Coast, Queensland',
  title: 'Best Coding Classes on the Gold Coast | Teens and Adults',
  description: 'Live online coding, Python, algorithms and AI classes for Gold Coast teenagers and adults, in small level-matched groups or one to one. The first lesson is free.',
  ogDescription: 'Coding classes for Gold Coast teens and adults, with a project that builds a segment tree over the G:link light rail timetable.',
  twitterDescription: 'Gold Coast coding classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'competitive-programming-for-teens-course',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Algorithms Classes for Gold Coast Learners',
    description: 'Level-matched online Python, algorithms, data structures and AI for teenagers and adults across the Gold Coast, taught live in English.'
  },

  h1: 'Coding classes on the Gold Coast',
  capsuleQ: 'What are the best coding classes on the Gold Coast?',
  capsule: 'For a Gold Coast teenager or adult, a strong class is live, sets problems on real local data and shows why one program answers in a blink while another crawls. The Gold Coast - Tweed Heads urban area counted 693,596 people at the 2021 Census. We teach one to one or in small groups matched by level, and the first lesson costs nothing.',
  lead: 'Stand on the platform at Cavill Avenue on a weekday and a tram arrives every seven and a half minutes for most of the day. The open Translink timetable says so precisely: on Wednesday 14 October 2026 the southbound platform there sees 134 departures, and 105 of the gaps between them are exactly 7.5 minutes. Now ask a sharper question. What was the longest wait between 7am and 9am? Between noon and 3pm? After one tram is cancelled? A loop can answer each question by checking every gap. Our Gold Coast learners build a segment tree instead, a structure that answers any such range question by looking at a handful of stored maximums, and keeps answering correctly when the timetable changes.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner on the Gold Coast.',

  picks: {
    eyebrow: 'Course picks for the Gold Coast',
    h2: 'Four places to start for Gold Coast teens and adults',
    intro: 'Picked by what you want to build, then fitted to a level in the free lesson. Nobody asks for card details.',
    items: [
      { course: 'competitive-programming-for-teens-course', band: 'Ages 13 to 18', note: 'Range queries, trees and timing problems of the kind contest judges love, solved and then measured.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first variables to files and classes, practised on timetables and other open data.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Segment trees, heaps and balanced trees written from scratch and tested against brute force.' },
      { course: 'full-stack-web-development-masterclass-college', band: 'Adults building products', note: 'Turn a working data structure into a small web app that answers questions for real users.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Gold Coast - Tweed Heads in the Census',
      h2: 'A coastal urban area of almost 700,000 people',
      intro: 'Published counts and shares from Census 2021 QuickStats for the Gold Coast - Tweed Heads Significant Urban Area, which QuickStats compares with Queensland and Australia.',
      body: [
        { kind: 'table', caption: 'Gold Coast - Tweed Heads, 2021 Census QuickStats', head: ['Measure', 'Gold Coast - Tweed Heads', 'Queensland', 'Australia'], rows: [
          ['People', '693,596', 'Not compared', 'Not compared'],
          ['Median age', '40', 'Not compared', 'Not compared'],
          ['Families', '186,286', 'Not compared', 'Not compared'],
          ['Private dwellings', '302,683', 'Not compared', 'Not compared'],
          ['Occupied dwellings that are flats or apartments', '54,022, or 21.1%', '12.5%', '14.2%'],
          ['Employed residents working as professionals', '67,905, or 20.4%', '21.4%', '24.0%'],
          ['University degree (bachelor or above), people 15 and older', '122,502, or 21.4%', '21.9%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Apartment living', p: 'One occupied dwelling in five is a flat or apartment, 21.1% against 12.5% across Queensland, and only 56.8% are separate houses.' },
          { h3: 'Young adults', p: 'The Census counted 39,832 residents aged 15 to 19 and 42,213 aged 20 to 24, the two age bands where most first programs get written.' },
          { h3: 'Two states, one area', p: 'The urban area runs south across the border into Tweed Heads in New South Wales, which matters to anyone who writes software that tells the time.' }
        ] },
        { kind: 'p', text: 'How we treat these figures: the Australian Bureau of Statistics makes small random adjustments to census cells to protect privacy, so a table\'s parts may not add up to its published total. We print the totals and percentages exactly as published and never add rows together to make a number of our own.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What was the longest wait between trams in a given hour?',
      intro: 'All 134 departures from Cavill Avenue station, platform 2, on Wednesday 14 October 2026, taken from the Translink open timetable for the G:link light rail.',
      body: [
        { kind: 'table', caption: 'Gaps between departures at Cavill Avenue, platform 2 (our calculation from the Translink file)', head: ['What we measured', 'Result'], rows: [
          ['Departures on the day', '134, first at 04:20, last written 24:21 (00:21 the next morning)'],
          ['Gaps between departures', '133'],
          ['Gaps of exactly 7.5 minutes', '105'],
          ['Gaps of 15 minutes', '25'],
          ['Other gaps', '14, 14.5 and 10.5 minutes, once each'],
          ['Middle (median) gap', '7.5 minutes']
        ] },
        { kind: 'table', caption: 'Segment tree against a plain loop over the same 133 gaps (our calculation, 7 October 2026)', head: ['Question', 'Segment tree', 'Plain loop'], rows: [
          ['Longest gap, 7am to 9am (16 gaps)', '7.5 minutes, 19 nodes visited', '7.5 minutes, 16 gaps checked'],
          ['Longest gap, 6pm to midnight (30 gaps)', '15 minutes, 23 nodes visited', '15 minutes, 30 gaps checked'],
          ['1,000 random ranges, average work', '20.4 nodes visited', '34.3 gaps checked'],
          ['Cancel the 08:03 tram', 'One point update, 16 nodes touched', 'No index to update; rescan later'],
          ['Longest gap 7am to 9am after the cancellation', '15 minutes', '15 minutes']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Store maximums, not gaps', p: 'Each node of the tree remembers the longest gap in its half of the day. The root knows the longest gap overall; its children know the morning and the evening.' },
          { h3: '2. Answer from a few nodes', p: 'A question about 7am to 9am is answered by combining the stored maximums of a few nodes that exactly cover that stretch, instead of reading every gap inside it.' },
          { h3: '3. Change one value cheaply', p: 'When the 08:03 tram is cancelled, two 7.5 minute gaps become one 15 minute gap. Only the nodes on one path from leaf to root need new maximums.' }
        ] },
        { kind: 'callout', h3: 'The honest result', p: 'On a single day of 133 gaps the tree is only a little quicker on average, and for a short range like 7am to 9am the plain loop actually does less work. We say so, because measuring that is the lesson. The tree\'s advantage grows with the length of the list: double the gaps and the loop does double the work, while the tree adds one more level. Every one of the 1,000 random answers matched the plain loop exactly.' },
        { kind: 'p', text: 'These are our own measurements on the Translink file valid from 7 October to 6 December 2026. Timetables change, so a later file will give different counts. Times after midnight are written past 24:00 in GTFS files, so the last tram appears as 24:21, which learners must convert before they print a clock time.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Thinking about queries',
      h2: 'Five questions before you choose a structure for range questions',
      intro: 'Learned on a tram timetable, then reused on sensor readings, prices over time, game scores and server logs.',
      body: [
        { kind: 'table', caption: 'What to ask before indexing a list for range questions', head: ['Question', 'What to look at', 'Why it matters'], rows: [
          ['How long is the list?', 'Count the items first', 'For a few dozen values a loop is simpler and fast enough'],
          ['How many questions will you ask?', 'One report or thousands of lookups', 'An index only pays off if it is used many times'],
          ['Does the data change?', 'Cancellations, corrections, live feeds', 'Some structures must be rebuilt after every change'],
          ['What do you combine?', 'Maximum, minimum, sum, count', 'The combining rule decides what each node stores'],
          ['How will you check it?', 'Compare with a slow, obvious method', 'A fast structure that is quietly wrong is worse than a slow one']
        ] },
        { kind: 'p', text: 'The first two questions stop beginners from over-engineering. A segment tree on 133 values is a teaching exercise; the same tree over a year of departures for every stop on the line is a real tool. Knowing which situation you are in is the skill that separates a programmer from someone who has memorised data structures.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Build the tree in Python on the Cavill Avenue gaps, then break it with a wrong combining rule and find the bug by testing.' },
          { h3: 'University students', p: 'Range queries with updates are a staple of technical interviews and programming contests; we practise them on real files.' },
          { h3: 'Adults at work', p: 'Know when a database index, a cached report or a simple loop is the sensible answer for the questions your team asks.' }
        ] },
        { kind: 'p', text: 'We have no link with any transport agency, government department or statistics office. The population counts above are published by the ABS, and every gap, node and visit count in the project is something we calculated ourselves from the public G:link timetable.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Clocks and coastlines',
      h2: 'Two time zones in one urban area',
      intro: 'A detail of Gold Coast life that every programmer should notice.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'No daylight saving in Queensland', p: 'The IANA time zone database shows Queensland on UTC+10 all year since March 1992, so the Gold Coast never changes its clocks.' },
          { h3: 'Daylight saving in Tweed Heads', p: 'Across the border, New South Wales moves to UTC+11 in summer, so from October to April the two ends of the same urban area are an hour apart.' },
          { h3: 'Term 4 in Queensland', p: 'The Queensland Department of Education lists 2026 Term 4 as Tuesday 6 October to Friday 11 December, ten weeks of lessons.' }
        ] },
        { kind: 'spec', title: 'Why this matters to a programmer', p: 'Software that books a lesson or a tram trip for someone near the border cannot assume one offset for the whole region. It has to know which side of the line each person is on, store times in UTC and convert at the last moment, exactly the habit our learners practise.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first loop to a tree that answers range questions',
    intro: 'Ages are rough guides; the trial lesson sets the real starting rung.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Loops and lists', p: 'Reading a timetable file, finding the gaps between departures and printing the longest one with a loop.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Trees and recursion', p: 'Building a segment tree recursively, answering range questions and testing every answer against a loop.', courses: ['competitive-programming-for-teens-course', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Range structures', p: 'Segment trees with lazy updates, Fenwick trees and sparse tables, compared on large inputs with timings.', courses: ['data-structures-algorithms-masterclass-college', 'competitive-programming-masterclass-college'] },
      { band: 'Adults', h3: 'Data products', p: 'Indexing the data your work depends on and serving answers through a small app or report.', courses: ['full-stack-web-development-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant can write a segment tree in seconds. Why should a Gold Coast teenager still understand one?',
    intro: 'Because the assistant cannot tell you whether your data needs one, and on a list of 133 gaps it often does not.',
    p1: 'Ask a chatbot for a range-maximum structure and it will happily produce a segment tree, often with a subtle off-by-one in the boundaries that only shows up on certain ranges. It will rarely ask how long your list is or how many questions you plan to ask. On the Cavill Avenue data a plain loop beats the tree for short ranges, and a learner who has measured that will push back on an answer that is clever but unnecessary.',
    p2: 'That judgement is what we teach next to the code: test the generated structure against a slow method on hundreds of random ranges, count the work it really does, and decide whether it earns its place. A Gold Coast student who has found the bug in a borrowed tree and timed it against a loop will treat every generated algorithm the same careful way.',
    closer: 'Generated code still has to be tested and weighed against the data it will meet, and a Gold Coast learner who has done exactly that with a real timetable is ready for that job in 2026.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Helensvale or Burleigh Heads, the lesson starts at the same moment',
    intro: 'The urban area stretches along the coast and inland, and a live online lesson reaches every part of it without a drive or a tram ride.',
    cells: [
      { h3: 'Anywhere along the coast', p: 'A learner in an apartment near the beach and one in a house out west can share the same lesson, each at their own desk.' },
      { h3: 'School words you know', p: 'Lessons refer to Year 7, Year 10 or Year 12 the way coast schools do, and every class runs in English.' },
      { h3: 'A trial with real work', p: 'The free session is an actual coding task with a teacher watching, and it ends with a recommended level, course and time. No payment details are taken.' },
      { h3: 'Small matched groups', p: 'Fifteen to twenty learners at the same stage, drawn from the Gold Coast, the rest of Australia and further away, so each level finds a workable time.' },
      { h3: 'A steady weekly rhythm', p: 'Usually two lessons a week, about eight a month, at a fixed time. Breaks for school holidays and exams are agreed with the teacher ahead of time.' },
      { h3: 'India time, all year', p: 'Neither Queensland nor India changes its clocks, so the coast stays 4 hours 30 minutes in front of our teachers; a 5pm lesson on the coast begins at 12:30pm in India.' }
    ],
    spec: { title: 'One gap for Queensland learners', p: 'Learners on the Queensland side keep the same offset from our teachers all year. Families across the border in Tweed Heads move their clocks in summer, so their lesson time is always confirmed in their own local time.' }
  },

  fees: {
    h2: 'What classes cost on the Gold Coast',
    intro: 'Three figures and nothing hidden.',
    first: 'One complete lesson at no charge, ending with a level, a course suggestion and a weekly time.',
    group: 'A month of teaching, normally eight lessons, with fifteen to twenty learners at your level.',
    private: 'The same monthly pattern of about eight lessons, with one teacher and one learner.',
    closer: 'Outside India every family pays in US dollars at the same rate; Helensvale and Coolangatta receive identical invoices and no coastal surcharge exists. Nothing is charged until the trial has settled a course and a weekly time; holidays, missed lessons and moving between group and private classes are covered on the pricing page.'
  },

  reviewsH2: 'What families write about us on Google, quoted exactly',

  book: {
    h2: 'Tell us what you want to build',
    intro: 'We pick the first task to suit you: a first Python loop for a curious Year 8, a timetable puzzle for a Year 11 student, or the full Translink file for an adult who wants to learn data structures properly.',
    success: 'Thank you. Our team will contact you soon about a class on the Gold Coast.'
  },

  faq: {
    h2: 'Gold Coast coding class questions',
    intro: 'What Gold Coast learners and parents tend to ask first.',
    items: [
      { q: 'How many people live in the Gold Coast - Tweed Heads urban area?', a: '693,596 at the 2021 Census, with a median age of 40. The area includes Tweed Heads across the border in New South Wales.' },
      { q: 'What is a segment tree?', a: 'A segment tree is a tree built over a list in which each node stores a summary, such as the maximum, of one stretch of the list. It answers questions about any stretch, and accepts changes to single values, by touching only a few nodes instead of every item.' },
      { q: 'What is the Gold Coast tram project?', a: 'Learners take the 134 departures from Cavill Avenue station, platform 2, on one weekday from the Translink open timetable, work out the 133 gaps, and build a segment tree that answers questions such as the longest wait between 7am and 9am. They then cancel one tram and watch the answer change.' },
      { q: 'Is a segment tree always faster than a loop?', a: 'No. On our 133 gaps, a loop checked 16 values for the 7am to 9am question while the tree visited 19 nodes. The tree wins on long lists and many questions, which is why we measure before choosing.' },
      { q: 'Can Year 11 and 12 students join?', a: 'Yes. Senior students on the coast work on programming and problem solving that sits alongside their school subjects, with lessons planned around the Queensland term calendar. Anything a school assesses is completed by the student alone.' },
      { q: 'What time are lessons for Gold Coast learners?', a: 'Late afternoon, evening or weekend, agreed during the trial and always stated in Gold Coast time. Queensland stays 4 hours 30 minutes ahead of India time all year.' },
      { q: 'Is this page for younger children too?', a: 'It is aimed at secondary students and grown-ups. We teach from age 6, and primary-age children have their own page, coding classes for kids on the Gold Coast, with Scratch and picture-based projects.' },
      { q: 'Is there a Modern Age Coders centre on the Gold Coast?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Gold Coast coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Gold Coast and Queensland learners',
    html: 'Parents of primary-age children should read <a class="cg-inline-link" href="/coding-classes-for-kids-gold-coast">coding classes for kids on the Gold Coast</a>. Teenagers aiming at programming contests can start with <a class="cg-inline-link" href="/australian-informatics-olympiad-preparation">Australian Informatics Olympiad preparation</a>, and the wider state picture is on <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">coding and AI classes in Queensland</a>. Every Australian page is linked from the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Gold Coast and Queensland',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-gold-coast', label: 'Gold Coast kids' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-gcbt .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-gcbt .cg-hero h1 { font-weight: 740; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-gcbt .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-gcbt .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-gcbt .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.01em; }
.cg-root.cg-gcbt .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-gcbt .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-gcbt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gcbt .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-gcbt .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Gold Coast - Tweed Heads Significant Urban Area, ABS Census 2021 QuickStats, area code 3007, compared by QuickStats with Queensland and Australia (read 7 October 2026): 693,596 people; median age 40; 186,286 families; 302,683 private dwellings; average 2.5 people per household; dwelling structure, occupied private dwellings: separate house 145,389 (56.8 percent; Queensland 74.8), flat or apartment 54,022 (21.1 percent; Queensland 12.5; Australia 14.2); occupation, employed people aged 15 and over: Professionals 67,905 (20.4 percent; Queensland 21.4; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 122,502 (21.4 percent; Queensland 21.9; Australia 26.3); aged 15 to 19: 39,832 (5.7 percent); aged 20 to 24: 42,213 (6.1 percent). Queensland Department of Education term dates page: 2026 Term 4 Tuesday 6 October to Friday 11 December, 10 weeks. IANA tz database (australasia file): Australia/Brisbane UTC+10 with no daylight saving since March 1992; Australia/Sydney UTC+10 and UTC+11 in summer; Asia/Kolkata UTC+5:30, so the Queensland side is 4 hours 30 minutes ahead of India time all year.',
    localProject: 'Segment tree range-maximum queries with point updates over G:link light rail headways. Translink SEQ_GTFS.zip (feed_info publisher Department of Transport and Main Roads - Translink Division, feed_start_date 20261007, feed_end_date 20261206), route L1-5029 Helensvale - Burleigh Heads, route_type 0. Service day Wednesday 14 October 2026 resolved from calendar.txt and calendar_dates.txt: 273 of 1,030 L1 trips run. Stop "Cavill Avenue station, platform 2": 134 departures, first 04:20, last 24:21 (GTFS notation for 00:21 next day); 133 gaps: 105 of 7.5 minutes, 25 of 15 minutes, one each of 14, 14.5 and 10.5; median 7.5; maximum 15. Recursive segment tree (max) over the 133 gaps: height 8, array of 532 slots; range 7am to 9am (16 gaps) 19 node visits, maximum 7.5; 6pm to midnight (30 gaps) 23 visits, maximum 15; 1,000 random ranges (random.seed 2026) mean 20.432 node visits against mean 34.345 gaps scanned, all answers equal to max() over the slice; cancelling the 08:03 departure merges two 7.5 minute gaps into one of 15 via point updates touching 16 nodes, after which the 7am to 9am maximum is 15.0. Lesson family: segment tree; distinct from BST height (Brisbane), quickselect (Sydney), cuckoo hashing (Perth) and the one site page that mentions a Fenwick tree.',
    requiredMentions: [
      '693,596',
      '39,832',
      '302,683',
      '122,502',
      '67,905',
      '54,022',
      'Cavill Avenue station, platform 2',
      '20.4 nodes visited',
      '34.3 gaps checked',
      'Helensvale or Burleigh Heads'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Gold Coast - Tweed Heads Significant Urban Area (3007): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3007' },
      { claim: 'Translink General Transit Feed Specification for South East Queensland (SEQ_GTFS.zip), Creative Commons Attribution 4.0, listed on the Queensland Government open data portal.', url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink' },
      { claim: 'Queensland Department of Education, term dates 2026.', url: 'https://education.qld.gov.au/about-us/calendar/term-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Brisbane and Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'OpenStreetMap stations and track geometry: the Overpass API returned 406 to this machine on 7 October 2026 and no mirror was tried, so no map data is used.',
      'Bureau of Meteorology observations for the Gold Coast: the observations feed returned 403 and was not circumvented.',
      'Queensland Curriculum and Assessment Authority syllabus details: qcaa.qld.edu.au returned a Cloudflare 403 and was not circumvented, so no QCE subject facts are quoted.',
      'Patronage, crowding or on-time performance of G:link: not in the timetable file and not measured.',
      'Separate figures for the Gold Coast City council area or for Tweed Heads alone: the page uses the published Significant Urban Area totals only and does not split or add them.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Translink, the Department of Transport and Main Roads, the ABS or the Queensland Department of Education.'
    ]
  }
};
