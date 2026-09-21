'use strict';
// Oxford (cg- city page, UK cluster Phase 4). Spine: does rain remember yesterday? A two-state Markov chain built
// from the Radcliffe Meteorological Station daily dataset (School of Geography and the Environment, University of
// Oxford, file "daily-data-to-Dec-2025", read 21 September 2026; scratchpad oxf/markov.py). Wet day = the file's own
// "Wet day (1.0 mm or more)" flag. Window 1 January 1853 to 31 December 2025, because the School warns that some
// daily rainfall values before 1853 may be multi-day accumulations: 63,187 days, no blank flags, 19,763 wet (31.3%).
// Pair counts: wet-wet 9,766, wet-dry 9,997, dry-wet 9,997, dry-dry 33,426. P(wet | wet yesterday) 49.4%,
// P(wet | dry yesterday) 23.0%; the chain's stationary share 31.3% equals the observed share because wet-to-dry and
// dry-to-wet counts can differ by at most one. Lag test (observed vs chain) after a wet day: 2 days 42.8 vs 36.1,
// 3 days 39.5 vs 32.5, 5 days 36.7 vs 31.4, 7 days 34.6 vs 31.3. Annual wet days, 173 years: mean 114.2, sd 14.7,
// min 79 (1921), max 150 (1872); chain simulation of 34,600 years (seed 20260921) sd 11.6; memoryless coin sd 8.8.
// Seasons: winter P(W|W) 52.0% P(W|D) 24.8%; summer 46.2% and 21.6%. Lesson family: Markov chains (transition
// counts, stationary share, testing at longer lags and on spread). Screened free site-wide on 21 September 2026
// (famcheck.js: markov 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 for the Oxford district E07000178 (162,040
// usual residents; 140,818 in households; 21,222 in communal establishments, 13.1%), TS007A (7,852 aged 5 to 9,
// 4.8%; 15,874 aged 15 to 19, 9.8%; 21,992 aged 20 to 24, 13.6%; England 5.9%, 5.7% and 6.0%), TS068 (54,356
// schoolchildren and full-time students of 154,903 aged 5 and over, 35.1%; England 20.4%). School of Geography
// and the Environment, Radcliffe Meteorological Station pages (records from 1772; unbroken daily air temperature
// from November 1813, recommenced 14 November 1813; daily rainfall from January 1827; sunshine from February 1880;
// longest single-site weather records in the UK; garden of Green Templeton College off Woodstock Road; octagonal
// tower 33 m high; instruments and exposure fully documented; pre-1972 rainfall converted from inches). University
// facts and figures (more than 26,000 students including 12,460 undergraduates and 13,755 postgraduates; around
// 3,300 undergraduate places and over 23,000 applicants in 2024) and history (teaching in some form in 1096).
// Department of Computer Science history (OUCL set up in 1957 under Leslie Fox; Joan Walsh first OUCL woman DPhil
// in 1960; Programming Research Group founded in 1965 under Christopher Strachey; renamed in 2011).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'OXFORD', blurb: 'Home of the longest single-site weather record in the UK, with a project that asks whether rain remembers yesterday.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-oxford',
  code: 'oxf',
  accent: '#0F4057',
  accentRationale: 'Oxford: a deep petrol blue from the solver (9.01:1 on every paper tint, dE 6.8 from the nearest used accent); a nod towards Oxford blue without copying it, and far enough from the Milton Keynes navy',
  pageType: 'city',
  place: {
    name: 'Oxford',
    eyebrow: 'Oxford, Oxfordshire, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Oxfordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Oxford, England',
  title: 'Best Coding Classes in Oxford | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Oxford learners aged 6 to 67, from Headington and Cowley to Summertown, with a real teacher. First lesson free.',
  ogDescription: 'Coding and AI lessons for Oxford, where the Radcliffe station has logged daily rain since 1827, on a page that asks whether rain remembers yesterday.',
  twitterDescription: 'Live online coding and AI lessons for Oxford learners from six to sixty-seven; the first one is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Oxford Live Online Coding, AI and Maths Classes',
    description: 'Online coding, Python, AI, data and maths lessons for Oxford children, teenagers and adults, grouped by ability and taught live in English.'
  },

  h1: 'Coding classes in Oxford',
  capsuleQ: 'What are the best coding classes in Oxford?',
  capsule: 'Oxford counted 162,040 usual residents in the 2021 Census, and 35.1% of those aged five and over were at school or in full-time study, against 20.4% across England. The city\'s Radcliffe Meteorological Station holds the longest single-site weather records in the United Kingdom, and the University set up its Computing Laboratory in 1957. Modern Age Coders runs live online lessons for Oxford learners aged six to sixty-seven, in a class of five to ten matched by level or with a teacher for one, at times fixed in UK hours by teachers working from India. Your first lesson costs nothing. After that, USD 100 a month pays for a group place and USD 150 a month for private teaching.',
  lead: 'Does rain remember yesterday? Few places can answer that as well as Oxford, because the Radcliffe Meteorological Station, in the garden of Green Templeton College off Woodstock Road, has recorded daily rainfall since January 1827. From 1853, before which the University\'s geographers warn that some daily values may be totals for several days, to the end of 2025 there are 63,187 days, and on 19,763 of them at least a millimetre of rain fell. That is 31.3% of days. Yet after a wet day the next was wet 49.4% of the time, and after a dry day only 23.0%. Rain roughly doubles the chance of more rain tomorrow. A model built from those two numbers alone, called a Markov chain, reproduces the long-run share of wet days. Then it gets two things wrong, and finding them is the most valuable part of the lesson for our Oxford teenagers.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Oxford.',

  picks: {
    eyebrow: 'Course picks for Oxford',
    h2: 'Four courses for a city of records',
    intro: 'Pick by what the learner enjoys. Each course opens with a free live lesson, booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Puzzles, patterns and first programs, with random-number games that show how chance behaves.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first line to full projects; the Oxford rain chain makes a natural project once loops and lists are secure.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'For teenagers who already know basic Python: pandas, real datasets and honest charts, the right tools for counting what follows what.' },
      { course: 'statistics-probability-maths-course', band: 'University and adult', note: 'Conditional probability, independence and Bayes\' theorem worked through properly, the mathematics a Markov chain rests on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Oxford today',
      h2: 'A young city in its late teens and twenties',
      intro: 'From the 2021 Census tables for the Oxford local authority district, published by the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Oxford district, Census 2021', head: ['Measure', 'Oxford', 'England share'], rows: [
          ['Usual residents', '162,040', 'Not compared'],
          ['Living in households', '140,818', 'Not compared'],
          ['Living in communal establishments', '21,222, 13.1%', 'Not compared'],
          ['Aged 5 to 9', '7,852, 4.8%', '5.9%'],
          ['Aged 15 to 19', '15,874, 9.8%', '5.7%'],
          ['Aged 20 to 24', '21,992, 13.6%', '6.0%'],
          ['Schoolchildren and full-time students, of 154,903 aged five and over', '54,356, 35.1%', '20.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'More than a third studying', p: 'In 2021, 35.1% of Oxford residents aged five and over were schoolchildren or full-time students, well above England\'s 20.4%.' },
          { h3: 'Halls and colleges', p: 'Some 21,222 residents, 13.1% of the total, lived in communal establishments, a Census category that includes student halls and college rooms.' },
          { h3: 'Fewer young children', p: 'Children aged 5 to 9 made up 4.8% of residents against 5.9% nationally, while 15 to 19 year olds were 9.8% against 5.7%.' }
        ] },
        { kind: 'p', text: 'For a family with a young child, that last contrast has a practical side: a local class for one narrow age and level can be hard to fill. Our groups are formed online from learners across the UK and beyond, so a seven-year-old in Marston can join five to ten others at exactly the same stage, and a teenager in Headington can move on to real data work as soon as they are ready.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Records and computing',
      h2: 'Two centuries of weather, seven decades of computing',
      intro: 'From the University of Oxford, its School of Geography and the Environment, and its Department of Computer Science.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '14 November 1813', p: 'The School of Geography and the Environment says observations at the Radcliffe Observatory recommenced on this date and have continued, with only very minor interruptions, ever since. Daily rainfall follows from January 1827 and sunshine from February 1880.' },
          { h3: 'The longest in the UK', p: 'The School calls these the longest single-site weather records in the United Kingdom. They are kept in the garden of Green Templeton College, beside the Radcliffe Observatory and its 33-metre octagonal tower.' },
          { h3: '1957', p: 'The Department of Computer Science records that the Oxford University Computing Laboratory was set up that year under Leslie Fox, running a mainframe for the wider University and working at first almost entirely on numerical analysis.' }
        ] },
        { kind: 'p', text: 'In 1960 Joan Walsh became the laboratory\'s first woman to be awarded a DPhil, and in 1965 the Programming Research Group was founded under Christopher Strachey, broadening the laboratory\'s scope well beyond numerical analysis. It took the name Department of Computer Science in 2011. The University says teaching existed in Oxford in some form in 1096, and its facts and figures page, which gives no date for the count, reports more than 26,000 students, including 12,460 undergraduates and 13,755 postgraduates. The same page says there are usually around 3,300 undergraduate places, and that over 23,000 people applied to start in 2024. We have no connection with the University. Its story matters here because it shows careful measurement and computing growing up side by side in one city.' },
        { kind: 'spec', title: 'Documented from the start', p: 'The School stresses that the station\'s instruments and their exposure have been fully documented throughout. That is what lets a learner use 173 years in one model with open eyes: readings before 1972, for example, were taken in inches and have been converted to millimetres, and the notes say so rather than leaving it to be discovered.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Two probabilities, 173 years of Oxford rain',
      intro: 'A Markov chain predicts tomorrow from today and nothing earlier. We built one from the Radcliffe station\'s daily rainfall, counting a day as wet when at least 1.0 millimetre fell.',
      body: [
        { kind: 'table', caption: 'What followed each day at the Radcliffe station, 1 January 1853 to 31 December 2025', head: ['Today', 'Next day wet', 'Next day dry', 'Chance the next day is wet'], rows: [
          ['Wet', '9,766', '9,997', '49.4%'],
          ['Dry', '9,997', '33,426', '23.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count the pairs', p: 'Walk through the 63,187 days once, tallying each pair of neighbours: wet then wet, wet then dry, dry then wet, dry then dry. Those four counts fill the table.' },
          { h3: '2. Turn counts into odds', p: 'Divide along each row. After a wet day, 49.4% of next days were wet; after a dry one, 23.0%. Those two numbers are the whole model.' },
          { h3: '3. Let it run', p: 'Start anywhere and roll a weighted die for each new day. Within a few steps the chain settles at wet 31.3% of the time, the same share as the real record.' }
        ] },
        { kind: 'callout', h3: 'Where the chain forgets too quickly', p: 'The model says memory fades fast. Three days after a wet day it gives rain a 32.5% chance, almost back to the everyday 31.3%, but the real record shows 39.5%. A week on, the chain has forgotten entirely while Oxford still shows 34.6%. Wet weather here arrives in spells that outlast a one-day memory, and a learner who checked only the next-day odds would never find out.' },
        { kind: 'p', text: 'Whole years expose a second gap. Across the 173 years, a year held 114.2 wet days on average, from 79 in 1921 to 150 in 1872, with a standard deviation of 14.7 days. We simulated 34,600 years with the chain and matched that average, but with a spread of only 11.6 days; a memoryless coin gave 8.8. The chain is a clear improvement on the coin and still makes Oxford\'s years look more alike than they really are. Good modelling means reporting both halves of that sentence.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Testing a model of chance',
      h2: 'Five checks before trusting a probability model',
      intro: 'Learned on rain, used afterwards on predictive text, queues at a help desk, games of chance and any sequence where the next step depends on the last.',
      body: [
        { kind: 'table', caption: 'How to test a Markov chain against its data', head: ['Check', 'What it looks like', 'What it prevents'], rows: [
          ['Count pairs, not just days', 'Tally what follows each wet day and each dry day, not only how many days were wet', 'A model that treats every day as a separate coin toss'],
          ['Know which checks are free', 'Notice that wet-to-dry and dry-to-wet counts can differ by at most one, so matching the long-run share proves little', 'Mistaking arithmetic for evidence'],
          ['Test beyond the fit', 'Compare the model with the record two, three and seven days ahead, which it was not built from', 'Trusting a model only on the numbers it was tuned to'],
          ['Compare spread, not only averages', 'Simulate thousands of years and compare how much wet-day counts vary', 'A model right on average and wrong about unusual years'],
          ['Read the data notes', 'Start in 1853, because earlier daily values may cover several days', 'A three-day total counted as one wet day']
        ] },
        { kind: 'p', text: 'The second check explains a result that looks too good in the project: both middle counts are exactly 9,997, because every wet spell that begins must end, and the record happens to start and finish on dry days. Seasons are the natural next experiment. In winter a wet day was followed by another 52.0% of the time; in summer, 46.2%. A single year-round chain blurs that difference, and building one chain per season is the obvious improvement to try.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Spinner and coin games in blocks, a tally chart of what came up, and the surprise that a fair coin has no memory.' },
          { h3: 'Teenagers', p: 'The Radcliffe file read in Python, the four pair counts found, a chain simulated for thousands of years and tested at longer lags.' },
          { h3: 'Adults', p: 'Sequence models for demand, risk or customer behaviour, checked on data they were not fitted to.' }
        ] },
        { kind: 'p', text: 'We are not connected with the University of Oxford, its School of Geography and the Environment or its Department of Computer Science. The Radcliffe daily dataset is published by the School; the pair counts, the chain and the simulations are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a coin toss to a chain you can test',
    intro: 'Ages are only a starting point; the free lesson decides the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Chance games', p: 'Spinners, dice and coin tosses, counting what turns up and noticing that a fair coin has no memory.', courses: ['mental-maths-mastery-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'What follows what', p: 'Tallying pairs in a table, turning counts into fractions and percentages, and writing the first loop that does the tallying.', courses: ['maths-through-coding', 'comprehensive-middle-school-mathematics-mastery'] },
      { band: 'Ages 14 to 18', h3: 'Markov chains in Python', p: 'A transition table built from real data, years simulated from it and the model tested at longer lags.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Sequence models at work', p: 'Conditional probability, simulation and model checking for anyone who forecasts demand, risk or behaviour.', courses: ['statistics-probability-maths-course', 'data-analytics-mathematics-masterclass'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Any chatbot will guess tomorrow\'s weather. Why should an Oxford teenager build a Markov chain?',
    intro: 'Because the chain shows exactly where a simple prediction stops being right.',
    p1: 'A Markov chain is the plainest form of an idea that runs through modern AI: predict what comes next from what came just before. Predictive text on a phone works in that spirit, and so, at vastly greater scale and with far longer memory, do the language models behind today\'s assistants. Building a two-state chain from Oxford rain teaches the heart of that idea with numbers a learner can check by hand.',
    p2: 'It also teaches the limit. Our chain matched the long-run share of wet days and the next-day odds, because it was built from them, yet it forgot wet spells too quickly and made years look more alike than they are. An assistant asked about Oxford rain will produce confident numbers. A learner who has tested a model at longer lags and against year-to-year spread knows which of those numbers deserve trust.',
    closer: 'So an Oxford teenager should still learn to program in 2026, in the city that keeps the longest single-site weather record in the country: predictions are everywhere now, and the ability to test one is what makes a programmer worth listening to.',
    blogAnchor: 'whether learning to code is still worth it in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Headington, Cowley or Summertown, with no journey at all',
    intro: 'Even a short journey across Oxford costs time; a live online lesson takes it out of the week altogether.',
    cells: [
      { h3: 'No trip across the city', p: 'A learner in Wolvercote and another in Littlemore can sit the same lesson from their own rooms, with no bus through the centre at rush hour.' },
      { h3: 'School stages as England names them', p: 'We use Reception, Key Stages 1 to 4, Year 9 options, GCSEs and A levels, as Oxford schools do, and every lesson is taught in English.' },
      { h3: 'A first lesson that counts', p: 'The free session is real teaching on a real task. It ends with an honest view of level, a suggested course and a proposed weekly time, and no card details are asked for.' },
      { h3: 'Matched on ability', p: 'Groups of five to ten learners at one level, gathered from Oxford, the rest of the UK and other countries, which is how every level finds a time that works.' },
      { h3: 'Twice a week, same slot', p: 'Lessons run twice weekly at a fixed time, around eight a month, with breaks for holidays and exams arranged with the teacher.' },
      { h3: 'Teachers in India', p: 'India Standard Time never moves, so Oxford sits four and a half hours behind our teachers in British Summer Time and five and a half behind in winter, which puts after-school and evening lessons inside their working day.' }
    ],
    spec: { title: 'Pauses agreed in advance', p: 'A learner who is also at university can pause over vacations or exams and pick up again at the same level, as long as the dates are agreed with the teacher first. Schoolchildren do the same around GCSEs, A levels and family holidays.' }
  },

  fees: {
    h2: 'Oxford class fees',
    intro: 'Three prices, and nothing to add to them.',
    first: 'One complete lesson, free, after which you receive a level, a course suggestion and a weekly time.',
    group: 'A month of live teaching, normally eight lessons, with five to ten learners working at one level.',
    private: 'The same eight or so lessons a month, taught to one learner alone.',
    closer: 'Everyone outside India pays one US dollar rate, so a family in Marston and a family in Wolvercote pay exactly the same, and we publish no prices in pounds. Billing begins only after the free lesson has fixed a course and a slot; the pricing page sets out how pauses, missed lessons and switches between group and private teaching work.'
  },

  reviewsH2: 'Straight from Google: six family reviews, no edits',

  book: {
    h2: 'Arrange a free lesson for an Oxford learner',
    intro: 'The first task fits the learner: a spinner game for a young child, a first Python program that tallies coin tosses, or the Radcliffe rain record and a two-state chain for a teenager ready to model real data.',
    success: 'Thank you. Our team will be in touch shortly to arrange an Oxford lesson.'
  },

  faq: {
    h2: 'Oxford coding class questions',
    intro: 'The questions Oxford families ask us most.',
    items: [
      { q: 'How many people live in Oxford?', a: 'The 2021 Census counted 162,040 usual residents in the Oxford district. Of these, 140,818 lived in households and 21,222, or 13.1%, in communal establishments such as student halls.' },
      { q: 'How many Oxford residents are students?', a: 'In 2021, 54,356 of the 154,903 residents aged five and over were schoolchildren or full-time students, 35.1% against 20.4% in England. The University of Oxford\'s facts and figures page reports more than 26,000 students, including 12,460 undergraduates and 13,755 postgraduates, without giving a date for the count.' },
      { q: 'What is the Radcliffe Meteorological Station?', a: 'A weather station run by the University\'s School of Geography and the Environment in the garden of Green Templeton College. The School describes its records, with daily temperature from 1813 and daily rainfall from 1827, as the longest single-site weather records in the UK. We are not connected with the University.' },
      { q: 'What does the Markov chain project involve?', a: 'Learners read 63,187 days of Radcliffe rainfall from 1853 to 2025, count what follows each wet and dry day, build a two-state chain from the results and then test it at longer lags and against the spread of real years.' },
      { q: 'Does rain in Oxford make rain more likely the next day?', a: 'In the Radcliffe record, yes: a wet day was followed by another 49.4% of the time, against 23.0% after a dry day. Three days later the effect is weaker but still clear, at 39.5% against an everyday 31.3%.' },
      { q: 'When did computing start at the University of Oxford?', a: 'The Department of Computer Science dates itself to the Oxford University Computing Laboratory, set up in 1957 under Leslie Fox. The Programming Research Group followed in 1965 under Christopher Strachey, and the laboratory became the Department of Computer Science in 2011.' },
      { q: 'What time are lessons for Oxford learners?', a: 'Slots run after school, in the evening and at weekends, fixed in UK time at the free lesson. Our teachers work four and a half hours ahead of Oxford in summer and five and a half in winter, which suits those hours well.' },
      { q: 'Does Modern Age Coders have a centre in Oxford?', a: 'No. There is no Oxford centre and no UK premises; every lesson is taught live online. A learner needs a computer with audio and a steady internet connection. Our phone number is Indian.', boiler: true },
      { q: 'What do Oxford lessons cost?', a: 'Nothing for the first lesson. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same pattern costs USD 150 a month. We agree the course, format and time before any payment.', boiler: true },
      { q: 'How do you put Oxford learners into groups?', a: 'By ability, pace and goals rather than age or postcode, with five to ten learners at one level in each group. If no group meets at a suitable time, we suggest one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'More UK cities and the national guide',
    html: 'Cambridge answers Oxford with EDSAC and a heap that ranks its warmest months on the <a class="cg-inline-link" href="/best-coding-class-in-cambridge">Cambridge page</a>. <a class="cg-inline-link" href="/best-coding-class-in-milton-keynes">Milton Keynes</a> has Colossus and a map estimated from random points, and <a class="cg-inline-link" href="/best-coding-class-in-london">London</a> has a guide of its own. School stages across England are explained in the <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links to every UK page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Oxford and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-cambridge', label: 'Cambridge' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-oxf .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.4vw, 2.9rem); }
.cg-root.cg-oxf .cg-hero h1 { font-weight: 600; letter-spacing: -0.018em; line-height: 1.1; }
.cg-root.cg-oxf .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-oxf .cg-eyebrow { letter-spacing: 0.16em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-oxf .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.01em; }
.cg-root.cg-oxf .cg-grid-3 { gap: clamp(1.1rem, 2.4vw, 2rem); }
.cg-root.cg-oxf .cg-table th { letter-spacing: 0.02em; }
.cg-root.cg-oxf .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-oxf .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-oxf .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Oxford, Census 2021 via Nomis: TS001 Oxford local authority district (E07000178) 162,040 usual residents, 140,818 in households, 21,222 in communal establishments (13.1 percent); TS007A 7,852 aged 5 to 9 (4.8 percent), 15,874 aged 15 to 19 (9.8 percent), 21,992 aged 20 to 24 (13.6 percent), against England 5.9, 5.7 and 6.0 percent; TS068 54,356 schoolchildren and full-time students of 154,903 residents aged 5 and over, 35.1 percent, against 20.4 percent in England. University of Oxford, Facts and figures: more than 26,000 students including 12,460 undergraduates and 13,755 postgraduates; around 3,300 undergraduate places and over 23,000 applicants to start in 2024. University history: teaching existed in Oxford in some form in 1096. School of Geography and the Environment, Radcliffe Meteorological Station: records commenced 1772, unbroken daily air temperature from November 1813 (recommenced 14 November 1813), daily rainfall from January 1827, sunshine from February 1880, the longest single-site weather records in the United Kingdom, garden of Green Templeton College, octagonal tower 33 m high, instruments and exposure fully documented, pre-1972 rainfall converted from inches, daily values before 1853 may be multi-day accumulations. Department of Computer Science, Our history: OUCL set up in 1957 under Leslie Fox; Joan Walsh first OUCL woman awarded a DPhil in 1960; Programming Research Group founded in 1965 under Christopher Strachey; became the Department of Computer Science in 2011.',
    localProject: 'Does rain remember yesterday? Radcliffe Meteorological Station daily dataset (file daily-data-to-Dec-2025), read 21 September 2026, the file\'s Wet day (1.0 mm or more) flag, 1 January 1853 to 31 December 2025: 63,187 days, no blank flags, 19,763 wet (31.3 percent). Pair counts wet-wet 9,766, wet-dry 9,997, dry-wet 9,997, dry-dry 33,426; P(wet after wet) 49.4 percent, P(wet after dry) 23.0 percent; stationary share 31.3 percent (equal to observed by construction). Lags after a wet day, observed against chain: 2 days 42.8/36.1, 3 days 39.5/32.5, 5 days 36.7/31.4, 7 days 34.6/31.3. Annual wet days over 173 years: mean 114.2, sd 14.7, min 79 (1921), max 150 (1872); 34,600 chain-simulated years sd 11.6; memoryless coin sd 8.8. Winter P(W|W) 52.0 percent, summer 46.2 percent. Lesson family: Markov chains (transition counts, stationary distribution, out-of-fit tests at longer lags and on spread); distinct from run-length encoding, moving averages and bootstrap.',
    requiredMentions: [
      '162,040',
      '140,818',
      '21,222',
      '21,992',
      '54,356',
      '154,903',
      '63,187',
      '19,763',
      'Radcliffe Meteorological Station',
      'Green Templeton',
      'Leslie Fox',
      'Programming Research Group'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Oxford: 162,040 usual residents; 140,818 in households; 21,222 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000178' },
      { claim: 'Nomis, Census 2021 TS007A: Oxford and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000178,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Oxford 54,356 students of 154,903 aged 5 and over (35.1 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000178,E92000001' },
      { claim: 'School of Geography and the Environment, Radcliffe Meteorological Station: longest single-site records in the UK, Green Templeton College, dates of the daily series.', url: 'https://www.geog.ox.ac.uk/research/climate/rms/' },
      { claim: 'School of Geography and the Environment, Overview and brief history: 14 November 1813, the 33 m octagonal tower, documented instruments.', url: 'https://www.geog.ox.ac.uk/research/climate/rms/intro.html' },
      { claim: 'School of Geography and the Environment, Daily data: caution before 1853, pre-1972 rainfall converted from inches, the daily dataset to December 2025.', url: 'https://www.geog.ox.ac.uk/research/climate/rms/daily-data.html' },
      { claim: 'University of Oxford, Facts and figures: more than 26,000 students, 12,460 undergraduates, 13,755 postgraduates, around 3,300 places and over 23,000 applicants in 2024.', url: 'https://www.ox.ac.uk/about/facts-and-figures' },
      { claim: 'University of Oxford, History: teaching existed in Oxford in some form in 1096.', url: 'https://www.ox.ac.uk/about/organisation/history' },
      { claim: 'Department of Computer Science, Our history: OUCL 1957 under Leslie Fox, Joan Walsh 1960, Programming Research Group 1965 under Christopher Strachey, renamed 2011.', url: 'https://www.cs.ox.ac.uk/aboutus/cshistory.html' }
    ],
    rejectedClaims: [
      'Ada Lovelace papers at the Bodleian: not read from a primary page for this build, so not stated.',
      'Met Office monthly Oxford file: read, but not used, so the page rests on one documented daily source.',
      'Oxford Brookes University facts: not needed, and none claimed.',
      'That the chain forecasts Oxford weather: the page presents it as a model to test, not a forecast.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the University of Oxford, its School of Geography and the Environment or its Department of Computer Science.'
    ]
  }
};
