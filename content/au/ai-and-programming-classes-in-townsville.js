'use strict';
// Townsville (cg- regional city page, Australia cluster Phase 7, row 141). Shaped page (AI and programming): leads with
// teenagers and adults. Spine: when should you stop training a model? Data: Translink TSV_GTFS.zip (feed_info:
// Department of Transport and Main Roads - Translink Division, valid 20261007 to 20261206; agency Kinetic (Townsville);
// Creative Commons Attribution 4.0 on the Queensland Government open data portal), downloaded 7 October 2026: 17 routes,
// 638 stops, 992 trips. Measured by us on 7 October 2026 (scratchpad au/r1/tsv_seg.py, tsv_es.py): 719 distinct pairs of
// consecutive stops; for each, straight-line distance and the median scheduled minutes between them; median distance
// 394 m, median time 1.0 minute; 138 pairs are timetabled at 0 minutes because times are whole minutes. Model: a
// degree-9 polynomial in distance, trained by plain gradient descent (learning rate 0.02) on 60 pairs, with 240 pairs for
// validation and 419 for testing (numpy default_rng seed 2026). Training error falls the whole time (0.611 at epoch 100,
// 0.442 at epoch 200,000, squared minutes). Validation error is lowest at epoch 400 (1.43) and then climbs: 15.2 at
// epoch 1,000, 268.4 at 5,000, 2,727.5 at 100,000. Early stopping with a patience of 2,000 epochs triggers at epoch
// 2,400. Test error: 1.069 for the epoch-400 weights against 4,509.9 for the epoch-200,000 weights; a straight line fitted
// to the same 60 pairs scores 1.196, slope 3.735 minutes per kilometre, intercept -0.471. Lesson family: early stopping
// on validation loss; screened free site-wide on 7 October 2026 ("early stopping": 0 hits; claimed by AU-R1).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Townsville Significant Urban Area (3017), compared
// with Queensland and Australia: 179,011 people; median age 35; 45,989 families; 75,844 private dwellings; 2.5 people per
// household; separate house 51,876 (80.1%; Queensland 74.8%); flat or apartment 4,845 (7.5%; Queensland 12.5%; Australia
// 14.2%); Professionals 17,600 (20.0%; Queensland 21.4%; Australia 24.0%); Technicians and Trades Workers 12,628 (14.4%;
// Queensland 13.7%); Bachelor Degree level and above 26,584 (18.4%; Queensland 21.9%; Australia 26.3%); aged 15 to 19
// 12,203 (6.8%); aged 20 to 24 14,528 (8.1%). Queensland Department of Education 2026 Term 4 Tuesday 6 October to Friday
// 11 December. IANA tz: Australia/Brisbane UTC+10 without daylight saving since 1992. Excluded by the cluster rules:
// income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'TOWNSVILLE', label: 'Townsville', blurb: 'Townsville, 719 stop-to-stop bus segments, and an AI project on knowing when to stop training a model.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-townsville',
  code: 'tsva',
  accent: '#8A1E1E',
  accentRationale: 'Townsville: a dark rust red (HSV saturation 0.78, value 0.54, hue 0), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 9.2:1 on white and 7.5:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Townsville',
    eyebrow: 'Townsville, Queensland, Australia',
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
  routeLabel: 'Townsville, Queensland',
  title: 'AI and Programming Classes in Townsville',
  description: 'Live online AI, machine learning and programming classes for Townsville teenagers and adults, built on real North Queensland data. Small groups or one to one.',
  ogDescription: 'AI classes for Townsville teens and adults, with a project on when to stop training a model, using the Townsville bus timetable.',
  twitterDescription: 'AI and programming classes in Townsville, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-complete-college',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Townsville Learners',
    description: 'Level-matched online Python, machine learning, model training and evaluation for teenagers and adults across Townsville, taught live in English.'
  },

  h1: 'AI and programming classes in Townsville',
  capsuleQ: 'What should the best AI classes in Townsville teach?',
  capsule: 'How models are trained, tested and stopped, using real data a learner can check, rather than only how to call an AI tool. The Townsville urban area counted 179,011 people at the 2021 Census. We teach AI and programming live online, one to one or in small groups at the same level, and the first lesson is free.',
  lead: 'Ask a model to predict how many minutes a Townsville bus takes between two stops, given only the distance between them. The open timetable gives us 719 such stop-to-stop segments to learn from. Train a deliberately flexible model on 60 of them and something strange happens. Its error on those 60 keeps falling for as long as you let it run. Its error on 240 segments it has never seen falls too, for a while, and then rises, and keeps rising until the model is useless. The right moment to stop was epoch 400. Our Townsville learners watch this happen, write the rule that stops training at the right time, and learn why "more training" is not the same as "a better model".',
  wa: 'Hello Modern Age Coders, I would like a free AI and programming class for a learner in Townsville.',

  picks: {
    eyebrow: 'AI course picks for Townsville',
    h2: 'Four AI courses Townsville learners start with',
    intro: 'Matched to your goal first, then to your level during the trial lesson. Payment details are never collected up front.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning built up from simple models, with training curves drawn and read by the learner.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Training, validation, overfitting and regularisation, implemented by hand before any library is used.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Working with real timetables and datasets, the part of AI that decides whether models can learn anything at all.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Adults exploring AI', note: 'How large models are trained and used, with the same habits of testing and checking applied to them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Townsville in the Census',
      h2: 'A young urban area of 179,011 people',
      intro: 'Census 2021 QuickStats for the Townsville Significant Urban Area, with the Queensland and Australian figures the bureau shows alongside.',
      body: [
        { kind: 'table', caption: 'Townsville urban area in the 2021 Census', head: ['Measure', 'Townsville', 'Queensland share', 'Australian share'], rows: [
          ['People', '179,011', 'Not shown', 'Not shown'],
          ['Median age', '35', 'Not shown', 'Not shown'],
          ['Families', '45,989', 'Not shown', 'Not shown'],
          ['Private dwellings', '75,844', 'Not shown', 'Not shown'],
          ['Separate houses among occupied dwellings', '51,876, or 80.1%', '74.8%', 'Not shown'],
          ['Professional workers', '17,600, or 20.0%', '21.4%', '24.0%'],
          ['Bachelor degree or above, aged 15 and over', '26,584, or 18.4%', '21.9%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A young median', p: 'Half of Townsville\'s residents were 35 or younger in 2021, a year below the median of 36 for Greater Brisbane.' },
          { h3: 'Twenties outnumber late teens', p: 'The Census counted 14,528 residents aged 20 to 24, 8.1% of the population, and 12,203 aged 15 to 19.' },
          { h3: 'Trades and technical roles', p: 'Technicians and trades workers number 12,628, or 14.4% of employed residents, against 13.7% across Queensland.' }
        ] },
        { kind: 'p', text: 'About these numbers: small census cells are randomly adjusted by the ABS for privacy, so parts of a table may not match the total. We repeat the bureau\'s totals and shares without adding rows together.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'When does more training make a model worse?',
      intro: 'All 719 stop-to-stop segments in Translink\'s open Townsville timetable, and a model that predicts scheduled minutes from distance.',
      body: [
        { kind: 'table', caption: 'The data (our calculation from the Townsville timetable, 7 October 2026)', head: ['What we counted', 'Result'], rows: [
          ['Routes, stops and trips in the file', '17 routes, 638 stops, 992 trips'],
          ['Distinct pairs of consecutive stops', '719'],
          ['Middle straight-line distance between stops', '394 m'],
          ['Middle scheduled time between stops', '1 minute'],
          ['Pairs timetabled at 0 minutes', '138, because times are whole minutes'],
          ['Training, validation and test pairs', '60, 240 and 419']
        ] },
        { kind: 'table', caption: 'A flexible model trained for longer and longer (error in squared minutes; our calculation)', head: ['Training epochs', 'Error on the 60 training pairs', 'Error on the 240 validation pairs'], rows: [
          ['100', '0.611', '38.2'],
          ['400', '0.462', '1.43, the lowest'],
          ['1,000', '0.458', '15.2'],
          ['5,000', '0.452', '268.4'],
          ['100,000', '0.443', '2,727.5'],
          ['200,000', '0.442', '1,619.7']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Hold some data back', p: 'The model only ever learns from 60 pairs. Another 240 are kept aside to measure how it does on stops it has never seen, and 419 more are saved for one final test.' },
          { h3: '2. Watch both curves', p: 'Training error keeps falling, which looks like progress. Validation error bottoms out at epoch 400 and then climbs, which shows the model memorising its 60 examples instead of learning the pattern.' },
          { h3: '3. Stop on validation', p: 'Early stopping keeps the weights from the epoch with the lowest validation error and halts once 2,000 more epochs bring no improvement. Here that rule fires at epoch 2,400.' }
        ] },
        { kind: 'callout', h3: 'The final test settles it', p: 'On the 419 test pairs, the weights saved at epoch 400 score an error of 1.069. The weights after 200,000 epochs score 4,509.9, thousands of times worse. A simple straight line fitted to the same 60 pairs scores 1.196, with buses taking about 3.7 minutes per kilometre of straight-line distance. The flexible model only beats the straight line because it was stopped early.' },
        { kind: 'p', text: 'These are our numbers from the timetable valid 7 October to 6 December 2026. The model is a degree-9 polynomial, chosen because it overfits clearly; our reading is that its validation error explodes mainly on segments longer than any in the training set, where a high-degree curve swings wildly. Scheduled minutes are not measured travel times.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Training models responsibly',
      h2: 'Five habits before you call a model trained',
      intro: 'Learned on bus segments, then applied to any model trained by repeated steps, from small regressions to neural networks.',
      body: [
        { kind: 'table', caption: 'From "the loss went down" to "the model works"', head: ['Habit', 'In practice', 'What it prevents'], rows: [
          ['Split before you start', 'Training, validation and test sets fixed in advance', 'Fooling yourself with data the model has seen'],
          ['Plot both curves', 'Training and validation error by epoch', 'Mistaking memorisation for learning'],
          ['Keep the winning weights', 'Save whenever validation improves', 'Ending up with the last weights instead of the strongest'],
          ['Use patience', 'Stop after a set number of epochs without improvement', 'Stopping on random noise'],
          ['Test once, at the end', 'Touch the test set only after all choices are made', 'A test score that is secretly a validation score']
        ] },
        { kind: 'p', text: 'The last habit is the hardest to keep. Once you have looked at test results and changed something, the test set has become part of your decisions, and its score no longer measures performance on genuinely new data. Our learners keep the 419 test segments locked away until the very end.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Fit a straight line and a curve to the bus segments in Python, draw both error curves and write the early stopping rule.' },
          { h3: 'University students', p: 'Early stopping alongside weight decay and dropout, and why each one works, with experiments on real data.' },
          { h3: 'Working adults', p: 'Question any model your employer builds or buys about its validation data and the point at which its training ended.' }
        ] },
        { kind: 'p', text: 'No transport operator, government department or statistics office is involved with our classes. Census figures come from the ABS, the timetable is public, and every segment count, error value and curve here was produced by code we wrote.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Townsville',
      h2: 'Seventeen routes, one steady clock',
      intro: 'Local facts with a data angle.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A compact network', p: 'The Townsville file lists 17 routes, from the Ferry Terminal and the city out to suburbs such as Kelso and Bushland Beach, run by Kinetic for Translink.' },
          { h3: 'The year\'s last term', p: 'State schools in Townsville are back on Tuesday 6 October 2026 and break up on Friday 11 December, per the education department calendar.' },
          { h3: 'No daylight saving', p: 'Queensland has stayed on UTC+10 all year since 1992, so Townsville timetables never have to handle a clock change.' }
        ] },
        { kind: 'spec', title: 'Whole minutes and zero-minute hops', p: 'Because the timetable records times to the minute, 138 consecutive stops are scheduled 0 minutes apart. A model has to cope with that rounding, and a learner has to decide whether those rows are data or noise before training anything.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first chart to models that know when to stop',
    intro: 'Treat the ages loosely; where you begin is settled in the free session.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Data and charts', p: 'Reading the timetable, working out distances between stops and plotting minutes against metres.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 15 to 18', h3: 'First models', p: 'Lines and curves fitted by gradient descent, with training and validation curves drawn by hand.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'University', h3: 'Generalisation', p: 'Overfitting, early stopping, regularisation and model selection, tested on real datasets.', courses: ['ai-ml-masterclass-complete-college', 'data-science-complete-masterclass-college'] },
      { band: 'Adults', h3: 'AI in practice', p: 'Evaluating and maintaining models that make decisions at work.', courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Large AI models are trained by experts. Why should a Townsville teenager learn early stopping?',
    intro: 'Because every model, large or small, faces the same question our bus model does: is it learning, or memorising?',
    p1: 'Models of every size are trained in steps, checked against data held back, and saved at checkpoints, the same ideas our learners meet on 60 bus segments. Seeing a validation curve turn upward at epoch 400 while training error keeps falling makes those ideas concrete in a way no explanation can, and it explains why a model can perform beautifully on familiar examples and badly on new ones.',
    p2: 'A Townsville learner who has watched that happen asks better questions of any AI system: what was it tested on, how was that kept separate, and what happens on cases unlike its training data? Those questions apply equally to a chatbot\'s answers and to a model built at work.',
    closer: 'AI will keep getting more capable, and a Townsville learner who understands why models fail on new data will be the one trusted to build and judge them in 2026.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Bushland Beach to the city, one live class',
    intro: 'Townsville stretches along the coast and inland, and an online lesson reaches every suburb without a car or a bus.',
    cells: [
      { h3: 'Every suburb included', p: 'A learner near the Strand and another out at Kelso join the same lesson at the same time from home.' },
      { h3: 'Queensland school years', p: 'Teachers use Queensland year levels, from Year 7 to Year 12, and all lessons run in English.' },
      { h3: 'Start with a real model', p: 'The first, unpaid session has you training something small while the teacher watches, and it closes with advice on stage, course and slot. There is no card to enter.' },
      { h3: 'Groups of five to ten', p: 'Learners at the same stage from North Queensland, the rest of Australia and abroad, so every level has a sensible slot.' },
      { h3: 'Two lessons a week', p: 'About eight lessons a month at a fixed time, with holidays and exam periods planned with the teacher.' },
      { h3: 'Same offset in every season', p: 'Neither North Queensland nor India adjusts its clocks, which fixes the distance to our teachers at four and a half hours.' }
    ],
    spec: { title: 'A 4pm lesson stays at 4pm', p: 'With no clock changes on either side, a Townsville lesson at 4pm begins at 11:30am in India in every month of the year.' }
  },

  fees: {
    h2: 'What AI and programming classes cost in Townsville',
    intro: 'Three figures, nothing hidden.',
    first: 'One free lesson that ends with a level, a recommended course and a weekly time.',
    group: 'A month of tuition, normally eight lessons, with five to ten learners at your stage.',
    private: 'Roughly eight private lessons a month with a single teacher.',
    closer: 'North Queensland families pay in US dollars at the same single rate as everyone outside India, with no regional loading. Billing starts only once the trial has fixed a course and time; the pricing page explains holidays, missed lessons and changing format.'
  },

  reviewsH2: 'What our families have written on Google',

  book: {
    h2: 'Tell us where you want to start with AI',
    intro: 'We pick a first task that fits: charting bus segments for a Year 8, a first model and its error curves for a Year 11, or the full early stopping experiment for an adult.',
    success: 'Thank you. We will contact you soon about an AI and programming class in Townsville.'
  },

  faq: {
    h2: 'Townsville AI and programming questions',
    intro: 'What Townsville learners and families often ask first.',
    items: [
      { q: 'How many people live in the Townsville urban area?', a: 'The 2021 Census counted 179,011, and half were 35 or younger.' },
      { q: 'What is early stopping in machine learning?', a: 'Early stopping is a training rule that watches a model\'s error on validation data it does not learn from, keeps the weights from its lowest-error point, and ends training once that error stops improving for a set number of steps. It prevents a model from memorising its training examples.' },
      { q: 'What is overfitting?', a: 'Overfitting is when a model fits its training data more and more closely while getting worse on new data. In our Townsville project the training error keeps falling while the validation error rises from 1.43 to over 2,700.' },
      { q: 'What is the Townsville bus project?', a: 'Learners take the 719 stop-to-stop segments in Translink\'s open Townsville timetable, train a flexible model to predict scheduled minutes from distance on 60 of them, and watch validation error reach its lowest point at epoch 400 before rising. Early stopping keeps the epoch-400 model, which beats a straight line on the final test.' },
      { q: 'Is AI too hard for school students?', a: 'No. Teenagers start with charts and straight lines, and the ideas of training and validation make sense once they have seen the curves. The maths deepens as learners are ready for it.' },
      { q: 'When are lessons for Townsville learners?', a: 'Between the end of school and dinner, or at the weekend, settled during the trial and always quoted in Townsville time; India runs four and a half hours behind, year round.' },
      { q: 'Can primary-school children learn with you?', a: 'They can, from six years old, usually through Scratch first; this page is written with older students and adults in mind.' },
      { q: 'Is there a Modern Age Coders centre in Townsville?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Townsville coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Townsville and Queensland learners',
    html: 'Teenagers keen on AI can read <a class="cg-inline-link" href="/python-ai-course-for-kids-australia">the Python AI course for younger learners</a> or <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens in Australia</a>. Further south, see <a class="cg-inline-link" href="/ai-and-programming-classes-in-sunshine-coast">AI and programming on the Sunshine Coast</a>, and the state guide is <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">coding and AI classes in Queensland</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Townsville and Queensland',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-cairns', label: 'Cairns' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-tsva .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.35rem); }
.cg-root.cg-tsva .cg-hero h1 { font-weight: 745; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-tsva .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-tsva .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-tsva .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.012em; }
.cg-root.cg-tsva .cg-grid-3 { gap: clamp(0.95rem, 2.2vw, 1.8rem); }
.cg-root.cg-tsva .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-tsva .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tsva .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-tsva .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Townsville Significant Urban Area, ABS Census 2021 QuickStats, area code 3017, compared with Queensland and Australia (read 7 October 2026): 179,011 people; median age 35; 45,989 families; 75,844 private dwellings; average 2.5 people per household; dwelling structure: separate house 51,876 (80.1 percent; Queensland 74.8), flat or apartment 4,845 (7.5 percent; Queensland 12.5; Australia 14.2); occupation: Professionals 17,600 (20.0 percent; Queensland 21.4; Australia 24.0), Technicians and Trades Workers 12,628 (14.4 percent; Queensland 13.7); Bachelor Degree level and above 26,584 (18.4 percent; Queensland 21.9; Australia 26.3); aged 15 to 19: 12,203 (6.8 percent); aged 20 to 24: 14,528 (8.1 percent). Queensland Department of Education term dates: 2026 Term 4 Tuesday 6 October to Friday 11 December. IANA tz database: Australia/Brisbane UTC+10 without daylight saving since March 1992; Asia/Kolkata UTC+5:30.',
    localProject: 'Early stopping on validation loss. Translink TSV_GTFS.zip (feed_info publisher Department of Transport and Main Roads - Translink Division, 20261007 to 20261206; agency Kinetic (Townsville)): 17 routes, 638 stops, 992 trips in stop_times. For each trip, consecutive stop pairs (sorted by stop_sequence) give scheduled minutes = next arrival minus this departure; 719 distinct (from, to) pairs; per pair median minutes and straight-line distance (equirectangular). Median distance 394 m; median minutes 1.0; 138 pairs at 0 minutes. Model: degree-9 polynomial in standardised distance (km), features column-scaled, batch gradient descent learning rate 0.02 on 60 training pairs (numpy default_rng seed 2026 permutation), 240 validation, 419 test. MSE (squared minutes) train/validation: epoch 100 0.611/38.195; 400 0.462/1.430; 1,000 0.458/15.201; 2,000 0.454/77.555; 5,000 0.452/268.384; 10,000 0.450/521.187; 50,000 0.444/2,257.365; 100,000 0.443/2,727.526; 200,000 0.442/1,619.720. Best validation epoch 400; patience 2,000 epochs (checked every 100) triggers at 2,400. Test MSE: best weights 1.069, final weights 4,509.885. Straight line (numpy polyfit degree 1) on the same 60 pairs: test MSE 1.196, slope 3.735 minutes per km, intercept -0.471. Lesson family: early stopping, overfitting, train/validation/test discipline.',
    requiredMentions: [
      '179,011',
      '45,989',
      '75,844',
      '51,876',
      '26,584',
      '17,600',
      '719 stop-to-stop segments',
      '4,509.9',
      'Bushland Beach to the city',
      'epoch 2,400'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Townsville Significant Urban Area (3017): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3017' },
      { claim: 'Translink General Transit Feed Specification, Townsville feed (TSV_GTFS.zip), Creative Commons Attribution 4.0, Queensland Government open data portal.', url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink' },
      { claim: 'Queensland Department of Education, term dates 2026.', url: 'https://education.qld.gov.au/about-us/calendar/term-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Brisbane.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Measured bus travel times or on-time performance: the file holds scheduled times only, and the page says so.',
      'Any reason for Townsville\'s younger median age: not stated by the ABS, so not offered.',
      'Bureau of Meteorology observations: the observations feed returned 403 and was not circumvented.',
      'QCAA senior subject details: qcaa.qld.edu.au returned a Cloudflare 403 and was not circumvented.',
      'OpenStreetMap road distances: the Overpass API returned 406 to this machine on 7 October 2026; straight-line distances between published stop coordinates are used instead.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Translink, Kinetic, the Department of Transport and Main Roads, the ABS or the Queensland Department of Education.'
    ]
  }
};
