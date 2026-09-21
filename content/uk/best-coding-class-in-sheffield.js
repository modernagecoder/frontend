'use strict';
// Sheffield (cg- city page, UK cluster Phase 4). Spine: one record, many straight lines. Least-squares trends on
// the Met Office historic station record for Sheffield (131 m amsl; monthly from January 1883), read 21 September
// 2026 (scratchpad shf/trend.py). Temperature gaps: July 1918 to December 1919 and July to December 1923, so 1918,
// 1919 and 1923 are dropped: 140 complete years, 1883 to 2025 (2026 provisional, excluded). Annual mean = mean of
// monthly (tmax + tmin) / 2. OLS slopes per decade (standard error): from 1883 0.113 (0.011), r2 0.44, residual sd
// 0.53; from 1950 0.225 (0.027); from 1970 0.300 (0.040); from 1990 0.313 (0.076); from 2010 0.851 (0.243). Starts
// 1990 to 2011: slope from 0.261 (1997) to 0.851 (2010). Residuals from the 140-year line: 1940-1979 mean -0.19
// (35% above), 1980-1999 -0.23 (30% above), 2000-2025 +0.27 (81% above). Warmest complete years 2025 11.33, 2022
// 11.31, 2023 11.24; coldest 1892 7.94, 1888 8.15, 1963 8.37. First 30 complete years 9.04, last 30 10.50.
// Extrapolation to 2100: 140-year line 11.27, 1970 line 13.17 (shown only as a warning). Lesson family: least
// squares linear regression (closed-form slope, standard error, residuals, start-year sensitivity, extrapolation).
// Screened free site-wide on 21 September 2026 (least squares / linear regression: 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 for Sheffield E08000019 (556,521 usual
// residents; 535,893 in households, 96.3%; 20,628 in communal establishments, 3.7%), TS007A (32,018 aged 5 to 9,
// 5.8%; 37,455 aged 15 to 19, 6.7%; 50,872 aged 20 to 24, 9.1%; 40,536 aged 25 to 29, 7.3%; England 5.9, 5.7,
// 6.0 and 6.6%), TS068 (131,048 schoolchildren and full-time students of 526,342 aged 5 and over, 24.9%; England
// 20.4%). University of Sheffield, About (legal status from a Royal Charter granted in 1905) and Nobel laureates
// (six members of staff awarded a Nobel Prize; Sir Harry Kroto, BSc Chemistry 1961, PhD 1964, shared the 1996
// Nobel Prize in Chemistry for buckminsterfullerene). Sheffield Hallam University, About us (approximately 31,000
// students, nearly 4,000 staff). Sheffield FC home page (The World's First Football Club, Est. 1857). Blocked and
// not circumvented: Museums Sheffield and Sheffield Industrial Museums Trust (connection reset), Sheffield City
// Council (HTTP 202 challenge), Peak District National Park Authority facts page (HTTP 403).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'SHEFFIELD', blurb: 'A city of two universities and six Nobel laureates, with a project that fits straight lines to 140 years of its temperatures.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-sheffield',
  code: 'shf',
  accent: '#312556',
  accentRationale: 'Sheffield: a deep steel indigo from the solver (11.14:1 on every paper tint, dE 7.9 from the nearest used accent), cooler and darker than the Bradford claret and the Oxford petrol blue',
  pageType: 'city',
  place: {
    name: 'Sheffield',
    eyebrow: 'Sheffield, South Yorkshire, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'South Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Sheffield, England',
  title: 'Best Coding Classes in Sheffield | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Sheffield learners aged 6 to 67, from Hillsborough and Crookes to Ecclesall and Darnall. First lesson free.',
  ogDescription: 'Coding and AI lessons for Sheffield, on a page that fits straight lines to 140 years of the city\'s temperatures and shows how the start year changes the answer.',
  twitterDescription: 'Live online coding and AI lessons for Sheffield learners from six to sixty-seven, and the opening lesson is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Sheffield Live Online Coding, Data and AI Lessons',
    description: 'Coding, Python, AI, data and mathematics lessons for Sheffield children, teenagers and adults, taught live online in English in level-based groups or one to one.'
  },

  h1: 'Coding classes in Sheffield',
  capsuleQ: 'What are the best coding classes in Sheffield?',
  capsule: 'Sheffield counted 556,521 usual residents at the 2021 Census, with 9.1% aged 20 to 24 against 6.0% across England. The University of Sheffield, chartered in 1905, counts six members of its staff who have won a Nobel Prize, and Sheffield Hallam University describes a community of about 31,000 students. Modern Age Coders teaches Sheffield learners aged six to sixty-seven in live online lessons, in groups of five to ten at one level or one to one, with teachers in India and times fixed in UK hours. The first lesson is on us; after it, a group place is USD 100 a month and one-to-one teaching USD 150 a month.',
  lead: 'Draw one straight line through 140 years of Sheffield temperatures and it rises by about 0.11 degrees Celsius a decade. Draw it from 1970 instead and it rises 0.30 degrees a decade. Start in 2010 and it climbs 0.85. All three are honest least-squares fits to the same Met Office record for the city\'s station, 131 metres up, with annual means from 1883 to 2025 and three incomplete years left out. The method is one of the most widely used tools in data science: choose the line that makes the squared gaps between line and points as small as possible. The lesson lies in the choices around it. Pick a start year between 1990 and 2011 and the slope can be anything from 0.26 to 0.85 degrees a decade. That freedom is where honest analysis and cherry-picking part company, and telling them apart is the lesson Sheffield\'s weather teaches our teenage learners.',
  wa: 'Hello Modern Age Coders, I would like to arrange a free coding lesson for a learner in Sheffield.',

  picks: {
    eyebrow: 'Course picks for Sheffield',
    h2: 'Four courses for a city of careful measurement',
    intro: 'Start from the learner\'s interests. Each course opens with a free live lesson, and no card is needed to book.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', band: 'Middle school years', note: 'Ratios, first algebra and graphs, the ground on which gradients and trend lines are later built.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Pandas, real datasets and honest charts for teenagers who know basic Python, with a trend line fitted and then questioned.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', band: 'A level years', note: 'A level statistics, including correlation and interpreting a regression line in context, beside the pure maths behind it.' },
      { course: 'data-analytics-mathematics-masterclass', band: 'University and adult', note: 'Statistics, linear algebra and regression for adults who analyse data, the mathematics under every fitted line.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Sheffield today',
      h2: 'A large city with a clear peak in its early twenties',
      intro: 'Census 2021 for the Sheffield local authority, from the Office for National Statistics tables on Nomis.',
      body: [
        { kind: 'table', caption: 'Sheffield, Census 2021', head: ['Measure', 'Sheffield', 'England'], rows: [
          ['Usual residents', '556,521', 'Not compared'],
          ['In households', '535,893, 96.3%', 'Not compared'],
          ['In communal establishments', '20,628, 3.7%', 'Not compared'],
          ['Aged 5 to 9', '32,018, 5.8%', '5.9%'],
          ['Aged 15 to 19', '37,455, 6.7%', '5.7%'],
          ['Aged 20 to 24', '50,872, 9.1%', '6.0%'],
          ['Aged 25 to 29', '40,536, 7.3%', '6.6%'],
          ['Schoolchildren and full-time students, of 526,342 aged five and over', '131,048, 24.9%', '20.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A peak at 20 to 24', p: 'Residents aged 20 to 24 made up 9.1% of Sheffield against 6.0% nationally, and those aged 25 to 29 a further 7.3%.' },
          { h3: 'Children near the national share', p: 'Children aged 5 to 9 were 5.8% of residents, almost exactly England\'s 5.9%, so the student city sits on top of an ordinary family city.' },
          { h3: 'Study across the city', p: 'In 2021, 24.9% of residents aged five and over were schoolchildren or full-time students, compared with 20.4% in England.' }
        ] },
        { kind: 'p', text: 'That mix means Sheffield learners come at every stage: a seven-year-old in Walkley making a first animation, a Year 11 student in Gleadless preparing for GCSE Computer Science, a university student in Broomhill who wants Python for a dissertation, and an adult in Stocksbridge changing career. Each joins a group of five to ten at their own level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Universities, football and science',
      h2: 'Nobel laureates, an early football club and a long weather record',
      intro: 'From the University of Sheffield, Sheffield Hallam University and Sheffield FC.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1905', p: 'The University of Sheffield says its legal status derives from a Royal Charter granted that year. It counts six members of its staff who have been awarded a Nobel Prize.' },
          { h3: '1996', p: 'The University lists Sir Harry Kroto, who took his BSc in chemistry there in 1961 and his PhD in 1964, among its laureates; he shared that year\'s Nobel Prize in Chemistry for discovering buckminsterfullerene.' },
          { h3: '1857', p: 'Sheffield FC describes itself as the world\'s first football club, established in 1857.' }
        ] },
        { kind: 'p', text: 'Sheffield Hallam University describes itself as a community of approximately 31,000 students and nearly 4,000 staff. We have no connection with either university or with Sheffield FC. We mention them because this is a city used to careful measurement, from chemistry laboratories to a weather station with readings from 1883, and the project below is about using a long record with the same care.' },
        { kind: 'spec', title: 'Gaps in the record', p: 'The Met Office file has no temperatures for July 1918 to December 1919 or for July to December 1923. Rather than guess, the project leaves out 1918, 1919 and 1923 and fits its lines to the 140 complete years, stopping at 2025 because the 2026 months are still provisional.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One record, many straight lines',
      intro: 'Least squares finds the straight line that keeps the squared vertical gaps to the points as small as possible. We fitted it to Sheffield\'s annual mean temperature from several starting years.',
      body: [
        { kind: 'table', caption: 'Least-squares trend in Sheffield annual mean temperature to 2025, by starting year', head: ['Line starts', 'Complete years used', 'Slope per decade', 'Standard error'], rows: [
          ['1883', '140', '0.11 degrees', '0.01'],
          ['1950', '76', '0.23 degrees', '0.03'],
          ['1970', '56', '0.30 degrees', '0.04'],
          ['1990', '36', '0.31 degrees', '0.08'],
          ['2010', '16', '0.85 degrees', '0.24']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Average each year', p: 'Turn each complete year\'s twelve monthly figures into one annual mean, halfway between the average daily maximum and the average daily minimum.' },
          { h3: '2. Fit the line', p: 'Least squares has an exact formula: the slope is the covariance of year and temperature divided by the variance of year. A dozen lines of Python compute it with no library at all.' },
          { h3: '3. Measure the fit', p: 'Across all 140 years the line explains 44% of the year-to-year variation, and a typical year sits about half a degree away from it.' }
        ] },
        { kind: 'callout', h3: 'Pick your start, pick your answer', p: 'Start anywhere from 1990 to 2011 and the slope ranges from 0.26 degrees a decade, starting in 1997, to 0.85, starting in 2010. The short windows also carry far larger standard errors: 0.24 for the line from 2010, close to a third of its slope. A chart that shows only the steepest window, without saying why it starts there, has chosen its conclusion first.' },
        { kind: 'p', text: 'Extending lines shows the same danger. The line fitted to all 140 years reaches 11.27 degrees by 2100; the line fitted from 1970 reaches 13.17. Both fit their own data, yet they disagree by nearly two degrees, because a straight line knows nothing about the physics of climate. Learners therefore treat a fitted line as a description of the past, never a forecast. As for the record itself, the three warmest complete years are 2025 at 11.33 degrees, 2022 at 11.31 and 2023 at 11.24, and the last 30 complete years average 10.50 degrees against 9.04 for the first 30.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Fitting lines honestly',
      h2: 'Five rules for a trend line you can defend',
      intro: 'Practised on temperatures, used afterwards on sales, results over time, fitness tracking and any chart with a line drawn through it.',
      body: [
        { kind: 'table', caption: 'Drawing a trend line without fooling anyone', head: ['Rule', 'What it looks like', 'What it prevents'], rows: [
          ['Justify the start', 'Say why the line begins where it does, and show other starts beside it', 'A steep line made by picking a convenient first year'],
          ['Report the uncertainty', 'Give a standard error with every slope', 'A 16-year slope shown as confidently as a 140-year one'],
          ['Show the residuals', 'Plot how far each year sits above or below the line', 'A line that hides a curve or a sudden jump'],
          ['Handle gaps openly', 'Drop incomplete years and name them', 'Half-years averaged as if they were whole'],
          ['Do not extend blindly', 'Treat the line as a summary of the data it was fitted to', 'A straight-line guess passed off as a prediction']
        ] },
        { kind: 'p', text: 'The third rule catches something real in this record. Residuals from the 140-year line are not random scatter: from 1940 to 1999 most years sit below the line, and since 2000, 81% sit above it. One straight line is too simple for the whole period, and the honest response is to say so and show the shorter lines beside the long one, not to hide the pattern.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Reading a line graph of the seasons, spotting the warmest and coldest months, and drawing a line by eye through some dots.' },
          { h3: 'Teenagers', p: 'The Met Office file parsed with its gaps handled, least squares coded from the formula, and every start year tried and reported.' },
          { h3: 'Adults', p: 'Trend lines at work with uncertainty, residual checks and stated start points, before anyone draws conclusions from them.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Met Office, the University of Sheffield, Sheffield Hallam University or Sheffield FC. The station record is published for public use; the lines, slopes and residuals are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a line drawn by eye to least squares',
    intro: 'Ages are only a first guess; the free lesson settles the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Reading line graphs', p: 'Temperatures through the year on a simple chart, the highest and lowest points, and a line drawn by eye.', courses: ['elementary-mathematics-complete-masterclass', 'mental-maths-mastery-kids'] },
      { band: 'Ages 11 to 13', h3: 'Plotting and gradients', p: 'Coordinates, gradients and a first program that plots points and draws a straight line through them.', courses: ['comprehensive-middle-school-mathematics-mastery', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Least squares in Python', p: 'The slope formula derived and coded, standard errors computed and start-year sensitivity explored on real data.', courses: ['data-science-course-for-teens-python-data', 'a-level-maths-course-pure-mechanics-statistics'] },
      { band: 'Ages 18 to 67', h3: 'Regression at work', p: 'Regression with uncertainty and diagnostics, and the discipline to report what a fitted line can and cannot say.', courses: ['data-analytics-mathematics-masterclass', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will draw a trend line in a second. Why should a Sheffield teenager fit one by hand?',
    intro: 'Because every trend line carries decisions the chart does not show.',
    p1: 'Ask an AI tool whether Sheffield is warming and how fast, and it may fit a line and quote a figure. Which figure depends on where the line starts, and the tool may not say. A learner who has fitted lines from every start year knows that 0.11 and 0.85 degrees a decade can both come from one honest record, and knows to ask which window was used and why.',
    p2: 'Least squares is also where much of machine learning begins. Training a model usually means adjusting its numbers to make some measure of error as small as possible, and the simplest case of that idea is exactly this straight line. A teenager who can derive it and code it has met the core of how models learn.',
    closer: 'So a Sheffield teenager should still learn to program in 2026, in a city whose weather readings go back to 1883: software will fit any line you ask for, and knowing which lines are honest is what makes the answer worth having.',
    blogAnchor: 'why learning to code is still worth it for teenagers in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Hillsborough, Ecclesall or Darnall, with no hill to climb',
    intro: 'Sheffield\'s hills turn short journeys into long ones; a live online lesson skips them entirely.',
    cells: [
      { h3: 'No climb, no commute', p: 'A learner in Crookes and another in Handsworth can share a lesson without either facing a single hill or bus.' },
      { h3: 'English school stages', p: 'Reception, Key Stages 1 to 4, Year 9 options, GCSEs and A levels, named the way Sheffield schools name them, with every lesson in English.' },
      { h3: 'A free lesson with a plan', p: 'The first lesson teaches a real task and ends with a suggested level, course and weekly slot. Booking asks for no card.' },
      { h3: 'Placed by level', p: 'Five to ten learners at one stage, from Sheffield, the rest of the UK and abroad, so every level can find a time that suits.' },
      { h3: 'Fixed twice-weekly slots', p: 'Two lessons a week at the same times, about eight a month, with holiday and exam breaks agreed with the teacher in advance.' },
      { h3: 'Teachers on Indian time', p: 'Our teachers work in India Standard Time, which never changes: four and a half hours ahead of Sheffield in summer and five and a half in winter, so after-school and evening lessons fit their day.' }
    ],
    spec: { title: 'Two universities, one timetable', p: 'Students at either university can fit evening or weekend lessons around lectures, and pause for exam periods by agreement with the teacher, returning at the same level.' }
  },

  fees: {
    h2: 'Sheffield lesson fees',
    intro: 'A free start and two simple monthly options.',
    first: 'A full lesson for nothing, ending with a level, a recommended course and a proposed weekly time.',
    group: 'Roughly eight live lessons a month in a group of five to ten learners at one level.',
    private: 'Roughly eight live lessons a month in which the teacher works with your learner alone.',
    closer: 'Every family outside India pays one US dollar fee, so a household in Dore pays exactly what a household in Totley pays, and we publish no prices in pounds. Nothing is billed until the free lesson has agreed a course and a time; the pricing page covers pausing, missed lessons and moving between group and one-to-one teaching.'
  },

  reviewsH2: 'Six family reviews from Google, reprinted exactly',

  book: {
    h2: 'Arrange a free first lesson in Sheffield',
    intro: 'We choose the opening task by level: reading a weather chart for a young child, a first Python program that plots points, or the Met Office Sheffield record and a least-squares fit for a teenager ready for real data.',
    success: 'Thank you. Our team will be in touch soon to set up a Sheffield lesson.'
  },

  faq: {
    h2: 'Sheffield coding class questions',
    intro: 'What Sheffield families ask us most.',
    items: [
      { q: 'How many people live in Sheffield?', a: 'The 2021 Census counted 556,521 usual residents in the Sheffield local authority: 535,893 in households and 20,628, or 3.7%, in communal establishments.' },
      { q: 'How many Sheffield residents are students?', a: 'In 2021, 131,048 of the 526,342 residents aged five and over were schoolchildren or full-time students, 24.9% against 20.4% in England. Sheffield Hallam University alone describes a community of about 31,000 students.' },
      { q: 'What is least squares?', a: 'A method for fitting a straight line to data by making the sum of the squared vertical gaps between the points and the line as small as possible. It is one of the foundations of statistics and machine learning.' },
      { q: 'How fast has Sheffield warmed?', a: 'It depends on the window. Fitted to all 140 complete years from 1883 to 2025, the Met Office record rises about 0.11 degrees Celsius a decade; from 1970 it rises about 0.30. Short windows give larger and much less certain figures.' },
      { q: 'Which were Sheffield\'s warmest years?', a: 'In the Met Office station record, the warmest complete years are 2025 at 11.33 degrees, 2022 at 11.31 and 2023 at 11.24, measured as the average of monthly daily maxima and minima.' },
      { q: 'What links Sheffield to the Nobel Prize?', a: 'The University of Sheffield counts six members of its staff who have won a Nobel Prize, and lists chemistry graduate Sir Harry Kroto, who shared the 1996 Nobel Prize in Chemistry, among its laureates. We are not connected with the University.' },
      { q: 'When are Sheffield lessons?', a: 'After school, in the evening or at weekends, set in UK time during the free lesson. Our teachers are four and a half hours ahead of Sheffield in summer and five and a half in winter.' },
      { q: 'Does Modern Age Coders have a centre in Sheffield?', a: 'No. There is no Sheffield centre and no UK premises; every lesson is live online. Learners need a computer with sound and a reliable connection, and our phone number is an Indian one.', boiler: true },
      { q: 'How much do Sheffield lessons cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How do you group Sheffield learners?', a: 'By ability, pace and goals, not age or postcode, with five to ten learners at one level. Where no group meets at a suitable time, we propose one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'Yorkshire and the Midlands',
    html: 'Up the road, the <a class="cg-inline-link" href="/best-coding-class-in-bradford">Bradford page</a> takes a random walk through its rain, and <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> samples a footfall record fairly. To the south, <a class="cg-inline-link" href="/best-coding-class-in-derby">Derby</a> finds the busiest minute on its buses. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out the school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> lists every UK page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Sheffield and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-bradford', label: 'Bradford' },
    { href: '/best-coding-class-in-derby', label: 'Derby' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-shf .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.65rem); }
.cg-root.cg-shf .cg-hero h1 { font-weight: 700; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-shf .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-shf .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-shf .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.016em; }
.cg-root.cg-shf .cg-grid-3 { gap: clamp(1.2rem, 2.5vw, 2.25rem); }
.cg-root.cg-shf .cg-table th { letter-spacing: 0.03em; }
.cg-root.cg-shf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-shf .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-shf .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Sheffield, Census 2021 via Nomis: TS001 Sheffield local authority (E08000019) 556,521 usual residents, 535,893 in households (96.3 percent), 20,628 in communal establishments (3.7 percent); TS007A 32,018 aged 5 to 9 (5.8 percent), 37,455 aged 15 to 19 (6.7 percent), 50,872 aged 20 to 24 (9.1 percent), 40,536 aged 25 to 29 (7.3 percent), against England 5.9, 5.7, 6.0 and 6.6 percent; TS068 131,048 schoolchildren and full-time students of 526,342 residents aged 5 and over, 24.9 percent, against 20.4 percent in England. University of Sheffield: Royal Charter granted in 1905; six members of staff awarded a Nobel Prize; Sir Harry Kroto (BSc Chemistry 1961, PhD 1964) shared the 1996 Nobel Prize in Chemistry for buckminsterfullerene. Sheffield Hallam University: approximately 31,000 students and nearly 4,000 staff. Sheffield FC: the world\'s first football club, established 1857 (its own description).',
    localProject: 'One record, many straight lines. Met Office historic station data, Sheffield, 131 m amsl, read 21 September 2026; temperature gaps July 1918 to December 1919 and July to December 1923; 140 complete years 1883 to 2025. Annual mean of monthly (tmax + tmin) / 2. OLS slope per decade (standard error): from 1883 0.113 (0.011), r2 0.44, residual sd 0.53; 1950 0.225 (0.027); 1970 0.300 (0.040); 1990 0.313 (0.076); 2010 0.851 (0.243). Starts 1990 to 2011: 0.261 (1997) to 0.851 (2010). Residuals: 1940-1979 mean -0.19, 1980-1999 -0.23, 2000-2025 +0.27 (81 percent above). Warmest 2025 11.33, 2022 11.31, 2023 11.24. First 30 years 9.04, last 30 10.50. Extrapolated to 2100 (warning only): 11.27 and 13.17. Lesson family: least squares linear regression; distinct from moving averages, homogeneity and regression to the mean.',
    requiredMentions: [
      '556,521',
      '535,893',
      '20,628',
      '50,872',
      '131,048',
      '526,342',
      'Kroto',
      'buckminsterfullerene',
      'Sheffield FC',
      'least squares',
      '11.33',
      'Sheffield Hallam'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Sheffield: 556,521 usual residents; 535,893 in households; 20,628 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E08000019' },
      { claim: 'Nomis, Census 2021 TS007A: Sheffield and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E08000019,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Sheffield 131,048 students of 526,342 aged 5 and over (24.9 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E08000019,E92000001' },
      { claim: 'Met Office historic station data, Sheffield: monthly temperatures from 1883, gaps and provisional months.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/sheffielddata.txt' },
      { claim: 'University of Sheffield, About: Royal Charter granted in 1905.', url: 'https://www.sheffield.ac.uk/about' },
      { claim: 'University of Sheffield, Nobel laureates: six staff Nobel Prizes; Sir Harry Kroto, 1996 Chemistry.', url: 'https://www.sheffield.ac.uk/research/people/nobel-laureates' },
      { claim: 'Sheffield Hallam University, About us: approximately 31,000 students and nearly 4,000 staff.', url: 'https://www.shu.ac.uk/about-us' },
      { claim: 'Sheffield FC: The World\'s First Football Club, Est. 1857.', url: 'https://www.sheffieldfc.com/' }
    ],
    rejectedClaims: [
      'Stainless steel, Kelham Island and Weston Park museum facts: Museums Sheffield and Sheffield Industrial Museums Trust reset the connection, so nothing from them is stated, including the station\'s site name.',
      'Peak District share of the city: the National Park Authority facts page returned HTTP 403 and the council site a 202 challenge, so not stated.',
      'Any climate forecast: extrapolated lines are shown only to warn against extrapolation.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Met Office, the University of Sheffield, Sheffield Hallam University or Sheffield FC.'
    ]
  }
};
