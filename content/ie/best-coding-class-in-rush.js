'use strict';
// Rush (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022 town
// tables for "Rush, Co Dublin", Irish Rail's public station list (getAllStationsXML,
// 171 stations with aliases) and Irish Rail station pages, read 19 September 2026.
// Spine: scoring a classifier with a confusion matrix. Rule: a town is a "rail
// town" if at least a set share of journeys to work, school or college are by train
// (SAP2022T11T1TOWN22 combined rows, not stated removed). Label: an Irish Rail
// station whose name or alias contains the town name as whole words, reviewed by
// hand. 89 towns of 5,000+ usual residents, the five cities excluded; 55 with a
// station after review (58 before: Navan matched Navan Road Parkway, Dublin 15;
// Shannon matched Carrick on Shannon, Co Leitrim; Passage West-Monkstown matched
// Salthill and Monkstown, Dun Laoghaire; Celbridge found via the alias "Celbridge
// (Hazelhatch)"). Scores: 1% threshold TP 38 FP 5 FN 17 TN 29 (precision 88.4,
// recall 69.1, accuracy 75.3); 2% TP 29 FP 1 FN 26 TN 33 (96.7, 52.7, 69.7); 5% TP 15
// FP 0 FN 40 TN 34 (100, 27.3, 55.1); "every town has a station" accuracy 61.8. Rush:
// 526 of 7,744 stated journeys by train (6.79 percent); its station "Rush and Lusk"
// is at Station Road, Lusk, K45 P825. Scratchpad rail/classify.js. The Fingal page
// owns Rush's census-night population, St Joseph's and the Rush-Lusk LEA.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'RUSH', blurb: 'A rule guesses which towns have a railway station from how many people take the train. Its mistakes, and the mistakes in the answer key, are the lesson.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-rush',
  code: 'rsh',
  accent: '#1B4B1B',
  accentRationale: 'Rush: a deep market-garden green from the widened solver search, apart from the Fingal accent and the Swords, Malahide and Balbriggan pages',
  pageType: 'city',
  place: {
    name: 'Rush',
    eyebrow: 'Rush, Fingal, County Dublin',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Fingal' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-fingal', name: 'Fingal' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Fingal', href: '/coding-classes-in-fingal' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Rush, Fingal, County Dublin, Ireland',
  title: 'Best Coding Class in Rush | Modern Age Coders',
  description: 'Live online coding, Python, AI and data classes for Rush learners aged 6 to 67, in small groups at one level or one to one. The first lesson is free of charge.',
  ogDescription: 'Coding and AI classes for Rush, with a machine-learning project that tests a rule for spotting rail towns and counts every kind of mistake.',
  twitterDescription: 'Coding, Python and AI for Rush learners aged 6 to 67, taught live online. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Rush',
    description: 'Online coding, Python, AI, data and mathematics in groups matched by level for children, teenagers and adults in Rush, Fingal, County Dublin, taught live in English.'
  },

  h1: 'Coding classes in Rush',
  capsuleQ: 'What is the best coding class in Rush?',
  capsule: 'Rush has 10,814 usual residents in 3,472 households, and 3,059 of those households are on broadband, which is how our lessons arrive. A teacher runs each lesson live on video with a small group at one level or with a single learner, about twice a week, for ages six to sixty-seven. The opening lesson is free of charge. Monthly fees then run at USD 100 for a group place and USD 150 for one-to-one teaching.',
  lead: 'In Rush, 526 of the 7,744 residents who described their journey to work, school or college go by train. That suggests a simple rule for any town: if enough people take the train, it probably has a station. The rule is easy to write. Checking it properly is the real exercise, and it is the same check every machine-learning model has to pass. The learner scores the rule against Irish Rail\'s own list of 171 stations for 89 towns, counts the hits and both kinds of miss, and discovers that the usual score, accuracy, can be beaten by a rule that says every town has a station. Along the way the answer key turns out to need checking too: the station that serves Rush is called Rush and Lusk, and its address is in Lusk.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Rush.',

  picks: {
    eyebrow: 'Course picks for Rush',
    h2: 'First courses for Rush learners',
    intro: 'Choose the course by age and interest; its teacher places the learner properly in the free first lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with sorting games where the rule sometimes gets it wrong, and the learner counts how often.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python and first AI ideas: a rule that makes a guess, and a table of when it was right.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning with proper scoring: confusion matrices, precision, recall and thresholds.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults building alerts and filters at work, where false alarms and misses have different costs.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Test a rule that spots rail towns, and count every kind of mistake',
      intro: 'The rule: call a town a rail town if at least a chosen share of its journeys are by train. The answer key: whether Irish Rail\'s station list names the town. The test: 89 towns of 5,000 or more, with the five cities left aside.',
      body: [
        { kind: 'table', caption: 'The confusion matrix at a 2 percent threshold', head: ['', 'Town has a station', 'No station'], rows: [
          ['Rule says rail town', '29 correct', '1 false alarm'],
          ['Rule says not', '26 missed', '33 correct']
        ] },
        { kind: 'table', mt: true, caption: 'Three thresholds, and a rule that guesses the same thing every time', head: ['Rule', 'Precision', 'Recall', 'Accuracy'], rows: [
          ['At least 1% by train', '88.4%', '69.1%', '75.3%'],
          ['At least 2% by train', '96.7%', '52.7%', '69.7%'],
          ['At least 5% by train', '100.0%', '27.3%', '55.1%'],
          ['Every town has a station', '61.8%', '100.0%', '61.8%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Precision and recall', p: 'Precision asks how many of the flagged towns really have a station; recall asks how many of the towns with a station got flagged. Raise the threshold and precision climbs to 100 percent while recall falls to 27.3. One number is bought with the other.' },
          { h3: 'Accuracy flatters', p: 'Of the 89 towns, 55 have a station. A rule that simply says yes to every town is right 61.8 percent of the time, which beats the 5 percent rule on accuracy while learning nothing at all. When one answer is common, accuracy rewards guessing it.' },
          { h3: 'The mistakes teach most', p: 'At 2 percent the one false alarm is Naas, with 4.0 percent of journeys by train and no station of that name in the list. The misses include county towns such as Tralee and Castlebar, each 0.3 percent, which have a station but where few residents use it for daily journeys.' }
        ] },
        { kind: 'table', mt: true, caption: 'The answer key was built by a rule too: whole-word name matching, then checked by hand', head: ['Town', 'Matched station', 'After checking the station\'s address'], rows: [
          ['Navan', 'Navan Road Parkway', 'On the Navan Road, Dublin 15: not Navan'],
          ['Shannon', 'Carrick on Shannon', 'In Co Leitrim: not Shannon'],
          ['Passage West-Monkstown', 'Salthill and Monkstown', 'In Dun Laoghaire, Co Dublin: not this Monkstown'],
          ['Celbridge', 'Hazelhatch', 'Found only through the list\'s alias, Celbridge (Hazelhatch)'],
          ['Rush', 'Rush and Lusk', 'Address on Station Road, Lusk: counted for both towns']
        ] },
        { kind: 'callout', h3: 'Score a rule by its mistakes, not by its accuracy', p: 'Every classifier, from a spam filter to a medical test, makes two kinds of error: false alarms and misses. A single accuracy figure hides which is which, and when one answer is far more common than the other it can make a useless rule look good. Report the full confusion matrix, say which error matters more for the job, and choose the threshold with that in mind. Then check the answer key, because the labels a model is scored against are often built by rules of their own.' },
        { kind: 'p', text: 'The learner writes the rule as one line, prediction equals train share at or above a threshold, and a scoring function that fills the four cells of the confusion matrix and computes precision, recall and accuracy. A loop runs the thresholds; one more line scores the rule that always says yes. Building the answer key is its own small program: split each station name and alias into words, look for the town name as whole words, and print every match for a human to check. Three matches failed that check, and a fourth town only appeared once the alias field was included.' }
      ]
    },
    {
      id: 'station', tint: 'tint', eyebrow: 'Rush and its station',
      h2: 'One station, two towns',
      intro: 'Rush is flagged correctly by the rule, but deciding that it "has a station" took a judgement.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Named for both', p: 'Irish Rail lists a single station, Rush and Lusk, and its station page gives the address as Station Road, Lusk, Co. Dublin, Eircode K45 P825, with sheltered bike parking. The answer key counts it for both towns.' },
          { h3: 'Rush on the rule', p: 'With 526 of 7,744 stated journeys by train, 6.79 percent, Rush is flagged as a rail town at every threshold up to 5 percent and correctly matched to a station.' },
          { h3: 'Lusk on the rule', p: 'Lusk, sharing the same station, sends 4.9 percent of its journeys by train: flagged at 2 percent, missed at 5. The same station, two towns, two different outcomes at the stricter threshold.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It does not rate rail services or say why some towns with a station have few train users. The answer key reflects one reasonable rule plus three hand corrections, and a different rule, such as distance to the nearest station, would change some labels. Irish Rail has no connection with us.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'What the 2022 census found in Rush',
      intro: 'The Census 2022 small area tables for the town of Rush, Co Dublin, describing its usual residents and their homes.',
      body: [
        { kind: 'table', caption: 'Rush at census time', head: ['Census count', 'Rush'], rows: [
          ['Usual residents', '10,814'],
          ['Households', '3,472'],
          ['Households with broadband', '3,059'],
          ['Working residents in the travel table', '4,945'],
          ['Journeys to school, college or childcare', '3,193'],
          ['Children under fifteen in childcare', '749'],
          ['Journeys by train, work and school together', '526']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Work', p: 'Of 4,945 working residents, 2,605 drive; 622 work mainly at or from home, 430 take the bus, 324 the train, 281 a van, 217 walk, 141 travel as a car passenger and 61 cycle.' },
          { h3: 'School', p: 'Of 3,193 journeys to school, college or childcare, 1,062 are made as a car passenger and 974 on foot; 465 go by bus, 202 by train and 198 by bicycle.' },
          { h3: 'Home', p: 'Asked about working from home, 1,728 of Rush\'s working residents said they do some or all of the time, 2,842 said they never do, and 375 did not answer.' }
        ] }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Rush learners',
      intro: 'Two lessons a week is the usual rhythm, and a teacher leads every minute of each.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'The census-night age table counts 1,224 children aged six to twelve in Rush. They start with blocks and games, and soon write rules that sort things and check when the rule was wrong.' },
          { h3: 'Teenagers', p: 'Rush has 1,094 residents aged thirteen to eighteen, the stage at which Python, websites, AI projects and data work like this rail-town test usually begin.' },
          { h3: 'Adults', p: 'Adults join from any starting point, including none, and the first lesson settles the level.' }
        ] },
        { kind: 'p', text: 'Census figures are reproduced as the Central Statistics Office published them, and the station list is Irish Rail\'s own, read with its aliases. The rule, the answer key and the scores were computed on 19 September 2026, and each of the three corrected labels was checked against Irish Rail\'s station page for its address.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting rules to scoring a classifier',
    intro: 'Treat each age band as a suggestion; lesson one sets the real starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Rules that sort', p: 'Block-coded games that sort things by a rule, and a tally of when the rule got it wrong.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Right and wrong guesses', p: 'Python rules that make a guess, and a two-by-two table of hits, misses and false alarms.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Scoring models', p: 'Confusion matrices, precision, recall and threshold choice on real public data.', courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Alerts at work', p: 'Filters and alerts where false alarms and misses cost different amounts, and a threshold chosen to match.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how good the rule is',
    intro: 'It may quote an accuracy. Ask it for the whole matrix.',
    p1: 'An AI assistant asked to evaluate a rule like this will often report a single accuracy figure, because it is the most familiar score. Here that figure would rank a rule that always says yes above a rule that actually looks at the data, and it would say nothing about whether the errors are false alarms or misses.',
    p2: 'The learner who built this test then asks the assistant for the confusion matrix, precision and recall at several thresholds, and a list of the labels it trusted without checking. Those three requests turn a flattering score into an honest evaluation.',
    closer: 'Models are easy to build now. Scoring them honestly, labels included, is the skill that matters.',
    blogAnchor: 'why learning to code is worth starting now'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Rush lessons run',
    intro: 'In practice.',
    cells: [
      { h3: 'Live, every lesson', p: 'A teacher runs each lesson in real time and works from the learner\'s own code.' },
      { h3: 'Groups at one level', p: 'Five to ten learners who have reached the same point in the course, from Fingal, the rest of Ireland and abroad.' },
      { h3: 'Twice a week, mostly', p: 'Around eight lessons a month, on days and at hours fixed before the course starts.' },
      { h3: 'Built round the school year', p: 'Breaks, holidays and exam weeks are planned in from the outset.' },
      { h3: 'Equipment', p: 'A laptop or desktop with a keyboard, sound in both directions, and a broadband line that copes with live video.' },
      { h3: 'Private lessons', p: 'One-to-one teaching is there for any learner whose level, speed or free hours leave them without a suitable group.' }
    ],
    spec: { title: 'Taught online only', p: 'Rush learners take every lesson on video. We have no premises in Rush or anywhere in Ireland, and the lesson is the same from any connected home.' }
  },

  fees: {
    h2: 'Fees for Rush',
    intro: 'The complete list.',
    first: 'A full first lesson with the level assessed, free.',
    group: 'A month in a group of five to ten at the same level, about eight live lessons.',
    private: 'A month of private lessons at the same weekly frequency.',
    closer: 'One monthly price in US dollars applies to every family outside India. The free first lesson carries no charge, fees begin when the course does, and the pricing page covers holidays, missed lessons and switching between a group and private lessons.'
  },

  reviewsH2: 'Six of our families on Google, each review in full',

  book: {
    h2: 'Book a free first lesson in Rush',
    intro: 'Send us the learner\'s age and interests and we will plan a first hour to match. It could end with a game, a program that works, or a rule tested against real data, misses and all.',
    success: 'Thank you. We will contact you about the lesson soon.'
  },

  faq: {
    h2: 'Rush coding class questions',
    intro: 'What Rush families usually ask first.',
    items: [
      { q: 'How many people live in Rush?', a: 'The Census 2022 small area tables record 10,814 usual residents in Rush, in 3,472 households, and 3,059 of those households have broadband.' },
      { q: 'What is the data project on this page?', a: 'Testing a simple rule that guesses whether a town has a railway station from the share of its journeys made by train, then scoring it against Irish Rail\'s station list for 89 towns. At a 2 percent threshold it has a precision of 96.7 percent and a recall of 52.7, and a rule that says every town has a station beats the strictest version on accuracy.' },
      { q: 'Does Rush have a railway station?', a: 'Irish Rail lists Rush and Lusk as one station, with its address on Station Road, Lusk, Eircode K45 P825. The project counts it for both towns, which is exactly the kind of judgement an answer key hides.' },
      { q: 'How do Rush residents get to work?', a: 'Of 4,945 working residents in the travel table, 2,605 drive, 622 work mainly at or from home, 430 take the bus, 324 the train and 281 use a van.' },
      { q: 'When are lessons?', a: 'Late afternoons, evenings and weekend slots. Rush lessons are fixed in Irish time; India runs four and a half hours ahead through Irish summer time and five and a half through the winter, and every slot we open has to work on both clocks.' },
      { q: 'Can adults sign up?', a: 'Yes, up to sixty-seven, and beginners are welcome. An adult\'s free first lesson shows which suits better, a small group at the same level or a teacher one to one.' },
      { q: 'Will a Rush learner be taught with other Rush learners?', a: 'Groups are formed by level rather than town, so classmates may be in Fingal, elsewhere in Ireland or abroad.' },
      { q: 'Is there a Modern Age Coders classroom in Rush?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Rush cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'North Fingal and beyond',
    html: 'Rush sits under the <a class="cg-inline-link" href="/coding-classes-in-fingal">Fingal</a> page, beside the town pages for <a class="cg-inline-link" href="/best-coding-class-in-swords">Swords</a>, <a class="cg-inline-link" href="/best-coding-class-in-balbriggan">Balbriggan</a> and <a class="cg-inline-link" href="/best-coding-class-in-malahide">Malahide</a>, with <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> above. A neutral comparison of online coding schools is on <a class="cg-inline-link" href="/best-online-coding-classes-ireland">this page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> brings the series together.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Rush, Fingal and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-fingal', label: 'Fingal' },
    { href: '/best-coding-class-in-balbriggan', label: 'Balbriggan' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-rsh .cg-hero-grid { align-items: start; gap: clamp(1.16rem, 3.17vw, 2.57rem); }
.cg-root.cg-rsh .cg-hero h1 { font-weight: 700; letter-spacing: -0.0184em; line-height: 1.07; }
.cg-root.cg-rsh .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.23rem; }
.cg-root.cg-rsh .cg-eyebrow { letter-spacing: 0.15em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-rsh .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0129em; }
.cg-root.cg-rsh .cg-grid-3 { gap: clamp(1.04rem, 2.7vw, 2.11rem); }
.cg-root.cg-rsh .cg-table caption { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-rsh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rsh .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-rsh .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.07rem; }
.cg-root.cg-rsh .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Rush, Co Dublin, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 10,814. SAP2022T15T2TOWN22: households 3,472, broadband 3,059, other 36, no internet 168, not stated 209. SAP2022T11T1TOWN22 to work total 4,945: car driver 2,605, work mainly at or from home 622, bus 430, train DART or Luas 324, van 281, on foot 217, car passenger 141, bicycle 61, not stated 206; to school, college or childcare total 3,193: car passenger 1,062, on foot 974, bus 465, train 202, bicycle 198, car driver 80, not stated 188; combined train 526 of 7,744 stated (6.79 percent). SAP2022T11T4TOWN22: 1,728 work from home at least some of the time, 2,842 never, 375 not stated. SAP2022T11T5TOWN22: 749 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,224, ages 13 to 18 to 1,094. Irish Rail public station list (api.irishrail.ie getAllStationsXML): 171 entries with StationDesc and StationAlias, including "Rush and Lusk", "Navan Road Parkway" (alias Phoenix Park), "Carrick on Shannon", "Salthill and Monkstown" (alias Monkstown ( Salthill )), "Hazelhatch" (alias Celbridge (Hazelhatch )), "Sallins". Irish Rail station pages: Rush and Lusk "Station Address Rusk and Lusk Train Station, Station Road, Lusk, Co. Dublin" (spelling as published), "Eircode K45 P825", "You can use the sheltered bike parking in Rush and Lusk station"; Navan Road Parkway "Iarnród Éireann, Navan Road, Dublin 15"; Carrick on Shannon "Croghan Rd Carrick on Shannon Co Leitrim"; Salthill and Monkstown "Salthill & Monkstown DART Station, Dun Laoghaire, Co. Dublin". Classification run in this session over the 89 towns with 5,000 or more usual residents, excluding the five city-and-suburbs rows. Feature: train share of combined work, school, college and childcare journeys, not stated removed. Label: a station whose description or alias contains every word of the town name, or of any hyphen part for multi-place names (names with -on- treated whole), with Navan, Shannon and Passage West-Monkstown corrected to no station after checking addresses; 58 automatic matches, 55 after review. Results: threshold 1 percent TP 38 FP 5 FN 17 TN 29, precision 88.4, recall 69.1, accuracy 75.3; 2 percent TP 29 FP 1 (Naas, 4.0 percent) FN 26 TN 33, precision 96.7, recall 52.7, accuracy 69.7; 5 percent TP 15 FP 0 FN 40 TN 34, precision 100, recall 27.3, accuracy 55.1; always yes, precision 61.8, recall 100, accuracy 61.8. Tralee and Castlebar 0.3 percent by train, Lusk 4.9 percent.',
    localProject: 'Scoring a classifier honestly, answer key included. Rule: a town is a rail town if at least a chosen share of its journeys are by train; Rush sends 526 of 7,744 stated journeys by train, 6.79 percent. The answer key comes from Irish Rail\'s own list of 171 stations, matched on whole words in names and aliases, then checked by hand: three matches were wrong (Navan Road Parkway is in Dublin 15, Carrick on Shannon in Leitrim, Salthill and Monkstown in Dun Laoghaire) and Celbridge appears only through the alias Celbridge (Hazelhatch), leaving 55 of 89 towns with a station. At 2 percent the rule scores 29 hits, 1 false alarm (Naas) and 26 misses, precision 96.7 and recall 52.7; at 5 percent precision is 100 but recall 27.3, and accuracy 55.1 is beaten by the always-yes rule at 61.8. The misses include county towns with stations but few daily rail users, such as Tralee and Castlebar at 0.3 percent. Rush\'s own station is listed as Rush and Lusk with its address in Lusk, counted for both. Lessons: report the confusion matrix, choose the threshold by which error matters, and audit the labels. New family for the cluster: classifier evaluation.',
    requiredMentions: [
      '10,814',
      '3,472',
      '3,059',
      '4,945',
      '1,728',
      '3,193',
      '1,062',
      '749',
      '526',
      '7,744',
      '96.7',
      'K45 P825'
    ],
    sources: [
      { claim: 'Irish Rail public station list, 171 entries with names and aliases, used as the answer key; includes Rush and Lusk, Navan Road Parkway (alias Phoenix Park), Carrick on Shannon, Salthill and Monkstown, Hazelhatch (alias Celbridge (Hazelhatch)) and Sallins.', url: 'http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML' },
      { claim: 'Irish Rail, Rush and Lusk station page: address Station Road, Lusk, Co. Dublin; "Eircode K45 P825"; "You can use the sheltered bike parking in Rush and Lusk station".', url: 'https://www.irishrail.ie/en-ie/station/rush-and-lusk' },
      { claim: 'Irish Rail station pages used to check three automatic matches: Navan Road Parkway, "Navan Road, Dublin 15"; Carrick on Shannon, "Croghan Rd Carrick on Shannon Co Leitrim"; Salthill and Monkstown, "Dun Laoghaire, Co. Dublin".', url: 'https://www.irishrail.ie/en-ie/station/navan-road-parkway' },
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, all towns: means of travel to work, school, college or childcare, used for the train share of the 89 towns. Rush, Co Dublin: to work 4,945 with car driver 2,605, mainly at or from home 622, bus 430, train 324, van 281, on foot 217, car passenger 141, bicycle 61; to school, college or childcare 3,193 with car passenger 1,062, on foot 974, bus 465, train 202, bicycle 198; combined train 526 of 7,744 stated.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Rush, Co Dublin: usual residents 10,814; households 3,472, broadband 3,059; 1,728 work from home at least some of the time, 2,842 never, 375 not stated; 749 children under 15 in childcare; 1,224 aged 6 to 12 and 1,094 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1TOWN22/JSON-stat/2.0/en' }
    ],
    rejectedClaims: [
      'Any rating of rail services, or any reason why towns with stations have few daily rail users.',
      'Treating the answer key as fact: it is a stated matching rule plus three hand corrections.',
      'Correcting Irish Rail\'s own spelling on its Rush and Lusk page: quoted in the dossier as published.',
      'The census-night population, St Joseph\'s Secondary School and the Rush-Lusk local electoral area: the Fingal page owns them.',
      'Any claim about Rush\'s market-garden history: not sourced here.'
    ]
  }
};
