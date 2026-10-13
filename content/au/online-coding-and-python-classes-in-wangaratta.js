'use strict';
// Wangaratta (cg- regional city page, Australia cluster Phase 7, row 188). Shaped page: online coding and Python for
// teenagers and adults. Spine: can Python's match statement sort every Wangaratta bus stop name into its kind, and
// what breaks a simpler if/elif version? Data: Victorian GTFS schedule (Department of Transport and Planning, CC BY
// 4.0, file last modified 4 October 2026), regional bus folder 6, Wangaratta town routes 401 West End (6-a20), 402
// Yarrunga via Murdoch Road (6-a21), 403 Yarrawonga Road (6-a22), 404 Yarrunga via Mason Street (6-W04). Our code
// (scratchpad au/r7/wgt_stops.py, wgt_match.py): 161 trips, 112 stops, 2,544 stop times; stops per route 45, 41, 37,
// 38. match/case on the name split at "/": 66 intersections, 44 landmark on a street, 2 house numbers; 107 distinct
// names, 5 names used by two stops each. One name carries a trailing space ('Wangaratta Coach Stop/Rowan St '),
// which a naive split-and-compare classifier files as other. Street names sharing a first word with two suffixes:
// Cribbes Rd and St, Murdoch Rd and St, Edwards St and Rd. Most frequent streets in stop names: Phillipson St 9; Appin
// St, Williams Rd, Murdoch Rd, Burke St, Swan St 7 each. Health facility stop names deliberately not printed. Lesson
// family: Python structural pattern matching (match/case) on GTFS stop names vs if/elif; screened 0 location-page
// hits and 0 claims 10 October 2026; claimed by AU-R7.
// Place facts read raw 10 October 2026: ABS Census 2021 QuickStats, Wangaratta SUA (2019): 19,882 people; median age
// 44; 5,206 families; 9,175 private dwellings; 2.2 per household; separate house 6,979 (85.7; Vic 73.4; Australia
// 72.3); semi-detached 1,123 (13.8; Vic 13.9); flat or apartment 5 (0.1; Vic 12.1); Professionals 1,698 (19.0; Vic
// 25.0; Australia 24.0); Community and Personal Service Workers 1,307 (14.6; Vic 11.0; Australia 11.5); car as driver
// 5,899 (66.0; Vic 49.9; Australia 52.7). SUA area 57.5836 square kilometres. SAL polygons at least 80 percent
// inside: Waldara, Wangaratta (0.917). Excluded: income, rent, ancestry, religion, health, Indigenous status.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'WANGARATTA', label: 'Wangaratta', blurb: 'Online Python for Wangaratta, and a match statement that sorts all 112 town bus stops by the shape of their names.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-wangaratta',
  code: 'wgta',
  accent: '#123066',
  accentRationale: 'Wangaratta: a deep Ovens River blue (HSV saturation 0.82, value 0.40, hue 219), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, with contrast above 4.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Wangaratta',
    eyebrow: 'Wangaratta, Victoria, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }],
  nav: [
    { label: 'Victoria', href: '/coding-and-ai-classes-in-victoria' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Wangaratta, Victoria',
  title: 'Online Coding and Python Classes in Wangaratta | Live Classes',
  description: 'Live online coding and Python classes for Wangaratta teens and adults: modern Python features learned on real north-east Victorian data. First lesson free.',
  ogDescription: 'Wangaratta Python classes, with a project that classifies every town bus stop name using match and case, and finds the one name that breaks a simpler program.',
  twitterDescription: 'Online coding and Python classes for Wangaratta teens and adults, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Wangaratta Learners',
    description: 'Python, text processing and problem solving taught live online to teenagers and adults in Wangaratta and north-east Victoria.'
  },

  h1: 'Online coding and Python classes in Wangaratta',
  capsuleQ: 'What are the best online coding and Python classes in Wangaratta?',
  capsule: 'Live online Python classes in which Wangaratta teenagers and adults write modern, readable code for real local data, and learn why messy input breaks programs. The 2021 Census counted 19,882 people in the Wangaratta urban area, with a median age of 44. A teacher leads each lesson, one to one or in a small group, and the first is free.',
  lead: 'Every Wangaratta town bus stop has a name, and the names follow a few patterns: two streets at a corner, a place on a street, or a house number. We took the 112 stops on routes 401 to 404 from the state\'s timetable data and asked Python to sort them by shape using its match statement, added in Python 3.10. The match version reads almost like a description of the patterns, and it found 66 corners, 44 places on a street and 2 house numbers. Then we wrote the same thing the older way, with if and elif and no cleaning step. One stop name ends with an invisible space, and that version quietly filed it as unknown. Learning to write code that copes with data like that is what this page is about.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Wangaratta.',

  picks: {
    eyebrow: 'Course picks for Wangaratta',
    h2: 'Python courses for north-east Victoria',
    intro: 'Each one reaches projects like the stop name classifier. The free trial suggests the right fit, and needs no card.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the beginning, including strings, lists and the match statement, used on real files.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Breaking problems into cases, choosing data structures and testing every branch.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Complete Python for adults, from first lines to pattern matching, modules and tests.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Python automation for work: reading exports, cleaning text and producing reliable reports.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wangaratta at the Census',
      h2: 'A city of houses on the Ovens and King',
      intro: 'The Wangaratta Significant Urban Area at the 2021 Census, beside Victoria and Australia.',
      body: [
        { kind: 'table', caption: 'Wangaratta urban area: core 2021 counts', head: ['Measure', 'Wangaratta'], rows: [
          ['Residents', '19,882'],
          ['Median age', '44'],
          ['Families', '5,206'],
          ['Private dwellings', '9,175'],
          ['Average people per household', '2.2'],
          ['Area of the urban area', 'about 57.6 square kilometres']
        ] },
        { kind: 'table', mt: true, caption: 'How Wangaratta compares', head: ['Measure', 'Wangaratta', 'Vic', 'Australia'], rows: [
          ['Separate houses among occupied homes', '6,979 (85.7%)', '73.4%', '72.3%'],
          ['Flats or apartments among occupied homes', '5 (0.1%)', '12.1%', '14.2%'],
          ['Community and personal service workers', '1,307 (14.6%)', '11.0%', '11.5%'],
          ['Professionals among employed residents', '1,698 (19.0%)', '25.0%', '24.0%'],
          ['Drove a car to work', '5,899 (66.0%)', '49.9%', '52.7%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Five flats', p: 'The Census found just five occupied flats or apartments in the whole urban area, against 12.1% of Victorian homes.' },
          { h3: 'Care and service jobs', p: 'Community and personal service workers make up 14.6% of employed residents, above the state share of 11.0%.' },
          { h3: 'Localities', p: 'The bureau localities of Wangaratta and Waldara lie almost entirely inside the urban area.' }
        ] },
        { kind: 'p', text: 'Census figures include small random adjustments for confidentiality, so parts may not total exactly. We show each number as published by the bureau.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can one match statement sort every Wangaratta bus stop?',
      intro: 'A stop name is split at the slash, and the match statement tests the pieces against three patterns in turn.',
      body: [
        { kind: 'table', caption: 'Wangaratta town bus stops by name pattern (our classification of the timetable data)', head: ['Pattern', 'Example', 'Stops'], rows: [
          ['Street / street (an intersection)', 'Appin St/Langlands St', '66'],
          ['Place / street (a landmark on a street)', 'Wangaratta Library/Docker St', '44'],
          ['A single house number and street', 'a number then a street name', '2'],
          ['Anything else', 'none found', '0']
        ] },
        { kind: 'table', mt: true, caption: 'The town routes in the timetable data (our count)', head: ['Route', 'Name', 'Stops served'], rows: [
          ['401', 'Wangaratta - West End', '45'],
          ['402', 'Wangaratta - Yarrunga via Murdoch Road', '41'],
          ['403', 'Wangaratta - Yarrawonga Road', '37'],
          ['404', 'Wangaratta - Yarrunga via Mason Street', '38'],
          ['All four', '161 trips, 2,544 timed stops', '112 distinct stops']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Patterns as shapes', p: 'Each case describes a shape: one piece starting with a number, or two pieces that both end in a street word, or two pieces where only the second does.' },
          { h3: 'Guards', p: 'An if clause on a case adds a test, such as checking that the last word is St, Rd, Ave or another street suffix.' },
          { h3: 'A catch-all', p: 'The final case matches anything left, so no stop can slip through without a label, and learners check it stays empty.' }
        ] },
        { kind: 'callout', h3: 'The space nobody can see', p: 'One stop name in the data, the Wangaratta coach stop on Rowan St, ends with a trailing space. The match version strips each piece first and files it correctly as a landmark on a street. The older if and elif version compared the raw text, so its last word was an empty string and the stop was labelled as unknown. One character, invisible on screen, changed the answer.' },
        { kind: 'p', text: 'Stop names and routes come from the Victorian Department of Transport and Planning timetable data, licensed CC BY 4.0. Of the 112 stops, 107 have different names; five names are each shared by two stops. The patterns, counts and both programs are our own work.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Reading real text',
      h2: 'What the classifier teaches about Python',
      intro: 'Pattern matching is a modern feature, but the real lesson is about the data it is used on.',
      body: [
        { kind: 'p', text: 'Learners start with the if and elif version, because it shows each decision plainly. Then they rewrite it as a match statement and compare the two side by side: the match version is shorter, and its cases read like the categories a person would use. Next comes the data check. Counting the most common street names shows Phillipson St in nine stop names, and listing names that share a first word turns up pairs such as Cribbes Rd and Cribbes St, Murdoch Rd and Murdoch St, and Edwards St and Edwards Rd. Each pair is worth checking on a map before anyone assumes it is a typing mistake.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write a match statement with three cases and a catch-all, then feed it awkward names to break it.' },
          { h3: 'University students', p: 'Compare pattern matching with regular expressions and a small parser, and test each on the full stop list.' },
          { h3: 'Adults', p: 'Clean and classify text exported from a work system, starting with stray spaces and inconsistent abbreviations.' }
        ] },
        { kind: 'p', text: 'The Department of Transport and Planning, the Victorian Government and the Rural City of Wangaratta are not connected to Modern Age Coders. The timetable is theirs; the classifications on this page are ours.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Wangaratta planner',
      h2: 'Victorian term dates and lesson times for 2027',
      intro: 'Useful dates for choosing a regular weekly lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Autumn and winter', p: 'Victorian government schools hold Term 2 of 2027 from Monday 12 April to Friday 25 June and Term 3 from Monday 12 July to Friday 17 September.' },
          { h3: 'Spring', p: 'Term 4 runs from Monday 4 October to Friday 17 December 2027.' },
          { h3: 'Clock changes', p: 'Daylight saving starts on 4 October 2026 and ends on 4 April 2027; India is five and a half hours behind Wangaratta in summer and four and a half in winter.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first strings to text that cleans itself',
    intro: 'These ages are only a guide; the free lesson finds the real starting level.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Strings and choices', p: 'Splitting text, if statements and the first match statement in Python.', courses: ['python-complete-masterclass-teens', 'scratch-programming-complete-course'] },
      { band: 'Ages 15 to 18', h3: 'Cases and data', p: 'Pattern matching, guards and catch-alls, tested on full real-world lists.', courses: ['problem-solving-dsa-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'University', h3: 'Parsing text', p: 'Regular expressions, small parsers and how to prove a classifier covers every case.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Cleaning exports', p: 'Python that tidies and labels the text that work systems export, before it reaches a report.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI can write the classifier, why should Wangaratta learners write it themselves?',
    intro: 'Because the code that looks finished can still be wrong on one row, and only someone who reads it will find out.',
    p1: 'An AI assistant will produce a tidy if and elif classifier for stop names in a few seconds. Unless it is asked to clean the input, the result may behave exactly like our older version: right on 111 stops and silently wrong on the one with a trailing space. Nothing crashes, and a summary table looks plausible.',
    p2: 'Our Wangaratta learners write both versions, find the odd stop themselves and add the cleaning step and the catch-all check. Afterwards they read generated code by asking what happens to data that does not fit, which is the question that catches errors like this one.',
    closer: 'Producing code costs almost nothing in 2026; trusting it still depends on someone who has checked it against real data.',
    blogAnchor: 'is learning to code still worth it now'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Wangaratta lessons run',
    intro: 'Each lesson is a live video class, so learners in Wangaratta and the surrounding valleys join from home.',
    cells: [
      { h3: 'Equipment', p: 'A computer, a microphone and a connection steady enough for video.' },
      { h3: 'Victorian year levels', p: 'Teachers plan around Victorian year levels and term dates, teaching in English.' },
      { h3: 'Trial lesson', p: 'The first lesson is free, fully taught, and ends with a recommended course and time.' },
      { h3: 'Group size', p: 'Fifteen to twenty learners at the same level form each group, from many Australian towns.' },
      { h3: 'Schedule', p: 'Groups meet on two fixed days a week, about eight lessons each month.' },
      { h3: 'Teachers', p: 'Our teachers work from India and set each lesson in Wangaratta time.' }
    ],
    spec: { title: 'Adults learning after work', p: 'Evening one-to-one lessons suit adults who want to learn Python around a working day.' }
  },

  fees: {
    h2: 'Wangaratta class fees',
    intro: 'Fees are short and identical across Australia.',
    first: 'The first lesson is free and closes with a suggested level, course and weekly time.',
    group: 'A month of group lessons, about eight, with fifteen to twenty learners of the same level.',
    private: 'About eight one-to-one lessons per month with a single teacher.',
    closer: 'We charge in US dollars outside India, and Wangaratta pays the same as everywhere else in Australia. Billing starts only after the trial has settled the course and time, and the pricing page covers holidays, missed lessons and changes between group and private.'
  },

  reviewsH2: 'Reviews on Google from families',

  book: {
    h2: 'Book a free Python lesson in Wangaratta',
    intro: 'Let us know the learner\'s age and experience. A beginner might write a first program that splits text; a more experienced learner might build the stop classifier and hunt for the odd name.',
    success: 'Thank you. We will be in touch soon about a Wangaratta lesson.'
  },

  faq: {
    h2: 'Wangaratta Python class questions',
    intro: 'Answers for Wangaratta families and adult learners.',
    items: [
      { q: 'What is structural pattern matching in Python?', a: 'Structural pattern matching is the match and case statement added in Python 3.10. It compares a value against shapes, such as a list of two items, and runs the first case that fits.' },
      { q: 'What did the Wangaratta project find?', a: 'Of 112 town bus stops, 66 are named as intersections, 44 as a place on a street and 2 by house number, by our classification of the timetable data.' },
      { q: 'How many people live in Wangaratta?', a: 'The 2021 Census counted 19,882 people in the Wangaratta urban area, with a median age of 44.' },
      { q: 'Why did one stop break the simpler program?', a: 'Its name ends with a trailing space, so the last word read as empty. The match version strips spaces first and classifies it correctly.' },
      { q: 'Do you support VCE students?', a: 'Yes, with programming and problem solving for VCE computing subjects, planned around Victorian terms. Assessed work always stays the student\'s own.' },
      { q: 'When do Wangaratta learners have lessons?', a: 'Weekday after-school times, evenings for adults and Saturday mornings are popular, always set in Wangaratta time.' },
      { q: 'Can younger children learn to code?', a: 'Yes. Children from six start with Scratch and block coding; the stop classifier suits teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Wangaratta?', a: 'No. We hold no premises in Australia and claim none. Every class is live online; learners need a computer and a reliable connection, and our listed phone number is in India.', boiler: true },
      { q: 'What do Wangaratta classes cost?', a: 'Your first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one-to-one. Nothing is charged until the plan is agreed.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by level and goals rather than age or town. Where no group time works, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for north-east Victoria',
    html: 'Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victorian state guide</a> lists every page for the state. Up the Hume there are <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-albury-wodonga">vibe coding and AI agents classes in Albury-Wodonga</a>, and to the west <a class="cg-inline-link" href="/online-coding-and-python-classes-in-shepparton">online coding in Shepparton</a>. Senior students can read <a class="cg-inline-link" href="/vce-applied-computing-data-analytics-help">VCE Data Analytics help</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wangaratta and Victoria',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/vibe-coding-and-ai-agents-classes-in-albury-wodonga', label: 'Albury-Wodonga' },
    { href: '/online-coding-and-python-classes-in-shepparton', label: 'Shepparton' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-wgta .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.7vw, 2.2rem); }
.cg-root.cg-wgta .cg-hero h1 { font-weight: 710; letter-spacing: -0.015em; line-height: 1.11; }
.cg-root.cg-wgta .cg-capsule { border-left: 3px solid var(--cg-accent); border-top: 1px solid rgba(18, 48, 102, 0.22); padding: 0.75rem 1rem; }
.cg-root.cg-wgta .cg-eyebrow { letter-spacing: 0.115em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-wgta .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.008em; }
.cg-root.cg-wgta .cg-grid-3 { gap: clamp(0.8rem, 2.2vw, 1.6rem); }
.cg-root.cg-wgta .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.007em; }
.cg-root.cg-wgta .cg-table td + td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wgta .cg-ladder-col { border-top: 3px solid rgba(18, 48, 102, 0.24); padding-top: 0.9rem; }
.cg-root.cg-wgta .cg-callout { border-left: 3px solid var(--cg-accent); border-bottom: 1px solid rgba(18, 48, 102, 0.2); }
`,

  dossier: {
    curriculumAuthority: 'Wangaratta, ABS Census 2021 QuickStats, Significant Urban Area 2019 (read 10 October 2026): 19,882 people; median age 44; 5,206 families; 9,175 private dwellings; average 2.2 people per household; separate house 6,979 (85.7 percent; Vic 73.4; Australia 72.3); flat or apartment 5 (0.1 percent; Vic 12.1; Australia 14.2); Community and Personal Service Workers 1,307 (14.6 percent; Vic 11.0; Australia 11.5); Professionals 1,698 (19.0 percent; Vic 25.0; Australia 24.0); car as driver 5,899 (66.0 percent; Vic 49.9; Australia 52.7). ABS ASGS 2021 SUA area 57.5836 square kilometres. ABS SAL 2021 polygons at least 80 percent inside (our overlay): Waldara, Wangaratta (0.917). Victorian Government school term dates (read 10 October 2026): 2027 Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Monday 4 October to Friday 17 December. IANA tzdb australasia: Australia/Melbourne rule AV, daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'Python structural pattern matching on GTFS stop names. Victorian GTFS schedule (Department of Transport and Planning, CC BY 4.0, gtfs.zip last modified 4 October 2026), folder 6, routes 6-a20 (401 Wangaratta - West End), 6-a21 (402 Wangaratta - Yarrunga via Murdoch Road), 6-a22 (403 Wangaratta - Yarrawonga Road), 6-W04 (404 Wangaratta - Yarrunga via Mason Street). Our code (scratchpad au/r7/wgt_stops.py): 161 trips, 112 stops, 2,544 stop times; stops per route 45, 41, 37, 38. wgt_match.py: name split on "/", pieces stripped; match/case with guards on street suffixes (St, Rd, Ave, Dr, Cres, Lane, Bvd, Gr, Ct, Tce, Way): intersection 66, landmark on a street 44, house number 2, other 0. Distinct names 107; 5 names used by two stops. Naive if/elif without strip differs on exactly one stop, Wangaratta Coach Stop/Rowan St with a trailing space (naive: other). Street frequency in names: Phillipson St 9; Appin St, Williams Rd, Murdoch Rd, Burke St, Swan St 7. Same first word with two suffixes: Cribbes Rd/St, Murdoch Rd/St, Edwards St/Rd.',
    requiredMentions: [
      '19,882',
      '5,206',
      '161 trips',
      'Cribbes Rd',
      '5,899',
      'Phillipson St',
      'structural pattern matching',
      'trailing space',
      '2,544'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Wangaratta Significant Urban Area (2019): people, median age, families, dwellings, dwelling structure, occupation, travel to work.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2019' },
      { claim: 'Victorian GTFS schedule, Department of Transport and Planning (Wangaratta town bus routes 401 to 404).', url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule' },
      { claim: 'Victorian Government, school term dates and holidays (2027).', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'ABS ASGS 2021 Significant Urban Area and Suburbs and Localities boundaries.', url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SUA/MapServer/0' },
      { claim: 'IANA time zone database, australasia file: Australia/Melbourne and rule AV.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That Cribbes Rd and St, Murdoch Rd and St, or Edwards St and Rd are data errors: they may be separate real streets, and the page says to check.',
      'Stop names of health facilities: deliberately not printed.',
      'Patronage or frequency claims about the routes: the page counts trips, stops and timed stops only.',
      'Income, rent, ancestry, religion, health and Indigenous status figures: excluded by the cluster rules.',
      'Any affiliation with the Department of Transport and Planning, the Victorian Government or the Rural City of Wangaratta.'
    ]
  }
};
