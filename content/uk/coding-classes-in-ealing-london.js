'use strict';
// Ealing (cg- London borough page, UK cluster Phase 5, row 160). Named sources only.
// Spine: flow is never measured every fifteen minutes; it is calculated from the water level with a formula, and the
// formula can be recovered from the published numbers. EA Hydrology, River Brent at Greenford (station
// 77d381c3-f098-4b67-b0d5-0e08a548fe0e, 514914E 182238N, inside the ONS December 2024 BFC boundary of Ealing,
// E09000009, opened 1988): 15-minute level (m) and flow (m3/s), 2016-01-01 to 2025-12-31, pairs with both values
// flagged Good: 339,813. One power law Q = a(h - h0)^b fitted by log-linear least squares over a grid of h0:
// Q = 25.23 (h - 0.025)^2.187, median error 1.58%, 90th percentile 3.01%, but it overstates flows at levels of
// 1.2 m and above by a median 31.8%, and at the record 15-minute peak (53.151 m3/s at 1.679 m, 06:00 GMT on
// 23 September 2024) predicts 75.83. Two segments joined at a level of 0.32 m (breakpoint searched each year: 0.31 or
// 0.32 in 2016-2024, 0.29 in 2025): below, Q = 32.68 (h + 0.003)^2.564; above, Q = 24.12 (h - 0.101)^1.710; median
// error 0.08% or less in every level band, largest single miss 1.27%; at the peak it gives 52.61. The coefficients
// barely move from year to year, so the rating in use did not visibly change over the decade. Flow at the same
// recorded level varies by a median 0.38% across the decade (levels rounded to the millimetre).
// Lesson family: stage-discharge rating curve / piecewise power law, reverse-engineering a hidden formula from
// published outputs. Screened 25 September 2026 (rating curve 0, stage-discharge 0). Distinct from Gumbel (Dundrum),
// least squares (Sheffield), baseflow separation (Winchester), gradient descent (Chester), DTW (Gloucester) and
// quantile regression (Ripon).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'EALING', blurb: 'Thirteen libraries, a Grade I viaduct and a project that recovers the River Brent\'s hidden flow formula.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-ealing-london',
  code: 'eal',
  accent: '#3B257E',
  accentRationale: 'Ealing: a deep river indigo from the solver (9.73:1 on every paper tint), apart from the Hillingdon brick, the Hounslow green and the Brent earth orange',
  pageType: 'governorate',
  place: {
    name: 'Ealing',
    eyebrow: 'London Borough of Ealing',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ealing, London',
  title: 'Coding Classes in Ealing, Acton, Southall | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Ealing families in Acton, Southall, Greenford, Hanwell, Northolt and Perivale, ages 6 to 67. First lesson free.',
  ogDescription: 'Coding and Python classes for Ealing, on a page that recovers the formula the Environment Agency uses to turn River Brent levels into flows at Greenford.',
  twitterDescription: 'Ealing coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Ealing Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Ealing, taught live in English.'
  },

  h1: 'Coding classes in Ealing',
  capsuleQ: 'What are the best coding classes in Ealing?',
  capsule: 'Ealing is the west London borough of Ealing Broadway, Acton, Southall, Greenford, Hanwell, Northolt and Perivale, and the 2021 Census counted 367,115 residents. The council lists thirteen libraries, and Ealing Broadway alone is served by the Central, District and Elizabeth lines and Great Western Railway. A class that suits a learner here should teach them to work out how a published number was made, and the project on this page does that with the River Brent at Greenford. Our teachers teach live on video from India, in groups of five to ten at one level or one to one, for ages 6 to 67. The first lesson costs nothing; after that a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'Every fifteen minutes the Environment Agency publishes how much water is flowing down the River Brent at Greenford, in cubic metres a second. Nobody is out there measuring it. What the gauge records is the height of the water; the flow is worked out from that height with a formula called a rating, fixed by occasional field measurements. The formula itself is not printed alongside the data. But ten years of heights and flows, side by side, are enough to find it. Our learners try one smooth power curve first and land within two per cent most of the time, which sounds like success until they look at the floods, where the same curve overstates the river by about a third. Split the formula into two pieces at a water level of 0.32 m and the error falls below a tenth of a per cent almost everywhere. The published number was two formulas all along.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Ealing.',

  picks: {
    eyebrow: 'Course picks for Ealing',
    h2: 'Four courses for Ealing learners',
    intro: 'Picture a Year 2 child in Hanwell who asks how bridges stay up, a Year 8 pupil in Southall who spots patterns in number puzzles, a Year 12 student in Acton planning an engineering degree, and a parent in Perivale who wants to understand the models behind the charts at work. All four start with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch games with a secret rule for the player to discover by testing inputs, the youngest version of finding a hidden formula.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Powers, logarithms and graphs written as Python, including the straight line that a power curve becomes on a log scale.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, with this page\'s rating-curve project on real Environment Agency data from Greenford.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For grown-ups who work with calculated figures and want to know how the calculation behaves at the extremes.' }
    ]
  },

  sections: [
    {
      id: 'ealing', tint: '', eyebrow: 'Ealing at a glance',
      h2: '367,115 people, thirteen libraries and 307 listed buildings',
      intro: 'Each value comes from the organisation named in the last column.',
      body: [
        { kind: 'table', caption: 'Ealing, source by source', head: ['What', 'Value', 'Source'], rows: [
          ['Usual residents in 2021', '367,115', 'Census table TS001, Office for National Statistics, via Nomis'],
          ['Libraries on the council\'s list', '13', 'Ealing Council'],
          ['National Heritage List entries in the borough', '307: 6 Grade I, 18 Grade II*, 283 Grade II', 'Historic England list data, counted 25 September 2026'],
          ['Services at Ealing Broadway', 'Central, District, Elizabeth line, Great Western Railway', 'TfL open data, checked 25 September 2026'],
          ['Paired 15-minute readings used in the project', '339,813, from 2016 to 2025', 'Environment Agency Hydrology, River Brent at Greenford']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A viaduct at Grade I', p: 'Wharncliffe Viaduct at Hanwell is one of Ealing\'s six Grade I entries on Historic England\'s list, alongside Pitzhanger Manor House and three churches.' },
          { h3: 'Soane\'s manor', p: 'Pitzhanger Manor House and the entrance archway and gates at the north-east end of its park are both Grade I, and a bridge at the northern end of Walpole Park is Grade II*.' },
          { h3: 'A factory front', p: 'The main front block and the canteen block of the Hoover factory at Perivale are both Grade II*, a reminder that listed buildings are not only churches and houses.' }
        ] }
      ]
    },
    {
      id: 'libraries', tint: 'tint', eyebrow: 'Ealing libraries',
      h2: 'Thirteen libraries, from Acton to Northolt',
      intro: 'The libraries as Ealing Council names them on its find-your-library page. Several are community libraries run with local partners.',
      body: [
        { kind: 'table', caption: 'Ealing Council\'s libraries', head: ['Library', 'Library'], rows: [
          ['Acton Town Hall Library', 'Northolt Leisure Centre Library'],
          ['Ealing Central Library', 'Northolt Library'],
          ['Greenford Library', 'Perivale Community Library'],
          ['Hanwell Community Library', 'Pitshanger Library'],
          ['Jubilee Gardens Library', 'Southall Library and Dominion Centre'],
          ['Northfields Community Library', 'St Bernard\'s Hospital Library'],
          ['West Ealing Community Library', '']
        ] },
        { kind: 'p', text: 'A library computer is a good place to write a first program, and a quiet one can host an online lesson with headphones. For the River Brent project a learner needs Python and two free downloads from the Environment Agency, one of water levels and one of flows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The River Brent at Greenford: one formula, or two?',
      intro: 'Learners line up ten years of published levels and flows, fit a power curve, find where it fails, and split it into two pieces until the published flows are reproduced almost exactly.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Pair the readings', p: 'The Environment Agency publishes Greenford\'s water level and flow every 15 minutes. Keeping only moments where both are marked Good leaves 339,813 pairs between 2016 and 2025.' },
          { h3: '2. Fit a power curve', p: 'Rivers are rated with a curve of the form Q = a(h - h0)^b. Taking logarithms turns it into a straight line, so a learner can fit it with the same method used for any trend line, trying many values of h0.' },
          { h3: '3. Look at the misses', p: 'The single curve misses by 1.6% on a typical reading, but the misses are not random: they grow with the water level. That pattern says the formula has a second piece.' }
        ] },
        { kind: 'table', caption: 'Our run, 25 September 2026: how well each version reproduces the published flow at Greenford', head: ['Water level', 'Readings', 'One curve: typical error', 'Two pieces: typical error'], rows: [
          ['Below 0.32 m', '293,979', 'about 1 to 3%', '0.08%'],
          ['0.32 to 0.6 m', '39,533', 'about 0 to 3%', '0.03%'],
          ['0.6 to 1.0 m', '5,991', '6 to 13% too high', '0.06%'],
          ['1.0 m and above', '310', '21 to 32% too high', '0.05%'],
          ['Record peak, 06:00 GMT, 23 September 2024', 'published 53.15 m3/s', 'predicts 75.83', 'predicts 52.61']
        ] },
        { kind: 'p', text: 'The two pieces are Q = 32.68(h + 0.003)^2.564 below a level of 0.32 m and Q = 24.12(h - 0.101)^1.710 above it. Fitted year by year, the break lands at 0.31 or 0.32 m in every year from 2016 to 2024 and the numbers barely move, so the formula behind the published flows did not visibly change over the decade. A power of about 2.6 at low water and 1.7 higher up is what hydrologists expect when a river passes from a narrow low-flow channel into its wider cross-section, although the Agency\'s own gauging notes, which would say exactly why, are not published with the data.' },
        { kind: 'callout', h3: 'Why an AI does not settle this for you', p: 'Give an assistant these readings and ask for the relationship, and a single tidy power curve with a two per cent average error is a very reasonable answer. It is also wrong where it matters most: in a flood it overstates the river by around a third. A learner who has plotted the misses against the water level, seen them grow, and found the break at 0.32 m has learned to judge a model by where it fails, not by its average, which is the question every flood planner, engineer and data scientist has to ask.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'How a river is rated',
      h2: 'Levels are measured, flows are calculated',
      intro: 'Why this project is possible at all, and what our learners write down about its limits.',
      body: [
        { kind: 'table', caption: 'Measured, calculated and assumed', head: ['Quantity', 'How the published number arises'], rows: [
          ['Water level at the gauge', 'Measured by the instrument, every 15 minutes'],
          ['Flow in cubic metres a second', 'Calculated from the level with the station\'s rating'],
          ['The rating itself', 'Built from occasional field measurements of flow; not published with the readings'],
          ['Our recovered formula', 'Found by fitting the published pairs; it reproduces the Agency\'s calculation, not the river'],
          ['Flows above the highest field measurement', 'An extension of the rating; our fit cannot tell how well it matches the real river']
        ] },
        { kind: 'p', text: 'That last row is the honest limit. Reproducing a published calculation to a tenth of a per cent shows that we have found the Agency\'s formula, not that the formula is right about the river in a flood. Only a measurement in the water can do that.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Ealing Council, the Environment Agency, Historic England, Transport for London or the Office for National Statistics, and nothing on this page implies one. The library names are Ealing Council\'s and the readings the Environment Agency\'s; the pairing, the fits and every percentage are our own work, run on 25 September 2026.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting about',
      h2: 'Four railways at Ealing Broadway, and a lesson that needs none',
      intro: 'Ealing is well connected. An online class needs only a connection of a different kind.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Ealing Broadway', p: 'TfL\'s open data lists the Central, District and Elizabeth lines and Great Western Railway at Ealing Broadway, near Ealing Central Library.' },
          { h3: 'West to east', p: 'A learner near Northolt Library and one near Acton Town Hall Library can work in the same group, each from home.' },
          { h3: 'Down by the Brent', p: 'The Greenford gauge sits on the River Brent, the same river whose valley floor appears in our contour project for the borough of Brent.' }
        ] },
        { kind: 'spec', title: 'Ealing and the rest of London', p: 'Ealing is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists them all and links each as its page is published, among them <a class="cg-inline-link" href="/coding-classes-in-brent-london">Brent</a>, where the River Brent\'s valley appears in the contour project.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From guessing a rule to recovering a formula',
    intro: 'The first lesson places a learner by what they can already do, whatever their school year says.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Guess the rule', p: 'Children feed numbers into a Scratch machine, watch what comes out and work out the secret rule.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Patterns in tables', p: 'Python that reads a table, plots it and tests whether a straight line or a curve fits better.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Models and their misses', p: 'Power laws, logarithms, residual plots and breakpoints on real open data, the heart of a strong A level or EPQ project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Judge a model at its edges', p: 'Adults learn to check where a calculation behaves differently, before a decision rests on its extremes.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can fit a curve to river data in seconds. Why should an Ealing teenager learn to find where it breaks?',
    intro: 'Because an average error can be small and still hide the one place the answer matters.',
    p1: 'A single power curve through Greenford\'s readings is a textbook answer, and its typical error of under two per cent looks excellent. Plot the errors against the water level and the story changes: at flood levels the curve overstates the river by around a third, and at the September 2024 peak it would have reported 75.83 cubic metres a second where the Agency published 53.15. Insurance models, energy forecasts and AI predictions are all judged by averages, and the same trap sits in each.',
    p2: 'A learner who has found the break at 0.32 m carries three questions into every model they meet: where are the errors largest, do they follow a pattern, and what would that pattern mean? A tool can fit the curve. Knowing to look at the misses, and what to do about them, is the part that makes the fit trustworthy.',
    closer: 'Machines fit curves faster every year. The reason for an Ealing child to learn to code is to become the person who plots the errors before believing the fit, and catches the flood the average hid.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Southall to Acton, lessons at your own desk',
    intro: 'No part of the borough is nearer an online lesson than any other.',
    cells: [
      { h3: 'Home or library', p: 'Most learners join from home; a library table and a headset work when home is busy.' },
      { h3: 'English stages and exams', p: 'Key Stages, Year 9 options, GCSEs, A levels, T Levels and the EPQ are named as English schools name them. Every lesson is in English.' },
      { h3: 'Start with a free lesson', p: 'The first lesson is real work with a teacher and ends with a suggested level and course. No payment details are asked for.' },
      { h3: 'Groups by level', p: 'Five to ten learners at the same stage, from Ealing and much further afield, so there is a group at a workable hour.' },
      { h3: 'Twice a week, term aware', p: 'Most groups meet twice weekly and pause for half terms, holidays and exam weeks by agreement.' },
      { h3: 'Your clock, your times', p: 'The teacher is in India, but every invitation and reminder we send shows the time as it reads in Ealing.' }
    ],
    spec: { title: 'Thirteen libraries, one matched group', p: 'Ealing has thirteen libraries and many schools, but a good coding group needs five learners at one level and one hour, so ours draw on Ealing and far beyond.' }
  },

  fees: {
    h2: 'Fees for Ealing families',
    intro: 'One free lesson, then a single monthly fee, the same across the borough.',
    first: 'A full lesson with a teacher at no charge, finishing with a suggested level, course and weekly slot.',
    group: 'Roughly eight live lessons each month with five to ten learners at one stage.',
    private: 'Roughly eight live lessons each month with a teacher for one learner.',
    closer: 'Ealing families are billed in US dollars, as is everyone outside India, and our site shows no pound prices. You pay nothing until the free lesson is behind you and a course and regular time are agreed; the pricing page covers pauses, missed lessons and switching between group and one-to-one.'
  },

  reviewsH2: 'Six Google reviews, just as their writers left them',

  book: {
    h2: 'Tell us about your learner',
    intro: 'Age or school year, and what they enjoy, is plenty. The first task might be a Scratch rule-guessing game, a first Python program, or the River Brent formula from this page.',
    success: 'Thank you. Your Ealing class request has reached our team.'
  },

  faq: {
    h2: 'Ealing coding class questions',
    intro: 'About the borough, the River Brent project and our lessons.',
    items: [
      { q: 'How many people live in Ealing?', a: 'The 2021 Census counted 367,115 usual residents in the London Borough of Ealing, according to Office for National Statistics table TS001.' },
      { q: 'What libraries does Ealing have?', a: 'Ealing Council lists thirteen, including Ealing Central Library, Acton Town Hall Library, Greenford, Northolt, Pitshanger, Southall Library and Dominion Centre, Jubilee Gardens, and several community libraries at Hanwell, Northfields, Perivale and West Ealing.' },
      { q: 'Is River Brent flow measured every 15 minutes at Greenford?', a: 'The water level is. The flow published alongside it is calculated from the level using the station\'s rating, a formula based on occasional field measurements of the river\'s flow.' },
      { q: 'What is the rating-curve project?', a: 'Learners pair ten years of published levels and flows at Greenford, fit a power curve, notice it overstates flood flows by about a third, and find the published flows are made by two formulas joined at a level of 0.32 m, which together reproduce them to within about a tenth of a per cent.' },
      { q: 'What was the highest flow in the ten years?', a: 'The largest 15-minute flow published between 2016 and 2025 was 53.15 cubic metres a second, at a level of 1.679 m, at 06:00 GMT on 23 September 2024.' },
      { q: 'When are lessons for Ealing learners?', a: 'A regular time is settled after the free lesson, from groups at the learner\'s level that have space. Although the teacher works from India, every time we give you is the time on a clock in Ealing.' },
      { q: 'Can my child take a lesson from an Ealing library?', a: 'Yes, where the library\'s computers and connection allow and with headphones. Most learners find home quieter.' },
      { q: 'Is there a Modern Age Coders centre in Ealing?', a: 'No. There is no Ealing centre and no premises anywhere in the UK, because all teaching is live online. A learner needs a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Ealing cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, grouped by level, pace and goals rather than age or neighbourhood. If no group fits the learner\'s week, one-to-one lessons are the alternative.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'More boroughs, and the rest of the UK',
    html: 'Next door, <a class="cg-inline-link" href="/coding-classes-in-hillingdon-london">Hillingdon</a>, <a class="cg-inline-link" href="/coding-classes-in-hounslow-london">Hounslow</a> and <a class="cg-inline-link" href="/coding-classes-in-brent-london">Brent</a> have their own pages, and the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> gathers every borough and the City as each page goes live. For machine learning in the capital there is <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>; for school stages across the four nations, the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ealing and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-hillingdon-london', label: 'Hillingdon' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-eal .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.8vw, 2.3rem); }
.cg-root.cg-eal .cg-hero h1 { font-weight: 700; letter-spacing: -0.016em; line-height: 1.06; }
.cg-root.cg-eal .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-eal .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-eal .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.01em; }
.cg-root.cg-eal .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.75rem); }
.cg-root.cg-eal .cg-table caption { font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-eal .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-eal .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-eal .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-eal .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Ealing. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000009): 367,115 usual residents (362,907 households, 4,208 communal). Ealing Council, Find your library page, 25 September 2026: Acton Town Hall Library, Ealing Central Library, Greenford Library, Hanwell Community Library, Jubilee Gardens Library, Northfields Community Library, Northolt Leisure Centre Library, Northolt Library, Perivale Community Library, Pitshanger Library, Southall Library and Dominion Centre, St Bernard\'s Hospital Library, West Ealing Community Library (13). Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 307 (I 6, II* 18, II 283); Grade I 1358811 WHARNCLIFFE VIADUCT, 1358808 Pitzhanger Manor House, 1079350 ENTRANCE ARCHWAY AND GATES AT PITZHANGER MANOR AT NORTH EAST END OF PARK; II* 1079351 BRIDGE AT NORTHERN END OF WALPOLE PARK, 1079353 MAIN FRONT BLOCK TO HOOVER FACTORY, 1079361 CANTEEN BLOCK TO HOOVER FACTORY. TfL Unified API StopPoint 940GZZLUEBY (Ealing Broadway), 25 September 2026: Central, District, Elizabeth line, Great Western Railway (plus buses).',
    localProject: 'Rating curve at EA Hydrology Greenford, River Brent (station 77d381c3-f098-4b67-b0d5-0e08a548fe0e, 514914E 182238N, opened 1988-11-30; point-in-polygon inside Ealing). Measures level-i-900-m-qualified and flow-i-900-m3s-qualified, 2016-01-01 to 2025-12-31: level 339,813 Good / 10,883 Unchecked / 1 Estimated; flow 339,815 Good / 10,776 Unchecked / 1 Estimated; 339,813 timestamps with both Good; level 0.107 to 1.679 m, flow 0.114 to 53.151 m3/s. One curve (grid over h0, log-linear fit): Q = 25.2283 (h - 0.025)^2.1871, rms log 0.0225, median abs rel error 1.58%, 90th 3.01%; median log residual by band 0.1-0.2 -0.009, 0.2-0.3 -0.006, 0.3-0.4 +0.029, 0.4-0.5 +0.028, 0.5-0.6 -0.001, 0.6-0.8 -0.057, 0.8-1.0 -0.122, 1.0-1.2 -0.191, 1.2-1.7 -0.276; at >=1.2 m (87 readings) median overstatement 31.8%. Two segments, breakpoint searched per year 0.25-0.45: 2016-2024 at 0.31/0.32 (rms 0.0008-0.0036), 2025 at 0.29; pooled with break 0.32: low Q = 32.6783 (h + 0.003)^2.5642, high Q = 24.1224 (h - 0.101)^1.7095, rms 0.0016; median abs rel error by band <0.32 0.08% (max 1.27%), 0.32-0.6 0.03% (max 0.41%), 0.6-1.0 0.06% (max 0.20%), 1.0-1.7 0.05% (max 1.02%). Record 15-min flow 53.151 m3/s at 1.679 m, 2024-09-23T06:00:00 (EA Hydrology timestamps GMT); one curve 75.83, two segments 52.61. Same level, different flow: 662 of 1,091 distinct millimetre levels have more than one flow value, median spread 0.38%. The "narrow low-flow channel" explanation is labelled as what hydrologists expect, not as a fact about this station. Lesson family: rating curve / piecewise power law, screened free 25 September 2026.',
    requiredMentions: [
      '367,115',
      'Jubilee Gardens Library',
      'Pitshanger Library',
      'St Bernard\'s Hospital Library',
      'Wharncliffe Viaduct',
      'Pitzhanger Manor',
      'Hoover factory',
      '339,813',
      '0.32 m',
      '53.15'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Ealing E09000009: 367,115 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000009&measures=20100' },
      { claim: 'Ealing Council: Find your library, thirteen libraries.', url: 'https://www.ealing.gov.uk/info/201241/find_your_library' },
      { claim: 'Historic England NHLE listed building points, inside the ONS boundary of Ealing on 25 September 2026: 307 (6 I, 18 II*, 283 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'Environment Agency Hydrology, River Brent at Greenford: 15-minute level and flow with quality flags, 2016 to 2025.', url: 'https://environment.data.gov.uk/hydrology/id/stations/77d381c3-f098-4b67-b0d5-0e08a548fe0e' },
      { claim: 'ONS Local Authority Districts December 2024 boundaries (BFC), Ealing E09000009.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2024_Boundaries_UK_BFC/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint 940GZZLUEBY (Ealing Broadway), 25 September 2026: Central, District, Elizabeth line, Great Western Railway.', url: 'https://api.tfl.gov.uk/StopPoint/940GZZLUEBY' }
    ],
    rejectedClaims: [
      'The station\'s own rating equations, gaugings and reasons for the change of shape at 0.32 m: not published with the data, so the page recovers the formula from outputs and labels the channel explanation as what hydrologists expect.',
      'Any claim that the rating is accurate for the river in flood: not testable from published outputs, and the page says so.',
      'Wharncliffe Viaduct construction dates and engineering detail: not read at a primary source for this build; the page names it from the Historic England list only.',
      'Individual Ealing state schools: not read at their own sites for this build, so none is named.',
      'Census ethnicity, religion or country of birth for Ealing: never a standout; used only to order the build.'
    ]
  }
};
