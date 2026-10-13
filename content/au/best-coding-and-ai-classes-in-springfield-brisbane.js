'use strict';
// Springfield, Brisbane (cg- district page, Australia cluster Phase 8, row 287). Keyword slug best-coding-and-ai-classes-in-*,
// suburb page (ABS SAL32627 "Springfield (Ipswich - Qld)", City of Ipswich) under Brisbane and Queensland. Ipswich LGA figures
// belong to the Ipswich page and are kept off this one.
// Spine: appending the 2,938 timetable rows at Springfield stops to a growable array: doubling copies 4,095 elements in 13 resizes,
// growing by 16 copies 269,376 in 184. Script: scratchpad au/b11/p5_spf.py. Lesson family: amortised analysis of dynamic array growth.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'SPRINGFIELD',
    label: 'Springfield, Brisbane',
    blurb: 'Coding and AI classes for Springfield, with a project on why a growing list doubles instead of adding a little at a time.'
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
  slug: 'best-coding-and-ai-classes-in-springfield-brisbane',
  code: 'spfd',
  accent: '#6E6141',
  accentRationale: 'Springfield: a muted olive brown (hue 42.7), the one colour meeting the 12 October 2026 rule: at least 20 RGB from every Australian accent and 6 from every other colour in content, the shared stylesheets and the claims log; 6.1:1 on white and 4.9:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Springfield',
    eyebrow: 'Springfield, City of Ipswich, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Springfield' },
      { type: 'AdministrativeArea', name: 'City of Ipswich' },
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
  routeLabel: 'Springfield, Brisbane',
  title: 'Best Coding and AI Classes in Springfield, Brisbane',
  description: 'Live online coding and AI classes for Springfield learners from age 6 to adult: Scratch, Python, data structures and AI projects, in small groups or one to one.',
  ogDescription: 'A Springfield coding project: 2,938 timetable rows, three ways to grow a list, and 4,095 copies against 269,376.',
  twitterDescription: 'Springfield coding and AI classes, live online, with a free first lesson.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Springfield',
    description: 'Coding, Python, data structures and AI lessons for Springfield learners of every age, matched by level and taught live online in English.'
  },
  h1: 'Coding and AI classes in Springfield',
  capsuleQ: 'What is the best first big idea for a Springfield coder?',
  capsule: 'That the cheap-looking choice can be the expensive one. Storing the 2,938 timetable rows at Springfield stops in a list that grows by 16 slots at a time means copying 269,376 items along the way. A list that doubles when full copies 4,095. Same data, same result, about 66 times less work.',
  lead: 'Springfield sits in the City of Ipswich on the Springfield railway line, and it is a young suburb of family houses. Its stops carry 2,938 rows across the whole Translink timetable feed, enough for a learner to watch a list grow and to count what each growth rule costs.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Springfield.',
  picks: {
    eyebrow: 'Course picks for Springfield',
    h2: 'Courses for Springfield learners',
    intro: 'Start where the learner is today. The trial lesson sets the level before any course is chosen.',
    items: [
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 17', note: 'Data structures, algorithms and the cost of each step.' },
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding that builds logic before typing.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from scratch to projects with real files.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Algorithms for interviews, study and working code.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Springfield in the 2021 Census',
      h2: 'A young suburb of family houses',
      intro: 'Figures for the Springfield suburb in the City of Ipswich (ABS SAL32627) from its 2021 Census QuickStats, read on 12 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Springfield headline counts',
          head: ['Measure', 'Springfield'],
          rows: [
            ['People', '7,322'],
            ['Median age', '32'],
            ['Families', '2,018'],
            ['Private dwellings', '2,494'],
            ['People per household', '3.1'],
            ['Motor vehicles per dwelling', '2.1']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Springfield shares beside Queensland',
          head: ['Share', 'Springfield', 'Queensland'],
          rows: [
            ['Aged 5 to 9', '8.3% (605)', '6.4%'],
            ['Aged 10 to 14', '9.1% (665)', '6.6%'],
            ['Separate house', '86.8% (2,015)', '74.8%'],
            ['Train to work', '3.3% (127)', '1.1%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Under fives', p: 'There were 569 children aged 0 to 4, 7.8% of residents against 5.7% statewide.' },
            { h3: 'Driving to work', p: 'Car as driver was the journey for 61.2% of employed residents, close to the state share of 59.5%.' },
            { h3: 'One unusual week', p: 'The Census was taken in August 2021 during the pandemic, so commuting answers describe that week only.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau rounds its percentages and lightly adjusts small counts for privacy. We quote each number as published, and we never add bands together to manufacture a total.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Three ways to grow a list',
      intro: 'Learners read every timetable row at the 27 Springfield stop records, 2,938 of them, and append them one by one to an array that must be copied into a bigger block whenever it fills. Then they count the copying.',
      body: [
        {
          kind: 'table',
          caption: 'Copying needed to append 2,938 rows (our calculation)',
          head: ['Growth rule when full', 'Resizes', 'Items copied', 'Copies per row'],
          rows: [
            ['Double the size', '13', '4,095', '1.39'],
            ['Grow by half, plus one', '19', '7,161', '2.44'],
            ['Add 16 slots', '184', '269,376', '91.69']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The tempting rule',
              p: 'Adding a fixed 16 slots wastes little memory, which sounds sensible. But every resize copies everything stored so far, and with 184 resizes that adds up to over a quarter of a million copies.'
            },
            {
              h3: 'The doubling rule',
              p: 'Doubling resizes rarely, and the copies form a series 1, 2, 4 and so on that never adds up to more than the final size. Spread over every append, that is a small constant cost per row.'
            },
            {
              h3: 'The trade-off',
              p: 'Doubling leaves up to half the block empty; the half-plus-one rule wastes less space for a few more copies. Neither changes the answer, only the work.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'What Python actually does',
          p: 'On our machine, Python 3.13 resized its own list 37 times while taking all 2,938 rows, finishing at 26,040 bytes for the list structure. Its rule grows by about an eighth plus a little, between our two efficient rules.'
        },
        {
          kind: 'p',
          text: 'The row count is real Translink timetable data for stops inside the ABS outline of Springfield. The three growth rules are our model of a simple array; the Python figures are measured with sys.getsizeof in our own run.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Amortised analysis',
      h2: 'Averaging the expensive moments',
      intro: 'Most appends are instant, and a few are slow because they trigger a copy. Amortised analysis asks for the average cost per append over the whole run.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Select the timetable rows at stops inside the Springfield outline.'],
            ['2', 'Write a tiny array class with a capacity and a copy counter.'],
            ['3', 'Run each growth rule and record resizes and copies.'],
            ['4', 'Compare with sys.getsizeof on a real Python list.']
          ]
        },
        {
          kind: 'p',
          text: 'The pattern returns everywhere: hash tables resize the same way, and so do buffers that collect sensor or log data. Knowing why doubling wins lets a programmer predict a slowdown before a data set grows.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger children', p: 'Move toys between boxes of growing sizes and count the moves.' },
            { h3: 'Teenagers', p: 'Code the array class, plot copies against rows, and spot the curve that bends upward.' },
            { h3: 'Adults', p: 'Read real library source code and reason about memory against speed.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'In Springfield',
      h2: 'A station, three bus routes and the 2027 calendar',
      intro: 'Translink counts for Wednesday 21 October 2026 and the Queensland Department of Education term dates.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Springfield station', p: 'The station has two platform records in the feed. Trains make 94 of the 995 Wednesday stop visits and buses make 901.' },
            { h3: 'Routes', p: 'Three bus routes (527, 528 and 534) and nine rail service codes call inside the suburb that day.' },
            { h3: 'Back to school', p: 'Queensland state schools begin Term 1 on Wednesday 27 January 2027, ending Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'Springfield means the ABS suburb outline of about 6.68 square kilometres, not the wider Greater Springfield area. Neighbouring Springfield Central and Springfield Lakes are separate suburbs, and stops are assigned by our own point-in-polygon test.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From boxes and blocks to algorithms',
    intro: 'Use the ages as a guide only; the free lesson decides.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Blocks',
        p: 'Sequences, loops and lists in block code.',
        courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course']
      },
      {
        band: 'Ages 8 to 12',
        h3: 'Thinking steps',
        p: 'Puzzles that count moves and compare plans.',
        courses: ['problem-solving-and-computational-thinking-for-kids', 'python-ai-kids-masterclass']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Data structures',
        p: 'Lists, stacks, queues and their costs.',
        courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Algorithms in depth',
        p: 'Analysis, interviews and production code.',
        courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Do you need data structures if AI writes the code?',
    intro: 'You need them to know when the code it wrote is slow.',
    p1: 'An AI assistant will happily write a list class that grows by a fixed step, and it will pass every small test. The cost only shows up when the data grows, which is often after the code is in use.',
    p2: 'A Springfield learner who has counted 269,376 copies for 2,938 rows reads the growth rule first. That judgement, knowing which line matters, is what a programmer adds when working alongside AI.',
    closer: 'Our Springfield classes teach learners to question generated code, not just run it.',
    blogAnchor: 'the case for learning to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Taking lessons from Springfield',
    intro: 'Each lesson is live online, so nobody spends the evening on the road.',
    cells: [
      { h3: 'Real-time teaching', p: 'The teacher sees and discusses the learner\'s screen throughout.' },
      { h3: 'Terms and breaks', p: 'Lessons run through Queensland terms and rest in the school holidays.' },
      { h3: 'Trial at no cost', p: 'One free lesson and a written recommendation afterwards.' },
      { h3: 'Small classes', p: 'Fifteen to twenty learners of one level, or one to one.' },
      { h3: 'Weekly pattern', p: 'Two lessons each week, around eight a month.' },
      { h3: 'Across time zones', p: 'A 4pm Springfield class is 11:30am for our teachers in India.' }
    ],
    spec: {
      title: 'Queensland time',
      p: 'The IANA time zone database shows Queensland\'s last daylight saving season ended in March 1992, so lesson times stay fixed all year.'
    }
  },
  fees: {
    h2: 'Springfield class fees',
    intro: 'Every learner pays the same rates.',
    first: 'Your first lesson is free and ends with a learning plan.',
    group: 'Group lessons: roughly eight a month, fifteen to twenty learners.',
    private: 'Private lessons: roughly eight a month with one teacher.',
    closer: 'Fees for Springfield learners are in US dollars and start only after the trial has fixed a course and timetable. See the pricing page for holidays and missed lessons.'
  },
  reviewsH2: 'Google reviews from our families',
  book: {
    h2: 'Book a free Springfield lesson',
    intro: 'Tell us the learner\'s age and interests. A young child might start with block puzzles; a teenager might race the three list growth rules.',
    success: 'Thank you. We will get in touch about a Springfield lesson soon.'
  },
  faq: {
    h2: 'Springfield coding and AI questions',
    intro: 'Common questions from Springfield parents and adult learners.',
    items: [
      {
        q: 'How many people live in Springfield?',
        a: 'The 2021 Census counted 7,322 people in the Springfield suburb of the City of Ipswich, with a median age of 32.'
      },
      {
        q: 'What is amortised analysis?',
        a: 'It measures the average cost of an operation over a long run, so rare expensive steps, such as copying an array, are shared across the many cheap ones.'
      },
      {
        q: 'Why do lists double in size when full?',
        a: 'Because doubling keeps the total copying proportional to the number of items, while growing by a fixed amount makes the copying grow with the square of the items.'
      },
      {
        q: 'What age can children start coding?',
        a: 'Around 6, with block-based coding. Typed Python usually starts between 9 and 12, depending on reading and typing.'
      },
      {
        q: 'Are data structures too hard for teenagers?',
        a: 'No. Teenagers who can write loops in Python can study lists, stacks and queues, especially with real data to test them on.'
      },
      {
        q: 'Is Springfield part of Brisbane?',
        a: 'Springfield is in the City of Ipswich local government area, within the wider Brisbane region. This page uses figures for the Springfield suburb only.'
      },
      {
        q: 'Do you have a centre in Springfield?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Springfield classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      {
        q: 'Does a train serve Springfield?',
        a: 'Yes. Springfield station is inside the suburb outline, and the Wednesday 21 October 2026 timetable has 94 train stop visits there.'
      }
    ]
  },
  next: {
    eyebrow: 'More for Brisbane and Ipswich learners',
    h2: 'Pages nearby',
    html: 'See the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-ipswich-qld">Ipswich page</a> for the wider council area, the <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">Brisbane page</a> for the region, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland guide</a> for the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Springfield and Brisbane',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-ipswich-qld', label: 'Ipswich' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-spfd .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.5vw, 2rem); }
.cg-root.cg-spfd .cg-hero h1 { font-weight: 660; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-spfd .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-spfd .cg-eyebrow { letter-spacing: 0.1em; font-weight: 620; font-size: 0.77rem; }
.cg-root.cg-spfd .cg-section-head h2 { max-width: 21ch; }
.cg-root.cg-spfd .cg-grid-3 { gap: clamp(0.95rem, 2.3vw, 1.7rem); }
.cg-root.cg-spfd .cg-table caption { text-align: left; font-weight: 640; }
.cg-root.cg-spfd .cg-table td:nth-child(n+2) { font-variant-numeric: tabular-nums; }
.cg-root.cg-spfd .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.6rem; }
.cg-root.cg-spfd .cg-callout { border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Springfield (SAL32627, "Springfield (Ipswich - Qld)"), ABS Census 2021 QuickStats (read 12 October 2026): 7,322 people; median age 32; 2,018 families; 2,494 private dwellings; 3.1 people per household; 2.1 vehicles per dwelling; aged 0-4 569 (7.8%, Queensland 5.7%); aged 5-9 605 (8.3%, Queensland 6.4%); aged 10-14 665 (9.1%, Queensland 6.6%); separate houses 2,015 (86.8%, Queensland 74.8%); car as driver 61.2% (Queensland 59.5%); train to work 127 (3.3%, Queensland 1.1%). ABS SAL area 6.6757 square kilometres. Translink SEQ GTFS: 27 stop records in the SAL polygon; 2,938 stop_times rows across the whole feed; Wednesday 21 October 2026: 995 stop visits (bus 901, train 94); bus routes 527, 528, 534 plus 9 rail service codes; Springfield station with platforms 1 and 2. Queensland 2027 Term 1: Wednesday 27 January to Thursday 25 March. Brisbane: no daylight saving since March 1992 (IANA 2026e).',
    localProject: 'Append all 2,938 Springfield stop_times rows to a model dynamic array. Doubling: 13 resizes, 4,095 element copies (1.39 per row); grow by half plus one: 19 resizes, 7,161 copies (2.44); add 16 slots: 184 resizes, 269,376 copies (91.69). CPython 3.13.6 list measured with sys.getsizeof: 37 resizes, 26,040 bytes. Our calculation. Script: scratchpad au/b11/p5_spf.py.',
    requiredMentions: ['7,322', '2,018', '4,095', '8.3% (605)', '9.1% (665)', '86.8% (2,015)', '2,938', '269,376', 'Springfield station'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Springfield suburb and locality (SAL32627), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL32627'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026, downloaded October 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      { claim: 'Python documentation, sys.getsizeof.', url: 'https://docs.python.org/3/library/sys.html' },
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
      'City of Ipswich LGA figures: kept on the Ipswich page, not used here.',
      'Greater Springfield, Springfield Central and Springfield Lakes figures: different suburbs, not used.',
      'Passenger numbers: not claimed; the feed is a schedule.',
      'Naming the private colleges whose names appear in stop names: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any connection with Ipswich City Council, Translink or the Queensland Department of Education.'
    ]
  }
};
