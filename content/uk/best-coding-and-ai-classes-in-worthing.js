'use strict';
// Worthing (cg- town page, UK cluster Phase 8, towns band A, row 347). Keyword slug per the owner's 2026-09-27
// instruction. Spine: who answers whom in a conversation? Anchor (read raw 27 September 2026): Project Gutenberg ebook 844,
// Oscar Wilde, "The Importance of Being Earnest". Jack explains his surname: "The late Mr. Thomas Cardew, an old gentleman of
// a very charitable and kindly disposition, found me, and gave me the name of Worthing, because he happened to have a
// first-class ticket for Worthing in his pocket at the time. Worthing is a place in Sussex. It is a seaside resort."
// Cast list: "John Worthing, J.P."; the script labels him JACK. Act I: "Algernon Moncrieff's Flat in Half-Moon Street, W."
// Our run (27 September 2026), speaker labels = a line of capitals ending in a full stop: 877 speeches (Act I 301, Act II 397,
// Act III 179); Jack 218, Algernon 201, Cecily 152, Gwendolen 101, Lady Bracknell 84, Chasuble 42, Miss Prism 41, Lane 21,
// Merriman 17. Within-act successor pairs 874 (300 + 396 + 178); 2 cross-act pairs dropped (Algernon to Miss Prism, Algernon to
// Gwendolen). Top pairs: Jack to Algernon 100, Algernon to Jack 94, Algernon to Cecily 58, Cecily to Algernon 56, Cecily to
// Gwendolen 53, Gwendolen to Cecily 51. Rows: after Jack (217 with a successor) Algernon 100 (46.1%); after Lady Bracknell
// (84) Jack 43 (51.2%). Act III top pair Jack to Lady Bracknell 23. 50 of 81 cells non-zero. Self pairs 2 (a stage direction
// between two speeches by Jack, and by Cecily). "ACT DROP" and "TABLEAU" lines glue onto the last speech of an act unless
// stopped. Jack's answer "149." has no letters (zero words under a letters-only rule). Bracketed stage directions inside
// speech blocks: 1,608 words under our rule (letters and apostrophes; a hyphen splits a word).
// Lesson family: speaker-turn transition matrix (turn-taking, row normalisation) from a play script, with label mapping,
// stage directions and act boundaries; screened (transition matrix, turn-taking, who speaks, play script, Wilde, Earnest:
// 0 hits; Markov, dialogue, speaker and group-by families are spent, so the page frames it as a successor count table).
// Place facts: Nomis Census 2021 TS007A, Worthing E07000229: total 111,340; 15 to 19 5,440 (4.9%; England 5.7%); 20 to 24
// 5,193 (4.7%; 6.0%); 50 to 54 8,151 (7.3%; 6.9%); 70 to 74 6,627 (6.0%; 5.0%); 75 to 79 4,851 (4.4%; 3.6%); 85 and over
// 4,001 (3.6%; 2.4%). ONS 2021 BUA: Worthing 111,620 (a single BUA; our OA sum inside the borough 111,351, so it reaches
// slightly past the boundary). OS Open Names via postcodes.io: Goring-by-Sea, Broadwater, West Tarring, Findon Valley and
// High Salvington are suburban areas in Worthing district.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WORTHING', label: 'Worthing', blurb: 'Coding and AI classes for Worthing, with a project that counts who answers whom in the Oscar Wilde comedy that named its hero after the town.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-worthing',
  code: 'wor',
  accent: '#4C281B',
  accentRationale: 'Worthing: a theatre-curtain umber (10.4:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Worthing',
    eyebrow: 'Worthing, West Sussex, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Sussex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'West Sussex', href: '/coding-classes-in-west-sussex' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Worthing, England',
  title: 'Coding and AI Classes in Worthing | Live Python Online, 6 to 67',
  description: 'Online coding, AI and Python classes for Worthing, Goring-by-Sea, Broadwater and Findon Valley learners aged 6 to 67, one-to-one or in groups. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Worthing, and a Python project that counts who answers whom in The Importance of Being Earnest.',
  twitterDescription: 'Worthing coding, AI and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Worthing',
    description: 'Online coding, AI, Python and mathematics for children, teenagers and adults in Worthing, taught live and matched to each learner.'
  },

  h1: 'Coding and AI classes in Worthing',
  capsuleQ: 'Where can Worthing learners find the best coding and AI classes?',
  capsule: 'Worthing borough had 111,340 residents at the 2021 census, and the ONS built-up area of Worthing, which runs a little beyond the borough edge, had 111,620. The town leans older than England: people over 70 take a noticeably larger share, and those aged 15 to 24 a smaller one. Whether they live in Goring-by-Sea, Broadwater or up at High Salvington, learners aged 6 to 67 can study coding, AI, Python and maths live with our tutors in India, privately or in a class of five to ten at the same stage. The opening lesson is free and ends with a course suggestion. The Worthing project begins with a comedy whose hero is named after the town. Carrying on is USD 100 a month in a group, or USD 150 a month for private lessons.',
  lead: 'In The Importance of Being Earnest, Jack explains how a foundling got his surname. "The late Mr. Thomas Cardew," he says, "gave me the name of Worthing, because he happened to have a first-class ticket for Worthing in his pocket at the time." The whole play is free on Project Gutenberg, and a script is secretly a data file: every speech starts with a name in capitals. A learner can read it with Python and ask a question an actor feels but rarely counts. When one character stops talking, who answers? Getting a clean answer means untangling names, stage directions and the edges of each act.',
  wa: 'Hello Modern Age Coders, please book a free coding or AI lesson for a learner in Worthing.',

  picks: {
    eyebrow: 'Worthing course picks',
    h2: 'Where Worthing learners usually begin',
    intro: 'Pick by age and interest; every course opens with a free live lesson and no card details.',
    items: [
      { course: 'ai-literacy-for-kids-course', band: 'Ages 6 to 9', note: 'What AI is, what it gets wrong, and small games to test it.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python programs that read text and count things.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python data work for teenagers, home of the script project.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Data and AI for grown-ups who have never written code.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Worthing borough',
      h2: 'A seaside borough with more older residents',
      intro: 'Six census age bands for Worthing, read from Nomis, with the England share beside each.',
      body: [
        { kind: 'table', caption: 'Worthing and England, chosen age bands (TS007A, 2021)', head: ['Age band', 'Worthing people', 'Worthing share', 'England share'], rows: [
          ['15 to 19', '5,440', '4.9%', '5.7%'],
          ['20 to 24', '5,193', '4.7%', '6.0%'],
          ['50 to 54', '8,151', '7.3%', '6.9%'],
          ['70 to 74', '6,627', '6.0%', '5.0%'],
          ['75 to 79', '4,851', '4.4%', '3.6%'],
          ['85 and over', '4,001', '3.6%', '2.4%']
        ] },
        { kind: 'p', text: 'Every band from 70 upward is above the national share, and the late teens and early twenties are below it. Ordnance Survey names list West Tarring, Findon Valley, Goring-by-Sea, Broadwater and High Salvington as parts of Worthing district, and the ONS treats the whole town as one built-up area. Pupils here work to the English national curriculum; share the term dates and we will plan round the breaks.' },
        { kind: 'callout', h3: 'County and region', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-west-sussex">West Sussex</a> page covers the county and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a> the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Worthing project',
      h2: 'Who answers whom in Earnest',
      intro: 'Read the script, split it into speeches, and count what follows what.',
      body: [
        { kind: 'p', text: 'The learner downloads Gutenberg ebook 844 and writes a small parser. A line of capitals ending in a full stop, such as LADY BRACKNELL., starts a new speech; the lines after it belong to that speaker. Our run finds 877 speeches: 301 in the first act, 397 in the second and 179 in the third. Jack speaks most often, 218 times, with Algernon on 201 and Cecily on 152. The first trap appears at once. The cast list at the top calls him John Worthing, J.P., but the script never uses that name; every speech is labelled JACK. Joining the cast list to the speeches needs a mapping table, written by a person who has read the play.' },
        { kind: 'table', caption: 'Most frequent speaker to next speaker pairs, our Python count, 27 September 2026', head: ['Speaker', 'Next speaker', 'Times', 'Share of that speaker\'s turns'], rows: [
          ['Jack', 'Algernon', '100', '46.1% of 217'],
          ['Algernon', 'Jack', '94', '47.2% of 199'],
          ['Algernon', 'Cecily', '58', '29.1% of 199'],
          ['Cecily', 'Algernon', '56', '36.8% of 152'],
          ['Cecily', 'Gwendolen', '53', '34.9% of 152'],
          ['Lady Bracknell', 'Jack', '43', '51.2% of 84']
        ] },
        { kind: 'p', text: 'Next the learner builds a transition matrix: nine speakers down the side, nine across the top, and in each cell the number of times the row speaker was followed by the column speaker. Only 50 of the 81 cells are ever used. Dividing each row by its total turns counts into shares, so the table can say that when Lady Bracknell finishes, Jack replies just over half the time. More traps wait here. The last speech of one act is not answered by the first speech of the next, so those two false pairs are dropped, leaving 874. The words ACT DROP and TABLEAU sit on their own lines and quietly attach themselves to the final speech unless the parser stops at them.' },
        { kind: 'p', text: 'Stage directions in square brackets are the subtlest problem. They do not change who speaks, but they hold 1,608 words by our counting rule, which would inflate any talk-time measure. Twice a direction sits between two speeches by the same person, so the matrix gains a Jack to Jack cell and a Cecily to Cecily cell, and the learner must decide whether those are real. Finally, Jack\'s reply when asked for a house number is simply "149.", which a letters-only word counter scores as zero words. Each rule is written down beside the result.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Act out a short scene and tally on paper who speaks after whom.' },
          { h3: 'Ages 11 to 15', p: 'Split the script into speeches in Python and count each character.' },
          { h3: 'Ages 15 and up', p: 'Build the full matrix per act, normalise rows and handle every trap.' }
        ] },
        { kind: 'callout', h3: 'Wilde\'s words, our counts', p: 'The play text is Project Gutenberg\'s edition of The Importance of Being Earnest by Oscar Wilde. The parsing rules and every count are ours.' }
      ]
    },
    {
      id: 'earnest', tint: 'deep', eyebrow: 'Why this play',
      h2: 'A hero named after a railway ticket',
      intro: 'What the script itself tells us, and how the conversation shifts across the three acts.',
      body: [
        { kind: 'table', caption: 'The play in our parsed counts (Project Gutenberg text)', head: ['Detail', 'From the text or our count'], rows: [
          ['Worthing in the script', '"Worthing is a place in Sussex. It is a seaside resort."'],
          ['First act setting', 'Algernon Moncrieff\'s flat in Half-Moon Street'],
          ['Busiest pair, Act I', 'Jack to Algernon, 67 times'],
          ['Busiest pair, Act II', 'Algernon to Cecily, 54 times'],
          ['Busiest pair, Act III', 'Jack to Lady Bracknell, 23 times'],
          ['Speeches in all', '877 across three acts']
        ] },
        { kind: 'p', text: 'Splitting the counts by act shows the story moving. The first act is mostly a duel between two friends, the second belongs to Cecily and her visitors, and the third brings Lady Bracknell to the centre. Counting successor pairs is a small version of real work: the language models behind chatbots are trained on a much larger cousin of the same question, which word tends to come next. A Worthing learner who has cleaned this script knows how many decisions sit inside such a simple-looking table.' },
        { kind: 'p', text: 'Modern Age Coders has no link with Project Gutenberg or the census office. The play and the figures belong to them; the parsing, the counts and any slip in them are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From paper tallies to data science',
    intro: 'School years are a rough guide; the free lesson settles the starting point.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Stories in blocks', p: 'Block coding with characters who talk and take turns.', courses: ['kids-coding-blocks-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Years 5 to 8', h3: 'Python and text', p: 'Reading text files, counting words and making tables.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Data and AI', p: 'Matrices, probabilities and AI beside GCSE and A level.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Data for work and interest', p: 'Adult data and Python, starting from nothing.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and scripts',
    h2: 'Could a chatbot count the turns?',
    intro: 'Summaries of famous plays are everywhere; counts from the actual text are not.',
    p1: 'Ask an AI who speaks most in Earnest and it will likely name someone plausible. Ask how often Lady Bracknell is answered by Jack and it may invent a tidy number, because nothing it read contained that count.',
    p2: 'A Worthing learner who has parsed the script knows the real figure, and knows which choices about stage directions and act breaks it depends on.',
    closer: 'Turning a text into honest numbers is a strong reason for Worthing teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Goring-by-Sea to Broadwater, all online',
    intro: 'Any home in the borough with a computer and broadband can join.',
    cells: [
      { h3: 'Hands on their own keyboard', p: 'Learners write every line themselves; the tutor sees the shared screen and guides with questions.' },
      { h3: 'Placed by the trial', p: 'A Year 4 or a Year 12 starts where the free lesson shows they are ready, with the exam board noted.' },
      { h3: 'No charge to try', p: 'The first lesson is free and closes with a plain course suggestion.' },
      { h3: 'Classes at one level', p: 'Five to ten UK learners working at the same stage.' },
      { h3: 'Two sessions a week', p: 'Breaks for school holidays.' },
      { h3: 'One fixed UK time', p: 'Our tutors move with the clocks each spring and autumn.' }
    ],
    spec: { title: 'Why online suits small groups', p: 'Five Worthing learners at one level who are free at one time seldom share a road. Teaching online lets each join a well-matched class.' }
  },

  fees: {
    h2: 'Worthing fees',
    intro: 'Worthing pays the same international rate as every country outside India.',
    first: 'One complete lesson, free, followed by a course suggestion.',
    group: 'About eight live small-group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Prices are in US dollars rather than pounds. Nothing is charged until the free lesson has fixed a course and a weekly time; the pricing page explains breaks, missed lessons and changing between group and private.'
  },

  reviewsH2: 'Sussex and UK families on Google',

  book: {
    h2: 'Book a free Worthing lesson',
    intro: 'Give us the learner\'s age or school year and something they enjoy. A first lesson might be a Scratch scene with talking characters, a first Python program, a small AI experiment, or counting turns in Wilde\'s play.',
    success: 'Thank you. We have your Worthing request.'
  },

  faq: {
    h2: 'Worthing questions',
    intro: 'The play project, local numbers and how lessons run.',
    items: [
      { q: 'What is the population of Worthing?', a: 'The 2021 census counted 111,340 in Worthing borough; the ONS built-up area of Worthing had 111,620.' },
      { q: 'Can Worthing learners study coding and AI online?', a: 'Yes. Learners aged 6 to 67 anywhere in Worthing join our live online coding, AI, Python and maths lessons.' },
      { q: 'What is the Earnest project?', a: 'Learners parse the Project Gutenberg text of The Importance of Being Earnest and count which character speaks after which.' },
      { q: 'What does Worthing have to do with the play?', a: 'Jack says Thomas Cardew named him Worthing because he had a first-class ticket for Worthing in his pocket.' },
      { q: 'What is a transition matrix?', a: 'A table where each cell counts how often one item is followed by another; dividing each row by its total gives shares.' },
      { q: 'Are the lessons face to face?', a: 'No. Every lesson is live and online.' },
      { q: 'Can you help with GCSE and A level?', a: 'Yes, in maths and computing, aimed at understanding; we do not promise grades.' },
      { q: 'Who can join?', a: 'Anyone aged 6 to 67.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free. Group lessons are then USD 100 a month and private tuition USD 150 a month.' },
      { q: 'Do you stop for half-term?', a: 'Yes; tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other pages along the coast',
    html: 'Along the coast, <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a> and <a class="cg-inline-link" href="/best-coding-class-in-chichester">Chichester</a> each have a page, and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-crawley">Crawley</a> has one inland. The county is under <a class="cg-inline-link" href="/coding-classes-in-west-sussex">West Sussex</a>, the region under <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists them all.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Worthing and West Sussex',
  footerPlaces: [
    { href: '/coding-classes-in-west-sussex', label: 'West Sussex' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wor .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 2.8vw, 2.4rem); }
.cg-root.cg-wor .cg-hero h1 { font-weight: 720; letter-spacing: -0.022em; line-height: 1.06; font-style: italic; }
.cg-root.cg-wor .cg-capsule { border-top: 3px double var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-wor .cg-eyebrow { letter-spacing: 0.22em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-wor .cg-section-head h2 { max-width: 20ch; letter-spacing: -0.015em; }
.cg-root.cg-wor .cg-table caption { font-weight: 500; text-align: left; letter-spacing: 0.03em; }
.cg-root.cg-wor .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wor .cg-table th { letter-spacing: 0.04em; font-weight: 700; font-size: 0.8rem; }
.cg-root.cg-wor .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-wor .cg-callout { border-left-width: 4px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'Worthing (E07000229). Nomis Census 2021 TS007A: total 111,340; 15 to 19 5,440 (4.9%, England 5.7%); 20 to 24 5,193 (4.7%, 6.0%); 50 to 54 8,151 (7.3%, 6.9%); 70 to 74 6,627 (6.0%, 5.0%); 75 to 79 4,851 (4.4%, 3.6%); 85 and over 4,001 (3.6%, 2.4%). ONS 2021 BUA: Worthing 111,620 (single BUA, reaching slightly past the borough). OS Open Names (postcodes.io): Goring-by-Sea, Broadwater, West Tarring, Findon Valley, High Salvington in Worthing district. Project Gutenberg 844, Oscar Wilde, The Importance of Being Earnest: "gave me the name of Worthing, because he happened to have a first-class ticket for Worthing in his pocket at the time. Worthing is a place in Sussex. It is a seaside resort."; cast list "John Worthing, J.P."; Act I "Algernon Moncrieff\'s Flat in Half-Moon Street, W."',
    localProject: '877 speeches (301/397/179); Jack 218, Algernon 201, Cecily 152, Gwendolen 101, Lady Bracknell 84, Chasuble 42, Miss Prism 41, Lane 21, Merriman 17. 874 within-act successor pairs; Jack to Algernon 100 (46.1% of 217), Algernon to Jack 94, Algernon to Cecily 58, Cecily to Algernon 56, Cecily to Gwendolen 53, Lady Bracknell to Jack 43 (51.2% of 84); 50 of 81 cells used; 2 self pairs; stage directions 1,608 words; "149." zero words. Lesson family: successor count table (transition matrix) from a script, label mapping, act boundaries, stage directions.',
    requiredMentions: [
      '111,340',
      '111,620',
      'Goring-by-Sea',
      'Broadwater',
      'High Salvington',
      'Thomas Cardew',
      'Importance of Being Earnest',
      'transition matrix',
      'Lady Bracknell',
      'Half-Moon Street'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Worthing and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Oscar Wilde, The Importance of Being Earnest (ebook 844).', url: 'https://www.gutenberg.org/ebooks/844' },
      { claim: 'OS Open Names places in Worthing district, via postcodes.io.', url: 'https://postcodes.io/' }
    ],
    rejectedClaims: [
      'Where or when Wilde wrote the play: not in the Gutenberg text; not claimed.',
      'First performance date: the text gives only the St James\'s Theatre and "TIME: The Present"; no year claimed.',
      'Pier, seafront and railway facts: not read from a source; not claimed.',
      'Named schools and school term dates: none named or read.',
      'Talk-time rankings by word count: tokenisation-dependent; only the stage-direction total is given, with its rule stated.',
      'Sterling prices: none.'
    ]
  }
};
