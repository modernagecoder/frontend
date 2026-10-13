'use strict';
// Norwood, Adelaide (cg- district page, Australia cluster Phase 8, row 317). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), suburb page (ABS SAL41053, Norwood (SA), City of Norwood Payneham and
// St Peters) under Adelaide and South Australia.
// Spine: a script counting Wednesday stop visits in Norwood prints 0. One debugging line, print(f'{date=} {len(active)=}
// {visits=}'), shows the date was written 2026-10-21 while the calendar stores 20261009-style dates, so no service
// matched. Fixed: 34 service patterns, 2,664 visits. Our run, scratchpad au/b15/nrwd_debug.py, GTFS v1708.
// Lesson family: f-string self-documenting expressions for debugging; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'NORWOOD',
    label: 'Norwood, Adelaide',
    blurb: 'Online coding and Python classes for Norwood, where one debugging line with an equals sign explains why a busy suburb showed zero bus visits.'
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
  slug: 'online-coding-and-python-classes-in-norwood-adelaide',
  code: 'nrwd',
  accent: '#6A5D35',
  accentRationale: 'Norwood: a dusky olive brown (hue 45.3), 5.28:1 on #EDE7DA; 26.9 RGB from the nearest South Australian accent, 13.3 from any other Australian accent and 7.9 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Norwood',
    eyebrow: 'Norwood, City of Norwood Payneham and St Peters, South Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Norwood' },
      { type: 'AdministrativeArea', name: 'City of Norwood Payneham and St Peters' },
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
  routeLabel: 'Norwood, Adelaide',
  title: 'Online Coding and Python Classes in Norwood, Adelaide',
  description: 'Live online coding and Python classes for Norwood children, teens and adults, with real Adelaide timetable data and good debugging habits, in groups or one to one.',
  ogDescription: 'Norwood Python project: a stop-visit count of zero, one f-string with an equals sign, and the date format that turned 2,664 visits into none.',
  twitterDescription: 'Online Python and coding for Norwood learners, taught live.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Norwood',
    description: 'Level-matched online Python and coding lessons for children, teenagers and adults in Norwood, Adelaide, taught live in English.'
  },
  h1: 'Online coding and Python classes in Norwood',
  capsuleQ: 'What do Norwood learners get from online Python classes?',
  capsule: 'Python they can debug for themselves: printing the right values at the right moment, reading what comes back and fixing the real cause. Young children start in Scratch at six; teens and adults use public data. Norwood, in Adelaide\'s inner east, had 6,354 residents in 2021.',
  lead: 'Five Magill Road stop records in Norwood each have 164 scheduled visits on an ordinary Wednesday, yet our first script reported zero visits for the whole suburb. The fix took one debugging line: an f-string with an equals sign, which prints each variable\'s name next to its value.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Norwood.',
  picks: {
    eyebrow: 'Course picks for Norwood',
    h2: 'Courses that build debugging confidence',
    intro: 'The zero-visits bug is about strings, dates and looking at your data. These courses cover all of that; the free trial finds the right level.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Strings, formatting and systematic debugging on real files.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'From first scripts to programs you can diagnose quickly.'
      },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Data checks that catch format mismatches before analysis.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python, with printing and checking from day one.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Norwood in the Census',
      h2: 'Terraces, townhouses and graduates',
      intro: 'The suburb of Norwood (ABS code SAL41053) in the 2021 Census, alongside South Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Norwood, 2021',
          head: ['Measure', 'Norwood'],
          rows: [
            ['Residents', '6,354'],
            ['Median age', '40'],
            ['Families', '1,617'],
            ['Private dwellings', '3,438'],
            ['People per household', '2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Norwood and South Australia',
          head: ['Indicator', 'Norwood', 'South Australia'],
          rows: [
            ['Semi-detached, row or terrace homes', '50.0% (1,465)', '14.6%'],
            ['Adults with a bachelor degree or higher', '48.7% (2,726)', '22.7%'],
            ['Workers who caught a bus to work', '7.3% (248)', '3.1%'],
            ['Workers who drove to work', '47.6% (1,618)', '63.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'School-age residents', p: 'Norwood counted 298 children aged 5 to 9, 241 aged 10 to 14 and 256 aged 15 to 19.' },
            { h3: 'Professional work', p: '39.8% of employed residents, 1,354 people, worked as professionals, against 21.5% statewide.' },
            { h3: 'Compact', p: 'The suburb covers about 2.2 square kilometres east of the Adelaide park lands.' }
          ]
        },
        { kind: 'p', text: 'We copy Census figures exactly, because the bureau perturbs small cells for privacy and totals built from them would drift.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Zero visits, found in one line',
      intro: 'The script picks the timetable\'s service patterns that run on a given Wednesday, then counts stop visits at Norwood\'s stop records on trips using those patterns. With the date written the way most people write dates, it printed 0. We added one line inside the loop.',
      body: [
        {
          kind: 'table',
          caption: 'What the debugging line printed (our run)',
          head: ['Printed by f\'{date=} {len(active)=} {visits=}\'', 'Meaning'],
          rows: [
            ['date=\'2026-10-21\' len(active)=0 visits=0', 'No service matched the date'],
            ['date=\'20261021\' len(active)=34 visits=2664', '34 service patterns, 2,664 visits'],
            ['cal[0][\'start_date\']=\'20261009\'', 'The calendar stores dates without dashes']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why zero',
              p: 'The calendar compares dates as text. A dash sorts before any digit, so "2026-10-21" counts as earlier than "20261009" and falls before every start date.'
            },
            {
              h3: 'Why the = matters',
              p: 'f\'{date=}\' prints date=\'2026-10-21\', quotes included. The quotes show it is a string, and the name shows which variable it is.'
            },
            { h3: 'What Norwood really has', p: 'With the right format, the 29 stop records inside Norwood had 2,664 scheduled visits on 30 routes that Wednesday.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'A habit, not a trick',
          p: 'When a result is surprising, print the inputs next to the output before changing any code. Here the input was wrong, not the logic, and rewriting the counting code would have wasted an afternoon.'
        },
        {
          kind: 'p',
          text: 'The timetable is Adelaide Metro open data (feed version 1708). Norwood membership is our point-in-boundary check; the printed lines are copied from our own run, which reads calendar.txt directly.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Debugging Python',
      h2: 'Printing values that explain themselves',
      intro: 'The equals sign inside an f-string, added in Python 3.8, makes quick debugging output both shorter to write and easier to read.',
      body: [
        {
          kind: 'table',
          caption: 'Debug output styles compared',
          head: ['Code', 'Output', 'Notes'],
          rows: [
            ['print(date)', '2026-10-21', 'No name, no quotes'],
            ['print(\'date:\', date)', 'date: 2026-10-21', 'Name typed by hand'],
            ['print(f\'{date=}\')', 'date=\'2026-10-21\'', 'Name and repr, automatically'],
            ['print(f\'{len(active)=}\')', 'len(active)=0', 'Works for expressions too']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Use Scratch\'s say block to show a variable\'s value while the sprite moves, and spot when it goes wrong.' },
            { h3: 'Secondary learners', p: 'Reproduce the Norwood zero, add one f-string line, and explain the dash-versus-digit comparison.' },
            { h3: 'Adults', p: 'Check date formats whenever two systems exchange data; mismatches like this one are common in exports.' }
          ]
        },
        {
          kind: 'p',
          text: 'Parsing both dates into datetime.date objects would remove the problem entirely. Debug printing finds the bug quickly; proper types stop it coming back.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Norwood',
      h2: 'Magill Road stops lead the count',
      intro: 'Local markers from the Adelaide Metro timetable for Wednesday 21 October 2026.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Five stops tied', p: 'Stops 4, 5, 6, 7 and 8 on Magill Road (south side) each had 164 scheduled visits, the most of any Norwood stop records.' },
            { h3: 'Mostly buses', p: 'Of the 2,664 visits, 2,629 were regular buses and 35 were school bus services; no train or tram stops in the suburb.' },
            { h3: 'Early and late', p: 'The first departure from a Norwood stop record was at 5:44am, and the last was written 24:14:42.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Norwood, not the council',
          p: 'Figures here are for the suburb of Norwood within the City of Norwood Payneham and St Peters. Kent Town, Kensington, Stepney, Maylands, College Park, Rose Park and the other neighbouring suburbs have separate counts.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From say blocks to f-strings',
    intro: 'Use the bands as a rough guide; the first lesson settles the level.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Blocks',
        p: 'Scratch projects with variables shown on screen.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Typed Python',
        p: 'Strings, printing and simple checks.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python and data',
        p: 'Real files, formats and debugging.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Working Python',
        p: 'Reliable scripts and automation for work.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Can an AI debug it for you?',
    intro: 'Sometimes, if it sees the data. Shown only the code, it has no way to know the dates are stored differently.',
    p1: 'Paste the Norwood script into an assistant and ask why it returns zero, and it may suggest fixes to the counting logic, which was fine. The real cause lives in the data file, which the assistant never saw.',
    p2: 'Learners who reach for f\'{date=}\' first gather the evidence that makes any helper, human or AI, useful. Showing the actual values turns a guessing game into a two-minute fix.',
    closer: 'In Norwood, the learner who prints the evidence solves the bug the code alone could not reveal.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Norwood lessons online',
    intro: 'Classes are taught over live video, so there is no travel.',
    cells: [
      { h3: 'Debug together', p: 'When output looks wrong, learner and teacher print values side by side.' },
      { h3: 'School-year planning', p: 'Lessons follow SA terms and break for holidays.' },
      { h3: 'Free trial', p: 'A complete opening lesson and a frank suggestion.' },
      { h3: 'Groups by level', p: 'Fifteen to twenty learners together, or one to one.' },
      { h3: 'Two lessons a week', p: 'Fixed times, about eight lessons each month.' },
      { h3: 'India time', p: 'Teachers work from India: a 4:30pm Norwood lesson starts at 11:30am India time until April, then 12:30pm.' }
    ],
    spec: {
      title: 'Clocks in Adelaide',
      p: 'Adelaide observes daylight saving between the first Sunday in October and the first Sunday in April (IANA time zone database). India does not, so lesson times in India shift by an hour twice a year.'
    }
  },
  fees: {
    h2: 'Norwood class fees',
    intro: 'Three straightforward prices.',
    first: 'The first lesson costs nothing and ends with written advice.',
    group: 'About eight group lessons each month, fifteen to twenty learners.',
    private: 'About eight private lessons each month.',
    closer: 'Norwood families pay in US dollars, after the trial and once course and time are settled. Holiday and absence rules are on the pricing page.'
  },
  reviewsH2: 'Reviews from families on Google',
  book: {
    h2: 'Book a free Norwood lesson',
    intro: 'Tell us how old the learner is and what they like. A teen might chase the zero-visits bug; a younger child might make a Scratch sprite report its score.',
    success: 'Thank you. We will contact you shortly about a Norwood lesson.'
  },
  faq: {
    h2: 'Norwood Python questions',
    intro: 'What Norwood parents and adult learners commonly ask.',
    items: [
      {
        q: 'How many people live in Norwood, Adelaide?',
        a: 'The 2021 Census QuickStats count 6,354 residents in the suburb of Norwood, with 3,438 private dwellings and a median age of 40.'
      },
      {
        q: 'What does the = do inside a Python f-string?',
        a: 'Writing f\'{x=}\' prints the expression\'s text, an equals sign and its value, for example x=5. It was added in Python 3.8 to make debugging output quicker.'
      },
      {
        q: 'Why can comparing dates as strings go wrong?',
        a: 'Strings compare character by character. Dates in different formats, such as 2026-10-21 and 20261009, sort incorrectly against each other even when the dates themselves are clear.'
      },
      {
        q: 'What did the Norwood debugging example show?',
        a: 'A date written with dashes matched 0 service patterns and gave 0 visits; written as 20261021 it matched 34 patterns and 2,664 Wednesday visits at Norwood stop records.'
      },
      { q: 'When should a child start Python?', a: 'Usually between eight and ten, after Scratch. Some start earlier; the trial lesson shows readiness.' },
      { q: 'Can teenagers learn with Claude?', a: 'No. Claude-based courses are for learners of 18 and over; teenagers use other AI tools.' },
      {
        q: 'Is there a classroom in Norwood?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Norwood learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Is Copilot Studio part of the Norwood group course?', a: 'No. Copilot Studio is taught privately only; groups build agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Adelaide and South Australia',
    h2: 'More for Norwood learners',
    html: 'Read <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">the Adelaide page</a> or <a class="cg-inline-link" href="/coding-classes-for-kids-adelaide">coding for Adelaide kids</a>. In the Spencer Gulf, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-whyalla">Whyalla</a> has its own Python page, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">the South Australia guide</a> lists the rest.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Norwood and Adelaide',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/coding-classes-for-kids-adelaide', label: 'Kids in Adelaide' },
    { href: '/online-coding-and-python-classes-in-whyalla', label: 'Whyalla' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' }
  ],
  personalityCss: `
.cg-root.cg-nrwd .cg-hero-grid { align-items: start; gap: clamp(1.04rem, 3.02vw, 2.47rem); }
.cg-root.cg-nrwd .cg-hero h1 { font-weight: 662; letter-spacing: -0.016em; line-height: 1.1; }
.cg-root.cg-nrwd .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.62rem 0 0.62rem 0.96rem; }
.cg-root.cg-nrwd .cg-eyebrow { letter-spacing: 0.126em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-nrwd .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.01em; }
.cg-root.cg-nrwd .cg-grid-3 { gap: clamp(0.84rem, 2.18vw, 1.66rem); }
.cg-root.cg-nrwd .cg-table caption { font-weight: 650; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-nrwd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nrwd .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.98rem; }
.cg-root.cg-nrwd .cg-callout { border-left-width: 6px; border-radius: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Norwood (SAL41053, Norwood (SA)), City of Norwood Payneham and St Peters. ABS Census 2021 QuickStats (read 13 October 2026): 6,354 people; median age 40; 1,617 families; 3,438 private dwellings; 2 per household; semi-detached 1,465 (50.0%, SA 14.6%); bachelor or higher 2,726 (48.7%, SA 22.7%); bus 248 (7.3%, SA 3.1%); drove 1,618 (47.6%, SA 63.9%); professionals 1,354 (39.8%, SA 21.5%); aged 5-9 298; 10-14 241; 15-19 256. ABS SAL area 2.2084 sq km; council by ABS LGA point query. Adelaide Metro GTFS v1708, Wednesday 21 October 2026: 29 stop records; 2664 visits (bus 2629, school bus 712 35); 30 routes; Magill Rd stops 4-8 south side 164 each; first 05:44:07, last 24:14:42. Neighbours (ABS touches): Beulah Park, College Park, Kensington, Kent Town, Marryatville, Maylands, Rose Park, Stepney, Toorak Gardens, Trinity Gardens, Adelaide.',
    localProject: 'f-string debugging. nrwd_debug.py: services(date) = calendar.txt rows with wednesday 1 and start_date <= date <= end_date (string comparison). date="2026-10-21" -> len(active)=0, visits=0; date="20261021" -> len(active)=34, visits=2664; cal[0]["start_date"]="20261009". Python 3.13.6.',
    requiredMentions: ['1,465', '2,726', '256', 'Magill Road', 'Kent Town', '2,664', 'len(active)=0', '20261009', 'f-string'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Norwood (SA) suburb and locality (SAL41053), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL41053'
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
        claim: 'Python documentation, What\'s New in Python 3.8: f-strings support = for self-documenting expressions and debugging.',
        url: 'https://docs.python.org/3/whatsnew/3.8.html'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Adelaide, rule AS, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Passenger numbers on Magill Road: not claimed; scheduled visits only.',
      'That Magill Road is the busiest corridor in Adelaide: not claimed beyond the Norwood stop records.',
      'Figures for the City of Norwood Payneham and St Peters as a whole: not used.',
      'School term dates: not given; official SA term-date pages refused automated access (HTTP 403).',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the council or Adelaide Metro.'
    ]
  }
};
