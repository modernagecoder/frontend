'use strict';
// Causeway Coast and Glens (cg- county page, UK cluster Phase 7, row 302). One local government district. Spine: why build
// three runways instead of one? Anchor (read raw 26 September 2026, Department for Communities Historic Environment
// Division ArcGIS layer 4 Defence Heritage, records 00029): Ballykelly airfield "opened at the start of June 1941 when the RAF
// established a Coastal Command Development Unit"; "Coastal Command flew anti-submarine patrols and air-sea rescue
// flights"; "The runways were extended in 1943 to facilitate the longer take-offs required by B-24 Liberators"; "the RAF
// flew the Shackleton maritime patrol aircraft"; "on 2 June 1972 the station came under Army control and was renamed
// Shackleton Barracks. The site was closed in 2008". Runways: "the traditional three concrete runways set at angles to each
// other. The main runway was in line with the prevailing wind while the other two were set at sixty degrees where the
// topography permitted"; one "initially 1,400 metres but was extended to 1,940 metres ... Post war this was lengthened again
// to 2,280 metre"; another "initially 1,450 metres but was extended to 1,838 metres". Perimeter tracks "50 feet/14 metres
// wide". Listed: HB02/10/027 Aircraft Hangar Shackleton Barracks, Grade B+, council Causeway Coast and Glens (layer 1).
// Our model (computed inline; invented wind, integer-degree check matches the exact sums): crosswind = wind x sin(angle),
// headwind = wind x cos(angle), best runway end = least crosswind then most headwind. Worst crosswind: one runway = full
// wind; two at 90 degrees = 0.707 x wind; three at 60 degrees = 0.5 x wind. Share of wind directions with crosswind at or
// under an invented 10 knot limit: 20 kn wind: 1/3, 2/3, all; 30 kn: 21.6, 43.3, 64.9 per cent (exact from asin(1/3)).
// Example 20 kn from 040: single runway heading 000 crosswind 12.9 headwind 15.3; three runways heading 060 crosswind 6.8
// headwind 18.8. Bug: sin(30) with degrees fed to a radians function = -0.988.
// Lesson family: vector components (crosswind/headwind), choosing the best runway, coverage by layout; screened
// (crosswind, headwind, wind rose, vector component: 0 hits; Midlothian dot product used sun angles).
// Place facts: NISRA Census 2021 MS-A01: Causeway Coast and Glens N09000004 141,746. DEAs (exact, not summed): Ballymoney
// 24,519; Bann 17,535; Benbradagh 17,818; Causeway 24,542; Coleraine 23,625; Limavady 16,230; The Glens 17,477. Settlements
// (NISRA approximations): Coleraine 24,483; Limavady 11,729; Ballymoney 11,048; Portstewart 7,854; Portrush 6,150;
// Ballycastle 5,628; Dungiven 3,346; Ballykelly 2,029; Kilrea 1,673. District membership: HED Council field on listed
// buildings at those addresses. No transfer test advice. No community background or identity data.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'CAUSEWAY COAST AND GLENS', blurb: 'Coleraine, Limavady, Ballymoney and Portstewart, and a Ballykelly lesson on why an airfield needs runways at three angles.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-causeway-coast-and-glens',
  code: 'ccg',
  accent: '#43127A',
  accentRationale: 'Causeway Coast and Glens: a stormy-sea violet from the solver (10.54:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'Causeway Coast and Glens',
    eyebrow: 'Causeway Coast and Glens',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Northern Ireland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Derry~Londonderry', href: '/best-coding-class-in-derry-londonderry' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Causeway Coast and Glens',
  title: 'Coding Classes in Causeway Coast and Glens | Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Causeway Coast and Glens: Coleraine, Limavady, Ballymoney, Portstewart, Portrush and Ballycastle.',
  ogDescription: 'Causeway Coast and Glens coding classes, and a Ballykelly project: split the wind into parts in Python and see why three runways beat one.',
  twitterDescription: 'Causeway Coast and Glens coding, Python and maths for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Causeway Coast and Glens',
    description: 'Online coding, Python, trigonometry and mathematics for children, teenagers and adults across Causeway Coast and Glens, taught live in English with learners placed by level.'
  },

  h1: 'Coding classes in Causeway Coast and Glens',
  capsuleQ: 'What are the best coding classes in Causeway Coast and Glens?',
  capsule: 'NISRA counted 141,746 usual residents in Causeway Coast and Glens at the 2021 census. Coleraine is the largest settlement, followed by Limavady and Ballymoney, with Portstewart, Portrush, Ballycastle, Dungiven, Ballykelly and Kilrea among the rest. We teach every class live by video, from India. Coding, Python and maths are open to anyone between 6 and 67, taught solo or in a same-level class of five to ten. One free lesson finds the right starting point. The district project begins on the runways at Ballykelly. After the free lesson, a group place costs USD 100 a month and one-to-one tuition USD 150 a month.',
  lead: 'Ballykelly airfield opened in June 1941, and through the war Coastal Command flew anti-submarine patrols from it. The Historic Environment Division\'s defence record describes its layout: three concrete runways, the main one lined up with the prevailing wind and the other two set at sixty degrees to it. Why go to the trouble of three? Aircraft like to take off and land into the wind, and a wind blowing across a runway pushes them sideways. The wind cannot be told which way to blow, so an airfield gives pilots a choice of directions. How much sideways wind does each layout leave in the worst case, and how often is it too much? This page\'s project splits the wind into two parts with trigonometry and answers both in Python.',
  wa: 'Hello Modern Age Coders, we are in Causeway Coast and Glens and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Causeway Coast and Glens',
    h2: 'Starting courses along the coast and glens',
    intro: 'A P3 pupil in Portrush who flies kites, a Year 9 in Limavady starting Python, a Year 12 in Coleraine working through CCEA GCSE maths, and a Ballycastle adult learning to program. Each one begins with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Scratch projects with wind, kites and moving sprites.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Angles, triangles and directions brought to life in code.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Complete secondary maths, including trigonometry and vectors.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults, from first lines to useful tools.' }
    ]
  },

  sections: [
    {
      id: 'causeway-coast-and-glens', tint: '', eyebrow: 'The district in census numbers',
      h2: '141,746 residents on the coast and in the glens',
      intro: 'NISRA\'s Census 2021 table MS-A01 reports the district\'s usual residents, plus each of its seven district electoral areas. We show those exactly as published and do not add them together.',
      body: [
        { kind: 'table', caption: 'Seven electoral areas of Causeway Coast and Glens, NISRA Census 2021 usual residents', head: ['Area', 'Usual residents', 'Area', 'Usual residents'], rows: [
          ['Ballymoney', '24,519', 'Coleraine', '23,625'],
          ['Bann', '17,535', 'Limavady', '16,230'],
          ['Benbradagh', '17,818', 'The Glens', '17,477'],
          ['Causeway', '24,542', '', '']
        ] },
        { kind: 'p', text: 'For settlements, NISRA gives approximate figures: Coleraine 24,483, Limavady 11,729, Ballymoney 11,048, Portstewart 7,854, Portrush 6,150, Ballycastle 5,628, Dungiven 3,346, Ballykelly 2,029 and Kilrea 1,673. Local schools teach the Northern Ireland Curriculum, which runs from P1 up to Year 14 and ends in CCEA GCSE and A level exams. We have not read school holiday calendars, so families let us know theirs.' },
        { kind: 'callout', h3: 'Derry~Londonderry and CCEA help', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-derry-londonderry">Derry~Londonderry</a> page covers the city. For exams, see <a class="cg-inline-link" href="/ccea-gcse-maths-help">CCEA GCSE maths</a> and <a class="cg-inline-link" href="/ccea-a-level-software-systems-development-help">CCEA A level Software Systems Development</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Causeway Coast and Glens project',
      h2: 'One runway, two or three?',
      intro: 'Split the wind into a part along the runway and a part across it.',
      body: [
        { kind: 'p', text: 'A wind blowing at an angle to a runway can be split into two parts. The part along the runway, wind speed times the cosine of the angle, is a headwind that helps; the part across it, wind speed times the sine, is a crosswind that pushes sideways. The learner writes a function that, for any wind, tries every runway end and picks the one with the least crosswind, breaking ties by the biggest headwind. Then it sweeps the wind round all 360 degrees for three layouts. Wind speeds and the 10 knot crosswind limit are our own round numbers; real limits depend on the aircraft.' },
        { kind: 'table', caption: 'Our crosswind sums for three runway layouts, 26 September 2026', head: ['Layout', 'Worst crosswind', 'Directions within 10 kn, 20 kn wind', 'Directions within 10 kn, 30 kn wind'], rows: [
          ['One runway', 'The full wind', 'One third', '21.6%'],
          ['Two runways at 90 degrees', '0.71 times the wind', 'Two thirds', '43.3%'],
          ['Three runways at 60 degrees', 'Half the wind', 'Every direction', '64.9%']
        ] },
        { kind: 'p', text: 'The geometry is tidy. Three runways give six runway ends, 60 degrees apart, so the wind is never more than 30 degrees off one of them, and the sine of 30 degrees is exactly one half. With a single runway the wind can blow straight across it, putting the whole wind sideways. Take a 20 knot wind from 040 degrees: on a single runway facing 000 the crosswind is 12.9 knots, over our limit, but in the three-runway layout the runway facing 060 cuts it to 6.8 knots with a stronger headwind of 18.8. Stronger winds eat into every layout, which is why the last column drops.' },
        { kind: 'p', text: 'The code has a trap that catches many beginners. Python\'s sine function expects radians, not degrees. Pass it 30 and it returns about minus 0.99 instead of 0.5, and every crosswind is nonsense, some even negative. Learners write a test that the crosswind for a wind straight down the runway is zero and for a wind straight across is the full wind speed, and the slip shows up at once.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Blow across a paper runway with a fan at different angles, then build a windsock game in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Code sine and cosine parts of the wind in Python and choose a runway for a handful of winds.' },
          { h3: 'Ages 15 and up', p: 'Sweep all directions, derive the one-half result, and write the tests that catch the radians slip.' }
        ] },
        { kind: 'callout', h3: 'Record layout, our wind', p: 'The runway angles and history come from the Historic Environment Division\'s record. Wind speeds, directions and the limit are ours, so the table shows why the layout works, not how Ballykelly was flown on any real day.' }
      ]
    },
    {
      id: 'ballykelly', tint: 'deep', eyebrow: 'Why Ballykelly',
      h2: 'An airfield that kept growing',
      intro: 'What the defence heritage record says.',
      body: [
        { kind: 'table', caption: 'Ballykelly airfield, Department for Communities Historic Environment Division, Defence Heritage records 00029', head: ['Record detail', 'What it says'], rows: [
          ['Opened', 'Start of June 1941, with an RAF Coastal Command Development Unit'],
          ['Wartime role', 'Anti-submarine patrols and air-sea rescue flights'],
          ['Runways', 'Three, the main one in line with the prevailing wind, the others at sixty degrees'],
          ['Extended', 'In 1943 for B-24 Liberators; one runway from 1,400 m to 1,940 m, later 2,280 m'],
          ['After the war', 'Shackleton maritime patrol aircraft; Army control from 2 June 1972 as Shackleton Barracks'],
          ['Closed', '2008']
        ] },
        { kind: 'p', text: 'Splitting a quantity into parts along and across a direction is one of the most used ideas in engineering and computing. Game physics resolves every collision this way, drones correct for wind this way, and robots and phone sensors combine forces and tilts the same way. A Causeway Coast and Glens learner who has split the wind into headwind and crosswind has learned the move behind all of them.' },
        { kind: 'p', text: 'Modern Age Coders is independent of NISRA and the Department for Communities. The records are theirs; the crosswind model, and any mistake in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages through school',
    h2: 'From windsocks to vectors',
    intro: 'Treat the stages as a guide; the free lesson finds the right level.',
    cols: [
      { band: 'P3 to P7', h3: 'Direction games', p: 'Block coding with turning, angles and simple movement.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 8 to 10', h3: 'Angles in code', p: 'Python with angles, triangles and loops over directions.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 11 to 14', h3: 'Trigonometry and vectors', p: 'Sine, cosine and vectors, with CCEA GCSE and A level in view.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Python for adults', p: 'Python from the first program to practical scripts.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and units',
    h2: 'An AI can write a crosswind calculator. Will it test the radians?',
    intro: 'The formula is easy; the unit trap is where code goes wrong.',
    p1: 'Ask a chatbot for a crosswind function and the formula will usually be right. Whether it converts degrees to radians, and whether anyone tests the answer against a case you already know, is another matter.',
    p2: 'A learner who has checked a function against a wind straight down and straight across the runway knows to test any code, human or machine written, with cases where the answer is obvious.',
    closer: 'Checking code against answers you already know is a strong reason for a Causeway Coast and Glens teenager to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practical details',
    h2: 'From Ballycastle to Limavady, lessons at home',
    intro: 'Coast, glen or town, a laptop and a connection will do.',
    cells: [
      { h3: 'Writing their own code', p: 'Learners type every program; the tutor follows on the shared screen and prompts with questions instead of answers.' },
      { h3: 'Northern Ireland stages', p: 'A Kilrea P5 or a Portstewart Year 12 joins at the level that suits their key stage, and we refer to exams by their CCEA titles. All teaching is in English.' },
      { h3: 'Free first lesson', p: 'A complete lesson at no charge, finishing with clear advice.' },
      { h3: 'Classes by level', p: 'Five to ten learners at one stage, from across the UK.' },
      { h3: 'Term time', p: 'Two lessons each week in term, holidays kept free.' },
      { h3: 'Same hour all year', p: 'Clock changes do not move your lesson; teachers in India adjust around the local time.' }
    ],
    spec: { title: 'Why a spread-out district suits online', p: 'Rural glens and small towns rarely have five learners at one level free together. Online groups let a Dungiven or Ballykelly learner join peers at the same stage.' }
  },

  fees: {
    h2: 'Causeway Coast and Glens fees',
    intro: 'Coleraine and Ballycastle pay the same, and so does every country we teach outside India.',
    first: 'One full free lesson, then an honest recommendation.',
    group: 'Around eight lessons a month with five to ten classmates.',
    private: 'Around eight lessons a month with your own tutor.',
    closer: 'We charge in US dollars only; there is no sterling price. The first bill follows the trial, once a course and a weekly time are agreed, and the pricing page covers holidays, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Family reviews on Google',

  book: {
    h2: 'Book a free lesson in Causeway Coast and Glens',
    intro: 'Tell us the learner\'s age or school year and one interest. The trial might be a Scratch windsock, a first Python program, or the Ballykelly runway sums.',
    success: 'Thank you. Your Causeway Coast and Glens request is with us.'
  },

  faq: {
    h2: 'Causeway Coast and Glens questions',
    intro: 'The district, the runway project and the details.',
    items: [
      { q: 'What is the population of Causeway Coast and Glens?', a: 'NISRA\'s Census 2021 counted 141,746 usual residents in the district.' },
      { q: 'What is the largest town in Causeway Coast and Glens?', a: 'Coleraine, which NISRA estimates at 24,483, ahead of Limavady at 11,729 and Ballymoney at 11,048.' },
      { q: 'What is the Ballykelly project?', a: 'Learners split the wind into headwind and crosswind in Python and compare one, two and three runway layouts to see why three at sixty degrees halves the worst crosswind.' },
      { q: 'What is a crosswind?', a: 'The part of the wind blowing across a runway, equal to the wind speed times the sine of the angle between them.' },
      { q: 'When did Ballykelly airfield open?', a: 'At the start of June 1941, according to the Historic Environment Division record.' },
      { q: 'Do lessons happen online?', a: 'Yes, all of them, live by video from home.' },
      { q: 'Can you help with CCEA GCSE maths?', a: 'Yes, and with computing too. We teach for understanding and do not promise grades.' },
      { q: 'Which ages are welcome?', a: 'From 6 to 67, on a course that fits the learner.' },
      { q: 'What are the fees?', a: 'No charge for the trial; afterwards it is USD 100 monthly for group classes or USD 150 monthly for a private tutor.' },
      { q: 'Do lessons run in the holidays?', a: 'No. Let us know your school holidays and we skip those weeks.' }
    ]
  },

  next: {
    eyebrow: 'Also in Northern Ireland',
    h2: 'Nearby Northern Ireland pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-derry-londonderry">Derry~Londonderry</a> finds where trains pass on a single line, and <a class="cg-inline-link" href="/coding-classes-in-antrim-and-newtownabbey">Antrim and Newtownabbey</a> counts the towing in a wartime aircraft park. For the whole province, start at our <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland</a> guide; for Scotland, Wales and England, the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Causeway Coast and Glens',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/best-coding-class-in-derry-londonderry', label: 'Derry~Londonderry' },
    { href: '/ccea-gcse-maths-help', label: 'CCEA GCSE maths' }
  ],

  personalityCss: `
.cg-root.cg-ccg .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-ccg .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.06; }
.cg-root.cg-ccg .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-ccg .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ccg .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.018em; }
.cg-root.cg-ccg .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-ccg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ccg .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-ccg .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-ccg .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Causeway Coast and Glens (N09000004). NISRA Census 2021 MS-A01: 141,746. DEAs (exact, not summed): Ballymoney 24,519; Bann 17,535; Benbradagh 17,818; Causeway 24,542; Coleraine 23,625; Limavady 16,230; The Glens 17,477. Settlements (NISRA approximations): Coleraine 24,483; Limavady 11,729; Ballymoney 11,048; Portstewart 7,854; Portrush 6,150; Ballycastle 5,628; Dungiven 3,346; Ballykelly 2,029; Kilrea 1,673. HED Defence Heritage 00029 Ballykelly airfield: "opened at the start of June 1941 when the RAF established a Coastal Command Development Unit"; "anti-submarine patrols and air-sea rescue flights"; runways extended 1943 for "B-24 Liberators"; "three concrete runways set at angles to each other. The main runway was in line with the prevailing wind while the other two were set at sixty degrees"; one runway 1,400 m to 1,940 m, later 2,280 m; another 1,450 m to 1,838 m; renamed Shackleton Barracks 2 June 1972; closed 2008.',
    localProject: 'Crosswind = W sin(a), headwind = W cos(a); best end = least crosswind then most headwind. Worst crosswind: one runway W; two at 90 deg 0.707W; three at 60 deg 0.5W. Share of directions within 10 kn: 20 kn wind 1/3, 2/3, all; 30 kn 21.6, 43.3, 64.9%. 20 kn from 040: one runway hdg 000 cross 12.9 head 15.3; three runways hdg 060 cross 6.8 head 18.8. Radians slip sin(30) = -0.988. Lesson family: vector components, crosswind coverage.',
    requiredMentions: [
      'Ballymoney',
      'Portstewart',
      'Portrush',
      'Ballycastle',
      'Dungiven',
      'Ballykelly',
      'Kilrea',
      'Benbradagh',
      'Shackleton Barracks',
      'Coastal Command',
      'crosswind'
    ],
    sources: [
      { claim: 'NISRA Census 2021 MS-A01 usual resident population by LGD, DEA and settlement.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'Department for Communities Historic Environment Division GIS data: Defence Heritage records 00029 (Ballykelly airfield) and Historic Buildings HB02/10/027.', url: 'https://services2.arcgis.com/BdBkthNLO9mzGAMO/arcgis/rest/services/Historic_Environment_Division_GIS_Data/FeatureServer' },
      { claim: 'Listed Buildings Northern Ireland dataset on OpenDataNI.', url: 'https://www.opendatani.gov.uk/@department-for-communities-historic-environment-division/listed-buildings-northern-ireland' }
    ],
    rejectedClaims: [
      'Actual runway headings, winds and aircraft crosswind limits at Ballykelly: not in the records; our numbers.',
      'Cold War dispersal and nuclear details in the records: not used.',
      'The present owner named in the record: not used.',
      'Transfer test advice: excluded by rule.',
      'Community background, religion and identity statistics: excluded by rule.',
      'Named schools, school term dates, distances and travel times: none named, read or claimed.'
    ]
  }
};
