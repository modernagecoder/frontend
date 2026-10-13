'use strict';
// Northern Beaches, Sydney (cg- district page, Australia cluster Phase 8, row 230). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), council-area page (ABS LGA15990) under Sydney and New South Wales.
// Spine: a nearest-neighbour model guesses each Northern Beaches area's median age from the areas around it. How
// good is it? Random cross-validation folds and north-to-south block folds give different answers, and with only
// 19 areas the way you split moves the score as much as the method does.
// Data: ABS Census 2021 QuickStats for the 19 SA2s inside the council (median ages 36 to 49) with approximate
// centres from ABS ASGS Edition 3 boundaries; council headline from QuickStats LGA15990. Analysis scratchpad
// au/b4/nbcv.py: 4 folds, 3 neighbours: random folds mean error 2.23 years (200 shuffles, 1.77 to 2.95), north-south
// blocks 2.72; mean-only baseline 3.36 random, 3.93 blocks. With 5 blocks the gap vanishes (2.19 vs 2.19); with one
// neighbour blocks score better (2.00 vs 2.99). Leave-one-out, 2 neighbours: 2.47 vs baseline 3.36.
// Lesson family: spatial (block) cross-validation; 0 location-page hits, unclaimed.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'NORTHERN BEACHES',
    label: 'Northern Beaches, Sydney',
    blurb: 'AI and programming for the Northern Beaches, with a project on testing a model fairly when its data sits on a map.'
  },
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  slug: 'ai-and-programming-classes-in-northern-beaches-sydney',
  code: 'nbch',
  accent: '#34229E',
  accentRationale: 'Northern Beaches: a deep ultramarine violet (hue 247), chosen by hand at least 10 RGB units from all 1,272 accents in content, the shared stylesheets and the claims log, 11.4:1 on white and 9.3:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Northern Beaches',
    eyebrow: 'Northern Beaches Council area, Sydney, New South Wales',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Sydney' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'best-coding-classes-in-sydney', name: 'Sydney' }
  ],
  nav: [
    { label: 'Sydney', href: '/best-coding-classes-in-sydney' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Northern Beaches, Sydney',
  title: 'AI and Programming Classes in the Northern Beaches, Sydney',
  description: 'Live online AI and programming classes for Northern Beaches children, teenagers and adults, from Scratch and Python to machine learning, in small groups.',
  ogDescription: 'AI classes for the Northern Beaches, with a project on 19 Census areas from Palm Beach to Manly and why the way a model is tested can change its score.',
  twitterDescription: 'Northern Beaches AI and programming classes, live online with a teacher, first class free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for the Northern Beaches',
    description: 'Level-matched online AI, machine learning and programming lessons for children, teenagers and adults in the Northern Beaches council area, taught live in English.'
  },
  h1: 'AI and programming classes in the Northern Beaches',
  capsuleQ: 'Where can Northern Beaches students find the best online AI and programming classes?',
  capsule: 'In small live online groups where a teacher builds and tests real models with the class, from Scratch for young children to Python machine learning for teenagers and adults. The 2021 Census counted 263,554 residents in the Northern Beaches council area, and 36,150 families, 49.9%, were couples with children.',
  lead: 'Median age changes a lot along the peninsula: 49 around Bayview and Elanora Heights, 36 in the northern part of Dee Why. A simple model can guess an area\'s median age from the areas next to it. The interesting question is how to test that guess honestly, because nearby areas share so much that a careless test lets the answer leak in.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in the Northern Beaches.',
  picks: {
    eyebrow: 'Course picks for the Northern Beaches',
    h2: 'Courses where models get tested, not just trained',
    intro: 'Every course here includes the testing habit behind the peninsula project. The free trial confirms the level, and no payment is taken until course and time are agreed.',
    items: [
      {
        course: 'ai-ml-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Nearest-neighbour models, training and test splits, and cross-validation built step by step in Python.'
      },
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'Reading public tables like Census QuickStats, cleaning them and charting what they show.'
      },
      {
        course: 'statistics-probability-maths-course',
        band: 'Ages 14 and over',
        note: 'Averages, error and variability, so a model score is read with its uncertainty.'
      },
      {
        course: 'artificial-intelligence-complete-masterclass-college',
        band: 'University and adult',
        note: 'Machine learning from first principles to evaluation methods used at work.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The council area in the Census',
      h2: 'A family council area, Palm Beach to Manly',
      intro: 'Figures for the Northern Beaches local government area (ABS code LGA15990) from the 2021 Census QuickStats, with the matching state and national figures.',
      body: [
        {
          kind: 'table',
          caption: 'Northern Beaches, 2021 Census headline counts',
          head: ['Headline', 'Northern Beaches'],
          rows: [
            ['Residents', '263,554'],
            ['Median age', '41'],
            ['Families', '72,448'],
            ['Private dwellings', '105,017'],
            ['Average people per household', '2.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Northern Beaches next to NSW and Australia',
          head: ['Measure', 'Northern Beaches', 'NSW', 'Australia'],
          rows: [
            ['Couple families with children', '49.9% (36,150)', '44.7%', '43.7%'],
            ['Homes that are separate houses', '57.3% (54,040)', '65.6%', '72.3%'],
            ['Homes that are flats or apartments', '33.4% (31,478)', '21.7%', '14.2%'],
            ['Adults with a bachelor degree or higher', '37.7% (81,083)', '27.8%', '26.3%'],
            ['Workers employed as managers', '20.9% (28,442)', '14.6%', '13.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Home offices', p: 'In the August 2021 lockdown, 59,959 employed residents, 44.0%, worked from home on Census day.' },
            { h3: 'Driving to work', p: '44,891 workers, 33.0%, drove to work that day, compared with 43.1% across the state.' },
            { h3: 'Professionals', p: '41,531 working residents, 30.5%, were employed as professionals.' }
          ]
        },
        {
          kind: 'p',
          text: 'Census figures are lightly adjusted by the bureau to protect privacy, so the 19 smaller areas below are shown one by one and never added up to make a council total.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Can neighbours predict an area\'s median age?',
      intro: 'The council contains 19 statistical areas (SA2s). For each one we took the median age published in QuickStats and an approximate centre point, then asked a three-neighbour model to guess each median age from the three closest other areas.',
      body: [
        {
          kind: 'table',
          caption: 'Median age of the 19 areas, north to south (ABS Census 2021 QuickStats; block is ours)',
          head: ['Statistical area', 'Median age', 'North-south block'],
          rows: [
            ['Avalon - Palm Beach', '48', '1'],
            ['Bayview - Elanora Heights', '49', '1'],
            ['Newport - Bilgola', '46', '1'],
            ['Terrey Hills - Duffys Forest', '47', '1'],
            ['Mona Vale - Warriewood (North)', '45', '2'],
            ['North Narrabeen - Warriewood (South)', '40', '2'],
            ['Narrabeen - Wheeler Heights', '46', '2'],
            ['Belrose', '46', '2'],
            ['Cromer', '42', '2'],
            ['Collaroy - Collaroy Plateau', '41', '3'],
            ['Frenchs Forest - Oxford Falls', '41', '3'],
            ['Dee Why - North', '36', '3'],
            ['Beacon Hill - Narraweena', '42', '3'],
            ['Dee Why (South) - North Curl Curl', '38', '3'],
            ['Forestville - Killarney Heights', '43', '4'],
            ['Freshwater - Brookvale', '37', '4'],
            ['Manly Vale - Allambie Heights', '40', '4'],
            ['Balgowlah - Clontarf - Seaforth', '42', '4'],
            ['Manly - Fairlight', '38', '4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Average error of the guesses in years, four folds (our calculation)',
          head: ['How the test is split', 'Three-neighbour model', 'Guess the average'],
          rows: [
            ['Random folds, average of 200 shuffles', '2.23', '3.36'],
            ['Random folds, luckiest and unluckiest shuffle', '1.77 and 2.95', ''],
            ['Four north-to-south blocks', '2.72', '3.93']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Random folds',
              p: 'Hold out areas at random and a test area usually still has its next-door neighbours in the training data, so the model looks strong.'
            },
            {
              h3: 'Block folds',
              p: 'Hold out a whole stretch of the peninsula, such as Avalon to Terrey Hills, and the model must guess from areas further away. The error rises to 2.72 years.'
            },
            { h3: 'Still useful', p: 'Even with blocks, the neighbour model beats simply guessing the average of the other areas, 2.72 years against 3.93.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'The result that did not hold',
          p: 'Cut the peninsula into five blocks instead of four and the gap disappears: 2.19 years both ways. Use one neighbour instead of three and blocks score better than random folds. With only 19 areas, the choice of split moves the score as much as the model does.'
        },
        {
          kind: 'p',
          text: 'The model, the blocks and the error figures are our own work; the median ages are published ABS values printed exactly. The lesson is about how to measure, not a claim about why ages differ along the coast.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Inside the model',
      h2: 'What students write, in four steps',
      intro: 'The whole project is short enough for a teenager to write in a few lessons, and each step teaches a habit that carries over to bigger machine learning work.',
      body: [
        {
          kind: 'table',
          caption: 'The pieces of the peninsula project',
          head: ['Step', 'What the code does', 'Habit it builds'],
          rows: [
            ['Distance', 'Measures kilometres between area centres on a sphere', 'Using the right distance for the data'],
            ['Guess', 'Averages the median ages of the nearest areas', 'Starting from a simple, explainable model'],
            ['Split', 'Builds random folds and north-to-south blocks', 'Asking whether test data is truly unseen'],
            ['Repeat', 'Reruns the random split 200 times', 'Reporting a range, not one lucky number']
          ]
        },
        {
          kind: 'p',
          text: 'The same caution applies far beyond maps. Readings taken minutes apart, photos of the same person, or sales from the same shop all leak information between training and test data if they are split at random.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Younger learners',
              p: 'Play a guessing game on a map: can you guess a beach\'s temperature from the beaches beside it, and is it fair if you peeked?'
            },
            { h3: 'Teenagers', p: 'Code the model, the folds and the baseline, then write a short note on which score to believe and why.' },
            { h3: 'Adults', p: 'Apply grouped and time-based splits to work data before trusting any accuracy figure.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Schools on the peninsula',
      h2: 'Classrooms in Manly since 1858',
      intro: 'From the NSW government schools file and the school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: '46 government schools',
              p: 'The NSW schools file lists 46 government schools in the council area, including 30 primary and 11 secondary schools.'
            },
            {
              h3: 'The oldest',
              p: 'Manly Village Public School records its first teacher in 1858, followed by Seaforth Public School in 1881 and Brookvale Public School in 1887.'
            },
            { h3: 'Term 1, 2027', p: 'Eastern division schools start Term 1 of 2027 on Wednesday 3 February and finish it on Friday 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Areas, not suburbs',
          p: 'The 19 statistical areas are ABS units that often join two suburbs, such as Collaroy and Collaroy Plateau. The council headline figures cover all of them.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a map guessing game to honest model scores',
    intro: 'Ages are a guide only; the free trial lesson sets the real starting point.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games with rules, patterns and simple predictions, built in blocks.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and first AI',
        p: 'Python basics, then small models that learn from examples.',
        courses: ['python-ai-kids-masterclass', 'python-complete-masterclass-teens']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Machine learning',
        p: 'Models, data and fair testing, including cross-validation.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'AI for work',
        p: 'Evaluation, data pipelines and models that hold up outside the notebook.',
        courses: ['artificial-intelligence-complete-masterclass-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI tools can train a model in seconds, what is left for a Northern Beaches student to learn?',
    intro: 'Judging the result. Training is now the easy part; knowing whether a score means anything is the skill.',
    p1: 'Ask an AI assistant for a model and a cross-validation score and it will usually split the data at random, because that is the default. On data with a map, a calendar or repeated people in it, that default can report a model as better than it is, and the code will run without a single warning.',
    p2: 'A student who has watched the peninsula error move from 2.23 to 2.72 years just by changing the split knows to ask how the test was built. That question is what employers and universities want from people who work with AI.',
    closer: 'The student who questions the split is the one who can be trusted with the model.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Every lesson reaches Palm Beach as easily as Manly',
    intro: 'Lessons are live online, so the length of the peninsula and the traffic on its main road make no difference.',
    cells: [
      { h3: 'No commute', p: 'Learners join from home on a laptop, with no trip to a centre before or after school.' },
      { h3: 'Follows NSW terms', p: 'Plans follow NSW syllabus stages and pause in the NSW school holidays.' },
      { h3: 'Free full trial', p: 'The trial is a real lesson that ends with a recommended course, level and time.' },
      { h3: 'Groups of fifteen to twenty', p: 'Learners are grouped by level and goals, alongside students from other places.' },
      { h3: 'Twice weekly', p: 'Two fixed lessons each week, about eight a month; agreed breaks are planned ahead.' },
      { h3: 'India-based teachers', p: 'A 4:30pm Northern Beaches lesson during daylight saving is 11am in India, and 12 noon there once the clocks go back.' }
    ],
    spec: {
      title: 'Clock changes',
      p: 'Sydney daylight saving begins on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India does not change its clocks, and we always quote lesson times in Sydney time.'
    }
  },
  fees: {
    h2: 'Fees for Northern Beaches learners',
    intro: 'Three figures, and nothing hidden.',
    first: 'The first class is free and finishes with an honest course suggestion.',
    group: 'One month of group classes, normally eight, with fifteen to twenty learners of a similar level.',
    private: 'About eight one-to-one lessons a month with the same teacher.',
    closer: 'Families outside India pay in US dollars, so every Northern Beaches family sees the same price. Payment starts only after the trial, once the course and time are settled; holiday, absence and format rules sit on the pricing page.'
  },
  reviewsH2: 'What families and learners say on Google',
  book: {
    h2: 'Book a first Northern Beaches class',
    intro: 'Tell us the learner\'s age and interests. A nine-year-old might start with a Scratch prediction game; a teenager might go straight to the peninsula model.',
    success: 'Thank you. Our team will contact you shortly about a Northern Beaches class.'
  },
  faq: {
    h2: 'Northern Beaches AI and programming questions',
    intro: 'Questions Northern Beaches parents and learners often ask.',
    items: [
      {
        q: 'How many people live in the Northern Beaches council area?',
        a: 'The 2021 Census QuickStats for the Northern Beaches local government area record 263,554 residents, a median age of 41 and 105,017 private dwellings.'
      },
      {
        q: 'What is cross-validation?',
        a: 'It is a way to test a model by hiding part of the data, training on the rest and checking the guesses, then repeating with a different part hidden. The final score is the average across all the rounds.'
      },
      {
        q: 'Why split the peninsula into blocks?',
        a: 'Because next-door areas are alike. If a test area\'s neighbours stay in the training data, the model gets help it would not have on genuinely new places. Blocks remove that help.'
      },
      {
        q: 'What did the Northern Beaches project find?',
        a: 'With four folds and three neighbours, random splits gave an average error of 2.23 years and north-to-south blocks gave 2.72. With five blocks the difference vanished, which is itself the lesson: 19 areas are too few for one score to settle anything.'
      },
      {
        q: 'Is AI suitable for primary school children?',
        a: 'Yes, through games about patterns and prediction in Scratch. Python machine learning usually starts around 12 to 13.'
      },
      { q: 'Do you teach Copilot Studio agents?', a: 'Yes, one to one only. Group classes build agents in Python instead.' },
      {
        q: 'Do you have a centre on the Northern Beaches?',
        a: 'No. All lessons are live online, we have no premises in Australia, and the phone number we show is an Indian number.',
        boiler: true
      },
      {
        q: 'How much do classes cost for Northern Beaches learners?',
        a: 'The first lesson is free. After that, group lessons cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How big are the groups?',
        a: 'Fifteen to twenty learners, matched by level, pace and goals rather than age or suburb. One-to-one lessons are offered if no group suits the learner\'s time.',
        boiler: true
      },
      { q: 'Can adults join?', a: 'Yes. Adults study in adult groups or one to one, often aiming at data or AI tasks in their current job.' }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Northern Beaches learners',
    html: 'Across the Spit Bridge, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-mosman-sydney">Mosman</a> has its own page, and so does <a class="cg-inline-link" href="/ai-and-programming-classes-in-north-sydney-sydney">North Sydney</a>. For the wider picture, read the <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> or the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales guide</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Northern Beaches and Sydney',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-mosman-sydney', label: 'Mosman' },
    { href: '/ai-and-programming-classes-in-north-sydney-sydney', label: 'North Sydney' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-nbch .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.6vw, 2.9rem); }
.cg-root.cg-nbch .cg-hero h1 { font-weight: 680; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-nbch .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-nbch .cg-eyebrow { letter-spacing: 0.09em; font-weight: 650; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-nbch .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.013em; }
.cg-root.cg-nbch .cg-grid-3 { gap: clamp(0.8rem, 2.4vw, 1.9rem); }
.cg-root.cg-nbch .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-nbch .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nbch .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-nbch .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Northern Beaches, ABS Census 2021 QuickStats, Northern Beaches local government area LGA15990 (read 10 October 2026): 263,554 people; median age 41; 72,448 families; 105,017 private dwellings; 2.7 people per household; couple families with children 49.9% (36,150); separate houses 57.3% (54,040); flats or apartments 33.4% (31,478); bachelor degree or higher 37.7% (81,083); managers 20.9% (28,442); professionals 30.5% (41,531); worked at home 44.0% (59,959, lockdown Census day); drove to work 33.0% (44,891). QuickStats median ages for the 19 SA2s in the council, 36 (Dee Why - North) to 49 (Bayview - Elanora Heights). NSW government schools file (Date_extracted 2026-10-02): 46 schools in the LGA, 30 primary and 11 secondary; Manly Village Public School first teacher 1858, Seaforth Public School 1881, Brookvale Public School 1887. NSW 2027 Eastern division Term 1: 3 February to 9 April. Sydney daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Spatial block cross-validation vs random folds for a nearest-neighbour model of SA2 median age. 19 SA2s, haversine distance between approximate centres. 4 folds, k=3: random folds mean absolute error 2.23 years (200 shuffles, 1.77 to 2.95), north-to-south blocks 2.72; mean-only baseline 3.36 random, 3.93 blocks. Sensitivity: 5 blocks 2.19 vs random 2.19; k=1 with 4 blocks 2.00 vs random 2.99. Leave-one-out k=2: 2.47 vs baseline 3.36. Script: scratchpad au/b4/nbcv.py.',
    requiredMentions: ['263,554', '72,448', '105,017', '81,083', '59,959', '44,891', '31,478', '54,040', '41,531', '28,442'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Northern Beaches local government area (LGA15990).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA15990'
      },
      {
        claim: 'ABS Census 2021 QuickStats for the 19 Statistical Areas Level 2 in the Northern Beaches council area (median age), for example Avalon - Palm Beach (122021420).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/122021420'
      },
      {
        claim: 'ABS Australian Statistical Geography Standard Edition 3, Statistical Areas Level 2 boundaries (used for approximate area centres).',
        url: 'https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs-edition-3'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution), Date_extracted 2026-10-02.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'NSW Department of Education, 2027 term dates (Eastern division).', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That block cross-validation is always stricter than random folds: not claimed; with 5 blocks the scores matched and with one neighbour blocks scored better.',
      'Any explanation of why median age differs along the peninsula: not offered; the project measures a model, not causes.',
      'A council total formed by adding the 19 SA2 populations: not computed.',
      'Names of schools for specific purposes and of single-sex campuses: not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Northern Beaches Council, the NSW Department of Education or the ABS.'
    ]
  }
};
