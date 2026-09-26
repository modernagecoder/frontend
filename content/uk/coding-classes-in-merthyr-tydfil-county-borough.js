'use strict';
// Merthyr Tydfil county borough (cg- county page, UK cluster Phase 7, row 293). One principal area; titled with the short
// name. Spine: how much does an iron bridge grow between winter and summer, and what happens if it cannot? Anchor (read
// raw 26 September 2026): Cadw listed building record 11408, Grade II*, Pont-y-Cafnau: "Believed to date from ca 1794
// (probably the earliest known iron railway bridge)"; "Originally carried a tramroad (4-foot gauge) from Cyfarthfa
// Ironworks immediately to S"; "a pair of A-frame trusses with braces and vertical 'king-posts'"; "Straight ironwork
// girders to deck which retains some chairs and seating from tramroad"; "Scheduled Ancient Monument: Gm424".
// Our model (scratchpad wal/thermal.py; invented span, typical values ours): cast iron alpha 10.5e-6 per K, steel 12e-6,
// cast iron E 100 GPa. 14 m span: -10 to 30 C grows 5.88 mm (steel 6.72); 0 to 20 C 2.94 mm; -10 to 50 C 8.82 mm (steel
// 10.08). Fully restrained stress E alpha dT: 20 K 21 MPa, 40 K 42 MPa, 60 K 63 MPa. A 0.9 m plate grows 0.378 mm over
// 40 K; 1 km of continuous steel rail over 40 K would grow 480 mm if free.
// Lesson family: thermal expansion, restrained stress, why joints and gaps exist; screened (thermal expansion,
// coefficient of expansion: 0 hits).
// Place facts: ONS Census 2021 TS001 via Nomis: Merthyr Tydfil W06000024 58,836. ONS built-up areas (published; OA sums
// within 7): Merthyr Tydfil 39,535; Treharris 5,045; Troedyrhiw and Pentrebach 3,775; Aberfan 2,430; Trelewis 2,020. No
// Welsh-language statistics. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'MERTHYR TYDFIL', blurb: 'Merthyr Tydfil, Treharris, Troedyrhiw and Trelewis, and a Pont-y-Cafnau lesson on how iron grows in the summer sun.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-merthyr-tydfil-county-borough',
  code: 'mty',
  accent: '#7A352B',
  accentRationale: 'Merthyr Tydfil: an ironworks rust red from the solver (7.13:1 on the darkest paper tint), pinker than the Fife red and lighter than the Clackmannanshire one',
  pageType: 'governorate',
  place: {
    name: 'Merthyr Tydfil county borough',
    eyebrow: 'Merthyr Tydfil county borough',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Cardiff', href: '/best-coding-class-in-cardiff' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Merthyr Tydfil',
  title: 'Coding Classes in Merthyr Tydfil | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Merthyr Tydfil county borough, from Merthyr town to Treharris, Troedyrhiw, Pentrebach, Aberfan and Trelewis.',
  ogDescription: 'Coding classes for all of Merthyr Tydfil, and a Pont-y-Cafnau project: calculate how much an iron bridge grows from winter to summer in Python, and why rails need gaps.',
  twitterDescription: 'Merthyr Tydfil coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Merthyr Tydfil',
    description: 'Ability-placed online coding, Python, materials maths and mathematics for children, teenagers and adults across Merthyr Tydfil county borough, taught live in English.'
  },

  h1: 'Coding classes in Merthyr Tydfil',
  capsuleQ: 'What are the best coding classes in Merthyr Tydfil?',
  capsule: 'Merthyr Tydfil county borough counted 58,836 usual residents at the 2021 census, the smallest total of any Welsh principal area in that release. Most live in the Merthyr Tydfil built-up area itself, with Treharris, Troedyrhiw and Pentrebach, Aberfan and Trelewis the other sizeable places. Every lesson is taught live over video by teachers in India; the first one is free and pins down a starting level for a Year 3 pupil, a Year 13 student or an adult. Learners from 6 to 67 study coding, Python and maths, alone with a teacher or in a class of five to ten. The Merthyr project begins at an iron bridge from around 1794. Staying on costs USD 100 each month in a group or USD 150 each month one-to-one.',
  lead: 'By the site of the old Cyfarthfa Ironworks, Cadw lists Pont-y-Cafnau at Grade II* and records that it probably dates from about 1794, making it probably the earliest known iron railway bridge. It carried a tramroad of four-foot gauge on a pair of A-frame iron trusses, and some of the chairs that held the rails survive on its deck. Iron has a habit engineers must always respect: it grows when it warms and shrinks when it cools. A bridge or a rail that cannot move as it grows pushes on whatever holds it. How much does iron grow between a Welsh winter and summer, and how big is that push? This page\'s project works it out in Python.',
  wa: 'Hello Modern Age Coders, we are in Merthyr Tydfil and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Merthyr Tydfil',
    h2: 'Where Merthyr learners start',
    intro: 'A Year 2 pupil in Troedyrhiw who likes experiments, a Year 6 in Merthyr ready for typed code, a Year 10 in Treharris beginning WJEC GCSE Computer Science, and an adult in Trelewis learning Python. Each opens with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with hot and cold, growing and shrinking games.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Tiny numbers, decimals and units, made friendly by coding.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, including standard form and rates of change.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from zero, up to engineering calculations.' }
    ]
  },

  sections: [
    {
      id: 'merthyr-tydfil', tint: '', eyebrow: 'Merthyr Tydfil in figures',
      h2: '58,836 people in Merthyr Tydfil county borough',
      intro: 'ONS counted 58,836 usual residents in the county borough in March 2021, which we read through Nomis; the table uses ONS built-up areas from the same census.',
      body: [
        { kind: 'table', caption: 'Built-up areas in Merthyr Tydfil county borough, ONS Census 2021', head: ['Area', 'People'], rows: [
          ['Merthyr Tydfil', '39,535'],
          ['Treharris', '5,045'],
          ['Troedyrhiw and Pentrebach', '3,775'],
          ['Aberfan', '2,430'],
          ['Trelewis', '2,020']
        ] },
        { kind: 'p', text: 'Our output-area arithmetic matches each of these to within seven people. The county borough also takes in communities such as Dowlais and Quakers Yard. Schools teach the Curriculum for Wales, and older pupils sit WJEC GCSEs and A levels. Merthyr Tydfil County Borough Council decides term dates; we have not read them, so each family tells us its holidays.' },
        { kind: 'callout', h3: 'Cardiff and WJEC help', p: 'The capital has its own <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> page. For exams: <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> and <a class="cg-inline-link" href="/gcse-maths-and-numeracy-wales-help">GCSE Maths and Numeracy in Wales</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Merthyr project',
      h2: 'Millimetres from the weather',
      intro: 'A tiny coefficient, a long span, and the push when growth is blocked.',
      body: [
        { kind: 'p', text: 'The span in the model is invented at 14 metres; the record does not give one. Every material has a coefficient of thermal expansion: the fraction of its length it grows for each degree of warming. For cast iron a typical value is about 10.5 millionths per degree. Growth equals that coefficient times the length times the temperature change, and the learner codes it in one line of Python, then runs it for different seasons. Numbers this small are a good reason to learn standard form.' },
        { kind: 'table', caption: 'Our invented 14 m iron span, typical material values, 26 September 2026', head: ['Situation', 'Result'], rows: [
          ['Cold winter night at -10 C to hot summer day at 30 C', 'Grows about 5.9 mm'],
          ['A milder swing, 0 C to 20 C', 'Grows about 2.9 mm'],
          ['Sun-baked iron at 50 C against -10 C', 'Grows about 8.8 mm'],
          ['Held rigidly, 40 degree rise', 'Builds about 42 megapascals of stress'],
          ['One short tram plate, 0.9 m, over 40 degrees', 'Grows about 0.38 mm'],
          ['A kilometre of continuous steel rail, 40 degrees', 'Would grow about 48 cm if free']
        ] },
        { kind: 'p', text: 'A few millimetres sounds trivial, but it matters if the iron cannot move. Held rigidly at both ends, the span cannot grow, so it pushes, and the push per square metre equals the stiffness of the iron times the growth it has been denied. For a 40 degree rise the model gives about 42 megapascals, roughly the weight of 430 kilograms pressing on every square centimetre. Designers either let structures slide on bearings, leave gaps, or make them strong enough to take the load.' },
        { kind: 'p', text: 'Early tramroads were built from short iron plates, each less than a metre long, so each gap only had to absorb a fraction of a millimetre. Join a kilometre of rail into one continuous length and the free growth would be about half a metre, which is why modern continuous rail is stretched and clamped at installation so it stays in tension rather than buckling. The learner can plot growth against length and temperature and see how the small effect scales.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Watch a balloon on a bottle warm and cool, then build a Scratch model where a bar grows in the sun.' },
          { h3: 'Ages 11 to 15', p: 'Code the growth formula in Python with standard form and print a table for different seasons.' },
          { h3: 'Ages 15 and up', p: 'Add restrained stress, compare cast iron and steel, and model a rail made of many short plates with gaps.' }
        ] },
        { kind: 'callout', h3: 'A real bridge, typical numbers', p: 'Pont-y-Cafnau\'s history comes from Cadw\'s record. The span, temperatures and material properties are invented or typical values, so the millimetres describe the physics, not measurements of the real bridge.' }
      ]
    },
    {
      id: 'pont-y-cafnau', tint: 'deep', eyebrow: 'Why Pont-y-Cafnau',
      h2: 'Probably the earliest iron railway bridge',
      intro: 'From Cadw\'s record.',
      body: [
        { kind: 'table', caption: 'Pont-y-Cafnau, Cadw listed building record 11408, Grade II*', head: ['Record detail', 'What it says'], rows: [
          ['Date', 'Believed to date from about 1794'],
          ['Significance', 'Probably the earliest known iron railway bridge'],
          ['Use', 'Carried a four-foot gauge tramroad from Cyfarthfa Ironworks'],
          ['Structure', 'A pair of A-frame trusses with braces and vertical king-posts on rubble abutments'],
          ['Deck', 'Straight iron girders, keeping some tramroad chairs and seating'],
          ['Protection', 'Also a scheduled ancient monument, Gm424']
        ] },
        { kind: 'p', text: 'Thermal expansion shapes the design of bridges, railways, pipelines, electronics, phone screens and spacecraft. Computer chips even fail if their layers expand at different rates. Engineers simulate these effects in software, starting from the same one-line formula this project uses. A Merthyr pupil who has turned 10.5 millionths into millimetres and megapascals has taken the first step in that kind of modelling.' },
        { kind: 'p', text: 'We have no connection with Cadw or Merthyr Tydfil County Borough Council. Cadw wrote the record; the expansion model and any mistakes in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From balloons to materials modelling',
    intro: 'Year bands are a first guess; the trial lesson confirms the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Hot and cold', p: 'Block coding with changing sizes, temperatures and simple rules.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Decimals and units', p: 'Typed Python with small numbers, units and tables.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Standard form and physics', p: 'Scientific notation and materials physics alongside WJEC GCSE and A level work.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Engineering sums', p: 'Python for adults, from quick formulas to reusable calculators.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and small effects',
    h2: 'An AI can quote an expansion coefficient in seconds. Will it tell you what the millimetres do?',
    intro: 'A small number multiplied by a large stiffness is not small.',
    p1: 'Ask a chatbot how much an iron bridge expands and it will likely give a correct few millimetres. Whether it goes on to say what happens if the bridge cannot move, and that the resulting stress can be tens of megapascals, depends on whether anyone asks the follow-up.',
    p2: 'A Merthyr learner who has calculated both the growth and the restrained stress knows which question matters. Asking the follow-up is exactly the judgement that AI does not supply on its own.',
    closer: 'Asking what happens next, after the first answer, is why a Merthyr Tydfil teenager should keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'From Dowlais to Treharris, lessons at home',
    intro: 'All the communities of the county borough join by video.',
    cells: [
      { h3: 'Learners build it', p: 'Pupils write each program while the teacher follows along on the shared screen.' },
      { h3: 'Welsh school years', p: 'An Aberfan Year 5 or a Merthyr Year 12 is placed by school year and the Curriculum for Wales, with WJEC exam names. Lessons are in English.' },
      { h3: 'Free first lesson', p: 'A full lesson for nothing, then clear advice.' },
      { h3: 'Classes by level', p: 'Five to ten learners working at the same level.' },
      { h3: 'Term time only', p: 'Two lessons a week in term; none in the holidays.' },
      { h3: 'UK time, both seasons', p: 'The lesson stays at its UK hour through summer and winter time; teachers on India time adjust.' }
    ],
    spec: { title: 'Why groups go beyond the town', p: 'Five learners at one level, free at the same time, rarely live in one small county borough. Grouping by level gives a pupil in Trelewis or Pentrebach a class that fits.' }
  },

  fees: {
    h2: 'Fees in Merthyr Tydfil',
    intro: 'Merthyr or Treharris, the fee is identical, and matches every country we teach outside India.',
    first: 'A complete lesson, free of charge, then our recommendation.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month, one-to-one.',
    closer: 'Fees are set in US dollars, never sterling. Billing starts only when the trial has fixed a course and a weekly time; the pricing page covers holidays, absences and moving between formats.'
  },

  reviewsH2: 'What reviewers say on Google',

  book: {
    h2: 'Book a free Merthyr Tydfil lesson',
    intro: 'Tell us the learner\'s age or year and an interest, and we will design the trial around it: a Scratch science game, some Python, or the iron bridge on this page.',
    success: 'Thank you. Your Merthyr Tydfil request has been received.'
  },

  faq: {
    h2: 'Merthyr Tydfil questions',
    intro: 'The county borough, the bridge project and practical points.',
    items: [
      { q: 'How many people live in Merthyr Tydfil county borough?', a: 'The 2021 census counted 58,836 usual residents.' },
      { q: 'What are the main towns in the county borough?', a: 'ONS 2021 built-up areas: Merthyr Tydfil 39,535, Treharris 5,045, Troedyrhiw and Pentrebach 3,775, Aberfan 2,430 and Trelewis 2,020.' },
      { q: 'What is the Pont-y-Cafnau project?', a: 'Learners calculate how much an invented 14 metre iron span grows between winter and summer in Python, the stress if it is held rigid, and why short tram plates with gaps coped better than one long rail would.' },
      { q: 'What is thermal expansion?', a: 'The way most materials grow slightly when they warm and shrink when they cool, by an amount set by their coefficient of expansion.' },
      { q: 'How old is Pont-y-Cafnau?', a: 'Cadw believes it dates from about 1794 and describes it as probably the earliest known iron railway bridge.' },
      { q: 'Where do lessons take place?', a: 'Online, so learners join from home anywhere in the county borough.' },
      { q: 'Do you teach WJEC GCSE Computer Science?', a: 'Yes, and GCSE maths in Wales. We focus on understanding and never promise grades.' },
      { q: 'What ages do you teach?', a: 'Six to 67, from block coding for children to Python for adults.' },
      { q: 'What does it cost?', a: 'The first lesson is free, then USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons pause in the holidays?', a: 'Yes. Send us your school\'s holiday dates and we stop for them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More South Wales pages',
    html: '<a class="cg-inline-link" href="/coding-classes-in-caerphilly-county-borough">Caerphilly</a> checks unit conversions in a colliery record, <a class="cg-inline-link" href="/coding-classes-in-blaenau-gwent">Blaenau Gwent</a> photographs a clock with a pinhole camera, and <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> has a city page. More Welsh areas appear on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page as they go live, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Merthyr Tydfil and South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-cardiff', label: 'Cardiff' },
    { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science' }
  ],

  personalityCss: `
.cg-root.cg-mty .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-mty .cg-hero h1 { font-weight: 720; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-mty .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-mty .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mty .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-mty .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-mty .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mty .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-mty .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-mty .cg-callout { border-left-width: 5px; border-radius: 0 9px 9px 0; }
`,

  dossier: {
    curriculumAuthority: 'Merthyr Tydfil (W06000024), Merthyr Tydfil County Borough Council. ONS Census 2021 TS001 via Nomis: 58,836 (the smallest of the 22 Welsh principal areas in the same Nomis release: Blaenau Gwent 66,904 next). ONS built-up areas (published; OA sums within 7): Merthyr Tydfil 39,535; Treharris 5,045; Troedyrhiw and Pentrebach 3,775; Aberfan 2,430; Trelewis 2,020. Cadw listed building record 11408, Grade II*, Pont-y-Cafnau: "Believed to date from ca 1794 (probably the earliest known iron railway bridge)"; "Originally carried a tramroad (4-foot gauge) from Cyfarthfa Ironworks immediately to S"; "a pair of A-frame trusses with braces and vertical \'king-posts\'"; "Straight ironwork girders to deck which retains some chairs and seating from tramroad"; "Scheduled Ancient Monument: Gm424". Dowlais and Quakers Yard named as communities (Cadw records 11490, 11491, 11514).',
    localProject: 'Invented 14 m span; typical alpha cast iron 10.5e-6/K, steel 12e-6/K, E cast iron 100 GPa. Growth: -10 to 30 C 5.88 mm (steel 6.72); 0 to 20 C 2.94; -10 to 50 C 8.82 (steel 10.08). Restrained stress: 20 K 21 MPa, 40 K 42, 60 K 63. 0.9 m plate over 40 K 0.378 mm. 1 km steel rail 40 K 480 mm free. 42 MPa = about 428 kg-force per cm2 (ours). Lesson family: thermal expansion, restrained stress.',
    requiredMentions: [
      'Treharris',
      'Troedyrhiw',
      'Pentrebach',
      'Trelewis',
      'Pont-y-Cafnau',
      'Cyfarthfa',
      'Dowlais',
      'Quakers Yard',
      'thermal expansion',
      '10.5 millionths'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Merthyr Tydfil, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 11408: Pont-y-Cafnau.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=11408' }
    ],
    rejectedClaims: [
      'Real span, temperatures or stresses at Pont-y-Cafnau: not in the record; invented or typical values.',
      'Cast iron strength limits: not claimed.',
      'The Aberfan disaster: not discussed; Aberfan appears only as a census built-up area.',
      'Penydarren locomotive history: not used on this page.',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.'
    ]
  }
};
