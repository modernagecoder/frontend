'use strict';
// Cheltenham (cg- town page, UK cluster Phase 8, towns band A, row 345). Keyword slug per the owner's 2026-09-27
// instruction. Spine: which words belong together? Anchors (read raw 27 September 2026): Project Gutenberg ebook 69599,
// Elizabeth Helen Shillito, "Dorothea Beale: Principal of the Cheltenham Ladies' College, 1858-1906": "The school was
// opened on February 13, 1854, in Cambray House"; "By the end of the first year the 100 pupils had increased to 150";
// "at the end of 1857 the numbers had fallen to 89"; the 1858 advertisement for a Principal "capable of conducting an
// institution with not less than one hundred day pupils". Project Gutenberg ebook 60064, Elizabeth Raikes, "Dorothea Beale
// of Cheltenham" (release August 6, 2019): "by the end of the year there were one hundred and twenty pupils"; "the numbers
// crept down, first to ninety-three, then to eighty-nine". (The two biographies disagree on the first year, 150 vs 120; the
// page mentions it only as an aside.)
// Our run (27 September 2026) on Raikes's text, START to END markers, lines with web addresses removed, Unicode-aware
// tokens, lower case: 146,461 words; 71,376 different adjacent word pairs, 76.2% seen only once. Raw count: "of the" 1,340,
// "in the" 700, "to the" 530, "miss beale" 514. Raw PMI: 273 pairs tie at the maximum (17.2 bits), every one seen once,
// including editors' notes ("html version", "internet archive"). PMI with at least 5 sightings: names (joshua fitch,
// brantwood coniston). With at least 20: boarding houses (22, 10.7), head mistress (28, 10.0), head mistresses (21, 9.9),
// st hilda's (53, 9.9), lady principal (45, 8.8), old pupil (27, 8.7). "ladies college" 71 times, PMI 7.4; "miss beale" 6.8.
// An ASCII-only tokeniser splits "Fräulein" (5 times) into "fr" and "ulein".
// Lesson family: collocation scoring (raw frequency vs pointwise mutual information vs frequency threshold), plus
// tokenisation and boilerplate; screened (collocation, pointwise mutual information, keyness: 0 hits; Bath used cosine
// similarity over whole novels, a different question).
// Place facts: Nomis Census 2021 TS007A, Cheltenham E07000078: total 118,833; 5 to 9 6,378 (5.4%; England 5.9%); 20 to 24
// 7,895 (6.6%; 6.0%); 25 to 29 8,134 (6.8%; 6.6%); 50 to 54 7,896 (6.6%; 6.9%); 80 to 84 3,337 (2.8%; 2.5%); 85+ 3,671
// (3.1%; 2.4%). ONS 2021 BUA Cheltenham 115,940 (extends a little beyond the borough; Prestbury crosses the boundary).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CHELTENHAM', label: 'Cheltenham', blurb: 'Online coding and Python classes for Cheltenham, with a project that finds the word pairs that define a biography of Dorothea Beale.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-cheltenham',
  code: 'chl',
  accent: '#5C1C17',
  accentRationale: 'Cheltenham: a Regency ironwork brown-red (10.36:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Cheltenham',
    eyebrow: 'Cheltenham, Gloucestershire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Gloucestershire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-west-england', name: 'South West England' }],
  nav: [
    { label: 'Gloucestershire', href: '/coding-classes-in-gloucestershire' },
    { label: 'South West', href: '/coding-and-ai-classes-in-south-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Cheltenham, England',
  title: 'Online Coding and Python Classes in Cheltenham | AI, 6 to 67',
  description: 'Live online coding, Python and AI lessons for Cheltenham children, teenagers and adults aged 6 to 67, one-to-one or in small groups. The first lesson is free.',
  ogDescription: 'Online coding and Python classes for Cheltenham, and a project that finds which word pairs truly belong together in a biography of Dorothea Beale.',
  twitterDescription: 'Cheltenham online coding, Python and AI classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Cheltenham',
    description: 'Online coding, Python, AI and mathematics for children, teenagers and adults in Cheltenham, taught live in English and matched to level.'
  },

  h1: 'Online coding and Python classes in Cheltenham',
  capsuleQ: 'What are the best online coding and Python classes in Cheltenham?',
  capsule: 'Cheltenham borough held 118,833 people when the 2021 census was taken; the ONS built-up area of Cheltenham, reaching slightly past the boundary, holds 115,940. People in their twenties and those over 80 are above the England share, and young children a little below it. Cheltenham learners from 6 to 67 can study coding, Python, AI and maths with our tutors in India over live video, alone or in classes of five to ten at one level. A free opening lesson points to the right course. The Cheltenham project reads a century-old biography of a headteacher remembered across the town. Afterwards, lessons cost USD 100 monthly as part of a small class, or USD 150 monthly one-to-one.',
  lead: 'Elizabeth Helen Shillito records that a new college for girls opened in Cheltenham on 13 February 1854, in Cambray House, and that in 1858 it advertised for a Principal. The woman appointed, Dorothea Beale, led it until 1906, and a fuller biography by Elizabeth Raikes, Dorothea Beale of Cheltenham, runs to 146,461 words. Which pairs of words define that book? Count every pair of neighbouring words and the winner is "of the", which says nothing. Switch to a clever score called pointwise mutual information and the winners are pairs seen exactly once, some of them publisher\'s notes. The right answer needs a third step. A Cheltenham learner can build all three in Python and see why language tools need both statistics and judgement.',
  wa: 'Hello Modern Age Coders, I would like a free online coding or Python lesson for a learner in Cheltenham.',

  picks: {
    eyebrow: 'Cheltenham starting points',
    h2: 'Courses Cheltenham learners pick first',
    intro: 'Choose by age and interest. The first live lesson in each is free, and booking asks for no card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with words, stories and matching games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Beginner Python with text, plus small AI projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, including the word-pair project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Adult Python from scratch, through text analysis and data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Cheltenham borough',
      h2: 'Young adults and a long-lived town',
      intro: 'Nomis figures for six age bands, the borough beside the whole of England.',
      body: [
        { kind: 'table', caption: 'Selected ages in Cheltenham compared with England (TS007A, 2021)', head: ['Age', 'Cheltenham residents', 'Cheltenham %', 'England %'], rows: [
          ['5 to 9', '6,378', '5.4%', '5.9%'],
          ['20 to 24', '7,895', '6.6%', '6.0%'],
          ['25 to 29', '8,134', '6.8%', '6.6%'],
          ['50 to 54', '7,896', '6.6%', '6.9%'],
          ['80 to 84', '3,337', '2.8%', '2.5%'],
          ['85 and over', '3,671', '3.1%', '2.4%']
        ] },
        { kind: 'p', text: 'The oldest residents stand well above the national share, as do people in their twenties, while children are slightly fewer. The ONS counts one main built-up area, 115,940 people, that covers most of the borough and reaches a little beyond it. Gloucestershire schools teach England\'s national curriculum, and our timetable pauses for the holiday weeks you tell us.' },
        { kind: 'callout', h3: 'County and region', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-gloucestershire">Gloucestershire</a> page covers the county; <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a> gathers the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Cheltenham project',
      h2: 'Finding the word pairs that matter',
      intro: 'Raw counts, pointwise mutual information, and a minimum number of sightings.',
      body: [
        { kind: 'p', text: 'The learner downloads Raikes\'s biography from Project Gutenberg, removes the lines that hold web addresses, lower-cases every word and lists each pair of neighbouring words. The book produces 71,376 different pairs, and 76.2 per cent of them appear only once. The first scoring rule is simply to count. The top four are "of the" at 1,340, "in the" at 700, "to the" at 530 and "miss beale" at 514. Only the last tells you anything about the book; the others would top the list for almost any English text.' },
        { kind: 'table', caption: 'Our Python collocation scores for Dorothea Beale of Cheltenham, 27 September 2026', head: ['Scoring rule', 'Top pairs', 'Score', 'Verdict'], rows: [
          ['Raw count', 'of the; in the; to the', '1,340; 700; 530', 'Grammar, not meaning'],
          ['Pointwise mutual information, any pair', '273 pairs tied', '17.2 bits, each seen once', 'Rare accidents and editors\' notes'],
          ['Mutual information, seen 5+ times', 'Joshua Fitch; Brantwood, Coniston', '14.1; 14.0', 'Mostly names'],
          ['Mutual information, seen 20+ times', 'boarding houses; head mistress', '10.7; 10.0', 'The vocabulary of the book'],
          ['Same rule, further down', 'lady principal; old pupil', '8.8; 8.7', 'The world of the college']
        ] },
        { kind: 'p', text: 'The second rule is pointwise mutual information, which asks how much more often two words sit side by side than chance would predict. It rewards true partnerships, but it rewards rarity even more. Any pair seen exactly once, made of words that are themselves rare, gets the maximum score: 273 pairs tie at the top, including two editors\' notes about an html version and the Internet Archive. The learner discovers that the scoring rule and the data cleaning are not separate jobs.' },
        { kind: 'p', text: 'The third rule keeps the mutual information score but only counts pairs seen at least a set number of times. At 5, names dominate. At 20, the book finally speaks for itself: boarding houses, head mistress, lady principal, old pupil, all words from the working life of a school. One more trap turns up in testing. A tokeniser that only accepts the letters a to z splits Fräulein, which appears five times, into two meaningless pieces, so the program uses a pattern that accepts any letter in any alphabet.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'List word pairs that always go together, like fish and chips, and find them in a short story.' },
          { h3: 'Ages 11 to 15', p: 'Count neighbouring word pairs in Python and print the most common.' },
          { h3: 'Ages 15 and up', p: 'Compute pointwise mutual information, add a minimum count, and fix the tokeniser.' }
        ] },
        { kind: 'callout', h3: 'Two biographies, our counting', p: 'The text and facts come from Project Gutenberg editions of the biographies by Elizabeth Raikes and Elizabeth Helen Shillito. The word counts and scores are ours.' }
      ]
    },
    {
      id: 'college', tint: 'deep', eyebrow: 'Why Dorothea Beale',
      h2: 'A college that opened in Cambray House',
      intro: 'What the two biographies record about the early years.',
      body: [
        { kind: 'table', caption: 'The college\'s early years, from Shillito and Raikes (Project Gutenberg)', head: ['Detail', 'What the books say'], rows: [
          ['Opened', '13 February 1854, in Cambray House (Shillito)'],
          ['End of the first year', '150 pupils (Shillito) or 120 (Raikes)'],
          ['End of 1857', '89 pupils, in both books'],
          ['1858', 'An advertisement for a new Principal'],
          ['Dorothea Beale\'s years', 'Principal from 1858 to 1906'],
          ['Raikes\'s biography', '146,461 words by our count']
        ] },
        { kind: 'p', text: 'Collocations power much of the software that handles language. Search engines use them to recognise phrases, autocomplete uses them to guess the next word, translation tools use them to keep idioms together, and the large language models behind chatbots learn a vast version of the same statistics. Every one of them has to stop rare accidents looking important. A Cheltenham learner who has watched 273 tied pairs give way to boarding houses and head mistress understands the problem from the inside.' },
        { kind: 'p', text: 'Modern Age Coders has no link with Project Gutenberg, the college or the census office. The books and figures are theirs; the scoring, and any error in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From fish and chips to language models',
    intro: 'School years are only a guide; the trial settles the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Word games', p: 'Block coding with words, pairs and stories.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and text', p: 'Strings, counting and dictionaries in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Language and AI', p: 'Text statistics and AI alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Working with text', p: 'Adult Python for text and data projects.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and language',
    h2: 'How does an AI know which words go together?',
    intro: 'The statistics behind language models start with pairs like these.',
    p1: 'A chatbot learns which words follow which from enormous amounts of text. The same traps the learner met, grammar words everywhere and rare pairs that look meaningful, had to be handled in far larger form.',
    p2: 'A Cheltenham learner who has scored word pairs three ways can see why a model sometimes produces a phrase that sounds right and means little.',
    closer: 'Seeing the statistics behind the words is a strong reason for Cheltenham teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'Across Cheltenham, by live video',
    intro: 'Every neighbourhood in the borough joins the same way.',
    cells: [
      { h3: 'Student-led code', p: 'The learner types each program; the tutor follows the shared screen and prompts with questions.' },
      { h3: 'Placed with care', p: 'From Year 4 to Year 13, the starting topic comes from the school year and the trial, with the right exam board.' },
      { h3: 'A free first lesson', p: 'No charge for the trial, which ends with a named course and the reason for it.' },
      { h3: 'Classes at one stage', p: 'Five to ten learners from around the UK, all at the same level.' },
      { h3: 'Two lessons weekly', p: 'In term time; school holidays kept clear.' },
      { h3: 'Fixed lesson time', p: 'Our tutors adjust when UK clocks change.' }
    ],
    spec: { title: 'Why groups meet online', p: 'Five Cheltenham learners at one stage, all free at the same hour, rarely live close together. Online classes solve that.' }
  },

  fees: {
    h2: 'Cheltenham fees',
    intro: 'Gloucestershire learners are billed at our standard international rate, identical everywhere except India.',
    first: 'A full lesson free of charge, with a course recommendation at the end.',
    group: 'About eight live small-group lessons per month.',
    private: 'About eight live one-to-one lessons per month.',
    closer: 'Fees are in US dollars, never sterling. Billing waits for the free lesson to fix a course and a weekday time. Holiday breaks, sick days and moving between group and solo tuition are all covered under pricing.'
  },

  reviewsH2: 'Reviews from families on Google',

  book: {
    h2: 'Book a free Cheltenham lesson',
    intro: 'Give us an age or school year and one interest. A trial might be a Scratch word game, a first Python script, a small AI build, or scoring word pairs in an old book.',
    success: 'Thank you. Your Cheltenham request is with us.'
  },

  faq: {
    h2: 'Cheltenham questions',
    intro: 'Word pairs, local figures and lesson arrangements.',
    items: [
      { q: 'What is the population of Cheltenham?', a: 'The 2021 census counted 118,833 in Cheltenham borough; the ONS gives 115,940 for the Cheltenham built-up area.' },
      { q: 'Are online coding and Python lessons open to Cheltenham learners?', a: 'Yes. Anyone aged 6 to 67 in Cheltenham can take our live coding, Python, AI and maths lessons.' },
      { q: 'What is the Dorothea Beale project?', a: 'Learners score every pair of neighbouring words in a biography of Dorothea Beale to find the collocations that define it.' },
      { q: 'What is a collocation?', a: 'A pair or group of words that appear together far more often than chance, such as head mistress.' },
      { q: 'What is pointwise mutual information?', a: 'A score of how much more often two words appear together than if they were independent; on its own it favours very rare pairs.' },
      { q: 'Are lessons held in person?', a: 'No, all lessons run live online.' },
      { q: 'Do you support GCSE and A level?', a: 'Yes, maths and computing, taught for understanding; grades are never promised.' },
      { q: 'Who can join?', a: 'Learners aged 6 to 67.' },
      { q: 'How much are lessons?', a: 'The opening lesson is free; after that a group place is USD 100 per month and private tuition USD 150 per month.' },
      { q: 'What about half-terms and holidays?', a: 'Lessons pause for them; just send the calendar.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Cheltenham',
    html: 'For the county see our <a class="cg-inline-link" href="/coding-classes-in-gloucestershire">Gloucestershire</a> page; <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-ipswich">Ipswich</a> builds a concordance of Pickwick, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a> covers the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Cheltenham and Gloucestershire',
  footerPlaces: [
    { href: '/coding-classes-in-gloucestershire', label: 'Gloucestershire' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-chl .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3vw, 2.6rem); }
.cg-root.cg-chl .cg-hero h1 { font-weight: 720; letter-spacing: -0.024em; line-height: 1.06; font-style: italic; }
.cg-root.cg-chl .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-chl .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-chl .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.019em; }
.cg-root.cg-chl .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-chl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-chl .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.79rem; }
.cg-root.cg-chl .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-chl .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Cheltenham (E07000078). Nomis Census 2021 TS007A: total 118,833; 5 to 9 6,378 (5.4%, England 5.9%); 20 to 24 7,895 (6.6%, 6.0%); 25 to 29 8,134 (6.8%, 6.6%); 50 to 54 7,896 (6.6%, 6.9%); 80 to 84 3,337 (2.8%, 2.5%); 85+ 3,671 (3.1%, 2.4%). ONS 2021 BUA Cheltenham 115,940. Project Gutenberg 69599, Elizabeth Helen Shillito, Dorothea Beale: opened "February 13, 1854, in Cambray House"; "the 100 pupils had increased to 150"; "at the end of 1857 the numbers had fallen to 89". Project Gutenberg 60064, Elizabeth Raikes, Dorothea Beale of Cheltenham: "one hundred and twenty pupils"; "first to ninety-three, then to eighty-nine".',
    localProject: 'Collocations in Raikes (146,461 words; 71,376 distinct pairs; 76.2% once): raw count of the 1,340, in the 700, to the 530, miss beale 514; raw PMI 273 pairs tie at 17.2 bits (all once, incl. editors\' notes); min 5 names; min 20 boarding houses 10.7, head mistress 10.0, lady principal 8.8, old pupil 8.7; ladies college 71 (7.4). ASCII tokeniser splits Fräulein (5). Lesson family: collocation scoring, PMI, thresholds, tokenisation.',
    requiredMentions: [
      '115,940',
      '118,833',
      'Dorothea Beale',
      'Cambray House',
      'Elizabeth Raikes',
      'collocation',
      'pointwise mutual information',
      '146,461',
      'Elizabeth Helen Shillito'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Cheltenham and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Elizabeth Raikes, Dorothea Beale of Cheltenham (ebook 60064).', url: 'https://www.gutenberg.org/ebooks/60064' },
      { claim: 'Project Gutenberg, Elizabeth Helen Shillito, Dorothea Beale (ebook 69599).', url: 'https://www.gutenberg.org/ebooks/69599' }
    ],
    rejectedClaims: [
      'The college today, its fees and admissions: not discussed; no admissions advice.',
      'GCHQ and the racecourse: not mentioned.',
      'Which biography is right about the first year: not decided; both figures shown.',
      'Prestbury built-up area: crosses the boundary, not quoted.',
      'Named schools and school term dates beyond the historical college: none.',
      'Sterling prices: none (historic amounts in the books are not quoted).'
    ]
  }
};
