'use strict';
// Brisbane (cg- city page, Australia cluster Phase 6). Shaped page: leads with teenagers and adults; the
// separate coding-classes-for-kids-brisbane page owns the primary and lower-secondary intent.
// Spine: does the order you add data decide how fast you can search it? Data: the Translink General Transit
// Feed Specification (GTFS) file for South East Queensland, SEQ_GTFS.zip, downloaded 7 October 2026
// (feed_info: published by "Department of Transport and Main Roads - Translink Division", valid 20261007 to
// 20261206; licence Creative Commons Attribution 4.0 per the Queensland Government open data portal).
// stops.txt holds 13,124 rows: 12,855 boarding stops (location_type 0) and 269 parent stations; every
// boarding stop has a distinct six-digit stop_code; 24 stop names contain "ferry terminal". routes.txt route
// entries by route_type: 583 bus (3), 512 rail (2), 9 ferry (4), 1 tram (0). Measured by us on 7 October
// 2026 (scratchpad au/c1/bne_bst.py): inserting the 12,855 codes into a plain binary search tree in file order
// (the file is sorted by stop_id as text, so the codes arrive in 543 ascending runs) gives height 8,427 and
// mean node depth 3,381.3; in fully sorted order height 12,854 and mean depth 6,427.0; over 200 random
// shuffles (seed 2026) mean height 31.13 (min 27, max 37) and mean node depth 16.14; the smallest possible
// height for 12,855 keys is 13; an AVL tree fed the sorted codes reaches height 13 after 12,841 rotations.
// Lesson family: binary search tree height against insertion order, and AVL rebalancing; screened free
// site-wide on 7 October 2026 ("binary search tree": 0 page hits; claimed in au/claims.txt by AU-C1).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Greater Brisbane (GCCSA 3GBRI):
// 2,526,238 people; median age 36 (Queensland 38, Australia 38); 674,188 families; 1,016,682 private
// dwellings; 2.6 people per household; flat or apartment 133,894 (14.7%; Queensland 12.5%; Australia 14.2%);
// Professionals 307,246 (24.7% of employed people aged 15 and over; Queensland 21.4%; Australia 24.0%);
// Bachelor Degree level and above 550,809 (27.0% of people aged 15 and over; Queensland 21.9%; Australia
// 26.3%); aged 15 to 19: 157,117 (6.2%). Queensland Department of Education term dates page: 2026 Term 4
// Tuesday 6 October to Friday 11 December. IANA time zone database: Australia/Brisbane UTC+10 with no
// daylight saving since March 1992 (rule AQ: 1971-72 and 1989-92 summers); Asia/Kolkata UTC+5:30.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'BRISBANE', label: 'Brisbane', blurb: 'Greater Brisbane, a Translink stop list that arrives almost in order, and a project on why that ruins a search tree.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-brisbane',
  code: 'bne',
  accent: '#405880',
  accentRationale: 'Brisbane: a slate river blue (HSV saturation 0.50, value 0.50, hue 218), chosen by hand at least 10 RGB units from every accent in content and the shared stylesheets, 7.2:1 on white and 5.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Brisbane',
    eyebrow: 'Brisbane, Queensland, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Brisbane, Queensland',
  title: 'Best Coding Classes in Brisbane | Live Online, Teens and Adults',
  description: 'Live online coding, Python, data structures and AI classes for Brisbane teenagers and adults, taught by a real teacher in small groups. First lesson is free.',
  ogDescription: 'Coding classes for Brisbane teens and adults, with a project that builds a search tree from 12,855 Translink stop codes and watches it collapse.',
  twitterDescription: 'Brisbane coding classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Data Structures Classes for Brisbane Learners',
    description: 'Level-matched online Python, data structures, algorithms and AI for teenagers and adults across Greater Brisbane, taught live in English.'
  },

  h1: 'Coding classes in Brisbane',
  capsuleQ: 'What are the best coding classes in Brisbane?',
  capsule: 'For a Brisbane teenager or adult it is a live class where a teacher watches you build, explains why code is slow or fast, and sets projects on real data. Greater Brisbane counted 2,526,238 people in the 2021 Census and 27.0% of its residents aged 15 and over hold a bachelor degree or higher. We teach privately or in small level-matched groups, and the trial lesson is free.',
  lead: 'Translink publishes every bus, train, ferry and tram stop in South East Queensland as one open file, and that file is where our Brisbane project begins. It lists 12,855 boarding stops, each with its own six-digit code. Drop those codes into a binary search tree, one of the first data structures a programmer meets, and you would expect quick lookups: a well-shaped tree of that size is only 13 levels deep. Load them in the order the file gives them, though, and the tree grows 8,427 levels tall. Nothing is wrong with the codes. The file simply lists them almost in order, and order is exactly what a plain search tree cannot cope with. Our Brisbane learners measure the damage, then fix it.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Brisbane.',

  picks: {
    eyebrow: 'Course picks for Brisbane',
    h2: 'Four starting points for Brisbane teenagers and adults',
    intro: 'Chosen by what you want to build, then matched to a level during the free lesson. No card details are asked for at any stage.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first variables to classes, practised on files of real places rather than textbook lists.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Trees, heaps, hash tables and graphs, each one measured with a counter so its speed is shown rather than assumed.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Interview-level data structures, including balanced trees, written from scratch and tested on large inputs.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults at work', note: 'Scripts that read published data files, index them sensibly and answer questions in seconds.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Greater Brisbane in the Census',
      h2: 'Two and a half million people and a highly qualified workforce',
      intro: 'Counts and shares published in QuickStats for the Greater Brisbane capital city area after the 2021 Census, alongside Queensland and Australia.',
      body: [
        { kind: 'table', caption: 'Greater Brisbane, 2021 Census QuickStats', head: ['Measure', 'Greater Brisbane', 'Queensland', 'Australia'], rows: [
          ['People', '2,526,238', 'Not compared', 'Not compared'],
          ['Median age', '36', '38', '38'],
          ['Families', '674,188', 'Not compared', 'Not compared'],
          ['Private dwellings', '1,016,682', 'Not compared', 'Not compared'],
          ['Residents aged 15 and over with a bachelor degree or higher', '550,809, or 27.0%', '21.9%', '26.3%'],
          ['Employed residents working as professionals', '307,246, or 24.7%', '21.4%', '24.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger than the state', p: 'A median age of 36 puts Greater Brisbane two years below both Queensland and Australia as a whole.' },
          { h3: 'Degree holders', p: '27.0% of Greater Brisbane residents aged 15 and over held a bachelor degree or higher, against 21.9% across Queensland.' },
          { h3: 'Teenagers in numbers', p: 'The Census counted 157,117 Greater Brisbane residents aged 15 to 19, 6.2% of all residents, and the age band in which most learners write their first tree.' }
        ] },
        { kind: 'p', text: 'A note on how we use these numbers. The Australian Bureau of Statistics adjusts each cell of a census table slightly to protect privacy, so the parts of a table do not always add up to its published total. We quote the published totals and the published percentages as they appear, and never add up a set of rows to manufacture a figure of our own.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How tall does a search tree grow when its data arrives in order?',
      intro: 'All 12,855 boarding-stop codes from the Translink file, inserted into a binary search tree in four different ways.',
      body: [
        { kind: 'table', caption: 'Tree height for the same 12,855 stop codes, measured on 7 October 2026 (our calculation)', head: ['How the codes were inserted', 'Height of the tree', 'Average depth of a code'], rows: [
          ['In the order the Translink file lists them', '8,427 levels', '3,381.3'],
          ['Fully sorted, smallest code first', '12,854 levels', '6,427.0'],
          ['Shuffled at random, average of 200 runs', '31.13 levels (27 to 37)', '16.14'],
          ['Sorted, but into a self-balancing AVL tree', '13 levels', 'Kept low by 12,841 rotations'],
          ['Smallest height possible for 12,855 keys', '13 levels', 'Not applicable']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Why order hurts', p: 'A binary search tree sends each new key left if it is smaller and right if it is larger. Feed it keys that only ever grow and every one goes right, so the tree becomes a single long chain.' },
          { h3: '2. Why the file is risky', p: 'The Translink stop file is sorted by stop ID as text, so the numeric codes arrive in 543 rising runs. Long rising runs are enough to build a tree thousands of levels deep.' },
          { h3: '3. Two fixes', p: 'Shuffle the keys before inserting and the height falls to about 31. Or use an AVL tree, which rotates itself after inserts and stays at the smallest possible height of 13.' }
        ] },
        { kind: 'callout', h3: 'Measured, not assumed', p: 'The difference between 8,427 levels and 13 is the difference between a lookup that checks thousands of codes and one that checks a dozen. Our learners do not take that on trust. They count the depth of every node, print the averages, and compare the tree with a balanced one built from the same data. Every lookup in every tree was checked against Python\'s own set, and all of them agreed.' },
        { kind: 'p', text: 'These figures are ours, measured on the Translink file published for 7 October to 6 December 2026. Stop codes change as the network changes, so a later file will give slightly different numbers. The height of a tree also depends on what you count; here it is the number of links on the longest path from the root to a leaf.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Choosing a data structure',
      h2: 'Five questions to ask before you store a large list',
      intro: 'Learned first on a stop file, then used on student records, product catalogues, log files and anything that grows.',
      body: [
        { kind: 'table', caption: 'What to check before trusting a structure with real data', head: ['Question', 'What it looks like', 'What it protects you from'], rows: [
          ['How will the data arrive?', 'Look at the first few hundred keys before choosing a structure', 'A tree built on sorted input that turns into a chain'],
          ['What will you do most?', 'Lookups, inserts, ranges, or the smallest and largest', 'Paying for features you never use'],
          ['Can it rebalance itself?', 'AVL or red-black trees, or a built-in dictionary', 'Speed that depends on luck'],
          ['How deep is it really?', 'Measure height and average depth after loading', 'A structure that looks fine on ten items and fails on ten thousand'],
          ['Does it still give right answers?', 'Compare every lookup with a simple, slow method', 'A clever structure that is quietly wrong']
        ] },
        { kind: 'p', text: 'The first question is the one most beginners skip. Real data is rarely random. Files exported from a database usually come out sorted, timestamps only increase, and ID numbers are handed out in order. A structure that is fast on shuffled data and slow on ordered data will be slow on most of the data you will ever meet.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'A search tree written by hand in Python, loaded with the real Brisbane codes, then broken and repaired with rotations.' },
          { h3: 'University students', p: 'AVL and red-black trees compared on the same file, with timings and depth counts, as preparation for technical interviews.' },
          { h3: 'Adults at work', p: 'Knowing when a built-in dictionary or a database index is the right tool, and how to check its behaviour on your own data.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders works independently of Translink, the Department of Transport and Main Roads, the statistics bureau and the Queensland Department of Education. The census counts belong to the bureau; every tree height and depth on this page was worked out by us from Translink\'s open file.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around the network',
      h2: 'Ferries, trains and a clock that never changes',
      intro: 'Some things about Brisbane that a programmer notices before anything else.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Twenty-four ferry terminal stops', p: 'Of the 12,855 boarding stops in the Translink file, 24 carry the words ferry terminal in their names, from Regatta and Guyatt Park to the Maritime Museum.' },
          { h3: 'Four kinds of route', p: 'The same file lists 583 bus route entries, 512 rail entries, 9 ferry entries and 1 tram entry, each tagged with the route type number that GTFS defines.' },
          { h3: 'No daylight saving', p: 'Queensland has not changed its clocks since March 1992, according to the IANA time zone database, so Brisbane stays on Australian Eastern Standard Time all year.' }
        ] },
        { kind: 'spec', title: 'Why the clock matters to a programmer', p: 'Brisbane and Sydney share a time zone for half the year and sit an hour apart for the other half. Any program that schedules across the Queensland border has to look up the rules for each place rather than assume one offset, which is why serious software stores times in UTC and converts at the last moment.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first Python list to a tree that balances itself',
    intro: 'The ages are rough signposts; the trial lesson decides the real starting rung.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Lists and searching', p: 'Reading a file into a list, searching it one item at a time, and counting how long that takes as the list grows.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Trees and recursion', p: 'Binary search trees written by hand, recursion that walks them, and inputs chosen to make them fail.', courses: ['problem-solving-dsa-masterclass-teens', 'java-programming-masterclass-for-teens'] },
      { band: 'University', h3: 'Balanced structures', p: 'AVL and red-black trees, heaps and hash tables, with measured comparisons on large real files.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Data at work', p: 'Indexing, querying and automating the published data your job depends on, with the speed to match.', courses: ['python-ai-automation-masterclass-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant will write a search tree in seconds. Why should a Brisbane teenager still understand one?',
    intro: 'Because the tree an assistant writes is usually the plain version, and the plain version grew 8,427 levels tall on the Translink file.',
    p1: 'Ask a chatbot for a binary search tree in Python and you will get neat code with insert and search methods that pass every small test. What you rarely get is a warning that the tree has no rebalancing. On shuffled examples it looks quick. On a real exported file, which nearly always arrives in some kind of order, it quietly turns into a long chain and every lookup slows to a crawl. The code is not wrong; it is unfit for the data, and only someone who knows how trees behave will notice.',
    p2: 'That is the skill we teach alongside the code: asking how a structure will behave on the input it will actually receive. A Brisbane student who has watched a tree grow from 13 levels to 8,427 because of one assumption will check the input order, the worst case and the measured depth of anything an assistant produces, whether it is a tree, a cache or a sorting routine.',
    closer: 'Code from a machine still needs a person who can judge whether it suits the data, and a Brisbane learner who has measured a collapsing tree is ready to be that person in 2026.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Chermside, the city or Logan, the lesson starts at the same minute',
    intro: 'Greater Brisbane spreads across hundreds of suburbs, and a live online lesson reaches all of them without a car park or a bus timetable.',
    cells: [
      { h3: 'From any suburb', p: 'A learner in a unit near the river and one in a house out at Redbank Plains can share a lesson, each at their own desk.' },
      { h3: 'Queensland language', p: 'Teachers use the year levels Queensland schools use, from Year 7 through Year 12, and know that senior study leads to the QCE. Lessons are taught in English.' },
      { h3: 'A real first lesson', p: 'You do a genuine task with a genuine teacher and leave knowing which level, course and weekly slot would suit you. Nobody asks for payment details.' },
      { h3: 'Matched groups', p: 'Fifteen to twenty learners working at the same stage, drawn from Brisbane, the rest of Australia and further afield, so each level finds a workable slot.' },
      { h3: 'A steady rhythm', p: 'Usually two lessons a week, around eight a month, in a fixed slot. Breaks for school holidays and exams are planned with the teacher ahead of time.' },
      { h3: 'A fixed gap to India time', p: 'Neither Queensland nor India moves its clocks, so Brisbane always runs 4 hours 30 minutes in front of our teachers: 5pm in Brisbane is 12:30pm for them.' }
    ],
    spec: { title: 'One offset, all year', p: 'Because Queensland and India both keep the same clock time all year, the gap between a Brisbane learner and our teachers never changes. Lesson times are still always confirmed in Brisbane time.' }
  },

  fees: {
    h2: 'What classes cost in Brisbane',
    intro: 'Three figures and nothing hidden.',
    first: 'A full lesson with no charge, finishing with a level, a course suggestion and a weekly time.',
    group: 'One month of teaching, normally eight lessons, with fifteen to twenty learners at your level.',
    private: 'The same monthly pattern of about eight lessons, one teacher and one learner.',
    closer: 'Outside India every family is billed in US dollars at one rate, so the northside and the southside receive the same invoice and there is no separate Brisbane price list. Billing starts only after the trial, once course and time are agreed; the pricing page explains breaks, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'What our families write on Google, word for word',

  book: {
    h2: 'Say what you want to learn first',
    intro: 'We choose the first task to fit: a first Python list for a curious Year 8, a search tree for a Year 11 student who likes puzzles, or the full Translink stop file for an adult.',
    success: 'Thank you. The team will be in touch shortly about a Brisbane class.'
  },

  faq: {
    h2: 'Brisbane coding class questions',
    intro: 'What Brisbane learners and parents ask us first.',
    items: [
      { q: 'How many people live in Greater Brisbane?', a: '2,526,238 at the 2021 Census. Half of them were 36 or younger, two years below the Queensland and national medians of 38.' },
      { q: 'What is a binary search tree?', a: 'A binary search tree is a way of storing values so that each one has up to two children: smaller values go to the left and larger values to the right. When the tree is well shaped, a lookup only has to check a handful of values, even among thousands.' },
      { q: 'What is the Brisbane stop code project?', a: 'Learners load the 12,855 boarding-stop codes from Translink\'s open data file into a binary search tree, measure its height, and find that the order of the file makes the tree 8,427 levels tall. They then shuffle the codes or switch to a self-balancing AVL tree, which brings the height down to 13.' },
      { q: 'What is an AVL tree?', a: 'An AVL tree is a binary search tree that checks its own balance after every insert and rotates nodes whenever one side becomes more than one level deeper than the other. That keeps its height close to the smallest possible, whatever order the data arrives in.' },
      { q: 'Do you teach Queensland senior students?', a: 'Yes. We use Queensland year levels and plan around the school terms, and senior students practise programming and problem solving that supports their subjects. Assessed school work stays the student\'s own.' },
      { q: 'What time are lessons for Brisbane learners?', a: 'Late afternoon, evening or weekend, chosen during the trial and always stated in Brisbane time. Brisbane is four and a half hours ahead of India time throughout the year.' },
      { q: 'Are the classes only for teenagers and adults?', a: 'This page is written for teenagers and adults, but we teach from age 6 upwards. Younger children start with Scratch and visual projects, and the free lesson places each learner at the right level.' },
      { q: 'Is there a Modern Age Coders centre in Brisbane?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Brisbane coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Brisbane and Australian learners',
    html: 'Younger Queensland students preparing for selective academies can read <a class="cg-inline-link" href="/queensland-academies-entry-maths-practice">Queensland academies entry maths practice</a>. Teenagers who want to build games should see the <a class="cg-inline-link" href="/game-programming-course-australia">game programming course for Australian learners</a>, and anyone weighing up the ATAR alongside computing can start with <a class="cg-inline-link" href="/atar-explained-for-coding-students">the ATAR explained for coding students</a>. Everything for Australian families is linked from the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Brisbane and Australia',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/queensland-academies-entry-maths-practice', label: 'Queensland academies' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-bne .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-bne .cg-hero h1 { font-weight: 760; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-bne .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-bne .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-bne .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.012em; }
.cg-root.cg-bne .cg-grid-3 { gap: clamp(0.9rem, 2vw, 1.7rem); }
.cg-root.cg-bne .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-bne .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bne .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-bne .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Greater Brisbane, ABS Census 2021 QuickStats, GCCSA 3GBRI (read 7 October 2026): 2,526,238 people; median age 36 (Queensland 38, Australia 38); 674,188 families; 1,016,682 private dwellings; average 2.6 people per household; dwelling structure, occupied private dwellings: flat or apartment 133,894 (14.7 percent; Queensland 12.5; Australia 14.2), separate house 669,242 (73.4 percent); occupation, employed people aged 15 and over: Professionals 307,246 (24.7 percent; Queensland 21.4; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 550,809 (27.0 percent; Queensland 21.9; Australia 26.3); aged 15 to 19: 157,117 (6.2 percent). Queensland Department of Education term dates page: 2026 Term 4 Tuesday 6 October to Friday 11 December, 10 weeks. IANA tz database (australasia file, read 7 October 2026): Zone Australia/Brisbane 10:00 AQ AE%sT from 1971; rule AQ daylight saving 1971-72 and 1989-90 to 1991-92 only; Asia/Kolkata UTC+5:30, so Brisbane is 4 hours 30 minutes ahead of India time all year.',
    localProject: 'Binary search tree height against insertion order. Translink SEQ_GTFS.zip downloaded 7 October 2026: feed_info publisher Department of Transport and Main Roads - Translink Division, feed_start_date 20261007, feed_end_date 20261206; stops.txt 13,124 rows, 12,855 with location_type 0 and 269 with location_type 1; all 12,855 stop_code values distinct; 24 stop names contain "ferry terminal"; routes.txt route_type counts 3: 583, 2: 512, 4: 9, 0: 1. Integer stop codes inserted into an unbalanced binary search tree (height = links on the longest root-to-leaf path): file order (543 ascending runs because the file is sorted by stop_id as text) height 8,427, mean node depth 3,381.3; sorted order height 12,854, mean depth 6,427.0; 200 random shuffles (Python random.seed 2026) mean height 31.13, min 27, max 37, mean node depth 16.14; minimum possible height ceil(log2(12,856)) - 1 = 13; AVL tree inserting the sorted codes height 13 with 12,841 single rotations counted. Lesson family: BST shape depends on insertion order; AVL rebalancing; distinct from quickselect pivots (Sydney), sorting pages, binary search and skip lists.',
    requiredMentions: [
      '2,526,238',
      '674,188',
      '1,016,682',
      '550,809',
      '307,246',
      '12,855',
      '8,427',
      '12,841',
      '3,381.3',
      '31.13'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Greater Brisbane (3GBRI): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3GBRI' },
      { claim: 'Translink General Transit Feed Specification for South East Queensland (SEQ_GTFS.zip), Creative Commons Attribution 4.0, listed on the Queensland Government open data portal.', url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink' },
      { claim: 'Queensland Department of Education, term dates 2026.', url: 'https://education.qld.gov.au/about-us/calendar/term-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Brisbane rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Bureau of Meteorology station names and observations: the observations feed returned 403 to an automated request on 7 October 2026 and was not circumvented, so no weather facts are used.',
      'Queensland Curriculum and Assessment Authority syllabus details: qcaa.qld.edu.au returned a Cloudflare 403 and was not circumvented, so no QCE subject facts are quoted.',
      'Any count of stops for Brisbane City alone: the Translink file covers all of South East Queensland and has no council boundary field.',
      'Patronage, travel times or service frequency: not measured; the project uses stop codes only.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Translink, the Department of Transport and Main Roads, the ABS or the Queensland Department of Education.'
    ]
  }
};
