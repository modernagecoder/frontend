'use strict';
// Bankstown, Sydney (cg- district page, Australia cluster Phase 8, row 222). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page under Sydney and New South Wales. Bankstown (ABS suburb
// SAL10181) lies wholly in Canterbury-Bankstown LGA by our point-in-polygon check.
// Spine: test 338 stations for a change between two years of monthly entries; how many "significant"
// results are luck, and how do Bonferroni and Benjamini-Hochberg corrections change the count?
// Data: Transport for NSW monthly station entries (CC BY), 338 stations with a numeric count in all 23
// months October 2024 to August 2026. Test: paired t-test on log entries, October 2024 to August 2025
// against October 2025 to August 2026, matched by calendar month (September 2025 not used). Results
// (scipy 1.16): p below 0.05 at 234 stations; Bonferroni (0.05/338) 55; Benjamini-Hochberg at 5 percent
// false discovery rate 220 (217 higher in the second year, 3 lower). Null check: months shuffled at random
// within each station, 200 times: on average 16.5 stations come out below 0.05 (range 4 to 28), close to
// the 16.9 expected by chance. Bankstown Station p = 0.0596: not significant even uncorrected, because its
// first-year months include 372 (May 2025) and 3,618 (June 2025) against 43,003 to 102,830 in other months;
// no cause is claimed.
// Lesson family: multiple-comparisons correction (Bonferroni vs Benjamini-Hochberg false discovery rate);
// screened 0 location-page hits.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BANKSTOWN',
    label: 'Bankstown, Sydney',
    blurb: 'AI and programming for Bankstown, with a project on how many surprising results in a big data set are just luck, and how to correct for it.'
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
  slug: 'ai-and-programming-classes-in-bankstown-sydney',
  code: 'bnks',
  accent: '#535026',
  accentRationale: 'Bankstown: a deep olive (hue 57), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 8.3:1 on white and 6.7:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Bankstown',
    eyebrow: 'Bankstown, Canterbury-Bankstown, Sydney',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Sydney' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'best-coding-classes-in-sydney', name: 'Sydney' }
  ],
  nav: [
    { label: 'Sydney', href: '/best-coding-classes-in-sydney' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Bankstown, Sydney',
  title: 'AI and Programming Classes in Bankstown, Sydney',
  description: 'Live online AI, Python and programming classes for Bankstown teenagers and adults, with real teachers in small groups or one to one. The first lesson is free.',
  ogDescription: 'AI and programming classes for Bankstown, with a project on false discoveries: testing 338 stations finds 234 changes at the usual threshold, but a proper correction keeps 220 and a strict one only 55.',
  twitterDescription: 'Bankstown AI and programming classes, live online, first lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Bankstown',
    description: 'Level-matched online AI, data science, statistics and Python for children from six, teenagers and adults in Bankstown, taught live in English.'
  },
  h1: 'AI and programming classes in Bankstown',
  capsuleQ: 'Where can Bankstown learners find the best AI and programming classes?',
  capsule: 'In live online lessons that teach AI and data with the statistics underneath, so results are tested rather than trusted. The 2021 Census counted 34,933 people in Bankstown, a median age of 34, and 7.9% of residents under five against 5.8% across NSW. Lessons are one to one or in level-matched groups, and the first is free.',
  lead: 'Machine learning and data science run thousands of tests at once, and that creates a trap. Test enough things and some will look significant by pure chance. We tested every one of 338 Sydney train and metro stations for a change in monthly entries between two years. At the usual five per cent threshold, 234 stations showed a change. Shuffle the months at random and about 16 still do, purely by luck. A strict correction keeps 55; a smarter one, the Benjamini-Hochberg method, keeps 220. Bankstown Station itself did not pass even the loosest test, and the reason is a lesson in its own right.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a learner in Bankstown.',
  picks: {
    eyebrow: 'Course picks for Bankstown',
    h2: 'Courses that teach AI with honest statistics',
    intro: 'Each course reaches the false discovery idea at its own level. Book the free trial to choose, with no card needed.',
    items: [
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'Python, data and first machine learning models, with testing built in from the start.'
      },
      {
        course: 'statistics-probability-maths-course',
        band: 'Ages 15 and over',
        note: 'Probability, distributions and hypothesis tests, the maths behind every AI result.'
      },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 14 to 18', note: 'Machine learning for teenagers, from training data to evaluating models fairly.' },
      {
        course: 'data-science-complete-masterclass-college',
        band: 'University and adult',
        note: 'Full data science with Python, including experiment design and multiple testing.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Bankstown in the Census',
      h2: 'Young families and apartment living',
      intro: 'Census 2021 QuickStats for the Bankstown suburb, set against New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Bankstown, 2021 Census headline counts',
          head: ['Headline', 'Bankstown'],
          rows: [
            ['Residents', '34,933'],
            ['Families', '8,573'],
            ['Private dwellings', '13,033'],
            ['People per household', '2.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Bankstown measured against NSW and Australia',
          head: ['Measure', 'Bankstown', 'NSW', 'Australia'],
          rows: [
            ['Children aged 0 to 4', '7.9% (2,763)', '5.8%', '5.8%'],
            ['Flats or apartments among occupied homes', '58.5% (6,419)', '21.7%', '14.2%'],
            ['Drove a car to work on Census day', '41.1% (4,710)', '43.1%', '52.7%'],
            ['Bachelor degree or higher, aged 15 and over', '24.0% (6,681)', '27.8%', '26.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Small children', p: 'Children under five made up 7.9% of residents, two points above the share across the state.' },
            { h3: 'Apartments', p: 'More than half of occupied homes, 6,419 of them, were flats or apartments.' },
            { h3: 'Census timing', p: 'The figures come from August 2021, when lockdowns changed how many people travelled to work that day.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau randomises cells slightly for privacy, so rows may not add to totals. We cite its own totals and never build one by adding parts.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Test 338 stations and some will lie to you',
      intro: 'For every station with a count in all 23 months of Transport for NSW\'s data, we compared October 2024 to August 2025 with October 2025 to August 2026, month by month, using a paired t-test on the logarithm of entries.',
      body: [
        {
          kind: 'table',
          caption: 'How many stations show a change, by method (our calculation)',
          head: ['Method', 'Threshold', 'Stations flagged'],
          rows: [
            ['No correction', 'p below 0.05', '234'],
            ['Benjamini-Hochberg', 'False discovery rate 5%', '220'],
            ['Bonferroni', 'p below 0.05 divided by 338', '55']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'A check on luck: months shuffled at random within each station, 200 times (our calculation)',
          head: ['Measure', 'Value'],
          rows: [
            ['Average stations below 0.05 with no real pattern', '16.5'],
            ['Fewest in one shuffle', '4'],
            ['Most in one shuffle', '28'],
            ['Expected by chance, 5% of 338', '16.9']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The uncorrected count',
              p: 'With 338 tests at the five per cent level, around 17 stations would be flagged even if nothing had changed anywhere. The shuffle check confirms it.'
            },
            {
              h3: 'Bonferroni',
              p: 'Divide the threshold by the number of tests. It almost never raises a false alarm, but it threw away more than three quarters of the real changes here.'
            },
            {
              h3: 'Benjamini-Hochberg',
              p: 'Rank the p-values and allow a controlled share of false alarms. It kept 220 stations, of which 217 had more entries in the second year and 3 fewer.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why Bankstown itself did not pass',
          p: 'Bankstown Station\'s p-value was 0.0596, just above even the loosest line. Its first year contains two months far below the rest, 372 entries in May 2025 and 3,618 in June 2025, against 43,003 to 102,830 in its other first-year months. Two extreme values swell the variability so much that a real-looking rise cannot be told apart from noise. The data does not say why those months were low, and we do not guess.'
        },
        {
          kind: 'p',
          text: 'All tests, corrections and shuffle checks are our own calculations from Transport for NSW\'s published monthly entry counts, which count gate entries rather than individual people.'
        }
      ]
    },
    {
      id: 'ai',
      tint: 'tint',
      eyebrow: 'Why this matters in AI',
      h2: 'The same trap inside every model comparison',
      intro: 'False discoveries are not only a statistics problem. They appear wherever AI work tries many options and keeps the winner.',
      body: [
        {
          kind: 'table',
          caption: 'Where multiple comparisons hide in AI and programming',
          head: ['Situation', 'How many tests', 'What goes wrong'],
          rows: [
            ['Choosing among many model settings', 'Hundreds of runs', 'The winner may just be lucky'],
            ['Searching data for patterns', 'Every column against every other', 'Spurious correlations appear'],
            ['A/B testing many page versions', 'One test per version', 'False winners get shipped'],
            ['Scanning sensors for faults', 'One test per sensor', 'Alarms that mean nothing']
          ]
        },
        {
          kind: 'p',
          text: 'Learners write the paired test themselves before calling a library, so they know what a p-value measures. Then they implement both corrections in a few lines of Python and rerun the 338 stations, watching the count fall from 234 to 220 to 55.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Flip coins in groups and see how often some group gets a run of heads by luck.' },
            { h3: 'High school', p: 'Code the t-test and both corrections, then run the shuffle check that reveals chance results.' },
            { h3: 'Adults', p: 'Apply corrections to real experiment results at work before announcing a winner.' }
          ]
        },
        {
          kind: 'p',
          text: 'Transport for NSW, Canterbury-Bankstown Council, the NSW Department of Education and the statistics bureau publish the open data used here and have no link with Modern Age Coders.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Bankstown',
      h2: 'Schools from 1868 to the 1960s',
      intro: 'More facts from the NSW Department of Education\'s school file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'The oldest',
              p: 'Bankstown North Public School records its first teacher in January 1868, the earliest date among schools with a Bankstown address.'
            },
            { h3: 'Between the wars', p: 'Bankstown Public School dates from April 1915 and Bankstown West Public School from May 1931.' },
            { h3: 'Senior study', p: 'Bankstown Senior College, for Years 10 to 12, gives January 1963 as its first-teacher date.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Suburb and council',
          p: 'Bankstown is a suburb inside the Canterbury-Bankstown council area; 4,000 random points within the bureau\'s suburb boundary all fell in that council area in our check.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From coin flips to trustworthy AI',
    intro: 'Ages are only a guide; the free trial sets the start.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Coding basics',
        p: 'Scratch projects and chance games that build logical thinking.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'Python and AI ideas',
        p: 'First Python and simple AI projects explained, not just used.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Data and models',
        p: 'Data science, statistics and machine learning with honest testing.',
        courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Professional data work',
        p: 'Experiments, machine learning and analysis that stand up to scrutiny.',
        courses: ['data-science-complete-masterclass-college', 'ai-ml-masterclass-complete-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can run a thousand tests. Why should a Bankstown student understand the statistics?',
    intro: 'Because the more tests a computer runs, the more confident nonsense it can produce, and only someone who understands the maths will notice.',
    p1: 'Ask an AI tool to find which stations changed and it may happily report 234, every one presented with a convincing p-value. About 17 of those would appear even if nothing had happened at all. The tool will not warn you unless you ask the right question.',
    p2: 'A learner who has run the shuffle check and the corrections knows that question. They ask how many tests were run, what correction was applied, and whether the result survives when the data is scrambled, which is how careful data scientists work.',
    closer: 'In 2026 the Bankstown learners who understand the statistics behind AI will be the ones whose results can be trusted, and that understanding begins with coding the tests yourself.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons from home in Bankstown',
    intro: 'A Bankstown learner logs in from home and spends the whole lesson learning, with no travel.',
    cells: [
      { h3: 'Simple setup', p: 'A computer with a microphone and a steady internet connection.' },
      { h3: 'NSW school year', p: 'Plans match NSW stages and take breaks during the state school holidays.' },
      { h3: 'Trial lesson', p: 'The first class is free and ends with a recommended course and timetable.' },
      { h3: 'Groups or private', p: 'Level-matched groups of fifteen to twenty, or one-to-one lessons.' },
      { h3: 'Twice a week', p: 'Two fixed lessons a week, about eight a month, with breaks agreed in advance.' },
      { h3: 'Teachers in India', p: 'A 7pm Bankstown lesson in summer starts at 1:30pm India time; once daylight saving ends it starts at 2:30pm there.' }
    ],
    spec: {
      title: 'Sydney clocks',
      p: 'Daylight saving starts in Sydney on Sunday 4 October 2026 and ends on Sunday 4 April 2027; India does not change its clocks. We give every lesson time in Sydney time.'
    }
  },
  fees: {
    h2: 'Bankstown class fees',
    intro: 'The full price fits in three lines.',
    first: 'The first lesson is free and includes advice on the right course.',
    group: 'A month of group lessons, normally eight, with fifteen to twenty learners.',
    private: 'About eight lessons a month with a teacher to yourself.',
    closer: 'Families outside India pay in US dollars, the same for every suburb. Nothing is charged until the course and times are settled after the trial; the pricing page covers holidays and absences.'
  },
  reviewsH2: 'Reviews from our families on Google',
  book: {
    h2: 'Book a first Bankstown lesson',
    intro: 'Tell us the learner\'s age and interests. A Year 6 child might begin with a Scratch chance game; a Year 11 student might begin by testing ten stations for change.',
    success: 'Thank you. Our team will reach out shortly about a Bankstown lesson.'
  },
  faq: {
    h2: 'Bankstown AI and programming questions',
    intro: 'What Bankstown families and adult learners ask us first.',
    items: [
      { q: 'How many people live in Bankstown?', a: 'The 2021 Census QuickStats for the Bankstown suburb record 34,933 residents and a median age of 34.' },
      {
        q: 'What is the multiple comparisons problem?',
        a: 'The multiple comparisons problem is that when you run many statistical tests, some will look significant purely by chance. Testing 338 stations at the five per cent level would flag around 17 with no real change at all.'
      },
      {
        q: 'What is the Benjamini-Hochberg method?',
        a: 'Benjamini-Hochberg is a correction that ranks the p-values from many tests and keeps the results that pass a sliding threshold. It controls the expected share of false discoveries among the results it keeps, so it loses far fewer real effects than the Bonferroni correction.'
      },
      {
        q: 'What is the Bankstown station project?',
        a: 'Learners test 338 stations for a change between two years of monthly entries, then compare no correction (234 flagged), Benjamini-Hochberg (220) and Bonferroni (55), and run a shuffle check showing about 16 chance results.'
      },
      {
        q: 'Why was Bankstown Station not significant?',
        a: 'Two very low months in its first year, May and June 2025, made its numbers so variable that the test could not separate a change from noise. Its p-value was 0.0596.'
      },
      {
        q: 'Is this too advanced for school students?',
        a: 'The full project suits senior students, but the idea, that many tries produce lucky results, can be shown to younger children with coins and dice.'
      },
      { q: 'Do you teach adults?', a: 'Yes, one to one or in adult groups, often for data or AI work.' },
      {
        q: 'Do you have a Bankstown office?',
        a: 'No. All teaching is live online and we have no premises in Australia. The phone number on our site is Indian.',
        boiler: true
      },
      {
        q: 'How much are AI classes in Bankstown?',
        a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one.',
        boiler: true
      },
      { q: 'What is the group size?', a: 'Fifteen to twenty learners, matched by level and pace. One-to-one lessons are offered if no group suits.', boiler: true }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Bankstown learners',
    html: 'The <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-canterbury-bankstown-sydney">Canterbury-Bankstown page</a> covers the whole council area, and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-liverpool-sydney">Liverpool</a> has its own page to the west. For the city see the <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a>; for the state, <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Bankstown and Sydney',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-canterbury-bankstown-sydney', label: 'Canterbury-Bankstown' },
    { href: '/online-coding-and-python-classes-in-hurstville-sydney', label: 'Hurstville' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-bnks .cg-hero-grid { align-items: center; gap: clamp(0.9rem, 3.2vw, 2.6rem); }
.cg-root.cg-bnks .cg-hero h1 { font-weight: 790; letter-spacing: -0.021em; line-height: 1.07; }
.cg-root.cg-bnks .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.55rem 0 0.55rem 1.15rem; }
.cg-root.cg-bnks .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-bnks .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.011em; }
.cg-root.cg-bnks .cg-grid-3 { gap: clamp(0.95rem, 2.2vw, 1.85rem); }
.cg-root.cg-bnks .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-bnks .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bnks .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-bnks .cg-callout { border-left-width: 8px; }
`,
  dossier: {
    curriculumAuthority: 'Bankstown, ABS Census 2021 QuickStats, Bankstown suburb SAL10181 (read 10 October 2026): 34,933 people; median age 34; 8,573 families; 13,033 private dwellings; 2.9 people per household; age 0 to 4 2,763 (7.9 percent; NSW 5.8); flat or apartment 6,419 (58.5 percent; NSW 21.7); Car as driver 4,710 (41.1 percent; NSW 43.1; Australia 52.7); Bachelor Degree level and above 6,681 (24.0 percent; NSW 27.8). Council: 4,000 random points inside the ABS SAL boundary all fall in Canterbury-Bankstown LGA. IANA Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027.',
    localProject: 'Multiple comparisons. Transport for NSW monthly station entries (CC BY), 338 stations with numeric Entry counts in all 23 months (October 2024 to August 2026). Paired t-test (scipy.stats.ttest_rel) on natural-log entries, October 2024 to August 2025 vs October 2025 to August 2026 matched by calendar month; September 2025 excluded. p < 0.05: 234; Bonferroni p < 0.05/338: 55; Benjamini-Hochberg FDR 0.05: 220 (217 higher in second year, 3 lower). Null check: 200 shuffles, months randomly reassigned within each station (two-sample t-test): mean 16.54 below 0.05, min 4, max 28; expected 16.9. Bankstown Station (Train) series: 43003, 102830, 58337, 28227, 60532, 75233, 60224, 372, 3618, 90567, 88515, 95946, 97354, 94025, 77653, 78082, 82591, 104295, 95843, 98841, 99012, 102667, 104723; p = 0.0596, rank 239 of 338 (BH threshold at that rank 0.0354). First-teacher dates (NSW Department of Education master dataset, Town_suburb Bankstown): Bankstown North Public School 1868-01-01; Bankstown Public School 1915-04-01; Bankstown West Public School 1931-05-01; Bankstown Senior College 1963-01-01.',
    requiredMentions: ['34,933', '8,573', '13,033', '2,763', '6,419', 'Bankstown North Public School', 'Bankstown Senior College', '0.0596', '3,618'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Bankstown (SAL10181).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL10181' },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits, monthly station usage (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'Benjamini, Y. and Hochberg, Y. (1995), Controlling the false discovery rate, Journal of the Royal Statistical Society Series B 57(1), 289 to 300.',
        url: 'https://doi.org/10.1111/j.2517-6161.1995.tb02031.x'
      },
      {
        claim: 'ABS ASGS Edition 3 boundaries (SAL and LGA), geo.abs.gov.au map services.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Why Bankstown Station recorded 372 and 3,618 entries in May and June 2025: not claimed; no cause was verified.',
      'Any statement about rail line closures or conversions: not verified from a primary source for this page, so not made.',
      'That the 217 stations with higher entries share one cause: not claimed.',
      'Schools with a single-sex intake and a hospital school with a Bankstown address: not named, under the cluster rules.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, Canterbury-Bankstown Council, the NSW Department of Education or the ABS.'
    ]
  }
};
