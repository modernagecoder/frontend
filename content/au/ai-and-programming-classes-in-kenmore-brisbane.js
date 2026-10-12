'use strict';
// Kenmore, Brisbane (cg- district page, Australia cluster Phase 8, row 290). Keyword slug ai-and-programming-classes-in-*,
// suburb page (ABS SAL31504, City of Brisbane) under Brisbane and Queensland.
// Spine: population stability index between the Wednesday time-of-day profile of the 2,614 Kenmore bus stop visits and Thursday
// (0.0), Saturday (0.118) and Sunday (0.227), six bins. PSI ignores the drop in volume (Saturday 1,640 visits), which a plain count
// catches. Script: scratchpad au/b11/p8_ken.py. Lesson family: population stability index; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'KENMORE',
    label: 'Kenmore, Brisbane',
    blurb: 'AI and programming classes for Kenmore, with a project on measuring when data has drifted away from what a model learned.'
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
  slug: 'ai-and-programming-classes-in-kenmore-brisbane',
  code: 'kenm',
  accent: '#145484',
  accentRationale: 'Kenmore: a deep river blue chosen by hand, at least 20 RGB units from every Queensland page accent and 10 from every Australian page accent',
  pageType: 'city',
  place: {
    name: 'Kenmore',
    eyebrow: 'Kenmore, City of Brisbane, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Kenmore' },
      { type: 'AdministrativeArea', name: 'City of Brisbane' },
      { type: 'City', name: 'Brisbane' },
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' },
    { slug: 'best-coding-classes-in-brisbane', name: 'Brisbane' }
  ],
  nav: [
    { label: 'Brisbane', href: '/best-coding-classes-in-brisbane' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Kenmore, Brisbane',
  title: 'AI and Programming Classes in Kenmore, Brisbane',
  description: 'Live online AI and programming classes for Kenmore learners from age 6 to adult, with a data drift project measured on real Kenmore bus timetable data.',
  ogDescription: 'A Kenmore AI project: does Sunday look like Wednesday to a model? The stability index says 0.227, and a simple count says more.',
  twitterDescription: 'Kenmore AI and programming classes, live online, first lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Kenmore',
    description: 'AI, data science and programming lessons for Kenmore, Brisbane children, teenagers and adults, matched by level and taught live online.'
  },
  h1: 'AI and programming classes in Kenmore',
  capsuleQ: 'What does the Kenmore AI project measure?',
  capsule: 'Whether new data still looks like the data a model learned from. We compare the time-of-day pattern of Kenmore bus visits on Wednesday with other days. Thursday is identical, Saturday shifts a little and Sunday shifts a lot. The score used, the population stability index, also misses something a simple count spots at once.',
  lead: 'Kenmore is a suburb where nearly every home is a separate house. Its bus stops carry 2,614 scheduled visits on Wednesday 21 October 2026, all by bus, on 10 routes numbered from 425 to 446. Weekday and weekend timetables differ, which makes Kenmore a clean example of the drift that quietly breaks AI models.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Kenmore.',
  picks: {
    eyebrow: 'Course picks for Kenmore',
    h2: 'AI and data courses',
    intro: 'Courses that pair programming with careful thinking about data. A free trial sets the level.',
    items: [
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python, charts and honest comparisons on real data.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning, from training to checking it still works.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Analysis and monitoring skills for study and work.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Patterns, comparisons and logic for younger learners.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Kenmore in the 2021 Census',
      h2: 'Houses, families and degree holders',
      intro: 'Numbers for the Kenmore suburb (ABS SAL31504) from its 2021 Census QuickStats, read on 12 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Kenmore headline counts',
          head: ['Measure', 'Kenmore'],
          rows: [
            ['People', '9,675'],
            ['Median age', '40'],
            ['Families', '2,784'],
            ['Private dwellings', '3,566'],
            ['People per household', '2.8'],
            ['Motor vehicles per dwelling', '1.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Kenmore shares compared with Queensland',
          head: ['Share', 'Kenmore', 'Queensland'],
          rows: [
            ['Separate house', '92.2% (3,112)', '74.8%'],
            ['Bachelor degree or above', '49.9% (3,761)', '21.9%'],
            ['Professionals among workers', '40.1% (1,958)', '21.4%'],
            ['Car as driver to work', '45.7% (2,228)', '59.5%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Ages 5 to 9', p: 'Kenmore had 789 residents aged 5 to 9, or 8.2%, against 6.4% for Queensland.' },
            { h3: 'Ages 10 to 14', p: 'Another 774 residents, 8.0%, were aged 10 to 14.' },
            { h3: 'Census caveat', p: 'The August 2021 Census was taken during the pandemic, so the low car-to-work share may partly reflect that week.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau rounds percentages and slightly adjusts small counts for privacy. We quote its figures unchanged and do not add rows to create totals.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Does Sunday look like Wednesday?',
      intro: 'Learners split each day\'s Kenmore bus visits into six time bands and treat Wednesday as the data a model was trained on. The population stability index (PSI) then scores how far each other day\'s shape has moved.',
      body: [
        {
          kind: 'table',
          caption: 'Kenmore stop visits by time band and PSI against Wednesday (our calculation)',
          head: ['Day', 'Before 7am', '7 to 9am', '9am to 3pm', '3 to 6pm', '6 to 9pm', 'After 9pm', 'Total', 'PSI'],
          rows: [
            ['Wednesday', '163', '399', '841', '580', '495', '136', '2,614', 'baseline'],
            ['Thursday', '163', '399', '841', '580', '495', '136', '2,614', '0.000'],
            ['Saturday', '26', '169', '672', '337', '304', '132', '1,640', '0.118'],
            ['Sunday', '12', '119', '649', '309', '176', '77', '1,342', '0.227']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Reading the score',
              p: 'A common rule of thumb calls PSI under 0.1 stable, 0.1 to 0.25 a moderate shift and above 0.25 a large one. Those cut-offs are a convention, not a law.'
            },
            {
              h3: 'What moved',
              p: 'Early-morning buses almost vanish at the weekend: 163 before 7am on Wednesday, 12 on Sunday. The middle of the day takes a bigger share instead.'
            },
            {
              h3: 'What PSI misses',
              p: 'PSI compares shares, not sizes. Saturday has 37% fewer visits than Wednesday, yet scores only 0.118. A plain count of rows catches that drop immediately.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The lesson for AI',
          p: 'A model trained on weekday patterns will meet weekend data. Monitoring needs at least two checks: has the shape changed, and has the amount changed? Here the simple count is the better alarm for volume.'
        },
        {
          kind: 'p',
          text: 'The visit counts come from the Translink timetable feed for 21 to 25 October 2026 at stops inside the ABS outline of Kenmore. The bands, the PSI values and the percentage drop are our own calculation.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Computing PSI',
      h2: 'Shares, differences and a logarithm',
      intro: 'For each band, PSI multiplies the difference between the new share and the old share by the natural log of their ratio, then adds the bands together.',
      body: [
        {
          kind: 'table',
          caption: 'Steps in the lesson',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Select Kenmore stop visits for each day from the feed.'],
            ['2', 'Count visits in six time bands and convert to shares.'],
            ['3', 'Write a psi(expected, actual) function and test it on Thursday.'],
            ['4', 'Add a volume check and decide which alarm fired first.']
          ]
        },
        {
          kind: 'p',
          text: 'Thursday makes a perfect unit test: its bands match Wednesday exactly, so a correct function must return zero. Learners also try moving the band edges and see that the score changes with them, another reason not to treat 0.25 as magic.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Compare two bar charts of a school day and a weekend, and say what changed.' },
            { h3: 'Teenagers', p: 'Code PSI in Python and chart it for every day of the feed.' },
            { h3: 'Adults', p: 'Set up drift and volume monitoring for a model or report at work.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'In Kenmore',
      h2: 'Kenmore Village stops and 2027 dates',
      intro: 'Details from the Translink feed for Wednesday 21 October 2026 and the Queensland Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Kenmore Village', p: 'Stops on Moggill, Brookfield and Cedarleigh roads all carry the Kenmore Village name in the feed.' },
            { h3: 'No railway', p: 'No railway station lies inside the outline, and all 2,614 Wednesday visits at its 57 stop records are by bus.' },
            { h3: 'Term 1, 2027', p: 'Queensland state schools start on Wednesday 27 January 2027 and Term 1 ends on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'Kenmore is the ABS suburb outline of about 5.59 square kilometres. Stops are matched to it by our own point-in-polygon test; Kenmore Hills is a separate suburb and is not included.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From bar charts to model monitoring',
    intro: 'Treat ages as a guide; the trial lesson sets the rung.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Spot the difference',
        p: 'Charts and patterns in playful block code.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 8 to 12',
        h3: 'Counting and comparing',
        p: 'Logic puzzles and first Python counts.',
        courses: ['problem-solving-and-computational-thinking-for-kids', 'python-ai-kids-masterclass']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Data and models',
        p: 'Training, testing and monitoring models.',
        courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Data in production',
        p: 'Statistics and analysis for real decisions.',
        courses: ['data-analysis-mastery-course-college', 'statistics-probability-maths-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why learn about drift when AI tools exist?',
    intro: 'Because the tools fail quietly when the world changes.',
    p1: 'An AI model learns patterns from past data. When the data changes, as Kenmore\'s buses do every weekend, the model keeps answering confidently with old patterns.',
    p2: 'Learners who have computed PSI by hand know what a drift alert means, and also what it ignores. That makes them better at choosing checks than anyone who only reads a dashboard.',
    closer: 'Kenmore learners study AI as a system to test, not a box to trust.',
    blogAnchor: 'why coding is still worth learning this year'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online classes for Kenmore',
    intro: 'Lessons run live over video, so learners join from home.',
    cells: [
      { h3: 'Taught live', p: 'The teacher leads, questions and reviews code during every lesson.' },
      { h3: 'Holiday pauses', p: 'Classes follow the Queensland terms and stop in school holidays.' },
      { h3: 'Trial lesson', p: 'A free first lesson, then a written recommendation.' },
      { h3: 'Level-based groups', p: 'Groups of five to ten, or private lessons.' },
      { h3: 'Regular rhythm', p: 'Two lessons a week, around eight a month.' },
      { h3: 'India time', p: 'A 4:30pm Kenmore lesson is noon in India throughout the year.' }
    ],
    spec: {
      title: 'Queensland clocks',
      p: 'The IANA time zone database shows that Queensland\'s last daylight saving ended in March 1992, so the gap to India is always four and a half hours.'
    }
  },
  fees: {
    h2: 'Kenmore class fees',
    intro: 'One set of fees for every learner.',
    first: 'Lesson one is free and comes with a plan.',
    group: 'Groups: about eight lessons a month, five to ten learners.',
    private: 'One to one: about eight lessons a month with a dedicated teacher.',
    closer: 'Kenmore fees are in US dollars and only start after the trial has set the course and a weekly time. The pricing page sets out holiday and missed-lesson rules.'
  },
  reviewsH2: 'Families\' reviews on Google',
  book: {
    h2: 'Book a free Kenmore lesson',
    intro: 'Tell us the learner\'s age and interests. A child might compare charts of busy and quiet days; a teenager might code the Kenmore drift check.',
    success: 'Thank you. We will contact you soon about a Kenmore lesson.'
  },
  faq: {
    h2: 'Kenmore AI and programming questions',
    intro: 'Questions from Kenmore parents and adult learners.',
    items: [
      { q: 'How many people live in Kenmore?', a: 'The 2021 Census counted 9,675 people in the Kenmore suburb, with a median age of 40.' },
      {
        q: 'What is the population stability index?',
        a: 'A score that compares how a quantity is spread across bins in two data sets. Zero means identical shares; larger values mean the shape has shifted.'
      },
      { q: 'What is data drift?', a: 'A change in the data a model sees after training, such as weekend patterns reaching a model built on weekdays.' },
      {
        q: 'Is PSI enough to monitor a model?',
        a: 'No. It ignores changes in volume and depends on how the bins are chosen, so it is paired with counts and accuracy checks.'
      },
      {
        q: 'Do children need statistics before AI?',
        a: 'No. Younger learners compare charts and counts; formal statistics comes in the teen and adult courses.'
      },
      { q: 'How many bus routes serve Kenmore?', a: 'On Wednesday 21 October 2026 the Translink timetable shows 10 bus routes stopping inside the suburb.' },
      {
        q: 'Do you have a centre in Kenmore?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Kenmore classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can adults join AI classes?', a: 'Yes. Adults learn in their own groups or one to one, often with data from their own work.' }
    ]
  },
  next: {
    eyebrow: 'More for Brisbane learners',
    h2: 'Explore further',
    html: 'Go to the <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">Brisbane page</a> for the city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland guide</a> for the state, and <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens</a> for secondary learners.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Kenmore and Brisbane',
  footerPlaces: [
    { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Think, not just use AI' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-kenm .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.4vw, 2.1rem); }
.cg-root.cg-kenm .cg-hero h1 { font-weight: 670; letter-spacing: -0.028em; line-height: 1.03; }
.cg-root.cg-kenm .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-kenm .cg-eyebrow { letter-spacing: 0.095em; font-weight: 660; font-size: 0.78rem; }
.cg-root.cg-kenm .cg-section-head h2 { max-width: 19ch; }
.cg-root.cg-kenm .cg-grid-3 { gap: clamp(1rem, 2.7vw, 1.75rem); }
.cg-root.cg-kenm .cg-table caption { text-align: left; font-weight: 620; font-size: 0.9rem; }
.cg-root.cg-kenm .cg-table td:nth-child(n+2) { text-align: right; }
.cg-root.cg-kenm .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.7rem; }
.cg-root.cg-kenm .cg-callout { border-radius: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Kenmore (SAL31504), ABS Census 2021 QuickStats (read 12 October 2026): 9,675 people; median age 40; 2,784 families; 3,566 private dwellings; 2.8 people per household; 1.9 vehicles per dwelling; aged 5-9 789 (8.2%, Queensland 6.4%); aged 10-14 774 (8.0%); separate houses 3,112 (92.2%, Queensland 74.8%); bachelor or higher 3,761 (49.9%, Queensland 21.9%); professionals 1,958 (40.1%, Queensland 21.4%); car as driver 2,228 (45.7%, Queensland 59.5%). ABS SAL area 5.5945 square kilometres. Translink SEQ GTFS: 57 stop records in the SAL polygon, all bus; Wednesday 21 October 2026 2,614 stop visits on 10 routes (425, 430-433, 435, 443-446); Kenmore Village stops on Moggill Rd, Brookfield Rd, Cedarleigh Rd. Queensland 2027 Term 1: Wednesday 27 January to Thursday 25 March. Brisbane: no daylight saving since March 1992 (IANA 2026e).',
    localProject: 'Kenmore stop visits in six bands (before 7, 7-9, 9-15, 15-18, 18-21, 21 on). Wednesday 2,614 = 163/399/841/580/495/136; Thursday identical, PSI 0.0; Saturday 1,640 = 26/169/672/337/304/132, PSI 0.118; Sunday 1,342 = 12/119/649/309/176/77, PSI 0.227. Saturday volume 37% below Wednesday, not visible in PSI. 0.1/0.25 thresholds a convention. Our calculation. Script: scratchpad au/b11/p8_ken.py.',
    requiredMentions: ['9,675', '2,784', '3,566', '92.2% (3,112)', '49.9% (3,761)', '2,614', '0.227', '425 to 446', 'Kenmore Village'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Kenmore suburb and locality (SAL31504), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL31504'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026, downloaded October 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      {
        claim: 'Queensland Department of Education, future school dates: 2027 Queensland term dates (Term 1 Wednesday 27 January to Thursday 25 March).',
        url: 'https://education.qld.gov.au/about-us/calendar/future-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Brisbane follows rule AQ, whose last daylight saving period ended in March 1992.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Passenger numbers: not claimed; the feed gives scheduled visits.',
      'Kenmore Hills or Indooroopilly figures: different suburbs, not used.',
      'The worked-at-home share: identical in rounding to a neighbouring suburb page, so left off.',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any connection with Brisbane City Council, Translink or the Queensland Department of Education.'
    ]
  }
};
