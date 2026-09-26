'use strict';
// Gloucestershire (cg- county index, UK cluster Phase 7, row 233). Ceremonial Gloucestershire: six districts under
// Gloucestershire County Council plus South Gloucestershire. Spine: random-looking is not random. GCHQ pages (read raw
// 26 September 2026): Cheltenham, "known affectionately as the Doughnut and it's been the home of our mission since we
// moved here in 2003"; "officially opened by HM Queen Elizabeth II in 2004"; the GCHQ archive "contains around 16
// million historical artefacts"; "GCHQ first came to Cheltenham in the 1950s. The site in Oakley opened in 1952";
// James Ellis joined GCHQ in 1952 and conceived "non-secret encryption"; Malcolm Williamson "devised a method of public
// key exchange". Our run (scratchpad glo/lcg.py, modulus 65,536): a linear congruential generator x -> (a x + c) mod
// 65,536. a = 25,173, c = 13,849: full period 65,536 (Floyd's method, 262,144 function calls); c = 13,848 (even):
// period 16,384; a = 25,172 or a = 4 (from seed 1): falls into a loop of length 1. Outputs from seed 20260926 mod
// 65,536: lowest bit alternates 1, 0, 1, 0 for all 20; second bit repeats every four. Attack: three consecutive
// outputs leave exactly one consistent (a, c), which predicts the next 17 outputs 17 out of 17. Lesson family:
// pseudo-random number generators, period and cycle detection, and predictability; screened (linear congruential,
// pseudo-random: 0 hits; Haringey's Diffie-Hellman lesson is about key exchange, not generators).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (935,500, our sum of seven councils); ONS built-up
// areas with our OA check (Bristol excluded; Kingswood and Fishponds 114,742 of 160,270 inside, printed with a note).
// Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'GLOUCESTERSHIRE', blurb: 'Seven councils, twenty-nine towns, and a lesson from the county of GCHQ: why numbers that look random can be predicted.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-gloucestershire',
  code: 'gls',
  accent: '#5C3C46',
  accentRationale: 'Gloucestershire: a Cotswold-dusk plum brown from the solver (7.73:1 on the darkest paper tint), browner than the UK purples',
  pageType: 'governorate',
  place: {
    name: 'Gloucestershire',
    eyebrow: 'County of Gloucestershire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South West England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Gloucester', href: '/best-coding-class-in-gloucester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Gloucestershire',
  title: 'Coding Classes in Gloucestershire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, cyber security and maths classes across Gloucestershire, from Gloucester and Cheltenham to Yate, Stroud, Cirencester and Tewkesbury.',
  ogDescription: 'Coding classes for every Gloucestershire town, and a project from GCHQ country: build a random number generator, then predict its every output from three numbers.',
  twitterDescription: 'Gloucestershire coding, Python and cyber security classes for ages 6 to 67, live online. Free first lesson.',
  ogImageCourse: 'cybersecurity-course-for-teens-ethical-defensive',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Cyber Security Classes for Gloucestershire',
    description: 'Ability-placed online coding, Python, cyber security, algorithms and mathematics for children, teenagers and adults across the seven Gloucestershire councils, taught live in English.'
  },

  h1: 'Coding classes in Gloucestershire',
  capsuleQ: 'What are the best coding classes in Gloucestershire?',
  capsule: 'Gloucestershire as a ceremonial county runs from the Forest of Dean to the Cotswolds and down to the edge of Bristol: seven councils and 935,500 people at the 2021 Census. Gloucester and Cheltenham are the two big towns, then Yate, Stroud, Bradley Stoke and Cirencester, with dozens of market towns and villages in the valleys. We teach every one of them in the same way. Every class happens live on a video call with a teacher based in India; skills, not birthdays, decide where a learner starts; anyone aged 6 to 67 can join; and a learner can be one of five to ten in a group or have a teacher all to themselves. Topics include programming, Python, cyber security, algorithms and maths. The Gloucestershire project begins in Cheltenham. Lesson one is free. Continuing costs USD 100 each month for group teaching or USD 150 each month for private teaching.',
  lead: 'GCHQ has been in Cheltenham since the 1950s, and its headquarters, known as the Doughnut, has been home since 2003. Codes and keys depend on something that sounds simple and is not: random numbers that nobody can guess. Computers cannot flip coins, so they use formulas that produce numbers which look random. This page\'s project builds the oldest and simplest such formula, then plays the codebreaker. It finds that the numbers repeat, that some of their digits follow an obvious pattern, and that three outputs in a row are enough to predict every number that follows. The lesson is the same one professional codemakers learned long ago: looking random is not the same as being unpredictable.',
  wa: 'Hello Modern Age Coders, please could we book a free lesson for a learner in Gloucestershire?',

  picks: {
    eyebrow: 'Courses for Gloucestershire',
    h2: 'Gloucestershire learners often begin here',
    intro: 'A seven-year-old in Tetbury who loves dice games, a Year 7 in Lydney writing a first Python program, a Year 10 in Cheltenham fascinated by codes, and a developer in Bradley Stoke who wants a deeper grip on algorithms. Each begins with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch games with dice and random events, where children first meet a computer "picking" a number.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Real Python for children, with the random module used and then questioned: where do those numbers come from?' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', band: 'Ages 13 to 18', note: 'Defensive, ethical security, from paper ciphers to the HTTPS padlock, with instructor-built puzzles.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Adults', note: 'Arrays to graphs to dynamic programming for adults, including cycle detection and the reasoning behind it.' }
    ]
  },

  sections: [
    {
      id: 'gloucestershire', tint: '', eyebrow: 'Gloucestershire in figures',
      h2: 'Seven councils, 935,500 people, from the Forest to the Cotswolds',
      intro: 'Each council\'s 2021 Census total is from Nomis. Towns are the ONS built-up areas, and we counted census output areas ourselves to see which towns reach over the county line.',
      body: [
        { kind: 'table', caption: 'The seven councils of ceremonial Gloucestershire, usual residents at Census 2021, largest first', head: ['Council', 'Usual residents', 'Main towns'], rows: [
          ['South Gloucestershire', '290,424', 'Yate, Bradley Stoke, Patchway, Thornbury, Filton, Kingswood'],
          ['Gloucester', '132,416', 'Gloucester'],
          ['Stroud', '121,104', 'Stroud, Stonehouse, Dursley, Cam, Nailsworth'],
          ['Cheltenham', '118,836', 'Cheltenham'],
          ['Tewkesbury', '94,884', 'Bishop\'s Cleeve, Tewkesbury, Churchdown'],
          ['Cotswold', '90,832', 'Cirencester, Tetbury, Moreton-in-Marsh'],
          ['Forest of Dean', '87,004', 'Lydney, Cinderford, Newent, Coleford']
        ] },
        { kind: 'p', text: 'South Gloucestershire, which has its own unitary council, holds almost a third of the county\'s people, most of them on the northern edge of Bristol. The Gloucestershire County Council area is a different place: two large towns, Gloucester and Cheltenham, whose built-up areas each spill into Tewkesbury district, and then valleys and wolds of small towns. A teenager in Cinderford and one in Moreton-in-Marsh live in the same county and a very long way apart.' },
        { kind: 'table', caption: 'Gloucestershire built-up areas above 5,000 residents, 2021 Census, largest first; the city of Bristol is left out', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Kingswood and Fishponds', '160,270', 'Brockworth', '12,005'],
          ['Gloucester', '118,555', 'Filton', '10,960'],
          ['Cheltenham', '115,940', 'Lydney', '9,660'],
          ['Yate', '28,350', 'Cinderford', '8,775'],
          ['Stroud', '26,080', 'Stonehouse', '8,300'],
          ['Bradley Stoke', '25,200', 'Chipping Sodbury', '8,025'],
          ['Quedgeley and Hardwicke', '21,125', 'Dursley', '7,935'],
          ['Cirencester', '17,715', 'Cam', '7,730'],
          ['Patchway', '16,520', 'Chalford', '6,660'],
          ['Bishop\'s Cleeve', '16,325', 'Tetbury', '6,455'],
          ['Frampton Cotterell and Winterbourne', '14,970', 'Nailsworth', '5,660'],
          ['Thornbury', '14,485', 'Newent', '5,360'],
          ['Tewkesbury', '14,390', 'Coleford', '5,020'],
          ['Churchdown', '13,480', 'Moreton-in-Marsh', '5,010'],
          ['Stoke Gifford', '13,470', '', '']
        ] },
        { kind: 'p', text: 'Every row agrees with our own output-area count to within rounding except the first. Kingswood and Fishponds is a built-up area of 160,270 that crosses from South Gloucestershire into the city of Bristol; about 114,700 of its residents are on the Gloucestershire side, and the table prints the ONS total for the whole place. Bristol itself, of which only a sliver reaches into South Gloucestershire, is left out. School calendars are set by the two councils and by academies; we did not read them, and the county\'s selective schools have <a class="cg-inline-link" href="/11-plus-maths-tuition-gloucestershire">a separate maths page</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Gloucestershire project',
      h2: 'A random number generator, and three numbers that break it',
      intro: 'The simplest pseudo-random formula, three tests of how random it really is, and an attack a fifteen-year-old can carry out.',
      body: [
        { kind: 'p', text: 'A linear congruential generator is one line of code: take the last number, multiply it by a constant a, add another constant c, and keep the remainder after dividing by 65,536. The output jumps around convincingly. The learner starts with a = 25,173 and c = 13,849, which we picked, and runs three tests. The first asks how long before the numbers repeat. For that they use Floyd\'s method, a tortoise that moves one step and a hare that moves two, which finds the loop without storing a single earlier number.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: the same one-line generator with different constants, modulus 65,536', head: ['Constants', 'Numbers before repeating', 'Verdict'], rows: [
          ['a = 25,173, c = 13,849', '65,536, every possible value', 'The longest cycle possible at this size'],
          ['a = 25,173, c = 13,848 (even)', '16,384', 'A quarter of the values never appear'],
          ['a = 25,172 (even multiplier)', 'Falls into a loop of length 1', 'Useless: it gets stuck on one number'],
          ['a = 4, c = 1', 'Falls into a loop of length 1', 'Useless for the same reason']
        ] },
        { kind: 'p', text: 'The second test looks at single bits. With the good constants, the lowest bit of the output goes 1, 0, 1, 0, 1, 0 for all twenty numbers we printed, and the next bit repeats every four. The numbers look random as a whole, but their last binary digit is as predictable as a ticking clock. Anyone who used that bit to decide a coin toss would lose every time to someone who knew.' },
        { kind: 'p', text: 'The third test is the attack. Suppose you know the formula\'s shape and the 65,536, but not a or c. Watch three outputs in a row. The difference between the second and third must be a times the difference between the first and second, which pins down a; then c follows. In our run, exactly one pair of constants fits three observed numbers, and it predicts the next 17 outputs, 17 out of 17. A generator like this is fine for a dice game. For a password or a key, it is a disaster.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Write the one-line generator in Python, print its first twenty numbers, and write out each in binary to spot the last-digit pattern.' },
          { h3: 'Ages 13 to 16', p: 'Implement Floyd\'s tortoise and hare, find the period for several choices of a and c, and explain which choices fail.' },
          { h3: 'Ages 16 and up', p: 'Recover a and c from three outputs by modular arithmetic, predict the rest, and read why real cryptography uses different generators.' }
        ] },
        { kind: 'callout', h3: 'What this is and is not', p: 'This is a teaching generator with constants we chose, attacked in a way described in any cryptography textbook. It is not how GCHQ or any modern system generates keys, and nothing here is a technique for attacking real systems. The GCHQ facts come from GCHQ\'s own pages.' }
      ]
    },
    {
      id: 'cheltenham', tint: 'deep', eyebrow: 'Why Cheltenham',
      h2: 'The Doughnut, and the county\'s place in the history of codes',
      intro: 'The Gloucestershire link, in GCHQ\'s own words.',
      body: [
        { kind: 'table', caption: 'GCHQ in Gloucestershire, from GCHQ\'s own pages', head: ['Topic', 'What GCHQ says'], rows: [
          ['Arriving', 'GCHQ first came to Cheltenham in the 1950s; the site in Oakley opened in 1952.'],
          ['The Doughnut', 'Its Cheltenham headquarters, known affectionately as the Doughnut, has been home since the move there in 2003.'],
          ['Opening', 'The HQ was officially opened by HM Queen Elizabeth II in 2004.'],
          ['The archive', 'The GCHQ archive contains around 16 million historical artefacts.'],
          ['Public key cryptography', 'James Ellis, who joined in 1952, conceived "non-secret encryption"; Malcolm Williamson devised a method of public key exchange.']
        ] },
        { kind: 'p', text: 'GCHQ\'s account of its own history makes the point this project teaches: the ideas that protect every online payment today came from mathematicians asking whether something that looked impossible could be done, and checking carefully whether something that looked safe really was. A predictable generator is exactly the kind of thing that looks safe until someone checks.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with GCHQ or with any Gloucestershire council, and nothing on this page suggests one. The facts are GCHQ\'s own; the generator, the attack and any errors are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-gloucester">Gloucester</a> has its own page, <a class="cg-inline-link" href="/coding-classes-in-oxfordshire">Oxfordshire</a> and <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a> lie to the east, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists the rest.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From rolling dice on screen to breaking a weak generator',
    intro: 'The free lesson places each learner. Age suggests a level; ability decides it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Chance in games', p: 'Scratch games with random events, where children see a computer pick numbers and start to wonder how.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Numbers and binary', p: 'Python with remainders, binary and simple formulas, the pieces a random generator is built from.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Security thinking', p: 'Ethical cyber security and algorithms, with the habit of asking how a system could be predicted or broken.', courses: ['cybersecurity-course-for-teens-ethical-defensive', 'competitive-programming-for-teens-course'] },
      { band: 'Ages 18 to 67', h3: 'Algorithms that hold up', p: 'Data structures and algorithms for adults, including cycle detection, number theory and the limits of shortcuts.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and randomness',
    h2: 'Ask an AI for a random password generator. Will it use a random source that cannot be predicted?',
    intro: 'Not always, and the code works either way until someone attacks it.',
    p1: 'Generated code often reaches for the most familiar random function in a language, which is usually designed for games and simulations, not for secrets. The resulting password generator runs perfectly and produces strings that look random, and nothing in a quick test reveals whether the next one can be predicted. The difference only matters when an attacker is watching, which is exactly when it matters most.',
    p2: 'A Gloucestershire student who has predicted seventeen numbers from three knows to ask where randomness comes from, whether it is meant for security, and what an attacker could learn from a few outputs. Those questions are how security reviewers read any code, and they are the questions a hurried prompt leaves out.',
    closer: 'So a Gloucestershire teenager should learn to code in 2026, in the county of the Doughnut, to be able to tell random-looking from unpredictable.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'Coleford to Chipping Sodbury, from your own desk',
    intro: 'Gloucestershire\'s valleys and wolds make travel slow. Online lessons skip it entirely.',
    cells: [
      { h3: 'At home, live', p: 'A bedroom in Newent, a kitchen in Nailsworth, a desk in Thornbury. The teacher shares a screen and the learner codes.' },
      { h3: 'School terms we use', p: 'Year groups, GCSE options and A levels are named just as Gloucestershire schools name them, in English.' },
      { h3: 'The first lesson is free', p: 'A real lesson with real work and an honest recommendation. You will not be asked to pay anything.' },
      { h3: 'Grouped by skill', p: 'Between five and ten classmates who are at your stage, from different towns and countries, so nobody waits and nobody is lost.' },
      { h3: 'Term-time rhythm', p: 'Most learners take two sessions a week and stop for the same holidays their school takes.' },
      { h3: 'Clock times made simple', p: 'We run on Indian Standard Time at our end, yet every lesson slot we send a Gloucestershire family is written only in UK time, summer or winter.' }
    ],
    spec: { title: 'Why groups are formed by level', p: 'Twenty-nine towns spread over valleys, wolds and suburbs rarely give any one place enough learners at the same stage. Level-based groups let a Stroud learner and a Yate learner share a class.' }
  },

  fees: {
    h2: 'Gloucestershire fees',
    intro: 'One set of fees across the county, and for every country other than India.',
    first: 'A complete lesson of real work, with a recommended level and course.',
    group: 'About eight lessons a month, five to ten learners at one level.',
    private: 'About eight lessons a month with a teacher and one learner.',
    closer: 'Families outside India are billed in US dollars, with no pound list. Payment begins only after the free lesson has agreed a course and a weekly time, and the pricing page covers pauses, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Six Google reviews from our families',

  book: {
    h2: 'Request a free lesson',
    intro: 'An age or school year and one interest will do. The first lesson might be a Scratch dice game, a first Python program, or the generator and its three-number attack on this page.',
    success: 'Thank you. Your Gloucestershire request has been received.'
  },

  faq: {
    h2: 'Gloucestershire questions',
    intro: 'The county, the random numbers project and our lessons.',
    items: [
      { q: 'How many people live in Gloucestershire?', a: 'The six Gloucestershire districts and South Gloucestershire held 935,500 usual residents at the 2021 Census, from ONS data on Nomis. South Gloucestershire was the largest council at 290,424.' },
      { q: 'What are the largest towns in Gloucestershire?', a: 'By ONS built-up area: Kingswood and Fishponds 160,270 (partly in Bristol), Gloucester 118,555, Cheltenham 115,940, Yate 28,350 and Stroud 26,080. The page lists twenty-nine above five thousand.' },
      { q: 'What is the random numbers project?', a: 'Learners build a linear congruential generator, find how soon it repeats with Floyd\'s method, spot the pattern in its lowest bit, and show that three outputs are enough to predict the next 17 out of 17.' },
      { q: 'Why does predictability matter?', a: 'Keys and passwords are only safe if nobody can guess them. A generator whose next output can be worked out from a few earlier ones gives an attacker that guess.' },
      { q: 'When did GCHQ come to Cheltenham?', a: 'GCHQ says it first came to Cheltenham in the 1950s, with the Oakley site opening in 1952, and moved into its headquarters, known as the Doughnut, in 2003.' },
      { q: 'Is there a classroom in Gloucester or Cheltenham?', a: 'No building exists; every session runs over live video, which lets a Cirencester learner and a Lydney learner study side by side from home.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Scratch for young children, typed Python from about ten, cyber security and algorithms for teenagers, and algorithms or Python for adults. The free lesson sets the level.' },
      { q: 'Do you teach cyber security to teenagers?', a: 'Yes, as a defensive and ethical course for ages 13 to 18, from paper ciphers to the HTTPS padlock, with instructor-built puzzles.' },
      { q: 'What does it cost?', a: 'The first lesson costs nothing. Stay on and you pay USD 100 monthly for a group seat, or USD 150 monthly for one-to-one lessons; there is no joining charge and no contract length.' },
      { q: 'When are Gloucestershire school holidays?', a: 'Gloucestershire County Council, South Gloucestershire and academies set their own dates. We arrange lesson breaks around your school\'s calendar.' }
    ]
  },

  next: {
    eyebrow: 'More UK pages',
    h2: 'Around Gloucestershire',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-gloucester">Gloucester</a> page covers the city. Neighbouring county pages include <a class="cg-inline-link" href="/coding-classes-in-oxfordshire">Oxfordshire</a> and <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has the full list.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Gloucestershire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-gloucester', label: 'Gloucester' },
    { href: '/11-plus-maths-tuition-gloucestershire', label: 'Gloucestershire 11 plus' }
  ],

  personalityCss: `
.cg-root.cg-gls .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-gls .cg-hero h1 { font-weight: 700; letter-spacing: -0.021em; line-height: 1.05; }
.cg-root.cg-gls .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-gls .cg-eyebrow { letter-spacing: 0.2em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-gls .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.015em; }
.cg-root.cg-gls .cg-table caption { font-weight: 700; font-style: italic; }
.cg-root.cg-gls .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gls .cg-table th { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-gls .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-gls .cg-callout { border-left-width: 7px; border-radius: 0 9px 9px 0; }
`,

  dossier: {
    curriculumAuthority: 'Gloucestershire (ceremonial: Cheltenham, Cotswold, Forest of Dean, Gloucester, Stroud and Tewkesbury under Gloucestershire County Council, plus South Gloucestershire). ONS Census 2021 TS001 via Nomis: South Gloucestershire 290,424; Gloucester 132,416; Stroud 121,104; Cheltenham 118,836; Tewkesbury 94,884; Cotswold 90,832; Forest of Dean 87,004; total 935,500 (our sum). ONS Census 2021 built-up areas (published; checked with our OA sums): Kingswood and Fishponds 160,270 (114,742 inside); Gloucester 118,555 (Gloucester, Tewkesbury); Cheltenham 115,940 (Cheltenham, Tewkesbury); Yate 28,350; Stroud 26,080; Bradley Stoke 25,200; Quedgeley and Hardwicke 21,125; Cirencester 17,715; Patchway 16,520; Bishop\'s Cleeve 16,325; Frampton Cotterell and Winterbourne 14,970; Thornbury 14,485; Tewkesbury 14,390; Churchdown 13,480; Stoke Gifford 13,470; Brockworth 12,005; Filton 10,960; Lydney 9,660; Cinderford 8,775; Stonehouse 8,300; Chipping Sodbury 8,025; Dursley 7,935; Cam 7,730; Chalford 6,660; Tetbury 6,455; Nailsworth 5,660; Newent 5,360; Coleford 5,020; Moreton-in-Marsh 5,010. Bristol (2,180 in South Gloucestershire) excluded. GCHQ Cheltenham: "known affectionately as the Doughnut and it\'s been the home of our mission since we moved here in 2003"; "officially opened by HM Queen Elizabeth II in 2004"; "the GCHQ archive which contains around 16 million historical artefacts"; "GCHQ first came to Cheltenham in the 1950s. The site in Oakley opened in 1952". GCHQ, James Ellis: "joined GCHQ in 1952"; "Conceived of the possibility of \'non-secret encryption\'". GCHQ, Malcolm Williamson: "devised a method of public key exchange".',
    localProject: 'Pseudo-random generators: period, cycle detection, predictability. LCG x -> (a x + c) mod 65,536. a 25,173, c 13,849: period 65,536 via Floyd (262,144 function calls); c 13,848: period 16,384; a 25,172 (c 13,849) and a 4 (c 1), from seed 1: loop of length 1. From seed 20260926 mod 65,536, first outputs 20143, 21556, 4957, 15866, 32283, ...; lowest bit 1,0,1,0 for all 20; second bit period 4. Attack: with known modulus, (x3 - x2) = a (x2 - x1) mod 65,536 with gcd(x2 - x1, 65,536) = 1 gives exactly one a; c = x2 - a x1; predicts next 17 of 17. Page states the constants are ours, the attack is textbook, and it is not how GCHQ or modern systems generate keys. AI angle: generated password code uses non-cryptographic random sources. Lesson family: PRNG period, Floyd cycle detection and predictability; distinct from Haringey (Diffie-Hellman).',
    requiredMentions: [
      '935,500',
      'the Doughnut',
      '16 million historical artefacts',
      'opened in 1952',
      'Malcolm Williamson',
      'Frampton Cotterell and Winterbourne',
      'Quedgeley and Hardwicke',
      '17 out of 17',
      'linear congruential',
      'Moreton-in-Marsh'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the seven Gloucestershire councils, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Gloucestershire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'GCHQ Cheltenham: the Doughnut since 2003, opened 2004, archive of around 16 million artefacts, Oakley site 1952.', url: 'https://www.gchq.gov.uk/section/locations/cheltenham' },
      { claim: 'GCHQ, James Ellis: joined 1952, non-secret encryption.', url: 'https://www.gchq.gov.uk/person/james-ellis' },
      { claim: 'GCHQ, Malcolm Williamson: public key exchange.', url: 'https://www.gchq.gov.uk/person/malcolm-williamson' }
    ],
    rejectedClaims: [
      'How GCHQ generates random numbers or keys: not described on the pages read, and the page says the teaching generator is not how GCHQ works.',
      'Bristol as a Gloucestershire place: it is a separate city and county; only a sliver of its built-up area lies in South Gloucestershire.',
      'Gloucestershire school term dates: set by two councils and academies; none read.',
      'Details of any intelligence operations: out of scope and not discussed.',
      'Personal details of GCHQ staff beyond the published biographies: not repeated.',
      'Named Gloucestershire schools: none is named; selective schools are covered on the 11 plus page.'
    ]
  }
};
