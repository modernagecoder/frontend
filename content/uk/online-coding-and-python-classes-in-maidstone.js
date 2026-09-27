'use strict';
// Maidstone (cg- town page, UK cluster Phase 8, towns band A, row 351). Keyword slug per the owner's 2026-09-27
// instruction. Spine: does a writer repeat himself, and can code prove it? Anchors (read raw 28 September 2026): Project
// Gutenberg 54219, Louise Imogen Guiney, "A Little English Gallery", on Hazlitt: "He was born into a high-principled and
// intelligent family, at Mitre Lane, Maidstone, Kent, on the 10th of April, in the year 1778"; "He cites, twice and thrice,
// the same passages from the Elizabethans." Project Gutenberg 3020, William Hazlitt, "Table Talk: Essays on Men and
// Manners": two volumes, 16 + 17 essays, each followed by a "NOTES to ESSAY" section. Checks: Gutenberg 8824 Wordsworth,
// Poems in Two Volumes vol. 2: "Be now for ever taken from my sight, / Though nothing can bring back the hour / Of
// splendour in the grass, of glory in the flower"; Hazlitt (both essays): "Of glory in the grass, of splendour in the
// flow'r" / "flower", and "vanish'd" for "taken". Gutenberg 13535 (Gray's Elegy): "Ev'n in our ashes live their wonted
// fires". Gutenberg 1531 Othello: "And knows all qualities, with a learned spirit"; Hazlitt: "knew all qualities with a
// learned spirit".
// Our run (scratchpad mds/reuse.py): 33 essays, 160,664 words (152,827 without the NOTES sections). Index every run of N
// words; keep runs found in two or more essays; merge overlapping runs into passages. Notes removed: N 6: 124 shared runs;
// N 8: 41 shared runs forming 5 passages; N 10: 33 runs, 3 passages. The 5 at N 8: a 30-word verse passage ("will pass
// for learneder than he that's known"), On the Ignorance of the Learned + On the Aristocracy of Letters; Gray's Elegy lines
// (16 words), On Will-Making + On the Fear of Death; Wordsworth's ode (14 words, stops before flow'r/flower), On the Past
// and Future + Why Distant Objects Please; Othello (8 words), On Genius and Common Sense (continued) + On the Knowledge of
// Character; and one stock phrase, "so far is it from being true that", On Genius and Common Sense + On Coffee-House
// Politicians. Hazlitt signs the verse "--BUTLER." At N 8 every repeat appears in exactly two essays, none in three.
// Lesson family: text reuse detection with an n-gram inverted index across documents, threshold choice, stock phrases vs
// quotations, spelling variants breaking matches, editorial notes; then verifying quotations against the source poems.
// Screened: text reuse, near-duplicate, n-gram, Hazlitt, Guiney 0 hits (Salisbury used rolling-hash substring search;
// Cheltenham collocations; Ipswich KWIC).
// Place facts: Nomis Census 2021 TS007A, Maidstone E07000110: total 175,782; 0 to 4 10,390 (5.9%; England 5.4%); 5 to 9
// 10,874 (6.2%; 5.9%); 15 to 19 8,920 (5.1%; 5.7%); 20 to 24 8,858 (5.0%; 6.0%); 70 to 74 9,299 (5.3%; 5.0%); 75 to 79
// 6,662 (3.8%; 3.6%). ONS 2021 BUAs: Maidstone 109,490 (our OA sum inside the borough 109,307); Coxheath 8,455; Bearsted
// 8,350; Staplehurst 6,180; Marden 3,490; Headcorn 3,295.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'MAIDSTONE', label: 'Maidstone', blurb: 'Online coding and Python classes for Maidstone, with a project that searches William Hazlitt\'s essays for the quotations he used more than once.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-maidstone',
  code: 'mds',
  accent: '#5C2944',
  accentRationale: 'Maidstone: an ink-and-claret red (9.12:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Maidstone',
    eyebrow: 'Maidstone, Kent, England',
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
  routeLabel: 'Maidstone, England',
  title: 'Online Coding and Python Classes in Maidstone | AI, Ages 6 to 67',
  description: 'Live online coding, Python and AI lessons for Maidstone, Bearsted, Coxheath and Staplehurst learners aged 6 to 67, one-to-one or in small groups. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Maidstone, and a project that finds the quotations William Hazlitt reused across his Table Talk essays.',
  twitterDescription: 'Maidstone online coding, Python and AI classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Maidstone',
    description: 'Online coding, Python, AI and mathematics for children, teenagers and adults in Maidstone, taught live and matched to level.'
  },

  h1: 'Online coding and Python classes in Maidstone',
  capsuleQ: 'Which are the best online coding and Python classes in Maidstone?',
  capsule: 'The 2021 census put Maidstone borough at 175,782 people, and the ONS gives 109,490 for the Maidstone built-up area, which runs slightly past the borough line, with Coxheath and Bearsted the next largest places. Young children are a bit above the England share and people aged 15 to 24 a little below it. From the town centre to Staplehurst and Headcorn, anyone aged 6 to 67 can learn coding, Python, AI and maths in live video lessons led by our India-based tutors, taught solo or with five to ten classmates of similar level. The first lesson is free and points to a course. Maidstone\'s project begins with a writer born in the town. Once the trial is done, group lessons are USD 100 a month and private lessons USD 150 a month.',
  lead: 'William Hazlitt, one of the sharpest essayists in English, was born "at Mitre Lane, Maidstone, Kent, on the 10th of April, in the year 1778", according to Louise Imogen Guiney\'s portrait of him. She also makes a claim that can be tested: "He cites, twice and thrice, the same passages from the Elizabethans." Hazlitt\'s collection Table Talk is free on Project Gutenberg, 33 essays and about 160,000 words. No person could hold all of it in mind at once, but a Python program can index every short run of words and report any run that turns up in more than one essay. What it finds is smaller, and more surprising, than the claim suggests.',
  wa: 'Hello Modern Age Coders, please could we have a free coding or Python lesson for a learner in Maidstone?',

  picks: {
    eyebrow: 'Maidstone course picks',
    h2: 'A good first course in Maidstone',
    intro: 'Choose using age and interests as a guide. There is a free live lesson before anything else, and we never ask for card details to book it.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 9', note: 'Scratch stories, word games and animated characters.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Beginner Python that splits text into words and counts them.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Complete teen Python, where the Hazlitt project sits.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults and students', note: 'Python and AI for working with documents and text.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Maidstone borough',
      h2: 'Close to England, with small differences',
      intro: 'Six census age bands for the borough from Nomis, with England\'s share alongside.',
      body: [
        { kind: 'table', caption: 'Maidstone borough against England, six age bands (TS007A, 2021)', head: ['Age band', 'Maidstone residents', 'Maidstone %', 'England %'], rows: [
          ['0 to 4', '10,390', '5.9%', '5.4%'],
          ['5 to 9', '10,874', '6.2%', '5.9%'],
          ['15 to 19', '8,920', '5.1%', '5.7%'],
          ['20 to 24', '8,858', '5.0%', '6.0%'],
          ['70 to 74', '9,299', '5.3%', '5.0%'],
          ['75 to 79', '6,662', '3.8%', '3.6%']
        ] },
        { kind: 'p', text: 'Most bands are within half a point of England; the clearest gap is among people in their early twenties, a full point lower. The ONS lists Coxheath at 8,455, Bearsted at 8,350, Staplehurst at 6,180, Marden at 3,490 and Headcorn at 3,295 as built-up areas inside the borough. Across Kent the curriculum is the one set for England; mention the holiday weeks at your school and no lesson will fall in them.' },
        { kind: 'callout', h3: 'County and region', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-kent">Kent</a> page covers the county, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a> the wider region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Maidstone project',
      h2: 'Did Hazlitt repeat himself?',
      intro: 'Index every run of words in 33 essays, find the runs shared between essays, then check them.',
      body: [
        { kind: 'p', text: 'The learner downloads Table Talk and splits it into essays by their headings, 16 in the first volume and 17 in the second. The first surprise is that every essay ends with a section headed NOTES, written by the editor rather than Hazlitt. Those notes are cut out first, which removes 7,837 words. The program then lowercases the text, splits it into words and records every run of N words in a dictionary, with the set of essays where that run appears. Any run found in two or more essays is a candidate, and overlapping candidates are joined into longer passages.' },
        { kind: 'table', caption: 'Passages shared by two Table Talk essays, runs of 8 words, our Python run, 28 September 2026', head: ['Shared passage', 'Words', 'Found in', 'What it is'], rows: [
          ['"...will pass for learneder than he that\'s known..."', '30', 'On the Ignorance of the Learned; On the Aristocracy of Letters', 'Verse signed BUTLER'],
          ['"...even in our ashes live their wonted fires"', '16', 'On Will-Making; On the Fear of Death', 'Gray\'s Elegy'],
          ['"...bring back the hour of glory in the grass..."', '14', 'On the Past and Future; Why Distant Objects Please', 'Wordsworth, misquoted'],
          ['"...knew all qualities with a learned spirit"', '8', 'On Genius and Common Sense (continued); On the Knowledge of Character', 'Othello, adapted'],
          ['"so far is it from being true that"', '8', 'On Genius and Common Sense; On Coffee-House Politicians', 'Just a habit of phrase']
        ] },
        { kind: 'p', text: 'The choice of N changes everything. With runs of 6 words, 124 runs are shared, and most are ordinary phrases any writer repeats, such as "enough to show that there is no" or "tell whether you are right or wrong". With 8 words, 41 runs remain and they join into the five passages above. With 10, only three passages survive and the Othello line drops out. There is no correct N; the learner reports the answer for several and reads the matches by hand. At 8, four of the five are quotations and one is Hazlitt\'s own turn of phrase. Each of them turns up in exactly two essays and none in three, so within this one book Guiney\'s "twice and thrice" is only half borne out, though she may have meant his work as a whole.' },
        { kind: 'p', text: 'Look closely at the Wordsworth match. It stops one word early, because one essay prints "flow\'r" and the other "flower", and to a program those are different words. Checking the poem itself, in Wordsworth\'s Poems in Two Volumes on Project Gutenberg, gives the real surprise: the original reads "Of splendour in the grass, of glory in the flower". Hazlitt swapped glory and splendour, and he made the same swap both times. He was quoting from memory, and his memory was consistent. The Othello line is also changed, "knows" becoming "knew". Finding a reused passage is only half the job; comparing it with its source is the other half.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Find the same three-word phrase in two stories, first by eye, then with a highlighter hunt.' },
          { h3: 'Ages 11 to 15', p: 'Build a dictionary of word runs in Python and list any that repeat.' },
          { h3: 'Ages 15 and up', p: 'Index all 33 essays, compare several N values, and verify every match against its source.' }
        ] },
        { kind: 'callout', h3: 'Hazlitt\'s text, our index', p: 'The essays, Guiney\'s portrait and the poems used for checking are all Project Gutenberg editions. The splitting, the indexing and every count on this page are our own work.' }
      ]
    },
    {
      id: 'hazlitt', tint: 'deep', eyebrow: 'Why Hazlitt',
      h2: 'A Maidstone-born essayist under the microscope',
      intro: 'What the sources say, and the three quotations checked word by word.',
      body: [
        { kind: 'table', caption: 'Hazlitt\'s quotations against their sources (Project Gutenberg texts)', head: ['Item', 'Hazlitt in Table Talk', 'Source text'], rows: [
          ['Birthplace', 'Mitre Lane, Maidstone, 10 April 1778 (Guiney)', 'Not in Table Talk'],
          ['Wordsworth\'s ode', '"Of glory in the grass, of splendour in the flow\'r"', '"Of splendour in the grass, of glory in the flower"'],
          ['Wordsworth, the line before', '"Be now for ever vanish\'d from my sight"', '"Be now for ever taken from my sight"'],
          ['Gray\'s Elegy', '"Even in our ashes live their wonted fires"', '"Ev\'n in our ashes live their wonted fires"'],
          ['Othello', '"knew all qualities with a learned spirit"', '"knows all qualities, with a learned spirit"']
        ] },
        { kind: 'p', text: 'Detecting reused text is serious work far beyond literature. Search engines remove near-duplicate pages, universities check essays for copied passages, and the companies that build AI models try to find and remove repeated documents from their training data. The pitfalls are the ones met here: a threshold that is too low floods the results with stock phrases, one that is too high misses real reuse, and small spelling differences hide matches. A Maidstone learner who has run this on Hazlitt understands what such tools can and cannot see.' },
        { kind: 'p', text: 'Neither Project Gutenberg nor the census office has any tie to Modern Age Coders. The texts and statistics are theirs to credit; our index, comparisons and any slips belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From word games to text analysis',
    intro: 'The school year hints at a start; the free lesson confirms it.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Stories and blocks', p: 'Scratch projects with characters, words and patterns.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 5 to 8', h3: 'Python and words', p: 'Strings, lists and dictionaries in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Text and AI', p: 'Text processing, data and AI beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Documents at scale', p: 'Adult Python for automating reading and checking documents.', courses: ['python-ai-automation-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and quotations',
    h2: 'Would an AI spot the swapped words?',
    intro: 'Language models know famous lines well, sometimes too well.',
    p1: 'Ask a chatbot to quote Wordsworth\'s line about the grass and the flower and it will probably give the original. Ask it what Hazlitt wrote, and it may silently correct him, because the familiar version is the one it has seen most often.',
    p2: 'A Maidstone learner who has compared Hazlitt\'s words with Wordsworth\'s, character by character, knows that checking against the actual text is the only reliable test.',
    closer: 'Maidstone teenagers who can check a source instead of trusting a confident summary have a real advantage in 2026, and coding teaches exactly that.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Bearsted to Staplehurst, lessons online',
    intro: 'Any home in the borough with a computer and a dependable connection can take part.',
    cells: [
      { h3: 'The learner codes', p: 'Students type everything themselves; the tutor watches through screen share and guides by asking.' },
      { h3: 'Pitched by the trial', p: 'Year 4 or Year 12, the free lesson sets the first step, and the exam board is taken into account.' },
      { h3: 'Trial costs nothing', p: 'A full lesson free of charge, closing with a course suggestion.' },
      { h3: 'Same-stage classmates', p: 'Groups of five to ten UK learners working at one level.' },
      { h3: 'Twice each week', p: 'No lessons in school holidays.' },
      { h3: 'Fixed local time', p: 'Our tutors adjust for British Summer Time, so your slot holds.' }
    ],
    spec: { title: 'Why we teach small groups online', p: 'Five Maidstone learners at the same stage, all free at one hour, seldom live near one another. Online, each can join the class that suits them.' }
  },

  fees: {
    h2: 'Maidstone fees',
    intro: 'Maidstone pays the one international rate we use for every country other than India.',
    first: 'A whole lesson free, then a course recommendation.',
    group: 'Close to eight live group lessons each month.',
    private: 'Close to eight live one-to-one lessons each month.',
    closer: 'Fees are in US dollars, not pounds sterling. You are not charged until the free lesson has settled the course and a regular weekly slot; the pricing page explains holiday breaks, missed lessons and moving between group and private.'
  },

  reviewsH2: 'Kent and UK families on Google',

  book: {
    h2: 'Book a free Maidstone lesson',
    intro: 'Send us a quick note with the learner\'s age or school year and a favourite pastime. Possible first lessons: a Scratch story, a first Python program, a small AI experiment, or finding repeated phrases in a short text.',
    success: 'Thank you. Your Maidstone request has come through.'
  },

  faq: {
    h2: 'Maidstone questions',
    intro: 'The Hazlitt project, local numbers and how lessons work.',
    items: [
      { q: 'What is the population of Maidstone?', a: 'The 2021 census recorded 175,782 in Maidstone borough; the ONS gives 109,490 for the Maidstone built-up area.' },
      { q: 'Can people in Maidstone learn coding and Python online with you?', a: 'Yes. Our lessons run live over video for ages 6 to 67, from Coxheath to Bearsted.' },
      { q: 'What is the Hazlitt project?', a: 'Learners index William Hazlitt\'s Table Talk and find the passages that appear in more than one essay, then check them against their sources.' },
      { q: 'Was Hazlitt born in Maidstone?', a: 'Louise Imogen Guiney gives his birthplace as Mitre Lane, Maidstone, on 10 April 1778.' },
      { q: 'What did the program find?', a: 'At runs of eight words, five shared passages; four are quotations, and Hazlitt misquotes Wordsworth the same way twice.' },
      { q: 'Are lessons in person?', a: 'No. We teach only live online.' },
      { q: 'Do you help GCSE and A level students?', a: 'In maths and computing, yes, with the aim of real understanding and no promise of grades.' },
      { q: 'How old can learners be?', a: 'Anywhere from 6 to 67.' },
      { q: 'What are the prices?', a: 'The first lesson is free. Then it is USD 100 a month for a group place, or USD 150 a month for one-to-one tuition.' },
      { q: 'Do lessons pause for half-term?', a: 'Yes; let us know the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other pages in the South East',
    html: 'Elsewhere in the county, <a class="cg-inline-link" href="/best-coding-class-in-canterbury">Canterbury</a> has a page, and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-crawley">Crawley</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-worthing">Worthing</a> are among the region\'s towns. County-wide options are gathered on <a class="cg-inline-link" href="/coding-classes-in-kent">Kent</a>, regional ones on <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>, and our <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> reaches every page.',
    waLabel: 'Contact us on WhatsApp'
  },

  footerHeading: 'Maidstone and Kent',
  footerPlaces: [
    { href: '/coding-classes-in-kent', label: 'Kent' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-mds .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-mds .cg-hero h1 { font-weight: 780; letter-spacing: -0.028em; line-height: 1.03; }
.cg-root.cg-mds .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 1.3rem; }
.cg-root.cg-mds .cg-eyebrow { letter-spacing: 0.24em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-mds .cg-section-head h2 { max-width: 20ch; letter-spacing: -0.021em; }
.cg-root.cg-mds .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-mds .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mds .cg-table th { letter-spacing: 0.06em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-mds .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-mds .cg-callout { border-left-width: 3px; border-radius: 0 16px 16px 0; }
`,

  dossier: {
    curriculumAuthority: 'Maidstone (E07000110). Nomis Census 2021 TS007A: total 175,782; 0 to 4 10,390 (5.9%, England 5.4%); 5 to 9 10,874 (6.2%, 5.9%); 15 to 19 8,920 (5.1%, 5.7%); 20 to 24 8,858 (5.0%, 6.0%); 70 to 74 9,299 (5.3%, 5.0%); 75 to 79 6,662 (3.8%, 3.6%). ONS 2021 BUAs: Maidstone 109,490; Coxheath 8,455; Bearsted 8,350; Staplehurst 6,180; Marden 3,490; Headcorn 3,295. Project Gutenberg 54219, Guiney, A Little English Gallery: Hazlitt born "at Mitre Lane, Maidstone, Kent, on the 10th of April, in the year 1778"; "He cites, twice and thrice, the same passages from the Elizabethans." Gutenberg 3020 Hazlitt, Table Talk (33 essays). Gutenberg 8824 Wordsworth: "Of splendour in the grass, of glory in the flower"; "Be now for ever taken from my sight". Gutenberg 13535: "Ev\'n in our ashes live their wonted fires". Gutenberg 1531 Othello: "knows all qualities, with a learned spirit".',
    localProject: '33 essays, 160,664 words, 152,827 without NOTES. Shared runs across essays: N 6 124; N 8 41 runs = 5 passages (30-word verse "learneder", Gray 16, Wordsworth 14 stopping at flow\'r/flower, Othello 8, stock phrase "so far is it from being true that"); N 10 33 runs = 3 passages. Hazlitt swaps glory/splendour in both essays; "vanish\'d" for "taken"; "knew" for "knows". Lesson family: text reuse detection via n-gram inverted index, threshold choice, stock phrases, spelling variants, editorial notes, source verification.',
    requiredMentions: [
      '175,782',
      '109,490',
      'Coxheath',
      'Bearsted',
      'Staplehurst',
      'Headcorn',
      'William Hazlitt',
      'Mitre Lane',
      'Table Talk',
      'splendour in the grass'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Maidstone and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Louise Imogen Guiney, A Little English Gallery (ebook 54219).', url: 'https://www.gutenberg.org/ebooks/54219' },
      { claim: 'Project Gutenberg, William Hazlitt, Table Talk: Essays on Men and Manners (ebook 3020).', url: 'https://www.gutenberg.org/ebooks/3020' },
      { claim: 'Project Gutenberg, William Wordsworth, Poems in Two Volumes, Volume 2 (ebook 8824).', url: 'https://www.gutenberg.org/ebooks/8824' }
    ],
    rejectedClaims: [
      'The 30-word "learneder" verse: Hazlitt signs it "--BUTLER." in Table Talk; no dates or further attribution claimed, and no Elizabethan tally made.',
      'Whether Guiney\'s "twice and thrice" holds across Hazlitt\'s whole output: only Table Talk was tested.',
      'Mitre Lane today or any plaque: not read from a source; not claimed.',
      'Hazlitt\'s later life, politics and quarrels: not used.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
