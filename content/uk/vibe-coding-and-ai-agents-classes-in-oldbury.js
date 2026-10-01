'use strict';
// Oldbury, Sandwell (cg- town page, UK cluster Phase 10, towns band B, row 534). Keyword slug per the owner's rotation,
// with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when an AI agent reuses an earlier
// answer for a question that looks similar, how often is it wrong, and what should the cache key contain? (semantic
// caching on Sandwell street names and postcode districts).
// Data (read 30 September 2026): one Overpass query for named highway ways inside the Sandwell admin_level 8 boundary
// (10,341 ways, OSM base 2026-09-30T18:14Z); OS Code-Point Open 2026.3.0 (B, DY and WS area files), 6,906 Sandwell
// postcodes (district E08000028, positional quality below 90).
// Our run (scratchpad odb/cache.py, odb/sim.py): 9,485 road ways kept (residential, tertiary, primary, secondary,
// unclassified, living_street, trunk, service); each given the postcode district of the nearest postcode to its centre
// (median distance 36.5 m); ways with the same name whose centres chain within 400 m merged into one street: 3,450
// names, 3,815 streets; 263 names shared by two or more separate streets (628 streets); 234 names whose streets lie in
// two or more postcode districts (High Street: B64, B65, B66, B68, B70, DY4; Park Street: B64, B65, B69, B70, DY4, WS10;
// Church Street: B64, B69, B70, DY4). Question stream: 20,000 questions per run, each a uniformly random street asking
// "which postcode district?", 20 runs (seeds 20260930 to 20260949). Cache keyed on: exact name, hit 82.8%, wrong 7.90%
// of all answers (7.66 to 8.29), 9.54% of cached answers; name without its road-type word, 86.7%, 23.39%; first word
// only, 88.9%, 31.15%; name plus ward, 81.2%, 0.11% (0.07 to 0.17).
// Code-Point postcodes per district in Sandwell (our count): DY4 935, B70 834, B69 729, B71 687, B68 588, B66 563,
// WS10 546, B67 523, B65 506, B64 469, B43 373, WS5 126.
// Lesson family: semantic caching for agents (cache key design, hit rate against wrong answers).
// Place facts: Sandwell TS001 341,832; ONS 2021 BUA Oldbury (Sandwell) 45,180.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'OLDBURY', label: 'Oldbury', blurb: 'Vibe coding and AI agents classes for Oldbury in Sandwell, with an agent project on caching answers when eight different High Streets share one name.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-oldbury',
  code: 'odb',
  accent: '#985018',
  accentRationale: 'Oldbury: a burnt orange (6.01:1 contrast on white), chosen by hand as a muted tone kept clear of neighbouring pages',
  pageType: 'city',
  place: {
    name: 'Oldbury',
    eyebrow: 'Oldbury, Sandwell, West Midlands',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Sandwell' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'West Midlands', href: '/coding-classes-in-the-west-midlands' },
    { label: 'West Bromwich', href: '/vibe-coding-and-ai-agents-classes-in-west-bromwich' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Oldbury, Sandwell',
  title: 'Vibe Coding and AI Agents Classes in Oldbury, Sandwell',
  description: 'Vibe coding, AI agents, Python and coding classes online for Oldbury, Langley Green, Brandhall, Causeway Green and Titford, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Vibe coding and AI agents classes for Oldbury, with an agent project: cache answers about 3,815 Sandwell streets and count the wrong replies as the cache key loosens.',
  twitterDescription: 'Oldbury, Sandwell: vibe coding, AI agents, Python and coding taught live online to ages 6 to 67. Lesson one is free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Oldbury, Sandwell',
    description: 'Vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Oldbury and across Sandwell, taught live online with agent projects that count their own mistakes.'
  },

  h1: 'Vibe coding and AI agents classes in Oldbury',
  capsuleQ: 'Where are the best vibe coding and AI agents classes for Oldbury learners?',
  capsule: 'The ONS recorded 45,180 residents in the Oldbury built-up area at the 2021 census, within a Sandwell borough of 341,832. postcodes.io lists Langley Green, Brandhall, Causeway Green, Titford, Rood End and Rounds Green as suburban areas whose nearest postcode lies in the Oldbury built-up area. We teach vibe coding, AI agents, Python, coding and maths to learners aged six to 67 over live video, with tutors in India, either one-to-one or in a class of five to ten who are at the same level. We ask learners to treat every shortcut an agent takes as a claim that needs checking. The Oldbury project gives an agent a memory of its earlier answers about Sandwell\'s streets, then counts how often reusing those answers goes wrong when several streets share a name. Your first lesson is free and closes with a course suggestion. After that, fees are USD 100 a month for group lessons and USD 150 a month for private ones.',
  lead: 'An AI agent that answers the same question twice wastes time and money, so builders give agents a cache: a store of earlier answers that can be reused. The tempting upgrade is to make the cache "semantic", reusing an answer when a new question is merely similar to an old one. It sounds sensible until two similar questions need different answers. Sandwell makes the problem concrete. Its open map data holds eight separate streets called High Street, spread over six postcode districts, and hundreds of other names shared the same way. Ask an agent which postcode district a street is in, let it reuse its answers, and count the damage.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents lesson for a learner in Oldbury.',

  picks: {
    eyebrow: 'Course choices',
    h2: 'Courses for Oldbury in vibe coding, agents and thinking',
    intro: 'One course per age band. Its first lesson is live and free, and reserving it needs no payment card.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children get an AI to build a Scratch quiz that remembers answers, then trick it with a lookalike question.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: two friends both called Sam live in different streets; what must a message include?' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web vibe coding for teenagers, with the Sandwell street cache as a build.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'From first Python to data structures, caching and agents that know what they do not know.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Sandwell by postcode',
      h2: 'Oldbury\'s B68 and B69 among Sandwell\'s postcode districts',
      intro: 'The answers in the Oldbury project are postcode districts, so here is how Sandwell\'s postcodes divide between them.',
      body: [
        { kind: 'table', caption: 'Live postcodes inside Sandwell borough by postcode district (our count from OS Code-Point Open 2026.3.0)', head: ['Postcode district', 'Postcodes in Sandwell'], rows: [
          ['DY4', '935'],
          ['B70', '834'],
          ['B69', '729'],
          ['B71', '687'],
          ['B68', '588'],
          ['B66', '563'],
          ['WS10', '546'],
          ['B67', '523'],
          ['B65', '506'],
          ['B64', '469'],
          ['B43', '373'],
          ['WS5', '126']
        ] },
        { kind: 'p', text: 'A handful of postcodes from a few other districts also fall inside the borough edge and are left out of the table. Oldbury\'s own suburban areas, as postcodes.io records them, carry B68 and B69 codes, while Tividale and Brades Village, though nearby, resolve to the Rowley Regis built-up area. Schools in Oldbury follow the national curriculum for England, and our lessons fit round the term dates you send.' },
        { kind: 'callout', h3: 'The West Midlands and how we teach', p: 'The county page is <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">coding classes in the West Midlands</a> and the regional one is <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">the West Midlands region</a>. The reasons thinking always comes before tools are set out in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Oldbury project',
      h2: 'A cache for 3,815 Sandwell streets, and what it gets wrong',
      intro: 'An agent answers "which postcode district is this street in?" and remembers its answers. The question is what to remember them by.',
      body: [
        { kind: 'p', text: 'The learner pulls every named road inside the Sandwell boundary from OpenStreetMap with one Overpass request and keeps 9,485 road segments. Each segment is given the postcode district of the nearest of Sandwell\'s 6,906 postcodes, typically about 37 m from its middle. Segments with the same name whose centres lie within 400 m of each other are joined into one street. That leaves 3,815 streets but only 3,450 different names, because 263 names are used by two or more separate streets. High Street appears eight times, in six districts; Park Street also spans six districts and Church Street four.' },
        { kind: 'p', text: 'Now the agent. It receives 20,000 questions, each about a street picked at random, and must answer with a postcode district. Looking the answer up properly always works but costs effort, so the agent keeps a cache: before looking anything up it checks whether it has answered an "equivalent" question already, and if so it reuses that answer. The only thing that changes between our four agents is what counts as equivalent, in other words the cache key. We ran each agent 20 times with different random question streams.' },
        { kind: 'table', caption: 'Four cache keys, 20,000 questions per run, averaged over 20 runs (our Python)', head: ['Cache key', 'Questions answered from the cache', 'Answers that were wrong'], rows: [
          ['Exact street name', '82.8%', '7.90%'],
          ['Name without its road-type word ("Church Road" and "Church Lane" count as one)', '86.7%', '23.39%'],
          ['First word only', '88.9%', '31.15%'],
          ['Exact name plus the ward it is in', '81.2%', '0.11%']
        ] },
        { kind: 'p', text: 'Even the strictest-looking key, the exact name, gets almost one answer in twelve wrong, because a remembered High Street in DY4 is handed out for the High Street in B64. Loosening the key, which is what a "semantic" cache does, buys four to six more points of cache use and roughly triples or quadruples the error. The fix runs the other way. Adding the ward, a piece of context the answer actually depends on, costs 1.6 points of cache use and cuts wrong answers to about one in a thousand. The leftover errors come from the few streets whose ward and district do not line up, and the learner is asked to find them.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play a memory game where the answer card depends on two clues, then play it again with one clue hidden.' },
          { h3: 'Ages 11 to 15', p: 'Build a dictionary cache in Python for a list of streets and count its hits and mistakes.' },
          { h3: 'Ages 15 and up', p: 'Load the real Sandwell data, test four cache keys over 20 runs, and explain every remaining error.' }
        ] },
        { kind: 'callout', h3: 'Sources and honesty notes', p: 'Road names © OpenStreetMap contributors (Open Database Licence). Postcode positions contain OS data © Crown copyright and database right 2026 and Royal Mail data © Royal Mail copyright and database right 2026. Joining segments into streets by a 400 m rule is our own simplification, so one long road with a gap can count as two streets. The agent, the questions and every percentage come from our simulation.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents that remember',
      h2: 'What a street-name cache teaches about AI agents and vibe coding',
      intro: 'Reusing answers is only safe when the key captures everything the answer depends on.',
      body: [
        { kind: 'table', caption: 'From Sandwell\'s streets to AI agents', head: ['In the project', 'When building agents'], rows: [
          ['Eight separate High Streets', 'Similar requests can need different answers'],
          ['Exact name: 7.90% wrong', 'An exact match on the wrong key is still wrong'],
          ['Looser keys: up to 31.15% wrong', 'A similarity threshold trades mistakes for speed'],
          ['Name plus ward: 0.11% wrong', 'Put the context the answer depends on into the key'],
          ['20 runs, narrow ranges', 'Measure a cache before trusting it']
        ] },
        { kind: 'p', text: 'Semantic caches are used in real AI products to avoid paying for the same model call twice: if a new prompt is close enough to an old one, the old reply is served. The risk is exactly the one Oldbury learners measure. The words "what is the weather in Newport?" can be about more than one Newport in the UK, and a cache keyed on the words alone cannot tell them apart. Ask an AI assistant to vibe code a cache for an agent and it will usually key on the prompt text alone, because that is the simplest version. Our learners know to ask what else the answer depends on. We move on to building AI agents with learners who can write Python unaided, usually sixth-formers and adults, and Copilot Studio agents are taught only in one-to-one lessons. Further reading: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents, the UK student route</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, Ordnance Survey, Royal Mail, the Office for National Statistics and postcodes.io have no part in this page beyond publishing the open data we used. Mistakes in the analysis are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The journey',
    h2: 'From memory games to agents with a cache',
    intro: 'School years are a rough guide. We place learners from what they show us in the free lesson.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Clues, memory and noticing when two things only look the same.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Quiz and memory games made with AI help, then tested with tricky questions.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Vibe coding in Python', p: 'Dictionaries, caches and data projects, built with an assistant and checked by hand.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Agents in production', p: 'Reliable Python, then agents that remember safely and say when they are unsure.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and memory',
    h2: 'What is a semantic cache, and when does it give an AI agent the wrong answer?',
    intro: 'A semantic cache stores an AI system\'s earlier answers and reuses one whenever a new request is judged similar enough to an old request, not only when it is identical; this saves time and cost, but it returns a wrong answer whenever two similar-looking requests actually need different replies.',
    p1: 'An agent answering 20,000 questions about Sandwell streets gave 7.90% wrong answers when it cached by exact street name and 31.15% when it matched on the first word only.',
    p2: 'Keying the cache on the street name plus its ward cut the error to 0.11% while still answering 81.2% of questions from memory.',
    closer: 'Oldbury teenagers who have counted a cache\'s mistakes ask every agent what its memory is keyed on. That question comes from building the cache in code, and it is exactly why learning to code still matters in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Langley Green, Brandhall and Titford in one online class',
    intro: 'Bring a computer, a webcam and an internet connection strong enough for video.',
    cells: [
      { h3: 'Learner at the keyboard', p: 'The student writes and runs the code while the tutor watches and asks why.' },
      { h3: 'Level set by the trial', p: 'We see how a learner works before we recommend anything.' },
      { h3: 'First lesson on us', p: 'A normal-length lesson, no card needed, and our advice at the end.' },
      { h3: 'Same-stage classes', p: 'Five to ten learners at one level, from anywhere in the UK.' },
      { h3: 'Two a week', p: 'Tell us your holiday weeks and they come out of the timetable.' },
      { h3: 'Fixed UK time', p: 'The spring and autumn clock changes are handled by our tutors.' }
    ],
    spec: { title: 'Why it runs online', p: 'Filling a class with learners at exactly the same stage takes a national pool. One borough cannot always manage it.' }
  },

  fees: {
    h2: 'Oldbury lesson prices',
    intro: 'Oldbury is charged our international rates, which cover every country except India.',
    first: 'A full first lesson free, closing with the course we would pick.',
    group: 'About eight lessons a month in a small group.',
    private: 'About eight lessons a month on a one-to-one basis.',
    closer: 'Everything is priced in US dollars and nothing in pounds. Billing begins after the trial, once you have chosen a course and a weekly time. Holidays, missed lessons and changing format are all explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from West Midlands families and learners around the UK',

  book: {
    h2: 'Get a free Oldbury lesson',
    intro: 'Send an age or school year and one thing the learner likes. The trial might be a memory puzzle, a Scratch quiz built with AI, a first Python program, or a first cache to test.',
    success: 'Thank you. Your Oldbury request has reached us and we will be in touch.'
  },

  faq: {
    h2: 'Oldbury questions',
    intro: 'Semantic caching, the street project, vibe coding, agents and the arrangements.',
    items: [
      { q: 'What is the population of Oldbury?', a: 'ONS figures give the Oldbury built-up area 45,180 usual residents at the 2021 census. Sandwell borough had 341,832.' },
      { q: 'Are vibe coding and AI agents classes available in Oldbury?', a: 'Yes, live online for ages 6 to 67, covering Oldbury, Langley Green, Brandhall, Causeway Green, Titford and the rest of Sandwell.' },
      { q: 'What is a cache key?', a: 'The piece of information a cache uses to decide whether a new request matches a stored one. If the key leaves out something the answer depends on, the cache will hand back wrong answers.' },
      { q: 'Why did the exact street name still give wrong answers?', a: 'Because Sandwell has several separate streets with the same name. The cache remembered one of them and reused its district for the others.' },
      { q: 'What did the Oldbury project show?', a: 'That loosening a cache key raised its reuse rate only slightly while multiplying wrong answers, and that adding the ward cut errors to about one in a thousand.' },
      { q: 'What is vibe coding?', a: 'Producing software by describing it to an AI and letting the AI write the code. The learner stays responsible for reading and testing all of it.' },
      { q: 'When can a learner start building AI agents?', a: 'When they can write Python without support, which is usually sixth form or later. Copilot Studio agents are one-to-one only.' },
      { q: 'Can lessons support GCSE and A level?', a: 'Yes, in computer science and maths, focused on understanding. We never promise grades.' },
      { q: 'What are the fees?', a: 'Nothing for the first lesson, then USD 100 a month in a group or USD 150 a month privately.' },
      { q: 'Do lessons run in school holidays?', a: 'Only if you want them to; send the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Around Sandwell',
    h2: 'More West Midlands pages',
    html: 'Separate projects run on the pages for <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-west-bromwich">West Bromwich</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-smethwick">Smethwick</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-halesowen">Halesowen</a>, and the county is on <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">the West Midlands</a>. Everywhere else is reached from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Oldbury and the West Midlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-west-midlands', label: 'West Midlands' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-odb .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.3rem); }
.cg-root.cg-odb .cg-hero h1 { font-weight: 750; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-odb .cg-capsule { border-left: 3px solid var(--cg-accent); border-right: 3px solid var(--cg-accent); padding: 0.8rem 1rem; }
.cg-root.cg-odb .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.8rem; }
.cg-root.cg-odb .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.02em; }
.cg-root.cg-odb .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 500; }
.cg-root.cg-odb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-odb .cg-table th { font-size: 0.82rem; font-weight: 700; }
.cg-root.cg-odb .cg-ladder-col { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.6rem 0; }
.cg-root.cg-odb .cg-callout { border-left-width: 5px; border-radius: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Sandwell (E08000028), Census 2021 TS001 usual residents 341,832. ONS 2021 BUA Oldbury (Sandwell) 45,180. postcodes.io suburban areas whose nearest postcode lies in the Oldbury BUA: Langley, Langley Green, Brandhall, Causeway Green, Titford, Rood End, Rounds Green (Tividale, Brades Village, Portway and Whiteheath Gate resolve to Rowley Regis; Warley Woods and Londonderry to Smethwick: not claimed). England national curriculum.',
    localProject: 'Overpass: named highway ways in the Sandwell admin_level 8 area, 10,341 ways (base 2026-09-30T18:14Z). OS Code-Point Open 2026.3.0: 6,906 Sandwell postcodes (PQ<90); per district DY4 935, B70 834, B69 729, B71 687, B68 588, B66 563, WS10 546, B67 523, B65 506, B64 469, B43 373, WS5 126. 9,485 road ways kept; district of nearest postcode to way centre (median 36.5 m); same-name ways chained within 400 m -> 3,815 streets from 3,450 names; 263 names on 2+ streets (628 streets); 234 names spanning 2+ districts (High Street 8 streets in B64, B65, B66, B68, B70, DY4). 20 runs x 20,000 uniform random street questions. Cache key -> hit rate, wrong share of all answers: exact name 82.8%, 7.90% (7.66-8.29); name minus road type 86.7%, 23.39%; first word 88.9%, 31.15%; name + ward 81.2%, 0.11% (0.07-0.17). Lesson family: semantic caching for agents, cache key design.',
    requiredMentions: [
      '45,180',
      'Langley Green',
      'Brandhall',
      'Causeway Green',
      'Titford',
      'Rounds Green',
      'semantic cache',
      'cache key',
      '3,815',
      '7.90%',
      '0.11%'
    ],
    sources: [
      { claim: 'OpenStreetMap highway names (ODbL) fetched through the Overpass API for the Sandwell boundary.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'OS Code-Point Open, dataset version 2026.3.0: postcode positions, districts and wards.', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest postcodes for Sandwell.', url: 'https://api.postcodes.io/places?q=Brandhall' }
    ],
    rejectedClaims: [
      'Which AI products use semantic caching: none named.',
      'That the 400 m rule finds true separate streets: stated as a simplification.',
      'Tividale and Brades Village as parts of Oldbury: their nearest postcodes resolve to Rowley Regis; not claimed.',
      'That Newport is ambiguous is general knowledge used as an illustration; no data claim made.',
      'Sum of census figures: none added.',
      'Named schools and term dates: none named.',
      'Sterling prices: none.'
    ]
  }
};
