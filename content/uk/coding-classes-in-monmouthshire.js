'use strict';
// Monmouthshire (cg- county page, UK cluster Phase 7, row 294). One principal area. Spine: how much detail could a
// telescope on a hilltop really see? Anchor (read raw 26 September 2026): Cadw listed building record 2222, Grade II*, The
// Kymin Roundhouse, Monmouth: "Erected in 1794 by the Kymin Club as a picnic house for its members"; "Built on the highest
// point of The Kymin to take advantage of the astonishing views, particularly those to the west, over the town and towards
// the mountains around Abergavenny"; "Nelson and the Hamiltons breakfasted here in 1802"; "windows ... supposedly aligned
// on objects in the view"; "Flat roof, which once carried a telescope for the benefit of the Club members"; "gave the
// building to the National Trust in 1902".
// Our model (computed inline; wavelength 550 nm, invented distances and apertures): diffraction limit 1.22 lambda / D.
// Eye pupil 5 mm: 27.68 arcsec, smallest detail 0.671 m at 5 km, 1.342 m at 10 km, 2.684 m at 20 km. Telescope 3 cm: 4.61
// arcsec, 0.112 / 0.224 / 0.447 m. 5 cm: 2.77 arcsec, 0.067 / 0.134 / 0.268 m. 10 cm: 1.38 arcsec, 0.034 / 0.067 / 0.134 m.
// Seeing of 1 arcsec (a good astronomical night; ground-level daytime usually worse) = 0.048 m at 10 km; aperture where
// diffraction equals 1 arcsec: 0.138 m. Bug: treating 1 arcsec as 1 radian gives 10,000 m at 10 km. Practical eye acuity
// about 1 arcminute (general knowledge, hedged on the page).
// Lesson family: angular resolution, diffraction limit versus atmospheric seeing, which limit dominates; screened
// (angular resolution, diffraction limit, atmospheric seeing: 0 hits; Havering's "Rayleigh" is a wind distribution).
// Place facts: ONS Census 2021 TS001 via Nomis: Monmouthshire W06000021 92,957. ONS built-up areas (published; OA sums
// within 6): Abergavenny 13,695; Chepstow 11,935; Monmouth 10,325; Caldicot 9,815; Undy and Magor 5,740; Usk 2,310;
// Gilwern 2,185; Llanfoist 2,005. No Welsh-language statistics. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'MONMOUTHSHIRE', blurb: 'Abergavenny, Chepstow, Monmouth and Caldicot, and a Kymin telescope lesson on how much detail any lens can show.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-monmouthshire',
  code: 'mmt',
  accent: '#4C4422',
  accentRationale: 'Monmouthshire: a brass-telescope olive from the solver (7.84:1 on the darkest paper tint), browner than the Anglesey olive',
  pageType: 'governorate',
  place: {
    name: 'Monmouthshire',
    eyebrow: 'Monmouthshire',
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
  routeLabel: 'Monmouthshire',
  title: 'Coding Classes in Monmouthshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Monmouthshire, from Abergavenny, Chepstow and Monmouth to Caldicot, Magor, Usk, Gilwern and Llanfoist.',
  ogDescription: 'Coding classes for all of Monmouthshire, and a Kymin project: calculate how much detail an eye or a telescope can resolve in Python, and when atmospheric seeing sets the limit.',
  twitterDescription: 'Monmouthshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Monmouthshire',
    description: 'Ability-placed online coding, Python, optics maths and mathematics for children, teenagers and adults across Monmouthshire, taught live in English.'
  },

  h1: 'Coding classes in Monmouthshire',
  capsuleQ: 'What are the best coding classes in Monmouthshire?',
  capsule: 'Monmouthshire had 92,957 usual residents at the 2021 census. Abergavenny, Chepstow and Monmouth are its three main towns, each above 10,000 people, with Caldicot close behind and Undy and Magor, Usk, Gilwern and Llanfoist among the smaller places. Teachers in India run each lesson live by video, and a trial session at no cost shows where a Year 4 child, a sixth former or an adult ought to start. Coding, Python and maths are open to anyone from 6 to 67, taught solo or in a class of five to ten at one level. The Monmouthshire project starts at a hilltop roundhouse above Monmouth. Families who continue pay USD 100 monthly for group classes or USD 150 monthly for solo tuition.',
  lead: 'In 1794 a dining club in Monmouth built a small round tower on the highest point of The Kymin, purely to enjoy the view. Cadw lists the Kymin Roundhouse at Grade II* and records that Nelson breakfasted there in 1802, that its windows were supposedly aligned on objects in the view, and that its flat roof once carried a telescope for the members. A telescope does more than make things bigger. The size of its lens sets the finest detail it can ever show, because light spreads slightly as it passes through any opening. And the air itself adds a shimmer that no lens can beat. How much detail could the club have seen, and what really limited it? Python gives the answer below.',
  wa: 'Hello Modern Age Coders, we are in Monmouthshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Monmouthshire',
    h2: 'Starting points around Monmouthshire',
    intro: 'A Year 1 pupil in Usk who loves binoculars, a Year 6 in Caldicot ready to type code, a Year 11 in Abergavenny preparing for WJEC GCSE maths, and an adult in Chepstow teaching themselves Python. Each begins with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with light, lenses and spotting games.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Angles, tiny numbers and unit conversion, made clear by coding.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, from radians to standard form and physics formulas.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from zero, up to science and engineering scripts.' }
    ]
  },

  sections: [
    {
      id: 'monmouthshire', tint: '', eyebrow: 'Monmouthshire in figures',
      h2: '92,957 people in Monmouthshire',
      intro: 'ONS counted 92,957 usual residents in Monmouthshire on census day 2021, read here through Nomis. Town figures below are ONS built-up areas, counted on that same day.',
      body: [
        { kind: 'table', caption: 'Monmouthshire built-up areas of 2,000 or more people, ONS 2021', head: ['Town', 'People', 'Town', 'People'], rows: [
          ['Abergavenny', '13,695', 'Undy and Magor', '5,740'],
          ['Chepstow', '11,935', 'Usk', '2,310'],
          ['Monmouth', '10,325', 'Gilwern', '2,185'],
          ['Caldicot', '9,815', 'Llanfoist', '2,005']
        ] },
        { kind: 'p', text: 'Each figure matches our own output-area total to within six people. Monmouthshire\'s schools teach the Curriculum for Wales, and exam classes follow WJEC GCSE and A level courses. Monmouthshire County Council sets the holidays; we have not read its calendar, so each family tells us its own dates.' },
        { kind: 'callout', h3: 'Newport and WJEC exams', p: 'The city of <a class="cg-inline-link" href="/best-coding-class-in-newport-wales">Newport</a> has its own page. For exam support, see <a class="cg-inline-link" href="/gcse-maths-and-numeracy-wales-help">GCSE Maths and Numeracy in Wales</a> and <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Monmouthshire project',
      h2: 'How fine can a lens see?',
      intro: 'One formula for light spreading through an opening, and one number for shimmering air.',
      body: [
        { kind: 'p', text: 'Light passing through any circular opening spreads a little, which blurs every point into a tiny disc. The smallest angle a lens can separate, its angular resolution at the diffraction limit, is about 1.22 times the wavelength divided by the opening\'s width. Green light has a wavelength of about 550 billionths of a metre. The learner codes the formula, converts the angle from radians into arcseconds, the astronomer\'s unit where 3,600 make a degree, and multiplies by distance to find the smallest detail that could be seen. The distances and telescope sizes are our own choices; the record does not say what the club\'s telescope was.' },
        { kind: 'table', caption: 'Our resolution sums, green light, 26 September 2026', head: ['Opening', 'Finest angle', 'Smallest detail at 5 km', 'At 10 km'], rows: [
          ['Eye pupil, 5 mm', '27.7 arcsec', '0.67 m', '1.34 m'],
          ['Telescope, 3 cm', '4.6 arcsec', '11 cm', '22 cm'],
          ['Telescope, 5 cm', '2.8 arcsec', '7 cm', '13 cm'],
          ['Telescope, 10 cm', '1.4 arcsec', '3 cm', '7 cm']
        ] },
        { kind: 'p', text: 'Doubling the width of the lens halves the finest angle, so a 10 centimetre telescope could in principle pick out detail about twenty times finer than the pupil of an eye. Real eyes do worse than their pupil suggests, typically about a minute of arc, because of the retina behind them. But the telescope has a limit too: the air. Warm and cool pockets bend light slightly and set a shimmer that astronomers call seeing. On a good night that is about one arcsecond, and along the ground on a sunny day it is usually worse. One arcsecond at 10 kilometres is about 5 centimetres.' },
        { kind: 'p', text: 'So which limit wins? The learner finds the crossover by setting the diffraction limit equal to one arcsecond: an opening of about 14 centimetres. For any telescope smaller than that, the lens is the bottleneck; for anything bigger, the air is. A classic slip also appears: forgetting to convert arcseconds to radians. Treat one arcsecond as one radian and the program claims the smallest visible detail at 10 kilometres is 10 kilometres wide, an answer so wrong it is easy to catch, if someone checks.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Test how far away two dots can be told apart by eye, then draw the experiment in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Code the diffraction formula in Python and print the smallest detail for different lenses and distances.' },
          { h3: 'Ages 15 and up', p: 'Add atmospheric seeing, find the crossover aperture, and write a test that catches the arcsecond-radian slip.' }
        ] },
        { kind: 'callout', h3: 'A real tower, a model telescope', p: 'The Roundhouse history comes from Cadw\'s record. The telescope sizes, distances and seeing figure are our assumptions, so the table shows the physics of any hilltop view rather than what the Kymin Club actually saw.' }
      ]
    },
    {
      id: 'kymin', tint: 'deep', eyebrow: 'Why the Kymin',
      h2: 'A roundhouse built for a view',
      intro: 'What Cadw\'s record says.',
      body: [
        { kind: 'table', caption: 'The Kymin Roundhouse, Monmouth, Cadw listed building record 2222, Grade II*', head: ['Record detail', 'What it says'], rows: [
          ['Built', '1794, by the Kymin Club as a picnic house'],
          ['Site', 'The highest point of The Kymin, chosen for its views'],
          ['Visitors', 'Nelson and the Hamiltons breakfasted there in 1802'],
          ['Windows', 'Supposedly aligned on objects in the view'],
          ['Roof', 'Flat, once carrying a telescope for the members'],
          ['Ownership', 'Given to the National Trust in 1902']
        ] },
        { kind: 'p', text: 'Resolution limits decide what phone cameras, microscopes, satellites and self-driving cars can see, and engineers balance lens size, sensor size and atmospheric effects in software every day. The same one-line formula explains why telescopes keep getting larger and why the largest ones need systems to correct for the air. A Monmouthshire student who has found the crossover between lens and air understands a real design trade-off.' },
        { kind: 'p', text: 'We have no connection with Cadw, the National Trust or Monmouthshire County Council. The record belongs to Cadw; the resolution sums and any errors belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From spotting games to optics',
    intro: 'The year bands are rough guides; the trial lesson places each learner.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Looking closely', p: 'Block coding with zooming, spotting and simple light games.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Angles and units', p: 'Typed Python converting angles and working with tiny numbers.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Physics formulas', p: 'Waves, optics and standard form alongside WJEC GCSE and A level courses.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Science in Python', p: 'Python for adults, from quick calculations to reusable tools.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and limits',
    h2: 'An AI can quote a resolution formula in seconds. Will it tell you the air wins?',
    intro: 'The formula is only half the answer; knowing which limit applies is the other half.',
    p1: 'Ask a chatbot how much detail a big telescope can see and it may apply the diffraction formula alone, promising impossibly fine detail along the ground. The shimmer of the air, which dominates beyond a modest lens size, is easily left out.',
    p2: 'A Monmouthshire learner who has compared the two limits knows to ask which one actually applies. That is the kind of question that keeps AI answers honest.',
    closer: 'Spotting the missing limit in a confident answer is a skill a Monmouthshire teenager builds by coding the sums.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From Usk to Caldicot, lessons at home',
    intro: 'Every town and village in the county joins by video.',
    cells: [
      { h3: 'Pupils write the code', p: 'Every line on screen is typed by the learner; the teacher watches the shared window and steps in only when stuck.' },
      { h3: 'Welsh years and WJEC', p: 'We place a Magor Year 5 or a Monmouth Year 12 using Welsh school years and Curriculum for Wales progression steps, and name exams as WJEC does. Lessons are in English.' },
      { h3: 'A free trial', p: 'One whole lesson at no cost, then straight advice.' },
      { h3: 'Level-matched groups', p: 'Five to ten learners at one level, from many places.' },
      { h3: 'Term-time lessons', p: 'Two lessons a week during term; holidays off.' },
      { h3: 'Steady UK time', p: 'When British clocks go forward or back, your slot stays put on the local clock and our teachers shift instead.' }
    ],
    spec: { title: 'Why groups span towns', p: 'Five learners at one level, free at the same time, rarely live in one Monmouthshire town. Grouping by level gives a pupil in Gilwern or Llanfoist a class that fits.' }
  },

  fees: {
    h2: 'Fees in Monmouthshire',
    intro: 'Chepstow or Abergavenny, the fee is the same, as in every country we teach outside India.',
    first: 'A complete free lesson, followed by a recommendation.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month with your own teacher.',
    closer: 'We charge in US dollars only; no sterling prices. Nothing is billed until the trial has settled a course and a weekly slot; holidays, missed sessions and changes of format are explained on the pricing page.'
  },

  reviewsH2: 'Ratings from families on Google',

  book: {
    h2: 'Book a free Monmouthshire lesson',
    intro: 'Send the learner\'s age or school year and a favourite interest. The trial could be a Scratch spotting game, a Python calculator, or the Kymin telescope sums.',
    success: 'Thank you. Your Monmouthshire request has been received.'
  },

  faq: {
    h2: 'Monmouthshire questions',
    intro: 'The county, the Kymin project and practical details.',
    items: [
      { q: 'How many people live in Monmouthshire?', a: 'The 2021 census counted 92,957 usual residents in Monmouthshire.' },
      { q: 'What are the largest towns in Monmouthshire?', a: 'ONS 2021 built-up areas: Abergavenny 13,695, Chepstow 11,935, Monmouth 10,325 and Caldicot 9,815.' },
      { q: 'What is the Kymin project?', a: 'Learners compute the diffraction limit of an eye and of small telescopes in Python, compare it with the shimmer of the air, and find that above about a 14 cm lens the air sets the limit.' },
      { q: 'What is the diffraction limit?', a: 'The finest angle a lens or opening can separate, about 1.22 times the wavelength of light divided by the opening\'s width.' },
      { q: 'When was the Kymin Roundhouse built?', a: 'In 1794, by the Kymin Club, according to Cadw, which lists it at Grade II*.' },
      { q: 'Are lessons held in Monmouthshire?', a: 'No classroom to travel to: every session happens by video, from a kitchen table in Usk or a bedroom in Chepstow.' },
      { q: 'Do you teach GCSE maths in Wales?', a: 'Yes, and WJEC GCSE Computer Science too. Our aim is secure understanding; no tutor can honestly guarantee a grade, and we do not.' },
      { q: 'What ages can learn?', a: 'Any learner between 6 and 67: picture blocks for young children, typed Python for grown-ups.' },
      { q: 'How much are lessons?', a: 'Nothing for the opening lesson; after it, a group place costs USD 100 each month and a private teacher USD 150.' },
      { q: 'Do lessons stop in the school holidays?', a: 'Yes. Send us the holiday weeks for your school and those weeks stay empty.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More South East Wales pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-newport-wales">Newport</a> and <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> have city pages, and <a class="cg-inline-link" href="/coding-classes-in-blaenau-gwent">Blaenau Gwent</a> explains why cameras flatten a round street. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> index gathers every Welsh county page so far, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> reaches England, Scotland and Northern Ireland.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Monmouthshire and South East Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-newport-wales', label: 'Newport' },
    { href: '/gcse-maths-and-numeracy-wales-help', label: 'GCSE Maths and Numeracy in Wales' }
  ],

  personalityCss: `
.cg-root.cg-mmt .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-mmt .cg-hero h1 { font-weight: 710; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-mmt .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-mmt .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mmt .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-mmt .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-mmt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mmt .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-mmt .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-mmt .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Monmouthshire (W06000021), Monmouthshire County Council. ONS Census 2021 TS001 via Nomis: 92,957. ONS built-up areas (published; OA sums within 6): Abergavenny 13,695; Chepstow 11,935; Monmouth 10,325; Caldicot 9,815; Undy and Magor 5,740; Usk 2,310; Gilwern 2,185; Llanfoist 2,005. Cadw listed building record 2222, Grade II*, The Kymin Roundhouse, Monmouth: "Erected in 1794 by the Kymin Club as a picnic house for its members"; "Built on the highest point of The Kymin to take advantage of the astonishing views"; "Nelson and the Hamiltons breakfasted here in 1802"; "supposedly aligned on objects in the view"; "Flat roof, which once carried a telescope for the benefit of the Club members"; "gave the building to the National Trust in 1902".',
    localProject: 'Diffraction 1.22 lambda/D, lambda 550 nm. Eye 5 mm: 27.68 arcsec; 5 km 0.671 m, 10 km 1.342 m, 20 km 2.684 m. 3 cm: 4.61; 0.112/0.224/0.447. 5 cm: 2.77; 0.067/0.134/0.268. 10 cm: 1.38; 0.034/0.067/0.134. Seeing 1 arcsec = 0.048 m at 10 km; crossover aperture 0.138 m. Arcsec-as-radian slip: 10,000 m at 10 km. Eye acuity about 1 arcmin (general knowledge, hedged). Lesson family: angular resolution, diffraction vs seeing.',
    requiredMentions: [
      'Magor',
      'Gilwern',
      'Llanfoist',
      'Kymin',
      'Kymin Club',
      'Undy and Magor',
      'diffraction limit',
      'angular resolution',
      'atmospheric seeing',
      'Kymin Roundhouse'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Monmouthshire, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 2222: The Kymin Roundhouse.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=2222' }
    ],
    rejectedClaims: [
      'The size or power of the Kymin Club telescope: not in the record; model apertures are ours.',
      'What can be seen from the Kymin, and how far: not claimed; distances are invented.',
      'Chepstow bridge and Monnow Bridge facts: considered, not used.',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.',
      'Distances between towns: not claimed.'
    ]
  }
};
