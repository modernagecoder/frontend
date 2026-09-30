'use strict';
// Widnes (cg- town page, UK cluster Phase 10, towns band B, row 481). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: is the 80/20 rule actually true? (the Pareto
// principle tested as a claim: what share does the top fifth really hold, and why does the answer depend on the thing
// being counted and the unit it is counted in).
// Data (read 30 September 2026): Nomis Census 2021 at output area level for Halton (E06000006, 418 OAs): TS045 car
// availability (NM_2063_1), TS017 household size (NM_2037_1), TS044 accommodation type (NM_2062_1, category 4 "in a
// purpose-built block of flats or tenement"), and OA usual residents. ONS OA21 to BUA22 lookup: 193 OAs in the Widnes
// built-up area.
// Our run (scratchpad wdn/par.py): for each count, rank the 193 areas from largest to smallest and take the share held by
// the top 20% (39 areas). Residents 59,938 (our OA sum) 27.7%; households 25,801 26.7%; one-person households 8,086
// 33.9%; households with no car or van 6,013 40.8%; households in purpose-built flats 2,330 73.6% (36.8% of areas have
// none; top 5% hold 29.2%). 80% of the flats sit in the top 23.8% of areas; 80% of residents needs 74.6% of areas.
// Lesson family: Pareto principle as a testable claim (top-share table). Screened: "Pareto principle", "80/20" 0 hits.
// Wembley teaches the Pareto FRONT (multi-objective), a different idea; Bexley's Lorenz curve and Gini are not used here.
// Place facts: ONS 2021 BUAs (published): Widnes 59,935; Runcorn 61,645 (both registered by the Runcorn page, so not
// mentions here). postcodes.io suburban areas whose nearest OA centroid lies in the Widnes BUA (our check): Ditton, Hough
// Green, Farnworth, Appleton, Upton Rocks, Simm's Cross, Halton View, West Bank, Kingsway, Lunts Heath. Hale Bank is a
// village in its own BUA.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WIDNES', label: 'Widnes', blurb: 'Coding and AI classes for Widnes, with a Census project that puts the 80/20 rule to the test.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-widnes',
  code: 'wdn',
  accent: '#7A3B12',
  accentRationale: 'Widnes: a burnt umber (8.05:1 contrast), hand-picked and unused elsewhere',
  pageType: 'city',
  place: {
    name: 'Widnes',
    eyebrow: 'Widnes, Halton, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Cheshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Cheshire', href: '/coding-classes-in-cheshire' },
    { label: 'Runcorn', href: '/online-coding-and-python-classes-in-runcorn' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Widnes, England',
  title: 'Coding and AI Classes in Widnes | Python, Vibe Coding, 6 to 67',
  description: 'Live online coding, AI, Python and vibe coding classes for Widnes, Ditton, Hough Green, Farnworth and Upton Rocks, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Widnes, with a Census 2021 project that checks whether a fifth of the town\'s areas really hold four fifths of anything.',
  twitterDescription: 'Widnes coding, AI, Python and vibe coding classes on live video for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Widnes',
    description: 'Coding, AI, Python, vibe coding and maths taught live online to children, teenagers and adults in Widnes and the borough of Halton.'
  },

  h1: 'Coding and AI classes in Widnes',
  capsuleQ: 'Where can Widnes learners find the best coding and AI classes?',
  capsule: 'Widnes is one of the two large towns in the borough of Halton, and the ONS counted 59,935 residents in its built-up area at the 2021 census. Ditton, Hough Green, Farnworth, Appleton, Upton Rocks and Halton View are recorded suburbs inside it. Anyone aged six to 67 can learn coding, AI, Python, vibe coding and maths here through live video lessons with a tutor in India, taught privately or in a class of five to ten learners at one level. We teach the reasoning first, so that a learner can test a claim instead of repeating it. Lesson one costs nothing and closes with a course suggestion; after it, a group place is USD 100 a month and private tuition USD 150 a month. The Widnes project takes a famous rule of thumb, that a fifth of the causes give four fifths of the results, and checks it against five Census counts for the town\'s 193 small areas.',
  lead: 'People quote the 80/20 rule as if it were a law of nature: 20% of customers bring 80% of sales, 20% of bugs cause 80% of crashes. Its proper name is the Pareto principle, and it is a pattern seen in some data, not a promise about all data. Whether it holds depends on what you count and on the units you count it in. A learner who can write a dozen lines of Python can test it in an afternoon, and Widnes gives a neat example where one count obeys the rule quite closely and another, from the very same streets, comes nowhere close.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding or AI lesson for a learner in Widnes.',

  picks: {
    eyebrow: 'Widnes course picks',
    h2: 'Thinking, vibe coding and Python courses for Widnes',
    intro: 'Pick by age. Each course begins with a live lesson that is free, and booking it takes no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: sorting, ranking, sharing out and asking whether a rule is really true.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children describe a Scratch game to an AI and then test every part of what comes back.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first lines to sorting and summing real Census tables.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How generative AI works, where its rules of thumb come from and how to build agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Widnes and Halton',
      h2: 'Widnes, Ditton, Hough Green, Farnworth and Upton Rocks',
      intro: 'What the ONS counts as Widnes, and which named suburbs fall inside that boundary.',
      body: [
        { kind: 'table', caption: 'Halton\'s two largest ONS built-up areas, residents at the 2021 census', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Runcorn', '61,645'],
          ['Widnes', '59,935']
        ] },
        { kind: 'p', text: 'The two figures are separate ONS publications and we do not total them. On postcodes.io, Ditton, Hough Green, Farnworth, Appleton, Upton Rocks, Simm\'s Cross, Halton View, West Bank, Kingsway and Lunts Heath are all listed as suburban areas, and we checked that the closest Census output area to each belongs to the Widnes built-up area. Hale Bank is listed as a village and has a small built-up area of its own. Halton\'s schools follow England\'s national curriculum towards GCSE and A level, and we plan lessons around whichever holiday dates you send.' },
        { kind: 'callout', h3: 'Across the river and across the region', p: 'Runcorn has <a class="cg-inline-link" href="/online-coding-and-python-classes-in-runcorn">a page and a project of its own</a>, and there are wider lists for <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>. Our reason for putting thinking ahead of tools is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Widnes project',
      h2: 'The Pareto principle on trial: does a fifth of Widnes hold four fifths of anything?',
      intro: 'Five counts, 193 small areas, one sort and one sum each.',
      body: [
        { kind: 'p', text: 'The Census divides Widnes into 193 output areas, the smallest units it publishes. From the Nomis API the learner downloads five counts for each one: residents, households, one-person households, households with no car or van, and households living in purpose-built flats. For each count the program does the same three things. It sorts the areas from largest to smallest, takes the top 20%, which is 39 areas, and works out what share of the town\'s total those 39 hold. If the 80/20 rule were a law, every answer would be close to 80%.' },
        { kind: 'table', caption: 'Share of each Widnes total held by the top fifth of output areas, our Python run on Census 2021 data', head: ['What is counted', 'Total over 193 areas', 'Held by the top 20% of areas'], rows: [
          ['Households', '25,801', '26.7%'],
          ['Residents', '59,938', '27.7%'],
          ['One-person households', '8,086', '33.9%'],
          ['Households with no car or van', '6,013', '40.8%'],
          ['Households in purpose-built flats', '2,330', '73.6%']
        ] },
        { kind: 'p', text: 'Only the last row looks anything like 80/20. Purpose-built flats are built in blocks, so they pile up in a few places: 36.8% of the areas have none at all, the top 5% of areas alone hold 29.2% of them, and four fifths of all the flats sit in the top 23.8% of areas. Residents are the opposite case, and for a reason worth noticing. Output areas were drawn to contain roughly similar numbers of people, so the unit itself stops residents from concentrating; reaching four fifths of them takes 74.6% of the areas. (The 59,938 is our own total across the 193 areas and differs by three from the ONS built-up area figure, which is rounded.) The rule is a description of lumpy things, and the learner now has a test for lumpiness.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Share 20 sweets among ten cups in different ways and find what the two fullest cups hold each time.' },
          { h3: 'Ages 11 to 15', p: 'Sort a Widnes column in Python, add up the top fifth and print its share of the total.' },
          { h3: 'Ages 15 and up', p: 'Draw the full curve of share against rank for all five counts and find where each reaches 80%.' }
        ] },
        { kind: 'callout', h3: 'Whose numbers these are', p: 'Every count is Office for National Statistics Census 2021 data, fetched from Nomis and used under the Open Government Licence. The ranking, the shares and any mistakes in them belong to us.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Rules of thumb and AI',
      h2: 'What a tested rule teaches about vibe coding and AI agents',
      intro: 'Chatbots are fluent in rules of thumb. Fluency is not evidence.',
      body: [
        { kind: 'table', caption: 'From the Widnes table to everyday work with AI', head: ['In the 80/20 project', 'When an AI states a rule'], rows: [
          ['Flats gave 73.6%, households 26.7%', 'Ask which data the rule was measured on'],
          ['Output areas are similar in population by design', 'Check whether the unit hides the pattern'],
          ['36.8% of areas had no flats', 'Look for the zeros before trusting an average'],
          ['One sort and one sum settled it', 'Prefer a quick test to a confident sentence'],
          ['Five counts gave five answers', 'One example never proves a general rule']
        ] },
        { kind: 'p', text: 'Ask a chatbot how to prioritise almost anything and the Pareto principle will turn up within a paragraph, stated as fact. In vibe coding the learner describes the program and an AI drafts it, and our Widnes students are taught to treat any rule the AI leans on as a claim that a few lines of code can check. The same matters more with AI agents, which act on such rules without pausing: an agent told to handle the top fifth of cases first is only efficient if the work is lumpy, and it should measure that before it starts. Learners build agents with us after they can write Python on their own, usually at sixteen or older, and Copilot Studio agents are taught in private lessons only. Read more on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for UK students</a> and on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'The ONS, Nomis and postcodes.io publish open data and have no connection with this page; they have not reviewed or approved anything on it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Pathway',
    h2: 'From sharing out sweets to testing a rule in Python',
    intro: 'Year groups are approximate. The free lesson places each learner.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Ranking, fair shares and spotting a claim that needs a test.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps described to an AI and checked by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and data', p: 'Lists, sorting and real tables next to GCSE and A level work.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'AI and statistics', p: 'Generative AI, agents and the statistics needed to question them.', courses: ['complete-generative-ai-masterclass-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and rules of thumb',
    h2: 'What is the Pareto principle, and is the 80/20 rule always true?',
    intro: 'The Pareto principle is the observation that a small share of causes, often put at 20%, accounts for a large share of results, often put at 80%; it is not always true, because it only describes quantities that are very unevenly spread.',
    p1: 'In Widnes the top fifth of 193 Census areas hold 73.6% of households in purpose-built flats but only 26.7% of all households, so the same town both fits the rule and breaks it, depending on what is counted.',
    p2: 'A learner who has run that test will ask an AI for the data behind a rule before acting on the rule.',
    closer: 'For a Widnes teenager, being able to check a popular claim in ten lines of Python is a strong reason to keep learning to code while AI writes more of the routine parts.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons from Ditton to Farnworth',
    intro: 'All a learner needs is a laptop or desktop and broadband that copes with a video call.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'The learner shares a screen and does the typing. The tutor asks for a prediction before each run and a reason after it.' },
      { h3: 'Starting point found first', p: 'Lesson one shows us what is already secure, and we note the exam board if there is one.' },
      { h3: 'No charge to try', p: 'The opening lesson is a full one and it is free. We suggest a course when it ends.' },
      { h3: 'Classes of one level', p: 'Group classes hold five to ten learners from around the UK who are at the same stage.' },
      { h3: 'Twice weekly', p: 'Two lessons a week, with breaks for the school holidays you tell us about.' },
      { h3: 'Fixed UK time', p: 'When the clocks go forward or back, your lesson time in Widnes stays where it was.' }
    ],
    spec: { title: 'Why not a room in town', p: 'A good class needs several learners at the same stage who are all free at the same hour. One town rarely supplies that for every stage; a whole country does.' }
  },

  fees: {
    h2: 'Fees for Widnes learners',
    intro: 'Widnes is charged at our international rate, the one used for every country except India.',
    first: 'One whole lesson without charge, plus our advice on a course.',
    group: 'Roughly eight live lessons a month in a small class.',
    private: 'Roughly eight live lessons a month, one learner and one tutor.',
    closer: 'We bill in US dollars and have no sterling price list. Nothing is invoiced until the free lesson has settled a course and a weekly time. Holiday pauses, missed lessons and moving between group and private are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from UK families, including Cheshire and Merseyside',

  book: {
    h2: 'Book a free lesson in Widnes',
    intro: 'Give us the learner\'s age or year group and something they enjoy. The free lesson might be a sharing-out puzzle, a Scratch game made with an AI, a first Python list, or the 80/20 test on a real table.',
    success: 'Thanks. Your Widnes request has reached us.'
  },

  faq: {
    h2: 'Widnes questions',
    intro: 'The 80/20 rule, the Census project, vibe coding, agents and fees.',
    items: [
      { q: 'What is the population of Widnes?', a: 'The ONS recorded 59,935 residents in the Widnes built-up area at the 2021 census.' },
      { q: 'Are coding and AI classes available in Widnes?', a: 'Yes. They are live video lessons, so learners aged 6 to 67 in Ditton, Hough Green, Farnworth, Upton Rocks and the rest of Halton can all join.' },
      { q: 'What does the 80/20 rule mean?', a: 'It is a rule of thumb, also called the Pareto principle, saying that about 20% of causes produce about 80% of results. It is a pattern found in some data, not a law.' },
      { q: 'How do you check whether the Pareto principle applies to a data set?', a: 'Sort the values from largest to smallest, add up the top 20% of them and divide by the grand total. A share close to 80% fits the rule; a share close to 20% means the values are spread evenly.' },
      { q: 'What did the Widnes project find?', a: 'Across 193 Census areas, the top fifth held 73.6% of households in purpose-built flats, 40.8% of households with no car or van and 27.7% of residents.' },
      { q: 'Do children here learn vibe coding?', a: 'They do, from about age eight: the child says what the program should do, an AI writes a draft, and the child tests and corrects it.' },
      { q: 'At what point are AI agents taught?', a: 'When a learner can write Python without help, typically from sixteen. Copilot Studio agents are only taught one-to-one.' },
      { q: 'Can lessons support GCSE or A level computer science?', a: 'Yes, we teach the topics those courses cover and explain them carefully. We make no promises about grades.' },
      { q: 'How much do classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month and private lessons are USD 150 a month.' },
      { q: 'What happens in the school holidays?', a: 'Tell us your dates and lessons pause until term resumes.' }
    ]
  },

  next: {
    eyebrow: 'Elsewhere',
    h2: 'Other pages around the Mersey',
    html: 'Each of these has a different project: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-runcorn">Runcorn</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-warrington">Warrington</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-ellesmere-port">Ellesmere Port</a> (leaky model tests) and <a class="cg-inline-link" href="/coding-classes-in-merseyside">Merseyside</a>. The full list of places is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Widnes and Halton',
  footerPlaces: [
    { href: '/coding-classes-in-cheshire', label: 'Cheshire' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wdn .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.4vw, 2.9rem); }
.cg-root.cg-wdn .cg-hero h1 { font-weight: 720; letter-spacing: -0.022em; line-height: 1.07; }
.cg-root.cg-wdn .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-wdn .cg-eyebrow { letter-spacing: 0.11em; font-weight: 650; }
.cg-root.cg-wdn .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.015em; }
.cg-root.cg-wdn .cg-table caption { font-style: italic; text-align: left; font-size: 0.92rem; padding-bottom: 0.5rem; }
.cg-root.cg-wdn .cg-table td:last-child { font-variant-numeric: tabular-nums; font-weight: 600; }
.cg-root.cg-wdn .cg-table th { border-bottom: 2px solid var(--cg-accent); font-size: 0.82rem; }
.cg-root.cg-wdn .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-wdn .cg-callout { border-radius: 4px; border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Halton (E06000006). ONS 2021 BUAs (published): Widnes 59,935; Runcorn 61,645. postcodes.io suburban areas (nearest OA centroid in the Widnes BUA, our check): Ditton, Hough Green, Farnworth, Appleton, Upton Rocks, Simm\'s Cross, Halton View, West Bank, Kingsway, Lunts Heath; village Hale Bank (own BUA).',
    localProject: 'Census 2021 TS045/TS017/TS044 and OA residents for the 193 OAs of the Widnes BUA. Share held by the top 20% of areas (39): households 26.7% of 25,801; residents 27.7% of 59,938 (our OA sum); one-person households 33.9% of 8,086; no car or van 40.8% of 6,013; purpose-built flats 73.6% of 2,330 (36.8% of areas none; top 5% hold 29.2%; 80% within top 23.8%); 80% of residents needs 74.6% of areas. Lesson family: Pareto principle tested as a claim.',
    requiredMentions: [
      'Pareto principle',
      '80/20',
      '73.6%',
      '25,801',
      '2,330',
      '8,086',
      'Hough Green',
      'Upton Rocks',
      'Lunts Heath',
      'Halton View'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS045, TS017 and TS044 at output area level via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Output Area (2021) to Built-up Area (2022) lookup and OA population-weighted centroids, Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: suburban areas and villages in Halton.', url: 'https://api.postcodes.io/places?q=Hough%20Green' }
    ],
    rejectedClaims: [
      'Chemical industry, bridge or rugby history: not read from a source; not claimed.',
      'Why some areas have more flats or fewer cars: no cause claimed; only shares are reported.',
      'That the 80/20 rule holds for Widnes in general: it held roughly for one count of five.',
      'Sum of the Widnes and Runcorn built-up areas: not added.',
      'Hale Bank as part of Widnes: it has its own ONS built-up area; described only as a village.',
      'Named schools, term dates or exam results: none named or promised.',
      'Sterling prices: none.'
    ]
  }
};
