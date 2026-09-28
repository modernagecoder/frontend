'use strict';
// Halifax (cg- town page, UK cluster Phase 8, towns band A, row 372). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can a model tell which region a
// place is in from its ages alone, and how do you know whether it really learned anything?
// Data (read 28 September 2026): Nomis API, Census 2021 TS007A (NM_2020_1), 19 age categories, for every England
// "local authorities: district / unitary (as of April 2023)" area (TYPE424), fetched as one call per region (9 calls),
// 296 districts: South East 64, East 45, North West 35, East Midlands 35, London 33, West Midlands 30, South West 27,
// Yorkshire and The Humber 15, North East 12. Every district's 18 bands summed exactly to its published total.
// Our run (scratchpad hal/run.py, run2.py): features = 18 age-band shares; centroid = plain mean of member districts;
// Euclidean distance. Training accuracy (district inside its own centroid) 98/296 = 33.1%; leave-one-out 86/296 = 29.1%;
// always-South-East baseline 64/296 = 21.6%; population-weighted centroids, leave-one-out 77/296 = 26.0%.
// Leave-one-out recall: London 27/33, South West 16/27, South East 16/64, East 9/45, North West 7/35, East Midlands 5/35,
// North East 3/12, Yorkshire and The Humber 2/15 (Hull, Sheffield), West Midlands 1/30.
// Calderdale -> South East; distances x1000: South East 12.73, North West 13.32, East 13.63, West Midlands 13.89, East
// Midlands 16.45, North East 17.69, Yorkshire and The Humber 18.40, South West 26.99, London 68.92. Leeds -> London;
// Bradford, Kirklees, Wakefield -> North West. Aged 20 to 24 share: York 10.04%, Sheffield 9.14%, Leeds 8.68%, Calderdale
// 4.90% (10,125 of 206,631); plain Yorkshire centroid 6.08%. Largest one-district shift of a centroid (x1000): Yorkshire
// 3.59 (East Riding of Yorkshire), South East 1.82 (Oxford). No cause for the 20 to 24 differences was measured or claimed.
// Lesson family: nearest-centroid classifier, leave-one-out evaluation, majority baseline, per-class recall / confusion
// matrix, small-class instability. Screened: centroid (only geographic centroids elsewhere), leave-one-out (Dundrum,
// Plymouth, Carlisle used it for other models), confusion matrix 0 hits. Castlebar owns nearest neighbours.
// Place facts: ONS 2021 BUAs in Calderdale (published): Halifax 88,115; Brighouse 33,160; Elland 15,785; Todmorden 12,970;
// Shelf and Northowram 9,195; Hebden Bridge 5,225. Huddersfield BUA straddles (366 residents inside Calderdale) and has its
// own page; excluded. Calderdale TS001 usual residents 206,631.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HALIFAX', label: 'Halifax', blurb: 'AI and programming classes for Halifax, with a project that asks whether a nearest-centroid model can place Calderdale in its region from census ages alone.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-halifax',
  code: 'hfx',
  accent: '#4C461B',
  accentRationale: 'Halifax: a dark moorland olive (7.69:1 contrast), chosen by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Halifax',
    eyebrow: 'Halifax, Calderdale, West Yorkshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-yorkshire-and-the-humber', name: 'Yorkshire and the Humber' }],
  nav: [
    { label: 'West Yorkshire', href: '/coding-classes-in-west-yorkshire' },
    { label: 'Yorkshire', href: '/coding-and-ai-classes-in-yorkshire-and-the-humber' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Halifax, England',
  title: 'AI and Programming Classes in Halifax | Coding for 6 to 67',
  description: 'Online AI, programming, Python and vibe coding classes for Halifax, Brighouse, Elland and Todmorden learners aged 6 to 67, private or in groups. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Halifax, and a Python project that tests whether a simple classifier can place Calderdale by its ages.',
  twitterDescription: 'Halifax AI, programming and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Halifax',
    description: 'Online AI, programming, Python, vibe coding and mathematics for children, teenagers and adults in Halifax and across Calderdale, taught live with thinking skills first.'
  },

  h1: 'AI and programming classes in Halifax',
  capsuleQ: 'Which are the best AI and programming classes in Halifax?',
  capsule: 'At the 2021 census the ONS counted 88,115 people in the Halifax built-up area and 206,631 across Calderdale, which also takes in Brighouse, Elland, Todmorden and Hebden Bridge. Anyone from 6 to 67 living there can study AI, programming, Python, vibe coding and maths with us live over video, taught by tutors in India either privately or alongside five to ten learners at their level. Thinking comes before tools: learners who ask AI to write code are taught to judge what comes back. A free trial lesson ends with a course we suggest for the learner. The Halifax project trains a tiny classifier on census ages and then checks, honestly, whether it learned anything. Fees after the trial are USD 100 per month in a class or USD 150 per month one-to-one.',
  lead: 'Suppose a computer is shown nothing about Calderdale except how its 206,631 residents split into age bands: how many are under five, how many are in their twenties, how many are over 85. Could it work out which English region Halifax belongs to? It sounds like a fair puzzle, and a simple machine learning method called a nearest-centroid classifier will always give an answer. The more useful question is whether that answer means anything. This project builds the classifier in Python on real census data for all 296 districts of England, and then spends most of its time on the part that beginners, and plenty of AI tools, skip: testing it properly.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a Halifax learner.',

  picks: {
    eyebrow: 'Halifax course picks',
    h2: 'Thinking, vibe coding and AI courses for Halifax',
    intro: 'Match the course to the learner\'s age and curiosity; each begins with a free live lesson and needs no card to book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: sorting, grouping, patterns and explaining a rule in words.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch projects first, then little apps made by describing them to an AI and testing the result.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, from a first classifier to fair testing, including this census project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Language models, retrieval and AI agents, with evaluation treated as part of the build.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Halifax and Calderdale',
      h2: 'Halifax and the other Calderdale towns',
      intro: 'Published 2021 census populations from the ONS for built-up areas in Calderdale.',
      body: [
        { kind: 'table', caption: 'Calderdale built-up areas of 5,000 people or more, ONS 2021 published populations', head: ['Built-up area', 'People (2021)'], rows: [
          ['Halifax', '88,115'],
          ['Brighouse', '33,160'],
          ['Elland', '15,785'],
          ['Todmorden', '12,970'],
          ['Shelf and Northowram', '9,195'],
          ['Hebden Bridge', '5,225']
        ] },
        { kind: 'p', text: 'These figures are listed one by one, as the ONS released them. Their sum is not the Calderdale total, since smaller villages sit outside every row, so we never present it as one; the borough figure of 206,631 comes from its own census table. The Huddersfield built-up area crosses the borough line only at its edge, lies almost wholly in Kirklees and has its own page. Calderdale pupils follow the national curriculum for England, and if you send us your school holiday dates we will leave those weeks free.' },
        { kind: 'callout', h3: 'Wider pages and our teaching aim', p: 'Pages covering the whole of <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">West Yorkshire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a> list more options. The reasoning behind putting judgement before prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Halifax project',
      h2: 'Can a classifier place Calderdale from its ages?',
      intro: 'Build a nearest-centroid model on 296 districts, then test it the honest way.',
      body: [
        { kind: 'p', text: 'The data comes from the Nomis API as Census 2021 table TS007A, for every English local authority district as it stood in April 2023, fetched in nine requests, one per region. Each district becomes a list of 18 numbers: the share of its residents in each five-year age band. As a first check, the learner confirms that the 18 bands add up exactly to the published total for all 296 districts, which they do. For each of the nine regions the program then works out a centroid, the average age profile of its member districts. To classify a district, it measures the straight-line distance from that district\'s profile to each centroid and picks the closest one.' },
        { kind: 'table', caption: 'How often the classifier names the right region, 296 English districts, our Python run, 28 September 2026', head: ['Method', 'Correct', 'Accuracy'], rows: [
          ['Always guess South East, the most common region', '64 of 296', '21.6%'],
          ['Nearest centroid, each district included in its own centroid', '98 of 296', '33.1%'],
          ['Nearest centroid, leave-one-out', '86 of 296', '29.1%'],
          ['Leave-one-out with centroids weighted by population', '77 of 296', '26.0%']
        ] },
        { kind: 'p', text: 'The first score, 33.1%, flatters the model, because each district helped build the very centroid it is then compared against. Leave-one-out testing fixes that: every district is removed in turn, the centroids are rebuilt without it, and only then is it classified. Accuracy drops to 29.1%. That beats the lazy baseline of always answering South East, 21.6%, but not by much. Weighting each district by its population sounds more correct and does worse, 26.0%. In a weighted average the largest districts carry most of the weight, and finding out why that hurts here makes a good follow-up task.' },
        { kind: 'table', caption: 'Leave-one-out results by true region (the diagonal of the confusion matrix)', head: ['True region', 'Named correctly'], rows: [
          ['London', '27 of 33'],
          ['South West', '16 of 27'],
          ['South East', '16 of 64'],
          ['East', '9 of 45'],
          ['North West', '7 of 35'],
          ['East Midlands', '5 of 35'],
          ['North East', '3 of 12'],
          ['Yorkshire and The Humber', '2 of 15'],
          ['West Midlands', '1 of 30']
        ] },
        { kind: 'p', text: 'A confusion matrix records, for each true region, which region the model named. Its diagonal shows that the overall score hides very uneven results. London districts are recognised 27 times out of 33; the West Midlands is recognised once in 30. Only two Yorkshire districts, Hull and Sheffield, are placed in Yorkshire. Calderdale is not one of them: its profile sits nearest the South East centroid, with the Yorkshire centroid only seventh of nine. Leeds is sent to London, and Bradford, Kirklees and Wakefield to the North West. These are mistakes by the model, not descriptions of the places.' },
        { kind: 'table', caption: 'Calderdale\'s distance to each leave-one-out centroid, multiplied by 1,000 (smaller is closer)', head: ['Region centroid', 'Distance'], rows: [
          ['South East', '12.73'],
          ['North West', '13.32'],
          ['East', '13.63'],
          ['West Midlands', '13.89'],
          ['East Midlands', '16.45'],
          ['North East', '17.69'],
          ['Yorkshire and The Humber', '18.40'],
          ['South West', '26.99'],
          ['London', '68.92']
        ] },
        { kind: 'p', text: 'Looking inside the centroid shows part of the reason. In the 20 to 24 age band York has 10.04% of its residents, Sheffield 9.14% and Leeds 8.68%, against 4.90% in Calderdale, and the plain Yorkshire average across its 15 districts comes to 6.08%. Members that far from the rest can drag an average away from districts like Calderdale. Small groups are also unstable: removing a single district can move the Yorkshire centroid by up to 3.59 thousandths, about twice the largest shift seen in the 64-district South East. The project measures these shares but does not test why they differ.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort picture cards into groups, find the middle of each group, and place a new card by the nearest middle.' },
          { h3: 'Ages 11 to 15', p: 'Turn census counts into shares in Python and classify a few districts by hand-checked distances.' },
          { h3: 'Ages 15 and up', p: 'Code leave-one-out testing, compare against a baseline and read the confusion matrix.' }
        ] },
        { kind: 'callout', h3: 'ONS counts, our model', p: 'The age counts are Census 2021 figures from the Office for National Statistics, read through Nomis. The classifier, the distances, the accuracy figures and the tables built from them are our own calculations.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Testing what AI builds',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A model that always answers still has to earn trust.',
      body: [
        { kind: 'table', caption: 'Lessons from the Halifax classifier', head: ['In the census project', 'When AI writes or runs the code'], rows: [
          ['33.1% on data it had already seen', 'Ask what the reported score was tested on'],
          ['29.1% against a 21.6% baseline', 'Ask what a trivial answer would score'],
          ['27 of 33 for London, 1 of 30 for the West Midlands', 'Look at results per group, not only the total'],
          ['Weighting by population made it worse', 'Try the obvious improvement and measure it'],
          ['Calderdale named as South East', 'A confident answer can still be wrong']
        ] },
        { kind: 'p', text: 'Ask a chatbot for a classifier and it will usually produce working code and a single accuracy number within seconds. In our vibe coding lessons, where learners describe what they want and an AI drafts the program, the Halifax project is the habit we want them to keep: find out what the number was measured on and what it should be compared with. AI agents raise the stakes, because an agent may train, score and report a model without a person reading each step, so older teenagers and adults learn to build the checks in. Python comes first, and Copilot Studio agent building is taught only one-to-one. See our <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents course page for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no link with the Office for National Statistics or Nomis. The published counts are theirs; the model built on them, and any errors in it, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From sorting cards to testing models',
    intro: 'We treat the school year as a starting guess and let the free lesson set the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Grouping, patterns and explaining why an answer is right.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps made with AI help, each one tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Data, classifiers and fair testing alongside GCSE and A level work.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Models and agents', p: 'Build, evaluate and automate with Python, language models and agents.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and evidence',
    h2: 'How do you know a model has learned something?',
    intro: 'Test it on what it has not seen, and compare it with a guess.',
    p1: 'The Halifax classifier answers every question it is asked, yet on held-out districts it is right less than a third of the time. Bigger AI systems are far more capable, but the same questions decide whether their output deserves trust.',
    p2: 'Learners who have watched a score fall from 33.1% to 29.1% just by testing fairly tend to ask where any accuracy figure came from, including the ones AI tools give them.',
    closer: 'A Halifax teenager who can tell a tested model from a lucky one will get far more out of AI, which is exactly why learning to code still matters in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Hebden Bridge to Brighouse, online',
    intro: 'Any Calderdale home with a computer and steady internet can take part.',
    cells: [
      { h3: 'Learners do the typing', p: 'Each program is written, prompted and run by the student; the tutor sees their screen and poses the next question.' },
      { h3: 'Level over year group', p: 'The trial shows where to begin, whether the learner is in Year 3 or Year 13, and we note any exam board.' },
      { h3: 'Nothing to pay at first', p: 'The opening lesson is free and closes with our suggestion for what to take.' },
      { h3: 'Classes by stage', p: 'Groups hold five to ten UK learners who are at a similar point.' },
      { h3: 'Twice weekly', p: 'Lessons pause during school holidays.' },
      { h3: 'Steady lesson times', p: 'Our tutors follow the UK clock changes, so your slot stays put in spring and autumn.' }
    ],
    spec: { title: 'Why we teach online', p: 'Across a borough of several separate towns, five learners at the same stage who share a free evening are unlikely to live close together. Online, they can share a class anyway.' }
  },

  fees: {
    h2: 'Halifax fees',
    intro: 'Halifax learners pay the international fee that applies everywhere except India.',
    first: 'A complete first lesson at no cost, followed by our course suggestion.',
    group: 'Roughly eight live lessons a month in a small group.',
    private: 'Roughly eight live private lessons a month.',
    closer: 'We charge in US dollars rather than pounds, and send no invoice until the free lesson has settled a course and a weekly time. Pricing covers breaks, missed lessons and switching format.'
  },

  reviewsH2: 'Google reviews from families in West Yorkshire and across the UK',

  book: {
    h2: 'Book a free Halifax lesson',
    intro: 'Let us know the learner\'s age or year at school and what interests them. Possible first lessons: a sorting and grouping puzzle, a Scratch game built with AI help, a first Python program, or a small data challenge.',
    success: 'Thank you. Your Halifax request has reached us.'
  },

  faq: {
    h2: 'Halifax questions',
    intro: 'The census classifier, vibe coding, agents and the practical side.',
    items: [
      { q: 'What is the population of Halifax?', a: 'The ONS recorded 88,115 people in the Halifax built-up area at the 2021 census, and 206,631 in Calderdale as a whole.' },
      { q: 'Can Halifax learners join your AI and programming classes?', a: 'Yes. All teaching is live on video, so learners aged 6 to 67 anywhere in Calderdale can take part.' },
      { q: 'Is vibe coding taught to Halifax learners?', a: 'Yes, to children, teenagers and adults online, with learners planning the program and checking whatever the AI writes.' },
      { q: 'When can a learner start on AI agents?', a: 'After a grounding in Python, usually as an older teenager or adult. Copilot Studio agent work is one-to-one only.' },
      { q: 'What is the census classifier project?', a: 'Learners build a nearest-centroid model that guesses a district\'s region from its age profile, then test it with leave-one-out evaluation and a baseline.' },
      { q: 'Do you have a classroom in Halifax?', a: 'No. Every lesson is live online.' },
      { q: 'Can you help with GCSE and A level?', a: 'Yes, in computer science and maths. We work on understanding and never promise a grade.' },
      { q: 'Which ages do you teach?', a: 'Any age from 6 to 67.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that a group place is USD 100 a month and private lessons are USD 150 a month.' },
      { q: 'Do lessons stop for school holidays?', a: 'Yes. Send us the dates and we will plan around them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More West Yorkshire pages',
    html: 'Calderdale families preparing for the grammar school tests can use <a class="cg-inline-link" href="/11-plus-maths-tuition-calderdale">11 plus maths tuition in Calderdale</a>. Over the borough line, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-huddersfield">Huddersfield</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-dewsbury">Dewsbury</a>, <a class="cg-inline-link" href="/best-coding-class-in-bradford">Bradford</a> and <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> each run a project of their own. Every UK town and county we cover is listed from <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">our United Kingdom page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Halifax and West Yorkshire',
  footerPlaces: [
    { href: '/coding-classes-in-west-yorkshire', label: 'West Yorkshire' },
    { href: '/coding-and-ai-classes-in-yorkshire-and-the-humber', label: 'Yorkshire and the Humber' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hfx .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-hfx .cg-hero h1 { font-weight: 760; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-hfx .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-hfx .cg-eyebrow { letter-spacing: 0.15em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-hfx .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.016em; }
.cg-root.cg-hfx .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-hfx .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hfx .cg-table th { letter-spacing: 0.04em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-hfx .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-hfx .cg-callout { border-left-width: 4px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Calderdale (E08000033), Census 2021 TS001 usual residents 206,631. ONS 2021 BUAs (published): Halifax 88,115; Brighouse 33,160; Elland 15,785; Todmorden 12,970; Shelf and Northowram 9,195; Hebden Bridge 5,225. Huddersfield BUA straddles (366 inside Calderdale) and is excluded.',
    localProject: 'Nomis TS007A (NM_2020_1) for all 296 England LADs as of April 2023 (TYPE424), 9 calls, bands sum exactly to totals. Nearest centroid on 18 age shares, Euclidean: training 98/296 = 33.1%; leave-one-out 86/296 = 29.1%; majority South East 64/296 = 21.6%; population-weighted LOO 77/296 = 26.0%. LOO recall: London 27/33, SW 16/27, SE 16/64, East 9/45, NW 7/35, EM 5/35, NE 3/12, Yorks 2/15 (Hull, Sheffield), WM 1/30. Calderdale -> SE (12.73) vs Yorks 18.40 (7th of 9). Leeds -> London; Bradford, Kirklees, Wakefield -> NW. 20 to 24 share: York 10.04%, Sheffield 9.14%, Leeds 8.68%, Calderdale 4.90%, Yorks plain centroid 6.08%. Max one-district centroid shift x1000: Yorks 3.59, SE 1.82. Lesson family: nearest-centroid classifier, leave-one-out, baseline, confusion matrix, small-class instability.',
    requiredMentions: [
      '206,631',
      '88,115',
      'Brighouse',
      'Elland',
      'Todmorden',
      'Hebden Bridge',
      'Shelf and Northowram',
      'centroid',
      'leave-one-out',
      'confusion matrix'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Census 2021 TS007A, age by five-year bands, for every English local authority district as of April 2023, via the Nomis API.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E08000033&measures=20100' },
      { claim: 'Census 2021 TS001, number of usual residents, Calderdale 206,631, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' }
    ],
    rejectedClaims: [
      'Why York, Sheffield and Leeds have larger 20 to 24 shares: not measured; not claimed.',
      'Halifax as the largest town in Calderdale: Huddersfield BUA straddles the boundary; no ranking claimed.',
      'Sum of the six built-up areas: not published as a total; not added.',
      'Calderdale rank on any age measure: not claimed.',
      'Textile, building society or other local history: not read from a source; not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
