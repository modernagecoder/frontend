'use strict';
// Westminster (cg- London borough page, UK cluster Phase 5, row 187). Named sources only.
// Spine: a penny on a pendulum. UK Parliament, "Facts and figures: Big Ben and Elizabeth Tower" (parliament.uk, read 25
// September 2026): pendulum 4.4 m long, weighs 310 kg, bob 203 kg of concentric steel and zinc tubes; each pendulum
// "beat" lasts 2 seconds; adjusted with pre-decimal pennies; adding one penny makes the clock gain two-fifths of a
// second in 24 hours; minute hands 4.2 m long, travel the equivalent of 190 km a year; dials 7 m across; tower 96 m.
// Maths: simple pendulum with a 4 s full swing needs L = g T^2 / (4 pi^2) = 3.98 m (g 9.81); a simple 4.4 m pendulum
// would swing in 4.21 s; the real pendulum is not simple (mass spread along its length), so its effective length is
// shorter than its overall length. One penny: 0.4 s a day = 4.6 parts per million faster = effective length 37
// micrometres shorter (dT/T = dL/2L). Minute-hand tip: 2 pi x 4.2 m an hour = 231 km a year; 190 km matches a point
// 3.45 m from the centre (a puzzle for learners, no error alleged). Historic England: 1226284 Houses of Parliament and
// The Palace of Westminster (Grade I); 1291494 Westminster Abbey (Grade I). NHLE entry 1066050 "THE CLOCK TOWER" is a
// different Grade II building and is not used. Lesson family: pendulum period, square-root sensitivity, simple vs real
// models; screened 25 September 2026 (pendulum 0). Parliament's Great Clock sub-page returned 403 and was not used.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'WESTMINSTER', blurb: 'The Palace of Westminster, Westminster Abbey and a project on how one old penny changes the Great Clock.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-westminster-london',
  code: 'wst',
  accent: '#8B1857',
  accentRationale: 'Westminster: a deep rose-crimson from the solver (7.20:1 on every paper tint), the furthest available colour from every page already published',
  pageType: 'governorate',
  place: {
    name: 'Westminster',
    eyebrow: 'City of Westminster',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Westminster, London',
  title: 'Coding Classes in Westminster and Marylebone | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Westminster: Marylebone, Pimlico, Paddington, Maida Vale, Soho, Mayfair and St John\'s Wood. Ages 6 to 67.',
  ogDescription: 'Westminster coding and Python classes, with a physics project on the Great Clock\'s pendulum: why one pre-decimal penny changes the time by two-fifths of a second a day.',
  twitterDescription: 'Westminster coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Westminster Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the City of Westminster, taught live in English.'
  },

  h1: 'Coding classes in Westminster',
  capsuleQ: 'What are the best coding classes in Westminster?',
  capsule: 'Westminster is the central London borough of Marylebone, Pimlico, Paddington, Maida Vale, Soho, Mayfair, St John\'s Wood and Victoria, with 204,236 residents at the 2021 Census and more listed buildings than any page in this series has yet counted, the Palace of Westminster and Westminster Abbey among them. Good coding classes connect a formula to something real enough to hear ticking, and this page does that with the Great Clock\'s pendulum: Parliament\'s own figures, a physics formula, and the question of how a single old penny speeds the clock by two-fifths of a second a day. A teacher in India works with each learner live on video: one to one, or in a small class of five to ten at the same stage, for anyone aged 6 to 67. The first lesson is free. After that it costs USD 100 a month in a group, or USD 150 a month privately.',
  lead: 'UK Parliament publishes the vital statistics of the Great Clock in the Elizabeth Tower. Its pendulum is 4.4 metres long and weighs 310 kilograms. Each swing, or beat, takes exactly two seconds. And it is fine-tuned with pre-decimal pennies: adding one penny makes the clock gain two-fifths of a second over a day. Our learners take those numbers and a formula from school physics, the period of a pendulum, and ask what they imply. A perfect textbook pendulum that beats every two seconds would be just under four metres long, not 4.4, which tells us something about real pendulums. And a gain of two-fifths of a second a day turns out to mean shortening the pendulum\'s effective length by about 37 thousandths of a millimetre. A penny, it turns out, is a very precise tool.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Westminster.',

  picks: {
    eyebrow: 'Course picks for Westminster',
    h2: 'Courses Westminster learners start with',
    intro: 'Picture a Year 2 child in Pimlico who swings on every swing in the park and counts, a Year 10 pupil in Marylebone preparing for GCSE physics, a Year 13 student in Maida Vale applying for engineering, and a Westminster office worker who has walked past the clock for years without asking how it works. Each can start with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch pendulum that swings, with a slider for length and a counter for swings per minute.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with a formula: work out how long a pendulum must be to beat once a second.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including the Great Clock penny calculation on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults curious about the maths inside everyday engineering, explained step by step with code.' }
    ]
  },

  sections: [
    {
      id: 'westminster', tint: '', eyebrow: 'Westminster by the numbers',
      h2: '204,236 residents and 4,003 listed entries',
      intro: 'Figures come from the organisation named beside them, or from our count of its open data.',
      body: [
        { kind: 'table', caption: 'Westminster in four figures', head: ['What', 'Number', 'Source'], rows: [
          ['People counted in the 2021 Census', '204,236', 'ONS table TS001'],
          ['Heritage List entries we counted inside the borough', '4,003, including 206 at Grade I', 'Historic England data, 25 September 2026'],
          ['Length of the Great Clock\'s pendulum', '4.4 m, weighing 310 kg', 'UK Parliament, facts and figures'],
          ['Lines at Westminster station', 'Circle, District and Jubilee', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Parliament', p: 'Historic England lists the Houses of Parliament and the Palace of Westminster at Grade I.' },
          { h3: 'The Abbey', p: 'Westminster Abbey, the Collegiate Church of St Peter, is also Grade I, one of 206 Grade I entries we counted in the borough.' },
          { h3: 'Libraries', p: 'The council lists libraries at Charing Cross, Church Street, Maida Vale, Marylebone, Mayfair, Paddington, Pimlico and Victoria, and a Westminster Music Library.' }
        ] }
      ]
    },
    {
      id: 'clock', tint: 'tint', eyebrow: 'The data',
      h2: 'What Parliament says about the Great Clock',
      intro: 'Every number in this table comes from UK Parliament\'s facts and figures page about Big Ben and the Elizabeth Tower.',
      body: [
        { kind: 'table', caption: 'Great Clock facts from UK Parliament', head: ['Part', 'Figure'], rows: [
          ['Pendulum length', '4.4 metres'],
          ['Pendulum weight', '310 kilograms, with a 203 kilogram bob of steel and zinc tubes'],
          ['Length of one beat', '2 seconds'],
          ['Effect of adding one pre-decimal penny', 'The clock gains two-fifths of a second in 24 hours'],
          ['Minute hands', '4.2 metres long, travelling the equivalent of 190 kilometres a year'],
          ['Height of the Elizabeth Tower', '96 metres']
        ] },
        { kind: 'p', text: 'A beat is one swing, from one side to the other, so a full there-and-back cycle takes four seconds. The bob is made of two metals, steel and zinc, in nested tubes; learners are invited to find out, as an extension, why a clockmaker would combine two metals that expand by different amounts when warm.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'From a school formula to a penny\'s worth of physics',
      intro: 'Learners code the pendulum formula, compare it with the real clock, and then work out what one penny actually does.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. The formula', p: 'A simple pendulum\'s full swing takes 2 pi times the square root of its length divided by g, the pull of gravity, about 9.81 metres per second squared.' },
          { h3: '2. Real against simple', p: 'For a four-second swing the formula gives a length of 3.98 metres. The real pendulum is 4.4 metres, because its weight is spread along its length rather than all at the tip.' },
          { h3: '3. The penny', p: 'Gaining 0.4 seconds a day is 4.6 parts in a million. Because the period depends on the square root of length, that needs the effective length to shrink by twice as much: about 37 micrometres.' }
        ] },
        { kind: 'table', caption: 'What the numbers imply, computed 25 September 2026', head: ['Question', 'Answer'], rows: [
          ['Length of a perfect simple pendulum with a 4-second swing', '3.98 m'],
          ['Swing of a perfect simple pendulum 4.4 m long', '4.21 s'],
          ['Change in rate from one penny', '4.6 parts per million faster'],
          ['Shortening of effective length that one penny represents', 'about 37 micrometres, 0.037 mm'],
          ['Distance a 4.2 m minute-hand tip travels in a year', 'about 231 km']
        ] },
        { kind: 'p', text: 'The last row is a small puzzle. Parliament gives 190 kilometres a year for the minute hands, while the very tip of a 4.2 metre hand travels about 231. A point 3.45 metres from the centre would travel 190. Learners discuss which part of the hand the published figure might describe, rather than assuming either number is wrong: a good habit whenever a calculation and a published figure disagree.' },
        { kind: 'callout', h3: 'Why this is worth more than an AI summary', p: 'An AI assistant will happily repeat that pennies adjust Big Ben. A learner who has turned "two-fifths of a second a day" into 37 micrometres, found that the real pendulum is not the textbook one, and spotted a mismatch in the minute-hand figure, has practised the three things that matter most with numbers: use the right formula, question the model, and check published claims. No summary can do that for them.' }
      ]
    },
    {
      id: 'sqrt', tint: 'tint', eyebrow: 'The key idea',
      h2: 'Why square roots make pendulums forgiving',
      intro: 'The period depends on the square root of the length, which halves the effect of any change. That is exactly why fine adjustment is possible.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Halving effect', p: 'Change the length by 1% and the period changes by only about 0.5%. Clockmakers use this to make tiny, controllable corrections.' },
          { h3: 'Tiny numbers', p: 'Parts per million are hard to picture. Learners convert them into seconds a day, then into micrometres of length, until the size makes sense.' },
          { h3: 'Models have limits', p: 'The simple formula assumes all the mass is at one point. The gap between 3.98 m and 4.4 m shows exactly where that assumption fails.' }
        ] },
        { kind: 'p', text: 'GCSE physics students meet pendulums and can follow every step; A-level students can go further with the physics of real, compound pendulums and derive the square-root sensitivity. The clock figures are UK Parliament\'s own; the calculations are ours, using g of 9.81 metres per second squared, dated 25 September 2026. UK Parliament, Westminster City Council, Historic England, TfL and the ONS have no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Westminster station, and a desk at home',
      intro: 'Parliament, the Abbey and three Tube lines sit within a few hundred metres. Our classes need none of them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Westminster', p: 'Three lines meet at Westminster station, Circle, District and Jubilee, according to TfL\'s open data.' },
          { h3: 'Maida Vale to Pimlico', p: 'Maida Vale in the north and Pimlico by the river in the south are far apart, yet learners from both can sit in the same online class.' },
          { h3: 'Regular as clockwork', p: 'Classes keep a steady beat of their own: two evenings a week, five to ten learners at one stage.' }
        ] },
        { kind: 'spec', title: 'Westminster in London', p: 'The City of Westminster is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> covers all of them and the City of London, linking each page as it goes live, including <a class="cg-inline-link" href="/coding-classes-in-camden-london">Camden</a> to the north and <a class="cg-inline-link" href="/coding-classes-in-kensington-and-chelsea-london">Kensington and Chelsea</a> to the west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From swinging to square roots',
    intro: 'The free lesson shows us where a learner really is, and that decides where they start.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Swings and timing', p: 'Children animate a pendulum in Scratch, change its length and count the swings.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Formulas in code', p: 'Python that turns a physics formula into a calculator and tests it against real measurements.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Sensitivity and models', p: 'Square roots, parts per million and simple versus real models, strong ground for GCSE and A-level physics.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Everyday engineering', p: 'Adults explore the maths behind machines they see daily, from clocks to cranes.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can quote the pendulum formula. Why should a Westminster teenager use it on a real clock?',
    intro: 'Because applying a formula to reality is where understanding is tested.',
    p1: 'Ask an AI for the period of a pendulum and it will give you the textbook formula. Ask it why the Great Clock\'s pendulum is 4.4 metres rather than 3.98, or what a penny does in micrometres, and a careful answer needs exactly the reasoning this project practises. Learners who have done it know that every model has assumptions, that tiny rates hide measurable physical changes, and that published figures sometimes need a second look.',
    p2: 'Those habits matter far beyond clocks, in any job where a calculation meets the real world. AI will keep supplying formulas; people who can apply and question them will keep being needed.',
    closer: 'Westminster keeps the country\'s most famous clock running with a pile of old pennies. A learner here who can explain why that works has turned a curiosity into real physics.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Paddington to Victoria, live online',
    intro: 'Anywhere in Westminster, class begins as soon as the call connects.',
    cells: [
      { h3: 'At home', p: 'Learners need their own screen, a set of headphones and a broadband line good enough for an hour of video, nothing more.' },
      { h3: 'School stages in England', p: 'We describe progress in English Key Stages, from Key Stage 1 to sixth form, and name GCSE and A level where relevant. Every lesson is taught in English.' },
      { h3: 'Free to try', p: 'The first lesson is real teaching and ends with a suggested level and course; no card is requested.' },
      { h3: 'Stage-based classes', p: 'Five to ten learners at one stage make up each class, from across the UK and abroad, so there is usually a sensible time.' },
      { h3: 'Two evenings weekly', p: 'Most classes run two evenings a week, pausing for holidays and exams by arrangement.' },
      { h3: 'Always UK time', p: 'Teachers work from India, and the times we send are always UK times.' }
    ],
    spec: { title: 'A central borough, a wide class', p: 'About 204,000 people live in Westminster, and a strong class still needs five learners at the same stage free together, so our groups draw from far beyond it.' }
  },

  fees: {
    h2: 'Fees for Westminster families',
    intro: 'A free first lesson, then one monthly fee, the same in Mayfair as in Church Street.',
    first: 'A full lesson with a teacher, free, ending with a recommended level, course and weekly time.',
    group: 'About eight live lessons a month in a class of five to ten at one stage.',
    private: 'About eight live lessons a month, one to one.',
    closer: 'Fees are charged in US dollars for every family outside India, Westminster included, so you will find no sterling figures on the site. The first payment falls due only after the free lesson, once a course and a weekly evening have been chosen. The pricing page covers pauses, missed lessons and moving between class and private teaching.'
  },

  reviewsH2: 'Six families on Google, unedited',

  book: {
    h2: 'Book your free lesson',
    intro: 'An age or school year and one interest is enough for us to plan. We might start with a Scratch pendulum, a Python formula calculator, or the Great Clock project on this page.',
    success: 'Thank you. Your Westminster lesson request is with our team.'
  },

  faq: {
    h2: 'Questions from Westminster',
    intro: 'About the borough, the Great Clock project and our lessons.',
    items: [
      { q: 'How many people live in Westminster?', a: 'The 2021 Census counted 204,236 usual residents in the City of Westminster, in ONS table TS001.' },
      { q: 'How long is the Great Clock\'s pendulum?', a: 'UK Parliament\'s facts and figures page says 4.4 metres, weighing 310 kilograms, with each beat lasting two seconds.' },
      { q: 'How can a penny change the time?', a: 'Parliament says adding one pre-decimal penny makes the clock gain two-fifths of a second in 24 hours. Our calculation shows that is the same as shortening the pendulum\'s effective length by about 37 micrometres.' },
      { q: 'Why is the real pendulum longer than the formula predicts?', a: 'The simple formula assumes all the mass is at one point on a weightless rod. A real pendulum spreads its mass along its length, so its effective length is shorter than its overall length.' },
      { q: 'Is there a mistake in the minute-hand figure?', a: 'Not necessarily. The tip of a 4.2 metre hand travels about 231 km a year, while Parliament gives 190 km, which matches a point 3.45 metres from the centre. Learners discuss which point the figure describes.' },
      { q: 'When would Westminster lessons take place?', a: 'Once the free lesson has placed the learner, we offer a seat in a matching class on a fixed evening. The teacher works from India, and the evening is written in London time.' },
      { q: 'What equipment is needed?', a: 'A computer with sound and a reliable connection. The pendulum project needs only Python.' },
      { q: 'Is there a Modern Age Coders centre in Westminster?', a: 'No. There is no Westminster centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Westminster cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Across the capital',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> gathers every borough and the City of London, linked as pages are published, including <a class="cg-inline-link" href="/coding-classes-in-greenwich-london">Greenwich</a>, whose page measures the Earth\'s own clock, and <a class="cg-inline-link" href="/coding-classes-in-richmond-upon-thames-london">Richmond upon Thames</a>. Physics models like this one are a gentle way into the <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">machine learning we teach London learners</a>, and parents moving between England and Scotland, Wales or Northern Ireland can check school years on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Westminster and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-camden-london', label: 'Camden' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-wst .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-wst .cg-hero h1 { font-weight: 790; letter-spacing: -0.02em; line-height: 1.03; }
.cg-root.cg-wst .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.85rem 0.2rem; }
.cg-root.cg-wst .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wst .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-wst .cg-grid-3 { gap: clamp(1rem, 2.6vw, 1.85rem); }
.cg-root.cg-wst .cg-table caption { font-weight: 700; letter-spacing: 0.016em; }
.cg-root.cg-wst .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wst .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-wst .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-wst .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Westminster. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000033): 204,236 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 4,003 (I 206, II* 373, II 3,424); 1226284 Houses of Parliament and The Palace of Westminster (Grade I, 530267 179505); 1291494 Westminster Abbey (The Collegiate Church of St Peter) (Grade I). Entry 1066050 THE CLOCK TOWER (Grade II, 528114 183461) is a different building; not used. Westminster City Council /leisure-libraries-and-community/libraries, 25 September 2026: Charing Cross, Church Street, Maida Vale, Marylebone, Mayfair, Paddington, Pimlico, Victoria libraries; Westminster Music Library and other specialist libraries. TfL 940GZZLUWSM (Westminster): Circle, District, Jubilee.',
    localProject: 'UK Parliament, parliament.uk/about/living-heritage/building/palace/big-ben/facts-figures/ (read 25 September 2026): pendulum 4.4 m long, 310 kg; bob 203 kg of concentric tubes of steel and zinc; each pendulum beat 2 seconds; adjusted with pre-decimal pennies; one penny: clock gains two-fifths of a second in 24 hours; minute hands copper sheet, 100 kg, 4.2 m long, travel equivalent of 190 km a year; dials 7 m diameter; tower 96 m. Calculations (g = 9.81): T = 4 s -> L = gT^2/(4 pi^2) = 3.976 m; L = 4.4 m simple -> T = 4.208 s; 0.4 s/day = 4.63e-6; dL/L = -2 dT/T -> dL = -36.8 micrometres at L = 3.976 m; tip travel 2 pi x 4.2 m x 24 x 365.25 = 231.3 km/yr; 190 km/yr -> r = 3.45 m. The Great Clock sub-page (/great-clock/) returned 403: not used. Lesson family: pendulum period and square-root sensitivity, simple vs real model; screened 25 September 2026 (pendulum 0).',
    requiredMentions: [
      '204,236',
      'pendulum',
      'pre-decimal',
      'Palace of Westminster',
      'Great Clock',
      '37 micrometres',
      'Westminster Music Library',
      'Maida Vale',
      'Church Street'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Westminster E09000033: 204,236 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000033&measures=20100' },
      { claim: 'UK Parliament, facts and figures: Big Ben and Elizabeth Tower (pendulum, pennies, hands, tower).', url: 'https://www.parliament.uk/about/living-heritage/building/palace/big-ben/facts-figures/' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Westminster on 25 September 2026: 4,003 (206 I, 373 II*, 3,424 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'Westminster City Council libraries.', url: 'https://www.westminster.gov.uk/leisure-libraries-and-community/libraries' },
      { claim: 'TfL Unified API, StopPoint 940GZZLUWSM (Westminster): Circle, District, Jubilee.', url: 'https://api.tfl.gov.uk/StopPoint/940GZZLUWSM' }
    ],
    rejectedClaims: [
      'That the minute-hand distance figure is an error: not alleged; presented as a question about which point is measured.',
      'The thermal behaviour of the steel and zinc bob: not quantified from a primary source; left as an extension question.',
      'That Westminster has more listed buildings than any London borough: not compared across boroughs for this build; the capsule compares only with pages in this series.',
      'Isaac Newton\'s burial at Westminster Abbey and other Abbey history: not read at a primary source for this build; not stated.',
      'Westminster schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth: never a standout; used only to order the build.'
    ]
  }
};
