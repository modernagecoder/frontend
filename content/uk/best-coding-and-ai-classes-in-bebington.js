'use strict';
// Bebington (cg- town page, UK cluster Phase 10, towns band B, row 485). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: where exactly on the map is something
// clustered, and how much does the answer depend on the settings? (Getis-Ord Gi* local hot spot statistic; sensitivity
// to the neighbourhood size; why a floor at zero hides cold spots; checking the 1.96 rule by shuffling).
// Data (read 30 September 2026): Nomis Census 2021 TS044 accommodation type (NM_2062_1, category 4 "in a purpose-built
// block of flats or tenement") for all 1,080 output areas in Wirral (E08000015): 143,257 households, 16,988 in
// purpose-built flats; 402 areas have none. ONS OA December 2021 population-weighted centroids; ONS OA21 to BUA22 lookup:
// 195 OAs in the Bebington built-up area (25,073 households, 1,954 in purpose-built flats).
// Our run (scratchpad bbt/gi.py): Gi* on each area's flat share, neighbourhood = the area plus its K closest areas by
// centroid. Areas with z above 1.96 are "hot", below -1.96 "cold". K=4: 94 hot, 0 cold; Bebington 3 hot. K=8: 114 hot
// (Birkenhead 78, Wallasey 24, West Kirby 8, Hoylake 3, Heswall 1), 0 cold (lowest z -1.95); Bebington 0 hot, 0 cold;
// 67 above 2.58; 22 above 4.07 (the two-sided 5% level shared across 1,080 tests); 24 of the 114 have an own share below
// the borough average and 5 have no flats at all. K=16: 115 hot, 98 cold; Bebington 1 hot, 13 cold. Shuffling the 1,080
// shares among the areas 200 times (seed 2026), K=8: 43.2 "hot" on average, at most 80, never any cold.
// Lesson family: Getis-Ord Gi* / local hot spot analysis. Screened: "Getis-Ord", "hot spot" 0 hits. Ellesmere Port uses
// global Moran's I for leakage (one number for the whole map); this is the local, per-area statistic.
// Place facts: ONS 2021 BUAs (published): Bebington 57,600; Heswall 29,075 (Birkenhead 109,835 and Wallasey 85,610 are
// registered by their own pages). postcodes.io suburban areas whose nearest OA centroid lies in the Bebington BUA (our
// check): Higher Bebington, Lower Bebington, Port Sunlight, New Ferry, Spital, Bromborough, Eastham, Raby Mere,
// Bromborough Pool. Dacre Hill and Rock Ferry fall in the Birkenhead BUA and are not claimed.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BEBINGTON', label: 'Bebington', blurb: 'Coding and AI classes for Bebington, with a mapping project that finds hot spots and then asks how far to trust them.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-bebington',
  code: 'bbt',
  accent: '#2A6B1A',
  accentRationale: 'Bebington: a leaf green (6.16:1 contrast), hand-picked and unused elsewhere',
  pageType: 'city',
  place: {
    name: 'Bebington',
    eyebrow: 'Bebington, Wirral, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Merseyside' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Merseyside', href: '/coding-classes-in-merseyside' },
    { label: 'Birkenhead', href: '/best-coding-and-ai-classes-in-birkenhead' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bebington, England',
  title: 'Coding and AI Classes in Bebington, Wirral | Python, 6 to 67',
  description: 'Coding, AI, Python and vibe coding lessons live online for Bebington, Port Sunlight, New Ferry, Spital and Bromborough, for ages 6 to 67. First lesson free.',
  ogDescription: 'Coding and AI classes for Bebington, with a Census mapping project that finds 114 hot spots across Wirral and then tests which of them survive a change of settings.',
  twitterDescription: 'Bebington coding, AI, Python and vibe coding classes, live online, ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Bebington',
    description: 'Live online coding, AI, Python, vibe coding and maths lessons for children, teenagers and adults in Bebington and across Wirral.'
  },

  h1: 'Coding and AI classes in Bebington',
  capsuleQ: 'Which coding and AI classes are the best fit for Bebington learners?',
  capsule: 'In the ONS figures for the 2021 census, the Bebington built-up area on Wirral has 57,600 residents. It takes in Higher Bebington, Lower Bebington, Port Sunlight, New Ferry, Spital, Bromborough and Eastham, all recorded as suburbs. Our tutors, who work from India, teach coding, AI, Python, vibe coding and maths on live video to learners aged six to 67, either one-to-one or in a class of five to ten people at a shared level. The teaching starts with how to question a result, and only then moves to the tools that produce results. We give the first lesson free and end it by naming a course. The monthly price after that is USD 100 for a group place and USD 150 for private lessons. The Bebington project maps one Census measure across all 1,080 small areas of Wirral, marks the statistical hot spots, and then changes one setting to see which of them are still there.',
  lead: 'A coloured map makes clusters look obvious, and the eye is easily fooled. The Getis-Ord Gi* statistic, usually said "G-i-star", is a standard way to check. For each small area it adds up the values in that area and its neighbours and asks whether the total is higher or lower than you would expect if values were scattered without pattern. A high score marks a hot spot and a low one a cold spot. It is a few lines of Python. The interesting part comes afterwards, when the learner discovers that the map of hot spots depends on choices nobody mentioned: how many neighbours count, where the threshold sits, and whether the data can even go low enough to be cold.',
  wa: 'Hello Modern Age Coders, we are in Bebington and would like a free coding or AI lesson.',

  picks: {
    eyebrow: 'Bebington course picks',
    h2: 'Coding, thinking and AI courses for Bebington',
    intro: 'Four courses, matched to age. The first live lesson of any of them is free, and we take no card details for it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'A course in how to think: patterns on a grid, neighbours and what counts as unusual.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'Python and early AI ideas for children, with vibe coding used as a drafting aid.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning with real data, including maps, neighbours and statistical tests.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the ground up to spatial analysis and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bebington and Wirral',
      h2: 'Bebington, Port Sunlight, New Ferry, Spital and Bromborough',
      intro: 'How the ONS sizes Bebington, and which recorded suburbs it contains.',
      body: [
        { kind: 'table', caption: 'Two ONS built-up areas on Wirral, residents at the 2021 census', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Bebington', '57,600'],
          ['Heswall', '29,075']
        ] },
        { kind: 'p', text: 'Both numbers are ONS publications in their own right and are not added. The Bebington built-up area covers more than the name suggests: postcodes.io lists Higher Bebington, Lower Bebington, Port Sunlight, New Ferry, Spital, Bromborough, Eastham, Raby Mere and Bromborough Pool as suburban areas, and the Census output area closest to each is assigned to Bebington in the ONS lookup. Dacre Hill and Rock Ferry, by the same test, belong to Birkenhead. Wirral schools teach England\'s national curriculum to GCSE and A level, and we keep lessons clear of the holiday weeks you give us.' },
        { kind: 'callout', h3: 'Wirral, Merseyside and our method', p: '<a class="cg-inline-link" href="/best-coding-and-ai-classes-in-birkenhead">Birkenhead</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-wallasey">Wallasey</a> have pages of their own, and there are wider ones for <a class="cg-inline-link" href="/coding-classes-in-merseyside">Merseyside</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>. Our approach is described on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bebington project',
      h2: 'Getis-Ord Gi*: finding hot spots, then doubting them',
      intro: 'One measure, 1,080 areas, three neighbourhood sizes and a shuffle.',
      body: [
        { kind: 'p', text: 'The measure is deliberately plain: the share of households in each Census output area that live in a purpose-built block of flats. Wirral has 1,080 output areas and 143,257 households, of which 16,988 are in such flats. The share is very uneven, and 402 areas have no purpose-built flats at all. Using the ONS centre point of every area, the program finds each area\'s closest neighbours and computes Gi* for the area and those neighbours together. The usual convention calls a score above 1.96 a hot spot and a score below minus 1.96 a cold spot. The learner runs it with 4, 8 and 16 neighbours.' },
        { kind: 'table', caption: 'Hot and cold spots for the share of households in purpose-built flats, by neighbourhood size (our Python run on Census 2021 data)', head: ['Neighbours used', 'Hot spots in Wirral', 'Cold spots in Wirral', 'Of those, in the Bebington built-up area'], rows: [
          ['4', '94', '0', '3 hot, 0 cold'],
          ['8', '114', '0', '0 hot, 0 cold'],
          ['16', '115', '98', '1 hot, 13 cold']
        ] },
        { kind: 'p', text: 'With eight neighbours there are 114 hot spots: 78 in the Birkenhead built-up area, 24 in Wallasey, 8 in West Kirby, 3 in Hoylake and 1 in Heswall. None of Bebington\'s 195 areas is among them. Yet with four neighbours Bebington has three, and with 16 it has 13 cold spots that did not exist a moment earlier. The reason for the missing cold spots is a floor. A share cannot fall below zero, and with a borough average of about 11%, nine areas of zero are not far enough below it to cross the line; seventeen can be. Anyone shown only the middle row would come away with a different picture of Bebington from anyone shown the row beneath it.' },
        { kind: 'p', text: 'Then comes the check that matters most. The learner shuffles the 1,080 shares among the areas at random, which destroys any real geography, and runs the eight-neighbour test again, 200 times. On average 43.2 areas still come out "hot", and in one shuffle 80 do. So the 1.96 rule, which assumes bell-shaped data, overstates badly on a lopsided measure like this one. The real map\'s 114 is well beyond what shuffling produces, so the clustering is genuine, but not every one of the 114 is. Raise the bar to allow for making 1,080 tests at once and 22 remain. And 24 of the 114 are areas whose own share is below average, five of them with no flats at all: they are hot because of their neighbours.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Colour a grid of numbers, circle where big numbers bunch together, then shuffle the numbers and look again.' },
          { h3: 'Ages 11 to 15', p: 'In Python, total each square with its neighbours and rank the totals to find the hottest patch.' },
          { h3: 'Ages 15 and up', p: 'Compute Gi* for 1,080 real areas, vary the neighbour count and build the shuffle test.' }
        ] },
        { kind: 'callout', h3: 'Data and licence', p: 'Household counts are from the Office for National Statistics Census 2021 (table TS044) via Nomis, and centre points and lookups are from the ONS Open Geography Portal, under the Open Government Licence. The statistic, the shuffles and the counts of hot spots are our own working. We describe where flats are concentrated and make no claim about why.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Maps, settings and AI',
      h2: 'What hot spot analysis teaches about vibe coding and AI agents',
      intro: 'Every analysis has settings. The honest ones show them.',
      body: [
        { kind: 'table', caption: 'From the Wirral hot spot map to AI-made analysis', head: ['In the hot spot project', 'When an AI produces a finding'], rows: [
          ['Bebington: 3, 0 or 1 hot spots by setting', 'Ask which defaults were used and rerun with others'],
          ['No cold spots possible with 8 neighbours', 'Check whether the method could ever have said "low"'],
          ['Shuffled data still gave 43.2 hot areas', 'Compare against what pure chance produces'],
          ['22 of 114 survived a stricter bar', 'Many tests at once need a higher threshold'],
          ['24 hot areas were below average themselves', 'Read what the label means before using it']
        ] },
        { kind: 'p', text: 'Give an AI tool a table of areas and the instruction "find the hot spots" and a confident map comes back, built on a neighbour count and a threshold that it picked without saying so. In vibe coding the learner directs and the AI writes; our Bebington students learn to direct the doubt as well, by asking for the shuffle test and the alternative settings in the same breath as the map. With AI agents the stakes rise, because an agent may act on a hot spot list, sending effort to the 114 when only 22 are solid. We start learners on agents when they can code in Python unaided, generally at sixteen plus, and Copilot Studio agents are reserved for private lessons. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> for the fuller picture.' },
        { kind: 'p', text: 'The ONS, Nomis and postcodes.io supplied open data and nothing else; they have not seen, checked or backed this page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'From coloured grids to tested maps',
    intro: 'The year groups are a starting guess, refined in the free lesson.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Patterns, neighbours and asking "could this be chance?"', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and vibe coding for kids', p: 'First programs, some drafted with AI, all tested by the child.', courses: ['python-ai-kids-masterclass', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev'] },
      { band: 'Years 9 to 13', h3: 'Data and machine learning', p: 'Real tables, maps and tests, in parallel with GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Python and statistics', p: 'Programming, inference and agents, at a working pace.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and spatial data',
    h2: 'What is hot spot analysis, and what does the Getis-Ord Gi* statistic measure?',
    intro: 'Hot spot analysis finds places where high or low values cluster on a map, and the Getis-Ord Gi* statistic measures, for each area, how far the total of that area and its neighbours sits above or below what a patternless spread of values would give.',
    p1: 'For the share of households in purpose-built flats across Wirral\'s 1,080 Census areas, Gi* with eight neighbours marks 114 hot spots and none in Bebington, but 16 neighbours gives Bebington 13 cold spots, and shuffled data still yields 43.2 false hot spots on average.',
    p2: 'A learner who has watched the map change asks for the settings and the chance baseline before accepting any AI-drawn cluster.',
    closer: 'Bebington teenagers who can build the test and then try to break it are ready for a world full of machine-made maps, and they get there by writing code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Arrangements',
    h2: 'Port Sunlight, Spital and Eastham, online',
    intro: 'Any computer with a keyboard will do, given an internet connection that handles video calls.',
    cells: [
      { h3: 'Doing, not watching', p: 'Learners share their screen and write each line themselves, with the tutor asking why at every turn.' },
      { h3: 'Level before content', p: 'We use the free lesson to see what the learner knows, and take note of the exam board if there is one.' },
      { h3: 'Nothing to pay at first', p: 'The first lesson is free and you come away with our course choice.' },
      { h3: 'Even groups', p: 'A class has five to ten UK learners, grouped by level, not by postcode.' },
      { h3: 'Two per week', p: 'Lessons stop for half terms and longer holidays.' },
      { h3: 'Clock changes handled', p: 'Your weekly hour is fixed in UK time; our tutors do the adjusting.' }
    ],
    spec: { title: 'Why we teach by video', p: 'Grouping by level only works with a large pool of learners. One borough does not hold enough at each stage on each evening, so we draw classes from the whole UK.' }
  },

  fees: {
    h2: 'Bebington fees',
    intro: 'For Bebington we use the international price list that covers every country but India.',
    first: 'An entire lesson for free, closing with a course recommendation.',
    group: 'Close to eight live lessons monthly, taught in a small class.',
    private: 'Close to eight live lessons monthly, taught one-to-one.',
    closer: 'Fees are quoted and charged in US dollars, never in sterling. No invoice is raised until the trial lesson has produced an agreed course and time. For holidays, missed sessions and moving between formats, see the pricing page.'
  },

  reviewsH2: 'Reviews on Google from Wirral, Merseyside and other UK families',

  book: {
    h2: 'Book a free Bebington lesson',
    intro: 'An age or school year and one interest will do. For the trial we may colour and shuffle a grid, build a Scratch game with AI help, write first Python, or total up neighbours on a real map.',
    success: 'Thank you. Your Bebington request is in.'
  },

  faq: {
    h2: 'Bebington questions',
    intro: 'Hot spots, the Wirral project, vibe coding, agents and costs.',
    items: [
      { q: 'What is the population of Bebington?', a: 'The ONS published 57,600 residents for the Bebington built-up area at the 2021 census.' },
      { q: 'Can I find coding and AI classes in Bebington?', a: 'Yes. We teach by live video, so anyone aged 6 to 67 in Port Sunlight, New Ferry, Spital, Bromborough, Eastham or elsewhere on Wirral can take part.' },
      { q: 'What is a hot spot in statistics?', a: 'An area whose value, taken together with its neighbours, is higher than a patternless spread would give. It describes a neighbourhood, so an area can be "hot" while its own value is low.' },
      { q: 'Why do hot spot results change with the number of neighbours?', a: 'Because the statistic is a total over a neighbourhood, and a bigger neighbourhood averages over more ground. For Wirral, 8 neighbours gave no cold spots and 16 gave 98.' },
      { q: 'What is the Bebington project?', a: 'Computing the Getis-Ord Gi* statistic in Python for 1,080 Wirral Census areas, then testing the result with three neighbourhood sizes and 200 random shuffles.' },
      { q: 'How is vibe coding used?', a: 'As a way of drafting: the learner describes the program, an AI writes a version, and the learner checks and improves it.' },
      { q: 'What is the right time to start AI agents?', a: 'When the learner can code in Python unaided, which is generally at sixteen or later. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Is there support for GCSE and A level?', a: 'Yes for computer science and maths content, taught so that it is understood. We never promise a grade.' },
      { q: 'What will lessons cost me?', a: 'The first lesson costs nothing. A group place is USD 100 a month and private lessons are USD 150 a month from then on.' },
      { q: 'Do lessons pause at half term?', a: 'Yes, and for the longer holidays too, on the dates you send us.' }
    ]
  },

  next: {
    eyebrow: 'Other pages',
    h2: 'More Wirral and Merseyside pages',
    html: 'Different towns, different projects: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-birkenhead">Birkenhead</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-wallasey">Wallasey</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-ellesmere-port">Ellesmere Port</a> and <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has the complete list.',
    waLabel: 'Message on WhatsApp'
  },

  footerHeading: 'Bebington and Wirral',
  footerPlaces: [
    { href: '/coding-classes-in-merseyside', label: 'Merseyside' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bbt .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-bbt .cg-hero h1 { font-weight: 740; letter-spacing: -0.024em; line-height: 1.06; }
.cg-root.cg-bbt .cg-capsule { border: 1px solid var(--cg-accent); border-radius: 12px; padding: 1.1rem 1.2rem; }
.cg-root.cg-bbt .cg-eyebrow { letter-spacing: 0.13em; font-weight: 680; text-transform: uppercase; }
.cg-root.cg-bbt .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.021em; }
.cg-root.cg-bbt .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 550; line-height: 1.4; }
.cg-root.cg-bbt .cg-table td { font-variant-numeric: tabular-nums; padding-block: 0.65rem; }
.cg-root.cg-bbt .cg-table th { font-size: 0.81rem; font-weight: 700; border-bottom: 1px solid var(--cg-accent); }
.cg-root.cg-bbt .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-bbt .cg-callout { border-left-width: 4px; border-radius: 12px; }
`,

  dossier: {
    curriculumAuthority: 'Wirral (E08000015). ONS 2021 BUAs (published): Bebington 57,600; Heswall 29,075. postcodes.io suburban areas (nearest OA centroid in the Bebington BUA, our check): Higher Bebington, Lower Bebington, Port Sunlight, New Ferry, Spital, Bromborough, Eastham, Raby Mere, Bromborough Pool. Dacre Hill and Rock Ferry fall in the Birkenhead BUA.',
    localProject: 'Census 2021 TS044 for 1,080 Wirral OAs: 143,257 households, 16,988 in purpose-built flats, 402 OAs with none; ONS OA PWC. Gi* on flat share, area plus K closest: K=4 94 hot / 0 cold (Bebington BUA, 195 OAs: 3 hot); K=8 114 hot (Birkenhead 78, Wallasey 24, West Kirby 8, Hoylake 3, Heswall 1) / 0 cold (min z -1.95), Bebington 0; 67 above 2.58; 22 above 4.07; 24 hot with own share below mean, 5 with zero; K=16 115 hot / 98 cold, Bebington 1 hot 13 cold. 200 shuffles at K=8: mean 43.2 hot, max 80. Lesson family: Getis-Ord Gi* hot spot analysis.',
    requiredMentions: [
      'Getis-Ord',
      'hot spot',
      '57,600',
      '143,257',
      '16,988',
      '1,080',
      'Port Sunlight',
      'New Ferry',
      'Higher Bebington',
      'Bromborough'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS044 accommodation type at output area level via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Output Areas (December 2021) population-weighted centroids and OA to built-up area lookup, Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: suburban areas on Wirral.', url: 'https://api.postcodes.io/places?q=Port%20Sunlight' }
    ],
    rejectedClaims: [
      'Why flats cluster where they do: no cause claimed.',
      'That Bebington has no hot spots: true at 8 neighbours only; 3 at 4 neighbours and 1 at 16, all stated.',
      'Port Sunlight village history, soap works or gallery: not read from a source; not claimed.',
      'Dacre Hill and Rock Ferry as Bebington suburbs: their closest output areas are in the Birkenhead built-up area.',
      'Sum of the Wirral built-up areas: not added.',
      'Exam results, named schools and sterling prices: none.'
    ]
  }
};
