'use strict';
// Southport (cg- town page, UK cluster Phase 8, towns band A, row 389). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how do AI models like ChatGPT break
// words into tokens, and what do those tokens really capture? (byte-pair encoding trained on real place names).
// Data (read 29 September 2026): ONS Census 2021 built-up areas (scratchpad p7/bua2021_1c1d.json), 6,406 in England;
// bracketed district labels removed, names lower-cased and split into words at spaces and hyphens.
// Our run (scratchpad stp/bpe.py): byte-pair encoding trained on a random 80% (5,124 names, seed 2026), tested on the
// other 1,282. "_" marks the end of a word. First merges: n_, on_, ton_, e_, or, d_, y_, ha, in, st, le, er. Average
// tokens per unseen name (word ends included): 0 merges 11.39; 50: 7.01; 200: 5.00; 500: 3.95. Encodings at 200 / 500
// merges: southport sou|th|p|or|t_ / south|port_; birkdale bi|r|k|d|al|e_ / bir|k|dale_; ainsdale a|in|s|d|al|e_ /
// a|in|s|dale_; churchtown ch|ur|ch|t|own_ / ch|ur|ch|town_; newcastle-under-lyme (500) new|castle_|und|er_|ly|me_.
// Early whole-ending tokens: ton_, ham_, ley_, ford_, ington_, ston_, by_. Last words ending in: ton 1,049; ham 354; ley 309;
// ford 201; field 147; by 123; worth 107; bury 96; borough 54; port 14. Every test name could be encoded (no unknown
// characters).
// Lesson family: tokenization by byte-pair encoding (learned merges), compression vs meaning, rare words split more.
// Screened: byte pair / BPE 0 hits; Veenendaal owns a greedy longest-match toy tokenizer; Canterbury owns Heaps' law.
// Graph colouring was tried first and dropped: Newcastle upon Tyne owns ward colouring (ledger miss, now logged).
// Place facts: Sefton (E08000014) TS001 279,233. ONS 2021 BUAs (published): Southport 94,440; Formby 22,890; Maghull
// 20,370. postcodes.io (Sefton) suburban areas: Birkdale, Ainsdale, Churchtown, Crossens, Hillside, Blowick, Marshside,
// High Park, Woodvale.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'SOUTHPORT', label: 'Southport', blurb: 'Coding and AI classes for Southport, with a project that trains the tokenizer idea behind ChatGPT on every town name in England.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-southport',
  code: 'spt',
  accent: '#6B256B',
  accentRationale: 'Southport: a deep heather plum (8.05:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Southport',
    eyebrow: 'Southport, Merseyside, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Merseyside' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Merseyside', href: '/coding-classes-in-merseyside' },
    { label: 'Liverpool', href: '/best-coding-class-in-liverpool' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Southport, England',
  title: 'Coding and AI Classes in Southport | Python, Vibe Coding, 6-67',
  description: 'Online coding, AI, Python and vibe coding classes for Southport, Birkdale, Ainsdale and Formby learners aged 6 to 67, live online. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Southport, and a Python project that trains a ChatGPT-style tokenizer on every town name in England.',
  twitterDescription: 'Southport coding, AI, Python and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Southport',
    description: 'Online coding, AI, Python, vibe coding and mathematics for children, teenagers and adults in Southport and Sefton, taught live with thinking skills first.'
  },

  h1: 'Coding and AI classes in Southport',
  capsuleQ: 'Where can Southport learners find the best coding and AI classes?',
  capsule: 'At the 2021 census, the ONS counted 94,440 people in the Southport built-up area, in a Sefton borough of 279,233 that also includes Formby and Maghull; Birkdale, Ainsdale, Churchtown and Crossens are among Southport\'s recorded suburbs. Any Sefton learner from 6 to 67 can study coding, AI, Python, vibe coding and maths over a live video link with our India-based tutors, as a private pupil or one of five to ten classmates of similar ability. Thinking skills come first in every course, so AI is a tool the learner understands rather than a black box. We charge nothing for the first lesson and close it with a recommended course. The Southport project opens up the very first step every chatbot takes: cutting text into tokens. Regular lessons then run at USD 100 per month in a shared class or USD 150 per month with a personal tutor.',
  lead: 'Before a model like ChatGPT reads a single word of your question, a program called a tokenizer chops the text into pieces called tokens. Many AI models build their tokenizers with a method called byte-pair encoding, which learns its pieces from data by repeatedly gluing together the pair of symbols that appears most often. This project trains one from scratch in Python on every built-up area name in England, 6,406 of them, and watches it discover English place-name patterns on its own. It learns "ton" almost immediately, splits Southport neatly into "south" and "port", and then chops Ainsdale into four pieces that mean nothing at all, which is the most useful lesson of the lot.',
  wa: 'Hello Modern Age Coders, could a Southport learner book a free coding or AI lesson?',

  picks: {
    eyebrow: 'Southport course picks',
    h2: 'Southport courses in thinking, vibe coding and AI',
    intro: 'Pick according to age and interest. A free live lesson begins every course, with no card taken to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: word patterns, codes and spotting the pieces inside names.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch word games, then apps built by describing them to an AI and testing them.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'How AI models read and learn, in Python, including training this tokenizer.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Tokens, embeddings, language models and agents, explained from the inside.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Southport and Sefton',
      h2: 'Southport, Formby and Maghull',
      intro: 'Census counts for three built-up areas in Sefton, and the suburbs recorded around Southport.',
      body: [
        { kind: 'table', caption: 'Southport, Formby and Maghull, 2021 census counts published by the ONS', head: ['Built-up area', 'People (2021)'], rows: [
          ['Southport', '94,440'],
          ['Formby', '22,890'],
          ['Maghull', '20,370']
        ] },
        { kind: 'p', text: 'Each of these is a separate ONS figure, shown as published; the Sefton borough count of 279,233 comes from its own census table. Birkdale, Ainsdale, Churchtown, Crossens, Hillside, Blowick, Marshside, High Park and Woodvale are all recorded as suburban areas in Sefton. Schools here teach the national curriculum for England, so tell us the holiday weeks and lessons will skip them.' },
        { kind: 'callout', h3: 'Merseyside, the North West and how we teach', p: 'For the wider area see <a class="cg-inline-link" href="/coding-classes-in-merseyside">coding classes in Merseyside</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>. Our case for thinking before prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Southport project',
      h2: 'How ChatGPT-style tokenizers learn: byte-pair encoding on England\'s town names',
      intro: 'Train a tokenizer on 5,124 names, test it on 1,282 it has never seen, and read what its tokens do and do not capture.',
      body: [
        { kind: 'p', text: 'The learner takes the ONS list of built-up areas in England from the 2021 census, removes the bracketed district labels, and splits each name into words. Every word starts as a row of single letters with an end-of-word marker, written here as an underscore. Byte-pair encoding then counts every pair of neighbouring symbols across all the names, glues the most common pair into a new single symbol, and repeats. Each glue step is called a merge, and the list of merges is the tokenizer. Four names in five are used for training and the rest are kept back for testing.' },
        { kind: 'p', text: 'The first merges read like a lesson in English place names: "n" at the end of a word, then "on" at the end, then "ton" at the end, all within the first three steps. That is no accident. Of the 6,406 names, 1,049 end in "ton", far more than any other ending we counted: "ham" ends 354, "ley" 309, "ford" 201, "field" 147 and "port" just 14. Soon the tokenizer has whole endings such as "ham", "ley", "ford", "ington" and "ston" as single tokens.' },
        { kind: 'table', caption: 'How many tokens an unseen English place name needs, on average, after each number of merges, our Python run, 29 September 2026', head: ['Merges learned', 'Tokens per unseen name'], rows: [
          ['0 (single letters and word ends)', '11.39'],
          ['50', '7.01'],
          ['200', '5.00'],
          ['500', '3.95']
        ] },
        { kind: 'table', caption: 'Local names cut into tokens after 200 and after 500 merges (| separates tokens, _ ends a word)', head: ['Name', '200 merges', '500 merges'], rows: [
          ['Southport', 'sou|th|p|or|t_', 'south|port_'],
          ['Birkdale', 'bi|r|k|d|al|e_', 'bir|k|dale_'],
          ['Ainsdale', 'a|in|s|d|al|e_', 'a|in|s|dale_'],
          ['Churchtown', 'ch|ur|ch|t|own_', 'ch|ur|ch|town_']
        ] },
        { kind: 'p', text: 'More merges mean fewer, bigger tokens: an unseen name shrinks from 11.39 symbols to 3.95 tokens, which is why tokenizers exist, since shorter sequences are cheaper for a model to process. And because every single letter stays in the vocabulary, any name can still be written down, even one the tokenizer has never met. But look at the pieces. After 500 merges, Southport splits into "south" and "port", which happens to match its meaning. Ainsdale becomes "a", "in", "s" and "dale", and Churchtown "ch", "ur", "ch" and "town". The tokenizer knows nothing about meaning; it only knows which letters are common together, and a rarer word simply gets cut into more pieces.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Collect local street and town names and hunt for the endings that repeat, like "ton" and "dale".' },
          { h3: 'Ages 11 to 15', p: 'Count letter pairs across a list of names in Python and make the first few merges by hand.' },
          { h3: 'Ages 15 and up', p: 'Write the full byte-pair encoder, test it on unseen names and measure tokens per name.' }
        ] },
        { kind: 'callout', h3: 'ONS names, our tokenizer', p: 'The place names are from the Office for National Statistics 2021 census built-up area tables. The tokenizer, the merges, the counts and the examples are our own work, and real AI companies\' tokenizers are trained on far more text.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Tokens and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'What reaches the model is tokens, never your words as typed.',
      body: [
        { kind: 'table', caption: 'From Southport\'s tokens to the AI tools you use', head: ['In the tokenizer project', 'In ChatGPT-style models and agents'], rows: [
          ['"ton" was learned in three merges', 'Common patterns become single tokens'],
          ['Ainsdale split into four pieces', 'Rare words and names use more tokens'],
          ['Pieces follow frequency, not meaning', 'Tokens are not the same as words or ideas'],
          ['500 merges cut names to 3.95 tokens', 'Usage and limits are often counted in tokens'],
          ['Every letter kept, so nothing is unreadable', 'Unusual text still works, just less efficiently']
        ] },
        { kind: 'p', text: 'Knowing about tokens explains several everyday puzzles with AI tools: why prices and limits are quoted in tokens, why a long local name can cost more than a common word, and one reason models sometimes stumble over spelling or counting letters, since they see chunks rather than letters. Vibe coding, describing a program and letting an AI write it, goes better once you know this: Southport learners keep their prompts plain and double-check anything the AI does letter by letter. AI agents, which read tools\' output as tokens too, follow the same rules. Agent building opens up to older teens and adults with confident Python, and Copilot Studio agents are always taught privately. For the full route, visit <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents course for students across the UK</a>, and for our reasons, <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Office for National Statistics, postcodes.io or any AI company. Their data and ideas made this project possible; the tokenizer and any flaws in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From word patterns to tokenizers',
    intro: 'The school year is our starting guess, and the free lesson confirms the real level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Word patterns, codes and careful counting.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Word games and apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and language AI', p: 'Text, tokens and simple language models alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Inside language models', p: 'Tokenizers, embeddings, models and agents, built in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and tokens',
    h2: 'What is a token in AI, and why does it matter?',
    intro: 'A token is a chunk of text, often part of a word, that a language model reads as one unit.',
    p1: 'In Southport\'s project a tokenizer trained on English place names learned "ton", "ham" and "ford" as tokens by itself, and cut rarer names such as Ainsdale into several meaningless pieces.',
    p2: 'Learners who have built one understand why AI tools count tokens, why unusual words cost more and why letter-level questions can trip a model up.',
    closer: 'Understanding how models read text helps Southport teenagers prompt better and catch more errors, and that makes 2026 a good year to learn coding.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Birkdale to Churchtown, online',
    intro: 'Bring a laptop or desktop and a broadband line fit for video calls.',
    cells: [
      { h3: 'Learners at the keyboard', p: 'Students write, prompt and run each program themselves while the tutor follows on screen and asks questions.' },
      { h3: 'Level from the trial', p: 'A learner\'s first topic comes from what they show in the free session, not from their year; we log any exam board.' },
      { h3: 'First lesson free', p: 'The opening lesson costs nothing and ends with our suggestion.' },
      { h3: 'Matched groups', p: 'Classes bring together five to ten British learners at one stage.' },
      { h3: 'Two a week', p: 'Paused during school holidays.' },
      { h3: 'Stable times', p: 'Tutors shift with the UK clocks, so your lesson time holds.' }
    ],
    spec: { title: 'Why the classes are online', p: 'Five learners at one level, all free on the same evening, rarely live near each other. Online, they can learn side by side anyway.' }
  },

  fees: {
    h2: 'Southport fees',
    intro: 'For Southport, as for every country bar India, our international prices apply.',
    first: 'A full lesson free to start, finishing with a course suggestion.',
    group: 'About eight live group lessons a month.',
    private: 'About eight live private lessons a month.',
    closer: 'We price in US dollars rather than sterling. Nothing is billed until the trial has settled a course and a lesson time, and the pricing page covers holidays away, missed sessions and switching format.'
  },

  reviewsH2: 'Google reviews: Merseyside households and families UK-wide',

  book: {
    h2: 'Book a free Southport lesson',
    intro: 'Just tell us an age or year group and a favourite pastime. For a trial we might crack a word-pattern puzzle, build a Scratch word game alongside an AI, try first steps in Python, or tokenize the names of nearby streets.',
    success: 'Thank you. Your Southport request is in.'
  },

  faq: {
    h2: 'Southport questions',
    intro: 'Tokens, the tokenizer project, vibe coding and the practical side.',
    items: [
      { q: 'What is the population of Southport?', a: 'The ONS gives 94,440 for the Southport built-up area at the 2021 census.' },
      { q: 'Do you offer coding and AI classes in Southport?', a: 'We do, over live video, for anyone between 6 and 67 in Southport, Formby, Maghull or elsewhere in Sefton.' },
      { q: 'What is byte-pair encoding?', a: 'A way of building a tokenizer by repeatedly merging the most common pair of neighbouring symbols in a body of text, until common chunks become single tokens.' },
      { q: 'What is the Southport project?', a: 'Learners train a byte-pair tokenizer on all 6,406 built-up area names in England, test it on names it has not seen and see how it cuts Southport, Birkdale and Ainsdale into tokens.' },
      { q: 'Can Southport learners try vibe coding?', a: 'Yes, from primary age upwards: the learner decides what to make, an AI drafts it, and the learner tests it.' },
      { q: 'Is there an AI agents course?', a: 'Python comes first, so agents usually start in the late teens or for adults; Copilot Studio work is private tuition.' },
      { q: 'Is there a Southport classroom?', a: 'No; all teaching happens online.' },
      { q: 'Can exam-year students get support?', a: 'GCSE and A level computer science and maths are both covered, taught for understanding; grades are not promised.' },
      { q: 'What are the fees?', a: 'The opening lesson is free. Continuing costs USD 100 monthly in a group, or USD 150 monthly one-to-one.' },
      { q: 'Do lessons stop for school holidays?', a: 'Yes. Send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Merseyside and North West pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-birkenhead">Birkenhead</a> have pages and projects of their own, as does <a class="cg-inline-link" href="/online-coding-and-python-classes-in-wigan">Wigan</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Southport and Merseyside',
  footerPlaces: [
    { href: '/coding-classes-in-merseyside', label: 'Merseyside' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-spt .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-spt .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-spt .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-spt .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-spt .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.02em; }
.cg-root.cg-spt .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-spt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-spt .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-spt .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-spt .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Sefton (E08000014), Census 2021 TS001 usual residents 279,233. ONS 2021 BUAs (published): Southport 94,440; Formby 22,890; Maghull 20,370. postcodes.io (Sefton) suburban areas: Birkdale, Ainsdale, Churchtown, Crossens, Hillside, Blowick, Marshside, High Park, Woodvale.',
    localProject: 'Byte-pair encoding on 6,406 England BUA names (train 5,124, test 1,282). First merges n_, on_, ton_. Tokens per unseen name: 0 merges 11.39; 50: 7.01; 200: 5.00; 500: 3.95. Southport south|port_ (500); Ainsdale a|in|s|dale_; Birkdale bir|k|dale_; Churchtown ch|ur|ch|town_. Endings: ton 1,049; ham 354; ley 309; ford 201; field 147; port 14. Lesson family: tokenization by BPE, compression vs meaning, rare words split more.',
    requiredMentions: [
      '94,440',
      '279,233',
      'Formby',
      'Maghull',
      'Birkdale',
      'Ainsdale',
      'Churchtown',
      'Crossens',
      'byte-pair encoding',
      '1,049'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area names and populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Census 2021 TS001 usual residents for Sefton, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas in Sefton.', url: 'https://api.postcodes.io/places?q=Birkdale' }
    ],
    rejectedClaims: [
      'Resort, pier or seaside history: not read from a source; not claimed.',
      'Which tokenizer any named AI product uses: not claimed; "many AI models" only.',
      'That tokenization fully explains letter-counting errors: stated as "one reason" only.',
      'Graph colouring of wards: tried first, dropped because Newcastle upon Tyne owns it.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
