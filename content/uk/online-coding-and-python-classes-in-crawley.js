'use strict';
// Crawley (cg- town page, UK cluster Phase 8, towns band A, row 333). Keyword slug per the owner's 2026-09-27 instruction.
// Spine: how many passengers does a Gatwick flight carry, on average? Anchors (read raw 27 September 2026): Civil Aviation
// Authority UK airport data 2025, monthly Table 03 (Aircraft Movements, column air_transport) and Table 09 (Terminal and
// Transit Passengers, column terminal_pax_this_period), January to December 2025, GATWICK rows; annual 2025 Table 03 1
// (GATWICK air_transport 259,391) and Table 09 (GATWICK term_pax_tp 42,769,164). Table 05 parts for December add to
// 19,499, not Table 03's 19,343, so the page uses Table 03 totals only. Location: OurAirports airports.csv (public domain)
// EGKK "London Gatwick Airport" 51.148744, -0.185739; postcodes.io nearest RH6 0PQ and RH11 0TG, both Crawley; RH6 0NP,
// Crawley.
// Our run (scratchpad crw/avg.py, 27 September 2026): Gatwick passengers per air transport movement by month, January 157.6
// (lowest) to August 177.6 (highest); mean of the 12 monthly ratios 164.13; ratio of the published annual totals 164.88.
// July 2025, 45 UK reporting airports with movements (Channel Islands and Isle of Man group excluded): unweighted mean of
// airport ratios 81.6, median 81.2, weighted by movements 150.6 (our calculation; no summed total printed); Biggin Hill 0.9,
// Gatwick 172.1, Heathrow 192.4.
// Lesson family: average of averages (mean of ratios vs ratio of totals, weighting); screened (average of averages,
// passengers per: 0 hits; Simpson hits elsewhere are a different paradox). Newham used CAA Table 09 for Holt-Winters.
// Place facts: Nomis Census 2021 TS007A, Crawley E07000226: total 118,491; under 5 7,639 (6.4%; England 5.4%); 5 to 9 8,076
// (6.8%; 5.9%); 30 to 34 9,996 (8.4%; 7.0%); 35 to 39 9,781 (8.3%; 6.7%); 65 to 69 4,632 (3.9%; 4.9%); 75 to 79 2,659 (2.2%;
// 3.6%). ONS 2021 BUA Crawley 120,550 (extends a little beyond the borough; OA sum inside 117,527).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CRAWLEY', label: 'Crawley', blurb: 'Online coding and Python classes for Crawley, with a project on Gatwick passenger numbers and why an average of averages misleads.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-crawley',
  code: 'crw',
  accent: '#32175C',
  accentRationale: 'Crawley: a night-sky runway violet (11.98:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Crawley',
    eyebrow: 'Crawley, West Sussex, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Sussex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'West Sussex', href: '/coding-classes-in-west-sussex' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Crawley, England',
  title: 'Online Coding and Python Classes in Crawley | AI, Ages 6 to 67',
  description: 'Live online coding, Python and AI classes for Crawley children, teenagers and adults aged 6 to 67, in small groups or one-to-one. The first lesson is free.',
  ogDescription: 'Online coding and Python classes for Crawley, and a Python project on Gatwick passenger data that shows why an average of averages can mislead.',
  twitterDescription: 'Crawley online coding, Python and AI classes for ages 6 to 67. First live lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Crawley',
    description: 'Online coding, Python, AI and mathematics for children, teenagers and adults in Crawley, taught live in English and matched to level.'
  },

  h1: 'Online coding and Python classes in Crawley',
  capsuleQ: 'Which are the best online coding and Python classes in Crawley?',
  capsule: 'The census of 2021 found 118,491 people living in Crawley borough; the ONS built-up area of Crawley, reaching slightly beyond the boundary, holds 120,550. It is a borough of young families: adults in their thirties make up far more of it than in England as a whole, and so do children under ten, while people over 65 are fewer. Anyone from 6 up to 67 can study coding, Python, AI or maths with our India-based tutors in real-time video lessons, privately or in a class of five to ten sharing one level. A free first lesson picks the course. The Crawley project works with Gatwick Airport\'s passenger data. Learners who stay on pay USD 100 monthly in a shared class, or USD 150 monthly for solo tuition.',
  lead: 'Gatwick Airport sits inside Crawley borough, and every month the Civil Aviation Authority publishes how many passengers passed through it and how many passenger and cargo flights, which it calls air transport movements, took off or landed. In 2025 the CAA counted 42,769,164 terminal passengers and 259,391 air transport movements at Gatwick. So how many passengers does an average Gatwick flight carry? There are two natural ways to work it out, and they do not agree. The gap is small at one airport and enormous across the country, and understanding why is one of the most useful lessons in handling data. A Crawley learner can find it in Python with twelve monthly spreadsheets.',
  wa: 'Hello Modern Age Coders, please book a free online coding or Python lesson for a Crawley learner.',

  picks: {
    eyebrow: 'Crawley course picks',
    h2: 'Courses Crawley learners start with',
    intro: 'Pick one that suits the learner\'s age. Every course begins with a free live lesson, booked without a card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with planes, timetables and counting games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'A first typed language and friendly AI experiments.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, including the Gatwick averages project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Python for adults from scratch, on to spreadsheets and data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Crawley by age',
      h2: 'Thirty-somethings and their children',
      intro: 'Census table TS007A (2021) for Crawley borough, taken from Nomis and compared with England.',
      body: [
        { kind: 'table', caption: 'Crawley borough and England, six age bands, Census 2021 TS007A', head: ['Ages', 'Crawley residents', 'Crawley %', 'England %'], rows: [
          ['Under 5', '7,639', '6.4%', '5.4%'],
          ['5 to 9', '8,076', '6.8%', '5.9%'],
          ['30 to 34', '9,996', '8.4%', '7.0%'],
          ['35 to 39', '9,781', '8.3%', '6.7%'],
          ['65 to 69', '4,632', '3.9%', '4.9%'],
          ['75 to 79', '2,659', '2.2%', '3.6%']
        ] },
        { kind: 'p', text: 'Adults in their thirties and young children stand well above the England share, and every band over 65 sits below it. Crawley has a single built-up area in the ONS figures, 120,550 people, part of which extends beyond the borough line. Local schools work to the national curriculum for England, and our calendar steps around whatever breaks you list.' },
        { kind: 'callout', h3: 'County and region', p: 'The <a class="cg-inline-link" href="/coding-classes-in-west-sussex">West Sussex</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Crawley project',
      h2: 'Passengers per flight at Gatwick',
      intro: 'A mean of ratios is not the same as a ratio of totals.',
      body: [
        { kind: 'p', text: 'The learner downloads twelve monthly files from the Civil Aviation Authority, keeping the Gatwick row of Table 03 for air transport movements and Table 09 for terminal passengers. Dividing one by the other month by month gives passengers per movement: 157.6 in January, the lowest, rising to 177.6 in August, the highest, at the summer peak. The obvious next step is to average those twelve monthly figures. Python returns 164.13.' },
        { kind: 'table', caption: 'Our Python results from CAA airport data, 2025', head: ['Calculation', 'Result', 'What it weights'], rows: [
          ['Mean of 12 monthly ratios, Gatwick', '164.13', 'Every month equally'],
          ['Annual passengers divided by annual movements, Gatwick', '164.88', 'Every flight equally'],
          ['Mean of 45 airport ratios, UK, July', '81.6', 'Every airport equally'],
          ['Median of 45 airport ratios, UK, July', '81.2', 'The middle airport'],
          ['All passengers over all movements, UK, July', '150.6', 'Every flight equally']
        ] },
        { kind: 'p', text: 'But the CAA also publishes Gatwick\'s annual totals, 42,769,164 passengers and 259,391 movements, and dividing those gives 164.88. The two answers differ because August, with more flights, should count for more than January, and a plain average of months ignores that. The average of averages treats a quiet month and a busy month as equals. At one airport the gap is under one passenger per flight, small enough that a careless program would never be caught.' },
        { kind: 'p', text: 'Across the country the same slip becomes huge. In July 2025 the CAA lists 45 UK airports with flights. Averaging their 45 ratios gives 81.6 passengers per movement, because tiny airfields count as much as Heathrow: Biggin Hill manages 0.9 passengers per movement, Gatwick 172.1 and Heathrow 192.4. Weighting each airport by its flights gives 150.6, nearly double. The learner also notes a data trap: adding up Table 05\'s three movement categories for December does not match Table 03\'s published total, so the program uses published totals and never rebuilds them from parts.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Compare the average score of two classes of different sizes with the average of every pupil together.' },
          { h3: 'Ages 11 to 15', p: 'Read the Gatwick rows into Python and compute both averages.' },
          { h3: 'Ages 15 and up', p: 'Repeat across all UK airports, explain the weighting, and write tests for both functions.' }
        ] },
        { kind: 'callout', h3: 'CAA figures, our averages', p: 'The monthly and annual figures come from the Civil Aviation Authority\'s UK airport data, and the airport position from OurAirports. The ratios and averages are our own calculations.' }
      ]
    },
    {
      id: 'gatwick', tint: 'deep', eyebrow: 'Why Gatwick',
      h2: 'An airport inside the borough',
      intro: 'Gatwick in the CAA\'s 2025 figures.',
      body: [
        { kind: 'table', caption: 'Gatwick in 2025, Civil Aviation Authority UK airport data', head: ['Figure', 'Value'], rows: [
          ['Terminal passengers, 2025', '42,769,164'],
          ['Air transport movements, 2025', '259,391'],
          ['Busiest month for passengers', 'August, 4,661,770'],
          ['Quietest month for passengers', 'January, 2,541,908'],
          ['Passengers per movement, August', '177.6'],
          ['Passengers per movement, January', '157.6']
        ] },
        { kind: 'p', text: 'Weighting is everywhere once you look. School league tables, app store star ratings, average speeds on a journey and the performance numbers software engineers quote for their servers all hide a choice between averaging groups and averaging individuals. Two honest programmers can report different "averages" from identical data. A Crawley learner who has worked through the Gatwick figures will always ask what each average weights before comparing two of them.' },
        { kind: 'p', text: 'Modern Age Coders is not connected with the Civil Aviation Authority, Gatwick Airport, OurAirports or the ONS. The figures are theirs; the averages, and any mistake in them, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages by year',
    h2: 'From class averages to real datasets',
    intro: 'Treat the year labels loosely; placement follows the free lesson.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Counting and blocks', p: 'Block coding with scores, counts and simple averages.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and tables', p: 'Lists, division and reading data files in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Statistics and AI', p: 'Weighted averages, data and AI beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data at work', p: 'Adult Python and data analysis.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and averages',
    h2: 'Does an AI know which average you need?',
    intro: 'The wrong weighting gives a confident wrong number.',
    p1: 'Ask a chatbot for the average passengers per flight across UK airports and it may average the airports, producing a figure about half the real one. The arithmetic is flawless; the question it answered is not the one asked.',
    p2: 'A Crawley learner who has compared 81.6 with 150.6 knows to ask what each average counts equally.',
    closer: 'Choosing the average that fits the question is precisely why coding still repays Crawley teenagers in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson details',
    h2: 'Across Crawley, live online',
    intro: 'Every neighbourhood in the borough joins by video.',
    cells: [
      { h3: 'Code by the student', p: 'Learners type every line; the tutor follows the shared screen and asks questions rather than taking over.' },
      { h3: 'A start that fits', p: 'Whether in Year 3 or Year 12, the starting point comes from school year plus what the trial shows, and the correct exam board is used.' },
      { h3: 'No-cost first lesson', p: 'The trial is free and ends with honest advice.' },
      { h3: 'Level-matched groups', p: 'Classes of five to ten UK learners at the same stage.' },
      { h3: 'Two lessons weekly', p: 'Twice a week in term time; holidays left free.' },
      { h3: 'Fixed hour', p: 'UK clock changes are handled by our teachers, so your time stays the same.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five Crawley learners at one stage, all free at the same hour, seldom live close together. Online groups solve it.' }
  },

  fees: {
    h2: 'Crawley fees',
    intro: 'Crawley families pay the same fee as every family outside India.',
    first: 'A full free lesson with a clear course recommendation.',
    group: 'About eight live small-group lessons a month.',
    private: 'About eight live private lessons a month.',
    closer: 'All prices are in US dollars rather than sterling. We send no invoice before the free lesson has matched the learner to a course and a regular time. Holidays, missed sessions and changing between shared and private lessons are all described on the pricing page.'
  },

  reviewsH2: 'Parents and students on Google',

  book: {
    h2: 'Book a free Crawley lesson',
    intro: 'Send an age or school year and something the learner is into. A trial could be a Scratch airport game, a first Python script, an AI project, or the Gatwick averages puzzle.',
    success: 'Thank you. Your Crawley booking request is with us.'
  },

  faq: {
    h2: 'Crawley questions',
    intro: 'The town, the Gatwick project and practical points.',
    items: [
      { q: 'What is the population of Crawley?', a: 'The 2021 census counted 118,491 in Crawley borough; the ONS gives 120,550 for the Crawley built-up area.' },
      { q: 'Can I learn coding and Python online from Crawley?', a: 'Certainly; our live coding, Python, AI and maths lessons are open to anyone in Crawley between 6 and 67.' },
      { q: 'What is the Gatwick project?', a: 'Learners use Civil Aviation Authority data to compute passengers per flight two ways and see why an average of averages differs from a ratio of totals.' },
      { q: 'What is an average of averages?', a: 'An average of group averages that ignores group size; it counts a small group as much as a large one.' },
      { q: 'Is Gatwick Airport in Crawley?', a: 'Yes. The airport\'s published position and the postcodes around it fall inside Crawley borough.' },
      { q: 'Do lessons happen in person?', a: 'No, they are live online, so anywhere in the borough works.' },
      { q: 'Can exam-year students get support?', a: 'GCSE and A level maths and computing are covered, with understanding as the target and no guarantee of any grade.' },
      { q: 'Who is eligible?', a: 'From 6 to 67, adults included.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the trial; after it, USD 100 per month buys a group place and USD 150 per month a private tutor.' },
      { q: 'Are there lessons in school holidays?', a: 'They stop for the break once you give us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Crawley',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-west-sussex">West Sussex</a> page covers the county, <a class="cg-inline-link" href="/ai-and-programming-classes-in-guildford">Guildford</a> solves a Lewis Carroll logic puzzle, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East</a> page lists the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Crawley and West Sussex',
  footerPlaces: [
    { href: '/coding-classes-in-west-sussex', label: 'West Sussex' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-crw .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.3vw, 2.7rem); }
.cg-root.cg-crw .cg-hero h1 { font-weight: 790; letter-spacing: -0.029em; line-height: 1.03; }
.cg-root.cg-crw .cg-capsule { border-left: 4px solid var(--cg-accent); border-top: 1px solid var(--cg-accent); padding: 0.8rem 0 0 1rem; }
.cg-root.cg-crw .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-crw .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.021em; }
.cg-root.cg-crw .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-crw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-crw .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; }
.cg-root.cg-crw .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.75rem; }
.cg-root.cg-crw .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Crawley (E07000226). Nomis Census 2021 TS007A: total 118,491; under 5 7,639 (6.4%, England 5.4%); 5 to 9 8,076 (6.8%, 5.9%); 30 to 34 9,996 (8.4%, 7.0%); 35 to 39 9,781 (8.3%, 6.7%); 65 to 69 4,632 (3.9%, 4.9%); 75 to 79 2,659 (2.2%, 3.6%). ONS 2021 BUA Crawley 120,550. CAA UK airport data 2025: annual Gatwick terminal passengers 42,769,164, air transport movements 259,391; monthly Tables 03 and 09 (August 4,661,770 passengers; January 2,541,908). OurAirports EGKK 51.148744, -0.185739; postcodes.io RH6 0PQ, RH11 0TG, Crawley.',
    localProject: 'Average of averages: Gatwick mean of 12 monthly ratios 164.13 vs annual ratio 164.88 (Jan 157.6, Aug 177.6); July 2025, 45 UK airports: unweighted 81.6, median 81.2, weighted 150.6; Biggin Hill 0.9, Gatwick 172.1, Heathrow 192.4. Table 05 parts (19,499) do not equal Table 03 total (19,343) for December. Lesson family: mean of ratios vs ratio of totals, weighting.',
    requiredMentions: [
      '120,550',
      '118,491',
      'Gatwick',
      '42,769,164',
      '259,391',
      '164.88',
      'average of averages',
      'Biggin Hill',
      'Civil Aviation Authority'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Crawley and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Civil Aviation Authority, UK airport data 2025, monthly and annual Tables 03 and 09.', url: 'https://www.caa.co.uk/data-and-analysis/uk-aviation-market/airports/uk-airport-data/uk-airport-data-2025/' },
      { claim: 'OurAirports open data, airports.csv, EGKK position.', url: 'https://ourairports.com/data/' }
    ],
    rejectedClaims: [
      'Runway capacity, rankings among world airports and expansion plans: not claimed.',
      'Gatwick jobs or economic impact figures: not claimed.',
      'A UK total of passengers or movements: not printed; only the weighted ratio from the 45 rows.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
