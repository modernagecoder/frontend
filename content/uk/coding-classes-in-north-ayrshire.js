'use strict';
// North Ayrshire (cg- council area page, UK cluster Phase 7, row 272). One council. Spine: the stars painted in 1638 are
// not where they are today. Why? Anchor (read raw 26 September 2026): Historic Environment Scotland LB37198, Category A,
// Skelmorlie Aisle, Largs: "Built 1636"; "Interior: richly painted ceiling, signed J S Stalker, and dated 1638"; "Timber
// barrel-vaulted roof divided by painted ribs imitating rib-vaulting, panels between with biblical texts and
// representations, zodiac signs and symbolic figures; the 4 seasons represented in the corners, 'summer' including view
// of Largs town and old church"; "Guardianship Monument".
// Our model (scratchpad nay/precess.py): J2000 positions from the Bright Star Catalogue (VizieR V/50) for Polaris,
// Aldebaran, Regulus, Spica, Antares and Vega; IAU 1976 precession angles (Lieske) as a product of three rotation matrices,
// J2000 to mid-1638 (T = -3.615 centuries); determinant 1.0. Ecliptic longitude shift -5.03 to -5.06 degrees for all six;
// ecliptic latitude change at most 0.007 degrees. Right ascension change: Polaris -30.94, Aldebaran -5.16, Regulus -4.86,
// Spica -4.75, Antares -5.51, Vega -3.03 degrees. Declination: Regulus +11.97 to +13.71, Spica -11.16 to -9.26, Polaris
// +89.26 to +87.35. Naive rule (every RA shifted by 3.075 s of time a year, Dec unchanged): errors 0.95 to 2.01 degrees.
// 50.29 arcsec a year x 361.5 years = 5.05 degrees; full cycle about 25,771 years (ours).
// Lesson family: rotation matrices, coordinate frames, precession; screened (precession, zodiac, ecliptic, rotation
// matrix: 0 hits). No astrology: the page treats the zodiac only as painted imagery and the Sun's path.
// Place facts: NRS, Scotland's Census 2022 rounded estimates: North Ayrshire S12000021 133,400; 64,200 households; 150.7
// per square kilometre; 0 to 14 19,800 (14.8 per cent), 65+ 31,700 (23.8 per cent) by our addition. NRS mid-2020
// localities. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'NORTH AYRSHIRE', blurb: 'Irvine, Kilwinning, Saltcoats, Largs and Arran, and a Skelmorlie Aisle lesson on why the stars have moved since 1638.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-north-ayrshire',
  code: 'nay',
  accent: '#306B3C',
  accentRationale: 'North Ayrshire: a painted-ceiling green from the solver (5.14:1 on the darkest paper tint), brighter and bluer than the Highland olive and East Dunbartonshire green',
  pageType: 'governorate',
  place: {
    name: 'North Ayrshire',
    eyebrow: 'North Ayrshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'East Ayrshire', href: '/coding-classes-in-east-ayrshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'North Ayrshire',
  title: 'Coding Classes in North Ayrshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across North Ayrshire, from Irvine, Kilwinning and Saltcoats to Largs, Ardrossan, Stevenston and Arran.',
  ogDescription: 'Coding classes for all of North Ayrshire, and a Largs project: rotate star positions back to 1638 with matrices in Python and see why the sky has shifted.',
  twitterDescription: 'North Ayrshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for North Ayrshire',
    description: 'Ability-placed online coding, Python, astronomy maths and matrices for children, teenagers and adults across North Ayrshire, taught live in English.'
  },

  h1: 'Coding classes in North Ayrshire',
  capsuleQ: 'What are the best coding classes in North Ayrshire?',
  capsule: 'North Ayrshire had about 133,400 residents in roughly 64,200 households at the 2022 census, at 150.7 people per square kilometre. Irvine is its largest town, followed by Kilwinning, Saltcoats, Largs and Ardrossan, and the council area also takes in the Isle of Arran. Live video lessons from our teachers in India start with a free session that shows which stage suits the learner, anything from P1 to S6 or an adult return to study. Coding, Python and maths are taught to ages 6 to 67, in groups of five to ten or one-to-one. The North Ayrshire project starts beneath a painted ceiling in Largs. Staying on costs USD 100 monthly for a group seat, or USD 150 monthly for private teaching.',
  lead: 'In Largs, Historic Environment Scotland lists the Skelmorlie Aisle at Category A. Inside is a painted timber ceiling signed by J S Stalker and dated 1638, with biblical scenes, the four seasons and, among its panels, the signs of the zodiac, the old names for twelve stretches of the Sun\'s yearly path across the stars. Here is the puzzle: the stars have not stayed where they were in 1638. The Earth\'s axis wobbles slowly, like a spinning top, and the whole grid astronomers use to locate stars drifts with it. How far, and how would a computer calculate it? This page\'s project rotates real star positions back to the year of the painting using matrices in Python.',
  wa: 'Hello Modern Age Coders, we are in North Ayrshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for North Ayrshire',
    h2: 'Popular first courses in North Ayrshire',
    intro: 'A P3 in Saltcoats who loves space, a P7 in Irvine ready to type code, an S5 in Largs studying Higher Maths, and an adult in Kilwinning learning Python for a new job. Each begins with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with planets, orbits and space games made from sprites.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Angles, coordinates and turning shapes, learned by coding them.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, from trigonometry to vectors and matrices.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from the beginning for adults, up to scientific calculations.' }
    ]
  },

  sections: [
    {
      id: 'north-ayrshire', tint: '', eyebrow: 'North Ayrshire figures',
      h2: 'About 133,400 people in North Ayrshire',
      intro: 'Council-wide numbers are National Records of Scotland\'s rounded first results from the 2022 census. Town sizes are separate NRS estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'North Ayrshire localities above 5,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Irvine', '34,130', 'Stevenston', '9,050'],
          ['Kilwinning', '16,100', 'Kilbirnie', '7,170'],
          ['Saltcoats', '12,250', 'Beith', '5,940'],
          ['Largs', '11,030', 'Dalry', '5,250'],
          ['Ardrossan', '10,500', '', '']
        ] },
        { kind: 'p', text: 'North Ayrshire has 150.7 residents per square kilometre, roughly twice the Scottish figure of 69.8. Summing the census age groups, we get 23.8 per cent of North Ayrshire residents aged 65 and over, well above Scotland\'s 20.1, and 14.8 per cent under 15, a touch under the national 15.3. West Kilbride and Dreghorn are the next towns after the table. North Ayrshire Council fixes the school terms; we have not read them and plan around each family\'s dates.' },
        { kind: 'callout', h3: 'Ayrshire pages and exams', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-east-ayrshire">East Ayrshire</a> page has a Burns project. For Scottish qualifications, see <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths</a> and <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The North Ayrshire project',
      h2: 'Turning the sky back to 1638',
      intro: 'Six bright stars, three rotations, and a coordinate system that moves.',
      body: [
        { kind: 'p', text: 'Astronomers locate stars with two angles, much like longitude and latitude on Earth: right ascension and declination. The trouble is that these are measured from the Earth\'s axis and equator, and the axis slowly wobbles, completing one circuit in roughly 25,800 years. So a star\'s coordinates change even when the star itself barely moves. The learner takes six bright stars from the Bright Star Catalogue, with positions for the epoch 2000, turns each into an arrow in 3D, and applies the standard precession formula, three rotations multiplied together into a single matrix, to rotate the sky back to 1638.' },
        { kind: 'table', caption: 'Our precession of six stars from 2000 back to 1638, 26 September 2026', head: ['Star', 'Change in right ascension', 'Change in declination', 'Change along the Sun\'s path'], rows: [
          ['Polaris', '-30.9 degrees', '-1.9 degrees', '-5.06 degrees'],
          ['Aldebaran', '-5.2 degrees', '-0.8 degrees', '-5.05 degrees'],
          ['Regulus', '-4.9 degrees', '+1.7 degrees', '-5.05 degrees'],
          ['Spica', '-4.7 degrees', '+1.9 degrees', '-5.05 degrees'],
          ['Antares', '-5.5 degrees', '+0.9 degrees', '-5.05 degrees'],
          ['Vega', '-3.0 degrees', '-0.3 degrees', '-5.03 degrees']
        ] },
        { kind: 'p', text: 'Look at the columns. In the usual equatorial coordinates the changes are all over the place: Polaris, close to the celestial pole, swings nearly 31 degrees in right ascension, while Vega moves just 3. But measured along the Sun\'s path, the ecliptic, every star shifts by the same 5.05 degrees, and their distance from that path hardly changes at all, never more than 0.007 degrees. That is because precession is really a slow rotation about the pole of the ecliptic. Pick the right coordinate system and a messy problem becomes one number. The check is simple arithmetic: about 50.3 arcseconds a year, the rate astronomers use, times 361.5 years gives 5.05 degrees.' },
        { kind: 'p', text: 'The learner also tries a shortcut: shift every star\'s right ascension by the same average amount and leave declination alone. It looks reasonable and is wrong by between 1 and 2 degrees for these stars, four times the width of the full Moon at worst. A rotation matrix keeps lengths and angles exactly, which the learner can confirm: its determinant comes out as 1.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Spin a paper star wheel on a pin and track how a marked star moves as the wheel turns, then animate it in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Convert star positions to x, y and z in Python and rotate them about one axis with sine and cosine.' },
          { h3: 'Ages 15 and up', p: 'Build the three-rotation precession matrix, check its determinant, and compare equatorial and ecliptic coordinates.' }
        ] },
        { kind: 'callout', h3: 'Astronomy, not horoscopes', p: 'The ceiling\'s zodiac panels are the anchor, and we describe them only as the listing does. The project is about coordinates and rotation. The star positions come from the Bright Star Catalogue; the 1638 positions and every change in the table come from our own program.' }
      ]
    },
    {
      id: 'skelmorlie-aisle', tint: 'deep', eyebrow: 'Why the Skelmorlie Aisle',
      h2: 'A painted ceiling from 1638',
      intro: 'What the Category A listing records.',
      body: [
        { kind: 'table', caption: 'Skelmorlie Aisle, Largs, HES listing LB37198', head: ['Listing detail', 'What it records'], rows: [
          ['Built', '1636, originally the north transept of Largs old church'],
          ['Ceiling', 'Richly painted timber barrel vault, signed J S Stalker and dated 1638'],
          ['Subjects', 'Biblical texts and scenes, zodiac signs and symbolic figures'],
          ['Seasons', 'The four seasons in the corners, with summer showing Largs town and the old church'],
          ['Tomb', 'An elaborate Renaissance carved stone tomb on paired Corinthian columns'],
          ['Status', 'A Guardianship Monument']
        ] },
        { kind: 'p', text: 'Rotation matrices are the working parts of 3D games, phone cameras that keep the horizon level, robot arms, satellite navigation and the star maps in astronomy apps. Every one of them turns coordinates from one frame into another, and every one can go wrong in the ways this project shows. A North Ayrshire student who has turned the sky back four centuries has the core skill behind all of them.' },
        { kind: 'p', text: 'Historic Environment Scotland and North Ayrshire Council have no link with us, and neither do the catalogue\'s compilers. The listing facts are theirs; the precession calculation and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From a paper star wheel to matrices',
    intro: 'Stages are a starting guess; the free lesson confirms the level.',
    cols: [
      { band: 'P1 to P4', h3: 'Space games', p: 'Block coding with rockets, planets and turning sprites.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Angles and coordinates', p: 'Typed Python with points, angles and simple rotations.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Vectors and matrices', p: 'Trigonometry, vectors and matrices beside National 5, Higher and Advanced Higher Maths.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Scientific Python', p: 'Python for adults, from calculations to graphics and data.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and coordinates',
    h2: 'An AI can move a star in seconds. Will it use the right frame?',
    intro: 'A plausible shortcut can be two degrees out.',
    p1: 'Ask a chatbot where a star was in 1638 and it may apply a single average correction to right ascension, the shortcut in our table. The answer looks precise, with decimals, and is off by up to two degrees, far more than a telescope can tolerate.',
    p2: 'A North Ayrshire learner who has built the rotation matrix, checked its determinant and compared coordinate systems can tell a method from a guess. That is the check to run on any calculation an AI writes.',
    closer: 'Knowing whether a formula is exact or just a shortcut is exactly why North Ayrshire teenagers should keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practical side',
    h2: 'Lessons from Irvine to Arran',
    intro: 'Mainland towns and island villages join in exactly the same way.',
    cells: [
      { h3: 'Code on screen, teacher beside you', p: 'The learner types and runs every program; the teacher watches the shared screen and steps in.' },
      { h3: 'Scottish stages', p: 'P6, S3, National 5, Higher and Advanced Higher are our vocabulary too, and lessons are in English.' },
      { h3: 'First lesson is free', p: 'A complete lesson, no payment, then honest advice on the next step.' },
      { h3: 'Groups matched by stage', p: 'Five to ten learners at one stage per group, from many different places.' },
      { h3: 'Term-time lessons', p: 'Two lessons a week in term; breaks in the school holidays.' },
      { h3: 'Your UK time, kept', p: 'We hold your slot at the same UK time when clocks change; our teachers in India time adjust.' }
    ],
    spec: { title: 'Why groups span towns', p: 'Five learners at one stage, free on the same evening, rarely live in one town, let alone on Arran. Grouping by stage gives a pupil in Beith or Dalry a class that fits.' }
  },

  fees: {
    h2: 'Fees in North Ayrshire',
    intro: 'Saltcoats or Brodick, the fee is the same, as it is in every country we teach outside India.',
    first: 'A full lesson with no charge, then a clear recommendation.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month, one learner and one teacher.',
    closer: 'Fees are in US dollars; we have no sterling price list. You pay nothing until a course and regular slot have been settled after the trial lesson. Holidays, absences and moves between group and private lessons are explained on the pricing page.'
  },

  reviewsH2: 'North Ayrshire and other families on Google',

  book: {
    h2: 'Book a free North Ayrshire lesson',
    intro: 'Send the learner\'s age or school stage and a favourite subject. The first lesson might be a Scratch space game, a Python program, or the star rotation on this page.',
    success: 'Thank you. Your North Ayrshire request has arrived.'
  },

  faq: {
    h2: 'North Ayrshire questions',
    intro: 'The council area, the Largs project and how lessons work.',
    items: [
      { q: 'What is the population of North Ayrshire?', a: 'About 133,400 people in roughly 64,200 households, from the 2022 census first results as rounded by NRS.' },
      { q: 'What are the largest towns in North Ayrshire?', a: 'NRS mid-2020 estimates: Irvine 34,130, Kilwinning 16,100, Saltcoats 12,250, Largs 11,030 and Ardrossan 10,500.' },
      { q: 'What is the Skelmorlie Aisle project?', a: 'Learners rotate six bright stars from their year-2000 positions back to 1638 with a precession matrix in Python, find each has moved 5.05 degrees along the Sun\'s path, and see a shortcut go wrong by up to 2 degrees.' },
      { q: 'What is precession?', a: 'A slow wobble of the Earth\'s axis, taking roughly 25,800 years for one circuit, which makes star coordinates drift over the centuries.' },
      { q: 'How old is the Skelmorlie Aisle ceiling?', a: 'Historic Environment Scotland says it is signed J S Stalker and dated 1638, in an aisle built in 1636, and lists it at Category A.' },
      { q: 'Can learners on Arran join?', a: 'Yes. Lessons are online, so island and mainland learners join from home in the same way.' },
      { q: 'Do you teach Higher Maths?', a: 'Yes, along with National 5 Maths and Computing Science. We help learners understand and never guarantee grades.' },
      { q: 'What ages do you take?', a: 'Anyone between 6 and 67. The youngest build with blocks, secondary pupils move to Python and exam maths, and adults can start Python with no experience.' },
      { q: 'What are the fees?', a: 'Your opening lesson is free. Afterwards a group place is USD 100 per month and a one-to-one place USD 150 per month.' },
      { q: 'Do lessons stop for school holidays?', a: 'Yes. Share your school\'s holiday dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Other Ayrshire and Clyde pages',
    html: 'See <a class="cg-inline-link" href="/coding-classes-in-east-ayrshire">East Ayrshire</a>, <a class="cg-inline-link" href="/coding-classes-in-inverclyde">Inverclyde</a> and <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a>, or every council on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'WhatsApp our team'
  },

  footerHeading: 'North Ayrshire and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-east-ayrshire', label: 'East Ayrshire' },
    { href: '/higher-maths-tuition-online', label: 'Higher Maths' }
  ],

  personalityCss: `
.cg-root.cg-nay .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-nay .cg-hero h1 { font-weight: 690; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-nay .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-nay .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-nay .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.02em; }
.cg-root.cg-nay .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-nay .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nay .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-nay .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-nay .cg-callout { border-left-width: 5px; border-radius: 0 11px 11px 0; }
`,

  dossier: {
    curriculumAuthority: 'North Ayrshire (S12000021), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 133,400 (females 69,700, males 63,800); households 64,200; density 150.7 per square kilometre (Scotland 69.8); ages 0 to 14 19,800 (14.8 per cent), 65+ 31,700 (23.8 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Irvine 34,130; Kilwinning 16,100; Saltcoats 12,250; Largs 11,030; Ardrossan 10,500; Stevenston 9,050; Kilbirnie 7,170; Beith 5,940; Dalry 5,250; West Kilbride 4,860; Dreghorn 3,450. HES LB37198 (Category A, added 14/04/1971), Skelmorlie Aisle, burgh Largs: "Built 1636"; "Interior: richly painted ceiling, signed J S Stalker, and dated 1638"; "panels between with biblical texts and representations, zodiac signs and symbolic figures; the 4 seasons represented in the corners, \'summer\' including view of Largs town and old church"; "Elaborate Renaissance carved stone tomb"; "Guardianship Monument". Bright Star Catalogue (VizieR V/50) J2000: Polaris HR 424 02 31 48.7 +89 15 51; Aldebaran HR 1457 04 35 55.2 +16 30 33; Regulus HR 3982 10 08 22.3 +11 58 02; Spica HR 5056 13 25 11.6 -11 09 41; Antares HR 6134 16 29 24.4 -26 25 55; Vega HR 7001 18 36 56.3 +38 47 01. The Isle of Arran is part of North Ayrshire (Brodick Castle LB7507 is listed under North Ayrshire).',
    localProject: 'IAU 1976 precession (Lieske zeta, z, theta) J2000 to 1638.5, T = -3.615; det 1.0. dRA: Polaris -30.939, Aldebaran -5.160, Regulus -4.859, Spica -4.745, Antares -5.514, Vega -3.031 deg. Dec: Polaris 89.264 to 87.353; Aldebaran 16.509 to 15.703; Regulus 11.967 to 13.705; Spica -11.161 to -9.257; Antares -26.432 to -25.568; Vega 38.784 to 38.513. Ecliptic longitude shift -5.032 to -5.063; latitude shift at most 0.007. Naive RA shift errors 0.953 to 2.014 deg. 50.29"/yr x 361.5 = 5.05 deg; cycle 25,771 yr (ours; page says roughly 25,800). Full Moon about half a degree (general knowledge; page says four times the width at worst for 2 deg). Lesson family: rotation matrices, coordinate frames.',
    requiredMentions: [
      '133,400',
      '64,200',
      'Kilwinning',
      'Saltcoats',
      'Ardrossan',
      'Stevenston',
      'Kilbirnie',
      'Beith',
      'West Kilbride',
      'Dreghorn',
      'Skelmorlie',
      'LB37198',
      'precession'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB37198: Skelmorlie Aisle, Largs.', url: 'https://portal.historicenvironment.scot/designation/LB37198' },
      { claim: 'Bright Star Catalogue, 5th Revised Ed. (Hoffleit and Warren), VizieR V/50.', url: 'https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=V/50' }
    ],
    rejectedClaims: [
      'Astrology or star signs as having any meaning: not discussed.',
      'Which zodiac signs appear on the ceiling or how they are drawn: not in the listing, not claimed.',
      'Sir Thomas Brisbane connections: not researched for this page.',
      'Ferry details to Arran: not claimed.',
      'Named North Ayrshire schools and school term dates: none named or read.',
      'Directions or distances between North Ayrshire towns: not claimed.'
    ]
  }
};
