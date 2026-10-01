'use strict';
// Pontypool (cg- town page, UK cluster Phase 10, towns band B, row 564). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when a neural network learns something new,
// what happens to what it learned before? (catastrophic forgetting, class-incremental learning, replay / rehearsal.)
// Local data (read 1 October 2026): OS Code-Point Open 2026.3.0 NP4 postcodes in Torfaen (1,276), looked up on
// postcodes.io; 721 in the Pontypool BUA, in five wards: Pontypool Fawr 227, Panteg 142, Pontnewynydd and Snatchwood 137,
// New Inn 113, Trevethin and Penygarn 102. Mean northing of each ward's postcodes: New Inn 199,800 and Panteg 198,680,
// the other three 200,752 to 202,110, so New Inn and Panteg are the two southern wards on average.
// Our run (scratchpad ppl/forget.py, scikit-learn 1.7.2 MLPClassifier, 2 hidden layers of 64, inputs = easting and
// northing standardised, 200 passes of mini-batches of 32, 20 seeds, a quarter of each ward held out for testing).
// Task A = Pontnewynydd and Snatchwood, Pontypool Fawr, Trevethin and Penygarn (351 train, 115 test); task B = New Inn,
// Panteg (192, 63). After A: A 97.8% (95.7 to 100). Then B only: A 0.1% (0 to 1.7), B 99.3%; 99.9% of A test postcodes
// labelled New Inn or Panteg. Replay of 30 remembered A points (10 per ward) mixed into B: A 92.0% (81.7 to 98.3), B
// 99.4%. Joint training: A 97.6%, B 99.2%.
// Lesson family: catastrophic forgetting / continual learning / replay. Screened: catastrophic forgetting, continual
// learning, rehearsal (course syllabi only), forgetting: 0 cluster pages or dossiers; claimed. Torfaen county page =
// spirals; Cwmbran = Braess; Newport, Monmouthshire and Blaenau Gwent checked.
// Place facts: Torfaen TS001 92,276. ONS 2021 BUA (published): Pontypool 29,070. postcodes.io suburban areas whose
// nearest postcode is in the Pontypool BUA: Griffithstown, Sebastopol, New Inn, Pontnewynydd, Trevethin, Penygarn,
// Wainfelin, Tranch. Abersychan, Garndiffaith and Snatchwood's gazetteer point fall in the Abersychan BUA; Upper Race in
// none; left out of the suburb list.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'PONTYPOOL', label: 'Pontypool', blurb: 'AI and programming classes for Pontypool, with a project in which a neural network learns two sets of wards and forgets the first.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-pontypool',
  code: 'ppl',
  accent: '#347024',
  accentRationale: 'Pontypool: a muted park green (6.02:1 contrast on white), chosen by hand and kept clear of the other Gwent pages',
  pageType: 'city',
  place: {
    name: 'Pontypool',
    eyebrow: 'Pontypool, Torfaen, Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Torfaen' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Torfaen', href: '/coding-classes-in-torfaen' },
    { label: 'Cwmbran', href: '/vibe-coding-and-ai-agents-classes-in-cwmbran' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Pontypool, Torfaen',
  title: 'AI and Programming Classes in Pontypool | Ages 6 to 67',
  description: 'Live online AI and programming classes for Pontypool, Griffithstown, New Inn and Trevethin, ages 6 to 67, with Python and maths. Your first lesson is free.',
  ogDescription: 'AI and programming classes for Pontypool, with a project on catastrophic forgetting and how replay prevents it.',
  twitterDescription: 'Pontypool AI and programming lessons, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Pontypool',
    description: 'Online AI, programming, Python and maths lessons for children, teenagers and adults in Pontypool and Torfaen, built around models the learner trains, breaks and repairs.'
  },

  h1: 'AI and programming classes in Pontypool',
  capsuleQ: 'Which are the best AI and programming classes for Pontypool?',
  capsule: 'Census 2021 found 29,070 usual residents in the Pontypool built-up area and 92,276 across the county borough of Torfaen. Griffithstown, Sebastopol, New Inn, Pontnewynydd, Trevethin, Penygarn, Wainfelin and Tranch all sit within the built-up area. From the age of six up to 67, Pontypool learners study AI, programming, Python, vibe coding and maths with Modern Age Coders, live online, with India-based tutors teaching privately or to level-matched classes of five to ten. Every learner begins with a free trial lesson and a course recommendation. The Pontypool project trains a small neural network to tell which ward a postcode belongs to, teaches it the northern wards first and the southern wards second, and measures how much of the first lesson survives. Following the free trial, a class place is USD 100 monthly and individual tuition USD 150 monthly.',
  lead: 'People learn new things without forgetting old ones, mostly. Neural networks are not so lucky. Train one on a task, then train it on a different task, and it can lose the first almost entirely. McCloskey and Cohen described the effect in 1989 as catastrophic interference; today it is usually called catastrophic forgetting. It matters every time an AI model is updated with new data. In Pontypool we make it happen on purpose, with 721 local postcodes and five wards, and then fix it with one simple idea.',
  wa: 'Hello Modern Age Coders, we would like to book a free AI or programming trial lesson. We are in Pontypool.',

  picks: {
    eyebrow: 'First courses',
    h2: 'AI and programming courses for Pontypool learners',
    intro: 'Pick by age. The opening live lesson is free on every course, and no card is needed.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Sorting, grouping and rule-finding games that lead into how machines learn.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games made with an AI helper, then played, tested and fixed.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including the Pontypool forgetting experiment.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from scratch through data work to models you can retrain safely.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Pontypool in brief',
      h2: 'Pontypool, Griffithstown, Sebastopol, New Inn and Trevethin',
      intro: 'The census headline counts and the areas that make up the town.',
      body: [
        { kind: 'table', caption: 'Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Pontypool built-up area', '29,070'],
          ['Torfaen county borough', '92,276']
        ] },
        { kind: 'p', text: 'Torfaen also contains Cwmbran, Blaenavon and Abersychan, so the borough is counted on its own rather than as a sum. On postcodes.io, Griffithstown, Sebastopol, New Inn, Pontnewynydd, Trevethin, Penygarn, Wainfelin and Tranch are suburban areas whose nearest postcode lies inside the Pontypool built-up area; Abersychan and Garndiffaith belong to a neighbouring one. The postcodes inside the town fall in five wards: Pontypool Fawr, Panteg, Pontnewynydd and Snatchwood, New Inn, and Trevethin and Penygarn. Schools follow the Curriculum for Wales, from progression step 1 to WJEC GCSEs and A levels; we teach in English and use the Welsh school year as an opening guess for the trial lesson to refine.' },
        { kind: 'callout', h3: 'Gwent pages', p: 'See <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-cwmbran">Cwmbran</a>, <a class="cg-inline-link" href="/coding-classes-in-torfaen">Torfaen</a>, <a class="cg-inline-link" href="/best-coding-class-in-newport-wales">Newport</a> and <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science help</a>. The case for training models rather than only prompting them is in <a class="cg-inline-link" href="/learn-to-train-ai-not-just-prompt-it-uk">learn to train AI, not just prompt it</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Pontypool project',
      h2: 'Teach it the north, then the south, and watch the north disappear',
      intro: 'Postcode positions, five wards, a small neural network, and a test of what it still remembers.',
      body: [
        { kind: 'p', text: 'Every NP4 postcode in Torfaen comes from Ordnance Survey\'s Code-Point Open, with its map position and its ward. Keeping only those inside the Pontypool built-up area leaves 721 postcodes in five wards. The model\'s job is simple to state: given a postcode\'s position, say which ward it is in. A quarter of each ward is held back for testing, and the network, two layers of 64 neurons written with scikit-learn, never sees those during training.' },
        { kind: 'p', text: 'The lesson comes in two parts. Task A is the three northern wards, Pontnewynydd and Snatchwood, Pontypool Fawr, and Trevethin and Penygarn. Task B is the two wards whose postcodes lie furthest south on average, New Inn and Panteg. The network learns task A first and is tested. Then it carries on training, but only on task B, as a real model might be updated with only the newest data. The learner runs the whole thing with 20 different random starts.' },
        { kind: 'table', caption: 'Share of held-back postcodes placed in the right ward, average of 20 runs, our Python run', head: ['Training', 'Northern wards (A)', 'Southern wards (B)'], rows: [
          ['A only', '97.8%', 'not yet taught'],
          ['A, then B only', '0.1%', '99.3%'],
          ['A, then B with 30 A points replayed', '92.0%', '99.4%'],
          ['A and B together from the start', '97.6%', '99.2%']
        ] },
        { kind: 'p', text: 'After the second round of training the network was almost perfect on the southern wards and had forgotten the northern ones completely: on average it got 0.1% of them right, and it labelled 99.9% of the northern test postcodes as New Inn or Panteg. Nothing about the northern postcodes changed. The network simply rebuilt its weights for the new task, because nothing in its training told it the old one still mattered.' },
        { kind: 'p', text: 'The fix is replay, sometimes called rehearsal. The learner keeps a tiny memory of the first task, just 10 postcodes from each northern ward, 30 in all, and mixes them into every round of the second training. Northern accuracy then stays at 92.0% on average, though it varied from 81.7% to 98.3% between runs, depending on which 30 postcodes were remembered. Training on both tasks at once does a little better again, at 97.6%, but only if all the old data is still to hand, which in real systems it often is not.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Learn five new words a day without revising old ones, then test yourself on day one\'s words.' },
          { h3: 'Ages 11 to 15', p: 'Plot the postcodes by ward in Python and train a simple classifier on the northern wards.' },
          { h3: 'Ages 15 and up', p: 'Reproduce the forgetting, add a replay memory, and measure how its size changes what survives.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Postcodes and wards are from Ordnance Survey Code-Point Open 2026.3.0 (Royal Mail and OS data, Open Government Licence) with postcodes.io lookups; census figures are from the ONS. The model, the 20 random starts and every percentage in the table come from our own run with scikit-learn. A ward classifier is a teaching task, not a tool anyone needs: the official ward of a postcode is already published.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Updating AI',
      h2: 'What a forgetful network teaches about updating real AI models',
      intro: 'Every time a model is retrained on new data, the same question applies: what will it lose?',
      body: [
        { kind: 'table', caption: 'From the Pontypool wards to AI in the wild', head: ['Seen with the five wards', 'Meaning for AI that gets updated'], rows: [
          ['New training wiped out the old task', 'Updating a model can quietly break what worked'],
          ['The network gave confident wrong wards', 'Forgetting does not announce itself'],
          ['30 replayed postcodes kept 92.0%', 'A small sample of old data protects a lot'],
          ['Results varied run to run', 'Test retrained models more than once'],
          ['Joint training worked but needed all the data', 'Real systems rarely keep everything']
        ] },
        { kind: 'p', text: 'Large AI models are fine-tuned for new jobs all the time, and researchers spend real effort stopping them losing earlier skills, with methods such as replay and Kirkpatrick and colleagues\' elastic weight consolidation. A learner who has watched 97.8% fall to 0.1% will always ask, after any update, "what did we test that it still knows?" An assistant could draft this experiment in moments through vibe coding, but the insight comes from running it and reading the numbers. Designing an agent of their own is a later stage, reached once a learner\'s Python no longer needs a guiding hand; that tends to be the sixth form years or adulthood, and Copilot Studio is kept for one-to-one lessons. Related: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">how agents are taught to UK students</a>, and <a class="cg-inline-link" href="/problem-solving-skills-through-coding-uk">problem-solving skills through coding</a>.' },
        { kind: 'p', text: 'We are not affiliated with Ordnance Survey, the ONS or postcodes.io, whose open data made the experiment possible; the network and its scores are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning journey',
    h2: 'From sorting games at seven to retraining neural networks at seventeen',
    intro: 'We start from the Welsh school year, and the trial lesson tells us where a learner really is.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Groups and rules', p: 'Sorting, grouping and rule-spotting, much of it away from the screen.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Making things with AI', p: 'AI-assisted Scratch games, then a first step into Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Training models', p: 'Classifiers, test sets and experiments on what models keep and lose.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Models in practice', p: 'Python and machine learning for work, including safe retraining.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Forgetting and AI',
    h2: 'What is catastrophic forgetting in AI?',
    intro: 'Catastrophic forgetting is what happens when a neural network trained on one task is then trained on another and loses most of its ability on the first, because the new training overwrites the shared weights the old knowledge depended on; mixing in a small replay of old examples is one of the simplest ways to prevent it.',
    p1: 'In Pontypool, a network that placed 97.8% of northern-ward postcodes correctly fell to 0.1% after being trained only on New Inn and Panteg, and recovered to 92.0% when 30 northern postcodes were replayed during that training.',
    p2: 'Learners who have produced that collapse treat every model update as something to test, not something to trust.',
    closer: 'For a Pontypool teenager, knowing how a model can lose what it knew is part of staying in charge of AI, and that knowledge comes from training models themselves.',
    blogAnchor: 'why training your own models still matters in 2026'
  },

  delivery: {
    eyebrow: 'Lesson details',
    h2: 'How classes work for a Pontypool learner',
    intro: 'Lessons happen live on video. A computer with a keyboard is needed; a tablet alone cannot run Python comfortably.',
    cells: [
      { h3: 'Learner in charge of the keys', p: 'The learner writes and runs every line, explaining it to the tutor.' },
      { h3: 'Level comes first', p: 'The trial lesson shows where to start before we recommend anything.' },
      { h3: 'No charge to begin', p: 'The first lesson is free and needs no card.' },
      { h3: 'Groups by level', p: 'Five to ten learners at the same stage, from across the UK.' },
      { h3: 'Two a week', p: 'About eight lessons a month in term, with Torfaen holidays left free on request.' },
      { h3: 'Fixed UK time', p: 'The lesson stays at its UK hour when the clocks change.' }
    ],
    spec: { title: 'Why online lessons', p: 'Five to ten learners at one exact level are far easier to bring together across the UK than in a single town, and on video nobody travels.' }
  },

  fees: {
    h2: 'Fees for Pontypool families',
    intro: 'Pontypool learners pay what everyone outside India pays.',
    first: 'First lesson: free and complete, finishing with a course recommendation.',
    group: 'Group class, generally eight lessons each month.',
    private: 'Private one-to-one lessons, generally eight each month.',
    closer: 'Fees are in US dollars only, with no sterling version. The trial is never billed; charges start once a course and a weekly time are agreed. The pricing page sets out holidays, missed lessons and moving between group and private.'
  },

  reviewsH2: 'Google reviews from families in Wales and across Britain',

  book: {
    h2: 'Book a free Pontypool lesson',
    intro: 'Send the learner\'s age or year group and something they love doing. We might open with a sorting challenge, a Scratch build guided by an AI, a handful of Python lines, or a first small model to train.',
    success: 'Thanks. Your Pontypool request is with us.'
  },

  faq: {
    h2: 'Pontypool questions',
    intro: 'The forgetting project, neural networks, vibe coding and practical details.',
    items: [
      { q: 'How many people live in Pontypool?', a: 'The ONS counted 29,070 usual residents in the Pontypool built-up area at the 2021 census. Torfaen had 92,276.' },
      { q: 'Can Pontypool learners join these AI and programming classes?', a: 'Yes. Anyone from 6 to 67 can join live from Pontypool, Griffithstown, Sebastopol, New Inn, Trevethin or elsewhere in Torfaen.' },
      { q: 'What is continual learning?', a: 'Training a model on a stream of tasks or data over time, so that it gains new abilities without losing the ones it already had.' },
      { q: 'What is replay in machine learning?', a: 'Keeping a small sample of old training examples and mixing them into new training so the model keeps practising what it learned before.' },
      { q: 'What did the Pontypool project show?', a: 'A network that placed 97.8% of northern-ward postcodes correctly fell to 0.1% after training only on New Inn and Panteg, and held 92.0% when 30 old postcodes were replayed.' },
      { q: 'What is vibe coding?', a: 'Describing a program to an AI and then running, reading and correcting what it writes. We teach it in typed Python so learners can judge the results.' },
      { q: 'When do learners build their own AI agents?', a: 'Once their Python is reliable without help, typically from Year 12 or as adults. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Is this relevant to WJEC exams?', a: 'Programming, data and algorithms sit at the core of WJEC GCSE and A level computer science and get careful attention in class, though no result is promised.' },
      { q: 'How much do classes cost?', a: 'Free for the trial; then USD 100 per month for a group seat and USD 150 per month for private teaching.' },
      { q: 'Do lessons pause for half term?', a: 'Yes. Share the Torfaen term calendar and no lessons are booked in the breaks.' }
    ]
  },

  next: {
    eyebrow: 'In the area',
    h2: 'More pages for Gwent and South Wales',
    html: 'Look at <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-cwmbran">Cwmbran</a>, <a class="cg-inline-link" href="/coding-classes-in-torfaen">Torfaen</a>, <a class="cg-inline-link" href="/coding-classes-in-monmouthshire">Monmouthshire</a> and <a class="cg-inline-link" href="/coding-classes-in-blaenau-gwent">Blaenau Gwent</a>. Other Welsh towns are on <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">the Wales page</a>, and the whole UK on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Contact us on WhatsApp'
  },

  footerHeading: 'Pontypool and Torfaen',
  footerPlaces: [
    { href: '/coding-classes-in-torfaen', label: 'Torfaen' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ppl .cg-hero-grid { align-items: start; gap: clamp(1.15rem, 2.65vw, 2.35rem); }
.cg-root.cg-ppl .cg-hero h1 { font-weight: 765; letter-spacing: -0.022em; line-height: 1.08; }
.cg-root.cg-ppl .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-ppl .cg-eyebrow { letter-spacing: 0.12em; font-weight: 715; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-ppl .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.016em; }
.cg-root.cg-ppl .cg-table caption { font-weight: 535; text-align: left; font-size: 0.92rem; }
.cg-root.cg-ppl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ppl .cg-table th { font-weight: 695; letter-spacing: 0.03em; }
.cg-root.cg-ppl .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-ppl .cg-callout { border-left-width: 5px; border-radius: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Torfaen (W06000020), Census 2021 TS001 usual residents 92,276. ONS 2021 BUA (published): Pontypool 29,070. Curriculum for Wales, progression steps, WJEC GCSE and A level. postcodes.io suburban areas whose nearest postcode is in the Pontypool BUA: Griffithstown, Sebastopol, New Inn, Pontnewynydd, Trevethin, Penygarn, Wainfelin, Tranch. Wards of the BUA postcodes: Pontypool Fawr, Panteg, Pontnewynydd and Snatchwood, New Inn, Trevethin and Penygarn.',
    localProject: 'OS Code-Point Open 2026.3.0, 721 NP4 postcodes in the Pontypool BUA (postcodes.io), 5 wards. scikit-learn MLPClassifier (64, 64), easting and northing standardised, 200 passes, batches of 32, 20 seeds, a quarter of each ward held out. Task A (3 northern wards: 351 train, 115 test), task B (New Inn, Panteg: 192, 63; lowest mean northings). After A: A 97.8%. Then B only: A 0.1% (max 1.7%), B 99.3%; 99.9% of A test postcodes called New Inn or Panteg. Replay of 30 A points: A 92.0% (81.7 to 98.3), B 99.4%. Joint: A 97.6%, B 99.2%. Lesson family: catastrophic forgetting, continual learning, replay (rehearsal).',
    requiredMentions: [
      '29,070',
      'Griffithstown',
      'Sebastopol',
      'Wainfelin',
      'Pontypool Fawr',
      'Panteg',
      'catastrophic forgetting',
      '97.8%',
      '92.0%'
    ],
    sources: [
      { claim: 'McCloskey M., Cohen N. J. (1989), Catastrophic interference in connectionist networks: the sequential learning problem, Psychology of Learning and Motivation 24, 109 to 165.', url: 'https://doi.org/10.1016/S0079-7421(08)60536-8' },
      { claim: 'Robins A. (1995), Catastrophic forgetting, rehearsal and pseudorehearsal, Connection Science 7(2), 123 to 146.', url: 'https://doi.org/10.1080/09540099550039318' },
      { claim: 'Kirkpatrick J. et al. (2017), Overcoming catastrophic forgetting in neural networks, PNAS 114(13), 3521 to 3526.', url: 'https://doi.org/10.1073/pnas.1611835114' },
      { claim: 'Ordnance Survey Code-Point Open 2026.3.0 (contains Royal Mail and OS data, Open Government Licence).', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations; postcodes.io lookups for NP4.', url: 'https://api.postcodes.io/places?q=Griffithstown' }
    ],
    rejectedClaims: [
      'That a ward classifier is useful in practice: official wards are published; the page calls it a teaching task.',
      'That New Inn and Panteg are strictly south of every other ward: stated only as lowest average northing of their postcodes.',
      'That replay always keeps 92.0%: results ranged from 81.7% to 98.3% across runs; the page says so.',
      'That Abersychan or Garndiffaith are part of the Pontypool built-up area: they belong to the Abersychan BUA; left out.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
