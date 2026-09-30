'use strict';
// West Bridgford (cg- district page, UK cluster Phase 9, row 479). Keyword slug per the owner's rotation (city suffix from
// the tracker); West Bridgford is in Rushcliffe borough, Nottinghamshire, not in the City of Nottingham, and the page says so.
// Spine: how does a program match the same street written two different ways? (record linkage in stages: exact match,
// cleaning and normalising, then fuzzy matching with difflib.SequenceMatcher and a threshold, checked against geography).
// Data (read 30 September 2026): Food Standards Agency Food Hygiene Rating Scheme open API, Rushcliffe (local authority id
// 83): 916 establishments, 192 with a geocode inside bbox -1.145,52.912,-1.090,52.940; only address lines and coordinates are
// used, no business is named. OpenStreetMap API 0.6 over the same box (12 tiles, ODbL): 454 distinct named streets.
// Our run (scratchpad wbf/fz3.py): for each address, stage 1 a whole address line equals an OSM street name: 52; stage 2
// after stripping house and unit numbers, lower-casing, removing punctuation and expanding abbreviations: 135 more; stage 3
// fuzzy (difflib.SequenceMatcher ratio, the Ratcliff/Obershelp idea) on the 5 left: threshold 0.9 accepts 3, all correct
// (each a one-letter spelling difference); 0.75 accepts 4, one wrong; 0.6 accepts 5, two wrong. "Correct" = the matched OSM
// street passes within 150 m of the establishment's geocode; by that check 47 of the 52 exact and 132 of the 135 cleaned
// matches are confirmed (FHRS geocodes are approximate). A first test on 201 NaPTAN bus stops found 196 exact street matches.
// Lesson family: record linkage / fuzzy string matching (SequenceMatcher, thresholds), cleaning before cleverness. Screened:
// "SequenceMatcher", "Ratcliff" 0 hits; Middlesbrough owns gazetteer disambiguation and edit distance appears elsewhere.
// Place facts: ONS 2021 BUA West Bridgford 36,490; Rushcliffe (E07000176) TS001 119,077. Nomis 2022 wards in Rushcliffe:
// Lutterell 5,981; Trent Bridge 5,883; Edwalton 5,774; Compton Acres 5,548; Musters 4,681 (not summed). postcodes.io: West
// Bridgford (town, NG2), Gamston and Edwalton (villages), all Rushcliffe.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WEST BRIDGFORD', label: 'West Bridgford', blurb: 'Online coding and Python classes for West Bridgford, with a data-cleaning project that matches 192 real addresses to street names and finds how little fuzzy matching is needed.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-west-bridgford-nottingham',
  code: 'wbf',
  accent: '#1F5C4A',
  accentRationale: 'West Bridgford: a deep pine green (7.81:1 contrast), hand-picked for distance from the slates and siennas of neighbouring Phase 9 pages',
  pageType: 'city',
  place: {
    name: 'West Bridgford',
    eyebrow: 'West Bridgford, Rushcliffe, Nottinghamshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Nottinghamshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-nottingham', name: 'Nottingham' }],
  nav: [
    { label: 'Nottingham', href: '/best-coding-class-in-nottingham' },
    { label: 'Nottinghamshire', href: '/coding-classes-in-nottinghamshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'West Bridgford, Nottinghamshire',
  title: 'Online Coding and Python Classes in West Bridgford | 6 to 67',
  description: 'Python, coding, AI and vibe coding lessons by live video for West Bridgford, Gamston, Edwalton and Compton Acres learners from 6 to 67. The first one is free.',
  ogDescription: 'Online coding and Python classes for West Bridgford, with a project that matches 192 real addresses to street names and tests where fuzzy matching goes wrong.',
  twitterDescription: 'West Bridgford: online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for West Bridgford',
    description: 'Online coding, Python, data cleaning, AI, vibe coding and maths for children, teenagers and adults in West Bridgford and Rushcliffe, taught live with careful checking first.'
  },

  h1: 'Online coding and Python classes in West Bridgford',
  capsuleQ: 'Which are the best online coding and Python classes in West Bridgford?',
  capsule: 'West Bridgford is a town of 36,490 people by the ONS built-up area count for 2021. It belongs to Rushcliffe borough in Nottinghamshire, which had 119,077 residents, and not to the City of Nottingham. Lutterell, Trent Bridge, Compton Acres and Musters are among the borough\'s wards, and Gamston and Edwalton are recorded as villages. Python, coding, AI, vibe coding and maths are taught here by video, with a tutor in India, to anyone from six years old to 67; you choose private lessons or a group of five to ten at a shared level. Checking comes before trusting in everything we teach. A first lesson is free and ends with a course suggestion from us. For its project, West Bridgford gets a very practical Python job: matching 192 real addresses to the right street when the two sources write things differently. After the free lesson the monthly fee is USD 100 in a group, USD 150 one-to-one.',
  lead: 'Two datasets rarely agree on how to write the same thing. One says "14 Central Avenue", another just "Central Avenue"; one abbreviates, one misspells. Joining them, which is called record linkage, is among the most common jobs in real data work, and it is tempting to reach straight for "fuzzy matching", which scores how alike two strings are. This project does it properly, in stages, on open data: the addresses of food businesses in and around West Bridgford from the Food Standards Agency, matched to the street names on OpenStreetMap. Then it uses the map itself to check whether each match is right.',
  wa: 'Hello Modern Age Coders, I am writing from West Bridgford about a free Python or coding lesson.',

  picks: {
    eyebrow: 'West Bridgford course picks',
    h2: 'Python, data and AI courses for West Bridgford',
    intro: 'Start from the learner\'s age. Each of these begins with a free live lesson; we do not take payment details for it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: spotting when two things that look different are really the same.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'A Scratch game of the learner\'s own design, drafted with an AI and debugged by hand.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python through to text handling and data cleaning, with the West Bridgford address match.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for real data work: cleaning, joining, checking, then AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'West Bridgford and Rushcliffe',
      h2: 'West Bridgford, Gamston, Edwalton and the Rushcliffe wards',
      intro: 'Published counts for the town, the borough and five of its wards.',
      body: [
        { kind: 'table', caption: 'West Bridgford and Rushcliffe, 2021 census figures from the ONS', head: ['Area', 'Residents (2021)'], rows: [
          ['West Bridgford built-up area', '36,490'],
          ['Rushcliffe borough', '119,077'],
          ['Lutterell ward', '5,981'],
          ['Trent Bridge ward', '5,883'],
          ['Edwalton ward', '5,774'],
          ['Compton Acres ward', '5,548'],
          ['Musters ward', '4,681']
        ] },
        { kind: 'p', text: 'Each row is a separate published figure and none is a total of the others. Postcodes.io records West Bridgford as a town in NG2 and Gamston and Edwalton as villages, all in Rushcliffe. The address in this page\'s web link includes Nottingham because that is how people search, but the borough council here is Rushcliffe. Schools follow the English national curriculum, and lessons pause for whichever holiday dates you give us.' },
        { kind: 'callout', h3: 'Nottingham, Nottinghamshire and our method', p: 'For the city itself see <a class="cg-inline-link" href="/best-coding-class-in-nottingham">coding classes in Nottingham</a>; for the county, <a class="cg-inline-link" href="/coding-classes-in-nottinghamshire">Nottinghamshire</a>. How we put reasoning ahead of tools is described on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The West Bridgford project',
      h2: 'Matching 192 addresses to streets: exact, cleaned, then fuzzy',
      intro: 'Three stages, each one tried only on what the stage before could not solve.',
      body: [
        { kind: 'p', text: 'From the Food Standards Agency\'s open Food Hygiene Rating data for Rushcliffe, the learner keeps the 192 establishments whose coordinates fall in a rectangle over West Bridgford, and uses only their address lines. From OpenStreetMap comes the list of 454 named streets in the same rectangle. The job is to find, for every address, which street it is on. Stage one asks whether any line of the address is exactly a street name. Stage two strips house and unit numbers, lower-cases, removes punctuation and expands abbreviations, then tries again. Stage three hands what is left to Python\'s difflib.SequenceMatcher, which scores two strings from 0 to 1 by their longest shared runs of characters, and accepts a match above a chosen threshold.' },
        { kind: 'table', caption: 'Matching West Bridgford addresses to OpenStreetMap street names, our Python run on FSA and OpenStreetMap open data', head: ['Stage', 'Addresses matched', 'Note'], rows: [
          ['1. An address line equals a street name', '52', 'No cleverness needed'],
          ['2. After cleaning and normalising', '135', 'House numbers were the main obstacle'],
          ['3. Fuzzy, threshold 0.9', '3', 'All three correct'],
          ['3. Fuzzy, threshold 0.75', '4', 'One wrong match let in'],
          ['3. Fuzzy, threshold 0.6', '5', 'Two wrong matches let in']
        ] },
        { kind: 'p', text: 'Cleaning did most of the work: 187 of 192 addresses were matched before any fuzzy scoring. The three good fuzzy matches were all the same kind of thing, a one-letter difference in how a name was spelled between the two sources. Loosen the threshold and errors arrive at once: at 0.75 a phrase containing "Trent Bridge" is matched to an unrelated street with a similar-looking name, and at 0.6 the town\'s own name is matched to a road. To test matches independently, the program checks whether the chosen street actually passes within 150 m of the address\'s coordinates; that confirmed 47 of the 52 exact matches and 132 of the 135 cleaned ones, the misses being down to approximate coordinates. A similarity score says two strings look alike. It does not say they mean the same place.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Pair up name cards written in different ways and agree a rule for when two cards are "the same".' },
          { h3: 'Ages 11 to 15', p: 'Clean a list of West Bridgford addresses in Python: strip numbers, fix case, expand "Rd" and "Ave".' },
          { h3: 'Ages 15 and up', p: 'Build the three-stage matcher, sweep the threshold and verify matches against coordinates.' }
        ] },
        { kind: 'callout', h3: 'Open data, our matching', p: 'Addresses come from the Food Standards Agency Food Hygiene Rating Scheme, used under the Open Government Licence, and street names from OpenStreetMap and its contributors under the Open Database Licence. We use address lines and coordinates only; no business is named or rated here. The matching and counts are our own.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Data cleaning and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Looking alike is not the same as being the same.',
      body: [
        { kind: 'table', caption: 'From the West Bridgford address match to working with AI', head: ['In the matching project', 'When an AI joins or tidies your data'], rows: [
          ['187 of 192 matched by cleaning alone', 'Simple, exact steps should go first'],
          ['Fuzzy matching handled only 5', 'Reserve clever methods for the hard remainder'],
          ['Threshold 0.75 let a wrong match in', 'Every threshold trades misses for mistakes'],
          ['Coordinates gave an independent check', 'Verify matches with different evidence'],
          ['No business was named', 'Use only the fields the task needs']
        ] },
        { kind: 'p', text: 'Language models are very good at deciding that two differently written things are "probably the same", which is exactly why their matches need checking: they will link a bridge to a street with a similar name as confidently as they link a misspelling to its correction. When West Bridgford learners vibe code a data-joining script, they make the AI do the exact and cleaned stages first, log every fuzzy match with its score, and test a sample against evidence the matcher never saw. An agent that merges customer or address records unattended needs those safeguards written into its instructions. Agent building is something we start once Python is well in hand, in practice from about sixteen, and Copilot Studio agents are taught only one-to-one. Background reading: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>.' },
        { kind: 'p', text: 'This page is not endorsed by the Food Standards Agency, OpenStreetMap, the ONS or postcodes.io. They publish open data; what we did with it, and any errors, are our responsibility.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From name cards to record linkage',
    intro: 'A school year tells us roughly where to pitch the trial; the trial tells us the rest.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Same or different? Rules, exceptions and careful comparison.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'First games and apps, written with an AI and tested by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and data', p: 'Strings, cleaning and joining datasets, beside GCSE and A level work.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Data work and agents', p: 'Practical Python for messy data, then agents that handle it safely.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and messy data',
    h2: 'What is fuzzy matching in Python, and when should you use it?',
    intro: 'Fuzzy matching scores how similar two strings are, for example with difflib.SequenceMatcher, so that near-identical names can be linked; use it only after exact matching and cleaning, and only above a threshold you have tested.',
    p1: 'Matching 192 West Bridgford addresses to OpenStreetMap streets, exact matching and cleaning handled 187; fuzzy matching at a 0.9 threshold added 3 correct links, and lower thresholds added wrong ones.',
    p2: 'Anyone who has run that pipeline asks of an AI-made join: which rows were matched by similarity, at what score, and who checked them?',
    closer: 'That habit of logging and checking is what West Bridgford learners take from the project into every later piece of Python, with or without an AI helping.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Lessons by video, anywhere in Rushcliffe',
    intro: 'You will need a computer with a working camera and a reasonable internet connection, and nothing more.',
    cells: [
      { h3: 'Learner-written code', p: 'The tutor never takes over the keyboard. Learners type, run and explain; the tutor watches their screen and questions.' },
      { h3: 'A trial with a purpose', p: 'It shows us the learner\'s level and interests, and which exam board applies if any.' },
      { h3: 'Free to begin', p: 'The trial lesson carries no charge, and we end it by proposing a course.' },
      { h3: 'Small groups', p: 'Five to ten learners at the same level, drawn from across the UK.' },
      { h3: 'Weekly pattern', p: 'Two lessons a week, none in school holidays.' },
      { h3: 'One fixed time', p: 'British clock changes are handled by the tutor, so the slot stays where it was.' }
    ],
    spec: { title: 'Why everything is online', p: 'A well-matched group needs learners at one level who are all free at one time. Drawing them from the whole country makes that possible.' }
  },

  fees: {
    h2: 'West Bridgford fees',
    intro: 'Learners here are charged our international rates, which apply to every country other than India.',
    first: 'The first lesson is free and ends with advice.',
    group: 'Small-group course: roughly eight live lessons monthly.',
    private: 'Private course: roughly eight live lessons monthly.',
    closer: 'We quote and invoice in US dollars; there are no prices in pounds. Invoicing begins after the trial, when a course and a weekly time have been agreed. Holiday weeks, missed lessons and changes between group and private are covered on the pricing page.'
  },

  reviewsH2: 'Reviews on Google from Nottinghamshire families and UK learners',

  book: {
    h2: 'Book a free West Bridgford lesson',
    intro: 'Let us know how old the learner is, or their school year, and what they are keen on. The trial can then be a same-or-different card game, a Scratch project with AI help, a first Python program, or tidying a small real dataset.',
    success: 'Thank you. We have your West Bridgford request.'
  },

  faq: {
    h2: 'West Bridgford questions',
    intro: 'Matching, the address project, Python, vibe coding and practical matters.',
    items: [
      { q: 'Is West Bridgford part of Nottingham?', a: 'Not administratively. It is in Rushcliffe borough, Nottinghamshire. The ONS counted 36,490 people in the West Bridgford built-up area in 2021.' },
      { q: 'Can I take online Python classes from West Bridgford?', a: 'Yes. Lessons are live video calls for learners aged 6 to 67 in West Bridgford, Gamston, Edwalton and the rest of Rushcliffe.' },
      { q: 'What is record linkage?', a: 'Working out which records in two datasets refer to the same real thing when they have no shared ID, usually by cleaning the text and then comparing it.' },
      { q: 'What does difflib.SequenceMatcher do?', a: 'It is a Python standard library tool that scores two sequences from 0 to 1 according to the matching blocks they share. In our test, only scores of 0.9 and above were safe to accept.' },
      { q: 'What is the West Bridgford project?', a: 'Matching 192 addresses from open Food Hygiene Rating data to OpenStreetMap street names in three stages, then checking each match against map coordinates.' },
      { q: 'Is vibe coding part of the classes?', a: 'Yes, for all ages. Learners state what they want, an AI drafts the code, and they test it line by line.' },
      { q: 'At what point do learners build AI agents?', a: 'When Python is well in hand, usually from about sixteen; Copilot Studio agents are one-to-one lessons only.' },
      { q: 'Do you cover GCSE and A level?', a: 'Computer science and maths at both levels, taught so the ideas are understood. No grade is promised.' },
      { q: 'What is the monthly fee?', a: 'USD 100 for group lessons or USD 150 for private lessons, after a free first lesson.' },
      { q: 'Do you teach through the school holidays?', a: 'No. Tell us the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Nottinghamshire and East Midlands pages',
    html: 'Try <a class="cg-inline-link" href="/best-coding-class-in-nottingham">Nottingham</a> for the city, <a class="cg-inline-link" href="/coding-classes-in-nottinghamshire">Nottinghamshire</a> for the county and <a class="cg-inline-link" href="/best-coding-class-in-derby">Derby</a> or <a class="cg-inline-link" href="/online-coding-and-python-classes-in-mansfield">Mansfield</a> for other towns, each with a project of its own. The full list is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'West Bridgford and Nottinghamshire',
  footerPlaces: [
    { href: '/best-coding-class-in-nottingham', label: 'Nottingham' },
    { href: '/coding-classes-in-nottinghamshire', label: 'Nottinghamshire' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wbf .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-wbf .cg-hero h1 { font-weight: 760; letter-spacing: -0.024em; line-height: 1.06; }
.cg-root.cg-wbf .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-wbf .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wbf .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.02em; }
.cg-root.cg-wbf .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; font-style: italic; }
.cg-root.cg-wbf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wbf .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-wbf .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-wbf .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Rushcliffe (E07000176), Nottinghamshire; Census 2021 TS001 119,077. ONS 2021 BUA (published): West Bridgford 36,490. Nomis 2022 wards: Lutterell 5,981; Trent Bridge 5,883; Edwalton 5,774; Compton Acres 5,548; Musters 4,681. England national curriculum; GCSE and A level. postcodes.io: West Bridgford (town, NG2), Gamston, Edwalton (villages), all Rushcliffe. West Bridgford is not in the City of Nottingham.',
    localProject: 'FSA FHRS API, Rushcliffe (authority 83): 916 establishments, 192 geocoded in bbox -1.145,52.912,-1.090,52.940 (address lines + coordinates only). OSM API 0.6 same box: 454 named streets. Stage 1 exact line 52 (47 within 150 m); stage 2 cleaned 135 (132 within 150 m); stage 3 SequenceMatcher on 5: >= 0.9 accepts 3 (all correct), >= 0.75 accepts 4 (1 wrong), >= 0.6 accepts 5 (2 wrong). Lesson family: record linkage, fuzzy matching thresholds, cleaning first.',
    requiredMentions: [
      '36,490',
      '119,077',
      'Lutterell',
      'Musters',
      'Compton Acres',
      'Gamston',
      'Edwalton',
      'SequenceMatcher',
      'record linkage'
    ],
    sources: [
      { claim: 'Food Standards Agency, Food Hygiene Rating Scheme open data API (Rushcliffe), Open Government Licence.', url: 'https://api.ratings.food.gov.uk/Help' },
      { claim: 'OpenStreetMap street names in West Bridgford, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 (wards, Rushcliffe) via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: West Bridgford, Gamston, Edwalton in Rushcliffe.', url: 'https://api.postcodes.io/places?q=West%20Bridgford' }
    ],
    rejectedClaims: [
      'That West Bridgford is part of the City of Nottingham: it is in Rushcliffe; stated on the page.',
      'Any business name, rating or hygiene information: not used or shown.',
      'Which spelling of a street is correct when the two sources differ: not decided.',
      'Sum of ward populations: not published as a total; not added.',
      'Named schools, sports grounds and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
