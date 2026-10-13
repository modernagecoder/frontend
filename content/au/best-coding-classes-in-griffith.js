'use strict';
// Griffith (cg- regional city page, Australia cluster Phase 7, row 187). Shaped page: coding for teenagers and
// adults. Spine: why does a computer put house 10 before house 2, and how do you sort numbers the way a postie
// would? Data: NSW Spatial Services, NSW Geocoded Addressing Theme, AddressPoint layer ((c) Spatial Services),
// queried 10 October 2026 over a box around Griffith; only house-number forms and counts are used, no full
// addresses printed. Our code (scratchpad au/r7/gri_ns.py): 11,303 points returned, 10,587 inside the ABS Griffith
// SUA polygon; 9,880 addressed to GRIFFITH with a house number (217 with an empty house number left out); 349
// streets. Forms: plain 7,391; unit (with a slash) 1,619; letter suffix 534; range 327; a handful of mixed forms.
// Distinct house numbers per street summed: 9,786. Lexicographic vs natural order differ on 261 of 349 streets and
// 8,894 of 9,786 positions; natural vs address-aware (street number first, unit second) differ on 104 streets and
// 4,250 positions. Banna Avenue has 318 distinct house numbers, the most. Worked example ['10','2','12A','12','1/12',
// '3']: lexicographic 1/12, 10, 12, 12A, 2, 3; natural 1/12, 2, 3, 10, 12, 12A; address-aware 2, 3, 10, 12, 1/12,
// 12A. Lesson family: natural sort order of house numbers; screened 0 location-page hits and 0 claims 10 October
// 2026; claimed by AU-R7.
// Place facts read raw 10 October 2026: ABS Census 2021 QuickStats, Griffith SUA (1016): 20,569 people; median age
// 37; 5,279 families; 8,272 private dwellings; 2.6 per household; worked full-time 6,731 (63.2; NSW 55.2; Australia
// 55.9); Labourers 2,155 (20.9; NSW 8.2; Australia 9.0); car as driver 7,552 (73.3; NSW 43.1; Australia 52.7); aged 0
// to 4 1,380 (6.7; NSW 5.8); separate house 5,771 (80.4; NSW 65.6); flat or apartment 894 (12.4; NSW 21.7). SUA
// area 56.3332 square kilometres. Only the Griffith locality lies at least 80 percent inside (Yoogali 18 percent).
// Excluded: income, rent, ancestry, religion, health, Indigenous status.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'GRIFFITH', label: 'Griffith', blurb: 'Coding for Griffith, and why a computer files house 10 before house 2 on 261 of the city\'s 349 streets.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-griffith',
  code: 'grif',
  accent: '#4A508E',
  accentRationale: 'Griffith: a muted Riverina dusk blue (HSV saturation 0.48, value 0.56, hue 235), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, with contrast above 4.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Griffith',
    eyebrow: 'Griffith, New South Wales, Australia',
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
  routeLabel: 'Griffith, New South Wales',
  title: 'Best Coding Classes in Griffith NSW | Live Online Lessons',
  description: 'Coding classes for Griffith teenagers and adults, live online: Python, sorting and the logic of real address data from the Riverina. The first lesson is free.',
  ogDescription: 'Griffith coding classes, with a project that sorts house numbers on 349 local streets three ways and finds where the computer\'s order goes wrong.',
  twitterDescription: 'Live online coding classes for Griffith teens and adults, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Griffith Learners',
    description: 'Python, sorting, data handling and problem solving taught live online to teenagers and adults in Griffith and the Riverina.'
  },

  h1: 'Coding classes in Griffith',
  capsuleQ: 'What do the best coding classes in Griffith teach?',
  capsule: 'The most useful coding classes for Griffith teenagers and adults teach Python through problems where the obvious answer is wrong, then show how to fix it. The 2021 Census counted 20,569 people in the Griffith urban area, with a median age of 37. Lessons are live online with a teacher, in a small group or one to one, and the first is free.',
  lead: 'Ask a computer to sort the house numbers 2, 10 and 12A and, if the numbers are stored as text, it answers 10, 12A, 2. It compares text one character at a time, and the character 1 comes before 2. People expect 2, 10, 12A. We took the house numbers on every Griffith street from the state\'s address points and sorted them three ways. The computer\'s default order and the human one disagree on 261 of the city\'s 349 streets. A second, smaller disagreement appears once units are involved: should unit 1 at number 12 sit before house 2, or after house 12? Writing a sort that matches how people actually walk down a street is a short Python exercise that teaches more about data than most textbook examples.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Griffith.',

  picks: {
    eyebrow: 'Course picks for Griffith',
    h2: 'Courses where data has to make sense to people',
    intro: 'Every course reaches projects like the house number sort. Begin with the free trial, which needs no card.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python basics through to sorting, string handling and custom sort keys on real data.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Cleaning messy real-world data in Python before any analysis begins.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python from the start to advanced topics, including regular expressions and sort keys.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'Adults', note: 'Databases and SQL, including why text columns sort numbers in surprising orders.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Griffith at the Census',
      h2: 'A working Riverina city with young families',
      intro: 'The Griffith Significant Urban Area at the 2021 Census, with New South Wales and Australia alongside.',
      body: [
        { kind: 'table', caption: 'Griffith urban area: core 2021 counts', head: ['Measure', 'Griffith'], rows: [
          ['Residents', '20,569'],
          ['Median age', '37'],
          ['Families', '5,279'],
          ['Private dwellings', '8,272'],
          ['Average people per household', '2.6'],
          ['Area of the urban area', 'about 56.3 square kilometres']
        ] },
        { kind: 'table', mt: true, caption: 'Griffith compared with New South Wales and Australia', head: ['Measure', 'Griffith', 'NSW', 'Australia'], rows: [
          ['Employed residents working full-time', '6,731 (63.2%)', '55.2%', '55.9%'],
          ['Labourers among employed residents', '2,155 (20.9%)', '8.2%', '9.0%'],
          ['Travelled to work driving a car', '7,552 (73.3%)', '43.1%', '52.7%'],
          ['Children aged 0 to 4', '1,380 (6.7%)', '5.8%', '5.8%'],
          ['Separate houses among occupied homes', '5,771 (80.4%)', '65.6%', '72.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Full-time work', p: 'Almost two in three employed residents work full-time, eight points above the state.' },
          { h3: 'Labouring jobs', p: 'Labourers are 20.9% of employed residents, about two and a half times the New South Wales share.' },
          { h3: 'One locality', p: 'Of the bureau localities, only Griffith itself lies almost entirely inside the urban area; neighbouring Yoogali is mostly outside.' }
        ] },
        { kind: 'p', text: 'Census cells are perturbed slightly for privacy, so components need not add to totals. We print every figure as the bureau did.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Why does the computer put house 10 before house 2?',
      intro: 'One list of house numbers, three sort orders. Learners write the second and third.',
      body: [
        { kind: 'table', caption: 'Six house numbers sorted three ways', head: ['Method', 'Result', 'How it compares'], rows: [
          ['Text order (default)', '1/12, 10, 12, 12A, 2, 3', 'Character by character'],
          ['Natural order', '1/12, 2, 3, 10, 12, 12A', 'Digit runs as numbers'],
          ['Address order', '2, 3, 10, 12, 1/12, 12A', 'Street number first, unit second']
        ] },
        { kind: 'table', mt: true, caption: 'Griffith house numbers from state address points (our count)', head: ['Measure', 'Count'], rows: [
          ['Address points inside the urban area', '10,587'],
          ['Addressed to Griffith with a house number', '9,880'],
          ['Streets', '349'],
          ['Plain numbers such as 14', '7,391'],
          ['Unit numbers such as 2/14', '1,619'],
          ['Numbers with a letter such as 14A', '534'],
          ['Ranges such as 14-16', '327'],
          ['Streets where text and natural order differ', '261'],
          ['Street positions that change between the two orders', '8,894 of 9,786'],
          ['Streets where natural and address order differ', '104']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Text order', p: 'Python\'s plain sorted compares strings character by character, so every number starting with 1 comes before every number starting with 2.' },
          { h3: 'Natural order', p: 'Split each value into runs of digits and letters, and compare digit runs as whole numbers. Now 2 comes before 10, and 12 before 12A.' },
          { h3: 'Address order', p: 'Read the number after the slash as the street number and the one before it as the unit, so unit 1 at 12 sits with house 12.' }
        ] },
        { kind: 'callout', h3: 'Three right answers to different questions', p: 'Natural order fixes the 10-before-2 problem, yet it still puts 1/12 first because it reads the unit number as the start. Address order disagrees with natural order on 104 streets. Banna Avenue, with 318 distinct house numbers, shows every kind of difference. Choosing the sort key means deciding what the data means, which is a human decision, not a coding trick.' },
        { kind: 'p', text: 'House numbers come from NSW Spatial Services address points, copyright Spatial Services, kept where the point falls inside the bureau\'s Griffith urban area and the address names Griffith. 217 points with no house number were left out, and a handful of unusual mixed forms are not shown in the table. We publish counts and street names only, never full addresses; the sorting and every count are our own.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Sort keys in practice',
      h2: 'One key function, three behaviours',
      intro: 'In Python the whole difference is the key passed to sorted, which makes this a perfect first lesson in thinking about data.',
      body: [
        { kind: 'p', text: 'The natural key uses a regular expression to split "12A" into the number 12 and the letter A, and returns a list Python can compare. The address key first splits on the slash, puts the street number before the unit, and then applies the natural key to each part. Learners test both on the Griffith lists, measure how many positions move, and then look for values that break their key, such as ranges with letters at both ends. The same issue appears in file names, invoice codes and version numbers, so the lesson travels well beyond addresses.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Sort a list of house numbers, spot the wrong order, and write a key function that fixes it.' },
          { h3: 'University students', p: 'Prove the key gives a consistent order, handle every unusual form and compare speeds on large lists.' },
          { h3: 'Adults', p: 'Fix the order of product codes, invoices or file names in a spreadsheet export with a few lines of Python.' }
        ] },
        { kind: 'p', text: 'NSW Spatial Services, the Australian Bureau of Statistics and Griffith City Council have no association with Modern Age Coders. The address points and boundaries are theirs; the sort keys and counts on this page are ours.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Griffith planner',
      h2: 'Fitting lessons around a Riverina week',
      intro: 'Griffith keeps eastern Australian time, with summer daylight saving.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Summer and winter', p: 'Clocks in Griffith move forward on Sunday 4 October 2026 and back on Sunday 4 April 2027.' },
          { h3: 'India time', p: 'Teachers in India are five and a half hours behind Griffith in summer and four and a half in winter, so a 4:30pm class is 11am or noon for them.' },
          { h3: 'School holidays', p: 'New South Wales Term 4 of 2027 runs from Monday 11 October to Monday 20 December, and lessons can pause around holidays.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first lists to clean data',
    intro: 'The ages are a guide, and the free lesson finds the right starting step.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Lists and order', p: 'Python lists, sorting and the surprise of sorting numbers stored as text.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Messy data', p: 'Regular expressions, key functions and cleaning real data files before using them.', courses: ['data-science-course-for-teens-python-data', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Ordering in depth', p: 'Total orders, stable sorts and how sorting algorithms rely on a consistent key.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Data at work', p: 'Databases, spreadsheet exports and reports that list things in the order people expect.', courses: ['mysql-database-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant can write a sort in one line. Why should Griffith learners care how?',
    intro: 'Because the one line it writes may sort text, not numbers, and the result looks almost right.',
    p1: 'Generated code may simply call sorted on whatever it is given. For house numbers stored as text, the output then puts 10 before 2 on most streets, and nothing in the program reports an error. Asked for a natural sort, an assistant may still put units in the wrong place, because whether 1/12 belongs before 2 or after 12 depends on what the data means, not on the code.',
    p2: 'Our Griffith learners see all three orders on their own city\'s streets, write the keys themselves and learn to test a sort with awkward values. That turns generated code from something they accept into something they can check.',
    closer: 'Code takes seconds to produce in 2026; noticing that it sorts the wrong way still needs someone who knows what the data means.',
    blogAnchor: 'why coding remains worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Griffith lessons work',
    intro: 'All lessons are live video classes, so learners in Griffith and nearby towns join from home.',
    cells: [
      { h3: 'At home', p: 'A computer with a microphone and a reliable internet connection is all that is needed.' },
      { h3: 'NSW school years', p: 'Teachers plan with New South Wales year levels and terms in mind, teaching in English.' },
      { h3: 'Trial first', p: 'The free trial is a real class that finishes with a recommended course and weekly time.' },
      { h3: 'Matched groups', p: 'Fifteen to twenty learners at the same level share a group, from across Australia.' },
      { h3: 'Two lessons weekly', p: 'Groups meet twice a week on set days, roughly eight lessons a month.' },
      { h3: 'Our teachers', p: 'Teachers work from India, and every lesson time is written in Griffith time.' }
    ],
    spec: { title: 'Shift workers welcome', p: 'Adults with changing rosters can book one-to-one lessons and move them with notice.' }
  },

  fees: {
    h2: 'Griffith class fees',
    intro: 'Pricing is brief and the same throughout Australia.',
    first: 'The first lesson is free and ends with a recommended level, course and time.',
    group: 'A month of group lessons, roughly eight, with fifteen to twenty learners of similar level.',
    private: 'Roughly eight private lessons each month with one teacher.',
    closer: 'Fees outside India are in US dollars, and Griffith learners pay the same as learners anywhere in Australia. Payment begins only after the trial has fixed the course and time, and the pricing page explains holidays, absences and moving between group and private.'
  },

  reviewsH2: 'Google reviews from parents',

  book: {
    h2: 'Book a free coding lesson in Griffith',
    intro: 'Tell us the learner\'s age and interests. A beginner might write a first program that sorts a list; an older learner might write the address sort key and test it on Banna Avenue.',
    success: 'Thank you. We will contact you soon about a Griffith lesson.'
  },

  faq: {
    h2: 'Griffith coding class questions',
    intro: 'Answers to what Griffith families and adult learners ask most.',
    items: [
      { q: 'What is natural sort order?', a: 'Natural sort order compares runs of digits as whole numbers instead of character by character, so 2 comes before 10 and 12 comes before 12A.' },
      { q: 'How often does the computer\'s order differ in Griffith?', a: 'Plain text order and natural order disagree on 261 of 349 Griffith streets, by our count from state address points.' },
      { q: 'How many people live in Griffith?', a: 'The 2021 Census counted 20,569 people in the Griffith urban area, with a median age of 37.' },
      { q: 'Which Griffith street has the most house numbers?', a: 'Banna Avenue, with 318 distinct house numbers among the address points we used.' },
      { q: 'Do you help senior students in Griffith?', a: 'Yes, with programming and problem solving for senior computing subjects, planned around NSW terms. Assessed work always stays the student\'s own.' },
      { q: 'What times suit Griffith learners?', a: 'After-school weekday slots and Saturday mornings are popular, all agreed in Griffith time.' },
      { q: 'Can younger children start coding?', a: 'Yes. Children from age six begin with Scratch and block coding; the sorting project suits teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Griffith?', a: 'No. We run no premises in Australia and claim none. All classes are live online; learners need a computer and a dependable connection, and our listed phone number is in India.', boiler: true },
      { q: 'What do Griffith coding classes cost?', a: 'The first lesson is free. Then a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one-to-one. Everything is agreed before any payment.', boiler: true },
      { q: 'How many learners are in each group?', a: 'Fifteen to twenty, grouped by level and aims rather than age or town. If no group time suits, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More from the Riverina',
    html: 'All New South Wales pages are listed in our <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">NSW state guide</a>. Elsewhere in the Riverina, see <a class="cg-inline-link" href="/best-coding-classes-in-wagga-wagga">coding classes in Wagga Wagga</a>, and over the border <a class="cg-inline-link" href="/ai-and-programming-classes-in-mildura">AI and programming in Mildura</a>. For the case against copying code you do not understand, read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy and paste it</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Griffith and New South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/best-coding-classes-in-wagga-wagga', label: 'Wagga Wagga' },
    { href: '/ai-and-programming-classes-in-mildura', label: 'Mildura' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-grif .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.9vw, 2.35rem); }
.cg-root.cg-grif .cg-hero h1 { font-weight: 740; letter-spacing: -0.017em; line-height: 1.1; }
.cg-root.cg-grif .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid rgba(74, 80, 142, 0.25); padding: 0.85rem 0.95rem; }
.cg-root.cg-grif .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-grif .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.01em; }
.cg-root.cg-grif .cg-grid-3 { gap: clamp(0.95rem, 2vw, 1.65rem); }
.cg-root.cg-grif .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.005em; }
.cg-root.cg-grif .cg-table td + td { font-variant-numeric: tabular-nums; }
.cg-root.cg-grif .cg-ladder-col { border-left: 3px solid rgba(74, 80, 142, 0.28); padding-left: 0.85rem; }
.cg-root.cg-grif .cg-callout { border-left: 3px solid var(--cg-accent); background: rgba(74, 80, 142, 0.04); }
`,

  dossier: {
    curriculumAuthority: 'Griffith, ABS Census 2021 QuickStats, Significant Urban Area 1016 (read 10 October 2026): 20,569 people; median age 37; 5,279 families; 8,272 private dwellings; average 2.6 people per household; worked full-time 6,731 (63.2 percent; NSW 55.2; Australia 55.9); Labourers 2,155 (20.9 percent; NSW 8.2; Australia 9.0); car as driver 7,552 (73.3 percent; NSW 43.1; Australia 52.7); aged 0 to 4 1,380 (6.7 percent; NSW 5.8; Australia 5.8); separate house 5,771 (80.4 percent; NSW 65.6; Australia 72.3). ABS ASGS 2021 SUA area 56.3332 square kilometres. ABS SAL 2021 polygons at least 80 percent inside (our overlay): Griffith only; Yoogali about 18 percent. NSW Department of Education term dates (read 10 October 2026): 2027 Term 4 Monday 11 October to Monday 20 December. IANA tzdb australasia: Australia/Sydney rule AN, daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'Natural sort order of house numbers. NSW Spatial Services, NSW_Geocoded_Addressing_Theme MapServer layer 1 (AddressPoint), (c) Spatial Services, queried 10 October 2026 by envelope 145.9919, -34.3176, 146.1017, -34.2332, fields address and housenumber: 11,303 points; 10,587 inside the ABS Griffith SUA polygon; 9,880 with address ending GRIFFITH and a non-empty house number (217 empty excluded); 349 streets. Forms: plain 7,391; unit (slash) 1,619; letter suffix 534; range 327; a few mixed forms such as 16A-18. Our code (scratchpad au/r7/gri_ns.py): per street, distinct house numbers (9,786 in total); lexicographic sorted() vs natural key (digit runs as integers) differ on 261 of 349 streets and 8,894 of 9,786 positions; natural vs address-aware key (number after the slash first, unit second) differ on 104 streets and 4,250 positions. Largest street: BANNA AVENUE, 318 distinct house numbers. Example [10, 2, 12A, 12, 1/12, 3]: lexicographic 1/12, 10, 12, 12A, 2, 3; natural 1/12, 2, 3, 10, 12, 12A; address-aware 2, 3, 10, 12, 1/12, 12A.',
    requiredMentions: [
      '20,569',
      '5,279',
      '8,272',
      '8,894',
      '7,552',
      'natural sort order',
      'Banna Avenue',
      '261 of 349',
      '9,880'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Griffith Significant Urban Area (1016): people, median age, families, dwellings, employment, occupation, travel to work, age, dwelling structure.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1016' },
      { claim: 'NSW Spatial Services, NSW Geocoded Addressing Theme, AddressPoint layer (house number forms and counts only).', url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/MapServer/1' },
      { claim: 'NSW Department of Education, future and past NSW term and vacation dates (2027).', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates' },
      { claim: 'ABS ASGS 2021 Significant Urban Area and Suburbs and Localities boundaries.', url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SUA/MapServer/0' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney and rule AN.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any full street address: only house-number forms, counts and the name Banna Avenue are printed.',
      'A total of the form counts presented as the number of addresses: the forms table lists the main forms only and the page says a few mixed forms are not shown.',
      'Claims about how any particular council or postal system orders addresses: not established from the sources.',
      'Income, rent, ancestry, religion, health and Indigenous status figures: excluded by the cluster rules.',
      'Any affiliation with NSW Spatial Services, the ABS or Griffith City Council.'
    ]
  }
};
