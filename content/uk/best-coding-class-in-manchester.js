'use strict';
// Manchester (cg- city page, UK cluster Phase 4). Spine: correlate the changes, not the levels. The
// Environment Agency's flood-monitoring API publishes two River Medlock gauges inside the city, Gurney
// Street in Ancoats (690715, opened 15 October 2009) and London Road (690713, opened 1 March 1975), each
// reading every 15 minutes. Measured by us on 21 September 2026 from the API's readings for 23 August to
// 21 September 2026 (scratchpad mcr/lag.py): 2,827 readings at each gauge on common timestamps, seven
// missing quarter-hours at the same moments at both; the correlation of the two LEVEL series sits between
// 0.84 and 0.96 at every lag from none to two hours, so it cannot locate the delay, while the correlation of
// the CHANGES is minus 0.24 at no lag and peaks at 0.51 (45 minutes) and 0.53 (60 minutes); storm peaks
// arrive downstream 30 or 45 minutes after the upstream peak in 11 of 12 storms (one in the same quarter
// hour); the largest storm in the window peaked at 0.875 m at Gurney Street at 05:15 UK time on 4 September
// 2026 and 0.522 m at London Road half an hour later. Each gauge measures stage from its own zero, so only
// timing is compared (the datum trap belongs to Almere). Lesson family: lagged cross-correlation, and why a
// lag is found in the differences rather than the levels. Screened free site-wide on 21 September 2026
// (lag, cross-correlation, time lag: 0 hits; spent neighbours: moving averages, spikes, datum, stale data).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 (551,938 usual residents; 530,136 in
// households; 21,802 in communal establishments), TS007A (61,887 aged 20 to 24, 11.2% against 6.0% in
// England; the band total is one below TS001 and is never added up here), TS068 (156,241 students among
// residents aged 5 and over, 30.2% against 20.4% in England); University of Manchester Department of Computer
// Science history page (the Baby, first run 21 June 1948, built by F.C. Williams and Tom Kilburn; Turing Deputy
// Director of the Computing Machines Laboratory 1948 to 1954; department founded 1964; first intake of 24 men
// and four women in October 1965; later firsts); University of Manchester employers page (over 40,000
// students, 1,000 degree programmes, three faculties); EA station metadata (dates opened, records); Met Office
// historic station data for Ringway (69 metres above sea level; 1946 to October 2004; ends "Site Closed").
// Refused automated access (403, not circumvented): mmu.ac.uk and scienceandindustrymuseum.org.uk.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'MANCHESTER', blurb: 'The city where a stored program first ran, with a project timing the River Medlock between two gauges.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-manchester',
  code: 'mcr',
  accent: '#674979',
  accentRationale: 'Manchester: a dusky heather purple from the solver (6.07:1 on every paper tint, dE 8.3 from the nearest used accent), clear of the London red and the UK hub',
  pageType: 'city',
  place: {
    name: 'Manchester',
    eyebrow: 'Manchester, Greater Manchester, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Manchester, England',
  title: 'Best Coding Classes in Manchester | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Manchester learners aged 6 to 67, from Didsbury to Harpurhey, taught by a real teacher. First lesson free.',
  ogDescription: 'Coding and AI classes for Manchester, on a page about the Baby of 1948 and a river that takes about forty-five minutes to pass between two gauges.',
  twitterDescription: 'Manchester coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Manchester Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Manchester, taught live in English.'
  },

  h1: 'Coding classes in Manchester',
  capsuleQ: 'What are the best coding classes in Manchester?',
  capsule: 'Manchester is where the stored program began: on 21 June 1948 the University of Manchester\'s Small-Scale Experimental Machine, the Baby, became the first computer to run a program stored in its own electronic memory. The city it belongs to is unusually young. Census 2021 counted 551,938 residents, with 11.2% aged 20 to 24 against 6.0% across England, and 30.2% of residents aged five and over in full-time education or at school, against 20.4% nationally. We teach Manchester learners aged 6 to 67 live and online, in ability groups of five to ten or one to one, with a weekly hour written in UK time and teachers working from India. The first lesson costs nothing; afterwards a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'The River Medlock runs through the middle of Manchester, and the Environment Agency watches it at two points inside the city: Gurney Street in Ancoats and London Road further down. Both gauges report a water level every fifteen minutes, and both sets of readings are free to download. Put them side by side and an obvious question appears: how long does a rise at Gurney Street take to reach London Road? The first thing most people try gives a useless answer. The two level series correlate at 0.84 or better at every delay from none to two hours, because both are dominated by the same slow drift, so the number cannot say which delay is right. Correlate the changes instead, quarter hour by quarter hour, and the answer jumps out: a negative correlation at no delay, rising to a clear peak at 45 to 60 minutes. That difference, between the levels and the changes, is the lesson this city\'s own river teaches our teenage learners here.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Manchester.',

  picks: {
    eyebrow: 'Course picks for Manchester',
    h2: 'Four courses for the city that ran the first program',
    intro: 'Chosen by what the learner wants to build rather than by age alone. Every one begins with a free lesson, taught live, and no card details are asked for.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 11', note: 'Games and animations in Scratch, including a river that rises and falls and a boat that waits for the water.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from Key Stage 3 to GCSE depth, practised on files the city publishes about itself.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Two gauges, 2,827 readings each, and the question of how long the Medlock takes to travel from Ancoats to London Road.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Scripts that pull a live feed, align two series and flag when one starts moving ahead of the other.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Manchester today',
      h2: 'A young city with a university at its centre',
      intro: 'From the 2021 Census for the Manchester local authority, read through Nomis. Every figure below is for the city council area, not Greater Manchester.',
      body: [
        { kind: 'table', caption: 'Manchester in Census 2021, Office for National Statistics via Nomis', head: ['Measure', 'Manchester', 'England'], rows: [
          ['Usual residents', '551,938', 'Not compared'],
          ['Living in households', '530,136', 'Not compared'],
          ['Living in communal establishments', '21,802', 'Not compared'],
          ['Aged 20 to 24', '61,887, or 11.2% of residents', '6.0%'],
          ['Schoolchildren and full-time students, of residents aged 5 and over', '156,241, or 30.2%', '20.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'In education', p: 'On Census day, 30.2% of Manchester residents aged five or over were schoolchildren or full-time students. The figure for England was 20.4%.' },
          { h3: 'Twenty-somethings', p: '11.2% of Manchester residents were aged 20 to 24, against 6.0% across England, in the same Census.' },
          { h3: 'Communal living', p: 'The Census counts 21,802 people in communal establishments, the category that covers places such as student halls and care homes.' }
        ] },
        { kind: 'p', text: 'A note on the arithmetic. The five-year age table totals 551,937, one fewer than the headline count of 551,938, because published census tables are adjusted independently to protect individuals. The two are never meant to agree to the last person, so this page quotes the headline total and never adds up the bands to make its own.' }
      ]
    },
    {
      id: 'history', tint: 'tint', eyebrow: 'Where the stored program began',
      h2: 'The Baby, Turing and a department founded in 1964',
      intro: 'From the University of Manchester\'s Department of Computer Science and its own account of its history.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '21 June 1948', p: 'The Small-Scale Experimental Machine, known as the Baby, was designed and built by F.C. Williams and Tom Kilburn and made its first successful run of a program. The university calls it the world\'s first stored-program electronic digital computer.' },
          { h3: 'Turing in Manchester', p: 'Alan Turing was Deputy Director of the university\'s Computing Machines Laboratory from 1948 to 1954, where he proposed the Turing Test and worked on biological morphogenesis.' },
          { h3: 'A department of its own', p: 'The Department of Computer Science was founded in 1964, with Tom Kilburn as its first professor and head. Its first undergraduate intake, in October 1965, was 24 men and four women.' }
        ] },
        { kind: 'p', text: 'The department lists further firsts after the Baby: the first modern computer with a hardware floating point unit, the first transistor computer and the first computer to use virtual memory. The university today describes itself as having a student population of over 40,000 and 1,000 degree programmes across three faculties. We are not connected with the university; we mention it because a child growing up in Manchester lives beside one of the places where computing was invented, and that is worth knowing before choosing GCSE options.' },
        { kind: 'spec', title: 'What the Baby\'s first program did', p: 'Stored programs are the reason every lesson we teach is possible: the instructions live in memory beside the data, and a program can be changed by typing rather than rewiring. The Baby was the first machine to do that. A Manchester learner writing their first Python function is using the idea their city demonstrated first.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How long does the Medlock take between two gauges?',
      intro: 'Two Environment Agency gauges on the same river, both publishing every fifteen minutes through the free flood-monitoring API. We downloaded both and measured the delay.',
      body: [
        { kind: 'table', caption: 'What we measured from the Environment Agency readings, 23 August to 21 September 2026', head: ['Measure', 'Figure'], rows: [
          ['Readings at each gauge on shared timestamps', '2,827'],
          ['Missing quarter hours', 'Seven, at the same moments at both gauges'],
          ['Correlation of the two level series, any delay up to two hours', 'Between 0.84 and 0.96, never decisive'],
          ['Correlation of the changes, no delay', 'Minus 0.24'],
          ['Correlation of the changes, 45 and 60 minutes', '0.51 and 0.53, the clear peak'],
          ['Storm peaks arriving 30 or 45 minutes later downstream', '11 of 12']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Align the clocks', p: 'Learners join the two feeds on their timestamps and count what is missing before anything else. Seven quarter hours are absent from both, at the same moments.' },
          { h3: '2. Try the obvious', p: 'Shift one level series against the other and correlate. Every delay scores highly, from 0.84 to 0.96, and the method cannot choose between them.' },
          { h3: '3. Correlate the changes', p: 'Take the difference from one reading to the next and repeat. The correlation turns negative at no delay and peaks at 45 to 60 minutes, and that is the travel time.' }
        ] },
        { kind: 'callout', h3: 'The storm that proves it', p: 'The largest rise in the window came early on 4 September 2026. Gurney Street peaked at 0.875 metres at 05:15 UK time; London Road peaked at 0.522 metres at 05:45. Across all twelve storms that lifted Gurney Street above 0.4 metres, the downstream peak came 30 or 45 minutes later in eleven of them. The two gauges each measure from their own zero, so we compare their timing, never their heights.' },
        { kind: 'p', text: 'Why do the levels fool you? Both gauges share a slow background: a dry week pulls both down together, a wet one lifts both, and that common drift is correlated at any delay you pick. The quarter-hour changes strip the drift away and leave only the moments when water is actually arriving. It is the same reason economists compare month-on-month changes rather than raw prices, and the same reason an AI tool asked to link two series will often report a spectacular correlation that means nothing.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Two series that move together',
      h2: 'Five habits for finding a delay between two signals',
      intro: 'Learned on the Medlock, used afterwards on website traffic and sales, sensor networks, stock levels and anything two systems report at once.',
      body: [
        { kind: 'table', caption: 'How to find a lag without fooling yourself', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Join on time first', 'Keep only timestamps present in both series, and count the ones that are missing', 'Comparing a reading with a gap'],
          ['Remove the drift', 'Work with the change from one reading to the next, not the level itself', 'A high correlation at every lag'],
          ['Scan a range of lags', 'Compute the correlation at each delay and look for the peak, not the first large number', 'Picking a delay by habit'],
          ['Check with events', 'Match individual peaks and measure their gaps by hand', 'Trusting a single summary number'],
          ['Say what is not comparable', 'State when two sensors measure from different zeros or scales', 'Comparing heights that do not share a baseline']
        ] },
        { kind: 'p', text: 'The fourth habit matters most. The correlation of changes points to 45 to 60 minutes; the storm peaks say 30 to 45. Those are not in conflict: a peak is a single moment, while the correlation weighs the whole rise and fall. A good analysis reports both and explains why they differ, rather than choosing the more convenient one.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Two cartoon buckets filling from the same tap at different times, and a program that counts how many seconds apart they overflow.' },
          { h3: 'Teenagers', p: 'The real Medlock feeds in Python: join, difference, scan the lags, then defend the travel time against the storm peaks.' },
          { h3: 'Adults', p: 'A reusable script that watches two live feeds and reports when one has started leading the other.' }
        ] },
        { kind: 'p', text: 'We are not connected to the Environment Agency, the Met Office, the University of Manchester or Manchester City Council, and no link is implied. Census figures come from the Office for National Statistics through Nomis; the river measurements are ours, taken from the Environment Agency\'s published readings.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around the city',
      h2: 'Three gauges, a closed weather station and records still being set',
      intro: 'Manchester\'s public data has a long memory, and some of it has already stopped.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'London Road, since 1975', p: 'The Medlock gauge at London Road opened on 1 March 1975. Its highest reading on record is 1.802 metres, set on New Year\'s Day 2025.' },
          { h3: 'Gurney Street, since 2009', p: 'The Ancoats gauge opened on 15 October 2009 and set its record on 28 July 2019. On the River Irk, the Collyhurst Weir gauge has reported since 27 April 1995.' },
          { h3: 'Ringway, until 2004', p: 'The Met Office\'s public historic record for Ringway, at the airport and 69 metres above sea level, runs from 1946 to October 2004 and ends with the words Site Closed.' }
        ] },
        { kind: 'spec', title: 'A field that is not what it says', p: 'Each gauge also publishes a value called highest recent. At London Road it dates from October 2012, and it is lower than the record set in 2025. A name is a label someone chose once; the only way to know what a field means is to check its values against its definition, which is exactly what learners practise on this page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two buckets to a travel time you can defend',
    intro: 'The bands are a guide. The first free lesson decides where a learner actually starts.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Timing things', p: 'Programs that count, wait and compare, and the discovery that two events can be linked by a delay.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Tables of readings', p: 'Opening real data files, lining up two columns and spotting when one moves first.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Lags and differences', p: 'Joining feeds on time, differencing, scanning lags and checking the answer against events.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Watching live feeds', p: 'Automating the checks so a changing lead between two signals is noticed as it happens.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will correlate two river gauges in a second. Why should a Manchester teenager learn to do it by hand?',
    intro: 'Because the obvious correlations run from 0.84 to 0.96, and they mean almost nothing.',
    p1: 'Ask an AI tool whether the two Medlock gauges are related and it will correlate the levels and report a figure near 0.9, with confidence. Ask it for the delay and it may pick whichever lag scores highest, which on these readings is barely different from its neighbours. Nothing in that output is false, and nothing in it answers the question. The travel time only appears once the drift is removed, and knowing to remove it is a judgement, not a calculation.',
    p2: 'That judgement travels. The same trap catches anyone comparing two sales channels that both rise at Christmas, two websites that both slow on Monday mornings, or two classes whose marks both improve through the year. A learner who has seen the Medlock\'s levels agree at every delay will ask, the next time a number looks too good, what the two series have in common that is not the thing being measured.',
    closer: 'So the reason for a Manchester child to learn to code in 2026 is not only that the city invented the stored program, though it did. It is that checking whether a striking number is actually telling you anything is becoming one of the most useful things a person can do.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Didsbury, Chorlton or Harpurhey, the same lesson at the same minute',
    intro: 'Manchester runs from Wythenshawe in the south to Blackley in the north, and a live online lesson reaches all of it without a tram ride.',
    cells: [
      { h3: 'No journey across town', p: 'A learner in Levenshulme and one in Moss Side can share a lesson from their own desks, and nobody waits at a stop in the rain.' },
      { h3: 'English stages by name', p: 'Reception, the Key Stages, Year 9 options, GCSEs and A levels keep the names Manchester schools use, and lessons are taught in English.' },
      { h3: 'A real first lesson', p: 'A proper lesson on a real task, then a clear recommendation of level, course and weekly hour. No card details at any stage.' },
      { h3: 'Groups by ability', p: 'Five to ten learners at the same level, gathered from Manchester, the rest of the UK and other countries, so every stage finds a workable hour.' },
      { h3: 'Two lessons most weeks', p: 'Roughly eight a month at a fixed time, with breaks for half term, exams and holidays agreed with the teacher.' },
      { h3: 'Teachers on India time', p: 'India does not change its clocks, so our teachers are four and a half hours ahead of Manchester in summer and five and a half in winter, which puts UK afternoons and evenings inside their working day.' }
    ],
    spec: { title: 'A city full of students, a slot for each', p: 'With 30.2% of residents aged five and over in education, Manchester asks for after-school slots and late-evening ones for university students in roughly equal measure. Both fit comfortably into our teachers\' day.' }
  },

  fees: {
    h2: 'What classes cost in Manchester',
    intro: 'Three figures, and nothing hidden behind them.',
    first: 'A full lesson at no cost, ending with a level, a recommended course and a suggested weekly hour.',
    group: 'A month of teaching, usually eight lessons, with five to ten learners of the same ability.',
    private: 'The same monthly rhythm of around eight lessons, with one teacher for one learner.',
    closer: 'Fees are set in US dollars, the single rate for every family outside India, so Didsbury and Harpurhey pay exactly the same and there is no pound price list. Nothing is charged until the free lesson has settled a course and an hour, and the pricing page explains pauses, missed lessons and changes of format.'
  },

  reviewsH2: 'Six Google reviews from our families, unedited',

  book: {
    h2: 'Tell us where the learner is now',
    intro: 'The first task is chosen to fit: a Scratch timing game for a younger child, a first script that opens a table, or the two Medlock feeds for a teenager who likes a real puzzle.',
    success: 'Thank you. The team will contact you shortly about a Manchester class.'
  },

  faq: {
    h2: 'Manchester coding class questions',
    intro: 'What Manchester families ask us most.',
    items: [
      { q: 'How many people live in Manchester?', a: 'Census 2021 counted 551,938 usual residents in the Manchester local authority area, of whom 530,136 lived in households and 21,802 in communal establishments. Greater Manchester, a much larger area, is counted separately.' },
      { q: 'Is Manchester really a young city?', a: 'Yes. In 2021, 11.2% of residents were aged 20 to 24, against 6.0% across England, and 30.2% of residents aged five and over were schoolchildren or full-time students, against 20.4% nationally.' },
      { q: 'What happened in Manchester in 1948?', a: 'On 21 June 1948 the University of Manchester\'s Small-Scale Experimental Machine, the Baby, built by F.C. Williams and Tom Kilburn, ran its first program. The university describes it as the world\'s first stored-program electronic digital computer.' },
      { q: 'What is the Medlock project?', a: 'Learners download the Environment Agency\'s 15-minute readings from two Medlock gauges, Gurney Street and London Road, align them, and find the delay between them by correlating the changes rather than the levels. On our September 2026 readings it came out at 45 to 60 minutes.' },
      { q: 'Why not just correlate the water levels?', a: 'Because both gauges share the same slow drift, so the levels correlate at 0.84 or better whatever delay you choose. Correlating the quarter-hour changes removes the drift and reveals a clear peak.' },
      { q: 'What times can Manchester learners have lessons?', a: 'After school, in the evening or at weekends, with the hour fixed in UK time during the free lesson. Our teachers are four and a half hours ahead of Manchester in summer and five and a half in winter.' },
      { q: 'Can lessons pause for GCSEs or A levels?', a: 'Yes. Pauses for exam weeks, half term and holidays are agreed with the teacher in advance, and the course is planned around the school year.' },
      { q: 'Is there a Modern Age Coders centre in Manchester?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in the UK. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown is an Indian one.', boiler: true },
      { q: 'What do Manchester coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same schedule one to one. Course, format and hour are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or postcode. If no suitable group meets at a workable hour, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'Other cities, and the national pages',
    html: 'Other English cities have pages of their own, including <a class="cg-inline-link" href="/best-coding-class-in-london">London</a>, <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a> and <a class="cg-inline-link" href="/coding-classes-in-leicester">Leicester</a>. For how schooling in England shapes what a learner needs, read <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">coding and AI classes in England</a>; for the river-and-data side of this page, see the <a class="cg-inline-link" href="/data-science-course-uk">data science course</a>. Everything in the UK hangs off the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Manchester and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-birmingham', label: 'Birmingham' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-mcr .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.1vw, 2.7rem); }
.cg-root.cg-mcr .cg-hero h1 { font-weight: 700; letter-spacing: -0.022em; line-height: 1.07; }
.cg-root.cg-mcr .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-mcr .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mcr .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.012em; }
.cg-root.cg-mcr .cg-grid-3 { gap: clamp(1.05rem, 2.4vw, 2rem); }
.cg-root.cg-mcr .cg-table caption { letter-spacing: 0.015em; font-weight: 700; }
.cg-root.cg-mcr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mcr .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-mcr .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Manchester, Census 2021 via Nomis: TS001 Manchester local authority (E08000003) 551,938 usual residents, 530,136 in households, 21,802 in communal establishments; TS007A 61,887 aged 20 to 24, 11.2 percent, against 6.0 percent in England (band total 551,937, one below TS001 through independent table adjustment, never summed on the page); TS068 156,241 schoolchildren and full-time students among 517,560 residents aged 5 and over, 30.2 percent, against 20.4 percent in England. University of Manchester Department of Computer Science history page: the Small-Scale Experimental Machine, the Baby, designed and built by F.C. Williams and Tom Kilburn, first successful run of a program on 21 June 1948, described as the world\'s first stored-program electronic digital computer; later firsts: hardware floating point unit, transistor computer, virtual memory; Alan Turing Deputy Director of the Computing Machines Laboratory 1948 to 1954; department founded 1964 with Kilburn as first professor and head; first undergraduate intake of 24 men and four women in October 1965. University of Manchester employers page: student population of over 40,000, 1,000 degree programmes, three faculties. Environment Agency station metadata: London Road (River Medlock, 690713) opened 1 March 1975, maxOnRecord 1.802 m on 1 January 2025, highestRecent dated 12 October 2012 at 1.201 m; Gurney Street, Ancoats (690715) opened 15 October 2009, maxOnRecord on 28 July 2019; Collyhurst Weir (River Irk, 690611) opened 27 April 1995. Met Office historic station data, Ringway: 69 metres amsl, records from 1946, last row October 2004, final line Site Closed.',
    localProject: 'Correlate the changes, not the levels. From the Environment Agency flood-monitoring API, 15-minute stage readings for the River Medlock at Gurney Street (upstream) and London Road (downstream), 23 August to 21 September 2026, measured on 21 September 2026: 2,827 common timestamps, seven missing quarter-hours at the same moments at both; level correlations 0.88 at no lag, 0.96 at 45 and 60 minutes and 0.84 at 120 minutes, so the level series cannot locate the lag; correlations of first differences minus 0.24 at no lag, 0.14 at 30, 0.51 at 45, 0.53 at 60, 0.26 at 75 and minus 0.07 at 90 minutes; storm peaks (Gurney Street above 0.40 m) arrive downstream 30 or 45 minutes later in 11 of 12 storms, one within the same quarter hour; the largest storm peaked at 0.875 m at Gurney Street at 04:15 UTC (05:15 UK time) on 4 September 2026 and 0.522 m at London Road at 04:45 UTC. Heights are not compared because each gauge measures from its own zero. Lesson family: lagged cross-correlation and differencing to remove shared drift; distinct from moving averages, spikes (Finglas), the datum trap (Almere) and stale data (Ibri).',
    requiredMentions: [
      '551,938',
      '530,136',
      '21,802',
      '61,887',
      '156,241',
      '2,827',
      'Gurney Street',
      'Collyhurst Weir',
      '21 June 1948',
      'Kilburn',
      '24 men and four women',
      'Ringway'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Manchester local authority: 551,938 usual residents; 530,136 in households; 21,802 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E08000003&measures=20100' },
      { claim: 'Nomis, Census 2021 TS007A: Manchester 61,887 aged 20 to 24 (11.2 percent); England 6.0 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E08000003,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Manchester 156,241 students of 517,560 aged 5 and over (30.2 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E08000003,E92000001' },
      { claim: 'University of Manchester, Department of Computer Science, History and heritage: the Baby, 21 June 1948, Williams and Kilburn, Turing 1948 to 1954, department founded 1964, first intake of 24 men and four women in October 1965, later firsts.', url: 'https://www.cs.manchester.ac.uk/about/history-and-heritage/' },
      { claim: 'University of Manchester employers page: over 40,000 students, 1,000 degree programmes, three faculties.', url: 'https://www.employers.manchester.ac.uk/ourstudents/' },
      { claim: 'Environment Agency flood-monitoring API, station 690713 London Road and 690715 Gurney Street (River Medlock), 690611 Collyhurst Weir (River Irk): metadata and 15-minute readings.', url: 'https://environment.data.gov.uk/flood-monitoring/id/stations/690713' },
      { claim: 'Met Office historic station data, Ringway: location, 1946 start, October 2004 final row, Site Closed.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/ringwaydata.txt' }
    ],
    rejectedClaims: [
      'Manchester Metropolitan University and Science and Industry Museum facts: both sites returned 403 to automated checks and were not circumvented.',
      'Any river distance between the two gauges: not published, so no speed is claimed.',
      'Comparing the gauges\' heights: each measures from its own zero, and the datum lesson belongs to another page.',
      'Nationality, ethnicity, religion, birthplace and economic figures: excluded by the cluster rules.',
      'Crime, school league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the University of Manchester, the Environment Agency, the Met Office or Manchester City Council.'
    ]
  }
};
