'use strict';
// Ormeau, Belfast (cg- district page, UK cluster Phase 9, row 476). Keyword slug per the owner's rotation with a city suffix,
// and the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when an AI groups things, should the
// centre of a group be an average that does not exist, or a real member? (k-medoids / PAM against k-means: exemplars,
// stability, and freedom to use any distance, here walking distance).
// Data (read 30 September 2026): OpenStreetMap API 0.6 map calls over bbox -5.937,54.570,-5.900,54.597 in 4 tiles (ODbL):
// 341 place nodes tagged as a shop (not "vacant" or "yes") or as a cafe, restaurant, fast-food outlet, pub, bar or
// ice-cream shop; walking network from all walkable ways.
// Our run (scratchpad orm/kmed2.py, kmed3.py). Five groups. k-means (20 starts): its five centres lie 60.4, 7.2, 33.2, 97.3
// and 6.5 m from the nearest real place; mean straight distance from a place to its centre 303.7 m. k-medoids (PAM-style
// alternate, 20 starts): every centre is one of the 341 places; mean distance 291.8 m. Stability over 60 bootstrap
// resamples, matched centres: median shift k-means 48.0 m, k-medoids 36.0 m; ninetieth percentile 156.6 m against 104.5 m.
// Walking distances (Dijkstra on the OSM network): median straight distance between two places 1,305 m, median walk
// 1,598 m, median ratio 1.234. Six groups, medoids chosen by straight-line distance against medoids chosen by walking
// distance: mean walk to own medoid 332 m against 324 m; places more than 1 km on foot from their medoid 2.1% against
// 0.9%; the two groupings agree on 96.4% of pairs of places. (Four groups: 458 m against 451 m, 95.8%.)
// Lesson family: k-medoids (partitioning around medoids), exemplar clustering, clustering with a non-Euclidean distance.
// Screened: "k-medoids", "medoid" 0 hits anywhere in content/; k-means pages exist and DBSCAN (Runcorn), hierarchical
// (Cannock) and Roath's alpha shapes use similar data for different methods. Claimed in claims.txt as "orm".
// Place facts: NISRA Census 2021 MS-A01: Ormeau ward 6,532; Rosetta ward 5,793; Botanic DEA 49,727. OpenStreetMap place
// labels in the rectangle: Lower Ormeau, Ballynafeigh, Ravenhill, Botanic, Stranmillis.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ORMEAU', label: 'Ormeau, Belfast', blurb: 'AI and programming classes for Ormeau in Belfast, with a clustering project where every group is represented by a real place instead of an average.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-ormeau-belfast',
  code: 'orm',
  accent: '#8A4A3A',
  accentRationale: 'Ormeau: a brick terracotta (6.73:1 contrast), picked by hand to differ in hue from recent pages',
  pageType: 'city',
  place: {
    name: 'Ormeau',
    eyebrow: 'Ormeau, Belfast, Northern Ireland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Belfast' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-belfast', name: 'Belfast' }],
  nav: [
    { label: 'Belfast', href: '/best-coding-class-in-belfast' },
    { label: 'Malone', href: '/online-coding-and-python-classes-in-malone-belfast' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ormeau, Belfast',
  title: 'AI and Programming Classes in Ormeau, Belfast | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Ormeau, Ballynafeigh, Ravenhill and Rosetta learners in Belfast, aged 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Ormeau, Belfast, with a k-medoids clustering project in which each group of shops is represented by a real place.',
  twitterDescription: 'Ormeau, Belfast: AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Ormeau, Belfast',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Ormeau and across Belfast, taught live.'
  },

  h1: 'AI and programming classes in Ormeau, Belfast',
  capsuleQ: 'Which are the best AI and programming classes in Ormeau, Belfast?',
  capsule: 'The Belfast ward named Ormeau had 6,532 usual residents at the 2021 census, and the neighbouring-named Rosetta ward 5,793, according to NISRA; OpenStreetMap labels Lower Ormeau, Ballynafeigh and Ravenhill as suburbs in the same part of the city. Tutors working from India teach AI, programming, Python, vibe coding and maths over live video to anyone from six to 67, privately or in a class of five to ten pitched at one level. We teach how a method works before how to call it, so learners can tell what an AI grouping really means. Lesson one is free and ends with our course advice. The Ormeau project clusters 341 shops and cafes two ways and asks whether the centre of a group should be an average point that may sit in the middle of a road, or a real place you could walk to. After the trial, a class is USD 100 a month and private tuition USD 150 a month.',
  lead: 'Clustering is how AI sorts things into groups without being told the answer, and the usual method, k-means, describes each group by its average. Averages are convenient, but the average of forty shop locations is not a shop; it may be a back garden. A close relative called k-medoids makes one change: the centre of each group must be one of its actual members, the one with the smallest total distance to the rest. That member is called the medoid, or exemplar. The change brings two bonuses: each group has a real representative you can name, and the method works with any measure of distance, including how far it is on foot. Ormeau\'s shops and cafes make a good test.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Ormeau, Belfast?',

  picks: {
    eyebrow: 'Ormeau course picks',
    h2: 'Ormeau courses in reasoning, Python and AI',
    intro: 'Choose the row that fits the learner\'s age. A free live lesson opens every course, and nothing is paid to book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: sorting into groups and choosing one member to stand for each.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games designed by the learner, made with an AI and tested carefully.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, with k-means and k-medoids on real Ormeau map data.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data science, clustering, machine learning and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Ormeau and Belfast',
      h2: 'Ormeau, Ballynafeigh, Ravenhill and Rosetta',
      intro: 'NISRA census figures for areas that carry these names, and how the map labels the district.',
      body: [
        { kind: 'table', caption: 'Census 2021 usual residents, NISRA table MS-A01', head: ['Area', 'Residents (2021)'], rows: [
          ['Ormeau ward', '6,532'],
          ['Rosetta ward', '5,793'],
          ['Botanic district electoral area', '49,727']
        ] },
        { kind: 'p', text: 'These are three different official areas and their figures are not added or compared as parts of one another; "Ormeau" in everyday use does not match the ward line. Within our study rectangle OpenStreetMap labels Lower Ormeau, Ballynafeigh, Ravenhill, Botanic and Stranmillis. Schools teach the Northern Ireland Curriculum from P1 to Year 14. Give us the school holiday dates and lessons will be arranged round them.' },
        { kind: 'callout', h3: 'Belfast, Malone and CCEA support', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-malone-belfast">Malone</a> and <a class="cg-inline-link" href="/ccea-a-level-software-systems-development-help">CCEA A level Software Systems Development help</a>. Our reasons for teaching reasoning first are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Ormeau project',
      h2: 'k-medoids against k-means: a real place at the centre of every group',
      intro: 'The same 341 places, grouped two ways, then grouped again by walking distance.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data for a rectangle covering the Ormeau Road and the streets around it and keeps the shops, cafes, restaurants, takeaways, pubs and bars mapped as points: 341 of them. Both methods are asked for five groups. k-means moves its five centres to the average position of each group. k-medoids instead tries each member as the centre and keeps the one with the smallest total distance to the others. Each method is restarted 20 times and its tightest result kept.' },
        { kind: 'table', caption: 'Five groups of Ormeau\'s 341 shops and food places, our Python run on OpenStreetMap data', head: ['Measure', 'k-means', 'k-medoids'], rows: [
          ['Is each centre a real place?', 'No: 6.5 to 97.3 m from the nearest one', 'Yes, all five'],
          ['Average distance from a place to its centre', '303.7 m', '291.8 m'],
          ['Typical shift of a centre when the data is resampled', '48.0 m', '36.0 m'],
          ['Shift in the worst tenth of resamples', '156.6 m', '104.5 m']
        ] },
        { kind: 'p', text: 'None of the k-means centres lands on a real place; one is almost 100 m from the nearest shop. Every medoid is a place with a name and a door. The medoids also move less when the data is disturbed: redrawing the 341 places at random 60 times shifts a typical k-means centre by 48.0 m and a typical medoid by 36.0 m. And because k-medoids only needs a table of distances, the learner can swap in walking distance. Here the median walk between two places is 1,598 m against 1,305 m in a straight line. With six groups, choosing medoids by walking distance cuts the share of places more than a kilometre on foot from their centre from 2.1% to 0.9%, though the two groupings agree on 96.4% of pairs, so in this compact district the straight line was already a fair guide.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Sort picture cards into groups, then pick the one card that sums up each group and defend the choice.' },
          { h3: 'Years 8 to 10', p: 'Run k-means on Ormeau\'s shops in Python and check what is actually at each centre.' },
          { h3: 'Years 11 to 14', p: 'Code k-medoids, test its stability by resampling, and switch from straight-line to walking distance.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap places, our clusters', p: 'Shops, cafes and paths are from OpenStreetMap and its contributors under the Open Database Licence. The groupings, distances and stability tests are our own work. No business is named, and a group on this page is a statistical convenience, not a neighbourhood boundary.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Clustering and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A group is easier to trust when you can point at the thing that stands for it.',
      body: [
        { kind: 'table', caption: 'From the Ormeau clusters to working with AI', head: ['In the k-medoids project', 'When AI groups data for you'], rows: [
          ['k-means centres were not real places', 'An average may describe nothing that exists'],
          ['Medoids were actual shops or cafes', 'Ask for a real example of each group'],
          ['Medoids moved less under resampling', 'Check whether the answer survives small changes'],
          ['Walking distance changed a few groups', 'The distance measure is a modelling choice'],
          ['96.4% of pairs stayed together', 'Report how much a choice mattered, not only that it did']
        ] },
        { kind: 'p', text: 'AI tools cluster customers, documents and images all the time, and they usually describe each cluster with an average nobody can inspect. Asking for an exemplar, a real member that typifies the group, makes the result something a person can check. In vibe coding the learner tells an AI what to build and the AI writes it; our Ormeau learners follow up by asking which distance it used and what sits at each centre. Agents that sort and summarise data for you should be asked the same. We leave agent projects until Python is no longer the hard part, typically for sixth-formers and adults, and Copilot Studio work is always taught privately. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents: the course for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We have no connection with OpenStreetMap or NISRA beyond using their open data; the clustering work, including any errors, is our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From sorting cards to clustering algorithms',
    intro: 'The school year, P1 to Year 14, suggests a starting point and the free lesson confirms it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Grouping, typical examples and explaining a choice.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to Year 9', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner, built with an AI, then tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 10 to 14', h3: 'Python and machine learning', p: 'Clustering, distance measures and stability alongside CCEA GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Data science and agents', p: 'Unsupervised learning, evaluation and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and clustering',
    h2: 'What is k-medoids clustering, and how is it different from k-means?',
    intro: 'k-medoids groups data around real members, called medoids, chosen to have the smallest total distance to the rest of their group, whereas k-means groups around averages that need not be real points; k-medoids also works with any distance measure.',
    p1: 'On 341 shops and cafes around the Ormeau Road, no k-means centre was a real place (one was 97.3 m from the nearest), every k-medoids centre was, and under resampling the medoids shifted a typical 36.0 m against 48.0 m.',
    p2: 'Learners who have compared the two ask of any AI grouping: what real example stands for each group, and which distance decided it?',
    closer: 'Being able to ask for the exemplar gives Ormeau teenagers a practical way to check AI groupings, and they learn it by coding both methods themselves.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Lessons for Ormeau, live on video',
    intro: 'Needed at home: a computer, a webcam and broadband that can manage a video call.',
    cells: [
      { h3: 'The learner writes it', p: 'Code and prompts are the student\'s own work, with the tutor on screen share asking what each output means.' },
      { h3: 'Trial sets the start', p: 'The free lesson shows us the level; CCEA courses are noted where they apply.' },
      { h3: 'First lesson without charge', p: 'Lesson one is free and finishes with a course recommendation.' },
      { h3: 'Small matched classes', p: 'Each class is five to ten learners at a shared level, from anywhere in the UK.' },
      { h3: 'Two a week', p: 'Term time only.' },
      { h3: 'Time that holds', p: 'Tutors shift with the UK clocks, so your slot never moves.' }
    ],
    spec: { title: 'Why online', p: 'A class needs five people at one level free at one time, which a single district rarely supplies. Online, the class is drawn from a whole country.' }
  },

  fees: {
    h2: 'Ormeau fees',
    intro: 'Ormeau learners are on our international rate, the same for every country apart from India.',
    first: 'A free full-length lesson and then our advice.',
    group: 'About eight live group lessons every month.',
    private: 'About eight live private lessons every month.',
    closer: 'We charge in US dollars and publish no sterling prices. The first bill comes only after the trial has fixed a course and a weekly time, and holidays, absences and format changes are covered on the pricing page.'
  },

  reviewsH2: 'On Google: Belfast parents and learners from around the UK',

  book: {
    h2: 'Book a free Ormeau lesson',
    intro: 'Let us know an age or Year group and one thing the learner enjoys. We might begin with a card-sorting puzzle, a Scratch game built with an AI, a short Python script, or grouping real places on a map.',
    success: 'Thank you. Your Ormeau request is with us.'
  },

  faq: {
    h2: 'Ormeau questions',
    intro: 'Clustering, medoids, the shop project, vibe coding and practical details.',
    items: [
      { q: 'How many people live in Ormeau, Belfast?', a: 'NISRA counted 6,532 usual residents in Ormeau ward at the 2021 census. The everyday area called Ormeau is not an official unit and has no figure of its own.' },
      { q: 'Are AI and programming classes available online in Ormeau?', a: 'They are. Each lesson is a live video call, so Ballynafeigh, Ravenhill and every other part of Belfast can join, from age 6 to 67.' },
      { q: 'What is a medoid?', a: 'The member of a group with the smallest total distance to all the other members. Unlike an average, it is always a real item from the data.' },
      { q: 'When should you use k-medoids instead of k-means?', a: 'When you need each group represented by a real example, when outliers would drag an average, or when your distance is not a straight line, such as walking distance or a similarity score.' },
      { q: 'What does the Ormeau project involve?', a: 'Clustering 341 mapped shops and cafes with k-means and k-medoids, testing how stable each is under resampling, and repeating k-medoids with walking distance.' },
      { q: 'Is vibe coding included?', a: 'Yes, for every age: learners describe the program, an AI writes a draft, and they test and repair it.' },
      { q: 'When do learners build AI agents?', a: 'When Python has stopped being the obstacle, which tends to be sixth form or later. Copilot Studio is taught privately.' },
      { q: 'Is there support for CCEA exam courses?', a: 'There is, for GCSE and A level Digital Technology, Software Systems Development and Maths, taught for understanding, with no grade promised.' },
      { q: 'How much do lessons cost?', a: 'The trial costs nothing. After it, a class place is USD 100 each month and a private tutor USD 150 each month.' },
      { q: 'Do lessons pause for school holidays?', a: 'Yes. Tell us the dates and we skip them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other Belfast and Northern Ireland pages',
    html: 'Every one runs a different experiment: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-malone-belfast">Malone</a> (evenly spaced random points in a park), <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a>, <a class="cg-inline-link" href="/best-coding-class-in-bangor-northern-ireland">Bangor</a> and <a class="cg-inline-link" href="/best-coding-class-in-lisburn">Lisburn</a>. Use the <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland page</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ormeau and Belfast',
  footerPlaces: [
    { href: '/best-coding-class-in-belfast', label: 'Belfast' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-orm .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-orm .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-orm .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-orm .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-orm .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-orm .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-orm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-orm .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-orm .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-orm .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Belfast (N09000003). Northern Ireland Curriculum, P1 to Year 14, CCEA GCSE and A level. NISRA Census 2021 MS-A01: Ormeau ward 6,532; Rosetta ward 5,793; Botanic DEA 49,727. OpenStreetMap place labels in the rectangle: Lower Ormeau, Ballynafeigh, Ravenhill, Botanic, Stranmillis.',
    localProject: 'OSM API 0.6 bbox -5.937,54.570,-5.900,54.597 (4 tiles): 341 shop and food place nodes. k = 5: k-means centres 60.4, 7.2, 33.2, 97.3, 6.5 m from nearest place, mean distance 303.7 m; k-medoids all real places, 291.8 m. Bootstrap (60): median centre shift 48.0 vs 36.0 m, p90 156.6 vs 104.5 m. Walking: median straight 1,305 m, walk 1,598 m (ratio 1.234); k = 6 straight vs walking medoids: mean walk 332 vs 324 m, over 1 km 2.1% vs 0.9%, pair agreement 96.4%. Lesson family: k-medoids, exemplars, non-Euclidean distance.',
    requiredMentions: [
      '6,532',
      '5,793',
      '49,727',
      'Ballynafeigh',
      'Ravenhill',
      'Lower Ormeau',
      'Rosetta',
      'k-medoids',
      'medoid',
      '303.7'
    ],
    sources: [
      { claim: 'OpenStreetMap shops, food places, paths and place labels around the Ormeau Road, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'NISRA Census 2021 main statistics table MS-A01, usual resident population by ward and district electoral area.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'CCEA qualifications referred to for Northern Ireland learners.', url: 'https://ccea.org.uk/' }
    ],
    rejectedClaims: [
      'A population for "Ormeau" as a neighbourhood: only NISRA ward and DEA figures are shown, not added or nested.',
      'Named businesses or judgements about any shopping street: none.',
      'Community background, religion or identity data: not used; place labels are given only as OpenStreetMap records them.',
      'Park, bridge or river history: not read from a source; not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
