'use strict';
// Hastings (cg- town page, UK cluster Phase 8, towns band A, row 375). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: if labels are expensive, which
// examples should a model ask about first? (active learning).
// Data (read 28 September 2026): Nomis API, Census 2021, all 311 output areas in Hastings borough (E07000062, one batched
// call per table): TS044 accommodation type (NM_2062_1; 40,476 households), TS045 cars (NM_2063_1), TS007A age (NM_2020_1).
// Label: an output area is "mostly flats" when purpose-built flats + converted or shared houses + other converted
// buildings + commercial buildings make up at least half its households: 104 of 311. Features: share of households with
// no car or van; share of residents 65+; share aged 20 to 39. Mean no-car share: 45.7% in mostly-flats areas, 21.3% in
// the rest.
// Our run (scratchpad hst/al.py): 200 random splits, 93 test areas and a 218-area pool each; start with one labelled area
// of each class; logistic regression (scikit-learn, C=10) on standardised features; add one label at a time, either at
// random or the pool area with predicted probability nearest 0.5 (uncertainty sampling). Mean test accuracy, random vs
// uncertainty: 5 labels 75.7% vs 74.6%; 10: 79.9% vs 79.7%; 20: 82.1% vs 83.1%; 40: 83.9% vs 84.8%. All 218 pool labels:
// 85.4%. Always "not mostly flats": 66.6%. Paired difference (uncertainty minus random): 5 labels -1.06 points (se 0.89,
// better in 84 of 200 splits, worse in 105); 20: +1.06 (se 0.36); 40: +0.92 (se 0.25; better 109, worse 63, tied 28).
// One threshold, no-car share at least 39%, fitted on all 311 areas: 85.2% (optimistic, in-sample).
// Lesson family: active learning, uncertainty sampling, cold start, label budget, paired comparison over many splits.
// Screened: active learning 0 hits; Eastbourne owns the single neuron (perceptron) on weather.
// Place facts: Hastings borough TS001 usual residents 90,995; ONS 2021 Hastings BUA (published) 91,490, of which our OA sum
// inside the borough is 90,438 (the built-up area runs slightly beyond the boundary). postcodes.io places in Hastings
// district, East Sussex (suburban areas): St Leonards-on-Sea, Ore, Hollington, Silverhill, Baldslow, Bulverhythe.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HASTINGS', label: 'Hastings', blurb: 'Online coding, Python and AI classes for Hastings, with a project on active learning: which census areas should a model ask about first?' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-hastings',
  code: 'hst',
  accent: '#444C32',
  accentRationale: 'Hastings: a dark sea-kale grey-green (7.28:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Hastings',
    eyebrow: 'Hastings, East Sussex, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'East Sussex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'East Sussex', href: '/coding-classes-in-east-sussex' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Hastings, England',
  title: 'Online Coding and Python Classes in Hastings | AI, 6 to 67',
  description: 'Online coding, Python, AI and vibe coding classes for Hastings, St Leonards-on-Sea, Ore and Hollington learners aged 6 to 67, in groups or solo. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Hastings, and a machine learning project on active learning with the borough\'s real census data.',
  twitterDescription: 'Hastings online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Hastings',
    description: 'Online coding, Python, AI, vibe coding and mathematics for children, teenagers and adults in Hastings and St Leonards-on-Sea, taught live with thinking skills first.'
  },

  h1: 'Online coding and Python classes in Hastings',
  capsuleQ: 'Which are the best online coding and Python classes in Hastings?',
  capsule: 'Hastings borough had 90,995 usual residents at the 2021 census, and the ONS gives the Hastings built-up area 91,490, a little more because it runs just past the borough line. From St Leonards-on-Sea and Hollington to Ore and Silverhill, learners aged 6 to 67 can study coding, Python, AI, vibe coding and maths with us over live video, taught by tutors in India on their own or with five to ten classmates at the same level. We teach how to think before any tool, so that AI becomes something learners can check. A no-cost first lesson ends with our course advice. The Hastings project asks how a model can learn the most from the fewest labelled examples. Past the trial, it is USD 100 a month for a group place or USD 150 a month for private teaching.',
  lead: 'Machine learning needs labelled examples, and labels are often the expensive part. Someone has to read the scan, check the photo or visit the street. So a practical question follows: if you can only afford to label a few examples, which ones should you choose? Active learning answers that by letting the model pick the cases it is least sure about. This project tests the idea in Python on all 311 census output areas in Hastings borough, with a simple task, spotting the areas where most homes are flats, and measures whether letting the model choose really beats choosing at random.',
  wa: 'Hello Modern Age Coders, could a Hastings learner try a free coding or Python lesson?',

  picks: {
    eyebrow: 'Hastings course picks',
    h2: 'Courses for thinking, Python and AI',
    intro: 'Start from the learner\'s age and interests. Each course opens with a free live lesson, and no card is needed to book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: sorting, clues, and deciding which question tells you the most.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games first, then small apps made by describing them to AI and testing what comes back.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Python machine learning, from labelled data to fair testing, including this active learning project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the ground up, then data work, automation and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Hastings borough',
      h2: 'Hastings and St Leonards-on-Sea',
      intro: 'Two published census figures, and why they differ slightly.',
      body: [
        { kind: 'table', caption: 'Hastings in the 2021 census, ONS published figures and our output-area check', head: ['Measure', 'Figure'], rows: [
          ['Usual residents, Hastings borough', '90,995'],
          ['People in the Hastings built-up area', '91,490'],
          ['Of which inside the borough, our sum of output areas', '90,438'],
          ['Census output areas in the borough', '311'],
          ['Households in those output areas', '40,476']
        ] },
        { kind: 'p', text: 'The borough and the built-up area are drawn differently, so their totals do not match: most of the built-up area lies inside the borough, and a small part runs beyond it. Neighbourhoods such as St Leonards-on-Sea, Ore, Hollington, Silverhill, Baldslow and Bulverhythe all sit within Hastings district. Local schools teach the national curriculum for England; send us the holiday dates and we will keep lessons out of them.' },
        { kind: 'callout', h3: 'Nearby pages and our approach', p: 'Other options across the county are on <a class="cg-inline-link" href="/coding-classes-in-east-sussex">coding classes in East Sussex</a>, with the wider region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>. Our reasons for teaching judgement ahead of prompting are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Hastings project',
      h2: 'Active learning on 311 output areas',
      intro: 'Pretend every label costs money, then compare choosing at random with letting the model choose.',
      body: [
        { kind: 'p', text: 'Output areas are the smallest units the census publishes, a few hundred residents each. The learner downloads three tables from the Nomis API for all 311 in Hastings: type of home, cars per household and age. The label is whether at least half an area\'s households live in flats of any kind, which is true for 104 areas. The model sees three clues: the share of households without a car or van, the share of residents aged 65 or over, and the share aged 20 to 39. The first clue is strong. In the mostly-flats areas an average of 45.7% of households have no car, against 21.3% elsewhere.' },
        { kind: 'p', text: 'Each experiment hides 93 areas as a test set and treats the other 218 as a pool of unlabelled areas. The model, a logistic regression, starts with just two labels, one of each kind. Then it gains labels one at a time. In the random version the next area is picked blindly. In the active version, called uncertainty sampling, the model is asked which unlabelled area it is least sure about, the one whose predicted probability is closest to a coin toss, and that area is labelled next. To avoid being fooled by one lucky split, the whole experiment runs 200 times with different random splits.' },
        { kind: 'table', caption: 'Mean test accuracy over 200 splits, 93 test areas each, our Python run, 28 September 2026', head: ['Labels used', 'Random choice', 'Uncertainty sampling'], rows: [
          ['5', '75.7%', '74.6%'],
          ['10', '79.9%', '79.7%'],
          ['20', '82.1%', '83.1%'],
          ['40', '83.9%', '84.8%'],
          ['All 218 in the pool', '85.4%', '85.4%'],
          ['Always answer "not mostly flats"', '66.6%', '66.6%']
        ] },
        { kind: 'p', text: 'The result is modest and honest. With only five labels, letting the model choose is slightly worse than picking at random, 74.6% against 75.7%; a model that has seen two examples has little idea what it does not know, a problem called the cold start. From about 20 labels the active version pulls ahead and stays there: at 40 labels it averages 84.8%, within 0.6 points of the 85.4% reached with all 218 labels. Comparing the two methods split by split, uncertainty sampling wins in 109 of the 200 splits at 40 labels, loses in 63 and ties in 28, so the gain is small but consistent rather than a lucky average.' },
        { kind: 'p', text: 'One more check keeps the project grounded. A single rule, calling an area mostly flats when at least 39% of households have no car, scores 85.2% across all 311 areas. That rule was tuned on the very areas it is scored on, so it flatters itself a little, but it shows the task is easy and one clue does most of the work. Active learning is aimed mainly at tasks where labels are costly and the pattern is harder. The Hastings lesson is to measure the benefit rather than assume it.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play twenty questions and discuss which question would split the choices most evenly.' },
          { h3: 'Ages 11 to 15', p: 'Turn census counts into shares in Python and test the one-clue rule on real areas.' },
          { h3: 'Ages 15 and up', p: 'Code uncertainty sampling, repeat over many splits and compare the methods pair by pair.' }
        ] },
        { kind: 'callout', h3: 'ONS counts, our experiment', p: 'The census counts for each output area are Office for National Statistics figures published through Nomis. The labels, the models, the 200 splits and every accuracy figure are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Labels, AI and agents',
      h2: 'From active learning to vibe coding and AI agents',
      intro: 'Choosing what to check is a skill for people as well as models.',
      body: [
        { kind: 'table', caption: 'What the Hastings experiment carries into everyday AI work', head: ['In the output-area project', 'When working with AI'], rows: [
          ['Labels cost time, so choose them well', 'Your checking time is limited, so check the risky parts first'],
          ['The model was least sure near 50%', 'Look hardest where an AI answer could go either way'],
          ['Cold start: five labels were too few to guide choice', 'A new tool needs some checking everywhere before you trust its confidence'],
          ['200 splits, compared pair by pair', 'One good run proves little; test repeatedly'],
          ['A one-clue rule scored 85.2%', 'Try the simple approach before the clever one']
        ] },
        { kind: 'p', text: 'In our vibe coding lessons a learner describes a program and an AI drafts it, which leaves the learner with a checking job. Uncertainty sampling offers a way to plan that job: test first where things are most likely to go wrong, and never assume a feature works because the AI sounded sure. AI agents, which take several steps on their own, can be built to do something similar, pausing to ask a person when their confidence is low. Older teenagers and adults learn agent building once their Python is solid, and Copilot Studio agents are taught in private lessons only. Two good next reads are the <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents course for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We have no connection with the Office for National Statistics, Nomis or postcodes.io. The census figures and place data are theirs; the experiment and any errors in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From twenty questions to active learning',
    intro: 'We begin with a guess from the school year, then let the free lesson settle the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Clues, sorting and choosing the most useful question to ask.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Data, models and careful testing beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Python, data and agents', p: 'Programming, machine learning and AI agents built step by step.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and doubt',
    h2: 'Does an AI know what it does not know?',
    intro: 'Sometimes, roughly; the Hastings model learned to after about 20 labels.',
    p1: 'With two examples the Hastings model could not tell which areas it was unsure about, and choosing by its doubts made it slightly worse. Once it had seen more, its uncertainty became a useful guide.',
    p2: 'Learners who have watched that happen treat an AI tool\'s confidence as a clue to test, not a promise, especially on unfamiliar tasks.',
    closer: 'Knowing when to trust a model\'s confidence is a skill a Hastings teenager can build now, and it is one of the clearest reasons to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Ore to Bulverhythe, all online',
    intro: 'A computer with a steady connection is all a Hastings home needs.',
    cells: [
      { h3: 'Learners drive', p: 'Students write, prompt and run each program themselves, and the tutor follows along on screen share with questions.' },
      { h3: 'Level first', p: 'Whatever the year group, from Year 3 to Year 13, the trial lesson sets the starting point and we note any exam board.' },
      { h3: 'Try it free', p: 'No charge for the opening lesson, which ends with a course we would suggest.' },
      { h3: 'Right-sized classes', p: 'Five to ten UK learners working at about the same level.' },
      { h3: 'Twice a week', p: 'Lessons stop during school holidays.' },
      { h3: 'Fixed local times', p: 'Tutors move with the UK clock changes, keeping your hour the same.' }
    ],
    spec: { title: 'Why we teach online', p: 'Five learners at one stage, free at one time, rarely live in the same corner of a town. Online, distance stops mattering.' }
  },

  fees: {
    h2: 'Hastings fees',
    intro: 'Hastings learners pay our international rate, used in every country apart from India.',
    first: 'A full first lesson for free, with a course recommendation at the end.',
    group: 'About eight live group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Prices are in US dollars, not pounds, and we invoice only after the free lesson has agreed a course and a weekly slot. Breaks, missed lessons and format changes are explained on the pricing page.'
  },

  reviewsH2: 'East Sussex and wider UK families on Google',

  book: {
    h2: 'Book a free Hastings lesson',
    intro: 'Send the learner\'s age or school year and something they like. Trial options include logic and sorting puzzles, a Scratch game made with AI help, a first Python program, or a small data project.',
    success: 'Thank you. Your Hastings request has arrived.'
  },

  faq: {
    h2: 'Hastings questions',
    intro: 'The active learning project, vibe coding, agents and practical points.',
    items: [
      { q: 'What is the population of Hastings?', a: 'The 2021 census counted 90,995 usual residents in Hastings borough; the ONS gives the built-up area 91,490.' },
      { q: 'Are your online coding and Python classes open to Hastings learners?', a: 'Yes. Lessons are live on video, so anyone aged 6 to 67 in Hastings or St Leonards-on-Sea can join.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, to children, teenagers and adults, with the learner planning the program and testing what the AI writes.' },
      { q: 'Can my teenager learn to build AI agents?', a: 'Yes, once they have some Python. Copilot Studio agent building is one-to-one only.' },
      { q: 'What is the active learning project?', a: 'Learners train a model on Hastings census output areas and test whether letting it choose which areas to label beats picking them at random.' },
      { q: 'Is there a Hastings classroom?', a: 'No. We teach only live online.' },
      { q: 'Do you support GCSE and A level?', a: 'In computer science and maths, yes, aiming for understanding; we never promise grades.' },
      { q: 'Which ages do you teach?', a: 'Every age from 6 to 67.' },
      { q: 'How much are lessons?', a: 'The first is free. After that, USD 100 a month for a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons run in school holidays?', a: 'No, they pause. Just send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Sussex pages',
    html: 'Elsewhere in Sussex, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-eastbourne">Eastbourne</a>, <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-worthing">Worthing</a> each have their own page and project. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every town and county we cover.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hastings and East Sussex',
  footerPlaces: [
    { href: '/coding-classes-in-east-sussex', label: 'East Sussex' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hst .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-hst .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-hst .cg-capsule { border-left: 3px dotted var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-hst .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hst .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-hst .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-hst .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hst .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-hst .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-hst .cg-callout { border-left-width: 5px; border-radius: 0 11px 11px 0; }
`,

  dossier: {
    curriculumAuthority: 'Hastings (E07000062), Census 2021 TS001 usual residents 90,995. ONS 2021 Hastings BUA (published) 91,490; our OA sum inside the borough 90,438; 311 OAs, 40,476 households (TS044). postcodes.io suburban areas in Hastings district: St Leonards-on-Sea, Ore, Hollington, Silverhill, Baldslow, Bulverhythe.',
    localProject: 'Active learning on 311 OAs: label mostly flats (>= 50% of households in flats of any kind) = 104; features no-car share, 65+ share, 20 to 39 share; logistic regression; 200 splits (93 test, 218 pool). Random vs uncertainty: 5 labels 75.7 / 74.6; 10: 79.9 / 79.7; 20: 82.1 / 83.1; 40: 83.9 / 84.8; full pool 85.4; baseline 66.6. At 40: uncertainty better 109, worse 63, tied 28. One-threshold rule (no car >= 39%) 85.2% in-sample. Lesson family: active learning, uncertainty sampling, cold start, label budget.',
    requiredMentions: [
      '90,995',
      '91,490',
      '40,476',
      'St Leonards-on-Sea',
      'Hollington',
      'Silverhill',
      'Bulverhythe',
      'active learning',
      'uncertainty sampling',
      'cold start'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Census 2021 TS001, TS007A, TS044 and TS045 for Hastings output areas, via the Nomis API.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas within Hastings district, East Sussex.', url: 'https://api.postcodes.io/places?q=St%20Leonards-on-Sea' }
    ],
    rejectedClaims: [
      'Battle of Hastings history: not read from a source; not claimed.',
      'Why some areas have more flats or fewer cars: not measured; not claimed.',
      'Fishing, seafront or pier history: not read from a source; not claimed.',
      'Active learning always beating random choice: not true here at 5 labels; not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
