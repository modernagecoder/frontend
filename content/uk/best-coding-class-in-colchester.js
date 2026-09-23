'use strict';
// Colchester (cg- city page, UK cluster Phase 4). Spine: once it has been dry for a week, how long will it stay dry?
// Kaplan-Meier survival analysis of dry spells from the Environment Agency Hydrology daily rainfall at West Bergholt
// (station 9aedcc0b-121b-49c5-a706-9b5cb2598f05, measure rainfall-t-86400-mm-qualified), 13 July 2012 to 21
// September 2026, read 23 September 2026 (scratchpad col/km.py). 5,184 calendar days; 4,376 usable (Complete and
// Good), 808 unusable or missing. Wet day = at least 1.0 mm (our rule). Spells counted only when the wet day before
// them is observed: 696 spells, 686 ended by a wet day, 10 censored by unusable data (longest censored 14 days from
// 24 March 2025). Longest ended spell 58 days, 30 May to 26 July 2018. Kaplan-Meier: beyond 3 days 0.3782, 7 days
// 0.1643, 14 days 0.0571, 21 days 0.0170, 30 days 0.0046; median 2 days. Dropping censored spells: 0.1589 at 7,
// 0.0539 at 14; treating them as ended: 0.1609, 0.0532. Hazard (chance the next day is wet) by spell day: day 1
// 0.332 (231 of 696), day 2 0.262, day 3 0.233, days 4-5 0.187, 6-7 0.191, 8-10 0.139, 11-14 0.143, 15-21 0.172,
// 22-60 0.106 (11 of 104). Constant-hazard model from P(dry|dry) 0.773: beyond 7 days 0.1653, 14 days 0.0273, 21
// days 0.0045, 30 days 0.0004.
// Lesson family: survival analysis, Kaplan-Meier product-limit estimator with right-censoring, and the hazard
// function. Screened 23 September 2026: Kaplan-Meier 0 hits; distinct from Oxford (two-state Markov chain on rain)
// and Dun Laoghaire-Rathdown (lab values below a detection limit).
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Colchester E07000071: TS001 192,715 usual
// residents, 187,617 in households, 5,098 communal; TS007A 13,877 aged 20 to 24 (7.2 percent, England 6.0), 11,793
// aged 5 to 9 (6.1, England 5.9); TS068 40,421 students of 181,885 aged 5 and over (22.2 percent, England 20.4);
// TS006 587.2 per square km (England 433.5). Colchester Museums (Colchester + Ipswich Museums): Castle page, the
// stonework of the largest Norman keep in Europe; tours down to the Roman Vaults, the foundations of the Temple of
// Claudius; Romans in Colchester session page: Colchester was the first Roman capital of Britain and site of
// Boudica's rebellion. NHLE scheduled monuments (open data layer): Colchester Castle and the Temple of Claudius
// 1002217; Balkerne Gate 1002187; Colchester Roman Circus including sections of the Benedictine Abbey of St John
// 1021426, scheduled 13 November 2007. GOV.UK List of Cities (2022) includes Colchester. Places in OS Open Names
// (Colchester district): West Bergholt, Lexden, Stanway, Wivenhoe, Greenstead, Mile End, Old Heath, Rowhedge,
// Dedham, Boxted, Marks Tey, Great Horkesley, Eight Ash Green, Berechurch, Langham.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'COLCHESTER', blurb: 'Britain\'s first Roman capital, as its museum puts it, with a project that asks how long a dry spell will last once it has begun.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-colchester',
  code: 'clc',
  accent: '#7E279B',
  accentRationale: 'Colchester: an imperial Roman purple, from the solver (6.43:1 on every paper tint, dE 8.3 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Colchester',
    eyebrow: 'Colchester, Essex',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Colchester' },
      { type: 'AdministrativeArea', name: 'Essex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Colchester, England',
  title: 'Best Coding Classes in Colchester | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Colchester learners aged 6 to 67, from Lexden and Stanway to Wivenhoe. Your first lesson costs nothing.',
  ogDescription: 'Coding and AI lessons for Colchester, on a page that uses fourteen years of rain at West Bergholt to ask how long a dry spell lasts once it starts.',
  twitterDescription: 'Colchester learners aged six to sixty-seven can study coding, Python and AI with us live online. There is no charge for the first lesson.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Colchester Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, statistics with real data, AI and mathematics taught live online in English to Colchester children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Colchester',
  capsuleQ: 'What are the best coding classes in Colchester?',
  capsule: 'Colchester had 192,715 usual residents at the 2021 census, and 7.2% of them were aged 20 to 24, against 6.0% in England. Colchester Museums describe the town as the first Roman capital of Britain, and the castle\'s vaults as the foundations of the Temple of Claudius. Learners across Colchester, aged six to sixty-seven, can study with our teachers in India in live video lessons, one to one or in a group of five to ten at the same stage, at hours arranged around the UK day. The first lesson is free; afterwards a group place is USD 100 a month and private teaching is USD 150.',
  lead: 'Once it stops raining in Colchester, how long will it stay dry? Fourteen years of daily rainfall from the gauge at West Bergholt hold 696 dry spells, and the answer is not what a simple model predicts. If every dry day had the same chance of rain the next day, a spell lasting beyond two weeks would be rare, about 2.7 in a hundred. The real figure, measured with the Kaplan-Meier method from survival analysis, is 5.7 in a hundred, because the chance of rain falls the longer a spell goes on: 33.2% after one dry day, but only 10.6% once a spell has passed three weeks. The longest ran 58 days, from 30 May to 26 July 2018.',
  wa: 'Hello Modern Age Coders, could we book a free coding lesson for a learner in Colchester?',

  picks: {
    eyebrow: 'Course picks for Colchester',
    h2: 'Four courses for the Roman town',
    intro: 'Start from what the learner enjoys already. The first live lesson of every course is free, and you will not be asked for a card to book it.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, the start of programs that keep a tally and count how long a streak lasts.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first steps to finished projects, enough to read fourteen years of daily readings and measure every streak in them.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Statistics on real data in Python, including what to do with records that stop before the story ends.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults whose work involves how long things last, from customer accounts to equipment between repairs.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Colchester today',
      h2: 'A young town with plenty of students',
      intro: 'Census 2021 figures for the City of Colchester district, from Wivenhoe and Rowhedge to Dedham and Boxted, from the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Colchester district, Census 2021', head: ['Measure', 'Colchester', 'England'], rows: [
          ['Usual residents', '192,715', '56,490,048'],
          ['Living in households', '187,617', 'Not compared'],
          ['Living in communal establishments', '5,098', 'Not compared'],
          ['Aged 5 to 9', '11,793 (6.1%)', '5.9%'],
          ['Aged 20 to 24', '13,877 (7.2%)', '6.0%'],
          ['Students among residents aged 5 and over', '40,421 (22.2%)', '20.4%'],
          ['Usual residents per square kilometre', '587.2', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Young adults', p: 'People aged 20 to 24 were 7.2% of Colchester\'s residents in 2021, against 6.0% across England, and 22.2% of those aged five and over were studying.' },
          { h3: 'Children too', p: 'Children aged 5 to 9 made up 6.1% of the district, just above England\'s 5.9%, so the town has plenty of primary-age learners as well as students.' },
          { h3: 'Communal living', p: 'Some 5,098 residents lived in communal establishments, such as student halls, while 187,617 lived in ordinary households.' }
        ] },
        { kind: 'p', text: 'Our Colchester groups draw on that whole mix. A Year 5 child in Stanway might be animating a first story, a Year 11 student in Greenstead preparing GCSE Computer Science, and an adult in Lexden learning Python for work, each placed in a small group at the right level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Roman and Norman',
      h2: 'A temple under a castle, and a circus under the town',
      intro: 'From Colchester Museums\' own pages and Historic England\'s open data on scheduled monuments.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The first capital', p: 'Colchester Museums describe the town as the first Roman capital of Britain and the site of Boudica\'s rebellion, which their school sessions explore in the vaults beneath the castle.' },
          { h3: 'Temple and keep', p: 'The museum\'s guided tours go down to the Roman Vaults, which it calls the foundations of the Temple of Claudius, and it describes the castle as the largest Norman keep in Europe.' },
          { h3: 'Gate and circus', p: 'Historic England schedules the Balkerne Gate as a monument, and in 2007 scheduled the Colchester Roman Circus together with sections of the Benedictine Abbey of St John.' }
        ] },
        { kind: 'p', text: 'We have no connection with Colchester Museums, Historic England or Colchester City Council; Colchester itself appears on the government\'s List of Cities, published in 2022. Colchester\'s Roman past is on this page because it is the story the town is known for; the weather project is here because a record that runs day after day for fourteen years is exactly the kind of data where careful counting pays off.' },
        { kind: 'spec', title: 'Where the rainfall comes from', p: 'The Environment Agency\'s Hydrology service publishes daily rainfall totals from its gauge at West Bergholt, in the Colchester district, as open data, and marks every day as complete or incomplete and good, suspect or unchecked.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Once it has been dry for a week, how long will it stay dry?',
      intro: 'Survival analysis measures how long things last. The Kaplan-Meier method builds a survival curve one day at a time, and it can use spells whose ending we never saw.',
      body: [
        { kind: 'table', caption: 'Dry spells at West Bergholt, 13 July 2012 to 21 September 2026: share of spells still dry after each length (a wet day means at least 1.0 millimetre)', head: ['Spell lasts beyond', 'Kaplan-Meier on the record', 'Model with a constant chance of rain'], rows: [
          ['3 days', '37.8%', '46.2%'],
          ['7 days', '16.4%', '16.5%'],
          ['14 days', '5.7%', '2.7%'],
          ['21 days', '1.7%', '0.45%'],
          ['30 days', '0.46%', '0.04%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Keep only good days', p: 'Of 5,184 days in the record, 4,376 are marked complete and good. A spell only counts if we saw the wet day that started it, which leaves 696 spells.' },
          { h3: '2. Handle the unfinished', p: 'Ten spells ran into days we cannot use, so we know they lasted at least that long but not how long. Kaplan-Meier keeps them in the count until the point they disappear.' },
          { h3: '3. Build the curve', p: 'For each day, divide the spells that ended by those still going, and multiply the chances of surviving each day. The median spell is just 2 days.' }
        ] },
        { kind: 'callout', h3: 'The longer it is dry, the drier it stays', p: 'On the first day of a spell, the chance that the next day is wet is 33.2%. By days 8 to 10 it has fallen to 13.9%, and beyond three weeks it is 10.6%. A model with a constant chance of rain gets the one-week figure almost exactly right, 16.5% against 16.4%, and then badly underestimates long droughts. It expects 0.04% of spells to pass a month; the record shows 0.46%, including the 58 days without a wet day from 30 May to 26 July 2018.' },
        { kind: 'p', text: 'We checked whether the careful handling of unfinished spells mattered. Dropping the ten censored spells gives 5.4% beyond two weeks instead of 5.7%, and treating them as if rain ended them gives 5.3%. Here the difference is small because only ten spells were cut short, and the longest of those was 14 days, from 24 March 2025. In medicine, engineering and business, where far more records stop early, the same choice can change the answer completely.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'How long things last',
      h2: 'Five questions for any data about durations',
      intro: 'Learned on Colchester\'s dry spells, then used for how long customers stay, how long machines run between repairs and how long anything lasts when some records are unfinished.',
      body: [
        { kind: 'table', caption: 'Decisions behind a survival curve', head: ['Question', 'For West Bergholt rain', 'What goes wrong if you skip it'], rows: [
          ['What counts as the event?', 'A day with at least 1.0 mm', 'Spells that change length when the rule changes'],
          ['Did we see the start?', 'Only spells after an observed wet day', 'Spells counted from the middle, too short'],
          ['What about unfinished ones?', '10 censored spells kept until they vanish', 'Long spells quietly thrown away'],
          ['Is the rate constant?', 'No: 33.2% on day one, 10.6% after three weeks', 'A model blind to long droughts'],
          ['Which days are usable?', '4,376 complete and good out of 5,184', 'Suspect readings shaping the answer']
        ] },
        { kind: 'p', text: 'The first row is a choice we made, not a fact about rain. Lower the threshold and more days count as wet, so spells get shorter. The honest report names the threshold, keeps it fixed, and shows what changes if someone picks another.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Keeping a weather diary, colouring wet and dry days, and counting the longest run of dry ones.' },
          { h3: 'Teenagers', p: 'Fourteen years of Environment Agency data in Python, a Kaplan-Meier curve built by hand, and a constant-rate model tested against it.' },
          { h3: 'Adults', p: 'Survival curves for questions at work, with unfinished records handled properly and every rule written down.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Environment Agency, Colchester Museums, Historic England or Colchester City Council. The rainfall, census tables and monument records are open data; the spells, curves and comparisons on this page are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a weather diary to a survival curve',
    intro: 'Treat the ages as a guide only; the free lesson shows where a learner should begin.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Streaks and tallies', p: 'Recording wet and dry days, then finding the longest streak and the most common length of streak.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Counting in code', p: 'Reading a year of daily readings in Python and measuring every run of dry days with a loop.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Survival analysis', p: 'Building a Kaplan-Meier curve, handling unfinished spells and comparing it with a constant-rate model.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Durations at work', p: 'Measuring how long accounts, machines or projects last, with unfinished records treated honestly.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can forecast tomorrow\'s weather. Why should a Colchester teenager count dry spells by hand?',
    intro: 'Because a model is only as good as the assumptions it makes about time, and this project makes one of them visible.',
    p1: 'The simplest weather model assumes every day is a fresh start, with the same chance of rain whatever came before. Colchester\'s record shows that is wrong in a specific, measurable way: dry spells grow more stubborn the longer they last. A learner who has seen the curve understands why good forecasting models need memory, and can ask whether an AI tool has it.',
    p2: 'Censoring appears everywhere AI is used on real records, from patients who leave a study to customers who have not cancelled yet. Models that ignore unfinished records learn a biased picture. Handling ten unfinished dry spells properly is a small, concrete way to learn a habit that matters in far bigger systems.',
    closer: 'So a Colchester teenager should keep learning to code in 2026, in a town whose story began under the Romans: a model can answer in a second, but someone has to check whether its idea of time matches the record.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lexden, Wivenhoe or Marks Tey, all from your own desk',
    intro: 'The district runs from Dedham and Boxted in the north to Wivenhoe and Rowhedge in the south east. Online, a learner in Boxted is exactly as close to the lesson as one near the castle.',
    cells: [
      { h3: 'Town and villages together', p: 'A learner in Rowhedge and another in Great Horkesley can take the same class, with no journey into the town centre.' },
      { h3: 'The stages schools use', p: 'Lessons follow the English school stages found in Colchester, from Reception and Key Stages 1 to 4 through GCSE and A level, taught in English.' },
      { h3: 'A useful free lesson', p: 'The first session is a real lesson on a real task, and it ends with a recommended level, course and weekly slot. We do not take card details.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners at one level, from Colchester, elsewhere in the UK and overseas, so each stage has sensible times on offer.' },
      { h3: 'Two lessons weekly', p: 'Two fixed lessons each week, about eight a month, with half terms and exam periods agreed with the teacher in advance.' },
      { h3: 'Afternoon here, night there', p: 'A 4.30 pm lesson in Colchester begins at 9 pm in India during British Summer Time and 10 pm in winter, as India keeps a single time all year; our teachers work late for UK families.' }
    ],
    spec: { title: 'Across north Essex and Suffolk', p: 'Families in Clacton-on-Sea, Harwich, Braintree or Sudbury join exactly the same classes, since lessons are online and groups are built by level.' }
  },

  fees: {
    h2: 'Colchester lesson fees',
    intro: 'One free lesson, then one fee a month.',
    first: 'A complete lesson free of charge, ending with a suggested level, course and weekly time.',
    group: 'Roughly eight live lessons a month in a group of five to ten learners at the same stage.',
    private: 'Roughly eight live lessons a month, with the teacher focused only on your learner.',
    closer: 'A family in Mile End or Old Heath pays in US dollars, as every family outside India does, and no pound prices appear anywhere on our site. The free lesson happens first, and billing only starts once the course and weekly time are agreed; pausing, missed lessons and switching between group and private teaching are covered on the pricing page.'
  },

  reviewsH2: 'Six families\' words from Google, unchanged',

  book: {
    h2: 'Book a free lesson for a Colchester learner',
    intro: 'The first task fits the learner: a streak-counting game for a young child, a short Python loop that finds the longest run in a list for a beginner, or fourteen years of West Bergholt rain and a survival curve for a teenager ready for real data.',
    success: 'Thank you. We will contact you soon to arrange a lesson for your Colchester learner.'
  },

  faq: {
    h2: 'Colchester coding class questions',
    intro: 'Questions Colchester families often send us.',
    items: [
      { q: 'How many people live in the Colchester district?', a: 'Census 2021 counted 192,715 usual residents in the City of Colchester district: 187,617 in households and 5,098 in communal establishments.' },
      { q: 'How does Colchester compare with England?', a: 'It is younger than average: 7.2% of residents were aged 20 to 24 in 2021, against 6.0% in England, and 40,421 of the 181,885 residents aged five and over were students, 22.2% against 20.4%. Density was 587.2 residents per square kilometre.' },
      { q: 'What is the Kaplan-Meier method?', a: 'A way of estimating how long things last when some records stop before the end is seen. At each step it divides the number that ended by the number still being followed, and multiplies the chances of surviving each step to build a curve.' },
      { q: 'How long do dry spells last at West Bergholt?', a: 'Usually not long: the median spell is 2 days. But 5.7% last beyond two weeks and 1.7% beyond three, and the longest in the record ran 58 days, from 30 May to 26 July 2018, counting a wet day as one with at least 1.0 millimetre.' },
      { q: 'Where does the rainfall data come from?', a: 'From the Environment Agency\'s Hydrology open data service: daily rainfall at its West Bergholt gauge from 13 July 2012 to 21 September 2026, using only days the Agency marks complete and good.' },
      { q: 'Why is Colchester called the first Roman capital of Britain?', a: 'That is how Colchester Museums describe it; their castle tours visit the Roman Vaults, which they call the foundations of the Temple of Claudius. We are not connected with the museums.' },
      { q: 'When can Colchester learners have lessons?', a: 'Families choose after school, a weekday evening or a weekend, and the exact UK time is agreed in the free lesson. India is ahead of Colchester by four and a half hours in summer and five and a half in winter.' },
      { q: 'Do you have a centre in Colchester?', a: 'No. There is no Colchester centre and we have no premises in the UK, because all lessons are live online. A learner needs a computer with sound and a steady connection, and our phone number is an Indian one.', boiler: true },
      { q: 'What will lessons cost a Colchester family?', a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one lessons on the same schedule are USD 150 a month. The course, format and time are agreed before any charge.', boiler: true },
      { q: 'How do you put groups together?', a: 'By level, pace and goals rather than age or where learners live, with five to ten at one stage in each group. When no group suits the learner\'s week, we offer one-to-one teaching.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'East of England and beyond',
    html: 'Down the road, the <a class="cg-inline-link" href="/best-coding-class-in-chelmsford">Chelmsford page</a> compresses a year of river readings, and <a class="cg-inline-link" href="/best-coding-class-in-southend-on-sea">Southend-on-Sea</a> pins down the minute of high water. For a different way to model rain, <a class="cg-inline-link" href="/best-coding-class-in-oxford">Oxford</a> asks whether today\'s weather remembers yesterday\'s. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> explains school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> leads to every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Colchester and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-chelmsford', label: 'Chelmsford' },
    { href: '/best-coding-class-in-southend-on-sea', label: 'Southend-on-Sea' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-clc .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-clc .cg-hero h1 { font-weight: 750; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-clc .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-clc .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-clc .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.014em; }
.cg-root.cg-clc .cg-grid-3 { gap: clamp(1rem, 2.7vw, 2.25rem); }
.cg-root.cg-clc .cg-table th { letter-spacing: 0.022em; }
.cg-root.cg-clc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-clc .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-clc .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Colchester, Census 2021 via Nomis (E07000071): TS001 192,715 usual residents, 187,617 in households, 5,098 in communal establishments; TS007A 11,793 aged 5 to 9 (6.1 percent, England 5.9), 13,877 aged 20 to 24 (7.2 percent, England 6.0); TS068 40,421 students of 181,885 residents aged 5 and over (22.2 percent, England 20.4); TS006 587.2 usual residents per square kilometre (England 433.5). Colchester Museums: largest Norman keep in Europe; Roman Vaults, foundations of the Temple of Claudius; first Roman capital of Britain and site of Boudica\'s rebellion. NHLE scheduled monuments: Colchester Castle and the Temple of Claudius (1002217), Balkerne Gate (1002187), Colchester Roman Circus (1021426, scheduled 13 November 2007). GOV.UK List of Cities 2022.',
    localProject: 'Once it has been dry for a week, how long will it stay dry? EA Hydrology daily rainfall, West Bergholt, 13 July 2012 to 21 September 2026: 4,376 usable of 5,184 days; wet at 1.0 mm or more. 696 spells with observed start, 686 ended, 10 censored (longest 14 days from 24 March 2025). Kaplan-Meier beyond 3/7/14/21/30 days: 37.8, 16.4, 5.7, 1.7, 0.46 percent; median 2 days. Constant hazard (P(dry|dry) 0.773): 16.5, 2.7, 0.45, 0.04 percent at 7/14/21/30. Hazard 33.2 percent day 1, 13.9 days 8-10, 10.6 beyond 21. Censoring variants at 14 days: drop 5.4, as-ended 5.3. Longest spell 58 days, 30 May to 26 July 2018. Lesson family: Kaplan-Meier survival analysis.',
    requiredMentions: [
      '192,715',
      '187,617',
      '587.2',
      '40,421',
      '181,885',
      'Temple of Claudius',
      'Boudica',
      'Balkerne',
      'Norman keep',
      'West Bergholt',
      'Wivenhoe',
      'Kaplan-Meier'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Colchester: 192,715 usual residents; 187,617 in households; 5,098 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000071' },
      { claim: 'Nomis, Census 2021 TS007A: Colchester and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000071,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Colchester 40,421 students of 181,885 aged 5 and over (22.2 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000071,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Colchester 587.2 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E07000071,E92000001' },
      { claim: 'Environment Agency Hydrology, West Bergholt daily rainfall with completeness and quality flags.', url: 'https://environment.data.gov.uk/hydrology/id/measures/9aedcc0b-121b-49c5-a706-9b5cb2598f05-rainfall-t-86400-mm-qualified' },
      { claim: 'Colchester Museums, Colchester Castle: largest Norman keep in Europe; Roman Vaults, foundations of the Temple of Claudius.', url: 'https://colchester.cimuseums.org.uk/visit/colchester-castle/' },
      { claim: 'Colchester Museums, Romans in Colchester session: first Roman capital of Britain and site of Boudica\'s rebellion.', url: 'https://colchester.cimuseums.org.uk/learn/museum-sessions/romans-in-colchester/' },
      { claim: 'Historic England NHLE open data, scheduled monuments: Colchester Castle and the Temple of Claudius (1002217), Balkerne Gate (1002187), Colchester Roman Circus (1021426, 13 November 2007).', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1021426' },
      { claim: 'GOV.UK, List of Cities (29 August 2022): Colchester listed.', url: 'https://www.gov.uk/government/publications/list-of-cities' }
    ],
    rejectedClaims: [
      'Colchester as Britain\'s oldest recorded town: no fetchable primary source was found; the museum\'s own wording (first Roman capital of Britain) is used and attributed.',
      'A two-state Markov chain on the same rain: already the Oxford page\'s project; survival analysis is used instead.',
      'A claim that censoring changed the answer much here: only 10 of 696 spells were censored, and the page reports the small difference.',
      'Days marked incomplete, suspect, estimated or unchecked: excluded (808 of 5,184); spells are counted only between usable days.',
      'Visit Colchester pages: returned 403 and were not circumvented.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Environment Agency, Colchester Museums, Historic England or Colchester City Council.'
    ]
  }
};
