'use strict';
// Solihull (cg- town page, UK cluster Phase 8, towns band A, row 318). Keyword slug per the owner's 2026-09-27 instruction.
// Spine: why did a jet-engined car feel slow? Anchor (read raw 27 September 2026, Science Museum Group co26468, "Prototype
// Rover gas turbine motor car, JET 1"): "Rover gas turbine motor car, Jet 1, built by the Rover Company, Solihull, England,
// 1946-1950"; "JET 1 was the world's first gas-turbine-powered motor car" (the museum's claim, attributed); "Work on a small
// gas turbine suitable for powering a motor car began in 1946, and the finished vehicle was unveiled to the public in 1950";
// "In 1952 JET 1 was fitted with an uprated engine and achieved a world record speed (for gas turbine cars) of 152 mph (244
// km/h)"; "test driving showed that its poor fuel consumption and slowness to respond to the throttle made it unsuitable for
// road transport"; "Rover continued to develop gas turbine car designs until 1965".
// Our model (computed inline; time constants invented): first-order lag y(t) = 1 - exp(-t/tau). Piston tau 0.3 s: 63% at
// 0.30 s, 90% at 0.69 s, 99% at 1.38 s. Turbine tau 3 s: 63% at 3.00 s, 90% at 6.91 s, 99% at 13.82 s. Euler steps, tau 3:
// dt 0.5 s reaches 90% at 6.5 s; dt 0.01 s at 6.90 s. Stability slip: dt 0.7 s with tau 0.3 s (dt > 2 tau) gives 2.33,
// -0.78, 3.37, -2.16, 5.21, -4.62. 152 mph = 244.6 km/h.
// Lesson family: first-order lag and time constants, with Euler step-size stability; screened (time constant, first-order,
// exponential approach, throttle, gas turbine: 0 hits). East Lothian used Euler drift in a predator-prey model; here the
// family is response time.
// Place facts: Nomis Census 2021 TS007A, Solihull E08000029: total 216,238; 5 to 9 13,771 (6.4%; England 5.9%); 10 to 14
// 13,604 (6.3%; 6.0%); 20 to 24 10,755 (5.0%; 6.0%); 50 to 54 15,629 (7.2%; 6.9%); 70 to 74 12,069 (5.6%; 5.0%); 85+ 6,700
// (3.1%; 2.4%). ONS 2021 BUAs inside the borough: Solihull 107,735; Knowle and Dorridge 19,320; Balsall Common 7,095; Dickens
// Heath 4,800; part of the Birmingham BUA holds 59,997 Solihull residents by our OA sum. Bands never summed. No schools named.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'SOLIHULL', label: 'Solihull', blurb: 'Online coding and Python classes for Solihull, with a project on why the jet-engined Rover JET 1 was slow to respond.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-solihull',
  code: 'sol',
  accent: '#6B1065',
  accentRationale: 'Solihull: a deep racing-plum from the solver (8.97:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Solihull',
    eyebrow: 'Solihull, West Midlands, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'West Midlands', href: '/coding-classes-in-the-west-midlands' },
    { label: 'Birmingham', href: '/coding-classes-in-birmingham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Solihull, England',
  title: 'Online Coding and Python Classes in Solihull | Ages 6 to 67',
  description: 'Online coding, Python, AI and programming classes for Solihull learners, from Shirley to Knowle and Dorridge, taught live in small groups. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Solihull, and a project on why Rover\'s jet-engined JET 1, built in Solihull, was slow to answer the throttle.',
  twitterDescription: 'Solihull coding, Python and AI classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Solihull',
    description: 'Online coding, Python programming, AI, physics-style modelling and mathematics for children, teenagers and adults in Solihull, taught live in English.'
  },

  h1: 'Online coding and Python classes in Solihull',
  capsuleQ: 'What are the best coding and Python classes in Solihull?',
  capsule: 'Solihull had 216,238 residents at the 2021 census, with more school-age children than average (5 to 9 year olds at 6.4 per cent against 5.9 in England) and more older residents too. Its main built-up areas are Solihull itself at 107,735 and Knowle and Dorridge at 19,320, and around 60,000 of its residents live within the Birmingham built-up area. We run live online coding, Python programming, AI and maths lessons for anyone aged 6 to 67, one-to-one or in groups of five to ten at the same level, taught by our team in India. The first lesson is free and sets the course. The Solihull project starts with a jet-powered car built in the town. After the trial, group lessons are USD 100 a month and private lessons USD 150 a month.',
  lead: 'Between 1946 and 1950 the Rover Company in Solihull built JET 1, which the Science Museum Group describes as the world\'s first gas-turbine-powered car. In 1952, with an uprated engine, it reached 152 miles per hour, a record for gas turbine cars. Yet the museum\'s record says test driving showed two problems that kept it off the roads: poor fuel consumption, and slowness to respond to the throttle. A driver pressed the pedal and waited while the turbine spun up. That waiting has a precise mathematical shape, the same one that describes a cooling cup of tea or a charging capacitor. How long does a slow engine take to reach 90 per cent of its power, and what goes wrong if a program steps through time carelessly? This page\'s project answers in Python.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Solihull.',

  picks: {
    eyebrow: 'Course picks for Solihull',
    h2: 'Where Solihull learners often begin',
    intro: 'Pick by interest; each course starts with a free live lesson and asks for no payment details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch games with cars, engines and speed that builds up gradually.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First typed Python and AI ideas, including a car that accelerates realistically.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python programming to GCSE depth and beyond, with simulations and the JET 1 model.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from the first line to engineering-style scripts.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Solihull today',
      h2: 'Families and retirees side by side',
      intro: 'Taken from the census age table TS007A on Nomis; bands are quoted one by one and not added.',
      body: [
        { kind: 'table', caption: 'Solihull compared with England by age, 2021 census TS007A', head: ['Ages', 'Solihull residents', 'Solihull share', 'England share'], rows: [
          ['5 to 9', '13,771', '6.4%', '5.9%'],
          ['10 to 14', '13,604', '6.3%', '6.0%'],
          ['20 to 24', '10,755', '5.0%', '6.0%'],
          ['50 to 54', '15,629', '7.2%', '6.9%'],
          ['70 to 74', '12,069', '5.6%', '5.0%'],
          ['85 and over', '6,700', '3.1%', '2.4%']
        ] },
        { kind: 'p', text: 'School-age children and older residents are both above the national share, while people in their early twenties are below it. ONS counts four built-up areas wholly or mainly in the borough: Solihull, Knowle and Dorridge, Balsall Common at 7,095 and Dickens Heath at 4,800. Schools teach the national curriculum for England, and we plan lessons around the holiday dates each family sends us.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'See our <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a> page, the <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">West Midlands county</a> page, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands region</a> index.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Solihull project',
      h2: 'How slow is slow to respond?',
      intro: 'A first-order lag: fast at first, then creeping towards the target.',
      body: [
        { kind: 'p', text: 'When a system chases a new target at a rate proportional to how far away it is, its response follows a curve set by one number, the time constant. After one time constant it has covered 63 per cent of the gap, after about 2.3 time constants 90 per cent, and after about 4.6 time constants 99 per cent. The learner models an engine\'s power as exactly this kind of system. The time constants are invented for the lesson: 0.3 seconds for a nimble piston engine and 3 seconds for a turbine that has to spin up.' },
        { kind: 'table', caption: 'Our response-time model with invented time constants, 27 September 2026', head: ['Engine in our model', 'Time constant', '90 per cent of power after', '99 per cent after'], rows: [
          ['Piston engine', '0.3 s', '0.69 s', '1.38 s'],
          ['Gas turbine', '3 s', '6.91 s', '13.82 s'],
          ['Turbine, stepped every 0.5 s', '3 s', '6.5 s (too early)', ''],
          ['Turbine, stepped every 0.01 s', '3 s', '6.90 s', '']
        ] },
        { kind: 'p', text: 'Ten times the time constant means ten times the wait, so in our model the turbine takes almost seven seconds to deliver 90 per cent of its power, against under a second for the piston engine. That gap is the heart of the problem the museum\'s record describes. The learner first uses the exact formula, then writes a loop that steps through time, nudging power towards the target a little at each step. With small steps the loop agrees with the formula; with half-second steps it reaches 90 per cent too early, a numerical error rather than a physical one.' },
        { kind: 'p', text: 'Then the dangerous slip. If each step is longer than twice the time constant, the stepping method overshoots, swings below zero and grows wildly: with a 0.3 second time constant and 0.7 second steps our loop prints 2.33, then minus 0.78, then 3.37 and worse. Nothing physical does that; the program has become unstable. Learners add a check that refuses any step longer than twice the time constant. We also convert the record speed: 152 miles per hour is about 244.6 kilometres per hour, matching the museum\'s 244.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Make a Scratch car that speeds up a little less each second, then race a quick car against a slow one.' },
          { h3: 'Ages 11 to 15', p: 'Code the exponential response in Python and print when each engine reaches 90 per cent.' },
          { h3: 'Ages 15 and up', p: 'Compare the exact formula with a time-stepping loop, and prove where the loop becomes unstable.' }
        ] },
        { kind: 'callout', h3: 'Museum history, invented engines', p: 'JET 1\'s history and record come from the Science Museum Group. The time constants are our own illustrative values, not measurements of JET 1 or any real engine.' }
      ]
    },
    {
      id: 'jet-1', tint: 'deep', eyebrow: 'Why JET 1',
      h2: 'Solihull\'s jet-powered car',
      intro: 'What the Science Museum Group record says.',
      body: [
        { kind: 'table', caption: 'Prototype Rover gas turbine motor car, JET 1, Science Museum Group collection record co26468', head: ['Record detail', 'What it says'], rows: [
          ['Built', 'By the Rover Company, Solihull, between 1946 and 1950'],
          ['Claim to fame', 'Described by the museum as the world\'s first gas-turbine-powered car'],
          ['Unveiled', '1950'],
          ['Record', '152 mph (244 km/h) in 1952, a record for gas turbine cars, with an uprated engine'],
          ['Problems', 'Poor fuel consumption and slowness to respond to the throttle'],
          ['Afterwards', 'Rover kept developing gas turbine car designs until 1965']
        ] },
        { kind: 'p', text: 'Time constants appear everywhere in engineering and computing: how quickly a thermostat settles, how a smoothing filter responds to new data, how fast a battery charges. Choosing a safe time step is one of the first lessons in simulation, from video games to weather models. A Solihull learner who has watched a loop blow up because its steps were too long will always check stability first.' },
        { kind: 'p', text: 'We have no connection with the Science Museum Group or the ONS. Their records are theirs; the engine model and any errors in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From racing games to simulations',
    intro: 'These bands are rough; the trial lesson finds the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Moving sprites', p: 'Block coding with cars, speed and timing.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 5 to 8', h3: 'Python basics', p: 'Typed Python with loops that update values over time.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Modelling', p: 'Exponentials, simulation and AI basics alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Programming for work', p: 'Adult Python, from basics to reliable scripts.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and simulations',
    h2: 'An AI can write a simulation loop. Will it check the time step?',
    intro: 'An unstable loop prints numbers just as confidently as a stable one.',
    p1: 'Ask a chatbot for a quick simulation and it will usually pick a time step without comment. If the step is too long, the output swings wildly or quietly drifts, and nothing warns you.',
    p2: 'A Solihull learner who has seen a loop blow up knows to test the step size before trusting any simulation, whoever wrote it.',
    closer: 'Never trusting a simulation until it passes a stability check is a habit a Solihull teenager picks up by coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From Shirley to Balsall Common, online',
    intro: 'Every part of the borough can join by video.',
    cells: [
      { h3: 'Hands-on coding', p: 'The learner types every program; the tutor follows on the shared screen and helps with questions.' },
      { h3: 'Level first, age second', p: 'We match a Solihull Year 4 or Year 13 to a course using the trial lesson, then name exams exactly as their board does.' },
      { h3: 'A free start', p: 'The first lesson carries no charge and ends with a clear plan.' },
      { h3: 'Classmates who match', p: 'Groups of five to ten are formed by ability, so Solihull learners study alongside peers at their exact stage.' },
      { h3: 'School terms', p: 'Two lessons weekly during term, none in the holidays.' },
      { h3: 'No clock-change confusion', p: 'Lessons stay at the same Solihull time in March and October; the teachers adapt.' }
    ],
    spec: { title: 'Why groups meet online', p: 'Five Solihull learners at one level and one free hour are rarely neighbours. Online classes give each learner the right group.' }
  },

  fees: {
    h2: 'Fees in Solihull',
    intro: 'The price is identical across Solihull, and matches what we charge in every country outside India.',
    first: 'One whole lesson free, then honest advice.',
    group: 'Around eight live lessons a month with five to ten classmates.',
    private: 'Around eight live lessons a month with your own tutor.',
    closer: 'Prices are in US dollars only; there is no sterling price. The first invoice follows only after the trial agrees a course and a regular slot; see the pricing page for breaks, missed sessions and moving between group and private.'
  },

  reviewsH2: 'Google reviews Solihull parents can read',

  book: {
    h2: 'Book a free Solihull coding lesson',
    intro: 'A few words about the learner is enough to get started: age or year group, and what they enjoy. We might open with a Scratch racing game, a short Python script, an AI experiment, or the JET 1 engine model.',
    success: 'Thank you. Your Solihull request has been received.'
  },

  faq: {
    h2: 'Solihull questions',
    intro: 'The borough, the engine project and practical details.',
    items: [
      { q: 'How many people live in Solihull?', a: 'The 2021 census age table records 216,238 residents in the Metropolitan Borough of Solihull.' },
      { q: 'Do you teach Python and AI online in Solihull?', a: 'Yes. Solihull learners from age 6 to adults take live online Python, AI and coding lessons with us.' },
      { q: 'What is the JET 1 project?', a: 'Learners model how quickly an engine reaches its power using a time constant in Python, and see why a turbine felt slow.' },
      { q: 'What is a time constant?', a: 'The time a first-order system takes to cover about 63 per cent of the gap to its target.' },
      { q: 'Was JET 1 built in Solihull?', a: 'Yes. The Science Museum Group records it as built by the Rover Company, Solihull, between 1946 and 1950.' },
      { q: 'Are classes held in Solihull?', a: 'Everything happens over a live video link, so the classroom is wherever the learner has a laptop.' },
      { q: 'Is there exam support?', a: 'GCSE and A level maths and computing, taught so the ideas stick; we never promise a particular grade.' },
      { q: 'What ages do you teach?', a: 'Six to 67.' },
      { q: 'What do lessons cost?', a: 'Your trial lesson is free. Continuing costs USD 100 per month for a small class or USD 150 per month for private teaching.' },
      { q: 'Do lessons run in school holidays?', a: 'No. Send us your holiday weeks and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More pages near Solihull',
    html: '<a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a> and <a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry</a> have their own pages, and <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a> has a county project. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands region</a> page indexes them all.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Solihull and the West Midlands',
  footerPlaces: [
    { href: '/coding-classes-in-birmingham', label: 'Birmingham' },
    { href: '/coding-classes-in-the-west-midlands', label: 'West Midlands' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' }
  ],

  personalityCss: `
.cg-root.cg-sol .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-sol .cg-hero h1 { font-weight: 715; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-sol .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-sol .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sol .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.019em; }
.cg-root.cg-sol .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-sol .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sol .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-sol .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-sol .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Solihull (E08000029). Nomis Census 2021 TS007A: total 216,238; 5 to 9 13,771 (6.4%, England 5.9%); 10 to 14 13,604 (6.3%, 6.0%); 20 to 24 10,755 (5.0%, 6.0%); 50 to 54 15,629 (7.2%, 6.9%); 70 to 74 12,069 (5.6%, 5.0%); 85+ 6,700 (3.1%, 2.4%). ONS 2021 BUAs: Solihull 107,735; Knowle and Dorridge 19,320; Balsall Common 7,095; Dickens Heath 4,800; 59,997 residents in the Birmingham BUA by our OA sum. Science Museum Group co26468 JET 1: "built by the Rover Company, Solihull, England, 1946-1950"; "the world\'s first gas-turbine-powered motor car"; "unveiled to the public in 1950"; "In 1952 JET 1 was fitted with an uprated engine and achieved a world record speed (for gas turbine cars) of 152 mph (244 km/h)"; "poor fuel consumption and slowness to respond to the throttle"; "Rover continued to develop gas turbine car designs until 1965".',
    localProject: 'First-order lag, invented tau: piston 0.3 s (90% 0.69 s, 99% 1.38 s); turbine 3 s (90% 6.91 s, 99% 13.82 s). Euler dt 0.5 -> 90% at 6.5 s; dt 0.01 -> 6.90 s. dt 0.7 with tau 0.3: 2.33, -0.78, 3.37, -2.16, 5.21, -4.62. 152 mph = 244.6 km/h. Lesson family: time constants and step-size stability.',
    requiredMentions: [
      'JET 1',
      'Rover Company',
      'gas turbine',
      'time constant',
      '216,238',
      'Balsall Common',
      'Dickens Heath',
      'Shirley',
      'throttle'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Solihull and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Science Museum Group collection, Prototype Rover gas turbine motor car, JET 1 (co26468).', url: 'https://collection.sciencemuseumgroup.org.uk/objects/co26468' }
    ],
    rejectedClaims: [
      'Measured throttle response of JET 1: not in the record; time constants are invented.',
      'Current car-plant facts and employment: not used.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Shirley is named only as a part of the borough, with no figures.',
      'Sterling prices: none.'
    ]
  }
};
