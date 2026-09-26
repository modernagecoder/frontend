'use strict';
// Torfaen (cg- county page, UK cluster Phase 7, row 299). One principal area. Spine: how can a program tell a seashell's
// spiral from a coiled rope? Anchor (read raw 26 September 2026): Cadw listed building record 3112, Grade II*, Shell Grotto,
// Trevethin: "more likely to have been built for Capel Hanbury Leigh, the owner of Pontypool Park, in the 1830's when there
// were 85 workers unemployed on the estate and this building was put up to provide work"; "The decoration is supposed to
// have been designed, and partly executed, by Molly Mackworth who was Capel Hanbury Leigh's first wife"; "used for picnics
// by the Hanbury Leigh family"; "a building designed purely for interior effect"; "The roof is vaulted and is supported on
// six slender columns"; "The whole of the wall and ceiling surface is plastered and decorated in patterns of shells, and
// with quartz, spar, mica and other reflective crystals"; "each roof section has a pendant with a pink conch as the
// finial"; "The teeth and bone floor"; "restored in 1994"; reason: "probably the most important surviving example in Wales".
// Our model (computed inline; invented measurements one full turn apart): shell radii 4.0, 6.1, 9.2, 13.9, 21.0, 31.4 mm:
// ratios 1.525, 1.508, 1.511, 1.511, 1.495 (CV 0.006), gaps 2.1 ... 10.4 (CV 0.545) -> logarithmic. Rope 4.0, 8.1, 11.9,
// 16.0, 20.1, 23.9: gaps 3.8 to 4.1 (CV 0.037), ratios 2.025 falling to 1.189 (CV 0.205) -> Archimedean. Mean turn ratio
// 1.510, b 0.0656, constant angle 86.2 degrees. Turns 4 to 100 mm: shell 7.81, rope 24.0. Bug: degrees in e^(b theta) gives
// 1.8e10 per turn instead of 1.510.
// Lesson family: logarithmic vs Archimedean spirals, constant ratio vs constant difference (geometric vs arithmetic);
// screened (logarithmic spiral, equiangular, Archimedean, geometric sequence: 0 hits). No regression framing (spent).
// Place facts: ONS Census 2021 TS001 via Nomis: Torfaen W06000020 92,276. ONS built-up areas (published; OA sums within
// 15): Cwmbran 47,090; Pontypool 29,070; Abersychan 7,495; Blaenavon 5,640; Ponthir 1,260. No Welsh-language statistics.
// Blaenavon World Heritage status not read, not claimed.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'TORFAEN', blurb: 'Cwmbrân, Pontypool, Abersychan and Blaenavon, and a Shell Grotto lesson on telling a seashell spiral from a coiled rope.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-torfaen',
  code: 'tfn',
  accent: '#47224C',
  accentRationale: 'Torfaen: a mussel-shell violet from the solver (10.57:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'Torfaen',
    eyebrow: 'Torfaen',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Newport', href: '/best-coding-class-in-newport-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Torfaen',
  title: 'Coding Classes in Torfaen | Live Online Classes, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Torfaen, for learners in Cwmbrân, Pontypool, Abersychan, Blaenavon, Ponthir and every village between.',
  ogDescription: 'Torfaen coding classes, and a Shell Grotto project: measure a spiral, then let Python decide whether it grows like a seashell or winds like a rope.',
  twitterDescription: 'Torfaen coding, Python and maths for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Torfaen',
    description: 'Online coding, Python, pattern and sequence maths and mathematics for children, teenagers and adults in Torfaen, taught live in English, with learners placed by level.'
  },

  h1: 'Coding classes in Torfaen',
  capsuleQ: 'What are the best coding classes in Torfaen?',
  capsule: 'The 2021 census found 92,276 people in Torfaen. About half live in Cwmbrân, a built-up area of 47,090, and Pontypool holds another 29,070, with Abersychan, Blaenavon and Ponthir making up the rest of the larger places. Our teachers, based in India, run each lesson live by video. Anyone from 6 to 67 can learn coding, Python or maths, either with a private tutor or in a class of five to ten who share a level. The first lesson is free and settles the right course. The Torfaen project starts inside a grotto lined with shells. Continuing costs USD 100 a month for a group, or USD 150 a month for one-to-one.',
  lead: 'In the 1830s, Cadw\'s record suggests, Capel Hanbury Leigh of Pontypool Park put up a small round building to give work to 85 estate workers who had none. Its outside is plain rubble stone. Inside, every wall and the vaulted ceiling are covered in shells, quartz, mica and crystals, and each roof section ends in a pink conch. The decoration is said to have been designed, and partly made, by his first wife, Molly Mackworth. Look at a conch or a snail and the spiral seems to grow as it turns, each whorl a fixed step wider than the last. Look at a coiled rope and the gap between turns stays the same. Those are two different kinds of spiral, and this page\'s project teaches Python to tell them apart.',
  wa: 'Hello Modern Age Coders, we are in Torfaen and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Torfaen',
    h2: 'Courses Torfaen learners start with',
    intro: 'A Year 1 pupil in Ponthir who collects shells, a Year 6 in Abersychan ready to type Python, a Year 11 in Cwmbrân preparing for WJEC GCSE maths, and an adult in Blaenavon learning to code after work. A free lesson places each of them.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with spirals, patterns and turtle drawings.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 14', note: 'Typed Python for younger learners, drawing and measuring spirals.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Full secondary maths, from sequences to exponentials and logs.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Adult Python from the very first line to practical programs.' }
    ]
  },

  sections: [
    {
      id: 'torfaen', tint: '', eyebrow: 'Torfaen by the census',
      h2: '92,276 people, two main towns',
      intro: 'ONS counted 92,276 usual residents in Torfaen at the 2021 census, which we read through Nomis. The places below are ONS built-up areas from that census.',
      body: [
        { kind: 'table', caption: 'Torfaen built-up areas above 1,000 residents, ONS 2021', head: ['Built-up area', 'Residents'], rows: [
          ['Cwmbrân', '47,090'],
          ['Pontypool', '29,070'],
          ['Abersychan', '7,495'],
          ['Blaenavon', '5,640'],
          ['Ponthir', '1,260']
        ] },
        { kind: 'p', text: 'Only five built-up areas pass 1,000 people, and our output-area sums agree with each published figure to within 15. Torfaen schools follow the Curriculum for Wales, and pupils in exam years take WJEC GCSEs and A levels. We have not read the council\'s term dates, so families tell us their holiday weeks.' },
        { kind: 'callout', h3: 'Newport and WJEC exams', p: 'The city of <a class="cg-inline-link" href="/best-coding-class-in-newport-wales">Newport</a> has its own page. Exam guides: <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> and <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC GCSE Digital Technology</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Torfaen project',
      h2: 'Seashell or coiled rope?',
      intro: 'Divide neighbouring measurements, or subtract them, and see which answer stays steady.',
      body: [
        { kind: 'p', text: 'Draw a line out from the centre of a spiral and measure how far each turn is from the middle. For an Archimedean spiral, like a rope coiled on a deck, each turn is a fixed distance further out, so the differences between measurements stay the same. For a logarithmic spiral, the shape many shells approximate, each turn is a fixed multiple of the last, so the ratios stay the same. The learner codes both tests in Python and asks which list varies less. The measurements below are invented for the lesson, not taken from the grotto.' },
        { kind: 'table', caption: 'Our spiral test on invented measurements, one full turn apart, 26 September 2026', head: ['Spiral', 'Measurements (mm)', 'Ratios between turns', 'Gaps between turns'], rows: [
          ['Shell-like', '4.0, 6.1, 9.2, 13.9, 21.0, 31.4', 'Steady, 1.50 to 1.53', 'Growing, 2.1 to 10.4 mm'],
          ['Coiled rope', '4.0, 8.1, 11.9, 16.0, 20.1, 23.9', 'Falling, 2.03 to 1.19', 'Steady, 3.8 to 4.1 mm'],
          ['Program verdict', '', 'Shell: logarithmic', 'Rope: Archimedean']
        ] },
        { kind: 'p', text: 'To make the verdict fair, the program divides each list\'s spread by its average, so a list of ratios near 1.5 and a list of gaps near 4 millimetres can be compared. For the shell, the ratios vary by under 1 per cent while the gaps vary by more than 50. For the rope it is the other way round. The shell grows by about 1.51 times every turn, so it needs fewer than eight turns to grow from 4 millimetres to 100; the rope, adding 4 millimetres each time, needs 24.' },
        { kind: 'p', text: 'Then the learner draws the shell spiral with a turtle, using the rule that radius equals a starting size times e raised to a growth rate times the angle. One more fact falls out: a logarithmic spiral cuts every line from its centre at the same angle, here about 86 degrees, which is why it looks the same at every size. And there is a trap. The formula needs the angle in radians. Feed it 360 for one turn instead of two pi, and the program says the spiral grows eighteen billion times in a single turn.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw two spirals with Scratch\'s pen, one that adds a step each turn and one that multiplies.' },
          { h3: 'Ages 11 to 15', p: 'Compute ratios and gaps in Python and write the rule that decides which spiral you have.' },
          { h3: 'Ages 15 and up', p: 'Derive the constant angle, count turns with logarithms, and test the degrees-radians slip.' }
        ] },
        { kind: 'callout', h3: 'A real grotto, invented shells', p: 'The grotto\'s story comes from Cadw\'s record. Our measurements are made up, and real shells only approximate a perfect logarithmic spiral, so the table teaches the test rather than describing any shell on the walls.' }
      ]
    },
    {
      id: 'shell-grotto', tint: 'deep', eyebrow: 'Why the Shell Grotto',
      h2: 'A room made of shells',
      intro: 'What Cadw\'s record of the grotto says.',
      body: [
        { kind: 'table', caption: 'Shell Grotto, Trevethin, Cadw listed building record 3112, Grade II*', head: ['From the record', 'Detail'], rows: [
          ['Probable origin', 'Built in the 1830s for Capel Hanbury Leigh, owner of Pontypool Park, to employ 85 estate workers'],
          ['Decoration', 'Said to be designed, and partly made, by Molly Mackworth, his first wife'],
          ['Use', 'Picnics for the Hanbury Leigh family'],
          ['Inside', 'Walls and vaulted ceiling covered in shells, quartz, spar and mica, on six slender columns'],
          ['Details', 'A pink conch finial on each roof section; a floor of teeth and bone'],
          ['Significance', 'Probably the most important surviving grotto of its kind in Wales']
        ] },
        { kind: 'p', text: 'Deciding which pattern fits a set of measurements is everyday work in science and software. Engineers ask whether costs grow by a fixed amount or a fixed percentage, biologists whether growth is steady or compounding, and programmers whether an algorithm slows by adding time or multiplying it. A Torfaen learner who has told a shell from a rope with two lines of arithmetic has the core of that skill.' },
        { kind: 'p', text: 'Modern Age Coders has no link to Cadw. The grotto record is Cadw\'s; the spiral measurements and code, including any mistakes, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The route through school',
    h2: 'From pen drawings to logarithms',
    intro: 'These bands are a guide only; the trial lesson finds the true level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Patterns', p: 'Blocks that repeat, turn and grow shapes on screen.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Sequences', p: 'Python with adding and multiplying sequences.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Exponentials', p: 'Powers, exponentials and logs alongside WJEC GCSE and A level.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Starting Python', p: 'Python for adults, from zero to confident.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and patterns',
    h2: 'An AI can call a spiral golden. Can it show you the ratios?',
    intro: 'A confident label is not the same as a test.',
    p1: 'Chatbots often describe shells as golden spirals or Fibonacci patterns, because that story appears so often online. Few answers check the actual growth ratio, and many real shells do not match it.',
    p2: 'A Torfaen learner who has computed ratios and gaps from measurements knows to ask for the test behind any label, from a website, a textbook or an AI.',
    closer: 'Asking for the numbers behind a neat story is a habit a Torfaen teenager can build by coding through 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'From Blaenavon to Ponthir, lessons at home',
    intro: 'Anywhere in the county borough with internet can join.',
    cells: [
      { h3: 'Own code, own keyboard', p: 'The learner writes the program; the teacher sees the shared screen and helps by asking the next question.' },
      { h3: 'Welsh years used', p: 'An Abersychan Year 4 or a Pontypool Year 13 is placed by Welsh school year and progression step, and exams keep their WJEC names. Classes are taught in English.' },
      { h3: 'No-cost start', p: 'Your first lesson is free and ends with plain advice.' },
      { h3: 'Grouped by level', p: 'Five to ten students at one stage, from all over the UK.' },
      { h3: 'Term-time', p: 'Two sessions a week during term, none in the holidays.' },
      { h3: 'Steady through clock changes', p: 'Your lesson keeps its British time in March and October; our teachers do the adjusting.' }
    ],
    spec: { title: 'Why online groups', p: 'A small town rarely has five learners at one level free at one time. Online, a Ponthir or Blaenavon pupil joins peers at exactly their stage.' }
  },

  fees: {
    h2: 'Torfaen fees',
    intro: 'Cwmbrân and Blaenavon pay the same, as do learners in every country we teach outside India.',
    first: 'A full lesson at no cost, then honest advice.',
    group: 'About eight lessons each month with five to ten others.',
    private: 'About eight lessons each month with your own tutor.',
    closer: 'Fees are charged in US dollars only; there is no sterling price. Nothing is billed until the trial agrees a course and a weekly time, and holidays, missed lessons and switching formats are covered on the pricing page.'
  },

  reviewsH2: 'Family ratings on Google',

  book: {
    h2: 'Book a free Torfaen lesson',
    intro: 'Tell us the learner\'s age or school year and a favourite topic. The trial could be a Scratch spiral, a first Python program, or the Shell Grotto test.',
    success: 'Thank you. Your Torfaen request has been received.'
  },

  faq: {
    h2: 'Torfaen questions',
    intro: 'The county borough, the grotto project and the details.',
    items: [
      { q: 'What is the population of Torfaen?', a: 'The 2021 census counted 92,276 usual residents in Torfaen.' },
      { q: 'What is the largest town in Torfaen?', a: 'Cwmbrân, with 47,090 residents in its ONS 2021 built-up area, then Pontypool with 29,070.' },
      { q: 'What is the Shell Grotto project?', a: 'Learners test invented spiral measurements in Python: steady ratios mean a logarithmic spiral like a shell, steady gaps mean an Archimedean spiral like a coiled rope.' },
      { q: 'What is a logarithmic spiral?', a: 'A spiral in which each turn is a fixed multiple of the previous one, so it keeps the same shape as it grows.' },
      { q: 'Who decorated the Shell Grotto?', a: 'Cadw\'s record says the decoration is supposed to have been designed, and partly made, by Molly Mackworth.' },
      { q: 'Are lessons in person in Torfaen?', a: 'No, every lesson is live online, joined from home.' },
      { q: 'Do you help with WJEC GCSE subjects?', a: 'Yes, maths and computing. We teach for understanding and never guarantee grades.' },
      { q: 'Which ages can join?', a: 'From 6 to 67, from first coding blocks to Python for adults.' },
      { q: 'How much are classes?', a: 'Free for the first lesson, then USD 100 a month for a group or USD 150 a month one-to-one.' },
      { q: 'Do classes run in the holidays?', a: 'They pause. Tell us your school holiday weeks and we plan round them.' }
    ]
  },

  next: {
    eyebrow: 'Near Torfaen',
    h2: 'Other South East Wales pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-newport-wales">Newport</a> has a city page, <a class="cg-inline-link" href="/coding-classes-in-monmouthshire">Monmouthshire</a> finds the finest detail a telescope can show, and <a class="cg-inline-link" href="/coding-classes-in-blaenau-gwent">Blaenau Gwent</a> explains why cameras flatten a round street. All Welsh county pages are listed on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers everywhere else.',
    waLabel: 'Contact us on WhatsApp'
  },

  footerHeading: 'Torfaen and South East Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-newport-wales', label: 'Newport' },
    { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science' }
  ],

  personalityCss: `
.cg-root.cg-tfn .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-tfn .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.06; }
.cg-root.cg-tfn .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; border-radius: 0 14px 14px 0; }
.cg-root.cg-tfn .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-tfn .cg-section-head h2 { max-width: 20ch; letter-spacing: -0.017em; }
.cg-root.cg-tfn .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-tfn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tfn .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-tfn .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-tfn .cg-callout { border-left-width: 4px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'Torfaen (W06000020). ONS Census 2021 TS001 via Nomis: 92,276. ONS built-up areas (published; OA sums within 15): Cwmbran 47,090; Pontypool 29,070; Abersychan 7,495; Blaenavon 5,640; Ponthir 1,260. Cadw listed building record 3112, Grade II*, Shell Grotto, Trevethin: built for "Capel Hanbury Leigh, the owner of Pontypool Park, in the 1830\'s when there were 85 workers unemployed on the estate"; decoration "designed, and partly executed, by Molly Mackworth who was Capel Hanbury Leigh\'s first wife"; "decorated in patterns of shells, and with quartz, spar, mica and other reflective crystals"; "a pendant with a pink conch as the finial"; "The teeth and bone floor"; "probably the most important surviving example in Wales".',
    localProject: 'Invented radii one turn apart. Shell 4.0, 6.1, 9.2, 13.9, 21.0, 31.4 mm: ratios 1.495 to 1.525 (CV 0.006), gaps 2.1 to 10.4 (CV 0.545). Rope 4.0, 8.1, 11.9, 16.0, 20.1, 23.9: gaps 3.8 to 4.1 (CV 0.037), ratios 2.025 to 1.189 (CV 0.205). Turn ratio 1.510, b 0.0656, angle 86.2 deg; turns 4 to 100 mm 7.81 vs 24.0. Degrees slip 1.8e10. Lesson family: logarithmic vs Archimedean spirals, ratio vs difference.',
    requiredMentions: [
      'Cwmbrân',
      'Abersychan',
      'Blaenavon',
      'Ponthir',
      'Shell Grotto',
      'Pontypool Park',
      'Hanbury Leigh',
      'Molly Mackworth',
      'logarithmic spiral',
      'Archimedean spiral'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Torfaen, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 3112: Shell Grotto, Trevethin.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=3112' }
    ],
    rejectedClaims: [
      'Measurements of shells in the grotto: none taken; the numbers are invented.',
      'Blaenavon World Heritage status: not read from a source, not claimed.',
      'Blaenavon Balance Tower (Cadw 15292): considered, not used (water-balance lift lesson spent at Bridgend).',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.'
    ]
  }
};
