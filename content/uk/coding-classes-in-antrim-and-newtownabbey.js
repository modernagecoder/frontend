'use strict';
// Antrim and Newtownabbey (cg- county page, UK cluster Phase 7, row 301). One local government district. Spine: aircraft
// parked nose to tail in a dead-end finger must be towed out in reverse order: how much towing does that cost?
// Anchor (read raw 26 September 2026 from the Department for Communities Historic Environment Division ArcGIS service,
// layer 4 Defence Heritage and layer 1 Historic Buildings): DHR 00042:000 Langford Lodge airfield: "selected by the Ministry
// of Aircraft Production as a satellite landing ground"; "the site was chosen to establish a United States Army Air Force
// depot"; "dispersed hutted camps were established to house 2,600 employees of the Lockheed Overseas Corporation";
// "The base opened in August 1942 and the site renamed AAF Station 597"; "3,250 re-assembled or modified, 11,000 serviced
// and almost half a million aircraft components overhauled"; "returned to the RAF in 1946". DHR finger_dispersal (19
// records in the layer for Langford Lodge, our count of records): "Finger parks, which sometimes were grouped into
// distinctive 'snowflakes', allowed much larger numbers of aircraft to be stored. However, the high-density parking
// required aircraft to be towed on an off the parks. Somewhat of a rarity in Great Britain, they are found more frequently
// on airfield sites in N. Ireland." Runways: "Runway No. 1 and is 1,780 metres long"; "Runway No. 2 and is 1,440 metres
// long". Control tower DHR 00042:004 (HB20/14/029, Grade A, council Antrim and Newtownabbey, Date_Const 1940 - 1959):
// "contained a meteorological office, watch office and a control room from which all landing and take-offs were controlled".
// Our model (computed inline; 24 invented aircraft, seed 7, 4,000 trials; a finger is a dead end, blockers towed out and
// back): random parking order, total blockers moved: depth 1 = 0; 2 = 5.9 (worst 11); 4 = 17.9 (29); 6 = 30.0 (49); 12 =
// 66.0 (107); 24 = 138.0 (202). Formula N(k-1)/4: 0, 6, 18, 30, 66, 138. Parking by known departure order: 0 at every
// depth. Rough plan (rank error sd 4): 5.1, 13.7, 20.5, 32.5, 40.5.
// Lesson family: LIFO stack storage and block relocation, expected blockers N(k-1)/4 by simulation and by formula;
// screened (block relocation, towing, last in: 0 hits; Angus used a stack for quote matching only).
// Place facts: NISRA Census 2021 MS-A01: Antrim and Newtownabbey LGD N09000001 145,661. DEAs (exact, not summed): Airport
// 22,029; Antrim 23,950; Ballyclare 19,069; Dunsilly 17,997; Glengormley Urban 21,639; Macedon 20,323; Three Mile Water
// 20,653. Settlements (approximated by NISRA, within 5 per cent): Metropolitan Newtownabbey 67,599; Antrim 25,606;
// Ballyclare 10,850; Crumlin 5,366; Randalstown 5,151; Templepatrick 1,538. District membership of those towns: HED Council
// field on listed buildings at each address. No transfer test advice. No community background or identity data.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'ANTRIM AND NEWTOWNABBEY', blurb: 'Antrim, Newtownabbey, Ballyclare and Randalstown, and a Langford Lodge lesson on towing aircraft out of a dead-end parking finger.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-antrim-and-newtownabbey',
  code: 'anb',
  accent: '#3C127A',
  accentRationale: 'Antrim and Newtownabbey: an airfield-night indigo from the solver (10.85:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'Antrim and Newtownabbey',
    eyebrow: 'Antrim and Newtownabbey',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Northern Ireland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Belfast', href: '/best-coding-class-in-belfast' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Antrim and Newtownabbey',
  title: 'Coding Classes in Antrim and Newtownabbey | Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Antrim and Newtownabbey: Antrim, Newtownabbey, Ballyclare, Randalstown, Crumlin and Templepatrick.',
  ogDescription: 'Antrim and Newtownabbey coding classes, and a Langford Lodge project: work out in Python how much towing a dead-end aircraft park costs, and how planning removes it.',
  twitterDescription: 'Antrim and Newtownabbey coding, Python and maths for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Antrim and Newtownabbey',
    description: 'Online coding, Python, data structures and mathematics for children, teenagers and adults across Antrim and Newtownabbey, taught live in English and placed by level.'
  },

  h1: 'Coding classes in Antrim and Newtownabbey',
  capsuleQ: 'What are the best coding classes in Antrim and Newtownabbey?',
  capsule: 'Antrim and Newtownabbey had 145,661 usual residents at the 2021 census, according to NISRA. Its biggest settlement is Metropolitan Newtownabbey, then the town of Antrim, with Ballyclare, Crumlin, Randalstown and Templepatrick among the smaller places. All our lessons are taught live by video from India. Learners aged 6 to 67 take coding, Python and maths, either one-to-one or in a group of five to ten at the same level. A free first lesson decides the starting course. The district project is set on a wartime airfield. If you continue, a group place is USD 100 a month and private lessons USD 150 a month.',
  lead: 'In August 1942 an airfield at Langford Lodge opened as AAF Station 597, a depot for the United States Army Air Force, run by the Lockheed Overseas Corporation with 2,600 employees. The Historic Environment Division\'s defence record says 3,250 aircraft were reassembled or modified there and 11,000 serviced. That many aircraft needed somewhere to wait, and the record describes finger parks: short dead-end strips that packed aircraft in tightly but meant they had to be towed on and off. Park planes nose to tail in a dead end and the first one in is the last one out. If the aircraft you need is at the back, everything in front must be moved. How much towing does that cost, and how much can planning save? This page\'s project works it out in Python.',
  wa: 'Hello Modern Age Coders, we are in Antrim and Newtownabbey and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Antrim and Newtownabbey',
    h2: 'Where Antrim and Newtownabbey learners start',
    intro: 'A P4 pupil in Randalstown who lines up toy planes, a Year 9 in Ballyclare ready for Python, a Year 11 in Antrim facing CCEA GCSE maths, and a Newtownabbey adult learning to code for a new job. A free lesson places each one.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with queues, lines and parking puzzles.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 14', note: 'First typed Python, with lists that grow and shrink.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'In-depth Python for teenagers, including stacks, queues and simulation.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults, from a first program to data structures.' }
    ]
  },

  sections: [
    {
      id: 'antrim-and-newtownabbey', tint: '', eyebrow: 'The district by census',
      h2: '145,661 people in the district',
      intro: 'NISRA\'s Census 2021 table MS-A01 gives the district\'s usual residents. It also gives each district electoral area, shown here exactly as published and not added up.',
      body: [
        { kind: 'table', caption: 'Antrim and Newtownabbey district electoral areas, usual residents, NISRA Census 2021', head: ['Electoral area', 'Residents', 'Electoral area', 'Residents'], rows: [
          ['Airport', '22,029', 'Macedon', '20,323'],
          ['Antrim', '23,950', 'Three Mile Water', '20,653'],
          ['Ballyclare', '19,069', 'Glengormley Urban', '21,639'],
          ['Dunsilly', '17,997', '', '']
        ] },
        { kind: 'p', text: 'NISRA also estimates settlements: Metropolitan Newtownabbey 67,599, Antrim 25,606, Ballyclare 10,850, Crumlin 5,366, Randalstown 5,151 and Templepatrick 1,538. It notes that settlement figures are approximations, nearly all within five per cent of exact counts. Schools here follow the Northern Ireland Curriculum from P1 to Year 14, with CCEA GCSEs and A levels at the top. We have not read school holiday lists, so each family gives us its own.' },
        { kind: 'callout', h3: 'Belfast and CCEA help', p: 'The city of <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a> has its own page. For exams, see <a class="cg-inline-link" href="/ccea-gcse-digital-technology-programming-help">CCEA GCSE Digital Technology programming</a> and <a class="cg-inline-link" href="/ccea-gcse-maths-help">CCEA GCSE maths</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Antrim and Newtownabbey project',
      h2: 'Last in, first out',
      intro: 'A dead-end parking strip is a stack, and stacks punish bad ordering.',
      body: [
        { kind: 'p', text: 'Programmers call a dead-end line a stack: you can only add or remove at the open end. The learner models 24 aircraft, all invented, parked in fingers of different depths, from 24 separate single spaces to one long line of 24. Each aircraft leaves in its own order. To get one out, every aircraft between it and the open end must be towed out and back in. The program counts those blocking moves, repeats the whole thing 4,000 times with random parking, and averages.' },
        { kind: 'table', caption: 'Our towing model, 24 invented aircraft, 4,000 trials, 26 September 2026', head: ['Finger depth', 'Random parking, average blockers moved', 'Formula N(k minus 1) over 4', 'Parked in departure order'], rows: [
          ['1 (24 single spaces)', '0', '0', '0'],
          ['2', '5.9', '6', '0'],
          ['4', '17.9', '18', '0'],
          ['6', '30.0', '30', '0'],
          ['12', '66.0', '66', '0'],
          ['24 (one long line)', '138.0', '138', '0']
        ] },
        { kind: 'p', text: 'The simulation matches a neat formula. With random parking, any two aircraft in the same finger are equally likely to be in the wrong order, so each finger of depth k causes k times k minus 1 over 4 blocking moves on average, and 24 aircraft in fingers of depth k cause 24 times k minus 1 over 4. Deep fingers pack more aircraft into less space, which is why the record says they allowed much larger numbers to be stored, but the towing grows with depth. One long line of 24 costs 138 moves on average, and 202 on the worst run.' },
        { kind: 'p', text: 'Then planning changes everything. If you know the departure order, park the last to leave deepest and the first to leave nearest the open end, and nothing is ever blocked: zero moves at every depth. Real plans are rougher. When the program guesses departure order with an error of about four places, a single line of 24 still needs about 40 moves instead of 138. Learners also test the classic slip: counting a finger from the wrong end, which turns a perfect plan into the costliest one.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Park toy cars in a shoebox with one open end, count the moves, then build the puzzle in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Use Python lists as stacks with append and pop, and count the blockers for each depth.' },
          { h3: 'Ages 15 and up', p: 'Derive N(k minus 1) over 4, compare it with the simulation, and add noisy departure plans.' }
        ] },
        { kind: 'callout', h3: 'A real airfield, invented aircraft', p: 'The airfield history and the description of finger parks come from the Historic Environment Division\'s record. The 24 aircraft, the depths and the departure orders are ours, so the table teaches how stacked storage behaves, not how Langford Lodge was actually run.' }
      ]
    },
    {
      id: 'langford-lodge', tint: 'deep', eyebrow: 'Why Langford Lodge',
      h2: 'A wartime depot beside the airfield',
      intro: 'What the defence heritage and listed building records say.',
      body: [
        { kind: 'table', caption: 'Langford Lodge airfield, Department for Communities Historic Environment Division, Defence Heritage record 00042 and listed building HB20/14/029', head: ['Record detail', 'What it says'], rows: [
          ['Origin', 'First selected as a satellite landing ground, then chosen for a United States Army Air Force depot'],
          ['Opened', 'August 1942, renamed AAF Station 597'],
          ['Workforce', '2,600 employees of the Lockheed Overseas Corporation in dispersed hutted camps'],
          ['Output', '3,250 aircraft reassembled or modified, 11,000 serviced, almost half a million components overhauled'],
          ['Runways', 'Runway No. 1, 1,780 m; Runway No. 2, 1,440 m'],
          ['Control tower', 'Listed at Grade A; held a meteorological office, watch office and control room']
        ] },
        { kind: 'p', text: 'Stacks and the cost of reordering them turn up everywhere in computing and logistics. Container ports plan which box goes on top so cranes do not have to dig, warehouses slot fast-moving goods near the front, and every program that calls a function uses a stack to remember where to return. A learner in Antrim and Newtownabbey who has turned 138 moves into zero by planning the order has met the idea behind all of them.' },
        { kind: 'p', text: 'We have no connection with NISRA, the Department for Communities or any organisation named in these records. The records are theirs; the towing model, and any error in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From primary to adult',
    h2: 'From toy cars to data structures',
    intro: 'These stages are approximate; the trial lesson settles where each learner begins.',
    cols: [
      { band: 'P3 to P7', h3: 'Order and sequence', p: 'Block coding with lines, turns and simple puzzles.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 8 to 10', h3: 'Lists in Python', p: 'Typed Python with lists, loops and counting.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 11 to 14', h3: 'Structures and proof', p: 'Stacks, queues, simulation and algebra, alongside CCEA GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Python for work', p: 'Adult Python from the very start to confident data handling.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and order',
    h2: 'An AI can write a stack in seconds. Will it notice the order is costing you?',
    intro: 'Correct code can still be the wrong design.',
    p1: 'Ask a chatbot for a parking or storage program and it will usually give working code that stores and retrieves items correctly. Whether the design forces hundreds of pointless moves is a question it seldom raises unless asked.',
    p2: 'A learner who has watched 138 moves shrink to zero with a better plan knows to ask what a working program is costing, whoever wrote it.',
    closer: 'Questioning the cost of a design that already works is a sound reason for an Antrim and Newtownabbey teenager to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson set-up',
    h2: 'From Toome to Glengormley, on video',
    intro: 'Any home in the district with a connection can join.',
    cells: [
      { h3: 'Hands on', p: 'Learners type their own programs, and the tutor follows the shared screen, stepping in with a question when needed.' },
      { h3: 'Northern Ireland years', p: 'A Crumlin P6 or a Ballyclare Year 13 is placed by Northern Ireland school year and key stage, with CCEA exam names. Teaching is in English.' },
      { h3: 'Free trial', p: 'One full lesson free of charge, with a recommendation at the end.' },
      { h3: 'Level groups', p: 'Five to ten learners at one level, gathered from across the UK.' },
      { h3: 'Term weeks', p: 'Two lessons a week in term time, none in holidays.' },
      { h3: 'Local time kept', p: 'Your lesson stays at the same Northern Ireland clock time through spring and autumn changes; our teachers adapt.' }
    ],
    spec: { title: 'Why online groups help', p: 'A village like Templepatrick may have one keen coder at a given level. Online, that learner joins peers exactly as far along.' }
  },

  fees: {
    h2: 'Fees in Antrim and Newtownabbey',
    intro: 'Antrim or Newtownabbey, the price is the same, as it is in every country we teach outside India.',
    first: 'A full first lesson at no cost, then our honest advice.',
    group: 'About eight lessons a month in a class of five to ten.',
    private: 'About eight lessons a month with a dedicated tutor.',
    closer: 'Fees are in US dollars only; we have no sterling price. Payment begins after the trial has set a course and a weekly time, and the pricing page explains holidays, missed lessons and changing format.'
  },

  reviewsH2: 'Google ratings from families we teach',

  book: {
    h2: 'Book a free lesson in Antrim and Newtownabbey',
    intro: 'Send the learner\'s age or school year and something they like. The trial could be a Scratch parking puzzle, a first Python program, or the Langford Lodge towing model.',
    success: 'Thank you. Your Antrim and Newtownabbey request has come through.'
  },

  faq: {
    h2: 'Antrim and Newtownabbey questions',
    intro: 'The district, the airfield project and the practical side.',
    items: [
      { q: 'What is the population of Antrim and Newtownabbey?', a: 'NISRA\'s Census 2021 counted 145,661 usual residents in the district.' },
      { q: 'What are the main towns in Antrim and Newtownabbey?', a: 'NISRA estimates Metropolitan Newtownabbey at 67,599 and Antrim at 25,606, followed by Ballyclare at 10,850.' },
      { q: 'What is the Langford Lodge project?', a: 'Learners model aircraft parked in dead-end fingers as Python stacks and count how many must be towed to free each one, then plan the order to avoid it.' },
      { q: 'What is a stack in programming?', a: 'A collection where you can only add or remove at one end, so the last item in is the first out.' },
      { q: 'When did Langford Lodge open as a depot?', a: 'In August 1942, as AAF Station 597, according to the Historic Environment Division record.' },
      { q: 'Are the lessons online?', a: 'Yes. Every lesson is live on video, so learners join from home.' },
      { q: 'Do you help with CCEA GCSE and A level?', a: 'Yes, in maths and computing subjects. We build understanding and never promise grades.' },
      { q: 'What ages do you take?', a: 'From six to 67, on a course matched to each learner.' },
      { q: 'How much do lessons cost?', a: 'The first lesson is free; then USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do you teach during school holidays?', a: 'No. Tell us your holiday weeks and we skip them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More Northern Ireland pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a> ranks its Metro and Glider stops, <a class="cg-inline-link" href="/best-coding-class-in-lisburn">Lisburn</a> compares building ages, and <a class="cg-inline-link" href="/best-coding-class-in-bangor-northern-ireland">Bangor</a> explains why waits feel long. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland</a> page links every district we cover, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Antrim and Newtownabbey',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/best-coding-class-in-belfast', label: 'Belfast' },
    { href: '/ccea-gcse-digital-technology-programming-help', label: 'CCEA GCSE Digital Technology' }
  ],

  personalityCss: `
.cg-root.cg-anb .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-anb .cg-hero h1 { font-weight: 720; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-anb .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-anb .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-anb .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-anb .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-anb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-anb .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-anb .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-anb .cg-callout { border-left-width: 5px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Antrim and Newtownabbey (N09000001). NISRA Census 2021 MS-A01: 145,661. DEAs (exact, not summed): Airport 22,029; Antrim 23,950; Ballyclare 19,069; Dunsilly 17,997; Glengormley Urban 21,639; Macedon 20,323; Three Mile Water 20,653. Settlements (NISRA approximations): Metropolitan Newtownabbey 67,599; Antrim 25,606; Ballyclare 10,850; Crumlin 5,366; Randalstown 5,151; Templepatrick 1,538. HED Defence Heritage 00042:000 Langford Lodge: satellite landing ground then USAAF depot; "2,600 employees of the Lockheed Overseas Corporation"; "opened in August 1942 and the site renamed AAF Station 597"; "3,250 re-assembled or modified, 11,000 serviced and almost half a million aircraft components overhauled"; "returned to the RAF in 1946". Finger dispersal: "allowed much larger numbers of aircraft to be stored. However, the high-density parking required aircraft to be towed on an off the parks". Runways 1,780 m and 1,440 m. Control tower HB20/14/029 Grade A.',
    localProject: 'LIFO finger parking, 24 invented aircraft, 4,000 trials, seed 7. Random order blockers: depth 1 0; 2 5.9 (worst 11); 4 17.9 (29); 6 30.0 (49); 12 66.0 (107); 24 138.0 (202); formula N(k-1)/4. Departure-ordered parking 0. Rough plan sd 4 ranks: 5.1, 13.7, 20.5, 32.5, 40.5. Lesson family: stack storage and block relocation.',
    requiredMentions: [
      'Three Mile Water',
      'Dunsilly',
      'Macedon',
      'Randalstown',
      'Templepatrick',
      'Ballyclare',
      'Metropolitan Newtownabbey',
      'Langford Lodge',
      'Lockheed',
      'AAF Station 597'
    ],
    sources: [
      { claim: 'NISRA Census 2021 MS-A01 usual resident population by LGD, DEA and settlement.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'Department for Communities Historic Environment Division GIS data: Defence Heritage (Langford Lodge records 00042) and Historic Buildings (HB20/14/029).', url: 'https://services2.arcgis.com/BdBkthNLO9mzGAMO/arcgis/rest/services/Historic_Environment_Division_GIS_Data/FeatureServer' },
      { claim: 'Listed Buildings Northern Ireland dataset on OpenDataNI.', url: 'https://www.opendatani.gov.uk/@department-for-communities-historic-environment-division/listed-buildings-northern-ireland' }
    ],
    rejectedClaims: [
      'How aircraft were actually parked or towed at Langford Lodge: not in the records; the model is ours.',
      'The present-day occupier and its products: in the record, not used.',
      'Transfer test advice: excluded by rule.',
      'Community background, religion and identity statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.'
    ]
  }
};
