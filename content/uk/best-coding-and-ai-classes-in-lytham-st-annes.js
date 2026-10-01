'use strict';
// Lytham St Annes (cg- town page, UK cluster Phase 10, towns band B, row 545). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: a map of the town has to fit a narrower
// screen; which columns of pixels can go without breaking the roads? (Seam carving: content-aware resizing by dynamic
// programming over an energy grid, against dropping evenly spaced or emptiest straight columns.)
// Data (read 1 October 2026): one Overpass query, way[building] plus way[highway] trunk to living_street in 53.730 to
// 53.775 N, 3.052 to 2.935 W, out geom. Buildings were fetched but OSM coverage is partial (2,621), so the raster uses
// roads only: 1,299 road ways, 208.6 km. Raster (scratchpad lsa/seam.py): 10 m pixels, 500 rows by 770 columns, 20,441
// road pixels (5.31%), 4 connected road pieces (8-connectivity). Energy = 3x3 mean of the road mask. Width cut by 10%,
// 20%, 30% (77, 154, 231 columns): even columns keep 90.4 / 80.1 / 70.1% of road pixels, pieces 152 / 491 / 882;
// emptiest straight columns keep 97.9 / 93.3 / 87.4%, pieces 21 / 71 / 97; seams keep 99.6 / 98.4 / 96.4%, pieces
// 11 / 19 / 36.
// Lesson family: seam carving. Screened: "seam carv" 0 hits in content/ and dossiers; claimed in claims.txt.
// Place facts: Fylde TS001 81,374. ONS 2021 BUA (published) "Lytham St Anne's" 42,695 (our OA sum 42,693).
// postcodes.io suburban areas with nearest postcode in that BUA: Lytham, Ansdell, Fairhaven, Saltcotes, St Anne's (FY8).
// "Lytham St Anne's" is a requiredMention on the Lancashire county page; printed, not listed.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'LYTHAM ST ANNES', label: 'Lytham St Annes', blurb: 'Coding and AI classes for Lytham St Annes, with a project that narrows a map of the town without breaking its roads.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-lytham-st-annes',
  code: 'lsa',
  accent: '#39579E',
  accentRationale: 'Lytham St Annes: a muted estuary blue (6.93:1 on white, 5.62:1 on the ledger beige), chosen by hand at least 40 RGB steps from every Lancashire and North West page',
  pageType: 'city',
  place: {
    name: 'Lytham St Annes',
    eyebrow: 'Lytham St Annes, Fylde, Lancashire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Lancashire' },
      { type: 'AdministrativeArea', name: 'North West England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Lancashire', href: '/coding-classes-in-lancashire' },
    { label: 'Blackpool', href: '/online-coding-and-python-classes-in-blackpool' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Lytham St Annes, Lancashire',
  title: 'Coding and AI Classes in Lytham St Annes | Ages 6 to 67',
  description: 'Coding and AI classes for Lytham, St Annes, Ansdell and Fairhaven, taught live on video to ages 6 to 67, with Python, vibe coding and AI agents. First lesson free.',
  ogDescription: 'Coding and AI classes for Lytham St Annes, with a project that shrinks a town map by dynamic programming.',
  twitterDescription: 'Coding and AI lessons for Lytham St Annes, live on video for ages 6 to 67. Try the first one free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Lytham St Annes',
    description: 'Online coding, AI, Python and maths lessons for children, teenagers and adults in Lytham St Annes and the Fylde, built on programs that work with local open data.'
  },

  h1: 'Coding and AI classes in Lytham St Annes',
  capsuleQ: 'What are the best coding and AI classes for Lytham St Annes?',
  capsule: 'The ONS built-up area it calls Lytham St Anne’s held 42,695 people at the 2021 census, and the whole borough of Fylde held 81,374. Lytham, Ansdell, Fairhaven, Saltcotes and St Anne’s are the gazetteer suburbs whose nearest postcode sits inside that built-up area. Modern Age Coders gives live video lessons there in coding, AI, Python, vibe coding and maths to people aged six to 67, taught by tutors in India, either one-to-one or in a class of five to ten at the same stage. Everything begins with a free lesson, and only after it do we suggest a course. The local project turns the roads of Lytham St Annes into a picture and asks which columns of pixels can be thrown away when the picture must get narrower. Ongoing lessons cost USD 100 a month in a group or USD 150 a month privately.',
  lead: 'Squeeze a photo into a narrower frame and one of two things happens: everything gets thinner, or the edges get chopped off. Photo tools now offer a third way, which quietly removes the dullest strip of pixels and leaves the interesting parts alone. The trick behind it is a piece of dynamic programming a teenager can write in an afternoon, and a road map of Lytham St Annes is a clear place to watch it work.',
  wa: 'Hi Modern Age Coders, could we book a free coding or AI lesson? We live in Lytham St Annes.',

  picks: {
    eyebrow: 'Suggested courses',
    h2: 'Coding and AI courses for Lytham St Annes learners',
    intro: 'A starting course for each age. Each one begins with a live lesson that is free and asks for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Learning to break a problem into steps, with puzzles, grids and pictures before any typing.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Making Scratch games with an AI assistant, then testing what it made and fixing it.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Python for images and data, including the pixel grid behind the seam project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from scratch to confident, for adults fitting study around other commitments.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'On the Fylde coast',
      h2: 'Lytham, St Anne\'s, Ansdell, Fairhaven and Saltcotes',
      intro: 'Where the numbers come from, and which names we are sure belong in the list.',
      body: [
        { kind: 'table', caption: 'Usual residents, Census 2021 (ONS)', head: ['Area', 'People'], rows: [
          ['Lytham St Anne’s built-up area', '42,695'],
          ['Fylde borough', '81,374']
        ] },
        { kind: 'p', text: 'Fylde also takes in Kirkham, Freckleton, Warton and a long list of villages, so the borough is much more than the town; neither figure should be added to the other. Adding up the census output areas that the ONS assigns to the built-up area gives 42,693, two short of the published total, which is within the rounding the ONS applies. Schools in Lytham St Annes teach the national curriculum for England, and our lessons can support GCSE computer science and later A level alongside it.' },
        { kind: 'callout', h3: 'Along the coast', p: 'Also see <a class="cg-inline-link" href="/online-coding-and-python-classes-in-blackpool">Blackpool</a>, <a class="cg-inline-link" href="/best-coding-class-in-preston">Preston</a> and <a class="cg-inline-link" href="/coding-classes-in-lancashire">the Lancashire guide</a>. Our reasons for teaching reasoning ahead of AI shortcuts are set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">think first, then use the tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The seafront map project',
      h2: 'Making a map narrower without cutting its roads',
      intro: 'A 500 by 770 pixel picture of the town, and three ways to take columns out of it.',
      body: [
        { kind: 'p', text: 'First the learner draws the town. One OpenStreetMap query returns 1,299 roads, from the A584 down to residential streets, 208.6 km of them, inside a rectangle drawn around the town. Each road is painted onto a grid of 10 metre pixels, 500 rows by 770 columns. Buildings came back too, but only 2,621 of them are mapped, far fewer than the town has, so they are left out rather than pretending the gaps are empty land. The result is a picture in which 20,441 pixels, 5.31% of the grid, are road, joined into 4 connected pieces.' },
        { kind: 'p', text: 'Now the map has to become 30% narrower. Deleting every third or so column is the obvious method. A smarter one deletes whichever straight columns hold the least road. Seam carving, published by Shai Avidan and Ariel Shamir in 2007, does something cleverer: it removes a wiggly path of pixels, one per row, where each step may move one pixel left, right or straight down. To find the cheapest such path it gives every pixel a cost, here the amount of road in the 3 by 3 square around it, then works down the rows keeping, for every pixel, the cheapest way to reach it from the top. That running total is dynamic programming. Tracing back from the cheapest pixel on the bottom row gives the seam; remove it, recompute, repeat.' },
        { kind: 'table', caption: 'Narrowing the Lytham St Annes road picture, our Python run (road pixels kept, connected road pieces)', head: ['Width removed', 'Evenly spaced columns', 'Emptiest straight columns', 'Seams'], rows: [
          ['10% (77 columns)', '90.4%, 152 pieces', '97.9%, 21 pieces', '99.6%, 11 pieces'],
          ['20% (154 columns)', '80.1%, 491 pieces', '93.3%, 71 pieces', '98.4%, 19 pieces'],
          ['30% (231 columns)', '70.1%, 882 pieces', '87.4%, 97 pieces', '96.4%, 36 pieces']
        ] },
        { kind: 'p', text: 'At 30% narrower, evenly spaced deletion throws away almost a third of the road and shatters the network from 4 pieces into 882. The emptiest straight columns do far better, because some columns of the rectangle hold little or no road, but a straight column still has to cross every road that runs east to west. Seams bend round roads, so they keep 96.4% of the road pixels and leave 36 pieces. None of the three is free: every method loses something, and the count of pieces tells the learner where.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Colour a squared grid, then find a path from top to bottom that crosses the fewest coloured squares.' },
          { h3: 'Ages 11 to 15', p: 'Store a picture as a list of lists in Python and delete a column by hand.' },
          { h3: 'Ages 15 and up', p: 'Write the dynamic programming seam finder and compare it with the two simpler methods.' }
        ] },
        { kind: 'callout', h3: 'Data and credits', p: 'Roads come from OpenStreetMap contributors under the Open Database Licence, read with one Overpass query on 1 October 2026. Seam carving is from Avidan and Shamir, ACM Transactions on Graphics, 2007. The raster, the energy rule and every count in the table are our own, and the building layer was left out because it is incomplete.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Coding in the age of AI',
      h2: 'What cutting seams teaches about AI image tools',
      intro: 'Content-aware editing looks like magic until you have written a small version yourself.',
      body: [
        { kind: 'table', caption: 'From a narrowed map to judging AI output', head: ['What the seams showed', 'The habit it builds'], rows: [
          ['Even deletion broke the roads into 882 pieces', 'Simple fixes can do the most damage'],
          ['The emptiest columns still crossed every east-west road', 'A reasonable rule can have one blind direction'],
          ['Seams kept 96.4% of road pixels, but not all', 'Clever methods still lose something; find out what'],
          ['Buildings were dropped because the data was incomplete', 'Missing data is not the same as nothing there'],
          ['Each count came from running the code', 'Measure the result instead of admiring it']
        ] },
        { kind: 'p', text: 'When an AI photo tool fills a gap or widens a picture, it is deciding what matters, much as the energy rule decided that roads matter and sea does not. Learners in Lytham St Annes practise vibe coding by asking an AI to write the seam finder, then checking its dynamic programming line by line and testing it on the town map, where a wrong step shows up as a broken road. Agent work comes later, once a learner writes Python comfortably without help, which for most means the sixth form years or adulthood; Copilot Studio agents are one-to-one only. Read more on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">why we ask learners to explain every line</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the steps towards building agents</a>.' },
        { kind: 'p', text: 'We are not connected to OpenStreetMap, the Office for National Statistics or postcodes.io. Their open data made the project possible, and the conclusions here are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From colouring grids at seven to image algorithms at seventeen',
    intro: 'Where a learner starts depends on the free lesson more than on their age.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Patterns and grids', p: 'Step-by-step thinking with squared paper, pictures and puzzles.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Games with AI help', p: 'Scratch projects built with an AI, then a first taste of Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Pixels and data', p: 'Images as grids, dynamic programming and simple machine learning.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Python, then AI', p: 'Solid Python first, then generative AI used with a critical eye.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Pictures and AI',
    h2: 'What is seam carving, and what does it reveal about AI image editing?',
    intro: 'Seam carving shrinks a picture by repeatedly removing the lowest-cost connected path of pixels, found with dynamic programming, and it reveals that content-aware editing always depends on a rule about what counts as important.',
    p1: 'Narrowing the Lytham St Annes road map by 30% kept 96.4% of road pixels with seams, 87.4% with the emptiest straight columns and 70.1% with evenly spaced ones, which left the roads in 882 pieces.',
    p2: 'A learner who has chosen an energy rule knows to ask any AI image tool what it was told to protect, and what it was free to lose.',
    closer: 'Being able to answer that question with code is what keeps young people in Lytham St Annes in charge of AI tools, and it starts with learning to program.',
    blogAnchor: 'what learning to code still gives a teenager in 2026'
  },

  delivery: {
    eyebrow: 'Lesson set-up',
    h2: 'How lessons for Lytham St Annes run',
    intro: 'All teaching is live on video. A computer with a real keyboard is needed, because writing code on a phone or tablet does not work well.',
    cells: [
      { h3: 'Learner does the typing', p: 'The tutor watches, questions and nudges; the learner writes and runs everything.' },
      { h3: 'Level before course', p: 'Our free lesson finds the level first, and a course suggestion follows from it.' },
      { h3: 'No upfront cost', p: 'The trial is unpaid and needs no card.' },
      { h3: 'Small matched groups', p: 'Between five and ten learners at one stage, drawn from around Britain.' },
      { h3: 'Roughly two a week', p: 'Around eight lessons a month in term, with Fylde holidays skipped if you ask.' },
      { h3: 'Clock changes handled', p: 'Your UK lesson time holds steady through spring and autumn.' }
    ],
    spec: { title: 'Why teach online', p: 'Matching learners by level is far easier with the whole country to draw on, and live video means nobody travels.' }
  },

  fees: {
    h2: 'Fees for Lytham St Annes learners',
    intro: 'Lytham St Annes learners pay the rate we charge everywhere outside India.',
    first: 'First lesson: free, a full session, finishing with advice on a course.',
    group: 'Group lessons, around eight each month.',
    private: 'One-to-one lessons, around eight each month.',
    closer: 'All fees are in US dollars, and we do not give sterling prices. The trial is not charged, and invoices start only after a course and a weekly time are settled. The pricing page covers holidays, missed sessions and moving between group and private lessons.'
  },

  reviewsH2: 'What Lancashire families and learners elsewhere say on Google',

  book: {
    h2: 'Book a free lesson in Lytham St Annes',
    intro: 'Say how old the learner is, or which year they are in, and what they are into. We might start with a grid puzzle, a Scratch game built with AI help, some first Python, or the seam project on the town map.',
    success: 'Thanks. We have your Lytham St Annes request.'
  },

  faq: {
    h2: 'Questions from Lytham St Annes',
    intro: 'Seam carving, coding, AI and how lessons work.',
    items: [
      { q: 'What is the population of Lytham St Annes?', a: 'The ONS counted 42,695 usual residents in the Lytham St Anne’s built-up area at the 2021 census. The whole of Fylde had 81,374.' },
      { q: 'Can learners in Lytham, St Annes and Ansdell join coding and AI classes?', a: 'Yes. Because lessons are live video calls, anyone aged 6 to 67 in Lytham, St Annes, Ansdell, Fairhaven or elsewhere in Fylde can take part.' },
      { q: 'What is a seam in seam carving?', a: 'A connected line of pixels from the top of a picture to the bottom, one pixel per row, where each step moves at most one pixel sideways. Removing it makes the picture one pixel narrower.' },
      { q: 'Why is seam carving dynamic programming?', a: 'Because the cheapest seam ending at any pixel is that pixel’s own cost plus the cheapest of the three seams ending just above it, so each row is worked out from the row before.' },
      { q: 'What did the Lytham St Annes project find?', a: 'Cutting 30% of the width, seams kept 96.4% of the road pixels and left 36 pieces, against 87.4% and 97 pieces for the emptiest straight columns and 70.1% and 882 pieces for even spacing.' },
      { q: 'What does vibe coding mean?', a: 'Asking an AI in everyday language for a program, then reading what it wrote, running it and fixing it until it truly works. We teach it together with writing Python unaided.' },
      { q: 'At what age are AI agents taught?', a: 'When a learner can already write Python on their own, typically late in secondary school or as an adult. Copilot Studio agents are private lessons only.' },
      { q: 'Is this useful for GCSE computer science?', a: 'Algorithms, data representation and images as grids of numbers are all part of GCSE and A level computer science, and the project touches each. We do not promise grades.' },
      { q: 'What are the fees?', a: 'Nothing for the first lesson; afterwards USD 100 a month in a group, or USD 150 a month for private lessons.' },
      { q: 'Do lessons stop in school holidays?', a: 'If you want them to. Share the holiday dates and we leave those weeks out.' }
    ]
  },

  next: {
    eyebrow: 'More pages',
    h2: 'Elsewhere in Lancashire and the North West',
    html: 'Nearby we also cover <a class="cg-inline-link" href="/online-coding-and-python-classes-in-blackpool">Blackpool</a>, <a class="cg-inline-link" href="/best-coding-class-in-preston">Preston</a> and <a class="cg-inline-link" href="/best-coding-class-in-lancaster">Lancaster</a>. Every other place can be reached through <a class="cg-inline-link" href="/coding-classes-in-lancashire">the Lancashire guide</a>, <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">the North West overview</a> or <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">our UK list</a>.',
    waLabel: 'Chat on WhatsApp'
  },

  footerHeading: 'Lytham St Annes and Lancashire',
  footerPlaces: [
    { href: '/coding-classes-in-lancashire', label: 'Lancashire' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-lsa .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 2.8vw, 2.3rem); }
.cg-root.cg-lsa .cg-hero h1 { font-weight: 760; letter-spacing: -0.022em; line-height: 1.09; }
.cg-root.cg-lsa .cg-capsule { border: 1px solid color-mix(in srgb, var(--cg-accent) 30%, transparent); padding: 0.85rem 1rem; border-radius: 8px; }
.cg-root.cg-lsa .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; text-transform: uppercase; font-size: 0.82rem; }
.cg-root.cg-lsa .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.015em; }
.cg-root.cg-lsa .cg-table caption { font-weight: 580; text-align: left; font-size: 0.9rem; }
.cg-root.cg-lsa .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lsa .cg-table tbody tr:nth-child(even) { background: color-mix(in srgb, var(--cg-accent) 5%, transparent); }
.cg-root.cg-lsa .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-lsa .cg-callout { border-radius: 10px; }
`,

  dossier: {
    curriculumAuthority: 'Fylde (E07000119), Census 2021 TS001 usual residents 81,374. ONS 2021 BUA (published): Lytham St Anne\'s 42,695 (our OA sum 42,693). English national curriculum, GCSE and A level. postcodes.io suburban areas with nearest postcode in that BUA: Lytham, Ansdell, Fairhaven, Saltcotes, St Anne\'s (FY8).',
    localProject: 'Seam carving on a road raster of Lytham St Annes. One Overpass query (buildings and roads, out geom), 53.730 to 53.775 N, 3.052 to 2.935 W; buildings incomplete (2,621) and not used; 1,299 road ways trunk to living_street, 208.6 km. Raster 10 m, 500 x 770, 20,441 road pixels (5.31%), 4 pieces. Energy 3x3 road mean. At 10/20/30% narrower: even columns 90.4/80.1/70.1% kept, 152/491/882 pieces; emptiest columns 97.9/93.3/87.4%, 21/71/97; seams 99.6/98.4/96.4%, 11/19/36.',
    requiredMentions: [
      '42,695',
      'Ansdell',
      'Fairhaven',
      'Saltcotes',
      'seam carving',
      '20,441 pixels',
      '882 pieces',
      '96.4% of the road pixels',
      'Avidan and Shamir'
    ],
    sources: [
      { claim: 'OpenStreetMap contributors, roads and buildings via the Overpass API, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'Avidan S. and Shamir A. (2007), Seam carving for content-aware image resizing, ACM Transactions on Graphics 26(3), article 10.', url: 'https://doi.org/10.1145/1276377.1276390' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations and output-area lookup.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for Fylde.', url: 'https://api.postcodes.io/places?q=Ansdell' }
    ],
    rejectedClaims: [
      'Building layer: OpenStreetMap coverage is partial (2,621 buildings); not used, stated on the page.',
      'That St Annes was a planned town or any history of the resort: not checked; not claimed.',
      'That the seams follow the sea or fields in particular places: not inspected pixel by pixel; not claimed.',
      'Heyhouses and Squires Gate as suburbs: no matching postcodes.io suburban area; left out.',
      'Named schools and term dates: none read or named.',
      'Sterling prices: none.'
    ]
  }
};
