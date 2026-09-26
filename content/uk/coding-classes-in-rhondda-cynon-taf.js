'use strict';
// Rhondda Cynon Taf (cg- county page, UK cluster Phase 7, row 298). One principal area. Spine: why is a wide stone arch so
// much harder than a small one? Anchor (read raw 26 September 2026): Cadw listed building record 13497, Grade I, Pontypridd
// Bridge: "completed in 1756 and was the last of 4 bridges designed and built in the same place by William Edwards"; "The
// first bridge, of 3 arched bays, was begun in 1746 but was swept away two years later. The second bridge, of a single
// span, collapsed in 1751"; "Edwards solved the problem of the pressure on an unusually wide arch by piercing the
// spandrels"; "For 40 years the bridge was the widest span bridge in Britain (until Sunderland Bridge of 1796)"; "William
// Edwards (1719-89) was an Independent minister and a self-taught civil engineer"; "a single span of 42.7m"; "3 circular
// holes pierced in the spandrels of 2.7m, 1.8m and 0.9m diameter respectively, in ascending order"; "repair of bridge in
// 1798 by Edward David and Thomas Evan"; Grade I "as an C18 civil engineering achievement of national British importance".
// Our model (computed inline): hole areas pi d^2 / 4 = 5.726, 2.545, 0.636 m2, one set of three 8.906 m2 (shares 64.3,
// 28.6, 7.1 per cent; diameters 3:2:1, areas 9:4:1). Per metre of bridge width one set removes 8.9 m3; at a typical
// 2,400 kg/m3 (ours) about 21.4 tonnes. Bug: d used as r gives 35.63 m2 (four times). Square-cube scaling from an invented
// 10 m similar arch: 20 m weight x8 section x4 stress x2; 30 m x27, x9, x3; 42.7 m x77.9, x18.2, x4.27. Galileo's 1638
// argument named, general knowledge. The real problem (heavy haunches pushing the crown) is not modelled; said on page.
// Lesson family: square law and square-cube law scaling; screened (square-cube, square law: 0 hits). Carmarthenshire used
// Edwards's son's elliptical arch perimeter; City of London used the catenary.
// Place facts: ONS Census 2021 TS001 via Nomis: Rhondda Cynon Taf W06000016 237,651. ONS built-up areas (published; OA
// sums within 7): Aberdare 37,675; Pontypridd 31,900; Tonypandy 17,210; Church Village 14,155; Porth 13,350; Rhondda
// 13,265; Mountain Ash 13,000; Tonyrefail 11,440; Llanharan and Brynna 8,105; Treorchy 7,650; Beddau 7,350; Abercynon
// 6,375; Pontyclun 5,800; Treherbert 5,425; Ynysybwl 4,580; Ferndale 4,300; Llantrisant 4,200. No Welsh-language data.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'RHONDDA CYNON TAF', blurb: 'Aberdare, Pontypridd, Tonypandy and Mountain Ash, and a Pontypridd Bridge lesson on why big arches are so much harder than small ones.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-rhondda-cynon-taf',
  code: 'rct',
  accent: '#5C293E',
  accentRationale: 'Rhondda Cynon Taf: a dark pennant-stone maroon from the solver (9.19:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'Rhondda Cynon Taf',
    eyebrow: 'Rhondda Cynon Taf',
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
  routeLabel: 'Rhondda Cynon Taf',
  title: 'Coding Classes in Rhondda Cynon Taf | Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Rhondda Cynon Taf: Aberdare, Pontypridd, Tonypandy, Mountain Ash, Treorchy, Tonyrefail and Llantrisant.',
  ogDescription: 'Coding classes for Rhondda Cynon Taf, and a Pontypridd Bridge project: use Python to see why doubling an arch makes it eight times heavier but only four times stronger.',
  twitterDescription: 'Rhondda Cynon Taf coding, Python and maths for ages 6 to 67, taught live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Rhondda Cynon Taf',
    description: 'Online coding, Python, geometry and mathematics for children, teenagers and adults across Rhondda Cynon Taf, taught live in English with learners placed by level.'
  },

  h1: 'Coding classes in Rhondda Cynon Taf',
  capsuleQ: 'What are the best coding classes in Rhondda Cynon Taf?',
  capsule: 'Rhondda Cynon Taf is home to 237,651 people, according to the 2021 census. Aberdare, at 37,675, and Pontypridd, at 31,900, are its largest towns, and Tonypandy, Church Village, Porth, Mountain Ash and Tonyrefail each pass 10,000. We teach every lesson live on camera, with our teachers based in India. Learners from 6 to 67 study coding, Python and maths on their own with a tutor or in a group of five to ten at the same level. An opening lesson at no charge decides where to begin. The local project stands on a stone bridge built in 1756. Staying on costs USD 100 a month for group lessons, or USD 150 a month for private ones.',
  lead: 'William Edwards, a minister who taught himself engineering, needed four attempts to bridge the Taff at Pontypridd. Cadw\'s record tells the story: a three-arch bridge begun in 1746 was swept away two years later, and his second, a single span, collapsed in 1751. The bridge that finally stood, completed in 1756, crosses in one arch of 42.7 metres, and for 40 years no bridge in Britain had a wider span. Edwards\'s fix was to pierce round holes, 2.7, 1.8 and 0.9 metres across, through the stone above the arch. Why does a bigger arch fight so much harder against its own weight, and how much stone did the holes save? Two scaling rules explain it, and this page\'s project codes both in Python.',
  wa: 'Hello Modern Age Coders, we are in Rhondda Cynon Taf and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Rhondda Cynon Taf',
    h2: 'Rhondda Cynon Taf starting points',
    intro: 'A Year 2 pupil in Treorchy who builds towers, a Year 7 in Mountain Ash ready for Python, a Year 10 in Aberdare with WJEC GCSE maths ahead, and an adult in Pontyclun changing career. Every one begins with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with bridges, towers and shapes that grow.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Area, volume and ratio made visible with short programs.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Thorough secondary maths, from similar shapes to algebraic proof.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from scratch for adults, up to working programs.' }
    ]
  },

  sections: [
    {
      id: 'rhondda-cynon-taf', tint: '', eyebrow: 'Rhondda Cynon Taf in figures',
      h2: '237,651 people and many towns',
      intro: 'The total is the ONS usual-resident count from the 2021 census, accessed through Nomis. The table lists ONS built-up areas above 4,000 people from that census.',
      body: [
        { kind: 'table', caption: 'Rhondda Cynon Taf built-up areas above 4,000 residents, ONS 2021', head: ['Town', 'People', 'Town', 'People'], rows: [
          ['Aberdare', '37,675', 'Treorchy', '7,650'],
          ['Pontypridd', '31,900', 'Beddau', '7,350'],
          ['Tonypandy', '17,210', 'Abercynon', '6,375'],
          ['Church Village', '14,155', 'Pontyclun', '5,800'],
          ['Porth', '13,350', 'Treherbert', '5,425'],
          ['Rhondda', '13,265', 'Ynysybwl', '4,580'],
          ['Mountain Ash', '13,000', 'Ferndale', '4,300'],
          ['Tonyrefail', '11,440', 'Llantrisant', '4,200'],
          ['Llanharan and Brynna', '8,105', '', '']
        ] },
        { kind: 'p', text: 'Summing output areas ourselves, we match each published figure within seven people. ONS treats Rhondda as its own built-up area, separate from Tonypandy, Porth, Treorchy and Treherbert. Schools here follow the Curriculum for Wales, and exam classes sit WJEC GCSE and A level papers. We do not know each school\'s holiday weeks, so families send them to us.' },
        { kind: 'callout', h3: 'Cardiff and exam help', p: 'For the capital, see our <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> page. For exams, try <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> and <a class="cg-inline-link" href="/gcse-maths-and-numeracy-wales-help">GCSE Maths and Numeracy in Wales</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Rhondda Cynon Taf project',
      h2: 'Twice the size, eight times the weight',
      intro: 'One rule for areas, one for volumes, and what happens when they pull apart.',
      body: [
        { kind: 'p', text: 'First the holes. A circle\'s area is pi times the diameter squared, over four, and the learner codes it for the three sizes in the record. The diameters go 3, 2, 1, but the areas go 9, 4, 1, so the largest hole does almost two thirds of the work. Each metre of bridge width loses nearly 9 cubic metres of stone to one set of three holes, which at a typical 2,400 kilograms per cubic metre, our assumption, is about 21 tonnes. That weight was sitting where Edwards least wanted it.' },
        { kind: 'table', caption: 'Our sums for one set of Pontypridd Bridge holes, 26 September 2026', head: ['Hole diameter', 'Area', 'Share of the set', 'Stone saved per metre of width'], rows: [
          ['2.7 m', '5.73 m²', '64%', '13.7 t'],
          ['1.8 m', '2.55 m²', '29%', '6.1 t'],
          ['0.9 m', '0.64 m²', '7%', '1.5 t'],
          ['All three', '8.91 m²', '100%', '21.4 t']
        ] },
        { kind: 'p', text: 'Now the harder idea. Take a stone arch and build a copy exactly twice as big in every direction. Its weight depends on volume, so it grows eight times. The stone that carries that weight works through cross-sections, which grow only four times. Every square centimetre of the bigger arch therefore bears twice the load. The learner codes this square-cube law for arches scaled from an invented 10 metre model: at 20 metres the stress doubles, at 30 metres it triples, and at Pontypridd\'s 42.7 metres the arch is about 78 times heavier than the model while the stone bears over four times the stress. Galileo made the same argument about beams and bones in 1638.' },
        { kind: 'p', text: 'There is a classic slip to catch. Use the diameter where the radius belongs, and the program claims one set of holes removes 35.6 square metres per face, four times the truth. Learners add a test: a hole can never be larger than the square that just contains it. We should also be honest about the model. The record says Edwards pierced the stone to relieve pressure on the arch; the full story involves where the weight sits and how it pushes the arch out of shape, which our sums do not attempt.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Double a cube made of sugar cubes, count how many it takes, then draw growing squares and cubes in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Code circle areas and the 3, 2, 1 pattern in Python, and print the stone saved per hole.' },
          { h3: 'Ages 15 and up', p: 'Scale arches from 10 to 43 metres, chart weight against strength, and write the radius-check test.' }
        ] },
        { kind: 'callout', h3: 'Bridge facts from Cadw, sums from us', p: 'The dates, span and hole sizes are the record\'s. Stone density, bridge width and the 10 metre model are our assumptions, so the table illustrates scaling rather than surveying the real bridge.' }
      ]
    },
    {
      id: 'pontypridd-bridge', tint: 'deep', eyebrow: 'Why Pontypridd Bridge',
      h2: 'Four tries at one crossing',
      intro: 'What Cadw\'s record says about the bridge and its builder.',
      body: [
        { kind: 'table', caption: 'Pontypridd Bridge, Cadw listed building record 13497, Grade I', head: ['Record detail', 'What it says'], rows: [
          ['Builder', 'William Edwards (1719 to 1789), minister and self-taught civil engineer'],
          ['Earlier tries', 'A three-arch bridge begun 1746 and swept away; a single span that collapsed in 1751'],
          ['Completed', '1756, the last of four bridges on the site'],
          ['Span', 'A single arch of 42.7 m, the widest in Britain for 40 years, until Sunderland Bridge of 1796'],
          ['Holes', 'Three circular holes of 2.7 m, 1.8 m and 0.9 m diameter'],
          ['Listing', 'Grade I, an 18th-century civil engineering achievement of national importance']
        ] },
        { kind: 'p', text: 'Scaling laws decide what engineers can build. They explain why aircraft, wind turbine blades and even phone batteries cannot simply be made bigger, and why simulation software checks stress again whenever a design is resized. A Rhondda Cynon Taf learner who has watched weight outrun strength in a few lines of code understands why the fourth bridge needed a new idea, not just more stone.' },
        { kind: 'p', text: 'We have no link with Cadw. Cadw owns the bridge record; the scaling arithmetic, and any error in it, belongs to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Year by year',
    h2: 'From sugar cubes to scaling laws',
    intro: 'Year bands give a rough idea; the free lesson sets the real start.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Build and count', p: 'Block projects that stack, grow and count shapes.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Areas in code', p: 'Python that calculates circles, squares and ratios.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Similarity and proof', p: 'Similar shapes, powers and modelling, with WJEC GCSE and A level in mind.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Python from zero', p: 'Adult Python, from the first line to useful tools.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and scale',
    h2: 'An AI can scale a design in a second. Will it warn you the weight grew eight times?',
    intro: 'Resizing is easy for software; knowing what resizing does is the human part.',
    p1: 'Ask a chatbot to double a structure and it may double every number, or apply one scale factor to everything. Areas, volumes and stresses each scale differently, and a single wrong power ruins the answer without any error message.',
    p2: 'A Rhondda Cynon Taf student who has coded the square-cube law knows to ask how each quantity grows before trusting a resized design, from a person or a program.',
    closer: 'Knowing that not everything scales the same way is a strong reason for a Rhondda Cynon Taf teenager to stay with coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Running the lessons',
    h2: 'From Treherbert to Llantrisant, on screen',
    intro: 'Valley or town, a home connection is all that is needed.',
    cells: [
      { h3: 'Typed by the learner', p: 'Every line is written by the student, and the tutor follows along on screen, prompting with questions rather than answers.' },
      { h3: 'By Welsh year', p: 'A Ferndale Year 5 or a Pontypridd Year 12 is placed by Welsh school year and progression step, with WJEC exam names. Teaching is in English.' },
      { h3: 'Free to try', p: 'A full first lesson with no charge, finishing with a recommendation.' },
      { h3: 'Same-level groups', p: 'Five to ten learners at one level, from across the UK.' },
      { h3: 'Term pattern', p: 'Two lessons a week through term, off in the holidays.' },
      { h3: 'Fixed local hour', p: 'British clock changes do not move your lesson; our teachers in India shift to match.' }
    ],
    spec: { title: 'Why groups mix towns', p: 'Five learners at the same level and free at the same hour are rarely in one valley. Online classes put an Ynysybwl or Beddau learner with the right peers.' }
  },

  fees: {
    h2: 'Rhondda Cynon Taf fees',
    intro: 'Aberdare pays what Llantrisant pays, and the same holds for every country we teach outside India.',
    first: 'A full free lesson, followed by our advice.',
    group: 'About eight lessons a month with five to ten classmates.',
    private: 'About eight lessons a month with a tutor to yourself.',
    closer: 'Our prices are in US dollars only; we never quote sterling. Payment starts after the trial has fixed a course and a weekly time, and the pricing page explains breaks, missed lessons and switching formats.'
  },

  reviewsH2: 'What families rate us on Google',

  book: {
    h2: 'Book a free lesson in Rhondda Cynon Taf',
    intro: 'Send us the learner\'s age or school year and one interest. The trial might be a Scratch building game, a first Python program, or the Pontypridd Bridge scaling sums.',
    success: 'Thank you. Your Rhondda Cynon Taf request is in.'
  },

  faq: {
    h2: 'Rhondda Cynon Taf questions',
    intro: 'The county borough, the bridge project and practical details.',
    items: [
      { q: 'How many people live in Rhondda Cynon Taf?', a: 'The 2021 census counted 237,651 usual residents in Rhondda Cynon Taf.' },
      { q: 'What are the largest towns in Rhondda Cynon Taf?', a: 'ONS 2021 built-up areas: Aberdare 37,675, Pontypridd 31,900 and Tonypandy 17,210.' },
      { q: 'What is the Pontypridd Bridge project?', a: 'Learners code circle areas for the bridge\'s three holes and the square-cube law in Python to see why a wider arch carries more stress.' },
      { q: 'What is the square-cube law?', a: 'Scale a shape up by some factor and its areas grow by the square of that factor while its volume and weight grow by the cube.' },
      { q: 'Who built Pontypridd Bridge?', a: 'William Edwards, completing it in 1756 at his fourth attempt, according to Cadw.' },
      { q: 'Are classes held in Rhondda Cynon Taf?', a: 'All teaching is online, so learners join from home anywhere in the county borough.' },
      { q: 'Can you help with WJEC GCSE maths?', a: 'Yes, along with Computer Science. We teach for understanding and make no grade promises.' },
      { q: 'What ages are welcome?', a: 'Learners from 6 up to 67, on courses that match their level.' },
      { q: 'What is the monthly fee?', a: 'The first lesson is free; then USD 100 a month for a group or USD 150 a month for private lessons.' },
      { q: 'Do you teach in the school holidays?', a: 'Normally not. Share your holiday weeks and we leave them out.' }
    ]
  },

  next: {
    eyebrow: 'Related pages',
    h2: 'More South Wales pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> has a city page, <a class="cg-inline-link" href="/coding-classes-in-carmarthenshire">Carmarthenshire</a> measures the elliptical arch built by Edwards\'s son Thomas, and <a class="cg-inline-link" href="/coding-classes-in-merthyr-tydfil-county-borough">Merthyr Tydfil</a> tracks an iron span growing in the heat. For all of Wales, go to the <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page, and for the rest of the country the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message our team on WhatsApp'
  },

  footerHeading: 'Rhondda Cynon Taf and South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-cardiff', label: 'Cardiff' },
    { href: '/gcse-maths-and-numeracy-wales-help', label: 'GCSE Maths and Numeracy in Wales' }
  ],

  personalityCss: `
.cg-root.cg-rct .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-rct .cg-hero h1 { font-weight: 740; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-rct .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; border-radius: 0 4px 4px 0; }
.cg-root.cg-rct .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rct .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.019em; }
.cg-root.cg-rct .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-rct .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rct .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-rct .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-rct .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Rhondda Cynon Taf (W06000016). ONS Census 2021 TS001 via Nomis: 237,651. ONS built-up areas (published; OA sums within 7): Aberdare 37,675; Pontypridd 31,900; Tonypandy 17,210; Church Village 14,155; Porth 13,350; Rhondda 13,265; Mountain Ash 13,000; Tonyrefail 11,440; Llanharan and Brynna 8,105; Treorchy 7,650; Beddau 7,350; Abercynon 6,375; Pontyclun 5,800; Treherbert 5,425; Ynysybwl 4,580; Ferndale 4,300; Llantrisant 4,200. Cadw listed building record 13497, Grade I, Pontypridd Bridge: "completed in 1756 and was the last of 4 bridges designed and built in the same place by William Edwards"; first begun 1746, "swept away two years later"; second "collapsed in 1751"; "piercing the spandrels"; widest span in Britain for 40 years "until Sunderland Bridge of 1796"; "a single span of 42.7m"; holes "2.7m, 1.8m and 0.9m diameter".',
    localProject: 'Hole areas 5.726, 2.545, 0.636 m2; set 8.906 m2; shares 64.3/28.6/7.1%; per metre width 8.9 m3, 21.4 t at 2,400 kg/m3 (ours). d-as-r slip 35.63 m2. Square-cube from 10 m model: 20 m weight x8, section x4, stress x2; 30 m x27/x9/x3; 42.7 m x77.9/x18.2/x4.27. Galileo 1638. Lesson family: square law and square-cube law scaling.',
    requiredMentions: [
      'Aberdare',
      'Tonypandy',
      'Church Village',
      'Mountain Ash',
      'Tonyrefail',
      'Treorchy',
      'Beddau',
      'Abercynon',
      'Pontyclun',
      'Ynysybwl',
      'Pontypridd Bridge',
      'square-cube law'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Rhondda Cynon Taf, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 13497: Pontypridd Bridge.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=13497' }
    ],
    rejectedClaims: [
      'Bridge width, stone density and number of hole sets: not in the record; our assumptions are labelled.',
      'The structural mechanics of the 1751 collapse: not modelled or claimed.',
      'Memorial to Evan and James James (Cadw 24841): considered, not used.',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.'
    ]
  }
};
