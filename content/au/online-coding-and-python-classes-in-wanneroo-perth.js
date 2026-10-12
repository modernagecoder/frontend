'use strict';
// Wanneroo, Perth (cg- district page, Australia cluster Phase 8, row 305). Keyword slug online-coding-and-python-classes-in-*,
// council page (ABS LGA58760, City of Wanneroo) under Perth and Western Australia.
// Spine: EAFP vs LBYL on 97 Main Roads Traffic Digest sites, 23 of them without a weekend average. Naive division crashes on the
// 5th row; LBYL and EAFP (except TypeError) both keep 74, median weekend/weekday ratio 0.793; filling None with 0 drags the mean
// to 0.605; a broad except Exception around a typo (SAT_SUM) silently keeps 0 of 97. Script: scratchpad au/b13/a_wnro.py.
// Lesson family: EAFP vs LBYL; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'WANNEROO',
    label: 'Wanneroo, Perth',
    blurb: 'Online coding and Python classes for the City of Wanneroo, where 23 of 97 traffic counters have no weekend figure and Python must decide whether to ask first or apologise later.'
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
  slug: 'online-coding-and-python-classes-in-wanneroo-perth',
  code: 'wnro',
  accent: '#105A2F',
  accentRationale: 'Wanneroo: a muted banksia green (hue 145.1, s 0.82, v 0.35), at least 25.1 RGB from every WA page accent, 12.4 from other AU accents and 7.5 from every other site colour; 6.8:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Wanneroo',
    eyebrow: 'City of Wanneroo, outer north of Perth, Western Australia',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Wanneroo' },
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
  routeLabel: 'Wanneroo, Perth',
  title: 'Online Coding and Python Classes in Wanneroo, Perth',
  description: 'Live online coding and Python classes for the City of Wanneroo, ages 6 to adult, with a Python error-handling project on 97 Main Roads traffic count sites.',
  ogDescription: 'Wanneroo traffic data has 23 missing weekend counts. Check first or try and catch? Both keep 74 sites; one careless shortcut keeps none.',
  twitterDescription: 'Python and coding for Wanneroo learners, live online, with a free first lesson.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Wanneroo',
    description: 'Python and coding lessons for learners of every age across the City of Wanneroo, set by level after a free trial and taught live.'
  },
  h1: 'Online coding and Python classes in Wanneroo',
  capsuleQ: 'What does the Wanneroo Python project teach?',
  capsule: 'How to handle missing values without hiding mistakes. Main Roads lists 97 traffic count sites in the City of Wanneroo, and 23 have no weekend average. Learners compare two Python styles: look before you leap, which checks first, and easier to ask forgiveness than permission, which tries and catches the error. Both work. A careless version of the second silently throws away every row.',
  lead: 'The City of Wanneroo covers about 683 square kilometres of Perth\'s outer north, from Girrawheen and Koondoola in the south to Yanchep and Two Rocks in the north. It is growing fast, with a median age of 35 at the 2021 Census, and its main roads carry heavy commuter traffic toward the city. Their published counts are real, and so are their gaps.',
  wa: 'Hi Modern Age Coders, I am in Wanneroo and would like to book a free Python or coding lesson.',
  picks: {
    eyebrow: 'Course picks for Wanneroo',
    h2: 'Python, from first programs to robust scripts',
    intro: 'Four courses that build careful Python habits. The free trial lesson decides where to begin.',
    items: [
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Exceptions, testing and scripts that fail loudly when they should.'
      },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Conditions, try and except, and reading real data files.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Automation that copes with messy inputs at work.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, one small program at a time.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Wanneroo by the numbers',
      h2: 'Young families on Perth\'s growing edge',
      intro: 'Council-wide figures for the City of Wanneroo (ABS LGA58760) from 2021 Census QuickStats, read on 12 October 2026, and the bureau\'s 2025 estimate.',
      body: [
        {
          kind: 'table',
          caption: 'City of Wanneroo counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents, 2021 Census', '209,111'],
            ['Estimated residents, 2025', '246,147'],
            ['Median age', '35'],
            ['Families', '57,797'],
            ['Private dwellings', '78,029'],
            ['People per household', '2.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Wanneroo shares beside the state',
          head: ['Share', 'Wanneroo', 'WA'],
          rows: [
            ['Separate houses', '92.1% (65,649)', '79.7%'],
            ['Couple families with children', '50.1% (28,985)', '44.6%'],
            ['Residents aged 5 to 9', '7.6% (15,950)', '6.5%'],
            ['Train to work', '2.5% (2,611)', '1.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Growth',
              p: 'The ABS estimate for 2025 is 246,147 residents against 209,111 counted in 2021. Different methods produce them, so both appear here unsubtracted.'
            },
            { h3: 'Apartments are rare', p: 'Only 302 dwellings, 0.4%, were flats or apartments, compared with 6.5% across Western Australia.' },
            { h3: 'Schools', p: 'Our map test counts 50 government schools inside the council outline, 38 of them primary schools.' }
          ]
        },
        {
          kind: 'p',
          text: 'Because the Census was held during the pandemic, journey-to-work answers describe that week. The ABS also rounds shares and perturbs small counts slightly, so its rows may not sum exactly to its totals; we reproduce its figures as printed.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Look before you leap, or ask forgiveness?',
      intro: 'Each Main Roads count site has an average weekday volume and, usually, an average weekend volume. Learners want the weekend-to-weekday ratio for every Wanneroo site. The first attempt divides one by the other for all 97 rows, and Python stops at the fifth with a TypeError, because that site\'s weekend value is None.',
      body: [
        {
          kind: 'table',
          caption: 'Four ways to handle the 23 missing weekend values (our runs on Main Roads data)',
          head: ['Approach', 'Sites kept', 'Result'],
          rows: [
            ['Divide every row', '0', 'Crashes at row 5 with TypeError'],
            ['LBYL: check for None first', '74', 'Median ratio 0.793'],
            ['EAFP: try, except TypeError', '74', 'Median ratio 0.793'],
            ['Replace None with 0', '97', 'Mean drops from 0.793 to 0.605']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Two honest styles',
              p: 'Checking first and catching the specific error give the same 74 ratios. Python programmers often prefer the try style, but here the choice is about clarity, not correctness.'
            },
            {
              h3: 'The zero trap',
              p: 'Filling gaps with zero keeps all 97 rows and looks complete. It invents 23 empty weekends and pulls the average ratio down by almost a quarter.'
            },
            {
              h3: 'The broad except',
              p: 'Catch every exception and mistype one field name, and the loop raises KeyError on every row, catches it, and keeps 0 of 97 sites with no message at all.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'What the 74 ratios show',
          p: 'Most Wanneroo roads are quieter at weekends: the median site carries about four-fifths of its weekday traffic. Three sites run the other way, led by Indian Ocean Drive north of Breakwater Drive, whose weekend average is 1.178 times its weekday figure. The steepest weekend drop is on Flynn Drive east of Wanneroo Road, at 0.541.'
        },
        {
          kind: 'p',
          text: 'Volumes are from the Main Roads Traffic Digest, downloaded on 12 October 2026, for the 97 sites Main Roads assigns to the City of Wanneroo. Of the 23 sites without weekend averages, 21 have a 2024/25 count year. Each ratio compares two numbers from the same site and year; the medians and means are our own calculation.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Writing it properly',
      h2: 'Catch the error you expect, and only that one',
      intro: 'The lesson ends with one rule: name the exception you mean, keep the try block small, and record what was skipped.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Load the Wanneroo rows and run the naive loop to see the TypeError.'],
            ['2', 'Write the LBYL version with an explicit None check.'],
            ['3', 'Write the EAFP version catching only TypeError, and list the skipped sites.'],
            ['4', 'Plant a field-name typo, wrap it in except Exception, and watch every row vanish.']
          ]
        },
        {
          kind: 'p',
          text: 'Step 3 asks learners to print the skipped list, not just count it. Four of the gaps sit on Wanneroo Road and five on Marmion Avenue, so a road-by-road summary built from the 74 survivors would quietly under-represent those roads. Learners finish by writing one sentence that reports the coverage alongside the answer: 74 of 97 sites had a weekend figure.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Younger learners',
              p: 'Program a robot that checks a door is open before walking through, then one that tries the door and steps back if it is locked.'
            },
            { h3: 'Teenagers', p: 'Write both versions, test them on rows with gaps, and explain why except Exception is dangerous.' },
            { h3: 'Adults', p: 'Review error handling in work scripts and replace silent broad excepts with named ones and logs.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Wanneroo',
      h2: 'Counted roads and the coming school year',
      intro: 'Facts from Main Roads and the WA Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Busiest counter', p: 'Joondalup Drive west of Wanneroo Road averages 44,223 vehicles a day across the week, from a 2024/25 count.' },
            { h3: 'Wanneroo Road', p: 'With 17 count sites, Wanneroo Road has more counters than any other road in the council.' },
            { h3: '2027 starts', p: 'WA public school students go back on Monday 1 February 2027, and the first term runs until Friday 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Boundary note',
          p: 'Figures use the ABS council boundary of about 683.3 square kilometres. Traffic sites follow the council Main Roads records; school counts use our own point-in-polygon test.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From robot doors to exception handling',
    intro: 'A rough age guide; the trial lesson settles it.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Blocks and rules',
        p: 'Scratch programs with if-then checks and safe fallbacks.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Variables, conditions and the first try and except.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Robust Python',
        p: 'Real files, missing values and tested functions.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Python on the job',
        p: 'Automation and data scripts that fail clearly.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Python and AI',
    h2: 'Do AI assistants handle errors well?',
    intro: 'They often write the broad catch-all, because it makes code run.',
    p1: 'Ask an assistant to fix the Wanneroo crash and a common suggestion is to wrap the loop in except Exception. The error disappears, and so might every row, the next time a field name changes.',
    p2: 'A learner who has watched 97 sites become 0 will ask which exception is expected, how many rows were skipped and why. That turns a quick patch into reliable code.',
    closer: 'In Wanneroo classes, a script that runs is only the start of the review.',
    blogAnchor: 'is coding still worth learning in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons reach Wanneroo',
    intro: 'Classes are taught live over video, which spares families the long drives of the outer north.',
    cells: [
      { h3: 'Teacher present', p: 'Each lesson is live, with code checked while learners type.' },
      { h3: 'Term-based', p: 'Lessons line up with WA school terms and stop for holidays.' },
      { h3: 'Try it first', p: 'A free trial lesson leads to a written plan.' },
      { h3: 'Group options', p: 'Five to ten learners per level, or private sessions.' },
      { h3: 'Regular schedule', p: 'Two sessions every week, around eight a month.' },
      { h3: 'India hours', p: 'A 5pm Wanneroo session starts at 2:30pm Indian time.' }
    ],
    spec: {
      title: 'No seasonal shift',
      p: 'Daylight saving in Western Australia last ended in March 2009, the IANA time zone database shows, so lesson times keep the same two-and-a-half-hour gap with India.'
    }
  },
  fees: {
    h2: 'Wanneroo class fees',
    intro: 'All learners pay the same fees.',
    first: 'No fee for the first lesson, which comes with a plan.',
    group: 'Groups: roughly eight lessons a month, five to ten learners.',
    private: 'Private: roughly eight lessons a month with one teacher.',
    closer: 'Fees are billed in US dollars and start only when the trial has set the course and a regular weekly time. Holiday and missed-lesson details are on the pricing page.'
  },
  reviewsH2: 'Families on Google',
  book: {
    h2: 'Book a free Wanneroo lesson',
    intro: 'Tell us the learner\'s age and what they like. Children might program the robot door; teenagers might write the Wanneroo try and except.',
    success: 'Thanks. We will get in touch about a Wanneroo lesson soon.'
  },
  faq: {
    h2: 'Wanneroo coding and Python questions',
    intro: 'Frequent questions from families and adults in Wanneroo.',
    items: [
      {
        q: 'What was the City of Wanneroo\'s population?',
        a: 'The 2021 Census counted 209,111 residents with a median age of 35. The ABS estimate for 2025 is 246,147.'
      },
      {
        q: 'What do EAFP and LBYL mean?',
        a: 'EAFP is easier to ask forgiveness than permission: try the operation and catch the error. LBYL is look before you leap: check conditions first.'
      },
      {
        q: 'Which style should beginners use?',
        a: 'Either, as long as the check or the caught exception is specific. The real mistake is catching every exception and hiding problems.'
      },
      { q: 'Why not replace missing values with zero?', a: 'Because zero is a measurement and missing is not. In Wanneroo it would invent 23 empty weekends.' },
      { q: 'When can a child start Python?', a: 'Often around 9 or 10, after some block coding. The free lesson checks readiness.' },
      {
        q: 'How many traffic counters does Wanneroo have?',
        a: 'Main Roads lists 97 count sites on 34 roads in the City of Wanneroo, 74 of them with a weekend average.'
      },
      {
        q: 'Do you have a centre in Wanneroo?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Wanneroo classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are groups arranged?',
        a: 'By level and pace, five to ten learners, not by age or suburb. One-to-one lessons are available when no group time fits.',
        boiler: true
      },
      { q: 'Can adults learn Python here?', a: 'Yes. Adults study in adult groups or privately, often to automate spreadsheets and reports.' }
    ]
  },
  next: {
    eyebrow: 'More for Perth learners',
    h2: 'Other pages to try',
    html: 'Families north of the city can also read the <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">Perth Python and coding page</a>, our <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">state guide for Western Australia</a>, and <a class="cg-inline-link" href="/after-scratch-next-step-python-australia">moving from Scratch to Python</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Wanneroo and Perth',
  footerPlaces: [
    { href: '/after-scratch-next-step-python-australia', label: 'After Scratch: Python' },
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-wnro .cg-hero-grid { align-items: center; gap: clamp(1.15rem, 2.7vw, 2.15rem); }
.cg-root.cg-wnro .cg-hero h1 { font-weight: 700; letter-spacing: -0.034em; line-height: 1.01; }
.cg-root.cg-wnro .cg-capsule { border-left: 3px dotted var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-wnro .cg-eyebrow { letter-spacing: 0.105em; font-weight: 650; font-size: 0.78rem; }
.cg-root.cg-wnro .cg-section-head h2 { max-width: 20ch; }
.cg-root.cg-wnro .cg-grid-3 { gap: clamp(0.9rem, 2.8vw, 1.85rem); }
.cg-root.cg-wnro .cg-table caption { text-align: left; font-weight: 620; font-size: 0.87rem; }
.cg-root.cg-wnro .cg-table td:nth-child(2) { text-align: right; font-variant-numeric: tabular-nums; }
.cg-root.cg-wnro .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.55rem; }
.cg-root.cg-wnro .cg-callout { border-radius: 6px; border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'City of Wanneroo (LGA58760), ABS Census 2021 QuickStats (read 12 October 2026): 209,111 people; median age 35; 57,797 families; 78,029 private dwellings; 2.8 people per household; separate houses 65,649 (92.1%, WA 79.7%); couple families with children 28,985 (50.1%, WA 44.6%); aged 5-9 15,950 (7.6%, WA 6.5%); train to work 2,611 (2.5%, WA 1.8%); flats 302 (0.4%, WA 6.5%). ABS ERP 2025 (LGA 58760): 246,147. ABS LGA area 683.2602 sq km. 50 government schools inside the LGA polygon (our test), 38 primary; school suburbs in the outline include Girrawheen, Koondoola, Yanchep and Two Rocks. Main Roads Traffic Digest: 97 sites on 34 roads with LG_NAME Wanneroo (C); Joondalup Dr West of Wanneroo Rd MON_SUN 44,223 (2024/25); Wanneroo Rd 17 sites. WA 2027 Term 1: Monday 1 February to Friday 9 April. Perth +8:00, last DST ended March 2009 (IANA 2026e).',
    localProject: 'EAFP vs LBYL on 97 Wanneroo Traffic Digest rows: SAT_SUN None for 23 (21 in 2024/25, 2 in 2021/22; Marmion Av 5, Wanneroo Rd 4). Naive SAT_SUN/MON_FRI: TypeError at row index 4. LBYL (is not None) and EAFP (except TypeError) both 74 ratios, median 0.793, mean 0.793, min 0.541 Flynn Dr East of Wanneroo Rd (2025/26), max 1.178 Indian Ocean Dr North of Breakwater Dr (2024/25), 3 above 1. None as 0: median 0.75, mean 0.605. Typo SAT_SUM inside except Exception: 0 of 97 kept. Our calculation. Script: scratchpad au/b13/a_wnro.py.',
    requiredMentions: ['246,147', '78,029', '92.1% (65,649)', '50.1% (28,985)', '0.605', 'Indian Ocean Drive', 'Flynn Drive', '44,223', 'Two Rocks'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Wanneroo local government area (LGA58760), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA58760'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Wanneroo LGA 58760, total persons, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.58760.LGA2025.A?format=csvfilewithlabels'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Main Roads Western Australia, Traffic Digest (count sites with average weekday, weekend and all-day volumes and heavy vehicle shares for the latest count year), Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/mrwa-traffic-digest'
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
      'Estimating the 23 missing weekend averages: not done; gaps are reported, not filled.',
      'Comparing ratios across different count years as a trend: not claimed.',
      'Wanneroo suburb (SAL) figures: the page uses the council area only.',
      'Naming individual schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Wanneroo, Main Roads WA or the WA Department of Education.'
    ]
  }
};
