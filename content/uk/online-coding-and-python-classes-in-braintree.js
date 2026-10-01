'use strict';
// Braintree (cg- town page, UK cluster Phase 10, towns band B, row 543). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: if you only know how many people live in
// a big area, how do you guess how many live in each small part of it? (dasymetric mapping: spreading a coarse count
// by area, by postcodes, or equally; and why the naive equal split wins here).
// Data (read 30 September 2026): ONS Census 2021 TS001 usual residents (Nomis) for the seven middle layer super output
// areas (MSOAs) Braintree 007 to 013, published totals 7,451 to 10,611, and for their 196 output areas (135 of them in
// the ONS Braintree BUA), 132 to 608 residents each (median 321.5). OA to MSOA lookup: ONS OA21_LAD22_LSOA21_MSOA21.
// OA boundaries: ONS Output Areas 2021 full clipped (BFC), British National Grid; areas 1.0 ha to 1,094.2 ha. OS
// Code-Point Open 2026.3.0 (CM and CO files): 1,589 postcode points inside the 196 OAs; correlation of postcode count
// with OA population 0.37. Our run (scratchpad btr/das.py): each MSOA's published total spread over its OAs three ways.
// Mean absolute error per OA (all 196 / 135 in town): equal share 60.2 / 56.2; by postcode count 152.4 / 146.8; by
// area 307.5 / 213.5. Within 20% of the true count: equal 119 of 196 (85 of 135); postcodes 55 (35); area 28 (22).
// Worst by area: E00108436, 539.5 ha, 291 residents, estimated 5,257. Worst by postcodes: E00173988, 659.4 ha, 47
// postcodes, 451 residents, estimated 1,821. OSM building outlines were tried and dropped: only 3,906 buildings are
// mapped in a box around the town.
// Lesson family: dasymetric mapping (areal weighting vs ancillary data vs equal split; how zones were designed).
// Place facts: Braintree (E07000067) TS001 155,268. ONS 2021 BUAs (published): Braintree 43,190; Witham 27,395; Great
// Notley 7,660. postcodes.io suburban areas with nearest postcode in the Braintree BUA: Bocking, Bocking Churchstreet.
// Villages: Great Notley, Rayne, Black Notley, High Garrett, Panfield.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BRAINTREE', label: 'Braintree', blurb: 'Online coding and Python classes for Braintree in Essex, with a census project on estimating the population of small areas.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-braintree',
  code: 'btr',
  accent: '#923A56',
  accentRationale: 'Braintree: a muted rose crimson (7.09:1 contrast on white, 5.75:1 on the darkest paper tint), picked by hand under the muted-accent rule, at least 40 RGB steps from East of England pages and neighbouring rows',
  pageType: 'city',
  place: {
    name: 'Braintree',
    eyebrow: 'Braintree, Essex, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Essex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Essex', href: '/coding-classes-in-essex' },
    { label: 'Chelmsford', href: '/best-coding-class-in-chelmsford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Braintree, Essex',
  title: 'Online Coding and Python Classes in Braintree | Ages 6 to 67',
  description: 'Online coding and Python classes for Braintree, Bocking, Great Notley, Rayne and Black Notley, ages 6 to 67, with vibe coding and AI too. The first lesson is free.',
  ogDescription: 'Online coding and Python classes for Braintree, Essex, with a census project: estimating the people in 196 small areas three ways, and why the simplest guess won.',
  twitterDescription: 'Braintree, Essex: online coding, Python, AI and vibe coding on live video for ages 6 to 67, starting with a free lesson.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Braintree, Essex',
    description: 'Coding, Python, data analysis, vibe coding, AI and maths for children, teenagers and adults in Braintree and across the district, taught live online by tutors who ask how the data was made before trusting it.'
  },

  h1: 'Online coding and Python classes in Braintree',
  capsuleQ: 'Which online coding and Python classes are best for Braintree learners?',
  capsule: 'Braintree town, measured as a built-up area, was home to 43,190 people when the 2021 census was taken, out of 155,268 in the wider district of the same name. Bocking and Bocking Churchstreet are suburban areas of the town in postcode data, and Great Notley, Rayne, Black Notley, High Garrett and Panfield are villages around it. From age six to 67, Braintree learners come to us for online coding, Python, vibe coding, AI and maths; tutors in India teach them live, one-to-one or with five to ten classmates of similar ability. Python is where learners start asking how a dataset was made, which is the question that separates sound analysis from plausible nonsense. The Braintree project takes census counts for seven middle-sized areas and tries to work out how many people live in each of their 196 small areas, using land area, postcodes, or nothing at all. There is no charge for the first lesson, which ends with a course suggestion; afterwards it is USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'Suppose you know that 9,340 people live in one part of a town but you need to know how many live on each estate within it. Maybe you are planning a bus route, or checking a model\'s predictions street by street. The obvious fix is to share the total out by land area. Map makers call smarter versions of this dasymetric mapping: use extra data, such as where the buildings or postcodes are, to decide which parts of the land hold people. Braintree is a good place to test the idea, because the census publishes both the big totals and the true small-area counts, so every method can be marked. The result is a useful surprise about knowing how your data was made.',
  wa: 'Hello Modern Age Coders, I would like a free online coding or Python lesson for a learner in Braintree.',

  picks: {
    eyebrow: 'Braintree course picks',
    h2: 'Python, thinking and coding courses picked for Braintree',
    intro: 'Four options by age band. Whichever you pick, it begins with a free live lesson that needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: share out a bag of sweets among rooms of different sizes and ask which rule is fairest.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children get an AI to build a Scratch town, then check whether its people end up in the houses.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python with real tables and maps, using the Braintree census estimates as a project.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Web and Python builds made with AI help, each result marked against known answers.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The district',
      h2: 'Braintree, Witham and Great Notley',
      intro: 'Three built-up areas in the district as the ONS published them for 2021, and the places around the town.',
      body: [
        { kind: 'table', caption: 'Braintree, Witham and Great Notley as counted at the 2021 census (ONS built-up areas)', head: ['Town or village', 'Population, 2021'], rows: [
          ['Braintree', '43,190'],
          ['Witham', '27,395'],
          ['Great Notley', '7,660']
        ] },
        { kind: 'p', text: 'We quote these three ONS figures as published and never combine them; for the district as a whole the census gives 155,268. Postcode data lists Bocking and Bocking Churchstreet as suburban areas whose nearest postcode lies in the Braintree built-up area, while Great Notley has a built-up area of its own and Rayne, Black Notley, High Garrett and Panfield are listed as villages. Essex schools teach the national curriculum for England, and your holiday weeks stay free of lessons.' },
        { kind: 'callout', h3: 'Essex, the East of England and how we teach', p: 'Read about the county on <a class="cg-inline-link" href="/coding-classes-in-essex">coding classes in Essex</a> and the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a>. Our reasons for putting thinking before tools are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Braintree project',
      h2: 'Dasymetric mapping: guessing small-area populations three ways',
      intro: 'Take seven published middle-sized totals, spread each over its small areas, and mark every guess against the census.',
      body: [
        { kind: 'p', text: 'The census reports people for several sizes of area. Around Braintree, seven middle-layer areas hold between 7,451 and 10,611 residents each, and inside them sit 196 output areas, the smallest units the census publishes, holding 132 to 608 people. The learner pretends to know only the seven big totals and tries to recover the 196 small ones. Method one shares each total in proportion to land area, using the official boundaries: the areas range from 1.0 hectare to 1,094.2 hectares. Method two shares it by the number of postcodes in each area, 1,589 postcode points from the Ordnance Survey\'s open list. Method three ignores the map altogether and gives every small area an equal share.' },
        { kind: 'table', caption: 'Average error per output area, and share of the 196 areas estimated within 20% of the census count (our Python run)', head: ['Method', 'Average error (people)', 'Within 20%'], rows: [
          ['Share by land area', '307.5', '28 of 196'],
          ['Share by postcodes', '152.4', '55 of 196'],
          ['Equal share, no map at all', '60.2', '119 of 196']
        ] },
        { kind: 'p', text: 'Land area failed worst, as expected: one rural output area of 539.5 hectares, home to 291 people, was handed 5,257. Postcodes did better, because postcodes follow addresses, but not by much: their count per area matched population only loosely, with a correlation of 0.37, and one large area with 47 postcodes, which can include business addresses, was given 1,821 people instead of 451. The winner was the method with no information at all. Restricting the test to the 135 output areas inside the town changed nothing: equal shares still came out ahead, 56.2 people out on average, against 146.8 by postcodes and 213.5 by area.' },
        { kind: 'p', text: 'The reason is in how output areas are drawn. The ONS builds them to hold similar numbers of people and households, within set minimum and maximum sizes, so knowing nothing but "these are output areas" already tells you each holds roughly the same number. Dasymetric mapping is powerful when zones are arbitrary, such as grid squares or areas drawn for some other purpose; here, the zones were designed around the very thing being estimated. One more lesson hides in the totals: the published counts for small areas do not add exactly to the published middle-layer figures, because the census adds small adjustments to protect privacy, so the methods spread the published totals rather than any sum of parts.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Share 100 counters among six rooms three ways, by floor size, by number of beds, and equally, and see which matches a real list.' },
          { h3: 'Ages 11 to 15', p: 'Load the Braintree tables in Python, compute each estimate, and measure the average error for every method.' },
          { h3: 'Ages 15 and up', p: 'Match postcode points to boundaries with a point-in-polygon test, then investigate why the worst estimates went wrong.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Population counts are Census 2021 table TS001 via Nomis, and boundaries and the area lookup come from the ONS Open Geography Portal, all under the Open Government Licence. Postcode points are from OS Code-Point Open, which contains Ordnance Survey data (Crown copyright and database right). Postcodes include business addresses, which is one reason they track residents loosely. The estimates and error figures are our own.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Know your data',
      h2: 'What the Braintree baseline teaches about AI',
      intro: 'Clever methods can lose to simple ones when the data was designed in a way the method ignores.',
      body: [
        { kind: 'table', caption: 'From Braintree census areas to AI practice', head: ['In the Braintree run', 'In AI practice'], rows: [
          ['Equal shares beat the map-based methods', 'Always test a simple baseline first'],
          ['Output areas were built to be similar in size', 'Learn how a dataset was collected before modelling it'],
          ['Postcodes matched people only loosely', 'A proxy is not the thing it stands in for'],
          ['Small counts did not sum to big ones', 'Published figures carry adjustments; do not add them blindly'],
          ['The census gave true answers to mark against', 'Hold back known answers to test any model']
        ] },
        { kind: 'p', text: 'Machine learning projects often go wrong in exactly this way: a sophisticated model is built, and nobody checks whether a one-line baseline does just as well. An AI assistant asked to "estimate population for each small area" will reach for area weighting or something fancier, because that is what the textbooks show. Asking how the areas were drawn, and comparing against the plain equal share, is the learner\'s job. The same check suits vibe-coded analysis of any kind. When Python has become natural, usually around sixth form, learners go on to build AI agents, and Copilot Studio agents are taught one-to-one only. We say more about <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agent courses for UK students</a> and about why learners should <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand code instead of copying it</a>.' },
        { kind: 'p', text: 'Data here comes from the Office for National Statistics, Nomis, Ordnance Survey and postcodes.io; none of them has endorsed the page, and all estimates are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Pathway',
    h2: 'From sharing sweets to census estimates',
    intro: 'A school year gives us a first guess at level, and the free lesson confirms it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Fair shares, sensible guesses and checking a guess against the facts.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small projects built with an AI helper, then tested with real numbers.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and data', p: 'Tables, maps and estimates, alongside GCSE and A level maths and computing.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Data and AI', p: 'Working Python, then data structures and generative AI.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Data and AI',
    h2: 'What is dasymetric mapping?',
    intro: 'Dasymetric mapping is a way of estimating how many people, or anything else, are in small areas by spreading a known total for a larger area according to extra data, such as land use, buildings or postcodes, instead of spreading it evenly over the ground.',
    p1: 'Estimating 196 Braintree output areas from seven published totals, sharing by land area was out by 307.5 people on average and sharing by postcodes by 152.4.',
    p2: 'A plain equal share was out by only 60.2, because the ONS designs output areas to hold similar numbers of people in the first place.',
    closer: 'Braintree teenagers who have watched the simplest guess win will always ask how a dataset was built before trusting a model, AI or otherwise. Running the numbers personally is what builds that habit, so coding remains worth learning in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'In class',
    h2: 'Bocking, Great Notley and Rayne on a live call',
    intro: 'You need a computer with a webcam and ordinary home broadband, nothing more.',
    cells: [
      { h3: 'Learner at the keys', p: 'Everything is typed by the learner on a shared screen, with the tutor asking for the reasoning behind each step.' },
      { h3: 'The trial decides the level', p: 'We see where to begin during the free session and note an exam board if there is one.' },
      { h3: 'First lesson free', p: 'No payment and no card for the trial, which ends with our course advice.' },
      { h3: 'Classmates at one level', p: 'Groups of five to ten learners at the same stage, from anywhere in the UK.' },
      { h3: 'Twice a week', p: 'Holiday weeks you share with us are left out.' },
      { h3: 'Steady all year', p: 'Our tutors absorb the clock changes, so your lesson time stays put.' }
    ],
    spec: { title: 'Why online', p: 'Grouping by level needs lots of learners. A district cannot supply enough at every stage; the UK can.' }
  },

  fees: {
    h2: 'Braintree fees',
    intro: 'Braintree learners pay our international rates, as does every country apart from India.',
    first: 'A free lesson of full length, with a suggested course at the end.',
    group: 'About eight live lessons a month in a class.',
    private: 'About eight live lessons a month with a tutor to yourself.',
    closer: 'We quote and charge in US dollars, never pounds. Billing begins only after the trial, once a course and a weekly time are agreed, and the pricing page explains holidays, absences and changing between class and private lessons.'
  },

  reviewsH2: 'What Essex families and UK learners say in Google reviews',

  book: {
    h2: 'Book a free lesson for Braintree',
    intro: 'Tell us the learner\'s age or school year and one of their interests. From that we plan the trial, which could be a fair-sharing puzzle, an AI-assisted Scratch game, some first lines of Python or a real census table.',
    success: 'Thank you. Your Braintree request has arrived and we will be in touch.'
  },

  faq: {
    h2: 'Braintree questions',
    intro: 'Small-area estimates, learning Python, AI, and fees and scheduling.',
    items: [
      { q: 'How many people live in Braintree?', a: 'The ONS counted 43,190 residents in the Braintree built-up area at the 2021 census; Braintree district had 155,268.' },
      { q: 'Are there online Python classes for Braintree?', a: 'Yes. Because teaching happens on live video, anyone aged 6 to 67 in Bocking, Great Notley, Rayne, Black Notley or elsewhere nearby can join.' },
      { q: 'Do I need to be good at maths to learn Python?', a: 'No. Basic arithmetic is enough to start, and in our experience many learners find their maths improves because code gives them a reason to use it.' },
      { q: 'What is an output area?', a: 'The smallest area for which census results are published in England and Wales, designed by the ONS to hold a similar, modest number of people and households.' },
      { q: 'What happens in the Braintree project?', a: 'Learners spread seven published census totals over 196 small areas in Python, by land area, by postcodes and equally, then mark each method against the true counts.' },
      { q: 'Is vibe coding part of the course?', a: 'Yes, at every age. The learner asks an AI for code and checks it, here against census counts the AI never saw.' },
      { q: 'When can learners build AI agents?', a: 'Once they write Python unaided, which is usually from sixth form or as an adult. Copilot Studio agents are one-to-one only.' },
      { q: 'Do you teach towards GCSE and A level?', a: 'We support both in computer science and maths, teaching for understanding, without promising any grade.' },
      { q: 'How much does it cost?', a: 'The first lesson is free. After that, a class place is USD 100 per month and private lessons USD 150 per month.' },
      { q: 'Do lessons stop in the school holidays?', a: 'If you like. Send the dates and we leave those weeks free.' }
    ]
  },

  next: {
    eyebrow: 'Beyond Braintree',
    h2: 'More pages for Essex and the East of England',
    html: 'Other projects are on the <a class="cg-inline-link" href="/best-coding-class-in-chelmsford">Chelmsford</a>, <a class="cg-inline-link" href="/best-coding-class-in-colchester">Colchester</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-basildon">Basildon</a> pages, with the county on <a class="cg-inline-link" href="/coding-classes-in-essex">Essex</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every town.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Braintree and Essex',
  footerPlaces: [
    { href: '/coding-classes-in-essex', label: 'Essex' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-btr .cg-hero-grid { align-items: start; gap: clamp(1.25rem, 3.6vw, 3.05rem); }
.cg-root.cg-btr .cg-hero h1 { font-weight: 710; letter-spacing: -0.02em; line-height: 1.09; }
.cg-root.cg-btr .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.85rem 0; }
.cg-root.cg-btr .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-btr .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.013em; }
.cg-root.cg-btr .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 600; }
.cg-root.cg-btr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-btr .cg-table th { font-size: 0.82rem; font-weight: 700; letter-spacing: 0.03em; }
.cg-root.cg-btr .cg-ladder-col { background: var(--cg-accent-soft); border-radius: 10px; padding: 0.8rem; }
.cg-root.cg-btr .cg-callout { border-left-width: 4px; border-radius: 12px; }
`,

  dossier: {
    curriculumAuthority: 'Braintree district (E07000067), Census 2021 TS001 usual residents 155,268. ONS 2021 BUAs (published): Braintree 43,190; Witham 27,395; Great Notley 7,660. postcodes.io: Bocking (CM7) and Bocking Churchstreet (CM7), suburban areas with nearest postcode in the Braintree BUA; Great Notley (own BUA); Rayne, Black Notley, High Garrett, Panfield (villages).',
    localProject: 'Census 2021 TS001 via Nomis: MSOAs Braintree 007 to 013 (E02004452 to E02004458), published 9,340; 7,451; 9,441; 7,948; 9,832; 10,611; 9,536. Their 196 OAs (ONS OA21_LAD22_LSOA21_MSOA21 lookup), 135 in the Braintree BUA; OA residents 132 to 608, median 321.5. Boundaries: ONS Output Areas 2021 BFC V8 in EPSG:27700; areas 1.0 to 1,094.2 ha. OS Code-Point Open 2026.3.0 (CM, CO): 1,589 postcode points in the 196 OAs; correlation with OA population 0.37. Each published MSOA total spread over its OAs. Mean absolute error per OA, all 196 / town 135: equal 60.2 / 56.2; postcodes 152.4 / 146.8; area 307.5 / 213.5. Within 20%: equal 119 / 85; postcodes 55 / 35; area 28 / 22. Worst by area E00108436 (539.5 ha, 291 residents, estimate 5,257); worst by postcodes E00173988 (659.4 ha, 47 postcodes, 451 residents, estimate 1,821). OA counts inside each MSOA do not sum exactly to its published total (disclosure control and rounding); the published MSOA totals were spread, not OA sums. OSM buildings dropped: 3,906 mapped in 51.85 to 51.92 N, 0.50 to 0.61 E. Lesson family: dasymetric mapping (areal weighting vs ancillary data vs equal-share baseline; zone design).',
    requiredMentions: [
      '155,268',
      '43,190',
      '27,395',
      'Bocking Churchstreet',
      'Black Notley',
      'High Garrett',
      'dasymetric',
      '1,589',
      '307.5',
      '5,257',
      '1,094.2'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for output areas and middle layer super output areas, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Open Geography Portal: Output Areas 2021 boundaries (BFC) and the OA21 to LSOA21 to MSOA21 lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Ordnance Survey Code-Point Open, release 2026.3.0: postcode unit points.', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'postcodes.io places: Bocking, Bocking Churchstreet and nearby villages, with the built-up area of the nearest postcode.', url: 'https://api.postcodes.io/places?q=Bocking' }
    ],
    rejectedClaims: [
      'That the 47-postcode output area is mostly business premises: not verified; stated only as a likely reason.',
      'Exact ONS minimum and maximum output area sizes: not quoted; only that OAs are designed within set limits.',
      'That dasymetric mapping never beats an equal split: rejected; the equal split wins here because output areas are designed to be similar.',
      'Silk, textile or market-town history of Braintree: not read from a source; not claimed.',
      'Rank of Braintree among district towns: not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
