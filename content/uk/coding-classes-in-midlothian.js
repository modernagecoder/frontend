'use strict';
// Midlothian (cg- council area page, UK cluster Phase 7, row 269). One council. Spine: why would a sundial need eight
// faces? Anchor (read raw 26 September 2026): Historic Environment Scotland LB14562 and LB14563, Category A, Newbattle
// Abbey Policies, North Sundial and South Sundial: "1635. Octagonal sandstone sundial with 19th century pedestal";
// "pedestal bears date 'A.D 1635'"; "carved in 2 tiers; lower tier contains bronze gnomon in each panel"; "initials EWL
// (William, Earl of Lothian) and CAL (Annie, Countess of Lothian)"; "The North sundial forms an identical pair with the
// South sundial, both were moved from the front of the house to the rear, mid 19th century". Grid reference of the north
// dial NT 33403 66084 (E 333403, N 666084).
// Our model (scratchpad mid/dial.py): OS grid to latitude by the standard OS inverse transverse Mercator (Airy 1830):
// 55.883 N, 3.065 W. Eight vertical faces assumed to point N, NE ... NW (our assumption). Sun vector from declination and
// solar hour, face lit when sun is up and dot product with the face normal is positive; one-minute steps. Midsummer
// (declination 23.44): day 17.32 h (geometric, no refraction); hours lit N 7.6, NE 6.8, E 8.7, SE 10.6, S 9.7, SW 10.6,
// W 8.7, NW 6.8; north face lit 03:21 to 07:09 and 16:52 to 20:40 solar time; noon altitude 57.6. Equinox: day 12.02 h;
// N 0, NE 3.4, E 6.0, SE 8.7, S 12.0, SW 8.7, W 6.0, NW 3.4. Midwinter: day 6.68 h; N, NE, NW 0; E 3.3, SE 6.7, S 6.7,
// SW 6.7, W 3.4; noon altitude 10.7. At most 4 faces lit at once.
// Lesson family: vectors and the dot product, sun position, day length; screened (dot product, polyhedral, normal vector,
// solar altitude: 0 hits; day length: 0 hits). Distinct from East Sussex (equation of time).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: Midlothian S12000019 96,600; 41,000 households; 273.1 per
// square kilometre; 0 to 14 17,100 (17.7 per cent), 65+ 18,300 (18.9 per cent) by our addition. NRS mid-2020 localities.
// Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'MIDLOTHIAN', blurb: 'Bonnyrigg, Penicuik, Dalkeith and Gorebridge, and a Newbattle sundial lesson on vectors, sunlight and eight gnomons.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-midlothian',
  code: 'mlo',
  accent: '#4C2233',
  accentRationale: 'Midlothian: a dark plum from the solver (10.68:1 on the darkest paper tint), redder and deeper than the West Yorkshire and Lancashire magentas',
  pageType: 'governorate',
  place: {
    name: 'Midlothian',
    eyebrow: 'Midlothian',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Edinburgh', href: '/best-coding-class-in-edinburgh' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Midlothian',
  title: 'Coding Classes in Midlothian | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Midlothian, from Bonnyrigg, Penicuik and Dalkeith to Mayfield, Gorebridge, Loanhead and Roslin.',
  ogDescription: 'Coding classes for all of Midlothian, and a Newbattle sundial project: model the sun as a vector in Python and find which of eight dial faces catch the light.',
  twitterDescription: 'Midlothian coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Midlothian',
    description: 'Ability-placed online coding, Python, vectors and geometry and mathematics for children, teenagers and adults across Midlothian, taught live in English.'
  },

  h1: 'Coding classes in Midlothian',
  capsuleQ: 'What are the best coding classes in Midlothian?',
  capsule: 'Midlothian is a council area of about 96,600 residents in roughly 41,000 households, according to the 2022 census, with 273.1 people per square kilometre. Its biggest towns are Bonnyrigg, Penicuik and Dalkeith, followed by Mayfield, Gorebridge and Loanhead, and it includes villages such as Roslin and Rosewell. We teach online in real time from India, and a free first lesson shows where each person should start, whether in P1, S6 or adult life. People aged 6 to 67 learn coding, Python and maths with us, either with a teacher of their own or with five to ten classmates. The Midlothian project comes from a pair of carved sundials at Newbattle. Continuing costs USD 100 a month in a group or USD 150 a month with a teacher to yourself.',
  lead: 'In the grounds of Newbattle Abbey stand two identical sundials, each dated 1635 and each listed at Category A by Historic Environment Scotland. The listing describes them as octagonal, carved in two tiers, with a bronze gnomon, the part that casts the shadow, in each panel of the lower tier. Why would anyone build a sundial with eight faces? Because the sun does not stay in the south. On a summer morning it rises in the north-east and sets in the north-west, so a single south-facing dial sits in its own shadow for hours. This page\'s project turns the sun into a vector in Python and works out, minute by minute, which faces of an eight-sided dial are in sunshine.',
  wa: 'Hello Modern Age Coders, we are in Midlothian and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Midlothian',
    h2: 'Four starting points in Midlothian',
    intro: 'A P2 pupil in Bonnyrigg who likes shadows, a P6 in Penicuik ready to type code, an S4 in Dalkeith heading for National 5 Maths, and an adult in Loanhead learning Python. Each starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with moving sprites, directions and turns measured in degrees.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Angles, coordinates and trigonometry made concrete by coding them.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, including vectors and the trigonometry of the sun.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from the first program to scientific and data scripts.' }
    ]
  },

  sections: [
    {
      id: 'midlothian', tint: '', eyebrow: 'Midlothian figures',
      h2: 'About 96,600 people in Midlothian',
      intro: 'The council total is a rounded first result from the 2022 census, published by National Records of Scotland. Town figures are separate NRS estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'Midlothian localities above 1,400 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Bonnyrigg', '18,320', 'Loanhead', '6,820'],
          ['Penicuik', '16,150', 'Danderhall', '3,160'],
          ['Dalkeith', '14,330', 'Rosewell', '2,020'],
          ['Mayfield', '13,690', 'Roslin', '1,770'],
          ['Gorebridge', '8,040', 'Bilston', '1,440']
        ] },
        { kind: 'p', text: 'Midlothian has 273.1 residents per square kilometre, nearly four times Scotland\'s 69.8. It is also younger than average: by our addition of the census age bands, 17.7 per cent of residents are under 15, against 15.3 per cent nationally, and 18.9 per cent are 65 or over, against 20.1. Holiday dates are Midlothian Council\'s to set, and since we have not read them, each family simply tells us theirs.' },
        { kind: 'callout', h3: 'Edinburgh and exams', p: 'The capital has its own page, <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a>. For qualifications, see <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Midlothian project',
      h2: 'Eight faces, one sun, a dot product',
      intro: 'Where is the sun, and which way does each face look?',
      body: [
        { kind: 'p', text: 'First the learner finds where Newbattle is. The listing gives an Ordnance Survey grid reference, and a standard formula converts it to latitude: about 55.9 degrees north. Next comes the sun. For any date and any hour of solar time, a few lines of trigonometry give the sun\'s direction as an arrow of length one, with parts pointing east, north and up. Each face of the dial is given its own arrow, pointing straight out from the stone. We assume the eight faces point north, north-east and so on round the compass; the listing does not say. A face can only catch the sun if the sun is above the horizon and in front of it, which the dot product of the two arrows tests: positive means lit.' },
        { kind: 'table', caption: 'Our model, hours of sunshine on each face of an eight-sided dial at Newbattle, 26 September 2026', head: ['Face', 'Midsummer', 'Equinox', 'Midwinter'], rows: [
          ['North', '7.6', '0', '0'],
          ['North-east and north-west', '6.8 each', '3.4 each', '0'],
          ['East and west', '8.7 each', '6.0 each', '3.3 and 3.4'],
          ['South-east and south-west', '10.6 each', '8.7 each', '6.7 each'],
          ['South', '9.7', '12.0', '6.7'],
          ['Length of day', '17.3 hours', '12.0 hours', '6.7 hours']
        ] },
        { kind: 'p', text: 'The surprise is at midsummer. The north face, which never sees the sun in winter, is lit for 7.6 hours: from about 03:20 to 07:10 in solar time, and again from about 16:50 to 20:40. The south face, the one everyone assumes is the sunniest, gets only 9.7 hours, fewer than the south-east and south-west faces, because for the first and last hours of a long summer day the sun is behind it. At the equinox the south face catches all 12 hours of daylight, while the north face gets none. In midwinter, three of the eight faces stay in shadow all day. With eight faces, at least one is always usable whenever the sun is up.' },
        { kind: 'p', text: 'The same few lines also give the length of the day and the height of the sun. At midsummer the noon sun stands about 57.6 degrees above the horizon; at midwinter only 10.7. Our day lengths are pure geometry: real sunrise comes a little earlier and sunset a little later because the atmosphere bends light, so published times are slightly longer. Learners can add that correction as an extension.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Shine a torch on a paper octagon from different directions and record which faces light up, then code the rule in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Compute the sun\'s height and direction in Python for each hour of a chosen day and draw them on a chart.' },
          { h3: 'Ages 15 and up', p: 'Build the vectors, use the dot product to test each face, convert the grid reference yourself, and add atmospheric refraction.' }
        ] },
        { kind: 'callout', h3: 'Real dials, model sun', p: 'The dates, carving and paired dials come from the Historic Environment Scotland listings. The face directions are our assumption, and every hour and angle in the table comes from our own program, not from observing the stones.' }
      ]
    },
    {
      id: 'newbattle', tint: 'deep', eyebrow: 'Why Newbattle',
      h2: 'Two carved sundials from 1635',
      intro: 'The Midlothian anchor, as its listings record it.',
      body: [
        { kind: 'table', caption: 'Newbattle Abbey Policies, North Sundial (LB14562) and South Sundial (LB14563)', head: ['Listing detail', 'What it records'], rows: [
          ['Category', 'A, both dials, added 1971'],
          ['Date', '1635, carved on the pedestal as A.D 1635'],
          ['Form', 'Octagonal sandstone dial, carved in two tiers, on a 19th century pedestal'],
          ['Gnomons', 'A bronze gnomon in each panel of the lower tier'],
          ['Carving', 'Initials of William, Earl of Lothian, and Annie, Countess of Lothian, with a sun motif'],
          ['History', 'An identical pair, moved from the front of the house to the rear in the mid 19th century']
        ] },
        { kind: 'p', text: 'The arithmetic in this project is the same that decides where solar panels go, how buildings are shaded, when a satellite dish loses the sun, and how 3D graphics shade every surface in a game: a light direction, a surface direction and a dot product. A Midlothian student who has found the north face lit on a June morning has learned to test an assumption instead of trusting it.' },
        { kind: 'p', text: 'Historic Environment Scotland and Midlothian Council have no connection with us. The listing details are theirs; the sun model, the assumed orientation and any mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From torchlight to vectors',
    intro: 'Stage is a hint, not a rule. The free lesson sets the level.',
    cols: [
      { band: 'P1 to P4', h3: 'Directions and turns', p: 'Block coding that moves and turns sprites by angles.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Angles in Python', p: 'Typed Python with coordinates, angles and simple charts.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Vectors and trigonometry', p: 'Vector maths and larger programs beside National 5, Higher and Advanced Higher Maths.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Science in code', p: 'Python for adults, including calculations, data and graphics.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and assumptions',
    h2: 'An AI can compute sun angles in seconds. Will it question the south-facing assumption?',
    intro: 'The right formula with the wrong assumption gives the wrong answer.',
    p1: 'Ask a chatbot where to point a sundial, a solar panel or a window for the most sun and the stock answer is due south. For the middle of the day that is right; for a Scottish summer morning or evening it is not, as the eight-face model shows. The AI rarely raises the question unless you ask it.',
    p2: 'A Midlothian learner who has watched the north face light up at dawn knows to test the assumptions behind an answer, not just the arithmetic. That is the check AI cannot do on its own behalf.',
    closer: 'So a Midlothian teenager should still learn to code in 2026, because testing an assumption is harder, and more valuable, than running a formula.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Lessons that reach Penicuik and Gorebridge',
    intro: 'Whether in a Midlothian town or village, learners join from home.',
    cells: [
      { h3: 'A shared screen', p: 'The learner writes and runs the code; the teacher sees it live and steps in when something breaks.' },
      { h3: 'Scottish stages spoken', p: 'P5, S2, National 5, Higher, Advanced Higher: the same words Midlothian schools use, and teaching in English.' },
      { h3: 'No-cost first lesson', p: 'A full lesson, free. Afterwards we recommend a stage and a course, with no obligation.' },
      { h3: 'Five to ten per group', p: 'Every group works at one stage, with classmates from several countries.' },
      { h3: 'Term time only', p: 'Two lessons a week during term, and none in the school holidays.' },
      { h3: 'Steady UK time', p: 'Lessons keep their UK time through the clock changes; teachers in India time take care of the difference.' }
    ],
    spec: { title: 'Why groups are not local', p: 'Five Midlothian learners at one stage, free at the same hour, are hard to gather even in Bonnyrigg. Grouping by level across a wider pool gives a learner in Danderhall or Rosewell a well-matched class.' }
  },

  fees: {
    h2: 'Fees in Midlothian',
    intro: 'Dalkeith or Roslin, the fee is the same, and it matches our fee in every country except India.',
    first: 'One whole lesson for nothing, then our honest advice.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month, one-to-one.',
    closer: 'Fees are charged in US dollars, with no sterling price list. Nothing is billed until a course and a weekly time are agreed after the free lesson; the pricing page sets out holidays, missed lessons and switching between formats.'
  },

  reviewsH2: 'Midlothian families and others on Google',

  book: {
    h2: 'Book a free Midlothian lesson',
    intro: 'Share who is learning, how old they are or which stage they are in, and what grabs their attention. A first lesson could be a Scratch game, a Python chart, or the eight-sided sundial on this page.',
    success: 'Thank you. Your Midlothian request is with us.'
  },

  faq: {
    h2: 'Midlothian questions',
    intro: 'Figures, the sundial project, and how lessons run.',
    items: [
      { q: 'How many people live in Midlothian?', a: 'Roughly 96,600 residents living in about 41,000 households, as counted by the 2022 census and rounded by NRS.' },
      { q: 'What are the largest towns in Midlothian?', a: 'By NRS mid-2020 estimates: Bonnyrigg 18,320, Penicuik 16,150, Dalkeith 14,330, Mayfield 13,690 and Gorebridge 8,040.' },
      { q: 'What is the Newbattle sundial project?', a: 'Learners model the sun as a vector in Python and use the dot product to find which faces of an eight-sided dial are lit. At midsummer even the north face gets 7.6 hours of sun in our model.' },
      { q: 'What is a dot product?', a: 'A way of multiplying two arrows that tells you how much they point the same way. Positive means within 90 degrees of each other; that is the test for a sunlit face.' },
      { q: 'How old are the Newbattle sundials?', a: 'Both are dated 1635 on their pedestals, according to Historic Environment Scotland, which lists the pair at Category A.' },
      { q: 'Are lessons held locally?', a: 'All lessons are online, so learners from Penicuik to Danderhall join from home.' },
      { q: 'Can you help with National 5 Maths?', a: 'Yes, along with Higher Maths and Computing Science. We teach for understanding and never promise grades.' },
      { q: 'Who can take lessons?', a: 'Every age from 6 to 67. Primary children usually begin with blocks, secondary pupils with Python and exam maths, and adults with Python at their own pace.' },
      { q: 'What are the fees?', a: 'Lesson one costs nothing. From then on, a group place is USD 100 a month and one-to-one teaching is USD 150 a month.' },
      { q: 'Do you take school holidays off?', a: 'We do. Send the holiday dates your Midlothian school has given you and we stop for those weeks.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'Around Midlothian',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a> and <a class="cg-inline-link" href="/coding-classes-in-east-lothian">East Lothian</a>, which has a Bass Rock project, or browse all councils on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Midlothian and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-edinburgh', label: 'Edinburgh' },
    { href: '/national-5-maths-tuition-online', label: 'National 5 Maths' }
  ],

  personalityCss: `
.cg-root.cg-mlo .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-mlo .cg-hero h1 { font-weight: 720; letter-spacing: -0.021em; line-height: 1.05; }
.cg-root.cg-mlo .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-mlo .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mlo .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.018em; }
.cg-root.cg-mlo .cg-table caption { font-weight: 600; text-align: left; font-size: 0.96rem; }
.cg-root.cg-mlo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mlo .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-mlo .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-mlo .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Midlothian (S12000019), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 96,600 (females 49,900, males 46,700); households 41,000; density 273.1 per square kilometre (Scotland 69.8); ages 0 to 14 17,100 (17.7 per cent), 65+ 18,300 (18.9 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Bonnyrigg 18,320; Penicuik 16,150; Dalkeith 14,330; Mayfield 13,690; Gorebridge 8,040; Loanhead 6,820; Danderhall 3,160; Rosewell 2,020; Roslin 1,770; Bilston 1,440. HES LB14562 and LB14563 (Category A, added 22/01/1971), Newbattle Abbey Policies, North and South Sundial, parish Newbattle: "1635. Octagonal sandstone sundial with 19th century pedestal"; "pedestal bears date \'A.D 1635\'"; "carved in 2 tiers; lower tier contains bronze gnomon in each panel"; "initials EWL (William, Earl of Lothian) and CAL (Annie, Countess of Lothian)"; "Lothian sun motif"; "The North sundial forms an identical pair with the South sundial, both were moved from the front of the house to the rear, mid 19th century". NGR NT 33403 66084.',
    localProject: 'OS grid to lat/lon (Airy 1830 inverse TM): 55.883 N, 3.065 W. Faces assumed N..NW. Midsummer decl 23.44: day 17.32 h; lit h N 7.6, NE 6.8, E 8.7, SE 10.6, S 9.7, SW 10.6, W 8.7, NW 6.8; N windows 3.35-7.15 and 16.87-20.67 solar; noon alt 57.6. Equinox: day 12.02; N 0, NE 3.4, E 6.0, SE 8.7, S 12.0. Midwinter decl -23.44: day 6.68; N/NE/NW 0; E 3.3, SE 6.7, S 6.7, SW 6.7, W 3.4; noon alt 10.7. Max 4 faces lit. Page says day lengths are geometric (no refraction). AI angle: south-facing assumption. Lesson family: vectors, dot product, sun position.',
    requiredMentions: [
      '96,600',
      '273.1',
      'Newbattle',
      'LB14562',
      'Bonnyrigg',
      'Penicuik',
      'Gorebridge',
      'Loanhead',
      'Danderhall',
      'Rosewell',
      'Roslin',
      'gnomon',
      'dot product'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB14562: Newbattle Abbey Policies, North Sundial.', url: 'https://portal.historicenvironment.scot/designation/LB14562' },
      { claim: 'Historic Environment Scotland, LB14563: Newbattle Abbey Policies, South Sundial.', url: 'https://portal.historicenvironment.scot/designation/LB14563' }
    ],
    rejectedClaims: [
      'Actual compass orientation of the dial faces: not in the listings; assumed N to NW and labelled as an assumption.',
      'Real sunrise and sunset times: not computed; page labels its day lengths as geometric.',
      'Rosslyn Chapel legends and carvings: not researched, not used.',
      'Mining history and colliery figures: not researched for this page.',
      'Named Midlothian schools and school term dates: none named or read.',
      'Directions or distances between Midlothian towns: not claimed.'
    ]
  }
};
