'use strict';
// Nuneaton (cg- town page, UK cluster Phase 8, towns band A, row 358). Second page in the owner's 2026-09-28
// vibe-coding-and-ai-agents-classes-in-* rotation. Spine: can a retrieval AI agent be fooled by a rumour its own source
// disproves? Anchor (read raw 28 September 2026): Project Gutenberg 36847, Mathilde Blind, "George Eliot" (London: W. H.
// Allen, 1883, Eminent Women Series): "Mary Ann Evans, better known as "George Eliot," was born on November 22nd, 1819, at
// South Farm, a mile from Griff"; "Both the date and place of her birth have been incorrectly stated, hitherto"; "Mary Ann
// being sent to a school at Nuneaton, kept by Miss Lewis"; "the inhabitants of Nuneaton and its neighbourhood were
// considerably perplexed and excited to find well-known places and persons touched off to the life"; Liggins; "the real
// authorship of the 'Scenes' was now revealed in an Isle of Man paper"; George Eliot "challenging the pretender to produce
// some specimen of his writing in the style of 'Adam Bede.'"; "If I didn't, the devil did!"; ministers went "to
// Attleborough to call upon the "great author,"".
// Our run (scratchpad nun/rag.py): 354 paragraphs of 20+ words (59,072 words). BM25 retrieval (k1 1.5, b 0.75) with a
// small stop-word list. "Who wrote Adam Bede?" -> top passage is the Liggins paragraph; a naive answerer that returns the
// most frequent name in the top passage answers "Liggins" (7 mentions). "Where was George Eliot born?" -> the South Farm
// paragraph ranks 3rd (top: a quotation containing "born"); keeping stop words drops it to 11th. "Which school did Mary Ann
// go to in Nuneaton?" -> Miss Lewis paragraph ranks 1st. 2 paragraphs mention Liggins; 27 mention "Adam Bede".
// Lesson family: retrieval-augmented agent (BM25 retrieval, stop words, answer extraction vs reported claims, citing the
// passage). Screened: retrieval, BM25, question answering, keyword search 0 hits (Bournemouth owns stylometry; Maidstone
// owns the n-gram reuse index).
// Place facts: Nomis Census 2021 TS007A, Nuneaton and Bedworth E07000219: total 134,193; 0 to 4 7,753 (5.8%; England 5.4%);
// 15 to 19 6,937 (5.2%; 5.7%); 20 to 24 7,071 (5.3%; 6.0%); 50 to 54 9,554 (7.1%; 6.9%); 75 to 79 5,304 (4.0%; 3.6%); 85
// and over 2,976 (2.2%; 2.4%). ONS 2021 BUAs: Nuneaton 88,815 (our OA sum inside the borough 87,014; the area spans a
// boundary); Bedworth 31,090; Bulkington 5,670; Ash Green 2,565; Bermuda 2,070.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'NUNEATON', label: 'Nuneaton', blurb: 'Vibe coding and AI agents classes for Nuneaton, with a project that builds a retrieval AI agent and watches it fall for the Liggins hoax about George Eliot.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-nuneaton',
  code: 'nun',
  accent: '#34205C',
  accentRationale: 'Nuneaton: an ink-violet for a town of novelists (11.23:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Nuneaton',
    eyebrow: 'Nuneaton, Warwickshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Warwickshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'Warwickshire', href: '/coding-classes-in-warwickshire' },
    { label: 'West Midlands', href: '/coding-and-ai-classes-in-west-midlands-region' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Nuneaton, England',
  title: 'Vibe Coding and AI Agents Classes in Nuneaton | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents, Python and coding classes for Nuneaton, Bedworth, Bulkington and Ash Green learners aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Nuneaton, live online, with a project where a retrieval AI agent falls for the Liggins hoax about George Eliot.',
  twitterDescription: 'Nuneaton vibe coding, AI agents and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Nuneaton',
    description: 'Online vibe coding, AI agents, Python, coding and mathematics for children, teenagers and adults in Nuneaton and Bedworth, taught live with thinking skills first.'
  },

  h1: 'Vibe coding and AI agents classes in Nuneaton',
  capsuleQ: 'Where can Nuneaton learners find the best vibe coding and AI agents classes?',
  capsule: 'Nuneaton and Bedworth borough counted 134,193 people in the 2021 census. The ONS gives 88,815 for the Nuneaton built-up area, which crosses the borough edge, and 31,090 for Bedworth, with Bulkington, Ash Green and Bermuda smaller. From Bedworth to Bulkington, children, teenagers and adults between 6 and 67 can learn vibe coding, AI agents, Python, coding and maths with our India-based tutors in live video lessons, alone or in a group of five to ten at a shared level. Vibe coding means describing software to an AI and letting it write the code; AI agents go further and choose tools for themselves. We teach both with thinking first, so the learner stays in charge. The first lesson is free, then USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'When Scenes of Clerical Life first appeared in Blackwood\'s Magazine, readers around Nuneaton recognised their own streets and neighbours in it, and decided the anonymous author must be one of them. According to Mathilde Blind\'s 1883 biography of George Eliot, they settled on a local man named Liggins, who, when asked point blank whether he had written Adam Bede, replied "If I didn\'t, the devil did!" The real author was Mary Ann Evans, who grew up at Griff House and went to school in Nuneaton. The same mix-up can happen inside a modern AI agent. Our Nuneaton project builds one that searches Blind\'s book to answer questions, and asks it who wrote Adam Bede.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a Nuneaton learner?',

  picks: {
    eyebrow: 'Nuneaton course picks',
    h2: 'Vibe coding, AI agents and how-to-think courses',
    intro: 'Match age with interest. Every course has a free live first lesson, booked without card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: careful reading, logic and planning before any AI.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Story games in Scratch, then small apps built by chatting to AI and testing them.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI builds for teenagers, including the retrieval agent.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Large language models, retrieval-augmented generation and agents, in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Nuneaton and Bedworth',
      h2: 'A borough close to the England average',
      intro: 'Six census age bands for the borough from Nomis, next to England.',
      body: [
        { kind: 'table', caption: 'Nuneaton and Bedworth against England, six age bands (TS007A, 2021)', head: ['Ages', 'Borough residents', 'Borough share', 'England share'], rows: [
          ['0 to 4', '7,753', '5.8%', '5.4%'],
          ['15 to 19', '6,937', '5.2%', '5.7%'],
          ['20 to 24', '7,071', '5.3%', '6.0%'],
          ['50 to 54', '9,554', '7.1%', '6.9%'],
          ['75 to 79', '5,304', '4.0%', '3.6%'],
          ['85 and over', '2,976', '2.2%', '2.4%']
        ] },
        { kind: 'p', text: 'Most bands sit within half a point of England. The clearest gap is among people aged 20 to 24, at 5.3% against 6.0%, while the youngest children are slightly more common than nationally. Besides the two towns, the ONS lists Bulkington at 5,670, Ash Green at 2,565 and Bermuda at 2,070 as built-up areas in the borough. Warwickshire schools follow the national curriculum for England; give us the term dates and lessons will not clash with holidays.' },
        { kind: 'callout', h3: 'Thinking before prompting', p: 'We explain why on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>. The county has its own <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a> page.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Nuneaton project',
      h2: 'A retrieval AI agent meets the Liggins hoax',
      intro: 'Split a book into passages, let the agent search them, and check what it answers.',
      body: [
        { kind: 'p', text: 'Many AI agents answer questions by first searching a set of documents and then writing an answer from what they find, a method called retrieval-augmented generation. The learner vibe codes a small version. Blind\'s biography is split into 354 passages of at least twenty words. A standard scoring method called BM25 ranks the passages for each question by how often its rarer words appear. An answer step then reads the top passage. Asked "Which school did Mary Ann go to in Nuneaton?", the agent finds the right passage first time: "a school at Nuneaton, kept by Miss Lewis." It looks like it works.' },
        { kind: 'table', caption: 'What the retrieval agent found in Mathilde Blind\'s George Eliot (1883), our Python run, 28 September 2026', head: ['Question', 'Where the right passage ranked', 'What went wrong'], rows: [
          ['Which school did Mary Ann go to in Nuneaton?', '1st', 'Nothing: the answer is Miss Lewis\'s school'],
          ['Who wrote Adam Bede?', '1st, but it is the Liggins passage', 'A naive answer picks "Liggins", named 7 times there'],
          ['Where was George Eliot born?', '3rd', 'A quotation containing "born" ranked higher'],
          ['Same question, common words kept', '11th', 'Words like "where" and "was" swamped the search']
        ] },
        { kind: 'p', text: 'Then the learner asks "Who wrote Adam Bede?" The top passage is the one about the hoax, and it names Liggins seven times. A simple answer step that picks the most mentioned name replies "Liggins". The passage itself makes clear the claim was false: George Eliot challenged the pretender to produce a specimen of his writing in the style of Adam Bede. The retrieval was not wrong; the reading was. The agent treated a reported rumour as a fact, the same kind of mistake an AI assistant can make when it summarises a page that quotes someone else\'s false claim.' },
        { kind: 'p', text: 'A second lesson comes from "Where was George Eliot born?" The right passage, "born on November 22nd, 1819, at South Farm, a mile from Griff", only ranks third, beaten by a quotation that happens to contain the word born. If the program keeps small words like "where" and "was" in the search, it falls to eleventh. Blind herself warns that "both the date and place of her birth have been incorrectly stated, hitherto", so sources disagree. The fix the learner builds is simple and powerful: the agent must show the passage it used for every answer, so a reader can check whether it states a fact or reports a claim.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Find answers in a short story, and spot sentences that say what someone believed rather than what was true.' },
          { h3: 'Ages 11 to 15', p: 'Vibe code a keyword search over a book and test it with questions whose answers you know.' },
          { h3: 'Ages 15 and up', p: 'Build BM25 retrieval, measure where the right passage ranks, and add citations to every answer.' }
        ] },
        { kind: 'callout', h3: 'Blind\'s book, our agent', p: 'All quotations come from the Project Gutenberg edition of Mathilde Blind\'s George Eliot (1883). The passage splitting, the ranking and every result in the table are our own work.' }
      ]
    },
    {
      id: 'agents', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'How we teach AI agents that can be trusted',
      intro: 'An agent that cites its sources can be checked; one that does not cannot.',
      body: [
        { kind: 'table', caption: 'George Eliot and Nuneaton, from Mathilde Blind\'s biography (Project Gutenberg)', head: ['Detail', 'Blind\'s account'], rows: [
          ['Born', '22 November 1819, at South Farm, a mile from Griff'],
          ['Childhood home', 'Griff House, from March 1820'],
          ['School in the town', 'Kept by Miss Lewis at Nuneaton'],
          ['The pretender', 'Liggins, visited at Attleborough'],
          ['His famous reply', '"If I didn\'t, the devil did!"']
        ] },
        { kind: 'p', text: 'Vibe coding lets a learner produce an agent like this in an afternoon by describing it to an AI assistant. That speed is why the thinking matters: without testing it on known questions, nobody would have noticed it naming Liggins. Our younger learners practise careful reading and logic in the how-to-think programme, teenagers vibe code real projects and test them, and older teenagers and adults build proper AI agents in Python, with Copilot Studio agent courses taught one-to-one only. For more, see <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for UK students</a> and <a class="cg-inline-link" href="/vibe-coding-for-teens">vibe coding for teens</a>.' },
        { kind: 'p', text: 'Project Gutenberg and the census office are independent of Modern Age Coders. Blind\'s text and the population figures belong to them; the agent we built and any errors in it are our responsibility.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From careful reading to trustworthy AI agents',
    intro: 'A school year is only a rough guide; the free lesson finds the right starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'Learn to think', p: 'Logic, careful reading and step-by-step problem solving.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Stories and games, then apps made with AI and tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Search, AI and Python', p: 'Retrieval, data and AI projects beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Retrieval and agents', p: 'Language models, retrieval-augmented generation and agents.', courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents and sources',
    h2: 'Would your AI agent have believed Liggins?',
    intro: 'If it cannot show where its answer came from, you cannot tell.',
    p1: 'The Nuneaton agent found the right page and still gave the wrong name, because it could not tell a rumour from a fact. Large AI tools are far more fluent, and the same kind of slip is harder to see.',
    p2: 'A learner who has built retrieval, tested it and forced it to cite its passage knows which questions to ask any AI tool, from a homework helper to a research agent.',
    closer: 'Nuneaton teenagers who can make an AI agent show its sources will be much harder to fool than the townsfolk who believed Liggins, and that is reason enough to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Nuneaton, Bedworth and Bulkington, online',
    intro: 'Lessons need only a computer and a working internet connection at home.',
    cells: [
      { h3: 'Learners build it', p: 'Every prompt, line and test comes from the student, while the tutor follows by screen share and asks the next good question.' },
      { h3: 'Pitched at the right step', p: 'Year 4 through Year 13, the free lesson matters more than the year group in choosing the first topic, and exam boards are noted.' },
      { h3: 'A no-cost start', p: 'One whole lesson free of charge that ends in a clear suggestion.' },
      { h3: 'Classmates at your level', p: 'Five to ten UK learners in each group.' },
      { h3: 'Twice weekly', p: 'No lessons in school holidays.' },
      { h3: 'A time that holds', p: 'Tutors move with the UK clocks each spring and autumn.' }
    ],
    spec: { title: 'Why we teach online', p: 'Five Nuneaton learners at one level, all free at the same hour, rarely live on the same road. Online, each of them gets a well-matched class.' }
  },

  fees: {
    h2: 'Nuneaton fees',
    intro: 'Nuneaton and Bedworth pay the one international rate we set for everywhere outside India.',
    first: 'A complete lesson at no charge, with a course suggestion to follow.',
    group: 'Close to eight live small-group lessons per month.',
    private: 'Close to eight live one-to-one lessons per month; Copilot Studio agents are one-to-one only.',
    closer: 'We charge in US dollars, never sterling. Payment begins only once the trial has fixed a course and a weekly time, and holidays, absences and format changes are covered on the pricing page.'
  },

  reviewsH2: 'Warwickshire and UK families on Google',

  book: {
    h2: 'Book a free Nuneaton lesson',
    intro: 'Say how old the learner is, or which school year, and what they are curious about. Possible first lessons: a reading-and-logic puzzle hour, a Scratch story made with AI help, a first Python search, or a tiny question-answering agent.',
    success: 'Thank you. We have received your Nuneaton request.'
  },

  faq: {
    h2: 'Nuneaton questions',
    intro: 'AI agents, vibe coding, the George Eliot project and practical points.',
    items: [
      { q: 'What is the population of Nuneaton?', a: 'The ONS gives 88,815 for the Nuneaton built-up area at the 2021 census; the borough of Nuneaton and Bedworth counted 134,193.' },
      { q: 'Do you teach vibe coding in Nuneaton?', a: 'Yes, live online for kids, teenagers and adults, with learners planning and testing everything the AI writes.' },
      { q: 'What are AI agents, and can my teenager learn to build them?', a: 'Programs where an AI chooses tools and acts on the results; teenagers with some Python can build them, and Copilot Studio agents are taught one-to-one only.' },
      { q: 'What is retrieval-augmented generation?', a: 'An AI method that searches documents first and writes its answer from the passages it finds, which is what the Nuneaton project builds in miniature.' },
      { q: 'What was the Liggins hoax?', a: 'According to Mathilde Blind, people around Nuneaton believed a local man, Liggins, had written George Eliot\'s early books.' },
      { q: 'Are lessons in person?', a: 'No. Every lesson is live online.' },
      { q: 'Do you help with GCSE and A level computer science?', a: 'Yes, and with maths, focusing on understanding rather than any promised grade.' },
      { q: 'What ages can join?', a: 'Anyone from 6 to 67.' },
      { q: 'How much are lessons?', a: 'The trial lesson is free; afterwards USD 100 per month in a group or USD 150 per month one-to-one.' },
      { q: 'Do lessons pause in school holidays?', a: 'Yes; just send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages in Warwickshire and beyond',
    html: 'Close by, <a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-rugby">Rugby</a> have their own pages, and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-west-bromwich">West Bromwich</a> has another AI agent project. See <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a> for the county, <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands region</a> for the region, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for the rest.',
    waLabel: 'Message our team on WhatsApp'
  },

  footerHeading: 'Nuneaton and Warwickshire',
  footerPlaces: [
    { href: '/coding-classes-in-warwickshire', label: 'Warwickshire' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-nun .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-nun .cg-hero h1 { font-weight: 760; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-nun .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-nun .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-nun .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-nun .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-nun .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nun .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-nun .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-nun .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Nuneaton and Bedworth (E07000219). Nomis Census 2021 TS007A: total 134,193; 0 to 4 7,753 (5.8%, England 5.4%); 15 to 19 6,937 (5.2%, 5.7%); 20 to 24 7,071 (5.3%, 6.0%); 50 to 54 9,554 (7.1%, 6.9%); 75 to 79 5,304 (4.0%, 3.6%); 85 and over 2,976 (2.2%, 2.4%). ONS 2021 BUAs: Nuneaton 88,815; Bedworth 31,090; Bulkington 5,670; Ash Green 2,565; Bermuda 2,070. Project Gutenberg 36847, Mathilde Blind, George Eliot (W. H. Allen, 1883): born "November 22nd, 1819, at South Farm, a mile from Griff"; "Both the date and place of her birth have been incorrectly stated, hitherto"; "a school at Nuneaton, kept by Miss Lewis"; Liggins; "If I didn\'t, the devil did!"; Attleborough.',
    localProject: 'BM25 over 354 passages (59,072 words). "Who wrote Adam Bede?" top = Liggins passage; naive most-frequent-name answer "Liggins" (7). "Where was George Eliot born?" right passage 3rd; with stop words kept 11th. Nuneaton school question 1st. Fix: cite the passage behind every answer. Lesson family: retrieval-augmented agent, BM25, stop words, reported claim vs fact, citations.',
    requiredMentions: [
      '134,193',
      '88,815',
      'Bulkington',
      'Ash Green',
      'Bermuda',
      'Mathilde Blind',
      'Liggins',
      'Griff House',
      'South Farm',
      'BM25'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Nuneaton and Bedworth and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Mathilde Blind, George Eliot (ebook 36847).', url: 'https://www.gutenberg.org/ebooks/36847' }
    ],
    rejectedClaims: [
      'Where George Eliot was born according to other sources: Blind says earlier notices were wrong; only her account is quoted.',
      'Liggins\'s later life: Blind\'s passage ends in the workhouse; not used on the page.',
      'Present-day George Eliot memorials in Nuneaton: not read from a source; not claimed.',
      'Chilvers Coton church details: mentioned in the source but not used.',
      'Named schools today and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
