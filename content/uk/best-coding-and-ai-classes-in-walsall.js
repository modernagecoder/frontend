'use strict';
// Walsall (cg- town page, UK cluster Phase 8, towns band A, row 373). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does an AI turn words into
// numbers, and what does a word embedding really learn from one local book?
// Anchor (read raw 28 September 2026): Project Gutenberg 31675, Frederick Wm. Hackwood, "The Annals of Willenhall",
// transcribed from the 1908 Whitehead Bros. edition. Chapter XXVII: Willenhall is "the town of locks and keys"; "It was
// the Carpenter and Young invention of 1830"; "James Carpenter, of Willenhall" (patent No. 5,880, 18 January 1830);
// "Carpenter's lift-up lock".
// Our run (scratchpad wal/emb.py): Gutenberg header and footer removed, lowercased, letters only, single letters dropped:
// 59,238 tokens, 8,224 word types, 745 words used 10 or more times (the vocabulary); window 4 words either side.
// Raw co-occurrence counts, cosine: "lock" -> year, of, was, however, at, last; "church" -> in, and, for, which, by, being;
// "walsall" -> town, one, in, two, and. PPMI, cosine: "lock" -> making 0.342, carpenter 0.279, young 0.262, keys 0.255,
// not 0.246, key 0.242; "locks" -> industry, key, trade, are, keys, various; "iron" -> brass, founder, master, key, lock,
// patent; "church" -> st, parish, collegiate, the, wolverhampton, willenhall. "carpenter" within 4 words of "lock" 5 times.
// Town test (13 town words; top 5 neighbours each = 65 slots): raw 15 town hits, 11 of them "willenhall" (504 uses) or
// "wolverhampton" (216); PPMI 14 hits, 3 of them those two words.
// Lesson family: word embeddings from co-occurrence, PPMI weighting, cosine nearest neighbours, frequency domination,
// names merged by lowercasing, evaluating an embedding by looking beyond the score. Screened: embedding, word vector 0
// hits; Bath owns document cosine with TF-IDF; Cheltenham owns PMI collocations (pairs, not vectors).
// Place facts: ONS 2021 BUAs inside Walsall (published): Walsall 70,775; Bloxwich 51,875; Willenhall 49,580; Brownhills
// 21,240; Aldridge 15,835; Pelsall 10,455; Pheasey 9,495. Darlaston, Streetly, West Bromwich and Bilston straddle
// boundaries; excluded. Walsall TS001 usual residents 284,124.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WALSALL', label: 'Walsall', blurb: 'Coding and AI classes for Walsall, with a project that builds word embeddings from Hackwood\'s Annals of Willenhall and finds out what they really learned.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-walsall',
  code: 'wsl',
  accent: '#6B4B3B',
  accentRationale: 'Walsall: a worn brass-and-leather brown (6.28:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Walsall',
    eyebrow: 'Walsall, West Midlands, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'West Midlands', href: '/coding-classes-in-the-west-midlands' },
    { label: 'Wolverhampton', href: '/best-coding-class-in-wolverhampton' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Walsall, England',
  title: 'Coding and AI Classes in Walsall | Python, Vibe Coding, 6 to 67',
  description: 'Online coding, AI, Python and vibe coding classes for Walsall, Bloxwich, Willenhall and Aldridge learners aged 6 to 67, taught live online. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Walsall, and a Python project that builds word embeddings from a 1908 history of Willenhall.',
  twitterDescription: 'Walsall coding, AI, Python and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Walsall',
    description: 'Online coding, AI, Python, vibe coding and mathematics for children, teenagers and adults in Walsall borough, taught live with thinking skills first.'
  },

  h1: 'Coding and AI classes in Walsall',
  capsuleQ: 'Where can Walsall learners find the best coding and AI classes?',
  capsule: 'Walsall borough had 284,124 usual residents at the 2021 census. The ONS puts 70,775 in the Walsall built-up area itself, 51,875 in Bloxwich and 49,580 in Willenhall, with Brownhills, Aldridge and Pelsall also listed separately. Learners there, aged anywhere from 6 to 67, can take coding, AI, Python, vibe coding and maths with us live on video, taught from India in private lessons or in a group of five to ten at the same stage. Before any AI tool, we teach learners how to think, so they can question what a tool gives them. The first lesson is free and closes with a course recommendation. For Walsall the project turns an old history of Willenhall into word embeddings, the number lists AI uses for meaning. After the free lesson, a group place costs USD 100 a month and private lessons USD 150 a month.',
  lead: 'Frederick Hackwood\'s Annals of Willenhall, free on Project Gutenberg in its 1908 edition, calls Willenhall "the town of locks and keys". It also records a patent, "James Carpenter, of Willenhall", and "the Carpenter and Young invention of 1830". Those two details turn out to matter to a computer. Modern AI does not store words as words: it turns each one into a long list of numbers, called an embedding, placed so that words used in similar ways sit close together. This project builds simple embeddings from Hackwood\'s book in Python, asks which words land nearest to "lock", and discovers what a model learns when all it has is one town\'s history.',
  wa: 'Hello Modern Age Coders, may we book a free coding or AI lesson for a learner in Walsall?',

  picks: {
    eyebrow: 'Walsall course picks',
    h2: 'Courses for thinking, vibe coding and AI in Walsall',
    intro: 'Choose by age and by what the learner enjoys. A free live lesson opens every course, and booking asks for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: word puzzles, grouping, and saying exactly why two things belong together.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch first, then small apps described to an AI and tested by the young coder.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects, including building word embeddings from a real book.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Embeddings, retrieval, language models and AI agents, from the ground up.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Walsall borough',
      h2: 'Walsall, Bloxwich, Willenhall and nearby towns',
      intro: 'ONS 2021 census populations for built-up areas that sit inside Walsall borough.',
      body: [
        { kind: 'table', caption: 'Built-up areas within Walsall borough, ONS 2021 published populations', head: ['Built-up area', 'People (2021)'], rows: [
          ['Walsall', '70,775'],
          ['Bloxwich', '51,875'],
          ['Willenhall', '49,580'],
          ['Brownhills', '21,240'],
          ['Aldridge', '15,835'],
          ['Pelsall', '10,455'],
          ['Pheasey', '9,495']
        ] },
        { kind: 'p', text: 'We print each area as the ONS released it and leave the column unadded, since the published borough count of 284,124 comes from a separate table. Darlaston and Streetly are left out here because their built-up areas cross into neighbouring boroughs. Walsall schools teach the national curriculum for England; share your half-term dates and no lessons will be booked in them.' },
        { kind: 'callout', h3: 'Wider pages and why thinking comes first', p: 'For the whole county see <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">coding classes in the West Midlands</a>, and for the region <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">our West Midlands region page</a>. Our case for reasoning before prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Walsall project',
      h2: 'Word embeddings from the Annals of Willenhall',
      intro: 'Count which words appear together, turn the counts into vectors, then ask what sits nearest to "lock".',
      body: [
        { kind: 'p', text: 'The learner strips the Project Gutenberg header and footer, lowercases the text, keeps only letters and drops single letters. That leaves 59,238 words, 8,224 of them different, of which 745 appear ten or more times; those 745 form the vocabulary. For every vocabulary word the program counts which other vocabulary words appear within four places of it. Each word is now a row of co-occurrence counts, a first, crude embedding, and two words can be compared by the angle between their rows, a measure called cosine similarity that runs from 0 for nothing in common up to 1.' },
        { kind: 'table', caption: 'Nearest words by raw co-occurrence counts, our Python run on the Annals of Willenhall, 28 September 2026', head: ['Word', 'Six nearest neighbours'], rows: [
          ['lock', 'year, of, was, however, at, last'],
          ['church', 'in, and, for, which, by, being'],
          ['walsall', 'town, one, in, two, and']
        ] },
        { kind: 'p', text: 'The raw counts produce nonsense, and the reason is frequency. Words such as "the", "of" and "and" appear next to almost everything, so they dominate every row and make every word look like every other. The fix is a weighting called positive pointwise mutual information, PPMI for short, which asks whether two words appear together more often than their separate frequencies would predict, and keeps only the pairs that do. With PPMI weighting the neighbours change completely.' },
        { kind: 'table', caption: 'Nearest words after PPMI weighting, with cosine similarity for "lock", same text and run', head: ['Word', 'Nearest neighbours'], rows: [
          ['lock', 'making 0.342, carpenter 0.279, young 0.262, keys 0.255, not 0.246, key 0.242'],
          ['locks', 'industry, key, trade, are, keys, various'],
          ['iron', 'brass, founder, master, key, lock, patent'],
          ['church', 'st, parish, collegiate, the, wolverhampton, willenhall']
        ] },
        { kind: 'p', text: 'Most of that looks sensible, yet two neighbours of "lock" deserve a second look. "Carpenter" is not about woodwork: it is James Carpenter, whose name appears within four words of "lock" five times in the book. "Young" is not about age either. Because the text was lowercased, the surname in "the Carpenter and Young invention" was merged with the ordinary word "young". The model has no way to tell a name from a meaning; it only knows which words keep company. A learner who spots this has found, in miniature, why AI systems sometimes link things for reasons nobody intended.' },
        { kind: 'table', caption: 'Test: how many of the five nearest neighbours of 13 town names are also town names (65 places)', head: ['Method', 'Town neighbours found', 'Of which "willenhall" or "wolverhampton"'], rows: [
          ['Raw counts', '15 of 65', '11'],
          ['PPMI weighting', '14 of 65', '3']
        ] },
        { kind: 'p', text: 'A quick score makes the two methods look almost equal, 15 against 14. Opening up the results tells a different story. In the book, "willenhall" is used 504 times and "wolverhampton" 216, far more than any other town on the list, so the raw method lists them next to almost every place name for the same reason it lists "the". Eleven of its fifteen hits are those two words. PPMI finds a wider mix of genuine town pairs, such as "darlaston" beside "wednesbury". Checking what sits behind a score, and not only the score, is the habit this project is built to teach.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play odd one out with word cards, then explain in a sentence what the others share.' },
          { h3: 'Ages 11 to 15', p: 'Count word neighbours in Python and list the most common company a word keeps.' },
          { h3: 'Ages 15 and up', p: 'Build PPMI vectors, rank neighbours by cosine and design a fair test of the result.' }
        ] },
        { kind: 'callout', h3: 'Hackwood\'s text, our vectors', p: 'The book is the Project Gutenberg transcription of The Annals of Willenhall by Frederick Wm. Hackwood. The word counts, the embeddings, the similarity scores and the town test are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'From word counts to AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Big systems use far better embeddings, and meet the same questions.',
      body: [
        { kind: 'table', caption: 'The Walsall embeddings beside modern AI', head: ['Our small embeddings', 'Embeddings in modern AI'], rows: [
          ['Learned from one 1908 book', 'Learned from enormous amounts of text'],
          ['Counts of nearby words, reweighted', 'Learned by training a neural network'],
          ['Merged a surname with the word "young"', 'Can still link things for unintended reasons'],
          ['Frequent words swamped the raw counts', 'Need weighting and care with common words'],
          ['Checked by opening up a test score', 'Should be checked on examples you understand']
        ] },
        { kind: 'p', text: 'Embeddings sit behind a great deal of everyday AI. When an AI agent searches your notes or a document store for relevant passages, it usually compares embeddings, so the question "why did it fetch that?" often has an answer like "carpenter" beside "lock". In our vibe coding lessons, where learners describe a program and AI writes the first draft, that understanding helps them test search features instead of assuming they work. Agents are taught to older teenagers and adults once Python is in place, and Copilot Studio agent building is one-to-one only. See our <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents course page for UK students</a>, or read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is independent of Project Gutenberg and the Office for National Statistics. The book and the census counts come from them; the embeddings, and any errors in them, come from us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From word games to embeddings',
    intro: 'School year gives us a first idea; the free lesson decides where the learner begins.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Grouping, word logic and explaining a pattern clearly.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help, each tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and AI', p: 'Text, data and embeddings next to GCSE and A level study.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Retrieval and agents', p: 'Embeddings, search, language models and agents, built in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and meaning',
    h2: 'Does an AI understand what a word means?',
    intro: 'It knows which words keep company, which is not quite the same thing.',
    p1: 'The Walsall embeddings put "keys" beside "lock" and "brass" beside "iron", yet also put a surname beside "lock" because of one patent. Larger AI systems are much better at this, but they learn in the same spirit, from patterns of use.',
    p2: 'A learner who has watched "young" end up next to "lock" asks a useful question of any AI result: what in the data could have produced this?',
    closer: 'A Walsall teenager who knows how words become numbers will use AI tools with far more judgement, and that is a strong reason to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Brownhills to Willenhall, all online',
    intro: 'A computer and a reliable connection are all a Walsall household needs.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'Learners write, prompt and run their own programs, with the tutor following their screen and asking questions as they go.' },
      { h3: 'Started at the right level', p: 'Whether in Year 4 or Year 12, a learner starts where the trial lesson shows they should, with any exam board noted.' },
      { h3: 'Free to try', p: 'The first lesson costs nothing and ends with a suggested course.' },
      { h3: 'Matched groups', p: 'Five to ten UK learners at about the same point share a class.' },
      { h3: 'Two lessons weekly', p: 'No lessons in the school holidays.' },
      { h3: 'Times that hold', p: 'Tutors adjust when UK clocks change, so the lesson hour does not move.' }
    ],
    spec: { title: 'Why lessons run online', p: 'Five learners at one stage, all free at the same hour, rarely live on the same side of a borough. Online they can share a lesson wherever they are.' }
  },

  fees: {
    h2: 'Walsall fees',
    intro: 'Walsall is charged our international rate, which applies in every country except India.',
    first: 'A full opening lesson free of charge, then a course suggestion.',
    group: 'Around eight live small-group lessons each month.',
    private: 'Around eight live one-to-one lessons each month.',
    closer: 'Our fees are set in US dollars, not pounds. You are invoiced only after the free lesson has fixed a course and a weekly slot, and the pricing page explains breaks, absences and changing format.'
  },

  reviewsH2: 'Google reviews from West Midlands families and others around the UK',

  book: {
    h2: 'Book a free Walsall lesson',
    intro: 'Tell us the learner\'s age or school year and anything they are keen on. First-lesson options include word and logic puzzles, a Scratch game made with AI help, a first Python program, or a small text project.',
    success: 'Thank you. We have received your Walsall request.'
  },

  faq: {
    h2: 'Walsall questions',
    intro: 'The embeddings project, vibe coding, AI agents and practical details.',
    items: [
      { q: 'What is the population of Walsall?', a: 'At the 2021 census the Walsall built-up area had 70,775 people and the borough 284,124 usual residents, according to the ONS.' },
      { q: 'Do your coding and AI classes cover Walsall?', a: 'Yes. Every lesson is live online, so learners from 6 to 67 anywhere in the borough can join.' },
      { q: 'Can Walsall learners study vibe coding?', a: 'Yes, children, teenagers and adults, always planning first and testing the code an AI produces.' },
      { q: 'Do you teach AI agents?', a: 'Yes, once a learner has some Python, usually from the later teenage years. Copilot Studio agents are taught one-to-one only.' },
      { q: 'What is the embeddings project?', a: 'Learners turn Hackwood\'s Annals of Willenhall into word vectors, find each word\'s nearest neighbours and test what the vectors really captured.' },
      { q: 'Are there face-to-face lessons?', a: 'No. We teach live online only.' },
      { q: 'Do you support GCSE and A level students?', a: 'Yes, in computer science and maths, aiming at real understanding without promising grades.' },
      { q: 'What age range do you teach?', a: 'Learners aged 6 to 67.' },
      { q: 'How much do lessons cost?', a: 'Lesson one is free. After it, groups are USD 100 per month and one-to-one lessons USD 150 per month.' },
      { q: 'Are there lessons in the school holidays?', a: 'No, lessons stop for them. Just tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages across the West Midlands',
    html: 'Neighbouring <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-west-bromwich">West Bromwich</a> each have a page with a different project, and families aiming at grammar school places can see <a class="cg-inline-link" href="/11-plus-maths-tuition-wolverhampton-and-walsall">11 plus maths tuition for Wolverhampton and Walsall</a>. <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a> is covered too, and our <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">United Kingdom hub</a> links to every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Walsall and the West Midlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-west-midlands', label: 'West Midlands' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wsl .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.4vw, 2.8rem); }
.cg-root.cg-wsl .cg-hero h1 { font-weight: 790; letter-spacing: -0.03em; line-height: 1.02; }
.cg-root.cg-wsl .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-wsl .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wsl .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.021em; }
.cg-root.cg-wsl .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-wsl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wsl .cg-table th { letter-spacing: 0.06em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-wsl .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-wsl .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Walsall (E08000030), Census 2021 TS001 usual residents 284,124. ONS 2021 BUAs inside Walsall (published): Walsall 70,775; Bloxwich 51,875; Willenhall 49,580; Brownhills 21,240; Aldridge 15,835; Pelsall 10,455; Pheasey 9,495. Darlaston, Streetly, West Bromwich and Bilston straddle boundaries; excluded. Project Gutenberg 31675, Hackwood, The Annals of Willenhall (1908): "the town of locks and keys"; "It was the Carpenter and Young invention of 1830"; "James Carpenter, of Willenhall".',
    localProject: 'Co-occurrence embeddings, window 4, vocabulary 745 words (10+ uses) from 59,238 tokens / 8,224 types. Raw nearest to lock: year, of, was, however, at, last. PPMI nearest to lock: making 0.342, carpenter 0.279, young 0.262, keys 0.255, not 0.246, key 0.242; iron: brass, founder, master, key, lock, patent; church: st, parish, collegiate. carpenter within 4 of lock 5 times; "Young" surname merged by lowercasing. Town test 13 words x top 5: raw 15/65 (11 willenhall/wolverhampton, 504 and 216 uses), PPMI 14/65 (3). Lesson family: word embeddings, PPMI, cosine neighbours, frequency domination, name merging, evaluation beyond the score.',
    requiredMentions: [
      '284,124',
      '70,775',
      '51,875',
      'Bloxwich',
      'Brownhills',
      'Aldridge',
      'Pelsall',
      'Pheasey',
      'Hackwood',
      'Annals of Willenhall',
      'PPMI',
      'co-occurrence'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Census 2021 TS001, number of usual residents, Walsall 284,124, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Project Gutenberg, Frederick Wm. Hackwood, The Annals of Willenhall (ebook 31675), from the 1908 Whitehead Bros. edition.', url: 'https://www.gutenberg.org/ebooks/31675' }
    ],
    rejectedClaims: [
      'Present-day lock industry in Willenhall: not read from a current source; only Hackwood\'s 1908 words are quoted.',
      'Burritt\'s Walks in the Black Country: cited by Hackwood, not read by us; not quoted.',
      'Sum of the seven built-up areas: not published as a total; not added.',
      'Darlaston and Streetly populations: built-up areas cross borough boundaries; not tabled.',
      'How commercial embedding models are trained in detail: described only in general terms.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
