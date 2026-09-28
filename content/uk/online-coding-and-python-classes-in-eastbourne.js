'use strict';
// Eastbourne (cg- town page, UK cluster Phase 8, towns band A, row 355). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can one artificial neuron learn
// which months bring frost? Anchor (read raw 28 September 2026): Met Office historic station data, Eastbourne
// (eastbournedata.txt): "Location: 561100E 98300N, Lat 50.762 Lon 0.285, 7 metres amsl"; monthly tmax, tmin, af (air frost
// days), rain, sun from 1959; "Estimated data is marked with a * after the value"; "Provisional" rows; "#" = Kipp & Zonen
// sunshine sensor.
// Our run (scratchpad eas/perc.py): 812 monthly rows (1959-01 to 2026-08); 8 provisional rows dropped; 88 rows carry an
// estimate mark; 804 usable. Label: frost month = af >= 1. Train 1959-2004: 552 months, 173 frost (baseline "never frost"
// 68.7%). Test 2005-2025: 252 months, 62 frost (baseline 75.4%). Perceptron, learning rate 1, 100 passes, chronological
// order: tmin + sun unscaled train 81.9% test 79.4%; standardised train 91.8% test 89.7%; never reaches zero errors (last
// pass 62 errors, lowest 56). One-number rule tmin <= 5.2 degC (best on train): train 90.0%, test 91.3%.
// Lesson family: perceptron (single artificial neuron), feature scaling, non-separable data / non-convergence, majority
// baseline, simple-rule comparison, time-based train/test split. Screened: perceptron, feature scaling, train/test,
// baseline model, look-ahead 0 hits (logistic, k-means, cross-validation, gradient descent live on other pages).
// Place facts: Nomis Census 2021 TS007A, Eastbourne E07000061: total 101,685; 20 to 24 5,225 (5.1%; England 6.0%); 25 to 29
// 5,639 (5.5%; 6.6%); 70 to 74 6,529 (6.4%; 5.0%); 75 to 79 4,876 (4.8%; 3.6%); 80 to 84 3,680 (3.6%; 2.5%); 85 and over
// 4,045 (4.0%; 2.4%). ONS 2021 BUAs: Eastbourne 99,180 (our OA sum inside the borough 98,195); Crumbles 3,055. OS Open
// Names (postcodes.io): Hampden Park, Langney and Meads are suburban areas in Eastbourne district.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'EASTBOURNE', label: 'Eastbourne', blurb: 'Online coding, Python and AI classes for Eastbourne, with a project that trains a single artificial neuron on sixty years of Eastbourne weather.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-eastbourne',
  code: 'eas',
  accent: '#48205C',
  accentRationale: 'Eastbourne: a late-evening violet over the Channel (10.34:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Eastbourne',
    eyebrow: 'Eastbourne, East Sussex, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'East Sussex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'East Sussex', href: '/coding-classes-in-east-sussex' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Eastbourne, England',
  title: 'Online Coding and Python Classes in Eastbourne | AI, 6 to 67',
  description: 'Live online coding, Python, vibe coding and AI classes for Eastbourne, Hampden Park, Langney and Meads learners aged 6 to 67, solo or in groups. First lesson free.',
  ogDescription: 'Live online coding, Python and AI classes for Eastbourne, and a project that trains one artificial neuron on sixty years of Eastbourne weather.',
  twitterDescription: 'Eastbourne online coding, Python, vibe coding and AI classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Eastbourne',
    description: 'Online coding, Python, vibe coding, AI and mathematics for children, teenagers and adults in Eastbourne, taught live with thinking skills first.'
  },

  h1: 'Online coding and Python classes in Eastbourne',
  capsuleQ: 'Which are the best online coding and Python classes in Eastbourne?',
  capsule: 'Eastbourne borough recorded 101,685 people in the 2021 census, and the ONS gives 99,180 for the Eastbourne built-up area. The town leans older than England: every band from 70 upward is well above England, and people in their twenties are fewer. From Hampden Park and Langney to Meads, learners aged 6 to 67 can study coding, Python, vibe coding, AI and maths live online with our tutors in India, privately or in a small class of five to ten at the same level. We teach thinking first, so learners who build with AI still understand what they built. A free trial lesson picks the right course, and after it a group place costs USD 100 a month and one-to-one lessons USD 150 a month.',
  lead: 'Every artificial intelligence you have heard of is built from very simple parts. The simplest of all is the perceptron, a single artificial neuron that looks at a few numbers, multiplies each by a weight, adds them up and says yes or no. When it gets an answer wrong, it nudges its weights and tries again. The Met Office has published monthly weather for Eastbourne since 1959, from a station just 7 metres above sea level: temperatures, rainfall, sunshine and the number of days with air frost. A Python learner can teach one neuron to recognise frosty months from that record. It works quite well. What it cannot do, and why, is the real lesson about how machines learn.',
  wa: 'Hello Modern Age Coders, please could we book a free coding or Python lesson for an Eastbourne learner?',

  picks: {
    eyebrow: 'Eastbourne course picks',
    h2: 'Thinking, vibe coding and Python courses',
    intro: 'Choose by age and interest. A free live lesson always comes first, and no card is needed to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: logic, patterns and plans before any screen time with AI.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps made by describing them to AI, and checking the result.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects for teenagers, including the weather neuron.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How language models, retrieval and AI agents work, built in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Eastbourne borough',
      h2: 'An older seaside borough',
      intro: 'Six census age bands for Eastbourne from Nomis, set against the England share.',
      body: [
        { kind: 'table', caption: 'Eastbourne borough and England, six age bands (TS007A, 2021)', head: ['Ages', 'Eastbourne residents', 'Eastbourne share', 'England share'], rows: [
          ['20 to 24', '5,225', '5.1%', '6.0%'],
          ['25 to 29', '5,639', '5.5%', '6.6%'],
          ['70 to 74', '6,529', '6.4%', '5.0%'],
          ['75 to 79', '4,876', '4.8%', '3.6%'],
          ['80 to 84', '3,680', '3.6%', '2.5%'],
          ['85 and over', '4,045', '4.0%', '2.4%']
        ] },
        { kind: 'p', text: 'People aged 85 and over make up 4.0% of Eastbourne against 2.4% nationally, and the late twenties are more than a point below England. The ONS also lists Crumbles, at 3,055, as a separate small built-up area inside the borough, and the Ordnance Survey names Hampden Park, Langney and Meads as parts of the town. Eastbourne schools teach the national curriculum for England; share the term calendar and lessons will leave the holidays free. Our courses suit grandparents learning alongside grandchildren as well as school pupils.' },
        { kind: 'callout', h3: 'County, region and our approach', p: 'See <a class="cg-inline-link" href="/coding-classes-in-east-sussex">East Sussex</a> for the county and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a> for the region. Why we teach thinking before AI tools is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Eastbourne project',
      h2: 'Teaching one neuron to spot frosty months',
      intro: 'Load the station record, train a perceptron on the old years and test it on the new ones.',
      body: [
        { kind: 'p', text: 'The learner downloads the Eastbourne station file and reads 812 months, January 1959 to August 2026. Three markers need care before any learning starts. The latest 8 months are labelled Provisional and are left out. 88 months carry an asterisk meaning a value was estimated, which the learner keeps but records. And a hash sign on sunshine marks a change of instrument. Each month is then labelled frosty if the station logged at least one day of air frost. The months up to 2004 become training data, 552 of them; 2005 to 2025 are held back as a test, 252 months. Splitting by time matters: the neuron must never learn from the years it is later tested on.' },
        { kind: 'table', caption: 'Frost-month predictions for Eastbourne, our Python run on Met Office station data, 28 September 2026', head: ['Method', 'Training accuracy (1959 to 2004)', 'Test accuracy (2005 to 2025)'], rows: [
          ['Always say "no frost"', '68.7%', '75.4%'],
          ['Perceptron, minimum temperature and sunshine, raw numbers', '81.9%', '79.4%'],
          ['Perceptron, same two inputs, scaled first', '91.8%', '89.7%'],
          ['One rule: frost if minimum temperature is 5.2°C or lower', '90.0%', '91.3%']
        ] },
        { kind: 'p', text: 'The first comparison is with doing nothing clever: a program that always answers "no frost" is right 75.4% of the time on the test years, simply because most months are frost-free, so any model has to beat that. The second lesson is scaling. Sunshine is measured in hundreds of hours and temperature in single degrees, so with raw numbers the sunshine input swamps the weight updates and the neuron manages only 79.4% on the test years. Rescaling both inputs to a common size before training lifts that to 89.7%. Nothing about the neuron changed except the units of what it was fed.' },
        { kind: 'p', text: 'The third lesson is the most important. The perceptron keeps making mistakes on every pass through the data, 62 errors on the last of 100 passes, because no straight line can separate frosty from mild months perfectly: some cold months have no frost and some mild ones do. A single neuron can only draw straight lines, which is why real AI systems stack many of them. And the plainest model of all, one rule on minimum temperature, scores 91.3% on the test years, slightly better than the neuron. Knowing when a simple rule is enough is a skill every AI builder needs.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort weather cards into frosty and not, then find one rule that gets most of them right.' },
          { h3: 'Ages 11 to 15', p: 'Read the Met Office file in Python and test simple rules against the baseline.' },
          { h3: 'Ages 15 and up', p: 'Code the perceptron, scale the inputs and compare it fairly on years it never saw.' }
        ] },
        { kind: 'callout', h3: 'Met Office data, our neuron', p: 'Monthly observations come from the Met Office historic station data for Eastbourne. The labels, the training, the test split and every accuracy figure on this page are our own work.' }
      ]
    },
    {
      id: 'aiskills', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'From one neuron to vibe coding and AI agents',
      intro: 'Why understanding the simple parts makes a learner better with modern AI tools.',
      body: [
        { kind: 'table', caption: 'What the Eastbourne neuron teaches about modern AI', head: ['In the project', 'In the AI tools learners use'], rows: [
          ['Weights nudged after each mistake', 'Large models are also trained by nudging weights after errors, with billions of them'],
          ['Scaling inputs changed the result', 'How data is prepared matters as much as the model'],
          ['No straight line could separate the months', 'Why AI stacks many neurons in layers'],
          ['A simple rule did as well', 'Vibe-coded apps and AI agents still need a check against a plain baseline'],
          ['Tested only on unseen years', 'Honest testing is how you know an AI tool really works']
        ] },
        { kind: 'p', text: 'Vibe coding, describing a program to an AI and letting it write the code, is how many learners now start. It is a great way in, and our vibe coding courses for kids and teenagers use it, but only alongside real understanding: the learner predicts what the code should do, reads it, and tests it, exactly as in this project. Older teenagers and adults can go further and build AI agents that call tools and act on data. Our <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents course for UK students</a> pages explain how.' },
        { kind: 'p', text: 'Modern Age Coders has no link with the Met Office or the census office. The observations and figures are theirs; the model, its results and any slip in them are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From weather cards to neural networks',
    intro: 'School year is a first guide; the free lesson decides where to begin.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Logic puzzles, patterns and step-by-step plans.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch games and apps built by talking to AI, then checked.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Data, models and vibe coding projects beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'AI for everyone', p: 'Python, data and AI agents, starting from zero.', courses: ['complete-generative-ai-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and understanding',
    h2: 'Can an AI tool explain its own mistakes?',
    intro: 'Usually not; the person using it has to.',
    p1: 'Ask an AI assistant to vibe code a frost predictor and it will happily produce one with a confident accuracy figure. Whether it split the years fairly, scaled the inputs or compared against a simple rule is up to you to check.',
    p2: 'An Eastbourne learner who has trained a neuron by hand knows the questions to ask of any model, however it was written.',
    closer: 'Understanding what sits inside AI, not just how to prompt it, is why Eastbourne teenagers should keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Hampden Park to Meads, taught online',
    intro: 'All an Eastbourne home needs is a computer and a stable internet connection.',
    cells: [
      { h3: 'Learners write the code', p: 'Students type and prompt everything themselves, and the tutor watches by screen share, asking rather than telling.' },
      { h3: 'The trial sets the level', p: 'Whether in Year 3 or Year 13, a learner starts where the free lesson places them, with the exam board in mind.' },
      { h3: 'First lesson free', p: 'One complete lesson at no charge, with a course recommendation at the end.' },
      { h3: 'Matched classmates', p: 'Groups of five to ten UK learners working at one stage.' },
      { h3: 'Two a week', p: 'No lessons during school holidays.' },
      { h3: 'Steady UK hour', p: 'Tutors adjust when the clocks change, so your slot stays the same.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five Eastbourne learners at the same stage, free at the same time, rarely live close together. Online, each can join a class that matches.' }
  },

  fees: {
    h2: 'Eastbourne fees',
    intro: 'Eastbourne pays the one international rate we use for every country except India.',
    first: 'A full lesson free, then advice on the course that fits.',
    group: 'Roughly eight live group lessons each month.',
    private: 'Roughly eight live one-to-one lessons each month.',
    closer: 'Fees are charged in US dollars rather than pounds. We bill only after the trial has settled a course and a weekly time, and the pricing page covers holidays, missed sessions and changing format.'
  },

  reviewsH2: 'Sussex and UK families on Google',

  book: {
    h2: 'Book a free Eastbourne lesson',
    intro: 'Let us know the learner\'s age or year group and a favourite interest. A first lesson could be a logic puzzle session, a vibe-coded Scratch game, a first Python program, or training a tiny neuron.',
    success: 'Thank you. The Eastbourne request has reached us.'
  },

  faq: {
    h2: 'Eastbourne questions',
    intro: 'The weather project, vibe coding, local figures and lesson details.',
    items: [
      { q: 'What is the population of Eastbourne?', a: 'The 2021 census counted 101,685 in Eastbourne borough; the ONS gives 99,180 for the Eastbourne built-up area.' },
      { q: 'Can Eastbourne learners take coding and Python classes online?', a: 'Yes. All lessons are live over video for ages 6 to 67, from Langney to Meads.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, to kids, teenagers and adults, always with the learner planning first, reading the code and testing it.' },
      { q: 'Do you teach AI agents?', a: 'Yes, to older teenagers and adults with some Python; the Copilot Studio agents courses are one-to-one only.' },
      { q: 'What is the perceptron project?', a: 'Learners train a single artificial neuron on Met Office data from Eastbourne to recognise frosty months, then test it on years it never saw.' },
      { q: 'Are lessons face to face?', a: 'No. Every lesson is online.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, in computer science and maths, focused on understanding; grades are never promised.' },
      { q: 'Which ages can join?', a: 'Anyone from 6 to 67.' },
      { q: 'What does it cost?', a: 'The trial lesson is free. Then it is USD 100 per month in a group or USD 150 per month one-to-one.' },
      { q: 'Are school holidays lesson-free?', a: 'Yes; send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other pages along the coast',
    html: 'Along the coast, <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-worthing">Worthing</a> have their own pages. The county is covered by <a class="cg-inline-link" href="/coding-classes-in-east-sussex">East Sussex</a>, the region by <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> reaches every page.',
    waLabel: 'Send us a WhatsApp'
  },

  footerHeading: 'Eastbourne and East Sussex',
  footerPlaces: [
    { href: '/coding-classes-in-east-sussex', label: 'East Sussex' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-eas .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3vw, 2.5rem); }
.cg-root.cg-eas .cg-hero h1 { font-weight: 760; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-eas .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-eas .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-eas .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-eas .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-eas .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-eas .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-eas .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.75rem; }
.cg-root.cg-eas .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Eastbourne (E07000061). Nomis Census 2021 TS007A: total 101,685; 20 to 24 5,225 (5.1%, England 6.0%); 25 to 29 5,639 (5.5%, 6.6%); 70 to 74 6,529 (6.4%, 5.0%); 75 to 79 4,876 (4.8%, 3.6%); 80 to 84 3,680 (3.6%, 2.5%); 85 and over 4,045 (4.0%, 2.4%). ONS 2021 BUAs: Eastbourne 99,180; Crumbles 3,055. OS Open Names: Hampden Park, Langney, Meads in Eastbourne district. Met Office historic station data, Eastbourne: "Location: 561100E 98300N, Lat 50.762 Lon 0.285, 7 metres amsl"; monthly from 1959; * estimated; Provisional; # Kipp & Zonen sensor.',
    localProject: '812 months (1959-01 to 2026-08), 8 provisional dropped, 88 estimate-marked, 804 usable; frost month = af >= 1. Train 1959-2004 552 (173 frost; baseline 68.7%); test 2005-2025 252 (62 frost; baseline 75.4%). Perceptron tmin+sun raw 81.9/79.4, scaled 91.8/89.7, never converges (62 errors on pass 100, min 56). Rule tmin <= 5.2 degC 90.0/91.3. Lesson family: perceptron, feature scaling, non-separability, baseline, simple-rule comparison, time split.',
    requiredMentions: [
      '101,685',
      '99,180',
      'Crumbles',
      'Hampden Park',
      'Langney',
      'Meads',
      'perceptron',
      'air frost',
      'artificial neuron'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Eastbourne and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Met Office historic station data, Eastbourne.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/eastbournedata.txt' },
      { claim: 'OS Open Names places in Eastbourne district, via postcodes.io.', url: 'https://postcodes.io/' }
    ],
    rejectedClaims: [
      'Beachy Head: excluded under the cluster content rules; not mentioned.',
      'Sunshine records or "sunniest town" claims: not read from a source; not claimed.',
      'Why the test years have fewer frost months: not analysed; not claimed.',
      'Pier, bandstand and tennis history: not read from a source; not claimed.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
