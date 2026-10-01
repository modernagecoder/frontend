'use strict';
// Bamber Bridge (cg- town page, UK cluster Phase 10, towns band B, row 557). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when you have thousands of time intervals
// that overlap, how do you find the ones covering a given moment without checking them all? (Interval tree.)
// Data (read 30 September 2026): Environment Agency Hydrology API, 15-minute rainfall (qualified) for calendar 2025 at the
// four gauges within 11 km of Bamber Bridge (postcodes.io place point): Moor Park 576635 (5.5 km), Common Bank 570788
// (8.6 km), Haighton 576578 (8.9 km), Clifton Marsh 576925 (11.0 km); 35,040 readings each. Readings flagged Suspect were
// left out (Moor Park 570, Haighton 2,509, Clifton Marsh 2,940); Common Bank's 5,992 Unchecked readings were kept.
// Our run (scratchpad bmb/it.py): a rain episode = run of wet quarter-hours, joining dry gaps of up to 30 minutes.
// Episodes: Moor Park 506, Common Bank 656, Haighton 541, Clifton Marsh 498; 2,201 in all (our count of our own
// intervals); longest 32.75 hours, median 45 minutes. Centred interval tree, depth 12. 365 queries, 08:30 each day:
// 2,968 interval checks (8.1 per query) vs 803,365 for a full scan; identical answers. Gauges inside an episode at 08:30:
// none 281 days, one 40, two 18, three 13, four 13. A sort-by-start plus binary search that checks only the latest
// start misses 98 of the 167 true matches.
// Lesson family: interval tree (stabbing queries on overlapping intervals). Screened: "interval tree", "stabbing"
// 0 hits in content/; claimed in claims.txt. Lancashire county page = dithering; Preston = Theil-Sen.
// Place facts: South Ribble TS001 111,035. ONS 2021 BUA (published): Bamber Bridge 40,360 (spans South Ribble and
// neighbouring districts). postcodes.io suburban areas whose nearest postcode is in the Bamber Bridge BUA:
// Walton-le-Dale, Tardy Gate (South Ribble), Clayton Brook (Chorley).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BAMBER BRIDGE', label: 'Bamber Bridge', blurb: 'Coding and AI classes for Bamber Bridge, with a project that builds an interval tree over a year of rain episodes from four nearby gauges.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-bamber-bridge',
  code: 'bmb',
  accent: '#66151B',
  accentRationale: 'Bamber Bridge: a dark claret (12.44:1 contrast on white), chosen by hand as a muted tone kept clear of the other Lancashire pages',
  pageType: 'city',
  place: {
    name: 'Bamber Bridge',
    eyebrow: 'Bamber Bridge, South Ribble, Lancashire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Lancashire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Lancashire', href: '/coding-classes-in-lancashire' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bamber Bridge, Lancashire',
  title: 'Coding and AI Classes in Bamber Bridge | Ages 6 to 67',
  description: 'Live online coding and AI classes for Bamber Bridge, Walton-le-Dale, Tardy Gate and Clayton Brook: Python, vibe coding and AI agents for ages 6 to 67. Try one free.',
  ogDescription: 'Coding and AI lessons for Bamber Bridge, with a project that searches a year of local rain records using an interval tree.',
  twitterDescription: 'Bamber Bridge coding, Python and AI classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Bamber Bridge',
    description: 'Coding, Python, AI and maths lessons taught live online to children, teenagers and adults in Bamber Bridge and South Ribble, including a data structures project on rainfall records.'
  },

  h1: 'Coding and AI classes in Bamber Bridge',
  capsuleQ: 'Which coding and AI classes are best for Bamber Bridge?',
  capsule: 'The 2021 census put 40,360 usual residents in the ONS built-up area of Bamber Bridge; South Ribble, which holds most of it, recorded 111,035. Gazetteer suburbs in the town include Walton-le-Dale, Tardy Gate and Clayton Brook. Learners here, from six years old to 67, can take coding, AI, Python, vibe coding or maths with Modern Age Coders: each lesson is live on video with a tutor in India, taught privately or to a small class of five to ten who share a level. The Bamber Bridge project is about a kind of search that timetables, calendars and monitoring systems do constantly: given thousands of overlapping time spans, which ones cover this exact moment? Learners build an interval tree over a year of rain records from four gauges near the town. The first lesson is free; then USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'A calendar app asks which meetings are happening at 10 o\'clock. A server log, a train control room and a weather service ask the same sort of question about spans of time, over and over. Checking every span each time works, but it is slow when there are thousands. An interval tree answers the question by looking at only a handful. Bamber Bridge learners build one in Python and feed it a year of rain from the Environment Agency gauges around the town, then ask a simple daily question: at half past eight in the morning, where was it raining?',
  wa: 'Hello Modern Age Coders, we are in Bamber Bridge and would like to book a free coding or AI lesson.',

  picks: {
    eyebrow: 'Suggested courses',
    h2: 'Coding and AI courses for Bamber Bridge',
    intro: 'Match the course to the learner\'s age. The first live lesson on each is free, and no card is taken.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: finding things fast by organising them first, the idea behind every tree.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: Scratch projects built with AI suggestions and tested by the child.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python for teenagers, with the interval tree project on real rain data.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 and up', note: 'Data structures and algorithms: trees, binary search and the reasoning behind them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bamber Bridge facts',
      h2: 'Bamber Bridge, Walton-le-Dale, Tardy Gate and Clayton Brook',
      intro: 'Where the numbers and names on this page come from.',
      body: [
        { kind: 'table', caption: 'Residents counted at the March 2021 census (ONS)', head: ['Boundary', 'People'], rows: [
          ['Bamber Bridge built-up area', '40,360'],
          ['South Ribble district', '111,035']
        ] },
        { kind: 'p', text: 'The two figures describe different boundaries: South Ribble also includes Leyland and Penwortham, while the Bamber Bridge built-up area spills across the district boundary. In the postcode gazetteer Walton-le-Dale and Tardy Gate are suburban areas in South Ribble and Clayton Brook is one in Chorley, all under PR5, and the nearest postcode to each sits inside the Bamber Bridge built-up area. Schools in South Ribble teach the English national curriculum; a year group anywhere from Year 2 to Year 13 is enough for us to plan the first session, and GCSE and A level computer science can be supported in parallel.' },
        { kind: 'callout', h3: 'Lancashire pages', p: 'Try the <a class="cg-inline-link" href="/coding-classes-in-lancashire">Lancashire page</a> and <a class="cg-inline-link" href="/best-coding-class-in-preston">Preston</a>. For why we still teach the reasoning under the tools, see <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bamber Bridge project',
      h2: 'An interval tree over a year of rain near Bamber Bridge',
      intro: 'Four gauges, 2,201 rain episodes, 365 morning questions, and a shortcut that silently gives wrong answers.',
      body: [
        { kind: 'p', text: 'The Environment Agency publishes 15-minute rainfall readings for its gauges. Four lie within 11 kilometres of Bamber Bridge: Moor Park at 5.5 km, Common Bank at 8.6 km, Haighton at 8.9 km and Clifton Marsh at 11.0 km. For each we downloaded all 35,040 readings of 2025. Readings the Agency flags as suspect were left out, 570 at Moor Park, 2,509 at Haighton and 2,940 at Clifton Marsh, and the learner reports those numbers, because data cleaning is part of the result. Then each gauge\'s year is turned into rain episodes: runs of wet quarter-hours, with dry gaps of up to 30 minutes joined in.' },
        { kind: 'p', text: 'That gives 506 episodes at Moor Park, 656 at Common Bank, 541 at Haighton and 498 at Clifton Marsh, 2,201 intervals of time in all. They overlap, because rain often falls at several gauges at once. The longest lasted 32.75 hours; the median lasted 45 minutes. The question is asked once for every day of the year: which episodes include the 08:30 reading?' },
        { kind: 'p', text: 'The slow answer checks all 2,201 intervals each morning, 803,365 checks for the year. The interval tree picks the middle time point, stores the intervals that cross it at that node in two sorted lists, and sends the rest left or right. To answer a query the program walks down one path and, at each node, reads only the sorted list until the intervals stop matching. Our tree was 12 levels deep and needed 2,968 checks for the whole year, about 8 a morning, with exactly the same answers as the full scan.' },
        { kind: 'table', caption: 'Gauges inside a rain episode at 08:30, each day of 2025, our Python run', head: ['Gauges with rain', 'Days'], rows: [
          ['None of the four', '281'],
          ['One', '40'],
          ['Two', '18'],
          ['Three', '13'],
          ['All four', '13']
        ] },
        { kind: 'p', text: 'The tempting shortcut is to sort the episodes by start time, use binary search to find the last one that began before 08:30, and check only that. It is fast and it looks right. Over the year it found only 69 of the 167 true matches and missed 98, because a long episode that began earlier at a different gauge is hidden behind a short one that began later. With intervals from a single gauge, which never overlap, the shortcut would have been correct; with four gauges it is not. The learner writes a test that compares every answer with the full scan, which is the only reason the bug shows up.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Strips of paper on a timeline: which strips cross the pencil line? Then sort them and find a faster way to look.' },
          { h3: 'Ages 11 to 15', p: 'Turn a week of 15-minute readings into rain episodes in Python and answer questions by scanning.' },
          { h3: 'Ages 15 and up', p: 'Build the interval tree, count checks per query, and test it against the scan and the binary search shortcut.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Rainfall is from the Environment Agency Hydrology service, under the Open Government Licence. The 30-minute joining rule and the 08:30 question are our choices; another rule would give different episode counts. The interval tree follows de Berg and colleagues, Computational Geometry (2008). Gauge distances are straight lines from the gazetteer point for Bamber Bridge.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Why this matters with AI',
      h2: 'What interval trees teach about AI tools and data',
      intro: 'Fast lookups sit underneath every assistant that searches schedules, logs or records.',
      body: [
        { kind: 'table', caption: 'What the rain project carries over into AI', head: ['What happened with the rain data', 'The habit it builds'], rows: [
          ['2,968 checks instead of 803,365', 'Structure data once and every later question gets cheaper'],
          ['The binary search shortcut missed 98 of 167', 'Plausible code can be wrong in ways that never crash'],
          ['It would have worked on one gauge', 'A method can be correct for the data you tested and wrong for the data you have'],
          ['Suspect readings were counted and removed', 'Say what you cleaned, or the result cannot be checked'],
          ['A full scan checked every answer', 'Keep a slow, obvious version to test the clever one']
        ] },
        { kind: 'p', text: 'AI agents that look things up, in calendars, logs or sensor records, depend on exactly these structures, and AI coding assistants readily produce the sort-and-binary-search shortcut when asked for something fast. Bamber Bridge learners practise vibe coding, describing what they want to an assistant and then testing its code: here, the test against the full scan is what exposes a shortcut that looks perfect. Agent projects wait until a learner’s Python is steady without help, which tends to mean the later teens or adulthood; anything in Copilot Studio is taught privately. More in <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Rain readings came from the Environment Agency and place data from the ONS and postcodes.io; none of them is linked to Modern Age Coders, and the episodes, the tree and the reading of the results are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How learners progress',
    h2: 'From paper timelines to trees in Python',
    intro: 'We begin from the school year and check the level in the free lesson.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Sorting, searching and organising before code.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch and first Python, using AI help that the child tests.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and data structures', p: 'Lists, trees and searching, with real data and honest tests.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Adults', h3: 'Algorithms and agents', p: 'Data structures in depth, then AI agents that use them.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Data structures and AI',
    h2: 'What is an interval tree, and why do AI tools need structures like it?',
    intro: 'An interval tree is a data structure that stores time spans or ranges so that a program can find every span covering a given point by checking only a few of them, and AI tools need structures like it because agents that search calendars, logs and sensor records must answer such questions quickly and correctly.',
    p1: 'Over a year of rain episodes from four gauges near Bamber Bridge, our interval tree answered 365 morning questions with 2,968 checks instead of 803,365, while a binary search shortcut missed 98 of the 167 true matches.',
    p2: 'After this project, learners ask of any fast piece of code, their own or an AI\'s: fast compared with what, and tested against what?',
    closer: 'A Bamber Bridge teenager who has caught a shortcut giving wrong answers will test AI-written code before trusting it, and learning to code is how that habit forms.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lessons in practice',
    h2: 'How Bamber Bridge learners are taught',
    intro: 'All that is needed at home is a laptop or desktop, a webcam and broadband that does not keep dropping.',
    cells: [
      { h3: 'The learner codes', p: 'Tutors guide with questions; learners do the typing, running and fixing.' },
      { h3: 'We place, then suggest', p: 'The free lesson shows the learner\'s level before any course is proposed.' },
      { h3: 'First lesson free', p: 'A full lesson at no charge, with no card details taken.' },
      { h3: 'Level-matched groups', p: 'Five to ten learners at one stage, from towns all over the UK.' },
      { h3: 'Two a week in term', p: 'Share the Lancashire term dates you follow and we leave holidays free.' },
      { h3: 'Fixed UK time', p: 'Clock changes in spring and autumn are the tutor\'s job, not yours.' }
    ],
    spec: { title: 'Why live online', p: 'A tutor on a live call can see a mistake happen and ask about it straight away. With learners from across the UK, groups can be matched by level much more tightly than one town could manage.' }
  },

  fees: {
    h2: 'Fees for Bamber Bridge',
    intro: 'There is no special Lancashire price; Bamber Bridge pays what everyone pays.',
    first: 'A full first lesson, free, finishing with a course recommendation.',
    group: 'Group lessons, close to eight a month.',
    private: 'One-to-one lessons, close to eight a month.',
    closer: 'Fees are charged in US dollars; we do not quote sterling. Nothing is invoiced for the trial; billing starts after the course and weekly slot are agreed. Holidays, absences and switching between formats are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from Lancashire families and learners across the UK',

  book: {
    h2: 'Book a free lesson in Bamber Bridge',
    intro: 'Tell us an age or school year and something the learner is keen on. The trial could be a paper timeline puzzle, a Scratch game made with AI help, a first Python program, or a small search over real rain data.',
    success: 'Thank you. Your Bamber Bridge request is with us.'
  },

  faq: {
    h2: 'Bamber Bridge: common questions',
    intro: 'Interval trees, the rain project, AI, vibe coding and the practical details.',
    items: [
      { q: 'What is the population of Bamber Bridge?', a: 'The ONS built-up area had 40,360 usual residents at the 2021 census. South Ribble district had 111,035.' },
      { q: 'Can learners in Bamber Bridge join?', a: 'Anyone aged 6 to 67 in Walton-le-Dale, Tardy Gate, Clayton Brook or elsewhere in town can, since every lesson is live online.' },
      { q: 'What is a stabbing query?', a: 'A question of the form "which intervals contain this point?", such as which rain episodes include 08:30 on a given day. Interval trees are built to answer it quickly.' },
      { q: 'What did the Bamber Bridge project find?', a: 'At 08:30 there was rain at none of the four gauges on 281 days of 2025 and at all four on 13. The tree needed 2,968 checks for the year against 803,365 for a full scan.' },
      { q: 'Why did the binary search shortcut fail?', a: 'It checked only the episode that started most recently, so it missed longer episodes at other gauges that had started earlier. It missed 98 of 167 true matches.' },
      { q: 'What is vibe coding?', a: 'Getting an AI to write a program from your plain-language request, and then taking responsibility for it: reading it, running it, breaking it and fixing it. Learners need real coding to do the second half well, so we teach both.' },
      { q: 'When do learners move on to AI agents?', a: 'Once Python comes without prompting, most often in the later teens or as adults. Copilot Studio agent lessons are private only.' },
      { q: 'Will this help with GCSE and A level computer science?', a: 'Yes. Searching, sorting and data structures are in both. We do not promise grades.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. After that, USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons stop in the school holidays?', a: 'If you like. Tell us the dates and we will leave them out.' }
    ]
  },

  next: {
    eyebrow: 'Around Lancashire',
    h2: 'More Lancashire and North West pages',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-preston">Preston</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-blackburn">Blackburn</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-blackpool">Blackpool</a>, each with its own project. The <a class="cg-inline-link" href="/coding-classes-in-lancashire">Lancashire page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bamber Bridge and Lancashire',
  footerPlaces: [
    { href: '/coding-classes-in-lancashire', label: 'Lancashire' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bmb .cg-hero-grid { align-items: center; gap: clamp(1.6rem, 3.5vw, 2.9rem); }
.cg-root.cg-bmb .cg-hero h1 { font-weight: 740; letter-spacing: -0.034em; line-height: 1.02; }
.cg-root.cg-bmb .cg-capsule { border: 1px solid var(--cg-accent); border-radius: 12px; padding: 0.9rem 1rem; }
.cg-root.cg-bmb .cg-eyebrow { letter-spacing: 0.12em; font-weight: 660; text-transform: uppercase; font-size: 0.83rem; }
.cg-root.cg-bmb .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.024em; }
.cg-root.cg-bmb .cg-table caption { font-weight: 500; text-align: left; font-size: 0.94rem; }
.cg-root.cg-bmb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bmb .cg-table th { font-weight: 700; letter-spacing: 0.03em; text-transform: uppercase; font-size: 0.85rem; }
.cg-root.cg-bmb .cg-ladder-col { border-radius: 14px; border-left: 4px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-bmb .cg-callout { border-left-width: 2px; border-radius: 12px; }
`,

  dossier: {
    curriculumAuthority: 'South Ribble (E07000126), Census 2021 TS001 usual residents 111,035. ONS 2021 BUA (published): Bamber Bridge 40,360, spanning South Ribble and neighbouring districts. English national curriculum, GCSE and A level. postcodes.io suburban areas whose nearest postcode is in the BUA: Walton-le-Dale, Tardy Gate (South Ribble), Clayton Brook (Chorley), all PR5.',
    localProject: 'Environment Agency Hydrology API, 15-minute rainfall 2025 at Moor Park 576635 (5.5 km), Common Bank 570788 (8.6 km), Haighton 576578 (8.9 km), Clifton Marsh 576925 (11.0 km); 35,040 readings each; Suspect readings dropped (570, 0, 2,509, 2,940); Common Bank Unchecked kept. Episodes (wet quarter-hours, dry gaps up to 30 minutes joined): 506, 656, 541, 498; 2,201 intervals; longest 32.75 h, median 45 min. Centred interval tree depth 12: 365 queries at 08:30, 2,968 checks vs 803,365 full scan, identical answers. Gauges in an episode at 08:30: 0 on 281 days, 1 on 40, 2 on 18, 3 on 13, 4 on 13. Sort-by-start plus binary search checking only the latest start: 69 of 167 found, 98 missed. Lesson family: interval tree, stabbing queries, overlapping intervals.',
    requiredMentions: [
      '40,360',
      '111,035',
      'Walton-le-Dale',
      'Tardy Gate',
      'Clayton Brook',
      'interval tree',
      'Haighton',
      'Clifton Marsh',
      '803,365',
      '2,968'
    ],
    sources: [
      { claim: 'de Berg M., Cheong O., van Kreveld M. and Overmars M. (2008), Computational Geometry: Algorithms and Applications, 3rd edition, Springer, chapter 10 (interval trees).', url: 'https://doi.org/10.1007/978-3-540-77974-2' },
      { claim: 'Environment Agency Hydrology API, 15-minute qualified rainfall, stations 576635, 570788, 576578, 576925, calendar 2025 (Open Government Licence).', url: 'https://environment.data.gov.uk/hydrology/doc/reference' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations and OA21 to BUA22 lookup.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for Bamber Bridge and its suburbs.', url: 'https://api.postcodes.io/places?q=Bamber%20Bridge' }
    ],
    rejectedClaims: [
      'That the gauges measure rain in Bamber Bridge itself: all four are 5.5 to 11.0 km away, and the page gives the distances.',
      'That the 08:30 table describes how wet the town is: it depends on our 30-minute joining rule and on suspect readings removed.',
      'Any flood or storm history for the area: not used.',
      'Directions of the gauges from the town: only straight-line distances are given.',
      'Suburbs whose nearest postcode is outside the BUA (Lostock Hall not listed as a suburban area; Gregson Lane, Higher Walton, Whittle-le-Woods in other BUAs): left out.',
      'Sterling prices: none.'
    ]
  }
};
