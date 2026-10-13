'use strict';
// Sunnybank, Brisbane (cg- district page, Australia cluster Phase 8, row 283). Keyword slug best-coding-and-ai-classes-in-*,
// suburb page (ABS SAL32694, City of Brisbane) under Brisbane and Queensland.
// Spine: Horner's method. Hourly Wednesday stop visits in the Translink feed, fitted by polynomials of degree 2 to 4 and
// evaluated at 21 hours two ways; the same rule parses digit strings. Script: scratchpad au/b11/p1_snb.py.
// Lesson family: Horner's method; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'SUNNYBANK',
    label: 'Sunnybank, Brisbane',
    blurb: 'Coding and AI classes for Sunnybank, with a project on evaluating polynomials the fast way using one day of bus and train stop visits.'
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
  slug: 'best-coding-and-ai-classes-in-sunnybank-brisbane',
  code: 'snbk',
  accent: '#7D2A4C',
  accentRationale: 'Sunnybank: a muted raspberry (hue 335.4) found by search at least 10 RGB units from all 2,215 colours in content, the shared stylesheets and the claims log; 9.1:1 on white and 7.4:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Sunnybank',
    eyebrow: 'Sunnybank, City of Brisbane, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Sunnybank' },
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
  routeLabel: 'Sunnybank, Brisbane',
  title: 'Best Coding and AI Classes in Sunnybank, Brisbane',
  description: 'Live online coding and AI classes for Sunnybank learners aged 6 to 67: Python, maths through code and AI projects, in small groups or one to one. First lesson free.',
  ogDescription: 'A Sunnybank coding project: 3,352 Wednesday stop visits, a polynomial curve, and why Horner\'s method needs fewer than half the multiplications.',
  twitterDescription: 'Sunnybank coding and AI classes, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Sunnybank',
    description: 'Level-matched coding, Python and AI lessons for children, teenagers and adults in Sunnybank, Brisbane, taught live online in English.'
  },
  h1: 'Coding and AI classes in Sunnybank',
  capsuleQ: 'What makes the best coding class for a Sunnybank learner?',
  capsule: 'One that turns local data into real reasoning. Our Sunnybank project fits a curve to a day of bus and train stop visits and then evaluates it with Horner\'s method, which reaches the same values with 84 multiplications instead of 210. Learners see why the order of the arithmetic matters, not just the answer.',
  lead: 'Sunnybank sits on Mains Road with two railway stations, Altandi and Banoon, inside the suburb outline. On Wednesday 21 October 2026 the Translink timetable gives 3,352 scheduled stop visits at its 66 stop records. That single column of hourly counts is enough to teach a classic piece of computer science.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Sunnybank.',
  picks: {
    eyebrow: 'Course picks for Sunnybank',
    h2: 'Courses that build careful coders',
    intro: 'Each course mixes real programs with the maths underneath. The free first lesson places the learner at the right level.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first scripts to data projects like the Sunnybank curve.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Block coding that grows into loops and patterns.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Fitting, plotting and checking models on open data.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python with algorithms, cost counting and testing.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Sunnybank in the 2021 Census',
      h2: 'A suburb of houses and degree holders',
      intro: 'Figures for the Sunnybank suburb (ABS SAL32694), copied from its 2021 QuickStats page on 12 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Sunnybank headline counts',
          head: ['Measure', 'Sunnybank'],
          rows: [
            ['People', '8,892'],
            ['Median age', '35'],
            ['Families', '2,160'],
            ['Private dwellings', '3,238'],
            ['People per household', '3'],
            ['Motor vehicles per dwelling', '1.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Sunnybank against Queensland',
          head: ['Share', 'Sunnybank', 'Queensland'],
          rows: [
            ['Separate houses', '85.8% (2,457)', '74.8%'],
            ['Semi-detached, terrace or townhouse', '13.1% (375)', '11.7%'],
            ['Bachelor degree or above', '33.1% (2,502)', '21.9%'],
            ['Train to work', '3.2% (128)', '1.1%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary age', p: 'Sunnybank counted 470 residents aged 5 to 9, or 5.3% of its people.' },
            { h3: 'Lower secondary', p: 'A further 453 were 10 to 14, which is 5.1% of the suburb.' },
            {
              h3: 'Home as office',
              p: '499 workers, 12.5%, worked at home on Census day in August 2021, during the pandemic, so treat it as a snapshot of that week.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau rounds percentages and lightly adjusts small counts to protect privacy. We print each value exactly as published and never build new totals by adding published rows together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'One curve, two ways to evaluate it',
      intro: 'We counted Wednesday stop visits in each hour from 4am to the hour after midnight (the feed writes it as hour 24), fitted polynomials to those 21 counts, and evaluated every fit at all 21 hours.',
      body: [
        {
          kind: 'table',
          caption: 'Multiplications to evaluate each fit 21 times (our count)',
          head: ['Degree', 'Naive powers', 'Horner', 'Largest difference'],
          rows: [
            ['2', '63', '42', '1.1 x 10^-13'],
            ['3', '126', '63', '6.8 x 10^-13'],
            ['4', '210', '84', '1.3 x 10^-12']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The naive way',
              p: 'Compute x squared, x cubed and x to the fourth separately, multiply each by its coefficient, then add. Degree 4 costs 10 multiplications per hour.'
            },
            {
              h3: 'Horner\'s way',
              p: 'Nest the brackets: start with the top coefficient, multiply by x, add the next one, repeat. Degree 4 costs exactly 4 multiplications per hour.'
            },
            {
              h3: 'Same answer',
              p: 'Both methods agree to within about a trillionth of a stop visit. Floating point rounding differs slightly, and Horner usually rounds less because it does fewer steps.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The curve is the weak part',
          p: 'The busiest hour in the data is 7am with 301 visits, and 8am has 258. Even the degree 4 curve predicts only about 213 at 8am, a root mean square error near 48 visits. Horner makes evaluation cheap; it cannot make a smooth curve fit a timetable with two rush hours.'
        },
        {
          kind: 'p',
          text: 'All counts are our own tally of scheduled stop visits in the Translink feed for one Wednesday. A visit is one bus or train calling at one stop record, so a train stopping at a platform counts once even though many people board.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Horner in everyday code',
      h2: 'Reading a number is Horner\'s method too',
      intro: 'Turning the text "310036" into the number 310,036 means: start at zero, multiply by ten, add the next digit, and repeat. That loop is Horner\'s rule with x equal to ten.',
      body: [
        {
          kind: 'table',
          caption: 'Sunnybank stop IDs in the feed',
          head: ['Kind of ID', 'Count'],
          rows: [
            ['Digit-only IDs', '63'],
            ['Four digits long', '41'],
            ['Five digits long', '13'],
            ['Six digits long', '9'],
            ['Station IDs starting with place_', '3']
          ]
        },
        {
          kind: 'p',
          text: 'Parsing all 63 digit-only IDs by hand takes 283 multiply-and-add steps, one per digit. The 3 station IDs are words, so a learner\'s parser must check the text first or it will stop on them.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Build a number one digit at a time with Scratch blocks and watch the running total grow.' },
            {
              h3: 'Teenagers',
              p: 'Write both evaluators in Python, count the multiplications with a counter variable, and plot the fitted curve over the real hourly counts.'
            },
            { h3: 'Adults', p: 'Profile the two versions on a million points and read why numerical libraries use the nested form.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Sunnybank',
      h2: 'Stations, routes and the school year',
      intro: 'From the Translink feed for Wednesday 21 October 2026 and the Queensland Department of Education calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Two stations',
              p: 'Altandi and Banoon stations lie inside the suburb outline. Trains made 367 of the 3,352 Wednesday stop visits; buses made the other 2,985.'
            },
            {
              h3: '21 routes',
              p: 'Twenty-one bus and rail routes call at a Sunnybank stop on that Wednesday. The single busiest stop record is Mains Rd at Altandi, stop 68.'
            },
            { h3: 'Term 1 of 2027', p: 'Queensland state school students start on Wednesday 27 January 2027, and Term 1 runs to Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'Stops are counted inside the ABS outline of the Sunnybank suburb, about 4.49 square kilometres. Being inside is our point-in-polygon test, not an official stop list, and neighbouring Sunnybank Hills is a separate suburb.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From number blocks to numerical code',
    intro: 'Ages are guides only; the free lesson decides the starting rung.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Patterns and loops',
        p: 'Scratch projects about repeating steps, counting and simple sequences.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'First Python',
        p: 'Variables, loops and small calculations with real numbers.',
        courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Data and algorithms',
        p: 'Python projects that count their own cost and test their results.',
        courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Efficient code',
        p: 'Algorithms, numerical care and AI tools for real projects.',
        courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI can write the polynomial code, why learn it?',
    intro: 'Because someone still has to know which version is cheaper and whether the curve deserves trust.',
    p1: 'Ask an AI assistant for a function that evaluates a polynomial and it may hand back either version. Both run. Only a learner who can count the work, as our Sunnybank table does, will notice that one does two and a half times as many multiplications at degree four.',
    p2: 'The same habit catches the bigger mistake. The fitted curve looks smooth and confident, yet it misses the 8am rush by about 45 visits. Learners who compare a model with the raw counts stop treating a tidy chart as proof.',
    closer: 'Sunnybank learners leave able to read, cost and check the code an AI suggests.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Sunnybank classes run',
    intro: 'Every lesson is a live video class, joined from home anywhere in Sunnybank.',
    cells: [
      { h3: 'Hands on keyboard', p: 'The learner writes the code; the teacher watches the shared screen and guides.' },
      { h3: 'Term rhythm', p: 'Classes follow Queensland school terms and pause for the holidays.' },
      { h3: 'Free first class', p: 'One full lesson costs nothing and ends with a suggested course.' },
      { h3: 'Groups', p: 'Fifteen to twenty learners at a matched level, or one to one.' },
      { h3: 'Twice a week', p: 'Two live lessons each week, about eight in a month.' },
      { h3: 'Clocks that stay put', p: 'Brisbane keeps the same time all year, so a 5pm Sunnybank lesson is always 12:30pm in India, where our teachers are.' }
    ],
    spec: {
      title: 'Time zone note',
      p: 'Queensland has not used daylight saving since March 1992 (IANA time zone database), so Sunnybank class times never shift when southern states change their clocks.'
    }
  },
  fees: {
    h2: 'Sunnybank class fees',
    intro: 'One price list for every family.',
    first: 'Your first lesson is free and comes with a written next step.',
    group: 'Group classes: about eight lessons a month with fifteen to twenty learners.',
    private: 'One to one: about eight lessons a month with a dedicated teacher.',
    closer: 'Sunnybank families pay in US dollars. Nothing is charged until the trial has fixed a course and a time; holiday and missed-lesson rules are on the pricing page.'
  },
  reviewsH2: 'What learners and parents say on Google',
  book: {
    h2: 'Book a free Sunnybank class',
    intro: 'Share the learner\'s age and interests. A young child might start with Scratch patterns; a teenager might fit the Sunnybank curve and count its cost.',
    success: 'Thank you. We will contact you soon about a Sunnybank class.'
  },
  faq: {
    h2: 'Sunnybank coding and AI questions',
    intro: 'Questions Sunnybank families ask before the first lesson.',
    items: [
      { q: 'How many people live in Sunnybank?', a: 'The 2021 Census counted 8,892 people in the Sunnybank suburb, with a median age of 35.' },
      {
        q: 'What is Horner\'s method?',
        a: 'Horner\'s method evaluates a polynomial by nesting it: multiply by x and add the next coefficient, again and again. A degree n polynomial then needs only n multiplications.'
      },
      { q: 'Do children need maths to start coding?', a: 'No. Young learners start with Scratch blocks, and the maths grows naturally as their projects do.' },
      {
        q: 'Which language do Sunnybank teenagers learn?',
        a: 'Most start with Python, because it reads clearly and handles data well, then add JavaScript or Java as their goals need.'
      },
      { q: 'Are the classes live?', a: 'Yes. Every lesson is taught live over video, with the learner sharing their screen while they code.' },
      { q: 'Can adults join?', a: 'Yes. We teach learners up to age 67, in adult groups or one to one.' },
      {
        q: 'Do you have a centre in Sunnybank?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Sunnybank classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Which train stations are in Sunnybank?', a: 'Altandi and Banoon stations are inside the ABS outline of the Sunnybank suburb.' }
    ]
  },
  next: {
    eyebrow: 'More for Brisbane learners',
    h2: 'Keep exploring',
    html: 'Read the <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">Brisbane guide</a> for the city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland page</a> for the state picture, and <a class="cg-inline-link" href="/coding-classes-for-kids-brisbane">coding for kids in Brisbane</a> for younger starters.',
    waLabel: 'Chat with us on WhatsApp'
  },
  footerHeading: 'Sunnybank and Brisbane',
  footerPlaces: [
    { href: '/problem-solving-through-coding-australia', label: 'Problem solving through coding' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-snbk .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 2.6vw, 2.2rem); }
.cg-root.cg-snbk .cg-hero h1 { font-weight: 640; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-snbk .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-snbk .cg-eyebrow { letter-spacing: 0.12em; font-weight: 600; font-size: 0.8rem; }
.cg-root.cg-snbk .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.004em; }
.cg-root.cg-snbk .cg-grid-3 { gap: clamp(0.9rem, 2.1vw, 1.6rem); }
.cg-root.cg-snbk .cg-table caption { text-align: left; font-weight: 620; }
.cg-root.cg-snbk .cg-table td:last-child { text-align: right; }
.cg-root.cg-snbk .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-snbk .cg-callout { border-radius: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Sunnybank (SAL32694), ABS Census 2021 QuickStats (read 12 October 2026): 8,892 people; median age 35; 2,160 families; 3,238 private dwellings; 3 people per household; 1.8 vehicles per dwelling; aged 5-9 470 (5.3%); 10-14 453 (5.1%); separate houses 2,457 (85.8%, Queensland 74.8%); semi-detached 375 (13.1%, Queensland 11.7%); bachelor or higher 2,502 (33.1%, Queensland 21.9%); train to work 128 (3.2%, Queensland 1.1%); worked at home 499 (12.5%). ABS SAL area 4.4879 square kilometres. Translink SEQ GTFS (feed 7 October to 6 December 2026), Wednesday 21 October 2026: 66 stop records inside the SAL polygon; 3,352 scheduled stop visits (bus 2,985, train 367); 21 routes; stations Altandi and Banoon; busiest stop record Mains Rd at Altandi, stop 68. Queensland 2027 Term 1: Wednesday 27 January to Thursday 25 March. Brisbane: no daylight saving since March 1992 (IANA 2026e).',
    localProject: 'Hourly scheduled stop visits, Sunnybank, Wednesday 21 October 2026, hours 4 to 24: 7, 50, 105, 301, 258, 224, 203, 198, 191, 197, 187, 246, 266, 274, 225, 104, 86, 83, 80, 53, 14 (total 3,352; peak 7am 301). numpy polyfit degrees 2, 3, 4 evaluated at 21 hours: naive powers 63, 126, 210 multiplications; Horner 42, 63, 84; largest difference 1.1e-13, 6.8e-13, 1.3e-12; RMSE 51.7, 49.5, 47.8; degree 4 predicts 212.9 at 8am against 258. Stop IDs: 63 digit-only (41 four-digit, 13 five-digit, 9 six-digit), 283 digits in total, 3 place_ station IDs. Script: scratchpad au/b11/p1_snb.py.',
    requiredMentions: [
      '8,892',
      '13.1% (375)',
      '3,238',
      '470 residents aged 5 to 9',
      '2,502',
      '3,352',
      'Banoon station',
      'Mains Rd at Altandi, stop 68',
      '283 multiply-and-add steps'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Sunnybank suburb and locality (SAL32694), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL32694'
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
        claim: 'NumPy documentation, numpy.polyfit and numpy.polyval (polyval uses Horner\'s scheme).',
        url: 'https://numpy.org/doc/stable/reference/generated/numpy.polyval.html'
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
      'Passenger numbers or boardings at Sunnybank stops: not claimed; the feed gives scheduled stop visits, not people.',
      'Sunnybank Hills figures: a separate ABS suburb, not used.',
      'Reasons for the 7am peak or the afternoon pattern: not claimed.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Sums of Census age bands into a child total: not computed.',
      'Any affiliation with Brisbane City Council, Translink or the Queensland Department of Education.'
    ]
  }
};
