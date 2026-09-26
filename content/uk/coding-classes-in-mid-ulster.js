'use strict';
// Mid Ulster (cg- county page, UK cluster Phase 7, row 305). One local government district. Spine: a 1764 plan promised
// seven to eight thousand pieces of linen a year; which machine decides whether that was possible? Anchor (read raw 26
// September 2026, Department for Communities Historic Buildings database, buildview.aspx?id from the OpenDataNI MainID,
// HB09/04/003, Grade B+, Wellbrook Beetling Mill, 20 Wellbrook Road, Cookstown, council Mid Ulster): "The history of
// bleaching at Wellbrook began in 1764"; the Faulkners' memorial to the Trustees of the Linen Manufacture: "having a great
// command of water"; "laid out a green, containing ten acres, which will enable them to bleach from seven to eight thousand
// pieces of linen annually; and will erect theron a bleaching mill, to consist of two wash mills, four pair of rubbing
// boards, two beetling engines, a buck house and boiling house; and over the wash mills and beetling engines ... a drying
// loft, to contain five hundred pieces of linen"; "The beetles here were started for the first time in October 1765"; the
// mill in Corkhill "has been in National Trust ownership since 1969"; the present building "is no older than about 1830".
// Our model (worked inline; every time is invented; working year 10 h x 250 days = 2,500 h): wash mills 2 x 0.4 h per
// piece -> 5 an hour, 12,500 a year; rubbing boards 4 x 1.0 h -> 4 an hour, 10,000; beetling engines 2 x 0.8 h -> 2.5 an
// hour, 6,250; drying loft 500 pieces x 4 days -> 62.5 turns, 31,250. Line = minimum = 6,250 (beetling). Claim 7,000 to
// 8,000 needs beetling 2.8 to 3.2 an hour: 0.71 to 0.63 h a piece, or a third engine. Upgrades: 3 engines 9,375
// (beetling); 4 engines 10,000 (rubbing boards now limit); 4 engines + 5 boards 12,500 (wash, rub and beetle tie). Slips:
// adding capacities 60,000; averaging 15,000.
// Lesson family: production-line capacity, the slowest stage, upgrade planning and checking a stated capacity; screened
// (theory of constraints, beetling: 0 hits; Portsmouth max-flow min-cut is a network, not a staged line).
// Place facts: NISRA Census 2021 MS-A01: Mid Ulster N09000009 150,293. DEAs (exact, not summed): Carntogher 17,167; Clogher
// Valley 21,997; Cookstown 24,617; Dungannon 25,640; Magherafelt 19,266; Moyola 18,586; Torrent 23,020. Settlements (NISRA
// approximations): Dungannon 16,282; Cookstown 12,546; Magherafelt 9,648; Coalisland 6,349; Maghera 4,235; Castledawson
// 2,348; Moneymore 2,141; Moy 1,944; Draperstown 1,853; Fivemiletown 1,341. No Plantation, transfer test or identity content.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'MID ULSTER', blurb: 'Dungannon, Cookstown, Magherafelt and Coalisland, and a Wellbrook lesson on finding the one machine that limits a whole mill.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-mid-ulster',
  code: 'mul',
  accent: '#561F7A',
  accentRationale: 'Mid Ulster: a flax-flower purple from the solver (9.04:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'Mid Ulster',
    eyebrow: 'Mid Ulster',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Northern Ireland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Armagh', href: '/best-coding-class-in-armagh' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Mid Ulster',
  title: 'Coding Classes in Mid Ulster | Live Online Classes, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Mid Ulster: Dungannon, Cookstown, Magherafelt, Coalisland, Maghera, Castledawson and Moneymore.',
  ogDescription: 'Mid Ulster coding classes, and a Wellbrook project: model a 1760s linen mill as stages in Python, find the slowest machine, and test a promise of 8,000 pieces a year.',
  twitterDescription: 'Mid Ulster coding, Python and maths for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Mid Ulster',
    description: 'Online coding, Python, rates and modelling maths and mathematics for children, teenagers and adults across Mid Ulster, taught live in English with placement by level.'
  },

  h1: 'Coding classes in Mid Ulster',
  capsuleQ: 'What are the best coding classes in Mid Ulster?',
  capsule: 'NISRA recorded 150,293 usual residents in Mid Ulster at the 2021 census. Dungannon, Cookstown and Magherafelt are its main towns, and Coalisland, Maghera, Castledawson, Moneymore, Moy and Draperstown are among the smaller ones. We teach every lesson live by video, with teachers based in India. From age 6 to 67, learners take coding, Python and maths in a private lesson or a same-level group of five to ten. Your first lesson is free and points to the right course. The district project is set in an eighteenth-century linen mill. After that, group lessons cost USD 100 a month and one-to-one lessons USD 150 a month.',
  lead: 'In 1764 a linen draper named Hugh Faulkner found a site near Cookstown with, in his family\'s words, a great command of water, and began a bleach works at Wellbrook. The Historic Environment Division\'s record quotes the Faulkners\' plan: a ten-acre green that would let them bleach seven to eight thousand pieces of linen a year, and a mill with two wash mills, four pairs of rubbing boards, two beetling engines, which pounded the cloth to give it a sheen, and a drying loft for five hundred pieces. Every piece had to pass through each stage in turn. So which stage set the pace, and was eight thousand a year realistic with that equipment? This page\'s project models the mill as a line of stages in Python and finds out.',
  wa: 'Hello Modern Age Coders, we are in Mid Ulster and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Mid Ulster',
    h2: 'Where Mid Ulster learners begin',
    intro: 'A P3 pupil in Moneymore who loves building machines, a Year 8 in Magherafelt trying Python, a Year 11 in Dungannon preparing for CCEA GCSE maths, and a Cookstown adult learning to automate work. Each starts with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Scratch projects with conveyor belts, machines and timers.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Rates, ratios and proportion worked out with short programs.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Full Python for teenagers, from functions to simple simulations.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Python for adults working with numbers, capacity and planning.' }
    ]
  },

  sections: [
    {
      id: 'mid-ulster', tint: '', eyebrow: 'Mid Ulster census figures',
      h2: '150,293 people in Mid Ulster',
      intro: 'All of these figures come from NISRA\'s Census 2021 table MS-A01: the district total and its seven district electoral areas, each shown as published and not added together here.',
      body: [
        { kind: 'table', caption: 'Mid Ulster district electoral areas, usual residents at the 2021 census, NISRA', head: ['Electoral area', 'Residents', 'Electoral area', 'Residents'], rows: [
          ['Carntogher', '17,167', 'Magherafelt', '19,266'],
          ['Clogher Valley', '21,997', 'Moyola', '18,586'],
          ['Cookstown', '24,617', 'Torrent', '23,020'],
          ['Dungannon', '25,640', '', '']
        ] },
        { kind: 'p', text: 'NISRA also approximates its settlements: Dungannon 16,282, Cookstown 12,546, Magherafelt 9,648, Coalisland 6,349, Maghera 4,235, Castledawson 2,348, Moneymore 2,141, Moy 1,944, Draperstown 1,853 and Fivemiletown 1,341. Mid Ulster schools teach the Northern Ireland Curriculum across P1 to Year 14, leading to CCEA GCSE and A level exams. We do not have local holiday lists, so families pass on their own.' },
        { kind: 'callout', h3: 'Armagh and CCEA links', p: 'The city of <a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a> has its own page. For exam support, see <a class="cg-inline-link" href="/ccea-gcse-maths-help">CCEA GCSE maths</a> and <a class="cg-inline-link" href="/ccea-a-level-software-systems-development-help">CCEA A level Software Systems Development</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Mid Ulster project',
      h2: 'The slowest machine sets the pace',
      intro: 'A line of stages can go no faster than its slowest one.',
      body: [
        { kind: 'p', text: 'The learner gives each stage two numbers: how many machines it has, from the plan, and how long one machine takes per piece, which we have to invent because the record does not say. A stage\'s hourly capacity is machines divided by time per piece. The drying loft works differently: it holds 500 pieces for, say, four days, so its capacity is how often it can be filled and emptied. Over an invented working year of 2,500 hours, Python prints each stage\'s capacity, and then the key line: the whole mill can manage only the smallest of them.' },
        { kind: 'table', caption: 'Our Wellbrook capacity model, invented times, 26 September 2026', head: ['Stage (count from the 1764 plan)', 'Invented time per piece', 'Pieces an hour', 'Pieces a year'], rows: [
          ['Wash mills (2)', '0.4 h', '5', '12,500'],
          ['Rubbing boards (4 pairs)', '1.0 h', '4', '10,000'],
          ['Beetling engines (2)', '0.8 h', '2.5', '6,250'],
          ['Drying loft (500 pieces, 4 days)', 'Not per piece', 'Not hourly', '31,250'],
          ['Whole mill', 'Slowest stage', '2.5', '6,250']
        ] },
        { kind: 'p', text: 'With these guesses the beetling engines hold everything back, and 6,250 pieces a year falls short of the plan\'s seven to eight thousand. Now the program can answer design questions. To reach 7,500, the beetling engines would need to manage about 3 pieces an hour between them, around 0.67 hours per piece each. Add a third engine and the mill jumps to 9,375. Add a fourth and it stops at 10,000, because now the rubbing boards are slowest: the bottleneck has moved. Add a fifth pair of boards too and three stages tie at 12,500. Improving anything except the slowest stage does nothing at all.' },
        { kind: 'p', text: 'Two slips are worth testing. Add up the stage capacities and you get a nonsense 60,000 a year; average them and you get 15,000. Neither describes a line in which every piece passes every stage. Learners write a check that the mill\'s answer can never exceed any single stage. They also see how much rests on guessed times: nudge the beetling time from 0.8 to 0.65 hours and the plan\'s figure suddenly looks reasonable, which is why a model\'s assumptions belong right beside its answer.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Run a paper-cup assembly line with friends, time each station, then animate it in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Code stage capacities in Python, find the minimum, and try adding machines one at a time.' },
          { h3: 'Ages 15 and up', p: 'Automate the upgrade search, watch the bottleneck move, and test how sensitive the answer is to guesses.' }
        ] },
        { kind: 'callout', h3: 'Machine counts from 1764, times from us', p: 'The numbers of machines, the loft size and the seven to eight thousand come from the record\'s quotation of the plan. Every time per piece and the working year are ours, so the table shows how to reason about capacity, not what Wellbrook really produced.' }
      ]
    },
    {
      id: 'wellbrook', tint: 'deep', eyebrow: 'Why Wellbrook',
      h2: 'A bleach works built on water',
      intro: 'What the listed building record says.',
      body: [
        { kind: 'table', caption: 'Wellbrook Beetling Mill, Cookstown, Department for Communities historic building record HB09/04/003', head: ['Record detail', 'What it says'], rows: [
          ['Beginning', 'Bleaching at Wellbrook began in 1764'],
          ['The plan', 'A ten-acre green to bleach seven to eight thousand pieces of linen a year'],
          ['Machinery planned', 'Two wash mills, four pairs of rubbing boards, two beetling engines, a buck house and boiling house'],
          ['Drying loft', 'To hold five hundred pieces of linen'],
          ['First beetles', 'Started for the first time in October 1765'],
          ['Today', 'The mill building dates from about 1830 and has been in National Trust ownership since 1969']
        ] },
        { kind: 'p', text: 'Finding the slowest step is how engineers speed up factories, websites and even computer programs. A web page that waits on one slow database query, a delivery firm limited by one loading bay and a program that spends most of its time in one loop are all the same problem. A Mid Ulster learner who has watched the bottleneck move from the beetling engines to the rubbing boards knows where to look first.' },
        { kind: 'p', text: 'Modern Age Coders has no link to NISRA, the Department for Communities or the National Trust. The record is the department\'s; the capacity model, and any error in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages of learning',
    h2: 'From assembly lines to simulations',
    intro: 'These stages are only a guide; the free lesson decides the start.',
    cols: [
      { band: 'P3 to P7', h3: 'Machines and timing', p: 'Block coding with timers, belts and repeating actions.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 8 to 10', h3: 'Rates in code', p: 'Python with rates, division and finding minimums.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 11 to 14', h3: 'Modelling', p: 'Rates, optimisation and simulation, alongside CCEA GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Planning with Python', p: 'Adult Python for capacity, scheduling and business numbers.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and assumptions',
    h2: 'An AI can build a capacity model. Will it show you the guesses?',
    intro: 'A model is only as good as the numbers nobody wrote down.',
    p1: 'Ask a chatbot whether a factory can meet a target and it may produce a confident yes or no, quietly filling in machine times it made up. The answer can flip when one hidden guess changes.',
    p2: 'A learner who has watched 0.8 hours become 0.65 and turn a shortfall into success knows to ask which inputs are real and which are assumed, before trusting any model.',
    closer: 'Demanding to see a model\'s assumptions is a strong reason for a Mid Ulster teenager to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Running the classes',
    h2: 'From Draperstown to Fivemiletown, live online',
    intro: 'Town or country, the classroom is a video link.',
    cells: [
      { h3: 'Their own keyboard', p: 'Every line is typed by the learner; the teacher watches the shared screen and offers a hint only when it helps.' },
      { h3: 'Northern Ireland years', p: 'A Coalisland P4 or a Maghera Year 12 is matched by key stage and school year, and CCEA exam titles are used. Lessons are taught in English.' },
      { h3: 'Trial at no cost', p: 'A full lesson free of charge, followed by an honest recommendation.' },
      { h3: 'Grouped by level', p: 'Classes of five to ten at one stage, from across the UK.' },
      { h3: 'Term pattern', p: 'Two lessons weekly through term, with holidays free.' },
      { h3: 'Local time kept', p: 'Spring and autumn clock changes leave your slot where it was; our teachers adapt.' }
    ],
    spec: { title: 'Why online suits small towns', p: 'Five learners at the same level, free at the same hour, rarely live in one small town. Online, a Moy or Castledawson learner joins exactly the right class.' }
  },

  fees: {
    h2: 'Mid Ulster fees',
    intro: 'Dungannon or Draperstown, one fee applies, the same as in every country we teach outside India.',
    first: 'A full lesson free, then clear guidance.',
    group: 'About eight lessons a month with five to ten other learners.',
    private: 'About eight lessons a month with a tutor of your own.',
    closer: 'We price in US dollars only; no sterling figures. Billing begins after the trial fixes a course and a weekly time, and holidays, missed lessons and format changes are covered on the pricing page.'
  },

  reviewsH2: 'What families say on Google',

  book: {
    h2: 'Book a free Mid Ulster lesson',
    intro: 'Tell us the learner\'s age or school year and something they like. The trial could be a Scratch machine game, a first Python program, or the Wellbrook capacity puzzle.',
    success: 'Thank you. Your Mid Ulster request has been received.'
  },

  faq: {
    h2: 'Mid Ulster questions',
    intro: 'The district, the mill project and practical points.',
    items: [
      { q: 'What is the population of Mid Ulster?', a: 'The 2021 census counted 150,293 usual residents in Mid Ulster, according to NISRA.' },
      { q: 'What are the biggest towns in Mid Ulster?', a: 'NISRA estimates Dungannon at 16,282, Cookstown at 12,546 and Magherafelt at 9,648.' },
      { q: 'What is the Wellbrook project?', a: 'Learners model the 1764 plan for a linen mill as stages in Python, find the slowest stage, and test whether seven to eight thousand pieces a year was possible.' },
      { q: 'What is a bottleneck in a production line?', a: 'The slowest stage, which limits how much the whole line can produce however fast the other stages are.' },
      { q: 'When did bleaching begin at Wellbrook?', a: 'In 1764, according to the Historic Environment Division record.' },
      { q: 'Are the lessons online?', a: 'Yes. Everything is taught live by video, from home.' },
      { q: 'Can a Mid Ulster student get help with CCEA exams?', a: 'Yes, in maths and computing. We teach for understanding and never promise grades.' },
      { q: 'What ages can learn?', a: 'From 6 up to 67, on a course that suits each learner.' },
      { q: 'How much do lessons cost?', a: 'The first is free. After it, a group costs USD 100 a month and private lessons USD 150 a month.' },
      { q: 'Are there lessons in school holidays?', a: 'Lessons pause for school breaks; just list the weeks your school is closed.' }
    ]
  },

  next: {
    eyebrow: 'Neighbouring pages',
    h2: 'More Northern Ireland pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a> counts how far a star catalogue is out of order, <a class="cg-inline-link" href="/coding-classes-in-fermanagh-and-omagh">Fermanagh and Omagh</a> dates a canal bridge from clues, and <a class="cg-inline-link" href="/coding-classes-in-mid-and-east-antrim">Mid and East Antrim</a> splits a gasworks\' growth. Every district is linked from our <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland</a> page, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Mid Ulster',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/best-coding-class-in-armagh', label: 'Armagh' },
    { href: '/ccea-gcse-maths-help', label: 'CCEA GCSE maths' }
  ],

  personalityCss: `
.cg-root.cg-mul .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-mul .cg-hero h1 { font-weight: 715; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-mul .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-mul .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mul .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.019em; }
.cg-root.cg-mul .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-mul .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mul .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-mul .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-mul .cg-callout { border-left-width: 5px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Mid Ulster (N09000009). NISRA Census 2021 MS-A01: 150,293. DEAs (exact, not summed): Carntogher 17,167; Clogher Valley 21,997; Cookstown 24,617; Dungannon 25,640; Magherafelt 19,266; Moyola 18,586; Torrent 23,020. Settlements (NISRA approximations): Dungannon 16,282; Cookstown 12,546; Magherafelt 9,648; Coalisland 6,349; Maghera 4,235; Castledawson 2,348; Moneymore 2,141; Moy 1,944; Draperstown 1,853; Fivemiletown 1,341. Department for Communities historic building HB09/04/003, Wellbrook Beetling Mill, Cookstown: "The history of bleaching at Wellbrook began in 1764"; memorial: "a green, containing ten acres, which will enable them to bleach from seven to eight thousand pieces of linen annually"; "two wash mills, four pair of rubbing boards, two beetling engines, a buck house and boiling house"; "a drying loft, to contain five hundred pieces of linen"; "The beetles here were started for the first time in October 1765"; National Trust ownership since 1969; present building "no older than about 1830".',
    localProject: 'Invented times, 2,500 h year: wash 2 x 0.4 h -> 5/h 12,500; rub 4 x 1.0 h -> 4/h 10,000; beetle 2 x 0.8 h -> 2.5/h 6,250; loft 500 x 4 days -> 31,250. Mill 6,250. 7,500 needs beetling 3/h (0.67 h each). 3 engines 9,375; 4 engines 10,000 (rubbing limits); +5th board 12,500 three-way tie. Slips: sum 60,000, average 15,000. Lesson family: production-line capacity, slowest stage, upgrade planning.',
    requiredMentions: [
      'Coalisland',
      'Castledawson',
      'Moneymore',
      'Draperstown',
      'Fivemiletown',
      'Carntogher',
      'Clogher Valley',
      'Moyola',
      'Wellbrook',
      'beetling engines'
    ],
    sources: [
      { claim: 'NISRA Census 2021 MS-A01 usual resident population by LGD, DEA and settlement.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'Department for Communities Historic Buildings database, record HB09/04/003, Wellbrook Beetling Mill.', url: 'https://apps.communities-ni.gov.uk/Buildings/buildview.aspx?id=5836' },
      { claim: 'Department for Communities Historic Environment Division GIS data (Historic Buildings layer with council field).', url: 'https://services2.arcgis.com/BdBkthNLO9mzGAMO/arcgis/rest/services/Historic_Environment_Division_GIS_Data/FeatureServer' }
    ],
    rejectedClaims: [
      'Real processing times or output at Wellbrook: not in the record; all times are ours.',
      'The dating dispute between guidebook and record: noted in the record, not used.',
      'Bellaghy Bawn and Plantation history: considered, not used.',
      'Transfer test advice and community background statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.'
    ]
  }
};
