'use strict';
// Watford (cg- town page, UK cluster Phase 8, towns band A, row 317). Slug carries the searched terms (coding, AI) per the
// owner's 2026-09-27 instruction. Spine: after a fall of 80 per cent, how far is back to normal? Data (downloaded raw 27
// September 2026 from the Office of Rail and Road data portal): Table 1415a, time series of passenger entries and exits,
// April 1997 to March 2025, local authority column "Watford"; Table 1410, April 2024 to March 2025.
// Watford Junction (WFJ) entries and exits: 2018-19 8,460,154; 2019-20 8,436,358; 2020-21 1,680,292; 2021-22 4,127,024;
// 2022-23 5,536,096; 2023-24 6,474,842; 2024-25 6,940,122 (1997-98 3,210,956). Table 1410 (2024-25): WFJ rank 70, season
// tickets 559,704 (8.1 per cent of 6,940,122), interchanges 381,822, main origin or destination London Euston, 3,543,406
// journeys. Watford High Street 2019-20 1,298,018, 2024-25 1,363,368; Bushey 1,478,460 -> 1,225,400; Watford North 102,206 ->
// 64,798.
// Our sums: index with 2019-20 = 100: WFJ 2020-21 19.9, 2021-22 48.9, 2022-23 65.6, 2023-24 76.7, 2024-25 82.3. Fall 80.1
// per cent; rise needed to recover 402.1 per cent; actual rise 2020-21 to 2024-25 313.0 per cent; net change 2019-20 to
// 2024-25 -17.7 per cent. Slip: adding percentages (-80.1 + 313.0 = +232.9) instead of multiplying factors (0.199 x 4.130
// = 0.823). 2024-25 index: High Street 105.0, Bushey 82.9, North 63.4.
// Lesson family: index numbers (base = 100) and the asymmetry of percentage falls and rises; screened (index number,
// rebased, percentage fall, needs a rise: 0 hits).
// Place facts: Nomis Census 2021 TS007A, Watford E07000103: total 102,243; under 5 6,528 (6.4%; England 5.4%); 5 to 9 6,836
// (6.7%; 5.9%); 10 to 14 6,711 (6.6%; 6.0%); 30 to 34 8,819 (8.6%; 7.0%); 35 to 39 8,974 (8.8%; 6.7%); 40 to 44 8,342 (8.2%;
// 6.3%); 65 to 69 3,614 (3.5%; 4.9%); 85+ 1,799 (1.8%; 2.4%). ONS 2021 BUA Watford 131,325 (crosses the borough; 101,878
// inside by our OA sum). Bands never summed. No schools named.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WATFORD', label: 'Watford', blurb: 'Coding and AI classes for Watford families, with a project on how far a railway station has recovered since 2020.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-watford',
  code: 'wat',
  accent: '#4C1B35',
  accentRationale: 'Watford: a deep claret from the solver (11.17:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Watford',
    eyebrow: 'Watford, Hertfordshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hertfordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Hertfordshire', href: '/coding-classes-in-hertfordshire' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Watford, England',
  title: 'Coding and AI Classes in Watford | Online Python, Ages 6 to 67',
  description: 'Online coding, AI, Python and programming classes for Watford children, teens and adults, taught live in small groups or one-to-one. First lesson free.',
  ogDescription: 'Live online coding, AI and Python classes for Watford, and a project on how far Watford Junction has come back since its passenger numbers fell by 80 per cent.',
  twitterDescription: 'Watford coding, AI and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding, AI and Python Classes for Watford',
    description: 'Online coding, AI, Python programming, data and mathematics for children, teenagers and adults in Watford, placed by level and taught live in English.'
  },

  h1: 'Coding and AI classes in Watford',
  capsuleQ: 'What are the best coding and AI classes in Watford?',
  capsule: 'Watford had 102,243 residents at the 2021 census, with far more parents of school-age children than average: people aged 35 to 39 made up 8.8 per cent of residents against 6.7 per cent in England, and children aged 5 to 9 made up 6.7 against 5.9. For those families we teach coding, AI, Python programming and maths, live online, to anyone from 6 to 67. Lessons run one-to-one or in small classes of five to ten learners at the same level, and our teachers work from India. The opening lesson costs nothing and picks the right course. The Watford project reads a decade of railway numbers. Continuing costs USD 100 a month in a group or USD 150 a month for private tuition.',
  lead: 'The Office of Rail and Road publishes how many times people enter or leave every station in Great Britain each year. At Watford Junction the count was 8,436,358 in the year to March 2020. The next year it collapsed to 1,680,292, a fall of about 80 per cent. By the year to March 2025 it had climbed back to 6,940,122, more than four times the low point. So has Watford Junction recovered? It sounds as if a rise of over 300 per cent must have wiped out a fall of 80. It has not, and the reason is one of the most useful ideas in handling data: percentages of different starting points cannot simply be added. This page\'s project turns the numbers into index values in Python and shows why.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Watford.',

  picks: {
    eyebrow: 'Course picks for Watford',
    h2: 'Popular first courses in Watford',
    intro: 'Choose by what the learner wants to build. Every course begins with one free live lesson, and no card details are needed.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding for the youngest, with trains, timetables and simple games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Python programming and first AI projects that work with real numbers.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python to GCSE depth and beyond, including data files and the index project.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Python for data analysis, from spreadsheets to clear charts for work.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Watford today',
      h2: 'A borough of young families',
      intro: 'Numbers from the 2021 census age table TS007A on Nomis, quoted band by band and never totalled.',
      body: [
        { kind: 'table', caption: 'Watford against England, selected ages, Census 2021 TS007A', head: ['Ages', 'Watford', 'Watford share', 'England share'], rows: [
          ['Under 5', '6,528', '6.4%', '5.4%'],
          ['5 to 9', '6,836', '6.7%', '5.9%'],
          ['10 to 14', '6,711', '6.6%', '6.0%'],
          ['30 to 34', '8,819', '8.6%', '7.0%'],
          ['35 to 39', '8,974', '8.8%', '6.7%'],
          ['85 and over', '1,799', '1.8%', '2.4%']
        ] },
        { kind: 'p', text: 'Parents in their thirties and early forties, with young children, stand out most. The Watford built-up area as ONS measures it, 131,325 people, reaches beyond the borough. Local schools teach the national curriculum for England, from Reception to Year 13, and we plan around the holiday dates your family gives us.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> page lists every page in the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Watford project',
      h2: 'Down 80 per cent, up 313 per cent: back to normal?',
      intro: 'Index numbers put every year on the same yardstick.',
      body: [
        { kind: 'p', text: 'An index number sets one chosen year to 100 and expresses every other year relative to it. The learner reads Watford Junction\'s yearly entries and exits from the regulator\'s table, picks the year to March 2020 as the base, divides every year by it and multiplies by 100. Python makes this a one-line list comprehension, and the resulting column reads like a recovery chart.' },
        { kind: 'table', caption: 'Watford Junction entries and exits, Office of Rail and Road Table 1415a, with our index (year to March 2020 = 100)', head: ['Year to March', 'Entries and exits', 'Index', 'Reading'], rows: [
          ['2020', '8,436,358', '100.0', 'The base year'],
          ['2021', '1,680,292', '19.9', 'A fall of about 80 per cent'],
          ['2022', '4,127,024', '48.9', 'Half way back'],
          ['2023', '5,536,096', '65.6', ''],
          ['2024', '6,474,842', '76.7', ''],
          ['2025', '6,940,122', '82.3', 'Still about 18 per cent below']
        ] },
        { kind: 'p', text: 'The index tells the true story at a glance: 82.3 means the station handled about 82 per cent of its pre-2020 traffic. Here is why percentages mislead. A fall of 80 per cent leaves a fifth of the traffic, and getting back from a fifth to the whole needs a rise of about 400 per cent, not 80. The actual rise from the low point, 313 per cent, is huge but still short. Add the two percentages, minus 80 plus 313, and you get a nonsense gain of 233 per cent; multiply the factors, 0.199 times 4.13, and you get the correct 0.823.' },
        { kind: 'p', text: 'The same table shows that not every Watford station moved alike. Watford High Street reached an index of 105.0 in the year to March 2025, above its old level; Bushey reached 82.9 and Watford North 63.4. The regulator\'s single-year table adds a clue for Watford Junction: season tickets made up only about 8 per cent of its journeys that year. The learner writes a test that an index series always returns exactly 100 at its base year, and that chaining two percentage changes by multiplication gives the same answer as comparing the end points directly.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Turn a set of scores into index numbers with 100 as the start, then chart them in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Read the station numbers into Python, build the index column, and spot which years recovered fastest.' },
          { h3: 'Ages 15 and up', p: 'Prove why falls and rises are not symmetric, and test multiplication against adding percentages.' }
        ] },
        { kind: 'callout', h3: 'Regulator figures, our index', p: 'Every station count comes from the Office of Rail and Road\'s published tables. The index values and percentages are our calculations. The counts are the regulator\'s estimates of ticketed journeys, not turnstile totals.' }
      ]
    },
    {
      id: 'why-the-railway', tint: 'deep', eyebrow: 'Why the railway',
      h2: 'Watford\'s busiest station',
      intro: 'What the regulator\'s 2024-25 table shows for Watford Junction.',
      body: [
        { kind: 'table', caption: 'Watford Junction, Office of Rail and Road Table 1410, April 2024 to March 2025', head: ['Measure', 'Value'], rows: [
          ['Entries and exits', '6,940,122'],
          ['Rank among Great Britain stations', '70'],
          ['Season-ticket entries and exits', '559,704'],
          ['Interchanges', '381,822'],
          ['Main origin or destination', 'London Euston, 3,543,406 journeys'],
          ['Peak in the time series', '8,460,154 in the year to March 2019']
        ] },
        { kind: 'p', text: 'Index numbers are how economists report prices, how businesses compare sales with last year, and how dashboards show recovery. Every AI and data role meets them. A Watford learner who understands why a 313 per cent rise does not cancel an 80 per cent fall will read every headline percentage with sharper eyes.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the Office of Rail and Road and the Office for National Statistics. Their tables are theirs; our index and any mistake in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From block games to data and AI',
    intro: 'Year groups are a rough guide; the trial lesson decides.',
    cols: [
      { band: 'Years 1 to 4', h3: 'First coding', p: 'Block coding with games, patterns and simple charts.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and AI basics', p: 'Typed Python, percentages and first AI projects.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Data and programming', p: 'Python programming, statistics and machine learning alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Skills for work', p: 'Adult Python, data analysis and practical AI.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and percentages',
    h2: 'An AI can quote a recovery figure. Has it multiplied or added?',
    intro: 'Chained percentages are among the easiest things to get confidently wrong.',
    p1: 'Ask a chatbot whether a station, shop or company has recovered and it may combine a fall and a rise by adding their percentages. The result reads smoothly and can be wrong by hundreds of per cent.',
    p2: 'A Watford learner who has turned the numbers into an index knows to check any recovery claim against the base year.',
    closer: 'Checking a recovery claim against its base year is a strong reason for a Watford teenager to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'Watford homes, live online classes',
    intro: 'Anywhere in the borough can join by video.',
    cells: [
      { h3: 'Your own keyboard', p: 'Learners do the typing themselves while the tutor watches on the shared screen and offers hints.' },
      { h3: 'Placed by year', p: 'A Year 3 or a Year 12 in Watford starts where their school year and the trial suggest, with each exam board\'s names.' },
      { h3: 'Trial at no cost', p: 'The opening lesson is free and ends with an honest course suggestion.' },
      { h3: 'Small level groups', p: 'Classes hold five to ten learners who share a level, from around the UK.' },
      { h3: 'Term-time pattern', p: 'Twice a week while schools are open; paused over holidays.' },
      { h3: 'Fixed UK time', p: 'When the clocks change, your lesson time stays the same and our teachers adjust.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five Watford learners at one level, free at the same hour, are rarely neighbours. Online classes find each learner exactly the right group.' }
  },

  fees: {
    h2: 'Fees in Watford',
    intro: 'Watford pays the same fee as every country we teach outside India.',
    first: 'A full lesson free, then a clear recommendation.',
    group: 'About eight live lessons a month with five to ten others.',
    private: 'About eight live lessons a month with a personal tutor.',
    closer: 'Everything is priced in US dollars, never sterling. Billing begins once the free lesson has fixed a course and a weekly time; the pricing page explains holidays, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Watford-area families on Google',

  book: {
    h2: 'Book a free Watford coding lesson',
    intro: 'Send an age or school year and one interest. The trial could be a Scratch train game, a first Python program, an AI project, or the station index puzzle.',
    success: 'Thank you. Your Watford request has arrived.'
  },

  faq: {
    h2: 'Watford questions',
    intro: 'The borough, the railway project and how classes run.',
    items: [
      { q: 'How many people live in Watford?', a: 'The 2021 census age table records 102,243 residents in the Borough of Watford.' },
      { q: 'Do you teach AI and Python in Watford?', a: 'Yes. We teach AI, Python programming and coding live online to Watford learners from age 6 to adults.' },
      { q: 'What is the Watford station project?', a: 'Learners turn Watford Junction\'s yearly passenger numbers into index values in Python and see why a 313 per cent rise did not undo an 80 per cent fall.' },
      { q: 'What is an index number?', a: 'A value that sets one base year to 100 and shows every other year relative to it.' },
      { q: 'Has Watford Junction recovered its passengers?', a: 'Not fully. On the regulator\'s figures it reached about 82 per cent of its pre-2020 level in the year to March 2025.' },
      { q: 'Are the classes held in Watford?', a: 'All lessons are online, so learners join from home anywhere in the borough.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, in maths and computing, teaching for understanding and never promising grades.' },
      { q: 'What ages can learn?', a: 'From six to 67.' },
      { q: 'How much are lessons?', a: 'The first lesson is free; then USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Are there lessons in school holidays?', a: 'No. Share your holiday weeks and we pause for them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More pages near Watford',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-st-albans">St Albans</a> has its own page, <a class="cg-inline-link" href="/best-coding-class-in-luton">Luton</a> follows a straw plait, and the <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire</a> page covers the county. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Watford and Hertfordshire',
  footerPlaces: [
    { href: '/coding-classes-in-hertfordshire', label: 'Hertfordshire' },
    { href: '/best-coding-class-in-st-albans', label: 'St Albans' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' }
  ],

  personalityCss: `
.cg-root.cg-wat .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-wat .cg-hero h1 { font-weight: 730; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-wat .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-wat .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wat .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-wat .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-wat .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wat .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-wat .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-wat .cg-callout { border-left-width: 5px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Watford (E07000103). Nomis Census 2021 TS007A: total 102,243; under 5 6,528 (6.4%, England 5.4%); 5 to 9 6,836 (6.7%, 5.9%); 10 to 14 6,711 (6.6%, 6.0%); 30 to 34 8,819 (8.6%, 7.0%); 35 to 39 8,974 (8.8%, 6.7%); 85+ 1,799 (1.8%, 2.4%). ONS 2021 BUA Watford 131,325. Office of Rail and Road Table 1415a entries and exits, Watford Junction: 2018-19 8,460,154; 2019-20 8,436,358; 2020-21 1,680,292; 2021-22 4,127,024; 2022-23 5,536,096; 2023-24 6,474,842; 2024-25 6,940,122. Watford High Street 1,298,018 -> 1,363,368; Bushey 1,478,460 -> 1,225,400; Watford North 102,206 -> 64,798. Table 1410 2024-25 Watford Junction: rank 70; season 559,704; interchanges 381,822; main destination London Euston 3,543,406.',
    localProject: 'Index 2019-20 = 100: 19.9, 48.9, 65.6, 76.7, 82.3. Fall 80.1%; rise needed 402.1%; actual rise 313.0%; net -17.7%. Slip: -80.1 + 313.0 = +232.9 vs factors 0.199 x 4.130 = 0.823. High Street 105.0, Bushey 82.9, North 63.4. Lesson family: index numbers and asymmetric percentage change.',
    requiredMentions: [
      'Watford Junction',
      'Watford High Street',
      'Watford North',
      'Bushey',
      'index number',
      'Office of Rail and Road',
      'Euston',
      '102,243'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Watford and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Office of Rail and Road, Table 1415 time series of passenger entries and exits by station.', url: 'https://dataportal.orr.gov.uk/statistics/usage/estimates-of-station-usage/' },
      { claim: 'Office of Rail and Road, Table 1410 passenger entries and exits by station, April 2024 to March 2025.', url: 'https://dataportal.orr.gov.uk/media/1909/table-1410-passenger-entries-and-exits-and-interchanges-by-station.csv' }
    ],
    rejectedClaims: [
      'Reasons for the slower recovery (working from home etc.): not claimed.',
      'Train service levels and timetables: not read, not claimed.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.',
      'Watford Stadium and Watford West stations: no current data, not used.'
    ]
  }
};
