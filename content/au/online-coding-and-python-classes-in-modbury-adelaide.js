'use strict';
// Modbury, Adelaide (cg- district page, Australia cluster Phase 8, row 321). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), suburb page (ABS SAL40898, City of Tea Tree Gully) under Adelaide and
// South Australia.
// Spine: count Wednesday morning-peak visits at Modbury stop records. '07:00:00' <= t < '09:00:00' gives 707;
// t >= '07:00:00' or t < '09:00:00' gives all 4,840; an inclusive end gives 710 (3 at exactly 09:00:00); unpadded
// '7:00:00' <= t < '9:00:00' gives 0 because the times are compared as text. GTFS v1708, our run.
// Lesson family: chained comparisons and the or/and mistakes they prevent; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MODBURY',
    label: 'Modbury, Adelaide',
    blurb: 'Online coding and Python classes for Modbury, where four ways of writing "between 7 and 9" give 707, 4,840, 710 and 0 morning bus visits.'
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
  slug: 'online-coding-and-python-classes-in-modbury-adelaide',
  code: 'mdby',
  accent: '#892515',
  accentRationale: 'Modbury: a terracotta red (hue 8.3), 7.29:1 on #EDE7DA; 27.5 RGB from the nearest South Australian accent, 11.4 from any other Australian accent and 7.3 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Modbury',
    eyebrow: 'Modbury, City of Tea Tree Gully, South Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Modbury' },
      { type: 'AdministrativeArea', name: 'City of Tea Tree Gully' },
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
  routeLabel: 'Modbury, Adelaide',
  title: 'Online Coding and Python Classes in Modbury, Adelaide',
  description: 'Live online coding and Python classes for Modbury children, teens and adults, built around real Adelaide bus data and careful logic, in small groups or one to one.',
  ogDescription: 'Modbury Python project: one question about morning buses, four ways to write "between 7 and 9", and answers of 707, 4,840, 710 and 0.',
  twitterDescription: 'Online Python for Modbury learners, live with a teacher.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Modbury',
    description: 'Level-matched online Python and coding lessons for children, teenagers and adults in Modbury, Adelaide, taught live in English.'
  },
  h1: 'Online coding and Python classes in Modbury',
  capsuleQ: 'What do Modbury learners gain from online Python classes?',
  capsule: 'Precise, readable logic: conditions that say exactly what they mean and data checks that catch the near misses. Children start with Scratch at six; teenagers and adults write Python on public data. Modbury, home to the Tea Tree Plaza interchange, had 5,593 residents in 2021.',
  lead: 'Modbury\'s stop records see thousands of bus visits on a weekday. How many fall in the morning peak, from 7am up to 9am? The answer depends on how the condition is written. Four plausible versions in Python give 707, 4,840, 710 and 0.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Modbury.',
  picks: {
    eyebrow: 'Course picks for Modbury',
    h2: 'Courses that sharpen logic in code',
    intro: 'The morning-peak project is about conditions, strings and boundaries. These courses build that precision; the trial lesson matches the level.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Conditions, comparisons and string handling, tested on real data.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Early Python with clear true-or-false logic.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python from basics to dependable, readable programs.'
      },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Filtering time-based data without boundary mistakes.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Modbury in the Census',
      h2: 'A bus-commuting suburb',
      intro: 'Census 2021 numbers for the suburb of Modbury (ABS code SAL40898), with the South Australian figure next to each.',
      body: [
        {
          kind: 'table',
          caption: 'Modbury in 2021',
          head: ['Measure', 'Modbury'],
          rows: [
            ['Residents', '5,593'],
            ['Median age', '37'],
            ['Families', '1,437'],
            ['Private dwellings', '2,394'],
            ['People per household', '2.3']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Modbury compared with South Australia',
          head: ['Indicator', 'Modbury', 'South Australia'],
          rows: [
            ['Workers who took a bus to work', '10.5% (275)', '3.1%'],
            ['People in education attending university', '22.8% (360)', '16.7%'],
            ['Semi-detached, row or townhouse homes', '18.5% (410)', '14.6%'],
            ['Workers who drove to work', '62.1% (1,626)', '63.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Modbury had 281 children under five and 299 aged 5 to 9.' },
            { h3: 'Teenagers', p: 'There were 257 residents aged 10 to 14 and 259 aged 15 to 19.' },
            { h3: 'Footprint', p: 'The suburb boundary covers about 3.3 square kilometres in Adelaide\'s north-east.' }
          ]
        },
        { kind: 'p', text: 'Published Census counts include small privacy tweaks by the bureau, so we neither alter them nor add them together.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Four ways to say "between 7 and 9"',
      intro: 'Each scheduled visit at a Modbury stop record on Wednesday 21 October 2026 carries a departure time such as 07:42:00. We counted visits in the morning peak, 7am up to but not including 9am, with four versions of the condition.',
      body: [
        {
          kind: 'table',
          caption: 'Morning-peak visits by version of the condition (our run)',
          head: ['Condition on time t', 'Visits counted', 'What happened'],
          rows: [
            ['\'07:00:00\' <= t < \'09:00:00\'', '707', 'Correct'],
            ['t >= \'07:00:00\' or t < \'09:00:00\'', '4,840', 'or makes every time pass'],
            ['\'07:00:00\' <= t <= \'09:00:00\'', '710', '3 visits at exactly 9am slip in'],
            ['\'7:00:00\' <= t < \'9:00:00\'', '0', 'Unpadded text compares wrongly']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The chain',
              p: 'Python reads a <= t < b as (a <= t) and (t < b), with t evaluated once. It looks like the maths and leaves no room to type or instead of and.'
            },
            { h3: 'The or slip', p: 'Every time is either after 7am or before 9am, so the or version counted all 4,840 Wednesday visits, the entire day.' },
            { h3: 'The padding trap', p: 'Times are text here. "7:00:00" sorts after "09:..." because 7 comes after 0, so the unpadded version matched nothing.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Boundaries matter',
          p: 'Half-open ranges, start included and end excluded, let consecutive periods meet without overlap: 7 to 9 then 9 to 11 never counts a 9am visit twice. The inclusive version did exactly that with 3 visits. For the afternoon, 4pm up to 6pm, the correct count was 729.'
        },
        {
          kind: 'p',
          text: 'The timetable is Adelaide Metro open data, feed version 1708, whose times are zero-padded strings. Modbury membership is our point-in-boundary check and all four counts come from our own Python run.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Python conditions',
      h2: 'Writing ranges that read like maths',
      intro: 'Chained comparisons are one of Python\'s small pleasures, and one of its quiet safeguards.',
      body: [
        {
          kind: 'table',
          caption: 'Chaining in practice',
          head: ['Write', 'Means', 'Note'],
          rows: [
            ['a <= t < b', '(a <= t) and (t < b)', 't evaluated only once'],
            ['0 < x < y < 10', 'Three comparisons, all must hold', 'Any number can chain'],
            ['a < t > b', 't larger than both', 'Legal but confusing'],
            ['start <= t < end on parsed times', 'Safe with datetime.time values', 'Avoids padding issues']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'In Scratch, make a sprite react only when its score is between two numbers, and test the edges.' },
            { h3: 'Secondary learners', p: 'Recreate the four Modbury counts, then switch to datetime.time and show the padding problem disappears.' },
            { h3: 'Adults', p: 'Review date and time filters in reports for or-versus-and slips and inclusive end points.' }
          ]
        },
        {
          kind: 'p',
          text: 'Timetable times can also run past midnight, written as 25:10:00 for 1:10am the next morning, which no clock type accepts. Zero-padded strings compare correctly for that case, which is one reason the raw text is often kept.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Modbury',
      h2: 'Tea Tree Plaza and Smart Road',
      intro: 'What the timetable for Wednesday 21 October 2026 shows inside Modbury.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Busiest records', p: 'Stop 42A on Smart Road (south side) had 286 scheduled visits and Zone A at Tea Tree Plaza Interchange 285.' },
            { h3: 'Many routes', p: 'The 60 stop records in Modbury were served by 48 routes that day, with 4,840 visits in all, by our count.' },
            { h3: 'Early start', p: 'The first scheduled departure from a Modbury stop record was at 4:20am.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Modbury only',
          p: 'Figures cover the suburb of Modbury in the City of Tea Tree Gully. Modbury North, Ridgehaven, St Agnes, Hope Valley, Holden Hill and the other neighbours keep separate figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From score ranges to time filters',
    intro: 'These ages are approximate; the trial class settles the level.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Blocks',
        p: 'Scratch conditions and simple ranges.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Comparisons, booleans and testing edges.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python and data',
        p: 'Filtering real data precisely.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Professional Python',
        p: 'Reliable data filters and automation.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI writes the filter. Who checks the edges?',
    intro: 'The learner who knows where filters go wrong. Most AI-written ranges are fine; the faulty ones look fine too.',
    p1: 'An assistant will usually produce a correct chained comparison for "between 7 and 9". But ask it to edit someone else\'s code, or to handle times that arrive without leading zeros, and the or slip or the padding trap can survive into the final script.',
    p2: 'Learners who have seen 4,840 and 0 come out of plausible conditions test the boundaries every time: one value just inside, one just outside, one exactly on the edge.',
    closer: 'In Modbury, the learner who tests the edges gets the 707 that is actually true.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Modbury lessons from home',
    intro: 'Lessons happen over live video, so there is no travel at all.',
    cells: [
      { h3: 'Edge cases together', p: 'Teacher and learner test boundaries live on the shared screen.' },
      { h3: 'Term-time classes', p: 'Plans follow the SA school year, with holiday breaks.' },
      { h3: 'Free opening lesson', p: 'A real first class at no cost, then honest advice.' },
      { h3: 'Small level groups', p: 'Five to ten learners matched by level, or private lessons.' },
      { h3: 'Two per week', p: 'Regular weekly times, about eight lessons a month.' },
      { h3: 'India time', p: 'Our teachers work in India: a 7:30pm Modbury class is 2:30pm India time until April and 3:30pm after.' }
    ],
    spec: {
      title: 'A changing gap',
      p: 'Adelaide observes daylight saving from the first Sunday in October to the first Sunday in April (IANA time zone database). India does not, so the difference is five hours in summer and four in winter.'
    }
  },
  fees: {
    h2: 'Modbury class fees',
    intro: 'Three prices for every family.',
    first: 'Lesson one is free, and you receive a written suggestion afterwards.',
    group: 'About eight group lessons per month, five to ten learners.',
    private: 'About eight private lessons per month.',
    closer: 'Fees are in US dollars and paid only after the trial, once a course and time are agreed. The pricing page explains holidays and absences.'
  },
  reviewsH2: 'Parents and learners on Google',
  book: {
    h2: 'Book a free Modbury lesson',
    intro: 'Tell us the learner\'s age and interests. A teen might reproduce the four morning-peak counts; a child might program a Scratch score range.',
    success: 'Thank you. We will contact you soon about a Modbury lesson.'
  },
  faq: {
    h2: 'Modbury Python questions',
    intro: 'Questions Modbury families and adult learners ask most often.',
    items: [
      {
        q: 'How many people live in Modbury?',
        a: 'The 2021 Census QuickStats count 5,593 residents in the suburb of Modbury, with 2,394 private dwellings and a median age of 37.'
      },
      {
        q: 'What is a chained comparison in Python?',
        a: 'Writing several comparisons in a row, such as a <= x < b. Python treats it as (a <= x) and (x < b), evaluating x only once.'
      },
      {
        q: 'Why did "or" count every bus?',
        a: 'Any time is either at least 7am or before 9am, so a condition joined with or is true for all times. A range needs both conditions, which and, or a chained comparison, provides.'
      },
      {
        q: 'How many morning-peak visits does Modbury have?',
        a: 'By our count of the Adelaide Metro timetable, stop records inside Modbury had 707 scheduled visits from 7am up to 9am on Wednesday 21 October 2026.'
      },
      {
        q: 'When can children start learning Python?',
        a: 'Usually between eight and ten, after some Scratch. The free trial lesson shows whether a child is ready.'
      },
      { q: 'Is Claude used with teenage learners?', a: 'No. Claude-based courses accept adults of 18 and over only; teenagers use other AI tools.' },
      {
        q: 'Is there a classroom in Modbury?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Modbury learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can Modbury groups learn Copilot Studio?', a: 'No. Copilot Studio is one-to-one only; groups create agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Adelaide and South Australia',
    h2: 'More for Modbury learners',
    html: 'Our <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">Adelaide page</a> covers the wider city, and <a class="cg-inline-link" href="/coding-classes-for-kids-adelaide">Adelaide kids\' coding</a> suits children. On Eyre Peninsula, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-whyalla">Whyalla</a> has a Python page, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">the state guide</a> lists the rest.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Modbury and Adelaide',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/online-coding-and-python-classes-in-whyalla', label: 'Whyalla' },
    { href: '/coding-classes-for-kids-adelaide', label: 'Kids in Adelaide' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' }
  ],
  personalityCss: `
.cg-root.cg-mdby .cg-hero-grid { align-items: end; gap: clamp(0.97rem, 3.04vw, 2.38rem); }
.cg-root.cg-mdby .cg-hero h1 { font-weight: 657; letter-spacing: -0.015em; line-height: 1.1; }
.cg-root.cg-mdby .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.54rem 0 0.54rem 1.03rem; }
.cg-root.cg-mdby .cg-eyebrow { letter-spacing: 0.124em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-mdby .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.012em; }
.cg-root.cg-mdby .cg-grid-3 { gap: clamp(0.81rem, 2.16vw, 1.63rem); }
.cg-root.cg-mdby .cg-table caption { font-style: italic; font-weight: 635; text-align: left; }
.cg-root.cg-mdby .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mdby .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.94rem; }
.cg-root.cg-mdby .cg-callout { border-left-width: 6px; border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Modbury (SAL40898), City of Tea Tree Gully. ABS Census 2021 QuickStats (read 13 October 2026): 5,593 people; median age 37; 1,437 families; 2,394 private dwellings; 2.3 per household; bus to work 275 (10.5%, SA 3.1%); university 360 (22.8%, SA 16.7%); semi-detached 410 (18.5%, SA 14.6%); drove 1,626 (62.1%, SA 63.9%); aged 0-4 281; 5-9 299; 10-14 257; 15-19 259. ABS SAL area 3.3206 sq km; council by ABS LGA point query (Tea Tree Gully). Adelaide Metro GTFS v1708: Wednesday 21 Oct 2026 60 stop records, 4840 visits (bus 4793, school 712 35, regional 701 12), 48 routes; Stop 42A Smart Rd South side 286; Zone A Tea Tree Plaza Interchange West side 285; first 04:20:00. Neighbours (ABS touches): Gilles Plains, Holden Hill, Hope Valley, Modbury North, Para Vista, Ridgehaven, St Agnes, Valley View.',
    localProject: 'Chained comparisons. Modbury Wednesday rows 4,840 (departure_time zero-padded strings). "07:00:00" <= t < "09:00:00": 707; t >= "07:00:00" or t < "09:00:00": 4,840; "07:00:00" <= t <= "09:00:00": 710 (3 at exactly 09:00:00); "7:00:00" <= t < "9:00:00": 0; afternoon "16:00:00" <= t < "18:00:00": 729.',
    requiredMentions: ['St Agnes', 'Hope Valley', '259', 'Smart Road', 'Tea Tree Plaza', 'Ridgehaven', '707', '4,840', 'chained comparison'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Modbury suburb and locality (SAL40898), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL40898'
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
        claim: 'Python documentation, Expressions, Comparisons: x < y <= z is equivalent to x < y and y <= z, except that y is evaluated only once.',
        url: 'https://docs.python.org/3/reference/expressions.html'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Adelaide, rule AS, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Passenger numbers or crowding in the morning peak: not claimed; scheduled visits only.',
      'That Tea Tree Plaza is the busiest interchange in Adelaide: not claimed.',
      'Figures for the City of Tea Tree Gully as a whole: not used.',
      'School term dates: not given; official SA term-date pages refused automated access (HTTP 403).',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Tea Tree Gully or Adelaide Metro.'
    ]
  }
};
