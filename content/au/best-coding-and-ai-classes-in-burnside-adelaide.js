'use strict';
// Burnside, Adelaide (cg- district page, Australia cluster Phase 8, row 319). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), suburb page (ABS SAL40192, Burnside (SA), City of Burnside) under Adelaide and
// South Australia.
// Spine: a script asserts that every Burnside stop record has Sunday service. Run normally it stops with
// AssertionError: 9 stops have no Sunday service. Run with python -O, the assert is removed and the script prints
// "every stop served on Sunday; average 7.6 visits per stop". Our run, scratchpad au/b15/brns_assert.py, GTFS v1708.
// Lesson family: asserts removed under -O, assert vs raise for validation; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BURNSIDE',
    label: 'Burnside, Adelaide',
    blurb: 'Coding and AI classes for Burnside, where a data check that catches nine stops without Sunday buses vanishes when Python runs with one extra flag.'
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
  slug: 'best-coding-and-ai-classes-in-burnside-adelaide',
  code: 'brns',
  accent: '#365A3F',
  accentRationale: 'Burnside: a eucalypt green (hue 135.0), 6.33:1 on #EDE7DA; 27.7 RGB from the nearest South Australian accent, 13.2 from any other Australian accent and 8.1 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Burnside',
    eyebrow: 'Burnside, City of Burnside, South Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Burnside' },
      { type: 'AdministrativeArea', name: 'City of Burnside' },
      { type: 'City', name: 'Adelaide' },
      { type: 'AdministrativeArea', name: 'South Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-south-australia', name: 'South Australia' },
    { slug: 'ai-and-programming-classes-in-adelaide', name: 'Adelaide' }
  ],
  nav: [
    { label: 'Adelaide', href: '/ai-and-programming-classes-in-adelaide' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Burnside, Adelaide',
  title: 'Best Coding and AI Classes in Burnside, Adelaide',
  description: 'Live online coding and AI classes for Burnside children, teenagers and adults, from Scratch to Python and AI projects on real Adelaide data, in groups or one to one.',
  ogDescription: 'A Burnside Python project: 18 stop records, 9 with no Sunday buses, and the data check that silently disappears under python -O.',
  twitterDescription: 'Coding and AI for Burnside learners, live online.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Burnside',
    description: 'Level-matched online coding, Python and AI lessons for children, teenagers and adults in Burnside, Adelaide, taught live in English.'
  },
  h1: 'Coding and AI classes in Burnside',
  capsuleQ: 'Where should Burnside learners look for the best coding and AI classes?',
  capsule: 'At live online lessons, private or in a small group, that take children from Scratch at six to Python and AI as teenagers and adults, with projects built on real Adelaide data and careful checks. Burnside counted 3,060 residents at the 2021 Census.',
  lead: 'On each of the three Sundays we checked, half of Burnside\'s bus stop records saw no buses at all. A data script written to guard against that, using Python\'s assert, catches it at once. Run the same script with the -O optimisation flag and the guard disappears: the script announces that every stop is served.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Burnside.',
  picks: {
    eyebrow: 'Course picks for Burnside',
    h2: 'Courses that make data checks dependable',
    intro: 'The Sunday-service project is about validation, error handling and knowing how Python runs. These courses teach it; the trial lesson finds the starting point.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Exceptions, assertions and validating real data properly.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Robust Python for scripts that others will run.'
      },
      {
        course: 'data-analysis-mastery-course-college',
        band: 'University and adult',
        note: 'Checking data before analysis, with checks that cannot be switched off.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python projects with simple built-in checks.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Burnside in the Census',
      h2: 'A foothills suburb of families',
      intro: 'Census 2021 QuickStats for the suburb of Burnside (ABS code SAL40192), with South Australia for comparison.',
      body: [
        {
          kind: 'table',
          caption: 'Burnside residents, 2021',
          head: ['Measure', 'Burnside'],
          rows: [
            ['Residents', '3,060'],
            ['Median age', '43'],
            ['Families', '872'],
            ['Private dwellings', '1,257'],
            ['People per household', '2.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Burnside set against South Australia',
          head: ['Indicator', 'Burnside', 'South Australia'],
          rows: [
            ['Adults with a bachelor degree or higher', '49.6% (1,222)', '22.7%'],
            ['Semi-detached, row or townhouse homes', '25.6% (294)', '14.6%'],
            ['Employed residents working from home', '17.2% (255)', '9.6%'],
            ['Employed people in professional jobs', '39.6% (585)', '21.5%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'School ages', p: 'Residents aged 5 to 9 numbered 229, with 219 aged 10 to 14 and 210 aged 15 to 19.' },
            { h3: 'Households', p: 'Homes held 2.7 people on average, and 810 were separate houses.' },
            { h3: 'Size', p: 'The ABS suburb boundary covers about 1.7 square kilometres in Adelaide\'s eastern foothills.' }
          ]
        },
        {
          kind: 'p',
          text: 'The Census bureau alters small counts very slightly to keep people anonymous, so we reproduce every figure unchanged and calculate no totals from them.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'A check that a flag can switch off',
      intro: 'The script collects Sunday 25 October 2026 visits for each of the 18 stop records inside Burnside, asserts that none is missing, then reports an average. We ran it twice: once normally, once with python -O.',
      body: [
        {
          kind: 'table',
          caption: 'The same script, two ways to run it (our run, Python 3.13.6)',
          head: ['Command', 'Last line printed'],
          rows: [
            ['python brns_assert.py', 'AssertionError: 9 stops have no Sunday service'],
            ['python -O brns_assert.py', 'every stop served on Sunday; average 7.6 visits per stop']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'What the timetable actually shows (our count)',
          head: ['Day', 'Stop records with service', 'Routes'],
          rows: [
            ['Wednesday 21 October 2026', '18 of 18', '7'],
            ['Sunday 25 October 2026', '9 of 18', '2: 141 and 142']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'What -O does',
              p: 'Python\'s -O flag removes every assert statement before the code runs. The check is not skipped at a decision point; it is simply gone.'
            },
            {
              h3: 'The false report',
              p: 'Without the check, the script divides 136 Sunday visits by all 18 records and calls it an average of 7.6. The 9 stops that are served average 15.1.'
            },
            { h3: 'Which stops', p: 'The unserved Sunday records are all on Greenhill Road; the Glynburn Road and Hallett Road records keep a Sunday service.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'assert or raise?',
          p: 'assert is for conditions that should be impossible if the code is right, as a developer\'s aid. Checks on incoming data belong in an if statement that raises an exception, such as ValueError, which runs whatever flags are used.'
        },
        {
          kind: 'p',
          text: 'The timetable is Adelaide Metro open data, feed version 1708. Burnside membership is our point-in-boundary check, and both printed lines come from our own runs of the same file.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Validating data',
      h2: 'Checks that always run',
      intro: 'The fix is a few characters longer than the assert, and it cannot be optimised away.',
      body: [
        {
          kind: 'table',
          caption: 'assert compared with an explicit check',
          head: ['Aspect', 'assert missing == []', 'if missing: raise ValueError(...)'],
          rows: [
            ['Runs under python -O', 'No, removed', 'Yes'],
            ['Intended for', 'Internal sanity checks', 'Validating inputs and data'],
            ['Exception type', 'AssertionError', 'Any type you choose'],
            ['Burnside Sunday data', 'Caught only without -O', 'Always caught']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Add an "is everyone here?" check before a Scratch game starts, and see what happens when a sprite is missing.' },
            { h3: 'Secondary learners', p: 'Run the Burnside script both ways, then rewrite the check as a raise and prove it survives -O.' },
            { h3: 'Adults', p: 'Audit production scripts for data checks written as assert; each is a guard that may not be there in deployment.' }
          ]
        },
        {
          kind: 'p',
          text: 'Few people run Python with -O on purpose, but some deployment tools and environment settings such as PYTHONOPTIMIZE switch it on. Validation that depends on it being off is fragile.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Burnside',
      h2: 'Greenhill, Glynburn and Hallett roads',
      intro: 'Details from the timetable that belong to Burnside itself.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Weekday service',
              p: 'On Wednesday 21 October 2026 the 18 stop records had 440 scheduled visits on 7 routes, by our count; 14 were school bus services.'
            },
            { h3: 'Busiest record', p: 'Stop 20 on Hallett Road (east side) had the most Wednesday visits, 37.' },
            { h3: 'No rail or tram', p: 'Every Burnside stop record is served by buses only.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Burnside suburb only',
          p: 'Figures here cover the suburb of Burnside, not the whole City of Burnside. Stonyfell, Beaumont, Hazelwood Park, Leabrook, Erindale, Waterfall Gully and Greenhill border it and are counted separately.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From roll calls to robust validation',
    intro: 'Ages are approximate; a trial lesson shows where each learner fits.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games with simple checks and conditions.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python basics',
        p: 'Conditions, loops and first error messages.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with data',
        p: 'Exceptions and validation on real datasets.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Robust Python',
        p: 'Code that behaves the same wherever it runs.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI likes assert. Do you know when it vanishes?',
    intro: 'AI tools often add assert lines as quick guards, which is fine for development and risky for data checks.',
    p1: 'Ask an assistant to "make sure every stop has Sunday service" and a one-line assert is a likely answer. It looks responsible and works in testing. Deployed with optimisation on, it would let the Burnside report claim full Sunday coverage that does not exist.',
    p2: 'Learners who have seen the -O run print a false sentence know to turn data checks into explicit exceptions. That small edit is the difference between a guard and a decoration.',
    closer: 'In Burnside, the learner who knows how Python runs writes checks that stay switched on.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Burnside lessons, live online',
    intro: 'Every class happens over video from home.',
    cells: [
      { h3: 'Run it both ways', p: 'Learners try their code in different settings while the teacher watches the results.' },
      { h3: 'State school calendar', p: 'Lessons follow South Australian terms and pause for holidays.' },
      { h3: 'No-cost opening class', p: 'One full lesson free, with a written suggestion after.' },
      { h3: 'Fifteen to twenty learners', p: 'Grouped by level, or one-to-one teaching.' },
      { h3: 'Twice weekly', p: 'Two fixed lessons a week, roughly eight a month.' },
      { h3: 'India time', p: 'Our teachers work from India: a 5:30pm Burnside lesson is 12:30pm India time in summer, 1:30pm in winter.' }
    ],
    spec: {
      title: 'Two time changes a year',
      p: 'Adelaide starts daylight saving on the first Sunday in October and ends it on the first Sunday in April (IANA time zone database); India keeps one time, so lesson times there move by an hour.'
    }
  },
  fees: {
    h2: 'Burnside class fees',
    intro: 'Three prices, the same for all.',
    first: 'Lesson one is free, with written feedback.',
    group: 'Roughly eight group lessons a month with fifteen to twenty learners.',
    private: 'Roughly eight private lessons a month.',
    closer: 'Burnside families pay in US dollars, never before the trial, and only once course and time are agreed. Holidays and absences are explained on the pricing page.'
  },
  reviewsH2: 'Our reviews on Google',
  book: {
    h2: 'Book a free Burnside lesson',
    intro: 'Give us the learner\'s age and interests. An older student might run the Sunday check both ways; a younger one might build a Scratch roll call.',
    success: 'Thank you. We will contact you soon about a Burnside lesson.'
  },
  faq: {
    h2: 'Burnside coding and AI questions',
    intro: 'Questions Burnside families and adults often ask.',
    items: [
      {
        q: 'How many people live in Burnside, SA?',
        a: 'The 2021 Census QuickStats count 3,060 residents in the suburb of Burnside, with 872 families and a median age of 43.'
      },
      {
        q: 'What does python -O do to assert statements?',
        a: 'Running Python with -O removes assert statements from the code, so any check written as an assert does not run at all.'
      },
      {
        q: 'Should I use assert to validate data?',
        a: 'No. Use an if statement that raises an exception such as ValueError. Keep assert for internal conditions that should never be false if the code is correct.'
      },
      {
        q: 'What did the Burnside Sunday check find?',
        a: 'On Sunday 25 October 2026, 9 of the 18 stop records inside Burnside had no scheduled service. With -O the script wrongly reported every stop served.'
      },
      { q: 'How young can coding start?', a: 'At six, with Scratch; typed Python normally follows between eight and ten.' },
      { q: 'Do Burnside teenagers use Claude?', a: 'No. Claude-based courses accept learners aged 18 and over only; teenagers use other AI tools.' },
      {
        q: 'Is there a classroom in Burnside?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Burnside learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Is Copilot Studio available in Burnside groups?', a: 'No. Copilot Studio is private-lesson only; group learners code agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Adelaide and South Australia',
    h2: 'More for Burnside learners',
    html: 'Visit <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">the Adelaide page</a> or <a class="cg-inline-link" href="/coding-classes-for-kids-adelaide">coding for Adelaide kids</a>. Across the gulf, <a class="cg-inline-link" href="/best-coding-classes-in-port-lincoln">Port Lincoln</a> has a page of its own, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">our South Australia guide</a> covers everything else.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Burnside and Adelaide',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/coding-classes-for-kids-adelaide', label: 'Kids in Adelaide' },
    { href: '/best-coding-classes-in-port-lincoln', label: 'Port Lincoln' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' }
  ],
  personalityCss: `
.cg-root.cg-brns .cg-hero-grid { align-items: start; gap: clamp(0.92rem, 2.88vw, 2.28rem); }
.cg-root.cg-brns .cg-hero h1 { font-weight: 682; letter-spacing: -0.017em; line-height: 1.05; }
.cg-root.cg-brns .cg-capsule { border-left: 6px solid var(--cg-accent); padding: 0.46rem 0 0.46rem 1.16rem; }
.cg-root.cg-brns .cg-eyebrow { letter-spacing: 0.142em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-brns .cg-section-head h2 { max-width: 20ch; letter-spacing: -0.009em; }
.cg-root.cg-brns .cg-grid-3 { gap: clamp(0.94rem, 2.38vw, 1.8rem); }
.cg-root.cg-brns .cg-table caption { font-weight: 668; text-align: left; letter-spacing: 0.014em; }
.cg-root.cg-brns .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-brns .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.76rem; }
.cg-root.cg-brns .cg-callout { border-left-width: 4px; border-radius: 7px; }
`,
  dossier: {
    curriculumAuthority: 'Burnside (SAL40192, Burnside (SA)), City of Burnside. ABS Census 2021 QuickStats (read 13 October 2026): 3,060 people; median age 43; 872 families; 1,257 private dwellings; 2.7 per household; separate houses 810 (70.6%, SA 78.0%); semi-detached 294 (25.6%, SA 14.6%); bachelor or higher 1,222 (49.6%, SA 22.7%); professionals 585 (39.6%, SA 21.5%); worked at home 255 (17.2%, SA 9.6%); aged 5-9 229; 10-14 219; 15-19 210. ABS SAL area 1.6875 sq km; council by ABS LGA point query. Adelaide Metro GTFS v1708: Wednesday 21 Oct 2026 18 stop records, 440 visits (bus 426, school 712 14), 7 routes (141, 142, 580, 821, 822, 871, 872); Stop 20 Hallett Rd East side 37; Sunday 25 Oct 2026 136 visits at 9 of 18 records, routes 141 and 142; unserved Sunday records all on Greenhill Rd; Sundays 1 and 8 November 2026 also 9 of 18 served. Neighbours (ABS touches): Beaumont, Erindale, Greenhill, Hazelwood Park, Leabrook, Stonyfell, Waterfall Gully.',
    localProject: 'assert under -O. brns_assert.py: Sunday 25 Oct 2026 visits per Burnside stop id; assert not missing. python -> AssertionError: 9 stops have no Sunday service; python -O -> "every stop served on Sunday; average 7.6 visits per stop" (136 / 18). Served-stop average 15.1 (136 / 9). Python 3.13.6.',
    requiredMentions: ['1,257', '294', '229', 'Stonyfell', 'Hallett Road', 'Glynburn Road', 'python -O', '7.6 visits', '9 of 18'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Burnside (SA) suburb and locality (SAL40192), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL40192'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities and Local Government Areas boundary services, used for our point-in-boundary checks and areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Department for Infrastructure and Transport (South Australia), Adelaide Metro General Transit Feed, version 1708 (valid 9 October 2026 to 9 April 2027), Creative Commons Attribution 3.0 Australia per its data.gov.au listing; downloaded 13 October 2026.',
        url: 'https://data.gov.au/data/dataset/https-gtfs-adelaidemetro-com-au'
      },
      {
        claim: 'Python documentation, The assert statement: when optimisation is requested (command line option -O), the current code generator emits no code for an assert statement.',
        url: 'https://docs.python.org/3/reference/simple_stmts.html'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Adelaide, rule AS, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'That Burnside residents lack Sunday transport: not claimed; the page covers stop records inside the boundary only.',
      'Passenger numbers: not claimed.',
      'Figures for the City of Burnside as a whole: not used.',
      'School term dates: not given; official SA term-date pages refused automated access (HTTP 403).',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Burnside or Adelaide Metro.'
    ]
  }
};
