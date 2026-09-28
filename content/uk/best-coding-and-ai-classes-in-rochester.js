'use strict';
// Rochester, Medway (cg- town page, UK cluster Phase 8, towns band A, row 361). Keyword slug per the owner's rotation, with
// the 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: what does a summary keep, and
// what does it lose? Anchor (read raw 28 September 2026): Project Gutenberg 1392, Charles Dickens, "The Seven Poor
// Travellers", Chapter I "In the Old City of Rochester": "Strictly speaking, there were only six Poor Travellers"; the
// inscription "RICHARD WATTS, Esq. by his Will, dated 22 Aug. 1579, founded this Charity for Six poor Travellers, who not
// being ROGUES, or PROCTORS, May receive gratis for one Night, Lodging, Entertainment, and Fourpence each."; "It was in the
// ancient little city of Rochester in Kent, of all the good days in the year upon a Christmas-eve".
// Our run (scratchpad roc2/summ.py): Chapter I without its heading, 101 sentences of 5+ words (mean 32.9 words, longest 174),
// 1,553 content words after a stop-word list; top words travellers 21, watts 12, poor 11, richard 10. Extractive summaries
// of three sentences, checked against five facts (Watts, six travellers, fourpence, Rochester, Christmas): raw frequency sum
// picks 3 long sentences totalling 289 words, 3 of 5 facts (Watts, six travellers, Christmas); length-normalised picks 37
// words, 2 of 5 (Watts, six travellers); the first three sentences, 86 words, 3 of 5 (Watts, six travellers, fourpence).
// No method keeps "Rochester", named once in the chapter text. First version glued the chapter heading to sentence one and
// matched facts case-sensitively (missing "RICHARD WATTS").
// Lesson family: extractive summarisation (frequency scoring, length bias, lead baseline) evaluated against a fact list.
// Screened: extractive, sentence scoring, TextRank, summariser 0 hits ("summar" hits are summary statistics; Enfield's Luhn
// is the check digit; PageRank pages are link graphs).
// Place facts: ONS 2021 BUAs in Medway (published): Gillingham 108,480; Chatham 76,955; Rochester 67,285 (our OA sum inside
// Medway 66,915); Hoo St Werburgh 8,760; Cuxton 3,040. Medway age table and total belong to the Gillingham page; not
// repeated. OS Open Names: Strood, Frindsbury and Wainscott are suburban areas in Medway.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ROCHESTER', label: 'Rochester', blurb: 'Coding and AI classes for Rochester, with a project that summarises Dickens\'s Rochester story by computer and checks which facts survive.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-rochester',
  code: 'rot',
  accent: '#6B2525',
  accentRationale: 'Rochester: a cathedral-brick red (8.83:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Rochester',
    eyebrow: 'Rochester, Medway, Kent, England',
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
  routeLabel: 'Rochester, Medway, England',
  title: 'Coding and AI Classes in Rochester | Vibe Coding, Python, 6 to 67',
  description: 'Online coding, AI, vibe coding and Python classes for Rochester, Strood, Frindsbury and Wainscott learners aged 6 to 67, one-to-one or in groups. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Rochester, and a Python project that summarises Dickens\'s Rochester Christmas story and checks what gets lost.',
  twitterDescription: 'Rochester coding, AI, vibe coding and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Rochester',
    description: 'Online coding, AI, vibe coding, Python and mathematics for children, teenagers and adults in Rochester and Strood, taught live with thinking skills first.'
  },

  h1: 'Coding and AI classes in Rochester',
  capsuleQ: 'Where can Rochester learners find the best coding and AI classes?',
  capsule: 'The ONS counted 67,285 people in the Rochester built-up area at the 2021 census, one of the three large towns of Medway alongside Chatham and Gillingham. Families in Rochester, Strood, Frindsbury or Wainscott can book live online coding, AI, vibe coding, Python and maths lessons for anyone aged 6 to 67, taught by our tutors in India either privately or in a class of five to ten who share a level. Every course starts from how to think, because a learner who can reason for themselves gets far more out of AI tools than one who simply copies their output. The first lesson is free and points to the right course. If you carry on, a seat in a class is USD 100 a month; a tutor to yourself is USD 150.',
  lead: 'Charles Dickens opens The Seven Poor Travellers "in the ancient little city of Rochester in Kent", on a Christmas Eve, reading an inscription over a door: Richard Watts, by his will of 1579, founded a charity giving six poor travellers one night\'s lodging, entertainment "and Fourpence each." It is a perfect text for a question almost every student now asks an AI tool to do for them: summarise this. Our Rochester project builds a simple extractive summariser by hand, the kind that picks out the most important sentences word for word, and then checks its summaries against the facts a reader should come away with. The results show exactly what a summary can quietly lose.',
  wa: 'Hello Modern Age Coders, please book a free coding or AI lesson for a learner in Rochester.',

  picks: {
    eyebrow: 'Rochester course picks',
    h2: 'Thinking, vibe coding and AI courses for Rochester',
    intro: 'Age and interest point the way, and every course starts with a free live lesson that needs no card to book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: finding the main idea, logic and clear steps.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Story games in Scratch, then small apps created with AI and checked by the learner.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects for teenagers, with the Dickens summariser inside.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How language models summarise, retrieve and act as agents, built in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Rochester and Medway',
      h2: 'One of Medway\'s three large towns',
      intro: 'ONS built-up area populations from the 2021 census for the main towns of Medway.',
      body: [
        { kind: 'table', caption: 'Built-up areas in Medway, ONS 2021 published populations', head: ['Built-up area', 'People (2021)'], rows: [
          ['Gillingham', '108,480'],
          ['Chatham', '76,955'],
          ['Rochester', '67,285'],
          ['Hoo St Werburgh', '8,760'],
          ['Cuxton', '3,040']
        ] },
        { kind: 'p', text: 'Each figure is published separately, and the Rochester built-up area reaches a little past the Medway boundary, so we do not add them into a total the census never printed. Borough-wide age figures for Medway are on our Gillingham page. The Ordnance Survey names Strood, Frindsbury and Wainscott as parts of Medway. Local schools teach England\'s national curriculum, so we plan around the holiday weeks you share with us.' },
        { kind: 'callout', h3: 'Our approach to AI', p: 'Why learners think first and prompt second is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>. The county has its own <a class="cg-inline-link" href="/coding-classes-in-kent">Kent</a> page.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Rochester project',
      h2: 'Summarising Dickens, and checking what survives',
      intro: 'Split the chapter into sentences, score them, keep three, then test the summary against five facts.',
      body: [
        { kind: 'p', text: 'The learner takes the first chapter, "In the Old City of Rochester", and splits it into sentences: 101 of them with at least five words, averaging 33 words each, the longest 174. Two early bugs appear. The chapter heading is glued to the first sentence, and the fact checker, looking for "Watts", misses "RICHARD WATTS" in capitals until it ignores case. Then the summariser counts how often each meaningful word appears, leaving out common words such as "the" and "and". The top words are travellers, 21 times, and Watts, 12. Each sentence gets a score from its words, and the three highest-scoring sentences form the summary.' },
        { kind: 'table', caption: 'Three-sentence summaries of Chapter I, checked against five key facts, our Python run, 28 September 2026', head: ['Method', 'Summary length', 'Facts kept (of 5)', 'Facts kept'], rows: [
          ['Add up word scores', '289 words', '3', 'Watts, six travellers, Christmas'],
          ['Average word score per sentence', '37 words', '2', 'Watts, six travellers'],
          ['Simply take the first three sentences', '86 words', '3', 'Watts, six travellers, fourpence'],
          ['Any of the three methods', 'Varies', 'Never', 'Rochester']
        ] },
        { kind: 'p', text: 'Adding up word scores favours long sentences, because more words means more points, so the "summary" is 289 words of Dickens\'s longest and most rambling sentences, including a landlady\'s dialect. Averaging the scores instead swings the other way, choosing three tiny lines of dialogue that total 37 words. The plainest method of all, taking the opening three sentences, does as well as either, a simple baseline that proves hard to beat here. And none of the three keeps the word "Rochester", which appears only once in the chapter text. A method that rewards repetition cannot value a fact that is stated once, however important it is.' },
        { kind: 'p', text: 'The learner finishes by writing the five facts a good summary must keep before looking at any output: who founded the charity, for how many travellers, what each received, where and when. Measuring every method against that list turns "this summary looks fine" into a number. That habit matters even more with AI chatbots, which write fluent new sentences rather than copying old ones. A fluent summary can still drop the place, change the number of travellers, or add a detail that was never there, and only a reader who checks against the source will notice.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Summarise a short story in three sentences, then tick off the key facts a friend lists.' },
          { h3: 'Ages 11 to 15', p: 'Count the most frequent words in a chapter with Python and pick the top sentences.' },
          { h3: 'Ages 15 and up', p: 'Compare scoring methods, fix the length bias and measure each against a fact list.' }
        ] },
        { kind: 'callout', h3: 'Dickens\'s story, our summariser', p: 'The text is Project Gutenberg\'s edition of The Seven Poor Travellers by Charles Dickens. The sentence splitting, the scores and every summary in the table are our own work.' }
      ]
    },
    {
      id: 'ai', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'Summaries, vibe coding and AI agents',
      intro: 'The more work we hand to AI, the more checking skills matter.',
      body: [
        { kind: 'table', caption: 'Watts\'s Charity in Dickens\'s words (Project Gutenberg)', head: ['Detail', 'From the inscription or the story'], rows: [
          ['Founder', 'Richard Watts, by his will dated 22 August 1579'],
          ['Who could stay', 'Six poor travellers, "not being ROGUES, or PROCTORS"'],
          ['What they received', 'One night\'s lodging, entertainment and fourpence each'],
          ['Where', '"the ancient little city of Rochester in Kent"'],
          ['When the narrator came', 'On a Christmas Eve']
        ] },
        { kind: 'p', text: 'Many learners now meet programming through vibe coding: describing what they want to an AI and letting it write the code. A summariser like this one can be vibe coded in minutes, and it will run happily while choosing 289-word "summaries". Only a learner who has decided in advance what success looks like will catch it. AI agents raise the stakes further, since the language model inside them decides which tools to run; our older students and adults build them in Python, and anything on Copilot Studio is taught one-to-one. More on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/vibe-coding-for-teens">vibe coding for teens</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no tie to Project Gutenberg or the Office for National Statistics. Dickens\'s words and the census figures are theirs to credit; the summariser, its scores and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From story summaries to language models',
    intro: 'Use the school year as a rough start; the trial lesson settles it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Main ideas, logic and step-by-step reasoning.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Stories and games, then apps built with AI and tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Text and AI', p: 'Text processing and AI projects beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Language models and agents', p: 'Summarisation, retrieval and AI agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and summaries',
    h2: 'Can you trust an AI summary?',
    intro: 'Only if you know what it should contain.',
    p1: 'Ask a chatbot to summarise Dickens\'s first chapter and it will write a smooth paragraph. Whether it keeps Rochester, the six travellers and the fourpence is something only a checker who knows the text can say.',
    p2: 'A Rochester learner who has measured summaries against a fact list uses AI summaries as a starting point, not an answer.',
    closer: 'Rochester teenagers who can test a summary against its source will read, study and work more reliably with AI, which makes learning to code well worth it in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Strood to Wainscott, lessons online',
    intro: 'Any Medway home with a computer and a steady connection can join.',
    cells: [
      { h3: 'The learner leads', p: 'Students type, prompt and test every step, while the tutor watches the shared screen and guides with questions.' },
      { h3: 'The right first topic', p: 'Anyone from Year 4 to Year 13 begins where the free lesson places them, keeping the exam board in mind.' },
      { h3: 'A free start', p: 'A full lesson with no fee, followed by a clear course suggestion.' },
      { h3: 'Classes by level', p: 'Five to ten UK learners at a similar stage.' },
      { h3: 'Two per week', p: 'None during school holidays.' },
      { h3: 'A fixed UK hour', p: 'Tutors follow the spring and autumn clock changes.' }
    ],
    spec: { title: 'Why the groups meet online', p: 'Five Medway learners at the same level, free at the same time, rarely live next door to each other. Online, each can join a matching class.' }
  },

  fees: {
    h2: 'Rochester fees',
    intro: 'Rochester pays the standard international rate we use everywhere outside India.',
    first: 'A complete first lesson, free, then a suggested course.',
    group: 'About eight live group lessons per month.',
    private: 'About eight live one-to-one lessons per month.',
    closer: 'All fees are in US dollars rather than sterling. We only begin billing after the trial has set a course and a weekly time; the pricing page explains holidays, missed lessons and swapping format.'
  },

  reviewsH2: 'What Medway families and others around the UK write on Google',

  book: {
    h2: 'Book a free Rochester lesson',
    intro: 'Mention how old the learner is, or the year group, along with a hobby. A first lesson might be a main-idea puzzle, a Scratch story made with AI, a first Python word counter, or a mini summariser.',
    success: 'Thank you. Your Rochester request is safely with us.'
  },

  faq: {
    h2: 'Rochester questions',
    intro: 'The Dickens project, vibe coding and lesson details.',
    items: [
      { q: 'What is the population of Rochester?', a: 'The ONS gives 67,285 for the Rochester built-up area at the 2021 census.' },
      { q: 'Can Rochester learners take coding and AI classes online?', a: 'Yes. Everything is taught live over video, open to ages 6 to 67 from Strood to Wainscott.' },
      { q: 'Is vibe coding on the menu?', a: 'Yes, with the learner deciding what success looks like, then reading and testing what the AI produces.' },
      { q: 'Do you teach AI agents?', a: 'We do, once a learner is comfortable in Python, usually from the mid-teens; Copilot Studio agent work is always one-to-one.' },
      { q: 'What is the Dickens summariser project?', a: 'Learners build a sentence-picking summariser for The Seven Poor Travellers and check each summary against five key facts.' },
      { q: 'Are lessons held in person?', a: 'No. We teach online only.' },
      { q: 'Can you support GCSE or A level work?', a: 'For computer science and maths, certainly. We build understanding and never promise a grade.' },
      { q: 'What ages can learn with you?', a: 'Six-year-olds through to learners of 67.' },
      { q: 'How much are lessons?', a: 'Your first session is on us. From then on a shared class is USD 100 per month and personal tuition USD 150 per month.' },
      { q: 'Do lessons stop in school holidays?', a: 'Yes; just tell us when.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages in Kent',
    html: 'In Medway, <a class="cg-inline-link" href="/ai-and-programming-classes-in-gillingham">Gillingham</a> has William Adams\'s distances, and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-maidstone">Maidstone</a> and <a class="cg-inline-link" href="/best-coding-class-in-canterbury">Canterbury</a> have their own pages. Kent as a whole is on <a class="cg-inline-link" href="/coding-classes-in-kent">our county page</a>, the wider region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>, and all the rest through the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Rochester and Kent',
  footerPlaces: [
    { href: '/coding-classes-in-kent', label: 'Kent' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-rot .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-rot .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-rot .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-rot .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rot .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-rot .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-rot .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rot .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-rot .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-rot .cg-callout { border-left-width: 5px; border-radius: 0 11px 11px 0; }
`,

  dossier: {
    curriculumAuthority: 'Medway BUAs (ONS 2021, published): Gillingham 108,480; Chatham 76,955; Rochester 67,285; Hoo St Werburgh 8,760; Cuxton 3,040. OS Open Names: Strood, Frindsbury, Wainscott in Medway. Project Gutenberg 1392, Dickens, The Seven Poor Travellers: "Strictly speaking, there were only six Poor Travellers"; inscription "RICHARD WATTS, Esq. by his Will, dated 22 Aug. 1579, founded this Charity for Six poor Travellers, who not being ROGUES, or PROCTORS, May receive gratis for one Night, Lodging, Entertainment, and Fourpence each."; "the ancient little city of Rochester in Kent"; "upon a Christmas-eve".',
    localProject: 'Chapter I: 101 sentences (5+ words), mean 32.9 words, max 174; 1,553 content words; top travellers 21, watts 12. Three-sentence summaries vs 5 facts: raw sum 289 words 3/5; length-normalised 37 words 2/5; first three sentences 86 words 3/5; "Rochester" never kept. Bugs: heading glued to sentence one; case-sensitive fact check. Lesson family: extractive summarisation, length bias, lead baseline, evaluation against a fact list.',
    requiredMentions: [
      '67,285',
      'Strood',
      'Frindsbury',
      'Wainscott',
      'Richard Watts',
      'Seven Poor Travellers',
      'Fourpence',
      'summariser',
      'extractive'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Charles Dickens, The Seven Poor Travellers (ebook 1392).', url: 'https://www.gutenberg.org/ebooks/1392' },
      { claim: 'OS Open Names places in Medway, via postcodes.io.', url: 'https://postcodes.io/' }
    ],
    rejectedClaims: [
      'Whether Watts\'s Charity building still stands or can be visited: not read from a source; not claimed.',
      'Dickens\'s own life in Rochester or Chatham: not read from a source used here; not claimed.',
      'Medway age table and total: owned by the Gillingham page; not repeated.',
      'How summarisation research ranks the lead baseline: not claimed; only our own result is reported.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
