'use strict';
// Sunshine Coast (cg- regional city page, Australia cluster Phase 7, row 137). Shaped page (AI and programming): leads
// with teenagers and adults. Spine: when a model says "70% likely", how do you check that it means it?
// Data: Translink SEQ_GTFS.zip (feed_info: Department of Transport and Main Roads - Translink Division, valid 20261007
// to 20261206; Creative Commons Attribution 4.0 on the Queensland Government open data portal). Our rectangle (latitude
// -26.95 to -26.38, longitude 152.85 to 153.16, chosen by us to cover the coast from Caloundra to Noosa) holds 985
// boarding stops; 975 have at least one trip on Wednesday 14 October 2026 (calendar.txt and calendar_dates.txt
// resolved). Median weekday trips per stop 24, maximum 360; the most frequent route numbers among these stops are 620,
// 602 and 631. Label: at least 16 trips on Sunday 18 October 2026; 481 of 975 stops (49.3%). Measured by us on
// 7 October 2026 (scratchpad au/r1/ssc_load.py, ssc_cal2.py): logistic regression on log(weekday trips) and route
// count, trained by gradient descent on 682 stops and tested on 293 (numpy seed 2026; 145 test positives). Test
// accuracy 96.9% for the fitted model, for the same logits multiplied by 3 and for the logits multiplied by 0.35.
// Expected calibration error over five equal-width bins: fitted 0.059, sharpened 0.050, softened 0.210; Brier score
// 0.0384, 0.0352, 0.0782. Fitted model bins: 0.0-0.2 (140 stops, mean prediction 0.041, observed 0.0); 0.4-0.6 (25,
// 0.544, 0.96); 0.6-0.8 (7, 0.709, 0.857); 0.8-1.0 (121, 0.95, 0.95). Softened model: 0.2-0.4 bin 89 stops, mean
// prediction 0.268, observed 0.0. Lesson family: calibration and the reliability diagram; screened free site-wide on
// 7 October 2026 ("reliability diagram": 0 hits; claimed by AU-R1).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Sunshine Coast Significant Urban Area (3015),
// compared with Queensland and Australia: 382,903 people; median age 44; 106,804 families; 169,780 private dwellings;
// 2.5 people per household; separate house 105,022 (73.2%; Queensland 74.8%); flat or apartment 18,015 (12.6%;
// Queensland 12.5%; Australia 14.2%); Professionals 37,359 (21.0%; Queensland 21.4%; Australia 24.0%); Technicians and
// Trades Workers 26,957 (15.1%; Queensland 13.7%); Bachelor Degree level and above 68,285 (21.5%; Queensland 21.9%;
// Australia 26.3%); aged 15 to 19 22,369 (5.8%); aged 20 to 24 18,780 (4.9%). Queensland Department of Education 2026
// Term 4 Tuesday 6 October to Friday 11 December. IANA tz: Australia/Brisbane UTC+10 without daylight saving since 1992.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'SUNSHINE COAST', label: 'Sunshine Coast', blurb: 'The Sunshine Coast, 975 bus stops with weekday service, and an AI project on whether a model\'s confidence can be trusted.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-sunshine-coast',
  code: 'ssca',
  accent: '#486E26',
  accentRationale: 'Sunshine Coast: a hinterland green (HSV saturation 0.65, value 0.43, hue 92), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 5.9:1 on white and 4.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Sunshine Coast',
    eyebrow: 'Sunshine Coast, Queensland, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Queensland', href: '/coding-and-ai-classes-in-queensland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Sunshine Coast, Queensland',
  title: 'AI and Programming Classes on the Sunshine Coast',
  description: 'Live online AI, machine learning and programming classes for Sunshine Coast teenagers and adults, built on real local data, in small groups or one to one.',
  ogDescription: 'AI classes for Sunshine Coast teens and adults, with a project that checks whether a model\'s 70% really means 70%, using Translink bus data.',
  twitterDescription: 'AI and programming classes on the Sunshine Coast, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Sunshine Coast Learners',
    description: 'Level-matched online Python, machine learning, model evaluation and AI for teenagers and adults across the Sunshine Coast, taught live in English.'
  },

  h1: 'AI and programming classes on the Sunshine Coast',
  capsuleQ: 'What makes the best AI class for a Sunshine Coast teenager or adult?',
  capsule: 'One where you build models yourself, on real data, and learn to check whether their answers and their confidence can be trusted. The Sunshine Coast urban area counted 382,903 people at the 2021 Census. We teach programming and AI live online, privately or in small groups matched by level, and the first lesson is free.',
  lead: 'Most people judge a prediction model by one number: how often it is right. Our Sunshine Coast project shows why that is not enough. We took the 975 bus stops between Caloundra and Noosa that have a weekday service in the open Translink timetable, and asked a simple model a yes or no question about each one: will this stop get at least 16 buses this Sunday? Three versions of the model are right 96.9% of the time, every one of them. Yet when one says "27% likely", not a single stop in that group qualifies. Learners find out which version to believe by drawing a reliability diagram, the check that tells you whether a model\'s confidence matches reality.',
  wa: 'Hello Modern Age Coders, I would like a free AI and programming class for a learner on the Sunshine Coast.',

  picks: {
    eyebrow: 'AI course picks for the Sunshine Coast',
    h2: 'Four starting points in AI and programming',
    intro: 'Choose by the kind of AI work you want to do; the free lesson finds your level. No card details are asked for.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning from first principles in Python, including how to test a model honestly before trusting it.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Cleaning, plotting and questioning real datasets, the groundwork every AI project depends on.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Regression, classification, evaluation and calibration, implemented by hand and then with libraries.' },
      { course: 'artificial-intelligence-complete-masterclass-college', band: 'Adults changing careers', note: 'A broad AI course covering models, data and responsible use, taught through projects on public data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The Sunshine Coast in the Census',
      h2: 'A coastal urban area of 382,903 people',
      intro: 'Census 2021 QuickStats for the Sunshine Coast Significant Urban Area, next to Queensland and Australia as QuickStats shows them.',
      body: [
        { kind: 'table', caption: 'Sunshine Coast, 2021 Census QuickStats', head: ['Measure', 'Sunshine Coast', 'Queensland', 'Australia'], rows: [
          ['People', '382,903', 'Not compared', 'Not compared'],
          ['Median age', '44', 'Not compared', 'Not compared'],
          ['Families', '106,804', 'Not compared', 'Not compared'],
          ['Private dwellings', '169,780', 'Not compared', 'Not compared'],
          ['Technicians and trades workers among employed residents', '26,957, or 15.1%', '13.7%', 'Not compared'],
          ['Professional workers among employed residents', '37,359, or 21.0%', '21.4%', '24.0%'],
          ['Bachelor degree or higher, people aged 15 and over', '68,285, or 21.5%', '21.9%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'An older median', p: 'Half of the Sunshine Coast population was 44 or older at the 2021 Census, a figure worth knowing when you plan who an app or service is for.' },
          { h3: 'Teen and twenties counts', p: 'There were 22,369 residents aged 15 to 19 and 18,780 aged 20 to 24, published counts we quote without guessing at the reasons behind them.' },
          { h3: 'Houses and apartments', p: 'Separate houses make up 73.2% of occupied dwellings and flats or apartments 12.6%, close to the Queensland pattern.' }
        ] },
        { kind: 'p', text: 'About these figures: the ABS slightly perturbs small census cells for privacy, so rows may not add to the published total. We give the published totals and shares unchanged and never add rows up into new figures.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'When a model says 70%, is it right 70% of the time?',
      intro: 'The 975 Sunshine Coast stops with service on Wednesday 14 October 2026, a logistic regression model, and the question: at least 16 trips on Sunday 18 October?',
      body: [
        { kind: 'table', caption: 'The data, from the Translink open timetable (our calculation)', head: ['What we counted', 'Result'], rows: [
          ['Boarding stops in our Caloundra to Noosa rectangle', '985'],
          ['Stops with at least one Wednesday trip', '975'],
          ['Middle (median) number of Wednesday trips per stop', '24'],
          ['Stops with at least 16 trips on Sunday 18 October', '481, or 49.3%'],
          ['Training stops and test stops', '682 and 293']
        ] },
        { kind: 'table', caption: 'Three models with identical accuracy on the 293 test stops (our calculation)', head: ['Model', 'Accuracy', 'Calibration error', 'Brier score'], rows: [
          ['As fitted', '96.9%', '0.059', '0.0384'],
          ['Same model, confidence sharpened (scores times 3)', '96.9%', '0.050', '0.0352'],
          ['Same model, confidence softened (scores times 0.35)', '96.9%', '0.210', '0.0782']
        ] },
        { kind: 'table', caption: 'Reliability table for the fitted model: what it said against what happened', head: ['Predicted probability band', 'Test stops', 'Average prediction', 'Share that really got 16 Sunday trips'], rows: [
          ['0.0 to 0.2', '140', '0.041', '0.0'],
          ['0.4 to 0.6', '25', '0.544', '0.96'],
          ['0.6 to 0.8', '7', '0.709', '0.857'],
          ['0.8 to 1.0', '121', '0.95', '0.95']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Group by confidence', p: 'Sort the test stops into bands by the probability the model gave them. A well-behaved model\'s 0.9 band should come true about nine times in ten.' },
          { h3: '2. Compare with reality', p: 'For each band, compare the average prediction with the share that actually came true. Plotted, this is the reliability diagram; on a perfect model the points sit on the diagonal.' },
          { h3: '3. Read the gaps', p: 'The fitted model says about 54% for 25 stops where 96% qualified, so it is too timid near its decision line. The softened model says 27% for 89 stops that never qualify.' }
        ] },
        { kind: 'callout', h3: 'Accuracy hides this completely', p: 'All three models put the same stops on the same side of 50%, so their accuracy is identical. Only the reliability table shows that one of them consistently understates or overstates how sure it should be. In a model that warns, ranks or prices anything, that difference is the one that matters.' },
        { kind: 'p', text: 'These are our numbers, from the Translink file for 7 October to 6 December 2026, and our rectangle is a deliberate simplification of the Sunshine Coast. The label and the features both come from the timetable, so the task is easy and accuracy is high; the lesson is about confidence, not about predicting buses.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Evaluating models properly',
      h2: 'Five checks before you trust a model\'s probabilities',
      intro: 'Learned on bus stops, used afterwards on any classifier that outputs a percentage.',
      body: [
        { kind: 'table', caption: 'Evaluation beyond accuracy', head: ['Check', 'How', 'What it reveals'], rows: [
          ['Hold data back', 'Test only on stops the model never saw', 'Scores inflated by memorisation'],
          ['Look at the base rate', '49.3% of stops qualify', 'Whether a high accuracy is impressive or trivial'],
          ['Draw the reliability diagram', 'Bands of prediction against observed share', 'Over and under confidence'],
          ['Use a proper score', 'Brier score or log loss alongside accuracy', 'Confidence errors accuracy cannot see'],
          ['Count the bands', 'How many test cases sit in each band', 'Bands too small to conclude anything']
        ] },
        { kind: 'p', text: 'The last check is easy to forget. Our 0.6 to 0.8 band holds only 7 test stops, so its observed rate of 0.857 rests on six stops out of seven. A careful analyst reports that band with a warning rather than a conclusion, and our learners are taught to say exactly that.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Fit a logistic regression with numpy, split the data, and draw the reliability diagram by hand before using any library.' },
          { h3: 'University students', p: 'Calibration methods such as Platt scaling and isotonic regression, and when each one helps or harms.' },
          { h3: 'Adults at work', p: 'Ask the right questions of any vendor model or dashboard that turns predictions into percentages.' }
        ] },
        { kind: 'p', text: 'We have no relationship with Translink, the state transport department, the ABS or the Queensland education department. The census figures are published by the ABS; the stop counts, model scores and reliability tables are all our own calculations from the public timetable.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around the coast',
      h2: 'Buses, school terms and a steady clock',
      intro: 'Local facts a programmer picks up along the way.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Busiest route numbers', p: 'Among the 975 stops in our list, routes 620, 602 and 631 serve the most stops, all of them run under the Translink network.' },
          { h3: 'Term 4 in Queensland', p: 'The Queensland Department of Education lists Term 4 of 2026 as Tuesday 6 October to Friday 11 December.' },
          { h3: 'No daylight saving', p: 'Queensland has kept UTC+10 all year since 1992, according to the IANA time zone database, so coast clocks never jump.' }
        ] },
        { kind: 'spec', title: 'Why a steady clock helps', p: 'Timetable data for the coast never has to handle a daylight saving jump, which removes a whole class of bugs. Learners still store times carefully, because a program that also reads New South Wales data will meet the jump the moment it crosses the border.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first Python to models you can defend',
    intro: 'Ages are only guides; the free lesson decides where each learner begins.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Data and counting', p: 'Reading a timetable file, counting trips per stop and making the first charts.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 15 to 18', h3: 'First models', p: 'Logistic regression by hand, train and test splits, and the reliability diagram.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'University', h3: 'Serious evaluation', p: 'Calibration, proper scoring rules, cross-validation and honest reporting of uncertainty.', courses: ['ai-ml-masterclass-complete-college', 'data-science-complete-masterclass-college'] },
      { band: 'Adults', h3: 'AI at work', p: 'Building, evaluating and explaining models for decisions your team actually makes.', courses: ['artificial-intelligence-complete-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Chatbots state probabilities too. How would a Sunshine Coast learner know whether to believe them?',
    intro: 'By asking the same question of a chatbot that we ask of our bus model: when it sounds this sure, how often is it right?',
    p1: 'A language model that says "I am fairly confident" or "about 80% likely" is making the same kind of claim as our logistic regression. The words sound measured, but nothing guarantees they match how often such answers turn out true. Our project shows three models with identical accuracy and very different honesty about their own certainty, and the same gap can exist in any AI system that reports confidence.',
    p2: 'So Sunshine Coast learners build the habit of checking: collect a set of answers with known outcomes, group them by stated confidence, and compare. Someone who has drawn a reliability diagram for their own model will not take a confident tone, human or machine, as evidence on its own.',
    closer: 'AI tools will keep sounding sure of themselves, and a Sunshine Coast learner who can measure whether that confidence is earned has a skill that matters in 2026.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Caloundra to Noosa, one live classroom',
    intro: 'The coast stretches a long way north to south, and an online class removes every kilometre of it.',
    cells: [
      { h3: 'Coast or hinterland', p: 'A learner in Maroochydore and another in the hinterland join the same lesson at the same moment from home.' },
      { h3: 'Queensland school terms', p: 'Lessons follow Queensland year levels, Year 7 to Year 12, and are always taught in English.' },
      { h3: 'Real work from minute one', p: 'The trial is an actual programming or AI task with a teacher, finishing with a suggested level, course and time. No payment details are taken.' },
      { h3: 'Five to ten per group', p: 'Learners at the same stage from the coast, the rest of Australia and further away, so every level finds a workable slot.' },
      { h3: 'Twice a week', p: 'Around eight lessons a month in a fixed slot, with holidays and exam periods agreed ahead with the teacher.' },
      { h3: 'A constant gap to India', p: 'Queensland and India both keep one clock time all year, so the coast is always 4 hours 30 minutes ahead of our teachers.' }
    ],
    spec: { title: 'Lesson times stay put', p: 'With no daylight saving on either side, a Sunshine Coast lesson set for 4:30pm stays at 4:30pm all year, and starts at noon in India.' }
  },

  fees: {
    h2: 'What AI and programming classes cost on the Sunshine Coast',
    intro: 'Three figures only.',
    first: 'A full first lesson without charge, ending with a level, a course and a time.',
    group: 'A month of teaching, usually eight lessons, alongside five to ten learners at your stage.',
    private: 'About eight lessons a month with a teacher all to yourself.',
    closer: 'Families outside India pay in US dollars at one rate, so a learner in Caloundra and one in Noosa pay exactly the same. Charges begin only after the trial, when the course and time are agreed; holidays, missed lessons and changes of format are explained on the pricing page.'
  },

  reviewsH2: 'Families reviewing us on Google, in their own words',

  book: {
    h2: 'Tell us what you want AI to do',
    intro: 'We choose the first task to fit: a first Python chart for a Year 8, a model to evaluate for a Year 11, or the full timetable and a reliability diagram for an adult.',
    success: 'Thank you. We will contact you soon about an AI and programming class on the Sunshine Coast.'
  },

  faq: {
    h2: 'Sunshine Coast AI and programming questions',
    intro: 'Questions Sunshine Coast learners and parents often ask first.',
    items: [
      { q: 'How many people live in the Sunshine Coast urban area?', a: '382,903 at the 2021 Census, with a median age of 44.' },
      { q: 'What is a reliability diagram?', a: 'A reliability diagram checks whether a model\'s stated probabilities match reality. Predictions are grouped into bands such as 0.6 to 0.8, and for each band the average prediction is plotted against the share of cases that actually came true. A well calibrated model\'s points lie close to the diagonal.' },
      { q: 'What is model calibration?', a: 'Calibration is the agreement between a model\'s confidence and how often it is right. A calibrated model that says 70% is right about 70% of the time; accuracy alone cannot tell you whether that holds.' },
      { q: 'What is the Sunshine Coast bus project?', a: 'Learners take the 975 Sunshine Coast stops with weekday service from Translink\'s open timetable, train a model to predict which get at least 16 buses on a Sunday, and compare three versions that are all 96.9% accurate but differ sharply in how honest their probabilities are.' },
      { q: 'Do I need advanced maths to start AI?', a: 'No. Teenagers start with counting, charts and simple models, and the probability needed is introduced as it comes up. Older learners can go deeper into the statistics behind calibration.' },
      { q: 'What time are lessons for Sunshine Coast learners?', a: 'Late afternoon, evening or weekend, agreed in the trial and stated in Sunshine Coast time, which stays 4 hours 30 minutes ahead of India time all year.' },
      { q: 'Do you teach younger children on the Sunshine Coast?', a: 'Yes, from age 6, beginning with Scratch and picture-based projects. This page focuses on secondary students and adults.' },
      { q: 'Is there a Modern Age Coders centre on the Sunshine Coast?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Sunshine Coast coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Sunshine Coast and Queensland learners',
    html: 'Teenagers interested in AI can continue with <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens in Australia</a>, and anyone who wants to build models rather than only prompt them should read <a class="cg-inline-link" href="/learn-to-train-ai-not-just-prompt-it-australia">learn to train AI, not just prompt it</a>. The state picture is on <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">coding and AI classes in Queensland</a>, and every Australian page is listed on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Sunshine Coast and Queensland',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/best-coding-classes-in-gold-coast', label: 'Gold Coast' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-ssca .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.8vw, 2.4rem); }
.cg-root.cg-ssca .cg-hero h1 { font-weight: 750; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-ssca .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-ssca .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-ssca .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.011em; }
.cg-root.cg-ssca .cg-grid-3 { gap: clamp(0.9rem, 2.1vw, 1.7rem); }
.cg-root.cg-ssca .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-ssca .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ssca .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-ssca .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Sunshine Coast Significant Urban Area, ABS Census 2021 QuickStats, area code 3015, compared with Queensland and Australia (read 7 October 2026): 382,903 people; median age 44; 106,804 families; 169,780 private dwellings; average 2.5 people per household; dwelling structure: separate house 105,022 (73.2 percent; Queensland 74.8), flat or apartment 18,015 (12.6 percent; Queensland 12.5; Australia 14.2); occupation: Professionals 37,359 (21.0 percent; Queensland 21.4; Australia 24.0), Technicians and Trades Workers 26,957 (15.1 percent; Queensland 13.7); Bachelor Degree level and above 68,285 (21.5 percent; Queensland 21.9; Australia 26.3); aged 15 to 19: 22,369 (5.8 percent); aged 20 to 24: 18,780 (4.9 percent). Queensland Department of Education term dates: 2026 Term 4 Tuesday 6 October to Friday 11 December. IANA tz database: Australia/Brisbane UTC+10 without daylight saving since March 1992; Asia/Kolkata UTC+5:30.',
    localProject: 'Calibration and the reliability diagram. Translink SEQ_GTFS.zip (valid 20261007 to 20261206). Our rectangle latitude -26.95 to -26.38, longitude 152.85 to 153.16: 985 boarding stops; 975 with at least one trip on Wednesday 14 October 2026 (calendar and calendar_dates resolved). Weekday trips per stop: median 24, maximum 360. Most frequent route numbers among these stops: 620, 602, 631. Label: at least 16 trips on Sunday 18 October 2026; 481 of 975 (49.3 percent). Features: log(weekday trips) and number of routes serving the stop. Logistic regression by batch gradient descent (40,000 steps, learning rate 0.05) on 682 training stops, 293 test stops (numpy default_rng seed 2026), 145 test positives. Test accuracy 96.9 percent for fitted logits, logits times 3 and logits times 0.35. Expected calibration error, five equal-width bins: 0.059, 0.050, 0.210. Brier score: 0.0384, 0.0352, 0.0782. Fitted bins: 0.0-0.2 n 140 mean 0.041 observed 0.0; 0.4-0.6 n 25 mean 0.544 observed 0.96; 0.6-0.8 n 7 mean 0.709 observed 0.857; 0.8-1.0 n 121 mean 0.95 observed 0.95. Softened bins include 0.2-0.4 n 89 mean 0.268 observed 0.0. Lesson family: calibration, reliability diagram, proper scoring.',
    requiredMentions: [
      '382,903',
      '106,804',
      '169,780',
      '68,285',
      '37,359',
      '26,957',
      '975 bus stops',
      '481, or 49.3%',
      'Caloundra to Noosa, one live classroom',
      '0.210'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Sunshine Coast Significant Urban Area (3015): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3015' },
      { claim: 'Translink General Transit Feed Specification for South East Queensland (SEQ_GTFS.zip), Creative Commons Attribution 4.0, Queensland Government open data portal.', url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink' },
      { claim: 'Queensland Department of Education, term dates 2026.', url: 'https://education.qld.gov.au/about-us/calendar/term-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Brisbane.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'OpenStreetMap boundaries for the Sunshine Coast: the Overpass API returned 406 to this machine on 7 October 2026 and no mirror was tried; the stop rectangle is our own choice and is stated as such.',
      'Any reason for the smaller 20 to 24 age band compared with 15 to 19: not stated by the ABS, so not offered.',
      'Bureau of Meteorology observations: the observations feed returned 403 and was not circumvented.',
      'QCAA senior subject details: qcaa.qld.edu.au returned a Cloudflare 403 and was not circumvented.',
      'Any claim about real Sunday bus reliability or patronage: the model predicts timetabled trips only.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Translink, the Department of Transport and Main Roads, the ABS or the Queensland Department of Education.'
    ]
  }
};
