'use strict';
// Shawlands, Glasgow (cg- district page, UK cluster Phase 9, row 469). Keyword slug per the owner's 2026-09-30 ruling, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: is 3 out of 3 really better than 55 out of 56?
// (ranking proportions with very different sample sizes: the Wilson score interval and its lower bound).
// Data (read 30 September 2026): OpenStreetMap API 0.6 map calls over bbox -4.300,55.820,-4.265,55.842 (4 tiles, ODbL).
// Every building way with its centre in the box was assigned to the nearest named street (residential to primary) within
// 40 m: 3,789 buildings on 235 streets. "Described" = the building tag says what kind of building it is (anything other
// than building=yes): 2,563 of 3,789 (67.6%).
// Our run (scratchpad shw/wil.py): 89 streets have every assigned building described (100%); 27 of those have three
// buildings or fewer; 64 streets have fewer than five buildings; median street 10 buildings. Wilson 95% lower bound: 1 of 1
// 20.7%; 3 of 3 43.8%; 10 of 10 72.2%; 30 of 30 88.6%; 60 of 60 94.0%. Nithsdale Road: 55 of 56 described (98.2%), 90th by
// raw share (behind all 89 perfect scores), 8th by Wilson lower bound (90.6%). Invergordon Avenue 60 of 60 is first by the
// Wilson bound (94.0%).
// Lesson family: Wilson score interval, ranking small-sample proportions. Screened: "Wilson score" 0 hits in content/;
// rm.js and famq.js clean; claimed in claims.txt. Confidence intervals by bootstrap belong to Gosport; this is the
// closed-form interval for a proportion used for ranking.
// Place facts: no NRS figure exists for Shawlands alone, so none is given; Glasgow City about 620,700 (Scotland's Census
// 2022 rounded, registered by the Glasgow page). postcodes.io (Glasgow City, G41/G42/G43) suburban areas: Shawlands,
// Strathbungo, Crossmyloof, Pollokshields, Langside, Battlefield, Mount Florida, Newlands.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'SHAWLANDS', label: 'Shawlands', blurb: 'Coding and AI classes for Shawlands in Glasgow, with a project on ranking fairly when some scores rest on three examples and others on sixty.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-shawlands-glasgow',
  code: 'shw',
  accent: '#8A4A2A',
  accentRationale: 'Shawlands: a burnt sienna (6.79:1 contrast), chosen by hand to differ in hue from neighbouring Phase 9 pages',
  pageType: 'city',
  place: {
    name: 'Shawlands',
    eyebrow: 'Shawlands, Glasgow, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Glasgow City' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-glasgow', name: 'Glasgow' }],
  nav: [
    { label: 'Glasgow', href: '/best-coding-class-in-glasgow' },
    { label: 'West End', href: '/ai-and-programming-classes-in-west-end-glasgow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Shawlands, Glasgow',
  title: 'Coding and AI Classes in Shawlands, Glasgow | Python, 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Shawlands, Strathbungo, Langside and Pollokshields learners aged 6 to 67, live with a tutor. First lesson free.',
  ogDescription: 'Coding and AI classes for Shawlands, Glasgow, with a statistics project on ranking streets fairly when sample sizes differ, using the Wilson score.',
  twitterDescription: 'Shawlands, Glasgow: coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'statistics-probability-maths-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Shawlands, Glasgow',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Shawlands and across Glasgow, taught live with careful reasoning first.'
  },

  h1: 'Coding and AI classes in Shawlands, Glasgow',
  capsuleQ: 'Where can Shawlands learners find the best coding and AI classes?',
  capsule: 'Shawlands is a district of Glasgow. We found no official population for exactly that area, so we give none; Glasgow City as a whole had about 620,700 residents in Scotland\'s 2022 census. Strathbungo, Crossmyloof, Langside, Pollokshields, Battlefield and Mount Florida are among the suburbs recorded in the G41 and G42 postcode districts. Coding, AI, Python, vibe coding and maths are taught on live video by tutors in India to learners aged six to 67, one-to-one or in groups of five to ten at a shared level. Reasoning comes first, so learners can tell a solid number from a lucky one. The first session is free and ends with our course suggestion. The Shawlands project ranks 235 streets by how fully their buildings are described on OpenStreetMap, and shows why a perfect score from three buildings should not outrank 55 out of 56. After the trial, a class place is USD 100 a month and private lessons USD 150 a month.',
  lead: 'Rankings are everywhere: five-star products, top-rated answers, leaderboards of AI models. Most share one flaw. Sort by the raw percentage and a thing with three perfect reviews beats a thing with 55 good reviews out of 56, although we know far more about the second. Statisticians fixed this nearly a century ago. The Wilson score interval, published by Edwin Wilson in 1927, gives a range the true rate probably lies in, and ranking by the bottom of that range rewards evidence as well as score. This project tries it on a real, uneven dataset: for every street around Shawlands, the share of its buildings that OpenStreetMap volunteers have described by type.',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Shawlands?',

  picks: {
    eyebrow: 'Shawlands course picks',
    h2: 'Shawlands courses in reasoning, Python and AI',
    intro: 'Age decides the starting course. On each one the opening live lesson costs nothing and no card is requested.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: fair comparisons, small samples and why one lucky go proves little.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games dreamt up by the learner, built with an AI and tested until they work.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including a fair leaderboard for Shawlands streets.' },
      { course: 'statistics-probability-maths-course', band: 'Ages 14 and up', note: 'Proportions, intervals and ranking under uncertainty, from the Wilson score upward.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Shawlands and its neighbours',
      h2: 'Shawlands, Strathbungo, Langside and Pollokshields',
      intro: 'Recorded suburbs in the nearby postcode districts, and why there is no population figure.',
      body: [
        { kind: 'table', caption: 'Suburban areas recorded by postcodes.io around Shawlands', head: ['Postcode district', 'Recorded suburban areas'], rows: [
          ['G41', 'Shawlands, Strathbungo, Crossmyloof, Pollokshields, Langside'],
          ['G42', 'Battlefield, Mount Florida'],
          ['G43', 'Newlands']
        ] },
        { kind: 'p', text: 'We found no National Records of Scotland figure for exactly Shawlands, and adding up smaller areas would be our invention, so the page stays with the city total. Glasgow schools teach the Curriculum for Excellence; our lessons are organised by P and S year, with SQA Maths and Computing Science support from National 5 to Advanced Higher. Send the holiday dates and those weeks are kept free.' },
        { kind: 'callout', h3: 'Glasgow pages and exam help', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a>, the <a class="cg-inline-link" href="/ai-and-programming-classes-in-west-end-glasgow">West End</a> and <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths tuition</a>. Our reasons for putting thinking first are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Shawlands project',
      h2: 'A fair leaderboard: ranking 235 streets with the Wilson score interval',
      intro: 'One proportion per street, wildly different sample sizes, and two ways to sort.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data around Shawlands and assigns each building to the nearest named street within 40 metres: 3,789 buildings on 235 streets. A building counts as described if its tag says what it is, a house, flats, a shop, a school, and not simply "yes". Overall 2,563 buildings, 67.6%, are described. Streets differ hugely in size: the median has 10 buildings, and 64 have fewer than five.' },
        { kind: 'table', caption: 'What the Wilson 95% interval says about a perfect score, by sample size', head: ['Buildings described', 'Raw share', 'Wilson lower bound'], rows: [
          ['1 of 1', '100%', '20.7%'],
          ['3 of 3', '100%', '43.8%'],
          ['10 of 10', '100%', '72.2%'],
          ['30 of 30', '100%', '88.6%'],
          ['60 of 60', '100%', '94.0%'],
          ['55 of 56', '98.2%', '90.6%']
        ] },
        { kind: 'p', text: 'Sorted by raw share, 89 streets tie for first place on 100%, and 27 of them have three buildings or fewer. Nithsdale Road, with 55 of its 56 buildings described, comes 90th, behind every one of them. Sorted by the Wilson lower bound, the streets with most evidence rise: Invergordon Avenue, 60 of 60, leads on 94.0%, and Nithsdale Road climbs to 8th on 90.6%, because 55 out of 56 tells us more than 3 out of 3, whose lower bound is only 43.8%. The ranking measures how completely volunteers have tagged the map, nothing about the streets themselves. What changes is how much a small sample is allowed to claim.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Score three penalties out of three, then argue whether you are a better shooter than someone with 18 out of 20.' },
          { h3: 'S1 to S3', p: 'Count described buildings per street in Python and sort the raw shares to see the ties.' },
          { h3: 'S4 and up', p: 'Code the Wilson interval, rank by its lower bound and explain every street that moved.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap data, our ranking', p: 'Buildings, tags and street names are from OpenStreetMap and its contributors under the Open Database Licence. The street assignment, intervals and rankings are our own, and describe map tagging only.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Rankings and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Half of every score is the number of cases behind it.',
      body: [
        { kind: 'table', caption: 'From the Shawlands leaderboard to working with AI', head: ['In the street project', 'When AI ranks or is ranked'], rows: [
          ['89 streets tied on 100%', 'Raw percentages hide how little data there is'],
          ['3 of 3 had a lower bound of 43.8%', 'Small samples support only weak claims'],
          ['55 of 56 rose from 90th to 8th', 'Evidence should count in a ranking'],
          ['The interval was a formula, not a guess', 'Uncertainty can be computed and shown'],
          ['The ranking was about tags, not streets', 'Know what a score actually measures']
        ] },
        { kind: 'p', text: 'AI models are compared on benchmark leaderboards, and an AI assistant asked for "the top-rated" option will often sort by average score alone. A model that passed 5 of 5 hard questions has not been shown to beat one that passed 480 of 500. When our Shawlands learners vibe code, describing a program for an AI to write, they ask for sample sizes beside every percentage and sort by a lower bound. Agents that choose products, sources or tools for you should be told to do the same. We introduce agent building once a learner writes Python fluently, usually in S5 or S6 or later, and Copilot Studio agents are covered in one-to-one lessons only. More on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'This page owes its data to OpenStreetMap, National Records of Scotland and postcodes.io, none of which is connected with Modern Age Coders; the ranking and any mistakes in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From penalty shoot-outs to confidence intervals',
    intro: 'We begin from the school stage and let the trial lesson correct it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Fair tests, luck and how much a few tries can tell you.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and small apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and statistics', p: 'Proportions, intervals and ranking next to SQA Maths and Computing Science.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Data, AI and agents', p: 'Evaluation, uncertainty and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and ranking',
    h2: 'What is the Wilson score interval, and why rank by its lower bound?',
    intro: 'The Wilson score interval is a range that probably contains the true success rate behind an observed proportion, and ranking by its lower end stops tiny samples with perfect scores from beating large samples with excellent ones.',
    p1: 'Across 235 streets around Shawlands, 89 tied on a raw 100% of buildings described, 27 of them with three buildings or fewer, while a street on 55 of 56 rose from 90th place to 8th once streets were ranked by the Wilson lower bound.',
    p2: 'Learners who have built that leaderboard ask of any AI ranking: how many examples is each score based on?',
    closer: 'A Shawlands teenager who asks for the sample size behind a score is hard to fool with a leaderboard, and that habit is built by coding the numbers yourself.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Strathbungo to Langside, online',
    intro: 'A laptop or desktop with a camera, and broadband good enough for video, is all it takes.',
    cells: [
      { h3: 'Students write the code', p: 'Typing, prompting and running are the learner\'s job; the tutor follows by screen share and asks how sure they are.' },
      { h3: 'Level found in the trial', p: 'The free lesson shows us where to start, and SQA exams are noted.' },
      { h3: 'First session free', p: 'The opening lesson costs nothing and ends with a suggested course.' },
      { h3: 'Classes of equals', p: 'Five to ten learners at one stage, from anywhere in the UK.' },
      { h3: 'Twice a week', p: 'None in the school holidays.' },
      { h3: 'Slot that stays', p: 'UK clock changes are our tutors\' concern; your time does not move.' }
    ],
    spec: { title: 'Why online', p: 'Finding five learners of one level, free on one evening, within a few streets is unlikely. Online classes remove the problem.' }
  },

  fees: {
    h2: 'Shawlands fees',
    intro: 'Shawlands learners are charged our international rates, which apply in every country but India.',
    first: 'One complete lesson free, then our advice.',
    group: 'Roughly eight live group lessons a month.',
    private: 'Roughly eight live one-to-one lessons a month.',
    closer: 'We price and invoice in US dollars; no sterling figure exists. The first charge comes only when the trial has pinned down which course and which evening; our pricing page deals with school breaks, skipped sessions and moving between formats.'
  },

  reviewsH2: 'What Glasgow parents and learners across the UK say on Google',

  book: {
    h2: 'Book a free Shawlands lesson',
    intro: 'Tell us the learner\'s age or stage and a hobby. A trial could be a penalty shoot-out puzzle, a Scratch game planned with an AI, first Python lines, or a leaderboard built from real data.',
    success: 'Thank you. Your Shawlands request is with us.'
  },

  faq: {
    h2: 'Shawlands questions',
    intro: 'Fair rankings, the street project, Python, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Shawlands?', a: 'We found no official figure for exactly Shawlands and give none. Glasgow City had about 620,700 people in the 2022 census.' },
      { q: 'Are coding and AI classes available online in Shawlands?', a: 'Every lesson is a live video call, so Strathbungo, Langside and the rest of Glasgow are all in reach for ages 6 to 67.' },
      { q: 'What is a confidence interval for a proportion?', a: 'A range of values the true rate plausibly lies in, given the sample. For 3 successes out of 3, the Wilson 95% interval runs from 43.8% to 100%.' },
      { q: 'Why not just sort by percentage?', a: 'Because tiny samples hit 100% by luck. Around Shawlands, 89 streets tied on a perfect raw score, 27 of them with three buildings or fewer.' },
      { q: 'What does the Shawlands project involve?', a: 'Working out, for 235 streets, the share of buildings described on OpenStreetMap, then ranking by raw share and by the Wilson lower bound and comparing the two lists.' },
      { q: 'Is vibe coding on the timetable?', a: 'We do, from the youngest class up. The learner sets the brief, an AI writes a first version, and the learner checks and repairs it.' },
      { q: 'At what stage do AI agents appear?', a: 'After they write Python fluently, usually S5 or S6 or later; Copilot Studio agents are private lessons only.' },
      { q: 'Is SQA exam support available?', a: 'Yes, for Maths and Computing Science from National 5 to Advanced Higher, taught for understanding and without grade promises.' },
      { q: 'How much do lessons cost?', a: 'Lesson one is free. Ongoing, USD 100 a month in a class or USD 150 a month for private tuition.' },
      { q: 'Are lessons paused for holidays?', a: 'Yes, for the school holidays once we have your dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Glasgow and Clyde pages',
    html: 'Other pages, each with its own experiment: <a class="cg-inline-link" href="/ai-and-programming-classes-in-west-end-glasgow">the West End</a> (a threshold chosen by the data), <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-paisley">Paisley</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-east-kilbride">East Kilbride</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> and <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> cover the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Shawlands and Glasgow',
  footerPlaces: [
    { href: '/best-coding-class-in-glasgow', label: 'Glasgow' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-shw .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-shw .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.05; }
.cg-root.cg-shw .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-shw .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-shw .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.02em; }
.cg-root.cg-shw .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-shw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-shw .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-shw .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-shw .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Glasgow City (S12000049). Scotland: Curriculum for Excellence, SQA National 5 to Advanced Higher. No NRS figure for Shawlands; Glasgow City about 620,700 (Scotland\'s Census 2022, rounded). postcodes.io (Glasgow City, G41/G42/G43): Shawlands, Strathbungo, Crossmyloof, Pollokshields, Langside, Battlefield, Mount Florida, Newlands (suburban areas).',
    localProject: 'OSM API 0.6 bbox -4.300,55.820,-4.265,55.842: 3,789 buildings assigned to 235 named streets within 40 m; 2,563 (67.6%) described (tag other than yes). 89 streets at 100% raw, 27 with n <= 3; 64 streets n < 5; median n 10. Wilson 95% lower bounds: 1/1 20.7, 3/3 43.8, 10/10 72.2, 30/30 88.6, 60/60 94.0, 55/56 90.6. Nithsdale Road 55/56: raw rank 90, Wilson rank 8; Invergordon Avenue 60/60 first. Lesson family: Wilson score interval ranking.',
    requiredMentions: [
      '3,789',
      'Strathbungo',
      'Crossmyloof',
      'Langside',
      'Pollokshields',
      'Mount Florida',
      'Nithsdale Road',
      'Wilson score',
      '55 of 56'
    ],
    sources: [
      { claim: 'OpenStreetMap buildings and street names around Shawlands, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io places: suburban areas in Glasgow City (G41, G42, G43).', url: 'https://api.postcodes.io/places?q=Shawlands' },
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 rounded population estimates (Glasgow City).', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' }
    ],
    rejectedClaims: [
      'A population for Shawlands: none found for exactly this area; not stated.',
      'Any judgement of the streets themselves: the ranking measures OpenStreetMap tagging only.',
      'Park, arcade or tenement history: not read from a source; not claimed.',
      'Real AI benchmark results: the 5 of 5 and 480 of 500 example is illustrative arithmetic, labelled as such by context.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
