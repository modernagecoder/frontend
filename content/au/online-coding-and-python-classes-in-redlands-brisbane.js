'use strict';
// Redlands, Brisbane (cg- district page, Australia cluster Phase 8, row 289). Keyword slug online-coding-and-python-classes-in-*,
// council page (ABS LGA36250 Redland City) under Brisbane and Queensland.
// Spine: 691 Translink stop records inside Redland City, 680 numeric IDs and 11 place_ IDs. A function typed is_station(stop_id: int)
// is called with string IDs: mypy 2.4.0 reports 1 arg-type error before running; untyped it raises TypeError; the int() "fix" passes
// mypy and fails at runtime on place_birsta. Script/files: scratchpad au/b11/mp. Lesson family: mypy static type checking.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'REDLANDS',
    label: 'Redlands, Brisbane',
    blurb: 'Online coding and Python classes for Redland City, with a project on catching a stop-ID type mistake before the code runs.'
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
  slug: 'online-coding-and-python-classes-in-redlands-brisbane',
  code: 'rdlc',
  accent: '#731E16',
  accentRationale: 'Redlands: a red-earth brick (hue 5.2), provisional pending a coordinator accent decision; 10.9:1 on white and 8.9:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Redlands',
    eyebrow: 'Redland City, Brisbane, Queensland',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Redland City' },
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
  routeLabel: 'Redlands, Brisbane',
  title: 'Online Coding and Python Classes in Redlands, Brisbane',
  description: 'Live online coding and Python classes for Redlands learners aged 6 to adult, with a type-checking project built on real public transport stop IDs in Redland City.',
  ogDescription: 'A Redlands Python project: 691 stop IDs, 11 that are not numbers, and the type checker that spots the bug first.',
  twitterDescription: 'Redlands online coding and Python classes, live and level-matched, first lesson free.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Redlands',
    description: 'Coding and Python lessons for children, teenagers and adults across Redland City, Brisbane, matched by level and taught live online.'
  },
  h1: 'Online coding and Python classes in Redlands',
  capsuleQ: 'What does a Redlands Python project teach?',
  capsule: 'To let a tool check your assumptions before your users do. Redland City has 691 stop records in the Translink feed, and 11 of their IDs are words, not numbers. A function that treats every ID as a number is wrong, and the type checker mypy says so in one line before the program ever runs.',
  lead: 'Redland City stretches from Thorneside and Capalaba out to the Southern Moreton Bay Islands. On Wednesday 21 October 2026 the Translink timetable has 16,809 stop visits inside the council area on 31 routes: 16,167 by bus, 540 by train and 102 by ferry. Every one of those stops carries an ID, and that is where the lesson starts.',
  wa: 'Hello Modern Age Coders, I would like a free online coding or Python class for a learner in Redlands.',
  picks: {
    eyebrow: 'Course picks for Redlands',
    h2: 'Python and coding courses',
    intro: 'All taught live, in level-matched groups or one to one. The trial lesson finds the right fit.',
    items: [
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python in depth, including type hints and testing.'
      },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python projects on real files and data.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'A gentle start in Python with games and AI.' },
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Logic and sequencing with blocks before typing.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Redland City in the 2021 Census',
      h2: 'A council of family houses by the bay',
      intro: 'Figures for the Redland local government area (ABS LGA36250) from its 2021 Census QuickStats, read on 12 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Redland City headline counts',
          head: ['Measure', 'Redland City'],
          rows: [
            ['People', '159,222'],
            ['Median age', '43'],
            ['Families', '45,763'],
            ['Private dwellings', '65,165'],
            ['People per household', '2.6'],
            ['Motor vehicles per dwelling', '2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Redland City shares next to Queensland',
          head: ['Share', 'Redland City', 'Queensland'],
          rows: [
            ['Separate house', '83.9% (49,276)', '74.8%'],
            ['Aged 10 to 14', '6.8% (10,750)', '6.6%'],
            ['Car as driver to work', '61.6% (47,296)', '59.5%'],
            ['Train to work', '1.0% (780)', '1.1%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary years', p: 'Redland City had 9,447 residents aged 5 to 9 at the Census, 5.9% of its people.' },
            { h3: 'Townhouses and units', p: 'Semi-detached homes, terraces and townhouses made up 11.4% of dwellings, flats 4.4%.' },
            { h3: 'An odd week', p: 'The August 2021 Census was held during the pandemic, so travel and work answers describe that week only.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau rounds its percentages and slightly perturbs small counts for confidentiality. We print the published values and never sum rows into totals the bureau did not publish.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Eleven IDs that are not numbers',
      intro: 'Of the 691 stop records inside Redland City, 680 have numeric IDs. The other 11 group platforms and berths under a name: Birkdale, Cleveland, Ormiston, Thorneside and Wellington Point stations, Capalaba station, Victoria Point Central, three island ferry terminals and Redland Bay Marina.',
      body: [
        {
          kind: 'table',
          caption: 'One bug, four versions of the code (our run, mypy 2.4.0, Python 3.13)',
          head: ['Version', 'mypy before running', 'When it runs'],
          rows: [
            [
              'is_station(stop_id: int), called with text IDs',
              '1 error: incompatible type "str"; expected "int"',
              'TypeError on the first comparison'
            ],
            ['Same code, no type hints', 'nothing to check', 'the same TypeError, found only at run time'],
            ['"Fixed" with int(stop_id)', 'no issues found', 'ValueError on place_birsta'],
            ['is_station(stop_id: str) using startswith("place_")', 'no issues found', 'runs: 691 IDs, 11 grouped places']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'What mypy caught',
              p: 'The loader promises a list of strings and the checker promises an integer. mypy reads both promises and reports the clash at line 11 without touching the data.'
            },
            {
              h3: 'What mypy missed',
              p: 'Wrapping each ID in int() satisfies the types, so mypy is happy. The data still contains "place_birsta", and the program fails on it. Types check shapes, not values.'
            },
            { h3: 'The real fix', p: 'Keep IDs as text, as the feed defines them, and test for the place_ prefix. The checker passes and all 691 records load.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'A sorting myth we tested',
          p: 'Sorting IDs as text instead of numbers can scramble their order. Here it does not matter: 679 numeric IDs have six digits and one, 11370, has five. We checked rather than assumed.'
        },
        {
          kind: 'p',
          text: 'The stop IDs are real Translink records placed in Redland City by our own point-in-polygon test. The four code versions and their outputs come from our run in an isolated environment.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Type hints in Python',
      h2: 'Promises the checker can read',
      intro: 'A type hint such as stop_id: str tells readers and tools what a function expects. Python itself ignores hints when running; mypy reads them and reports mismatches.',
      body: [
        {
          kind: 'table',
          caption: 'The lesson in four moves',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Load stop IDs from the feed and count numeric and text ones.'],
            ['2', 'Write is_station with an int hint and run mypy.'],
            ['3', 'Try the int() shortcut, then watch it fail on real data.'],
            ['4', 'Rewrite with str and a prefix test; rerun both checks.']
          ]
        },
        {
          kind: 'p',
          text: 'Many teams run a type checker on every change, next to their tests. Tests check behaviour on chosen examples; a type checker checks every call site at once. They catch different mistakes, so learners use both.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Young coders', p: 'Sort cards into number and word piles, then find the card that broke the rule.' },
            { h3: 'Teenagers', p: 'Add hints to a real script and fix each mypy message one at a time.' },
            { h3: 'Adults', p: 'Introduce gradual typing to an existing codebase without stopping work.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Across Redland City',
      h2: 'Trains, buses, island ferries and the 2027 terms',
      intro: 'Translink counts for Wednesday 21 October 2026 and 2027 dates from the Queensland Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Island ferries', p: 'The 102 ferry visits counted inside the outline that Wednesday are all at Redland Bay Marina, under one route code, SMBI.' },
            { h3: 'Five rail stations', p: 'Train visits total 540 at the five stations from Thorneside to Cleveland.' },
            { h3: 'School year', p: 'Queensland state school Term 1 runs from Wednesday 27 January to Thursday 25 March 2027.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Area used',
          p: 'Redlands here is the ABS outline of Redland City local government area, about 537 square kilometres. Stops are assigned to it with our own point-in-polygon test, and address-style data appears only as counts.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting cards to typed Python',
    intro: 'Ages are a guide; the free lesson places each learner.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Rules and kinds',
        p: 'Block programs that sort numbers from words.',
        courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course']
      },
      {
        band: 'Ages 8 to 12',
        h3: 'Starting Python',
        p: 'Variables, types and friendly error messages.',
        courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Reliable scripts',
        p: 'Files, hints and checks on real data.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Professional Python',
        p: 'Typing, testing and maintainable code.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Does AI-written code need type checking?',
    intro: 'Yes, and often more than hand-written code.',
    p1: 'AI assistants guess at data shapes from names. Ask for a function about stop IDs and you may well get one that treats them as integers, because many IDs look like numbers.',
    p2: 'Running mypy over generated code is a cheap second opinion. A Redlands learner who has seen int() pass the checker and still crash also knows its limit, and tests the data as well.',
    closer: 'In Redlands classes, learners check AI output with real tools, not hope.',
    blogAnchor: 'is learning to code still worth it'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Studying online from Redlands',
    intro: 'Lessons are live video sessions, so learners on the mainland or the islands join the same way.',
    cells: [
      { h3: 'Teacher present', p: 'Every lesson is taught live, with the learner\'s screen shared.' },
      { h3: 'School holidays', p: 'Classes follow Queensland terms and stop over the holidays.' },
      { h3: 'Free trial', p: 'One full lesson without charge, then a written course suggestion.' },
      { h3: 'Group or private', p: 'Groups of fifteen to twenty at one level, or one to one.' },
      { h3: 'Two per week', p: 'About eight lessons each month.' },
      { h3: 'India hours', p: 'A 6:30pm Redlands lesson is 2pm in India.' }
    ],
    spec: {
      title: 'Fixed offset',
      p: 'Queensland ended its last daylight saving period in March 1992, the IANA time zone database records, so lessons never move with clock changes.'
    }
  },
  fees: {
    h2: 'Redlands class fees',
    intro: 'Fees are identical for every learner.',
    first: 'The first lesson is free and ends with a recommended plan.',
    group: 'Group study: about eight lessons a month, fifteen to twenty learners.',
    private: 'Private study: about eight lessons a month, one to one.',
    closer: 'Redlands fees are billed in US dollars, after the trial has fixed a course and a weekly time. The pricing page explains holidays and missed lessons.'
  },
  reviewsH2: 'What learners and families say on Google',
  book: {
    h2: 'Book a free Redlands lesson',
    intro: 'Share the learner\'s age and interests. A younger child might sort cards in block code; a teenager might type-check the stop loader.',
    success: 'Thank you. We will be in touch about a Redlands lesson soon.'
  },
  faq: {
    h2: 'Redlands coding and Python questions',
    intro: 'Questions Redlands parents and adult learners ask us.',
    items: [
      {
        q: 'How many people live in Redland City?',
        a: 'The 2021 Census counted 159,222 people in the Redland local government area, with a median age of 43.'
      },
      {
        q: 'What is mypy?',
        a: 'mypy is a free static type checker for Python. It reads type hints in the code and reports calls that do not match them, without running the program.'
      },
      { q: 'Do type hints slow Python down?', a: 'No. Python ignores hints at run time. They help readers and tools such as mypy and code editors.' },
      { q: 'When should learners start using type hints?', a: 'Usually after they are comfortable with functions, often in the teen or adult Python courses.' },
      { q: 'Can island families join classes?', a: 'Yes. Classes are online, so any home with a stable internet connection works.' },
      {
        q: 'How many stop records are in Redland City?',
        a: 'Our point-in-polygon count finds 691 Translink stop records inside the council area, 680 with numeric IDs and 11 grouped places.'
      },
      {
        q: 'Do you have a centre in Redlands?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Redlands classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      {
        q: 'Which train stations are in Redland City?',
        a: 'Birkdale, Cleveland, Ormiston, Thorneside and Wellington Point stations sit inside the council outline in the Translink feed.'
      }
    ]
  },
  next: {
    eyebrow: 'More for Brisbane learners',
    h2: 'Further reading',
    html: 'Read the <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">Brisbane page</a> for the region, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland guide</a> for the state, and <a class="cg-inline-link" href="/coding-classes-for-kids-brisbane">kids coding in Brisbane</a> for younger learners.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Redlands and Brisbane',
  footerPlaces: [
    { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-rdlc .cg-hero-grid { align-items: end; gap: clamp(1.15rem, 2.7vw, 2.25rem); }
.cg-root.cg-rdlc .cg-hero h1 { font-weight: 650; letter-spacing: -0.016em; line-height: 1.07; }
.cg-root.cg-rdlc .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-rdlc .cg-eyebrow { letter-spacing: 0.11em; font-weight: 610; font-size: 0.75rem; }
.cg-root.cg-rdlc .cg-section-head h2 { max-width: 25ch; }
.cg-root.cg-rdlc .cg-grid-3 { gap: clamp(0.85rem, 2.1vw, 1.55rem); }
.cg-root.cg-rdlc .cg-table caption { text-align: left; font-style: italic; font-weight: 560; }
.cg-root.cg-rdlc .cg-table td:first-child { font-weight: 560; }
.cg-root.cg-rdlc .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.55rem; }
.cg-root.cg-rdlc .cg-callout { border-radius: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Redland City (LGA36250), ABS Census 2021 QuickStats (read 12 October 2026): 159,222 people; median age 43; 45,763 families; 65,165 private dwellings; 2.6 people per household; 2 vehicles per dwelling; aged 5-9 9,447 (5.9%); aged 10-14 10,750 (6.8%, Queensland 6.6%); separate houses 49,276 (83.9%, Queensland 74.8%); semi-detached/townhouse 6,680 (11.4%); flats 2,559 (4.4%); car as driver 47,296 (61.6%, Queensland 59.5%); train to work 780 (1.0%, Queensland 1.1%). ABS LGA area 537.17 square kilometres. Translink SEQ GTFS, Wednesday 21 October 2026: 691 stop records in the LGA polygon (680 numeric IDs, 679 of six digits plus 11370; 11 place_ IDs: Birkdale, Cleveland, Ormiston, Thorneside, Wellington Point stations, Capalaba station, Victoria Point Central, Karragarra Island, Lamb Island and Macleay Island ferry terminals, Redland Bay Marina); 16,809 stop visits (bus 16,167, train 540, ferry 102 on route SMBI, all at Redland Bay Marina platforms 3 and 4); 31 routes. Queensland 2027 Term 1: Wednesday 27 January to Thursday 25 March. Brisbane: no daylight saving since March 1992 (IANA 2026e).',
    localProject: 'stops.py loads the 691 Redland stop IDs as str and calls is_station(stop_id: int). mypy 2.4.0: stops.py:11: error: Argument 1 to "is_station" has incompatible type "str"; expected "int" [arg-type]; Found 1 error in 1 file. Runtime: TypeError: \'<\' not supported between instances of \'str\' and \'int\'. int() variant: mypy no issues, runtime ValueError: invalid literal for int() with base 10: \'place_birsta\'. str + startswith("place_") variant: mypy no issues, runs, 691 IDs and 11 places. Text vs numeric sort makes no difference on this data. Our run, Python 3.13.6. Files: scratchpad au/b11/mp.',
    requiredMentions: ['159,222', '45,763', '65,165', '83.9% (49,276)', '16,809', '31 routes', '691 stop records', 'place_birsta', 'SMBI'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Redland local government area (LGA36250), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA36250'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026, downloaded October 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      { claim: 'mypy documentation (static type checker for Python).', url: 'https://mypy.readthedocs.io/en/stable/' },
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
      'A text-sorting bug in Redland stop IDs: tested, no difference on this data, so not claimed as a bug.',
      'Passenger numbers: not claimed; the feed is a schedule.',
      'North Stradbroke Island services: not checked, not claimed.',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any connection with Redland City Council, Translink or the Queensland Department of Education.'
    ]
  }
};
