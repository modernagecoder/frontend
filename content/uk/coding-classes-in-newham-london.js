'use strict';
// Newham (cg- London borough page, UK cluster Phase 5, row 163). Named sources only.
// Spine: a forecast has parts. Learners code Holt-Winters exponential smoothing (level, trend, multiplicative season,
// monthly, m = 12) on Civil Aviation Authority monthly terminal passengers at London City Airport (Table 09, 120 monthly
// CSVs, January 2016 to December 2025, none missing), choose the three smoothing constants by in-sample squared error on a
// grid, then forecast a whole year they have not seen. Train 2016-2018, test 2019: mean absolute percentage error 5.3%
// against 5.9% for "same month last year". Train 2016-2019: April 2020 forecast 420,639, actual 0. Train 2022-2024, test
// 2025: Holt-Winters 4.7%, same-month-last-year 4.4%; Holt-Winters above the actual in 11 of 12 months, last year below in
// 11 of 12; the average of the two 2.7%. Changing the constants to alpha 0.5 lifts the 2025 error to 18.8%.
// Airport inside Newham: postcodes.io puts E16 2PX (the airport's own schema address, Hartmann Road) in Newham, Royal
// Albert ward. Lesson family: Holt-Winters exponential smoothing and forecast combination. Screened 25 September 2026
// (Holt-Winters 0 place pages). Distinct from Dundee (forecast baselines, walk-forward, persistence and climatology) and
// Hillingdon (LOESS trend on Heathrow temperatures).
// Newham Council's libraries page returned 403 to our reader on 25 September 2026 and was not circumvented, so no
// library list is given. Annual passenger totals are not printed: they would be our sums of monthly parts.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'NEWHAM', blurb: 'Stratford, the Royal Docks, a city airport and a project that forecasts its passengers month by month.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-newham-london',
  code: 'nwh',
  accent: '#23638B',
  accentRationale: 'Newham: a dockside steel blue from the solver (5.28:1 on every paper tint), cooler than the Barnet olive and well clear of the Ealing indigo',
  pageType: 'governorate',
  place: {
    name: 'Newham',
    eyebrow: 'London Borough of Newham',
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
  routeLabel: 'Newham, London',
  title: 'Coding Classes in Newham, Stratford, East Ham | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Newham: Stratford, East Ham, Canning Town, Forest Gate, Beckton and the Royal Docks. Ages 6 to 67.',
  ogDescription: 'Newham coding and Python classes, with a project where learners forecast London City Airport passengers month by month and find out when two forecasts beat one.',
  twitterDescription: 'Newham coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Newham Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Newham, taught live in English.'
  },

  h1: 'Coding classes in Newham',
  capsuleQ: 'What are the best coding classes in Newham?',
  capsule: 'Newham is the east London borough of Stratford, West Ham, East Ham, Canning Town, Forest Gate, Beckton and the Royal Docks, with 351,036 residents counted at the 2021 Census and London City Airport on its southern edge. Good classes here should leave a learner able to make a prediction and then find out, honestly, how wrong it was. This page does that with the airport: a forecast of its monthly passengers built from three moving parts, tested on a year the model never saw. Our teachers work from India and teach live on video to anyone aged 6 to 67, one to one or in a class of five to ten learners at the same level. The opening lesson is free. Afterwards a class place is USD 100 a month and private lessons are USD 150 a month.',
  lead: 'London City Airport sits on the Royal Docks in the south of Newham, and the Civil Aviation Authority publishes how many passengers pass through it every month. Our learners use those figures to build a forecast in three parts: where the numbers stand now, which way they are heading, and how each month usually differs from the average. That method is called Holt-Winters exponential smoothing, and it takes only a short loop of code. Then comes the honest part. Trained on 2016 to 2018, it predicts 2019 within about 5 per cent a month. Trained on 2016 to 2019, it expects some 420,000 passengers in April 2020, and the real figure is zero. Trained on the recovery years, it loses narrowly to a much simpler guess, until the two are averaged.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Newham.',

  picks: {
    eyebrow: 'Course picks for Newham',
    h2: 'Four starting courses for Newham',
    intro: 'Picture a Year 3 child in Forest Gate who counts planes over the Royal Docks, a Year 8 pupil in Stratford who likes spreadsheets more than they admit, a Year 13 student in East Ham weighing up economics or data science, and a shift worker in Beckton who wants to forecast their own household bills. Any of them can start with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'An airport in Scratch where planes arrive on a timetable, and a counter that keeps score month by month.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python lists: twelve months of passengers, the busiest and quietest month, and a simple bar chart.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including the Holt-Winters forecast on this page with real CAA data.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who are handed forecasts at work and want to know how one is built and how far to trust it.' }
    ]
  },

  sections: [
    {
      id: 'newham', tint: '', eyebrow: 'Newham by the numbers',
      h2: '351,036 residents, 125 listed buildings and one airport',
      intro: 'The body named beside each figure publishes it, or publishes the data we counted it from.',
      body: [
        { kind: 'table', caption: 'Newham in five published figures', head: ['What', 'Number', 'Source'], rows: [
          ['Usual residents at the 2021 Census', '351,036', 'ONS table TS001 on Nomis'],
          ['Entries on the National Heritage List inside the borough', '125: 4 Grade I, 6 Grade II*, 115 Grade II', 'Historic England data, counted 25 September 2026'],
          ['Months of London City Airport passenger data used', '120, January 2016 to December 2025', 'Civil Aviation Authority, Table 09'],
          ['Busiest month in that run', 'July 2019: 493,486 terminal passengers', 'Civil Aviation Authority, Table 09'],
          ['Services listed at Stratford', 'Central, Jubilee, DLR, Elizabeth line, Mildmay, c2c and Greater Anglia', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Four at Grade I', p: 'Historic England lists four Grade I entries inside Newham: the Church of St Mary Magdalene, the Church of St Mary the Virgin, the Church of All Saints, and the Tide Mill known as the House Mill.' },
          { h3: 'Pumps, theatres and a hotel', p: 'Among the six at Grade II* are Abbey Mills Pumping Station, the Theatre Royal, the Gallions Hotel and the former St Mark\'s Church, now the Brick Lane Music Hall.' },
          { h3: 'Civic and university', p: 'Newham Council Offices and University House at the University of East London\'s West Ham precinct complete the borough\'s Grade II* entries.' }
        ] }
      ]
    },
    {
      id: 'airport', tint: 'tint', eyebrow: 'The data',
      h2: 'Ten years of monthly passengers at London City',
      intro: 'Each month the Civil Aviation Authority publishes a table of terminal passengers for every reporting UK airport. We read one row from each of 120 of those tables.',
      body: [
        { kind: 'table', caption: 'London City Airport terminal passengers, selected months (CAA Table 09)', head: ['Month', 'Terminal passengers', 'What the month shows'], rows: [
          ['January 2016', '297,157', 'The start of the series'],
          ['July 2019', '493,486', 'The highest month in the ten years'],
          ['April 2020', '0', 'No passengers recorded'],
          ['June 2020', '103', 'The first figure above zero'],
          ['January 2021', '6,474', 'Still a tiny fraction of normal'],
          ['July 2025', '351,402', 'About 71% of July 2019'],
          ['December 2025', '289,450', 'The end of the series']
        ] },
        { kind: 'p', text: 'The airport\'s own published address is on Hartmann Road, E16 2PX, and the postcode directory places that postcode in Newham\'s Royal Albert ward. We print single months, never yearly totals, because adding twelve monthly rows ourselves would make a figure the Civil Aviation Authority did not publish in that form.' },
        { kind: 'p', text: 'We would have listed Newham\'s libraries here as well. The council\'s libraries page refused our automated reader with an access error, and we do not work around such blocks, so this page names none; Newham Council\'s site is where to look.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A forecast in three moving parts: level, trend and season',
      intro: 'Learners write Holt-Winters exponential smoothing from scratch, then test it the only fair way, on a year it has never seen.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Level', p: 'A running estimate of how busy the airport is right now, once the time of year is taken out. Each new month nudges it by a fraction called alpha.' },
          { h3: '2. Trend', p: 'How much the level is rising or falling each month. A second fraction, beta, decides how quickly the trend changes its mind.' },
          { h3: '3. Season', p: 'Twelve multipliers, one for each month. In 2023 to 2025 January ran at about 0.74 of the typical month and June at about 1.12. A third fraction, gamma, updates them.' }
        ] },
        { kind: 'table', caption: 'Our tests, 25 September 2026: average monthly error in the test year', head: ['Trained on', 'Tested on', 'Holt-Winters', 'Same month last year', 'Average of the two'], rows: [
          ['2016 to 2018', '2019', '5.3%', '5.9%', 'not tested'],
          ['2016 to 2019', '2020', 'April forecast 420,639', 'April actual 0', 'no method could know'],
          ['2022 to 2024', '2025', '4.7%', '4.4%', '2.7%']
        ] },
        { kind: 'p', text: 'Before the pandemic the three-part forecast edges out the simple rule of copying last year\'s figure for the same month. For 2020 no forecast built from past months could have seen an empty terminal coming, and learners should be told that plainly. The recovery years hold the surprise. The model, having watched passengers climb from 2022 to 2024, carries that climb forward and comes in above the real figure in 11 of the 12 months of 2025. Copying 2024 comes in below the real figure in 11 of the 12. Because their errors point in opposite directions, the plain average of the two is off by only 2.7 per cent a month, better than either alone.' },
        { kind: 'callout', h3: 'Why this beats asking a chatbot for a forecast', p: 'A language model will happily write the Holt-Winters code, or simply announce a number for next July. Neither tells a learner what matters here: that the three smoothing fractions change the answer enormously (setting alpha to 0.5 instead of our fitted 0.05 pushes the 2025 error from 4.7 to 18.8 per cent), that one bad year can break any model trained on the past, and that two imperfect forecasts can do better together than apart. Those judgements are what a person brings to the machine.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'How we tested',
      h2: 'Choosing alpha, beta and gamma without cheating',
      intro: 'The smoothing constants are picked using the training years only, and the test year stays locked away until the end.',
      body: [
        { kind: 'table', caption: 'Constants chosen on the training years by least squared error, from a small grid', head: ['Trained on', 'Alpha (level)', 'Beta (trend)', 'Gamma (season)'], rows: [
          ['2016 to 2018', '0.5', '0.01', '0.9'],
          ['2022 to 2024', '0.05', '0.01', '0.9']
        ] },
        { kind: 'p', text: 'We tried every combination on a grid of values between 0.01 and 0.9, kept the one with the smallest squared error on the training months, and only then made twelve forecasts for the following year. That order matters: choosing the constants after peeking at the test year would flatter the model, a mistake known as leakage. The average monthly error is the mean absolute percentage error, which says how far off each month was as a share of what really happened. Pupils in Key Stage 4 can follow every step; sixth formers can go on to compare other ways of starting the three parts.' },
        { kind: 'p', text: 'The Civil Aviation Authority, London City Airport, Newham Council, Historic England, TfL and the ONS supplied the figures on this page, and none of them is connected with Modern Age Coders. The passenger counts are the CAA\'s; the forecasts, error figures and averages are our own work, run on 25 September 2026.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Seven lines at Stratford, and none needed for class',
      intro: 'Few corners of London have more trains than Newham. An online lesson still starts at the kitchen table.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Stratford', p: 'TfL\'s open data lists the Central and Jubilee lines, the DLR, the Elizabeth line, the Mildmay line, c2c and Greater Anglia at Stratford.' },
          { h3: 'Docks to Forest Gate', p: 'A learner in North Woolwich and another in Manor Park can join the same group from home, whatever the trains are doing.' },
          { h3: 'No departure board', p: 'Classes are not a timetable you must fit. Learners join a group of five to ten at the same level, at an hour that suits UK evenings.' }
        ] },
        { kind: 'spec', title: 'Newham among the London boroughs', p: 'Newham is one of 32 London boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists all of them and the City, linking each page as it goes live, including <a class="cg-inline-link" href="/coding-classes-in-redbridge-london">Redbridge</a> just to the north east.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting planes to testing a forecast',
    intro: 'The free lesson shows us what a learner can already do, and that, rather than their school year, sets the starting rung.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Count and compare', p: 'Children tally arrivals in Scratch, then spot which months are busy and which are quiet.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Averages that move', p: 'Python lists and a running average that updates each month, the first step towards smoothing.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Forecast, then test', p: 'Level, trend and season, a fair train and test split, and error measures, strong ground for a computing or maths project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Read forecasts critically', p: 'Adults learn how forecasts are built, why they fail at turning points, and when to combine more than one.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Software can forecast in a second. Why should a Newham teenager learn how?',
    intro: 'Because a forecast is only useful to someone who knows how, and how badly, it can go wrong.',
    p1: 'Every spreadsheet package and AI assistant now offers a forecast button. Press it and a confident line appears, extended neatly into the future. What the button hides is everything on this page: the three constants that decide how quickly the forecast reacts, the training years it learned from, and whether anyone checked it against a year it had not seen. With London City\'s figures, the same method is off by about 5 per cent in 2019, cannot see 2020 at all, and in 2025 is beaten by copying last year, until the two are blended.',
    p2: 'A learner who has built the forecast by hand learns to ask the questions that matter in any job that uses one: what was it trained on, how was it tested, and what would a simpler method have said. Machines will keep producing predictions. Deciding which to believe, and how much, stays with people.',
    closer: 'Newham already hosts an airport, a university and one of London\'s busiest stations. A child here who learns to code and to test a forecast has a skill every one of those places relies on.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Stratford to Beckton, taught live online',
    intro: 'Wherever a learner lives in the borough, class starts when they open the laptop.',
    cells: [
      { h3: 'Join from home', p: 'A laptop or desktop computer, a headset and a reliable connection are all a learner needs to take part.' },
      { h3: 'English stages', p: 'We describe progress in the stages English schools use, Key Stage 1 through sixth form, and name GCSE and A level where they apply. Lessons are in English.' },
      { h3: 'A free first lesson', p: 'It is a proper lesson with a teacher, not a sales call, and finishes with a suggested level and course. No card details are asked for.' },
      { h3: 'Grouped by level', p: 'Each class has five to ten learners at the same stage, drawn from across the UK and further afield, so there is usually an hour that suits.' },
      { h3: 'Twice weekly', p: 'Most classes meet on two evenings a week, pausing for half terms, holidays and exam weeks as agreed with the teacher.' },
      { h3: 'Newham time', p: 'Although teachers are based in India, every lesson time we send is written as it reads in London.' }
    ],
    spec: { title: 'A large borough, one well-matched class', p: 'More than 350,000 people live in Newham, but a good class depends on five learners sharing a level and an hour, which is why ours draw from far beyond it.' }
  },

  fees: {
    h2: 'Fees for Newham families',
    intro: 'One free lesson, then a single monthly fee that is the same in every part of the borough.',
    first: 'A complete first lesson with a teacher, free, ending with a recommended level, course and time.',
    group: 'About eight live lessons a month in a class of five to ten at one stage.',
    private: 'About eight live lessons a month with a teacher to themselves.',
    closer: 'Families in Stratford, East Ham and the rest of Newham pay in US dollars, like every family outside India, and no prices in pounds appear on this site. Nothing is paid until the free lesson is over and you have chosen a course and a regular time. The pricing page explains pauses, missed lessons and moving between class and private teaching.'
  },

  reviewsH2: 'What six families wrote on Google',

  book: {
    h2: 'Request a free lesson',
    intro: 'Give us an age or school year and one thing the learner enjoys. The first session might be a Scratch airport, a first Python list, or the passenger forecast on this page.',
    success: 'Thank you. Your request for a Newham lesson has reached our team.'
  },

  faq: {
    h2: 'Questions from Newham families',
    intro: 'On the borough, the airport forecast and how our classes run.',
    items: [
      { q: 'What is the population of Newham?', a: 'At the 2021 Census the London Borough of Newham had 351,036 usual residents, according to Office for National Statistics table TS001.' },
      { q: 'Where do the London City Airport passenger figures come from?', a: 'From the Civil Aviation Authority\'s monthly UK airport data. Table 09 in each month\'s release gives terminal passengers by airport, and we read London City\'s row for every month from January 2016 to December 2025.' },
      { q: 'What is Holt-Winters exponential smoothing?', a: 'A forecasting method that keeps three running estimates, the level, the trend and a seasonal multiplier for each month, and updates each by a fixed fraction every time a new figure arrives. Forecasts multiply the projected level by the season for that month.' },
      { q: 'Did the forecast predict the pandemic?', a: 'No, and no method trained only on past passenger numbers could have. The model trained on 2016 to 2019 expected about 420,639 passengers in April 2020; the Civil Aviation Authority recorded none.' },
      { q: 'Why does averaging two forecasts help?', a: 'In 2025 the Holt-Winters forecast was too high in 11 months out of 12 and copying 2024 was too low in 11 out of 12. Errors in opposite directions partly cancel, so their average was off by 2.7 per cent a month against 4.7 and 4.4 for each alone.' },
      { q: 'When do Newham learners have lessons?', a: 'After the free lesson we suggest a regular weekly time from the classes at the right level that have space. Our teachers are in India, but every time we send you is London time.' },
      { q: 'What equipment is needed?', a: 'A laptop or desktop, headphones or speakers, and a dependable internet connection. The forecasting project needs only Python and the published CAA files.' },
      { q: 'Is there a Modern Age Coders centre in Newham?', a: 'No. There is no Newham centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Newham cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'More of London and the UK',
    html: 'Every borough and the City appear on the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>, with links added as pages open, among them <a class="cg-inline-link" href="/coding-classes-in-barnet-london">Barnet</a> in the far north and <a class="cg-inline-link" href="/coding-classes-in-hillingdon-london">Hillingdon</a>, home to the other big airport, in the far west. Learners keen on prediction and machine learning can go on to our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> sets out how school stages differ between the four nations.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Newham and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-redbridge-london', label: 'Redbridge' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-nwh .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.4vw, 2.8rem); }
.cg-root.cg-nwh .cg-hero h1 { font-weight: 750; letter-spacing: -0.021em; line-height: 1.02; }
.cg-root.cg-nwh .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-nwh .cg-eyebrow { letter-spacing: 0.13em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-nwh .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.013em; }
.cg-root.cg-nwh .cg-grid-3 { gap: clamp(1rem, 2.6vw, 1.9rem); }
.cg-root.cg-nwh .cg-table caption { font-weight: 650; letter-spacing: 0.015em; }
.cg-root.cg-nwh .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-nwh .cg-table td:nth-child(3) { font-weight: 600; }
.cg-root.cg-nwh .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-nwh .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Newham. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000025): 351,036 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 125 (I 4, II* 6, II 115); Grade I CHURCH OF ST MARY MAGDALENE, TIDE MILL (KNOWN AS THE HOUSE MILL), CHURCH OF ST MARY THE VIRGIN, CHURCH OF ALL SAINTS; II* ABBEY MILLS PUMPING STATION, THE THEATRE ROYAL, Gallions Hotel, Former St Mark\'s Church (Brick Lane Music Hall), NEWHAM COUNCIL OFFICES, UNIVERSITY HOUSE, UNIVERSITY OF EAST LONDON (WEST HAM PRECINCT). TfL Unified API StopPoint HUBSRA (Stratford), 25 September 2026: Central, DLR, Elizabeth line, Jubilee, Mildmay, c2c, Greater Anglia (plus buses). London City Airport homepage schema address Hartmann Road, Royal Docks, E16 2PX; postcodes.io: E16 2PX admin_district Newham, ward Royal Albert. Newham Council libraries page (newham.gov.uk/libraries) returned HTTP 403 to curl on 25 September 2026: not circumvented, no library list used.',
    localProject: 'CAA UK airport data, monthly, Table 09 (terminal passengers by reporting airport) CSV for each month January 2016 to December 2025 (120 files, none missing), London City row, terminal_pax_this_period. Selected: 2016-01 297,157; 2019-07 493,486 (series maximum); 2020-04 0; 2020-05 0; 2020-06 103; 2021-01 6,474; 2025-07 351,402 (71.2% of July 2019); 2025-12 289,450. Holt-Winters additive trend, multiplicative season, m = 12, initial level = mean of first season, trend = difference of first two seasonal means / 12, season = first year / level; constants by least in-sample squared error over alpha, gamma in {0.05, 0.1, 0.2, 0.3, 0.5, 0.7, 0.9}, beta in {0.01, 0.05, 0.1, 0.2}. Train 2016-2018: alpha 0.5, beta 0.01, gamma 0.9; 2019 MAPE 5.3% vs seasonal naive (2018 same month) 5.9%. Train 2016-2019: April 2020 forecast 420,639, actual 0. Train 2022-2024: alpha 0.05, beta 0.01, gamma 0.9; 2025 MAPE 4.7% vs seasonal naive 4.4%; HW above actual 11/12 months, naive below 11/12; equal-weight average 2.7%. Sensitivity: alpha 0.5 (beta 0.01, gamma 0.9) gives 18.8%. Seasonal index (month / that year\'s monthly mean, averaged 2023-2025): Jan 0.74, Feb 0.82, Mar 0.99, Apr 1.00, May 1.06, Jun 1.12, Jul 1.10, Aug 1.05, Sep 1.08, Oct 1.09, Nov 1.01, Dec 0.95. Annual totals deliberately not printed (would be sums of published monthly parts). Lesson family: Holt-Winters exponential smoothing and forecast combination, screened free 25 September 2026.',
    requiredMentions: [
      '351,036',
      'Holt-Winters',
      '493,486',
      '420,639',
      'Abbey Mills Pumping Station',
      'House Mill',
      'Gallions Hotel',
      'Brick Lane Music Hall',
      'Hartmann Road'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Newham E09000025: 351,036 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000025&measures=20100' },
      { claim: 'Civil Aviation Authority UK airport data, monthly releases 2016-2025, Table 09 terminal passengers, London City.', url: 'https://www.caa.co.uk/data-and-analysis/uk-aviation-market/airports/uk-airport-data/' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Newham on 25 September 2026: 125 (4 I, 6 II*, 115 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'ONS Local Authority Districts December 2024 boundaries (BFC), Newham E09000025.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2024_Boundaries_UK_BFC/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint HUBSRA (Stratford), 25 September 2026: Central, Jubilee, DLR, Elizabeth line, Mildmay, c2c, Greater Anglia.', url: 'https://api.tfl.gov.uk/StopPoint/HUBSRA' },
      { claim: 'London City Airport address Hartmann Road, E16 2PX; postcodes.io places E16 2PX in Newham, Royal Albert ward.', url: 'https://api.postcodes.io/postcodes/E162PX' }
    ],
    rejectedClaims: [
      'Newham Council library list: newham.gov.uk returned HTTP 403 to our reader; not circumvented, so no libraries are named.',
      'Annual passenger totals for London City: CAA monthly rows summed by us would not be a CAA-published total, so only single months are printed.',
      'Why passengers were zero in April and May 2020 (closure dates, flight bans): not read at a primary source for this build, so the page states the CAA figures only.',
      'Olympic Park venues and their history: not verified at a primary source for this build and not used.',
      'Individual Newham schools and admissions: not read at their own sites for this build and not used.',
      'Census ethnicity, religion or country of birth for Newham: never a standout; used only to order the build.'
    ]
  }
};
