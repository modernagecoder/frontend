'use strict';
// West Midlands (cg- county index, UK cluster Phase 7, row 222). The metropolitan county: seven boroughs. Spine: the
// cheapest mix that still passes. Birmingham Assay Office (theassayoffice.co.uk, read raw 26 September 2026):
// foundation in 1773; the anchor is Birmingham's assay office mark ("If you see an anchor, your item was hallmarked
// by Birmingham Assay Office"); four UK assay offices (Birmingham, London, Sheffield, Edinburgh); fineness in parts
// per thousand, "millesimal fineness": 375 (9ct), 585 (14ct), 750 (18ct), 916 (22ct), 990, 999; "Hallmarking is a
// legal requirement in the UK for gold items weighing 1 gram and over"; "The smallest hallmark we apply at
// Birmingham Assay Office is just 0.25mm". Our run (scratchpad wm/lp.py, scipy linprog HiGHS, 26 September 2026):
// teaching stocks (ours): 22ct scrap 916 up to 20 g, 14ct scrap 585 up to 30 g, 9ct scrap 375 up to 40 g, fine gold
// 999 and gold-free base alloy unlimited; make 50 g at least 750; minimise fine gold. Optimum: all 20 g of 916,
// 26.06 g of 585, 3.94 g of 999, gold exactly 37.500 g = 750.0. Naive fine gold plus base alloy: 37.54 g of 999.
// Scrap alone cannot make 50 g (infeasible); at most 40.12 g of 750 from scrap. Brute-force grid check (0.1 g steps)
// best 3.974 g. Lesson family: linear programming (constraints, objective, optimum at a vertex, infeasibility),
// checked against brute force; screened 26 September 2026 (linear programming, simplex, alloy: 0 lesson hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (2,919,653, our sum of seven boroughs); ONS
// built-up areas with our OA check (Birmingham BUA spans Birmingham, Sandwell and Solihull; Royal Sutton Coldfield
// counted separately; Wolverhampton and Streetly reach into Staffordshire). No county-wide term dates: each borough
// sets its own, none read. legislation.gov.uk (Hallmarking Act) returned 202 with an empty body: not retried.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'WEST MIDLANDS', blurb: 'Seven boroughs, thirty-three towns, and a Jewellery Quarter puzzle: the least fine gold that still earns an 18 carat hallmark.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-the-west-midlands',
  code: 'wmd',
  accent: '#4C131B',
  accentRationale: 'West Midlands: a deep garnet from the solver (11.95:1 on the lightest paper), a jewel red darker than the Berkshire claret',
  pageType: 'governorate',
  place: {
    name: 'West Midlands',
    eyebrow: 'Metropolitan county of the West Midlands',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands region' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Birmingham', href: '/coding-classes-in-birmingham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'West Midlands',
  title: 'Coding Classes in the West Midlands | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, maths and data classes across the West Midlands, from Birmingham and Coventry to Wolverhampton, Walsall, Dudley and Solihull.',
  ogDescription: 'Coding classes for all seven West Midlands boroughs, and a Jewellery Quarter project: find the least fine gold that still makes 18 carat, with a linear program.',
  twitterDescription: 'West Midlands coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for the West Midlands',
    description: 'Ability-placed online coding, Python, mathematics, data and AI for children, teenagers and adults across the seven West Midlands boroughs, taught live in English.'
  },

  h1: 'Coding classes in the West Midlands',
  capsuleQ: 'What are the best coding classes in the West Midlands?',
  capsule: 'The West Midlands county is seven boroughs, Birmingham, Coventry, Sandwell, Dudley, Walsall, Wolverhampton and Solihull, with 2,919,653 residents at the 2021 Census, a little more than Greater Manchester by the same count. Birmingham alone is over a million, and the Black Country towns between it and Wolverhampton run into one another. We teach every part of it the same way. Lessons happen live on video with teachers who are based in India, learners are placed by ability rather than age, and anyone from 6 to 67 can join, either with five to ten others or one to one. Programming, Python, maths, data and AI are all on the timetable. The county project comes from the Jewellery Quarter and its assay office. Lesson one is on the house. Carry on and it is USD 100 a month in a group, or USD 150 a month with a teacher to yourself.',
  lead: 'Every gold ring hallmarked in Birmingham carries a small anchor, the mark of the Birmingham Assay Office, which traces its foundation to 1773. Next to the anchor is a number such as 750, which means at least 750 parts in every thousand are pure gold. That word "at least" hides a lovely problem. A jeweller with a drawer of scrap, some 22 carat, some 14 carat, some 9 carat, wants to make a new 18 carat piece while using as little fresh fine gold as possible. Too little gold and the piece fails its assay; too much and precious metal is wasted. This page\'s project solves that with a linear program, checks the answer by brute force, and discovers when no answer exists at all.',
  wa: 'Hello Modern Age Coders, I would like a free lesson for a learner in the West Midlands.',

  picks: {
    eyebrow: 'Courses for the West Midlands',
    h2: 'West Midlands learners often start with these',
    intro: 'A seven-year-old in Tipton who builds worlds in Minecraft, an eleven-year-old in Solihull who loves logic, a Year 11 in Sutton Coldfield taking maths seriously, and a stock controller in Walsall who wants spreadsheets that think. Four courses, one free first lesson each.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'From a first Scratch game to Minecraft and Roblox coding, kid-safe AI and a first look at Python.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Real Python for children, with variables and conditions that check whether a rule is met.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Algebra, trigonometry, calculus and statistics for secondary students, including optimisation problems.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, statistics and SQL, then Python with pandas and dashboards, finishing in a portfolio project.' }
    ]
  },

  sections: [
    {
      id: 'west-midlands', tint: '', eyebrow: 'The county in figures',
      h2: 'Seven boroughs, 2,919,653 people and a city of more than a million',
      intro: 'Population per borough comes from the 2021 Census tables on Nomis. For towns we take the ONS built-up areas, then add up the census output areas ourselves to spot where a town spills over a boundary.',
      body: [
        { kind: 'table', caption: 'The seven West Midlands boroughs, usual residents at Census 2021, largest first', head: ['Borough', 'Usual residents', 'Main towns'], rows: [
          ['Birmingham', '1,144,919', 'Birmingham, Royal Sutton Coldfield'],
          ['Coventry', '345,325', 'Coventry'],
          ['Sandwell', '341,832', 'West Bromwich, Smethwick, Tipton, Oldbury, Wednesbury'],
          ['Dudley', '323,486', 'Dudley, Halesowen, Stourbridge, Kingswinford, Brierley Hill'],
          ['Walsall', '284,124', 'Walsall, Bloxwich, Willenhall, Brownhills, Aldridge'],
          ['Wolverhampton', '263,727', 'Wolverhampton, Bilston in part'],
          ['Solihull', '216,240', 'Solihull, Knowle and Dorridge, Balsall Common']
        ] },
        { kind: 'p', text: 'Birmingham borough holds 1,144,919 people, more than the other six boroughs\' largest three put together. The ONS draws its Birmingham built-up area across Birmingham, Sandwell and Solihull, but counts Royal Sutton Coldfield, inside Birmingham borough, as a separate built-up area. Between Birmingham and Wolverhampton, the Black Country towns merge so closely that our count shows Coseley touching three boroughs at once. For a family in Wednesbury or Rowley Regis, the nearest centre offering a particular class may be in another borough entirely.' },
        { kind: 'table', caption: 'West Midlands built-up areas above five thousand residents, 2021 Census, in size order', head: ['Built-up area', 'Residents', 'Built-up area', 'Residents'], rows: [
          ['Birmingham', '1,121,375', 'Bilston', '34,640'],
          ['Coventry', '344,285', 'Brierley Hill', '32,305'],
          ['Wolverhampton', '234,025', 'Sedgley', '31,990'],
          ['Solihull', '107,735', 'Coseley', '25,205'],
          ['West Bromwich', '103,110', 'Darlaston', '21,540'],
          ['Royal Sutton Coldfield', '93,375', 'Brownhills', '21,240'],
          ['Walsall', '70,775', 'Wednesbury', '20,315'],
          ['Dudley', '64,270', 'Knowle and Dorridge', '19,320'],
          ['Halesowen', '60,110', 'Cradley Heath', '18,820'],
          ['Stourbridge', '56,950', 'Streetly', '16,785'],
          ['Smethwick', '56,340', 'Aldridge', '15,835'],
          ['Kingswinford', '51,910', 'Rushall and Shelfield', '12,845'],
          ['Bloxwich', '51,875', 'Pelsall', '10,455'],
          ['Willenhall', '49,580', 'Pheasey', '9,495'],
          ['Tipton', '47,200', 'Balsall Common', '7,095'],
          ['Oldbury', '45,180', 'Blackheath', '6,950'],
          ['Rowley Regis', '39,050', '', '']
        ] },
        { kind: 'p', text: 'Most rows match our output-area count within rounding. Four do not, because the places reach beyond the county: the Birmingham built-up area has about 10,000 residents outside the seven boroughs, Coventry about 2,800 in Warwickshire, Wolverhampton about 2,300 and Streetly about 2,800 in Staffordshire. For those we print the ONS figure for the whole place. Royal Sutton Coldfield\'s small gap is within the same county.' },
        { kind: 'callout', h3: 'Seven calendars, not one', p: 'Each of the seven borough councils sets its own term dates for community schools, and academies may choose differently. We did not read them for this page and print none; lesson breaks are agreed with each family. Birmingham and Wolverhampton with Walsall have selective schools covered on separate maths pages for <a class="cg-inline-link" href="/11-plus-maths-tuition-birmingham">Birmingham</a> and <a class="cg-inline-link" href="/11-plus-maths-tuition-wolverhampton-and-walsall">Wolverhampton and Walsall</a>; nothing here is school advice.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The West Midlands project',
      h2: 'The least fine gold that still earns an 18 carat hallmark',
      intro: 'A real standard from the Birmingham Assay Office, stock amounts we invented for teaching, and a program that finds the leanest mix or proves there is none.',
      body: [
        { kind: 'p', text: 'The Assay Office calls this millesimal fineness: 750 means 750 parts of pure gold in every thousand, which is 18 carat, while 916 is 22 carat, 585 is 14 carat and 375 is 9 carat. Our imaginary workshop has 20 g of 22 carat scrap, 30 g of 14 carat and 40 g of 9 carat, plus as much fine gold (999) and gold-free base alloy as it likes. It must make 50 g of metal that is at least 750, and it wants to use as little of the precious fine gold as possible. Each quantity becomes a variable, each rule a constraint, and the aim, least fine gold, the objective.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: making 50 g of at least 750 gold from our teaching stocks', head: ['Approach', 'Fine gold used', 'What else goes in', 'Result'], rows: [
          ['Fine gold and base alloy only', '37.54 g', 'Base alloy to make up the weight', '750, but wasteful'],
          ['Linear program, least fine gold', '3.94 g', 'All 20 g of 22 carat, 26.06 g of 14 carat', 'Exactly 750.0'],
          ['Brute-force check on a 0.1 g grid', '3.97 g', 'All 20 g of 22 carat, 26.0 g of 14 carat', 'Agrees, to the grid\'s precision'],
          ['Scrap only, no fine gold at all', 'None', 'Everything in the drawer', 'Impossible: at most 40.12 g of 750 can be made']
        ] },
        { kind: 'p', text: 'Three lessons sit in that table. The first is the size of the saving: thinking the problem through uses about a tenth of the fine gold that the obvious method does. The second is where the answer lands. The winning mix uses every gram of the richest scrap, then exactly enough 14 carat to balance, and the gold content comes out at precisely 750 parts per thousand, not a fraction more. Linear programs always put their optimum at a corner like this, where constraints meet, which is why the "at least" becomes "exactly".' },
        { kind: 'p', text: 'The third lesson is the last row. Without any fine gold, the drawer cannot make 50 g of 18 carat, however cleverly it is mixed; the most it can make is 40.12 g. A good solver does not return a nearly-right answer in that case. It reports that the problem is infeasible, and a good programmer checks for that before printing anything. The brute-force grid is the fourth, quieter lesson: a slow, simple method that agrees with the clever one is the strongest evidence the clever one is right.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Work out by hand how much 22 carat and 9 carat make 18 carat, then write the calculation as a Python function.' },
          { h3: 'Ages 13 to 16', p: 'Write the brute-force search over a grid of amounts, find the least fine gold, and see how the answer changes with the grid size.' },
          { h3: 'Ages 16 and up', p: 'Set the problem up as a linear program, solve it with a library, and test what happens as each stock limit is raised or lowered.' }
        ] },
        { kind: 'callout', h3: 'What is real and what is ours', p: 'The fineness standards, the anchor, 1773 and the 1 gram rule are the Birmingham Assay Office\'s. The stock amounts are values we chose for teaching, the mixes are our calculations, and nothing here is advice on making, buying or valuing jewellery. Real alloying also involves other metals and processes this model leaves out.' }
      ]
    },
    {
      id: 'assay', tint: 'deep', eyebrow: 'Why the Jewellery Quarter',
      h2: 'An anchor, a number and 250 years of testing',
      intro: 'The county link, from the Birmingham Assay Office\'s own pages.',
      body: [
        { kind: 'table', caption: 'The Birmingham Assay Office, in its own words', head: ['Topic', 'What it says'], rows: [
          ['Its mark', 'If you see an anchor, your item was hallmarked by Birmingham Assay Office.'],
          ['Its age', 'An archive of Birmingham date letters going back to the Assay Office\'s foundation in 1773.'],
          ['The UK system', 'Four UK assay offices, marked for Birmingham, London, Sheffield and Edinburgh.'],
          ['The law', 'Hallmarking is a legal requirement in the UK for gold items weighing 1 gram and over.'],
          ['The detail', 'The smallest hallmark it applies is just 0.25mm.']
        ] },
        { kind: 'p', text: 'Assaying is testing, and testing is the part of programming beginners skip. A hallmark exists because nobody should have to take a maker\'s word for what a ring contains; a test suite exists because nobody should have to take a programmer\'s word for what a function does. The brute-force check in this project is the software version of the assay: an independent measurement that either confirms the claim or exposes it.' },
        { kind: 'p', text: 'We are independent of the Birmingham Assay Office and of every West Midlands council, and this page should not be read as suggesting otherwise. The fineness standards come from the Assay Office; the invented stocks, the solver set-up and any slip in them are our own.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a>, <a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry</a> and <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a> have pages of their own, and <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a> surrounds Coventry.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Levels of learning',
    h2: 'From following a rule to finding the leanest way to meet one',
    intro: 'The free lesson decides where each learner starts; age helps us guess, ability settles it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Rules and checks', p: 'Block-coding games with win conditions, where children learn that a program checks a rule before it moves on.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Mixtures and ratios', p: 'Python with fractions, percentages and parts per thousand, turning word problems into small programs.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Optimisation', p: 'Algebra, inequalities and optimisation in maths lessons, and search and solvers in code, each checking the other.', courses: ['complete-high-school-mathematics-mastery', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Decisions from data', p: 'Spreadsheets, SQL and Python for adults who plan stock, shifts or budgets, with constraints written down properly.', courses: ['data-analysis-mastery-course-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and optimisation',
    h2: 'An AI will suggest a gold mix. Will it notice when no mix is possible?',
    intro: 'Not always, and the difference matters whenever a real limit is involved.',
    p1: 'Ask a chatbot how to make 50 g of 18 carat gold from a drawer of scrap and it will usually produce a confident recipe. If the scrap cannot do it, some replies still offer numbers that look reasonable and quietly fall short, because a fluent paragraph does not check a constraint the way a solver does. In jewellery that means a failed assay; in a factory rota, a hospital schedule or a delivery plan it means a plan that cannot be carried out.',
    p2: 'A West Midlands student who has written the constraints down and watched a solver report "infeasible" knows to ask the hard questions of any suggested plan: does it meet every rule exactly, could any other mix do better, and has something independent checked it? Those questions are how operations planners work, and they are the questions to put to any AI-generated plan.',
    closer: 'So a West Midlands teenager should learn to program in 2026 to be the person who can say, with evidence, that a plan is impossible before anyone tries to follow it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practical details',
    h2: 'Brownhills to Balsall Common, no bus needed',
    intro: 'The county is dense but its journeys are slow at school pick-up time. Online lessons avoid them completely.',
    cells: [
      { h3: 'At your own desk', p: 'A bedroom in Pelsall, a kitchen in Cradley Heath, a spare room in Knowle. Teacher and learner share one screen, and the learner does the typing.' },
      { h3: 'School language, in English', p: 'Year groups, GCSE options and A levels are called what West Midlands schools call them, and teaching is always in English.' },
      { h3: 'First lesson on us', p: 'A real lesson of real work and a clear view of the right course afterwards. We never ask for card details.' },
      { h3: 'Peers at your level', p: 'Five to ten learners who are at the same stage, from many towns and countries, so the lesson is pitched right.' },
      { h3: 'Your school\'s holidays', p: 'Usually two lessons a week, with breaks matched to your own school, since the seven boroughs and academies differ.' },
      { h3: 'Booked in UK time', p: 'Our teachers keep India time, four and a half hours ahead in UK summer and five and a half in UK winter; you always see UK time.' }
    ],
    spec: { title: 'Why groups are formed by level', p: 'Even among nearly three million people, the learners at exactly one stage on one evening are spread thinly across many towns. Level-based groups let a Kingswinford learner and a Coventry learner share one class.' }
  },

  fees: {
    h2: 'West Midlands fees',
    intro: 'One set of prices for all seven boroughs, and for every country apart from India.',
    first: 'A full lesson of genuine work, ending with a suggested level and course.',
    group: 'Around eight lessons each month in a group of five to ten at one level.',
    private: 'Around eight lessons each month, one teacher with one learner.',
    closer: 'Outside India every family is billed in US dollars, so no pound figures appear anywhere. The first invoice follows the free lesson, once a course and a regular weekly slot are agreed, and the pricing page sets out what happens if you pause, miss a lesson or change between a group and one-to-one.'
  },

  reviewsH2: 'In the words of families, from Google',

  book: {
    h2: 'Try a lesson free',
    intro: 'Give us a school year or age and mention one thing the learner likes. The first lesson could be a block-coding game, a first Python ratio calculator, or the 18 carat puzzle on this page.',
    success: 'Thank you. Your West Midlands request has reached us.'
  },

  faq: {
    h2: 'West Midlands questions',
    intro: 'The county, the gold project and the lessons.',
    items: [
      { q: 'How many people live in the West Midlands county?', a: 'Adding the 2021 Census counts of the seven boroughs from Nomis gives 2,919,653 usual residents. Birmingham had 1,144,919 and Solihull, the smallest, 216,240.' },
      { q: 'What are the largest towns in the West Midlands?', a: 'By ONS built-up area: Birmingham 1,121,375, Coventry 344,285, Wolverhampton 234,025, Solihull 107,735 and West Bromwich 103,110. Our table lists thirty-three places above five thousand residents.' },
      { q: 'What is the gold project?', a: 'Learners set up a linear program to make 50 g of at least 750 gold from scrap while using the least fine gold. Our run needs 3.94 g, against 37.54 g for the naive method, and a brute-force check agrees.' },
      { q: 'What does 750 on a hallmark mean?', a: 'The Birmingham Assay Office explains that it means 750 parts per thousand of pure gold, which is 18 carat. 375 is 9 carat, 585 is 14 carat and 916 is 22 carat.' },
      { q: 'What does the anchor mean on a hallmark?', a: 'It is the assay office mark of the Birmingham Assay Office, which traces its foundation to 1773. London, Sheffield and Edinburgh have their own marks.' },
      { q: 'Is there a classroom in Birmingham or Coventry?', a: 'We have no premises in either city. Classes meet over live video, which is how an Aldridge learner and a Stourbridge learner can sit in the same lesson from their own homes.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Block coding for young children, typed Python from about ten, maths and algorithms for teenagers, and data, AI and software for adults. The free lesson chooses the level.' },
      { q: 'Do you teach secondary maths as well as coding?', a: 'Yes. The high school maths course covers algebra, geometry, trigonometry, pre-calculus, calculus and statistics, including optimisation problems.' },
      { q: 'What do lessons cost?', a: 'Your first lesson costs nothing at all. Should you carry on, a monthly group seat is USD 100 and a monthly private teacher is USD 150; there is no enrolment fee and no minimum number of months.' },
      { q: 'When are school holidays in the West Midlands?', a: 'Each of the seven borough councils sets its own dates, and academies can differ. We arrange lesson breaks around your own school\'s calendar.' }
    ]
  },

  next: {
    eyebrow: 'More of the UK',
    h2: 'Pages around the West Midlands',
    html: 'Read the <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a>, <a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry</a> and <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a> pages for the cities, or the county pages for <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a> and <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has the rest.',
    waLabel: 'WhatsApp our team'
  },

  footerHeading: 'West Midlands and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/coding-classes-in-birmingham', label: 'Birmingham' },
    { href: '/best-coding-class-in-coventry', label: 'Coventry' }
  ],

  personalityCss: `
.cg-root.cg-wmd .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 2.8vw, 2.5rem); }
.cg-root.cg-wmd .cg-hero h1 { font-weight: 700; letter-spacing: -0.025em; line-height: 1.03; }
.cg-root.cg-wmd .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-wmd .cg-eyebrow { letter-spacing: 0.13em; font-weight: 800; text-transform: uppercase; }
.cg-root.cg-wmd .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.019em; }
.cg-root.cg-wmd .cg-table caption { font-weight: 600; font-style: italic; letter-spacing: 0.01em; }
.cg-root.cg-wmd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wmd .cg-table th { letter-spacing: 0.06em; text-transform: uppercase; }
.cg-root.cg-wmd .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-wmd .cg-callout { border-left-width: 7px; border-radius: 0 11px 11px 0; }
`,

  dossier: {
    curriculumAuthority: 'West Midlands (metropolitan county, seven boroughs). ONS Census 2021 TS001 via Nomis: Birmingham 1,144,919; Coventry 345,325; Sandwell 341,832; Dudley 323,486; Walsall 284,124; Wolverhampton 263,727; Solihull 216,240; total 2,919,653 (our sum; Greater Manchester 2,867,762 by the same method). ONS Census 2021 built-up areas (published; checked with our OA sums): Birmingham 1,121,375 (Birmingham, Sandwell, Solihull; 1,111,299 inside the county); Coventry 344,285 (341,441 inside); Wolverhampton 234,025 (231,708 inside); Solihull 107,735; West Bromwich 103,110; Royal Sutton Coldfield 93,375; Walsall 70,775; Dudley 64,270; Halesowen 60,110; Stourbridge 56,950; Smethwick 56,340; Kingswinford 51,910; Bloxwich 51,875; Willenhall 49,580; Tipton 47,200; Oldbury 45,180; Rowley Regis 39,050; Bilston 34,640; Brierley Hill 32,305; Sedgley 31,990; Coseley 25,205 (Dudley, Sandwell, Wolverhampton); Darlaston 21,540; Brownhills 21,240; Wednesbury 20,315; Knowle and Dorridge 19,320; Cradley Heath 18,820; Streetly 16,785 (14,007 inside); Aldridge 15,835; Rushall and Shelfield 12,845; Pelsall 10,455; Pheasey 9,495; Balsall Common 7,095; Blackheath 6,950. Birmingham Assay Office: "If you see an anchor, your item was hallmarked by Birmingham Assay Office"; "There are four UK Assay Offices"; "Other UK Assay Office marks represent London, Sheffield and Edinburgh"; "an archive of Birmingham date letters dating back to the Assay Office\'s foundation in 1773"; fineness "expressed in parts per thousand. This is called millesimal fineness": 375 9ct, 585 14ct, 750 18ct, 916 22ct; gold standards also 990 and 999; "Hallmarking is a legal requirement in the UK for gold items weighing 1 gram and over"; "The smallest hallmark we apply at Birmingham Assay Office is just 0.25mm".',
    localProject: 'Linear programming. Variables: grams of fine gold 999 (unlimited), 22ct scrap 916 (at most 20 g), 14ct scrap 585 (at most 30 g), 9ct scrap 375 (at most 40 g), base alloy 0 (unlimited); stock limits are teaching values. Constraints: total 50 g; gold at least 0.750 x 50 = 37.5 g. Objective: minimise fine gold. scipy linprog (HiGHS): 916 20.00 g, 585 26.06 g, 999 3.94 g; gold 37.500 g = 750.0 per thousand. Naive 999 plus base alloy: 37.54 g of fine gold. Scrap only: infeasible for 50 g; maximum 40.12 g of 750 (916 20 g + 585 20.12 g). Brute-force grid (0.1 g for 916 and 585, 0.5 g for 375): best 3.974 g, agreeing to grid precision. Also 50 g at 916 needs 23.99 g of 999. AI angle: fluent recipes can miss infeasibility that a solver reports. Lesson family: linear programming (variables, constraints, objective, vertex optimum, infeasibility) checked against brute force; screened 26 September 2026.',
    requiredMentions: [
      '2,919,653',
      'millesimal fineness',
      '0.25mm',
      '1 gram and over',
      '3.94 g',
      '37.54 g',
      '40.12 g',
      '26.06 g',
      'Rushall and Shelfield',
      'Knowle and Dorridge'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the seven West Midlands boroughs, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for West Midlands towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Birmingham Assay Office: how to read a UK hallmark, millesimal fineness, the anchor, four assay offices, foundation in 1773, 0.25mm hallmark.', url: 'https://www.theassayoffice.co.uk/how-to-read-a-uk-hallmark-a-beginners-guide/' },
      { claim: 'Birmingham Assay Office: gold standards 375, 585, 750, 916, 990, 999; hallmarking required for gold items of 1 gram and over.', url: 'https://www.theassayoffice.co.uk/our-services/hallmarking/gold-assay-and-hallmarking/' }
    ],
    rejectedClaims: [
      'The Hallmarking Act 1973 text: legislation.gov.uk returned 202 with an empty body on 26 September 2026, not retried; the standards are quoted from the Birmingham Assay Office instead.',
      'Gold prices or the value of any mix: money is left out, and the objective is grams of fine gold, not cost.',
      'Spaghetti Junction traffic figures: read at GOV.UK but not used, because growth-rate lessons are already spent elsewhere.',
      'West Midlands school term dates: set by each of seven boroughs and academies; none read, none printed.',
      'How real alloys are made: other metals, melting losses and assay tolerances are outside this teaching model, and the page says so.',
      'Named West Midlands schools: none is named; the selective systems are covered on their own maths pages.'
    ]
  }
};
