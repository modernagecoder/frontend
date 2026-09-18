'use strict';
// Wexford town (cg- town page, Ireland cluster, Phase 7). Facts from the CSO
// Census 2022 town tables for "Wexford, Co Wexford", read 19 September 2026, the
// CSO table NDA06 New Dwelling Completions by Settlement (updated 30 July 2026,
// years 2012 to 2025), the National Opera House's own site and Wexford Arts
// Centre's own site. Spine: choose the start year and you have chosen the
// headline. The NDA06 series for Wexford runs 8, 9, 12, 36, 22, 44, 64, 138, 135,
// 167, 291, 211, 179, 173; measured to 2025 it is up 2,062.5% from 2012, up 25.4%
// from 2019 and down 40.5% from 2022. New family for the cluster: time series,
// baselines and smoothing. No reason is offered for any movement in the series,
// NDA06 settlements are not assumed to match census town boundaries, and the
// county page owns the town-list population 21,524 and the SETU eircodes.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'WEXFORD TOWN', blurb: 'Up twentyfold, up a quarter, or down two fifths: the same fourteen years of new homes in Wexford, told from three different starting points.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-wexford',
  code: 'wxt',
  accent: '#5E4A2E',
  accentRationale: 'Wexford town: a harbour-timber brown from the solver, apart from the County Wexford violet and the south-east city accents',
  pageType: 'city',
  place: {
    name: 'Wexford',
    eyebrow: 'Wexford town, County Wexford',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Wexford' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-wexford', name: 'County Wexford' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Wexford', href: '/coding-classes-in-county-wexford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wexford town, County Wexford, Ireland',
  title: 'Best Coding Class in Wexford | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Wexford learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Wexford, with a project on how the same fourteen years of data can be made to rise or fall.',
  twitterDescription: 'Coding and AI classes for Wexford, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Wexford',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Wexford town, taught live in English.'
  },

  h1: 'Coding classes in Wexford',
  capsuleQ: 'What is the best coding class in Wexford?',
  capsule: 'Wexford town counts 21,358 usual residents in the census town tables and 8,506 households, of which 6,785 report broadband. Lessons with us are taught live over video, twice in most weeks, by a teacher who stays for the whole hour, either with a small group working at one level or with a single learner, for ages six to sixty-seven. Nothing is charged for the first lesson. After that it is USD 100 a month for a group place or USD 150 for private teaching.',
  lead: 'The CSO counts the new homes completed in Wexford town every year, and fourteen years of that count now sit in one table: 8 in 2012, rising to 291 in 2022, and 173 in 2025. Write a headline from it. Measure from 2012 and completions have grown more than twentyfold. Measure from 2019 and they are up a quarter. Measure from 2022 and they have fallen by two fifths. All three sentences are arithmetic on the same published numbers, and each would survive a fact check on its own. The trick is entirely in the first year chosen, which is why a figure about change that does not show its starting point, or better the whole series, has not told you enough to believe it.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Wexford.',

  picks: {
    eyebrow: 'Course picks for Wexford',
    h2: 'Where Wexford learners get started',
    intro: 'Age and interest point to a course; the first lesson, taught by that course\'s own teacher, makes the final call.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with scores that change over time, and charts that show every turn rather than only the start and finish.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Percentage change, averages over several years and growth, written as small programs.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Time series in Python: plotting, smoothing, and choosing a baseline you can defend.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who report year-on-year figures and get asked why the story changed.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Choose the start year, choose the headline',
      intro: 'New dwelling completions in the settlement of Wexford, from CSO table NDA06, measured to 2025 from six different starting years. The completions are published; the changes are our arithmetic.',
      body: [
        { kind: 'table', caption: 'The same series, six ways of describing it', head: ['Measured from', 'Completions that year', 'Completions in 2025', 'Change to 2025'], rows: [
          ['2012', '8', '173', 'up 2,062.5%, more than twenty times'],
          ['2016', '22', '173', 'up 686.4%'],
          ['2019', '138', '173', 'up 25.4%'],
          ['2021', '167', '173', 'up 3.6%'],
          ['2022', '291', '173', 'down 40.5%'],
          ['2023', '211', '173', 'down 18.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Every row is true', p: 'Each change is the correct percentage between two published numbers. Nothing was rounded dishonestly and no figure was invented. What differs is the choice of which year counts as the beginning, and that choice was made before the arithmetic.' },
          { h3: 'Why the early rows explode', p: 'Starting from 8 completions, almost any later number is a huge percentage rise. A small base makes percentages enormous, which is why growth measured from a low point tells you more about the starting year than about the change.' },
          { h3: 'Why the late rows fall', p: 'The series peaked at 291 in 2022. Measure from a peak and nearly any later year looks like a decline, even one that is high by the standards of the rest of the series.' }
        ] },
        { kind: 'callout', h3: 'The start year is an editorial choice', p: 'Sales since the worst month. Visitors since the site relaunched. Membership since the year before a rival opened. Every before-and-after figure carries a hidden decision about where before begins, and people who want a particular story choose it deliberately. The defence is simple enough to teach a twelve-year-old: ask for the whole series, look at it before reading any percentage, and be suspicious of any claim whose starting point happens to be a very high or very low year.',
        },
        { kind: 'p', text: 'The learner\'s project loads the fourteen published values and writes a function that returns the percentage change between any two years. They produce the six headlines above, then build the defence: a plot of the full series, a three-year moving average, and a comparison of the first five years with the last five, 87 completions against 1,021. The final output is a caption that shows the series and states its range, which cannot be bent by choosing a convenient starting year because it does not choose one.' }
      ]
    },
    {
      id: 'series', tint: 'tint', eyebrow: 'The whole series',
      h2: 'Fourteen years, smoothed and unsmoothed',
      intro: 'Every published value for the Wexford settlement in NDA06, the change from the year before, and a three-year moving average. The changes and averages are ours.',
      body: [
        { kind: 'table', caption: 'New dwelling completions, Wexford settlement, 2012 to 2025', head: ['Year', 'Completions', 'Change on the year before', 'Three-year average'], rows: [
          ['2012', '8', '', ''],
          ['2013', '9', 'up 12.5%', ''],
          ['2014', '12', 'up 33.3%', '9.7'],
          ['2015', '36', 'up 200.0%', '19.0'],
          ['2016', '22', 'down 38.9%', '23.3'],
          ['2017', '44', 'up 100.0%', '34.0'],
          ['2018', '64', 'up 45.5%', '43.3'],
          ['2019', '138', 'up 115.6%', '82.0'],
          ['2020', '135', 'down 2.2%', '112.3'],
          ['2021', '167', 'up 23.7%', '146.7'],
          ['2022', '291', 'up 74.3%', '197.7'],
          ['2023', '211', 'down 27.5%', '223.0'],
          ['2024', '179', 'down 15.2%', '227.0'],
          ['2025', '173', 'down 3.4%', '187.7']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Year on year is noisy', p: 'The yearly change swings from up 200% to down 38.9% and back to up 100% within three years, on numbers in the twenties and thirties. A single year\'s change on a small count says very little about direction.' },
          { h3: 'Averages over three years are calmer', p: 'The moving average rises steadily from 9.7 to a high of 227.0 in 2024 and eases to 187.7. Smoothing trades detail for a clearer shape, and the page shows both so nothing is hidden.' },
          { h3: 'Totals put it in scale', p: 'Across all fourteen years the table records 1,489 completions in the Wexford settlement, 87 of them in the first five years and 1,021 in the last five. Those two numbers say more than any single percentage.' }
        ] },
        { kind: 'spec', title: 'A different table, a different list of places', p: 'NDA06 names 873 settlements, not the 867 census towns, and spells some differently: it has Tinriland and Inniscrone where the census town table has Tinryland and Enniscrone. We therefore do not assume a settlement in NDA06 covers exactly the same ground as the census town of the same name, and never divide completions by census households.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Wexford in the town tables',
      h2: 'The census snapshot beside the series',
      intro: 'Published for the built-up area Wexford, Co Wexford, in the Census 2022 small area tables, a single point in the middle of the fourteen years above.',
      body: [
        { kind: 'table', caption: 'Wexford town, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '21,358'],
          ['Households', '8,506'],
          ['Households reporting broadband', '6,785'],
          ['Working residents in the travel table', '9,107'],
          ['Residents travelling to school, college or childcare', '4,689'],
          ['Children under fifteen in childcare', '1,314']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Getting to work', p: 'Of the 9,107 working residents, 4,928 drive, 1,437 walk, 687 give home as their main answer, 647 travel as a car passenger, 176 by bus and 25 by train.' },
          { h3: 'Getting to school', p: 'Of 4,689 journeys to school, college or childcare, 2,514 are as a car passenger, 1,197 on foot, 314 by bus and 138 driving, with 408 not stating.' },
          { h3: 'Working from home', p: 'Asked about home working directly, 2,034 working residents do it at least some of the time, 6,225 never do and 848 did not answer.' }
        ] },
        { kind: 'spec', title: 'The opera house and the arts centre', p: 'The National Opera House gives its address as High Street, Wexford, Y35 FEP3, where The National Opera House Ltd is registered in Ireland as company 16277 and charity CHY18140, and it is the home of Wexford Festival Opera. Wexford Arts Centre gives its address as Cornmarket, Wexford, company registration 306536. We have no connection with either and reproduce no ticket prices.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Wexford',
      h2: 'What lessons with us involve',
      intro: 'A regular hour, twice in most weeks, and a teacher who stays for the whole of it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Block coding and small games first, with scores, timers and charts appearing early.' },
          { h3: 'Teenagers', p: 'Python, websites and AI projects that carry on from the junior cycle into the exam years.' },
          { h3: 'Adults', p: 'Adult learners start wherever they are, and 2,034 working residents in the town already spend some of the week working from home.' }
        ] },
        { kind: 'p', text: 'The National Opera House and Wexford Arts Centre are named from their own published pages, and neither, nor Wexford County Council, is connected with us. Census counts and dwelling completions are Central Statistics Office figures printed as published; the percentage changes, moving averages and five-year totals are our own arithmetic, and the full series is printed so that no single starting year does the talking.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a before and after to a whole series',
    intro: 'The ages are a guide; the first lesson finds the right starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Watching things change', p: 'Block projects with scores and timers, charting every step rather than just the last one.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Percent change', p: 'Writing the percentage-change calculation in Python and seeing what a tiny starting number does to it.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Series and smoothing', p: 'Plotting real yearly data, moving averages, and baselines that can be defended.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Reporting change', p: 'Year-on-year figures for work that show the whole picture instead of the flattering slice.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask for a headline about new homes in Wexford',
    intro: 'The start year will be chosen for you, silently.',
    p1: 'Give an assistant this series and ask how completions have changed and it will usually pick a start and an end, often the first and last years, and return a dramatic percentage. Ask for a more cautious framing and it may pick the peak instead. Either way the choice of baseline is rarely mentioned, and it is the most important decision in the answer.',
    p2: 'A learner who has run this project asks for the full series first, looks at its shape, and then chooses a comparison they can justify out loud, such as two five-year totals. The tool does the arithmetic; the judgement about which arithmetic is fair stays with the person.',
    closer: 'Any number of true headlines can be produced from one series. Learning to see all of them at once is the skill that stops you believing the first one you are shown.',
    blogAnchor: 'why coding keeps its value for young people'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How the teaching is organised',
    intro: 'The details a Wexford family needs.',
    cells: [
      { h3: 'Taught live', p: 'The teacher is on the call throughout, working from what the learner is doing on screen.' },
      { h3: 'Grouped by level', p: 'Five to ten learners at the same stage, whether in Wexford, elsewhere in Ireland or abroad.' },
      { h3: 'A weekly pattern', p: 'Two lessons in most weeks, around eight a month, at an hour fixed at the start.' },
      { h3: 'Term time', p: 'Holidays, mid-terms and exam weeks are worked into the plan in advance.' },
      { h3: 'Equipment', p: 'A laptop or desktop with a keyboard, sound in and out, and a connection that stays up for a full video lesson.' },
      { h3: 'One to one', p: 'Private teaching exists for the learner no group fits, whether by level or by timetable.' }
    ],
    spec: { title: 'Progress over the whole course', p: 'We judge a learner\'s progress across the course rather than from one good or bad lesson, for the same reason this page refuses to judge a series from one year.' }
  },

  fees: {
    h2: 'Wexford class fees',
    intro: 'All there is to the price.',
    first: 'A first lesson taught in full and assessed, with no charge.',
    group: 'A month in a group of five to ten at one level, about eight live lessons.',
    private: 'A month of private lessons at the same weekly frequency.',
    closer: 'Every family outside India pays the same monthly rate in US dollars, so a Wexford household sees the figure a Galway or Kilkenny household sees, and there is no euro price to compare it with. The free lesson comes first, the invoice only after a course and a time are agreed, and the pricing page sets out the rules for holidays, absences and moving between formats.'
  },

  reviewsH2: 'Six of our families on Google, quoted without edits',

  book: {
    h2: 'Book a free Wexford lesson',
    intro: 'Tell us the learner\'s age and what they like doing, and the first hour is built from that, whether it ends with a game, a first program, or a chart that shows a whole story instead of one convenient slice of it.',
    success: 'Thank you. We will be in touch about the Wexford lesson shortly.'
  },

  faq: {
    h2: 'Wexford coding class questions',
    intro: 'What people in Wexford ask us first.',
    items: [
      { q: 'How many people live in Wexford town?', a: 'The Census 2022 small area tables give 21,358 usual residents for the built-up area of Wexford, in 8,506 households. Our County Wexford page works from the census town list, a separate product that counts on its own basis.' },
      { q: 'What is the Wexford data project?', a: 'Learners take fourteen years of new dwelling completions for the Wexford settlement from CSO table NDA06 and show that the same series can be described as up 2,062.5%, up 25.4% or down 40.5% depending only on the starting year, then build a fair summary from the whole series.' },
      { q: 'Which of those headlines is correct?', a: 'All three are arithmetically correct and none is complete. The honest summary shows the full series; if one comparison is needed, two five-year totals, 87 against 1,021, are harder to bend than any single starting year.' },
      { q: 'How do Wexford residents travel to work?', a: 'Of the 9,107 working residents in the travel table, 4,928 drive, 1,437 walk, 687 give working mainly at or from home, 647 travel as a car passenger, 176 by bus and 25 by train.' },
      { q: 'What times are lessons held?', a: 'After school, in the evening and at weekends. We teach from India, so an Irish evening lesson is a late one for us; the two clocks sit four and a half hours apart during Irish summer time and five and a half in winter, and the timetable is built around that.' },
      { q: 'Do you teach adults in Wexford?', a: 'Yes, up to sixty-seven. Adults often begin from nothing, and the first lesson settles whether they join a group at their level or learn one to one.' },
      { q: 'Why does a small starting number make percentages so large?', a: 'Because a percentage divides the change by where you started. Going from 8 to 173 is an increase of 165 on a base of 8, which is over twenty times the starting value, even though the numbers themselves are modest.' },
      { q: 'Is there a Modern Age Coders classroom in Wexford?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Wexford cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Wexford',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-county-wexford">County Wexford</a> page covers the rest of the county, with <a class="cg-inline-link" href="/best-coding-class-in-waterford">Waterford</a> and <a class="cg-inline-link" href="/best-coding-class-in-kilkenny">Kilkenny</a> to the west, all in the south east of <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> and beyond. Anyone weighing us against other online schools can begin with <a class="cg-inline-link" href="/best-online-coding-classes-ireland">this guide</a>, and every place in the series is listed on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wexford town, Wexford and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-wexford', label: 'County Wexford' },
    { href: '/best-coding-class-in-waterford', label: 'Waterford' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-wxt .cg-hero-grid { align-items: start; gap: clamp(1.13rem, 3.26vw, 2.58rem); }
.cg-root.cg-wxt .cg-hero h1 { font-weight: 700; letter-spacing: -0.0185em; line-height: 1.061; }
.cg-root.cg-wxt .cg-capsule { border-bottom: 5px solid var(--cg-accent); padding-bottom: 1.1rem; }
.cg-root.cg-wxt .cg-eyebrow { letter-spacing: 0.171em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wxt .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0134em; }
.cg-root.cg-wxt .cg-grid-3 { gap: clamp(1.08rem, 2.66vw, 2.11rem); }
.cg-root.cg-wxt .cg-table caption { letter-spacing: 0.037em; font-weight: 700; }
.cg-root.cg-wxt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wxt .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-wxt .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-wxt .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Wexford town, the built-up area "Wexford, Co Wexford", CSO Census 2022 Small Area Population town tables, read 19 September 2026, and CSO table NDA06 New Dwelling Completions by Settlement, updated 30 July 2026, dimensions Statistic (1), Year (14, 2012 to 2025), Settlements (873). NDA06 for the settlement "Wexford, Co Wexford": 2012 8, 2013 9, 2014 12, 2015 36, 2016 22, 2017 44, 2018 64, 2019 138, 2020 135, 2021 167, 2022 291, 2023 211, 2024 179, 2025 173; total 1,489; 2012 to 2016 total 87; 2021 to 2025 total 1,021; peak 291 in 2022. Our arithmetic to 2025: from 2012 up 2,062.5 percent, from 2016 up 686.4, from 2019 up 25.4, from 2021 up 3.6, from 2022 down 40.5, from 2023 down 18.0; year-on-year changes 12.5, 33.3, 200.0, minus 38.9, 100.0, 45.5, 115.6, minus 2.2, 23.7, 74.3, minus 27.5, minus 15.2, minus 3.4 percent; three-year moving averages from 2014: 9.7, 19.0, 23.3, 34.0, 43.3, 82.0, 112.3, 146.7, 197.7, 223.0, 227.0, 187.7. NDA06 settlement names differ from census town labels in places, for example Tinriland and Inniscrone against Tinryland and Enniscrone. Census town tables: SAP2022T2T1TOWN22 usual residents 21,358, born in Ireland 17,137; SAP2022T15T2TOWN22 households 8,506, broadband 6,785, other 249, none 956, not stated 516; SAP2022T11T1TOWN22 to work total 9,107 with car driver 4,928, on foot 1,437, work mainly at or from home 687, car passenger 647, bus 176, train 25; to school, college or childcare total 4,689 with car passenger 2,514, on foot 1,197, bus 314, car driver 138, not stated 408; SAP2022T11T4TOWN22 2,034 work from home at least some of the time, 6,225 never, 848 not stated; SAP2022T11T5TOWN22 1,314 children under 15 in childcare. The National Opera House: "The National Opera House, High St, Wexford, Y35 FEP3", "Registered in Ireland No: 16277", "Charity No: CHY18140", Wexford Festival Opera. Wexford Arts Centre: "Cornmarket, Wexford", "Reg No 306536".',
    localProject: 'Choose the start year, choose the headline. CSO table NDA06 counts new dwelling completions in the settlement of Wexford for each year from 2012 to 2025: 8, 9, 12, 36, 22, 44, 64, 138, 135, 167, 291, 211, 179 and 173. Measured to 2025 the same series is up 2,062.5 percent from 2012, up 686.4 from 2016, up 25.4 from 2019, up 3.6 from 2021, down 40.5 from the 2022 peak and down 18.0 from 2023, every figure correct arithmetic on published numbers. The page explains why low bases explode percentages and peaks manufacture declines, prints the whole series with year-on-year changes, which swing from up 200 to down 38.9 percent on small counts, and a three-year moving average rising from 9.7 to 227.0, and recommends summaries that cannot be bent by a chosen start, such as the first and last five-year totals, 87 against 1,021, and the fourteen-year total of 1,489. It notes that NDA06 lists 873 settlements with some names spelled differently from the census towns, so no completions figure is divided by census households. The learner writes a percentage-change function, generates the six headlines, then builds the defence: full plot, moving average, five-year totals and a caption that states the range. New family for the cluster: time series, baselines and smoothing.',
    requiredMentions: [
      '21,358',
      '8,506',
      '6,785',
      '9,107',
      '4,928',
      '4,689',
      '2,514',
      '1,314',
      '291',
      '1,489',
      '173',
      'Y35 FEP3'
    ],
    sources: [
      { claim: 'CSO table NDA06 New Dwelling Completions by Settlement, updated 30 July 2026, settlement "Wexford, Co Wexford": 2012 8, 2013 9, 2014 12, 2015 36, 2016 22, 2017 44, 2018 64, 2019 138, 2020 135, 2021 167, 2022 291, 2023 211, 2024 179, 2025 173. The table lists 873 settlements, including Tinriland, Co Carlow and Inniscrone, Co Sligo.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/NDA06/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T4TOWN22 and SAP2022T11T5TOWN22, Wexford, Co Wexford: usual residents 21,358; households 8,506, broadband 6,785; to work 9,107 with car driver 4,928, on foot 1,437, mainly at or from home 687, car passenger 647, bus 176, train 25; to school, college or childcare 4,689 with car passenger 2,514, on foot 1,197, bus 314; 2,034 work from home at least some of the time, 6,225 never, 848 not stated; 1,314 children under 15 in childcare.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'The National Opera House: "The National Opera House, High St, Wexford, Y35 FEP3, Ireland"; "Registered in Ireland No: 16277"; "Charity No: CHY18140"; home of Wexford Festival Opera.', url: 'https://www.nationaloperahouse.ie/' },
      { claim: 'Wexford Arts Centre: "Wexford Arts Centre, Cornmarket, Wexford. Reg No 306536".', url: 'https://www.wexfordartscentre.ie/' }
    ],
    rejectedClaims: [
      'Any single percentage change presented as the trend without the full series beside it.',
      'Any reason for the rise or fall in completions, including housing policy, prices or demand: nothing on the page measures them.',
      'Dividing completions by census households or residents: NDA06 settlements are not assumed to match census town boundaries.',
      'The census town-list population of Wexford and the SETU campus eircodes: the County Wexford page owns them.',
      'Irish Rail station details: the station page returned no content under the slugs tried, so none are quoted.',
      'Any National Opera House or Wexford Arts Centre ticket price.'
    ]
  }
};
