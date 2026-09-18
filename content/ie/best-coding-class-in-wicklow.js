'use strict';
// Wicklow town (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Wicklow, Co Wicklow", CSO table NDA06 (new dwelling
// completions by settlement, 2012 to 2025), the Irish Rail station page for Wicklow
// and the Wicklow's Historic Gaol site, read 19 September 2026. Spine: forecasting
// and backtesting. Wicklow's completions: 1, 3, 15, 40, 31, 66, 58, 132, 181, 74,
// 133, 84, 139, 206 (total 1,163). Four simple methods trained on 2012-2021 and
// scored on 2022-2025: last year 266 total error, average of last three 136,
// straight line all years 142, straight line last five 138. Across 101 settlements
// with 100+ completions 2012-2021: wins 31/24/26/20, lowest total error the
// all-years line (27,094). Training to 2018 and scoring 2019-2021 over 51
// settlements: wins 15/16/8/12. Wicklow 2028 forecasts range 143 to 262. All run in
// this session (scratchpad series/backtest.js). The Wexford page used NDA06 for
// baselines; this page uses it for out-of-sample testing. The Wicklow county page
// owns the census-night population and the LEA figures.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'WICKLOW TOWN', blurb: 'Four ways to forecast Wicklow\'s new homes, each tested on years it had not seen. The winner changes with the town and with the years chosen.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-wicklow',
  code: 'wkt',
  accent: '#572323',
  accentRationale: 'Wicklow town: an oxblood from the solver, set apart from the Wicklow county green and the Arklow, Greystones and Bray accents on the same coast',
  pageType: 'city',
  place: {
    name: 'Wicklow',
    eyebrow: 'Wicklow town, County Wicklow',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Wicklow' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-wicklow', name: 'County Wicklow' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Wicklow', href: '/coding-classes-in-county-wicklow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wicklow town, County Wicklow, Ireland',
  title: 'Best Coding Class in Wicklow Town | Modern Age Coders',
  description: 'Coding, Python, AI and data classes for learners in Wicklow town aged 6 to 67, taught live online in groups of one level or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Wicklow town, with a data project that forecasts new homes and then tests each forecast on years it never saw.',
  twitterDescription: 'Live online coding, Python and AI lessons for Wicklow town, ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Wicklow Town',
    description: 'Online coding, Python, AI, data and mathematics, grouped by level, for children, teenagers and adults in Wicklow town, County Wicklow, taught live in English.'
  },

  h1: 'Coding classes in Wicklow town',
  capsuleQ: 'What is the best coding class in Wicklow town?',
  capsule: 'Wicklow town has 12,862 usual residents in 4,616 households, and 4,044 of those homes have broadband, the one connection our lessons use. Each lesson is live on video with a teacher and either a small group at one level or a single learner, about twice a week, for ages six to sixty-seven. Your first lesson is free, and after it the monthly fee is USD 100 in a group or USD 150 for private lessons.',
  lead: 'Between 2012 and 2025 the CSO counted 1,163 new homes completed in Wicklow, rising from 1 in the first year to 206 in the last, with plenty of zigzags between. How many will be finished in 2028? Four simple methods give four answers, from 143 to 262. Rather than pick the one that looks sensible, the learner does what forecasters do: hides the last few years, forecasts them with each method using only the earlier data, and scores the results against what actually happened. Then the same test runs on 101 other settlements and on a different set of years. No method wins everywhere, and the one with the lowest total error in one test wins the fewest places in the other.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Wicklow town.',

  picks: {
    eyebrow: 'Course picks for Wicklow town',
    h2: 'Where learners in Wicklow town begin',
    intro: 'Choose by age and interest; the first lesson, taught by the course teacher, confirms the level.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects that guess what comes next in a pattern, then check the guess.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Averages, straight lines and simple predictions built in code, tested against real numbers.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Time series, training and test splits, and honest scoring of predictions on real public data.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults who produce or rely on forecasts at work and want a way to check them.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Forecast Wicklow\'s new homes, then test the forecast on the past',
      intro: 'The CSO counts new dwelling completions every year for each settlement it lists. The learner builds four forecasting methods and, before trusting any of them, checks each against years it was not allowed to see.',
      body: [
        { kind: 'table', caption: 'New dwellings completed each year in the CSO settlement Wicklow, Co Wicklow', head: ['Years', 'Completions, year by year'], rows: [
          ['2012 to 2018', '1, 3, 15, 40, 31, 66, 58'],
          ['2019 to 2025', '132, 181, 74, 133, 84, 139, 206']
        ] },
        { kind: 'table', mt: true, caption: 'Trained on 2012 to 2021, tested on 2022 to 2025', head: ['Method', 'Forecast for 2022 to 2025', 'Total error'], rows: [
          ['Same as last year', '74 each year', '266'],
          ['Average of the last three years', '129 each year', '136'],
          ['Straight line through all ten years', '146, 162, 177, 193', '142'],
          ['Straight line through the last five', '144, 158, 172, 186', '138'],
          ['What actually happened', '133, 84, 139, 206', '']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A close finish in Wicklow', p: 'Three methods finish within six homes of each other over four years, and the plain average of the last three years edges it. Only "same as last year" falls well behind, because 2021 happened to be a low year and the method copied it four times.' },
          { h3: 'Across 101 settlements', p: 'Run on every settlement with at least 100 completions from 2012 to 2021, the wins split 31, 24, 26 and 20. The straight line through all years has the lowest total error by a distance, 27,094 against roughly 36,000 to 37,000 for the others, yet it wins fewer places than simply copying last year.' },
          { h3: 'Move the window', p: 'Train up to 2018 instead and test on 2019 to 2021, across 51 settlements with enough history. Now the wins are 15, 16, 8 and 12. The method that looked strongest in the first test wins the fewest settlements in the second.' }
        ] },
        { kind: 'table', mt: true, caption: 'Forecasts for Wicklow built from all fourteen years', head: ['Method', '2026', '2027', '2028'], rows: [
          ['Same as last year', '206', '206', '206'],
          ['Average of the last three', '143', '143', '143'],
          ['Straight line, all years', '183', '196', '210'],
          ['Straight line, last five', '208', '235', '262']
        ] },
        { kind: 'callout', h3: 'Test a forecast on the past before trusting it with the future', p: 'A forecasting method that has never been tested on data it did not see is an opinion with arithmetic attached. Holding back the most recent years and scoring each method on them is the cheapest honest check there is, and machine learning calls the same idea a train and test split. Two more habits follow from this page. Choose the method and the test before looking at the scores, so the test cannot be tuned to flatter a favourite. And report a range rather than a point: for 2028 the four methods give 143 to 262 homes, and that spread is part of the answer.' },
        { kind: 'p', text: 'The learner writes each method as a small function that takes the training years and returns a forecast, then a scoring function that adds up the absolute differences from what happened. A loop runs every method on every settlement and records the winner. Changing a single number, the last training year, reruns the whole study on a different window, and the difference between the two tallies is the most useful output of the project. Nothing here needs more than lists, loops and a straight-line fit, which is why it suits a learner early in data science.' }
      ]
    },
    {
      id: 'limits', tint: 'tint', eyebrow: 'What forecasts carry',
      h2: 'What these four methods know, and what they do not',
      intro: 'All four methods look only at past counts. That keeps them simple and testable, and it also marks exactly where they stop.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Homes arrive in lumps', p: 'Completions are counted when homes are finished, so one large scheme can double a year and its absence can halve the next. Wicklow went from 181 to 74 and back to 133 in three years.' },
          { h3: 'No causes inside', p: 'Planning permissions, prices, building costs and interest rates appear nowhere in these methods. They extend patterns; they do not explain them, and a change in any cause can break the pattern.' },
          { h3: 'A range is information', p: 'Four methods, all defensible, disagree by 119 homes for 2028. Reporting only one of them would hide how uncertain the question really is.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It is not a housing forecast for Wicklow, and it takes no view on housing policy. The completions table names settlements whose boundaries need not match the census town exactly, so the two sets of figures on this page are not combined.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'What the census records for Wicklow town',
      intro: 'The Census 2022 small area tables for the town Wicklow, Co Wicklow, as published for its usual residents and their households.',
      body: [
        { kind: 'table', caption: 'Census 2022, Wicklow town', head: ['Count of', 'People or homes'], rows: [
          ['Usual residents', '12,862'],
          ['Households', '4,616'],
          ['Households with broadband', '4,044'],
          ['Working residents in the travel table', '5,785'],
          ['Journeys to school, college or childcare', '3,399'],
          ['Children under fifteen in childcare', '891'],
          ['Journeys of an hour or more', '1,310']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Getting to work', p: 'Of 5,785 working residents, 3,236 drive and 824 work mainly at or from home. Then 473 walk, 352 go by van, 247 as a car passenger, 205 by bus, 173 by train and 53 by bicycle.' },
          { h3: 'Getting to school', p: 'Of 3,399 journeys to school, college or childcare, 1,798 are as a car passenger and 847 on foot, with 330 by bus, 145 learners driving, 59 on the train and 44 cycling.' },
          { h3: 'Working at home', p: 'Asked directly, 2,160 working residents do at least some work from home, 3,261 never do, and 364 did not reply.' }
        ] },
        { kind: 'spec', title: 'Two named places', p: 'Irish Rail gives the station address as Iarnród Éireann, Station Road, Wicklow, Co. Wicklow, Eircode A67 TK38, with bike parking at the station. Wicklow\'s Historic Gaol gives its location as Kilmantin Hill, Wicklow Town, and the year 1702, and its site read "Reopening Soon" on the day we checked. Neither has any connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for learners in Wicklow town',
      intro: 'Two set lessons in most weeks, with a teacher live from start to finish.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Younger children', p: 'The census-night age table counts 1,260 children aged six to twelve in the town. They start with blocks and games, including guessing what comes next and checking the guess.' },
          { h3: 'Teenagers', p: 'The 1,158 residents aged thirteen to eighteen are at the right stage for Python, websites of their own, AI projects and data work with numbers like these.' },
          { h3: 'Adults', p: 'Adults join at every level of experience, none included, and the first lesson sets where the course begins.' }
        ] },
        { kind: 'p', text: 'Figures from the census are reproduced here as the Central Statistics Office issued them. The completions series comes from CSO table NDA06, and every backtest and forecast on this page was run on 19 September 2026. Irish Rail and the gaol are quoted from their own sites.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From guessing the next number to scoring a forecast',
    intro: 'Treat the ages as a guide; the first lesson finds the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'What comes next?', p: 'Block-coded pattern games where the learner predicts the next step and the program checks it.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Lines and averages', p: 'Code that draws a trend line, takes an average and compares both with what really happened.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Train and test', p: 'Holding back data, scoring predictions fairly and reporting a range rather than a guess.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Forecasts at work', p: 'Sales, staffing and budget forecasts, and the backtest that shows how far to trust them.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how many homes Wicklow will finish in 2028',
    intro: 'It will give a number. The useful question is how that number would have fared on years already known.',
    p1: 'An AI assistant asked for a forecast will usually pick a method, apply it and return a single figure, often with a reassuring explanation. On this series, four simple methods give anything from 143 to 262 for 2028, and none of them has a clean record across settlements or across years. A single number with no test behind it hides all of that.',
    p2: 'A learner who has run this backtest asks the assistant to hold back the last four years, forecast them, and report the error alongside the forecast. That one request turns a confident guess into a claim with evidence, and it shows at once whether the method deserves trust.',
    closer: 'Machines make forecasts cheaply. Testing them honestly is the habit that makes them worth anything.',
    blogAnchor: 'why it is worth learning to code today'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons are run for Wicklow town',
    intro: 'In short.',
    cells: [
      { h3: 'Taught as it happens', p: 'Every lesson is live, with the teacher working from the code the learner has just written.' },
      { h3: 'One level per group', p: 'Five to ten learners at the same stage of a course, from Wicklow, the rest of Ireland and overseas.' },
      { h3: 'Usually twice weekly', p: 'Around eight lessons a month, on days and times agreed when the course starts.' },
      { h3: 'School year in view', p: 'Mid-terms, holidays and exam weeks are planned for at the outset.' },
      { h3: 'What to have ready', p: 'A laptop or desktop computer, a microphone and something to listen through, and an internet connection able to hold a video lesson.' },
      { h3: 'Private option', p: 'One-to-one teaching is there for learners who would be held back, or rushed, by the groups currently running.' }
    ],
    spec: { title: 'No building to find', p: 'Wicklow town learners join every lesson on video. We have no premises in the town or anywhere else in Ireland, and a lesson works the same from any house with a connection.' }
  },

  fees: {
    h2: 'Fees for Wicklow town',
    intro: 'The price list, complete.',
    first: 'A full first lesson with the level assessed, free of charge.',
    group: 'A month in a group of five to ten at one level, around eight live lessons.',
    private: 'A month of private lessons on the same weekly pattern.',
    closer: 'A single US dollar rate applies to every family outside India, charged monthly. There is no charge for the first lesson and no bill before a course is under way, and the pricing page explains holidays, missed lessons and moving from group to private teaching or back.'
  },

  reviewsH2: 'Six families on Google, in their own unchanged words',

  book: {
    h2: 'Book a free first lesson for Wicklow town',
    intro: 'Let us know the learner\'s age and what they like, and the first hour is planned around it. It might end with a game, a first program, or a forecast with its own error bar.',
    success: 'Thank you. We will be in touch about the lesson soon.'
  },

  faq: {
    h2: 'Wicklow town coding class questions',
    intro: 'The questions families in Wicklow town ask first.',
    items: [
      { q: 'How many people live in Wicklow town?', a: 'The Census 2022 small area tables record 12,862 usual residents in the town of Wicklow, living in 4,616 households, of which 4,044 have broadband.' },
      { q: 'What is the data project on this page?', a: 'Forecasting new homes in Wicklow four simple ways and testing each on years it did not see. In Wicklow the average of the last three years edges it; across 101 settlements the wins split almost evenly; and on a different set of years the ranking changes again. The 2028 forecasts run from 143 to 262.' },
      { q: 'So how many homes will Wicklow finish in 2028?', a: 'This page does not forecast that. It shows that four reasonable methods give 143 to 262, and that none of them has a consistent record when tested, which is the honest answer to how certain any single figure would be.' },
      { q: 'How do Wicklow town residents get to work?', a: 'Of 5,785 working residents in the travel table, 3,236 drive, 824 work mainly at or from home, 473 walk, 352 go by van, 247 as a car passenger, 205 by bus and 173 by train.' },
      { q: 'When are lessons?', a: 'After school, in the evening and at weekends. Lesson times are set on Irish clocks; India runs four and a half hours ahead in the summer months and five and a half in winter, so we offer Irish afternoon and early-evening slots that work at the Indian end.' },
      { q: 'Can adults learn with you?', a: 'Yes, up to sixty-seven and from any starting point. Adults find out in the first lesson whether a group at their level or one-to-one teaching fits them better.' },
      { q: 'Are Wicklow town learners put in the same group?', a: 'Only if they are at the same level. Groups are formed by stage, so a learner here may share lessons with others in Arklow, Dublin or another country.' },
      { q: 'Is there a Modern Age Coders classroom in Wicklow town?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Wicklow town cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Up and down the Wicklow coast',
    html: 'For the county as a whole there is the <a class="cg-inline-link" href="/coding-classes-in-county-wicklow">County Wicklow</a> page. Along the coast the series has <a class="cg-inline-link" href="/best-coding-class-in-arklow">Arklow</a> to the south and <a class="cg-inline-link" href="/best-coding-class-in-greystones">Greystones</a> and <a class="cg-inline-link" href="/best-coding-class-in-bray">Bray</a> to the north, within <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. A fair side-by-side of online coding schools is on <a class="cg-inline-link" href="/best-online-coding-classes-ireland">its own page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> links every page in the series.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wicklow town, County Wicklow and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-wicklow', label: 'County Wicklow' },
    { href: '/best-coding-class-in-arklow', label: 'Arklow' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-wkt .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.22vw, 2.62rem); }
.cg-root.cg-wkt .cg-hero h1 { font-weight: 700; letter-spacing: -0.0175em; line-height: 1.07; }
.cg-root.cg-wkt .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.16rem; }
.cg-root.cg-wkt .cg-eyebrow { letter-spacing: 0.155em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wkt .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0139em; }
.cg-root.cg-wkt .cg-grid-3 { gap: clamp(1.05rem, 2.75vw, 2.12rem); }
.cg-root.cg-wkt .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-wkt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wkt .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-wkt .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-wkt .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Wicklow, Co Wicklow, CSO Census 2022 Small Area Population town tables and CSO table NDA06, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 12,862. SAP2022T15T2TOWN22: households 4,616, broadband 4,044, not stated 212. SAP2022T11T1TOWN22 to work total 5,785: car driver 3,236, work mainly at or from home 824, on foot 473, van 352, car passenger 247, bus 205, train DART or Luas 173, bicycle 53, not stated 187; to school, college or childcare total 3,399: car passenger 1,798, on foot 847, bus 330, car driver 145, train 59, bicycle 44, not stated 137. SAP2022T11T3TOWN22: 1 hour to under 1.5 hours 910, 1.5 hours and over 400 (1,310 an hour or more). SAP2022T11T4TOWN22: 2,160 work from home at least some of the time, 3,261 never, 364 not stated. SAP2022T11T5TOWN22: 891 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,260, ages 13 to 18 to 1,158. NDA06, Number of New Dwelling Completions, settlement "Wicklow, Co Wicklow", 2012 to 2025: 1, 3, 15, 40, 31, 66, 58, 132, 181, 74, 133, 84, 139, 206; total 1,163. Backtest in this session: train 2012 to 2021, forecast 2022 to 2025, total absolute error: same as last year (74 each year) 266; average of last three (129) 136; least-squares line on all ten years (146, 162, 177, 193, floored at zero) 142; line on last five (144, 158, 172, 186) 138. Across the 101 settlements with 100 or more completions 2012 to 2021, wins 31, 24, 26, 20 in that order; total absolute error 36,933, 35,947, 27,094, 36,874. Window trained to 2018 and scored 2019 to 2021 over the 51 settlements with 100 or more completions 2012 to 2018: wins 15, 16, 8, 12. Forecasts from all fourteen years, 2026 to 2028: 206, 206, 206; 143, 143, 143; 183, 196, 210; 208, 235, 262. Irish Rail, Wicklow: "Station Address Iarnród Éireann, Station Road, Wicklow, Co. Wicklow", "Eircode A67 TK38", "There is bike parking at the station". Wicklow\'s Historic Gaol, own site: "Wicklow\'s Historic Gaol - Reopening Soon", "EST. 1702", "KILMANTIN HILL, WICKLOW TOWN".',
    localProject: 'Forecasting, tested out of sample. The CSO\'s completions series for the settlement Wicklow runs 1, 3, 15, 40, 31, 66, 58, 132, 181, 74, 133, 84, 139 and 206 from 2012 to 2025, 1,163 in all. The learner builds four methods (same as last year, average of the last three, straight line through all years, straight line through the last five), trains each on 2012 to 2021 and scores it on 2022 to 2025: errors 266, 136, 142 and 138, so the three reasonable methods finish within six homes and the naive copy of a low 2021 trails. Across 101 settlements with 100 or more completions the wins split 31, 24, 26 and 20, while the all-years line has by far the lowest total error; trained to 2018 and scored on 2019 to 2021 across 51 settlements the wins are 15, 16, 8 and 12, so the method strongest in one test wins fewest in the other. From all fourteen years the four methods forecast 143 to 262 homes for 2028. Lessons: test a forecast on data it has not seen (the train and test split), fix methods before scoring, and report a range. New family for the cluster: forecasting and out-of-sample testing.',
    requiredMentions: [
      '12,862',
      '4,616',
      '4,044',
      '5,785',
      '3,236',
      '824',
      '2,160',
      '3,399',
      '1,798',
      '891',
      '1,163',
      'A67 TK38'
    ],
    sources: [
      { claim: 'CSO table NDA06, Number of New Dwelling Completions by settlement, 2012 to 2025: Wicklow, Co Wicklow 1, 3, 15, 40, 31, 66, 58, 132, 181, 74, 133, 84, 139, 206 (total 1,163); the same table for every settlement is used for the backtests over 101 and 51 settlements.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/NDA06/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T3TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Wicklow, Co Wicklow: usual residents 12,862; households 4,616, broadband 4,044; to work 5,785 with car driver 3,236, mainly at or from home 824, on foot 473, van 352, car passenger 247, bus 205, train 173, bicycle 53; to school, college or childcare 3,399 with car passenger 1,798, on foot 847, bus 330, car driver 145, train 59, bicycle 44; 1,310 journeys of an hour or more; 2,160 work from home at least some of the time, 3,261 never, 364 not stated; 891 children under 15 in childcare; 1,260 aged 6 to 12 and 1,158 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Wicklow station: "Station Address Iarnród Éireann, Station Road, Wicklow, Co. Wicklow", "Eircode A67 TK38", "There is bike parking at the station".', url: 'https://www.irishrail.ie/en-ie/station/wicklow' },
      { claim: 'Wicklow\'s Historic Gaol, own site: "Reopening Soon", "EST. 1702", "KILMANTIN HILL, WICKLOW TOWN".', url: 'https://wicklowshistoricgaol.com/' }
    ],
    rejectedClaims: [
      'Any housing forecast for Wicklow: the page reports what four methods produce and how they tested, not what will happen.',
      'Combining the completions series with census town figures: NDA06 settlements need not share the census town boundary.',
      'Any cause for the rises and falls in completions, including planning, prices or policy.',
      'Picking a best method from one backtest: the ranking changes between the two windows tested.',
      'The census-night population and the local electoral area figures for Wicklow: the County Wicklow page owns them.'
    ]
  }
};
