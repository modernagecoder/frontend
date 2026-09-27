'use strict';
// Stevenage (cg- town page, UK cluster Phase 8, towns band A, row 331). Keyword slug per the owner's 2026-09-27
// instruction. Spine: how fast can a program answer "how many residents are aged X to Y?" Anchor data (read raw
// 27 September 2026): Nomis Census 2021 TS007 age by single year (NM_2027_1), Stevenage E07000243 and England; published
// total 89,501 (Stevenage) and 56,490,045 (England, this table); the 101 single-year rows (under 1 to 100 and over) add to
// exactly those totals. Grouped rows in the same table ("Aged 4 years and under" and similar) are skipped.
// Our run (scratchpad stv/ps.py, 27 September 2026): prefix sums P[i]; range(a,b) = P[b+1] - P[a]. Stevenage: 5 to 10
// 7,125 (8.0%; England 7.2%); 11 to 15 5,516 (6.2%; 6.0%); 16 and 17 2,043 (2.3%; 2.3%); 18 to 24 6,470 (7.2%; 8.3%);
// 6 to 67 71,562 (80.0%; 78.0%); 65 and over 13,548 (15.1%; 18.4%). Off-by-one P[b] - P[a] drops the top age: 16 and 17
// becomes 990 (age 17 = 1,053 lost), 5 to 10 becomes 5,924. Most common single ages 30 to 34 (34: 1,480). Six queries
// naive 118 additions; all 5,151 possible age ranges naive 176,851 additions vs 101 to build plus two lookups each.
// Lesson family: prefix sums for range queries, inclusive bounds and off-by-one; screened (prefix sum, range query,
// cumulative frequency, Fenwick: 0 hits; Barking used NM_2027_1 for a grouped median, a different question).
// No claims about the New Town history, E. M. Forster or local employers: none could be read from a primary source today
// (forstercountry.org.uk 403).
// Place facts: ONS 2021 BUA Stevenage 94,470 (extends a little beyond the borough; OA sum inside 88,727).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'STEVENAGE', label: 'Stevenage', blurb: 'AI and programming classes for Stevenage, with a project that answers any age-range question about the town instantly using prefix sums.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-stevenage',
  code: 'stv',
  accent: '#4C2522',
  accentRationale: 'Stevenage: a dark brick red (10.61:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Stevenage',
    eyebrow: 'Stevenage, Hertfordshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hertfordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Hertfordshire', href: '/coding-classes-in-hertfordshire' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Stevenage, England',
  title: 'AI and Programming Classes in Stevenage | Coding, Ages 6 to 67',
  description: 'Online AI, programming, Python and coding classes for Stevenage children, teenagers and adults aged 6 to 67, live one-to-one or in small groups. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Stevenage, and a Python project that answers any age question about the town in two steps with prefix sums.',
  twitterDescription: 'Stevenage AI, programming and coding classes, ages 6 to 67, live online. Free first lesson.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Stevenage',
    description: 'Online AI, programming, Python and mathematics for children, teenagers and adults in Stevenage, taught live and placed by level.'
  },

  h1: 'AI and programming classes in Stevenage',
  capsuleQ: 'Where can Stevenage learners find the best AI and programming classes?',
  capsule: 'The 2021 census counted 89,501 people in Stevenage borough, and the ONS puts the Stevenage built-up area, which spreads a little past the borough edge, at 94,470. The single most common ages in the borough are 30 to 34, and children aged 5 to 10 are 8.0 per cent of residents against 7.2 per cent in England. From India, our tutors teach AI, programming, Python and maths over live video to learners aged 6 to 67, in private lessons or small groups of five to ten at the same stage. A no-charge opening lesson settles which course comes next. The Stevenage project turns the town\'s census into a program that answers questions instantly. Staying on means USD 100 monthly for a group place or USD 150 monthly for a personal tutor.',
  lead: 'How many people in Stevenage are aged 11 to 15? How many are between 6 and 67, the ages we teach? The census gives 101 numbers for the borough, one for every age from under 1 to 100 and over, and any such question means adding a run of them. A first program simply loops through the run each time. That is fine for one question and painfully slow for thousands. There is a classic trick, used inside databases and spreadsheets, that answers every possible age-range question with just two lookups and one subtraction. It is called a prefix sum, and a Stevenage learner can build it in a few lines of Python, then meet the off-by-one mistake that catches almost everyone the first time.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a Stevenage learner.',

  picks: {
    eyebrow: 'Stevenage course picks',
    h2: 'First courses for Stevenage learners',
    intro: 'Choose by age and interest. The opening live lesson of every course is free, with no card needed.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with counters, lists and quick-answer games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'A first real language, with small AI projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'In-depth Python for teenagers, including the prefix sum project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Python for adults from zero, up to algorithms and data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Stevenage by age',
      h2: 'A borough full of thirty-somethings',
      intro: 'Age ranges for Stevenage worked out from the 2021 census single-year table on Nomis, England alongside.',
      body: [
        { kind: 'table', caption: 'Stevenage borough and England, age ranges from Census 2021 TS007 single years (our sums)', head: ['Ages', 'Stevenage residents', 'Stevenage %', 'England %'], rows: [
          ['5 to 10', '7,125', '8.0%', '7.2%'],
          ['11 to 15', '5,516', '6.2%', '6.0%'],
          ['16 and 17', '2,043', '2.3%', '2.3%'],
          ['18 to 24', '6,470', '7.2%', '8.3%'],
          ['6 to 67', '71,562', '80.0%', '78.0%'],
          ['65 and over', '13,548', '15.1%', '18.4%']
        ] },
        { kind: 'p', text: 'Children aged 5 to 10 are more common than nationally, older residents less so, and the five most common single ages are all between 30 and 34. The 101 single-year counts add up exactly to the published total of 89,501, which is worth checking before trusting any sum built from them. Local schools teach England\'s national curriculum; we simply leave your holiday weeks empty.' },
        { kind: 'callout', h3: 'County and region', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Stevenage project',
      h2: 'Prefix sums on the Stevenage census',
      intro: 'Build one running list once, then answer any range with a subtraction.',
      body: [
        { kind: 'p', text: 'The learner downloads the 101 single-year counts for Stevenage into a Python list called ages, where ages[0] is babies under one and ages[100] is everyone aged 100 or more. The slow way to answer "how many are 11 to 15?" is to loop from index 11 to 15 and add. The prefix sum way builds a second list, P, once: P[0] is 0, and each P[i+1] is P[i] plus ages[i]. After that, the count for ages a to b is P[b+1] minus P[a], two lookups however wide the range.' },
        { kind: 'table', caption: 'Our Python comparison for Stevenage, 27 September 2026', head: ['Task', 'Loop every time', 'Prefix sums', 'Note'], rows: [
          ['Six age-range questions', '118 additions', '101 to build, 12 lookups', 'Already faster'],
          ['All 5,151 possible age ranges', '176,851 additions', '101 to build, 10,302 lookups', 'Far faster'],
          ['Ages 16 and 17, correct formula', '2,043', '2,043', 'P[18] minus P[16]'],
          ['Ages 16 and 17, off-by-one slip', 'Not affected', '990', 'P[17] minus P[16] drops age 17']
        ] },
        { kind: 'p', text: 'The trap is the edge. Writing P[b] minus P[a] looks natural and runs without any error, but it quietly leaves out the top age. For "16 and 17" it returns 990, dropping all 1,053 seventeen-year-olds; for "5 to 10" it returns 5,924 instead of 7,125. The learner writes tests that the program must pass: a range of one age must equal that single count, the full range must equal the published 89,501, and two ranges that meet must add up to the combined range.' },
        { kind: 'p', text: 'Once the list is built, questions become instant. Stevenage has 71,562 residents aged 6 to 67, 80.0 per cent of the borough, against 78.0 per cent across England. The learner can then load England\'s 101 numbers into the same function and compare any range side by side, and notice that the two percentages come from the same code, just different data.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Write a running total down a column of numbers, then find any stretch by taking one total from another.' },
          { h3: 'Ages 11 to 15', p: 'Build the prefix list in Python and answer age questions about Stevenage.' },
          { h3: 'Ages 15 and up', p: 'Count operations, write edge-case tests, and extend the idea to two-dimensional grids.' }
        ] },
        { kind: 'callout', h3: 'Census counts, our code', p: 'The single-year counts and published totals come from the 2021 census table TS007 on Nomis. The ranges, percentages and operation counts are our own calculations.' }
      ]
    },
    {
      id: 'numbers', tint: 'deep', eyebrow: 'Why prefix sums',
      h2: 'Two lookups instead of a loop',
      intro: 'What the Stevenage run shows.',
      body: [
        { kind: 'table', caption: 'Key figures from the Stevenage prefix sum project', head: ['Figure', 'Value'], rows: [
          ['Single-year counts used', '101, from under 1 to 100 and over'],
          ['Published borough total', '89,501, matched exactly by the counts'],
          ['Residents aged 6 to 67', '71,562'],
          ['Residents aged 65 and over', '13,548'],
          ['Possible age ranges', '5,151'],
          ['Additions to loop through all of them', '176,851']
        ] },
        { kind: 'p', text: 'The same idea runs quietly inside a lot of software. Spreadsheet totals over a range, video games checking how much of a map is visible, image filters that blur by averaging boxes of pixels, and databases answering "how many orders between these two dates" all lean on running totals built once and reused. A Stevenage learner who has built a prefix sum and caught its off-by-one trap has learned one of the most useful habits in programming: do the work once, then answer fast.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the ONS and Nomis. The census data is theirs; the program, and any bug in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From running totals on paper to real algorithms',
    intro: 'Years are rough; the free lesson finds the right start.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Counting and blocks', p: 'Block coding with counters, scores and patterns.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python lists', p: 'Lists, loops and totals in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Algorithms and AI', p: 'Efficient algorithms, data and AI beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Practical programming', p: 'Adult Python through data analysis.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and edges',
    h2: 'Will an AI get the edge of a range right?',
    intro: 'Most bugs live at the boundaries.',
    p1: 'Ask a chatbot to write a range-sum function and it will often produce tidy code. Whether the top of the range is included is exactly the detail it can slip on, and the code still runs without complaint.',
    p2: 'A Stevenage learner who has tested P[b+1] against P[b] knows to write a one-age test before trusting any range code, human or machine.',
    closer: 'Testing the edges of code an AI writes is a strong reason for Stevenage teenagers to keep learning programming in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Across Stevenage, by live video',
    intro: 'Every neighbourhood in the borough joins in the same way.',
    cells: [
      { h3: 'Learner-typed code', p: 'The student writes every program; the tutor reads the shared screen and asks guiding questions.' },
      { h3: 'Right starting point', p: 'Year 3 or Year 13, each learner starts where their school year and trial lesson suggest, with their exam board named.' },
      { h3: 'Trial without charge', p: 'The first full lesson is free, with honest advice at the end.' },
      { h3: 'Stage-matched classes', p: 'Five to ten UK learners who are all at one level.' },
      { h3: 'Twice a week in term', p: 'Two lessons weekly during term; holidays stay free.' },
      { h3: 'Same slot all year', p: 'In March and October it is our tutors who shift their day; a Stevenage lesson keeps its hour.' }
    ],
    spec: { title: 'Why groups meet online', p: 'Five Stevenage learners at the same level, free at the same hour, rarely live on one street. Online groups give each the right classmates.' }
  },

  fees: {
    h2: 'Stevenage fees',
    intro: 'Stevenage families pay the same as families in every country outside India.',
    first: 'A full lesson at no cost, followed by a clear recommendation.',
    group: 'Around eight live group lessons each month.',
    private: 'Around eight live private lessons each month.',
    closer: 'We charge in US dollars, not sterling. Billing starts only once the trial has fixed a course and a weekly time, and the pricing page covers holidays, missed lessons and moving between formats.'
  },

  reviewsH2: 'Google reviews: what learners and parents wrote',

  book: {
    h2: 'Book a free Stevenage lesson',
    intro: 'Share the age or year group, plus a hobby or subject the learner likes. Trial options include a Scratch tally game, first steps in Python, a tiny AI build, or answering census questions with running totals.',
    success: 'Thank you. Your Stevenage request has arrived.'
  },

  faq: {
    h2: 'Stevenage questions',
    intro: 'About the town, the project and our lessons.',
    items: [
      { q: 'What is the population of Stevenage?', a: 'The 2021 census counted 89,501 in Stevenage borough; the ONS gives 94,470 for the Stevenage built-up area.' },
      { q: 'Can Stevenage learners study AI and programming online?', a: 'Certainly. Our live online AI, programming, Python and maths lessons are open to Stevenage residents between 6 and 67.' },
      { q: 'What is the prefix sum project?', a: 'Learners load Stevenage\'s 101 single-year census counts into Python and answer any age-range question with two lookups.' },
      { q: 'What is a prefix sum?', a: 'A running total list built once; the sum of any stretch is one running total minus another.' },
      { q: 'What is an off-by-one error?', a: 'A boundary slip, such as leaving out the last item of a range; here it drops every 17-year-old from a count of 16 and 17 year olds.' },
      { q: 'Are lessons held locally?', a: 'Everything happens over live video, so no journey is needed from any part of the borough.' },
      { q: 'Do you teach GCSE and A level topics?', a: 'Yes, maths and computing, aiming at understanding; we never promise grades.' },
      { q: 'Who can join?', a: 'Children from six, teenagers, and grown-ups up to 67 all study with us.' },
      { q: 'What will Stevenage families pay?', a: 'Zero for the trial. Then a class place is USD 100 monthly and one-to-one tuition USD 150 monthly.' },
      { q: 'Do lessons continue in school holidays?', a: 'No. Send the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Stevenage',
    html: 'For the county, read our <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire</a> page; <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-watford">Watford</a> tracks a railway station\'s recovery; <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> gathers the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Stevenage and Hertfordshire',
  footerPlaces: [
    { href: '/coding-classes-in-hertfordshire', label: 'Hertfordshire' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-stv .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-stv .cg-hero h1 { font-weight: 770; letter-spacing: -0.028em; line-height: 1.04; }
.cg-root.cg-stv .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-stv .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-stv .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.02em; }
.cg-root.cg-stv .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-stv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-stv .cg-table th { letter-spacing: 0.04em; font-weight: 700; font-size: 0.8rem; }
.cg-root.cg-stv .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-stv .cg-callout { border-radius: 10px; border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Stevenage (E07000243). Nomis Census 2021 TS007 single year of age (NM_2027_1): published total 89,501; 101 single-year rows add to it exactly. Our range sums: 5 to 10 7,125 (8.0%, England 7.2%); 11 to 15 5,516 (6.2%, 6.0%); 16 and 17 2,043 (2.3%, 2.3%); 18 to 24 6,470 (7.2%, 8.3%); 6 to 67 71,562 (80.0%, 78.0%); 65+ 13,548 (15.1%, 18.4%). ONS 2021 BUA Stevenage 94,470 (extends beyond the borough).',
    localProject: 'Prefix sums: P[i+1] = P[i] + ages[i]; range = P[b+1] - P[a]. Off-by-one P[b] - P[a]: 16 and 17 gives 990, 5 to 10 gives 5,924. Six queries 118 additions naive; all 5,151 ranges 176,851 additions naive vs 101 + 10,302 lookups. Lesson family: prefix sums, range queries, inclusive bounds.',
    requiredMentions: [
      '94,470',
      '89,501',
      'prefix sum',
      '71,562',
      '7,125',
      '5,516',
      '176,851',
      '13,548',
      'off-by-one'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007 age by single year, Stevenage and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup, used to check how much of the built-up area lies inside the borough.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Nomis Census 2021 TS001 usual residents by output area (89,495 for the borough in that table), used for the same check.', url: 'https://www.nomisweb.co.uk/' }
    ],
    rejectedClaims: [
      'New Town history and designation dates: not read from a primary source today; not claimed.',
      'E. M. Forster and Rooks Nest: the local heritage site returned 403; not claimed.',
      'Local employers and industries: not claimed.',
      'School year to age mapping: not claimed; ranges are ages at the census.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
