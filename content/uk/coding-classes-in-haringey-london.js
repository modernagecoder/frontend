'use strict';
// Haringey (cg- London borough page, UK cluster Phase 5, row 178). Named sources only.
// Spine: a secret agreed in public. Historic England list entry 1268256 (Alexandra Palace including former Alexandra
// Palace Station, Grade II): historic interest includes "the surviving BBC studios where the world's first
// high-definition television programme was transmitted in 1936"; the site tested two rival systems; a 225 ft lattice mast
// gave an aerial height of 460 ft above sea level. Broadcasting is public by design; the Diffie-Hellman key exchange lets
// two people agree a secret over a channel everyone can hear. Toy exchange p 23, g 5, a 6, b 15: A 8, B 19, shared 2.
// Experiment (Python 3.13 on our AMD64 machine, 25 September 2026; random safe primes, seed 20260925; averages of 5
// trials to 24 bits, 3 above): brute force steps / seconds: 12-bit 1,141 / 0.0001; 16-bit 13,277 / 0.0015; 20-bit
// 392,834 / 0.048; 24-bit 5,026,774 / 0.57. Baby-step giant-step steps / seconds: 12-bit 76; 16-bit 266; 20-bit 1,284 /
// 0.0005; 24-bit 4,928 / 0.0009; 32-bit 81,462 / 0.036; 40-bit 1,342,886 / 0.72; 48-bit 18,438,231 / 13.4. Brute force
// at 48 bits is extrapolated, not run. No real-world key sizes are claimed.
// Lesson family: Diffie-Hellman key exchange and the discrete logarithm, brute force vs baby-step giant-step scaling;
// screened 25 September 2026 (Diffie 0, discrete log 0, baby-step 0; RSA pages teach a different system).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'HARINGEY', blurb: 'Alexandra Palace, Bruce Castle and a project on agreeing a secret over a channel the whole world can hear.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-haringey-london',
  code: 'hgy',
  accent: '#2A4646',
  accentRationale: 'Haringey: a deep cathode-ray teal from the solver (8.26:1 on every paper tint), darker and greyer than the Croydon teal',
  pageType: 'governorate',
  place: {
    name: 'Haringey',
    eyebrow: 'London Borough of Haringey',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Haringey, London',
  title: 'Coding Classes in Haringey and Tottenham | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Haringey: Tottenham, Wood Green, Hornsey, Muswell Hill, Crouch End and Highgate. Ages 6 to 67.',
  ogDescription: 'Haringey coding and Python classes, with a cryptography project from Alexandra Palace where learners share a secret in public and then time how long it takes to crack.',
  twitterDescription: 'Haringey coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Haringey Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Haringey, taught live in English.'
  },

  h1: 'Coding classes in Haringey',
  capsuleQ: 'What are the best coding classes in Haringey?',
  capsule: 'Haringey is the north London borough of Tottenham, Wood Green, Hornsey, Muswell Hill, Crouch End, Highgate and Stroud Green, with 264,238 residents at the 2021 Census and Alexandra Palace on its hill, where Historic England records the world\'s first high-definition television programme was transmitted in 1936. A worthwhile coding class teaches a learner how the security behind every website actually works, and this page does that with cryptography: two people agree a secret number while everyone listens, then learners time how long an eavesdropper would need to work it out. Teachers based in India teach live on video, for learners aged 6 to 67, one to one or in classes of five to ten at the same level. The opening lesson is free; afterwards it is USD 100 a month for a class place or USD 150 a month for private teaching.',
  lead: 'Historic England lists Alexandra Palace partly for the BBC studios where, in 1936, the world\'s first high-definition television programme was transmitted, from a lattice mast that put the aerial 460 feet above sea level. Broadcasting is public by design: anyone with a set could watch. Our learners take on a puzzle that sounds impossible in that setting. Can two people agree a secret number when everything they say is broadcast to the world? The Diffie-Hellman key exchange says yes, using a little modular arithmetic that a Year 9 pupil can follow. Then learners switch sides, become the eavesdropper, and time their own attacks. Each extra bit of key doubles the brute-force work; a cleverer attack called baby-step giant-step square-roots it.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Haringey.',

  picks: {
    eyebrow: 'Course picks for Haringey',
    h2: 'Where Haringey learners start',
    intro: 'Picture a Year 3 child in Muswell Hill who writes secret notes in code, a Year 9 pupil in Tottenham who wonders how the padlock in the browser works, a Year 13 student in Crouch End thinking about cyber security at university, and a small business owner in Wood Green who wants to understand what keeps customer data safe. Each can start with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch secret-message game with a key that shifts letters, and a first idea of why keys matter.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with remainders: clock arithmetic, powers that wrap around, and a tiny shared secret.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including Diffie-Hellman, brute force and baby-step giant-step on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who handle sensitive data and want a clear picture of how encryption keys are agreed and attacked.' }
    ]
  },

  sections: [
    {
      id: 'haringey', tint: '', eyebrow: 'Haringey in numbers',
      h2: '264,238 residents and six Grade I entries',
      intro: 'Each figure comes from the organisation named, or from our count of what it publishes.',
      body: [
        { kind: 'table', caption: 'Haringey facts and their sources', head: ['Fact', 'Figure', 'Where it is published'], rows: [
          ['Residents on Census day 2021', '264,238', 'ONS table TS001'],
          ['Heritage List entries in the borough', '286, with 6 at Grade I and 21 at Grade II*', 'Historic England data, counted 25 September 2026'],
          ['Year of the first high-definition television programme at Alexandra Palace', '1936', 'Historic England list entry 1268256'],
          ['Line at Wood Green', 'Piccadilly', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Highpoint', p: 'The two Highpoint blocks in Highgate are both listed at Grade I, a rare distinction for twentieth-century flats.' },
          { h3: 'Castle and house', p: 'Bruce Castle and the tower to its south west are Grade I, as are Cromwell House and its forecourt walls.' },
          { h3: 'Halls and houses', p: 'Hornsey Town Hall, Dial House, Percy House and Byron House are among the borough\'s Grade II* entries.' }
        ] },
        { kind: 'p', text: 'Haringey Council lists libraries at Alexandra Park, Coombes Croft, Highgate, Hornsey, Marcus Garvey, Muswell Hill, Stroud Green and Harringay, and Wood Green, as well as a community and youth music library.' }
      ]
    },
    {
      id: 'exchange', tint: 'tint', eyebrow: 'The idea',
      h2: 'Agreeing a secret while everyone listens',
      intro: 'Diffie-Hellman uses clock arithmetic: numbers that wrap round when they reach a chosen prime, just as hours wrap round at twelve.',
      body: [
        { kind: 'table', caption: 'A toy exchange small enough to check by hand', head: ['Step', 'Alice', 'Bob', 'Heard by everyone?'], rows: [
          ['Agree a prime and a base', 'prime 23, base 5', 'prime 23, base 5', 'Yes'],
          ['Pick a private number', '6', '15', 'No'],
          ['Send base to that power, wrapped at 23', '8', '19', 'Yes'],
          ['Raise what you received to your private number', '19 to the 6th, wrapped: 2', '8 to the 15th, wrapped: 2', 'No: both now hold 2']
        ] },
        { kind: 'p', text: 'Both end up with the same secret, 2, yet the only numbers that crossed the open channel were 23, 5, 8 and 19. An eavesdropper who wants the secret must work backwards from 8 to Alice\'s private 6: find the power that turns 5 into 8, wrapping at 23. That backwards problem is called the discrete logarithm, and nobody knows a fast general way to solve it for large numbers. With a prime of 23 it takes seconds by hand; the project is about what happens as the prime grows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Become the eavesdropper: two attacks, timed',
      intro: 'Learners generate their own primes of increasing size, make keys, and try to recover the private number, first by brute force, then by baby-step giant-step.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Brute force', p: 'Try every power in turn until one matches. On average it takes about half as many steps as the size of the prime.' },
          { h3: '2. Baby-step giant-step', p: 'Store a table of small steps, then take big jumps and look each one up. The work grows only with the square root of the prime, at the price of memory.' },
          { h3: '3. Time it', p: 'Run each attack several times at each key size, record steps and seconds, and plot them on a log scale.' }
        ] },
        { kind: 'table', caption: 'Average steps to crack a toy key, run on our computer on 25 September 2026', head: ['Prime size', 'Brute force', 'Baby-step giant-step', 'Baby-step giant-step time'], rows: [
          ['12 bits', '1,141', '76', 'under a millisecond'],
          ['20 bits', '392,834', '1,284', 'under a millisecond'],
          ['24 bits', '5,026,774 (0.57 s)', '4,928', 'about 1 millisecond'],
          ['32 bits', 'not run', '81,462', 'about 0.04 s'],
          ['40 bits', 'not run', '1,342,886', 'about 0.7 s'],
          ['48 bits', 'not run', '18,438,231', 'about 13 s']
        ] },
        { kind: 'p', text: 'Every four extra bits multiply the brute-force work by about sixteen; the same four bits multiply baby-step giant-step by only about four. At 48 bits the clever attack finishes in about 13 seconds on an ordinary computer, while brute force would need months at the speed we measured, an extrapolation we did not run. That is the heart of modern security: keys are chosen so large that even the fastest known attacks would take far longer than anyone could wait. Toy keys like these are for learning only; real systems use far larger numbers and carefully chosen settings.' },
        { kind: 'callout', h3: 'Why this cannot be skipped with AI', p: 'An AI assistant can describe Diffie-Hellman in a paragraph and even write the code. It cannot give a learner the moment of watching their own brute-force attack slow to a crawl as the prime grows, or of beating it with a smarter algorithm and then running out of memory. That experience, how work and memory scale with input size, is the foundation of cryptography and of computer science generally.' }
      ]
    },
    {
      id: 'ethics', tint: 'tint', eyebrow: 'Responsible learning',
      h2: 'Attacking only your own keys',
      intro: 'Security is learned by thinking like an attacker, safely and legally.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Own keys only', p: 'Learners attack keys they generated themselves, on their own computer. Nothing here touches anyone else\'s system.' },
          { h3: 'Toy sizes', p: 'The largest key in this project is 48 bits, deliberately tiny, so the scaling is visible without any real-world risk.' },
          { h3: 'Why it matters', p: 'Understanding the attack is how defenders choose settings well. The project ends with learners explaining why real keys are chosen so much larger.' }
        ] },
        { kind: 'p', text: 'GCSE computer science pupils can follow the toy exchange and the idea of brute force; A-level students can implement both attacks and analyse their growth using the language of algorithm complexity. The list entry is Historic England\'s; the primes, keys, attacks and timings are our own, run on 25 September 2026, and different computers will give different times. Historic England, the BBC, Haringey Council, TfL and the ONS have no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Wood Green, the Piccadilly line and home',
      intro: 'Haringey has Tube, Overground and main-line stations. Our lessons use none of them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Wood Green', p: 'TfL\'s open data lists the Piccadilly line at Wood Green.' },
          { h3: 'Highgate to Tottenham Hale', p: 'Learners at the western and eastern edges of the borough can share one class from home.' },
          { h3: 'A shared secret', p: 'Every class is a small group of five to ten at one stage, where learners get to know the teacher and each other.' }
        ] },
        { kind: 'spec', title: 'Haringey in London', p: 'Haringey is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists all of them and the City, linking each as its page is published, including <a class="cg-inline-link" href="/coding-classes-in-enfield-london">Enfield</a> to the north and <a class="cg-inline-link" href="/coding-classes-in-hackney-london">Hackney</a> to the south east.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From secret notes to discrete logarithms',
    intro: 'The free lesson shows us a learner\'s real starting point, and we build from there rather than from their year group.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Codes and keys', p: 'Children make Scratch games that scramble and unscramble messages with a key.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Clock arithmetic', p: 'Python that works with remainders and powers, the building blocks of modern encryption.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Keys and attacks', p: 'Diffie-Hellman, brute force and baby-step giant-step with measured scaling, ideal preparation for cyber security or A-level computer science.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Security literacy', p: 'Adults learn what encryption can and cannot protect, and why key size matters, without needing heavy maths.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can write encryption code. Why should a Haringey teenager understand it?',
    intro: 'Because security fails in the details, and only understanding catches the details.',
    p1: 'AI coding tools will produce working encryption code on request. Security problems usually come from somewhere else: settings chosen too small, randomness that is not random, a shortcut that seemed harmless. A learner who has cracked their own 24-bit keys in half a second, and watched a smarter attack do the same to 48-bit keys, understands in their bones why key sizes and careful choices matter. That understanding is exactly what is needed to check machine-written security code.',
    p2: 'Cryptography also teaches a general skill: reasoning about how cost grows with size. It applies to databases, search engines and AI models themselves. Code can be generated; judging whether it is safe remains human work.',
    closer: 'Alexandra Palace broadcast to everyone. A Haringey learner who knows how to share a secret in that kind of world has a skill every modern organisation needs.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Muswell Hill to Tottenham, lessons live',
    intro: 'Anywhere in Haringey, a learner is in class the moment the video call connects.',
    cells: [
      { h3: 'From home', p: 'A laptop or desktop with headphones and a broadband connection that can handle video is all that is required.' },
      { h3: 'Key Stages we use', p: 'We describe progress in English Key Stages, from the first years of primary school to sixth form, and name GCSE or A level where they apply. All lessons are in English.' },
      { h3: 'A free start', p: 'The first lesson is real teaching, finishing with a suggested level and course; we do not ask for any card details.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners at one stage share each class, drawn from across the UK and abroad, so a convenient hour is usually on offer.' },
      { h3: 'Twice a week', p: 'Classes usually run on two evenings a week, with breaks for holidays and exams agreed in advance.' },
      { h3: 'UK time', p: 'Teachers work from India; every time in our messages is UK time.' }
    ],
    spec: { title: 'A busy borough, a small class', p: 'About 264,000 people live in Haringey, and a good class still needs five learners at the same stage free together, so our groups reach well beyond it.' }
  },

  fees: {
    h2: 'Fees for Haringey families',
    intro: 'The first lesson is free; then one monthly fee applies in every part of the borough.',
    first: 'A complete first lesson with a teacher, free, ending with a recommended level, course and time.',
    group: 'About eight live lessons a month in a class of five to ten at one stage.',
    private: 'About eight live lessons a month, one to one.',
    closer: 'Haringey families pay in US dollars, like every family outside India, and no sterling prices appear on the site. No payment is taken before the free lesson, or before a course and regular time are chosen. The pricing page explains pauses, missed lessons and switching between group and private lessons.'
  },

  reviewsH2: 'Google reviews from our families',

  book: {
    h2: 'Book a free lesson',
    intro: 'Tell us the learner\'s age or school year and something they enjoy. Lesson one might be a Scratch secret-message game, some Python clock arithmetic, or the key exchange on this page.',
    success: 'Thank you. Your Haringey lesson request is with our team.'
  },

  faq: {
    h2: 'Questions from Haringey',
    intro: 'About the borough, the cryptography project and how lessons work.',
    items: [
      { q: 'How many people live in Haringey?', a: 'The 2021 Census counted 264,238 usual residents in the London Borough of Haringey, in ONS table TS001.' },
      { q: 'What happened at Alexandra Palace in 1936?', a: 'Historic England\'s list entry records that its BBC studios transmitted the world\'s first high-definition television programme in 1936, from a lattice mast that gave an aerial height of 460 feet above sea level.' },
      { q: 'What is the Diffie-Hellman key exchange?', a: 'A method for two people to agree a secret number over a public channel. Each keeps a private number, publishes a value computed from it, and combines the other person\'s published value with their own private number to reach the same secret.' },
      { q: 'How long did the attacks take?', a: 'On our computer, brute force needed about 5 million steps, roughly half a second, for a 24-bit prime. Baby-step giant-step needed about 4,900 steps for the same size and about 13 seconds for a 48-bit prime.' },
      { q: 'Is it legal to crack keys?', a: 'Learners only attack keys they generated themselves, on their own computer, at deliberately tiny sizes. Attacking other people\'s systems without permission is illegal, and the project never does it.' },
      { q: 'When would lessons happen?', a: 'After the free lesson we suggest a weekly time in a class at the right level with a place available. Teachers are in India; the time is quoted in UK time.' },
      { q: 'What does a learner need?', a: 'A computer with sound and a steady connection. The cryptography project needs only Python; no data downloads.' },
      { q: 'Is there a Modern Age Coders centre in Haringey?', a: 'No. There is no Haringey centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Haringey cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Elsewhere in London',
    html: 'Every borough and the City is on our <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>, linked as its page goes live, including <a class="cg-inline-link" href="/coding-classes-in-barnet-london">Barnet</a> to the west and <a class="cg-inline-link" href="/coding-classes-in-camden-london">Camden</a> to the south. Learners interested in security and computation can continue into our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> compares school years in the four nations.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Haringey and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-enfield-london', label: 'Enfield' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-hgy .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-hgy .cg-hero h1 { font-weight: 770; letter-spacing: -0.019em; line-height: 1.04; }
.cg-root.cg-hgy .cg-capsule { border-right: 5px solid var(--cg-accent); padding-right: 1rem; }
.cg-root.cg-hgy .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hgy .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.012em; }
.cg-root.cg-hgy .cg-grid-3 { gap: clamp(0.95rem, 2.5vw, 1.8rem); }
.cg-root.cg-hgy .cg-table caption { font-weight: 700; letter-spacing: 0.016em; }
.cg-root.cg-hgy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hgy .cg-table td:nth-child(3) { font-weight: 600; }
.cg-root.cg-hgy .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-hgy .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Haringey. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000014): 264,238 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 286 (I 6, II* 21, II 259); Grade I 1079183 HIGHPOINT II, 1358885 HIGHPOINT I, 1079233 CROMWELL HOUSE, 1188817 FORECOURT WALLS TO CROMWELL HOUSE, 1358861 BRUCE CASTLE, 1294388 TOWER TO SOUTH WEST OF BRUCE CASTLE; II* include 1263688 Hornsey Town Hall, 1079241 DIAL HOUSE, 1079242 PERCY HOUSE, 1358887 Byron House. List entry 1268256 (Grade II) Alexandra Palace including former Alexandra Palace Station: surviving BBC studios where the world\'s first high-definition television programme was transmitted in 1936; testing of two rival systems; 225 ft lattice mast, aerial height 460 ft above sea level; rebuilt 1873-5. Haringey Council /libraries/libraries-haringey, 25 September 2026: Alexandra Park, Coombes Croft, Highgate, Hornsey, Marcus Garvey, Muswell Hill, Stroud Green and Harringay, Wood Green libraries; Community and Youth Music Library. TfL 940GZZLUWOG (Wood Green): Piccadilly.',
    localProject: 'Python 3.13.6, AMD64 Family 25; random.Random(20260925); safe primes p = 2q + 1 of 12, 16, 20, 24, 32, 40, 48 bits (p 2963; 39323; 604223; 12144347; 3096833687; 992849472899; 169229086184099); generator g with g^2 != 1 and g^q != 1. Private a uniform in [2, p-2]; A = g^a mod p. Brute force (5 trials, to 24 bits): mean steps 1,140.6; 13,277.2; 392,833.8; 5,026,774.2; mean seconds 0.00012; 0.0015; 0.048; 0.575. Baby-step giant-step (m = ceil sqrt(p-1); 5 trials to 24 bits, 3 above): mean steps 76.4; 266.4; 1,283.6; 4,927.8; 81,461.7; 1,342,885.7; 18,438,231; mean seconds 0.000017; 0.000046; 0.00046; 0.00094; 0.0357; 0.715; 13.39. Toy exchange p 23 g 5 a 6 b 15: A 8, B 19, shared 2. Lesson family: Diffie-Hellman and discrete logarithm attack scaling; screened 25 September 2026.',
    requiredMentions: [
      '264,238',
      'Diffie-Hellman',
      'baby-step giant-step',
      'discrete logarithm',
      'Alexandra Palace',
      'Highpoint',
      'Bruce Castle',
      'Cromwell House',
      'Marcus Garvey'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Haringey E09000014: 264,238 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000014&measures=20100' },
      { claim: 'Historic England list entry 1268256, Alexandra Palace: BBC studios, first high-definition television programme 1936; mast and aerial height.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1268256' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Haringey on 25 September 2026: 286 (6 I, 21 II*, 259 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'Haringey Council, libraries in Haringey.', url: 'https://www.haringey.gov.uk/libraries/libraries-haringey' },
      { claim: 'TfL Unified API, StopPoint 940GZZLUWOG (Wood Green): Piccadilly.', url: 'https://api.tfl.gov.uk/StopPoint/940GZZLUWOG' }
    ],
    rejectedClaims: [
      'Real-world key sizes and standards (bits used by browsers, NCSC guidance): not read at a primary source for this build; the page says only that real systems use far larger numbers.',
      'Which two television systems were tested at Alexandra Palace and which won: not named in the text we used; not stated.',
      'Brute force times above 24 bits: extrapolated, labelled as such, not run.',
      'Football stadium and club in Tottenham: not used, to avoid any implied affiliation.',
      'Haringey schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth: never a standout; used only to order the build.'
    ]
  }
};
