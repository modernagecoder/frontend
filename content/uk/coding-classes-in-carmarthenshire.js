'use strict';
// Carmarthenshire (cg- county page, UK cluster Phase 7, row 287). One principal area. Spine: how long is an elliptical
// arch, when no simple formula gives the exact answer? Anchor (read raw 26 September 2026): Cadw listed building records
// 10964 and 16996 (the two community halves), Grade I, Pont Dolauhirion / Dolauhirion Bridge: "Road bridge across the
// Tywi, built in 1773 by Thomas Edwards"; "the weight-reducing pierced spandrels that Thomas' father the Rev William Edwards
// introduced at Pontypridd in 1756, one of the very few post-Roman advances in masonry bridge building"; "the very broad
// elliptical arch rising to a thin crown"; "Although marked 'Thomas Edward 1773', the bridge was attributed ... to William
// Edwards, and A Arber-Cooke records that it has also been dated 1785"; "rubble stone single arch of some 25m span and
// 3.6m width"; "pierced with large circular holes"; "Scheduled Ancient Monument: CM005".
// Our model (scratchpad wal/ellipse.py): half-ellipse with half-span 12.5 m (from the record's "some 25m") and an invented
// rise. Exact length by Gauss's arithmetic-geometric mean (AGM), 5 or 6 steps. Rise 7 m: exact 31.242807 m; pi(a+b)/2
// 30.630528 (-1.96 per cent); root-mean-square radius 31.825590 (+1.87); Ramanujan I error -3.17e-5 m; Ramanujan II
// -2.56e-9 m; polyline 4 pieces -0.783 m, 16 -0.0502, 64 -0.00314, 256 -0.000196, 1,024 -0.0000123. Rise 4 m: exact
// 27.668325; Ramanujan I -1.13e-3 m; Ramanujan II -1.26e-6 m; pi(a+b) -6.33 per cent. Rise 12.5 m (semicircle): all
// formulas exact 39.269908 = pi x 12.5. Our first AGM version was off by a factor of two; the semicircle check caught it.
// Lesson family: ellipse perimeter, approximation formulas vs an exact fast-converging algorithm (AGM), convergence of a
// polyline, testing with a known case; screened (ellipse, Ramanujan, arithmetic-geometric: 0 lesson hits).
// Place facts: ONS Census 2021 TS001 via Nomis: Carmarthenshire W06000010 187,897. ONS built-up areas (published; OA sums
// within 21): Llanelli 42,155; Carmarthen 16,455; Ammanford 8,285; Cross Hands and Pen-y-groes 6,340; Burry Port 4,965;
// Llangennech 4,280; Tumble 4,040; Glanaman 3,865. No Welsh-language statistics. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'CARMARTHENSHIRE', blurb: 'Llanelli, Carmarthen, Ammanford and Burry Port, and a Dolauhirion Bridge lesson on measuring an elliptical arch exactly.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-carmarthenshire',
  code: 'cmt',
  accent: '#325C5C',
  accentRationale: 'Carmarthenshire: a river-slate teal from the solver (6.0:1 on the darkest paper tint), greyer than the Shetland teal and lighter than the East Lothian one',
  pageType: 'governorate',
  place: {
    name: 'Carmarthenshire',
    eyebrow: 'Carmarthenshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Swansea', href: '/best-coding-class-in-swansea' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Carmarthenshire',
  title: 'Coding Classes in Carmarthenshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Carmarthenshire, from Llanelli and Carmarthen to Ammanford, Cross Hands, Burry Port and Llandovery.',
  ogDescription: 'Coding classes for all of Carmarthenshire, and a Dolauhirion Bridge project: measure an elliptical arch in Python with Ramanujan\'s formulas and Gauss\'s exact method.',
  twitterDescription: 'Carmarthenshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Carmarthenshire',
    description: 'Ability-placed online coding, Python, numerical maths and mathematics for children, teenagers and adults across Carmarthenshire, taught live in English.'
  },

  h1: 'Coding classes in Carmarthenshire',
  capsuleQ: 'What are the best coding classes in Carmarthenshire?',
  capsule: 'Carmarthenshire had 187,897 usual residents at the 2021 census. More than a fifth of that count lives in the Llanelli built-up area alone, going by ONS figures; Carmarthen and Ammanford come next, then Cross Hands and Pen-y-groes, Burry Port, Llangennech and Glanaman, along with market towns such as Llandovery and Llandeilo. Every class happens live, with our India-based teachers on video, and an opening lesson at no cost settles where a Year 5 pupil, a sixth-former or an adult should begin. Anyone from 6 to 67 can learn coding, Python and maths, in a class of five to ten or on their own with a teacher. The Carmarthenshire project starts at a bridge over the Tywi. Staying on is USD 100 a month for a place in a class, or USD 150 a month with one teacher.',
  lead: 'Near Llandovery, Cadw lists Dolauhirion Bridge at Grade I: a single stone arch of some 25 metres across the Tywi, marked Thomas Edward 1773, though other writers date it to 1785 or credit his father. Its record praises the very broad elliptical arch rising to a thin crown, and the large circular holes through the stonework above it, a weight-saving idea the Edwards family pioneered. An elliptical arch hides a surprisingly hard question. For a circle, the curve\'s length is simple: pi times the diameter. For an ellipse there is no such tidy formula, and mathematicians spent centuries on it. How long is the arch ring, and how can a computer be sure? This page\'s project finds out in Python.',
  wa: 'Hello Modern Age Coders, we are in Carmarthenshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Carmarthenshire',
    h2: 'Popular starting courses in Carmarthenshire',
    intro: 'A Year 1 pupil in Llanelli who loves drawing shapes, a Year 7 in Ammanford ready for typed code, a Year 12 in Carmarthen taking A level maths, and an adult in Burry Port who wants Python for work. For each, a free lesson comes first.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with circles, curves and shapes drawn by a moving pen.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Measuring curves, pi and approximation, discovered by coding.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, including sequences, series and convergence.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from zero, through to numerical calculations.' }
    ]
  },

  sections: [
    {
      id: 'carmarthenshire', tint: '', eyebrow: 'Carmarthenshire in figures',
      h2: '187,897 people in Carmarthenshire',
      intro: 'Census day in March 2021 found 187,897 usual residents, according to ONS figures read through Nomis; town sizes below are the matching built-up areas.',
      body: [
        { kind: 'table', caption: 'Carmarthenshire places above 3,500 people, ONS built-up areas 2021', head: ['Place', 'Population', 'Place', 'Population'], rows: [
          ['Llanelli', '42,155', 'Burry Port', '4,965'],
          ['Carmarthen', '16,455', 'Llangennech', '4,280'],
          ['Ammanford', '8,285', 'Tumble', '4,040'],
          ['Cross Hands and Pen-y-groes', '6,340', 'Glanaman', '3,865']
        ] },
        { kind: 'p', text: 'Summing census output areas ourselves reproduces each of these figures to within about twenty people. Carmarthenshire schools teach the Curriculum for Wales and enter older pupils for WJEC GCSE and A level courses. The county council fixes the school holidays; not having read its calendar, we plan each learner\'s breaks from the dates their family sends.' },
        { kind: 'callout', h3: 'Swansea and WJEC help', p: 'The city of <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a> has its own page. For exams, see <a class="cg-inline-link" href="/gcse-maths-and-numeracy-wales-help">GCSE Maths and Numeracy in Wales</a> and <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Carmarthenshire project',
      h2: 'Measuring half an ellipse',
      intro: 'Rough formulas, Ramanujan, straight-line pieces and an exact method from Gauss.',
      body: [
        { kind: 'p', text: 'The span comes from the record: about 25 metres, so the half-span is 12.5. The rise is not given, so the learner tries invented values, mainly 7 metres. The arch is modelled as half an ellipse. The learner then measures its length five ways: two quick guesses, two formulas found by the Indian mathematician Srinivasa Ramanujan, a curve made of many short straight pieces, and an exact method based on Gauss\'s arithmetic-geometric mean, which repeatedly averages two numbers in two different ways until they agree.' },
        { kind: 'table', caption: 'Our half-ellipse arch, half-span 12.5 m, invented rise 7 m, 26 September 2026', head: ['Method', 'Length', 'Error'], rows: [
          ['Exact, arithmetic-geometric mean (5 steps)', '31.242807 m', 'Reference'],
          ['Pi times average of the two half-axes', '30.630528 m', '2.0 per cent short'],
          ['Straight line pieces, 16 of them', '31.192643 m', '5 cm short'],
          ['Straight line pieces, 1,024 of them', '31.242794 m', 'Under 0.02 mm short'],
          ['Ramanujan\'s first formula', '31.242775 m', 'About 0.03 mm short'],
          ['Ramanujan\'s second formula', '31.242807 m', 'A few billionths of a metre']
        ] },
        { kind: 'p', text: 'The quick guesses are a couple of per cent out either way, which on a real arch would be about 60 centimetres. Chopping the curve into straight pieces works, but slowly: every time the number of pieces goes up four times, the error drops about sixteen times, so 1,024 pieces are needed for sub-millimetre accuracy. Ramanujan\'s formulas, published over a century ago, are astonishing; the second is right to a few billionths of a metre here. The arithmetic-geometric mean reaches the exact value in only five rounds of averaging, because its error roughly squares away at every step.' },
        { kind: 'p', text: 'Our own first version of the exact method had a bug and returned half the right length. It was caught by an easy test: when the rise equals the half-span, the arch is a semicircle, and every correct method must give pi times 12.5, 39.27 metres. Testing code against a case you already know the answer to is one of the most useful habits in programming.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Lay string along drawn circles and ovals, measure it, and compare with a guess, then draw ovals in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Approximate an arch with straight pieces in Python and watch the total creep up as the pieces multiply.' },
          { h3: 'Ages 15 and up', p: 'Code Ramanujan\'s formulas and the arithmetic-geometric mean, measure each error, and test on the semicircle case.' }
        ] },
        { kind: 'callout', h3: 'A real bridge, a modelled arch', p: 'The span, the elliptical shape and the history come from Cadw\'s record. The rise is invented and the real arch is not a perfect ellipse, so the lengths describe the mathematics, not the stonework at Dolauhirion.' }
      ]
    },
    {
      id: 'dolauhirion', tint: 'deep', eyebrow: 'Why Dolauhirion Bridge',
      h2: 'An elegant arch over the Tywi',
      intro: 'What the Grade I record says.',
      body: [
        { kind: 'table', caption: 'Dolauhirion Bridge, Cadw listed building records 10964 and 16996, Grade I', head: ['Record detail', 'What it says'], rows: [
          ['Built', 'By Thomas Edwards according to the record, marked Thomas Edward 1773; also attributed to William Edwards and dated 1785 by other writers'],
          ['Form', 'A single broad elliptical arch of some 25 m span, 3.6 m wide, rising to a thin crown'],
          ['Innovation', 'Weight-reducing pierced spandrels, introduced by the Rev William Edwards at Pontypridd in 1756'],
          ['Holes', 'Large circular holes through the spandrels, edged with cut stone'],
          ['Setting', 'Rising high above the Tywi from natural rock abutments'],
          ['Status', 'Listed Grade I and a scheduled monument']
        ] },
        { kind: 'p', text: 'Approximations and exact algorithms sit behind satellite orbits, GPS on an ellipsoidal Earth, lens design and the graphics that draw ovals on every screen. Knowing how accurate a formula is, and testing it against a case with a known answer, separates reliable software from lucky software. A Carmarthenshire student who has measured an arch five ways understands that difference.' },
        { kind: 'p', text: 'We have no connection with Cadw or Carmarthenshire County Council. The record\'s content is theirs; the arch model, the calculations and any mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From string on circles to Ramanujan',
    intro: 'The year bands are guides; the free lesson places each learner.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Shapes and curves', p: 'Block coding that draws circles, ovals and patterns.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Measuring with code', p: 'Typed Python adding up small steps to measure curves.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Series and convergence', p: 'Approximation, sequences and accuracy alongside WJEC GCSE and A level maths.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Numerical Python', p: 'Python for adults, from calculations to testing numerical code.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and formulas',
    h2: 'An AI can quote an ellipse formula in seconds. Will it say how accurate it is?',
    intro: 'A formula without an error estimate is only half an answer.',
    p1: 'Ask a chatbot for the length of an elliptical arch and it will often give one formula and one number. It rarely says whether that formula is an approximation, how far out it might be, or how to check it against a known case such as a semicircle.',
    p2: 'A Carmarthenshire learner who has compared five methods and tested each on a semicircle knows the questions to ask. That habit turns an AI answer into a checked one.',
    closer: 'Proving how accurate an answer is, rather than taking it on trust, is a skill Carmarthenshire teenagers gain by learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'From Llanelli to Llandovery, online',
    intro: 'Towns and villages across the county all join the same way.',
    cells: [
      { h3: 'Pupil at the keyboard', p: 'The learner types every line; the teacher watches on the shared screen and steps in when a bug appears.' },
      { h3: 'Welsh years, WJEC exams', p: 'A Year 6 in Burry Port or a Year 13 in Carmarthen is placed by school year and Curriculum for Wales stage, and exam study follows WJEC. Lessons are in English.' },
      { h3: 'First lesson, no charge', p: 'A complete lesson for free, followed by an honest view of what fits.' },
      { h3: 'Level-matched classes', p: 'Five to ten learners at one level in each class, from different places.' },
      { h3: 'Term-time rhythm', p: 'Two lessons weekly during term, none in the holidays.' },
      { h3: 'Spring and autumn clock changes', p: 'Twice a year the clocks move, but your class stays at its UK time; the teachers, working on India time, shift their day.' }
    ],
    spec: { title: 'Why groups span the county', p: 'Five learners at one level, free at the same time, rarely live in one Carmarthenshire town. Grouping by level gives a pupil in Tumble or Glanaman a class that fits.' }
  },

  fees: {
    h2: 'Fees in Carmarthenshire',
    intro: 'A learner in Llandeilo pays exactly what one in Llanelli pays, and the same as learners in every country outside India.',
    first: 'A full lesson, free, then a recommendation.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month with a teacher of your own.',
    closer: 'We quote only US dollars, never sterling. An invoice follows only after the trial, when a course and weekly slot are settled, and our pricing page explains what happens over holidays, after absences and when changing format.'
  },

  reviewsH2: 'How families rate us on Google',

  book: {
    h2: 'Book a free Carmarthenshire lesson',
    intro: 'A line or two is enough: who the lesson is for, their year or age, and a favourite pastime. From that, the trial might become a Scratch sketch, a first Python loop, or the Dolauhirion arch described here.',
    success: 'Thank you. Your Carmarthenshire request has been received.'
  },

  faq: {
    h2: 'Carmarthenshire questions',
    intro: 'The county, the Dolauhirion project and practical points.',
    items: [
      { q: 'How many people live in Carmarthenshire?', a: 'The 2021 census counted 187,897 usual residents in Carmarthenshire.' },
      { q: 'What are the largest towns in Carmarthenshire?', a: 'ONS 2021 built-up areas: Llanelli 42,155, Carmarthen 16,455, Ammanford 8,285, and Cross Hands and Pen-y-groes 6,340.' },
      { q: 'What is the Dolauhirion Bridge project?', a: 'Learners measure a half-ellipse arch with a 25 metre span in Python, comparing rough formulas, straight-line pieces, Ramanujan\'s formulas and an exact method based on the arithmetic-geometric mean.' },
      { q: 'Why is there no simple formula for an ellipse\'s perimeter?', a: 'Its exact length needs what mathematicians call an elliptic integral, so people use very good approximations, such as Ramanujan\'s, or fast exact algorithms.' },
      { q: 'How old is Dolauhirion Bridge?', a: 'Cadw notes it is marked Thomas Edward 1773, with some writers dating it to 1785, and lists it at Grade I.' },
      { q: 'Are lessons held in Carmarthenshire?', a: 'There is no classroom to travel to: a Glanaman pupil and a Llangennech pupil both join from home by video.' },
      { q: 'Do you teach A level maths in Wales?', a: 'Yes, with WJEC GCSE Computer Science and GCSE maths too. We build understanding and never promise grades.' },
      { q: 'What ages can learn?', a: 'Six-year-olds start with blocks; teenagers move to Python and exam maths; adults up to 67 learn Python at their own pace.' },
      { q: 'How much are lessons?', a: 'Free for the first lesson; after that, a monthly USD 100 in a group or USD 150 individually.' },
      { q: 'Do lessons pause in school holidays?', a: 'Yes. Tell us your school\'s holiday weeks and we leave them free.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More West and South Wales pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a> and <a class="cg-inline-link" href="/best-coding-class-in-st-davids">St Davids</a> have pages of their own, and <a class="cg-inline-link" href="/coding-classes-in-bridgend">Bridgend</a> models a water-balance lift. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page links every area as it is published, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Carmarthenshire and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-swansea', label: 'Swansea' },
    { href: '/gcse-maths-and-numeracy-wales-help', label: 'GCSE Maths and Numeracy in Wales' }
  ],

  personalityCss: `
.cg-root.cg-cmt .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-cmt .cg-hero h1 { font-weight: 710; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-cmt .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-cmt .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cmt .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.019em; }
.cg-root.cg-cmt .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-cmt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cmt .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-cmt .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-cmt .cg-callout { border-left-width: 5px; border-radius: 0 11px 11px 0; }
`,

  dossier: {
    curriculumAuthority: 'Carmarthenshire (W06000010), Carmarthenshire County Council. ONS Census 2021 TS001 via Nomis: 187,897. ONS built-up areas (published; OA sums within 21): Llanelli 42,155; Carmarthen 16,455; Ammanford 8,285; Cross Hands and Pen-y-groes 6,340; Burry Port 4,965; Llangennech 4,280; Tumble 4,040; Glanaman 3,865. Cadw listed building records 10964 and 16996, Grade I, Dolauhirion Bridge: "Road bridge across the Tywi, built in 1773 by Thomas Edwards"; "the weight-reducing pierced spandrels that Thomas\' father the Rev William Edwards introduced at Pontypridd in 1756"; "the very broad elliptical arch rising to a thin crown"; "marked \'Thomas Edward 1773\'"; "has also been dated 1785"; "single arch of some 25m span and 3.6m width"; "pierced with large circular holes"; "Scheduled Ancient Monument: CM005". Llandovery named as the community in the record; Llandeilo named as a place.',
    localProject: 'Half-ellipse, a = 12.5 m, rise invented. AGM exact (5-6 steps). Rise 7: 31.242807 m; pi(a+b)/2 30.630528 (-1.96 per cent); RMS 31.825590 (+1.87); Ramanujan I -3.17e-5 m; Ramanujan II -2.56e-9 m; polyline 4 -0.783, 16 -0.0502, 64 -0.00314, 256 -0.000196, 1,024 -0.0000123. Rise 4: 27.668325; Ramanujan I -1.13e-3; II -1.26e-6. Rise 12.5: all 39.269908. First AGM version off by factor 2, caught by semicircle test (stated on page). Lesson family: ellipse perimeter, approximations vs AGM.',
    requiredMentions: [
      'Ammanford',
      'Cross Hands',
      'Burry Port',
      'Llangennech',
      'Glanaman',
      'Llandovery',
      'Dolauhirion',
      'Thomas Edwards',
      'Ramanujan',
      'arithmetic-geometric mean'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Carmarthenshire, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 10964: Pont Dolauhirion.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=10964' }
    ],
    rejectedClaims: [
      'Rise, true shape or arch ring length of the real bridge: not in the record; rise invented, shape idealised.',
      'Which date or builder is correct: not decided; the record gives the alternatives.',
      'Pontypridd bridge collapse history: not used.',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.',
      'Distances between towns: not claimed.'
    ]
  }
};
