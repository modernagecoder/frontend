'use strict';
// Redditch (cg- town page, UK cluster Phase 8, towns band A, row 380). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can an AI model explain itself, and
// is the model you can read worse than the one you cannot? (decision trees, explainable AI).
// Data (read 29 September 2026): Nomis API, Census 2021, all 273 output areas in Redditch borough (E07000236), one batched
// call per table: TS044 accommodation type (NM_2062_1; 36,377 households), TS045 cars (NM_2063_1), TS007A age
// (NM_2020_1). Label: at least half of an area's households live in a detached house: 62 of 273. Features (other tables
// only, so nothing leaks): share of households with no car or van, with two or more cars or vans; share of residents aged
// 65+, 20 to 39, under 15.
// Our run (scratchpad rdt/dt2.py): scikit-learn decision trees, 20 repeats of 5-fold stratified cross-validation.
// Always "not mostly detached" 77.3%. Depth 1 (2 leaves): held-out accuracy 86.7%, recall 68.1% (42.2 of 62 found per
// run), precision 71.9% (16.5 false alarms per run); training 88.8%. Depth 2 (4 leaves) 86.6%; depth 3 (8) 85.9%; depth 4
// (13) 85.0%; unlimited (26 leaves) training 100.0%, held-out 83.3%, 24.0 false alarms per run. Depth-1 rule fitted on
// all areas: two or more cars in more than 59% of households -> mostly detached (45 of 59 such areas are; 17 of 214 other
// areas are too). Depth-2 importances: two or more cars 0.78, aged 65+ 0.11, aged 20 to 39 0.11.
// Lesson family: decision trees, explainability, depth vs held-out accuracy, baseline, recall and precision. Screened:
// decision tree 0 hits. Tamworth owns hidden-layer overfitting; Hastings owns active learning on flats (logistic).
// Rejected: first draft used social-rented tenure as the target; dropped as money-adjacent and area-stigmatising.
// Place facts: Redditch (E07000236) TS001 87,036; ONS 2021 Redditch BUA (published) 81,635; Astwood Bank straddles.
// postcodes.io suburban areas in Redditch district: Matchborough, Winyates, Batchley, Headless Cross, Webheath,
// Abbeydale, Oakenshaw, Crabbs Cross, Woodrow, Church Hill.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'REDDITCH', label: 'Redditch', blurb: 'AI and programming classes for Redditch, with a project on explainable AI: a decision tree that sums up the town\'s housing in one readable rule.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-redditch',
  code: 'rdh',
  accent: '#324C13',
  accentRationale: 'Redditch: a deep fern green (7.77:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Redditch',
    eyebrow: 'Redditch, Worcestershire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Worcestershire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'Worcestershire', href: '/coding-classes-in-worcestershire' },
    { label: 'West Midlands', href: '/coding-and-ai-classes-in-west-midlands-region' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Redditch, England',
  title: 'AI and Programming Classes in Redditch | Coding for 6 to 67',
  description: 'Online AI, programming, Python and vibe coding classes for Redditch, Matchborough, Winyates and Headless Cross learners aged 6 to 67. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Redditch, and a Python project on explainable AI: a decision tree built from the town\'s census data.',
  twitterDescription: 'Redditch AI, programming and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Redditch',
    description: 'Online AI, programming, Python, vibe coding and mathematics for children, teenagers and adults in Redditch borough, taught live with thinking skills first.'
  },

  h1: 'AI and programming classes in Redditch',
  capsuleQ: 'Which are the best AI and programming classes in Redditch?',
  capsule: 'At the 2021 census 87,036 people usually lived in Redditch borough, and the ONS gives the Redditch built-up area 81,635; the borough takes in neighbourhoods such as Matchborough, Winyates, Batchley, Headless Cross and Webheath. Children, teens and adults aged 6 to 67 in Redditch join our India-based teachers by video call for AI, programming, Python, vibe coding and maths, either as a solo learner or with five to ten classmates of matching level. Thinking skills come before any tool, so learners can follow and question what an AI decides. The free first lesson ends with a course recommendation. The Redditch project takes on a question that runs through AI today, whether a model can explain its answer, using a decision tree built on the borough\'s census data. Beyond the trial, budget USD 100 every month for a class place or USD 150 every month for individual tuition.',
  lead: 'When an AI makes a decision about you, can it say why? For many modern systems the honest answer is "not easily", which is why explainable AI is so widely discussed. The oldest explainable model is the decision tree: a chain of yes-or-no questions a person can read from top to bottom. This project grows decision trees in Python on all 273 census output areas in Redditch, asking which areas are mostly detached houses, and tests a common assumption along the way: that a model simple enough to read must be less accurate than a complicated one.',
  wa: 'Hello Modern Age Coders, could a Redditch learner book a free AI or programming lesson?',

  picks: {
    eyebrow: 'Redditch course picks',
    h2: 'Redditch course choices for thinking, vibe coding and AI',
    intro: 'Four starting points, sorted by age. Every course starts with a free live lesson, and we never ask for a card to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: yes-or-no questions, sorting rules and explaining a decision.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then little apps built by describing them to AI and checking what it made.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, from decision trees to fair testing, including this project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How modern AI reaches its answers, plus retrieval, agents and explainability.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Redditch borough',
      h2: 'Redditch and its neighbourhoods',
      intro: 'Census counts for the borough and its built-up area, and the districts recorded inside it.',
      body: [
        { kind: 'table', caption: 'Redditch in the 2021 census, published figures and our output-area totals', head: ['What was counted', 'Figure'], rows: [
          ['Borough usual residents (ONS)', '87,036'],
          ['Redditch built-up area (ONS)', '81,635'],
          ['Census output areas in the borough', '273'],
          ['Households in those output areas', '36,377']
        ] },
        { kind: 'p', text: 'The borough and the built-up area use different boundaries, so their totals differ; Astwood Bank, a smaller built-up area, runs across the borough edge and is not tabled here. Matchborough, Winyates, Batchley, Headless Cross, Webheath, Abbeydale, Oakenshaw, Crabbs Cross, Woodrow and Church Hill are all recorded within Redditch district. Worcestershire schools follow the English national curriculum; tell us your holiday weeks and we will not book lessons in them.' },
        { kind: 'callout', h3: 'County, region and why we teach thinking first', p: 'Wider choices sit on <a class="cg-inline-link" href="/coding-classes-in-worcestershire">coding classes in Worcestershire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">the West Midlands region page</a>. Our reasons for judgement before prompting are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Redditch project',
      h2: 'A decision tree you can read, on 273 output areas',
      intro: 'Grow trees of different sizes, test them on areas they have not seen, and see whether the readable one loses.',
      body: [
        { kind: 'p', text: 'Three Census 2021 tables come down from the Nomis API, covering each of Redditch\'s output areas: kind of home, number of cars or vans, and age. The question is whether at least half of an area\'s households live in detached houses, which is true for 62 of the 273 areas. The clues are all taken from the other two tables, so the answer cannot leak in: the share of households with no car or van, the share with two or more, and the shares of residents under 15, aged 20 to 39 and aged 65 or over. Because only 62 areas are mostly detached, a lazy model that always says "no" is already right 77.3% of the time, and every tree has to beat that.' },
        { kind: 'p', text: 'A decision tree learns by asking the single yes-or-no question that most cleanly splits the two kinds of area, then repeating inside each branch. Its depth is the number of questions allowed in a row. The learner tests trees from one question up to no limit at all, using 5-fold cross-validation repeated 20 times: each tree is trained on four fifths of the areas and judged on the fifth it never saw.' },
        { kind: 'table', caption: 'Decision trees of different depths, tested on unseen output areas, 20 repeats of 5-fold cross-validation, our Python run, 29 September 2026', head: ['Tree', 'End points', 'Accuracy on training areas', 'Accuracy on unseen areas'], rows: [
          ['Always "not mostly detached"', '1', '77.3%', '77.3%'],
          ['One question', '2', '88.8%', '86.7%'],
          ['Two questions deep', '4', '91.0%', '86.6%'],
          ['Three questions deep', '8', '93.1%', '85.9%'],
          ['Four questions deep', '13', '95.4%', '85.0%'],
          ['No limit', '26', '100.0%', '83.3%']
        ] },
        { kind: 'p', text: 'The one-question tree is the winner. Grown on every area, its whole reasoning fits in a sentence: if more than 59% of households have two or more cars or vans, predict mostly detached. That rule scores 86.7% on unseen areas. Letting the tree grow makes it look better and work worse: with no limit it memorises every training area, scoring 100.0%, but drops to 83.3% on areas it has not met, and its false alarms rise from 16.5 to 24.0 per test run. Here the model a person can read is also the most accurate one.' },
        { kind: 'p', text: 'Accuracy alone still hides something. The one-question tree finds 42.2 of the 62 mostly-detached areas on average, a recall of 68.1%, and when it says "mostly detached" it is right 71.9% of the time, its precision. Those two numbers matter more than 86.7% when the thing you are looking for is the rarer case. The tree also shows its limits honestly: it says nothing about why car ownership and detached homes go together in Redditch, only that they do, and this project does not claim a cause.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort a pile of animal cards with as few yes-or-no questions as possible, then sketch those questions as branches.' },
          { h3: 'Ages 11 to 15', p: 'Compute each area\'s car shares in Python, then apply the one-question rule and count the hits.' },
          { h3: 'Ages 15 and up', p: 'Grow trees with scikit-learn, cross-validate them and report recall and precision.' }
        ] },
        { kind: 'callout', h3: 'ONS counts, our trees', p: 'The counts for every output area are Census 2021 figures from the Office for National Statistics, read through Nomis. The labels, the trees, the cross-validation and every percentage are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Explainable AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'The reason behind a result deserves as much attention as the result.',
      body: [
        { kind: 'table', caption: 'Carrying the tree lesson over to chatbots and agents', head: ['Redditch decision trees', 'Chatbots, assistants and agents'], rows: [
          ['A single question gives the reason', 'Big language models seldom show checkable reasoning'],
          ['The biggest tree memorised its training data', 'More complex does not always mean better'],
          ['77.3% came from always saying "no"', 'Compare every score with a lazy guess'],
          ['Recall and precision told the real story', 'Ask how often it finds the rare case'],
          ['No cause was claimed', 'A pattern in data is not an explanation of the world']
        ] },
        { kind: 'p', text: 'In our vibe coding lessons a learner describes a program and an AI writes it, and the Redditch project is a reminder to prefer code whose reasoning can be followed. When an AI assistant offers a complicated model, a learner who has seen a one-question tree win asks whether something simpler would do. An agent working through several steps unsupervised earns more trust when it writes down, step by step, the reason for each move. Agent projects begin when Python is comfortable, usually for older teens and adults; Copilot Studio agents are reserved for private sessions. Two useful follow-ups are <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the agents course UK students take with us</a> and the short guide <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders works independently of the Office for National Statistics, Nomis and postcodes.io. Their records supply the figures and place names; the trees, and any errors in them, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From twenty questions to explainable models',
    intro: 'The school year is our first guess, and the free lesson settles the real starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Yes-or-no questions, sorting and giving reasons.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and checked by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Data, decision trees and honest testing beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Explainable AI and agents', p: 'Models, evaluation, language models and agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and explanations',
    h2: 'What is explainable AI, and why does it matter?',
    intro: 'It means an AI whose reasons a person can follow and check.',
    p1: 'The Redditch tree gives its whole reasoning in one sentence about car ownership. Many modern AI systems cannot do that, which makes their mistakes harder to catch and their decisions harder to challenge.',
    p2: 'Learners who have built a readable model and watched it beat a complicated one expect reasons from the tools they use, and know how to test when none are given.',
    closer: 'Building models that can justify themselves gives Redditch teenagers a sharper eye for every AI tool, reason enough to learn coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Webheath to Winyates, online',
    intro: 'Laptop or desktop, plus broadband that copes with video: that is the whole kit list.',
    cells: [
      { h3: 'Learner in charge', p: 'The student writes, prompts and runs each program, while the tutor follows on screen share and asks the next question.' },
      { h3: 'Trial first', p: 'School year is only a hint; the opening session decides topic one, and we write down any exam board.' },
      { h3: 'Nothing to pay upfront', p: 'We charge nothing for session one and finish it by naming a course to try.' },
      { h3: 'Classes by stage', p: 'Each group has between five and ten UK students sharing a level.' },
      { h3: 'Twice weekly', p: 'Lessons stop during school holidays.' },
      { h3: 'Times that hold', p: 'Tutors adjust for the UK clock changes, so your lesson hour stays put.' }
    ],
    spec: { title: 'Why the classes are online', p: 'Five learners at the same stage who are all free on one evening rarely share a neighbourhood. Online, they can share a lesson instead.' }
  },

  fees: {
    h2: 'Redditch fees',
    intro: 'Redditch learners are charged our international rate, which applies everywhere except India.',
    first: 'A complete first lesson free, ending with our course suggestion.',
    group: 'About eight live small-group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'We price in US dollars; there is no sterling fee. Invoices start after the trial, when a course and a day and time are settled, and our pricing page explains what happens with holidays away, missed lessons or a change of format.'
  },

  reviewsH2: 'What Worcestershire parents and other UK families wrote on Google',

  book: {
    h2: 'Book a free Redditch lesson',
    intro: 'An age or year group plus one interest is plenty to start. Trial lessons range from yes-or-no sorting challenges and an AI-assisted Scratch game to first steps in Python or a hand-drawn decision tree.',
    success: 'Thank you. Your Redditch request has arrived.'
  },

  faq: {
    h2: 'Redditch questions',
    intro: 'The decision tree project, explainable AI, vibe coding and practical points.',
    items: [
      { q: 'What is the population of Redditch?', a: 'The 2021 census counted 87,036 usual residents in Redditch borough, and the ONS gives the built-up area 81,635.' },
      { q: 'Do you run AI and programming classes for Redditch?', a: 'We do, through live video, open to any resident from 6 to 67.' },
      { q: 'What is a decision tree in AI?', a: 'A model that reaches a decision through a chain of yes-or-no questions a person can read, which makes it one of the easiest kinds of AI to explain.' },
      { q: 'What is the Redditch project?', a: 'Learners grow decision trees on the borough\'s 273 census output areas, test them on areas they have not seen, and find that a one-question tree beats the biggest one.' },
      { q: 'Is vibe coding part of your courses?', a: 'It is. Primary pupils, teenagers and grown-ups all do it the same way: sketch the plan, let the AI draft, then test each piece.' },
      { q: 'When can learners start on AI agents?', a: 'After a grounding in Python, which usually means late teens or adulthood; Copilot Studio agent lessons are private only.' },
      { q: 'Are classes held in person?', a: 'No, every lesson is live online.' },
      { q: 'Can you help in GCSE or A level years?', a: 'For computer science and maths, yes, built around understanding; no grade is ever guaranteed.' },
      { q: 'How much do lessons cost?', a: 'Your opening lesson is free. Ongoing lessons are USD 100 per month in a group or USD 150 per month for private teaching.' },
      { q: 'Do lessons continue in school holidays?', a: 'No, they pause. Just let us know the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Worcestershire and West Midlands pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-worcester">Worcester</a> has its own page and project, as do <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-walsall">Walsall</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-tamworth">Tamworth</a>, and <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a> is covered too. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links to every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Redditch and Worcestershire',
  footerPlaces: [
    { href: '/coding-classes-in-worcestershire', label: 'Worcestershire' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-rdh .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-rdh .cg-hero h1 { font-weight: 770; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-rdh .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-rdh .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rdh .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-rdh .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-rdh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rdh .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-rdh .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-rdh .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Redditch (E07000236), Census 2021 TS001 usual residents 87,036. ONS 2021 Redditch BUA (published) 81,635; Astwood Bank straddles. 273 OAs, 36,377 households (TS044). postcodes.io suburban areas in Redditch district: Matchborough, Winyates, Batchley, Headless Cross, Webheath, Abbeydale, Oakenshaw, Crabbs Cross, Woodrow, Church Hill.',
    localProject: 'Decision trees on 273 OAs, label mostly detached (62), features from TS045 and TS007A only. 20 x 5-fold CV: baseline 77.3; depth 1 86.7 (train 88.8, recall 68.1, precision 71.9, 16.5 false alarms); depth 2 86.6; 3 85.9; 4 85.0; unlimited 83.3 (train 100.0, 26 leaves, 24.0 false alarms). Rule: two or more cars > 59% -> mostly detached. Lesson family: decision trees, explainability, depth vs held-out accuracy, recall and precision.',
    requiredMentions: [
      '87,036',
      '81,635',
      '36,377',
      'Matchborough',
      'Winyates',
      'Batchley',
      'Webheath',
      'Headless Cross',
      'decision tree',
      'explainable AI'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Census 2021 TS001, TS007A, TS044 and TS045 for Redditch output areas, via the Nomis API.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas within Redditch district, Worcestershire.', url: 'https://api.postcodes.io/places?q=Matchborough' }
    ],
    rejectedClaims: [
      'Needle-making or new-town history: not read from a source; not claimed.',
      'Why car ownership and detached homes go together: not measured; not claimed.',
      'Tenure-based target (social renting): drafted, then dropped as money-adjacent and area-stigmatising.',
      'How commercial AI models explain themselves: described only in general terms.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
