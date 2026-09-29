'use strict';
// Larne (cg- town page, UK cluster Phase 8, towns band A, row 431). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: how do you count how many different things are in a
// huge stream without keeping a list of them? (HyperLogLog cardinality estimation: hash, count leading zeros in buckets,
// combine; memory against accuracy).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map calls over bbox -5.860,54.830,-5.780,54.875 in 12 tiles (ODbL):
// 65,602 elements (55,795 nodes, 9,698 ways, 109 relations). Each element carries the contributor id (uid) and changeset of
// its latest version: 216 distinct contributors, 1,128 distinct changesets.
// Our run (scratchpad lrn/hll.py): exact Python set of the 65,602 element ids measured at 5,531,720 bytes with getsizeof.
// HyperLogLog with blake2b hashing, 200 different hash seeds per setting; median absolute error / 90th percentile, for
// changesets (1,128 distinct): 16 registers (about 12 bytes) 17.1% / 43.5%; 64 (48 bytes) 9.3% / 20.9%; 256 (192 bytes)
// 3.9% / 9.8%; 1,024 (768 bytes) 2.0% / 4.7%. With 1,024 registers: element ids (65,602) 1.9% / 5.1%; contributors (216)
// 1.6% / 3.3%. Textbook standard error 1.04 / sqrt(registers): 26.0%, 13.0%, 6.5%, 3.2%.
// Lesson family: probabilistic counting (HyperLogLog), memory against accuracy. Screened: "HyperLogLog", "cardinality
// estimat" 0 hits anywhere in content/. Claimed in $S/claims.txt as lrn.
// Place facts: NISRA Census 2021 MS-A01: settlement LARNE 18,853 (NISRA settlement figures are approximations); DEA Larne
// Lough 18,324 (exact); settlements BALLYCARRY 1,484, GLYNN 583. Wards listed by postcodes.io for the BT40 district, with
// NISRA ward populations: Craigyhill 3,920; Gardenmore 3,290; Curran and Inver 3,384; Kilwaughter 4,791; Islandmagee 3,048.
// (postcodes.io places does not cover Northern Ireland, so wards come from its outcode data.)

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'LARNE', label: 'Larne', blurb: 'Online coding and Python classes for Larne, with a project that counts the people and edits behind the town\'s map using a few hundred bytes of memory.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-larne',
  code: 'lrn',
  accent: '#9C3D12',
  accentRationale: 'Larne: a deep rust orange (6.8:1 contrast), chosen by hand to differ in hue from the purples, navies and greens of recent pages',
  pageType: 'city',
  place: {
    name: 'Larne',
    eyebrow: 'Larne, Mid and East Antrim, Northern Ireland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Mid and East Antrim' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Mid and East Antrim', href: '/coding-classes-in-mid-and-east-antrim' },
    { label: 'Belfast', href: '/best-coding-class-in-belfast' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Larne, Northern Ireland',
  title: 'Online Coding and Python Classes in Larne | AI, Ages 6 to 67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Larne, Craigyhill, Gardenmore and Islandmagee learners aged 6 to 67, with CCEA support. First lesson free.',
  ogDescription: 'Online coding and Python classes for Larne, with a project that counts the contributors behind the town\'s map in under a kilobyte using HyperLogLog.',
  twitterDescription: 'Larne online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Larne',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Larne and Mid and East Antrim, taught live with clear reasoning first.'
  },

  h1: 'Online coding and Python classes in Larne',
  capsuleQ: 'Which are the best online coding and Python classes in Larne?',
  capsule: 'Census 2021 figures from NISRA give the Larne settlement roughly 18,853 usual residents and the Larne Lough district electoral area 18,324. Craigyhill, Gardenmore, Curran and Inver and Kilwaughter are among the wards postcodes.io lists for the BT40 district. Our tutors in India teach coding, Python, AI, vibe coding and maths on live video to learners from six to 67, one-to-one or with five to ten others at a matching level. We put reasoning ahead of tools, so learners can judge whether a clever shortcut is trustworthy. The opening lesson is free and closes with our course advice. The Larne project counts how many different people and edits built the town\'s OpenStreetMap data, 65,602 map elements in all, first exactly and then with a HyperLogLog sketch that fits in less than a kilobyte. Monthly fees after the trial: USD 100 for a group place, USD 150 for private lessons.',
  lead: 'Counting how many different things you have seen sounds trivial: keep a list and check each new item against it. At the scale of website visitors, search queries or map edits, that list becomes enormous. HyperLogLog, a neat trick from computer science, estimates the number of distinct items using a tiny, fixed amount of memory. It hashes each item to a random-looking number, keeps only the longest run of leading zeros seen in each of a set of buckets, and turns those records into an estimate. This project tests it on a real stream: every element of the OpenStreetMap data covering Larne, and who last edited it.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Larne?',

  picks: {
    eyebrow: 'Larne course picks',
    h2: 'Larne courses in thinking, Python and AI',
    intro: 'Four starting points arranged by age, each opening with a live lesson we do not charge for.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: estimating big numbers from small clues, and checking the estimate.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, made with AI help and tested by hand.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first steps to hashing and data streams, including the Larne counting project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data engineering, efficient algorithms and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Larne and Mid and East Antrim',
      h2: 'Larne, Craigyhill, Gardenmore and Curran and Inver',
      intro: 'NISRA census figures for Larne, and wards listed for the BT40 postcode district.',
      body: [
        { kind: 'table', caption: 'Larne in NISRA Census 2021 MS-A01 (settlement figures are NISRA approximations)', head: ['Area', 'Usual residents (2021)'], rows: [
          ['Larne settlement', '18,853'],
          ['Larne Lough district electoral area', '18,324'],
          ['Craigyhill ward', '3,920'],
          ['Gardenmore ward', '3,290'],
          ['Curran and Inver ward', '3,384'],
          ['Kilwaughter ward', '4,791']
        ] },
        { kind: 'p', text: 'These areas overlap and are drawn differently, so each figure is shown as NISRA publishes it and none are added together. Postcodes.io lists these wards, along with Islandmagee and Ballycarry and Glynn, for BT40; NISRA also records Ballycarry (1,484) and Glynn (583) as small settlements. Schools here follow the Northern Ireland Curriculum, so we use P1 to P7 and Years 8 to 14 and support CCEA GCSE and A level work. Send us the school holiday dates and lessons will pause for them.' },
        { kind: 'callout', h3: 'Mid and East Antrim, Belfast and CCEA', p: 'See <a class="cg-inline-link" href="/coding-classes-in-mid-and-east-antrim">coding classes in Mid and East Antrim</a>, <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a> and <a class="cg-inline-link" href="/ccea-gcse-digital-technology-programming-help">CCEA GCSE Digital Technology programming help</a>. Why thinking comes before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Larne project',
      h2: 'Counting without remembering: HyperLogLog on the map data behind Larne',
      intro: 'An exact count from a big set, then estimates from a few hundred bytes, repeated 200 times.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data for a rectangle over Larne in twelve tiles: 65,602 map elements, from single points to whole roads and boundaries. Each element records who last edited it and in which batch of edits, called a changeset. Counted exactly with a Python set, the stream holds 216 different contributors and 1,128 different changesets. Keeping every element ID in a set took about 5.5 MB of memory. HyperLogLog replaces the set with a fixed row of small counters, called registers, and the learner tries four sizes, each with 200 different hash functions to see how much the answer varies.' },
        { kind: 'table', caption: 'Estimating the 1,128 distinct changesets with HyperLogLog, 200 hash seeds per size, our Python run on OpenStreetMap data', head: ['Registers (memory)', 'Typical error', 'Error in the worst tenth', 'Theory predicts about'], rows: [
          ['16 (about 12 bytes)', '17.1%', '43.5%', '26%'],
          ['64 (about 48 bytes)', '9.3%', '20.9%', '13%'],
          ['256 (about 192 bytes)', '3.9%', '9.8%', '6.5%'],
          ['1,024 (about 768 bytes)', '2.0%', '4.7%', '3.2%']
        ] },
        { kind: 'p', text: 'Each fourfold increase in registers roughly halves the error, as the textbook formula of 1.04 divided by the square root of the number of registers says it should. With 1,024 registers, about 768 bytes, the estimates for all three counts land close: a typical error of 1.9% for the 65,602 element IDs, 2.0% for the changesets and 1.6% for the 216 contributors. The memory stays the same however many items flow through; the exact set grows with every new one. The price is a small, predictable error, and the learner has to decide whether that price is acceptable for the job.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Guess how many different children have visited a playground from the longest run of heads in coin flips, then check.' },
          { h3: 'Years 8 to 10', p: 'Count distinct contributors in the Larne map data with a Python set and time how the set grows.' },
          { h3: 'Years 11 and up', p: 'Code HyperLogLog, vary the registers and measure the error over many hash seeds.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap data, our sketch', p: 'Map elements, contributor IDs and changeset IDs are from OpenStreetMap and its contributors under the Open Database Licence; no contributor is named here. The counting code, memory figures and error rates are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Estimates and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Near enough is useful only if you know how near.',
      body: [
        { kind: 'table', caption: 'From the Larne counting project to working with AI', head: ['In the HyperLogLog project', 'When AI gives you an estimate'], rows: [
          ['768 bytes gave about 2% error', 'Small, fast methods can be good enough'],
          ['16 registers could be 43% out', 'Cheap estimates can be badly wrong'],
          ['200 seeds showed the spread', 'Judge a method by its range, not one run'],
          ['The exact set needed about 5.5 MB', 'Know what the exact answer would cost'],
          ['Theory matched the measurements', 'Check claims about accuracy yourself']
        ] },
        { kind: 'p', text: 'Many figures an AI assistant hands you are estimates, from word counts to usage statistics, and they rarely come with an error bar. In vibe coding the learner explains what the program should do and an AI writes it; our Larne learners ask for the uncertainty as well as the number, then test it the way this project does. Agents that report metrics to you should say how exact those metrics are. Agent building comes after a learner can write Python alone, typically at sixth-form age or as an adult, and Copilot Studio is covered only in private tuition. How the agent lessons build up is described on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents page for learners in the UK</a>, and the principle on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'The data is open and comes from OpenStreetMap, NISRA and postcodes.io, none of which is connected with us; the counting work and any faults are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From coin-flip guesses to streaming algorithms',
    intro: 'A school year gives us a first estimate of level; the trial confirms it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Estimating, sampling and checking a guess.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to Year 9', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 10 to 14', h3: 'Python and data', p: 'Hashing, sets and efficient code alongside CCEA GCSE and A level.', courses: ['python-complete-masterclass-teens', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Data engineering and agents', p: 'Large data, streaming methods and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and data',
    h2: 'What is HyperLogLog, and how does it count unique items?',
    intro: 'HyperLogLog estimates how many distinct items a stream contains by hashing each item, keeping only the longest run of leading zeros seen in each of a fixed set of buckets, and combining those buckets into one estimate, so memory stays tiny however large the stream grows.',
    p1: 'On the 65,602 OpenStreetMap elements covering Larne, a 1,024-register sketch of about 768 bytes estimated the 1,128 distinct changesets with a typical error of 2.0%, where an exact set of the element IDs took about 5.5 MB.',
    p2: 'Learners who have built one ask of any big-data figure an AI quotes: is this exact or estimated, and how far off could it be?',
    closer: 'Knowing when an estimate is safe lets Larne teenagers use data and AI with judgement, and learning Python is where that judgement grows in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Taught online across Larne',
    intro: 'All you need is a computer with a camera and an internet connection that copes with video.',
    cells: [
      { h3: 'The student runs it', p: 'Learners type, prompt and run each step, and the tutor watches over screen share, asking how they would check it.' },
      { h3: 'Pitched at the trial', p: 'The free session shows where to begin, and any CCEA exam is noted.' },
      { h3: 'Nothing to pay first', p: 'Lesson one is free and finishes with a course suggestion.' },
      { h3: 'Matched groups', p: 'Five to ten learners from across the UK, placed by level.' },
      { h3: 'Two a week', p: 'Paused for school holidays.' },
      { h3: 'Fixed hour', p: 'Our tutors adjust to UK clock changes so your slot never moves.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, all free on one evening, rarely live within reach of each other. Video makes that irrelevant.' }
  },

  fees: {
    h2: 'Larne fees',
    intro: 'Learners in Larne pay our international prices, which apply in every country except India.',
    first: 'A full lesson free, then a recommendation.',
    group: 'About eight live group lessons each month.',
    private: 'About eight live one-to-one lessons each month.',
    closer: 'Larne invoices come in US dollars, never sterling, starting the week after a trial fixes both course and slot; see the pricing page for breaks, absences and format swaps.'
  },

  reviewsH2: 'Reviews on Google from Antrim coast families and UK learners',

  book: {
    h2: 'Book a free Larne lesson',
    intro: 'We only need an age or school year and a hobby. A trial could be guessing big numbers from coin flips, building a Scratch game with AI help, starting Python, or tallying real map data.',
    success: 'Thank you. Your Larne request is with us.'
  },

  faq: {
    h2: 'Larne questions',
    intro: 'Unique counts, HyperLogLog, the Larne map stream, vibe coding and lesson logistics.',
    items: [
      { q: 'What is the population of Larne?', a: 'NISRA\'s Census 2021 settlement figures put Larne at roughly 18,853 usual residents, and the Larne Lough district electoral area at 18,324.' },
      { q: 'Are online Python classes available in Larne?', a: 'They are. Every lesson runs over live video, so ages 6 to 67 in Islandmagee, Ballycarry or anywhere in Mid and East Antrim can join.' },
      { q: 'What is cardinality estimation?', a: 'Estimating how many different items a collection contains without storing them all. HyperLogLog is a widely used method.' },
      { q: 'Why does HyperLogLog look at leading zeros?', a: 'In random-looking hashes, a run of many leading zeros is rare, so the longest run seen hints at how many different items have passed. Splitting items across many buckets and averaging steadies the estimate.' },
      { q: 'What does the Larne project involve?', a: 'Counting the distinct contributors and changesets in 65,602 OpenStreetMap elements over Larne exactly, then estimating them with HyperLogLog sketches of 12 to 768 bytes.' },
      { q: 'Is vibe coding taught?', a: 'Yes, at every age; the learner designs the program and tests what the AI writes.' },
      { q: 'How soon do agents come into the lessons?', a: 'After their Python works without help, usually sixth form or later; Copilot Studio agent lessons are private.' },
      { q: 'Do you support CCEA GCSE and A level?', a: 'CCEA Digital Technology, Software Systems Development and maths are all covered; we aim for understanding and never guarantee a grade.' },
      { q: 'How much are lessons?', a: 'A free first class, and after that USD 100 each month for a shared group or USD 150 each month one-to-one.' },
      { q: 'What happens during school holidays?', a: 'Lessons take a break; tell us the dates and we plan around them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More County Antrim and Northern Ireland pages',
    html: 'Pages with their own projects: <a class="cg-inline-link" href="/coding-classes-in-mid-and-east-antrim">Mid and East Antrim</a>, <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a>, <a class="cg-inline-link" href="/coding-classes-in-antrim-and-newtownabbey">Antrim and Newtownabbey</a> and <a class="cg-inline-link" href="/best-coding-class-in-bangor-northern-ireland">Bangor</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> reach everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Larne and Mid and East Antrim',
  footerPlaces: [
    { href: '/coding-classes-in-mid-and-east-antrim', label: 'Mid and East Antrim' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-lrn .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-lrn .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-lrn .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-lrn .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lrn .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-lrn .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-lrn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lrn .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-lrn .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-lrn .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Mid and East Antrim (N09000008). Northern Ireland Curriculum; CCEA GCSE and A level. NISRA Census 2021 MS-A01: settlement LARNE 18,853 (approximation); DEA Larne Lough 18,324; settlements BALLYCARRY 1,484, GLYNN 583; wards Craigyhill 3,920, Gardenmore 3,290, Curran and Inver 3,384, Kilwaughter 4,791, Islandmagee 3,048 (ward names from postcodes.io outcode BT40).',
    localProject: 'OSM API 0.6 bbox -5.860,54.830,-5.780,54.875 (12 tiles): 65,602 elements; 216 distinct uids, 1,128 distinct changesets; exact set of ids 5,531,720 bytes. HyperLogLog (blake2b, 200 seeds): changesets median / 90th pct error 16 reg 17.1/43.5%, 64 9.3/20.9, 256 3.9/9.8, 1,024 2.0/4.7; 1,024 reg elements 1.9/5.1, contributors 1.6/3.3; theory 26/13/6.5/3.2%. Lesson family: HyperLogLog cardinality estimation.',
    requiredMentions: [
      '18,853',
      '18,324',
      '65,602',
      'Craigyhill',
      'Gardenmore',
      'Curran and Inver',
      'Kilwaughter',
      'HyperLogLog',
      'cardinality estimation'
    ],
    sources: [
      { claim: 'NISRA Census 2021 MS-A01 usual resident population by settlement, DEA and ward.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'OpenStreetMap map data for Larne with contributor and changeset attributes, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io outcode BT40: wards in Mid and East Antrim.', url: 'https://api.postcodes.io/outcodes/BT40' }
    ],
    rejectedClaims: [
      'Port, ferry or harbour history: not read from a source; not claimed.',
      'That the listed wards make up Larne town: they are wards postcodes.io lists for BT40; not claimed as the town\'s area.',
      'Names of any OpenStreetMap contributor: none shown.',
      'Sum of settlement, DEA and ward figures: different geographies; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
