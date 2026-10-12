'use strict';
// Glenelg, Adelaide (cg- district page, Australia cluster Phase 8, row 316). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), suburb page (ABS SAL40505, Glenelg (SA), City of Holdfast Bay) under
// Adelaide and South Australia.
// Spine: an agent counts Wednesday tram visits at Glenelg stop records, comparing route_type with the integer 0 while
// the CSV holds the text "0", so it reports 0. Its own test recomputes the answer with the same function and passes.
// An independent test (trips on the route named GLNELG) expects 474 and fails, exposing the bug; the fix gives 474.
// Data: Adelaide Metro GTFS v1708 (CC BY 3.0 AU). Agent turns are our scripts. Lesson family: tautological tests; claimed.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'GLENELG',
    label: 'Glenelg, Adelaide',
    blurb: 'Vibe coding and AI agent classes for Glenelg, where an agent\'s test passed while its tram count was zero, and only an independent check caught it.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-glenelg-adelaide',
  code: 'glng',
  accent: '#792732',
  accentRationale: 'Glenelg: a deep wine red (hue 352.0), 7.93:1 on #EDE7DA; 30.8 RGB from the nearest South Australian accent, 13.2 from any other Australian accent and 8.1 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Glenelg',
    eyebrow: 'Glenelg, City of Holdfast Bay, South Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Glenelg' },
      { type: 'AdministrativeArea', name: 'City of Holdfast Bay' },
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
  routeLabel: 'Glenelg, Adelaide',
  title: 'Vibe Coding and AI Agents Classes in Glenelg, Adelaide',
  description: 'Live online vibe coding and AI agent classes for Glenelg teenagers and adults, with Scratch and Python for children from six, taught in small groups or one to one.',
  ogDescription: 'Glenelg agent project: a tram count of zero, a test that passed anyway, and the independent check that found 474 Wednesday tram visits.',
  twitterDescription: 'Vibe coding and AI agents for Glenelg, live online.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agent Classes for Glenelg',
    description: 'Level-matched online lessons in vibe coding, AI agents and Python for teenagers and adults in Glenelg, Adelaide, with coding for children from six.'
  },
  h1: 'Vibe coding and AI agent classes in Glenelg',
  capsuleQ: 'How can Glenelg learners tell whether an AI agent\'s tests mean anything?',
  capsule: 'By checking that each test compares the code against an independent answer, not against the same calculation run twice. Our live online classes teach vibe coding and agent work with that check built in. Glenelg had 3,440 residents at the 2021 Census.',
  lead: 'Trams reach Moseley Square on every day of the week in the timetable, so a count of Wednesday tram visits at Glenelg should not be zero. Our scripted agent\'s code said zero, and the test it wrote for that code passed. The test was checking the code against itself.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Glenelg.',
  picks: {
    eyebrow: 'Course picks for Glenelg',
    h2: 'Courses for testing what agents build',
    intro: 'This project needs Python, a little testing knowledge and a sceptical eye for green ticks. These courses teach all three; a free lesson finds the fit.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'AI-assisted building, with tests the learner writes and understands.'
      },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Coding agents on real projects, with independent checks on their work.'
      },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python types, files and the testing basics agents rely on.' },
      {
        course: 'complete-generative-ai-masterclass-college',
        band: 'University and adult',
        note: 'Generative AI and agents, including how to evaluate their output.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Glenelg in the Census',
      h2: 'A small seaside suburb of apartments',
      intro: 'Census 2021 figures for the suburb of Glenelg (ABS code SAL40505), set against the whole of South Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Glenelg in 2021',
          head: ['Measure', 'Glenelg'],
          rows: [
            ['Residents', '3,440'],
            ['Median age', '55'],
            ['Families', '841'],
            ['Private dwellings', '2,299'],
            ['People per household', '1.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Glenelg beside the state',
          head: ['Indicator', 'Glenelg', 'South Australia'],
          rows: [
            ['Flats or apartments', '61.1% (1,026)', '6.8%'],
            ['Separate houses', '15.8% (265)', '78.0%'],
            ['Employed residents working from home', '16.5% (263)', '9.6%'],
            ['Adults with a bachelor degree or higher', '33.4% (1,069)', '22.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'An older population', p: 'The median age was 55, and 188 residents were 85 or over.' },
            { h3: 'Fewer children', p: 'Children aged 5 to 9 numbered 83, and those aged 10 to 14 numbered 75.' },
            { h3: 'Under a square kilometre', p: 'The ABS outline of Glenelg encloses just under 1 square kilometre by the beach.' }
          ]
        },
        {
          kind: 'p',
          text: 'Small Census counts are randomly nudged by the bureau for privacy. That is why we show them exactly as released and do not add any of them up.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'A test that could never fail',
      intro: 'The request: count the scheduled tram visits at stop records inside Glenelg on Wednesday 21 October 2026. Tram routes carry route_type 0 in the timetable. The scripted agent wrote a filter, then a test to prove it worked.',
      body: [
        {
          kind: 'table',
          caption: 'What each version reported (our run)',
          head: ['Code or test', 'Result'],
          rows: [
            ['Agent filter: route_type == 0', '0 tram visits'],
            ['Agent test: expected = count_trams(data); assert count_trams(data) == expected', 'Passed'],
            ['Independent test: visits on trips of the route named GLNELG', 'Expects 474, so it fails'],
            ['Fixed filter: route_type == \'0\'', '474 tram visits']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The bug',
              p: 'csv reads every field as text. The column holds "0", the code compared with the number 0, and text never equals a number in Python, so nothing matched.'
            },
            {
              h3: 'The tautology',
              p: 'The agent built its expected value by calling the same function it was testing. Any bug appears on both sides of the comparison, so the test always passes.'
            },
            {
              h3: 'The independent check',
              p: 'Counting by route name instead of route type is a different path to the same truth. It disagreed, which is exactly what a useful test does.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Where the 474 visits happen',
          p: 'The tram stop records inside Glenelg are Jetty Road (two records) and Moseley Square. Their 474 Wednesday visits sit alongside 1,418 bus visits and 34 school bus visits across the suburb\'s 20 stop records.'
        },
        {
          kind: 'p',
          text: 'The timetable is Adelaide Metro open data. Glenelg membership is our point-in-boundary check and every count is ours. The agent and its test are scripts we wrote to show the pattern, not output from any commercial AI model.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Agents and testing',
      h2: 'Spotting a tautological test',
      intro: 'Agents write tests quickly, and many are fine. A short review catches the ones that cannot fail.',
      body: [
        {
          kind: 'table',
          caption: 'Questions to ask of any agent-written test',
          head: ['Question', 'Warning sign', 'Glenelg case'],
          rows: [
            ['Where does the expected value come from?', 'From the code under test', 'count_trams() on both sides'],
            ['Could this test ever fail?', 'Hard to imagine how', 'Passes even at 0'],
            ['Is there a second route to the answer?', 'None used', 'Route name GLNELG gives 474'],
            ['Was the test seen failing first?', 'Never', 'Break the code and check']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Check a sum on a calculator and by counting on fingers: two methods, one answer.' },
            { h3: 'Secondary learners', p: 'Let an AI write a function and its test, then deliberately break the function and see whether the test notices.' },
            { h3: 'Adults', p: 'Ask that every agent-written test names where its expected value comes from before merging the change.' }
          ]
        },
        {
          kind: 'p',
          text: 'The quickest defence is to make a test fail on purpose before trusting it. A test that stays green when the code is wrong is not testing anything.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Glenelg',
      h2: 'Tram, bus interchange and late services',
      intro: 'Local details from the timetable for Wednesday 21 October 2026.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Visits and routes', p: 'Glenelg\'s 20 stop records had 1,926 scheduled visits on 26 routes, by our count.' },
            { h3: 'Interchange', p: 'Zone B at Glenelg Interchange was the busiest stop record, with 267 visits; a Jetty Road stop had 244.' },
            { h3: 'After midnight', p: 'The last scheduled departure was written as 25:19:00, the timetable\'s way of saying 1:19am on the same service day.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Glenelg proper',
          p: 'This page covers the suburb of Glenelg in the City of Holdfast Bay. Glenelg North, Glenelg East and Glenelg South are separate ABS suburbs with their own figures, not included here.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From finger counting to agent review',
    intro: 'Treat the ages loosely; a learner\'s first lesson shows where to begin.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and play',
        p: 'Games built and checked block by block.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI basics',
        p: 'First code and a sensible view of AI.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding',
        p: 'Building with AI, then testing it independently.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Coding agents',
        p: 'Agents for real work, reviewed like any colleague\'s code.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'If the agent writes the tests, who tests the tests?',
    intro: 'The learner who knows what a meaningful test looks like. Green ticks are easy to produce.',
    p1: 'Vibe coding often ends with "and add tests", and agents oblige. Some of those tests are excellent. Some, like the Glenelg one, quietly measure the code against itself and would pass whatever the code returned.',
    p2: 'Learners who have watched a passing test sit beside a zero tram count stop trusting green ticks on sight. They ask where each expected value came from, which is the question that keeps agent-built software honest.',
    closer: 'In Glenelg, the learner who tests the tests ships code that counts the trams.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Glenelg lessons online',
    intro: 'Each lesson is a live video class; there is no venue to visit.',
    cells: [
      { h3: 'Shared screen', p: 'Prompts, code and test results are all read together.' },
      { h3: 'Term-time rhythm', p: 'Classes follow South Australian school terms with holiday breaks.' },
      { h3: 'Opening class free', p: 'A real first lesson, then honest advice on next steps.' },
      { h3: 'Small groups', p: 'Five to ten learners at a matching level, or private lessons.' },
      { h3: 'Twice a week', p: 'Regular slots, roughly eight lessons a month.' },
      { h3: 'India time', p: 'Our teachers are in India: a 6pm Glenelg class is 1pm India time until early April, then 2pm.' }
    ],
    spec: {
      title: 'Adelaide summer time',
      p: 'South Australia uses daylight saving from the first Sunday in October to the first Sunday in April (IANA time zone database), so the gap to India is five hours in summer and four otherwise.'
    }
  },
  fees: {
    h2: 'Glenelg class fees',
    intro: 'The same three prices for all.',
    first: 'Your first lesson is free and comes with a written plan.',
    group: 'Group month: about eight lessons with five to ten learners.',
    private: 'Private month: about eight lessons with one teacher.',
    closer: 'Glenelg learners pay in US dollars after the trial, once course and timing are agreed. The pricing page details holidays and absences.'
  },
  reviewsH2: 'Google reviews from people we teach',
  book: {
    h2: 'Book a free Glenelg class',
    intro: 'Share the learner\'s age and what they enjoy. An older learner could start by breaking a test on purpose; a child could start with a Scratch tram game.',
    success: 'Thank you. We will contact you soon about a Glenelg class.'
  },
  faq: {
    h2: 'Glenelg vibe coding and agent questions',
    intro: 'Questions Glenelg residents ask about agents and coding classes.',
    items: [
      {
        q: 'How many people live in Glenelg?',
        a: 'The 2021 Census QuickStats count 3,440 residents in the suburb of Glenelg, with 2,299 private dwellings and a median age of 55.'
      },
      {
        q: 'What is a tautological test?',
        a: 'A test whose expected result is produced by the very code being tested, so it passes whether the code is right or wrong. It gives false confidence.'
      },
      {
        q: 'Why did "0" not equal 0 in the Glenelg code?',
        a: 'The CSV reader returns text, so the route type was the string "0". Python never treats a string as equal to the integer 0, so the filter matched nothing.'
      },
      {
        q: 'How many tram visits does Glenelg have?',
        a: 'In the Adelaide Metro timetable for Wednesday 21 October 2026, the tram stop records inside Glenelg had 474 scheduled visits, by our count.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Building software by describing it to an AI tool and refining the result in conversation, while still reading and testing what comes back.'
      },
      { q: 'Do teenagers use Claude in classes?', a: 'No. Claude-based courses are for adults aged 18 and above; teenagers learn with other AI tools.' },
      {
        q: 'Is there a classroom in Glenelg?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Glenelg learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Do Glenelg groups learn Copilot Studio?', a: 'No. Copilot Studio is kept for one-to-one lessons; groups build agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Adelaide and South Australia',
    h2: 'More for Glenelg learners',
    html: 'The <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">Adelaide page</a> covers the whole city and <a class="cg-inline-link" href="/coding-classes-for-kids-adelaide">coding for Adelaide kids</a> suits children. Down the south-east, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-mount-gambier">Mount Gambier</a> has its own agents page, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">the South Australia guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Glenelg and Adelaide',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/vibe-coding-and-ai-agents-classes-in-mount-gambier', label: 'Mount Gambier' },
    { href: '/coding-classes-for-kids-adelaide', label: 'Kids in Adelaide' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' }
  ],
  personalityCss: `
.cg-root.cg-glng .cg-hero-grid { align-items: center; gap: clamp(0.95rem, 2.9vw, 2.3rem); }
.cg-root.cg-glng .cg-hero h1 { font-weight: 625; letter-spacing: -0.023em; line-height: 1.09; }
.cg-root.cg-glng .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.5rem 0 0.5rem 1.04rem; }
.cg-root.cg-glng .cg-eyebrow { letter-spacing: 0.102em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-glng .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.014em; }
.cg-root.cg-glng .cg-grid-3 { gap: clamp(0.74rem, 1.92vw, 1.5rem); }
.cg-root.cg-glng .cg-table caption { font-style: italic; font-weight: 615; text-align: left; }
.cg-root.cg-glng .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-glng .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.86rem; }
.cg-root.cg-glng .cg-callout { border-left-width: 4px; border-radius: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Glenelg (SAL40505, Glenelg (SA)), City of Holdfast Bay. ABS Census 2021 QuickStats (read 13 October 2026): 3,440 people; median age 55; 841 families; 2,299 private dwellings; 1.8 per household; flats 1,026 (61.1%, SA 6.8%); separate houses 265 (15.8%, SA 78.0%); worked at home 263 (16.5%, SA 9.6%); bachelor or higher 1,069 (33.4%, SA 22.7%); aged 5-9 83; 10-14 75; 85+ 188. ABS SAL area 0.9552 sq km; council by ABS LGA point query (Holdfast Bay). Adelaide Metro GTFS v1708, Wednesday 21 October 2026: 20 stop records; 1926 scheduled visits (bus 1418, tram 474, school bus 712 34); 26 routes; Zone B Glenelg Interchange 267; Stop 16/21D Jetty Rd 244; tram stop records Stop 16 Jetty Rd (north and south) and Stop 17 Moseley Square; last departure 25:19:00 (17 departures after 24:00). Neighbours (ABS touches): Glenelg East, Glenelg North, Glenelg South.',
    localProject: 'Tautological test. Glenelg Wednesday rows (1,926). route_type == 0 (int) -> 0; route_type == "0" -> 474; route_short_name == "GLNELG" -> 474. Agent test expected = count_trams(data) is tautological and passes at 0; independent test fails until fixed. Agent turns are our scripts.',
    requiredMentions: ['Jetty Road', '83', '188', 'Moseley Square', 'Glenelg Interchange', 'GLNELG', '474', 'tautological', '25:19:00'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Glenelg (SA) suburb and locality (SAL40505), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL40505'
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
        claim: 'GTFS Schedule reference, routes.txt: route_type 0 denotes tram, streetcar or light rail.',
        url: 'https://gtfs.org/documentation/schedule/reference/'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Adelaide, rule AS, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Passenger numbers on the Glenelg tram: not claimed; the timetable gives scheduled visits.',
      'Any transcript from a commercial AI model: not claimed; the agent and its test are our scripts.',
      'Figures for Glenelg North, East or South: not used.',
      'School term dates: not given; official SA term-date pages refused automated access (HTTP 403), not circumvented.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Holdfast Bay or Adelaide Metro.'
    ]
  }
};
