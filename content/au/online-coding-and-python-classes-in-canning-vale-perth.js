'use strict';
// Canning Vale, Perth (cg- district page, Australia cluster Phase 8, row 301). Keyword slug online-coding-and-python-classes-in-*,
// suburb page (ABS SAL50245) split between the City of Canning and the City of Gosnells (our grid test: about 61% and 39% of area).
// Spine: late-binding closures. Eight lambdas built in a dict comprehension to read year-level columns all read Y06, so on the
// five government primary schools inside the outline 33 of 40 lookups are wrong and 7 pass by accident (5 are Year 6 itself,
// 2 are schools whose Year 4 or Year 5 equals Year 6). Fix: default argument. Data: WA schools list, 2026 Semester 1 census.
// Script: scratchpad au/b13/a_cnvl.py. Lesson family: late-binding closures; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CANNING VALE',
    label: 'Canning Vale, Perth',
    blurb: 'Online coding and Python classes for Canning Vale, where eight small functions built in a loop all quietly read the Year 6 column.'
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
  slug: 'online-coding-and-python-classes-in-canning-vale-perth',
  code: 'cnvl',
  accent: '#465B30',
  accentRationale: 'Canning Vale: a muted bushland olive (hue 89.3, s 0.47, v 0.36), at least 25.7 RGB from every WA page accent, 14.2 from other AU accents and 7.9 from every other site colour; 6.1:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Canning Vale',
    eyebrow: 'Canning Vale, Cities of Canning and Gosnells, Western Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Canning Vale' },
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
  routeLabel: 'Canning Vale, Perth',
  title: 'Online Coding and Python Classes in Canning Vale, Perth',
  description: 'Live online coding and Python classes for Canning Vale learners aged 6 to adult, with a Python project on closures tested against real WA school enrolment data.',
  ogDescription: 'Eight Python functions, one loop, one bug: in Canning Vale every lookup returned the Year 6 number. Seven still passed.',
  twitterDescription: 'Canning Vale coding and Python classes, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Canning Vale',
    description: 'Python and programming lessons for Canning Vale children, teenagers and adults, matched by level and taught live online.'
  },
  h1: 'Online coding and Python classes in Canning Vale',
  capsuleQ: 'What Python skill does the Canning Vale project teach?',
  capsule: 'How a function remembers a variable. Learners build eight tiny functions in a loop, one for each year level from Kindergarten to Year 6, and run them on public enrolment figures for Canning Vale\'s government primary schools. Every function returns the Year 6 number. Seven of 40 checks still pass by coincidence, which is the real lesson about testing.',
  lead: 'Canning Vale is a large family suburb on Perth\'s south-east side, shared between two councils. Nearly every home is a separate house, and more than half of its families are couples with children. That makes its school enrolment table, published by the WA Department of Education, a natural first dataset for young Python programmers.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Canning Vale.',
  picks: {
    eyebrow: 'Course picks for Canning Vale',
    h2: 'Python from first steps to tested code',
    intro: 'Courses that build the habits the closure project needs. A free trial sets the level.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Functions, scope and tests, practised on real tables.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python from scratch to readable, checked programs.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, in short projects they can verify.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Cleaning and summarising data before trusting any output.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Canning Vale in the Census',
      h2: 'A suburb of houses and young families',
      intro: 'Counts for the Canning Vale suburb and locality (ABS SAL50245) from 2021 Census QuickStats, read on 12 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Canning Vale headline counts',
          head: ['Measure', 'Value'],
          rows: [
            ['People', '34,504'],
            ['Median age', '37'],
            ['Families', '9,386'],
            ['Private dwellings', '11,053'],
            ['People per household', '3.1'],
            ['Bedrooms per dwelling', '3.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Canning Vale shares against Western Australia',
          head: ['Share', 'Canning Vale', 'WA'],
          rows: [
            ['Separate houses', '94.4% (9,854)', '79.7%'],
            ['Couple families with children', '57.7% (5,417)', '44.6%'],
            ['Residents aged 15 to 19', '7.2% (2,481)', '5.8%'],
            ['Drove a car to work', '66.5% (11,553)', '62.1%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Equal age bands',
              p: 'The Census counted exactly 2,394 residents aged 5 to 9 and another 2,394 aged 10 to 14. Equal numbers in real data turn out to matter in the project below.'
            },
            {
              h3: 'Two councils',
              p: 'Our grid test puts about 61% of the suburb\'s area in the City of Canning and 39% in the City of Gosnells. The suburb figures here cover both parts.'
            },
            { h3: 'Census timing', p: 'The 2021 Census was taken during the pandemic, so the share driving to work describes that particular week.' }
          ]
        },
        {
          kind: 'p',
          text: 'The ABS rounds percentages and slightly adjusts small counts to protect privacy, so table parts may not sum to totals. We quote its figures exactly and do not add rows together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Eight functions that all read Year 6',
      intro: 'The Department of Education list gives student numbers for every year level at each WA school, as at the 2026 Semester 1 census. Our map test finds five government primary schools inside the Canning Vale outline. Learners want one small function per year level, so they write a loop.',
      body: [
        {
          kind: 'table',
          caption: 'The suburb\'s largest government primary: published numbers vs what the loop-built functions return (our run)',
          head: ['Year level', 'Published', 'Buggy function', 'Fixed function'],
          rows: [
            ['Kindergarten', '81', '130', '81'],
            ['Pre-primary', '90', '130', '90'],
            ['Year 1', '118', '130', '118'],
            ['Year 2', '125', '130', '125'],
            ['Year 3', '135', '130', '135'],
            ['Year 4', '133', '130', '133'],
            ['Year 5', '127', '130', '127'],
            ['Year 6', '130', '130', '130']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why it happens',
              p: 'Each lambda stores the name of the loop variable, not its value. Python looks the name up when the function runs, and by then the loop has finished on Y06.'
            },
            {
              h3: '33 of 40 wrong',
              p: 'Across five schools and eight year levels, 33 lookups return the wrong number. The bug is total, yet it does not crash and every output looks like a plausible enrolment.'
            },
            {
              h3: '7 lucky passes',
              p: 'Five checks pass because Year 6 is genuinely Year 6. Two more pass because one school has 64 students in both Year 4 and Year 6, and another has 38 in both Year 5 and Year 6.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The testing lesson',
          p: 'A learner who tested only the last item, or happened to pick a school with matching numbers, would ship the bug. Good tests use values that cannot coincide. Here that means checking a year where the published figure differs from Year 6, at more than one school.'
        },
        {
          kind: 'p',
          text: 'Student numbers come from the WA Department of Education schools list, downloaded on 12 October 2026. Which schools sit inside the ABS outline is decided by our own point-in-polygon test on the list\'s coordinates. The lookups, counts and checks are our own script; schools are described by size rather than named.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Fixing the closure',
      h2: 'Capture the value, not the name',
      intro: 'The fix is one short change: give each lambda a default argument, yl=yl, which is evaluated once, at the moment the function is created.',
      body: [
        {
          kind: 'table',
          caption: 'How the lesson runs',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Read the schools list and keep government primaries inside Canning Vale.'],
            ['2', 'Build a dict of eight getters with a comprehension and print every result.'],
            ['3', 'Count wrong lookups, then list the lucky passes and explain each one.'],
            ['4', 'Apply the default-argument fix, or a small factory function, and rerun the checks.']
          ]
        },
        {
          kind: 'p',
          text: 'A second dataset makes the point again. The suburb\'s government secondary college lists 247 students in Year 8 and 247 in Year 11. A getter that wrongly read Year 11 would pass a Year 8 check there and fail nowhere else in that row. Learners write a rule of thumb for their notebooks: before trusting a test, ask whether the wrong answer could equal the right one.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Label boxes with sticky notes, move the last note onto every box, and spot why each box now says the same thing.' },
            { h3: 'Teenagers', p: 'Reproduce the bug, fix it two ways, and design tests that a coincidence cannot pass.' },
            { h3: 'Adults', p: 'Find the same pattern in callbacks, event handlers and loops that schedule work in real code.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Canning Vale facts',
      h2: 'Schools, area and the 2027 calendar',
      intro: 'Details from the Department of Education list, the ABS boundaries and the 2027 term dates.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Seven government schools',
              p: 'Inside the outline our test finds five primary schools, one senior high college and one education support centre.'
            },
            { h3: 'Across the boundary', p: 'Four of those seven sit on the City of Gosnells side and three on the City of Canning side, by the same test.' },
            { h3: 'Term 1, 2027', p: 'WA public schools start on Monday 1 February 2027; the first term closes on Friday 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'Canning Vale is the ABS suburb outline of about 25.3 square kilometres. Council shares come from our own test of a regular grid of points against the two ABS council outlines.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sticky notes to closures',
    intro: 'Ages give a rough guide; the trial lesson decides.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Blocks first',
        p: 'Scratch projects that build careful sequencing.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Typed Python',
        p: 'Variables, loops and small functions in real code.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with data',
        p: 'Files, functions and tests on public tables.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Python at work',
        p: 'Automation and clean, tested scripts.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Python and AI',
    h2: 'Will AI assistants avoid this bug?',
    intro: 'Not reliably, and that is the reason to understand it.',
    p1: 'Closures created in loops are a classic trap, and AI assistants still write them, especially in callbacks and dictionary comprehensions. The code runs, the numbers look sensible, and nothing warns you.',
    p2: 'A Canning Vale learner who has watched 33 lookups go wrong will recognise the pattern in generated code at a glance, and will know to test with values that cannot coincide.',
    closer: 'Our Python classes treat AI output as a draft that still needs a proper test.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online classes for Canning Vale',
    intro: 'Lessons run live over video, so there is no drive along Ranford or Nicholson Road.',
    cells: [
      { h3: 'Live teaching', p: 'A teacher leads every lesson and reviews code as it is typed.' },
      { h3: 'School terms', p: 'Classes follow the WA terms and pause in the holidays.' },
      { h3: 'Trial first', p: 'One free lesson, followed by a written recommendation.' },
      { h3: 'Level groups', p: 'Five to ten learners at one level, or one to one.' },
      { h3: 'Two a week', p: 'Around eight lessons a month.' },
      { h3: 'Indian time', p: 'A 5:30pm Canning Vale lesson starts at 3pm in India.' }
    ],
    spec: {
      title: 'Steady clocks',
      p: 'The IANA time zone database records Western Australia\'s last daylight saving period ending in March 2009, so lesson times never shift against India.'
    }
  },
  fees: {
    h2: 'Canning Vale class fees',
    intro: 'Fees are identical for every learner.',
    first: 'Your first lesson is free and includes a plan.',
    group: 'Group classes: about eight lessons monthly, five to ten learners.',
    private: 'One-to-one: about eight lessons monthly with one teacher.',
    closer: 'Fees are set in US dollars and begin only once the trial has chosen a course and a weekly time. The pricing page covers holidays and missed lessons.'
  },
  reviewsH2: 'What families say on Google',
  book: {
    h2: 'Book a free Canning Vale lesson',
    intro: 'Tell us the learner\'s age and interests. A younger child might play the sticky-note game; a teenager might fix the closure bug.',
    success: 'Thank you. We will contact you soon about a Canning Vale lesson.'
  },
  faq: {
    h2: 'Canning Vale coding and Python questions',
    intro: 'Common questions from Canning Vale families and adult learners.',
    items: [
      { q: 'How many people live in Canning Vale?', a: 'The 2021 Census counted 34,504 people in the Canning Vale suburb, with a median age of 37.' },
      {
        q: 'Which council is Canning Vale in?',
        a: 'Both. Our test of the ABS outlines puts about 61% of its area in the City of Canning and 39% in the City of Gosnells.'
      },
      {
        q: 'What is a closure in Python?',
        a: 'A function that remembers variables from the place where it was created. It remembers the variable itself, not a snapshot of its value.'
      },
      {
        q: 'What does late binding mean?',
        a: 'Python looks up a closure\'s free variables when the function is called. In a loop, that is usually after the loop has ended.'
      },
      { q: 'What age can children start Python?', a: 'Many start typed Python at about 9 or 10 after some block coding. The trial lesson checks readiness.' },
      {
        q: 'Where do the school numbers come from?',
        a: 'From the WA Department of Education schools list, which gives student numbers by year level as at the 2026 Semester 1 census.'
      },
      {
        q: 'Do you have a centre in Canning Vale?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Canning Vale classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are learners grouped?',
        a: 'By level and pace in groups of five to ten, not by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can adults learn Python with you?', a: 'Yes. Adults join adult groups or private lessons, often to automate tasks at work.' }
    ]
  },
  next: {
    eyebrow: 'More for Perth learners',
    h2: 'Explore more',
    html: 'See the <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">Perth page</a> for the city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">Western Australia guide</a> for the state, and the <a class="cg-inline-link" href="/python-ai-course-for-kids-australia">Python and AI course for kids</a> for younger starters.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Canning Vale and Perth',
  footerPlaces: [
    { href: '/python-ai-course-for-kids-australia', label: 'Python and AI for kids' },
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-cnvl .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.2vw, 2rem); }
.cg-root.cg-cnvl .cg-hero h1 { font-weight: 690; letter-spacing: -0.03em; line-height: 1.02; }
.cg-root.cg-cnvl .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-cnvl .cg-eyebrow { letter-spacing: 0.085em; font-weight: 680; font-size: 0.8rem; }
.cg-root.cg-cnvl .cg-section-head h2 { max-width: 20ch; }
.cg-root.cg-cnvl .cg-grid-3 { gap: clamp(0.95rem, 2.5vw, 1.7rem); }
.cg-root.cg-cnvl .cg-table caption { text-align: left; font-weight: 610; font-size: 0.9rem; }
.cg-root.cg-cnvl .cg-table td:nth-child(n+2) { text-align: right; font-variant-numeric: tabular-nums; }
.cg-root.cg-cnvl .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.6rem; }
.cg-root.cg-cnvl .cg-callout { border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Canning Vale (SAL50245), ABS Census 2021 QuickStats (read 12 October 2026): 34,504 people; median age 37; 9,386 families; 11,053 private dwellings; 3.1 people per household; 3.9 bedrooms per dwelling; separate houses 9,854 (94.4%, WA 79.7%); couple families with children 5,417 (57.7%, WA 44.6%); aged 15-19 2,481 (7.2%, WA 5.8%); car as driver 11,553 (66.5%, WA 62.1%); aged 5-9 2,394 and 10-14 2,394. ABS SAL area 25.3471 sq km. Our 60x60 grid test: 1,283 of 2,111 interior points in City of Canning LGA, 828 in City of Gosnells. WA Dept of Education schools list (2026 Semester 1 census): 7 government schools inside the SAL by our point-in-polygon test (5 primary, 1 senior high, 1 education support centre), 4 on the Gosnells side and 3 on the Canning side. Secondary college Year 8 and Year 11 both 247. Main Roads Traffic Digest: 11 count sites inside the SAL by our test, on Nicholson Rd (4), Bannister Rd (3), Ranford Rd (2), Campbell Rd, Warton Rd. WA 2027 Term 1: Monday 1 February to Friday 9 April. Perth +8:00, last DST ended March 2009 (IANA 2026e).',
    localProject: 'Late-binding closures on the 5 government primaries inside Canning Vale: getters = {yl: lambda row: row[yl] for yl in KIN..Y06}. Largest primary (939 students) published KIN 81, PPR 90, Y01 118, Y02 125, Y03 135, Y04 133, Y05 127, Y06 130; buggy getters return 130 for all. 33 of 40 lookups wrong; 7 pass (5 are Y06; one school Y04 = Y06 = 64; another Y05 = Y06 = 38). Fix lambda row, yl=yl. Our script. Script: scratchpad au/b13/a_cnvl.py.',
    requiredMentions: ['34,504', '11,053', '94.4% (9,854)', '57.7% (5,417)', 'City of Gosnells', '33 lookups', 'yl=yl', '2,394', '247 students in Year 8'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Canning Vale suburb and locality (SAL50245), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL50245'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'WA Department of Education, Western Australian Schools Lists (Excel), currently active schools with student numbers as at the 2026 Semester 1 census, Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/western-australian-schools-lists'
      },
      {
        claim: 'WA Department of Education, future term dates: 2027 Term 1 Monday 1 February to Friday 9 April; Term 3 Monday 19 July to Friday 24 September.',
        url: 'https://www.education.wa.edu.au/future-term-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Perth at +8:00 on rule AW, whose last daylight saving period ended on the last Sunday of March 2009.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Summing student numbers across schools into a suburb total: not done; each school\'s published figures are used as they stand.',
      'Naming schools: not used; schools are described by size.',
      'City of Canning or City of Gosnells council-wide figures: not used on this suburb page.',
      'Catchment or enrolment-zone claims: not made.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with either council or the WA Department of Education.'
    ]
  }
};
