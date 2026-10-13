'use strict';
// Bathurst (cg- regional city page, Australia cluster Phase 7, row 169). Shaped page (AI and programming): leads with
// teenagers and adults. Spine: when will Bathurst's population double, and why does the answer swing by thirty years
// depending on which years you feed the calculation? Data: ABS Data API, dataflow ABS_ANNUAL_ERP_LGA2025 (ERP by LGA,
// 2001 to 2025), key ERP.3.TOT.10470.LGA2025.A (Bathurst Regional LGA, persons, all ages), Creative Commons Attribution
// 4.0, read 8 October 2026: 35,504 in 2001 rising every year to 45,359 in 2025. Computed by us (scratchpad
// au/r5/bth_growth in this worker's session): change 9,855; compound annual growth 1.0259 percent; exact doubling
// time ln 2 / ln(1 + r) = 67.91 years; rule of 70 gives 68.23, rule of 72 gives 70.18; by window: 2001 to 2010 1.188
// percent (doubling 58.7 years), 2010 to 2020 0.960 (72.5), 2016 to 2025 0.794 (87.7), 2020 to 2025 0.866 (80.3);
// fastest single year 2009 (+2.49 percent), slowest 2004 (+0.45 percent); mean of yearly rates 1.0268 percent. Rule
// of 70 error against the exact formula: +0.49 percent at a 1 percent rate, -3.75 at 10, -18.11 at 50. Lesson family:
// compound growth, doubling time and the rule of 70; screened free site-wide on 9 October 2026 and claimed by AU-R5.
// Place facts read raw on 8 October 2026: ABS Census 2021 QuickStats, Bathurst Significant Urban Area (1005), with New
// South Wales and Australia: 37,396 people; median age 37; 9,564 families; 15,710 private dwellings; 2.4 people per
// household; separate house 11,429 (82.7 percent; NSW 65.6); flat or apartment 704 (5.1; NSW 21.7); Professionals
// 3,365 (19.3; NSW 25.8); Technicians and Trades Workers 2,438 (14.0; NSW 11.9); Community and Personal Service
// Workers 2,769 (15.9; NSW 10.6); Bachelor Degree level and above 5,762 (19.0; NSW 27.8; Australia 26.3); aged 15 to
// 19: 2,520 (6.7; NSW 5.7); aged 20 to 24: 2,631 (7.0; NSW 6.1); industry: State Government Administration 595 (3.4;
// NSW 1.5; Australia 1.4). NSW Department of Education 2027 calendar: Term 3 Tuesday 20 July to Friday 24 September;
// Term 4 Tuesday 12 October to Monday 20 December. IANA tz: Australia/Sydney. Excluded by the cluster rules: income,
// rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'BATHURST', label: 'Bathurst', blurb: 'Bathurst, 25 years of official population estimates, and why a doubling date depends on the years you choose.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-bathurst',
  code: 'bthr',
  accent: '#864456',
  accentRationale: 'Bathurst: a dusk brick rose (HSV saturation 0.49, value 0.53, hue 345), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 6.6:1 on white and 5.3:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Bathurst',
    eyebrow: 'Bathurst, Central West New South Wales',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bathurst, New South Wales',
  title: 'AI and Programming Classes in Bathurst',
  description: 'Live online AI and programming classes for Bathurst teens and adults: Python, models, forecasting and honest data. Small groups or one to one, first class free.',
  ogDescription: 'AI and programming classes for Bathurst teens and adults, with a project on why a doubling date moves by thirty years with the data window.',
  twitterDescription: 'AI and programming classes in Bathurst, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Bathurst Learners',
    description: 'Level-matched online Python, data modelling, forecasting and applied AI for teenagers and adults across Bathurst and the Central West, taught live in English.'
  },

  h1: 'AI and programming classes in Bathurst',
  capsuleQ: 'What makes the best AI and programming class for a Bathurst learner?',
  capsule: 'One that teaches you to build models and to question them, using real Australian data and a live teacher who checks your reasoning. Bathurst\'s urban area counted 37,396 residents in 2021. Classes run online, privately or with a handful of learners at your level, and the first one is free.',
  lead: 'The ABS publishes an estimated resident population for the Bathurst council area every year: 35,504 in 2001, then a rise in every single year to 45,359 in 2025. Ask a program, or a chatbot, when that population will double and you get a confident year. Our Bathurst learners compute it three ways, with the exact formula, the rule of 70 and the rule of 72, and then repeat the calculation over different windows. Using 2001 to 2010 the doubling time is 58.7 years; using 2016 to 2025 it is 87.7. Same city, same official series, a thirty-year spread that depends entirely on a choice the answer never mentions.',
  wa: 'Hello Modern Age Coders, I would like a free AI and programming class for a learner in Bathurst.',

  picks: {
    eyebrow: 'AI and programming picks for Bathurst',
    h2: 'Courses that suit Bathurst teens and adults',
    intro: 'Four starting points for the work on this page. The free trial lesson decides which, and no card is ever requested.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Models from data, how they predict, and how to test whether a prediction deserves trust.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python fundamentals with real government data series from the first month.' },
      { course: 'artificial-intelligence-complete-masterclass-college', band: 'University and adult', note: 'Machine learning, evaluation and the limits of extrapolation, built in Python.' },
      { course: 'statistics-probability-maths-course', band: 'Any age with algebra', note: 'Growth rates, logarithms and the maths behind doubling rules.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bathurst in the Census',
      h2: 'A Central West city of 37,396',
      intro: '2021 Census QuickStats for the Bathurst urban area, compared with New South Wales and Australia where the bureau reports both.',
      body: [
        { kind: 'table', caption: 'The Bathurst urban area at the 2021 Census', head: ['Item', 'Bathurst', 'New South Wales', 'Australia'], rows: [
          ['Residents', '37,396', 'Not reported', 'Not reported'],
          ['Median age', '37', 'Not reported', 'Not reported'],
          ['Families', '9,564', 'Not reported', 'Not reported'],
          ['Private dwellings', '15,710', 'Not reported', 'Not reported'],
          ['Detached houses as a share of occupied homes', '11,429, or 82.7%', '65.6%', '72.3%'],
          ['Residents aged 20 to 24', '2,631, or 7.0%', '6.1%', '6.2%'],
          ['Bachelor degree or higher, residents 15 and over', '5,762, or 19.0%', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A young median', p: 'Half of Bathurst\'s residents were 37 or younger, and 2,520 were aged 15 to 19, 6.7% against 5.7% statewide.' },
          { h3: 'Government work', p: 'State government administration employed 595 residents, 3.4% of workers, more than double the NSW share of 1.5%.' },
          { h3: 'Professionals and trades', p: 'The Census counted 3,365 professionals and 2,438 technicians and trades workers among employed residents.' }
        ] },
        { kind: 'p', text: 'Small census cells are lightly adjusted by the ABS to protect privacy, so table pieces may not add exactly to published totals. Every value here is the published one, and no total on this page is our own sum.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'When will Bathurst\'s population double, and why do three honest methods disagree?',
      intro: 'The ABS estimated resident population for the Bathurst council area, 2001 to 2025, read through the ABS Data API.',
      body: [
        { kind: 'table', caption: 'Doubling time by data window (our calculation from ABS estimates)', head: ['Years used', 'Average yearly growth', 'Exact doubling time', 'Rule of 70'], rows: [
          ['2001 to 2025', '1.026%', '67.9 years', '68.2 years'],
          ['2001 to 2010', '1.188%', '58.7 years', '58.9 years'],
          ['2010 to 2020', '0.960%', '72.5 years', '72.9 years'],
          ['2016 to 2025', '0.794%', '87.7 years', '88.2 years'],
          ['2020 to 2025', '0.866%', '80.3 years', '80.8 years']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Compound growth', p: 'The average yearly rate is the 24th root of 45,359 divided by 35,504, minus one: 1.026% a year, not the simple change divided by 24.' },
          { h3: '2. The exact formula', p: 'Doubling time is the natural log of 2 divided by the natural log of 1 plus the rate. For 1.026% that is 67.9 years.' },
          { h3: '3. The rule of 70', p: 'Dividing 70 by the percentage rate gives 68.2 years, within half of one per cent of the exact answer at this low rate.' }
        ] },
        { kind: 'callout', h3: 'The window matters more than the method', p: 'The three formulas agree to within two years. The choice of years does not: growth averaged 1.19% a year in the first decade, with a fastest single year of 2.49% in 2009, and only 0.79% a year from 2016 to 2025. That spread, 58.7 to 87.7 years, is the honest answer to "when will Bathurst double". Any single year printed without its window is a choice dressed up as a fact. None of these figures is a forecast; they describe what the past rates would imply if continued.' },
        { kind: 'p', text: 'Two geographies are in play and the page keeps them apart. The census table describes the Bathurst urban area, 37,396 people in 2021; the growth series is the ABS estimate for the whole Bathurst council area, which includes villages beyond the city and stood at 43,674 in 2021. Neither number is derived from the other.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Rules of thumb in code',
      h2: 'When a shortcut is good enough, and when it breaks',
      intro: 'Learners code the exact doubling formula and the shortcuts, then find where the shortcuts fail.',
      body: [
        { kind: 'table', caption: 'Rule of 70 against the exact doubling time (our calculation)', head: ['Growth rate', 'Exact', 'Rule of 70', 'Error'], rows: [
          ['1%', '69.66 years', '70.0 years', '+0.49%'],
          ['5%', '14.21 years', '14.0 years', '-1.45%'],
          ['10%', '7.27 years', '7.0 years', '-3.75%'],
          ['50%', '1.71 years', '1.4 years', '-18.11%']
        ] },
        { kind: 'p', text: 'The rule of 70 works because the natural log of 2 is about 0.693, and for small rates the log of 1 plus r is close to r. As rates rise that approximation fails, and by 50% a year the shortcut is out by almost a fifth. Writing both versions in Python and plotting the gap teaches more about logarithms than a page of algebra.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Fetch the series, compute the growth rate and doubling time, and present the window table with a paragraph on what it means.' },
          { h3: 'University students', p: 'Logarithms, compound growth and approximation error, implemented and tested against the exact formula.' },
          { h3: 'Adults at work', p: 'Check any growth claim in a report by asking which years it used and recomputing it from the source series.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the ABS. The population estimates and census counts are the bureau\'s; the growth rates, doubling times and errors are our own calculations.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Bathurst',
      h2: 'The 2027 school year and summer time',
      intro: 'Local timing that shapes when Bathurst learners fit in lessons.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 3 in 2027', p: 'The NSW Department of Education calendar sets Term 3 from Tuesday 20 July to Friday 24 September 2027.' },
          { h3: 'Term 4 in 2027', p: 'The final term of 2027 runs from Tuesday 12 October to Monday 20 December.' },
          { h3: 'Daylight saving', p: 'Bathurst follows Sydney time, which the IANA database moves forward in early October and back in early April.' }
        ] },
        { kind: 'spec', title: 'An afternoon slot in India', p: 'A 5pm Bathurst lesson falls at 12:30pm India time in winter and 11:30am in summer, comfortably within our teachers\' working day.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first formula in Python to models you can defend',
    intro: 'The ages are approximate; the free lesson places each learner properly.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Rates and loops', p: 'Growing a number year by year in a loop, then spotting when it doubles.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Logs and models', p: 'Logarithms, fitted growth rates and the doubling-window table on real ABS data.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'University', h3: 'Forecasting honestly', p: 'Fitting, validating and stating the assumptions behind any projection.', courses: ['artificial-intelligence-complete-masterclass-college', 'data-science-complete-masterclass-college'] },
      { band: 'Adults', h3: 'Checking claims', p: 'Recomputing growth and doubling figures from source before passing them on.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why does an AI give one confident doubling year when the data supports a thirty-year range?',
    intro: 'Because the question did not ask for the range, and nothing forces the model to volunteer it.',
    p1: 'Ask a chatbot when Bathurst\'s population will double and it may pick a growth rate, apply the rule of 70 and name a year, all in one fluent paragraph. Each step can be correct while the answer still misleads, because the rate depends on which years it assumed. From this official series the doubling time ranges from 58.7 to 87.7 years depending on the window.',
    p2: 'Our Bathurst learners build the window table themselves, then use an assistant to draft the explanation and check that every number it prints names its years. Learning to ask "over which period?" is the part no tool supplies on its own.',
    closer: 'A Bathurst teenager who has watched a doubling date slide by three decades with the data window will read every AI forecast more carefully in 2026, and that habit starts with writing the code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Kelso to Eglinton, one live classroom',
    intro: 'The city and its surrounding villages are all an equal distance from an online lesson.',
    cells: [
      { h3: 'Across the council area', p: 'A learner in Kelso and another in Eglinton can join the same lesson without travelling at all.' },
      { h3: 'NSW stages and years', p: 'Teachers work with NSW year levels and the HSC, and every lesson is taught in English.' },
      { h3: 'Trial first', p: 'You build something real with a teacher, then hear a suggested level, course and time, with no payment details requested.' },
      { h3: 'Groups', p: 'Fifteen to twenty learners at one level, drawn from Bathurst, the rest of Australia and abroad.' },
      { h3: 'Two a week, mostly', p: 'Around eight lessons a month, with exam periods and holidays agreed in advance.' },
      { h3: 'University schedules', p: 'Evening and weekend slots suit students and working adults as well as school learners.' }
    ],
    spec: { title: 'Lesson times stated for Bathurst', p: 'Bookings are confirmed in Bathurst time, so the October and April clock changes never move a lesson for the learner.' }
  },

  fees: {
    h2: 'What AI and programming classes cost in Bathurst',
    intro: 'Three numbers, nothing hidden.',
    first: 'A free trial lesson that ends with a suggested level, course and time.',
    group: 'A month of group lessons, usually eight, with fifteen to twenty learners at one level.',
    private: 'Roughly eight private lessons each month with the same teacher.',
    closer: 'Bathurst learners are charged in US dollars at the single national rate, with no surcharge for the Central West. Payment begins only once the trial has set a course and a weekly time; holiday breaks, absences and switching between group and private are explained on the pricing page.'
  },

  reviewsH2: 'Unedited Google reviews from our learners and families',

  book: {
    h2: 'Tell us what the learner wants to build',
    intro: 'The first lesson is planned around the answer: a growth loop in Python for a Year 9 beginner, the doubling-window table for a Year 11 student, or a forecasting check for an adult.',
    success: 'Thank you. We will be in touch soon about an AI and programming class in Bathurst.'
  },

  faq: {
    h2: 'Bathurst AI and programming questions',
    intro: 'Questions Bathurst learners and parents raise most often.',
    items: [
      { q: 'How many people live in Bathurst?', a: 'The Bathurst urban area counted 37,396 people at the 2021 Census. The ABS estimate for the wider council area was 45,359 in 2025.' },
      { q: 'What is the rule of 70?', a: 'The rule of 70 is a shortcut for doubling time: divide 70 by the yearly growth rate in per cent. At 1% growth it gives 70 years against an exact 69.66, and it becomes less accurate as rates rise.' },
      { q: 'What is compound annual growth?', a: 'Compound annual growth is the single yearly rate that turns a starting value into an ending value over a number of years. For Bathurst\'s estimates from 2001 to 2025 it is 1.026% a year.' },
      { q: 'What is the Bathurst doubling project?', a: 'Learners download 25 years of ABS population estimates, compute growth and doubling time with the exact formula and two shortcuts, and show how the answer moves from 58.7 to 87.7 years as the window changes.' },
      { q: 'Is this a population forecast?', a: 'No. The figures show what past growth rates would imply if they continued. They are a programming and maths exercise, not a prediction for Bathurst.' },
      { q: 'When do Bathurst classes take place?', a: 'Afternoons after school, weeknight evenings or weekends, chosen in the trial and stated in Bathurst time.' },
      { q: 'Can children under 13 join?', a: 'Yes, from age 6, beginning with Scratch and simple projects. This page focuses on teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Bathurst?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Bathurst coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore New South Wales',
    h2: 'More for Bathurst and NSW learners',
    html: 'For AI more broadly there is <a class="cg-inline-link" href="/ai-courses-for-kids-australia">AI courses for kids in Australia</a> and <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learning to think, not just use AI tools</a>. Senior students may want <a class="cg-inline-link" href="/hsc-maths-standard-tutoring">HSC Maths Standard tutoring</a>, and the overview for the state is <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bathurst and New South Wales',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/online-coding-and-python-classes-in-newcastle-nsw', label: 'Newcastle' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-bthr .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.1vw, 2.55rem); }
.cg-root.cg-bthr .cg-hero h1 { font-weight: 725; letter-spacing: -0.017em; line-height: 1.09; }
.cg-root.cg-bthr .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-bthr .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-bthr .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.011em; }
.cg-root.cg-bthr .cg-grid-3 { gap: clamp(0.9rem, 2.3vw, 1.85rem); }
.cg-root.cg-bthr .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-bthr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bthr .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-bthr .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Bathurst Significant Urban Area, ABS Census 2021 QuickStats, area code 1005, with New South Wales and Australia (read 8 October 2026): 37,396 people; median age 37; 9,564 families; 15,710 private dwellings; 2.4 people per household; separate house 11,429 (82.7 percent; NSW 65.6; Australia 72.3); flat or apartment 704 (5.1 percent; NSW 21.7); Professionals 3,365 (19.3 percent; NSW 25.8); Technicians and Trades Workers 2,438 (14.0 percent; NSW 11.9); Community and Personal Service Workers 2,769 (15.9 percent; NSW 10.6); Bachelor Degree level and above 5,762 (19.0 percent; NSW 27.8; Australia 26.3); aged 15 to 19: 2,520 (6.7 percent; NSW 5.7); aged 20 to 24: 2,631 (7.0 percent; NSW 6.1; Australia 6.2); industry: State Government Administration 595 (3.4 percent; NSW 1.5; Australia 1.4). NSW Department of Education 2027 calendar: Term 3 Tuesday 20 July to Friday 24 September; Term 4 Tuesday 12 October to Monday 20 December. IANA tz database: Australia/Sydney; Asia/Kolkata UTC+5:30.',
    localProject: 'Compound growth, doubling time and the rule of 70. ABS Data API, dataflow ABS_ANNUAL_ERP_LGA2025 version 1.0.0 (Estimated Resident Population by LGA 2025, 2001 to 2025), key ERP.3.TOT.10470.LGA2025.A (Bathurst LGA, persons, total age), CC BY 4.0, read 8 October 2026. Values: 2001 35,504; 2005 36,547; 2009 38,848; 2010 39,484; 2016 42,244; 2020 43,444; 2021 43,674; 2025 45,359 (rises every year). Computed: change 9,855; CAGR 1.0259 percent; exact doubling ln2/ln(1+r) 67.91 years; rule of 70 68.23; rule of 72 70.18; windows 2001-2010 1.188 percent (58.7 years), 2010-2020 0.960 (72.5), 2016-2025 0.794 (87.7), 2020-2025 0.866 (80.3); largest yearly rise 2009 +2.49 percent, smallest 2004 +0.45 percent; mean of yearly rates 1.0268 percent. Rule of 70 versus exact: 1 percent +0.49 percent error, 5 percent -1.45, 10 percent -3.75, 50 percent -18.11.',
    requiredMentions: [
      '37,396',
      '9,564',
      '15,710',
      '11,429',
      '5,762',
      '35,504',
      '45,359',
      '58.7 to 87.7 years',
      'Kelso to Eglinton'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Bathurst Significant Urban Area (1005): people, median age, families, dwellings, dwelling structure, occupation, education, age, industry.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1005' },
      { claim: 'ABS Data API, Estimated Resident Population by LGA (2025), 2001 to 2025, Bathurst LGA, CC BY 4.0.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.10470.LGA2025.A?format=csvfilewithlabels' },
      { claim: 'NSW Department of Education 2027 school calendar: Terms 3 and 4.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any population forecast or projected doubling year for Bathurst: the page computes what past rates imply and labels it as not a forecast.',
      'Any reason for faster growth around 2009 or slower growth after 2016: causes are not documented in the series, so only the rates are shown.',
      'Treating the urban area census count and the council area estimate as the same population: they are different geographies and are kept apart.',
      'OpenStreetMap data and Bureau of Meteorology observations: Overpass returned 406 and BOM 403 to this machine in October 2026; neither was circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the ABS or the NSW Department of Education.'
    ]
  }
};
