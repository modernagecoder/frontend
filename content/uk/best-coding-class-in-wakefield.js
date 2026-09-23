'use strict';
// Wakefield (cg- city page, UK cluster Phase 4). Spine: how much water went past, and how often you have to look.
// Numerical integration of river flow on the Environment Agency Hydrology API, River Calder at Methley (station
// 825e7c96-b693-4366-8e39-a7fc587d442a, 53.726 N 1.383 W, about 9 km north-east of Wakefield city centre),
// 15-minute instantaneous flow (m3/s, qualified) and daily mean flow for 2024, read 23 September 2026 (scratchpad
// wkf/integ.py). 35,136 readings, no gaps. Quality flags: Good 23,295, Unchecked 5,828, Estimated 3,265, Suspect
// 2,748. Trapezium rule on all 15-minute readings: 640.0 million m3 in the year, mean flow 20.24 m3/s. Sampling at
// 09:00-aligned intervals: hourly 639.7 (-0.04 percent), six-hourly 639.3 (-0.11), daily 630.0 (-1.57); published
// daily means x 86,400 s (366 water days from 09:00): 642.8 (+0.44). Peak 202.4 m3/s at 02:30 on 24 November 2024
// (Good). Five-day window 22 to 27 November 02:30: 28.09 million m3; hourly -0.4 percent (highest sampled 200.6),
// six-hourly -3.1 (200.4), daily -28.6 (highest sampled 121.1); daily means in the window peak at 128.299. One
// reading is negative: -5.158 m3/s at 15:45 on 20 November 2024, flagged Good, between 8.751 and 3.636. Share of
// annual volume by flag of the starting reading: Good 47.5 percent, Unchecked 29.2, Estimated 12.3, Suspect 11.0.
// Lesson family: numerical integration (trapezium rule, sampling interval, aliasing of peaks, data quality flags).
// Screened 23 September 2026: trapezium, numerical integration 0 hits; distinct from Manchester lagged correlation
// and Hull flood fill.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Wakefield E08000036: TS001 353,368 usual
// residents, 349,825 in households, 3,543 in communal establishments; TS007A 20,831 aged 10 to 14 (5.9 percent),
// 17,865 aged 15 to 19 (5.1), 18,002 aged 20 to 24 (5.1, England 6.0), 26,331 aged 50 to 54 (7.5, England 6.9),
// 24,998 aged 55 to 59 (7.1, England 6.7); TS068 59,040 students of 333,296 aged 5 and over (17.7 percent, England
// 20.4); TS006 1,043.6 usual residents per square km (England 433.5). The Hepworth Wakefield, Our History: opened
// 2011 to house Wakefield's art collection and provide a legacy for Barbara Hepworth in the town where she was
// born; the original Wakefield Art Gallery established 1934; 44 plaster and aluminium prototypes with her work bench
// and tools on permanent display; RIBA competition 2003 won by David Chipperfield Architects; 150,000 visitors in
// the first five weeks; Art Fund Museum of the Year 2017. National Coal Mining Museum for England, About: at the
// former Caphouse Colliery on the western edge of the Yorkshire coalfield; a plan dated 1791 shows workings from
// 1789 to 1795.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'WAKEFIELD', blurb: 'The city on the Calder, with a project that adds up a year of river flow and shows what happens when you look too rarely.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-wakefield',
  code: 'wkf',
  accent: '#1E378F',
  accentRationale: 'Wakefield: a deep ultramarine from the solver (8.53:1 on every paper tint, dE 6.9 from the nearest used accent), more violet than the Portsmouth navy and far from the Salford slate',
  pageType: 'city',
  place: {
    name: 'Wakefield',
    eyebrow: 'Wakefield, West Yorkshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Wakefield' },
      { type: 'AdministrativeArea', name: 'West Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wakefield, England',
  title: 'Best Coding Classes in Wakefield | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Wakefield learners aged 6 to 67, from Sandal and Outwood to Pontefract and Castleford. First lesson free.',
  ogDescription: 'Coding and AI lessons for Wakefield, on a page that adds up a year of River Calder flow and shows how much a storm hides from anyone who looks once a day.',
  twitterDescription: 'Wakefield learners from age six to sixty-seven can learn coding, Python and AI live online with us, and the first lesson is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Wakefield Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, numerical methods, AI and mathematics taught live online in English to Wakefield children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Wakefield',
  capsuleQ: 'What are the best coding classes in Wakefield?',
  capsule: 'Census 2021 counted 353,368 usual residents in the Wakefield district, and 7.5% of them were aged 50 to 54, against 6.9% in England. The Hepworth Wakefield opened in 2011 to house the city\'s art collection and to give Barbara Hepworth a legacy in the town where she was born. Wakefield learners aged six to sixty-seven study with our India-based teachers over live video, on their own or in a group of five to ten with a matching level, with lessons fitted around the UK day. There is no charge for the first lesson, and after that a group place is USD 100 a month and private teaching USD 150.',
  lead: 'The Environment Agency measures the River Calder at Methley, downstream of Wakefield, every fifteen minutes. Add up those readings with the trapezium rule and the river carried about 640 million cubic metres of water in 2024. Sample it once an hour instead and the answer barely moves; once every six hours, still barely. Look only once a day and the year\'s total falls by 1.57%, which sounds harmless. But in the five days around the November flood peak of 202.4 cubic metres a second, the once-a-day total is 28.6% short, and the highest flow it ever sees is 121.1. Our teenagers integrate the flow, then learn why the sampling interval must match the fastest thing they care about.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Wakefield.',

  picks: {
    eyebrow: 'Course picks for Wakefield',
    h2: 'Four courses for the city on the Calder',
    intro: 'Choose by what the learner likes most. Each course opens with a free live lesson, and we never ask for a card to book it.',
    items: [
      { course: 'mental-maths-mastery-kids', band: 'Ages 6 to 11', note: 'Confident number work for younger children, including adding up many small amounts quickly and checking the total.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real river and weather files in Python, with gaps, flags and time steps handled properly, as on this page.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', band: 'Ages 16 to 18', note: 'A level Maths, including the trapezium rule, integration and the error in numerical estimates.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python for adults, from first scripts to processing large time series from sensors and meters.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wakefield today',
      h2: 'A large district with an older middle',
      intro: 'Census 2021 figures for the City of Wakefield district, which takes in Pontefract, Castleford and many former mining villages, as published by the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Wakefield district, Census 2021', head: ['Measure', 'Wakefield', 'England'], rows: [
          ['Usual residents', '353,368', '56,490,048'],
          ['Living in households', '349,825', 'Not compared'],
          ['Aged 20 to 24', '18,002 (5.1%)', '6.0%'],
          ['Aged 50 to 54', '26,331 (7.5%)', '6.9%'],
          ['Aged 55 to 59', '24,998 (7.1%)', '6.7%'],
          ['Students among residents aged 5 and over', '59,040 (17.7%)', '20.4%'],
          ['Usual residents per square kilometre', '1,043.6', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Fifties above average', p: 'Residents aged 50 to 59 were a larger share of the district in 2021 than of England, while people in their early twenties were a smaller one.' },
          { h3: 'Fewer full-time students', p: 'Of 333,296 residents aged five and over, 59,040 were at school or in full-time study, 17.7% against 20.4% nationally.' },
          { h3: 'Towns and villages', p: 'The district spreads at 1,043.6 residents per square kilometre across a city, several towns and many villages, with 349,825 people in households.' }
        ] },
        { kind: 'p', text: 'That older middle is part of why we teach adults as well as children. A Year 4 pupil in Sandal might be writing a first game, a Year 11 student in Ossett revising for GCSE Computer Science, and someone in their fifties in Castleford learning Python for a new role, each in a small group at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Sculpture and coal',
      h2: 'A gallery for Barbara Hepworth and a colliery kept open for visitors',
      intro: 'From The Hepworth Wakefield\'s own history and the National Coal Mining Museum for England.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1934', p: 'The gallery says the original Wakefield Art Gallery was established that year, the start of the collection that the new building was later made to house.' },
          { h3: '2011', p: 'The Hepworth Wakefield opened in a building by David Chipperfield Architects, chosen through a RIBA competition in 2003, and says it reached its first year\'s target of 150,000 visitors within five weeks.' },
          { h3: 'Prototypes and tools', p: 'Two galleries show 44 of Barbara Hepworth\'s plaster and aluminium prototypes, with her work bench and tools, exploring how she actually made her sculpture.' }
        ] },
        { kind: 'p', text: 'We have no connection with The Hepworth Wakefield or the National Coal Mining Museum. The museum sits at the former Caphouse Colliery on the western edge of the Yorkshire coalfield, where it says a plan dated 1791 already shows workings. Both places are about measuring and making things carefully, from a sculptor\'s prototypes to the surveys of a pit. The project below measures a river.' },
        { kind: 'spec', title: 'Where the flow figures come from', p: 'The Environment Agency\'s Hydrology service publishes river flow for its gauging stations, both every fifteen minutes and as daily means, with a quality flag on each value. The Methley station on the River Calder lies about nine kilometres north-east of Wakefield city centre.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How much water did the Calder carry in 2024?',
      intro: 'Flow is a rate, in cubic metres a second. Volume is the area under the flow curve, and the trapezium rule estimates that area by joining the readings with straight lines.',
      body: [
        { kind: 'table', caption: 'Volume of the River Calder past Methley, 2024, estimated from 15-minute flow readings sampled at different intervals', head: ['Readings used', 'Whole year', 'Change', 'Five days around the November peak', 'Change'], rows: [
          ['Every 15 minutes', '640.0 million m3', 'Reference', '28.09 million m3', 'Reference'],
          ['Every hour', '639.7 million m3', '-0.04%', '27.99 million m3', '-0.4%'],
          ['Every six hours', '639.3 million m3', '-0.11%', '27.22 million m3', '-3.1%'],
          ['Once a day', '630.0 million m3', '-1.57%', '20.05 million m3', '-28.6%'],
          ['Published daily means', '642.8 million m3', '+0.44%', 'Not compared', 'Not compared']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Join the dots', p: 'Between each pair of readings, treat the flow as a straight line and work out the area underneath: the average of the two flows times the 900 seconds between them.' },
          { h3: '2. Add it all up', p: 'Over 35,136 readings with no gaps, the areas sum to about 640 million cubic metres, a mean flow of 20.24 cubic metres a second for the year.' },
          { h3: '3. Thin the readings', p: 'Keep one reading an hour, then one every six hours, then one a day, and repeat. A good method should give nearly the same answer until the gaps grow too wide.' }
        ] },
        { kind: 'callout', h3: 'Averages hide storms', p: 'Over a whole year, once-a-day sampling looks almost good enough, because most days the river changes slowly. A flood is different. The Calder at Methley rose to 202.4 cubic metres a second at 02:30 on 24 November 2024. A once-a-day reading never saw more than 121.1, and it missed 28.6% of the water in those five days. Choose the interval to suit the fastest change you care about, not the average day.' },
        { kind: 'p', text: 'The quality flags need care too. Only 47.5% of the year\'s volume comes from readings flagged Good; the rest is Unchecked, Estimated or Suspect. And at 15:45 on 20 November one reading, flagged Good, shows a flow of minus 5.158 cubic metres a second between readings of 8.751 and 3.636. A flag records someone\'s judgement, not a guarantee, and a careful learner looks at the numbers as well as the labels.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Adding up rates',
      h2: 'Five checks before integrating any sensor data',
      intro: 'Learned on a river, then used on electricity meters, fuel use, fitness trackers, network traffic and the energy bills of computer systems.',
      body: [
        { kind: 'table', caption: 'Turning a rate into a total, carefully', head: ['Check', 'For the Calder at Methley', 'What it prevents'], rows: [
          ['Are the steps regular?', '35,136 readings at exactly 15 minutes', 'Areas computed over the wrong widths'],
          ['Are there gaps?', 'None in 2024', 'Missing water treated as zero'],
          ['How fast can it change?', 'Hours during a flood', 'A sampling interval that misses peaks'],
          ['What do the flags say?', 'Good covers 47.5% of the volume', 'Treating estimates as measurements'],
          ['Do values make physical sense?', 'One negative flow flagged Good', 'Trusting a label over the data']
        ] },
        { kind: 'p', text: 'The published daily means differ from the 15-minute trapezium total by 0.44%, not because either is wrong but because they are built differently: each daily mean runs from 09:00 to 09:00 and is published as a series of its own. Comparing two honest methods and explaining the gap is a better habit than picking the one that looks tidier.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Filling a jug from a tap that speeds up and slows down, and checking the level only now and then.' },
          { h3: 'Teenagers', p: 'The Hydrology API in Python, the trapezium rule on real flow data, and totals recomputed at wider and wider intervals.' },
          { h3: 'Adults', p: 'Integrating meter and sensor data at work, with gaps, flags and sampling intervals checked before totals are reported.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Environment Agency, The Hepworth Wakefield, the National Coal Mining Museum or Wakefield Council. The flow data and census tables are published openly; the totals, comparisons and sampled series here are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From filling a jug to the trapezium rule',
    intro: 'The age bands are only a rough guide, and the free lesson finds the real starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Little and often', p: 'Adding many small amounts, and discovering that checking only occasionally can miss what happened in between.', courses: ['mental-maths-mastery-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Rates and totals', p: 'Speed and distance, flow and volume, worked out in code from a table of readings.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Numerical integration', p: 'The trapezium rule on real sensor data, sampling intervals, quality flags and the error they introduce.', courses: ['a-level-maths-course-pure-mechanics-statistics', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Sensor data at work', p: 'Totals from meters and logs, built with the gaps and flags handled rather than ignored.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Numerical libraries integrate data in one call. Why should a Wakefield teenager do it by hand?',
    intro: 'Because the call cannot tell you whether you looked at the river often enough.',
    p1: 'An AI assistant will happily integrate a column of flows and return a total. If the column holds one reading a day, it will return 630 million cubic metres with complete confidence, and the missing quarter of a flood will never be mentioned. A learner who has thinned the data and watched the storm disappear knows the question to ask first: how fast can this thing change?',
    p2: 'The same issue runs through AI systems that learn from sensor data. A model trained on hourly or daily summaries cannot learn from events shorter than its sampling interval, however clever it is. People who understand sampling are the ones who notice when a dataset was never capable of showing the thing a model is asked to predict.',
    closer: 'So a Wakefield teenager should still learn to program in 2026, in a city whose gallery shows the prototypes behind finished sculptures: the tools produce the answer, but understanding how it was made is what makes it trustworthy.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Sandal, Ossett or Pontefract, from home',
    intro: 'The Wakefield district stretches from Ossett to South Elmsall, and an evening trip across it is long. A live online lesson needs no trip at all.',
    cells: [
      { h3: 'City, towns and villages', p: 'A learner in Horbury and another in Knottingley can share one lesson without either leaving home.' },
      { h3: 'Stages as schools use them', p: 'Reception, Key Stages 1 to 4, GCSE options and A levels, named the way Wakefield schools name them, with teaching in English.' },
      { h3: 'A first lesson with real work', p: 'The free session covers a proper task and ends with a recommended level, course and weekly time. We take no card details.' },
      { h3: 'Five to ten learners per group', p: 'Everyone in a group works at the same stage, drawn from Wakefield, the rest of the UK and overseas, so each level has a suitable hour.' },
      { h3: 'Twice a week', p: 'Two regular lessons weekly, around eight a month, with holidays and exam weeks agreed with the teacher in good time.' },
      { h3: 'Teaching after dark in India', p: 'A 5.30 pm lesson in Wakefield begins at 10 pm in India in the British summer and 11 pm in winter, as Indian clocks never change; our teachers keep those hours for UK learners.' }
    ],
    spec: { title: 'Across West Yorkshire', p: 'Families in Leeds, Dewsbury, Barnsley or Selby join exactly the same classes, because everything is online and groups are formed by level.' }
  },

  fees: {
    h2: 'Wakefield lesson fees',
    intro: 'A free lesson first, then one fee a month.',
    first: 'A full lesson at no cost, ending with a level, course and weekly time we suggest.',
    group: 'Around eight live lessons a month, in a class of five to ten learners at the same stage.',
    private: 'Around eight live lessons a month, with a teacher for your learner alone.',
    closer: 'Normanton and Hemsworth pay what every family outside India pays: one fee in US dollars, and not a single price in pounds on our site. Payment begins only after the free lesson has settled a course and a weekly slot, and our pricing page explains pausing, missed lessons and changes between group and private teaching.'
  },

  reviewsH2: 'Six families on Google, in their own words',

  book: {
    h2: 'Book a free lesson for a Wakefield learner',
    intro: 'The first task depends on the learner: a fill-the-jug adding game for a young child, a short Python program that turns a speed into a distance for a beginner, or the Calder flow file and the trapezium rule for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Wakefield learner.'
  },

  faq: {
    h2: 'Wakefield coding class questions',
    intro: 'What Wakefield families most often ask us.',
    items: [
      { q: 'How many people live in the Wakefield district?', a: 'Census 2021 counted 353,368 usual residents in the City of Wakefield district, which includes Pontefract, Castleford and many villages; 349,825 of them lived in households.' },
      { q: 'How does Wakefield compare with England?', a: 'Wakefield has more people in their fifties and fewer in their early twenties: 7.5% of residents were aged 50 to 54 in 2021 (England 6.9%), and 17.7% of those aged five and over were students (England 20.4%). Density was 1,043.6 residents per square kilometre (England 433.5).' },
      { q: 'What is the trapezium rule?', a: 'A way of estimating the area under a curve, and so a total from a rate, by joining neighbouring readings with straight lines and adding up the trapezium-shaped areas beneath them.' },
      { q: 'How much water did the River Calder carry in 2024?', a: 'About 640 million cubic metres past Methley, by our trapezium-rule total of 15-minute Environment Agency readings, a mean flow of 20.24 cubic metres a second.' },
      { q: 'Where does the river data come from?', a: 'The Environment Agency\'s Hydrology service, which publishes 15-minute and daily flows for the Methley gauging station on the River Calder, each with a quality flag.' },
      { q: 'Why is there a gallery named after Barbara Hepworth?', a: 'The Hepworth Wakefield says it opened in 2011 to house Wakefield\'s art collection and to provide a legacy for Barbara Hepworth in the town where she was born. We are not connected with the gallery.' },
      { q: 'When are Wakefield lessons?', a: 'On weekday afternoons or evenings, or at the weekend, at a UK time fixed in the free lesson. India is four and a half hours ahead of Wakefield in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Wakefield?', a: 'No. We have no Wakefield centre and no premises anywhere in the UK, because all lessons are live online. Learners need a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Wakefield lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Wakefield groups formed?', a: 'By level, pace and goals rather than age or postcode, with five to ten learners at one stage. If no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'Yorkshire and beyond',
    html: 'Up the road, the <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds page</a> samples a year of footfall fairly, and to the south <a class="cg-inline-link" href="/best-coding-class-in-sheffield">Sheffield</a> shows how a least-squares trend moves with its starting year. <a class="cg-inline-link" href="/best-coding-class-in-york">York</a> measures the surprise in its street names. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> explains the school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> opens onto every city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wakefield and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-leeds', label: 'Leeds' },
    { href: '/best-coding-class-in-sheffield', label: 'Sheffield' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-wkf .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.8vw, 2.35rem); }
.cg-root.cg-wkf .cg-hero h1 { font-weight: 700; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-wkf .cg-capsule { border-bottom: 5px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-wkf .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wkf .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.015em; }
.cg-root.cg-wkf .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2.15rem); }
.cg-root.cg-wkf .cg-table th { letter-spacing: 0.022em; }
.cg-root.cg-wkf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wkf .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-wkf .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Wakefield, Census 2021 via Nomis (E08000036): TS001 353,368 usual residents, 349,825 in households, 3,543 in communal establishments; TS007A 18,002 aged 20 to 24 (5.1 percent, England 6.0), 26,331 aged 50 to 54 (7.5 percent, England 6.9), 24,998 aged 55 to 59 (7.1 percent, England 6.7); TS068 59,040 students of 333,296 residents aged 5 and over (17.7 percent, England 20.4); TS006 1,043.6 usual residents per square kilometre (England 433.5). The Hepworth Wakefield, Our History: opened 2011; Wakefield Art Gallery established 1934; 44 plaster and aluminium prototypes with work bench and tools; RIBA competition 2003 won by David Chipperfield Architects; 150,000 visitors in five weeks. National Coal Mining Museum for England: former Caphouse Colliery, western edge of the Yorkshire coalfield; plan dated 1791.',
    localProject: 'How much water did the Calder carry in 2024? EA Hydrology API, River Calder at Methley, 15-minute flow and daily means for 2024 (read 23 September 2026): 35,136 readings, no gaps; flags Good 23,295, Unchecked 5,828, Estimated 3,265, Suspect 2,748. Trapezium total 640.0 million m3 (mean 20.24 m3/s); hourly -0.04 percent, six-hourly -0.11, daily -1.57; daily means +0.44. Peak 202.4 m3/s at 02:30 on 24 November 2024; five-day window 28.09 million m3; hourly -0.4, six-hourly -3.1, daily -28.6 (highest sampled 121.1). One reading of -5.158 m3/s at 15:45 on 20 November flagged Good. Good readings carry 47.5 percent of the volume. Lesson family: numerical integration, trapezium rule and sampling interval; distinct from Manchester lagged correlation and Hull flood fill.',
    requiredMentions: [
      '353,368',
      '349,825',
      '1,043.6',
      '26,331',
      '59,040',
      '333,296',
      'Methley',
      'trapezium',
      'Hepworth',
      'Caphouse',
      '202.4',
      'Chipperfield'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Wakefield: 353,368 usual residents; 349,825 in households; 3,543 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E08000036' },
      { claim: 'Nomis, Census 2021 TS007A: Wakefield and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E08000036,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Wakefield 59,040 students of 333,296 aged 5 and over (17.7 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E08000036,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Wakefield 1,043.6 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E08000036,E92000001' },
      { claim: 'Environment Agency Hydrology API, River Calder at Methley: 15-minute and daily mean flow with quality flags.', url: 'https://environment.data.gov.uk/hydrology/id/stations/825e7c96-b693-4366-8e39-a7fc587d442a' },
      { claim: 'The Hepworth Wakefield, Our History: 1934 gallery, 2011 opening, Chipperfield, 44 prototypes, 150,000 visitors in five weeks.', url: 'https://hepworthwakefield.org/our-story/our-history/' },
      { claim: 'National Coal Mining Museum for England, About: Caphouse Colliery, western edge of the Yorkshire coalfield, plan dated 1791.', url: 'https://www.ncm.org.uk/about-us/' }
    ],
    rejectedClaims: [
      'A storm name for the November 2024 peak: not stated in the flow data, so the page gives the date and flow only.',
      'Construction cost of The Hepworth Wakefield: money figures are excluded by the cluster rules.',
      'Any flood-risk statement for Wakefield: the project measures volume and sampling, not risk.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Environment Agency, The Hepworth Wakefield, the National Coal Mining Museum or Wakefield Council.'
    ]
  }
};
