'use strict';
// Kirkcaldy (cg- town page, UK cluster Phase 8, towns band A, row 412). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does gradient boosting learn, and when do
// extra trees stop helping? (boosting rounds, learning rate, overfitting that plain accuracy hides on an imbalanced task).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map calls over bbox -3.200,56.095,-3.130,56.135 in 16 tiles (ODbL):
// 8,723 ways tagged building; 8,705 closed footprints of at least 5 square metres kept. Labels from the building tag:
// 2,618 homes (residential, house, semidetached_house, apartments, detached, terrace), 170 other typed buildings (retail,
// garages, school, hospital, industrial, church and so on), 5,917 untyped ("yes"), left out.
// Features per footprint: area, perimeter, corner count, circularity, fill of the smallest rotated rectangle, length-to-width
// ratio, and number of other buildings sharing a mapped point (attached neighbours).
// Our run (scratchpad kdy/gb.py, gb2.py): scikit-learn GradientBoostingClassifier (depth-2 trees, non-homes up-weighted to
// balance), 10 random stratified 70/30 splits; balanced accuracy = mean of homes found and non-homes found. Always "home":
// accuracy 93.9%, balanced 50%. One depth-3 tree: balanced 82.7%. Learning rate 0.1, trees 1 / 10 / 50 / 100 / 200 / 400:
// balanced 76.4 / 79.6 / 84.5 / 85.6 / 85.1 / 84.6; accuracy 80.6 / 81.9 / 87.5 / 91.4 / 93.4 / 95.1; non-homes found 71.6 /
// 77.1 / 81.2 / 79.0 / 75.7 / 72.5; training balanced at 400 99.3. Learning rate 1.0: balanced 76.4 / 82.6 / 81.2 / 80.5 /
// 80.6 / 80.2; accuracy up to 96.3; non-homes found down to 61.8; training 100.
// Lesson family: gradient boosting (sequential weak learners, learning rate, number of rounds). Screened: "gradient
// boosting", "boosting", "weak learner" 0 hits. Overfitting (Tamworth) and class imbalance (Illinois) appear only as effects.
// Place facts: NRS mid-2020 localities: Kirkcaldy and Dysart 50,370 (Fife page registers the council figures). postcodes.io
// (Fife, KY1/KY2) suburban areas: Chapel, Dunnikier, Dysart, Gallatown, Hayfield, Linktown, Pathhead, Sinclairtown, Smeaton,
// Templehall.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'KIRKCALDY', label: 'Kirkcaldy', blurb: 'AI and programming classes for Kirkcaldy, with a gradient boosting project that learns to tell homes from other buildings using only their mapped shapes.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-kirkcaldy',
  code: 'kcd',
  accent: '#546B25',
  accentRationale: 'Kirkcaldy: a moss green (4.83:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Kirkcaldy',
    eyebrow: 'Kirkcaldy, Fife, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Fife' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Fife', href: '/coding-classes-in-fife' },
    { label: 'Dunfermline', href: '/best-coding-class-in-dunfermline' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kirkcaldy, Scotland',
  title: 'AI and Programming Classes in Kirkcaldy | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Kirkcaldy, Dysart, Templehall and Sinclairtown learners in Fife, aged 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Kirkcaldy, with a gradient boosting project that tells homes from other buildings using only their outlines on the map.',
  twitterDescription: 'Kirkcaldy AI, programming, Python and vibe coding classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Kirkcaldy',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Kirkcaldy and Fife, taught live with reasoning first.'
  },

  h1: 'AI and programming classes in Kirkcaldy',
  capsuleQ: 'Which are the best AI and programming classes in Kirkcaldy?',
  capsule: 'The Kirkcaldy and Dysart locality counted 50,370 people in the mid-2020 estimates from National Records of Scotland, second in Fife only to Dunfermline. Templehall, Sinclairtown, Pathhead, Gallatown, Linktown and Dunnikier are listed suburbs in the KY1 and KY2 districts. Anyone aged six to 67 can learn AI, programming, Python, vibe coding and maths live over video with a tutor working from India, individually or in a small class of five to ten at one level. Reasoning comes before tools in every course, so learners can see when a model has fooled itself. We teach the first lesson free and end it with a course recommendation. The Kirkcaldy project trains a gradient boosting model on 2,788 labelled building outlines and watches its real skill rise, peak and slip while its headline accuracy keeps climbing. Regular tuition costs USD 100 a month in a group or USD 150 a month privately.',
  lead: 'Gradient boosting is one of the most successful methods in practical machine learning, often the first choice for data in tables. The idea is simple: build a very small decision tree, see which examples it gets wrong, build another small tree aimed at those mistakes, and keep adding trees, each one nudging the prediction a little. Two settings govern it: how many trees to add, and the learning rate, how big each nudge is. This project uses OpenStreetMap outlines of Kirkcaldy\'s buildings, where mappers have tagged 2,618 as homes and 170 as something else, and asks the model to tell them apart from shape alone.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Kirkcaldy?',

  picks: {
    eyebrow: 'Kirkcaldy course picks',
    h2: 'Kirkcaldy courses in thinking, Python and AI',
    intro: 'Pick a course by age and interest. Lesson one is live and free on all of them, and we take no card to book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: learning from mistakes step by step, and noticing when a score is misleading.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with an AI and put through their paces.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including boosting on real Kirkcaldy building shapes.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python through data, machine learning and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Kirkcaldy and Fife',
      h2: 'Kirkcaldy, Dysart, Templehall and Sinclairtown',
      intro: 'The NRS estimate for Kirkcaldy and Dysart, and suburbs on record in KY1 and KY2.',
      body: [
        { kind: 'table', caption: 'Kirkcaldy in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Kirkcaldy and Dysart locality, mid-2020', '50,370']
        ] },
        { kind: 'p', text: 'Chapel, Dunnikier, Dysart, Gallatown, Hayfield, Linktown, Pathhead, Sinclairtown, Smeaton and Templehall are suburban areas of Fife in the KY1 and KY2 postcode districts, according to postcodes.io. Fife schools teach the Curriculum for Excellence, and lessons follow Scottish primary and secondary years, with SQA Computing Science and Maths support at National 5, Higher and Advanced Higher. Pass on the school holiday dates and we will keep those weeks free.' },
        { kind: 'callout', h3: 'Fife, Dunfermline and SQA courses', p: 'Visit <a class="cg-inline-link" href="/coding-classes-in-fife">coding classes in Fife</a>, <a class="cg-inline-link" href="/best-coding-class-in-dunfermline">Dunfermline</a> and <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science help</a>. Why we teach thinking first is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Kirkcaldy project',
      h2: 'Gradient boosting on Kirkcaldy\'s building outlines: more trees, better model?',
      intro: 'Seven shape features, two learning rates, up to 400 trees, and a score that can lie.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data over Kirkcaldy in sixteen tiles: 8,723 mapped buildings. Most, 5,917, carry no type and are left aside. Of the rest, 2,618 are tagged as homes of some kind and 170 as other buildings such as shops, garages, schools and churches. For each outline Python works out seven features: area, perimeter, number of corners, circularity, how fully it fills its tightest surrounding rectangle, how long and thin it is, and how many other buildings it touches, since terraces and semis share walls. The model is scored on held-back buildings over ten different random splits.' },
        { kind: 'p', text: 'Because homes outnumber everything else by about fifteen to one, a model that always says "home" is right 93.9% of the time while being useless. So the fair score here is balanced accuracy: the average of the share of homes found and the share of other buildings found.' },
        { kind: 'table', caption: 'Gradient boosting with learning rate 0.1 on Kirkcaldy buildings, averages over 10 splits, our Python run on OpenStreetMap data', head: ['Trees', 'Balanced accuracy', 'Plain accuracy', 'Other buildings found'], rows: [
          ['1', '76.4%', '80.6%', '71.6%'],
          ['10', '79.6%', '81.9%', '77.1%'],
          ['50', '84.5%', '87.5%', '81.2%'],
          ['100', '85.6%', '91.4%', '79.0%'],
          ['400', '84.6%', '95.1%', '72.5%']
        ] },
        { kind: 'p', text: 'Balanced accuracy climbs to 85.6% at around 100 trees, beating a single decision tree at 82.7%, then slowly slips. Plain accuracy keeps rising all the way to 95.1%, because the extra trees chase the common case: the share of other buildings found falls from 81.2% to 72.5%. By then the model scores 99.3% on its own training buildings, a sign it is memorising rather than learning. With a learning rate of 1.0 the same thing happens faster and worse: balanced accuracy peaks at 82.6% after only 10 trees and ends at 80.2%, while plain accuracy reaches 96.3%. Small nudges and a sensible stopping point beat big steps and more trees.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Sort building pictures with one rule, then add a second rule just for the ones the first got wrong.' },
          { h3: 'S1 to S3', p: 'Measure the area and perimeter of a few Kirkcaldy building outlines in Python.' },
          { h3: 'S4 and up', p: 'Train gradient boosting, plot the score against trees and learning rate, and find the stopping point.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap outlines, our model', p: 'Building outlines and tags are from OpenStreetMap and its contributors under the Open Database Licence. The features, the model and every score are our own work; tags reflect what volunteers have recorded, not a survey.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Boosting and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A number that keeps going up is not the same as a model that keeps getting better.',
      body: [
        { kind: 'table', caption: 'From the Kirkcaldy boosting project to working with AI', head: ['In the buildings project', 'When AI trains a model for you'], rows: [
          ['Always "home" scored 93.9%', 'Check the score against a do-nothing guess'],
          ['Balanced accuracy peaked near 100 trees', 'More training is not always better'],
          ['Plain accuracy still rose to 95.1%', 'The wrong metric can hide decline'],
          ['Training score reached 99.3%', 'A near-perfect training score is a warning'],
          ['5,917 buildings had no type', 'Unlabelled data cannot check a model']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to "train the most accurate model" on data like this and it may add trees until accuracy stops rising, report 96%, and never mention that the model misses a third of the buildings that matter. In vibe coding the learner describes the task while the AI writes the code; our Kirkcaldy students then pick the metric themselves and choose where to stop. It is tempting to let the model label the 5,917 untyped buildings, but nothing could confirm those labels, so we do not. Agents that train and deploy models for you need the same checks written into their instructions. Agent building comes once a learner is fluent in Python, usually S5 or S6 or as an adult, and Copilot Studio agents are private lessons only. More on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'This page is ours alone: OpenStreetMap, National Records of Scotland and postcodes.io provided open data and nothing else, and any error in the model is our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From sorting pictures to boosting models',
    intro: 'Primary or secondary year gives us a starting point; the trial fine-tunes it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Rules, mistakes and learning a little at a time.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and apps built with an AI and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and machine learning', p: 'Trees, boosting and fair scoring alongside SQA Computing Science.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Machine learning and agents', p: 'Models, metrics and AI agents, built in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and boosting',
    h2: 'What is gradient boosting, and why can more trees make it worse?',
    intro: 'Gradient boosting builds many small decision trees one after another, each correcting the mistakes of those before it; add too many, or take steps too large, and it starts fitting quirks of the training data instead of real patterns.',
    p1: 'On 2,788 labelled Kirkcaldy building outlines, balanced accuracy peaked at 85.6% after about 100 trees at a learning rate of 0.1, while plain accuracy kept climbing to 95.1% as the model found fewer of the non-home buildings.',
    p2: 'Learners who have watched that happen ask of every AI-trained model: which score was it tuned on, and where did it stop?',
    closer: 'Choosing the metric and the stopping point keeps Kirkcaldy teenagers in charge of the models they build, and learning to code is how they get that choice in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Across Kirkcaldy, online',
    intro: 'Bring a computer, a webcam and an internet connection able to handle video.',
    cells: [
      { h3: 'Student-driven lessons', p: 'The learner types and runs every step while our tutor follows on screen share, asking what each result means.' },
      { h3: 'Tailored after the trial', p: 'The free first session tells us where to begin; any SQA exam is noted.' },
      { h3: 'Free to start', p: 'We charge nothing for lesson one and recommend a course at the end.' },
      { h3: 'Matched classes', p: 'Five to ten UK learners per class, all at a similar stage.' },
      { h3: 'Twice a week', p: 'Paused during school holidays.' },
      { h3: 'Constant hour', p: 'UK clock changes do not move your lesson; our tutors adjust.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level who are free on the same evening rarely live in the same street. Online, they can learn together anyway.' }
  },

  fees: {
    h2: 'Kirkcaldy fees',
    intro: 'Kirkcaldy learners pay our international prices, which apply to all countries except India.',
    first: 'One full lesson free, followed by advice.',
    group: 'Approximately eight live group lessons monthly.',
    private: 'Approximately eight live private lessons monthly.',
    closer: 'We invoice in US dollars rather than sterling, and only once the trial has confirmed a course and a weekly slot. The pricing page explains holidays, missed lessons and swapping between private and group.'
  },

  reviewsH2: 'Fife families and learners around Britain on Google',

  book: {
    h2: 'Book a free Kirkcaldy lesson',
    intro: 'Send the learner\'s age or school year and one or two interests. The trial could be a picture-sorting game, a Scratch game planned with an AI, a first Python script, or measuring real building outlines.',
    success: 'Thank you. Your Kirkcaldy request is with us.'
  },

  faq: {
    h2: 'Kirkcaldy questions',
    intro: 'Boosting, the building project, Python, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Kirkcaldy?', a: 'National Records of Scotland estimated 50,370 people in the Kirkcaldy and Dysart locality in mid-2020.' },
      { q: 'Can I take AI and programming classes online in Kirkcaldy?', a: 'Yes, through live video lessons for ages 6 to 67 across Kirkcaldy and Fife.' },
      { q: 'What is balanced accuracy?', a: 'The average of how well a model finds each class. It stops a model that always predicts the common class from looking good; in our Kirkcaldy data that lazy model scores 93.9% accuracy but 50% balanced.' },
      { q: 'What does the learning rate do in gradient boosting?', a: 'It sets how much each new tree changes the prediction. Small steps learn slowly but steadily; large steps learn fast and tend to overfit, as our 1.0 setting did after 10 trees.' },
      { q: 'What is the Kirkcaldy project?', a: 'Training gradient boosting on 2,788 labelled building outlines from OpenStreetMap to tell homes from other buildings, and choosing where to stop adding trees.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, at every age; the learner plans, describes and tests, and the AI helps write the code.' },
      { q: 'When do students build AI agents?', a: 'After Python becomes fluent, usually S5 or S6 or in adulthood; Copilot Studio agents are one-to-one only.' },
      { q: 'Do you support SQA qualifications?', a: 'Yes, Computing Science and Maths at National 5, Higher and Advanced Higher, taught for understanding with no promised grades.' },
      { q: 'How much are lessons?', a: 'Lesson one is free; then USD 100 per month in a group or USD 150 per month one-to-one.' },
      { q: 'Are lessons paused in the holidays?', a: 'Yes, for school holidays; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Fife and east of Scotland pages',
    html: 'Pages with their own projects: <a class="cg-inline-link" href="/coding-classes-in-fife">Fife</a>, <a class="cg-inline-link" href="/best-coding-class-in-dunfermline">Dunfermline</a>, <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-livingston">Livingston</a> (a hash tree of the map). The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Kirkcaldy and Fife',
  footerPlaces: [
    { href: '/coding-classes-in-fife', label: 'Fife' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-kcd .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-kcd .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-kcd .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-kcd .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-kcd .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.02em; }
.cg-root.cg-kcd .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-kcd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kcd .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-kcd .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-kcd .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Fife (S12000047). Scotland: Curriculum for Excellence, SQA National 5, Higher, Advanced Higher. NRS mid-2020 settlement and locality estimates: Kirkcaldy and Dysart 50,370. postcodes.io (Fife, KY1/KY2): Chapel, Dunnikier, Dysart, Gallatown, Hayfield, Linktown, Pathhead, Sinclairtown, Smeaton, Templehall (suburban areas).',
    localProject: 'OSM API 0.6 bbox -3.200,56.095,-3.130,56.135 (16 tiles): 8,723 buildings; 2,618 homes, 170 other typed, 5,917 untyped. Seven shape features. Gradient boosting depth 2, 10 splits: always-home accuracy 93.9% (balanced 50); one tree balanced 82.7. LR 0.1 trees 1/10/50/100/400 balanced 76.4/79.6/84.5/85.6/84.6, accuracy 80.6/81.9/87.5/91.4/95.1, others found 71.6/77.1/81.2/79.0/72.5; train 99.3. LR 1.0 peak 82.6 at 10 trees, end 80.2, accuracy 96.3. Lesson family: gradient boosting.',
    requiredMentions: [
      '50,370',
      '2,618',
      '5,917',
      'Templehall',
      'Sinclairtown',
      'Pathhead',
      'Gallatown',
      'Linktown',
      'Dunnikier',
      'gradient boosting'
    ],
    sources: [
      { claim: 'OpenStreetMap building data for Kirkcaldy, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas in Fife.', url: 'https://api.postcodes.io/places?q=Templehall' }
    ],
    rejectedClaims: [
      'Linoleum, Adam Smith or harbour history: not read from a source; not claimed.',
      'Labels for the 5,917 untyped buildings: not predicted, because they could not be checked.',
      'That OpenStreetMap tags are complete or correct: not claimed; volunteer tags only.',
      'Second largest locality in Fife: per NRS mid-2020 figures quoted on the Fife page (Dunfermline 54,990, Kirkcaldy and Dysart 50,370); never called the largest.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
