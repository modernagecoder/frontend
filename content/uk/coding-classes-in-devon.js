'use strict';
// Devon (cg- county index, UK cluster Phase 7, row 228). Ceremonial Devon: eight districts under Devon County Council
// plus Plymouth and Torbay. Spine: three local rules, one shoal. Craig Reynolds, Boids (red3d.com/cwr/boids, read raw
// 26 September 2026): "In 1986 I made a computer model of coordinated animal motion such as bird flocks and fish
// schools"; Separation, "steer to avoid crowding local flockmates"; Alignment, "steer towards the average heading of
// local flockmates"; Cohesion, "steer to move toward the average position of local flockmates"; the 1992 film Batman
// Returns was the first of many applications. National Marine Aquarium: "located in Britain's Ocean City - Plymouth.
// Not only are we the largest Aquarium in the UK ... home to over 4,000 animals". Marine Biological Association: The
// Laboratory, Citadel Hill, Plymouth. Our run (scratchpad dev/boids.py, numpy, seed 20260926): 150 boids in a
// wrap-around 100 by 100 box, 600 steps, neighbour radius 10, separation radius 3, constant speed. Polarisation (length
// of the mean heading, 0 random, 1 all aligned): random start expectation 1/sqrt(150) = 0.082; alignment weight 0 ->
// 0.081; 0.25 -> 0.637; 0.5 -> 0.995; 1.0 -> 0.990; 2.0 -> 0.990. Separation off: median nearest-neighbour distance
// 0.20 and 90.0 per cent of boids within 1 unit of another; separation on: 2.58 and 0 per cent. Seeds 1 to 3 at
// default weights: 1.000, 0.991, 0.980. Lesson family: agent-based emergence (boids) and measuring an emergent
// property with an order parameter; screened 26 September 2026 (boids, flocking: 0 lesson hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (1,215,659, our sum of ten councils); ONS built-up
// areas, all 34 above 5,000 inside the county (Plymouth BUA spans Plymouth and South Hams). Dartmoor National Park
// Authority pages 403 (letterboxing idea dropped); Plymouth Marine Laboratory 403. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'DEVON', blurb: 'Ten councils, thirty-four towns, and a shoal of simulated fish that organises itself from three simple rules.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-devon',
  code: 'dvn',
  accent: '#0E375C',
  accentRationale: 'Devon: a deep Sound blue from the solver (9.84:1 on the lightest paper), greener than the navy county accents',
  pageType: 'governorate',
  place: {
    name: 'Devon',
    eyebrow: 'County of Devon',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South West England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Exeter', href: '/best-coding-class-in-exeter' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Devon',
  title: 'Coding Classes in Devon | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, game making and maths classes across Devon, from Plymouth, Exeter and Torquay to Exmouth, Barnstaple, Newton Abbot and Tiverton.',
  ogDescription: 'Coding classes for every Devon town, and a Plymouth-inspired simulation: 150 digital fish, three simple rules, and a shoal that forms by itself.',
  twitterDescription: 'Devon coding, Python and game-making classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'game-development-masterclass-for-kids',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Simulation Classes for Devon',
    description: 'Ability-placed online coding, Python, game development, algorithms and mathematics for children, teenagers and adults across Plymouth, Torbay and the eight Devon districts, taught live in English.'
  },

  h1: 'Coding classes in Devon',
  capsuleQ: 'What are the best coding classes in Devon?',
  capsule: 'Devon is ten councils, Plymouth, Torbay and eight districts, with 1,215,659 people at the 2021 Census. Plymouth is the largest place by a long way, then Exeter, the Torbay towns of Paignton and Torquay, and then Exmouth, Barnstaple and Newton Abbot, with market towns and villages across two coasts, Dartmoor and Exmoor. Our lessons reach every one of them in the same way. A teacher based in India teaches live on video; we place learners by skill rather than by age; anyone from 6 to 67 is welcome; groups have five to ten learners, or you can learn one to one. We teach programming, Python, game making, algorithms and maths. The Devon project is a simulation of a shoal of fish. You pay nothing for the first lesson; after that it is USD 100 a month in a group or USD 150 with a private teacher.',
  lead: 'Anyone who has watched a shoal in the tanks at the National Marine Aquarium in Plymouth has seen something that looks planned: hundreds of fish turning together as if one mind were steering. In 1986 Craig Reynolds showed that no mind is needed. His computer model gave each simulated creature, which he called a boid, just three rules about its nearest neighbours: do not crowd them, head the way they are heading, and move towards where they are. Put enough boids together and a flock or shoal appears on its own. This page\'s project builds that model, then does what a scientist would do next: measures the shoal, and switches each rule off to see what it was really doing.',
  wa: 'Hello Modern Age Coders, please could I book a free lesson for a learner in Devon?',

  picks: {
    eyebrow: 'Courses for Devon',
    h2: 'Devon learners often start here',
    intro: 'A nine-year-old in Brixham who wants to make an underwater game, a Year 7 in Tiverton who has just discovered Python, a Year 11 in Exmouth who likes hard problems, and a retired engineer in Sidmouth who always meant to learn to program. Each starts with a free lesson.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games in Scratch, then Roblox and Minecraft, including characters that move by their own rules.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed Python, with lists of creatures, loops that move them and simple drawing.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Logic, data structures, algorithms and dynamic programming, taught so the ideas stick.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from scratch for grown-ups, on to classes, files and exceptions, with nothing assumed.' }
    ]
  },

  sections: [
    {
      id: 'devon', tint: '', eyebrow: 'Devon in numbers',
      h2: 'Ten councils, 1,215,659 people and two coasts',
      intro: 'Council populations come from the 2021 Census on Nomis. For towns we give the ONS built-up areas and confirmed each against census output areas added up by us.',
      body: [
        { kind: 'table', caption: 'Plymouth, Torbay and the eight Devon districts, usual residents at Census 2021, largest first', head: ['Council', 'Usual residents', 'Main towns'], rows: [
          ['Plymouth', '264,695', 'Plymouth'],
          ['East Devon', '150,828', 'Exmouth, Sidmouth, Honiton, Seaton, Axminster'],
          ['Torbay', '139,324', 'Paignton, Torquay, Brixham'],
          ['Teignbridge', '134,803', 'Newton Abbot, Teignmouth, Dawlish, Kingsteignton'],
          ['Exeter', '130,709', 'Exeter'],
          ['North Devon', '98,611', 'Barnstaple, Ilfracombe, Braunton, South Molton'],
          ['South Hams', '88,627', 'Ivybridge, Totnes, Kingsbridge, Dartmouth'],
          ['Mid Devon', '82,852', 'Tiverton, Cullompton, Crediton'],
          ['Torridge', '68,114', 'Bideford, Great Torrington, Northam'],
          ['West Devon', '57,096', 'Tavistock, Okehampton']
        ] },
        { kind: 'p', text: 'Plymouth is a city of over a quarter of a million, and its built-up area edges into South Hams. Exeter is the other city, and between them sit the three Torbay towns. Beyond those, Devon is small towns separated by moors and long coastal roads, with Ilfracombe on the north coast and Dartmouth on the south. That spread is why a weekly club in one town rarely serves the rest.' },
        { kind: 'table', caption: 'Every Devon built-up area above 5,000 residents at Census 2021, largest first', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Plymouth', '266,955', 'Ilfracombe', '9,200'],
          ['Exeter', '126,175', 'Okehampton', '9,110'],
          ['Paignton', '67,520', 'Cullompton', '8,895'],
          ['Torquay', '52,035', 'Crediton', '7,975'],
          ['Exmouth', '35,500', 'Seaton', '7,435'],
          ['Barnstaple', '31,275', 'Braunton', '6,610'],
          ['Newton Abbot', '29,650', 'Bovey Tracey', '6,240'],
          ['Tiverton', '19,710', 'South Molton', '6,225'],
          ['Bideford', '19,490', 'Axminster', '6,095'],
          ['Brixham', '17,840', 'Ottery St Mary', '6,045'],
          ['Teignmouth', '15,315', 'Great Torrington', '5,955'],
          ['Sidmouth', '13,265', 'Kingsbridge', '5,680'],
          ['Tavistock', '12,670', 'Dartmouth', '5,260'],
          ['Ivybridge', '12,490', 'Budleigh Salterton', '5,235'],
          ['Honiton', '12,155', 'Fremington', '5,230'],
          ['Kingsteignton', '11,940', 'Northam', '5,190'],
          ['Dawlish', '11,800', 'Totnes', '9,215']
        ] },
        { kind: 'p', text: 'All thirty-four agree with our own output-area count to within rounding and every one lies inside the county. School calendars are set by Devon County Council, Plymouth, Torbay and individual academies; we did not read them, so we agree lesson breaks with each family. The selective schools in Plymouth and Torbay have separate maths pages for <a class="cg-inline-link" href="/11-plus-maths-tuition-plymouth">Plymouth</a> and <a class="cg-inline-link" href="/11-plus-maths-tuition-torbay">Torbay</a>; nothing here is school advice.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Devon project',
      h2: 'Three rules, 150 fish, and a shoal nobody designed',
      intro: 'Reynolds\' boids, built in Python, then measured with a single number that says how organised the shoal is.',
      body: [
        { kind: 'p', text: 'Each simulated fish knows only its neighbours within a short distance. Every step it applies Reynolds\' three rules, in his words: separation, "steer to avoid crowding local flockmates"; alignment, "steer towards the average heading of local flockmates"; and cohesion, "steer to move toward the average position of local flockmates". Then it swims on at a constant speed. The learner starts 150 fish in random places, facing random directions, in a 100 by 100 tank whose edges wrap round, and runs 600 steps. Watching the screen, a shoal forms. But how do you prove it?' },
        { kind: 'p', text: 'The answer is an order parameter, a single number that measures how organised the whole group is. Turn every fish\'s heading into an arrow of length one and average the arrows. If the fish point every which way, the arrows cancel and the average is short; if they all point the same way, it has length one. For 150 random headings the expected length is about one over the square root of 150, which is 0.082. That gives the learner a baseline, and a way to test each rule by turning it up or down.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: 150 boids, 600 steps, seed 20260926', head: ['Setting', 'Order (0 random, 1 all aligned)', 'What the shoal does'], rows: [
          ['Alignment switched off', '0.081', 'No better than random, even though fish cluster'],
          ['Alignment at a quarter strength', '0.637', 'Partly organised: groups swimming several ways'],
          ['Alignment at half strength', '0.995', 'One shoal, all heading the same way'],
          ['Separation switched off', '0.944 order, 90.0 per cent crowded', 'Fish pile onto each other: median gap 0.20 units'],
          ['All three rules on', '0.990 order, 0 per cent crowded', 'An organised shoal with a median gap of 2.58 units']
        ] },
        { kind: 'p', text: 'Two lessons come out of the table. The first is the sudden switch: between a quarter and a half strength of one small rule, the group goes from half-organised to almost perfectly aligned, a tipping point that no single fish decides. The second is what each rule is for. Without alignment there is clustering but no shared direction. Without separation the order stays high, but 90 per cent of fish end up within one unit of another, crammed together. Only all three together give a shoal that looks and behaves like the real thing.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Make a few sprites follow a leader in Scratch, then try following the average of nearby sprites instead and describe the difference.' },
          { h3: 'Ages 13 to 16', p: 'Write the three rules in Python, draw the shoal, and add the order parameter so the computer can tell you when it has formed.' },
          { h3: 'Ages 16 and up', p: 'Sweep the alignment strength finely, plot the order against it, find the tipping point, and test whether it moves with the number of fish.' }
        ] },
        { kind: 'callout', h3: 'What the model is and is not', p: 'The rules are Craig Reynolds\'; the weights, tank, numbers of fish and steps are values we chose, and the results come from our own code with a fixed seed. Boids is a model of how coordinated movement can arise, not a description of how any particular species of fish behaves.' }
      ]
    },
    {
      id: 'plymouth', tint: 'deep', eyebrow: 'Why Plymouth',
      h2: 'Britain\'s largest aquarium and a marine laboratory on Citadel Hill',
      intro: 'The Devon link, from the organisations\' own pages, and the model\'s origin in its inventor\'s words.',
      body: [
        { kind: 'table', caption: 'Plymouth\'s marine science and the boids model, as each describes itself', head: ['Source', 'What it says'], rows: [
          ['National Marine Aquarium', 'Located in Plymouth; the largest aquarium in the UK and home to over 4,000 animals.'],
          ['Marine Biological Association', 'Based at The Laboratory, Citadel Hill, Plymouth.'],
          ['Craig Reynolds', '"In 1986 I made a computer model of coordinated animal motion such as bird flocks and fish schools."'],
          ['Craig Reynolds', 'The model rests on three steering behaviours: separation, alignment and cohesion.'],
          ['Craig Reynolds', 'The 1992 film Batman Returns was the first of many films to use the model, for bat swarms and penguin flocks.']
        ] },
        { kind: 'p', text: 'Plymouth has made marine science a local specialism, and a coding lesson built on shoaling gives a Devon learner a direct line from the tanks on the waterfront to one of the most elegant ideas in computing: that complicated group behaviour can come from simple individual rules. The same idea sits behind traffic models, crowd simulations, swarm robotics and the animated crowds in films.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the National Marine Aquarium, the Marine Biological Association, Craig Reynolds or any Devon council, and nothing on this page implies one. Their facts and rules are theirs; the simulation and any mistake in it are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-plymouth">Plymouth</a> and <a class="cg-inline-link" href="/best-coding-class-in-exeter">Exeter</a> have their own pages, and <a class="cg-inline-link" href="/coding-classes-in-cornwall">Cornwall</a> is across the Tamar.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How learners grow',
    h2: 'From one moving sprite to a system that organises itself',
    intro: 'The free lesson places each learner by ability. Year group helps, but does not decide.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Sprites with rules', p: 'Scratch creatures that move, turn and react, the first taste of giving a character its own behaviour.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 to 13', h3: 'Many things at once', p: 'Python lists of creatures updated in a loop, and simple drawing so the result can be watched.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Simulation and measurement', p: 'Agent models, vectors and averages, and the habit of measuring what a simulation does rather than just watching it.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Models for real questions', p: 'Adults build simulations and data models in Python for work, with clear statements of what each model assumes.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and emergence',
    h2: 'An AI can write a flocking simulation. Can it tell you which rule matters?',
    intro: 'Only if someone asks it to switch the rules off one at a time and measure.',
    p1: 'Ask a chatbot for a boids program and you will probably get a working one, with a pleasing animation. What you will not get, unless you ask, is evidence: which rule produces the alignment, what happens without separation, where the tipping point is. A simulation that looks right is not the same as one that is understood, and the difference only shows when you measure it.',
    p2: 'A Devon student who has computed 0.081, 0.637 and 0.995 for three settings of one rule knows how to interrogate any model, human-written or machine-written: find a number that captures the behaviour, establish what random looks like, and change one thing at a time. That is how scientists test ideas, and it is exactly the discipline needed to trust or distrust what an AI tool produces.',
    closer: 'So a Devon teenager should learn to code in 2026 not to watch simulations, but to measure them.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Ilfracombe to Dartmouth, with no bus at all',
    intro: 'Devon is wide and its roads are slow in summer. Online, every town is equally close.',
    cells: [
      { h3: 'At your kitchen table', p: 'A kitchen in Braunton, a bedroom in Crediton, a desk in Kingsbridge. The teacher shares the screen and the learner writes the code.' },
      { h3: 'Words from your school', p: 'Year groups, GCSE options and A levels are named just as Devon schools name them, and teaching is in English.' },
      { h3: 'First lesson on the house', p: 'A proper lesson of real work, then an honest recommendation. You will not be asked for card details.' },
      { h3: 'A group at your pace', p: 'Five to ten learners who are at the same point, from many towns and countries, meeting at a sensible hour.' },
      { h3: 'Breaks by arrangement', p: 'Two lessons a week is normal, pausing when your own school breaks up, whichever council or trust set the dates.' },
      { h3: 'UK times only', p: 'Teachers work on India time, 4.5 hours ahead of UK summer time and 5.5 ahead of winter time, but you only ever see UK times.' }
    ],
    spec: { title: 'Why groups are formed by level', p: 'Thirty-four towns spread across moors and coasts mean few places have enough learners at the same stage on the same evening. Level-based groups let an Okehampton learner and a Paignton learner share a class.' }
  },

  fees: {
    h2: 'Fees for Devon',
    intro: 'Every Devon town pays the same, as does every country outside India.',
    first: 'One full lesson of real work, with a recommended level and course at the end.',
    group: 'Roughly eight lessons a month in a group of five to ten at the same level.',
    private: 'Roughly eight lessons a month, one teacher with one learner.',
    closer: 'We bill every family outside India in US dollars; there is no price list in pounds. The first bill comes only after the free lesson has settled a course and weekly slot, and the pricing page explains pausing, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'Reviews families posted on Google',

  book: {
    h2: 'Book a free first lesson',
    intro: 'Tell us an age or school year and one thing the learner loves. The first lesson might be a Scratch game, a first Python loop, or the shoal simulation on this page.',
    success: 'Thank you. We have your Devon request.'
  },

  faq: {
    h2: 'Devon questions',
    intro: 'The county, the shoal project and how lessons work.',
    items: [
      { q: 'How many people live in Devon?', a: 'Plymouth, Torbay and the eight Devon districts had 1,215,659 usual residents at the 2021 Census, according to ONS figures on Nomis. Plymouth was the largest council at 264,695.' },
      { q: 'What are the largest towns in Devon?', a: 'By ONS built-up area: Plymouth 266,955, Exeter 126,175, Paignton 67,520, Torquay 52,035 and Exmouth 35,500. All thirty-four Devon towns above five thousand are listed on this page.' },
      { q: 'What is the shoal project?', a: 'Learners code Craig Reynolds\' boids model, 150 simulated fish following three rules, and measure how organised the shoal is. Switching the alignment rule from off to half strength takes the order from 0.081, no better than random, to 0.995.' },
      { q: 'What are boids?', a: 'Simulated creatures from a model Craig Reynolds made in 1986. Each follows three rules about its neighbours: separation, alignment and cohesion. Together they produce flocking and shoaling without any leader.' },
      { q: 'Why is Plymouth linked to this?', a: 'Plymouth is home to the National Marine Aquarium, which calls itself the largest aquarium in the UK with over 4,000 animals, and to the Marine Biological Association\'s laboratory on Citadel Hill.' },
      { q: 'Is there a classroom in Plymouth or Exeter?', a: 'No. Every lesson is live online, so a learner in Bideford and one in Teignmouth can be in the same class without travelling.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Games and Scratch for young children, typed Python from around ten, algorithms and simulation for teenagers, and Python or data for adults. The free lesson finds the right level.' },
      { q: 'Can my child learn to make games?', a: 'Yes. The game development course for ages 8 to 12 builds real games in Scratch, then Roblox and Minecraft worlds.' },
      { q: 'How much are lessons?', a: 'Your first lesson costs nothing. After that, a place in a group is USD 100 per month and one-to-one lessons are USD 150 per month; there is no sign-up fee and you are not tied in.' },
      { q: 'When are Devon school holidays?', a: 'Devon County Council, Plymouth, Torbay and academies each set dates. We fit lesson breaks around your own school\'s calendar.' }
    ]
  },

  next: {
    eyebrow: 'Beyond Devon',
    h2: 'More pages in the South West and beyond',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-plymouth">Plymouth</a> and <a class="cg-inline-link" href="/best-coding-class-in-exeter">Exeter</a> pages cover the two cities, <a class="cg-inline-link" href="/coding-classes-in-cornwall">Cornwall</a> is next door, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every county and city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Devon and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-plymouth', label: 'Plymouth' },
    { href: '/best-coding-class-in-exeter', label: 'Exeter' }
  ],

  personalityCss: `
.cg-root.cg-dvn .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.1vw, 2.7rem); }
.cg-root.cg-dvn .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-dvn .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-dvn .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dvn .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.017em; }
.cg-root.cg-dvn .cg-table caption { font-style: italic; font-weight: 600; }
.cg-root.cg-dvn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dvn .cg-table th { letter-spacing: 0.04em; text-transform: uppercase; }
.cg-root.cg-dvn .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-dvn .cg-callout { border-left-width: 6px; border-radius: 0 9px 9px 0; }
`,

  dossier: {
    curriculumAuthority: 'Devon (ceremonial: eight districts under Devon County Council plus Plymouth and Torbay). ONS Census 2021 TS001 via Nomis: Plymouth 264,695; East Devon 150,828; Torbay 139,324; Teignbridge 134,803; Exeter 130,709; North Devon 98,611; South Hams 88,627; Mid Devon 82,852; Torridge 68,114; West Devon 57,096; total 1,215,659 (our sum). ONS Census 2021 built-up areas (published; all 34 agree with our OA sums and lie in the county): Plymouth 266,955 (Plymouth, South Hams); Exeter 126,175; Paignton 67,520; Torquay 52,035; Exmouth 35,500; Barnstaple 31,275; Newton Abbot 29,650; Tiverton 19,710; Bideford 19,490; Brixham 17,840; Teignmouth 15,315; Sidmouth 13,265; Tavistock 12,670; Ivybridge 12,490; Honiton 12,155; Kingsteignton 11,940; Dawlish 11,800; Totnes 9,215; Ilfracombe 9,200; Okehampton 9,110; Cullompton 8,895; Crediton 7,975; Seaton 7,435; Braunton 6,610; Bovey Tracey 6,240; South Molton 6,225; Axminster 6,095; Ottery St Mary 6,045; Great Torrington 5,955; Kingsbridge 5,680; Dartmouth 5,260; Budleigh Salterton 5,235; Fremington 5,230; Northam 5,190. National Marine Aquarium, About Us: "located in Britain\'s Ocean City - Plymouth. Not only are we the largest Aquarium in the UK"; "home to over 4,000 animals". Marine Biological Association: The Laboratory, Citadel Hill, Plymouth, Devon PL1 2PB. Craig Reynolds, Boids: "In 1986 I made a computer model of coordinated animal motion such as bird flocks and fish schools"; "Separation: steer to avoid crowding local flockmates"; "Alignment: steer towards the average heading of local flockmates"; "Cohesion: steer to move toward the average position of local flockmates"; "The 1992 Tim Burton film Batman Returns was the first".',
    localProject: 'Agent-based emergence (boids) measured with an order parameter. numpy simulation, seed 20260926: 150 boids, 100 by 100 periodic box, 600 steps, neighbour radius 10, separation radius 3, constant speed 1; weights separation 1.5, alignment 1.0, cohesion 1.0 by default. Polarisation = length of mean unit heading; random expectation 1/sqrt(150) = 0.082. Alignment weight 0: 0.081; 0.25: 0.637; 0.5: 0.995; 1.0: 0.990; 2.0: 0.990. Separation 0: polarisation 0.944, median nearest-neighbour 0.20, 90.0 per cent within 1 unit; separation 1.5: 0.990, median 2.58, 0 per cent. Seeds 1, 2, 3 at defaults: 1.000, 0.991, 0.980. Page states rules are Reynolds\', parameters and results ours, and boids is not a model of a specific species. AI angle: a generated simulation that looks right is not tested until each rule is switched off and measured. Lesson family: agent-based emergence with an order parameter and ablation.',
    requiredMentions: [
      '1,215,659',
      '0.637',
      '0.995',
      '0.081',
      'In 1986 I made a computer model',
      'steer to avoid crowding local flockmates',
      'over 4,000 animals',
      'Citadel Hill',
      'Budleigh Salterton',
      'Great Torrington'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Plymouth, Torbay and the eight Devon districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Devon towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Craig Reynolds, Boids: the 1986 model and its three rules.', url: 'https://www.red3d.com/cwr/boids/' },
      { claim: 'National Marine Aquarium: largest aquarium in the UK, in Plymouth, over 4,000 animals.', url: 'https://www.national-aquarium.co.uk/about-us' },
      { claim: 'Marine Biological Association: The Laboratory, Citadel Hill, Plymouth.', url: 'https://www.mba.ac.uk/about-us/' }
    ],
    rejectedClaims: [
      'Dartmoor letterboxing history: the Dartmoor National Park Authority pages returned 403 on 26 September 2026, so the planned collecting project was dropped.',
      'Plymouth Marine Laboratory facts: its site returned 403, not retried.',
      'How real fish shoals are organised: boids is a general model, and no species-specific claim is made.',
      'Journey times between Devon towns: not read at a transport operator source, so no times are given.',
      'Devon school term dates: set by councils and academies; none read.',
      'Named Devon schools: none is named.'
    ]
  }
};
