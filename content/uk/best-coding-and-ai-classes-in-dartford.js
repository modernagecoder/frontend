'use strict';
// Dartford (cg- town page, UK cluster Phase 8, towns band A, row 365). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how do you catch an AI that invents
// a quotation? Anchor (read raw 28 September 2026): Project Gutenberg 46634, Francis Trevithick, "Life of Richard
// Trevithick, with an Account of His Inventions", Volume 2: "Messrs. John Hall and Sons, of Dartford, also experimented on
// these two patents, and from this the tubular condenser was called Hall's Condenser. I think the boat it was first tried
// in was called the 'Dartford.'"; "In 1832 the Waterwitch Company made experiments with those plans"; "His high-pressure
// steam-engine was the pioneer of locomotion". (The book's account of Trevithick's death at Dartford is not used.)
// Our run (scratchpad dfd/quotes.py): six candidate quotations checked against the book. Raw exact search fails even for a
// genuine sentence (the file breaks the line after "these"); after normalising spaces, quote marks and case, the two
// genuine ones match exactly. Best fuzzy window (difflib ratio over same-length word windows): one word changed
// ("pioneer of the railway") 0.848; year changed 1832 to 1834: 0.984; words stitched from two places 0.795; invented
// quotation in the book's style 0.512.
// Lesson family: verifying quotations against a source (AI hallucination checking): normalisation, exact vs fuzzy match,
// why a high similarity score can still hide a wrong fact, number checks. Screened: hallucination, quotation check,
// Trevithick 0 hits (Scotland/Wolverhampton/Perth use edit distance for name matching; Nuneaton owns retrieval citations).
// Place facts: Nomis Census 2021 TS001 Dartford 116,753; TS007A: 0 to 4 8,282 (7.1%; England 5.4%); 5 to 9 8,268 (7.1%;
// 5.9%); 30 to 34 9,861 (8.4%; 7.0%); 35 to 39 9,629 (8.2%; 6.7%); 70 to 74 4,252 (3.6%; 5.0%); 75 to 79 2,971 (2.5%;
// 3.6%). ONS 2021 BUAs: Dartford 69,130; Swanscombe 15,460; Stone 6,440; Ebbsfleet Valley 2,990; Darenth 2,585; Bean 1,635.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'DARTFORD', label: 'Dartford', blurb: 'Coding and AI classes for Dartford, with a project that builds a quotation checker to catch AI-invented quotes, tested on a Trevithick biography.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-dartford',
  code: 'dfd',
  accent: '#5C3240',
  accentRationale: 'Dartford: a deep engine-room maroon (8.52:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Dartford',
    eyebrow: 'Dartford, Kent, England',
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
  routeLabel: 'Dartford, England',
  title: 'Coding and AI Classes in Dartford | Vibe Coding, Python, 6 to 67',
  description: 'Online coding, AI, vibe coding and Python classes for Dartford, Swanscombe, Stone and Ebbsfleet Valley learners aged 6 to 67, live and online. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Dartford, and a Python project that builds a checker for AI-invented quotations, tested on a Trevithick biography.',
  twitterDescription: 'Dartford coding, AI, vibe coding and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Dartford',
    description: 'Online coding, AI, vibe coding, Python and mathematics for children, teenagers and adults in Dartford, taught live with thinking skills first.'
  },

  h1: 'Coding and AI classes in Dartford',
  capsuleQ: 'Where can Dartford learners find the best coding and AI classes?',
  capsule: 'Dartford borough had 116,753 residents at the 2021 census; the ONS gives 69,130 for the Dartford built-up area, 15,460 for Swanscombe and 6,440 for Stone, with the new Ebbsfleet Valley among the smaller places. It is a young borough: under-tens and adults in their thirties are well above the England share. Anyone from 6 to 67 in Dartford, Swanscombe or Stone can take coding, AI, vibe coding, Python and maths as live online lessons, taught by our tutors in India on a one-to-one basis or alongside five to ten learners at a similar stage. Clear thinking is taught before prompting, so AI helps rather than replaces the learner. There is no charge for the first lesson; continuing is USD 100 a month in a group or USD 150 a month privately.',
  lead: 'AI chatbots are famous for a particular kind of mistake: producing a quotation that sounds exactly right and was never said. The fix is old-fashioned checking against the source, and a Python learner can automate it. Our Dartford project uses a real book, a biography of the engineer Richard Trevithick written by his son Francis, which records that "Messrs. John Hall and Sons, of Dartford" experimented with his patents and that a boat fitted with the resulting condenser "was called the \'Dartford.\'" The learner writes six quotations, some genuine, some subtly changed and one invented, and builds a checker to sort them. The most dangerous result is a wrong quote that scores 98 percent similar.',
  wa: 'Hello Modern Age Coders, we would like a free coding or AI lesson for a learner in Dartford.',

  picks: {
    eyebrow: 'Dartford course picks',
    h2: 'Thinking, vibe coding and AI courses for Dartford',
    intro: 'The learner\'s age and interests are the guide. Every course opens with a free live lesson, and booking needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think programme: careful reading, checking and logic.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps built by talking to AI and tested by the learner.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects for teenagers, including the quotation checker.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Why language models invent things, and how to build checks and agents around them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Dartford borough',
      h2: 'Young families, fewer older residents',
      intro: 'Six 2021 census age bands for Dartford from Nomis, compared with England.',
      body: [
        { kind: 'table', caption: 'Dartford borough beside England: six age bands from TS007A (2021)', head: ['Age group', 'Dartford people', 'Dartford share', 'England share'], rows: [
          ['0 to 4', '8,282', '7.1%', '5.4%'],
          ['5 to 9', '8,268', '7.1%', '5.9%'],
          ['30 to 34', '9,861', '8.4%', '7.0%'],
          ['35 to 39', '9,629', '8.2%', '6.7%'],
          ['70 to 74', '4,252', '3.6%', '5.0%'],
          ['75 to 79', '2,971', '2.5%', '3.6%']
        ] },
        { kind: 'p', text: 'Children under five are 1.7 points above England and adults aged 35 to 39 1.5 points above, while every band over 70 is well below. The ONS counts Swanscombe, Stone, Ebbsfleet Valley, Darenth and Bean as separate built-up areas inside the borough. Pupils follow England\'s national curriculum; share your school\'s term dates and we will keep lessons out of the holidays.' },
        { kind: 'callout', h3: 'Thinking before prompting', p: 'Why we teach reasoning first is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>. The county has its own <a class="cg-inline-link" href="/coding-classes-in-kent">Kent</a> page.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Dartford project',
      h2: 'A checker for invented quotations',
      intro: 'Search the book for each quote, first exactly, then approximately, and decide what to trust.',
      body: [
        { kind: 'p', text: 'The learner downloads the second volume of Francis Trevithick\'s biography of his father, about 16,000 lines. The first check is a plain exact search, and it fails even for a genuine sentence, because the book breaks that line in the middle, after the word "these". The fix is normalising: turning every run of spaces and line breaks into one space, straightening curly quotation marks, and ignoring capital letters. Now both genuine quotations are found exactly. For everything else the program slides a window the length of the quote across the whole book and scores how similar each window is, keeping the closest match.' },
        { kind: 'table', caption: 'Six test quotations checked against the Life of Richard Trevithick, Volume 2, our Python run, 28 September 2026', head: ['Test quotation', 'Exact match after normalising', 'Top similarity score'], rows: [
          ['Genuine sentence about Messrs. John Hall and Sons', 'Yes', '1.000'],
          ['Genuine, typed with different line breaks', 'Yes', '1.000'],
          ['Year changed from 1832 to 1834', 'No', '0.984'],
          ['One word changed', 'No', '0.848'],
          ['Real phrases stitched from two places', 'No', '0.795'],
          ['Invented in the book\'s style', 'No', '0.512']
        ] },
        { kind: 'p', text: 'The invented quotation scores 0.512 and is easy to reject. The altered ones are the real test. Changing "pioneer of locomotion" to "pioneer of the railway" drops the score to 0.848. But changing one year, 1832 to 1834, in "the Waterwitch Company made experiments with those plans", leaves the score at 0.984, a figure most people would read as a match. A rule such as "accept anything above 0.9" would approve a false date. And the stitched quote, real fragments joined into a sentence the book never contains, scores 0.795, uncomfortably close to a lightly misquoted genuine line.' },
        { kind: 'p', text: 'So the learner builds a stricter checker. A quotation passes only with an exact match after normalising. A near match is reported with the book\'s actual wording beside it, so a person can see the difference. Any number in the quotation must appear identically in the matched text. This is exactly how a careful researcher, or a well-designed AI agent, should treat quotations: similarity is a clue for finding the passage, not proof that the quote is right.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play spot-the-difference between a real sentence from a book and a changed copy.' },
          { h3: 'Ages 11 to 15', p: 'Write a Python search that finds quotations in a text after tidying spaces and capitals.' },
          { h3: 'Ages 15 and up', p: 'Add fuzzy matching, test thresholds and design rules that catch changed numbers.' }
        ] },
        { kind: 'callout', h3: 'Francis Trevithick\'s words, our checker', p: 'Genuine quotations come from Project Gutenberg\'s edition of the Life of Richard Trevithick, Volume 2. The altered and invented quotations were written by us for the test, and the checker and its scores are our own work.' }
      ]
    },
    {
      id: 'agents', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'Why AI output needs a checker',
      intro: 'Language models write fluent text; checking it is a separate job.',
      body: [
        { kind: 'table', caption: 'Dartford in the Life of Richard Trevithick (Project Gutenberg)', head: ['Detail', 'From the book'], rows: [
          ['The firm', '"Messrs. John Hall and Sons, of Dartford"'],
          ['What they did', 'Experimented on two of Trevithick\'s patents'],
          ['The name that stuck', 'The tubular condenser "was called Hall\'s Condenser"'],
          ['The boat', 'First tried in a boat "called the \'Dartford.\'"'],
          ['A related trial', 'The Waterwitch Company experiments of 1832']
        ] },
        { kind: 'p', text: 'Vibe coding is the quickest way for many learners to build something like this checker: they describe it, an AI writes it, and it runs. Knowing that a 0.984 score can hide a wrong year is what makes the difference, and that comes from thinking, not from the tool. Our younger learners practise careful reading in the how-to-think programme, teenagers vibe code and test real projects, and older teenagers and adults build AI agents in Python that cite and check their sources; Copilot Studio agent courses are taught one-to-one only. See <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>.' },
        { kind: 'p', text: 'Project Gutenberg and the census office have no connection with Modern Age Coders. The book and the statistics are theirs; the test quotations, the checker and any errors in them are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From spot-the-difference to trustworthy AI',
    intro: 'School year gives a starting guess; the free lesson makes it precise.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Careful reading, checking and logic.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps built with AI, then tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Text, search and AI', p: 'String matching, testing and AI beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'AI you can check', p: 'Language models, citations and agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and quotations',
    h2: 'Is that quote real?',
    intro: 'A similarity score finds the passage; only an exact check proves the words.',
    p1: 'An AI tool might quote the Trevithick biography with the wrong year and a perfectly natural sentence around it. A quick fuzzy search would call it a 98 percent match.',
    p2: 'A Dartford learner who has built and tested this checker knows to compare numbers and wording exactly before repeating any quotation.',
    closer: 'Being able to check whether AI output is real is one of the most useful skills a Dartford teenager can build by coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Swanscombe to Stone, all online',
    intro: 'Any home in the borough with a computer and a dependable connection can join.',
    cells: [
      { h3: 'The learner works', p: 'Students do the typing, prompting and testing; the tutor follows via screen share and asks the next useful question.' },
      { h3: 'Level set by the trial', p: 'A Year 4 or Year 13 learner starts where the free lesson places them, with the exam board in view.' },
      { h3: 'Opening lesson free', p: 'A whole lesson, no fee, ending with a straightforward suggestion.' },
      { h3: 'Stage-matched groups', p: 'Five to ten UK learners progressing at a similar pace.' },
      { h3: 'Two per week', p: 'School holidays stay lesson-free.' },
      { h3: 'The same hour', p: 'Our tutors deal with the UK clock changes.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five Dartford learners at one level who are free at one hour rarely live on the same road. Online, each can join a class that suits.' }
  },

  fees: {
    h2: 'Dartford fees',
    intro: 'Dartford pays the one international rate we charge outside India.',
    first: 'A full lesson free of charge, then a course recommendation.',
    group: 'Around eight live small-group lessons per month.',
    private: 'Around eight live private lessons per month.',
    closer: 'We charge in US dollars rather than sterling. Invoicing waits until the free lesson has chosen a course and a weekly time; breaks, missed lessons and changing between group and private are explained under pricing.'
  },

  reviewsH2: 'Google reviews from Kent and further afield',

  book: {
    h2: 'Book a free Dartford lesson',
    intro: 'Tell us roughly how old the learner is, or their year group, and something they enjoy. The first lesson might be a spot-the-difference logic game, a Scratch project built with AI, a first Python search, or a tiny quotation checker.',
    success: 'Thank you. The Dartford request is with us.'
  },

  faq: {
    h2: 'Dartford questions',
    intro: 'The quotation checker, vibe coding, AI agents and lesson details.',
    items: [
      { q: 'What is the population of Dartford?', a: 'The 2021 census counted 116,753 in Dartford borough; the ONS gives 69,130 for the Dartford built-up area.' },
      { q: 'Are online coding and AI lessons available in Dartford?', a: 'Yes. Everything runs on live video for learners aged 6 to 67 across the borough.' },
      { q: 'What is an AI hallucination?', a: 'When an AI produces confident but false content, such as a quotation or fact that does not appear in any source.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, to all ages, with the learner planning first and testing whatever the AI writes.' },
      { q: 'Can teenagers learn to build AI agents?', a: 'Yes, once they have some Python; Copilot Studio agents are taught one-to-one only.' },
      { q: 'Are lessons in person?', a: 'No. Teaching is entirely online.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, in computer science and maths, focused on understanding; we never promise grades.' },
      { q: 'What ages can join?', a: 'From 6 to 67.' },
      { q: 'What do lessons cost?', a: 'The trial is free. Then a group place is USD 100 a month and one-to-one lessons are USD 150 a month.' },
      { q: 'Do you stop for school holidays?', a: 'Yes; tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other Kent pages',
    html: 'Elsewhere in Kent, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-rochester">Rochester</a> has a Dickens summariser, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-maidstone">Maidstone</a> a Hazlitt project and <a class="cg-inline-link" href="/ai-and-programming-classes-in-gillingham">Gillingham</a> William Adams\'s distances. The county is on <a class="cg-inline-link" href="/coding-classes-in-kent">Kent</a>, the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links everything.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dartford and Kent',
  footerPlaces: [
    { href: '/coding-classes-in-kent', label: 'Kent' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-dfd .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-dfd .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.03; }
.cg-root.cg-dfd .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-dfd .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dfd .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-dfd .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-dfd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dfd .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-dfd .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-dfd .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Dartford (E07000107). Nomis Census 2021 TS001 116,753. TS007A: 0 to 4 8,282 (7.1%, England 5.4%); 5 to 9 8,268 (7.1%, 5.9%); 30 to 34 9,861 (8.4%, 7.0%); 35 to 39 9,629 (8.2%, 6.7%); 70 to 74 4,252 (3.6%, 5.0%); 75 to 79 2,971 (2.5%, 3.6%). ONS 2021 BUAs: Dartford 69,130; Swanscombe 15,460; Stone 6,440; Ebbsfleet Valley 2,990; Darenth 2,585; Bean 1,635. Project Gutenberg 46634, Francis Trevithick, Life of Richard Trevithick vol. 2: "Messrs. John Hall and Sons, of Dartford, also experimented on these two patents, and from this the tubular condenser was called Hall\'s Condenser. I think the boat it was first tried in was called the \'Dartford.\'"; "In 1832 the Waterwitch Company made experiments with those plans"; "His high-pressure steam-engine was the pioneer of locomotion".',
    localProject: 'Six test quotations: raw exact search fails on a genuine line (line break); normalised exact: 2 genuine pass. Best fuzzy (difflib, word windows): year 1832->1834 0.984; one word changed 0.848; stitched 0.795; invented 0.512. Strict checker: exact after normalising, near matches shown with source wording, numbers must match. Lesson family: quotation verification / hallucination checking, normalisation, exact vs fuzzy, threshold danger, number checks.',
    requiredMentions: [
      '116,753',
      '69,130',
      'Swanscombe',
      'Ebbsfleet Valley',
      'Darenth',
      'Francis Trevithick',
      'Hall\'s Condenser',
      'Waterwitch',
      'hallucination'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS001 and TS007A, Dartford and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Francis Trevithick, Life of Richard Trevithick, Volume 2 (ebook 46634).', url: 'https://www.gutenberg.org/ebooks/46634' }
    ],
    rejectedClaims: [
      'Trevithick\'s death and burial at Dartford: in the source but excluded under the cluster content rules.',
      'Where the Hall works stood or what remains: not read from a source; not claimed.',
      'The altered and invented quotations are ours, labelled as test material on the page.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
