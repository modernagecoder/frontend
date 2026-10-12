'use strict';
// Willetton, Perth (cg- district page, Australia cluster Phase 8, row 311). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), suburb page (ABS SAL51612, City of Canning) under Perth and Western Australia.
// Spine: a stop-number lookup that compares a typed number with the stored one using "is" finds 0 of Willetton's 90
// stop records; "==" finds all 90. Stop numbers run from 10,503 to 29,609, far above the small
// integers CPython reuses, so "is" (identity) fails although the values are equal. CPython 3.13.6, our run.
// Data: PTA-001 Stops (CC BY 4.0). Lesson family: identity vs equality, is vs ==; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'WILLETTON',
    label: 'Willetton, Perth',
    blurb: 'Coding and AI classes for Willetton, where a stop lookup that uses "is" instead of "==" finds none of the suburb\'s 90 stops.'
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
  slug: 'best-coding-and-ai-classes-in-willetton-perth',
  code: 'wltn',
  accent: '#544531',
  accentRationale: 'Willetton: a dark olive brown (hue 34.3), 7.50:1 on #EDE7DA; 25.5 RGB from the nearest Western Australian accent, 12.8 from any other Australian accent and 8.1 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Willetton',
    eyebrow: 'Willetton, City of Canning, Western Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Willetton' },
      { type: 'AdministrativeArea', name: 'City of Canning' },
      { type: 'City', name: 'Perth' },
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' },
    { slug: 'online-coding-and-python-classes-in-perth-western-australia', name: 'Perth' }
  ],
  nav: [
    { label: 'Perth', href: '/online-coding-and-python-classes-in-perth-western-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Willetton, Perth',
  title: 'Best Coding and AI Classes in Willetton, Perth',
  description: 'Live online coding and AI classes for Willetton children, teenagers and adults, from Scratch to Python and AI projects, taught in small groups or one to one.',
  ogDescription: 'A Willetton Python project: 90 stop numbers, one lookup written with "is" that finds none of them, and the same lookup with "==" that finds all 90.',
  twitterDescription: 'Coding and AI for Willetton learners, live online.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Willetton',
    description: 'Level-matched online coding, Python and AI lessons for children, teenagers and adults in Willetton, Perth, taught live in English.'
  },
  h1: 'Coding and AI classes in Willetton',
  capsuleQ: 'Where do Willetton students find the best coding and AI classes?',
  capsule: 'In live online lessons, one to one or in small groups, that run from Scratch at age six through Python to AI projects for teenagers and adults, with real Perth data and an eye for subtle bugs. Willetton had 19,262 residents in the 2021 Census.',
  lead: 'Willetton has 90 public transport stop records, each with a five-digit stop number. Write a lookup that compares the number a person types with the stored one using Python\'s is, and it finds none of them. Change two characters to == and it finds all 90.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Willetton.',
  picks: {
    eyebrow: 'Course picks for Willetton',
    h2: 'Courses that explain how Python really works',
    intro: 'The stop-number bug sits right at the core of the language. These courses go that deep; the trial lesson matches the starting point.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python objects, values and comparisons, understood rather than memorised.' },
      {
        course: 'problem-solving-dsa-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Algorithms and problem solving with careful reasoning about each step.'
      },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'From first scripts to programs that behave as intended.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Beginner Python and AI with plenty of testing.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Willetton in the Census',
      h2: 'Large households and many teenagers',
      intro: 'Selected 2021 Census QuickStats for the suburb of Willetton (ABS code SAL51612), alongside the Western Australian figure.',
      body: [
        {
          kind: 'table',
          caption: 'Willetton headline figures, 2021',
          head: ['Measure', 'Willetton'],
          rows: [
            ['Residents', '19,262'],
            ['Median age', '40'],
            ['Families', '5,328'],
            ['Private dwellings', '6,531'],
            ['People per household', '3.1']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Willetton and Western Australia',
          head: ['Indicator', 'Willetton', 'Western Australia'],
          rows: [
            ['Separate houses', '89.9% (5,540)', '79.7%'],
            ['Adults with a bachelor degree or higher', '39.9% (6,006)', '23.8%'],
            ['Employed people in professional jobs', '33.1% (3,036)', '22.0%'],
            ['People in education attending university', '18.3% (1,262)', '13.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Aged 10 to 14', p: 'Willetton counted 1,951 residents aged 10 to 14, 10.1% of the suburb.' },
            { h3: 'Either side', p: 'There were also 1,499 children aged 5 to 9 and 1,603 young people aged 15 to 19.' },
            { h3: 'Households', p: 'Homes averaged 3.1 people, across about 8.7 square kilometres of the ABS suburb boundary.' }
          ]
        },
        {
          kind: 'p',
          text: 'Because the bureau adjusts small Census cells slightly for privacy, the figures above are reproduced exactly and not combined into totals.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Same number, different object',
      intro: 'The task: a person types a stop number and the program finds the matching Willetton stop. The stored numbers are integers read from the state stops file; the typed number arrives as text and is converted with int(). The first version compared them with is.',
      body: [
        {
          kind: 'table',
          caption: 'Matching 90 typed stop numbers (our run, CPython 3.13.6)',
          head: ['Comparison', 'Matches found', 'What it checks'],
          rows: [
            ['int(typed) is stored', '0 of 90', 'Are these the same object in memory?'],
            ['int(typed) == stored', '90 of 90', 'Do these have the same value?']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Why small numbers seem to work',
          head: ['Expression', 'Result in CPython 3.13.6'],
          rows: [
            ['int(\'200\') is int(\'200\')', 'True'],
            ['int(\'257\') is int(\'257\')', 'False'],
            ['Smallest stop number in Willetton', '10,503'],
            ['Largest stop number in Willetton', '29,609']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'What is checks',
              p: 'is asks whether two names point at one object. Two separately created integers with the same value are usually two objects, so is says False.'
            },
            {
              h3: 'The trap',
              p: 'CPython reuses shared objects for small integers: in our run 200 passed the is test and 257 failed it. Test with small numbers and is appears to work; Willetton\'s stop numbers start at 10,503.'
            },
            {
              h3: 'A warning exists',
              p: 'Write x is 10503 with a literal and Python 3.8 or later prints a SyntaxWarning suggesting ==. Comparing two variables, as here, raises no warning.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The rule',
          p: 'Use == to compare values: numbers, strings, lists. Keep is for identity checks, chiefly x is None. The small-integer cache is an implementation detail that other Python versions may handle differently, so code must never depend on it.'
        },
        {
          kind: 'p',
          text: 'Stop numbers come from the Public Transport Authority of Western Australia open data file; membership of Willetton is our point-in-boundary check. Both comparison runs used CPython 3.13.6, and every count is our own.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Python values and objects',
      h2: 'When to use is, and when ==',
      intro: 'A short table that prevents a long debugging session.',
      body: [
        {
          kind: 'table',
          caption: 'Choosing the comparison',
          head: ['You want to know', 'Use', 'Example'],
          rows: [
            ['Whether a value is missing', 'is None', 'if stop is None:'],
            ['Whether two numbers are equal', '==', 'if number == 10503:'],
            ['Whether two strings match', '==', 'if road == \'Vahland Av\':'],
            ['Whether two names share one list', 'is', 'if a is b:']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Two identical toy cars are equal but not the same car: a game that makes the idea stick.' },
            { h3: 'Secondary learners', p: 'Reproduce the Willetton lookup, find the number where is stops working, and explain why.' },
            { h3: 'Adults', p: 'Search work code for is used with numbers or strings; each one is a bug waiting for larger data.' }
          ]
        },
        {
          kind: 'p',
          text: 'Linters such as Pylint flag comparisons to literals with is, and Python itself warns at compile time. Reading those warnings is part of the habit we teach.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Willetton',
      h2: 'Bus stops without a station',
      intro: 'Local markers from the state stops file and the WA school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'All buses', p: 'All 90 stop records inside Willetton, by our check, are standard bus stops; none are rail. 38 are marked as having a bay.' },
            { h3: 'Main roads', p: 'Burrendah Boulevard and Vahland Avenue carry 14 stop records each, and Apsley Road 12.' },
            { h3: 'Term 1, 2027', p: 'WA public schools return for Term 1 on Monday 1 February 2027, and the term ends on Friday 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Willetton only',
          p: 'These counts are for the suburb of Willetton in the City of Canning. Riverton, Rossmoyne, Shelley, Bull Creek, Leeming, Parkwood and Canning Vale surround it and are counted separately.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From toy cars to Python objects',
    intro: 'The trial lesson, not the age, decides where a learner starts.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and puzzles',
        p: 'Building games and noticing how things compare.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Values, variables and comparisons in real code.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Deeper Python',
        p: 'Objects, memory and algorithmic thinking.',
        courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Python in practice',
        p: 'Reliable code for study and work.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI writes ==. Do you know why it matters?',
    intro: 'Most AI tools get this right. The point is knowing why, so you notice the rare time they do not, or when you edit their code yourself.',
    p1: 'An assistant asked for a stop lookup will almost always write ==. But copy a pattern like "if x is y" from elsewhere, or let a tool refactor quickly, and the bug can appear. It passes every test that uses small numbers and fails on real stop numbers.',
    p2: 'Learners who have watched 0 of 90 turn into 90 of 90 never forget the difference between identity and equality. That depth of understanding is what lets them check AI-written code instead of hoping.',
    closer: 'In Willetton, the learner who knows why == is right can trust the code an AI hands over.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Willetton lessons online',
    intro: 'Each lesson is a live video class joined from home.',
    cells: [
      { h3: 'Watch every keystroke', p: 'The teacher follows the learner\'s screen and stops to ask what each line does.' },
      { h3: 'In step with terms', p: 'Lessons fit Western Australian school terms and holidays.' },
      { h3: 'An opening class free', p: 'A genuine lesson first, then a straight recommendation.' },
      { h3: 'Small level groups', p: 'Five to ten learners at one level, or one to one.' },
      { h3: 'Two sessions each week', p: 'Fixed weekly times, about eight lessons a month.' },
      { h3: 'India time', p: 'Our teachers are in India: a 5:30pm Willetton lesson begins at 3pm India time.' }
    ],
    spec: {
      title: 'Two steady clocks',
      p: 'Perth dropped daylight saving after March 2009 (IANA time zone database) and India has no daylight saving, so lessons keep the same slot year round.'
    }
  },
  fees: {
    h2: 'Willetton class fees',
    intro: 'Three prices, no extras.',
    first: 'The opening lesson is free, with written feedback afterwards.',
    group: 'Group classes: roughly eight lessons a month, five to ten learners.',
    private: 'Private classes: roughly eight lessons a month, one teacher.',
    closer: 'Willetton families pay in US dollars and only after the trial has settled a course and a time. Holiday and absence arrangements are on the pricing page.'
  },
  reviewsH2: 'Reviews from our students and parents on Google',
  book: {
    h2: 'Book a free Willetton lesson',
    intro: 'Share the learner\'s age and interests. A high school student might begin with the is versus == lookup; a younger child might begin with a Scratch comparison game.',
    success: 'Thank you. We will be in touch shortly about a Willetton lesson.'
  },
  faq: {
    h2: 'Willetton coding and AI questions',
    intro: 'Questions Willetton families and adult learners commonly ask.',
    items: [
      {
        q: 'What is the population of Willetton?',
        a: 'The 2021 Census QuickStats count 19,262 residents in the suburb of Willetton, with 5,328 families and 3.1 people per household.'
      },
      {
        q: 'What is the difference between is and == in Python?',
        a: 'The == operator compares values; is checks whether two names refer to the very same object. Equal values can be different objects, so is can be False when == is True.'
      },
      {
        q: 'Why does is sometimes work with numbers?',
        a: 'CPython reuses shared objects for small integers, so is can happen to be True for them; in our run 200 matched and 257 did not. Python\'s own FAQ warns against identity tests on ints and strings.'
      },
      {
        q: 'What did the Willetton lookup show?',
        a: 'Comparing 90 typed stop numbers with the stored ones, is matched 0 and == matched all 90, because Willetton stop numbers range from 10,503 to 29,609.'
      },
      { q: 'What age suits a first coding class?', a: 'Six, with Scratch. Typed Python tends to come between eight and ten.' },
      { q: 'Is Claude used with teenagers?', a: 'No. Our Claude-based courses accept only adults aged 18 and over; teenagers learn with other AI tools.' },
      {
        q: 'Is there a classroom in Willetton?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Willetton learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Is Copilot Studio offered to Willetton groups?', a: 'No. Copilot Studio is private-lesson only; groups build agents with Python code.' }
    ]
  },
  next: {
    eyebrow: 'Explore Perth and Western Australia',
    h2: 'More for Willetton learners',
    html: '<a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">The Perth page</a> covers the wider city and <a class="cg-inline-link" href="/coding-classes-for-kids-perth">coding for Perth kids</a> focuses on children. In the state\'s south-west, <a class="cg-inline-link" href="/best-coding-classes-in-busselton">Busselton</a> has its own page, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">the Western Australia guide</a> links everything else.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Willetton and Perth',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/best-coding-classes-in-busselton', label: 'Busselton' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' }
  ],
  personalityCss: `
.cg-root.cg-wltn .cg-hero-grid { align-items: start; gap: clamp(0.9rem, 2.85vw, 2.25rem); }
.cg-root.cg-wltn .cg-hero h1 { font-weight: 685; letter-spacing: -0.018em; line-height: 1.05; }
.cg-root.cg-wltn .cg-capsule { border-left: 6px solid var(--cg-accent); padding: 0.48rem 0 0.48rem 1.18rem; }
.cg-root.cg-wltn .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-wltn .cg-section-head h2 { max-width: 20ch; letter-spacing: -0.008em; }
.cg-root.cg-wltn .cg-grid-3 { gap: clamp(0.92rem, 2.35vw, 1.78rem); }
.cg-root.cg-wltn .cg-table caption { font-weight: 665; text-align: left; letter-spacing: 0.016em; }
.cg-root.cg-wltn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wltn .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.78rem; }
.cg-root.cg-wltn .cg-callout { border-left-width: 3px; border-radius: 7px; }
`,
  dossier: {
    curriculumAuthority: 'Willetton (SAL51612), City of Canning. ABS Census 2021 QuickStats (read 12 October 2026): 19,262 people; median age 40; 5,328 families; 6,531 private dwellings; 3.1 per household; separate houses 5,540 (89.9%, WA 79.7%); bachelor or higher 6,006 (39.9%, WA 23.8%); professionals 3,036 (33.1%, WA 22.0%); university 1,262 (18.3%, WA 13.9%); aged 5-9 1,499; 10-14 1,951 (10.1%); 15-19 1,603. ABS SAL area 8.743 sq km; council verified by ABS LGA point query (Canning). PTA-001: 90 records inside the SAL polygon, all Standard; bay Y 38; labels WILLETTON 89, BULL CREEK 1; Burrendah Bvd 14, Vahland Av 14, Apsley Rd 12; stop numbers 10,503 to 29,609. Neighbours (ABS touches): Bull Creek, Canning Vale, Leeming, Parkwood, Riverton, Rossmoyne, Shelley. WA 2027 Term 1: Monday 1 February to Friday 9 April. Perth no daylight saving since March 2009 (IANA).',
    localProject: 'is vs ==. 90 Willetton stop numbers (ints from PTA-001); typed = str(n); int(typed) is n -> 0 of 90; int(typed) == n -> 90 of 90 (CPython 3.13.6). int(\'200\') is int(\'200\') True; int(\'257\') is int(\'257\') False. Statewide minimum stop number 10,000, so no stop number falls in the cached range. compile() of x is 10503 emits SyntaxWarning: "is" with \'int\' literal. Did you mean "=="?',
    requiredMentions: ['6,531', '5,540', '1,951', 'Burrendah Boulevard', 'Vahland Avenue', '10,503', '29,609', '0 of 90', 'SyntaxWarning'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Willetton suburb and locality (SAL51612), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL51612'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities and Local Government Areas boundary services, used for our point-in-boundary checks and areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Public Transport Authority of Western Australia, Stops (PTA-001), Creative Commons Attribution 4.0, published on data.wa.gov.au; 16,822 stop records read from the SLIP map service on 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/public-transport-authority-stops-bus-stops'
      },
      {
        claim: 'Python documentation, Built-in Types, comparisons: is and is not test object identity, while == compares values.',
        url: 'https://docs.python.org/3/builtins/stdtypes.html#comparisons'
      },
      {
        claim: 'Python Programming FAQ, When can I rely on identity tests with the is operator?: identity tests should not be used to check constants such as int and str.',
        url: 'https://docs.python.org/3/faq/programming.html'
      },
      {
        claim: 'WA Department of Education, future term dates: 2027 public school terms as gazetted.',
        url: 'https://www.education.wa.edu.au/future-term-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Perth follows rule AW, whose last daylight saving period ended in March 2009.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'That AI assistants commonly write is for numbers: not claimed; the page says they almost always write ==.',
      'That the small-integer cache is guaranteed: rejected; it is a CPython implementation detail.',
      'Passenger or service numbers at Willetton stops: not claimed.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Canning or the Public Transport Authority.'
    ]
  }
};
