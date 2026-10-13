'use strict';
// Unley, Adelaide (cg- district page, Australia cluster Phase 8, row 318). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page (ABS SAL41490, City of Unley) under Adelaide and South Australia.
// Spine: keep Unley stop records with at least 60 Wednesday visits. A comprehension that calls visits(s) in the filter
// and again in the output makes 36 calls for 21 stops; the walrus form [v for s in ids if (v := visits(s)) >= 60]
// makes 21 and returns the same 15 values. Our run, scratchpad au/b15/unly_walrus.py, GTFS v1708.
// Lesson family: the walrus operator (assignment expressions); claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'UNLEY',
    label: 'Unley, Adelaide',
    blurb: 'AI and programming classes for Unley, where the walrus operator cuts 36 function calls to 21 when filtering the suburb\'s busiest stops.'
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
  slug: 'ai-and-programming-classes-in-unley-adelaide',
  code: 'unly',
  accent: '#9B293A',
  accentRationale: 'Unley: a claret red (hue 351.1), 6.15:1 on #EDE7DA; 25.1 RGB from the nearest South Australian accent, 13.5 from any other Australian accent and 7.3 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Unley',
    eyebrow: 'Unley, City of Unley, South Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Unley' },
      { type: 'AdministrativeArea', name: 'City of Unley' },
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
  routeLabel: 'Unley, Adelaide',
  title: 'AI and Programming Classes in Unley, Adelaide',
  description: 'Live online AI and programming classes for Unley learners aged 6 to 67, from Scratch and Python to machine learning on real Adelaide data, in groups or one to one.',
  ogDescription: 'Unley programming project: 21 stop records, a filter that calls the same function twice, and one walrus operator that brings 36 calls down to 21.',
  twitterDescription: 'AI and programming for Unley learners, taught live online.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Unley',
    description: 'Level-matched online AI and programming lessons for children, teenagers and adults in Unley, Adelaide, taught live in English.'
  },
  h1: 'AI and programming classes in Unley',
  capsuleQ: 'What do Unley learners gain from AI and programming classes?',
  capsule: 'Programming skill that scales to AI work: code that does each piece of work once, models built on clean data, and the judgement to see waste in code an AI writes. Children start in Scratch at six; older learners use Python. Unley had 3,997 residents in 2021.',
  lead: 'Picking out the busy stops in Unley looks like a one-line job in Python. The obvious one-liner, though, asks for each stop\'s visit count twice: once to test it and again to keep it. Python 3.8 added an operator, nicknamed the walrus, that removes the repeat.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Unley.',
  picks: {
    eyebrow: 'Course picks for Unley',
    h2: 'Courses that write efficient code for AI work',
    intro: 'This project sits where programming meets data work. These courses build both sides; a free trial lesson fixes the level.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, with efficient data preparation.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Comprehensions, functions and modern Python syntax.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Models from first principles, on well-prepared data.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'A first look at Python and simple AI.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Unley in the Census',
      h2: 'An inner suburb of graduates and apartments',
      intro: 'The suburb of Unley (ABS code SAL41490) in Census 2021, compared with the whole state.',
      body: [
        {
          kind: 'table',
          caption: 'Unley headline figures, 2021',
          head: ['Measure', 'Unley'],
          rows: [
            ['Residents', '3,997'],
            ['Median age', '41'],
            ['Families', '1,068'],
            ['Private dwellings', '1,953'],
            ['People per household', '2.2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Unley against South Australia',
          head: ['Indicator', 'Unley', 'South Australia'],
          rows: [
            ['Adults with a bachelor degree or higher', '49.8% (1,694)', '22.7%'],
            ['Employed people in professional jobs', '40.3% (877)', '21.5%'],
            ['Flats or apartments', '27.1% (471)', '6.8%'],
            ['Employed residents working from home', '14.5% (315)', '9.6%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'There were 217 residents aged 5 to 9 and 218 aged 10 to 14.' },
            { h3: 'Teenagers', p: 'Another 182 residents were aged 15 to 19.' },
            { h3: 'A small suburb', p: 'The ABS boundary of Unley covers about 1.5 square kilometres just south of the city park lands.' }
          ]
        },
        { kind: 'p', text: 'Our Census figures are exactly as the bureau released them; its small privacy adjustments mean we never sum them.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Asking once instead of twice',
      intro: 'A function visits(stop) returns a stop record\'s scheduled visits for Wednesday 21 October 2026. We want the counts for every Unley stop record with at least 60 visits. The natural comprehension calls visits() in the condition and again in the result.',
      body: [
        {
          kind: 'table',
          caption: 'Two versions of the filter (our run, Python 3.13.6)',
          head: ['Version', 'Stops kept', 'Calls to visits()'],
          rows: [
            ['[visits(s) for s in ids if visits(s) >= 60]', '15', '36'],
            ['[v for s in ids if (v := visits(s)) >= 60]', '15', '21']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Where 36 comes from',
              p: 'Every one of the 21 stop records is tested once, and each of the 15 that pass is asked again for its value: 21 plus 15.'
            },
            {
              h3: 'What := does',
              p: 'The walrus operator assigns and returns a value in one expression, so the count is stored in v during the test and reused in the result.'
            },
            { h3: 'Same answer', p: 'Both versions return identical lists. The 15 kept stop records account for 1,116 of the suburb\'s 1,352 Wednesday visits.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why the repeat matters',
          p: 'Here visits() is a quick lookup, so 15 extra calls cost nothing visible. If it read the timetable file, each extra call would be another pass over 1,152,604 rows. Code that repeats work is cheap on samples and painful on real data, and AI pipelines spend most of their time on exactly this kind of data preparation.'
        },
        {
          kind: 'p',
          text: 'The timetable is Adelaide Metro open data (feed version 1708). Unley membership is our point-in-boundary check, and the call counts come from a counter inside visits() in our own run.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Modern Python',
      h2: 'Where the walrus helps, and where it does not',
      intro: 'Assignment expressions are useful in a few clear patterns and confusing elsewhere.',
      body: [
        {
          kind: 'table',
          caption: 'Patterns for :=',
          head: ['Pattern', 'Example', 'Verdict'],
          rows: [
            ['Filter and keep a computed value', '[v for s in ids if (v := f(s)) >= 60]', 'Good use'],
            ['Read until empty', 'while (line := f.readline()):', 'Good use'],
            ['Reuse a regex match', 'if (m := re.search(p, s)):', 'Good use'],
            ['Assign inside a long expression just to save a line', 'x = (y := 5) + y', 'Avoid, hard to read']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Write down an answer once and point to it, instead of working it out a second time.' },
            { h3: 'Secondary learners', p: 'Add a call counter to a function, rerun the Unley filter both ways and explain the 36 and 21.' },
            { h3: 'Adults', p: 'Look for repeated expensive calls in data-cleaning scripts, especially inside comprehensions.' }
          ]
        },
        {
          kind: 'p',
          text: 'A plain loop with a variable does the same job and some teams prefer it. The goal is not clever syntax but noticing duplicated work, whichever way you choose to remove it.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Unley',
      h2: 'King William Road and a tram stop',
      intro: 'Local markers from the timetable for Wednesday 21 October 2026.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Stop visits', p: 'Unley\'s 21 stop records had 1,352 scheduled visits on 20 routes, by our count.' },
            { h3: 'Busiest records', p: 'Stop 1 on King William Road had 134 visits, and the Stop 1 Greenhill Road record, served by trams, had 112.' },
            { h3: 'Mix', p: 'Buses made 1,233 of the visits, trams 112 and school bus services 7.' }
          ]
        },
        {
          kind: 'spec',
          title: 'The suburb, not the City of Unley',
          p: 'These figures cover the suburb of Unley only. Parkside, Fullarton, Malvern, Hyde Park, Goodwood and Wayville surround it inside or beside the City of Unley, and their figures are separate.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From writing it down once to efficient pipelines',
    intro: 'The trial lesson places each learner; these bands are only indicative.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games and puzzles about doing things in order.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI ideas',
        p: 'First code and simple learning programs.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Machine learning',
        p: 'Data preparation and models in Python.',
        courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Applied AI',
        p: 'Data pipelines and models for study and work.',
        courses: ['ai-ml-masterclass-complete-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI writes the comprehension. Does it notice the repeat?',
    intro: 'Not reliably. The double-call version is common in the code AI tools learned from, and it works.',
    p1: 'Ask an assistant for the busy Unley stops and you may well get [visits(s) for s in ids if visits(s) >= 60]. It is correct, readable and does nearly twice the work it needs. On a timetable lookup that waste is invisible; on a model-scoring function it is not.',
    p2: 'Learners who have counted the calls themselves spot the pattern immediately and ask for the walrus form or a simple loop. Seeing hidden cost in correct code is a skill AI does not replace.',
    closer: 'In Unley, the learner who counts the calls writes code that stays fast on real data.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Unley classes over video',
    intro: 'Lessons are live online, so learners join from home.',
    cells: [
      { h3: 'Code read aloud', p: 'Each line is explained by the learner while the teacher watches.' },
      { h3: 'Follows SA terms', p: 'Plans fit the state school year, with breaks in the holidays.' },
      { h3: 'Try first', p: 'A full lesson at no cost, then a recommendation in writing.' },
      { h3: 'Level groups', p: 'Fifteen to twenty learners at the same stage, or private lessons.' },
      { h3: 'Weekly pair', p: 'Two set lessons each week, about eight a month.' },
      { h3: 'India time', p: 'Our teachers are in India, so a 7pm Unley class starts at 2pm India time in summer and 3pm from April.' }
    ],
    spec: {
      title: 'Daylight saving and India',
      p: 'South Australia runs daylight saving from the first Sunday in October to the first Sunday in April (IANA time zone database); India keeps one time, so the difference changes between five and four hours.'
    }
  },
  fees: {
    h2: 'Unley class fees',
    intro: 'Three prices for every learner.',
    first: 'The opening lesson is free and finishes with advice in writing.',
    group: 'About eight group lessons a month, fifteen to twenty in a class.',
    private: 'About eight private lessons a month with one teacher.',
    closer: 'Unley families pay in US dollars once the trial has settled a course and time. The pricing page explains holidays and missed lessons.'
  },
  reviewsH2: 'Families and students review us on Google',
  book: {
    h2: 'Book a free Unley class',
    intro: 'Tell us the learner\'s age and interests. A teen might count calls in the Unley filter; a child might begin with a Scratch memory game.',
    success: 'Thank you. We will get in touch soon about an Unley class.'
  },
  faq: {
    h2: 'Unley AI and programming questions',
    intro: 'Questions Unley parents and adult learners raise.',
    items: [
      {
        q: 'How many people live in Unley?',
        a: 'The 2021 Census QuickStats count 3,997 residents in the suburb of Unley, with 1,953 private dwellings and a median age of 41.'
      },
      {
        q: 'What is the walrus operator in Python?',
        a: 'The := operator, added in Python 3.8, assigns a value to a variable inside an expression and returns it, so a result can be tested and reused without computing it twice.'
      },
      {
        q: 'When should I use :=?',
        a: 'When it removes repeated work or a repeated call, as in filtering comprehensions, read loops and regular expression matches. Avoid it where a plain assignment is clearer.'
      },
      {
        q: 'What did the Unley example measure?',
        a: 'Filtering 21 Unley stop records for at least 60 Wednesday visits made 36 calls without the walrus operator and 21 with it, returning the same 15 values.'
      },
      {
        q: 'At what age can children learn AI?',
        a: 'From six through Scratch games about patterns; training real models in Python usually begins around thirteen.'
      },
      { q: 'Are Claude-based courses available to teens?', a: 'No. Claude-based courses are for adults aged 18 and over; teens use other AI tools.' },
      {
        q: 'Is there a classroom in Unley?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Unley learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can Unley groups study Copilot Studio?', a: 'No. Copilot Studio is offered one to one only; groups write agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Adelaide and South Australia',
    h2: 'More for Unley learners',
    html: 'Try <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">the Adelaide page</a> for the city and <a class="cg-inline-link" href="/coding-classes-for-kids-adelaide">coding for Adelaide kids</a> for children. Along the Murray, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-murray-bridge">Murray Bridge</a> has a page too, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">the South Australia guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Unley and Adelaide',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/vibe-coding-and-ai-agents-classes-in-murray-bridge', label: 'Murray Bridge' },
    { href: '/coding-classes-for-kids-adelaide', label: 'Kids in Adelaide' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' }
  ],
  personalityCss: `
.cg-root.cg-unly .cg-hero-grid { align-items: end; gap: clamp(1.12rem, 3.18vw, 2.58rem); }
.cg-root.cg-unly .cg-hero h1 { font-weight: 672; letter-spacing: -0.018em; line-height: 1.06; }
.cg-root.cg-unly .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.72rem 0 0.72rem 1.22rem; }
.cg-root.cg-unly .cg-eyebrow { letter-spacing: 0.132em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-unly .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.012em; }
.cg-root.cg-unly .cg-grid-3 { gap: clamp(0.86rem, 2.22vw, 1.7rem); }
.cg-root.cg-unly .cg-table caption { font-style: italic; font-weight: 605; text-align: left; }
.cg-root.cg-unly .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-unly .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.82rem; }
.cg-root.cg-unly .cg-callout { border-left-width: 3px; border-radius: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Unley (SAL41490), City of Unley. ABS Census 2021 QuickStats (read 13 October 2026): 3,997 people; median age 41; 1,068 families; 1,953 private dwellings; 2.2 per household; bachelor or higher 1,694 (49.8%, SA 22.7%); professionals 877 (40.3%, SA 21.5%); flats 471 (27.1%, SA 6.8%); worked at home 315 (14.5%, SA 9.6%); aged 5-9 217; 10-14 218; 15-19 182. ABS SAL area 1.5048 sq km; council by ABS LGA point query. Adelaide Metro GTFS v1708, Wednesday 21 October 2026: 21 stop records; 1352 visits (bus 1233, tram 112, school bus 712 7); 20 routes; Stop 1 King William Rd North West side 134; Stop 1 Greenhill Rd 112 (tram). Neighbours (ABS touches): Adelaide, Fullarton, Goodwood, Hyde Park, Malvern, Parkside, Wayville.',
    localProject: 'Walrus operator. unly_walrus.py: Counter of Wednesday visits per Unley stop id; threshold >= 60; [visits(s) for s in ids if visits(s) >= 60] -> 15 kept, 36 calls; [v for s in ids if (v := visits(s)) >= 60] -> 15 kept, 21 calls, identical lists; kept visits 1,116 of 1,352. Python 3.13.6.',
    requiredMentions: ['1,953', '1,694', '218', 'King William Road', 'Greenhill Road', 'Wayville', '36 calls', 'walrus', '1,116'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Unley suburb and locality (SAL41490), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL41490'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities and Local Government Areas boundary services, used for our point-in-boundary checks and areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Department for Infrastructure and Transport (South Australia), Adelaide Metro General Transit Feed, version 1708 (valid 9 October 2026 to 9 April 2027), Creative Commons Attribution 3.0 Australia per its data.gov.au listing; downloaded 13 October 2026.',
        url: 'https://data.gov.au/data/dataset/https-gtfs-adelaidemetro-com-au'
      },
      { claim: 'PEP 572, Assignment Expressions (Python 3.8): the := operator.', url: 'https://peps.python.org/pep-0572/' },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Adelaide, rule AS, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'That the walrus form is always faster in practice: not claimed; the page measures calls, not time.',
      'Passenger numbers at Unley stops: not claimed.',
      'Figures for the City of Unley as a whole: not used.',
      'School term dates: not given; official SA term-date pages refused automated access (HTTP 403).',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Unley or Adelaide Metro.'
    ]
  }
};
