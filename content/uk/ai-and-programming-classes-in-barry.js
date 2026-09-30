'use strict';
// Barry (cg- town page, UK cluster Phase 10, towns band B, row 488). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: when is a table of counts too detailed to be safe?
// (k-anonymity: small cells, quasi-identifiers, generalising categories or areas, the privacy against detail trade-off).
// Data (read 30 September 2026): Nomis Census 2021 TS017 household size (NM_2037_1) for all 434 output areas in the Vale of
// Glamorgan (W06000014): OA rows sum to 57,452 households (published LAD total 57,446), 8 size categories. ONS OA21 to LSOA21 to MSOA21 lookup
// (OA_LSOA_MSOA_EW_DEC_2021_LU_v3): 82 LSOAs, 15 MSOAs.
// Our run (scratchpad bay/kanon.py): a "cell" = one area crossed with one household-size group; a household is "exposed at
// k" if its cell holds fewer than k households. Output areas x 8 sizes: 3,472 cells, 930 empty, 571 with 1 to 4 households
// holding 1,134 households (1.97%); under 3: 395 cells, 530 households (0.92%); under 10: 854 cells, 3,033 (5.28%). Output
// areas x 5 groups (1, 2, 3, 4, 5 or more): 146 cells under 5, 430 households (0.75%). Output areas x 3 groups (1, 2, 3 or
// more): none under 5; smallest cell 5; 7 cells under 10 (51 households). LSOAs x 8 sizes: 109 cells under 5, 209
// households (0.36%). LSOAs x 5 groups: smallest cell 12. MSOAs x 8 sizes: 10 cells under 5, 31 households.
// Published census cells are perturbed by the ONS for disclosure control; the page says so and treats them as the table a
// reader sees, not as true counts.
// Lesson family: k-anonymity, quasi-identifiers, generalisation. Screened: "k-anonymity", "quasi-identifier" 0 hits
// anywhere in content/; claimed in claims.txt. Vale of Glamorgan page = pigeonhole and random occupancy on a dovecote.
// Place facts: Vale of Glamorgan TS001 131,939. ONS 2021 BUA (published): Barry 56,605. postcodes.io (Vale of Glamorgan,
// CF62/CF63) suburban areas: Cadoxton, Gibbonsdown, Colcot, Barry Island, Palmerstown, Barry Dock, Merthyr Dyfan.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BARRY', label: 'Barry', blurb: 'AI and programming classes for Barry, with a data privacy project that finds which census table cells are too small to be safe and how to fix them.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-barry',
  code: 'bay',
  accent: '#0F5F6B',
  accentRationale: 'Barry: a deep petrol teal (7.32:1 contrast), chosen by hand to stand apart from recent accents',
  pageType: 'city',
  place: {
    name: 'Barry',
    eyebrow: 'Barry, Vale of Glamorgan, Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Vale of Glamorgan' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Vale of Glamorgan', href: '/coding-classes-in-vale-of-glamorgan' },
    { label: 'Cardiff', href: '/best-coding-class-in-cardiff' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Barry, Wales',
  title: 'AI and Programming Classes in Barry | Python, Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Barry, Cadoxton, Colcot and Barry Island learners aged 6 to 67, with a tutor. First lesson free.',
  ogDescription: 'AI and programming classes for Barry, with a data privacy project on k-anonymity using Vale of Glamorgan census tables.',
  twitterDescription: 'Barry AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Barry',
    description: 'Online AI, programming, Python, vibe coding and maths for children, teenagers and adults in Barry and the Vale of Glamorgan, taught live with careful reasoning about data.'
  },

  h1: 'AI and programming classes in Barry',
  capsuleQ: 'Which are the best AI and programming classes in Barry?',
  capsule: 'The ONS counted 56,605 people in the Barry built-up area at the 2021 census, in a county, the Vale of Glamorgan, of 131,939. Cadoxton, Colcot, Gibbonsdown, Palmerstown, Merthyr Dyfan and Barry Island are recorded suburbs in the CF62 and CF63 districts. Anyone there between six and 67 can study AI, programming, Python, vibe coding and maths with one of our India-based tutors over live video, privately or among five to ten people working at a matching level. We teach people to reason about data before they hand it to a tool, so they know what a dataset can give away. A free opening lesson finishes with our honest view of which course fits. The Barry project opens a census table whose rows cover 57,452 households and asks which of its cells are so small that someone could be singled out, then measures how much detail must be given up to fix that. A group place then costs USD 100 each month, and a tutor to yourself costs USD 150.',
  lead: 'Data used to train and test AI systems is often described as anonymous because the names have been removed. That is not enough. If a table says exactly one household of seven people lives in a certain small area, anyone who knows a family of seven there has found them, name or no name. The standard yardstick is k-anonymity: every combination of the identifying columns must be shared by at least k records, so nobody stands out from a crowd smaller than k. Meeting it means blurring the data, by merging categories or using bigger areas, and blurring costs detail. This project measures that trade-off on a real published table for the Vale of Glamorgan.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Barry?',

  picks: {
    eyebrow: 'Barry course picks',
    h2: 'Barry courses in reasoning, Python and AI',
    intro: 'Age decides which of the four to open. Whichever it is, lesson one is live, free and needs no payment card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: sorting, grouping and spotting the one item that stands out from its group.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games the learner designs, builds with an AI helper and then tests.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including what training data can reveal and the Barry privacy check.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data handling, privacy-aware analysis, machine learning and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Barry and the Vale',
      h2: 'Barry, Cadoxton, Colcot and Barry Island',
      intro: 'Census figures for the town and county, and suburbs recorded in CF62 and CF63.',
      body: [
        { kind: 'table', caption: 'Barry and the Vale of Glamorgan at the 2021 census, ONS figures', head: ['Area', 'Usual residents'], rows: [
          ['Barry built-up area', '56,605'],
          ['Vale of Glamorgan county', '131,939']
        ] },
        { kind: 'p', text: 'The two figures come from different ONS tables and describe different areas. On postcodes.io, Cadoxton, Gibbonsdown, Palmerstown and Barry Dock appear as suburban areas in the CF63 district, and Colcot, Barry Island and Merthyr Dyfan in CF62. Schools in the Vale follow the Curriculum for Wales, so we place learners by Welsh school year and use WJEC names for GCSE and A level. Lessons are taught in English. Send the term dates and we will keep holiday weeks free.' },
        { kind: 'callout', h3: 'The Vale, Cardiff and WJEC help', p: 'There is more on <a class="cg-inline-link" href="/coding-classes-in-vale-of-glamorgan">coding classes in the Vale of Glamorgan</a>, <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> and <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science help</a>. Why reasoning comes before tools is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Barry project',
      h2: 'k-anonymity on a census table: how small is too small?',
      intro: 'Count the households hiding in tiny cells, then blur the table two different ways and count again.',
      body: [
        { kind: 'p', text: 'The learner downloads Census 2021 table TS017, household size, from the Nomis API for all 434 output areas in the Vale of Glamorgan. The area rows add up to 57,452 households sorted into eight sizes, from one person to eight or more. The published county total is 57,446, six fewer, and that small gap is itself a privacy measure, as explained below. Each combination of an area and a size is a cell. Two columns, where you live and how many live with you, are things a neighbour would know; privacy researchers call such columns quasi-identifiers. A household is exposed at level k if its cell holds fewer than k households.' },
        { kind: 'table', caption: 'Households in cells of fewer than five, under different levels of detail, our Python count on Census 2021 TS017 for the Vale of Glamorgan', head: ['Areas', 'Household-size groups', 'Cells under 5', 'Households in them'], rows: [
          ['434 output areas', '8 sizes', '571', '1,134 (1.97%)'],
          ['434 output areas', '1, 2, 3, 4, 5 or more', '146', '430 (0.75%)'],
          ['434 output areas', '1, 2, 3 or more', '0', '0'],
          ['82 larger areas (LSOAs)', '8 sizes', '109', '209 (0.36%)'],
          ['82 larger areas (LSOAs)', '1, 2, 3, 4, 5 or more', '0', '0']
        ] },
        { kind: 'p', text: 'At full detail, 571 of the 3,472 cells hold between one and four households, 1,134 households in all, and another 930 cells are empty. Of those 571 small cells, 555 are for households of five or more people: homes that size are scarce in any one area, so they are easy to pick out. There are two ways to blur. Merging the sizes into "five or more" cuts the exposed households to 430 but does not finish the job. Keeping all eight sizes and moving to larger areas leaves 209. Doing both, five groups across 82 areas, leaves no cell under five, and the smallest holds 12. So does keeping the small areas and using only three groups, but that throws away nearly everything the table said about larger households.' },
        { kind: 'p', text: 'Raising k raises the price. At k of 10 the full-detail table has 854 small cells covering 3,033 households, 5.28% of the county. One caution belongs on the page: the ONS already adjusts small census counts slightly to protect people, which is why the rows add to 57,452 while the county total reads 57,446. These published numbers are the table a reader sees, not exact truths. The exercise is about how to reason over any table, including ones nobody has protected.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play a guessing game: how few clues does it take to pick one classmate out of thirty?' },
          { h3: 'Ages 11 to 15', p: 'Load the Vale household table in Python and list every cell that holds fewer than five.' },
          { h3: 'Ages 15 and up', p: 'Measure k-anonymity at several levels of detail and chart what each level of safety costs.' }
        ] },
        { kind: 'callout', h3: 'Census table, our counting', p: 'Household counts are Office for National Statistics Census 2021 data from Nomis, under the Open Government Licence, and already carry the ONS\'s own disclosure protection. The cells, groupings and percentages are our calculations. Nothing here identifies any household, and no attempt was made to.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Privacy and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Removing names is the start of protecting data, not the end.',
      body: [
        { kind: 'table', caption: 'From the Barry privacy check to working with AI', head: ['In the household table', 'When data goes into an AI tool'], rows: [
          ['571 cells held fewer than five', 'Rare combinations can identify people'],
          ['Area and household size were enough', 'Ordinary columns act as identifiers'],
          ['Merging sizes left 430 exposed', 'One fix is often not enough'],
          ['Both fixes together left none', 'Privacy is bought with lost detail'],
          ['The ONS had already adjusted small counts', 'Ask what protection a dataset already has']
        ] },
        { kind: 'p', text: 'People now paste spreadsheets into chatbots and ask agents to analyse customer lists without a second thought. Vibe coding means describing a program while an AI writes it; our Barry learners first ask which columns could point to a person, and have the code check cell sizes before any chart is drawn. An AI agent with access to files should be given the same rule: count before you publish. Building agents waits for confident Python, so it mostly suits sixth formers and adults, and anything in Copilot Studio is done in private lessons. Further reading: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is not connected with the Office for National Statistics, Nomis or postcodes.io. We used their open data only, and the analysis and any mistakes are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From guessing games to privacy-aware data work',
    intro: 'A Welsh school year tells us roughly where to begin; the free lesson tells us exactly.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Clues, groups and what makes one item stand out.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small games and apps designed by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and data', p: 'Tables, counting and privacy beside WJEC GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Data, AI and agents', p: 'Responsible data handling, machine learning and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and privacy',
    h2: 'What is k-anonymity, and is anonymous data really anonymous?',
    intro: 'A dataset is k-anonymous when every combination of its identifying columns is shared by at least k records; data with names removed can still fail that test and point to individuals.',
    p1: 'In a Census 2021 table whose rows add to 57,452 Vale of Glamorgan households by small area and household size, 1,134 households sat in cells of fewer than five; merging sizes and using larger areas together removed every such cell.',
    p2: 'Learners who have run that count ask of any dataset given to an AI: which columns could single someone out, and how small is the smallest group?',
    closer: 'A Barry teenager who checks cell sizes before sharing data is already working more carefully than many adults, and that care is learned by writing the code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'How a Barry lesson reaches you',
    intro: 'A laptop or desktop with a camera, plus home broadband steady enough for video, is all the kit required.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'Our tutors do not type for anyone. The Barry learner shares a screen, writes and runs the program, and explains each step when asked.' },
      { h3: 'Trial first, plan second', p: 'What the free lesson shows decides the first topic; a WJEC course is noted if there is one.' },
      { h3: 'A trial with no bill', p: 'One full lesson of real teaching, free, closing with a course suggestion.' },
      { h3: 'Classes built by level', p: 'Between five and ten people, drawn from all over Britain, who have reached the same point.' },
      { h3: 'Twice weekly in term', p: 'Roughly eight sessions a month, with Vale holiday weeks left clear.' },
      { h3: 'Your hour is fixed', p: 'When British clocks shift in March and October, the tutor adjusts and you do not.' }
    ],
    spec: { title: 'Why not a classroom in Barry?', p: 'A class only works if everyone in it is at one level, and a single town seldom supplies enough of them on one evening. A video call can draw on the whole country.' }
  },

  fees: {
    h2: 'Barry fees',
    intro: 'Our fees outside India are one flat list, and Barry is on it.',
    first: 'A complete trial lesson without charge, and advice at the end of it.',
    group: 'A seat in a level-matched class, around eight sessions monthly.',
    private: 'A tutor for one learner, around eight sessions monthly.',
    closer: 'Fees are in US dollars, not sterling. Nothing is billed until the trial has settled which course and which evening. Rules on holiday weeks, absences and moving between group and private lessons sit on the pricing page.'
  },

  reviewsH2: 'Vale of Glamorgan families and learners across Britain, on Google',

  book: {
    h2: 'Book a free Barry lesson',
    intro: 'Two facts get us started: how old the learner is, and what they enjoy. The trial could be a who-is-it guessing game, a Scratch game planned with an AI, a first Python program, or counting cells in a real table.',
    success: 'Thank you. We have your Barry request.'
  },

  faq: {
    h2: 'Barry questions',
    intro: 'Data privacy, the census project, Python, vibe coding and practical points.',
    items: [
      { q: 'What is the population of Barry?', a: 'The ONS gives 56,605 usual residents for the Barry built-up area at the 2021 census; the Vale of Glamorgan had 131,939.' },
      { q: 'Can someone in Barry join these AI and programming classes?', a: 'Yes. Every lesson is a live video call, open to ages 6 to 67 anywhere in Barry or the wider Vale of Glamorgan.' },
      { q: 'What is a quasi-identifier?', a: 'A column that is not a name but can help pick someone out when combined with others, such as area, age or household size.' },
      { q: 'How do you make data k-anonymous?', a: 'By generalising: merge rare categories, use larger areas or wider bands, or remove the rarest records, until every combination is shared by at least k records. Each step loses detail.' },
      { q: 'What does the Barry project involve?', a: 'Counting how many of the 57,452 households in the rows of a census table sit in cells smaller than k, then merging categories and areas to see what level of detail is safe.' },
      { q: 'Is vibe coding part of the lessons?', a: 'It is, from primary age upward. A learner states what the program should do, lets an AI draft it, then reads and tests the draft.' },
      { q: 'At what point do AI agents come in?', a: 'After a learner can write Python alone, which tends to mean sixth form age or adulthood. Copilot Studio agent work is private-lesson only.' },
      { q: 'Can lessons run beside WJEC courses?', a: 'They can. We cover WJEC GCSE and A level computer science and maths topics so they make sense, and we make no promises about results.' },
      { q: 'How much are the classes?', a: 'Nothing for the trial. Group classes are then USD 100 monthly and private lessons USD 150 monthly.' },
      { q: 'What happens at half term and in the summer?', a: 'Lessons stop for the Vale school holidays once we have your dates, and restart the week after.' }
    ]
  },

  next: {
    eyebrow: 'More to read',
    h2: 'More south Wales pages',
    html: 'Other pages with their own projects: <a class="cg-inline-link" href="/coding-classes-in-vale-of-glamorgan">Vale of Glamorgan</a> (a dovecote and the pigeonhole principle), <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> and <a class="cg-inline-link" href="/coding-classes-in-bridgend">Bridgend</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> cover everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Barry and the Vale of Glamorgan',
  footerPlaces: [
    { href: '/coding-classes-in-vale-of-glamorgan', label: 'Vale of Glamorgan' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bay .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-bay .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-bay .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-bay .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bay .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.02em; }
.cg-root.cg-bay .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-bay .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bay .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-bay .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-bay .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Vale of Glamorgan (W06000014), Census 2021 TS001 usual residents 131,939. ONS 2021 BUA (published): Barry 56,605. Curriculum for Wales, WJEC GCSE and A level. postcodes.io (Vale of Glamorgan): Cadoxton, Gibbonsdown, Palmerstown, Barry Dock (CF63); Colcot, Barry Island, Merthyr Dyfan (CF62), suburban areas.',
    localProject: 'Census 2021 TS017 (NM_2037_1), 434 Vale of Glamorgan OAs, OA rows sum to 57,452 households (published LAD total 57,446), 8 sizes; OA-LSOA-MSOA lookup (82 LSOAs, 15 MSOAs). Of the 571 cells under 5, 555 are sizes 5 and over (5: 176, 6: 250, 7: 91, 8+: 38; 3: 5, 4: 11). Cells under 5 / households: OA x 8 sizes 571 / 1,134 (1.97%), 930 empty of 3,472; OA x 5 groups 146 / 430 (0.75%); OA x 3 groups 0; LSOA x 8 sizes 109 / 209 (0.36%); LSOA x 5 groups 0 (smallest 12). k 10 at full detail: 854 cells, 3,033 households (5.28%). Lesson family: k-anonymity, quasi-identifiers, generalisation.',
    requiredMentions: [
      '56,605',
      '131,939',
      '57,452',
      'Cadoxton',
      'Gibbonsdown',
      'Colcot',
      'Barry Island',
      'Palmerstown',
      'k-anonymity',
      'quasi-identifier'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS017 household size and TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS output area to LSOA to MSOA lookup (December 2021), ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: suburban areas in the Vale of Glamorgan.', url: 'https://api.postcodes.io/places?q=Gibbonsdown' }
    ],
    rejectedClaims: [
      'That any household can be identified from the table: not claimed and not attempted; the ONS perturbs small counts.',
      'Docks, resort or railway history: not read from a source; not claimed.',
      'Why large households are rare in an area: no cause claimed.',
      'Welsh-language statistics: none used.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
