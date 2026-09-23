'use strict';
// Hereford (cg- city page, UK cluster Phase 4). Spine: how warm is it really, underneath the noise of each month? A
// Kalman filter (local level model) on the Met Office historic station record for Ross-on-Wye, Herefordshire (359800E
// 223800N, 67 m amsl; monthly from December 1930 to August 2026, 1,149 months; 125 months with an estimated value
// flagged, 8 provisional; read 23 September 2026; scratchpad her/kalman.py). Monthly mean = (tmax + tmin) / 2, anomaly
// against the station's own 1961 to 1990 average for that calendar month. Parameters by maximum likelihood over a grid:
// measurement noise variance 1.800 (sd 1.34 C), level-change variance 0.007943 (sd 0.089 C per month). Kalman gain from
// 0.848 at the first month to a steady 0.0643. Filtered level (95 percent band plus or minus 0.67 C in steady state):
// December 1965 -0.58 C, 1995 +0.85, 2010 +0.06, 2025 +1.87; August 2026 +2.44 (includes provisional months).
// Smoothed (Rauch-Tung-Striebel) level lowest -0.79 C in January 1963. Month-to-month change of the estimate: raw 1.704,
// 12-month mean 0.162, Kalman 0.090. One-step prediction RMSE: Kalman 1.376 C, last month 1.704, 12-month mean 1.411,
// long-term average (zero anomaly) 1.549. Largest single monthly anomaly: December 2015, +5.73 C.
// Lesson family: Kalman filtering (state-space model, predict and update, gain, uncertainty, maximum likelihood tuning,
// smoothing). Screened 23 September 2026: Kalman 0 hits; distinct from Winchester's fixed recursive filter, Dundee's
// forecast baselines and Stoke's median filter.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Herefordshire E06000019: TS001 187,034 usual residents,
// 184,651 in households, 2,383 communal; TS007A 12,481 aged 65 to 69 (6.7 percent, England 4.9), 13,014 aged 70 to 74
// (7.0, England 5.0), 8,175 aged 20 to 24 (4.4, England 6.0); TS068 28,366 students of 178,605 aged 5 and over (15.9
// percent, England 20.4); TS006 85.8 per square km (England 433.5). MSOAs (House of Commons Library names): Hereford
// Central 9,767 (3,059.5 per square km); Hereford South West 7,862 (4,782.5); Golden Valley 6,060 (21.9); Ross-on-Wye
// 10,990 (1,228.2). Hereford Cathedral, Mappa Mundi page: bears the name of its author, Richard of Haldingham or Lafford;
// recent research suggests a date of about 1300; a single sheet of vellum (calf skin) 64 by 52 inches (1.58 by 1.33 m);
// geography within a circle 52 inches across with Jerusalem at the centre; about 500 drawings including around 420
// cities and towns. The Mappa Mundi website: east at the top; the British Isles at the bottom left; the Chained Library
// holds about 1,500 books dating from around 800 AD to the early nineteenth century, including 227 medieval manuscripts.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'HEREFORD', blurb: 'The city of the Mappa Mundi, with a project that estimates how warm Herefordshire really is underneath ninety-five years of noisy months.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-hereford',
  code: 'hfd',
  accent: '#6B2E51',
  accentRationale: 'Hereford: a map-ink mulberry for the Mappa Mundi, from the solver (7.98:1 on every paper tint, dE 7.3 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Hereford',
    eyebrow: 'Hereford, Herefordshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Herefordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Hereford, England',
  title: 'Best Coding Classes in Hereford | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Hereford learners aged 6 to 67, and in Leominster, Ledbury and Ross-on-Wye too. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Hereford, on a page where a Kalman filter reads ninety-five years of Ross-on-Wye temperatures and finds the warming beneath the noise.',
  twitterDescription: 'Hereford learners from six to sixty-seven can study coding, Python and AI with us in live online lessons, beginning with a free one.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Hereford Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, estimation and forecasting, AI and mathematics taught live online in English to Hereford children, teenagers and adults, one to one or in small groups by level.'
  },

  h1: 'Coding classes in Hereford',
  capsuleQ: 'What are the best coding classes in Hereford?',
  capsule: 'Herefordshire had 187,034 usual residents at the 2021 census, spread at just 85.8 people per square kilometre against 433.5 for England. Hereford Cathedral says its Mappa Mundi, made around 1300 on a single sheet of calf-skin vellum, places Jerusalem at the centre of the world. With us, a Hereford learner of any age from six to sixty-seven has live video lessons with a teacher in India, alone or in a group of five to ten at the same level, at times fitted around the UK day. The first lesson costs nothing; then a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'The Met Office has recorded temperatures at Ross-on-Wye, in Herefordshire, every month since December 1930. Any single month can be two degrees warmer or colder than usual for no lasting reason. So how warm is Herefordshire really, underneath that noise? Our teenagers build a Kalman filter, the method that guides spacecraft and phones, which keeps a running estimate and nudges it by just the right amount each month. Tuned on the data itself, it trusts each new month only 6% of the way. Its answer: in December 2025 the underlying temperature stood 1.87 degrees above the station\'s 1961 to 1990 average, give or take 0.67, against 0.79 below it around January 1963.',
  wa: 'Hello Modern Age Coders, please could we have a free coding lesson for a learner in Hereford?',

  picks: {
    eyebrow: 'Course picks for Hereford',
    h2: 'Four courses for the Wye city',
    intro: 'Start from whatever the learner enjoys most. Each course begins with a free live lesson, and booking it needs no card.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, a first step towards games that keep a working guess and improve it as clues arrive.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to full projects, enough to read ninety-five years of weather records and filter them.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real data in Python, including separating a slow, real change from month-to-month noise and saying how sure you are.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who track anything noisy over time, from sensors to sales, and want an honest running estimate.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Hereford today',
      h2: 'A small city in a very rural county',
      intro: 'Census 2021 figures for Herefordshire and for four of its middle-layer areas named by the House of Commons Library, from the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Herefordshire and four of its areas, Census 2021', head: ['Area', 'Usual residents', 'Residents per square kilometre'], rows: [
          ['Herefordshire', '187,034', '85.8'],
          ['Hereford Central', '9,767', '3,059.5'],
          ['Hereford South West', '7,862', '4,782.5'],
          ['Ross-on-Wye', '10,990', '1,228.2'],
          ['Golden Valley', '6,060', '21.9'],
          ['England', '56,490,048', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'City and countryside', p: 'Hereford South West packs 4,782.5 residents into each square kilometre; Golden Valley, in the west of the county, has 21.9.' },
          { h3: 'An older county', p: 'In 2021, 7.0% of Herefordshire\'s residents were aged 70 to 74 and 6.7% aged 65 to 69, against 5.0% and 4.9% across England.' },
          { h3: 'Fewer young adults', p: 'People aged 20 to 24 were 4.4% of residents, and 28,366 of the 178,605 aged five and over were studying, 15.9%.' }
        ] },
        { kind: 'p', text: 'Our Hereford groups draw on the whole county. In a typical week we might teach an eight-year-old from Leominster building a first game, a Hereford sixteen-year-old revising for GCSE Computer Science and a Ledbury adult learning Python for the office, every one of them in a small group pitched at their level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'The Mappa Mundi',
      h2: 'The world as it was understood around 1300',
      intro: 'From Hereford Cathedral\'s Mappa Mundi pages and the Mappa Mundi website.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'About 1300', p: 'The cathedral says the map bears its author\'s name, Richard of Haldingham or Lafford, and that recent research suggests a date of about 1300.' },
          { h3: 'One sheet of vellum', p: 'It is drawn on a single sheet of calf skin, 1.58 by 1.33 metres. The known world fills a circle with Jerusalem at the centre, east at the top and the British Isles at the bottom left.' },
          { h3: 'The Chained Library', p: 'The cathedral\'s Chained Library holds about 1,500 books, from around 800 AD to the early nineteenth century, including 227 medieval manuscript books.' }
        ] },
        { kind: 'p', text: 'The map carries about 500 drawings, including around 420 cities and towns, and records how its makers understood the world in spiritual as well as geographical terms. We have no connection with Hereford Cathedral, Herefordshire Council or the Met Office. The Mappa Mundi belongs on this page because every map is a model, a working estimate of the world from the evidence to hand, and that is exactly what a Kalman filter keeps, one month at a time.' },
        { kind: 'spec', title: 'Where the temperatures come from', p: 'The Met Office publishes historic station data for Ross-on-Wye, at 67 metres above sea level, as monthly maximum and minimum temperatures, frost days, rainfall and sunshine from December 1930, with estimated and provisional values marked.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How warm is it really, underneath the noise?',
      intro: 'A Kalman filter holds two things: a current estimate of a hidden quantity, and how uncertain that estimate is. Each month it predicts, compares the prediction with the new reading, and moves part of the way towards it.',
      body: [
        { kind: 'table', caption: 'Ross-on-Wye monthly mean temperature, 1,149 months: how well each method predicts the next month\'s departure from the 1961 to 1990 average (root mean square error, degrees Celsius)', head: ['Prediction for next month', 'Typical error'], rows: [
          ['Long-term average (no change)', '1.549'],
          ['Same as this month', '1.704'],
          ['Average of the last 12 months', '1.411'],
          ['Kalman filter estimate', '1.376']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Remove the seasons', p: 'For each month, subtract that calendar month\'s 1961 to 1990 average, so a warm January and a cool July can be compared. What remains is the anomaly.' },
          { h3: '2. Tune on the data', p: 'Search for the noise sizes that make the real record most likely: a month-to-month wobble of 1.34 degrees, and an underlying drift of just 0.089 degrees a month.' },
          { h3: '3. Predict and update', p: 'The gain, how far each month moves the estimate, starts at 0.848 when the filter knows nothing and settles at 0.0643, trusting the long record more than any single month.' }
        ] },
        { kind: 'callout', h3: 'An estimate with its uncertainty attached', p: 'The filter never gives a bare number. In December 2025 the underlying level was 1.87 degrees above the 1961 to 1990 average, and the 95% band around it was plus or minus 0.67. Looking back with a smoother, which uses later months too, the coldest stretch was around January 1963, 0.79 below. The single wildest month in the record, December 2015 at 5.73 degrees above average, moved the estimate by just 0.31 degrees, which is exactly what a good filter should do with one surprise.' },
        { kind: 'p', text: 'Why not just average the last twelve months? It is simple and does nearly as well at prediction, 1.411 against 1.376, but it gives no uncertainty and reacts to every month in its window equally. The Kalman estimate is also calmer: from one month to the next it moves by a typical 0.090 degrees, against 0.162 for the twelve-month mean. The latest months of 2026 are marked provisional by the Met Office, so the most recent estimates may shift slightly when they are finalised.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Estimation in practice',
      h2: 'Five questions before trusting a running estimate',
      intro: 'Learned on Herefordshire weather, then used in satellite navigation, phone location, robots, self-driving cars and economic tracking.',
      body: [
        { kind: 'table', caption: 'Choices behind a Kalman filter', head: ['Question', 'For Ross-on-Wye', 'What goes wrong if you skip it'], rows: [
          ['What is the hidden state?', 'The underlying temperature level', 'Filtering something nobody defined'],
          ['What is noise and what is change?', 'Sizes tuned by maximum likelihood', 'A filter that is jumpy or asleep'],
          ['How are the seasons handled?', 'Removed using a 1961 to 1990 baseline', 'Summer read as warming'],
          ['What about doubtful data?', '125 estimated and 8 provisional months flagged', 'Revised values treated as final'],
          ['Is it tested?', 'One-step predictions against simple rules', 'A clever method no better than a plain one']
        ] },
        { kind: 'p', text: 'The second row is the heart of the method. Tell the filter that months are very noisy and it barely moves; tell it the level changes fast and it chases every wobble. Choosing those sizes by what makes the real record most likely, rather than by what gives a pleasing curve, keeps the answer honest.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Guessing a hidden number from noisy clues, and learning to change a guess a little rather than jumping to each new clue.' },
          { h3: 'Teenagers', p: 'A Kalman filter in Python on ninety-five years of Met Office data, tuned by likelihood and tested against simple forecasts.' },
          { h3: 'Adults', p: 'Tracking noisy measurements at work with a running estimate and an honest uncertainty band.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Met Office, Hereford Cathedral or Herefordshire Council. The temperatures and census tables are published openly; the anomalies, filtering and predictions on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From noisy clues to a Kalman filter',
    intro: 'The ages are only a guide; the free lesson decides where each learner starts.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Sensible guesses', p: 'Hidden-number games with noisy clues, where a sensible guess changes a little at a time.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Running averages', p: 'Calculating averages that update as new readings arrive, in Python, and seeing how they smooth a wobbly line.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Kalman filtering', p: 'Predict and update steps, the gain, uncertainty bands and tuning on real Met Office data.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Tracking at work', p: 'Running estimates for noisy data, with uncertainty reported and the method tested against simple rules.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Phones and spacecraft use Kalman filters. Why should a Hereford teenager build one for the weather?',
    intro: 'Because the idea of an estimate that knows how uncertain it is sits under a great deal of modern technology, AI included.',
    p1: 'Every time a phone shows its position, a filter of this kind is blending a guess about where it should be with a noisy new measurement. Many AI systems for tracking, robotics and forecasting do the same. A learner who has tuned one on ninety-five years of Herefordshire temperatures understands what those systems are balancing.',
    p2: 'The uncertainty band is the lesson that transfers furthest. An AI tool that gives a confident number with no sense of how sure it is should be treated with care. Having built a method that always reports plus or minus 0.67 degrees, a learner knows to ask any system the same question.',
    closer: 'So a Hereford teenager should keep learning to code in 2026, in the city that keeps a medieval map of the known world: machines can estimate almost anything, but someone has to ask how sure they are.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Hereford, Leominster or Bromyard, without the drive',
    intro: 'Herefordshire is large and rural, with a city at its centre and market towns spread across it. Online, every one of them is the same distance from the lesson.',
    cells: [
      { h3: 'City and market towns', p: 'A learner in Hereford and another near Kington can share a class, with no long journey on country roads.' },
      { h3: 'Matched to school years', p: 'Herefordshire pupils will recognise our levels, which follow the English curriculum from the early years right up to GCSE and A level, taught entirely in English.' },
      { h3: 'Teaching from lesson one', p: 'Nothing about the free session is a sales pitch: the learner tackles a proper task, then we recommend a level, a course and a regular time, all without card details.' },
      { h3: 'Classmates at your stage', p: 'Each class brings together five to ten learners at the same point, from Herefordshire, the rest of Britain and further afield, which keeps sensible times open at every level.' },
      { h3: 'Same days, every week', p: 'Learners keep two fixed lesson days a week, close to eight lessons a month, and families and teachers agree early how to handle half terms and exam weeks.' },
      { h3: 'Evening across two clocks', p: 'When a lesson starts at 5 pm in Hereford it is 9.30 pm for our teachers in summer and 10.30 pm in winter, as India keeps one time all year; they plan their evenings for UK learners.' }
    ],
    spec: { title: 'Across the Marches', p: 'Families in Monmouth, Abergavenny, Ludlow or Malvern join exactly the same classes, since every group is online and formed by level.' }
  },

  fees: {
    h2: 'Hereford lesson fees',
    intro: 'The first lesson is free; after that there is one monthly fee.',
    first: 'A whole lesson at no charge, ending with our suggestion for level, course and weekly time.',
    group: 'About eight live lessons a month, in a group of five to ten learners at the same stage.',
    private: 'About eight live lessons a month, with the teacher working with your learner alone.',
    closer: 'Families in Ross-on-Wye or the Golden Valley pay in US dollars, like every family outside India, and there is no pound price anywhere on our site. There is no bill until after the free lesson and the choice of a course and weekly time; how pauses, missed lessons and switches between group and one-to-one teaching work is set out on the pricing page.'
  },

  reviewsH2: 'Six family reviews from Google, unaltered',

  book: {
    h2: 'Book a free lesson for a Hereford learner',
    intro: 'The first task is chosen for the learner: a noisy-clues guessing game for a young child, a short Python program that keeps a running average for a beginner, or ninety-five years of Ross-on-Wye temperatures and a Kalman filter for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Hereford learner.'
  },

  faq: {
    h2: 'Hereford coding class questions',
    intro: 'The questions Hereford families ask us most.',
    items: [
      { q: 'How many people live in Herefordshire?', a: 'Census 2021 counted 187,034 usual residents in Herefordshire, with 184,651 in households and 2,383 in communal establishments. The area named Hereford Central had 9,767.' },
      { q: 'How does Herefordshire compare with England?', a: 'It is very rural, at 85.8 residents per square kilometre against 433.5, and older: 7.0% of residents were aged 70 to 74 in 2021, against 5.0% in England, while 15.9% of those aged five and over were students.' },
      { q: 'What is a Kalman filter?', a: 'A method for estimating something hidden from noisy measurements. It keeps a current estimate and its uncertainty, predicts forward, then moves part of the way towards each new reading, by an amount that depends on how noisy the readings are.' },
      { q: 'How much warmer is it at Ross-on-Wye?', a: 'The filter estimates that in December 2025 the underlying monthly temperature stood 1.87 degrees above the station\'s 1961 to 1990 average, with a 95% band of plus or minus 0.67 degrees.' },
      { q: 'Where do the temperatures come from?', a: 'From the Met Office\'s historic station data for Ross-on-Wye, monthly from December 1930, which marks estimated and provisional values.' },
      { q: 'What is the Mappa Mundi?', a: 'A map of the world made around 1300 on a single sheet of vellum, now at Hereford Cathedral, with Jerusalem at the centre and about 500 drawings. We are not connected with the cathedral.' },
      { q: 'When do Hereford lessons run?', a: 'Hereford families choose a time after school, on a weekday evening or at the weekend, and we agree it during the free lesson. Our teachers\' clocks in India run four and a half hours ahead of Hereford during British Summer Time and five and a half hours ahead through the winter.' },
      { q: 'Is there a centre in Hereford?', a: 'No. We have no Hereford centre and no UK premises, because every lesson is live online. Learners need a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'What do lessons cost for a Hereford learner?', a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one teaching on the same timetable is USD 150 a month. Nothing is charged before the course, format and time are agreed.', boiler: true },
      { q: 'How are learners placed in groups?', a: 'By level, pace and goals rather than age or address, with five to ten learners at one stage. If no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The Marches and beyond',
    html: 'Up the road, the <a class="cg-inline-link" href="/best-coding-class-in-worcester">Worcester page</a> finds the shortest route across the city with A* search, and <a class="cg-inline-link" href="/best-coding-class-in-winchester">Winchester</a> runs a simpler recursive filter, a cousin of this one, along its river. <a class="cg-inline-link" href="/best-coding-class-in-dundee">Dundee</a> tests forecasts against plain baselines. For how our levels map onto English schooling, read the <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a>; every other city is reached from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hereford and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-worcester', label: 'Worcester' },
    { href: '/best-coding-class-in-winchester', label: 'Winchester' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-hfd .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.5rem); }
.cg-root.cg-hfd .cg-hero h1 { font-weight: 650; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-hfd .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-hfd .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hfd .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.013em; }
.cg-root.cg-hfd .cg-grid-3 { gap: clamp(1rem, 2.4vw, 2.05rem); }
.cg-root.cg-hfd .cg-table th { letter-spacing: 0.03em; }
.cg-root.cg-hfd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hfd .cg-ladder-col { border-bottom: 3px double var(--cg-accent); padding-bottom: 0.95rem; }
.cg-root.cg-hfd .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Herefordshire, Census 2021 via Nomis (E06000019): TS001 187,034 usual residents, 184,651 in households, 2,383 in communal establishments; TS007A 12,481 aged 65 to 69 (6.7 percent, England 4.9), 13,014 aged 70 to 74 (7.0 percent, England 5.0), 8,175 aged 20 to 24 (4.4 percent, England 6.0); TS068 28,366 students of 178,605 residents aged 5 and over (15.9 percent, England 20.4); TS006 85.8 per square kilometre (England 433.5). MSOAs: Hereford Central 9,767 (3,059.5); Hereford South West 7,862 (4,782.5); Ross-on-Wye 10,990 (1,228.2); Golden Valley 6,060 (21.9). Hereford Cathedral and the Mappa Mundi website: Richard of Haldingham or Lafford; about 1300; single sheet of vellum 1.58 by 1.33 m; Jerusalem at the centre, east at the top; about 500 drawings, around 420 cities and towns; Chained Library about 1,500 books, 227 medieval manuscripts.',
    localProject: 'How warm is it really, underneath the noise? Met Office Ross-on-Wye monthly data, December 1930 to August 2026 (1,149 months; 125 estimated, 8 provisional). Anomaly against 1961 to 1990 calendar-month means. Local level Kalman filter, ML-tuned: measurement sd 1.34 C, level-change sd 0.089 C per month; gain 0.848 to 0.0643. Level December 2025 +1.87 C (plus or minus 0.67); smoothed low -0.79 C, January 1963. One-step RMSE: Kalman 1.376, 12-month mean 1.411, climatology 1.549, last month 1.704. Month-to-month change of estimate 0.090 against 0.162 for 12-month mean. December 2015 anomaly +5.73 C. Lesson family: Kalman filtering.',
    requiredMentions: [
      '187,034',
      '184,651',
      '28,366',
      '178,605',
      '85.8',
      'Mappa Mundi',
      'Chained Library',
      'Haldingham',
      'Ross-on-Wye',
      'Kalman',
      'Golden Valley',
      'vellum'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: Herefordshire 187,034 usual residents; MSOAs Hereford Central, Hereford South West, Ross-on-Wye, Golden Valley.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000019,E02002916,E02002921,E02002926,E02002924' },
      { claim: 'Nomis, Census 2021 TS007A: Herefordshire and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000019,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Herefordshire 28,366 students of 178,605 aged 5 and over (15.9 percent).', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000019,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: densities.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E06000019,E02002916,E02002921,E02002926,E02002924,E92000001' },
      { claim: 'House of Commons Library, MSOA Names: Herefordshire areas.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Met Office historic station data, Ross-on-Wye, monthly from December 1930.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/rossonwyedata.txt' },
      { claim: 'Hereford Cathedral, Mappa Mundi: author, date about 1300, vellum, dimensions, Jerusalem at the centre, about 500 drawings.', url: 'https://www.herefordcathedral.org/mappa-mundi' },
      { claim: 'Mappa Mundi website: east at the top, British Isles bottom left; Chained Library about 1,500 books including 227 medieval manuscripts.', url: 'https://www.themappamundi.co.uk/' }
    ],
    rejectedClaims: [
      'Causes of the warming or of any single warm month: the page measures the level and its uncertainty and does not attribute causes it has not sourced.',
      'The Mappa Mundi website\'s description of the Chained Library as the largest surviving in the world: a superlative, not repeated.',
      'Treating provisional 2026 months as final: the page says they may shift.',
      'Hereford\'s 1217 Magna Carta: already a theme on other pages; not used here.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Met Office, Hereford Cathedral or Herefordshire Council.'
    ]
  }
};
