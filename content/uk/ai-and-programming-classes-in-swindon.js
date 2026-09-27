'use strict';
// Swindon (cg- town page, UK cluster Phase 8, towns band A, row 328). Keyword slug per the owner's 2026-09-27 instruction.
// Spine: who ranked where in the 1914 railway works? Anchors (read raw 27 September 2026): Project Gutenberg ebook 40975,
// Alfred Williams, "Life in a Railway Factory" ("First Published 1915"; preface dated "24th July 1915"): "The site of the
// factory is the Wiltshire town of Swindon"; "About twelve thousand men, including clerks, are normally employed at the
// factory"; appendix "Table of average day wages per week of fifty-four hours paid to men employed at Swindon Railway Works,
// July 1914", 36 trades from Foremen 70s. to Labourers, Unskilled 20s.; fan "two thousand times" a minute from a main shaft
// of "one hundred and twenty revolutions"; "Every year five or six thousand are conveyed to the Dorsetshire
// watering-place" (Weymouth) on the Trip.
// Our run (scratchpad lgh/rank.py, 27 September 2026): 36 trades, 14 distinct wages, 8 trades tied at 28s. Carpenters
// (28s): row number 22 in book order, 17 if the list is reversed first; competition rank 16; dense rank 7; fractional rank
// 19.5. Smiths (33s): row 10 but competition rank 9; ten trades have competition rank 9 or better, so a "top 9" list by row
// number silently drops Forgemen or Smiths. Unskilled labourers: competition 36, dense 14. Per hour over 54 hours: 34s =
// 7.56d, 20s = 4.44d (12 pence to the shilling).
// Lesson family: ranking with ties (ordinal/row number vs competition vs dense vs fractional; stable sort dependence);
// screened (dense rank, ROW_NUMBER, competition ranking, fractional rank, tie-break: 0 hits; Cambridge's stable sort and
// Barking's ranking flips by measure are different questions). The book's remarks about low wages and the workers are not
// repeated; the table's averages are per trade, headcounts per trade are unknown, so ranks are of trades not men.
// Place facts: Nomis Census 2021 TS007A, Swindon E06000030: total 233,411; 5 to 9 15,156 (6.5%; England 5.9%); 20 to 24
// 12,028 (5.2%; 6.0%); 35 to 39 17,318 (7.4%; 6.7%); 40 to 44 16,278 (7.0%; 6.3%); 45 to 49 16,356 (7.0%; 6.4%); 70 to 74
// 9,838 (4.2%; 5.0%). ONS 2021 BUAs: Swindon 183,680 (a small share lies outside the borough); Highworth 7,930; Wroughton
// 7,280; Broad Blunsdon 6,505 (wholly inside). Stratton St Margaret is registered by the Wiltshire page; mentioned in text
// only.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'SWINDON', label: 'Swindon', blurb: 'AI and programming classes for Swindon, with a project that ranks the 1914 railway works trades and finds that ties change everything.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-swindon',
  code: 'swn',
  accent: '#5C2D0E',
  accentRationale: 'Swindon: a forge-scale rust brown (9.21:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Swindon',
    eyebrow: 'Swindon, Wiltshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Wiltshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-west-england', name: 'South West England' }],
  nav: [
    { label: 'Wiltshire', href: '/coding-classes-in-wiltshire' },
    { label: 'South West', href: '/coding-and-ai-classes-in-south-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Swindon, England',
  title: 'AI and Programming Classes in Swindon | Coding for 6 to 67',
  description: 'Online AI, programming, coding and Python classes for Swindon, Highworth and Wroughton learners aged 6 to 67, taught live one-to-one or in groups. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Swindon, and a Python project that ranks the 1914 railway works wage table four ways and gets four answers.',
  twitterDescription: 'Swindon AI, programming and coding classes for ages 6 to 67, live online. First lesson is free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Swindon',
    description: 'Online AI, programming, Python and mathematics for children, teenagers and adults in Swindon, taught live in English at the right level.'
  },

  h1: 'AI and programming classes in Swindon',
  capsuleQ: 'Which are the best AI and programming classes for Swindon learners?',
  capsule: 'At the 2021 census 233,411 people lived in Swindon borough, and the ONS puts the Swindon built-up area at 183,680. The borough leans towards working-age families: adults from 35 to 49 and children from 5 to 9 are each above the share for England, while people in their early twenties and early seventies are below it. We teach AI, programming, Python and maths to learners from 6 to 67 in live online lessons, with India-based tutors working privately or with small same-stage groups of five to ten. A free first lesson settles the starting course. The Swindon project ranks the trades of the old railway works. Group lessons then cost USD 100 a month and one-to-one lessons USD 150 a month.',
  lead: 'In 1915 Alfred Williams published Life in a Railway Factory, drawing on what he called twenty-three years of continuous service in the sheds. He wrote that about twelve thousand men, clerks included, were normally employed there, and in an appendix he printed the average weekly wages of 36 trades for a week of fifty-four hours in July 1914, from foremen at 70 shillings down to unskilled labourers at 20. It looks like the easiest ranking exercise imaginable. Then a learner notices that eight different trades share 28 shillings, four share 34 and five share 30. Where exactly do the carpenters rank? A computer gives four different answers, depending on a choice most people never realise they are making.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a Swindon learner, please.',

  picks: {
    eyebrow: 'Swindon course picks',
    h2: 'Popular first courses in Swindon',
    intro: 'Let age and interests guide the choice. The first live lesson in each course is free, and booking asks for no card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with leaderboards, scores and simple sorting games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Real Python and first AI projects for curious younger learners.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Thorough Python for teenagers, including the railway ranking project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Python for adults from the first line, up to data and databases.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Swindon now',
      h2: 'Working-age families',
      intro: 'Swindon borough in census table TS007A, 2021, from Nomis: six bands against England.',
      body: [
        { kind: 'table', caption: 'Swindon borough and England, six age bands, Census 2021 TS007A', head: ['Age', 'Swindon people', 'Swindon share', 'England share'], rows: [
          ['5 to 9', '15,156', '6.5%', '5.9%'],
          ['20 to 24', '12,028', '5.2%', '6.0%'],
          ['35 to 39', '17,318', '7.4%', '6.7%'],
          ['40 to 44', '16,278', '7.0%', '6.3%'],
          ['45 to 49', '16,356', '7.0%', '6.4%'],
          ['70 to 74', '9,838', '4.2%', '5.0%']
        ] },
        { kind: 'p', text: 'Parents in their late thirties and forties, and their primary-age children, stand out against England. Around the main town the ONS lists Highworth at 7,930, Wroughton at 7,280 and Broad Blunsdon at 6,505, each wholly inside the borough, and Stratton St Margaret is a sizeable neighbour too. Pupils learn the national curriculum for England, and our lessons pause for your school breaks.' },
        { kind: 'callout', h3: 'Nearby', p: 'The <a class="cg-inline-link" href="/coding-classes-in-wiltshire">Wiltshire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Swindon project',
      h2: 'Ranking 36 trades with ties',
      intro: 'Four ranking rules, one table, four different answers.',
      body: [
        { kind: 'p', text: 'The learner types the 36 rows of Williams\'s table into Python, or better, writes a few lines to pull them out of the Project Gutenberg text. There are only 14 different wages among the 36 trades; 28 shillings alone is shared by eight trades, from carriage finishers to bricklayers. Sorting by wage and numbering the rows 1 to 36 puts the carpenters 22nd. Reverse the list first, sort again, and they are 17th. Nothing about carpenters has changed; only the order in which the rows were typed.' },
        { kind: 'table', caption: 'Our Python ranks from the July 1914 wage table, 27 September 2026', head: ['Trade and weekly wage', 'Row number', 'Competition rank', 'Dense rank', 'Fractional rank'], rows: [
          ['Pattern-makers, 35s', '4', '3', '3', '3.5'],
          ['Smiths, 33s', '10', '9', '5', '9.5'],
          ['Carpenters, 28s', '22 (or 17)', '16', '7', '19.5'],
          ['Painters, 26s', '25', '24', '8', '25'],
          ['Labourers, Unskilled, 20s', '36', '36', '14', '36']
        ] },
        { kind: 'p', text: 'Three honest rules replace the arbitrary row number. Competition ranking gives every tied trade the highest position they share, so all eight 28-shilling trades are 16th and the next rank is 24th. Dense ranking counts distinct wages, so they are 7th and the lowest-paid trade is only 14th. Fractional ranking gives the average of the shared positions, 19.5, which is what statisticians use. The same carpenters can be called 7th, 16th, 19.5th or 22nd, depending on the rule.' },
        { kind: 'p', text: 'The learner then asks a practical question: which trades are in the top quarter, the highest-paid 9 of 36? Numbering rows gives exactly nine names and quietly drops Forgemen or Smiths, whichever happens to come later. Competition ranking says ten trades have rank 9 or better, because two share 33 shillings. The program must either admit ten or state a tie-break. A final column converts each wage to pence per hour over the fifty-four hours: 34 shillings is 7.56d an hour, 20 shillings is 4.44d. Every rank is a rank of trades, not of men, because the book gives no headcount for each trade.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Line up a class by height, see what happens with two children of the same height, and invent a fair rule.' },
          { h3: 'Ages 11 to 15', p: 'Sort the 36 trades in Python and write competition and dense ranking by hand.' },
          { h3: 'Ages 15 and up', p: 'Add fractional ranks, the top-quarter test and an SQL comparison with RANK and DENSE_RANK.' }
        ] },
        { kind: 'callout', h3: 'Williams\'s table, our ranks', p: 'The wage table, the workforce figure and the quotations come from Life in a Railway Factory by Alfred Williams on Project Gutenberg. The parsing, ranks and hourly rates are ours.' }
      ]
    },
    {
      id: 'works', tint: 'deep', eyebrow: 'Why the railway works',
      h2: 'Life in a Railway Factory',
      intro: 'Details from Williams\'s book, first published in 1915.',
      body: [
        { kind: 'table', caption: 'Swindon Railway Works in Life in a Railway Factory', head: ['Detail', 'According to Alfred Williams'], rows: [
          ['Where', 'The Wiltshire town of Swindon'],
          ['Workforce', 'About twelve thousand men, including clerks'],
          ['The wage table', 'Average day wages for a week of fifty-four hours, July 1914'],
          ['Highest in the table', 'Foremen, 70 shillings a week'],
          ['Lowest in the table', 'Unskilled labourers, 20 shillings a week'],
          ['A fast fan', 'Driven up from 120 to two thousand revolutions a minute']
        ] },
        { kind: 'p', text: 'Ties are a daily headache in software. Sports tables, exam results, search engines and online leaderboards all have to decide what happens when two entries score the same, and databases offer different ranking functions for exactly this reason. A program that prints "10th" without saying which rule it used can mislead as easily as a wrong number. A Swindon learner who has ranked Williams\'s table four ways reads every league table more carefully.' },
        { kind: 'p', text: 'Modern Age Coders has no link with Project Gutenberg or the ONS. The text and census data are theirs; the ranks, and any error in them, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stage by stage',
    h2: 'From height lines to database queries',
    intro: 'School years are only indicative; the free lesson places each learner.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Sorting games', p: 'Block coding with scores, lists and fair rules.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python lists', p: 'Sorting, counting and simple tables in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Data and AI', p: 'Data handling and AI beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data at work', p: 'Adult Python and data analysis, including SQL-style ranking.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and rankings',
    h2: 'Does an AI say how it broke the ties?',
    intro: 'A rank without a rule can mean several things.',
    p1: 'Ask a chatbot to rank a list with repeated values and it will usually return a neat numbered list. Whether equal items share a place, or were ordered by accident, is rarely stated.',
    p2: 'A Swindon learner who has written all four ranking rules asks which one was used before trusting any position in a table.',
    closer: 'Spotting the hidden choice inside every ranking is one more reason Swindon teenagers should stick with code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How we teach',
    h2: 'Highworth to Wroughton, all online',
    intro: 'Every home in the borough joins in the same way.',
    cells: [
      { h3: 'Typed by the learner', p: 'The student writes the program; the tutor follows the shared screen and steers with questions.' },
      { h3: 'Pitched to the year', p: 'Year 4 or Year 13, each learner begins where their school year and trial lesson point, with their exam board named.' },
      { h3: 'The trial is free', p: 'No charge for the first full lesson, and honest advice at the end.' },
      { h3: 'Classmates at your level', p: 'Each class holds five to ten UK learners who have reached the same point.' },
      { h3: 'Weekly pattern', p: 'Two lessons a week in term time, none in the holidays.' },
      { h3: 'Constant lesson time', p: 'The UK clock changes are handled by our teachers, not by moving your slot.' }
    ],
    spec: { title: 'Why the classes are online', p: 'Five Swindon learners at the same level, all free on the same evening, rarely share a neighbourhood. Online classes solve that.' }
  },

  fees: {
    h2: 'Swindon fees',
    intro: 'Swindon families pay the same rates we charge in every country outside India.',
    first: 'One whole lesson free, with a straightforward course suggestion.',
    group: 'Approximately eight live small-class lessons monthly.',
    private: 'Approximately eight live one-to-one lessons monthly.',
    closer: 'All prices are in US dollars rather than sterling. Payments begin once the trial has fixed the course and a weekly time; the pricing page covers holidays, missed sessions and switching formats.'
  },

  reviewsH2: 'Swindon and UK families on Google',

  book: {
    h2: 'Book a free Swindon lesson',
    intro: 'Tell us roughly how old the learner is, or their school year, and what they enjoy. Trial ideas include a Scratch scoreboard, a first Python script, a small AI build, or ranking the 1914 wage table.',
    success: 'Thank you. We have received your Swindon request.'
  },

  faq: {
    h2: 'Swindon questions',
    intro: 'About Swindon, the ranking project and our lessons.',
    items: [
      { q: 'What is the population of Swindon?', a: 'The 2021 census counted 233,411 in Swindon borough; the ONS gives 183,680 for the Swindon built-up area.' },
      { q: 'Is it possible to learn AI and programming online from Swindon?', a: 'Yes. We teach AI, programming, Python and maths live online to Swindon learners aged 6 to 67.' },
      { q: 'What is the railway works project?', a: 'Learners rank the 36 trades in Alfred Williams\'s July 1914 wage table and discover how ties change each trade\'s position.' },
      { q: 'What is the difference between competition and dense ranking?', a: 'A competition rank skips places after a tie (1, 2, 2, 4); a dense rank does not (1, 2, 2, 3).' },
      { q: 'How many men worked at the Swindon railway works?', a: 'Alfred Williams wrote that about twelve thousand men, including clerks, were normally employed there.' },
      { q: 'Do lessons take place in Swindon?', a: 'They are online, so Highworth, Wroughton and central Swindon are covered equally.' },
      { q: 'Do you support exam years such as GCSE and A level?', a: 'We teach GCSE and A level maths and computing for real understanding, without promising any grade.' },
      { q: 'What ages do you take?', a: 'Learners from 6 to 67, including adults and university students.' },
      { q: 'What do lessons cost?', a: 'Nothing for the opening lesson. Carrying on is USD 100 a month in a class, or USD 150 a month with a private tutor.' },
      { q: 'Do you run lessons in the school holidays?', a: 'No, we pause; just send your dates.' }
    ]
  },

  next: {
    eyebrow: 'More pages',
    h2: 'Nearby pages',
    html: 'For the county there is our <a class="cg-inline-link" href="/coding-classes-in-wiltshire">Wiltshire</a> page, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a> gathers the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> gathers every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Swindon and Wiltshire',
  footerPlaces: [
    { href: '/coding-classes-in-wiltshire', label: 'Wiltshire' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-swn .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.4vw, 2.7rem); }
.cg-root.cg-swn .cg-hero h1 { font-weight: 800; letter-spacing: -0.03em; line-height: 1.02; text-transform: none; }
.cg-root.cg-swn .cg-capsule { border-top: 3px solid var(--cg-accent); border-bottom: 3px solid var(--cg-accent); padding: 0.9rem 0; }
.cg-root.cg-swn .cg-eyebrow { letter-spacing: 0.21em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-swn .cg-section-head h2 { max-width: 20ch; letter-spacing: -0.023em; }
.cg-root.cg-swn .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-swn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-swn .cg-table th { letter-spacing: 0.06em; font-weight: 700; text-transform: uppercase; font-size: 0.75rem; }
.cg-root.cg-swn .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-swn .cg-callout { border-width: 2px; border-radius: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Swindon (E06000030). Nomis Census 2021 TS007A: total 233,411; 5 to 9 15,156 (6.5%, England 5.9%); 20 to 24 12,028 (5.2%, 6.0%); 35 to 39 17,318 (7.4%, 6.7%); 40 to 44 16,278 (7.0%, 6.3%); 45 to 49 16,356 (7.0%, 6.4%); 70 to 74 9,838 (4.2%, 5.0%). ONS 2021 BUAs: Swindon 183,680 (small share outside the borough); Highworth 7,930; Wroughton 7,280; Broad Blunsdon 6,505. Project Gutenberg 40975, Alfred Williams, Life in a Railway Factory (First Published 1915): "The site of the factory is the Wiltshire town of Swindon"; "About twelve thousand men, including clerks, are normally employed at the factory"; appendix "Table of average day wages per week of fifty-four hours paid to men employed at Swindon Railway Works, July 1914", 36 trades, Foremen 70s. to Labourers, Unskilled 20s.',
    localProject: 'Ranking with ties: 36 trades, 14 distinct wages, 8 at 28s. Carpenters row 22 (17 reversed), competition 16, dense 7, fractional 19.5; Smiths row 10, competition 9, dense 5, fractional 9.5; unskilled labourers competition 36, dense 14; ten trades have competition rank 9 or better. Per hour: 34s = 7.56d, 20s = 4.44d over 54 hours.',
    requiredMentions: [
      '183,680',
      'Highworth',
      'Wroughton',
      'Alfred Williams',
      'Life in a Railway Factory',
      'dense rank',
      'competition rank',
      'fifty-four hours',
      'Swindon Railway Works'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Swindon and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Alfred Williams, Life in a Railway Factory (ebook 40975).', url: 'https://www.gutenberg.org/ebooks/40975' }
    ],
    rejectedClaims: [
      'The book\'s opinions about wages and workers: not repeated.',
      'Numbers of men in each trade: not in the book; ranks are of trades only.',
      'Any railway company name: not needed and not claimed.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices for lessons: none; shillings appear only as 1914 wages.'
    ]
  }
};
