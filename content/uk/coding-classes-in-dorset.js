'use strict';
// Dorset (cg- county index, UK cluster Phase 7, row 229). Ceremonial Dorset: Dorset Council plus Bournemouth,
// Christchurch and Poole (BCP). Spine: pick the clock that fits the age. Jurassic Coast site (jurassiccoast.org, read
// raw 26 September 2026): "In 2001 the Jurassic Coast was inscribed as a UNESCO World Heritage Site for the Outstanding
// Universal Value of its rocks, fossils and landforms. It remains England's only natural World Heritage Site"; the
// Jurassic Coast Trust "is no longer in operation". IAEA Nuclear Data Section LiveChart API (read raw): carbon-14 half
// life 5,700 years (plus or minus 30); potassium-40 1.248 billion years; uranium-235 704 million years; uranium-238
// 4.468 billion years; rubidium-87 49.7 billion years. Our run (26 September 2026), for a rock 150 million years old
// (our teaching value, not a claim about any Dorset rock): carbon-14 has gone through 26,316 half-lives, leaving about
// 10 to the power minus 7,922, which a 64-bit float stores as exactly 0.0 (underflow after about 1,074 halvings);
// potassium-40 0.920 left; uranium-235 0.863; uranium-238 0.977; rubidium-87 0.998. Carbon-14 falls to 0.1 per cent
// after 56,805 years. Age recovered from the remaining fraction with a 1 per cent measurement error: uranium-238 86 to
// 215 million years; potassium-40 132 to 168; uranium-235 140 to 160. Lesson family: exponential decay and half-life,
// floating-point underflow, and error sensitivity when choosing a measurement scale; screened (half-life: 0 hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (Dorset 379,579; BCP 400,196; our total 779,775);
// ONS built-up areas, all 22 above 5,000 inside the county (Upton spans BCP and Dorset). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'DORSET', blurb: 'Two councils, twenty-two towns, and a Jurassic Coast lesson on why carbon dating cannot date a dinosaur-age rock.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-dorset',
  code: 'dst',
  accent: '#8A4C5C',
  accentRationale: 'Dorset: a cliff-face rose red from the solver (5.18:1 on the darkest paper tint), pinker than the other UK red accents',
  pageType: 'governorate',
  place: {
    name: 'Dorset',
    eyebrow: 'County of Dorset',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South West England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Devon', href: '/coding-classes-in-devon' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Dorset',
  title: 'Coding Classes in Dorset | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, maths and A level classes across Dorset, from Bournemouth, Poole and Weymouth to Christchurch, Dorchester, Bridport and Sherborne.',
  ogDescription: 'Coding classes for every Dorset town, and a Jurassic Coast project on half-lives: why carbon dating fails on old rock, and why a computer rounds the answer to zero.',
  twitterDescription: 'Dorset coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'a-level-maths-course-pure-mechanics-statistics',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Dorset',
    description: 'Ability-placed online coding, Python, mathematics, statistics and AI for children, teenagers and adults across Dorset and Bournemouth, Christchurch and Poole, taught live in English.'
  },

  h1: 'Coding classes in Dorset',
  capsuleQ: 'What are the best coding classes in Dorset?',
  capsule: 'Dorset is two councils with 779,775 residents at the 2021 Census: Bournemouth, Christchurch and Poole, which holds just over half the county\'s people, and Dorset Council, which covers the rest. Bournemouth and Poole are the big places, then Weymouth, Christchurch and Dorchester, with market towns inland and along the Jurassic Coast. Classes work the same for all of them. Teachers based in India teach live over video, learners are grouped by ability instead of age, the age range runs from 6 to 67, and you can choose a group of five to ten or one-to-one teaching, across programming, Python, maths and statistics. The Dorset project comes from the coast\'s rocks. Try the first lesson free. Staying on costs USD 100 a month for group lessons or USD 150 a month for a private teacher.',
  lead: 'The Jurassic Coast was inscribed as a UNESCO World Heritage Site in 2001 for its rocks, fossils and landforms, and it remains England\'s only natural World Heritage Site. Rocks like these are dated by radioactive clocks, and a question every curious child asks is why scientists cannot just use carbon dating. This page\'s project answers it with a few lines of Python and the official half-lives published by the International Atomic Energy Agency. The answer has three parts: carbon runs out, the computer then rounds what is left to exactly zero, and even the right clock is only useful if its half-life suits the age you are trying to measure.',
  wa: 'Hello Modern Age Coders, I would like a free lesson for a learner in Dorset, please.',

  picks: {
    eyebrow: 'Courses for Dorset',
    h2: 'Popular first courses in Dorset',
    intro: 'A six-year-old in Swanage who loves halving and doubling games, a Year 7 in Sherborne starting Python, a sixth former in Poole studying exponentials in A level Maths, and an adult in Bridport who wants to understand statistics properly. One free lesson each.',
    items: [
      { course: 'mental-maths-mastery-kids', band: 'Ages 5 to 10', note: 'Number bonds, decomposition and estimation, including repeated halving that is the heart of a half-life.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Typed Python for children, with loops that halve a number over and over and print the result each time.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', band: 'Ages 16 to 18', note: 'A level Maths for Edexcel, AQA and OCR, where exponentials and logarithms are part of the Pure course.' },
      { course: 'statistics-probability-maths-course', band: 'Adults', note: 'Descriptive statistics, distributions, hypothesis testing and regression on real data, for adults.' }
    ]
  },

  sections: [
    {
      id: 'dorset', tint: '', eyebrow: 'The county in figures',
      h2: 'Two councils, 779,775 people and a coast of small towns',
      intro: 'Population per council is the 2021 Census on Nomis. Towns are the ONS built-up areas, and we re-checked each with our own sums of census output areas inside Dorset.',
      body: [
        { kind: 'table', caption: 'Dorset\'s two councils, usual residents at Census 2021', head: ['Council', 'Usual residents', 'Main towns'], rows: [
          ['Bournemouth, Christchurch and Poole', '400,196', 'Bournemouth, Poole, Christchurch, Merley'],
          ['Dorset Council', '379,579', 'Weymouth, Dorchester, Wimborne Minster, Verwood, Ferndown, Bridport']
        ] },
        { kind: 'p', text: 'The county is lopsided. BCP holds just over half of Dorset\'s people in a continuous stretch of coast around Poole Harbour, while Dorset Council covers everything else: the market towns of the north and west, the Isle of Purbeck, Weymouth and the whole of the county\'s rural interior. A learner in Bournemouth and a learner in Shaftesbury live in the same county and very different places.' },
        { kind: 'table', caption: 'All twenty-two Dorset built-up areas with more than 5,000 people, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Bournemouth', '196,455', 'Sherborne', '10,360'],
          ['Poole', '141,005', 'Corfe Mullen', '10,035'],
          ['Weymouth', '55,535', 'Shaftesbury', '9,160'],
          ['Christchurch', '48,985', 'Swanage', '9,110'],
          ['Dorchester', '21,360', 'Upton', '8,400'],
          ['Wimborne Minster', '16,630', 'Ashley Heath', '7,150'],
          ['Verwood', '13,710', 'Wareham', '5,880'],
          ['Ferndown', '13,265', 'Merley', '5,490'],
          ['Bridport', '12,295', 'Weston', '5,210'],
          ['Blandford Forum', '11,800', 'Wool', '5,040'],
          ['Gillingham', '11,010', 'West Moors', '10,425']
        ] },
        { kind: 'p', text: 'Every row agrees with our own output-area count to within rounding, and every town is inside Dorset; Upton sits across the BCP and Dorset Council line. The two councils and individual academies set school calendars, which we did not read for this page, so lesson breaks are agreed with each family. BCP\'s selective schools have <a class="cg-inline-link" href="/11-plus-maths-tuition-bournemouth-christchurch-and-poole">a separate maths page</a>; nothing here is school advice.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Dorset project',
      h2: 'Why carbon dating cannot date an ancient rock, in Python',
      intro: 'Five official half-lives, one formula, and two surprises about computers and measurement.',
      body: [
        { kind: 'p', text: 'A radioactive clock works by halving. After one half-life, half the original atoms are left; after two, a quarter; after n half-lives, one half raised to the power n. The International Atomic Energy Agency\'s LiveChart database publishes the half-lives: carbon-14 5,700 years, potassium-40 1.248 billion years, uranium-235 704 million years, uranium-238 4.468 billion years. The learner writes one function and asks what fraction of each would remain in a rock 150 million years old, an age we chose for teaching.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: what is left after 150 million years, using IAEA half-lives', head: ['Clock', 'Half-life (IAEA)', 'Half-lives in 150 million years', 'Fraction left'], rows: [
          ['Carbon-14', '5,700 years', '26,316', 'About 10 to the minus 7,922, printed by Python as 0.0'],
          ['Uranium-235', '704 million years', '0.21', '0.863'],
          ['Potassium-40', '1.248 billion years', '0.12', '0.920'],
          ['Uranium-238', '4.468 billion years', '0.034', '0.977'],
          ['Rubidium-87', '49.7 billion years', '0.003', '0.998']
        ] },
        { kind: 'p', text: 'Carbon-14 is the first surprise. After 26,316 halvings, the fraction left has almost eight thousand zeros after the decimal point, and Python\'s ordinary floating-point numbers cannot store anything that small: they give up after roughly a thousand halvings and print exactly 0.0. The answer is not zero, but the computer says it is. Working with logarithms instead keeps the true size of the number. It also makes the geology obvious: carbon-14 falls to one part in a thousand after 56,805 years, so it cannot date anything older than that, let alone a rock from the age of the dinosaurs.' },
        { kind: 'p', text: 'The second surprise is about the other clocks. Suppose a laboratory measures the fraction left but gets it 1 per cent wrong. Working backwards from uranium-238, the age of our 150-million-year-old rock would come out anywhere from 86 to 215 million years, because so little of it has decayed that a small error in the fraction is a huge error in the age. Uranium-235, which has gone through about a fifth of a half-life, gives 140 to 160 million years for the same 1 per cent error. The most useful clock is the one whose half-life is not too far from the age being measured.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Halve 1,000 sweets on paper until one is left, count the halvings, then write a Python loop that does the same for any number.' },
          { h3: 'Ages 13 to 16', p: 'Compute the fraction left for each IAEA half-life, watch carbon-14 underflow to zero, and fix it by working with logarithms.' },
          { h3: 'Ages 16 and up', p: 'Invert the formula to get an age from a measured fraction, add a 1 per cent error, and show which clock gives the tightest answer.' }
        ] },
        { kind: 'callout', h3: 'What we are not claiming', p: 'The half-lives are the IAEA\'s. The 150-million-year age and the 1 per cent error are our teaching choices, not measurements of any Dorset rock. Real dating uses parent and daughter ratios, several isotope systems and careful laboratory corrections, which this simple model leaves out.' }
      ]
    },
    {
      id: 'coast', tint: 'deep', eyebrow: 'Why the Jurassic Coast',
      h2: 'England\'s only natural World Heritage Site',
      intro: 'The Dorset link, and the data source, in their own words.',
      body: [
        { kind: 'table', caption: 'The coast and the clocks, from the sources we used', head: ['Source', 'What it says'], rows: [
          ['Jurassic Coast website', 'Inscribed as a UNESCO World Heritage Site in 2001 for the Outstanding Universal Value of its rocks, fossils and landforms.'],
          ['Jurassic Coast website', '"It remains England\'s only natural World Heritage Site."'],
          ['IAEA LiveChart', 'Carbon-14 half-life 5,700 years, with an uncertainty of 30 years.'],
          ['IAEA LiveChart', 'Uranium-238 half-life 4.468 billion years; uranium-235 704 million years.'],
          ['IAEA LiveChart', 'Potassium-40 half-life 1.248 billion years; rubidium-87 49.7 billion years.']
        ] },
        { kind: 'p', text: 'A coastline famous for fossils is the natural place to meet the mathematics of deep time. The same halving rule describes medicines leaving the body, the cooling of a cup of tea and the fading of a signal, and the same computing lesson applies to all of them: very small numbers need careful handling, and a measurement is only as useful as the scale it is taken on.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Jurassic Coast World Heritage Site, UNESCO, the IAEA or either Dorset council, and nothing on this page implies one. The facts and half-lives are theirs; the calculations and any mistake in them are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/coding-classes-in-devon">Devon</a> shares the Jurassic Coast to the west, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every county and city page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Steps up',
    h2: 'From halving sweets to handling tiny numbers safely',
    intro: 'The free lesson decides where to begin, by ability. Year group is only a guide.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Halving and doubling', p: 'Mental maths and Scratch games built on halving and doubling, the root of every growth and decay idea.', courses: ['mental-maths-mastery-kids', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Loops that shrink', p: 'Python loops that repeat an operation and print each step, so a learner can watch a quantity decay.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Logs and precision', p: 'Exponentials, logarithms and floating-point limits, in A level Maths and in code that must not round to zero.', courses: ['a-level-maths-course-pure-mechanics-statistics', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Numbers with uncertainty', p: 'Statistics for adults, including how errors in a measurement carry through into the answer.', courses: ['statistics-probability-maths-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and small numbers',
    h2: 'An AI can compute radioactive decay instantly. Would it notice the answer rounded to zero?',
    intro: 'Not unless someone knows that zero here is a lie told by the hardware.',
    p1: 'Ask an assistant to write code for the fraction of carbon-14 left after 150 million years and it will produce the right formula. Run it, and the result is 0.0, which is wrong: the true value is tiny but not zero. Code that quietly underflows or overflows produces answers that look perfectly normal, and a generated program has no reason to warn you, because the formula itself is correct.',
    p2: 'A Dorset student who has watched carbon-14 hit exactly zero, and fixed it with logarithms, will ask the questions that matter: how big or small can these numbers get, what does the computer do at the edges, and how much does a small measurement error move the final answer? Those questions are how scientists and engineers catch the errors that no syntax checker ever will.',
    closer: 'So a Dorset teenager should learn to code in 2026 to know when a computer\'s exact-looking answer is really just the edge of what it can represent.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Lyme Bay to Poole Harbour, all online',
    intro: 'Dorset stretches a long way along its coast and inland. Online lessons make every town equally close.',
    cells: [
      { h3: 'In your own home', p: 'A bedroom in Blandford Forum, a kitchen in Wareham, a desk in Verwood. The teacher shares a screen and the learner types.' },
      { h3: 'Familiar school language', p: 'Teachers use the terms Dorset pupils hear every day, from Year 8 to GCSE options and sixth form, and teach in English.' },
      { h3: 'Free first lesson', p: 'A proper lesson with real work and a straightforward recommendation. No card details are ever asked for.' },
      { h3: 'Classmates who match', p: 'A class of five to ten people who have all reached roughly the same point, pulled together from across the country so nobody is bored or lost.' },
      { h3: 'Breaks when school breaks', p: 'Two lessons a week is normal, paused for your own school\'s holidays, whichever council or trust set them.' },
      { h3: 'UK time on the timetable', p: 'Our teachers are in India, four and a half hours ahead in UK summer and five and a half in UK winter; the timetable is written in UK time.' }
    ],
    spec: { title: 'Why groups are formed by level', p: 'A county split between a busy conurbation and a long rural coast rarely has enough learners at one stage in one town. Level-based groups let a Christchurch learner and a Gillingham learner share a class.' }
  },

  fees: {
    h2: 'Fees in Dorset',
    intro: 'The same prices in Bournemouth, Bridport and every town between, and in every country outside India.',
    first: 'A full lesson of genuine work, ending in a recommended level and course.',
    group: 'About eight lessons each month, in a group of five to ten learners at one level.',
    private: 'About eight lessons each month with one teacher and one learner.',
    closer: 'Fees are set in US dollars for all families outside India, and no pound list exists. You pay only after the free lesson, once a course and a weekly time are agreed; the pricing page explains pausing, missed lessons and swapping between group and private.'
  },

  reviewsH2: 'What Google reviewers wrote',

  book: {
    h2: 'Ask for your free lesson',
    intro: 'An age or school year and one interest is plenty. The first lesson might be a halving game, a first Python loop, or the half-life project on this page.',
    success: 'Thank you. Your Dorset request has been received.'
  },

  faq: {
    h2: 'Dorset questions',
    intro: 'About the county, the half-life project and our lessons.',
    items: [
      { q: 'How many people live in Dorset?', a: 'Dorset\'s two councils held 779,775 usual residents at the 2021 Census, from ONS data on Nomis: 400,196 in Bournemouth, Christchurch and Poole and 379,579 in the Dorset Council area.' },
      { q: 'What are the largest towns in Dorset?', a: 'By ONS built-up area: Bournemouth 196,455, Poole 141,005, Weymouth 55,535, Christchurch 48,985 and Dorchester 21,360. All twenty-two above five thousand are on this page.' },
      { q: 'What is the half-life project?', a: 'Learners use IAEA half-lives to compute how much of each radioactive clock would be left in a rock 150 million years old, watch carbon-14 underflow to zero, and test how a 1 per cent measurement error affects the age each clock gives.' },
      { q: 'Why can carbon dating not date old rocks?', a: 'Carbon-14 has a half-life of 5,700 years by the IAEA\'s figure, so it falls to one part in a thousand after about 56,805 years. For a rock millions of years old there is effectively none left to measure.' },
      { q: 'What is special about the Jurassic Coast?', a: 'Its own website says it was inscribed as a UNESCO World Heritage Site in 2001 for its rocks, fossils and landforms, and remains England\'s only natural World Heritage Site.' },
      { q: 'Is there a classroom in Bournemouth or Poole?', a: 'No. Every lesson is live online, so a learner in Dorchester and one in Ferndown share a class without travelling.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Mental maths and Scratch for younger children, typed Python from around ten, maths and Python for teenagers, and statistics or data for adults. The free lesson decides the level.' },
      { q: 'Do you teach A level Maths?', a: 'Yes, for Edexcel, AQA and OCR, covering Pure, Mechanics and Statistics, from AS foundations to timed past papers.' },
      { q: 'What does it cost?', a: 'Nothing for the first lesson. Continuing costs USD 100 a month in a group or USD 150 a month one to one, with no sign-up fee and no fixed number of months.' },
      { q: 'When are Dorset school holidays?', a: 'Dorset Council, BCP and academies set their own dates. We arrange lesson breaks around the dates your school gives you.' }
    ]
  },

  next: {
    eyebrow: 'The rest of the UK',
    h2: 'Pages beyond Dorset',
    html: '<a class="cg-inline-link" href="/coding-classes-in-devon">Devon</a> shares the Jurassic Coast, and other county pages include <a class="cg-inline-link" href="/coding-classes-in-cornwall">Cornwall</a> and <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has the full list.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Dorset and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/coding-classes-in-devon', label: 'Devon' },
    { href: '/11-plus-maths-tuition-bournemouth-christchurch-and-poole', label: 'BCP 11 plus' }
  ],

  personalityCss: `
.cg-root.cg-dst .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-dst .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.04; }
.cg-root.cg-dst .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-dst .cg-eyebrow { letter-spacing: 0.21em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dst .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.019em; }
.cg-root.cg-dst .cg-table caption { font-weight: 600; font-style: italic; }
.cg-root.cg-dst .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dst .cg-table th { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-dst .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-dst .cg-callout { border-left-width: 7px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Dorset (ceremonial: Dorset Council and Bournemouth, Christchurch and Poole). ONS Census 2021 TS001 via Nomis: BCP 400,196; Dorset 379,579; total 779,775 (our sum). ONS Census 2021 built-up areas (published; all 22 agree with our OA sums and lie in the county): Bournemouth 196,455; Poole 141,005; Weymouth 55,535; Christchurch 48,985; Dorchester 21,360; Wimborne Minster 16,630; Verwood 13,710; Ferndown 13,265; Bridport 12,295; Blandford Forum 11,800; Gillingham 11,010; West Moors 10,425; Sherborne 10,360; Corfe Mullen 10,035; Shaftesbury 9,160; Swanage 9,110; Upton 8,400 (BCP and Dorset); Ashley Heath 7,150; Wareham 5,880; Merley 5,490; Weston 5,210; Wool 5,040. Jurassic Coast website: "In 2001 the Jurassic Coast was inscribed as a UNESCO World Heritage Site for the Outstanding Universal Value of its rocks, fossils and landforms. It remains England\'s only natural World Heritage Site. The Jurassic Coast Trust is no longer in operation." IAEA Nuclear Data Section LiveChart ground states API: 14C half_life 5700 (unc 30) Y; 40K 1.248E+9 Y; 235U 7.04E+8 Y; 238U 4.468E9 Y; 87Rb 4.97E+10 Y.',
    localProject: 'Exponential decay, underflow and error sensitivity. Fraction left = 0.5 ^ (t / T). Teaching age t = 150 million years (ours). Half-lives in t: C-14 26,316 (fraction about 10^-7,921.84; float64 gives 0.0; underflow after about 1,074 halvings); U-235 0.2131 (0.8627); K-40 0.1202 (0.9201); U-238 0.03357 (0.9770); Rb-87 0.003018 (0.9979). C-14 remaining 50 per cent at 5,700 years, 10 per cent at 18,935, 1 per cent at 37,870, 0.1 per cent at 56,805. Age from measured fraction t = T log2(1/f): with f 1 per cent high or low, U-238 gives 85.86 to 214.78 My; K-40 132.08 to 168.10; U-235 139.89 to 160.21. Page states the age and error are teaching values and real dating uses daughter ratios. AI angle: generated decay code underflows silently to 0.0. Lesson family: exponential decay and half-life, floating-point underflow, choosing a measurement scale by error sensitivity.',
    requiredMentions: [
      '779,775',
      '5,700 years',
      '4.468 billion',
      '704 million',
      '26,316',
      '56,805',
      'England\'s only natural World Heritage Site',
      'Corfe Mullen',
      'Ashley Heath',
      'LiveChart'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Dorset and BCP, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Dorset towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Jurassic Coast: UNESCO inscription in 2001; England\'s only natural World Heritage Site.', url: 'https://jurassiccoast.org/' },
      { claim: 'IAEA LiveChart of Nuclides: half-lives of carbon-14, potassium-40, uranium-235, uranium-238 and rubidium-87.', url: 'https://www-nds.iaea.org/relnsd/vcharthtml/VChartHTML.html' }
    ],
    rejectedClaims: [
      'The ages of specific Jurassic Coast rock formations: not read at a primary source for this build, so the 150-million-year age is labelled as our teaching value.',
      'The length of the Jurassic Coast: not stated on the page we could read, so no length is given.',
      'Dorset school term dates: set by two councils and academies; none read.',
      'Radiocarbon dating details from the IAEA news pages: those returned 403; only LiveChart data is used.',
      'Named fossil finds or collectors: not read at primary sources for this build.',
      'Named Dorset schools: none is named.'
    ]
  }
};
