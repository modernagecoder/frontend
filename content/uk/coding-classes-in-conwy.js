'use strict';
// Conwy county borough (cg- county page, UK cluster Phase 7, row 289). One principal area. Spine: why is a hollow iron box
// so stiff, and why did one extra pier make such a difference? Anchor (read raw 26 September 2026): Cadw listed building
// record 3236, Grade I, Tubular Railway Bridge, Conwy: "On the Chester-Holyhead Railway, built 1846-49 by Robert Stephenson,
// in collaboration with William Fairbairn and E. Hodgkinson"; "It was originally intended to be a suspension bridge"; "The
// bridge, like Stephenson's contemporary Britannia Bridge spanning the Menai Strait, pioneered wrought-iron box-girder
// construction"; "Intermediate piers were added in 1899"; "The deck is double-track, each track having its own tubular
// girder construction"; "Listed grade I as a major work of C19 civil engineering of national importance".
// Our model (scratchpad wal/beam.py; all sizes invented, not the bridge's): same area of iron 0.478 m2 in three shapes.
// Box 4.5 m x 7.5 m, 20 mm walls: I = 3.902 m4. Solid square 0.692 m: I = 0.0191 m4 (box 205 times stiffer). Flat plate
// 4.5 m x 0.106 m: I = 0.000451 m4 (box 8,659 times). Simply supported sag 5wL^4/384EI with w 60 kN/m, E 190 GPa: 60 m
// span 0.014 m, 120 m 0.219 m, 125 m 0.257 m; doubling span x16.0. 120 m with a middle support (two continuous spans,
// superposition): middle deflection ~0 (check), largest sag 0.0057 m at 25.3 m from the end, 38 times less.
// Lesson family: beam stiffness, second moment of area, L^4 scaling, superposition; screened (deflection, second moment,
// box girder, bending moment, stiffness: 0 hits). Suspension (spent elsewhere) avoided.
// Place facts: ONS Census 2021 TS001 via Nomis: Conwy W06000003 114,741. ONS built-up areas (published; OA sums within
// 11): Colwyn Bay 29,275; Conwy 15,715; Llandudno 14,710; Kinmel Bay 9,020; Abergele 8,535; Penrhyn Bay 4,200;
// Llanfairfechan 3,545; Penmaenmawr 2,760. No Welsh-language statistics. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'CONWY', blurb: 'Colwyn Bay, Conwy, Llandudno and Abergele, and a tubular bridge lesson on why hollow boxes are so stiff.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-conwy',
  code: 'cwy',
  accent: '#184C0B',
  accentRationale: 'Conwy: a deep castle-ivy green from the solver (8.15:1 on the darkest paper tint), darker and more saturated than the Highland olive',
  pageType: 'governorate',
  place: {
    name: 'Conwy county borough',
    eyebrow: 'Conwy county borough',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Bangor', href: '/best-coding-class-in-bangor-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Conwy',
  title: 'Coding Classes in Conwy | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Conwy county borough, from Colwyn Bay, Conwy and Llandudno to Abergele, Kinmel Bay and Llanrwst.',
  ogDescription: 'Coding classes for all of Conwy county borough, and a tubular bridge project: compare iron boxes, bars and plates in Python and see what one extra pier does.',
  twitterDescription: 'Conwy coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Conwy County Borough',
    description: 'Ability-placed online coding, Python, engineering maths and mathematics for children, teenagers and adults across Conwy county borough, taught live in English.'
  },

  h1: 'Coding classes in Conwy county borough',
  capsuleQ: 'What are the best coding classes in Conwy?',
  capsule: 'Conwy county borough had 114,741 usual residents at the 2021 census. Colwyn Bay is its largest built-up area, then Conwy and Llandudno, with Kinmel Bay, Abergele, Penrhyn Bay and Llanfairfechan among the rest, and towns such as Llanrwst and Betws-y-Coed. Lessons run live over video with our teachers in India, and a free first session finds each learner\'s level, from a Year 1 pupil to a Year 13 student or an adult. Coding, Python and maths are open to anyone between 6 and 67, in classes of five to ten or one-to-one. The Conwy project starts at Robert Stephenson\'s tubular railway bridge. Families who continue pay USD 100 monthly for group lessons or USD 150 monthly for a personal tutor.',
  lead: 'In Conwy, Cadw lists the Tubular Railway Bridge at Grade I. Built from 1846 to 1849 by Robert Stephenson with William Fairbairn and E. Hodgkinson, it carries the railway inside wrought-iron tubes, and the record says it pioneered box-girder construction, like the Britannia Bridge across the Menai Strait. It was first meant to be a suspension bridge, and in 1899 intermediate piers were added. Two questions follow for anyone who likes numbers. Why would engineers wrap a railway in a hollow box rather than lay it on solid bars? And why would one extra support in the middle matter so much? This page\'s project answers both in Python with invented sizes.',
  wa: 'Hello Modern Age Coders, we are in Conwy county borough and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Conwy',
    h2: 'First courses across Conwy county borough',
    intro: 'A Year 3 pupil in Llandudno who builds bridges from card, a Year 7 in Colwyn Bay ready for Python, a Year 12 in Abergele taking A level maths, and an adult in Conwy retraining as an engineer. A free lesson starts each of them off.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with building, stacking and testing games.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Powers, areas and scaling, discovered by coding them.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, from powers and polynomials to calculus.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from zero, up to engineering calculations and plots.' }
    ]
  },

  sections: [
    {
      id: 'conwy', tint: '', eyebrow: 'Conwy county borough in figures',
      h2: '114,741 people in Conwy county borough',
      intro: 'Census 2021 counted 114,741 usual residents in the county borough, according to ONS data read through Nomis. The towns listed are ONS built-up areas from the same census.',
      body: [
        { kind: 'table', caption: 'Built-up areas in Conwy county borough over 2,500 people, ONS 2021', head: ['Place', 'Usual residents', 'Place', 'Usual residents'], rows: [
          ['Colwyn Bay', '29,275', 'Abergele', '8,535'],
          ['Conwy', '15,715', 'Penrhyn Bay', '4,200'],
          ['Llandudno', '14,710', 'Llanfairfechan', '3,545'],
          ['Kinmel Bay', '9,020', 'Penmaenmawr', '2,760']
        ] },
        { kind: 'p', text: 'Our own sums of census output areas match each published figure to within about ten people. Schools work to the Curriculum for Wales, with WJEC courses for GCSE and A level. Conwy County Borough Council decides the school holidays; we have not read its calendar, so each family tells us its own break weeks.' },
        { kind: 'callout', h3: 'Bangor and WJEC help', p: 'The city of <a class="cg-inline-link" href="/best-coding-class-in-bangor-wales">Bangor</a> has its own page. For exams, see <a class="cg-inline-link" href="/gcse-maths-and-numeracy-wales-help">GCSE Maths and Numeracy in Wales</a> and <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Conwy project',
      h2: 'Same iron, three shapes',
      intro: 'Why depth beats bulk, and why span matters to the fourth power.',
      body: [
        { kind: 'p', text: 'All the sizes in the model are invented. The learner takes a fixed amount of iron, a cross-section of about 0.48 square metres, and arranges it three ways: as a solid square bar, as a wide flat plate, and as a hollow box 4.5 metres wide and 7.5 metres deep with walls 20 millimetres thick. How much a beam resists bending depends on a quantity called the second moment of area, which grows with the cube of the depth, because metal far from the middle does most of the work. The program computes it for each shape.' },
        { kind: 'table', caption: 'Our invented sections with the same amount of iron, 26 September 2026', head: ['Shape', 'Second moment of area', 'Stiffness compared with the box'], rows: [
          ['Hollow box, 4.5 m by 7.5 m, 20 mm walls', '3.902 m4', 'Reference'],
          ['Solid square bar, 0.69 m across', '0.0191 m4', '205 times less stiff'],
          ['Flat plate, 4.5 m wide', '0.000451 m4', 'About 8,700 times less stiff']
        ] },
        { kind: 'p', text: 'The hollow box wins overwhelmingly: the same iron bends 205 times less than as a solid bar and thousands of times less than as a flat plate, simply because it is spread out as far from the centre as possible. Next the learner lets a beam sag under an even load. The textbook formula says the sag grows with the fourth power of the span, so doubling the span from 60 to 120 metres multiplies the sag by exactly 16, from 1.4 centimetres to about 22 centimetres in the model.' },
        { kind: 'p', text: 'Then the extra pier. With a support added in the middle of a 120 metre beam, the program combines two known solutions, the sag under the even load and the upward push of the new support, and checks that the beam sits exactly on the support. The largest sag falls from about 22 centimetres to under 6 millimetres, roughly 38 times less, and moves to a point about 25 metres from each end. The record does not say why piers were added in 1899, and the model does not claim to know; it shows why an extra support is such a powerful fix.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Test paper bridges folded flat, rolled into tubes and folded into boxes, and count the coins each holds before sagging.' },
          { h3: 'Ages 11 to 15', p: 'Compute the second moment of area for rectangles and boxes in Python and rank the shapes.' },
          { h3: 'Ages 15 and up', p: 'Use the sag formula, confirm the fourth-power law, and model the middle support by superposition with a check that it sits at zero.' }
        ] },
        { kind: 'callout', h3: 'A real bridge, a teaching model', p: 'The history and construction type come from Cadw\'s record. Every dimension, load and material value in our model is invented or typical, and none of the numbers describe the real Conwy bridge.' }
      ]
    },
    {
      id: 'tubular-bridge', tint: 'deep', eyebrow: 'Why the tubular bridge',
      h2: 'A Grade I work of Victorian engineering',
      intro: 'What Cadw\'s record says.',
      body: [
        { kind: 'table', caption: 'Tubular Railway Bridge, Conwy, Cadw listed building record 3236, Grade I', head: ['Record detail', 'What it says'], rows: [
          ['Built', '1846 to 1849 on the Chester to Holyhead railway'],
          ['Engineers', 'Robert Stephenson with William Fairbairn and E. Hodgkinson; architect Francis Thompson'],
          ['Innovation', 'Pioneered wrought-iron box-girder construction, like the Britannia Bridge'],
          ['First plan', 'Originally intended as a suspension bridge; its towers were designed to carry chains'],
          ['Tracks', 'Double track, each with its own tubular girder'],
          ['Later change', 'Intermediate piers added in 1899']
        ] },
        { kind: 'p', text: 'Box sections are everywhere once you look: aircraft wings, car chassis rails, bicycle frames, cranes and modern motorway bridges all put their material far from the middle to gain stiffness cheaply. Structural engineering software runs the same calculations, at vastly greater scale, for every building and bridge. A Conwy student who has seen a hollow box beat a solid bar by 205 times understands one of the most useful ideas in engineering.' },
        { kind: 'p', text: 'We have no connection with Cadw or Conwy County Borough Council. The record\'s content is Cadw\'s; the model, its numbers and any mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From paper bridges to beam theory',
    intro: 'Read the year bands loosely; where each learner starts is decided in the trial lesson.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Build and test', p: 'Block coding with building games and simple experiments.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Shapes and powers', p: 'Typed Python with areas, powers and comparisons.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Engineering maths', p: 'Polynomials, calculus and modelling alongside WJEC GCSE and A level courses.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Calculations that matter', p: 'Python for adults, from quick sums to engineering scripts.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and scaling',
    h2: 'An AI can size a beam in seconds. Will it respect the fourth power?',
    intro: 'Linear intuition fails badly when a quantity grows as a power.',
    p1: 'Ask a chatbot how much more a beam sags if its span doubles and it may say twice as much. The true answer for this kind of beam is sixteen times, and a design based on the wrong one would be dangerously flexible.',
    p2: 'A Conwy learner who has checked the fourth-power law in code knows to test how a quantity scales before trusting an answer. That habit is exactly what AI-assisted engineering needs.',
    closer: 'Checking how a quantity really scales before trusting it: that is a reason for Conwy teenagers to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From Llandudno to Llanrwst, lessons at home',
    intro: 'Every town and village in the county borough joins by video.',
    cells: [
      { h3: 'Writing, not watching', p: 'The learner builds each program; the teacher reads along on the shared screen and asks the question that moves things on.' },
      { h3: 'Welsh years, WJEC courses', p: 'A Penmaenmawr Year 6 or a Colwyn Bay Year 11 is placed by year and the Curriculum for Wales, with WJEC names for exams. We teach in English.' },
      { h3: 'A free first session', p: 'One whole lesson for nothing, then honest advice.' },
      { h3: 'Level first, then the group', p: 'Each class gathers five to ten learners with matching skills, whatever town or country they log in from.' },
      { h3: 'Term-time lessons', p: 'Twice a week in term, with the holidays free.' },
      { h3: 'Clock changes, sorted', p: 'Whatever the British clocks do in March and October, your lesson stays at its UK hour.' }
    ],
    spec: { title: 'Why groups reach across towns', p: 'Five learners at one level, free at the same time, rarely live in one Welsh town. Grouping by level gives a pupil in Kinmel Bay or Llanfairfechan a class that fits.' }
  },

  fees: {
    h2: 'Fees in Conwy county borough',
    intro: 'Colwyn Bay or Betws-y-Coed, the fee is identical, the same as everywhere we teach outside India.',
    first: 'A complete free lesson, then our recommendation.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month, one-to-one.',
    closer: 'Fees are charged in US dollars; there is no sterling list. Nothing is charged until the trial has fixed a course and weekly slot; for holidays, absences and moving between formats, see the pricing page.'
  },

  reviewsH2: 'Stars and comments from Google reviewers',

  book: {
    h2: 'Book a free Conwy lesson',
    intro: 'Just tell us the age or school year and one thing the learner loves. A first lesson could be a Scratch bridge game, a Python program, or the tubular bridge on this page.',
    success: 'Thank you. Your Conwy request has been received.'
  },

  faq: {
    h2: 'Conwy questions',
    intro: 'The county borough, the bridge project and practical points.',
    items: [
      { q: 'How many people live in Conwy county borough?', a: 'The 2021 census counted 114,741 usual residents.' },
      { q: 'What are the largest towns in Conwy county borough?', a: 'ONS 2021 built-up areas: Colwyn Bay 29,275, Conwy 15,715, Llandudno 14,710 and Kinmel Bay 9,020.' },
      { q: 'What is the tubular bridge project?', a: 'Learners compare the same amount of iron as a box, a bar and a plate in Python, find the box 205 times stiffer than the bar, confirm that doubling a span multiplies sag by 16, and model an extra middle support.' },
      { q: 'What is the second moment of area?', a: 'A measure of how a cross-section resists bending. Material far from the centre counts much more, which is why a hollow box girder or an I-beam is so efficient.' },
      { q: 'When was the Conwy tubular bridge built?', a: 'Between 1846 and 1849, by Robert Stephenson, according to Cadw, which lists it at Grade I.' },
      { q: 'Where are lessons held?', a: 'Only online: a pupil in Penmaenmawr connects exactly as one in Abergele does.' },
      { q: 'Do you teach A level maths?', a: 'Yes, and GCSE maths in Wales and WJEC GCSE Computer Science as well. We build real understanding; nobody can honestly guarantee a grade.' },
      { q: 'What ages can learn?', a: 'Children from six start with blocks, teenagers work in Python and exam maths, and adults up to 67 learn at their own pace.' },
      { q: 'How much do lessons cost?', a: 'A free trial comes first; group lessons then cost USD 100 per month and private lessons USD 150 per month.' },
      { q: 'Do lessons pause for school holidays?', a: 'We do. Lessons stop whenever your Conwy school is on holiday, as long as you tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More North Wales pages',
    html: '<a class="cg-inline-link" href="/coding-classes-in-anglesey">Anglesey</a> tests Beaumaris Castle for symmetry, <a class="cg-inline-link" href="/best-coding-class-in-bangor-wales">Bangor</a> and <a class="cg-inline-link" href="/best-coding-class-in-st-asaph">St Asaph</a> have pages of their own. The full Welsh list lives on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page, with the rest of Britain on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Conwy and North Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-bangor-wales', label: 'Bangor' },
    { href: '/gcse-maths-and-numeracy-wales-help', label: 'GCSE Maths and Numeracy in Wales' }
  ],

  personalityCss: `
.cg-root.cg-cwy .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-cwy .cg-hero h1 { font-weight: 720; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-cwy .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-cwy .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cwy .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-cwy .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-cwy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cwy .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-cwy .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-cwy .cg-callout { border-left-width: 5px; border-radius: 0 9px 9px 0; }
`,

  dossier: {
    curriculumAuthority: 'Conwy (W06000003), Conwy County Borough Council. ONS Census 2021 TS001 via Nomis: 114,741. ONS built-up areas (published; OA sums within 11): Colwyn Bay 29,275; Conwy 15,715; Llandudno 14,710; Kinmel Bay 9,020; Abergele 8,535; Penrhyn Bay 4,200; Llanfairfechan 3,545; Penmaenmawr 2,760. Cadw listed building record 3236, Grade I, Tubular Railway Bridge, Conwy: "built 1846-49 by Robert Stephenson, in collaboration with William Fairbairn and E. Hodgkinson"; "The architect was Francis Thompson"; "originally intended to be a suspension bridge"; "pioneered wrought-iron box-girder construction"; "Intermediate piers were added in 1899"; "each track having its own tubular girder construction". Llanrwst and Betws-y-Coed named as places (Cadw listings in the county borough).',
    localProject: 'Same iron area 0.478 m2: box 4.5 x 7.5 m, 20 mm walls I 3.902 m4; solid square 0.692 m I 0.0191 (205x); plate 4.5 x 0.106 m I 0.000451 (8,659x). Sag 5wL^4/384EI, w 60 kN/m, E 190 GPa: 60 m 0.014 m; 120 m 0.219; 125 m 0.257; x16 per doubling. 120 m + middle support (superposition, R = 5wL/8): mid ~0, max 0.0057 m at 25.3 m, 38x less. Page says the record does not state why piers were added. Lesson family: beam stiffness, second moment of area.',
    requiredMentions: [
      'Colwyn Bay',
      'Kinmel Bay',
      'Abergele',
      'Penrhyn Bay',
      'Llanfairfechan',
      'Penmaenmawr',
      'Llanrwst',
      'Fairbairn',
      'box girder',
      'second moment'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Conwy, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 3236: Tubular Railway Bridge, Conwy.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=3236' }
    ],
    rejectedClaims: [
      'Why the 1899 intermediate piers were added: not in the record, not claimed.',
      'Real dimensions, loads or deflections of the Conwy tubes: invented in the model.',
      'Conwy Castle and suspension bridge facts: not used (suspension lessons exist elsewhere).',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.',
      'Distances between towns: not claimed.'
    ]
  }
};
