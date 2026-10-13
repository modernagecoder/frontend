'use strict';
// Tuggeranong, Canberra (cg- district page, Australia cluster Phase 8, row 329). Keyword slug online-coding-and-python-classes-in-*,
// district page (ABS SA3 80107 Tuggeranong) under Canberra and the ACT.
// Spine: str.rstrip(" SHELTER") strips a set of characters, not the word: on 61 Tuggeranong shelter records it cuts 9 names
// (CENTRE -> CEN, POINT HUT -> POINT HU); rstrip(" BARBECUE") turns all 33 barbecue names' ELECTRIC into ELECTRI. str.removesuffix
// fixes both; ACT-wide the barbecue list mixes BARBECUE (311) and BARBEQUE (34). Script: scratchpad au/b16/a_tugg.py.
// Lesson family: rstrip vs removesuffix; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'TUGGERANONG',
    label: 'Tuggeranong, Canberra',
    blurb: 'Online coding and Python classes for Tuggeranong, where one innocent string method turns Tuggeranong Town Centre into Tuggeranong Town Cen.'
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
  slug: 'online-coding-and-python-classes-in-tuggeranong-canberra',
  code: 'tugg',
  accent: '#724C29',
  accentRationale: 'Tuggeranong: a muted earth brown (hue 28.8, s 0.64, v 0.45), at least 32.4 RGB from every ACT and Canberra page accent, 13.7 from other AU accents and 8.2 from every other site colour; 6.1:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Tuggeranong',
    eyebrow: 'Tuggeranong district, south Canberra, ACT',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Tuggeranong' },
      { type: 'City', name: 'Canberra' },
      { type: 'AdministrativeArea', name: 'Australian Capital Territory' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-australian-capital-territory', name: 'Australian Capital Territory' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-canberra', name: 'Canberra' }
  ],
  nav: [
    { label: 'Canberra', href: '/vibe-coding-and-ai-agents-classes-in-canberra' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Tuggeranong, Canberra',
  title: 'Online Coding and Python Classes in Tuggeranong, Canberra',
  description: 'Live online coding and Python classes for Tuggeranong, ages 6 to adult, with a Python string project that cleans real ACT shelter and barbecue records.',
  ogDescription: 'Strip " SHELTER" from Tuggeranong asset names with rstrip and Town Centre becomes Town Cen. One method call explains why.',
  twitterDescription: 'Python and coding for Tuggeranong learners: live online lessons, first one free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Tuggeranong',
    description: 'Python and programming lessons for children, teenagers and adults across Tuggeranong, set by level after a free trial and taught live.'
  },
  h1: 'Online coding and Python classes in Tuggeranong',
  capsuleQ: 'What Python lesson comes from Tuggeranong data?',
  capsule: 'That rstrip does not remove a word. Learners tidy ACT Government shelter and barbecue names by stripping the last word. str.rstrip(" SHELTER") treats its argument as a bag of letters, so "Town Centre Shelter" becomes "Town Cen". The method made for the job, str.removesuffix, leaves every name intact.',
  lead: 'Tuggeranong is Canberra\'s southern valley of 18 suburbs around Lake Tuggeranong, from Wanniassa and Isabella Plains down to Banks and Conder. Its parks are well equipped, with 61 shelters and 33 barbecues in the ACT asset lists, and their names follow a tidy pattern that invites a quick clean-up in Python.',
  wa: 'Hi Modern Age Coders, I live in Tuggeranong and would like to book a free Python or coding lesson.',
  picks: {
    eyebrow: 'Course picks for Tuggeranong',
    h2: 'Python, step by step',
    intro: 'Courses that build careful string handling. The free trial lesson places the learner.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Strings, methods and tests on messy public data.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python from basics to dependable scripts.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First typed Python for children, one idea at a time.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Cleaning text columns before any analysis.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Tuggeranong in the 2021 Census',
      h2: 'Houses, cars and a big public tree count',
      intro: 'Figures for the Tuggeranong statistical area (ABS SA3 80107) from 2021 Census QuickStats, read on 13 October 2026, with the ABS 2025 estimate.',
      body: [
        {
          kind: 'table',
          caption: 'Tuggeranong district counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents, 2021 Census', '89,461'],
            ['Estimated residents, 2025', '90,199'],
            ['Median age', '38'],
            ['Families', '25,320'],
            ['Private dwellings', '35,314'],
            ['Motor vehicles per dwelling', '2.0']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Tuggeranong shares compared with the ACT',
          head: ['Share', 'Tuggeranong', 'ACT'],
          rows: [
            ['Separate houses', '79.5% (26,178)', '63.2%'],
            ['Drove a car to work', '66.8% (31,605)', '59.0%'],
            ['Bachelor degree or higher', '28.7% (20,752)', '42.9%'],
            ['Residents aged 10 to 14', '6.4% (5,768)', '6.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'A driving district', p: 'Two in three Tuggeranong workers drove to work in 2021, the highest share among the eight districts on our pages.' },
            { h3: 'Steady size', p: 'The 2021 count of 89,461 and the ABS 2025 estimate of 90,199 sit close together, unlike faster-growing districts.' },
            { h3: 'Courts', p: 'The ACT basketball court list places 13 public courts in Tuggeranong, more than any other district by our count.' }
          ]
        },
        {
          kind: 'p',
          text: 'The 2021 Census fell during the pandemic, so commuting answers describe that week. ABS figures are rounded and small counts lightly adjusted for privacy; parts may not sum to totals, and we print them as published.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'The method that eats letters',
      intro: 'Each ACT shelter record has a name such as "Clift Crescent Pedestrian Parkland Shelter". A learner wants the place without the last word and reaches for rstrip. The trouble is that rstrip(" SHELTER") does not look for the word; it removes any of the characters space, S, H, E, L, T and R from the end, for as long as it can.',
      body: [
        {
          kind: 'table',
          caption: 'Two methods on Tuggeranong asset names (our run on ACT open data)',
          head: ['Records', 'rstrip result', 'removesuffix result'],
          rows: [
            ['61 shelters, 49 ending in " SHELTER"', '9 names damaged', '49 trimmed, 12 untouched'],
            ['Tuggeranong Town Centre Shelter', 'TUGGERANONG TOWN CEN', 'TUGGERANONG TOWN CENTRE'],
            ['Pine Island / Point Hut Shelter', 'PINE ISLAND / POINT HU', 'PINE ISLAND / POINT HUT'],
            ['Pine Island Central (no suffix)', 'PINE ISLAND CENTRA', 'PINE ISLAND CENTRAL'],
            ['33 barbecues ending in " BARBECUE"', 'All 33 end in ELECTRI', 'All 33 end in ELECTRIC']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why CENTRE dies',
              p: 'After removing " SHELTER", rstrip keeps going: the last letters of CENTRE are E, R, T and E, all in its set, so they go too and it stops at N.'
            },
            { h3: 'Why ELECTRIC loses its C', p: 'The barbecue suffix contains C, so every "Electric Barbecue" loses the final C of ELECTRIC as well.' },
            {
              h3: 'Right method',
              p: 'str.removesuffix, added in Python 3.9, removes the exact ending once and only if it is there. It even spares Pine Island Central, a name with no suffix that rstrip still clips to CENTRA.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'A second surprise',
          p: 'Across the whole ACT barbecue list, 311 names end in BARBECUE and 34 in BARBEQUE. Even the correct method leaves the 34 untouched, so learners count both spellings before choosing what to remove, and report how many records each rule changed.'
        },
        {
          kind: 'p',
          text: 'Names come from the ACTGOV Shelter Assets and Barbecue Assets datasets on data.act.gov.au, licensed CC BY 4.0, downloaded on 13 October 2026. Which records are in Tuggeranong is decided by each record\'s suburb and our district mapping; all counts are from our own script.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Fixing it in Python',
      h2: 'Test the edge cases first',
      intro: 'The lesson is as much about testing as about one method.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Load Tuggeranong shelter and barbecue names and print ten of each.'],
            ['2', 'Apply rstrip and list every name whose result is not the expected place.'],
            ['3', 'Switch to removesuffix and check that untouched names really lacked the suffix.'],
            ['4', 'Count suffix spellings across the ACT and write a rule that handles both.']
          ]
        },
        {
          kind: 'p',
          text: 'A good test set includes a name ending in CENTRE, a name ending in HUT and a name with no suffix at all. Learners who test only "Park Shelter" will see rstrip pass, because PARK ends in K, a letter outside the set. Tuggeranong data happen to contain all three cases, which makes them better teaching material than any invented list.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Remove letters from the end of a word while they appear in a bag, and see which words survive.' },
            { h3: 'Teenagers', p: 'Write both versions with tests, then explain the bug in their own words.' },
            { h3: 'Adults', p: 'Audit clean-up scripts at work for rstrip, lstrip and strip used as if they removed whole words.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Tuggeranong',
      h2: 'Trees, bin days and the 2027 calendar',
      intro: 'Local details from ACT Government open data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Most public trees',
              p: 'Tuggeranong suburbs hold 188,908 public tree records by our count, more than any other district, though 88,151 carry no native or exotic label.'
            },
            { h3: 'Tuesday bins', p: 'In the ACT NOWaste list, 17 of the 18 Tuggeranong suburbs put their garbage out on a Tuesday.' },
            { h3: 'Term 1, 2027', p: 'ACT public schools welcome new students on Monday 1 February 2027; Canberra Day is Monday 8 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'District used',
          p: 'Tuggeranong is the ABS statistical area of about 159.6 square kilometres, with 18 named suburbs assigned by our test of ABS suburb outlines.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From letter games to string methods',
    intro: 'A rough age guide; the trial decides.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Blocks first',
        p: 'Scratch projects with words, lists and careful rules.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Typed Python',
        p: 'Strings, loops and first tests.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with data',
        p: 'Cleaning real text and checking every change.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Python at work',
        p: 'Reliable scripts for data and automation.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Python and AI',
    h2: 'Would an AI assistant make this mistake?',
    intro: 'It can, and the result still looks plausible.',
    p1: 'rstrip with a word argument looks right at a glance, so assistants and people both reach for it. On "Park Shelter" it works, which is exactly why nobody notices the Town Cen problem until a report goes out.',
    p2: 'Tuggeranong learners test generated code on awkward real names and read the documentation for the method they are about to trust.',
    closer: 'Our Python classes use AI as a fast helper and testing as the safety net.',
    blogAnchor: 'why reading code beats trusting it in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Tuggeranong classes work',
    intro: 'Lessons are live over video, so nobody has to drive into town after school.',
    cells: [
      { h3: 'Live lessons', p: 'A teacher leads every class and checks code as it is typed.' },
      { h3: 'School terms', p: 'Classes follow ACT terms and pause during holidays.' },
      { h3: 'Free trial', p: 'One free lesson, then a written course plan.' },
      { h3: 'Small groups', p: 'Five to ten learners at one level, or one to one.' },
      { h3: 'Rhythm', p: 'Two lessons a week, roughly eight a month.' },
      { h3: 'India timing', p: 'In winter a 5pm Tuggeranong lesson is 12:30pm in India; in summer it is 11:30am.' }
    ],
    spec: {
      title: 'Canberra time',
      p: 'The IANA database links Canberra to Sydney time, with daylight saving from the first Sunday in October to the first Sunday in April.'
    }
  },
  fees: {
    h2: 'Tuggeranong class fees',
    intro: 'Fees are the same for all learners.',
    first: 'No charge for the first lesson, which includes a plan.',
    group: 'Groups: about eight lessons a month, five to ten learners.',
    private: 'One-to-one: about eight lessons a month with a single teacher.',
    closer: 'Fees are billed in US dollars and only start when the trial has fixed the course and a weekly time. Holidays and missed lessons are covered on the pricing page.'
  },
  reviewsH2: 'What families say on Google',
  book: {
    h2: 'Book a free Tuggeranong lesson',
    intro: 'Tell us the learner\'s age and interests. Children might play the letter-bag game; teenagers might fix the shelter names.',
    success: 'Thanks. We will be in touch about a Tuggeranong lesson.'
  },
  faq: {
    h2: 'Tuggeranong coding and Python questions',
    intro: 'Questions from Tuggeranong families and adult learners.',
    items: [
      {
        q: 'What was Tuggeranong\'s population?',
        a: 'The 2021 Census counted 89,461 residents in the district, median age 38. The ABS estimate for 2025 is 90,199.'
      },
      {
        q: 'What does rstrip actually do?',
        a: 'It removes characters from the end of a string while they belong to the set you pass in. It never treats the argument as one word.'
      },
      { q: 'What should I use instead?', a: 'str.removesuffix, available from Python 3.9, removes an exact ending once if it is present.' },
      { q: 'Why test with real data?', a: 'Real names include awkward cases such as CENTRE and HUT that invented examples tend to miss.' },
      { q: 'Is Python suitable for 10-year-olds?', a: 'Many start typed Python around 9 or 10 after some block coding. The free lesson checks readiness.' },
      {
        q: 'How many shelters are in Tuggeranong?',
        a: 'The ACT shelter asset list places 61 shelters in Tuggeranong suburbs, as downloaded on 13 October 2026.'
      },
      {
        q: 'Do you have a centre in Tuggeranong?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Tuggeranong classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How do you group learners?',
        a: 'By level and pace in groups of five to ten, not by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can adults take Python lessons?', a: 'Yes. Adults learn in adult groups or privately, often to clean and report on data at work.' }
    ]
  },
  next: {
    eyebrow: 'More for Canberra learners',
    h2: 'Other pages to try',
    html: 'South-side families can also read the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canberra">Canberra page</a>, our <a class="cg-inline-link" href="/coding-and-ai-classes-in-australian-capital-territory">ACT guide</a>, and <a class="cg-inline-link" href="/after-scratch-next-step-python-australia">moving from Scratch to Python</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Tuggeranong and Canberra',
  footerPlaces: [
    { href: '/after-scratch-next-step-python-australia', label: 'After Scratch: Python' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canberra', label: 'Canberra' },
    { href: '/coding-and-ai-classes-in-australian-capital-territory', label: 'ACT' },
    { href: '/coding-classes-for-kids-canberra', label: 'Kids in Canberra' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-tugg .cg-hero-grid { align-items: center; gap: clamp(1.15rem, 2.7vw, 2.15rem); }
.cg-root.cg-tugg .cg-hero h1 { font-weight: 700; letter-spacing: -0.033em; line-height: 1.02; }
.cg-root.cg-tugg .cg-capsule { border-left: 3px dotted var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-tugg .cg-eyebrow { letter-spacing: 0.09em; font-weight: 680; font-size: 0.8rem; }
.cg-root.cg-tugg .cg-section-head h2 { max-width: 21ch; }
.cg-root.cg-tugg .cg-grid-3 { gap: clamp(0.95rem, 2.4vw, 1.75rem); }
.cg-root.cg-tugg .cg-table caption { text-align: left; font-weight: 610; font-size: 0.89rem; }
.cg-root.cg-tugg .cg-table td { hyphens: auto; }
.cg-root.cg-tugg .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.6rem; }
.cg-root.cg-tugg .cg-callout { border-radius: 6px; border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Tuggeranong SA3 80107, ABS Census 2021 QuickStats (read 13 October 2026): 89,461 people; median age 38; 25,320 families; 35,314 private dwellings; 2.0 vehicles per dwelling; separate houses 26,178 (79.5%, ACT 63.2%); car as driver 31,605 (66.8%, ACT 59.0%); bachelor or higher 20,752 (28.7%, ACT 42.9%); aged 10-14 5,768 (6.4%, ACT 6.0%). ABS ERP 2025 (SA3 80107): 90,199. ABS SA3 area 159.6268 sq km; 18 named suburbs by our SAL-centroid test. ACT open data (CC BY 4.0, 13 October 2026): shelters 61, barbecues 33, basketball courts 13 (most of the eight districts), tree records 188,908 (78,120 native, 22,637 exotic, 88,151 unlabelled); ACT NOWaste 18 Tuggeranong rows, 17 Tuesday. ACT 2027 Term 1 begins Monday 1 February; Canberra Day Monday 8 March. Canberra = Australia/Sydney (IANA 2026e).',
    localProject: 'Python 3.13: 61 Tuggeranong shelter asset_name values, 49 end with " SHELTER"; rstrip(" SHELTER") differs from removesuffix on 9 (CENTRE -> CEN x7 incl. Tuggeranong Town Centre, Calwell, Wanniassa, Theodore shopping centres; POINT HUT -> POINT HU x1; PINE ISLAND CENTRAL, which has no suffix, -> PINE ISLAND CENTRA). 33 barbecue names all end " BARBECUE"; rstrip(" BARBECUE") leaves ELECTRI on all 33. ACT-wide: shelters 96 of 534 damaged; barbecue last word BARBECUE 311, BARBEQUE 34; rstrip(" BARBECUE") differs on 201 of 345. Our script. Script: scratchpad au/b16/a_tugg.py.',
    requiredMentions: [
      '90,199',
      '35,314',
      '79.5% (26,178)',
      '66.8% (31,605)',
      'TUGGERANONG TOWN CEN',
      'ELECTRI',
      '188,908',
      'Lake Tuggeranong',
      '311 names end in BARBECUE'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Tuggeranong statistical area level 3 (SA3 80107), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/80107'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by ASGS 2021 regions (ABS_ANNUAL_ERP_ASGS2021), SA3 80107 Tuggeranong, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_ASGS2021,1.2.0/ERP.SA3.80107.A?startPeriod=2024&format=csvfilewithlabels'
      },
      {
        claim: 'ABS ASGS 2021 Statistical Area Level 3 boundary service (district outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SA3/MapServer'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines, used to place each suburb in a district).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'ACT Government open data, ACTGOV Shelter Assets (data.act.gov.au pf5q-vheg), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/pf5q-vheg'
      },
      {
        claim: 'ACT Government open data, ACTGOV Barbecue Assets (data.act.gov.au qxhv-bxbv), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/qxhv-bxbv'
      },
      {
        claim: 'ACT Government open data, Basketball Courts (data.act.gov.au igti-4f4a), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/igti-4f4a'
      },
      {
        claim: 'ACT Government open data, ACTGOV Tree Assets (data.act.gov.au 9qch-rvqr), Creative Commons Attribution 4.0, grouped counts by suburb queried 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/9qch-rvqr'
      },
      {
        claim: 'ACT Government open data, ACT Suburb Next Garbage, Recycling and Green Waste Collection Dates (data.act.gov.au jzzy-44un), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/jzzy-44un'
      },
      {
        claim: 'Python documentation, built-in types: str.rstrip removes a set of characters; str.removesuffix (new in 3.9) removes a suffix string.',
        url: 'https://docs.python.org/3/library/stdtypes.html#str.removesuffix'
      },
      {
        claim: 'ACT Government open data, ACT Education Public Holidays and Term Dates (data.act.gov.au 4kcq-44ad): 2027 Term 1 begins Monday 1 February (new students), Canberra Day Monday 8 March, Term 3 Tuesday 20 July to Friday 24 September, Term 4 Tuesday 12 October to Friday 17 December.',
        url: 'https://www.data.act.gov.au/d/4kcq-44ad'
      },
      {
        claim: 'IANA time zone database 2026e, backward file: Australia/Canberra links to Australia/Sydney.',
        url: 'https://data.iana.org/time-zones/tzdb/backward'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: rule AN, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Tuggeranong suburb (SAL) Census figures: not used; the page uses the SA3 district.',
      'Kambah and Fadden: used as required mentions on the ACT page; kept off this page.',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the ACT Government or Transport Canberra.'
    ]
  }
};
