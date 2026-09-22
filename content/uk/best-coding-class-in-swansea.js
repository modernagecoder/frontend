'use strict';
// Swansea (cg- city page, UK cluster Phase 4). Spine: a detector says when, never why.
// Change-point detection with a lower-side CUSUM on daily nitrogen dioxide at Swansea Roadside (DEFRA UK-AIR, site
// SWA1, UKA00497, urban traffic, beside the A483 Carmarthen Road next to Lyon Street, about 4.5 m from the kerb),
// yearly hourly files 2018 to 2021 read 22 September 2026 (scratchpad swa/cusum.py). Daily mean from 18 or more
// hourly values: 359 days in 2018, 359 in 2019, 343 in 2020. Baseline from 2018 only: mean 23.5 micrograms per
// cubic metre; weekday means Monday 24.0, Tuesday 23.6, Wednesday 24.9, Thursday 24.7, Friday 27.1, Saturday 22.0,
// Sunday 18.1; residual standard deviation 11.39. Annual means 2018 23.5, 2019 24.2, 2020 17.7, 2021 19.2. CUSUM on
// residuals from the weekday mean, slack k and threshold h in standard deviations, reset after each alarm:
// k 0.5 h 4: 10 false alarms in 2019, first 2020 alarm on or after 1 March: 14 March; k 0.5 h 5: 8 false alarms in
// 2019, 17 March 2020; k 1.0 h 5: no false alarms in 2019, first alarm after 1 March: 6 July 2020. Single-day rule
// (2 sd below the weekday mean): no alarms in 2019 or 2020. Mean 1 February to 15 March: 2020 16.9, 2019 27.7; 24
// March to 30 April: 2020 18.3, 2019 32.9. Daily means 23 to 26 March 2020: 31.9, 31.4, 36.2, 32.7 (above the weekday
// baseline); 28 to 31 March: 7.0, 3.2, 8.9, 9.3. GOV.UK, Prime Minister's statement of 23 March 2020 (published
// 20:34 that evening): an instruction to stay at home from that evening. The detector fired before the announcement
// at both h settings; levels were already low in February and early March 2020, so the page claims no cause.
// Lesson family: change-point detection with CUSUM (slack and threshold, false alarms against detection delay,
// removing a weekly cycle, when against why). Screened 22 September 2026: CUSUM and change point 0 hits.
// Place facts read raw 22 September 2026: Census 2021 via Nomis, Swansea W06000011: TS001 238,490 usual residents,
// 233,322 in households, 5,168 in communal establishments; TS007A 14,451 aged 15 to 19 (6.1 percent, Wales 5.7),
// 19,157 aged 20 to 24 (8.0, Wales 6.0), 14,232 aged 25 to 29 (6.0, Wales 6.0); TS068 51,845 students of 227,063
// aged 5 and over (22.8 percent, Wales 19.9); TS006 631.5 usual residents per square km (Wales 149.9). Swansea
// University, History: foundation stone laid by King George V on 19 July 1920; 89 students (eight of them women)
// enrolled that year; by September 1939 65 staff and 485 students; in 1947 two permanent buildings, Singleton Abbey
// and the library; the 1960s development of the finite element method by Professor Olek Zienkiewicz, which
// revolutionised the design and engineering of manufactured products; Taliesin Arts Centre opened 1984. Swansea
// Council pages (Mumbles Railway, Swansea Museum) returned 403.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'SWANSEA', blurb: 'The city on the bay, with a project that runs a change detector over three years of roadside air readings and learns the difference between when and why.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-swansea',
  code: 'swa',
  accent: '#914930',
  accentRationale: 'Swansea: a copper red from the solver (5.33:1 on every paper tint, dE 6.7 from the nearest used accent), redder and darker than the brand amber and warmer than the Cardiff green',
  pageType: 'city',
  place: {
    name: 'Swansea',
    eyebrow: 'Swansea, Wales',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Swansea' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Swansea, Wales',
  title: 'Best Coding Classes in Swansea | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Swansea learners aged 6 to 67, from Sketty and Uplands to Morriston and Mumbles. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Swansea, on a page that runs a CUSUM change detector over roadside air readings and shows why when is not the same as why.',
  twitterDescription: 'Swansea learners from six to sixty-seven can study coding, Python and AI with us in live online lessons, starting free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '22 September 2026',
  courseSchema: {
    name: 'Swansea Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, statistics, AI and mathematics taught live online in English to Swansea children, teenagers and adults, in small groups set by level or one to one.'
  },

  h1: 'Coding classes in Swansea',
  capsuleQ: 'What are the best coding classes in Swansea?',
  capsule: 'The 2021 census recorded 238,490 usual residents in Swansea, and 22.8% of those aged five and over were in school or full-time study, against 19.9% across Wales. Swansea University says the finite element method, which changed how manufactured products are designed, was developed there in the 1960s by Professor Olek Zienkiewicz. Learners in Swansea, from age six to sixty-seven, join our live online lessons one to one or in a level-matched group of five to ten, taught from India at UK-friendly times. We charge nothing for the first lesson; from then on a group place is USD 100 a month and private teaching USD 150 a month.',
  lead: 'A monitor beside the A483 Carmarthen Road has measured nitrogen dioxide every hour for years. Suppose a program has to spot, as soon as possible, when the usual level shifts. Checking each day on its own fails: in 2019 and 2020 not a single day fell far enough below normal to trip a two-standard-deviation alarm. A CUSUM detector instead adds up small shortfalls until the evidence is strong, and in spring 2020 it fired on 17 March, six days before the stay-at-home instruction of 23 March. Set it more cautiously and it stays silent until July; set it more eagerly and it raises ten false alarms in an ordinary year. Our teenagers tune it, and learn that a detector reports when a level changed, never why.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Swansea.',

  picks: {
    eyebrow: 'Course picks for Swansea',
    h2: 'Four courses for the city by the bay',
    intro: 'Choose by the learner\'s interests. Every course starts with a free live lesson, and no card is asked for when booking.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Games and animations built from blocks, including a simple alarm that goes off when a score keeps dropping.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real sensor files in Python: cleaning gaps, removing weekly patterns and detecting shifts, as on this page.' },
      { course: 'statistics-probability-maths-course', band: 'University and adult', note: 'Statistics for adults, including variation, false alarms and the trade-offs behind any monitoring rule.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who want to automate checks on data at work, from spreadsheets to live feeds.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Swansea today',
      h2: 'A student city on the Welsh coast',
      intro: 'Census 2021 figures for the City and County of Swansea, read from Nomis and printed as the Office for National Statistics released them, with Wales for comparison.',
      body: [
        { kind: 'table', caption: 'Swansea, Census 2021', head: ['Measure', 'Swansea', 'Wales'], rows: [
          ['Usual residents', '238,490', 'Not compared'],
          ['Living in households', '233,322', 'Not compared'],
          ['Aged 15 to 19', '14,451 (6.1%)', '5.7%'],
          ['Aged 20 to 24', '19,157 (8.0%)', '6.0%'],
          ['Aged 25 to 29', '14,232 (6.0%)', '6.0%'],
          ['Students among residents aged 5 and over', '51,845 (22.8%)', '19.9%'],
          ['Usual residents per square kilometre', '631.5', '149.9']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A place to study', p: 'Of 227,063 residents aged five and over, 51,845 were schoolchildren or full-time students in 2021, a larger share than for Wales as a whole.' },
          { h3: 'The early twenties', p: 'People aged 20 to 24 made up 8.0% of residents against 6.0% in Wales, while the late twenties matched the Welsh share at 6.0%.' },
          { h3: 'City and country', p: 'At 631.5 residents per square kilometre, the council area mixes a dense city with Gower and the northern valleys, so it is far less crowded than its centre.' }
        ] },
        { kind: 'p', text: 'We teach Swansea learners at every stage. A Year 4 pupil in Sketty might be animating a first sprite, a Year 11 student in Morriston preparing for WJEC GCSE Computer Science, and an adult in the Uplands learning Python to automate work reports, each in a group of five to ten at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Engineering by numbers',
      h2: 'A university founded in 1920 and a method that changed engineering',
      intro: 'From Swansea University\'s published history.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '19 July 1920', p: 'King George V laid the University\'s foundation stone, and 89 students, eight of them women, enrolled that same year. By September 1939 there were 65 staff and 485 students.' },
          { h3: '1947', p: 'The campus had just two permanent buildings, Singleton Abbey and the library, before a building programme in the following decades transformed it.' },
          { h3: 'The 1960s', p: 'Professor Olek Zienkiewicz developed the finite element method at Swansea, a technique the University says revolutionised the design and engineering of manufactured products.' }
        ] },
        { kind: 'p', text: 'We have no connection with Swansea University. The finite element method belongs here because it is a computing idea at heart: break a problem too hard to solve whole into many small pieces, solve each simply, and add the results up. The project below uses the same spirit on data, adding up small pieces of evidence until they amount to something worth acting on.' },
        { kind: 'spec', title: 'Where the readings come from', p: 'Swansea Roadside is an urban traffic site in the national monitoring network, housed on a grassed frontage of the A483 Carmarthen Road beside Lyon Street, about 4.5 metres from the kerb. DEFRA\'s UK-AIR service publishes its ratified hourly nitrogen dioxide readings as free yearly files.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'When did the air on Carmarthen Road change?',
      intro: 'A CUSUM detector keeps a running total of how far each day falls below normal, forgives small dips, and raises an alarm when the total grows too large.',
      body: [
        { kind: 'table', caption: 'Detecting a drop in daily nitrogen dioxide at Swansea Roadside, with a baseline learned from 2018', head: ['Rule', 'False alarms in 2019', 'First alarm in spring 2020'], rows: [
          ['One day more than 2 standard deviations low', '0', 'None all year'],
          ['CUSUM, slack 0.5, threshold 4', '10', '14 March'],
          ['CUSUM, slack 0.5, threshold 5', '8', '17 March'],
          ['CUSUM, slack 1.0, threshold 5', '0', 'None until 6 July']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Learn normal', p: 'From 2018 alone: an average of 23.5 micrograms per cubic metre, highest on Fridays at 27.1 and lowest on Sundays at 18.1, with a typical daily wobble of 11.39.' },
          { h3: '2. Remove the week', p: 'Compare each day with the usual value for that weekday, so a quiet Sunday is not mistaken for a change and a busy Friday does not hide one.' },
          { h3: '3. Accumulate evidence', p: 'Add each shortfall beyond the slack to a running total that never drops below zero. When it passes the threshold, sound the alarm and start again.' }
        ] },
        { kind: 'callout', h3: 'When is not why', p: 'The detector at threshold 5 fired on 17 March 2020, six days before the Prime Minister\'s stay-at-home instruction on the evening of 23 March, as published on GOV.UK. Levels had already been unusually low since February: 16.9 on average from 1 February to 15 March, against 27.7 in the same weeks of 2019. From 23 to 26 March, readings rose to between 31.4 and 36.2 before falling to single figures at the end of the month. A detector can say that the level changed and roughly when. It cannot say what caused it; many things move nitrogen dioxide, and the page does not claim to know which did.' },
        { kind: 'p', text: 'The yearly means tell the same story more quietly: 23.5 in 2018, 24.2 in 2019, 17.7 in 2020 and 19.2 in 2021. An annual average confirms that 2020 was different, but a whole year late. The point of a change detector is speed, and speed always costs false alarms.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Watching data change',
      h2: 'Five settings behind every alarm',
      intro: 'Learned on roadside air, then used on website traffic, machine sensors, bank transactions, exam results and the monitoring that keeps AI systems honest in use.',
      body: [
        { kind: 'table', caption: 'Choices a change detector cannot make for you', head: ['Setting', 'On Carmarthen Road', 'Set it wrong and'], rows: [
          ['Baseline period', '2018 only, before anything was tested', 'The detector learns the change as normal'],
          ['Regular cycles', 'Weekday means removed first', 'Every Sunday looks like a drop'],
          ['Slack', '0.5 or 1.0 standard deviations forgiven each day', 'Too little and noise adds up; too much and real shifts vanish'],
          ['Threshold', '4 or 5 standard deviations of total evidence', 'Alarms every few weeks, or silence for months'],
          ['What happens next', 'A human asks why, with other evidence', 'An alarm treated as an explanation']
        ] },
        { kind: 'p', text: 'The false alarms in 2019 are not bugs. With a daily wobble about half the size of the average level, stretches of cleaner air happen by chance, and a sensitive detector will catch them. Choosing a threshold means deciding in advance how many false alarms a year you will accept in return for catching a real change a few days sooner.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A score that drops a little each round, a jar that collects the drops, and an alarm when the jar is full.' },
          { h3: 'Teenagers', p: 'Three years of hourly readings in Python, daily means with a coverage rule, a weekday baseline and a CUSUM tuned and tested.' },
          { h3: 'Adults', p: 'Monitoring rules at work, with baselines, thresholds and false-alarm budgets agreed before the alarms start.' }
        ] },
        { kind: 'p', text: 'We have no connection with DEFRA, Swansea University or Swansea Council. The readings are published on UK-AIR and the census tables through Nomis; the daily means, detectors and alarm dates on this page are our own arithmetic and make no claim about health or about causes.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a jar of drops to a CUSUM detector',
    intro: 'The age bands are only a first guess; the free lesson finds the real starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Keeping count', p: 'Collecting small drops in a running total, and deciding how full the jar must be before anyone should worry.', courses: ['scratch-programming-complete-course', 'mental-maths-mastery-kids'] },
      { band: 'Ages 11 to 13', h3: 'Normal and unusual', p: 'Averages and ranges in code, and the difference between one strange day and a run of them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Change detection', p: 'Daily means from hourly data, weekly cycles removed, CUSUM tuned for false alarms against delay.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Monitoring at work', p: 'Alarm rules for sensors, sales and systems, designed with their error rates stated plainly.', courses: ['statistics-probability-maths-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Monitoring software raises alerts automatically. Why should a Swansea teenager build a detector by hand?',
    intro: 'Because every alert rule hides a trade between noise and delay that someone chose.',
    p1: 'An AI tool will happily flag anomalies in any data you give it. A learner who has tuned a CUSUM on real readings knows that the same data can produce ten alarms or none depending on two numbers, and that an alarm on 17 March says nothing about what happened on 23 March. That understanding is what makes an alert useful rather than just noisy.',
    p2: 'AI systems themselves are watched this way once they are in use. Engineers track whether the data arriving has shifted from the data a model was trained on, using detectors with the same slack and threshold choices. Learning those choices on a sensor by a Swansea road gives a feel for them that no dashboard provides.',
    closer: 'So a Swansea teenager should still learn to program in 2026, in a city where engineers learned to solve big problems in small pieces: alarms are easy to automate, and deciding what an alarm means is still a human job.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Sketty, Morriston or Mumbles, from home',
    intro: 'Swansea stretches from Gower to the valleys, and an evening journey across it is long. A live online lesson makes the distance irrelevant.',
    cells: [
      { h3: 'Gower to the valleys', p: 'A learner in Mumbles and another in Clydach can sit in the same lesson without either making the trip into town.' },
      { h3: 'Welsh school years', p: 'Years 1 to 13, the Curriculum for Wales and WJEC GCSEs and A levels, named as Swansea schools name them. Lessons are taught in English.' },
      { h3: 'A free lesson worth having', p: 'The first session works through a real task and ends with a suggested level, course and weekly time. Booking asks for no card.' },
      { h3: 'Level first, not postcode', p: 'Groups of five to ten learners at one stage, from Swansea, elsewhere in the UK and overseas, so every level has a suitable time.' },
      { h3: 'A twice-weekly routine', p: 'Two regular lessons each week, about eight a month, with holidays and exam periods agreed with the teacher beforehand.' },
      { h3: 'How the clocks line up', p: 'Because Indian time never changes, India sits four and a half hours ahead of Swansea during British Summer Time and five and a half ahead in winter, which fits UK after-school and evening lessons into the teaching day.' }
    ],
    spec: { title: 'Across south-west Wales', p: 'Families in Neath, Port Talbot, Llanelli or Pontarddulais join exactly the same classes, since all lessons are online and groups are formed by level.' }
  },

  fees: {
    h2: 'Swansea lesson fees',
    intro: 'Your first lesson is free, then there is one monthly fee.',
    first: 'A whole lesson at no cost, finishing with a recommended level, course and weekly slot.',
    group: 'Roughly eight live lessons a month, alongside five to ten learners at the same level.',
    private: 'Roughly eight live lessons a month, with the teacher\'s attention on your learner alone.',
    closer: 'We charge every family outside India the same fee in US dollars, whether they live in Townhill or Killay, and we publish nothing in pounds. Payment starts only after the free lesson has agreed a course and a time; the pricing page sets out pauses, missed lessons and moves between group and one-to-one teaching.'
  },

  reviewsH2: 'Six Google reviews, left exactly as families posted them',

  book: {
    h2: 'Book a free lesson for a Swansea learner',
    intro: 'We match the first task to the learner: a running-total alarm game for a young child, a short Python program that averages a week of readings for a beginner, or the Carmarthen Road files and a CUSUM detector for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to set up a lesson for your Swansea learner.'
  },

  faq: {
    h2: 'Swansea coding class questions',
    intro: 'What Swansea families ask us most.',
    items: [
      { q: 'How many people live in Swansea?', a: 'The 2021 census counted 238,490 usual residents in Swansea, of whom 233,322 lived in households and the rest in communal establishments such as student halls and care homes.' },
      { q: 'How does Swansea compare with Wales?', a: 'In 2021, 8.0% of Swansea residents were aged 20 to 24 against 6.0% in Wales, 22.8% of those aged five and over were students against 19.9%, and there were 631.5 residents per square kilometre against 149.9.' },
      { q: 'What is a CUSUM detector?', a: 'A cumulative sum rule that adds up how far each new value falls short of normal, minus a small allowance, and raises an alarm when the total gets too big. It notices small, steady shifts that no single reading would reveal.' },
      { q: 'Did the detector notice spring 2020?', a: 'It found a drop, first flagged on 17 March 2020 at one setting and 14 March at a more sensitive one, both before the stay-at-home instruction on 23 March. Levels were already low from February, so the page makes no claim about the cause.' },
      { q: 'Where do the air readings come from?', a: 'DEFRA\'s UK-AIR service publishes ratified hourly readings from the Swansea Roadside monitor on the A483 Carmarthen Road as free yearly files. We used 2018 to 2021.' },
      { q: 'What did Swansea University contribute to computing?', a: 'The University says Professor Olek Zienkiewicz developed the finite element method there in the 1960s, a technique that revolutionised how manufactured products are designed and engineered. We are not connected with the University.' },
      { q: 'At what times do Swansea lessons run?', a: 'On weekday afternoons and evenings or at weekends, at a UK time chosen in the free lesson. India is four and a half hours ahead of Swansea in summer and five and a half hours ahead in winter.' },
      { q: 'Is there a Modern Age Coders centre in Swansea?', a: 'No. We have no Swansea centre and no premises anywhere in the UK; every lesson happens live online. A learner needs a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Swansea lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Swansea groups formed?', a: 'By level, pace and goals rather than age or postcode, with five to ten learners at one stage. When no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Wales and the UK',
    h2: 'Welsh pages and other cities',
    html: 'Along the M4, the <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff page</a> tests whether its size fits Zipf\'s law. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales guide</a> covers coding across the Curriculum for Wales, and exam help lives on the <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> and <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC Digital Technology</a> pages. Over the Bristol Channel, <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a> slides an eight-hour window over a different kind of air reading.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Swansea and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-cardiff', label: 'Cardiff' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE CS' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-swa .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.9vw, 2.45rem); }
.cg-root.cg-swa .cg-hero h1 { font-weight: 710; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-swa .cg-capsule { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.95rem; }
.cg-root.cg-swa .cg-eyebrow { letter-spacing: 0.15em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-swa .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.016em; }
.cg-root.cg-swa .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2.15rem); }
.cg-root.cg-swa .cg-table th { letter-spacing: 0.024em; }
.cg-root.cg-swa .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-swa .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-swa .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Swansea, Census 2021 via Nomis (W06000011): TS001 238,490 usual residents, 233,322 in households, 5,168 in communal establishments; TS007A 14,451 aged 15 to 19 (6.1 percent, Wales 5.7), 19,157 aged 20 to 24 (8.0 percent, Wales 6.0), 14,232 aged 25 to 29 (6.0 percent, Wales 6.0); TS068 51,845 students of 227,063 residents aged 5 and over (22.8 percent, Wales 19.9); TS006 631.5 usual residents per square kilometre (Wales 149.9). Swansea University, History: foundation stone laid by King George V on 19 July 1920; 89 students including eight women enrolled that year; 65 staff and 485 students by September 1939; two permanent buildings in 1947, Singleton Abbey and the library; finite element method developed in the 1960s by Professor Olek Zienkiewicz.',
    localProject: 'When did the air on Carmarthen Road change? DEFRA UK-AIR Swansea Roadside (SWA1, UKA00497, urban traffic, A483 Carmarthen Road by Lyon Street), hourly nitrogen dioxide 2018 to 2021, daily means from 18 or more hours. Baseline 2018: mean 23.5 micrograms per cubic metre, weekday means Friday 27.1 to Sunday 18.1, residual sd 11.39. Lower CUSUM on weekday residuals: k 0.5 h 4, 10 false alarms in 2019, first spring 2020 alarm 14 March; k 0.5 h 5, 8 and 17 March; k 1.0 h 5, 0 and 6 July. Single-day 2 sd rule: no alarms in 2019 or 2020. Means 1 February to 15 March 2020 16.9 (2019 27.7). 23 to 26 March 2020 31.4 to 36.2. Annual means 23.5, 24.2, 17.7, 19.2. GOV.UK statement 23 March 2020 as the date anchor only. Lesson family: change-point detection with CUSUM; distinct from Brighton and Hove sliding windows and Dundee forecast evaluation.',
    requiredMentions: [
      '233,322',
      '631.5',
      '19,157',
      '51,845',
      '227,063',
      'Zienkiewicz',
      'finite element',
      'CUSUM',
      'Carmarthen Road',
      'Singleton Abbey',
      'Lyon Street',
      '485 students'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Swansea: 238,490 usual residents; 233,322 in households; 5,168 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=W06000011' },
      { claim: 'Nomis, Census 2021 TS007A: Swansea and Wales five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=W06000011,W92000004' },
      { claim: 'Nomis, Census 2021 TS068: Swansea 51,845 students of 227,063 aged 5 and over (22.8 percent); Wales 19.9 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=W06000011,W92000004' },
      { claim: 'Nomis, Census 2021 TS006: population density, Swansea 631.5 and Wales 149.9 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=W06000011,W92000004' },
      { claim: 'DEFRA UK-AIR, Swansea Roadside site information: urban traffic, A483 Carmarthen Road, Lyon Street, 4.5 m from the kerb.', url: 'https://uk-air.defra.gov.uk/networks/site-info?site_id=SWA1' },
      { claim: 'DEFRA UK-AIR, hourly data files for Swansea Roadside, 2018 to 2021.', url: 'https://uk-air.defra.gov.uk/data/flat_files?site_id=SWA1' },
      { claim: 'GOV.UK, Prime Minister\'s statement on coronavirus, 23 March 2020: instruction to stay at home from that evening.', url: 'https://www.gov.uk/government/speeches/pm-address-to-the-nation-on-coronavirus-23-march-2020' },
      { claim: 'Swansea University, History: 1920 foundation stone, 89 students, 485 students by 1939, Singleton Abbey, finite element method.', url: 'https://www.swansea.ac.uk/the-university/history/' }
    ],
    rejectedClaims: [
      'Any claim that lockdown caused the 2020 drop: levels were already low from February and rose again from 23 to 26 March, so the page reports timing only.',
      'Health effects of nitrogen dioxide: excluded by the cluster rules; the page describes measurement and detection only.',
      'Swansea Council pages on the Mumbles Railway and Swansea Museum: both returned 403, so neither is described.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables and money data: excluded by the cluster rules.',
      'Any affiliation with DEFRA, Swansea University or Swansea Council.'
    ]
  }
};
