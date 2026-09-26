'use strict';
// Herefordshire (cg- county index, UK cluster Phase 7, row 235). One unitary council, Herefordshire Council. Spine:
// where does the new book go? Hereford Cathedral (read raw 26 September 2026), Chained Library: the Hereford Gospels
// is "one of 229 medieval manuscripts which now occupy two bays of the Chained Library"; its 17th-century Chained
// Library "is the largest to survive with all its chains, rods and locks intact"; "A chain is attached at one end to
// the front cover of each book; the other end is slotted on to a rod running along the bottom of each shelf"; seen "in
// its original arrangement as it was from 1611 to 1841". Mappa Mundi: about 1300; "a single sheet of vellum (calf skin)
// measuring 64 × 52 inches (1.58 × 1.33 metres)"; Jerusalem at the centre; "500 or so drawings". Our run (scratchpad
// hef/shelf.py, seed 20260926): a shelf of 229 books in order, 50 new books inserted at random places. Packed rod
// (every later chain slides one hook): 6,822 slides, 136.4 per insert. Linked list: 100 link changes, but 5,853
// books walked past to find the places (117.1 per insert). Rod with spare hooks left in each run of 10: 1 spare,
// 2,283 slides and 8 full re-spacings; 2 spares, 1,039 and 3; 5 spares, 264 and none. Lesson family: arrays against
// linked lists (where insertion cost goes) and leaving gaps (gapped arrays); screened (linked list as lesson: 0 hits;
// the Advanced Higher page only names it; the Hereford city page's lesson is a Kalman filter).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 for Herefordshire (the Hereford city page already
// uses the total, so it is not a required mention here); ONS built-up areas (Great Malvern excluded, Worcestershire).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'HEREFORDSHIRE', blurb: 'One council, five towns, and the Chained Library at Hereford Cathedral as a lesson in where new data should go.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-herefordshire',
  code: 'hfs',
  accent: '#4C2A31',
  accentRationale: 'Herefordshire: a cider-apple deep red from the solver (10.06:1 on the lightest paper), browner than the West Midlands garnet',
  pageType: 'governorate',
  place: {
    name: 'Herefordshire',
    eyebrow: 'County of Herefordshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands region' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Hereford', href: '/best-coding-class-in-hereford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Herefordshire',
  title: 'Coding Classes in Herefordshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, algorithms and maths classes across Herefordshire, from Hereford to Leominster, Ross-on-Wye, Ledbury, Bromyard and the villages.',
  ogDescription: 'Coding classes for every Herefordshire town, and a Chained Library project: fit fifty new books onto a chained shelf, and learn why programmers leave gaps.',
  twitterDescription: 'Herefordshire coding, Python and algorithms classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Algorithms Classes for Herefordshire',
    description: 'Ability-placed online coding, Python, data structures, algorithms and mathematics for children, teenagers and adults across Herefordshire, taught live in English.'
  },

  h1: 'Coding classes in Herefordshire',
  capsuleQ: 'What are the best coding classes in Herefordshire?',
  capsule: 'Herefordshire is a single council and a deeply rural county: after the city of Hereford, with just over 60,000 people in its built-up area, the next towns are Leominster and Ross-on-Wye at about 11,000 each, then Ledbury and Bromyard, and a wide spread of villages and farms. That is exactly the kind of place online teaching suits. Our teachers work from India and teach live over video; a learner\'s starting point comes from what they can do, not their age; anyone from 6 to 67 is welcome; and classes are either groups of five to ten or one to one. We teach programming, Python, data structures, algorithms and maths. The Herefordshire project comes from the cathedral\'s Chained Library. The first lesson is free, then USD 100 a month for a group place or USD 150 for private teaching.',
  lead: 'Hereford Cathedral\'s Chained Library is, in the cathedral\'s words, the largest to survive with all its chains, rods and locks intact. Each book has a chain fixed to its front cover, and the other end runs on a rod along the bottom of the shelf. It is a beautiful piece of security engineering, and it hides a problem every programmer meets. Suppose a new book has to go in the middle of a full shelf, in its proper order. Every chain after it must slide along the rod to make room. This page\'s project turns that into code, measures the work for fifty new books, and compares it with two cleverer ways of storing an ordered list: one borrowed from computer science, and one that librarians have always known.',
  wa: 'Hello Modern Age Coders, may I book a free lesson for a learner in Herefordshire?',

  picks: {
    eyebrow: 'Courses for Herefordshire',
    h2: 'The four courses Herefordshire learners start with',
    intro: 'An eight-year-old in Kington who loves puzzles, an eleven-year-old in Ledbury writing a first Python program, a Year 11 in Hereford getting serious about algorithms, and a farm business owner near Bromyard who wants to organise records properly. One free lesson each to begin.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Computational thinking and logic puzzles for children, including sorting and ordering things efficiently.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed Python: lists, loops and the moment a child sees that inserting into a list takes work.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Data structures, algorithms and dynamic programming for teenagers, built so the ideas stick.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Adults', note: 'Arrays to graphs to dynamic programming for adults, including when to choose each structure.' }
    ]
  },

  sections: [
    {
      id: 'herefordshire', tint: '', eyebrow: 'Herefordshire in figures',
      h2: 'One council, one city and a county of villages',
      intro: 'The county\'s population is from the 2021 Census on Nomis. Towns are the ONS built-up areas, each checked against our own count of census output areas.',
      body: [
        { kind: 'table', caption: 'Herefordshire towns by ONS built-up area, 2021 Census', head: ['Town', 'Residents', 'Where'], rows: [
          ['Hereford', '60,480', 'The city, on the Wye'],
          ['Leominster', '11,205', 'North of Hereford, on the Lugg'],
          ['Ross-on-Wye', '10,990', 'South-east, on the Wye'],
          ['Ledbury', '8,345', 'East, below the Malverns'],
          ['Bromyard', '3,815', 'North-east']
        ] },
        { kind: 'p', text: 'Hereford\'s built-up area holds about a third of the county\'s people, and no other town reaches 12,000. The ONS also lists Great Malvern against Herefordshire, but only around 260 of its 33,185 residents live on this side of the border, so it belongs to Worcestershire. Everywhere else is villages, hamlets and farms. For a teenager who wants to take programming further, the nearest group at their level can easily be an hour\'s drive away, and that is the gap an online class fills.' },
        { kind: 'callout', h3: 'The Hereford page is separate', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-hereford">Hereford city page</a> covers the city and runs a different project on the county\'s long temperature record. This page is for families across the whole of Herefordshire. Herefordshire Council and academies set school calendars, which we did not read, so lesson breaks are agreed with each family.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Herefordshire project',
      h2: 'Fifty new books and a shelf of chains',
      intro: 'A shelf of 229 books in order, fifty new arrivals at random places, and three ways to store the list, each costed in Python.',
      body: [
        { kind: 'p', text: 'The learner starts with a shelf of 229 books, the number of medieval manuscripts the cathedral says now occupy two bays of the Chained Library, kept strictly in order. Fifty new books arrive, each belonging at a random place in the order, and the learner writes three versions of the shelf. The first is a packed rod: books sit on consecutive hooks, so putting one in means sliding every later chain along by one. In programming, that is an array, and the slide is the cost of inserting into the middle of one.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: 50 insertions into an ordered shelf of 229 books', head: ['How the shelf is stored', 'Work done', 'Average per new book'], rows: [
          ['Packed rod (an array)', '6,822 chain slides', '136.4 slides'],
          ['Each book points to the next (a linked list)', '100 link changes, but 5,853 books walked past to find each place', '117.1 books walked past'],
          ['Rod with 1 spare hook in every 10', '2,283 slides, 8 full re-spacings', '45.7 slides'],
          ['Rod with 2 spare hooks in every 10', '1,039 slides, 3 full re-spacings', '20.8 slides'],
          ['Rod with 5 spare hooks in every 10', '264 slides, no re-spacing', '5.3 slides']
        ] },
        { kind: 'p', text: 'The second version is the computer scientist\'s answer, a linked list, where each book simply holds a pointer to the next. Inserting is then cheap, just two links to change. But there is a catch that surprises most learners: to find where a new book goes, you have to walk along the chain from the start, one book at a time, and that walking costs almost as much as the sliding did. The work has not disappeared; it has moved from moving things to finding things.' },
        { kind: 'p', text: 'The third version is what librarians do anyway: leave spaces. With a couple of spare hooks in every run of ten, most new books need only a few neighbours moved, and the whole shelf needs re-spacing only occasionally. Two spares per ten cut the work to 1,039 slides; five spares cut it to 264. Databases, file systems and text editors all use versions of this trick. The price is shelf space, and choosing how much to leave is a real design decision.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Line up ten numbered cards, insert a new card in the middle, and count how many cards you had to move; then do it in a Python list.' },
          { h3: 'Ages 13 to 16', p: 'Build a linked list class, insert fifty items, and count both the link changes and the steps taken to find each position.' },
          { h3: 'Ages 16 and up', p: 'Implement the gapped shelf, vary the number of spare hooks, and plot the trade-off between wasted space and work saved.' }
        ] },
        { kind: 'callout', h3: 'What is historical and what is modelled', p: 'The Chained Library\'s description and its 229 manuscripts come from Hereford Cathedral. Our shelf, the random new arrivals and the spare-hook schemes are a teaching model; we are not describing how the cathedral actually shelves or adds books.' }
      ]
    },
    {
      id: 'cathedral', tint: 'deep', eyebrow: 'Why Hereford Cathedral',
      h2: 'Chains, rods and locks from 1611, and a map from about 1300',
      intro: 'The Herefordshire link, in Hereford Cathedral\'s own words.',
      body: [
        { kind: 'table', caption: 'Hereford Cathedral\'s two great treasures, as the cathedral describes them', head: ['Treasure', 'What the cathedral says'], rows: [
          ['The Chained Library', 'The largest to survive with all its chains, rods and locks intact; now shown in its original arrangement as it was from 1611 to 1841.'],
          ['How it works', 'A chain is attached to the front cover of each book; the other end slots on to a rod along the bottom of each shelf.'],
          ['Its manuscripts', 'The 8th-century Hereford Gospels is one of 229 medieval manuscripts which now occupy two bays of the library.'],
          ['The Mappa Mundi', 'Made about 1300 on a single sheet of vellum measuring 64 × 52 inches, with Jerusalem at the centre of the world.'],
          ['Its drawings', 'Around 500 drawings of the history of humankind and the marvels of the natural world.']
        ] },
        { kind: 'p', text: 'The chains were a security system, but they also fixed how the library could grow: a chained book cannot simply be slipped in anywhere. Every storage system makes the same kind of choice, trading ease of adding things against ease of finding them and the space it wastes. A Herefordshire learner who has costed three versions of one shelf has learned the first real lesson of data structures.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Hereford Cathedral or Herefordshire Council, and nothing on this page implies one. The cathedral\'s descriptions are its own; the shelf model and any error in it are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: 'The <a class="cg-inline-link" href="/best-coding-class-in-hereford">Hereford</a> city page is next door in spirit; <a class="cg-inline-link" href="/coding-classes-in-gloucestershire">Gloucestershire</a> and <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">the West Midlands</a> are other county pages nearby.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Levels',
    h2: 'From ordering cards to choosing a data structure',
    intro: 'The free lesson finds where each learner starts. Age suggests; ability decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Putting things in order', p: 'Puzzles and Scratch projects about sorting, ordering and finding things, the start of every data structure.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Lists that grow', p: 'Python lists, insertions and loops, with a counter that shows how much work each change really takes.', courses: ['python-ai-kids-masterclass', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Structures and their costs', p: 'Arrays, linked lists, trees and hash tables, each chosen for a reason and tested against the others.', courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course'] },
      { band: 'Ages 18 to 67', h3: 'Design choices at work', p: 'Adults learn data structures and algorithms properly, and how databases and file systems make the same trade-offs.', courses: ['data-structures-algorithms-masterclass-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and data structures',
    h2: 'An AI can write a linked list. Will it tell you when a list of chains is the wrong choice?',
    intro: 'It answers the question asked; the design question is usually yours.',
    p1: 'Ask a chatbot for a linked list and you will get a tidy one. Ask for the fastest way to keep books in order as new ones arrive and it may well recommend the linked list too, because insertion is famously cheap. What it may not add is that finding the right place still means walking the chain, or that a simple gap strategy beats both for this job. The choice of structure depends on the whole pattern of use, and that is exactly the information a short prompt leaves out.',
    p2: 'A Herefordshire student who has watched 5,853 steps of walking replace 6,822 slides knows to ask how data will be added, searched and removed before choosing how to store it. That question is at the centre of good software design, and it is one that no amount of generated code can answer without someone who understands the trade-offs.',
    closer: 'So a Herefordshire teenager should learn to code in 2026 to make the design choice, not just to type the structure.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Getting started',
    h2: 'Kington to Ross-on-Wye with no lane to drive',
    intro: 'Herefordshire\'s lanes are long and its buses are few after school. Online lessons need neither.',
    cells: [
      { h3: 'From the farmhouse or the flat', p: 'A kitchen near Leominster, a bedroom in Hereford, a study in Ledbury. The teacher shares the screen; the learner types.' },
      { h3: 'School terms we share', p: 'Year groups, GCSE choices and A levels are named as Herefordshire schools name them, and teaching is in English.' },
      { h3: 'A free first lesson', p: 'A real lesson with real work, then a straight recommendation. We ask for no payment details.' },
      { h3: 'Learners at your level', p: 'Five to ten classmates at the same stage, from many places, which rural counties rarely have locally.' },
      { h3: 'Around your school holidays', p: 'Usually two lessons a week, pausing when your school does.' },
      { h3: 'UK clock times', p: 'India, where our teachers are, is ahead of the UK by four and a half hours in summer and five and a half in winter; your times are always UK times.' }
    ],
    spec: { title: 'Why groups are formed by level', p: 'A county of one small city and scattered villages has very few learners at any one stage in any one place. Level-based groups let a Bromyard learner join others at exactly the same point.' }
  },

  fees: {
    h2: 'Fees in Herefordshire',
    intro: 'The same prices across the county, and in every country outside India.',
    first: 'A full lesson of genuine work, with a recommended level and course at the end.',
    group: 'About eight lessons a month in a group of five to ten learners at one level.',
    private: 'About eight lessons a month, one teacher with one learner.',
    closer: 'Fees are in US dollars for everyone outside India, and there is no list in pounds. We charge nothing until the free lesson has settled a course and a weekly time; pausing, missed lessons and switching between group and private are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from families',

  book: {
    h2: 'Book a free lesson',
    intro: 'Tell us an age or school year and one interest. The first lesson might be a sorting puzzle, a first Python list, or the chained shelf on this page.',
    success: 'Thank you. Your Herefordshire request has reached us.'
  },

  faq: {
    h2: 'Herefordshire questions',
    intro: 'The county, the Chained Library project and our lessons.',
    items: [
      { q: 'What are the largest towns in Herefordshire?', a: 'By ONS built-up area in 2021: Hereford 60,480, Leominster 11,205, Ross-on-Wye 10,990, Ledbury 8,345 and Bromyard 3,815.' },
      { q: 'Is this page different from the Hereford page?', a: 'Yes. The Hereford page is about the city and runs a project on the county\'s temperature record; this page covers all of Herefordshire with a data structures project.' },
      { q: 'What is the Chained Library project?', a: 'Learners insert fifty new books into an ordered shelf of 229 in three ways: a packed rod, a linked list and a rod with spare hooks. The packed rod needs 6,822 chain slides; five spare hooks per ten cut that to 264.' },
      { q: 'What is a linked list?', a: 'A way of storing items where each one points to the next. Inserting is cheap once you know where, but finding the place means walking along from the start.' },
      { q: 'What is special about Hereford Cathedral\'s Chained Library?', a: 'The cathedral says it is the largest chained library to survive with all its chains, rods and locks intact, shown in its arrangement of 1611 to 1841.' },
      { q: 'Is there a classroom in Hereford?', a: 'No. All lessons are live online, so learners from Kington to Ross-on-Wye can share a class without travelling.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Puzzles and Scratch for young children, typed Python from about ten, algorithms for teenagers, and data structures or databases for adults. The free lesson sets the level.' },
      { q: 'Do you teach data structures to teenagers?', a: 'Yes. The teen problem-solving course covers logic and programming foundations, core data structures and algorithms, and dynamic programming.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. Group places are USD 100 a month and private lessons USD 150 a month after that, with no sign-up fee and no minimum term.' },
      { q: 'When are Herefordshire school holidays?', a: 'Herefordshire Council and academies set their own dates. We arrange lesson breaks around your school\'s calendar.' }
    ]
  },

  next: {
    eyebrow: 'Across the UK',
    h2: 'Pages near Herefordshire',
    html: 'See the <a class="cg-inline-link" href="/best-coding-class-in-hereford">Hereford</a> city page, or neighbouring counties <a class="cg-inline-link" href="/coding-classes-in-gloucestershire">Gloucestershire</a> and <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">the West Midlands</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every other page.',
    waLabel: 'WhatsApp our team'
  },

  footerHeading: 'Herefordshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-hereford', label: 'Hereford' },
    { href: '/coding-classes-in-gloucestershire', label: 'Gloucestershire' }
  ],

  personalityCss: `
.cg-root.cg-hfs .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.9vw, 2.5rem); }
.cg-root.cg-hfs .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-hfs .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-hfs .cg-eyebrow { letter-spacing: 0.22em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hfs .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.017em; }
.cg-root.cg-hfs .cg-table caption { font-style: italic; font-weight: 600; }
.cg-root.cg-hfs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hfs .cg-table th { letter-spacing: 0.04em; text-transform: uppercase; }
.cg-root.cg-hfs .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-hfs .cg-callout { border-left-width: 6px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Herefordshire (one unitary council). ONS Census 2021 TS001 via Nomis for Herefordshire, County of (the figure is already a required mention on the Hereford city page, so it is not repeated as one here). ONS Census 2021 built-up areas (published; checked with our OA sums): Hereford 60,480; Leominster 11,205; Ross-on-Wye 10,990; Ledbury 8,345; Bromyard 3,815. Great Malvern (259 of 33,185 in Herefordshire) excluded. Hereford Cathedral, Chained Library: "The cathedral\'s earliest and most important book is the 8th-century Hereford Gospels; it is one of 229 medieval manuscripts which now occupy two bays of the Chained Library"; "Hereford Cathedral\'s 17th-century Chained Library is the largest to survive with all its chains, rods and locks intact. A chain is attached at one end to the front cover of each book; the other end is slotted on to a rod running along the bottom of each shelf"; "the whole library can now be seen in its original arrangement as it was from 1611 to 1841". Mappa Mundi: "Recent research suggests a date of about 1300"; "drawn on a single sheet of vellum (calf skin) measuring 64 × 52 inches (1.58 × 1.33 metres)"; "Jerusalem at the centre of the world"; "These 500 or so drawings".',
    localProject: 'Arrays against linked lists, and gapped arrays. Ordered shelf of 229 books; 50 insertions at random positions (seed 20260926). Packed rod (array): 6,822 slides, 136.4 per insert. Linked list: 100 link changes, 5,853 nodes walked to find positions, 117.1 per insert. Gapped rod, blocks of 10 with s spare hooks, full re-spacing when a block overflows (counted as moving every book): s = 1, 2,283 slides, 8 re-spacings, 45.7 per insert; s = 2, 1,039, 3, 20.8; s = 5, 264, 0, 5.3. Page states the shelf and schemes are a model, not the cathedral\'s practice. AI angle: an assistant recommends a linked list for cheap insertion without costing the search. Lesson family: array versus linked list insertion cost and gapped arrays; distinct from Hereford city (Kalman filter).',
    requiredMentions: [
      '229 medieval manuscripts',
      'chains, rods and locks intact',
      '1611 to 1841',
      'Hereford Gospels',
      '6,822',
      'spare hooks',
      '64 × 52 inches',
      '1,039',
      '2,283',
      '60,480'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Herefordshire, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Herefordshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Hereford Cathedral, Chained Library: 229 medieval manuscripts, chains, rods and locks intact, arrangement of 1611 to 1841.', url: 'https://www.herefordcathedral.org/chained-library' },
      { claim: 'Hereford Cathedral, Mappa Mundi: about 1300, 64 × 52 inches of vellum, Jerusalem at the centre.', url: 'https://www.herefordcathedral.org/mappa-mundi' }
    ],
    rejectedClaims: [
      'How the cathedral shelves or adds books in practice: not described in these terms; the shelf is our model.',
      'Great Malvern as a Herefordshire town: almost all of it lies in Worcestershire.',
      'The total number of books in the Chained Library: the city page cites a figure; this page uses only the 229 manuscripts count read on 26 September 2026.',
      'Herefordshire school term dates: none read.',
      'Named Herefordshire schools: none is named.',
      'The Mappa Mundi drawing counts as a total: the cathedral gives category counts and "500 or so"; we do not add the categories up.'
    ]
  }
};
