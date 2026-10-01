'use strict';
// Arnold (cg- town page, UK cluster Phase 10, towns band B, row 559). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when you copy a table in Python, what
// actually gets copied? (aliasing, shallow vs deep copy of nested lists, [[0]*n]*m, list.copy, copy.deepcopy, id/is.)
// Local data (read 1 October 2026): Census 2021 TS017 household size (Nomis NM_2037_1) for the 128 output areas of
// Gedling that the ONS OA21 to BUA22 lookup places in the Arnold built-up area; 8 columns (1 person to 8 or more),
// 1,024 cells. Our run (scratchpad anl/alias.py, Python 3.13): [[0]*8]*128 filled cell by cell gives 1 row object,
// 789 of 1,024 cells wrong, 1 row right (the last). Comprehension: 128 rows, 0 wrong. In-place tidy (fold '8 or more'
// into '7' to make '7 or more', drop the last column, append a notes row): backup = table sees 17 changed cells, 128
// shortened rows and 129 rows; table.copy() sees 17 changed cells, 128 shortened rows, still 128 rows; [r[:] for r in t]
// and copy.deepcopy see 0. 17 output areas had at least one household of eight or more. timeit on this laptop:
// deepcopy 0.38 ms, row-slice copy 0.011 ms. No sums of published counts are printed.
// Lesson family: Python aliasing, shallow vs deep copy. Screened: deepcopy, deep copy, shallow copy, list.copy,
// copy.copy, mutable default: 0 hits in cluster pages and dossiers; claimed. Nottinghamshire, Carlton, Beeston,
// Mansfield and West Bridgford families checked: none about copying or aliasing.
// Place facts: Gedling TS001 117,264. ONS 2021 BUA (published): Arnold 40,010; the BUA reaches beyond Gedling (our OA
// sum inside Gedling is lower), so only the published figure is printed. Wards of postcodes.io NG5 postcodes in the
// BUA: Ernehale, Redhill, Daybrook, Plains, Coppice, Woodthorpe. Redhill, Daybrook and Woodthorpe are gazetteer
// suburban areas whose nearest postcode is in the BUA; Bestwood Village has its own BUA and is left out.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ARNOLD', label: 'Arnold', blurb: 'Online coding and Python classes for Arnold, with a project on what Python really copies when you copy a census table.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-arnold',
  code: 'anl',
  accent: '#934E24',
  accentRationale: 'Arnold: a muted brick orange (6.26:1 contrast on white), chosen by hand and kept clear of the Nottinghamshire pages',
  pageType: 'city',
  place: {
    name: 'Arnold',
    eyebrow: 'Arnold, Gedling, Nottinghamshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Gedling' },
      { type: 'AdministrativeArea', name: 'Nottinghamshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-classes-in-nottinghamshire', name: 'Nottinghamshire' }],
  nav: [
    { label: 'Nottinghamshire', href: '/coding-classes-in-nottinghamshire' },
    { label: 'Nottingham', href: '/best-coding-class-in-nottingham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Arnold, Gedling',
  title: 'Online Coding and Python Classes in Arnold, Nottingham | 6 to 67',
  description: 'Live online coding and Python classes for Arnold, Redhill, Daybrook and Woodthorpe, ages 6 to 67, plus AI and maths. The first lesson is free, no card needed.',
  ogDescription: 'Online coding and Python classes for Arnold, with a project on aliasing and what Python copies when you copy a table.',
  twitterDescription: 'Arnold online coding and Python lessons, live for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Arnold',
    description: 'Online coding, Python, AI and maths lessons for children, teenagers and adults in Arnold and Gedling, taught through real data and bugs the learner finds and fixes.'
  },

  h1: 'Online coding and Python classes in Arnold',
  capsuleQ: 'What are the best online coding and Python classes in Arnold?',
  capsule: 'The ONS 2021 census put the Arnold built-up area at 40,010 usual residents, and Gedling borough, which contains most of it, at 117,264. Its postcodes sit in the Ernehale, Redhill, Daybrook, Plains, Coppice and Woodthorpe wards. Modern Age Coders teaches coding, Python, AI and maths to Arnold learners aged six to 67 in live video lessons with tutors in India, privately or in groups of five to ten who share a level. A free trial lesson comes first and ends with a course recommendation. In the Arnold project a learner loads a census table of household sizes for 128 local output areas, copies it in four different ways, and finds that three of them are not really copies at all. Group places then cost USD 100 a month and one-to-one tuition USD 150 a month.',
  lead: 'Here is a line of Python that looks perfectly sensible: make a grid of zeros with one row per neighbourhood, then fill it in. Run it on a table of Arnold households and nearly four cells in five come out wrong, with no error and no warning. The reason is one of the ideas that separates people who write Python from people who understand it: a name in Python is a label stuck on an object, not a box with a value inside. Copying the label does not copy the thing.',
  wa: 'Hello Modern Age Coders, we would like to book a free online coding or Python trial lesson. We are in Arnold.',

  picks: {
    eyebrow: 'Good first courses',
    h2: 'Python and coding courses for Arnold learners',
    intro: 'Pick the course that fits the learner\'s age. The opening live lesson costs nothing and needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Puzzles about names, labels and boxes long before any Python is typed.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'A Scratch game built with an AI helper, then tested and mended by the child.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Lists, dictionaries and how Python handles them in memory, with the Arnold table project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from scratch to real data work, with copying and mutation covered properly.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Arnold and Gedling',
      h2: 'Arnold, Redhill, Daybrook, Woodthorpe and Ernehale',
      intro: 'The census headline counts, and the wards Arnold postcodes fall in.',
      body: [
        { kind: 'table', caption: 'Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Arnold built-up area', '40,010'],
          ['Gedling borough', '117,264']
        ] },
        { kind: 'p', text: 'The two rows are separate counts. Gedling also contains Carlton, Calverton and other places, and the ONS built-up area of Arnold runs a little beyond the borough boundary. Looking up every NG5 postcode in Gedling on postcodes.io, the ones inside the built-up area belong to six wards: Ernehale, Redhill, Daybrook, Plains, Coppice and Woodthorpe. Redhill, Daybrook and Woodthorpe are also listed as suburban areas of the town; Bestwood Village is a separate built-up area and is left out here. Schools in Arnold follow the national curriculum for England, and we line learners up by school year, from Key Stage 2 to GCSE and A level computer science, before the trial lesson confirms the starting point.' },
        { kind: 'callout', h3: 'Other Nottinghamshire pages', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-nottingham">Nottingham</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-carlton">Carlton</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-west-bridgford-nottingham">West Bridgford</a> and the <a class="cg-inline-link" href="/coding-classes-in-nottinghamshire">Nottinghamshire page</a>. Why we ask learners to explain every line is set out in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Arnold project',
      h2: 'Four ways to copy a table, and the three that do not',
      intro: 'A census table of household sizes, one tidy-up, and a check on what each copy still remembers.',
      body: [
        { kind: 'p', text: 'The data is Census 2021 table TS017, household size, for the 128 output areas of Gedling that the ONS places inside the Arnold built-up area. Each output area becomes a row with eight numbers: households of one person, two people, and so on up to eight or more. That makes 1,024 cells. The learner builds the table in Python as a list of lists, which is the first structure most people reach for.' },
        { kind: 'p', text: 'The first attempt creates the empty grid with <code>[[0] * 8] * 128</code> and fills it cell by cell from the census file. It runs without complaint. Then the learner compares the grid with the file and finds that 789 of the 1,024 cells are wrong, and only one row, the last, is right. Asking Python for the identity of each row with <code>id()</code> explains it: there is one row object, and the outer list holds 128 labels pointing at it. Every row written simply overwrote the same list. Building the grid with a comprehension, <code>[[0] * 8 for _ in range(128)]</code>, gives 128 separate rows and no wrong cells.' },
        { kind: 'p', text: 'The second experiment is about backups. Before tidying the table, the learner makes a copy, then folds the "8 or more" column into the "7" column to make "7 or more", drops the last column and appends a blank row for notes. Seventeen of the output areas had at least one household of eight or more people, so seventeen cells genuinely change. What does each backup look like afterwards?' },
        { kind: 'table', caption: 'What the backup shows after tidying the original, our Python run', head: ['How the backup was made', 'Changed cells', 'Rows now one column short', 'Rows in the backup'], rows: [
          ['backup = table', '17', '128', '129'],
          ['backup = table.copy()', '17', '128', '128'],
          ['backup = [row[:] for row in table]', '0', '0', '128'],
          ['backup = copy.deepcopy(table)', '0', '0', '128']
        ] },
        { kind: 'p', text: 'Plain assignment copies nothing; the backup is the table under a second name, so it shows every change including the extra row. <code>table.copy()</code> is a shallow copy: it makes a new outer list, so the appended row does not appear, but the inner rows are shared, so every edit inside them leaks through. Copying each row, or calling <code>copy.deepcopy</code>, gives a true backup. The two safe methods differ in speed on this laptop: <code>deepcopy</code> took 0.38 milliseconds and the row-by-row slice 0.011 milliseconds, because <code>deepcopy</code> has to inspect every object it meets. For a table of plain numbers, slicing each row is enough; for rows that themselves contain lists or dictionaries, it is not.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sticky labels on boxes: what happens if two labels go on the same box and you change what is inside?' },
          { h3: 'Ages 11 to 15', p: 'Build the grid both ways in Python and count the wrong cells yourself.' },
          { h3: 'Ages 15 and up', p: 'Test all four backups, explain each result with id() and is, and time the two safe copies.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Household sizes are Census 2021 TS017 from Nomis, published by the ONS under the Open Government Licence. Which output areas count as Arnold comes from the ONS 2021 output area to built-up area lookup, restricted to Gedling. The grid, the tidy-up and every count and timing above come from our own Python run; timings depend on the machine.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Python and AI',
      h2: 'What a broken grid teaches about code an AI writes',
      intro: 'The bug produced no error, so only a learner who checks the output would ever notice it.',
      body: [
        { kind: 'table', caption: 'From the Arnold table to AI-written Python', head: ['What the project showed', 'Why it matters with AI tools'], rows: [
          ['[[0] * 8] * 128 ran without an error', 'Silent bugs pass a quick glance at AI output'],
          ['789 of 1,024 cells were wrong', 'Compare results with the source data, not with hopes'],
          ['A shallow copy shared every inner row', 'Know what a suggested "copy" really copies'],
          ['id() and is revealed the truth', 'Ask Python itself rather than guessing'],
          ['Slicing rows was fast and safe here', 'Pick the copy that fits the data structure']
        ] },
        { kind: 'p', text: 'AI assistants write grids and copies all the time, and both patterns in this project turn up in real suggestions. A learner who has watched 789 cells go wrong reads a generated <code>* 128</code> with suspicion and asks for proof. That is the kind of vibe coding we teach: let the AI draft, then test the draft against the data. Learners move on to building their own AI agents when their Python can stand without support, usually in the sixth form years or as adults, and Copilot Studio agents are taught one-to-one only. Read more in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our AI agents course for UK students</a>.' },
        { kind: 'p', text: 'The ONS, Nomis and postcodes.io are not connected with Modern Age Coders. Their open data supplies the table; the experiments are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'From labels on boxes at seven to memory-aware Python at seventeen',
    intro: 'A school year is only a first guess. The trial lesson shows where a learner should begin.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Names and things', p: 'Sorting, labelling and following instructions, often away from the screen.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'First programs with AI', p: 'Scratch games made alongside an AI, then the move to typed Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'How Python really works', p: 'Lists, dictionaries, references and copies, tested on real tables.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Adults', h3: 'Python you can trust', p: 'Data handling for work, with the habits that catch silent errors.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Copies and AI',
    h2: 'What is the difference between a shallow copy and a deep copy in Python?',
    intro: 'A shallow copy makes a new outer container but keeps pointing at the same inner objects, so changes inside them show up in both, while a deep copy duplicates every nested object so the copy and the original become fully independent.',
    p1: 'On the Arnold household table, a backup made with table.copy() still showed 17 changed cells and 128 shortened rows after the original was tidied, while copy.deepcopy and row-by-row slicing showed none.',
    p2: 'Once a learner has seen that, they stop trusting the word "copy" in any code, their own or an AI\'s, until they have checked it.',
    closer: 'For an Arnold teenager, knowing what Python does underneath is what makes AI a tool they direct rather than a voice they obey, and it comes from writing and testing code themselves.',
    blogAnchor: 'why learning Python properly still pays off in 2026'
  },

  delivery: {
    eyebrow: 'Class format',
    h2: 'How lessons work for an Arnold learner',
    intro: 'Each class is a live video lesson. Python needs a computer with a keyboard; a tablet alone is not enough.',
    cells: [
      { h3: 'Typing, not watching', p: 'The learner writes the code; the tutor keeps asking why it works.' },
      { h3: 'We place, then suggest', p: 'A trial lesson tells us the level before any course is proposed.' },
      { h3: 'Free first session', p: 'No charge and no card for the trial lesson.' },
      { h3: 'Same-level classmates', p: 'Groups of five to ten, drawn from across the UK.' },
      { h3: 'Regular rhythm', p: 'Roughly eight lessons a month, with Nottinghamshire school holidays skipped if you ask.' },
      { h3: 'UK time held', p: 'The lesson stays at its UK hour when the clocks change.' }
    ],
    spec: { title: 'Why we teach online', p: 'Finding five to ten learners at precisely the same stage is far easier across the UK than in one town, and on video nobody has to travel.' }
  },

  fees: {
    h2: 'Prices for Arnold families',
    intro: 'Arnold learners pay the same as everyone outside India.',
    first: 'First lesson: free, a full session, finishing with our course suggestion.',
    group: 'Group class, about eight lessons a month.',
    private: 'One-to-one lessons, about eight a month.',
    closer: 'Fees are set in US dollars and we show no sterling equivalent. Nothing is charged for the trial; billing starts once you have agreed a course and a weekly time. School holidays, missed lessons and changing between group and private are explained on the pricing page.'
  },

  reviewsH2: 'What Nottinghamshire families and UK learners say on Google',

  book: {
    h2: 'Book a free Arnold lesson',
    intro: 'Give us the learner\'s age or year group and something they are into. The free lesson might be a labels-and-boxes puzzle, an AI-built Scratch game, a first Python script, or the Arnold copying experiment.',
    success: 'Thanks. We have your Arnold booking request.'
  },

  faq: {
    h2: 'Arnold questions',
    intro: 'The copying project, Python itself, vibe coding and the practical details.',
    items: [
      { q: 'What is the population of Arnold?', a: 'The ONS counted 40,010 usual residents in the Arnold built-up area at the 2021 census. Gedling borough had 117,264.' },
      { q: 'Can Arnold learners join online Python classes?', a: 'Yes. Live online classes run for ages 6 to 67 in Arnold, Redhill, Daybrook, Woodthorpe and all of Gedling.' },
      { q: 'Why does [[0] * 8] * 128 go wrong in Python?', a: 'It makes one row and puts 128 references to that same row in the outer list, so writing to any row writes to all of them.' },
      { q: 'What is aliasing in Python?', a: 'Aliasing is when two names refer to the same object, so a change made through one name is visible through the other.' },
      { q: 'What did the Arnold project find?', a: 'Filling a grid made with [[0] * 8] * 128 left 789 of 1,024 census cells wrong, and a shallow backup still picked up 17 changed cells after the original was edited.' },
      { q: 'What is vibe coding?', a: 'Describing what you want to an AI, then running, checking and correcting the code it gives you. We teach it with real Python so learners can spot mistakes.' },
      { q: 'At what stage do learners build AI agents?', a: 'Once they write Python independently, generally in the sixth form years or as adults. Copilot Studio agents are one-to-one only.' },
      { q: 'Will this help with GCSE computer science?', a: 'Data structures, testing and programming are central to GCSE and A level computer science, and we teach them thoroughly. We make no promise about grades.' },
      { q: 'How much are the classes?', a: 'The trial lesson is free. Then a group place is USD 100 a month and private lessons USD 150 a month.' },
      { q: 'Can lessons pause in the holidays?', a: 'Yes. Send us the Nottinghamshire term dates and we leave the holiday weeks free.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'More pages for the Nottingham area',
    html: 'Visit <a class="cg-inline-link" href="/best-coding-class-in-nottingham">Nottingham</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-carlton">Carlton</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-west-bridgford-nottingham">West Bridgford</a> and <a class="cg-inline-link" href="/coding-classes-in-nottinghamshire">Nottinghamshire</a>. Everything else is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Chat on WhatsApp'
  },

  footerHeading: 'Arnold and Gedling',
  footerPlaces: [
    { href: '/coding-classes-in-nottinghamshire', label: 'Nottinghamshire' },
    { href: '/best-coding-class-in-nottingham', label: 'Nottingham' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-anl .cg-hero-grid { align-items: start; gap: clamp(1.15rem, 2.5vw, 2.25rem); }
.cg-root.cg-anl .cg-hero h1 { font-weight: 770; letter-spacing: -0.023em; line-height: 1.08; }
.cg-root.cg-anl .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-anl .cg-eyebrow { letter-spacing: 0.11em; font-weight: 690; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-anl .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.014em; }
.cg-root.cg-anl .cg-table caption { font-weight: 530; text-align: left; font-size: 0.9rem; }
.cg-root.cg-anl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-anl .cg-table th { font-weight: 700; letter-spacing: 0.03em; }
.cg-root.cg-anl .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-anl .cg-callout { border-left-width: 4px; border-radius: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Gedling (E07000173), Census 2021 TS001 usual residents 117,264. ONS 2021 BUA (published): Arnold 40,010 (reaches beyond Gedling). National curriculum for England; GCSE and A level computer science. Wards of postcodes.io NG5 postcodes in the Arnold BUA: Ernehale, Redhill, Daybrook, Plains, Coppice, Woodthorpe; Redhill, Daybrook and Woodthorpe are suburban areas whose nearest postcode is in the BUA.',
    localProject: 'Census 2021 TS017 household size for the 128 Gedling output areas in the Arnold BUA (ONS OA21 to BUA22 lookup); 8 columns, 1,024 cells. Python 3.13: [[0]*8]*128 filled cell by cell: 1 row object, 789 of 1,024 cells wrong, only the last row right; comprehension 0 wrong. Tidy in place (fold 8+ into 7, drop last column, append a row): alias sees 17 changed cells, 128 short rows, 129 rows; table.copy() 17, 128, 128 rows; row slices and copy.deepcopy 0. 17 output areas had a household of eight or more. deepcopy 0.38 ms vs row slices 0.011 ms on this laptop. Lesson family: Python aliasing, references, shallow vs deep copy.',
    requiredMentions: [
      '40,010',
      'Ernehale',
      'Daybrook',
      'Woodthorpe',
      'Coppice',
      '789',
      'copy.deepcopy',
      'shallow copy',
      'aliasing'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS017 household size and TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/datasets/c2021ts017' },
      { claim: 'ONS output area (2021) to built-up area (2022) lookup for England and Wales.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/OA21_BUA22_LAD22_RGN22_EW_LU/FeatureServer/0' },
      { claim: 'Python documentation, copy module: shallow and deep copy operations.', url: 'https://docs.python.org/3/library/copy.html' },
      { claim: 'Python documentation, FAQ: why changing list y also changes list x.', url: 'https://docs.python.org/3/faq/programming.html#why-did-changing-list-y-also-change-list-x' },
      { claim: 'postcodes.io postcode and place lookups for NG5 in Gedling.', url: 'https://api.postcodes.io/places?q=Daybrook' }
    ],
    rejectedClaims: [
      'A household total for Arnold made by adding output-area counts: not printed; only published figures are shown.',
      'That the Arnold built-up area lies wholly in Gedling: it reaches beyond the borough; the page says so.',
      'That Bestwood Village is part of Arnold: it has its own ONS built-up area; left out.',
      'That the timings hold on any computer: stated as this laptop only.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
