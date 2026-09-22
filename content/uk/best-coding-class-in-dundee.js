'use strict';
// Dundee (cg- city page, UK cluster Phase 4). Spine: a forecast must beat the obvious guess, fairly.
// Forecast baselines and walk-forward evaluation on the Met Office historic station record for Leuchars (Fife,
// 56.377 N 2.861 W, about 11.6 km from Dundee city centre across the Firth of Tay; leucharsdata.txt read 22 September
// 2026; scratchpad dun/fc.py). 836 monthly rows, January 1957 to August 2026 (2026 months provisional, not tested).
// Target: next month's mean daily maximum temperature. Each forecast uses only months before it. Test 2000 to 2025
// (312 months), mean absolute error: persistence (last month) 2.296 C; same month last year 1.375; climatology
// (mean of that calendar month in earlier years) 1.113; climatology plus 0.2 x last month's anomaly 1.009 (0.2 chosen
// on 1970 to 1999, where it scored 1.056 against climatology 1.076); climatology plus 0.4 x anomaly 0.969 (the best
// weight only if you peek at the test years); leaky climatology using every year to 2025, 1.032. Closest forecast in
// each of the 312 months (four methods): anomaly method 107, same month last year 94, persistence 57, climatology 54.
// Sunshine, same test: climatology 20.426 hours, 0.2 anomaly 20.258, persistence 34.773. Warmest months by mean daily
// maximum: July 2022 22.0 C, July 2006 21.9, July 2018 21.7.
// Lesson family: forecast baselines and walk-forward evaluation (persistence, seasonal naive, climatology, damped
// anomaly, choosing a parameter without touching the test set, leakage). Screened 22 September 2026: persistence
// appears only as tidal autocorrelation (Clontarf) and mean absolute error only as a model-training baseline
// (learn-to-train page); no page evaluates forecasts walk-forward.
// Place facts read raw 22 September 2026: National Records of Scotland, Scotland's Census 2022 rounded population
// estimates (rounded to the nearest hundred): Dundee City S12000042 148,100 usual residents (2011: 147,268), 69,900
// households (2011: 69,193), 13,900 aged 20 to 24 and 11,100 aged 25 to 29 (Scotland 337,000 and 338,200), 14.8
// percent aged 0 to 14, 67.1 percent 15 to 64, 18.1 percent 65 and over (Scotland 15.3, 64.6, 20.1), 2,476.6
// residents per square km (Scotland 69.8); demography and migration chart data: 21.8 percent of households with
// dependent children. Dundee Heritage Trust: RRS Discovery built in Dundee, the first British commissioned scientific
// research ship, 1901 to 1904 British National Antarctic Expedition; the South Polar Times compiled on Discovery in
// 1902; returned home to Dundee in 1986; the Hope Cross at Discovery Point built in 1922 by Shackleton's Quest
// crewmates. V&A Dundee information pages returned 404.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'DUNDEE', blurb: 'The City of Discovery, with a project that tests weather forecasts against the obvious guesses, using seventy years of records from across the Tay.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-dundee',
  code: 'dnd',
  accent: '#63364D',
  accentRationale: 'Dundee: a heather plum from the solver (7.87:1 on every paper tint, dE 7.6 from the nearest used accent), breaking the run of blue accents on the other Scottish city pages',
  pageType: 'city',
  place: {
    name: 'Dundee',
    eyebrow: 'Dundee, Scotland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Dundee City' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Dundee, Scotland',
  title: 'Best Coding Classes in Dundee | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Dundee learners aged 6 to 67, from Broughty Ferry and Lochee to the West End. Book your free first lesson.',
  ogDescription: 'Coding and AI lessons for Dundee, on a page that tests forecasts against the obvious guesses on seventy years of weather records from Leuchars.',
  twitterDescription: 'Dundee learners aged six to sixty-seven can learn coding, Python and AI live online with us, and the first lesson costs nothing.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '22 September 2026',
  courseSchema: {
    name: 'Dundee Online Coding, Maths and AI Lessons',
    description: 'Live online lessons in coding, Python, data, AI and mathematics for Dundee children, teenagers and adults, taught in English in small level-based groups or one to one.'
  },

  h1: 'Coding classes in Dundee',
  capsuleQ: 'What are the best coding classes in Dundee?',
  capsule: 'Scotland\'s Census 2022 put about 148,100 usual residents in Dundee City, with 67.1% of them aged 15 to 64 against 64.6% across Scotland. The research ship Discovery, built in the city, carried the British National Antarctic Expedition of 1901 to 1904 and came home to Dundee in 1986. Our Dundee learners, aged anywhere from six to sixty-seven, study with us over live video: one to one, or in a group of five to ten set by level, with teachers in India working to UK times. A first lesson is free, and after that a group place is USD 100 a month while one-to-one teaching is USD 150.',
  lead: 'The Met Office station at Leuchars, just across the Firth of Tay, has recorded every month since January 1957. Suppose a program has to forecast next month\'s average daytime high. The lazy guess, that next month will be like this one, misses by 2.296 degrees on average over 2000 to 2025. The long-run average for that calendar month misses by 1.113. Add a fifth of last month\'s departure from normal and the error falls to 1.009. Tune that fraction by peeking at the years being tested and it seems to fall to 0.969, but that number is a cheat, and so is any average that quietly includes the future. Our teenagers learn to build a forecast and, more importantly, to test it fairly.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Dundee.',

  picks: {
    eyebrow: 'Course picks for Dundee',
    h2: 'Four courses for the City of Discovery',
    intro: 'Let the learner\'s interests choose. Every course begins with a live lesson at no charge, booked without any card.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Python for younger learners, including little prediction games where the computer guesses tomorrow and keeps score of how wrong it was.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Reading a real weather file, building forecasts and scoring them honestly, the route to the Leuchars project on this page.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning for teenagers, where every model is compared first with a simple baseline and tested on data it never saw.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Time series, forecasting and error measures for adults who plan with data at work.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Dundee today',
      h2: 'A working-age city on the Tay',
      intro: 'From National Records of Scotland\'s first results of the 2022 census. Counts are rounded to the nearest hundred and printed as released.',
      body: [
        { kind: 'table', caption: 'Dundee City council area, Scotland\'s Census 2022', head: ['Measure', 'Dundee', 'Scotland'], rows: [
          ['Usual residents, rounded', '148,100', '5,436,600'],
          ['Usual residents in 2011', '147,268', 'Not compared'],
          ['Households, rounded', '69,900', 'Not compared'],
          ['Households in 2011', '69,193', 'Not compared'],
          ['Aged 20 to 24, rounded', '13,900', '337,000'],
          ['Share aged 15 to 64', '67.1%', '64.6%'],
          ['Share aged 65 and over', '18.1%', '20.1%'],
          ['Residents per square kilometre', '2,476.6', '69.8']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Steady numbers', p: 'About 148,100 people lived in Dundee City in 2022, against 147,268 in 2011, in about 69,900 households against 69,193.' },
          { h3: 'Working age', p: 'Two thirds of residents, 67.1%, were aged 15 to 64, above the Scottish share, while 18.1% were 65 or over against 20.1%.' },
          { h3: 'A compact council', p: 'At 2,476.6 residents per square kilometre, the council area is tightly drawn around the city, with Broughty Ferry inside it and Monifieth just beyond.' }
        ] },
        { kind: 'p', text: 'National Records of Scotland also reports that 21.8% of Dundee households had dependent children in 2022. Our learners here cover every stage: a P3 pupil in Broughty Ferry making a first game, an S5 student in Menzieshill working towards Higher Computing Science, or an adult in Lochee learning Python for a new job, each in a group at the right level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'A ship of science',
      h2: 'Discovery, built in Dundee for the Antarctic',
      intro: 'From Dundee Heritage Trust, which has cared for the ship since she came home.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1901 to 1904', p: 'The Trust describes Discovery as the first British commissioned scientific research ship, built in Dundee for the British National Antarctic Expedition under Captain Scott.' },
          { h3: '1902', p: 'The crew compiled the South Polar Times on board, one of the publications the Trust now celebrates in its polar collection.' },
          { h3: '1986', p: 'After voyages all over the globe, including oceanographic expeditions in the 1920s, Discovery returned home to Dundee in 1986.' }
        ] },
        { kind: 'p', text: 'We have no connection with Dundee Heritage Trust. Discovery belongs on this page because she was built to do science at sea, where careful records and honest measurement were the whole point of the voyage. The project below keeps that spirit on dry land: a weather record kept for seventy years, and a test of whether anyone can predict it better than the obvious guess.' },
        { kind: 'spec', title: 'Where the records come from', p: 'The Met Office publishes monthly records for a set of long-running stations as free text files. Leuchars, in Fife, about 11.6 kilometres from Dundee city centre, has monthly maximum and minimum temperatures, rain and sunshine from January 1957 to the present, with the most recent months marked provisional.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can you forecast next month better than the obvious guess?',
      intro: 'Every forecast here is made in order, month by month, using only the months before it. That rule, called walk-forward testing, is what makes the scores fair.',
      body: [
        { kind: 'table', caption: 'Forecasting the next month\'s mean daily maximum at Leuchars, tested on 312 months from 2000 to 2025', head: ['Method', 'Average miss', 'Fair?'], rows: [
          ['This month again (persistence)', '2.296 C', 'Yes'],
          ['Same month last year', '1.375 C', 'Yes'],
          ['Long-run average for the month (climatology)', '1.113 C', 'Yes, using earlier years only'],
          ['Climatology plus 0.2 of last month\'s anomaly', '1.009 C', 'Yes, 0.2 chosen on 1970 to 1999'],
          ['Climatology plus 0.4 of last month\'s anomaly', '0.969 C', 'No, 0.4 picked by looking at the test years'],
          ['Climatology from all years to 2025', '1.032 C', 'No, it averages in the future']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Start with baselines', p: 'Before any clever model, score the obvious guesses. A method that cannot beat the long-run monthly average is not worth using, however sophisticated it looks.' },
          { h3: '2. Walk forward', p: 'Forecast January 2000 from data up to December 1999, then February from data up to January, and so on. The model never sees the month it is predicting.' },
          { h3: '3. Freeze choices early', p: 'The weight on last month\'s anomaly was chosen on 1970 to 1999, before the test began. Choosing it on the test years flatters the result.' }
        ] },
        { kind: 'callout', h3: 'Winning most often is not winning', p: 'Month by month, the long-run average was the closest of four methods only 54 times out of 312, fewer than simply repeating last month, which won 57. Yet its average miss is less than half the size. Persistence is sometimes spot on and sometimes badly wrong, especially at the turn of the seasons; climatology is rarely exact and never far away. Average error, not a count of wins, is the fair score.' },
        { kind: 'p', text: 'Sunshine is harder to beat. For monthly sunshine hours, the long-run average misses by 20.426 hours, and adding a fifth of last month\'s anomaly improves that only to 20.258, while persistence misses by 34.773. A learner who reports that honestly, that the extra method barely helps for sunshine, has learned more than one who only reports the temperature success.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Testing predictions',
      h2: 'Five rules for scoring any forecast',
      intro: 'Learned on seventy years of Fife weather, then used on sales forecasts, energy demand, exam predictions, sports models and every machine learning project.',
      body: [
        { kind: 'table', caption: 'Keeping a forecast test honest', head: ['Rule', 'At Leuchars', 'What breaks without it'], rows: [
          ['Beat a baseline', 'Every method scored against climatology first', 'Celebrating a model that the monthly average beats'],
          ['Only the past', 'Each month forecast from earlier months alone', 'A score no real forecaster could ever achieve'],
          ['Tune before testing', 'Weight chosen on 1970 to 1999, tested on 2000 to 2025', 'A parameter fitted to the answers'],
          ['Average the errors', 'Mean absolute error over 312 months', 'Being fooled by a method that wins often but misses badly'],
          ['Report the losses too', 'Sunshine barely improves, and the page says so', 'A success story built by leaving results out']
        ] },
        { kind: 'p', text: 'The leaky climatology in the table shows how easily the second rule breaks. Averaging each calendar month over all the years up to 2025, including the year being forecast, cuts the error from 1.113 to 1.032 without any extra skill. The code looks innocent. Only asking what the program could have known at the time exposes it.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Guessing tomorrow\'s temperature every day for a fortnight, writing the guesses down first, and adding up how far off they were.' },
          { h3: 'Teenagers', p: 'The Leuchars file read in Python, four forecasting methods, walk-forward testing and a parameter frozen before the test period.' },
          { h3: 'Adults', p: 'Forecast evaluation at work, with baselines, holdout periods and error measures agreed before anyone looks at results.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Met Office, National Records of Scotland, Dundee Heritage Trust or Dundee City Council. The station record and census figures are published openly; the forecasts, errors and comparisons on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From guessing tomorrow to walk-forward testing',
    intro: 'These bands are a loose guide; the free lesson shows where a learner actually belongs.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Guess and check', p: 'Making a prediction, writing it down before the answer arrives, and measuring how close it was.', courses: ['kids-coding-blocks-masterclass', 'mental-maths-mastery-kids'] },
      { band: 'Ages 11 to 13', h3: 'Averages that predict', p: 'Using past months to guess the next one in code, and comparing two guessing rules fairly.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Forecasts in Python', p: 'Baselines, anomalies, walk-forward loops and error measures on seventy years of real weather records.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Forecasting at work', p: 'Time series methods for adults, with evaluation designed before modelling so the results can be trusted.', courses: ['data-analysis-mastery-course-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI model will forecast anything you ask. Why should a Dundee teenager learn to test forecasts?',
    intro: 'Because a forecast nobody has tested fairly is only a guess with decimals.',
    p1: 'Ask an assistant to predict next month\'s weather or next quarter\'s sales and it will produce confident numbers. A learner who has scored forecasts walk-forward knows to ask what baseline it beats, which data it was tuned on, and whether any future information leaked into the test. Those three questions catch most of the misleading results in data science.',
    p2: 'Every serious AI project is evaluated the same way: a baseline, a held-out test set that the model never sees during training, and choices frozen before the test is run. Learning those habits on a weather record from across the Tay is easier than learning them on a large model, and the habits are identical.',
    closer: 'So a Dundee teenager should still learn to program in 2026, in a city that built a ship to do science at the bottom of the world: predictions are cheap, and knowing which ones deserve belief is the valuable skill.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Broughty Ferry, Lochee or the Hilltown, from home',
    intro: 'A dark winter evening in Dundee is no time to cross the city for a lesson. Online, the lesson comes to the learner.',
    cells: [
      { h3: 'East and west of the city', p: 'A learner in Whitfield and another in Menzieshill can join the same class without either travelling.' },
      { h3: 'Scottish stages, Scottish names', p: 'P1 to P7, S1 to S6, then National 5, Higher and Advanced Higher: lessons follow the names Dundee schools use, and every lesson is in English.' },
      { h3: 'A first lesson with content', p: 'The free session teaches a real task and closes with a recommended level, course and weekly time. No payment card is requested.' },
      { h3: 'Five to ten at one level', p: 'Classmates at the same stage from Dundee, elsewhere in the UK and overseas, so each level has a workable time slot.' },
      { h3: 'Two lessons weekly', p: 'A fixed pair of lessons each week, roughly eight a month, with holidays and exam leave planned with the teacher well in advance.' },
      { h3: 'Time zones made simple', p: 'Indian time is constant all year, which puts it four and a half hours ahead of Dundee in the summer and five and a half in winter, so after-school and evening lessons in the UK fall inside our teachers\' working day.' }
    ],
    spec: { title: 'Across Tayside and Fife', p: 'Families in Monifieth, Carnoustie, Newport-on-Tay or Forfar join the very same groups, because lessons are online and groups are formed by level.' }
  },

  fees: {
    h2: 'Dundee lesson fees',
    intro: 'Start with a free lesson; after that, one monthly fee.',
    first: 'A complete lesson with nothing to pay, closing with a suggested level, course and weekly slot.',
    group: 'Close to eight live lessons a month, shared with five to ten learners at the same stage.',
    private: 'Close to eight live lessons a month, taught to your learner on their own.',
    closer: 'Outside India the fee is the same for everyone and set in US dollars, so Douglas and the West End pay alike, and no prices appear in pounds. Billing starts only once the free lesson has fixed a course and a time; pausing, missed lessons and switching between group and private teaching are explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, reproduced as families wrote them',

  book: {
    h2: 'Book a free lesson for a Dundee learner',
    intro: 'The first task fits the learner: a guess-and-check prediction game for a young child, a short Python program that averages past months for a beginner, or the Leuchars record and a walk-forward test for a teenager ready for real data.',
    success: 'Thank you. We will be in touch shortly to arrange a lesson for your Dundee learner.'
  },

  faq: {
    h2: 'Dundee coding class questions',
    intro: 'The questions we hear most from Dundee families.',
    items: [
      { q: 'How many people live in Dundee?', a: 'Scotland\'s Census 2022 counted about 148,100 usual residents in Dundee City, rounded to the nearest hundred, compared with 147,268 in 2011, living in about 69,900 households.' },
      { q: 'How does Dundee compare with Scotland?', a: 'In 2022, 67.1% of Dundee residents were aged 15 to 64 against 64.6% nationally, 18.1% were 65 or over against 20.1%, and there were 2,476.6 residents per square kilometre against 69.8.' },
      { q: 'What is walk-forward testing?', a: 'Testing a forecasting method in time order, so that each prediction is made using only data from before the thing being predicted. It stops a model from being scored with information it could never have had.' },
      { q: 'Which forecast came closest at Leuchars?', a: 'For monthly average daytime highs from 2000 to 2025, the long-run monthly average plus a fifth of last month\'s departure from normal missed by 1.009 degrees on average, ahead of the plain average at 1.113 and last month\'s value at 2.296.' },
      { q: 'Where do the weather records come from?', a: 'The Met Office publishes monthly records for Leuchars, in Fife, as a free text file, running from January 1957. The latest months are marked provisional, and we leave them out of the tests.' },
      { q: 'What was RRS Discovery?', a: 'A ship built in Dundee that Dundee Heritage Trust describes as the first British commissioned scientific research ship. She carried the 1901 to 1904 British National Antarctic Expedition and returned to Dundee in 1986. We are not connected with the Trust.' },
      { q: 'At what times are Dundee lessons?', a: 'After school or in the evening on weekdays, or at weekends, at a UK time we settle in the free lesson. India is four and a half hours ahead of Dundee in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Dundee?', a: 'No. We have no Dundee centre and no premises anywhere in the UK; every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Dundee lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Dundee groups arranged?', a: 'By level, pace and aims rather than age or postcode, with five to ten learners at one stage. If no group suits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Scotland and the UK',
    h2: 'Scottish cities and beyond',
    html: 'Up the coast, the <a class="cg-inline-link" href="/best-coding-class-in-aberdeen">Aberdeen page</a> fits every place name in the city into a few kilobytes, and to the south <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a> works out why its summer nights never quite go dark. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland guide</a> covers the Curriculum for Excellence, with exam support on the <a class="cg-inline-link" href="/national-5-computing-science-help">National 5</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a> pages.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dundee and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-aberdeen', label: 'Aberdeen' },
    { href: '/best-coding-class-in-edinburgh', label: 'Edinburgh' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-dnd .cg-hero-grid { align-items: end; gap: clamp(0.95rem, 2.8vw, 2.4rem); }
.cg-root.cg-dnd .cg-hero h1 { font-weight: 660; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-dnd .cg-capsule { border-left: 4px solid var(--cg-accent); border-top: 1px solid var(--cg-accent); padding: 0.9rem 0 0 1rem; }
.cg-root.cg-dnd .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dnd .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.014em; }
.cg-root.cg-dnd .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-dnd .cg-table th { letter-spacing: 0.02em; }
.cg-root.cg-dnd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dnd .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-dnd .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Dundee, National Records of Scotland, Scotland\'s Census 2022 first results rounded population estimates (rounded to the nearest hundred): Dundee City S12000042 148,100 usual residents (2011: 147,268), 69,900 households (2011: 69,193), 13,900 aged 20 to 24 and 11,100 aged 25 to 29 (Scotland 337,000 and 338,200), 14.8 percent aged 0 to 14, 67.1 percent 15 to 64, 18.1 percent 65 and over (Scotland 15.3, 64.6, 20.1), 2,476.6 residents per square kilometre (Scotland 69.8); demography and migration chart data: 21.8 percent of households with dependent children. Dundee Heritage Trust: RRS Discovery built in Dundee, the first British commissioned scientific research ship; 1901 to 1904 British National Antarctic Expedition under Captain Scott; South Polar Times compiled on board in 1902; 1925 to 1927 oceanographic expeditions; returned home to Dundee in 1986.',
    localProject: 'Can you forecast next month better than the obvious guess? Met Office historic station data, Leuchars (56.377 N 2.861 W, about 11.6 km from Dundee), January 1957 to August 2026 (836 months; 2026 provisional and excluded). Next month\'s mean daily maximum, walk-forward over 2000 to 2025 (312 months), mean absolute error: persistence 2.296 C; same month last year 1.375; climatology (earlier years only) 1.113; climatology plus 0.2 x last anomaly 1.009 (weight chosen on 1970 to 1999); 0.4 weight 0.969 (tuned on the test years, unfair); leaky climatology 1.032 (unfair). Closest method per month: anomaly 107, same month last year 94, persistence 57, climatology 54. Sunshine: climatology 20.426 h, anomaly 20.258, persistence 34.773. Lesson family: forecast baselines and walk-forward evaluation; distinct from Cambridge heap ranking, Sheffield least squares and Manchester lagged correlation.',
    requiredMentions: [
      '148,100',
      '147,268',
      '69,900',
      '69,193',
      '2,476.6',
      '13,900',
      'Leuchars',
      'South Polar Times',
      'climatology',
      'walk-forward',
      '1.009',
      '2.296'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 rounded population estimates: Dundee City population, households, age bands and shares, density.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 demography and migration chart data: households with dependent children.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-demography-and-migration-chart-data/' },
      { claim: 'Met Office, historic station data, Leuchars: monthly maximum temperature, sunshine and more from 1957.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/leucharsdata.txt' },
      { claim: 'Dundee Heritage Trust, Discovery Point: RRS Discovery, 1901 to 1904 expedition, first British commissioned scientific research ship, return to Dundee in 1986, South Polar Times 1902.', url: 'https://www.dundeeheritagetrust.co.uk/attraction/discovery-point/' }
    ],
    rejectedClaims: [
      'V&A Dundee building and opening facts: its information pages returned 404, so the museum is not described.',
      'The 0.4 anomaly weight as the result: it was chosen by looking at the test years, so the page reports it only as an example of an unfair score.',
      'Weather forecasts from the Met Office itself: the page compares simple statistical methods only and makes no claim about professional forecast skill.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Met Office, National Records of Scotland, Dundee Heritage Trust or Dundee City Council.'
    ]
  }
};
