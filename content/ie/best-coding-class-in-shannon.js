'use strict';
// Shannon (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022
// town tables for "Shannon, Co Clare", CSO aviation tables TAM08 (monthly passengers,
// updated 19 August 2026) and TAQ01 (quarterly raw, trend and seasonally adjusted,
// updated 2 September 2026), the CSO release Aviation Statistics Quarter 2 2026 and
// its background notes, the Q1 2026 release, the Shannon Aviation Museum's own site
// and St Patrick's Comprehensive School's own site, read 19 September 2026.
// Spine: seasonality and seasonal adjustment. Raw Shannon passengers Q1 2026 427,655
// to Q2 728,654 (+70.4%); CSO X-13 seasonally adjusted 598,385 to 637,754 (+6.6%);
// our ratio-to-moving-average factors from 2023-2025 give 584,620 to 636,604 (+8.9%);
// same quarter a year earlier +15.0%; twelve months to June 2,123,589 to 2,377,360
// (+12.0%). Dublin raw +32.2% but seasonally adjusted -2.5% over the same quarters.
// Scratchpad air/season.js and air/classic.js. Wicklow owns forecasting and backtests;
// this page adjusts, it does not predict. The Clare county page owns the census-night
// population (10,256), the density, the LEA figures and the Shannon Group quote about
// the airport; none of those are repeated here. Clare library branch page returned
// 403 and shannonairport.ie serves a JavaScript shell with no readable text.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'SHANNON', blurb: 'Airport passengers jump 70 percent every spring. The statistics office calls the same rise 6.6 percent. A page on taking the season out of a number.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-shannon',
  code: 'snn',
  accent: '#27279B',
  accentRationale: 'Shannon: a deep ultramarine from the widened solver search, kept clear of the violet range and apart from the Clare, Ennis and Limerick accents',
  pageType: 'city',
  place: {
    name: 'Shannon',
    eyebrow: 'Shannon, County Clare',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Clare' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-clare', name: 'County Clare' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Clare', href: '/coding-classes-in-county-clare' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Shannon, County Clare, Ireland',
  title: 'Best Coding Class in Shannon, Co Clare | Modern Age Coders',
  description: 'Live online coding, Python, AI and data classes for Shannon learners aged 6 to 67, in small same-level groups or one to one. Your first lesson is free.',
  ogDescription: 'Coding and AI classes for Shannon, with a data project that takes the seasons out of the airport\'s passenger numbers.',
  twitterDescription: 'Live online coding, Python and AI for Shannon, Co Clare, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Shannon',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Shannon, County Clare, taught live in English in groups matched by level or one to one.'
  },

  h1: 'Coding classes in Shannon',
  capsuleQ: 'What is the best coding class in Shannon?',
  capsule: 'Shannon has 10,117 usual residents in 3,877 households, and 3,346 of those homes have broadband, which is all a live lesson needs. A teacher runs each lesson over video as it happens, either for a handful of learners at the same stage or for one learner alone, normally twice a week, for anyone aged six to sixty-seven. The opening lesson is free of charge, and after it the fee is USD 100 monthly in a group or USD 150 monthly on a private basis.',
  lead: 'Between the first three months of 2026 and the next three, the number of passengers handled at Shannon Airport rose from 427,655 to 728,654, a jump of 70.4 percent. The Central Statistics Office, starting from the same counts, puts the rise at 6.6 percent. Both figures are correct. The first sets a winter quarter against a spring one; the second removes the swing that comes round every year before comparing. The airport fills each spring and summer and thins out each autumn, and a learner who can separate that rhythm from real change can read any monthly figure, from shop sales to website visits, without being misled. This page does the separation by hand, then checks the result against the official one.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Shannon.',

  picks: {
    eyebrow: 'Starting courses for Shannon',
    h2: 'Four places to begin in Shannon',
    intro: 'Choose by age and by what the learner enjoys; lesson one, which is free, shows whether the level is right.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks that repeat a pattern, such as a year of four seasons drawn as a loop.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with lists of monthly numbers, averages and a first line chart.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Time series in Python: moving averages, same-month comparisons and seasonal factors.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who report monthly sales, bookings or traffic and must tell a season from a trend.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Take the season out of the airport\'s numbers before calling anything growth',
      intro: 'The same six months of Shannon Airport passengers, measured five ways. Each row names the periods it compares, because a quarterly change and an annual change cannot be set side by side as if they were the same thing.',
      body: [
        { kind: 'table', caption: 'Shannon Airport passengers, change measured five ways', head: ['Method', 'Periods compared', 'Change'], rows: [
          ['Raw count', 'Jan to Mar 2026, then Apr to Jun 2026', '+70.4%'],
          ['CSO adjusted', 'The same two quarters', '+6.6%'],
          ['Our adjustment', 'The same two quarters', '+8.9%'],
          ['Raw, a year apart', 'Apr to Jun 2025, then 2026', '+15.0%'],
          ['Twelve months', 'Year to June 2025, then 2026', '+12.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The shape of a year', p: 'Averaged over 2023 to 2025, August carried 11.3 percent of the airport\'s yearly passengers and February only 5.3 percent. In 2025 the busiest month, August at 254,703, was 2.16 times the quietest, January at 117,909.' },
          { h3: 'Same month, a year earlier', p: 'Setting a month beside the same month a year before removes most of the season with no model at all. Every one of the 18 months from January 2025 to June 2026 was busier than its counterpart twelve months earlier.' },
          { h3: 'Dublin went the other way', p: 'Dublin Airport\'s raw count rose 32.2 percent from the first quarter of 2026 to the second. Seasonally adjusted, it fell 2.5 percent, while Shannon\'s adjusted count rose. The raw numbers made both airports look as if they were growing.' }
        ] },
        { kind: 'callout', h3: 'A season is not news: compare like with like', p: 'The statistics office adjusts each airport separately with X-13-ARIMA, a method built by the U.S. Census Bureau, fitted to monthly counts back to January 2012. Its background notes say the model allows for calendar effects such as the timing of Easter and for outliers and level shifts, and that the seasonal factors are updated every quarter. That last point matters: an adjusted figure for a recent quarter can be revised when the next quarter arrives, and the office leaves its trend column blank for the latest three quarters. A seasonally adjusted number is an estimate with a method behind it, and the method is published so that anyone can check it.' },
        { kind: 'p', text: 'The learner\'s version fits in about forty lines of Python. First it checks the input: the monthly counts from table TAM08, added up by quarter, must match the raw quarters in table TAQ01 exactly, and they do, at 427,655 and 728,654. Then it takes a centred twelve-month moving average, divides each month by it, averages those ratios for each calendar month over 2023, 2024 and 2025, and scales the twelve factors to average one. Dividing each month of 2026 by its factor gives 584,620 for the first quarter and 636,604 for the second. The second quarter lands within 0.2 percent of the office\'s 637,754; the first is 2.3 percent below its 598,385; and so the change comes out at 8.9 percent against 6.6. Close on the level, two points apart on the change, and the gap is the lesson: a fixed average of three years cannot see Easter moving or a new route starting, and X-13 is built to.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why 2020 and 2021 are left out', p: 'In April 2020 Shannon handled 85 passengers, in May 17 and in June 18. Seasonal factors estimated from those months would describe a closure, not a season, so the factors here use 2023 to 2025 only.' },
          { h3: 'Easter moves', p: 'Easter Sunday fell on 31 March in 2024 and in April in 2019, 2023, 2025 and 2026. April passengers were 1.17 times March\'s in 2024 and between 1.28 and 1.36 times in the other four years. One March Easter is an illustration, not proof.' },
          { h3: 'Adjusted, quarter by quarter', p: 'From the second quarter of 2023 to the second quarter of 2026, the office\'s adjusted Shannon count rose in 12 of 13 quarters. Over the same stretch the raw count swung between a fall of 29.9 percent and a rise of 70.4.' }
        ] }
      ]
    },
    {
      id: 'routes', tint: 'tint', eyebrow: 'Where the season lives',
      h2: 'The spring rise is not spread evenly across routes',
      intro: 'The statistics office publishes the ten busiest routes at each main airport every quarter, counting arrivals and departures together. Comparing Shannon\'s first and second quarters of 2026 shows which routes carry the season.',
      body: [
        { kind: 'table', caption: 'Shannon routes in both top-ten lists, 2026', head: ['Route', 'Jan to Mar', 'Apr to Jun', 'Change'], rows: [
          ['London Heathrow', '66,547', '75,434', '+13.4%'],
          ['London Stansted', '46,094', '70,253', '+52.4%'],
          ['London Gatwick', '30,156', '32,661', '+8.3%'],
          ['Manchester', '26,315', '30,263', '+15.0%'],
          ['Boston Logan', '19,850', '33,250', '+67.5%'],
          ['Alicante', '19,409', '28,779', '+48.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Routes that arrive with spring', p: 'New York JFK, Malaga, Faro and Reus are in the April to June top ten but not in January to March\'s. Krakow, Lanzarote, Tenerife Sur and Wroclaw are in the first list and missing from the second.' },
          { h3: 'A steady route', p: 'Heathrow was the busiest route in both quarters and grew 13.4 percent, against 52.4 for Stansted. A steady route and a strongly seasonal one can add up to a total that hides both.' },
          { h3: 'The learner\'s question', p: 'Which routes explain most of the 70.4 percent? Summing the change route by route and sorting it is a short piece of code, and it turns one headline number into a list that can be checked.' }
        ] },
        { kind: 'spec', title: 'What these numbers are not', p: 'A passenger here is a movement through the airport, not a person. The route totals add arrivals to departures, so Heathrow\'s 38,414 arrivals and 37,020 departures make its 75,434, and a return trip is counted twice. The counts cover commercial passengers only, and at Shannon and Dublin they leave out transit passengers on fuel-stop flights. None of these figures describes the people who live in Shannon town or the people who work at the airport.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Shannon in the census',
      h2: 'Who lives in Shannon, by the 2022 count',
      intro: 'Drawn from the Census 2022 small area tables for Shannon, Co Clare, which count residents at the address where they usually live.',
      body: [
        { kind: 'table', caption: 'Shannon in Census 2022', head: ['Census measure', 'Count'], rows: [
          ['Usual residents', '10,117'],
          ['Households', '3,877'],
          ['Households with broadband', '3,346'],
          ['Working residents, travel table', '4,529'],
          ['Journeys to school, college or childcare', '2,543'],
          ['Children under fifteen in childcare', '505'],
          ['Leaving home before 06:30', '387']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Travel to work', p: 'Of 4,529 working residents, 2,636 drive, 545 walk, 383 ride as a car passenger, 297 work mainly at or from home, 150 go by van, 147 by bus and 120 by bicycle. One takes the train.' },
          { h3: 'Travel to school', p: 'Of 2,543 journeys to school, college or childcare, 1,104 are made on foot, 43.4 percent against 28.3 percent across all 867 towns combined, with 866 as a car passenger, 201 by bus and 120 learners driving.' },
          { h3: 'What residents work in', p: 'The industry table, which counts 4,590 at work, puts 1,548 in manufacturing, 33.7 percent against 11.2 percent across all towns combined, and 677 in transport and communications, 14.7 percent against 10.4.' }
        ] },
        { kind: 'p', text: 'Asked about home-working, 1,045 Shannon workers said they do some of it, 3,077 said they never do and 407 gave no answer. The small difference between the 4,529 in the travel table and the 4,590 in the industry table is two census tables counting slightly different groups; neither is an error.' },
        { kind: 'spec', title: 'Two named places', p: 'The Shannon Aviation Museum gives its address as Link Road, Shannon, Smithstown, Co. Clare, V14 PH34, opens Wednesday to Saturday from 10am to 4pm, and runs an aviation camp from age 8 and an academy from 13. St Patrick\'s Comprehensive School gives its address as Shannon, Co. Clare, V14 Y434. Neither has any connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'How Shannon learners are taught',
      intro: 'Most weeks bring a pair of lessons, and the teacher is teaching in real time for the whole of each one.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Shannon\'s census-night age table has 1,033 children between six and twelve. They begin with block code, making patterns that repeat, like a year that loops through its seasons.' },
          { h3: 'Teenagers', p: 'The same table has 859 teenagers of thirteen to eighteen, who are ready for Python, web pages, AI projects and time-series work of the kind on this page.' },
          { h3: 'Adults', p: 'Adults start from whatever they already know, which may be nothing, and the first lesson sets the course.' }
        ] },
        { kind: 'p', text: 'Census and aviation counts are the Central Statistics Office\'s own; the seasonal adjustment by hand is our work, run on 19 September 2026. The museum and the school are quoted from their websites.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From seasons in blocks to seasonal adjustment',
    intro: 'Treat each band as a suggestion, since a learner\'s first lesson shows where they actually belong.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Patterns that repeat', p: 'Block-coded loops that cycle through a pattern, then change one step and watch the whole cycle shift.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Averages over time', p: 'Python that stores twelve monthly numbers, averages them and draws the year as a line.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Time series', p: 'Moving averages, seasonal factors and same-month comparisons on real published data.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Seasonal reporting', p: 'Monthly figures at work, reported with the season named and the comparison period stated.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant whether the airport is growing',
    intro: 'Give it two quarters of raw counts and it will usually say yes, by a lot.',
    p1: 'An AI assistant handed Shannon\'s first and second quarters will often compute the 70.4 percent rise and describe it as strong growth, perhaps with reasons. The arithmetic is right and the conclusion is not, because most of that rise happens every year. The same assistant, given Dublin\'s raw figures, would report growth there too, where the adjusted count fell.',
    p2: 'With the adjustment written, the learner puts three questions to the assistant: which periods are being compared, whether the figures are raw or seasonally adjusted, and what the same quarter a year earlier shows. Those questions turn a confident sentence into a checkable one.',
    closer: 'Working out a percentage change takes one line of code. Knowing whether the season caused it is the skill.',
    blogAnchor: 'why learning to code still pays its way'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Shannon',
    intro: 'The practical side.',
    cells: [
      { h3: 'Taught as it happens', p: 'No recordings stand in for the teacher, who talks each learner through their own code while the lesson is on.' },
      { h3: 'Matched groups', p: 'A group holds five to ten learners at one stage, drawn from Shannon, the rest of Ireland and further away.' },
      { h3: 'Two sessions weekly', p: 'About eight lessons in a month, at times fixed when the course begins.' },
      { h3: 'Around term dates', p: 'Holiday breaks, mid-terms and exam periods go into the course plan at the outset.' },
      { h3: 'What to have ready', p: 'A laptop or desktop computer, a microphone and headphones or speakers, and broadband that holds a video call.' },
      { h3: 'Alone with a teacher', p: 'Private lessons suit a learner who is well ahead, wants a slower pace, or is free only when no group meets.' }
    ],
    spec: { title: 'Online only', p: 'Shannon learners take every lesson over video. We have no building in Shannon, in Clare or anywhere in Ireland, and nothing about a lesson depends on where the learner lives.' }
  },

  fees: {
    h2: 'What Shannon families pay',
    intro: 'The whole list.',
    first: 'The first lesson, level check included, at no cost.',
    group: 'One month in a same-stage group of five to ten, roughly eight live lessons.',
    private: 'One month of private lessons at the same rhythm.',
    closer: 'Outside India the fee is the same in US dollars wherever a family lives. The free lesson carries no obligation, billing begins with the course itself, and holidays, missed lessons and switching between a group and private teaching are all covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from six families we teach, word for word',

  book: {
    h2: 'Book a free first lesson in Shannon',
    intro: 'Let us know how old the learner is and what holds their attention, and the first hour is shaped to suit. It could end with a game, a first working program, or the airport\'s year charted with the season removed.',
    success: 'Thank you. We will contact you shortly to arrange the lesson.'
  },

  faq: {
    h2: 'Shannon coding class questions',
    intro: 'Questions Shannon families tend to ask.',
    items: [
      { q: 'How many people live in Shannon?', a: 'Census 2022 counts 10,117 usual residents in Shannon, Co Clare, living in 3,877 households, of which 3,346 have broadband.' },
      { q: 'What is the data project on this page?', a: 'Seasonal adjustment of Shannon Airport\'s monthly passenger counts. Learners build seasonal factors from 2023 to 2025, adjust the first two quarters of 2026, and compare their answer, a rise of 8.9 percent, with the statistics office\'s 6.6 percent and with the raw 70.4 percent.' },
      { q: 'Is Shannon Airport actually getting busier?', a: 'On the statistics office\'s figures, yes. Its seasonally adjusted count rose in 12 of the 13 quarters from the second quarter of 2023 to the second quarter of 2026, and the twelve months to June 2026 carried 2,377,360 passengers, 12.0 percent more than the twelve months before. A single spring jump says nothing either way.' },
      { q: 'How do Shannon residents get to work?', a: 'Of 4,529 working residents in the travel table, 2,636 drive, 545 walk, 383 travel as a car passenger, 297 work mainly at or from home, 150 go by van and 147 by bus.' },
      { q: 'When are lessons?', a: 'Most run between the end of the school day and mid-evening, with weekend slots as well. Times are set in Irish time; our teachers work from India, four and a half hours ahead of Shannon from late March to late October and five and a half in winter, so we offer only hours that work at both ends.' },
      { q: 'Can adults join?', a: 'Yes. Anyone up to sixty-seven can start, whatever their experience, and after the first lesson an adult picks between a small same-stage group and private lessons.' },
      { q: 'Will classmates be from Shannon?', a: 'Not necessarily. Groups form around level, so classmates could live in Shannon, elsewhere in Ireland or in another country.' },
      { q: 'Is there a Modern Age Coders centre in Shannon?', a: 'No. Every lesson is live on video and we have no premises in Ireland. A learner needs a laptop or desktop, a working microphone and sound, and a steady connection. The phone number on this page is our number in India.', boiler: true },
      { q: 'What do coding classes in Shannon cost?', a: 'The first lesson is free. A group place is USD 100 a month for about eight live lessons, two a week, with five to ten learners; private lessons on the same pattern are USD 150 a month. Nothing is charged until the arrangement is agreed.', boiler: true },
      { q: 'How big are the groups?', a: 'Between five and ten learners, placed by level, pace and aim rather than by age or town. If no group at the right level meets at a workable time, the learner is taught one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Shannon and the estuary',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-county-clare">County Clare</a> page covers the whole county, <a class="cg-inline-link" href="/best-coding-class-in-ennis">Ennis</a> is the county town a short drive north, and <a class="cg-inline-link" href="/best-coding-class-in-limerick">Limerick</a> lies across the estuary, all within <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a>. Learners drawn to the time-series work here can read the <a class="cg-inline-link" href="/data-science-course-ireland">data science course</a> page, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists every county and town page we have.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Shannon, County Clare and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-clare', label: 'County Clare' },
    { href: '/best-coding-class-in-ennis', label: 'Ennis' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-snn .cg-hero-grid { align-items: end; gap: clamp(1.09rem, 3.07vw, 2.48rem); }
.cg-root.cg-snn .cg-hero h1 { font-weight: 650; letter-spacing: -0.0212em; line-height: 1.05; }
.cg-root.cg-snn .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 1.02rem; }
.cg-root.cg-snn .cg-eyebrow { letter-spacing: 0.152em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-snn .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0115em; }
.cg-root.cg-snn .cg-grid-3 { gap: clamp(1.14rem, 2.91vw, 2.22rem); }
.cg-root.cg-snn .cg-table caption { letter-spacing: 0.028em; font-weight: 650; }
.cg-root.cg-snn .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-snn .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-snn .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 1.08rem; }
.cg-root.cg-snn .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Shannon, Co Clare, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 10,117. SAP2022T15T2TOWN22: households 3,877, broadband 3,346, other 63, no internet 252, not stated 216. SAP2022T11T1TOWN22 to work total 4,529: car driver 2,636, on foot 545, car passenger 383, work mainly at or from home 297, van 150, bus 147, bicycle 120, motorcycle 17, other 14, train 1, not stated 219; to school, college or childcare total 2,543: on foot 1,104 (all 867 towns combined 260,527 of 921,076, 28.3 percent), car passenger 866, bus 201, car driver 120, bicycle 86, not stated 143. SAP2022T11T2TOWN22: 387 leave before 06:30. SAP2022T11T4TOWN22: 1,045 work from home at least some of the time, 3,077 never, 407 not stated. SAP2022T11T5TOWN22: 505 children under 15 in childcare. SAP2022T14T1TOWN22 persons at work 4,590: manufacturing 1,548 (all towns 183,909 of 1,644,493, 11.2 percent), transport and communications 677 (171,726, 10.4 percent). SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,033, ages 13 to 18 to 859. CSO TAM08 Passengers handled by main airports, monthly, January 2019 to June 2026, updated 19 August 2026, note "Passenger numbers refer to commercial passengers only": Shannon 2026 Jan 131,514, Feb 127,186, Mar 168,955, Apr 220,714, May 242,836, Jun 265,104; 2025 Jan 117,909 (lowest), Aug 254,703 (highest), ratio 2.16; 2020 Apr 85, May 17, Jun 18; twelve months to June 2025 2,123,589, to June 2026 2,377,360 (+12.0 percent); all 18 months January 2025 to June 2026 above the same month a year earlier; mean share of calendar-year total 2023-2025 August 11.3, February 5.3, January 5.5 percent. CSO TAQ01, updated 2 September 2026, Shannon raw Q1 2026 427,655, Q2 728,654 (+70.4 percent, equal to TAM08 quarter sums); seasonally adjusted Q2 2025 548,780, Q1 2026 598,385, Q2 2026 637,754 (+6.6 percent); adjusted count rose in 12 of 13 quarter-on-quarter changes 2023Q2 to 2026Q2 (only 2023Q4 fell, by 0.2 percent); raw quarter changes ranged from -29.9 to +70.4 percent; trend blank for 2025Q4 to 2026Q2. Dublin raw Q1 2026 7,725,750, Q2 10,215,972 (+32.2 percent); adjusted 9,574,992 to 9,338,373 (-2.5 percent). Our ratio-to-centred-moving-average factors from 2023-2025 (Jan 0.693, Feb 0.662, Mar 0.833, Apr 1.054, May 1.140, Jun 1.237, Jul 1.312, Aug 1.348, Sep 1.108, Oct 1.058, Nov 0.758, Dec 0.797) give Q1 2026 584,620 and Q2 636,604 (+8.9 percent); Q2 raw year on year +15.0 percent. Easter Sunday by the Gregorian computus: 2019-04-21, 2023-04-09, 2024-03-31, 2025-04-20, 2026-04-05; April over March 1.28, 1.36, 1.17, 1.32, 1.31. CSO Aviation Statistics Quarter 2 2026 (2 September 2026): Table 2 Shannon Q2 2025 633,499, Q2 2026 728,654 (+15); Table 9 seasonally adjusted Shannon Q2 2025 548,780, Q1 2026 598,385, Q2 2026 637,754 (+7), Dublin 9,574,992 to 9,338,373 (-2); Table 5C Shannon top ten Q2 2026 London Heathrow arrivals 38,414 departures 37,020 total 75,434, London Stansted 70,253, New York JFK 35,283, Boston Logan 33,250, Malaga 33,141, Faro 32,794, London Gatwick 32,661, Manchester 30,263, Alicante 28,779, Reus 27,928. Aviation Statistics Quarter 1 2026, Table 5C Shannon: Heathrow 66,547, Stansted 46,094, Gatwick 30,156, Krakow 30,125, Manchester 26,315, Lanzarote 22,191, Tenerife Sur 19,961, Boston Logan 19,850, Alicante 19,409, Wroclaw 18,156. Background notes: X-13-ARIMA, models from January 2012, calendar effects such as the timing of Easter, outliers, temporary changes and level shifts, seasonal factors updated each quarter; "passenger numbers for Shannon and Dublin airports exclude transit passengers on technical transit flights as these are fuel stop only flights". Shannon Aviation Museum, own site: "Link Road, Shannon, Smithstown, Co. Clare, V14 PH34", "Museum open Wednesday to Saturday, 10am to 4pm", "Aviation Camp 8+", "Aviation Academy 13+". St Patrick\'s Comprehensive School, own site footer: the school\'s name with Shannon, Co. Clare and the eircode V14 Y434 (the page prints the county as "ClarE").',
    localProject: 'Seasonality and seasonal adjustment. Shannon Airport\'s raw passengers rose 70.4 percent from the first to the second quarter of 2026 (427,655 to 728,654); the statistics office\'s X-13 seasonally adjusted figures show 6.6 percent (598,385 to 637,754). The learner checks that the monthly TAM08 counts sum to the TAQ01 raw quarters, builds seasonal factors by the ratio to a centred twelve-month moving average over 2023-2025, and gets 584,620 and 636,604, a rise of 8.9 percent: close on the second quarter\'s level, 2.3 percent low on the first, two points apart on the change. Same-quarter-a-year-earlier (+15.0 percent) and rolling twelve months (+12.0 percent) are the model-free comparisons. Dublin\'s raw +32.2 percent is -2.5 percent adjusted. Route tables show the season is concentrated: Boston +67.5 and Stansted +52.4 percent between quarters, Heathrow +13.4. Lessons: compare like with like, name the periods, know that recent adjusted figures are revised, and that a passenger is a movement, not a person. New family for the cluster: seasonality and seasonal adjustment (Wicklow owns forecasting and backtests).',
    requiredMentions: [
      '10,117',
      '3,346',
      '4,529',
      '2,636',
      '1,104',
      '1,033',
      '427,655',
      '728,654',
      '598,385',
      '637,754',
      '2,377,360',
      'V14 PH34'
    ],
    sources: [
      { claim: 'CSO PxStat table TAM08, Passengers handled by main airports, monthly January 2019 to June 2026, updated 19 August 2026: Shannon 2026 January 131,514, February 127,186, March 168,955, April 220,714, May 242,836, June 265,104; 2025 January 117,909, August 254,703; 2020 April 85, May 17, June 18. Note: "Passenger numbers refer to commercial passengers only."', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/TAM08/JSON-stat/2.0/en' },
      { claim: 'CSO PxStat table TAQ01, passengers, trend and seasonally adjusted, quarterly, updated 2 September 2026: Shannon raw Q1 2026 427,655, Q2 2026 728,654; seasonally adjusted Q1 2026 598,385, Q2 2026 637,754; Dublin seasonally adjusted Q1 2026 9,574,992, Q2 2026 9,338,373.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/TAQ01/JSON-stat/2.0/en' },
      { claim: 'CSO, Aviation Statistics Quarter 2 2026, 2 September 2026: Table 9 seasonally adjusted Shannon Q1 2026 598,385, Q2 2026 637,754, change 7 percent; Table 5C Shannon London Heathrow arrivals 38,414, departures 37,020, total 75,434, with Stansted 70,253, New York JFK 35,283, Boston Logan 33,250, Malaga 33,141, Faro 32,794, Gatwick 32,661, Manchester 30,263, Alicante 28,779, Reus 27,928.', url: 'https://www.cso.ie/en/releasesandpublications/ep/p-as/aviationstatisticsquarter22026/' },
      { claim: 'CSO, Aviation Statistics Quarter 2 2026, background notes: seasonal adjustment by X-13-ARIMA with models from January 2012, allowing for calendar effects such as the timing of Easter and for outliers, temporary changes and level shifts, seasonal factors updated each quarter; "passenger numbers for Shannon and Dublin airports exclude transit passengers on technical transit flights as these are fuel stop only flights".', url: 'https://www.cso.ie/en/releasesandpublications/ep/p-as/aviationstatisticsquarter22026/backgroundnotes/' },
      { claim: 'CSO, Aviation Statistics Quarter 1 2026, Table 5C Shannon: London Heathrow 66,547, London Stansted 46,094, London Gatwick 30,156, Krakow 30,125, Manchester 26,315, Lanzarote 22,191, Tenerife Sur 19,961, Boston Logan 19,850, Alicante 19,409, Wroclaw 18,156.', url: 'https://www.cso.ie/en/releasesandpublications/ep/p-as/aviationstatisticsquarter12026/' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T2TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22, SAP2022T14T1TOWN22 and SAP2022T1T1TOWN22, Shannon, Co Clare: usual residents 10,117; households 3,877, broadband 3,346; to work 4,529 with car driver 2,636, on foot 545; to school, college or childcare 2,543 with on foot 1,104; 387 leave before 06:30; 1,045 work from home at least some of the time; 505 children under 15 in childcare; persons at work 4,590 with manufacturing 1,548 and transport and communications 677; 1,033 aged 6 to 12 and 859 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Shannon Aviation Museum, own site: "Link Road, Shannon, Smithstown, Co. Clare, V14 PH34, Ireland", "Museum open Wednesday to Saturday, 10am to 4pm", "Aviation Camp 8+", "Aviation Academy 13+".', url: 'https://www.shannonaviationmuseum.com/' },
      { claim: 'St Patrick\'s Comprehensive School, own site footer: the school\'s name with Shannon, Co. Clare and the eircode V14 Y434 (the page prints the county as "ClarE").', url: 'https://www.stpatrickscomprehensive.ie/' }
    ],
    rejectedClaims: [
      'Any reading of airport passenger counts as people living in, visiting or working in Shannon town: a passenger is a movement, and a return trip counts twice.',
      'Any reason for a route\'s seasonal rise: the route tables show sizes, not motives.',
      'Any forecast of future passenger numbers: the Wicklow page owns forecasting and backtests.',
      'The census-night population, density, local electoral area and the Shannon Group description of the airport: the County Clare page owns them.',
      'Any claim about the museum or the school beyond name, address, opening hours and published age bands.',
      'Birthplace and citizenship counts from SAP2022T2T1TOWN22: excluded from this page by rule.'
    ]
  }
};
