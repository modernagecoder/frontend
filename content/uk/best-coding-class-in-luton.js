'use strict';
// Luton (cg- town page, UK cluster Phase 8, towns band A, row 316). Spine: when does a plait come back to where it started,
// and does every straw take its turn at the edge? Anchors (read raw 27 September 2026): Science Museum Group co44610, straw
// splint mill: "used in the straw plaiting industry - to make straw hats"; "Straw was steamed and bleached, and then passed
// through the splint mill several times, where it was squeezed to make it suitably soft for plaiting. Straw plaiting was a
// common domestic industry in rural areas - Luton in Bedfordshire was an important centre, and people from the surrounding
// area would plait straw at home and sell it to hat makers there". The Culture Trust Luton, Hats and Heritage page: "Our
// collection is the most complete in the world and spans 400 years, including over 1,900 pieces of headwear, 4000 material
// examples, machinery, tools and rare items collected from hat factories" (a claim by the Trust, attributed). Wardown House
// page: "Wardown House, Museum, and Gallery ... stands as a Grade II listed edifice"; "In 2026, Luton Borough celebrates its
// 150th anniversary".
// Our model (simulated inline): a flat plait with an odd number n of strands; alternately the outer-left strand crosses to
// the middle, then the outer-right strand. One left-and-right pair is a single n-cycle (3 strands: [1, 2, 0]; 5: [1, 2, 4,
// 0, 3]; 7: [1, 2, 3, 6, 0, 4, 5]), so the plait returns to its start after n pairs = 2n crossings: 3 strands 6, 5 strands
// 10, 7 strands 14, 9 strands 18, 11 strands 22. A single cycle means every strand visits every position, so wear and
// appearance are even. Order of a permutation = lcm of cycle lengths.
// Lesson family: permutation cycles and the order of a permutation, modelled as a plait; screened (braid, plait, cycle
// notation, order of a permutation: 0 hits; permutation TESTS elsewhere are statistics, not cycles; Anglesey's symmetry
// groups were geometric).
// Place facts: Nomis Census 2021 TS007A, Luton E06000032: total 225,261; under 5 15,960 (7.1%; England 5.4%); 5 to 9 16,731
// (7.4%; 5.9%); 10 to 14 16,744 (7.4%; 6.0%); 15 to 19 15,072 (6.7%; 5.7%); 35 to 39 17,663 (7.8%; 6.7%); 65 to 69 7,773
// (3.5%; 4.9%); 85 and over 3,605 (1.6%; 2.4%). ONS 2021 BUA: Luton 233,525 (reaches beyond the borough; 225,261 inside by
// our OA sum). Bands never summed. No schools named.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'LUTON', blurb: 'The straw-hat town, with a project that finds when a plait returns to its start and why every straw takes a turn at the edge.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-luton',
  code: 'ltn',
  accent: '#7A5072',
  accentRationale: 'Luton: a dyed-straw plum from the solver (5.26:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Luton',
    eyebrow: 'Luton, Bedfordshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Bedfordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Bedfordshire', href: '/coding-classes-in-bedfordshire' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Luton, England',
  title: 'Best Coding Classes in Luton | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Luton learners aged 6 to 67, taught by a live teacher in small level-matched groups. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Luton, the straw-hat town, and a Python project that finds when a plait returns to its start and why every straw takes a turn.',
  twitterDescription: 'Luton coding and AI classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Luton Learners',
    description: 'Ability-placed online coding, Python, AI, discrete maths and mathematics for children, teenagers and adults in Luton, taught live in English.'
  },

  h1: 'Coding classes in Luton',
  capsuleQ: 'What are the best coding classes in Luton?',
  capsule: 'Luton had 225,261 residents at the 2021 census and a young population: children aged 5 to 9 and 10 to 14 each made up 7.4 per cent of residents, against 5.9 and 6.0 per cent across England. The town was an important centre of straw plaiting for hats, and in 2026 the borough marks its 150th anniversary. Lessons are taught live over video by our team in India: coding, Python, AI and maths for any learner between 6 and 67, either privately or in a small class grouped by level. A free first lesson settles the right course. The Luton project turns a straw plait into a puzzle about permutations. After it, group lessons are USD 100 per month and private ones USD 150 per month.',
  lead: 'A Science Museum Group record of a straw splint mill explains how straw was steamed, bleached and squeezed until it was soft enough to plait, and notes that Luton in Bedfordshire was an important centre: people from the surrounding area plaited straw at home and sold it to the town\'s hat makers. Today the Culture Trust in Luton describes its hat collection as the most complete in the world, with over 1,900 pieces of headwear. Plaiting hides a neat piece of mathematics. Each crossing moves one strand to a new position, so a plait is a sequence of rearrangements. When does every strand come back to where it started, and does every strand take its turn at the edge? This page\'s project answers in Python.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Luton.',

  picks: {
    eyebrow: 'Course picks for Luton',
    h2: 'Where Luton learners usually start',
    intro: 'Pick by interest. The first live lesson of any course is free, and no bank details are asked for.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with patterns, swaps and weaving games.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Patterns, sequences and rearrangements explored with short programs.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python to GCSE depth and beyond, with lists, loops and the plait project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python from zero for adults, up to algorithms and data structures.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Luton today',
      h2: 'Children well above the national share',
      intro: 'Nomis publishes the census age table TS007A; the rows below quote it band by band, with nothing added together.',
      body: [
        { kind: 'table', caption: 'How Luton compares with England by age, 2021 census TS007A', head: ['Ages', 'Number in Luton', 'Luton share', 'England share'], rows: [
          ['Under 5', '15,960', '7.1%', '5.4%'],
          ['5 to 9', '16,731', '7.4%', '5.9%'],
          ['10 to 14', '16,744', '7.4%', '6.0%'],
          ['15 to 19', '15,072', '6.7%', '5.7%'],
          ['35 to 39', '17,663', '7.8%', '6.7%'],
          ['85 and over', '3,605', '1.6%', '2.4%']
        ] },
        { kind: 'p', text: 'Every band from under five to the late teens is well above the English share, and so is the late-thirties band of many parents, while the oldest residents are fewer than average. The Luton built-up area, 233,525 people, reaches a little beyond the borough boundary. The Culture Trust\'s Wardown House, a Grade II listed building, is marking the borough\'s 150th anniversary in 2026. Luton schools teach the English national curriculum; since holidays vary, we simply follow the calendar each family sends us.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-bedfordshire">Bedfordshire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> page indexes the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Luton project',
      h2: 'When does a plait come home?',
      intro: 'Every crossing is a swap of positions; a plait is those swaps repeated.',
      body: [
        { kind: 'p', text: 'The learner models a flat plait as a Python list, one entry per strand, numbered by where it starts. We use a simple rule: first the outer strand on the left crosses over to the middle, then the outer strand on the right does the same, and the two moves repeat. After each crossing the program checks whether the list is back in its starting order, and counts the crossings until it is. Real plaiters use many patterns; this is one clean example chosen for the lesson.' },
        { kind: 'table', caption: 'Our plait simulation for odd numbers of strands, 27 September 2026', head: ['Strands', 'After one left and right pair', 'Crossings to return to start', 'Every strand visits every position?'], rows: [
          ['3', '1, 2, 0', '6', 'Yes'],
          ['5', '1, 2, 4, 0, 3', '10', 'Yes'],
          ['7', '1, 2, 3, 6, 0, 4, 5', '14', 'Yes'],
          ['9', 'Not listed', '18', 'Yes'],
          ['11', 'Not listed', '22', 'Yes']
        ] },
        { kind: 'p', text: 'The pattern is striking: with an odd number of strands, the plait returns after exactly twice as many crossings as there are strands. The reason is a result from permutation theory. One left-and-right pair of crossings sends each strand along a single loop through all the positions, a cycle of length n. A permutation returns to the start after a number of steps equal to the least common multiple of its cycle lengths, here just n pairs, so 2n crossings. Because the loop is a single cycle, every straw spends the same time at the edges and in the middle, which helps a plait look even.' },
        { kind: 'p', text: 'Two slips catch learners out. Mixing up "which strand is in position 3" with "where did strand 3 go" gives the inverse arrangement, which looks plausible but is wrong. And applying the right-hand move before the left-hand one changes the in-between arrangements, because rearrangements do not generally commute, even though the return time here stays the same. The learner writes a test that composing the pair n times gives back the starting list, and prints the cycle structure to prove the single loop.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Plait three coloured ribbons, record the order after each cross, then animate it in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Model the plait with Python list moves and count crossings until it returns home.' },
          { h3: 'Ages 15 and up', p: 'Find the cycles of one crossing pair, use the least common multiple, and test other plait rules.' }
        ] },
        { kind: 'callout', h3: 'Museum records, our model', p: 'The straw-plait history comes from the Science Museum Group record and the collection figures from the Culture Trust. The plaiting rule and the table are our own model, so they show the mathematics of plaiting rather than any particular Luton plait pattern.' }
      ]
    },
    {
      id: 'straw-and-hats', tint: 'deep', eyebrow: 'Why straw and hats',
      h2: 'Luton\'s plait and hat trade',
      intro: 'What the sources say.',
      body: [
        { kind: 'table', caption: 'Straw plait and hats in Luton, from the Science Museum Group (co44610) and the Culture Trust Luton', head: ['Source', 'What it says'], rows: [
          ['Science Museum Group, splint mill', 'Straw was steamed, bleached and squeezed through a splint mill to soften it for plaiting'],
          ['Science Museum Group, splint mill', 'Luton in Bedfordshire was an important centre of straw plaiting'],
          ['Science Museum Group, splint mill', 'People nearby plaited straw at home and sold it to Luton hat makers'],
          ['Culture Trust, Hats and Heritage', 'A hat collection spanning 400 years, with over 1,900 pieces of headwear'],
          ['Culture Trust, Wardown House', 'A Grade II listed building; Luton Borough celebrates its 150th anniversary in 2026']
        ] },
        { kind: 'p', text: 'Permutations and their cycles run through computing: shuffling a playlist, scrambling data in encryption, rotating shifts fairly, and checking that a card shuffle mixes well. Knowing when a repeated rearrangement returns to the start, and whether it visits every position, is the same question in each. A Luton learner who has found it in a straw plait is ready for all of them.' },
        { kind: 'p', text: 'We are independent of the Science Museum Group, the Culture Trust Luton and the ONS. Their records are theirs; the plait model and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From ribbon plaits to permutations',
    intro: 'Rough bands only; the free lesson finds the start.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Patterns and swaps', p: 'Block coding with repeating patterns and swaps.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Lists and loops', p: 'Python lists that move, rotate and repeat.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Discrete maths', p: 'Permutations, cycles and proof alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Algorithms', p: 'Adult Python from basics to algorithms and data structures.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and order of operations',
    h2: 'An AI can write a shuffle. Does it know which way round the moves go?',
    intro: 'Rearrangements in the wrong order still produce tidy-looking output.',
    p1: 'Ask a chatbot to simulate a plait or a shuffle and it may confuse positions with items, or apply moves in the opposite order. The list still prints neatly, so the mistake is easy to miss.',
    p2: 'A Luton learner who has tested that the plait returns home after exactly 2n crossings knows to check any rearrangement against a property that must hold.',
    closer: 'Checking output against a rule that must always hold is a skill a Luton teenager gains by coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson details',
    h2: 'Across Luton, lessons by video',
    intro: 'Any home in the borough can join.',
    cells: [
      { h3: 'Learners type', p: 'Each student writes their own programs while the tutor follows along on the shared screen.' },
      { h3: 'Year groups', p: 'A Year 2 or a Year 12 in Luton begins at the level their school year suggests, using exam board names.' },
      { h3: 'Free first lesson', p: 'No charge for the opening lesson, which ends with clear advice.' },
      { h3: 'Same-level classes', p: 'Five to ten learners at one stage, from anywhere in the UK.' },
      { h3: 'Term pattern', p: 'Two lessons weekly in term, with a pause for holidays.' },
      { h3: 'UK hour kept', p: 'Clock changes leave your lesson time alone; our teachers adjust.' }
    ],
    spec: { title: 'Why online groups', p: 'Five learners at the same level and free at the same time are rarely next door to each other. Online, a Luton learner joins exactly the right class.' }
  },

  fees: {
    h2: 'Fees in Luton',
    intro: 'Luton pays the same as every country we teach outside India.',
    first: 'One complete lesson free, then honest guidance.',
    group: 'Close to eight lessons a month with five to ten others.',
    private: 'Close to eight lessons a month with a personal tutor.',
    closer: 'We charge in US dollars, never sterling. Billing begins after the trial has agreed a course and a weekly slot, and the pricing page explains holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'Google reviews from families',

  book: {
    h2: 'Book a free Luton lesson',
    intro: 'Send an age or school year plus a hobby. The trial could be a Scratch weaving game, a first Python program, or the plait puzzle.',
    success: 'Thank you. Your Luton request has arrived.'
  },

  faq: {
    h2: 'Luton questions',
    intro: 'The town, the plait project and practical details.',
    items: [
      { q: 'How many people live in Luton?', a: 'The 2021 census age table records 225,261 residents in the Borough of Luton.' },
      { q: 'Is Luton a young town?', a: 'Yes. Each five-year band from under five to 19 is above the English share, on the 2021 census.' },
      { q: 'What is the Luton plait project?', a: 'Learners model a straw plait as a list in Python and find that an odd number of strands returns home after twice that many crossings.' },
      { q: 'Why does every strand visit every position?', a: 'Because one pair of crossings forms a single cycle through all the positions, so each strand takes every place in turn.' },
      { q: 'Why is Luton linked with straw plait?', a: 'The Science Museum Group records Luton as an important centre, where plaiters sold their straw to hat makers.' },
      { q: 'Are the classes in Luton?', a: 'No travel needed: lessons happen on video, so a laptop at home is the classroom.' },
      { q: 'Can you help with exam years?', a: 'GCSE and A level maths and computing, yes; we aim for real understanding and never promise a grade.' },
      { q: 'Which ages can join?', a: 'Six to 67.' },
      { q: 'What do lessons cost?', a: 'The first is free; after it, USD 100 a month for a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons run in holidays?', a: 'No. Tell us your holiday weeks and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More pages near Luton',
    html: 'Our <a class="cg-inline-link" href="/coding-classes-in-bedfordshire">Bedfordshire</a> page measures flights along the curve of the Earth, <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire</a> times signals to Mars, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> page indexes the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Luton and Bedfordshire',
  footerPlaces: [
    { href: '/coding-classes-in-bedfordshire', label: 'Bedfordshire' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-hertfordshire', label: 'Hertfordshire' }
  ],

  personalityCss: `
.cg-root.cg-ltn .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-ltn .cg-hero h1 { font-weight: 720; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-ltn .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-ltn .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ltn .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.019em; }
.cg-root.cg-ltn .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-ltn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ltn .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-ltn .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-ltn .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Luton (E06000032). Nomis Census 2021 TS007A: total 225,261; under 5 15,960 (7.1%, England 5.4%); 5 to 9 16,731 (7.4%, 5.9%); 10 to 14 16,744 (7.4%, 6.0%); 15 to 19 15,072 (6.7%, 5.7%); 35 to 39 17,663 (7.8%, 6.7%); 85+ 3,605 (1.6%, 2.4%). ONS 2021 BUA Luton 233,525. Science Museum Group co44610 straw splint mill: "Straw was steamed and bleached, and then passed through the splint mill several times"; "Luton in Bedfordshire was an important centre, and people from the surrounding area would plait straw at home and sell it to hat makers there". Culture Trust Luton: "spans 400 years, including over 1,900 pieces of headwear"; Wardown House "a Grade II listed edifice"; "In 2026, Luton Borough celebrates its 150th anniversary".',
    localProject: 'Flat plait, odd n strands, outer-left then outer-right strand to the middle. One pair = single n-cycle (3: [1,2,0]; 5: [1,2,4,0,3]; 7: [1,2,3,6,0,4,5]); return after 2n crossings: 6, 10, 14, 18, 22. Order = lcm of cycle lengths. Slips: positions vs items (inverse), move order (non-commuting). Lesson family: permutation cycles and order, as a plait.',
    requiredMentions: [
      'Wardown',
      'straw plait',
      'splint mill',
      'Culture Trust',
      '150th anniversary',
      '225,261',
      'plaiting',
      'strands',
      'cycle'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Luton and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Science Museum Group collection, straw splint mill (co44610).', url: 'https://collection.sciencemuseumgroup.org.uk/objects/co44610' },
      { claim: 'The Culture Trust Luton, Hats and Heritage.', url: 'https://www.culturetrust.com/take-part/hats-heritage' },
      { claim: 'The Culture Trust Luton, Wardown House, Museum and Gallery.', url: 'https://www.culturetrust.com/venues/wardown-house-museum-gallery' }
    ],
    rejectedClaims: [
      'The collection being "the most complete in the world": quoted only as the Trust\'s own description.',
      'Real Luton plait patterns and strand counts: not claimed; the plaiting rule is our model.',
      'Vauxhall and airport facts: not used.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
