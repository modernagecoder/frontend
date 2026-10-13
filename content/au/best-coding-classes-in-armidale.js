'use strict';
// Armidale (cg- regional city page, Australia cluster Phase 7, row 183). Shaped page: coding for teenagers and adults.
// Spine: how does a search box find every street containing a word without reading every name? Data: NSW Spatial
// Services, NSW Geocoded Addressing Theme, AddressPoint layer (portal.spatial.nsw.gov.au, layer 1, (c) Spatial
// Services), queried 10 October 2026 over a box around Armidale; only street names and counts are used, no addresses
// printed. Our code (scratchpad au/r7/arm_sa.py): 14,056 points returned, 13,766 inside the ABS Armidale SUA polygon,
// 13,744 addressed to ARMIDALE; 512 distinct street names joined with newlines into a 7,406-character text; suffix
// array of 7,406 suffixes; two binary searches per query. Comparisons (suffix array) vs window positions (scan of all
// names): VIEW 5 names 20 vs 5,358; PARK 5, 24; HILL 8, 25 (includes PHILLIP STREET); CREEK 0, 26 vs 4,846; AVENUE
// 79, 25 vs 4,334; ROAD 118, 24 vs 5,358 (117 end in ROAD, plus TANGLEWOOD ROAD SOUTH); STREET 107, 23 vs 4,334;
// PLACE 39, 23; CLOSE 34, 26; COURT 12, 26; DRIVE 37, 25. Last-word counts: ROAD 117, STREET 107, AVENUE 79, PLACE
// 39, DRIVE 36, CLOSE 34, CRESCENT 33, LANE 32, COURT 12, PARADE 4. Lesson family: suffix array substring search
// vs linear scan; screened 0 location-page hits and 0 claims 10 October 2026; claimed by AU-R7.
// Place facts read raw 10 October 2026: ABS Census 2021 QuickStats, Armidale SUA (1002): 23,967 people; median age
// 36; 5,594 families; 10,409 private dwellings; 2.3 per household; aged 15 to 19 2,028 (8.5; NSW 5.7; Australia
// 5.7); aged 20 to 24 2,111 (8.8; NSW 6.1; Australia 6.2); bachelor degree or above 5,650 (28.7; NSW 27.8; Australia
// 26.3); Professionals 2,781 (26.8; NSW 25.8; Australia 24.0); separate house 7,185 (81.8; NSW 65.6); worked
// full-time 5,908 (53.6; NSW 55.2); worked at home 2,292 (22.0; NSW 31.0; Australia 21.0). SUA area 274.5996 square
// kilometres. Only the Armidale locality lies at least 80 percent inside. Excluded: income, rent, ancestry,
// religion, health, Indigenous status.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'ARMIDALE', label: 'Armidale', blurb: 'Coding for Armidale, and a suffix array that finds any word inside 512 street names in about two dozen comparisons.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-armidale',
  code: 'armd',
  accent: '#8C403A',
  accentRationale: 'Armidale: a deep autumn-leaf red brown (HSV saturation 0.59, value 0.55, hue 5), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, with contrast above 4.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Armidale',
    eyebrow: 'Armidale, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }],
  nav: [
    { label: 'New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Armidale, New South Wales',
  title: 'Best Coding Classes in Armidale | Live Online, Teens and Adults',
  description: 'Live online coding classes for Armidale teenagers and adults: Python, algorithms and search, built on real New England street data. Your first lesson is free.',
  ogDescription: 'Armidale coding classes, with a project that builds a suffix array over 512 local street names and compares it with checking every name in turn.',
  twitterDescription: 'Coding and algorithms classes for Armidale teens and adults, live online, first lesson free.',
  ogImageCourse: 'data-structures-algorithms-masterclass-college',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Armidale Learners',
    description: 'Python, data structures and algorithms taught live online to teenagers, university students and adults in Armidale and the New England tableland.'
  },

  h1: 'Coding classes in Armidale',
  capsuleQ: 'What makes the best coding classes in Armidale?',
  capsule: 'Good coding classes for Armidale teenagers and adults pair Python with the reasoning behind fast programs: why one search reads everything and another jumps straight to the answer. The 2021 Census counted 23,967 people in the Armidale urban area, with a median age of 36. Lessons are live online with a teacher, and the first is free.',
  lead: 'Type part of a street name into a map search and the suggestions appear before you finish typing. A program that checked every street name in turn would still be quick for one town, but it does far more work than it needs to. We took the street names attached to the state\'s address points inside the Armidale urban area, 512 distinct names, and built a suffix array: every ending of the joined text, sorted. Finding every name that contains a word then takes two binary searches, about two dozen comparisons, instead of thousands of positions checked one by one. Suffix arrays and their close relatives are used in genome sequence tools and text compression, and the idea is small enough for a teenager to build in an afternoon.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Armidale.',

  picks: {
    eyebrow: 'Course picks for Armidale',
    h2: 'Coding courses that teach how search works',
    intro: 'Each course leads to projects like the street name search. The free trial lesson picks the right one, with no card needed.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first lines to sorting, slicing strings and searching lists of real names.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Binary search, sorting and the habit of counting how much work an algorithm does.' },
      { course: 'competitive-programming-for-teens-course', band: 'Ages 14 to 18', note: 'String algorithms, suffix structures and the edge cases that contest problems test.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Arrays, trees, hashing and string indexes, with proofs of what each one costs.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Armidale at the Census',
      h2: 'A young university city on the tableland',
      intro: 'The Armidale Significant Urban Area in the 2021 Census, compared with New South Wales and Australia.',
      body: [
        { kind: 'table', caption: 'Armidale urban area: main 2021 counts', head: ['Measure', 'Armidale'], rows: [
          ['Residents', '23,967'],
          ['Median age', '36'],
          ['Families', '5,594'],
          ['Private dwellings', '10,409'],
          ['Average people per household', '2.3'],
          ['Area of the urban area', 'about 274.6 square kilometres']
        ] },
        { kind: 'table', mt: true, caption: 'Armidale against New South Wales and Australia', head: ['Measure', 'Armidale', 'NSW', 'Australia'], rows: [
          ['Residents aged 15 to 19', '2,028 (8.5%)', '5.7%', '5.7%'],
          ['Residents aged 20 to 24', '2,111 (8.8%)', '6.1%', '6.2%'],
          ['Bachelor degree or higher', '5,650 (28.7%)', '27.8%', '26.3%'],
          ['Professionals among employed residents', '2,781 (26.8%)', '25.8%', '24.0%'],
          ['Separate houses among occupied homes', '7,185 (81.8%)', '65.6%', '72.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Many young adults', p: 'Residents aged 15 to 19 (8.5%) and 20 to 24 (8.8%) both sit well above the New South Wales shares of 5.7% and 6.1%.' },
          { h3: 'Degrees and professions', p: 'Bachelor degrees or higher, at 28.7%, and professionals, at 26.8%, both run slightly above the state.' },
          { h3: 'One locality', p: 'The Armidale locality is the only bureau locality lying almost wholly inside the urban area; the rest of each nearby locality reaches out into farmland.' }
        ] },
        { kind: 'p', text: 'The bureau adds small random changes to Census cells to protect privacy, so rows may not sum to totals. Numbers are shown exactly as the bureau published them.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How fast can you find a word in every Armidale street name?',
      intro: 'Two programs answer the same question: which street names contain this word? One checks every position; one uses a sorted index of suffixes.',
      body: [
        { kind: 'table', caption: 'Work done per query over 512 Armidale street names (our calculation)', head: ['Search word', 'Names found', 'Suffix array comparisons', 'Positions checked by a scan'], rows: [
          ['VIEW', '5', '20', '5,358'],
          ['HILL', '8', '25', '5,358'],
          ['CREEK', '0', '26', '4,846'],
          ['PLACE', '39', '23', '4,846'],
          ['AVENUE', '79', '25', '4,334'],
          ['STREET', '107', '23', '4,334'],
          ['ROAD', '118', '24', '5,358']
        ] },
        { kind: 'table', mt: true, caption: 'How Armidale street names end (last word, our count of distinct names)', head: ['Ending', 'Names', 'Ending', 'Names'], rows: [
          ['ROAD', '117', 'CLOSE', '34'],
          ['STREET', '107', 'CRESCENT', '33'],
          ['AVENUE', '79', 'LANE', '32'],
          ['PLACE', '39', 'COURT', '12'],
          ['DRIVE', '36', 'PARADE', '4']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Join and index', p: 'All 512 names are joined into one 7,406-character text. The suffix array lists the starting position of every suffix, sorted alphabetically.' },
          { h3: 'Two binary searches', p: 'Every suffix beginning with the search word sits in one block of the sorted list. Two binary searches find its first and last entries.' },
          { h3: 'Count the work', p: 'The scan checks every possible starting position in every name. The index needs about two dozen comparisons whatever the word.' }
        ] },
        { kind: 'callout', h3: 'Substring is not the same as word', p: 'Searching for ROAD finds 118 names, one more than the 117 that end in ROAD, because Tanglewood Road South contains the word without ending in it. Searching for HILL finds Phillip Street as well as Box Hill Drive. Neither search is wrong; they answer a different question from the one a person usually means, and learners then add word boundaries to fix it.' },
        { kind: 'p', text: 'Street names come from NSW Spatial Services address points, copyright Spatial Services, kept only where the point lies inside the bureau\'s Armidale urban area and the address names Armidale. We print counts and street names, never individual addresses. Building the index costs a one-off sort; the comparison counts are our own measurements.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Why the index wins',
      h2: 'Searching sorted data is a different kind of fast',
      intro: 'The scan grows with the size of the text. The binary search grows with its logarithm.',
      body: [
        { kind: 'p', text: 'With 7,406 suffixes, a binary search needs at most about thirteen steps to find one edge of the matching block, so two searches need about twenty-six. Double the text and each search needs only one more step, while the scan doubles. Learners build both programs in Python, time them on the Armidale names, then on a list a thousand times longer, and watch the gap open. Then they meet the cost: sorting all suffixes takes time and memory, so an index pays off only when the same text is searched many times.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write a linear search and a binary search over a sorted list of names, and count the steps each takes.' },
          { h3: 'University students', p: 'Build a suffix array, add the longest-common-prefix table and analyse construction cost against query cost.' },
          { h3: 'Adults', p: 'Decide when a spreadsheet search is fine and when a proper index is worth building for a growing database.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not linked with NSW Spatial Services, the Australian Bureau of Statistics or Armidale Regional Council. The street names are published by the state; the index, the counts and the comparisons are ours.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Armidale planner',
      h2: 'New South Wales terms and tableland lesson times',
      intro: 'Dates to plan a regular class from Armidale through 2027.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Middle terms', p: 'New South Wales public schools run Term 2 of 2027 from Tuesday 27 April to Friday 2 July, and Term 3 from Monday 19 July to Friday 24 September.' },
          { h3: 'Final term', p: 'Term 4 runs from Monday 11 October to Monday 20 December 2027. Term 1 dates differ between the state\'s Eastern and Western divisions.' },
          { h3: 'Daylight saving', p: 'Clocks go forward on 4 October 2026 and back on 4 April 2027; India is four and a half hours behind Armidale in winter, five and a half in summer.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first loop to string indexes',
    intro: 'The bands are a guide; the free lesson sets the real starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Lists and loops', p: 'Python that reads a list of names and finds the ones that match, one at a time.', courses: ['python-complete-masterclass-teens', 'scratch-programming-complete-course'] },
      { band: 'Ages 15 to 18', h3: 'Sorting and searching', p: 'Binary search, sorted data and counting steps, building toward simple string indexes.', courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course'] },
      { band: 'University', h3: 'String algorithms', p: 'Suffix arrays, prefix tables and proofs of how each search scales.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Data that grows', p: 'Searching and indexing real records in Python and SQL, with timings to back each choice.', courses: ['mysql-database-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI assistants can write a search in seconds. Why should Armidale learners study how it works?',
    intro: 'Because the assistant will happily write the slow version, and only someone who understands the difference will notice.',
    p1: 'Ask an AI assistant for code that finds street names containing a word and you may well get a loop over every name. That is correct and fine for 512 names. It is the wrong choice for millions of records searched thousands of times a second, and the code gives no hint of that. Knowing when an index is needed, and what it costs to build, is a judgement the assistant leaves to you.',
    p2: 'Our Armidale learners write the scan, then the suffix array, then measure both, so they can read any generated search and say how it will behave as data grows. That habit of asking how much work a program does is what turns someone who uses code into someone who designs it.',
    closer: 'Generating code is quick in 2026; knowing whether it will still be quick next year is the skill worth learning.',
    blogAnchor: 'whether learning to code is still worth it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Armidale lessons are run',
    intro: 'Classes are live video lessons, so learners anywhere on the tableland join from home.',
    cells: [
      { h3: 'What you need', p: 'A computer, a microphone and a connection that holds a video call.' },
      { h3: 'NSW year levels', p: 'Teachers plan around New South Wales year levels and terms; all teaching is in English.' },
      { h3: 'Free first class', p: 'The trial is a real lesson that ends with a recommended course and lesson time.' },
      { h3: 'Groups by stage', p: 'Fifteen to twenty learners at one level share a group, from Armidale and further afield.' },
      { h3: 'Two set days', p: 'Group learners meet twice a week on fixed days, about eight lessons a month.' },
      { h3: 'Teachers', p: 'The teaching team is based in India, and every time is confirmed in Armidale time.' }
    ],
    spec: { title: 'University students welcome', p: 'Learners at university can book one-to-one lessons around their own timetable and assessment weeks.' }
  },

  fees: {
    h2: 'Armidale class fees',
    intro: 'Fees are short and the same everywhere in Australia.',
    first: 'Your first class is free and ends with a suggested level, course and weekly time.',
    group: 'A month of group lessons, about eight, with fifteen to twenty learners at the same stage.',
    private: 'About eight one-to-one lessons a month with your own teacher.',
    closer: 'Outside India we charge in US dollars, and Armidale learners pay what every Australian learner pays. No payment is taken until the trial has agreed the course and time, and the pricing page sets out holidays, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Family reviews on Google',

  book: {
    h2: 'Book a free coding lesson in Armidale',
    intro: 'Tell us the learner\'s age and experience. A beginner might write a first search loop; a stronger student might build the suffix array and race it against the scan.',
    success: 'Thank you. We will be in touch soon about an Armidale lesson.'
  },

  faq: {
    h2: 'Armidale coding class questions',
    intro: 'Answers for Armidale families, university students and adult learners.',
    items: [
      { q: 'What is a suffix array?', a: 'A suffix array is a sorted list of every suffix of a text, stored as starting positions. It lets a program find every occurrence of a word with binary search instead of reading the whole text.' },
      { q: 'How much faster was the suffix array in the Armidale project?', a: 'Each query took about 20 to 26 comparisons, against 4,334 to 5,358 positions checked by a full scan of the 512 street names.' },
      { q: 'How many people live in Armidale?', a: 'The 2021 Census counted 23,967 people in the Armidale urban area, with a median age of 36.' },
      { q: 'Why did searching for HILL find Phillip Street?', a: 'A substring search matches letters anywhere, so HILL inside PHILLIP counts. Adding word boundaries makes the search match whole words only.' },
      { q: 'Do you teach university students in Armidale?', a: 'Yes. University students book group or one-to-one lessons in programming, algorithms and data, and their assessed work always remains their own.' },
      { q: 'Do you help with HSC computing subjects?', a: 'Yes, with the programming and problem solving those courses use, planned around NSW terms. We never complete assessed work for a student.' },
      { q: 'Can younger children join?', a: 'Yes. Children from six start with Scratch and block coding; the street name project suits teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Armidale?', a: 'No. We have no premises in Australia and claim none. All classes are live online; learners need a computer and a reliable connection, and our listed phone number is in India.', boiler: true },
      { q: 'What do Armidale coding classes cost?', a: 'The first lesson is free. Afterwards a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one-to-one. All of it is agreed before payment.', boiler: true },
      { q: 'How many learners share a group?', a: 'Fifteen to twenty, matched by level and goals rather than age or town. If no group time fits, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for New England and NSW',
    html: 'See every New South Wales page in our <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">NSW state guide</a>, or head down the range to <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-tamworth">coding and AI classes in Tamworth</a>. Senior students can use <a class="cg-inline-link" href="/hsc-enterprise-computing-help">HSC Enterprise Computing help</a>, and anyone weighing AI against real skills should read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy and paste it</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Armidale and New South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/best-coding-and-ai-classes-in-tamworth', label: 'Tamworth' },
    { href: '/hsc-enterprise-computing-help', label: 'HSC Enterprise Computing' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-armd .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.1vw, 2.6rem); }
.cg-root.cg-armd .cg-hero h1 { font-weight: 720; letter-spacing: -0.021em; line-height: 1.09; }
.cg-root.cg-armd .cg-capsule { border-left: 4px solid var(--cg-accent); background: rgba(140, 64, 58, 0.04); padding: 0.85rem 1.05rem; }
.cg-root.cg-armd .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-armd .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.013em; }
.cg-root.cg-armd .cg-grid-3 { gap: clamp(0.9rem, 2.4vw, 1.85rem); }
.cg-root.cg-armd .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.002em; }
.cg-root.cg-armd .cg-table td + td { font-variant-numeric: tabular-nums; }
.cg-root.cg-armd .cg-ladder-col { border-top: 2px solid rgba(140, 64, 58, 0.32); padding-top: 0.8rem; }
.cg-root.cg-armd .cg-callout { border-top: 3px solid var(--cg-accent); border-left: 1px solid rgba(140, 64, 58, 0.2); }
`,

  dossier: {
    curriculumAuthority: 'Armidale, ABS Census 2021 QuickStats, Significant Urban Area 1002 (read 10 October 2026): 23,967 people; median age 36; 5,594 families; 10,409 private dwellings; average 2.3 people per household; aged 15 to 19 2,028 (8.5 percent; NSW 5.7; Australia 5.7); aged 20 to 24 2,111 (8.8 percent; NSW 6.1; Australia 6.2); bachelor degree level and above 5,650 (28.7 percent; NSW 27.8; Australia 26.3); Professionals 2,781 (26.8 percent; NSW 25.8; Australia 24.0); separate house 7,185 (81.8 percent; NSW 65.6; Australia 72.3). ABS ASGS 2021 SUA area 274.5996 square kilometres. ABS SAL 2021 polygons at least 80 percent inside (our overlay): Armidale only. NSW Department of Education future and past term dates (read 10 October 2026): 2027 Term 2 Tuesday 27 April to Friday 2 July; Term 3 Monday 19 July to Friday 24 September; Term 4 Monday 11 October to Monday 20 December; Term 1 differs by division. IANA tzdb australasia: Australia/Sydney rule AN, daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'Suffix array substring search vs linear scan. NSW Spatial Services, NSW_Geocoded_Addressing_Theme MapServer layer 1 (AddressPoint), (c) Spatial Services, queried 10 October 2026 by envelope 151.5592, -30.5867, 151.7756, -30.4172: 14,056 points; 13,766 inside the ABS Armidale SUA polygon; 13,744 with address ending ARMIDALE. House-number tokens removed: 512 distinct street names. Our code (scratchpad au/r7/arm_sa.py): text = names joined by newline, 7,406 characters, suffix array of 7,406 suffixes; query = two binary searches (comparisons counted); scan = sum over names of (len(name) - len(query) + 1) positions. Results (names found, SA comparisons, scan positions): VIEW 5, 20, 5,358; PARK 5, 24, 5,358; HILL 8, 25, 5,358; CREEK 0, 26, 4,846; AVENUE 79, 25, 4,334; ROAD 118, 24, 5,358; STREET 107, 23, 4,334; COURT 12, 26, 4,846; PLACE 39, 23, 4,846; CLOSE 34, 26, 4,846; DRIVE 37, 25, 4,846; MOUNT 1; RIDGE 2; DALE 3; WOOD 7. Last-word counts ROAD 117, STREET 107, AVENUE 79, PLACE 39, DRIVE 36, CLOSE 34, CRESCENT 33, LANE 32, COURT 12, PARADE 4. Substring extras: ROAD in TANGLEWOOD ROAD SOUTH; DRIVE in ARUNDEL DRIVE NORTH; HILL in PHILLIP STREET.',
    requiredMentions: [
      '23,967',
      '5,594',
      '10,409',
      '2,111',
      '7,406',
      'suffix array',
      'Phillip Street',
      'Tanglewood Road South',
      '5,358'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Armidale Significant Urban Area (1002): people, median age, families, dwellings, age, qualifications, occupation, dwelling structure.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1002' },
      { claim: 'NSW Spatial Services, NSW Geocoded Addressing Theme, AddressPoint layer (street names, counts only).', url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/MapServer/1' },
      { claim: 'NSW Department of Education, future and past NSW term and vacation dates (2027).', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates' },
      { claim: 'ABS ASGS 2021 Significant Urban Area and Suburbs and Localities boundaries.', url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SUA/MapServer/0' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney and rule AN.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any individual address or house number: only street names and counts are printed.',
      'Timing claims in seconds: the page compares counted operations, which do not depend on the computer used.',
      'NSW Term 1 2027 dates: they differ between Eastern and Western division schools.',
      'Any figure for university enrolments or a named institution: the page uses Census age and qualification shares only.',
      'Income, rent, ancestry, religion, health and Indigenous status figures: excluded by the cluster rules.',
      'Any affiliation with NSW Spatial Services, the ABS or Armidale Regional Council.'
    ]
  }
};
