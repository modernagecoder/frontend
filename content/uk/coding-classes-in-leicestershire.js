'use strict';
// Leicestershire (cg- county index, UK cluster Phase 7, row 217). Ceremonial Leicestershire: seven districts under
// Leicestershire County Council plus Leicester City (Rutland is its own county). Spine: can every order be rung once?
// John Taylor & Co (taylorbells.co.uk, read raw 26 September 2026): "Taylor's has been producing high quality bells in
// Loughborough since 1839"; "Britain's Last Bellfoundry"; The Bellfoundry, Freehold Street, Loughborough LE11 1AR.
// Our run (scratchpad lei/ring.py, 26 September 2026): six bells have 720 orders. Plain hunt (x, 16 alternating)
// returns to rounds after 12 rows, all distinct. Plain Bob Minor, place notation x16x16x16x16x16x with lead end 12:
// first lead 123456 ... 132546, next lead head 135264; plain course 60 rows in 5 leads, all distinct. Exhaustive
// depth-first search over whole leads with plain (12) and bob (14) lead ends finds NO true 720 (30,074 nodes, 0.6
// seconds); adding singles (1234) finds one at the 434th node: 60 leads, 43 plain, 7 bobs, 10 singles; verified 720
// distinct rows, every bell moving at most one place, ending in rounds. Lesson family: change ringing as a search
// through permutations under an adjacency rule (truth checking, and exhaustive search as a proof of impossibility);
// distinct from graph colouring by backtracking (Newcastle), inversion counting (Armagh) and Stirling (Stirling).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (1,080,940, our sum of eight councils); ONS
// Census 2021 built-up areas with our OA-level check (Swadlincote and Woodville excluded, Derbyshire; the Leicester
// built-up area, 406,580, spans Leicester, Blaby, Charnwood and Harborough). BLOCKED (403, not retried):
// Leicestershire County Council term dates; University of Leicester pages.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'LEICESTERSHIRE', blurb: 'Eight councils, thirty-two towns, and a Loughborough-inspired search for a way to ring all 720 orders of six bells.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-leicestershire',
  code: 'lcs',
  accent: '#6B5246',
  accentRationale: 'Leicestershire: a bell-bronze brown from the solver (5.79:1 on the darkest paper tint), redder than the Essex and Hertfordshire browns',
  pageType: 'governorate',
  place: {
    name: 'Leicestershire',
    eyebrow: 'County of Leicestershire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'East Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Leicester', href: '/coding-classes-in-leicester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Leicestershire',
  title: 'Coding Classes in Leicestershire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, algorithms and maths classes across Leicestershire, from Leicester and Loughborough to Hinckley, Melton Mowbray and Coalville.',
  ogDescription: 'Coding classes for every Leicestershire town, and a project about bells: a program that proves one way of ringing all 720 orders is impossible, then finds another.',
  twitterDescription: 'Leicestershire coding, Python and algorithms classes for ages 6 to 67, live online. Free first lesson.',
  ogImageCourse: 'competitive-programming-for-teens-course',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Algorithms Classes for Leicestershire',
    description: 'Ability-placed online coding, Python, algorithms, AI and mathematics for children, teenagers and adults across Leicester and the seven Leicestershire districts, taught live in English.'
  },

  h1: 'Coding classes in Leicestershire',
  capsuleQ: 'What are the best coding classes in Leicestershire?',
  capsule: 'Leicestershire is Leicester City plus seven districts, 1,080,940 people at the 2021 Census, and its shape is unusual: one very large built-up area around Leicester holding more than a third of everyone, then Loughborough, Hinckley and a spread of market towns and villages. Wherever a learner lives, our teaching is the same. Lessons are live on video, the teachers work from India, and each learner is placed by skill instead of age, from 6 all the way to 67, in groups of five to ten or on their own with a teacher. Programming, Python, algorithms, AI and maths are all taught. The county project starts in Loughborough, with bells. Lesson one is on us; after that it is USD 100 a month in a group or USD 150 for private teaching.',
  lead: 'Six church bells can ring in 720 different orders. Bell ringers in England have spent centuries working out how to ring every one of them exactly once, moving each bell at most one place at a time, and finishing back where they started. It is a puzzle a computer scientist would recognise at once: a search through every arrangement of a set, under a strict rule about which arrangement may follow which. Loughborough has cast bells since 1839 and calls its foundry Britain\'s last. So Leicestershire\'s project writes the ringers\' rules as code, checks them, and then asks the computer a question it can answer completely: is it possible to ring all 720 using only the simplest kind of call? The answer is no, and the program can prove it in under a second.',
  wa: 'Hello Modern Age Coders, please could we book a free lesson for a learner in Leicestershire?',

  picks: {
    eyebrow: 'Courses for Leicestershire',
    h2: 'The four courses Leicestershire learners start with most',
    intro: 'A seven-year-old in Oadby who makes up rules for games, an eleven-year-old in Market Harborough who enjoys number patterns, a Year 11 in Loughborough who likes hard puzzles, and a graduate in Hinckley preparing for technical interviews. Each starts with one free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects with rules, repeats and turns, the building blocks of every later search program.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Fractions, algebra, geometry and probability learned by coding them in Python, including counting arrangements.' },
      { course: 'competitive-programming-for-teens-course', band: 'Ages 13 to 18', note: 'Algorithms and contest technique in Python or C++, including a unit on recursion and backtracking.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Adults', note: 'Arrays to graphs to dynamic programming, greedy methods and backtracking, then interview practice.' }
    ]
  },

  sections: [
    {
      id: 'leicestershire', tint: '', eyebrow: 'Leicestershire in figures',
      h2: 'Eight councils, 1,080,940 people and a city bigger than its boundary',
      intro: 'Head counts per council are from the 2021 Census on Nomis. For towns we use ONS built-up areas and our own re-count of the census output areas inside the county.',
      body: [
        { kind: 'table', caption: 'Leicester City and the seven Leicestershire districts, usual residents at Census 2021, largest first', head: ['Council', 'Usual residents', 'Main towns'], rows: [
          ['Leicester', '368,571', 'Leicester'],
          ['Charnwood', '183,971', 'Loughborough, Shepshed, Birstall, Syston, Mountsorrel'],
          ['Hinckley and Bosworth', '113,642', 'Hinckley, Earl Shilton, Barwell, Groby'],
          ['North West Leicestershire', '104,706', 'Coalville, Ashby-de-la-Zouch, Whitwick, Castle Donington'],
          ['Blaby', '102,926', 'Blaby and Whetstone, Enderby and Narborough, Countesthorpe'],
          ['Harborough', '97,625', 'Market Harborough, Lutterworth, Broughton Astley'],
          ['Oadby and Wigston', '57,747', 'Oadby, Wigston'],
          ['Melton', '51,752', 'Melton Mowbray']
        ] },
        { kind: 'p', text: 'The Leicester built-up area had 406,580 residents, about 38,000 more than the whole of Leicester City. The difference is the suburbs that grew past the city line into Blaby, Charnwood and Harborough; Wigston\'s built-up area likewise touches the city. So a family in Birstall or Glen Parva may think of themselves as living in Leicester and pay council tax somewhere else. Beyond that ring, the county is a network of market towns: Loughborough, Hinckley, Melton Mowbray, Market Harborough, Coalville, Ashby-de-la-Zouch and Lutterworth, each a proper drive from the others.' },
        { kind: 'table', caption: 'Leicestershire towns by ONS built-up area, Census 2021, largest first; Swadlincote and Woodville straddle in from Derbyshire and are left out', head: ['Town', 'Usual residents', 'Town', 'Usual residents'], rows: [
          ['Leicester', '406,580', 'Lutterworth', '10,520'],
          ['Loughborough', '64,860', 'Whitwick', '10,455'],
          ['Hinckley', '50,725', 'Broughton Astley', '9,650'],
          ['Wigston', '34,730', 'Thurmaston', '9,505'],
          ['Melton Mowbray', '27,450', 'Barwell', '9,150'],
          ['Market Harborough', '24,165', 'Sileby', '8,955'],
          ['Oadby', '24,030', 'Countesthorpe', '7,670'],
          ['Coalville', '21,980', 'Castle Donington', '7,345'],
          ['Ashby-de-la-Zouch', '15,120', 'Kibworth Beauchamp and Kibworth Harcourt', '7,330'],
          ['Shepshed', '14,870', 'Anstey', '7,045'],
          ['Birstall', '14,315', 'Barrow upon Soar', '6,820'],
          ['Blaby and Whetstone', '14,080', 'Ibstock', '6,810'],
          ['Leicester Forest East and Kirby Muxloe', '13,850', 'Groby', '6,560'],
          ['Syston', '13,620', 'Quorndon', '5,575'],
          ['Enderby and Narborough', '13,180', 'Measham', '5,370'],
          ['Mountsorrel', '12,885', 'Earl Shilton', '10,885']
        ] },
        { kind: 'p', text: 'All thirty-two rows match our own output-area count to within rounding, so none of them leaks out of the county. Two towns the ONS lists against North West Leicestershire do not belong in the table: Swadlincote and Woodville are Derbyshire places with only a few hundred residents each on the Leicestershire side. Earl Shilton and Leicester Forest East both straddle the Blaby and Hinckley and Bosworth line.' },
        { kind: 'callout', h3: 'School dates for 2026-27', p: 'Leicestershire County Council\'s term-dates page would not load for us on 26 September 2026; it returned an access refusal, and we neither retried nor copied dates from elsewhere. Leicester City sets its own calendar, and academies can set theirs. Lesson breaks are agreed with each family around the dates their own school gives them.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Leicestershire project',
      h2: 'Ringing all 720 orders of six bells, and proving one way cannot work',
      intro: 'The ringers\' rules as code, a checker that catches any mistake, and a search that settles a question completely.',
      body: [
        { kind: 'p', text: 'Number six bells 1 to 6, highest to lowest. Ringing them in order, 123456, is called rounds. Every row that follows is a new order, and the rule is strict: between one row and the next, each bell may move at most one place. That means a new row is made by swapping some neighbouring pairs and leaving other bells where they are. The goal, an extent, is to ring all 720 orders of six bells exactly once and come back to rounds. The first things a learner codes are the swap and the checker: a function that reads a list of rows and says whether any repeats and whether any bell ever jumped two places.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: what each rule reaches from rounds on six bells', head: ['What we rang', 'Rows before rounds returns', 'All different?', 'Share of the 720'], rows: [
          ['Plain hunt: swap every pair, then all but the ends, alternately', '12', 'Yes', 'Under 2 per cent'],
          ['Plain Bob Minor plain course: plain hunt with a small change at each lead end', '60', 'Yes', 'One twelfth'],
          ['Plain Bob Minor with the usual "bob" call allowed at lead ends', 'No true 720 exists', 'Search exhausted', 'Proved impossible'],
          ['Plain Bob Minor with bobs and "singles"', '720', 'Yes, every one', 'All of them']
        ] },
        { kind: 'p', text: 'The third row is the heart of the project. A lead is twelve rows; the first one, from rounds, ends on 132546, and the plain lead end turns that into 135264 to start the next. A bob changes that lead-end step, and a composition is a list of choices, plain or bob, one per lead. Our program tries them depth first: add a lead, check that none of its twelve rows has been rung before, carry on, and back up when it gets stuck. With only plain leads and bobs it explored 30,074 positions in 0.6 seconds and ran out of options without ever reaching 720. Because the search tried everything, that is not a failure to find an answer. It is a proof that there is none.' },
        { kind: 'p', text: 'Allow a third call, the single, which swaps just the last two bells at a lead end, and the same search finds a true 720 at its 434th position: 60 leads, of which 43 are plain, 7 are bobs and 10 are singles. Then the checker, written separately, confirms it: 720 rows, no repeats, no bell ever moving more than one place, ending in rounds. A good learner never trusts a search result that has not been checked by different code.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Write the swap function and ring plain hunt on four, five and six bells, counting the rows until rounds comes back each time.' },
          { h3: 'Ages 13 to 16', p: 'Build the truth checker, then hand it deliberately broken compositions and make sure it catches every repeat and every illegal jump.' },
          { h3: 'Ages 16 and up', p: 'Write the depth-first search, reproduce the no-bobs-only result, and measure how the number of positions explored changes when a third call is added.' }
        ] },
        { kind: 'callout', h3: 'What this does and does not show', p: 'Our result covers compositions built from whole leads of Plain Bob Minor with calls only at lead ends, which is how the method is normally called. Ringers use many other methods and conventions that this project leaves out. The rows, counts and times are from our own run of our own code, and nothing here comes from any bell-ringing organisation.' }
      ]
    },
    {
      id: 'loughborough', tint: 'deep', eyebrow: 'Why Loughborough',
      h2: 'A bellfoundry in a Leicestershire town since 1839',
      intro: 'The county link, in the foundry\'s own words.',
      body: [
        { kind: 'table', caption: 'John Taylor and Co, from its own website', head: ['What', 'What the foundry says'], rows: [
          ['Where', 'The Bellfoundry, Freehold Street, Loughborough LE11 1AR.'],
          ['How long', '"Taylor\'s has been producing high quality bells in Loughborough since 1839."'],
          ['Its own description', '"Britain\'s Last Bellfoundry".'],
          ['What it does', 'New bells, restoration, belfry renovation and sound control, from single bells to large rings and carillons.']
        ] },
        { kind: 'p', text: 'Bell ringing is one of the oldest places in English life where people did serious combinatorics by hand, long before anyone called it that, and a foundry that still casts bells in a Leicestershire town is a reason to bring the subject into a coding class. The skills transfer well beyond bells: generating every arrangement of a set, checking a long answer for mistakes, and knowing when an exhaustive search has proved something rather than merely failed to find it.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with John Taylor and Co, Leicestershire County Council or Leicester City Council, and nothing here implies one. The foundry\'s facts are its own; the code, the search and any error in them are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: 'The <a class="cg-inline-link" href="/coding-classes-in-leicester">Leicester</a> page covers the city itself, <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire</a> and <a class="cg-inline-link" href="/coding-classes-in-essex">Essex</a> are other county pages in this series, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists the rest.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages of learning',
    h2: 'From rules in a game to a search that proves something',
    intro: 'The free lesson finds the right stage. School year is a guide; what the learner can do is the decider.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Rules and repeats', p: 'Scratch games built from rules, loops and turns, where children learn a computer follows instructions exactly.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Counting arrangements', p: 'Python lists and loops, and the maths of how many ways things can be ordered, checked by listing them.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Search and proof', p: 'Recursion, backtracking and graphs, with the discipline of verifying every answer a search returns.', courses: ['competitive-programming-for-teens-course', 'olympiad-competition-mathematics-mastery'] },
      { band: 'Ages 18 to 67', h3: 'Algorithms at depth', p: 'Data structures and algorithms for adults, from arrays to dynamic programming, and the interviews that test them.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and the value of proof',
    h2: 'An AI can write a search in seconds. Can it tell you that finding nothing proves something?',
    intro: 'Only if the search was complete, and knowing whether it was is a human job.',
    p1: 'Ask an assistant for a program to compose a 720 of Plain Bob Minor with bobs only and it will write one. When the program finds nothing, the assistant may suggest adding randomness, raising a time limit or trying again. What it may not say is that an exhaustive search that returns nothing is a result in its own right, a proof, and that retrying is pointless. Whether "nothing found" means "impossible" or "not searched hard enough" depends entirely on how the search was built.',
    p2: 'A Leicestershire student who has written the search and the checker separately knows how to tell the two apart. They ask whether every option was tried, whether anything was pruned that should not have been, and whether a different program agrees. That is how mathematicians, engineers and security researchers work, and it is exactly what an AI tool cannot do on your behalf when you do not understand what it wrote.',
    closer: 'So the reason to learn to code in Leicestershire in 2026 is not speed at typing programs. It is knowing when a program\'s silence is an answer.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'Castle Donington to Lutterworth, all from home',
    intro: 'The county\'s market towns are far apart and its buses are few in the evening. Lessons online remove the journey.',
    cells: [
      { h3: 'On your own laptop', p: 'A bedroom in Syston, a kitchen in Ibstock, a spare room in Melton Mowbray. The teacher shares a screen and the learner types.' },
      { h3: 'Taught in English, UK terms', p: 'Year groups, Key Stage 3, GCSE choices and sixth form are discussed in the words local families use, and every lesson is in English.' },
      { h3: 'The first lesson is free', p: 'A real lesson with real work, followed by an honest recommendation. There is no card to enter.' },
      { h3: 'Grouped by what you know', p: 'Five to ten learners at one stage, from many towns and countries, so the level fits and the time works.' },
      { h3: 'Holidays you choose', p: 'Two lessons a week is usual, paused for your own school\'s holidays, since city, county and academies can all differ.' },
      { h3: 'One clock for everyone', p: 'We confirm each slot as a UK time. Our teachers keep India time, which sits 5.5 hours ahead of the UK from late October to late March and 4.5 hours ahead for the rest of the year.' }
    ],
    spec: { title: 'Why level-based groups work here', p: 'One large city and thirty market towns and villages mean few places have enough learners at the same stage on the same night. Grouping by level puts a Measham learner and a Leicester learner in the same class.' }
  },

  fees: {
    h2: 'Leicestershire fees',
    intro: 'The same fees in every Leicestershire town and every country outside India.',
    first: 'One full lesson of genuine work, ending in a recommended level and course.',
    group: 'About eight lessons per month in a group of five to ten at one level.',
    private: 'About eight lessons per month, teacher and learner one to one.',
    closer: 'Our prices are in US dollars for families everywhere except India, and we do not publish them in pounds. You are asked to pay only once the free lesson has agreed a course and a regular weekly time; pauses, missed lessons and moving between group and private places are all set out on the pricing page.'
  },

  reviewsH2: 'Families\' Google reviews, unedited',

  book: {
    h2: 'Book a free lesson',
    intro: 'An age or school year and one interest is all we need. The first lesson could be a Scratch game with rules, a first Python loop, or the bell-ringing checker on this page.',
    success: 'Thank you. We have received your Leicestershire request.'
  },

  faq: {
    h2: 'Leicestershire questions',
    intro: 'The county, the bells project and the way lessons run.',
    items: [
      { q: 'How many people live in Leicestershire?', a: 'Counting Leicester City together with the seven county districts gives 1,080,940 usual residents in the 2021 Census, using the ONS figures published on Nomis. Leicester had 368,571 and Charnwood, the largest district, 183,971.' },
      { q: 'How big is Leicester compared with the city council area?', a: 'The ONS Leicester built-up area had 406,580 residents, about 38,000 more than Leicester City, because the urban area extends into Blaby, Charnwood and Harborough.' },
      { q: 'What is the bell-ringing project?', a: 'Learners code the rules of change ringing on six bells, check compositions for repeats and illegal moves, and use a depth-first search to show that no true 720 of Plain Bob Minor exists with bobs alone, then find one when singles are allowed.' },
      { q: 'Why does a Leicestershire page talk about bells?', a: 'Because John Taylor and Co has cast bells in Loughborough since 1839 and describes itself as Britain\'s last bellfoundry. The project is our own and has no connection with the foundry.' },
      { q: 'How many ways can six bells be rung?', a: 'Six bells have 720 different orders, eight bells 40,320 and twelve bells 479,001,600. An extent rings every order once and returns to rounds.' },
      { q: 'Is there a classroom in Leicester or Loughborough?', a: 'No. Every lesson is live online, so a learner in Lutterworth and one in Coalville can share a class without anyone travelling.' },
      { q: 'What ages do you teach?', a: 'Anyone from six to sixty-seven. Scratch for the youngest, typed Python from roughly ten, then algorithms, data, AI and software for teenagers and adults. The free lesson settles the starting level.' },
      { q: 'Do you teach algorithms to teenagers?', a: 'Yes. The teen competitive programming course covers algorithms, data structures and contest technique in Python or C++, including recursion and backtracking.' },
      { q: 'How much do lessons cost?', a: 'The first is free. Group places are USD 100 a month and private lessons USD 150 a month afterwards, with no joining fee and no fixed contract.' },
      { q: 'When are Leicestershire school holidays?', a: 'Leicester City, the county council and academies can each set dates. We could not load the county council\'s page when we checked, so we fit lesson breaks around the dates your own school gives you.' }
    ]
  },

  next: {
    eyebrow: 'Keep exploring',
    h2: 'More UK pages',
    html: 'For the city itself, see <a class="cg-inline-link" href="/coding-classes-in-leicester">Leicester</a>. Other county pages so far include <a class="cg-inline-link" href="/coding-classes-in-kent">Kent</a>, <a class="cg-inline-link" href="/coding-classes-in-essex">Essex</a> and <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> gathers every region and city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Leicestershire and beyond',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/coding-classes-in-leicester', label: 'Leicester' },
    { href: '/coding-classes-in-essex', label: 'Essex' }
  ],

  personalityCss: `
.cg-root.cg-lcs .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.4vw, 2.9rem); }
.cg-root.cg-lcs .cg-hero h1 { font-weight: 650; letter-spacing: -0.021em; line-height: 1.04; }
.cg-root.cg-lcs .cg-capsule { border-left: 4px dashed var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-lcs .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lcs .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.017em; }
.cg-root.cg-lcs .cg-table caption { font-style: italic; font-weight: 600; letter-spacing: 0.01em; }
.cg-root.cg-lcs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lcs .cg-table th { text-transform: uppercase; letter-spacing: 0.04em; }
.cg-root.cg-lcs .cg-ladder-col { border-top: 4px double var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-lcs .cg-callout { border-left-width: 5px; border-radius: 0 9px 9px 0; }
`,

  dossier: {
    curriculumAuthority: 'Leicestershire (ceremonial: seven districts under Leicestershire County Council plus Leicester City unitary; Rutland is separate). ONS Census 2021 TS001 via Nomis: Leicester 368,571; Charnwood 183,971; Hinckley and Bosworth 113,642; North West Leicestershire 104,706; Blaby 102,926; Harborough 97,625; Oadby and Wigston 57,747; Melton 51,752; total 1,080,940 (our sum). ONS Census 2021 built-up areas (published; all 32 agree with our OA sums within rounding): Leicester 406,580 (Leicester, Blaby, Charnwood, Harborough); Loughborough 64,860; Hinckley 50,725; Wigston 34,730 (Leicester, Oadby and Wigston); Melton Mowbray 27,450; Market Harborough 24,165; Oadby 24,030; Coalville 21,980; Ashby-de-la-Zouch 15,120; Shepshed 14,870; Birstall 14,315; Blaby and Whetstone 14,080; Leicester Forest East and Kirby Muxloe 13,850; Syston 13,620; Enderby and Narborough 13,180; Mountsorrel 12,885; Earl Shilton 10,885; Lutterworth 10,520; Whitwick 10,455; Broughton Astley 9,650; Thurmaston 9,505; Barwell 9,150; Sileby 8,955; Countesthorpe 7,670; Castle Donington 7,345; Kibworth Beauchamp and Kibworth Harcourt 7,330; Anstey 7,045; Barrow upon Soar 6,820; Ibstock 6,810; Groby 6,560; Quorndon 5,575; Measham 5,370. Swadlincote (34,565, 649 in NW Leics) and Woodville (7,255, 758) excluded. John Taylor and Co: "Taylor\'s has been producing high quality bells in Loughborough since 1839"; "Britain\'s Last Bellfoundry"; address The Bellfoundry, Freehold Street, Loughborough LE11 1AR; restoration, belfry renovations, sound control, new bells; "from single bells to the largest rings and carillons in the world".',
    localProject: 'Change ringing as search through permutations. Six bells, 720 orders; a change swaps disjoint adjacent pairs, bells in the place notation stay. Plain hunt (x, 16 alternating) returns to rounds after 12 rows, all distinct. Plain Bob Minor x16x16x16x16x16x, lead end 12: first lead 123456 214365 241635 426153 462513 645231 654321 563412 536142 351624 315264 132546, next lead head 135264; plain course 60 rows, 5 leads, all distinct. Depth-first search over whole leads with lead-end calls: plain (12) and bob (14) only -> no true 720 (exhausted after 30,074 nodes, 0.6 s): proof by exhaustive search within this convention; with singles (1234) -> true 720 found at node 434: 60 leads, 43 plain, 7 bobs, 10 singles; independent checker: 720 distinct rows, each bell moves at most one place, returns to rounds. Orders: 6! = 720, 8! = 40,320, 12! = 479,001,600. AI angle: an assistant treats "nothing found" as a failure to retry rather than a proof, unless the user knows the search was exhaustive. Lesson family: change ringing (permutations under an adjacency rule, truth checking, exhaustive search as proof of impossibility); distinct from graph colouring by backtracking (Newcastle), inversion counting (Armagh), Stirling\'s formula (Stirling).',
    requiredMentions: [
      '1,080,940',
      'since 1839',
      'Freehold Street',
      '30,074',
      'Plain Bob Minor',
      '135264',
      'Kibworth Beauchamp and Kibworth Harcourt',
      'Leicester Forest East and Kirby Muxloe',
      '406,580',
      '132546'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Leicester and the seven Leicestershire districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Leicestershire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'John Taylor and Co: bells in Loughborough since 1839, Britain\'s last bellfoundry, Freehold Street address.', url: 'https://www.taylorbells.co.uk/' }
    ],
    rejectedClaims: [
      'Leicestershire County Council term dates: the council site returned 403 on 26 September 2026, not retried.',
      'Richard III and the radiocarbon dating of his remains: the University of Leicester pages returned 403, so the planned half-life project was dropped and nothing about it is claimed.',
      'Named bells cast at Loughborough (such as famous cathedral bells): not read at a primary source for this build, so none is named.',
      'The history of change ringing and named early ringers: not read at a primary source for this build; the page describes only the rules our code implements.',
      'Swadlincote and Woodville as Leicestershire towns: both lie mostly in Derbyshire.',
      'Named Leicestershire schools: none is named.'
    ]
  }
};
