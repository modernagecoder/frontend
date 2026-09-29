'use strict';
// Halesowen (cg- town page, UK cluster Phase 8, towns band A, row 406). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how can an AI agent know when to say "I am not
// sure"? (honest uncertainty: prediction intervals from training errors versus split conformal prediction on a calibration
// set, and selective prediction / abstention that hands the least certain cases to a human).
// Data (read 29 September 2026): Nomis Census 2021 for all 1,033 output areas in Dudley borough (E08000027): TS017 household
// size (NM_2037_1; 137,044 households, 41,701 one-person), TS045 no-car share (NM_2063_1), TS006 density (NM_2026_1).
// (TS044 was also requested but came back truncated from Nomis and was not used.)
// Our run (scratchpad hls/unc.py): target = % one-person households; inputs log density and % no car. Random forest (300
// trees, min leaf 3); 50 random splits 60% train / 20% calibration / 20% test. 90% interval from training errors: half-width
// 9.34 points, actual test coverage 76.0%. Split conformal from the calibration set: half-width 15.31, coverage 90.6%
// (range 84.5% to 96.6% across splits). Selective prediction ranked by spread of the 300 trees' predictions, mean absolute
// error when answering the most confident share: 100% 6.66; 80% 5.97; 60% 5.26; 40% 4.74; 20% 4.43. Always predicting the
// average: 8.86.
// Lesson family: uncertainty quantification, conformal prediction, calibration set, abstention / selective prediction.
// Screened: "conformal", "prediction interval", "abstention", "selective prediction", "calibration set" 0 hits. Calibration of
// probabilities (reliability) was used this session on another page; here the object is intervals and abstaining.
// Place facts: Dudley TS001 323,486 (registered by the Dudley page, not a mention here). ONS 2021 BUAs (published):
// Halesowen 60,110; Stourbridge 56,950. postcodes.io suburban areas whose nearest OA centroid lies in the Halesowen BUA (our
// check): Cradley, Hasbury, Hayley Green, Hawne, Lapal, Hurst Green, Hill and Cakemore.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HALESOWEN', label: 'Halesowen', blurb: 'Vibe coding and AI agents classes for Halesowen, with a project that teaches an agent to say how unsure it is and when to pass a question to a person.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-halesowen',
  code: 'hso',
  accent: '#4C1713',
  accentRationale: 'Halesowen: a dark oxblood brown (11.76:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Halesowen',
    eyebrow: 'Halesowen, Dudley, West Midlands, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'West Midlands', href: '/coding-classes-in-the-west-midlands' },
    { label: 'Dudley', href: '/online-coding-and-python-classes-in-dudley' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Halesowen, England',
  title: 'Vibe Coding and AI Agents Classes in Halesowen | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents and Python lessons for Halesowen, Cradley, Hasbury and Hayley Green learners aged 6 to 67, solo or in groups. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Halesowen, with a Census project on building an agent that knows when it might be wrong.',
  twitterDescription: 'Halesowen vibe coding, AI agents and Python classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Halesowen',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Halesowen and Dudley borough, taught live with reasoning first.'
  },

  h1: 'Vibe coding and AI agents classes in Halesowen',
  capsuleQ: 'Where can Halesowen learners find the best vibe coding and AI agents classes?',
  capsule: 'Halesowen\'s built-up area counted 60,110 residents in 2021 and Stourbridge\'s 56,950, ONS figures for two towns largely within Dudley borough. Cradley, Hasbury, Hayley Green, Hawne and Lapal are recorded suburbs within Halesowen. Ages six to 67 are welcome for vibe coding, AI agents, Python, coding and maths, taught on video calls by India-based tutors, one-to-one or with five to ten peers at your level. We teach clear thinking first, so a learner can tell a confident agent from a correct one. We run the opening session free and close it by naming the course we think fits. The Halesowen project builds a predicting agent on 1,033 Census areas and teaches it to state its uncertainty honestly and to hand its shakiest cases to a person. From then on, a class costs USD 100 a month and one-to-one tuition USD 150 a month.',
  lead: 'An AI agent that answers every question in the same confident tone is dangerous, because you cannot tell its good answers from its guesses. A trustworthy agent does two extra things: it gives a range around each answer that really does contain the truth as often as it claims, and it knows when to stop and ask a human. Both can be built and tested in Python. In this project the agent predicts the share of one-person households in each of Dudley borough\'s 1,033 Census output areas, and the learner checks whether its "90% sure" ranges live up to the promise, then lets it skip the questions it is least sure about.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a learner in Halesowen?',

  picks: {
    eyebrow: 'Halesowen course picks',
    h2: 'Halesowen courses in thinking, vibe coding and agents',
    intro: 'Choose by age. Each course opens with a free live lesson, and booking takes no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: estimating with a range, and saying "I am not sure" when that is true.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games dreamed up by the learner, coded with an AI and tested hard.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the honest-uncertainty agent.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents, evaluation, uncertainty and handing off to people, built in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Halesowen and Dudley borough',
      h2: 'Halesowen, Cradley, Hasbury and Hayley Green',
      intro: 'ONS counts for Halesowen and Stourbridge, and the suburbs recorded inside Halesowen.',
      body: [
        { kind: 'table', caption: 'Two ONS built-up areas in Dudley borough, 2021 census residents', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Halesowen', '60,110'],
          ['Stourbridge', '56,950']
        ] },
        { kind: 'p', text: 'Both figures are published by the ONS and shown separately, not summed. Postcodes.io lists Cradley, Hasbury, Hayley Green, Hawne, Lapal, Hurst Green and Hill and Cakemore as suburban areas, and the nearest Census output area to each falls inside the Halesowen built-up area. Schools in Dudley borough follow England\'s national curriculum; tell us the holiday weeks and lessons will be arranged around them.' },
        { kind: 'callout', h3: 'The West Midlands and our approach', p: 'See <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">coding classes in the West Midlands</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands region</a> for more choices. Why we build thinking before tool use is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Halesowen project',
      h2: 'An agent that admits doubt: conformal prediction intervals and abstention',
      intro: 'Predict, attach an honest range, and decline the questions you are least sure of.',
      body: [
        { kind: 'p', text: 'Three Census 2021 tables, pulled through the Nomis API, cover every one of Dudley borough\'s 1,033 output areas. Of 137,044 households, 41,701 are one person living alone, and the agent\'s job is to predict that share for each area from two clues: how densely populated it is and how many households have no car. A random forest does the predicting. The areas are split three ways: 60% to train on, 20% held back as a calibration set, and 20% as a final test, and the whole experiment is repeated on 50 different random splits.' },
        { kind: 'p', text: 'First the agent needs a range it can stand behind, a prediction interval. The tempting shortcut is to look at its errors on the training areas and take a range wide enough to cover 90% of them. Split conformal prediction does the same thing on the calibration set instead, areas the model never trained on, with a small correction for the size of that set.' },
        { kind: 'table', caption: 'Promised 90% ranges for each area\'s one-person share, tested on unseen areas, averages of 50 splits, our Python run on Census 2021 data', head: ['How the range was set', 'Range either side of the prediction', 'Test areas actually inside it'], rows: [
          ['From errors on training areas', '9.34 points', '76.0%'],
          ['Conformal, from the calibration set', '15.31 points', '90.6%']
        ] },
        { kind: 'p', text: 'The shortcut promised 90% and delivered 76.0%, because a model always looks better on data it has already seen. The conformal range is wider and honest, landing at 90.6% on average (between 84.5% and 96.6% on individual splits, as expected with about 200 test areas). Next comes abstention. The forest is 300 trees, and where they disagree most the agent is least sure, so it can answer only its most confident cases and pass the rest to a person.' },
        { kind: 'table', caption: 'Average error when the agent answers only its most confident share of test areas, our simulation', head: ['Share of areas answered', 'Average error (points)'], rows: [
          ['All of them', '6.66'],
          ['Most confident 80%', '5.97'],
          ['Most confident 60%', '5.26'],
          ['Most confident 40%', '4.74'],
          ['Most confident 20%', '4.43']
        ] },
        { kind: 'p', text: 'Saying "pass" on the doubtful 60% cuts the average error from 6.66 to 4.74 points, against 8.86 for simply guessing the borough average every time. The price is that a person must handle the rest. Choosing that trade-off is a design decision, not something the agent should decide for itself.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Guess sweets in a jar with a range instead of one number, and check how often the range catches the answer.' },
          { h3: 'Ages 11 to 15', p: 'Predict one-person shares for Dudley areas in Python and count how often a stated range is right.' },
          { h3: 'Ages 15 and up', p: 'Build split conformal intervals, test coverage and design an agent that knows when to abstain.' }
        ] },
        { kind: 'callout', h3: 'Census data, our agent', p: 'Household, car and density counts are Office for National Statistics Census 2021 data from Nomis, under the Open Government Licence. The model, the ranges, the abstention rule and every figure in the tables are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents and doubt',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Knowing the limits of its knowledge is part of an agent\'s job.',
      body: [
        { kind: 'table', caption: 'From the Halesowen uncertainty project to real AI agents', head: ['In the Dudley borough experiment', 'When you build or use an agent'], rows: [
          ['Training-based ranges covered 76.0%', 'Confidence measured on familiar data is inflated'],
          ['Conformal ranges covered 90.6%', 'Check promises on data kept aside'],
          ['Tree disagreement flagged doubtful areas', 'Disagreement is a useful warning sign'],
          ['Answering the confident 40% cut error to 4.74', 'An agent that can pass is more trustworthy'],
          ['A person handled the rest', 'Decide in advance when a human takes over']
        ] },
        { kind: 'p', text: 'Language model agents rarely volunteer how sure they are, and when asked they can sound certain about guesses. When Halesowen learners vibe code, they tell the AI what to build in plain words, and they also write down when the finished program must answer "not sure", then test that rule on held-back cases. Agents that act for you, sending messages or changing files, most need a clear point at which they stop and ask. We hold agent projects back until a student can debug Python alone, which usually means mid-teens or older, and Copilot Studio is reserved for private tuition. Read more on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents courses for UK students</a> and the idea underneath, <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'This page has no link to the ONS, Nomis or postcodes.io beyond using their open data. The agent, its thresholds and any mistakes belong to Modern Age Coders.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From guessing jars to agents that ask for help',
    intro: 'We treat the school year as a first estimate and let the trial settle the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Estimates, ranges and honest "I do not know" answers.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps built with an AI and checked by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and uncertainty', p: 'Models, ranges and tests on held-back data beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Trustworthy agents', p: 'Agents with ranges, stop rules and human hand-offs, in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and uncertainty',
    h2: 'How can an AI agent know when to say "I am not sure"?',
    intro: 'An agent can measure its own uncertainty, for example with conformal prediction intervals checked on held-back data, and abstain by handing its least certain cases to a person.',
    p1: 'On Dudley borough\'s 1,033 Census areas, ranges built from training errors promised 90% and covered 76.0%, conformal ranges covered 90.6%, and answering only the most confident 40% of areas cut the average error from 6.66 to 4.74 points.',
    p2: 'Learners who have built that agent ask of any AI tool: how does it show doubt, and what happens when it has some?',
    closer: 'Designing agents that know their limits keeps Halesowen teenagers in control of the AI they build, which is exactly why learning to code still matters in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Hasbury to Hayley Green, all online',
    intro: 'The only equipment is a computer and a connection steady enough for a video call.',
    cells: [
      { h3: 'Learners at the keyboard', p: 'Students write the code, prompts and tests themselves while the tutor follows along on screen share asking why.' },
      { h3: 'Pitched by the trial', p: 'The free lesson reveals the current level and so the first topic; exam boards are noted.' },
      { h3: 'Trial with no fee', p: 'Lesson one is free and ends with our suggested course.' },
      { h3: 'Level-matched classes', p: 'Five to ten British learners at the same stage in every class.' },
      { h3: 'Two lessons weekly', p: 'Holidays off, following school terms.' },
      { h3: 'Your slot, all year', p: 'Our tutors shift with the UK clock changes so your lesson time holds.' }
    ],
    spec: { title: 'Why we teach online', p: 'Five learners at one stage with the same free evening seldom live near each other. Over video, they do not need to.' }
  },

  fees: {
    h2: 'Halesowen fees',
    intro: 'Halesowen learners pay the international rates we charge everywhere outside India.',
    first: 'One whole lesson without charge, then our advice.',
    group: 'Nearly eight live lessons a month in a small class.',
    private: 'Nearly eight live one-to-one lessons a month.',
    closer: 'We quote and bill in US dollars, not sterling, and no bill is raised until the trial has pinned down a course and a weekly slot. The pricing page explains holidays, missed lessons and changing between class and private tuition.'
  },

  reviewsH2: 'Google reviews: West Midlands parents and UK learners',

  book: {
    h2: 'Book a free Halesowen lesson',
    intro: 'An age or school year and a favourite pastime help us plan. The trial could be a jar-guessing game with ranges, a Scratch game planned with an AI, first steps in Python, or an agent that says when it is unsure.',
    success: 'Thank you. Your Halesowen request has arrived.'
  },

  faq: {
    h2: 'Halesowen questions',
    intro: 'Uncertainty, the Census agent, vibe coding, Python and the practical details.',
    items: [
      { q: 'What is the population of Halesowen?', a: 'The ONS gives 60,110 residents for the Halesowen built-up area at the 2021 census.' },
      { q: 'Are vibe coding and AI agents classes online in Halesowen?', a: 'They are, as live video lessons. Anyone 6 to 67 in Cradley, Hasbury or elsewhere in Dudley borough can join.' },
      { q: 'What is conformal prediction?', a: 'A way to turn any model\'s predictions into ranges with a stated success rate, by measuring its errors on a calibration set it was not trained on. In our Halesowen test, 90% ranges covered 90.6% of new areas.' },
      { q: 'What is a prediction interval?', a: 'A range around a prediction that should contain the true value a stated share of the time, such as 90%. Ranges based only on training errors are usually too narrow.' },
      { q: 'What does the Halesowen project involve?', a: 'Predicting the share of one-person households for 1,033 Census areas, testing whether the agent\'s ranges keep their promise, and letting it abstain on its least certain cases.' },
      { q: 'What is vibe coding?', a: 'Describing a program in everyday words while an AI writes the code; the learner stays responsible for planning and testing it.' },
      { q: 'When can students build AI agents?', a: 'When they can fix their own Python bugs, usually mid-teens or later; Copilot Studio needs private lessons.' },
      { q: 'Do you cover GCSE and A level?', a: 'Computer science and maths, yes, taught for understanding with no grade promised.' },
      { q: 'How much are lessons?', a: 'Nothing for the trial; afterwards a group place is USD 100 monthly and a personal tutor USD 150 monthly.' },
      { q: 'Do lessons pause for holidays?', a: 'Yes, in school holidays; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More West Midlands pages',
    html: 'Other pages with their own projects: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-dudley">Dudley</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-west-bromwich">West Bromwich</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-walsall">Walsall</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-solihull">Solihull</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Halesowen and the West Midlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-west-midlands', label: 'West Midlands' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hso .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.3vw, 2.7rem); }
.cg-root.cg-hso .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-hso .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-hso .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hso .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.02em; }
.cg-root.cg-hso .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-hso .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hso .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-hso .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-hso .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Dudley (E08000027), Census 2021 TS001 usual residents 323,486. ONS 2021 BUAs (published): Halesowen 60,110; Stourbridge 56,950. postcodes.io suburban areas (nearest OA centroid in Halesowen BUA, our check): Cradley, Hasbury, Hayley Green, Hawne, Lapal, Hurst Green, Hill and Cakemore.',
    localProject: 'Census 2021 TS017/TS045/TS006 for 1,033 Dudley OAs: 137,044 households, 41,701 one-person. Random forest predicts % one-person from log density and % no car; 50 splits 60/20/20. 90% ranges: training-error half-width 9.34, coverage 76.0%; split conformal half-width 15.31, coverage 90.6% (84.5 to 96.6). Abstention by tree spread, MAE answering 100/80/60/40/20%: 6.66/5.97/5.26/4.74/4.43; mean-only 8.86. Lesson family: conformal prediction, calibration set, abstention.',
    requiredMentions: [
      '60,110',
      '137,044',
      '41,701',
      'Cradley',
      'Hasbury',
      'Hayley Green',
      'Lapal',
      'Hill and Cakemore',
      'conformal prediction',
      'calibration set'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS017, TS045, TS006 and TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Output Areas (December 2021) population-weighted centroids and OA to BUA lookup, ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: suburban areas in Dudley borough.', url: 'https://api.postcodes.io/places?q=Hasbury' }
    ],
    rejectedClaims: [
      'Abbey, chain-making or industrial history: not read from a source; not claimed.',
      'Why some areas have more people living alone: no cause claimed; the data only tests the agent.',
      'That the Halesowen built-up area lies wholly in Dudley borough: not claimed.',
      'Sum of the built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
