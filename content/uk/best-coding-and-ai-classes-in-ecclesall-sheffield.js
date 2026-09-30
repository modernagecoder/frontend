'use strict';
// Ecclesall, Sheffield (cg- district page, UK cluster Phase 9, row 477). Keyword slug per the owner's rotation (city suffix),
// with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: where is the fairest single meeting point
// for everyone in a ward, and how different is it from the simple average? (geometric median by Weiszfeld's algorithm
// against the centroid; a flat optimum; robustness to far-away outliers).
// Data (read 30 September 2026): Nomis Census 2021 TS001 (NM_2021_1) at 2022 ward level: Ecclesall (E05010867) 20,559 usual
// residents. Output areas in the ward from the ONS OA21 to WD22 lookup (OA21_WD22_LTLA22_UTLA22_RGN22_CTRY22_EW_LU_v2): 63.
// Population-weighted OA centres from ONS OA_December_2021_EW_PWC_V4 (British National Grid); OA resident counts from TS001.
// Our run (scratchpad ecl/gm.py, city.py): each OA weighted by its residents. Weiszfeld converged in 45 iterations; the geometric
// median sits 61.1 m from the weighted centroid; average straight-line distance 889.8 m to the centroid and 888.9 m to the median
// (0.1% less); a grid search around the median confirmed no lower point. Hypothetical 3,000 extra people placed 3 km west: the
// centroid moves 385.0 m, the median 182.0 m. Farthest OA from the median 1,661 m; typical OA 860 m. Whole of Sheffield (1,829
// OAs): 31 iterations, median 414 m from the centroid, average distance 4,857 m against 4,842 m (0.31% less); the OAs nearest
// both points are in City ward.
// Lesson family: geometric median (Weiszfeld iteration), flat objective near the optimum, robustness to outliers. Screened:
// "geometric median", "Weiszfeld", "Fermat point" 0 hits anywhere in content/. Sheffield city page owns least squares.
// Place facts: postcodes.io (Sheffield, S11 unless stated) suburban areas: Ecclesall, Greystones, Bents Green, Banner Cross,
// Parkhead, Whirlow; Millhouses (S7); Ringinglow hamlet. Not claimed to lie inside the ward boundary.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ECCLESALL', label: 'Ecclesall', blurb: 'Coding and AI classes for Ecclesall in Sheffield, with a project that finds the fairest meeting point for a whole ward and asks how much it beats the simple average.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-ecclesall-sheffield',
  code: 'ecl',
  accent: '#3A4A5C',
  accentRationale: 'Ecclesall: a slate blue-grey (9.08:1 contrast), hand-picked to sit apart from the purples, greens and bronzes of recent pages',
  pageType: 'city',
  place: {
    name: 'Ecclesall',
    eyebrow: 'Ecclesall, Sheffield, South Yorkshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Sheffield' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-sheffield', name: 'Sheffield' }],
  nav: [
    { label: 'Sheffield', href: '/best-coding-class-in-sheffield' },
    { label: 'South Yorkshire', href: '/coding-classes-in-south-yorkshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ecclesall, Sheffield',
  title: 'Coding and AI Classes in Ecclesall, Sheffield | Ages 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Ecclesall, Greystones, Bents Green and Banner Cross learners in Sheffield, aged 6 to 67. First lesson free.',
  ogDescription: 'Coding and AI classes for Ecclesall, Sheffield, with a project that finds the fairest meeting point for 20,559 residents and tests it against the average.',
  twitterDescription: 'Ecclesall, Sheffield: coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Ecclesall, Sheffield',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Ecclesall and south-west Sheffield, taught live with reasoning first.'
  },

  h1: 'Coding and AI classes in Ecclesall, Sheffield',
  capsuleQ: 'Where can Ecclesall learners find the best coding and AI classes?',
  capsule: 'Ecclesall is a Sheffield ward of 20,559 usual residents, the ONS count from the 2021 census as published on Nomis. Greystones, Bents Green, Banner Cross, Parkhead and Whirlow are recorded as suburban areas of Sheffield in the S11 district. Our tutors, who work from India, teach coding, AI, Python, vibe coding and maths by video to learners as young as six and as old as 67, either alone or in a set of five to ten of similar ability. We teach how to reason about a problem before reaching for a tool, so learners can check what an AI says. The trial lesson is free, and at the end we recommend a course. The Ecclesall project places a single meeting point for everyone in the ward, first as a plain average and then with Weiszfeld\'s algorithm, and discovers how little one of them gains and how differently they react to change. Carrying on is priced at USD 100 per month for a class place or USD 150 per month for private tuition.',
  lead: 'Suppose everyone in a ward had to walk to one meeting point, and you wanted the total distance walked to be as small as possible. The obvious guess is the average position, the centroid. The true answer is a different point, the geometric median, and there is no formula for it: you find it by iteration, most famously with a method published by Endre Weiszfeld in 1937. This project uses Census counts for the 63 small areas that make up Ecclesall ward to find both points, and then asks two questions any data scientist should ask of an "optimal" answer: how much better is it really, and how easily is it pushed around?',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Ecclesall, Sheffield?',

  picks: {
    eyebrow: 'Ecclesall course picks',
    h2: 'Ecclesall courses in reasoning, Python and AI',
    intro: 'Four starting points, sorted by age. The first lesson of every course is live and free, and we take no card to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: fair meeting points, averages and what "fairest" should mean.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with an AI and tested properly.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first steps to optimisation, including the Ecclesall meeting point.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How AI models are optimised, why flat optima matter, and AI agents in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Ecclesall and Sheffield',
      h2: 'Ecclesall, Greystones, Banner Cross and Whirlow',
      intro: 'The Census count for Ecclesall ward, and suburbs recorded in Sheffield\'s S11 district.',
      body: [
        { kind: 'table', caption: 'Ecclesall ward in the 2021 census, ONS figures via Nomis', head: ['Area', 'Usual residents (2021)'], rows: [
          ['Ecclesall ward, Sheffield', '20,559']
        ] },
        { kind: 'p', text: 'Postcodes.io lists Ecclesall, Greystones, Bents Green, Banner Cross, Parkhead and Whirlow as suburban areas of Sheffield in S11, with Millhouses in S7 and Ringinglow as a hamlet; we do not claim any of them sits exactly inside the ward boundary. Teaching lines up with England\'s national curriculum, including GCSE and A level computer science and maths. Tell us the term dates and lessons will leave the holidays free.' },
        { kind: 'callout', h3: 'Sheffield, South Yorkshire and thinking first', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-sheffield">coding classes in Sheffield</a> and <a class="cg-inline-link" href="/coding-classes-in-south-yorkshire">South Yorkshire</a>. Why reasoning comes before tools is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Ecclesall project',
      h2: 'The fairest meeting point: centroid against geometric median, with Weiszfeld\'s algorithm',
      intro: 'Sixty-three weighted points, two definitions of "middle", and a test of how each one moves.',
      body: [
        { kind: 'p', text: 'The learner downloads the ward\'s resident count from Nomis, uses the ONS lookup to find its 63 output areas, and takes each area\'s population-weighted centre point and resident count. The centroid is just the weighted average of those points. The geometric median is the point with the smallest total distance to everyone; Weiszfeld\'s algorithm finds it by starting at the centroid and repeatedly re-averaging with each area weighted by residents divided by its current distance, so nearby areas count more each round.' },
        { kind: 'table', caption: 'Meeting points for Ecclesall ward residents, straight-line distances, our Python run on Census 2021 data', head: ['Measure', 'Result'], rows: [
          ['Iterations for Weiszfeld to settle', '45'],
          ['Distance between centroid and geometric median', '61.1 m'],
          ['Average distance to the centroid', '889.8 m'],
          ['Average distance to the geometric median', '888.9 m'],
          ['Centroid shift if 3,000 people were added 3 km away', '385.0 m'],
          ['Geometric median shift in the same case', '182.0 m']
        ] },
        { kind: 'p', text: 'The two points are 61.1 m apart, yet the average walk differs by less than a metre, about 0.1%. Near its minimum the total distance is almost flat, so many nearby points are nearly as good. The same happens across the whole city: using all 1,829 Sheffield output areas, the median lies 414 m from the centroid and saves only 0.31% of average distance. Where the median earns its keep is robustness. Add a hypothetical block of 3,000 people 3 km outside the ward and the centroid lurches 385.0 m towards them, while the median moves 182.0 m. A single faraway group pulls an average much harder than it pulls a median.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Place counters on a map, find where a shared picnic spot should go, and measure the total string needed.' },
          { h3: 'Ages 11 to 15', p: 'Compute a weighted average position for Ecclesall\'s output areas in Python and plot it.' },
          { h3: 'Ages 15 and up', p: 'Code Weiszfeld\'s algorithm, compare it with the centroid and test both against an outlier.' }
        ] },
        { kind: 'callout', h3: 'Census counts, our meeting points', p: 'Resident counts are Office for National Statistics Census 2021 data from Nomis; output area centres and the ward lookup come from the ONS Open Geography Portal, all under the Open Government Licence. The points, distances and the hypothetical 3,000 people are our own; distances are straight lines, not walking routes.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Optimising and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Ask of any optimum: by what margin, and how steady?',
      body: [
        { kind: 'table', caption: 'From the Ecclesall meeting point to working with AI', head: ['In the ward project', 'When an AI optimises something'], rows: [
          ['45 iterations found the median', 'Many answers come from repeated improvement'],
          ['The median saved only 0.1%', 'An optimal answer may barely beat a simple one'],
          ['The objective was flat near its minimum', 'Many different answers can be almost equally good'],
          ['An outlier pulled the centroid 385.0 m', 'Averages are sensitive to extreme cases'],
          ['The median moved 182.0 m', 'Robust methods resist a few unusual inputs']
        ] },
        { kind: 'p', text: 'Training an AI model is also an iterative search for a minimum, and the same two questions apply to what it finds: is the optimum meaningfully better than a simpler answer, and would a handful of unusual examples drag it somewhere else? In vibe coding the learner describes a program while an AI writes it; our Ecclesall learners also ask the AI to report how much its clever version beats the plain one, and test it with an awkward extra data point. AI agents that optimise schedules or routes for people deserve that scrutiny too. We hold agent building back until Python is genuinely the learner\'s own, which tends to mean sixth form or adult life, and we teach Copilot Studio agents solely in private sessions. The principle is spelled out in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>; the practical steps are in <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents course outline for UK students</a>.' },
        { kind: 'p', text: 'The ONS, Nomis and postcodes.io publish the open data this page uses and have no connection with Modern Age Coders; the calculations and any errors in them are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From picnic spots to iterative algorithms',
    intro: 'School year is a starting guess; the free lesson confirms the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Fair choices, averages and deciding what counts as fairest.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with an AI and checked by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and optimisation', p: 'Weighted averages, iteration and robustness alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'AI and agents', p: 'How models are trained and checked, then AI agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Maths and AI',
    h2: 'What is the geometric median, and how is it different from the average?',
    intro: 'The geometric median is the point with the smallest total distance to a set of points; unlike the average it has no formula and is found by iteration, for example Weiszfeld\'s algorithm, and it is far less swayed by outliers.',
    p1: 'For Ecclesall ward\'s 20,559 residents it sat 61.1 m from the weighted average and cut the average walk by only 0.1%, but when 3,000 hypothetical people were added 3 km away it moved 182.0 m against the average\'s 385.0 m.',
    p2: 'Learners who have run that test ask of any optimised AI answer: how much does it really gain, and what would a few odd inputs do to it?',
    closer: 'An Ecclesall teenager who asks what an optimum gains, and what could knock it over, reads AI output with a sharper eye, and coding is how that eye is trained.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Lessons for S11, delivered by video',
    intro: 'Requirements are short: something with a keyboard and a webcam, plus home broadband.',
    cells: [
      { h3: 'Predict, then run', p: 'Before pressing run, the learner says what should happen. Our tutor, following the shared screen, holds them to it.' },
      { h3: 'Starting point', p: 'The trial tells us what to teach first, and we note the exam board if GCSE or A level is ahead.' },
      { h3: 'Trial at no cost', p: 'We teach the opening lesson for free and name a suitable course at the end.' },
      { h3: 'Sets of five to ten', p: 'Classmates come from all over Britain and are matched on level, not age alone.' },
      { h3: 'Rhythm', p: 'A pair of lessons each week in term time.' },
      { h3: 'Your time stays put', p: 'When the clocks change, our tutors adjust so you do not have to.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at the same stage, free the same evening and living on the same streets, are rare. Video removes the need.' }
  },

  fees: {
    h2: 'Ecclesall fees',
    intro: 'Outside India we have one price list, and it is the one Ecclesall families pay.',
    first: 'A free first lesson, then our recommendation.',
    group: 'About eight live group lessons each month.',
    private: 'About eight live one-to-one lessons each month.',
    closer: 'All fees are quoted in US dollars rather than pounds; the first invoice follows the trial once a course and a slot are fixed, and holidays, absences and format changes are handled on the pricing page.'
  },

  reviewsH2: 'From S11 and beyond: what families say about us on Google',

  book: {
    h2: 'Book a free Ecclesall lesson',
    intro: 'Two facts get us started: how old the learner is (or which year they are in) and what they enjoy. From there the trial might become a picnic-spot puzzle, an AI-assisted Scratch build, a gentle Python opener, or averaging real points on a map.',
    success: 'Thank you. Your Ecclesall request is with us.'
  },

  faq: {
    h2: 'Ecclesall questions',
    intro: 'Meeting points, the ward project, Python, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Ecclesall ward?', a: 'The 2021 census counted 20,559 usual residents in Sheffield\'s Ecclesall ward, according to ONS figures on Nomis.' },
      { q: 'Can someone in Ecclesall join your coding and AI classes?', a: 'They are. A learner in Greystones, Bents Green or any other part of Sheffield joins by video call, whether aged 6 or 67.' },
      { q: 'What is Weiszfeld\'s algorithm?', a: 'An iterative method for the geometric median: start anywhere, re-average the points weighted by one over their distance, and repeat until the point stops moving. For Ecclesall it settled in 45 rounds.' },
      { q: 'Why can an optimal answer barely beat a simple one?', a: 'Because many objectives are flat near their minimum. The Ecclesall median was 61.1 m from the average yet shortened the average walk by only about 0.1%.' },
      { q: 'What does the Ecclesall project involve?', a: 'Finding the average and the geometric median of Ecclesall ward\'s 63 output areas, weighted by residents, and testing how far each moves when an outlying group is added.' },
      { q: 'How does vibe coding fit into lessons?', a: 'It runs through every age band. The learner sets out what the program must do, an AI drafts it, and the learner hunts for what it got wrong.' },
      { q: 'When can learners start building AI agents?', a: 'When writing Python no longer needs a helping hand, typically Year 12 upwards or adulthood; Copilot Studio is taught one-to-one.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, in computer science and maths, taught for understanding; we never promise grades.' },
      { q: 'How much are lessons?', a: 'Lesson one is free; ongoing classes cost USD 100 monthly, private lessons USD 150 monthly.' },
      { q: 'Do lessons pause in the holidays?', a: 'During Sheffield school holidays we stop; a quick message with the dates is enough.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Sheffield and South Yorkshire pages',
    html: 'A different experiment sits on each of these: <a class="cg-inline-link" href="/best-coding-class-in-sheffield">Sheffield</a> (fitting a trend line), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-rotherham">Rotherham</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-barnsley">Barnsley</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-chesterfield">Chesterfield</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ecclesall and Sheffield',
  footerPlaces: [
    { href: '/best-coding-class-in-sheffield', label: 'Sheffield' },
    { href: '/coding-classes-in-south-yorkshire', label: 'South Yorkshire' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ecl .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-ecl .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-ecl .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-ecl .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ecl .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-ecl .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; font-style: italic; }
.cg-root.cg-ecl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ecl .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-ecl .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-ecl .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Sheffield (E08000019), Ecclesall ward (E05010867), Census 2021 TS001 usual residents 20,559 (Nomis NM_2021_1, 2022 wards). England national curriculum; GCSE and A level. postcodes.io (Sheffield): Ecclesall, Greystones, Bents Green, Banner Cross, Parkhead, Whirlow (S11 suburban areas), Millhouses (S7), Ringinglow (hamlet).',
    localProject: 'ONS OA21 to WD22 lookup: 63 OAs in Ecclesall ward; ONS OA December 2021 population-weighted centroids; TS001 OA counts as weights. Weiszfeld 45 iterations; median 61.1 m from centroid; average distance 889.8 m (centroid) vs 888.9 m (median). Hypothetical 3,000 people 3 km west: centroid moves 385.0 m, median 182.0 m. Sheffield 1,829 OAs: 414 m apart, 4,857 vs 4,842 m (0.31%). Lesson family: geometric median, Weiszfeld, flat optimum, robustness.',
    requiredMentions: [
      '20,559',
      'Greystones',
      'Bents Green',
      'Banner Cross',
      'Whirlow',
      'Parkhead',
      'Ringinglow',
      'geometric median',
      'Weiszfeld'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis, 2022 wards and output areas.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Output Areas (December 2021) population-weighted centroids and OA to ward lookup, ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: suburban areas of Sheffield.', url: 'https://api.postcodes.io/places?q=Greystones' }
    ],
    rejectedClaims: [
      'Where any real venue should be sited: not claimed; the meeting point is a teaching exercise.',
      'Walking distances: all distances are straight lines between area centres, stated on the page.',
      'That the listed suburbs lie inside the Ecclesall ward boundary: not claimed.',
      'Sum of ward populations or comparisons with other wards: none made.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
