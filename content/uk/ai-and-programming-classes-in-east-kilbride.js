'use strict';
// East Kilbride (cg- town page, UK cluster Phase 8, towns band A, row 408). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does a computer recognise a shape, and
// why is one feature rarely enough? (feature engineering: circularity 4 pi A / P squared plus a connectivity feature,
// precision against recall, labels taken from the map).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map calls over bbox -4.235,55.735,-4.125,55.790 in 12 tiles (ODbL).
// Ground truth: ways tagged junction=roundabout on vehicle roads, chained into closed rings: 92 rings (6 more groups did not
// close inside the box and were left out). Comparison set: 111 other closed road ways (62 residential, 48 service, 1
// unclassified), such as loops and turning circles. Features: circularity (1 = perfect circle) and "arms" = number of
// other road ways touching the ring.
// Our run (scratchpad ekb/rb.py, rb2.py): median circularity roundabouts 0.992, others 0.91. Rules, found of 92 / false
// alarms / precision / recall: circularity >= 0.85: 90 / 62 / 59.2% / 97.8%; arms >= 3: 83 / 25 / 76.9% / 90.2%; both:
// 82 / 15 / 84.5% / 89.1%. Arms: 60 of the 111 others touch only one other road.
// Lesson family: feature engineering with shape descriptors (circularity) plus a relational feature; precision and recall
// are only the scoring. Screened: "circularity", "feature engineering", "junction=roundabout" 0 hits; "roundabout" appears
// on 3 pages only in passing.
// Place facts: NRS mid-2020 localities: East Kilbride 75,310 (South Lanarkshire's figures are registered by that page).
// postcodes.io (South Lanarkshire, G74/G75) suburban areas: Westwood, The Murray, Greenhills, Stewartfield, Lindsayfield,
// Hairmyres, Nerston, East Mains, Mossneuk, Whitehills; Thorntonhall village.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'EAST KILBRIDE', label: 'East Kilbride', blurb: 'AI and programming classes for East Kilbride, with a project that teaches a program to spot the town\'s roundabouts from map shapes.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-east-kilbride',
  code: 'ekb',
  accent: '#3E668A',
  accentRationale: 'East Kilbride: a steel blue (4.87:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'East Kilbride',
    eyebrow: 'East Kilbride, South Lanarkshire, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'South Lanarkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'South Lanarkshire', href: '/coding-classes-in-south-lanarkshire' },
    { label: 'Glasgow', href: '/best-coding-class-in-glasgow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'East Kilbride, Scotland',
  title: 'AI and Programming Classes in East Kilbride | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for East Kilbride, Stewartfield, Greenhills and Westwood learners aged 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for East Kilbride, with a machine learning project that finds the town\'s roundabouts from their shape on the map.',
  twitterDescription: 'East Kilbride AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for East Kilbride',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in East Kilbride and South Lanarkshire, taught live.'
  },

  h1: 'AI and programming classes in East Kilbride',
  capsuleQ: 'Which are the best AI and programming classes in East Kilbride?',
  capsule: 'National Records of Scotland estimated 75,310 people in the East Kilbride locality in mid-2020, the largest in South Lanarkshire. Stewartfield, Greenhills, Westwood, The Murray, Lindsayfield and Hairmyres are among the suburbs recorded in its G74 and G75 postcode districts. Anyone from P1 age to 67 can study AI, programming, Python, vibe coding and maths with an India-based tutor on live video, privately or in a class of five to ten at one stage. Reasoning comes first, so learners can question what a model or chatbot concludes. The trial lesson is free and ends with the course we would recommend. The East Kilbride project maps 92 roundabouts and teaches a program to recognise them from shape and connections, then counts its mistakes. Once the trial is done, fees are USD 100 a month for group places and USD 150 a month for individual tuition.',
  lead: 'Recognising a roundabout on a map is effortless for a person and surprisingly slippery for a program. The obvious clue is that roundabouts are round, and there is a neat formula for roundness called circularity: four times pi times the area, divided by the perimeter squared, which is exactly 1 for a perfect circle and smaller for anything stretched or jagged. This project tests how far that one clue gets. OpenStreetMap contributors have tagged 92 complete roundabout rings in and around East Kilbride, which gives the program a set of right answers, and 111 other closed road loops give it things to confuse them with.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in East Kilbride?',

  picks: {
    eyebrow: 'East Kilbride course picks',
    h2: 'East Kilbride courses in reasoning, Python and AI',
    intro: 'Pick by age and interest. Every course begins with a free live lesson, and no card is needed.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: describing shapes precisely and finding the clue that tells two things apart.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with AI help and tested thoroughly.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including the roundabout recogniser on real map data.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python through geometry, data, machine learning and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'East Kilbride and South Lanarkshire',
      h2: 'East Kilbride, Stewartfield, Greenhills and Hairmyres',
      intro: 'The NRS locality estimate, and suburbs recorded in the G74 and G75 districts.',
      body: [
        { kind: 'table', caption: 'East Kilbride in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['East Kilbride locality, mid-2020 estimate', '75,310']
        ] },
        { kind: 'p', text: 'Postcodes.io lists Westwood, The Murray, Greenhills, Stewartfield, Lindsayfield, Hairmyres, Nerston, East Mains, Mossneuk and Whitehills as suburban areas of South Lanarkshire in the G74 and G75 districts, with Thorntonhall recorded as a village. Because Scottish schools teach the Curriculum for Excellence, our tutors think in P and S years and prepare learners for SQA National 5, Higher and Advanced Higher. Share the school holiday dates and lessons will sit around them.' },
        { kind: 'callout', h3: 'South Lanarkshire, Glasgow and Scottish exams', p: 'See <a class="cg-inline-link" href="/coding-classes-in-south-lanarkshire">coding classes in South Lanarkshire</a>, <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> and <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths tuition</a>. Why thinking comes before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The East Kilbride project',
      h2: 'Recognising roundabouts: feature engineering with circularity and connections',
      intro: 'One feature, then two, scored against answers taken from the map itself.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data covering East Kilbride in twelve tiles and joins the road pieces tagged as roundabouts into complete rings: 92 of them. For comparison, it collects the 111 other road ways that close on themselves, mostly residential and service roads such as loops and turning circles. For every ring it computes circularity from the area and perimeter, and a second feature: how many other road pieces (OpenStreetMap ways) touch it. The program then tries simple rules and counts how many roundabouts it finds (recall) and how many of its claims are right (precision).' },
        { kind: 'table', caption: 'Finding East Kilbride\'s 92 mapped roundabouts among 203 closed road rings, our Python run on OpenStreetMap data', head: ['Rule', 'Roundabouts found', 'False alarms', 'Precision', 'Recall'], rows: [
          ['Circularity at least 0.85', '90', '62', '59.2%', '97.8%'],
          ['At least 3 road pieces touching', '83', '25', '76.9%', '90.2%'],
          ['Both together', '82', '15', '84.5%', '89.1%']
        ] },
        { kind: 'p', text: 'Circularity alone finds nearly every roundabout but raises 62 false alarms, because many of the other loops are round as well: their median circularity is 0.91, not far below the roundabouts\' 0.992. A turning circle at the end of a close is a neat circle too. What gives it away is that it touches a single other road piece, as 60 of the 111 other loops do, whereas a roundabout is where roads meet. Adding that second feature cuts the false alarms to 15 while losing eight genuine roundabouts, those touched by fewer than three road pieces. Choosing and combining clues like this is called feature engineering, and it often matters more than the choice of model.' },
        { kind: 'p', text: 'The remaining 15 false alarms deserve a look rather than a shrug. Some may be loop roads; some could be roundabouts that nobody has tagged yet. A model scored against map labels can only be as right as the labels.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Draw circles, ovals and squares, measure around and across, and rank how round each one is.' },
          { h3: 'S1 to S3', p: 'Compute the area and perimeter of a roundabout ring in Python and calculate its circularity.' },
          { h3: 'S4 and up', p: 'Build the two-feature recogniser, score precision and recall, and inspect the false alarms.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap data, our recogniser', p: 'Road geometry and tags are from OpenStreetMap and its contributors under the Open Database Licence. The rings, features, rules and scores are our own; we have not checked any junction on the ground.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Features and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A classifier learns from the measurements it is handed and nothing else.',
      body: [
        { kind: 'table', caption: 'From the roundabout recogniser to working with AI', head: ['In the East Kilbride project', 'When AI builds a classifier'], rows: [
          ['Circularity alone gave 62 false alarms', 'An obvious feature may not separate the classes'],
          ['Turning circles are round too', 'Look at what the model confuses, not just its score'],
          ['Counting connections fixed most errors', 'A well-chosen feature beats a bigger model'],
          ['Precision rose, recall dipped slightly', 'Every rule trades one kind of error for another'],
          ['Labels came from volunteers', 'Some "errors" may be mistakes in the answers']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to "detect roundabouts in map data" and it may pick a sensible-sounding feature and report a single accuracy figure. In vibe coding the learner explains the goal while the AI drafts the code; our East Kilbride students then look through the false alarms themselves and ask which clue is missing. AI agents that label or sort data for you make the same kinds of mistakes quietly, so checking a sample by hand stays part of the job. Our agent-building units open up when a learner can write and debug Python without prompting, in practice around the senior phase or later, while Copilot Studio is covered in private tuition alone. Read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> for the principle, then <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our UK agents course page</a> for the route.' },
        { kind: 'p', text: 'Modern Age Coders is independent of OpenStreetMap, National Records of Scotland and postcodes.io. We used only their open data, and the recogniser and its errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From measuring shapes to training classifiers',
    intro: 'We read the school year as a hint only; ten minutes of the trial usually shows the real level.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Shapes, measurements and the clue that tells things apart.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P4 to S2', h3: 'Vibe coding for kids', p: 'Games and apps made with AI help and checked by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and machine learning', p: 'Geometry, features and classifiers beside National 5, Higher and Advanced Higher.', courses: ['ai-ml-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Machine learning and agents', p: 'Python, features, evaluation and AI agents, step by step.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and features',
    h2: 'What is feature engineering in machine learning?',
    intro: 'Feature engineering is choosing and computing the measurements a model learns from, such as a shape\'s circularity or how many roads meet it, and good features often matter more than the model itself.',
    p1: 'On East Kilbride\'s map, circularity alone found 90 of 92 roundabouts but with a precision of 59.2%; adding the number of connecting roads raised precision to 84.5% while still finding 82.',
    p2: 'Learners who have built that recogniser ask of any AI classifier: what is it actually measuring, and what does it confuse?',
    closer: 'Choosing what a model should look at keeps East Kilbride teenagers in charge of the AI they build, and that is a strong reason to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Stewartfield to Hairmyres, all online',
    intro: 'A computer with a webcam and a connection fit for video calls is all it takes.',
    cells: [
      { h3: 'Hands on, not watching', p: 'The student runs the keyboard for the whole lesson; the tutor follows over screen share and asks them to predict each result.' },
      { h3: 'Trial decides the start', p: 'We see what the learner can already do, then plan from there, noting any SQA course they sit.' },
      { h3: 'Trial costs nothing', p: 'We teach the first lesson free and suggest a course at the end.' },
      { h3: 'Classes by stage', p: 'Five to ten learners from across the UK, all at the same stage.' },
      { h3: 'Two sessions a week', p: 'Term time only; holiday weeks are off.' },
      { h3: 'Steady timings', p: 'Tutors adjust to UK clock changes so your slot stays fixed.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one stage, free on the same evening, seldom live close by. Video takes distance out of it.' }
  },

  fees: {
    h2: 'East Kilbride fees',
    intro: 'East Kilbride learners pay our international rates, which apply everywhere except India.',
    first: 'A full free lesson, then our recommendation.',
    group: 'About eight live small-group lessons a month.',
    private: 'About eight live private lessons a month.',
    closer: 'There is no sterling price list: fees are in US dollars and the first invoice waits until the trial has fixed a course and a regular slot. The pricing page explains holidays, missed lessons and changing between group and private.'
  },

  reviewsH2: 'Google reviews from Lanarkshire parents and learners elsewhere in Britain',

  book: {
    h2: 'Book a free East Kilbride lesson',
    intro: 'A year group (P or S) or an age, plus a hobby, lets us shape the trial. Trials range from shape puzzles and AI-assisted Scratch games to a first Python script or measuring real shapes from the map.',
    success: 'Thank you. Your East Kilbride request is with us.'
  },

  faq: {
    h2: 'East Kilbride questions',
    intro: 'Features, the roundabout project, Python, vibe coding and practical details.',
    items: [
      { q: 'What is the population of East Kilbride?', a: 'National Records of Scotland estimated 75,310 people in the East Kilbride locality in mid-2020.' },
      { q: 'Are AI and programming classes available online in East Kilbride?', a: 'Yes, as live video lessons for ages 6 to 67 across East Kilbride and South Lanarkshire.' },
      { q: 'What is circularity?', a: 'A measure of roundness: four times pi times the area divided by the perimeter squared. A perfect circle scores 1; East Kilbride\'s mapped roundabouts have a median of 0.992.' },
      { q: 'What is the difference between precision and recall?', a: 'Recall is the share of real cases a program finds; precision is the share of its claims that are right. In our project, adding a second feature raised precision from 59.2% to 84.5%.' },
      { q: 'What is the East Kilbride project?', a: 'Teaching a Python program to recognise 92 mapped roundabouts from their shape and connections, and studying the loops it mistakes for them.' },
      { q: 'Is vibe coding taught?', a: 'Yes, for all ages, with the learner planning the program and testing the AI\'s code.' },
      { q: 'At what point do agents come in?', a: 'When Python no longer slows them down, commonly in S5 or S6 or as adults; Copilot Studio needs one-to-one lessons.' },
      { q: 'Can you help with SQA exams?', a: 'National 5, Higher and Advanced Higher Computing Science and Maths are all covered, taught so the ideas make sense; no result is promised.' },
      { q: 'How much do lessons cost?', a: 'No fee for lesson one; tuition then runs at USD 100 monthly in a class or USD 150 monthly for private sessions.' },
      { q: 'Do lessons pause in the holidays?', a: 'Yes, for Scottish school holidays; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other Lanarkshire and Clyde pages',
    html: 'Each of these has a different project: <a class="cg-inline-link" href="/coding-classes-in-south-lanarkshire">South Lanarkshire</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-paisley">Paisley</a> (the 37% rule), <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> and <a class="cg-inline-link" href="/coding-classes-in-north-lanarkshire">North Lanarkshire</a>. For anywhere else, start at <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'East Kilbride and South Lanarkshire',
  footerPlaces: [
    { href: '/coding-classes-in-south-lanarkshire', label: 'South Lanarkshire' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ekb .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-ekb .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-ekb .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; border-radius: 0 8px 8px 0; }
.cg-root.cg-ekb .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ekb .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.02em; }
.cg-root.cg-ekb .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-ekb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ekb .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-ekb .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-ekb .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'South Lanarkshire (S12000029). Scotland: Curriculum for Excellence, SQA National 5, Higher, Advanced Higher. NRS mid-2020 settlement and locality estimates: East Kilbride 75,310. postcodes.io (South Lanarkshire, G74/G75): Westwood, The Murray, Greenhills, Stewartfield, Lindsayfield, Hairmyres, Nerston, East Mains, Mossneuk, Whitehills (suburban areas); Thorntonhall (village).',
    localProject: 'OSM API 0.6, bbox -4.235,55.735,-4.125,55.790 (12 tiles): 92 closed junction=roundabout rings, 111 other closed road ways. Circularity median 0.992 vs 0.91. Rules found / false / precision / recall: circularity >= 0.85 90/62/59.2/97.8; arms >= 3 83/25/76.9/90.2; both 82/15/84.5/89.1. 60 of 111 others touch one road. Lesson family: feature engineering, shape descriptor, relational feature.',
    requiredMentions: [
      '75,310',
      'Stewartfield',
      'Greenhills',
      'Lindsayfield',
      'Hairmyres',
      'Mossneuk',
      'The Murray',
      'circularity',
      'feature engineering'
    ],
    sources: [
      { claim: 'OpenStreetMap map data for East Kilbride, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas in South Lanarkshire.', url: 'https://api.postcodes.io/places?q=Stewartfield' }
    ],
    rejectedClaims: [
      'New-town history or a "roundabout town" nickname: not read from a source; not claimed.',
      'That every mapped roundabout is complete or correctly tagged: not claimed; 6 groups did not close in the box.',
      'That the 15 remaining false alarms are or are not roundabouts: not checked; described as needing a look.',
      'Largest locality in South Lanarkshire: per NRS mid-2020 figures quoted on the South Lanarkshire page (East Kilbride 75,310, Hamilton 54,480).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
