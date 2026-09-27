'use strict';
// Ipswich (cg- town page, UK cluster Phase 8, towns band A, row 338). Keyword slug per the owner's 2026-09-27 instruction.
// Spine: where does Ipswich appear in The Pickwick Papers, and how does a program show it? Anchor (read raw 27 September
// 2026): Project Gutenberg ebook 580, Charles Dickens, "The Pickwick Papers": "CHAPTER XXII. MR. PICKWICK JOURNEYS TO
// IPSWICH AND MEETS WITH A ROMANTIC ..."; "the Great White Horse at Ipswich"; "In the main street of Ipswich, on the
// left-hand side of the way"; "Mr. Nupkins's, Mayor's, Ipswich, Suffolk"; "justice of the peace, for the borough of
// Ipswich".
// Our run (scratchpad ips/kwic2.py, 27 September 2026): 57 chapters from the first "CHAPTER I." heading in the text (the
// contents list is skipped) to the END marker; 311,671 words by our count. "Ipswich" as a whole word, any case: 22; exact
// case "Ipswich": 21 (the chapter XXII heading is in capitals). By chapter: XX 7, XXII 5, XXIV 5, XXVI 1, XXXIII 2, XXXIV 1,
// XXXIX 1. Rate per 10,000 words: XX 10.6, XXII 7.8, XXIV 8.4. Concordance sorted by the following word groups "Ipswich
// coach" (2) and runs of "at Ipswich".
// Lesson family: concordance / keyword in context (KWIC), case and word-boundary matching, sorting by context; screened
// (concordance, KWIC, collocation, keyness, Pickwick, Dickens: 0 hits; Basingstoke's sentence splitter and Rugby's quote
// state machine are different text tasks). The novel's duel and brawl scenes are not described.
// Place facts: Nomis Census 2021 TS007A, Ipswich E07000202: total 139,642; under 5 8,326 (6.0%; England 5.4%); 5 to 9 9,049
// (6.5%; 5.9%); 25 to 29 9,889 (7.1%; 6.6%); 30 to 34 10,819 (7.7%; 7.0%); 35 to 39 10,166 (7.3%; 6.7%); 70 to 74 5,990 (4.3%;
// 5.0%). ONS 2021 BUA Ipswich 151,565 (the whole borough lies inside it; it also reaches beyond the boundary).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'IPSWICH', label: 'Ipswich', blurb: 'Coding and AI classes for Ipswich, with a project that builds a concordance of every Ipswich in The Pickwick Papers.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-ipswich',
  code: 'ips',
  accent: '#8A2237',
  accentRationale: 'Ipswich: a coaching-inn red (7.16:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Ipswich',
    eyebrow: 'Ipswich, Suffolk, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Suffolk' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Suffolk', href: '/coding-classes-in-suffolk' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ipswich, England',
  title: 'Coding and AI Classes in Ipswich | Online Python for 6 to 67',
  description: 'Online coding, AI and Python classes for Ipswich children, teenagers and adults aged 6 to 67, taught live one-to-one or in small groups. Your first lesson is free.',
  ogDescription: 'Live online coding and AI classes for Ipswich, and a Python project that builds a keyword-in-context concordance of Ipswich in The Pickwick Papers.',
  twitterDescription: 'Ipswich coding, AI and Python classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Ipswich',
    description: 'Online coding, AI, Python and mathematics for children, teenagers and adults in Ipswich, taught live in English and matched to level.'
  },

  h1: 'Coding and AI classes in Ipswich',
  capsuleQ: 'Where can Ipswich learners find the best coding and AI classes?',
  capsule: 'At the 2021 census 139,642 people lived in Ipswich borough; the ONS built-up area of Ipswich, larger than the borough itself, held 151,565. Adults aged 25 to 39 and children under ten are above the England share, while people over 55 are fewer. Anyone between 6 and 67 can learn coding, AI, Python or maths with us: our tutors in India teach over live video, one learner at a time or in level-matched classes of five to ten. The first lesson is free and settles the course. The Ipswich project searches a famous novel for every mention of the town. Staying on after the trial means USD 100 monthly for a class seat, or USD 150 monthly for solo tuition.',
  lead: 'In The Pickwick Papers, Charles Dickens sends Mr. Pickwick to Ipswich, to "the Great White Horse at Ipswich", which stands "in the main street of Ipswich, on the left-hand side of the way". Several chapters follow him around the town and its magistrate, Mr. Nupkins. But which chapters, exactly, and how often does the town come up? Scholars once answered questions like this with a concordance, a book listing every occurrence of a word with a little of the text either side. Building one took years by hand. A learner in Ipswich can build one in an afternoon in Python, for all 311,671 words of the novel, and discover two small traps that make a simple search give the wrong count.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a learner in Ipswich.',

  picks: {
    eyebrow: 'Ipswich course picks',
    h2: 'Courses Ipswich learners start with',
    intro: 'Choose whichever fits. Each course opens with a free live session, and booking it asks for no payment card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with word games and story characters.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python programs that search and count words, plus simple AI.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Complete Python for teens, including the Pickwick concordance.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Adult Python from zero, through text search and data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Ipswich borough',
      h2: 'Young adults and young families',
      intro: 'Borough figures from the 2021 census age table on Nomis, each set against the national share.',
      body: [
        { kind: 'table', caption: 'Ipswich borough and England, six age bands, Census 2021 TS007A', head: ['Age band', 'Ipswich residents', 'Ipswich %', 'England %'], rows: [
          ['Under 5', '8,326', '6.0%', '5.4%'],
          ['5 to 9', '9,049', '6.5%', '5.9%'],
          ['25 to 29', '9,889', '7.1%', '6.6%'],
          ['30 to 34', '10,819', '7.7%', '7.0%'],
          ['35 to 39', '10,166', '7.3%', '6.7%'],
          ['70 to 74', '5,990', '4.3%', '5.0%']
        ] },
        { kind: 'p', text: 'Adults in their late twenties and thirties, and their young children, stand above the national share, while older age groups sit below it. The ONS counts the Ipswich built-up area at 151,565, which takes in every part of the borough and some built-up land beyond its edge. Suffolk schools teach to England\'s national curriculum, and our timetable goes quiet in whichever holiday weeks you list.' },
        { kind: 'callout', h3: 'County and region', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-suffolk">Suffolk</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Ipswich project',
      h2: 'A concordance of Ipswich in Pickwick',
      intro: 'Find every occurrence, show it in context, and sort to reveal patterns.',
      body: [
        { kind: 'p', text: 'The learner downloads the Project Gutenberg text, skips the contents list, and splits the novel at each chapter heading, 57 in all. The first search looks for the exact letters "Ipswich" and finds 21. A second search that ignores capital letters finds 22. The difference is chapter XXII, whose heading is printed in capitals: MR. PICKWICK JOURNEYS TO IPSWICH. A case-sensitive search would have missed the one place where the town appears in a chapter title.' },
        { kind: 'table', caption: 'Our Python count of Ipswich in The Pickwick Papers, by chapter, 27 September 2026', head: ['Chapter', 'Mentions', 'Words in chapter', 'Per 10,000 words'], rows: [
          ['XX', '7', '6,577', '10.6'],
          ['XXII', '5', '6,418', '7.8'],
          ['XXIV', '5', '5,969', '8.4'],
          ['XXXIII', '2', '6,500', '3.1'],
          ['XXVI, XXXIV, XXXIX', '1 each', '2,510 to 9,728', 'Under 4'],
          ['Whole novel', '22', '311,671', '0.7']
        ] },
        { kind: 'p', text: 'Next comes the concordance itself, often called keyword in context. For every match the program prints forty characters before and after, lined up so the town\'s name sits in a straight column down the middle. Then it sorts the lines by the word that follows. Patterns jump out at once: two lines read "Ipswich coach", several begin "at Ipswich", and one records a letter addressed to "Mr. Nupkins\'s, Mayor\'s, Ipswich, Suffolk". The sorted view shows how Dickens uses the place, mostly as a destination and an address.' },
        { kind: 'p', text: 'The second trap is word boundaries. Searching for a short word such as "wich" would match Ipswich, Norwich and Greenwich alike, so the program searches for whole words only and tests that rule on invented sentences. The learner also checks the count per 10,000 words, because a long chapter with seven mentions and a short one with five are not equally about Ipswich. Chapter XX, in which a character talks of working an Ipswich coach, has the highest rate.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Find every "the" on one page, underline it, and copy out three words either side.' },
          { h3: 'Ages 11 to 15', p: 'Write a Python search for Ipswich, then make it ignore capital letters.' },
          { h3: 'Ages 15 and up', p: 'Produce the aligned keyword-in-context view, sort by the following word, and work out mentions per 10,000 words.' }
        ] },
        { kind: 'callout', h3: 'Dickens\'s text, our concordance', p: 'The Pickwick Papers is the Project Gutenberg edition. The counts, rates and sorted concordance are our own.' }
      ]
    },
    {
      id: 'pickwick', tint: 'deep', eyebrow: 'Why Pickwick',
      h2: 'Mr. Pickwick in Ipswich',
      intro: 'Ipswich details in the novel\'s own words and our counts.',
      body: [
        { kind: 'table', caption: 'Ipswich in The Pickwick Papers, Project Gutenberg edition', head: ['Detail', 'In the novel'], rows: [
          ['The chapter title', 'Mr. Pickwick journeys to Ipswich (chapter XXII)'],
          ['The inn', 'The Great White Horse at Ipswich'],
          ['Its position', 'In the main street, on the left-hand side of the way'],
          ['The magistrate', 'Mr. Nupkins, justice of the peace for the borough'],
          ['Most mentions', 'Chapter XX, seven times'],
          ['Novel length', '311,671 words in 57 chapters, by our count']
        ] },
        { kind: 'p', text: 'Every search box works like a concordance. When a search engine shows a snippet with your words highlighted, when an editor lists every place a variable is used, or when a researcher checks how a word\'s meaning changed over centuries, the program is doing what this project does: find, show in context, sort. A learner in Ipswich who has built a concordance for Pickwick understands what happens behind any search result.' },
        { kind: 'p', text: 'We are not linked to Project Gutenberg or the census office. Dickens\'s text and the population figures are theirs; this concordance and its errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From underlining words to search engines',
    intro: 'School years are only a guide; the trial sets the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Word games', p: 'Block coding with letters, words and simple searches.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and text', p: 'Strings, searching and counting in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Text and AI', p: 'Text processing, data and AI beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Working with text', p: 'Adult Python for text and data.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and search',
    h2: 'Does an AI actually search the text?',
    intro: 'Remembering a book and searching it are different things.',
    p1: 'Ask a chatbot how often Ipswich appears in Pickwick and it may give a confident number from memory. It will not show you the 22 lines, and it may miss the one in capitals.',
    p2: 'An Ipswich learner who has built the concordance can prove every count, and knows which details trip up a quick search.',
    closer: 'Being able to check an answer line by line is exactly what learning to code gives Ipswich teenagers in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lessons in practice',
    h2: 'Across Ipswich, by video',
    intro: 'Every part of the borough joins the same way.',
    cells: [
      { h3: 'The learner types', p: 'Programs are written by the student; the tutor follows over screen share and guides with questions.' },
      { h3: 'Placed by year and trial', p: 'A Year 4 or a Year 13 starts where school year and trial point, with the exam board in mind.' },
      { h3: 'Opening lesson free', p: 'The trial costs nothing and ends with a straight answer about the right course.' },
      { h3: 'Same-stage classmates', p: 'Five to ten UK learners, all at one level.' },
      { h3: 'Weekly rhythm', p: 'Two lessons a week in term; school holidays left free.' },
      { h3: 'Steady timing', p: 'When UK clocks change, our tutors shift and your slot stays.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five Ipswich learners at one stage, free at the same hour, rarely live nearby. Online, each joins the right class.' }
  },

  fees: {
    h2: 'Ipswich fees',
    intro: 'Ipswich pays the same fee as every family we teach outside India.',
    first: 'A full lesson at no charge, finishing with a recommendation.',
    group: 'About eight live small-group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Fees are in US dollars, never sterling. No invoice is raised until the free lesson has matched the learner to a course and a regular weekly slot. The pricing page sets out holidays, missed lessons and changes between shared and private tuition.'
  },

  reviewsH2: 'Google reviews from families',

  book: {
    h2: 'Book a free Ipswich lesson',
    intro: 'Tell us the learner\'s age or year group and one interest. A trial could be a Scratch word game, a first Python search, an AI project, or the Pickwick concordance.',
    success: 'Thank you. Your Ipswich request is with us.'
  },

  faq: {
    h2: 'Ipswich questions',
    intro: 'Pickwick, population figures and how our lessons are arranged.',
    items: [
      { q: 'What is the population of Ipswich?', a: 'The 2021 census counted 139,642 in Ipswich borough; the ONS gives 151,565 for the Ipswich built-up area, which extends beyond the borough.' },
      { q: 'Is online coding and AI tuition open to people in Ipswich?', a: 'It is. Our live coding, AI, Python and maths lessons take Ipswich learners from age 6 up to 67.' },
      { q: 'What is the Pickwick project?', a: 'Learners build a keyword-in-context concordance of every Ipswich in The Pickwick Papers and count mentions per chapter.' },
      { q: 'What is a concordance?', a: 'A list of every place a word occurs in a text, each shown with a little of the surrounding words.' },
      { q: 'Where is Ipswich in The Pickwick Papers?', a: 'Mostly in chapters XX, XXII and XXIV; chapter XXII is titled Mr. Pickwick journeys to Ipswich.' },
      { q: 'Are lessons held in person?', a: 'No, they are live online, so the whole borough is covered.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, maths and computing, taught for understanding; we never promise grades.' },
      { q: 'What ages can join?', a: 'From 6 to 67.' },
      { q: 'How much are lessons?', a: 'The first is free; afterwards USD 100 a month for a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons run in school holidays?', a: 'No, we pause for them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Ipswich',
    html: 'County-wide options sit on our <a class="cg-inline-link" href="/coding-classes-in-suffolk">Suffolk</a> page; <a class="cg-inline-link" href="/ai-and-programming-classes-in-basingstoke">Basingstoke</a> splits Austen into sentences, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> gathers the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Ipswich and Suffolk',
  footerPlaces: [
    { href: '/coding-classes-in-suffolk', label: 'Suffolk' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ips .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-ips .cg-hero h1 { font-weight: 720; letter-spacing: -0.024em; line-height: 1.06; }
.cg-root.cg-ips .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-ips .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ips .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-ips .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-ips .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ips .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.79rem; }
.cg-root.cg-ips .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-ips .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Ipswich (E07000202). Nomis Census 2021 TS007A: total 139,642; under 5 8,326 (6.0%, England 5.4%); 5 to 9 9,049 (6.5%, 5.9%); 25 to 29 9,889 (7.1%, 6.6%); 30 to 34 10,819 (7.7%, 7.0%); 35 to 39 10,166 (7.3%, 6.7%); 70 to 74 5,990 (4.3%, 5.0%). ONS 2021 BUA Ipswich 151,565 (contains the whole borough). Project Gutenberg 580, Charles Dickens, The Pickwick Papers: chapter XXII "MR. PICKWICK JOURNEYS TO IPSWICH"; "the Great White Horse at Ipswich"; "In the main street of Ipswich, on the left-hand side of the way"; "Mr. Nupkins\'s, Mayor\'s, Ipswich, Suffolk".',
    localProject: 'Concordance: 57 chapters, 311,671 words; Ipswich 22 case-insensitive whole word, 21 exact case (chapter XXII heading in capitals); XX 7, XXII 5, XXIV 5, XXVI 1, XXXIII 2, XXXIV 1, XXXIX 1; rate per 10,000 words XX 10.6, XXII 7.8, XXIV 8.4; sorted KWIC shows "Ipswich coach" twice. Lesson family: concordance / KWIC, case and word boundaries.',
    requiredMentions: [
      '151,565',
      '139,642',
      'Pickwick',
      'Great White Horse',
      'concordance',
      'keyword in context',
      'Nupkins',
      '311,671',
      'Charles Dickens'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Ipswich and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Charles Dickens, The Pickwick Papers (ebook 580).', url: 'https://www.gutenberg.org/ebooks/580' }
    ],
    rejectedClaims: [
      'That Dickens stayed at the Great White Horse or that the inn still trades: not claimed.',
      'The novel\'s duel and brawl scenes: not described.',
      'Norwich and Greenwich appear only as invented search examples, not as Pickwick counts.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
