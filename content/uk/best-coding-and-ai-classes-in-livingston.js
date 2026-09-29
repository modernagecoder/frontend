'use strict';
// Livingston (cg- town page, UK cluster Phase 8, towns band A, row 409). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how do you find exactly what changed in a huge
// dataset without checking every item? (Merkle trees: hash every item, hash pairs of hashes up to one root, then walk down
// only the branches whose hashes differ).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map calls over bbox -3.575,55.865,-3.465,55.910 in 12 tiles (ODbL):
// 9,827 ways tagged highway (roads, paths, cycleways), newest edit 27 September 2026. For the 96 ways last edited on or
// after 1 July 2026, the full version history was read from /api/0.6/way/{id}/history to rebuild their state on 1 July.
// Our run (scratchpad lvn/merkle.py): 19 ways were created after 1 July and left out; 9,808 ways existed at both dates. Leaf
// = SHA-256 of each way's tags and node list, ordered by way id; pairs hashed upwards (odd one out paired with itself).
// Tree height 14. Changed leaves: 75 (geometry changed 40, tags changed 50; 2 more ways were edited but ended with identical
// content, so were correctly not flagged). Walking down from the root found all 75 with 823 hash comparisons, against
// 9,808 for comparing every way. One changed way alone would take 1 + 2 x 14 = 29 comparisons.
// Lesson family: Merkle (hash) trees, change detection, integrity of large datasets. Screened: "Merkle" 0 hits anywhere in
// content/. Hash tables (Southampton) and hash functions in general are used elsewhere; the tree and top-down diff are new.
// Place facts: NRS mid-2020 localities: Livingston 56,840 (West Lothian page registers the council figures). postcodes.io
// (West Lothian, EH54) suburban areas: Craigshill, Ladywell, Knightsridge, Dedridge, Howden, Eliburn, Deans, Murieston,
// Adambrae, Bellsquarry.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'LIVINGSTON', label: 'Livingston', blurb: 'Coding and AI classes for Livingston, with a project that uses a Merkle tree to find which of the town\'s 9,808 mapped roads changed over one summer.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-livingston',
  code: 'lvg',
  accent: '#5C4632',
  accentRationale: 'Livingston: a dark walnut brown (7.12:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Livingston',
    eyebrow: 'Livingston, West Lothian, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Lothian' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'West Lothian', href: '/coding-classes-in-west-lothian' },
    { label: 'Edinburgh', href: '/best-coding-class-in-edinburgh' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Livingston, Scotland',
  title: 'Coding and AI Classes in Livingston | Python, Ages 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Livingston, Dedridge, Murieston and Craigshill learners aged 6 to 67, taught live by tutors. First lesson free.',
  ogDescription: 'Coding and AI classes for Livingston, with a project that uses a Merkle tree to spot exactly which mapped roads changed in a summer.',
  twitterDescription: 'Livingston coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Livingston',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Livingston and West Lothian, taught live with careful thinking first.'
  },

  h1: 'Coding and AI classes in Livingston',
  capsuleQ: 'Where can Livingston learners find the best coding and AI classes?',
  capsule: 'In mid-2020 National Records of Scotland put the Livingston locality at 56,840 people, the biggest in West Lothian. Dedridge, Murieston, Craigshill, Knightsridge, Eliburn and Ladywell are among the town\'s recorded suburbs in the EH54 district. Children from P1 and adults up to 67 can learn coding, AI, Python, vibe coding and maths with a tutor in India over live video, solo or in a small class of five to ten who share a stage. We build careful thinking before tool use, so learners can judge what an AI tells them. The first lesson is on us and finishes with our suggestion of a course. The Livingston project hashes every one of 9,808 mapped roads and paths into a single fingerprint, then tracks down which ones changed over the summer of 2026 without checking them all. Beyond the trial, tuition is USD 100 a month in a class or USD 150 a month privately.',
  lead: 'Imagine two copies of a dataset with nearly ten thousand records, and you need to know whether anything differs between them, and if so, exactly what. Comparing record by record works but scales badly. A Merkle tree does something cleverer. Every record gets a hash, a short fingerprint that changes completely if the record changes at all. Pairs of hashes are hashed together, then pairs of those, until a single root hash stands for the whole dataset. If two roots match, nothing changed. If they differ, you follow only the branches whose hashes differ. Livingston\'s roads on OpenStreetMap, as they were on 1 July 2026 and as they are now, make a real test.',
  wa: 'Hello Modern Age Coders, can we book a free coding or AI lesson for a learner in Livingston?',

  picks: {
    eyebrow: 'Livingston course picks',
    h2: 'Livingston courses in reasoning, Python and AI',
    intro: 'Pick by age and interest. Each course starts with a live lesson that costs nothing, and booking asks for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: spot-the-difference strategies and halving a search again and again.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, made with AI help and properly tested.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from scratch to data projects, including the Livingston hash tree.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How modern AI is built and checked, data versioning, and AI agents in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Livingston and West Lothian',
      h2: 'Livingston, Dedridge, Murieston and Craigshill',
      intro: 'The NRS estimate for the Livingston locality, and suburbs recorded in EH54.',
      body: [
        { kind: 'table', caption: 'Livingston in National Records of Scotland figures', head: ['Area', 'People'], rows: [
          ['Livingston locality, mid-2020 estimate', '56,840']
        ] },
        { kind: 'p', text: 'Craigshill, Ladywell, Knightsridge, Dedridge, Howden, Eliburn, Deans, Murieston, Adambrae and Bellsquarry all appear on postcodes.io as suburban areas of West Lothian in the EH54 postcode district. West Lothian schools teach Scotland\'s Curriculum for Excellence; we match lessons to primary and secondary years and to SQA courses from National 5 to Advanced Higher. Let us know the school holidays and we will plan round them.' },
        { kind: 'callout', h3: 'West Lothian, Edinburgh and SQA subjects', p: 'Look at <a class="cg-inline-link" href="/coding-classes-in-west-lothian">coding classes in West Lothian</a>, <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a> and <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science help</a>. The case for thinking before prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Livingston project',
      h2: 'What changed on the map? A Merkle tree over 9,808 Livingston roads',
      intro: 'Two snapshots, one fingerprint each, and a search that ignores everything that stayed the same.',
      body: [
        { kind: 'p', text: 'The learner downloads every road, path and cycleway mapped on OpenStreetMap across Livingston: 9,827 ways, the newest edited on 27 September 2026. For the 96 ways edited since 1 July, the API\'s version history shows what each looked like on that date. Nineteen did not exist then and are set aside, leaving 9,808 ways present in both snapshots. Each way is hashed with SHA-256 over its tags and its list of points, the hashes are paired and hashed upwards, and after 14 levels each snapshot has one root hash.' },
        { kind: 'p', text: 'The two roots differ, so something changed. The program then compares the two children of the root, follows only the child whose hash differs, and repeats at every level. Wherever both hashes match, that whole branch, perhaps thousands of roads, is skipped in one step.' },
        { kind: 'table', caption: 'Finding what changed between 1 July and late September 2026, our Python run on OpenStreetMap data for Livingston', head: ['Method', 'Comparisons needed', 'Changed ways found'], rows: [
          ['Compare every way directly', '9,808', '75'],
          ['Walk down the Merkle tree', '823', '75'],
          ['Merkle tree, if only one way had changed', '29', '1']
        ] },
        { kind: 'p', text: 'Of the 75 changed ways, 40 had their shape altered and 50 their tags, some both. Two more had been edited during the summer but ended up exactly as they started, and the tree correctly treats them as unchanged, since it compares content rather than edit counts. The saving depends on how clustered the changes are: one change costs about twice the tree height, while changes spread evenly through the data share fewer branches and cost more. Even here, with 75 scattered edits, the tree needed under a tenth of the comparisons.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Play spot-the-difference by splitting a picture into halves and only searching the half that looks different.' },
          { h3: 'S1 to S3', p: 'Hash a few Livingston street names in Python and see how one changed letter changes the whole fingerprint.' },
          { h3: 'S4 and up', p: 'Build the Merkle tree, compare two map snapshots and count every comparison made.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap data, our tree', p: 'Road data and version histories are from OpenStreetMap and its contributors under the Open Database Licence. The snapshots, hashes, tree and counts are our own work; ways deleted since July are not in today\'s download and are not counted.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Hashes and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Knowing exactly what changed is half of trusting a result.',
      body: [
        { kind: 'table', caption: 'From the Livingston hash tree to working with AI', head: ['In the Merkle project', 'When AI works with data'], rows: [
          ['One root hash stood for 9,808 roads', 'A fingerprint shows whether data was altered'],
          ['823 comparisons found 75 changes', 'Good structure saves enormous effort'],
          ['Two edited-then-restored ways were not flagged', 'Compare content, not activity'],
          ['Deleted ways could not be seen', 'Know what your snapshot leaves out'],
          ['Git stores projects as trees of hashes', 'Version your data as carefully as your code']
        ] },
        { kind: 'p', text: 'When an AI model is retrained or an AI agent edits files, the first question is what changed. Tools such as Git answer it with hash trees, and data teams can use the same idea to show a training set has not been quietly altered. In vibe coding a learner describes the program and an AI writes it; our Livingston students also ask the AI to show exactly which lines it changed, and check that nothing else moved. Agents that act on real files need that discipline most. We start agent projects once a learner writes Python independently, usually in the later secondary years or as an adult, and Copilot Studio agents are taught one-to-one only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">building AI agents as a UK learner</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We are not affiliated with OpenStreetMap, National Records of Scotland or postcodes.io. Their open data is all we used; the tree and any slip in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From spot-the-difference to hash trees',
    intro: 'The school year points to a starting place; the trial shows it for certain.',
    cols: [
      { band: 'Primary 1 to 7', h3: 'How to think', p: 'Halving searches, fingerprints and careful comparison.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Primary 4 to S2', h3: 'Vibe coding for kids', p: 'Small apps and games built with AI help, checked line by line.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and data structures', p: 'Hashing, trees and real datasets alongside SQA Computing Science.', courses: ['python-complete-masterclass-teens', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'AI and data engineering', p: 'Data versioning, modern AI and Python agents.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Data structures',
    h2: 'What is a Merkle tree, and how does it find what changed?',
    intro: 'A Merkle tree hashes every item, then hashes pairs of hashes up to a single root, so two datasets can be compared by their roots and any difference traced by following only the branches whose hashes differ.',
    p1: 'Across 9,808 Livingston roads mapped on OpenStreetMap, it located the 75 that changed between 1 July and late September 2026 with 823 comparisons instead of 9,808.',
    p2: 'Learners who have built one ask of any AI system that edits data: can it prove what it changed, and what it left alone?',
    closer: 'Being able to verify changes gives Livingston teenagers real authority over the AI tools they use, a practical reason to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Dedridge to Murieston, all online',
    intro: 'You need a computer, a camera and broadband that can hold a video call.',
    cells: [
      { h3: 'The learner codes', p: 'All the typing, prompting and running is the student\'s; the tutor watches on screen share and asks them to explain.' },
      { h3: 'Planned from the trial', p: 'The first free session reveals current skills and fixes the opening topic; SQA levels are recorded.' },
      { h3: 'Nothing to pay first', p: 'The trial is free and ends with our course advice.' },
      { h3: 'One stage per class', p: 'Classes gather five to ten UK learners working at the same stage.' },
      { h3: 'Two per week', p: 'Lessons break with the school holidays.' },
      { h3: 'Time that stays put', p: 'Clock changes in the UK are handled on our side; your lesson hour holds.' }
    ],
    spec: { title: 'Why teach online', p: 'A class of five at one level, free on one evening, rarely lives in one neighbourhood. Video removes the problem.' }
  },

  fees: {
    h2: 'Livingston fees',
    intro: 'Livingston learners pay our international rate, used for every country except India.',
    first: 'One whole lesson free, then our recommendation.',
    group: 'Around eight live group lessons each month.',
    private: 'Around eight live private lessons each month.',
    closer: 'All fees are in US dollars, with no sterling prices, and we invoice only after the trial has agreed a course and a weekly time. Holidays, absences and switching between group and private are covered on the pricing page.'
  },

  reviewsH2: 'Reviews on Google from Lothians families and learners across the UK',

  book: {
    h2: 'Book a free Livingston lesson',
    intro: 'Share the learner\'s age or school year and a favourite interest. We might start with a spot-the-difference puzzle, a Scratch game designed with an AI, first lines of Python, or fingerprinting real data.',
    success: 'Thank you. Your Livingston request is in.'
  },

  faq: {
    h2: 'Livingston questions',
    intro: 'Hash trees, the map project, Python, vibe coding and practical matters.',
    items: [
      { q: 'What is the population of Livingston?', a: 'National Records of Scotland estimated 56,840 people in the Livingston locality in mid-2020.' },
      { q: 'Are coding and AI classes available online in Livingston?', a: 'Yes, as live video lessons for anyone aged 6 to 67 in Livingston and West Lothian.' },
      { q: 'What is a hash?', a: 'A short fingerprint computed from data. Change even one character and the hash changes completely, so matching hashes are strong evidence the data is identical.' },
      { q: 'Where are Merkle trees used?', a: 'In version control systems such as Git, in file-syncing and backup tools, and in blockchains, anywhere large collections must be compared or verified quickly.' },
      { q: 'What does the Livingston project involve?', a: 'Hashing 9,808 mapped Livingston roads at two dates, building a Merkle tree for each, and tracing the 75 that changed with 823 comparisons.' },
      { q: 'Is vibe coding part of the course?', a: 'Yes, at every age; learners plan the program in words and test every piece the AI writes.' },
      { q: 'When are learners ready for AI agents?', a: 'Once they write Python on their own, usually late in secondary school or as adults; Copilot Studio is taught privately.' },
      { q: 'Do you cover SQA Computing Science and Maths?', a: 'Yes, from National 5 to Advanced Higher, with understanding as the goal and no promised grades.' },
      { q: 'How much are lessons?', a: 'The trial lesson is free; then it is USD 100 a month for a class or USD 150 a month for private tuition.' },
      { q: 'Are there lessons in the holidays?', a: 'No, we pause for school holidays; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Lothians and central Scotland pages',
    html: 'Pages with projects of their own: <a class="cg-inline-link" href="/coding-classes-in-west-lothian">West Lothian</a>, <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a>, <a class="cg-inline-link" href="/coding-classes-in-falkirk">Falkirk</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-east-kilbride">East Kilbride</a> (a roundabout recogniser). The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> leads everywhere else, as does the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Livingston and West Lothian',
  footerPlaces: [
    { href: '/coding-classes-in-west-lothian', label: 'West Lothian' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-lvg .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-lvg .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-lvg .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-lvg .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lvg .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.02em; }
.cg-root.cg-lvg .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-lvg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lvg .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-lvg .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-lvg .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'West Lothian (S12000040). Scotland: Curriculum for Excellence, SQA National 5 to Advanced Higher. NRS mid-2020 settlement and locality estimates: Livingston 56,840. postcodes.io (West Lothian, EH54): Craigshill, Ladywell, Knightsridge, Dedridge, Howden, Eliburn, Deans, Murieston, Adambrae, Bellsquarry (suburban areas).',
    localProject: 'OSM API 0.6 bbox -3.575,55.865,-3.465,55.910 (12 tiles): 9,827 highway ways; histories of 96 edited since 1 July 2026; 19 created after, 9,808 in both. SHA-256 leaves, tree height 14; 75 changed (geometry 40, tags 50; 2 edited back to identical). Merkle walk 823 comparisons vs 9,808; single change 29. Lesson family: Merkle trees, change detection, data integrity.',
    requiredMentions: [
      '56,840',
      '9,808',
      'Dedridge',
      'Murieston',
      'Craigshill',
      'Knightsridge',
      'Eliburn',
      'Bellsquarry',
      'Merkle tree'
    ],
    sources: [
      { claim: 'OpenStreetMap map data and way version histories for Livingston, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas in West Lothian.', url: 'https://api.postcodes.io/places?q=Dedridge' }
    ],
    rejectedClaims: [
      'New-town history: not read from a source; not claimed.',
      'Why the mapped roads changed: edits are volunteer map updates; no real-world road changes are claimed.',
      'Ways deleted since 1 July 2026: not visible in the current download; not counted.',
      'Largest locality in West Lothian: per NRS mid-2020 figures quoted on the West Lothian page (Livingston 56,840, Bathgate 23,600).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
