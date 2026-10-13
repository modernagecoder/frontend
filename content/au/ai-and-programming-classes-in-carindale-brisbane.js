'use strict';
// Carindale, Brisbane (cg- district page, Australia cluster Phase 8, row 286). Keyword slug ai-and-programming-classes-in-*,
// suburb page (ABS SAL30540, City of Brisbane) under Brisbane and Queensland.
// Spine: predict which route the next bus at stop 6291 (Carindale Shopping Centre Interchange) will be, learning from the first
// 10, 20 or 40 Wednesday visits and scoring on all 244. Add-zero: infinite log loss. Add-one at n=20: 3.475 bits, worse than a
// uniform guess (3.32). Script: scratchpad au/b11/p4_crn.py. Lesson family: Laplace (add-one) smoothing; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CARINDALE',
    label: 'Carindale, Brisbane',
    blurb: 'AI and programming classes for Carindale, with a project on guessing the next bus route from a small morning sample.'
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
  slug: 'ai-and-programming-classes-in-carindale-brisbane',
  code: 'crnd',
  accent: '#275551',
  accentRationale: 'Carindale: a deep sea green (hue 174.8), provisional pending a coordinator accent decision; 8.4:1 on white and 6.8:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Carindale',
    eyebrow: 'Carindale, City of Brisbane, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Carindale' },
      { type: 'AdministrativeArea', name: 'City of Brisbane' },
      { type: 'City', name: 'Brisbane' },
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' },
    { slug: 'best-coding-classes-in-brisbane', name: 'Brisbane' }
  ],
  nav: [
    { label: 'Brisbane', href: '/best-coding-classes-in-brisbane' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Carindale, Brisbane',
  title: 'AI and Programming Classes in Carindale, Brisbane',
  description: 'Live online AI and programming classes for Carindale learners aged 6 to adult, with a probability project built on real Carindale bus interchange timetable data.',
  ogDescription: 'A Carindale AI project: guess the next bus route from 20 morning departures, and see why never-seen routes need smoothing.',
  twitterDescription: 'Carindale AI and programming classes, live online, free first lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Carindale',
    description: 'AI, machine learning and programming lessons for Carindale, Brisbane children, teenagers and adults, matched by level and taught live online.'
  },
  h1: 'AI and programming classes in Carindale',
  capsuleQ: 'What AI idea does the Carindale project teach?',
  capsule: 'That a model which has never seen something should not call it impossible. Learning from the first 20 buses at the Carindale interchange, a plain count gives five routes zero chance, so its score on the full day is infinitely bad. Adding one to every count fixes that, yet still loses to simply guessing every route equally.',
  lead: 'Carindale is a suburb of separate houses with a shopping centre and bus interchange near its middle. The Translink timetable for Wednesday 21 October 2026 shows 5,556 stop visits inside the suburb, all by bus, on 23 routes. One stop record, number 6291, collects 244 of those visits from ten routes, a neat small data set for the oldest trick in language models.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Carindale.',
  picks: {
    eyebrow: 'Course picks for Carindale',
    h2: 'AI and programming courses',
    intro: 'Courses that join coding with the maths behind AI. A free trial lesson places each learner.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning ideas built and tested in Python.' },
      { course: 'statistics-probability-maths-course', band: 'Teens and adults', note: 'Probability, sampling and estimation, the ground under AI.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Python and playful AI projects for younger coders.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python with AI services for work and study.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Carindale in the 2021 Census',
      h2: 'Separate houses and an older median age',
      intro: 'Numbers for the Carindale suburb (ABS SAL30540) from the 2021 Census QuickStats page, read on 12 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Carindale headline counts',
          head: ['Measure', 'Carindale'],
          rows: [
            ['People', '16,535'],
            ['Median age', '43'],
            ['Families', '4,768'],
            ['Private dwellings', '6,058'],
            ['People per household', '2.8'],
            ['Motor vehicles per dwelling', '2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Carindale shares next to Queensland',
          head: ['Share', 'Carindale', 'Queensland'],
          rows: [
            ['Separate house', '88.7% (5,093)', '74.8%'],
            ['Flat or apartment', '3.7% (214)', '12.5%'],
            ['Bachelor degree or above', '38.9% (5,282)', '21.9%'],
            ['Professionals among workers', '33.5% (2,803)', '21.4%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary age', p: 'The Census counted 1,029 residents aged 5 to 9 (6.2% of the suburb).' },
            { h3: 'Early teens', p: 'A further 1,132 residents were aged 10 to 14, or 6.9%.' },
            { h3: 'Census timing', p: 'The 2021 count took place in August during the pandemic, so work and travel answers reflect an unusual week.' }
          ]
        },
        {
          kind: 'p',
          text: 'Percentages are rounded by the bureau and small counts are perturbed for privacy. We show the published figures unchanged and do not add age bands or other rows together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Guessing the next bus at stop 6291',
      intro: 'Learners pretend they only saw the first few buses of the morning at Carindale Shopping Centre Interchange, then ask a simple model to give each of the ten routes a probability. The whole Wednesday, 244 visits, is the test.',
      body: [
        {
          kind: 'table',
          caption: 'Average surprise in bits per bus on the full day, lower is better (our calculation)',
          head: ['Smoothing', 'First 10 buses', 'First 20', 'First 40'],
          rows: [
            ['None (add 0)', 'infinite', 'infinite', 'infinite'],
            ['Add 0.1', '4.470', '4.707', '3.542'],
            ['Add 1 (Laplace)', '3.279', '3.475', '3.265'],
            ['Add 2', '3.175', '3.284', '3.187'],
            ['Add 5', '3.175', '3.193', '3.138']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Zero is a trap',
              p: 'The first 20 buses, from 6:11am to 8:39am, cover only five of the ten routes. Raw counts give the other five a probability of zero, so the first one that turns up scores infinitely badly.'
            },
            {
              h3: 'The baseline wins once',
              p: 'Giving every route a tenth scores 3.32 bits. At 20 buses the add-one model scores 3.475, so the honest naive guess beats it.'
            },
            {
              h3: 'Heavier smoothing helps here',
              p: 'Adding 2 or 5 does better than adding 1 at every sample size, because a morning sample is a poor picture of the whole day.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The floor nobody reaches',
          p: 'If a model knew the true daily shares, route 222 with 81 visits and route 209 with 51 among them, it would average 2.85 bits. No model trained on a morning sample can score below that floor.'
        },
        {
          kind: 'p',
          text: 'The departures come from the Translink timetable feed, not from live tracking. The scores are our calculation, using log loss in bits on the full Wednesday after learning from the earliest visits.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'From counts to probabilities',
      h2: 'One added to every count',
      intro: 'Laplace smoothing pretends each possible outcome was seen once more than it was. With ten routes and 20 buses, each route gets its count plus one, divided by 30.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson plan',
          head: ['Step', 'What learners do'],
          rows: [
            ['1', 'Pull the Wednesday visits for stop 6291 and sort them by time.'],
            ['2', 'Count routes in the first 10, 20 and 40 buses.'],
            ['3', 'Turn counts into probabilities with and without smoothing.'],
            ['4', 'Score each model on all 244 visits and compare with an equal guess.']
          ]
        },
        {
          kind: 'p',
          text: 'The same trick appears in spam filters and early word predictors, where a word never seen in training must not wipe out a whole message\'s score. Modern language models use other methods, but the zero-probability problem they solve is the one learners meet here.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Pull coloured counters from a bag and argue about colours that have not appeared yet.' },
            { h3: 'Teenagers', p: 'Code the counts and the scoring in Python, then try other values of the added number.' },
            { h3: 'Adults', p: 'Connect smoothing to Bayesian priors and to the base rates in their own work data.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Carindale details',
      h2: 'An interchange with ten platforms',
      intro: 'From the Translink feed for Wednesday 21 October 2026, the ABS suburb outline and the Queensland 2027 school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Platforms A to J', p: 'The feed lists ten lettered platform records under the Carindale Shopping Centre interchange, plus stop 6291 itself.' },
            { h3: 'Buses only', p: 'No rail stop lies inside the outline; all 5,556 Wednesday visits are by bus.' },
            { h3: '2027 terms', p: 'Term 1 in Queensland state schools runs from Wednesday 27 January to Thursday 25 March 2027.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'Carindale here means the ABS suburb outline of about 10.68 square kilometres. Stops are assigned to it by our own point-in-polygon test.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From chance games to models',
    intro: 'Ages are a starting guess; the trial lesson sets the actual level.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Chance and patterns',
        p: 'Dice, spinners and sorting games in Scratch.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 8 to 12',
        h3: 'First predictions',
        p: 'Python programs that count and guess.',
        courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Machine learning',
        p: 'Training, testing and honest evaluation.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied AI',
        p: 'Models, probability and data work at depth.',
        courses: ['statistics-probability-maths-course', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Does probability still matter when AI does the maths?',
    intro: 'More than ever, because AI outputs are probabilities.',
    p1: 'A chatbot that says "the next bus is route 222" is reporting its most likely answer, not a certainty. Learners who have built a tiny model know there is a whole spread of chances behind every confident sentence.',
    p2: 'They also know what a fair comparison looks like. Our add-one model sounded clever and still lost to an equal guess at 20 samples. Checking against a simple baseline is a habit worth more than any single tool.',
    closer: 'Carindale classes teach AI from the numbers up.',
    blogAnchor: 'whether coding is still worth learning'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Learning online from Carindale',
    intro: 'Lessons happen on a live video call, so the classroom is wherever the laptop is.',
    cells: [
      { h3: 'Teacher on screen', p: 'Explanations, questions and code review happen live in every lesson.' },
      { h3: 'Term-time schedule', p: 'Weekly lessons pause for Queensland school holidays.' },
      { h3: 'Free opening session', p: 'One full lesson at no charge, followed by a written suggestion.' },
      { h3: 'Who learns together', p: 'Groups of fifteen to twenty at one level, or a private teacher.' },
      { h3: 'Twice a week', p: 'About eight lessons a month.' },
      { h3: 'Brisbane and India', p: 'A 6pm Carindale class is 1:30pm for our teachers in India.' }
    ],
    spec: {
      title: 'Steady time zone',
      p: 'Queensland has not used daylight saving since March 1992, according to the IANA time zone database, so the four and a half hour gap to India never moves.'
    }
  },
  fees: {
    h2: 'Carindale class fees',
    intro: 'Fees are the same for every learner.',
    first: 'There is no charge for the opening lesson, which ends with a plan.',
    group: 'Group option: around eight lessons a month with fifteen to twenty classmates.',
    private: 'Private option: around eight lessons a month, one to one.',
    closer: 'Carindale families pay in US dollars, and only once the trial has fixed the course and lesson times. Holidays and missed lessons are covered on the pricing page.'
  },
  reviewsH2: 'Reviews on Google from families',
  book: {
    h2: 'Book a free Carindale class',
    intro: 'Tell us the learner\'s age and interests. A child might begin with chance games in Scratch; a teenager might smooth the stop 6291 model.',
    success: 'Thank you. We will reach out shortly about a Carindale class.'
  },
  faq: {
    h2: 'Carindale AI and programming questions',
    intro: 'Answers for Carindale parents and adult learners.',
    items: [
      { q: 'How many people live in Carindale?', a: 'The 2021 Census counted 16,535 people in the Carindale suburb, with a median age of 43.' },
      {
        q: 'What is Laplace smoothing?',
        a: 'It adds one to every count before turning counts into probabilities, so an outcome that has not been seen yet still gets a small chance instead of zero.'
      },
      {
        q: 'Why is a zero probability a problem?',
        a: 'If a model gives an outcome zero chance and it then happens, the log loss is infinite, and the model has no way to recover from that mistake.'
      },
      {
        q: 'Do children need advanced maths for AI classes?',
        a: 'No. Younger learners use counting and fractions. Logarithms and probability notation come later, in teen and adult courses.'
      },
      {
        q: 'Is the AI course suitable for adults with no coding?',
        a: 'Yes. Adults start with Python basics and move to models once they can read and change code comfortably.'
      },
      {
        q: 'Which bus routes use the Carindale interchange stop most?',
        a: 'On Wednesday 21 October 2026, stop 6291 has 81 visits by route 222 and 51 by route 209, the two busiest of its ten routes.'
      },
      {
        q: 'Do you have a centre in Carindale?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Carindale classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'How many bus routes stop in Carindale?', a: 'The Translink timetable shows 23 routes calling inside the suburb on Wednesday 21 October 2026.' }
    ]
  },
  next: {
    eyebrow: 'More for Brisbane learners',
    h2: 'Next pages to read',
    html: 'Try the <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">Brisbane page</a> for the city overview, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland guide</a> for the state, and <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens</a> for secondary students.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Carindale and Brisbane',
  footerPlaces: [
    { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Think, not just use AI' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-crnd .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 2.8vw, 2.3rem); }
.cg-root.cg-crnd .cg-hero h1 { font-weight: 700; letter-spacing: -0.03em; line-height: 1.02; }
.cg-root.cg-crnd .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-crnd .cg-eyebrow { letter-spacing: 0.07em; font-weight: 640; font-size: 0.8rem; }
.cg-root.cg-crnd .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.012em; }
.cg-root.cg-crnd .cg-grid-3 { gap: clamp(1.1rem, 2.5vw, 1.9rem); }
.cg-root.cg-crnd .cg-table caption { text-align: left; font-weight: 600; font-size: 0.92rem; }
.cg-root.cg-crnd .cg-table td:not(:first-child) { font-variant-numeric: tabular-nums; }
.cg-root.cg-crnd .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-crnd .cg-callout { border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Carindale (SAL30540), ABS Census 2021 QuickStats (read 12 October 2026): 16,535 people; median age 43; 4,768 families; 6,058 private dwellings; 2.8 people per household; 2 vehicles per dwelling; aged 5-9 1,029 (6.2%); aged 10-14 1,132 (6.9%); separate houses 5,093 (88.7%, Queensland 74.8%); flats 214 (3.7%, Queensland 12.5%); bachelor or higher 5,282 (38.9%, Queensland 21.9%); professionals 2,803 (33.5%, Queensland 21.4%). ABS SAL area 10.6841 square kilometres. Translink SEQ GTFS, Wednesday 21 October 2026: 85 stop records in the SAL polygon; 5,556 stop visits, all bus; 23 routes; stop 6291 Carindale Shopping Centre Interchange 244 visits on 10 routes (222:81, 209:51, 177:22, 212:17, 202:15, 203:15, 217:15, 215:14, 225:9, 213:5); platforms A-J under place_intcar. Queensland 2027 Term 1: Wednesday 27 January to Thursday 25 March. Brisbane: no daylight saving since March 1992 (IANA 2026e).',
    localProject: 'Route prediction at stop 6291 from the first 10/20/40 Wednesday visits (06:11 to 07:39 / 08:39 / 10:23), scored by average log loss in bits on all 244 visits. Add-k for k 0/0.1/0.5/1/2/5: n=10 inf/4.47/3.511/3.279/3.175/3.175; n=20 inf/4.707/3.77/3.475/3.284/3.193; n=40 inf/3.542/3.355/3.265/3.187/3.138. Uniform baseline log2(10)=3.32 beats add-one at n=20. Entropy of full-day shares 2.85. Our calculation. Script: scratchpad au/b11/p4_crn.py.',
    requiredMentions: ['16,535', '4,768', '6,058', '88.7% (5,093)', '38.9% (5,282)', '5,556', 'route 222 with 81 visits', 'stop 6291', '3.475'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Carindale suburb and locality (SAL30540), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL30540'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026, downloaded October 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      {
        claim: 'Queensland Department of Education, future school dates: 2027 Queensland term dates (Term 1 Wednesday 27 January to Thursday 25 March).',
        url: 'https://education.qld.gov.au/about-us/calendar/future-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Brisbane follows rule AQ, whose last daylight saving period ended in March 1992.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Passenger numbers or real-time arrivals: not claimed; the data is the scheduled timetable.',
      'Claims about the shopping centre business: not made.',
      'Naming schools in Carindale: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Adding Census age bands into one child total: not done.',
      'Any connection with Brisbane City Council, Translink or the Queensland Department of Education.'
    ]
  }
};
