'use strict';
// Brighton and Hove (cg- city page, UK cluster Phase 4). Spine: a window that slides, not a block that jumps.
// Sliding windows over the ratified hourly ozone record at Brighton Preston Park (DEFRA UK-AIR, site BRT3,
// UKA00483, urban background, inside the Pavilion Building in Preston Park about 190 m from London Road, A23),
// yearly CSVs 2019 to 2025 read 22 September 2026 (file header: "All Data GMT hour ending"; scratchpad
// bhv/ozone.py). 61,368 hours, 58,022 ozone values present (94.5 percent), all status R (ratified). Running 8-hour
// mean by carried sum and carried count, valid only with at least 6 of 8 hours (DEFRA DAQI implementation report,
// April 2013: "6 hourly mean concentrations are required to calculate an 8-hour mean"): 61,361 windows, 58,053
// valid, 3,308 refused; the carried-sum result matches a from-scratch recomputation to within 2.04e-12; 0.013 s
// against 0.033 s on our laptop. Each window is assigned to the day on which it ends. Days whose top 8-hour mean,
// rounded once to an integer, is above 100 micrograms per cubic metre: 2019 14, 2020 30, 2021 5, 2022 13, 2023 13,
// 2024 6, 2025 13 (94 in all); above 120: 7, 14, 2, 6, 7, 1, 2. Top daily 8-hour means: 131.1 (21 Apr 2019), 161.6
// (11 Aug 2020), 123.7 (1 Jun 2021), 149.3 (12 Aug 2022), 142.0 (9 Sep 2023), 126.2 (26 Jun 2024), 128.3 (30 Apr
// 2025). Highest hourly value 175.5 in the hour ending 21:00 GMT on 24 Jun 2020. 2022 has 78 days with no valid
// window. Fixed blocks (hours ending 01-08, 09-16, 17-24) find 9, 18, 5, 12, 8, 4, 9 days, missing 5, 12, 0, 1, 5,
// 2, 4 of the sliding-window days (29 of 94). Rounding to one decimal and then to an integer changes the integer
// for 2,868 windows; two of them (120.453 in the windows ending 15:00 GMT on 14 Aug 2022 and 19:00 GMT on 25 Jun
// 2024) move from 120 to 121, across the DAQI boundary between bands 4 and 5; no daily verdict above 100 changes.
// Running mean first passes 100 a median of 4 hours after the first hourly value above 100 (90 days measurable).
// Top window end hour on exceedance days: 19:00 on 24 days, 20:00 on 20, 01:00 on 16 (those windows are mostly
// the previous evening); a start-day convention gives 12, 25, 5, 13, 12, 6, 11 days. Exceedance days by month:
// April 14, May 13, June 30, July 11, August 20, September 6.
// DEFRA, National air quality objectives (Air_Quality_Objectives_Update_20230403.pdf): Ozone, UK, "100 µg/m3 not
// to be exceeded more than 10 times a year", "8 hour mean"; European obligation "Target of 120 µg/m3 not to be
// exceeded by more than 25 times a year averaged over 3 years". DAQI page: ozone "Based on the running 8-hourly
// mean", band 4 Moderate 101-120. DAQI report: rounding "has to be the very last step" and done "only once";
// the 8-hour averaging time means an episode cannot be reported from measurements "until it is well established".
// Lesson family: sliding windows (carried sum and count, coverage rule, day assignment, rounding once) against
// fixed blocks. Screened 22 September 2026: no page on the site uses a sliding window or monotonic deque; Irish
// air-quality pages used data coverage and PM2.5 day counts, never an 8-hour window.
// Place facts read raw 22 September 2026: Census 2021 via Nomis, Brighton and Hove E06000043: TS001 277,103 usual
// residents, 268,598 in households, 8,505 in communal establishments; TS007A 17,763 aged 15 to 19 (6.4 percent),
// 27,920 aged 20 to 24 (10.1), 20,960 aged 25 to 29 (7.6), against England 5.7, 6.0, 6.6; aged 65 to 69 3.9 and
// 70 to 74 3.7 percent against 4.9 and 5.0; TS068 62,694 students of 265,352 aged 5 and over (23.6 percent,
// England 20.4); TS006 3,345.3 usual residents per square kilometre (England 433.5). Volk's Electric Railway
// Association, The Railway: opened 4 August 1883 by Brighton-born inventor Magnus Volk between the Aquarium and
// the Chain Pier; gauge widened from 2 ft to 2 ft 8.5 in for the 1884 extension to Paston Place; the Brighton and
// Rottingdean Seashore Electric Railway all but destroyed by a storm on the night of 4 December 1896; Volk born
// 1851, drove the first train from the new Black Rock station in May 1937 and died 13 days later.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'BRIGHTON AND HOVE', blurb: 'The seaside city, with a project that slides an eight-hour window along seven summers of ozone readings from Preston Park.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-brighton-and-hove',
  code: 'bhv',
  accent: '#157179',
  accentRationale: 'Brighton and Hove: a seafront teal from the solver (4.64:1 on the darkest paper tint, dE 6.0 from the nearest used accent), greener than the Glasgow and Aberdeen blues and brighter than any Phase 4 accent so far',
  pageType: 'city',
  place: {
    name: 'Brighton and Hove',
    eyebrow: 'Brighton and Hove, East Sussex',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Brighton and Hove' },
      { type: 'AdministrativeArea', name: 'East Sussex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Brighton and Hove, England',
  title: 'Best Coding Classes in Brighton and Hove | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Brighton and Hove learners aged 6 to 67, from Hove and Kemptown to Patcham. Your first lesson is free.',
  ogDescription: 'Coding and AI lessons for Brighton and Hove, on a page that slides an eight-hour window along seven years of hourly ozone readings from Preston Park.',
  twitterDescription: 'Brighton and Hove learners aged six to sixty-seven can study coding, Python and AI with us live online. The first lesson costs nothing.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '22 September 2026',
  courseSchema: {
    name: 'Brighton and Hove Online Coding, Maths and AI Lessons',
    description: 'Live online lessons in coding, Python, data, AI and mathematics for children, teenagers and adults in Brighton and Hove, taught in English in small level-based groups or one to one.'
  },

  h1: 'Coding classes in Brighton and Hove',
  capsuleQ: 'What are the best coding classes in Brighton and Hove?',
  capsule: 'The 2021 census counted 277,103 usual residents in Brighton and Hove, and 10.1% of them were aged 20 to 24, against 6.0% across England. In 1883 the Brighton-born inventor Magnus Volk opened an electric railway on the seafront that still runs today. We teach Brighton and Hove learners from six to sixty-seven over live video, in a group of five to ten matched by level or one to one, with teachers in India and lessons set in UK hours. Nothing is charged for the first lesson; from then on a group place costs USD 100 a month and one-to-one teaching USD 150 a month.',
  lead: 'A monitor on the roof of the pavilion in Preston Park has measured ozone every hour for years. DEFRA\'s objective for ozone is written as an eight-hour mean: 100 micrograms per cubic metre, not to be exceeded more than ten times a year. So which eight hours? Cut each day into three fixed blocks and the Preston Park record for 2019 to 2025 shows 65 days above 100. Slide an eight-hour window forward one hour at a time, as the standard intends, and the count rises to 94. The 29 missing days had their worst eight hours straddling a block boundary, such as 13:00 to 21:00, and the fixed blocks cut each one in two. Our teenagers build that window, with its rule for missing hours and its single rounding step, from 58,022 real readings.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Brighton and Hove.',

  picks: {
    eyebrow: 'Course picks for Brighton and Hove',
    h2: 'Four courses for a seaside city',
    intro: 'Pick by the learner\'s interests rather than their age alone. Each course starts with a free live lesson, and booking asks for no card.',
    items: [
      { course: 'maths-through-coding', band: 'Ages 8 to 12', note: 'Averages, tables and patterns learned by writing short programs, the arithmetic an eight-hour mean is made of.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Reading real CSV files, cleaning gaps and plotting time series in Python, the route to the Preston Park project.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from the first print statement to complete programs, including the loops and running totals a sliding window needs.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Rolling statistics, resampling and reporting rules for adults who work with sensor, sales or web data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Brighton and Hove today',
      h2: 'A young city by the sea',
      intro: 'Census 2021 figures for the Brighton and Hove council area, taken from Nomis and printed as the Office for National Statistics released them.',
      body: [
        { kind: 'table', caption: 'Brighton and Hove, Census 2021', head: ['Measure', 'Brighton and Hove', 'England'], rows: [
          ['Usual residents', '277,103', '56,490,048'],
          ['Living in households', '268,598', 'Not compared'],
          ['Living in communal establishments', '8,505', 'Not compared'],
          ['Aged 20 to 24', '27,920 (10.1%)', '6.0%'],
          ['Aged 15 to 19', '17,763 (6.4%)', '5.7%'],
          ['Aged 70 to 74', '3.7%', '5.0%'],
          ['Students among those aged 5 and over', '62,694 (23.6%)', '20.4%'],
          ['Usual residents per square kilometre', '3,345.3', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Early twenties', p: 'One resident in ten was aged 20 to 24 in 2021, and 7.6% were 25 to 29, both above the English shares of 6.0% and 6.6%.' },
          { h3: 'A city that studies', p: 'Of 265,352 residents aged five and over, 62,694 were schoolchildren or full-time students, 23.6% against 20.4% for England.' },
          { h3: 'Built tight to the shore', p: 'At 3,345.3 usual residents per square kilometre, the city is packed between the Downs and the Channel, far above England\'s 433.5.' }
        ] },
        { kind: 'p', text: 'Those students span every stage. A Year 5 pupil in Patcham might be animating a first Scratch sprite, a Year 11 student in Hove revising for GCSE Computer Science, and a graduate in Kemptown learning Python for a data job, each placed in a group of five to ten learners working at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'An electric seafront',
      h2: 'Magnus Volk and a railway on the shingle',
      intro: 'As told by the Volk\'s Electric Railway Association, which calls it the world\'s oldest operating electric railway.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '4 August 1883', p: 'Magnus Volk, born in Brighton in 1851, opened a short narrow gauge line along the seashore between the Aquarium and the Chain Pier. He was already known locally for the first house in the town lit by electricity.' },
          { h3: 'East to Paston Place', p: 'The line was so popular that it was extended for 1884, its gauge widened from 2 ft to 2 ft 8.5 in, and it reached Paston Place, still called Halfway by locals today.' },
          { h3: '4 December 1896', p: 'Volk\'s sea-going railway to Rottingdean, a car on stilts running on rails under the waves, was all but destroyed by a storm less than a week after it opened. He had it running again by July 1897.' }
        ] },
        { kind: 'p', text: 'We have no link with the Volk\'s Electric Railway Association. Volk belongs on this page because he treated the seafront as a place to test ideas and then kept a record of what the weather and the sea did to them. The project below does the same with a modern instrument, reading what the air over the city has recorded, hour by hour, for seven years.' },
        { kind: 'spec', title: 'Where the readings come from', p: 'Brighton Preston Park is an urban background site in the national monitoring network, with its inlet on the roof of the Pavilion Building and London Road about 190 metres away. DEFRA\'s UK-AIR service publishes its hourly ozone, nitrogen dioxide and particle readings as free yearly files, timed in GMT by the hour on which each reading ends.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Ozone over Preston Park, one eight-hour window at a time',
      intro: 'A sliding window keeps a running total, adds the newest hour, drops the oldest, and never adds up the same eight numbers twice.',
      body: [
        { kind: 'table', caption: 'Days at Brighton Preston Park whose highest eight-hour ozone mean was above 100 and above 120 micrograms per cubic metre, our count from the ratified hourly files', head: ['Year', 'Days above 100', 'Days above 120', 'Highest eight-hour mean', 'Fixed blocks would find'], rows: [
          ['2019', '14', '7', '131.1 on 21 April', '9'],
          ['2020', '30', '14', '161.6 on 11 August', '18'],
          ['2021', '5', '2', '123.7 on 1 June', '5'],
          ['2022', '13', '6', '149.3 on 12 August', '12'],
          ['2023', '13', '7', '142.0 on 9 September', '8'],
          ['2024', '6', '1', '126.2 on 26 June', '4'],
          ['2025', '13', '2', '128.3 on 30 April', '9']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Carry the sum', p: 'Keep a running total and a count of hours present. Each new hour is added, the hour that falls out of the back is subtracted, and the mean is one division away.' },
          { h3: '2. Refuse thin windows', p: 'DEFRA\'s rule needs six of the eight hours before an eight-hour mean counts. Of 61,361 windows between 2019 and 2025, 3,308 were refused for having fewer.' },
          { h3: '3. Round once, at the end', p: 'Keep full precision until the final comparison. Rounding to one decimal first and then to a whole number changed the result for 2,868 windows.' }
        ] },
        { kind: 'callout', h3: 'Why a block is the wrong shape', p: 'Ozone at this site tends to peak in the late afternoon and evening. The highest eight-hour window of an exceedance day most often ended at 19:00 GMT, which fixed blocks ending at 16:00 and 24:00 slice in half. That is why the blocks found 65 days above 100 and the sliding window found 94, and why 2020 alone lost twelve.' },
        { kind: 'p', text: 'Two windows show why rounding once matters. The eight hours ending at 15:00 GMT on 14 August 2022, and again at 19:00 GMT on 25 June 2024, averaged 120.453. Rounded once, that is 120, the top of the Moderate band 4 on DEFRA\'s air quality index. Rounded to 120.5 first and then again, it becomes 121 and jumps to band 5. DEFRA\'s own guidance warns about exactly this and says rounding must be done only once, as the very last step.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Averages that move',
      h2: 'Five decisions inside any rolling average',
      intro: 'Learned on ozone, then used on step counts, website traffic, shop sales, heart rate and every dashboard that shows a trailing figure.',
      body: [
        { kind: 'table', caption: 'What a sliding window forces a programmer to decide', head: ['Decision', 'The Preston Park answer', 'Get it wrong and'], rows: [
          ['Window length', 'Eight hours, as the objective states', 'The count answers a question nobody asked'],
          ['Minimum coverage', 'At least six of the eight hours present', 'Two readings pass for a whole working day'],
          ['Which day owns a window', 'The day on which the window ends', 'A late-evening peak moves into the wrong date'],
          ['When to round', 'Once, after all the arithmetic', 'A value slips across a band boundary'],
          ['Carried or recomputed', 'Carried sum, checked against a full recount', 'Slow code, or drift nobody notices']
        ] },
        { kind: 'p', text: 'The day rule is less obvious than it looks. On 16 exceedance days the highest window ended at 01:00, so seven of its eight hours belonged to the evening before. Assign each window to the day it starts instead and the seven-year total falls from 94 days to 84. Neither answer is a mistake. A report that does not say which rule it used is.' },
        { kind: 'p', text: 'There is a cost to smoothing too. On the 90 days we could measure, the eight-hour mean first passed 100 a median of four hours after the first single hour above 100. DEFRA\'s report on the index says the same thing in its own words: with an eight-hour averaging time, an episode cannot be reported from measurements until it is well established. A trailing window is honest about the past and always a little late about the present.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A paper strip eight squares long slid along a row of numbers, and the moment they see only two numbers change each step.' },
          { h3: 'Teenagers', p: 'Seven DEFRA files read in Python, a carried-sum window with a coverage rule, and both day conventions compared.' },
          { h3: 'Adults', p: 'Rolling metrics in SQL and pandas at work, with the window, coverage and rounding rules written down before anyone reads the chart.' }
        ] },
        { kind: 'p', text: 'We have no connection with DEFRA, the Volk\'s Electric Railway Association or Brighton and Hove City Council. The hourly readings are published free on UK-AIR and the census tables through Nomis; every window, count and comparison on this page is our own arithmetic, not an official compliance assessment.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a paper strip to a rolling average',
    intro: 'Use the age bands as a loose guide. The free lesson shows where a learner should actually begin.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Strips and totals', p: 'Adding small rows of numbers, sliding a card along them, and noticing that the new total needs just one addition and one subtraction.', courses: ['scratch-programming-complete-course', 'mental-maths-mastery-kids'] },
      { band: 'Ages 11 to 13', h3: 'Means and gaps', p: 'Working out averages in code, deciding what to do with a missing value, and plotting a week of readings.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Windows in Python', p: 'Carried sums, coverage rules and day assignment on seven years of real hourly data, checked against a slow recount.', courses: ['data-science-course-for-teens-python-data', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Rolling metrics at work', p: 'Window functions in SQL and rolling statistics in pandas, with their rules stated rather than left to library defaults.', courses: ['data-analysis-mastery-course-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A library call computes a rolling mean in one line. Why should a Brighton teenager write the loop?',
    intro: 'Because the one line hides every decision that changed the answer on this page.',
    p1: 'An AI assistant will happily produce a rolling average, and a data library will run it in a single call. Neither will ask how many hours may be missing, which day a midnight window belongs to, or when to round. A learner who has written the loop by hand knows those questions exist, and knows that 65 and 94 can both come from the same file.',
    p2: 'The same pattern sits under much of modern AI. Language models read text through a fixed window of context, streaming systems keep carried totals rather than recounting, and a model trained on smoothed data inherits whatever the smoothing hid. Learning to slide a window properly teaches that every summary of a moving signal is a choice, and that choices should be written down.',
    closer: 'So a Brighton teenager should still learn to program in 2026, in a city where an inventor put electric cars on the beach in 1883: the tools do the arithmetic, but somebody has to decide what the arithmetic is for.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Hove, Hanover or Rottingdean, from home',
    intro: 'Getting across Brighton and Hove after school can take longer than the lesson itself. Live online classes skip the journey.',
    cells: [
      { h3: 'Portslade to Saltdean', p: 'A learner at the western edge of Hove and another near the cliffs at Saltdean can sit in the same class without either catching a bus.' },
      { h3: 'Key Stages to A level', p: 'Reception and the four Key Stages, Year 9 options, then GCSE and A level: we use the stage names Brighton and Hove schools use, and every lesson is taught in English.' },
      { h3: 'A real first lesson', p: 'The free session works through a genuine task and finishes with a recommended level, course and weekly time. We never ask for card details to book it.' },
      { h3: 'Classmates at your level', p: 'Groups of five to ten learners who are working at the same stage, from Brighton and Hove, the rest of the UK and overseas, which keeps a sensible time available for each level.' },
      { h3: 'Two set lessons a week', p: 'Two fixed weekly lessons, about eight in a month, with school holidays and exam weeks planned with the teacher well ahead.' },
      { h3: 'One clock in India', p: 'India does not change its clocks, so it is four and a half hours ahead of Brighton in British Summer Time and five and a half in winter, which lets after-school and evening UK lessons fall within the teaching day.' }
    ],
    spec: { title: 'Along the Sussex coast', p: 'Families in Shoreham-by-Sea, Lewes, Burgess Hill or Worthing join exactly the same classes, since groups are formed by level and nobody needs to travel.' }
  },

  fees: {
    h2: 'Brighton and Hove lesson fees',
    intro: 'One free lesson first, then a single monthly fee.',
    first: 'A full lesson free of charge, finishing with a level, a suggested course and a weekly slot to consider.',
    group: 'Around eight live lessons each month in a group of five to ten learners at the same stage.',
    private: 'Around eight live lessons each month with a teacher who works with your learner alone.',
    closer: 'Families outside India all pay the same fee in US dollars, whether they live in Withdean or Whitehawk, and we do not publish prices in pounds. No charge is made until the free lesson has agreed a course and a time; the pricing page explains pausing, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews written by families, unedited',

  book: {
    h2: 'Book a free lesson for a Brighton and Hove learner',
    intro: 'The first task depends on level: a number-strip puzzle for a young child, a short Python program that averages a list for a beginner, or the Preston Park ozone files and a sliding window for a teenager ready for real data.',
    success: 'Thank you. We will contact you shortly to arrange a lesson for your Brighton and Hove learner.'
  },

  faq: {
    h2: 'Brighton and Hove coding class questions',
    intro: 'The questions Brighton and Hove families ask us most often.',
    items: [
      { q: 'How many people live in Brighton and Hove?', a: 'The 2021 census counted 277,103 usual residents in the Brighton and Hove council area, of whom 268,598 lived in households and 8,505 in communal establishments such as student halls and care homes.' },
      { q: 'How does Brighton and Hove compare with England?', a: 'In 2021, 10.1% of residents were aged 20 to 24 against 6.0% in England, 23.6% of those aged five and over were students against 20.4%, and the city had 3,345.3 residents per square kilometre against 433.5.' },
      { q: 'What is a sliding window?', a: 'A way of computing a figure over the most recent stretch of data, such as the last eight hours, by adding the newest value and removing the oldest at each step instead of adding everything up again.' },
      { q: 'Why did fixed blocks miss so many ozone days?', a: 'The worst eight hours often ran from mid-afternoon to evening, across the 16:00 boundary. Fixed blocks found 65 days above 100 micrograms per cubic metre between 2019 and 2025, where the sliding window found 94.' },
      { q: 'Where do the ozone readings come from?', a: 'DEFRA\'s UK-AIR service publishes the ratified hourly readings from the Brighton Preston Park monitoring site as free yearly files. Our analysis uses 58,022 hourly ozone values from 2019 to 2025.' },
      { q: 'Who was Magnus Volk?', a: 'A Brighton-born inventor who opened an electric railway on the seafront on 4 August 1883, according to the Volk\'s Electric Railway Association, which runs it today. We are not connected with the Association.' },
      { q: 'What times are Brighton and Hove lessons?', a: 'Weekday afternoons, evenings or weekends, at a UK time we settle during the free lesson. India is four and a half hours ahead of Brighton in summer and five and a half hours ahead in winter.' },
      { q: 'Is there a Modern Age Coders centre in Brighton and Hove?', a: 'No. We have no centre in Brighton and Hove and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Brighton and Hove lessons cost?', a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern cost USD 150 a month. We agree course, format and time before any payment.', boiler: true },
      { q: 'How are Brighton and Hove groups put together?', a: 'By level, pace and goals rather than age or address, with five to ten learners at one stage in each group. Where no group suits the learner\'s timetable, we offer one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'More of the south coast and beyond',
    html: 'West along the coast, the <a class="cg-inline-link" href="/best-coding-class-in-southampton">Southampton page</a> builds a hash table from the postcodes of the city where Ordnance Survey is based, and <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol</a> divides itself into library catchments with a Voronoi diagram. <a class="cg-inline-link" href="/best-coding-class-in-london">London</a>, an hour up the line, has a guide of its own. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out the school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every city we cover.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Brighton and Hove and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-southampton', label: 'Southampton' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-bhv .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.2vw, 2.7rem); }
.cg-root.cg-bhv .cg-hero h1 { font-weight: 650; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-bhv .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-bhv .cg-eyebrow { letter-spacing: 0.13em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-bhv .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-bhv .cg-grid-3 { gap: clamp(0.95rem, 2.3vw, 1.95rem); }
.cg-root.cg-bhv .cg-table th { letter-spacing: 0.03em; }
.cg-root.cg-bhv .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-bhv .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-bhv .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Brighton and Hove, Census 2021 via Nomis (E06000043): TS001 277,103 usual residents, 268,598 in households, 8,505 in communal establishments; TS007A 17,763 aged 15 to 19 (6.4 percent), 27,920 aged 20 to 24 (10.1 percent), 20,960 aged 25 to 29 (7.6 percent), against England 5.7, 6.0 and 6.6 percent; aged 70 to 74 3.7 percent against 5.0; TS068 62,694 students of 265,352 residents aged 5 and over (23.6 percent, England 20.4); TS006 3,345.3 usual residents per square kilometre (England 433.5). Volk\'s Electric Railway Association, The Railway: opened 4 August 1883 by Brighton-born inventor Magnus Volk (born 1851) between the Aquarium and the Chain Pier; first house in the town lit by electricity; gauge widened from 2 ft to 2 ft 8.5 in for the 1884 extension to Paston Place (locally Halfway); Brighton and Rottingdean Seashore Electric Railway all but destroyed by a storm on the night of 4 December 1896, running again by July 1897.',
    localProject: 'Ozone over Preston Park, one eight-hour window at a time. DEFRA UK-AIR ratified hourly data for Brighton Preston Park (BRT3, UKA00483, urban background), 2019 to 2025, read 22 September 2026: 61,368 hours, 58,022 ozone values. Carried-sum sliding 8-hour mean, valid with at least 6 of 8 hours (DEFRA DAQI report 2013): 61,361 windows, 58,053 valid, 3,308 refused; matches a full recount within 2.04e-12. Days with top 8-hour mean above 100 micrograms per cubic metre (rounded once): 14, 30, 5, 13, 13, 6, 13 (94); above 120: 7, 14, 2, 6, 7, 1, 2. Fixed blocks find 9, 18, 5, 12, 8, 4, 9 (65), missing 29 days. Double rounding changes 2,868 windows; 120.453 (14 Aug 2022 15:00 GMT and 25 Jun 2024 19:00 GMT) goes from 120 to 121 across the DAQI band 4 and 5 boundary. Running mean passes 100 a median of 4 hours after the first hourly value above 100 (90 days). Start-day convention gives 84 days against 94. Lesson family: sliding windows with coverage, day-assignment and single-rounding rules against fixed blocks; distinct from Sheffield least squares, Preston Theil-Sen and Manchester lagged correlation.',
    requiredMentions: [
      '277,103',
      '268,598',
      '265,352',
      '3,345.3',
      '27,920',
      '62,694',
      'Preston Park',
      'Magnus Volk',
      '58,022',
      'sliding window',
      '120.453',
      'Paston Place'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Brighton and Hove: 277,103 usual residents; 268,598 in households; 8,505 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000043' },
      { claim: 'Nomis, Census 2021 TS007A: Brighton and Hove and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000043,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Brighton and Hove 62,694 students of 265,352 aged 5 and over (23.6 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000043,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Brighton and Hove 3,345.3 and England 433.5 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E06000043,E92000001' },
      { claim: 'DEFRA UK-AIR, Brighton Preston Park site information: urban background, Pavilion Building, London Road about 190 m.', url: 'https://uk-air.defra.gov.uk/networks/site-info?site_id=BRT3' },
      { claim: 'DEFRA UK-AIR, hourly data files for Brighton Preston Park, 2019 to 2025 (GMT, hour ending, ratified).', url: 'https://uk-air.defra.gov.uk/data/flat_files?site_id=BRT3' },
      { claim: 'DEFRA, National air quality objectives: ozone 100 µg/m3 as an 8 hour mean, not to be exceeded more than 10 times a year; European target 120 µg/m3.', url: 'https://uk-air.defra.gov.uk/assets/documents/Air_Quality_Objectives_Update_20230403.pdf' },
      { claim: 'DEFRA, Daily Air Quality Index: ozone based on the running 8-hourly mean; band 4 Moderate 101 to 120.', url: 'https://uk-air.defra.gov.uk/air-pollution/daqi?view=more-info' },
      { claim: 'DEFRA, Update on Implementation of the DAQI (April 2013): 6 of 8 hourly means for an 8-hour mean; round only once, as the last step; averaging delays reporting of an episode.', url: 'https://uk-air.defra.gov.uk/assets/documents/reports/cat14/1304251155_Update_on_Implementation_of_the_DAQI_April_2013_Final.pdf' },
      { claim: 'Volk\'s Electric Railway Association, The Railway: 4 August 1883, Magnus Volk, gauge change, Paston Place, the 1896 storm.', url: 'https://volkselectricrailway.co.uk/about/the-railway/' }
    ],
    rejectedClaims: [
      'Legislation.gov.uk and EUR-Lex text of the day-assignment rule: both returned an empty 202 challenge, so the page states our own convention and shows the alternative rather than quoting the regulation.',
      'Any statement that Brighton and Hove failed or met the ozone objective: the counts are our arithmetic on one site, not an official compliance assessment.',
      'Health effects of ozone: excluded by the cluster rules, so the page describes measurement only.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables and money data: excluded by the cluster rules.',
      'Any affiliation with DEFRA, the Volk\'s Electric Railway Association or Brighton and Hove City Council.'
    ]
  }
};
