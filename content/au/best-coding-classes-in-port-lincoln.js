'use strict';
// Port Lincoln (cg- regional city page, Australia cluster Phase 7, row 195). Shaped page (best): leads with teenagers
// and adults. Spine: if a growth curve is built to find a ceiling, will it always find one? Data: ABS Data API,
// dataflow ABS_ANNUAL_ERP_LGA2025 (Estimated Resident Population by LGA, 2001 to 2025), Port Lincoln LGA code 46300,
// total persons, read raw on 10 October 2026 (scratchpad au/r8/dl/erp_pli.csv). ERP 2001 13,842; 2018 14,652; 2025
// 15,065; falls in 2015, 2016 and 2025. Fitted by us (au/r8/pli_gomp.py, scipy curve_fit) on 2001 to 2018 and tested
// on 2019 to 2025: Gompertz K 15,124, mean absolute error 169.8, 2025 prediction 14,830; exponential growth 0.351% a
// year, error 39.5, 2025 prediction 15,097; straight line error 39.7, 2025 prediction 15,080. Ceiling K by training end:
// 2015 17,632; 2018 15,124; 2021 15,559; whole series 19,286. Projections to 2050 (illustration only): Gompertz to 2018
// 15,065; straight line 16,335; exponential 16,478. Lesson family: Gompertz growth curve fit vs exponential; screened free
// site-wide on 10 October 2026 and claimed by AU-R8.
// Place facts read raw on 10 October 2026: ABS Census 2021 QuickStats, Port Lincoln Significant Urban Area (4005),
// with South Australia and Australia: 16,307 people; median age 41; 4,230 families; 7,591 private dwellings; 2.3
// people per household; separate house 5,239 (83.1 percent; SA 78.0; Australia 72.3); flat or apartment 352 (5.6;
// SA 6.8); Professionals 1,231 (16.7; SA 21.5; Australia 24.0); Technicians and Trades Workers 1,116 (15.2; SA 13.2);
// Bachelor Degree level and above 1,567 (11.8; SA 22.7; Australia 26.3); aged 15 to 19: 945 (5.8); aged 20 to 24:
// 846 (5.2); industry: Combined Primary and Secondary Education 207 (2.8; SA 1.6; Australia 1.2). IANA tz database
// 2026e and the Python tzdata TZif footer: Australia/Adelaide UTC+9:30, daylight saving (UTC+10:30) from the first
// Sunday in October to the first Sunday in April. SA term dates not shown: education.sa.gov.au returned 403 and was
// not circumvented. Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion,
// health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'PORT LINCOLN', label: 'Port Lincoln', blurb: 'Port Lincoln, 25 years of population estimates and a growth curve that insists on a ceiling.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-port-lincoln',
  code: 'plin',
  accent: '#164A92',
  accentRationale: 'Port Lincoln: a deep Boston Bay blue (HSV saturation 0.85, value 0.57, hue 214), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 8.7:1 on white and 7.0:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Port Lincoln',
    eyebrow: 'Port Lincoln, South Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'South Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-south-australia', name: 'South Australia' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'South Australia', href: '/coding-and-ai-classes-in-south-australia' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Port Lincoln, South Australia',
  title: 'Best Coding Classes in Port Lincoln | Online, Teens and Adults',
  description: 'Live online coding, Python and data science classes for Port Lincoln teenagers and adults, with a project that fits growth curves to real ABS population data.',
  ogDescription: 'Coding classes for Port Lincoln teens and adults, with a project that asks whether a curve built to find a ceiling will always find one.',
  twitterDescription: 'Port Lincoln coding classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'data-science-complete-masterclass-college',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Data Science Classes for Port Lincoln Learners',
    description: 'Level-matched online Python, curve fitting, forecasting and data analysis for teenagers and adults across Port Lincoln and Eyre Peninsula, taught live in English.'
  },

  h1: 'Coding classes in Port Lincoln',
  capsuleQ: 'What are the best coding classes in Port Lincoln?',
  capsule: 'Classes where a Port Lincoln teenager or adult fits real models to real South Australian data, then has to defend the result to a teacher who asks how it could be wrong. The urban area counted 16,307 residents at the 2021 Census. Teaching happens live over video, either privately or with a handful of classmates at the same stage, and nobody pays for the opening session.',
  lead: 'Every year the Australian Bureau of Statistics publishes an estimate of how many people live in each council area, and its open data service hands back Port Lincoln\'s figure for every 30 June from 2001 to 2025. The line climbs slowly from 13,842 to 15,065, dips twice in the middle of the 2010s and dips again by two people in the latest year. Ask a computer to fit a Gompertz curve, a shape designed to level off at a ceiling, and it obligingly finds one. Train it on a different span of years and the ceiling jumps by more than two thousand people. Our Port Lincoln learners find out why a model built to find a limit will report one whether or not the data supports it.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Port Lincoln.',

  picks: {
    eyebrow: 'Course picks for Port Lincoln',
    h2: 'Where a Port Lincoln learner might begin',
    intro: 'Four routes that suit the curve-fitting project on this page. The free first lesson settles which one, and no card details are asked for.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first lines to loading a CSV, plotting a series and writing a small fitting loop.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Pandas, charts and the habit of holding back data to test a model honestly.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Curve fitting, error measures, forecasting and the limits of extrapolation.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults working with data', note: 'Reading official statistics, checking revisions and reporting uncertainty plainly.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Port Lincoln in the Census',
      h2: 'A seafaring city of 16,307 at the foot of Eyre Peninsula',
      intro: 'Census night 2021, as the bureau\'s QuickStats report it for the Port Lincoln urban area, with state and national shares for comparison.',
      body: [
        { kind: 'p', text: 'QuickStats counted 16,307 people in the urban area, with a median age of 41, living as 4,230 families across 7,591 private dwellings and averaging 2.3 people to a household.' },
        { kind: 'table', caption: 'Shares that set Port Lincoln apart (2021 Census)', head: ['Share of the relevant group', 'Port Lincoln', 'SA', 'Nation'], rows: [
          ['Houses standing on their own block (5,239 dwellings)', '83.1%', '78.0%', '72.3%'],
          ['Workers in professional jobs (1,231 people)', '16.7%', '21.5%', '24.0%'],
          ['Adults holding a bachelor degree or above (1,567 people)', '11.8%', '22.7%', '26.3%'],
          ['Flats and apartments (352 dwellings)', '5.6%', '6.8%', 'Not compared']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Trades close behind', p: 'Port Lincoln counted 1,116 technicians and trades workers, 15.2% of employed residents, above the state share of 13.2%.' },
          { h3: 'Schools that span the years', p: 'Combined primary and secondary schools employed 207 residents, 2.8% of workers, against 1.6% across South Australia.' },
          { h3: 'Teenagers and young adults', p: 'The Census found 945 residents aged 15 to 19 and 846 aged 20 to 24.' }
        ] },
        { kind: 'p', text: 'The ABS makes small random changes to Census cells for privacy, so parts of a table do not always add up to the published total. Every number above is printed as the bureau publishes it, and none is a total we built by adding rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Will a growth curve built to find a ceiling always find one?',
      intro: 'Port Lincoln\'s estimated resident population from the ABS open data service, 2001 to 2025, fitted three ways in Python.',
      body: [
        { kind: 'table', caption: 'Trained on 2001 to 2018, tested on 2019 to 2025 (our fits, 10 October 2026)', head: ['Model', 'Average miss on the test years', 'Predicted for 2025', 'Published for 2025'], rows: [
          ['Gompertz curve', '169.8 people', '14,830', '15,065'],
          ['Exponential growth', '39.5 people', '15,097', '15,065'],
          ['Straight line', '39.7 people', '15,080', '15,065']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. A curve with a lid', p: 'The Gompertz curve rises quickly at first and then flattens towards a ceiling called K. It is a favourite for anything that must eventually stop growing, from a stand of trees to the downloads of a new app.' },
          { h3: '2. The fit finds a lid', p: 'Trained on 2001 to 2018, the curve sets its ceiling at 15,124 people, barely above the 2018 estimate of 14,652. It then predicts too low for every test year.' },
          { h3: '3. The lid moves', p: 'Stop the training in 2015 and the ceiling becomes 17,632. Stop in 2021 and it is 15,559. Use all 25 years and it is 19,286. The data cannot pin the ceiling down at all.' }
        ] },
        { kind: 'callout', h3: 'Why the ceiling wobbles', p: 'Port Lincoln grew by about a third of a percent a year, slowly and almost steadily, with small falls in 2015, 2016 and 2025. A gentle, nearly straight series carries almost no information about where a ceiling might be, so the fitting routine settles on whatever value suits the last few wiggles. A model that is required to level off will always report a level. Whether that level means anything is a separate question the code cannot answer.' },
        { kind: 'p', text: 'The fits are our own calculation with scipy\'s curve_fit on the published series, and the 2050 values a learner might extend them to (15,065 for the 2018 Gompertz curve, 16,335 for the straight line and 16,478 for exponential growth) are classroom illustrations, not forecasts. The ABS publishes its own projections separately; nothing here should be read as one.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Testing a model fairly',
      h2: 'Four checks before trusting any fitted curve',
      intro: 'Learned on twenty-five numbers from Port Lincoln, then used on sales figures, school enrolments or app sign-ups.',
      body: [
        { kind: 'table', caption: 'Checks applied to the Port Lincoln fits', head: ['Check', 'What we did', 'What it revealed'], rows: [
          ['Hold data back', 'Fitted to 2001 to 2018 only', 'The test years exposed the Gompertz curve as too low'],
          ['Move the cut-off', 'Refitted with training ending 2015, 2018 and 2021', 'The ceiling ranged from 15,124 to 17,632'],
          ['Compare simpler shapes', 'Straight line and exponential growth alongside', 'The simple shapes tracked the test years more closely'],
          ['Read the parameters', 'Printed K, b and c, not just the curve', 'An unstable K signals the data cannot support it']
        ] },
        { kind: 'p', text: 'A low error on the training years proves very little, because every curve can bend to fit the past. Holding years back and moving the cut-off are cheap ways to see whether a model has learned something or merely memorised the shape of a particular span.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Fit a line and a Gompertz curve to the series, test both on the last seven years and write up which one they would trust.' },
          { h3: 'University students', p: 'Non-linear least squares, parameter stability and why a curve family should be chosen before looking at the answer.' },
          { h3: 'Adults at work', p: 'The same discipline applies to any forecast with a built-in limit, from market size estimates to subscriber growth.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not connected with the ABS or any South Australian government agency. The population estimates and Census figures are the bureau\'s; the fitted curves, errors and projections are our own analysis.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Port Lincoln',
      h2: 'Clocks that change twice a year',
      intro: 'Local detail that shapes when Port Lincoln learners can join a live lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Half an hour off the hour', p: 'South Australia runs on UTC plus 9:30, so Port Lincoln time sits half an hour behind Melbourne and Sydney for much of the year.' },
          { h3: 'Summer time', p: 'Clocks move forward on the first Sunday in October and back on the first Sunday in April, the rule written into the time zone files computers use.' },
          { h3: 'The gap to India', p: 'India time is four hours behind Port Lincoln in winter and five hours behind during daylight saving.' }
        ] },
        { kind: 'spec', title: 'Term dates from your school', p: 'The South Australian education department\'s term dates page refused our automated request, so we do not print the dates here. Families plan holidays with the teacher directly, using their own school\'s calendar.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first chart to models you can defend',
    intro: 'Age bands are a guide; the free lesson decides the real starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Lists and charts', p: 'Storing a yearly series, drawing it and describing what changed in plain words.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Fitting and testing', p: 'Straight lines, growth rates and the habit of testing on years the model never saw.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'University', h3: 'Non-linear models', p: 'Least squares for curved shapes, parameter stability and honest error reporting.', courses: ['data-science-complete-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Forecasts at work', p: 'Turning official statistics into decisions without overstating what they show.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant have questioned the ceiling it found?',
    intro: 'Rarely, unless the person asking already knew to look.',
    p1: 'Ask a chatbot to fit a Gompertz model to Port Lincoln\'s population and it will produce tidy code, a smooth curve and a confident ceiling of around fifteen thousand. Everything runs and nothing warns that a slightly different span of years gives a ceiling more than two thousand higher.',
    p2: 'Our Port Lincoln learners use AI assistants to write the fitting code quickly, then do the part the assistant skips: holding years back, moving the cut-off and printing the parameters. The tool supplies speed; the learner supplies the scepticism that makes the answer worth reporting.',
    closer: 'A Port Lincoln learner who has watched a fitted ceiling move by thousands of people knows that a model can be precise and still wrong, a lesson that stays useful whatever tools arrive after 2026.',
    blogAnchor: 'the case for learning to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the marina to the hills, one live class',
    intro: 'An online lesson reaches every part of Port Lincoln and the wider peninsula equally.',
    cells: [
      { h3: 'No drive to Adelaide', p: 'Students log in from home on the peninsula and sit in exactly the class a learner in the capital would attend.' },
      { h3: 'Fits the SA school system', p: 'Lessons are pitched to South Australian year levels, SACE seniors included, and everything is taught in English.' },
      { h3: 'Trial before anything else', p: 'The first session is spent coding alongside a teacher; afterwards you get a recommended course and slot, and payment details are never requested.' },
      { h3: 'Small, level-matched classes', p: 'Between five and ten students working at one stage, gathered from several states and countries so a sensible hour exists for each level.' },
      { h3: 'Twice weekly', p: 'About eight sessions in a typical month; breaks for holidays and exams are arranged in advance with the teacher.' },
      { h3: 'Clock changes covered', p: 'When South Australia moves its clocks, the lesson stays at the same Port Lincoln time.' }
    ],
    spec: { title: 'Every time in Port Lincoln time', p: 'Lesson times are agreed and written in South Australian time, so nobody at home needs to convert anything.' }
  },

  fees: {
    h2: 'What coding classes cost in Port Lincoln',
    intro: 'The full price list in three lines.',
    first: 'A free first lesson that ends with a suggested stage, course and time.',
    group: 'A month of lessons, normally eight, with fifteen to twenty learners at your level.',
    private: 'Roughly eight one-to-one lessons a month with a single teacher.',
    closer: 'There is no regional surcharge for Port Lincoln: the US dollar rate matches what families in every other state are charged. Nothing is charged until the trial has fixed a course and a time; the pricing page explains holidays, missed lessons and changing format.'
  },

  reviewsH2: 'What reviewers on Google say about learning with us',

  book: {
    h2: 'Describe the learner and we will plan the trial',
    intro: 'The opening task is chosen in advance: a chart of a short series for a Year 8 beginner, a straight-line fit with a held-out test for a Year 11 student, or the full Gompertz experiment for an adult.',
    success: 'Thank you. We will be in touch soon about a coding class in Port Lincoln.'
  },

  faq: {
    h2: 'Port Lincoln coding class questions',
    intro: 'The questions Port Lincoln learners and parents ask first.',
    items: [
      { q: 'How many people live in Port Lincoln?', a: 'The urban area counted 16,307 residents at the 2021 Census, and the ABS estimate for the council area at 30 June 2025 is 15,065.' },
      { q: 'What is a Gompertz curve?', a: 'A Gompertz curve is an S-shaped growth model that rises and then flattens towards a fixed ceiling. It is often used for growth that must eventually stop, but fitting one does not prove a ceiling exists, because the curve always produces one.' },
      { q: 'What is the Port Lincoln population project?', a: 'Learners download the ABS estimates for Port Lincoln from 2001 to 2025, fit a Gompertz curve, an exponential curve and a straight line on the years to 2018, test them on 2019 to 2025, and then refit with different cut-offs to see how far the fitted ceiling moves.' },
      { q: 'Do I need advanced maths to start?', a: 'No. Percentages and reading a graph are enough at first; logarithms and curve fitting are taught when the project needs them.' },
      { q: 'Can Year 11 and 12 students join?', a: 'Yes. Senior students fit weekly lessons around SACE subjects, and any school assessment stays entirely the student\'s own work.' },
      { q: 'What time do lessons run for Port Lincoln?', a: 'After school, in the evening or at weekends, agreed during the trial and written in South Australian time. India time is four hours behind Port Lincoln in winter and five in summer.' },
      { q: 'Do you teach primary school children too?', a: 'We do, starting at age 6 with Scratch and other visual tools, but the project on this page is aimed at teenagers and adults.' },
      { q: 'Is there a Modern Age Coders office in Port Lincoln?', a: 'No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.', boiler: true },
      { q: 'What do Port Lincoln coding classes cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How large are the groups?', a: 'Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore South Australia',
    h2: 'More for Port Lincoln and South Australian learners',
    html: 'In the capital there is <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">AI and programming classes in Adelaide</a>, and in the south-east <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-mount-gambier">a Mount Gambier page on vibe coding and AI agents</a>. For primary-aged children see <a class="cg-inline-link" href="/coding-classes-for-kids-adelaide">coding classes for kids in Adelaide</a>, and for everything statewide read <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">coding and AI classes in South Australia</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Port Lincoln and South Australia',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/vibe-coding-and-ai-agents-classes-in-mount-gambier', label: 'Mount Gambier' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-plin .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.2vw, 2.6rem); }
.cg-root.cg-plin .cg-hero h1 { font-weight: 720; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-plin .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-plin .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-plin .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.012em; }
.cg-root.cg-plin .cg-grid-3 { gap: clamp(0.95rem, 2.3vw, 1.75rem); }
.cg-root.cg-plin .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-plin .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-plin .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-plin .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Port Lincoln Significant Urban Area, ABS Census 2021 QuickStats, area code 4005, with South Australia and Australia (read 10 October 2026): 16,307 people; median age 41; 4,230 families; 7,591 private dwellings; 2.3 people per household; separate house 5,239 (83.1 percent; SA 78.0; Australia 72.3); flat or apartment 352 (5.6 percent; SA 6.8); Professionals 1,231 (16.7 percent; SA 21.5; Australia 24.0); Technicians and Trades Workers 1,116 (15.2 percent; SA 13.2; Australia 12.9); Bachelor Degree level and above 1,567 (11.8 percent; SA 22.7; Australia 26.3); aged 15 to 19: 945 (5.8 percent); aged 20 to 24: 846 (5.2 percent); industry: Combined Primary and Secondary Education 207 (2.8 percent; SA 1.6; Australia 1.2). ABS ERP Port Lincoln LGA (46300) 30 June 2025: 15,065. IANA tz database 2026e and Python tzdata TZif footer ACST-9:30ACDT,M10.1.0,M4.1.0/3: Australia/Adelaide UTC+9:30, daylight saving from the first Sunday in October to the first Sunday in April; Asia/Kolkata UTC+5:30. SA term dates omitted: education.sa.gov.au returned 403.',
    localProject: 'Gompertz growth curve fit vs exponential and linear. ABS Data API, dataflow ABS_ANNUAL_ERP_LGA2025 version 1.0.0, key ERP.3.TOT.46300.LGA2025.A, read 10 October 2026: Port Lincoln LGA estimated resident population 30 June 2001 13,842; 2005 14,012; 2010 14,432; 2015 14,585; 2016 14,523; 2018 14,652; 2020 14,773; 2021 14,879; 2024 15,067; 2025 15,065. Falls in 2015, 2016 and 2025. Fits (scipy curve_fit) on 2001 to 2018, tested on 2019 to 2025: Gompertz N = K exp(-b exp(-c t)) with K 15,124, b 0.0917, c 0.0643, mean absolute error 169.8, 2025 prediction 14,830; exponential rate 0.351 percent a year, error 39.5, 2025 prediction 15,097; linear error 39.7, 2025 prediction 15,080. Ceiling K by last training year: 2015 17,632; 2018 15,124; 2021 15,559; full series 19,286. Illustrative 2050 values: Gompertz (to 2018) 15,065; linear 16,335; exponential 16,478; Gompertz full series 16,082.',
    requiredMentions: [
      '16,307',
      '4,230',
      '7,591',
      '5,239',
      '1,567',
      '13,842',
      '17,632',
      '169.8 people',
      'From the marina to the hills'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Port Lincoln Significant Urban Area (4005): people, median age, families, dwellings, dwelling structure, occupation, education, age, industry.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/4005' },
      { claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Port Lincoln LGA 46300, total persons.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.46300.LGA2025.A?format=csvfilewithlabels' },
      { claim: 'IANA time zone database, australasia file: Australia/Adelaide offsets and daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' },
      { claim: 'scipy.optimize.curve_fit documentation, the non-linear least squares routine used for the fits.', url: 'https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.curve_fit.html' }
    ],
    rejectedClaims: [
      'Any population forecast for Port Lincoln: the fitted 2050 values are classroom illustrations of how models extrapolate, not projections, and the ABS publishes its own projections separately.',
      'Any explanation of why the estimates fell in 2015, 2016 and 2025: no cause is published with the series, so only the changes are shown.',
      'South Australian term dates: education.sa.gov.au returned 403 to our request in October 2026 and was not circumvented.',
      'Suburb names for Port Lincoln: none were verified inside the urban area boundary, so none are listed.',
      'Fishing, aquaculture or port tonnage figures: not part of the verified Census or ERP sources used here.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the ABS or the Government of South Australia.'
    ]
  }
};
