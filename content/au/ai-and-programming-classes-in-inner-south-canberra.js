'use strict';
// Inner South, Canberra (cg- district page, Australia cluster Phase 8, row 334). Keyword slug ai-and-programming-classes-in-*,
// district page (ABS SA3 80106 South Canberra, the Inner South) under Canberra and the ACT.
// Spine: group-conditional anomaly thresholds on 455 ACT smart parking sensors in Griffith and Forrest (265 underground, 190 overhead).
// A global lowest-10% voltage cut-off (2.58 V) flags 54 sensors, 48 of them overhead; per-type cut-offs (2.74 V underground, 2.51 V
// overhead) flag 50, and 22 underground sensors are flagged only by the per-type rule. 453 of 455 records were last edited in October
// 2019, and there are no failure labels, so neither rule can be scored. Script: scratchpad au/b16/a_insc.py. Lesson family:
// group-conditional anomaly thresholds; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'INNER SOUTH',
    label: 'Inner South, Canberra',
    blurb: 'AI and programming classes for Canberra\'s Inner South, where flagging weak parking-sensor batteries with one rule for all sensors mostly flags the wrong kind.'
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
  slug: 'ai-and-programming-classes-in-inner-south-canberra',
  code: 'insc',
  accent: '#9B2428',
  accentRationale: 'Inner South: a muted brick red (hue 358.0, s 0.77, v 0.61), at least 33.2 RGB from every ACT and Canberra page accent, 12.1 from other AU accents and 7.9 from every other site colour; 6.4:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Inner South Canberra',
    eyebrow: 'Inner South (South Canberra district), ACT',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Inner South Canberra' },
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
  routeLabel: 'Inner South, Canberra',
  title: 'AI and Programming Classes in Inner South Canberra',
  description: 'Live online AI and programming classes for Canberra\'s Inner South, ages 6 to adult, with an anomaly-detection project on 455 ACT smart parking sensors.',
  ogDescription: 'One battery alarm for all of Griffith and Forrest\'s parking sensors flags 48 overhead units and 6 underground. Separate rules tell a different story.',
  twitterDescription: 'AI and programming for Inner South learners, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-complete-college',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Inner South Canberra',
    description: 'Machine learning, data and programming lessons for Inner South children, teenagers and adults, each placed after a free trial and taught live.'
  },
  h1: 'AI and programming classes in Canberra\'s Inner South',
  capsuleQ: 'What does the Inner South anomaly project teach?',
  capsule: 'That "unusual" depends on what you compare against. Learners flag parking sensors with low battery voltages in Griffith and Forrest. One rule for all sensors mostly flags overhead units, which simply run at different voltages. Separate rules for each sensor type flag a different set, including 22 underground sensors the single rule missed.',
  lead: 'The Inner South runs from Yarralumla and Deakin across to Kingston, Griffith and Narrabundah. Nearly half its homes are flats or apartments. Around Griffith and Forrest, the ACT Government has fitted hundreds of smart parking sensors, and their battery readings are public.',
  wa: 'Hello Modern Age Coders, we are in Canberra\'s Inner South and would like a free AI or coding lesson.',
  picks: {
    eyebrow: 'Course picks for the Inner South',
    h2: 'AI, statistics and Python',
    intro: 'Courses that suit the anomaly project. A free trial lesson sets the level.',
    items: [
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Anomaly detection, thresholds and honest evaluation.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Models and rules tested on real sensor data.' },
      { course: 'statistics-probability-maths-course', band: 'University and adult', note: 'Percentiles, spread and comparing groups.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python and AI ideas for children.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The Inner South in figures',
      h2: 'Apartments, home offices and professionals',
      intro: 'The ABS calls this area South Canberra (SA3 80106). These are its 2021 Census QuickStats, read on 13 October 2026, with the bureau\'s 2025 estimate.',
      body: [
        {
          kind: 'table',
          caption: 'Inner South counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents, 2021 Census', '31,592'],
            ['Estimated residents, 2025', '34,483'],
            ['Median age', '40'],
            ['Families', '8,109'],
            ['Private dwellings', '15,903'],
            ['Bedrooms per dwelling', '2.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Inner South shares beside the ACT',
          head: ['Share', 'Inner South', 'ACT'],
          rows: [
            ['Flat or apartment', '47.6% (6,309)', '19.4%'],
            ['Managers among workers', '23.9% (4,269)', '17.9%'],
            ['Worked at home', '13.8% (2,453)', '10.9%'],
            ['Walked to work', '8.0% (1,419)', '4.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Apartment living', p: 'Flats and apartments made up 47.6% of dwellings, the highest share of the eight districts on our pages.' },
            { h3: 'Work', p: 'Managers were 23.9% of workers and professionals 41.8%, and one worker in seven worked from home on Census day.' },
            { h3: 'Two population figures', p: 'The 2021 count and the 2025 estimate come from different ABS methods and are shown side by side, never subtracted.' }
          ]
        },
        {
          kind: 'p',
          text: 'The Census ran during the pandemic, which probably inflated working from home that week. ABS figures are rounded and small counts nudged for privacy, so rows may not sum to totals; we keep the bureau\'s numbers as they are.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Weak battery, or just a different sensor?',
      intro: 'The ACT smart parking sensor list records 455 sensors, all in Griffith and Forrest, each with a type and a battery voltage. A maintenance team wants an alert for the weakest 10%. Learners compare one cut-off for every sensor with a separate cut-off for each type.',
      body: [
        {
          kind: 'table',
          caption: 'Voltage by sensor type (ACT open data, read 13 October 2026)',
          head: ['Type', 'Sensors', 'Median', 'Range'],
          rows: [
            ['Underground', '265', '2.84 V', '2.00 to 3.61 V'],
            ['Overhead', '190', '3.61 V', '2.29 to 3.61 V']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Who gets flagged (our calculation)',
          head: ['Rule', 'Cut-off', 'Flagged', 'Underground', 'Overhead'],
          rows: [
            ['One rule for all', '2.58 V', '54', '6', '48'],
            ['Per type: underground', '2.74 V', '28', '28', 'none'],
            ['Per type: overhead', '2.51 V', '22', 'none', '22']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'What one rule does',
              p: 'Overhead sensors have a split: 108 read exactly 3.61 V and the other 82 sit between 2.29 and 2.81 V. A single cut-off lands in that lower cluster, so it flags overhead units almost exclusively.'
            },
            {
              h3: 'What per-type rules do',
              p: 'Judged against their own kind, 28 underground sensors are in their weakest tenth. Only 6 of them were flagged by the single rule; 22 were missed.'
            },
            { h3: 'Overlap', p: 'The two approaches agree on 28 sensors. Twenty-six are flagged only by the single rule and 22 only by the per-type rules.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'What we cannot claim',
          p: 'There is no record of which sensors actually failed, so neither rule can be scored for accuracy. And 453 of the 455 records were last edited in October 2019, so these voltages are an old snapshot. The lesson is about choosing the comparison group, and about saying plainly when a model cannot be checked.'
        },
        {
          kind: 'p',
          text: 'Readings come from the ACTGOV Smart Parking Sensor Assets list on data.act.gov.au, CC BY 4.0, read on 13 October 2026. Parsing the voltage text, the percentiles and every flag count are our own Python calculation.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'In code',
      h2: 'Group first, then threshold',
      intro: 'The fix is a groupby before the percentile, so each sensor is compared with its own kind.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Parse "2.81V BATTERY VOLTAGE" strings into numbers and check none are missing.'],
            ['2', 'Plot voltages by sensor type and describe the two shapes.'],
            ['3', 'Flag the lowest 10% overall, then the lowest 10% within each type.'],
            ['4', 'Compare the flagged sets and write what would be needed to say which is right.']
          ]
        },
        {
          kind: 'p',
          text: 'Step 4 is the AI lesson. A threshold rule is a tiny model, and like any model it needs ground truth to evaluate. Learners list what that would take: dates of battery replacements or sensor faults. Until then, the honest output is two candidate lists and a clear note about why they differ.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Decide who is "tall" in a class of mixed ages, first all together, then age by age.' },
            { h3: 'Teenagers', p: 'Code both rules in Python, chart the flags and explain the overlap.' },
            { h3: 'Adults', p: 'Set alert thresholds per device type, store or region instead of one global number.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around the Inner South',
      h2: 'Exotic avenues, barbecues and 2027 dates',
      intro: 'More Inner South facts from territory open data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Exotic trees', p: 'Of 62,663 public tree records in Inner South suburbs, 37,533 are labelled exotic, about twice the 18,756 native.' },
            { h3: 'Barbecues', p: 'The ACT barbecue list places 32 barbecues in the district, and 79 artworks are recorded too.' },
            { h3: 'Term 4, 2027', p: 'ACT Term 4 runs from Tuesday 12 October to Friday 17 December 2027.' }
          ]
        },
        {
          kind: 'spec',
          title: 'District used',
          p: 'We use the ABS South Canberra area of about 44.4 square kilometres; 12 named suburbs fall inside it by our outline test, including Acton and Parkes.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From "who is tall" to anomaly detection',
    intro: 'Ages are only a starting guide.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Comparing fairly',
        p: 'Block-code games about sorting into groups.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 8 to 12',
        h3: 'First data',
        p: 'Python lists, averages and simple charts.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Machine learning',
        p: 'Rules, models and how to evaluate them.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied AI',
        p: 'Monitoring and alerting with real data.',
        courses: ['ai-ml-masterclass-complete-college', 'statistics-probability-maths-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Can an AI tool find the anomalies for us?',
    intro: 'It can find something. Whether that is the right something is a human question.',
    p1: 'An anomaly detector run on all 455 sensors would happily report the overhead units as odd, because they are different, not because they are failing.',
    p2: 'An Inner South learner who has split the data by type, and admitted there are no failure labels, knows what to ask before trusting any alert.',
    closer: 'In our AI classes, every alarm comes with its comparison group.',
    blogAnchor: 'is learning to code still worth it'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online lessons for the Inner South',
    intro: 'Every lesson is live over video, so learners join from home whether in Kingston or Red Hill.',
    cells: [
      { h3: 'Real teacher', p: 'Lessons are taught live, with work checked as it happens.' },
      { h3: 'Term-time', p: 'Classes follow ACT terms and pause in school holidays.' },
      { h3: 'Free trial', p: 'One free lesson, then a written plan.' },
      { h3: 'Groups', p: 'Level groups of fifteen to twenty, or private lessons.' },
      { h3: 'Two weekly', p: 'Around eight lessons each month.' },
      { h3: 'India time', p: 'In July a 5:30pm Inner South lesson starts at 1pm in India.' }
    ],
    spec: {
      title: 'Seasonal clocks',
      p: 'Canberra follows Sydney in the IANA time zone database, so daylight saving shifts lesson times by an hour against India each October and April.'
    }
  },
  fees: {
    h2: 'Inner South fees',
    intro: 'Every learner pays the same fees.',
    first: 'The trial lesson is free and includes a plan.',
    group: 'Groups: about eight lessons a month, fifteen to twenty learners.',
    private: 'One-to-one: about eight lessons a month with a dedicated teacher.',
    closer: 'We bill in US dollars, starting only when the trial has fixed the course and a weekly slot. Holiday and missed-lesson details live on the pricing page.'
  },
  reviewsH2: 'Google reviews by families',
  book: {
    h2: 'Book a free Inner South lesson',
    intro: 'Let us know the learner\'s age and interests. Younger children can play the "who is tall" game; teenagers can build the two sensor rules.',
    success: 'Thank you. We will be in touch about an Inner South lesson.'
  },
  faq: {
    h2: 'Inner South AI and programming questions',
    intro: 'Questions from Inner South families and adult learners.',
    items: [
      {
        q: 'How many people live in the Inner South?',
        a: 'The 2021 Census counted 31,592 people in the South Canberra area, median age 40. The ABS estimate for 2025 is 34,483.'
      },
      { q: 'What is an anomaly threshold?', a: 'A cut-off that marks readings as unusual, such as the lowest 10% of battery voltages.' },
      {
        q: 'Why use a different threshold for each sensor type?',
        a: 'Because the two types run at different normal voltages, so one cut-off mostly flags the type that is simply different.'
      },
      { q: 'Which rule is correct?', a: 'We cannot say. There are no records of sensor failures, and the readings date mostly from October 2019.' },
      { q: 'Is this suitable for children?', a: 'Younger learners explore the idea with height and age games; the coded project suits teenagers and adults.' },
      { q: 'Where are the smart parking sensors?', a: 'All 455 in the ACT list are in Griffith and Forrest: 242 in Forrest and 213 in Griffith.' },
      {
        q: 'Do you have a centre in the Inner South?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Inner South classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are groups formed?',
        a: 'By level and pace, fifteen to twenty per group, not by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can adults study AI here?', a: 'Yes. Adults learn in their own groups or privately, often applying monitoring ideas at work.' }
    ]
  },
  next: {
    eyebrow: 'More for Canberra learners',
    h2: 'Continue reading',
    html: 'Families south of the lake can also see the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canberra">Canberra page</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-australian-capital-territory">ACT guide</a> and <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teenagers</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Inner South and Canberra',
  footerPlaces: [
    { href: '/ai-classes-for-teens-australia', label: 'AI for teens' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canberra', label: 'Canberra' },
    { href: '/coding-and-ai-classes-in-australian-capital-territory', label: 'ACT' },
    { href: '/coding-classes-for-kids-canberra', label: 'Kids in Canberra' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-insc .cg-hero-grid { align-items: end; gap: clamp(1.05rem, 2.5vw, 2.1rem); }
.cg-root.cg-insc .cg-hero h1 { font-weight: 670; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-insc .cg-capsule { border-left: 2px solid var(--cg-accent); border-right: 2px solid var(--cg-accent); padding: 0 0.95rem; }
.cg-root.cg-insc .cg-eyebrow { letter-spacing: 0.12em; font-weight: 640; font-size: 0.78rem; }
.cg-root.cg-insc .cg-section-head h2 { max-width: 19ch; }
.cg-root.cg-insc .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.7rem); }
.cg-root.cg-insc .cg-table caption { text-align: left; font-weight: 625; font-size: 0.88rem; }
.cg-root.cg-insc .cg-table td:nth-child(n+2) { font-variant-numeric: tabular-nums; }
.cg-root.cg-insc .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.7rem; }
.cg-root.cg-insc .cg-callout { border-radius: 3px; border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'South Canberra SA3 80106 (Inner South), ABS Census 2021 QuickStats (read 13 October 2026): 31,592 people; median age 40; 8,109 families; 15,903 private dwellings; 2.7 bedrooms per dwelling; flat or apartment 6,309 (47.6%, ACT 19.4%; highest of the eight SA3s on these pages); managers 4,269 (23.9%, ACT 17.9%); worked at home 2,453 (13.8%, ACT 10.9%); walked to work 1,419 (8.0%, ACT 4.0%). ABS ERP 2025 (SA3 80106): 34,483. ABS SA3 area 44.4113 sq km; 12 named suburbs by our SAL-centroid test, incl. Acton and Parkes. ACT open data (CC BY 4.0, 13 October 2026): tree records 62,663 (37,533 exotic, 18,756 native); barbecues 32; artworks 79. ACT 2027 Term 4 Tuesday 12 October to Friday 17 December. Canberra = Australia/Sydney (IANA 2026e).',
    localProject: 'ACTGOV Smart Parking Sensor Assets: 455 sensors (Forrest 242, Griffith 213), 265 UNDERGROUND (median 2.84 V, 2.00 to 3.61), 190 OVERHEAD (all Forrest; median 3.61 V, 108 at 3.61, min 2.29). statistics.quantiles inclusive, 10th percentile: global 2.58 V flags 54 (48 overhead, 6 underground); underground 2.74 V flags 28; overhead 2.51 V flags 22. Overlap 28; global-only 26; per-type-only 22, all underground. last_edited_date 2019-10 for 453 of 455. No failure labels. Our calculation. Script: scratchpad au/b16/a_insc.py.',
    requiredMentions: ['34,483', '15,903', '47.6% (6,309)', '23.9% (4,269)', '2.58 V', '22 underground sensors', 'October 2019', '62,663', 'Griffith and Forrest'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, South Canberra statistical area level 3 (SA3 80106), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/80106'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by ASGS 2021 regions (ABS_ANNUAL_ERP_ASGS2021), SA3 80106 South Canberra, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_ASGS2021,1.2.0/ERP.SA3.80106.A?startPeriod=2024&format=csvfilewithlabels'
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
        claim: 'ACT Government open data, ACTGOV Smart Parking Sensor Assets (data.act.gov.au wret-g63c), Creative Commons Attribution 4.0, downloaded 13 October 2026; records mostly last edited October 2019.',
        url: 'https://www.data.act.gov.au/d/wret-g63c'
      },
      {
        claim: 'ACT Government open data, ACTGOV Tree Assets (data.act.gov.au 9qch-rvqr), Creative Commons Attribution 4.0, grouped counts by suburb queried 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/9qch-rvqr'
      },
      {
        claim: 'ACT Government open data, ACTGOV Barbecue Assets (data.act.gov.au qxhv-bxbv), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/qxhv-bxbv'
      },
      {
        claim: 'ACT Government open data, ACTGOV Artwork Assets (data.act.gov.au a69k-qah8), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/a69k-qah8'
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
      'Which sensors have failed or need replacement: not claimed; the data have no failure records.',
      'Current battery condition: not claimed; most readings are from records last edited in October 2019.',
      'Parking occupancy or demand: not claimed; the asset list gives no occupancy data.',
      'Inner South suburb (SAL) Census figures: not used; the page uses the SA3 district.',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the ACT Government.'
    ]
  }
};
