'use strict';
// Aberdare (cg- town page, UK cluster Phase 10, towns band B, row 560). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how many memories can a simple neural
// network hold before it starts recalling things that were never stored? (Hopfield network, associative memory,
// Hebbian learning, capacity about 0.14N for random patterns, spurious attractors, correlated real patterns.)
// Local data (read 1 October 2026): Census 2021 OA tables via Nomis for Rhondda Cynon Taf (789 OAs): TS007A age (18
// bands), TS044 accommodation type (detached, semi, terraced, all flats and other), TS050 bedrooms (4), TS017 household
// size (1, 2, 3, 4, 5+), TS061 travel to work (home, public transport, drive, passenger, on foot). Each share becomes
// one bit: above (+1) or not above (-1) the RCT median share. 36 bits per OA. 123 OAs in the Aberdare BUA (ONS OA21 to
// BUA22 lookup). All 123 patterns distinct; mean Hamming distance 17.94 of 36 (random would be 18); closest pair 2.
// Our run (scratchpad abr/hop.py, numpy, seed 20261001): Hebbian weights, zero diagonal, asynchronous updates to a fixed
// point; store k patterns, flip 4 of 36 bits, success = exact recall; 200 trials per k, compared with random patterns.
// Recalled share real / random: k1 1.000 / 1.000; k2 1.000 / 1.000; k3 0.963 / 0.997; k4 0.806 / 0.979; k5 0.633 /
// 0.878; k6 0.445 / 0.798; k8 0.186 / 0.515; k10 0.070 / 0.275. Spurious (a state that is no stored pattern) real k8
// 0.790, k10 0.900. 0.138 x 36 = about 5.
// Lesson family: Hopfield networks / associative memory. Screened: hopfield, associative memory, energy function,
// attractor: 0 hits in content and dossiers; claimed. RCT county page = square-cube scaling; Merthyr, Caerphilly and
// Bridgend families checked: none about neural memory.
// Place facts: Rhondda Cynon Taf TS001 237,651. ONS 2021 BUA (published): Aberdare 37,675. postcodes.io suburban areas
// whose nearest postcode is in the Aberdare BUA: Trecynon, Cwmdare, Llwydcoed, Robertstown, Abernant, Gadlys, Cwmbach,
// Aberaman, Abercwmboi, Godreaman, Cwmaman, Penywaun, Hirwaun. Glenboi's nearest postcode is in Mountain Ash; left out.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ABERDARE', label: 'Aberdare', blurb: 'AI and programming classes for Aberdare, with a project that fills a small neural memory with census patterns until it starts inventing new ones.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-aberdare',
  code: 'abr',
  accent: '#984060',
  accentRationale: 'Aberdare: a muted heather rose (6.49:1 contrast on white), chosen by hand and kept clear of the other South Wales pages',
  pageType: 'city',
  place: {
    name: 'Aberdare',
    eyebrow: 'Aberdare, Rhondda Cynon Taf, Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Rhondda Cynon Taf' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Rhondda Cynon Taf', href: '/coding-classes-in-rhondda-cynon-taf' },
    { label: 'Merthyr Tydfil', href: '/coding-classes-in-merthyr-tydfil-county-borough' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Aberdare, Rhondda Cynon Taf',
  title: 'AI and Programming Classes in Aberdare | Ages 6 to 67',
  description: 'Live online AI and programming classes for Aberdare, Trecynon, Cwmbach and Hirwaun, ages 6 to 67, with Python and maths. Book a free first lesson, no card needed.',
  ogDescription: 'AI and programming classes for Aberdare, with a project on Hopfield networks and how a neural memory overflows.',
  twitterDescription: 'Aberdare AI and programming lessons, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Aberdare',
    description: 'Online AI, programming, Python and maths lessons for children, teenagers and adults in Aberdare and the Cynon Valley, built around models the learner codes and tests.'
  },

  h1: 'AI and programming classes in Aberdare',
  capsuleQ: 'Which are the best AI and programming classes for Aberdare?',
  capsule: 'Rhondda Cynon Taf counted 237,651 usual residents in the 2021 census, and the ONS built-up area of Aberdare held 37,675 of them. That built-up area stretches from Hirwaun and Penywaun through Trecynon, Cwmdare and Llwydcoed to Cwmbach, Aberaman, Godreaman and Cwmaman. Modern Age Coders teaches AI, programming, Python, vibe coding and maths to Aberdare learners from six to 67, live on video with tutors in India, one-to-one or in groups of five to ten at the same level. A free trial lesson always comes first, followed by a course suggestion. The Aberdare project builds one of the oldest neural networks there is, a Hopfield network, stores census patterns for local neighbourhoods in it, and counts how quickly the memory starts producing patterns nobody stored. After the trial, fees are USD 100 a month in a group and USD 150 a month one-to-one.',
  lead: 'Most people meet AI as something that predicts. Older and in some ways stranger is AI that remembers: give it a damaged or partial pattern and it settles back to the complete one it learned. John Hopfield described such a network in 1982, and the 2024 Nobel Prize in Physics, which he shared with Geoffrey Hinton, cited that work. It is small enough for a teenager to write from scratch, and it has a hard limit that is easy to measure. Fill it with too many memories and it begins to recall things that were never put in.',
  wa: 'Hello Modern Age Coders, we would like to book a free AI or programming trial lesson. We are in Aberdare.',

  picks: {
    eyebrow: 'Starting points',
    h2: 'AI and programming courses for Aberdare learners',
    intro: 'Choose by the learner\'s age. Each course begins with a live lesson that is free and asks for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Patterns, rules and memory games that lead into how machines learn.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Making Scratch games with an AI helper, then testing and correcting them.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including the Aberdare neural memory project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the beginning, through data work, to models you can explain.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Aberdare and the Cynon Valley',
      h2: 'Aberdare, Trecynon, Cwmbach, Aberaman and Hirwaun',
      intro: 'Census headline figures and the places inside the Aberdare built-up area.',
      body: [
        { kind: 'table', caption: 'Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Aberdare built-up area', '37,675'],
          ['Rhondda Cynon Taf county borough', '237,651']
        ] },
        { kind: 'p', text: 'The county borough also includes Pontypridd, the Rhondda and Mountain Ash, so the two rows are separate counts. On postcodes.io, thirteen places listed as suburban areas have their nearest postcode inside the Aberdare built-up area: Trecynon, Cwmdare, Llwydcoed, Robertstown, Abernant, Gadlys, Cwmbach, Aberaman, Abercwmboi, Godreaman, Cwmaman, Penywaun and Hirwaun. Glenboi\'s nearest postcode falls in Mountain Ash instead, so it is not counted here. Schools in Aberdare follow the Curriculum for Wales, with its progression steps from Year 1 to Year 13 and WJEC qualifications at GCSE and A level. We place learners by Welsh school year and by the trial lesson, and teach in English.' },
        { kind: 'callout', h3: 'South Wales pages', p: 'See <a class="cg-inline-link" href="/coding-classes-in-rhondda-cynon-taf">Rhondda Cynon Taf</a>, <a class="cg-inline-link" href="/coding-classes-in-merthyr-tydfil-county-borough">Merthyr Tydfil</a>, <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> and <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science help</a>. Our view that thinking comes before tools is set out in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Aberdare project',
      h2: 'A neural memory filled with neighbourhoods',
      intro: 'Census patterns for 123 local areas, a network that stores them, and the point at which it starts to make things up.',
      body: [
        { kind: 'p', text: 'Each memory is a neighbourhood. The learner takes the 123 census output areas that the ONS places in the Aberdare built-up area and describes each one with 36 yes-or-no facts. Is the share of people aged 10 to 14 above the county borough median? Is the share of terraced homes? Of households with two people? Of workers who walk to work? Eighteen age bands, four kinds of home, four bedroom counts, five household sizes and five ways of getting to work give 36 bits, each set to +1 or -1 against the median of all 789 output areas in Rhondda Cynon Taf. No two of the 123 Aberdare patterns are identical, though the closest pair differ in only 2 of the 36 bits.' },
        { kind: 'p', text: 'A Hopfield network stores patterns in a grid of connection weights, one for every pair of bits, using the oldest learning rule in the book: strengthen the link between two bits that agree, weaken it when they disagree. To recall, you hand the network a pattern with some bits flipped and let each bit repeatedly take the sign its neighbours vote for, until nothing changes. The learner stores a few neighbourhoods, flips 4 of the 36 bits in one of them, and checks whether the network settles back on exactly the right pattern. Then the same test is run with random patterns of the same length for comparison, 200 times for each number of stored memories.' },
        { kind: 'table', caption: 'Share of damaged patterns recalled exactly, 4 of 36 bits flipped, our Python run', head: ['Memories stored', 'Aberdare census patterns', 'Random patterns'], rows: [
          ['1', '100%', '100%'],
          ['3', '96.3%', '99.7%'],
          ['4', '80.6%', '97.9%'],
          ['5', '63.3%', '87.8%'],
          ['6', '44.5%', '79.8%'],
          ['8', '18.6%', '51.5%'],
          ['10', '7.0%', '27.5%']
        ] },
        { kind: 'p', text: 'Theory predicts trouble. For large random networks, Amit, Gutfreund and Sompolinsky showed in 1985 that reliable recall breaks down at about 0.14 memories per bit, which for 36 bits is about five. The random patterns behave roughly that way. The Aberdare patterns fail much sooner: with five neighbourhoods stored, only 63.3% of damaged ones come back exactly. And when recall fails, the network rarely lands on the wrong neighbourhood. With eight stored, 79.0% of attempts ended in a stable pattern that matches none of them: a spurious memory, invented by the weights.' },
        { kind: 'p', text: 'Why do real patterns fare worse when, on average, two Aberdare neighbourhoods differ in 17.94 of 36 bits, almost exactly the 18 you would expect by chance? Our reading is that the bits are not independent. Across all 789 output areas in the county borough, the average strength of correlation between two bits is 0.12, roughly four times what independent bits would show; the share of under-fives, for example, rises and falls with the share of people aged 30 to 34 (a correlation of 0.42). Bits that move together give the stored patterns shared, hidden structure. The average distance hides that; the network does not.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'A memory game with cards: how many pictures can you hold before you start mixing them up?' },
          { h3: 'Ages 11 to 15', p: 'Turn census shares into yes-or-no bits in Python and compare two neighbourhoods bit by bit.' },
          { h3: 'Ages 15 and up', p: 'Write the network, measure recall as memories are added, and explain why real data overflows first.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Census 2021 tables TS007A, TS044, TS050, TS017 and TS061 come from Nomis and are published by the ONS under the Open Government Licence; the output areas counted as Aberdare come from the ONS 2021 output area to built-up area lookup. The 36-bit coding, the network, the random seed (20261001) and every percentage above come from our own run.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Memory and modern AI',
      h2: 'What an overflowing memory teaches about today\'s AI',
      intro: 'A network that invents a memory when it is overfull is a small, honest picture of a much bigger problem.',
      body: [
        { kind: 'table', caption: 'From the Aberdare network to the AI you use', head: ['What the project showed', 'Why it matters now'], rows: [
          ['Recall held up for a few memories', 'Every model has limits on what it can store'],
          ['Real patterns overflowed before random ones', 'Correlated data behaves worse than theory assumes'],
          ['79.0% of failures at eight memories were inventions', 'A confident answer can match nothing that was learned'],
          ['The average distance looked random', 'A summary statistic can hide structure'],
          ['Every bit was checked against the source', 'Trace an output back before trusting it']
        ] },
        { kind: 'p', text: 'Large language models are far bigger and work differently, but the habit this project builds carries straight over: when a system produces something fluent, ask whether it was ever in the data. With vibe coding, an AI can write a Hopfield network for you in seconds; the learning starts when you flip four bits, run it two hundred times and count what comes back. Learners in Aberdare move on to building their own AI agents once their Python holds up without help, usually from Year 12 or as adults, and Copilot Studio agents are taught one-to-one only. More in <a class="cg-inline-link" href="/learn-to-train-ai-not-just-prompt-it-uk">learn to train AI, not just prompt it</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'The ONS, Nomis and postcodes.io have no link with Modern Age Coders. We use their open data; the network and its results are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How learners progress',
    h2: 'From memory games at seven to neural networks at seventeen',
    intro: 'The Welsh school year is our first guess; the trial lesson decides where to start.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Patterns and rules', p: 'Puzzles, sequences and memory games, often before a screen is involved.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Creating with AI', p: 'AI-assisted Scratch projects, then the step into Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Models in Python', p: 'Data, simple networks and experiments that test what a model can really do.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'AI you can explain', p: 'Python and machine learning for work, built and checked by hand.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Neural memory',
    h2: 'What is a Hopfield network, and why does it matter for AI today?',
    intro: 'A Hopfield network is a neural network that stores patterns in the strengths of its connections and recovers a complete pattern from a damaged one by letting each unit follow its neighbours until the network settles, and it matters because it shows in miniature how a learning system can run out of room and start producing memories it was never given.',
    p1: 'Storing census patterns for Aberdare neighbourhoods, exact recall fell to 63.3% with five memories and 18.6% with eight, against 87.8% and 51.5% for random patterns, and most failures were stable patterns that matched nothing stored.',
    p2: 'Learners who have measured that look at fluent AI output and ask a sharper question: was this ever in what the system learned?',
    closer: 'For a teenager in Aberdare, understanding where an AI\'s answers come from is what turns it into a tool they control, and that understanding is built by programming one.',
    blogAnchor: 'why building AI yourself still matters in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'A lesson for an Aberdare learner',
    intro: 'Lessons are live video sessions. Learners need a computer with a keyboard, since Python does not run well on a tablet alone.',
    cells: [
      { h3: 'Learner writes the code', p: 'Every line is typed by the learner while the tutor probes their reasoning.' },
      { h3: 'Trial before advice', p: 'We see the learner\'s level in the first lesson, then recommend a course.' },
      { h3: 'First session free', p: 'The trial costs nothing and needs no card.' },
      { h3: 'Five to ten per group', p: 'Learners at one level, joining from all over the UK.' },
      { h3: 'Steady pace', p: 'About two lessons a week in term, with Rhondda Cynon Taf holidays left free if asked.' },
      { h3: 'Same UK time', p: 'Your slot does not move when the clocks go forward or back.' }
    ],
    spec: { title: 'Why video lessons', p: 'Five to ten learners at one exact level are much easier to find across the UK than in one valley, and nobody needs to travel to join them.' }
  },

  fees: {
    h2: 'Fees for Aberdare families',
    intro: 'Aberdare learners pay the same rates as every learner outside India.',
    first: 'First lesson: free and full length, with our course recommendation at the end.',
    group: 'Group class, around eight lessons each month.',
    private: 'Private tuition, around eight lessons each month.',
    closer: 'We bill in US dollars and give no sterling figure. The trial is never charged; payment starts only once a course and a regular time are agreed. Holidays, missed lessons and moves between group and private lessons are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from Welsh families and learners around the UK',

  book: {
    h2: 'Book a free Aberdare lesson',
    intro: 'Share the learner\'s age or year and one interest. Their free session might be a memory game, an AI-made Scratch game, a first Python program, or a first try at the neighbourhood memory network.',
    success: 'Thank you. We have your Aberdare booking request.'
  },

  faq: {
    h2: 'Aberdare questions',
    intro: 'The neural memory project, Hopfield networks, vibe coding and how lessons are run.',
    items: [
      { q: 'How many people live in Aberdare?', a: 'The ONS counted 37,675 usual residents in the Aberdare built-up area at the 2021 census. Rhondda Cynon Taf had 237,651.' },
      { q: 'Are AI and programming classes available in Aberdare?', a: 'Yes. Live online lessons are open to ages 6 to 67 in Aberdare, Trecynon, Cwmbach, Aberaman, Hirwaun and across the Cynon Valley.' },
      { q: 'What is associative memory?', a: 'Memory that is recalled by content rather than by address: you give part of a pattern, or a damaged copy, and the system returns the whole stored pattern.' },
      { q: 'What is a spurious memory in a Hopfield network?', a: 'A stable pattern the network settles into that was never stored. It appears when the stored patterns interfere with one another.' },
      { q: 'What did the Aberdare project find?', a: 'With census patterns for five Aberdare neighbourhoods stored, 63.3% of damaged patterns were recalled exactly, against 87.8% for random patterns, and most failures were invented patterns.' },
      { q: 'What is vibe coding?', a: 'Asking an AI to write code from a plain description, then running, reading and fixing it yourself. Our learners do it in typed Python so they can judge the result.' },
      { q: 'When do learners start building AI agents?', a: 'After their Python works without support, generally from Year 12 or in adulthood. Copilot Studio agents are one-to-one only.' },
      { q: 'Does this help with WJEC GCSE computer science?', a: 'Programming, data representation and algorithms run through WJEC GCSE and A level courses, and we teach them carefully. No grade is promised.' },
      { q: 'What do lessons cost?', a: 'The trial is free. Afterwards a group place is USD 100 a month and private lessons USD 150 a month.' },
      { q: 'Do lessons stop for school holidays?', a: 'Send us the Rhondda Cynon Taf holiday dates and we keep those weeks free.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More pages for the Valleys and Cardiff',
    html: 'See <a class="cg-inline-link" href="/coding-classes-in-rhondda-cynon-taf">Rhondda Cynon Taf</a>, <a class="cg-inline-link" href="/coding-classes-in-merthyr-tydfil-county-borough">Merthyr Tydfil</a>, <a class="cg-inline-link" href="/coding-classes-in-caerphilly-county-borough">Caerphilly</a> and <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list the rest.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Aberdare and Rhondda Cynon Taf',
  footerPlaces: [
    { href: '/coding-classes-in-rhondda-cynon-taf', label: 'Rhondda Cynon Taf' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-abr .cg-hero-grid { align-items: start; gap: clamp(1.25rem, 2.8vw, 2.5rem); }
.cg-root.cg-abr .cg-hero h1 { font-weight: 750; letter-spacing: -0.02em; line-height: 1.1; }
.cg-root.cg-abr .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-abr .cg-eyebrow { letter-spacing: 0.13em; font-weight: 710; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-abr .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.015em; }
.cg-root.cg-abr .cg-table caption { font-weight: 550; text-align: left; font-size: 0.93rem; }
.cg-root.cg-abr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-abr .cg-table th { font-weight: 720; letter-spacing: 0.02em; }
.cg-root.cg-abr .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.7rem; }
.cg-root.cg-abr .cg-callout { border-left-width: 6px; border-radius: 1px; }
`,

  dossier: {
    curriculumAuthority: 'Rhondda Cynon Taf (W06000016), Census 2021 TS001 usual residents 237,651. ONS 2021 BUA (published): Aberdare 37,675. Curriculum for Wales, progression steps, Years 1 to 13, WJEC GCSE and A level. postcodes.io suburban areas whose nearest postcode is in the Aberdare BUA: Trecynon, Cwmdare, Llwydcoed, Robertstown, Abernant, Gadlys, Cwmbach, Aberaman, Abercwmboi, Godreaman, Cwmaman, Penywaun, Hirwaun.',
    localProject: 'Census 2021 TS007A, TS044, TS050, TS017, TS061 for 789 RCT output areas; 36 shares per OA turned into +1/-1 against the RCT median. 123 OAs in the Aberdare BUA; all patterns distinct; mean Hamming 17.94 of 36; closest pair 2. Hopfield network, Hebbian weights, zero diagonal, asynchronous updates; 4 of 36 bits flipped; 200 trials per k; seed 20261001. Exact recall real / random: k1 100 / 100; k3 96.3 / 99.7; k4 80.6 / 97.9; k5 63.3 / 87.8; k6 44.5 / 79.8; k8 18.6 / 51.5; k10 7.0 / 27.5 (percent). Spurious share real k8 79.0%, k10 90.0%. Mean absolute correlation between bits across 789 RCT OAs 0.121 (independent bits about 0.028); under-fives vs aged 30 to 34 shares r 0.42. Capacity 0.138N about 5 for N 36. Lesson family: Hopfield networks, associative memory, capacity, spurious attractors, correlated patterns.',
    requiredMentions: [
      '37,675',
      'Trecynon',
      'Cwmdare',
      'Llwydcoed',
      'Abercwmboi',
      'Godreaman',
      'Hopfield network',
      '63.3%',
      '17.94'
    ],
    sources: [
      { claim: 'Hopfield J. J. (1982), Neural networks and physical systems with emergent collective computational abilities, PNAS 79(8), 2554 to 2558.', url: 'https://doi.org/10.1073/pnas.79.8.2554' },
      { claim: 'Amit D. J., Gutfreund H., Sompolinsky H. (1985), Storing infinite numbers of patterns in a spin-glass model of neural networks, Physical Review Letters 55(14), 1530 to 1533.', url: 'https://doi.org/10.1103/PhysRevLett.55.1530' },
      { claim: 'ONS Census 2021 TS007A, TS044, TS050, TS017 and TS061 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/datasets/c2021ts007a' },
      { claim: 'ONS output area (2021) to built-up area (2022) lookup for England and Wales.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/OA21_BUA22_LAD22_RGN22_EW_LU/FeatureServer/0' },
      { claim: 'Nobel Prize in Physics 2024, awarded to John J. Hopfield and Geoffrey Hinton.', url: 'https://www.nobelprize.org/prizes/physics/2024/summary/' },
      { claim: 'postcodes.io place and nearest-postcode lookups for CF44.', url: 'https://api.postcodes.io/places?q=Trecynon' }
    ],
    rejectedClaims: [
      'Any reading of the census patterns as a description of the people in an area: bits only record above or below a median share.',
      'That the 0.14 capacity figure applies exactly to 36 units: it is a large-network result; the page calls it a prediction.',
      'That correlated bits are proven to cause the earlier failure: labelled as our reading.',
      'That Glenboi is part of the Aberdare built-up area: its nearest postcode is in Mountain Ash; left out.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
