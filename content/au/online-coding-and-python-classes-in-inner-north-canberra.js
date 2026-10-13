'use strict';
// Inner North, Canberra (cg- district page, Australia cluster Phase 8, row 333). Keyword slug online-coding-and-python-classes-in-*,
// district page (ABS SA3 80105 North Canberra, the Inner North) under Canberra and the ACT.
// Spine: collections.Counter arithmetic on ACT Registered Vehicles by Make, Model and Suburb (1 September 2026; counts of 10 or less
// suppressed), Braddon (69 rows) vs Ainslie (62 rows): Braddon - Ainslie keeps 51 positive differences, subtract() keeps 89 keys with
// 34 negatives and 4 zeros, & keeps 42 shared keys, | 89. 27 keys appear only for Braddon and 20 only for Ainslie, but suppression
// means "only" can be "10 or fewer". Script: scratchpad au/b16/a_innc.py. Lesson family: Counter arithmetic; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'INNER NORTH',
    label: 'Inner North, Canberra',
    blurb: 'Online coding and Python classes for Canberra\'s Inner North, where comparing Braddon\'s and Ainslie\'s registered cars with Counter arithmetic teaches what minus really does.'
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
  slug: 'online-coding-and-python-classes-in-inner-north-canberra',
  code: 'innc',
  accent: '#2A2453',
  accentRationale: 'Inner North: a muted night indigo (hue 247.7, s 0.57, v 0.33), at least 24.6 RGB from every ACT and Canberra page accent, 12.7 from other AU accents and 7.5 from every other site colour; 11.6:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Inner North Canberra',
    eyebrow: 'Inner North (North Canberra district), ACT',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Inner North Canberra' },
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
  routeLabel: 'Inner North, Canberra',
  title: 'Online Coding and Python Classes in Inner North Canberra',
  description: 'Live online coding and Python classes for Canberra\'s Inner North, ages 6 to adult, with a Python project comparing two suburbs\' registered vehicles using Counter.',
  ogDescription: 'Braddon minus Ainslie in Python gives 51 car types, not 89. Counter arithmetic quietly drops every negative difference.',
  twitterDescription: 'Python and coding for Inner North learners, taught live online with a free first lesson.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Inner North Canberra',
    description: 'Live Python lessons for Inner North children, teens and adults, with every learner placed after a free trial.'
  },
  h1: 'Online coding and Python classes in Canberra\'s Inner North',
  capsuleQ: 'What Python feature does the Inner North project explore?',
  capsule: 'Arithmetic on collections.Counter. Learners load ACT vehicle registrations for Braddon and Ainslie into two Counters and subtract one from the other. The minus sign keeps only the 51 positive differences and silently drops the rest; the subtract method keeps all 89. Knowing which one you used changes every conclusion.',
  lead: 'The Inner North spreads from the City and Braddon out to Watson, Hackett and Downer. Of the eight districts on our pages it has the highest share of people walking to work: more than one in eight in 2021, with over 40% of homes being flats or apartments. Its suburbs also register very different cars, which makes a good Python exercise.',
  wa: 'Hello, we live in Canberra\'s Inner North. Could we arrange a free trial Python lesson?',
  picks: {
    eyebrow: 'Course picks for the Inner North',
    h2: 'Python, from first programs to data work',
    intro: 'Courses that build the habits the Counter project needs. A free trial sets the level.',
    items: [
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'The standard library in depth, collections included.'
      },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Dictionaries, counters and tests on real tables.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python, counting and comparing things.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Comparisons that respect gaps in the data.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The Inner North in the Census',
      h2: 'Apartments, walkers and students',
      intro: 'The ABS calls this district the North Canberra statistical area (SA3 80105). Its 2021 QuickStats, read on 13 October 2026, sit here beside the bureau\'s 2025 estimate.',
      body: [
        {
          kind: 'table',
          caption: 'Inner North counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents, 2021 Census', '61,188'],
            ['Estimated residents, 2025', '68,290'],
            ['Median age', '31'],
            ['Families', '13,352'],
            ['Private dwellings', '27,982'],
            ['Motor vehicles per dwelling', '1.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Inner North shares compared with the ACT',
          head: ['Share', 'Inner North', 'ACT'],
          rows: [
            ['Flat or apartment', '42.6% (10,078)', '19.4%'],
            ['Walked to work', '13.4% (4,888)', '4.0%'],
            ['Drove a car to work', '40.8% (14,925)', '59.0%'],
            ['Residents aged 15 to 19', '7.7% (4,714)', '5.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Walkable', p: 'The walking share was more than three times the ACT figure, and only 40.8% of workers drove.' },
            { h3: 'Fewer cars', p: 'Homes averaged 1.4 motor vehicles, the lowest of the eight districts on our pages, which shows in the registration data too.' },
            { h3: 'Teen residents', p: 'Young people aged 15 to 19 made up 7.7% of residents, compared with 5.8% for the ACT, and degree holders were common too.' }
          ]
        },
        {
          kind: 'p',
          text: 'Census night was during the pandemic, so walking and driving shares describe that week. The ABS rounds its shares and slightly perturbs small counts; table parts may not sum, and we print its figures unchanged.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'What Braddon minus Ainslie really means',
      intro: 'The ACT publishes registered vehicles by suburb, make, model and emissions band, dated 1 September 2026, leaving out any count of ten or fewer. Braddon has 69 published rows and Ainslie 62. Learners turn each into a Counter keyed by vehicle type and ask: which types are more common in Braddon, and by how much?',
      body: [
        {
          kind: 'table',
          caption: 'Counter operations on Braddon (A) and Ainslie (B), Python 3.13 (our run)',
          head: ['Operation', 'Keys kept', 'What it means'],
          rows: [
            ['A - B', '51', 'Positive differences only; negatives and zeros vanish'],
            ['A.subtract(B)', '89', 'Every key, including 34 negative and 4 zero results'],
            ['A & B', '42', 'Types published in both, at the smaller count'],
            ['A | B', '89', 'Types in either, at the larger count']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'More in Braddon',
              p: 'The biggest positive gaps are small hatchbacks and compact SUVs: one popular Mazda model by 37 vehicles and one Hyundai model by 30.'
            },
            {
              h3: 'More in Ainslie',
              p: 'Going the other way, Ainslie leads on a Subaru wagon by 28 and on one electric SUV in the top emissions band by 23, as well as one trailer type.'
            },
            {
              h3: 'The vanishing third',
              p: 'Using the minus sign alone, a learner would never see Ainslie\'s 34 leads at all, because Counter subtraction drops results that are zero or below.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Suppression changes "only"',
          p: 'Twenty-seven types appear only in Braddon\'s rows and 20 only in Ainslie\'s. That does not mean the other suburb has none: anything from zero to ten is simply not published. Learners label these as "Braddon published, Ainslie 10 or fewer" and avoid adding counts together into totals the data cannot support.'
        },
        {
          kind: 'p',
          text: 'Our source is the Access Canberra registration table published on data.act.gov.au under CC BY 4.0, which we fetched on 13 October 2026. Building the two Counters, taking the differences and tallying keys were all done in our own Python session.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Writing it in Python',
      h2: 'Four operators and one method',
      intro: 'Counter supports +, -, & and | as multiset operations. Each one keeps only positive results, which is handy and dangerous in equal measure.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Build one Counter per suburb, keyed by make, model and emissions band.'],
            ['2', 'Compute A - B and B - A and check that together they still miss the 4 ties.'],
            ['3', 'Use subtract() to keep every difference and sort by size in both directions.'],
            ['4', 'Mark every key missing from one side as "10 or fewer", not zero.']
          ]
        },
        {
          kind: 'p',
          text: 'Step 2 makes the behaviour visible: A - B has 51 keys, B - A has 34, and the four ties are in neither. Learners then try unary plus and minus on the subtract() result, which split it back into the same two groups. By the end they can say which operation answers "who has more of what" and which answers "what do both have".'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Compare two bags of coloured counters and decide what "take away" should mean when one bag has fewer.' },
            { h3: 'Teenagers', p: 'Run all four operations on the two suburbs and explain every key count.' },
            { h3: 'Adults', p: 'Use Counter for stock, survey or log comparisons and document what each operation drops.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around the Inner North',
      h2: 'Exotic trees, street art and Friday bins',
      intro: 'A few more Inner North facts from territory open data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Exotic streets', p: 'Of 54,182 public tree records in Inner North suburbs, 31,730 are labelled exotic and 17,731 native, by our count.' },
            { h3: 'Public art', p: 'Seventy-five artworks are listed, including 38 sculptures, 18 street art pieces and 10 murals.' },
            { h3: 'Friday collection', p: 'Twelve of the 13 Inner North suburbs in the ACT NOWaste list put their garbage out on a Friday.' }
          ]
        },
        {
          kind: 'spec',
          title: 'District and dates',
          p: 'The boundary is the bureau\'s North Canberra area, roughly 44.7 square kilometres; our outline test puts 13 named suburbs in it. Russell has no rows in the vehicle data. ACT schools welcome new students on Monday 1 February 2027.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counter bags to collections.Counter',
    intro: 'Ages are a guide; the trial lesson places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Blocks first',
        p: 'Scratch projects about counting and comparing.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Typed Python',
        p: 'Lists, dictionaries and simple tallies.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with data',
        p: 'The collections module on real public tables.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Python at work',
        p: 'Careful comparisons and clean reporting.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Python and AI',
    h2: 'Can an assistant compare the suburbs for you?',
    intro: 'It can write the code in seconds; reading the result needs you.',
    p1: 'An assistant asked for "what Braddon has more of" will happily write A - B. The output is correct for that question and silent about the 34 types where Ainslie leads.',
    p2: 'An Inner North learner who knows what Counter subtraction discards, and what suppression hides, can turn generated code into a fair comparison.',
    closer: 'Our Python classes pair quick drafts with slow, careful reading.',
    blogAnchor: 'why understanding code still beats copying it'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Inner North classes, online',
    intro: 'Lessons are live over video, so learners join from an apartment in Braddon or a house in Hackett.',
    cells: [
      { h3: 'Live and guided', p: 'A teacher leads every lesson and reviews code as it is written.' },
      { h3: 'School calendar', p: 'Lessons follow ACT terms and pause for holidays.' },
      { h3: 'Trial lesson', p: 'One free class, then a written recommendation.' },
      { h3: 'Group size', p: 'Level-matched groups of fifteen to twenty, or private.' },
      { h3: 'Pace', p: 'Two lessons a week, about eight a month.' },
      { h3: 'India hours', p: 'In summer a 7pm Inner North lesson begins at 1:30pm in India.' }
    ],
    spec: { title: 'Clock changes', p: 'The IANA time zone database links Canberra to Sydney, so clocks move forward on 4 October 2026 and back on 4 April 2027.' }
  },
  fees: {
    h2: 'Inner North fees',
    intro: 'All learners pay the same fees.',
    first: 'The first class is free and comes with a plan.',
    group: 'Groups: roughly eight sessions monthly, fifteen to twenty learners.',
    private: 'Private classes: about eight a month, one teacher.',
    closer: 'Billing is in US dollars, and nothing is charged until the trial lesson has agreed what to study and when. Holidays and missed classes are explained on the pricing page.'
  },
  reviewsH2: 'Reviews on Google',
  book: {
    h2: 'Book a free Inner North lesson',
    intro: 'Send us the learner\'s age and what excites them. Primary children often begin with the two-bags game; secondary students can go straight to the Braddon and Ainslie Counters.',
    success: 'Thank you. We will contact you about an Inner North lesson.'
  },
  faq: {
    h2: 'Inner North coding and Python questions',
    intro: 'Questions from Inner North families and adult learners.',
    items: [
      {
        q: 'How many people live in the Inner North?',
        a: 'The 2021 Census counted 61,188 people in the North Canberra statistical area, median age 31. The ABS estimate for 2025 is 68,290.'
      },
      {
        q: 'What is collections.Counter?',
        a: 'A Python dictionary for counting things. It adds multiset operations: +, -, & and |, plus methods such as subtract() and most_common().'
      },
      {
        q: 'Why does Counter subtraction drop values?',
        a: 'The operators keep only positive counts by design. Use subtract() when you need zeros and negatives too.'
      },
      {
        q: 'What does suppressed data mean here?',
        a: 'The ACT does not publish vehicle counts of ten or fewer, so a missing row means "ten or fewer", not "none".'
      },
      {
        q: 'Can 10-year-olds learn Python?',
        a: 'Often yes, especially after a term or two of Scratch. The free lesson shows whether typing code will be fun or frustrating yet.'
      },
      {
        q: 'Which suburbs are in the Inner North?',
        a: 'Our test places 13 named suburbs in the North Canberra area, including Braddon, Ainslie, Dickson, Lyneham, Watson and Turner.'
      },
      {
        q: 'Do you have a centre in the Inner North?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Inner North classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are groups formed?',
        a: 'By level and pace in groups of fifteen to twenty, not by age or suburb. One-to-one lessons are there if no group time fits.',
        boiler: true
      },
      {
        q: 'Can university students and adults join?',
        a: 'Yes. Students and working adults have their own groups, or a private teacher, and often bring a project of their own.'
      }
    ]
  },
  next: {
    eyebrow: 'More for Canberra learners',
    h2: 'More pages',
    html: 'Inner North learners can also visit the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canberra">Canberra page</a>, our <a class="cg-inline-link" href="/coding-and-ai-classes-in-australian-capital-territory">ACT guide</a>, and the <a class="cg-inline-link" href="/python-ai-course-for-kids-australia">Python and AI course for kids</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Inner North and Canberra',
  footerPlaces: [
    { href: '/python-ai-course-for-kids-australia', label: 'Python and AI for kids' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canberra', label: 'Canberra' },
    { href: '/coding-and-ai-classes-in-australian-capital-territory', label: 'ACT' },
    { href: '/coding-classes-for-kids-canberra', label: 'Kids in Canberra' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-innc .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.3vw, 2.05rem); }
.cg-root.cg-innc .cg-hero h1 { font-weight: 680; letter-spacing: -0.028em; line-height: 1.03; }
.cg-root.cg-innc .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-innc .cg-eyebrow { letter-spacing: 0.08em; font-weight: 660; font-size: 0.81rem; }
.cg-root.cg-innc .cg-section-head h2 { max-width: 20ch; }
.cg-root.cg-innc .cg-grid-3 { gap: clamp(0.9rem, 2.6vw, 1.7rem); }
.cg-root.cg-innc .cg-table caption { text-align: left; font-weight: 600; font-size: 0.9rem; }
.cg-root.cg-innc .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-innc .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.65rem; }
.cg-root.cg-innc .cg-callout { border-radius: 5px; }
`,
  dossier: {
    curriculumAuthority: 'North Canberra SA3 80105 (Inner North), ABS Census 2021 QuickStats (read 13 October 2026): 61,188 people; median age 31; 13,352 families; 27,982 private dwellings; 1.4 vehicles per dwelling (lowest of the eight SA3s on these pages); flat or apartment 10,078 (42.6%, ACT 19.4%); walked to work 4,888 (13.4%, ACT 4.0%); car as driver 14,925 (40.8%, ACT 59.0%); aged 15-19 4,714 (7.7%, ACT 5.8%); bachelor or higher 53.6% (ACT 42.9%). ABS ERP 2025 (SA3 80105): 68,290. ABS SA3 area 44.7228 sq km; 13 named suburbs by our SAL-centroid test (Russell has no vehicle rows). ACT open data (CC BY 4.0, 13 October 2026): tree records 54,182 (31,730 exotic, 17,731 native); artworks 75 (38 sculpture, 18 street art, 10 painting mural); ACT NOWaste 13 rows, 12 Friday. ACT 2027 Term 1 begins Monday 1 February. Canberra = Australia/Sydney (IANA 2026e).',
    localProject: 'collections.Counter, Python 3.13, on ACT Registered Vehicles by Make, Model and Suburb (as at 1 September 2026; counts of 10 or less suppressed), key = (make, model, emissions category). BRADDON 69 keys, AINSLIE 62 keys. A-B 51 keys; B-A 34; subtract() 89 keys (34 negative, 4 zero); A&B 42; A|B 89; only Braddon 27, only Ainslie 20. Top A-B: Mazda 3 CO2-B +37, Hyundai i30 CO2-B +30, Kia Cerato hatch +24, Hyundai Kona +23, Toyota Yaris +21. Top B-A: Subaru Outback +28, Tesla Model Y CO2-AAA +23, Ford Falcon CO2-D +19, Resort 6x4 trailer +19. Our run. Script: scratchpad au/b16/a_innc.py.',
    requiredMentions: [
      '68,290',
      'North Canberra statistical area',
      '42.6% (10,078)',
      '13.4% (4,888)',
      'A.subtract(B)',
      '34 negative',
      'Braddon published, Ainslie 10 or fewer',
      '54,182',
      '7.7% (4,714)'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, North Canberra statistical area level 3 (SA3 80105), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/80105'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by ASGS 2021 regions (ABS_ANNUAL_ERP_ASGS2021), SA3 80105 North Canberra, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_ASGS2021,1.2.0/ERP.SA3.80105.A?startPeriod=2024&format=csvfilewithlabels'
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
        claim: 'ACT Government open data, ACT Registered Vehicles by Make, Model and Suburb (data.act.gov.au h4vn-y97q), Creative Commons Attribution 4.0, data as at 1 September 2026, counts of 10 or less suppressed, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/h4vn-y97q'
      },
      {
        claim: 'Python documentation, collections.Counter: multiset operations keep only positive counts; subtract() keeps zero and negative counts.',
        url: 'https://docs.python.org/3/library/collections.html#collections.Counter'
      },
      {
        claim: 'ACT Government open data, ACTGOV Tree Assets (data.act.gov.au 9qch-rvqr), Creative Commons Attribution 4.0, grouped counts by suburb queried 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/9qch-rvqr'
      },
      {
        claim: 'ACT Government open data, ACTGOV Artwork Assets (data.act.gov.au a69k-qah8), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/a69k-qah8'
      },
      {
        claim: 'ACT Government open data, ACT Suburb Next Garbage, Recycling and Green Waste Collection Dates (data.act.gov.au jzzy-44un), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/jzzy-44un'
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
      'Totals of vehicles in Braddon or Ainslie: not given; published rows exclude counts of 10 or less, and parts are never summed into totals.',
      'Claims that Inner North residents prefer electric vehicles: not made from two suburbs.',
      'Inner North suburb (SAL) Census figures: not used; the page uses the SA3 district.',
      'Naming schools or the university\'s enrolments: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the ACT Government or Access Canberra.'
    ]
  }
};
