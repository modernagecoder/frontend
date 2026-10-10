'use strict';
// Cherrybrook, Sydney (cg- district page, Australia cluster Phase 8, row 218). Keyword slug in the rotation
// (ai-and-programming-classes-in-*). Cherrybrook is an ABS suburb and locality (SAL10897); our grid estimate
// against ABS 2021 polygons places it wholly inside Hornsby Shire. Parents: Australia, NSW, Sydney.
// Spine: a change detector watching monthly Opal entries at Cherrybrook metro station raises alarms every January
// and March. Is anything changing, or is the detector only seeing the same yearly swing, and how does a
// year-on-year comparison settle it?
// Data: Transport for NSW, Train Station Entries and Exits (Opal, monthly, CC BY), file read 10 October 2026,
// Cherrybrook Station, Metro, Entry, October 2024 to August 2026 (23 months). Station point ((c) Spatial Services,
// location check only) inside the ABS Hornsby LGA polygon.
// Our checks (scratchpad au/b2/p8_chb.py): mean 121,934, standard deviation 12,219. Page-Hinkley with running
// mean and reset after each alarm: threshold 20,000, drift allowance 0: increase alarms March 2025, October 2025,
// March 2026, August 2026, decrease alarm January 2026; threshold 10,000, allowance 0: 7 alarms; threshold
// 40,000, allowance 5,000: none. Lowest months January 2025 97,235 and January 2026 96,055; March 2025 135,488,
// March 2026 138,638; August 2026 144,989 (highest). Year on year, October 2025 to August 2026: 9 of 11 months
// higher; August 2026 +17,539 (+13.76%), October 2025 +18.08%, January 2026 -1.21%.
// Lesson family: Page-Hinkley change detection vs seasonal swings and year-on-year comparison; screened 0 page hits.
// Place facts: ABS Census 2021 QuickStats, Cherrybrook SAL10897; NSW Department of Education master dataset (CC BY),
// Date_extracted 2026-10-02, rows with Town_suburb Cherrybrook: 3, all LGA Hornsby.
// Excluded: income, rent, mortgage, tenure, ancestry, birthplace, language, religion, health; enrolment, ICSEA,
// Indigenous, LBOTE and selective columns. No cause is attributed to any month.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CHERRYBROOK',
    label: 'Cherrybrook, Sydney',
    blurb: 'AI and programming for Cherrybrook, with a change-detection project that learns to tell a yearly pattern from a real shift.'
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
  slug: 'ai-and-programming-classes-in-cherrybrook-sydney',
  code: 'cbrk',
  accent: '#335471',
  accentRationale: 'Cherrybrook: a slate blue (hue 208), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, with strong contrast on white and on the paper tints',
  pageType: 'city',
  place: {
    name: 'Cherrybrook',
    eyebrow: 'Cherrybrook, Hornsby Shire, Sydney',
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
  routeLabel: 'Cherrybrook, Sydney',
  title: 'AI and Programming Classes in Cherrybrook, Sydney',
  description: 'Live online AI and programming classes for Cherrybrook children, teenagers and adults: Scratch, Python and data-driven AI projects. Small groups; first lesson free.',
  ogDescription: 'AI and programming for Cherrybrook, with a project on why a change detector cries wolf every January and March at the metro station.',
  twitterDescription: 'Cherrybrook AI and programming classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Cherrybrook',
    description: 'Level-matched AI and programming lessons for children, teenagers and adults in Cherrybrook, Sydney, taught live in English.'
  },
  h1: 'AI and programming classes in Cherrybrook',
  capsuleQ: 'How can Cherrybrook families pick the best AI and programming classes?',
  capsule: 'Choose live teaching in small groups matched by level, with programming taught before AI: Scratch for young children, Python and machine learning for teenagers and adults. Cherrybrook is a suburb of Hornsby Shire, about 8.3 square kilometres, where the 2021 Census found 19,082 people and a median age of 43.',
  lead: 'Point a change detector at the monthly Opal entries for Cherrybrook metro station and it starts raising alarms: March 2025, October 2025, January 2026, March 2026, August 2026. Look closer and January is the lowest month in both years, 97,235 and then 96,055, while March is high both times. The detector is reacting to a pattern that comes round every year. Compare each month with the same month a year earlier instead, and a clearer story appears: 9 of 11 months were higher.',
  wa: 'Hello Modern Age Coders, we would like a free AI or programming lesson for a learner in Cherrybrook.',
  picks: {
    eyebrow: 'Course picks for Cherrybrook',
    h2: 'Programming and AI, taught to be checked',
    intro: 'Each course connects to the change-detection project at its own level. The trial lesson confirms the fit, and no card details are requested.',
    items: [
      {
        course: 'problem-solving-and-computational-thinking-for-kids',
        band: 'Ages 7 to 11',
        note: 'Patterns, rules and spotting the odd one out, the ideas behind detecting change.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 12 to 17',
        note: 'Python from scratch to real data files, loops over time series and clear charts.'
      },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning with honest evaluation, including false alarms and missed changes.' },
      {
        course: 'data-science-complete-masterclass-college',
        band: 'University and adult',
        note: 'Time series, anomaly detection and statistics for study and work.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Cherrybrook in the 2021 Census',
      h2: 'Houses, families and teenagers',
      intro: 'QuickStats for the Cherrybrook suburb and locality from the statistics bureau, alongside New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Cherrybrook headline figures',
          head: ['Measure', 'Value'],
          rows: [
            ['People', '19,082'],
            ['Families', '5,489'],
            ['All private dwellings', '6,210'],
            ['People per household, average', '3.1'],
            ['Suburb area', 'About 8.3 square kilometres']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Cherrybrook compared with the state and the country',
          head: ['Indicator', 'Cherrybrook', 'NSW', 'Australia'],
          rows: [
            ['Separate houses among occupied homes', '81.5% (4,841)', '65.6%', '72.3%'],
            ['Flats or apartments among occupied homes', '1.2% (74)', '21.7%', '14.2%'],
            ['Couple families with children', '60.7% (3,332)', '44.7%', '43.7%'],
            ['Bachelor degree or higher', '48.6% (7,572)', '27.8%', '26.3%'],
            ['Residents aged 15 to 19', '7.8% (1,486)', '5.7%', '5.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Almost no apartments', p: 'Only 74 occupied homes, 1.2%, were flats or apartments; separate houses made up 81.5% and townhouses 17.2%.' },
            { h3: 'Families with children', p: 'Six in ten families were couples with children, against fewer than half across New South Wales.' },
            { h3: 'Teenagers in numbers', p: 'Residents aged 10 to 14 were 8.2% and those aged 15 to 19 were 7.8%, both well above the state shares.' }
          ]
        },
        {
          kind: 'p',
          text: 'Cherrybrook is a suburb within the Hornsby Shire council area, and these figures describe the suburb only. Census cells are slightly adjusted for privacy, so we print them exactly as published and never create a total by adding parts.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'A change detector at Cherrybrook station, and why it cries wolf',
      intro: 'Transport for NSW publishes monthly Opal entries for each station. Cherrybrook metro station, inside Hornsby Shire on our location check, gives 23 months to test the Page-Hinkley change detector.',
      body: [
        {
          kind: 'table',
          caption: 'Cherrybrook metro station, selected months (Transport for NSW)',
          head: ['Month', 'Entries', 'Month', 'Entries'],
          rows: [
            ['January 2025', '97,235', 'January 2026', '96,055'],
            ['March 2025', '135,488', 'March 2026', '138,638'],
            ['August 2025', '127,450', 'August 2026', '144,989']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'How Page-Hinkley works',
              p: 'It keeps a running average and adds up how far each new month sits above it. When that running total climbs more than a threshold above its lowest point, it raises an alarm and starts again.'
            },
            {
              h3: 'Two dials to set',
              p: 'The threshold decides how big a build-up counts as change; a drift allowance ignores small steady differences. Both trade false alarms against missed changes.'
            },
            {
              h3: 'What it reported',
              p: 'With a threshold of 20,000 entries and no allowance: rises flagged in March 2025, October 2025, March 2026 and August 2026, and a fall in January 2026.'
            }
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Alarms over 23 months at three settings (our run)',
          head: ['Threshold', 'Drift allowance', 'Alarms'],
          rows: [
            ['10,000', '0', '7'],
            ['20,000', '0', '5'],
            ['40,000', '5,000', 'None']
          ]
        },
        {
          kind: 'callout',
          h3: 'Compare like with like',
          p: 'Taking each month against the same month a year earlier removes the yearly pattern. From October 2025 to August 2026, 9 of 11 months were higher than a year before. August 2026 was up 17,539 entries, or 13.76%; January 2026 was down 1.21%. That is a steadier answer than any single alarm.'
        },
        {
          kind: 'p',
          text: 'Over the 23 months the series averages 121,934 entries with a standard deviation of 12,219. Entries count Opal gate taps, not people, and the page gives no reason for any rise or fall. Alarms, averages and year-on-year changes are our own calculations on the published file.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Next steps',
      h2: 'Turning a noisy detector into a useful one',
      intro: 'With the yearly pattern exposed, the project becomes a small study in monitoring.',
      body: [
        {
          kind: 'table',
          caption: 'Experiments for learners',
          head: ['Experiment', 'Method', 'What it shows'],
          rows: [
            [
              'Run the detector on year-on-year changes',
              'Feed differences, not raw counts',
              'Whether alarms survive once the yearly pattern is removed'
            ],
            ['Tune the threshold', 'Sweep values and count alarms', 'The cost of sensitivity'],
            ['Watch for falls as well as rises', 'A mirrored version of the test', 'Why monitoring needs both directions'],
            ['Add more stations', 'Loop over several Metro stations', 'Whether alarms line up across a line']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary age', p: 'Chart a year of made-up scores, then decide together which jumps are surprising and which happen every year.' },
            { h3: 'High school', p: 'Code Page-Hinkley in about twenty lines of Python and test it on the Cherrybrook series at several settings.' },
            { h3: 'Adults', p: 'Apply the same logic to sales, website or sensor data, and stop seasonal patterns triggering false alerts.' }
          ]
        },
        {
          kind: 'p',
          text: 'Transport for NSW, the statistics bureau and the education department produce the open data used here and have no link with us; the detector settings and results are ours.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Schools and calendar',
      h2: 'Three public schools with a Cherrybrook address',
      intro: 'From the education department\'s government school locations.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Two primaries',
              p: 'Cherrybrook Public School records a first teacher in 1971 and John Purchase Public School in 1986, both listed under Hornsby Shire.'
            },
            { h3: 'One high school', p: 'Cherrybrook Technology High School dates from 1992, the most recent of the three Cherrybrook addresses in the file.' },
            { h3: 'The 2027 year', p: 'Eastern division summer holidays end on Wednesday 27 January 2027, and students begin Term 1 on Wednesday 3 February.' }
          ]
        },
        {
          kind: 'spec',
          title: 'A school-calendar experiment',
          p: 'A capable student could line up the January lows at the station with the published school holiday dates and test, carefully, whether the two move together, without claiming one causes the other.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From spotting patterns in Scratch to detecting change with Python',
    intro: 'Ages are a guide; the free trial lesson places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Patterns and games',
        p: 'Scratch projects with repeating patterns, timers and simple rules.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 13',
        h3: 'Logic and first Python',
        p: 'Problem solving and early Python, predicting what code will do before it runs.',
        courses: ['problem-solving-and-computational-thinking-for-kids', 'python-ai-kids-masterclass']
      },
      {
        band: 'Ages 13 to 18',
        h3: 'Data and machine learning',
        p: 'Time series, charts and first models, each with an honest measure of error.',
        courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Monitoring and AI',
        p: 'Anomaly detection, statistics and AI systems that can be trusted in production.',
        courses: ['data-science-complete-masterclass-college', 'statistics-probability-maths-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Will AI monitoring tools make this skill unnecessary for Cherrybrook learners?',
    intro: 'No. Someone still has to decide what counts as a real change.',
    p1: 'Plenty of AI tools will flag anomalies in a chart automatically. Fed the raw Cherrybrook series, many would raise exactly the same January and March alerts as our detector, because nobody told them that the pattern repeats each year.',
    p2: 'A learner who has built the detector and then switched to year-on-year comparison understands why the alerts appear and how to fix them. That understanding is what lets a person configure an AI tool sensibly, or explain to a manager why an alert can be ignored.',
    closer: 'In 2026 software can raise alarms on its own; Cherrybrook learners who know which alarms to trust will be the ones relied on.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lessons that come to Cherrybrook',
    intro: 'Every class is live on video, so a learner only needs a desk, a computer and a regular time.',
    cells: [
      { h3: 'Live with a teacher', p: 'The teacher sees the learner\'s screen, talks through each step and fixes misunderstandings straight away.' },
      { h3: 'Linked to NSW schooling', p: 'Teachers use NSW stage and syllabus terms and plan around the state school holidays.' },
      { h3: 'First lesson free', p: 'A full trial lesson at no cost, then a recommended course, level and regular time slot.' },
      { h3: 'Groups by level', p: 'Five to ten learners of similar ability, or one-to-one lessons if that suits the learner better.' },
      { h3: 'Twice weekly', p: 'Two scheduled lessons each week, around eight a month, with any breaks agreed early.' },
      { h3: 'Teachers in India', p: 'A 3:45pm Cherrybrook lesson during daylight saving is 10:15am India time; outside daylight saving it is 11:15am.' }
    ],
    spec: {
      title: 'Daylight saving in Sydney',
      p: 'Sydney moves its clocks forward on Sunday 4 October 2026 and back on Sunday 4 April 2027. India keeps a single time, so the gap is 5 hours 30 minutes in summer and 4 hours 30 minutes otherwise; we quote every time in Sydney time.'
    }
  },
  fees: {
    h2: 'Fees for Cherrybrook lessons',
    intro: 'Three simple prices covering every course.',
    first: 'A full first lesson at no charge, finishing with a course and time recommendation.',
    group: 'A month of group lessons, usually eight, with five to ten learners at the same level.',
    private: 'Individual lessons, about eight a month, at a fixed weekly time.',
    closer: 'Outside India all fees are invoiced in US dollars, so Cherrybrook families pay the same as anyone else in the Hornsby area. Nothing is charged until the trial agrees a course and time, and the pricing page explains breaks, missed lessons and changing formats.'
  },
  reviewsH2: 'Families on Google',
  book: {
    h2: 'An age and an interest is all we need',
    intro: 'A teacher can plan a first lesson from those. A young child might build a Scratch pattern game; a teenager or adult might load the Cherrybrook station series in Python and write their first change detector.',
    success: 'Thank you. We will get in touch soon about a Cherrybrook class.'
  },
  faq: {
    h2: 'Cherrybrook AI and programming questions',
    intro: 'Questions Cherrybrook families often ask.',
    items: [
      {
        q: 'How many people live in Cherrybrook?',
        a: 'The 2021 Census QuickStats for the Cherrybrook suburb and locality counted 19,082 people, with a median age of 43 and 5,489 families.'
      },
      {
        q: 'Which council area is Cherrybrook in?',
        a: 'On our check against the statistics bureau\'s 2021 boundaries, Cherrybrook lies entirely within Hornsby Shire.'
      },
      {
        q: 'What is the Page-Hinkley test?',
        a: 'It is a simple change-detection method that tracks how far new values drift from a running average and raises an alarm when the build-up passes a set threshold. It is widely used to monitor data streams for shifts.'
      },
      {
        q: 'What did the Cherrybrook project find?',
        a: 'At a threshold of 20,000 entries the detector raised five alarms in 23 months, including both Marches and a January. Comparing each month with the same month a year earlier showed 9 of 11 months higher, with August 2026 up 13.76%.'
      },
      {
        q: 'Is AI taught to children?',
        a: 'Yes, in an age-appropriate way. Younger learners explore how AI makes decisions through their own projects, and tools with adult-only terms are used only by learners old enough for them.'
      },
      {
        q: 'Can teachers help with HSC Software Engineering?',
        a: 'They can explain concepts and methods from the NSW syllabus. Any assessed project or assignment must be written by the student.'
      },
      {
        q: 'What if my child has never coded?',
        a: 'That is the usual starting point. Beginners from age six start with Scratch, and older beginners can start straight in Python.'
      },
      {
        q: 'Do you have classrooms near Cherrybrook?',
        a: 'No. All our teaching is live online and we have no premises in Australia. Learners need a computer with a microphone and a reliable connection, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'How much are AI and programming classes in Cherrybrook?',
        a: 'The first lesson is free. Group lessons cost USD 100 a month for two live classes a week, about eight in total, with five to ten learners; one-to-one is USD 150 a month at the same rate of lessons. Payment begins only once the course and time are agreed.',
        boiler: true
      },
      {
        q: 'How many learners share a class?',
        a: 'Groups have five to ten learners at a similar level, whatever their age. If no group time works, we arrange one-to-one lessons.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Further reading',
    h2: 'More for Cherrybrook families',
    html: 'Cherrybrook\'s council area has its own guide, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-hornsby-sydney">online coding and Python classes in Hornsby</a>, and the citywide page is <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>. Teenagers interested in AI can read <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens in Australia</a>, and senior students should see <a class="cg-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering help</a>.',
    waLabel: 'Contact us on WhatsApp'
  },
  footerHeading: 'Cherrybrook and Hornsby Shire',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/online-coding-and-python-classes-in-hornsby-sydney', label: 'Hornsby' },
    { href: '/online-coding-and-python-classes-in-castle-hill-sydney', label: 'Castle Hill' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-cbrk .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-cbrk .cg-hero h1 { font-weight: 650; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-cbrk .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding: 0 0 0.8rem 0; }
.cg-root.cg-cbrk .cg-eyebrow { letter-spacing: 0.115em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-cbrk .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.013em; }
.cg-root.cg-cbrk .cg-grid-3 { gap: clamp(1.1rem, 2.4vw, 1.8rem); }
.cg-root.cg-cbrk .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-cbrk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cbrk .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-cbrk .cg-callout { border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Cherrybrook, ABS Census 2021 QuickStats, Cherrybrook suburb and locality SAL10897 (read 10 October 2026): 19,082 people; median age 43; 5,489 families; 6,210 private dwellings; average 3.1 people per household; separate houses 81.5% (4,841), flats or apartments 1.2% (74), semi-detached 17.2% (1,023); couple families with children 60.7% (3,332) (NSW 44.7%, Australia 43.7%); bachelor degree or higher 48.6% (7,572); aged 10 to 14 8.2%; aged 15 to 19 7.8% (1,486). ABS ASGS 2021 SAL area 8.2603 square kilometres; our grid estimate places 100% in Hornsby Shire. NSW Department of Education 2027 calendar, Eastern division: summer holidays end Wednesday 27 January 2027; students Term 1 from Wednesday 3 February 2027.',
    localProject: 'Page-Hinkley change detection vs seasonal swings, with year-on-year comparison. Transport for NSW Train Station Entries and Exits (CC BY), Cherrybrook Station Metro entries October 2024 to August 2026: mean 121,934, standard deviation 12,219; January 2025 97,235, January 2026 96,055, March 2025 135,488, March 2026 138,638, August 2025 127,450, August 2026 144,989. Page-Hinkley (running mean, reset after alarm): threshold 20,000, allowance 0 gives increases 2025-03, 2025-10, 2026-03, 2026-08 and decrease 2026-01; threshold 10,000, allowance 0 gives 7 alarms; threshold 40,000, allowance 5,000 none. Year on year October 2025 to August 2026: 9 of 11 higher; August 2026 +17,539 (+13.76%); January 2026 -1.21%. Schools with Town_suburb Cherrybrook: Cherrybrook Public School 1971, John Purchase Public School 1986, Cherrybrook Technology High School 1992 (LGA Hornsby).',
    requiredMentions: ['19,082', '5,489', '4,841', '3,332', '7,572', 'John Purchase Public School', '144,989', '138,638', '17,539'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Cherrybrook suburb and locality (SAL10897): people, median age, families, dwellings, dwelling structure, family composition, education, age.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL10897'
      },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits: monthly station usage from Opal data (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) local government areas: boundary used for the Hornsby Shire location check.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'NSW Department of Education, 2027 term dates and school holidays, Eastern division.',
        url: 'https://education.nsw.gov.au/schooling/calendars/2027'
      },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That school holidays cause the January low: not tested, so the page only suggests checking it carefully.',
      'Any reason for the August 2026 rise: not verified, so no cause is given.',
      'That Cherrybrook station lies inside the Cherrybrook suburb boundary: only the Hornsby Shire location was checked.',
      'Income, rent, mortgage, tenure, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Enrolment, ICSEA, Indigenous, LBOTE and selective columns of the master dataset: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, the NSW Department of Education, Hornsby Shire Council or the ABS.'
    ]
  }
};
