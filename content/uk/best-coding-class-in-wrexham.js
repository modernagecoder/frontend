'use strict';
// Wrexham (cg- city page, UK cluster Phase 4, Wales). Spine: has Wrexham's air got cleaner every year, or only on the
// whole? Isotonic regression (pool-adjacent-violators) on annual mean nitrogen dioxide at the Welsh Air Quality Network
// site 'Wrexham' (WREX, 53.042282 N, 3.002829 W, about 0.8 km from the Open Names point for Wrexham; hourly data 2005 to
// 2025 from the network's openair R data files, read 23 September 2026 and converted with R 4.2.0; scratchpad wrx/iso.py,
// ls.py). Times: the R object's time zone is GMT, and openair documents its data as 'date beginning', i.e. hour beginning;
// NO2 in ug/m3 per the openair importUKAQ documentation. 174,910 hourly values of 184,080 hours (5.0 percent missing);
// data capture by year 80 to 99 percent (2019 80, 2016 84). Annual means (ug/m3): 2005 19.0, 2006 20.8, 2007 19.6, 2008
// 20.3, 2009 21.3, 2010 24.2, 2011 19.2, 2012 20.2, 2013 21.8, 2014 21.1, 2015 19.0, 2016 18.8, 2017 16.5, 2018 18.2,
// 2019 16.4, 2020 12.9, 2021 14.7, 2022 14.2, 2023 13.4, 2024 13.3, 2025 14.2. Rises year on year: 9 of 20; largest into
// 2010 (+2.9). Non-increasing isotonic fit: 2005-2010 20.85; 2011-2014 20.54; 2015 19.00; 2016 18.83; 2017-2018 17.32;
// 2019 16.43; 2020-2022 13.92; 2023-2025 13.65. R2 isotonic 0.884, straight line 0.682 (slope -0.432 per year).
// Permutation (10,000 random orderings, isotonic R2 as high): 0. Weighting years by hours measured: blocks unchanged,
// values within 0.04. Context from all hours: mean by hour (GMT, hour beginning) highest 07:00 25.9, lowest 03:00 8.8;
// by weekday Friday 19.9, Sunday 13.2. A Lomb-Scargle periodogram was also run (daily, half-daily, weekly and yearly
// peaks) but not used on the page: the Liverpool page already teaches periodograms.
// Lesson family: isotonic regression, pool-adjacent-violators algorithm, monotone versus linear fits, permutation check.
// Screened 23 September 2026: isotonic and pool-adjacent 0 hits in src/pages and content/uk.
// Heritage read raw 23 September 2026: gov.uk List of Cities (updated 29 August 2022), Wales: Bangor, Cardiff, Newport,
// St Asaph, St Davids, Swansea, Wrexham. Cadw full reports: 1769 Parish Church of St Giles, Grade I, designated 30 May
// 1951: principally late 15th century, tower about 1506 to 1520, arcades from a 14th-century church; restorations 1867
// (Benjamin Ferrey), 1894, 1903-4 (H A Prothero). 1770 Tomb of Elihu Yale, Grade II*: Yale died 1721, founder of Yale
// University; inscription 'buried the twenty second of July' 1721; restored 1820, 1874; Yale lived at Plas Grono in the
// parish of Wrexham late in life. 1774 St Giles' Churchyard Gates, Grade II*.
// Census 2021 via Nomis: Wrexham county borough W06000006 135,117 usual residents, 24,704 of 128,119 aged 5 and over in
// full-time education (19.3 percent), 268.2 per square km, 6,998 aged under 5 of 135,114 (5.2 percent). MSOAs (House of
// Commons Library names): Town North, University and Rhos-ddu W02000085 8,923, 283 communal, 1,506 of 8,556 (17.6
// percent), 3,270.3; Caia Park W02000087 6,861, 1,752 of 6,372 (27.5 percent), 4,890.9, 490 aged under 5 of 6,860 (7.1
// percent); Wrexham West W02000088 8,678, 1,611 of 8,217 (19.6 percent), 2,082.7. Wales 19.9 percent, 149.9, 5.0
// percent under 5.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'WREXHAM', blurb: 'The North Wales city around St Giles\' tower, with a project that asks whether its air has got cleaner every single year or only on the whole.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-wrexham',
  code: 'wrx',
  accent: '#18548B',
  accentRationale: 'Wrexham: a clear mid blue, from the solver (6.36:1 on every paper tint, dE 6.8 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Wrexham',
    eyebrow: 'Wrexham, North Wales',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Wrexham County Borough' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wrexham',
  title: 'Best Coding Classes in Wrexham | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Wrexham learners aged 6 to 67, from Rhosddu and Hightown to Gwersyllt and Borras. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Wrexham, on a page that fits an isotonic regression to 21 years of the city\'s air readings to see whether it really cleaned up every year.',
  twitterDescription: 'Wrexham learners from six to sixty-seven can study coding, Python, maths and AI with us in live online lessons, beginning with a free one.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Wrexham Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, statistics and environmental data, mathematics and AI taught live online in English to Wrexham children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Wrexham',
  capsuleQ: 'What are the best coding classes in Wrexham?',
  capsule: 'Wrexham county borough had 135,117 usual residents at the 2021 census, and the Caia Park area had 4,890.9 people per square kilometre. Wrexham appears among the Welsh cities on the UK government\'s List of Cities, last updated on 29 August 2022. Wrexham learners aged six to sixty-seven study with our teachers in India over live video, in one-to-one lessons or in classes of five to ten at one level, at times set around the Welsh school day and working week. We charge nothing for the first lesson; afterwards a group place is USD 100 a month and a private teacher USD 150 a month.',
  lead: 'A monitoring station called Wrexham, run by the Welsh Air Quality Network less than a kilometre from the city centre, has published hourly nitrogen dioxide readings since at least 2005. Its yearly average fell from 20.2 micrograms per cubic metre over the first five years to 14.0 over the last five. But did it fall every year? No: in 9 of the 20 steps from one year to the next it rose. Our Wrexham project uses isotonic regression, which finds the closest curve that never goes up, to separate the long fall from the year-to-year wobble. That curve explains 88.4% of the variation, a straight line only 68.2%, and it shows the fall levelling off after 2020.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Wrexham.',

  picks: {
    eyebrow: 'Course picks for Wrexham',
    h2: 'Four courses for the city of St Giles',
    intro: 'Pick the course closest to what the learner already enjoys. All four open with a free live lesson, and you can book it without giving any card details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, from games to a weather chart that plots a reading every day.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First Python with lists, averages and simple charts, the tools for turning thousands of readings into a clear picture.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Statistics on real data in Python, including fitting curves that respect a rule, such as never rising.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Data analysis for adults who report on improvement over time and need to separate a real trend from yearly noise.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wrexham today',
      h2: 'A young city with a busy centre',
      intro: 'Office for National Statistics census results for 2021, drawn from Nomis, for three central middle-layer areas as the House of Commons Library names them, set beside the county borough and Wales.',
      body: [
        { kind: 'table', caption: 'Central Wrexham, 2021 census', head: ['Middle-layer area', 'Residents', 'Share of over-fives in full-time education', 'Density per square kilometre'], rows: [
          ['Town North, University and Rhos-ddu', '8,923', '17.6%', '3,270.3'],
          ['Caia Park', '6,861', '27.5%', '4,890.9'],
          ['Wrexham West', '8,678', '19.6%', '2,082.7'],
          ['Wrexham county borough', '135,117', '19.3%', '268.2'],
          ['Wales', '3,107,494', '19.9%', '149.9']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Caia Park', p: 'The most closely packed of the three areas, with 1,752 of its 6,372 residents aged five and over in full-time education, and 7.1% of residents under five.' },
          { h3: 'Town North', p: 'Town North, University and Rhos-ddu had 283 people in communal establishments and 1,506 residents aged five and over in full-time education.' },
          { h3: 'The county borough', p: 'Across Wrexham county borough, 5.2% of residents were under five in 2021, against 5.0% in Wales, at 268.2 people per square kilometre.' }
        ] },
        { kind: 'p', text: 'The census counts schoolchildren and students together as people in full-time education, and each percentage uses its own table\'s total. Our Wrexham classes draw on the city and the villages around it. A Rhosnesni eight-year-old coding a first game, a Year 11 student from Borras preparing for WJEC GCSE Computer Science and a Gwersyllt adult learning Python to automate spreadsheets could each join a different class, grouped by level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'St Giles and Elihu Yale',
      h2: 'A tower of the early 1500s and an American connection',
      intro: 'From the UK government\'s List of Cities and from Cadw\'s full listing reports for the Parish Church of St Giles (record 1769) and the tomb of Elihu Yale (record 1770).',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'About 1506 to 1520', p: 'Cadw dates St Giles mainly to the late 15th century, culminating in the tower of about 1506 to 1520, with arcades kept from a 14th-century church. It is listed at Grade I.' },
          { h3: '22 July 1721', p: 'The churchyard tomb of Elihu Yale, whom Cadw names as the founder of Yale University, is inscribed with his burial on that day. Cadw records that he lived at Plas Grono, in the parish of Wrexham, late in life.' },
          { h3: 'A city of Wales', p: 'The UK government\'s List of Cities, updated on 29 August 2022, names seven cities in Wales: Bangor, Cardiff, Newport, St Asaph, St Davids, Swansea and Wrexham.' }
        ] },
        { kind: 'p', text: 'Cadw records restorations of St Giles in 1867 to plans by Benjamin Ferrey, in 1894 and in 1903 and 1904 by H A Prothero, and notes that the Yale tomb was restored in 1820 and again in 1874. It also lists the churchyard gates at Grade II*. We have no connection with Cadw, the church or the UK government, and the history here is taken from their published records.' },
        { kind: 'spec', title: 'Where the air data comes from', p: 'The Welsh Air Quality Network publishes hourly readings for its Wrexham site as R data files, the format read by the openair package. The files give times in Greenwich Mean Time, and openair documents each value as belonging to the hour that begins at the stated time. Nitrogen dioxide is given in micrograms per cubic metre.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Did Wrexham\'s air get cleaner every year?',
      intro: 'Isotonic regression fits the closest curve that obeys one rule, here that it never goes up. Where the real averages break the rule, the pool-adjacent-violators algorithm merges neighbouring years into a block and gives the whole block its average, repeating until no block is higher than the one before it.',
      body: [
        { kind: 'table', caption: 'Nitrogen dioxide at the Welsh Air Quality Network\'s Wrexham site: annual means pooled by isotonic regression (never rising), micrograms per cubic metre', head: ['Years pooled together', 'Fitted level', 'What the pooling hides'], rows: [
          ['2005 to 2010', '20.85', 'A climb to 24.2 in 2010'],
          ['2011 to 2014', '20.54', 'Rises in 2012 and 2013'],
          ['2015', '19.00', 'Nothing: already lower'],
          ['2016', '18.83', 'Nothing: already lower'],
          ['2017 to 2018', '17.32', 'A rise from 16.5 to 18.2'],
          ['2019', '16.43', 'Nothing: already lower'],
          ['2020 to 2022', '13.92', 'A rise from 12.9 to 14.7 in 2021'],
          ['2023 to 2025', '13.65', 'A rise to 14.2 in 2025']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Average each year', p: 'Turn 174,910 hourly readings into 21 yearly averages. Every year has at least 80% of its hours measured, so no year rests on a handful of days.' },
          { h3: '2. Pool the violators', p: 'Walk along the years. Whenever a year is higher than the one before, merge the two and average them, then check backwards again. What is left is a staircase that only steps down.' },
          { h3: '3. Compare with a line', p: 'The staircase explains 88.4% of the variation between years; the least-squares straight line, falling 0.432 a year, explains 68.2%. The staircase shows where the fall happened and where it stalled.' }
        ] },
        { kind: 'callout', h3: 'Is the staircase just flexible?', p: 'A curve with more steps will always fit better than a straight line, so a high score alone proves little. The fair test is to shuffle the 21 yearly averages into random order and fit the staircase again. Out of 10,000 shuffles, none fitted as well as the real sequence. The downward order is genuine, not a product of the method\'s freedom. Weighting each year by the hours actually measured changes the fitted levels by 0.04 at most.' },
        { kind: 'p', text: 'The staircase tells a clear story. Levels stayed around 20 to 21 from 2005 to 2014, fell in stages to 16.43 in 2019, and dropped to about 14 from 2020 onwards, where they have stayed: the last two blocks differ by only 0.27. So the air at this site has become cleaner over two decades, but not every year, and not much since 2020. The hourly data show why readings move within each day too: across all 21 years, the hour beginning 07:00 GMT averaged 25.9 and the hour beginning 03:00 averaged 8.8, while Sundays averaged 13.2 against 19.9 on Fridays.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Monotone trends',
      h2: 'Five checks before saying something improved every year',
      intro: 'Learned on Wrexham\'s air, then used for waiting times, energy use, error rates, sales and any record where people claim a steady improvement.',
      body: [
        { kind: 'table', caption: 'Decisions behind the Wrexham air study', head: ['Question', 'For the Wrexham readings', 'What goes wrong if you skip it'], rows: [
          ['Is each year well measured?', 'At least 80% of hours in every year', 'A year of scattered days treated as complete'],
          ['What rule is being tested?', 'Never rising, fitted by pool-adjacent-violators', 'A wobbly line read as steady improvement'],
          ['Is the fit better than chance?', '10,000 shuffled orderings', 'A flexible curve mistaken for a strong trend'],
          ['What time are the readings in?', 'GMT, hour beginning, from the openair documentation', 'Rush hours shifted by an hour in summer'],
          ['Where did the change stop?', 'Last two blocks 0.27 apart', 'An old improvement reported as still going']
        ] },
        { kind: 'p', text: 'The fourth row matters for the hourly patterns. The readings are stamped in Greenwich Mean Time, so the busiest hour, beginning 07:00 GMT, is 08:00 on a Wrexham clock in summer. Reading GMT as local time would move every summer rush hour by sixty minutes.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Recording a number each day, drawing it as a line and colouring the days when it went up instead of down.' },
          { h3: 'Teenagers', p: 'Averages, isotonic regression with pool-adjacent-violators and permutation tests in Python on 21 years of real readings.' },
          { h3: 'Adults', p: 'Testing claims of steady improvement at work, with the rule stated, the fit checked against chance and the stall points shown.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Welsh Air Quality Network, Cadw, St Giles\' Church or Wrexham County Borough Council. The readings, listing reports and census tables are published openly; the averages, isotonic fits and shuffles on this page are our own analysis, and nothing here is health advice.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From daily tallies to isotonic regression',
    intro: 'Ages are approximate; the free lesson shows where a learner should start.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Ups and downs', p: 'Recording numbers, drawing them as bars in block code and spotting where they rise and fall.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Averages in Python', p: 'Lists, loops and yearly averages in Python, with charts of how a measurement changes over time.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Fits with rules', p: 'Isotonic regression, straight-line fits and permutation tests on Welsh Air Quality Network data.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Improvement claims', p: 'Checking whether a process has really improved every period, with honest tests and clear charts.', courses: ['data-analysis-mastery-course-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI will happily say a number is falling. Why should a Wrexham teenager check how?',
    intro: 'Because falling on the whole and falling every year are different claims, and the difference matters to anyone reporting progress.',
    p1: 'Give an AI assistant 21 yearly averages and it may well report a steady decline of 0.432 a year. That line hides nine years when the reading rose and the stall since 2020. A learner who has run pool-adjacent-violators by hand sees exactly which years broke the pattern and asks about them.',
    p2: 'The shuffle test is the second habit. Flexible methods can make any data look orderly, and many AI models are very flexible indeed. Checking a fit against shuffled data is a simple, powerful way to tell real structure from the method\'s own freedom.',
    closer: 'So a Wrexham teenager should keep learning to code in 2026, in a city whose church tower Cadw dates to the early 1500s: AI can summarise a trend, but people still have to ask whether it really happened every year.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Rhosddu, Hightown or Gwersyllt, in the same class',
    intro: 'Wrexham\'s learners live across the city and the villages around it. Online, every one of them is just as close to the lesson.',
    cells: [
      { h3: 'City and villages', p: 'A learner in Rhostyllen and another in Acton can share a class without either of them crossing town.' },
      { h3: 'Set to the Welsh system', p: 'Placement follows the Welsh school year a learner is in and the Curriculum for Wales, with WJEC names for GCSE and A level courses; the teaching language is English.' },
      { h3: 'A useful first session', p: 'Nobody sits through a sales talk: the free lesson is a real coding task, after which the teacher recommends where to start, which course suits and a regular weekly slot. No card is requested.' },
      { h3: 'Classes by level', p: 'Five to ten learners at one stage, from Wrexham, the rest of the UK and abroad, keeping sensible times open at every level.' },
      { h3: 'Two lessons a week', p: 'A steady pattern of two lessons each week, roughly eight in a month; holidays and exam periods are worked around by agreement with the teacher.' },
      { h3: 'Evenings for our teachers', p: 'Our teachers are in India, which keeps a single time zone all year, so a 5 pm Wrexham lesson falls at half past nine their time in summer and half past ten in winter.' }
    ],
    spec: { title: 'Across North East Wales', p: 'Learners in Holt, Chirk, Llangollen or Ruabon join exactly the same classes, because every lesson is online and classes are formed by level.' }
  },

  fees: {
    h2: 'Wrexham lesson fees',
    intro: 'The first lesson costs nothing, then there is a single monthly fee.',
    first: 'One whole lesson at no cost, ending with a suggested level, course and weekly time.',
    group: 'Around eight live lessons a month in a class of five to ten learners at the same level.',
    private: 'Around eight live lessons a month, with a teacher focused on your learner only.',
    closer: 'Stansty and Garden Village families are invoiced in US dollars, the same as every family living outside India, and no price on our site is shown in pounds. We bill nothing before the free lesson is over and a course and weekly time have been chosen with us; the pricing page sets out pauses, missed lessons and moving between group and one-to-one teaching.'
  },

  reviewsH2: 'Six Google reviews from families, left as written',

  book: {
    h2: 'Book a free lesson for a Wrexham learner',
    intro: 'The first lesson suits the learner: a daily-tally chart game for a young child, a short Python program that averages a list of readings for a beginner, or 21 years of Wrexham air data and isotonic regression for a teenager ready for real statistics.',
    success: 'Thank you. We will be in touch soon to arrange the lesson for your Wrexham learner.'
  },

  faq: {
    h2: 'Wrexham coding class questions',
    intro: 'What Wrexham families most often ask us.',
    items: [
      { q: 'How many people live in Wrexham?', a: 'Census 2021 counted 135,117 usual residents in Wrexham county borough. The central middle-layer areas the House of Commons Library names Town North, University and Rhos-ddu, Caia Park, and Wrexham West had 8,923, 6,861 and 8,678.' },
      { q: 'How does Wrexham compare with Wales?', a: 'The county borough is more densely settled, at 268.2 people per square kilometre against 149.9 for Wales, and 5.2% of its residents were under five in 2021, against 5.0% in Wales.' },
      { q: 'What is isotonic regression?', a: 'A way of fitting the closest curve that obeys an order rule, such as never rising. The pool-adjacent-violators algorithm merges neighbouring values that break the rule and replaces them with their average until the rule holds everywhere.' },
      { q: 'Has Wrexham\'s air got cleaner?', a: 'At the Welsh Air Quality Network\'s Wrexham site, yearly nitrogen dioxide averaged 20.2 micrograms per cubic metre over 2005 to 2009 and 14.0 over 2021 to 2025. But it rose in 9 of the 20 year-to-year steps, and the fitted level has barely changed since 2020.' },
      { q: 'Where does the air data come from?', a: 'From the Welsh Air Quality Network, which publishes hourly readings for its Wrexham site in the data format used by the openair package, with times in Greenwich Mean Time. We are not connected with the network.' },
      { q: 'Is Wrexham a city?', a: 'Yes. The UK government\'s List of Cities, last updated on 29 August 2022, includes Wrexham among the cities of Wales.' },
      { q: 'When do Wrexham lessons take place?', a: 'Most Wrexham families pick a slot after school, on a weekday evening or at the weekend, and we confirm it in the free lesson. Because the teachers work from India, the lesson sits in their late evening: India is four and a half hours on from Wrexham between March and October and five and a half hours on for the rest of the year.' },
      { q: 'Is there a centre in Wrexham?', a: 'No. We have no Wrexham centre and no premises anywhere in the UK, because every lesson is live online. Learners need a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much are Wrexham lessons?', a: 'The first lesson is free. After it, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than by age or address, with five to ten learners at the same stage. When no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Wales and the UK',
    h2: 'Wales and beyond',
    html: 'Nearby, the <a class="cg-inline-link" href="/best-coding-class-in-st-asaph">St Asaph page</a> reads which way the Vale of Clwyd faces from a height map, and across the border <a class="cg-inline-link" href="/best-coding-class-in-chester">Chester</a> fits river recessions by gradient descent. There is separate help for <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> and for <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC GCSE Digital Technology</a>. For how our stages sit alongside Welsh schooling, see the <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales guide</a>; every other city is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wrexham and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-st-asaph', label: 'St Asaph' },
    { href: '/best-coding-class-in-chester', label: 'Chester' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-wrx .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.3vw, 2.6rem); }
.cg-root.cg-wrx .cg-hero h1 { font-weight: 755; letter-spacing: -0.023em; line-height: 1.06; }
.cg-root.cg-wrx .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-wrx .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wrx .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.014em; }
.cg-root.cg-wrx .cg-grid-3 { gap: clamp(1.05rem, 2.6vw, 2.15rem); }
.cg-root.cg-wrx .cg-table th { letter-spacing: 0.025em; }
.cg-root.cg-wrx .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wrx .cg-ladder-col { border-top: 2px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0.9rem 0; }
.cg-root.cg-wrx .cg-callout { border-left-width: 4px; border-radius: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Census 2021 via Nomis. Wrexham county borough W06000006: TS001 135,117; TS068 24,704 of 128,119 (19.3 percent); TS006 268.2; TS007A 6,998 under 5 of 135,114 (5.2 percent). Town North, University and Rhos-ddu W02000085 8,923, 283 communal, 1,506 of 8,556 (17.6 percent), 3,270.3; Caia Park W02000087 6,861, 1,752 of 6,372 (27.5 percent), 4,890.9, 490 under 5 of 6,860 (7.1 percent); Wrexham West W02000088 8,678, 1,611 of 8,217 (19.6 percent), 2,082.7. Wales 19.9 percent, 149.9, 5.0 percent under 5. gov.uk List of Cities (29 August 2022). Cadw 1769 (St Giles, Grade I; tower about 1506-1520; restorations 1867, 1894, 1903-4), 1770 (Elihu Yale tomb, Grade II*; buried 22 July 1721; Plas Grono), 1774 (gates, II*).',
    localProject: 'Did Wrexham\'s air get cleaner every year? Welsh Air Quality Network site WREX, hourly NO2 2005 to 2025 (174,910 values, GMT, hour beginning, ug/m3). Annual means 24.2 peak in 2010, 12.9 low in 2020; rises in 9 of 20 steps. Isotonic (never rising) blocks: 20.85, 20.54, 19.00, 18.83, 17.32, 16.43, 13.92, 13.65. R2 0.884 vs line 0.682 (slope -0.432 a year); 0 of 10,000 shuffles fit as well. Hour beginning 07:00 GMT 25.9, 03:00 8.8; Friday 19.9, Sunday 13.2. Lesson family: isotonic regression, pool-adjacent-violators.',
    requiredMentions: [
      '4,890.9',
      '8,923',
      'isotonic',
      'pool-adjacent',
      'openair',
      'Elihu Yale',
      'Rhosddu',
      'Rhosnesni',
      'Hightown',
      'Borras',
      'Gwersyllt',
      'Caia Park'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: Wrexham 135,117; three central MSOAs; Wales.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=W02000085,W02000087,W02000088,W06000006,W92000004' },
      { claim: 'Nomis, Census 2021 TS007A: age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=W02000085,W02000087,W02000088,W06000006,W92000004' },
      { claim: 'Nomis, Census 2021 TS068: schoolchildren and full-time students aged 5 and over.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=W02000085,W02000087,W02000088,W06000006,W92000004' },
      { claim: 'Nomis, Census 2021 TS006: population density.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=W02000085,W02000087,W02000088,W06000006,W92000004' },
      { claim: 'House of Commons Library, MSOA Names: Town North, University and Rhos-ddu; Caia Park; Wrexham West.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Welsh Air Quality Network: Wrexham site (WREX) and hourly openair R data files, 2005 to 2025.', url: 'https://airquality.gov.wales/sites/default/files/openair/R_data/WREX_2024.RData' },
      { claim: 'openair documentation, importUKAQ: data are date beginning; gaseous species in ug/m3; Welsh Air Quality Network included.', url: 'https://openair-project.github.io/openair/reference/importUKAQ.html' },
      { claim: 'UK government, List of Cities (updated 29 August 2022): Wales includes Wrexham.', url: 'https://www.gov.uk/government/publications/list-of-cities/list-of-cities-html' },
      { claim: 'Cadw full report, listed building 1769: Parish Church of St Giles.', url: 'http://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=1769' },
      { claim: 'Cadw full report, listed building 1770: Tomb of Elihu Yale.', url: 'http://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=1770' },
      { claim: 'Ordnance Survey, OS Open Names: Wrexham and nearby places.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-names' }
    ],
    rejectedClaims: [
      'Reasons for the fall in nitrogen dioxide or the level since 2020: not taken from a fetched source, so no cause is given.',
      'Any health meaning of the readings: excluded by the cluster rules; the page gives no health advice.',
      'The date Wrexham was granted city status: the List of Cities page gives no date for it, so only the list is cited.',
      'A Lomb-Scargle periodogram of the hourly data: computed, but the Liverpool page already teaches periodograms, so it is not used.',
      'DEFRA UK-AIR: the national network has no Wrexham site; the Welsh network\'s data are used instead.',
      'Welsh language and national identity figures: not used, in line with the cluster rules on identity data.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Welsh Air Quality Network, Cadw, St Giles\' Church, the UK government or Wrexham County Borough Council.'
    ]
  }
};
