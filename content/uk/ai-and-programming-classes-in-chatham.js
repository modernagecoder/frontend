'use strict';
// Chatham (cg- town page, UK cluster Phase 8, towns band A, row 396). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does an AI classifier decide
// when to say yes, and why is a 50% cut-off not automatically right? (ROC curves, AUC, threshold choice).
// Data (read 29 September 2026): Nomis API, Census 2021, all 853 output areas in Medway (E06000035), filtered calls:
// TS044 accommodation type (total and terraced), TS045 cars or vans (total, none, two, three or more); 111,425 households.
// Label: at least half of an area's households live in a terraced house: 296 of 853 (34.7%). An age table was also
// requested but the downloads kept being cut short, so the model uses the two car features only.
// Our run (scratchpad cht/roc.py): AUC on the 853 areas: random scores 0.515; share of households without a car alone
// 0.642; logistic regression on no-car and two-or-more-cars shares, 5-fold held-out predictions, 0.673. Thresholds for
// the logistic model: 0.382 catches 51.4% of terraced areas with 161 false alarms out of 557 others; 0.338 catches 70.6%
// (218); 0.308 80.1% (287); 0.279 90.2% (356); 0.258 95.3% (405). Default 0.5: accuracy 61.8%, 11 of 296 caught, 41 false
// alarms; always "no": 65.3%.
// Lesson family: ROC curve, AUC, threshold choice and costs, weak features, default cut-offs. Screened: ROC curve, area
// under the curve 0 hits (the only "AUC" hit elsewhere is Chaucer). Hastings owns active learning on flats; Redditch owns
// decision trees on detached homes; Halifax owns a confusion-matrix diagonal.
// Place facts: Medway (E06000035) TS001 279,773. ONS 2021 BUAs (published): Chatham 76,955; Gillingham (Medway) 108,480;
// Rochester 67,285. postcodes.io (Medway) suburban areas: Luton, Walderslade.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CHATHAM', label: 'Chatham', blurb: 'AI and programming classes for Chatham, with a project on how an AI classifier should choose when to say yes, using ROC curves on Medway\'s census data.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-chatham',
  code: 'cht',
  accent: '#4E5C17',
  accentRationale: 'Chatham: a deep moss olive (5.9:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Chatham',
    eyebrow: 'Chatham, Medway, Kent, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Kent' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Kent', href: '/coding-classes-in-kent' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Chatham, England',
  title: 'AI and Programming Classes in Chatham | Coding for 6 to 67',
  description: 'Online AI, programming, Python and vibe coding classes for Chatham, Walderslade, Luton and Rochester learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Chatham, and a Python project that draws ROC curves to choose when an AI classifier should say yes.',
  twitterDescription: 'Chatham AI, programming and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Chatham',
    description: 'Online AI, programming, Python, vibe coding and mathematics for children, teenagers and adults in Chatham and across Medway, taught live with thinking skills first.'
  },

  h1: 'AI and programming classes in Chatham',
  capsuleQ: 'Which are the best AI and programming classes in Chatham?',
  capsule: 'At the 2021 census the ONS gave Chatham\'s built-up area 76,955 people, alongside Gillingham and Rochester in a Medway of 279,773; Walderslade and Luton are among the suburbs recorded in the area. Anyone there aged from 6 up to 67 can study AI, programming, Python, vibe coding and maths with one of our India-based tutors over live video, in private lessons or a class of five to ten matched by stage. Thinking skills come first, so a learner understands what an AI decides and why. We do not charge for the first lesson and finish it with a course suggestion. Chatham\'s project uses Medway\'s own census data to answer a question behind every AI yes-or-no decision: where should the line be drawn? Lessons after the trial cost USD 100 per month in a class or USD 150 per month one-to-one.',
  lead: 'Many AI systems produce a score between 0 and 1 and then turn it into a yes or a no. Spam filters, fraud checks and medical screening tools all do it, and the obvious rule, say yes above 0.5, is often not the right one. This project builds a small classifier in Python on Medway\'s 853 census output areas, asking whether an area is mostly terraced houses from car ownership alone, and then draws its ROC curve: a picture of every possible cut-off at once. The model turns out to be only moderately good, which makes it a better teacher. At the default cut-off it is less accurate than never saying yes at all.',
  wa: 'Hello Modern Age Coders, please may we book a free AI or programming lesson for a learner in Chatham?',

  picks: {
    eyebrow: 'Chatham course picks',
    h2: 'Chatham courses in thinking, vibe coding and AI',
    intro: 'Age and curiosity decide the starting point; every course begins with a free live lesson, booked without card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: fair decisions, trade-offs and deciding where to draw a line.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then apps built by describing them to an AI and testing them.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, from classifiers to ROC curves, including this project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How AI systems score, decide and are evaluated, through to building agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Chatham and Medway',
      h2: 'Chatham, Gillingham and Rochester',
      intro: 'ONS 2021 census counts for three Medway built-up areas, and suburbs recorded around Chatham.',
      body: [
        { kind: 'table', caption: 'Three Medway built-up areas, ONS 2021 census counts', head: ['Built-up area', 'People (2021)'], rows: [
          ['Chatham', '76,955'],
          ['Gillingham', '108,480'],
          ['Rochester', '67,285']
        ] },
        { kind: 'p', text: 'Each is a separate ONS figure, shown without a total; the Medway count of 279,773 comes from its own census table. Luton and Walderslade are recorded as suburban areas in Medway. Schools in Medway follow the national curriculum for England; tell us your holiday dates and lessons will leave them clear.' },
        { kind: 'callout', h3: 'Kent, the South East and our approach', p: 'More options are on <a class="cg-inline-link" href="/coding-classes-in-kent">coding classes in Kent</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>. Why every course trains judgement before prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Chatham project',
      h2: 'Where should an AI draw the line? ROC curves on Medway\'s census',
      intro: 'Score every output area, sweep the cut-off from 1 down to 0, and see what each choice catches and costs.',
      body: [
        { kind: 'p', text: 'The learner downloads two Census 2021 tables from the Nomis API for all 853 output areas in Medway, covering 111,425 households: the type of each home, and how many cars or vans each household has. An area counts as mostly terraced when at least half its households live in a terraced house, which is true for 296 areas, 34.7% of them. A logistic regression then gives every area a score between 0 and 1 from just two clues: the share of households with no car, and the share with two or more. Every score is produced by a model that did not see that area during training.' },
        { kind: 'p', text: 'An ROC curve shows, for every possible cut-off, how many of the true cases are caught against how many false alarms are raised. A useless model runs along the diagonal; a perfect one hugs the top-left corner. The area under the curve, AUC, sums this up in one number: 0.5 is guessing, 1.0 is perfect. Random scores give 0.515, the no-car share on its own 0.642, and the two-feature model 0.673. The clues carry real information, but not much.' },
        { kind: 'table', caption: 'What each cut-off catches and costs for the two-feature model, 853 Medway output areas, our Python run, 29 September 2026', head: ['Cut-off', 'Mostly terraced areas caught', 'False alarms (of 557 other areas)'], rows: [
          ['0.500', '11 of 296 (3.7%)', '41'],
          ['0.382', '51.4%', '161'],
          ['0.338', '70.6%', '218'],
          ['0.308', '80.1%', '287'],
          ['0.279', '90.2%', '356']
        ] },
        { kind: 'p', text: 'The default cut-off of 0.5 is nearly useless here. Because scores rarely rise that high, it catches only 11 of the 296 terraced areas, and its accuracy of 61.8% is worse than simply answering no every time, which scores 65.3%. Lowering the cut-off catches far more, but every extra catch costs false alarms: catching 80.1% means wrongly flagging 287 other areas. Which point is right depends entirely on what a mistake costs. A spam filter and a medical screening test would sit at opposite ends of the same curve.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort cards by a score, move a line up and down, and count what each position gets right and wrong.' },
          { h3: 'Ages 11 to 15', p: 'Work out catches and false alarms for a few cut-offs in Python and plot them.' },
          { h3: 'Ages 15 and up', p: 'Train the classifier, draw the full ROC curve, compute AUC and justify a cut-off by cost.' }
        ] },
        { kind: 'callout', h3: 'ONS counts, our classifier', p: 'The household counts are Census 2021 figures from the Office for National Statistics, read through Nomis. The labels, the model, the curve and every percentage are our own work; the model says nothing about why housing and car ownership are related.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Decisions and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A score is not a decision until someone chooses the cut-off.',
      body: [
        { kind: 'table', caption: 'From Medway\'s ROC curve to AI decisions', head: ['In the Chatham project', 'In AI tools and agents'], rows: [
          ['0.5 caught 11 of 296', 'Default settings can quietly fail'],
          ['Always "no" beat the model on accuracy', 'Accuracy alone hides what matters'],
          ['AUC 0.673 from two weak clues', 'A modest model needs modest claims'],
          ['Each extra catch cost false alarms', 'Every threshold is a trade-off'],
          ['The right cut-off depends on costs', 'Decide what an error costs before tuning']
        ] },
        { kind: 'p', text: 'AI-written classifier code almost always ends with a line that turns scores into answers at 0.5, and it rarely mentions that the choice matters. In our vibe coding lessons, where the learner describes what they need and an AI drafts the program, Chatham learners plot the ROC curve and pick the cut-off themselves. AI agents that flag, filter or approve things for you are making the same kind of decision, so knowing who set the threshold, and why, is part of trusting them. Building agents opens up once Python is steady, generally for older teens and adults; Copilot Studio agents are reserved for one-to-one sessions. The <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents pathway for UK students</a> shows where this leads, and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> explains our approach.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Office for National Statistics, Nomis or postcodes.io. Their open figures made this project possible; the model and any errors in it belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From sorting cards to ROC curves',
    intro: 'The school year gives us a first estimate; the trial lesson sets the true level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Trade-offs, fairness and choosing a line.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Classifiers, scores and evaluation alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Evaluating AI systems', p: 'Metrics, thresholds, language models and agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and thresholds',
    h2: 'What is an ROC curve, and what does AUC mean?',
    intro: 'An ROC curve shows every trade-off between catches and false alarms; AUC condenses it into one number from 0.5 (guessing) to 1.0 (perfect).',
    p1: 'For Medway\'s mostly-terraced areas the two-feature model scored an AUC of 0.673, and at the default 0.5 cut-off it caught only 11 of 296, less accurate overall than always saying no.',
    p2: 'Learners who have drawn the curve themselves stop trusting default settings and ask what each kind of mistake would cost.',
    closer: 'Reading an ROC curve shows Chatham teenagers how AI decisions are actually made, which is a sound reason to take up coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Walderslade to Luton, online',
    intro: 'Everything happens over video, so a computer and decent broadband are all that is required.',
    cells: [
      { h3: 'Learners write the code', p: 'Students do the typing, prompting and running, while the tutor watches their screen and keeps asking questions.' },
      { h3: 'The trial sets the level', p: 'What the learner shows in the free session, rather than the school year, decides where to start; exam boards are noted.' },
      { h3: 'First lesson free', p: 'No fee for the opening session, which finishes with a course we recommend.' },
      { h3: 'Stage-matched groups', p: 'A class gathers five to ten learners from across Britain who are at one level.' },
      { h3: 'Two sessions a week', p: 'Paused during school holidays.' },
      { h3: 'Steady lesson times', p: 'Tutors adjust to UK clock changes, so the hour stays the same.' }
    ],
    spec: { title: 'Why lessons are online', p: 'Five learners at one stage, all free on one evening, rarely live near each other. Online, they share a class without the journey.' }
  },

  fees: {
    h2: 'Chatham fees',
    intro: 'Chatham learners pay our international rate, the same in every country apart from India.',
    first: 'A complete opening lesson free, rounded off with a course suggestion.',
    group: 'About eight live small-group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Fees are quoted in US dollars, not pounds, and we bill only after the trial has agreed a course and a weekly time. The pricing page explains breaks, absences and switching format.'
  },

  reviewsH2: 'Google reviews: Medway and Kent households, and others nationwide',

  book: {
    h2: 'Book a free Chatham lesson',
    intro: 'Tell us how old the learner is, or their school year, and what they like. A trial might be a sorting-and-scoring puzzle, a Scratch game built with AI help, a first Python program, or drawing a simple ROC curve.',
    success: 'Thank you. Your Chatham request has arrived.'
  },

  faq: {
    h2: 'Chatham questions',
    intro: 'ROC curves, the classifier project, vibe coding, agents and fees.',
    items: [
      { q: 'What is the population of Chatham?', a: 'The ONS gives 76,955 for the Chatham built-up area at the 2021 census.' },
      { q: 'Are AI and programming lessons available for Chatham learners?', a: 'Yes, through live video for anyone aged 6 to 67 in Chatham and across Medway.' },
      { q: 'What does AUC mean in machine learning?', a: 'The area under the ROC curve: a single number showing how well a model ranks true cases above others, where 0.5 is guessing and 1.0 is perfect.' },
      { q: 'What is the Chatham project?', a: 'Learners train a classifier on Medway\'s 853 census output areas, draw its ROC curve and choose a cut-off by weighing catches against false alarms.' },
      { q: 'Is vibe coding part of the lessons?', a: 'Yes, at every age, with the learner planning and testing what the AI writes.' },
      { q: 'When can learners start building AI agents?', a: 'After their Python becomes confident, most often in the late teens or adulthood; Copilot Studio agent work is private.' },
      { q: 'Are lessons in person?', a: 'No, all lessons are live online.' },
      { q: 'Do you support GCSE and A level?', a: 'Yes, in computer science and maths, aiming at understanding rather than promised grades.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the opening lesson. Ongoing tuition is USD 100 a month as part of a class or USD 150 a month with your own tutor.' },
      { q: 'Do lessons pause for school holidays?', a: 'Yes. Let us know the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Medway and Kent pages',
    html: 'In Medway, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-rochester">Rochester</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-gillingham">Gillingham</a> have pages and projects of their own, and elsewhere in Kent so do <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-dartford">Dartford</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-margate">Margate</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Chatham and Kent',
  footerPlaces: [
    { href: '/coding-classes-in-kent', label: 'Kent' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-cht .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-cht .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-cht .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-cht .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cht .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.02em; }
.cg-root.cg-cht .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-cht .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cht .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-cht .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-cht .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Medway (E06000035), Census 2021 TS001 usual residents 279,773. ONS 2021 BUAs (published): Chatham 76,955; Gillingham (Medway) 108,480; Rochester 67,285. postcodes.io (Medway) suburban areas: Luton, Walderslade.',
    localProject: 'Nomis TS044 + TS045 for 853 Medway OAs (111,425 households); label mostly terraced 296 (34.7%). AUC: random 0.515; no-car share 0.642; logistic on two car features (5-fold held-out) 0.673. Cut-offs: 0.382 catches 51.4% with 161 false alarms of 557; 0.338 70.6% (218); 0.308 80.1% (287); 0.279 90.2% (356); 0.258 95.3% (405). At 0.5: 11 of 296 caught, 41 false alarms, accuracy 61.8% vs always-no 65.3%. Lesson family: ROC curve, AUC, thresholds and costs.',
    requiredMentions: [
      '76,955',
      '279,773',
      '111,425',
      'Walderslade',
      'ROC curve',
      'area under the curve',
      '0.673',
      '0.642',
      '853'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Census 2021 TS044 and TS045 for Medway output areas, and TS001 usual residents, via the Nomis API.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas in Medway.', url: 'https://api.postcodes.io/places?q=Walderslade' }
    ],
    rejectedClaims: [
      'Dockyard or naval history: not read from a source; not claimed.',
      'Why terraced housing and car ownership go together: not measured; not claimed.',
      'How any named spam or medical system sets its threshold: mentioned only as general examples.',
      'Age features: requested but downloads were cut short, so not used.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
