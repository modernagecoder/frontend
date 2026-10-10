'use strict';
// Kellyville, Sydney (cg- district page, Australia cluster Phase 8, row 219). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), suburb page under Sydney and New South Wales. Kellyville (ABS suburb
// SAL12096) lies wholly in The Hills Shire by our point-in-polygon check of the ABS boundaries.
// Spine: for every month of Kellyville metro station entries, how long until a busier month came along,
// and why does a monotonic stack answer that in one pass?
// Data: Transport for NSW monthly station entries (CC BY), Kellyville Station (Metro), October 2024 to
// August 2026, 23 months. Next-greater-element waits computed with a monotonic stack and checked against
// a brute-force double loop (scratchpad au/b3 kely run). Stack work 45 operations (23 pushes, 22 pops) vs
// 61 comparisons by brute force on the real series; on the same 23 values sorted largest first the brute
// force needs 253 comparisons and finds nothing, the stack needs 23 pushes. Across all 338 stations with a
// numeric entry count in every month: 14,430 stack operations vs 21,231 comparisons.
// Lesson family: monotonic stack (next greater element); screened 0 location-page hits.
// Place facts: ABS Census 2021 QuickStats, Kellyville (SAL12096); NSW Department of Education master
// dataset (first-teacher dates); NSW 2027 term dates; IANA Australia/Sydney.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'KELLYVILLE',
    label: 'Kellyville, Sydney',
    blurb: 'Coding and AI classes for Kellyville, with a monotonic stack that finds how many months each busy month at the metro station waited to be beaten.'
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
  slug: 'best-coding-and-ai-classes-in-kellyville-sydney',
  code: 'kely',
  accent: '#166756',
  accentRationale: 'Kellyville: a deep eucalyptus teal (hue 169), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 6.76:1 on white and 5.48:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Kellyville',
    eyebrow: 'Kellyville, The Hills Shire, Sydney',
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
  routeLabel: 'Kellyville, Sydney',
  title: 'Best Coding and AI Classes in Kellyville, Sydney',
  description: 'Live online coding, Python and AI classes for Kellyville children, teenagers and adults, in small groups or one to one, with real teachers. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Kellyville, with a project on the metro station: a monotonic stack finds that the March 2025 count waited 12 months to be beaten.',
  twitterDescription: 'Kellyville coding and AI classes, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Kellyville',
    description: 'Level-matched online coding, Python, algorithms and AI for children from six, teenagers and adults in Kellyville, taught live in English.'
  },
  h1: 'Coding and AI classes in Kellyville',
  capsuleQ: 'What makes the best coding and AI classes for a Kellyville family?',
  capsule: 'Live teaching that builds real thinking, delivered online so nobody drives to a centre. The 2021 Census counted 27,011 people in Kellyville, 87.7% of occupied homes separate houses, and 8.0% of residents aged 10 to 14 against 6.2% across NSW. Lessons run one to one or in level-matched small groups, and the first one is free.',
  lead: 'Kellyville has a metro station that Transport for NSW counts every month. We took the 23 monthly entry totals from October 2024 to August 2026 and asked a question that sounds simple: for each month, how long did the station wait before a busier month arrived? March 2025 logged 112,923 entries and was not beaten until March 2026. August 2026, at 119,415, has not been beaten at all in the published data. Answering the question for every month with two nested loops is easy; answering it in a single pass needs a monotonic stack, one of the most useful tricks a young programmer can learn.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a learner in Kellyville.',
  picks: {
    eyebrow: 'Course picks for Kellyville',
    h2: 'Courses that lead to thinking like an engineer',
    intro: 'Each course connects to the stack project at a different level. The free trial decides the fit, and no card is needed to book it.',
    items: [
      {
        course: 'python-ai-kids-masterclass',
        band: 'Ages 8 to 12',
        note: 'Python games and turtle drawings for primary children, then simple lists that grow and shrink.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Full Python for high schoolers, including the list operations a stack is built from.'
      },
      {
        course: 'problem-solving-dsa-masterclass-teens',
        band: 'Ages 14 to 18',
        note: 'Stacks, queues and the patterns behind contest problems, with proofs of why they run fast.'
      },
      {
        course: 'data-structures-algorithms-masterclass-college',
        band: 'University and adult',
        note: 'Interview-ready data structures, where next-greater-element questions turn up often.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Kellyville in the Census',
      h2: 'A suburb of family houses and school-age children',
      intro: 'Census 2021 QuickStats for the Kellyville suburb, measured against New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Kellyville, 2021 Census headline counts',
          head: ['Headline', 'Kellyville'],
          rows: [
            ['Residents', '27,011'],
            ['Families', '7,590'],
            ['Private dwellings', '8,555'],
            ['People per household', '3.3']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Kellyville against NSW and Australia',
          head: ['Measure', 'Kellyville', 'NSW', 'Australia'],
          rows: [
            ['Separate houses among occupied homes', '87.7% (7,104)', '65.6%', '72.3%'],
            ['Residents aged 10 to 14', '8.0% (2,159)', '6.2%', '6.2%'],
            ['Bachelor degree or higher, aged 15 and over', '40.6% (8,588)', '27.8%', '26.3%'],
            ['Managers among employed residents', '18.9% (2,622)', '14.6%', '13.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Houses, not flats', p: 'Only 420 occupied homes, 5.2%, were flats or apartments, while the state figure was 21.7%.' },
            { h3: 'Primary-age children', p: 'The Census counted 2,125 residents aged 5 to 9, 7.9% of the suburb, against 6.2% for NSW.' },
            { h3: 'Bigger households', p: 'An average of 3.3 people per household sits well above the Sydney apartment suburbs closer to the city.' }
          ]
        },
        {
          kind: 'p',
          text: 'Census cells are adjusted slightly for privacy, so parts may not add exactly to totals. We quote the bureau\'s own figures and never build a total by adding rows together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'How long did each busy month wait to be beaten?',
      intro: 'The data is 23 monthly entry counts for Kellyville Station, a metro station, published by Transport for NSW. For each month we want the number of months until a strictly busier one.',
      body: [
        {
          kind: 'table',
          caption: 'Kellyville Station monthly entries and months until a busier month (our calculation)',
          head: ['Month', 'Entries', 'Wait'],
          rows: [
            ['October 2024', '102,128', '5 months'],
            ['January 2025', '88,086', '1 month'],
            ['March 2025', '112,923', '12 months'],
            ['October 2025', '111,697', '5 months'],
            ['January 2026', '87,000', '1 month'],
            ['March 2026', '115,666', '5 months'],
            ['May 2026', '112,190', '3 months'],
            ['August 2026', '119,415', 'Not yet beaten']
          ]
        },
        {
          kind: 'p',
          text: 'Ten of the 23 months were beaten by the very next month. March 2025 waited longest, twelve months, until March 2026 edged past it with 115,666. The table shows a selection; the learner\'s program fills in all 23.'
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Work done to answer the question (our calculation)',
          head: ['Input', 'Brute force comparisons', 'Monotonic stack operations'],
          rows: [
            ['Kellyville, real order', '61', '45 (23 pushes, 22 pops)'],
            ['Kellyville, sorted largest first', '253', '23 (pushes only)'],
            ['All 338 complete station series', '21,231', '14,430']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The brute force',
              p: 'For each month, scan forward until something is bigger. A falling series is the worst case: every scan runs to the end, which is 253 comparisons for 23 months.'
            },
            {
              h3: 'The stack',
              p: 'Keep the months still waiting on a stack, smallest on top. Each new month pops every waiting month it beats, so each month enters once and leaves at most once.'
            },
            {
              h3: 'Why it is linear',
              p: 'With n months the stack never does more than 2n operations in total, so doubling the data doubles the work rather than quadrupling it.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Proving the answer, not trusting it',
          p: 'We ran both methods on every one of the 338 stations that have a number in all 23 months and they agreed on every wait. A learner who writes the faster algorithm should always keep the slow, obvious version around as a referee.'
        },
        {
          kind: 'p',
          text: 'The waits and operation counts are our own calculation from the published monthly counts. Station entries count people entering through the gates, not distinct passengers, and say nothing about why one month was busier than another, so the page names no cause.'
        }
      ]
    },
    {
      id: 'method',
      tint: 'tint',
      eyebrow: 'From idea to code',
      h2: 'The stack in eight lines of Python',
      intro: 'The whole algorithm fits in a short function, and every line can be traced by hand on the Kellyville numbers.',
      body: [
        {
          kind: 'table',
          caption: 'What each line of the function does',
          head: ['Step', 'What happens', 'Kellyville example'],
          rows: [
            ['Start', 'An empty stack of waiting months', 'Nothing waiting'],
            ['New month arrives', 'Compare it with the month on top', 'December 2024 meets November 2024'],
            ['It is bigger', 'Pop the top and record the wait', 'February 2025 settles January 2025'],
            ['It is smaller', 'Push it and move on', 'January 2025 waits on top of the stack'],
            ['End of data', 'Anything left waits for ever', 'August 2026 stays on the stack']
          ]
        },
        {
          kind: 'p',
          text: 'Students first act the algorithm out on paper with the 23 numbers, crossing off months as they are popped. Only then do they type it. The paper version makes the key insight visible: a month only stays on the stack while every month above it is smaller, so the stack is always in decreasing order.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary children', p: 'Stack paper cups labelled with monthly totals, remove the ones a bigger cup beats, and count the moves.' },
            { h3: 'High school', p: 'Write the function, test it against brute force on random lists, and time both on a million values.' },
            {
              h3: 'Adults',
              p: 'Use the same pattern for stock prices, temperature records or server load, wherever the question is how long until something exceeds today.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Transport for NSW, the NSW Department of Education, The Hills Shire Council and the statistics bureau publish the data used here and have no link with Modern Age Coders.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Kellyville',
      h2: 'An 1873 schoolhouse and a twenty-first century high school',
      intro: 'A few more facts from the state schools file and the NSW calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'The first teacher',
              p: 'The department\'s file dates Kellyville Public School\'s first teacher to November 1873, more than a century before most of the houses around it were built.'
            },
            { h3: 'Newer schools', p: 'Kellyville High School records its first teacher in January 2003 and Sherwood Ridge Public School in January 2004.' },
            { h3: 'Winter break 2027', p: 'In the Eastern division, the NSW winter school holidays in 2027 run from Monday 5 July to Friday 16 July.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Which council?',
          p: 'Kellyville is a suburb inside The Hills Shire. We checked this by testing 4,000 random points inside the bureau\'s suburb boundary against its council boundaries; every point fell in The Hills Shire.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From paper cups to data structures',
    intro: 'Ages are a guide; the free trial sets the real starting point.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'First steps',
        p: 'Scratch games and puzzles that build sequencing and loops before any typing.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'First Python',
        p: 'Lists, loops and small games in Python, with AI help used carefully.',
        courses: ['python-ai-kids-masterclass', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Algorithms',
        p: 'Stacks, queues, searching and sorting, measured rather than memorised.',
        courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Interview depth',
        p: 'Data structures, complexity proofs and real systems work.',
        courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write the stack. Why should a Kellyville student still learn it?',
    intro: 'Because knowing why the stack is fast is what lets a student notice when an AI hands back the slow version.',
    p1: 'Ask a chatbot for the next-greater-element answer and it may give the nested loops, which look correct and pass small tests. On 23 Kellyville months nobody would notice. On a year of minute-by-minute readings the loop takes hours where the stack takes a moment.',
    p2: 'A student who has traced both methods on the metro numbers recognises the pattern instantly, asks the AI for the linear version, and checks it against the brute force on a sample. That habit of verifying AI code is the most valuable thing we teach.',
    closer: 'In 2026 the Kellyville learners who understand algorithms will direct the AI tools rather than be misled by them, and that understanding still starts with writing code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons for a suburb of houses',
    intro: 'Families in Kellyville can skip the drive to a coding centre; the lesson comes to the desk at home.',
    cells: [
      { h3: 'At home', p: 'A laptop or desktop with sound is enough. Younger children usually have a parent nearby for the first lesson.' },
      { h3: 'NSW calendar', p: 'Plans follow NSW stages and pause for the state holidays, so the teaching rhythm matches the school year.' },
      { h3: 'Free first class', p: 'The trial is a real lesson, after which the teacher recommends a course and time, with nothing to pay.' },
      { h3: 'Small groups', p: 'Five to ten learners at a matched level, drawn from many places, or one to one if preferred.' },
      { h3: 'Twice weekly', p: 'A fixed slot on two days a week, around eight lessons a month, with breaks agreed in advance.' },
      {
        h3: 'India time',
        p: 'Our teachers work in India. A 5pm Kellyville lesson in summer is 11:30am India time, and 12:30pm there once Sydney leaves daylight saving.'
      }
    ],
    spec: {
      title: 'Sydney daylight saving',
      p: 'Sydney clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027; India does not change. We always quote lesson times in Sydney time.'
    }
  },
  fees: {
    h2: 'Kellyville class fees',
    intro: 'Three numbers cover the whole price.',
    first: 'The opening lesson is free and finishes with a recommendation.',
    group: 'A month of group lessons, usually eight, with five to ten learners.',
    private: 'About eight lessons a month, one teacher with one learner.',
    closer: 'Families outside India pay in US dollars, one price whatever the suburb. Payment only starts once a course and time are agreed after the trial; holidays and missed lessons are explained on the pricing page.'
  },
  reviewsH2: 'Google reviews from the families we teach',
  book: {
    h2: 'Book a first Kellyville lesson',
    intro: 'Tell us an age and something the learner enjoys. A Year 4 child might start by making a Scratch game; a Year 11 student might start by coding the stack project.',
    success: 'Thank you. Our team will contact you soon about a Kellyville lesson.'
  },
  faq: {
    h2: 'Kellyville coding and AI questions',
    intro: 'The questions Kellyville parents and adult learners ask us most.',
    items: [
      {
        q: 'How many people live in Kellyville?',
        a: 'The 2021 Census QuickStats for the Kellyville suburb record 27,011 residents, a median age of 38 and 7,590 families.'
      },
      {
        q: 'What is a monotonic stack?',
        a: 'A monotonic stack is a stack whose items are always kept in increasing or decreasing order. New items pop off any that break the order, which lets a program answer questions like how long until a bigger value in one pass over the data.'
      },
      {
        q: 'What is the Kellyville metro project?',
        a: 'Learners take 23 monthly entry counts for Kellyville Station and work out, for each month, how many months passed before a busier one. They solve it with nested loops and with a monotonic stack, then compare the work each method does.'
      },
      {
        q: 'Which month waited longest at Kellyville Station?',
        a: 'In our calculation March 2025, with 112,923 entries, waited 12 months until March 2026 recorded 115,666. August 2026 recorded 119,415 and had not been beaten when the data ended.'
      },
      {
        q: 'Is the project too hard for primary children?',
        a: 'The full algorithm suits teenagers, but younger children can act it out with labelled cups and learn the idea of a stack long before they code it.'
      },
      {
        q: 'Do you teach the NSW Digital Technologies curriculum?',
        a: 'Our lessons cover the programming skills in the NSW syllabus and go further, but we are an independent online school, not a school replacement.'
      },
      { q: 'Can adults join?', a: 'Yes. Adults learn Python, algorithms and AI one to one or in adult groups, often for work or a career change.' },
      {
        q: 'Do you have a centre in Kellyville?',
        a: 'No. Every lesson is live online and we have no premises in Australia. The phone number shown on our site is Indian.',
        boiler: true
      },
      {
        q: 'What do Kellyville coding classes cost?',
        a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one.',
        boiler: true
      },
      {
        q: 'How big are the groups?',
        a: 'Five to ten learners, matched by level and pace. If no group fits the learner\'s time, one-to-one lessons are available.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Kellyville learners',
    html: 'The <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-the-hills-shire-sydney">Hills Shire page</a> covers the wider council area, and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-castle-hill-sydney">Castle Hill</a> has a page of its own. For the city see the <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a>, and for the state, <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Kellyville and Sydney',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-the-hills-shire-sydney', label: 'The Hills Shire' },
    { href: '/vibe-coding-and-ai-agents-classes-in-chatswood-sydney', label: 'Chatswood' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-kely .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.1vw, 2.5rem); }
.cg-root.cg-kely .cg-hero h1 { font-weight: 760; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-kely .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-kely .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-kely .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.012em; }
.cg-root.cg-kely .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.8rem); }
.cg-root.cg-kely .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-kely .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kely .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-kely .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Kellyville, ABS Census 2021 QuickStats, Kellyville suburb SAL12096 (read 10 October 2026): 27,011 people; median age 38; 7,590 families; 8,555 private dwellings; 3.3 people per household; separate house 7,104 (87.7 percent; NSW 65.6; Australia 72.3); flat or apartment 420 (5.2 percent; NSW 21.7); age 5 to 9 2,125 (7.9 percent; NSW 6.2); age 10 to 14 2,159 (8.0 percent; NSW 6.2); Bachelor Degree level and above 8,588 (40.6 percent; NSW 27.8; Australia 26.3); Managers 2,622 (18.9 percent; NSW 14.6). Council: 4,000 random points inside the ABS SAL boundary all fall in The Hills Shire LGA (ABS ASGS 2021 boundaries). NSW 2027 Eastern division winter holidays Monday 5 July to Friday 16 July. IANA Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027.',
    localProject: 'Monotonic stack, next greater element. Transport for NSW monthly station entries (CC BY), Kellyville Station, Station_Type Metro, Entry, October 2024 to August 2026: 102128, 97559, 97269, 88086, 96287, 112923, 100270, 109235, 105621, 102698, 105644, 107644, 111697, 101568, 95167, 87000, 102709, 115666, 101498, 112190, 110127, 107454, 119415. Waits (months until strictly greater): 5,4,3,1,1,12,1,5,2,1,1,1,5,3,2,1,1,5,1,3,2,1,none. Ten months beaten next month; March 2025 waits 12 (beaten by March 2026, 115,666); August 2026 never beaten. Stack: 45 operations (23 pushes, 22 pops); brute-force forward scan: 61 comparisons; same values sorted descending: brute force 253 comparisons, stack 23 pushes. All 338 stations with numeric entries in all 23 months: stack 14,430 operations, brute force 21,231 comparisons; both methods agree on every wait. First-teacher dates (NSW Department of Education master dataset, Date_extracted 2026-10-02, Town_suburb Kellyville): Kellyville Public School 1873-11-01; Kellyville High School 2003-01-29; Sherwood Ridge Public School 2004-01-27.',
    requiredMentions: ['27,011', '7,590', '2,125', '7,104', '2,159', '112,923', '119,415', '115,666', 'Sherwood Ridge Public School'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Kellyville (SAL12096).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL12096' },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits, monthly station usage (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'NSW Department of Education, 2027 term dates and school holidays.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      {
        claim: 'ABS ASGS Edition 3 boundaries (SAL and LGA), geo.abs.gov.au map services.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any reason why one month was busier than another at Kellyville Station: not claimed.',
      'That station entries equal individual passengers: not claimed; the count is gate entries.',
      'Details of the School for Specific Purposes in Kellyville: left out because they concern students\' needs.',
      'Income, mortgage, rent, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'A complete list of suburbs in The Hills Shire: not given.',
      'Any affiliation with Transport for NSW, the NSW Department of Education, The Hills Shire Council or the ABS.'
    ]
  }
};
