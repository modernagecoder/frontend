'use strict';
// Woking (cg- town page, UK cluster Phase 8, towns band A, row 323). Keyword slug per the owner's 2026-09-27 instruction.
// Spine: was H. G. Wells right about Mars? Anchors (read raw 27 September 2026): Project Gutenberg ebook 36, H. G. Wells,
// "The war of the worlds": "revolves about the sun at a mean distance of 140,000,000 miles, and the light and heat it receives
// from the sun is barely half of that received by this world"; "scarcely one seventh of the volume of the earth"; chapter
// "ON HORSELL COMMON"; "on the common between Horsell, Ottershaw, and Woking"; "my home in Maybury". NASA JPL Solar System
// Dynamics, approximate positions Table 1 (valid 1800 AD to 2050 AD): Mars a 1.52371034 au, e 0.09339410; EM Bary a
// 1.00000261 au. JPL planetary physical parameters: mean radius Earth 6371.0084 km, Mars 3389.50 km.
// Our model (computed inline): mean-distance sunlight ratio (1.00000261/1.52371034)^2 = 0.4307; linear slip 0.656; perihelion
// 1.3814 au gives 0.524, aphelion 1.6660 au gives 0.360, a 1.45x swing (linear slip 1.21x); radius ratio 0.53202, cube
// 0.1506 = 1/6.64 (Wells's "scarcely one seventh" is a little low), square slip 0.283; 1.52371034 au x 149,597,870.7 km
// (IAU 2012 au) = 141.6 million miles.
// Lesson family: power-law scaling, inverse square for light vs cube for volume; screened (inverse square, synodic,
// Wells, opposition: 0 hits in families; Maidenhead used inverse PROPORTION for arch thrust, a different law).
// Page does not claim where Wells lived (celebratewoking.info returned a bot check; not circumvented) and avoids the novel's
// violence; the narrator's Maybury home and the Horsell Common setting come from the text itself.
// Place facts: Nomis Census 2021 TS007A, Woking E07000217: total 103,944; 5 to 9 6,745 (6.5%; England 5.9%); 10 to 14 6,787
// (6.5%; 6.0%); 20 to 24 4,890 (4.7%; 6.0%); 35 to 39 7,883 (7.6%; 6.7%); 40 to 44 8,179 (7.9%; 6.3%); 85+ 2,684 (2.6%;
// 2.4%). ONS 2021 BUA: Woking 75,660 (New Haw, West Byfleet and Sheerwater, Byfleet, West End and Chobham cross the boundary).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WOKING', label: 'Woking', blurb: 'Coding and AI classes for Woking, with a project that checks H. G. Wells\'s numbers about Mars using NASA data.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-woking',
  code: 'wok',
  accent: '#4C3022',
  accentRationale: 'Woking: a Martian iron-oxide brown (9.65:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Woking',
    eyebrow: 'Woking, Surrey, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Surrey' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Surrey', href: '/coding-classes-in-surrey' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Woking, England',
  title: 'Coding and AI Classes in Woking | Online Python for 6 to 67',
  description: 'Live online coding, AI and Python classes for Woking children, teenagers and adults aged 6 to 67, one-to-one or in small groups. Your first lesson is free.',
  ogDescription: 'Online coding and AI classes for Woking, and a Python project that tests H. G. Wells\'s claims about Mars against NASA orbit and radius data.',
  twitterDescription: 'Woking coding, AI and Python classes for ages 6 to 67, taught live online. First lesson free.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Woking',
    description: 'Online coding, AI, Python and mathematics for children, teenagers and adults in Woking, taught live in English at the right level.'
  },

  h1: 'Coding and AI classes in Woking',
  capsuleQ: 'Where can Woking learners find the best coding and AI classes?',
  capsule: 'Woking borough counted 103,944 residents in the 2021 census, and the Woking built-up area 75,660. It leans towards families: children aged 5 to 14 and adults aged 35 to 49 each form a larger share than across England. Our teachers work from India and run live online lessons in coding, AI, Python and maths for anyone aged 6 to 67, either alone with a tutor or in a class of five to ten at one stage. A free first lesson settles the right course. The Woking project fact-checks a famous novel set on Horsell Common. If the learner continues, a group place is USD 100 per month and private tuition USD 150 per month.',
  lead: 'The War of the Worlds by H. G. Wells begins with Martians landing on Horsell Common, "between Horsell, Ottershaw, and Woking", and its narrator walks home to Maybury. Before any of that, Wells gives the reader some numbers. Mars, he writes, orbits at a mean distance of 140,000,000 miles, gets "barely half" the sunlight Earth does, and is "scarcely one seventh of the volume of the earth". A novelist in the 1890s had no calculator and no space probes. Were his figures right? A Woking learner can check them with a few lines of Python and data from NASA\'s Jet Propulsion Laboratory, and along the way meet the two scaling laws that trip up almost everyone.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding or AI lesson for a Woking learner.',

  picks: {
    eyebrow: 'Woking course picks',
    h2: 'Courses Woking learners often start with',
    intro: 'These suit most beginners. Each one opens with a free live lesson, and nobody asks for payment details.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Drag-and-drop coding with planets, rockets and simple games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'A first typed language, with small AI experiments along the way.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, including the Mars scaling project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Python from zero for grown-ups, through to real data work.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Woking in figures',
      h2: 'A borough of young families',
      intro: 'Selected age bands for Woking borough from census table TS007A (2021), read from Nomis and set beside England.',
      body: [
        { kind: 'table', caption: 'Woking borough and England, selected ages, Census 2021 TS007A', head: ['Age band', 'Woking residents', 'Woking share', 'England share'], rows: [
          ['5 to 9', '6,745', '6.5%', '5.9%'],
          ['10 to 14', '6,787', '6.5%', '6.0%'],
          ['20 to 24', '4,890', '4.7%', '6.0%'],
          ['35 to 39', '7,883', '7.6%', '6.7%'],
          ['40 to 44', '8,179', '7.9%', '6.3%'],
          ['85 and over', '2,684', '2.6%', '2.4%']
        ] },
        { kind: 'p', text: 'School-age children and parents in their late thirties and forties are over-represented, while people in their early twenties are scarcer than nationally. The ONS puts the Woking built-up area at 75,660 people; Byfleet, West Byfleet and parts of Chobham belong to built-up areas that straddle the borough line, so we do not quote their totals here. Pupils study the national curriculum for England, and our timetable steps aside for your school holidays.' },
        { kind: 'callout', h3: 'Related pages', p: 'See the <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a> county page, or the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East</a> page for the wider region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Woking project',
      h2: 'Checking Wells with NASA numbers',
      intro: 'Two claims from chapter one, one square law and one cube law.',
      body: [
        { kind: 'p', text: 'The learner starts with JPL\'s orbital elements: Mars has a semi-major axis of 1.52371034 astronomical units, Earth\'s orbit about 1.00000261. Sunlight spreads over the surface of an ever larger sphere, so its strength falls with the inverse square of distance. Python gives (1.00000261 / 1.52371034) squared, which is 0.4307. Mars receives about 43 per cent of Earth\'s sunlight, so "barely half" holds up well. Converting the distance with the IAU value of the astronomical unit gives 141.6 million miles, close to Wells\'s round 140 million.' },
        { kind: 'table', caption: 'Our Python results from JPL data, 27 September 2026', head: ['Question', 'Correct law', 'Result', 'The tempting slip'], rows: [
          ['Sunlight on Mars vs Earth, mean distance', 'Inverse square', '0.43 (about 43%)', 'Plain ratio gives 0.66, "two thirds"'],
          ['Sunlight at Mars\'s nearest vs farthest', 'Inverse square', '1.45 times stronger', 'Plain ratio gives only 1.21'],
          ['Volume of Mars vs Earth', 'Cube of the radius', '0.1506, about 1/6.6', 'Squaring gives 0.28, over a quarter']
        ] },
        { kind: 'p', text: 'The second claim uses the cube law. JPL lists mean radii of 3,389.50 km for Mars and 6,371.0084 km for Earth, a ratio of 0.532. Volume grows with the cube, so Mars holds 0.532 cubed, or 0.1506, of Earth\'s volume: one part in 6.64. Wells wrote "scarcely one seventh", which would be a little under 0.143, so he was slightly low. The learner reports it honestly: close, but the number is a touch more than one seventh, not less.' },
        { kind: 'p', text: 'Mars\'s orbit is also noticeably oval, with eccentricity 0.0934. At its nearest, 1.3814 au, it gets 52 per cent of Earth\'s sunlight; at its farthest, 1.6660 au, only 36 per cent. The learner writes one function, scale(ratio, power), and tests it: power minus two for light, three for volume, two for surface area. The final test feeds in a deliberately wrong power and checks the program flags the "two thirds" answer as inconsistent with the square law.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Shine a torch on squared paper at two distances and count how many squares the light covers.' },
          { h3: 'Ages 11 to 15', p: 'Write the scale function in Python and check Wells\'s two numbers.' },
          { h3: 'Ages 15 and up', p: 'Use the full orbit, plot sunlight across a Martian year and compare with Earth\'s.' }
        ] },
        { kind: 'callout', h3: 'Wells\'s words, JPL\'s data, our code', p: 'The quotations come from The War of the Worlds on Project Gutenberg, and the orbital and radius figures from NASA\'s Jet Propulsion Laboratory. The calculations and conclusions are ours.' }
      ]
    },
    {
      id: 'wells', tint: 'deep', eyebrow: 'Why Horsell Common',
      h2: 'A novel with a Woking street map',
      intro: 'Places named in the text of The War of the Worlds.',
      body: [
        { kind: 'table', caption: 'Woking places in the novel, from the Project Gutenberg text', head: ['Place', 'How the novel uses it'], rows: [
          ['Horsell Common', 'Where the first cylinder lands; a whole chapter is named after it'],
          ['The sand-pits', 'The crater and the crowd that gathers around it'],
          ['Maybury', 'The narrator\'s home'],
          ['Chobham Road', 'Named in the title of chapter six'],
          ['Woking junction', 'Trains are still stopping and going there late into the night'],
          ['Ottershaw', 'Named with Horsell and Woking in the first landing scene']
        ] },
        { kind: 'p', text: 'Scaling laws like these run through modern engineering and computing. Solar panel designers for Mars rovers start from the inverse square, game engines light scenes with it, and anyone who doubles the size of a 3D model learns that its volume, and so its weight, goes up eight times. A Woking learner who has caught a novelist and a chatbot using the wrong power has a habit that serves in every science.' },
        { kind: 'p', text: 'Modern Age Coders is independent of NASA, the Jet Propulsion Laboratory, Project Gutenberg and the ONS. The data and text belong to them; the code, and any mistake in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Path through the years',
    h2: 'From torchlight on squared paper to planetary models',
    intro: 'The year groups are rough; the trial lesson decides.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Games and space', p: 'Block coding with loops, sprites and a rocket or two.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'First Python', p: 'Variables, functions and small science calculations.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Models and AI', p: 'Python modelling and AI alongside GCSE and A level maths.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Real data work', p: 'Programming and data analysis for adults.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and arithmetic',
    h2: 'Will an AI notice when a ratio should be squared?',
    intro: 'Plausible numbers are not always correct ones.',
    p1: 'Ask a chatbot how much sunlight Mars gets and it may answer well. Ask a slightly unusual scaling question and it can quietly divide where it should square, then explain the wrong answer fluently.',
    p2: 'A Woking learner who has written the scale function knows to ask which power applies, and to test it with a known case.',
    closer: 'Knowing which law to apply is a solid reason for Woking teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson format',
    h2: 'From Horsell to Old Woking, all by video',
    intro: 'Where in the borough you live makes no difference.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'The learner types every line; the tutor watches the shared screen and nudges with questions.' },
      { h3: 'Right stage, right year', p: 'A Year 4 and a Year 12 start where their school year and trial suggest, with the exam board named.' },
      { h3: 'Free opening lesson', p: 'Nothing to pay for the trial, and a straight answer about what fits.' },
      { h3: 'Level-matched groups', p: 'Classes of five to ten people at the same point, drawn from across the UK.' },
      { h3: 'Twice a week', p: 'Two sessions weekly during term time, none in the holidays.' },
      { h3: 'Your clock, fixed', p: 'When the UK clocks change, our teachers move and your slot stays put.' }
    ],
    spec: { title: 'Why groups are online', p: 'Finding five Woking learners at one level, all free at the same hour, is rare. Online, each learner gets a class at their own stage.' }
  },

  fees: {
    h2: 'What Woking families pay',
    intro: 'Woking pays the same rates as every other country outside India.',
    first: 'A full free lesson, ending with a clear course suggestion.',
    group: 'Roughly eight live small-class lessons each month.',
    private: 'Roughly eight live one-to-one lessons each month.',
    closer: 'Fees are set in US dollars rather than sterling. We only start billing after the trial has agreed a course and a weekly slot, and the pricing page explains holidays, missed sessions and moving between formats.'
  },

  reviewsH2: 'What families say on Google',

  book: {
    h2: 'Book a free lesson from Woking',
    intro: 'Share the learner\'s age or school year and something they enjoy. The trial could be a Scratch space game, a first Python program, an AI experiment, or the Mars sunlight check.',
    success: 'Thanks. Your Woking booking request is with us.'
  },

  faq: {
    h2: 'Questions from Woking',
    intro: 'About Woking, the Mars project and how lessons work.',
    items: [
      { q: 'What is the population of Woking?', a: 'The 2021 census counted 103,944 in Woking borough, with 75,660 in the Woking built-up area.' },
      { q: 'Can Woking students take coding and AI classes online?', a: 'Yes. Learners in Woking aged 6 to 67 join live online classes in coding, AI, Python and maths.' },
      { q: 'What is the War of the Worlds project?', a: 'Learners use NASA JPL data and Python to test Wells\'s claims that Mars gets barely half Earth\'s sunlight and has one seventh of its volume.' },
      { q: 'Was H. G. Wells right about Mars?', a: 'Mostly. Our calculation gives about 43 per cent of Earth\'s sunlight and about 1/6.6 of its volume, so "one seventh" is slightly low.' },
      { q: 'What is the inverse square law?', a: 'Light spreads over a sphere, so doubling the distance cuts its strength to a quarter, not a half.' },
      { q: 'Where do lessons take place?', a: 'Online, by live video, so any part of the borough works.' },
      { q: 'Is there GCSE and A level support?', a: 'Yes, for maths and computing, focused on real understanding; grades are never promised.' },
      { q: 'Who can join?', a: 'Anyone aged 6 to 67, including adults and university students.' },
      { q: 'What are the fees?', a: 'The first lesson is free. After that, USD 100 per month for a group or USD 150 per month for private lessons.' },
      { q: 'Do lessons stop for school holidays?', a: 'Yes. Tell us your term dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'More nearby',
    h2: 'Other pages around Woking',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a> page covers the county, <a class="cg-inline-link" href="/ai-and-programming-classes-in-guildford">Guildford</a> solves a Lewis Carroll logic puzzle by computer, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East</a> page lists the region. Every UK page is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Woking and Surrey',
  footerPlaces: [
    { href: '/coding-classes-in-surrey', label: 'Surrey' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wok .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.2vw, 2.6rem); }
.cg-root.cg-wok .cg-hero h1 { font-weight: 800; letter-spacing: -0.03em; line-height: 1.02; }
.cg-root.cg-wok .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-wok .cg-eyebrow { letter-spacing: 0.2em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-wok .cg-section-head h2 { max-width: 20ch; letter-spacing: -0.022em; }
.cg-root.cg-wok .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-wok .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-wok .cg-table th { letter-spacing: 0.04em; font-weight: 700; font-size: 0.8rem; }
.cg-root.cg-wok .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-wok .cg-callout { border-radius: 14px; border-width: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Woking (E07000217). Nomis Census 2021 TS007A: total 103,944; 5 to 9 6,745 (6.5%, England 5.9%); 10 to 14 6,787 (6.5%, 6.0%); 20 to 24 4,890 (4.7%, 6.0%); 35 to 39 7,883 (7.6%, 6.7%); 40 to 44 8,179 (7.9%, 6.3%); 85+ 2,684 (2.6%, 2.4%). ONS 2021 BUA Woking 75,660. Project Gutenberg 36, H. G. Wells, The war of the worlds: "a mean distance of 140,000,000 miles"; "barely half of that received by this world"; "scarcely one seventh of the volume of the earth"; chapter "ON HORSELL COMMON"; "between Horsell, Ottershaw, and Woking"; "my home in Maybury". NASA JPL SSD Table 1 (1800 to 2050 AD): Mars a 1.52371034 au, e 0.09339410; EM Bary a 1.00000261 au. JPL physical parameters: mean radius Earth 6371.0084 km, Mars 3389.50 km.',
    localProject: 'Power-law scaling: sunlight ratio (1.00000261/1.52371034)^2 = 0.4307 (linear slip 0.656); perihelion 1.3814 au 0.524, aphelion 1.6660 au 0.360, swing 1.45x (linear 1.21x); radius ratio 0.532, volume 0.1506 = 1/6.64 (square slip 0.283); 141.6 million miles via IAU au. Lesson family: inverse square vs cube scaling.',
    requiredMentions: [
      '75,660',
      'H. G. Wells',
      'War of the Worlds',
      'Horsell Common',
      'inverse square',
      'Maybury',
      'one seventh',
      'Jet Propulsion Laboratory',
      'Ottershaw'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Woking and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, H. G. Wells, The War of the Worlds (ebook 36).', url: 'https://www.gutenberg.org/ebooks/36' },
      { claim: 'NASA JPL Solar System Dynamics, approximate positions of the planets, Table 1.', url: 'https://ssd.jpl.nasa.gov/planets/approx_pos.html' },
      { claim: 'NASA JPL Solar System Dynamics, planetary physical parameters.', url: 'https://ssd.jpl.nasa.gov/planets/phys_par.html' }
    ],
    rejectedClaims: [
      'Where Wells lived in Woking: not claimed; the local heritage page returned a bot check and was not bypassed.',
      'The novel\'s violence: not described.',
      'Byfleet, West Byfleet and Chobham built-up areas: cross the boundary, not quoted.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
