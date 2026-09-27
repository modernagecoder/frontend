'use strict';
// St Helens (cg- town page, UK cluster Phase 8, towns band A, row 353). Keyword slug per the owner's 2026-09-27
// instruction. Spine: which is the borough's busiest station, and when did that really change? Anchor (read 28 September
// 2026, file cached from the ORR download): Office of Rail and Road Table 1415a, "Time series of passenger entries, exits
// and interchanges by station, Great Britain, annual data, April 1997 to March 2025" (published 4 December 2025); rows with
// "Local authority: district or unitary" = "St. Helens": ten stations. Cover sheet: "[x]" = not available ("April 2003 to
// March 2004 data when there was no data collected"); "[z]" = not applicable; "[b]" = break in time series ("From April
// 2023 to March 2024 the methodology for estimating entries and exits was improved"); the 2022-23 column heading carries
// "[b]".
// Our run (scratchpad sth/): 2024-25 entries and exits: Newton-le-Willows 1,106,560; St Helens Central 669,452; Lea Green
// 400,690; Earlestown 330,956; St Helens Junction 206,320; Rainhill 186,148; Thatto Heath 148,722; Garswood 135,728; Eccleston
// Park 74,390; Rainford 26,220; total 3,285,186; top station 33.7%, top two 54.1%, five stations reach 80%. Lea Green [z]
// until 1999-2000. Newton-le-Willows / St Helens Central ratio: 1997-98 0.417 (154,170 / 370,097); 2007-08 0.881; 2008-09
// 0.824 (both jump: +53.0% and +63.5%); 2012-13 0.995 (670,938 / 674,018); 2013-14 0.649 (Central +62.7%, Newton +6.0%);
// 2017-18 0.620; 2018-19 1.209 (Central -49.5%, Newton -1.5%): first year Newton leads; 2024-25 1.653. Borough totals
// 2007-08 1,860,202 then 2008-09 3,410,274. None of the jumps is explained in this file (only the 2023-24 method change is).
// Lesson family: rank change (overtaking) under level shifts, robustness of a within-year ratio to shared vs station-only
// shifts, plus concentration (how many stations make 80%). Screened: rank change, overtak, level shift, step change, bump
// chart, cumulative share 0 hits (Stockport used ORR 1415a for turning points in one station; Newport and Swansea did
// change points on other series).
// Place facts: Nomis Census 2021 TS007A, St. Helens E08000013: total 183,248; 15 to 19 9,391 (5.1%; England 5.7%); 20 to 24
// 9,369 (5.1%; 6.0%); 55 to 59 13,290 (7.3%; 6.7%); 60 to 64 11,486 (6.3%; 5.8%); 65 to 69 9,968 (5.4%; 4.9%); 70 to 74
// 10,529 (5.7%; 5.0%). ONS 2021 BUAs inside: St Helens 107,680; Newton-le-Willows 24,650; Haydock 16,140; Rainford 5,575;
// Billinge 4,970 (Prescot and Ashton-in-Makerfield only partly inside; not given figures).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ST HELENS', label: 'St Helens', blurb: 'Coding and AI classes for St Helens, with a project that asks when Newton-le-Willows really overtook St Helens Central as the busiest station.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-st-helens',
  code: 'sth',
  accent: '#205C24',
  accentRationale: 'St Helens: a bottle-glass green (6.46:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'St Helens',
    eyebrow: 'St Helens, Merseyside, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Merseyside' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Merseyside', href: '/coding-classes-in-merseyside' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'St Helens, England',
  title: 'Coding and AI Classes in St Helens | Online Python, 6 to 67',
  description: 'Online coding, AI and Python classes for St Helens, Newton-le-Willows, Haydock and Rainford learners aged 6 to 67, one-to-one or in small groups. First lesson free.',
  ogDescription: 'Live online coding and AI classes for St Helens, and a Python project that tests when Newton-le-Willows overtook St Helens Central as the busiest station.',
  twitterDescription: 'St Helens coding, AI and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for St Helens',
    description: 'Online coding, AI, Python and mathematics for children, teenagers and adults in St Helens, taught live at each learner\'s level.'
  },

  h1: 'Coding and AI classes in St Helens',
  capsuleQ: 'Where can St Helens learners find the best coding and AI classes?',
  capsule: 'St Helens borough counted 183,248 residents in the 2021 census. The ONS gives 107,680 for the St Helens built-up area, 24,650 for Newton-le-Willows and 16,140 for Haydock, with Rainford and Billinge smaller. People in their late teens and early twenties form a smaller share than in England, while those aged 55 to 74 form a larger one. Whether at home in the town, in Haydock or out in Rainford, learners aged 6 to 67 can study coding, AI, Python and maths in live video lessons with our tutors in India, singly or in a class of five to ten at a matching level. The opening lesson is free and ends with a suggested course. The St Helens project digs into railway statistics. Afterwards a group place is USD 100 a month and one-to-one tuition USD 150 a month.',
  lead: 'Which is the busiest railway station in St Helens borough? For the year to March 2025 the Office of Rail and Road says Newton-le-Willows, with 1,106,560 entries and exits, well ahead of St Helens Central at 669,452. Its spreadsheet goes back to 1997, and for most of that time Central led comfortably. A Python learner can find the year the lead changed in a few lines. The harder and more useful question is whether that change was real. The answer depends on noticing that some of the biggest movements in the table happen to one station alone, in a single year, and are not explained anywhere in the file.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding or AI lesson for a St Helens learner.',

  picks: {
    eyebrow: 'St Helens course picks',
    h2: 'First steps for St Helens learners',
    intro: 'Choose using the learner\'s age and interests. A free live lesson always comes first, with no card needed.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with trains, timetables and racing games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python that sorts, ranks and compares real numbers.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Teen data science, where the station project lives.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Data and AI for adults starting without any code.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'St Helens borough',
      h2: 'Fewer young adults, more people in their sixties',
      intro: 'Six 2021 census age bands for the borough from Nomis, each shown beside England.',
      body: [
        { kind: 'table', caption: 'St Helens borough and England, six age bands (TS007A, 2021)', head: ['Age band', 'St Helens count', 'St Helens share', 'England share'], rows: [
          ['15 to 19', '9,391', '5.1%', '5.7%'],
          ['20 to 24', '9,369', '5.1%', '6.0%'],
          ['55 to 59', '13,290', '7.3%', '6.7%'],
          ['60 to 64', '11,486', '6.3%', '5.8%'],
          ['65 to 69', '9,968', '5.4%', '4.9%'],
          ['70 to 74', '10,529', '5.7%', '5.0%']
        ] },
        { kind: 'p', text: 'The early twenties are almost a point below England, and every band from 55 to 74 is at least half a point above it. Alongside the main town, the ONS counts Newton-le-Willows, Haydock, Rainford at 5,575 and Billinge at 4,970 among the borough\'s built-up areas. Schools here work to the national curriculum for England; tell us your holiday dates and the timetable will skip them.' },
        { kind: 'callout', h3: 'County and region', p: 'You will find the county on <a class="cg-inline-link" href="/coding-classes-in-merseyside">Merseyside</a> and the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The St Helens project',
      h2: 'When did Newton-le-Willows overtake?',
      intro: 'Rank ten stations each year, find the change of leader, then test whether it can be trusted.',
      body: [
        { kind: 'p', text: 'The learner downloads the ORR\'s station usage table and keeps the ten rows whose local authority is St. Helens. Each row holds 28 yearly estimates of entries and exits, from April 1997 to March 2025. Before ranking anything, three kinds of blank need handling. The whole year from April 2003 is marked [x], because no data were collected. Lea Green is marked [z], not applicable, for its first three years. And one column heading carries [b], a break in the series. A program that treats these markers as zero will invent a year in which nobody travelled.' },
        { kind: 'table', caption: 'St Helens Central against Newton-le-Willows, entries and exits, ORR Table 1415a, our Python run, 28 September 2026', head: ['Year (April to March)', 'St Helens Central', 'Newton-le-Willows', 'Newton as a share of Central'], rows: [
          ['1997 to 1998', '370,097', '154,170', '0.42'],
          ['2012 to 2013', '674,018', '670,938', '0.995'],
          ['2013 to 2014', '1,096,844', '711,462', '0.65'],
          ['2017 to 2018', '1,301,484', '806,926', '0.62'],
          ['2018 to 2019', '657,274', '794,928', '1.21'],
          ['2024 to 2025', '669,452', '1,106,560', '1.65']
        ] },
        { kind: 'p', text: 'A simple loop that finds the top station each year reports the first change of leader in the year to March 2019. But look at how it happened. Newton-le-Willows barely moved that year, down 1.5%. St Helens Central fell by 49.5%, from 1,301,484 to 657,274, in a single year. Five years earlier the reverse had happened: Central jumped 62.7% while Newton rose 6.0%, pushing Central far ahead just after the two had been within 3,080 journeys of each other. Changes that big, at one station only, can come from the way the figures are estimated rather than from passengers. This file does not say why either jump happened, so the learner flags both rather than explaining them.' },
        { kind: 'p', text: 'The fairer comparison is the ratio of the two stations in the same year. When a change hits every station at once, the ratio hardly moves: in the year to March 2009 the borough total leapt from 1,860,202 to 3,410,274, yet the ratio only slipped from 0.88 to 0.82. Station-only jumps are different, and they are exactly where the ratio swings. So the honest summary is that Newton-le-Willows had been closing in for fifteen years, was level by 2012 to 2013, and has led clearly since 2018 to 2019, with a gap now wide enough, 1.65 to 1, that no single odd year explains it. In the latest year it carries 33.7% of the borough\'s journeys, and just five of the ten stations make up 80%.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Rank the class by a weekly score and see how one odd week can change the leader.' },
          { h3: 'Ages 11 to 15', p: 'Load the ten stations in Python, handle the markers, and rank each year.' },
          { h3: 'Ages 15 and up', p: 'Separate shared jumps from station-only jumps and test the leader change properly.' }
        ] },
        { kind: 'callout', h3: 'ORR figures, our rankings', p: 'Station figures come from the Office of Rail and Road\'s Table 1415a, Estimates of station usage. The rankings, ratios and every comparison on this page are our own calculation.' }
      ]
    },
    {
      id: 'stations', tint: 'deep', eyebrow: 'The ten stations',
      h2: 'Where St Helens borough travels by train',
      intro: 'Entries and exits for the year from April 2024, as published by the ORR.',
      body: [
        { kind: 'table', caption: 'St Helens borough stations, April 2024 to March 2025 (ORR Table 1415a)', head: ['Station', 'Entries and exits'], rows: [
          ['Newton-le-Willows', '1,106,560'],
          ['St Helens Central', '669,452'],
          ['Lea Green', '400,690'],
          ['Earlestown', '330,956'],
          ['St Helens Junction', '206,320'],
          ['Thatto Heath, Garswood, Eccleston Park, Rainford', '148,722; 135,728; 74,390; 26,220']
        ] },
        { kind: 'p', text: 'Deciding whether a change in rank is real is everyday work for analysts. League tables of schools, products, shops and websites all shift from year to year, and the first question should always be whether the thing measured changed or the way of measuring it did. The same habit matters when training AI models on historical data, where one silent change in how a figure was recorded can teach a model a pattern that never existed. A St Helens learner who has picked apart one station table will ask that question automatically.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Office of Rail and Road or the census office. Their statistics are theirs; the rankings and any mistakes in them are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From class league tables to data science',
    intro: 'School year is a first guide; the free lesson settles the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Counting and blocks', p: 'Block coding with counting, sorting and simple charts.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and tables', p: 'Lists, sorting and ranking in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Data science and AI', p: 'Time series, ratios and AI beside GCSE and A level.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Reading data at work', p: 'Adult data skills with or without code.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and statistics',
    h2: 'Would an AI question the jump?',
    intro: 'Summaries of data tend to report changes, not doubts.',
    p1: 'Ask a chatbot when Newton-le-Willows became busier than St Helens Central and it may give 2018 to 2019 with a confident reason attached. The table itself offers no reason, and the size of Central\'s one-year fall is itself a warning sign.',
    p2: 'A St Helens learner who has compared the two stations year by year knows to ask whether a change is in the passengers or in the counting.',
    closer: 'Asking whether a change is real before explaining it is a strong reason for St Helens teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Rainford to Newton-le-Willows, taught online',
    intro: 'A computer and a steady connection are all a St Helens home needs.',
    cells: [
      { h3: 'Hands on the keys', p: 'The learner writes the code, and the tutor, viewing the shared screen, steers with questions.' },
      { h3: 'Start where they are', p: 'A Year 4 or a Year 12 learner begins at the point the free lesson finds, with the exam board noted.' },
      { h3: 'No fee to try', p: 'A complete first lesson at no cost, then a clear course suggestion.' },
      { h3: 'Groups by level', p: 'Five to ten UK learners, all at one stage.' },
      { h3: 'Two per week', p: 'School holidays have no lessons.' },
      { h3: 'Clock-change proof', p: 'Tutors shift with British Summer Time, so the lesson hour holds.' }
    ],
    spec: { title: 'Why online groups', p: 'Five learners at the same stage in St Helens, all free at one hour, are unlikely to be neighbours. Online, each can have a class that fits.' }
  },

  fees: {
    h2: 'St Helens fees',
    intro: 'St Helens pays the flat international rate we apply everywhere outside India.',
    first: 'A full lesson free of charge, then advice on the right course.',
    group: 'About eight live group lessons in each month.',
    private: 'About eight live one-to-one lessons in each month.',
    closer: 'Prices are set in US dollars rather than sterling. Nothing is invoiced until the trial has fixed a course and a weekly time; the pricing page sets out holidays, missed lessons and changes between group and private.'
  },

  reviewsH2: 'Merseyside and UK families on Google',

  book: {
    h2: 'Book a free St Helens lesson',
    intro: 'Give us the learner\'s age or year group and one thing they enjoy. The first lesson could be a Scratch train game, a first Python program, a small AI activity, or ranking the borough\'s stations.',
    success: 'Thank you. We have your St Helens request.'
  },

  faq: {
    h2: 'St Helens questions',
    intro: 'The station project, borough figures and everyday details.',
    items: [
      { q: 'What is the population of St Helens?', a: 'The 2021 census counted 183,248 in St Helens borough; the ONS gives 107,680 for the St Helens built-up area.' },
      { q: 'Can St Helens learners study coding and AI online?', a: 'Yes. Every lesson is live over video, open to anyone aged 6 to 67 in the borough.' },
      { q: 'What is the station project?', a: 'Learners rank the borough\'s ten stations each year from ORR data and test when Newton-le-Willows really overtook St Helens Central.' },
      { q: 'Which station is busiest?', a: 'Newton-le-Willows, with 1,106,560 entries and exits in the year to March 2025, against 669,452 at St Helens Central.' },
      { q: 'Why not trust the first year it led?', a: 'That year Central\'s figure halved while Newton\'s barely moved, a one-station jump the file does not explain.' },
      { q: 'Are lessons in person?', a: 'No. They are live and online only.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, in maths and computing, for understanding rather than any promised grade.' },
      { q: 'What ages do you teach?', a: 'From 6 up to 67.' },
      { q: 'How much are the lessons?', a: 'The first is free. Group lessons then cost USD 100 a month and one-to-one lessons USD 150 a month.' },
      { q: 'Do lessons break for school holidays?', a: 'Yes; share the dates with us.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other pages close by',
    html: 'Nearby, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-warrington">Warrington</a>, <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-birkenhead">Birkenhead</a> have their own pages. The county sits on <a class="cg-inline-link" href="/coding-classes-in-merseyside">Merseyside</a>, the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> collects the rest.',
    waLabel: 'Reach us on WhatsApp'
  },

  footerHeading: 'St Helens and Merseyside',
  footerPlaces: [
    { href: '/coding-classes-in-merseyside', label: 'Merseyside' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-sth .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-sth .cg-hero h1 { font-weight: 750; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-sth .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-sth .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sth .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-sth .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-sth .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sth .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-sth .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-sth .cg-callout { border-left-width: 6px; border-radius: 0 11px 11px 0; }
`,

  dossier: {
    curriculumAuthority: 'St. Helens (E08000013). Nomis Census 2021 TS007A: total 183,248; 15 to 19 9,391 (5.1%, England 5.7%); 20 to 24 9,369 (5.1%, 6.0%); 55 to 59 13,290 (7.3%, 6.7%); 60 to 64 11,486 (6.3%, 5.8%); 65 to 69 9,968 (5.4%, 4.9%); 70 to 74 10,529 (5.7%, 5.0%). ONS 2021 BUAs: St Helens 107,680; Newton-le-Willows 24,650; Haydock 16,140; Rainford 5,575; Billinge 4,970. ORR Table 1415a (published 4 December 2025), ten stations with local authority St. Helens; cover sheet definitions of [x], [z], [b].',
    localProject: '2024-25: Newton-le-Willows 1,106,560; St Helens Central 669,452; Lea Green 400,690; Earlestown 330,956; St Helens Junction 206,320; Rainhill 186,148; Thatto Heath 148,722; Garswood 135,728; Eccleston Park 74,390; Rainford 26,220; total 3,285,186; top 33.7%, top two 54.1%, five stations for 80%. Newton/Central ratio 0.417 (1997-98), 0.881 (2007-08), 0.824 (2008-09, both jump), 0.995 (2012-13), 0.649 (2013-14, Central +62.7%), 0.620 (2017-18), 1.209 (2018-19, Central -49.5%), 1.653 (2024-25). Lesson family: rank change under level shifts, within-year ratio robustness, concentration.',
    requiredMentions: [
      '183,248',
      '107,680',
      'Haydock',
      'Rainford',
      'Billinge',
      'St Helens Central',
      'Lea Green',
      'Earlestown',
      'Thatto Heath',
      '1,106,560'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, St Helens and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Office of Rail and Road, Estimates of station usage, Table 1415 time series of entries, exits and interchanges.', url: 'https://dataportal.orr.gov.uk/statistics/usage/estimates-of-station-usage/' }
    ],
    rejectedClaims: [
      'Causes of the 2008-09, 2013-14 and 2018-19 jumps: not stated in the file; flagged, not explained.',
      'The Rainhill Trials and the Rocket: already the Merseyside page\'s project; not used.',
      'Glassmaking and chemical industry history: no readable source naming St Helens was found; not claimed.',
      'Sankey Canal: Pratt\'s account concerns pollution and flooding; not used.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
