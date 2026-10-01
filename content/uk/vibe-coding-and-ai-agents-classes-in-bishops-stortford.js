'use strict';
// Bishop's Stortford (cg- town page, UK cluster Phase 10, towns band B, row 554). Keyword slug per the owner's rotation,
// with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when several AI agents edit the
// same list while out of contact, how do their copies agree afterwards, and is agreeing the same as being right?
// (Conflict-free replicated data types: last-write-wins, grow-only union and the observed-remove set.)
// Data (read 30 September 2026): OpenStreetMap via one Overpass query (timestamp 2026-09-30T20:56Z), bus stops, post
// boxes and benches in 51.848 to 51.892 N, 0.126 to 0.190 E: 424 features (216 benches, 170 bus stops, 38 post boxes);
// 170 stops carry 94 distinct names. The agents and every edit are simulated (scratchpad bps/crdt3.py).
// Three agents, A, B, C, each survey one of three longitude strips (15% overlap). Round 1: each finds 80% of its strip
// (seed 1): 352 distinct features found. Round 2, offline: A adds what it missed; B removes every bench it has seen and
// adds its other misses; C removes same-named bus stops it has seen (its rule) and adds new stops. Merge, seed 1: whole
// list last-write-wins 191 to 366 items depending on sync order, worst order drops 15 wanted items; union 393 items with
// 189 benches and 71 same-named stops; observed-remove set 172 items in all 6 orders, 18 benches and 21 same-named stops
// kept by concurrent adds; rules shared from the start 133 (95 stops, 38 post boxes). 100 seeds: observed-remove set
// identical in every order every time; 27 to 51 items from the shared-rules list.
// Lesson family: CRDTs for agents sharing state. Screened: "crdt", "conflict-free", "observed-remove", "last-write-wins"
// 0 hits; claimed in claims.txt. Hertfordshire county page = latency.
// Place facts: East Hertfordshire TS001 150,158. ONS 2021 BUA (published): Bishop's Stortford 40,915. postcodes.io
// suburban areas whose nearest postcode is in the BUA (CM23): Thorley, Hockerill, Thorley Street. Council wards of the
// nearest postcode to each OA centroid: Thorley Manor, North, Central, Parsonage, South, All Saints (Bishop's Stortford).
// place.name uses a curly apostrophe because render-cg.js places it inside a single-quoted script.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BISHOP\'S STORTFORD', label: 'Bishop\'s Stortford', blurb: 'Vibe coding and AI agents classes for Bishop\'s Stortford, with a project where three simulated agents edit one shared list offline and must merge.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-bishops-stortford',
  code: 'bps',
  accent: '#216F66',
  accentRationale: 'Bishop\'s Stortford: a deep teal (5.95:1 contrast on white), chosen by hand as a muted tone kept clear of the other Hertfordshire pages',
  pageType: 'city',
  place: {
    name: 'Bishop’s Stortford',
    eyebrow: 'Bishop\'s Stortford, East Hertfordshire, Hertfordshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hertfordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Hertfordshire', href: '/coding-classes-in-hertfordshire' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bishop\'s Stortford, Hertfordshire',
  title: 'Vibe Coding and AI Agents Classes in Bishop\'s Stortford',
  description: 'Vibe coding, AI agents, Python and coding classes online for Bishop\'s Stortford, Thorley, Hockerill and Thorley Street, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Vibe coding and AI agents lessons for Bishop\'s Stortford, with a project on how agents working offline merge a shared list.',
  twitterDescription: 'Bishop\'s Stortford vibe coding and AI agents classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Vibe Coding and AI Agents Classes for Bishop\'s Stortford',
    description: 'Live online vibe coding, AI agents, Python and maths lessons for children, teenagers and adults in Bishop\'s Stortford and East Hertfordshire, including a project on keeping several agents\' shared data consistent.'
  },

  h1: 'Vibe coding and AI agents classes in Bishop\'s Stortford',
  capsuleQ: 'Where are the best vibe coding and AI agents classes for Bishop\'s Stortford learners?',
  capsule: 'The ONS counted 40,915 usual residents in the Bishop\'s Stortford built-up area in 2021, and 150,158 across East Hertfordshire. Thorley, Hockerill and Thorley Street appear in the gazetteer as parts of the town. Modern Age Coders teaches vibe coding, AI agents, Python, coding and maths to people there aged six to 67, in live video lessons with tutors in India, either privately or in groups of five to ten at one level. When several AI agents work on the same task, each keeps its own copy of what it knows, and sooner or later the copies must be merged. Our Bishop\'s Stortford project sends three simulated agents out to list the town\'s bus stops, post boxes and benches, lets them edit offline, and compares three ways of merging. Your first lesson costs nothing; keeping going is USD 100 monthly in a class or USD 150 monthly on a one-to-one basis.',
  lead: 'Two people edit the same shopping list on their phones in a tunnel. One crosses off milk; the other adds bread. When the signal returns, what should the list say? Now replace the people with AI agents, and the list with a shared record of a whole town. Computer scientists have a family of answers called conflict-free replicated data types, CRDTs for short, which guarantee that every copy ends up identical whatever order the updates arrive in. Bishop\'s Stortford learners build one, and then discover that identical is not the same as correct.',
  wa: 'Hello Modern Age Coders, we are in Bishop\'s Stortford and would like a free vibe coding or AI agents lesson.',

  picks: {
    eyebrow: 'Suggested courses',
    h2: 'Vibe coding and AI agents courses for Bishop\'s Stortford',
    intro: 'Choose by age. Every course starts with a free live lesson, and no card is needed.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: the child describes a Scratch game, an AI helps build it, and the child tests every part.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: two people change the same plan at once; whose change should win, and why?' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Vibe coding for teenagers: Python and web projects built with AI, including the shared-list agents.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Students and adults', note: 'Python automation and AI agents for older learners, with the data questions agents raise.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bishop\'s Stortford facts',
      h2: 'Bishop\'s Stortford, Thorley, Hockerill and Thorley Street',
      intro: 'Census counts, gazetteer names and council wards, each with its source.',
      body: [
        { kind: 'table', caption: 'Usual residents at the 2021 census (ONS)', head: ['Area', 'Residents'], rows: [
          ['Bishop\'s Stortford built-up area', '40,915'],
          ['East Hertfordshire district', '150,158']
        ] },
        { kind: 'p', text: 'The district total covers far more than the town, including Hertford, Ware and Sawbridgeworth, so it is a separate count. The postcode gazetteer lists Thorley and Hockerill as suburban areas and Thorley Street as a village, all under CM23, and the nearest postcode to each lies inside the Bishop\'s Stortford built-up area. Looking up the council ward of the postcode nearest each census area in the town gave six wards: Thorley Manor, North, Central, Parsonage, South and All Saints. The town\'s schools teach the English national curriculum. Knowing whether a learner is in Year 2, Year 13 or anywhere between is enough to plan a first session, and GCSE and A level computer science students can have their course backed up alongside school.' },
        { kind: 'callout', h3: 'Hertfordshire pages', p: 'See the <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire page</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-harlow">Harlow</a>. Our case for learning to think before handing work to AI is in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bishop\'s Stortford project',
      h2: 'Three agents, one shared list, and three ways to merge it',
      intro: 'Real features from OpenStreetMap, simulated agents and edits, and a result every learner can check.',
      body: [
        { kind: 'p', text: 'OpenStreetMap records 424 benches, bus stops and post boxes in a rectangle around Bishop\'s Stortford: 216 benches, 170 bus stops and 38 post boxes. The 170 stops carry only 94 different names, so many stops share a name with another stop. The learner splits the rectangle into three overlapping strips and gives one to each of three simulated agents, A, B and C. In the first round each agent finds 80 per cent of the features in its strip, and after syncing the team knows about 352.' },
        { kind: 'p', text: 'In the second round the agents work offline. A adds everything it missed. B decides benches are out of scope, deletes every bench it knows about, and adds its other missed features. C decides that stops sharing a name are duplicates, deletes the extras it knows about, and adds new stops. C\'s rule is questionable, because sharing a name does not make two stops the same stop, and that is part of the lesson: an agent can apply a bad rule perfectly. Then all three sync, in each of the six possible orders.' },
        { kind: 'table', caption: 'Merging the three agents\' lists, one simulated run (seed 1), our Python code', head: ['Merge rule', 'Items after merging', 'Same result in every sync order?', 'Benches left', 'Same-named stops left'], rows: [
          ['Whole list, last sync wins', '191 to 366', 'No', 'depends on order', 'depends on order'],
          ['Keep everything anyone added', '393', 'Yes', '189', '71'],
          ['Observed-remove set (a CRDT)', '172', 'Yes', '18', '21'],
          ['Rules agreed before starting', '133', 'not a merge', '0', '0']
        ] },
        { kind: 'p', text: 'Letting the last sync win throws away whole lists: depending only on who connected last, the team kept anywhere from 191 to 366 items, and the worst order dropped 15 items that belong on the agreed list. Keeping everything never loses an addition, but deletions are impossible, so 189 benches survive B\'s decision. The observed-remove set does what its name says: each addition carries a unique tag, and a deletion removes only the tags the deleting agent had actually seen. Every copy reached the same 172 items in every order. The 18 benches and 21 extra stops that remain are ones another agent added while B or C was offline, so the deleter never saw them; the rule is that an addition you did not know about is not cancelled. Across 100 random runs the observed-remove result never depended on order, and it always ended 27 to 51 items away from the list the team would have made with shared rules.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Two players edit the same paper list in secret, then merge by three different rules. Which rule loses the fewest changes?' },
          { h3: 'Ages 11 to 15', p: 'Code a last-write-wins list and a keep-everything set in Python, and find an order where each goes wrong.' },
          { h3: 'Ages 15 and up', p: 'Build the observed-remove set with unique tags, prove every sync order agrees, then run the three-agent survey.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Features are from OpenStreetMap under the Open Database Licence, as mapped on 30 September 2026. The agents, their strips, their 80 per cent success rate and their rules are invented by us, and the numbers come from our simulation, not from any real agent system. CRDTs are described by Shapiro and colleagues (2011).' }
      ]
    },
    {
      id: 'agents', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'What shared lists teach about teams of AI agents',
      intro: 'Once agents work in parallel, keeping their knowledge consistent becomes a design problem.',
      body: [
        { kind: 'table', caption: 'From the Bishop\'s Stortford simulation to real agent systems', head: ['In the simulation', 'For AI agents'], rows: [
          ['Last sync won and dropped up to 15 agreed items', 'Overwriting shared memory silently loses work'],
          ['Keeping everything made deletion impossible', 'Memory that only grows fills up with things nobody wants'],
          ['The observed-remove set agreed in every order', 'Design merges so the order of messages does not matter'],
          ['It still kept 18 benches B had ruled out', 'Agreement between copies is not agreement on the goal'],
          ['C deleted real stops by a bad rule', 'An agent can follow a flawed instruction perfectly; review the rule']
        ] },
        { kind: 'p', text: 'Frameworks for multi-agent AI let agents share memory, task lists and results, and whenever two agents can write at once, the question from this project returns. Vibe coding is where learners meet it first: they describe a small program to an AI assistant, check the draft, and here ask it for a shared list two agents can edit. The learner then checks whether the draft quietly lets the last write win. Building real agents starts when a learner writes Python unaided, usually in the older teens or as an adult, and Copilot Studio agents are taught one-to-one only. Read <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We drew on open data from OpenStreetMap volunteers, the ONS and postcodes.io, none of whom has any link to Modern Age Coders. The agents, the edits and the conclusions are our invention and our responsibility.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From paper lists to agents that share memory',
    intro: 'We start from the school year and check it in the free lesson.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Rules for fair decisions when two people want different things.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps built with AI help, tested by the child who designed them.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Vibe coding and Python', p: 'Real Python behind AI-built projects, including data shared between programs.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'AI agents', p: 'Automation and agents in Python, with memory and coordination done properly.', courses: ['python-ai-automation-masterclass-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and shared state',
    h2: 'What is a CRDT, and why do AI agents need one?',
    intro: 'A CRDT, or conflict-free replicated data type, is a way of storing data so that copies edited separately can always be merged into the same result whatever order the edits arrive in, and AI agents need one when several of them update shared memory or task lists without waiting for each other.',
    p1: 'In our Bishop\'s Stortford simulation, an observed-remove set brought three agents\' lists to the same 172 items in all six sync orders, where letting the last sync win left anywhere from 191 to 366.',
    p2: 'After building one, learners ask of any multi-agent system: what happens when two agents change the same thing at once, and who decided the rule?',
    closer: 'A Bishop\'s Stortford teenager who has merged three agents\' work by hand will design shared memory with care, and that care comes from writing the code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Lessons for Bishop\'s Stortford learners',
    intro: 'Learners join from home with a laptop or desktop and a camera. A reliable connection matters more than raw speed.',
    cells: [
      { h3: 'The learner builds', p: 'Tutors ask and suggest; learners write, run and fix the code, including the AI\'s.' },
      { h3: 'Placement comes first', p: 'The free lesson shows the level, and only then do we recommend a course.' },
      { h3: 'A free full lesson', p: 'The trial costs nothing and we take no card details.' },
      { h3: 'Five to ten per class', p: 'Classmates share a level and come from towns across the UK.' },
      { h3: 'Two slots a week', p: 'Holiday breaks follow your own school calendar; send it and we plan round it.' },
      { h3: 'Fixed UK start time', p: 'Clock changes are absorbed by the tutor, not by your timetable.' }
    ],
    spec: { title: 'Why live and online', p: 'A live tutor sees a wrong idea as it forms and can question it at once. Learners from all over the UK let us match groups by level far more closely than a single town could.' }
  },

  fees: {
    h2: 'Fees for Bishop\'s Stortford',
    intro: 'The fees below are the same ones we charge learners everywhere.',
    first: 'A full free first lesson that ends with a course suggestion.',
    group: 'Small-group lessons, about eight a month.',
    private: 'One-to-one lessons, about eight a month.',
    closer: 'Everything is priced in US dollars; we publish no sterling figures. You will not be billed for the trial. The first invoice arrives after you pick a course and a regular slot, and the pricing page spells out what happens with holidays, absences or a switch between class and private.'
  },

  reviewsH2: 'Parents and learners rating us on Google, from East Herts and further afield',

  book: {
    h2: 'Book a free lesson in Bishop\'s Stortford',
    intro: 'A quick note of age or year group, plus a favourite pastime, lets us tailor the trial: a two-player list-editing game, an AI-assisted Scratch build, a learner\'s very first Python, or a pair of miniature agents that have to share one list.',
    success: 'Thank you. We have your Bishop\'s Stortford request.'
  },

  faq: {
    h2: 'Bishop\'s Stortford: questions answered',
    intro: 'About CRDTs, the simulation, vibe coding, agents and practical details.',
    items: [
      { q: 'What is the population of Bishop\'s Stortford?', a: 'The ONS built-up area had 40,915 usual residents at the 2021 census. East Hertfordshire district had 150,158.' },
      { q: 'Do you teach vibe coding and AI agents in Bishop\'s Stortford?', a: 'We do, to learners aged 6 to 67 in Thorley, Hockerill, Thorley Street and all other parts of town, through live online lessons.' },
      { q: 'What is an observed-remove set?', a: 'A shared set in which every addition gets a unique tag and a deletion removes only the tags the deleter has seen. Copies merged in any order end up identical, and an addition made without the deleter\'s knowledge survives.' },
      { q: 'What did the Bishop\'s Stortford simulation show?', a: 'Letting the last sync win left between 191 and 366 items depending on order. The observed-remove set gave 172 in every order, but still kept 18 benches one agent had ruled out, because another agent added them while it was offline.' },
      { q: 'Were real agents or real edits used?', a: 'No. The bus stops, post boxes and benches are real OpenStreetMap data; the agents and their edits are simulated in Python, and the page says so.' },
      { q: 'What is vibe coding?', a: 'Programming by conversation: you tell an AI assistant what you are after, it proposes code, and you stay in charge by running, questioning and fixing what it proposes. We pair it with genuine coding lessons so learners can tell good drafts from bad.' },
      { q: 'When do learners build AI agents?', a: 'When their own Python holds up without a tutor\'s help, which in practice means the late teens or adulthood. Microsoft Copilot Studio agent work is offered in private lessons alone.' },
      { q: 'Does the project connect to GCSE and A level computer science?', a: 'It practises programming and data structures, both on those syllabuses; results are up to the learner, and we make no grade promises.' },
      { q: 'How much are lessons?', a: 'Lesson one is on the house. Staying on costs USD 100 each month in a small class, or USD 150 each month for private teaching.' },
      { q: 'Can we pause for the school holidays?', a: 'Certainly; mark the weeks off and we will not book lessons in them.' }
    ]
  },

  next: {
    eyebrow: 'Hertfordshire and beyond',
    h2: 'More towns to explore',
    html: 'Every town page runs its own project: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-harlow">Harlow</a> in Essex, and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-welwyn-garden-city">Welwyn Garden City</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-stevenage">Stevenage</a> in Hertfordshire, for example. For the complete set, start at the <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">county page</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Send us a WhatsApp'
  },

  footerHeading: 'Bishop\'s Stortford and Hertfordshire',
  footerPlaces: [
    { href: '/coding-classes-in-hertfordshire', label: 'Hertfordshire' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bps .cg-hero-grid { align-items: end; gap: clamp(1.4rem, 3.1vw, 2.65rem); }
.cg-root.cg-bps .cg-hero h1 { font-weight: 725; letter-spacing: -0.029em; line-height: 1.05; }
.cg-root.cg-bps .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding: 0 0 0.9rem 0; }
.cg-root.cg-bps .cg-eyebrow { letter-spacing: 0.15em; font-weight: 610; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-bps .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.02em; }
.cg-root.cg-bps .cg-table caption { font-weight: 550; text-align: left; font-size: 0.9rem; }
.cg-root.cg-bps .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bps .cg-table th { font-weight: 710; border-bottom: 2px dashed var(--cg-accent); }
.cg-root.cg-bps .cg-ladder-col { border-radius: 10px; border-right: 3px solid var(--cg-accent); padding-right: 0.7rem; }
.cg-root.cg-bps .cg-callout { border-left-width: 4px; border-radius: 0 14px 0 0; }
`,

  dossier: {
    curriculumAuthority: 'East Hertfordshire (E07000242), Census 2021 TS001 usual residents 150,158. ONS 2021 BUA (published): Bishop\'s Stortford 40,915. English national curriculum, GCSE and A level. postcodes.io places whose nearest postcode is in the BUA (CM23): Thorley, Hockerill (suburban areas), Thorley Street (village). Wards of the nearest postcode to each OA centroid: Bishop\'s Stortford Thorley Manor, North, Central, Parsonage, South, All Saints.',
    localProject: 'OpenStreetMap, one Overpass query (2026-09-30T20:56Z), 51.848 to 51.892 N, 0.126 to 0.190 E: 424 features (216 benches, 170 bus stops with 94 names, 38 post boxes). Simulated agents A, B, C on three overlapping longitude strips; round 1 finds 80% (352 known); round 2 offline: A adds misses, B deletes benches it has seen, C deletes same-named stops it has seen. Seed 1: whole-list last-write-wins 191 to 366 items by sync order (worst drops 15 wanted); union 393 (189 benches, 71 same-named stops); observed-remove set 172 in all 6 orders (18 benches, 21 same-named stops kept by concurrent adds); shared rules 133. 100 seeds: OR-set order-independent every time, 27 to 51 items from the shared-rules list. Lesson family: CRDTs (last-write-wins, grow-only union, observed-remove set) for agents sharing state.',
    requiredMentions: [
      '40,915',
      '150,158',
      'Thorley',
      'Hockerill',
      'Thorley Street',
      'observed-remove set',
      'CRDT',
      'Thorley Manor',
      '191 to 366',
      '424 benches, bus stops and post boxes'
    ],
    sources: [
      { claim: 'Shapiro M., Preguiça N., Baquero C. and Zawirski M. (2011), Conflict-free replicated data types, Stabilization, Safety, and Security of Distributed Systems, LNCS 6976, 386 to 400.', url: 'https://doi.org/10.1007/978-3-642-24550-3_29' },
      { claim: 'OpenStreetMap bus stops, post boxes and benches around Bishop\'s Stortford via the Overpass API, 30 September 2026 (Open Database Licence).', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations; OA21 to BUA22 lookup and centroids.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and reverse geocoding for CM23.', url: 'https://api.postcodes.io/places?q=Hockerill' }
    ],
    rejectedClaims: [
      'That any real AI agent framework behaves like the simulation: the agents and edits are invented, and the page says so.',
      'That same-named bus stops are duplicates: C\'s rule is presented as a flawed rule; most are pairs across a road.',
      'That OpenStreetMap lists every bench or stop in the town: counts are as mapped on the day.',
      'That the rectangle is the town boundary: stated as a rectangle around the town.',
      'Suburb names whose nearest postcode is outside the BUA: none of the three used; others not found in the gazetteer.',
      'Sterling prices: none.'
    ]
  }
};
