'use strict';
// Pontypridd (cg- town page, UK cluster Phase 10, towns band B, row 561). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can a coin toss make searching a sorted
// list fast? (skip lists: randomised express lanes over a linked list; search cost vs linear scan vs binary search;
// height distribution, pointer cost, variation between random builds; cheap insertion.)
// Local data (read 1 October 2026): OS Code-Point Open 2026.3.0 (RM update 17 July 2026), CF37 postcodes: 885 (883 in
// Rhondda Cynon Taf, 2 in Caerphilly), 15 wards. Our run (scratchpad ppd/skip.py, Python 3.13): linear scan of the
// sorted list, mean 443 comparisons for a present key; bisect-style binary search 10.85 (log2 885 = 9.79); skip list
// p = 1/2 over 20 random builds: mean 19.15 comparisons (builds ranged 16.89 to 20.64), worst single search 37, tallest
// tower 8 to 13 levels, 1.99 pointers per key, half the keys at level 1; p = 1/4: 18.32, worst 49, 1.33 pointers per key.
// 92 made-up CF37 codes ending X or Z that do not exist: bisect 10.88, skip list 18.73. Seed 20261001 build: heights
// 464 / 199 / 105 / 57 / 30 / 13 / 8 / 4 / 5 at levels 1 to 9; mean 18.75, worst 33; CF37 1DL found in 15 (bisect 11).
// Lesson family: skip lists. Screened: skip list (course syllabi only, 0 cluster pages and dossiers); claimed. RCT
// county page = square-cube scaling; Aberdare (H12) = Hopfield; Caerphilly, Cardiff and Llandaff families checked.
// Place facts: Rhondda Cynon Taf TS001 237,651. ONS 2021 BUA (published): Pontypridd 31,900. postcodes.io suburban
// areas whose nearest postcode is in the Pontypridd BUA: Treforest, Trallwn, Cilfynydd, Graig, Hopkinstown, Glyncoch,
// Maesycoed, Rhydyfelin, Upper Boat, Hawthorn. Trehafod (Porth BUA) and Ynysybwl (own BUA) share CF37 but are outside.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'PONTYPRIDD', label: 'Pontypridd', blurb: 'Coding and AI classes for Pontypridd, with a project that uses coin tosses to build express lanes through every CF37 postcode.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-pontypridd',
  code: 'ppd',
  accent: '#545C9C',
  accentRationale: 'Pontypridd: a muted slate blue (6.2:1 contrast on white), chosen by hand and kept clear of the other South Wales pages',
  pageType: 'city',
  place: {
    name: 'Pontypridd',
    eyebrow: 'Pontypridd, Rhondda Cynon Taf, Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Rhondda Cynon Taf' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Rhondda Cynon Taf', href: '/coding-classes-in-rhondda-cynon-taf' },
    { label: 'Cardiff', href: '/best-coding-class-in-cardiff' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Pontypridd, Rhondda Cynon Taf',
  title: 'Coding and AI Classes in Pontypridd | Ages 6 to 67',
  description: 'Live online coding and AI classes for Pontypridd, Treforest, Cilfynydd and Rhydyfelin, ages 6 to 67, with Python and maths. Book a free first lesson today.',
  ogDescription: 'Coding and AI classes for Pontypridd, with a project on skip lists and searching every CF37 postcode.',
  twitterDescription: 'Pontypridd coding and AI lessons, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Pontypridd',
    description: 'Online coding, AI, Python and maths lessons for children, teenagers and adults in Pontypridd and Rhondda Cynon Taf, taught through data structures the learner builds and measures.'
  },

  h1: 'Coding and AI classes in Pontypridd',
  capsuleQ: 'Where can Pontypridd learners find the best coding and AI classes?',
  capsule: 'In the 2021 census the Pontypridd built-up area had 31,900 usual residents, and Rhondda Cynon Taf as a whole 237,651. The built-up area takes in Treforest, Trallwn, Cilfynydd, Graig, Hopkinstown, Glyncoch, Maesycoed, Rhydyfelin, Hawthorn and Upper Boat. Modern Age Coders teaches coding, AI, Python, vibe coding and maths to Pontypridd learners aged six to 67, in live video classes led by tutors in India, on their own with a tutor or alongside five to ten classmates who are at the same point. The trial lesson is free and finishes with a course recommendation. For the Pontypridd project, a learner puts all 885 CF37 postcodes into a skip list, a structure that uses coin tosses to build express lanes, and measures how it compares with scanning and with binary search. Once the trial is done, fees run at USD 100 monthly for a shared class or USD 150 monthly for a tutor of your own.',
  lead: 'Most data structures are built with care: every branch balanced, every rule enforced. A skip list is built by tossing coins. Each item goes into an ordinary sorted chain, and then a coin decides whether it also gets a place on a faster lane above, and another toss whether it goes higher still. William Pugh published the idea in 1990, and it still runs inside software used every day. It sounds too casual to work. In Pontypridd we test it on every postcode in CF37.',
  wa: 'Hello Modern Age Coders, we would like to book a free coding or AI trial lesson. We are in Pontypridd.',

  picks: {
    eyebrow: 'Recommended courses',
    h2: 'Coding and AI courses for Pontypridd learners',
    intro: 'Choose by age. Every course opens with a free live lesson, booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Searching, sorting and shortcut games, worked through before any code.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children ask an AI for a Scratch game, then test it and fix what is wrong.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 17', note: 'Data structures and algorithms in Python, including the CF37 skip list.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from first lines to efficient data handling and AI tools.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Pontypridd at a glance',
      h2: 'Pontypridd, Treforest, Trallwn, Cilfynydd and Glyncoch',
      intro: 'Census counts, the neighbourhoods inside the town, and the postcode district we use.',
      body: [
        { kind: 'table', caption: 'Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Pontypridd built-up area', '31,900'],
          ['Rhondda Cynon Taf county borough', '237,651']
        ] },
        { kind: 'p', text: 'Rhondda Cynon Taf also covers Aberdare, the Rhondda valleys and Mountain Ash, so the borough is its own count, not a sum of towns. According to postcodes.io, Treforest, Trallwn, Cilfynydd, Graig, Hopkinstown, Glyncoch, Maesycoed, Rhydyfelin, Upper Boat and Hawthorn are suburban areas whose nearest postcode lies in the Pontypridd built-up area. The CF37 postcode district is wider than the town: it also reaches Ynysybwl and Trehafod, which the ONS treats as separate places. Pupils here are taught under the Curriculum for Wales and sit WJEC exams at GCSE and A level; our lessons are in English, and a learner\'s Welsh year group is only the opening guess before the trial lesson.' },
        { kind: 'callout', h3: 'Pages close to Pontypridd', p: 'Try <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a>, <a class="cg-inline-link" href="/coding-classes-in-rhondda-cynon-taf">Rhondda Cynon Taf</a>, <a class="cg-inline-link" href="/coding-classes-in-caerphilly-county-borough">Caerphilly</a> and <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science help</a>. We explain why every learner must be able to read their own code in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Pontypridd project',
      h2: 'Express lanes through 885 postcodes, decided by coin tosses',
      intro: 'Three ways to find a postcode in a sorted list, counted comparison by comparison.',
      body: [
        { kind: 'p', text: 'The data is every CF37 postcode in Ordnance Survey\'s Code-Point Open, 885 of them, sorted from CF37 1AA upwards. The question is simple: how many times must the program compare two postcodes before it finds the one it wants? The slowest answer is to start at the top and read down, which takes 443 comparisons on average. The usual fast answer is binary search, the method behind Python\'s <code>bisect</code> module: look at the middle, discard the half that cannot hold the target, repeat. That takes 10.85 comparisons on average, close to the 9.79 you get from log base 2 of 885.' },
        { kind: 'p', text: 'Binary search needs the whole list stored in one block so it can jump straight to the middle. A linked list, where each postcode only knows the next one, cannot jump. The skip list fixes that by adding lanes. Every postcode sits on level 1. A coin toss decides whether it also sits on level 2; if that toss succeeds, another toss decides level 3, and so on. A search starts on the highest lane, runs forward until the next stop would overshoot, drops down a lane, and repeats until it reaches level 1.' },
        { kind: 'table', caption: 'Comparisons to find a CF37 postcode, our Python run', head: ['Method', 'Average comparisons', 'Extra links per postcode'], rows: [
          ['Read the list from the top', '443', 'none'],
          ['Binary search (bisect)', '10.85', 'none'],
          ['Skip list, coin lands heads half the time', '19.15', 'about 1'],
          ['Skip list, heads a quarter of the time', '18.32', 'about 0.33']
        ] },
        { kind: 'p', text: 'The skip list figures are averages over 20 separate random builds, and the builds really do differ: with fair coins, the average search ranged from 16.89 to 20.64 comparisons depending on how the tosses fell, the tallest tower reached between 8 and 13 levels, and the single worst search in all 20 builds took 37 comparisons. In one build, seeded 20261001, the levels split 464, 199, 105, 57, 30, 13, 8, 4 and 5 from the bottom up, close to halving at each step as a fair coin should give; in that build, finding CF37 1DL took 15 comparisons, against 11 for binary search. Biased coins that rarely promote save memory, about a third of a link per postcode instead of one, at the price of a worse unlucky case: 49 comparisons for the slowest search.' },
        { kind: 'p', text: 'So binary search wins on reading. Why would anyone choose a skip list? Because the CF37 list changes as new streets are built. Inserting one postcode into a Python list means shifting everything after it along by one, about half the list on average. Inserting into a skip list means tossing coins for the new entry and rewiring around two links on average. That trade, slightly slower searching for much cheaper updating, is why skip lists still sit inside working systems: the Redis database uses one for its sorted sets.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'A paper skip list of class names: toss a coin for each one and race to find a name using the top row first.' },
          { h3: 'Ages 11 to 15', p: 'Load the postcodes in Python, count comparisons for reading down and for binary search.' },
          { h3: 'Ages 15 and up', p: 'Build the skip list, run 20 random builds, and explain why the worst case moves around.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Postcodes are from Ordnance Survey Code-Point Open 2026.3.0, which contains Royal Mail and Ordnance Survey data under the Open Government Licence. Census figures are from the ONS. The skip list, the 20 random builds and every count in the table come from our own Python run; a different set of coin tosses gives slightly different numbers.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Data structures and AI',
      h2: 'What a coin-toss data structure teaches about AI-written code',
      intro: 'Randomness can be a design choice, but only if you measure what it does.',
      body: [
        { kind: 'table', caption: 'From the CF37 skip list to working with AI', head: ['Finding from the postcodes', 'Lesson for AI-written code'], rows: [
          ['Binary search beat the skip list on lookups', 'The fanciest structure is not always the right one'],
          ['Skip lists win when data keeps changing', 'Choose for the job: reads, writes or both'],
          ['20 builds gave 20 different averages', 'Test randomised code more than once'],
          ['The worst search was nearly double the average', 'Look at the tail, not only the mean'],
          ['Fewer promotions saved memory but cost speed', 'Every tuning number trades one thing for another']
        ] },
        { kind: 'p', text: 'Ask an AI for "a fast way to look up postcodes" and you may get a skip list, a binary search, a dictionary or a database call, each delivered with the same confidence. Choosing between them needs exactly the measurement this project practises. That is how we teach vibe coding: the AI drafts, the learner counts. Agent-building of their own waits until a learner\'s Python can manage alone, typically by Year 12 or in adult life; anything involving Copilot Studio is private tuition only. Our <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents course for UK students</a> and <a class="cg-inline-link" href="/problem-solving-skills-through-coding-uk">problem-solving skills through coding</a> say more.' },
        { kind: 'p', text: 'Ordnance Survey, the ONS, postcodes.io and Redis have no connection with Modern Age Coders. We use their published data and documentation; the experiments are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From paper shortcuts at seven to measured data structures at seventeen',
    intro: 'We start from the Welsh school year and let the trial lesson adjust it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Finding things fast', p: 'Searching games, ordering and shortcuts, often on paper first.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Making with AI', p: 'Scratch built with an AI helper, then the first steps in Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Structures and algorithms', p: 'Lists, searches and randomised structures, counted and compared in Python.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Code that scales', p: 'Python for work, with the data structure choices explained and tested.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Searching and AI',
    h2: 'What is a skip list, and why does it matter when AI suggests a data structure?',
    intro: 'A skip list is a sorted linked list with extra express lanes above it, where coin tosses decide which items appear on each higher lane, so a search can skip ahead on the top lanes and drop down only near its target, giving fast searches and cheap insertions without strict balancing.',
    p1: 'Across all 885 CF37 postcodes, a fair-coin skip list needed 19.15 comparisons on average to find one, against 10.85 for binary search and 443 for reading the list from the top, but it can take a new postcode by changing about two links.',
    p2: 'Learners who measure that understand that a suggested structure is a trade, and they ask an AI which trade it has made.',
    closer: 'For a Pontypridd teenager, measuring before trusting is what keeps them in charge of AI tools rather than led by them, and that habit comes from writing the code.',
    blogAnchor: 'why it still pays to learn coding in 2026'
  },

  delivery: {
    eyebrow: 'Lessons',
    h2: 'How classes run for a Pontypridd learner',
    intro: 'All lessons are live on video. A computer with a keyboard is needed, because a tablet alone cannot run Python well.',
    cells: [
      { h3: 'Code by the learner', p: 'The learner types and runs everything, and explains it as they go.' },
      { h3: 'Level first', p: 'The trial lesson shows us the starting point before we suggest a course.' },
      { h3: 'No-cost trial', p: 'The first lesson is free and asks for no payment details.' },
      { h3: 'Five to ten together', p: 'Groups share one level and join from across the UK.' },
      { h3: 'About eight a month', p: 'Normally two sessions weekly during term; ask and we skip the local school holidays.' },
      { h3: 'UK clock kept', p: 'Lessons stay at the same UK time through the clock changes.' }
    ],
    spec: { title: 'Why online', p: 'Matching five to ten learners at one exact level is much easier across the UK than in one valley town, and video means no travelling.' }
  },

  fees: {
    h2: 'Prices for Pontypridd families',
    intro: 'Learners in Pontypridd pay what all learners outside India pay.',
    first: 'First lesson: free and a full session, with a course suggestion to close.',
    group: 'Group class, generally eight lessons a month.',
    private: 'Private lessons, generally eight a month.',
    closer: 'Our fees are in US dollars and we publish no sterling price. The trial is free, and charges begin only after a course and a fixed weekly time are agreed. The pricing page explains breaks for holidays, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Google reviews from families in Wales and around the UK',

  book: {
    h2: 'Book a free Pontypridd lesson',
    intro: 'Tell us the learner\'s age or school year and what they like. The trial might be a shortcut game, a Scratch game built with an AI, a first Python program, or the CF37 postcode search.',
    success: 'Thank you. Your Pontypridd request has arrived.'
  },

  faq: {
    h2: 'Pontypridd questions',
    intro: 'The skip list project, searching, vibe coding and practical details.',
    items: [
      { q: 'How many people live in Pontypridd?', a: 'Census 2021 recorded 31,900 usual residents for the Pontypridd built-up area, within a county borough of 237,651.' },
      { q: 'Can learners in Pontypridd join these coding and AI classes?', a: 'Yes. Classes run live online for ages 6 to 67 in Pontypridd, Treforest, Cilfynydd, Rhydyfelin and the surrounding area.' },
      { q: 'What is binary search?', a: 'A way to find an item in a sorted list by checking the middle, throwing away the half that cannot contain it, and repeating. Each step halves what is left.' },
      { q: 'Who invented the skip list?', a: 'William Pugh, who published it in Communications of the ACM in 1990 as a probabilistic alternative to balanced trees.' },
      { q: 'What did the Pontypridd project find?', a: 'Across 885 CF37 postcodes, a fair-coin skip list averaged 19.15 comparisons per search, binary search 10.85 and reading from the top 443.' },
      { q: 'What is vibe coding?', a: 'Building software by describing it to an AI, then running, checking and repairing the result. We teach it with typed Python so learners understand what they keep.' },
      { q: 'When do learners build AI agents?', a: 'Once their Python is solid without help, usually in the sixth form or as adults. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Does this support WJEC GCSE computer science?', a: 'Searching, data structures and programming are part of WJEC GCSE and A level computer science, and we teach them thoroughly. We do not promise grades.' },
      { q: 'What are the fees?', a: 'The trial lesson is free. After that, group classes cost USD 100 a month and private lessons USD 150 a month.' },
      { q: 'Can lessons pause for half term?', a: 'Yes. Send the Rhondda Cynon Taf term dates and we keep the holidays free.' }
    ]
  },

  next: {
    eyebrow: 'More nearby',
    h2: 'More pages for South Wales',
    html: 'Visit <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-llandaff-cardiff">Llandaff</a>, <a class="cg-inline-link" href="/coding-classes-in-caerphilly-county-borough">Caerphilly</a> and <a class="cg-inline-link" href="/coding-classes-in-rhondda-cynon-taf">Rhondda Cynon Taf</a>. Every other Welsh town is on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">page for Wales</a>, and the rest of Britain on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Pontypridd and Rhondda Cynon Taf',
  footerPlaces: [
    { href: '/coding-classes-in-rhondda-cynon-taf', label: 'Rhondda Cynon Taf' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ppd .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 2.4vw, 2.2rem); }
.cg-root.cg-ppd .cg-hero h1 { font-weight: 780; letter-spacing: -0.024em; line-height: 1.06; }
.cg-root.cg-ppd .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-ppd .cg-eyebrow { letter-spacing: 0.14em; font-weight: 680; text-transform: uppercase; font-size: 0.81rem; }
.cg-root.cg-ppd .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.017em; }
.cg-root.cg-ppd .cg-table caption { font-weight: 570; text-align: left; font-size: 0.9rem; }
.cg-root.cg-ppd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ppd .cg-table th { font-weight: 680; letter-spacing: 0.035em; }
.cg-root.cg-ppd .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.65rem; }
.cg-root.cg-ppd .cg-callout { border-left-width: 5px; border-radius: 0; }
`,

  dossier: {
    curriculumAuthority: 'Rhondda Cynon Taf (W06000016), Census 2021 TS001 usual residents 237,651. ONS 2021 BUA (published): Pontypridd 31,900. Curriculum for Wales, progression steps, Years 1 to 13, WJEC GCSE and A level. postcodes.io suburban areas whose nearest postcode is in the Pontypridd BUA: Treforest, Trallwn, Cilfynydd, Graig, Hopkinstown, Glyncoch, Maesycoed, Rhydyfelin, Upper Boat, Hawthorn. CF37 also reaches Trehafod and Ynysybwl (outside the BUA).',
    localProject: 'OS Code-Point Open 2026.3.0, CF37: 885 postcodes (883 RCT, 2 Caerphilly), 15 wards. Linear scan mean 443 comparisons; binary search 10.85 (log2 885 = 9.79); 92 absent X/Z codes 10.88. Skip list p 1/2, 20 builds: mean 19.15 (16.89 to 20.64), worst 37, tallest 8 to 13, 1.99 pointers per key, half at level 1; absent 18.73. p 1/4: 18.32, worst 49, 1.33 pointers per key. Seed 20261001: levels 464 / 199 / 105 / 57 / 30 / 13 / 8 / 4 / 5; mean 18.75, worst 33. Insert: list shifts about half the list on average; skip list rewires about two links. Lesson family: skip lists, randomised data structures, search cost, read vs update trade-off.',
    requiredMentions: [
      '31,900',
      'Treforest',
      'Cilfynydd',
      'Glyncoch',
      'Hopkinstown',
      'skip list',
      '19.15',
      '10.85',
      'CF37 1DL'
    ],
    sources: [
      { claim: 'Pugh W. (1990), Skip lists: a probabilistic alternative to balanced trees, Communications of the ACM 33(6), 668 to 676.', url: 'https://doi.org/10.1145/78973.78977' },
      { claim: 'Ordnance Survey Code-Point Open 2026.3.0 (contains Royal Mail and OS data, Open Government Licence).', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'Redis documentation: sorted sets are implemented with a skip list and a hash table.', url: 'https://redis.io/docs/latest/develop/data-types/sorted-sets/' },
      { claim: 'Python documentation, bisect module (binary search on sorted lists).', url: 'https://docs.python.org/3/library/bisect.html' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations; postcodes.io place lookups for CF37.', url: 'https://api.postcodes.io/places?q=Treforest' }
    ],
    rejectedClaims: [
      'That CF37 equals the town: it also covers Trehafod and Ynysybwl, which are outside the Pontypridd built-up area; the page says so.',
      'Any claim about the Old Bridge or the river confluence: not used; the county page covers bridge geometry.',
      'That a skip list beats binary search on lookups: it does not here; the page says so.',
      'That the skip list figures are fixed: they vary with the coin tosses; ranges are given.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
