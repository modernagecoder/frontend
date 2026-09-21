'use strict';
// Southampton (cg- city page, UK cluster Phase 4). Spine: find any of 5,814 postcodes in about one step. Hash
// tables on Ordnance Survey Code-Point Open (dataset version 2026.3.0, RM update 17 July 2026), downloaded from
// the OS Downloads API on 21 September 2026 (scratchpad sot/hash.py). The SO file has 18,624 postcode units;
// 5,814 carry the Southampton district code E06000045, across six outward codes (SO16 1,332, SO19 1,174, SO15
// 1,167, SO14 852, SO18 848, SO17 441). 7,919 buckets (prime), load factor 0.734. Sum-of-character-codes hash:
// raw sums 473 to 536, only 61 distinct values, so 61 buckets used, longest chain 227, 75.61 comparisons per
// successful lookup; 1,417 anagram groups (for example SO14 0AE and SO14 0EA) always collide. FNV-1a: 3,901
// buckets used (a uniform hash would expect about 4,119), longest chain 7, 1.45 comparisons. Plain list: 2,907.5
// comparisons on average. Birthday check: 20,000 random draws, first shared FNV-1a bucket after a median of 96
// postcodes (theory about 105 to 106 for 7,919 buckets; 105 keys give a 50% chance). Lesson family: hash tables
// (hash functions, chaining, load factor, birthday collisions). Screened free site-wide on 21 September 2026
// (hash table, FNV-1a, birthday paradox: 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 for Southampton E06000045 (248,922 usual
// residents; 238,765 in households, 95.9%; 10,157 in communal establishments, 4.1%), TS007A (16,752 aged 15 to 19,
// 6.7%; 26,139 aged 20 to 24, 10.5%; 20,718 aged 25 to 29, 8.3%; England 5.7, 6.0 and 6.6%), TS068 (60,197
// schoolchildren and full-time students of 235,126 aged 5 and over, 25.6%; England 20.4%). Ordnance Survey, About
// (Great Britain's national mapping service; mapping since 1791; head office Explorer House, Adanac Drive,
// Nursling, Southampton SO16 0AS, which Code-Point Open places in Test Valley, E07000093) and History (21 June 1791
// officially recognised as the birth of OS; 1841 Tower of London fire prompted a move to a new Southampton
// headquarters in an empty former barrack building; Southampton HQ bombed in the Second World War; 342 million
// maps produced for the war effort by 1945).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'SOUTHAMPTON', blurb: 'Ordnance Survey\'s city since 1841, with a project that stores every Southampton postcode in a hash table and measures why one hash fails.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-southampton',
  code: 'sot',
  accent: '#60395C',
  accentRationale: 'Southampton: a muted plum from the solver (7.62:1 on every paper tint, dE 8.1 from the nearest used accent), softer than the Cambridge mulberry and far from the Liverpool teal',
  pageType: 'city',
  place: {
    name: 'Southampton',
    eyebrow: 'Southampton, Hampshire, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Hampshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Southampton, England',
  title: 'Best Coding Classes in Southampton | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Southampton learners aged 6 to 67, from Shirley and Portswood to Bitterne and Woolston. First lesson free.',
  ogDescription: 'Coding and AI lessons for Southampton, on a page that files all 5,814 of the city\'s postcodes in a hash table and shows why adding up letters is a bad hash.',
  twitterDescription: 'Coding and AI lessons, live online, for Southampton learners aged six to sixty-seven; the first lesson is free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Southampton Online Coding, AI and Maths Classes',
    description: 'Live online lessons in coding, Python, AI, data and mathematics for Southampton children, teenagers and adults, taught in English in level-based groups or one to one.'
  },

  h1: 'Coding classes in Southampton',
  capsuleQ: 'What are the best coding classes in Southampton?',
  capsule: 'Southampton counted 248,922 usual residents at the 2021 Census, and 25.6% of those aged five and over were schoolchildren or full-time students, against 20.4% across England. Ordnance Survey, Great Britain\'s national mapping service, moved its headquarters to Southampton after a fire in 1841, and its open postcode file is the data behind the project on this page. Modern Age Coders teaches Southampton learners aged six to sixty-seven live online, in small groups of five to ten set by level or one to one, with teachers in India and times arranged in UK hours. Nothing is charged for the first lesson. Afterwards it is USD 100 a month for a group place, or USD 150 a month for lessons with a teacher to yourself.',
  lead: 'Southampton has 5,814 postcodes in Ordnance Survey\'s open Code-Point file. Suppose a program has to find one of them instantly, thousands of times a second. Scanning a list takes 2,907 comparisons on average. A hash table does it in about one: a hash function turns each postcode into a bucket number, and the lookup jumps straight there. But the hash has to be good. The obvious one, adding up the character codes, turns out to produce only 61 different answers for every postcode in the city, because they are all built from the same few letters and digits. It packs 5,814 postcodes into 61 of 7,919 buckets, with 227 in the worst. A well-mixed hash spreads the same keys over 3,901 buckets, seven at most in any one. Knowing why, and how to measure it, is the lesson Southampton\'s postcodes teach our teenage learners.',
  wa: 'Hello Modern Age Coders, could you arrange a free coding lesson for a learner in Southampton?',

  picks: {
    eyebrow: 'Course picks for Southampton',
    h2: 'Four courses for the mapmakers\' city',
    intro: 'Let the learner\'s interests lead. Each course starts with a free live lesson, and no card is needed to book.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Python for 9 to 12 year olds, where lists and dictionaries of key-value pairs, the ideas under every lookup, arrive early.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first line to full projects, with a week on dictionaries and sets that leads straight to this project.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Hash maps, sets, stacks and queues built and measured, with collisions handled on purpose rather than by accident.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'University and adult', note: 'SQL and database design for adults, including the indexes that make lookups in large tables fast.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Southampton today',
      h2: 'A port city with a strong student presence',
      intro: 'From the 2021 Census tables for the Southampton local authority, published by the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Southampton, Census 2021', head: ['What was counted', 'Southampton', 'England'], rows: [
          ['Usual residents', '248,922', 'Not compared'],
          ['In households', '238,765, 95.9%', 'Not compared'],
          ['In communal establishments', '10,157, 4.1%', 'Not compared'],
          ['Aged 15 to 19', '16,752, 6.7%', '5.7%'],
          ['Aged 20 to 24', '26,139, 10.5%', '6.0%'],
          ['Aged 25 to 29', '20,718, 8.3%', '6.6%'],
          ['Schoolchildren and full-time students, of 235,126 aged five and over', '60,197, 25.6%', '20.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The early twenties', p: 'Residents aged 20 to 24 made up 10.5% of Southampton, and those aged 25 to 29 another 8.3%, against 6.0% and 6.6% in England.' },
          { h3: 'Learners of every kind', p: 'Schoolchildren and full-time students together were 25.6% of residents aged five and over in 2021, with England at 20.4%.' },
          { h3: 'Mostly in households', p: 'Some 95.9% of residents lived in households; the other 4.1%, in communal establishments, include people in student halls.' }
        ] },
        { kind: 'p', text: 'In practice that means learners at every stage. A Southampton learner might be a nine-year-old in Bassett writing a first Python program, a Year 13 student in Sholing finishing A level Computer Science, or someone in their twenties in Ocean Village learning SQL for work, and each joins a group of five to ten at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'The nation\'s mapmakers',
      h2: 'Ordnance Survey\'s long Southampton story',
      intro: 'From Ordnance Survey\'s own account of its history and its about page.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '21 June 1791', p: 'Ordnance Survey says this date is officially recognised as its birth, when the Board of Ordnance bought a new Ramsden theodolite to carry William Roy\'s triangulation forward.' },
          { h3: '1841', p: 'A fire at Ordnance Survey\'s cramped Tower of London offices prompted a move to a new Southampton headquarters, in an empty former barrack building.' },
          { h3: '342 million', p: 'In the Second World War the Southampton headquarters was bombed and badly damaged, and by 1945 Ordnance Survey had produced 342 million maps for the war effort.' }
        ] },
        { kind: 'p', text: 'Today Ordnance Survey describes itself as Great Britain\'s national mapping service. Its head office, Explorer House on Adanac Drive in Nursling, carries a Southampton postal address; its own postcode file places that postcode, SO16 0AS, just over the city boundary in Test Valley. We have no connection with Ordnance Survey. We tell its story because the dataset on this page is one of its open products, published by a mapmaker with nearly two centuries of history in and around the city.' },
        { kind: 'spec', title: 'The file we used', p: 'Code-Point Open, dataset version 2026.3.0, gives a grid reference and district code for every postcode unit in Great Britain. Its SO file lists 18,624 postcodes, of which 5,814 fall in Southampton itself, spread across six outward codes from SO14 to SO19.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Find any of 5,814 postcodes in about one step',
      intro: 'A hash table turns a key, such as a postcode, into a bucket number, so a lookup can jump straight to the right place. We stored every Southampton postcode in 7,919 buckets with two different hash functions.',
      body: [
        { kind: 'table', caption: 'Storing 5,814 Southampton postcodes in 7,919 buckets', head: ['Method', 'Buckets used', 'Longest chain', 'Comparisons per lookup'], rows: [
          ['Plain list, no hashing', 'Not applicable', 'Not applicable', '2,907.5 on average'],
          ['Hash that adds up character codes', '61', '227', '75.6 on average'],
          ['FNV-1a hash', '3,901', '7', '1.45 on average']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Choose the buckets', p: 'Pick a prime number of buckets a little above the number of keys: 7,919 for 5,814 postcodes, a load of about 0.73 keys per bucket.' },
          { h3: '2. Hash each key', p: 'A hash function turns SO17 1BJ into a bucket number. Keys landing in the same bucket are kept in a short list, a chain, and checked one by one.' },
          { h3: '3. Measure the chains', p: 'Count how many buckets each hash actually uses and how long the longest chain grows. That, not how neat the code looks, decides the speed.' }
        ] },
        { kind: 'callout', h3: 'Why adding up letters fails', p: 'Every Southampton postcode is built from the same small set of characters, so the sum of their character codes only runs from 473 to 536: just 61 possible values. The simple hash therefore crams 5,814 postcodes into 61 buckets, 227 in the worst. It also sends anagrams to the same place every time, and there are 1,417 groups of Southampton postcodes that are rearrangements of each other, such as SO14 0AE and SO14 0EA. FNV-1a mixes every character into the whole result and spreads the same keys over 3,901 buckets.' },
        { kind: 'p', text: 'Even a good hash collides sooner than intuition suggests. With 7,919 buckets, theory says a shared bucket becomes more likely than not after about 105 keys; drawing random Southampton postcodes 20,000 times, the first shared bucket came after a median of 96. FNV-1a also used slightly fewer buckets than a perfectly random hash would, 3,901 against an expected 4,119, a reminder that real hash functions are good rather than perfect on keys as alike as postcodes.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Designing lookups',
      h2: 'Five habits for fast, fair lookups',
      intro: 'Learned on postcodes, used afterwards on usernames, product codes, caches, databases and the dictionary inside almost every program.',
      body: [
        { kind: 'table', caption: 'Building a hash table that stays fast', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Know your keys', 'Look at what the keys have in common before choosing a hash; postcodes reuse a tiny alphabet', 'A hash that ignores the structure of its keys'],
          ['Mix every character', 'Use a hash in which each character changes the whole result, such as FNV-1a', 'Anagrams and near-duplicates piling into one bucket'],
          ['Size the table sensibly', 'Keep the load below about one key per bucket and use a prime bucket count', 'Chains that lengthen as the data grows'],
          ['Measure, do not assume', 'Count used buckets and the longest chain on the real data', 'A hash that looks fine on paper and crawls in practice'],
          ['Plan for collisions', 'Handle shared buckets from the start, since they arrive after roughly the square root of the bucket count', 'Code that breaks the first time two keys meet']
        ] },
        { kind: 'p', text: 'The last habit is the birthday paradox at work. In a room of 23 people, two share a birthday more often than not, and a table of 7,919 buckets sees its first collision after around a hundred keys. Every hash table in every programming language is built to handle that calmly, which is why learners write their own before trusting the built-in one.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Sorting cards into labelled boxes by their first letter, then noticing which box overflows and inventing a fairer rule.' },
          { h3: 'Teenagers', p: 'The Code-Point file read in Python, two hash functions written and measured, chains counted and the birthday paradox tested.' },
          { h3: 'Adults', p: 'Indexes, caches and lookups at work, with key structure and load factor checked before performance is promised.' }
        ] },
        { kind: 'p', text: 'We are not connected with Ordnance Survey or the Office for National Statistics. Code-Point Open is published as open data; the tables, hashes and counts are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From labelled boxes to a hash table',
    intro: 'Use the ages as a rough guide; the free lesson settles the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Sorting into boxes', p: 'Filing cards by a simple rule, spotting when one box fills up, and finding a fairer way to share them.', courses: ['mental-maths-mastery-kids', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Codes and lookups', p: 'Characters as numbers, dictionaries that find things by name, and a first home-made hash.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Hash tables in Python', p: 'Hash functions compared on real keys, chaining and load factor measured, and collisions predicted.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Lookups at scale', p: 'Indexes, caching and hashing in databases and services, with performance measured on real data.', courses: ['data-structures-algorithms-masterclass-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant can look up any postcode. Why should a Southampton teenager build a hash table?',
    intro: 'Because the gap between one step and seventy-six is invisible until someone measures it.',
    p1: 'Ask an AI tool to write a postcode lookup and it will usually reach for a built-in dictionary, which is the right choice. Ask it to design its own hash, though, and a plausible function that adds up the characters would pass a quick test and then crawl on real data, using 61 buckets out of 7,919. A learner who has measured the chains can catch that in a code review; one who has not will ship it.',
    p2: 'Hashing also sits at the heart of modern computing and AI. Databases index records with it, websites cache pages with it, and large AI projects use it to find near-duplicate documents in their training data. One small table of postcodes opens the door to all of those ideas.',
    closer: 'So a Southampton teenager should still learn to program in 2026, in the city Ordnance Survey moved to in 1841: software now writes code on request, and knowing which code is quietly slow is exactly what programming teaches.',
    blogAnchor: 'is learning to code still worth it in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Shirley, Portswood or Bitterne, from home',
    intro: 'Whichever side of the Itchen a learner lives on, a live online lesson needs no bridge.',
    cells: [
      { h3: 'Both banks of the Itchen', p: 'A learner in Woolston and another in Freemantle can share one lesson without either crossing the river.' },
      { h3: 'English stages, English names', p: 'Reception, the four Key Stages, Year 9 options, GCSEs and A levels, called what Southampton schools call them, and taught in English.' },
      { h3: 'A useful first lesson', p: 'The free lesson teaches something real and ends with a recommended level, course and regular weekly time, with no card requested.' },
      { h3: 'Groups set by level', p: 'Five to ten learners at one stage, from Southampton, the rest of the UK and abroad, so every level has a slot that works.' },
      { h3: 'Two fixed lessons weekly', p: 'The same two times each week, about eight lessons a month, with holiday and exam pauses agreed with the teacher ahead of time.' },
      { h3: 'A fixed clock in India', p: 'Our teachers work on India Standard Time, which stays fixed all year, so they are four and a half hours ahead of Southampton in summer and five and a half in winter; after-school and evening lessons sit inside their day.' }
    ],
    spec: { title: 'Across Hampshire too', p: 'Families in Eastleigh, Totton or the New Forest join exactly the same groups, because every lesson is online and groups are formed by level rather than postcode.' }
  },

  fees: {
    h2: 'Southampton lesson fees',
    intro: 'A free first lesson, then one of two prices.',
    first: 'A complete lesson with nothing to pay, closing with a level, a course suggestion and a weekly time.',
    group: 'Around eight live lessons a month, in a group of five to ten learners at one level.',
    private: 'Around eight live lessons a month, with the teacher working only with your learner.',
    closer: 'All families outside India pay a single US dollar fee, so Highfield and Harefield pay exactly the same, and we list no prices in pounds. Billing starts only after the free lesson has fixed a course and a time; the pricing page explains pauses, missed lessons and changing between group and private teaching.'
  },

  reviewsH2: 'What six families told Google, unedited',

  book: {
    h2: 'Book a free lesson for a Southampton learner',
    intro: 'We pick the first task by level: sorting cards into boxes for a young child, a first Python dictionary for a middle-schooler, or the Code-Point file and two hash functions for a teenager ready for real data.',
    success: 'Thank you. The team will be in touch soon about a Southampton lesson.'
  },

  faq: {
    h2: 'Southampton coding class questions',
    intro: 'What Southampton families ask us most.',
    items: [
      { q: 'How many people live in Southampton?', a: 'The 2021 Census counted 248,922 usual residents in the Southampton local authority: 238,765 in households and 10,157, or 4.1%, in communal establishments.' },
      { q: 'How many Southampton residents are students?', a: 'In 2021, 60,197 of the 235,126 residents aged five and over were schoolchildren or full-time students, 25.6% against 20.4% in England.' },
      { q: 'Why is Ordnance Survey linked with Southampton?', a: 'Ordnance Survey says a fire at its Tower of London offices in 1841 prompted a move to a new Southampton headquarters. Its head office today, Explorer House, has a Southampton postal address. We are not connected with Ordnance Survey.' },
      { q: 'What is a hash table?', a: 'A way of storing data so that a key, such as a postcode, is turned by a hash function into a bucket number, letting a program find it in about one step instead of searching a whole list.' },
      { q: 'Why does adding up the letters make a bad hash?', a: 'Because Southampton postcodes share so few characters that the sums take only 61 different values, so 5,814 postcodes crowd into 61 buckets, and anagrams such as SO14 0AE and SO14 0EA always collide.' },
      { q: 'How many postcodes does Southampton have?', a: 'Ordnance Survey\'s Code-Point Open, version 2026.3.0, lists 5,814 postcodes in the Southampton local authority, across the outward codes SO14 to SO19.' },
      { q: 'When are Southampton lessons?', a: 'Weekday afternoons and evenings or weekends, at a UK time agreed during the free lesson. Our teachers are four and a half hours ahead of Southampton in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Southampton?', a: 'No. We have no Southampton centre and no premises anywhere in the UK; every lesson runs live online. Learners need a computer with sound and a steady connection, and our phone number is based in India.', boiler: true },
      { q: 'How much do Southampton lessons cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Course, format and time are agreed before anything is charged.', boiler: true },
      { q: 'How are Southampton groups formed?', a: 'By ability, pace and aims rather than age or postcode, with five to ten learners at one level. If no group meets at a suitable time, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'Southern cities and the national guide',
    html: 'To the west, the <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol page</a> splits its city into library catchments with a Voronoi diagram, and to the north <a class="cg-inline-link" href="/best-coding-class-in-oxford">Oxford</a> builds a Markov chain from two centuries of rain. <a class="cg-inline-link" href="/best-coding-class-in-london">London</a> has a guide of its own. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> explains the school stages, and every UK page is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Southampton and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-bristol', label: 'Bristol' },
    { href: '/best-coding-class-in-oxford', label: 'Oxford' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-sot .cg-hero-grid { align-items: start; gap: clamp(1.05rem, 3vw, 2.6rem); }
.cg-root.cg-sot .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-sot .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-sot .cg-eyebrow { letter-spacing: 0.19em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-sot .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.012em; }
.cg-root.cg-sot .cg-grid-3 { gap: clamp(1.1rem, 2.6vw, 2.25rem); }
.cg-root.cg-sot .cg-table th { letter-spacing: 0.022em; }
.cg-root.cg-sot .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sot .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-sot .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Southampton, Census 2021 via Nomis: TS001 Southampton local authority (E06000045) 248,922 usual residents, 238,765 in households (95.9 percent), 10,157 in communal establishments (4.1 percent); TS007A 16,752 aged 15 to 19 (6.7 percent), 26,139 aged 20 to 24 (10.5 percent), 20,718 aged 25 to 29 (8.3 percent), against England 5.7, 6.0 and 6.6 percent; TS068 60,197 schoolchildren and full-time students of 235,126 residents aged 5 and over, 25.6 percent, against 20.4 percent in England. Ordnance Survey, About: Great Britain\'s national mapping service; mapping since 1791; head office Explorer House, Adanac Drive, Nursling, Southampton SO16 0AS (Code-Point Open district E07000093, Test Valley). Ordnance Survey, History: 21 June 1791 recognised as its birth; 1841 Tower of London fire prompted a move to a new Southampton headquarters in an empty former barrack building; Southampton HQ bombed in the Second World War; 342 million maps for the war effort by 1945.',
    localProject: 'Find any of 5,814 postcodes in about one step. OS Code-Point Open 2026.3.0 (RM update 17 July 2026), SO file 18,624 postcodes, 5,814 with district E06000045, outward codes SO14 to SO19. 7,919 buckets, load 0.734. Character-code sum hash: sums 473 to 536, 61 buckets used, longest chain 227, 75.61 comparisons per successful lookup; 1,417 anagram groups. FNV-1a: 3,901 buckets used (uniform expectation about 4,119), longest chain 7, 1.45 comparisons. Plain list 2,907.5. Birthday: first shared bucket after a median of 96 random postcodes in 20,000 trials (theory about 105). Lesson family: hash tables (hash quality, chaining, load factor, birthday collisions); distinct from tries, Bloom filters and binary search.',
    requiredMentions: [
      '248,922',
      '238,765',
      '60,197',
      '235,126',
      '5,814',
      '7,919',
      'FNV-1a',
      'Code-Point Open',
      '21 June 1791',
      '342 million',
      'hash table',
      'Explorer House'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Southampton: 248,922 usual residents; 238,765 in households; 10,157 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000045' },
      { claim: 'Nomis, Census 2021 TS007A: Southampton and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000045,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Southampton 60,197 students of 235,126 aged 5 and over (25.6 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000045,E92000001' },
      { claim: 'Ordnance Survey, Code-Point Open download (CSV, version 2026.3.0): postcodes with district codes.', url: 'https://api.os.uk/downloads/v1/products/CodePointOpen/downloads' },
      { claim: 'Ordnance Survey, About: national mapping service, mapping since 1791, Explorer House address.', url: 'https://www.ordnancesurvey.co.uk/about' },
      { claim: 'Ordnance Survey, History: 21 June 1791, the 1841 move to Southampton, 342 million wartime maps.', url: 'https://www.ordnancesurvey.co.uk/about/history' }
    ],
    rejectedClaims: [
      'University of Southampton and Solent University figures: no student counts found on the pages read, so none stated.',
      'That Ordnance Survey\'s current head office is inside the city boundary: its postcode falls in Test Valley, and the page says so.',
      'Titanic, SeaCity and Spitfire facts: not read from primary pages for this build, so not stated.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Ordnance Survey or the Office for National Statistics.'
    ]
  }
};
