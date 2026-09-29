'use strict';
// Margate (cg- town page, UK cluster Phase 8, towns band A, row 391). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: what should a program forget when
// its memory is full? (cache eviction: FIFO, LRU, frequency, and the perfect-hindsight optimum).
// Anchor (read raw 29 September 2026): Project Gutenberg 1321, T. S. Eliot, The Waste Land (US public domain; still in
// UK copyright, so only three words are quoted and no text is reproduced): line 300 begins "On Margate Sands." Our
// stream is the poem body (Gutenberg lines 64 to 555, notes excluded), lower-cased words: 3,071 words, 1,168 different;
// "the" 205 times, "and" 107.
// Our run (scratchpad mgt/cache.py): every word is a request to a cache of k slots; a hit is a word already held.
// Largest possible hit rate (every repeat) 62.0%. Hit rates FIFO / LRU / most-frequent-so-far / optimal (Belady, evict the
// word needed furthest in future): k=8 11.5 / 12.3 / 20.2 / 31.1; k=16 18.3 / 20.3 / 26.3 / 40.3; k=32 26.1 / 29.0 / 32.9 /
// 48.1; k=64 34.1 / 38.1 / 41.5 / 54.1; k=128 42.0 / 45.9 / 48.7 / 59.5; k=256 48.9 / 51.8 / 53.9 / 62.0.
// Lesson family: cache eviction policies, LRU, Belady's optimal as an upper bound, workload-dependence. Screened: LRU,
// Belady, cache hit 0 hits in town pages (DSA course syllabi mention LRU caches); London's hub list cites caching pages
// in other clusters (Ibri, Apeldoorn, Haarlem), not eviction policies.
// Place facts: Thanet (E07000114) TS001 140,587. ONS 2021 BUAs (published): Margate 63,320; Ramsgate 42,030; Broadstairs
// 25,775. postcodes.io (Thanet) suburban areas: Cliftonville, Garlinge, Westbrook, Northdown.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'MARGATE', label: 'Margate', blurb: 'Online coding and Python classes for Margate, with a caching project that runs the words of The Waste Land through four ways of deciding what to forget.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-margate',
  code: 'mgt',
  accent: '#6B3410',
  accentRationale: 'Margate: a deep burnt umber (7.97:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Margate',
    eyebrow: 'Margate, Thanet, Kent, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Kent' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Kent', href: '/coding-classes-in-kent' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Margate, England',
  title: 'Online Coding and Python Classes in Margate | AI, 6 to 67',
  description: 'Online coding, Python, AI and vibe coding classes for Margate, Cliftonville, Westbrook and Garlinge learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Margate, and a caching project that feeds the words of The Waste Land through four eviction rules.',
  twitterDescription: 'Margate online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Margate',
    description: 'Online coding, Python, AI, vibe coding and mathematics for children, teenagers and adults in Margate and across Thanet, taught live with thinking skills first.'
  },

  h1: 'Online coding and Python classes in Margate',
  capsuleQ: 'Which are the best online coding and Python classes in Margate?',
  capsule: 'The ONS gives the Margate built-up area 63,320 people at the 2021 census, with Ramsgate at 42,030 and Broadstairs at 25,775 in the same district of Thanet, whose total was 140,587. Across Cliftonville, Westbrook, Garlinge and the rest of Thanet, anyone between 6 and 67 can study coding, Python, AI, vibe coding and maths on a live video call with a tutor in India, solo or as one of five to ten learners at the same stage. We teach how to think before any tool, so that AI output is something the learner can judge. There is no charge for the first lesson, which ends with our course advice. The Margate project asks a question every fast program has to answer: when memory is full, what should it forget? Carrying on after the trial costs USD 100 per month for group tuition or USD 150 per month for private tuition.',
  lead: 'Programs keep copies of things they expect to need again, a trick called caching. Web browsers do it, databases do it, and AI systems do it constantly, from reusing earlier parts of a conversation to storing answers from tools. Every cache fills up eventually, and then it must decide what to throw away. This project tests four rules for that decision in Python, using a stream of words from The Waste Land, the poem by T. S. Eliot whose line 300 begins "On Margate Sands." Each word is treated as a request; the cache remembers a fixed number of words; and the question is how often the next word is already there.',
  wa: 'Hello Modern Age Coders, we would like a free coding or Python lesson for a learner in Margate.',

  picks: {
    eyebrow: 'Margate course picks',
    h2: 'Python, data structures and AI courses for Margate',
    intro: 'Choose by age and interest; the first live lesson of each is free, and there is nothing to pay when you book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: memory games, patterns and deciding what to keep.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the word-cache experiment.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 17', note: 'Data structures and algorithms for teenagers, where caches like LRU are built from scratch.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Students and adults', note: 'Algorithms and data structures in depth, including cache design for interviews and real systems.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Margate and Thanet',
      h2: 'Margate, Ramsgate and Broadstairs',
      intro: 'ONS 2021 census counts for three built-up areas in Thanet, and the suburbs recorded around Margate.',
      body: [
        { kind: 'table', caption: 'Margate, Ramsgate and Broadstairs, ONS 2021 published counts', head: ['Built-up area', 'People (2021)'], rows: [
          ['Margate', '63,320'],
          ['Ramsgate', '42,030'],
          ['Broadstairs', '25,775']
        ] },
        { kind: 'p', text: 'These ONS figures are printed as released rather than added up; Thanet\'s district total of 140,587 comes from a separate census table. Cliftonville, Westbrook, Garlinge and Northdown are all recorded as suburban areas in Thanet. Thanet schools teach England\'s national curriculum; send the holiday dates and we timetable around them.' },
        { kind: 'callout', h3: 'Kent, the region and our approach', p: 'Wider options are on <a class="cg-inline-link" href="/coding-classes-in-kent">coding classes in Kent</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">the South East England page</a>. Why reasoning comes before prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Margate project',
      h2: 'What should a cache forget? Four rules tested on The Waste Land',
      intro: 'Stream 3,071 words through a small memory and count how often each rule already has the next word.',
      body: [
        { kind: 'p', text: 'The learner takes the Project Gutenberg text of The Waste Land, keeps only the poem itself, and turns it into a stream of 3,071 lower-case words, 1,168 of them different. Words that repeat are the chances for a cache to help: at most 62.0% of the stream could ever be a hit, since each word\'s first appearance has to be a miss. Four rules decide what to forget when the cache is full. First in, first out (FIFO) drops the oldest word. Least recently used (LRU) drops the word unused for longest. A frequency rule drops the word seen least often so far. And the optimal rule, known as Belady\'s rule, drops the word that will next be needed furthest in the future, which is only possible here because the whole poem is known in advance.' },
        { kind: 'table', caption: 'Share of words already in the cache, by cache size and rule, our Python run on The Waste Land, 29 September 2026', head: ['Cache size (words)', 'FIFO', 'LRU', 'Most frequent', 'Optimal'], rows: [
          ['8', '11.5%', '12.3%', '20.2%', '31.1%'],
          ['32', '26.1%', '29.0%', '32.9%', '48.1%'],
          ['128', '42.0%', '45.9%', '48.7%', '59.5%'],
          ['256', '48.9%', '51.8%', '53.9%', '62.0%']
        ] },
        { kind: 'p', text: 'LRU beats FIFO at every size here, a common reason it is taught first: remembering what was used recently is often a good guess about what will be used next. On this poem, though, the frequency rule beats LRU too, because a few small words dominate. "The" appears 205 times and "and" 107, so a rule that clings to common words keeps winning. The optimal column is not a practical rule, since no real program can see the future, but it shows how much room is left: at 32 words, the ceiling for any rule is 48.1%, against 29.0% for LRU.' },
        { kind: 'p', text: 'The lesson is that no eviction rule wins everywhere. A different stream, a web server\'s requests or an AI agent\'s tool calls, could reverse the order of FIFO, LRU and frequency. Good engineers measure on their own workload and compare with the optimal bound before choosing.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play a memory game with only three cards allowed on the table and invent a rule for which card to give back.' },
          { h3: 'Ages 11 to 15', p: 'Build a FIFO cache with a Python list and count its hits on the first page of a poem.' },
          { h3: 'Ages 15 and up', p: 'Implement LRU with an ordered dictionary, add the optimal rule and compare all four.' }
        ] },
        { kind: 'callout', h3: 'Eliot\'s poem, our cache', p: 'The text is the Project Gutenberg edition of The Waste Land by T. S. Eliot; only three words are quoted here. The word stream, the caches and every hit rate are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Caching and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Remembering and forgetting are design choices inside every AI tool.',
      body: [
        { kind: 'table', caption: 'From the Margate word cache to AI systems', head: ['In the poem experiment', 'In AI tools and agents'], rows: [
          ['LRU beat FIFO at every size', 'Recent context is usually the most useful'],
          ['Frequency beat LRU on this poem', 'The right rule depends on the workload'],
          ['Optimal showed the gap to close', 'Compare against an upper bound, not just a rival'],
          ['At most 62.0% could ever hit', 'Some requests are always new and need real work'],
          ['A bigger cache helped every rule', 'More memory costs more, so measure the gain']
        ] },
        { kind: 'p', text: 'AI assistants and agents cache all the time: earlier parts of a long conversation, results from tools, and frequently used documents. What they keep and what they drop changes both their answers and their cost. Margate learners who vibe code, describing a program for an AI to write, request a cache and then inspect the eviction rule it chose and test it on their own data. Building agents is the next step once Python is comfortable, generally for older teens and adults; Copilot Studio agents are covered in private lessons. The course path lives on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our AI agents page for UK students</a>; the thinking is in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no link with Project Gutenberg, the estate of T. S. Eliot, the ONS or postcodes.io. Only openly published material was used, and responsibility for the caches and any errors is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From memory games to cache design',
    intro: 'The school year is a first hint, and the free lesson finds the real level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Memory games, patterns and rules for choosing.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps made with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and data structures', p: 'Lists, dictionaries, caches and algorithms beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Adults', h3: 'Algorithms and systems', p: 'Data structures, performance and AI agents in Python.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and memory',
    h2: 'What is an LRU cache, and why do AI systems need caching?',
    intro: 'An LRU cache throws away whatever was used least recently when it runs out of room; AI systems cache to save time and cost.',
    p1: 'On the Margate word stream LRU beat first-in-first-out at every cache size, but a frequency rule beat LRU, and neither came close to the optimal rule that knows the future.',
    p2: 'Learners who have built all four know to test a cache on real traffic, which is how AI engineers tune the memory their systems rely on.',
    closer: 'A Margate teenager who understands caching can reason about speed and cost in any AI tool, and that is a strong reason to learn Python in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Cliftonville to Garlinge, online',
    intro: 'A computer and a broadband link steady enough for video are all a Thanet home needs.',
    cells: [
      { h3: 'Learners do the coding', p: 'The student writes, prompts and runs every program, and the tutor follows the shared screen with questions.' },
      { h3: 'Placed by the trial', p: 'What the learner shows in the free lesson sets the first topic; any exam board is noted.' },
      { h3: 'First lesson free', p: 'No fee for lesson one, which ends with a recommended course.' },
      { h3: 'Groups by level', p: 'Five to ten UK learners at about the same stage in each class.' },
      { h3: 'Two a week', p: 'Paused during school holidays.' },
      { h3: 'Fixed slot', p: 'Tutors adjust for the UK clock changes, so the lesson hour stays constant.' }
    ],
    spec: { title: 'Why the classes are online', p: 'Five learners at one stage who are all free on the same evening rarely live near each other. Online, they can still share a class.' }
  },

  fees: {
    h2: 'Margate fees',
    intro: 'Margate learners pay our international rate, which covers every country except India.',
    first: 'A full first lesson at no cost, with our course suggestion at the end.',
    group: 'About eight live group lessons each month.',
    private: 'About eight live one-to-one lessons each month.',
    closer: 'Everything is priced in US dollars rather than sterling. Invoicing begins after the trial, with a course and weekly time agreed; our pricing page covers holidays away, missed lessons and swapping format.'
  },

  reviewsH2: 'Google reviews from Kent parents and learners Britain-wide',

  book: {
    h2: 'Book a free Margate lesson',
    intro: 'An age or year group and one favourite hobby is all we need. A trial could be a memory-game puzzle, a Scratch game built with AI help, a first Python program, or a tiny cache of their own.',
    success: 'Thank you. Your Margate request has arrived.'
  },

  faq: {
    h2: 'Margate questions',
    intro: 'Caching, the poem project, Python, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Margate?', a: 'The ONS gives 63,320 for the Margate built-up area at the 2021 census.' },
      { q: 'Can Margate learners take online Python classes?', a: 'Yes, live on video, for anyone aged 6 to 67 in Margate and across Thanet.' },
      { q: 'What is caching in programming?', a: 'Keeping a copy of something a program expects to need again, so the next request can be answered without redoing the work.' },
      { q: 'What is the Margate project?', a: 'Learners stream the words of The Waste Land through a small cache and compare four rules for what to forget: FIFO, LRU, most frequent and the optimal rule.' },
      { q: 'Is vibe coding part of the courses?', a: 'Yes, for all ages, with the learner planning and testing whatever the AI writes.' },
      { q: 'Are AI agents taught too?', a: 'When their Python is solid, most often in the late teens or adulthood; Copilot Studio agent lessons are private.' },
      { q: 'Are there in-person lessons?', a: 'No, all lessons are live online.' },
      { q: 'Do you teach GCSE and A level topics?', a: 'We cover computer science and maths at both levels, focusing on understanding; no grade is promised.' },
      { q: 'What do lessons cost?', a: 'Lesson one costs nothing. Continuing lessons are USD 100 a month in a class, or USD 150 a month with your own tutor.' },
      { q: 'Do lessons pause in school holidays?', a: 'Yes. Send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Kent and South East pages',
    html: 'Elsewhere in Kent, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-dartford">Dartford</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-rochester">Rochester</a> have pages and projects of their own, and grammar-school families can see <a class="cg-inline-link" href="/11-plus-maths-tuition-kent">11 plus maths tuition in Kent</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Margate and Kent',
  footerPlaces: [
    { href: '/coding-classes-in-kent', label: 'Kent' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-mgt .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-mgt .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-mgt .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-mgt .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mgt .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.019em; }
.cg-root.cg-mgt .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-mgt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mgt .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-mgt .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-mgt .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Thanet (E07000114), Census 2021 TS001 usual residents 140,587. ONS 2021 BUAs (published): Margate 63,320; Ramsgate 42,030; Broadstairs 25,775. postcodes.io (Thanet) suburban areas: Cliftonville, Garlinge, Westbrook, Northdown. Project Gutenberg 1321, T. S. Eliot, The Waste Land: line 300 begins "On Margate Sands."',
    localProject: 'Cache eviction on the word stream of The Waste Land (3,071 words, 1,168 distinct; "the" 205, "and" 107). Max hit rate 62.0%. FIFO / LRU / most frequent / optimal: k=8 11.5 / 12.3 / 20.2 / 31.1; k=32 26.1 / 29.0 / 32.9 / 48.1; k=128 42.0 / 45.9 / 48.7 / 59.5; k=256 48.9 / 51.8 / 53.9 / 62.0. Lesson family: cache eviction, LRU vs FIFO vs frequency, Belady optimal bound, workload dependence.',
    requiredMentions: [
      '63,320',
      '140,587',
      'Ramsgate',
      'Broadstairs',
      'Cliftonville',
      'Garlinge',
      'Westbrook',
      'Waste Land',
      'LRU',
      '3,071'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations and TS001 usual residents via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Project Gutenberg, T. S. Eliot, The Waste Land (ebook 1321).', url: 'https://www.gutenberg.org/ebooks/1321' },
      { claim: 'postcodes.io places: suburban areas in Thanet.', url: 'https://api.postcodes.io/places?q=Cliftonville' }
    ],
    rejectedClaims: [
      'When or where Eliot wrote the poem: not read from a source; not claimed.',
      'Seaside, arts or resort history of Margate: not claimed.',
      'Reproducing the poem: not done; it remains in UK copyright; three words quoted.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
