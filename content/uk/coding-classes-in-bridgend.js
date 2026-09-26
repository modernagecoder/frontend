'use strict';
// Bridgend (cg- county page, UK cluster Phase 7, row 285). One principal area. Spine: how much water does it take to lift
// a load with nothing but gravity? Anchor (read raw 26 September 2026): Cadw listed building record 20817, Grade II*, Lift
// Tower at Tondu Ironworks: "Sir Robert Price developed ironworking here from 1837"; "the second stage of development under
// John Brogden who purchased the ironworks in 1854"; "The lift was used to hoist materials to the charging platforms and
// was possibly worked by water balance, water-filled tanks beneath the tram cars being used as counter-balance, with the
// water being discharged as required by weight"; "Possibly powered by steam, as was more common in later years, but this
// would be a unique survival"; "Only other ironworking site in Britan still retaining a hoisting tower is Blaenafon".
// Our model (scratchpad wal/atwood.py; every size invented, not Tondu's): two cars of 1,000 kg on a rope over a pulley,
// 800 kg load, 15 m lift, resisting force 3 per cent of the moving weight. Minimum water to move: 911.3 kg. Water 1,000 kg:
// 0.222 m/s2, 11.6 s, 2.58 m/s; 1,200: 0.687, 6.6 s, 4.54 m/s; 1,500: 1.303, 4.8 s, 6.25 m/s; 2,000: 2.158, 3.7 s,
// 8.05 m/s. For a 20 s trip: 940.8 kg. Energy: 1,000 kg of water gives 147 kJ, load gains 118 kJ (80 per cent), 12.7 kJ
// of motion to brake; 1,500 kg gives 221 kJ, 118 kJ useful (53 per cent), 84.0 kJ to brake. Sign bug (friction helping):
// claimed minimum 695.1 kg.
// Lesson family: Atwood machine, solving for an unknown, energy bookkeeping, sign errors; screened (Atwood, water balance,
// counter-balance: 0 hits). Flagged in the page: the record says "possibly" water balance.
// Place facts: ONS Census 2021 TS001 via Nomis: Bridgend W06000013 145,488. ONS built-up areas (published): Bridgend
// 51,760 (our OA sum inside the county borough 51,332, so the BUA extends slightly beyond it); Maesteg 18,335; Porthcawl
// 15,795; Pyle 14,075; Sarn 11,870; Pencoed 9,115; Ogmore Vale 3,100. No Welsh-language statistics. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'BRIDGEND', blurb: 'Bridgend, Maesteg, Porthcawl and Pencoed, and a Tondu lift tower lesson on raising loads with water and gravity.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-bridgend',
  code: 'bgd',
  accent: '#6B5A46',
  accentRationale: 'Bridgend: a weathered yellow-brick brown for the Tondu tower, picked by the solver (5.33:1 on the darkest paper tint), duller and yellower than the Borders stone',
  pageType: 'governorate',
  place: {
    name: 'Bridgend',
    eyebrow: 'Bridgend county borough',
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
  routeLabel: 'Bridgend',
  title: 'Coding Classes in Bridgend | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Bridgend county borough, from Bridgend town, Maesteg and Porthcawl to Pyle, Sarn, Pencoed and Tondu.',
  ogDescription: 'Coding classes for all of Bridgend county borough, and a Tondu project: work out how much water lifts a load in a water-balance lift, in Python.',
  twitterDescription: 'Bridgend coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Bridgend',
    description: 'Ability-placed online coding, Python, physics modelling and mathematics for children, teenagers and adults across Bridgend county borough, taught live in English.'
  },

  h1: 'Coding classes in Bridgend',
  capsuleQ: 'What are the best coding classes in Bridgend?',
  capsule: 'The 2021 census counted 145,488 usual residents in Bridgend county borough. Bridgend town is the main built-up area, with Maesteg, Porthcawl, Pyle and Sarn next and Pencoed and Ogmore Vale among the smaller places. Every class is taught live on video by our teachers in India, and a first lesson costs nothing and finds the right level, whether the learner is in Year 3, Year 12 or long out of school. Coding, Python and maths are open to anyone between 6 and 67, in small classes of five to ten or one-to-one. The Bridgend project comes from an ironworks tower at Tondu. Keeping going costs USD 100 a month in a class or USD 150 a month with a private teacher.',
  lead: 'At Tondu, Cadw lists a tall three-sided tower of yellow brick at Grade II*. It lifted materials to the charging platforms of an ironworks developed from 1837, and Cadw\'s record suggests it was possibly worked by water balance: two tram cars on a rope, with tanks of water beneath them, so that filling the top car makes it heavier and it sinks, hauling the other up, before the water is let out. No engine, just gravity and water. The record is careful to say possibly, and that steam was also used at such sites. Either way, the idea poses a neat question: how much water does it take, and what happens if you add too much? This page\'s project answers it in Python.',
  wa: 'Hello Modern Age Coders, we are in Bridgend and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Bridgend',
    h2: 'Four ways in, across Bridgend county borough',
    intro: 'A Year 1 pupil in Porthcawl who builds pulleys out of string, a Year 6 in Maesteg ready for typed code, a Year 12 in Bridgend thinking about A level physics and computing, and an adult in Pencoed learning Python. Each starts with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 11', note: 'Scratch projects with lifts, pulleys, weights and see-saws.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Balancing equations and rearranging formulas, practised by coding them.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 18', note: 'Complete Python for teenagers, including physics simulations and checks.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from the beginning, up to engineering calculations.' }
    ]
  },

  sections: [
    {
      id: 'bridgend', tint: '', eyebrow: 'Bridgend county borough in figures',
      h2: '145,488 people across the county borough',
      intro: 'That total is the usual-resident count from the 2021 census, taken from ONS through Nomis. The places below are ONS built-up areas from the same census.',
      body: [
        { kind: 'table', caption: 'Bridgend county borough, built-up areas of more than 2,500 people (ONS, 2021)', head: ['Built-up area', 'People counted', 'Built-up area', 'People counted'], rows: [
          ['Bridgend', '51,760', 'Sarn', '11,870'],
          ['Maesteg', '18,335', 'Pencoed', '9,115'],
          ['Porthcawl', '15,795', 'Ogmore Vale', '3,100'],
          ['Pyle', '14,075', '', '']
        ] },
        { kind: 'p', text: 'Adding up census output areas ourselves, the Bridgend built-up area comes to 51,332 inside the county borough against the 51,760 ONS publishes, so a small part of it lies over the boundary; every other figure agrees within a few people. Learning follows the Curriculum for Wales, and exam courses are WJEC GCSEs and A levels. School holidays are set by Bridgend County Borough Council, and we ask each family for theirs rather than guess.' },
        { kind: 'callout', h3: 'Cardiff and WJEC courses', p: 'The capital, <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a>, has a page of its own. For exam support, see <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> and <a class="cg-inline-link" href="/gcse-maths-and-numeracy-wales-help">GCSE Maths and Numeracy in Wales</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bridgend project',
      h2: 'Water in, load up',
      intro: 'Two cars, one rope, and the least water that will do the job.',
      body: [
        { kind: 'p', text: 'Every number in the model is invented. Two cars of 1,000 kilograms hang either end of a rope over a pulley, 15 metres apart in height. The bottom car carries 800 kilograms of material. Water poured into the top car\'s tank makes it heavier; once the difference in weight beats the friction, the cars start to move, one falling and one rising. Physicists call this an Atwood machine. The learner writes the force balance in Python: the pull is the weight difference minus friction, and the acceleration is that pull shared across everything moving. From the acceleration come the journey time and the speed at the end.' },
        { kind: 'table', caption: 'Our invented water-balance lift, 800 kg load raised 15 m, 26 September 2026', head: ['Water in the top tank', 'Time to lift', 'Speed at the end', 'Share of the water\'s energy that lifts the load'], rows: [
          ['Less than 911 kg', 'Does not move', 'Not applicable', 'Not applicable'],
          ['941 kg', '20.0 s', '1.5 m/s', '85 per cent'],
          ['1,000 kg', '11.6 s', '2.6 m/s', '80 per cent'],
          ['1,500 kg', '4.8 s', '6.3 m/s', '53 per cent'],
          ['2,000 kg', '3.7 s', '8.1 m/s', '40 per cent']
        ] },
        { kind: 'p', text: 'Below about 911 kilograms of water, nothing happens: friction wins. A little more gives a slow, gentle lift, 941 kilograms for a 20 second trip. Pour in more and the lift gets faster, but the extra water is mostly wasted. With 1,000 kilograms, 80 per cent of the energy the water gives up goes into raising the load; with 1,500, only 53 per cent does, and the cars arrive carrying 84 kilojoules of motion that the brakes must absorb. The learner finds the 20 second answer two ways: by rearranging the formula, and by trying values in code until the time matches, then checks that both agree.' },
        { kind: 'p', text: 'Then a classic bug. Friction always opposes motion, but it is easy to write it with the wrong sign so that it helps. Do that, and the program claims 695 kilograms of water is enough, when in fact the cars would not move at all. A simple test catches it: at exactly the claimed minimum, the net force should be zero, and with the wrong sign it is not.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Hang two cups on a string over a pencil, add water to one until it moves, and record how much it took.' },
          { h3: 'Ages 11 to 15', p: 'Code the force balance in Python and find the least water that makes the cars move.' },
          { h3: 'Ages 15 and up', p: 'Solve for the water giving a set journey time, track the energy, and write a test that exposes the friction sign bug.' }
        ] },
        { kind: 'callout', h3: 'A real tower, invented numbers', p: 'Cadw\'s record says the Tondu lift was possibly worked by water balance and possibly by steam. The masses, height and friction in our model are invented, and the results describe the idea, not the real machinery.' }
      ]
    },
    {
      id: 'tondu', tint: 'deep', eyebrow: 'Why Tondu',
      h2: 'A rare ironworks hoisting tower',
      intro: 'The Cadw record, summarised.',
      body: [
        { kind: 'table', caption: 'Lift Tower at Tondu Ironworks, Cadw listed building record 20817, Grade II*', head: ['Record detail', 'What it says'], rows: [
          ['Ironworks', 'Developed from 1837 by Sir Robert Price; bought by John Brogden in 1854'],
          ['Purpose', 'Hoisting materials to the charging platforms'],
          ['How it worked', 'Possibly by water balance, with water-filled tanks beneath the tram cars as counter-balance'],
          ['Alternative', 'Possibly steam, more common in later years'],
          ['Rarity', 'The only other British ironworking site still retaining a hoisting tower is Blaenafon'],
          ['Structure', 'A tall three-sided tower of yellow brick with a stone basement and buttresses']
        ] },
        { kind: 'p', text: 'The same balance of forces and energy decides how lifts, cranes, cable cars and funicular railways are designed, and why many of them use counterweights. Software that controls them must get every sign right, because a single flipped sign can turn a safe calculation into a dangerous one. A Bridgend pupil who has caught a friction sign bug with a test has learned how engineers stay safe.' },
        { kind: 'p', text: 'We are not connected with Cadw or Bridgend County Borough Council. The record\'s descriptions belong to Cadw; the lift model and any mistakes belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From string and cups to physics code',
    intro: 'Year bands here are approximate; the trial lesson sets the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Machines and motion', p: 'Block coding with moving objects, pulleys and simple rules.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 5 to 8', h3: 'Formulas in Python', p: 'Typed Python using simple formulas, units and tables.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Forces and energy', p: 'Physics models and testing alongside WJEC GCSE and A level courses.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Engineering sums', p: 'Python for adults doing calculations, checks and small simulations.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and signs',
    h2: 'An AI can write a physics formula in seconds. Will every sign point the right way?',
    intro: 'One flipped sign turns a stationary lift into a working one on paper.',
    p1: 'Ask a chatbot to model a counterweighted lift and it will write a reasonable-looking force equation. Whether friction is subtracted or accidentally added makes the difference between an answer of 911 kilograms and one of 695, and both print with the same confidence.',
    p2: 'A Bridgend learner who has written a check that the net force is zero at the threshold knows how to catch that mistake. Testing an answer against a known condition is the habit that makes AI-written physics trustworthy.',
    closer: 'Catching a single wrong sign before it matters is why a Bridgend teenager should keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson practicalities',
    h2: 'From Maesteg to Porthcawl, lessons at home',
    intro: 'Towns and villages across the county borough all join by video.',
    cells: [
      { h3: 'Code is typed, not watched', p: 'Pupils write the programs themselves; the teacher follows along on the shared screen and prompts when stuck.' },
      { h3: 'Placed by Welsh year group', p: 'A Pyle Year 5 or a Pencoed Year 11 is matched to their year and the Curriculum for Wales, with WJEC exam names where relevant. We teach in English.' },
      { h3: 'Trial lesson, on us', p: 'One whole lesson without charge, followed by frank advice.' },
      { h3: 'Five to ten per class', p: 'Classmates share a level and come from several countries.' },
      { h3: 'Twice a week in term', p: 'Regular lessons during term, a break for school holidays.' },
      { h3: 'Clock changes handled', p: 'The UK hour of your lesson stays fixed through the clock changes; teachers on India time shift instead.' }
    ],
    spec: { title: 'Why classes cross town lines', p: 'Five learners at one level, free at the same hour, seldom live in one Welsh town. Grouping by level gives a pupil in Sarn or Ogmore Vale a proper class.' }
  },

  fees: {
    h2: 'Fees in Bridgend',
    intro: 'Maesteg or Porthcawl, the fee is identical, the same rate we use everywhere outside India.',
    first: 'A complete trial lesson, free, then our suggestion.',
    group: 'About eight lessons a month with five to ten classmates.',
    private: 'About eight lessons a month with your own teacher.',
    closer: 'We charge in US dollars and have no sterling price list. No payment is taken until a course and weekly slot are agreed after the trial; holidays, absences and moving between formats are covered on our pricing page.'
  },

  reviewsH2: 'Reviews families have written on Google',

  book: {
    h2: 'Book a free Bridgend lesson',
    intro: 'Let us know who is learning, their school year or age, and what they enjoy. The trial might be a Scratch pulley game, a Python program, or the water-balance lift on this page.',
    success: 'Thank you. Your Bridgend request has been received.'
  },

  faq: {
    h2: 'Bridgend questions',
    intro: 'The county borough, the Tondu project and practical details.',
    items: [
      { q: 'How many people live in Bridgend county borough?', a: 'The 2021 census counted 145,488 usual residents.' },
      { q: 'What are the largest towns in Bridgend county borough?', a: 'ONS 2021 built-up areas: Bridgend 51,760, Maesteg 18,335, Porthcawl 15,795, Pyle 14,075 and Sarn 11,870.' },
      { q: 'What is the Tondu lift project?', a: 'Learners model a water-balance lift as an Atwood machine in Python, find the least water that moves an invented 800 kg load, see extra water wasted, and catch a friction sign bug.' },
      { q: 'What is an Atwood machine?', a: 'Two masses joined by a rope over a pulley. The heavier side falls and the lighter rises, with an acceleration set by the difference in weight.' },
      { q: 'How did the Tondu lift tower work?', a: 'Cadw\'s record says it was possibly worked by water balance, using water-filled tanks under the tram cars as counter-balance, and possibly by steam.' },
      { q: 'Are lessons held in Bridgend?', a: 'No, all lessons are online, so pupils join from home anywhere in the county borough.' },
      { q: 'Can you help with WJEC GCSE Computer Science?', a: 'Yes, and with GCSE maths in Wales. We work on understanding and do not promise grades.' },
      { q: 'What ages can learn?', a: 'From six to 67: blocks for young children, Python and exam work for teenagers, and Python for adults.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Then it is USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons pause for school holidays?', a: 'Yes. Share your school\'s holiday dates and we leave those weeks free.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More South Wales pages',
    html: '<a class="cg-inline-link" href="/coding-classes-in-blaenau-gwent">Blaenau Gwent</a> photographs the Tredegar clock with a pinhole camera, and <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> and <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a> have city pages. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page links every Welsh area as it goes live, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bridgend and South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-cardiff', label: 'Cardiff' },
    { href: '/gcse-maths-and-numeracy-wales-help', label: 'GCSE Maths and Numeracy in Wales' }
  ],

  personalityCss: `
.cg-root.cg-bgd .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-bgd .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-bgd .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-bgd .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bgd .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-bgd .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-bgd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bgd .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-bgd .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-bgd .cg-callout { border-left-width: 5px; border-radius: 0 9px 9px 0; }
`,

  dossier: {
    curriculumAuthority: 'Bridgend (W06000013), Bridgend County Borough Council. ONS Census 2021 TS001 via Nomis: 145,488. ONS built-up areas (published): Bridgend 51,760 (our OA sum inside the county borough 51,332); Maesteg 18,335; Porthcawl 15,795; Pyle 14,075; Sarn 11,870; Pencoed 9,115; Ogmore Vale 3,100. Cadw listed building record 20817, Grade II*, Lift Tower at Tondu Ironworks: "Sir Robert Price developed ironworking here from 1837"; "John Brogden who purchased the ironworks in 1854"; "The lift was used to hoist materials to the charging platforms and was possibly worked by water balance, water-filled tanks beneath the tram cars being used as counter-balance, with the water being discharged as required by weight"; "Possibly powered by steam"; "Only other ironworking site in Britan still retaining a hoisting tower is Blaenafon"; "A tall 3 sided tower of yellow brick with stone basement".',
    localProject: 'Invented: cars 1,000 kg, load 800 kg, lift 15 m, friction 3 per cent of moving weight. Minimum water 911.3 kg. Water 1,000: 0.222 m/s2, 11.6 s, 2.58 m/s; 1,200: 0.687, 6.6, 4.54; 1,500: 1.303, 4.8, 6.25; 2,000: 2.158, 3.7, 8.05. 20 s trip: 940.8 kg (speed 1.5 m/s). Energy 1,000 kg: 147 kJ in, 118 kJ useful (80 per cent), 12.7 kJ to brake; 1,500 kg: 221 kJ, 53 per cent, 84.0 kJ. Sign bug: 695.1 kg. Lesson family: Atwood machine, energy bookkeeping, sign errors.',
    requiredMentions: [
      'Maesteg',
      'Porthcawl',
      'Pyle',
      'Sarn',
      'Pencoed',
      'Ogmore Vale',
      'Tondu',
      'Atwood',
      'water balance',
      'Brogden'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Bridgend, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 20817: Lift Tower at Tondu Ironworks.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=20817' }
    ],
    rejectedClaims: [
      'That the Tondu lift definitely used water balance: the record says possibly; stated as such.',
      'Real masses, height or speed of the Tondu lift: invented in the model.',
      'Porthcawl coast and Merthyr Mawr dunes facts: not researched for this page.',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.',
      'Distances between towns: not claimed.'
    ]
  }
};
