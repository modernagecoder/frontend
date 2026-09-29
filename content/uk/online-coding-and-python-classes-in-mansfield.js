'use strict';
// Mansfield (cg- town page, UK cluster Phase 8, towns band A, row 379). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does a search box decide what
// you meant to type, and who loses when it guesses by popularity?
// Data (read 29 September 2026): ONS Census 2021 built-up areas table (cached as scratchpad p7/bua2021_1c1d.json):
// 6,406 built-up areas in England, every name unique (the ONS adds a bracketed district where names repeat, e.g.
// "Bilston (Wolverhampton)"). Published populations used as the prior: Mansfield 63,445; Mansfield Woodhouse 19,520;
// Forest Town 19,010; Market Warsop 6,975; Rainworth 7,985; Sutton in Ashfield 36,425; Kirkby-in-Ashfield 21,270.
// Our run (scratchpad mns/spell.py): candidates = real names one edit away (delete, insert, substitute, swap of
// neighbours) from the typed text, lower-cased. 3,000 one-edit typos, seed 7. Uniform choice of place: first candidate
// alphabetically 96.7% right, largest-population candidate 96.9%; the prior hurt 25 typos and helped 30 (hurt:
// "eloughton" meant Cloughton, 715, prior picks Loughton, 33,345). Population-weighted choice of place: alphabetical
// 96.1%, population prior 98.9%. More than one candidate: 3.9% (uniform), 5.6% (weighted). Typo that is itself another
// real place: 5 of 3,000 (uniform), 9 (weighted). Local tests: "mansfeild", "mansfiled", "mansfeld" -> Mansfield;
// "mansfield woodhose" -> Mansfield Woodhouse; "forrest town" -> Forest Town; "market warsup" -> Market Warsop;
// "kirkby in ashfeild" -> no candidate (official name has hyphens: three edits away) until hyphens are normalised.
// Lesson family: spelling correction with a population prior ("Did you mean"), accuracy by who is asking, false friends,
// normalisation. Screened: Scotland owns plain edit distance against 32 council names; Perth owns Soundex; Wolverhampton
// owns prefix tries; Dartford owns fuzzy quote matching.
// Place facts: Mansfield (E07000174) TS001 110,482. ONS 2021 BUAs inside the district (published): Mansfield 63,445;
// Mansfield Woodhouse 19,520; Market Warsop 6,975; Church Warsop 2,140; Meden Vale 2,095. Forest Town and Rainworth
// straddle the boundary; not tabled.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'MANSFIELD', label: 'Mansfield', blurb: 'Online coding and Python classes for Mansfield, with a project that builds a "Did you mean" spelling corrector on every town name in England.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-mansfield',
  code: 'mfd',
  accent: '#6B4F25',
  accentRationale: 'Mansfield: a warm sandstone brown (6.11:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Mansfield',
    eyebrow: 'Mansfield, Nottinghamshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Nottinghamshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-midlands', name: 'East Midlands' }],
  nav: [
    { label: 'Nottinghamshire', href: '/coding-classes-in-nottinghamshire' },
    { label: 'East Midlands', href: '/coding-and-ai-classes-in-east-midlands' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Mansfield, England',
  title: 'Online Coding and Python Classes in Mansfield | AI, 6 to 67',
  description: 'Online coding, Python, AI and vibe coding classes for Mansfield, Mansfield Woodhouse, Market Warsop and Forest Town learners aged 6 to 67. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Mansfield, and a project that builds a "Did you mean" spelling corrector on every town name in England.',
  twitterDescription: 'Mansfield online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Mansfield',
    description: 'Online coding, Python, AI, vibe coding and mathematics for children, teenagers and adults in Mansfield district, taught live with thinking skills first.'
  },

  h1: 'Online coding and Python classes in Mansfield',
  capsuleQ: 'Which are the best online coding and Python classes in Mansfield?',
  capsule: 'Mansfield district had 110,482 usual residents at the 2021 census, and the ONS gives the Mansfield built-up area 63,445, Mansfield Woodhouse 19,520 and Market Warsop 6,975. Six-year-olds, teenagers and adults up to 67 across the district study coding, Python, AI, vibe coding and maths with us live on camera, their India-based tutor teaching them alone or alongside five to ten others of similar ability. Every course starts with how to think, so that AI tools become something the learner can check rather than simply trust. The first lesson is free, and at the end we recommend a course. For Mansfield, learners build the feature behind every search box: a "Did you mean" spelling corrector, tested on all 6,406 built-up area names in England. Once the trial is done, fees run at USD 100 monthly in a class and USD 150 monthly for private tuition.',
  lead: 'Type "mansfeild" into a search box and it will quietly offer "Mansfield". That small "Did you mean" is one of the oldest tricks in computing, and it hides a real decision. When a typo sits one letter away from two different places, which should the program suggest? Many systems pick the more popular one, because more people search for it. This project builds a spelling corrector in Python for every one of the 6,406 built-up areas the ONS lists in England, tests it on 3,000 typos, and finds out exactly who gains and who loses when a program bets on popularity.',
  wa: 'Hello Modern Age Coders, can we have a free coding or Python lesson for a learner in Mansfield?',

  picks: {
    eyebrow: 'Mansfield course picks',
    h2: 'Mansfield picks for Python, thinking and AI',
    intro: 'Pick the course that suits the learner\'s age and passions. Each course opens with a live lesson that is free, and booking asks for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think programme: spotting patterns in mistakes and choosing between two good answers.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps described to an AI and tested by the learner.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects made with AI help, including the "Did you mean" corrector.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the first line to text processing, data and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Mansfield district',
      h2: 'Mansfield, Mansfield Woodhouse and the Warsops',
      intro: 'Published 2021 census counts for the built-up areas that sit inside the district.',
      body: [
        { kind: 'table', caption: 'Places wholly inside Mansfield district and their 2021 census populations (ONS)', head: ['Built-up area', 'People (2021)'], rows: [
          ['Mansfield', '63,445'],
          ['Mansfield Woodhouse', '19,520'],
          ['Market Warsop', '6,975'],
          ['Church Warsop', '2,140'],
          ['Meden Vale', '2,095']
        ] },
        { kind: 'p', text: 'Each row is an ONS figure in its own right, so we show them one by one and do not total them; the district count of 110,482 comes from a separate census table. Forest Town and Rainworth are left out of the table because their built-up areas cross into the neighbouring district. Nottinghamshire schools teach the national curriculum for England, and if you share your holiday dates we will leave those weeks free.' },
        { kind: 'callout', h3: 'County, region and our teaching aim', p: 'Other options across the county are on <a class="cg-inline-link" href="/coding-classes-in-nottinghamshire">coding classes in Nottinghamshire</a>, and the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">the East Midlands page</a>. Why learners reason before they prompt is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Mansfield project',
      h2: 'A "Did you mean" corrector for every town in England',
      intro: 'Find the real names one edit away from a typo, then decide which to suggest, and measure the cost of each choice.',
      body: [
        { kind: 'p', text: 'The learner starts with the ONS list of built-up areas in England from the 2021 census: 6,406 names, each with a population. Every name turns out to be unique, because the ONS adds a district in brackets where two places share a name. For any typed text, the program generates every string one edit away: one letter deleted, inserted or changed, or two neighbouring letters swapped. Any of those that is a real place becomes a candidate. "Mansfeild", "mansfiled" and "mansfeld" all lead to Mansfield; "mansfield woodhose" leads to Mansfield Woodhouse; "forrest town" to Forest Town; "market warsup" to Market Warsop.' },
        { kind: 'p', text: 'Usually there is only one candidate, but not always, and that is where the real design choice sits. The program can pick the first candidate alphabetically, which treats every place equally, or pick the candidate with the largest population, on the reasoning that more people are likely to be searching for it. To compare the two fairly, the learner makes 3,000 test typos with one random edit each, in two ways: once choosing the intended place completely at random, and once choosing it in proportion to population, which is closer to what real searches look like.' },
        { kind: 'table', caption: 'How often the corrector suggests the intended place, 3,000 one-edit typos each way, our Python run, 29 September 2026', head: ['Who is typing', 'First candidate alphabetically', 'Largest-population candidate'], rows: [
          ['Intended place chosen at random', '96.7%', '96.9%'],
          ['Intended place chosen in proportion to population', '96.1%', '98.9%'],
          ['Typos with more than one candidate (random / by population)', '3.9%', '5.6%']
        ] },
        { kind: 'p', text: 'The popularity rule looks like a clear win: on realistic searches it lifts accuracy from 96.1% to 98.9%. The first row tells a quieter story. When every place is equally likely to be the one somebody wants, the rule barely helps, 96.9% against 96.7%, because it fixes some typos and breaks others: it helped on 30 and hurt on 25. A typo of Cloughton, a village of 715 people, is corrected to Loughton, population 33,345, every single time. A handful of typos are impossible to fix at all: 5 of the first 3,000 turned out to be the exact name of a different real place.' },
        { kind: 'p', text: 'One local test fails completely. "Kirkby in ashfeild" finds no candidate, because the official name is Kirkby-in-Ashfield: two missing hyphens plus the swapped letters make three edits, beyond the program\'s reach. Treating hyphens and spaces as the same before comparing fixes it at once. Tidying text before matching, called normalisation, often matters as much as the clever part.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Spot the misspelt town names on a list and explain which letter went wrong.' },
          { h3: 'Ages 11 to 15', p: 'Write a Python function that lists every word one edit away from a typo.' },
          { h3: 'Ages 15 and up', p: 'Compare tie-breaking rules on thousands of test typos and report who each one fails.' }
        ] },
        { kind: 'callout', h3: 'ONS names, our corrector', p: 'The place names and populations come from the Office for National Statistics 2021 census tables for built-up areas. The corrector, the test typos and every percentage above are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Guessing what people mean',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Behind every chatbot reply sits a guess about what you meant.',
      body: [
        { kind: 'table', caption: 'From the Mansfield corrector to modern AI', head: ['In the spelling project', 'In AI tools and agents'], rows: [
          ['Popular places win ties', 'Common answers tend to win over rare ones'],
          ['98.9% on typical searches', 'A high average can hide a group it fails'],
          ['Cloughton always became Loughton', 'Check how a tool treats small or unusual cases'],
          ['Some typos were real places', 'Some mistakes cannot be detected from the text alone'],
          ['Hyphens broke an exact match', 'Tidy the input before trusting the matching']
        ] },
        { kind: 'p', text: 'Large language models make a far more sophisticated version of the same bet: when a request is unclear, they tend to lean towards the most common reading. Vibe coding hands the typing to an AI while the learner describes the goal; having built this corrector by hand, a Mansfield student asks straight away what the AI version does with rare names, then checks. AI agents go further, acting on their guesses across several steps, so a wrong "Did you mean" can quietly steer a whole task. Agents follow once Python is second nature, usually in the late teens or adulthood, and anything built in Copilot Studio is taught in private sessions. The <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents course outline for UK learners</a> explains that path, and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> explains why we insist on it.' },
        { kind: 'p', text: 'We are independent of the ONS: they publish the names and counts, and the corrector, with whatever flaws it has, is our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From spotting typos to writing correctors',
    intro: 'We start from the school year, then the free lesson shows where the learner really is.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Patterns, careful checking and choosing between two answers.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps made with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and text', p: 'Strings, search and testing alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Python, data and agents', p: 'Text processing, data work and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and guessing',
    h2: 'Is it still worth learning Python now that AI writes code?',
    intro: 'Yes, because someone still has to judge the guesses.',
    p1: 'An AI can write a spelling corrector in seconds. Deciding whether it should favour popular places, and noticing that Cloughton always loses, takes a person who understands what the code is doing.',
    p2: 'That is the skill our Mansfield learners practise: building something real, measuring it and asking who it fails, then using AI to go faster without losing control.',
    closer: 'A Mansfield teenager who can test an AI\'s guesses as well as write code has an edge in 2026, and that is the strongest argument for learning Python now.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Market Warsop to Mansfield Woodhouse, online',
    intro: 'Every home in the district with a computer and a working connection can join.',
    cells: [
      { h3: 'Hands on the keys', p: 'The learner writes, prompts and runs every program while the tutor watches the shared screen and asks questions.' },
      { h3: 'The trial sets the level', p: 'Year 3 or Year 13, the free lesson decides the starting point, and exam boards are recorded.' },
      { h3: 'Start for free', p: 'Lesson one has no fee and finishes with a recommended course.' },
      { h3: 'Matched classes', p: 'Five to ten UK learners at a similar stage in every group.' },
      { h3: 'Two a week', p: 'Paused in the school holidays.' },
      { h3: 'Fixed times', p: 'Tutors follow UK clock changes, so your lesson hour stays the same all year.' }
    ],
    spec: { title: 'Why we teach online', p: 'Five learners at one level who are free at one time seldom live in the same street. Online, they can still be classmates.' }
  },

  fees: {
    h2: 'Mansfield fees',
    intro: 'Mansfield pays our international rate, the same in every country apart from India.',
    first: 'The whole first lesson free, with a course suggestion at the end.',
    group: 'About eight live group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Everything is priced in US dollars, not pounds. The first bill comes only after the trial has fixed a course and a regular time, and the pricing page spells out holidays, missed lessons and moving between group and private.'
  },

  reviewsH2: 'Reviews left on Google by East Midlands households and others',

  book: {
    h2: 'Book a free Mansfield lesson',
    intro: 'Tell us roughly how old the learner is, or their year group, and a hobby. In the trial we could hunt deliberate typos, make a Scratch game with an AI assistant, write some first lines of Python, or start a pocket-sized spell checker.',
    success: 'Thank you. We have your Mansfield request.'
  },

  faq: {
    h2: 'Mansfield questions',
    intro: 'On the corrector project, starting Python, vibe coding, agents and fees.',
    items: [
      { q: 'What is the population of Mansfield?', a: 'The ONS gives 63,445 for the Mansfield built-up area at the 2021 census, and 110,482 usual residents for Mansfield district.' },
      { q: 'Can Mansfield learners take online Python classes?', a: 'Yes, all of it over live video, open to any Mansfield resident between 6 and 67.' },
      { q: 'What is a good age to start learning Python?', a: 'There is no single right age. In our courses younger children usually begin with Scratch and the how-to-think programme, then move to typed Python once reading and typing feel comfortable; the free lesson helps decide.' },
      { q: 'Is vibe coding on the menu?', a: 'It is, for every age group: the learner plans the program, lets an AI draft it, then tests each part.' },
      { q: 'When do learners start on AI agents?', a: 'After a solid start in Python, which for most people means the later teens or adulthood; Copilot Studio agent work is private tuition only.' },
      { q: 'What is the spelling corrector project?', a: 'Learners build a "Did you mean" feature for every built-up area name in England, test it on 3,000 typos and measure who a popularity rule helps and who it lets down.' },
      { q: 'Are there face-to-face lessons?', a: 'No, every class happens online.' },
      { q: 'Is there exam support for GCSE and A level?', a: 'Computer science and maths, yes. We work on real understanding and make no promises about grades.' },
      { q: 'What do lessons cost?', a: 'Lesson one costs nothing; regular lessons are USD 100 per month as part of a class or USD 150 per month on your own.' },
      { q: 'Do lessons pause for school holidays?', a: 'Yes. Send us the dates and we will skip those weeks.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Nottinghamshire and East Midlands pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-nottingham">Nottingham</a> has its own page and project, and so do <a class="cg-inline-link" href="/ai-and-programming-classes-in-chesterfield">Chesterfield</a> and <a class="cg-inline-link" href="/best-coding-class-in-derby">Derby</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every other area we cover.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Mansfield and Nottinghamshire',
  footerPlaces: [
    { href: '/coding-classes-in-nottinghamshire', label: 'Nottinghamshire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-mfd .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-mfd .cg-hero h1 { font-weight: 780; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-mfd .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-mfd .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mfd .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.019em; }
.cg-root.cg-mfd .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-mfd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mfd .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-mfd .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-mfd .cg-callout { border-left-width: 6px; border-radius: 0 9px 9px 0; }
`,

  dossier: {
    curriculumAuthority: 'Mansfield (E07000174), Census 2021 TS001 usual residents 110,482. ONS 2021 BUAs inside the district (published): Mansfield 63,445; Mansfield Woodhouse 19,520; Market Warsop 6,975; Church Warsop 2,140; Meden Vale 2,095. Forest Town (19,010) and Rainworth straddle; not tabled.',
    localProject: 'Spelling correction over 6,406 England BUA names (all unique), one-edit candidates. 3,000 typos each way: uniform alphabetical 96.7 / population prior 96.9 (hurt 25, helped 30; Cloughton 715 -> Loughton 33,345); population-weighted 96.1 / 98.9. Several candidates 3.9% / 5.6%; typo is another real place 5 / 9. "kirkby in ashfeild" no candidate until hyphens normalised. Lesson family: spelling correction with a population prior, fairness by who asks, false friends, normalisation.',
    requiredMentions: [
      '110,482',
      '63,445',
      '19,520',
      'Market Warsop',
      'Meden Vale',
      'Church Warsop',
      '6,406',
      'spelling corrector',
      'Did you mean',
      'Cloughton'
    ],
    sources: [
      { claim: 'ONS lookup of 2021 output areas to 2022 built-up areas, used to test which built-up areas cross the district boundary.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/OA21_BUA22_LAD22_RGN22_EW_LU/FeatureServer' },
      { claim: 'Census 2021 TS001 usual residents for Mansfield, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Census 2021 built-up area names and populations, ONS Open Geography portal.', url: 'https://geoportal.statistics.gov.uk/' }
    ],
    rejectedClaims: [
      'Mansfield Park: an Austen novel, not about this town; not mentioned.',
      'Mining or market history: not read from a source; not claimed.',
      'How commercial search engines rank suggestions: described only in general terms.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
