'use strict';
// Mid and East Antrim (cg- county page, UK cluster Phase 7, row 304). One local government district. Spine: gas use grew
// more than fourfold in 50 years; how much came from more customers and how much from each using more? Anchor (read raw
// 26 September 2026, Department for Communities Historic Buildings database, buildview.aspx?id=3256, HB22/08/020, Grade A,
// Former Gasworks, 44 Irish Quarter West, Carrickfergus, council Mid and East Antrim): "In 1854 a group of local businessmen
// came together to form the Carrickfergus Gas Company and supply the town with gas lighting"; street lights "lit for the
// first time on 17 September 1855"; "During its first year of operation, the Company signed up 171 customers. Over the next
// 50 years steady progress was made and 242 consumers were on its books by 1905. During this period, the average amount of
// gas used by each customer tripled. This increase was due to the introduction of gas cookers and heaters, incandescent
// mantles, prepayment meters, and by a steady fall in the price of gas"; "The early Victorian process of producing gas
// using horizontal retorts persisted for well over a century"; "production ceased in 1964"; "Carrickfergus Gasworks closed
// in 1987"; restored site "re-opened ... in 2002" as a museum.
// Our model (computed inline): customers x1.4152 (242/171); per-customer use x3 (the record's "tripled"); total gas x4.2456.
// Over 50 years: customers 0.697% a year, use per customer 2.222%, total 2.934% (rates multiply: 1.00697 x 1.02222 =
// 1.02934; adding gives 2.919). Over 49 years: 0.711, 2.267, 2.995. Log shares: customers 24.0%, use per customer 76.0%.
// Doubling time at 2.934%: 24.0 years. Slip: simple rate (4.2456 - 1) / 50 = 6.49% a year; compounding that for 50 years
// gives about 23 times, not 4.2.
// Lesson family: compound growth rates and multiplicative decomposition (customers x use), log shares, simple vs compound;
// screened (compound growth, CAGR, annual growth rate, per customer: 0 hits in UK; Dutch/Omani growth-rate pages were
// population logistic or other contexts).
// Place facts: NISRA Census 2021 MS-A01: Mid and East Antrim N09000008 138,994. DEAs (exact, not summed): Ballymena 24,295;
// Bannside 19,842; Braid 23,826; Carrick Castle 18,430; Coast Road 17,005; Knockagh 17,272; Larne Lough 18,324. Settlements
// (NISRA approximations): Ballymena 31,205; Carrickfergus 28,141; Larne 18,853; Whitehead 3,537; Ahoghill 3,537; Broughshane
// 3,097; Cullybackey 2,659. Greenisland omitted (NISRA flags its settlement estimate as outside 5 per cent). No money data
// used (the record's pounds figures left out). No transfer test advice; no identity data.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'MID AND EAST ANTRIM', blurb: 'Ballymena, Carrickfergus, Larne and Whitehead, and a Carrickfergus gasworks lesson on splitting growth into its parts.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-mid-and-east-antrim',
  code: 'mea',
  accent: '#4C0E5C',
  accentRationale: 'Mid and East Antrim: a gas-flame violet from the solver (11.1:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'Mid and East Antrim',
    eyebrow: 'Mid and East Antrim',
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
  routeLabel: 'Mid and East Antrim',
  title: 'Coding Classes in Mid and East Antrim | Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Mid and East Antrim: Ballymena, Carrickfergus, Larne, Whitehead, Ahoghill, Broughshane and Cullybackey.',
  ogDescription: 'Mid and East Antrim coding classes, and a Carrickfergus gasworks project: split 50 years of growth into more customers and more gas each, with compound rates in Python.',
  twitterDescription: 'Mid and East Antrim coding, Python and maths for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-analysis-mastery-course-college',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Mid and East Antrim',
    description: 'Online coding, Python, growth and data maths and mathematics for children, teenagers and adults across Mid and East Antrim, taught live in English and placed by level.'
  },

  h1: 'Coding classes in Mid and East Antrim',
  capsuleQ: 'What are the best coding classes in Mid and East Antrim?',
  capsule: 'Mid and East Antrim had 138,994 usual residents at the 2021 census, NISRA reports. Its three large towns are Ballymena, Carrickfergus and Larne, and smaller settlements include Whitehead, Ahoghill, Broughshane and Cullybackey. Every class we teach is live on video, led by teachers based in India. Learners from 6 to 67 take coding, Python and maths, privately or in a class of five to ten who share a level. A free first lesson decides the course. The district project starts in a Victorian gasworks. Staying on after the free lesson means USD 100 each month in a group, or USD 150 each month with a private tutor.',
  lead: 'In 1854 a group of Carrickfergus businessmen formed a gas company to light the town, and on 17 September 1855 its street lamps were lit for the first time. The gasworks they built is now listed at Grade A, and the Historic Environment Division\'s record keeps some unusually useful numbers. In its first year the company signed up 171 customers. By 1905 it had 242, and over the same period the average amount of gas each customer used tripled, thanks to gas cookers, heaters, better mantles and cheaper gas. So total gas use rose more than fourfold. But how much of that came from more customers, and how much from each one using more? And what does "more than fourfold in 50 years" mean per year? This page\'s project answers with compound growth in Python.',
  wa: 'Hello Modern Age Coders, we are in Mid and East Antrim and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Mid and East Antrim',
    h2: 'Mid and East Antrim starting points',
    intro: 'A P5 pupil in Broughshane who likes counting games, a Year 9 in Larne starting Python, a Year 12 in Ballymena on CCEA GCSE maths, and a Carrickfergus adult learning data skills. Everyone starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with counters, growth and simple graphs.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Percentages, ratios and repeated growth, checked by code.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Complete secondary maths, from percentages to logarithms and proof.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Python for data, from spreadsheets to growth and trend analysis.' }
    ]
  },

  sections: [
    {
      id: 'mid-and-east-antrim', tint: '', eyebrow: 'Census 2021 for the district',
      h2: '138,994 residents in Mid and East Antrim',
      intro: 'NISRA\'s Census 2021 table MS-A01 gives the district total and the seven district electoral areas shown here, each exactly as published and never summed by us.',
      body: [
        { kind: 'table', caption: 'Mid and East Antrim district electoral areas, usual residents, NISRA Census 2021', head: ['Electoral area', 'Usual residents', 'Electoral area', 'Usual residents'], rows: [
          ['Ballymena', '24,295', 'Coast Road', '17,005'],
          ['Bannside', '19,842', 'Knockagh', '17,272'],
          ['Braid', '23,826', 'Larne Lough', '18,324'],
          ['Carrick Castle', '18,430', '', '']
        ] },
        { kind: 'p', text: 'NISRA\'s approximate settlement figures give Ballymena 31,205, Carrickfergus 28,141 and Larne 18,853, with Whitehead and Ahoghill each at 3,537, Broughshane at 3,097 and Cullybackey at 2,659. Local pupils move through the Northern Ireland Curriculum, P1 to Year 14, and most take CCEA exams at GCSE and A level. We have not read local holiday calendars, so each family shares its own.' },
        { kind: 'callout', h3: 'Belfast and CCEA links', p: 'The city of <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a> has a page of its own. For exam years, see <a class="cg-inline-link" href="/ccea-gcse-maths-help">CCEA GCSE maths</a> and <a class="cg-inline-link" href="/ccea-gcse-digital-technology-programming-help">CCEA GCSE Digital Technology programming</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Mid and East Antrim project',
      h2: 'Splitting 50 years of growth',
      intro: 'Total gas is customers times gas per customer, so the growth factors multiply.',
      body: [
        { kind: 'p', text: 'The learner starts with one line of reasoning: total gas equals the number of customers times the average used by each. So if customers grew by a factor of 242 divided by 171, about 1.42, and use per customer by 3, total gas grew by their product, about 4.25. Then comes the useful question: what steady yearly rate, compounded for 50 years, gives each factor? The answer is the factor raised to the power one fiftieth, minus one. Python makes this a two-line function, and the learner prints all three rates.' },
        { kind: 'table', caption: 'Our growth sums from the Carrickfergus gasworks record, 26 September 2026', head: ['Quantity', 'Growth over 50 years', 'Compound rate per year', 'Share of the growth'], rows: [
          ['Customers', 'From 171 to 242, times 1.42', '0.70%', 'About a quarter'],
          ['Gas per customer', 'Tripled, times 3', '2.22%', 'About three quarters'],
          ['Total gas', 'Times 4.25', '2.93%', 'All of it']
        ] },
        { kind: 'p', text: 'Two surprises come out. First, rates do not quite add: 0.70 plus 2.22 is 2.92, but the true total rate is 2.93, because the factors multiply rather than add. Over a few years the difference is invisible; over centuries it is not. Second, the share column uses logarithms, which turn multiplication into addition, so the growth splits cleanly: about 24 per cent from more customers and 76 per cent from each customer using more. The story in the record, new cookers, heaters and mantles, drove most of the rise, not new households.' },
        { kind: 'p', text: 'The classic slip is to divide the whole rise by the years. The total went up by 325 per cent, and 325 divided by 50 is 6.5 per cent a year. But compound 6.5 per cent for 50 years and you get about 23 times the start, not 4.25. At the true rate of 2.93 per cent, gas use doubles about every 24 years. The start year matters a little too: counting 49 years instead of 50 nudges the total rate to 3.0 per cent, which is why careful code states its assumptions.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Grow a number by the same percentage each turn in Scratch, and compare it with adding the same amount.' },
          { h3: 'Ages 11 to 15', p: 'Code growth factors and yearly rates in Python and print the table for customers and gas.' },
          { h3: 'Ages 15 and up', p: 'Split growth with logarithms, test the simple-rate slip, and check how the start year changes the answer.' }
        ] },
        { kind: 'callout', h3: 'Record figures, our arithmetic', p: 'The customer counts and the word tripled come from the Historic Environment Division\'s record. The yearly rates and shares are our calculations, and tripled is itself a rounded description, so the table shows the method rather than precise historical rates.' }
      ]
    },
    {
      id: 'carrickfergus-gasworks', tint: 'deep', eyebrow: 'Why Carrickfergus Gasworks',
      h2: 'A gasworks that outlived its process',
      intro: 'What the listed building record says.',
      body: [
        { kind: 'table', caption: 'Former Gasworks, Irish Quarter West, Carrickfergus, Department for Communities historic building record HB22/08/020, Grade A', head: ['Record detail', 'What it says'], rows: [
          ['Founded', '1854, as the Carrickfergus Gas Company, to light the town'],
          ['First light', 'Street lamps lit on 17 September 1855'],
          ['Customers', '171 in the first year; 242 by 1905'],
          ['Use per customer', 'Tripled over that period, with cookers, heaters, mantles and prepayment meters'],
          ['Process', 'Horizontal retorts, an early Victorian method, kept for well over a century'],
          ['Later years', 'Gas production ceased 1964; the works closed 1987 and reopened as a museum in 2002']
        ] },
        { kind: 'p', text: 'Splitting growth into parts is everyday analysis. Businesses separate more customers from more spending per customer, energy planners separate more homes from more use per home, and app makers separate new users from heavier use. A Mid and East Antrim learner who has shown that three quarters of the gasworks\' growth came from each customer using more can ask the same sharp question of any growth figure.' },
        { kind: 'p', text: 'Modern Age Coders stands apart from NISRA, the Department for Communities and the gasworks museum; the growth sums on this page, mistakes included, are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stage by stage',
    h2: 'From repeated adding to logarithms',
    intro: 'Stages are only approximate; the trial lesson finds the starting point.',
    cols: [
      { band: 'P3 to P7', h3: 'Counting patterns', p: 'Block coding with counters, repeats and growing numbers.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 8 to 10', h3: 'Percentages in code', p: 'Python with percentages, multipliers and loops.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 11 to 14', h3: 'Exponentials and logs', p: 'Compound growth, exponentials and logarithms with CCEA GCSE and A level in view.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Data and trends', p: 'Adult Python for spreadsheets, trends and growth figures.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and growth',
    h2: 'An AI can quote a growth rate. Is it simple or compound?',
    intro: 'Two honest-looking rates can differ by more than double.',
    p1: 'Ask a chatbot how fast something grew over decades and it may divide the total rise by the years, giving a simple rate that sounds precise and badly overstates yearly growth. It rarely says which kind of rate it used.',
    p2: 'A learner who has compounded 6.5 per cent and watched it overshoot knows to ask which rate is meant, and to check it by running it forward.',
    closer: 'Running a quoted rate forward to test it is a reason for a Mid and East Antrim teenager to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson logistics',
    h2: 'From Glenarm to Cullybackey, lessons online',
    intro: 'Coast, glen or town, a home connection is enough.',
    cells: [
      { h3: 'Typing it themselves', p: 'Each student builds the program at their own keyboard; the tutor keeps watch on screen and nudges when needed.' },
      { h3: 'Northern Ireland school stages', p: 'We place a Whitehead P6 or a Larne Year 13 according to key stage and school year, using CCEA exam titles. Lessons are in English.' },
      { h3: 'Free starter lesson', p: 'A complete first lesson, free, then our recommendation.' },
      { h3: 'Level-matched groups', p: 'Classes of five to ten at one level, from all around the UK.' },
      { h3: 'Term rhythm', p: 'Two lessons a week during term; holidays are free.' },
      { h3: 'Clock-change proof', p: 'The lesson keeps its usual local time in spring and autumn; our teachers shift, not you.' }
    ],
    spec: { title: 'Why level beats location', p: 'Few villages have five learners at one level free at one time. Online, an Ahoghill or Broughshane pupil joins a class pitched exactly right.' }
  },

  fees: {
    h2: 'Mid and East Antrim fees',
    intro: 'Ballymena and Larne pay the same, as does every country we teach outside India.',
    first: 'A full trial lesson at no charge, then clear advice.',
    group: 'Close to eight lessons a month in a class of five to ten.',
    private: 'Close to eight lessons a month with your own tutor.',
    closer: 'Fees are set in US dollars; we do not quote sterling. Nothing is charged until the trial agrees a course and weekly time, and holidays, missed lessons and format changes are explained on the pricing page.'
  },

  reviewsH2: 'Families rate us on Google',

  book: {
    h2: 'Book a free Mid and East Antrim lesson',
    intro: 'Tell us the learner\'s age or school year and one thing they enjoy. The trial could be a Scratch counting game, a first Python loop, or the gasworks growth sums.',
    success: 'Thank you. Your Mid and East Antrim request is safely in.'
  },

  faq: {
    h2: 'Mid and East Antrim questions',
    intro: 'The district, the gasworks project and the details.',
    items: [
      { q: 'What is the population of Mid and East Antrim?', a: 'NISRA\'s Census 2021 counted 138,994 usual residents in the district.' },
      { q: 'What are the largest towns in Mid and East Antrim?', a: 'NISRA estimates Ballymena at 31,205, Carrickfergus at 28,141 and Larne at 18,853.' },
      { q: 'What is the Carrickfergus gasworks project?', a: 'Learners split 50 years of gas growth into more customers and more gas per customer, find compound yearly rates in Python, and test the simple-rate slip.' },
      { q: 'What is compound growth?', a: 'Growth where each year\'s increase is a percentage of the new, larger amount, so the factors multiply over time.' },
      { q: 'When were Carrickfergus gas lamps first lit?', a: 'On 17 September 1855, according to the historic building record.' },
      { q: 'Are the classes online?', a: 'Yes, every class is live online and joined from home.' },
      { q: 'Do you help with CCEA exams?', a: 'Yes, in maths and computing. We teach for understanding and never guarantee grades.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67, from first coding games to adult Python.' },
      { q: 'How much are lessons?', a: 'The trial is free, then USD 100 a month for a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons pause for school holidays?', a: 'Yes. Tell us your holiday weeks and we plan around them.' }
    ]
  },

  next: {
    eyebrow: 'More in Northern Ireland',
    h2: 'Nearby Northern Ireland pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a> ranks its Metro stops, <a class="cg-inline-link" href="/coding-classes-in-antrim-and-newtownabbey">Antrim and Newtownabbey</a> tows aircraft out of dead-end parks, and <a class="cg-inline-link" href="/coding-classes-in-causeway-coast-and-glens">Causeway Coast and Glens</a> splits the wind on three runways. See all districts on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland</a> page, and the rest of the country on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Send a WhatsApp message'
  },

  footerHeading: 'Mid and East Antrim',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/best-coding-class-in-belfast', label: 'Belfast' },
    { href: '/ccea-gcse-maths-help', label: 'CCEA GCSE maths' }
  ],

  personalityCss: `
.cg-root.cg-mea .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-mea .cg-hero h1 { font-weight: 745; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-mea .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-mea .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mea .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.02em; }
.cg-root.cg-mea .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-mea .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mea .cg-table th { letter-spacing: 0.055em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-mea .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-mea .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Mid and East Antrim (N09000008). NISRA Census 2021 MS-A01: 138,994. DEAs (exact, not summed): Ballymena 24,295; Bannside 19,842; Braid 23,826; Carrick Castle 18,430; Coast Road 17,005; Knockagh 17,272; Larne Lough 18,324. Settlements (NISRA approximations): Ballymena 31,205; Carrickfergus 28,141; Larne 18,853; Whitehead 3,537; Ahoghill 3,537; Broughshane 3,097; Cullybackey 2,659. Department for Communities historic building HB22/08/020, Grade A, Former Gasworks, Carrickfergus: "In 1854 a group of local businessmen came together to form the Carrickfergus Gas Company"; lamps "lit for the first time on 17 September 1855"; "During its first year of operation, the Company signed up 171 customers"; "242 consumers were on its books by 1905. During this period, the average amount of gas used by each customer tripled"; horizontal retorts "persisted for well over a century"; "production ceased in 1964"; "closed in 1987"; museum from 2002.',
    localProject: 'Customers x1.4152, use x3, total x4.2456. 50 years: 0.697%, 2.222%, 2.934% a year (sum 2.919). 49 years: 0.711, 2.267, 2.995. Log shares 24.0 / 76.0%. Doubling 24.0 years. Simple-rate slip 6.49%/yr, compounded 50 years about 23 times. Lesson family: compound growth rates and multiplicative decomposition.',
    requiredMentions: [
      'Carrickfergus',
      'Whitehead',
      'Ahoghill',
      'Broughshane',
      'Cullybackey',
      'Bannside',
      'Knockagh',
      'Larne Lough',
      'Carrickfergus Gas Company',
      'compound growth'
    ],
    sources: [
      { claim: 'NISRA Census 2021 MS-A01 usual resident population by LGD, DEA and settlement.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'Department for Communities Historic Buildings database, record HB22/08/020, Former Gasworks, Carrickfergus.', url: 'https://apps.communities-ni.gov.uk/Buildings/buildview.aspx?id=3256' },
      { claim: 'Department for Communities Historic Environment Division GIS data (Historic Buildings layer with council field).', url: 'https://services2.arcgis.com/BdBkthNLO9mzGAMO/arcgis/rest/services/Historic_Environment_Division_GIS_Data/FeatureServer' }
    ],
    rejectedClaims: [
      'Money figures in the record (capital raised, lighting contract): not used.',
      'Exact gas volumes: not in the record; "tripled" is treated as a rounded description.',
      'Greenisland settlement estimate: omitted, flagged by NISRA as less accurate.',
      'Blackhead Lighthouse (HB22/05/005): considered, not used.',
      'Transfer test advice and community background statistics: excluded by rule.',
      'Named schools, school term dates, distances and travel times: none named, read or claimed.'
    ]
  }
};
