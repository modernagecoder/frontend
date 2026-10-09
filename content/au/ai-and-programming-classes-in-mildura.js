'use strict';
// Mildura (cg- city page, Australia cluster Phase 7, row 157). Shaped page: AI and programming for teenagers and
// adults. Place facts are for the ABS Mildura - Buronga Significant Urban Area (2012), which crosses the Murray
// into New South Wales at Buronga; QuickStats compares it with Victoria.
// Spine: how good can the simplest machine learning model be at predicting when a smart bin is emptied? Data:
// Mildura Rural City Council, "Mildura RRC Smart Bin Fill Levels" (data.gov.au, Creative Commons Attribution 3.0
// Australia), mildura-bin-sensor-data.csv downloaded 7 October 2026: 42,061 readings from 7 devices, 2021-12-10
// to 2023-09-14 (UTC). Devices mil-bin01 and mil-bin02 report coordinates near -34.187, 142.165 in Mildura;
// mil-bin01 8,120 readings (30 with the value 9999), 2021-12-10 to 2023-04-02; mil-bin02 5,675 readings (7 with
// 9999), 2022-03-29 to 2023-04-02. Our processing (scratchpad au/r3/mdu_oner.py): drop 9999 readings; an
// emptying event is a rise of more than 400 mm in distance-to-top between consecutive readings (96 for mil-bin01,
// 41 for mil-bin02); target = an emptying event within the next 24 hours. 13,758 labelled readings, split in time
// order 70/30 (train 9,630 to 30 November 2022, test 4,128). Positive share train 17.7%, test 15.9%. Baseline
// "never emptied": train 82.3%, test 84.1%. One-rule (1R) candidates: day of week, hour, device, and distance band
// (<400, 400-799, 800-1199, 1200+ mm). Day, hour and device rules all predict "no" for every value, equal to the
// baseline; Friday readings 349 of 1,342 positive (26.0%) against Monday 136 of 1,329 (10.2%). Winning rule:
// distance band 400-799 mm predicts "yes": train 87.8%, test 88.5%; on test it flags 238 readings, 211 correct
// (precision 88.7%), and finds 211 of 657 positives (recall 32.1%). Lesson family: the one-rule (1R) classifier
// and baselines; screened free site-wide on 7 October 2026 ("one-rule", "1R classifier": 0 page hits; claimed by
// AU-R3).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Mildura - Buronga Significant Urban Area
// (2012): 53,620 people; median age 40 (Victoria 38, Australia 38); 13,903 families; 23,731 private dwellings;
// 2.4 people per household; separate house 16,888 (84.8%; Victoria 73.4%; Australia 72.3%); Technicians and
// Trades Workers 3,195 (13.6%; Victoria 12.6%); Professionals 4,025 (17.2%; Victoria 25.0%); Bachelor Degree level
// and above 5,748 (13.2%; Victoria 29.2%; Australia 26.3%); aged 10 to 14 3,448 (6.4%); aged 15 to 19 3,114
// (5.8%). Victorian Government, 2027 school term dates: Term 1 Wednesday 27 January (students start Thursday 28
// January in government schools) to Thursday 25 March; Term 4 Monday 4 October to Friday 17 December. IANA tz:
// Australia/Melbourne daylight saving 4 October 2026 to 4 April 2027.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'MILDURA', label: 'Mildura', blurb: 'AI and programming for Mildura teens and adults, and a one-rule model that predicts when the council\'s smart bins are emptied.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-mildura',
  code: 'mdu',
  accent: '#3E5894',
  accentRationale: 'Mildura: a Murray River blue (HSV saturation 0.58, value 0.58, hue 222), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 6.9:1 on white and 5.6:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Mildura',
    eyebrow: 'Mildura, Victoria, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Mildura, Victoria',
  title: 'AI and Programming Classes in Mildura | Live Online Lessons',
  description: 'Live online AI and programming classes for Mildura teenagers and adults: Python, machine learning and honest model testing, with a real teacher. First lesson free.',
  ogDescription: 'AI classes for Mildura, with a project on the council\'s smart bin sensors where the simplest possible model beats a baseline by four points.',
  twitterDescription: 'Mildura AI and programming classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Mildura Learners',
    description: 'Level-matched online Python, machine learning, sensor data and model evaluation for teenagers and adults across Mildura and the Sunraysia district, taught live in English.'
  },

  h1: 'AI and programming classes in Mildura',
  capsuleQ: 'What are the best AI and programming classes in Mildura?',
  capsule: 'Classes in which a Mildura teenager or adult trains and tests real machine learning models in Python with a teacher, on data from sensors in their own city. The 2021 Census counted 53,620 people in the Mildura and Buronga urban area, which spans the Murray into New South Wales. We teach on live video, either privately or with a few learners at the same level, and there is no charge for the first class.',
  lead: 'Mildura Rural City Council fitted some of its public bins with sensors that measure the distance from the lid down to the rubbish, and published every reading as open data. Two of those bins, in Mildura itself, sent 13,758 usable readings between December 2021 and April 2023. Can a computer predict, from one reading, whether the bin will be emptied in the next 24 hours? Our Mildura project builds the simplest machine learning model there is, a one-rule classifier, and finds that it beats the "never emptied" guess by only four percentage points, while catching about one emptying in three. Understanding why is a better introduction to AI than any chatbot.',
  wa: 'Hello Modern Age Coders, I would like a free AI and programming class for a learner in Mildura.',

  picks: {
    eyebrow: 'Course picks for Mildura',
    h2: 'AI and programming courses for Mildura learners',
    intro: 'All four connect to the smart bin project. The free first lesson suggests one, and no card details are taken.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning from the ground up: data, simple models, testing and the habit of comparing with a baseline.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python for real data, including the cleaning that sensor readings always need.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'A full machine learning course, from classic models to neural networks, with careful evaluation.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'The complete path from raw data to trustworthy models, built in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Mildura in the Census',
      h2: 'A river city of houses, spanning two states',
      intro: 'The 2021 Census QuickStats for the Mildura - Buronga Significant Urban Area. Buronga sits across the Murray in New South Wales, and the bureau compares the area with Victoria.',
      body: [
        { kind: 'table', caption: 'Mildura - Buronga urban area totals, 2021 Census QuickStats', head: ['Census total', 'Mildura - Buronga'], rows: [
          ['People', '53,620'],
          ['Families', '13,903'],
          ['Private dwellings', '23,731'],
          ['Average household size', '2.4']
        ] },
        { kind: 'table', mt: true, caption: 'Mildura - Buronga beside Victoria and Australia', head: ['Measure', 'Mildura - Buronga', 'Victoria', 'Australia'], rows: [
          ['Median age', '40', '38', '38'],
          ['Separate houses among occupied homes', '84.8% (16,888)', '73.4%', '72.3%'],
          ['Technicians and trades workers among the employed', '13.6% (3,195)', '12.6%', '12.9%'],
          ['Bachelor degree or above among residents 15 and over', '13.2% (5,748)', '29.2%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two years older', p: 'The median age of 40 is two years above both the Victorian and the national medians.' },
          { h3: 'Trades', p: '3,195 employed residents were technicians and trades workers, 13.6%, a larger share than in Victoria.' },
          { h3: 'Teenagers', p: 'The Census counted 3,448 residents aged 10 to 14 and 3,114 aged 15 to 19.' }
        ] },
        { kind: 'p', text: 'On census figures: the bureau perturbs each cell slightly to protect privacy, so the rows of a table may not sum exactly to its total. We quote published totals and percentages as they appear and never create totals by adding rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can one simple rule predict when a Mildura smart bin is emptied?',
      intro: 'The council\'s open sensor file records how far the lid sits above the rubbish, hour by hour. We labelled each reading by whether an emptying followed within 24 hours, trained one-rule models on the first 70% of the time line, and tested them on the last 30%.',
      body: [
        { kind: 'table', caption: 'The two Mildura bins in the council file (our count)', head: ['Item', 'Figure'], rows: [
          ['Readings from the two Mildura bins', '13,795, of which 37 hold the value 9999, marking a failed measurement'],
          ['Usable readings after removing 9999', '13,758'],
          ['Emptying events (distance rises by more than 400 mm)', '96 for one bin, 41 for the other'],
          ['Readings followed by an emptying within 24 hours', '17.7% in training, 15.9% in testing']
        ] },
        { kind: 'table', mt: true, caption: 'How each one-rule model scores on the test period (our calculation)', head: ['Rule built on', 'What it predicts', 'Test accuracy'], rows: [
          ['Nothing (always "not emptied")', 'No for every reading', '84.1%'],
          ['Day of the week', 'No for every day', '84.1%'],
          ['Hour of the day', 'No for every hour', '84.1%'],
          ['Which bin', 'No for both bins', '84.1%'],
          ['Distance to the top', 'Yes only when the gap is 400 to 799 mm', '88.5%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. One feature at a time', p: 'For each feature, group the training readings by value and let each group predict whichever answer was most common in it. That table is the whole model.' },
          { h3: '2. Keep the winner', p: 'Score every one-feature model on the training data and keep the most accurate. Here it is the distance band, at 87.8% on training data.' },
          { h3: '3. Test on the future', p: 'Apply the rule to the later 30% of readings. It reaches 88.5%, flags 238 readings, is right about 211 of them, and finds 211 of the 657 emptyings.' }
        ] },
        { kind: 'callout', h3: 'Accuracy hides what matters', p: 'Fridays were followed by an emptying 26.0% of the time and Mondays only 10.2%, yet no single day reaches a majority, so the day-of-week model predicts "no" every time and scores exactly the baseline. The winning rule is right 88.7% of the times it says "yes", but misses two emptyings in three. Learning to look past one accuracy number, at baselines, precision and recall, is the most useful habit in machine learning, and this tiny model teaches it plainly.' },
        { kind: 'p', text: 'These results are ours, from the council file as downloaded, with an emptying defined by our 400 mm rule and a 70/30 split in time order; other choices give somewhat different numbers. The data ends in 2023 and describes two bins only. Nothing here comments on the council\'s collection service; the project is about how a simple model behaves.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Machine learning honestly',
      h2: 'What a one-rule model teaches before any neural network',
      intro: 'The Mildura project walks through the whole machine learning cycle with a model small enough to check by hand.',
      body: [
        { kind: 'table', caption: 'Steps in the project and what each teaches', head: ['Step', 'In the Mildura project', 'Lesson'], rows: [
          ['Clean', 'Remove the 37 readings of 9999', 'Sensors produce impossible values'],
          ['Label', 'Mark readings followed by an emptying within 24 hours', 'Targets are defined by people'],
          ['Split by time', 'Train before 30 November 2022, test after', 'Never test a model on its own past'],
          ['Compare with a baseline', '"Never emptied" scores 84.1% on test', 'High accuracy can mean nothing'],
          ['Read beyond accuracy', 'Precision 88.7%, recall 32.1%', 'Errors have different costs']
        ] },
        { kind: 'p', text: 'Every one of these steps applies unchanged to the largest AI systems. A learner who has seen a model score 84.1% by doing nothing at all will never again be impressed by an accuracy figure on its own, and will always ask what the simplest possible model would have scored.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Build the one-rule model in plain Python, then try their own features and see whether any beats the distance band.' },
          { h3: 'University students', p: 'Decision trees, as many rules stacked together, and why they overfit without a fair test set.' },
          { h3: 'Adults', p: 'Reading model reports at work with the right questions: what was the baseline, and what does the model miss?' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no affiliation with Mildura Rural City Council, the Victorian Government or the Australian Bureau of Statistics. The council publishes the sensor readings; every label, rule and score on this page comes from our own code.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Mildura',
      h2: 'Sensors on the river, schools and Victorian time',
      intro: 'Further details from the council\'s data and Victoria\'s calendar.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Seven sensors', p: 'The council file holds 42,061 readings from seven bin sensors, two of them in Mildura and the rest elsewhere in the municipality.' },
          { h3: 'The 2027 school year', p: 'Classes in Victorian state schools resume for students on 28 January 2027, a Thursday, and the year closes on 17 December.' },
          { h3: 'Clocks across the river', p: 'Mildura keeps to Victorian time, so its clocks gain an hour on 4 October 2026 and lose it again on 4 April 2027, both Sundays.' }
        ] },
        { kind: 'spec', title: 'Why sensor data suits a first AI project', p: 'Sensor files are honest about their flaws. A value of 9999 where a measurement failed, readings at slightly irregular times and long gaps when a device is offline all have to be handled before any model is trained, which is exactly the work most real AI projects involve.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From one rule to real machine learning',
    intro: 'Starting points vary; one free class shows which rung suits each learner.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Data and rules', p: 'Python that reads sensor readings, counts outcomes and builds simple if-then rules by hand.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'First models', p: 'One-rule classifiers, decision trees and fair testing, applied to the Mildura bins and other open data.', courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'University', h3: 'Machine learning in depth', p: 'Model families, evaluation metrics and the statistics that make comparisons meaningful.', courses: ['ai-ml-masterclass-complete-college', 'artificial-intelligence-complete-masterclass-college'] },
      { band: 'Adults', h3: 'AI you can judge', p: 'Understanding and questioning the models that appear in reports, products and tools at work.', courses: ['data-science-complete-masterclass-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should a Mildura learner start AI with a model this simple?',
    intro: 'Because every honest evaluation of a large model starts by asking what a simple one would have done.',
    p1: 'It is easy to train an impressive-sounding model on the bin data and report 88% accuracy. It is harder, and far more useful, to notice that doing nothing scores 84% and that the model misses two emptyings in three. The one-rule classifier makes those facts impossible to overlook, because its entire logic fits in a sentence and every number can be checked by hand.',
    p2: 'Learners who have built it bring the same scepticism to every AI system they meet, from recommendation engines to chat assistants: compare with a baseline, look at the errors, and ask what the data could never show. That is the core of working with AI responsibly, and it is easier to learn on two bins in Mildura than on a model with billions of parameters.',
    closer: 'Models are everywhere in 2026, and a Mildura learner who always asks what the simplest model would score is the one who can tell real progress from noise.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Mildura, Irymple or Buronga, the same live lesson',
    intro: 'The urban area straddles a state border, and an online class does not mind which side of the river a learner lives on.',
    cells: [
      { h3: 'Across the Murray', p: 'A learner in Buronga and one in Irymple join the same class without anyone crossing the bridge.' },
      { h3: 'Victorian and NSW schooling', p: 'Teachers plan around Victorian year levels and terms, and work just as readily with NSW students across the river. Lessons are in English.' },
      { h3: 'The trial is a real class', p: 'The free lesson ends with a recommended level, course and time, and nobody asks for payment details.' },
      { h3: 'Groups at the same stage', p: 'Five to ten learners at one level, from Sunraysia and beyond, so classes are never too small to run.' },
      { h3: 'A twice-weekly habit', p: 'Two lessons a week at fixed times, about eight a month, with breaks planned around holidays and exams.' },
      { h3: 'Teachers in India', p: 'A 5pm Mildura lesson in July starts at 12:30pm India time; once daylight saving begins, it starts at 11:30am there.' }
    ],
    spec: { title: 'Time zones on a border', p: 'Mildura keeps Victorian time. Families near the border should confirm which clock a lesson uses, so every booking is quoted in Mildura time to keep things simple.' }
  },

  fees: {
    h2: 'Mildura class fees',
    intro: 'Three figures, no small print.',
    first: 'A free first lesson, finishing with a level, a course and a lesson time.',
    group: 'A month of classes, usually eight, with five to ten learners at your stage.',
    private: 'About eight lessons a month on the same plan, one to one.',
    closer: 'We invoice everywhere except India in US dollars, so a household in Mildura and one in Buronga pay exactly the same and no local price list exists. Payment starts only after the trial has agreed a course and a time; the pricing page covers holidays, absences and changing formats.'
  },

  reviewsH2: 'Families\' Google reviews',

  book: {
    h2: 'Book a first Mildura lesson',
    intro: 'Tell us an age and an interest. A Year 9 student might start by graphing one bin\'s readings; an adult could go straight to training and testing the one-rule model.',
    success: 'Thank you. Our team will be in touch soon about a Mildura class.'
  },

  faq: {
    h2: 'Mildura AI and programming class questions',
    intro: 'What Mildura learners and families usually ask before starting.',
    items: [
      { q: 'How many people live in the Mildura urban area?', a: 'The 2021 Census counted 53,620 residents in the Mildura - Buronga Significant Urban Area, which includes Buronga across the river in New South Wales. The median age was 40.' },
      { q: 'What is a one-rule classifier?', a: 'One of the simplest machine learning models. For each feature it builds a rule that predicts the most common outcome for each value of that feature, then keeps the single feature whose rule makes the fewest mistakes.' },
      { q: 'What does the Mildura smart bin project find?', a: 'Using the council\'s open sensor data for two Mildura bins, a one-rule model based on the distance to the top scores 88.5% on the test period, against 84.1% for always predicting "not emptied". It is right 88.7% of the times it predicts an emptying but finds only 32.1% of them.' },
      { q: 'Why does a 9999 appear in the sensor data?', a: 'In this file a reading of 9999 marks a measurement that could not be made, so learners remove those 37 readings before training anything. Spotting such values is one of the first habits of working with real data.' },
      { q: 'Do you support senior students on both sides of the border?', a: 'Yes. Teachers know the Victorian VCE subjects and the NSW HSC calendar and help senior students with computing and maths. Work submitted for assessment stays the student\'s own.' },
      { q: 'What time are Mildura lessons?', a: 'Families normally choose an after-school or weekend slot at the trial, quoted in Mildura time. India is 4.5 hours behind Mildura in winter and 5.5 hours behind during daylight saving.' },
      { q: 'Can younger children learn with you?', a: 'Children can start at six, building with Scratch blocks before typing, while the bin sensor project is aimed at secondary students and adults.' },
      { q: 'Is there a Modern Age Coders centre in Mildura?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Mildura AI classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Mildura and Victorian learners',
    html: 'Learners who enjoy models with language rather than numbers can read about the school-name generator on <a class="cg-inline-link" href="/ai-and-programming-classes-in-melton">AI and programming classes in Melton</a>. Year 12 students working with data may like <a class="cg-inline-link" href="/vce-applied-computing-data-analytics-help">VCE Applied Computing: Data Analytics help</a>; Victoria as a whole is covered on <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">coding and AI classes in Victoria</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Mildura and Australia',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-melton', label: 'Melton' },
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-mdu .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-mdu .cg-hero h1 { font-weight: 790; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-mdu .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.3rem 0 0.3rem 0.95rem; }
.cg-root.cg-mdu .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-mdu .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.012em; }
.cg-root.cg-mdu .cg-grid-3 { gap: clamp(1rem, 2.7vw, 2.05rem); }
.cg-root.cg-mdu .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-mdu .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mdu .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-mdu .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Mildura, ABS Census 2021 QuickStats, Mildura - Buronga Significant Urban Area 2012 (read 7 October 2026; state comparison column Victoria): 53,620 people; median age 40 (Victoria 38, Australia 38); 13,903 families; 23,731 private dwellings; average 2.4 people per household; dwelling structure, occupied private dwellings: separate house 16,888 (84.8 percent; Victoria 73.4; Australia 72.3), flat or apartment 1,125 (5.6 percent); occupation: Technicians and Trades Workers 3,195 (13.6 percent; Victoria 12.6; Australia 12.9), Professionals 4,025 (17.2 percent; Victoria 25.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 5,748 (13.2 percent; Victoria 29.2; Australia 26.3); aged 10 to 14 3,448 (6.4 percent); aged 15 to 19 3,114 (5.8 percent). Victorian Government, school term dates 2027: Term 1 Wednesday 27 January (students start Thursday 28 January in government schools) to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Monday 4 October to Friday 17 December. IANA tz database: Australia/Melbourne, daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'One-rule (1R) classifier with baselines. Mildura Rural City Council, Mildura RRC Smart Bin Fill Levels (data.gov.au, Creative Commons Attribution 3.0 Australia), mildura-bin-sensor-data.csv downloaded 7 October 2026: 42,061 rows, Channel Description Distance to Top 39,938 and Distance to Top mm 2,123, devices mil-bin01 8,120, mil-bin02 5,675, mil-bin03 10,000, mil-bin04 10,004, mil-bin06 2,123, mil-bin07 3,087, mil-bin08 3,052; UTC timestamps 2021-12-10 to 2023-09-14. Mildura devices mil-bin01 (-34.187008, 142.165156) and mil-bin02 (-34.187035, 142.165188): 13,795 readings, 37 with Calibrated Value 9999 removed, 13,758 used. Emptying event: next reading minus current reading > 400 mm (mil-bin01 96, mil-bin02 41). Label: emptying within 24 h after the reading. Features: local day and hour (Australia/Melbourne), device, distance band (<400, 400-799, 800-1199, 1200+ mm). Time-ordered split 70/30: train 9,630 (to 2022-11-30 18:46 local), test 4,128; positives 17.7 / 15.9 percent. Baseline (always no) 82.3 / 84.1. 1R by day, hour, device: every value predicts no (train 82.3, test 84.1); day detail positives/negatives Fri 349/993, Mon 136/1,193. 1R by distance band: 400-799 -> yes, others no; train 87.8, test 88.5; test TP 211, FP 27, FN 446; precision 88.7, recall 32.1. Lesson family: one-rule classifier, baselines, precision and recall; distinct from decision trees and naive Bayes pages elsewhere on the site.',
    requiredMentions: [
      '53,620',
      '13,903',
      '23,731',
      '16,888',
      '3,195',
      '13,758',
      '88.5%',
      '84.1%',
      'Mildura - Buronga'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Mildura - Buronga Significant Urban Area (2012): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2012' },
      { claim: 'Mildura Rural City Council, Mildura RRC Smart Bin Fill Levels (Creative Commons Attribution 3.0 Australia).', url: 'https://data.gov.au/data/dataset/mildura-rrc-smart-bin-fill-levels' },
      { claim: 'Victorian Government, school term dates and holidays, 2027 dates.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'IANA time zone database, australasia file: Australia/Melbourne rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'The street location of the two Mildura sensor bins: only coordinates are published, so no street is named.',
      'The places where the other five sensors stand: outside Mildura and not needed; no town is named.',
      'That 9999 is documented by the council as a no-echo code: the page describes it as a value marking a measurement that could not be made, as it behaves in the data.',
      'Any comment on the quality or schedule of the council\'s waste collection: not assessed.',
      'Buronga\'s time-zone arrangements: not verified, so the page speaks only of Mildura time.',
      'Bureau of Meteorology facts for Mildura: the Bureau returned 403 and was not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Mildura Rural City Council, the Victorian Government or the ABS.'
    ]
  }
};
