'use strict';
// Evington (cg- district page, UK cluster Phase 9, row 464). Keyword slug per the owner's 2026-09-30 ruling. Evington is a
// ward of the City of Leicester (Census 2021 ward E05010464). Spine: how can a program find the odd ones out when nobody has
// labelled what "odd" means? (isolation forest: anomalies are the points that random splits isolate quickly; how stable
// the list is, and what it actually picks up).
// Data (read 30 September 2026): Overpass API (OpenStreetMap, ODbL), rectangle 52.610 to 52.640 N, 1.100 to 1.045 W around
// Evington: 1,592 closed building outlines of at least 5 square metres. Tags: 1,336 untyped ("yes"), 256 typed, of which
// 56 are not homes (13 schools, 9 retail and others) and 200 are homes (detached, semidetached_house, residential,
// apartments, house, flats, terrace).
// Our run (scratchpad evn/iso.py): six features per outline (log area, corner count, circularity, fill of tightest
// rectangle, length-to-width ratio, number of buildings sharing a mapped point); scikit-learn IsolationForest, 200 trees.
// Median footprint 130.8 sq m; the 79 most anomalous (5%) have a median of 999 sq m. Of the 28 typed buildings among
// those 79, 15 are non-homes (54%) against 21.9% of all typed buildings; 9 of the 13 mapped schools are in the 79. Top 1%
// (15 buildings): 26.7% are also among the 15 largest. Agreement between random seeds on the top 1%: 88.7% with 200 trees,
// 63.4% with 10 trees.
// Lesson family: isolation forest (unsupervised anomaly detection by random partitioning), stability across seeds.
// Screened: "isolation forest" 0 page hits; claimed in the fork claims file. Huddersfield owns rule-based anomaly flags on
// a river gauge; Hampstead (this phase) owns Mahalanobis distance; Kirkcaldy gradient boosting on footprints (supervised).
// Place facts: Census 2021 TS001 wards of Leicester: Evington 17,268; North Evington 23,917 (a separate ward).
// postcodes.io (City of Leicester, LE5): Evington, North Evington, Crown Hills, Humberstone, Thurnby Lodge; Stoneygate (LE2).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'EVINGTON', label: 'Evington', blurb: 'AI and programming classes for Evington in Leicester, with a machine learning project that finds unusual buildings on the map without being told what unusual means.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-evington-leicester',
  code: 'evn',
  accent: '#0B5C73',
  accentRationale: 'Evington: a deep cyan, chosen by hand to differ from the ruby and amber of the Oadby and Wigston pages',
  pageType: 'city',
  place: {
    name: 'Evington',
    eyebrow: 'Evington, Leicester, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Leicester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-classes-in-leicestershire', name: 'Leicestershire' }],
  nav: [
    { label: 'Leicestershire', href: '/coding-classes-in-leicestershire' },
    { label: 'East Midlands', href: '/coding-and-ai-classes-in-east-midlands' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Evington, Leicester',
  title: 'AI and Programming Classes in Evington, Leicester | 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Evington, Crown Hills and Stoneygate learners in Leicester, aged 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Evington, Leicester, with an isolation forest project that picks out unusual buildings from their shapes on the map.',
  twitterDescription: 'Evington, Leicester: AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Evington, Leicester',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Evington and east Leicester wards, taught live with reasoning first.'
  },

  h1: 'AI and programming classes in Evington',
  capsuleQ: 'Which are the best AI and programming classes in Evington?',
  capsule: 'The 2021 census put 17,268 usual residents in Evington, one of the City of Leicester\'s wards, and 23,917 in North Evington, which is a different ward. Postcodes.io records Evington, Crown Hills, Humberstone and Thurnby Lodge in the LE5 district, and Stoneygate in LE2. Tutors in India teach AI, programming, Python, vibe coding and maths over live video to Evington learners of any age from six to 67, singly or five to ten to a class sorted by level. Thinking comes before tooling in every course, which lets a learner question what a model has actually found. There is no fee for the opening lesson, and it closes with our course suggestion. The Evington project gives an isolation forest the outlines of 1,592 mapped buildings and no labels at all, and examines what it decides is unusual. Staying on is USD 100 monthly for a seat in a class, or USD 150 monthly with a tutor to yourself.',
  lead: 'Most machine learning needs examples of the right answer. Anomaly detection often has none: nobody has marked which bank payments are fraud or which sensor readings are faults. The isolation forest, introduced in 2008, turns the problem round. It chops the data with random cuts and counts how many cuts it takes to fence each point off on its own. Ordinary points, packed in with many neighbours, take a long time to isolate. Odd ones fall out after a few cuts. This project tries it on something you can inspect by eye: the outlines of buildings mapped on OpenStreetMap around Evington, where most are houses and a few are very much not.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Evington, Leicester?',

  picks: {
    eyebrow: 'Evington course picks',
    h2: 'Four routes in for Evington: thinking, vibe coding, machine learning, agents',
    intro: 'One course per age range. A free live lesson opens each, booked with no card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: spotting the odd one out and saying exactly why it is odd.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games imagined by the learner, coded with AI help and tested.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including the isolation forest on Evington buildings.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How modern AI is built and checked, plus AI agents in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Evington and east Leicester',
      h2: 'Evington, Crown Hills, North Evington and Stoneygate',
      intro: 'Census counts for two Leicester wards, and places recorded around them.',
      body: [
        { kind: 'table', caption: 'Two wards of the City of Leicester, 2021 census usual residents (via Nomis)', head: ['Ward', 'Residents (2021)'], rows: [
          ['Evington', '17,268'],
          ['North Evington', '23,917']
        ] },
        { kind: 'p', text: 'These are two wards, each with a count of its own, and the page does not total them. On postcodes.io, Evington, North Evington, Crown Hills, Humberstone and Thurnby Lodge are suburban areas of Leicester in LE5, and Stoneygate is in LE2. Schools in Leicester teach England\'s national curriculum up to GCSE and A level. Share your term calendar and we keep lessons clear of the breaks.' },
        { kind: 'callout', h3: 'Leicestershire and the East Midlands', p: 'The county page is <a class="cg-inline-link" href="/coding-classes-in-leicestershire">coding classes in Leicestershire</a> and the regional one <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">the East Midlands</a>. For why reasoning leads in our lessons, read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Evington project',
      h2: 'Finding unusual buildings with an isolation forest',
      intro: 'No labels, six measurements per building, 200 random trees, and a list to inspect.',
      body: [
        { kind: 'p', text: 'Through the Overpass service the learner downloads every building outline in a rectangle around Evington: 1,592 of them. Six numbers are computed per outline in Python: floor area, corner count, a roundness score, the share of its snuggest bounding rectangle it covers, its length over its width, and a count of outlines joined to it. Mappers have given a type to only 256 of the buildings, and the model is never shown those tags. An isolation forest of 200 random trees then scores every outline by how easily it is isolated.' },
        { kind: 'table', caption: 'What the isolation forest flagged around Evington, our Python run on OpenStreetMap data', head: ['Check', 'Result'], rows: [
          ['Typical footprint, all buildings', '130.8 sq m'],
          ['Typical footprint, most anomalous 5% (79 buildings)', '999 sq m'],
          ['Typed buildings in that 5% that are not homes', '15 of 28 (54%)'],
          ['Non-homes among all typed buildings', '56 of 256 (21.9%)'],
          ['Mapped schools caught in the 5%', '9 of 13'],
          ['Top 1% that are simply among the 15 largest', '26.7%']
        ] },
        { kind: 'p', text: 'Without ever seeing a label, the forest concentrates on the buildings a person would call unusual for a residential area: non-homes are 54% of the typed buildings it flags against 21.9% overall, and nine of the thirteen mapped schools land in its top 5%. It is not just a size detector either, since only about a quarter of its top 1% are among the very largest; odd shapes and many corners count too. The flags are scores, not verdicts: the thirteen flagged homes include apartment blocks, which are unusual in shape without being wrong.' },
        { kind: 'p', text: 'Stability matters as much as the list. Re-run with a different random seed and a forest of 200 trees agrees with itself on 88.7% of its top 1%. Cut the forest to 10 trees and agreement drops to 63.4%. An anomaly list that changes every time you run it is telling you about the randomness, not the data.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play twenty questions with building cards and count how few questions single out the strangest one.' },
          { h3: 'Ages 11 to 15', p: 'Measure a handful of Evington outlines in Python and guess which the computer will flag.' },
          { h3: 'Ages 15 and up', p: 'Fit the isolation forest, check flags against map tags and test stability across seeds.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap outlines, our model', p: 'Building outlines and tags are from OpenStreetMap and its contributors under the Open Database Licence. The measurements, the model and the scores are our own; being flagged says nothing about a building other than that its mapped outline is unusual.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Anomalies and AI',
      h2: 'Alarms, vibe coding and AI agents: reading a flag properly',
      intro: 'A flag reports rarity in a dataset. Whether anything is amiss is a separate question.',
      body: [
        { kind: 'table', caption: 'Five things the Evington outlines showed, and the question each one puts to an AI alert', head: ['Seen in the outlines', 'Question for the alert'], rows: [
          ['Nothing was labelled in advance', 'Unusual against which crowd?'],
          ['Non-homes were 54% of the flagged, typed outlines', 'Is there an outside fact to compare with?'],
          ['Apartment blocks scored as odd', 'Is odd the same as faulty here?'],
          ['A ten-tree forest repeated itself 63.4% of the time', 'Does a second run say the same?'],
          ['1,336 outlines carried no type at all', 'How much of this can anyone confirm?']
        ] },
        { kind: 'p', text: 'Fraud alerts, spam filters and monitoring tools all lean on anomaly detection, and an AI assistant asked to "find the outliers" will produce a list in seconds. With vibe coding, where the learner sets the goal and an AI writes the code, our Evington learners rerun the detector with new seeds and look at what was flagged before trusting it. An AI agent set to raise alarms on your behalf should carry both of those checks in its brief. Nobody builds agents with us before their Python stands up unaided, which tends to mean sixteen and above, and Copilot Studio is kept to private tuition. Two pages go further: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">how UK students get to AI agents</a>, and our rule that you should <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Credit for open data goes to OpenStreetMap, the ONS and postcodes.io. They have no connection with Modern Age Coders, and any slip in the analysis is our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Odd-one-out games up to anomaly detection',
    intro: 'Treat the year bands as approximate. Placement rests on what we watch the learner do.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Odd ones out, reasons and careful questions.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps the learner plans and an AI helps build.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Features, models and honest checking alongside GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Machine learning and agents', p: 'Detection, evaluation and AI agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and anomalies',
    h2: 'What is an isolation forest, and how does it find anomalies without labels?',
    intro: 'An isolation forest is a machine learning method that splits data with random cuts and scores each point by how few cuts isolate it; points that separate quickly are anomalies, and no labelled examples are needed.',
    p1: 'Given only the shapes of 1,592 mapped buildings around Evington, it put nine of thirteen schools in its top 5%, and non-homes made up 54% of the typed buildings it flagged against 21.9% overall.',
    p2: 'Learners who have built one ask of any AI alert: unusual compared with what, and would the same flags appear on a second run?',
    closer: 'An Evington teenager who has coded a detector in 2026 knows to test an alert before obeying it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'The shape of an Evington lesson',
    intro: 'Kit list: one computer, its webcam, and home internet good enough for a video call.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'Every line is typed and run by the learner. The tutor sees the screen and keeps asking why the output came out that way.' },
      { h3: 'Level set by evidence', p: 'The trial tells us the starting point, and we jot down the exam board if there is one.' },
      { h3: 'A trial at no cost', p: 'You pay nothing, and leave with a course named.' },
      { h3: 'Classes kept small', p: 'Between five and ten people, level-matched, logging in from different parts of Britain.' },
      { h3: 'Two lessons each week', p: 'With a rest over school breaks.' },
      { h3: 'Your slot stays put', p: 'When British clocks change, the tutor adjusts and you do not.' }
    ],
    spec: { title: 'Why online', p: 'One Leicester ward will seldom supply five learners at one stage with one evening spare. A national pool will.' }
  },

  fees: {
    h2: 'Evington fees',
    intro: 'The rate card for Evington is our international one, the same for every country but India.',
    first: 'A whole lesson, unpaid, plus our advice on a course.',
    group: 'Around eight live classes in a month.',
    private: 'Around eight live lessons alone with a tutor in a month.',
    closer: 'We bill in US dollars and keep no sterling price list. You are invoiced once the trial has produced a course and a weekly slot you are happy with. For breaks, missed lessons and swapping between class and private, see the pricing page.'
  },

  reviewsH2: 'From our Google reviews: Leicester parents and learners elsewhere in Britain',

  book: {
    h2: 'Claim the free lesson for Evington',
    intro: 'Two facts are enough: how old the learner is and what they are keen on. We then choose between an odd-one-out game, an AI-assisted Scratch build, a starter Python program and measuring real building outlines.',
    success: 'Received. We will be in touch about Evington shortly.'
  },

  faq: {
    h2: 'Asked by Evington families',
    intro: 'Ten short answers, from what an anomaly is to what happens at half term.',
    items: [
      { q: 'What is the population of Evington?', a: 'Evington ward in Leicester had 17,268 usual residents at the 2021 census.' },
      { q: 'Do Evington learners need to travel for AI and programming classes?', a: 'No. Every lesson is a live video call, open to ages 6 to 67 anywhere in Evington or the wider city.' },
      { q: 'What is anomaly detection?', a: 'Finding data points that differ markedly from the rest, such as an odd transaction or a faulty reading, usually without labelled examples of what is abnormal.' },
      { q: 'Is an anomaly the same as an error?', a: 'No. It only means unusual. In our Evington test, apartment blocks were flagged for their shape although nothing was wrong with them.' },
      { q: 'What does the Evington project involve?', a: 'Scoring 1,592 mapped building outlines with an isolation forest, comparing the flags with map tags and testing how stable the list is.' },
      { q: 'Where does vibe coding fit in?', a: 'In every age band. Learners say what they want built, then put the AI\'s code through their own tests.' },
      { q: 'Is there an age for starting on AI agents?', a: 'It depends on Python, not birthdays, though few are ready before sixteen. Copilot Studio is private tuition.' },
      { q: 'Will this help with school exams?', a: 'GCSE and A level computer science and maths are taught so the ideas are understood. No grade is guaranteed.' },
      { q: 'What will we pay?', a: 'Nothing for the trial lesson. After it, USD 100 per month for a class place or USD 150 per month for private lessons.' },
      { q: 'What about half term?', a: 'Lessons rest whenever school does, as long as we have your dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Leicester and Leicestershire pages',
    html: 'Four pages, four separate projects: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-oadby-leicester">Oadby</a> (agents bidding for jobs), <a class="cg-inline-link" href="/online-coding-and-python-classes-in-wigston-leicester">Wigston</a> (simplifying a boundary), <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-loughborough">Loughborough</a>. All remaining UK pages are indexed at the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'WhatsApp the team'
  },

  footerHeading: 'Evington and Leicester',
  footerPlaces: [
    { href: '/coding-classes-in-leicestershire', label: 'Leicestershire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-evn .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-evn .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-evn .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-evn .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-evn .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.02em; }
.cg-root.cg-evn .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-evn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-evn .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-evn .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-evn .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'City of Leicester (E06000016). England: national curriculum, GCSE and A level. Census 2021 TS001 wards: Evington (E05010464) 17,268; North Evington 23,917. postcodes.io (City of Leicester): Evington, North Evington, Crown Hills, Humberstone, Thurnby Lodge (LE5); Stoneygate (LE2).',
    localProject: 'Overpass (OSM) rectangle 52.610-52.640 N, 1.100-1.045 W: 1,592 building outlines (1,336 untyped, 256 typed, 56 typed non-homes incl. 13 schools). Six shape features; IsolationForest 200 trees. Median area 130.8 sq m; top 5% (79) median 999 sq m; typed in top 5%: 15 of 28 non-homes (54%) vs base 21.9%; 9 of 13 schools. Top 1% vs largest 1% overlap 26.7%. Seed agreement on top 1%: 88.7% (200 trees), 63.4% (10 trees). Lesson family: isolation forest.',
    requiredMentions: [
      '17,268',
      '23,917',
      '1,592',
      'Crown Hills',
      'North Evington',
      'Thurnby Lodge',
      'Stoneygate',
      'Humberstone',
      'isolation forest'
    ],
    sources: [
      { claim: 'OpenStreetMap building outlines via the Overpass API, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 ward populations for Leicester via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas in the City of Leicester.', url: 'https://api.postcodes.io/places?q=Evington' }
    ],
    rejectedClaims: [
      'Any judgement about a specific building, school or business: none named; a flag only means an unusual outline.',
      'Sum of the Evington and North Evington wards: separate wards; not added.',
      'Village history, parks or places of worship: not read from a source; not claimed.',
      'That OpenStreetMap tags are complete: not claimed; 1,336 of 1,592 outlines are untyped.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
