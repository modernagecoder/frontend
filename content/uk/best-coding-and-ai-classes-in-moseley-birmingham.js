'use strict';
// Moseley, Birmingham (cg- district page, UK cluster Phase 9, row 453). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: how many clusters are there, and can a score tell
// you? (k-means with the silhouette score as a cluster-validity measure; why the top score can be the least useful answer;
// inertia always falls; a random baseline).
// Data (read 30 September 2026): OpenStreetMap API 0.6 over bbox -1.975,52.420,-1.870,52.480 (24 tiles, ODbL): nodes and
// ways tagged shop=*, or amenity = cafe, restaurant, fast_food, pub or bar, whose position lies inside the ONS Moseley ward
// boundary (Wards December 2022, E05011154, 5.87 sq km): 114 places.
// Our run (scratchpad msy/msy.py): scikit-learn k-means (20 starts) on positions in metres, and the mean silhouette score.
// k / silhouette / cluster sizes: 2 / 0.775 / 107 and 7; 3 / 0.757 / 103, 7, 4; 4 / 0.720; 5 / 0.749 / 93, 8, 6, 4, 3; 6 /
// 0.507 / 61, 35, 6, 5, 4, 3; 7 / 0.492; 8 / 0.501; 9 / 0.514; 10 / 0.514. Within-cluster sum of squares (sq km): 21.19,
// 14.17, 8.79, 5.53, 3.85, 2.83, 2.12, 1.67, 1.34 for k 2 to 10. The same number of points scattered uniformly at random
// over the bounding box scored 0.38 to 0.43 for k 2 to 8.
// Lesson family: silhouette score and choosing the number of clusters (cluster validity). Screened: "silhouette", "elbow
// method" appear only in resource and course files; claimed in claims.txt. Runcorn owns DBSCAN, Cannock hierarchical
// clustering, Harborne (Phase 9) Gaussian mixtures with BIC; k-means itself appears on two older pages as a tool.
// Place facts: Census 2021 TS001, Moseley ward 21,839 (Nomis). postcodes.io (Birmingham): Moseley, Wake Green, Moor Green,
// Billesley (B13); Balsall Heath (B12).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'MOSELEY', label: 'Moseley, Birmingham', blurb: 'Coding and AI classes for Moseley, with a clustering project that asks how many shopping clusters the ward really has and whether a score can decide.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-moseley-birmingham',
  code: 'msy',
  accent: '#2F4F4F',
  accentRationale: 'Moseley: a dark slate green-grey (8.93:1 contrast), hand-picked to differ in hue from recent pages',
  pageType: 'city',
  place: {
    name: 'Moseley',
    eyebrow: 'Moseley, Birmingham, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'Birmingham', href: '/coding-classes-in-birmingham' },
    { label: 'Kings Heath', href: '/vibe-coding-and-ai-agents-classes-in-kings-heath-birmingham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Moseley, Birmingham',
  title: 'Coding and AI Classes in Moseley, Birmingham | Python, 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Moseley, Wake Green, Moor Green and Billesley learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Coding and AI classes for Moseley, Birmingham, with a k-means project showing why the highest silhouette score is not always the most useful clustering.',
  twitterDescription: 'Moseley coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Moseley, Birmingham',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Moseley and south Birmingham, taught live with judgement as well as method.'
  },

  h1: 'Coding and AI classes in Moseley, Birmingham',
  capsuleQ: 'Where can Moseley learners find the best coding and AI classes?',
  capsule: 'Moseley ward, in the city of Birmingham, had 21,839 usual residents at the 2021 census. Wake Green, Moor Green and Billesley are recorded suburban areas in the same B13 postcode district, with Balsall Heath in B12. Lessons in coding, AI, Python, vibe coding and maths run on live video with a tutor based in India, open to ages six through 67, either privately or in a class of five to ten at one stage. We teach judgement alongside method, so a learner knows when a number has answered the question and when it has dodged it. The first lesson is free, and it ends with a course suggestion. The Moseley project clusters the ward\'s 114 mapped shops and eating places and asks a popular score how many clusters there are; the score\'s favourite answer turns out to be the least interesting. Ongoing tuition is USD 100 a month in a class or USD 150 a month privately.',
  lead: 'Clustering algorithms such as k-means have an awkward requirement: you must tell them how many clusters to find. Ask for two and you get two; ask for nine and you get nine. So analysts reach for a score to choose the number for them. The most popular is the silhouette score, which checks, for every point, whether it is closer to its own cluster than to the next one, and averages the result between minus one and one. Higher is supposed to be better. This project puts that to the test on something a local person can judge by eye: where the shops, cafés and pubs of Moseley ward sit on the map.',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Moseley?',

  picks: {
    eyebrow: 'Moseley course picks',
    h2: 'Moseley courses in thinking, Python and AI',
    intro: 'Four options by age. Each begins with a live lesson at no cost, and nothing is asked for up front.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: grouping things sensibly and questioning a score.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games dreamt up by the learner, typed with an AI and tested by hand.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including k-means and the Moseley silhouette test.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How AI systems group and embed data, how to evaluate them, and agents in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Moseley',
      h2: 'Moseley, Wake Green, Moor Green and Billesley',
      intro: 'The Census 2021 count for Moseley ward, and places recorded in B13.',
      body: [
        { kind: 'table', caption: 'Moseley ward, Birmingham, Census 2021 via Nomis', head: ['Area', 'Residents (2021)'], rows: [
          ['Moseley ward', '21,839']
        ] },
        { kind: 'p', text: 'The ward as drawn by the ONS covers 5.87 square kilometres, and that boundary is the one the project uses. Postcodes.io lists Moseley, Wake Green, Moor Green and Billesley as suburban areas of Birmingham in the B13 district, and Balsall Heath in B12. Local schools teach England\'s national curriculum; pass us the term dates and lessons will keep clear of the holidays.' },
        { kind: 'callout', h3: 'Birmingham, Kings Heath and our approach', p: 'There is more on <a class="cg-inline-link" href="/coding-classes-in-birmingham">coding classes in Birmingham</a> and on <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-kings-heath-birmingham">Kings Heath</a>. Why we teach thinking before tools is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Moseley project',
      h2: 'How many clusters? K-means and the silhouette score on Moseley\'s shops',
      intro: 'One map, nine clusterings, and a score that prefers the dullest of them.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data for south Birmingham and keeps every shop, café, restaurant, takeaway, pub and bar whose position falls inside Moseley ward: 114 places. Their positions are converted to metres and k-means is run for every number of clusters from two to ten, twenty times each from different starts. For each result the program records the silhouette score and also the total squared distance of points from their cluster centres, the quantity k-means itself tries to shrink.' },
        { kind: 'table', caption: 'K-means on 114 shops and eating places in Moseley ward, our Python run on OpenStreetMap data', head: ['Clusters', 'Silhouette score', 'Cluster sizes', 'Squared distance (sq km)'], rows: [
          ['2', '0.775', '107 and 7', '21.19'],
          ['3', '0.757', '103, 7 and 4', '14.17'],
          ['5', '0.749', '93, 8, 6, 4 and 3', '5.53'],
          ['6', '0.507', '61, 35, 6, 5, 4 and 3', '3.85'],
          ['10', '0.514', 'Two large, eight small', '1.34']
        ] },
        { kind: 'p', text: 'The silhouette score peaks at two clusters, with 0.775. But look at what those two clusters are: 107 places in one and 7 in the other. The score is rewarding a split that says "nearly everything, plus a handful far away", which is true and tells a planner almost nothing. A result with two sizeable groups, of 61 and 35 places, appears only at six clusters, and the score drops to 0.507 when it does, because those two groups sit close together. Meanwhile the squared distance falls every single time a cluster is added, from 21.19 to 1.34, so it cannot choose a number at all.' },
        { kind: 'p', text: 'One more check keeps the scores honest. The same number of points scattered at random across the same rectangle, with no structure whatever, scored between 0.38 and 0.43. So 0.5 is not far above meaningless, and a high score mainly signals that a few points are a long way from the rest. The right number of clusters depends on what the clusters are for, and no single score knows that.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Put dots on a map and draw loops round the groups; compare your loops with a friend\'s.' },
          { h3: 'Ages 11 to 15', p: 'Run k-means on Moseley\'s shops in Python for two, three and six clusters and colour the map.' },
          { h3: 'Ages 15 and up', p: 'Compute silhouette scores, compare with random points and argue for a number of clusters.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap places, our clustering', p: 'Shop and venue positions are from OpenStreetMap and its contributors under the Open Database Licence; the ward boundary is from the ONS Open Geography Portal. The clustering and scores are our own work. No business is named, and mapped places are whatever volunteers have recorded.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Scores and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A score measures what it measures, which may not be what you wanted.',
      body: [
        { kind: 'table', caption: 'Moseley\'s clusters on the left, the wider lesson on the right', head: ['What happened', 'What to take from it'], rows: [
          ['The top score was a 107 and 7 split', 'The highest number is not always the useful answer'],
          ['The 61 and 35 split scored only 0.507', 'Useful distinctions can score poorly'],
          ['Squared distance fell at every step', 'Some measures cannot choose for you'],
          ['Random points scored about 0.4', 'Compare every score with a no-structure baseline'],
          ['The purpose decided the right number', 'State the goal before running the method']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to cluster data and "pick the optimal number" and it will commonly run the silhouette score, take the peak and report it as settled. In vibe coding, the learner supplies the goal and an AI supplies the code; our Moseley learners also look at the size of every cluster and at a random baseline before they accept the peak. AI agents that segment, group or route things automatically rely on such scores constantly, and someone has to ask what the score rewards. Agent projects come once a learner is writing Python independently, usually in Years 12 and 13 or as an adult, and Copilot Studio agents are taught only one-to-one. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the agents course for UK students</a>, and for the thinking, <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Open data from OpenStreetMap, the ONS, Nomis and postcodes.io made this page possible. None of them is connected with Modern Age Coders, and the analysis, mistakes included, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From loops on a map to judging clusters',
    intro: 'School year is where we start guessing; the free lesson is where we find out.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Grouping, comparing answers and asking what a score means.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small games and apps made with an AI, checked by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Clustering, evaluation and baselines beside GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'AI evaluation and agents', p: 'Unsupervised learning, honest metrics and AI agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and clustering',
    h2: 'What is the silhouette score, and can it tell you how many clusters to use?',
    intro: 'The silhouette score measures how much closer each point is to its own cluster than to the nearest other cluster, averaged from minus one to one; it can guide the choice of cluster count, but its peak often reflects a few distant points, so it cannot decide alone.',
    p1: 'For 114 mapped shops and eating places in Moseley ward, the silhouette score peaked at 0.775 for two clusters of 107 and 7, while the more informative six-cluster result scored 0.507 and random points scored about 0.4.',
    p2: 'Learners who have seen that ask of any AI-chosen "optimal" setting: optimal for which score, and what does the winning answer actually look like?',
    closer: 'Looking inside the winner, not just at its score, is what keeps Moseley teenagers in charge of AI analysis, and they learn it by building the analysis themselves.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Moseley lessons, live and online',
    intro: 'The essentials are a computer, a camera and internet that holds up on a video call.',
    cells: [
      { h3: 'Made by the learner', p: 'Pupils type every line and prompt; the tutor watches over screen share and keeps asking why that choice.' },
      { h3: 'Level from the first session', p: 'The free lesson shows where to begin, with any exam board noted.' },
      { h3: 'Free trial lesson', p: 'It costs nothing and finishes with a suggested course.' },
      { h3: 'Classes matched by stage', p: 'Five to ten learners, drawn from the whole UK, at one level.' },
      { h3: 'Twice weekly', p: 'Holidays are left free.' },
      { h3: 'One regular time', p: 'Tutors shift for UK clock changes; you do not.' }
    ],
    spec: { title: 'Why online', p: 'Finding five learners at one level who share a free evening is hard within a single suburb and easy across a country.' }
  },

  fees: {
    h2: 'Moseley fees',
    intro: 'Moseley learners are charged our international rate, which applies outside India.',
    first: 'A free lesson in full, then a recommendation.',
    group: 'About eight live group lessons monthly.',
    private: 'About eight live private lessons monthly.',
    closer: 'We set fees in US dollars and do not list sterling. Nothing is charged until the trial has decided the course and the weekly slot; the pricing page covers holidays, missed lessons and switching between group and private.'
  },

  reviewsH2: 'South Birmingham families and learners nationwide, on Google',

  book: {
    h2: 'Book a free Moseley lesson',
    intro: 'Send us an age or year group and a hobby. For the trial we could draw clusters on a paper map, guide an AI through a Scratch game, write a little Python, or colour real shops by group.',
    success: 'Thank you. Your Moseley request has reached us.'
  },

  faq: {
    h2: 'Moseley questions',
    intro: 'Clustering scores, the shops project, Python, vibe coding and practical matters.',
    items: [
      { q: 'How many people live in Moseley, Birmingham?', a: 'Moseley ward had 21,839 usual residents at the 2021 census.' },
      { q: 'Are coding and AI classes available online in Moseley?', a: 'Yes, by live video for ages 6 to 67 in Moseley, Wake Green, Billesley and the rest of Birmingham.' },
      { q: 'What is k-means clustering?', a: 'A method that splits data into a chosen number of groups by repeatedly assigning each point to the nearest centre and moving each centre to the middle of its points.' },
      { q: 'What is the elbow method?', a: 'Plotting the within-cluster squared distance against the number of clusters and looking for a bend. In our Moseley data the curve fell smoothly from 21.19 to 1.34, with no clear bend to choose.' },
      { q: 'What does the Moseley project involve?', a: 'Clustering 114 mapped shops and eating places with k-means for two to ten clusters, scoring each with the silhouette score and comparing with random points.' },
      { q: 'Is vibe coding taught?', a: 'Yes, in every course: learners explain what they want, an AI writes it, and learners test and fix it.' },
      { q: 'When do learners start on AI agents?', a: 'Once they write Python independently, usually Years 12 and 13 or as adults; Copilot Studio agents are one-to-one only.' },
      { q: 'Do you teach GCSE and A level content?', a: 'Yes, in computer science and maths, for understanding; no grade is promised.' },
      { q: 'What are the fees?', a: 'Free for the first lesson, then USD 100 a month in a class or USD 150 a month privately.' },
      { q: 'Do lessons pause for holidays?', a: 'Yes; send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Birmingham',
    h2: 'More Birmingham pages',
    html: 'Other Birmingham districts, each with its own project: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-kings-heath-birmingham">Kings Heath</a> (an agent with a tiny memory), <a class="cg-inline-link" href="/ai-and-programming-classes-in-harborne-birmingham">Harborne</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-edgbaston-birmingham">Edgbaston</a> and <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a> as a whole. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Moseley and Birmingham',
  footerPlaces: [
    { href: '/coding-classes-in-birmingham', label: 'Birmingham' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-msy .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-msy .cg-hero h1 { font-weight: 760; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-msy .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-msy .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-msy .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-msy .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-msy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-msy .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-msy .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-msy .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Birmingham (E08000025). Census 2021 TS001, Moseley ward 21,839 (Nomis). ONS Wards (December 2022) boundary E05011154, 5.87 sq km by our calculation. postcodes.io (Birmingham): Moseley, Wake Green, Moor Green, Billesley (B13); Balsall Heath (B12).',
    localProject: 'OSM shops + cafe/restaurant/fast_food/pub/bar inside Moseley ward: 114 places. k-means (20 starts) k 2-10: silhouette 0.775 (107/7), 0.757, 0.720, 0.749, 0.507 (61/35/...), 0.492, 0.501, 0.514, 0.514; inertia 21.19 to 1.34 sq km. Uniform random points same n: 0.38 to 0.43. Lesson family: silhouette score, choosing k, cluster validity.',
    requiredMentions: [
      '21,839',
      'Wake Green',
      'Moor Green',
      'Billesley',
      'Balsall Heath',
      'silhouette score',
      '0.775',
      'elbow method',
      '5.87 square kilometres'
    ],
    sources: [
      { claim: 'OpenStreetMap shops and venues in Moseley, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 by ward via Nomis; ONS Wards (December 2022) boundaries, Open Geography Portal.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas in Birmingham (B13, B12).', url: 'https://api.postcodes.io/places?q=Wake%20Green' }
    ],
    rejectedClaims: [
      'Moseley village, park or music-scene claims: not read from a source; not claimed.',
      'Where the clusters are or which streets they follow: not named; only sizes and scores are reported.',
      'That 114 is every shop in Moseley: it is what is mapped and tagged on OpenStreetMap.',
      'An "optimal" number of clusters: deliberately not declared.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
