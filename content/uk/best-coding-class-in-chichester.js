'use strict';
// Chichester (cg- city page, UK cluster Phase 4). Spine: is the River Lavant flowing more often? A Mann-Kendall trend
// test on the number of days with flow in each water year at the Environment Agency's Graylingwell gauge (EA Hydrology
// API, station adb38d87, daily mean flow, qualified; 16,561 daily values from 30 April 1981 to 21 September 2026, 20
// missing; read 23 September 2026; scratchpad chi/mk.py, mk2.py, mk3.py). Water years October to September, 1982 to
// 2025 (44 years; 2024 has 363 of 366 days, counted as recorded; 1981 and 2026 incomplete, left out). A flowing day is a
// day with daily mean flow above zero. Zero-flow water years: 1989, 1996, 1997. Most flowing days: 2024 (337), 1994
// (316), 2025 (304). Mean flowing days: first 22 years 184.3, last 22 years 218.3. Mann-Kendall S 221, Z 2.23, p 0.026;
// lag-1 autocorrelation 0.390; permutation p (single years) 0.026, (blocks of three years) 0.040; without 2024 (43
// years) p 0.061; leaving out the 19 years with 30 or more estimated days (25 years) p 0.055. Threshold 0.01 cubic
// metres a second (10 litres a second): S 64, Z 0.64, p 0.52, block permutation 0.54; means 163.3 and 178.4; threshold
// 0.05: p 0.55. Flowing days with flow above zero but at most 0.01: 1,340 of 8,857. Quality flags by decade: 1980s 1,408
// estimated of 3,168 days; 1990s 1,407 of 3,652; 2000s 180 estimated; 2010s 65 estimated and 883 unchecked; 2020s 706
// unchecked.
// Lesson family: Mann-Kendall trend test (rank-based, ties corrected), autocorrelation and block permutation,
// sensitivity of a trend to its definition. Screened 23 September 2026: Mann-Kendall 0 hits in src/pages and content/uk;
// distinct from Winchester baseflow filter and Lancaster permutation test (which tested a difference, not a trend).
// Heritage read raw 23 September 2026 from the Victoria County History, Sussex vol. 3 (british-history.ac.uk): Stane
// Street, the Roman road from London, enters Chichester from the north-east by the East Gate; the walls and gates are
// Roman in origin, the line of the wall unchanged since the Romano-British period; in the 12th century the dean had a
// licence for a postern gate to reach land between the wall and the River Lavant; no ditch round the church's part of
// the city save the stream of the Lavant; the fall of the spire in 1861, rebuilt by Sir Gilbert Scott on the original
// lines from drawings made by Joseph Butler (1847-8); the Market Cross. NHLE: The Cathedral Church of the Holy Trinity
// and Cloisters 1354261 and The Market Cross 1026826, Grade I, listed 5 July 1950; City Walls 1354262, Grade I, listed 8
// October 1971; Chapel at Graylingwell Hospital 1415725, Grade II.
// Census 2021 via Nomis: Chichester district E07000225 124,068 usual residents, 120,153 in households, 3,915 communal;
// 20,789 students of 118,757 aged 5 and over (17.5 percent); 157.8 per square km; 5,089 aged 85 and over of 124,069 (4.1
// percent). MSOAs (House of Commons Library names): College Lane and Oaklands E02006568 12,300, 534 communal, 2,823
// students of 11,658 (24.2 percent), 3,696.1 per square km, 1,362 aged 20 to 24 of 12,300 (11.1 percent); Central
// Chichester E02006570 8,907, 1,636 of 8,574 (19.1 percent), 3,767.4, 410 aged 85 and over of 8,908 (4.6 percent);
// Stockbridge and Fishbourne E02006571 8,515, 1,536 of 8,141 (18.9 percent), 496.8. England 20.4 percent, 433.5, 2.4
// percent aged 85 and over. Places in OS Open Names (SU80): Summersdale, Whyke, Portfield, Donnington, Apuldram,
// Westhampnett, Fishbourne, East Lavant, Mid Lavant.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'CHICHESTER', blurb: 'The walled Roman city on the Lavant, with a project that asks whether its winter river really flows more often than it used to.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-chichester',
  code: 'chi',
  accent: '#38753C',
  accentRationale: 'Chichester: a chalk-stream green for a page about the River Lavant, from the solver (4.51:1 on every paper tint, dE 7.1 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Chichester',
    eyebrow: 'Chichester, West Sussex',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'West Sussex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Chichester',
  title: 'Best Coding Classes in Chichester | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Chichester learners aged 6 to 67, from Summersdale and Whyke to Fishbourne. The first lesson costs nothing.',
  ogDescription: 'Coding and AI lessons for Chichester, on a page that runs a Mann-Kendall trend test on 44 years of the River Lavant and finds the answer depends on what counts as flowing.',
  twitterDescription: 'Chichester learners aged six to sixty-seven can study coding, Python, maths and AI with us in live online lessons, beginning with a free one.',
  ogImageCourse: 'statistics-probability-maths-course',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Chichester Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, statistics and data analysis, mathematics and AI taught live online in English to Chichester children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Chichester',
  capsuleQ: 'What are the best coding classes in Chichester?',
  capsule: 'Chichester district had 124,068 usual residents at the 2021 census, and in the College Lane and Oaklands area 24.2% of residents aged five and over were students. The Victoria County History describes the city walls as Roman in origin. Anyone from six to sixty-seven in Chichester can learn with us: a teacher based in India leads each class over a video call, either privately or with five to ten learners at one level, scheduled around English school days and working hours. Lesson one is free of charge; after that, USD 100 a month buys a group place and USD 150 a month buys one-to-one teaching.',
  lead: 'The River Lavant runs past Chichester\'s walls, but not always: at the Environment Agency\'s Graylingwell gauge, just north of the city, the daily record shows no flow at all through the whole of three water years, although 1,003 of those 1,096 days are flagged as estimated. Our Chichester project asks whether the river now flows on more days than it did in the 1980s. Teenagers count the days with flow in each year from October to September, 44 years from 1982 to 2025, then apply the Mann-Kendall test, which asks whether later years tend to be higher than earlier ones. Counting any flow at all, the answer looks like yes. Counting only flow above 10 litres a second, the trend disappears.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Chichester.',

  picks: {
    eyebrow: 'Course picks for Chichester',
    h2: 'Four courses for the city by the Lavant',
    intro: 'Begin with the course that fits the learner\'s interests today. All four start with a free live lesson, booked without handing over any card details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, from animations to simple games that keep a tally and draw a bar chart.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to full projects, enough to download 45 years of river readings and test them for a trend.' },
      { course: 'statistics-probability-maths-course', band: 'Ages 14 to 18', note: 'Statistics and probability built up from ranks, averages and chance, including how to tell a trend from ordinary ups and downs.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Data analysis for adults who report on trends at work and need to know when a rising line is real and when it is not.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Chichester today',
      h2: 'A walled centre and the areas around it',
      intro: 'Counts below are 2021 census results from the Office for National Statistics, as published on Nomis, for three middle-layer areas the House of Commons Library names College Lane and Oaklands, Central Chichester, and Stockbridge and Fishbourne, with the district and England alongside.',
      body: [
        { kind: 'table', caption: 'Chichester, Census 2021', head: ['Area', 'Usual residents', 'Students among those aged 5 and over', 'Residents per square kilometre'], rows: [
          ['College Lane and Oaklands', '12,300', '24.2%', '3,696.1'],
          ['Central Chichester', '8,907', '19.1%', '3,767.4'],
          ['Stockbridge and Fishbourne', '8,515', '18.9%', '496.8'],
          ['Chichester district', '124,068', '17.5%', '157.8'],
          ['England', '56,490,048', '20.4%', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Young adults', p: 'In College Lane and Oaklands, 1,362 residents were aged 20 to 24, 11.1% of its age table, and 534 people lived in communal establishments.' },
          { h3: 'Inside the walls', p: 'Central Chichester is the most closely packed area, at 3,767.4 residents per square kilometre, and 4.6% of its residents were aged 85 or over.' },
          { h3: 'Across the district', p: 'The wider district, reaching from Selsey to Midhurst, had 120,153 people in households and 4.1% of residents aged 85 or over, against 2.4% in England.' }
        ] },
        { kind: 'p', text: 'Every percentage here comes from its own census table, because each table is adjusted separately for privacy and their totals can differ by a few people. Our Chichester classes draw on the city and the villages close by. A Summersdale seven-year-old animating a first story, a Whyke student in Year 12 working through A level Computer Science and a Fishbourne adult learning Python to tidy up spreadsheets would each join a different group, placed by level rather than by age.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Walls, road and river',
      h2: 'A Roman plan still traced by its walls',
      intro: 'From the Victoria County History of Sussex, volume 3, which covers the city of Chichester and its cathedral.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Roman roots', p: 'The county history calls the walls and gates Roman in origin and sees no reason to think the line of the wall has changed since the Romano-British period, though little Roman work now shows.' },
          { h3: 'Stane Street', p: 'The Roman road from London, part of Stane Street, approaches the city from the north-east and enters by the East Gate.' },
          { h3: 'The Lavant as a boundary', p: 'In the 12th century the dean needed a licence to make a gate through the wall to reach his land beside the River Lavant, and the stream served as the church\'s boundary where there was no ditch.' }
        ] },
        { kind: 'p', text: 'The county history also records the fall of the cathedral spire in 1861, and its rebuilding by Sir Gilbert Scott on the original lines, from drawings made by Joseph Butler, architect to the fabric, in 1847 and 1848. In the middle of the city stands the Market Cross, which the history says was designed to stand in a wide open space. We have no connection with Chichester Cathedral or the Victoria County History, and the descriptions here are theirs.' },
        { kind: 'spec', title: 'On the National Heritage List', p: 'Historic England lists the Cathedral Church of the Holy Trinity and Cloisters (list entry 1354261) and the Market Cross (1026826) at Grade I, both listed on 5 July 1950, and the City Walls (1354262) at Grade I, listed on 8 October 1971. Near the river gauge, the Chapel at Graylingwell Hospital (1415725) is listed at Grade II.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Is the Lavant flowing more often?',
      intro: 'The Mann-Kendall test compares every year with every later year and counts how often the later one is higher, minus how often it is lower. That total, S, is large and positive when later years tend to be higher. Because it uses only order, one extreme year cannot dominate it.',
      body: [
        { kind: 'table', caption: 'River Lavant at Graylingwell: days with flow in each water year (October to September), 1982 to 2025, Environment Agency daily mean flow', head: ['What counts as a flowing day', 'Average, first 22 years', 'Average, last 22 years', 'Mann-Kendall S', 'p-value'], rows: [
          ['Any flow above zero', '184.3 days', '218.3 days', '221', '0.026'],
          ['More than 10 litres a second', '163.3 days', '178.4 days', '64', '0.52']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count the days', p: 'Download 16,561 daily mean flows from the Environment Agency and count, for each year from October to September, the days with flow. The record has three years with none at all, 1989, 1996 and 1997, with 1,003 of their 1,096 days flagged as estimated.' },
          { h3: '2. Compare every pair', p: 'For 44 years there are 946 pairs of years. Add one when the later year had more flowing days and subtract one when it had fewer. The result is S.' },
          { h3: '3. Ask about chance', p: 'Work out how big S would usually be if the years came in random order. For any flow, an S this far from zero, in either direction, happens by chance only about 2.6% of the time.' }
        ] },
        { kind: 'callout', h3: 'Why the answer is not simply yes', p: 'Three checks weaken the headline. Wet and dry spells carry over from one year to the next (the correlation between neighbouring years is 0.390), so shuffling the years in blocks of three is fairer, and that gives 0.040. Leaving out 2024, the year with most flow (337 days), moves p to 0.061. And 1,340 of the 8,857 flowing days carried 10 litres a second or less. Raise the bar to that level and S falls to 64, with p of 0.52: no sign of a trend at all. The rise is almost entirely in days of the barest trickle.' },
        { kind: 'p', text: 'That matters because the way the record was kept changed over the years. In the 1980s and 1990s about two days in five are flagged as estimated by the Environment Agency; after 2010 the flags that appear are mostly unchecked instead. Days of near-zero flow are exactly where an estimate and a measurement are most likely to disagree. So the fair conclusion is that the Lavant has not clearly started flowing more often: there are more days with a trace of flow in the recent record, but not more days with real flow. Saying so plainly is part of the method.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Testing for trends',
      h2: 'Five checks before calling a trend',
      intro: 'Learned on the Lavant, then used for sales figures, website visits, exam entries, air quality and any number reported year after year.',
      body: [
        { kind: 'table', caption: 'Decisions behind the Lavant trend test', head: ['Question', 'For the Lavant', 'What goes wrong if you skip it'], rows: [
          ['How is the measure defined?', 'Any flow, and above 10 litres a second', 'A trend that exists only under one definition'],
          ['Are the years independent?', 'Neighbouring years correlate at 0.390, so blocks of three', 'Wet and dry runs mistaken for a trend'],
          ['Does one year decide it?', 'Tested with and without 2024', 'A single flood year carrying the result'],
          ['Did the recording change?', 'Estimated and unchecked flags counted by decade', 'A change in record-keeping read as a change in the river'],
          ['Is every year complete?', '1981 and 2026 left out; 2024 missing three days', 'Part-years counted as whole ones']
        ] },
        { kind: 'p', text: 'The first row is the lesson that stays with learners. The same river, the same years and the same test give p of 0.026 or 0.52 depending on one decision about what counts as flowing. Before believing any trend, ask whether the answer survives a sensible change to its definition, and report both when it does not.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Keeping a tally of rainy days for a month, drawing the bars and deciding what counts as a rainy day before arguing about it.' },
          { h3: 'Teenagers', p: 'Mann-Kendall, autocorrelation and permutation tests in Python on 45 years of Environment Agency river data.' },
          { h3: 'Adults', p: 'Checking whether a reported trend at work survives a change of definition, a missing year or a change in how figures were recorded.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Environment Agency, the Victoria County History, Chichester Cathedral, Historic England or Chichester District Council. The river data and census tables are published openly; the counts, trend tests and permutations on this page are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From tally charts to trend tests',
    intro: 'Use the ages as a rough guide; the free lesson finds the rung a learner is actually on.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting and charting', p: 'Tallies, bar charts and simple rules for what gets counted, in block code the learner builds.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Comparing years', p: 'Averages, ranks and before-and-after comparisons in Python, with a question about what else changed.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Honest trend tests', p: 'Mann-Kendall, permutation tests and sensitivity checks on real Environment Agency records.', courses: ['python-complete-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Ages 18 to 67', h3: 'Trends at work', p: 'Testing whether a rising or falling figure is real, with definitions stated and every check reported.', courses: ['data-analysis-mastery-course-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI will happily draw a trend line. Why should a Chichester teenager learn to doubt one?',
    intro: 'Because the most convincing chart can rest on a definition nobody questioned, and an AI tool will not question it for you.',
    p1: 'Hand an AI assistant the Lavant record and ask whether the river is flowing more often, and it may well say yes, with a neat chart and a p-value of 0.026. Nothing in that answer would be false. It would simply leave out that the trend vanishes above 10 litres a second, because nobody asked.',
    p2: 'A learner who has run the test both ways knows the next question to ask of any trend: what exactly was counted, did the counting change, and does the answer survive a small change of definition? That habit is worth more than any single result.',
    closer: 'So a Chichester teenager should keep learning to code in 2026, beside walls the county history traces back to Roman times: AI can find a pattern in seconds, but people still have to decide whether it is real.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Summersdale, Whyke or Fishbourne, with no journey to class',
    intro: 'Chichester\'s learners live inside and around the walls, in the villages along the Lavant and out towards the harbour. Online, every one of them is the same distance from the lesson.',
    cells: [
      { h3: 'Inside and outside the walls', p: 'A learner in Portfield and another in Donnington can share one class without either of them crossing the city.' },
      { h3: 'Levels that match school', p: 'Families will recognise our stages, which run alongside the English curriculum from primary school to GCSE and A level; all teaching is in English.' },
      { h3: 'The free lesson in practice', p: 'In the opening session the learner builds something real, and the teacher then suggests a starting level, a course and a regular weekly time. There is no card to hand over.' },
      { h3: 'Classes set by level', p: 'Groups of five to ten learners at the same stage, from Chichester, other parts of the UK and abroad, so every level has sensible times.' },
      { h3: 'A weekly routine', p: 'Two fixed lessons a week, roughly eight a month, with half terms and exam weeks arranged with the teacher in advance.' },
      { h3: 'Teaching across time zones', p: 'At 5 pm in Chichester it is 9.30 pm for our teachers in India in summer and 10.30 pm in winter, since India does not put its clocks forward; they fit their evenings around families here.' }
    ],
    spec: { title: 'Across West Sussex', p: 'Learners in Bognor Regis, Selsey, Midhurst or Bosham join exactly the same classes, because every lesson is online and classes are grouped by level.' }
  },

  fees: {
    h2: 'Chichester lesson fees',
    intro: 'The first lesson is free, and after that there is one monthly fee.',
    first: 'A whole lesson free of charge, finishing with our advice on level, course and a weekly slot.',
    group: 'Roughly eight live lessons a month, in a group of five to ten learners at the same stage.',
    private: 'Roughly eight live lessons a month, with a teacher who works with your learner alone.',
    closer: 'Families in Westhampnett or Apuldram are billed in US dollars, as is every family outside India, and our site shows no pound prices. Charges begin only after the free lesson, once you have agreed a course and a weekly slot with us; the pricing page sets out how pauses, missed lessons and moves between group and one-to-one teaching work.'
  },

  reviewsH2: 'Six Google reviews from families, unedited',

  book: {
    h2: 'Book a free lesson for a Chichester learner',
    intro: 'What happens in the first lesson depends on the learner: a rainy-day tally chart for a young child, a short Python program that counts the days above a threshold for a beginner, or 45 years of Lavant flow data and the Mann-Kendall test for a teenager ready for real statistics.',
    success: 'Thank you. We will be in touch shortly to arrange the lesson for your Chichester learner.'
  },

  faq: {
    h2: 'Chichester coding class questions',
    intro: 'Questions Chichester families ask us most often.',
    items: [
      { q: 'How many people live in Chichester?', a: 'Census 2021 counted 124,068 usual residents in Chichester district. The middle-layer areas the House of Commons Library names College Lane and Oaklands, Central Chichester, and Stockbridge and Fishbourne had 12,300, 8,907 and 8,515.' },
      { q: 'How does Chichester compare with England?', a: 'The district is more thinly settled, at 157.8 residents per square kilometre against 433.5, and 4.1% of its residents were aged 85 or over in 2021, against 2.4% in England. In College Lane and Oaklands, 24.2% of residents aged five and over were students.' },
      { q: 'What is the Mann-Kendall test?', a: 'A test for a steady rise or fall over time. It compares every year with every later year, adds one when the later year is higher and subtracts one when it is lower, then asks how likely a total that large would be if the years were in random order.' },
      { q: 'Is the River Lavant flowing more often?', a: 'Counting any flow at all, days with flow rose from an average of 184.3 a year in the first 22 years to 218.3 in the last 22, with a p-value of 0.026. Counting only flow above 10 litres a second, there is no sign of a trend (p of 0.52), so the rise is in days of the barest trickle.' },
      { q: 'Where does the river data come from?', a: 'From the Environment Agency\'s hydrology data service, which publishes daily mean flow for the Lavant at Graylingwell with a quality flag on each day. We are not connected with the Environment Agency.' },
      { q: 'Are Chichester\'s city walls Roman?', a: 'The Victoria County History calls the walls and gates Roman in origin and sees no reason to think the line of the wall has changed since Roman times, though the visible stonework has been refaced many times. Historic England lists the City Walls at Grade I.' },
      { q: 'When do Chichester lessons happen?', a: 'Most Chichester learners take lessons straight after school, later on a weekday or on a Saturday or Sunday morning; the slot is fixed at the end of the free lesson. Our teachers work from India, where clocks read four and a half hours later than West Sussex while British Summer Time lasts and five and a half hours later the rest of the year.' },
      { q: 'Is there a centre in Chichester?', a: 'No. We have no Chichester centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a steady internet connection, and our phone number is Indian.', boiler: true },
      { q: 'What do Chichester lessons cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How do you group learners?', a: 'By level, pace and goals rather than by age or where they live, with five to ten learners at the same stage. When no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The south coast and beyond',
    html: 'Along the coast, the <a class="cg-inline-link" href="/best-coding-class-in-portsmouth">Portsmouth page</a> finds the narrowest point in a road network with max-flow min-cut, and <a class="cg-inline-link" href="/best-coding-class-in-winchester">Winchester</a> separates a chalk river\'s groundwater from its storm flow. <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a> smooths a noisy air-quality record. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> explains how our levels line up with English schooling, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> leads to every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Chichester and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-portsmouth', label: 'Portsmouth' },
    { href: '/best-coding-class-in-winchester', label: 'Winchester' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-chi .cg-hero-grid { align-items: end; gap: clamp(1.05rem, 3.2vw, 2.5rem); }
.cg-root.cg-chi .cg-hero h1 { font-weight: 740; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-chi .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-chi .cg-eyebrow { letter-spacing: 0.14em; font-weight: 680; text-transform: uppercase; }
.cg-root.cg-chi .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.014em; }
.cg-root.cg-chi .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.15rem); }
.cg-root.cg-chi .cg-table th { letter-spacing: 0.028em; }
.cg-root.cg-chi .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-chi .cg-ladder-col { border-top: 3px dotted var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-chi .cg-callout { border-left-width: 5px; border-radius: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Census 2021 via Nomis. Chichester district E07000225: TS001 124,068 usual residents, 120,153 in households, 3,915 communal; TS068 20,789 students of 118,757 aged 5 and over (17.5 percent); TS006 157.8 per square kilometre; TS007A 5,089 aged 85 and over of 124,069 (4.1 percent). College Lane and Oaklands E02006568 12,300, 534 communal, 2,823 of 11,658 students (24.2 percent), 3,696.1, 1,362 aged 20 to 24 of 12,300 (11.1 percent); Central Chichester E02006570 8,907, 1,636 of 8,574 (19.1 percent), 3,767.4, 410 aged 85 and over of 8,908 (4.6 percent); Stockbridge and Fishbourne E02006571 8,515, 1,536 of 8,141 (18.9 percent), 496.8. England 20.4 percent, 433.5, 2.4 percent aged 85 and over. VCH Sussex 3: walls Roman in origin; Stane Street by the East Gate; dean\'s postern to the Lavant; spire fell 1861, rebuilt by Scott from Butler\'s drawings of 1847-8; Market Cross. NHLE 1354261, 1026826 (Grade I, 5 July 1950), 1354262 (Grade I, 8 October 1971), 1415725 (Grade II).',
    localProject: 'Is the Lavant flowing more often? EA Hydrology, Graylingwell daily mean flow, 30 April 1981 to 21 September 2026 (16,561 values). Water years 1982 to 2025 (44). Flowing = daily mean above zero: means 184.3 (first 22 years) and 218.3 (last 22); Mann-Kendall S 221, Z 2.23, p 0.026; lag-1 0.390; block-of-three permutation p 0.040; without 2024 p 0.061; excluding heavily estimated years p 0.055. Above 0.01 cubic metres a second: S 64, p 0.52. 1,340 of 8,857 flowing days at or below 0.01. Zero-flow years 1989, 1996, 1997; most flow 2024 (337 days). Lesson family: Mann-Kendall trend test with sensitivity checks.',
    requiredMentions: [
      '124,068',
      '12,300',
      '3,767.4',
      'Mann-Kendall',
      'Graylingwell',
      'Lavant',
      'Stane Street',
      'Summersdale',
      'Whyke',
      'Portfield',
      'Donnington',
      'Apuldram'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: Chichester district 124,068; College Lane and Oaklands 12,300; Central Chichester 8,907; Stockbridge and Fishbourne 8,515.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E02006568,E02006570,E02006571,E07000225' },
      { claim: 'Nomis, Census 2021 TS007A: age bands for the three areas and the district.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E02006568,E02006570,E02006571,E07000225' },
      { claim: 'Nomis, Census 2021 TS068: students among usual residents aged 5 and over.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E02006568,E02006570,E02006571,E07000225,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E02006568,E02006570,E02006571,E07000225,E92000001' },
      { claim: 'House of Commons Library, MSOA Names: College Lane and Oaklands, Central Chichester, Stockbridge and Fishbourne.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Environment Agency hydrology data, River Lavant at Graylingwell: daily mean flow with quality flags.', url: 'https://environment.data.gov.uk/hydrology/id/measures/adb38d87-5c2a-48f8-8561-af1f497b8087-flow-m-86400-m3s-qualified' },
      { claim: 'Victoria County History, Sussex vol. 3, The City of Chichester: General introduction (walls, Stane Street, the Lavant, Market Cross).', url: 'https://www.british-history.ac.uk/vch/sussex/vol3/pp71-82' },
      { claim: 'Victoria County History, Sussex vol. 3, Chichester cathedral: Historical survey (fall of the spire in 1861; Scott; Butler).', url: 'https://www.british-history.ac.uk/vch/sussex/vol3/pp105-113' },
      { claim: 'Historic England, National Heritage List for England: 1354261, 1026826, 1354262, 1415725.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1354261' },
      { claim: 'Ordnance Survey, OS Open Names: Chichester and nearby places.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-names' }
    ],
    rejectedClaims: [
      'A clear conclusion that the Lavant now flows more often: the trend holds only for days with any flow and vanishes above 10 litres a second, so the page says it has not clearly changed.',
      'A reason for the change in estimated and unchecked flags: not given in a fetched source, so described only as a change in the flags.',
      'The word winterbourne and any claim about groundwater feeding the Lavant: not taken from a fetched source; the page describes only what the gauge recorded.',
      'The cost of rebuilding the spire in 1861: a historical sum in pounds, left out under the site\'s currency rule.',
      'Chichester Cathedral\'s own history page: the likely URLs returned 404; cathedral facts come from the county history and the NHLE.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Environment Agency, the Victoria County History, Chichester Cathedral, Historic England or Chichester District Council.'
    ]
  }
};
