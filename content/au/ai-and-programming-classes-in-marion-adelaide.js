'use strict';
// Marion, Adelaide (cg- district page, Australia cluster Phase 8, row 322). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page (ABS SAL40830, City of Marion) under Adelaide and South Australia.
// Spine: "what share of Marion's stop visits are by train?" answered in one step mixes every service day: 266 of
// 4,751 rows, 5.6%. Chained in four checked stages (23 stop records; Wednesday 21 Oct 2026 1,593 visits; by mode bus
// 1,444, train 117, school 31, regional 1; share) it gives 7.3%. GTFS v1708; the model steps are our scripts.
// Lesson family: prompt chaining with checked stages; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MARION',
    label: 'Marion, Adelaide',
    blurb: 'AI and programming classes for Marion, where splitting one AI request into four checked steps moves the train share from 5.6% to the correct 7.3%.'
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
  slug: 'ai-and-programming-classes-in-marion-adelaide',
  code: 'mrin',
  accent: '#552C0D',
  accentRationale: 'Marion: a dark chestnut (hue 25.8), 9.73:1 on #EDE7DA; 22.8 RGB from the nearest South Australian accent, 11.4 from any other Australian accent and 7.1 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Marion',
    eyebrow: 'Marion, City of Marion, South Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Marion' },
      { type: 'AdministrativeArea', name: 'City of Marion' },
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
  routeLabel: 'Marion, Adelaide',
  title: 'AI and Programming Classes in Marion, Adelaide',
  description: 'Live online AI and programming classes for Marion children, teens and adults, with real Adelaide timetable data and step-by-step AI work, in groups or one to one.',
  ogDescription: 'Marion AI project: one request answered in a single step says 5.6% of stop visits are by train; four checked steps say 7.3%, and show why.',
  twitterDescription: 'AI and programming for Marion learners, live online.',
  ogImageCourse: 'complete-generative-ai-masterclass-college',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Marion',
    description: 'Level-matched online AI and programming lessons for children, teenagers and adults in Marion, Adelaide, taught live in English.'
  },
  h1: 'AI and programming classes in Marion',
  capsuleQ: 'How can Marion learners get reliable results from AI on multi-step tasks?',
  capsule: 'By splitting the task into a chain of small steps, each with an output they can check, instead of asking for everything at once. Children start with Scratch at six; teenagers and adults combine Python with AI tools. Marion had 4,101 residents at the 2021 Census.',
  lead: 'What share of the scheduled stop visits in Marion are by train? Asked in one go, our scripted model answered 5.6%. Asked as four linked steps, each producing something we could check, it answered 7.3%. The one-step answer had quietly counted every day in a six-month timetable.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Marion.',
  picks: {
    eyebrow: 'Course picks for Marion',
    h2: 'Courses for building with AI step by step',
    intro: 'This project combines Python, data and the craft of breaking work into prompts. These courses teach each part; the trial lesson finds the level.',
    items: [
      { course: 'complete-generative-ai-masterclass-college', band: 'University and adult', note: 'Prompt design, chaining and evaluation for real tasks.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'AI and machine learning with checks at every stage.' },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'Using AI tools in clear, verifiable steps.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python and AI projects, one small step at a time.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Marion in the Census',
      h2: 'Townhouses and a railway station',
      intro: 'Census 2021 QuickStats for the suburb of Marion (ABS code SAL40830), compared with South Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Marion in figures, 2021',
          head: ['Measure', 'Marion'],
          rows: [
            ['Residents', '4,101'],
            ['Median age', '43'],
            ['Families', '1,052'],
            ['Private dwellings', '1,790'],
            ['People per household', '2.3']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Marion against the state',
          head: ['Indicator', 'Marion', 'South Australia'],
          rows: [
            ['Workers who took the train to work', '3.5% (63)', '0.6%'],
            ['Semi-detached, row or townhouse homes', '30.7% (504)', '14.6%'],
            ['Adults with a bachelor degree or higher', '27.8% (996)', '22.7%'],
            ['Employed people in professional jobs', '27.3% (491)', '21.5%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Young people', p: 'Marion counted 274 residents aged 15 to 19, 171 aged 10 to 14 and 154 aged 5 to 9.' },
            { h3: 'Older residents', p: 'Residents aged 85 and over numbered 278, 6.8% of the suburb.' },
            { h3: 'Area', p: 'The ABS boundary of Marion covers about 2 square kilometres in Adelaide\'s south-west.' }
          ]
        },
        { kind: 'p', text: 'The ABS adds slight random noise to small Census cells, so these numbers stay exactly as published and are not combined.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'One big prompt, or four small ones?',
      intro: 'The question was put to a scripted model that could query the Adelaide Metro timetable. First as one request; then as a chain of four, where each step\'s output became the next step\'s input and could be checked on the way.',
      body: [
        {
          kind: 'table',
          caption: 'The chained version, step by step (our calculation)',
          head: ['Step', 'Output', 'Check'],
          rows: [
            ['1. Find stop records inside Marion', '23 records', 'Map them against the ABS boundary'],
            ['2. Keep visits on Wednesday 21 October 2026', '1,593 visits', 'Date filter applied: yes'],
            ['3. Split by mode', 'Bus 1,444, train 117, school bus 31, regional 1', 'Parts match step 2'],
            ['4. Train share', '7.3%', '117 of 1,593']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The one-step version (our calculation)',
          head: ['What it did', 'Result'],
          rows: [
            ['Counted every timetable row at Marion stop records', '4,751 rows'],
            ['Of which train', '266 rows'],
            ['Reported share', '5.6%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Where it went wrong',
              p: 'The timetable lists trips for every service pattern from October 2026 to April 2027. Without a day filter, weekdays, weekends and school-only trips are mixed, and trains and buses are not mixed in the same proportions.'
            },
            {
              h3: 'Why chaining helped',
              p: 'Step 2 had to say which day it used. A missing date is obvious when a step\'s output is printed on its own, and invisible inside a single final number.'
            },
            {
              h3: 'Checks between steps',
              p: 'The mode counts in step 3 must add back to the step 2 total. They do, which is our own arithmetic on our own counts, not on published figures.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The principle',
          p: 'Prompt chaining breaks a task into stages small enough to verify. Each stage has a clear input, a clear output and a test. It costs more requests, and it turns a confident wrong number into a traceable right one.'
        },
        {
          kind: 'p',
          text: 'The timetable is Adelaide Metro open data, feed version 1708. Marion membership is our point-in-boundary check, and every count is ours. The model in this project is a script we wrote to show the two approaches; it is not a transcript of any commercial AI system.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'AI workflows',
      h2: 'Designing a chain',
      intro: 'Good chains share a few features, whether the steps are prompts, Python functions or both.',
      body: [
        {
          kind: 'table',
          caption: 'What makes a chain trustworthy',
          head: ['Feature', 'Why', 'Marion example'],
          rows: [
            ['One job per step', 'Each output is easy to judge', 'Stops, then day, then mode'],
            ['Explicit assumptions', 'Hidden choices surface', 'The date is stated in step 2'],
            ['A check after each step', 'Errors stop early', 'Mode counts sum to 1,593'],
            ['Code for exact counting', 'Models estimate, code counts', 'Python does the arithmetic']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Follow a recipe one step at a time and taste after each step, instead of mixing everything at once.' },
            { h3: 'Secondary learners', p: 'Ask an AI the Marion question both ways, record each step\'s output, and find where the one-step answer drifted.' },
            { h3: 'Adults', p: 'Redesign a long work prompt as three or four steps with a check between each.' }
          ]
        },
        {
          kind: 'p',
          text: 'Chaining is not always worth it. For a simple lookup one prompt is fine. The more steps a task hides, filters, joins, grouping, arithmetic, the more chaining pays for its extra requests.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Marion',
      h2: 'Sturt Road, Marion Road and the railway',
      intro: 'What the timetable for Wednesday 21 October 2026 shows inside the suburb.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Busiest records', p: 'Stops 29B, 29C and 29D on Sturt Road (north side) each had 200 scheduled visits.' },
            { h3: 'Rail', p: 'Marion Railway Station had 117 scheduled train visits that Wednesday, by our count.' },
            { h3: 'Routes', p: 'In all, 30 routes served the suburb\'s 23 stop records that day.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Marion the suburb',
          p: 'This page describes the suburb of Marion, not the City of Marion as a whole. Oaklands Park, Mitchell Park, Sturt, Seacombe Gardens, Park Holme, Ascot Park and Bedford Park border it and keep separate figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From recipes to AI pipelines',
    intro: 'Ages are only a guide; a trial lesson places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Step-by-step programs and puzzles.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI ideas',
        p: 'First code and simple uses of AI.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'AI in practice',
        p: 'Machine learning and AI tools used in checked stages.',
        courses: ['ai-ml-masterclass-teens', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'University and adult',
        h3: 'Generative AI',
        p: 'Prompt pipelines and evaluation for work.',
        courses: ['complete-generative-ai-masterclass-college', 'ai-ml-masterclass-complete-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI can answer in one go, why break it up?',
    intro: 'Because one-go answers hide their assumptions, and some assumptions are wrong.',
    p1: 'A single prompt about Marion\'s trains returns a tidy percentage. Nothing in it reveals that every day of a six-month timetable was counted together. The number is precise to one decimal place and still wrong.',
    p2: 'Learners who have built the chain themselves know to ask for intermediate outputs and to check that parts add up to wholes. That habit turns AI from an oracle into a tool they can audit.',
    closer: 'In Marion, the learner who chains and checks gets 7.3%, and can show why.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Marion lessons online',
    intro: 'Classes are live on video, so learners join from home.',
    cells: [
      { h3: 'Every step visible', p: 'Each prompt and each intermediate result is reviewed together.' },
      { h3: 'SA term rhythm', p: 'Lessons follow South Australian school terms and holidays.' },
      { h3: 'Free trial lesson', p: 'A full first class with no charge, then advice in writing.' },
      { h3: 'Level-matched classes', p: 'Five to ten learners at a similar stage, or one to one.' },
      { h3: 'Twice each week', p: 'Two set lessons weekly, roughly eight a month.' },
      { h3: 'India time', p: 'Teachers are in India, so a 4pm Marion lesson is 11am India time in summer and noon after early April.' }
    ],
    spec: {
      title: 'Clocks across the year',
      p: 'Adelaide\'s daylight saving period runs from the first Sunday in October to the first Sunday in April (IANA time zone database), while India keeps one time, so the gap moves between five and four hours.'
    }
  },
  fees: {
    h2: 'Marion class fees',
    intro: 'One set of three prices.',
    first: 'The first lesson is free and ends with a recommended course.',
    group: 'Group lessons: about eight a month with five to ten learners.',
    private: 'Private lessons: about eight a month with one teacher.',
    closer: 'Marion families pay in US dollars, after the trial and once course and time are fixed. The pricing page covers holidays and missed lessons.'
  },
  reviewsH2: 'What our learners write on Google',
  book: {
    h2: 'Book a free Marion class',
    intro: 'Tell us the learner\'s age and goals. An older learner might build the four-step chain; a younger one might follow a Scratch recipe game.',
    success: 'Thank you. We will be in touch about a Marion class soon.'
  },
  faq: {
    h2: 'Marion AI and programming questions',
    intro: 'Questions Marion families and adult learners ask.',
    items: [
      {
        q: 'How many people live in Marion, SA?',
        a: 'The 2021 Census QuickStats count 4,101 residents in the suburb of Marion, with 1,790 private dwellings and a median age of 43.'
      },
      {
        q: 'What is prompt chaining?',
        a: 'Splitting a task for an AI model into a sequence of smaller prompts, where each step\'s output feeds the next. Each step is easier to get right and to check.'
      },
      {
        q: 'When is prompt chaining worth it?',
        a: 'When a task hides several operations, such as filtering, grouping and calculating, or when a wrong answer would be costly. For simple lookups a single prompt is usually enough.'
      },
      {
        q: 'What share of Marion stop visits are by train?',
        a: 'By our count of the Adelaide Metro timetable for Wednesday 21 October 2026, 117 of 1,593 scheduled visits at stop records inside Marion were by train, 7.3%.'
      },
      {
        q: 'Can young children learn about AI?',
        a: 'Yes. From six they explore AI ideas through Scratch games; building and checking real models usually starts around thirteen.'
      },
      { q: 'Do teenagers use Claude in our courses?', a: 'No. Claude-based courses are for adults aged 18 and over only; teenagers use other AI tools.' },
      {
        q: 'Is there a classroom in Marion?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Marion learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Will Marion group classes include Copilot Studio?', a: 'No. Copilot Studio is taught one to one only; group learners build agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Adelaide and South Australia',
    h2: 'More for Marion learners',
    html: 'See <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">our Adelaide page</a> for the city and <a class="cg-inline-link" href="/coding-classes-for-kids-adelaide">Adelaide kids\' coding</a> for children. On Eyre Peninsula, <a class="cg-inline-link" href="/best-coding-classes-in-port-lincoln">Port Lincoln</a> has its own page, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">the South Australia guide</a> links the rest.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Marion and Adelaide',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/best-coding-classes-in-port-lincoln', label: 'Port Lincoln' },
    { href: '/coding-classes-for-kids-adelaide', label: 'Kids in Adelaide' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' }
  ],
  personalityCss: `
.cg-root.cg-mrin .cg-hero-grid { align-items: start; gap: clamp(1.03rem, 2.97vw, 2.44rem); }
.cg-root.cg-mrin .cg-hero h1 { font-weight: 648; letter-spacing: -0.022em; line-height: 1.07; }
.cg-root.cg-mrin .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.67rem 0 0.67rem 1.14rem; }
.cg-root.cg-mrin .cg-eyebrow { letter-spacing: 0.112em; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; }
.cg-root.cg-mrin .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.016em; }
.cg-root.cg-mrin .cg-grid-3 { gap: clamp(0.77rem, 2.08vw, 1.62rem); }
.cg-root.cg-mrin .cg-table caption { font-weight: 672; text-align: left; }
.cg-root.cg-mrin .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mrin .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.02rem; }
.cg-root.cg-mrin .cg-callout { border-left-width: 7px; border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Marion (SAL40830), City of Marion. ABS Census 2021 QuickStats (read 13 October 2026): 4,101 people; median age 43; 1,052 families; 1,790 private dwellings; 2.3 per household; train to work 63 (3.5%, SA 0.6%); semi-detached 504 (30.7%, SA 14.6%); bachelor or higher 996 (27.8%, SA 22.7%); professionals 491 (27.3%, SA 21.5%); aged 5-9 154; 10-14 171; 15-19 274; 85+ 278. ABS SAL area 2.004 sq km; council by ABS LGA point query. Adelaide Metro GTFS v1708: Wednesday 21 Oct 2026 23 stop records, 1593 visits (bus 1444, train 117, school 712 31, regional 701 1), 30 routes; Stops 29B, 29C, 29D Sturt Rd North side 200 each; Stop 24 Marion Rd West side 73; Marion Railway Station. Neighbours (ABS touches): Ascot Park, Bedford Park, Mitchell Park, Oaklands Park, Park Holme, Seacombe Gardens, Sturt.',
    localProject: 'Prompt chaining. Marion stop_times rows all service days 4,751, train 266 (5.6%). Chained: 23 stop records; Wednesday 21 Oct 2026 1,593 visits; modes bus 1,444, train 117, school 712 31, regional 701 1; train share 117 / 1,593 = 7.3%. The model steps are our scripts.',
    requiredMentions: ['1,790', '504', '274', 'Sturt Road', 'Marion Railway Station', 'Oaklands Park', '7.3%', '5.6%', 'prompt chaining'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Marion suburb and locality (SAL40830), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL40830'
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
        claim: 'Anthropic, Claude prompting best practices, Chain complex prompts: explicit prompt chaining, breaking a task into sequential calls, is useful when you need to inspect intermediate outputs.',
        url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#chain-complex-prompts'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Adelaide, rule AS, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Passenger numbers or the share of travellers using trains: not claimed; the page measures scheduled visits.',
      'Any transcript from a commercial AI model: not claimed; the model steps are our scripts.',
      'Figures for the City of Marion as a whole: not used.',
      'School term dates: not given; official SA term-date pages refused automated access (HTTP 403).',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Marion or Adelaide Metro.'
    ]
  }
};
