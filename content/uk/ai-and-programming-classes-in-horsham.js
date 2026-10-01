'use strict';
// Horsham (cg- town page, UK cluster Phase 10, towns band B, row 512). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when is a more complicated model worth its
// extra complication? (Minimum description length: Occam's razor counted in bits.)
// Data (read 30 September 2026): Census 2021 TS007 age by single year, Horsham district (Nomis NM_2027_1, geography
// 645923093). TS007 total 146,776 (TS001 gives 146,778; the two tables differ by disclosure control and neither is
// derived here from the other). Ages 0 to 99 used (100 values); "100 and over" (49) is open-ended and left out.
// Peak 2,368 at age 55; 980 at age 19; 1,955 at age 74 and 1,437 at age 75.
// Our run (scratchpad hsm/mdl.py): least-squares polynomial of degree k (Legendre basis) to the 100 counts. Two-part
// code: (k + 1) x 0.5 x log2(100) bits for the curve (3.32 bits per coefficient), plus 50 x log2(2 pi e RSS / 100) bits
// for the corrections (Gaussian code, to the nearest person). Raw storage: 100 numbers x 12 bits = 1,200 bits.
//   degree 0: typical miss (rmse) 581.4, total 1,126.4 bits; 2: 286.1, 1,030.7; 6: 148.3, 949.2; 12: 137.7, 958.5;
//   15: 94.0, 913.3; 20: 78.8, 904.5 (the minimum over degrees 0 to 40); 30: 67.9, 916.3; 40: 55.0, 919.0.
//   Check on unseen data (fit to even ages, test on odd ages): degree 6 152.7; degree 20 99.0 (lowest); degree 30 32,689.1.
//   Degree 20 largest miss: age 19 (980 people, curve says 1,275); mean miss 55.8.
// Lesson family: minimum description length / Occam's razor as a code length. Screened: "minimum description length"
// and "occam" 0 hits in content/, claims and spent lists; claimed in claims.txt. West Sussex county page = community
// detection; Crawley = mean of ratios; Worthing = transition matrix; Weston-super-Mare = optimal age bands by dynamic
// programming (same kind of table, different question); Dulwich = double descent.
// Place facts: Horsham district TS001 146,778. ONS 2021 BUA (published): Horsham 50,215. postcodes.io (Horsham, West
// Sussex): Broadbridge Heath (village, RH12), Roffey (suburban area, RH12), Warnham (village, RH12), Mannings Heath
// (village, RH13).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HORSHAM', label: 'Horsham', blurb: 'AI and programming classes for Horsham, with a project that uses bits to decide when a bigger model has earned its keep.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-horsham',
  code: 'hsm',
  accent: '#4F5B12',
  accentRationale: 'Horsham: a dark olive green (7.40:1 on white), hand-picked and kept away from the blue-greens of recent pages',
  pageType: 'city',
  place: {
    name: 'Horsham',
    eyebrow: 'Horsham, West Sussex, South East England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Sussex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'West Sussex', href: '/coding-classes-in-west-sussex' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Horsham, West Sussex',
  title: 'AI and Programming Classes in Horsham | Python, Ages 6 to 67',
  description: 'AI, programming, Python and vibe coding lessons for Horsham, Roffey, Broadbridge Heath and Warnham, ages 6 to 67. Taught live online. First lesson is free.',
  ogDescription: 'AI and programming classes for Horsham, with a project on Occam\'s razor: measuring in bits whether a complex model is worth it.',
  twitterDescription: 'Horsham AI, programming, Python and vibe coding classes, live online, ages 6 to 67. Try a lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Horsham',
    description: 'Online AI, programming, Python, vibe coding and maths for children, teenagers and adults in Horsham and its district, taught live with projects that test models against real census data.'
  },

  h1: 'AI and programming classes in Horsham',
  capsuleQ: 'Where can Horsham learners find the best AI and programming classes?',
  capsule: 'Horsham is a town in West Sussex whose built-up area held 50,215 usual residents at the 2021 census, according to the Office for National Statistics; the wider Horsham district had 146,778. The gazetteer lists Roffey as a suburban area of the district and Broadbridge Heath, Warnham and Mannings Heath as villages. Learners aged six to 67 in these places can join our AI, programming, Python, vibe coding and maths lessons, which run as live video calls led by tutors in India. You can have private lessons or sit in a class of five to ten people working at your level. We teach ideas so that a learner could carry them out with pencil and paper, and the computer comes second. Start with a free lesson; we finish it by telling you which course we would choose. In the Horsham project, learners fit curves to the district\'s age profile and use a count of bits to decide how complicated the curve deserves to be. Lessons after the trial cost USD 100 a month in a group and USD 150 a month one-to-one.',
  lead: 'Give a model more knobs and it will fit your data more closely. That is always true and it is a trap, because past some point the extra knobs are fitting accidents. The old advice is Occam\'s razor: prefer the simpler explanation. But how much simpler, and who decides? Minimum description length turns the advice into arithmetic. Imagine sending your data to a friend down a slow line. You may send a model plus a list of corrections. A bigger model costs more bits to send and leaves smaller corrections. Add the two costs, and the model with the shortest total message wins. Horsham learners run that contest on census data.',
  wa: 'Hello Modern Age Coders, I would like to book a free AI or programming lesson for a learner in Horsham.',

  picks: {
    eyebrow: 'First courses',
    h2: 'Where Horsham learners usually start',
    intro: 'Chosen by age. You try a full live lesson on any of them for free, and no card is involved.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: simple rules, fair comparisons and knowing when an answer is too neat.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children build Scratch games with an AI assistant and stay in charge of what goes in.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python for teenagers, including the Horsham curve-fitting contest.' },
      { course: 'statistics-probability-maths-course', band: 'Teens and adults', note: 'Statistics and probability for anyone who wants to judge a model, a chart or an AI claim.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Town and district',
      h2: 'Horsham, Roffey, Broadbridge Heath and Warnham',
      intro: 'Published census figures first, then the places named in the postcode gazetteer.',
      body: [
        { kind: 'table', caption: 'Horsham town and district, Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Horsham built-up area', '50,215'],
          ['Horsham district', '146,778']
        ] },
        { kind: 'p', text: 'The district is much larger than the town and includes other towns and villages, so the two lines are separate counts and should be read that way. On postcodes.io, Roffey is a suburban area in the RH12 district, Broadbridge Heath and Warnham are RH12 villages and Mannings Heath is a village in RH13, all in Horsham district, West Sussex. Local schools work to the English national curriculum. We group younger learners by school year, Year 2 to Year 13, and can match lessons to GCSE and A level computer science, maths and statistics.' },
        { kind: 'callout', h3: 'Around West Sussex', p: 'Compare <a class="cg-inline-link" href="/coding-classes-in-west-sussex">coding classes in West Sussex</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-crawley">Crawley</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-worthing">Worthing</a>. Why reasoning comes before tools in our lessons: <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Horsham project',
      h2: 'Occam\'s razor in bits: minimum description length',
      intro: 'A curve is only worth sending if it saves more than it costs.',
      body: [
        { kind: 'p', text: 'The data is one column from the 2021 census: the number of people in Horsham district at each single year of age, from babies under one to people aged 99. That is 100 numbers. They rise to 2,368 at age 55, dip sharply to 980 at age 19, and drop from 1,955 at age 74 to 1,437 at age 75. The whole table counts 146,776 people, a figure two away from the district total above because the census protects privacy by adjusting each table slightly. Sent raw, each number needs 12 bits, so the message is 1,200 bits long.' },
        { kind: 'p', text: 'Now the learner tries to do better by sending a smooth curve and then the corrections. The curve is a polynomial; its degree is how many bends it is allowed. We charge 3.32 bits for every number needed to describe the curve, which is half of log2(100), a standard price when there are 100 data points. The corrections are charged by how large they are: small corrections are cheap to send, large ones are dear. Python fits each curve by least squares and adds up the bill.' },
        { kind: 'table', caption: 'Polynomial curves fitted to the Horsham district age profile, 100 ages, our Python run on Census 2021 data', head: ['Degree of curve', 'Typical miss (people)', 'Whole message (bits)'], rows: [
          ['0 (a flat line)', '581.4', '1,126.4'],
          ['2', '286.1', '1,030.7'],
          ['6', '148.3', '949.2'],
          ['12', '137.7', '958.5'],
          ['20', '78.8', '904.5'],
          ['30', '67.9', '916.3'],
          ['40', '55.0', '919.0']
        ] },
        { kind: 'p', text: 'Read the middle column alone and the advice is simple and wrong: the miss keeps shrinking, so use the biggest curve you can. The right-hand column tells the fuller story. Going from degree 6 to degree 12 cut the miss from 148.3 to 137.7, but the message grew from 949.2 to 958.5 bits. Those six extra numbers did not pay for themselves. Pushing on to degree 20 did pay: the curve finally had enough bends to follow the sharp features, and the total fell to 904.5 bits, the shortest of any degree from 0 to 40. After that, every added bend cost more than it saved.' },
        { kind: 'p', text: 'The learner then checks the verdict a second way, with data the curve has not seen. Fit each curve using only the even ages and test it on the odd ages. Degree 20 again gives the smallest miss, 99.0. Degree 30 gives 32,689.1: between the points it was shown, the curve swings wildly. Two honest limits finish the write-up. Even the winning curve saves only about a quarter of the raw 1,200 bits, and it still misses age 19 by 295 people, because smooth curves are a poor language for a profile with sudden steps. And everything here describes the district as a whole, not the town alone.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Describe a dot picture to a friend in as few words as you can, then count the words and the mistakes.' },
          { h3: 'Ages 11 to 15', p: 'Fit straight lines and gentle curves in Python and plot how the miss shrinks as bends are added.' },
          { h3: 'Ages 15 and up', p: 'Code the two-part bill in bits, find the degree with the shortest message, and test it on held-back ages.' }
        ] },
        { kind: 'callout', h3: 'Source and method', p: 'Age counts are Census 2021 table TS007 for Horsham district from the Office for National Statistics via Nomis, read 30 September 2026, Open Government Licence. The people aged 100 and over are published as one open-ended group and were left out of the fit. The pricing of bits is a common textbook scheme; other fair schemes would give somewhat different totals.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Simplicity and AI',
      h2: 'What the shortest message teaches about AI, vibe coding and agents',
      intro: 'Learning and compressing are close relatives.',
      body: [
        { kind: 'table', caption: 'From the Horsham curves to AI practice', head: ['What the bits showed', 'The habit it builds'], rows: [
          ['The miss fell all the way to degree 40', 'Never choose a model on training error alone'],
          ['Degree 12 cost more bits than degree 6', 'Extra parts must earn their place'],
          ['Degree 20 gave the shortest message', 'Simplicity is a trade, not a rule'],
          ['Degree 30 failed wildly on unseen ages', 'Always test on data held back'],
          ['Only a quarter of the bits were saved', 'Ask whether the model family fits the problem']
        ] },
        { kind: 'p', text: 'A model that predicts data well can also compress it, and the reverse holds too. That link runs through modern AI: a language model is trained to predict the next word, which is the same as finding a short description of a great deal of text. It also explains why big models can go wrong. With enough knobs a model can store its training examples instead of learning the pattern behind them. Vibe coding is the practice of describing a program in plain language and having an AI write it. Ask one for "a curve that fits this data" and it may hand back degree 40 with a proud note about the tiny error. A learner who has done the Horsham sums asks how it does on ages it never saw. An AI agent that tunes its own settings needs that same rule built in. Agent projects begin when a learner programs Python comfortably, most often in the older teens or adulthood, and Copilot Studio agents are offered in one-to-one lessons only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for students in the UK</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We are independent of the Office for National Statistics, Nomis and postcodes.io. The figures come from their open data and the analysis, including any error in it, is our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From describing pictures to judging models',
    intro: 'We estimate the right step from the school year and confirm it in the free lesson.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Short, exact instructions; fair tests; spotting a rule that explains too little or too much.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Build with an AI helper, then check the result against what was asked.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and AI', p: 'Fitting, testing and model choice, in step with GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Statistics and AI', p: 'Evidence, models and agents in Python, for work or for curiosity.', courses: ['statistics-probability-maths-course', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Model choice',
    h2: 'What is minimum description length, and what is Occam\'s razor in machine learning?',
    intro: 'Minimum description length is the rule of choosing the model that gives the shortest total message, counting the bits to describe the model and the bits to correct its mistakes, and it is Occam\'s razor made measurable for machine learning: a more complex model is accepted only when it saves more than it costs.',
    p1: 'On the Horsham district age profile, a degree 12 curve missed by less than a degree 6 curve and still needed a longer message, 958.5 bits against 949.2.',
    p2: 'The shortest message, 904.5 bits, came at degree 20, and a test on unseen ages picked the same degree.',
    closer: 'Horsham teenagers who can run that test themselves will be the ones checking AI models in 2026, not just using them.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson format',
    h2: 'How teaching reaches Horsham',
    intro: 'Lessons are live and online. What you need at home is a computer with a working camera, and a place to sit and think.',
    cells: [
      { h3: 'The learner does the work', p: 'They type and share their screen. The tutor asks, hints and checks understanding.' },
      { h3: 'A full lesson to try', p: 'We teach a complete free session and use it to find the right course.' },
      { h3: 'Card-free booking', p: 'The trial is arranged without any payment details.' },
      { h3: 'Classes built by level', p: 'Five to ten learners at the same point, brought together from around the UK.' },
      { h3: 'Two sessions weekly', p: 'During term, stopping for West Sussex school holidays on the dates you give us.' },
      { h3: 'Steady UK timetable', p: 'The clock change is absorbed at our end; your lesson time is unchanged.' }
    ],
    spec: { title: 'The case for online', p: 'A tutor who can see the learner\'s screen can see their thinking, and recruiting nationally lets every class sit at one level.' }
  },

  fees: {
    h2: 'Horsham fees',
    intro: 'Every learner outside India is on the same international fee.',
    first: 'A whole first lesson, free, with a recommended course at the end.',
    group: 'A class of five to ten, around eight lessons a month.',
    private: 'Private one-to-one tuition, around eight lessons a month.',
    closer: 'All prices are in US dollars; we do not quote pounds. You are billed only after the trial, when the course and lesson time have been agreed. Holidays, missed sessions and changes of format are dealt with on the pricing page.'
  },

  reviewsH2: 'Reviews on Google from Sussex families and UK learners',

  book: {
    h2: 'Arrange a free Horsham lesson',
    intro: 'We need the learner\'s age or year and a subject they like. The trial could be a describe-the-picture game, an AI-assisted Scratch project, first steps in Python, or a small curve fitted to real numbers.',
    success: 'Thank you. Your Horsham request is with our team.'
  },

  faq: {
    h2: 'Horsham: common questions',
    intro: 'Model choice, the age-profile project, courses, vibe coding and arrangements.',
    items: [
      { q: 'What is the population of Horsham?', a: 'At the 2021 census the ONS recorded 50,215 usual residents in the Horsham built-up area and 146,778 in Horsham district.' },
      { q: 'Are there AI and programming classes for Horsham learners?', a: 'Yes. We teach live online for ages 6 to 67, so Horsham, Roffey, Broadbridge Heath, Warnham and Mannings Heath can all take part.' },
      { q: 'What is minimum description length?', a: 'It is a way of choosing between models: prefer the one for which the model and its corrections together take the fewest bits to write down.' },
      { q: 'What is overfitting?', a: 'Overfitting is when a model matches its training data very closely, including the accidents in it, and then predicts new data badly.' },
      { q: 'What did the Horsham project find?', a: 'Among curves of degree 0 to 40 fitted to the district age profile, degree 20 gave the shortest message at 904.5 bits, against 1,200 bits for the raw numbers.' },
      { q: 'Do children do vibe coding?', a: 'Yes. They brief an AI in plain words, read what it builds in Scratch or Python, and test it against the brief.' },
      { q: 'When can a learner build AI agents?', a: 'Once Python is comfortable, typically older teens and adults. Work in Copilot Studio is taught in private lessons only.' },
      { q: 'Does it fit with A level maths or computer science?', a: 'Curve fitting, statistics and programming all connect to those courses. We teach understanding and make no promises about grades.' },
      { q: 'What do lessons cost?', a: 'The first is free. From then on a group place is USD 100 per month and one-to-one is USD 150 per month.' },
      { q: 'What happens in school holidays?', a: 'Tell us the dates and lessons take a break.' }
    ]
  },

  next: {
    eyebrow: 'More pages',
    h2: 'Other West Sussex projects',
    html: 'See how the projects differ: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-crawley">Crawley</a> (why an average of averages misleads), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-worthing">Worthing</a> (who speaks after whom in a play) and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-bognor-regis">Bognor Regis</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> have the full list.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Horsham and West Sussex',
  footerPlaces: [
    { href: '/coding-classes-in-west-sussex', label: 'West Sussex' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hsm .cg-hero-grid { align-items: end; gap: clamp(1.3rem, 3.4vw, 3rem); }
.cg-root.cg-hsm .cg-hero h1 { font-weight: 740; letter-spacing: -0.027em; line-height: 1.07; }
.cg-root.cg-hsm .cg-capsule { border-left: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0 0 0.9rem 1rem; }
.cg-root.cg-hsm .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.81rem; }
.cg-root.cg-hsm .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.021em; }
.cg-root.cg-hsm .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-hsm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hsm .cg-table th { font-weight: 700; border-bottom: 1px solid var(--cg-accent); border-top: 1px solid var(--cg-accent); }
.cg-root.cg-hsm .cg-ladder-col { border-top: 2px dashed var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-hsm .cg-callout { border-radius: 0; border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Horsham district (E07000227), West Sussex, Census 2021 TS001 usual residents 146,778. ONS 2021 BUA (published): Horsham 50,215. English national curriculum, GCSE and A level. postcodes.io (Horsham, West Sussex): Roffey (suburban area, RH12), Broadbridge Heath, Warnham (villages, RH12), Mannings Heath (village, RH13).',
    localProject: 'Census 2021 TS007 age by single year, Horsham district (Nomis NM_2027_1): table total 146,776; ages 0 to 99 used (100 values), 100 and over (49) left out. Peak 2,368 at age 55; 980 at age 19; 1,955 at 74, 1,437 at 75. Raw storage 100 x 12 = 1,200 bits. Least-squares polynomial of degree k; two-part code: 3.32 bits per coefficient plus 50 log2(2 pi e RSS/100) bits of corrections. Degree 0: rmse 581.4, 1,126.4 bits; 2: 286.1, 1,030.7; 6: 148.3, 949.2; 12: 137.7, 958.5; 20: 78.8, 904.5 (minimum over 0 to 40); 30: 67.9, 916.3; 40: 55.0, 919.0. Even-age fit, odd-age test: degree 20 99.0 (lowest), degree 30 32,689.1. Degree 20 misses age 19 by 295 (980 vs 1,275). District data, not the town. Lesson family: minimum description length, Occam\'s razor as code length, model selection.',
    requiredMentions: [
      '146,778',
      '146,776',
      'Roffey',
      'Broadbridge Heath',
      'Warnham',
      'Mannings Heath',
      'minimum description length',
      '904.5',
      '1,200 bits',
      '2,368'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS007 age by single year and TS001 usual residents, via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Nomis dataset NM_2027_1 (TS007 Age by single year), Horsham local authority district.', url: 'https://www.nomisweb.co.uk/datasets/c2021ts007' },
      { claim: 'postcodes.io places: Horsham and the named places in Horsham district.', url: 'https://api.postcodes.io/places?q=Horsham' }
    ],
    rejectedClaims: [
      'Why the age profile has its dips and steps (universities, birth rates, history): no cause is claimed; only the counts are described.',
      'That degree 20 is the right model of the age profile: not claimed; it gives the shortest message among polynomials under one pricing scheme.',
      'The sum of our 100 age counts as a population figure: not printed; only the ONS table totals are given.',
      'That the age profile describes the town of Horsham: not claimed; the data is for the district.',
      'That the named places are close to the town: not claimed; they are listed as recorded in the district.',
      'Named schools, term dates and sterling prices: none.'
    ]
  }
};
