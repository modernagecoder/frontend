'use strict';
// Gwynedd (cg- county page, UK cluster Phase 7, row 292). One principal area; Bangor city page exists (regression
// discontinuity, registers Bethesda, Menai, the Gwynedd census total) so this page avoids those mentions. Spine: why did
// a 1906 power station send its electricity at 10,000 volts? Anchor (read raw 26 September 2026): Cadw listed building
// record 20926, Grade II*, Cwm Dyli Power Station, Beddgelert: "Hydro-electric power station built in 1906 and pioneering
// as the first instance in Britain of the use of Alternating Current"; "conceived to serve the Oakley, Dinorwic and
// Pen-yr-Orsedd quarries"; "Current was derived from harnessing the water from Llyn Llydaw and energy was transmitted at
// 10,000 volts"; "much lauded in its day as a 'triumph of modern transmission'"; "known locally as 'the chapel in the
// valley'".
// Our model (scratchpad wal/trans.py; invented load and line): deliver 500 kW through a line of 4 ohms total. Simple
// I = P/V model: loss 4,000 kW at 500 V (800 per cent, impossible), 1,000 kW at 1,000 V, 250 kW at 2,000 V, 40 kW at
// 5,000 V (8 per cent), 10 kW at 10,000 V (2 per cent), 2.5 kW at 20,000 V (0.5 per cent); loss x100 less for x10 voltage.
// Exact model (load voltage V - IR, solve I^2 R - V I + P = 0): impossible at 2,000 V (max deliverable 250 kW) and 2,500 V
// (390.6 kW); 5,000 V: 109.6 A, 48.06 kW lost (8.77 per cent of power sent); 10,000 V: 51.0 A, 10.42 kW (2.04 per cent);
// 20,000 V: 25.1 A, 2.53 kW (0.50 per cent). Max deliverable at 500 V: 15.6 kW.
// Lesson family: power transmission losses (I^2 R), model validity, solving a quadratic when the simple formula breaks;
// screened (I squared R, transmission loss, high voltage, alternating current: 0 hits).
// Place facts: ONS Census 2021 TS001 via Nomis: Gwynedd W06000002 117,393. ONS built-up areas (published; OA sums within
// 4): Bangor 16,990; Caernarfon 9,835; Bethesda 3,755; Pwllheli 3,620; Blaenau Ffestiniog 3,450; Tywyn 3,135; Dolgellau
// 2,600; Porthmadog 2,575. No Welsh-language statistics. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'GWYNEDD', blurb: 'Caernarfon, Pwllheli, Porthmadog and Dolgellau, and a Cwm Dyli power station lesson on why electricity travels at high voltage.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-gwynedd',
  code: 'gwn',
  accent: '#2A2F4C',
  accentRationale: 'Gwynedd: a Welsh slate blue-grey from the solver (10.51:1 on the darkest paper tint), greyer and darker than the Denbighshire slate blue',
  pageType: 'governorate',
  place: {
    name: 'Gwynedd',
    eyebrow: 'Gwynedd',
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
  routeLabel: 'Gwynedd',
  title: 'Coding Classes in Gwynedd | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Gwynedd, from Bangor and Caernarfon to Pwllheli, Porthmadog, Blaenau Ffestiniog, Tywyn and Dolgellau.',
  ogDescription: 'Coding classes for all of Gwynedd, and a Cwm Dyli project: model power lost in a transmission line in Python and see why 1906 engineers chose 10,000 volts.',
  twitterDescription: 'Gwynedd coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Gwynedd',
    description: 'Ability-placed online coding, Python, physics modelling and mathematics for children, teenagers and adults across Gwynedd, taught live in English.'
  },

  h1: 'Coding classes in Gwynedd',
  capsuleQ: 'What are the best coding classes in Gwynedd?',
  capsule: 'At the 2021 census, 117,393 usual residents lived in Gwynedd. The city of Bangor is the largest built-up area and Caernarfon the second, after which come Bethesda, Pwllheli, Blaenau Ffestiniog and Tywyn, with Dolgellau and Porthmadog close behind. Our lessons are live video classes run by teachers in India, and the opening lesson, which is free, works out whether a Year 4 pupil, a Year 12 student or an adult should start high or low. Coding, Python and maths are open to all ages from 6 to 67, taught privately or to classes of five to ten. For Gwynedd, the project begins at an early hydro-electric station in Beddgelert community. Continuing is a monthly USD 100 in a group, or USD 150 for a teacher to yourself.',
  lead: 'In Beddgelert community stands a power station so handsome that locals called it the chapel in the valley. Cadw lists Cwm Dyli at Grade II* and records that it was built in 1906, took its water from Llyn Llydaw, and was the first in Britain to use alternating current. It supplied slate quarries, and it sent its energy out at 10,000 volts, which was praised at the time as a triumph of modern transmission. Why such a high voltage? Every wire has resistance, and the power it wastes as heat depends on the current flowing through it, squared. This page\'s project models a transmission line in Python, and finds that at low voltage the simple textbook formula does not just give a large loss, it gives an impossible one.',
  wa: 'Hello Modern Age Coders, we are in Gwynedd and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Gwynedd',
    h2: 'Four first steps in Gwynedd',
    intro: 'Picture a Pwllheli eight-year-old who takes torches apart, a Porthmadog Year 7 impatient for real code, a Dolgellau Year 12 studying A level physics, and a Caernarfon adult retraining in engineering. A free lesson opens the door for each.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 11', note: 'Scratch projects with circuits, switches and energy games.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Squares, ratios and percentages made concrete by coding.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 18', note: 'Complete Python for teenagers, from loops to physics models.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults starting from nothing, up to engineering calculations.' }
    ]
  },

  sections: [
    {
      id: 'gwynedd', tint: '', eyebrow: 'Gwynedd by the numbers',
      h2: '117,393 people across Gwynedd',
      intro: 'ONS recorded 117,393 usual residents in Gwynedd on census day in 2021, a number we took from Nomis. Town sizes in the table are the matching ONS built-up areas.',
      body: [
        { kind: 'table', caption: 'Largest built-up areas in Gwynedd, ONS Census 2021', head: ['Town or city', 'Population', 'Town or city', 'Population'], rows: [
          ['Bangor', '16,990', 'Blaenau Ffestiniog', '3,450'],
          ['Caernarfon', '9,835', 'Tywyn', '3,135'],
          ['Bethesda', '3,755', 'Dolgellau', '2,600'],
          ['Pwllheli', '3,620', 'Porthmadog', '2,575']
        ] },
        { kind: 'p', text: 'Gwynedd is a county of small towns: after Bangor and Caernarfon, no built-up area passes 4,000 people, and places such as Barmouth and Beddgelert are smaller still. Our output-area sums match the published figures to within four people. The Curriculum for Wales shapes learning in Gwynedd\'s schools, and older pupils sit WJEC examinations. Cyngor Gwynedd sets the school terms; since we have not read them, families pass on their own dates.' },
        { kind: 'callout', h3: 'Bangor, and exam support', p: 'The city of <a class="cg-inline-link" href="/best-coding-class-in-bangor-wales">Bangor</a> has its own page with a different project. Exam pages: <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> and <a class="cg-inline-link" href="/gcse-maths-and-numeracy-wales-help">GCSE Maths and Numeracy in Wales</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Gwynedd project',
      h2: 'The same power, different voltages',
      intro: 'Current, resistance, heat, and a formula that breaks.',
      body: [
        { kind: 'p', text: 'The numbers in the model are invented. A station must deliver 500 kilowatts to a quarry through a line whose wires, there and back, have a resistance of 4 ohms. Power equals voltage times current, so the higher the voltage, the smaller the current needed. The heat lost in the wires equals the current squared times the resistance. The learner codes the simple version first: current is power divided by voltage, loss is current squared times resistance, and prints a table.' },
        { kind: 'table', caption: 'Our invented line, 500 kW through 4 ohms, 26 September 2026', head: ['Sending voltage', 'Simple formula says', 'Proper calculation says'], rows: [
          ['500 V', 'Loss of 4,000 kW, eight times the power sent', 'Impossible: at most 15.6 kW can reach the quarry'],
          ['2,000 V', 'Loss of 250 kW, half the power', 'Impossible: at most 250 kW can arrive'],
          ['5,000 V', 'Loss of 40 kW', '48.1 kW lost, 8.8 per cent of the power sent'],
          ['10,000 V', 'Loss of 10 kW', '10.4 kW lost, 2.0 per cent'],
          ['20,000 V', 'Loss of 2.5 kW', '2.5 kW lost, 0.5 per cent']
        ] },
        { kind: 'p', text: 'At high voltage the simple formula is close enough. At low voltage it produces nonsense: a loss bigger than the power being sent. That is the signal that the model has broken. The simple version assumes the full sending voltage reaches the load, but a big current makes the voltage fall along the wires. The proper version accounts for that drop, which turns the problem into a quadratic equation for the current. When the quadratic has no real solution, the answer is that no current can deliver the power at all. At 2,000 volts the most that can reach the quarry through our line is 250 kilowatts, however hard the generator pushes.' },
        { kind: 'p', text: 'The pattern that made 10,000 volts attractive is clear in the numbers: ten times the voltage means a tenth of the current, and a hundredth of the heat lost. Alternating current mattered too, because transformers can step its voltage up for the journey and down again for use, but modelling transformers is a lesson for another day. The learner finishes by plotting loss against voltage and marking the point where the simple and proper answers start to agree.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Build a Scratch game where a power line wastes more energy the thinner the wires, and try to deliver enough to light a village.' },
          { h3: 'Ages 11 to 15', p: 'Code power equals voltage times current in Python and print the heat lost at different voltages.' },
          { h3: 'Ages 15 and up', p: 'Include the voltage drop, solve the quadratic for current, and find the largest power any voltage can deliver.' }
        ] },
        { kind: 'callout', h3: 'A real power station, an imagined line', p: 'Cwm Dyli\'s date, water source and 10,000 volts come from Cadw\'s record. The 500 kilowatt load and 4 ohm line are invented, and the results illustrate the physics rather than describe the station\'s real network.' }
      ]
    },
    {
      id: 'cwm-dyli', tint: 'deep', eyebrow: 'Why Cwm Dyli',
      h2: 'Britain\'s first alternating current station',
      intro: 'According to Cadw\'s listed building record.',
      body: [
        { kind: 'table', caption: 'Cwm Dyli Power Station, Beddgelert, Cadw listed building record 20926, Grade II*', head: ['Record detail', 'What it says'], rows: [
          ['Built', '1906, by the North Wales Power and Traction Company'],
          ['Firsts', 'The first instance in Britain of the use of alternating current'],
          ['Purpose', 'To serve the Oakley, Dinorwic and Pen-yr-Orsedd slate quarries'],
          ['Water', 'Harnessed from Llyn Llydaw'],
          ['Transmission', 'At 10,000 volts, praised as a triumph of modern transmission'],
          ['Nickname', 'The chapel in the valley, for its bold design']
        ] },
        { kind: 'p', text: 'Every national grid depends on the same arithmetic: high voltages for long distances, lower ones for homes, and careful accounting of losses. Engineers who design grids, electric car chargers and solar farms run these calculations constantly, and part of the skill is recognising when a simple model has stopped being true. A Gwynedd student who has watched a formula predict a loss larger than the power has learned that lesson early.' },
        { kind: 'p', text: 'We have no association with Cadw or Cyngor Gwynedd. The record belongs to Cadw; the transmission model, the invented numbers and any mistakes belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From torch circuits to power grids',
    intro: 'Year bands give a rough idea; the free lesson sets the real one.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Circuits and games', p: 'Block coding with switches, lights and energy stories.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 5 to 8', h3: 'Formulas in Python', p: 'Typed Python with squares, tables and units.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Physics models', p: 'Electricity, quadratics and modelling alongside WJEC GCSE and A level courses.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Engineering sums', p: 'Python for adults building checks, models and calculators.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and model limits',
    h2: 'An AI can apply a formula in seconds. Will it notice when the answer is impossible?',
    intro: 'A number that cannot be true is the clearest warning a model gives.',
    p1: 'Ask a chatbot for the losses on a low-voltage line and it may apply the simple formula and report a loss bigger than the power sent, without comment. The arithmetic is right; the model is wrong for that case.',
    p2: 'A Gwynedd learner who has seen the simple and proper answers diverge knows to check whether a result is even possible. That sanity check is the most valuable thing a person brings to AI-generated calculations.',
    closer: 'Spotting an impossible answer before anyone relies on it is a reason Gwynedd teenagers should still learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lessons in practice',
    h2: 'From Tywyn to Blaenau Ffestiniog, lessons at home',
    intro: 'In a county of small towns, video lessons save long journeys.',
    cells: [
      { h3: 'Typing beats watching', p: 'Learners write every program; the teacher reads the shared screen and poses the next question.' },
      { h3: 'By Welsh school year', p: 'A Bethesda Year 3 or a Tywyn Year 11 is matched on school year and Curriculum for Wales stage, with WJEC names for exams. Lessons are taught in English.' },
      { h3: 'First lesson free', p: 'A proper lesson without charge, then honest advice on what to take.' },
      { h3: 'Small, level classes', p: 'Five to ten learners at one level, joining from many places.' },
      { h3: 'Rhythm of the term', p: 'Lessons twice a week in term; a pause in the holidays.' },
      { h3: 'No clock-change muddle', p: 'Your lesson stays at its UK hour whatever the clocks do; teachers on India time adjust.' }
    ],
    spec: { title: 'Why groups reach across the county', p: 'Five learners at one level, free at the same hour, rarely live in one small Gwynedd town. Grouping by level finds a real class for a pupil in Dolgellau or Porthmadog.' }
  },

  fees: {
    h2: 'Fees in Gwynedd',
    intro: 'Caernarfon or Pwllheli, the fee does not change, and it is the same in every country outside India.',
    first: 'A full trial lesson at no cost, then a recommendation.',
    group: 'About eight lessons a month with five to ten classmates.',
    private: 'About eight lessons a month with one teacher.',
    closer: 'All prices are in US dollars; sterling prices are not offered. Payment only starts once the trial lesson has settled a course and weekly time, and our pricing page deals with holidays, missed sessions and switching format.'
  },

  reviewsH2: 'Google ratings and comments',

  book: {
    h2: 'Book a free Gwynedd lesson',
    intro: 'A short note is all we need: the learner\'s age or year and something they enjoy. We might start with a Scratch circuit game, a Python table, or the Cwm Dyli power line.',
    success: 'Thank you. Your Gwynedd request has been received.'
  },

  faq: {
    h2: 'Gwynedd questions',
    intro: 'The county, the power station project and practical points.',
    items: [
      { q: 'How many people live in Gwynedd?', a: 'Census 2021 counted 117,393 usual residents in Gwynedd.' },
      { q: 'What are the largest towns in Gwynedd?', a: 'ONS 2021 built-up areas: Bangor 16,990, Caernarfon 9,835, Bethesda 3,755 and Pwllheli 3,620.' },
      { q: 'What is the Cwm Dyli project?', a: 'Learners model delivering 500 kW through an invented line in Python, compare a simple loss formula with a proper one that includes the voltage drop, and see why high voltage cuts losses a hundredfold.' },
      { q: 'Why is electricity sent at high voltage?', a: 'For the same power, higher voltage means lower current, and the heat lost in wires grows with the current squared.' },
      { q: 'When was Cwm Dyli power station built?', a: 'In 1906, according to Cadw, which describes it as the first use of alternating current in Britain and lists it at Grade II*.' },
      { q: 'Are lessons held in Gwynedd?', a: 'Lessons run over video, so a pupil in Blaenau Ffestiniog joins exactly as one in Caernarfon does.' },
      { q: 'Do you help with A level maths?', a: 'Yes, plus WJEC GCSE Computer Science and GCSE maths in Wales. We build understanding and promise no grades.' },
      { q: 'Which ages can join?', a: 'Six to 67: younger children with blocks, teenagers with Python and exam work, adults with Python from scratch.' },
      { q: 'How much does it cost?', a: 'The trial lesson is free; afterwards USD 100 a month for a group place or USD 150 a month one-to-one.' },
      { q: 'What about school holidays?', a: 'Lessons stop for them. Send the dates your school has given you.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More North Wales pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-bangor-wales">Bangor</a> tests a weather record for a hidden jump, <a class="cg-inline-link" href="/coding-classes-in-anglesey">Anglesey</a> checks Beaumaris Castle for symmetry, and <a class="cg-inline-link" href="/coding-classes-in-conwy">Conwy</a> compares iron beams. The Welsh list continues on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page, and the rest of Britain on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Gwynedd and North Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-bangor-wales', label: 'Bangor' },
    { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science' }
  ],

  personalityCss: `
.cg-root.cg-gwn .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-gwn .cg-hero h1 { font-weight: 730; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-gwn .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-gwn .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-gwn .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-gwn .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-gwn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gwn .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-gwn .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-gwn .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Gwynedd (W06000002), Cyngor Gwynedd. ONS Census 2021 TS001 via Nomis: 117,393. ONS built-up areas (published; OA sums within 4): Bangor 16,990; Caernarfon 9,835; Bethesda 3,755; Pwllheli 3,620; Blaenau Ffestiniog 3,450; Tywyn 3,135; Dolgellau 2,600; Porthmadog 2,575. Cadw listed building record 20926, Grade II*, Cwm Dyli Power Station, Beddgelert: "built in 1906 and pioneering as the first instance in Britain of the use of Alternating Current"; "built by the North Wales Power and Traction Co"; "conceived to serve the Oakley, Dinorwic and Pen-yr-Orsedd quarries"; "harnessing the water from Llyn Llydaw and energy was transmitted at 10,000 volts"; "a \'triumph of modern transmission\'"; "known locally as \'the chapel in the valley\'". Barmouth named as a place (Cadw record 5207 Barmouth Railway Bridge, Gwynedd).',
    localProject: 'Invented 500 kW through 4 ohms. Simple I=P/V: 500 V 4,000 kW (800 per cent); 1,000 V 1,000 kW; 2,000 V 250 kW; 5,000 V 40 kW (8); 10,000 V 10 kW (2); 20,000 V 2.5 kW (0.5). Exact with drop: 2,000 V impossible (max 250 kW), 2,500 V impossible (390.6 kW), 5,000 V 109.6 A, 48.06 kW (8.77 per cent of sent), 10,000 V 51.0 A 10.42 kW (2.04), 20,000 V 25.1 A 2.53 kW (0.50). Max at 500 V 15.6 kW. Lesson family: I^2 R losses, model validity, quadratic.',
    requiredMentions: [
      'Pwllheli',
      'Blaenau Ffestiniog',
      'Tywyn',
      'Dolgellau',
      'Porthmadog',
      'Beddgelert',
      'Cwm Dyli',
      'Llyn Llydaw',
      '10,000 volts',
      'alternating current'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Gwynedd, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 20926: Cwm Dyli Power Station.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=20926' }
    ],
    rejectedClaims: [
      'Cwm Dyli\'s actual output, line lengths or losses: not in the record; model invented.',
      'Transformer details and AC theory beyond one sentence: not modelled.',
      'Current operation of the station: not claimed.',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.',
      'Distances between towns: not claimed.'
    ]
  }
};
