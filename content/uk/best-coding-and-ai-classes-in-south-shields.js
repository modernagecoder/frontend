'use strict';
// South Shields (cg- town page, UK cluster Phase 8, towns band A, row 401). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does attention in AI decide what to look
// at? (attention as a soft lookup: queries, keys and values, softmax weights, hard versus soft attention, choosing keys).
// Data (read 29 September 2026): Nomis Census 2021 for all 543 output areas in South Tyneside (E08000023): TS045 car or
// van availability (NM_2063_1; 68,305 households, 22,366 with no car), TS017 household size (NM_2037_1; one-person share)
// and TS006 population density (NM_2026_1).
// Our run (scratchpad ssh/att.py): each area in turn is hidden; its no-car share is predicted from the other 542. Query and
// keys = standardised [log10 density, % one-person households]; score = minus squared distance divided by a sharpness
// setting s; softmax weights; prediction = weighted mean of values (no-car shares). Mean absolute error in percentage
// points / median effective number of areas (1 / sum of squared weights): closest area only 11.48 / 1; s 0.003 10.44 /
// 1.7; 0.01 9.70 / 3.9; 0.03 9.38 / 11.2; 0.1 9.27 / 34.9; 0.3 9.37 / 104.1; 1 9.85 / 252.2; 3 10.84 / 408.1; equal
// weights 13.15 / 542. Keys at s 0.03: density only 12.56; one-person share only 9.87; both 9.38. Correlation with the
// no-car share: one-person share 0.66, log density 0.29.
// Lesson family: attention mechanism as soft lookup (query, key, value), hard vs soft attention, choosing keys.
// Screened: "attention", "queries, keys and values", "hard attention", "soft attention" 0 hits. k-nearest neighbours is
// used elsewhere and softmax temperature on Rotherham; here the lesson is the attention pattern, and "sharpness" is used.
// Place facts: South Tyneside (E08000023) TS001 147,776. ONS 2021 BUAs (published): South Shields 73,345; Jarrow 29,470;
// Hebburn 21,345. postcodes.io (South Tyneside) suburban areas: Westoe, Harton, Cleadon Park, Biddick Hall, Simonside,
// Horsley Hill, Tyne Dock, Brockley Whins; Cleadon village; Whitburn town.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'SOUTH SHIELDS', label: 'South Shields', blurb: 'Coding and AI classes for South Shields, with a project that builds the attention idea behind modern AI from Census data.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-south-shields',
  code: 'shs',
  accent: '#5C5C17',
  accentRationale: 'South Shields: a dark olive (5.64:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'South Shields',
    eyebrow: 'South Shields, South Tyneside, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Tyne and Wear' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-east-england', name: 'North East England' }],
  nav: [
    { label: 'Tyne and Wear', href: '/coding-classes-in-tyne-and-wear' },
    { label: 'Sunderland', href: '/best-coding-class-in-sunderland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'South Shields, England',
  title: 'Coding and AI Classes in South Shields | Python, Ages 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for South Shields, Jarrow, Westoe and Cleadon learners aged 6 to 67, live with a tutor. The first lesson is free.',
  ogDescription: 'Coding and AI classes for South Shields, and a Census project that builds the attention mechanism behind modern AI, step by step.',
  twitterDescription: 'South Shields coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for South Shields',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in South Shields and South Tyneside, taught live with clear thinking first.'
  },

  h1: 'Coding and AI classes in South Shields',
  capsuleQ: 'Where can South Shields learners find the best coding and AI classes?',
  capsule: 'The 2021 census counted 147,776 usual residents in South Tyneside, and the ONS gives the South Shields built-up area 73,345, Jarrow 29,470 and Hebburn 21,345. Westoe, Harton, Biddick Hall, Simonside and Horsley Hill are among the suburbs on record in the borough. Anyone aged 6 to 67 there can take coding, AI, Python, vibe coding and maths in live video lessons with our tutors in India, privately or in a group of five to ten at the same stage. Thinking comes first in every course, so a learner can explain and test what an AI suggests. Your first lesson is on us and closes with our advice on a course. The South Shields project builds attention, the core idea inside the language models behind today\'s chatbots, from Census data on 543 small areas. From month two, lessons are USD 100 a month in a group or USD 150 a month privately.',
  lead: 'The large language models behind today\'s chatbots are built around an operation called attention. Faced with a word, the model compares it with every other word in view, gives each a weight that says how relevant it seems, and blends what they carry in proportion to those weights. The jargon is queries, keys and values: the query is what you are looking for, each key is how an item advertises itself, and each value is what it hands over if chosen. The idea is simple enough to build by hand. In this project the items are South Tyneside\'s 543 Census output areas rather than words, and attention is used to guess a hidden area\'s share of households without a car by looking at areas that resemble it.',
  wa: 'Hello Modern Age Coders, can we book a free coding or AI lesson for a learner in South Shields?',

  picks: {
    eyebrow: 'South Shields course picks',
    h2: 'South Shields courses in thinking, Python and AI',
    intro: 'Choose by age and interest. On every course the opening lesson is live and free, with no card asked for.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: deciding what counts as similar, and why the answer changes the result.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games built by explaining the idea to an AI, then checking each piece works.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python up to the ideas inside transformers, with the Census attention build.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How language models work, prompting with care and building AI agents in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'South Tyneside',
      h2: 'South Shields, Jarrow, Hebburn and the Boldons',
      intro: 'Three ONS built-up areas in South Tyneside, and neighbourhoods recorded in the borough.',
      body: [
        { kind: 'table', caption: 'ONS 2021 census populations of built-up areas in South Tyneside', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['South Shields', '73,345'],
          ['Jarrow', '29,470'],
          ['Hebburn', '21,345']
        ] },
        { kind: 'p', text: 'These are separate ONS counts, printed as published and not totalled; the borough figure of 147,776 comes from another census table, and smaller places such as the Boldons, Whitburn and Cleadon are listed by the ONS on their own. Postcodes.io records Westoe, Harton, Cleadon Park, Biddick Hall, Simonside, Horsley Hill, Tyne Dock and Brockley Whins as suburban areas in South Tyneside. The borough\'s schools use England\'s national curriculum; tell us your holiday weeks and we will keep lessons out of them.' },
        { kind: 'callout', h3: 'Tyne and Wear, the North East and why thinking comes first', p: 'Browse <a class="cg-inline-link" href="/coding-classes-in-tyne-and-wear">coding classes in Tyne and Wear</a> or the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-east-england">North East England</a> page. Our approach is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The South Shields project',
      h2: 'Building attention by hand: queries, keys and values from Census data',
      intro: 'Hide one area, let it attend to the other 542, and watch how the spread of attention changes the answer.',
      body: [
        { kind: 'p', text: 'The learner fetches three Census 2021 tables from the Nomis API for every output area in South Tyneside: car availability, household size and population density. Across the 68,305 households, 22,366 have no car or van, but the share swings widely from one small area to the next. The task is to hide one area\'s no-car share and estimate it from the others. Each area\'s key is two numbers, its population density and its share of one-person households; the hidden area\'s own two numbers form the query; each other area\'s no-car share is its value.' },
        { kind: 'p', text: 'Attention then works in three steps. Score each key by how close it is to the query. Turn the scores into weights that add up to one using the softmax function, with a sharpness setting that decides whether the weight piles onto a few areas or spreads across many. Finally, take the weighted average of the values. Repeat for all 543 areas and measure the typical error.' },
        { kind: 'table', caption: 'Estimating each hidden area\'s no-car share with attention, our Python run on Census 2021 data for South Tyneside', head: ['How attention is spread', 'Areas sharing most of the weight', 'Average error (points)'], rows: [
          ['All on the single closest area', '1', '11.48'],
          ['Very sharp', 'About 4', '9.70'],
          ['Moderate', 'About 35', '9.27'],
          ['Broad', 'About 252', '9.85'],
          ['Equal weight on every area', '542', '13.15']
        ] },
        { kind: 'p', text: 'Neither extreme wins. Copying the single most similar area, known as hard attention, is noisy because one area can be an oddity. Weighting all 542 equally ignores the query entirely and is worst of all. Soft attention across a few dozen similar areas comes out ahead, cutting the error by about 30% compared with equal weights. The keys matter too. Using density alone as the key gives an error of 12.56 points; the one-person share alone gives 9.87; both together give 9.38 at the same sharpness. Which features a model compares decides what it can find.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Guess a mystery card by asking the three most similar cards, then all the cards, and compare.' },
          { h3: 'Ages 11 to 15', p: 'Pick one hidden area in Python, list its most similar neighbours and average their values.' },
          { h3: 'Ages 15 and up', p: 'Code softmax attention, sweep the sharpness, test different keys and read the weights.' }
        ] },
        { kind: 'callout', h3: 'Census counts, our attention model', p: 'Car, household and density figures are Office for National Statistics Census 2021 data from Nomis, under the Open Government Licence. The hiding, scoring, weights and errors are our own calculations. Real language models score keys with scaled dot products of learned projections; ours uses plain distance so the idea stays visible.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Attention and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Knowing how a chatbot weighs its context changes how you give it context.',
      body: [
        { kind: 'table', caption: 'From the Census attention build to working with language models', head: ['In the South Tyneside project', 'Inside a chatbot'], rows: [
          ['The query was the hidden area', 'Each word asks what else is relevant'],
          ['Keys were density and household share', 'Relevance depends on what gets compared'],
          ['Values were no-car shares', 'Information flows from the words attended to'],
          ['Attention on one area was noisy', 'Latching onto one detail can mislead'],
          ['Equal weights ignored the question', 'A cluttered prompt dilutes what matters']
        ] },
        { kind: 'p', text: 'This is one reason a short, relevant prompt often beats a long, padded one: the model has to spread its attention over whatever you give it. Vibe coding means describing a program while an AI writes it, and our South Shields learners describe what matters and leave out what does not, then test every line that comes back. AI agents that read documents and call tools rely on the same mechanism, so what they are shown shapes what they do. Agent building is for learners whose Python is fluent, usually older teens and adults, and Copilot Studio agents are one-to-one lessons only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">how UK students move into AI agents</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We have no connection with the Office for National Statistics, Nomis or postcodes.io. The data is theirs and openly published; the attention model and any mistakes in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From mystery cards to transformers',
    intro: 'Year group is a starting guess; the free lesson confirms the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Similarity, averages and explaining a guess.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner, written with AI help and tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Real data, similarity measures and attention next to GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Language models and agents', p: 'How transformers work, then Python agents built with care.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Attention in AI',
    h2: 'What is attention in AI, and what are queries, keys and values?',
    intro: 'Attention is how a transformer decides which parts of its input to use: a query is compared with every key, the scores become weights, and the matching values are blended by those weights.',
    p1: 'Built by hand on South Tyneside\'s 543 Census areas, it guessed a hidden area\'s no-car share with an average error of 9.27 points when attention spread over about 35 similar areas, against 11.48 for copying one area and 13.15 for weighting all equally.',
    p2: 'Once learners have seen that, they ask of every chatbot answer: what was it given to attend to, and was that the right context?',
    closer: 'Understanding the machinery lets South Shields teenagers use AI with judgement instead of faith, and that alone makes learning to code worthwhile in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Westoe to Whitburn, taught online',
    intro: 'Lessons need only a computer with a webcam and a connection steady enough for video.',
    cells: [
      { h3: 'The learner drives', p: 'All typing, prompting and running is done by the student; the tutor follows the shared screen and questions each step.' },
      { h3: 'Set by the trial', p: 'The free lesson reveals what the learner already knows, which fixes where we begin; exam boards are noted too.' },
      { h3: 'No-charge first class', p: 'Class one is free and wraps up with our suggested course.' },
      { h3: 'Stage-matched classes', p: 'Five to ten learners from around Britain share each group, all at one level.' },
      { h3: 'Two sessions a week', p: 'Holidays off, in line with school terms.' },
      { h3: 'Clock-proof slots', p: 'When the UK clocks change, our tutors move and your lesson time does not.' }
    ],
    spec: { title: 'Why we teach over video', p: 'A group of five at one level, all free on one evening, rarely lives within reach of one room. Online, that stops being a problem.' }
  },

  fees: {
    h2: 'South Shields fees',
    intro: 'South Shields learners pay the international rate we use in every country other than India.',
    first: 'A full lesson free of charge, then a course recommendation.',
    group: 'About eight live group lessons in a month.',
    private: 'About eight live private lessons in a month.',
    closer: 'We invoice in US dollars, never sterling, and only after the trial has fixed a course and a weekly slot. The pricing page sets out holidays, absences and changing between private and group lessons.'
  },

  reviewsH2: 'Tyneside families and learners from across the UK, on Google',

  book: {
    h2: 'Book a free South Shields lesson',
    intro: 'Send the learner\'s age or school year and what they like doing. The trial might be a mystery-card guessing game, a Scratch game planned with an AI, a first go at Python, or ranking real places by similarity.',
    success: 'Thank you. We have received your South Shields request.'
  },

  faq: {
    h2: 'South Shields questions',
    intro: 'Attention, the Census project, Python, vibe coding and the everyday details.',
    items: [
      { q: 'What is the population of South Shields?', a: 'The ONS records 73,345 people in the South Shields built-up area at the 2021 census; South Tyneside as a whole had 147,776.' },
      { q: 'Can I learn coding and AI online in South Shields?', a: 'Yes, in live video lessons for ages 6 to 67 across South Shields, Jarrow, Hebburn and the rest of South Tyneside.' },
      { q: 'What is attention in a transformer?', a: 'The step in which each word looks at the other words, scores how relevant each one is, and combines their information by those scores. Stacking many attention steps is what lets language models follow context.' },
      { q: 'What is the difference between hard and soft attention?', a: 'Hard attention picks a single item; soft attention spreads weight across many. In our Census build, soft attention over a few dozen areas beat picking just one.' },
      { q: 'What happens in the South Shields project?', a: 'Learners hide one Census area at a time, estimate its no-car share by attending to similar areas, and test how the spread of attention and the choice of keys change the error.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, at all ages; learners plan the program, describe it clearly and test what the AI writes.' },
      { q: 'At what stage do learners build AI agents?', a: 'When their Python is fluent, usually from the later teens; Copilot Studio agents are taught one-to-one only.' },
      { q: 'Is GCSE and A level support available?', a: 'Yes, for computer science and maths, aimed at real understanding; no grade is ever promised.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the first. Then USD 100 a month in a group or USD 150 a month privately.' },
      { q: 'Are lessons paused for school holidays?', a: 'They are; just share the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Tyne and Wear and North East pages',
    html: 'Neighbouring pages with projects of their own: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-tynemouth">Tynemouth</a> (a crowd of agents), <a class="cg-inline-link" href="/best-coding-class-in-sunderland">Sunderland</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-gateshead">Gateshead</a> and <a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle upon Tyne</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'South Shields and Tyne and Wear',
  footerPlaces: [
    { href: '/coding-classes-in-tyne-and-wear', label: 'Tyne and Wear' },
    { href: '/coding-and-ai-classes-in-north-east-england', label: 'North East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-shs .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3vw, 2.4rem); }
.cg-root.cg-shs .cg-hero h1 { font-weight: 740; letter-spacing: -0.03em; line-height: 1.06; }
.cg-root.cg-shs .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.05rem; background: color-mix(in srgb, var(--cg-accent) 4%, transparent); }
.cg-root.cg-shs .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-shs .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.016em; }
.cg-root.cg-shs .cg-table caption { font-weight: 600; text-align: left; font-size: 0.88rem; }
.cg-root.cg-shs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-shs .cg-table th { letter-spacing: 0.045em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-shs .cg-ladder-col { border-left: 4px double var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-shs .cg-callout { border-left-width: 5px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'South Tyneside (E08000023), Census 2021 TS001 usual residents 147,776. ONS 2021 BUAs (published): South Shields 73,345; Jarrow 29,470; Hebburn 21,345. postcodes.io (South Tyneside): Westoe, Harton, Cleadon Park, Biddick Hall, Simonside, Horsley Hill, Tyne Dock, Brockley Whins (suburban areas); Cleadon (village); Whitburn (town).',
    localProject: 'Census 2021 TS045/TS017/TS006 for 543 South Tyneside OAs; 68,305 households, 22,366 no car. Hide each OA; keys = standardised log density + one-person share; softmax over minus squared distance / s; value = no-car share. MAE points / effective areas: closest only 11.48 / 1; s 0.01 9.70 / 3.9; 0.1 9.27 / 34.9; 1 9.85 / 252.2; equal 13.15 / 542. Keys at s 0.03: density 12.56, one-person 9.87, both 9.38. Lesson family: attention as soft lookup, hard vs soft attention, choice of keys.',
    requiredMentions: [
      '147,776',
      '73,345',
      '29,470',
      '68,305',
      'Westoe',
      'Biddick Hall',
      'Simonside',
      'Horsley Hill',
      'queries, keys and values',
      'hard attention'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS045, TS017, TS006 and TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Nomis API dataset NM_2063_1, Census 2021 TS045 car or van availability.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2063_1.def.sdmx.json' },
      { claim: 'postcodes.io places: suburban areas in South Tyneside.', url: 'https://api.postcodes.io/places?q=Westoe' }
    ],
    rejectedClaims: [
      'Seaside, shipbuilding or ferry history: not read from a source; not claimed.',
      'Why some areas have fewer cars: no cause claimed; only the prediction error is reported.',
      'How production language models score keys: described only as learned dot products, not claimed in detail.',
      'Sum of the built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
